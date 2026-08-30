/* =============================================================
   AI INTELLIGENCE — the interactive half.
   Spec §32 role-play, §35 workflow builder, §41 battle tests,
   §42 resourcefulness score, §43 master challenge.

   These pages hold state, so they are split from ai.js and loaded
   only when visited. Everything persists to localStorage and
   nothing is sent anywhere.

   Design rule carried over from the toolkit: when you type, only
   the output side redraws. Inputs are never replaced, so focus
   and cursor position survive.
   ============================================================= */

import { esc, md, copy, toast, debounce } from '../core/dom.js'
import { I } from '../core/icons.js'
import { href } from '../core/router.js'
import {
  getNote, saveTool, loadTool, clearTool,
  recordBattle, isDone, setDone
} from '../core/store.js'
import {
  PERSONAS, ROLEPLAY_RULES, PIPELINE, BATTLES,
  SCORE_DIMS, SCORE_BANDS, MASTER_CHALLENGE
} from '../data/ai.js'
import {
  pageHead, crumbs, statRow, jumpNav, alarm, promptBox, saveButton
} from './parts.js'

const honesty = () => `
  <aside class="callout callout-info" style="margin-top:var(--s-8)">
    <span class="lab">How this section works</span>
    <p>Nothing here talks to an AI model. These are structures you fill in and
    prompts you copy into whichever assistant you use. Your entries are saved on
    this device only.</p>
  </aside>`

const noteField = (key, label, hint, placeholder, rows = 4) => {
  const domId = `n-${key.replace(/[^a-z0-9]+/gi, '-')}`
  return `
  <div class="field" style="max-width:72ch">
    <label for="${domId}">${esc(label)}</label>
    ${hint ? `<p class="t-small muted" style="margin-bottom:6px">${md(hint)}</p>` : ''}
    <textarea class="textarea" id="${domId}" rows="${rows}"
      data-note="${esc(key)}" placeholder="${esc(placeholder || '')}">${esc(getNote(key))}</textarea>
    <span class="hint">Saves as you type.</span>
  </div>`
}

/* =============================================================
   ROLE-PLAY REHEARSAL — route: ai/roleplay   (§32)
   Static, but substantial: nine briefs plus the debrief pass.
   ============================================================= */
export async function aiRoleplay () {
  const html = `
  <div class="shell band">
    ${crumbs([{ label: 'AI Intelligence', to: 'ai' }, { label: 'Role-play rehearsal' }])}

    ${pageHead({
      eyebrow: 'Practice · §32',
      title: 'Rehearse it before it is real',
      lede: 'The single most underused thing an assistant does well: it will play the difficult person, one turn at a time, for as long as you can stand it. This is the difference between having thought about a conversation and having had it.',
      accent: 'clay',
      actions: saveButton('ai:roleplay')
    })}

    <aside class="slab" data-accent="clay" style="margin:var(--s-6) 0">
      <p class="eyebrow">Why this works when reading does not</p>
      <p class="t-lede">You do not discover the gap between what you can type and what
      you can say under pressure by reading. You discover it in the third exchange,
      when the other side does not accept your first answer.</p>
    </aside>

    ${jumpNav([
      { id: 'rules', label: 'Six rules' },
      { id: 'partners', label: 'Nine partners' },
      { id: 'debrief', label: 'The debrief' }
    ])}

    <section class="sec" id="rules">
      <div class="sec-head"><h2>Six rules, or it is theatre</h2></div>
      <ol class="moves" style="max-width:78ch">
        ${ROLEPLAY_RULES.map((r, i) => `<li><b>${i + 1}</b><span>${md(r)}</span></li>`).join('')}
      </ol>
    </section>

    <section class="sec" id="partners">
      <div class="sec-head"><h2>Nine partners</h2></div>
      <p class="t-lede" style="max-width:68ch">Copy the brief, fill the brackets with your real situation, and paste it as your first message. Say your answers out loud.</p>

      <div class="stack" style="gap:var(--s-6);margin-top:var(--s-6)">
        ${PERSONAS.map(p => `
          <article class="card card-pad-lg" data-accent="${p.accent}">
            <span class="res-ic">${I[p.icon] || I.users}</span>
            <h3 class="card-title">${esc(p.role)}</h3>
            <p class="card-text">${md(p.use)}</p>
            <div style="margin-top:var(--s-4)">${promptBox('The brief — paste this first', p.brief)}</div>
            ${p.after ? `<div style="margin-top:var(--s-4)">${promptBox('The debrief — paste this when you type STOP', p.after)}</div>` : ''}
          </article>`).join('')}
      </div>
    </section>

    <section class="sec" id="debrief">
      <div class="sec-head"><h2>The debrief is the point</h2></div>
      <p class="t-lede" style="max-width:70ch">A rehearsal without a debrief is just an uncomfortable conversation you had for no reason. Always run the feedback pass, and always write down the one sentence that let you down.</p>
      ${noteField('ai:roleplay', 'What broke under pressure',
        'Which question left you with nothing? Which of your sentences weakened your own position? Write the better version now, while it is fresh.',
        'The question I could not answer was…', 5)}
    </section>

    ${alarm('It is a sparring partner, not a prophet', 'A model does not know what your actual manager will do, what your actual interviewer values, or what your actual landlord is legally required to accept. It rehearses your delivery and exposes your gaps. It does not predict the other person.')}

    ${honesty()}
  </div>`

  return {
    title: 'Role-play rehearsal',
    html,
    accent: 'clay',
    recent: { id: 'ai:roleplay', kind: 'ai', title: 'Role-play rehearsal', route: 'ai/roleplay' }
  }
}

