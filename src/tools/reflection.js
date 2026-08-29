import {
  field, text, area, range, select, panel, outPanel, addBtn, delBtn,
  callout, emptyOut, n, uid, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'

const READS = 'Reflection is only useful when it changes one behaviour. Reviewing a week and concluding "be more focused" is not a finding — it is a mood. The test is whether next week looks different.'

export default {
  id: 'reflection',
  name: 'Reflection Tool',
  blurb: 'Review a period honestly and leave with one change.',
  icon: 'pen',
  accent: 'council',
  group: 'Building',
  purpose: 'Turns a week or a project into one specific, testable change.',
  when: [
    'End of a week, a month, or a project',
    'Something went wrong and you want the lesson, not the guilt',
    'Something went right and you want to know why'
  ],
  reads: READS,

  initial: () => ({
    period: '',
    energy: 3,
    control: 3,
    progress: 3,
    worked: [{ id: uid(), t: '' }],
    didnt: [{ id: uid(), t: '' }],
    surprise: '',
    avoided: '',
    pattern: '',
    change: '',
    keep: '',
    entries: []
  }),

  form (s) {
    const list = (key, ph, act) => s[key].map((it, i) => `
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px;margin-top:${i ? 'var(--s-2)' : '0'}">
        ${text(`${key}.${i}.t`, it.t, ph)}
        ${s[key].length > 1 ? delBtn(act, i, 'Remove') : '<span></span>'}
      </div>`).join('')

    return `
      ${panel('The period', `
        ${field('What are you reviewing?', text('period', s.period, 'e.g. This week, or: the migration project'))}
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:180px"><label>Energy <span class="t-num" data-mirror="energy">${s.energy}</span>/5</label>${range('energy', s.energy, { min: 1, max: 5 })}</div>
          <div class="field grow" style="min-width:180px"><label>Sense of control <span class="t-num" data-mirror="control">${s.control}</span>/5</label>${range('control', s.control, { min: 1, max: 5 })}</div>
          <div class="field grow" style="min-width:180px"><label>Real progress <span class="t-num" data-mirror="progress">${s.progress}</span>/5</label>${range('progress', s.progress, { min: 1, max: 5 })}</div>
        </div>`)}
      ${panel('What happened', `
        <p class="t-caption faint" style="margin-bottom:var(--s-3)">Specific events, not judgements.</p>
        <p class="eyebrow">Worked</p>${list('worked', 'Something that went well — and be concrete', 'delW')}
        <div style="height:var(--s-4)"></div>
        <p class="eyebrow">Did not work</p>${list('didnt', 'Something that went badly', 'delD')}`)}
      ${panel('The harder questions', `
        ${field('What surprised you?', area('surprise', s.surprise, 'Surprise marks the edge of what you understood. It is the most informative thing here.', 2))}
        ${field('What did you avoid?', area('avoided', s.avoided, 'The thing you moved down the list every day. Name it plainly.', 2))}
        ${field('Have you seen this pattern before?', area('pattern', s.pattern, 'If this is the third time, the problem is structural rather than situational.', 2))}`)}
      ${panel('The output', `
        ${field('One thing you will do differently', area('change', s.change, 'Specific and observable. "Send the agenda the day before" — not "communicate better".', 2))}
        ${field('One thing you will deliberately keep', text('keep', s.keep, 'Protecting what works is half of improvement'))}
        <div class="row" style="margin-top:var(--s-4)">
          <button class="btn btn-soft btn-sm" data-act="log">Save this review to the log</button>
        </div>`)}
      ${s.entries.length ? panel(`Past reviews (${s.entries.length})`, s.entries.slice().reverse().map((e, revIdx) => {
        const i = s.entries.length - 1 - revIdx
        return `
        <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px;margin-top:${revIdx ? 'var(--s-2)' : '0'}">
          <div>
            <div class="t-meta faint">${esc(e.date)}${e.period ? ' · ' + esc(e.period) : ''}</div>
            <div class="t-small">${esc(e.change || '(no change recorded)')}</div>
          </div>
          ${delBtn('delEntry', i, 'Delete this review')}
        </div>`
      }).join('')) : ''}`
  },

  output (s) {
    const worked = s.worked.filter(i => (i.t || '').trim())
    const didnt = s.didnt.filter(i => (i.t || '').trim())
    if (!worked.length && !didnt.length && !s.change.trim()) {
      return outPanel('The review', emptyOut('Add one thing that worked', 'The read-out appears as you fill it in.'))
    }

    const avg = (n(s.energy) + n(s.control) + n(s.progress)) / 3
    const lowControl = n(s.control) <= 2
    const lowEnergy = n(s.energy) <= 2
    const goodProgressLowEnergy = n(s.progress) >= 4 && n(s.energy) <= 2

    return outPanel('The review', `
      ${s.period.trim() ? `<p class="eyebrow">${esc(s.period)}</p>` : ''}

      <div class="stats" style="margin-bottom:var(--s-4)">
        <div class="stat"><b>${n(s.energy)}/5</b><span>energy</span></div>
        <div class="stat"><b>${n(s.control)}/5</b><span>control</span></div>
        <div class="stat"><b>${n(s.progress)}/5</b><span>progress</span></div>
      </div>

      ${goodProgressLowEnergy ? callout('Progress at a cost', 'You made real progress with very little left in the tank. That combination is only sustainable briefly — it is how good periods turn into bad months. Decide now what you will drop next week, while you still have the choice.', 'warning')
        : lowControl && lowEnergy ? callout('Low on both', 'Low energy and low control together usually means you are absorbing other people\'s priorities. The recovery move is not working harder — it is reclaiming one recurring block of time and defending it.', 'warning')
        : lowControl ? callout('Little control', 'Progress can survive low control for a while, but it grinds. Find the one commitment you could renegotiate, and renegotiate it this week rather than enduring another month.', 'info')
        : avg >= 4 ? callout('A good period', 'Worth knowing exactly why. Look at what you listed under "worked" — the point of a good week is to identify what to repeat deliberately rather than by luck.', 'success')
        : callout('A mixed period', 'Most periods are. The useful output is not a score — it is the single change below.', 'info')}

      ${worked.length ? `<div style="margin-top:var(--s-4)"><p class="eyebrow">Worked</p>
        <ul class="goodlist">${worked.map(i => `<li>${esc(i.t)}</li>`).join('')}</ul></div>` : ''}

      ${didnt.length ? `<div style="margin-top:var(--s-4)"><p class="eyebrow">Did not work</p>
        <ul class="badlist">${didnt.map(i => `<li>${esc(i.t)}</li>`).join('')}</ul></div>` : ''}

      ${s.avoided.trim() ? `<div style="margin-top:var(--s-3)">${callout('What you avoided', `${esc(s.avoided)}<br><br>This is usually the highest-value item on the list. Avoidance is rarely about difficulty — it is about an unmade decision or an unhad conversation. Which is it?`, 'warning')}</div>` : ''}

      ${s.surprise.trim() ? `<div style="margin-top:var(--s-3)">${callout('What surprised you', `${esc(s.surprise)}<br><br>Surprise means your model of the situation was wrong somewhere. That is worth more than any of the things that went as expected.`, 'info')}</div>` : ''}

      ${s.pattern.trim() ? `<div style="margin-top:var(--s-3)">${callout('The pattern', `${esc(s.pattern)}<br><br>If it has happened before, stop treating it as bad luck. Recurring problems need a structural change — a different commitment, a different boundary, a different role.`, 'danger')}</div>` : ''}

      ${s.change.trim()
        ? `<div style="margin-top:var(--s-4)">${callout('The one change', `${esc(s.change)}${s.keep.trim() ? `<br><br>And deliberately keeping: ${esc(s.keep)}.` : ''}`, 'success')}</div>`
        : `<div style="margin-top:var(--s-4)">${callout('No change decided', 'Without one specific, observable change, this review has cost you time and altered nothing. Pick the smallest change that the worst item above would have prevented.', 'danger')}</div>`}

      ${s.entries.length >= 2 ? `<div style="margin-top:var(--s-4)"><p class="eyebrow">Across ${s.entries.length} reviews</p>
        <p class="t-small muted">Read your last few changes below. If you have written the same one more than twice, the change is not working — it is too large, too vague, or it is not actually the problem.</p>
        <ul class="marklist" style="margin-top:var(--s-2)">${s.entries.slice(-4).reverse().map(e => `<li><span class="t-meta faint">${esc(e.date)}</span> — ${esc(e.change || 'no change recorded')}</li>`).join('')}</ul></div>` : ''}

      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  actions: {
    delW: (s, { i }) => s.worked.splice(i, 1),
    delD: (s, { i }) => s.didnt.splice(i, 1),
    log: s => {
      if (!s.change.trim() && !s.period.trim()) return
      s.entries.push({
        id: uid(),
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        period: s.period,
        change: s.change,
        energy: n(s.energy), control: n(s.control), progress: n(s.progress)
      })
      if (s.entries.length > 40) s.entries.shift()
      s.worked = [{ id: uid(), t: '' }]
      s.didnt = [{ id: uid(), t: '' }]
      s.surprise = ''; s.avoided = ''; s.pattern = ''; s.change = ''; s.keep = ''
    },
    delEntry: (s, { i }) => s.entries.splice(i, 1)
  },

  summary (s) {
    const worked = s.worked.filter(i => (i.t || '').trim())
    const didnt = s.didnt.filter(i => (i.t || '').trim())
    return [
      stamp('Reflection'),
      `Period: ${s.period || '(not stated)'}`,
      `Energy ${n(s.energy)}/5 · Control ${n(s.control)}/5 · Progress ${n(s.progress)}/5`,
      head('Worked'),
      ...(worked.length ? worked.map(i => '  + ' + i.t) : ['  (none listed)']),
      head('Did not work'),
      ...(didnt.length ? didnt.map(i => '  - ' + i.t) : ['  (none listed)']),
      head('Harder questions'),
      `  Surprised me: ${s.surprise || '(none)'}`,
      `  I avoided:    ${s.avoided || '(none)'}`,
      `  Pattern:      ${s.pattern || '(none)'}`,
      head('Output'),
      `  Change: ${s.change || '(none decided — do this)'}`,
      `  Keep:   ${s.keep || '(none)'}`,
      ...(s.entries.length ? [head(`Past reviews (${s.entries.length})`), ...s.entries.slice(-10).map(e => `  ${e.date} — ${e.change || 'no change recorded'}`)] : []),
      '',
      READS
    ].join('\n')
  }
}
