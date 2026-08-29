/* =============================================================
   HOME — §9.
   The page has to answer four questions in order, without the
   reader having to work for any of them:

     What is this?        hero + philosophy
     Why should I care?   the promise strip, the honest limits
     What can I do here?  situations, skills, tools, AI, practice
     Where do I begin?    one primary route, plus "continue"

   The journey is Curiosity → Discovery → Understanding →
   Practice → Action → Return, and the page is ordered that way.
   ============================================================= */

import { esc, md, num } from '../core/dom.js'
import { I } from '../core/icons.js'
import { href } from '../core/router.js'
import { boot, makeIndex } from '../core/data.js'
import {
  store, doneCount, toolsUsed, scenarioCount, activePaths, lastRead, isDone
} from '../core/store.js'
import { SKILLS, DOMAINS, skillsOfDomain } from '../data/skills.js'
import { PATHS, pathItems, pathById, pathStats } from '../data/paths.js'
import { SCENARIOS } from '../data/scenarios.js'
import { TREES } from '../data/trees.js'
import { TOOL_META } from '../tools/index.js'
import { PROBLEM_DOMAINS, PROBLEMS } from '../data/ai-library.js'
import {
  sectionHead, grid, situationCard, skillCard, toolCard, scenarioCard,
  treeCard, unitCard, pathCard
} from './parts.js'

/* Entry points for the "something is happening right now" panel.
   These are the queries people actually arrive with. */
const NOW = [
  { label: 'My boss shouted at me', to: 'situation/work-boss-shouting' },
  { label: 'Impossible deadline', to: 'situation/work-impossible-deadline' },
  { label: 'I have to say no', to: 'tree/say-no' },
  { label: 'Two job offers', to: 'tree/opportunity' },
  { label: 'Is this information true?', to: 'tree/trust-info' },
  { label: 'I was blamed publicly', to: 'situation/work-blamed-publicly' },
  { label: 'A hard email to write', to: 'ai/problem/p-email-hard' },
  { label: 'Should I quit?', to: 'tree/quit' }
]

const QUICK = [
  { t: 'The four-second gap', d: 'The single move that prevents most expensive mistakes.', to: 'read/mastery/a-1.1', ic: 'clock' },
  { t: 'Say no without damage', d: 'A decision tree that ends in a sentence you can send.', to: 'tree/say-no', ic: 'route' },
  { t: 'Score a real decision', d: 'Weight your own criteria and see what is actually driving it.', to: 'tool/decision-matrix', ic: 'scale' },
  { t: 'Check a claim before repeating it', d: 'Eight questions and an honest confidence reading.', to: 'tool/credibility-checker', ic: 'shield' },
  { t: 'Ask AI properly, once', d: 'The context block that changes output more than any prompt trick.', to: 'ai/context', ic: 'cpu' },
  { t: 'One genuinely hard scenario', d: 'No obvious answer. The best option still costs something.', to: 'scenario/late-ask', ic: 'target' }
]