/* =============================================================
   WORKFLOW BUILDER — route: ai/builder   (§35)

   Six pipeline stages. You fill each one in; the output pane
   assembles a written specification you can copy or hand over.
   ============================================================= */

const BUILDER_KEY = 'ai-builder'

const emptyBuild = () => ({
  name: '',
  every: '',
  stages: PIPELINE.map(() => '')
})

function migrateBuild (raw) {
  const b = emptyBuild()
  if (!raw || typeof raw !== 'object') return b
  b.name = typeof raw.name === 'string' ? raw.name : ''
  b.every = typeof raw.every === 'string' ? raw.every : ''
  if (Array.isArray(raw.stages)) {
    PIPELINE.forEach((_, i) => {
      b.stages[i] = typeof raw.stages[i] === 'string' ? raw.stages[i] : ''
    })
  }
  return b
}

const buildSpec = b => {
  const lines = [
    `WORKFLOW: ${b.name || '[unnamed]'}`,
    `RUNS: ${b.every || '[how often]'}`,
    ''
  ]
  PIPELINE.forEach((p, i) => {
    lines.push(`${i + 1}. ${p.k}  (${p.who === 'ai' ? 'the model' : 'you'})`)
    lines.push(`   ${b.stages[i] ? b.stages[i].replace(/\n/g, '\n   ') : '[not yet defined]'}`)
    lines.push('')
  })
  lines.push('CHECK BEFORE THIS RUNS FOR REAL:')
  lines.push('- Does this work need to exist at all, or should it be eliminated?')
  lines.push('- Which step catches an error before it reaches anyone else?')
  lines.push('- What happens the week the model output is wrong and nobody notices?')
  return lines.join('\n')
}

function builderOutput (b) {
  const filled = b.stages.filter(s => s.trim()).length
  const pct = Math.round((filled / PIPELINE.length) * 100)
  const gaps = PIPELINE.map((p, i) => ({ p, i })).filter(x => !b.stages[x.i].trim())
  const humanSteps = PIPELINE.filter((p, i) => p.who !== 'ai' && b.stages[i].trim()).length
  const aiSteps = PIPELINE.filter((p, i) => p.who === 'ai' && b.stages[i].trim()).length

  return `
    <div class="panel-out">
      <div class="panel-h"><span class="panel-t">Your workflow</span>
        <span class="t-meta faint">${filled}/${PIPELINE.length} steps defined</span></div>

      <div class="meter meter-lg" style="margin:var(--s-4) 0"><span style="width:${pct}%"></span></div>

      ${statRow([
        { v: aiSteps, l: 'model steps' },
        { v: humanSteps, l: 'your steps' },
        { v: `${pct}%`, l: 'defined' }
      ])}

      ${gaps.length ? `
        <div class="callout callout-warning" style="margin-top:var(--s-5)">
          <span class="lab">Not finished</span>
          <p>Still undefined: ${gaps.map(g => `<strong>${esc(g.p.k)}</strong>`).join(', ')}.
          A pipeline with an undefined review step is not a pipeline, it is a hope.</p>
        </div>` : `
        <div class="callout callout-success" style="margin-top:var(--s-5)">
          <span class="lab">All six defined</span>
          <p>Now run it manually three times before you make any of it permanent. Most
          designs fail on the input step, which is only visible once real material arrives.</p>
        </div>`}

      ${humanSteps === 0 && aiSteps > 0 ? `
        <div class="callout callout-danger" style="margin-top:var(--s-4)">
          <span class="lab">There is no human in this loop</span>
          <p>You have defined model steps and no review of your own. That is not
          leverage — it is an unattended process producing plausible output that
          nobody has checked.</p>
        </div>` : ''}

      <div style="margin-top:var(--s-5)">${promptBox('The written specification', buildSpec(b))}</div>

      <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-4)">
        <button class="btn btn-soft btn-sm" data-b-copy>${I.copy}Copy the specification</button>
        <button class="btn btn-ghost btn-sm" data-b-reset>${I.reset}Start again</button>
      </div>
    </div>`
}

