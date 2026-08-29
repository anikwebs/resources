/* =============================================================
   LEARNING PATHS — §23.
   Ten paths. Each is a real, ordered curriculum assembled from
   material that already exists in this app:

     lessons[]    corpus unit ids   (public/content/lesson/*.json)
     situations[] situation ids     (public/content/situation/*.json)
     tools[]      toolkit ids       (src/tools/*)
     scenarios[]  scenario ids      (src/data/scenarios.js)
     trees[]      decision tree ids (src/data/trees.js)
     ai[]         AI core routes    (src/data/ai.js, ai-library.js)
     reflect[]    reflection prompts, saved as notes

   Progress on a path is derived, never invented: it is the count
   of its lesson + situation ids that appear in the completed set.
   ============================================================= */

export const PATHS = [
  {
    id: 'resourceful',
    number: 1,
    title: 'Become More Resourceful',
    tagline: 'The spine of the whole system.',
    icon: 'compass',
    accent: 'forest',
    weeks: 6,
    lede: 'The one path to take if you take only one. Steadiness, then observation, then the ability to find out anything, then the ability to act on it. Everything else in this library is a specialisation of these four moves.',
    outcome: 'You can walk into an unfamiliar problem, stay steady, work out what is actually happening, find what you need, and take a first move you can defend.',
    forYou: [
      'You are competent but feel like you improvise everything.',
      'You want one ordered route rather than 239 documents.',
      'You want the general skill, not a specific fix.'
    ],
    stages: [
      {
        n: 1,
        title: 'Get steady first',
        why: 'Every other skill degrades under flooding. This is not self-care framing — it is the precondition for using judgment at all.',
        lessons: ['a-1.1', 'a-1.2', 'a-1.4'],
        situations: ['work-boss-shouting'],
        tools: ['reflection'],
        trees: ['respond-now'],
        scenarios: [],
        ai: [],
        reflect: 'Describe the last time you reacted in a way you regretted within the hour. What was the first physical signal you missed?'
      },
      {
        n: 2,
        title: 'See what is actually there',
        why: 'Most bad decisions are made on a story, not on facts. Separating the two is a mechanical skill.',
        lessons: ['a-2.1', 'a-2.2', 'a-2.3'],
        situations: ['people-gaslit-partner'],
        tools: ['problem-canvas'],
        trees: [],
        scenarios: ['ai-said-so'],
        ai: ['ai/verify'],
        reflect: 'Take a belief you hold about a person at work. Write the observable evidence separately from your interpretation.'
      },
      {
        n: 3,
        title: 'Find out anything',
        why: 'Resourcefulness is largely the speed of going from "I do not know" to "I have a usable answer".',
        lessons: ['a-3.1', 'a-3.2', 'a-3.3', 'a-3.4'],
        situations: [],
        tools: ['credibility-checker', 'learning-planner'],
        trees: ['trust-info'],
        scenarios: [],
        ai: ['ai/workflow', 'ai/context'],
        reflect: 'Name something you have avoided finding out. Give it twenty minutes and write what you now know.'
      },
      {
        n: 4,
        title: 'Say the thing',
        why: 'Understanding a situation you cannot talk about changes nothing. Clarity under pressure is the delivery mechanism.',
        lessons: ['a-4.2', 'a-4.3', 'a-4.4'],
        situations: ['work-impossible-deadline', 'people-guilt-tripped'],
        tools: ['conversation-planner'],
        trees: ['say-no'],
        scenarios: ['late-ask'],
        ai: ['ai/roleplay'],
        reflect: 'Write the opening two sentences of a conversation you have been postponing.'
      },
      {
        n: 5,
        title: 'Finish and repair',
        why: 'The last ten per cent and the recovery after failure are where most reputational value is created.',
        lessons: ['a-5.1', 'a-5.2', 'a-5.8', 'a-1.7'],
        situations: ['work-blamed-publicly'],
        tools: ['priority-matrix', 'task-decomposition'],
        trees: [],
        scenarios: ['shrinking-window'],
        ai: ['ai/leverage'],
        reflect: 'What is at ninety per cent right now, and what is the exact next physical action?'
      },
      {
        n: 6,
        title: 'Decide like an adult',
        why: 'Judgment is the compounding skill. Reversibility, criteria and premortems are the whole of it.',
        lessons: ['a-7.1', 'a-7.2', 'a-7.4', 'a-7.7'],
        situations: [],
        tools: ['decision-matrix', 'risk-analyzer'],
        trees: ['say-yes'],
        scenarios: ['two-offers'],
        ai: ['ai/decide'],
        reflect: 'Write the criteria for a decision you are facing, before you look at the options again.'
      }
    ]
  },

  {
    id: 'think-better',
    number: 2,
    title: 'Think Better',
    tagline: 'Facts, arguments, bias and your own reasoning.',
    icon: 'brain',
    accent: 'council',
    weeks: 5,
    lede: 'A working course in clear thinking for people who have to act, not publish. Evidence handling, bias catching, argument structure and the discipline of holding two ideas without collapsing into either.',
    outcome: 'You can tell a fact from a story, state the opposing case fairly, spot the common manipulations, and know how confident you are actually entitled to be.',
    forYou: [
      'You want to stop being convinced by fluent nonsense.',
      'You notice you decide first and justify after.',
      'You work with information you cannot personally verify.'
    ],
    stages: [
      {
        n: 1,
        title: 'Facts, stories and observation',
        why: 'The single highest-yield distinction in the whole subject.',
        lessons: ['a-2.1', 'a-2.2', 'b-2.1'],
        situations: ['people-gaslit-partner'],
        tools: ['problem-canvas'],
        trees: [],
        scenarios: [],
        ai: [],
        reflect: 'Write one paragraph of pure observation about a current conflict. No motives, no adjectives.'
      },
      {
        n: 2,
        title: 'Better questions',
        why: 'The quality of an answer is capped by the quality of the question. This is the cheapest available upgrade.',
        lessons: ['a-2.3', 'b-2.2', 'a-2.5'],
        situations: [],
        tools: ['problem-canvas'],
        trees: [],
        scenarios: [],
        ai: ['ai/context'],
        reflect: 'Take a problem you are stuck on. Write five questions you have not asked about it.'
      },
      {
        n: 3,
        title: 'Bias and bad arguments',
        why: 'You cannot delete bias. You can install checks that catch the expensive forms.',
        lessons: ['a-2.4', 'a-2.6', 'b-2.5', 'd-09'],
        situations: ['people-guilt-tripped', 'people-pressure-sale'],
        tools: ['credibility-checker'],
        trees: [],
        scenarios: ['ai-said-so'],
        ai: ['ai/verify'],
        reflect: 'Which bias do you most reliably fall into? Write the specific situation that triggers it.'
      },
      {
        n: 4,
        title: 'Honesty and uncertainty',
        why: 'Intellectual honesty is not a virtue display; it is what keeps your model of the world accurate enough to act on.',
        lessons: ['a-2.7', 'a-2.8', 'b-2.6', 'a-7.6'],
        situations: [],
        tools: ['reflection', 'decision-matrix'],
        trees: [],
        scenarios: [],
        ai: [],
        reflect: 'Name something you were confident about and wrong about. What was the tell you ignored?'
      },
      {
        n: 5,
        title: 'Evidence like a professional',
        why: 'Handling sources, statistics and primary documents is now basic literacy.',
        lessons: ['a-3.3', 'a-6.6', 'b-2.7', 'b-2.8', 'd-11'],
        situations: ['digital-lied-about-online'],
        tools: ['credibility-checker'],
        trees: ['trust-info'],
        scenarios: [],
        ai: ['ai/verify', 'ai/tools'],
        reflect: 'Trace one belief back to its original source. Write down where the chain broke.'
      }
    ]
  },

  {
    id: 'communicate-better',
    number: 3,
    title: 'Communicate Better',
    tagline: 'Be understood, be trusted, say the hard thing.',
    icon: 'chat',
    accent: 'clay',
    weeks: 5,
    lede: 'From "my emails get ignored" to "I can run the difficult conversation and still be trusted afterwards". Clarity first, listening second, then conflict, feedback and influence.',
    outcome: 'You can lead with the point, repeat someone\'s position accurately, deliver bad news early, decline cleanly, and influence without technique-smell.',
    forYou: [
      'You are right and not heard.',
      'You avoid conversations and then have worse ones.',
      'You want scripts you would actually say out loud.'
    ],
    stages: [
      {
        n: 1,
        title: 'Point first',
        why: 'Most workplace friction is ambiguity, not disagreement.',
        lessons: ['a-4.2', 'b-4.3', 'b-4.4', 'd-16'],
        situations: [],
        tools: ['conversation-planner'],
        trees: [],
        scenarios: [],
        ai: ['ai/office/email'],
        reflect: 'Rewrite your last long message so the ask is the first sentence. What became unnecessary?'
      },
      {
        n: 2,
        title: 'Listen until you can repeat it',
        why: 'Accurate summary lowers defences faster than any persuasion move.',
        lessons: ['a-4.3', 'b-4.1', 'a-4.1', 'b-4.2'],
        situations: ['conflict-friend-betrayal', 'life-child-in-trouble'],
        tools: ['conversation-planner'],
        trees: [],
        scenarios: ['silent-team'],
        ai: [],
        reflect: 'Write the other person\'s position so well they would agree with your version.'
      },
      {
        n: 3,
        title: 'The difficult conversation',
        why: 'Delay makes it worse and makes you worse at it.',
        lessons: ['a-4.4', 'a-4.5', 'b-4.5', 'd-17'],
        situations: ['conflict-family-money', 'life-relationship-ending', 'work-blamed-publicly'],
        tools: ['conversation-planner', 'scenario-simulator'],
        trees: ['respond-now'],
        scenarios: ['wrong-number', 'angry-customer'],
        ai: ['ai/roleplay', 'ai/problem/p-badnews'],
        reflect: 'Write your opening two sentences: observable thing, then what you want.'
      },
      {
        n: 4,
        title: 'No, boundaries and negotiation',
        why: 'A yes you cannot keep is more damaging than a no you can defend.',
        lessons: ['b-4.6', 'a-4.7', 'b-4.7', 'd-18'],
        situations: ['people-guilt-tripped', 'money-contract-pressure', 'work-impossible-deadline'],
        tools: ['negotiation-planner', 'conversation-planner'],
        trees: ['say-no', 'negotiate'],
        scenarios: ['late-ask'],
        ai: ['ai/problem/p-boundary'],
        reflect: 'Write one refusal sentence with every self-justifying clause removed.'
      },
      {
        n: 5,
        title: 'Influence and repair',
        why: 'Winning arguments and losing decisions is a solvable problem. So is rebuilding after conflict.',
        lessons: ['a-4.6', 'a-4.8', 'b-4.8', 'd-19'],
        situations: ['work-credit-stolen', 'people-mob-online'],
        tools: ['conversation-planner', 'personal-swot'],
        trees: ['escalate'],
        scenarios: [],
        ai: ['ai/decide'],
        reflect: 'Restate a rejected proposal in terms of what the decider is measured on.'
      }
    ]
  },

  {
    id: 'work-better',
    number: 4,
    title: 'Work Better',
    tagline: 'Priorities, execution, systems, finishing.',
    icon: 'inbox',
    accent: 'forest',
    weeks: 5,
    lede: 'Not productivity theatre. Choosing what to abandon, starting in two minutes, building checklists that prevent errors, mapping the machine, delegating, and finishing the last ten per cent.',
    outcome: 'Your week has three real priorities, your stalled work has next actions, your recurring failures have structural fixes, and things you start get finished.',
    forYou: [
      'You are busy and cannot name what moved.',
      'The same fire happens monthly.',
      'You have many things at ninety per cent.'
    ],
    stages: [
      {
        n: 1,
        title: 'Choose three',
        why: 'Priority is subtraction. A list of twelve priorities is a list of none.',
        lessons: ['a-5.1', 'b-1.2', 'b-5.1'],
        situations: ['work-impossible-deadline'],
        tools: ['priority-matrix', 'goal-planner'],
        trees: ['say-yes'],
        scenarios: ['shrinking-window'],
        ai: ['ai/leverage'],
        reflect: 'Write this week\'s three. Put everything else on a "not this week" page and leave it there.'
      },
      {
        n: 2,
        title: 'Start and protect focus',
        why: 'Undefined next actions and unprotected attention explain most stalling.',
        lessons: ['a-5.2', 'b-1.3', 'b-5.2', 'b-5.3', 'a-1.3'],
        situations: [],
        tools: ['task-decomposition', 'habit-planner'],
        trees: [],
        scenarios: [],
        ai: ['ai/builder'],
        reflect: 'Write the next physical action for your most stalled item, in under eight words.'
      },
      {
        n: 3,
        title: 'Systems over heroics',
        why: 'If the fix needs someone to remember, it is not a fix.',
        lessons: ['a-5.3', 'a-5.4', 'b-5.4', 'b-5.5', 'b-5.6'],
        situations: [],
        tools: ['problem-canvas', 'risk-analyzer'],
        trees: ['automate'],
        scenarios: [],
        ai: ['ai/office/projects'],
        reflect: 'Draw the five steps of a process that keeps breaking. Mark where it breaks, not where it is noticed.'
      },
      {
        n: 4,
        title: 'Delegate and manage up',
        why: 'Work nobody can see and work only you can do are both career risks.',
        lessons: ['a-5.6', 'a-5.7', 'b-5.7', 'd-20'],
        situations: ['work-credit-stolen', 'conflict-performance-review-ambush'],
        tools: ['meeting-planner', 'conversation-planner'],
        trees: ['escalate'],
        scenarios: ['silent-team'],
        ai: ['ai/office/management', 'ai/office/meetings'],
        reflect: 'Draft a five-line weekly note: moved, stuck, need, at risk, next.'
      },
      {
        n: 5,
        title: 'Finish',
        why: 'The last ten per cent is where the reputation is decided.',
        lessons: ['a-5.8', 'b-5.8', 'd-22'],
        situations: [],
        tools: ['task-decomposition', 'reflection'],
        trees: [],
        scenarios: [],
        ai: ['ai/office/reports'],
        reflect: 'Define "done" for your current main piece of work, in one sentence anyone could check.'
      }
    ]
  },

  {
    id: 'learn-better',
    number: 5,
    title: 'Learn Better',
    tagline: 'Get to useful fast, and make it stick.',
    icon: 'book',
    accent: 'atlas',
    weeks: 4,
    lede: 'Adults rarely need mastery. They need functional capability by Thursday. This path is learning designed around a deliverable rather than a syllabus, plus the retention mechanics that stop it evaporating.',
    outcome: 'You can take an unfamiliar skill to a usable level in ninety minutes of well-designed work, and keep it.',
    forYou: [
      'You consume material and cannot do anything new.',
      'You start at chapter one of everything and finish nothing.',
      'You confuse familiarity with skill.'
    ],
    stages: [
      {
        n: 1,
        title: 'Design the target',
        why: 'Learning without a named artefact is entertainment.',
        lessons: ['a-3.5', 'b-3.6'],
        situations: [],
        tools: ['learning-planner', 'goal-planner'],
        trees: [],
        scenarios: [],
        ai: ['ai/context'],
        reflect: 'Name the smallest real thing you must produce with this skill, and its deadline.'
      },
      {
        n: 2,
        title: 'Find the material that matters',
        why: 'Most of any field is optional for your purpose. Finding the twenty per cent is the skill.',
        lessons: ['a-3.2', 'a-3.4', 'b-2.7', 'b-3.2'],
        situations: [],
        tools: ['credibility-checker'],
        trees: ['trust-info'],
        scenarios: [],
        ai: ['ai/problem/p-research'],
        reflect: 'Who already knows this well? What is the one thing you would ask them?'
      },
      {
        n: 3,
        title: 'Practice that transfers',
        why: 'Recall tests flatter you. Application tests inform you.',
        lessons: ['d-12', 'a-3.1', 'b-3.7'],
        situations: [],
        tools: ['learning-planner', 'habit-planner'],
        trees: [],
        scenarios: [],
        ai: ['ai/roleplay'],
        reflect: 'Design one exercise where you would visibly fail if you had not learned it.'
      },
      {
        n: 4,
        title: 'Retain and teach',
        why: 'Teaching it back is the only reliable test of whether you have it.',
        lessons: ['d-13', 'a-8.1', 'b-3.8'],
        situations: [],
        tools: ['reflection'],
        trees: [],
        scenarios: [],
        ai: ['ai/problem/p-understand', 'ai/problem/p-remember'],
        reflect: 'Explain the core idea in five sentences to someone who does not know the field.'
      }
    ]
  },

  {
    id: 'decide-better',
    number: 6,
    title: 'Decide Better',
    tagline: 'Reversibility, criteria, premortems, second-order effects.',
    icon: 'scale',
    accent: 'council',
    weeks: 4,
    lede: 'The compounding path. A few dozen decisions largely determine the shape of a working life, and most of them are made without written criteria, which is why they cannot be reviewed or improved.',
    outcome: 'You treat one-way and two-way doors differently, write criteria before options, run a premortem on anything expensive, and can reconstruct why you chose what you chose.',
    forYou: [
      'You decide by whoever spoke last.',
      'You cannot explain past decisions to yourself.',
      'You are facing something genuinely large.'
    ],
    stages: [
      {
        n: 1,
        title: 'The decision seven',
        why: 'A short repeatable structure beats a long one you never use.',
        lessons: ['a-7.1', 'b-7.1'],
        situations: [],
        tools: ['decision-matrix'],
        trees: ['say-yes'],
        scenarios: [],
        ai: ['ai/decide'],
        reflect: 'Write the criteria for a live decision, before looking at options again.'
      },
      {
        n: 2,
        title: 'Doors and reversibility',
        why: 'Speed is correct for two-way doors and reckless for one-way ones.',
        lessons: ['a-7.2', 'b-7.6', 'd-30'],
        situations: [],
        tools: ['risk-analyzer', 'opportunity-cost'],
        trees: ['quit', 'buy-this'],
        scenarios: ['two-offers'],
        ai: [],
        reflect: 'Classify your three pending decisions: which doors swing both ways?'
      },
      {
        n: 3,
        title: 'Risk, premortem, red team',
        why: 'Imagining the failure in advance is the cheapest available insurance.',
        lessons: ['a-7.3', 'a-7.4', 'b-7.2', 'b-7.4'],
        situations: [],
        tools: ['risk-analyzer', 'problem-canvas'],
        trees: [],
        scenarios: [],
        ai: ['ai/verify'],
        reflect: 'It is six months later and this failed. Write the three likeliest stories.'
      },
      {
        n: 4,
        title: 'Second order and the record',
        why: 'The consequence of the consequence is where most surprises live. A decision journal is how you get calibrated.',
        lessons: ['a-7.5', 'a-7.6', 'a-7.7', 'b-7.3', 'b-7.7', 'd-29'],
        situations: [],
        tools: ['decision-matrix', 'reflection', 'career-decision'],
        trees: ['opportunity'],
        scenarios: ['two-offers', 'shrinking-window'],
        ai: ['ai/challenge'],
        reflect: 'Record a prediction with a confidence percentage. Diary a date to check it.'
      }
    ]
  },

  {
    id: 'difficult',
    number: 7,
    title: 'Handle Difficult Situations',
    tagline: 'Pressure, threat, conflict, crisis, bad actors.',
    icon: 'shield',
    accent: 'signal',
    weeks: 5,
    lede: 'The emergency path. It runs across the situation library rather than the course: what to do in the first ninety seconds, how to de-escalate, how to handle manipulation and how to recover afterwards.',
    outcome: 'You have rehearsed responses for the situations most likely to hurt you, and you know the point at which you stop handling it alone.',
    forYou: [
      'You want the practical response, not the theory.',
      'You freeze in confrontation.',
      'You want to be the useful person in a crisis.'
    ],
    stages: [
      {
        n: 1,
        title: 'The first ninety seconds',
        why: 'In an emergency, sequence matters more than knowledge.',
        lessons: ['a-1.1', 'a-1.4'],
        situations: ['crisis-someone-collapses', 'crisis-car-crash', 'crisis-fire-building', 'crisis-lost-child'],
        tools: [],
        trees: ['respond-now'],
        scenarios: [],
        ai: [],
        reflect: 'Write the first three actions for a medical emergency in your own home, from memory.'
      },
      {
        n: 2,
        title: 'De-escalation and exit',
        why: 'Almost all physical danger advice reduces to distance, exits and not competing for status.',
        lessons: ['a-4.1', 'a-4.8'],
        situations: ['danger-aggressive-stranger', 'danger-followed-street', 'danger-cornered-group', 'conflict-shouted-at-public'],
        tools: ['risk-analyzer'],
        trees: ['respond-now'],
        scenarios: ['angry-customer'],
        ai: [],
        reflect: 'On your usual route home, where are the exits and the lit, occupied places?'
      },
      {
        n: 3,
        title: 'Bad actors and manipulation',
        why: 'Recognising a technique in progress is most of the defence.',
        lessons: ['d-41', 'd-42', 'a-6.7'],
        situations: ['people-gaslit-partner', 'people-love-bombing', 'people-authority-impersonation', 'digital-deepfake-voice', 'people-pressure-sale'],
        tools: ['credibility-checker'],
        trees: ['trust-info'],
        scenarios: [],
        ai: ['ai/safety'],
        reflect: 'Agree a verbal callback rule with your family. Write the exact words.'
      },
      {
        n: 4,
        title: 'Formal pressure',
        why: 'Institutions respond to process. Improvisation in a formal setting is the common self-inflicted wound.',
        lessons: ['a-7.8', 'd-44'],
        situations: ['money-police-questioning', 'money-landlord-eviction', 'conflict-accused-falsely', 'money-debt-collector'],
        tools: ['risk-analyzer', 'conversation-planner'],
        trees: ['escalate'],
        scenarios: [],
        ai: [],
        reflect: 'Write the sentence you would use to pause any formal interview until you have advice.'
      },
      {
        n: 5,
        title: 'Afterwards',
        why: 'Recovery is a skill, and the story you tell yourself afterwards decides how much the event costs you.',
        lessons: ['a-1.7', 'b-8.6', 'a-8.2'],
        situations: ['health-burnout-collapse', 'life-social-humiliation', 'life-funeral-and-grief'],
        tools: ['reflection'],
        trees: [],
        scenarios: [],
        ai: [],
        reflect: 'After the last hard event: what did you handle well? Answer honestly, not modestly.'
      }
    ]
  },

  {
    id: 'career-capability',
    number: 8,
    title: 'Build Career Capability',
    tagline: 'Direction, evidence, positioning, money.',
    icon: 'target',
    accent: 'atlas',
    weeks: 5,
    lede: 'Career work treated as capability accumulation rather than job hunting. Direction narrowed by cheap experiments, capability made visible, then the mechanics of hiring and pay.',
    outcome: 'You can state your direction, show evidence for your capability, survive a screen, and ask for money with a number and a walk-away.',
    forYou: [
      'You have been "figuring out direction" for over a year.',
      'Your value is tied to one company\'s internal systems.',
      'You have never negotiated pay.'
    ],
    stages: [
      {
        n: 1,
        title: 'Direction by evidence',
        why: 'Direction is narrowed by cheap tests, not discovered by introspection.',
        lessons: ['a-6.1', 'b-8.1', 'd-26'],
        situations: [],
        tools: ['personal-swot', 'career-decision'],
        trees: ['opportunity'],
        scenarios: [],
        ai: ['ai/problem/p-decide-life'],
        reflect: 'Design the smallest real test of your two candidate directions, each under ten hours.'
      },
      {
        n: 2,
        title: 'Capability that transfers',
        why: 'Job security is a property of your options, not your employer.',
        lessons: ['a-3.5', 'b-3.6', 'd-26'],
        situations: ['work-fired-blindside', 'money-sudden-income-loss'],
        tools: ['learning-planner', 'goal-planner'],
        trees: [],
        scenarios: [],
        ai: ['ai/problem/p-cv'],
        reflect: 'For your last three good pieces of work, name the artefact a stranger could inspect.'
      },
      {
        n: 3,
        title: 'Visibility and trust',
        why: 'Nobody is coming to discover your contribution.',
        lessons: ['a-5.7', 'd-20', 'd-27'],
        situations: ['work-credit-stolen', 'conflict-performance-review-ambush'],
        tools: ['conversation-planner', 'meeting-planner'],
        trees: ['escalate'],
        scenarios: ['wrong-number'],
        ai: ['ai/office/management'],
        reflect: 'Write your five-line weekly update and send it, unasked, for four weeks.'
      },
      {
        n: 4,
        title: 'Getting hired',
        why: 'The screen and the interview filter for different things. Knowing which removes most of the anxiety.',
        lessons: ['d-15', 'a-4.2'],
        situations: ['work-interview-blank'],
        tools: ['conversation-planner', 'personal-swot'],
        trees: [],
        scenarios: [],
        ai: ['ai/problem/p-jd', 'ai/problem/p-interview', 'ai/problem/p-star'],
        reflect: 'Rewrite three CV bullets as action, number, consequence. No adjectives.'
      },
      {
        n: 5,
        title: 'Offers and pay',
        why: 'Compensation is decided in preparation, not in the room.',
        lessons: ['a-4.7', 'b-4.7', 'd-18'],
        situations: [],
        tools: ['negotiation-planner', 'opportunity-cost', 'decision-matrix'],
        trees: ['negotiate', 'opportunity'],
        scenarios: ['two-offers'],
        ai: ['ai/problem/p-offer', 'ai/problem/p-salary'],
        reflect: 'Write your number, your evidence, your walk-away and your exact opening sentence.'
      }
    ]
  },

  {
    id: 'ai-enabled',
    number: 9,
    title: 'Become AI-Enabled',
    tagline: 'Leverage without becoming dependent or fooled.',
    icon: 'cpu',
    accent: 'atlas',
    weeks: 5,
    lede: 'The path through the AI Intelligence Core. Workflow, context engineering, verification, real problems, role-play, time leverage and the honest limits — ending in the battle tests and the master challenge.',
    outcome: 'You get materially better output than the average user, you verify what matters, and your judgment stays yours.',
    forYou: [
      'You use these tools and suspect you are using them badly.',
      'You want the workflow, not prompt tricks.',
      'You need to know what to check before you send it.'
    ],
    stages: [
      {
        n: 1,
        title: 'The workflow',
        why: 'Eleven steps. Most people do two of them.',
        lessons: ['a-6.2', 'b-6.2', 'd-35'],
        situations: [],
        tools: ['problem-canvas'],
        trees: ['use-ai'],
        scenarios: [],
        ai: ['ai/workflow', 'ai/tools'],
        reflect: 'Which of the eleven steps do you skip most? What has it cost you?'
      },
      {
        n: 2,
        title: 'Context engineering',
        why: 'Output quality is mostly a function of context supplied.',
        lessons: ['a-6.3', 'd-38'],
        situations: [],
        tools: ['task-decomposition'],
        trees: [],
        scenarios: [],
        ai: ['ai/context', 'ai/builder'],
        reflect: 'Write a full context block for a real task, then compare output with your usual one-liner.'
      },
      {
        n: 3,
        title: 'Verification and safety',
        why: 'Fluency is not accuracy, and some things must never be pasted anywhere.',
        lessons: ['a-6.4', 'b-6.3', 'd-37'],
        situations: ['digital-deepfake-voice'],
        tools: ['credibility-checker'],
        trees: ['trust-info'],
        scenarios: ['ai-said-so'],
        ai: ['ai/verify', 'ai/safety', 'ai/recovery'],
        reflect: 'Find one thing an assistant told you that you never checked. Check it now.'
      },
      {
        n: 4,
        title: 'Real work',
        why: 'Email, meetings, reports, data, projects, management — where the hours actually are.',
        lessons: ['b-6.4', 'a-6.5', 'b-6.6', 'd-36'],
        situations: [],
        tools: ['meeting-planner', 'conversation-planner'],
        trees: [],
        scenarios: [],
        ai: ['ai/office/email', 'ai/office/meetings', 'ai/office/reports', 'ai/office/data', 'ai/library'],
        reflect: 'Pick the task you do most. Write the reusable prompt for it and save it.'
      },
      {
        n: 5,
        title: 'Leverage, then prove it',
        why: 'Find the work that should not exist, then test whether you can actually do this under pressure.',
        lessons: ['a-6.8', 'b-6.8', 'd-39', 'd-40'],
        situations: [],
        tools: ['priority-matrix', 'risk-analyzer'],
        trees: ['automate'],
        scenarios: [],
        ai: ['ai/leverage', 'ai/roleplay', 'ai/battles', 'ai/score', 'ai/challenge'],
        reflect: 'Which repeated task in your week should simply stop? What would actually break?'
      }
    ]
  },

  {
    id: 'self-reliant',
    number: 10,
    title: 'Become More Self-Reliant',
    tagline: 'Admin, money, health, home, authority.',
    icon: 'home',
    accent: 'clay',
    weeks: 4,
    lede: 'The unglamorous competence path. Official letters, money under pressure, being taken seriously by professionals, and the mechanics of dealing with institutions that do not respond to distress.',
    outcome: 'The letter you were avoiding becomes a task with a date. You know the order of obligations, the escalation route and the sentence that pauses a formal process.',
    forYou: [
      'Official letters go unopened.',
      'You accept first refusals as final.',
      'You want the practical adult competences nobody taught you.'
    ],
    stages: [
      {
        n: 1,
        title: 'Official life',
        why: 'Institutions respond to process, not to how worried you are.',
        lessons: ['b-3.2', 'a-3.2', 'a-3.4'],
        situations: ['money-debt-collector', 'conflict-neighbour-feud'],
        tools: ['problem-canvas', 'task-decomposition'],
        trees: ['escalate'],
        scenarios: [],
        ai: ['ai/problem/p-form', 'ai/problem/p-complaint'],
        reflect: 'Take the letter you are avoiding. Write what they want, by when, and the consequence of silence.'
      },
      {
        n: 2,
        title: 'Money mechanics',
        why: 'In a shortfall, silence is the most expensive available choice.',
        lessons: ['d-31', 'b-7.5'],
        situations: ['money-cannot-pay-rent', 'money-sudden-income-loss', 'digital-bank-fraud'],
        tools: ['priority-matrix', 'opportunity-cost', 'risk-analyzer'],
        trees: ['buy-this'],
        scenarios: ['friend-money'],
        ai: ['ai/problem/p-money-tight'],
        reflect: 'List this month\'s obligations with amount, date and consequence. Rank by consequence.'
      },
      {
        n: 3,
        title: 'Contracts and pressure',
        why: 'Urgency created by the person selling is a technique, not a deadline.',
        lessons: ['a-7.2', 'a-7.8'],
        situations: ['money-contract-pressure', 'people-pressure-sale', 'money-landlord-eviction'],
        tools: ['decision-matrix', 'credibility-checker'],
        trees: ['buy-this', 'trust-info'],
        scenarios: [],
        ai: ['ai/problem/p-contract'],
        reflect: 'Write the twenty-four-hour sentence you will use next time you are pushed to sign.'
      },
      {
        n: 4,
        title: 'Health and home',
        why: 'Precise description and a documented concern change medical interactions measurably.',
        lessons: ['a-4.2', 'b-4.3'],
        situations: ['health-not-being-listened-to', 'health-bad-diagnosis', 'life-parent-declining', 'health-burnout-collapse'],
        tools: ['conversation-planner', 'reflection'],
        trees: ['respond-now'],
        scenarios: [],
        ai: ['ai/problem/p-health'],
        reflect: 'Write your symptom in one sentence: onset, frequency, severity, what it stops you doing.'
      }
    ]
  }
]

