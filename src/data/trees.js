/* =============================================================
   DECISION TREES — interactive frameworks.
   A tree is a map of nodes. Each node is either a question with
   options (each pointing at another node) or an outcome with a
   recommendation, reasoning, and a next action.

   node = { q, note?, opts:[{label, to}] }
   node = { out, why, say?, next }
   ============================================================= */

export const TREES = [
  /* ---------------------------------------------------------- */
  {
    id: 'say-yes',
    title: 'Should I say yes to this?',
    blurb: 'Requests, invitations, extra work, favours. Four honest questions, one recommendation.',
    icon: 'question',
    accent: 'forest',
    tags: ['boundaries', 'time', 'work'],
    start: 'capacity',
    nodes: {
      capacity: {
        q: 'Do you have the capacity, without moving something else?',
        note: 'Capacity means hours that already exist — not hours you plan to find by sleeping less or working Sunday.',
        opts: [
          { label: 'Yes, genuinely', to: 'want' },
          { label: 'No — something would have to move', to: 'movable' },
          { label: 'I honestly do not know', to: 'unknown' }
        ]
      },
      unknown: {
        q: 'Can you find out in under ten minutes?',
        note: 'Open the calendar. Count the actual committed hours between now and the deadline.',
        opts: [
          { label: 'Yes — I will look now', to: 'capacity' },
          { label: 'No, it is genuinely unclear', to: 'buy-time' }
        ]
      },
      'buy-time': {
        out: 'Do not answer yet. Buy a specific, short amount of time.',
        why: 'An unclear yes is worse than a slow yes. The most common cause of over-commitment is answering in the moment to end the discomfort of being asked.',
        say: '"I want to give you a real answer rather than a hopeful one. Let me check what I am already committed to and come back to you by 4pm."',
        next: 'Set a reminder for the time you named. Then run this tree again with real numbers.'
      },
      want: {
        q: 'Would you choose this if it appeared on your calendar with no one watching?',
        note: 'Separate the task from the relationship. This question is only about the work itself.',
        opts: [
          { label: 'Yes — I actually want it', to: 'clear-yes' },
          { label: 'No, but the relationship matters', to: 'relationship' },
          { label: 'No, and it is not really my job', to: 'not-mine' }
        ]
      },
      'clear-yes': {
        out: 'Say yes. Say it clearly, and say it with a shape.',
        why: 'You have the time and you want the work. The only remaining risk is scope: an unbounded yes turns into three times the work you agreed to.',
        say: '"Yes, happy to. To be clear on scope: I will do [specific thing] by [date]. Anything beyond that we should treat as a separate ask."',
        next: 'Send the confirmation with the scope written down. Verbal scope is not scope.'
      },
      relationship: {
        q: 'Is this a one-off, or the fourth time this quarter?',
        opts: [
          { label: 'One-off', to: 'gift' },
          { label: 'It is becoming a pattern', to: 'pattern' }
        ]
      },
      gift: {
        out: 'Say yes, and let it be a gift rather than a precedent.',
        why: 'Occasional generosity that costs you something is how relationships actually work. The danger is only when the exception quietly becomes the rule.',
        say: '"I can do this one. I am fairly loaded at the moment so I may not be able to next time — but this one is fine."',
        next: 'Note the date. If a third request lands within a month, you are in the pattern branch, not this one.'
      },
      pattern: {
        out: 'Say yes to the task if you must, but name the pattern out loud.',
        why: 'Repeated requests are not a series of individual events; they are a system that has learned you are the cheapest route. Systems only change when someone describes them.',
        say: '"I can help with this one. I do want to flag that this is the fourth time this quarter — I think the underlying process needs a look, otherwise we will keep landing here."',
        next: 'Say the pattern sentence to the person who can change the process, not only to the person asking.'
      },
      'not-mine': {
        q: 'Does the person asking have the authority to make it your job?',
        opts: [
          { label: 'Yes — manager, client, or similar', to: 'reframe' },
          { label: 'No — a peer offloading', to: 'redirect' }
        ]
      },
      reframe: {
        out: 'Do not refuse. Convert it into a visible trade.',
        why: 'When someone with authority hands you unowned work, refusing reads as unwillingness. Naming the trade reads as competence — and forces the priority decision to sit with the person who owns it.',
        say: '"I can take this on. It would mean [current commitment] moves to [date], or someone else picks it up. Which would you prefer?"',
        next: 'Send that sentence in writing so the trade is documented, then do whatever they choose.'
      },
      redirect: {
        out: 'Say no, but return a route rather than a wall.',
        why: 'A peer offloading work is not owed your capacity, but you still want the relationship. A no with a direction attached costs almost nothing socially.',
        say: '"I cannot take that on this week. [Name] owns that area though, and the template in [place] covers most of it."',
        next: 'Say it once, plainly, and do not soften it into a maybe. Maybe is how this becomes yours.'
      },
      movable: {
        q: 'Is the thing that would move yours to move?',
        note: 'Your own evening is yours. A commitment you made to someone else is not.',
        opts: [
          { label: 'Yes — my own time or my own task', to: 'worth-it' },
          { label: 'No — it is a promise to someone else', to: 'name-tradeoff' }
        ]
      },
      'worth-it': {
        q: 'Is this worth more to you than the thing it displaces?',
        note: 'Be concrete. Not "is it important" — is it worth *that specific evening* or *that specific task slipping*.',
        opts: [
          { label: 'Yes, clearly', to: 'clear-yes' },
          { label: 'No', to: 'decline-clean' },
          { label: 'It is close', to: 'shrink' }
        ]
      },
      shrink: {
        out: 'Do not choose between all and nothing. Shrink the ask.',
        why: 'Most requests are negotiable in size long before they are negotiable in existence. A reduced version delivered calmly beats a full version delivered resentfully.',
        say: '"I cannot do the full version. I can do [smaller specific version] by [time] — would that solve the actual problem?"',
        next: 'Offer the smaller version first. Let them decide whether it is enough.'
      },
      'decline-clean': {
        out: 'Say no. Once, warmly, without a case file.',
        why: 'Over-explaining a no invites negotiation, because every reason you give is a reason they can try to solve. A short no is more respectful of both people.',
        say: '"I am not going to be able to do this one. I hope it goes well."',
        next: 'Do not add a second reason if they push. Repeat the same sentence. Repetition, not argument, is what holds a boundary.'
      },
      'name-tradeoff': {
        out: 'Neither yes nor no yet. Name the trade-off first.',
        why: 'You can probably do it, but not for free. Someone else is currently expecting the thing that would move. Deciding silently on their behalf is the actual error here.',
        say: '"I can do this. It would mean [specific commitment] moves to [date]. Is that the right trade?"',
        next: 'Send that exact sentence. Do not decide for them — make the trade visible and let them choose.'
      }
    }
  },

  /* ---------------------------------------------------------- */
  {
    id: 'quit',
    title: 'Should I quit?',
    blurb: 'A job, a course, a project, a commitment. Separates a bad situation from a bad decision.',
    icon: 'route',
    accent: 'clay',
    tags: ['career', 'work', 'decisions'],
    start: 'safe',
    nodes: {
      safe: {
        q: 'Is anything happening here that is unsafe, illegal, or damaging your health?',
        note: 'Harassment, bullying, unpaid wages, unsafe conditions, an environment your body is visibly reacting to.',
        opts: [
          { label: 'Yes', to: 'exit-plan' },
          { label: 'No — it is hard, not harmful', to: 'fixable' }
        ]
      },
      'exit-plan': {
        out: 'Plan to leave, and start collecting evidence today.',
        why: 'This is no longer a career-optimisation question. But leaving badly costs you money and leverage you may need — so leave deliberately, not dramatically.',
        say: 'To yourself, in writing: what happened, when, who was present. Dated notes, saved elsewhere, not on the employer device.',
        next: 'Three things this week: document, find out your rights (union, regulator, or an employment advice line), and open one route out. Do not resign in a meeting.'
      },
      fixable: {
        q: 'Have you actually asked for the change you want?',
        note: 'Asked specifically, to the person able to grant it. Hinting, hoping, and complaining sideways do not count.',
        opts: [
          { label: 'Yes — and the answer was no', to: 'growth' },
          { label: 'Yes — no clear answer yet', to: 'deadline' },
          { label: 'No, not directly', to: 'ask-first' }
        ]
      },
      'ask-first': {
        out: 'Do not quit yet. Make one specific, direct ask first.',
        why: 'An enormous share of resignations are for problems that were never actually put in front of someone with the power to fix them. You also want to know whether the answer is "no" or "nobody knew".',
        say: '"There is something I want to change to keep doing my best work here: [specific, concrete change]. Is that possible in the next [timeframe]?"',
        next: 'Book the conversation this week. Write the one change down before you go in. Then return to this tree with their answer.'
      },
      deadline: {
        out: 'Give the answer a deadline. Vagueness is a soft no you keep paying for.',
        why: 'Open-ended "we are looking into it" costs you months. A date converts hope into information.',
        say: '"I understand it is being considered. Can I check back on [specific date]? If it is not possible by then, I would rather know so I can plan."',
        next: 'Put that date in your calendar. If it passes without change, treat it as a no and take the growth branch.'
      },
      growth: {
        q: 'Are you still learning something here that you could not learn elsewhere faster?',
        opts: [
          { label: 'Yes — the learning is real', to: 'time-box' },
          { label: 'No — I have plateaued', to: 'runway' },
          { label: 'I am learning, but at too high a cost', to: 'runway' }
        ]
      },
      'time-box': {
        out: 'Stay, but with a stated end condition — not indefinitely.',
        why: 'Staying while learning is rational. Staying without an end condition is drift, and drift is how three years disappear. The point is to keep it a decision rather than a default.',
        say: 'To yourself: "I am staying until [date or milestone], to get [specific skill or credential]. Then I re-decide."',
        next: 'Write the date and the milestone somewhere you will see it. Set a calendar reminder to re-run this tree then.'
      },
      runway: {
        q: 'Could you cover your essential costs for three months without this income?',
        note: 'Savings, other income, a partner, family, a realistic gap-filling job. Be honest, not brave.',
        opts: [
          { label: 'Yes', to: 'leave-well' },
          { label: 'No', to: 'bridge' },
          { label: 'It is not about money at all', to: 'leave-well' }
        ]
      },
      bridge: {
        out: 'Decide to leave — but leave from a position of strength, not from a Tuesday.',
        why: 'Quitting into no runway usually results in taking the first available thing, which is how people end up in a worse version of the same situation. Your goal is to leave, not to leave today.',
        say: 'To yourself: "I am leaving. The date depends on the next role or three months of runway, whichever arrives first."',
        next: 'Two tracks in parallel this month: cut fixed costs to extend runway, and spend four hours a week on applications. Protect that time like a meeting.'
      },
      'leave-well': {
        out: 'Leave — and spend your remaining energy on leaving well.',
        why: 'The decision is made; what remains is execution. How you leave is remembered far longer than why you left, and the people here will be references, colleagues, and contacts for years.',
        say: '"I have decided to move on. My notice period is [x]. I want to hand over cleanly — here is what I propose."',
        next: 'Before you resign: get the offer in writing, know your notice period, and write the handover document. Then resign in a conversation, confirm in writing, and do not narrate your grievances on the way out.'
      }
    }
  },

  /* ---------------------------------------------------------- */
  {
    id: 'negotiate',
    title: 'Should I negotiate this?',
    blurb: 'Salary, price, scope, deadline. When to push, when to accept, and what to actually say.',
    icon: 'scale',
    accent: 'amber',
    tags: ['money', 'career', 'negotiation'],
    start: 'room',
    nodes: {
      room: {
        q: 'Is there any realistic room to move?',
        note: 'Fixed public pay bands, published prices with no discretion, and legally fixed terms genuinely do not move. Almost everything else does.',
        opts: [
          { label: 'Yes, or probably', to: 'leverage' },
          { label: 'No — genuinely fixed', to: 'other-axis' },
          { label: 'I do not know', to: 'ask-room' }
        ]
      },
      'ask-room': {
        out: 'Ask whether there is room. That question is not a negotiation.',
        why: 'People skip negotiating because they assume rigidity that often is not there. Asking about flexibility is low-risk and gives you the information you actually need.',
        say: '"Before I respond — how much flexibility is there on [the number or the terms]?"',
        next: 'Ask it neutrally, then wait. Come back to this tree with the answer.'
      },
      'other-axis': {
        out: 'Negotiate a different axis instead of the fixed one.',
        why: 'When the headline number cannot move, the surrounding terms usually can: start date, hours, remote days, title, review timing, training budget, equipment, scope, delivery date, payment schedule.',
        say: '"I understand the [number] is fixed. Are the other terms open? A [specific alternative] would make a real difference to me."',
        next: 'Pick the two non-money items that matter most to you and ask for those specifically.'
      },
      leverage: {
        q: 'What is your actual position if they say no?',
        note: 'Not what you feel — what you would really do on Monday.',
        opts: [
          { label: 'I have a real alternative', to: 'strong' },
          { label: 'No alternative, but I am valuable here', to: 'value' },
          { label: 'I need this and they know it', to: 'weak' }
        ]
      },
      strong: {
        out: 'Negotiate directly, name a number, and be easy to say yes to.',
        why: 'With a real alternative you can be specific without threatening. Specific is what gets acted on; vague requests get deferred.',
        say: '"I am keen to do this. At [specific number] I can say yes today. Is that workable?"',
        next: 'Name one number, not a range — a range is heard as its bottom. Then stop talking and let them respond.'
      },
      value: {
        q: 'Can you point at evidence of the value, in their language?',
        note: 'Delivered outcomes, revenue, cost avoided, risk removed, things that would break without you, comparable market rates.',
        opts: [
          { label: 'Yes — I have specifics', to: 'case' },
          { label: 'Not really', to: 'build-case' }
        ]
      },
      case: {
        out: 'Negotiate on evidence, not on need. Ask once, clearly, in writing.',
        why: 'Negotiating from need invites sympathy, which is not a budget line. Negotiating from delivered value invites a business decision, which is.',
        say: '"Over the last year I [specific outcome, specific number]. Market for this role is [range]. I am asking for [number]. What would it take to get there?"',
        next: 'Send it in writing before the conversation so they can prepare, then hold the number in the meeting rather than negotiating against yourself.'
      },
      'build-case': {
        out: 'Do not open yet. Spend two weeks building the evidence.',
        why: 'An ask with no evidence gets a polite no and makes the next ask harder, because you have already used the moment. Evidence is what turns a request into a decision.',
        say: 'To yourself: three specific things you delivered, with numbers or named consequences, plus two market data points.',
        next: 'Collect those five items. Then take the "evidence" branch. Timing matters too: ask near planning or review cycles, not after bad news.'
      },
      weak: {
        out: 'Ask softly, once, and protect the relationship above the number.',
        why: 'With no leverage, a hard push can cost more than it can win. But asking once, respectfully, is nearly free — and the answer is information about whether to stay.',
        say: '"I want to accept, and I will. Before I do — is there any flexibility on [item]? If not, that is genuinely fine."',
        next: 'Ask once. Accept the answer gracefully. Then start building the alternative that gives you leverage next time — that is the real fix.'
      }
    }
  },

  /* ---------------------------------------------------------- */
  {
    id: 'escalate',
    title: 'Should I escalate this?',
    blurb: 'Going above someone, to HR, to a regulator, or to a client. Powerful and hard to reverse.',
    icon: 'alert',
    accent: 'signal',
    tags: ['conflict', 'work', 'risk'],
    start: 'severity',
    nodes: {
      severity: {
        q: 'What kind of problem is this?',
        opts: [
          { label: 'Safety, legality, fraud, or harm', to: 'escalate-now' },
          { label: 'Repeated behaviour toward me or others', to: 'documented' },
          { label: 'Work is blocked or slipping', to: 'direct-first' },
          { label: 'Something that annoys me', to: 'own-it' }
        ]
      },
      'escalate-now': {
        out: 'Escalate. Today. Through the formal route, in writing.',
        why: 'Safety, legality and harm are not proportionality questions. Delay transfers the risk to someone else, and to you for having known.',
        say: '"I am reporting a concern about [specific fact]. Here is what I observed, when, and who was present."',
        next: 'Use the named formal channel (safety officer, compliance, regulator, union). Facts and dates only, no characterisation. Keep a copy outside the organisation.'
      },
      documented: {
        q: 'Do you have a written record — dates, incidents, witnesses?',
        opts: [
          { label: 'Yes', to: 'formal' },
          { label: 'No, it is all in my memory', to: 'document-first' }
        ]
      },
      'document-first': {
        out: 'Document first, for two to three weeks, before you escalate.',
        why: 'Undocumented pattern complaints collapse into "a personality clash" — that is how they are received and how they get closed. A dated log turns a feeling into evidence.',
        say: 'In your log, per incident: date, time, what was said or done, who was present, effect on the work.',
        next: 'Log every instance. Keep it on personal storage. Then escalate with the log, using the formal branch.'
      },
      formal: {
        q: 'Have you told the person directly, or is that unsafe?',
        opts: [
          { label: 'I have told them', to: 'formal-go' },
          { label: 'It would be unsafe or futile', to: 'formal-go' },
          { label: 'No, and it would be safe to try', to: 'direct-first' }
        ]
      },
      'formal-go': {
        out: 'Escalate formally — one level, in writing, factual, with an ask.',
        why: 'Escalations succeed when they are specific and land at exactly one level above the problem. Jumping four levels or copying everyone converts a valid complaint into a political event.',
        say: '"I want to raise a pattern of [behaviour]. Attached are dated examples. What I am asking for is [specific outcome]."',
        next: 'Name the outcome you want, not just the grievance. Send to one person. Keep a copy elsewhere. Expect it to be slow.'
      },
      'direct-first': {
        q: 'Have you raised it once, plainly, with the person involved?',
        opts: [
          { label: 'Yes — nothing changed', to: 'one-level' },
          { label: 'No, not directly', to: 'go-direct' }
        ]
      },
      'go-direct': {
        out: 'Go direct first. Once, specifically, and privately.',
        why: 'Escalating before speaking to the person is the single fastest way to lose the moral high ground — and it is usually the thing you will be asked about first.',
        say: '"Can we sort something out? When [specific thing] happens, [specific effect]. Could we do [specific alternative]?"',
        next: 'Have that conversation this week. Note the date. If nothing changes, you now have a legitimate escalation.'
      },
      'one-level': {
        out: 'Escalate one level, framed as a blocked outcome rather than a complaint about a person.',
        why: 'Managers act on risk to outcomes far more reliably than on interpersonal reports. Same facts, different frame, very different response.',
        say: '"[Deliverable] is at risk. I have tried [what you tried] with [person]. I need a decision on [specific thing] to move it forward."',
        next: 'Go up exactly one level. Bring the two things you already tried and the one decision you need.'
      },
      'own-it': {
        out: 'Do not escalate. This is yours to absorb or to change yourself.',
        why: 'Escalation is a limited-supply instrument. Spending it on irritation devalues it for the moment you genuinely need it — and it will be remembered.',
        say: 'To yourself: is this affecting the work, or is it affecting my mood?',
        next: 'Either raise it lightly and directly with the person, or drop it deliberately. What corrodes you is the third option: carrying it and telling everyone except them.'
      }
    }
  },

  /* ---------------------------------------------------------- */
  {
    id: 'respond-now',
    title: 'Should I respond now?',
    blurb: 'The message that made your chest tighten. Timing is most of the outcome.',
    icon: 'chat',
    accent: 'atlas',
    tags: ['communication', 'conflict', 'email'],
    start: 'charged',
    nodes: {
      charged: {
        q: 'How is your body right now?',
        note: 'Heart rate, jaw, heat in the face. Composition quality drops sharply under adrenaline, and you cannot feel it happening.',
        opts: [
          { label: 'Calm', to: 'urgent' },
          { label: 'Activated — angry, hurt, or panicked', to: 'cool-off' }
        ]
      },
      'cool-off': {
        q: 'Is there a genuine deadline in the next hour?',
        opts: [
          { label: 'No', to: 'wait' },
          { label: 'Yes, genuinely', to: 'holding' }
        ]
      },
      wait: {
        out: 'Do not respond yet. Write it, do not send it, and wait.',
        why: 'Almost nobody regrets waiting ninety minutes. A large number of people can quote, from memory, the message they sent in the first ten.',
        say: 'Write the furious version in a notes app. Then close it. Reread in an hour and keep only the facts.',
        next: 'Set a timer. When it rings, ask: what outcome do I want here? Write only the sentences that serve that outcome.'
      },
      holding: {
        out: 'Send a holding reply only. Do not engage the substance.',
        why: 'A holding line buys you composure without appearing to ignore the sender. It costs one sentence and prevents most escalations.',
        say: '"Thanks — I have seen this. I want to give you a proper answer, so I will come back to you by [specific time]."',
        next: 'Send exactly that and nothing else. No justification, no first rebuttal, no "but". Then take the wait branch.'
      },
      urgent: {
        q: 'Do you actually have the information to answer well?',
        opts: [
          { label: 'Yes', to: 'audience' },
          { label: 'No — I would be guessing', to: 'get-facts' }
        ]
      },
      'get-facts': {
        out: 'Do not answer yet. Get the missing fact first.',
        why: 'A confident wrong answer is far more expensive to walk back than a short delay. Speed is only a virtue when the content is right.',
        say: '"Before I answer — [specific question]? I would rather be right than fast on this one."',
        next: 'Ask the one question that unlocks the answer. Do not send a hedged answer alongside it; the hedge is what will be quoted.'
      },
      audience: {
        q: 'Who else is on this message?',
        opts: [
          { label: 'Just the two of us', to: 'reply-plain' },
          { label: 'A group, or people senior to us', to: 'split' }
        ]
      },
      split: {
        out: 'Split the reply: a short factual note to the group, the real conversation privately.',
        why: 'Disagreements conducted in front of an audience harden, because both parties are now defending a position publicly. Substance in private, status in public.',
        say: 'To the group: "Noted — [name] and I will work out the detail and come back with a proposal." Then message them directly.',
        next: 'Never correct someone in front of their own boss unless the correction is urgent and material. Reply-all is a decision, not a default.'
      },
      'reply-plain': {
        out: 'Reply now. Short, specific, and without the emotional layer.',
        why: 'You are calm, informed, and it is private. This is the ideal condition for a fast reply — and the fast reply is genuinely valuable here.',
        say: 'Three lines: what you understand, what you will do, by when. Delete any sentence about how the message made you feel.',
        next: 'Before sending, reread once and cut the sharpest sentence. It is almost never the one that helps.'
      }
    }
  },

  /* ---------------------------------------------------------- */
  {
    id: 'opportunity',
    title: 'Should I accept this opportunity?',
    blurb: 'A job, a project, a move, a chance that will not stay open. For decisions with real upside and real cost.',
    icon: 'target',
    accent: 'forest',
    tags: ['career', 'decisions', 'risk'],
    start: 'downside',
    nodes: {
      downside: {
        q: 'If this goes badly, can you recover?',
        note: 'Recoverable means: you would be behind, but not broken. Money, health, reputation, relationships.',
        opts: [
          { label: 'Yes — recoverable', to: 'upside' },
          { label: 'No — a bad outcome would be severe', to: 'reduce-risk' }
        ]
      },
      'reduce-risk': {
        q: 'Can you shrink the downside — smaller version, trial period, keep a fallback?',
        opts: [
          { label: 'Yes', to: 'pilot' },
          { label: 'No, it is all or nothing', to: 'no-severe' }
        ]
      },
      pilot: {
        out: 'Take a smaller version first. Buy information before you buy commitment.',
        why: 'Most opportunities can be piloted: a project instead of a role, three months instead of a year, part-time before full-time. A pilot converts an irreversible bet into a reversible one.',
        say: '"I am seriously interested. Could we start with [smaller version] so we both find out whether it works?"',
        next: 'Propose the smaller version with a specific review date. Decide now what result would make you commit fully.'
      },
      'no-severe': {
        out: 'Decline — unless the upside is genuinely life-changing and you are choosing it with clear eyes.',
        why: 'Irreversible severe downside is the one category where expected value reasoning fails you. Surviving to make the next hundred decisions matters more than winning this one.',
        say: '"The shape of this does not work for me right now. If it changes, I would want to hear about it."',
        next: 'If you still want it, write down exactly what would have to be true to make the downside survivable. Only reconsider when that is real, not hoped for.'
      },
      upside: {
        q: 'Is the upside specific, or is it mostly a feeling of momentum?',
        note: 'Specific: a named skill, a real network, a defined amount of money, a credential. Vague: "it could lead somewhere".',
        opts: [
          { label: 'Specific and material', to: 'cost' },
          { label: 'Mostly vague or status-driven', to: 'flattery' }
        ]
      },
      flattery: {
        out: 'Be careful. Being chosen feels like an opportunity even when it is not one.',
        why: 'A great deal of over-commitment comes from flattery rather than value. If you cannot name what you get in one sentence, you are probably buying the feeling of being wanted.',
        say: 'To yourself: "In one sentence — what do I actually get, and would I want it if nobody knew I had been asked?"',
        next: 'If you cannot finish that sentence with something concrete, decline. Politely, quickly, and without inventing a reason.'
      },
      cost: {
        q: 'What does it displace? Name it out loud.',
        note: 'Time, another opportunity, family, health, an existing commitment. There is always something.',
        opts: [
          { label: 'Something I can afford to lose', to: 'accept' },
          { label: 'Something that matters a lot', to: 'compare' },
          { label: 'I cannot name it', to: 'name-cost' }
        ]
      },
      'name-cost': {
        out: 'Stop. You cannot evaluate this until you can name what it costs.',
        why: '"I will fit it in" is the most expensive sentence in decision-making. The cost exists whether or not you have identified it; not naming it just means you will pay it by surprise.',
        say: 'On paper: the hours per week, for how many weeks, and what currently occupies those hours.',
        next: 'Write the number of hours down. Then look at your actual week and find them. Come back with the answer.'
      },
      compare: {
        out: 'Compare them directly, on the same criteria — do not compare a vivid new thing to a familiar old one.',
        why: 'New opportunities arrive with high resolution; existing commitments have faded into background. That asymmetry, not the actual merits, is what decides most of these.',
        say: 'Score both against the same three criteria that matter to you. Use the Decision Matrix tool.',
        next: 'Open the Decision Matrix, list both options as rows, and score them. If the new one does not clearly win, the answer is no.'
      },
      accept: {
        out: 'Accept — and set the terms while you still have leverage.',
        why: 'You have survivable downside, specific upside, and affordable cost. The remaining risk is a yes with unclear terms, which is how good opportunities turn into bad situations.',
        say: '"Yes. To be clear on what we are agreeing: [scope], [timeframe], [what I need from you]."',
        next: 'Write the terms down before you start. Also decide now what would make you exit — and when you will review it.'
      }
    }
  },

  /* ---------------------------------------------------------- */
  {
    id: 'buy-this',
    title: 'Should I buy this?',
    blurb: 'For anything above trivial cost — a purchase, a subscription, a course, an upgrade.',
    icon: 'money',
    accent: 'clay',
    tags: ['money', 'decisions'],
    start: 'problem',
    nodes: {
      problem: {
        q: 'What problem does this solve, in one sentence, without using the product name?',
        opts: [
          { label: 'I can say it clearly', to: 'existing' },
          { label: 'I am struggling to', to: 'no-problem' }
        ]
      },
      'no-problem': {
        out: 'Do not buy it yet. Wait 72 hours.',
        why: 'If the problem cannot be stated without the product in the sentence, the desire arrived before the need. Nearly all regretted purchases fail this test.',
        say: 'To yourself: "What was I doing about this last month?" If the answer is "nothing, it was fine" — that is your answer.',
        next: 'Put it on a list with today\'s date. Revisit in three days. Most items quietly die there, which is the list doing its job.'
      },
      existing: {
        q: 'Do you already own something that mostly does this?',
        opts: [
          { label: 'No', to: 'afford' },
          { label: 'Yes, but it is inadequate', to: 'why-inadequate' },
          { label: 'Yes, I just have not used it', to: 'use-first' }
        ]
      },
      'use-first': {
        out: 'Use what you own for two weeks first. Then re-decide.',
        why: 'Buying a new tool is a very effective way to feel like you are solving a problem without solving it. The unused thing you already own is evidence about you, not about the tool.',
        say: 'To yourself: "The last one did not fail. I stopped using it. What made me stop?"',
        next: 'Two weeks of genuine use. If the limitation is real, you will be able to name it precisely — and then the purchase is informed.'
      },
      'why-inadequate': {
        q: 'Can you name the specific limitation you hit?',
        opts: [
          { label: 'Yes — a concrete blocker', to: 'afford' },
          { label: 'It just feels dated or slow', to: 'use-first' }
        ]
      },
      afford: {
        q: 'Can you pay for it now, in full, without touching money you need?',
        opts: [
          { label: 'Yes', to: 'sizing' },
          { label: 'Only with credit or by stretching', to: 'wait-save' }
        ]
      },
      'wait-save': {
        out: 'Do not buy on credit for this. Save for it and buy it in cash.',
        why: 'Interest and instalments make you a worse decision-maker as well as a poorer one, because the true price is hidden and the pain is deferred. The exception is genuine emergency, and this is not one.',
        say: 'To yourself: "What is the monthly amount, and what is the total including interest?"',
        next: 'Set the amount aside weekly. If you still want it when the money is there, buy it. Waiting also filters out most of the desire.'
      },
      sizing: {
        q: 'Is this a repeated cost or a one-off?',
        opts: [
          { label: 'One-off purchase', to: 'buy-well' },
          { label: 'Subscription or recurring', to: 'recurring' }
        ]
      },
      recurring: {
        out: 'Multiply by twelve, then decide. Set a cancellation reminder now.',
        why: 'Recurring costs are evaluated at the monthly price and paid at the annual one. £14 a month is £168 a year and it renews whether or not you use it.',
        say: 'To yourself: "Would I pay [annual figure] today, in one payment, for this?"',
        next: 'If yes, subscribe — and immediately create a calendar reminder one week before renewal to re-decide. Audit all subscriptions twice a year.'
      },
      'buy-well': {
        out: 'Buy it. Buy the good version once, and check the return window.',
        why: 'You have a real problem, no adequate substitute, and the cash. Repeatedly buying the cheap version of a thing you use often is more expensive than buying the good one.',
        say: 'To yourself: "What is the cost per use, over a year?"',
        next: 'Check the return policy before purchase, keep the receipt, and give it a genuine trial inside the return window.'
      }
    }
  },

  /* ---------------------------------------------------------- */
  {
    id: 'trust-info',
    title: 'Should I trust this information?',
    blurb: 'A claim, a headline, a statistic, a message from a friend, a confident answer from a machine.',
    icon: 'shield',
    accent: 'atlas',
    tags: ['verification', 'digital', 'thinking'],
    start: 'stakes',
    nodes: {
      stakes: {
        q: 'What happens if this is wrong?',
        opts: [
          { label: 'Money, health, legal, or safety consequences', to: 'primary' },
          { label: 'I would look wrong in front of people', to: 'source' },
          { label: 'Nothing much', to: 'low-stakes' }
        ]
      },
      'low-stakes': {
        out: 'Hold it loosely. Do not repeat it as fact.',
        why: 'Not everything needs verifying. But repeating an unverified claim is how it becomes someone else\'s evidence — and eventually returns to you as confirmation.',
        say: 'When passing it on: "I saw this somewhere, I have not checked it."',
        next: 'Say the "I have not checked it" clause out loud. It costs nothing and stops the chain.'
      },
      primary: {
        q: 'Can you get to the primary source — the study, the law, the official page, the account statement?',
        opts: [
          { label: 'Yes', to: 'read-primary' },
          { label: 'No, only reports about it', to: 'triangulate' }
        ]
      },
      'read-primary': {
        out: 'Go to the primary source and read the specific part yourself.',
        why: 'Summaries drift. Numbers get rounded up, conditions get dropped, "may reduce risk in some patients" becomes "reduces risk". At high stakes, secondhand is not good enough.',
        say: 'To yourself: "Does the actual document say this, in these words, about this situation?"',
        next: 'Find the sentence. Read what surrounds it. Check the date and whether it applies to your jurisdiction or circumstances.'
      },
      triangulate: {
        out: 'Require two independent sources before you act — and treat it as provisional either way.',
        why: 'Independent means genuinely separate origins. Fifty outlets rewriting one agency report is one source with fifty voices, which feels like overwhelming confirmation and is not.',
        say: 'To yourself: "Do these two sources share an origin?"',
        next: 'Find two genuinely separate sources. If you cannot, act on the assumption that it might be wrong, and choose the option that survives being wrong.'
      },
      source: {
        q: 'Where did it actually come from, and does that source benefit from you believing it?',
        opts: [
          { label: 'Neutral or credible source', to: 'date' },
          { label: 'The source benefits — seller, campaign, engagement', to: 'discount' },
          { label: 'I cannot tell where it came from', to: 'discount' }
        ]
      },
      discount: {
        out: 'Treat it as a claim, not a fact. Find the version told by someone with nothing to gain.',
        why: 'Interested parties rarely lie outright; they select. The true facts they choose to show you can produce an entirely false picture, which is much harder to detect.',
        say: 'To yourself: "Who benefits if I believe this, and what would the other side say?"',
        next: 'Search deliberately for the strongest opposing case. If you cannot find one stated fairly, you do not understand the issue yet.'
      },
      date: {
        q: 'How old is it, and could it have changed?',
        note: 'Prices, laws, tax rules, medical guidance, deadlines, and anything about a specific organisation change constantly.',
        opts: [
          { label: 'Recent and stable', to: 'ai-check' },
          { label: 'Old, or a fast-changing area', to: 'recheck' }
        ]
      },
      recheck: {
        out: 'Re-verify against a current, dated source before relying on it.',
        why: 'Out-of-date information is the most convincing kind of wrong, because it was true and is still being repeated confidently by people who learned it then.',
        say: 'To yourself: "What is the date on this, and what is the date on the rule?"',
        next: 'Find a source with a visible date. Prefer the official page over a summary of the official page.'
      },
      'ai-check': {
        q: 'Did this come from an AI assistant?',
        opts: [
          { label: 'Yes', to: 'ai-verify' },
          { label: 'No', to: 'good' }
        ]
      },
      'ai-verify': {
        out: 'Verify the checkable parts before you use it. Confidence is not evidence.',
        why: 'Language models are optimised to produce plausible text, not true text. Names, citations, numbers, quotes, dates and legal specifics are the highest-risk categories — and they arrive in the same confident tone as everything else.',
        say: 'To the model: "Which parts of that should I verify independently, and where could you be wrong?"',
        next: 'Check every citation exists. Recalculate every number yourself. Confirm anything legal, medical or financial against a primary source. Then use it.'
      },
      good: {
        out: 'Reasonable to act on — while staying willing to be wrong.',
        why: 'Credible source, current, no obvious incentive, primary where it matters. That is as good as most decisions get.',
        say: 'To yourself: "What would change my mind, and would I notice it if it happened?"',
        next: 'Note the one fact that would overturn this. Being able to state it keeps a conclusion from hardening into an identity.'
      }
    }
  },

  /* ---------------------------------------------------------- */
  {
    id: 'use-ai',
    title: 'Should I use AI for this?',
    blurb: 'Where a model genuinely helps, where it is the wrong instrument, and where it is a liability.',
    icon: 'cpu',
    accent: 'council',
    tags: ['ai', 'tools', 'judgement'],
    start: 'kind',
    nodes: {
      kind: {
        q: 'What kind of task is it?',
        opts: [
          { label: 'Writing, drafting, rewriting, summarising', to: 'sensitive' },
          { label: 'Exact numbers, calculation, or a factual lookup', to: 'wrong-tool' },
          { label: 'Thinking — options, structure, critique, rehearsal', to: 'thinking-yes' },
          { label: 'A judgement or decision someone must own', to: 'judgement' }
        ]
      },
      'wrong-tool': {
        out: 'Wrong instrument. Use a calculator, a spreadsheet, or the authoritative source.',
        why: 'Models predict text. For arithmetic, exact figures, current prices, live data and specific citations, a deterministic tool is both more accurate and faster — and will not invent a confident wrong answer.',
        say: 'Use AI for the *structure* of the calculation, not the calculation: "what formula should I use, and what am I forgetting?"',
        next: 'Do the maths in a spreadsheet. Look the fact up at source. Then, if useful, ask AI to sanity-check your method.'
      },
      'thinking-yes': {
        out: 'Excellent use. Use it as a thinking partner — and make it argue with you.',
        why: 'Option generation, steelmanning, structure, blind-spot hunting and rehearsal are where models are genuinely strong, because being wrong in an interesting way is still useful there.',
        say: '"Here is my situation and my plan: [detail]. Give me three approaches I have not considered, then attack my plan as its strongest critic."',
        next: 'Ask for disagreement explicitly. A model agreeing with you is close to worthless — it will do that regardless of whether you are right.'
      },
      judgement: {
        out: 'Use it to prepare the decision. Do not use it to make the decision.',
        why: 'A model has no stake in your life and cannot be accountable for the outcome. It can lay out trade-offs and expose what you have missed; it cannot hold the consequences. AI supports judgement — it does not replace responsibility.',
        say: '"Lay out the trade-offs, the second-order effects, and what I might be avoiding thinking about. Do not tell me what to do."',
        next: 'Use it to widen the option set and stress-test your reasoning. Then decide yourself, and be able to explain the decision without mentioning the model.'
      },
      sensitive: {
        q: 'Does the input contain anything confidential — client data, personal data, medical, legal, unreleased work, credentials?',
        opts: [
          { label: 'No', to: 'stakes-ai' },
          { label: 'Yes', to: 'redact' },
          { label: 'I am not sure', to: 'redact' }
        ]
      },
      redact: {
        q: 'Can you get the same help with the specifics removed?',
        opts: [
          { label: 'Yes — anonymise it', to: 'redacted-ok' },
          { label: 'No, the specifics are the task', to: 'no-paste' }
        ]
      },
      'redacted-ok': {
        out: 'Use it, but strip the identifying detail first.',
        why: 'Most requests do not need the real names to get a good answer. "A client in the construction sector" gets the same quality of draft as the actual company name, with none of the exposure.',
        say: 'Replace names, figures, and identifiers with placeholders: [CLIENT], [AMOUNT], [DATE]. Then paste.',
        next: 'Anonymise, get the draft, then reinsert the real details yourself in your own document.'
      },
      'no-paste': {
        out: 'Do not paste it. Use AI on the shape of the work instead.',
        why: 'Assume anything you paste may be retained, reviewed, or logged. Some categories — client confidential, health, legal privilege, other people\'s personal data, credentials — are not yours to risk.',
        say: 'Ask instead: "What should a [document type] like this contain, and what do people usually get wrong?"',
        next: 'Get the structure and the checklist from AI. Write the actual content yourself, in the approved system. Check your organisation\'s policy.'
      },
      'stakes-ai': {
        q: 'Will this output go to someone who matters, or drive a real decision?',
        opts: [
          { label: 'Yes', to: 'verify-first' },
          { label: 'No — internal, rough, or for me', to: 'fast-yes' }
        ]
      },
      'fast-yes': {
        out: 'Go ahead. Move fast, read it once before using it.',
        why: 'Low stakes and no confidential input is exactly where AI pays off with no ceremony. Reserve your verification effort for where it matters.',
        say: 'Give it the goal, the audience, the constraints, and the format you want back.',
        next: 'One read-through for anything obviously wrong or oddly phrased, then use it.'
      },
      'verify-first': {
        out: 'Use it as a first draft only. Verify, then rewrite in your own voice, then own it.',
        why: 'Anything with your name on it is your responsibility. Models produce fluent text with invented specifics — and fluency is what stops reviewers from checking.',
        say: 'To yourself: "Which claims here would embarrass me if they were wrong?" Check each one.',
        next: 'Verify every fact, figure, name and citation. Cut the generic sentences. Rewrite the opening and closing yourself — those are where AI voice is most obvious.'
      }
    }
  },

  /* ---------------------------------------------------------- */
  {
    id: 'automate',
    title: 'Should I automate this?',
    blurb: 'Before you automate anything, check whether it should exist at all.',
    icon: 'bolt',
    accent: 'amber',
    tags: ['time', 'systems', 'ai'],
    start: 'necessary',
    nodes: {
      necessary: {
        q: 'What happens if this task simply stops?',
        note: 'Ask honestly. A surprising amount of recurring work survives only because nobody has asked this question.',
        opts: [
          { label: 'Something real breaks', to: 'frequency' },
          { label: 'Someone would be mildly annoyed', to: 'challenge' },
          { label: 'Honestly, nothing', to: 'eliminate' }
        ]
      },
      eliminate: {
        out: 'Eliminate it. Do not automate it.',
        why: 'An automated unnecessary task is worse than a manual one: it now runs forever, invisibly, and someone will maintain it for years. The best time saving is work that disappears.',
        say: '"I am going to stop producing [thing] from [date]. Tell me if you need it and I will keep it going."',
        next: 'Announce the stop rather than asking permission. Silence is your answer. Keep one archived example in case.'
      },
      challenge: {
        out: 'Test whether it is needed before investing in it — stop it for one cycle.',
        why: 'Reports and rituals persist because stopping them feels riskier than continuing. A single skipped cycle produces better information than any amount of discussion.',
        say: '"I am going to skip this month\'s [thing] as an experiment. If anyone misses it, I will reinstate it immediately."',
        next: 'Skip one cycle. If nobody notices, eliminate it. If one person needs one part, produce only that part.'
      },
      frequency: {
        q: 'How often does it actually happen?',
        opts: [
          { label: 'Daily or weekly', to: 'variable' },
          { label: 'Monthly', to: 'time-cost' },
          { label: 'Rarely, or never the same way twice', to: 'not-worth' }
        ]
      },
      'not-worth': {
        out: 'Do not automate. Write a checklist instead.',
        why: 'Automation earns its build-and-maintenance cost through repetition. For rare or highly variable work, a written procedure captures nearly all the benefit at a fraction of the cost — and does not silently break.',
        say: 'Write the steps down the next time you do it, while you are doing it.',
        next: 'Create a short checklist and store it where the work happens. That is the correct level of investment here.'
      },
      'time-cost': {
        q: 'How long does it take, and how long would automating it take?',
        note: 'Include maintenance. Automations break, and they break at the worst time.',
        opts: [
          { label: 'Automating pays back within a few months', to: 'variable' },
          { label: 'It would take longer to build than it saves', to: 'standardise' }
        ]
      },
      standardise: {
        out: 'Standardise instead of automating. Template it.',
        why: 'Most of the time cost in recurring work is deciding what to do, not doing it. A template removes the deciding, which is often 70% of the saving for 5% of the effort.',
        say: 'Build the template once, from the last good version you produced.',
        next: 'Make the template, store it with the work, and use it next time. Revisit automation only if the frequency increases.'
      },
      variable: {
        q: 'Are the steps the same every time, or does each case need judgement?',
        opts: [
          { label: 'Same every time — mechanical', to: 'automate-yes' },
          { label: 'Needs judgement, but the shape repeats', to: 'ai-assist' },
          { label: 'Entirely different each time', to: 'not-worth' }
        ]
      },
      'automate-yes': {
        out: 'Automate it — and build in a visible failure alarm.',
        why: 'Repetitive, deterministic, frequent: this is exactly what automation is for. The real danger is silent failure, where it stops working and nobody notices for a month.',
        say: 'To yourself: "How will I know within a day if this stops working?"',
        next: 'Build the smallest working version. Add a notification on failure. Document what it does and how to run it manually. Then review it in a month.'
      },
      'ai-assist': {
        out: 'Do not fully automate. Put AI in the middle and keep yourself at the end.',
        why: 'Judgement work suits an assisted pipeline rather than an autonomous one: the machine does the volume, you do the deciding and take the responsibility.',
        say: 'Design it as: INPUT → AI drafts → you review and correct → OUTPUT → action.',
        next: 'Write the reusable prompt with your standards and constraints in it. Save it. Always keep the human review step — that is the step that makes it safe.'
      }
    }
  },

  /* ---------------------------------------------------------- */
  {
    id: 'say-no',
    title: 'How do I say no to this?',
    blurb: 'You have already decided. This is about the wording, the channel, and holding it when they push.',
    icon: 'shield',
    accent: 'signal',
    tags: ['boundaries', 'communication'],
    start: 'who',
    nodes: {
      who: {
        q: 'Who are you saying no to?',
        opts: [
          { label: 'Someone with power over me', to: 'power' },
          { label: 'A peer or colleague', to: 'peer' },
          { label: 'A friend or family member', to: 'close' },
          { label: 'A stranger, seller, or cold approach', to: 'stranger' }
        ]
      },
      power: {
        q: 'Are you refusing the task, or the terms?',
        opts: [
          { label: 'The terms — timing, scope, resources', to: 'counter' },
          { label: 'The task itself', to: 'principled' }
        ]
      },
      counter: {
        out: 'Do not say no. Say "yes, and here is what that requires."',
        why: 'With someone who has authority, a flat refusal is read as unwillingness even when it is genuine incapacity. Naming the requirement moves the decision to them without a confrontation.',
        say: '"I can do this. To hit that date I would need [specific thing] — or [other commitment] moves. Which works?"',
        next: 'Put the requirement in writing. If they decline to provide it and still want the date, you have a documented record rather than an argument.'
      },
      principled: {
        out: 'Refuse plainly, in writing, with your reason stated once — and get advice if it is serious.',
        why: 'Refusing a task on principle is legitimate and occasionally necessary. It needs to be unambiguous, on the record, and free of sarcasm or moral commentary, because it may be read by people who were not there.',
        say: '"I am not able to do [specific thing]. My concern is [one factual sentence]. I am happy to help with [alternative] instead."',
        next: 'Say it once and do not relitigate it. If it involves safety, legality or ethics, tell one other person and keep a dated copy off the company system.'
      },
      peer: {
        out: 'Short, warm, no case file. Add a route if you have one.',
        why: 'Long explanations invite negotiation, because every reason offered is a problem they can try to solve. Brevity is what makes a peer no stick.',
        say: '"I cannot take that on this week. [Alternative route or person] might be able to help."',
        next: 'Do not apologise more than once and do not offer a second reason under pressure. Repeat the same sentence if pushed.'
      },
      close: {
        q: 'Is the real issue the request, or the pattern behind it?',
        opts: [
          { label: 'Just this request', to: 'kind-no' },
          { label: 'A pattern I need to change', to: 'pattern-talk' }
        ]
      },
      'kind-no': {
        out: 'Decline the request, affirm the person, and do not invent an excuse.',
        why: 'Fabricated excuses are the main source of guilt afterwards, and they collapse when the fake reason evaporates. "I cannot" is a complete sentence and it ages far better.',
        say: '"I am not going to be able to do this one. I am sorry — it is not about you, and I hope it goes well."',
        next: 'Say it in person or by voice if the relationship matters. Text is where warmth goes missing.'
      },
      'pattern-talk': {
        out: 'Say no to this instance, then have the separate conversation about the pattern — not in the same breath.',
        why: 'Bundling a refusal with a grievance makes the refusal look like a symptom of resentment, and the grievance look like an excuse. Separate them and both land better.',
        say: 'Now: "I cannot do this one." Later, calmly: "Can we talk about how often this comes up? I want to be able to say yes sometimes, and right now I am at the point of dreading the ask."',
        next: 'Decline today. Book the second conversation for a neutral moment within a week, when neither of you is upset.'
      },
      stranger: {
        out: 'One sentence. No reason. Do not re-engage.',
        why: 'Cold approaches and sales scripts are built to convert any engagement into a conversation, and any conversation into a negotiation. Politeness that keeps the door open is what they are optimised for.',
        say: '"No thank you." Then stop responding.',
        next: 'Do not explain, do not counter-offer, do not answer the follow-up. If it is pressured or urgent-sounding, treat that as a warning sign rather than a reason to hurry.'
      }
    }
  }
]

export const treeById = id => TREES.find(t => t.id === id)

/** Count question nodes and outcomes — used by the index cards. */
export function treeStats (t) {
  const nodes = Object.values(t.nodes)
  return {
    questions: nodes.filter(n => n.q).length,
    outcomes: nodes.filter(n => n.out).length
  }
}

/** Docs for the global search index. */
export const searchDocs = () => TREES.map(t => ({
  kind: 'tree',
  title: t.title,
  sub: 'Interactive decision tool',
  route: `tree/${t.id}`,
  group: 'Decision tools',
  body: [
    t.title, t.blurb, (t.tags || []).join(' '),
    ...Object.values(t.nodes).map(n => `${n.q || ''} ${n.note || ''} ${n.out || ''} ${n.why || ''}`)
  ].join(' ')
}))
