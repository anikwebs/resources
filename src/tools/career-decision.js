import {
  field, text, area, range, number, select, panel, outPanel, addBtn, delBtn,
  bar, tblWrap, callout, emptyOut, n, r1, uid, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'

const READS = 'Most career decisions are judged on the salary and the title, which are the two things that change fastest and matter least in five years. What compounds is what you learn, who you work with, and what the role lets you do next.'

const FACTORS = [
  { k: 'learn', label: 'What you will learn', hint: 'Skills that transfer somewhere else', w: 5 },
  { k: 'next', label: 'What it opens next', hint: 'Where you can go from here', w: 5 },
  { k: 'people', label: 'The people', hint: 'Manager and colleagues you would learn from', w: 4 },
  { k: 'pay', label: 'Money', hint: 'Total, not headline', w: 3 },
  { k: 'life', label: 'Effect on the rest of your life', hint: 'Hours, commute, control, health', w: 4 },
  { k: 'meaning', label: 'Whether the work interests you', hint: 'Sustainable attention, not passion', w: 3 },
  { k: 'security', label: 'Stability', hint: 'Funding, sector, the organisation itself', w: 3 }
]

export default {
  id: 'career-decision',
  name: 'Career Decision Tool',
  blurb: 'Weigh a role change on what compounds, not what flatters.',
  icon: 'route',
  accent: 'atlas',
  group: 'Deciding',
  purpose: 'Compares roles on the factors that still matter in five years.',
  when: [
    'An offer is on the table',
    'You are deciding whether to stay',
    'A move looks good on paper and feels wrong'
  ],
  reads: READS,

  initial: () => ({
    question: '',
    horizon: '',
    options: [
      { id: uid(), name: 'Stay where I am', scores: {}, note: '' },
      { id: uid(), name: 'The new role', scores: {}, note: '' }
    ],
    weights: FACTORS.reduce((o, f) => (o[f.k] = f.w, o), {}),
    regret: '',
    reversible: ''
  }),

  form (s) {
    const w = `
      <div class="row-wrap" style="gap:var(--s-4)">
        ${FACTORS.map(f => `
          <div class="field grow" style="min-width:210px">
            <label>${esc(f.label)} <span class="t-num" data-mirror="weights.${f.k}">${s.weights[f.k]}</span>/5</label>
            ${range(`weights.${f.k}`, s.weights[f.k] ?? f.w, { min: 1, max: 5 })}
            <span class="hint">${esc(f.hint)}</span>
          </div>`).join('')}
      </div>`

    const opts = s.options.map((o, i) => `
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px">
        ${text(`options.${i}.name`, o.name, 'Name this option')}
        ${s.options.length > 1 ? delBtn('delOpt', i, 'Remove option') : '<span></span>'}
      </div>
      <div class="rowitem" style="margin-top:2px">
        <div class="row-wrap" style="gap:var(--s-4)">
          ${FACTORS.map(f => `
            <div class="field grow" style="min-width:190px">
              <label>${esc(f.label)} <span class="t-num" data-mirror="options.${i}.scores.${f.k}">${o.scores[f.k] ?? 3}</span>/5</label>
              ${range(`options.${i}.scores.${f.k}`, o.scores[f.k] ?? 3, { min: 1, max: 5 })}
            </div>`).join('')}
        </div>
        ${field('Anything you know that the scores do not capture?', text(`options.${i}.note`, o.note, 'Optional'))}
      </div>`).join('')

    return `
      ${panel('The decision', `
        ${field('What are you deciding?', text('question', s.question, 'e.g. Accept the platform team offer or stay'))}
        ${field('What do you want to be able to do in three years?', area('horizon', s.horizon, 'Answer this before you score anything — it changes which factors deserve weight.', 2))}`)}
      ${panel('How much each factor matters to you', w)}
      ${panel('The options', opts, addBtn('addOpt', 'Add option'))}
      ${panel('Two last questions', `
        ${field('In five years, which choice would you regret not taking?', area('regret', s.regret, 'Regret is a better guide than excitement — it is quieter and more honest.', 2))}
        ${field('If it goes badly, how do you get out?', text('reversible', s.reversible, 'e.g. Two-year commitment, or: could return within six months'))}`)}`
  },

  output (s) {
    const totalW = FACTORS.reduce((a, f) => a + n(s.weights[f.k] ?? f.w), 0)
    if (!s.options.length || !totalW) return outPanel('Result', emptyOut('Add an option', 'The comparison appears here.'))

    const rows = s.options.map(o => {
      const raw = FACTORS.reduce((a, f) => a + n(s.weights[f.k] ?? f.w) * n(o.scores[f.k] ?? 3), 0)
      return { o, name: o.name || 'Untitled', raw, p: Math.round((raw / (totalW * 5)) * 100) }
    }).sort((a, b) => b.raw - a.raw)

    const top = rows[0], second = rows[1]
    const gap = second ? top.p - second.p : null

    const compounding = ['learn', 'next', 'people']
    const compScore = o => compounding.reduce((a, k) => a + n(o.scores[k] ?? 3), 0)
    const payLed = second && n(top.o.scores.pay ?? 3) > n(second.o.scores.pay ?? 3) &&
      compScore(top.o) <= compScore(second.o)

    return outPanel('Result', `
      ${tblWrap(`
        <thead><tr><th>Option</th><th class="n">Score</th><th style="width:32%">Relative</th><th class="n">Compounding</th></tr></thead>
        <tbody>${rows.map((r, i) => `
          <tr${i === 0 && gap > 6 ? ' class="lead"' : ''}>
            <td>${esc(r.name)}</td>
            <td class="n">${r1(r.raw)}</td>
            <td>${bar(r.p)} <span class="t-meta faint">${r.p}%</span></td>
            <td class="n">${compScore(r.o)}/15</td>
          </tr>`).join('')}</tbody>`)}

      <div style="margin-top:var(--s-4)">
        ${gap == null
          ? callout('Add the alternative', 'One option is not a decision. Include staying exactly as you are — it is a real choice with real consequences, and it is the one people forget to score.', 'info')
          : gap <= 6
            ? callout('Genuinely close', `${esc(top.name)} and ${esc(second.name)} are within ${gap} points. When two roles are this close, decide on reversibility and on the people — those are the two factors that most reliably determine whether you are glad in a year.`, 'warning')
            : callout('The weighted answer', `<strong>${esc(top.name)}</strong> leads by ${gap} points on the factors as you weighted them.`, 'success')}
      </div>

      ${payLed ? `<div style="margin-top:var(--s-3)">${callout('Money is carrying this', `${esc(top.name)} wins partly on pay while scoring lower on learning, progression and people — the three things that compound. That trade is sometimes right, especially if you need the money now. Just make it knowingly rather than by accident.`, 'warning')}</div>` : ''}

      ${s.regret.trim() ? `<div style="margin-top:var(--s-3)">${callout('Your own answer on regret', `${esc(s.regret)}<br><br>If this contradicts the table, trust this. The table only knows what you told it.`, 'info')}</div>` : ''}

      ${s.reversible.trim()
        ? `<div style="margin-top:var(--s-3)">${callout('Reversibility', esc(s.reversible), 'info')}</div>`
        : `<div style="margin-top:var(--s-3)">${callout('How reversible is it?', 'You have not answered this. It is the most useful tiebreaker there is: when two options are close, take the one you can undo.', 'warning')}</div>`}

      ${!s.horizon.trim() ? `<div style="margin-top:var(--s-3)">${callout('Missing the horizon', 'You have not said what you want to be able to do in three years. Without it, you are scoring the options against nothing, and the loudest factor wins by default.', 'danger')}</div>` : ''}

      ${rows.some(r => r.o.note && r.o.note.trim()) ? `<div style="margin-top:var(--s-3)"><p class="eyebrow">Your notes</p>
        <ul class="marklist">${rows.filter(r => r.o.note && r.o.note.trim()).map(r => `<li><strong>${esc(r.name)}:</strong> ${esc(r.o.note)}</li>`).join('')}</ul></div>` : ''}

      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  actions: {
    addOpt: s => s.options.push({ id: uid(), name: '', scores: {}, note: '' }),
    delOpt: (s, { i }) => s.options.splice(i, 1)
  },

  summary (s) {
    const totalW = FACTORS.reduce((a, f) => a + n(s.weights[f.k] ?? f.w), 0) || 1
    const rows = s.options.map(o => ({
      name: o.name || 'Untitled',
      raw: FACTORS.reduce((a, f) => a + n(s.weights[f.k] ?? f.w) * n(o.scores[f.k] ?? 3), 0),
      note: o.note
    })).sort((a, b) => b.raw - a.raw)
    return [
      stamp('Career Decision Tool'),
      `Decision: ${s.question || '(not stated)'}`,
      `Three-year aim: ${s.horizon || '(not stated)'}`,
      head('Factor weights'),
      ...FACTORS.map(f => `  ${f.label} — ${n(s.weights[f.k] ?? f.w)}/5`),
      head('Options'),
      ...rows.map((r, i) => `  ${i + 1}. ${r.name} — ${r1(r.raw)} (${Math.round((r.raw / (totalW * 5)) * 100)}%)${r.note ? `\n     note: ${r.note}` : ''}`),
      head('The quieter questions'),
      `  Regret: ${s.regret || '(not answered)'}`,
      `  Exit:   ${s.reversible || '(not answered)'}`,
      '',
      READS
    ].join('\n')
  }
}