export async function aiBuilder () {
  const b = migrateBuild(loadTool(BUILDER_KEY))

  const html = `
  <div class="shell band">
    ${crumbs([{ label: 'AI Intelligence', to: 'ai' }, { label: 'Workflow builder' }])}

    ${pageHead({
      eyebrow: 'Build · §35',
      title: 'Workflow builder',
      lede: 'A one-off good output is a nice afternoon. A workflow is capability. Design the whole pipeline — what arrives, what the model does, what you analyse, what you check, what comes out, and what actually happens next.',
      accent: 'atlas',
      actions: saveButton('ai:builder')
    })}

    <aside class="slab" data-accent="atlas" style="margin:var(--s-6) 0">
      <p class="eyebrow">The shape</p>
      <p class="t-lede">INPUT → AI → ANALYSE → REVIEW → OUTPUT → ACTION. Remove the review
      step and you have built a machine for distributing your own unchecked mistakes faster.</p>
    </aside>

    <div class="tool tool-split">
      <div class="panel">
        <div class="panel-h"><span class="panel-t">Define it</span></div>

        <div class="field">
          <label for="b-name">What is this workflow for?</label>
          <input class="input" id="b-name" data-b="name" value="${esc(b.name)}"
            placeholder="Turning supplier invoices into the monthly summary">
        </div>

        <div class="field">
          <label for="b-every">How often does it run?</label>
          <input class="input" id="b-every" data-b="every" value="${esc(b.every)}"
            placeholder="Weekly, Friday morning">
        </div>

        <div class="hr"></div>

        ${PIPELINE.map((p, i) => `
          <div class="field">
            <label for="b-s${i}">
              ${i + 1}. ${esc(p.k)}
              <span class="badge ${p.who === 'ai' ? 'badge-info' : 'badge-success'}" style="margin-left:8px">${p.who === 'ai' ? 'the model' : 'you'}</span>
            </label>
            <p class="t-small muted" style="margin-bottom:6px">${md(p.d)}</p>
            <textarea class="textarea" id="b-s${i}" rows="3" data-b="stages.${i}"
              placeholder="Be specific. Vague here means broken later.">${esc(b.stages[i])}</textarea>
          </div>`).join('')}
      </div>

      <div data-b-out>${builderOutput(b)}</div>
    </div>

    <section class="sec">
      ${noteField('ai:builder-log', 'What happened the first three times you ran it',
        'Where it broke, what you had to add, and whether the work should have existed at all.',
        'Run 1…')}
    </section>

    <div class="callout callout-info" style="margin-top:var(--s-7)">
      <span class="lab">Before you build anything</span>
      <p>Run the <a href="${href('ai/leverage')}">leverage ladder</a>. Automating work
      that should be eliminated is the most expensive mistake in this section.</p>
    </div>

    ${honesty()}
  </div>`

  return { title: 'Workflow builder', html, accent: 'atlas', mount: mountBuilder }
}

