/* =============================================================
   AI INTELLIGENCE CORE — frameworks.
   This app configures no AI API and calls no model. Everything
   here is a method: a workflow, a prompt you copy into whatever
   assistant you already use, a verification discipline, or a
   rehearsal structure. Nothing here pretends to be a live model.
   ============================================================= */

/* -------------------------------------------------------------
   §26 THE WORKFLOW — how a capable person actually uses AI.
   who: 'you' | 'ai' | 'both'
   ------------------------------------------------------------- */
export const AI_WORKFLOW = [
  {
    n: 1, who: 'you', title: 'State the real problem',
    d: 'Write the problem in one sentence, in plain words, before you open any assistant. Most bad AI output comes from a task that was never defined — the model answers the question you typed, not the one you have.',
    ex: 'Not "help with my CV" but "I need this CV to survive a 20-second screen for a mid-level operations role."'
  },
  {
    n: 2, who: 'both', title: 'Clarify before you generate',
    d: 'Ask the model what it needs to know. This one habit changes output quality more than any prompt template, because it forces the missing context into the open before it gets invented.',
    ex: '"Before you answer, ask me the five questions you most need answered to do this well."'
  },
  {
    n: 3, who: 'both', title: 'Decompose',
    d: 'Break the problem into parts that can each be checked. One large request produces one large blob you cannot verify. Several small ones produce work you can inspect and fix.',
    ex: '"Break this into the smallest independent steps. Number them. Do not start yet."'
  },
  {
    n: 4, who: 'you', title: 'Gather the context that only you have',
    d: 'The model knows the general case. It does not know your constraints, your history with these people, your deadline, your boss, or what already failed. That gap is where most of the value lives.',
    ex: 'Collect: goal, audience, constraints, what has already been tried, what happened.'
  },
  {
    n: 5, who: 'you', title: 'Give it the right information — in the right shape',
    d: 'Goal, context, constraints, examples, output format, evaluation criteria. Six lines of structure beats two pages of rambling every time.',
    ex: 'Use the Context Engineering template. Paste your real material, not a description of it.'
  },
  {
    n: 6, who: 'ai', title: 'Generate options, not an answer',
    d: 'A single output is a trap: you evaluate it against nothing. Three genuinely different options let you see the trade space and pick, or combine.',
    ex: '"Give me three approaches that differ in kind, not in wording. Note what each one costs."'
  },
  {
    n: 7, who: 'both', title: 'Evaluate against your criteria',
    d: 'Score the options against what you said mattered, not against how good they sound. Fluent writing is the easiest thing for a model to produce and the least informative signal available.',
    ex: '"Score each option against [my criteria]. Tell me which fails worst and why."'
  },
  {
    n: 8, who: 'you', title: 'Verify what is checkable',
    d: 'Every name, number, date, quote, citation, legal claim and calculation. This is not optional at any stake level above trivial — and confident tone tells you nothing about accuracy.',
    ex: 'Recompute the maths. Open the citation. Confirm the rule against a primary source.'
  },
  {
    n: 9, who: 'both', title: 'Improve with one specific change',
    d: 'Do not say "make it better". Name the deficiency. Vague dissatisfaction produces different mediocre output; a specific criticism produces a fix.',
    ex: '"The second paragraph buries the ask. Rewrite so the request is the first sentence."'
  },
  {
    n: 10, who: 'you', title: 'Act — and own it',
    d: 'Rewrite the opening and closing in your own voice, then send it under your own name. If you cannot defend a sentence in a meeting, cut it.',
    ex: 'Read it aloud once. Anything you would not say out loud, change.'
  },
  {
    n: 11, who: 'you', title: 'Review what actually happened',
    d: 'Did it work? What did the model get wrong? What context was missing? Save the prompt that worked. This is the step everyone skips, and it is the only one that compounds.',
    ex: 'Keep a personal file of prompts that produced good results, with a note on why.'
  }
]

/* -------------------------------------------------------------
   §36 CONTEXT ENGINEERING — the seven elements.
   ------------------------------------------------------------- */
export const CONTEXT_ELEMENTS = [
  { k: 'Goal', d: 'What outcome you need, in one sentence. Not the task — the outcome. "A reply that gets the deadline moved without damaging the relationship."', ph: 'What does success look like?' },
  { k: 'Context', d: 'The situation, the history, the people, what has already been tried and what happened. This is the part only you can supply and the part most often left out.', ph: 'What would a competent colleague need to know?' },
  { k: 'Constraints', d: 'Length, tone, what must not be said, deadline, budget, format, house style, things that are politically impossible.', ph: 'What are the hard limits?' },
  { k: 'Examples', d: 'One good example and one bad example teaches more than a paragraph of adjectives. Paste real material where you can.', ph: 'What does good look like? What does wrong look like?' },
  { k: 'Output format', d: 'Exactly what you want back: a table, five bullets, a 120-word email, a numbered plan. Unspecified format means you get an essay.', ph: 'What shape should the answer take?' },
  { k: 'Evaluation criteria', d: 'How you will judge it. Stating this makes the model self-check and gives you something to score against.', ph: 'How will I know this is good?' },
  { k: 'Verification', d: 'What you will check afterwards, and what the model should flag as uncertain.', ph: 'What must be true for me to use this?' }
]

