/**
 * patch-situations.mjs — one-off content repair.
 *
 * 1. Adds the hard-limit / escalation paragraph to the 22 situations where the
 *    HTML extractor found none. Every situation must state the point at which
 *    self-help stops and a professional, an authority, or an emergency service
 *    takes over (§12 EDGE CASE / RECOVERY, §46 realistic edge cases).
 * 2. Maps the situations.json "health" category from the invalid accent "ai"
 *    onto a real accent channel.
 *
 * Idempotent: re-running changes nothing.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const content = resolve(dirname(fileURLToPath(import.meta.url)), '../public/content')

const LIMITS = {
  'conflict-family-money':
    'If the money involved a signed agreement, a shared mortgage, an inheritance, or a power of attorney, this stopped being a family conversation and became a legal one. Get independent advice before you sign, forgive, or transfer anything — and never sign a document at the table under emotional pressure.',
  'conflict-friend-betrayal':
    'If the betrayal involved your money, your login credentials, your professional reputation, or intimate images, treat it as a security and legal matter alongside a personal one. Change credentials, preserve the evidence with dates, and get advice before you confront them — confrontation destroys evidence.',
  'crisis-car-crash':
    'Call emergency services for any injury, any suspected head or neck injury, any unconscious person, any fuel leak or smoke, or any dispute about what happened. Do not move an injured person unless there is fire or oncoming traffic. Never admit liability at the scene; that is for insurers and, if needed, courts to determine.',
  'crisis-fire-building':
    'There is no version of this where you go back in, fight a spreading fire yourself, or wait to collect belongings. Get out, stay out, call the fire service. If your exit is blocked, close the door between you and the fire, seal the gap, go to a window, make yourself visible and call to say exactly which room you are in.',
  'crisis-lost-child':
    'Alert staff and call the police immediately — do not wait a polite interval, and do not search alone first. In a public building, ask for a lockdown of exits. Near open water, a road, a car park, or a rail line, treat it as an emergency from the first second. Reporting early and being wrong costs nothing.',
  'crisis-someone-collapses':
    'Call emergency services first, before anything else. If they are not breathing normally, start chest compressions and ask someone to find a defibrillator. Do not give food, drink, or medication to someone who is drowsy or confused. If you are untrained, the dispatcher will talk you through it — stay on the line.',
  'digital-account-hacked':
    'If the account controls money, medical records, or your identity documents, contact the provider on a number you look up independently and tell your bank the same day. Report it formally so you have a reference number. Never use a phone number, link, or "support agent" that arrived in the message telling you that you were hacked.',
  'digital-bank-fraud':
    'Call your bank on the number printed on your card, not any number you were given, and do it immediately — most protections depend on how fast you report. Freeze the card, request a fraud marker, and get a written reference. If you were persuaded to move the money yourself, say so plainly; that is a recognised category of fraud with its own protections.',
  'digital-deepfake-voice':
    'Any urgent request for money, credentials, or codes that arrives by voice or video must be verified on a channel you initiate, to a number you already had. Hang up and call back. If it involved intimate imagery of you or a child, that is a criminal matter — report it, preserve the evidence, and do not negotiate with whoever sent it.',
  'digital-ransomware-work':
    'Disconnect the machine from the network and report it to IT and to your manager within minutes — not after you have tried to fix it. Do not pay, do not delete anything, do not power-cycle repeatedly. If personal data of other people is involved, there are legal notification deadlines and that decision is not yours to make alone.',
  'health-bad-diagnosis':
    'If you are told something serious, ask for it in writing and ask for the name of the condition, the stage, and the next decision point. Get a second opinion for anything irreversible, and take someone with you to the next appointment. If you have thoughts of ending your life, contact a crisis line or emergency services now — that is the line where this stops being something to manage alone.',
  'life-funeral-and-grief':
    'If grief has stopped you eating, sleeping, or working for weeks, or you are having thoughts of self-harm, that is a medical matter and needs a doctor, not endurance. Also refuse to make large financial or legal decisions in the first weeks — sell nothing, sign nothing, lend nothing until the fog clears.',
  'life-social-humiliation':
    'If it has moved to sustained targeting, threats, or distribution of images of you, it is harassment and not a social problem. Screenshot with dates, report to the platform and to the police, and tell one person offline. If a child is the target, involve the school in writing the same week.',
  'money-contract-pressure':
    'Never sign under time pressure. If you are told the offer expires today, that is information about the offer, not about you. For anything involving your home, your pension, a guarantee, or a debt secured on property, get independent legal or regulated financial advice first — and check the firm on the official register yourself.',
  'money-sudden-income-loss':
    'Contact creditors before you miss a payment, not after — you have far more options while you are still current. Do not take a high-cost short-term loan to cover a shortfall, and do not touch a pension early without regulated advice. Free debt advice charities exist in most countries; use one before any commercial "debt solution" company.',
  'people-authority-impersonation':
    'No genuine police officer, tax authority, bank, or utility will demand payment in gift cards, cryptocurrency, or a same-day transfer, and none will tell you to keep it secret. End the call, look up the organisation independently, and call back. If you are threatened with immediate arrest or deportation unless you pay, that is the tell — it is a scam.',
  'people-guilt-tripped':
    'If the pressure includes controlling your money, your movements, your phone, or your contact with other people, that is coercive control rather than a difficult relationship, and it is a criminal offence in many jurisdictions. Talk to a domestic abuse line — they advise on situations that have not turned physical too.',
  'people-pressure-sale':
    'Nothing legitimate needs your decision inside the same conversation. If they will not leave, will not put it in writing, or will not accept "not today", end it and close the door. In most countries a contract signed at your home carries a statutory cooling-off period — find out yours and use it in writing.',
  'work-blamed-publicly':
    'If the blame becomes part of a formal process, a warning, or a dismissal, stop handling it conversationally. Ask for the allegation in writing, ask for the right to be accompanied, and get union or legal advice before the meeting. If it followed a complaint you raised, say that in writing — it changes the legal character of what is happening.',
  'work-credit-stolen':
    'If the appropriation involved your intellectual property, a published paper, or a patentable idea, that is a legal question and needs advice before your next conversation about it. If raising it triggered retaliation, document the sequence with dates and keep the record somewhere your employer does not control.',
  'work-impossible-deadline':
    'If the only way to meet the date involves falsifying data, skipping a safety or compliance step, or signing something you know to be untrue, that is where you stop, in writing, regardless of the consequence to the deadline. Name the specific rule. If pressure continues, escalate to the named compliance or safety channel and keep a copy off the company system.',
  'work-interview-blank':
    'This is a bad twenty minutes, not an emergency — the only real risk is what you do afterwards. Do not invent experience you do not have to recover the moment; a fabricated answer that gets you hired becomes a dismissal risk later. If panic attacks are happening repeatedly in high-stakes moments, that is worth a conversation with a doctor.'
}

let patched = 0
for (const [id, limit] of Object.entries(LIMITS)) {
  const f = resolve(content, `situation/${id}.json`)
  if (!existsSync(f)) { console.error(`  skip (missing): ${id}`); continue }
  const d = JSON.parse(readFileSync(f, 'utf8'))
  if (d.limit) continue
  d.limit = limit
  writeFileSync(f, JSON.stringify(d, null, 2) + '\n')
  patched++
}
console.log(`  limits added: ${patched}`)

/* health category accent: "ai" is not a real channel */
const sf = resolve(content, 'situations.json')
const s = JSON.parse(readFileSync(sf, 'utf8'))
let touched = false
const REMAP = { ai: 'amber' }
for (const c of s.categories) {
  if (REMAP[c.accent]) { c.accent = REMAP[c.accent]; touched = true }
}
if (touched) {
  writeFileSync(sf, JSON.stringify(s, null, 2) + '\n')
  console.log('  situations.json accents remapped')
} else {
  console.log('  situations.json accents already valid')
}
