import {
  field, text, area, number, select, panel, outPanel, addBtn, delBtn,
  tblWrap, callout, emptyOut, n, r1, uid, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'

const READS = 'A pre-mortem works because of the tense. Asked "what could go wrong?", people list polite risks. Told "it is six months later and this failed — why?", the same people produce the real reasons, including the ones they were not willing to say in the planning meeting.'

const LIKE = [
  { v: '1', l: 'Very unlikely' }, { v: '2', l: 'Unlikely' },
  { v: '3', l: 'Possible' }, { v: '4', l: 'Likely' }, { v: '5', l: 'Near certain' }
]
const HARM = [
  { v: '1', l: 'Annoying' }, { v: '2', l: 'Costly' },
  { v: '3', l: 'Serious' }, { v: '4', l: 'Severe' }, { v: '5', l: 'Fatal to the plan' }
]

export default {
  id: 'pre-mortem',
  name: 'Pre-Mortem',
  blurb: 'Assume it already failed, then work backwards to what you would change now.',
  icon: 'alert',
  accent: 'signal',
  group: 'Deciding',
  purpose: 'Surfaces the failure causes people will not raise prospectively, and converts each into a signal you can watch for.',
  when: [
    'Before you commit to something expensive or hard to reverse',
    'When everyone in the room agrees and nobody is uneasy',
    'When a plan depends on several things going right at once'
  ],
  reads: READS,

  initial: () => ({
    plan: '',
    horizon: '6 months',
    causes: [
      { id: uid(), cause: '', like: '3', harm: '3', signal: '', prevent: '' }
    ]
  }),

  form (s) {
    const rows = s.causes.map((c, i) => `
      <div class="panel" style="padding:var(--s-4);margin-top:${i ? 'var(--s-3)' : '0'};background:var(--surface-2)">
        <div class="row-wrap between" style="margin-bottom:var(--s-3)">
          <span class="eyebrow">Cause ${i + 1}</span>
          ${s.causes.length > 1 ? delBtn('del', i, 'Remove this cause') : ''}
        </div>
        ${field('It failed because…', text(`causes.${i}.cause`, c.cause, 'Say it as a completed fact. "The data migration was never finished."'))}
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:150px"><label>How likely</label>${select(`causes.${i}.like`, c.like, LIKE)}</div>
          <div class="field grow" style="min-width:150px"><label>How bad</label>${select(`causes.${i}.harm`, c.harm, HARM)}</div>
        </div>
        ${field('The earliest signal you would actually notice', text(`causes.${i}.signal`, c.signal, 'Something observable, weeks before the failure. "Two sprints in a row miss the migration ticket."'))}
        ${field('What would prevent or cap it', text(`causes.${i}.prevent`, c.prevent, 'One action, owned by someone, with a date'))}
      </div>`).join('')

    return `
      ${panel('The plan', `
        ${field('What are you about to commit to?', area('plan', s.plan, 'One or two sentences. The decision, not the aspiration.', 3))}
        <div class="field" style="max-width:200px"><label>Look back from</label>
          ${text('horizon', s.horizon, 'e.g. 6 months')}</div>
        <div style="margin-top:var(--s-3)">${callout('How to use this properly',
          `It is <strong>${esc(s.horizon || 'six months')}</strong> from now. The plan failed — not partly, completely. You are writing the post-mortem. List the causes in the past tense, and include the one that is politically awkward to say. That one is usually the real answer.`, 'info')}</div>`)}
      ${panel('Why it failed', `${rows}
        <div class="row" style="margin-top:var(--s-4)">${addBtn('add', 'Add another cause')}</div>
        <p class="t-caption faint" style="margin-top:var(--s-3)">Five to eight causes is the useful range. Under three usually means the exercise is being done politely.</p>`)}`
  },

  output (s) {
    const causes = s.causes.filter(c => (c.cause || '').trim())
    if (!causes.length) {
      return outPanel('The pre-mortem', emptyOut('Write the first failure cause', 'Past tense. It has already happened.'))
    }

    const scored = causes.map(c => {
      const l = n(c.like)
      const h = n(c.harm)
      return { ...c, l, h, score: l * h }
    }).sort((a, b) => b.score - a.score)

    const top = scored[0]
    const critical = scored.filter(c => c.score >= 12)
    const noSignal = scored.filter(c => !(c.signal || '').trim())
    const noPrevent = scored.filter(c => !(c.prevent || '').trim())
    const covered = scored.filter(c => (c.signal || '').trim() && (c.prevent || '').trim()).length
    const avg = scored.reduce((t, c) => t + c.score, 0) / scored.length

    const band = c => c.score >= 16 ? 'danger' : c.score >= 9 ? 'warning' : 'info'
    const label = c => c.score >= 16 ? 'Deal with this before starting' : c.score >= 9 ? 'Needs a named owner' : 'Watch only'

    return outPanel('The pre-mortem', `
      <div class="stats" style="margin-bottom:var(--s-4)">
        <div class="stat"><b>${scored.length}</b><span>causes named</span></div>
        <div class="stat"><b>${critical.length}</b><span>serious and likely</span></div>
        <div class="stat"><b>${covered}/${scored.length}</b><span>have signal and prevention</span></div>
      </div>

      ${scored.length < 3
        ? callout('Too few causes for this to have worked', 'Under three causes almost always means the exercise was done politely rather than honestly. Add the one that would embarrass someone, including you. That is the one this technique exists to surface.', 'warning')
        : critical.length >= 3
          ? callout(`${critical.length} causes are both likely and serious`, 'This plan does not fail in one way — it has several independent routes to failure, and they compound. Either reduce the scope until fewer of them apply, or delay until the top two have owners and dates.', 'danger')
          : avg >= 9
            ? callout('The risk is concentrated, not diffuse', 'Most of the exposure sits in the top two or three causes. That is a good position: it means a small number of specific actions changes the outcome materially.', 'warning')
            : callout('No single cause dominates', 'The failure modes you have named are individually survivable. The main remaining risk in a plan like this is drift rather than collapse — so the signals below matter more than the preventions.', 'success')}

      <div style="margin-top:var(--s-5)">
        <p class="eyebrow">Causes, worst first</p>
        ${tblWrap(`
          <thead><tr><th>It failed because…</th><th class="n">Risk</th><th>Verdict</th><th>Earliest signal</th></tr></thead>
          <tbody>${scored.map((c, i) => `
            <tr${i === 0 && scored.length > 1 && c.score >= 12 ? ' class="lead"' : ''}>
              <td><strong>${esc(c.cause)}</strong><br><span class="t-meta faint">${esc((LIKE.find(x => x.v === String(c.l)) || {}).l || '')} · ${esc((HARM.find(x => x.v === String(c.h)) || {}).l || '')}</span></td>
              <td class="n">${c.score}</td>
              <td class="t-small">${esc(label(c))}</td>
              <td class="t-small">${c.signal.trim() ? esc(c.signal) : '<span class="faint">none named</span>'}</td>
            </tr>`).join('')}</tbody>`)}
      </div>

      ${top && top.score >= 9 ? `<div style="margin-top:var(--s-4)">${callout('The one to act on now',
        `<strong>${esc(top.cause)}</strong><br><br>${top.prevent.trim() ? `Prevention: ${esc(top.prevent)}` : 'You have not written a prevention for it. Do that before anything else in this list — an identified risk with no owner is just a documented regret.'}${top.signal.trim() ? `<br>Watch for: ${esc(top.signal)}` : ''}`, band(top))}</div>` : ''}

      ${noSignal.length ? `<div style="margin-top:var(--s-3)">${callout(`${noSignal.length} cause${noSignal.length > 1 ? 's have' : ' has'} no early signal`,
        `${noSignal.slice(0, 4).map(c => esc(c.cause)).join('; ')}. A risk you cannot detect early is one you will only meet at full size. For each of these, ask what would be observably different four weeks before it went wrong — that is the thing to put on a dashboard or in a calendar reminder.`, 'warning')}</div>` : ''}

      ${noPrevent.length ? `<div style="margin-top:var(--s-3)">${callout(`${noPrevent.length} cause${noPrevent.length > 1 ? 's have' : ' has'} no prevention`,
        'Naming a risk feels like managing it. It is not. Each of these needs one action, one owner and one date, or it should be explicitly accepted and written down as accepted.', 'info')}</div>` : ''}

      ${covered === scored.length && scored.length >= 3 ? `<div style="margin-top:var(--s-3)">${callout('This is a usable plan',
        `Every cause has a signal and a prevention. Put the signals somewhere you will actually see them, and re-run this exercise at the halfway point — roughly ${esc(s.horizon || 'three months')} in, when the early signals should already be visible either way.`, 'success')}</div>` : ''}

      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  actions: {
    add: s => s.causes.push({ id: uid(), cause: '', like: '3', harm: '3', signal: '', prevent: '' }),
    del: (s, { i }) => s.causes.splice(i, 1)
  },

  summary (s) {
    const causes = s.causes.filter(c => (c.cause || '').trim())
      .map(c => ({ ...c, score: n(c.like) * n(c.harm) }))
      .sort((a, b) => b.score - a.score)
    return [
      stamp('Pre-Mortem'),
      `Plan: ${s.plan || '(not stated)'}`,
      `Looking back from: ${s.horizon || '(not stated)'}`,
      head(`Causes, worst first (${causes.length})`),
      ...(causes.length ? causes.flatMap(c => [
        `  [${c.score}] ${c.cause}`,
        `        signal:  ${c.signal || '(none named)'}`,
        `        prevent: ${c.prevent || '(none named)'}`
      ]) : ['  (nothing entered)']),
      head('Rule'),
      '  A risk with no owner and no date is a documented regret, not a plan.',
      '  Re-run this at the halfway point, when the early signals are visible.',
      '',
      READS
    ].join('\n')
  }
}
