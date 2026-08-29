/* =============================================================
   THE LIBRARY — the four-track corpus browser.
   Routes: library, track/:id

   239 pieces across four tracks and 32 levels. This is the deep
   end of the product, and the design job is honest scale: show
   how much there is without making it feel like a wall.
   ============================================================= */

import { esc, md, num, plural, debounce } from '../core/dom.js'
import { I, trackIcon } from '../core/icons.js'
import { href, go } from '../core/router.js'
import { boot, makeIndex } from '../core/data.js'
import { doneCount, isDone, lastRead } from '../core/store.js'
import { pathsContaining } from '../data/paths.js'
import {
  pageHead, crumbs, sectionHead, trackCard, unitCard, collectionCard,
  grid, statRow, jumpNav, errorState, emptyState, saveButton
} from './parts.js'

/* =============================================================
   LIBRARY INDEX — route: library
   ============================================================= */
export default async function library () {
  let ix
  try {
    const { manifest } = await boot()
    ix = makeIndex(manifest)
  } catch (e) {
    return {
      title: 'The library',
      html: `<div class="shell band">${errorState('The library could not load',
        'The content index did not come back. Nothing you have saved is affected.')}</div>`,
      error: e
    }
  }

  const stats = ix.stats()
  const tracks = ix.tracks()
  const collections = ix.collections()
  const groups = ix.vaultGroups()
  const last = lastRead()

  const html = `
  <div class="shell band">
    ${crumbs([{ label: 'The library' }])}

    ${pageHead({
      eyebrow: 'The library',
      title: 'Everything, arranged so you can find your way in',
      lede: `Four tracks, ${num(stats.totalUnits)} pieces, ${num(stats.totalWords)} words, and ${num(stats.totalCollections)} reference collections. It is deliberately more than you can read — the point is that whatever you need is in here, and there is always a defined next thing rather than a blank choice.`,
      accent: 'atlas',
      actions: `
        ${last ? `<a class="btn btn-primary btn-lg" href="${href(last.route)}">${I.book}Continue where you stopped</a>` : `<a class="btn btn-primary btn-lg" href="${href('paths')}">${I.route}Follow a path instead</a>`}
        <a class="btn btn-soft btn-lg" href="${href('search')}">${I.search}Search it all</a>
        ${saveButton('page:library', 'Save')}`
    })}

    ${statRow([
      { v: num(stats.totalUnits), l: 'pieces to read' },
      { v: num(stats.totalCollections), l: 'reference collections' },
      { v: `${stats.estHours}h`, l: 'if you read all of it' },
      { v: num(stats.estPages), l: 'printed pages' }
    ])}

    <aside class="slab" style="margin:var(--s-7) 0" data-accent="atlas">
      <p class="eyebrow">How to use something this size</p>
      <p class="t-lede">Do not start at the beginning. Either take a
      <a href="${href('paths')}">path</a>, which orders this for you, or arrive from a
      <a href="${href('situations')}">situation</a> you are actually in and read outwards
      from there. Reading a library front to back is how people spend six months and
      change nothing.</p>
    </aside>

    ${jumpNav([
      { id: 'tracks', label: 'The four tracks' },
      { id: 'levels', label: 'Level by level' },
      { id: 'vault', label: 'Reference vault' }
    ])}

    <section class="sec" id="tracks">
      <div class="sec-head"><h2>The four tracks</h2></div>
      <p class="t-lede" style="max-width:70ch">Each one has a different job. They are not
      sequential and you are not behind if you skip one.</p>
      <div style="margin-top:var(--s-5)">
        ${grid(tracks.map(t => trackCard(t, {
          units: (ix.ofTrack(t.id) || []).length,
          words: (stats.byTrack[t.id] || {}).words || 0
        })), 2)}
      </div>
    </section>

    <section class="sec" id="levels">
      <div class="sec-head"><h2>Level by level</h2></div>
      <p class="t-lede" style="max-width:70ch">Every level in every track, with what it
      promises and how much of it you have finished.</p>
      <div class="stack" style="gap:var(--s-7);margin-top:var(--s-6)">
        ${tracks.map(t => trackLevels(t, ix)).join('')}
      </div>
    </section>

    <section class="sec" id="vault">
      ${sectionHead('The reference vault', `<a class="btn btn-ghost btn-sm" href="${href('vault')}">All ${collections.length}${I.arrow}</a>`)}
      <p class="t-lede" style="max-width:70ch">${num(stats.totalEntries)} entries across
      ${collections.length} collections. This is not reading material — it is what you open
      when you need one specific thing.</p>
      <div class="row-wrap" style="gap:var(--s-2);margin:var(--s-5) 0">
        ${groups.map(g => `<a class="chip" href="${href(`vault?kind=${encodeURIComponent(g.kind)}`)}">${esc(g.title)}
          <span class="fcount">${ix.collectionsOfKind(g.kind).length}</span></a>`).join('')}
      </div>
      ${grid(collections.slice(0, 6).map(collectionCard), 3)}
    </section>
  </div>`

  return { title: 'The library', html, accent: 'atlas' }
}

