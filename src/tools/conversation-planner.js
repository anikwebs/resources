import {
  field, text, area, select, panel, outPanel, addBtn, delBtn,
  callout, emptyOut, uid, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'
import { I } from '../core/icons.js'

const READS = 'Difficult conversations go wrong in the first thirty seconds and in the reaction to pushback. Those are the only two parts worth rehearsing. Scripting the whole thing makes you sound like you are reading.'

export default {
  id: 'conversation-planner',
  name: 'Conversation Planner',
  blurb: 'Prepare the opening line, the outcome, and your answer to pushback.',
  icon: 'chat',
  accent: 'clay',
  group: 'Communicating',
  purpose: 'Gets you into a hard conversation with a first sentence and a floor you will not drop below.',
  when: [
    'You have been rehearsing it in your head for days',
    'You expect to be talked out of your position',
    'The relationship matters as much as the outcome'
  ],
  reads: READS,

  initial: () => ({
    who: '',
    what: '',
    want: '',
    accept: '',
    walk: '',
    opener: '',
    their: '',
    when: '',
    where: '',
    objections: [{ id: uid(), says: '', reply: '' }]
  }),

  form (s) {
    const rows = s.objections.map((o, i) => `
      <div class="rowitem" style="margin-top:${i ? 'var(--s-2)' : '0'}">
        ${field('They say', text(`objections.${i}.says`, o.says, 'Their most likely pushback — in their words'))}
        ${field('You say', area(`objections.${i}.reply`, o.reply, 'Short. Do not add a second reason — it reads as negotiating with yourself.', 2))}
        <div class="row" style="justify-content:flex-end">${s.objections.length > 1 ? delBtn('del', i, 'Remove objection') : ''}</div>
      </div>`).join('')

    return `
      ${panel('The conversation', `
        ${field('Who is it with?', text('who', s.who, 'Name and their relationship to you'))}
        ${field('What is it about?', area('what', s.what, 'The specific thing — one behaviour, one decision, one request.', 2), 'If it is more than one thing, it is more than one conversation.')}`)}
      ${panel('Your three lines', `
        ${field('What you want', text('want', s.want, 'The best realistic outcome'))}
        ${field('What you would accept', text('accept', s.accept, 'Good enough to say yes to'))}
        ${field('What you will not accept', text('walk', s.walk, 'Your floor — decided now, while you are calm'), 'This is the field that stops you agreeing to something in the room.')}`)}
      ${panel('The opening', `
        ${field('Your first sentence, word for word', area('opener', s.opener, 'Name the topic and the outcome you want. No preamble, no apology, no weather.', 3), 'Short, specific, and not a question. The first thirty seconds set the frame.')}
        ${field('What do they want out of this?', area('their', s.their, 'Their interest, their pressure, what they are protecting. Guessing badly is still better than not asking.', 2))}`)}
      ${panel('Their pushback', rows, addBtn('add', 'Add objection'))}
      ${panel('Setting', `
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow"><label>When</label>${text('when', s.when, 'Time and day')}</div>
          <div class="field grow"><label>Where</label>${text('where', s.where, 'Private? Neutral? By voice?')}</div>
        </div>`)}`
  },

  output (s) {
    if (!s.what.trim() && !s.opener.trim()) {
      return outPanel('Your brief', emptyOut('Start with what it is about', 'Your brief builds as you answer.'))
    }

    const objs = s.objections.filter(o => (o.says || '').trim())
    const missing = []
    if (!s.opener.trim()) missing.push('an opening line')
    if (!s.walk.trim()) missing.push('a floor')
    if (!objs.length) missing.push('their likely pushback')

    return outPanel('Your brief', `
      ${s.who.trim() ? `<p class="eyebrow">With ${esc(s.who)}</p>` : ''}

      ${s.opener.trim() ? `<div class="lines" style="margin-bottom:var(--s-4)">
        <div class="line"><span class="when">Open with</span><span class="say">${esc(s.opener)}</span>
        <button class="btn btn-icon copy" data-copy="${esc(s.opener)}" aria-label="Copy opening line" title="Copy">${I.copy}</button></div>
      </div>` : ''}

      ${s.want.trim() || s.accept.trim() || s.walk.trim() ? `<div class="promise" style="margin-bottom:var(--s-4)">
        ${s.want.trim() ? `<div><span class="lab">Want</span><span class="v">${esc(s.want)}</span></div>` : ''}
        ${s.accept.trim() ? `<div><span class="lab">Accept</span><span class="v">${esc(s.accept)}</span></div>` : ''}
        ${s.walk.trim() ? `<div><span class="lab">Will not accept</span><span class="v">${esc(s.walk)}</span></div>` : ''}
      </div>` : ''}

      ${objs.length ? `<p class="eyebrow">If they push back</p>
        <div class="lines">${objs.map(o => `
          <div class="line">
            <span class="when">${esc(o.says)}</span>
            <span class="say">${esc(o.reply || '— you have not decided your answer to this')}</span>
            ${(o.reply || '').trim() ? `<button class="btn btn-icon copy" data-copy="${esc(o.reply)}" aria-label="Copy reply" title="Copy">${I.copy}</button>` : ''}
          </div>`).join('')}</div>` : ''}

      ${s.their.trim() ? `<div style="margin-top:var(--s-4)">${callout('Their side', `${esc(s.their)}<br><br>Say this back to them early. Being understood makes people far less defensive than being right does.`, 'info')}</div>` : ''}

      ${s.walk.trim() ? `<div style="margin-top:var(--s-3)">${callout('Hold this line', `You decided in advance: ${esc(s.walk)}. If you find yourself moving past it in the room, say "I need to think about that" and leave. Almost nothing genuinely requires an answer in the moment.`, 'warning')}</div>` : ''}

      ${missing.length ? `<div style="margin-top:var(--s-3)">${callout('Not ready yet', `You are missing ${missing.join(', ')}. ${missing.includes('a floor') ? 'The floor matters most — without it, the outcome is decided by whoever is more comfortable with conflict.' : ''}`, 'danger')}</div>` : ''}

      ${!s.where.trim() ? `<div style="margin-top:var(--s-3)">${callout('Choose the setting deliberately', 'Private, unhurried, and not immediately before something either of you has to attend. Difficult conversations held in doorways or five minutes before a meeting reliably go badly.', 'info')}</div>` : ''}

      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  actions: {
    add: s => s.objections.push({ id: uid(), says: '', reply: '' }),
    del: (s, { i }) => s.objections.splice(i, 1)
  },

  summary (s) {
    const objs = s.objections.filter(o => (o.says || '').trim())
    return [
      stamp('Conversation Planner'),
      `With: ${s.who || '(not stated)'}`,
      `About: ${s.what || '(not stated)'}`,
      head('My three lines'),
      `  Want:       ${s.want || '(not stated)'}`,
      `  Accept:     ${s.accept || '(not stated)'}`,
      `  Will NOT:   ${s.walk || '(not decided — decide this before you go in)'}`,
      head('Opening line'),
      `  "${s.opener || '(not written)'}"`,
      head('Their side'),
      `  ${s.their || '(not considered)'}`,
      head('Pushback'),
      ...(objs.length ? objs.flatMap(o => [`  They: ${o.says}`, `  Me:   ${o.reply || '(no answer decided)'}`, '']) : ['  (none anticipated)']),
      head('Setting'),
      `  ${s.when || 'when: unset'} · ${s.where || 'where: unset'}`,
      '',
      READS
    ].join('\n')
  }
}
