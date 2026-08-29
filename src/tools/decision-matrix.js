import {
  field, text, range, panel, outPanel, addBtn, delBtn, bar, tblWrap,
  callout, emptyOut, n, r2, uid, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'

const READS = 'A matrix does not decide for you. If the top two are within about 5%, the honest reading is that they are equivalent on the things you listed — either find the criterion you left out, or pick the more reversible option and move on.'

export default {
  id: 'decision-matrix',
  name: 'Decision Matrix',
  blurb: 'Score real options against criteria you weight yourself.',
  icon: 'scale',
  accent: 'forest',
  group: 'Deciding',
  purpose: 'Turns "I keep going round in circles" into a visible comparison you can argue with.',
  when: [
    'Two or more genuine options and no obvious winner',
    'You suspect one loud factor is drowning out several quiet ones',
    'You will have to explain the decision to someone later'
  ],
  reads: READS,

  initial: () => ({
    question: '',
    criteria: [
      { id: uid(), name: 'Money', weight: 3 },
      { id: uid(), name: 'Time cost', weight: 3 },
      { id: uid(), name: 'What it leads to', weight: 4 },
      { id: uid(), name: 'Risk if it goes wrong', weight: 3 }
    ],
    options: [
      { id: uid(), name: 'Option A', scores: {} },
      { id: uid(), name: 'Option B', scores: {} }
    ]
  }),

  form (s) {
    const crit = s.criteria.map((c, i) => `
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 128px 34px">
        ${text(`criteria.${i}.name`, c.name, 'What matters here')}
        <div>
          <label class="t-meta faint">Weight <span class="t-num" data-mirror="criteria.${i}.weight">${c.weight}</span>/5</label>
          ${range(`criteria.${i}.weight`, c.weight, { min: 1, max: 5 })}
        </div>
        ${s.criteria.length > 1 ? delBtn('delCrit', i, `Remove ${c.name || 'criterion'}`) : '<span></span>'}
      </div>`).join('')

    const opts = s.options.map((o, i) => `
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px">
        ${text(`options.${i}.name`, o.name, 'Name this option')}
        ${s.options.length > 1 ? delBtn('delOpt', i, `Remove ${o.name || 'option'}`) : '<span></span>'}
      </div>
      <div class="rowitem" style="margin-top:2px">
        ${s.criteria.map(c => `
          <div class="field">
            <label>${esc(c.name || 'Criterion')}
              <span class="t-num" data-mirror="options.${i}.scores.${c.id}">${o.scores[c.id] ?? 3}</span>/5</label>
            ${range(`options.${i}.scores.${c.id}`, o.scores[c.id] ?? 3, { min: 1, max: 5 })}
          </div>`).join('')}
      </div>`).join('')

    return `
      ${panel('The decision', field('What are you actually deciding?',
        text('question', s.question, 'e.g. Take the internal move or stay in my team'),
        'Write it as a choice, not a feeling.'))}
      ${panel('What matters', crit, addBtn('addCrit', 'Add criterion'))}
      ${panel('The options', opts, addBtn('addOpt', 'Add option'))}`
  },

  output (s) {
    const totalW = s.criteria.reduce((a, c) => a + n(c.weight), 0)
    if (!totalW || !s.options.length) {
      return outPanel('Result', emptyOut('Add a criterion and an option', 'The comparison appears here as you fill it in.'))
    }

    const rows = s.options.map(o => {
      const raw = s.criteria.reduce((a, c) => a + n(c.weight) * n(o.scores[c.id] ?? 3), 0)
      return { o, name: o.name || 'Untitled', raw, p: Math.round((raw / (totalW * 5)) * 100) }
    }).sort((a, b) => b.raw - a.raw)

    const top = rows[0], second = rows[1]
    const gap = second ? top.p - second.p : null

    const verdict = gap == null
      ? callout('One option', 'With a single option there is nothing to compare. Add the alternative you are quietly weighing it against — including "do nothing", which is always on the table.', 'info')
      : gap <= 5
        ? callout('Too close to call', `<strong>${esc(top.name)}</strong> leads <strong>${esc(second.name)}</strong> by ${gap} points. On the things you listed, these are equivalent. Either a criterion is missing, or you should choose the more reversible one and stop spending attention here.`, 'warning')
        : gap <= 15
          ? callout('A real but narrow lead', `<strong>${esc(top.name)}</strong> is ahead by ${gap} points — a genuine preference, not a landslide. Check the criterion driving the gap below. If you would not defend that weighting out loud, revisit it.`, 'info')
          : callout('A clear result', `<strong>${esc(top.name)}</strong> wins by ${gap} points. If that feels wrong, the matrix is telling you something real: a criterion you care about is missing, or you weighted it too low to be honest.`, 'success')

    let driver = null
    if (second) {
      driver = s.criteria.map(c => ({
        name: c.name || 'Criterion',
        delta: n(c.weight) * (n(top.o.scores[c.id] ?? 3) - n(second.o.scores[c.id] ?? 3))
      })).sort((x, y) => Math.abs(y.delta) - Math.abs(x.delta))[0]
    }

    return outPanel('Result', `
      ${tblWrap(`
        <thead><tr><th>Option</th><th class="n">Score</th><th style="width:34%">Relative</th></tr></thead>
        <tbody>${rows.map((r, i) => `
          <tr${i === 0 && gap > 5 ? ' class="lead"' : ''}>
            <td>${esc(r.name)}</td>
            <td class="n">${r2(r.raw)}</td>
            <td>${bar(r.p)} <span class="t-meta faint">${r.p}%</span></td>
          </tr>`).join('')}</tbody>`)}
      <div style="margin-top:var(--s-4)">${verdict}</div>
      ${driver && Math.abs(driver.delta) > 0
        ? `<p class="t-small muted" style="margin-top:var(--s-3)">The criterion doing most of the work is <strong>${esc(driver.name)}</strong>. If that weighting is wrong, the answer is wrong.</p>`
        : ''}
      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  actions: {
    addCrit: s => s.criteria.push({ id: uid(), name: '', weight: 3 }),
    delCrit: (s, { i }) => s.criteria.splice(i, 1),
    addOpt: s => s.options.push({ id: uid(), name: '', scores: {} }),
    delOpt: (s, { i }) => s.options.splice(i, 1)
  },

  summary (s) {
    const totalW = s.criteria.reduce((a, c) => a + n(c.weight), 0) || 1
    const rows = s.options.map(o => ({
      name: o.name || 'Untitled',
      raw: s.criteria.reduce((a, c) => a + n(c.weight) * n(o.scores[c.id] ?? 3), 0)
    })).sort((a, b) => b.raw - a.raw)
    const close = rows.length > 1 && rows[0].raw - rows[1].raw <= totalW * 5 * 0.05
    return [
      stamp('Decision Matrix'),
      `Decision: ${s.question || '(not stated)'}`,
      head('Criteria and weights'),
      ...s.criteria.map(c => `  ${c.name || 'Criterion'} — weight ${c.weight}/5`),
      head('Scores'),
      ...rows.map((r, i) => `  ${i + 1}. ${r.name} — ${r2(r.raw)} (${Math.round((r.raw / (totalW * 5)) * 100)}%)`),
      '',
      close
        ? 'Reading: too close to call. Treat these as equivalent and choose the more reversible option.'
        : `Reading: ${rows[0]?.name || '-'} leads on the criteria as weighted.`,
      '',
      'A matrix supports judgement. It does not carry the responsibility.'
    ].join('\n')
  }
}