export const CONTEXT_TEMPLATE = `GOAL
[The outcome I need, in one sentence.]

CONTEXT
[Situation, history, people involved. What has already been tried, and what happened.]

CONSTRAINTS
[Length, tone, deadline, what must not be said, format requirements.]

EXAMPLES
Good: [paste an example of what works]
Avoid: [paste or describe what does not]

OUTPUT FORMAT
[Exactly what to give me back — structure, length, sections.]

EVALUATION CRITERIA
[How I will judge this. Score your own draft against these before showing me.]

VERIFICATION
Flag anything you are uncertain about, and list what I should verify independently.
Do not invent names, numbers, dates, quotes or sources. If you do not know, say so.`

/* -------------------------------------------------------------
   §37 VERIFICATION — verify before you trust.
   ------------------------------------------------------------- */
export const VERIFY_RISKS = [
  {
    k: 'Invented facts', sev: 'critical',
    d: 'Confident, specific, entirely fabricated. Most dangerous in unfamiliar territory, because plausibility is all you have to judge by.',
    tell: 'Very specific detail with no source, delivered in the same tone as everything else.',
    check: 'Look up the specific claim, not the general topic. If a fact matters, it needs a source you have actually opened.'
  },
  {
    k: 'Fake sources', sev: 'critical',
    d: 'Real-looking citations, real journal names, real author names, in combinations that do not exist. Also real papers cited for claims they never made.',
    tell: 'A perfectly formatted reference that you have not clicked.',
    check: 'Open every citation. Confirm the paper exists, then confirm it says what was claimed.'
  },
  {
    k: 'Bad arithmetic', sev: 'high',
    d: 'Numbers that are individually plausible, do not add up, and are presented with total assurance. Percentages, compounding, unit conversion and dates are frequent failures.',
    tell: 'Any total, percentage, or projection you did not compute yourself.',
    check: 'Redo it in a spreadsheet or calculator. Every time. Sum the columns.'
  },
  {
    k: 'Outdated information', sev: 'high',
    d: 'Prices, tax rules, laws, deadlines, product features, organisational facts, medical guidance. Was true, is repeated with the same confidence.',
    tell: 'Any specific figure or rule about the current world.',
    check: 'Confirm against a dated official source. Ask the model what date its information reflects.'
  },
  {
    k: 'Missing context', sev: 'high',
    d: 'A technically correct answer for a different situation — wrong jurisdiction, wrong company size, wrong seniority, wrong country.',
    tell: 'Generic advice that never mentions your specific circumstances.',
    check: 'Ask: "Does this apply to [my exact situation]? What changes if it does not?"'
  },
  {
    k: 'False certainty', sev: 'medium',
    d: 'Contested, uncertain, or genuinely unknown things stated flatly as fact, because hedged text is less fluent.',
    tell: 'No caveats anywhere in an answer about a genuinely difficult question.',
    check: 'Ask: "What is the strongest argument against this, and how confident are you really?"'
  },
  {
    k: 'Misleading summaries', sev: 'medium',
    d: 'Accurate sentences, false overall impression. Conditions dropped, hedges removed, the exception omitted, the qualifier lost.',
    tell: 'A summary that is notably cleaner than the reality it describes.',
    check: 'Read the original for anything important. Ask what was left out of the summary.'
  },
  {
    k: 'Sycophancy', sev: 'medium',
    d: 'Agreeing with your framing, praising your plan, and adopting your assumptions — including the wrong ones.',
    tell: 'The model agrees with you. Especially when you have just pushed back.',
    check: 'Ask for the case against, in a fresh conversation, without revealing which side is yours.'
  }
]

export const VERIFY_PROMPT = `Review your previous answer as a hostile reviewer would.

1. List every factual claim, number, name, date and citation you made.
2. For each, state your actual confidence: certain / likely / uncertain / guessed.
3. Flag anything you may have invented, including sources.
4. Show every calculation step so I can check the arithmetic myself.
5. State what a well-informed critic would say is wrong with this answer.
6. List what I must verify independently before relying on it.

Do not defend the answer. Do not rewrite it. Just audit it.`

/* -------------------------------------------------------------
   §38 SAFETY & PRIVACY
   ------------------------------------------------------------- */
