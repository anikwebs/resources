import {
  text, number, select, panel, outPanel, addBtn, delBtn, tblWrap,
  callout, emptyOut, bar, n, num, r1, pct, uid, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'

const READS = 'A time audit is uncomfortable because it is accurate. The finding is almost never "I need to work harder" — it is that a large block of the week is going to something nobody would defend out loud, and that block is where your available time actually is.'

/* Value is the only axis that matters here, and it is deliberately
   coarse: three answers you can give honestly in two seconds. */
const VALUE = {
  moves: { label: 'Moves something real', w: 3, tone: 'success' },
  keeps: { label: 'Keeps the lights on', w: 2, tone: 'info' },
  drain: { label: 'Nobody would defend it', w: 0, tone: 'danger' }
}
const VALUE_OPTS = Object.entries(VALUE).map(([v, x]) => ({ v, l: x.label }))

const ACTION = {
  drain: 'Kill, or cap it with a hard time box',
  keeps: 'Delegate, template or automate',
  moves: 'Protect this block before anything else gets scheduled'
}

export default {
  id: 'time-audit',
  name: 'Time Audit',
  blurb: 'Find where the week actually goes, and what it is worth.',
  icon: 'refresh',
  accent: 'atlas',
  group: 'Working',
  purpose: 'Converts a vague sense of being busy into hours per week against the value each hour produces.',
  when: [
    'You finish weeks tired with nothing you can name',
    'You want to take something on and cannot see the space',
    'You are about to ask for help without knowing what to hand over'
  ],
  reads: READS,

  initial: () => ({
    hours: 45,
    blocks: [
      { id: uid(), name: 'Meetings', hours: 8, value: 'keeps', who: 'me' },
      { id: uid(), name: 'Email and messages', hours: 6, value: 'keeps', who: 'me' },
      { id: uid(), name: '', hours: 0, value: 'moves', who: 'me' }
    ]
  }),

  form (s) {
    const rows = s.blocks.map((b, i) => `
      <div class="rowitem" style="grid-template-columns:minmax(0,1.5fr) 78px minmax(0,1.3fr) minmax(0,1fr) 34px;margin-top:${i ? 'var(--s-2)' : '0'}">
        ${text(`blocks.${i}.name`, b.name, 'What the time goes to')}
        ${number(`blocks.${i}.hours`, b.hours, { min: 0, max: 100, step: 0.5 })}
        ${select(`blocks.${i}.value`, b.value, VALUE_OPTS)}
        ${select(`blocks.${i}.who`, b.who, [
          { v: 'me', l: 'Only I can do it' },
          { v: 'other', l: 'Someone else could' },
          { v: 'nobody', l: 'Nobody needs to' }
        ])}
        ${s.blocks.length > 1 ? delBtn('del', i, 'Remove this block') : '<span></span>'}
      </div>`).join('')

    return `
      ${panel('The week', `
        <div class="field" style="max-width:220px"><label>Hours you actually work in a week</label>
          ${number('hours', s.hours, { min: 1, max: 120 })}
          <span class="hint">The real number, including evenings. Not your contracted hours.</span></div>`)}
      ${panel('Where it goes', `
        <div class="rowitem" style="grid-template-columns:minmax(0,1.5fr) 78px minmax(0,1.3fr) minmax(0,1fr) 34px">
          <span class="t-meta faint">Block</span><span class="t-meta faint">Hrs/wk</span>
          <span class="t-meta faint">Value</span><span class="t-meta faint">Who</span><span></span>
        </div>
        ${rows}
        <div class="row" style="margin-top:var(--s-3)">${addBtn('add', 'Add a block')}</div>
        <p class="t-caption faint" style="margin-top:var(--s-3)">Six to ten blocks is enough. Guess the hours — an honest estimate beats a precise fiction, and you can correct it next week.</p>`)}`
  },

  output (s) {
    const blocks = s.blocks.filter(b => (b.name || '').trim() && n(b.hours) > 0)
    if (!blocks.length) {
      return outPanel('Where the week goes', emptyOut('Name one block of time', 'The breakdown appears as soon as a block has hours against it.'))
    }

    const total = blocks.reduce((t, b) => t + n(b.hours), 0)
    const week = n(s.hours) || total
    const unaccounted = week - total

    const byValue = {}
    for (const k of Object.keys(VALUE)) byValue[k] = 0
    for (const b of blocks) byValue[b.value] += n(b.hours)

    const drainHours = byValue.drain
    const movesHours = byValue.moves
    const delegable = blocks.filter(b => b.who === 'other').reduce((t, b) => t + n(b.hours), 0)
    const pointless = blocks.filter(b => b.who === 'nobody').reduce((t, b) => t + n(b.hours), 0)

    /* Weighted output per hour worked: a crude but honest single figure. */
    const weighted = blocks.reduce((t, b) => t + n(b.hours) * VALUE[b.value].w, 0)
    const efficiency = total > 0 ? Math.round((weighted / (total * 3)) * 100) : 0

    const sorted = blocks.slice().sort((a, b) =>
      (VALUE[a.value].w - VALUE[b.value].w) || (n(b.hours) - n(a.hours)))

    const biggestDrain = sorted.find(b => b.value === 'drain')
    const recoverable = drainHours + delegable + pointless

    return outPanel('Where the week goes', `
      <div class="stats" style="margin-bottom:var(--s-4)">
        <div class="stat"><b>${r1(movesHours)}h</b><span>moves something real</span></div>
        <div class="stat"><b>${r1(drainHours)}h</b><span>nobody would defend</span></div>
        <div class="stat"><b>${efficiency}%</b><span>of the week doing real work</span></div>
      </div>

      ${movesHours < week * 0.2
        ? callout('Under a fifth of the week produces anything', `Only ${r1(movesHours)} of ${r1(week)} hours goes to work that moves something real. That is not a discipline problem — it is a structural one, and no amount of getting up earlier will fix it. The fix is subtraction, and the list below shows what to subtract.`, 'danger')
        : drainHours > week * 0.25
          ? callout(`${pct(drainHours, week)}% of the week is drain`, `${r1(drainHours)} hours a week is roughly ${r1(drainHours * 46 / 8)} working days a year on things you have just told yourself nobody would defend. You do not need more time; you need to stop doing these.`, 'warning')
          : callout('The shape is defensible', `${pct(movesHours, week)}% on real work and ${pct(drainHours, week)}% on drain is better than most weeks look under inspection. The remaining move is protecting the good block rather than finding more hours.`, 'success')}

      <div style="margin-top:var(--s-5)">
        <p class="eyebrow">Every block, worst value first</p>
        ${tblWrap(`
          <thead><tr><th>Block</th><th class="n">Hrs/wk</th><th style="width:22%">Share</th><th>Value</th><th>What to do</th></tr></thead>
          <tbody>${sorted.map(b => `
            <tr>
              <td><strong>${esc(b.name)}</strong>${b.who === 'other' ? '<br><span class="t-meta faint">someone else could do this</span>' : b.who === 'nobody' ? '<br><span class="t-meta faint">nobody needs this done</span>' : ''}</td>
              <td class="n">${r1(n(b.hours))}</td>
              <td>${bar(pct(n(b.hours), week))} <span class="t-meta faint">${pct(n(b.hours), week)}%</span></td>
              <td class="t-small">${esc(VALUE[b.value].label)}</td>
              <td class="t-small">${esc(ACTION[b.value])}</td>
            </tr>`).join('')}</tbody>`)}
      </div>

      ${Math.abs(unaccounted) > 2 ? `<div style="margin-top:var(--s-4)">${callout(
        unaccounted > 0 ? `${r1(unaccounted)} hours unaccounted for` : `${r1(-unaccounted)} hours more than the week contains`,
        unaccounted > 0
          ? 'That gap is real and it is usually the most interesting number here. It goes to switching between tasks, interruptions and recovery from them. Find it by logging two actual days rather than estimating.'
          : 'Your blocks add up to more hours than you said you work, which means either the estimates are generous or the week is longer than you admitted. Both are worth knowing.',
        'info')}</div>` : ''}

      ${recoverable > 2 ? `<div style="margin-top:var(--s-4)">${callout('What is actually recoverable',
        `${r1(recoverable)} hours a week — ${r1(drainHours)} of drain, ${r1(delegable)} that someone else could do, ${r1(pointless)} that nobody needs done. That is <strong>${r1(recoverable * 46)} hours a year</strong>. You will not recover all of it, but recovering a third of it is the difference between having capacity and not.`, 'success')}</div>` : ''}

      ${biggestDrain ? `<div style="margin-top:var(--s-3)">${callout('Start here, this week',
        `<strong>${esc(biggestDrain.name)}</strong> — ${r1(n(biggestDrain.hours))} hours. Do not try to eliminate it. Cap it: half the hours, a fixed slot, or a rule about when you touch it. Caps survive; abolitions get quietly reinstated within a fortnight.`, 'warning')}</div>` : ''}

      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  actions: {
    add: s => s.blocks.push({ id: uid(), name: '', hours: 0, value: 'keeps', who: 'me' }),
    del: (s, { i }) => s.blocks.splice(i, 1)
  },

  summary (s) {
    const blocks = s.blocks.filter(b => (b.name || '').trim() && n(b.hours) > 0)
    const total = blocks.reduce((t, b) => t + n(b.hours), 0)
    const week = n(s.hours) || total
    const byValue = { moves: 0, keeps: 0, drain: 0 }
    for (const b of blocks) byValue[b.value] += n(b.hours)
    const sorted = blocks.slice().sort((a, b) => (VALUE[a.value].w - VALUE[b.value].w) || (n(b.hours) - n(a.hours)))
    return [
      stamp('Time Audit'),
      `Week: ${r1(week)} hours worked · ${r1(total)} accounted for`,
      `Moves something real: ${r1(byValue.moves)}h (${pct(byValue.moves, week)}%)`,
      `Keeps the lights on:  ${r1(byValue.keeps)}h (${pct(byValue.keeps, week)}%)`,
      `Nobody would defend:  ${r1(byValue.drain)}h (${pct(byValue.drain, week)}%)`,
      head('Blocks, worst value first'),
      ...(sorted.length ? sorted.map(b => `  ${r1(n(b.hours))}h — ${b.name} [${VALUE[b.value].label}] → ${ACTION[b.value]}`) : ['  (nothing entered)']),
      head('Rule'),
      '  Cap the biggest drain rather than abolishing it. Caps survive.',
      '',
      READS
    ].join('\n')
  }
}
