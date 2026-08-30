/* =============================================================
   AI INTELLIGENCE — hub, frameworks, problem library, office.
   Spec §25–§40, §44, §45.

   The premise of this whole section: AI is an instrument. It is
   very good at some things, quietly dangerous at others, and it
   never carries the consequence. Everything here is method, not
   magic — and none of it calls a live model, because none is
   configured. Where a page gives you something to paste, it says
   so plainly (§61).

   Interactive surfaces (builder, roleplay, battles, score, the
   master challenge) live in ai-lab.js so this file stays static
   and cheap to load.
   ============================================================= */

import { esc, md, plural } from '../core/dom.js'
import { I } from '../core/icons.js'
import { href, go } from '../core/router.js'
import { getPrompts } from '../core/data.js'
import { getNote, battleCount } from '../core/store.js'
import {
  AI_WORKFLOW, CONTEXT_ELEMENTS, CONTEXT_TEMPLATE, VERIFY_RISKS, VERIFY_PROMPT,
  AI_SAFETY, TOOL_PICK, AI_RECOVERY, LEVERAGE, LEVERAGE_LAW, DECISION_ENGINE,
  EVAL_QUESTIONS, BATTLES, PERSONAS, MASTER_CHALLENGE
} from '../data/ai.js'
import {
  PROBLEM_DOMAINS, PROBLEMS, MASTERCLASS,
  problemById, problemsOfDomain, masterclassById
} from '../data/ai-library.js'
import { AI_FRAMEWORK_ROUTES } from '../data/ai-routes.js'
import {
  pageHead, crumbs, sectionHead, statRow, jumpNav, grid, alarm,
  promptBox, sev, emptyState, saveButton, errorState
} from './parts.js'

/* -------------------------------------------------------------
   Small local fragments
   ------------------------------------------------------------- */

const SUITE = 'AI Intelligence'

const lawSlab = body => `
  <aside class="slab" data-accent="signal" style="margin:var(--s-6) 0">
    <p class="eyebrow">The rule that governs this page</p>
    <p class="t-lede">${md(body)}</p>
  </aside>`

const noteField = (key, label, hint, placeholder) => `
  <div class="field" style="max-width:72ch">
    <label for="n-${esc(key.replace(/[^a-z0-9]+/gi, '-'))}">${esc(label)}</label>
    ${hint ? `<p class="t-small muted" style="margin-bottom:6px">${md(hint)}</p>` : ''}
    <textarea class="textarea" id="n-${esc(key.replace(/[^a-z0-9]+/gi, '-'))}"
      data-note="${esc(key)}" placeholder="${esc(placeholder || '')}">${esc(getNote(key))}</textarea>
    <span class="hint">Saves as you type. Stays on this device.</span>
  </div>`

/* A card linking to another AI page. */
const aiCard = r => `
  <a class="card rise" href="${href(r.route)}" data-accent="signal">
    <div class="card-head"><div style="min-width:0">
      <span class="res-ic" style="margin-bottom:var(--s-3)">${I.cpu}</span>
      <h3 class="card-title clamp-2">${esc(r.title)}</h3>
    </div></div>
    <p class="card-text clamp-3">${esc(r.sub)}</p>
  </a>`

const problemCard = p => {
  const d = PROBLEM_DOMAINS.find(x => x.id === p.domain) || {}
  return `<a class="card rise" href="${href(`ai/problem/${p.id}`)}" data-accent="${d.accent || 'signal'}">
    <div class="card-head"><div style="min-width:0">
      <p class="eyebrow">${esc(d.title || 'AI')}</p>
      <h3 class="card-title clamp-2">${esc(p.title)}</h3>
    </div></div>
    <p class="card-text clamp-3">${esc(p.hard)}</p>
    <div class="card-foot card-foot-line">
      <span class="t-meta faint">${plural((p.approach || []).length, 'step')}</span>
      <span class="t-meta faint">Prompt included</span>
    </div>
  </a>`
}

const officeCard = m => `
  <a class="card rise" href="${href(`ai/office/${m.id}`)}" data-accent="${m.accent}">
    <div class="card-head"><div style="min-width:0">
      <span class="res-ic" style="margin-bottom:var(--s-3)">${I[m.icon] || I.inbox}</span>
      <h3 class="card-title">AI for ${esc(m.title)}</h3>
    </div></div>
    <p class="card-text clamp-3">${esc(m.lede)}</p>
    <div class="card-foot card-foot-line">
      <span class="t-meta faint">${plural(m.moves.length, 'move')}</span>
      <span class="t-meta faint">${plural((m.problems || []).length, 'worked problem')}</span>
    </div>
  </a>`

/* The honesty notice required by §61. Appears on every AI page. */
const honesty = () => `
  <aside class="callout callout-info" style="margin-top:var(--s-8)">
    <span class="lab">How this section works</span>
    <p>There is no AI model running inside this site, and nothing you type here is
    sent anywhere. This is method, structure and prompts you copy into whichever
    assistant you already use. Everything is written to be true regardless of
    which model you pick, or how much better they get.</p>
  </aside>`

/* =============================================================
   HUB — route: ai
   ============================================================= */