function mountBuilder (root) {
  let b = migrateBuild(loadTool(BUILDER_KEY))
  const out = root.querySelector('[data-b-out]')

  const redraw = () => { if (out) out.innerHTML = builderOutput(b) }
  const persist = debounce(() => saveTool(BUILDER_KEY, b), 260)

  const onInput = e => {
    const t = e.target.closest('[data-b]')
    if (!t) return
    const path = t.dataset.b
    if (path.startsWith('stages.')) {
      const i = Number(path.slice(7))
      if (Number.isInteger(i) && i >= 0 && i < PIPELINE.length) b.stages[i] = t.value
    } else if (path === 'name' || path === 'every') {
      b[path] = t.value
    }
    redraw()
    persist()
  }

  const onClick = e => {
    if (e.target.closest('[data-b-copy]')) {
      copy(buildSpec(b)).then(ok => toast(ok ? 'Specification copied' : 'Could not copy'))
      return
    }
    if (e.target.closest('[data-b-reset]')) {
      b = emptyBuild()
      clearTool(BUILDER_KEY)
      for (const el of root.querySelectorAll('[data-b]')) el.value = ''
      redraw()
      toast('Cleared')
    }
  }

  root.addEventListener('input', onInput)
  root.addEventListener('click', onClick)
  return () => {
    root.removeEventListener('input', onInput)
    root.removeEventListener('click', onClick)
  }
}

/* =============================================================
   BATTLE TESTS — route: ai/battles   (§41)
   Eight levels. You log an attempt; nothing is auto-awarded.
   ============================================================= */
/* Pass state lives in the shared `done` set, so a level can be
   un-marked cleanly and it shows up on the progress page with
   everything else. recordBattle() logs the attempt alongside it. */
const battleDoneId = id => `battle:${id}`
const battlePassed = id => isDone(battleDoneId(id))

export async function aiBattles () {
  const passed = BATTLES.filter(b => battlePassed(b.id)).length
  const pct = Math.round((passed / BATTLES.length) * 100)

  const html = `
  <div class="shell band">
    ${crumbs([{ label: 'AI Intelligence', to: 'ai' }, { label: 'Battle tests' }])}

    ${pageHead({
      eyebrow: 'Practice · §41',
      title: 'Eight battle tests',
      lede: 'Progressive, real, and each one has a pass condition you can check honestly. Nothing is awarded for reading the page — you mark a level passed only when the stated condition is actually true.',
      accent: 'signal',
      actions: saveButton('ai:battles')
    })}

    ${statRow([
      { v: `${passed}/${BATTLES.length}`, l: 'levels passed' },
      { v: `${pct}%`, l: 'through' },
      { v: BATTLES.length - passed, l: 'remaining' }
    ])}

    <div class="meter meter-lg" style="margin:var(--s-5) 0;max-width:420px"><span style="width:${pct}%"></span></div>

    <div class="stack" style="gap:var(--s-6)">
      ${BATTLES.map(b => battleCard(b)).join('')}
    </div>

    ${passed === BATTLES.length ? `
      <aside class="slab" data-accent="council" style="margin-top:var(--s-8)">
        <p class="eyebrow">All eight</p>
        <p class="t-lede">Then the honest next step is the
        <a href="${href('ai/challenge')}">master challenge</a> — one real problem from your
        own life through the entire system. That is the only test here with a consequence.</p>
      </aside>` : ''}

    ${honesty()}
  </div>`

  return { title: 'Battle tests', html, accent: 'signal', mount: mountBattles }
}

function battleCard (b) {
  const done = battlePassed(b.id)
  const key = `battle-note:${b.id}`
  return `
  <article class="card card-pad-lg" data-accent="${done ? 'forest' : 'signal'}" data-battle="${esc(b.id)}">
    <div class="card-meta">
      <p class="eyebrow">Level ${b.level}</p>
      ${done ? '<span class="badge badge-success">Passed</span>' : ''}
    </div>
    <h3 class="card-title">${esc(b.title)}</h3>

    <p class="card-text">${md(b.goal)}</p>

    <div class="promise" style="margin-top:var(--s-4)">
      <div><div class="lab">The task</div><div class="v">${md(b.task)}</div></div>
      <div><div class="lab">You have passed when</div><div class="v">${md(b.pass)}</div></div>
      <div><div class="lab">The trap</div><div class="v">${md(b.trap)}</div></div>
    </div>

    <div style="margin-top:var(--s-5)">
      ${noteField(key, 'What happened', '', 'What you ran, what came back, what you changed.', 3)}
    </div>

    <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-4)">
      <button class="btn ${done ? 'btn-soft' : 'btn-primary'} btn-sm" data-battle-pass="${esc(b.id)}">
        ${done ? I.circleCheck : I.circle}${done ? 'Passed — undo' : 'The condition is true — mark passed'}
      </button>
    </div>
  </article>`
}

