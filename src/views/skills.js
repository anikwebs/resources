/* =============================================================
   SKILLS — the index (§10) and the single-skill page.

   A situation is something that happens to you; a skill is
   something you can get better at. The index is organised by
   domain, and each skill page pulls together everything in the
   library that actually builds it: lessons, playbooks, tools,
   decision trees, scenarios, a practice instruction and the
   sentence worth keeping.
   ============================================================= */

import { esc, md, plural, strip } from '../core/dom.js'
import { I } from '../core/icons.js'
import { href } from '../core/router.js'
import { boot, makeIndex } from '../core/data.js'
import { doneCount, getNote } from '../core/store.js'
import {
  SKILLS, DOMAINS, LEVELS, skillById, skillsOfDomain, domainById, skillStats
} from '../data/skills.js'
import { PATHS } from '../data/paths.js'
import { TOOL_META } from '../tools/index.js'
import { TREES } from '../data/trees.js'
import { SCENARIOS } from '../data/scenarios.js'
import {
  pageHead, crumbs, sectionHead, skillCard, unitCard, situationCard, toolCard,
  treeCard, scenarioCard, errorState, grid, saveButton, doneButton,
  jumpNav, chip
} from './parts.js'

const LEVEL_ORDER = ['foundation', 'core', 'advanced']

const decorate = s => {
  const d = domainById(s.domain) || {}
  return { ...s, domainTitle: d.title, accent: d.accent, levelLabel: (LEVELS[s.level] || {}).label }
}

/* =============================================================
   INDEX  —  skills   |   skills/:domain
   ============================================================= */
export default async function skillsIndex (ctx) {
  const domainId = ctx.params.domain || ctx.query.d || ''
  const domain = domainId ? domainById(domainId) : null

  if (domainId && !domain) {
    return {
      title: 'Not found',
      html: `<div class="band"><div class="shell">${errorState(
        'No such area', 'The seven areas are Work, Career, Communication, Daily life, Money, Learning and Digital life.', false)}</div></div>`,
      notFound: true
    }
  }

  const list = domain ? skillsOfDomain(domain.id) : SKILLS
  const doneAll = SKILLS.reduce((n, s) => n + doneCount(s.units || []), 0)

  const html = `
  <div class="shell">
    ${domain ? crumbs([{ label: 'Skills', to: 'skills' }, { label: domain.title }]) : ''}
    ${pageHead({
      eyebrow: domain ? 'Skill area' : 'Skills',
      title: domain ? domain.title : 'What you want to get better at',
      lede: domain ? domain.lede
        : `${SKILLS.length} skills across ${DOMAINS.length} areas. Each one names the signals that you need it, the material in this library that builds it, and one specific thing to practise this week. No badges, no levels you cannot see the criteria for.`,
      accent: domain ? domain.accent : 'forest',
      meta: `<span class="chip">${I.target}${plural(list.length, 'skill')}</span>
             ${doneAll ? `<span class="chip chip-ac">${I.check}${doneAll} lessons completed</span>` : ''}`
    })}

    <div class="band-tight">
      <div class="filters" role="group" aria-label="Filter by area">
        <a class="chip${domain ? '' : ' chip-solid'}" href="${href('skills')}">All areas<span class="faint">&nbsp;${SKILLS.length}</span></a>
        ${DOMAINS.map(d => `<a class="chip${domain && domain.id === d.id ? ' chip-solid' : ''}"
          data-accent="${d.accent}" href="${href('skills/' + d.id)}">${esc(d.title)}<span class="faint">&nbsp;${skillsOfDomain(d.id).length}</span></a>`).join('')}
      </div>

      ${domain ? levelGroups(list) : DOMAINS.map(d => domainBand(d)).join('')}
    </div>
  </div>`

  return { title: domain ? domain.title : 'Skills', html, accent: domain ? domain.accent : 'forest' }
}

function domainBand (d) {
  const list = skillsOfDomain(d.id)
  return `
  <section class="sec" id="${esc(d.id)}" data-accent="${d.accent}">
    ${sectionHead(d.title, `<a class="btn btn-ghost btn-sm" href="${href('skills/' + d.id)}">Just this area${I.arrow}</a>`)}
    <p class="t-small muted" style="max-width:70ch;margin-bottom:var(--s-5)">${esc(d.lede)}</p>
    ${grid(list.map(s => skillCard(decorate(s), skillStats(s))), 3)}
  </section>`
}