export default async function home () {
  const { manifest, situations } = await boot()
  const ix = makeIndex(manifest)
  const st = ix.stats()

  const sits = situations.situations || []
  const cats = situations.categories || []

  /* ---- personal state, computed not invented ---- */
  const allUnitIds = ix.units().map(u => u.id)
  const doneUnits = doneCount(allUnitIds)
  const doneSits = doneCount(sits.map(s => s.id))
  const started = activePaths()
  const last = lastRead()

  const featuredSits = pickFeatured(sits)
  const featuredSkills = ['staying-steady', 'priorities', 'saying-no', 'verify']
    .map(id => SKILLS.find(s => s.id === id)).filter(Boolean)

  const html = `
    ${hero(st, sits.length)}

    ${philosophy()}

    ${continueSection(last, started, doneUnits, doneSits, ix)}

    <section class="band" id="situations">
      <div class="shell">
        ${sectionHead('Start from what is happening', `<a class="btn btn-ghost btn-sm" href="${href('situations')}">All ${sits.length} situations${I.arrow}</a>`)}
        <p class="t-lede muted" style="margin-bottom:var(--s-6)">Nine categories, ${sits.length} situations, each written as the sequence of moves rather than as advice. Every one names the point where it stops being something you handle alone.</p>
        ${grid(featuredSits.map(situationCard), 3)}
        <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-6)">
          ${cats.map(c => `<a class="chip" href="${href('situations?cat=' + c.id)}" data-accent="${c.accent}">${esc(c.title)}<span class="faint">&nbsp;${sits.filter(s => s.category === c.id).length}</span></a>`).join('')}
        </div>
      </div>
    </section>

    <section class="band band-tight" id="skills">
      <div class="shell">
        ${sectionHead('Or from what you want to get better at', `<a class="btn btn-ghost btn-sm" href="${href('skills')}">All ${SKILLS.length} skills${I.arrow}</a>`)}
        <p class="t-lede muted" style="margin-bottom:var(--s-6)">A situation is something that happens to you. A skill is something you can get better at. ${DOMAINS.length} areas, ${SKILLS.length} skills, each with the signals that you need it and the practice that builds it.</p>
        ${grid(featuredSkills.map(s => skillCard({
          ...s,
          domainTitle: (DOMAINS.find(d => d.id === s.domain) || {}).title,
          accent: (DOMAINS.find(d => d.id === s.domain) || {}).accent,
          levelLabel: s.level === 'foundation' ? 'Foundation' : s.level === 'core' ? 'Core' : 'Advanced'
        }, { units: (s.units || []).length, situations: (s.situations || []).length })), 4)}
        <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-6)">
          ${DOMAINS.map(d => `<a class="chip" href="${href('skills/' + d.id)}" data-accent="${d.accent}">${esc(d.title)}<span class="faint">&nbsp;${skillsOfDomain(d.id).length}</span></a>`).join('')}
        </div>
      </div>
    </section>

    ${toolsSection()}

    ${aiSection()}

    ${practiceSection()}

    ${pathsSection(started)}

    ${libSection(ix, st)}

    ${quickSection()}

    ${limitsSection()}
  `

  return { title: null, html, accent: 'forest' }
}

/* ---------------------------------------------------------------- */

function hero (st, sitCount) {
  return `
  <section class="hero" data-accent="forest">
    <div class="shell">
      <div class="hero-grid">
        <div>
          <p class="eyebrow">A practical system for capability</p>
          <h1 class="t-display">Most problems are not hard.<br>They are just unfamiliar.</h1>
          <p class="hero-lede t-lede">This is a working library for the situations adult life actually produces —
            the shouting manager, the impossible deadline, the contract you do not understand, the decision with
            no good option. Not motivation. The specific moves, the words to use, and the point at which you
            should stop handling it alone.</p>
          <div class="hero-cta">
            <a class="btn btn-primary btn-lg" href="${href('path/resourceful')}">${I.compass}Start the main path</a>
            <a class="btn btn-lg" href="${href('situations')}">${I.alert}Something is happening now</a>
          </div>
          <div class="stats" style="margin-top:var(--s-8)">
            <div class="stat"><b>${num(st.totalUnits)}</b><span>lessons &amp; chapters</span></div>
            <div class="stat"><b>${sitCount}</b><span>situation playbooks</span></div>
            <div class="stat"><b>17</b><span>working tools</span></div>
            <div class="stat"><b>${num(st.totalWords)}</b><span>words, all offline</span></div>
          </div>
        </div>

        <aside class="now" data-accent="clay" aria-labelledby="now-h">
          <div class="now-h">${I.alert}<h2 class="t-label" id="now-h" style="color:var(--ac)">If it is happening right now</h2></div>
          <p class="t-small muted">Go straight to the moves. No preamble, no theory — the first thing to do, the
            words to use, and what makes it worse.</p>
          <div class="now-tags">
            ${NOW.map(x => `<a class="now-tag" href="${href(x.to)}">${esc(x.label)}</a>`).join('')}
          </div>
          <div class="hr" style="margin-block:var(--s-5)"></div>
          <a class="btn btn-soft" href="${href('search')}" style="width:100%">${I.search}Describe it in your own words</a>
        </aside>
      </div>
    </div>
  </section>`
}

