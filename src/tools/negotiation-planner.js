import {
  field, text, area, number, panel, outPanel, addBtn, delBtn, bar,
  callout, emptyOut, n, num, uid, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'
import { I } from '../core/icons.js'

const READS = 'Leverage comes from a real alternative, not from confidence. If you have no alternative, negotiate anyway — but ask once, accept the answer gracefully, and spend the next months building the alternative.'

export default {
  id: 'negotiation-planner',
  name: 'Negotiation Planner',
  blurb: 'Set your number, your walk-away, and the non-money axes.',
  icon: 'scale',
  accent: 'council',
  group: 'Communicating',
  purpose: 'Stops you negotiating against yourself by fixing the numbers before the conversation.',
  when: [
    'Pay, a contract, a price, a deadline or scope is on the table',
    'You are about to say a range instead of a number',
    'You want to know whether you have any leverage at all'
  ],
  reads: READS,

  initial: () => ({
    subject: '',
    other: '',
    current: 0,
    ask: 0,
    target: 0,
    walk: 0,
    alt: '',
    altStrength: 'weak',
    evidence: [{ id: uid(), point: '' }],
    axes: [{ id: uid(), item: '', value: 3 }],
    opener: '',
    timing: ''
  }),

  form (s) {
    const ev = s.evidence.map((e2, i) => `
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px">
        ${text(`evidence.${i}.point`, e2.point, 'A specific, checkable fact about your contribution or the market')}
        ${s.evidence.length > 1 ? delBtn('delEv', i, 'Remove point') : '<span></span>'}
      </div>`).join('')

    const ax = s.axes.map((a, i) => `
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 120px 34px">
        ${text(`axes.${i}.item`, a.item, 'e.g. Four days a week, training budget, title')}
        <div class="field"><label class="t-meta faint">Worth to you</label>
          ${number(`axes.${i}.value`, a.value, { min: 1, max: 5 })}</div>
        ${s.axes.length > 1 ? delBtn('delAx', i, 'Remove item') : '<span></span>'}
      </div>`).join('')

    return `
      ${panel('What is being negotiated', `
        ${field('Subject', text('subject', s.subject, 'e.g. Salary for the new role'))}
        ${field('With whom, and what pressure are they under?', area('other', s.other, 'Budget cycle, headcount freeze, their own targets, how badly they need this filled.', 2))}`)}
      ${panel('The numbers', `
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:120px"><label>Current</label>${number('current', s.current, { min: 0, max: 100000000 })}</div>
          <div class="field grow" style="min-width:120px"><label>Your opening ask</label>${number('ask', s.ask, { min: 0, max: 100000000 })}</div>
        </div>
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:120px"><label>Target — genuinely pleased</label>${number('target', s.target, { min: 0, max: 100000000 })}</div>
          <div class="field grow" style="min-width:120px"><label>Walk-away</label>${number('walk', s.walk, { min: 0, max: 100000000 })}</div>
        </div>
        <p class="hint">State one number, not a range. A range is always heard as its bottom.</p>`)}
      ${panel('Your alternative', `
        ${field('If they say no, what do you actually do?', area('alt', s.alt, 'Another offer, staying put, a different supplier, walking. Be honest — an imagined alternative gives no leverage.', 2))}
        ${field('How strong is it?', `<select class="select" data-bind="altStrength">
          ${[['strong', 'Strong — a concrete, dated alternative I would take'],
             ['moderate', 'Moderate — options exist but nothing signed'],
             ['weak', 'Weak — I have nowhere else to go right now']]
            .map(([v, l]) => `<option value="${v}"${s.altStrength === v ? ' selected' : ''}>${l}</option>`).join('')}
        </select>`)}`)}
      ${panel('Your case', ev, addBtn('addEv', 'Add evidence'))}
      ${panel('If money is fixed', ax, addBtn('addAx', 'Add non-money item'))}
      ${panel('The ask', `
        ${field('Your sentence, word for word', area('opener', s.opener, 'Name the number and stop talking. Do not justify it in the same breath.', 2))}
        ${field('When will you ask?', text('timing', s.timing, 'e.g. Before the planning cycle closes, after the launch lands'))}`)}`
  },

  output (s) {
    if (!s.subject.trim() && !n(s.ask)) {
      return outPanel('Your position', emptyOut('Name the subject and your number', 'The read-out on leverage appears here.'))
    }

    const ev = s.evidence.filter(e2 => (e2.point || '').trim())
    const ax = s.axes.filter(a => (a.item || '').trim()).sort((a, b) => n(b.value) - n(a.value))
    const uplift = n(s.current) > 0 && n(s.ask) > 0 ? Math.round(((n(s.ask) - n(s.current)) / n(s.current)) * 100) : null

    const strengthPct = { strong: 90, moderate: 50, weak: 18 }[s.altStrength]
    const problems = []
    if (n(s.walk) > 0 && n(s.ask) > 0 && n(s.walk) >= n(s.ask)) problems.push('Your walk-away is at or above your ask. One of those numbers is wrong.')
    if (n(s.target) > 0 && n(s.ask) > 0 && n(s.target) > n(s.ask)) problems.push('Your target is above your opening ask — you have left no room at all.')
    if (!n(s.walk)) problems.push('No walk-away set. Without one you will accept whatever is offered when the room gets uncomfortable.')

    return outPanel('Your position', `
      ${n(s.ask) > 0 ? `<div class="stats" style="margin-bottom:var(--s-4)">
        <div class="stat"><b>${num(n(s.ask))}</b><span>you ask</span></div>
        ${n(s.target) > 0 ? `<div class="stat"><b>${num(n(s.target))}</b><span>target</span></div>` : ''}
        ${n(s.walk) > 0 ? `<div class="stat"><b>${num(n(s.walk))}</b><span>walk away</span></div>` : ''}
      </div>` : ''}

      ${uplift != null ? `<p class="t-small muted">That is a ${uplift}% move on your current ${num(n(s.current))}.${uplift > 40 ? ' A jump that size needs external evidence — market data or a competing offer — not internal argument.' : ''}</p>` : ''}

      <div class="field" style="margin:var(--s-4) 0">
        <label>Your leverage — ${s.altStrength}</label>
        ${bar(strengthPct)}
      </div>

      ${s.altStrength === 'weak'
        ? callout('You are asking, not negotiating', 'With no alternative, this is a request — and that is fine. Ask once, clearly, and accept the answer without resentment. Then spend the next six months building the alternative, because that is the only thing that changes the next conversation.', 'warning')
        : s.altStrength === 'strong'
          ? callout('You have real leverage', 'You can hold a number. Do not threaten with the alternative — simply be visibly comfortable. If you name the alternative as a threat, you invite them to call it.', 'success')
          : callout('Partial leverage', 'Options exist but nothing is signed. Ask, hold your number once, then judge. Do not imply you have an offer you do not have — that unravels badly and permanently.', 'info')}

      ${s.opener.trim() ? `<div class="lines" style="margin-top:var(--s-4)">
        <div class="line"><span class="when">Say this</span><span class="say">${esc(s.opener)}</span>
        <button class="btn btn-icon copy" data-copy="${esc(s.opener)}" aria-label="Copy the ask" title="Copy">${I.copy}</button></div>
      </div>` : ''}

      ${ev.length ? `<div style="margin-top:var(--s-4)"><p class="eyebrow">Your case — ${ev.length} point${ev.length === 1 ? '' : 's'}</p>
        <ul class="goodlist">${ev.map(e2 => `<li>${esc(e2.point)}</li>`).join('')}</ul></div>`
        : `<div style="margin-top:var(--s-4)">${callout('No evidence', 'You have listed nothing specific. "I have worked hard" is not evidence — it is how everybody feels. Bring outcomes, numbers, dates and comparables.', 'warning')}</div>`}

      ${ax.length ? `<div style="margin-top:var(--s-4)">${callout('If the money is genuinely fixed', `Ask for these instead, in this order: ${ax.slice(0, 3).map(a => `<strong>${esc(a.item)}</strong>`).join(', ')}. Budget is often frozen when flexibility is not. Pick two, not seven — asking for everything reads as unserious.`, 'info')}</div>` : ''}

      ${problems.length ? `<div style="margin-top:var(--s-3)">${callout('Check your numbers', problems.map(p => esc(p)).join('<br>'), 'danger')}</div>` : ''}

      ${!s.timing.trim() ? `<div style="margin-top:var(--s-3)">${callout('Timing is leverage too', 'Ask near planning or review cycles, when budget is being allocated — not after bad results, and not in a corridor.', 'info')}</div>` : ''}

      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  actions: {
    addEv: s => s.evidence.push({ id: uid(), point: '' }),
    delEv: (s, { i }) => s.evidence.splice(i, 1),
    addAx: s => s.axes.push({ id: uid(), item: '', value: 3 }),
    delAx: (s, { i }) => s.axes.splice(i, 1)
  },

  summary (s) {
    const ev = s.evidence.filter(e2 => (e2.point || '').trim())
    const ax = s.axes.filter(a => (a.item || '').trim()).sort((a, b) => n(b.value) - n(a.value))
    return [
      stamp('Negotiation Planner'),
      `Subject: ${s.subject || '(not stated)'}`,
      `Other side: ${s.other || '(not considered)'}`,
      head('Numbers'),
      `  Current:    ${n(s.current) || '-'}`,
      `  Ask:        ${n(s.ask) || '-'}`,
      `  Target:     ${n(s.target) || '-'}`,
      `  Walk away:  ${n(s.walk) || '(not set — set this)'}`,
      head('Alternative'),
      `  ${s.alt || '(none stated)'}`,
      `  Strength: ${s.altStrength}`,
      head('Evidence'),
      ...(ev.length ? ev.map(e2 => `  - ${e2.point}`) : ['  (none — bring outcomes, numbers, comparables)']),
      head('Non-money asks, in priority order'),
      ...(ax.length ? ax.map(a => `  - ${a.item} (worth ${n(a.value)}/5)`) : ['  (none)']),
      head('The ask'),
      `  "${s.opener || '(not written)'}"`,
      `  Timing: ${s.timing || '(not planned)'}`,
      '',
      READS
    ].join('\n')
  }
}
