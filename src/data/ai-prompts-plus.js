/* =============================================================
   PROMPT UPGRADES — the second pass, and the output check.

   The first prompt is the easy half. Almost all of the value that
   people leave on the table is in what they do with the answer:
   they accept a fluent first draft, and they act on it without
   checking the few things that would have caught the error.

   So every problem in the library gets two additions:

     followUp  a prompt to paste AFTER the first answer. It attacks
               the answer rather than the problem, which is where a
               model is genuinely strong — critique is much more
               reliable than generation.

     checks    what to verify in the output BEFORE acting. Concrete
               and mechanical, so it can be done in a minute. These
               are ordered with the highest-cost failure first.

   Keyed by problem id. ai-library.js merges these in, so a key with
   no matching problem is a mistake — and it throws at import rather
   than silently doing nothing.
   ============================================================= */

export const PROMPT_UPGRADES = {
  /* ---------------- WORK ---------------- */
  'p-email-hard': {
    followUp: `You wrote that draft. Now read it as the recipient, on a bad day, looking for a reason to be annoyed.

1. Quote the sentence most likely to make them defensive, and say exactly what they will read into it.
2. Quote anything that sounds like I am managing them, scoring a point, or building a paper trail. Those tones survive editing and I will not notice them myself.
3. What will they reply to avoid doing the thing I asked? Write their most likely deflection, and give me the one line that closes it in advance.
4. Rewrite once more: same facts, same ask, nothing they can quote back at me.`,
    checks: [
      'The ask and the deadline are in the first three lines, in one sentence.',
      'Every factual claim in it is something you could evidence if challenged.',
      'No sentence describes your feelings, and no sentence begins "I just".',
      'You would be content for this to be forwarded to the person it is about.'
    ]
  },
  'p-inbox': {
    followUp: `Now go one level up from the templates.

1. Of the recurring types you identified, which exist because a decision has never been made? Name the decision and who should make it.
2. Which exist because information is hard to find? Name what document or dashboard would end that category permanently.
3. For the single biggest category, write the message I would send once — to the group or my manager — that would stop most of it arriving at all.
4. Tell me which of these I am the wrong person to be handling, and the sentence that redirects it without sounding obstructive.`,
    checks: [
      'At least one category has been eliminated, not just accelerated.',
      'Each template still sounds like you, not like a system.',
      'Nothing you templated needed a judgment call that varies by case.'
    ]
  },
  'p-meeting-prep': {
    followUp: `Now stress-test my position rather than supporting it.

1. Take the side of the person most likely to block this. Argue their case as well as they would — including the part that is genuinely right.
2. What is the strongest version of "not now"? That is usually harder to answer than "no".
3. Which of my claims rests on something I have not actually verified? Ask me for the evidence, one item at a time.
4. If the meeting goes badly in the first five minutes, what is the sentence that stops it becoming a decision against me today?`,
    checks: [
      'You can state the decision you need in one sentence, without "and".',
      'You have an honest answer to the hardest question, not a deflection.',
      'You know your minimum acceptable outcome before you walk in.',
      'You know who in the room actually decides, not just who attends.'
    ]
  },
  'p-report': {
    followUp: `Now attack the draft you just wrote.

1. List every claim in it, and mark each: supported by my notes, inferred by you, or unsupported. Be strict — an inference presented as a finding is the failure mode I am trying to avoid.
2. For each unsupported or inferred claim, tell me what evidence would be needed.
3. What would a hostile reviewer who wants this rejected attack first?
4. Rewrite the conclusion so it survives if my weakest finding turns out to be wrong.`,
    checks: [
      'Every number in the document has been traced back to its source by you.',
      'No sentence in it asserts something your notes do not contain.',
      'The conclusion and the decision requested are both on the first page.',
      'You could delete the appendix and lose nothing that matters.'
    ]
  },
  'p-excel': {
    followUp: `Before I apply this to real data.

1. Give me five test rows — including the awkward cases — with the answer each should produce. I will run them and compare.
2. Tell me what this formula does silently and wrongly rather than erroring: the failure I would not notice.
3. If my data grows to ten times the rows, or someone adds a column, what breaks?
4. Give me the simpler version, even if it is longer. I would rather maintain something I understand in six months.`,
    checks: [
      'You ran the five test rows and the results matched.',
      'You tested at least one blank cell and one unexpected format.',
      'You understand what every part of the formula does — no black boxes.',
      'The model did no arithmetic for you; the spreadsheet produced the numbers.'
    ]
  },
  'p-project': {
    followUp: `Now the political layer, which is usually the real blocker.

1. For each open decision, tell me who benefits from it staying open. That is normally why it is still open.
2. Which slipped item is a symptom of something nobody has said out loud?
3. I said I am avoiding a conversation. Give me the opening two sentences for it, and the answer to the first thing they will say.
4. If I can only recover one thing this week — a decision, a resource or a scope cut — which has the largest effect, and what is the exact ask?`,
    checks: [
      'Every open decision now has a named owner and a date.',
      'The pre-mortem causes each have an early signal you could actually observe.',
      'The scope cut has been agreed by whoever will notice it is missing.',
      'The avoided conversation is in the calendar, not on the list.'
    ]
  },
  'p-manage': {
    followUp: `Now play it forward past the first conversation.

1. If nothing changes after this conversation, what is my next step, and what would I need to have documented by then?
2. What is the most likely way I make this worse — over-explaining, softening until the message disappears, or going too hard because I left it late?
3. Give me the written follow-up: three lines confirming what we agreed and by when, in language that is a record without reading like a threat.
4. Role-play the version where they agree pleasantly and change nothing. That is the outcome I am least prepared for.`,
    checks: [
      'You named a specific behaviour and its effect, not a trait.',
      'You said what you want instead, with a date.',
      'You wrote down what you agreed within the hour, and sent it.',
      'Anything touching discipline or dismissal went through HR, not a model.'
    ]
  },

  /* ---------------- CAREER ---------------- */
  'p-cv': {
    followUp: `Now check your own rewrite for the thing that would end an interview.

1. List anything in your rewritten version that I did not tell you — any number, scope, title, technology or outcome. I need this list to be empty, so be pedantic.
2. For each rewritten bullet, give me the question an interviewer would ask to test it. If I could not answer confidently, the bullet is too strong.
3. Which single bullet is doing most of the work in getting me an interview? Which three could go without loss?
4. Read it once more as a screener: what is the one-line impression, and is it the impression I want?`,
    checks: [
      'You can defend every bullet with a specific example and, where stated, a real number.',
      'Nothing was invented — you audited the rewrite against what you supplied.',
      'The first third of page one contains your strongest evidence.',
      'Each bullet describes a result, not a duty.'
    ]
  },
  'p-jd': {
    followUp: `Now argue the other way, deliberately.

1. You gave me a verdict. Now argue the opposite case as strongly as you can. If you said apply, argue that it would waste my time.
2. What would this role look like in six months if the description is hiding a problem? What in the wording hints at it?
3. What are the two questions I could ask at first interview that would reveal whether this is the job described?
4. Given both arguments, what is the actual evidence I am missing to decide?`,
    checks: [
      'You separated genuine blockers from gaps learnable in months.',
      'You noticed whether the verdict was flattering you into applying.',
      'You have two questions prepared that test the description.',
      'The decision rests on your own reading of the evidence, not the model\'s verdict.'
    ]
  },
  'p-interview': {
    followUp: `Now the harder round.

1. Re-ask the three questions I answered worst, but harder — probe the part I glossed over.
2. Ask me the question that tests the weakest claim on my CV.
3. Then: what does my pattern of answers reveal about what I am uncomfortable talking about? That is what a good interviewer will find.
4. Give me three sentences of preparation for the question I am least ready for — not a script, the substance.`,
    checks: [
      'You answered out loud, not by typing.',
      'Each answer contained a specific example, and said what you personally did.',
      'You did not use the phrase "we" where the question asked about you.',
      'You know which question you are still weakest on.'
    ]
  },
  'p-star': {
    followUp: `Now compress and pressure-test the story.

1. Give me the 45-second version and the 15-second version. The short one is what I will actually need.
2. Ask me the three follow-up questions an interviewer would ask after the short version. Probe the Result hardest.
3. Where does this story make me look good in a way the facts do not support? Say it plainly.
4. What is the strongest true version of the Result, given only what I told you? If it is weak, say so rather than improving it.`,
    checks: [
      'You can tell the 45-second version without notes.',
      'The Result is true, and you can say how it was measured.',
      'The Action distinguishes what you did from what the team did.',
      'You have not embellished — check the story against what you supplied.'
    ]
  },
  'p-recruiter': {
    followUp: `You gave me the verdict. Now be specific about the fix.

1. What are the three changes with the largest effect on your verdict, in order? For each, say what it would change about your fifteen-second read.
2. Which of my perceived weaknesses is real, and which is a presentation problem? Those need completely different responses.
3. If I can only change one thing before applying, which one?
4. Now re-screen it assuming I made that one change. Did the pile change?`,
    checks: [
      'You asked for the verdict before asking for improvements.',
      'You separated real gaps from presentation problems.',
      'The one highest-value change is done, not just noted.'
    ]
  },
  'p-cover': {
    followUp: `Now remove everything generic, properly.

1. Go sentence by sentence. For each, say whether it could appear in another candidate\'s letter for this role. Delete-list anything that could.
2. What in my letter shows I understand their actual problem, rather than that I read their description? If nothing does, say so.
3. Which sentence is the single strongest reason to interview me? Move it earlier.
4. Rewrite under 150 words keeping only what survives.`,
    checks: [
      'No sentence could belong to another applicant.',
      'It names a specific thing you have done, not a quality you claim.',
      'Everything about the company is something you actually verified.',
      'It is under 200 words and contains no adjective about yourself.'
    ]
  },
  'p-offer': {
    followUp: `Now attack the conclusion I have reached.

1. I am leaning towards [OPTION]. Argue against it using only the facts I gave you.
2. What am I over-weighting because it is easy to measure, and under-weighting because it is not?
3. Which of my assumptions about the new role is unverified, and how could I check it before deciding?
4. In two years, which of these options leaves me with more choices? Answer that separately from which pays more.`,
    checks: [
      'The numeric comparison was done in the Decision Matrix tool, not by the model.',
      'You listed the non-financial components and weighted them deliberately.',
      'You know what information you are still missing, and whether you can get it.',
      'You ran the pre-mortem and named the most likely regret.'
    ]
  },
  'p-salary': {
    followUp: `Now the two harder variants.

1. Run it again, but this time you have a stronger position than me — a strong internal candidate and no urgency. Push accordingly.
2. Then run it as the hiring manager rather than the recruiter, after an offer exists. Different conversation, different leverage.
3. After each: quote the exact sentence where I gave away my number or my walk-away, and give me the replacement.
4. Give me three ways to answer "what are you on now?" that are honest, brief and do not name a figure.`,
    checks: [
      'You have a walk-away number and know what you will do if you use it.',
      'You practised out loud, including the silence after your number.',
      'You know the local rule on salary-history questions.',
      'You have non-money terms prepared, ranked by what they are worth to you.'
    ]
  },

  /* ---------------- DAILY LIFE ---------------- */
  'p-form': {
    followUp: `Now the part that costs people money.

1. Quote verbatim the sentences that create an obligation or a deadline for me. Quote, do not paraphrase — I need to check these against the letter myself.
2. What is the worst realistic consequence of doing nothing for thirty days?
3. What does this letter want me to assume that it has not actually stated?
4. Draft my reply: acknowledging receipt, asking for the specific clarification I need, and preserving my position. Keep it under 120 words.`,
    checks: [
      'You checked every quoted sentence against the actual letter.',
      'Every deadline is written in your calendar, with what happens if missed.',
      'Anything legal, medical, immigration or tax related was confirmed with the issuer or a qualified adviser.',
      'You replied in writing and kept a copy.'
    ]
  },
  'p-contract': {
    followUp: `Now the clauses people discover too late.

1. Quote verbatim: termination, notice period, automatic renewal, cost of leaving early, and dispute resolution. If any is absent, say so explicitly — an absence is itself a finding.
2. What could this document allow the other side to do that a reasonable person would not expect?
3. If our relationship goes wrong in month four, walk me through what this document says happens.
4. Give me the three specific amendments most likely to be accepted, in the wording I should propose.`,
    checks: [
      'You located and read the five quoted clauses in the document itself.',
      'You know the exact cost and notice period for ending it.',
      'You know what is excluded, not just what is covered.',
      'For anything above a few months of income, a professional has looked at it.'
    ]
  },
  'p-complaint': {
    followUp: `Now escalate properly.

1. Rewrite the final paragraph so it requests a "final response" or deadlock letter explicitly. That phrase is often what unlocks the next stage.
2. Tell me what evidence I should attach, and what I should keep back for the escalation.
3. What will they most likely offer to close this cheaply, and should I accept it?
4. List what I must verify myself before quoting any right or regulator: the specific body, the actual time limit, and whether it covers this type of company in my country.`,
    checks: [
      'You verified the actual regulator and time limit yourself — not from the model.',
      'Every date, amount and reference number is correct.',
      'The letter contains no emotional language and one specific remedy.',
      'You kept a copy and a record of when it was sent.'
    ]
  },
  'p-money-tight': {
    followUp: `Now separate the two different problems.

1. Am I short because outgoings exceed income, or because timing is wrong within the month? Those need different actions — say which my numbers indicate.
2. Rank my debts by what the creditor can actually do to me, not by size or interest rate. Housing, utilities, tax and court obligations sit above credit cards regardless of balance.
3. For each of the three biggest changes, what does it cost me in life quality? I would rather know before committing.
4. What is the smallest change that buys me one month of breathing room, so I can decide the rest without panic?`,
    checks: [
      'You did the arithmetic yourself; the model only structured and ranked.',
      'Priority debts were protected before any optimisation.',
      'You used the Money Triage tool for the payment order.',
      'If behind on rent, utilities or tax, you contacted a free debt-advice service.'
    ]
  },
  'p-health': {
    followUp: `Now prepare for the appointment going badly.

1. If I am dismissed or rushed, give me the one sentence that gets my main worry formally on the record without antagonising anyone.
2. Give me the exact phrasing for asking what else it could be, and for asking what would change the plan.
3. What should I write down during the appointment so I am not reconstructing it afterwards?
4. If I leave without my three questions answered, what is the sentence that secures a follow-up before I stand up?`,
    checks: [
      'You did not ask for, or accept, a diagnosis or a treatment suggestion.',
      'Your 60-second summary is written down and you can say it without notes.',
      'Your three questions are on paper, in priority order.',
      'You wrote down what was said before leaving the building.'
    ]
  },
  'p-decide-life': {
    followUp: `Now go after the avoidance rather than the decision.

1. You named a question I am avoiding. Ask it directly, and do not accept my first answer.
2. Is this reversible? If it is, what am I gaining by deliberating instead of trying it small?
3. Which option would I choose if nobody would ever know what I chose? And which if everyone would?
4. Set a decision date and tell me the one piece of information worth waiting for. Everything else I am gathering to postpone.`,
    checks: [
      'You did not ask it to decide, and you noticed if you wanted it to.',
      'You know whether this is a one-way or two-way door.',
      'The criteria were written down before the options were compared.',
      'There is a date in the calendar by which you will have decided.'
    ]
  },

  /* ---------------- DIFFICULT CONVERSATIONS ---------------- */
  'p-boundary': {
    followUp: `Now the versions that actually happen.

1. Role-play them agreeing warmly and changing nothing. Give me the follow-up conversation two weeks later, which is the one I will really need.
2. Role-play them making it about my character rather than the behaviour. Give me the line that declines that frame without escalating.
3. Quote back to me every extra reason I gave. Each one is a thing for them to argue with — show me the version with only the first reason.
4. What is my consequence if nothing changes, and can I actually carry it out? If not, help me find one I can.`,
    checks: [
      'You asked for one specific change, not a change of attitude.',
      'You gave one reason, not four.',
      'You named a consequence you are genuinely willing to apply.',
      'You did not apologise for having the boundary.'
    ]
  },
  'p-apology': {
    followUp: `Now strip out the self-defence I will not see myself.

1. Quote every phrase that explains, contextualises or invites reassurance. Those are for me, not for them.
2. Where have I apologised for their reaction rather than my action? "I am sorry you were upset" is the classic — flag it if present.
3. Does the repair I offered actually address what they lost? If not, what would?
4. Give me the shortest version that still contains the acknowledgement, the effect and the repair. Short is more credible here.`,
    checks: [
      'No "but", and no explanation attached to the acknowledgement.',
      'It names the effect on them, not your intention.',
      'It contains one specific thing you will do differently.',
      'At work, anything with legal or financial exposure went to your manager first.'
    ]
  },
  'p-badnews': {
    followUp: `Now prepare for the reaction rather than the delivery.

1. Give me three reactions — anger, silence, and negotiation — and what I should do in each. Especially the silence.
2. What will I be tempted to promise in the moment to make it easier? Name it so I recognise it.
3. What can I honestly say about what happens next, and where must I say "I do not know yet"?
4. Give me the closing two sentences that leave them with a next step rather than a void.`,
    checks: [
      'The news is in the first two sentences, plainly.',
      'The reason is given once, in two sentences, and not repeated.',
      'You have not promised anything you cannot deliver.',
      'You planned to stop talking after the news and listen.'
    ]
  },
  'p-conflict': {
    followUp: `Now separate the two things that are actually happening.

1. Split this into: what I did, and what they concluded it meant about me. Which is the real grievance?
2. If their anger is partly about something else, what in what they said points to it?
3. Give me the sentence that concedes the true part fully, without conceding the untrue part at all. That combination is the hard one.
4. Role-play them at their least reasonable, and stop me if I start defending my character instead of addressing the behaviour.`,
    checks: [
      'You asked and then stopped talking, without filling the silence.',
      'You said back their complaint accurately before responding to it.',
      'You conceded what was true and did not concede what was not.',
      'You addressed the behaviour, not their assessment of your character.'
    ]
  },
  'p-say-no-talk': {
    followUp: `Now the pattern rather than the sentences.

1. From my examples, what do the requests I cannot decline have in common? Who asks, and what am I afraid happens if I say no?
2. Give me one holding line for a stranger, one for my manager, and one for family. They need different registers.
3. Role-play: ask me for something and push back three times, escalating from disappointment to implication. Do not let me off.
4. Then quote where I softened into a yes, and give me the sentence to hold.`,
    checks: [
      'You have a holding line you can say without thinking about it.',
      'You declined without giving four reasons.',
      'You noticed which relationships you cannot yet decline, and why.',
      'You did not answer in the first five seconds.'
    ]
  },

  /* ---------------- THINKING & LEARNING ---------------- */
  'p-understand': {
    followUp: `Now find the edge of the explanation.

1. What did you simplify in a way that would mislead me if I relied on it professionally? Be specific about which simplification and where it breaks.
2. Where do experts in this field genuinely disagree, and what turns on the disagreement?
3. What would I get wrong in my first real attempt at [SPECIFIC USE], despite understanding the theory?
4. Give me the three claims from your explanation I should verify independently, and where to look.`,
    checks: [
      'You can explain it out loud to someone else without notes.',
      'You know what was simplified and where the simplification fails.',
      'You verified at least one claim in a source you opened yourself.',
      'You know which parts are contested rather than settled.'
    ]
  },
  'p-research': {
    followUp: `Now protect me from finding only what I want.

1. What is my likely conclusion, given how I framed the question? Name the bias in my framing.
2. What would a competent person who disagrees with me look for first?
3. Which of my sub-questions is load-bearing — the one where being wrong changes the answer? I should spend most of my time there.
4. What is the strongest evidence against my likely conclusion, and where would it be published?`,
    checks: [
      'You got the map from the model and the facts from sources you opened.',
      'You looked for the strongest disconfirming evidence, not just more support.',
      'You know which sub-question the answer actually turns on.',
      'You can name the primary source behind each fact you are relying on.'
    ]
  },
  'p-remember': {
    followUp: `Now make it survive past this week.

1. Which five of your questions test recognition rather than recall? Rewrite those — recognition feels like knowing and is not.
2. Give me three questions that require applying this to a situation not in the material.
3. What would I still be able to reconstruct in six months if I only reviewed twice? Prioritise the schedule around that.
4. Quiz me on day 3 style: no material in front of me, hardest first, and tell me where my answer was vague rather than wrong.`,
    checks: [
      'You attempted every answer before looking at any of them.',
      'You wrote your recall down rather than deciding it felt familiar.',
      'The day 3 and day 7 reviews are in your calendar.',
      'You noticed which ideas everything else depends on.'
    ]
  }
}
