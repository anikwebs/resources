import {
  field, text, area, number, panel, outPanel, callout, emptyOut, bar,
  n, r1, num, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'

const READS = 'Opportunity cost is not what you pay. It is what you stop being able to do. Money you can usually earn back; the hours and the attention you cannot.'

export default {
  id: 'opportunity-cost',
  name: 'Opportunity Cost Analyzer',
  blurb: 'Price what you give up, not just what you spend.',
  icon: 'money',
  accent: 'council',
  group: 'Deciding',
  purpose: 'Makes the invisible side of a commitment visible before you agree to it.',
  when: [
    'Something looks free because no money changes hands',
    'You are saying yes to a commitment with a long tail',
    'A purchase is being justified by the sticker price alone'
  ],
  reads: READS,

  initial: () => ({
    commit: '',
    hoursWeek: 5,
    weeks: 12,
    rate: 0,
    cash: 0,
    instead: '',
    gain: '',
    reversible: ''
  }),

  form (s) {
    return `
      ${panel('The commitment', `
        ${field('What are you considering saying yes to?', text('commit', s.commit, 'e.g. Running the internal book club'))}
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:130px"><label>Hours per week</label>
            ${number('hoursWeek', s.hoursWeek, { min: 0, max: 100, step: 0.5 })}</div>
          <div class="field grow" style="min-width:130px"><label>For how many weeks?</label>
            ${number('weeks', s.weeks, { min: 1, max: 520 })}</div>
        </div>
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:130px"><label>Your hourly value, if you know it</label>
            ${number('rate', s.rate, { min: 0, max: 10000, ph: 'Optional' })}</div>
          <div class="field grow" style="min-width:130px"><label>Direct money cost</label>
            ${number('cash', s.cash, { min: 0, max: 10000000, ph: 'Optional' })}</div>
        </div>`)}
      ${panel('The other side', `
        ${field('What would those hours otherwise have gone to?', area('instead', s.instead, 'Name it specifically. "Rest" counts. "Nothing" almost never turns out to be true.', 3))}
        ${field('What do you actually gain here?', area('gain', s.gain, 'The concrete benefit — skill, relationship, money, standing, enjoyment.', 3))}
        ${field('If it turns out to be a mistake, how do you get out?', text('reversible', s.reversible, 'e.g. Hand over after one term — or: no exit, it runs all year'))}`)}`
  },

  output (s) {
    if (!s.commit.trim() && !n(s.hoursWeek)) {
      return outPanel('The real price', emptyOut('Name the commitment', 'The total cost appears once you add hours.'))
    }

    const hours = n(s.hoursWeek) * n(s.weeks)
    const days = hours / 8
    const money = hours * n(s.rate)
    const total = money + n(s.cash)
    const evenings = Math.round(hours / 3)

    return outPanel('The real price', `
      <div class="stats" style="margin-bottom:var(--s-4)">
        <div class="stat"><b>${num(Math.round(hours))}</b><span>hours total</span></div>
        <div class="stat"><b>${r1(days)}</b><span>working days</span></div>
        <div class="stat"><b>${num(evenings)}</b><span>free evenings</span></div>
      </div>

      ${total > 0 ? `<p class="t-body">Priced at your own rate, this commitment costs <strong>${num(Math.round(total))}</strong>${n(s.cash) > 0 && money > 0 ? ` — ${num(Math.round(money))} in time plus ${num(Math.round(n(s.cash)))} in cash` : ''}. That figure is the part people leave out when they call something free.</p>` : ''}

      ${hours >= 100 ? `<div style="margin-top:var(--s-4)">${callout('This is not a small yes', `${num(Math.round(hours))} hours is roughly ${r1(days)} working days — about ${num(evenings)} evenings. A commitment this size deserves the same scrutiny as a job change, and it rarely gets it because it arrives one week at a time.`, 'warning')}</div>` : ''}

      ${s.instead.trim()
        ? `<div style="margin-top:var(--s-4)">${callout('What you are choosing against', `${esc(s.instead)}<br><br>That is the actual comparison. Not "this versus nothing" — this versus that.`, 'info')}</div>`
        : `<div style="margin-top:var(--s-4)">${callout('Unanswered', 'You have not said what those hours would otherwise do. Until you name the alternative, the cost stays invisible and every yes feels free.', 'danger')}</div>`}

      ${s.gain.trim() && s.instead.trim() ? `<div style="margin-top:var(--s-3)">
        <div class="callout callout-success"><span class="lab">The trade, stated plainly</span>
        <p>You are spending ${num(Math.round(hours))} hours to get: ${esc(s.gain)}<br>
        Instead of: ${esc(s.instead)}<br><br>
        Read that back. If you would not make that trade knowingly, decline it — politely, today, before it becomes a habit.</p></div></div>` : ''}

      ${s.reversible.trim()
        ? `<div style="margin-top:var(--s-3)">${callout('Your exit', esc(s.reversible), 'info')}</div>`
        : `<div style="margin-top:var(--s-3)">${callout('No exit named', 'You have not written down how you would stop. Agree the end date at the same time as the start date — it is almost impossible to negotiate an exit later without looking like you are letting people down.', 'warning')}</div>`}

      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  summary (s) {
    const hours = n(s.hoursWeek) * n(s.weeks)
    const total = hours * n(s.rate) + n(s.cash)
    return [
      stamp('Opportunity Cost Analyzer'),
      `Commitment: ${s.commit || '(not stated)'}`,
      head('Cost'),
      `  ${n(s.hoursWeek)}h/week × ${n(s.weeks)} weeks = ${Math.round(hours)} hours`,
      `  ≈ ${r1(hours / 8)} working days, ≈ ${Math.round(hours / 3)} free evenings`,
      total > 0 ? `  Priced total: ${Math.round(total)}` : '  No monetary value entered',
      head('The trade'),
      `  Gained: ${s.gain || '(not stated)'}`,
      `  Given up: ${s.instead || '(not stated — name this)'}`,
      `  Exit: ${s.reversible || '(none named — agree one before starting)'}`,
      '',
      READS
    ].join('\n')
  }
}