function philosophy () {
  const items = [
    { k: 'Specific over general', d: 'Not "communicate clearly" but the sentence to send at 5:32 p.m. when your manager asks for three hours of work by morning.' },
    { k: 'Trade-offs over rules', d: 'Every option here costs something. Where there is a cost, it is named — including for the option we think is best.' },
    { k: 'Judgment stays with you', d: 'The tools compute, compare and expose what you have actually said. None of them decide. Nothing here will tell you that a hard call is easy.' },
    { k: 'Honest limits', d: 'Every playbook names the point at which self-help stops and you need a doctor, a lawyer, your bank or emergency services.' }
  ]
  return `
  <section class="band-tight" data-accent="council">
    <div class="shell">
      <div class="slab">
        <p class="eyebrow">How this is built</p>
        <h2 class="t-title" style="margin-block:var(--s-3) var(--s-6);max-width:24ch">Resourcefulness is a method, not a personality.</h2>
        <div class="grid g-2">
          ${items.map(i => `
            <div>
              <h3 class="t-label" style="color:var(--ac)">${esc(i.k)}</h3>
              <p class="t-small muted" style="margin-top:6px;line-height:1.65">${esc(i.d)}</p>
            </div>`).join('')}
        </div>
      </div>
    </div>
  </section>`
}

function continueSection (last, started, doneUnits, doneSits, ix) {
  const total = doneUnits + doneSits
  const path = started.length ? pathById(started[0]) : null
  if (!last && !path && !total) return ''

  let pathBar = ''
  if (path) {
    const items = pathItems(path)
    const d = doneCount(items.map(i => i.id))
    const p = items.length ? Math.round((d / items.length) * 100) : 0
    pathBar = `
      <div class="card card-flat" data-accent="${path.accent}">
        <p class="eyebrow">Current path</p>
        <h3 class="card-title" style="margin-block:6px var(--s-3)">${esc(path.title)}</h3>
        <div class="meter"><span style="width:${p}%"></span></div>
        <div class="between" style="margin-top:var(--s-3)">
          <span class="t-meta">${d} of ${items.length} done · ${p}%</span>
          <a class="btn btn-ghost btn-sm" href="${href('path/' + path.id)}">Resume${I.arrow}</a>
        </div>
      </div>`
  }

  let lastCard = ''
  if (last) {
    lastCard = `
      <div class="card card-flat" data-accent="atlas">
        <p class="eyebrow">Last opened</p>
        <h3 class="card-title clamp-2" style="margin-block:6px var(--s-3)">${md(last.title || 'Untitled')}</h3>
        <a class="btn btn-ghost btn-sm" href="${href(last.route)}">${isDone(last.id) ? 'Read again' : 'Continue reading'}${I.arrow}</a>
      </div>`
  }

  return `
  <section class="band-tight">
    <div class="shell">
      ${sectionHead('Pick up where you were', `<a class="btn btn-ghost btn-sm" href="${href('progress')}">Your progress${I.arrow}</a>`)}
      <div class="grid g-2">
        ${pathBar}
        ${lastCard}
        <div class="card card-flat" data-accent="forest">
          <p class="eyebrow">On this device</p>
          <div class="stats" style="margin-top:var(--s-3)">
            <div class="stat"><b>${total}</b><span>completed</span></div>
            <div class="stat"><b>${toolsUsed()}</b><span>tools used</span></div>
            <div class="stat"><b>${scenarioCount()}</b><span>scenarios</span></div>
            <div class="stat"><b>${store.saved.length}</b><span>saved</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>`
}

function toolsSection () {
  const featured = ['decision-matrix', 'priority-matrix', 'risk-analyzer', 'conversation-planner',
    'negotiation-planner', 'credibility-checker', 'problem-canvas', 'opportunity-cost']
    .map(id => TOOL_META.find(t => t.id === id)).filter(Boolean)
  return `
  <section class="band" id="tools" data-accent="clay">
    <div class="shell">
      ${sectionHead('Tools that actually compute', `<a class="btn btn-ghost btn-sm" href="${href('tools')}">All 17 tools${I.arrow}</a>`)}
      <p class="t-lede muted" style="margin-bottom:var(--s-6)">Not worksheets to print. Each one takes what you enter,
        works something out you could not see by staring at it, and tells you the honest reading — including when the
        answer is "these two options are equivalent and you are avoiding the real question". Everything saves on this device.</p>
      ${grid(featured.map(toolCard), 4)}
    </div>
  </section>`
}