function mountBattles (root) {
  const onClick = e => {
    const btn = e.target.closest('[data-battle-pass]')
    if (!btn) return
    const id = btn.dataset.battlePass
    const nowDone = !battlePassed(id)

    setDone(battleDoneId(id), nowDone)
    if (nowDone) recordBattle(id, 1, { passed: true, at: Date.now() })

    btn.className = `btn ${nowDone ? 'btn-soft' : 'btn-primary'} btn-sm`
    btn.innerHTML = `${nowDone ? I.circleCheck : I.circle}${nowDone ? 'Passed — undo' : 'The condition is true — mark passed'}`
    const card = btn.closest('[data-battle]')
    if (card) {
      card.dataset.accent = nowDone ? 'forest' : 'signal'
      /* The badge lives in the card's meta row — see cardHead() in
         parts.js. Must match battleCard() below or the badge lands
         nowhere. */
      const head = card.querySelector('.card-meta')
      const badge = card.querySelector('.badge-success')
      if (nowDone && !badge && head) head.insertAdjacentHTML('beforeend', '<span class="badge badge-success">Passed</span>')
      if (!nowDone && badge) badge.remove()
    }
    toast(nowDone ? 'Level marked passed' : 'Level reopened')
  }
  root.addEventListener('click', onClick)
  return () => root.removeEventListener('click', onClick)
}

/* =============================================================
   RESOURCEFULNESS SCORE — route: ai/score   (§42)
   Ten dimensions, 0-10 each. Live total, band, weakest dimension.
   ============================================================= */

const SCORE_KEY = 'ai-score'

const emptyScore = () => SCORE_DIMS.map(() => 0)

function migrateScore (raw) {
  const s = emptyScore()
  if (!Array.isArray(raw)) return s
  SCORE_DIMS.forEach((_, i) => {
    const v = Number(raw[i])
    s[i] = Number.isFinite(v) ? Math.min(10, Math.max(0, Math.round(v))) : 0
  })
  return s
}

const bandFor = total => SCORE_BANDS.find(b => total >= b.min && total <= b.max) || SCORE_BANDS[0]

function scoreOutput (vals) {
  const total = vals.reduce((a, b) => a + b, 0)
  const band = bandFor(total)
  const answered = vals.filter(v => v > 0).length
  const ranked = SCORE_DIMS.map((d, i) => ({ d, v: vals[i] })).sort((a, b) => a.v - b.v)
  const weakest = ranked.slice(0, 3)
  const strongest = [...ranked].reverse().slice(0, 2)

  return `
  <div class="panel-out">
    <div class="panel-h"><span class="panel-t">Where you stand</span>
      <span class="t-meta faint">${answered}/${SCORE_DIMS.length} rated</span></div>

    <div class="dial" style="margin:var(--s-4) 0">
      <b>${total}</b><span>out of 100</span>
    </div>

    <div class="meter meter-lg"><span style="width:${total}%"></span></div>

    <div class="callout ${total >= 65 ? 'callout-success' : total >= 45 ? 'callout-info' : 'callout-warning'}" style="margin-top:var(--s-5)">
      <span class="lab">${esc(band.k)}</span>
      <p>${md(band.d)}</p>
    </div>

    ${answered < SCORE_DIMS.length ? `
      <p class="t-small muted" style="margin-top:var(--s-4)">${SCORE_DIMS.length - answered}
      ${SCORE_DIMS.length - answered === 1 ? 'dimension is' : 'dimensions are'} still at zero.
      A zero you meant and a zero you skipped read the same here, so rate everything.</p>` : ''}

    <h3 class="t-subtitle" style="margin-top:var(--s-6)">Work on these first</h3>
    <div class="stack" style="gap:var(--s-3);margin-top:var(--s-3)">
      ${weakest.map(w => `
        <div class="rowitem">
          <div style="min-width:0">
            <strong>${esc(w.d.k)}</strong>
            <p class="t-small muted" style="margin:2px 0 0">${md(w.d.d)}</p>
          </div>
          <span class="t-meta faint">${w.v}/10</span>
        </div>`).join('')}
    </div>

    ${total > 0 ? `
      <h3 class="t-subtitle" style="margin-top:var(--s-6)">Already solid</h3>
      <div class="stack" style="gap:var(--s-2);margin-top:var(--s-3)">
        ${strongest.map(s => `<div class="rowitem"><strong>${esc(s.d.k)}</strong><span class="t-meta faint">${s.v}/10</span></div>`).join('')}
      </div>` : ''}

    <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-5)">
      <button class="btn btn-soft btn-sm" data-sc-copy>${I.copy}Copy the summary</button>
      <button class="btn btn-ghost btn-sm" data-sc-reset>${I.reset}Reset to zero</button>
    </div>
  </div>`
}

