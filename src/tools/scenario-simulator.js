import {
  field, text, area, number, range, panel, outPanel, addBtn, delBtn, bar, tblWrap,
  callout, emptyOut, n, r1, num, uid, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'

const READS = 'An expected value is an average of futures you will not experience — you get exactly one. Use it to compare options, then check that you could survive the bad branch. A high average with a fatal downside is a bad plan.'

export default {
  id: 'scenario-simulator',
  name: 'Scenario Simulator',
  blurb: 'Run a plan through good, likely and bad futures before committing.',
  icon: 'shuffle',
  accent: 'atlas',
  group: 'Deciding',
  purpose: 'Tests whether a plan survives the version of the future you are not picturing.',
  when: [
    'You have one plan and it assumes things go roughly to schedule',
    'The downside has not been costed, only mentioned',
    'You are about to commit money, time or reputation'
  ],
  reads: READS,

  initial: () => ({
    plan: '',
    assumption: '',
    horizon: '',
    scenarios: [
      { id: uid(), name: 'It goes well', prob: 25, value: 0, story: '', survive: 'yes', signal: '' },
      { id: uid(), name: 'It goes roughly as expected', prob: 50, value: 0, story: '', survive: 'yes', signal: '' },
      { id: uid(), name: 'It goes badly', prob: 25, value: 0, story: '', survive: 'yes', signal: '' }
    ],
    hedge: ''
  }),

  form (s) {
    const rows = s.scenarios.map((sc, i) => `
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px;margin-top:${i ? 'var(--s-3)' : '0'}">
        ${text(`scenarios.${i}.name`, sc.name, 'Name this future')}
        ${s.scenarios.length > 1 ? delBtn('del', i, 'Remove scenario') : '<span></span>'}
      </div>
      <div class="rowitem" style="margin-top:2px">
        ${field('What actually happens in this version?', area(`scenarios.${i}.story`, sc.story, 'Concrete events, not adjectives.', 2))}
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:170px">
            <label>Chance <span class="t-num" data-mirror="scenarios.${i}.prob">${sc.prob}</span>%</label>
            ${range(`scenarios.${i}.prob`, sc.prob, { min: 0, max: 100, step: 5 })}
          </div>
          <div class="field grow" style="min-width:150px">
            <label>Value if it happens</label>
            ${number(`scenarios.${i}.value`, sc.value, { min: -100000000, max: 100000000 })}
            <span class="hint">Money, hours saved, or a −10 to +10 score. Use one unit throughout.</span>
          </div>
        </div>
        ${field('Could you survive this outcome?', `<select class="select" data-bind="scenarios.${i}.survive">
          ${[['yes', 'Yes — unpleasant but survivable'], ['hard', 'Only with serious damage'], ['no', 'No — this would be ruinous']]
            .map(([v, l]) => `<option value="${v}"${sc.survive === v ? ' selected' : ''}>${l}</option>`).join('')}
        </select>`)}
        ${field('Earliest signal you are on this branch', text(`scenarios.${i}.signal`, sc.signal, 'What you would notice first, if you were watching for it'))}
      </div>`).join('')

    return `
      ${panel('The plan', `
        ${field('What are you planning to do?', text('plan', s.plan, 'e.g. Go freelance in April'))}
        ${field('What is the assumption it rests on?', area('assumption', s.assumption, 'The thing that, if false, breaks the plan. Every plan has one.', 2))}
        ${field('Over what period?', text('horizon', s.horizon, 'e.g. The first six months'))}`)}
      ${panel('The futures', rows, addBtn('add', 'Add scenario'))}
      ${panel('Hedge', field('What would make the bad branch survivable?', area('hedge', s.hedge, 'A reserve, a contract clause, a fallback, a smaller first version, an exit date.', 2), 'This is usually a better use of effort than trying to make the good branch more likely.'))}`
  },

  output (s) {
    const scs = s.scenarios.filter(sc => (sc.name || '').trim())
    if (!scs.length) return outPanel('The simulation', emptyOut('Name at least one future', 'Expected value and survivability appear here.'))

    const totalProb = scs.reduce((a, sc) => a + n(sc.prob), 0)
    const ev = totalProb > 0
      ? scs.reduce((a, sc) => a + (n(sc.prob) / totalProb) * n(sc.value), 0)
      : 0

    const fatal = scs.filter(sc => sc.survive === 'no')
    const hard = scs.filter(sc => sc.survive === 'hard')
    const fatalProb = fatal.reduce((a, sc) => a + n(sc.prob), 0)
    const unwatched = scs.filter(sc => n(sc.prob) >= 15 && !(sc.signal || '').trim())
    const worst = scs.slice().sort((a, b) => n(a.value) - n(b.value))[0]
    const probOff = Math.abs(totalProb - 100) > 1

    return outPanel('The simulation', `
      ${tblWrap(`
        <thead><tr><th>Future</th><th class="n">Chance</th><th class="n">Value</th><th>Survivable</th></tr></thead>
        <tbody>${scs.map(sc => `
          <tr>
            <td>${esc(sc.name)}</td>
            <td class="n">${totalProb > 0 ? Math.round((n(sc.prob) / totalProb) * 100) : 0}%</td>
            <td class="n">${num(r1(n(sc.value)))}</td>
            <td>${sc.survive === 'no' ? '<span class="badge badge-danger">No</span>' : sc.survive === 'hard' ? '<span class="badge badge-warning">Barely</span>' : '<span class="badge badge-success">Yes</span>'}</td>
          </tr>`).join('')}</tbody>`)}

      <div class="stats" style="margin:var(--s-4) 0">
        <div class="stat"><b>${num(r1(ev))}</b><span>expected value</span></div>
        <div class="stat"><b>${num(r1(n(worst?.value)))}</b><span>worst case</span></div>
        <div class="stat"><b>${Math.round(fatalProb)}%</b><span>chance of ruin</span></div>
      </div>

      ${fatal.length
        ? callout('Stop here', `${Math.round(fatalProb)}% of your probability sits on an outcome you said you could not survive: ${fatal.map(sc => `<strong>${esc(sc.name)}</strong>`).join(', ')}. The expected value is irrelevant. You get one run of this. Either hedge that branch until it becomes survivable, shrink the commitment, or do not proceed.`, 'danger')
        : hard.length
          ? callout('Survivable, barely', `${hard.map(sc => `<strong>${esc(sc.name)}</strong>`).join(', ')} would do serious damage. Before committing, write down exactly what would get you out and how long it would take. If the answer is vague, that is your real risk.`, 'warning')
          : ev > 0
            ? callout('The plan holds', `Positive expected value and no ruinous branch. That is the combination worth acting on. Take the smallest version first if one exists — you learn most from the first real contact.`, 'success')
            : callout('Negative on average', `The expected value is ${num(r1(ev))}. Either the plan is not worth it as constructed, or your value estimates are pessimistic. Check them before abandoning it — people routinely under-price the good branch of things they are nervous about.`, 'warning')}

      ${probOff ? `<div style="margin-top:var(--s-3)">${callout('Probabilities total ' + Math.round(totalProb) + '%', 'They have been normalised for the calculation above, but the gap is worth a look. Either a future is missing or one is over-weighted. The commonest error is leaving out "nothing much changes", which is very often the most likely branch of all.', 'info')}</div>` : ''}

      ${unwatched.length ? `<div style="margin-top:var(--s-3)">${callout('No early warning', `${unwatched.length} likely future${unwatched.length === 1 ? ' has' : 's have'} no named signal. Naming what you would notice first is what converts a scenario exercise into something that changes your behaviour — otherwise you find out at full size, late.`, 'warning')}</div>` : ''}

      ${s.assumption.trim()
        ? `<div style="margin-top:var(--s-3)">${callout('The load-bearing assumption', `${esc(s.assumption)}<br><br>Test this cheaply and early. Almost all plans fail here rather than in execution.`, 'info')}</div>`
        : `<div style="margin-top:var(--s-3)">${callout('No assumption named', 'You have not identified what the plan rests on. Every plan has one load-bearing assumption; not knowing yours means you cannot test it.', 'warning')}</div>`}

      ${s.hedge.trim()
        ? `<div style="margin-top:var(--s-3)">${callout('Your hedge', esc(s.hedge), 'success')}</div>`
        : `<div style="margin-top:var(--s-3)">${callout('Nothing hedged', 'You have not said what would make the bad branch survivable. Making the downside smaller is almost always cheaper and more reliable than making the upside more likely.', 'warning')}</div>`}

      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  actions: {
    add: s => s.scenarios.push({ id: uid(), name: '', prob: 10, value: 0, story: '', survive: 'yes', signal: '' }),
    del: (s, { i }) => s.scenarios.splice(i, 1)
  },

  summary (s) {
    const scs = s.scenarios.filter(sc => (sc.name || '').trim())
    const totalProb = scs.reduce((a, sc) => a + n(sc.prob), 0)
    const ev = totalProb > 0 ? scs.reduce((a, sc) => a + (n(sc.prob) / totalProb) * n(sc.value), 0) : 0
    const surv = { yes: 'survivable', hard: 'serious damage', no: 'RUINOUS' }
    return [
      stamp('Scenario Simulator'),
      `Plan: ${s.plan || '(not stated)'}`,
      `Load-bearing assumption: ${s.assumption || '(not identified)'}`,
      `Horizon: ${s.horizon || '(not stated)'}`,
      head('Futures'),
      ...scs.map(sc => [
        `  ${sc.name} — ${totalProb > 0 ? Math.round((n(sc.prob) / totalProb) * 100) : 0}% · value ${r1(n(sc.value))} · ${surv[sc.survive]}`,
        sc.story ? `     ${sc.story}` : '',
        `     early signal: ${sc.signal || '(none named)'}`
      ].filter(Boolean).join('\n')),
      '',
      `Expected value: ${r1(ev)}`,
      scs.some(sc => sc.survive === 'no')
        ? 'WARNING: a ruinous branch exists. Expected value does not apply — hedge or do not proceed.'
        : 'No ruinous branch recorded.',
      head('Hedge'),
      `  ${s.hedge || '(none — make the downside smaller)'}`,
      '',
      READS
    ].join('\n')
  }
}