export const AI_SAFETY = [
  { k: 'Never paste', d: 'Passwords, API keys, card numbers, ID documents, medical records, other people\'s personal data, client confidential material, unreleased work, anything under legal privilege.', sev: 'critical' },
  { k: 'Assume retention', d: 'Assume anything you paste may be stored, reviewed by a human, or used in training unless you have specifically confirmed otherwise for that product and account tier.', sev: 'high' },
  { k: 'Anonymise by default', d: 'Replace names, companies, figures and identifiers with placeholders. You almost never need the real ones to get a good draft.', sev: 'high' },
  { k: 'Other people\'s data is not yours to share', d: 'A colleague\'s performance issue, a friend\'s medical situation, a client list. Your comfort with a tool is not their consent.', sev: 'high' },
  { k: 'Know your policy', d: 'Many organisations have an approved tool and a prohibited-data list. Not knowing it is not a defence, and "everyone does it" is not either.', sev: 'medium' },
  { k: 'Watch the plausible-but-wrong', d: 'The most dangerous output is not obviously bad; it is 90% right with an invented 10% that reads identically to the rest.', sev: 'high' },
  { k: 'Do not outsource the decision', d: 'Use it to prepare a decision, never to make one you must answer for. AI supports judgement; it does not replace responsibility.', sev: 'high' },
  { k: 'Keep a human in the loop', d: 'Anything that goes to a customer, a regulator, a court, a patient or the public gets read by a person who understands it before it leaves.', sev: 'critical' }
]

/* -------------------------------------------------------------
   §39 TOOL SELECTION — right instrument for the job.
   ------------------------------------------------------------- */
export const TOOL_PICK = [
  { tool: 'AI chatbot', icon: 'chat', good: 'Drafting, rewriting, summarising, explaining, brainstorming, structuring, rehearsal, critique.', bad: 'Exact figures, live data, anything requiring accountability or a guarantee.' },
  { tool: 'Search engine', icon: 'search', good: 'Current facts, official pages, prices, opening times, primary sources, specific documents.', bad: 'Synthesis across twenty sources; open-ended thinking work.' },
  { tool: 'Spreadsheet', icon: 'grid', good: 'Anything with numbers, repeated calculation, comparison, scenarios, audit trail.', bad: 'Judgement, wording, ambiguity.' },
  { tool: 'Calculator', icon: 'scale', good: 'Arithmetic. Always. Even when a model has already "done" it.', bad: 'Everything else.' },
  { tool: 'Automation', icon: 'bolt', good: 'Identical repeated steps at meaningful frequency, with a failure alarm.', bad: 'Judgement calls, rare tasks, work that changes shape each time.' },
  { tool: 'Code', icon: 'cpu', good: 'Deterministic transformation of data, large volumes, exact repeatability.', bad: 'One-off tasks a person can finish faster by hand.' },
  { tool: 'Ordinary software', icon: 'file', good: 'The boring purpose-built tool usually beats a clever general one. Calendars, forms, templates, trackers.', bad: 'Nothing — genuinely underrated.' },
  { tool: 'Database', icon: 'layers', good: 'Structured records queried repeatedly by more than one person.', bad: 'Small, personal, or one-off data.' },
  { tool: 'Specialist tool', icon: 'tool', good: 'Regulated, technical or high-stakes domains — tax, legal, medical, engineering.', bad: 'Casual questions where the setup cost exceeds the value.' },
  { tool: 'A human expert', icon: 'users', good: 'High stakes, legal exposure, medical decisions, anything needing accountability, judgement in an unfamiliar domain.', bad: 'Things you can do yourself in ten minutes.' },
  { tool: 'Your own head', icon: 'brain', good: 'Decisions about your own life, values and priorities. Nobody else has the context and nobody else pays.', bad: 'Arithmetic, memory, exhaustive option generation.' }
]

/* -------------------------------------------------------------
   §40 FAILURE RECOVERY
   ------------------------------------------------------------- */
export const AI_RECOVERY = [
  { n: 1, k: 'Diagnose', d: 'Name the failure precisely. Wrong facts? Wrong tone? Wrong level? Wrong task entirely? Generic? Too long? "It is bad" is not a diagnosis and cannot be fixed.' },
  { n: 2, k: 'Improve the context', d: 'Nine times out of ten the failure is missing context, not a missing prompt trick. Add the audience, the history, the constraint, the real example.' },
  { n: 3, k: 'Add constraints', d: 'Length, tone, forbidden words, required structure, reading level, what to leave out. Constraints do more work than instructions.' },
  { n: 4, k: 'Show, do not describe', d: 'Paste an example of the output you want. One example outperforms three paragraphs of description.' },
  { n: 5, k: 'Retry from a clean start', d: 'A conversation that has gone wrong tends to stay wrong — earlier bad output anchors what follows. Start fresh with better context rather than arguing.' },
  { n: 6, k: 'Verify again', d: 'A fixed tone does not mean fixed facts. Re-check the numbers and names in the new version too.' },
  { n: 7, k: 'Change approach', d: 'If two good attempts fail, it is probably the wrong instrument. Use the tool-selection guide — or do it yourself in ten minutes.' }
]

