/* =============================================================
   TOOLKIT — the index (§20) and the single-tool host.

   Seventeen tools that compute. The host page loads the tool
   definition lazily, mounts it through the shared kit, and lets
   the kit own all interaction from that point — so state, focus
   and persistence behave identically in every tool.
   ============================================================= */

import { esc, md, plural } from '../core/dom.js'
import { I } from '../core/icons.js'
import { href } from '../core/router.js'
import { TOOL_META, TOOL_GROUPS, toolMeta, loadTool } from '../tools/index.js'
import { toolsUsed, loadTool as loadToolState } from '../core/store.js'
import { skillsForTool } from '../data/skills.js'
import {
  pageHead, crumbs, sectionHead, toolCard, grid, errorState, loadingState,
  saveButton, jumpNav, chip
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
      title: 'Seventeen tools that actually compute',
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
        'The toolkit has seventeen. The index lists all of them by what they decide.',
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
  const related = TOOL_META.filter(t => t.group === meta.group && t.id !== meta.id)

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
      actions: `${saveButton(`tool:${meta.id}`, 'Save this tool')}
        <a class="btn btn-ghost" href="${href('tools')}">${I.back}All tools</a>`
    })}

    <div class="band-tight">
      ${def.when && def.when.length ? `
        <details class="acc" style="margin-bottom:var(--s-6)">
          <summary>When to reach for this one${I.chevDown}</summary>
          <div class="acc-body">
            <ul class="marklist" style="max-width:70ch">
              ${def.when.map(w => `<li>${md(w)}</li>`).join('')}
            </ul>
            ${def.reads ? `<div class="callout callout-warning" style="margin-top:var(--s-4)">
              <span class="lab">Reading the result honestly</span><p>${md(def.reads)}</p></div>` : ''}
          </div>
        </details>` : ''}

      <div data-tool-host>${loadingState('Loading the tool')}</div>

      ${skills.length ? `
      <section class="sec" id="skills">
        ${sectionHead('The skill this belongs to')}
        <nav class="rail-links" style="max-width:60ch">
          ${skills.map(s => `<a class="rail-link" href="${href('skill/' + s.id)}">${I.target}${esc(s.name)}</a>`).join('')}
        </nav>
      </section>` : ''}

      ${related.length ? `
      <section class="sec" id="related">
        ${sectionHead(`Other ${meta.group.toLowerCase()} tools`)}
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
