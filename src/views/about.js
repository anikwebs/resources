/* =============================================================
   ABOUT — the philosophy, the honest limits, and what this is not.
   Routes: about, notfound (fallback)

   §61 requires that nothing here pretends to capabilities it does
   not have. This page is where that is stated plainly rather than
   buried in a footer.
   ============================================================= */

import { esc, num, plural } from '../core/dom.js'
import { I } from '../core/icons.js'
import { href } from '../core/router.js'
import { boot, makeIndex } from '../core/data.js'
import { SKILLS, DOMAINS } from '../data/skills.js'
import { PATHS } from '../data/paths.js'
import { SCENARIOS } from '../data/scenarios.js'
import { TREES } from '../data/trees.js'
import { TOOL_META } from '../tools/index.js'
import { PROBLEMS } from '../data/ai-library.js'
import {
  pageHead, crumbs, sectionHead, statRow, jumpNav, grid, alarm, emptyState
} from './parts.js'

const BELIEFS = [
  {
    t: 'Specific beats general',
    d: 'Advice that applies to everyone applies to no one. Every page here is about a named situation with named constraints, because that is the only kind of advice you can act on at 9am on a Tuesday.'
  },
  {
    t: 'Trade-offs beat rules',
    d: 'Almost nothing is universally right. “Always be honest” and “never burn a bridge” collide constantly. What you need is the shape of the trade-off and the cost of each side, not a slogan.'
  },
  {
    t: 'Actions beat motivation',
    d: 'Motivation is a feeling and it does not survive Wednesday. Every substantial page ends with something to do, in a defined order, small enough to actually start.'
  },
  {
    t: 'Examples beat abstraction',
    d: 'A principle you cannot picture is a principle you will not use. Where there is a conversation to have, there are words you can borrow.'
  },
  {
    t: 'Edge cases are the real test',
    d: 'Advice that only works when everyone is reasonable is decoration. What happens when they shout, or lie, or hold the power — that is the part worth writing down.'
  },
  {
    t: 'You keep the judgement',
    d: 'Not the tools, not the trees, and certainly not an AI model. Every structure here narrows the question and shows you the cost. The decision, and the consequence, stay yours.'
  }
]

const NOT = [
  ['A course', 'There is no enrolment, no cohort, no certificate and no completion target. Read one page and leave; it still worked.'],
  ['A motivation site', 'Nothing here is designed to make you feel capable. It is designed to make you more capable, which is a slower and less pleasant process.'],
  ['A prompt directory', 'The AI section has prompts in it, but a prompt without the method is a lottery ticket. The method is the product.'],
  ['A quiz that flatters you', 'The scenarios are deliberately difficult and several have no clean answer. The self-assessment is designed to be uncomfortable.'],
  ['A gamified app', 'No points, no streaks, no badges, no levels to grind. Your progress page counts real actions only, and nothing decays if you stop.'],
  ['A live AI product', 'There is no model running here. The AI section teaches you to use whichever assistant you already have, well.']
]

