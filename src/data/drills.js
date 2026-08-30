/* =============================================================
   SITUATION DRILLS — practice before reading (§13, §19).

   Every situation opens with a multiple-choice drill. You commit to
   an answer before the playbook unlocks, because recognising the
   right move under pressure is a different skill from agreeing with
   it while reading calmly.

   The options are not invented. They are derived from the corpus the
   playbook itself is built from:

     - the STRONGEST option is the situation's own first ordered move,
       which is the thing the playbook actually tells you to do first;
     - the WEAK options are the situation's own documented traps,
       each of which already carries its consequence in the corpus
       ("Matching volume. You will be the one written up.");
     - the consequence text shown after you commit is that same
       corpus sentence, so the drill can never contradict the
       playbook underneath it.

   That derivation matters for §13's requirement that answers not be
   artificially obvious. Real traps are attractive — they are what
   people actually do — so a drill built from them is genuinely hard,
   and it is hard for the right reason rather than through trickery.

   A DRILL_OVERRIDES entry can replace the generated question for a
   situation that deserves a bespoke one.
   ============================================================= */

/* Situations where the generic stem is too blunt to be useful. The
   wording is tuned to what the moment actually demands: in a medical
   or fire emergency the question is what you do in the first seconds,
   not what your "first move" is in the abstract. */
const STEMS = [
  [/^crisis-|collapse|fire|crash|lost-child/, 'The first seconds matter most. What do you do first?'],
  [/^danger-|intrusion|followed|cornered|aggressive/, 'You have very little time and no good options. What is your first move?'],
  [/^digital-|hacked|fraud|ransomware|deepfake|sextortion/, 'You have just realised what is happening. What do you do first?'],
  [/^money-|debt|evict|rent|income/, 'Before you reply to anyone, what is the first move?'],
  [/^health-/, 'What matters most in the first few minutes?'],
  [/^work-|deadline|blamed|credit|fired|interview/, 'It is happening now. What is your first move?'],
  [/^people-|gaslit|guilt|love-bombing|mob|pressure-sale/, 'You can feel the pressure working. What do you do?'],
  [/^conflict-/, 'What is the first move that does not make it worse?'],
  [/^life-/, 'What does the moment actually call for?']
]

function stemFor (id) {
  for (const [re, q] of STEMS) if (re.test(id)) return q
  return 'What is your first move?'
}

/* Split a corpus trap ("Matching volume. You will be the one written
   up, whatever the provocation.") into the action you might take and
   the consequence of taking it. The corpus writes these as one or two
   leading sentences of action followed by the cost, so the first
   sentence boundary is the split point. Anything unsplittable is used
   whole as the option text, with no invented consequence. */
function splitTrap (s) {
  const t = String(s || '').trim()
  const m = t.match(/^(.{6,110}?[.!?])\s+(.+)$/s)
  if (!m) return { action: t, cost: '' }
  return { action: m[1].trim(), cost: m[2].trim() }
}

/* Turn a trap's action clause into something a person would choose.
   Corpus traps are written as gerunds ("Matching volume", "Apologising
   for things you did not do") because they are listed as behaviours.
   As an answer option they read better as an instruction. */
function asOption (action) {
  let a = String(action).trim().replace(/\.$/, '')
  a = a.replace(/^([A-Z])/, c => c.toLowerCase())
  const g = a.match(/^([a-z]+)ing\b(.*)$/is)
  if (g) {
    const base = deGerund(g[1])
    // null means "not confident" — keep the corpus's own gerund.
    if (base) a = base + g[2]
  }
  return a.charAt(0).toUpperCase() + a.slice(1)
}

/**
 * Recover the base verb from the stem of an -ing form.
 *
 * Reversing English -ing spelling is genuinely ambiguous. "ask" and
 * "brak" are the same shape, yet one is already a verb and the other
 * needs its silent e back ("brake"). Earlier revisions of this file
 * tried to tell them apart with ordered heuristics and shipped
 * "Brak hard to teach them a lesson", "Engag with whoever posted it"
 * and "Minimis the size of it".
 *
 * So the direction is inverted. Instead of stripping letters off a
 * stem and hoping the result is a word, every verb we are willing to
 * convert is listed below, the -ing form is generated FORWARD from it
 * by the ordinary spelling rules, and the gerund we were handed is
 * looked up in the result. A match is therefore provably correct, and
 * an unlisted verb returns null so the corpus's own gerund survives
 * untouched. A slightly stiff "Retaliating with something of theirs"
 * is perfectly readable; "Retaliat" is not.
 *
 * To support a new trap phrasing, add the plain infinitive to VERBS.
 */

