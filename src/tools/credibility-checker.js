import {
  field, text, area, select, panel, outPanel, dial, meter,
  callout, emptyOut, n, uid, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'

const READS = 'This scores how much checking a claim has survived — not whether it is true. A well-sourced claim can still be wrong, and an unsourced one can be right. What the score tells you is how much weight it can safely carry.'

/* Each check is weighted. Some are disqualifying regardless of the total. */
const CHECKS = [
  { k: 'primary', w: 5, q: 'Have you seen the original source, not a summary of it?',
    hint: 'The study, the document, the official page — not an article about it.',
    fail: 'You are relying on someone else\'s reading of it.' },
  { k: 'named', w: 3, q: 'Is the author or organisation named and checkable?',
    hint: 'A name you could look up, with a track record.',
    fail: 'Anonymous claims cannot be held to account.' },
  { k: 'dated', w: 4, q: 'Do you know when it was written, and is it still current?',
    hint: 'Rules, prices, medical guidance and law all expire.',
    fail: 'Undated information is unusable for anything that changes.' },
  { k: 'second', w: 4, q: 'Does a genuinely independent source agree?',
    hint: 'Independent means not quoting the same original. Ten articles citing one study is one source.',
    fail: 'No corroboration.' },
  { k: 'interest', w: 3, q: 'Have you identified who benefits from you believing it?',
    hint: 'Funding, ownership, affiliate links, political position, whose product it sells.',
    fail: 'Unexamined interest is where most quiet distortion lives.' },
  { k: 'numbers', w: 3, q: 'If it contains numbers, have you checked them yourself?',
    hint: 'Percentages of what, over what period, compared with what.',
    fail: 'Unchecked figures are the easiest thing to get wrong or misquote.' },
  { k: 'against', w: 3, q: 'Have you read the strongest case against it?',
    hint: 'Stated fairly by someone who actually disagrees.',
    fail: 'You only know one side.' },
  { k: 'applies', w: 4, q: 'Does it actually apply to your situation?',
    hint: 'Jurisdiction, age, sector, scale, circumstances.',
    fail: 'True elsewhere is not the same as true for you.' }
]

export default {
  id: 'credibility-checker',
  name: 'Information Credibility Checker',
  blurb: 'Work out how much weight a claim can safely carry.',
  icon: 'shield',
  accent: 'atlas',
  group: 'Thinking',
  purpose: 'Separates "I read this somewhere" from "I have checked this".',
  when: [
    'Before you forward it, act on it, or repeat it as fact',
    'Money, health, law or a major decision depends on it',
    'It arrived from AI, social media, or a friend of a friend'
  ],
  reads: READS,

  initial: () => ({
    claim: '',
    source: '',
    stakes: 'medium',
    checks: CHECKS.reduce((o, c) => (o[c.k] = 'unknown', o), {}),
    notes: ''
  }),

  form (s) {
    return `
      ${panel('The claim', `
        ${field('What exactly is being claimed?', area('claim', s.claim, 'Write it as a single checkable statement, not a topic.', 2), 'Vague claims cannot be checked. "X causes Y in Z% of cases" can be.')}
        ${field('Where did it come from?', text('source', s.source, 'e.g. A post quoting a study; an AI answer; a colleague'))}
        ${field('What depends on it?', select('stakes', s.stakes, [
          { v: 'low', l: 'Low — curiosity, nothing rests on it' },
          { v: 'medium', l: 'Medium — it would shape a decision' },
          { v: 'high', l: 'High — money, health, legal, safety, or reputation' }
        ]))}`)}
      ${panel('The checks', CHECKS.map(c => `
        <div class="rowitem" style="margin-top:var(--s-2)">
          <div class="field">
            <label>${esc(c.q)}</label>
            ${select(`checks.${c.k}`, s.checks[c.k], [
              { v: 'yes', l: 'Yes — I have done this' },
              { v: 'no', l: 'No' },
              { v: 'na', l: 'Not applicable' },
              { v: 'unknown', l: 'Not checked yet' }
            ])}
            <span class="hint">${esc(c.hint)}</span>
          </div>
        </div>`).join(''))}
      ${panel('Notes', field('What did you find?', area('notes', s.notes, 'Where the original led, what the numbers actually said, who funded it.', 3)))}`
  },

  output (s) {
    if (!s.claim.trim()) return outPanel('Verdict', emptyOut('Write the claim', 'Score and verdict appear as you work through the checks.'))

    const applicable = CHECKS.filter(c => s.checks[c.k] !== 'na')
    const maxW = applicable.reduce((a, c) => a + c.w, 0) || 1
    const gotW = applicable.filter(c => s.checks[c.k] === 'yes').reduce((a, c) => a + c.w, 0)
    const score = Math.round((gotW / maxW) * 100)

    const failed = applicable.filter(c => s.checks[c.k] === 'no')
    const unchecked = applicable.filter(c => s.checks[c.k] === 'unknown')
    const primaryMissing = s.checks.primary === 'no' || s.checks.primary === 'unknown'
    const appliesMissing = s.checks.applies === 'no'

    let band, kind, verdict
    if (appliesMissing) {
      band = 'Does not apply to you'
      kind = 'danger'
      verdict = 'You have said it does not apply to your situation. That settles it regardless of how well-sourced it is. Correct elsewhere is not correct here — this is the single most common way accurate information causes bad decisions.'
    } else if (score >= 80) {
      band = 'Well checked'
      kind = 'success'
      verdict = 'This has survived real scrutiny. You can act on it and say why. Keep the note about what would overturn it — a conclusion you cannot imagine being wrong has stopped being a conclusion.'
    } else if (score >= 55) {
      band = 'Partly checked'
      kind = 'info'
      verdict = 'Reasonable for a low-stakes decision. Before anything expensive or hard to reverse, close the remaining gaps below.'
    } else if (score >= 30) {
      band = 'Thin'
      kind = 'warning'
      verdict = 'This is not yet knowledge — it is a plausible claim. Do not repeat it as fact, and do not let it drive a decision you cannot undo.'
    } else {
      band = 'Unverified'
      kind = 'danger'
      verdict = 'You have effectively not checked this. Treat it as a rumour: it may well be true, but nothing should rest on it and you should not pass it on without saying you have not checked.'
    }

    const stakesWarning = s.stakes === 'high' && score < 80

    return outPanel('Verdict', `
      <div class="row" style="gap:var(--s-5);align-items:center;margin-bottom:var(--s-4)">
        ${dial(score, score + '%')}
        <div>
          <p class="eyebrow">${esc(band)}</p>
          <p class="t-small muted">${gotW} of ${maxW} weighted checks passed${applicable.length < CHECKS.length ? ` (${CHECKS.length - applicable.length} not applicable)` : ''}.</p>
        </div>
      </div>

      ${callout(band, esc(verdict), kind)}

      ${stakesWarning ? `<div style="margin-top:var(--s-3)">${callout('High stakes, low verification', 'You marked this as affecting money, health, legal standing or safety — and it is not well checked. This is exactly the combination that causes expensive mistakes. Either verify properly or choose the option that survives the claim being false.', 'danger')}</div>` : ''}

      ${primaryMissing && !appliesMissing ? `<div style="margin-top:var(--s-3)">${callout('You have not seen the original', 'Everything else is secondary to this. Find the actual source and read the sentence in context — a startling number of confident claims dissolve at this step, and AI-generated citations frequently do not exist at all.', 'warning')}</div>` : ''}

      ${failed.length ? `<div style="margin-top:var(--s-4)"><p class="eyebrow">Failed checks</p>
        <ul class="badlist">${failed.map(c => `<li>${esc(c.fail)}</li>`).join('')}</ul></div>` : ''}

      ${unchecked.length ? `<div style="margin-top:var(--s-4)"><p class="eyebrow">Still to do — in this order</p>
        <ul class="marklist">${unchecked.sort((a, b) => b.w - a.w).map(c => `<li>${esc(c.q)}</li>`).join('')}</ul></div>` : ''}

      ${s.notes.trim() ? `<div style="margin-top:var(--s-3)">${callout('Your findings', esc(s.notes), 'info')}</div>` : ''}

      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  summary (s) {
    const applicable = CHECKS.filter(c => s.checks[c.k] !== 'na')
    const maxW = applicable.reduce((a, c) => a + c.w, 0) || 1
    const gotW = applicable.filter(c => s.checks[c.k] === 'yes').reduce((a, c) => a + c.w, 0)
    const mark = { yes: 'PASS', no: 'FAIL', na: 'n/a ', unknown: '????' }
    return [
      stamp('Information Credibility Checker'),
      `Claim: ${s.claim || '(not stated)'}`,
      `Source: ${s.source || '(not stated)'}`,
      `Stakes: ${s.stakes}`,
      head('Checks'),
      ...CHECKS.map(c => `  [${mark[s.checks[c.k]]}] ${c.q}`),
      '',
      `Score: ${Math.round((gotW / maxW) * 100)}% of weighted checks`,
      head('Notes'),
      `  ${s.notes || '(none)'}`,
      '',
      READS
    ].join('\n')
  }
}
