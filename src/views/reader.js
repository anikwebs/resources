/* =============================================================
   READER — a single unit from the corpus (§18, §19).

   The corpus writes each unit as an ordered list of sections with
   a short label ("The idea", "The tool", "Mission"). Those labels
   map onto reading depth, so the reader offers four honest lenses
   rather than a gamified one:

     Quick      the idea and the tool
     Practical  + practice, real life, mistakes
     Deeper     + council, bad room, consequences
     Everything the full document

   The lens filters sections; it never hides the fact that more
   exists, and the count is always shown.
   ============================================================= */

import { esc, md, num, plural, readTime, strip } from '../core/dom.js'
import { I, trackIcon } from '../core/icons.js'
import { href } from '../core/router.js'
import { getLesson, boot, makeIndex, getMissions, getPrompts } from '../core/data.js'
import { setScale, store, getNote } from '../core/store.js'
import { skillsForUnit } from '../data/skills.js'
import { pathsContaining } from '../data/paths.js'
import {
  crumbs, blocks, chip, saveButton, doneButton, promise, pager, errorState
} from './parts.js'

/* ---- depth lenses (§18) ------------------------------------- */
const QUICK = ['The idea', 'The hook', 'The tool', 'Start', '30 seconds', 'Snapshot',
  'Remember', 'Takeaways', 'One-pager', 'Fast path', 'Intuition']
const PRACTICAL = [...QUICK, 'The room', 'Your move', 'Explained', 'Practice', 'Real life',
  'Best move', 'Mistake', 'Defense', 'The hack', 'Hacks', 'Mechanics', 'In reality',
  'Worked example', 'Examples', '5 big ideas', 'Why it exists', 'Signals', 'Reflect']
const DEEPER_OUT = ['Sources', 'Deep dive', 'Further reading', 'Source Discipline']

export const LENSES = [
  { id: 'quick', label: 'Quick', d: 'The idea and the tool. Two minutes.' },
  { id: 'practical', label: 'Practical', d: 'Enough to use it today.' },
  { id: 'deeper', label: 'Deeper', d: 'Everything except the reading list.' },
  { id: 'all', label: 'Everything', d: 'The complete document.' }
]

function keep (section, lens) {
  const l = section.label || ''
  if (lens === 'quick') return QUICK.includes(l)
  if (lens === 'practical') return PRACTICAL.includes(l)
  if (lens === 'deeper') return !DEEPER_OUT.includes(l)
  return true
}