/* -------------------------------------------------------------
   §34 TIME LEVERAGE — six modes, in the correct order.
   ------------------------------------------------------------- */
export const LEVERAGE = [
  {
    k: 'Eliminate', icon: 'trash', order: 1,
    d: 'Stop doing it. The highest-value move and the least used, because stopping requires a decision while continuing requires nothing.',
    ask: 'What breaks if this stops? If the honest answer is "nothing", stop it.',
    ex: 'The weekly report nobody reads. The meeting that exists because it existed last week.'
  },
  {
    k: 'Simplify', icon: 'minus', order: 2,
    d: 'Do less of it, or to a lower standard where the standard does not matter. Most work has a polish tail that no one perceives.',
    ask: 'What is the minimum version that still achieves the purpose?',
    ex: 'Three bullets instead of a deck. A voice note instead of a document.'
  },
  {
    k: 'Delegate', icon: 'users', order: 3,
    d: 'Someone else should own it — not help with it. Delegating a task and keeping the decision is the version that fails.',
    ask: 'Who would grow by owning this, and what do they need to own it properly?',
    ex: 'Hand over the whole recurring process with the checklist, not the individual instances.'
  },
  {
    k: 'Standardise', icon: 'file', order: 4,
    d: 'Template it, checklist it, decide the default once. Most of the cost of recurring work is deciding, not doing.',
    ask: 'What decision am I making repeatedly that I could make once?',
    ex: 'A reply template for the question you answer weekly. A standing agenda.'
  },
  {
    k: 'AI-assist', icon: 'cpu', order: 5,
    d: 'Machine does the volume, you do the judgement and the sign-off. Faster without becoming unaccountable.',
    ask: 'Which part of this is production, and which part is judgement?',
    ex: 'AI drafts twelve responses; you correct and send. AI extracts, you decide.'
  },
  {
    k: 'Automate', icon: 'bolt', order: 6,
    d: 'Last, not first. Only for identical, frequent, mechanical steps — and only with a visible failure alarm.',
    ask: 'Is this genuinely identical every time, and how will I know within a day if it breaks?',
    ex: 'The scheduled export. The automatic filing rule.'
  }
]

export const LEVERAGE_LAW = 'Do not only make work faster. Find the work that should not exist. An automated unnecessary task is worse than a manual one — it now runs forever and someone will maintain it for years.'

/* -------------------------------------------------------------
   §35 WORKFLOW BUILDER — pipeline stages.
   ------------------------------------------------------------- */
export const PIPELINE = [
  { k: 'INPUT', who: 'you', icon: 'inbox', d: 'What arrives, from where, in what form, how often. Be specific — "emails" is not an input, "supplier invoices as PDF attachments, ~20/week" is.' },
  { k: 'AI', who: 'ai', icon: 'cpu', d: 'What the model does with it: extract, draft, classify, summarise, translate, restructure. One clear job, with your standards written into a saved prompt.' },
  { k: 'ANALYSE', who: 'both', icon: 'chart', d: 'What has to be worked out from the output: totals, exceptions, anomalies, priority. Numbers belong in a spreadsheet, not in the model.' },
  { k: 'REVIEW', who: 'you', icon: 'eye', d: 'The human checkpoint. What you check, and what makes you reject and rerun. Never remove this step from anything that leaves the building.' },
  { k: 'OUTPUT', who: 'both', icon: 'file', d: 'The artefact produced: the email, the record, the report, the updated sheet. Named, formatted, stored somewhere findable.' },
  { k: 'ACTION', who: 'you', icon: 'play', d: 'What actually happens as a result, and who does it. A pipeline that produces no action is a hobby.' }
]

/* -------------------------------------------------------------
   §32 ROLE-PLAY ENGINE — rehearsal personas.
   ------------------------------------------------------------- */