export default async function aiHub () {
  const frameworks = AI_FRAMEWORK_ROUTES

  const html = `
  <div class="shell band">
    ${crumbs([{ label: 'AI Intelligence' }])}

    ${pageHead({
      eyebrow: SUITE,
      title: 'Using AI without handing over your judgement',
      lede: 'Most people use AI as a faster search box and get search-box results. The difference between that and real capability is not a secret prompt — it is method: define the problem, supply the context, decompose the work, verify the output, and keep the decision.',
      accent: 'signal',
      actions: `
        <a class="btn btn-primary btn-lg" href="${href('ai/workflow')}">${I.route}Start with the workflow</a>
        <a class="btn btn-soft btn-lg" href="${href('ai/library')}">${I.search}I have a specific problem</a>
        ${saveButton('ai:hub', 'Save this section')}`
    })}

    ${statRow([
      { v: AI_WORKFLOW.length, l: 'workflow steps' },
      { v: PROBLEMS.length, l: 'real problems' },
      { v: BATTLES.length, l: 'battle tests' },
      { v: PERSONAS.length, l: 'rehearsal partners' }
    ])}

    ${lawSlab('AI supports judgement. It does not replace responsibility. If you cannot explain a decision without mentioning a model, you have not made the decision — you have accepted one.')}

    ${jumpNav([
      { id: 'start', label: 'Where to start' },
      { id: 'method', label: 'The method' },
      { id: 'problems', label: 'Your problem' },
      { id: 'office', label: 'At work' },
      { id: 'practise', label: 'Practise' },
      { id: 'judge', label: 'Judge your own use' }
    ])}

    <section class="sec" id="start">
      <div class="sec-head"><h2>Where to start</h2></div>
      <p class="t-lede" style="max-width:68ch">Three honest entry points, depending on what you actually want right now.</p>
      ${grid([
        `<a class="card card-pad-lg rise" href="${href('ai/library')}" data-accent="clay">
          <span class="res-ic" style="margin-bottom:var(--s-3)">${I.inbox}</span>
          <h3 class="card-title">I have a problem today</h3>
          <p class="card-text">Search ${PROBLEMS.length} real problems — a dreaded email, a CV that gets no replies, a contract you do not understand. Each one gives you the approach and the prompt.</p>
        </a>`,
        `<a class="card card-pad-lg rise" href="${href('ai/workflow')}" data-accent="forest">
          <span class="res-ic" style="margin-bottom:var(--s-3)">${I.route}</span>
          <h3 class="card-title">I want to get properly good</h3>
          <p class="card-text">The eleven-step workflow, then context engineering, then verification. This is the sequence that separates competent use from guessing.</p>
        </a>`,
        `<a class="card card-pad-lg rise" href="${href('ai/score')}" data-accent="council">
          <span class="res-ic" style="margin-bottom:var(--s-3)">${I.chart}</span>
          <h3 class="card-title">I want to know where I stand</h3>
          <p class="card-text">Rate yourself across ten dimensions and get told which one is costing you most. Uncomfortable and useful in that order.</p>
        </a>`
      ], 3)}
    </section>

    <section class="sec" id="method">
      <div class="sec-head"><h2>The method</h2></div>
      <p class="t-lede" style="max-width:68ch">Thirteen pages, in a deliberate order. The first four are the ones that change results immediately.</p>
      <div style="margin-top:var(--s-5)">${grid(frameworks.map(aiCard), 3)}</div>
    </section>

    <section class="sec" id="problems">
      ${sectionHead('Start from a problem, not a feature', `<a class="btn btn-ghost btn-sm" href="${href('ai/library')}">All ${PROBLEMS.length}${I.arrow}</a>`)}
      <div class="row-wrap" style="gap:var(--s-2);margin:var(--s-4) 0">
        ${PROBLEM_DOMAINS.map(d => `<a class="chip" href="${href(`ai/library?d=${d.id}`)}">${I[d.icon] || I.circle}${esc(d.title)}</a>`).join('')}
      </div>
      ${grid(PROBLEMS.slice(0, 6).map(problemCard), 3)}
    </section>

    <section class="sec" id="office">
      ${sectionHead('The office masterclass')}
      <p class="t-lede" style="max-width:68ch">Six areas where AI use at work either compounds into visible capability or quietly produces plausible rubbish.</p>
      <div style="margin-top:var(--s-5)">${grid(MASTERCLASS.map(officeCard), 3)}</div>
    </section>

    <section class="sec" id="practise">
      ${sectionHead('Practise, not read')}
      ${grid([
        `<a class="card rise" href="${href('ai/roleplay')}" data-accent="clay">
          <div class="card-head"><div><span class="res-ic" style="margin-bottom:var(--s-3)">${I.mic}</span>
          <h3 class="card-title">Role-play rehearsal</h3></div></div>
          <p class="card-text">${PERSONAS.length} briefs that turn an assistant into an interviewer, a hostile client, a sceptical manager. Rehearse before it is real.</p>
        </a>`,
        `<a class="card rise" href="${href('ai/battles')}" data-accent="signal">
          <div class="card-head"><div><span class="res-ic" style="margin-bottom:var(--s-3)">${I.bolt}</span>
          <h3 class="card-title">Battle tests</h3></div></div>
          <p class="card-text">${BATTLES.length} progressive levels with a pass condition and the trap most people fall into. ${battleCount() ? `You have logged ${battleCount()}.` : 'None logged yet.'}</p>
        </a>`,
        `<a class="card rise" href="${href('ai/builder')}" data-accent="atlas">
          <div class="card-head"><div><span class="res-ic" style="margin-bottom:var(--s-3)">${I.layers}</span>
          <h3 class="card-title">Workflow builder</h3></div></div>
          <p class="card-text">Design a repeatable pipeline: input, AI step, your analysis, your review, output, action. Save it and reuse it.</p>
        </a>`,
        `<a class="card rise" href="${href('ai/challenge')}" data-accent="council">
          <div class="card-head"><div><span class="res-ic" style="margin-bottom:var(--s-3)">${I.flag}</span>
          <h3 class="card-title">The master challenge</h3></div></div>
          <p class="card-text">One real problem from your actual life through all ${MASTER_CHALLENGE.stages.length} stages. The only exercise here that proves anything.</p>
        </a>`
      ], 2)}
    </section>

    <section class="sec" id="judge">
      ${sectionHead('Judge your own use')}
      <p class="t-lede" style="max-width:68ch">§45. Ask these after any significant piece of AI-assisted work. If you cannot answer them, the work is not finished.</p>
      <ol class="moves" style="margin-top:var(--s-5);max-width:76ch">
        ${EVAL_QUESTIONS.map((q, i) => `<li><b>${i + 1}</b><span>${md(q)}</span></li>`).join('')}
      </ol>
      <div style="margin-top:var(--s-6)">
        ${noteField('ai:eval', 'Answer them about the last thing you used AI for',
          'Pick one real task from this week. Answering honestly here is worth more than reading three more pages.',
          'The task was… What I had to fix… What it got wrong that I nearly missed…')}
      </div>
    </section>

    ${honesty()}
  </div>`

  return { title: 'AI Intelligence', html, accent: 'signal' }
}