const scoreSummary = vals => {
  const total = vals.reduce((a, b) => a + b, 0)
  const band = bandFor(total)
  return [
    `AI RESOURCEFULNESS — ${total}/100 (${band.k})`,
    '',
    ...SCORE_DIMS.map((d, i) => `${String(vals[i]).padStart(2, ' ')}/10  ${d.k}`),
    '',
    band.d
  ].join('\n')
}

export async function aiScore () {
  const vals = migrateScore(loadTool(SCORE_KEY))

  const html = `
  <div class="shell band">
    ${crumbs([{ label: 'AI Intelligence', to: 'ai' }, { label: 'Resourcefulness score' }])}

    ${pageHead({
      eyebrow: 'Assess · §42',
      title: 'AI resourcefulness score',
      lede: 'Ten dimensions, rated by you, honestly. This is not a quiz with right answers — it is a mirror, and it is only useful if you rate yourself as you actually behave rather than as you intend to.',
      accent: 'council',
      actions: saveButton('ai:score')
    })}

    <aside class="slab" data-accent="council" style="margin:var(--s-6) 0">
      <p class="eyebrow">How to rate</p>
      <p class="t-lede">0 means never, 5 means sometimes and inconsistently, 10 means it is
      a reflex you would notice yourself skipping. Rate the last month, not your best week.</p>
    </aside>

    <div class="tool tool-split">
      <div class="panel">
        <div class="panel-h"><span class="panel-t">Rate yourself</span></div>
        ${SCORE_DIMS.map((d, i) => `
          <div class="field">
            <label for="sc-${i}">${esc(d.k)} <span class="t-meta faint" data-sc-v="${i}">${vals[i]}/10</span></label>
            <p class="t-small muted" style="margin-bottom:6px">${md(d.d)}</p>
            <input class="range" id="sc-${i}" type="range" min="0" max="10" step="1"
              value="${vals[i]}" data-sc="${i}" aria-describedby="sc-h-${i}">
            <span class="hint" id="sc-h-${i}">0 never · 5 inconsistently · 10 reflex</span>
          </div>`).join('')}
      </div>

      <div data-sc-out>${scoreOutput(vals)}</div>
    </div>

    <section class="sec">
      ${noteField('ai:score-note', 'The one dimension you will actually change',
        'Pick the lowest score you care about and write the specific habit you will add this week. One is better than three.',
        'The dimension is… The habit is…')}
    </section>

    ${honesty()}
  </div>`

  return { title: 'AI resourcefulness score', html, accent: 'council', mount: mountScore }
}

function mountScore (root) {
  let vals = migrateScore(loadTool(SCORE_KEY))
  const out = root.querySelector('[data-sc-out]')
  const redraw = () => { if (out) out.innerHTML = scoreOutput(vals) }
  const persist = debounce(() => saveTool(SCORE_KEY, vals), 260)

  const onInput = e => {
    const s = e.target.closest('[data-sc]')
    if (!s) return
    const i = Number(s.dataset.sc)
    if (!Number.isInteger(i) || i < 0 || i >= SCORE_DIMS.length) return
    vals[i] = Math.min(10, Math.max(0, Number(s.value) || 0))
    const lab = root.querySelector(`[data-sc-v="${i}"]`)
    if (lab) lab.textContent = `${vals[i]}/10`
    redraw()
    persist()
  }

  const onClick = e => {
    if (e.target.closest('[data-sc-copy]')) {
      copy(scoreSummary(vals)).then(ok => toast(ok ? 'Summary copied' : 'Could not copy'))
      return
    }
    if (e.target.closest('[data-sc-reset]')) {
      vals = emptyScore()
      clearTool(SCORE_KEY)
      for (const s of root.querySelectorAll('[data-sc]')) s.value = 0
      for (const l of root.querySelectorAll('[data-sc-v]')) l.textContent = '0/10'
      redraw()
      toast('Reset')
    }
  }

  root.addEventListener('input', onInput)
  root.addEventListener('click', onClick)
  return () => {
    root.removeEventListener('input', onInput)
    root.removeEventListener('click', onClick)
  }
}

