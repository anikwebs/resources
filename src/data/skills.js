/* =============================================================
   SKILLS — §10, §11.
   The other axis of the product. A situation is something that
   happens TO you. A skill is something you can get better AT.

   Every skill cross-links to:
     units[]      real lesson ids in the corpus
     situations[] real situation ids
     tools[]      real toolkit ids (src/tools)
     trees[]      real decision tree ids
     scenarios[]  real scenario ids

   Nothing here is decorative: every id is resolved at render time
   and a broken link shows as a missing row, so it gets fixed.
   ============================================================= */

export const DOMAINS = [
  {
    id: 'work',
    title: 'Work',
    short: 'Work',
    icon: 'inbox',
    accent: 'forest',
    lede: 'The meeting, the deadline, the manager, the machine that keeps breaking. Where most adult pressure actually lives.'
  },
  {
    id: 'career',
    title: 'Career',
    short: 'Career',
    icon: 'target',
    accent: 'atlas',
    lede: 'Direction, positioning, capability, money, reputation. The decisions that compound over a decade rather than a quarter.'
  },
  {
    id: 'communication',
    title: 'Communication',
    short: 'Talking',
    icon: 'chat',
    accent: 'clay',
    lede: 'Saying the difficult thing, hearing the real thing, and staying trusted afterwards.'
  },
  {
    id: 'daily',
    title: 'Daily life',
    short: 'Daily life',
    icon: 'home',
    accent: 'forest',
    lede: 'Admin, forms, health, family, the small competences that quietly decide how heavy a week feels.'
  },
  {
    id: 'money',
    title: 'Money',
    short: 'Money',
    icon: 'money',
    accent: 'council',
    lede: 'Not investing tips. The practical mechanics of income, obligation, pressure and paperwork.'
  },
  {
    id: 'learning',
    title: 'Learning & thinking',
    short: 'Thinking',
    icon: 'brain',
    accent: 'council',
    lede: 'How to find out, how to judge, how to remember, and how to know when you are wrong.'
  },
  {
    id: 'digital',
    title: 'Digital life',
    short: 'Digital',
    icon: 'cpu',
    accent: 'atlas',
    lede: 'AI, data, security, scams, reputation. The layer that now sits underneath everything else.'
  }
]

/* -------------------------------------------------------------
   LEVELS — used to sequence a skill honestly.
   ------------------------------------------------------------- */
export const LEVELS = {
  foundation: { label: 'Foundation', d: 'Nothing else works without this.' },
  core: { label: 'Core', d: 'Everyday competence. Most of the return lives here.' },
  advanced: { label: 'Advanced', d: 'Judgment under pressure and ambiguity.' }
}

/* -------------------------------------------------------------
   THE SKILLS
   ------------------------------------------------------------- */
