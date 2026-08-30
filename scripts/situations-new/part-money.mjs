/* New MONEY + DIGITAL + PEOPLE + LIFE situations. */

export default [
  {
    id: 'money-scam-realised-late',
    title: 'You have realised you were scammed',
    category: 'money',
    severity: 'high',
    tool: 'The First Hour',
    tags: ['fraud', 'recovery', 'shame'],
    lede: 'The certainty arrives all at once. The investment, the refund, the romance, the invoice, the job that needed a fee first. You can see the whole shape of it now, and the loudest thing in your head is not the money — it is that you cannot believe you fell for it.',
    what: 'The certainty arrives all at once. The investment, the refund, the romance, the invoice, the job that needed a fee first. You can see the whole shape of it now, and the loudest thing in your head is not the money — it is that you cannot believe you fell for it.',
    going: [
      'Shame is the second stage of the fraud, and it is engineered. Silence is what stops recovery, stops reporting and makes you the ideal target for the recovery scam that is coming next.',
      'Recovery is almost entirely a function of speed. Within hours, banks can sometimes recall funds; within days the money has moved through several accounts and the chances collapse.',
      'You were not stupid. These operations are professional, rehearsed and specifically designed to work on intelligent people under time pressure — which is why they use time pressure.'
    ],
    steps: [
      { move: 'Call your bank now, on the number on your card', detail: 'Not a number from any email or message. Say the words "I have been the victim of fraud" and ask them to attempt a recall and freeze the account.' },
      { move: 'Stop all contact with them immediately', detail: 'No final message, no confrontation, no attempt to reason. Every further exchange is used to extract more, and it warns them to move the money.' },
      { move: 'Screenshot and save everything before it disappears', detail: 'Messages, profiles, payment references, phone numbers, bank details, adverts, websites. Accounts get deleted within hours of realisation.' },
      { move: 'Report it formally and get a reference number', detail: 'National fraud reporting body and the police. The reference is what your bank, insurer and any future claim will require.' },
      { move: 'Secure everything they touched', detail: 'Change passwords, enable two-factor authentication, check for new payees, forwarding rules and devices. Financial fraud very often started as account access.' },
      { move: 'Tell one person today', detail: 'One human, out loud. Isolation is the condition every follow-up scam depends on, and saying it once out loud drains most of the shame.' }
    ],
    lines: [
      { when: 'To the bank, to trigger the right process', say: '"I have been the victim of fraud. I authorised a payment based on false information. I want to report it and request a recall."' },
      { when: 'To the scammer', say: 'Nothing. No reply, no block announcement, no last word. Screenshot, then block.' },
      { when: 'To a family member', say: '"I need to tell you something and I need you not to make me feel worse about it. I have been scammed."' },
      { when: 'To anyone offering to recover your money', say: '"No. I will only deal with my bank and the official reporting service."' },
      { when: 'To your bank if the claim is refused', say: '"I would like that in writing with the reason, and I intend to take it to the financial ombudsman."' }
    ],
    bad: [
      'Sending more money to unlock or release the first amount. This is the core mechanism of the fraud, and it is where most of the real losses happen.',
      'Confronting them to get an explanation. They gain time to move funds and information to use on you again.',
      'Paying a recovery agent who contacts you afterwards. Victim lists are resold, and the second scam is almost always aimed at people who lost to the first.',
      'Waiting until morning to call the bank. Recall windows are measured in hours and the delay is often the whole difference.',
      'Keeping it secret to avoid the embarrassment. Silence blocks reimbursement, blocks reporting, and leaves you alone with the next approach.'
    ],
    good: [
      'Get a credit report and consider a fraud marker if identity details were exposed.',
      'Write down the exact sequence of how it worked while you remember it. It is the most effective inoculation you will ever have, and it protects the people you tell.',
      'Pursue reimbursement properly. Many jurisdictions now require banks to reimburse authorised push-payment fraud in defined circumstances — refusal is not the end of the process.',
      'Expect the emotional part to take longer than the financial part, particularly with romance fraud. That is grief for a relationship as well as money.',
      'Tell the people most likely to be targeted next — older relatives, anyone recently bereaved or job-hunting. Specific stories work; general warnings do not.'
    ],
    limit: 'If you have been threatened, if intimate images are involved, or if someone is using your identity to open accounts, treat it as urgent and report it to the police directly rather than only online. If you are in immediate financial crisis — no money for food, rent or medication — contact a free debt charity today rather than taking a short-term loan.'
  },

  {
    id: 'money-insurance-refused',
    title: 'An insurer or provider has refused a claim',
    category: 'money',
    severity: 'medium',
    tool: 'The Escalation Ladder',
    tags: ['claims', 'complaints', 'process'],
    lede: 'A short letter or a call centre sentence: not covered, outside the terms, declined. It is delivered as if it is final. It is not final — it is the first position of a process most people abandon at exactly this point, which is why the first refusal is issued so easily.',
    what: 'A short letter or a call centre sentence: not covered, outside the terms, declined. It is delivered as if it is final. It is not final — it is the first position of a process most people abandon at exactly this point, which is why the first refusal is issued so easily.',
    going: [
      'A first-line refusal is a low-cost move by a person with limited authority reading a screen. It is not an adjudication and it frequently does not survive contact with a written complaint.',
      'The system runs on stages: front line, formal complaint, internal review, then an external ombudsman or regulator. Skipping stages gets you sent back; using them in order works surprisingly often.',
      'Everything turns on the specific clause. "Not covered" is not a reason — you need the clause number and the exact wording they are relying on, because that is what you attack.'
    ],
    steps: [
      { move: 'Get the refusal in writing, with the clause', detail: 'Ask them to state which term they rely on and quote it. A refusal that cannot be tied to specific wording usually reverses on its own.' },
      { move: 'Read your actual policy, not the summary', detail: 'Full terms, exclusions, and the definitions section. Definitions decide most disputes, and most people never open them.' },
      { move: 'Write one factual complaint, dated, requesting a final response', detail: 'Chronology, what you claim, which clause they cited, why it does not apply, what you want. The phrase "formal complaint" starts a clock and a paper trail.' },
      { move: 'Do the process in order and keep every reference number', detail: 'Front line, then formal complaint, then internal review. The external route almost always requires evidence you completed the internal one.' },
      { move: 'Take it to the ombudsman or regulator once you have a final response', detail: 'Free, independent, and it costs the firm a case fee whether they win or lose — which is why many claims settle at exactly this point.' },
      { move: 'Keep everything in one file', detail: 'Every letter, call date, name and reference. Disputes are won on chronology, and yours is the only complete one.' }
    ],
    lines: [
      { when: 'To get the real reason', say: '"Please confirm in writing which policy term you are relying on, and quote the exact wording."' },
      { when: 'To start the formal stage', say: '"I would like to raise this as a formal complaint and receive your final written response."' },
      { when: 'To challenge the interpretation', say: '"Clause 7.2 refers to [wording]. That does not describe what happened, for these three reasons."' },
      { when: 'On a call, to record it', say: '"Can I have your name, and can you confirm you will note on the file what you have just told me?"' },
      { when: 'To escalate externally', say: '"I have your final response. I am referring this to the ombudsman and enclosing the full chronology."' }
    ],
    bad: [
      'Accepting the first no. Most refusals are never challenged, which is precisely the assumption they are issued on.',
      'Arguing repeatedly on the phone. Nothing said on a call is evidence, and the person you are shouting at cannot change the decision.',
      'Sending an angry letter about how badly you have been treated. Tone gives them something to respond to instead of the clause, and it delays everything.',
      'Missing the complaint deadline. Time limits for external escalation are strict, and lateness ends an otherwise strong case.',
      'Signing a full-and-final settlement to make it stop. It closes every route afterwards, including the ombudsman.'
    ],
    good: [
      'Ask for a copy of the file, including call notes and any assessor report. It is often revealing and you are frequently entitled to it.',
      'Find one precedent — an ombudsman decision summary on the same clause. Published decisions are searchable and change the conversation.',
      'Keep claiming what you are owed, including interest and distress where the scheme allows it.',
      'Photograph and document proactively from now on. Most claim refusals are evidential rather than legal.',
      'When it is resolved, write down what would have made it faster. That is your process for the next one, and there will be a next one.'
    ],
    limit: 'If the refusal leaves you without somewhere to live, without medical treatment, or facing enforcement action, do not run the process alone. Contact a free advice service today — they can often escalate in days what takes months through normal channels, and they know which regulator moves fastest.'
  },

  {
    id: 'digital-privacy-exposed',
    title: 'Your private information is suddenly public',
    category: 'digital',
    severity: 'high',
    tool: 'The Containment Order',
    tags: ['privacy', 'leak', 'takedown'],
    lede: 'Your address, your number, your workplace, a screenshot of something you wrote privately — now visible to people you did not choose. The first instinct is to look at it repeatedly. The useful work is containment, and it has a strict order.',
    what: 'Your address, your number, your workplace, a screenshot of something you wrote privately — now visible to people you did not choose. The first instinct is to look at it repeatedly. The useful work is containment, and it has a strict order.',
    going: [
      'Exposure and harassment are different problems. Exposure is an information leak you contain; harassment is a behaviour you report. Treat them separately or you will do neither well.',
      'The order matters. Evidence first, because it disappears. Then safety, because that is what the information enables. Then takedown, which is slow. Reputation last, because it is the least urgent and feels the most urgent.',
      'Most sustained damage comes from re-uploads rather than the original post. That is why evidence and reporting infrastructure matter more than winning any single argument.'
    ],
    steps: [
      { move: 'Capture evidence before anything else', detail: 'Full-page screenshots with URLs, usernames, timestamps and the archive links. It is deleted, edited or moved constantly, and unrecorded harm cannot be reported.' },
      { move: 'Deal with what the information enables', detail: 'If your address is out: locks, deliveries, who is home alone, and tell a neighbour. If your number: screen calls rather than changing it immediately, since the number is often the account-recovery key.' },
      { move: 'Lock the accounts the details unlock', detail: 'Change passwords, turn on two-factor with an app rather than SMS, and check recovery emails and phone numbers. Leaked personal data is the raw material for account takeover.' },
      { move: 'Report on-platform and request removal off-platform', detail: 'Use the specific "personal information / doxxing" report type — generic abuse reports are slower and often rejected. Then request de-indexing from search engines separately.' },
      { move: 'Tell the people who will be contacted', detail: 'Employer, school, family. A short factual heads-up from you beats their first hearing it from a stranger with a version of events.' },
      { move: 'Hand monitoring to someone else', detail: 'Ask one trusted person to watch and log, and stop searching your own name hourly. Continuous self-monitoring is the thing that makes this unbearable without making you safer.' }
    ],
    lines: [
      { when: 'To an employer, first', say: '"Something has been posted about me publicly, including where I work. It is not accurate. I wanted you to hear it from me and I am dealing with it."' },
      { when: 'To a platform', say: '"This post publishes my home address and phone number without consent. I am reporting it under your personal information policy. Evidence and URLs attached."' },
      { when: 'To police, if there is a threat', say: '"My home address has been published alongside a threat. I have screenshots, URLs and timestamps."' },
      { when: 'To friends who want to fight it', say: '"Please do not reply to them. Send me the link privately — replies push it up and spread it."' },
      { when: 'To a search engine', say: '"I am requesting removal of this URL under your policy on personal information and doxxing content."' }
    ],
    bad: [
      'Engaging with whoever posted it. It increases the reach of the post and gives them fresh material to use.',
      'Deleting your own accounts immediately. You destroy your evidence, your ability to report, and the channel you need to correct the record.',
      'Posting a long emotional defence. It converts a fading item into a story with a second act and pulls in a much larger audience.',
      'Doxxing them back. It is a criminal matter in many places, and it ends any protection you had as the person clearly wronged.',
      'Refreshing it every few minutes. It changes nothing about your safety and it is the fastest route to being unable to function.'
    ],
    good: [
      'Do a proper audit of what is publicly findable about you and reduce it — data brokers, old profiles, electoral registers, company filings, delivery accounts.',
      'Change the answers to any security question whose answer is now public. Mother\'s maiden name and first school are not secrets any more.',
      'Keep the evidence log going for months. Patterns are what support prosecution and what platforms act on.',
      'Set up alerts for your name so you can stop checking manually.',
      'Expect the vigilance to outlast the incident. If it is still shaping your daily behaviour after a few weeks, that is worth talking to someone about.'
    ],
    limit: 'If the exposure includes a threat of violence, intimate images, or information about children, treat it as an immediate police matter rather than a platform matter. If you are at physical risk at home, contact the emergency services and consider staying elsewhere while it is dealt with.'
  },

  {
    id: 'people-friend-owes-money',
    title: 'Someone close owes you money and is avoiding it',
    category: 'people',
    severity: 'medium',
    tool: 'The Single Clean Conversation',
    tags: ['money', 'friendship', 'boundaries'],
    lede: 'It was a favour with no paperwork. The date passed. Then the messages got shorter, plans got cancelled, and now there is a subject you both steer around. The money is smaller than what it is costing the friendship, which is why nobody says anything.',
    what: 'It was a favour with no paperwork. The date passed. Then the messages got shorter, plans got cancelled, and now there is a subject you both steer around. The money is smaller than what it is costing the friendship, which is why nobody says anything.',
    going: [
      'Avoidance is usually shame rather than theft. That matters because shame responds to a face-saving route out, while theft responds only to consequence — and you must work out which you are looking at.',
      'The unspoken debt is doing more damage than the amount. Silence is being read by both of you as resentment and as accusation, and it compounds weekly.',
      'You need to decide, before you speak, which you are actually optimising for: the money or the relationship. You can often have both, but only if you know which one you will give up.'
    ],
    steps: [
      { move: 'Decide what you actually want first', detail: 'Full repayment, a plan, or writing it off to keep the friendship. Going into the conversation undecided is how it becomes an argument about character.' },
      { move: 'Raise it directly, once, in private', detail: 'Not a hint, not a joke, not a group chat. One clear, warm, unmistakable message that names the amount.' },
      { move: 'Give them a plan to accept rather than a demand to meet', detail: 'A specific, easy structure — small amounts, monthly, starting on a date. Most people avoid because the full sum feels impossible.' },
      { move: 'Separate the money from the relationship out loud', detail: 'Say explicitly that you are not angry and not ending the friendship. Otherwise they will hear a threat and go further into avoidance.' },
      { move: 'Put whatever you agree in writing, lightly', detail: 'A message summarising it. Not a contract — a record, so nobody has to rely on memory or interpretation in three months.' },
      { move: 'If nothing happens, decide and then stop', detail: 'Either write it off cleanly and genuinely, or pursue it formally and accept the relationship changes. Repeated asking is the one option that guarantees losing both.' }
    ],
    lines: [
      { when: 'To open it directly', say: '"I want to sort out the £400 so it stops sitting between us. I am not annoyed — I just do not want it to be a thing we avoid."' },
      { when: 'To make repayment possible', say: '"Would fifty a month work? Start whenever you like — I just want a plan rather than a date."' },
      { when: 'To separate money from friendship', say: '"This does not change anything between us. I would rather talk about it than keep pretending it does not exist."' },
      { when: 'If they get defensive', say: '"I am not accusing you of anything. I am telling you it is on my mind, and I would rather say that than go quiet on you."' },
      { when: 'To write it off, properly', say: '"I am letting it go. Genuinely — I am not going to raise it again. I would rather have you than the money."' },
      { when: 'To close it formally', say: '"I need to treat this as a debt now. I will send the details in writing this week."' }
    ],
    bad: [
      'Hinting for months instead of asking. They hear resentment without a request, so it can never be resolved and it poisons everything else.',
      'Raising it in front of other people. You have made it about humiliation, and they will defend their dignity rather than pay.',
      'Sending an itemised history of everything you have done for them. It reframes the friendship as an account and neither of you comes back from that.',
      'Writing it off out loud while privately keeping score. The resentment leaks out anyway and it is worse for being deniable.',
      'Lending more to keep the peace. You have confirmed that avoidance works and made the eventual conversation twice as expensive.'
    ],
    good: [
      'Whatever the outcome, decide your rule for next time — and it is usually: never lend more than you can write off without resentment.',
      'If you write it off, tell them clearly and then genuinely never mention it. A half-written-off debt is worse than either alternative.',
      'If they are in real financial trouble, the more useful thing you can offer is the name of a free debt advice service.',
      'Notice if this is a pattern with several people. If so, the boundary you need is with yourself, not with them.',
      'Put any future loan in writing at the moment of lending. It feels awkward for one minute and prevents this entirely.'
    ],
    limit: 'If the amount is large, secured against something, or connected to a business, get proper advice before you rely on an informal agreement. If someone is repeatedly extracting money using guilt, crisis or affection, that is financial coercion rather than a loan — and it is worth talking to someone outside the relationship about it.'
  },

  {
    id: 'life-moving-to-new-country',
    title: 'You have moved somewhere new and know nobody',
    category: 'life',
    severity: 'medium',
    tool: 'The Ninety-Day Build',
    tags: ['isolation', 'admin', 'belonging'],
    lede: 'The logistics are done, roughly. What nobody warned you about is the specific weight of a Tuesday evening in a place where no one would notice if you did not leave the flat. The competence you had somewhere else does not transfer automatically, and that is disorienting.',
    what: 'The logistics are done, roughly. What nobody warned you about is the specific weight of a Tuesday evening in a place where no one would notice if you did not leave the flat. The competence you had somewhere else does not transfer automatically, and that is disorienting.',
    going: [
      'You are running two projects at once and they compete: the admin project, which has deadlines and consequences, and the belonging project, which has neither and therefore always loses.',
      'You did not lose competence. You lost context — the accumulated knowledge of which bus, which doctor, which shop, who to ask. That is rebuildable in weeks, and it feels like a personality problem while it is missing.',
      'Belonging is built by repetition, not by events. One place visited weekly beats ten events attended once, because familiarity is what turns strangers into people who nod at you.'
    ],
    steps: [
      { move: 'Do the four pieces of load-bearing admin in the first fortnight', detail: 'Registration or residence status, a local bank account, healthcare registration, and a local phone number. Everything else in the system unlocks from these four.' },
      { move: 'Register with a doctor before you are ill', detail: 'Every country makes this slow. Doing it while well is the difference between an appointment and an emergency department at midnight.' },
      { move: 'Pick three weekly anchors and go every week', detail: 'A class, a café, a run club, a place of worship, a market. Same time, same place. Repetition is the entire mechanism — you are farming familiarity, not looking for friends.' },
      { move: 'Learn enough language for the ten situations you actually face', detail: 'Doctor, chemist, landlord, delivery, bank, transport, shop, neighbour, emergency, small talk. Situational phrases beat grammar order for the first six months.' },
      { move: 'Find one person who arrived two years ago', detail: 'Not a local and not brand new. They remember what confused them and they know the workarounds, and they are usually glad to be asked.' },
      { move: 'Schedule contact with home, and cap it', detail: 'Fixed calls rather than constant availability. Living continuously in the old place through a screen is the most reliable way to never arrive in the new one.' }
    ],
    lines: [
      { when: 'To turn a repeated encounter into an acquaintance', say: '"I have just moved here — I do not really know anyone yet. Do you come every week?"' },
      { when: 'To ask for practical help', say: '"I am new and completely lost with how this works here. Can I ask you a dumb question?"' },
      { when: 'To convert a conversation into a second one', say: '"This has been really useful. Are you around next week? I will be here same time."' },
      { when: 'To be honest with someone at home', say: '"The move is fine. The loneliness is harder than I expected, and I would rather say that than pretend."' },
      { when: 'To an employer or landlord about paperwork', say: '"I am still setting up here. Can you tell me exactly what document you need and what it is called locally?"' }
    ],
    bad: [
      'Waiting to feel settled before doing the admin. The paperwork gets harder and more expensive with delay, and unresolved status underlies most of the anxiety.',
      'Spending every evening on video calls home. It removes both the discomfort and the incentive that would otherwise push you outward.',
      'Trying to make friends at large events. Volume without repetition produces contacts and no relationships, and it is exhausting.',
      'Assuming the flat sadness means the move was a mistake. Month two to four is a known trough, and decisions made inside it are usually regretted.',
      'Only mixing with people from your own country. It is the fastest comfort available and it reliably ends with you leaving after two years having never arrived.'
    ],
    good: [
      'Keep one written list of local knowledge as you acquire it — the good doctor, the cheap market, the reliable trades. It is the context you lost, being rebuilt.',
      'Give it eighteen months before judging the decision. Almost nobody feels settled at six.',
      'Learn how the local system works in principle, not just in practice — tenancy rights, employment rights, healthcare entitlement.',
      'Keep one thing from your old life that is genuinely yours. Continuity is not the same as clinging.',
      'When the next person arrives, be the person who arrived two years ago. It closes the loop and it is how you find out you belong.'
    ],
    limit: 'If your visa or residence status depends on an employer or a partner, get independent advice about what happens if that ends — before it ends. If low mood has lasted more than a few weeks, is affecting sleep and eating, or you are thinking about harming yourself, find a doctor or a helpline in your language now. Isolation makes that much harder to do later.'
  },

  {
    id: 'life-caught-in-a-lie',
    title: 'You have been caught in a lie',
    category: 'life',
    severity: 'medium',
    tool: 'The Clean Apology',
    tags: ['trust', 'accountability', 'repair'],
    lede: 'It was small, or it started small. Now the person is holding it, looking at you, and the next thirty seconds decide whether this is something you recover from or the beginning of a much longer problem. The reflex is to explain. The reflex is wrong.',
    what: 'It was small, or it started small. Now the person is holding it, looking at you, and the next thirty seconds decide whether this is something you recover from or the beginning of a much longer problem. The reflex is to explain. The reflex is wrong.',
    going: [
      'The damage is not the content of the lie. It is that they now have to re-examine everything else you have said, and that is the actual work you have created for them.',
      'A second lie to protect the first is the moment recoverable becomes unrecoverable. Almost everyone attempts it, and it is what turns an incident into a character judgement.',
      'You cannot argue your way back to being trusted. Trust is rebuilt by a period of verifiable behaviour, on their timeline, and the only thing you control today is whether you tell the whole truth now.'
    ],
    steps: [
      { move: 'Admit it immediately and completely', detail: 'In the first sentence, without qualification. Every second of hedging is more expensive than the original lie, and partial admissions are read as further deception.' },
      { move: 'Volunteer the rest before they find it', detail: 'If there is more, say it now. The single most damaging pattern is a series of admissions extracted one at a time over weeks.' },
      { move: 'Do not explain yet', detail: 'Reasons offered in the same breath as an admission are heard as excuses. Say what you did, say it was wrong, and stop.' },
      { move: 'Name what it cost them', detail: 'Show that you understand the real injury — that they now have to doubt other things. This is what distinguishes a real admission from a managed one.' },
      { move: 'Offer verification rather than promises', detail: 'Something checkable, not "I would never again". Access, transparency, a specific change they can observe.' },
      { move: 'Accept their timeline without negotiating it', detail: 'Do not ask when things will be normal. Asking for a schedule for forgiveness is the last move of someone managing an image.' }
    ],
    lines: [
      { when: 'In the first sentence', say: '"You are right. I lied about it. I am not going to try to make that sound better than it is."' },
      { when: 'To volunteer the rest', say: '"Before you find out from somewhere else — there are two other things I have not been straight about."' },
      { when: 'To name the real cost', say: '"I know the problem is not just this. It is that you now have to wonder about other things I have told you."' },
      { when: 'To offer something checkable', say: '"I am not asking you to take my word for it. Here is what you can see for yourself."' },
      { when: 'When asked why', say: '"I can tell you why, if it helps. But I want to be clear it is an explanation, not a defence."' },
      { when: 'To accept the pace', say: '"I am not going to ask you to be okay with this yet. Take whatever time you need."' }
    ],
    bad: [
      'Minimising the size of it. Arguing about how bad the lie was tells them you are still managing the story rather than telling the truth.',
      'Explaining your reasons first. It lands as justification and the admission stops counting.',
      'Adding a second lie to hold up the first. This is the exact point at which a recoverable situation becomes a permanent one.',
      'Pointing out something they have done. The moment you introduce a comparison, you have chosen a fight over a repair.',
      'Demanding to know how they found out. It shows your attention is on the leak rather than on the lie, and everyone notices.'
    ],
    good: [
      'Expect to be checked, and be gracious about it every time. Impatience with verification is how people lose the second chance they were given.',
      'Work out honestly what the lie was protecting — embarrassment, an argument you did not want, a version of yourself. That is the thing to change.',
      'If it involved other people, tell them plainly too, before it reaches them sideways.',
      'Do not perform remorse. Sustained ordinary honesty is more convincing than any amount of visible suffering.',
      'Accept that some relationships end here and that the apology was still the right thing to do.'
    ],
    limit: 'If the lie has legal, financial, professional or regulatory consequences — a false statement to an employer, an insurer, a court or a regulator — take advice before making a written admission. Being honest with a person and formally admitting a liability are different acts, and doing the second without advice can remove protections you may need.'
  }
]
