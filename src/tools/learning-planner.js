import {
  field, text, area, number, select, panel, outPanel, addBtn, delBtn, meter,
  callout, emptyOut, n, r1, uid, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'

const READS = 'You do not learn a skill by consuming material about it. You learn it by producing something and having it corrected. If your plan has no output and no feedback, it is a reading list.'

export default {
  id: 'learning-planner',
  name: 'Learning Planner',
  blurb: 'Plan a skill around an output, not a syllabus.',
  icon: 'brain',
  accent: 'council',
  group: 'Building',
  purpose: 'Turns "I want to learn X" into a producible artefact and a feedback loop.',
  when: [
    'You have bookmarked more than you have practised',
    'You finished a course and cannot do the thing',
    'You need the skill for a real deadline'
  ],
  reads: READS,

  initial: () => ({
    skill: '',
    why: '',
    level: 'none',
    output: '',
    deadline: '',
    hours: 4,
    weeks: 8,
    feedback: '',
    resources: [{ id: uid(), what: '', kind: 'doing' }],
    checkpoints: [{ id: uid(), what: '', done: false }]
  }),

  form (s) {
    const res = s.resources.map((r, i) => `
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 160px 34px">
        ${text(`resources.${i}.what`, r.what, 'Book, course, project, person, dataset')}
        <div class="field"><label class="t-meta faint">Type</label>${select(`resources.${i}.kind`, r.kind, [
          { v: 'doing', l: 'Doing' },
          { v: 'reading', l: 'Reading or watching' },
          { v: 'person', l: 'A person' }
        ])}</div>
        ${s.resources.length > 1 ? delBtn('delRes', i, 'Remove') : '<span></span>'}
      </div>`).join('')

    const cps = s.checkpoints.map((c, i) => `
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px">
        ${text(`checkpoints.${i}.what`, c.what, 'Something you will be able to do')}
        ${s.checkpoints.length > 1 ? delBtn('delCp', i, 'Remove') : '<span></span>'}
      </div>`).join('')

    return `
      ${panel('The skill', `
        ${field('What are you learning?', text('skill', s.skill, 'e.g. Writing SQL well enough to answer my own questions'))}
        ${field('What will you use it for, specifically?', area('why', s.why, 'A real task, ideally one with a date. "General interest" is a valid answer but predicts a slower finish.', 2))}
        ${field('Where are you now?', select('level', s.level, [
          { v: 'none', l: 'Never touched it' },
          { v: 'some', l: 'Can follow along but not start alone' },
          { v: 'working', l: 'Can do the basics unaided' },
          { v: 'good', l: 'Competent, want depth' }
        ]))}`)}
      ${panel('The output', `
        ${field('What will you have produced?', area('output', s.output, 'A thing that exists: a working report, a deployed page, a delivered talk, a passed assessment.', 2), 'This is the single most important field. A skill with no artefact cannot be assessed — by you or anyone else.')}
        ${field('By when?', text('deadline', s.deadline, 'A date'))}`)}
      ${panel('Time', `
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:120px"><label>Hours per week</label>${number('hours', s.hours, { min: 0.5, max: 60, step: 0.5 })}</div>
          <div class="field grow" style="min-width:120px"><label>Number of weeks</label>${number('weeks', s.weeks, { min: 1, max: 104 })}</div>
        </div>`)}
      ${panel('Feedback', field('Who or what tells you when you are wrong?', area('feedback', s.feedback, 'A person who will review it, a test suite, a marker, a real user, a public deadline.', 2), 'Without correction you practise your mistakes until they are permanent.'))}
      ${panel('Materials and practice', res, addBtn('addRes', 'Add'))}
      ${panel('Checkpoints', cps, addBtn('addCp', 'Add checkpoint'))}`
  },

  output (s) {
    if (!s.skill.trim()) return outPanel('The plan', emptyOut('Name the skill', 'The plan and its weak points appear here.'))

    const res = s.resources.filter(r => (r.what || '').trim())
    const doing = res.filter(r => r.kind === 'doing').length
    const reading = res.filter(r => r.kind === 'reading').length
    const cps = s.checkpoints.filter(c => (c.what || '').trim())
    const doneCount = cps.filter(c => c.done).length
    const totalHours = n(s.hours) * n(s.weeks)
    const doingRatio = res.length ? Math.round((doing / res.length) * 100) : 0

    return outPanel('The plan', `
      <div class="stats" style="margin-bottom:var(--s-4)">
        <div class="stat"><b>${r1(totalHours)}h</b><span>total</span></div>
        <div class="stat"><b>${n(s.hours)}h</b><span>per week</span></div>
        <div class="stat"><b>${doingRatio}%</b><span>doing, not reading</span></div>
      </div>

      ${s.output.trim()
        ? callout('What you will have made', `${esc(s.output)}${s.deadline.trim() ? ` — by ${esc(s.deadline)}` : ''}<br><br>Work backwards from this. Anything that does not move you toward it is optional, however interesting it is.`, 'success')
        : callout('No output defined', 'You have not said what you will have produced. This is how learning becomes indefinite: with no artefact there is no finish line, no evidence, and no honest way to tell whether you can do it.', 'danger')}

      ${res.length ? `<div style="margin-top:var(--s-4)">
        <div class="field"><label>Balance of doing against consuming</label>${meter(doingRatio, true)}</div>
        ${doingRatio < 50 ? `<p class="t-small muted" style="margin-top:var(--s-2)">${reading} of your ${res.length} items are reading or watching. Flip this: material should be the thing you reach for when you get stuck while making something, not the main activity.</p>` : ''}
      </div>` : ''}

      ${!s.feedback.trim()
        ? `<div style="margin-top:var(--s-3)">${callout('No feedback loop', 'Nobody and nothing will tell you when you are wrong. This is the most common reason people put months into a skill and stay mediocre — errors go uncorrected and become habits. Find one person who will look at the output, or a test that can fail.', 'danger')}</div>`
        : `<div style="margin-top:var(--s-3)">${callout('Correction', esc(s.feedback), 'info')}</div>`}

      ${cps.length ? `<div style="margin-top:var(--s-4)"><p class="eyebrow">Checkpoints — ${doneCount}/${cps.length}</p>
        ${cps.map(c => `
          <label class="check${c.done ? ' done' : ''}" style="margin-top:6px">
            <input type="checkbox" data-bind="checkpoints.${s.checkpoints.indexOf(c)}.done"${c.done ? ' checked' : ''}>
            <span class="check-t">${esc(c.what)}</span>
          </label>`).join('')}</div>` : ''}

      ${totalHours < 20 && s.level === 'none' ? `<div style="margin-top:var(--s-3)">${callout('Probably not enough time', `${r1(totalHours)} hours from a standing start will give you familiarity, not capability. Either extend the plan or narrow the skill until it fits — a narrow skill you actually have beats a broad one you nearly have.`, 'warning')}</div>` : ''}

      ${n(s.hours) >= 20 ? `<div style="margin-top:var(--s-3)">${callout('Check this is real', `${n(s.hours)} hours a week alongside everything else is unusual to sustain. Plans fail at week three on this exact number. Halve it and double the weeks.`, 'warning')}</div>` : ''}

      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  actions: {
    addRes: s => s.resources.push({ id: uid(), what: '', kind: 'doing' }),
    delRes: (s, { i }) => s.resources.splice(i, 1),
    addCp: s => s.checkpoints.push({ id: uid(), what: '', done: false }),
    delCp: (s, { i }) => s.checkpoints.splice(i, 1)
  },

  summary (s) {
    const res = s.resources.filter(r => (r.what || '').trim())
    const cps = s.checkpoints.filter(c => (c.what || '').trim())
    const kind = { doing: 'DOING', reading: 'READ', person: 'PERSON' }
    return [
      stamp('Learning Planner'),
      `Skill: ${s.skill || '(not stated)'}`,
      `For: ${s.why || '(not stated)'}`,
      `Starting level: ${s.level}`,
      head('Output'),
      `  ${s.output || '(none defined — define this first)'}`,
      `  By: ${s.deadline || 'no date'}`,
      head('Time'),
      `  ${n(s.hours)}h/week × ${n(s.weeks)} weeks = ${r1(n(s.hours) * n(s.weeks))}h`,
      head('Feedback'),
      `  ${s.feedback || '(none — this is the most important gap)'}`,
      head('Materials and practice'),
      ...(res.length ? res.map(r => `  [${kind[r.kind]}] ${r.what}`) : ['  (none)']),
      head('Checkpoints'),
      ...(cps.length ? cps.map(c => `  [${c.done ? 'x' : ' '}] ${c.what}`) : ['  (none)']),
      '',
      READS
    ].join('\n')
  }
}
