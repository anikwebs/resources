/* New WORK + CONFLICT situations. Authored to the same six-section
   shape as the existing corpus: p / ul / steps / lines / bad / good.
   Every "bad" item is phrased "Action. Consequence." because the drill
   generator (src/data/drills.js) splits on that boundary to build the
   wrong-answer options and their costs. */

export default [
  {
    id: 'work-asked-to-do-something-wrong',
    title: 'You are asked to do something you believe is wrong',
    category: 'work',
    severity: 'high',
    tool: 'The Written Clarification',
    tags: ['ethics', 'authority', 'paper trail'],
    lede: 'It is not obviously criminal. It is a number moved, a date changed, a customer not told, a name left off. Your manager is relaxed about it, which makes you wonder whether you are the problem. And it was asked verbally, so there is nothing to point at.',
    what: 'It is not obviously criminal. It is a number moved, a date changed, a customer not told, a name left off. Your manager is relaxed about it, which makes you wonder whether you are the problem. And it was asked verbally, so there is nothing to point at.',
    going: [
      'Verbal asks are deliberate more often than people think. Anything said and not written leaves the person who did it holding the whole risk, because there is no record that anyone instructed it.',
      'Your discomfort is data, but it is not yet a finding. Work out whether this is a rule being broken, a norm being bent, or simply a way of working you find distasteful — the three have very different responses and conflating them will cost you credibility.',
      'The goal is not to win an argument about ethics. The goal is to make the decision visible and attributable, then decide what you can live with.'
    ],
    steps: [
      { move: 'Ask a clarifying question before you refuse anything', detail: 'Refusal closes the conversation and makes you the obstacle. A question keeps it open and often reveals context you did not have — or reveals that they know exactly what they are asking.' },
      { move: 'Put the instruction in writing, neutrally', detail: 'Reply summarising what you understood and asking them to confirm. No accusation, no moral framing. "Confirming: you would like me to date the file the 3rd rather than the 8th." Attribution is the whole game.' },
      { move: 'Find the actual rule', detail: 'Policy document, regulation, contract clause, professional code. Discomfort is arguable; a clause number is not. Ten minutes of reading changes what you are able to say.' },
      { move: 'Name the risk, not the wrongdoing', detail: 'Talk about exposure and consequence rather than right and wrong. "If this is audited, who is holding it?" moves faster in most organisations than any appeal to principle.' },
      { move: 'Offer the compliant version', detail: 'Come with an alternative that gets them most of what they want legitimately. Being the person with a solution keeps you inside the conversation instead of outside it.' },
      { move: 'Decide your line before you are standing on it', detail: 'Write down privately what you will not do under any pressure. Deciding in advance is the only way you will hold it in the moment, and it tells you whether this job has a future.' }
    ],
    lines: [
      { when: 'To clarify without accusing', say: '"Before I do it — can you help me understand the reasoning? I want to make sure I am not missing context."' },
      { when: 'To create the record', say: '"Just so I have it right, I will action X as you have asked. Can you confirm by reply?"' },
      { when: 'To name the exposure', say: '"My worry is not you or me — it is what this looks like if someone external asks about it later. Who would be answering that?"' },
      { when: 'To decline without a confrontation', say: '"I am not comfortable signing that one. I am happy to do everything around it, and happy for it to go up a level if that is easier."' },
      { when: 'If pushed hard', say: '"I understand the pressure. I still need the instruction in writing from someone who can authorise it."' }
    ],
    bad: [
      'Refusing loudly in front of others. You have made it about hierarchy and dignity, and now they cannot back down even if they wanted to.',
      'Doing it quietly and hoping it never surfaces. You have taken on the entire risk of a decision that was not yours and left no evidence of who asked.',
      'Sending an accusatory email. It converts a solvable moment into a formal dispute you will fight without allies or preparation.',
      'Going straight to a regulator or the press first. You skip every internal step, which is the first thing anyone will ask about and the fastest route to losing legal protection.',
      'Telling colleagues before you have told your manager. It travels, it reaches them distorted, and you look like you were building a case rather than raising a concern.'
    ],
    good: [
      'Keep the written trail somewhere outside company systems. Access disappears the day it matters most.',
      'Read the whistleblowing policy now, while nothing is happening. Protection almost always depends on following a specific order of steps.',
      'Decide whether this was a one-off under pressure or how the place operates. The second answer is a career decision, not an ethics decision.',
      'Talk it through with one person who owes the company nothing — a professional body helpline, a union, a friend in the same trade.',
      'If you stayed and complied, write down honestly why. Unexamined compliance is how the second ask becomes easier than the first.'
    ],
    limit: 'If it involves fraud, patient or child safety, safety-critical falsification, or covering up a death or serious injury, stop treating it as a workplace conversation. Take advice from a regulator, professional body or solicitor before you act again, and do not destroy or alter any record.'
  },

  {
    id: 'work-team-member-underperforming',
    title: 'Someone on your team is not delivering',
    category: 'work',
    severity: 'medium',
    tool: 'The Specific Gap',
    tags: ['management', 'feedback', 'fairness'],
    lede: 'Work arrives late, or thin, or not at all. Other people have started routing around them, and around you. You have hinted three times. Nothing has changed, and you are now angrier than the situation warrants because you have been carrying it silently.',
    what: 'Work arrives late, or thin, or not at all. Other people have started routing around them, and around you. You have hinted three times. Nothing has changed, and you are now angrier than the situation warrants because you have been carrying it silently.',
    going: [
      'Hints are not feedback. If a reasonable person could hear your last three comments as encouragement, they did — and the gap between your intent and their understanding is entirely your cost to fix.',
      'There are only four causes, and they need different responses: they do not know what good looks like, they cannot do it yet, they are blocked by something you cannot see, or they have decided not to. Guessing wrong wastes the conversation.',
      'Your delay is not kindness. Every week you avoid this, you make the eventual conversation more severe and less survivable for them, and you teach the rest of the team what the real standard is.'
    ],
    steps: [
      { move: 'Write down the evidence before you speak', detail: 'Three specific instances with dates and what was expected versus delivered. Without this the conversation becomes about your impression of them, which is unwinnable and unfair.' },
      { move: 'Work out which of the four causes it is', detail: 'Ask before you diagnose. Capability, clarity, blockage and choice look identical from outside and need opposite responses.' },
      { move: 'Say the gap in one sentence, early', detail: 'Do not open with fifteen minutes of warm-up. State the gap plainly in the first minute, then stop talking and let them respond.' },
      { move: 'Agree what good looks like, in writing', detail: 'A specific output, at a specific standard, by a specific date. Vague improvement plans fail because nobody can tell whether they were met.' },
      { move: 'Set the next checkpoint before you leave the room', detail: 'A date in the calendar converts a conversation into a process. Without it you will be having this same talk in six weeks with nothing new.' },
      { move: 'Follow through on what you said would happen', detail: 'If you named a consequence and then did not apply it, you have taught them and everyone watching that your standards are decorative.' }
    ],
    lines: [
      { when: 'To open plainly', say: '"I want to talk about the last three deliverables. They came in late and lighter than what we agreed, and I have not been clear enough with you about that."' },
      { when: 'To find the real cause', say: '"Before I say anything else — what is your read on how this work is going?"' },
      { when: 'To separate person from output', say: '"This is not about whether you are capable. It is about a specific gap between what we agreed and what arrived."' },
      { when: 'To make the standard concrete', say: '"For the next one: draft by Thursday, covering these three sections, at the level of the March document. Does that seem achievable?"' },
      { when: 'To name the stakes honestly', say: '"I would rather say this now than let it get to a formal stage. If the next two go the same way, that is where it goes."' }
    ],
    bad: [
      'Doing their work yourself to keep things moving. You have quietly agreed to their standard and made yourself the bottleneck permanently.',
      'Complaining about them to the rest of the team. It reaches them within a week, and you lose the moral position you needed for the actual conversation.',
      'Saving it all for the annual review. Six months of unsaid feedback delivered at once is an ambush, and it is the fastest way to a grievance against you.',
      'Softening it until the message disappears. They will leave the room believing things are basically fine, and the next conversation will be a shock.',
      'Restructuring the role around the gap without saying anything. Everyone else can see the workload move, and you have signalled that underperformance is rewarded with less.'
    ],
    good: [
      'Write your own contribution down honestly. If nobody told them the standard, the first failure was managerial, and owning that makes the rest credible.',
      'Check whether the same gap exists elsewhere in the team. One person is a person; three is a system you built.',
      'Keep brief notes after each checkpoint. If this ever becomes formal, contemporaneous notes are the difference between a process and an opinion.',
      'Ask them in the next check-in what would make this easier. Sometimes the blockage is one tool, one permission or one meeting away from being solved.',
      'Decide in advance what you will do if it does not improve, so the decision is not made in a moment of frustration.'
    ],
    limit: 'If the drop in performance follows a bereavement, illness, a mental-health crisis, caring responsibilities or a disability, this stops being a performance conversation until you have taken advice from HR or occupational health. Handling it as pure performance in those circumstances is both unkind and, in many places, unlawful.'
  },

  {
    id: 'work-restructure-announced',
    title: 'A restructure is announced and your role is unclear',
    category: 'work',
    severity: 'high',
    tool: 'The Visible Value Note',
    tags: ['redundancy', 'uncertainty', 'positioning'],
    lede: 'A slide showed a new structure. Your name was not on it, or it was, in a box with a question mark. Nobody will say more than "nothing is decided yet." The office has split into people pretending it is fine and people updating their CVs in the car park.',
    what: 'A slide showed a new structure. Your name was not on it, or it was, in a box with a question mark. Nobody will say more than "nothing is decided yet." The office has split into people pretending it is fine and people updating their CVs in the car park.',
    going: [
      'In a restructure, decisions are usually made by people who have limited information about what you actually do. Your work is visible to your manager; the structure is decided a level or two above them.',
      '"Nothing is decided" is often literally true and completely useless. What is decided is the shape and the headcount number. Who fills the boxes is frequently still open, and that is the only part you can influence.',
      'You have two jobs running in parallel now, and you must do both: make your value legible inside, and rebuild your optionality outside. Doing only the first is naive; doing only the second guarantees the outcome.'
    ],
    steps: [
      { move: 'Write down what you actually do, in outcomes', detail: 'One page. What breaks if you stop, what you own that nobody else knows, what you delivered with numbers attached. Most people cannot produce this, which is exactly why it works.' },
      { move: 'Get one real conversation with the decision-maker', detail: 'Not a complaint and not a plea. Ask what the new structure needs to deliver, and where they see the risk. People remember whoever helped them think.' },
      { move: 'Position for the new shape, not the old one', detail: 'Argue for a function the new structure obviously needs, not for the job you currently hold. Defending the old box is how people argue themselves out of the new one.' },
      { move: 'Read your contract and your local redundancy rules', detail: 'Notice period, consultation requirements, redundancy calculation, anything about internal-first vacancies. Knowing the process is how you spot it being skipped.' },
      { move: 'Start moving outside quietly and immediately', detail: 'Two conversations a week with people outside the company. Not applications — conversations. Options change how you negotiate, and they are slow to build.' },
      { move: 'Keep doing the work well', detail: 'Visible disengagement is the one thing entirely within your control that makes the bad outcome more likely, and it is remembered long after the restructure ends.' }
    ],
    lines: [
      { when: 'To get information without sounding panicked', say: '"I am not asking for guarantees. It would help me to know the timeline and when I will know something concrete."' },
      { when: 'To make yourself legible', say: '"Can I send you a one-pager on what my area covers? Some of it is not obvious from the org chart."' },
      { when: 'To position for the new structure', say: '"Looking at the new shape — who is going to own X? That is where I think the risk sits, and it is what I have been doing."' },
      { when: 'To ask about process', say: '"Will there be a formal consultation, and will internal candidates be considered before external?"' },
      { when: 'To colleagues, without adding fuel', say: '"I honestly do not know any more than you. I am assuming nothing and preparing for both."' }
    ],
    bad: [
      'Campaigning against the restructure. You become a problem to be solved at exactly the moment people are deciding which problems to remove.',
      'Going silent and waiting to be told. Silence gets read as either acceptance or disengagement, and both make you easier to move.',
      'Spreading every rumour you hear. It costs you the trust of the only people who might tell you something real.',
      'Threatening to leave to force clarity. In a restructure that is not leverage — it is a volunteer, and it will be quietly noted as one.',
      'Assuming loyalty will be counted. Length of service is a line in a spreadsheet, not an argument, and nobody senior is making the case for you unless you gave them one.'
    ],
    good: [
      'Get your one-pager into the hands of someone a level above your manager, in a way that helps rather than lobbies.',
      'Save everything personal off company systems now — contacts, portfolio, references, examples of work you are allowed to keep.',
      'Work out your actual number: months of runway, minimum salary, what a package would need to be for redundancy to be acceptable.',
      'Ask two people outside for a reference in advance. It is a much harder ask on the day you need it.',
      'Decide in advance which outcomes you would genuinely accept, so the offer conversation is not the first time you think about it.'
    ],
    limit: 'If you are selected in a way that appears to relate to pregnancy, disability, age, race, sex, religion, union activity or a complaint you raised, that is potentially unlawful rather than merely unfair. Take advice from a union or an employment solicitor before signing anything, and never sign a settlement agreement on the day it is put in front of you.'
  },

  {
    id: 'conflict-passive-aggression',
    title: 'Someone is undermining you quietly',
    category: 'conflict',
    severity: 'medium',
    tool: 'The Named Pattern',
    tags: ['undermining', 'politics', 'evidence'],
    lede: 'Nothing you could point to. A correction in front of others, information that arrives too late to be useful, your name absent from the thread, a compliment with a hook in it. Individually, all deniable. Together, you have started second-guessing yourself in rooms you used to be fine in.',
    what: 'Nothing you could point to. A correction in front of others, information that arrives too late to be useful, your name absent from the thread, a compliment with a hook in it. Individually, all deniable. Together, you have started second-guessing yourself in rooms you used to be fine in.',
    going: [
      'Deniability is the mechanism, not a side effect. Each act is small enough that naming it makes you look oversensitive, which is precisely what keeps it running.',
      'The pattern is the evidence. One late email is life; the eighth late email from the same person before the same kind of meeting is a method, and it only becomes visible written down with dates.',
      'Most of this is driven by threat rather than malice — your competence, your access, your relationship with someone they want. That does not make it acceptable, but it does tell you which responses will actually stop it.'
    ],
    steps: [
      { move: 'Start a log today', detail: 'Date, what happened, who saw it, what it cost. Five lines each. You are not building a case yet; you are converting a feeling into something you can look at.' },
      { move: 'Test it once before you conclude anything', detail: 'Change one variable — ask for the information earlier, in writing, with someone copied. If the behaviour survives being made visible, you have your answer.' },
      { move: 'Close the gaps it exploits', detail: 'Confirm decisions in writing, copy the relevant person, put your own updates where they cannot be intercepted. Most quiet undermining depends on channels only they control.' },
      { move: 'Name the pattern once, privately and calmly', detail: 'Not a list of grievances — one observation and one request. Said without heat, in private, it removes deniability without creating a war.' },
      { move: 'Give them a face-saving exit', detail: 'People escalate when the only options are confession or fight. Offer an explanation they can accept and most of the behaviour stops without anyone admitting anything.' },
      { move: 'If it continues, escalate on facts, not character', detail: 'Take the log to your manager and describe impact on work, not their personality. "This is what happened and this is what it cost" survives scrutiny; "they are undermining me" does not.' }
    ],
    lines: [
      { when: 'To close a channel in the moment', say: '"Can you send that to me in an email as well? I want to make sure I have the detail right."' },
      { when: 'To name it once, privately', say: '"I have noticed I am getting information late a few times before client meetings. I am sure there is a reason — can we sort the timing out?"' },
      { when: 'To handle a public correction', say: '"That is worth checking. Let me confirm the figure and come back to the group by end of day."' },
      { when: 'To answer a hooked compliment', say: '"Thank you. Which part did you mean?" — asked plainly, and then wait.' },
      { when: 'To escalate on facts', say: '"I want to raise a pattern rather than an incident. Here are five dated examples and what each one cost us."' }
    ],
    bad: [
      'Calling it out publicly on a single instance. You have no pattern to point to yet, and the room sees an overreaction to something small.',
      'Matching it with your own quiet retaliation. It escalates invisibly, it is now genuinely mutual, and you have lost the clean position you started with.',
      'Complaining to colleagues instead of the person. It gets back to them, and the story becomes about you talking rather than about anything they did.',
      'Deciding you are imagining it and doing nothing. Without a log you will keep relitigating it privately, and the doubt does more damage than the behaviour.',
      'Bringing a general complaint about tone to a manager. There is nothing actionable in it, so nothing happens, and you have spent your one escalation.'
    ],
    good: [
      'Keep the log going even after it improves. Patterns that stop under observation frequently resume when attention moves on.',
      'Rebuild your own visibility directly — your work, in your words, in front of the people who matter, not routed through anyone.',
      'Ask one trusted person for a straight calibration on how you come across. Sustained undermining distorts self-assessment in both directions.',
      'Work out what they might actually be worried about. Sometimes the whole thing ends with one honest conversation about a shared boundary.',
      'Notice whether it is only you. If it is happening to several people, this is a management problem and the response is collective, not personal.'
    ],
    limit: 'If the undermining connects to a protected characteristic, or it follows you raising a concern or a complaint, that is potentially harassment or victimisation rather than office politics. Log it accordingly, keep copies outside company systems, and take advice from a union or an employment solicitor.'
  },

  {
    id: 'conflict-apology-owed',
    title: 'You were wrong and have to apologise properly',
    category: 'conflict',
    severity: 'medium',
    tool: 'The Clean Apology',
    tags: ['accountability', 'repair', 'trust'],
    lede: 'You have gone over it enough times to know you were wrong. Not partly, not in a way that can be shared out. The urge now is to explain — to supply the context that makes it understandable. That urge is the thing that will ruin the apology.',
    what: 'You have gone over it enough times to know you were wrong. Not partly, not in a way that can be shared out. The urge now is to explain — to supply the context that makes it understandable. That urge is the thing that will ruin the apology.',
    going: [
      'An apology is not for your discomfort. If it is designed to make you feel resolved, the other person can tell, and it lands as a request rather than an offer.',
      'Explanation reads as defence. Every "because" arrives as a reason it was not entirely your fault, and it converts an apology into a negotiation about proportion.',
      'A real apology has four parts and no fifth: what you did, the effect it had, no excuse, and what changes. The absence of the fifth part is what makes it credible.'
    ],
    steps: [
      { move: 'Name the act, not your feeling about it', detail: 'Start with the specific thing you did. "I said X in front of Y" — not "I feel terrible about what happened", which puts your emotions in the middle of their injury.' },
      { move: 'Say the effect out loud', detail: 'Show that you understand what it cost them. This is the part people skip, and it is the part that determines whether the apology is believed.' },
      { move: 'Remove every "but"', detail: 'Read your draft and delete all justification. If context genuinely matters, it can be offered days later, once repair is not on the table.' },
      { move: 'Say what will be different', detail: 'One specific change, not a promise to be better. Vagueness here is what makes an apology feel like a performance.' },
      { move: 'Offer the repair, then let them set the pace', detail: 'Ask what would help rather than announcing what you will do. Then accept whatever timeline they need, including none.' },
      { move: 'Do not ask to be forgiven', detail: 'Forgiveness on request is a second demand. Deliver the apology, mean it, and leave the response entirely to them.' }
    ],
    lines: [
      { when: 'To open cleanly', say: '"I want to apologise for something specific. I said X in the meeting, and I was wrong to."' },
      { when: 'To name the effect', say: '"I think it made you look unprepared in front of people whose opinion matters to you. That was mine, not yours."' },
      { when: 'To commit to a change', say: '"If I disagree with you again, I will raise it with you first rather than in the room."' },
      { when: 'To offer repair without controlling it', say: '"Is there anything that would help? I am happy to correct it with the same people, if that is useful — or to leave it if it is not."' },
      { when: 'If they are not ready', say: '"That is fair. I am not asking you to be fine with it. I wanted to say it properly."' }
    ],
    bad: [
      'Explaining your reasons in the same breath. It converts the apology into a defence, and they hear only the defence.',
      'Apologising for how they took it. "I am sorry you were upset" relocates the fault to their reaction and usually makes things worse than saying nothing.',
      'Apologising in front of an audience. It puts them under pressure to absolve you publicly and turns their injury into your redemption scene.',
      'Asking for forgiveness at the end. You have handed them a second obligation while they are still holding the first.',
      'Bringing up something they did. The moment you introduce a balance sheet, the apology is over and you are in a dispute.'
    ],
    good: [
      'Follow the words with the change, visibly, over weeks. Behaviour is the only evidence an apology was real.',
      'Do not raise it repeatedly. Returning to it every few days is a request for reassurance dressed as remorse.',
      'Write down honestly what led to it. If the cause was pressure or a pattern, the apology fixed the incident and not the mechanism.',
      'If others were affected, tell them plainly too — briefly, without theatre.',
      'Accept that some relationships change permanently. A clean apology is still the right move when it does not restore anything.'
    ],
    limit: 'If what happened may have legal or disciplinary consequences — potential liability, a regulated matter, anything involving harassment or safeguarding — take advice before you put an admission in writing. Apologising properly and admitting liability formally are different acts, and confusing them can remove protections you may need.'
  }
]