function aiSection () {
  const rows = [
    { t: 'The workflow', d: 'Eleven steps from a vague request to a reviewed action you can defend.', to: 'ai/workflow', ic: 'route' },
    { t: 'Context engineering', d: 'The seven-part block that changes output more than any prompt trick.', to: 'ai/context', ic: 'sliders' },
    { t: 'Verify before you trust', d: 'Invented facts, fake sources, confident arithmetic errors — and how each one looks.', to: 'ai/verify', ic: 'shield' },
    { t: 'Time leverage', d: 'Eliminate, simplify, delegate, standardise, assist, automate — in that order.', to: 'ai/leverage', ic: 'bolt' },
    { t: 'Rehearsal', d: 'Nine personas to practise the interview, the raise, the angry customer against.', to: 'ai/roleplay', ic: 'mic' },
    { t: 'The problem library', d: `${PROBLEMS.length} real problems with the approach and a prompt you can copy.`, to: 'ai/library', ic: 'inbox' }
  ]
  return `
  <section class="band" id="ai" data-accent="atlas">
    <div class="shell">
      <div class="slab">
        <div class="between" style="align-items:flex-start;flex-wrap:wrap;gap:var(--s-5)">
          <div style="max-width:52ch">
            <p class="eyebrow">${I.cpu} AI Intelligence Core</p>
            <h2 class="t-title" style="margin-block:var(--s-3)">Use AI like someone who is accountable for the output.</h2>
            <p class="t-lede">The difference between people who get real value from these tools and people who get
              fluent nonsense is method, not prompt tricks. This is the method: how to frame a problem, what context
              to supply, what to verify, what never to paste, when a spreadsheet or a person beats a model, and how to
              keep the judgment that you will have to answer for.</p>
          </div>
          <a class="btn btn-primary" href="${href('ai')}">${I.cpu}Open the AI core</a>
        </div>

        <div class="callout callout-info" style="margin-top:var(--s-6)">
          <span class="lab">Be clear about what this is</span>
          <p>This app configures no AI provider and sends nothing anywhere. Everything here is a method, a
            discipline, or a prompt you copy into whatever assistant you already use. Where something is a
            rehearsal or a simulation, it says so.</p>
        </div>

        <div class="grid g-3" style="margin-top:var(--s-6)">
          ${rows.map(r => `
            <a class="card rise" href="${href(r.to)}">
              <div class="card-head">
                <div style="min-width:0"><h3 class="card-title">${esc(r.t)}</h3></div>
                <span class="res-ic">${I[r.ic]}</span>
              </div>
              <p class="card-text clamp-3">${esc(r.d)}</p>
            </a>`).join('')}
        </div>

        <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-5)">
          ${PROBLEM_DOMAINS.map(d => `<a class="chip" href="${href('ai/library?d=' + d.id)}">${esc(d.title)}</a>`).join('')}
        </div>
      </div>
    </div>
  </section>`
}

function practiceSection () {
  const scn = SCENARIOS.slice(0, 3)
  const trs = ['say-no', 'quit', 'trust-info'].map(id => TREES.find(t => t.id === id)).filter(Boolean)
  return `
  <section class="band" id="practice" data-accent="signal">
    <div class="shell">
      ${sectionHead('Practice, where it is safe to be wrong', `<a class="btn btn-ghost btn-sm" href="${href('scenarios')}">All practice${I.arrow}</a>`)}
      <p class="t-lede muted" style="margin-bottom:var(--s-6)">Reading about judgment does not build it. These are
        deliberately hard: the obvious answer is usually defensible and still wrong, and the best answer costs
        something. Every option comes back with its consequence, its trade-off, the thing you did not see, and how
        an experienced person reasons about it.</p>
      ${grid([...scn.map(s => scenarioCard(s)), ...trs.map(t => treeCard(t))], 3)}
    </div>
  </section>`
}