export const PERSONAS = [
  {
    id: 'interviewer', role: 'Interviewer', icon: 'users', accent: 'forest',
    use: 'Rehearse for a real interview until the answers stop being drafts.',
    brief: 'You are a hiring manager interviewing me for [ROLE] at [COMPANY TYPE]. You have read my CV, pasted below. Ask one question at a time and wait for my answer. Probe weak or vague answers the way a real interviewer does — ask for specifics, numbers, and what I personally did. Be professional but not easy. Do not tell me how I am doing until I say STOP.',
    after: 'After STOP: score each answer 1-5 on specificity, relevance and evidence. Quote my weakest sentence and rewrite it. Tell me the one question I am least ready for.'
  },
  {
    id: 'manager', role: 'Your manager', icon: 'target', accent: 'clay',
    use: 'Rehearse asking for a raise, pushing back on a deadline, or raising a problem.',
    brief: 'You are my manager. You are busy, generally reasonable, and under budget pressure. I am going to raise [TOPIC]. Respond as a real manager would — including deflection, "let me think about it", and questions I may not have prepared for. One turn at a time. Do not be a pushover.',
    after: 'After STOP: where did I lose the thread? Which of my sentences weakened my position? Give me the three strongest sentences I could have used instead.'
  },
  {
    id: 'recruiter', role: 'Recruiter', icon: 'search', accent: 'atlas',
    use: 'Practise the screening call and the salary question.',
    brief: 'You are an agency recruiter screening me for [ROLE]. Run a realistic 10-minute screen: current situation, reason for looking, relevant experience, salary expectations, notice period. Push on the salary question the way recruiters do. One question at a time.',
    after: 'After STOP: tell me exactly how I handled the salary question and what a stronger answer sounds like. Flag anything I said that would weaken my negotiating position later.'
  },
  {
    id: 'customer', role: 'Angry customer', icon: 'alert', accent: 'signal',
    use: 'Practise staying useful while someone is furious with you.',
    brief: 'You are a customer whose [PROBLEM] has not been resolved after two attempts. You are angry, you interrupt, and you do not want a script or an apology — you want a resolution. Stay in character. Escalate if I am vague or defensive. Calm down only if I do something genuinely useful.',
    after: 'After STOP: identify the moment I lost or held the situation. Which sentence de-escalated? Which one made it worse?'
  },
  {
    id: 'client', role: 'Difficult client', icon: 'file', accent: 'clay',
    use: 'Practise scope, price and delay conversations.',
    brief: 'You are a client who wants extra work included at no cost, and who implies the relationship depends on it. Be pleasant and persistent. Use "I thought that was included" and "it is only a small change". Do not accept the first no.',
    after: 'After STOP: did I hold the scope line while keeping the relationship? Give me the exact wording that does both.'
  },
  {
    id: 'exec', role: 'Executive', icon: 'chart', accent: 'council',
    use: 'Practise the two-minute version for someone with no time and no context.',
    brief: 'You are a senior executive with four minutes and no background on my work. I am going to present [TOPIC]. Interrupt if I am slow to the point. Ask only about impact, risk, cost and decision needed. Cut me off if I explain process.',
    after: 'After STOP: rewrite my opening as one sentence. Tell me what I said that an executive does not care about.'
  },
  {
    id: 'colleague', role: 'Difficult colleague', icon: 'chat', accent: 'signal',
    use: 'Rehearse a conversation you are dreading with someone defensive.',
    brief: 'You are a colleague who [BEHAVIOUR]. When challenged you become defensive, reframe as a misunderstanding, and point at someone else. Stay realistic — not a villain, just hard to talk to. One turn at a time.',
    after: 'After STOP: where did I get pulled off the point? Give me a sentence that returns to the issue without escalating.'
  },
  {
    id: 'skeptic', role: 'Skeptical stakeholder', icon: 'question', accent: 'atlas',
    use: 'Stress-test a proposal before you present it for real.',
    brief: 'You are a skeptical stakeholder who has seen initiatives like mine fail before. Attack my proposal, pasted below, with the strongest objections available — cost, risk, precedent, opportunity cost, "why now". Do not soften them.',
    after: 'After STOP: list every objection I could not answer. For each, give me the honest answer and the evidence I need to find.'
  },
  {
    id: 'negotiator', role: 'Hard negotiator', icon: 'scale', accent: 'amber',
    use: 'Practise holding a number under pressure.',
    brief: 'You are negotiating [SUBJECT] against me. Use anchoring, silence, artificial deadlines, "that is not in budget", and small concessions to extract large ones. Do not accept my first number. Stay in character throughout.',
    after: 'After STOP: identify each point where I conceded and what triggered it. What should I have said instead?'
  }
]

export const ROLEPLAY_RULES = [
  'Give the model your real material — the actual CV, the actual proposal. Rehearsing against a summary teaches you nothing.',
  'One turn at a time. Ask it not to write both sides; a transcript is reading, not rehearsal.',
  'Tell it not to go easy. Left alone, a model will be encouraging, which is the opposite of practice.',
  'Say the answers out loud. The gap between what you can type and what you can say under pressure is the whole point.',
  'Always run the feedback pass at the end. The rehearsal is worth little without the debrief.',
  'It is a sparring partner, not an oracle. It does not know what your actual manager will do.'
]

/* -------------------------------------------------------------
   §33 DECISION ENGINE
   ------------------------------------------------------------- */
