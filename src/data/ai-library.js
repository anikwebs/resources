/* =============================================================
   AI PROBLEM LIBRARY — §27 to §31.
   Real problems, each with the approach that works and a prompt
   you can copy into whatever assistant you already use.

   This app configures no AI API and calls no model. Placeholders
   are in [SQUARE BRACKETS] so they are obvious.
   ============================================================= */

import { PROMPT_UPGRADES } from './ai-prompts-plus.js'

export const PROBLEM_DOMAINS = [
  { id: 'work', title: 'Work & Office', icon: 'inbox', accent: 'forest', blurb: 'Email, meetings, reports, data, projects, managing people.' },
  { id: 'career', title: 'Career & Job Hunting', icon: 'target', accent: 'atlas', blurb: 'CVs, applications, interviews, offers, planning, salary.' },
  { id: 'daily', title: 'Daily Life', icon: 'home', accent: 'clay', blurb: 'Admin, money, health, home, forms, contracts, complaints.' },
  { id: 'talk', title: 'Difficult Conversations', icon: 'chat', accent: 'signal', blurb: 'Complaints, boundaries, conflict, apologies, bad news.' },
  { id: 'think', title: 'Thinking & Learning', icon: 'brain', accent: 'council', blurb: 'Understanding, deciding, researching, remembering.' }
]