/* -------------------------------------------------------------
   QUERIES
   ------------------------------------------------------------- */
export const pathById = id => PATHS.find(p => p.id === id)

/** Every completable id on a path (lessons + situations), in order. */
export function pathItems (p) {
  const out = []
  for (const st of p.stages) {
    for (const id of st.lessons || []) out.push({ id, kind: 'lesson', stage: st.n })
    for (const id of st.situations || []) out.push({ id, kind: 'situation', stage: st.n })
  }
  return out
}

export function pathStats (p) {
  let lessons = 0; let situations = 0
  const tools = new Set(); const trees = new Set(); const scn = new Set(); const ai = new Set()
  for (const st of p.stages) {
    lessons += (st.lessons || []).length
    situations += (st.situations || []).length
    ;(st.tools || []).forEach(x => tools.add(x))
    ;(st.trees || []).forEach(x => trees.add(x))
    ;(st.scenarios || []).forEach(x => scn.add(x))
    ;(st.ai || []).forEach(x => ai.add(x))
  }
  return {
    stages: p.stages.length,
    lessons,
    situations,
    tools: tools.size,
    trees: trees.size,
    scenarios: scn.size,
    ai: ai.size,
    total: lessons + situations
  }
}

/** Paths that include a given lesson or situation id. */
export const pathsContaining = id =>
  PATHS.filter(p => pathItems(p).some(it => it.id === id))

export const searchDocs = () => PATHS.map(p => ({
  kind: 'path',
  title: p.title,
  sub: p.tagline,
  route: `path/${p.id}`,
  group: 'Learning paths',
  body: [
    p.title, p.tagline, p.lede, p.outcome, (p.forYou || []).join(' '),
    ...p.stages.map(s => `${s.title} ${s.why} ${s.reflect || ''}`)
  ].join(' ')
}))