export const SKILLS = [
  /* ================= WORK ================= */
  {
    id: 'staying-steady',
    name: 'Staying steady under pressure',
    domain: 'work',
    level: 'foundation',
    blurb: 'Create a gap between what happens and what you do. Everything else in this system depends on it.',
    why: 'Almost every expensive mistake of an adult life is made in the first ninety seconds of a bad moment. Not from lack of intelligence — from acting while flooded. The skill is not calmness. It is the four seconds before the reply.',
    signals: [
      'You send messages you would not send an hour later.',
      'Your voice changes before your judgment does.',
      'You go blank in rooms where you know the material.'
    ],
    units: ['a-1.1', 'a-1.2', 'a-1.4', 'a-1.7', 'b-1.1', 'b-1.7', 'd-07'],
    situations: ['work-boss-shouting', 'conflict-shouted-at-public', 'work-interview-blank', 'health-panic-attack', 'work-fired-blindside'],
    tools: ['reflection', 'problem-canvas'],
    trees: ['respond-now'],
    scenarios: ['late-ask'],
    practice: 'For one week, whenever you feel the heat rise, do nothing for four seconds and name the feeling silently. Do not try to feel differently. Just insert the gap.',
    remember: 'The gap is the skill. You are not trying to be calm — you are trying to be late to your own reaction.',
    aiEdge: 'Paste the message you want to send plus what happened, and ask: "What would a hostile reader assume about me from this? Rewrite it so it keeps my point and loses my temperature." Then wait an hour and choose.'
  },
  {
    id: 'priorities',
    name: 'Deciding what actually matters',
    domain: 'work',
    level: 'foundation',
    blurb: 'Not time management. The much harder skill of choosing what to abandon.',
    why: 'People rarely fail because they worked too slowly. They fail because everything was equally important, which means nothing was. Priority is a subtraction problem, and subtraction feels like loss, which is why most people avoid it and stay busy instead.',
    signals: [
      'Your list is long and your week feels random.',
      'You finish days tired with nothing you can name.',
      'Everything is urgent and nothing is finished.'
    ],
    units: ['a-5.1', 'a-5.8', 'b-1.2', 'b-5.1', 'b-5.2', 'd-22'],
    situations: ['work-impossible-deadline'],
    tools: ['priority-matrix', 'decision-matrix', 'task-decomposition', 'goal-planner'],
    trees: ['say-yes', 'say-no'],
    scenarios: ['late-ask'],
    practice: 'Write everything you think you should do this week. Choose three. Put the rest on a page titled "not this week" — and actually leave them there.',
    remember: 'If three things matter, three things matter. A list of twelve priorities is a list of zero.',
    aiEdge: 'Dump the whole unsorted list and ask: "Group these by whether they move a real outcome or only reduce my anxiety. Be blunt about the second group."'
  },
  {
    id: 'finishing',
    name: 'Actually finishing things',
    domain: 'work',
    level: 'core',
    blurb: 'Starting is a mood. Finishing is a method — and the last ten per cent is where reputations are made.',
    why: 'The market rewards completion, not effort. Most unfinished work is not blocked by difficulty but by an undefined next action and a vague definition of done.',
    signals: [
      'Many things are at ninety per cent.',
      'You restart rather than resume.',
      'You cannot say what "done" would look like.'
    ],
    units: ['a-5.2', 'a-5.8', 'b-1.3', 'b-5.2', 'b-5.3'],
    situations: ['work-impossible-deadline'],
    tools: ['task-decomposition', 'habit-planner', 'goal-planner'],
    trees: [],
    scenarios: [],
    practice: 'Take one stalled thing. Write the physical next action in under eight words, starting with a verb. Do that one action now.',
    remember: 'A task you cannot start in two minutes is not a task — it is a heading pretending to be one.',
    aiEdge: 'Ask: "Break this into next physical actions of ten minutes or less. Each must start with a verb and require no decisions I have not already made."'
  },
  {
    id: 'process-repair',
    name: 'Fixing what keeps breaking',
    domain: 'work',
    level: 'core',
    blurb: 'See the machine behind the incident, then change the machine instead of working harder inside it.',
    why: 'Recurring problems are almost never people problems; they are structure problems being absorbed by people. Heroics hide the defect and guarantee the repeat.',
    signals: [
      'The same fire, monthly.',
      'The fix depends on one person remembering.',
      'Nobody can draw how the work actually flows.'
    ],
    units: ['a-5.3', 'a-5.4', 'a-5.5', 'b-5.4', 'b-5.5', 'b-5.6', 'b-5.8'],
    situations: [],
    tools: ['problem-canvas', 'risk-analyzer', 'task-decomposition'],
    trees: ['automate'],
    scenarios: [],
    practice: 'Take the last thing that went wrong twice. Draw the five steps it passes through. Mark where it actually breaks — not where it is noticed.',
    remember: 'If the fix requires someone to remember, it is not a fix. It is a hope with a deadline.',
    aiEdge: 'Describe the process step by step and ask: "Where is this dependent on human memory or goodwill? Propose a checklist that removes those dependencies."'
  },
  {
    id: 'managing-up',
    name: 'Managing upward',
    domain: 'work',
    level: 'advanced',
    blurb: 'Give the person above you what they actually need, and make your own work legible.',
    why: 'Competent work that your manager cannot see, understand or use is close to worthless in the systems that decide your salary. This is not politics. It is translation.',
    signals: [
      'You are surprised by feedback.',
      'Your work is reallocated without warning.',
      'You hear decisions after they are made.'
    ],
    units: ['a-5.7', 'a-4.6', 'd-20', 'b-4.8'],
    situations: ['work-credit-stolen', 'conflict-performance-review-ambush', 'work-blamed-publicly'],
    tools: ['conversation-planner', 'meeting-planner', 'personal-swot'],
    trees: ['escalate'],
    scenarios: ['wrong-number'],
    practice: 'Send a five-line weekly note: what moved, what is stuck, what you need, what is at risk, what you are doing next. Do it for a month without being asked.',
    remember: 'Nobody is coming to discover your contribution. Visibility is a service you provide, not a reward you receive.',
    aiEdge: 'Paste your raw week and ask for the five-line version at the level of abstraction a busy manager reads. Then cut it further yourself.'
  },

  /* ================= CAREER ================= */
  {
    id: 'career-direction',
    name: 'Choosing a direction',
    domain: 'career',
    level: 'foundation',
    blurb: 'Replace "what is my passion" with the far more useful question of what you are willing to pay for.',
    why: 'Career paralysis usually comes from asking an unanswerable question. Direction is not discovered by introspection; it is narrowed by evidence, and evidence requires small reversible bets.',
    signals: [
      'You have been "figuring it out" for over a year.',
      'Every option looks equally plausible on paper.',
      'You are waiting for certainty before moving.'
    ],
    units: ['a-6.1', 'd-26', 'd-30', 'b-8.1'],
    situations: [],
    tools: ['career-decision', 'personal-swot', 'opportunity-cost', 'goal-planner'],
    trees: ['opportunity', 'quit'],
    scenarios: ['two-offers'],
    practice: 'Pick the two directions you keep circling. Design the smallest real test of each that costs under ten hours. Run one this month.',
    remember: 'You do not think your way to a direction. You narrow your way there, one cheap experiment at a time.',
    aiEdge: 'Ask: "For each of these directions, what would I be able to observe within six weeks that would tell me it is wrong?" Verify the suggestions against people actually doing the work.'
  },
  {
    id: 'career-capital',
    name: 'Building capability that transfers',
    domain: 'career',
    level: 'core',
    blurb: 'Accumulate skills, evidence and relationships that survive a company, a market and a technology shift.',
    why: 'Job security is a property of your options, not your employer. Options are built from demonstrable capability plus people who will vouch for it.',
    signals: [
      'Your value is tied to one company\'s internal systems.',
      'You cannot show evidence of what you can do.',
      'Your network is all inside one building.'
    ],
    units: ['a-6.1', 'd-26', 'd-27', 'a-3.5', 'b-3.6'],
    situations: ['work-fired-blindside', 'money-sudden-income-loss'],
    tools: ['personal-swot', 'learning-planner', 'goal-planner'],
    trees: ['opportunity'],
    scenarios: [],
    practice: 'List the last three things you did well. For each, write the one artefact a stranger could look at. If it does not exist, create it this month.',
    remember: 'Career capital is what you could prove to someone who does not know you, in fifteen minutes.',
    aiEdge: 'Ask AI to interrogate your evidence: "Read this achievement. What would a sceptical hiring manager ask to check that I actually did it?" It must never invent experience for you.'
  },
  {
    id: 'hiring',
    name: 'Getting hired',
    domain: 'career',
    level: 'core',
    blurb: 'CVs, applications and interviews treated as a matching problem, not a performance.',
    why: 'The screen is twenty seconds and mostly mechanical; the interview is a search for evidence and risk. Understanding what each stage is actually filtering for removes most of the anxiety.',
    signals: [
      'You send many applications and hear little.',
      'You perform worse in interviews than in the job.',
      'Your CV describes duties rather than results.'
    ],
    units: ['d-26', 'd-15', 'a-4.2'],
    situations: ['work-interview-blank'],
    tools: ['conversation-planner', 'negotiation-planner', 'personal-swot'],
    trees: ['opportunity', 'negotiate'],
    scenarios: ['two-offers'],
    practice: 'Take one real job description. Rewrite your top three bullets so each names an action, a number and a consequence. No adjectives.',
    remember: 'Nobody is buying your effort. They are buying a reduction in their risk.',
    aiEdge: 'Paste the job description and your real CV and ask for the gap list plus likely interview questions. Never let it add experience you do not have — that is the one unrecoverable mistake.'
  },
  {
    id: 'pay',
    name: 'Negotiating pay and terms',
    domain: 'career',
    level: 'advanced',
    blurb: 'Ask well, once, with information — and know what you will do if the answer is no.',
    why: 'Compensation conversations are lost in preparation, not in the room. Most people negotiate against a feeling instead of a number and a walk-away.',
    signals: [
      'You have never asked.',
      'You do not know the market band for your role.',
      'You would accept anything rather than sit in the silence.'
    ],
    units: ['a-4.7', 'b-4.7', 'd-18'],
    situations: [],
    tools: ['negotiation-planner', 'decision-matrix', 'opportunity-cost'],
    trees: ['negotiate', 'opportunity'],
    scenarios: ['two-offers'],
    practice: 'Write your number, your evidence, your walk-away and the exact sentence you will say. Read it aloud until it sounds ordinary.',
    remember: 'A negotiation without a walk-away is a request. Both are legitimate — but do not confuse which one you are making.',
    aiEdge: 'Have AI role-play the most sceptical version of your manager for eight turns. Ask it to attack your weakest justification, not to reassure you.'
  },

  /* ================= COMMUNICATION ================= */
  {
    id: 'clarity',
    name: 'Being understood the first time',
    domain: 'communication',
    level: 'foundation',
    blurb: 'Point first. Then context. Then detail — only if wanted.',
    why: 'Most workplace friction is not disagreement, it is ambiguity. Leading with the point respects the reader\'s attention and makes disagreement possible, which is what you actually want.',
    signals: [
      'People reply to the wrong part of your message.',
      'You get "so what do you need from me?"',
      'Your emails are read twice or not at all.'
    ],
    units: ['a-4.2', 'b-4.3', 'b-4.4', 'd-16'],
    situations: [],
    tools: ['conversation-planner', 'meeting-planner'],
    trees: [],
    scenarios: [],
    practice: 'Take your last long message. Rewrite it so the first sentence contains the ask and the deadline. Notice how much of the rest is unnecessary.',
    remember: 'Burying the ask is not politeness. It transfers your work onto the reader.',
    aiEdge: 'Ask: "What is the actual request in this message? Rewrite it in 90 words with the request first." If it cannot find your request, neither could your reader.'
  },
  {
    id: 'listening',
    name: 'Listening well enough to repeat it',
    domain: 'communication',
    level: 'foundation',
    blurb: 'The test is not attention. The test is whether you can say their position back so accurately they agree with your version.',
    why: 'Almost nobody does this, which is why it works. Being accurately understood lowers people\'s defences faster than any persuasion technique.',
    signals: [
      'You rehearse your reply while they speak.',
      'Arguments loop back to the same misunderstanding.',
      'You are often told "that is not what I said".'
    ],
    units: ['a-4.3', 'b-4.1', 'd-15'],
    situations: ['conflict-friend-betrayal', 'life-child-in-trouble'],
    tools: ['conversation-planner'],
    trees: [],
    scenarios: [],
    practice: 'In your next disagreement, before answering, say: "Let me check I have this right —" and summarise. Do not add "but".',
    remember: 'You have not listened until you could argue their side better than they did.',
    aiEdge: 'After a hard conversation, write both positions and ask AI to steel-man theirs. If its version is stronger than yours, you were not listening.'
  },
  {
    id: 'hard-conversations',
    name: 'Having the difficult conversation',
    domain: 'communication',
    level: 'core',
    blurb: 'Say the true thing, early, in the plainest available language, and stay in the room afterwards.',
    why: 'The cost of a difficult conversation grows every week you delay it, and the version you eventually have is worse than the one you avoided.',
    signals: [
      'You are managing your feelings about someone instead of talking to them.',
      'You rehearse conversations you never have.',
      'Small resentments have become a settled opinion.'
    ],
    units: ['a-4.4', 'a-4.8', 'b-4.5', 'd-17'],
    situations: ['conflict-friend-betrayal', 'conflict-family-money', 'life-relationship-ending', 'health-someone-suicidal', 'life-friend-in-abusive-relationship'],
    tools: ['conversation-planner', 'scenario-simulator'],
    trees: ['respond-now'],
    scenarios: ['friend-money', 'wrong-number'],
    practice: 'Write your opening two sentences. First names the observable thing, second names what you want. No history, no diagnosis of their character.',
    remember: 'Say the thing in the first minute. Everything you delay you will say worse.',
    aiEdge: 'Rehearse with AI playing them at their most defensive. Ask it to interrupt, deflect and get emotional — a compliant role-play teaches you nothing.'
  },
  {
    id: 'saying-no',
    name: 'Saying no and holding the line',
    domain: 'communication',
    level: 'core',
    blurb: 'Decline without apology, drama or a paragraph of justification — and survive the pause.',
    why: 'Every unearned yes is borrowed from a commitment you already made. People who cannot decline do not have more time; they have worse-kept promises.',
    signals: [
      'You agree and then resent it.',
      'You over-explain your refusals.',
      'You are the reliable person who is quietly falling behind.'
    ],
    units: ['b-4.6', 'a-4.7', 'd-17'],
    situations: ['people-guilt-tripped', 'people-pressure-sale', 'money-contract-pressure', 'work-impossible-deadline'],
    tools: ['conversation-planner', 'priority-matrix'],
    trees: ['say-no', 'say-yes'],
    scenarios: ['late-ask'],
    practice: 'Write one refusal sentence you would actually say out loud. Then delete every clause that explains yourself. What remains is the sentence.',
    remember: 'A no with a reason invites negotiation of the reason. A no with an alternative is a professional act.',
    aiEdge: 'Ask for three refusals — relationship-protecting, deadline-protecting, and both — then pick the one that sounds like you rather than the smoothest.'
  },
  {
    id: 'influence',
    name: 'Influence without manipulation',
    domain: 'communication',
    level: 'advanced',
    blurb: 'Make it easy for people to agree with you for their own reasons.',
    why: 'The line between influence and manipulation is whether the other person would still consent if they could see your method. That test is worth applying to yourself often.',
    signals: [
      'You are right and ignored.',
      'You win arguments and lose decisions.',
      'You rely on authority you do not have.'
    ],
    units: ['a-4.6', 'd-19', 'a-4.7'],
    situations: ['work-credit-stolen', 'people-love-bombing'],
    tools: ['conversation-planner', 'negotiation-planner', 'credibility-checker'],
    trees: ['escalate'],
    scenarios: ['wrong-number'],
    practice: 'Take a proposal that was rejected. Rewrite it in terms of what the decider is measured on. Change nothing about the substance.',
    remember: 'If your method only works while hidden, it is not influence.',
    aiEdge: 'Ask: "Restate my proposal from the point of view of each stakeholder\'s incentives. Where does it cost them something I have not acknowledged?"'
  },

  /* ================= DAILY LIFE ================= */
  {
    id: 'admin',
    name: 'Handling official life',
    domain: 'daily',
    level: 'foundation',
    blurb: 'Forms, letters, appeals, complaints, deadlines. The competence nobody teaches and everybody needs.',
    why: 'Institutions do not respond to distress; they respond to process. Knowing the mechanism turns a frightening letter into a task with a due date.',
    signals: [
      'Official letters go unopened.',
      'You accept first refusals as final.',
      'You do not know what a paper trail looks like.'
    ],
    units: ['b-3.2', 'a-3.2', 'a-3.4'],
    situations: ['money-landlord-eviction', 'money-debt-collector', 'health-not-being-listened-to', 'conflict-neighbour-feud'],
    tools: ['problem-canvas', 'task-decomposition', 'credibility-checker'],
    trees: ['escalate', 'trust-info'],
    scenarios: [],
    practice: 'Take the letter you are avoiding. Write three lines: what they want, by when, what happens if you do nothing. The fear usually shrinks on contact.',
    remember: 'The first no is usually the front desk, not the institution. Ask who decides and what the process is called.',
    aiEdge: 'Paste the letter and ask: "What is this actually asking, what are my options, and what is the deadline?" Then verify the rules against the official source — never act on the summary alone.'
  },
  {
    id: 'health-advocacy',
    name: 'Being taken seriously about health',
    domain: 'daily',
    level: 'core',
    blurb: 'Prepare, describe precisely, ask the documented question, and escalate through the real channel.',
    why: 'Consultations are short and evidence-driven. Vague description gets vague care; precise timelines and a written concern change the interaction measurably.',
    signals: [
      'You leave appointments having not said the main thing.',
      'You are told it is stress without examination.',
      'You do not know how to ask for a second opinion.'
    ],
    units: ['b-4.3', 'a-4.2'],
    situations: ['health-not-being-listened-to', 'health-bad-diagnosis', 'health-burnout-collapse', 'health-panic-attack'],
    tools: ['conversation-planner', 'reflection'],
    trees: ['respond-now'],
    scenarios: [],
    practice: 'Write your symptom in one sentence with onset, frequency, severity and what it stops you doing. Take it in on paper.',
    remember: '"I would like my concern and your reasoning recorded in my notes" is the single most useful sentence in a medical room.',
    aiEdge: 'Use AI to organise your timeline into a clear one-page summary. It is not a diagnostic tool and cannot examine you; treat any clinical claim it makes as unverified.'
  },
  {
    id: 'family',
    name: 'Family, love and obligation',
    domain: 'daily',
    level: 'advanced',
    blurb: 'Boundaries with people you cannot resign from, and honesty that does not detonate.',
    why: 'Family conflict has no exit, so tactics that work at work — escalation, formality, distance — often make things permanently worse. Different rules apply.',
    signals: [
      'The same argument, for years, with different content.',
      'You are the one who always concedes, or never does.',
      'You avoid a person rather than a topic.'
    ],
    units: ['a-4.8', 'a-8.5', 'd-17'],
    situations: ['conflict-family-money', 'life-parent-declining', 'life-child-in-trouble', 'life-relationship-ending', 'life-funeral-and-grief'],
    tools: ['conversation-planner', 'reflection', 'decision-matrix'],
    trees: ['respond-now'],
    scenarios: ['friend-money'],
    practice: 'Name one boundary you have never said out loud. Write it as a request about behaviour, not a verdict about character.',
    remember: 'You can hold a boundary and stay warm. Most people believe they must choose, and choose badly.',
    aiEdge: 'Ask AI for the version of your sentence that a person who loves you but feels criticised could still hear. Then say it in your own words.'
  },

  /* ================= MONEY ================= */
  {
    id: 'money-triage',
    name: 'Money under pressure',
    domain: 'money',
    level: 'foundation',
    blurb: 'What to pay, what to delay, who to tell, and in what order — when there is not enough.',
    why: 'In a shortfall, the instinct is silence, and silence is the single most expensive choice available. Priority of obligations is knowable, and disclosure buys options.',
    signals: [
      'You are avoiding the balance rather than reading it.',
      'You are paying whoever shouts loudest.',
      'You have not told anyone who could help.'
    ],
    units: ['d-31'],
    situations: ['money-cannot-pay-rent', 'money-sudden-income-loss', 'money-debt-collector', 'digital-bank-fraud'],
    tools: ['priority-matrix', 'decision-matrix', 'risk-analyzer'],
    trees: ['buy-this'],
    scenarios: ['friend-money'],
    practice: 'List every obligation this month with amount, date and consequence of missing it. Rank by consequence, not by anxiety.',
    remember: 'Housing, food, medication, then legal obligations, then everything else. Tell the creditor before the date, not after.',
    aiEdge: 'Ask for a triage order given your list and the consequence of each miss. Verify any legal or benefit claim it makes against the official source before acting.'
  },
  {
    id: 'money-decisions',
    name: 'Spending and committing well',
    domain: 'money',
    level: 'core',
    blurb: 'Purchases, contracts, subscriptions and commitments, judged before the emotion arrives.',
    why: 'Most financial damage is not caused by big investments but by recurring commitments entered casually and reviewed never.',
    signals: [
      'You do not know your monthly committed spend.',
      'You decide under time pressure created by the seller.',
      'You justify purchases after making them.'
    ],
    units: ['a-7.2', 'b-7.5', 'd-31'],
    situations: ['money-contract-pressure', 'people-pressure-sale'],
    tools: ['opportunity-cost', 'decision-matrix', 'risk-analyzer'],
    trees: ['buy-this'],
    scenarios: [],
    practice: 'Write your committed monthly outgoings from memory, then check. The gap is the number that matters.',
    remember: 'Urgency created by the person selling is not urgency. It is a technique.',
    aiEdge: 'Ask: "What is the total cost of this over three years, including renewal, exit fees and the cost of switching later?"'
  },
  {
    id: 'authority',
    name: 'Dealing with authority and legal pressure',
    domain: 'money',
    level: 'advanced',
    blurb: 'Police, landlords, employers, collectors, officials. What to say, what not to say, and when to stop talking.',
    why: 'These interactions are governed by process and record. Cooperativeness is not the same as compliance, and improvised speech in a formal setting is the most common self-inflicted wound.',
    signals: [
      'You explain yourself to fill silence.',
      'You agree verbally to things you have not read.',
      'You do not know what you are required to provide.'
    ],
    units: ['a-7.8', 'd-44'],
    situations: ['money-police-questioning', 'money-landlord-eviction', 'money-debt-collector', 'people-authority-impersonation', 'conflict-accused-falsely'],
    tools: ['credibility-checker', 'risk-analyzer', 'conversation-planner'],
    trees: ['escalate', 'trust-info'],
    scenarios: [],
    practice: 'Memorise one sentence: "I want to cooperate properly, and I am going to get advice before I answer." Say it out loud until it is available under stress.',
    remember: 'Politeness costs nothing. Improvisation in a formal process can cost everything. Get it in writing; give it in writing.',
    aiEdge: 'Use AI to understand the process and prepare questions — never as a substitute for advice where your liberty, home, licence or children are at stake.'
  },

  /* ================= LEARNING & THINKING ================= */
  {
    id: 'find-out',
    name: 'Finding out anything',
    domain: 'learning',
    level: 'foundation',
    blurb: 'Search, sources, people, primary documents. The core resourcefulness move.',
    why: 'Capability is mostly the speed at which you can go from "I do not know" to "I have a usable answer". That speed is a learnable technique, not a trait.',
    signals: [
      'You ask people things you could look up in four minutes.',
      'You stop at the first page of results.',
      'You cannot tell a primary source from a summary of one.'
    ],
    units: ['a-3.1', 'a-3.2', 'a-3.4', 'b-2.7', 'b-3.2', 'd-11'],
    situations: [],
    tools: ['credibility-checker', 'problem-canvas', 'learning-planner'],
    trees: ['trust-info'],
    scenarios: [],
    practice: 'Pick something you have been vaguely confused about. Give it twenty timed minutes and write four sentences of what you now know and how you know it.',
    remember: 'The question "who would already know this?" beats an hour of searching more often than it should.',
    aiEdge: 'Use AI to generate the map — terms, likely sources, who the authorities are — then go and read the primary material yourself. Never cite what you have not opened.'
  },
  {
    id: 'verify',
    name: 'Judging whether something is true',
    domain: 'learning',
    level: 'foundation',
    blurb: 'Claims, statistics, screenshots, confident strangers and fluent machines.',
    why: 'The volume of plausible false material now exceeds anyone\'s capacity to check by instinct. A repeatable verification habit is basic hygiene, not scepticism as a personality.',
    signals: [
      'You share things because they feel right.',
      'You cannot say where a belief came from.',
      'A confident tone convinces you.'
    ],
    units: ['a-3.3', 'a-2.1', 'a-6.4', 'a-6.6', 'b-2.8', 'd-37'],
    situations: ['digital-deepfake-voice', 'people-authority-impersonation', 'digital-lied-about-online'],
    tools: ['credibility-checker'],
    trees: ['trust-info', 'use-ai'],
    scenarios: ['ai-said-so'],
    practice: 'Take a claim you believe and find its original source. Not a citation of it — the thing itself. Note how often the chain breaks.',
    remember: 'Confidence is not evidence. Fluency is not accuracy. Ask what would have to be true, then check that.',
    aiEdge: 'Ask the assistant to attack its own answer: "Review that as a hostile reviewer. List every claim you cannot support and everything I must verify independently."'
  },
  {
    id: 'thinking',
    name: 'Thinking clearly',
    domain: 'learning',
    level: 'core',
    blurb: 'Facts from stories, arguments from vibes, and your own reasoning inspected honestly.',
    why: 'Bias is not stupidity; it is the normal operation of a mind under load. You cannot remove it, but you can install checks that catch its most expensive forms.',
    signals: [
      'You reach conclusions before evidence.',
      'You cannot state the strongest opposing case.',
      'You change positions only when embarrassed.'
    ],
    units: ['a-2.1', 'a-2.4', 'a-2.6', 'a-2.7', 'a-2.8', 'b-2.3', 'b-2.5', 'd-09'],
    situations: ['people-gaslit-partner'],
    tools: ['problem-canvas', 'decision-matrix', 'reflection'],
    trees: ['trust-info'],
    scenarios: ['ai-said-so'],
    practice: 'Write the strongest version of the argument you disagree with most. Show it to someone who holds it and ask if you got it right.',
    remember: 'If you cannot state the other side well enough for them to agree with your statement, you are arguing with a cartoon.',
    aiEdge: 'Ask: "Steel-man the position I am rejecting, then list the three weakest links in my own reasoning." Sit with the answer before defending.'
  },
  {
    id: 'learning-fast',
    name: 'Learning something fast',
    domain: 'learning',
    level: 'core',
    blurb: 'Get to useful in ninety minutes; get to competent in a month, deliberately.',
    why: 'Adults rarely need mastery — they need functional capability by Thursday. Learning designed around a real deliverable beats learning designed around a syllabus.',
    signals: [
      'You consume material and cannot do anything new.',
      'You start at chapter one of everything.',
      'You confuse familiarity with skill.'
    ],
    units: ['a-3.5', 'b-3.6', 'd-12', 'd-13'],
    situations: [],
    tools: ['learning-planner', 'goal-planner', 'habit-planner'],
    trees: [],
    scenarios: [],
    practice: 'Choose one skill. Define the smallest real thing you must produce with it. Work backwards from that, not forwards from lesson one.',
    remember: 'Learning without production is entertainment. Name the artefact first.',
    aiEdge: 'Ask AI to build a ninety-minute path to your specific deliverable, then quiz you on application rather than recall. Recall tests flatter you.'
  },
  {
    id: 'deciding',
    name: 'Making better decisions',
    domain: 'learning',
    level: 'advanced',
    blurb: 'Reversibility, criteria, premortems, second-order effects and calibrated confidence.',
    why: 'The quality of a life is largely the quality of a few dozen decisions. Most were made without criteria written down, which is why they were unreviewable.',
    signals: [
      'You decide by whoever spoke last.',
      'You cannot reconstruct why you chose something.',
      'You treat reversible and irreversible choices the same way.'
    ],
    units: ['a-7.1', 'a-7.2', 'a-7.4', 'a-7.5', 'a-7.6', 'a-7.7', 'b-7.1', 'b-7.6', 'b-7.7', 'd-29', 'd-30'],
    situations: [],
    tools: ['decision-matrix', 'risk-analyzer', 'opportunity-cost', 'career-decision', 'problem-canvas'],
    trees: ['say-yes', 'quit', 'opportunity', 'buy-this'],
    scenarios: ['two-offers', 'shrinking-window'],
    practice: 'Before your next real decision, write the criteria and your predicted outcome with a confidence percentage. Review it in a month.',
    remember: 'Ask first whether the door swings both ways. Two-way doors deserve speed; one-way doors deserve a premortem.',
    aiEdge: 'Ask for the premortem: "It is six months later and this failed. Write the three most likely stories of how." Then decide what you would change now.'
  },

  /* ================= DIGITAL LIFE ================= */
  {
    id: 'ai-fluency',
    name: 'Using AI as a genuine multiplier',
    domain: 'digital',
    level: 'core',
    blurb: 'Context, decomposition, verification, judgment. The workflow rather than the prompt trick.',
    why: 'The gap between people who get real leverage from these tools and people who get plausible mush is almost entirely about context supplied and verification performed.',
    signals: [
      'You ask one-line questions and get generic answers.',
      'You paste output without reading it critically.',
      'You have never checked a number it produced.'
    ],
    units: ['a-6.2', 'a-6.3', 'a-6.4', 'b-6.2', 'b-6.4', 'd-35', 'd-36', 'd-38'],
    situations: [],
    tools: ['problem-canvas', 'credibility-checker', 'task-decomposition'],
    trees: ['use-ai'],
    scenarios: [],
    practice: 'Take a real task. Write the context block — goal, context, constraints, examples, output format, criteria — before opening any assistant.',
    remember: 'The model is a capable stranger with no access to your life. Everything useful you get depends on what you tell it and what you check.',
    aiEdge: 'This whole section is the AI edge — start with the eleven-step workflow, then the context template, then the verification discipline.'
  },
  {
    id: 'automation',
    name: 'Removing work that should not exist',
    domain: 'digital',
    level: 'advanced',
    blurb: 'Eliminate, simplify, delegate, standardise, AI-assist, automate — in that order.',
    why: 'Automating a task that should have been deleted is worse than doing it manually: it now runs forever and someone will maintain it for years.',
    signals: [
      'You are faster at work nobody needed.',
      'You have automations you no longer understand.',
      'You never ask whether the output is read.'
    ],
    units: ['a-6.8', 'b-6.8', 'd-39'],
    situations: [],
    tools: ['task-decomposition', 'priority-matrix', 'risk-analyzer'],
    trees: ['automate'],
    scenarios: [],
    practice: 'Take your most repeated task. Ask, in order: could it stop, could it be simpler, could someone else own it, could it be a checklist, could AI draft it, should it be automated.',
    remember: 'The first question is never "how do I automate this". It is "what happens if this simply stops".',
    aiEdge: 'Ask AI to identify which steps require judgment and which are mechanical. Automate only the second kind, and keep a manual check on the boundary.'
  },
  {
    id: 'security',
    name: 'Digital self-defence',
    domain: 'digital',
    level: 'foundation',
    blurb: 'Accounts, scams, deepfaked voices, ransom notes and reputation attacks.',
    why: 'The attacks that work are not technical; they are emotional and time-pressured. A handful of mechanical rules defeats most of them regardless of how convincing the story is.',
    signals: [
      'You reuse passwords.',
      'Urgency makes you act rather than pause.',
      'You would not know what to do in the first hour of a breach.'
    ],
    units: ['a-6.7', 'b-6.7', 'd-42', 'd-43'],
    situations: ['digital-account-hacked', 'digital-bank-fraud', 'digital-deepfake-voice', 'digital-ransomware-work', 'digital-sextortion', 'people-authority-impersonation'],
    tools: ['credibility-checker', 'risk-analyzer'],
    trees: ['trust-info', 'respond-now'],
    scenarios: [],
    practice: 'Turn on two-factor authentication for email and banking today. Agree a verbal callback rule with your family this week.',
    remember: 'Nobody legitimate needs a decision in the next four minutes. Hang up and call back on a number you already had.',
    aiEdge: 'Paste a suspicious message and ask which pressure techniques it uses. Never paste account numbers, passwords or identity documents into any assistant.'
  },
  {
    id: 'reputation',
    name: 'Reputation and being talked about',
    domain: 'digital',
    level: 'advanced',
    blurb: 'Mobs, lies, screenshots and the minimum viable response.',
    why: 'The instinct to respond fully and immediately is almost always wrong; volume of response is what extends a story\'s life.',
    signals: [
      'You draft replies you do not send, for hours.',
      'You want to correct every wrong detail.',
      'You are arguing with anonymous accounts.'
    ],
    units: ['d-27', 'd-43', 'a-8.2'],
    situations: ['digital-lied-about-online', 'people-mob-online', 'conflict-accused-falsely', 'life-social-humiliation'],
    tools: ['risk-analyzer', 'conversation-planner', 'reflection'],
    trees: ['respond-now'],
    scenarios: [],
    practice: 'Write the one-paragraph factual correction you would publish. Then decide whether publishing it reaches anyone who matters.',
    remember: 'Answer the people who decide things. Do not feed the people who only comment.',
    aiEdge: 'Ask for the shortest defensible statement of fact, then ask what it would look like screenshotted out of context. Both answers matter.'
  }
]