/* Every verb the corpus opens a trap with, as a plain infinitive.
   Order is irrelevant; duplicates are harmless. */
const VERBS = `accept add admit agree announce apologise argue arm arrive ask
assume avoid back believe blame block brake bring broadcast build buy calculate
call campaign cancel capture cash change check choose clean click complain
confirm confiscate confront contact continue control correct cry cut deal
decide declare decline delete demand deny describe diagnose disconnect double
downplay doxx drink drive drop email end engage escalate establish explain fight
fill film find fix follow forward gather get give go guess handle hang hide hint
hope ignore initial insist install interpret invent invite involve keep kill
lead lend let lie litigate lock lose lower make match minimise miss move name
negotiate offer open pay point post present preserve pretend promise prove push
put quit quote race raise rally reach read record recover refresh refuse
register rely remove renegotiate replay reply report request rescue resign
restore restructure retaliate return reuse ring save say screenshot search send
separate settle share shelter shout sign skip slap sleep slow smirk soften
speak spend split spread stand start stay stop sulk take talk tell test
threaten throw touch transfer try turn use verify volunteer wait walk win
withhold work write`.trim().split(/\s+/)

/* Consonants that double before -ing after a single stressed short
   vowel. "qu" counts as one consonant for this purpose, which is why
   "quit" doubles to "quitting" rather than "quiting". */
const DOUBLES = 'bdglmnprt'

/* Verbs whose -ing form doubles the final letter even though the plain
   rules below would not predict it, plus the ones where the rules
   would wrongly double. Listing them is shorter and far safer than
   modelling English stress, which is what decides the real cases
   (`visit` → visiting, but `omit` → omitting, on stress alone). */
const GERUND_EXCEPTIONS = {
  cancel: 'cancelling', initial: 'initialling', travel: 'travelling',
  model: 'modelling', control: 'controlling', patrol: 'patrolling',
  screenshot: 'screenshotting', doxx: 'doxxing',
  // rule-would-double, but must not
  visit: 'visiting', limit: 'limiting', edit: 'editing', exit: 'exiting',
  profit: 'profiting', target: 'targeting', interpret: 'interpreting',
  offer: 'offering', gather: 'gathering', suffer: 'suffering',
  open: 'opening', listen: 'listening', happen: 'happening'
}

/** Generate the -ing form of a plain infinitive, forward. */
function toGerund (v) {
  if (GERUND_EXCEPTIONS[v]) return GERUND_EXCEPTIONS[v]
  if (v.endsWith('ie')) return v.slice(0, -2) + 'ying'      // lie → lying
  if (v.endsWith('ee')) return v + 'ing'                    // agree → agreeing
  if (v.endsWith('e')) return v.slice(0, -1) + 'ing'        // make → making

  /* One short vowel before the final consonant, with nothing but
     consonants ahead of it — a single stressed syllable: cut →
     cutting, drop → dropping, quit → quitting. "qu" is stripped first
     because the u is part of the consonant, not the vowel. */
  const core = v.replace(/^qu/, 'q')
  if (/^[^aeiou]*[aeiou][^aeiou]$/.test(core) && DOUBLES.includes(v.slice(-1))) {
    return v + v.slice(-1) + 'ing'
  }
  return v + 'ing'
}

/* gerund → infinitive, built once at module load. Irregular spellings
   are already handled inside toGerund via GERUND_EXCEPTIONS, so this
   is a straight inversion of the generated forms. */
const FROM_GERUND = new Map(VERBS.map(v => [toGerund(v), v]))

/* Words that merely LOOK like gerunds: "During an incident" is a
   preposition, not something a person can choose to do, and an earlier
   revision rendered it "Dure an incident". Nothing here is converted. */