export const PROBLEMS = [
  /* ---------------- WORK ---------------- */
  {
    id: 'p-email-hard', domain: 'work', title: 'I have to send an email I am dreading',
    hard: 'You are either too soft and get ignored, or too sharp and create a bigger problem. Under stress most people write to relieve their own feelings rather than to get an outcome.',
    approach: [
      'Decide the outcome before you write a word. What do you want the recipient to do?',
      'Give AI the situation, the relationship, the constraint and the outcome — not "write me an email".',
      'Ask for two versions at different levels of firmness, then pick and edit.',
      'Cut anything that describes your feelings. Keep what describes the facts and the ask.'
    ],
    prompt: `I need to send a difficult email. Help me get the outcome, not vent.

SITUATION: [what has happened]
RECIPIENT: [who they are, and my relationship to them — power dynamic matters]
WHAT I WANT: [the specific action or decision I need from them]
CONSTRAINTS: [what I cannot say, tone required, length, anything political]
HISTORY: [what has already been said or tried]

Write two versions: one measured, one firmer. Under 150 words each.
Put the ask in the first three lines. No throat-clearing, no "I hope this finds you well".
Then tell me which sentence in each version is most likely to cause a defensive reaction.`,
    warn: 'Never send the first draft. Read it aloud once — anything you would not say to their face, cut.'
  },
  {
    id: 'p-inbox', domain: 'work', title: 'My inbox is out of control',
    hard: 'The inbox is a symptom. The real problem is that other people are setting your priorities, one message at a time.',
    approach: [
      'Run the leverage ladder first: which of these emails should not exist at all?',
      'Find the three questions you answer repeatedly. Write template replies once.',
      'Use AI to draft the templates, not to answer individual emails forever.',
      'Batch. Two fixed windows a day beats continuous partial attention.'
    ],
    prompt: `Here are 10 real emails I answered this week (pasted below, anonymised).

1. Group them into recurring types.
2. For the three most frequent types, write a reusable template reply I can adapt in under 60 seconds.
3. Tell me which of these emails should not have needed to come to me at all, and what change would prevent them.
4. Identify anything here that indicates a broken process rather than a communication problem.`,
    warn: 'A faster inbox that answers unnecessary email is not a win. Eliminate before you accelerate.'
  },
  {
    id: 'p-meeting-prep', domain: 'work', title: 'I have a meeting and no idea what to say',
    hard: 'Unprepared meetings get decided by whoever prepared. Preparation is not reading more — it is deciding your one sentence.',
    approach: [
      'Write the decision you need, in one sentence, before anything else.',
      'Prepare for the three hardest questions, not for the presentation.',
      'Have AI attack your position as the most skeptical person in the room.',
      'Know your minimum acceptable outcome before you walk in.'
    ],
    prompt: `Help me prepare for a meeting.

PURPOSE: [what I need decided or agreed]
ATTENDEES: [who, their interests, who actually decides]
MY POSITION: [what I want]
WHAT I KNOW THEY WILL RESIST: [known objections]

Give me:
1. My opening in two sentences — the ask first.
2. The five hardest questions I will be asked, with an honest answer for each.
3. The strongest objection I have not thought of.
4. My minimum acceptable outcome, and the sentence that secures it if the full ask fails.`,
    warn: 'If you cannot state the decision needed in one sentence, the meeting does not have a purpose yet.'
  },
  {
    id: 'p-report', domain: 'work', title: 'I have to write a report nobody will read',
    hard: 'Long reports fail because the reader wants the answer and the writer wants credit for the work.',
    approach: [
      'Lead with the conclusion and the decision needed. Evidence goes below.',
      'Write the one-page version first. If it works, the long version may be unnecessary.',
      'Use AI to compress, not to expand. Ask it to cut, not to elaborate.',
      'Verify every number yourself in a spreadsheet before it goes anywhere.'
    ],
    prompt: `Here are my raw notes and findings for a report (pasted below).

1. Write a one-page version: conclusion first, then the three findings that support it, then the decision I am asking for.
2. Tell me what I can cut entirely without losing the argument.
3. Identify any claim I have made that my notes do not actually support.
4. List every number that appears, so I can verify each one myself.

Do not add anything that is not in my notes. Do not invent figures or sources.`,
    warn: 'Models will smooth your gaps into confident prose. The "claims not supported by notes" step is the important one.'
  },
  {
    id: 'p-excel', domain: 'work', title: 'I need to do something in a spreadsheet and do not know how',
    hard: 'AI is excellent at spreadsheet formulas and structure, and unreliable at spreadsheet arithmetic. People routinely get this backwards.',
    approach: [
      'Ask for the formula and the method — never for the computed answer.',
      'Describe your columns exactly, including what is text and what is a number.',
      'Test on five rows you can check by hand before applying to 5,000.',
      'Ask what could break it: blanks, duplicates, text-formatted numbers, dates as strings.'
    ],
    prompt: `I need a spreadsheet formula.

MY DATA: column A = [what it holds], column B = [...], column C = [...]
ROWS: about [number]. Sheet is [Excel / Google Sheets].
WHAT I NEED: [the result I want]
EDGE CASES: [blanks, duplicates, mixed formats — whatever applies]

Give me:
1. The formula, with each part explained.
2. A safer alternative if my data is messy.
3. What will break it, and how I would notice.
4. How to test it on five rows before applying it to everything.

Do not calculate any results for me — I will run it myself.`,
    warn: 'Never let a model do the arithmetic. Method from AI, numbers from the spreadsheet.'
  },
  {
    id: 'p-project', domain: 'work', title: 'I am running a project and it is drifting',
    hard: 'Drift is rarely a planning failure. It is usually unowned decisions and undeclared dependencies.',
    approach: [
      'List every open decision and who owns it. Unowned decisions are where projects die.',
      'Identify what is waiting on someone outside your control.',
      'Run a pre-mortem: it failed — why?',
      'Cut scope before you cut quality or move the date.'
    ],
    prompt: `My project is drifting. Here is the state (pasted below): goals, timeline, who is involved, what has slipped.

1. List every decision that appears to be open, and who should own each.
2. Identify dependencies on people outside my control, and the risk each carries.
3. Run a pre-mortem: it is the deadline and this failed. Give the four most likely causes.
4. Tell me what scope I could cut that would recover the most time for the least loss of value.
5. Name the single most important conversation I am avoiding.`,
    warn: 'The pre-mortem is the part that works. The plan is usually fine; the unnamed risks are not.'
  },
  {
    id: 'p-manage', domain: 'work', title: 'I have to manage someone and I have never done it',
    hard: 'New managers either avoid difficulty until it becomes a crisis, or overcorrect into micromanagement.',
    approach: [
      'Separate performance problems from clarity problems. Most are clarity problems.',
      'Say the difficult thing early and small, rather than late and large.',
      'Rehearse the conversation before having it — out loud.',
      'Write down what good looks like, specifically, and share it.'
    ],
    prompt: `I manage someone and there is a problem: [describe the situation factually — what they do, what the impact is, what I have said so far].

1. Tell me whether this reads as a clarity problem, a capability problem, a motivation problem, or a fit problem — and what evidence would distinguish them.
2. Give me the opening two sentences for the conversation. Specific, not softened into meaninglessness.
3. Tell me what I have probably failed to make explicit.
4. Then role-play as them: defensive, slightly hurt, one turn at a time. Do not go easy on me.`,
    warn: 'Anything touching discipline, dismissal or protected characteristics needs your HR or legal route, not a model.'
  },

  /* ---------------- CAREER ---------------- */
  {
    id: 'p-cv', domain: 'career', title: 'My CV is not getting responses',
    hard: 'A CV is read for 15 seconds by someone scanning for evidence. Most CVs list duties instead of results.',
    approach: [
      'Convert every responsibility line into a result with a number where possible.',
      'Tailor to the specific job description — the same CV everywhere is why it fails.',
      'Have AI read it as a screener, not as an editor.',
      'Never let it add experience you do not have. Ever.'
    ],
    prompt: `Here is my CV and the job description I am applying for (both pasted below).

1. Read my CV as a screener with 15 seconds. What do you learn, and what do you miss?
2. For each bullet, tell me whether it describes a duty or a result. Rewrite the duties as results using ONLY information I have given you.
3. List the job description requirements my CV does not currently evidence.
4. Tell me what to cut — what is taking space without earning it.

Critical: do not invent achievements, numbers, employers, dates or skills. If a result needs a number I have not given, write [NUMBER NEEDED] and I will supply it.`,
    warn: 'A model will happily invent a plausible achievement. Anything fabricated will be found in the interview, and that is worse than a weak CV.'
  },
  {
    id: 'p-jd', domain: 'career', title: 'I cannot tell if I should apply for this job',
    hard: 'Job descriptions are wish lists. People with 70% of the requirements get hired constantly; people who self-reject never do.',
    approach: [
      'Separate the real requirements from the aspirational padding.',
      'Map your evidence to each requirement honestly.',
      'Identify the genuine gaps and whether they are learnable or blocking.',
      'Look for what the description reveals about the team — often more useful than the requirements.'
    ],
    prompt: `Here is a job description and my background (both pasted below).

1. Separate the requirements into: genuinely essential, probably negotiable, and aspirational padding.
2. For each essential one, tell me whether my background evidences it, partly evidences it, or does not.
3. Name the real gaps, and say which are learnable in months versus which are genuine blockers.
4. What does this description tell you about the team, the problems they have, and what they will actually test for?
5. Given all of this — is applying a reasonable use of my time? Be honest.`,
    warn: 'Beware both directions: models flatter you into applying for everything, and can also be needlessly discouraging. Judge the evidence yourself.'
  },
  {
    id: 'p-interview', domain: 'career', title: 'I have an interview and I freeze',
    hard: 'Freezing is a rehearsal problem, not a knowledge problem. You cannot think and compose under pressure at the same time.',
    approach: [
      'Build six STAR stories that cover most questions. Reuse them.',
      'Rehearse out loud, one question at a time, against a persona.',
      'Prepare the three questions you fear most, deliberately.',
      'Have answers to "why us", "why now" and "why you" ready as one sentence each.'
    ],
    prompt: `You are a hiring manager interviewing me for [ROLE]. My CV and the job description are pasted below.

Rules: one question at a time. Wait for my answer. Probe vague answers the way a real interviewer does — ask for specifics, numbers, and what I personally did versus the team. Be professional but not easy. Do not tell me how I am doing until I type STOP.

After STOP: score each answer 1-5 on specificity, relevance and evidence. Quote my weakest sentence and rewrite it using only what I told you. Tell me the one question I am least ready for.`,
    warn: 'Say the answers out loud. Typing them builds a skill you will not have access to in the room.'
  },
  {
    id: 'p-star', domain: 'career', title: 'I cannot describe my own achievements',
    hard: 'You are too close to your work. What felt routine to you is often exactly what they are hiring for.',
    approach: [
      'Start from problems you solved, not roles you held.',
      'Use Situation / Task / Action / Result, and make the Action mostly "I", not "we".',
      'Find a number for the Result. If there is none, find a consequence.',
      'Build six that cover: conflict, failure, leadership, pressure, ambiguity, achievement.'
    ],
    prompt: `Help me build STAR stories. I will describe things I did; you structure them.

Here is a situation from my work: [describe it in messy detail, as it happened]

1. Structure it as Situation / Task / Action / Result.
2. In the Action, distinguish what I personally did from what the team did — ask me if it is unclear.
3. Tell me what is missing to make the Result credible, and what question I should ask myself to find a number.
4. Tell me which interview questions this story answers well, and which it does not.

Do not embellish. If my Result is weak, say so rather than improving it for me.`,
    warn: 'If you cannot say the Result out loud without hesitating, it is not yours. Find a true one instead.'
  },
  {
    id: 'p-recruiter', domain: 'career', title: 'I do not know how my application looks from the other side',
    hard: 'You judge your application on effort. They judge it on evidence, in 15 seconds, against 200 others.',
    approach: [
      'Have AI read as the screener, with the same time and the same scepticism.',
      'Ask what they conclude — not whether it is good.',
      'Fix what is missing rather than polishing what is there.'
    ],
    prompt: `Act as a recruiter screening 200 applications for [ROLE]. My application is pasted below.

1. In 15 seconds of reading, what do you conclude about this candidate?
2. Which pile: yes, maybe, no — and what specifically drove that?
3. What would make you stop and read properly?
4. What would make you reject immediately?
5. What are you looking for that you cannot find here?

Be blunt. Do not be encouraging.`,
    warn: 'Ask for the verdict before you ask for improvements, or you will get flattery.'
  },
  {
    id: 'p-cover', domain: 'career', title: 'My cover letters sound like everyone else\'s',
    hard: 'Generic letters are worse than none. The only interesting content is the specific connection between their problem and your evidence.',
    approach: [
      'Lead with their problem, not your enthusiasm.',
      'One specific piece of evidence, with a number.',
      'Three short paragraphs. Nobody reads four.',
      'Cut every sentence that could appear in anyone else\'s letter.'
    ],
    prompt: `Here is the job description, the company, and my relevant experience (all pasted below).

Write a cover letter of three short paragraphs:
1. What I understand their actual problem to be, based on the description.
2. One specific thing I have done that is evidence I can help with it — using only facts I have given you.
3. What I want next, in one sentence.

Then: highlight every sentence that could appear in any other candidate's letter, so I can cut it.
No "I am excited to apply". No adjectives about myself. Under 200 words.`,
    warn: 'Never claim familiarity with a company you have not researched. It collapses in the first question.'
  },
  {
    id: 'p-offer', domain: 'career', title: 'I have an offer and cannot tell if it is good',
    hard: 'Offers are compared on salary because salary is the only visible number. The things that determine whether you are happy are usually not in the offer letter.',
    approach: [
      'List every component: pay, pension, hours, commute, remote, progression, manager, learning, stability.',
      'Weight them yourself before you look at the offer.',
      'Score against the alternative — including staying.',
      'Verify the market range from at least two independent sources.'
    ],
    prompt: `I have an offer and I am comparing it against [my current role / another offer]. Details pasted below.

1. List every component of value in each option, including non-financial ones I may not have counted.
2. Ask me which three matter most to me — do not assume it is money.
3. Once I answer, compare them on those criteria.
4. Tell me what information I am missing that I should ask for before deciding.
5. Run a pre-mortem: it is a year later and I regret this. What is the most likely reason?`,
    warn: 'Do the actual comparison in the Decision Matrix tool. Then use AI to attack your conclusion.'
  },
  {
    id: 'p-salary', domain: 'career', title: 'I do not know what to say about salary',
    hard: 'The first number anchors everything. Most people answer honestly and early, which is the expensive combination.',
    approach: [
      'Find the market range from independent sources before any conversation.',
      'Deflect the first ask; give a range only when you must, anchored high.',
      'Never give your current salary as a basis. It is not relevant to what this role is worth.',
      'Rehearse it out loud until it is boring.'
    ],
    prompt: `Rehearse the salary conversation with me. You are the recruiter for [ROLE] in [LOCATION/SECTOR]. I have researched the range as [RANGE].

Push on the salary question the way recruiters actually do: ask early, ask what I am on now, and press for a number. One turn at a time.

After I type STOP: tell me exactly where I weakened my position, quote the sentence, and give me a stronger version. Also list the three deflections that work best if they ask before I have any leverage.`,
    warn: 'In some places asking for salary history is restricted. Know the local rule before the call.'
  },

  /* ---------------- DAILY LIFE ---------------- */
  {
    id: 'p-form', domain: 'daily', title: 'I do not understand this official letter or form',
    hard: 'Official language is designed for legal precision, not comprehension. Guessing at a deadline or an obligation is expensive.',
    approach: [
      'Ask for a plain-language translation, then a list of what is required of you.',
      'Extract every date and every consequence explicitly.',
      'Verify anything legal or financial against the issuing body\'s own guidance.',
      'Never rely on a model for the actual legal position.'
    ],
    prompt: `Here is an official letter/form I have received (pasted below, personal details removed).

1. Translate it into plain language, paragraph by paragraph.
2. List exactly what it requires me to do, and by when.
3. List every deadline and what happens if I miss it.
4. Tell me what it is NOT saying that I might be assuming.
5. List the questions I should ask the issuer, and flag anything where I should get proper advice rather than rely on you.`,
    warn: 'For anything legal, medical, immigration or tax related — use this to understand the letter, then confirm the position with the issuing body or a qualified adviser.'
  },
  {
    id: 'p-contract', domain: 'daily', title: 'I am about to sign something I have not read properly',
    hard: 'The clauses that hurt you are rarely the ones you are looking at. Notice periods, auto-renewal, liability and exit costs are where the damage lives.',
    approach: [
      'Ask specifically for the clauses that could cost you money or freedom.',
      'Extract every date, notice period and renewal term.',
      'Ask what is missing that should be there.',
      'For anything significant, this is a "get a professional" moment.'
    ],
    prompt: `Here is a contract I am considering (pasted below).

1. List every clause that could cost me money, time or freedom, in plain language.
2. Extract all dates, notice periods, renewal terms and termination conditions into a table.
3. What is missing that I would normally expect to see?
4. What are the three questions I should ask before signing?
5. What is unusual or one-sided compared with a standard agreement of this type?

Flag clearly where I should get professional advice rather than rely on this.`,
    warn: 'This is comprehension help, not legal advice. For employment, property, or anything above a few months of income — pay a professional.'
  },
  {
    id: 'p-complaint', domain: 'daily', title: 'A company has taken my money and will not fix it',
    hard: 'Complaints fail when they are emotional and unspecific. They succeed when they are dated, factual, and name the remedy and the escalation route.',
    approach: [
      'Assemble the timeline with dates and reference numbers first.',
      'State the remedy you want and a deadline.',
      'Name the next escalation step — regulator, ombudsman, chargeback.',
      'Keep it factual. Anger reduces your credibility, not theirs.'
    ],
    prompt: `Help me write an effective complaint.

WHAT HAPPENED: [timeline with dates, amounts, reference numbers]
WHAT I HAVE TRIED: [contacts made, dates, what they said]
WHAT I WANT: [specific remedy — refund, repair, replacement, compensation]
WHO THEY ARE: [type of company, country]

Write a formal complaint that:
- States the facts in dated order, with no emotional language.
- Names the specific remedy and a reasonable deadline.
- References my consumer rights in general terms and asks them to confirm their final position.
- States that I will escalate to the relevant ombudsman or regulator if unresolved.

Then tell me what escalation routes typically exist for this type of company in [COUNTRY], and what I should verify myself.`,
    warn: 'Verify the actual regulator and the actual rights yourself. Models get jurisdiction-specific consumer law wrong routinely.'
  },
  {
    id: 'p-money-tight', domain: 'daily', title: 'My money does not reach the end of the month',
    hard: 'The instinct is to cut small pleasures. The actual leverage is almost always in a small number of large fixed costs.',
    approach: [
      'Separate fixed from variable. Attack fixed first — it pays every month.',
      'Rank by annual amount, not by how often you notice it.',
      'Do the arithmetic in a spreadsheet, never in a model.',
      'Deal with priority debts and essentials before optimising anything.'
    ],
    prompt: `Here is my monthly income and outgoings (pasted below).

1. Separate fixed from variable costs.
2. Rank everything by ANNUAL cost, largest first.
3. Identify the three changes with the largest annual effect, and say what each would require of me.
4. Flag anything that looks like a subscription I may have forgotten.
5. Tell me which costs are priority (housing, utilities, tax, essential debt) and must be protected before any optimisation.

Do not calculate totals — I will do the arithmetic myself. Give me the structure and the ranking logic.`,
    warn: 'If you are behind on rent, utilities or tax, that is a specialist debt-advice situation, not an optimisation problem. Free services exist in most countries.'
  },
  {
    id: 'p-health', domain: 'daily', title: 'I need to explain a health problem to a doctor in seven minutes',
    hard: 'Appointments are short and you get one pass. Rambling chronology loses the detail that matters.',
    approach: [
      'Prepare a structured summary: what, when it started, pattern, what changes it, what you have tried.',
      'Lead with your single biggest concern.',
      'Write the three questions you must not leave without answering.',
      'Never use AI for diagnosis or treatment decisions.'
    ],
    prompt: `Help me prepare for a short medical appointment. I am NOT asking for a diagnosis or advice.

MY SYMPTOMS: [what, when it started, how often, severity, what makes it better or worse]
WHAT I HAVE TRIED: [...]
MY BIGGEST WORRY: [...]

1. Organise this into a clear 60-second summary I can say at the start.
2. List the details a clinician will most likely want that I have not included.
3. Help me write the three questions I must not leave without having answered.
4. Suggest how to raise my main worry directly without minimising it.

Do not suggest what might be wrong with me and do not suggest treatments.`,
    warn: 'Never use AI to diagnose or to decide about medication. Use it only to organise what you will say and ask.'
  },
  {
    id: 'p-decide-life', domain: 'daily', title: 'I have been going round in circles on a decision for weeks',
    hard: 'Circling usually means either a missing criterion, a missing piece of information, or an unspoken fear.',
    approach: [
      'Define the criteria before looking at the options again.',
      'Name the information you are missing and whether you can actually get it.',
      'Ask what you are avoiding — the honest answer usually ends the loop.',
      'Set a decision deadline. Undecided is itself a choice, just an unowned one.'
    ],
    prompt: `I have been stuck on a decision for weeks. Situation: [describe it fully, including what I have already considered].

1. Do not give me an answer yet. First, tell me what criteria I should be judging this on, and how they should be weighted.
2. Tell me what information I am missing, and whether it is actually obtainable.
3. Based on how I have described this, what question am I avoiding? What might I be afraid of?
4. What is the cost of continuing not to decide?
5. Only then: lay out the trade-offs of each option. Do not tell me what to do.`,
    warn: 'Do not ask it to decide. Notice if you find yourself hoping it will.'
  },

  /* ---------------- DIFFICULT CONVERSATIONS ---------------- */
  {
    id: 'p-boundary', domain: 'talk', title: 'I need to set a boundary with someone I care about',
    hard: 'The fear is losing the relationship. The reality is that unspoken boundaries produce resentment, which damages it more slowly and more permanently.',
    approach: [
      'Separate the request from the accusation. Describe the effect, not their character.',
      'Ask for one specific change, not a general improvement.',
      'Rehearse the pushback — that is where these fail.',
      'Say it once. Repetition holds a boundary; argument does not.'
    ],
    prompt: `I need to set a boundary with [relationship]. Situation: [what happens, how often, the effect on me. Include what I have already tried].

1. Give me the opening two sentences: specific about the behaviour and its effect, not about their character.
2. Name the one specific change I should ask for.
3. Tell me which of my phrasings would sound like an accusation, and give me the alternative.
4. Then role-play as them — hurt and defensive, one turn at a time. Do not make it easy.
5. After I type STOP: tell me where I over-explained or backed down, and give me the sentence to hold instead.`,
    warn: 'Over-explaining is the main failure. Every extra reason is another thing for them to argue with.'
  },
  {
    id: 'p-apology', domain: 'talk', title: 'I made a mistake and have to own it',
    hard: 'Most apologies are defences wearing an apology\'s clothes. The word "but" is where they die.',
    approach: [
      'Name what you did, without context or explanation attached.',
      'State the effect on them, not your intention.',
      'Say what you will do differently, specifically.',
      'Do not ask for reassurance. That converts your apology into their labour.'
    ],
    prompt: `I need to apologise properly. What happened: [describe what I did and its effect].

Write an apology that:
- Names what I did, plainly, with no explanation attached to it.
- Acknowledges the specific effect on them rather than my intention.
- States one specific thing I will do differently.
- Does not include the word "but", does not ask for reassurance, and does not describe how bad I feel.

Then: highlight anything in my description that is actually self-defence rather than acknowledgement.`,
    warn: 'At work, if the mistake has legal or financial exposure, tell your manager before you apologise to the affected party.'
  },
  {
    id: 'p-badnews', domain: 'talk', title: 'I have to deliver bad news',
    hard: 'Softening the opening makes it worse. The recipient stops hearing anything after they realise what is happening, so burying it wastes their attention.',
    approach: [
      'Say it in the first two sentences. Plainly.',
      'Then the reason, briefly, once.',
      'Then what happens next and what you will do.',
      'Then stop talking and let them react.'
    ],
    prompt: `I have to deliver bad news: [what it is, to whom, the context and any constraints on what I can say].

Write it as:
1. The news, in the first two sentences, plainly.
2. The reason, in two sentences maximum. Once, not repeated.
3. What happens next, and specifically what I will do.

Then tell me:
- Which sentence I will be tempted to soften, and why I should not.
- The three questions they will ask immediately, and honest answers for each.
- What I should not say even if asked.`,
    warn: 'Do not rehearse a script so tightly that you cannot listen. After the news, most of the job is listening.'
  },
  {
    id: 'p-conflict', domain: 'talk', title: 'Someone is angry with me and I do not know why',
    hard: 'Your instinct is to defend or to fix. Both prevent you from finding out what is actually happening.',
    approach: [
      'Find out before responding. Ask, then be quiet.',
      'Separate what happened from what they concluded about you.',
      'Acknowledge the part that is true before addressing the part that is not.',
      'Do not resolve it by email if it matters.'
    ],
    prompt: `Someone is angry with me. What I know: [what happened, what they said, what I think might be behind it].

1. Give me three plausible explanations that are not "they are being unreasonable".
2. Give me the opening question that will actually get me the information, and tell me what to do after asking it.
3. Separate what I did from what they may have concluded about me. Which do I need to address?
4. Give me the sentence that acknowledges the true part without conceding the untrue part.
5. Role-play as them, still angry, one turn at a time.`,
    warn: 'Ask, then stop talking. Most people will tell you the real problem within ninety seconds if you do not fill the silence.'
  },
  {
    id: 'p-say-no-talk', domain: 'talk', title: 'I keep saying yes when I mean no',
    hard: 'The moment of the ask is the hardest moment to think clearly in. That is precisely why you need a prepared sentence.',
    approach: [
      'Have a default holding line so you never have to answer instantly.',
      'Decide away from the pressure, using the decision tree.',
      'Keep the no short. Length invites negotiation.',
      'Repeat rather than justify when pushed.'
    ],
    prompt: `I keep agreeing to things I do not want to do. Typical situations: [describe two or three real recent examples].

1. Give me a holding line I can use every time so I never answer in the moment.
2. For each of my examples, give me the actual sentence I should have said.
3. Tell me what pattern you notice in when I say yes — what am I avoiding?
4. Then role-play: ask me for something in the way these people do, and push back twice when I decline. Make it uncomfortable.`,
    warn: 'The holding line matters more than the no. Most bad yeses are given in the first five seconds.'
  },

  /* ---------------- THINKING ---------------- */
  {
    id: 'p-understand', domain: 'think', title: 'I need to understand something complicated, fast',
    hard: 'Summaries make you feel informed without making you capable. The test is whether you can use it, not whether you followed it.',
    approach: [
      'Get the shape first, then the detail. Three levels: child, competent adult, practitioner.',
      'Ask what the common misunderstanding is — that is usually the load-bearing part.',
      'Ask it to test you. Recall beats rereading by a wide margin.',
      'Verify anything you will rely on.'
    ],
    prompt: `I need to understand [TOPIC] well enough to [SPECIFIC USE].

1. Explain it in three levels: (a) to a bright twelve-year-old, (b) to a competent adult outside the field, (c) to someone who will use it professionally.
2. What is the single most common misunderstanding, and why does it persist?
3. What are the five terms I must know to follow a real conversation about this?
4. Then test me: ask me five questions of increasing difficulty, one at a time, and correct my answers.
5. Tell me what I should verify independently before relying on any of this.`,
    warn: 'If you cannot explain it to someone else afterwards, you have read it, not learned it.'
  },
  {
    id: 'p-research', domain: 'think', title: 'I need to research something and do not know where to start',
    hard: 'People search for answers before defining the question, and end up with a large amount of material about the wrong thing.',
    approach: [
      'Define the question and what would count as an answer.',
      'Use AI for the map — the sub-questions, the terms, the source types.',
      'Use search and primary sources for the facts.',
      'Note what would change your conclusion before you start.'
    ],
    prompt: `I need to research [TOPIC] to answer [SPECIFIC QUESTION] so that I can [DECISION OR USE].

Do not give me facts. Give me the map:
1. Break my question into the sub-questions I actually need answered.
2. For each, what TYPE of source would be authoritative, and what would be unreliable?
3. What search terms would a specialist use that I would not think of?
4. What are the known contested areas where I should expect disagreement?
5. What would falsify my likely conclusion — what should I actively look for?`,
    warn: 'Get the map from AI. Get the facts from sources you open yourself.'
  },
  {
    id: 'p-remember', domain: 'think', title: 'I read things and forget them immediately',
    hard: 'Rereading feels like learning and mostly is not. Retrieval is what builds memory, and it feels worse.',
    approach: [
      'Turn material into questions, not notes.',
      'Test yourself before rereading. The failed attempt is what does the work.',
      'Space the reviews out — day 1, day 3, day 7, day 21.',
      'Explain it to someone. Gaps become visible instantly.'
    ],
    prompt: `Here is material I need to actually remember (pasted below).

1. Turn it into 15 retrieval questions, ordered from basic recall to application. Answers separately at the end.
2. Identify the five ideas that everything else depends on.
3. Give me a spaced schedule: what to review on day 1, 3, 7 and 21.
4. Then quiz me: one question at a time, do not show the answer until I have attempted it, and tell me where my answer was vague rather than wrong.`,
    warn: 'The discomfort of failing to recall is the mechanism. If it feels easy, it is not working.'
  }
]