export default async function about () {
  let stats = null
  try {
    const { manifest } = await boot()
    stats = makeIndex(manifest).stats()
  } catch (e) { /* the page is worth showing without the numbers */ }

  const html = `
  <div class="shell band">
    ${crumbs([{ label: 'About' }])}

    ${pageHead({
      eyebrow: 'About',
      title: 'The Resources by Anik',
      lede: 'A practical system for becoming more capable in the real world — at work, in your career, in difficult conversations, with money, with information, and with AI. Not theory about capability. The specific moves, in the specific situations, with the specific words.',
      accent: 'forest'
    })}

    ${stats ? statRow([
      { v: num(stats.totalUnits), l: 'lessons and chapters' },
      { v: 51, l: 'situation playbooks' },
      { v: TOOL_META.length, l: 'working tools' },
      { v: num(stats.totalWords), l: 'words' }
    ]) : ''}

    ${jumpNav([
      { id: 'why', label: 'Why it exists' },
      { id: 'beliefs', label: 'What it believes' },
      { id: 'inside', label: 'What is inside' },
      { id: 'notes', label: 'What it is not' },
      { id: 'limits', label: 'Honest limits' },
      { id: 'privacy', label: 'Your data' }
    ])}

    <section class="sec" id="why">
      <div class="sec-head"><h2>Why it exists</h2></div>
      <div class="prose">
        <p class="t-lede">Most of the situations that actually shape a life are ones nobody
        taught you to handle. A manager who shouts. A contract you do not understand. A
        deadline that cannot be met. A relative who wants money. A diagnosis delivered too
        fast to follow. An offer that looks good and is not.</p>

        <p>The advice available for these tends to arrive in two useless forms: motivational,
        which tells you to believe in yourself, or abstract, which tells you about frameworks.
        Neither helps at the moment it matters, because the moment it matters you do not need
        encouragement or a model — you need to know what to say next, and what it will cost.</p>

        <p>This is an attempt at the third form. Every playbook here names what is actually
        happening, what most people get wrong, what to do in what order, the words to borrow,
        and what makes it worse. Every tool computes something real. Every scenario has
        options that are genuinely hard to choose between, because the easy version teaches
        nothing.</p>
      </div>
    </section>

    <section class="sec" id="beliefs">
      <div class="sec-head"><h2>What it believes</h2></div>
      <div class="grid g-2" style="margin-top:var(--s-5)">
        ${BELIEFS.map(b => `
          <div class="card card-flat">
            <h3 class="card-title">${esc(b.t)}</h3>
            <p class="card-text">${esc(b.d)}</p>
          </div>`).join('')}
      </div>
    </section>

    <section class="sec" id="inside">
      <div class="sec-head"><h2>What is inside</h2></div>
      <div class="stack" style="gap:var(--s-3);margin-top:var(--s-5)">
        ${[
          ['Situations', `${51} playbooks for things that are happening right now — from a boss shouting to a landlord serving notice to someone collapsing in front of you.`, 'situations', I.compass],
          ['Skills', `${SKILLS.length} named capabilities across ${DOMAINS.length} areas of life, each one connecting the reading, the playbooks, the tools and the practice that build it.`, 'skills', I.target],
          ['The library', stats ? `${num(stats.totalUnits)} lessons and chapters across four tracks, plus ${num(stats.totalCollections)} reference collections holding ${num(stats.totalEntries)} entries.` : 'Four tracks of lessons plus a reference vault.', 'library', I.book],
          ['The toolkit', `${TOOL_META.length} tools that genuinely compute — decision matrices, priority grids, risk analysis, negotiation planning. None of them are mock-ups.`, 'tools', I.tool],
          ['Practice', `${SCENARIOS.length} hard scenarios with real consequences and ${TREES.length} decision trees you walk one question at a time.`, 'scenarios', I.puzzle],
          ['Learning paths', `${PATHS.length} ordered routes through everything, so the size of the library never becomes the reason you did nothing.`, 'paths', I.route],
          ['AI Intelligence', `The method for using AI without handing over your judgement — the workflow, context engineering, verification, leverage, and ${PROBLEMS.length} real problems worked through.`, 'ai', I.cpu]
        ].map(([t, d, to, icon]) => `
          <a class="rowitem" href="${href(to)}">
            <span class="res-ic">${icon}</span>
            <div style="min-width:0;flex:1">
              <strong>${esc(t)}</strong>
              <p class="t-small muted" style="margin:2px 0 0">${esc(d)}</p>
            </div>
            <span class="t-meta faint">${I.arrow}</span>
          </a>`).join('')}
      </div>
    </section>

    <section class="sec" id="notes">
      <div class="sec-head"><h2>What it is not</h2></div>
      <p class="t-lede" style="max-width:70ch">Being clear about this saves your time.</p>
      <div class="stack" style="gap:var(--s-4);margin-top:var(--s-5)">
        ${NOT.map(([t, d]) => `
          <div class="card card-flat">
            <div class="row" style="gap:var(--s-3);align-items:baseline">
              <span class="badge badge-warning">Not</span>
              <h3 class="card-title" style="margin:0">${esc(t)}</h3>
            </div>
            <p class="card-text" style="margin-top:var(--s-2)">${esc(d)}</p>
          </div>`).join('')}
      </div>
    </section>

    <section class="sec" id="limits">
      <div class="sec-head"><h2>Honest limits</h2></div>
      <div class="stack" style="gap:var(--s-4)">
        ${alarm('This is not professional advice',
          'Nothing here is legal, medical, financial or psychological advice, and it cannot be. Several playbooks deal with situations — police questioning, eviction, a diagnosis, someone in danger — where the correct first move is to contact a qualified professional or an emergency service. Each of those pages says so, at the top, before anything else.')}

        <div class="callout callout-info">
          <span class="lab">No AI model runs here</span>
          <p>The AI section is method and prompts. Nothing you type into this site is sent
          anywhere, because there is nowhere for it to go — this is a static site with no
          server behind it. Where a page simulates a rehearsal or an assessment, it says so.</p>
        </div>

        <div class="callout callout-warning">
          <span class="lab">General, not personal</span>
          <p>These pages were written without knowing your situation, your jurisdiction, your
          employer, your family or your finances. That is a real limit. Where local law or a
          specific relationship changes the answer, the page tells you it does rather than
          pretending otherwise.</p>
        </div>

        <div class="callout">
          <span class="lab">Written by one person</span>
          <p>This is one person's synthesis, not a peer-reviewed consensus. Some of it is
          judgement you may disagree with. Where the material takes a position it argues for
          it rather than asserting it, so you can decide whether the reasoning holds.</p>
        </div>
      </div>
    </section>

    <section class="sec" id="privacy">
      <div class="sec-head"><h2>Your data</h2></div>
      <div class="prose">
        <p class="t-lede">There is no account, no sign-in, no analytics, no cookies and no
        server. Everything you do here — what you finished, what you saved, every reflection,
        every tool entry — is stored in your own browser and never leaves this device.</p>

        <p>The practical consequences are worth knowing. Clearing your browser data clears all
        of it. It does not follow you to another device or another browser. If any of it
        matters to you, export a copy from your
        <a href="${href('progress')}">progress page</a> — that gives you a single JSON file
        you can restore anywhere.</p>
      </div>

      <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-6)">
        <a class="btn btn-primary" href="${href('')}">${I.home}Start at the beginning</a>
        <a class="btn btn-soft" href="${href('progress')}">${I.chart}Your progress and data</a>
      </div>
    </section>
  </div>`

  return { title: 'About', html, accent: 'forest' }
}

