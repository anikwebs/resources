/* =============================================================
   SEARCH — §21.
   Route: search (?q= &kind=)

   The full-page search surface. The nav overlay is for a quick
   jump; this one is for actually looking through 900+ documents
   with facets, highlighting and a real empty state.
   ============================================================= */

import { esc, plural, debounce } from '../core/dom.js'
import { I } from '../core/icons.js'
import { href, syncUrl } from '../core/router.js'
import {
  KINDS, buildIndex, indexReady, indexSize, search as runSearch,
  facets, highlight, SUGGESTIONS
} from '../core/search.js'
import { store } from '../core/store.js'
import {
  pageHead, crumbs, sectionHead, emptyState, errorState
} from './parts.js'

const KIND_ORDER = ['situation', 'lesson', 'scenario', 'tree', 'tool', 'path', 'skill', 'ai', 'entry', 'collection', 'prompt', 'page']

export default async function searchView (ctx) {
  const q = (ctx.query.q || '').trim()
  const kind = ctx.query.kind || 'all'

  let ready = false
  let failed = null
  try {
    await buildIndex()
    ready = indexReady()
  } catch (e) {
    failed = e
  }

  if (failed) {
    return {
      title: 'Search',
      accent: 'atlas',
      html: `<div class="shell band">
        ${crumbs([{ label: 'Search' }])}
        ${errorState('Search could not load its index',
          'The search file did not come back. You can still browse by situation, skill or path while this is down.')}
        <div class="row-wrap" style="gap:var(--s-3);justify-content:center;margin-top:var(--s-5)">
          <a class="btn btn-soft" href="${href('situations')}">${I.compass}Situations</a>
          <a class="btn btn-soft" href="${href('library')}">${I.book}The library</a>
        </div>
      </div>`
    }
  }

  const results = q.length >= 2 ? runSearch(q, { kind, limit: 60 }) : []
  const counts = q.length >= 2 ? facets(q) : {}

  const html = `
  <div class="shell band">
    ${crumbs([{ label: 'Search' }])}

    ${pageHead({
      eyebrow: 'Search',
      title: q ? `Results for “${esc(q)}”` : 'Search everything',
      lede: q
        ? ''
        : `Every lesson, playbook, skill, tool, scenario, decision tree, vault entry and prompt — ${ready ? plural(indexSize(), 'document') : 'the whole library'} in one index. Describe the situation in your own words; you do not need to guess our vocabulary.`,
      accent: 'atlas'
    })}

    <form class="field" style="max-width:640px" data-s-form role="search">
      <label for="s-q" class="sr">Search the whole site</label>
      <div class="searchbar">
        ${I.search}
        <input class="input" id="s-q" type="search" name="q" data-s-q autocomplete="off"
          value="${esc(q)}" placeholder="my boss shouted at me, two job offers, say no…">
        ${q ? `<a class="btn btn-icon btn-ghost" href="${href('search')}" aria-label="Clear the search">${I.close}</a>` : ''}
      </div>
      <span class="hint">Results appear as you type. Whole phrases work better than single words.</span>
    </form>

    <div data-s-body>${bodyHtml(q, kind, results, counts)}</div>
  </div>`

  return {
    title: q ? `“${q}” · Search` : 'Search',
    html,
    accent: 'atlas',
    mount: root => mountSearch(root, kind)
  }
}

function bodyHtml (q, kind, results, counts) {
  if (q.length < 2) return suggestionsHtml()

  const chips = ['all', ...KIND_ORDER.filter(k => counts[k])]

  return `
  <div class="filters" role="group" aria-label="Filter results by kind" style="margin-top:var(--s-5)">
    ${chips.map(k => {
      const meta = k === 'all' ? { label: 'Everything', icon: I.layers } : (KINDS[k] || { label: k })
      const n = k === 'all' ? (counts.all || 0) : (counts[k] || 0)
      const on = kind === k
      return `<a class="chip ${on ? 'chip-solid' : ''}"
        href="${href(`search?q=${encodeURIComponent(q)}${k === 'all' ? '' : `&kind=${k}`}`)}">
        ${k === 'all' ? I.layers : (I[meta.icon] || I.circle)}${esc(meta.label)}
        <span class="fcount">${n}</span></a>`
    }).join('')}
  </div>

  <p class="t-meta faint" style="margin-top:var(--s-4)">
    ${results.length ? `${plural(results.length, 'result')}${counts.all > results.length ? ` of ${counts.all}` : ''}` : 'No results'}
  </p>

  ${results.length ? groupedResults(results, q) : `
    ${emptyState(`Nothing matches “${q}”`,
      'Try describing what is happening instead of naming a topic — “my landlord wants me out” finds more than “tenancy”. Single unusual words are the hardest thing for any search to place.',
      `<div class="row-wrap" style="gap:var(--s-3);justify-content:center">
        <a class="btn btn-soft" href="${href('situations')}">${I.compass}Browse all situations</a>
        <a class="btn btn-ghost" href="${href('skills')}">${I.target}Browse by skill</a>
      </div>`)}
    ${suggestionsHtml('Or try one of these')}`}`
}

