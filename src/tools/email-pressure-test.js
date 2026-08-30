import {
  field, text, area, select, panel, outPanel, callout, emptyOut,
  meter, n, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'

const READS = 'This checks the shape of a message, not its content — it cannot know whether you are right. What it can do is show you the things a hostile reader will notice: temperature, hedging, a buried ask, and a wall of text nobody will finish.'

/* Each test is a function of the draft text. Every one of them exists
   because it is a mistake people reliably make when writing while
   annoyed, and each returns a fixable instruction rather than a score. */
const HEAT = ['unacceptable', 'ridiculous', 'obviously', 'clearly', 'as i already', 'as i have already',
  'again', 'frankly', 'to be honest', 'i am shocked', 'disappointed', 'failed to', 'you never',
  'you always', 'refuse to', 'incompetent', 'absurd', 'insulting', 'per my last', 'as previously stated']
const HEDGE = ['just', 'sorry to', 'i think maybe', 'a bit', 'slightly', 'kind of', 'sort of',
  'if that is ok', 'if that\'s ok', 'no worries if not', 'whenever you get a chance', 'i hope',
  'i was wondering if', 'perhaps', 'possibly', 'i might be wrong but']
const FILLER = ['i hope this finds you well', 'i hope you are well', 'just circling back',
  'touching base', 'reaching out', 'as per', 'going forward', 'at your earliest convenience',
  'please be advised', 'i wanted to reach out']

const found = (t, list) => list.filter(w => t.includes(w))

export default {
  id: 'email-pressure-test',
  name: 'Message Pressure Test',
  blurb: 'Check a difficult email before you send it, against the things a hostile reader notices.',
  icon: 'shield',
  accent: 'clay',
  group: 'Communicating',
  purpose: 'Finds the temperature, the hedging and the buried ask in a message you are about to send while annoyed.',
  when: [
    'You have written something and you are not sure you should send it',
    'The message matters and the relationship matters',
    'You wrote it inside an hour of being upset'
  ],
  reads: READS,

  initial: () => ({
    outcome: '',
    reader: 'peer',
    stakes: 'medium',
    draft: ''
  }),

  form (s) {
    return `
      ${panel('Before the words', `
        ${field('What do you need the reader to DO?', text('outcome', s.outcome, 'One action. "Approve the extension to the 14th." Not "understand my position".'))}
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:160px"><label>Who is reading it</label>
            ${select('reader', s.reader, [
              { v: 'boss', l: 'Someone with power over me' },
              { v: 'peer', l: 'A peer or colleague' },
              { v: 'report', l: 'Someone I manage' },
              { v: 'client', l: 'A client or customer' },
              { v: 'org', l: 'An organisation / company' },
              { v: 'personal', l: 'Someone in my personal life' }
            ])}</div>
          <div class="field grow" style="min-width:160px"><label>If this goes wrong</label>
            ${select('stakes', s.stakes, [
              { v: 'low', l: 'Mildly awkward' },
              { v: 'medium', l: 'Damages a working relationship' },
              { v: 'high', l: 'Money, job or legal consequences' }
            ])}</div>
        </div>`)}
      ${panel('The draft', `
        ${field('Paste exactly what you were about to send', area('draft', s.draft, 'Paste the real thing, including the bits you know are too sharp. Nothing here leaves your browser.', 12))}`)}`
  },

  output (s) {
    const raw = String(s.draft || '')
    if (raw.trim().length < 20) {
      return outPanel('The read-out', emptyOut('Paste your draft', 'The tests run as you type. Nothing is sent anywhere.'))
    }

    const t = raw.toLowerCase()
    const words = raw.trim().split(/\s+/).filter(Boolean)
    const sentences = raw.split(/[.!?]+(?:\s|$)/).map(x => x.trim()).filter(x => x.length > 1)
    const paras = raw.split(/\n\s*\n/).map(x => x.trim()).filter(Boolean)

    const heat = found(t, HEAT)
    const hedge = found(t, HEDGE)
    const filler = found(t, FILLER)
    const exclam = (raw.match(/!/g) || []).length
    const shouty = (raw.match(/\b[A-Z]{4,}\b/g) || []).filter(w => !/^(FYI|ASAP|EOD|NDA|VAT|HR|CEO|CTO|COO|URL|PDF)$/.test(w))
    const questions = (raw.match(/\?/g) || []).length
    const longest = sentences.reduce((m, x) => Math.max(m, x.split(/\s+/).length), 0)

    /* Where is the ask? A request buried below the halfway mark is the
       single most common reason a clear message gets no action. */
    const askIdx = sentences.findIndex(x =>
      /\b(can you|could you|please|i need|i am asking|would you|by (monday|tuesday|wednesday|thursday|friday|the \d)|approve|confirm|decide|let me know)\b/i.test(x))
    const askPos = askIdx < 0 ? -1 : Math.round((askIdx / Math.max(1, sentences.length)) * 100)

    const iCount = (t.match(/\b(i|my|me)\b/g) || []).length
    const youCount = (t.match(/\byou(r|rs)?\b/g) || []).length

    /* Score is deliberately blunt: it is a prompt to look, not a grade. */
    let risk = 0
    risk += heat.length * 12
    risk += shouty.length * 10
    risk += Math.max(0, exclam - 1) * 8
    risk += hedge.length * 4
    risk += filler.length * 3
    if (askPos < 0) risk += 25
    else if (askPos > 55) risk += 14
    if (longest > 40) risk += 8
    if (words.length > 250) risk += 10
    if (!s.outcome.trim()) risk += 10
    if (s.stakes === 'high') risk = Math.round(risk * 1.25)
    if (s.reader === 'boss' || s.reader === 'client') risk = Math.round(risk * 1.15)
    risk = Math.min(100, risk)

    const band = risk >= 55 ? 'danger' : risk >= 25 ? 'warning' : 'success'
    const verdict = risk >= 55
      ? 'Do not send this yet'
      : risk >= 25
        ? 'Send it, but fix these first'
        : 'This reads as controlled'

    const issue = (label, body, kind) => `<div style="margin-top:var(--s-3)">${callout(label, body, kind)}</div>`
    const issues = []

    if (heat.length) {
      issues.push(issue('Temperature is visible',
        `You have used: <strong>${heat.map(esc).join(', ')}</strong>. Each of these tells the reader how you feel rather than what you need, and each gives them something to be defensive about instead of something to action. Cut them and the facts get stronger, not weaker.`, 'danger'))
    }
    if (shouty.length) {
      issues.push(issue('Capitals are doing the arguing',
        `${shouty.slice(0, 5).map(esc).join(', ')}. Capitalisation reads as raised voice, and it is the detail people quote back later when they forward the thread.`, 'danger'))
    }
    if (exclam > 1) {
      issues.push(issue(`${exclam} exclamation marks`,
        'In a difficult message these read as either shouting or nervous brightness, and both undercut you. One is a maximum; zero is usually better.', 'warning'))
    }
    if (askPos < 0) {
      issues.push(issue('There is no ask',
        'No sentence in this draft asks for a specific action or decision. A reader who agrees with every word still will not know what to do. Add one sentence that names the action and the date.', 'danger'))
    } else if (askPos > 55) {
      issues.push(issue(`Your ask is ${askPos}% of the way down`,
        `It is in: “${esc(sentences[askIdx].slice(0, 120))}${sentences[askIdx].length > 120 ? '…' : ''}”. Busy readers act on the first three lines and skim the rest. Move it to the top and let the explanation follow.`, 'warning'))
    }
    if (hedge.length > 2) {
      issues.push(issue('Hedging is diluting the request',
        `${hedge.map(esc).join(', ')}. Softeners make a reasonable request sound optional, which is how it gets deferred rather than refused. Being direct is not being rude.`, 'warning'))
    }
    if (filler.length) {
      issues.push(issue('Throat-clearing at the top',
        `${filler.map(esc).join(', ')}. These phrases cost you the first line, which is the only one you can rely on being read.`, 'info'))
    }
    if (longest > 40) {
      issues.push(issue(`Longest sentence is ${longest} words`,
        'Long sentences in a tense message read as either evasive or lecturing. Split it at the first “and” or “but”.', 'warning'))
    }
    if (words.length > 250) {
      issues.push(issue(`${words.length} words`,
        'Above roughly 200 words a difficult message stops being read and starts being skimmed for the part that affects them. Cut everything that is context you needed to write rather than context they need to read.', 'warning'))
    }
    if (iCount > youCount * 2.5 && iCount > 6) {
      issues.push(issue('It is mostly about you',
        `${iCount} references to yourself against ${youCount} to them. That is the shape of a message written to relieve a feeling. Rewrite one paragraph in terms of what they get or what they need to decide.`, 'info'))
    }
    if (questions === 0 && (s.reader === 'boss' || s.reader === 'client')) {
      issues.push(issue('No question anywhere',
        'A message upward with no question invites no reply. One direct question makes a response nearly obligatory.', 'info'))
    }

    return outPanel('The read-out', `
      <p class="eyebrow">Risk of this landing badly</p>
      ${meter(risk, true)}
      <div style="margin-top:var(--s-3)">${callout(verdict, risk >= 55
        ? 'Save it as a draft and come back in an hour. Almost nothing in a difficult exchange gets worse from a delay, and this draft will get better.'
        : risk >= 25
          ? 'The structure is workable. Fix the items below and it will read as measured rather than reactive.'
          : 'The temperature is low and the ask is findable. Read it aloud once before sending — anything you would not say out loud, change.', band)}</div>

      <div class="stats" style="margin-top:var(--s-4)">
        <div class="stat"><b>${words.length}</b><span>words</span></div>
        <div class="stat"><b>${paras.length}</b><span>paragraphs</span></div>
        <div class="stat"><b>${askPos < 0 ? '—' : askPos + '%'}</b><span>where the ask sits</span></div>
      </div>

      ${s.outcome.trim()
        ? `<div style="margin-top:var(--s-4)">${callout('The test that matters', `You want them to: <strong>${esc(s.outcome)}</strong><br><br>Read your first two sentences only. If someone who read nothing else would do that thing, the message works. If not, the problem is structure, not wording.`, 'info')}</div>`
        : `<div style="margin-top:var(--s-4)">${callout('You have not named the outcome', 'Fill in what you need them to do. Without it there is no standard to judge the draft against, and you will end up editing for tone forever.', 'warning')}</div>`}

      ${issues.length ? `<div style="margin-top:var(--s-4)"><p class="eyebrow">${issues.length} thing${issues.length > 1 ? 's' : ''} to fix</p>${issues.join('')}</div>`
        : `<div style="margin-top:var(--s-4)">${callout('Nothing flagged', 'No heat, no buried ask, no wall of text. The remaining question is whether the content is right, and no tool can answer that — read it aloud once.', 'success')}</div>`}

      ${s.stakes === 'high' ? `<div style="margin-top:var(--s-4)">${callout('High stakes',
        'You marked the consequences as money, job or legal. Two extra rules apply: have one person you trust read it before it goes, and never send it as the last thing you do before closing the laptop.', 'warning')}</div>` : ''}

      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  summary (s) {
    const raw = String(s.draft || '')
    const t = raw.toLowerCase()
    const words = raw.trim().split(/\s+/).filter(Boolean)
    return [
      stamp('Message Pressure Test'),
      `Outcome wanted: ${s.outcome || '(not stated — do this first)'}`,
      `Reader: ${s.reader} · Stakes: ${s.stakes}`,
      `Length: ${words.length} words`,
      head('Flags'),
      `  Heat words: ${found(t, HEAT).join(', ') || 'none'}`,
      `  Hedges: ${found(t, HEDGE).join(', ') || 'none'}`,
      `  Filler: ${found(t, FILLER).join(', ') || 'none'}`,
      `  Exclamation marks: ${(raw.match(/!/g) || []).length}`,
      head('The test'),
      '  Read the first two sentences only. Would they do the thing?',
      '  Read it aloud. Anything you would not say out loud, change.',
      '',
      READS
    ].join('\n')
  }
}