/* =============================================================
   NOT FOUND — the router's fallback, rendered as a real page
   rather than a dead end. §58.
   ============================================================= */
export async function notFound (ctx) {
  const asked = (ctx && ctx.path) || ''

  const html = `
  <div class="shell band">
    ${pageHead({
      eyebrow: 'Nothing at this address',
      title: 'That page does not exist',
      lede: asked
        ? `There is nothing at “${esc(asked)}”. Either the link was wrong, or something moved. Both are fixable from here.`
        : 'Either the link was wrong, or something moved. Both are fixable from here.',
      accent: 'amber'
    })}

    ${emptyState('Try one of these instead', '',
      `<div class="row-wrap" style="gap:var(--s-3);justify-content:center">
        <a class="btn btn-primary" href="${href('')}">${I.home}The start</a>
        <a class="btn btn-soft" href="${href('search')}">${I.search}Search everything</a>
        <a class="btn btn-soft" href="${href('situations')}">${I.compass}Situations</a>
        <a class="btn btn-ghost" href="${href('library')}">${I.book}The library</a>
      </div>`)}

    <section class="sec">
      ${sectionHead('The main entrances')}
      <div style="margin-top:var(--s-4)">
        ${grid([
          ['Something is happening now', 'Every situation playbook, by category.', 'situations', I.compass],
          ['I want to get better at something', `${SKILLS.length} skills across ${DOMAINS.length} areas.`, 'skills', I.target],
          ['I need to work something out', `${TOOL_META.length} tools that actually compute.`, 'tools', I.tool],
          ['I want a route through it', `${PATHS.length} ordered learning paths.`, 'paths', I.route],
          ['I want to use AI properly', 'The method, not the hype.', 'ai', I.cpu],
          ['Show me everything', 'The full library and vault.', 'library', I.book]
        ].map(([t, d, to, icon]) => `
          <a class="card rise" href="${href(to)}">
            <div class="card-head"><div style="min-width:0">
              <span class="res-ic" style="margin-bottom:var(--s-3)">${icon}</span>
              <h3 class="card-title clamp-2">${esc(t)}</h3>
            </div></div>
            <p class="card-text">${esc(d)}</p>
          </a>`), 3)}
      </div>
    </section>
  </div>`

  return { title: 'Page not found', html, accent: 'amber', notFound: true }
}