const NOT_VERBS = new Set([
  'during', 'nothing', 'something', 'anything', 'everything',
  'morning', 'evening', 'warning', 'meaning', 'being', 'feeling',
  'willing', 'ceiling', 'sibling', 'wedding', 'building', 'sharing'
])

function deGerund (stem) {
  const gerund = String(stem).toLowerCase() + 'ing'
  if (NOT_VERBS.has(gerund)) return null
  return FROM_GERUND.get(gerund) || null
}

/**
 * Build the drill for one situation document.
 *
 * @param {object} doc  a corpus situation (sections → blocks)
 * @returns {object|null} `{ question, options[], takeaway }` or null
 *          when the situation lacks the material to make a fair drill.
 */
export function drillFor (doc) {
  if (!doc || !doc.id) return null
  if (DRILL_OVERRIDES[doc.id]) return DRILL_OVERRIDES[doc.id]

  const byType = {}
  for (const s of (doc.sections || [])) {
    for (const b of (s.blocks || [])) (byType[b.type] ||= []).push(b)
  }
  const steps = (byType.steps || [])[0]
  const traps = (byType.bad || [])[0]
  if (!steps || !Array.isArray(steps.items) || !steps.items.length) return null
  if (!traps || !Array.isArray(traps.items) || traps.items.length < 2) return null

  const first = steps.items[0]
  const second = steps.items[1]

  const best = {
    key: 'A',
    text: asOption(first.move),
    grade: 'best',
    consequence: first.detail || 'This is the move the playbook opens with.',
    why: 'This is the first ordered move in the playbook below — not because it feels satisfying, but because everything else you might want to do works better after it and worse before it.'
  }

  /* A second, defensible-but-premature option. Doing step two before
     step one is the most common competent-person mistake, and it is
     far more tempting than any trap. */
  const early = second ? {
    key: 'B',
    text: asOption(second.move),
    grade: 'ok',
    consequence: second.detail || '',
    why: 'Not wrong — this is genuinely part of the playbook. It is simply out of order, and doing it first usually costs you the thing that step one protects.'
  } : null

  const wrong = traps.items.slice(0, early ? 2 : 3).map((t, i) => {
    const { action, cost } = splitTrap(t)
    return {
      key: String.fromCharCode(66 + (early ? 1 : 0) + i),
      text: asOption(action),
      grade: i === 0 ? 'poor' : 'risky',
      consequence: cost || 'The playbook lists this under what makes it worse.',
      why: 'This appears in "what makes it worse" below. It is listed there because it is what people reliably do — it feels like taking control, and it moves the situation against you.'
    }
  })

  const options = shuffleStable([best, ...(early ? [early] : []), ...wrong], doc.id)
  // Re-letter after shuffling so the keys read A, B, C, D top to bottom.
  options.forEach((o, i) => { o.key = String.fromCharCode(65 + i) })

  return {
    question: stemFor(doc.id),
    options,
    generated: true
  }
}

/* Deterministic shuffle: the same situation always presents its
   options in the same order, so the correct answer does not move
   between visits (which would make the drill feel arbitrary), but the
   strongest option is not always first (which would make it obvious). */
function shuffleStable (arr, seed) {
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619) }
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 15), 2246822507)
    const j = Math.abs(h) % (i + 1)
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/* -------------------------------------------------------------
   Bespoke drills. Used where the generated question would be
   misleading — chiefly the physical emergencies, where the real
   first move is not the one that feels active.
   ------------------------------------------------------------- */
