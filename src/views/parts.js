/* =============================================================
   SHARED VIEW PARTS

   Markup fragments used across views. Every string returned here
   is already escaped — callers must not double-escape.
   ============================================================= */

import { esc, md, clip, num, plural, readTime, strip } from '../core/dom.js'
import { I, trackIcon } from '../core/icons.js'
import { href } from '../core/router.js'
import { isDone, isSaved } from '../core/store.js'

/* ---------- chrome ---------- */

export function crumbs (trail) {
  return `<nav class="crumbs" aria-label="Breadcrumb">
    ${trail.map((t, i) => {
      const last = i === trail.length - 1
      const label = esc(strip(t.label))
      return (last || !t.to)
        ? `<span${last ? ' aria-current="page"' : ''}>${label}</span>`
        : `<a href="${href(t.to)}">${label}</a>${I.chev}`
    }).join('')}
  </nav>`
}

export function pageHead ({ eyebrow, title, lede, meta, actions, accent }) {
  return `<header class="phead"${accent ? ` data-accent="${accent}"` : ''}>
    ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
    <h1 class="t-hero">${md(title)}</h1>
    ${lede ? `<p class="t-lede muted" style="max-width:64ch">${md(lede)}</p>` : ''}
    ${meta ? `<div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-4)">${meta}</div>` : ''}
    ${actions ? `<div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-6)">${actions}</div>` : ''}
  </header>`
}

export const sectionHead = (title, right = '') =>
  `<div class="sec-head"><h2>${md(title)}</h2>${right ? `<div class="grow row" style="justify-content:flex-end">${right}</div>` : ''}</div>`

export const chip = (label, icon = '') =>
  `<span class="chip">${icon}${esc(label)}</span>`

export const chipAc = label => `<span class="chip chip-ac">${esc(label)}</span>`

export const sev = level => {
  const l = String(level || '').toLowerCase()
  const label = l ? l[0].toUpperCase() + l.slice(1) : 'Unrated'
  return `<span class="sev-${l || 'low'}">${esc(label)}</span>`
}

/* ---------- states (§58) ---------- */

export const emptyState = (title, body = '', action = '') => `
  <div class="state">
    <span class="state-icon">${I.inbox}</span>
    <h3>${esc(title)}</h3>
    ${body ? `<p>${esc(body)}</p>` : ''}
    ${action || ''}
  </div>`

export const errorState = (title, body = '', retry = true) => `
  <div class="state">
    <span class="state-icon">${I.alert}</span>
    <h3>${esc(title)}</h3>
    ${body ? `<p>${esc(body)}</p>` : ''}
    <div class="row-wrap" style="gap:var(--s-3);justify-content:center;margin-top:var(--s-5)">
      ${retry ? '<button class="btn btn-soft" data-reload>Try again</button>' : ''}
      <a class="btn btn-ghost" href="${href('')}">Go to the start</a>
    </div>
  </div>`

export const loadingState = (label = 'Loading') => `
  <div class="stack" aria-busy="true" aria-live="polite">
    <span class="sr">${esc(label)}</span>
    <div class="skel skel-line" style="width:38%"></div>
    <div class="skel skel-line" style="width:82%"></div>
    <div class="skel skel-line" style="width:70%"></div>
    <div class="skel" style="height:120px;margin-top:var(--s-4)"></div>
  </div>`

export const skelCards = (count = 6) =>
  `<div class="grid g-3">${Array.from({ length: count }, () =>
    '<div class="skel" style="height:150px"></div>').join('')}</div>`

/* ---------- cards ---------- */

/* Every card used to put its eyebrow and title in a flex row with
   the badge beside them. In a 268px grid column that left the title
   roughly 130px, so real titles truncated mid-word — "Staying
   steady unde…", "Deciding what actual…". Eyebrow and badge are
   both small meta chips, so they belong together on one row, and
   the title gets the full card width underneath.

   One helper rather than nine near-copies, so the card family
   cannot drift apart again. `lead` is for what must sit above the
   meta row on its own line: a large index numeral, a track icon.
   Callers pass already-escaped HTML, since some titles come from
   md() and some from esc(). */
function cardHead ({ eyebrow = '', badge = '', lead = '', title = '', clamp = 2 } = {}) {
  const meta = eyebrow || badge
    ? `<div class="card-meta">${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}${badge}</div>`
    : ''
  return `${lead}${meta}<h3 class="card-title${clamp ? ` clamp-${clamp}` : ''}">${title}</h3>`
}

export function unitCard (u, { showTrack = false, n: index = null } = {}) {
  const done = isDone(u.id)
  return `<a class="card rise" href="${href(`read/${u.track}/${u.id}`)}" data-accent="${u.accent || 'forest'}">
    ${cardHead({
      lead: index != null ? `<span class="card-n">${index}</span>` : '',
      eyebrow: showTrack && u.trackTitle ? esc(u.trackTitle) : '',
      badge: done ? `<span class="badge badge-success" title="Completed">${I.check}</span>` : '',
      title: md(u.title),
      clamp: 3
    })}
    ${u.subtitle ? `<p class="card-text clamp-2">${esc(clip(u.subtitle, 120))}</p>` : ''}
    <div class="card-foot">
      ${u.skill ? `<span class="t-meta faint">${esc(clip(u.skill, 40))}</span>` : ''}
      <span class="t-meta faint">${readTime(u.wordCount)} min</span>
    </div>
  </a>`
}

export function situationCard (s) {
  return `<a class="card card-lead rise" href="${href(`situation/${s.id}`)}" data-accent="${s.accent || 'clay'}">
    ${cardHead({
      eyebrow: esc(s.categoryTitle || ''),
      badge: isSaved(s.id) ? `<span class="badge badge-info" title="Saved">${I.bookmark}</span>` : '',
      title: md(s.title),
      /* Situation titles are whole sentences — "Money has left your
         account and you did not authorise it" — so two lines cuts
         them mid-thought. */
      clamp: 3
    })}
    ${s.lede ? `<p class="card-text clamp-3">${esc(clip(s.lede, 150))}</p>` : ''}
    <div class="card-foot">
      ${sev(s.severity)}
      <span class="t-meta faint">${readTime(s.wordCount)} min</span>
    </div>
  </a>`
}

export function skillCard (sk, stats = null) {
  return `<a class="card rise" href="${href(`skill/${sk.id}`)}" data-accent="${sk.accent || 'forest'}">
    ${cardHead({
      eyebrow: esc(sk.domainTitle || ''),
      badge: sk.levelLabel ? `<span class="badge badge-neutral">${esc(sk.levelLabel)}</span>` : '',
      title: esc(sk.name)
    })}
    <p class="card-text clamp-3">${esc(clip(sk.blurb, 150))}</p>
    ${stats ? `<div class="card-foot card-foot-line">
      <span class="t-meta faint">${plural(stats.units, 'lesson')}</span>
      <span class="t-meta faint">${plural(stats.situations, 'situation')}</span>
    </div>` : ''}
  </a>`
}

export function toolCard (t) {
  return `<a class="card rise" href="${href(`tool/${t.id}`)}" data-accent="${t.accent}">
    ${cardHead({
      lead: `<span class="res-ic">${I[t.icon] || I.tool}</span>`,
      eyebrow: esc(t.group),
      title: esc(t.name)
    })}
    <p class="card-text clamp-3">${esc(t.blurb)}</p>
  </a>`
}

/* stats.units / stats.words come from makeIndex().stats().byTrack.
   Manifest tracks carry `name` and `description`, not title/blurb. */

/* `weeks` is a bare number in the path data. Print it with its unit
   so a card foot never reads just "6". */
const weeksLabel = w =>
  w == null ? '' : (typeof w === 'number' ? `about ${plural(w, 'week')}` : esc(w))

export function pathCard (p, stats, started = false) {
  return `<a class="card rise" href="${href(`path/${p.id}`)}" data-accent="${p.accent}">
    ${cardHead({
      lead: `<span class="card-n">${p.number}</span>`,
      badge: started ? '<span class="badge badge-success">Started</span>' : '',
      title: esc(p.title)
    })}
    <p class="card-text clamp-3">${esc(clip(p.lede, 160))}</p>
    <div class="card-foot card-foot-line">
      <span class="t-meta faint">${weeksLabel(p.weeks)}</span>
      <span class="t-meta faint">${plural(stats.total, 'item')}</span>
    </div>
  </a>`
}

export function collectionCard (c) {
  return `<a class="card rise" href="${href(`vault/${c.id}`)}" data-accent="council">
    ${cardHead({ eyebrow: esc(c.kind || ''), title: md(c.title) })}
    ${c.banner ? `<p class="card-text clamp-2">${esc(clip(c.banner, 120))}</p>` : ''}
    <div class="card-foot">
      <span class="t-meta faint">${plural(c.entryCount || (c.entries || []).length, 'entry', 'entries')}</span>
      <span class="t-meta faint">${readTime(c.wordCount)} min</span>
    </div>
  </a>`
}

export function scenarioCard (sc, answered = false) {
  return `<a class="card rise" href="${href(`scenario/${sc.id}`)}" data-accent="${sc.accent || 'clay'}">
    ${cardHead({
      eyebrow: esc(sc.domain),
      badge: answered ? `<span class="badge badge-success" title="Answered">${I.check}</span>` : '',
      title: esc(sc.title)
    })}
    <p class="card-text clamp-3">${esc(clip(strip((sc.setup || [])[0] || ''), 150))}</p>
    <div class="card-foot">
      <span class="badge badge-neutral">${esc(sc.difficulty)}</span>
      <span class="t-meta faint">${plural((sc.options || []).length, 'option')}</span>
    </div>
  </a>`
}

export function treeCard (t, used = false) {
  return `<a class="card rise" href="${href(`tree/${t.id}`)}" data-accent="${t.accent || 'atlas'}">
    ${cardHead({
      badge: used ? `<span class="badge badge-info" title="You have used this">${I.check}</span>` : '',
      title: esc(t.title)
    })}
    <p class="card-text clamp-3">${esc(clip(t.blurb, 150))}</p>
  </a>`
}

export function trackCard (t, stats) {
  return `<a class="card card-pad-lg rise" href="${href(`track/${t.id}`)}" data-accent="${t.accent}">
    ${cardHead({
      lead: `<span class="res-ic">${trackIcon(t.icon)}</span>`,
      eyebrow: t.tagline ? esc(t.tagline) : '',
      title: md(t.name || t.title || ''),
      clamp: 0
    })}
    ${t.description || t.blurb || t.subtitle ? `<p class="card-text clamp-3">${esc(clip(t.description || t.blurb || t.subtitle, 170))}</p>` : ''}
    <div class="card-foot card-foot-line">
      <span class="t-meta faint">${plural(stats.units || 0, 'piece')}</span>
      <span class="t-meta faint">${num(stats.words || 0)} words</span>
    </div>
  </a>`
}

/* ---------- content block renderer ---------- */

/* Lesson and vault blocks: p ul ol code h3 table quote callout
   Callout carries only { text, type } — the label is inferred from a
   leading "**LABEL —**" if the corpus author wrote one. */
function calloutParts (text) {
  const m = /^\s*\*\*([^*]{2,60}?)\s*(?:—|--|-|:)\s*\*\*\s*/.exec(text) ||
            /^\s*\*\*([^*]{2,60}?)\*\*\s*(?:—|--|:)\s*/.exec(text)
  if (m) return { label: m[1].trim(), body: text.slice(m[0].length) }
  const m2 = /^\s*([A-Z][A-Z \u2014\-']{2,40})\s*(?:—|--|:)\s+/.exec(text)
  if (m2) return { label: m2[1].trim(), body: text.slice(m2[0].length) }
  return { label: 'Note', body: text }
}

const CALLOUT_KIND = [
  [/\b(warning|danger|never|do not|don't|risk|trap|mistake|careful|avoid|red flag)\b/i, 'danger'],
  [/\b(caution|watch|note that|remember|careful|limit)\b/i, 'warning'],
  [/\b(idea|principle|key|insight|rule|law|truth)\b/i, 'info'],
  [/\b(do this|try|practice|move|action|win|result)\b/i, 'success']
]

export function block (b) {
  if (!b || !b.type) return ''
  switch (b.type) {
    case 'p':
      return `<p>${md(b.text || '')}</p>`
    case 'h3':
      return `<h3>${md(b.text || '')}</h3>`
    case 'ul':
      return `<ul>${(b.items || []).map(i => `<li>${md(i)}</li>`).join('')}</ul>`
    case 'ol':
      return `<ol>${(b.items || []).map(i => `<li>${md(i)}</li>`).join('')}</ol>`
    case 'quote':
      return `<blockquote><p>${md(b.text || '')}</p></blockquote>`
    case 'code':
      return `<pre><code>${esc(b.text || '')}</code></pre>`
    case 'table': {
      const h = b.headers || []
      const rows = b.rows || []
      return `<figure><table>
        ${h.length ? `<thead><tr>${h.map(c => `<th>${md(c)}</th>`).join('')}</tr></thead>` : ''}
        <tbody>${rows.map(r => `<tr>${(r || []).map(c => `<td>${md(c)}</td>`).join('')}</tr>`).join('')}</tbody>
      </table></figure>`
    }
    case 'callout': {
      const { label, body } = calloutParts(b.text || '')
      const hay = `${label} ${body}`
      const kind = (CALLOUT_KIND.find(([re]) => re.test(hay)) || [null, ''])[1]
      return `<div class="callout${kind ? ' callout-' + kind : ''}">
        <span class="lab">${esc(label)}</span><p>${md(body)}</p></div>`
    }
    /* situation-only block types */
    case 'steps':
      return `<ol class="moves">${(b.items || []).map(i =>
        `<li><b>${md(i.move || '')}</b><span>${md(i.detail || '')}</span></li>`).join('')}</ol>`
    case 'lines':
      return `<div class="lines">${(b.items || []).map(i => `
        <div class="line">
          <div class="when">${esc(i.when || 'Say')}</div>
          <div class="say">${md(i.say || '')}</div>
          <button class="btn-icon copy" data-copy="${esc(strip(i.say || ''))}" aria-label="Copy this line" title="Copy">${I.copy}</button>
        </div>`).join('')}</div>`
    case 'bad':
      return `<ul class="marklist badlist">${(b.items || []).map(i => `<li>${md(i)}</li>`).join('')}</ul>`
    case 'good':
      return `<ul class="marklist goodlist">${(b.items || []).map(i => `<li>${md(i)}</li>`).join('')}</ul>`
    default:
      return b.text ? `<p>${md(b.text)}</p>` : ''
  }
}

export const blocks = arr => (arr || []).map(block).join('')

/* ---------- misc ---------- */

export const statRow = items => `<div class="stats">${items.map(i =>
  `<div class="stat"><b>${esc(String(i.v))}</b><span>${esc(i.l)}</span></div>`).join('')}</div>`

/* Jump links CANNOT be plain href="#id": the whole app is
   hash-routed, so setting location.hash to "#when" replaces the
   route and lands the reader on the 404 page. They are buttons that
   scroll, with data-jump carrying the target id; main.js handles the
   click. Kept as <a> for the underline affordance and keyboard
   semantics, with href omitted so nothing navigates. */
export const jumpNav = links => `<nav class="jump" aria-label="Jump to section">${links.map(l =>
  `<a role="button" tabindex="0" data-jump="${esc(l.id)}">${esc(strip(l.label))}</a>`).join('')}</nav>`

export const saveButton = (id, label = 'Save') => `
  <button class="btn btn-ghost btn-sm" data-save="${esc(id)}" aria-pressed="${isSaved(id)}">
    ${isSaved(id) ? I.starFill : I.star}<span>${isSaved(id) ? 'Saved' : esc(label)}</span>
  </button>`

export const doneButton = id => `
  <button class="btn btn-ghost btn-sm" data-done="${esc(id)}" aria-pressed="${isDone(id)}">
    ${isDone(id) ? I.circleCheck : I.circle}<span>${isDone(id) ? 'Completed' : 'Mark complete'}</span>
  </button>`

export const promise = rows => `<div class="promise">${rows.map(r =>
  `<div><div class="lab">${esc(r.lab)}</div><div class="v">${md(r.v)}</div></div>`).join('')}</div>`

export const alarm = (title, body) => `
  <div class="alarm">
    <div class="h">${I.alert}${esc(title)}</div>
    <p>${md(body)}</p>
  </div>`

export const pager = ({ prev, next }) => {
  if (!prev && !next) return ''
  return `<nav class="pager" aria-label="Previous and next">
    ${prev ? `<a href="${href(prev.to)}"><span class="dir">Previous</span><span class="ti">${md(prev.label)}</span></a>` : '<span></span>'}
    ${next ? `<a class="next" href="${href(next.to)}"><span class="dir">Next</span><span class="ti">${md(next.label)}</span></a>` : '<span></span>'}
  </nav>`
}

export const grid = (cards, cols = 3) =>
  `<div class="grid g-${cols}">${cards.join('')}</div>`

export const promptBox = (label, body) => `
  <div class="prompt">
    <div class="prompt-h"><span class="t">${esc(label)}</span>
      <button class="btn btn-ghost btn-sm" data-copy="${esc(body)}">${I.copy}Copy</button></div>
    <pre>${esc(body)}</pre>
  </div>`