/* One track, with all its levels as a stack of bands. */
function trackLevels (t, ix) {
  const gs = ix.groups(t.id) || []
  const all = ix.ofTrack(t.id) || []
  const done = doneCount(all.map(u => u.id))
  const pct = all.length ? Math.round((done / all.length) * 100) : 0

  return `
  <section data-accent="${t.accent}">
    <div class="rule-head">
      <div class="row" style="gap:var(--s-3);align-items:center;min-width:0">
        <span class="res-ic">${trackIcon(t.icon)}</span>
        <div style="min-width:0">
          <h3 class="t-subtitle" style="margin:0">${esc(t.name)}</h3>
          <p class="t-meta faint" style="margin:2px 0 0">${plural(gs.length, t.groupName ? t.groupName.toLowerCase() : 'level')} · ${plural(all.length, t.unitName || 'piece', t.unitPlural)}</p>
        </div>
      </div>
      <a class="btn btn-ghost btn-sm" href="${href(`track/${t.id}`)}">Open${I.arrow}</a>
    </div>

    ${all.length ? `<div class="meter" style="max-width:320px;margin:var(--s-3) 0 var(--s-5)">
      <span style="width:${pct}%"></span></div>
      <p class="t-meta faint" style="margin-top:-10px;margin-bottom:var(--s-5)">${done} of ${all.length} finished</p>` : ''}

    <div class="stack" style="gap:var(--s-3)">
      ${gs.map(g => {
        const gu = ix.groupUnits(t.id, g.id) || []
        const gd = doneCount(gu.map(u => u.id))
        return `
        <a class="rowitem" href="${href(`track/${t.id}#g-${esc(g.id)}`)}">
          <div style="min-width:0">
            <p class="eyebrow">${esc(t.groupName || 'Level')} ${g.roman || g.number}</p>
            <strong>${md(g.title)}</strong>
            ${g.promise ? `<p class="t-small muted" style="margin:2px 0 0">${md(g.promise)}</p>` : ''}
          </div>
          <span class="t-meta faint">${gd}/${gu.length}</span>
        </a>`
      }).join('')}
    </div>
  </section>`
}

/* =============================================================
   ONE TRACK — route: track/:id
   ============================================================= */
export async function trackView (ctx) {
  let ix
  try {
    const { manifest } = await boot()
    ix = makeIndex(manifest)
  } catch (e) {
    return {
      title: 'Track',
      html: `<div class="shell band">${errorState('This track could not load',
        'The content index did not come back.')}</div>`,
      error: e
    }
  }

  const t = ix.track(ctx.params.id)
  if (!t) return { title: 'Not found', html: null, notFound: true }

  const gs = ix.groups(t.id) || []
  const all = ix.ofTrack(t.id) || []
  const done = doneCount(all.map(u => u.id))
  const pct = all.length ? Math.round((done / all.length) * 100) : 0
  const stats = ix.stats()
  const tstats = stats.byTrack[t.id] || {}
  const nextUnit = all.find(u => !isDone(u.id)) || null
  const others = ix.tracks().filter(x => x.id !== t.id)

  const html = `
  <div class="shell band">
    ${crumbs([{ label: 'The library', to: 'library' }, { label: t.name }])}

    ${pageHead({
      eyebrow: t.tagline || 'Track',
      title: t.name,
      lede: t.description,
      accent: t.accent,
      actions: `
        ${nextUnit ? `<a class="btn btn-primary btn-lg" href="${href(`read/${t.id}/${nextUnit.id}`)}">${I.book}${done ? 'Continue' : 'Start'} — ${esc(nextUnit.title)}</a>` : `<span class="badge badge-success">All ${all.length} finished</span>`}
        ${saveButton(`track:${t.id}`, 'Save this track')}`
    })}

    ${statRow([
      { v: plural(all.length, t.unitName || 'piece', t.unitPlural), l: 'in total' },
      { v: `${done}/${all.length}`, l: 'finished' },
      { v: num(tstats.words || 0), l: 'words' },
      { v: plural(gs.length, t.groupName ? t.groupName.toLowerCase() : 'level'), l: 'in sequence' }
    ])}

    ${all.length ? `<div class="meter meter-lg" style="max-width:460px;margin:var(--s-5) 0">
      <span style="width:${pct}%"></span></div>` : ''}

    <div class="field" style="max-width:520px;margin:var(--s-5) 0">
      <label for="tr-q">Find something in this track</label>
      <div class="searchbar">${I.search}
        <input class="input" id="tr-q" type="search" data-tr-q autocomplete="off"
          placeholder="${esc(t.unitName || 'piece')} title, skill, tool…"></div>
      <span class="hint">Filters the list below. Press Enter to search the whole site.</span>
    </div>

    <p class="t-meta faint" data-tr-count>${plural(all.length, t.unitName || 'piece', t.unitPlural)}</p>

    ${jumpNav(gs.map(g => ({ id: `g-${g.id}`, label: `${g.roman || g.number}. ${g.title}` })))}

    <div data-tr-list class="stack" style="gap:var(--s-8);margin-top:var(--s-6)">
      ${gs.map(g => groupBand(g, t, ix)).join('')}
    </div>

    <div data-tr-empty hidden>
      ${emptyState('Nothing in this track matches that',
        'Try a shorter word, or search everything — it may be in another track or in a playbook.',
        `<a class="btn btn-soft" href="${href('search')}">${I.search}Search everything</a>`)}
    </div>

    <section class="sec">
      ${sectionHead('The other tracks')}
      <div style="margin-top:var(--s-4)">
        ${grid(others.map(x => trackCard(x, {
          units: (ix.ofTrack(x.id) || []).length,
          words: (stats.byTrack[x.id] || {}).words || 0
        })), 3)}
      </div>
    </section>
  </div>`

  return {
    title: t.name,
    html,
    accent: t.accent,
    mount: mountTrackFilter,
    recent: { id: `track:${t.id}`, kind: 'page', title: t.name, route: `track/${t.id}` }
  }
}

