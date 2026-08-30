/* =============================================================
   TOOLKIT — the index (§20) and the single-tool host.

   The tools that compute. The host page loads the tool
   definition lazily, mounts it through the shared kit, and lets
   the kit own all interaction from that point — so state, focus
   and persistence behave identically in every tool.
   ============================================================= */

import { esc, md, plural } from '../core/dom.js'
import { I } from '../core/icons.js'
import { href } from '../core/router.js'
import { TOOL_META, TOOL_GROUPS, toolMeta, loadTool, situationsForTool } from '../tools/index.js'
import { boot } from '../core/data.js'
import { toolsUsed, loadTool as loadToolState } from '../core/store.js'
import { skillsForTool } from '../data/skills.js'
import {
  pageHead, crumbs, sectionHead, toolCard, situationCard, grid, errorState,
  loadingState, saveButton, jumpNav, chip
} from './parts.js'

/* =============================================================
   INDEX — tools
   ============================================================= */
export default async function toolsIndex () {
  const used = toolsUsed()

  const html = `
  <div class="shell">
    ${pageHead({
      eyebrow: 'The toolkit',
      title: `${TOOL_META.length} tools that actually compute`,
      lede: 'Not printable worksheets. Each one takes what you type, works out something you could not see by staring at the problem, and gives you an honest reading — including when the honest reading is that your two options are equivalent and the real question is one you have not written down.',
      accent: 'clay',
      meta: `<span class="chip">${I.tool}${plural(TOOL_META.length, 'tool')}</span>
             <span class="chip">${I.key}Saved on this device</span>
             ${used ? `<span class="chip chip-ac">${I.check}${plural(used, 'tool')} with saved work</span>` : ''}`
    })}

    <div class="band-tight">
      ${jumpNav(TOOL_GROUPS.map(g => ({ id: g.id.toLowerCase(), label: g.id })))}

      <div class="callout callout-info" style="margin-top:var(--s-6);max-width:80ch">
        <span class="lab">How these behave</span>
        <p>Everything you enter stays in this browser. Nothing is uploaded, and there is no account. Each tool
          remembers your work automatically, so you can leave a decision half-thought-through and come back to it.
          Every tool can copy or download its result as plain text if you want it somewhere permanent.</p>
      </div>

      ${TOOL_GROUPS.map(g => {
        const rows = TOOL_META.filter(t => t.group === g.id)
        return `
        <section class="sec" id="${g.id.toLowerCase()}">
          ${sectionHead(g.id, `<span class="t-small faint">${esc(g.blurb)}</span>`)}
          ${grid(rows.map(t => cardWithState(t)), 3)}
        </section>`
      }).join('')}

      <section class="sec" id="honesty">
        <div class="slab" data-accent="council">
          <p class="eyebrow">What a tool can and cannot do</p>
          <h2 class="t-title" style="margin-block:var(--s-3) var(--s-5);max-width:34ch">A number does not make a decision defensible.</h2>
          <div class="grid g-2">
            <div>
              <h3 class="t-label" style="color:var(--ac)">What they do well</h3>
              <p class="t-small muted" style="margin-top:6px;line-height:1.65">Expose what you have actually said.
                Most people discover their real criteria only after weighting them, and discover their real fear only
                after writing the risk down. That is the value — not the arithmetic.</p>
            </div>
            <div>
              <h3 class="t-label" style="color:var(--ac)">What they cannot do</h3>
              <p class="t-small muted" style="margin-top:6px;line-height:1.65">Score what you did not enter. If a
                result feels wrong, that is information: usually a criterion you care about is missing, or you have
                weighted something at what you think it should be worth rather than what it is worth to you.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>`

  return { title: 'Toolkit', html, accent: 'clay' }
}

function cardWithState (t) {
  const has = loadToolState(t.id) != null
  const base = toolCard(t)
  if (!has) return base
  return base.replace('</a>',
    `<div class="card-foot card-foot-line"><span class="t-meta" style="color:var(--ac)">${I.check} You have saved work here</span></div></a>`)
}

/* =============================================================
   ONE TOOL — tool/:id
   ============================================================= */