export const DECISION_ENGINE = {
  law: 'AI supports judgement. It does not replace responsibility. Use it to widen the options and stress-test the reasoning — then decide yourself, and be able to explain the decision without mentioning a model.',
  uses: [
    { k: 'Widen the option set', d: 'You are almost always choosing between too few options. Ask for five, including two you would dismiss.', prompt: 'Here is my decision: [SITUATION]. I am currently choosing between [A] and [B]. Give me five more options, including at least two I would probably dismiss, and say why each might be right.' },
    { k: 'Surface hidden costs', d: 'Second-order effects are what make decisions go wrong, and they are exactly what you are worst at seeing about your own plans.', prompt: 'For each option, list the second-order effects at three months and at two years. What costs am I likely not to be counting?' },
    { k: 'Argue the other side', d: 'Ask for the strongest case against your preference, stated by someone who genuinely holds it.', prompt: 'I am leaning towards [OPTION]. Make the strongest possible case against it, as someone who thinks it is clearly a mistake. Do not be balanced.' },
    { k: 'Find the avoided question', d: 'Most stuck decisions are stuck because of a question nobody has said out loud.', prompt: 'Based on how I have described this, what question am I avoiding? What might I be optimising for without admitting it?' },
    { k: 'Pre-mortem', d: 'Assume it failed. Working backwards from failure finds risks that forward planning does not.', prompt: 'It is a year later and this decision failed badly. Write the three most likely explanations. What would I wish I had done differently at the start?' },
    { k: 'Define the criteria first', d: 'Choosing criteria after you have seen the options is how you rationalise a decision you already made.', prompt: 'Before I describe the options: given [GOAL and CONSTRAINTS], what criteria should I be judging this on, and how should I weight them?' }
  ],
  never: [
    'Never let it choose for you on anything that affects your health, money, family or legal position.',
    'Never accept a recommendation you cannot restate in your own words with its trade-offs.',
    'Never use it as a way to have made a decision without having decided.',
    'Never skip the verification step because the reasoning sounded good.'
  ]
}

/* -------------------------------------------------------------
   §41 BATTLE TESTS — eight progressive levels.
   ------------------------------------------------------------- */
export const BATTLES = [
  {
    id: 'b1', level: 1, title: 'Ask a real question',
    goal: 'Turn a vague request into a specific one.',
    task: 'Take something you actually need this week. Write the vague version, then rewrite it with a goal, an audience, a constraint and an output format. Run both. Compare.',
    pass: 'The second output is usable with minor edits; the first is not.',
    trap: 'Writing a long prompt instead of a specific one. Length is not specificity.'
  },
  {
    id: 'b2', level: 2, title: 'Make it ask you first',
    goal: 'Stop the model guessing your context.',
    task: 'Give a genuinely complex task and require five clarifying questions before any output. Answer them properly. Then let it generate.',
    pass: 'At least one of its questions exposed something you had not thought to include.',
    trap: 'Answering the questions lazily. The gain is in your answers, not its questions.'
  },
  {
    id: 'b3', level: 3, title: 'Catch a fabrication',
    goal: 'See a confident invention with your own eyes.',
    task: 'Ask for five sources on a narrow topic you know well, with authors and dates. Check every one. Then ask about a specific detail of something obscure and verify it.',
    pass: 'You have found at least one invented or misattributed item and can describe how convincing it looked.',
    trap: 'Believing it because the formatting was correct. Formatting is the easiest part to get right.'
  },
  {
    id: 'b4', level: 4, title: 'Break a task into checkable parts',
    goal: 'Stop accepting one unverifiable blob.',
    task: 'Take a task you would normally ask for in one go. Decompose it into five steps. Run and verify each separately before continuing.',
    pass: 'You found an error at step two or three that would have been invisible in the single-shot version.',
    trap: 'Decomposing on paper but still asking for everything at once.'
  },
  {
    id: 'b5', level: 5, title: 'Verify a number end to end',
    goal: 'Never accept model arithmetic again.',
    task: 'Give it a multi-step calculation with real figures — a budget, a projection, a comparison. Ask for the workings. Recompute every step in a spreadsheet.',
    pass: 'You can state exactly where it went wrong, or prove it did not, from your own working.',
    trap: 'Checking the final total only. Errors hide in the middle steps.'
  },
  {
    id: 'b6', level: 6, title: 'Survive a rehearsal',
    goal: 'Use AI as a sparring partner rather than an assistant.',
    task: 'Pick a persona and rehearse a real upcoming conversation for fifteen minutes, out loud, one turn at a time. Then run the feedback pass.',
    pass: 'You changed something about your real approach as a result.',
    trap: 'Letting it be encouraging. Instruct it not to go easy on you.'
  },
  {
    id: 'b7', level: 7, title: 'Build a repeatable pipeline',
    goal: 'Convert one-off help into a system.',
    task: 'Take a recurring task. Define INPUT → AI → ANALYSE → REVIEW → OUTPUT → ACTION. Write the reusable prompt with your standards in it. Run it twice on real work.',
    pass: 'The second run took materially less effort and produced consistent quality.',
    trap: 'Automating a task that should have been eliminated. Run the leverage ladder first.'
  },
  {
    id: 'b8', level: 8, title: 'Decide without outsourcing',
    goal: 'Use AI on a real decision without letting it decide.',
    task: 'Take a live decision. Use it to widen options, surface costs, argue against your preference, and run a pre-mortem. Then decide, and write your reasoning in your own words.',
    pass: 'Your written reasoning stands alone. You can defend it without mentioning the model.',
    trap: 'Discovering you agreed with whichever option it described most fluently.'
  }
]

