/* =============================================================
   SCENARIO ENGINE — "What would you do?"
   Every scenario is deliberately hard: the obvious answer is
   usually defensible and still wrong, and the best answer costs
   something. Each option carries a consequence, a trade-off, a
   hidden issue and expert reasoning.

   Grades: best | ok | risky | poor
   ============================================================= */

export const SCENARIOS = [
  {
    id: 'late-ask',
    title: 'The 5:30 request',
    domain: 'Work',
    accent: 'forest',
    difficulty: 'Hard',
    skills: ['boundaries', 'prioritisation', 'communication'],
    situations: ['work-impossible-deadline'],
    setup: [
      'It is 5:32 p.m. on a Wednesday. You have two deliverables due Friday, both already tight.',
      'Your manager messages: *"Need the Q3 competitor summary for tomorrow\'s 9 a.m. exec review. Shouldn\'t take long."*',
      'It is realistically three hours of work. You had planned to leave in ten minutes. There is no information about what the exec review needs it for, and "shouldn\'t take long" has been wrong every previous time.'
    ],
    question: 'What is your first move?',
    options: [
      {
        key: 'A',
        text: 'Say yes, stay late, deliver it. Raise the pattern later when you are not under pressure.',
        grade: 'risky',
        consequence: 'You deliver. Nobody learns anything. The next 5:30 request arrives sooner than the last one, because the cost of asking you is zero.',
        tradeoff: 'You buy short-term goodwill with long-term capacity. That trade only works if you are actually going to raise it later — and "later" almost never arrives, because there is never a moment when you are not under pressure.',
        hidden: 'You have also silently accepted the framing that the Friday deliverables will still land on time. When one slips, it will look like your failure, not a consequence of Wednesday night.',
        expert: 'Experienced people rarely refuse the task. They refuse the *silence* around the task. Saying yes without naming what moves is the actual mistake here — not the staying late.'
      },
      {
        key: 'B',
        text: 'Reply: "I can\'t — I already have two Friday deadlines."',
        grade: 'poor',
        consequence: 'You are technically right and strategically weak. Your manager now has a problem, no solution, and an impression that you are a person who returns problems.',
        tradeoff: 'You protected tonight and spent credibility you will want at your next review.',
        hidden: 'The exec review is happening whether or not you help. Someone will produce something. If it is produced without you, the version of reality the executives see is one you had no hand in shaping.',
        expert: 'A refusal with no alternative reads as unwillingness, even when it is genuine incapacity. The information "I am at capacity" is useful. The sentence "I can\'t" is not, because it hands back nothing.'
      },
      {
        key: 'C',
        text: 'Ask what decision the summary is for, and offer a reduced version by 8 a.m.',
        grade: 'best',
        consequence: 'Nine times out of ten the answer shrinks the task. "They want to know if we should keep funding the channel" is a one-page answer, not a three-hour deck. You leave at a reasonable hour with a clear, smaller commitment.',
        tradeoff: 'You are asking a question at a moment when your manager wants compliance, not dialogue. That takes a beat of social courage, and occasionally it will irritate them.',
        hidden: 'You are not really negotiating hours — you are converting an unbounded request into a bounded one. Unbounded requests are what actually destroy weeks. The scope, not the timing, is the dangerous part.',
        expert: 'The move is: *purpose → scope → commitment.* "What decision does this need to support? If it is the funding question, I can have a one-pager by 8 a.m. that answers exactly that. A full landscape deck would be Friday." You have given a yes, a shape and a price.'
      },
      {
        key: 'D',
        text: 'Say yes and quietly let one Friday deliverable slip.',
        grade: 'poor',
        consequence: 'You solve tonight by creating an undisclosed failure on Friday. When it surfaces, it surfaces as a surprise — the most expensive form of bad news.',
        tradeoff: 'You avoided one uncomfortable conversation by guaranteeing a worse one, with less time to fix anything.',
        hidden: 'Silent slippage is read as a competence problem, not a capacity problem. The two are punished very differently.',
        expert: 'The rule is unglamorous: *no invisible trade-offs.* If something moves, the person who owns the deadline hears about it from you, in writing, on the day you decide it — not on the day it is missed.'
      }
    ],
    takeaway: 'A request is not the same as its scope. Before you negotiate time, find out what decision the work is actually feeding — the answer usually makes the work smaller.',
    doNow: 'Write your version of the purpose question and keep it somewhere you can paste it. Mine: "So I aim this correctly — what decision does it need to support?"',
    aiEdge: 'Paste the request plus your real calendar into an AI tool and ask: "Give me three replies — one that protects the relationship, one that protects the deadline, one that protects both. Flag which commitments in each I cannot actually keep." You still choose. It just stops you sending the 5:35 p.m. version of yourself.'
  },

  {
    id: 'wrong-number',
    title: 'The number that is wrong',
    domain: 'Work',
    accent: 'clay',
    difficulty: 'Very hard',
    skills: ['integrity', 'communication', 'risk'],
    setup: [
      'Twenty minutes before a board pack goes out, you notice a figure in your director\'s slide is wrong. Not rounding-wrong — a formula picked up the wrong column, and the growth number reads 18% when it is closer to 11%.',
      'Your director built this slide personally and has already presented the 18% verbally to two board members.',
      'You are not senior. The room will be nine people who all outrank you.'
    ],
    question: 'What do you do in the next twenty minutes?',
    options: [
      {
        key: 'A',
        text: 'Message your director privately with the corrected figure and the cell that caused it.',
        grade: 'best',
        consequence: 'They have the one thing they need: time and a specific fix. Most directors correct it, some correct it badly, a few resent you briefly. All of them prefer this to the alternative.',
        tradeoff: 'You accept a short, awkward exchange with a senior person under time pressure. That is the entire cost.',
        hidden: 'The specificity is what protects you. "I think the growth number might be off" invites a defensive argument. "Cell F12 is pulling the June column instead of the quarter; corrected it reads 11.4%" invites a fix. One is an opinion about their competence; the other is a bug report.',
        expert: 'Private, specific, fast, and with the correction already done. Then — the part people skip — put it in writing. One line in chat, timestamped, so the record shows when it was known. Not as a weapon. As a fact.'
      },
      {
        key: 'B',
        text: 'Say nothing. It is their slide, their number, and not your place.',
        grade: 'poor',
        consequence: 'The board receives a wrong figure. It may go unnoticed for a quarter, then surface during diligence or a follow-up question, at which point the question becomes "who knew?"',
        tradeoff: 'You avoid twenty awkward minutes and take on an unbounded, growing liability.',
        hidden: 'You already know. Not-telling is now an active choice, and it will be evaluated as one. "Not my place" reads very differently in the moment than it does in a retrospective.',
        expert: 'The test is not "is it my job to fix it?" — it is "would a reasonable person say I should have flagged this?" If yes, the flag is not optional. It is also nearly free right now and expensive in a month.'
      },
      {
        key: 'C',
        text: 'Raise it in the meeting when the slide comes up, so it is corrected on the record.',
        grade: 'risky',
        consequence: 'The number gets fixed. Your director gets corrected publicly by a junior person in front of the board — and remembers it far longer than the board remembers the number.',
        tradeoff: 'You optimised for the record and paid in the relationship. Sometimes correct; here it is unnecessary, because you had twenty minutes to do it privately.',
        hidden: 'Public correction also raises a second question in the room: "what else is wrong in this pack?" That doubt lands on the whole document, including your own sections.',
        expert: 'Public is the right channel only when private was tried and refused, or when the decision would be made irreversibly wrong in the next few minutes. Not before.'
      },
      {
        key: 'D',
        text: 'Fix the slide yourself and re-upload the pack quietly.',
        grade: 'risky',
        consequence: 'The document is now correct and your director is about to present a number they have never seen, having verbally committed to a different one.',
        tradeoff: 'You solved the artefact and created an ambush. Being surprised by your own slide in front of a board is worse than presenting a wrong number you can caveat.',
        hidden: 'You also erased the discrepancy without a record. If anyone asks later why the verbal 18% differs from the written 11.4%, nobody can reconstruct what happened.',
        expert: 'Never silently change something a person is about to say out loud. Fix it *with* them, in the time available, or flag it and let them choose. Their name is on the delivery.'
      }
    ],
    takeaway: 'When you find an error above your pay grade, the useful currency is specificity and speed, not courage or discretion. Give the owner the fix and the time to use it.',
    doNow: 'Write the error-flag template you would actually send: what is wrong, the exact cause, the corrected value, and how long a fix takes. Four lines, no hedging, no apology.',
    aiEdge: 'AI is genuinely good here as a *second* check: paste the calculation logic and ask it to reproduce the number independently and list what would have to be true for 18% to be correct. Never paste real board financials into a consumer tool — reconstruct the shape of the problem with dummy numbers instead.'
  },

  {
    id: 'two-offers',
    title: 'Two offers, one week',
    domain: 'Career',
    accent: 'atlas',
    difficulty: 'Hard',
    skills: ['decision', 'negotiation', 'risk'],
    setup: [
      'Offer A: 22% more money, a bigger title, a company in a shrinking market with a manager who was evasive about why the role is open.',
      'Offer B: 6% more money, a lateral title, a company you find genuinely interesting, a manager two former reports both described as "the reason I grew".',
      'Offer A expires Monday. Offer B has not yet issued paperwork but says it is coming. You have savings for about four months.'
    ],
    question: 'What is the highest-value action this week?',
    options: [
      {
        key: 'A',
        text: 'Take A. Money and title are the measurable things; the rest is a feeling.',
        grade: 'risky',
        consequence: 'You are 22% richer inside a shrinking market, reporting to someone who could not explain a vacancy. Both of those tend to resolve badly within eighteen months.',
        tradeoff: 'You bought certainty and compensation at the cost of trajectory and the single largest variable in job satisfaction — your direct manager.',
        hidden: '"Measurable" is doing dishonest work in that sentence. Manager quality is not unmeasurable; you already have two data points from former reports. You are calling it a feeling because acting on it is inconvenient.',
        expert: 'Money compounds. So does a manager who develops people, and so does market decline — in the other direction. Compare three-year positions, not day-one packages.'
      },
      {
        key: 'B',
        text: 'Tell B you have a competing offer expiring Monday and ask if they can accelerate.',
        grade: 'best',
        consequence: 'You convert an unknown into a decision you can actually make. Companies routinely accelerate for a real deadline, and how they respond to pressure is itself the most useful signal you will get all week.',
        tradeoff: 'You reveal that you are being courted, which slightly reduces your leverage on price with B, and you risk B saying no.',
        hidden: 'The real problem is not "which offer" — it is that you are being asked to decide with one of the two options undefined. Almost all the value this week is in removing that undefined, not in more deliberation.',
        expert: 'Say it plainly and without threat: "I\'d rather join you. I have an offer that expires Monday. Is there any path to a decision before then?" Then ask A for a short extension too — an offer that cannot survive a 48-hour extension request was never a stable offer.'
      },
      {
        key: 'C',
        text: 'Take A and keep interviewing at B in the background.',
        grade: 'poor',
        consequence: 'You start a job you intend to leave, in a market where your name circulates. A short stint you quit at month four costs you the next negotiation, not this one.',
        tradeoff: 'You optimised for having no gap and took on reputational and psychological debt.',
        hidden: 'Starting a role you have privately discounted changes how you work in it. You will not invest, you will be visibly half-present, and the "shrinking market" problem will find you before your escape does.',
        expert: 'Accepting an offer you plan to abandon is not clever hedging. It is a decision to be untrustworthy at a moment when trust is the only thing you have with either employer.'
      },
      {
        key: 'D',
        text: 'Ask A directly why the role is open and who left, then decide.',
        grade: 'ok',
        consequence: 'A good question that yields real information. On its own, it does not fix the actual blocker: B is still undefined and Monday still arrives.',
        tradeoff: 'You gathered evidence but spent one of your five remaining days on the option you already suspect.',
        hidden: 'You should ask this regardless — but as a parallel action, not the plan. Also ask to speak to whoever held the role, or a peer. Evasiveness twice is an answer.',
        expert: 'Right question, wrong sequencing. Run it alongside accelerating B, not instead of it. Under deadline, always attack the unknown that blocks the decision first.'
      }
    ],
    takeaway: 'When two options are unevenly defined, do not deliberate harder — go and define the vague one. Most "hard decisions" are actually incomplete decisions.',
    doNow: 'List which facts you are missing about each option, then write the single message that would resolve the most consequential one. Send it today.',
    aiEdge: 'Useful prompt: "Here are two offers with details. Do not recommend one. List the assumptions each choice requires, what would make each the wrong choice, what information I am missing, and which of the two is more reversible." Reversibility is usually the deciding factor and is the thing people forget to weigh.'
  },

  {
    id: 'angry-customer',
    title: 'The customer who is right and unbearable',
    domain: 'Work',
    accent: 'signal',
    difficulty: 'Hard',
    skills: ['communication', 'de-escalation', 'boundaries'],
    situations: ['conflict-shouted-at-public'],
    setup: [
      'A client\'s operations lead is on the phone. She is loud, personal, and has been on hold twice. She is also correct: your team missed a delivery window and the update came 26 hours late.',
      'She wants a discount you cannot authorise, and she wants it committed on this call.',
      'Your own manager is out until tomorrow.'
    ],
    question: 'How do you handle the next four minutes?',
    options: [
      {
        key: 'A',
        text: 'Let her finish completely, then reflect the specific failure back and commit only to what you can verify.',
        grade: 'best',
        consequence: 'The volume drops once she hears her own complaint said back accurately. You end the call with one verifiable commitment instead of a discount you cannot deliver.',
        tradeoff: 'She will not be satisfied at the end of this call. You are accepting an unhappy customer today to avoid a betrayed customer next week.',
        hidden: 'What is actually driving the volume is usually not the money — it is having explained the problem twice and not being sure anyone heard it. Accurate reflection addresses the real grievance; a discount addresses the stated one.',
        expert: 'Own the specific piece that is genuinely yours, in plain words, with no "however". Then: "I can\'t authorise a credit on this call. I can commit to a written account of what happened and a decision on compensation by 2 p.m. tomorrow, from someone who can actually approve it." One promise, verifiable, on a clock.'
      },
      {
        key: 'B',
        text: 'Agree to the discount to end the call, then sort it out internally.',
        grade: 'poor',
        consequence: 'The call ends pleasantly and you have created a promise you do not own. When it is reduced or refused, trust breaks twice — once for the delay, once for the retraction.',
        tradeoff: 'You bought four calm minutes with a much larger future failure.',
        hidden: 'You also just taught this client that escalation works on you personally. Every future issue now starts at maximum volume.',
        expert: 'Never trade a promise you do not control for relief from an uncomfortable feeling. The relief lasts an hour; the promise lasts as long as the relationship.'
      },
      {
        key: 'C',
        text: 'Explain the internal reasons — the vendor delay and the staffing gap that caused it.',
        grade: 'poor',
        consequence: 'Every sentence of explanation reads as an excuse to someone whose business lost money. The heat goes up, not down.',
        tradeoff: 'You optimised for fairness to your team and paid in the client relationship.',
        hidden: 'Your internal causes are genuinely relevant — later, in writing, as evidence that a fix exists. Delivered live to an angry person, causes sound like defence, and defence sounds like denial.',
        expert: 'Sequence matters: acknowledge → own → commit → *then* explain, and preferably in writing. Explanation before ownership always lands as evasion.'
      },
      {
        key: 'D',
        text: 'Hold a firm boundary on tone: tell her you will continue when she stops raising her voice.',
        grade: 'risky',
        consequence: 'Sometimes necessary and here premature. She is a customer who is factually right; a tone lecture from the party at fault reads as arrogance and will end up quoted upward.',
        tradeoff: 'You protected your dignity at the cost of the account, before trying the cheaper move.',
        hidden: 'There is a real line — slurs, threats, sustained abuse — and it does need naming. But volume from someone whose complaint is legitimate is not that line yet.',
        expert: 'Earn the boundary. Absorb the first wave, get the content right, and if the abuse continues after you have visibly heard her, then name it calmly and offer a written channel instead.'
      }
    ],
    takeaway: 'When you are in the wrong, ownership is cheaper than explanation and safer than concession. Commit only to what you can personally verify.',
    doNow: 'Write your two-sentence ownership line for a real failure at your work: name what went wrong, and one thing you can verify. No "however".',
    aiEdge: 'After the call, paste the timeline (no names, no account data) and ask AI to draft the written follow-up in three registers: factual, warm, and formal. Then pick the one that matches the relationship. The 26-hour silence is the failure to fix; the tone is just the delivery.'
  },

  {
    id: 'ai-said-so',
    title: 'The confident answer',
    domain: 'AI',
    accent: 'council',
    difficulty: 'Hard',
    skills: ['verification', 'ai', 'critical-thinking'],
    setup: [
      'You asked an AI tool to summarise the regulatory requirements for a product change. It produced a clean, confident four-point summary, including a specific clause reference and a compliance deadline.',
      'It is exactly what you needed, arrives in ninety seconds, and reads like something a lawyer wrote.',
      'Your presentation to the leadership team is in one hour.'
    ],
    question: 'What do you do with it?',
    options: [
      {
        key: 'A',
        text: 'Use it, and note in the deck that the summary is AI-generated.',
        grade: 'risky',
        consequence: 'The disclaimer protects your honesty and not your organisation. If the clause reference is invented — a common, specific failure mode — a labelled wrong answer is still a wrong answer that a room acted on.',
        tradeoff: 'You bought transparency without buying accuracy. Those are different problems.',
        hidden: 'Disclosure shifts responsibility in the reader\'s mind but not in reality. Someone in that room will make a decision on it, and the label will not travel with the decision.',
        expert: 'Labelling is necessary and insufficient. For anything with a clause number, a date, a citation or a figure, the only acceptable step is checking the primary source.'
      },
      {
        key: 'B',
        text: 'Check the clause reference and the deadline against the primary regulation; present the rest as a structure to be confirmed.',
        grade: 'best',
        consequence: 'Ten minutes of checking either confirms the summary — in which case you present with real confidence — or catches a fabricated citation before nine people build a plan on it.',
        tradeoff: 'You spend ten of your sixty minutes and may have to present a less tidy story: "here is the shape, these two facts are verified, this one is pending counsel."',
        hidden: 'The specific, checkable details are where AI fails most confidently. Structure and vocabulary are where it is strongest. Verify the former, use the latter.',
        expert: 'This is the whole verification discipline in one move: separate *checkable claims* from *useful framing*. Check every claim that has a number, a name, a date or a citation. Keep the framing. State what is unverified out loud.'
      },
      {
        key: 'C',
        text: 'Ask the AI to double-check itself and cite its sources.',
        grade: 'poor',
        consequence: 'It will comply cheerfully and may generate plausible-looking citations that do not exist. Self-verification by the same system that produced the error is not verification.',
        tradeoff: 'You feel more certain while being no more correct. That is strictly worse than uncertainty.',
        hidden: 'Asking a model to check its own work usually increases confidence in the output without increasing accuracy. False certainty is the actual danger.',
        expert: 'Verification must be *external*: the regulation itself, a database, a human who is accountable. A second AI pass is a reasonable way to generate challenges to your thinking — never a way to confirm a fact.'
      },
      {
        key: 'D',
        text: 'Drop the regulatory section and present without it.',
        grade: 'ok',
        consequence: 'Safe and slightly cowardly. The room needed to know the regulatory shape, and you had a usable, unverified draft of it.',
        tradeoff: 'You eliminated the risk of being wrong and also eliminated the value.',
        hidden: 'Deleting is the reflex of someone who thinks the only two options are "assert" or "omit". There is a third: assert the structure, mark the unverified facts, name who confirms them and by when.',
        expert: 'Confidence is not binary. "Here is the framework; these two figures are confirmed; this deadline is unconfirmed and legal will have it by Thursday" is a stronger position than either bluffing or silence.'
      }
    ],
    takeaway: 'AI is strong at structure and weak at specifics. Verify anything with a number, name, date or citation; keep the framing that made it useful.',
    doNow: 'Take the last AI output you used for real work. Circle every checkable claim in it. Check one against a primary source.',
    aiEdge: 'Better prompt shape: "Give me the structure of the requirements. For every specific clause, date or figure, mark it [UNVERIFIED] and tell me exactly which primary source I should check." Asking for its own uncertainty markers is one of the few reliable ways to make an AI output safer to use.'
  },

  {
    id: 'silent-team',
    title: 'The quiet in the room',
    domain: 'Leadership',
    accent: 'forest',
    difficulty: 'Very hard',
    skills: ['leadership', 'communication', 'systems'],
    setup: [
      'You now lead a team of six, three of whom were your peers last month. In your first two team meetings, nobody has disagreed with anything you proposed.',
      'You know at least two of your proposals were mediocre.',
      'A senior engineer, previously vocal in meetings, has said almost nothing and has started replying to you only in writing.'
    ],
    question: 'What do you do first?',
    options: [
      {
        key: 'A',
        text: 'Tell the team in the next meeting that you want honest disagreement and will not take it personally.',
        grade: 'ok',
        consequence: 'Necessary to say, and almost never sufficient. Stated invitations to dissent are cheap; every previous manager said something similar. The team will wait to see what happens the first time someone takes you up on it.',
        tradeoff: 'You spend the announcement and get little in return, and if the next disagreement goes badly you have used up the words.',
        hidden: 'Silence is not a communication problem, it is a risk calculation. People are pricing what dissent costs them under a new manager who used to be their peer. Announcements do not change prices; observed consequences do.',
        expert: 'Say it once, briefly, then spend your effort on making the first act of dissent visibly rewarded. One public "you were right and I was wrong, we\'re doing it your way" is worth twenty invitations.'
      },
      {
        key: 'B',
        text: 'Talk to the quiet engineer one-to-one and ask directly what changed.',
        grade: 'best',
        consequence: 'You get real information from the highest-signal source, privately, where the cost of honesty is lowest. Whatever is happening — grief at being passed over, doubt about you, something unrelated — you cannot address it while guessing.',
        tradeoff: 'The conversation may be uncomfortable and the answer may be about you. You are also singling someone out, which needs handling with care.',
        hidden: 'The written-only replies are the loudest signal in the scenario. Someone who has moved to writing is either creating a record or protecting themselves. Both are worth understanding immediately, and neither shows up in a group meeting.',
        expert: 'Ask about the change, not about their feelings, and make the question specific and low-blame: "You used to push back in these meetings and you haven\'t in the last two. I\'d rather know why than guess. What am I missing?" Then say nothing for a while.'
      },
      {
        key: 'C',
        text: 'Bring your two weakest proposals back and ask the team to find the flaws.',
        grade: 'best',
        consequence: 'You demonstrate, rather than announce, that finding a hole in your idea is safe. Doing it on ideas you already suspect are weak means the first critique lands on something you are not defending.',
        tradeoff: 'It costs a little standing in a fragile first month, and if handled poorly it can look like a test.',
        hidden: 'This changes the observed price of dissent, which is the actual blocker. Structure helps more than permission: ask each person for one risk in writing before discussion, so the first objection is not a solo act of bravery.',
        expert: 'The strongest version pairs with option B. Fix the specific relationship privately; change the group\'s incentives structurally. Either alone leaves half the problem in place.'
      },
      {
        key: 'D',
        text: 'Give it a month. New-manager awkwardness usually settles on its own.',
        grade: 'poor',
        consequence: 'Norms harden fast. The pattern set in the first six weeks — that this manager\'s proposals pass unchallenged — becomes the team\'s default, and the engineer\'s withdrawal deepens quietly.',
        tradeoff: 'You avoided early discomfort and paid with a culture you will then have to break.',
        hidden: 'Silence is not neutral time passing. It is an active training signal, teaching everyone that this room does not do disagreement.',
        expert: 'Almost nothing about team dynamics improves through patience alone. Waiting is the right move only when you have deliberately decided what you are waiting *for*.'
      }
    ],
    takeaway: 'Silence is a price signal, not a personality trait. Change what dissent costs — privately with the person, structurally with the group — and stop relying on invitations.',
    doNow: 'Name the one person whose disagreement you have not heard recently. Book fifteen minutes and ask one specific question about the change.',
    aiEdge: 'Use AI as a rehearsal partner, not an oracle: "Role-play a senior engineer who was passed over for the role I just got. I will open the conversation. Be realistic, not hostile, and don\'t make it easy." Then ask it afterwards what you avoided saying.'
  },

  {
    id: 'shrinking-window',
    title: 'Three things, one afternoon',
    domain: 'Daily life',
    accent: 'amber',
    difficulty: 'Medium',
    skills: ['prioritisation', 'decision', 'triage'],
    setup: [
      'It is 1 p.m. Three things need to happen today and you have capacity for roughly two: (1) a form that must be submitted before midnight or you lose a €400 refund, (2) a colleague who asked for an hour of help before their morning review, (3) two hours of preparation for your own presentation tomorrow at 11 a.m.',
      'You slept badly and your concentration is poor.'
    ],
    question: 'How do you sequence the afternoon?',
    options: [
      {
        key: 'A',
        text: 'Form first (short, hard deadline), then presentation prep, then help the colleague if time remains.',
        grade: 'ok',
        consequence: 'Rational and slightly brittle. The form is genuinely short, so doing it first is right, but leaving your colleague to the residual slot means they probably get nothing.',
        tradeoff: 'You protected your own outcomes and quietly defaulted on a commitment to a person.',
        hidden: '"If time remains" is not a plan — it is a decision to drop something without telling anyone. If the colleague is not getting the hour, they need to know at 1 p.m., not at 7 p.m.',
        expert: 'Right instinct on the form. The missing move is a two-line message: "I can give you 20 minutes at 4, not the hour. Send me the single thing you most need looked at." Renegotiate explicitly rather than fail silently.'
      },
      {
        key: 'B',
        text: 'Do the form, tell the colleague you can give 20 focused minutes at 4, spend the rest on your presentation.',
        grade: 'best',
        consequence: 'All three obligations are handled honestly. The colleague gets less than they asked for and enough to be useful, in time to act on it, and your own preparation stays intact.',
        tradeoff: 'You do a partial job on the favour and must say so out loud. That is the whole cost.',
        hidden: 'Most help requests do not need the full hour — they need the twenty minutes that unblock the specific thing. Asking "what is the one part you most need looked at?" typically shrinks the task by two-thirds.',
        expert: 'The pattern is: *irreversible first, then renegotiate the flexible, then protect the block of real work.* The form is irreversible after midnight; the favour is negotiable in size; your prep needs contiguous time and should not be sliced into fragments.'
      },
      {
        key: 'C',
        text: 'Help the colleague first — they need it before the morning and it is the kind thing to do.',
        grade: 'risky',
        consequence: 'An hour of poor-concentration help, followed by a rushed form and thin preparation. Three mediocre outcomes and a €400 risk still open at 9 p.m.',
        tradeoff: 'You spent your best remaining attention on the item with the lowest cost of delay and the lowest personal consequence.',
        hidden: 'Doing the generous thing first often feels like values and is actually avoidance — the favour is socially warm and cognitively easy, and your own presentation is the thing you are anxious about.',
        expert: 'Generosity is fine. Ungoverned generosity that puts a hard deadline at risk is not generosity, it is poor sequencing. Give the help in a bounded slot, after the irreversible item is closed.'
      },
      {
        key: 'D',
        text: 'Given poor sleep, take the €400 loss and protect the presentation and the favour.',
        grade: 'poor',
        consequence: 'You paid €400 for capacity you did not need to buy. The form is short; even at low concentration, form-filling is the task least damaged by tiredness.',
        tradeoff: 'You conserved attention by spending money, without checking whether the task actually required the attention.',
        hidden: 'Tiredness does not degrade all work equally. Mechanical, structured tasks survive it; creative and judgement-heavy work does not. Match the task to the state you are actually in.',
        expert: 'Do the low-cognition, high-consequence item precisely *because* you are tired. Save the sharp hours, whatever is left of them, for the work that needs judgement.'
      }
    ],
    takeaway: 'Sequence by irreversibility, then renegotiate size out loud, then protect one contiguous block for the work that needs judgement. Never drop a commitment silently.',
    doNow: 'Look at today\'s list. Mark which item becomes impossible if you do it tomorrow. Do that one first, even if it is boring.',
    aiEdge: 'Paste the three items with real constraints and ask: "Sequence these for a person with low concentration. For each, tell me the cost of delaying it by one day, and which one I should renegotiate rather than drop." The cost-of-delay column is the one people never compute for themselves.'
  },

  {
    id: 'friend-money',
    title: 'The loan you already regret',
    domain: 'Money',
    accent: 'clay',
    difficulty: 'Hard',
    skills: ['boundaries', 'money', 'communication'],
    situations: ['conflict-family-money'],
    setup: [
      'A close friend borrowed €1,200 from you seven months ago, promising three months. They have not mentioned it since.',
      'You have seen them post a holiday. You need the money — not desperately, but it is the reason you have not fixed your car.',
      'They are one of maybe three people you would call in a real crisis.'
    ],
    question: 'What do you do?',
    options: [
      {
        key: 'A',
        text: 'Say nothing. The friendship is worth more than €1,200.',
        grade: 'poor',
        consequence: 'The resentment does not stay where you put it. It leaks into how you read their texts, whether you go to their birthday, how generous you feel next time. The friendship degrades anyway, just untraceably.',
        tradeoff: 'You avoided one hard conversation and accepted a slow, unattributable decline instead.',
        hidden: 'You are not choosing between money and friendship. You are choosing between a defined discomfort now and an undefined corrosion later. The €1,200 has already stopped being about money.',
        expert: 'Unspoken debt is the most reliable friendship-killer there is, precisely because nobody can name what went wrong. If you genuinely intend to forgive it, say so out loud and close it. Silence is not forgiveness.'
      },
      {
        key: 'B',
        text: 'Ask directly and warmly, in person, with a specific proposal for repayment.',
        grade: 'best',
        consequence: 'Most people in this position are avoiding an awkward conversation, not planning to keep the money. A specific, easy path — €200 a month, starting whenever — usually gets taken with relief.',
        tradeoff: 'A genuinely uncomfortable ten minutes, and a small risk of a bad reaction that tells you something you would rather not know.',
        hidden: 'The proposal is the part that matters. "Do you have any idea when?" invites shame and vagueness. "Would €200 a month starting next month work?" invites a yes or a counter-offer. Specificity is kindness here.',
        expert: 'Warm, direct, specific, private, and once. Name the amount, name a path, and say explicitly that the friendship is not on the table: "I\'m not upset and I\'m not going anywhere. I do need to sort this out."'
      },
      {
        key: 'C',
        text: 'Send a light joke about it and see if they take the hint.',
        grade: 'risky',
        consequence: 'Hints let both of you pretend the conversation happened. They will read it as permission to keep not-mentioning it, and you will feel you already tried.',
        tradeoff: 'You minimised the awkwardness and forfeited the outcome.',
        hidden: 'Humour about money debt reliably lands as passive aggression, even when it is not meant that way. You get the social cost of raising it with none of the resolution.',
        expert: 'If a subject is uncomfortable enough that you want to joke about it, it is important enough to say plainly. Jokes are for after it is resolved.'
      },
      {
        key: 'D',
        text: 'Mention the car repair and let them make the connection.',
        grade: 'risky',
        consequence: 'You have created a situation where they must guess your meaning, and if they guess wrong you will be angrier than before.',
        tradeoff: 'You protected yourself from a direct ask and made the outcome depend on someone else\'s inference.',
        hidden: 'Indirect requests transfer the discomfort to them without transferring the information. If they miss it, you now have evidence of a slight that never happened.',
        expert: 'Adults ask. The indirect route is not more polite — it is a way of getting to be annoyed without having risked anything.'
      }
    ],
    takeaway: 'Unspoken money between friends does not stay dormant; it corrodes quietly. Ask once, warmly, with a specific and easy repayment path — or forgive it out loud and be done.',
    doNow: 'Write the single sentence you would open with. Warm, direct, specific, no joke, no apology for asking.',
    aiEdge: 'Ask AI to write three versions of the message — warm, neutral, firm — then read them aloud and pick the one that still sounds like you. Do not let it write in a register your friend has never heard from you; a suspiciously formal message about money reads as a threat.'
  }
]

export const scenarioById = id => SCENARIOS.find(s => s.id === id)

export const searchDocs = () => SCENARIOS.map(s => ({
  kind: 'scenario',
  title: s.title,
  sub: `${s.domain} · interactive scenario`,
  route: `scenario/${s.id}`,
  group: s.domain,
  body: `${s.title} ${s.domain} ${(s.skills || []).join(' ')} ${s.setup.join(' ')} ${s.question} ${s.takeaway} ${s.options.map(o => o.text).join(' ')}`
}))
