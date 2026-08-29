import {
  field, text, area, number, select, panel, outPanel, addBtn, delBtn, meter,
  callout, emptyOut, n, uid, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'
import { I } from '../core/icons.js'

const READS = 'A goal with no measure is a wish, and a goal with no weekly action is a wish with a deadline. The milestone dates matter far less than the recurring commitment.'

export default {
  id: 'goal-planner',
  name: 'Goal Planner',
  blurb: 'Turn an intention into a measure, milestones and a weekly action.',
  icon: 'target',
  accent: 'forest',
  group: 'Building',
  purpose: 'Forces a vague ambition to declare what it would take and what it would cost.',
  when: [
    'You have wanted something for months and nothing has moved',
    'You can name the goal but not the next action',
    'You need to decide whether you actually want it'
  ],
  reads: READS,

  initial: () => ({
    goal: '',
    why: '',
    measure: '',
    from: '',
    to: '',
    by: '',
    weekly: '',
    hours: 3,
    obstacle: '',
    counter: '',
    milestones: [{ id: uid(), name: '', when: '', done: false }]
  }),

  form (s) {
    const ms = s.milestones.map((m, i) => `
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 150px 34px">
        ${text(`milestones.${i}.name`, m.name, 'A visible checkpoint')}
        ${text(`milestones.${i}.when`, m.when, 'By when')}
        ${s.milestones.length > 1 ? delBtn('del', i, 'Remove milestone') : '<span></span>'}
      </div>`).join('')

    return `
      ${panel('The goal', `
        ${field('What do you want?', text('goal', s.goal, 'e.g. Be able to run a client workshop alone'))}
        ${field('Why does it matter — honestly?', area('why', s.why, 'If the honest answer is "it sounds impressive", write that. It is useful information.', 2))}`)}
      ${panel('How you will measure it', `
        ${field('The measure', text('measure', s.measure, 'e.g. Workshops run solo'))}
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:110px"><label>From</label>${text('from', s.from, 'Today')}</div>
          <div class="field grow" style="min-width:110px"><label>To</label>${text('to', s.to, 'Target')}</div>
          <div class="field grow" style="min-width:110px"><label>By when</label>${text('by', s.by, 'Date')}</div>
        </div>`)}
      ${panel('The weekly commitment', `
        ${field('What will you do every week, regardless of motivation?', text('weekly', s.weekly, 'e.g. Two hours rehearsing one section with a colleague'))}
        ${field('Hours per week', number('hours', s.hours, { min: 0, max: 60, step: 0.5 }))}`)}
      ${panel('Milestones', ms, addBtn('add', 'Add milestone'))}
      ${panel('What will stop you', `
        ${field('The most likely obstacle', text('obstacle', s.obstacle, 'Be specific — the real one, not a noble one'))}
        ${field('What you will do when it happens', area('counter', s.counter, 'A pre-decided response. Deciding in the moment is how goals die.', 2))}`)}`
  },

  output (s) {
    if (!s.goal.trim()) return outPanel('The plan', emptyOut('Name what you want', 'The plan assembles itself as you answer.'))

    const gaps = []
    if (!s.measure.trim()) gaps.push('a measure')
    if (!s.weekly.trim()) gaps.push('a weekly action')
    if (!s.by.trim()) gaps.push('a date')
    if (!s.counter.trim()) gaps.push('a plan for the obstacle')

    const named = s.milestones.filter(m => (m.name || '').trim())
    const doneCount = named.filter(m => m.done).length
    const strength = Math.round(((4 - gaps.length) / 4) * 100)

    return outPanel('The plan', `
      <p class="eyebrow">Goal</p>
      <p class="t-subtitle" style="margin-bottom:var(--s-4)">${esc(s.goal)}</p>

      <div class="field" style="margin-bottom:var(--s-4)">
        <label>Plan completeness — ${strength}%</label>
        ${meter(strength, true)}
      </div>

      ${s.measure.trim() ? `<div class="promise" style="margin-bottom:var(--s-4)">
        <div><span class="lab">Measure</span><span class="v">${esc(s.measure)}</span></div>
        <div><span class="lab">From → to</span><span class="v">${esc(s.from || '?')} → ${esc(s.to || '?')}</span></div>
        <div><span class="lab">By</span><span class="v">${esc(s.by || 'no date')}</span></div>
      </div>` : ''}

      ${s.weekly.trim() ? callout('The only line that matters', `Every week: <strong>${esc(s.weekly)}</strong> (${n(s.hours)}h). Milestones are scenery. This recurring commitment is the goal. Put it in the calendar as a repeating appointment with a start time.`, 'success') : ''}

      ${named.length ? `<div style="margin-top:var(--s-4)"><p class="eyebrow">Milestones — ${doneCount}/${named.length}</p>
        ${named.map((m, i) => `
          <label class="check${m.done ? ' done' : ''}" style="margin-top:6px">
            <input type="checkbox" data-bind="milestones.${s.milestones.indexOf(m)}.done"${m.done ? ' checked' : ''}>
            <span class="check-t">${esc(m.name)}${m.when ? ` <span class="t-meta faint">— ${esc(m.when)}</span>` : ''}</span>
          </label>`).join('')}</div>` : ''}

      ${s.obstacle.trim() && s.counter.trim() ? `<div style="margin-top:var(--s-4)">
        ${callout('When it goes wrong', `<strong>${esc(s.obstacle)}</strong> will happen. Your pre-decided response: ${esc(s.counter)}<br><br>Deciding this now is worth more than any amount of motivation later.`, 'info')}</div>` : ''}

      ${gaps.length ? `<div style="margin-top:var(--s-3)">${callout('Still missing', `This is not yet a plan — it is missing ${gaps.join(', ')}. ${gaps.includes('a weekly action') ? 'The weekly action is the one that actually determines whether this happens.' : ''}`, gaps.length > 2 ? 'danger' : 'warning')}</div>` : ''}

      ${n(s.hours) > 15 ? `<div style="margin-top:var(--s-3)">${callout('Check this against your week', `${n(s.hours)} hours a week is a second job. Look at your actual calendar and find them before you commit, or reduce the goal now rather than abandoning it in week three.`, 'warning')}</div>` : ''}

      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  actions: {
    add: s => s.milestones.push({ id: uid(), name: '', when: '', done: false }),
    del: (s, { i }) => s.milestones.splice(i, 1)
  },

  summary (s) {
    const named = s.milestones.filter(m => (m.name || '').trim())
    return [
      stamp('Goal Planner'),
      `Goal: ${s.goal || '(not stated)'}`,
      `Why: ${s.why || '(not stated)'}`,
      head('Measure'),
      `  ${s.measure || '(none)'}: ${s.from || '?'} → ${s.to || '?'} by ${s.by || 'no date'}`,
      head('Weekly commitment'),
      `  ${s.weekly || '(none — this is the important one)'} (${n(s.hours)}h/week)`,
      head('Milestones'),
      ...(named.length ? named.map(m => `  [${m.done ? 'x' : ' '}] ${m.name}${m.when ? ` — ${m.when}` : ''}`) : ['  (none)']),
      head('Obstacle'),
      `  Likely: ${s.obstacle || '(not named)'}`,
      `  Response: ${s.counter || '(not decided)'}`,
      '',
      READS
    ].join('\n')
  }
}
