import {
  field, text, area, number, select, panel, outPanel, addBtn, delBtn,
  callout, emptyOut, n, uid, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'

const READS = 'A meeting without a decision to make is a broadcast, and a broadcast should be a document. The test is not whether it was useful — it is whether it needed everyone in the room.'

export default {
  id: 'meeting-planner',
  name: 'Meeting Planner',
  blurb: 'Establish whether the meeting is needed, then make it short.',
  icon: 'users',
  accent: 'atlas',
  group: 'Communicating',
  purpose: 'Produces an agenda that names a decision, an owner and a cost.',
  when: [
    'Before booking anything with more than two people',
    'A recurring meeting has lost its purpose',
    'You are attending something and cannot tell why'
  ],
  reads: READS,

  initial: () => ({
    title: '',
    decision: '',
    mins: 30,
    people: 4,
    rate: 0,
    prep: '',
    items: [{ id: uid(), what: '', mins: 10, owner: '', kind: 'decide' }],
    outcome: ''
  }),

  form (s) {
    const rows = s.items.map((it, i) => `
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px">
        ${text(`items.${i}.what`, it.what, 'Agenda item')}
        ${s.items.length > 1 ? delBtn('del', i, 'Remove item') : '<span></span>'}
      </div>
      <div class="rowitem" style="margin-top:2px;grid-template-columns:150px 90px minmax(0,1fr)">
        <div class="field"><label>Purpose</label>${select(`items.${i}.kind`, it.kind, [
          { v: 'decide', l: 'Decide something' },
          { v: 'discuss', l: 'Genuinely discuss' },
          { v: 'inform', l: 'Inform only' }
        ])}</div>
        <div class="field"><label>Minutes</label>${number(`items.${i}.mins`, it.mins, { min: 1, max: 240 })}</div>
        <div class="field"><label>Who leads it</label>${text(`items.${i}.owner`, it.owner, 'A name')}</div>
      </div>`).join('')

    return `
      ${panel('The meeting', `
        ${field('Title', text('title', s.title, 'e.g. Q3 launch scope'))}
        ${field('What decision will be made?', area('decision', s.decision, 'One sentence. If you cannot write one, that is the finding.', 2), 'This single field decides whether the meeting should exist.')}
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:110px"><label>Minutes</label>${number('mins', s.mins, { min: 5, max: 480, step: 5 })}</div>
          <div class="field grow" style="min-width:110px"><label>People</label>${number('people', s.people, { min: 1, max: 200 })}</div>
          <div class="field grow" style="min-width:130px"><label>Avg hourly cost</label>${number('rate', s.rate, { min: 0, max: 10000, ph: 'Optional' })}</div>
        </div>`)}
      ${panel('Agenda', rows, addBtn('add', 'Add item'))}
      ${panel('Around the meeting', `
        ${field('What must people read or do beforehand?', area('prep', s.prep, 'Sending the document in the invitation is the single highest-leverage change you can make.', 2))}
        ${field('How will the outcome be recorded and circulated?', text('outcome', s.outcome, 'e.g. Decisions and owners in the thread within an hour'))}`)}`
  },

  output (s) {
    if (!s.title.trim() && !s.decision.trim()) {
      return outPanel('The agenda', emptyOut('Start with the decision', 'If there is no decision, there is probably no meeting.'))
    }

    const items = s.items.filter(it => (it.what || '').trim())
    const agendaMins = items.reduce((a, it) => a + n(it.mins), 0)
    const personMins = n(s.mins) * n(s.people)
    const cost = (personMins / 60) * n(s.rate)
    const informOnly = items.length > 0 && items.every(it => it.kind === 'inform')
    const noOwner = items.filter(it => !(it.owner || '').trim())
    const over = agendaMins > n(s.mins)

    return outPanel('The agenda', `
      <div class="stats" style="margin-bottom:var(--s-4)">
        <div class="stat"><b>${n(s.mins)}m</b><span>booked</span></div>
        <div class="stat"><b>${Math.round(personMins / 60)}h</b><span>person-time</span></div>
        ${n(s.rate) > 0 ? `<div class="stat"><b>${Math.round(cost)}</b><span>estimated cost</span></div>` : ''}
      </div>

      ${!s.decision.trim()
        ? callout('No decision named', 'You have not written down what will be decided. That is the answer: cancel it and send a written update instead. Every recurring meeting that nobody can justify started exactly here.', 'danger')
        : callout('The decision', esc(s.decision), 'success')}

      ${informOnly ? `<div style="margin-top:var(--s-3)">${callout('This is a broadcast', 'Every item is information only. Information does not need a meeting — it needs a well-written message that people can read at their own speed and search later.', 'danger')}</div>` : ''}

      ${items.length ? `<div style="margin-top:var(--s-4)"><p class="eyebrow">Running order</p>
        ${items.map((it, i) => `
          <div class="rowitem" style="grid-template-columns:34px minmax(0,1fr) auto;margin-top:6px">
            <span class="t-num faint">${i + 1}</span>
            <div>
              <div class="t-small" style="font-weight:600">${esc(it.what)}</div>
              <div class="t-meta faint">${it.owner ? esc(it.owner) : 'no owner'} · ${it.kind === 'decide' ? 'decision' : it.kind === 'discuss' ? 'discussion' : 'information'}</div>
            </div>
            <span class="badge badge-neutral">${n(it.mins)}m</span>
          </div>`).join('')}</div>` : ''}

      ${over ? `<div style="margin-top:var(--s-3)">${callout('The agenda does not fit', `Your items total ${agendaMins} minutes in a ${n(s.mins)}-minute meeting. Something will be rushed — and it will be the last item, which is usually the one that mattered. Cut an item or extend the booking now.`, 'warning')}</div>` : ''}

      ${noOwner.length ? `<div style="margin-top:var(--s-3)">${callout('Unowned items', `${noOwner.length} item${noOwner.length === 1 ? ' has' : 's have'} no named lead. Unowned agenda items become the meeting drifting. Put a name against each one, in the invitation.`, 'warning')}</div>` : ''}

      ${!s.prep.trim() ? `<div style="margin-top:var(--s-3)">${callout('No pre-reading', 'Without material sent in advance, the first third of the meeting will be spent getting everyone to the same starting point — at the cost of everybody in the room.', 'info')}</div>` : ''}

      ${personMins >= 480 ? `<div style="margin-top:var(--s-3)">${callout('This is a working day', `${Math.round(personMins / 60)} hours of collective time. Worth asking who genuinely needs to attend versus who needs the notes. Inviting someone is not a courtesy — it is a bill.`, 'warning')}</div>` : ''}

      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  actions: {
    add: s => s.items.push({ id: uid(), what: '', mins: 10, owner: '', kind: 'decide' }),
    del: (s, { i }) => s.items.splice(i, 1)
  },

  summary (s) {
    const items = s.items.filter(it => (it.what || '').trim())
    const kind = { decide: 'DECIDE', discuss: 'DISCUSS', inform: 'INFORM' }
    return [
      stamp('Meeting Planner'),
      `Meeting: ${s.title || '(untitled)'}`,
      `Length: ${n(s.mins)} minutes · ${n(s.people)} people · ${Math.round((n(s.mins) * n(s.people)) / 60)}h of person-time`,
      '',
      `DECISION TO BE MADE: ${s.decision || '(none — cancel and send a written update)'}`,
      head('Agenda'),
      ...(items.length ? items.map((it, i) => `  ${i + 1}. [${kind[it.kind]}] ${it.what} — ${n(it.mins)}m — ${it.owner || 'no owner'}`) : ['  (none)']),
      head('Before'),
      `  ${s.prep || '(no pre-reading — send the document with the invitation)'}`,
      head('After'),
      `  ${s.outcome || '(no record planned)'}`,
      '',
      READS
    ].join('\n')
  }
}
