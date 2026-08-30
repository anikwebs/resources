import {
  text, number, select, panel, outPanel, addBtn, delBtn, tblWrap,
  callout, emptyOut, meter, n, num, r1, uid, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'

const READS = 'This is triage, not budgeting. The purpose is not to balance a spreadsheet — it is to work out which obligations can actually hurt you, and in what order. Not all debts are equal, and treating them as if they are is how people pay a credit card while losing their home.'

/* Priority is not decided by size, or by interest rate, or by who
   shouts loudest. It is decided by what the creditor can legally do to
   you if you do not pay. That is the entire logic of this tool. */
const PRIORITY = {
  home: { rank: 1, label: 'Rent / mortgage', risk: 'losing your home', why: 'Non-payment leads to possession proceedings. Nothing else on this list can make you homeless.' },
  utility: { rank: 2, label: 'Energy / water', risk: 'disconnection', why: 'Suppliers can disconnect or force a prepayment meter, and getting reconnected costs more than the arrears did.' },
  tax: { rank: 2, label: 'Tax / council tax', risk: 'enforcement agents, wage deduction', why: 'Tax and local authority debts carry collection powers most lenders do not have — deduction straight from wages or benefits.' },
  court: { rank: 2, label: 'Court fine / maintenance', risk: 'enforcement, sometimes imprisonment', why: 'Court-ordered obligations escalate faster than commercial debt and can carry criminal consequences.' },
  secured: { rank: 3, label: 'Secured loan / car finance', risk: 'losing the asset', why: 'The lender can repossess the thing the loan is secured against — which may be how you get to work.' },
  card: { rank: 4, label: 'Credit card / overdraft', risk: 'interest, credit file damage', why: 'Unsecured. Expensive and unpleasant, but it cannot take your home, your liberty or your car.' },
  personal: { rank: 5, label: 'Family / friend', risk: 'relationship damage', why: 'Real, but not legally enforceable in the same way. It is almost always the wrong thing to pay first, however bad that feels.' }
}

const KINDS = Object.entries(PRIORITY).map(([v, p]) => ({ v, l: p.label }))

export default {
  id: 'money-triage',
  name: 'Money Triage',
  blurb: 'Work out which bills can actually hurt you, and in what order to pay them.',
  icon: 'money',
  accent: 'signal',
  group: 'Money',
  purpose: 'Turns "I cannot pay everything this month" into a defensible order of payment based on consequence rather than pressure.',
  when: [
    'There is not enough money to cover everything this month',
    'Several people are chasing you at once',
    'You are about to pay whoever contacted you most recently'
  ],
  reads: READS,

  initial: () => ({
    income: 0,
    essentials: 0,
    debts: [
      { id: uid(), name: '', kind: 'home', owed: 0, min: 0 },
      { id: uid(), name: '', kind: 'card', owed: 0, min: 0 }
    ]
  }),

  form (s) {
    const rows = s.debts.map((d, i) => `
      <div class="rowitem" style="grid-template-columns:minmax(0,1.3fr) minmax(0,1.2fr) 88px 88px 34px;margin-top:${i ? 'var(--s-2)' : '0'}">
        ${text(`debts.${i}.name`, d.name, 'Who is owed')}
        ${select(`debts.${i}.kind`, d.kind, KINDS)}
        ${number(`debts.${i}.owed`, d.owed, { min: 0, max: 10000000, ph: 'Owed' })}
        ${number(`debts.${i}.min`, d.min, { min: 0, max: 1000000, ph: 'Due now' })}
        ${s.debts.length > 1 ? delBtn('del', i, 'Remove this debt') : '<span></span>'}
      </div>`).join('')

    return `
      ${panel('What is actually coming in', `
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:170px"><label>Money in, this month</label>
            ${number('income', s.income, { min: 0, max: 10000000 })}
            <span class="hint">Wages, benefits, anything reliable. Not what you are hoping for.</span></div>
          <div class="field grow" style="min-width:170px"><label>Food, transport, medication</label>
            ${number('essentials', s.essentials, { min: 0, max: 10000000 })}
            <span class="hint">Survival costs. These come before every creditor — you cannot repay anyone if you cannot eat or get to work.</span></div>
        </div>`)}
      ${panel('Everyone who wants paying', `
        <div class="rowitem" style="grid-template-columns:minmax(0,1.3fr) minmax(0,1.2fr) 88px 88px 34px">
          <span class="t-meta faint">Creditor</span><span class="t-meta faint">Type</span>
          <span class="t-meta faint">Total owed</span><span class="t-meta faint">Due now</span><span></span>
        </div>
        ${rows}
        <div class="row" style="margin-top:var(--s-3)">${addBtn('add', 'Add another')}</div>
        <p class="t-caption faint" style="margin-top:var(--s-3)">Type matters more than amount. Choose it honestly — it is what decides the order below.</p>`)}`
  },

  output (s) {
    const debts = s.debts.filter(d => (d.name || '').trim() || n(d.owed) > 0 || n(d.min) > 0)
    if (!n(s.income) && !debts.length) {
      return outPanel('The order to pay in', emptyOut('Add your income and one debt', 'The priority order appears as soon as there is something to sort.'))
    }

    const available = n(s.income) - n(s.essentials)
    const totalDue = debts.reduce((t, d) => t + n(d.min), 0)
    const totalOwed = debts.reduce((t, d) => t + n(d.owed), 0)
    const gap = available - totalDue

    /* Sort by legal consequence first, then by what is being demanded. */
    const sorted = debts.slice().sort((a, b) =>
      (PRIORITY[a.kind].rank - PRIORITY[b.kind].rank) || (n(b.min) - n(a.min)))

    /* Walk down the list spending what is available, so the person can
       see exactly where the money runs out rather than being told a total. */
    let left = Math.max(0, available)
    const plan = sorted.map(d => {
      const due = n(d.min)
      const pay = Math.min(left, due)
      left -= pay
      return { ...d, due, pay, short: due - pay }
    })

    const covered = plan.filter(p => p.short <= 0).length
    const priorityUnpaid = plan.filter(p => p.short > 0 && PRIORITY[p.kind].rank <= 2)
    const months = available > 0 && totalOwed > 0 ? totalOwed / available : 0

    return outPanel('The order to pay in', `
      <div class="stats" style="margin-bottom:var(--s-4)">
        <div class="stat"><b>${num(Math.round(available))}</b><span>left after essentials</span></div>
        <div class="stat"><b>${num(Math.round(totalDue))}</b><span>demanded this month</span></div>
        <div class="stat"><b>${covered}/${plan.length}</b><span>fully covered</span></div>
      </div>

      ${available <= 0
        ? callout('There is nothing left after essentials', 'This is not a payment-order problem and prioritising will not solve it. Contact a free debt advice service today — they can negotiate holds, set up affordable arrangements and check what you are entitled to and not claiming. Do not take a short-term loan to bridge this.', 'danger')
        : gap < 0
          ? callout(`Short by ${num(Math.round(-gap))} this month`, 'You cannot pay everyone, which is the normal starting point for triage. The order below limits the damage: pay the top in full before anything lower, and contact the ones you cannot pay before they contact you.', 'warning')
          : callout('Everything demanded is coverable', `You have ${num(Math.round(gap))} spare after meeting every minimum. Put it against the highest-priority balance rather than spreading it thinly, and set a standing order so next month is not decided by whoever calls first.`, 'success')}

      <div style="margin-top:var(--s-5)">
        <p class="eyebrow">Pay in this order</p>
        ${tblWrap(`
          <thead><tr><th class="n">#</th><th>Creditor</th><th>Why it ranks here</th><th class="n">Due</th><th class="n">Pay now</th></tr></thead>
          <tbody>${plan.map((p, i) => `
            <tr${i === 0 && plan.length > 1 ? ' class="lead"' : ''}>
              <td class="n">${i + 1}</td>
              <td><strong>${esc(p.name || PRIORITY[p.kind].label)}</strong><br>
                  <span class="t-meta faint">${esc(PRIORITY[p.kind].label)} · risk: ${esc(PRIORITY[p.kind].risk)}</span></td>
              <td class="t-small">${esc(PRIORITY[p.kind].why)}</td>
              <td class="n">${num(Math.round(p.due))}</td>
              <td class="n">${p.pay > 0 ? num(Math.round(p.pay)) : '—'}${p.short > 0 ? `<br><span class="t-meta faint">short ${num(Math.round(p.short))}</span>` : ''}</td>
            </tr>`).join('')}</tbody>`)}
      </div>

      ${priorityUnpaid.length ? `<div style="margin-top:var(--s-4)">${callout(
        'Priority debts are unpaid',
        `${priorityUnpaid.map(p => esc(p.name || PRIORITY[p.kind].label)).join(', ')} — these carry the powers that do lasting damage: possession, disconnection, deduction from wages. Do not go silent on them. Call first, say plainly that you cannot pay the full amount, and offer something. An arrangement you proposed is treated completely differently from a payment you simply missed.`,
        'danger')}</div>` : ''}

      ${months > 0 ? `<div style="margin-top:var(--s-4)">
        <p class="eyebrow">Total debt against monthly capacity</p>
        ${meter(Math.min(100, (available * 12 / totalOwed) * 100), true)}
        <p class="t-small muted" style="margin-top:var(--s-2)">At ${num(Math.round(available))} a month against ${num(Math.round(totalOwed))} owed, clearing everything takes roughly <strong>${r1(months)} months</strong> before any interest. ${months > 60 ? 'Above about sixty months this stops being a budgeting problem — get advice about the formal options available to you, because there are more than most people think.' : 'That is a real horizon rather than a vague dread, which is the point of writing it down.'}</p>
      </div>` : ''}

      ${plan.some(p => p.kind === 'personal' && p.pay > 0) && priorityUnpaid.length ? `<div style="margin-top:var(--s-3)">${callout(
        'You are paying a person while a priority debt goes short',
        'This is the most common and most expensive instinct in the whole exercise, because the social cost is immediate and the legal cost is not. Tell them the truth and pay the priority debt.', 'warning')}</div>` : ''}

      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  actions: {
    add: s => s.debts.push({ id: uid(), name: '', kind: 'card', owed: 0, min: 0 }),
    del: (s, { i }) => s.debts.splice(i, 1)
  },

  summary (s) {
    const debts = s.debts.filter(d => (d.name || '').trim() || n(d.min) > 0)
    const available = n(s.income) - n(s.essentials)
    const sorted = debts.slice().sort((a, b) =>
      (PRIORITY[a.kind].rank - PRIORITY[b.kind].rank) || (n(b.min) - n(a.min)))
    let left = Math.max(0, available)
    const lines = sorted.map((d, i) => {
      const pay = Math.min(left, n(d.min))
      left -= pay
      return `  ${i + 1}. ${d.name || PRIORITY[d.kind].label} (${PRIORITY[d.kind].label}) — due ${Math.round(n(d.min))}, pay ${Math.round(pay)}`
    })
    return [
      stamp('Money Triage'),
      `Income: ${Math.round(n(s.income))}`,
      `Essentials: ${Math.round(n(s.essentials))}`,
      `Available for creditors: ${Math.round(available)}`,
      head('Pay in this order'),
      ...(lines.length ? lines : ['  (nothing entered)']),
      head('The rule'),
      '  Priority = what they can legally do to you, not how loudly they ask.',
      '  Home and utilities before cards. Never borrow to pay a card.',
      '  An arrangement you offered beats a payment you missed.',
      '',
      READS
    ].join('\n')
  }
}