function groupedResults (results, q) {
  const byKind = new Map()
  for (const d of results) {
    if (!byKind.has(d.kind)) byKind.set(d.kind, [])
    byKind.get(d.kind).push(d)
  }
  const order = [...byKind.keys()].sort((a, b) => {
    const ai = KIND_ORDER.indexOf(a); const bi = KIND_ORDER.indexOf(b)
    return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi)
  })

  return `<div style="margin-top:var(--s-5)">
    ${order.map(k => {
      const meta = KINDS[k] || { label: k }
      const items = byKind.get(k)
      return `
      <section class="ovl-group">
        <div class="rule-head">
          <h2 class="t-subtitle" style="margin:0">${esc(meta.label)}</h2>
          <span class="t-meta faint">${items.length}</span>
        </div>
        <div class="ovl-res" style="margin-top:var(--s-3)">
          ${items.map(d => resultRow(d, q)).join('')}
        </div>
      </section>`
    }).join('')}
  </div>`
}

function resultRow (d, q) {
  const meta = KINDS[d.kind] || {}
  const sub = d.sub || d.group || ''
  return `
  <a class="res" href="${href(d.route)}">
    <span class="res-ic">${I[meta.icon] || I.circle}</span>
    <span class="res-b">
      <span class="res-t">${highlight(esc(d.title), q)}</span>
      ${sub ? `<span class="res-s">${highlight(esc(sub), q)}</span>` : ''}
    </span>
    <span class="res-k">${esc(meta.label || d.kind)}</span>
  </a>`
}

function suggestionsHtml (title = 'People arrive looking for these') {
  const recent = store.recent.slice(0, 5)
  return `
  <section class="sec">
    ${sectionHead(title)}
    <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-4)">
      ${SUGGESTIONS.map(s => `<a class="chip" href="${href(`search?q=${encodeURIComponent(s)}`)}">${I.search}${esc(s)}</a>`).join('')}
    </div>

    ${recent.length ? `
      <div style="margin-top:var(--s-7)">
        ${sectionHead('Or pick up something you had open')}
        <div class="stack" style="gap:var(--s-2);margin-top:var(--s-4)">
          ${recent.map(r => `<a class="rowitem" href="${href(r.route)}">
            <div style="min-width:0"><strong>${esc(r.title)}</strong>
              <p class="t-small muted" style="margin:2px 0 0">${esc(r.kind || '')}</p></div>
            <span class="t-meta faint">${I.arrow}</span></a>`).join('')}
        </div>
      </div>` : ''}
  </section>`
}

function mountSearch (root, kind) {
  const input = root.querySelector('[data-s-q]')
  const body = root.querySelector('[data-s-body]')
  const form = root.querySelector('[data-s-form]')
  if (!input || !body) return

  /* Live results are rendered in place. The URL is only rewritten on
     submit or on a pause, so every result set stays shareable without
     flooding the history with one entry per keystroke. */
  const render = () => {
    const q = input.value.trim()
    const results = q.length >= 2 ? runSearch(q, { kind, limit: 60 }) : []
    const counts = q.length >= 2 ? facets(q) : {}
    body.innerHTML = bodyHtml(q, kind, results, counts)
  }

  const sync = () => {
    const q = input.value.trim()
    const to = q ? `search?q=${encodeURIComponent(q)}${kind !== 'all' ? `&kind=${kind}` : ''}` : 'search'
    /* syncUrl rewrites the address bar without re-running the route,
       so the input element survives and focus is never lost. */
    syncUrl(to)
  }

  const onInput = debounce(() => { render(); sync() }, 180)
  const onSubmit = e => { e.preventDefault(); sync() }

  input.addEventListener('input', onInput)
  if (form) form.addEventListener('submit', onSubmit)

  /* Focus the box on arrival, but never steal focus mid-scroll on
     touch devices where it would raise the keyboard unexpectedly. */
  if (!input.value && window.matchMedia('(min-width: 900px)').matches) {
    requestAnimationFrame(() => input.focus())
  }

  return () => {
    input.removeEventListener('input', onInput)
    if (form) form.removeEventListener('submit', onSubmit)
  }
}
