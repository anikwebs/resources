import {
  field, text, area, number, select, panel, outPanel, callout, emptyOut, meter,
  n, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'

const READS = 'Habits fail on friction and ambiguity, not willpower. The two questions that predict success are: exactly when does it happen, and how small is the smallest version?'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default {
  id: 'habit-planner',
  name: 'Habit Planner',
  blurb: 'Design a habit around a trigger, a floor and a fourteen-day log.',
  icon: 'refresh',
  accent: 'clay',
  group: 'Building',
  purpose: 'Replaces "I should do this more" with a specific trigger and a minimum you cannot fail.',
  when: [
    'You have restarted the same habit several times',
    'It works for a week and then quietly stops',
    'You want to build something small and durable rather than dramatic'
  ],
  reads: READS,

  initial: () => ({
    habit: '',
    trigger: '',
    where: '',
    minimum: '',
    target: '',
    days: 5,
    friction: '',
    remove: '',
    reward: '',
    log: Array(14).fill(false)
  }),

  form (s) {
    return `
      ${panel('The habit', `
        ${field('What is the habit?', text('habit', s.habit, 'e.g. Twenty minutes of reading'))}
        ${field('Days per week you are aiming for', number('days', s.days, { min: 1, max: 7 }))}`)}
      ${panel('When and where — exactly', `
        ${field('After what existing event?', text('trigger', s.trigger, 'e.g. After I put the kettle on in the morning'), 'Attach it to something that already happens without effort.')}
        ${field('Where, physically?', text('where', s.where, 'e.g. The kitchen table, not the sofa'))}`)}
      ${panel('The floor and the ceiling', `
        ${field('The smallest version that still counts', text('minimum', s.minimum, 'e.g. One page'), 'This is the version for bad days. It should feel almost embarrassingly small.')}
        ${field('The version on a good day', text('target', s.target, 'e.g. Twenty minutes'))}`)}
      ${panel('Friction', `
        ${field('What makes it hard to start?', area('friction', s.friction, 'The physical or practical obstacle — finding the book, charging the thing, clearing the table.', 2))}
        ${field('What will you do in advance to remove that?', area('remove', s.remove, 'A setup action done the night before.', 2))}
        ${field('What makes it satisfying immediately?', text('reward', s.reward, 'Something you feel today, not in six months'))}`)}
      ${panel('Fourteen days', `
        <p class="t-small muted" style="margin-bottom:var(--s-3)">Tick a day when you did at least the minimum. Two weeks is
        enough to see whether the design works — it is not a test of your character.</p>
        <div class="row-wrap" style="gap:6px">
          ${s.log.map((v, i) => `
            <label class="check${v ? ' done' : ''}" style="flex-direction:column;align-items:center;gap:4px;padding:8px 10px;min-width:52px">
              <span class="t-meta faint">${DAYS[i % 7]}</span>
              <input type="checkbox" data-bind="log.${i}"${v ? ' checked' : ''} aria-label="Day ${i + 1}">
              <span class="t-meta faint">${i + 1}</span>
            </label>`).join('')}
        </div>`)}`
  },

  output (s) {
    if (!s.habit.trim()) return outPanel('The design', emptyOut('Name the habit', 'The design and the streak read-out appear here.'))

    const hits = s.log.filter(Boolean).length
    const rate = Math.round((hits / 14) * 100)
    const expected = Math.round((n(s.days) / 7) * 14)

    let streak = 0, best = 0
    for (const v of s.log) { if (v) { streak++; best = Math.max(best, streak) } else streak = 0 }

    let longestGap = 0, gap = 0
    for (const v of s.log) { if (!v) { gap++; longestGap = Math.max(longestGap, gap) } else gap = 0 }

    const gaps = []
    if (!s.trigger.trim()) gaps.push('a trigger')
    if (!s.minimum.trim()) gaps.push('a minimum version')

    return outPanel('The design', `
      ${s.trigger.trim() && s.minimum.trim() ? `
        <div class="callout callout-success"><span class="lab">The sentence to remember</span>
        <p>After <strong>${esc(s.trigger)}</strong>, at <strong>${esc(s.where || 'my usual place')}</strong>,
        I will do <strong>${esc(s.minimum)}</strong> — even on a bad day.${s.target.trim() ? ` On a good day, ${esc(s.target)}.` : ''}</p></div>` : ''}

      <div class="stats" style="margin:var(--s-4) 0">
        <div class="stat"><b>${hits}/14</b><span>days done</span></div>
        <div class="stat"><b>${best}</b><span>best streak</span></div>
        <div class="stat"><b>${rate}%</b><span>consistency</span></div>
      </div>

      <div class="field" style="margin-bottom:var(--s-4)">
        <label>Against your target of ${expected} days in two weeks</label>
        ${meter(expected ? Math.min(100, Math.round((hits / expected) * 100)) : 0, true)}
      </div>

      ${gaps.length ? callout('Incomplete design', `You have not defined ${gaps.join(' or ')}. These are the two fields that predict whether a habit survives — everything else is decoration.`, 'danger') : ''}

      ${longestGap >= 3 && hits > 0 ? `<div style="margin-top:var(--s-3)">${callout('A gap of ' + longestGap + ' days', 'Missing once is noise. Missing three in a row is the habit ending quietly. The rule that saves it: never miss twice. On the second day, do the minimum version and nothing more.', 'warning')}</div>` : ''}

      ${hits >= expected && expected > 0 ? `<div style="margin-top:var(--s-3)">${callout('It is working', 'You are hitting your target. Do not increase the size yet — extend the duration first. Habits break when people upgrade them the moment they start working.', 'success')}</div>` : ''}

      ${hits === 0 ? `<div style="margin-top:var(--s-3)">${callout('Nothing logged yet', 'Do the minimum version once, today, and tick day one. Starting badly beats planning well — and the log only becomes useful once there is something in it.', 'info')}</div>` : ''}

      ${s.friction.trim() && !s.remove.trim() ? `<div style="margin-top:var(--s-3)">${callout('Friction unaddressed', `You named the obstacle — ${esc(s.friction)} — but not what removes it. Do that setup the night before. Almost every failed habit is a friction problem wearing a motivation costume.`, 'warning')}</div>` : ''}

      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  summary (s) {
    const hits = s.log.filter(Boolean).length
    let streak = 0, best = 0
    for (const v of s.log) { if (v) { streak++; best = Math.max(best, streak) } else streak = 0 }
    return [
      stamp('Habit Planner'),
      `Habit: ${s.habit || '(not stated)'}`,
      `Target: ${n(s.days)} days per week`,
      head('The design'),
      `  After: ${s.trigger || '(no trigger — define this)'}`,
      `  Where: ${s.where || '(not specified)'}`,
      `  Minimum: ${s.minimum || '(none — define this)'}`,
      `  Good day: ${s.target || '(not specified)'}`,
      `  Reward: ${s.reward || '(none)'}`,
      head('Friction'),
      `  Obstacle: ${s.friction || '(not named)'}`,
      `  Removed by: ${s.remove || '(not planned)'}`,
      head('Fourteen days'),
      `  ${s.log.map(v => (v ? '#' : '.')).join('')}`,
      `  ${hits}/14 days · best streak ${best}`,
      '',
      'Rule: never miss twice. On the second day, do the minimum.'
    ].join('\n')
  }
}