/* -------------------------------------------------------------
   §28 OFFICE MASTERCLASS
   ------------------------------------------------------------- */
export const MASTERCLASS = [
  {
    id: 'email', title: 'Email', icon: 'inbox', accent: 'forest',
    lede: 'The highest-volume writing most people do, and the least deliberate.',
    moves: [
      { k: 'Decide the outcome first', d: 'Write the action you want before the first sentence. If you cannot name it, do not send the email — you want a conversation.' },
      { k: 'Ask in the first three lines', d: 'Anything below line four in a long email is decoration. Context goes underneath the ask, not above it.' },
      { k: 'Template the repeats', d: 'Find the three emails you write weekly and template them once. This is where the real time is.' },
      { k: 'Two versions for hard ones', d: 'Ask for a measured and a firmer version. Choose based on the relationship, not your mood.' },
      { k: 'Never send the first draft', d: 'Read aloud. Cut the sharpest sentence and every sentence about your feelings.' }
    ],
    problems: ['p-email-hard', 'p-inbox']
  },
  {
    id: 'meetings', title: 'Meetings', icon: 'users', accent: 'clay',
    lede: 'Prepared people decide meetings. Preparation is one sentence and three answers.',
    moves: [
      { k: 'One sentence of purpose', d: 'What must be decided. If there is no decision, it is a broadcast — send a message instead.' },
      { k: 'Prepare the hard questions', d: 'Not the presentation. The three questions you hope nobody asks.' },
      { k: 'Rehearse against a skeptic', d: 'Have your proposal attacked before the room does it.' },
      { k: 'Know your minimum', d: 'Decide your acceptable fallback before you go in, or you will invent one under pressure.' },
      { k: 'Own the notes', d: 'Whoever writes what was agreed defines what was agreed. Send within an hour.' }
    ],
    problems: ['p-meeting-prep']
  },
  {
    id: 'reports', title: 'Reports & writing', icon: 'file', accent: 'atlas',
    lede: 'Conclusion first. Evidence underneath. Ruthless compression.',
    moves: [
      { k: 'Answer, then evidence', d: 'Lead with the conclusion and the decision needed. Nobody wants your journey.' },
      { k: 'One page first', d: 'Write the one-pager. Often the long version turns out to be unnecessary.' },
      { k: 'Use AI to cut, not to pad', d: 'Ask what can be removed. Models default to expansion, which is the wrong direction.' },
      { k: 'Check claims against notes', d: 'Ask which claims your notes do not support. This catches the invented smoothing.' },
      { k: 'Verify every number', d: 'In a spreadsheet, by you, before it leaves your machine.' }
    ],
    problems: ['p-report']
  },
  {
    id: 'data', title: 'Spreadsheets & data', icon: 'grid', accent: 'council',
    lede: 'Method from the model. Arithmetic from the spreadsheet. Always in that order.',
    moves: [
      { k: 'Ask for formulas, never answers', d: 'Get the method and the explanation. Compute it yourself.' },
      { k: 'Describe your columns exactly', d: 'Including which are text and which are numbers. Most bad formulas come from bad descriptions.' },
      { k: 'Test on five rows', d: 'Rows you can verify by hand, before applying to thousands.' },
      { k: 'Ask what breaks it', d: 'Blanks, duplicates, text-formatted numbers, dates as strings, hidden rows.' },
      { k: 'Never trust a model total', d: 'Sum the column yourself. Every time.' }
    ],
    problems: ['p-excel']
  },
  {
    id: 'projects', title: 'Projects', icon: 'route', accent: 'amber',
    lede: 'Projects fail on unowned decisions and undeclared dependencies, not on plans.',
    moves: [
      { k: 'List open decisions and owners', d: 'Anything unowned is where the delay will come from.' },
      { k: 'Map external dependencies', d: 'Everything waiting on someone outside your control is a risk with a name.' },
      { k: 'Pre-mortem, not post-mortem', d: 'Assume it failed. Working backwards finds what forward planning misses.' },
      { k: 'Cut scope before quality', d: 'Scope is the cheapest thing to give up and the last thing people offer.' },
      { k: 'Name the avoided conversation', d: 'There is always one. It is usually the whole problem.' }
    ],
    problems: ['p-project']
  },
  {
    id: 'management', title: 'Managing people', icon: 'target', accent: 'signal',
    lede: 'Most performance problems are clarity problems that were left too long.',
    moves: [
      { k: 'Diagnose before acting', d: 'Clarity, capability, motivation, or fit. Each needs a completely different response.' },
      { k: 'Early and small', d: 'The difficult thing said early is a conversation. Said late, it is a crisis.' },
      { k: 'Rehearse out loud', d: 'Role-play the defensive response before you walk into it.' },
      { k: 'Write down what good looks like', d: 'Specifically. Most people are failing a standard nobody stated.' },
      { k: 'Know where the model stops', d: 'Discipline, dismissal, and anything touching protected characteristics goes to HR or legal, not to a chatbot.' }
    ],
    problems: ['p-manage']
  }
]