/* =============================================================
   FRAMEWORK PAGES — route: ai/:section
   One handler, dispatching on the section id, because they share
   a frame: crumbs, head, body, note field, honesty, siblings.
   ============================================================= */

const FRAME = {
  workflow: {
    title: 'The AI Workflow',
    eyebrow: 'Method · §26',
    lede: 'Eleven steps from a problem you cannot yet describe to an action you have actually taken. Most people run steps 5 and 6 only, then wonder why the output needed rewriting.',
    accent: 'forest',
    law: 'The quality of the output is set before you type the request. Steps 1 to 4 decide the result; the prompt merely delivers it.',
    note: ['ai:workflow', 'Run it once, on something real', 'Take one task you have this week and walk all eleven steps. Write what happened at each.', 'Step 1 — the real problem in one sentence…'],
    body: () => `
      <ol class="flow" style="margin-top:var(--s-6)">
        ${AI_WORKFLOW.map(s => `
          <li class="flow-step ${s.who === 'ai' ? 'flow-ai' : 'flow-you'}">
            <div class="between" style="gap:var(--s-3);align-items:baseline">
              <h3 class="t-subtitle">${s.n}. ${esc(s.title)}</h3>
              <span class="badge ${s.who === 'ai' ? 'badge-info' : s.who === 'both' ? 'badge-warning' : 'badge-success'}">${s.who === 'ai' ? 'The model' : s.who === 'both' ? 'Both' : 'You'}</span>
            </div>
            <p>${md(s.d)}</p>
            ${s.ex ? `<p class="t-small" style="margin-top:var(--s-3);opacity:.85"><strong>Example.</strong> ${md(s.ex)}</p>` : ''}
          </li>`).join('')}
      </ol>
      <div class="callout callout-warning" style="margin-top:var(--s-7)">
        <span class="lab">The step people skip</span>
        <p>Step 2. Asking the model what it needs to know, before it produces anything,
        improves output more than any prompt template — because it forces the missing
        context into the open instead of letting it get invented.</p>
      </div>`
  },

  context: {
    title: 'Context Engineering',
    eyebrow: 'Method · §36',
    lede: 'A model cannot read your situation. Nine out of ten disappointing outputs are a context failure wearing the costume of a prompt failure.',
    accent: 'atlas',
    law: 'Prompt tricks are worth a few percent. Context is worth the difference between unusable and usable.',
    note: ['ai:context', 'Build your own block for a live task', 'Fill the seven elements for something you actually need done. Keep it — you will reuse it.', 'GOAL…'],
    body: () => `
      <div class="grid g-2" style="margin-top:var(--s-6)">
        ${CONTEXT_ELEMENTS.map(c => `
          <div class="card card-flat">
            <h3 class="card-title">${esc(c.k)}</h3>
            <p class="card-text">${md(c.d)}</p>
            ${c.ph ? `<p class="t-meta" style="margin-top:var(--s-3);opacity:.8">Ask yourself: ${esc(c.ph)}</p>` : ''}
          </div>`).join('')}
      </div>
      <h2 class="t-section" style="margin-top:var(--s-8)">The template</h2>
      <p class="t-small muted" style="max-width:68ch;margin-bottom:var(--s-4)">Copy it, fill the brackets, keep the filled version. A good context block is an asset you reuse, not something you retype.</p>
      ${promptBox('Context block', CONTEXT_TEMPLATE)}`
  },

  verify: {
    title: 'Verify Before You Trust',
    eyebrow: 'Method · §37',
    lede: 'A model is fluent in exactly the same tone whether it knows or is guessing. Fluency is not evidence, and confidence is not accuracy.',
    accent: 'clay',
    law: 'Anything that would embarrass you, cost you money, or affect someone else must be verified against a source you opened yourself.',
    note: ['ai:verify', 'What has it got wrong on you?', 'Write down a time AI output was confidently wrong and you nearly used it. Specific memories change behaviour; general warnings do not.', 'It told me…'],
    body: () => `
      <div class="stack" style="margin-top:var(--s-6);gap:var(--s-4)">
        ${VERIFY_RISKS.map(r => `
          <article class="card card-flat" data-accent="${r.sev === 'critical' ? 'clay' : 'amber'}">
            <div class="between" style="gap:var(--s-3);align-items:baseline">
              <h3 class="card-title">${esc(r.k)}</h3>
              ${sev(r.sev)}
            </div>
            <p class="card-text">${md(r.d)}</p>
            <div class="promise" style="margin-top:var(--s-4)">
              <div><div class="lab">How to spot it</div><div class="v">${md(r.tell)}</div></div>
              <div><div class="lab">How to check</div><div class="v">${md(r.check)}</div></div>
            </div>
          </article>`).join('')}
      </div>
      <h2 class="t-section" style="margin-top:var(--s-8)">Make it audit itself</h2>
      <p class="t-small muted" style="max-width:68ch;margin-bottom:var(--s-4)">This does not make the output true. It makes the uncertain parts visible, which is what you needed.</p>
      ${promptBox('The audit prompt', VERIFY_PROMPT)}`
  },

  safety: {
    title: 'AI Safety and Privacy',
    eyebrow: 'Method · §38',
    lede: 'The risk is rarely dramatic. It is a paste that felt harmless — a client document, a colleague\'s details, a contract — into a box you do not control.',
    accent: 'clay',
    law: 'Assume anything you paste may be stored, read by a human, or used in training, unless you have specifically confirmed otherwise for that product and that account tier.',
    note: ['ai:safety', 'Your own line', 'Write the rule you will actually follow about what you paste. A rule you have written is one you notice breaking.', 'I will never paste…'],
    body: () => `
      <div class="stack" style="margin-top:var(--s-6);gap:var(--s-4)">
        ${AI_SAFETY.map(s => `
          <article class="card card-flat">
            <div class="between" style="gap:var(--s-3);align-items:baseline">
              <h3 class="card-title">${esc(s.k)}</h3>${sev(s.sev)}
            </div>
            <p class="card-text">${md(s.d)}</p>
          </article>`).join('')}
      </div>
      ${alarm('Anonymise by default', 'Replace names, employers, account numbers and addresses with placeholders before you paste. It costs you ten seconds and removes the entire category of problem. If the task genuinely needs the real detail, that is a signal the task should not be going into a chat box.')}`
  },

  tools: {
    title: 'Choosing the Right Tool',
    eyebrow: 'Method · §39',
    lede: 'The most common AI mistake is not a bad prompt. It is using a language model for a job that belonged to a spreadsheet, a search engine, a specialist, or a conversation.',
    accent: 'council',
    law: 'A model predicts plausible text. Where you need exactness, currency, or accountability, something else is the right instrument.',
    note: ['ai:tools', 'Where have you used the wrong one?', 'Name a task you gave AI that a different instrument would have done better, and what it cost you.', 'I asked it to…'],
    body: () => `
      <div class="stack" style="margin-top:var(--s-6);gap:var(--s-4)">
        ${TOOL_PICK.map(t => `
          <article class="card card-flat">
            <div class="row" style="gap:var(--s-3);align-items:center">
              <span class="res-ic">${I[t.icon] || I.tool}</span>
              <h3 class="card-title" style="margin:0">${esc(t.tool)}</h3>
            </div>
            <div class="promise" style="margin-top:var(--s-4)">
              <div><div class="lab">Right for</div><div class="v">${md(t.good)}</div></div>
              <div><div class="lab">Wrong for</div><div class="v">${md(t.bad)}</div></div>
            </div>
          </article>`).join('')}
      </div>
      <div class="callout callout-info" style="margin-top:var(--s-7)">
        <span class="lab">The question to ask first</span>
        <p>“What kind of answer do I need — plausible, exact, current, or accountable?”
        Only the first belongs to a language model without a second instrument behind it.</p>
      </div>`
  },

  recovery: {
    title: 'When AI Fails',
    eyebrow: 'Method · §40',
    lede: 'Output comes back generic, wrong, or subtly off. Most people retype the same request with more adjectives. That is not a recovery method.',
    accent: 'amber',
    law: '“Make it better” is not feedback. Name the specific defect, and nine times out of ten the fix is context, not phrasing.',
    note: ['ai:recovery', 'Diagnose your last failure', 'Take a bad output you got recently. Run the seven steps on it in writing.', 'The failure was specifically…'],
    body: () => `
      <ol class="moves" style="margin-top:var(--s-6);max-width:78ch">
        ${AI_RECOVERY.map(r => `<li><b>${r.n}</b><span><strong>${esc(r.k)}.</strong> ${md(r.d)}</span></li>`).join('')}
      </ol>
      ${promptBox('Specific criticism beats vague dissatisfaction', `That draft failed in a specific way. Here is the diagnosis:

WHAT IS WRONG: [too generic / wrong level / wrong tone / wrong task / factually off / too long]
WHAT I ACTUALLY NEED: [the outcome, restated]
MISSING CONTEXT I SHOULD HAVE GIVEN YOU: [the thing you could not have known]
KEEP: [the parts that worked — do not lose them]

Rewrite with that. Do not apologise, do not explain the changes.`)}`
  },

  leverage: {
    title: 'Time Leverage',
    eyebrow: 'Method · §34',
    lede: 'Six levels, in strict order of value. Automation is last, not first — and the level almost nobody uses is the one at the top.',
    accent: 'forest',
    law: LEVERAGE_LAW,
    note: ['ai:leverage', 'Run the ladder on one recurring task', 'Pick something you do every week. Go down the levels in order and stop at the first honest answer.', 'The task is… Could it be eliminated?…'],
    body: () => `
      <ol class="flow" style="margin-top:var(--s-6)">
        ${[...LEVERAGE].sort((a, b) => a.order - b.order).map(l => `
          <li class="flow-step">
            <div class="row" style="gap:var(--s-3);align-items:center">
              <span class="res-ic">${I[l.icon] || I.bolt}</span>
              <h3 class="t-subtitle" style="margin:0">${l.order}. ${esc(l.k)}</h3>
            </div>
            <p>${md(l.d)}</p>
            <p class="t-small" style="margin-top:var(--s-3)"><strong>Ask:</strong> ${md(l.ask)}</p>
            ${l.ex ? `<p class="t-small" style="opacity:.85"><strong>Example.</strong> ${md(l.ex)}</p>` : ''}
          </li>`).join('')}
      </ol>
      ${alarm('Automating the wrong thing is worse than doing it by hand', 'A manual unnecessary task dies when you get bored. An automated unnecessary task runs forever, and someone will maintain it for years without ever asking why it exists. Go down the ladder in order.')}`
  },

  decide: {
    title: 'The AI Decision Engine',
    eyebrow: 'Method · §33',
    lede: 'Used well, a model widens your options and attacks your reasoning. Used badly, it becomes a way of having made a decision without having decided.',
    accent: 'council',
    law: DECISION_ENGINE.law,
    note: ['ai:decide', 'A decision you are sitting on', 'Name it, then run at least the pre-mortem and the “what am I avoiding” prompt. Write what surfaced.', 'The decision is… What I am avoiding…'],
    body: () => `
      <div class="stack" style="margin-top:var(--s-6);gap:var(--s-5)">
        ${DECISION_ENGINE.uses.map(u => `
          <article class="card card-flat">
            <h3 class="card-title">${esc(u.k)}</h3>
            <p class="card-text">${md(u.d)}</p>
            <div style="margin-top:var(--s-4)">${promptBox('Paste this', u.prompt)}</div>
          </article>`).join('')}
      </div>
      <h2 class="t-section" style="margin-top:var(--s-8)">Four things it never does</h2>
      <ul class="marklist badlist" style="margin-top:var(--s-4);max-width:76ch">
        ${DECISION_ENGINE.never.map(n => `<li>${md(n)}</li>`).join('')}
      </ul>
      <div style="margin-top:var(--s-6)" class="callout callout-success">
        <span class="lab">The test</span>
        <p>Can you state the decision, the two strongest arguments against it, and
        what you are accepting as a cost — in your own words, with nothing open?
        If not, you have a recommendation, not a decision.</p>
      </div>`
  }
}