/* -------------------------------------------------------------
   §42 RESOURCEFULNESS SCORE — ten dimensions.
   ------------------------------------------------------------- */
export const SCORE_DIMS = [
  { k: 'Problem definition', d: 'You can state the real problem in one sentence before opening any tool.' },
  { k: 'Context supply', d: 'You give goal, audience, constraints and history without being asked.' },
  { k: 'Decomposition', d: 'You break large tasks into parts you can each verify.' },
  { k: 'Verification', d: 'You check numbers, names, dates and sources as a habit, not when suspicious.' },
  { k: 'Tool selection', d: 'You know when a spreadsheet, a search, a specialist or a person beats a model.' },
  { k: 'Judgement retention', d: 'You use it to prepare decisions and still own them.' },
  { k: 'Iteration quality', d: 'You fix output with specific criticism rather than "make it better".' },
  { k: 'Safety and privacy', d: 'You anonymise by default and know what must never be pasted.' },
  { k: 'Leverage thinking', d: 'You ask whether work should exist before making it faster.' },
  { k: 'Compounding', d: 'You keep what worked, reuse it, and get faster over time.' }
]

export const SCORE_BANDS = [
  { min: 0, max: 24, k: 'Beginner', d: 'You are using AI as a search box. The fastest gain available to you is context: state the goal, the audience and the constraints every time.' },
  { min: 25, max: 44, k: 'Functional', d: 'You get useful output on familiar tasks. The gap is verification and decomposition — you are still accepting single blobs you cannot check.' },
  { min: 45, max: 64, k: 'Capable', d: 'You use it well and catch most errors. Work on leverage and reuse: you are still solving the same problem repeatedly from scratch.' },
  { min: 65, max: 84, k: 'Strong', d: 'You have real working method. Push on judgement retention and on eliminating work rather than accelerating it.' },
  { min: 85, max: 100, k: 'Fluent', d: 'You use AI as one instrument among several, verify by reflex, and own your decisions. Keep the verification discipline — that is what erodes first.' }
]

/* -------------------------------------------------------------
   §43 MASTER CHALLENGE
   ------------------------------------------------------------- */
export const MASTER_CHALLENGE = {
  title: 'The Master Challenge',
  lede: 'One real problem from your actual life, taken through the entire system. No hypotheticals — a hypothetical problem teaches a hypothetical skill.',
  rules: [
    'It must be a real, current problem with a real deadline and real consequences.',
    'It must be something you have not solved, not something you have already decided.',
    'Every fact must be verified against a source you opened yourself.',
    'You must write the final reasoning in your own words, without the model.'
  ],
  stages: [
    { n: 1, k: 'Define', d: 'One sentence: the problem, the deadline, the consequence of getting it wrong. No product names, no jargon.', out: 'A single sentence you would say out loud to a friend.' },
    { n: 2, k: 'Clarify', d: 'Make the model ask you five questions before it produces anything. Answer them properly, in writing.', out: 'Five questions and five real answers.' },
    { n: 3, k: 'Decompose', d: 'Break it into the smallest independent parts. Number them. Identify which parts need facts, which need judgement, and which need someone else.', out: 'A numbered list with each part tagged: fact / judgement / other people.' },
    { n: 4, k: 'Context', d: 'Build the full context block: goal, context, constraints, examples, format, criteria, verification.', out: 'A reusable prompt you have saved.' },
    { n: 5, k: 'Options', d: 'Generate at least five genuinely different approaches, including two you would dismiss. Note what each costs.', out: 'Five options with costs, not five wordings of one option.' },
    { n: 6, k: 'Attack', d: 'Have the strongest case made against your preferred option. Then run a pre-mortem: it is a year later and this failed.', out: 'The three most likely failure modes, written down.' },
    { n: 7, k: 'Verify', d: 'Every number recomputed by you. Every source opened by you. Every rule confirmed against a primary, dated source.', out: 'A list of claims with the source you actually checked against each.' },
    { n: 8, k: 'Choose', d: 'Decide. Write the decision and the reasoning in your own words, without the model open.', out: 'A paragraph you could defend in a meeting.' },
    { n: 9, k: 'Act', d: 'Do the first irreversible step within 48 hours. Send the message, book the call, make the payment.', out: 'One completed action with a date.' },
    { n: 10, k: 'Review', d: 'Two weeks later: what happened, what the model got wrong, what context was missing, what you will reuse.', out: 'A short written review and one saved prompt.' }
  ]
}