function groupBand (g, t, ix) {
  const units = ix.groupUnits(t.id, g.id) || []
  const done = doneCount(units.map(u => u.id))
  const pct = units.length ? Math.round((done / units.length) * 100) : 0
  const paths = units.length ? pathsContaining(units[0].id) : []

  return `
  <section class="pb" id="g-${esc(g.id)}" data-accent="${t.accent}">
    <div class="pb-head">
      <span class="pb-n">${esc(String(g.roman || g.number))}</span>
      <h2>${md(g.title)}</h2>
      <span class="t-meta faint" style="margin-left:auto">${done}/${units.length}</span>
    </div>

    ${g.tagline ? `<p class="t-lede" style="max-width:72ch">${md(g.tagline)}</p>` : ''}
    ${g.description ? `<p class="t-small muted" style="max-width:72ch;margin-top:var(--s-2)">${md(g.description)}</p>` : ''}

    <div class="promise" style="margin:var(--s-5) 0">
      ${g.promise ? `<div><div class="lab">What you can say afterwards</div><div class="v">${md(g.promise)}</div></div>` : ''}
      ${g.boss ? `<div><div class="lab">The test at the end</div><div class="v">${md(g.boss)}</div></div>` : ''}
      ${g.wordCount ? `<div><div class="lab">Length</div><div class="v">${num(g.wordCount)} words · about ${Math.max(1, Math.round(g.wordCount / 200 / 60))}h</div></div>` : ''}
    </div>

    ${units.length ? `<div class="meter" style="max-width:280px;margin-bottom:var(--s-5)">
      <span style="width:${pct}%"></span></div>` : ''}

    <div class="grid g-3">
      ${units.map((u, i) => `<div data-tr-item data-hay="${esc(hayOf(u, t))}">${unitCard(u, { n: i + 1 })}</div>`).join('')}
    </div>

    ${paths.length ? `<p class="t-meta faint" style="margin-top:var(--s-4)">
      Also part of ${paths.slice(0, 2).map(p => `<a href="${href(`path/${p.id}`)}">${esc(p.title)}</a>`).join(' and ')}.</p>` : ''}
  </section>`
}

const hayOf = (u, t) =>
  `${u.title} ${u.subtitle || ''} ${u.skill || ''} ${u.tool || ''} ${u.result || ''} ${u.oneline || ''} ${t.name}`.toLowerCase()

function mountTrackFilter (root) {
  const input = root.querySelector('[data-tr-q]')
  if (!input) return
  const items = [...root.querySelectorAll('[data-tr-item]')]
  const bands = [...root.querySelectorAll('.pb[id^="g-"]')]
  const list = root.querySelector('[data-tr-list]')
  const empty = root.querySelector('[data-tr-empty]')
  const count = root.querySelector('[data-tr-count]')
  const base = count ? count.textContent : ''

  const apply = () => {
    const q = input.value.trim().toLowerCase()
    let shown = 0
    for (const el of items) {
      const hit = !q || el.dataset.hay.includes(q)
      el.hidden = !hit
      if (hit) shown++
    }
    for (const b of bands) {
      b.hidden = ![...b.querySelectorAll('[data-tr-item]')].some(i => !i.hidden)
    }
    if (list) list.hidden = shown === 0
    if (empty) empty.hidden = shown !== 0
    if (count) count.textContent = q ? `${shown} of ${items.length} match “${input.value.trim()}”` : base
  }

  const onInput = debounce(apply, 130)
  const onKey = e => {
    if (e.key === 'Enter' && input.value.trim().length > 2) {
      go(`search?q=${encodeURIComponent(input.value.trim())}`)
    }
  }
  input.addEventListener('input', onInput)
  input.addEventListener('keydown', onKey)
  return () => {
    input.removeEventListener('input', onInput)
    input.removeEventListener('keydown', onKey)
  }
}
