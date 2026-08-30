/* =============================================================
   SKILLS — second volume.

   Same shape as SKILLS in skills.js, kept in its own module purely
   so neither file becomes unreadable. skills.js concatenates the
   two, so everything downstream (search, progress, cross-links,
   verify-content.mjs) sees one flat list and needs no changes.

   Every units[] / situations[] / tools[] / trees[] / scenarios[]
   id is resolved by scripts/verify-content.mjs — a typo here fails
   the build rather than rendering an empty row.
   ============================================================= */

export const SKILLS_MORE = [
  /* ================= WORK ================= */
  {
    id: 'writing-that-works',
    name: 'Writing that gets a decision',
    domain: 'work',
    level: 'core',
    blurb: 'Not elegant prose. Writing that lets a busy person say yes, no or here-is-the-blocker without needing a second message.',
    why: 'Most professional writing fails mechanically rather than stylistically: the reader finishes it not knowing what they are being asked for. The people who get quick answers are almost never the best writers in the building — they are the ones who put the ask where the reader will actually see it, and who make the decision cheap to make.',
    signals: [
      'People reply asking what you want.',
      'Your updates get read and nothing changes.',
      'You write long because you are unsure, and the length hides the uncertainty.',
      'Decisions you asked for in writing come back weeks later as "remind me?"'
    ],
    units: ['a-4.2', 'b-4.4', 'a-7.7', 'd-16', 'b-5.6'],
    situations: ['work-impossible-deadline', 'work-credit-stolen', 'money-contract-pressure', 'work-asked-to-do-something-wrong'],
    tools: ['email-pressure-test', 'conversation-planner', 'task-decomposition'],
    trees: ['escalate'],
    scenarios: ['late-ask'],
    practice: 'Take the last message you sent that did not get a clean answer. Rewrite it so the first sentence contains the decision you want and the deadline, then cut everything the reader does not need to make that decision. It will usually be about half.',
    remember: 'Put the ask in the first two lines and the deadline in the same sentence. Background is for people who ask for it.',
    aiEdge: 'Paste your draft and ask: "You are the recipient and you have forty seconds. What am I asking you to do, by when, and what would stop you doing it?" If the answer is vague, the draft is at fault, not the reader. Then ask for a version half the length that keeps every number.'
  },
  {
    id: 'delegating',
    name: 'Handing work over so it comes back right',
    domain: 'work',
    level: 'core',
    blurb: 'The difference between giving someone a task and giving someone the outcome, the constraints and the authority to hit it.',
    why: 'People do not resist delegating because they are control freaks. They resist because the last three times it came back wrong and cost more to fix than to have done. That is a briefing failure, not a people failure. A handover stating the outcome, the constraints, the check-in point and what the person may decide alone will survive contact; one stating only the task will not.',
    signals: [
      'You are the bottleneck on things that are not your job.',
      'Work comes back technically complete and practically useless.',
      'You take things back rather than send them back.',
      'You are busy and the people around you are waiting.'
    ],
    units: ['a-5.6', 'b-5.7', 'b-5.6', 'd-21', 'a-5.8'],
    situations: ['work-team-member-underperforming', 'work-impossible-deadline', 'work-restructure-announced'],
    tools: ['task-decomposition', 'time-audit', 'conversation-planner'],
    trees: ['escalate'],
    scenarios: ['silent-team'],
    practice: 'Pick one thing you keep doing yourself. Write the handover in four lines: the outcome in one sentence, the two constraints that matter, what they may decide without you, and the date you will look at it. Then hand it over and do not touch it before that date.',
    remember: 'Delegate the outcome and the boundaries, not the steps. If you have to specify the steps, you have not delegated — you have queued.',
    aiEdge: 'Describe the task and who is taking it, then ask: "Write the briefing as four lines: outcome, constraints, decisions they own, check-in date. Then list five ways a reasonable person could read this briefing and produce something I would reject." Fix those five ambiguities before you send it.'
  },

  /* ================= CAREER ================= */
  {
    id: 'new-role',
    name: 'The first ninety days in a new role',
    domain: 'career',
    level: 'core',
    blurb: 'A deliberate sequence for arriving: learn the machine, land one visible win, then reform something.',
    why: 'Judgments about you form in weeks and are revised in years. Most people spend the first month either hiding until they feel competent or announcing changes before understanding why things are as they are. Both are expensive. The window is real and it rewards a specific order.',
    signals: [
      'You are three months in and cannot name what you are measured on.',
      'You have opinions about the process and no credit yet.',
      'You are waiting to be told what matters.',
      'You have met your team and nobody adjacent to it.'
    ],
    units: ['d-26', 'a-5.4', 'a-4.1', 'b-3.3', 'd-27'],
    situations: ['work-restructure-announced', 'work-impossible-deadline', 'life-moving-to-new-country'],
    tools: ['goal-planner', 'priority-matrix', 'meeting-planner'],
    trees: ['say-yes'],
    scenarios: ['late-ask'],
    practice: 'In week one, ask five people the same two questions: "What would make my first three months obviously useful to you?" and "What does everyone here complain about that never changes?" Write the answers verbatim. The overlap is your first project.',
    remember: 'Understand the machine before you criticise it, but land something visible before you finish understanding. Both halves matter.',
    aiEdge: 'Describe the role, the team and what you were hired to fix. Ask: "Give me a 30/60/90 plan where days 1-30 are learning and relationships only, 31-60 is one visible win I can finish alone, and 61-90 is the first change needing other people\'s cooperation. For each phase, name what would make me look naive."'
  },
  {
    id: 'reputation-inside',
    name: 'Being known for something specific',
    domain: 'career',
    level: 'advanced',
    blurb: 'Reputation is not being liked. It is what people confidently say about you when you are not in the room.',
    why: 'Opportunities are allocated by a sentence in someone else\'s head. If nobody can complete "she is the person who ___", you are considered for nothing in particular and compete on availability. The sentence is buildable, but only by repeatedly delivering the same recognisable kind of value — and by being the person who says the awkward accurate thing when it costs something.',
    signals: [
      'You are respected and never the first call.',
      'Nobody can describe what you are for in one line.',
      'You are given whatever is spare rather than what you are best at.',
      'Your best work is invisible to anyone who did not commission it.'
    ],
    units: ['d-27', 'a-6.1', 'b-3.8', 'a-8.2', 'd-48'],
    situations: ['work-credit-stolen', 'work-blamed-publicly', 'conflict-performance-review-ambush', 'work-asked-to-do-something-wrong'],
    tools: ['personal-swot', 'reflection', 'career-decision'],
    trees: ['opportunity'],
    scenarios: ['two-offers'],
    practice: 'Write the sentence you want three specific people to say about you in six months. Then name the one thing you would have to do repeatedly, visibly, for that sentence to become true. If you cannot name it, the sentence is a wish, not a position.',
    remember: 'You do not choose your reputation, but you do choose what you repeatedly do in front of witnesses. The second becomes the first.',
    aiEdge: 'List your last ten pieces of work and who saw them. Ask: "From this evidence alone, what would a colleague say I am the person for? Where is the evidence thin or contradictory, and what single kind of work would make the strongest available claim obvious?"'
  },
  {
    id: 'leaving-well',
    name: 'Leaving without burning the bridge',
    domain: 'career',
    level: 'core',
    blurb: 'Resigning, being made redundant, or walking away — handled so the relationship survives the exit.',
    why: 'The industry is smaller than it feels and references outlive the grievance. Most exit damage happens in the two weeks between the decision and the departure, done by people who have mentally left and are being honest in ways that serve nobody. There is a version of leaving that is truthful, brief and forward-looking, and it costs nothing to choose it.',
    signals: [
      'You are rehearsing the speech about what is really wrong here.',
      'You have decided and are behaving as if you have already gone.',
      'You want the exit interview to be the reckoning.',
      'You are handing over nothing because nobody asked.'
    ],
    units: ['a-4.8', 'b-4.6', 'a-8.4', 'd-30', 'a-8.2'],
    situations: ['work-restructure-announced', 'work-fired-blindside', 'money-sudden-income-loss', 'conflict-apology-owed'],
    tools: ['career-decision', 'conversation-planner', 'pre-mortem'],
    trees: ['quit'],
    scenarios: ['two-offers'],
    practice: 'Write your resignation in three sentences: that you are leaving, the last date, and one true positive thing. No reasons. Then write the handover document you would want to receive. The second one is what people remember.',
    remember: 'The exit interview is not the place to fix the company. Give the leaving date, leave the work in a state someone can pick up, and keep the grievance for a friend.',
    aiEdge: 'Draft what you actually want to say, including the anger. Then ask: "Separate this into what is true and useful to the organisation, what is true and only satisfying to me, and what I would regret in writing in two years." Send only the first column, and only if asked.'
  },

  /* ================= COMMUNICATION ================= */
  {
    id: 'speaking-up',
    name: 'Speaking in the room that matters',
    domain: 'communication',
    level: 'core',
    blurb: 'Getting a point into a fast, senior or hostile conversation — with a way in, a compressed point and a way back.',
    why: 'A great deal of capability never becomes influence because it stayed silent in the one meeting where it mattered. The barrier is rarely courage; it is not having a prepared entry, a point short enough to survive an interruption, and a plan for when someone talks over it. All three are preparable, which makes this a skill rather than a personality.',
    signals: [
      'You leave meetings having thought the right thing and said nothing.',
      'You start speaking, get interrupted, and do not return.',
      'You over-explain when you finally do speak.',
      'You send the good version by email afterwards.'
    ],
    units: ['b-4.3', 'a-4.2', 'a-4.1', 'd-16', 'a-1.8'],
    situations: ['work-blamed-publicly', 'conflict-shouted-at-public', 'work-interview-blank', 'conflict-performance-review-ambush'],
    tools: ['meeting-planner', 'conversation-planner', 'email-pressure-test'],
    trees: ['respond-now'],
    scenarios: ['angry-customer'],
    practice: 'Before your next meeting write one sentence you intend to say and the seven words you will use to get in ("Can I add one thing on that"). Say it in the first fifteen minutes. Early is easier than perfect.',
    remember: 'Have one sentence and an entry phrase. If you are interrupted, come back once with "I want to finish that thought" — once is not rude, and silence teaches the room to do it again.',
    aiEdge: 'Describe the meeting, who is in it and your point. Ask: "Compress my point to twelve words. Give me three entry phrases for a fast conversation, the most likely objection, and my one-line answer." Rehearse the twelve words out loud, not the paragraph.'
  },
  {
    id: 'giving-feedback',
    name: 'Telling someone something they will not enjoy',
    domain: 'communication',
    level: 'core',
    blurb: 'Feedback describing behaviour and consequence rather than character — so it can be acted on instead of defended against.',
    why: 'Most feedback fails because it is a verdict about a person disguised as an observation. "You need to be more professional" is unactionable and invites a defence of the self. The alternative is mechanical: the situation, the specific behaviour, the effect, and what you want instead. Less satisfying to deliver, vastly more likely to change anything.',
    signals: [
      'You save things up and deliver them all at once.',
      'Your feedback contains the words "always", "never" or "attitude".',
      'People agree with you and nothing changes.',
      'You go quiet for weeks and then go blunt.'
    ],
    units: ['a-4.5', 'b-4.5', 'a-4.8', 'd-21', 'b-3.8'],
    situations: ['work-team-member-underperforming', 'conflict-passive-aggression', 'conflict-apology-owed', 'work-blamed-publicly'],
    tools: ['conversation-planner', 'reflection', 'email-pressure-test'],
    trees: ['respond-now'],
    scenarios: ['silent-team'],
    practice: 'Write your next piece of feedback in four parts and nothing else: when and where, what they specifically did, what happened as a result, what you want instead. If any part contains an adjective about the person, delete it and write that part again.',
    remember: 'Describe the behaviour and its effect, then say what you want instead. Describe the person and you have started a fight about identity and lost the point.',
    aiEdge: 'Write what you want to say. Ask: "Rewrite as situation, behaviour, impact, request. Flag every phrase that judges who they are rather than what they did, and every claim I could not support with a specific example." Then check you can name the example.'
  },
  {
    id: 'de-escalation',
    name: 'Bringing the temperature down',
    domain: 'communication',
    level: 'advanced',
    blurb: 'Talking to someone angry, frightened or humiliated so the conversation stops getting worse.',
    why: 'An angry person is not processing argument, and the instinct to correct them is what turns a difficult moment into an incident. De-escalation is a set of concrete behaviours — slower speech, more space, naming what they feel accurately, conceding what is genuinely true — that work on a body before they work on a mind. One of the few skills here where competence is occasionally the difference between an argument and an injury.',
    signals: [
      'You match volume when someone raises theirs.',
      'You start with the correction rather than the acknowledgement.',
      'You keep talking while they are still going.',
      'You win the exchange and lose the person.'
    ],
    units: ['a-4.3', 'b-4.1', 'a-1.1', 'a-4.8', 'd-10'],
    situations: ['conflict-shouted-at-public', 'danger-aggressive-stranger', 'danger-road-rage', 'work-boss-shouting', 'people-mob-online'],
    tools: ['conversation-planner', 'risk-analyzer', 'pre-mortem'],
    trees: ['respond-now'],
    scenarios: ['angry-customer'],
    practice: 'Next time someone is angry at you, say back the most accurate version of their complaint before you say anything about whether it is fair. One sentence. Then stop and let them correct you. Most of the heat leaves in that gap.',
    remember: 'Accuracy calms people faster than agreement. Say what they mean back to them, concede the true part, drop your volume below theirs — then handle the substance.',
    aiEdge: 'Describe what the person said and what is actually true. Ask: "Give me the one sentence showing I understood their complaint accurately without conceding anything false, then the sentence stating my position without defending my character." Practise the first; most conversations never need the second.'
  },

  /* ================= DAILY LIFE ================= */
  {
    id: 'household-competence',
    name: 'Running a household without dread',
    domain: 'daily',
    level: 'foundation',
    blurb: 'The unglamorous systems — documents, renewals, repairs, who to call — that decide how heavy an ordinary week feels.',
    why: 'A surprising share of adult stress is not emotional; it is a missing document, an unopened envelope and a renewal nobody tracked. This load is almost entirely systematisable, and the return is disproportionate: the same person becomes calmer in a crisis simply because the passport is findable and the policy number is written down. Nobody teaches this, and it compounds.',
    signals: [
      'You cannot find an important document within ten minutes.',
      'Post goes unopened because opening it makes it real.',
      'You pay for things you no longer use.',
      'A small breakage becomes a three-week background worry.'
    ],
    units: ['a-5.3', 'b-5.4', 'a-1.6', 'b-5.2', 'a-5.2'],
    situations: ['money-landlord-eviction', 'crisis-flood-or-storm', 'money-insurance-refused', 'digital-account-hacked'],
    tools: ['priority-matrix', 'habit-planner', 'time-audit'],
    trees: ['buy-this'],
    scenarios: [],
    practice: 'Make one page — paper or a single note — listing where the important documents are, the four numbers you would need in an emergency, and every recurring payment with its renewal month. Forty minutes once, and it removes a whole class of worry permanently.',
    remember: 'Open the envelope the day it arrives, even if you only read it. Unopened post is a decision that gets more expensive while you avoid it.',
    aiEdge: 'Ask: "I want a one-page household index. Ask me the twelve questions whose answers I would need in an emergency or an audit, one at a time." Answering questions is far easier than inventing a list, and the ones you cannot answer are the actual finding.'
  },
  {
    id: 'body-maintenance',
    name: 'Keeping the body that does the thinking',
    domain: 'daily',
    level: 'core',
    blurb: 'Sleep, food, movement and load — treated as the input to judgment rather than a reward for finishing work.',
    why: 'Every other skill in this system degrades on four hours of sleep. Depleted people make worse decisions and then blame their character for it. This is not a wellness topic; it is the maintenance schedule for the instrument you make every decision with, and the honest version has very few rules and no supplements.',
    signals: [
      'Your worst decisions cluster at the same times of day.',
      'You treat sleep as the flexible item in the schedule.',
      'You are managing energy with caffeine and consequences with willpower.',
      'You cannot remember the last day you were not slightly behind.'
    ],
    units: ['a-1.4', 'a-1.7', 'a-1.6', 'd-07', 'b-1.7'],
    situations: ['health-burnout-collapse', 'health-panic-attack', 'health-caring-for-someone-alone', 'work-impossible-deadline'],
    tools: ['habit-planner', 'time-audit', 'reflection'],
    trees: ['say-no'],
    scenarios: [],
    practice: 'For one week, before any decision that matters, check three things silently: hours slept, hours since food, and whether you are holding tension somewhere. If two are red, delay the decision if you can and lower your confidence if you cannot.',
    remember: 'Check the instrument before you trust the reading. A depleted body does not feel like a depleted body — it feels like the situation is genuinely worse.',
    aiEdge: 'Log a fortnight of sleep, food timing and the decisions you regretted. Ask: "Where do my regretted decisions cluster against these inputs, and what is the single smallest change with the best evidence behind it?" One change, kept, beats a protocol you abandon.'
  },
  {
    id: 'emergency-readiness',
    name: 'Being useful in the first ten minutes',
    domain: 'daily',
    level: 'core',
    blurb: 'What to do, in order, when something is actually happening — before help arrives and while everyone else decides whether it is real.',
    why: 'In a genuine emergency almost everyone waits to see what other people do, which is why the first competent person changes the outcome. The useful part is not heroism; it is a short rehearsed sequence — make yourself safe, call, name one person and give them one instruction — that survives adrenaline because it was decided in advance.',
    signals: [
      'You have never thought through what you would actually do.',
      'You assume someone else has called.',
      'You would freeze on the question "what is the address?"',
      'You do not know where the stopcock, fuse box or second exit is.'
    ],
    units: ['a-5.3', 'd-28', 'b-3.7', 'a-1.1', 'b-5.4'],
    situations: ['crisis-someone-collapses', 'crisis-choking-adult', 'crisis-fire-building', 'crisis-car-crash', 'crisis-flood-or-storm', 'crisis-lost-child'],
    tools: ['pre-mortem', 'risk-analyzer', 'priority-matrix'],
    trees: ['respond-now'],
    scenarios: [],
    practice: 'Learn to say your own address and nearest landmark out loud in under five seconds. Then walk your home and find the water stopcock, the fuse box and the second exit. That is the whole drill and it takes ten minutes.',
    remember: 'Point at one specific person and give them one specific instruction. "Someone call an ambulance" is how nobody calls an ambulance.',
    aiEdge: 'Ask: "For my household and country, give me a one-page card: emergency numbers, the first three actions for choking, unconsciousness, fire and flood, and the information the operator will ask for." Print it. This is the one case where you want the answer before you need it, not during.'
  },

  /* ================= MONEY ================= */
  {
    id: 'money-negotiating',
    name: 'Asking for money and holding the number',
    domain: 'money',
    level: 'core',
    blurb: 'Salary, rates, refunds and bills — preparing a number you can justify and a walk-away you will honour.',
    why: 'Most people lose money in the ninety seconds before they name a figure, because they have not decided what the figure is and are hoping to be offered fairness. Those who do well are not more aggressive; they arrive with a number, a reason, an alternative and a line they will not cross, and they let the silence sit.',
    signals: [
      'You accept the first number to end the discomfort.',
      'You justify your ask by what you need rather than what it is worth.',
      'You have no idea what you would do if they said no.',
      'You negotiate salary and forget everything that is not salary.'
    ],
    units: ['a-4.7', 'b-4.7', 'd-18', 'a-7.2', 'd-31'],
    situations: ['money-contract-pressure', 'money-insurance-refused', 'people-pressure-sale', 'money-debt-collector', 'work-restructure-announced'],
    tools: ['negotiation-planner', 'opportunity-cost', 'money-triage'],
    trees: ['negotiate'],
    scenarios: ['two-offers', 'shrinking-window'],
    practice: 'Before your next money conversation write three numbers: what you will ask for, what you would accept, and the number at which you walk away — plus what you will actually do if you walk. Say the first number out loud once beforehand so it is not the first time you hear it.',
    remember: 'Name your number first if you have done the research, then say nothing. The silence after a number is not your problem to fill.',
    aiEdge: 'Give the market data you have, your position and the other side\'s constraints. Ask: "What is a defensible ask and why, what three non-money terms are worth more than a small rise here, and what four things will they say to make me lower it?" Prepare your answer to all four.'
  },
  {
    id: 'money-paperwork',
    name: 'Reading what you are about to sign',
    domain: 'money',
    level: 'core',
    blurb: 'Contracts, tenancies, insurance and small print — finding the four clauses that decide what happens when things go wrong.',
    why: 'Nobody reads the whole document, and that is fine, because only a handful of clauses ever matter: how it ends, what ending costs, what is excluded, and who decides a dispute. Knowing to look for exactly those turns an intimidating twelve pages into a ten-minute job — and most bad financial years start with a clause skimmed while someone waited politely.',
    signals: [
      'You sign because the other person is waiting.',
      'You have never found the exclusions section.',
      'You discover the cancellation cost when cancelling.',
      'You believe the summary email over the document.'
    ],
    units: ['a-2.5', 'a-7.8', 'd-31', 'a-3.3', 'a-7.2'],
    situations: ['money-contract-pressure', 'money-insurance-refused', 'money-landlord-eviction', 'people-pressure-sale', 'digital-privacy-exposed'],
    tools: ['risk-analyzer', 'pre-mortem', 'opportunity-cost'],
    trees: ['buy-this'],
    scenarios: ['shrinking-window'],
    practice: 'Take one agreement you are already inside — a tenancy, a subscription, a policy. Find and write down four things: how it ends, what ending costs, what is excluded, and how long you have to complain. If you cannot find one of them in ten minutes, that is worth knowing now rather than later.',
    remember: 'Read the ending, the exclusions and the dispute clause. Anyone who needs you to sign before you have read those is telling you something about the deal.',
    aiEdge: 'Paste the document and ask: "Quote verbatim the clauses covering termination, cost of termination, exclusions and dispute resolution. Then list what a reasonable person would assume is covered that this text does not cover." Verify the quotes against the document — this is exactly the task where a confident summary is dangerous.'
  },

  /* ================= LEARNING & THINKING ================= */
  {
    id: 'remembering',
    name: 'Remembering what you learn',
    domain: 'learning',
    level: 'core',
    blurb: 'Retrieval, spacing and use — so material you spent hours on is still available in six months.',
    why: 'Reading twice feels like learning and produces almost nothing durable. Retrieval — closing the book and reconstructing it badly from memory — feels like failing and produces most of the retention. This reversal is among the best-evidenced findings in learning research and almost nobody applies it, because the effective method is the one that feels worse while you do it.',
    signals: [
      'You have read a book twice and cannot summarise it.',
      'You highlight and never revisit.',
      'You can recognise the right answer but not produce it.',
      'You learn something, use it once, and lose it.'
    ],
    units: ['d-13', 'd-12', 'a-0.4', 'b-3.6', 'a-3.5'],
    situations: ['work-interview-blank', 'work-impossible-deadline', 'life-moving-to-new-country'],
    tools: ['learning-planner', 'reflection', 'habit-planner'],
    trees: [],
    scenarios: [],
    practice: 'After the next thing you read, close it and write everything you remember on one blank page, badly, without looking. Then check. The gaps you find are the entire value of the exercise, and the discomfort is the mechanism working.',
    remember: 'Close the book and reconstruct it from memory. If it feels easy you are recognising, not remembering.',
    aiEdge: 'Paste your notes and ask: "Ask me twelve questions on this, one at a time, hardest last. Do not show answers until I have attempted each, then tell me what I got wrong and what I avoided answering." The avoidance is the most useful signal it can give you.'
  },
  {
    id: 'numbers',
    name: 'Not being fooled by a number',
    domain: 'learning',
    level: 'core',
    blurb: 'Denominators, base rates, averages and the chart with a cropped axis — enough numeracy to refuse a bad claim.',
    why: 'A number is the most effective way to end an argument without being right. Most misleading figures are not fabricated; they are technically true and missing the denominator, the base rate, the sample size or the axis. Four habitual questions catch most of them, and asking those questions out loud changes what people dare to present.',
    signals: [
      'A percentage convinces you before you know of what.',
      'You have never asked what the sample was.',
      'A chart persuades you and you did not look at the axis.',
      'You cannot tell a big-sounding number from a big number.'
    ],
    units: ['a-6.6', 'c-33', 'c-22', 'b-6.6', 'a-2.6'],
    situations: ['money-contract-pressure', 'people-pressure-sale', 'digital-bank-fraud', 'money-insurance-refused', 'health-bad-diagnosis'],
    tools: ['credibility-checker', 'decision-matrix', 'opportunity-cost'],
    trees: ['trust-info'],
    scenarios: ['wrong-number', 'ai-said-so'],
    practice: 'For one week, whenever you meet a statistic, ask two questions before forming an opinion: percentage of what, and out of how many. You will discard a meaningful fraction of what you read, and that is the point.',
    remember: 'Ask "out of how many?" and "compared to what?". Most misleading numbers survive only while nobody asks either.',
    aiEdge: 'Paste the claim or chart description and ask: "What is the denominator, base rate, sample size and axis range? Which is missing, and what is the most favourable and least favourable honest reading of this figure?" The gap between those two readings is the size of the manipulation.'
  },

  /* ================= DIGITAL LIFE ================= */
  {
    id: 'ai-verification',
    name: 'Catching the confident machine',
    domain: 'digital',
    level: 'core',
    blurb: 'A firewall between what a model tells you and what you act on, proportionate to what a mistake would cost.',
    why: 'Language models are fluent by construction and accurate by coincidence, and fluency is exactly what human beings use as a proxy for competence. That mismatch is the defining new risk of this decade. The answer is not distrust, which wastes the tool; it is a graded check — cheap for low stakes, primary-source verification for anything touching money, health, law or another person\'s reputation.',
    signals: [
      'You have forwarded something a model told you without checking it.',
      'You cannot say where a fact you are repeating came from.',
      'You trust it more when it is well written.',
      'You have accepted a citation without opening it.'
    ],
    units: ['d-37', 'a-6.4', 'a-3.3', 'b-6.3', 'd-11'],
    situations: ['digital-deepfake-voice', 'digital-bank-fraud', 'people-authority-impersonation', 'health-bad-diagnosis', 'money-contract-pressure'],
    tools: ['credibility-checker', 'risk-analyzer', 'pre-mortem'],
    trees: ['use-ai', 'trust-info'],
    scenarios: ['ai-said-so', 'wrong-number'],
    practice: 'Take the last three things a model told you that you acted on and try to find the primary source for each. The one you cannot find is the one to be careful about — and the exercise recalibrates how much fluency is worth to you.',
    remember: 'Fluency is not evidence. Match the depth of your checking to the cost of being wrong, and never pass on a citation you have not opened.',
    aiEdge: 'After any answer that matters, ask in a fresh conversation: "What in the following is a verifiable fact, what is an inference, and what would you not defend? For each fact, name the primary source I should open." Then open one. A fresh conversation matters — it removes the pressure to stay consistent with what it already said.'
  },
  {
    id: 'digital-footprint',
    name: 'Owning what is findable about you',
    domain: 'digital',
    level: 'core',
    blurb: 'Auditing what a stranger, an employer or someone hostile can learn about you in twenty minutes — and reducing it deliberately.',
    why: 'Most people have never looked themselves up properly, so have no idea that their address, employer, family members and daily pattern are assembled and free. This matters at two very different scales: an employer forming an impression, and a hostile individual building a target. The audit is uncomfortable, takes an hour, and is the only way to make decisions about exposure rather than discover them.',
    signals: [
      'You have never searched your own name past the first page.',
      'Your photos carry location data you did not think about.',
      'The same password protects your email and everything else.',
      'You could not say which apps can see your contacts or location.'
    ],
    units: ['a-6.7', 'b-6.7', 'd-42', 'b-6.1', 'd-27'],
    situations: ['digital-privacy-exposed', 'digital-account-hacked', 'digital-sextortion', 'people-mob-online', 'digital-lied-about-online', 'danger-followed-street'],
    tools: ['risk-analyzer', 'credibility-checker', 'pre-mortem'],
    trees: ['trust-info'],
    scenarios: [],
    practice: 'Spend twenty minutes finding out everything about yourself using only a search engine and public profiles. Write down what you found in order of how much it would help someone who wanted to harm you. Fix the top two items this week.',
    remember: 'Your email account is the master key — protect it differently from everything else. Then reduce what is findable in order of what would actually be used against you.',
    aiEdge: 'Describe what your own audit found, without pasting anything private. Ask: "From this alone, what could someone infer about my daily pattern, my household and my employer, and which single item removes the most inference if I take it down?" Prioritising by inference beats deleting at random.'
  }
]