function pathsSection (started) {
  const feat = ['resourceful', 'decide-better', 'difficult', 'ai-enabled']
    .map(id => PATHS.find(p => p.id === id)).filter(Boolean)
  return `
  <section class="band" id="paths">
    <div class="shell">
      ${sectionHead('Or follow an ordered route', `<a class="btn btn-ghost btn-sm" href="${href('paths')}">All ${PATHS.length} paths${I.arrow}</a>`)}
      <p class="t-lede muted" style="margin-bottom:var(--s-6)">A path is a real curriculum assembled from material
        that already exists here — lessons, situations, tools, rehearsals and a reflection at every stage. Progress is
        counted from what you have actually completed, never awarded.</p>
      ${grid(feat.map(p => pathCard(p, pathStats(p), started.includes(p.id))), 4)}
    </div>
  </section>`
}

function libSection (ix, st) {
  const picks = ['a-1.1', 'a-7.1', 'd-07', 'c-01']
    .map(id => ix.unit(id)).filter(Boolean)
    .map(u => ({ ...u, trackTitle: (ix.track(u.track) || {}).name, accent: (ix.track(u.track) || {}).accent }))
  return `
  <section class="band" id="library" data-accent="council">
    <div class="shell">
      ${sectionHead('The long-form library', `<a class="btn btn-ghost btn-sm" href="${href('library')}">Browse everything${I.arrow}</a>`)}
      <p class="t-lede muted" style="margin-bottom:var(--s-6)">When you want the deep version rather than the fast
        one: four tracks, ${num(st.totalUnits)} pieces, ${st.totalCollections} reference collections and
        ${num(st.totalEntries)} entries. Roughly ${st.estHours} hours of reading, all stored in this page rather than
        fetched from anywhere.</p>
      ${grid(picks.map(u => unitCard(u, { showTrack: true })), 4)}
    </div>
  </section>`
}

function quickSection () {
  return `
  <section class="band" data-accent="amber">
    <div class="shell">
      ${sectionHead('If you have ten minutes')}
      <div class="grid g-3">
        ${QUICK.map(q => `
          <a class="card card-flat rise" href="${href(q.to)}">
            <div class="card-head">
              <div style="min-width:0"><h3 class="card-title">${esc(q.t)}</h3></div>
              <span class="res-ic">${I[q.ic]}</span>
            </div>
            <p class="card-text clamp-2">${esc(q.d)}</p>
          </a>`).join('')}
      </div>
    </div>
  </section>`
}

function limitsSection () {
  return `
  <section class="band-tight">
    <div class="shell shell-narrow center">
      <p class="eyebrow">Where this stops</p>
      <h2 class="t-section" style="margin-block:var(--s-3) var(--s-4)">This is not a substitute for a professional.</h2>
      <p class="t-small muted" style="line-height:1.7">Nothing here is medical, legal or financial advice, and no
        library can know your circumstances. Every playbook names its own limit — the point at which the correct
        move is to call emergency services, a doctor, a lawyer, or your bank on the number printed on your card.
        Reaching that point is not a failure of resourcefulness. Recognising it <em>is</em> resourcefulness.</p>
      <div class="row-wrap" style="justify-content:center;margin-top:var(--s-6)">
        <a class="btn" href="${href('about')}">${I.question}How this was built</a>
        <a class="btn btn-ghost" href="${href('progress')}">${I.chart}Your data, and how to export it</a>
      </div>
    </div>
  </section>`
}

/* Pick a spread across categories and severities rather than the first six. */
function pickFeatured (sits) {
  const want = ['work-boss-shouting', 'work-impossible-deadline', 'digital-bank-fraud',
    'people-guilt-tripped', 'money-contract-pressure', 'health-someone-suicidal']
  const out = want.map(id => sits.find(s => s.id === id)).filter(Boolean)
  if (out.length >= 6) return out.slice(0, 6)
  const seen = new Set(out.map(s => s.id))
  for (const s of sits) {
    if (out.length >= 6) break
    if (!seen.has(s.id)) { out.push(s); seen.add(s.id) }
  }
  return out
}
