import {
  text, select, panel, outPanel, addBtn, delBtn, callout, emptyOut, uid, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'

const READS = 'If almost everything lands in "Do first", you have not prioritised — you have relabelled. Urgency is usually inherited from whoever asked most recently. Importance is yours to define.'

export default {
  id: 'priority-matrix',
  name: 'Priority Matrix',
  blurb: 'Sort what you are carrying by importance against urgency.',
  icon: 'grid',
  accent: 'clay',
  group: 'Working',
  purpose: 'Separates the work that matters from the work that is merely loud.',
  when: [
    'Your list is long enough that you have stopped reading it',
    'Everything feels urgent and nothing feels finished',
    'You need to justify what you are not doing'
  ],
  reads: READS,

  initial: () => ({
    items: [
      { id: uid(), name: '', imp: 'high', urg: 'high' }
    ]
  }),

  form (s) {
    const rows = s.items.map((it, i) => `
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px">
        ${text(`items.${i}.name`, it.name, 'What is the task or commitment?')}
        ${s.items.length > 1 ? delBtn('del', i, 'Remove item') : '<span></span>'}
      </div>
      <div class="rowitem" style="margin-top:2px;grid-template-columns:1fr 1fr">
        <div class="field"><label>Importance — does it move something that matters?</label>
          ${select(`items.${i}.imp`, it.imp, [
            { v: 'high', l: 'High — real consequence if never done' },
            { v: 'low', l: 'Low — nothing changes if it never happens' }
          ])}</div>
        <div class="field"><label>Urgency — is the deadline real?</label>
          ${select(`items.${i}.urg`, it.urg, [
            { v: 'high', l: 'High — a genuine, dated deadline' },
            { v: 'low', l: 'Low — the date is soft or invented' }
          ])}</div>
      </div>`).join('')

    return `
      ${panel('What you are carrying', rows, addBtn('add', 'Add item'))}
      ${panel('Before you sort', `
        <p class="t-small muted">Two questions decide each item. <strong>Importance</strong>: if this is never done, what
        actually happens? <strong>Urgency</strong>: is there a dated consequence, or does it just feel pressing because
        someone asked recently? Most over-full lists are a failure of the second question.</p>`)}`
  },

  output (s) {
    const named = s.items.filter(it => (it.name || '').trim())
    if (!named.length) return outPanel('The four quadrants', emptyOut('Add something to sort', 'Each item appears in a quadrant as you classify it.'))

    const q = {
      do: named.filter(i => i.imp === 'high' && i.urg === 'high'),
      plan: named.filter(i => i.imp === 'high' && i.urg === 'low'),
      deleg: named.filter(i => i.imp === 'low' && i.urg === 'high'),
      drop: named.filter(i => i.imp === 'low' && i.urg === 'low')
    }
    const cell = (k, h, sub, cls) => `
      <div class="quad-cell ${cls}">
        <div class="h">${esc(h)}</div>
        <div class="sub">${esc(sub)}</div>
        ${q[k].length ? `<ul>${q[k].map(i => `<li>${esc(i.name)}</li>`).join('')}</ul>` : '<p class="t-caption faint">Nothing here.</p>'}
      </div>`

    const total = named.length
    const doPct = Math.round((q.do.length / total) * 100)

    const note = doPct >= 60
      ? callout('This is not a priority list', `${doPct}% of your items are "Do first". A list where everything is critical gives you no information. Go back and be ruthless about which deadlines are genuinely dated and which ones you inherited from somebody else's anxiety.`, 'danger')
      : q.plan.length === 0
        ? callout('Nothing important and non-urgent', 'The "Schedule" quadrant is empty. That is the quadrant where careers and capability are actually built. If it is permanently empty, you are living entirely inside other people\'s deadlines.', 'warning')
        : q.drop.length
          ? callout('Say it out loud', `You have ${q.drop.length} item${q.drop.length === 1 ? '' : 's'} that is neither important nor urgent. Deleting it silently is fine. What is not fine is leaving it on the list to generate guilt for another month.`, 'info')
          : callout('Reading this', 'The second quadrant — important, not urgent — is the one to defend with calendar time. It never defends itself.', 'success')

    return outPanel('The four quadrants', `
      <div class="quad">
        ${cell('do', 'Do first', 'Important and urgent', 'quad-do')}
        ${cell('plan', 'Schedule', 'Important, not urgent', 'quad-plan')}
        ${cell('deleg', 'Delegate or shrink', 'Urgent, not important', 'quad-deleg')}
        ${cell('drop', 'Drop', 'Neither', 'quad-drop')}
      </div>
      <div style="margin-top:var(--s-4)">${note}</div>
      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  actions: {
    add: s => s.items.push({ id: uid(), name: '', imp: 'high', urg: 'high' }),
    del: (s, { i }) => s.items.splice(i, 1)
  },

  summary (s) {
    const named = s.items.filter(it => (it.name || '').trim())
    const g = (imp, urg) => named.filter(i => i.imp === imp && i.urg === urg).map(i => '  - ' + i.name)
    const sec = (t, arr) => [head(t), ...(arr.length ? arr : ['  (none)'])]
    return [
      stamp('Priority Matrix'),
      ...sec('Do first — important and urgent', g('high', 'high')),
      ...sec('Schedule — important, not urgent', g('high', 'low')),
      ...sec('Delegate or shrink — urgent, not important', g('low', 'high')),
      ...sec('Drop — neither', g('low', 'low')),
      '',
      'The second quadrant is where capability is built. Defend it with calendar time.'
    ].join('\n')
  }
}