function levelGroups (list) {
  return LEVEL_ORDER.map(lv => {
    const rows = list.filter(s => s.level === lv)
    if (!rows.length) return ''
    const meta = LEVELS[lv] || {}
    return `
    <section class="sec" id="${lv}">
      ${sectionHead(meta.label || lv, `<span class="t-small faint">${esc(meta.d || '')}</span>`)}
      ${grid(rows.map(s => skillCard(decorate(s), skillStats(s))), 3)}
    </section>`
  }).join('')
}

/* =============================================================
   ONE SKILL  —  skill/:id
   ============================================================= */
export async function skillView (ctx) {
  const s = skillById(ctx.params.id)
  if (!s) {
    return {
      title: 'Not found',
      html: `<div class="band"><div class="shell">${errorState(
        'That skill is not in this system',
        'The index lists all twenty-nine.',
        false)}</div></div>`,
      notFound: true
    }
  }

  const d = domainById(s.domain) || {}
  const { manifest, situations } = await boot()
  const ix = makeIndex(manifest)
  const sitById = new Map((situations.situations || []).map(x => [x.id, x]))

  const units = (s.units || []).map(id => ix.unit(id)).filter(Boolean)
    .map(u => ({ ...u, trackTitle: (ix.track(u.track) || {}).name, accent: (ix.track(u.track) || {}).accent }))
  const sits = (s.situations || []).map(id => sitById.get(id)).filter(Boolean)
  const tools = (s.tools || []).map(id => TOOL_META.find(t => t.id === id)).filter(Boolean)
  const trees = (s.trees || []).map(id => TREES.find(t => t.id === id)).filter(Boolean)
  const scns = (s.scenarios || []).map(id => SCENARIOS.find(x => x.id === id)).filter(Boolean)
  const paths = PATHS.filter(p => p.stages.some(st =>
    (st.lessons || []).some(id => (s.units || []).includes(id)) ||
    (st.situations || []).some(id => (s.situations || []).includes(id))))

  const doneUnits = doneCount(s.units || [])
  const pct = (s.units || []).length ? Math.round((doneUnits / s.units.length) * 100) : 0

  const jumps = [
    ...(s.signals ? [{ id: 'signals', label: 'Do you need this' }] : []),
    ...(units.length ? [{ id: 'learn', label: 'Learn it' }] : []),
    ...(sits.length ? [{ id: 'apply', label: 'Use it' }] : []),
    ...(tools.length || trees.length ? [{ id: 'tools', label: 'Tools' }] : []),
    ...(scns.length ? [{ id: 'practise', label: 'Practise' }] : []),
    { id: 'this-week', label: 'This week' }
  ]

  const html = `
  <div class="shell">
    ${crumbs([
      { label: 'Skills', to: 'skills' },
      { label: d.title || 'Area', to: `skills/${s.domain}` },
      { label: s.name }
    ])}

    ${pageHead({
      eyebrow: `${d.title || ''} · ${(LEVELS[s.level] || {}).label || ''}`,
      title: s.name,
      lede: s.blurb,
      accent: d.accent,
      meta: `
        <span class="chip">${I.book}${plural((s.units || []).length, 'lesson')}</span>
        <span class="chip">${I.alert}${plural(sits.length, 'playbook')}</span>
        ${tools.length ? `<span class="chip">${I.tool}${plural(tools.length, 'tool')}</span>` : ''}
        ${pct ? `<span class="chip chip-ac">${I.check}${pct}% read</span>` : ''}`,
      actions: `${saveButton(`skill:${s.id}`, 'Save this skill')}
        ${units.length ? `<a class="btn btn-primary" href="${href(`read/${units[0].track}/${units[0].id}`)}">${I.play}Start with the first lesson</a>` : ''}`
    })}

    <div class="band-tight">
      ${jumpNav(jumps)}

      <section class="sec" id="why">
        <div class="sec-head"><h2>Why this one matters</h2></div>
        <div class="prose" style="max-width:70ch"><p>${md(s.why)}</p></div>
      </section>

      ${s.signals && s.signals.length ? `
      <section class="sec" id="signals">
        ${sectionHead('You probably need this if', '<span class="t-label faint">Honest self-check</span>')}
        <ul class="marklist badlist" style="max-width:70ch">
          ${s.signals.map(x => `<li>${md(x)}</li>`).join('')}
        </ul>
      </section>` : ''}

      ${units.length ? `
      <section class="sec" id="learn">
        ${sectionHead('Learn it', `<span class="t-small faint">${doneUnits} of ${units.length} read</span>`)}
        ${(s.units || []).length ? `<div class="meter" style="margin-bottom:var(--s-5);max-width:340px"><span style="width:${pct}%"></span></div>` : ''}
        ${grid(units.map(u => unitCard(u, { showTrack: true })), 3)}
      </section>` : ''}

      ${sits.length ? `
      <section class="sec" id="apply">
        ${sectionHead('Where it gets tested', `<a class="btn btn-ghost btn-sm" href="${href('situations')}">All situations${I.arrow}</a>`)}
        <p class="t-small muted" style="margin-bottom:var(--s-5);max-width:70ch">These are the real situations this skill
          exists for. Read one now rather than when it happens — the whole point is not having to think from scratch.</p>
        ${grid(sits.map(situationCard), 3)}
      </section>` : ''}

      ${tools.length || trees.length ? `
      <section class="sec" id="tools">
        ${sectionHead('Somewhere to actually do the thinking')}
        ${grid([...tools.map(toolCard), ...trees.map(t => treeCard(t))], 3)}
      </section>` : ''}

      ${scns.length ? `
      <section class="sec" id="practise">
        ${sectionHead('Practise being wrong first')}
        ${grid(scns.map(x => scenarioCard(x)), 3)}
      </section>` : ''}

      <section class="sec" id="this-week" data-accent="${d.accent}">
        ${sectionHead('This week')}
        <div class="grid g-2">
          <div class="card card-pad-lg">
            <p class="eyebrow">Practise this</p>
            <div class="prose" style="margin-top:var(--s-3)"><p>${md(s.practice)}</p></div>
            <div style="margin-top:var(--s-5)">${doneButton(`skill-practice:${s.id}`)}</div>
          </div>
          <div class="stack">
            <div class="callout callout-info">
              <span class="lab">Remember this</span>
              <p>${md(s.remember)}</p>
            </div>
            ${s.aiEdge ? `
              <div class="callout">
                <span class="lab">${strip('The AI advantage')}</span>
                <p>${md(s.aiEdge)}</p>
              </div>` : ''}
          </div>
        </div>

        <div class="field" style="margin-top:var(--s-6);max-width:70ch">
          <label for="skill-note">What happened when you tried it</label>
          <textarea class="textarea" id="skill-note" data-note="skill:${esc(s.id)}"
            placeholder="Two lines. What you did, and what you would do differently.">${esc(getNote('skill:' + s.id))}</textarea>
          <span class="hint">Saves as you type, on this device only.</span>
        </div>
      </section>

      ${paths.length ? `
      <section class="sec" id="paths">
        ${sectionHead('Ordered routes that include this')}
        <nav class="rail-links" style="max-width:60ch">
          ${paths.map(p => `<a class="rail-link" href="${href('path/' + p.id)}">${I.route}${esc(p.title)}</a>`).join('')}
        </nav>
      </section>` : ''}

      ${siblings(s)}
    </div>
  </div>`

  return {
    title: s.name,
    html,
    accent: d.accent,
    recent: { id: `skill:${s.id}`, kind: 'skill', title: s.name, route: `skill/${s.id}` }
  }
}

function siblings (s) {
  const rest = skillsOfDomain(s.domain).filter(x => x.id !== s.id).slice(0, 3)
  if (!rest.length) return ''
  return `
  <section class="sec" id="next">
    ${sectionHead('Next in this area')}
    ${grid(rest.map(x => skillCard(decorate(x), skillStats(x))), 3)}
  </section>`
}
