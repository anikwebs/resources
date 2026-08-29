import {
  field, text, area, select, panel, outPanel, addBtn, delBtn, meter,
  callout, emptyOut, uid, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'

const READS = 'Most stuck problems are badly stated rather than genuinely hard. The two questions that unstick them are: what is actually true right now, and who decides?'

export default {
  id: 'problem-canvas',
  name: 'Problem-Solving Canvas',
  blurb: 'State the problem properly, then find where it actually moves.',
  icon: 'puzzle',
  accent: 'clay',
  group: 'Thinking',
  purpose: 'Separates the symptom from the cause and the constraints you can move from the ones you cannot.',
  when: [
    'You have discussed something three times without progress',
    'The problem keeps coming back in a different form',
    'You are about to solve the visible part of it'
  ],
  reads: READS,

  initial: () => ({
    symptom: '',
    who: '',
    cost: '',
    real: '',
    evidence: '',
    decider: '',
    constraints: [{ id: uid(), t: '', movable: 'no' }],
    tried: [{ id: uid(), t: '', why: '' }],
    options: [{ id: uid(), t: '' }],
    next: ''
  }),

  form (s) {
    const cons = s.constraints.map((c, i) => `
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 180px 34px;margin-top:${i ? 'var(--s-2)' : '0'}">
        ${text(`constraints.${i}.t`, c.t, 'Budget, time, a rule, a person, a dependency')}
        ${select(`constraints.${i}.movable`, c.movable, [
          { v: 'no', l: 'Genuinely fixed' },
          { v: 'maybe', l: 'Fixed by habit only' },
          { v: 'yes', l: 'I could move it' }
        ])}
        ${s.constraints.length > 1 ? delBtn('delCon', i, 'Remove') : '<span></span>'}
      </div>`).join('')

    const tried = s.tried.map((t, i) => `
      <div class="rowitem" style="margin-top:${i ? 'var(--s-2)' : '0'}">
        ${field('What was tried', text(`tried.${i}.t`, t.t, 'The attempt'))}
        ${field('Why it did not work', text(`tried.${i}.why`, t.why, 'The actual reason, if you know it'))}
        <div class="row" style="justify-content:flex-end">${s.tried.length > 1 ? delBtn('delTried', i, 'Remove') : ''}</div>
      </div>`).join('')

    const opts = s.options.map((o, i) => `
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px;margin-top:${i ? 'var(--s-2)' : '0'}">
        ${text(`options.${i}.t`, o.t, 'A possible move — including doing nothing')}
        ${s.options.length > 1 ? delBtn('delOpt', i, 'Remove') : '<span></span>'}
      </div>`).join('')

    return `
      ${panel('The symptom', `
        ${field('What is visibly going wrong?', area('symptom', s.symptom, 'What someone would notice. Not your theory about it yet.', 2))}
        ${field('Who does it hurt, and how?', text('who', s.who, 'Named people or groups'))}
        ${field('What does it cost if nothing changes?', text('cost', s.cost, 'Time, money, trust, risk — make it concrete'), 'If nothing is lost, this may not be a problem.')}`)}
      ${panel('The real problem', `
        ${field('Underneath the symptom, what is actually wrong?', area('real', s.real, 'Ask why the symptom exists. Then ask again. Stop when you reach something you could change.', 3))}
        ${field('What evidence do you have for that?', area('evidence', s.evidence, 'Observations, data, quotes. Distinguish what you know from what you assume.', 2), 'A cause with no evidence is a hunch — useful, but label it.')}
        ${field('Who actually decides here?', text('decider', s.decider, 'A name or a role'), 'Solving a problem you have no authority over is the most common way effort disappears.')}`)}
      ${panel('Constraints', cons, addBtn('addCon', 'Add constraint'))}
      ${panel('Already tried', tried, addBtn('addTried', 'Add attempt'))}
      ${panel('Possible moves', opts, addBtn('addOpt', 'Add option'))}
      ${panel('Next action', field('What is the single next thing you will do?', text('next', s.next, 'Small, specific, and yours to do')))}`
  },

  output (s) {
    if (!s.symptom.trim()) return outPanel('The canvas', emptyOut('Start with the symptom', 'The restated problem and the gaps appear here.'))

    const cons = s.constraints.filter(c => (c.t || '').trim())
    const soft = cons.filter(c => c.movable === 'maybe' || c.movable === 'yes')
    const tried = s.tried.filter(t => (t.t || '').trim())
    const opts = s.options.filter(o => (o.t || '').trim())

    const fields = ['symptom', 'real', 'evidence', 'decider', 'next']
    const filled = fields.filter(f => (s[f] || '').trim()).length
    const complete = Math.round((filled / fields.length) * 100)

    return outPanel('The canvas', `
      <div class="field" style="margin-bottom:var(--s-4)">
        <label>Canvas completeness — ${complete}%</label>${meter(complete, true)}
      </div>

      ${s.real.trim()
        ? callout('The problem, restated', `${esc(s.real)}${s.who.trim() ? `<br><br>Affecting: ${esc(s.who)}.` : ''}${s.cost.trim() ? ` Cost of inaction: ${esc(s.cost)}.` : ''}`, 'success')
        : callout('Still describing the symptom', 'You have written what is going wrong but not why. Ask "why does that happen?" until you reach something you could actually change. Solving the symptom is what makes a problem recur in a new shape.', 'warning')}

      ${!s.evidence.trim() && s.real.trim() ? `<div style="margin-top:var(--s-3)">${callout('Unevidenced cause', 'You have named a cause but no evidence for it. That is fine as a hypothesis — but label it, and check it cheaply before anyone spends money on the fix.', 'warning')}</div>` : ''}

      ${s.decider.trim()
        ? `<div style="margin-top:var(--s-3)">${callout('Who decides', `${esc(s.decider)}. Everything you do here should be aimed at giving that person what they need to decide — not at being right in front of people who cannot act.`, 'info')}</div>`
        : `<div style="margin-top:var(--s-3)">${callout('Nobody named', 'You have not identified who decides. Find that out before you build anything. Unaddressed, this is where good analysis goes to die.', 'danger')}</div>`}

      ${soft.length ? `<div style="margin-top:var(--s-3)">${callout('Where this actually moves', `You marked ${soft.length} constraint${soft.length === 1 ? '' : 's'} as movable or fixed only by habit: ${soft.map(c => `<strong>${esc(c.t)}</strong>`).join(', ')}. That is your leverage. Almost every stuck problem is stuck against a constraint nobody has tested recently.`, 'success')}</div>` : ''}

      ${cons.length && !soft.length ? `<div style="margin-top:var(--s-3)">${callout('Everything is fixed', 'You have marked every constraint as immovable. If that is genuinely true, the honest answer is that this problem cannot be solved and should be accepted or escalated — say so plainly rather than continuing to spend effort. More often, one of them has simply never been challenged.', 'warning')}</div>` : ''}

      ${tried.length ? `<div style="margin-top:var(--s-4)"><p class="eyebrow">Already tried</p>
        <ul class="badlist">${tried.map(t => `<li>${esc(t.t)}${t.why ? ` — ${esc(t.why)}` : ' — reason unknown'}</li>`).join('')}</ul>
        ${tried.some(t => !(t.why || '').trim()) ? '<p class="t-caption faint" style="margin-top:var(--s-2)">Some attempts have no recorded reason for failing. Those are the ones most likely to be repeated.</p>' : ''}</div>` : ''}

      ${opts.length ? `<div style="margin-top:var(--s-4)"><p class="eyebrow">Options on the table</p>
        <ul class="marklist">${opts.map(o => `<li>${esc(o.t)}</li>`).join('')}</ul>
        ${opts.length === 1 ? '<p class="t-caption faint" style="margin-top:var(--s-2)">One option is not a choice. Add at least "change nothing and accept the cost" — it is always available and often correct.</p>' : ''}</div>` : ''}

      ${s.next.trim()
        ? `<div style="margin-top:var(--s-4)">${callout('Do this now', esc(s.next), 'success')}</div>`
        : `<div style="margin-top:var(--s-4)">${callout('No next action', 'A canvas without a next action is analysis. Pick the smallest thing that would tell you whether your cause is right, and do that.', 'danger')}</div>`}

      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  actions: {
    addCon: s => s.constraints.push({ id: uid(), t: '', movable: 'no' }),
    delCon: (s, { i }) => s.constraints.splice(i, 1),
    addTried: s => s.tried.push({ id: uid(), t: '', why: '' }),
    delTried: (s, { i }) => s.tried.splice(i, 1),
    addOpt: s => s.options.push({ id: uid(), t: '' }),
    delOpt: (s, { i }) => s.options.splice(i, 1)
  },

  summary (s) {
    const mv = { no: 'FIXED', maybe: 'habit only', yes: 'MOVABLE' }
    const cons = s.constraints.filter(c => (c.t || '').trim())
    const tried = s.tried.filter(t => (t.t || '').trim())
    const opts = s.options.filter(o => (o.t || '').trim())
    return [
      stamp('Problem-Solving Canvas'),
      head('Symptom'),
      `  ${s.symptom || '(not stated)'}`,
      `  Affects: ${s.who || '(not stated)'}`,
      `  Cost of inaction: ${s.cost || '(not stated)'}`,
      head('Real problem'),
      `  ${s.real || '(not identified)'}`,
      `  Evidence: ${s.evidence || '(none — this is a hypothesis)'}`,
      `  Decided by: ${s.decider || '(unknown — find this out)'}`,
      head('Constraints'),
      ...(cons.length ? cons.map(c => `  [${mv[c.movable]}] ${c.t}`) : ['  (none listed)']),
      head('Already tried'),
      ...(tried.length ? tried.map(t => `  - ${t.t} — ${t.why || 'reason unknown'}`) : ['  (nothing)']),
      head('Options'),
      ...(opts.length ? opts.map(o => `  - ${o.t}`) : ['  (none)']),
      head('Next action'),
      `  ${s.next || '(none — pick one)'}`,
      '',
      READS
    ].join('\n')
  }
}