/* Ordered list of framework ids for sibling navigation. */
const FRAME_ORDER = AI_FRAMEWORK_ROUTES
  .map(r => r.route.replace(/^ai\//, ''))
  .filter(id => FRAME[id])

export async function aiFramework (ctx) {
  const id = ctx.params.section
  const f = FRAME[id]
  if (!f) return { title: 'Not found', html: null, notFound: true }

  const ix = FRAME_ORDER.indexOf(id)
  const sibs = FRAME_ORDER.filter(x => x !== id).slice(0, 3)
    .map(x => AI_FRAMEWORK_ROUTES.find(r => r.route === `ai/${x}`))
    .filter(Boolean)

  const html = `
  <div class="shell band">
    ${crumbs([{ label: 'AI Intelligence', to: 'ai' }, { label: f.title }])}
    ${pageHead({
      eyebrow: f.eyebrow,
      title: f.title,
      lede: f.lede,
      accent: f.accent,
      actions: saveButton(`ai:${id}`)
    })}
    ${f.law ? lawSlab(f.law) : ''}
    <div class="prose">${f.body()}</div>
    ${f.note ? `<div style="margin-top:var(--s-8)">${noteField(f.note[0], f.note[1], f.note[2], f.note[3])}</div>` : ''}

    ${sibs.length ? `
      <section class="sec">
        ${sectionHead('Next in the method', `<a class="btn btn-ghost btn-sm" href="${href('ai')}">All of it${I.arrow}</a>`)}
        <div style="margin-top:var(--s-4)">${grid(sibs.map(aiCard), 3)}</div>
      </section>` : ''}

    ${honesty()}
  </div>`

  return {
    title: f.title,
    html,
    accent: f.accent,
    recent: { id: `ai:${id}`, kind: 'ai', title: f.title, route: `ai/${id}` }
  }
}

/* =============================================================
   PROBLEM LIBRARY — route: ai/library  (?d=domain)
   ============================================================= */
export async function aiLibrary (ctx) {
  const dom = ctx.query.d || ''
  const active = PROBLEM_DOMAINS.find(d => d.id === dom)
  const list = active ? problemsOfDomain(active.id) : PROBLEMS

  const html = `
  <div class="shell band">
    ${crumbs([{ label: 'AI Intelligence', to: 'ai' }, { label: 'Problem library' }])}
    ${pageHead({
      eyebrow: `${SUITE} · §27`,
      title: active ? active.title : 'Real-life problem library',
      lede: active
        ? active.blurb
        : 'Not features, not prompt categories — problems people actually have. Each one names why it is hard, gives the approach, and hands you a prompt worth pasting.',
      accent: active ? active.accent : 'signal',
      meta: [plural(list.length, 'problem')]
    })}

    <div class="filters" role="group" aria-label="Filter by area">
      <a class="chip ${!active ? 'chip-solid' : ''}" href="${href('ai/library')}">All ${PROBLEMS.length}</a>
      ${PROBLEM_DOMAINS.map(d => `
        <a class="chip ${active && active.id === d.id ? 'chip-solid' : ''}" href="${href(`ai/library?d=${d.id}`)}">
          ${I[d.icon] || I.circle}${esc(d.title)}
          <span class="fcount">${problemsOfDomain(d.id).length}</span>
        </a>`).join('')}
    </div>

    <div class="field" style="max-width:520px;margin:var(--s-5) 0">
      <label for="ai-q">Narrow these down</label>
      <div class="searchbar">
        ${I.search}
        <input class="input" id="ai-q" type="search" data-ai-q autocomplete="off"
          placeholder="email, salary, contract, decide…">
      </div>
      <span class="hint">Press Enter to search the whole site instead.</span>
    </div>

    <p class="t-meta faint" data-ai-count>${plural(list.length, 'problem')}</p>

    <div class="grid g-3" data-ai-grid style="margin-top:var(--s-4)">
      ${list.map(p => `<div data-ai-item data-hay="${esc(hayOf(p))}">${problemCard(p)}</div>`).join('')}
    </div>

    <div data-ai-empty hidden>
      ${emptyState('Nothing here matches that',
        'Try fewer words, or search the whole library — the answer may be in a lesson or a playbook rather than a prompt.',
        `<a class="btn btn-soft" href="${href('search')}">${I.search}Search everything</a>`)}
    </div>

    ${active ? `
      <section class="sec">
        ${sectionHead('Other areas')}
        <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-4)">
          ${PROBLEM_DOMAINS.filter(d => d.id !== active.id).map(d =>
            `<a class="chip" href="${href(`ai/library?d=${d.id}`)}">${I[d.icon] || I.circle}${esc(d.title)}</a>`).join('')}
        </div>
      </section>` : ''}

    ${honesty()}
  </div>`

  return { title: active ? `${active.title} · AI` : 'AI problem library', html, accent: active ? active.accent : 'signal', mount: mountLibraryFilter }
}

const hayOf = p =>
  `${p.title} ${p.hard} ${(p.approach || []).join(' ')} ${p.domain} ${(p.checks || []).join(' ')}`.toLowerCase()

function mountLibraryFilter (root) {
  const input = root.querySelector('[data-ai-q]')
  if (!input) return
  const items = [...root.querySelectorAll('[data-ai-item]')]
  const grid = root.querySelector('[data-ai-grid]')
  const empty = root.querySelector('[data-ai-empty]')
  const count = root.querySelector('[data-ai-count]')
  let t = 0

  const apply = () => {
    const q = input.value.trim().toLowerCase()
    let shown = 0
    for (const el of items) {
      const hit = !q || el.dataset.hay.includes(q)
      el.hidden = !hit
      if (hit) shown++
    }
    if (grid) grid.hidden = shown === 0
    if (empty) empty.hidden = shown !== 0
    if (count) count.textContent = q
      ? `${shown} of ${items.length} match “${input.value.trim()}”`
      : plural(items.length, 'problem')
  }

  const onInput = () => { clearTimeout(t); t = setTimeout(apply, 130) }
  const onKey = e => {
    if (e.key !== 'Enter') return
    const q = input.value.trim()
    if (q.length > 2) go(`search?q=${encodeURIComponent(q)}`)
  }

  input.addEventListener('input', onInput)
  input.addEventListener('keydown', onKey)
  return () => {
    clearTimeout(t)
    input.removeEventListener('input', onInput)
    input.removeEventListener('keydown', onKey)
  }
}

/* =============================================================
   ONE PROBLEM — route: ai/problem/:id
   ============================================================= */
export async function aiProblem (ctx) {
  const p = problemById(ctx.params.id)
  if (!p) return { title: 'Not found', html: null, notFound: true }

  const dom = PROBLEM_DOMAINS.find(d => d.id === p.domain) || {}
  const siblings = problemsOfDomain(p.domain).filter(x => x.id !== p.id).slice(0, 3)
  const office = MASTERCLASS.filter(m => (m.problems || []).includes(p.id))

  const html = `
  <div class="shell-narrow band">
    ${crumbs([
      { label: 'AI Intelligence', to: 'ai' },
      { label: 'Problem library', to: 'ai/library' },
      { label: dom.title || 'Problem', to: `ai/library?d=${p.domain}` },
      { label: p.title }
    ])}

    ${pageHead({
      eyebrow: dom.title || 'Real problem',
      title: p.title,
      accent: dom.accent || 'signal',
      actions: saveButton(`ai-problem:${p.id}`)
    })}

    <section class="sec" id="why-hard">
      <div class="sec-head"><h2>Why this is hard</h2></div>
      <p class="t-lede">${md(p.hard)}</p>
    </section>

    ${(p.approach || []).length ? `
      <section class="sec" id="approach">
        <div class="sec-head"><h2>The approach</h2></div>
        <ol class="moves" style="max-width:76ch">
          ${p.approach.map((a, i) => `<li><b>${i + 1}</b><span>${md(a)}</span></li>`).join('')}
        </ol>
      </section>` : ''}

    <section class="sec" id="prompt">
      <div class="sec-head"><h2>The prompt</h2></div>
      <p class="t-small muted" style="margin-bottom:var(--s-4)">Replace every bracket with your real detail before you paste it. The brackets are the whole value — a prompt with the brackets left in produces the generic output you were trying to avoid.</p>
      ${promptBox('Copy and fill in', p.prompt)}
    </section>

    ${p.followUp ? `
      <section class="sec" id="second-pass">
        <div class="sec-head"><h2>The second pass</h2></div>
        <p class="t-small muted" style="margin-bottom:var(--s-4)">Paste this <em>after</em> you have the first answer. It attacks the
          answer rather than the problem, which is where a model is genuinely strong — critique is far more reliable than
          generation. Most of the value people leave behind is here, because the first draft reads well enough to accept.</p>
        ${promptBox('Copy this next', p.followUp)}
      </section>` : ''}

    ${(p.checks || []).length ? `
      <section class="sec" id="checks">
        <div class="sec-head"><h2>Check before you act</h2></div>
        <p class="t-small muted" style="margin-bottom:var(--s-4)">Highest-cost failure first. A minute here is the difference
          between using the tool and being used by it.</p>
        <ul class="marklist goodlist" style="max-width:76ch">
          ${p.checks.map(c => `<li>${md(c)}</li>`).join('')}
        </ul>
      </section>` : ''}

    ${p.warn ? `<div class="callout callout-danger" style="margin-top:var(--s-6)">
      <span class="lab">Before you use the output</span><p>${md(p.warn)}</p></div>` : ''}

    <section class="sec" id="notes">
      ${noteField(`ai-problem:${p.id}`, 'What happened when you tried it',
        'What you had to change, what it got wrong, and what belongs in the prompt next time.',
        'I ran it and…')}
    </section>

    ${office.length ? `
      <section class="sec">
        ${sectionHead('The wider skill')}
        ${grid(office.map(officeCard), 2)}
      </section>` : ''}

    ${siblings.length ? `
      <section class="sec">
        ${/* sectionHead escapes its own title, so esc() here would double-escape. */ ''}
        ${sectionHead(`More in ${dom.title || 'this area'}`,
          `<a class="btn btn-ghost btn-sm" href="${href(`ai/library?d=${p.domain}`)}">All${I.arrow}</a>`)}
        <div style="margin-top:var(--s-4)">${grid(siblings.map(problemCard), 3)}</div>
      </section>` : ''}

    ${honesty()}
  </div>`

  return {
    title: p.title,
    html,
    accent: dom.accent || 'signal',
    recent: { id: `ai-problem:${p.id}`, kind: 'ai', title: p.title, route: `ai/problem/${p.id}` }
  }
}

/* =============================================================
   OFFICE MASTERCLASS — route: ai/office/:id   (§28)
   ============================================================= */
export async function aiOffice (ctx) {
  const m = masterclassById(ctx.params.id)
  if (!m) return { title: 'Not found', html: null, notFound: true }

  const probs = (m.problems || []).map(problemById).filter(Boolean)
  const others = MASTERCLASS.filter(x => x.id !== m.id)

  const html = `
  <div class="shell band">
    ${crumbs([{ label: 'AI Intelligence', to: 'ai' }, { label: `AI for ${m.title}` }])}

    ${pageHead({
      eyebrow: 'Office masterclass · §28',
      title: `AI for ${m.title}`,
      lede: m.lede,
      accent: m.accent,
      actions: saveButton(`ai-office:${m.id}`)
    })}

    <section class="sec" id="moves">
      <div class="sec-head"><h2>The moves that matter</h2></div>
      <div class="stack" style="gap:var(--s-4)">
        ${m.moves.map((x, i) => `
          <article class="card card-flat">
            <div class="row" style="gap:var(--s-3);align-items:baseline">
              <span class="card-n">${i + 1}</span>
              <h3 class="card-title" style="margin:0">${esc(x.k)}</h3>
            </div>
            <p class="card-text" style="margin-top:var(--s-2)">${md(x.d)}</p>
          </article>`).join('')}
      </div>
    </section>

    ${probs.length ? `
      <section class="sec" id="worked">
        ${sectionHead('Worked problems in this area')}
        <div style="margin-top:var(--s-4)">${grid(probs.map(problemCard), 2)}</div>
      </section>` : ''}

    <section class="sec" id="notes">
      ${noteField(`ai-office:${m.id}`, `Where ${m.title.toLowerCase()} actually costs you time`,
        'Name the specific recurring instance. That is the one worth templating.',
        'Every week I…')}
    </section>

    <section class="sec">
      ${sectionHead('The other five areas')}
      <div style="margin-top:var(--s-4)">${grid(others.map(officeCard), 3)}</div>
    </section>

    <div class="callout callout-info" style="margin-top:var(--s-7)">
      <span class="lab">Before you optimise this</span>
      <p>Run the <a href="${href('ai/leverage')}">leverage ladder</a> first. Some of the
      work in this area should not be made faster — it should stop.</p>
    </div>

    ${honesty()}
  </div>`

  return {
    title: `AI for ${m.title}`,
    html,
    accent: m.accent,
    recent: { id: `ai-office:${m.id}`, kind: 'ai', title: `AI for ${m.title}`, route: `ai/office/${m.id}` }
  }
}

/* =============================================================
   PROMPT VAULT — route: ai/prompts
   Every prompt extracted from the corpus, copyable.
   ============================================================= */
export async function aiPrompts () {
  let prompts = []
  let failed = null
  try { prompts = await getPrompts() } catch (e) { failed = e }

  if (failed) {
    return {
      title: 'The prompt vault',
      accent: 'signal',
      html: `<div class="shell band">
        ${crumbs([{ label: 'AI Intelligence', to: 'ai' }, { label: 'Prompt vault' }])}
        ${errorState('The prompt vault could not load', 'The content file did not come back. Your saved work is untouched.')}
      </div>`
    }
  }

  const groups = new Map()
  for (const p of prompts) {
    const k = p.section || 'Other'
    if (!groups.has(k)) groups.set(k, [])
    groups.get(k).push(p)
  }
  const ordered = [...groups.entries()].sort((a, b) => b[1].length - a[1].length)

  const html = `
  <div class="shell band">
    ${crumbs([{ label: 'AI Intelligence', to: 'ai' }, { label: 'Prompt vault' }])}

    ${pageHead({
      eyebrow: SUITE,
      title: 'The prompt vault',
      lede: 'Every prompt written into the library, in one place, ready to copy. A prompt is a starting point — fill in your real detail or you will get the generic answer the brackets were there to prevent.',
      accent: 'signal',
      meta: [plural(prompts.length, 'prompt'), plural(ordered.length, 'group')],
      actions: saveButton('ai:prompts', 'Save the vault')
    })}

    <div class="field" style="max-width:520px;margin:var(--s-5) 0">
      <label for="pv-q">Find a prompt</label>
      <div class="searchbar">${I.search}
        <input class="input" id="pv-q" type="search" data-pv-q autocomplete="off" placeholder="interview, email, decide, verify…"></div>
      <span class="hint">Filters the prompts below. Press Enter to search the whole site.</span>
    </div>

    <p class="t-meta faint" data-pv-count>${plural(prompts.length, 'prompt')}</p>

    <div data-pv-list style="margin-top:var(--s-5)">
      ${ordered.map(([section, list]) => `
        <section class="sec" data-pv-group data-hay="${esc(section.toLowerCase())}">
          <div class="sec-head"><h2>${esc(section)}</h2>
            <span class="t-meta faint">${plural(list.length, 'prompt')}</span></div>
          <div class="stack" style="gap:var(--s-4)">
            ${list.map(p => `
              <div data-pv-item data-hay="${esc(`${p.text} ${p.source || ''} ${section}`.toLowerCase())}">
                ${promptBox(p.source || 'Prompt', p.text)}
              </div>`).join('')}
          </div>
        </section>`).join('')}
    </div>

    <div data-pv-empty hidden>
      ${emptyState('No prompt matches that', 'Try a shorter phrase, or look in the problem library — it is organised by the problem rather than the wording.',
        `<a class="btn btn-soft" href="${href('ai/library')}">${I.inbox}Problem library</a>`)}
    </div>

    ${honesty()}
  </div>`

  return { title: 'The prompt vault', html, accent: 'signal', mount: mountPromptFilter }
}

function mountPromptFilter (root) {
  const input = root.querySelector('[data-pv-q]')
  if (!input) return
  const items = [...root.querySelectorAll('[data-pv-item]')]
  const groups = [...root.querySelectorAll('[data-pv-group]')]
  const empty = root.querySelector('[data-pv-empty]')
  const count = root.querySelector('[data-pv-count]')
  let t = 0

  const apply = () => {
    const q = input.value.trim().toLowerCase()
    let shown = 0
    for (const el of items) {
      const hit = !q || el.dataset.hay.includes(q)
      el.hidden = !hit
      if (hit) shown++
    }
    for (const g of groups) {
      g.hidden = ![...g.querySelectorAll('[data-pv-item]')].some(i => !i.hidden)
    }
    if (empty) empty.hidden = shown !== 0
    if (count) count.textContent = q
      ? `${shown} of ${items.length} match “${input.value.trim()}”`
      : plural(items.length, 'prompt')
  }

  const onInput = () => { clearTimeout(t); t = setTimeout(apply, 130) }
  const onKey = e => {
    if (e.key === 'Enter' && input.value.trim().length > 2) go(`search?q=${encodeURIComponent(input.value.trim())}`)
  }
  input.addEventListener('input', onInput)
  input.addEventListener('keydown', onKey)
  return () => {
    clearTimeout(t)
    input.removeEventListener('input', onInput)
    input.removeEventListener('keydown', onKey)
  }
}