/* ------------------------------------------------------------- */
/* Merge the second-pass prompt and the output checks into each
   problem. Kept in a separate module because the library file was
   already long, and because followUp/checks are a different kind of
   writing from the problem itself. */
for (const [id, extra] of Object.entries(PROMPT_UPGRADES)) {
  const p = PROBLEMS.find(x => x.id === id)
  /* A key with no problem means a rename went half-done. Silently
     ignoring it would drop the upgrade with no visible symptom. */
  if (!p) throw new Error(`PROMPT_UPGRADES has no matching problem: ${id}`)
  Object.assign(p, extra)
}

export const problemById = id => PROBLEMS.find(p => p.id === id)
export const problemsOfDomain = d => PROBLEMS.filter(p => p.domain === d)
export const masterclassById = id => MASTERCLASS.find(m => m.id === id)

export const searchDocs = () => [
  ...PROBLEMS.map(p => ({
    kind: 'ai',
    title: p.title,
    sub: (PROBLEM_DOMAINS.find(d => d.id === p.domain) || {}).title || 'AI',
    route: `ai/problem/${p.id}`,
    group: 'AI problem library',
    body: `${p.title} ${p.hard} ${(p.approach || []).join(' ')} ${p.prompt} ${p.followUp || ''} ${(p.checks || []).join(' ')} ${p.warn || ''}`
  })),
  ...MASTERCLASS.map(m => ({
    kind: 'ai',
    title: `AI for ${m.title}`,
    sub: m.lede,
    route: `ai/office/${m.id}`,
    group: 'AI at work',
    body: `${m.title} ${m.lede} ${m.moves.map(x => `${x.k} ${x.d}`).join(' ')}`
  }))
]