/* ------------------------------------------------------------- */
export default async function reader (ctx) {
  const { track: trackId, id } = ctx.params
  const lens = LENSES.some(l => l.id === ctx.query.lens) ? ctx.query.lens : 'all'

  const { manifest } = await boot()
  const ix = makeIndex(manifest)
  const meta = ix.unit(id)
  const track = ix.track(trackId) || (meta ? ix.track(meta.track) : null)

  if (!meta || !track) {
    return {
      title: 'Not in this library',
      html: `<div class="band"><div class="shell">${errorState(
        'That piece is not in this library',
        'The link may be from an older version. Everything is reachable from the library index.', false)}</div></div>`
    }
  }

  let doc
  try {
    doc = await getLesson(id)
  } catch (err) {
    return {
      title: meta.title,
      html: `<div class="band"><div class="shell">${errorState(
        'This page did not load', err.message || 'The content file could not be read.')}</div></div>`
    }
  }

  const sections = (doc.sections || []).filter(s => keep(s, lens))
  const hidden = (doc.sections || []).length - sections.length
  const group = ix.group(meta.track, meta.levelId)
  const { prev, next } = ix.neighbours(id)
  const skills = skillsForUnit(id)
  const paths = pathsContaining(id)

  /* missions + prompts belonging to this unit, loaded quietly */
  const [missions, prompts] = await Promise.all([
    getMissions().then(m => m.filter(x => x.lessonId === id)).catch(() => []),
    getPrompts().then(p => p.filter(x => String(x.id).startsWith(id + '-'))).catch(() => [])
  ])

  const html = `
  <div class="shell">
    ${crumbs([
      { label: 'Library', to: 'library' },
      { label: track.short || track.name, to: `track/${track.id}` },
      ...(group ? [{ label: `${group.title}`, to: `track/${track.id}#${group.id}` }] : []),
      { label: meta.title }
    ])}

    <div class="reader" data-accent="${track.accent}">
      <article class="reader-main">
        <header class="doc-head">
          <p class="kicker">${esc(track.groupName || 'Part')} ${esc(String(meta.number || meta.ref || ''))} · ${esc(meta.group || '')}</p>
          <h1>${md(doc.title || meta.title)}</h1>
          ${doc.subtitle ? `<p class="sub">${md(doc.subtitle)}</p>` : ''}
          <div class="doc-facts">
            ${chip(`${readTime(doc.wordCount || meta.wordCount)} min read`, I.clock)}
            ${chip(plural((doc.sections || []).length, 'section'), I.list)}
            ${chip(track.name, trackIcon(track.icon))}
          </div>
          ${(meta.skill || meta.tool || meta.result) ? promise([
            ...(meta.skill ? [{ lab: 'The skill', v: meta.skill }] : []),
            ...(meta.tool ? [{ lab: 'The tool', v: meta.tool }] : []),
            ...(meta.result ? [{ lab: 'The result', v: meta.result }] : [])
          ]) : ''}
          ${meta.oneline ? `<p class="t-small on-ac" style="margin-top:var(--s-4);font-weight:560">${md(meta.oneline)}</p>` : ''}
        </header>

        ${lensBar(lens, hidden, trackId, id)}

        ${doc.tracks ? trackAdvice(doc.tracks) : ''}

        ${sections.length
          ? sections.map(sectionHtml).join('')
          : `<div class="state"><span class="state-icon">${I.filter}</span>
              <h3>Nothing at this depth</h3>
              <p>This piece has no sections in the ${esc(lens)} lens. Switch to Everything to read it in full.</p>
              <div class="row" style="justify-content:center;margin-top:var(--s-5)">
                <a class="btn btn-soft" href="${href(`read/${trackId}/${id}?lens=all`)}">Read everything</a>
              </div></div>`}

        ${missionsHtml(missions, id)}
        ${promptsHtml(prompts)}

        ${pager({
          prev: prev ? { to: `read/${prev.track}/${prev.id}${lens !== 'all' ? '?lens=' + lens : ''}`, label: prev.title } : null,
          next: next ? { to: `read/${next.track}/${next.id}${lens !== 'all' ? '?lens=' + lens : ''}`, label: next.title } : null
        })}
      </article>

      <aside class="rail">
        <div>
          <p class="rail-t">On this page</p>
          <nav class="rail-links" data-toc>
            ${sections.map(s => `<a class="rail-link" href="#${esc(s.id)}">${esc(strip(s.label || s.title))}</a>`).join('')}
          </nav>
        </div>

        <div class="rail-btns">
          ${doneButton(id)}
          ${saveButton(id)}
          <button class="btn btn-ghost btn-sm" data-print>${I.file}<span>Print or save PDF</span></button>
        </div>

        <div>
          <p class="rail-t">Reading size</p>
          <div class="row" style="gap:var(--s-2)">
            <button class="btn btn-icon btn-sm" data-scale="-1" aria-label="Smaller text">${I.minus}</button>
            <span class="t-meta t-num grow center" data-scale-val>${Math.round(store.scale * 100)}%</span>
            <button class="btn btn-icon btn-sm" data-scale="1" aria-label="Larger text">${I.plus}</button>
          </div>
        </div>

        ${skills.length ? `
          <div>
            <p class="rail-t">The skill behind this</p>
            <nav class="rail-links">
              ${skills.slice(0, 5).map(s => `<a class="rail-link" href="${href('skill/' + s.id)}">${I.target}${esc(s.name)}</a>`).join('')}
            </nav>
          </div>` : ''}

        ${paths.length ? `
          <div>
            <p class="rail-t">Part of</p>
            <nav class="rail-links">
              ${paths.slice(0, 4).map(p => `<a class="rail-link" href="${href('path/' + p.id)}">${I.route}${esc(p.title)}</a>`).join('')}
            </nav>
          </div>` : ''}
      </aside>
    </div>
  </div>`

  return {
    title: strip(doc.title || meta.title),
    html,
    accent: track.accent,
    recent: { id, kind: 'lesson', title: doc.title || meta.title, route: `read/${track.id}/${id}` },
    mount: mountReader
  }
}

/* ------------------------------------------------------------- */

function lensBar (lens, hidden, trackId, id) {
  return `
  <div class="tabs" role="tablist" aria-label="Reading depth" style="margin-bottom:var(--s-6)">
    ${LENSES.map(l => `
      <a class="tab" role="tab" aria-selected="${l.id === lens}" title="${esc(l.d)}"
         href="${href(`read/${trackId}/${id}${l.id === 'all' ? '' : '?lens=' + l.id}`)}">${esc(l.label)}</a>`).join('')}
    ${hidden > 0 ? `<span class="t-meta faint" style="margin-left:auto;align-self:center">${hidden} section${hidden === 1 ? '' : 's'} hidden</span>` : ''}
  </div>`
}

function trackAdvice (t) {
  const rows = [
    ['If you have 10 minutes', t.fast],
    ['If you have an hour', t.core],
    ['If you want to master it', t.mastery]
  ].filter(([, v]) => v)
  if (!rows.length) return ''
  return `
  <details class="acc" style="margin-bottom:var(--s-7)">
    <summary>How to take this piece${I.chevDown}</summary>
    <div class="acc-body">
      ${rows.map(([k, v]) => `<div class="callout"><span class="lab">${esc(k)}</span><p>${md(v)}</p></div>`).join('')}
    </div>
  </details>`
}

function sectionHtml (s) {
  return `
  <section class="sec" id="${esc(s.id)}">
    <div class="sec-head">
      <h2>${md(s.title || s.label || '')}</h2>
      ${s.label && s.title && strip(s.label) !== strip(s.title)
        ? `<span class="t-label faint">${esc(s.label)}</span>` : ''}
    </div>
    <div class="prose">${blocks(s.blocks)}</div>
  </section>`
}

function missionsHtml (missions, unitId) {
  if (!missions.length) return ''
  const byKind = {}
  for (const m of missions) (byKind[m.label] ||= []).push(m)
  return `
  <section class="sec" id="do-this-now">
    <div class="sec-head"><h2>Do this now</h2><span class="t-label faint">${plural(missions.length, 'action')}</span></div>
    <p class="t-small muted" style="margin-bottom:var(--s-5)">Reading this changes nothing on its own. These are the
      actions the piece is actually for. Tick one — it is stored on this device.</p>
    ${Object.entries(byKind).map(([label, list]) => `
      <div style="margin-bottom:var(--s-5)">
        <p class="eyebrow" style="margin-bottom:var(--s-3)">${esc(label)}</p>
        <div class="stack" style="--flow:var(--s-2)">
          ${list.map(m => `
            <label class="check${store.done.has(m.id) ? ' done' : ''}">
              <input type="checkbox" data-done-box="${esc(m.id)}"${store.done.has(m.id) ? ' checked' : ''}>
              <span class="check-t">${md(m.excerpt || '')}</span>
            </label>`).join('')}
        </div>
      </div>`).join('')}
    <div class="field" style="margin-top:var(--s-5)">
      <label for="note-${esc(unitId)}">What you actually did, or decided not to do</label>
      <textarea class="textarea" id="note-${esc(unitId)}" data-note="unit:${esc(unitId)}"
        placeholder="One or two lines is enough. This stays on your device and appears in your progress page.">${esc(getNote('unit:' + unitId))}</textarea>
      <span class="hint">Saves as you type.</span>
    </div>
  </section>`
}

function promptsHtml (prompts) {
  if (!prompts.length) return ''
  return `
  <section class="sec" id="ai-move">
    <div class="sec-head"><h2>The AI move</h2><span class="t-label faint">${plural(prompts.length, 'prompt')}</span></div>
    <p class="t-small muted" style="margin-bottom:var(--s-5)">Copy into whatever assistant you use. Replace anything in
      [square brackets] with your real material — a description of your situation produces a description of an answer.</p>
    ${prompts.map(p => `
      <div class="prompt" style="margin-bottom:var(--s-4)">
        <div class="prompt-h">
          <span class="t">${esc(p.section || 'Prompt')}</span>
          <button class="btn btn-ghost btn-sm" data-copy="${esc(p.text || '')}">${I.copy}Copy</button>
        </div>
        <pre>${esc(p.text || '')}</pre>
      </div>`).join('')}
    <div class="callout callout-warning">
      <span class="lab">Before you use the output</span>
      <p>Check every number, name, date and source yourself. Confident tone tells you nothing about accuracy.
        <a href="${href('ai/verify')}">How to verify properly</a>.</p>
    </div>
  </section>`
}

/* ---- behaviour that only the reader needs ------------------- */
function mountReader (root) {
  /* scale buttons */
  root.addEventListener('click', e => {
    const b = e.target.closest('[data-scale]')
    if (b) {
      const v = setScale(store.scale + Number(b.dataset.scale) * 0.05)
      const out = root.querySelector('[data-scale-val]')
      if (out) out.textContent = Math.round(v * 100) + '%'
      return
    }
    if (e.target.closest('[data-print]')) window.print()
  })

  /* highlight the section currently on screen */
  const links = [...root.querySelectorAll('[data-toc] .rail-link')]
  const secs = [...root.querySelectorAll('.sec[id]')]
  if (!links.length || !secs.length || !('IntersectionObserver' in window)) return

  const io = new IntersectionObserver(entries => {
    for (const en of entries) {
      if (!en.isIntersecting) continue
      const id = en.target.id
      links.forEach(l => l.classList.toggle('on', l.getAttribute('href') === '#' + id))
    }
  }, { rootMargin: '-88px 0px -70% 0px' })
  secs.forEach(s => io.observe(s))
  return () => io.disconnect()
}
