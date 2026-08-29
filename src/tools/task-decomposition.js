import {
  field, text, area, number, select, panel, outPanel, addBtn, delBtn, meter,
  callout, emptyOut, n, r1, uid, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'
import { I } from '../core/icons.js'

const READS = 'A step you cannot start tomorrow morning is not a step — it is a heading. Keep splitting until every line names a physical first action.'

export default {
  id: 'task-decomposition',
  name: 'Task Decomposition',
  blurb: 'Break something too big to start into steps you can actually begin.',
  icon: 'layers',
  accent: 'forest',
  group: 'Working',
  purpose: 'Converts a vague, heavy project into a sequence with a real first move.',
  when: [
    'You have avoided something for more than a week',
    'You do not know what "starting" would even look like',
    'A deadline exists but no plan does'
  ],
  reads: READS,

  initial: () => ({
    goal: '',
    done: '',
    deadline: '',
    steps: [{ id: uid(), name: '', hours: 1, blocked: 'no', by: '' }]
  }),

  form (s) {
    const rows = s.steps.map((st, i) => `
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 96px 34px">
        ${text(`steps.${i}.name`, st.name, 'A concrete action — starts with a verb')}
        <div class="field"><label class="t-meta faint">Hours</label>
          ${number(`steps.${i}.hours`, st.hours, { min: 0, max: 200, step: 0.5 })}</div>
        ${s.steps.length > 1 ? delBtn('del', i, 'Remove step') : '<span></span>'}
      </div>
      <div class="rowitem" style="margin-top:2px;grid-template-columns:200px minmax(0,1fr)">
        <div class="field"><label>Waiting on anyone?</label>
          ${select(`steps.${i}.blocked`, st.blocked, [
            { v: 'no', l: 'No — I can do it alone' },
            { v: 'yes', l: 'Yes — blocked on someone' }
          ])}</div>
        ${st.blocked === 'yes'
          ? field('Who, and what do you need from them?', text(`steps.${i}.by`, st.by, 'e.g. Priya — sign-off on the budget line'))
          : '<span></span>'}
      </div>`).join('')

    return `
      ${panel('The thing you are avoiding', `
        ${field('What is it?', text('goal', s.goal, 'e.g. Rewrite the onboarding documentation'))}
        ${field('How will you know it is finished?', area('done', s.done, 'Describe the finished state in one or two sentences. Not "make progress" — finished.', 3), 'If you cannot describe done, you cannot finish it.')}
        ${field('Deadline, if there is a real one', text('deadline', s.deadline, 'e.g. 14 March, or none'))}`)}
      ${panel('The steps', rows, addBtn('add', 'Add step'))}`
  },

  output (s) {
    const named = s.steps.filter(st => (st.name || '').trim())
    if (!named.length) return outPanel('The plan', emptyOut('Add your first step', 'Then keep splitting anything longer than about three hours.'))

    const total = named.reduce((a, st) => a + n(st.hours), 0)
    const blocked = named.filter(st => st.blocked === 'yes')
    const oversized = named.filter(st => n(st.hours) > 3)
    const first = named[0]

    return outPanel('The plan', `
      <div class="stats" style="margin-bottom:var(--s-4)">
        <div class="stat"><b>${named.length}</b><span>steps</span></div>
        <div class="stat"><b>${r1(total)}h</b><span>estimated</span></div>
        <div class="stat"><b>${blocked.length}</b><span>blocked</span></div>
      </div>

      <div class="flow">
        ${named.map((st, i) => `
          <div class="flow-step${st.blocked === 'yes' ? '' : ' flow-you'}">
            <div class="flow-rail"><span class="flow-dot">${st.blocked === 'yes' ? I.clock : String(i + 1)}</span><span class="flow-line"></span></div>
            <div>
              <div class="flow-t">${esc(st.name)}
                <span class="badge badge-neutral">${r1(n(st.hours))}h</span>
                ${st.blocked === 'yes' ? '<span class="badge badge-warning">Blocked</span>' : ''}
                ${n(st.hours) > 3 ? '<span class="badge badge-danger">Too big</span>' : ''}</div>
              ${st.blocked === 'yes' && st.by ? `<div class="flow-d">Waiting on ${esc(st.by)}</div>` : ''}
            </div>
          </div>`).join('')}
      </div>

      <div style="margin-top:var(--s-4)">
        ${callout('Do this now', `Your first physical action is: <strong>${esc(first.name)}</strong>${n(first.hours) > 3 ? ' — but it is still too big. Split it before you touch anything else.' : '. Put it in tomorrow\'s calendar with a start time, not a due date.'}`, n(first.hours) > 3 ? 'warning' : 'success')}
      </div>

      ${oversized.length ? `<div style="margin-top:var(--s-3)">${callout('Still headings, not steps', `${oversized.length} step${oversized.length === 1 ? ' is' : 's are'} over three hours: ${oversized.map(st => `<strong>${esc(st.name)}</strong>`).join(', ')}. Anything that size hides a decision you have not made yet. Split it.`, 'warning')}</div>` : ''}

      ${blocked.length ? `<div style="margin-top:var(--s-3)">${callout('Unblock first', `You are waiting on ${blocked.length} thing${blocked.length === 1 ? '' : 's'}. Send those requests today, before you start the work you can control — otherwise the waiting happens at the end, when there is no slack left.`, 'info')}</div>` : ''}

      ${s.done.trim() ? '' : `<div style="margin-top:var(--s-3)">${callout('Missing', 'You have not described what finished looks like. Without it, this list will expand for as long as you keep working on it.', 'danger')}</div>`}

      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  actions: {
    add: s => s.steps.push({ id: uid(), name: '', hours: 1, blocked: 'no', by: '' }),
    del: (s, { i }) => s.steps.splice(i, 1)
  },

  summary (s) {
    const named = s.steps.filter(st => (st.name || '').trim())
    const total = named.reduce((a, st) => a + n(st.hours), 0)
    return [
      stamp('Task Decomposition'),
      `Goal: ${s.goal || '(not stated)'}`,
      `Finished means: ${s.done || '(not defined — define this)'}`,
      `Deadline: ${s.deadline || 'none'}`,
      head(`Steps (${named.length}, ~${r1(total)}h)`),
      ...named.map((st, i) => `  ${i + 1}. ${st.name} — ${r1(n(st.hours))}h${st.blocked === 'yes' ? ` [BLOCKED: ${st.by || 'someone'}]` : ''}${n(st.hours) > 3 ? ' [TOO BIG — split]' : ''}`),
      '',
      named.length ? `First action: ${named[0].name}` : '',
      '',
      'A step you cannot start tomorrow morning is a heading, not a step.'
    ].join('\n')
  }
}