export async function toolView (ctx) {
  const meta = toolMeta(ctx.params.id)
  if (!meta) {
    return {
      title: 'Not found',
      html: `<div class="band"><div class="shell">${errorState(
        'No such tool',
        `The toolkit has ${TOOL_META.length}. The index lists all of them by what they decide.`,
        false)}</div></div>`,
      notFound: true
    }
  }

  let def
  try {
    def = await loadTool(meta.id)
  } catch (err) {
    return {
      title: meta.name,
      html: `<div class="band"><div class="shell">${errorState(
        'This tool did not load',
        'The tool code could not be fetched. Reload the page — if it keeps happening, your connection dropped mid-download.')}</div></div>`
    }
  }

  const skills = skillsForTool(meta.id)

  /* Siblings in the same group first. A group of one (Money) would
     otherwise show nothing, so fall back to the tools that the same
     skills also teach — a weaker link, but a real one. */
  const sameGroup = TOOL_META.filter(t => t.group === meta.group && t.id !== meta.id)
  const viaSkill = sameGroup.length ? [] : (() => {
    const ids = new Set(skills.flatMap(sk => sk.tools || []))
    ids.delete(meta.id)
    return TOOL_META.filter(t => ids.has(t.id))
  })()
  const related = sameGroup.length ? sameGroup : viaSkill
  const relatedLabel = sameGroup.length
    ? `Other ${meta.group.toLowerCase()} tools`
    : 'Tools the same skills use'

  /* The playbooks that send you here. Corpus load is already warm by
     the time anyone reaches a tool page, so this costs nothing — and
     it is the one thing that makes a tool feel connected to the rest
     of the site rather than a floating calculator. */
  let sits = []
  try {
    /* boot() hands back the whole envelope, not the array — the
       situation list lives under .situations inside it. */
    const { situations } = await boot()
    sits = situationsForTool(meta.id, situations.situations || []).slice(0, 6)
  } catch { /* A tool must still work with no corpus. */ }

  /* Listed in the order the sections actually appear, so a jump
     never sends you backwards up the page. "Reading the result" is
     omitted: it sits inside the "when" section, not after it. */
  const jumps = [
    ...(def.when && def.when.length ? [{ id: 'when', label: 'When to use it' }] : []),
    { id: 'work', label: 'The tool' },
    ...(sits.length ? [{ id: 'situations', label: 'Situations' }] : []),
    ...(skills.length ? [{ id: 'skills', label: 'The skill' }] : []),
    ...(related.length ? [{ id: 'related', label: 'Related tools' }] : [])
  ]

  const html = `
  <div class="shell">
    ${crumbs([
      { label: 'Toolkit', to: 'tools' },
      { label: meta.group, to: `tools#${meta.group.toLowerCase()}` },
      { label: meta.name }
    ])}

    ${pageHead({
      eyebrow: `${meta.group} tool`,
      title: def.name || meta.name,
      lede: def.purpose || meta.blurb,
      accent: meta.accent,
      meta: `<span class="chip">${I.tool}${esc(meta.group)}</span>
             <span class="chip">${I.key}Saves as you type</span>
             ${sits.length ? `<span class="chip">${I.alert}${plural(sits.length, 'situation')} use this</span>` : ''}`,
      actions: `${saveButton(`tool:${meta.id}`, 'Save this tool')}
        <a class="btn btn-ghost" href="${href('tools')}">${I.back}All tools</a>`
    })}

    <div class="band-tight">
      ${jumps.length > 2 ? jumpNav(jumps) : ''}

      ${def.when && def.when.length ? `
      <section class="sec" id="when">
        ${sectionHead('When to reach for this one', `<span class="t-small faint">${esc(meta.group)} · ${plural(def.when.length, 'signal')}</span>`)}
        <div class="grid g-2" style="margin-top:var(--s-4)">
          <ul class="marklist goodlist">
            ${def.when.map(w => `<li>${md(w)}</li>`).join('')}
          </ul>
          ${def.reads ? `<div class="callout callout-warning" id="reading">
            <span class="lab">Reading the result honestly</span><p>${md(def.reads)}</p></div>` : ''}
        </div>
      </section>` : ''}

      <section class="sec" id="work">
        ${sectionHead('Do the work here', `<span class="t-small faint">Stays in this browser</span>`)}
        <div data-tool-host>${loadingState('Loading the tool')}</div>
      </section>

      ${sits.length ? `
      <section class="sec" id="situations">
        ${sectionHead('Situations that send you here',
          `<a class="btn btn-ghost btn-sm" href="${href('situations')}">All situations${I.arrow}</a>`)}
        <p class="t-small muted" style="max-width:76ch;margin-bottom:var(--s-4)">Each of these playbooks names
          this tool as the place to do the thinking. Reading the moves first usually tells you what to type in.</p>
        ${grid(sits.map(situationCard), 3)}
      </section>` : ''}

      ${skills.length ? `
      <section class="sec" id="skills">
        ${sectionHead('The skill this belongs to')}
        <p class="t-small muted" style="max-width:76ch;margin-bottom:var(--s-4)">A tool is only the working
          surface. The skill is where the judgment behind it is taught.</p>
        <nav class="rail-links" style="max-width:60ch">
          ${skills.map(s => `<a class="rail-link" href="${href('skill/' + s.id)}">${I.target}${esc(s.name)}</a>`).join('')}
        </nav>
      </section>` : ''}

      ${related.length ? `
      <section class="sec" id="related">
        ${sectionHead(relatedLabel,
          `<a class="btn btn-ghost btn-sm" href="${href('tools')}">The whole toolkit${I.arrow}</a>`)}
        ${grid(related.map(toolCard), 3)}
      </section>` : ''}
    </div>
  </div>`

  return {
    title: def.name || meta.name,
    html,
    accent: meta.accent,
    recent: { id: `tool:${meta.id}`, kind: 'tool', title: meta.name, route: `tool/${meta.id}` },
    mount: root => {
      const host = root.querySelector('[data-tool-host]')
      if (!host) return
      host.innerHTML = ''
      /* The kit owns everything from here: state, persistence, focus. */
      return mountKit(def, host)
    }
  }
}

/* Imported lazily so the toolkit index never pulls the kit in. */
async function mountKit (def, host) {
  const { mountTool } = await import('../tools/kit.js')
  return mountTool(def, host)
}