export const DRILL_OVERRIDES = {
  'crisis-someone-collapses': {
    question: 'Someone drops to the floor in front of you and is not responding. What do you do first?',
    options: [
      {
        key: 'A',
        text: 'Start chest compressions straight away',
        grade: 'risky',
        consequence: 'You may be doing compressions on someone whose heart is beating, and nobody has called for an ambulance yet. Minutes are being spent without help on the way.',
        why: 'Compressions matter enormously — but only after you have checked for a response and breathing, and after help is coming. Acting before checking is the classic panic error.'
      },
      {
        key: 'B',
        text: 'Check for a response and normal breathing, then send someone to call emergency services',
        grade: 'best',
        consequence: 'You establish in about ten seconds whether this is a cardiac arrest, and help is on its way while you act. Everything you do next is now the right thing rather than a guess.',
        why: 'Check, then call, then compress. The order exists because the wrong intervention costs more than the seconds it takes to check, and because an ambulance dispatched at second twenty rather than second ninety changes the outcome.'
      },
      {
        key: 'C',
        text: 'Give them water and help them sit up',
        grade: 'poor',
        consequence: 'Anything by mouth to a person who is not fully conscious risks choking, and moving them can worsen an injury you have not identified.',
        why: 'Never give food or drink to someone who is not fully alert. This is one of the few genuinely dangerous instincts in first aid.'
      },
      {
        key: 'D',
        text: 'Film or photograph the scene so medics have context',
        grade: 'poor',
        consequence: 'Seconds that decide survival are spent on your phone doing something no clinician asked for.',
        why: 'The information paramedics need is what you tell them, not footage. This option exists because it is what bystanders actually do.'
      }
    ]
  },

  'crisis-fire-building': {
    question: 'You smell smoke and the alarm is sounding. What do you do first?',
    options: [
      {
        key: 'A',
        text: 'Get out, staying low, and close doors behind you',
        grade: 'best',
        consequence: 'You leave through breathable air and every closed door behind you buys the building minutes against the spread.',
        why: 'Out, low, doors closed. Smoke, not flame, is what kills people in buildings, and it collects at head height first.'
      },
      {
        key: 'B',
        text: 'Go back for your laptop, documents and passport',
        grade: 'poor',
        consequence: 'Re-entry is how people die in fires. Conditions change in seconds, and the route you came through may already be gone.',
        why: 'Nothing in the building is worth the trip. This option is here because the impulse is close to universal.'
      },
      {
        key: 'C',
        text: 'Find the source and try to put it out',
        grade: 'risky',
        consequence: 'If it is bigger than a bin, you have put yourself between a growing fire and your exit.',
        why: 'Fighting a fire is defensible only when it is tiny, you have the right extinguisher, and your escape route is behind you. Those conditions are rarer than people assume.'
      },
      {
        key: 'D',
        text: 'Use the lift, since the stairs will be crowded',
        grade: 'poor',
        consequence: 'Lifts fail, vent smoke, and can open onto the fire floor. You could be delivered directly into it.',
        why: 'Never a lift in a fire. The crowding on the stairs is the lesser problem by an enormous margin.'
      }
    ]
  },

  'danger-followed-street': {
    question: 'You are increasingly sure the person behind you is following you. What do you do?',
    options: [
      {
        key: 'A',
        text: 'Keep walking normally so you do not provoke them',
        grade: 'risky',
        consequence: 'You preserve the appearance of calm and walk further from help, often towards your own front door.',
        why: 'Not provoking someone is a reasonable instinct that here works against you. Politeness is not a safety strategy.'
      },
      {
        key: 'B',
        text: 'Turn and confront them so they know you have noticed',
        grade: 'poor',
        consequence: 'You close the distance yourself, on an empty street, with no support. If they are dangerous you have removed your advantage.',
        why: 'Confrontation is the move that feels like taking control and most reliably escalates.'
      },
      {
        key: 'C',
        text: 'Change direction towards people and light, and go into a staffed, open place',
        grade: 'best',
        consequence: 'You confirm you are being followed by their response to your change of route, and you do it somewhere with witnesses and a door between you.',
        why: 'Direction, then witnesses. Turning into busier ground both tests your suspicion and fixes it, without a confrontation and without leading anyone home.'
      },
      {
        key: 'D',
        text: 'Call someone and describe them loudly',
        grade: 'ok',
        consequence: 'Sometimes an effective deterrent, but it occupies your hands, your attention and your hearing at the moment you need all three.',
        why: 'A call is worth making from somewhere safe. Making it while walking, at night, distracted, is a partial move rather than a wrong one.'
      }
    ]
  },

  'digital-bank-fraud': {
    question: 'Someone calling from "your bank" says your account is compromised and needs urgent action. What do you do?',
    options: [
      {
        key: 'A',
        text: 'Answer their security questions to verify yourself, then follow their instructions',
        grade: 'poor',
        consequence: 'You have authenticated yourself to a stranger and are now being walked through moving your own money.',
        why: 'The entire attack depends on you proving who you are to someone who never proved who they are.'
      },
      {
        key: 'B',
        text: 'Hang up and call your bank back on the number from your card or app',
        grade: 'best',
        consequence: 'You end the only channel the attacker controls. If the alert was genuine your bank still has it on file, and nothing has been lost.',
        why: 'Hang up and call back on a number you sourced yourself. Urgency is the pressure tool — a real bank can wait five minutes; a fraudster cannot.'
      },
      {
        key: 'C',
        text: 'Ask questions to test whether they are genuine',
        grade: 'risky',
        consequence: 'Professional fraudsters pass this test easily — they often have real transaction details — and every extra minute deepens your sense of obligation.',
        why: 'Attempting to out-interrogate a script is a losing game. Leaving the channel is the only reliable move.'
      },
      {
        key: 'D',
        text: 'Move your money to the "safe account" they provide, then investigate',
        grade: 'poor',
        consequence: 'This is the objective of the call. The money is gone, and because you authorised the transfer, recovery is far harder.',
        why: 'No bank ever asks you to move money to a safe account. That sentence alone ends the conversation.'
      }
    ]
  },

  'health-someone-suicidal': {
    question: 'Someone tells you they do not want to be alive any more. What do you do?',
    options: [
      {
        key: 'A',
        text: 'Ask directly whether they are thinking about suicide, and stay with them',
        grade: 'best',
        consequence: 'The question almost always brings relief rather than harm, and it gives you the one piece of information that determines everything else.',
        why: 'Asking plainly does not plant the idea — a large body of evidence says the opposite. Vagueness protects your comfort, not their safety.'
      },
      {
        key: 'B',
        text: 'Change the subject to something positive and remind them what they have to live for',
        grade: 'poor',
        consequence: 'They learn this is not something you can hear, and they stop telling you. You have closed the channel you most need open.',
        why: 'Reassurance offered too early functions as a request to stop talking, however kindly it is meant.'
      },
      {
        key: 'C',
        text: 'Promise to keep it completely secret so they keep trusting you',
        grade: 'risky',
        consequence: 'You may have to break that promise within the hour, and breaking it is worse than never having made it.',
        why: 'Offer confidence, not absolute secrecy: "I am not going to repeat this casually, and if I think you are in danger I will get help."'
      },
      {
        key: 'D',
        text: 'Give them a helpline number and check back tomorrow',
        grade: 'ok',
        consequence: 'The number is useful and handing it over is not a mistake — but leaving during an acute moment can read as being passed on.',
        why: 'Resources matter, presence matters more right now. Make the call together if they will let you.'
      }
    ]
  },

  'money-police-questioning': {
    question: 'Police want to ask you questions. You have done nothing wrong. What do you do?',
    options: [
      {
        key: 'A',
        text: 'Explain everything fully and immediately — you have nothing to hide',
        grade: 'risky',
        consequence: 'Innocent people routinely damage their own position through honest error: a wrong date, a guessed detail, a confident answer about something they half-remember.',
        why: 'Cooperation is not the same as improvising under pressure. Inconsistency is treated as evidence, and memory under stress is unreliable.'
      },
      {
        key: 'B',
        text: 'Ask whether you are free to leave, and whether you are being questioned as a witness or a suspect',
        grade: 'best',
        consequence: 'Two short questions establish your actual legal position, which determines every right you have and every choice worth making.',
        why: 'Ask your status before you answer anything. It is not obstruction; it is the only way to know which conversation you are in.'
      },
      {
        key: 'C',
        text: 'Refuse to say anything at all and walk away',
        grade: 'poor',
        consequence: 'Depending on where you are and what is being asked, this may itself be an offence, and it converts a routine interaction into a confrontation.',
        why: 'Silence is often a right, but exercising it blindly and physically leaving are different things with different consequences.'
      },
      {
        key: 'D',
        text: 'Record the encounter on your phone and say nothing else',
        grade: 'ok',
        consequence: 'Often lawful and sometimes wise, but it can raise the temperature, and it answers none of the questions that actually protect you.',
        why: 'A record has value. It is not a substitute for knowing whether you are a witness or a suspect.'
      }
    ]
  }
}

export const drillCount = 51