/* -------------------------------------------------------------
   §45 EVALUATION QUESTIONS — for every workflow.
   ------------------------------------------------------------- */
export const EVAL_QUESTIONS = [
  'Did this actually solve the real problem, or a nearby easier one?',
  'What did I have to fix, and does the fix belong in the prompt next time?',
  'What did it get wrong that I nearly missed?',
  'What context was I not giving it?',
  'Was this the right instrument, or would a spreadsheet, a search or a person have been better?',
  'Am I keeping the judgement, or did I quietly hand it over?',
  'What is worth saving and reusing from this?'
]

/* -------------------------------------------------------------
   Search docs for the frameworks in this file.
   ------------------------------------------------------------- */
export const searchDocs = () => [
  { kind: 'ai', title: 'The AI Workflow', sub: 'Problem to reviewed action, eleven steps', route: 'ai/workflow', group: 'AI Intelligence', body: AI_WORKFLOW.map(s => `${s.title} ${s.d}`).join(' ') },
  { kind: 'ai', title: 'Context Engineering', sub: 'Give AI the right information in the right shape', route: 'ai/context', group: 'AI Intelligence', body: CONTEXT_ELEMENTS.map(c => `${c.k} ${c.d}`).join(' ') + ' prompt template goal constraints examples output format' },
  { kind: 'ai', title: 'Verify Before You Trust', sub: 'Hallucinations, fake sources, bad arithmetic', route: 'ai/verify', group: 'AI Intelligence', body: VERIFY_RISKS.map(r => `${r.k} ${r.d} ${r.tell} ${r.check}`).join(' ') },
  { kind: 'ai', title: 'AI Safety and Privacy', sub: 'What must never be pasted', route: 'ai/safety', group: 'AI Intelligence', body: AI_SAFETY.map(s => `${s.k} ${s.d}`).join(' ') },
  { kind: 'ai', title: 'Choosing the Right Tool', sub: 'When AI is the wrong instrument', route: 'ai/tools', group: 'AI Intelligence', body: TOOL_PICK.map(t => `${t.tool} ${t.good} ${t.bad}`).join(' ') },
  { kind: 'ai', title: 'When AI Fails', sub: 'Diagnose, improve context, retry, change approach', route: 'ai/recovery', group: 'AI Intelligence', body: AI_RECOVERY.map(r => `${r.k} ${r.d}`).join(' ') },
  { kind: 'ai', title: 'Time Leverage', sub: 'Eliminate, simplify, delegate, standardise, assist, automate', route: 'ai/leverage', group: 'AI Intelligence', body: LEVERAGE.map(l => `${l.k} ${l.d} ${l.ask} ${l.ex}`).join(' ') + ' ' + LEVERAGE_LAW },
  { kind: 'ai', title: 'Workflow Builder', sub: 'Design your own AI pipeline', route: 'ai/builder', group: 'AI Intelligence', body: PIPELINE.map(p => `${p.k} ${p.d}`).join(' ') },
  { kind: 'ai', title: 'Role-Play Rehearsal', sub: 'Nine personas to practise against', route: 'ai/roleplay', group: 'AI Intelligence', body: PERSONAS.map(p => `${p.role} ${p.use} ${p.brief}`).join(' ') },
  { kind: 'ai', title: 'AI Decision Engine', sub: 'Support judgement without outsourcing it', route: 'ai/decide', group: 'AI Intelligence', body: DECISION_ENGINE.law + ' ' + DECISION_ENGINE.uses.map(u => `${u.k} ${u.d}`).join(' ') },
  { kind: 'ai', title: 'Battle Tests', sub: 'Eight progressive levels of AI capability', route: 'ai/battles', group: 'AI Intelligence', body: BATTLES.map(b => `${b.title} ${b.goal} ${b.task}`).join(' ') },
  { kind: 'ai', title: 'AI Resourcefulness Score', sub: 'Rate yourself across ten dimensions', route: 'ai/score', group: 'AI Intelligence', body: SCORE_DIMS.map(d => `${d.k} ${d.d}`).join(' ') },
  { kind: 'ai', title: 'The Master Challenge', sub: 'One real problem through the whole system', route: 'ai/challenge', group: 'AI Intelligence', body: MASTER_CHALLENGE.lede + ' ' + MASTER_CHALLENGE.stages.map(s => `${s.k} ${s.d}`).join(' ') }
]