/* =============================================================
   MASTER CHALLENGE — route: ai/challenge   (§43)
   Ten stages, each with a required output and a written record.
   ============================================================= */
export async function aiChallenge () {
  const mc = MASTER_CHALLENGE
  const keys = mc.stages.map(s => `ai:challenge:${s.n}`)
  const filled = keys.filter(k => getNote(k).trim()).length
  const pct = Math.round((filled / mc.stages.length) * 100)

  const html = `
  <div class="shell band">
    ${crumbs([{ label: 'AI Intelligence', to: 'ai' }, { label: 'Master challenge' }])}

    ${pageHead({
      eyebrow: 'The final test · §43',
      title: mc.title,
      lede: mc.lede,
      accent: 'council',
      actions: saveButton('ai:challenge')
    })}

    ${statRow([
      { v: `${filled}/${mc.stages.length}`, l: 'stages written' },
      { v: `${pct}%`, l: 'through' },
      { v: mc.rules.length, l: 'rules' }
    ])}

    <div class="meter meter-lg" style="margin:var(--s-5) 0;max-width:420px"><span style="width:${pct}%"></span></div>

    <aside class="slab" data-accent="council" style="margin:var(--s-6) 0">
      <p class="eyebrow">Four rules</p>
      <ul class="marklist" style="margin-top:var(--s-3)">
        ${mc.rules.map(r => `<li>${md(r)}</li>`).join('')}
      </ul>
    </aside>

    ${jumpNav(mc.stages.map(s => ({ id: `mc-${s.n}`, label: `${s.n}. ${s.k}` })))}

    <div class="stack" style="gap:var(--s-6);margin-top:var(--s-6)">
      ${mc.stages.map(s => {
        const key = `ai:challenge:${s.n}`
        const has = getNote(key).trim().length > 0
        return `
        <section class="pb" id="mc-${s.n}" data-accent="${has ? 'forest' : 'council'}">
          <div class="pb-head">
            <span class="pb-n">${s.n}</span>
            <h2>${esc(s.k)}</h2>
            ${has ? '<span class="badge badge-success" style="margin-left:auto">Written</span>' : ''}
          </div>
          <p class="t-lede" style="max-width:74ch">${md(s.d)}</p>
          <div class="promise" style="margin:var(--s-4) 0">
            <div><div class="lab">What you must end up with</div><div class="v">${md(s.out)}</div></div>
          </div>
          ${noteField(key, `Stage ${s.n} — your record`, '', 'Write it properly. A stage you have not written is a stage you have thought about.', 4)}
        </section>`
      }).join('')}
    </div>

    ${filled === mc.stages.length ? `
      <aside class="slab" data-accent="forest" style="margin-top:var(--s-8)">
        <p class="eyebrow">All ten written</p>
        <p class="t-lede">Then the test is simple: read stage 8 aloud without stage 1 to 7 in
        front of you. If you can defend the decision in your own words, and you completed
        stage 9 within 48 hours, you have finished this. Nothing here awards that — you do.</p>
        <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-5)">
          <a class="btn btn-soft" href="${href('ai/score')}">${I.chart}Re-rate yourself now</a>
          <a class="btn btn-ghost" href="${href('progress')}">${I.route}See everything you have done</a>
        </div>
      </aside>` : `
      <div class="callout callout-info" style="margin-top:var(--s-8)">
        <span class="lab">If you have not started</span>
        <p>Stage 1 is one sentence. Write it now with whatever problem is genuinely
        sitting on you this week. A hypothetical problem teaches a hypothetical skill.</p>
      </div>`}

    ${alarm('This is the only page here that proves anything', 'Everything else in this section can be read. This one cannot be faked, because stage 9 requires an irreversible action with a date, and stage 10 requires you to come back and write what actually happened.')}

    ${honesty()}
  </div>`

  return {
    title: mc.title,
    html,
    accent: 'council',
    recent: { id: 'ai:challenge', kind: 'ai', title: mc.title, route: 'ai/challenge' }
  }
}
