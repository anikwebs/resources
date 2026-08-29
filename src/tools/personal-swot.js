import {
  field, text, area, panel, outPanel, addBtn, delBtn,
  callout, emptyOut, uid, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'

const READS = 'A SWOT is only useful if it produces a move. Four lists and no action is a self-assessment exercise. The value is in the pairings: a strength aimed at an opportunity, and a weakness that a threat could exploit.'

const QUAD = [
  { k: 'strengths', h: 'Strengths', sub: 'Evidenced, not aspirational', ph: 'Something you have demonstrably done', cls: 'quad-do' },
  { k: 'weaknesses', h: 'Weaknesses', sub: 'The ones that cost you', ph: 'Be specific — "bad at detail" is not actionable', cls: 'quad-drop' },
  { k: 'opportunities', h: 'Opportunities', sub: 'External and currently open', ph: 'A change, an opening, a gap you could fill', cls: 'quad-plan' },
  { k: 'threats', h: 'Threats', sub: 'External and moving toward you', ph: 'Automation, a restructure, a dependency, a skill going stale', cls: 'quad-deleg' }
]

export default {
  id: 'personal-swot',
  name: 'Personal SWOT',
  blurb: 'An honest inventory that ends in two concrete moves.',
  icon: 'compass',
  accent: 'forest',
  group: 'Building',
  purpose: 'Locates where you actually stand, then forces a pairing into action.',
  when: [
    'You feel stuck but cannot name why',
    'Before a review, a job search, or a change of direction',
    'Something in your field is shifting and you are not sure where you sit'
  ],
  reads: READS,

  initial: () => ({
    context: '',
    strengths: [{ id: uid(), t: '' }],
    weaknesses: [{ id: uid(), t: '' }],
    opportunities: [{ id: uid(), t: '' }],
    threats: [{ id: uid(), t: '' }],
    move1: '',
    move2: ''
  }),

  form (s) {
    const list = q => s[q.k].map((it, i) => `
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px;margin-top:${i ? 'var(--s-2)' : '0'}">
        ${text(`${q.k}.${i}.t`, it.t, q.ph)}
        ${s[q.k].length > 1 ? delBtn(`del_${q.k}`, i, 'Remove') : '<span></span>'}
      </div>`).join('')

    return `
      ${panel('Context', field('What are you assessing yourself against?', text('context', s.context, 'e.g. Moving into a data role in the next year'), 'A SWOT with no context produces four lists of generalities.'))}
      ${QUAD.map(q => panel(q.h, `<p class="t-caption faint" style="margin-bottom:var(--s-3)">${esc(q.sub)}</p>${list(q)}`, addBtn(`add_${q.k}`, 'Add'))).join('')}
      ${panel('The output', `
        <p class="t-small muted" style="margin-bottom:var(--s-3)">Now the part that matters. Pick one pairing of each kind.</p>
        ${field('Strength × Opportunity — the move to make', area('move1', s.move1, 'Which strength do you point at which opening, and what is the first action this month?', 3))}
        ${field('Weakness × Threat — the exposure to close', area('move2', s.move2, 'Which weakness would a threat exploit, and what reduces it?', 3))}`)}`
  },

  output (s) {
    const filled = QUAD.map(q => ({ ...q, items: s[q.k].filter(i => (i.t || '').trim()) }))
    const total = filled.reduce((a, q) => a + q.items.length, 0)
    if (!total) return outPanel('The grid', emptyOut('Start with one strength', 'The grid and its blind spots appear here.'))

    const empty = filled.filter(q => !q.items.length)
    const strengthHeavy = filled[0].items.length >= 4 && filled[1].items.length <= 1
    const weaknessHeavy = filled[1].items.length >= 4 && filled[0].items.length <= 1
    const noExternal = !filled[2].items.length && !filled[3].items.length

    return outPanel('The grid', `
      ${s.context.trim() ? `<p class="eyebrow">${esc(s.context)}</p>` : ''}
      <div class="quad" style="margin-bottom:var(--s-4)">
        ${filled.map(q => `
          <div class="quad-cell ${q.cls}">
            <div class="h">${esc(q.h)}</div>
            <div class="sub">${esc(q.sub)}</div>
            ${q.items.length ? `<ul>${q.items.map(i => `<li>${esc(i.t)}</li>`).join('')}</ul>` : '<p class="t-caption faint">Empty.</p>'}
          </div>`).join('')}
      </div>

      ${s.move1.trim() || s.move2.trim() ? `
        ${s.move1.trim() ? callout('Move one — strength at opportunity', esc(s.move1), 'success') : ''}
        ${s.move2.trim() ? `<div style="margin-top:var(--s-3)">${callout('Move two — close the exposure', esc(s.move2), 'warning')}</div>` : ''}`
        : callout('Not finished yet', 'You have lists but no moves. The two fields at the bottom are the entire point of the exercise — without them this is a description of your situation rather than a change to it.', 'danger')}

      ${empty.length ? `<div style="margin-top:var(--s-3)">${callout('Blind spots', `${empty.map(q => q.h).join(' and ')} ${empty.length === 1 ? 'is' : 'are'} empty. ${empty.some(q => q.k === 'threats') ? 'An empty threats box is almost never accurate — it usually means you have not looked. What would make your current skills less valuable in three years?' : 'Fill it, even badly. A wrong entry can be corrected; a blank one hides.'}`, 'warning')}</div>` : ''}

      ${strengthHeavy ? `<div style="margin-top:var(--s-3)">${callout('Only good news', 'Many strengths and almost no weaknesses. Nobody\'s honest inventory looks like this. Ask what a candid colleague would add — that answer is the useful one.', 'warning')}</div>` : ''}

      ${weaknessHeavy ? `<div style="margin-top:var(--s-3)">${callout('Only bad news', 'Many weaknesses and almost no strengths. That is a mood, not an assessment. List three things you have actually delivered — with dates. The grid needs both sides to produce a move.', 'warning')}</div>` : ''}

      ${noExternal ? `<div style="margin-top:var(--s-3)">${callout('All inward', 'You have listed only internal factors. Half of a SWOT is about the world moving independently of you: what is opening, and what is coming. Without that half, you cannot aim anything.', 'info')}</div>` : ''}

      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  actions: QUAD.reduce((acc, q) => {
    acc[`add_${q.k}`] = s => s[q.k].push({ id: uid(), t: '' })
    acc[`del_${q.k}`] = (s, { i }) => s[q.k].splice(i, 1)
    return acc
  }, {}),

  summary (s) {
    const sec = q => {
      const items = s[q.k].filter(i => (i.t || '').trim())
      return [head(q.h + ' — ' + q.sub), ...(items.length ? items.map(i => '  - ' + i.t) : ['  (empty)'])]
    }
    return [
      stamp('Personal SWOT'),
      `Context: ${s.context || '(not stated)'}`,
      ...QUAD.flatMap(sec),
      head('The two moves'),
      `  Strength × Opportunity: ${s.move1 || '(not decided)'}`,
      `  Weakness × Threat:      ${s.move2 || '(not decided)'}`,
      '',
      READS
    ].join('\n')
  }
}
