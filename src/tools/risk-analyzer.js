import {
  field, text, area, range, select, panel, outPanel, addBtn, delBtn, tblWrap,
  callout, emptyOut, n, uid, stamp, head
} from './kit.js'
import { esc } from '../core/dom.js'

const READS = 'Likelihood times impact ranks risks. It does not tell you which one is survivable. A 5% chance of something you cannot recover from outranks a 60% chance of something annoying — always.'

const sevOf = score => score >= 16 ? 'critical' : score >= 10 ? 'high' : score >= 5 ? 'medium' : 'low'
const sevLabel = { critical: 'Critical', high: 'High', medium: 'Medium', low: 'Low' }

export default {
  id: 'risk-analyzer',
  name: 'Risk Analyzer',
  blurb: 'Rank what could go wrong, then separate recoverable from not.',
  icon: 'alert',
  accent: 'signal',
  group: 'Deciding',
  purpose: 'Finds the risk that actually deserves your attention, which is rarely the one you are worrying about.',
  when: [
    'Before committing to something hard to reverse',
    'You feel uneasy but cannot name why',
    'Someone is telling you it is completely safe'
  ],
  reads: READS,

  initial: () => ({
    subject: '',
    risks: [{ id: uid(), what: '', like: 3, imp: 3, recover: 'yes', mitigate: '', signal: '' }]
  }),

  form (s) {
    const rows = s.risks.map((r, i) => `
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px">
        ${text(`risks.${i}.what`, r.what, 'What could go wrong? Be specific.')}
        ${s.risks.length > 1 ? delBtn('del', i, 'Remove risk') : '<span></span>'}
      </div>
      <div class="rowitem" style="margin-top:2px">
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow"><label>Likelihood <span class="t-num" data-mirror="risks.${i}.like">${r.like}</span>/5</label>
            ${range(`risks.${i}.like`, r.like, { min: 1, max: 5 })}</div>
          <div class="field grow"><label>Impact if it happens <span class="t-num" data-mirror="risks.${i}.imp">${r.imp}</span>/5</label>
            ${range(`risks.${i}.imp`, r.imp, { min: 1, max: 5 })}</div>
        </div>
        ${field('Could you recover from it?', select(`risks.${i}.recover`, r.recover, [
          { v: 'yes', l: 'Yes — costly but survivable' },
          { v: 'hard', l: 'Only slowly, at serious cost' },
          { v: 'no', l: 'No — permanent or irreversible' }
        ]))}
        ${field('What is the earliest signal it is happening?', text(`risks.${i}.signal`, r.signal, 'The thing you would notice first, if you were watching'))}
        ${field('What reduces it now?', text(`risks.${i}.mitigate`, r.mitigate, 'A concrete action, not a good intention'))}
      </div>`).join('')

    return `
      ${panel('What are you assessing?', field('', text('subject', s.subject, 'e.g. Leaving before the new contract is signed')))}
      ${panel('The risks', rows, addBtn('add', 'Add risk'))}`
  },

  output (s) {
    const named = s.risks.filter(r => (r.what || '').trim())
    if (!named.length) return outPanel('Ranked risks', emptyOut('Name one thing that could go wrong', 'Rank appears as you score likelihood and impact.'))

    const scored = named.map(r => ({ ...r, score: n(r.like) * n(r.imp), sev: sevOf(n(r.like) * n(r.imp)) }))
      .sort((a, b) => b.score - a.score)

    const fatal = scored.filter(r => r.recover === 'no')
    const hard = scored.filter(r => r.recover === 'hard')
    const unwatched = scored.filter(r => r.score >= 10 && !(r.signal || '').trim())
    const unmitigated = scored.filter(r => r.score >= 10 && !(r.mitigate || '').trim())

    return outPanel('Ranked risks', `
      ${tblWrap(`
        <thead><tr><th>Risk</th><th class="n">L×I</th><th>Severity</th><th>Recoverable</th></tr></thead>
        <tbody>${scored.map(r => `
          <tr>
            <td>${esc(r.what)}</td>
            <td class="n">${r.score}</td>
            <td><span class="sev-${r.sev}">${sevLabel[r.sev]}</span></td>
            <td>${r.recover === 'no' ? '<span class="badge badge-danger">No</span>' : r.recover === 'hard' ? '<span class="badge badge-warning">Slowly</span>' : '<span class="badge badge-success">Yes</span>'}</td>
          </tr>`).join('')}</tbody>`)}

      ${fatal.length ? `<div style="margin-top:var(--s-4)">${callout('These outrank the rankings', `You have marked ${fatal.length} risk${fatal.length === 1 ? '' : 's'} as unrecoverable: ${fatal.map(r => `<strong>${esc(r.what)}</strong>`).join(', ')}. Score is irrelevant here. Either eliminate the exposure, cap it, or do not proceed. Never average an irreversible risk into a list.`, 'danger')}</div>` : ''}

      ${hard.length && !fatal.length ? `<div style="margin-top:var(--s-4)">${callout('Slow to recover from', `${hard.map(r => `<strong>${esc(hard.length === 1 ? hard[0].what : r.what)}</strong>`).join(', ')} would take serious time and cost to undo. Treat these as near-irreversible when you choose.`, 'warning')}</div>` : ''}

      ${unwatched.length ? `<div style="margin-top:var(--s-3)">${callout('No early warning', `${unwatched.length} significant risk${unwatched.length === 1 ? ' has' : 's have'} no named signal. A risk you cannot detect early is a risk you will meet at full size. Write down what you would notice first.`, 'warning')}</div>` : ''}

      ${unmitigated.length ? `<div style="margin-top:var(--s-3)">${callout('Nothing reduces these', `${unmitigated.length} significant risk${unmitigated.length === 1 ? ' has' : 's have'} no mitigation. If nothing can reduce them, that is a finding — it means the real decision is whether to accept them, stated plainly.`, 'info')}</div>` : ''}

      ${scored.filter(r => r.score < 5).length === scored.length ? `<div style="margin-top:var(--s-3)">${callout('Suspiciously calm', 'Every risk you listed scored low. Either this is genuinely safe, or you are listing the risks you already know how to handle. Ask what would have to be true for this to go badly — and what you would be embarrassed to have missed.', 'info')}</div>` : ''}

      <div class="hr"></div>
      <p class="t-caption faint">${esc(READS)}</p>`)
  },

  actions: {
    add: s => s.risks.push({ id: uid(), what: '', like: 3, imp: 3, recover: 'yes', mitigate: '', signal: '' }),
    del: (s, { i }) => s.risks.splice(i, 1)
  },

  summary (s) {
    const scored = s.risks.filter(r => (r.what || '').trim())
      .map(r => ({ ...r, score: n(r.like) * n(r.imp) }))
      .sort((a, b) => b.score - a.score)
    const rec = { yes: 'recoverable', hard: 'slow to recover', no: 'IRREVERSIBLE' }
    return [
      stamp('Risk Analyzer'),
      `Assessing: ${s.subject || '(not stated)'}`,
      head('Ranked risks'),
      ...scored.map((r, i) => [
        `  ${i + 1}. ${r.what}`,
        `     likelihood ${r.like}/5 · impact ${r.imp}/5 · score ${r.score} · ${rec[r.recover]}`,
        `     early signal: ${r.signal || '(none named)'}`,
        `     mitigation: ${r.mitigate || '(none named)'}`
      ].join('\n')),
      '',
      scored.some(r => r.recover === 'no')
        ? 'WARNING: at least one risk is irreversible. Eliminate, cap, or do not proceed.'
        : 'No irreversible risks recorded.',
      '',
      READS
    ].join('\n')
  }
}
