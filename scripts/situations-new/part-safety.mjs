/* New DANGER + CRISIS + HEALTH situations. */

export default [
  {
    id: 'danger-road-rage',
    title: 'A driver is following you or blocking you in',
    category: 'danger',
    severity: 'high',
    tool: 'The Exit Map',
    tags: ['road', 'aggression', 'escape'],
    lede: 'Something happened at a junction — you cut them up, or they think you did. Now they are behind you, close, flashing. Or they have pulled across you and got out. Your body has decided this is a fight and your car is not the place to have one.',
    what: 'Something happened at a junction — you cut them up, or they think you did. Now they are behind you, close, flashing. Or they have pulled across you and got out. Your body has decided this is a fight and your car is not the place to have one.',
    going: [
      'Nothing about being right helps here. You could be entirely blameless and still be the one hurt, arrested, or dead. Fault is decided later, somewhere else, by other people.',
      'Your car is protection while it is moving and locked, and a trap the moment you stop and open it. Almost every serious road-rage injury happens after someone got out.',
      'They are looking for engagement, and engagement is entirely optional. Removing yourself as a participant collapses the incident faster than any response.'
    ],
    steps: [
      { move: 'Lock the doors and close the windows', detail: 'First action, before anything else, and do it without looking at them. It removes the two things that let this become physical.' },
      { move: 'Do not make eye contact or gesture', detail: 'No hands, no mouthing, no long look in the mirror. Every acknowledgement is read as acceptance of the invitation.' },
      { move: 'Keep moving and do not go home', detail: 'Driving to your own address tells an aggressive stranger where you sleep. Drive normally, legally, and somewhere else.' },
      { move: 'Go somewhere lit, busy and staffed', detail: 'A petrol station forecourt, a supermarket car park, ideally a police station. Cameras and witnesses end most of these without a word being said.' },
      { move: 'Call the emergency number while still in the car', detail: 'Speak on speaker if you must keep driving. Give your location, direction, the registration and colour of their vehicle, and say you are being followed.' },
      { move: 'Stay inside and let it be recorded', detail: 'If they get out and approach, stay in with the engine running and horn use if needed. Do not roll the window down to explain anything.' }
    ],
    lines: [
      { when: 'To the emergency operator', say: '"I am being followed by a driver who is behaving aggressively. I am on [road], heading [direction], in a [car]. Their registration is [reg]."' },
      { when: 'If someone approaches the window', say: 'Say nothing. Point at the phone, keep the window shut, and keep the engine running.' },
      { when: 'If you are boxed in', say: '"I have called the police and they are on the way." Said once, through glass, then no further conversation.' },
      { when: 'To a passenger', say: '"Doors are locked. Do not respond to them, do not film through the window where they can see. Watch for a garage on the left."' },
      { when: 'Afterwards, reporting it', say: '"I want to report a road-rage incident. I have the registration, the time and the location, and there is likely forecourt CCTV."' }
    ],
    bad: [
      'Getting out to sort it out. This is the single decision that converts a traffic dispute into an assault, and you made it voluntarily.',
      'Braking hard to teach them a lesson. You have created a collision they may claim you caused, and you are now stationary in front of an angry stranger.',
      'Racing away to lose them. At speed and in a spiked state you are far more likely to crash than to escape, and you hand them the sympathetic story.',
      'Filming them through an open window. The window is the whole protection and you have opened it for a video nobody will need.',
      'Driving home. They now have your address, and the incident does not necessarily end tonight.'
    ],
    good: [
      'Write it down while it is fresh — time, location, registration, what they did, in that order.',
      'Report it even if nothing happened. Repeat offenders are caught on patterns, and dashcam footage is only useful if someone asks for it.',
      'Save the dashcam file off the loop immediately, or it will be overwritten within the hour.',
      'Do not post the footage or the registration publicly. It rarely helps and it can undermine a prosecution and expose you to liability.',
      'Notice how spiked you still are half an hour later. That is the state most secondary accidents happen in — stop for ten minutes before continuing.'
    ],
    limit: 'If they have a weapon, ram your vehicle, or you believe you are about to be dragged out, this is no longer a road dispute. Call the emergency number, keep moving if you safely can, drive to a police station, and do not stop for anyone but a marked police vehicle.'
  },

  {
    id: 'crisis-flood-or-storm',
    title: 'Water is rising or a storm is closing in',
    category: 'crisis',
    severity: 'critical',
    tool: 'The First Ninety Seconds',
    tags: ['flood', 'evacuation', 'utilities'],
    lede: 'The forecast turned into something visible — water across the road, a drain backing up, the sound changing. There is a window now, measured in tens of minutes, in which decisions are cheap. After it closes, every option costs much more.',
    what: 'The forecast turned into something visible — water across the road, a drain backing up, the sound changing. There is a window now, measured in tens of minutes, in which decisions are cheap. After it closes, every option costs much more.',
    going: [
      'Flood water is faster and heavier than it looks. Fifteen centimetres of moving water will take an adult off their feet and thirty will float most cars — and you cannot see what the surface is hiding.',
      'The danger is rarely drowning first. It is electricity, contamination, cold, and being cut off from medication, insulin, chargers and cash.',
      'Almost everything expensive is decided in the first hour: whether you moved upward, whether the power is off, whether documents and medication are with you, and whether anyone knows where you are.'
    ],
    steps: [
      { move: 'Decide up or out, in the next two minutes', detail: 'Leaving early is almost always better than being rescued late. If the route out is already covered, stop trying and commit to going up.' },
      { move: 'Kill the electricity and gas if water is entering', detail: 'At the consumer unit, from a dry position, before water reaches sockets. Never touch a breaker while standing in water — if it is already wet, leave it and get out.' },
      { move: 'Take the grab list, not the possessions', detail: 'Medication, phone and charger, ID and documents, cash, keys, glasses, warm dry layers, water. Photographs and furniture are replaceable; insulin at 2am is not.' },
      { move: 'Move people, then valuables, upward', detail: 'Anyone with limited mobility goes first and goes with a phone. Only then start lifting things off the floor.' },
      { move: 'Tell one person outside the area where you are', detail: 'A single named contact who knows your address, who is with you, and when you will next check in. This is what makes you findable.' },
      { move: 'Never drive or walk into standing water', detail: 'You cannot see the depth, the current, or whether the road under it is still there. Turn around; every year this is what kills people who otherwise did everything right.' }
    ],
    lines: [
      { when: 'To the emergency number', say: '"Water is entering the property at [address]. There are [number] people here, including [anyone vulnerable]. We are moving to the [first floor / roof space]."' },
      { when: 'To your outside contact', say: '"We are at [address], staying upstairs, four of us and the dog. I will message at nine. If you do not hear from me, call it in."' },
      { when: 'To a neighbour', say: '"We are going up rather than out. Do you have anyone in the house who cannot manage stairs?"' },
      { when: 'To someone insisting on driving through it', say: '"Thirty centimetres floats a car. We are not doing it. We wait."' },
      { when: 'Afterwards, to your insurer', say: '"I am reporting a flood at [address], first noticed at [time]. I have photographs from before we moved anything."' }
    ],
    bad: [
      'Driving through standing water to get out. Most flood deaths are in vehicles, and a stalled car in rising water is the worst place you can be.',
      'Going back for possessions. Conditions change in minutes and the return trip is what people do not come back from.',
      'Touching electrical switches in water. It can kill you instantly and it is entirely avoidable by cutting power before water arrives.',
      'Waiting for an official instruction to move. Warnings arrive late and by exception; nobody is coming to tell you individually.',
      'Sheltering in a basement or a windowless loft. Both can become inescapable as water rises, and a loft without an exit is a trap.'
    ],
    good: [
      'Photograph everything before you clean or move anything. It is the entire basis of an insurance claim.',
      'Assume all flood water is contaminated. Wash thoroughly, keep it away from cuts, and throw away affected food and anything porous.',
      'Do not restore power until it has been checked by someone qualified.',
      'Register with the local authority and your insurer the same day. Support, dehumidifiers and temporary accommodation are allocated in the order people ask.',
      'Write your grab list down properly now and put it inside the front door. The next time is not the time to compose it.'
    ],
    limit: 'If water is rising faster than you can move, if anyone is in the water, or if you are trapped, call the emergency number immediately and go to the highest accessible point with a phone, a torch and something bright to signal with. Do not enter an attic without a way out onto the roof.'
  },

  {
    id: 'crisis-choking-adult',
    title: 'Someone is choking and cannot speak',
    category: 'crisis',
    severity: 'critical',
    tool: 'The First Ninety Seconds',
    tags: ['first aid', 'airway', 'seconds'],
    lede: 'One second they were eating. Now they are silent, hands at the throat, eyes wide, and the room has not caught up. Silence is the signal: someone coughing loudly is moving air, someone making no sound is not.',
    what: 'One second they were eating. Now they are silent, hands at the throat, eyes wide, and the room has not caught up. Silence is the signal: someone coughing loudly is moving air, someone making no sound is not.',
    going: [
      'There are only two states and they need opposite responses. Effective cough — leave them alone and encourage it. No sound, no air — you must intervene now.',
      'You have a few minutes at most, and every second spent asking the room what to do is taken from that. Hesitation is the main cause of the bad outcome.',
      'Nobody who has done this well remembers doing it calmly. You do not need composure; you need the order of the moves.'
    ],
    steps: [
      { move: 'Ask one question: "Are you choking?"', detail: 'A nod with no sound tells you everything. If they can speak or cough forcefully, do not touch them — encourage the cough, because their own airflow beats anything you can do.' },
      { move: 'Shout for help and get someone to call emergency services', detail: 'Point at a specific person and give them the job. "You — call an ambulance now." Unassigned instructions in a panicking room are not carried out.' },
      { move: 'Five sharp back blows between the shoulder blades', detail: 'Lean them well forward so gravity helps, and strike with the heel of your hand. Forward lean is what makes this work rather than push the obstruction down.' },
      { move: 'Five abdominal thrusts if the blows fail', detail: 'Stand behind, fist above the navel and below the ribs, pull sharply inward and upward. For a pregnant or very large person, use chest thrusts at the breastbone instead.' },
      { move: 'Alternate five and five, and do not stop', detail: 'Keep cycling back blows and thrusts until it clears or they lose consciousness. Stopping early because it is not working is the most common fatal error.' },
      { move: 'If they collapse, start CPR', detail: 'Lower them to the floor, call emergency services if not already done, and begin chest compressions. Compressions themselves can dislodge the obstruction.' }
    ],
    lines: [
      { when: 'To confirm in one second', say: '"Are you choking? Can you speak?"' },
      { when: 'To assign the call', say: '"You, in the blue shirt — call an ambulance now and tell them someone is choking."' },
      { when: 'To tell them what you are doing', say: '"I am going to hit your back. Lean forward. I have got you."' },
      { when: 'To the operator', say: '"Adult choking, fully blocked airway, no sound. I am doing back blows and abdominal thrusts. [Address]."' },
      { when: 'Afterwards', say: '"You need to be checked even though you can breathe now. Thrusts can cause internal injury and things can swell later."' }
    ],
    bad: [
      'Slapping them on the back while they are upright. Without a strong forward lean you can drive the obstruction further down.',
      'Reaching into their mouth to grab it blindly. Blind finger sweeps commonly push the object deeper and beyond reach.',
      'Giving them water to wash it down. The airway is already blocked, so the water has nowhere to go and adds a second problem.',
      'Stopping after one round because nothing changed. Obstructions frequently clear on the third or fourth cycle, and stopping is what makes it fatal.',
      'Waiting to see if it resolves itself. A silent airway does not resolve itself, and the window is measured in minutes.'
    ],
    good: [
      'Insist on medical assessment even after a full recovery. Abdominal thrusts can cause internal injury that presents hours later.',
      'Stay with them for the next hour. Swelling and delayed distress are both real and both need someone watching.',
      'Expect the shake afterwards — yours and theirs. Adrenaline arrives properly once it is over.',
      'Book a real first-aid course. Twenty minutes of hands-on practice makes this automatic in a way reading never does.',
      'Teach one other person in your household. You may not be the one in the room next time.'
    ],
    limit: 'This is a summary, not a substitute for training or for professional care. Always get emergency help for a fully blocked airway, and always get medical assessment afterwards even if the obstruction clears. Techniques differ for infants and small children — do not use adult abdominal thrusts on a baby.'
  },

  {
    id: 'health-caring-for-someone-alone',
    title: 'You have become the carer and nobody is coming',
    category: 'health',
    severity: 'high',
    tool: 'The Load Audit',
    tags: ['caring', 'burnout', 'systems'],
    lede: 'It happened without a decision. A diagnosis, a fall, a slow decline — and now you handle the medication, the appointments, the money, the meals, the nights. Nobody appointed you and nobody is arriving. You have stopped noticing how tired you are, which is the dangerous part.',
    what: 'It happened without a decision. A diagnosis, a fall, a slow decline — and now you handle the medication, the appointments, the money, the meals, the nights. Nobody appointed you and nobody is arriving. You have stopped noticing how tired you are, which is the dangerous part.',
    going: [
      'Unnamed caring is the most expensive kind. Because it never got labelled, it never got resourced, and every gap is absorbed by you at your own cost.',
      'You are now a single point of failure for another person\'s survival, and you have no backup, no handover document and no rest. That is a system problem, not a character problem.',
      'Nothing improves through endurance. It improves through three things: writing the load down, getting assessed for formal support, and making one other human competent to take over for a day.'
    ],
    steps: [
      { move: 'Write the whole load down in one place', detail: 'Every task, its frequency and roughly how long it takes. Seeing forty hours a week on paper is what ends the internal argument about whether you are coping badly.' },
      { move: 'Request a formal needs assessment for them, and a carer\'s assessment for you', detail: 'Most systems have both and most people only know about the first. The carer\'s assessment is the route to respite, equipment and payments.' },
      { move: 'Build the handover document', detail: 'Medication with doses and times, conditions, allergies, all professional contacts, routines, what calms them. One page on the fridge and one on your phone. It is also what makes any help possible at all.' },
      { move: 'Sort the legal authority before it is urgent', detail: 'Power of attorney for health and finance, while they still have capacity to grant it. After capacity is lost the process is slow, expensive and sometimes impossible.' },
      { move: 'Make asks specific and small', detail: '"Can you help sometime?" produces nothing. "Can you sit with Dad from two to five on Saturday, the sheet is on the fridge" produces a Saturday afternoon.' },
      { move: 'Book one non-negotiable break inside the next fourteen days', detail: 'Not when things calm down — a date, now, with cover arranged. Carer collapse is the single most common way this arrangement ends badly for both of you.' }
    ],
    lines: [
      { when: 'To request assessments', say: '"I am the sole unpaid carer for [name]. I would like to request a needs assessment for them and a carer\'s assessment for me."' },
      { when: 'To a relative who offers vaguely', say: '"Yes — specifically, can you take Saturday afternoon twice a month? Everything you would need is written down."' },
      { when: 'To a relative who will not help', say: '"I am not asking you to change your mind. I am telling you I cannot cover it alone, so some of it will not get covered."' },
      { when: 'To a professional, to be taken seriously', say: '"I am managing fourteen medications, three appointments a week and overnight care alone. I need to know what support exists, not whether I am eligible in principle."' },
      { when: 'To the person you care for', say: '"I am not going anywhere. I do need help so I can keep doing this — that is about arithmetic, not about you."' }
    ],
    bad: [
      'Waiting until you break to ask for help. Support arranged in a crisis is worse, slower and far more likely to be an emergency placement.',
      'Refusing all offers because it is quicker to do it yourself. You train everyone that no help is needed and you become permanently irreplaceable.',
      'Keeping everything in your head. Nobody can cover for you for even one day, which is the definition of no backup.',
      'Cancelling your own medical appointments. The whole arrangement collapses the moment your health does, and it takes both of you down.',
      'Arguing with a relative about fairness. It costs you the energy you needed for the caring, and it almost never changes what they do.'
    ],
    good: [
      'Check what you are entitled to — carer\'s allowance or equivalent, respite provision, attendance benefits, council tax relief, disability adaptations. Most goes unclaimed.',
      'Find one carers\' organisation and one online group of people in the same position. Practical shortcuts travel between carers faster than through any official channel.',
      'Keep a symptom and incident log. It shortens every professional conversation and it is what secures escalated support.',
      'Decide in advance what would mean this arrangement has to change — a fall, a night wandering, a second person needing care. Deciding early keeps the decision yours.',
      'Protect one thing that is only yours, weekly and defended. Not a reward — maintenance.'
    ],
    limit: 'If you are at the point of harming yourself, or you are frightened of what you might do, or the person you care for is unsafe with you — stop and get help today. Contact their medical team, a carers\' crisis line, or the emergency services. Reaching that point is a predictable consequence of an unresourced load, not a moral failure.'
  },

  {
    id: 'health-hospital-advocate',
    title: 'Someone you love is in hospital and decisions are being made fast',
    category: 'health',
    severity: 'high',
    tool: 'The Written Question',
    tags: ['hospital', 'advocacy', 'records'],
    lede: 'Different staff each shift. Information arriving in fragments in corridors. A consent form. A phrase you did not understand and did not ask about because everyone seemed busy. You are the only continuous presence in the room, which makes you the record.',
    what: 'Different staff each shift. Information arriving in fragments in corridors. A consent form. A phrase you did not understand and did not ask about because everyone seemed busy. You are the only continuous presence in the room, which makes you the record.',
    going: [
      'Hospitals lose continuity across shift changes, not competence. You are the only person who was present for all of it, so your notes have real clinical value.',
      'Nobody will refuse to explain. They will simply not volunteer, because they are moving fast and assume someone else has explained already.',
      'Two things determine outcomes here more than anything else: whether the right question got asked out loud, and whether someone wrote down the answer.'
    ],
    steps: [
      { move: 'Start a notebook on the first day', detail: 'Date, time, name and role of who spoke, what they said, what happens next. Paper, not memory — you will not retain any of this and it will be contradicted later.' },
      { move: 'Establish who is actually in charge', detail: 'Ask for the name of the responsible consultant and the ward number. "The doctors" is not accountable; a named clinician is.' },
      { move: 'Ask the four questions at every decision point', detail: 'What is the diagnosis, what are the options including doing nothing, what are the risks and benefits of each, and what happens if we wait? These four cover almost everything that matters.' },
      { move: 'Request the ward round time and be there', detail: 'Decisions are made on the round. Being present for ten minutes there is worth more than a day of waiting for someone to come and find you.' },
      { move: 'Ask for a proper conversation in a room, not a corridor', detail: 'You are entitled to ask. Anything consequential said standing up next to a trolley will not be understood or remembered.' },
      { move: 'Ask what the discharge plan is from day one', detail: 'Discharge is where the worst failures happen — no medication, no equipment, no care arranged, nobody home. Start asking long before it is imminent.' }
    ],
    lines: [
      { when: 'To establish accountability', say: '"Can I check — who is the consultant responsible for their care, and which ward are we on?"' },
      { when: 'When you do not understand something', say: '"Can you say that again in plain words? I want to make sure I can repeat it back correctly."' },
      { when: 'To get a real conversation', say: '"Can we sit down somewhere for five minutes? I have three questions and I do not want to ask them in the corridor."' },
      { when: 'Before signing anything', say: '"What are we consenting to, what are the main risks, and what is the alternative if we say no?"' },
      { when: 'To raise a concern about a change', say: '"Something has changed since this morning and I am worried. I would like a nurse to look at them now, please."' },
      { when: 'On discharge', say: '"Before they leave — what medication, what equipment, what follow-up, and who do I call at 2am if something goes wrong?"' }
    ],
    bad: [
      'Not asking because everyone looks busy. The question does not go away; it just gets asked later, when the decision has already been made.',
      'Relying on memory across days of exhaustion. You will confidently misremember a dose or a name, and that misremembering can be dangerous.',
      'Being aggressive with ward staff. The nurses are your most useful allies and the fastest route to the doctor you actually need.',
      'Accepting a corridor conversation for a serious decision. You will not take it in, and afterwards nobody will agree on what was said.',
      'Letting a discharge happen because a bed is needed. An unsafe discharge is how people are readmitted within a week, in a worse state.'
    ],
    good: [
      'Ask how to request the medical records, and do it if anything is disputed.',
      'Bring the one-page summary every time — conditions, medications, allergies, baseline. It shortens every handover and prevents real errors.',
      'Share the notebook with other family so the same questions are not asked five times and nobody is relying on rumour.',
      'Find out about the hospital\'s advocacy or patient liaison service before you need it, not during a dispute.',
      'Arrange cover for yourself. Sole advocates fail from exhaustion, usually on the day the important conversation happens.'
    ],
    limit: 'If you believe someone is deteriorating and not being seen, escalate immediately and explicitly — ask for the nurse in charge, then the on-call doctor, and say plainly that you are worried they are getting worse. Many hospitals also have a family-activated escalation route; ask what it is called locally. In an emergency use the emergency number, even from inside a hospital.'
  }
]