/* -------------------------------------------------------------
   QUERIES
   ------------------------------------------------------------- */
export const skillById = id => SKILLS.find(s => s.id === id)
export const skillsOfDomain = d => SKILLS.filter(s => s.domain === d)
export const domainById = id => DOMAINS.find(d => d.id === id)

/** Which skills reference a given situation — powers "the skill behind this". */
export const skillsForSituation = sid => SKILLS.filter(s => (s.situations || []).includes(sid))

/** Which skills reference a given lesson id. */
export const skillsForUnit = uid => SKILLS.filter(s => (s.units || []).includes(uid))

/** Which skills use a given toolkit id. */
export const skillsForTool = tid => SKILLS.filter(s => (s.tools || []).includes(tid))

/** Every unit id referenced by a skill's domain — used for domain progress. */
export function domainUnits (domainId) {
  const out = new Set()
  for (const s of skillsOfDomain(domainId)) (s.units || []).forEach(u => out.add(u))
  return [...out]
}

export function skillStats (s) {
  return {
    units: (s.units || []).length,
    situations: (s.situations || []).length,
    tools: (s.tools || []).length,
    trees: (s.trees || []).length,
    scenarios: (s.scenarios || []).length
  }
}

/** Docs for the global search index. */
export const searchDocs = () => [
  ...SKILLS.map(s => ({
    kind: 'page',
    title: s.name,
    sub: `Skill · ${(domainById(s.domain) || {}).title || ''}`,
    route: `skill/${s.id}`,
    group: 'Skills',
    body: [s.name, s.blurb, s.why, (s.signals || []).join(' '), s.practice, s.remember].join(' ')
  })),
  ...DOMAINS.map(d => ({
    kind: 'page',
    title: d.title,
    sub: 'Skill area',
    route: `skills/${d.id}`,
    group: 'Skills',
    body: `${d.title} ${d.lede} ${skillsOfDomain(d.id).map(s => s.name).join(' ')}`
  }))
]
