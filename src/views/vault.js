/* =============================================================
   THE REFERENCE VAULT.
   Routes: vault, vault/:id, vault/:coll/:entry

   36 collections, 573 entries. Unlike the tracks, nothing here is
   meant to be read through. It is what you open when you need one
   specific thing — a playbook, a prompt set, a concept definition.
   ============================================================= */

import { esc, md, num, plural, debounce, readTime } from '../core/dom.js'
import { I } from '../core/icons.js'
import { href, go } from '../core/router.js'
import { boot, makeIndex, getCollection } from '../core/data.js'
import { getNote } from '../core/store.js'
import {
  pageHead, crumbs, sectionHead, collectionCard, blocks, grid, statRow,
  errorState, emptyState, saveButton, doneButton, pager
} from './parts.js'

const failed = (title, body) => ({
  title,
  html: `<div class="shell band">${errorState(title, body)}</div>`
})

/* =============================================================
   VAULT INDEX — route: vault   (?kind=)
   ============================================================= */
export default async function vaultIndex (ctx) {
  let ix
  try {
    const { manifest } = await boot()
    ix = makeIndex(manifest)
  } catch (e) {
    return { ...failed('The vault could not load', 'The content index did not come back. Nothing saved is affected.'), error: e }
  }

  const kind = ctx.query.kind || ''
  const groups = ix.vaultGroups()
  const active = groups.find(g => g.kind === kind)
  const list = active ? ix.collectionsOfKind(active.kind) : ix.collections()
  const stats = ix.stats()

  const html = `
  <div class="shell band">
    ${crumbs([{ label: 'The library', to: 'library' }, { label: 'Reference vault' }])}

    ${pageHead({
      eyebrow: active ? 'Reference vault' : 'The library',
      title: active ? active.title : 'The reference vault',
      lede: active
        ? active.blurb
        : `${num(stats.totalEntries)} entries in ${num(stats.totalCollections)} collections. Playbooks, prompt libraries, scenario decks, situation cards, thinkers worth reading and every named concept defined. Not reading material — reference.`,
      accent: 'council',
      meta: [plural(list.length, 'collection')],
      actions: saveButton(active ? `vault-kind:${active.kind}` : 'page:vault', 'Save')
    })}

    <div class="filters" role="group" aria-label="Filter by kind">
      <a class="chip ${!active ? 'chip-solid' : ''}" href="${href('vault')}">Everything
        <span class="fcount">${ix.collections().length}</span></a>
      ${groups.map(g => `
        <a class="chip ${active && active.kind === g.kind ? 'chip-solid' : ''}"
           href="${href(`vault?kind=${encodeURIComponent(g.kind)}`)}">${esc(g.title)}
          <span class="fcount">${ix.collectionsOfKind(g.kind).length}</span></a>`).join('')}
    </div>

    <div class="field" style="max-width:520px;margin:var(--s-5) 0">
      <label for="v-q">Find a collection</label>
      <div class="searchbar">${I.search}
        <input class="input" id="v-q" type="search" data-v-q autocomplete="off"
          placeholder="negotiation, prompts, glossary…"></div>
      <span class="hint">Press Enter to search inside every entry instead.</span>
    </div>

    <p class="t-meta faint" data-v-count>${plural(list.length, 'collection')}</p>

    <div class="grid g-3" data-v-grid style="margin-top:var(--s-4)">
      ${list.map(c => `<div data-v-item data-hay="${esc(`${c.title} ${c.kind} ${c.banner || ''} ${(c.entries || []).map(e => e.title).join(' ')}`.toLowerCase())}">${collectionCard(c)}</div>`).join('')}
    </div>

    <div data-v-empty hidden>
      ${emptyState('No collection matches that',
        'Entry titles are searchable from the main search, which looks inside the collections rather than at their names.',
        `<a class="btn btn-soft" href="${href('search')}">${I.search}Search every entry</a>`)}
    </div>

    ${active ? `
      <section class="sec">
        ${sectionHead('Other kinds')}
        <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-4)">
          ${groups.filter(g => g.kind !== active.kind).map(g =>
            `<a class="chip" href="${href(`vault?kind=${encodeURIComponent(g.kind)}`)}">${esc(g.title)}</a>`).join('')}
        </div>
      </section>` : ''}
  </div>`

  return {
    title: active ? `${active.title} · Vault` : 'The reference vault',
    html,
    accent: 'council',
    mount: mountVaultFilter
  }
}

function mountVaultFilter (root) {
  const input = root.querySelector('[data-v-q]')
  if (!input) return
  const items = [...root.querySelectorAll('[data-v-item]')]
  const gridEl = root.querySelector('[data-v-grid]')
  const empty = root.querySelector('[data-v-empty]')
  const count = root.querySelector('[data-v-count]')

  const apply = () => {
    const q = input.value.trim().toLowerCase()
    let shown = 0
    for (const el of items) {
      const hit = !q || el.dataset.hay.includes(q)
      el.hidden = !hit
      if (hit) shown++
    }
    if (gridEl) gridEl.hidden = shown === 0
    if (empty) empty.hidden = shown !== 0
    if (count) count.textContent = q
      ? `${shown} of ${items.length} match “${input.value.trim()}”`
      : plural(items.length, 'collection')
  }

  const onInput = debounce(apply, 130)
  const onKey = e => {
    if (e.key === 'Enter' && input.value.trim().length > 2) go(`search?q=${encodeURIComponent(input.value.trim())}`)
  }
  input.addEventListener('input', onInput)
  input.addEventListener('keydown', onKey)
  return () => {
    input.removeEventListener('input', onInput)
    input.removeEventListener('keydown', onKey)
  }
}

/* =============================================================
   ONE COLLECTION — route: vault/:id
   ============================================================= */
export async function collectionView (ctx) {
  const id = ctx.params.id
  let c, ix
  try {
    const [{ manifest }, coll] = await Promise.all([boot(), getCollection(id)])
    ix = makeIndex(manifest)
    c = coll
  } catch (e) {
    if (e && e.status === 404) return { title: 'Not found', html: null, notFound: true }
    return { ...failed('This collection could not load', 'The file did not come back. Try again — nothing saved is affected.'), error: e }
  }
  if (!c) return { title: 'Not found', html: null, notFound: true }

  const meta = ix.collection(id) || {}
  const group = ix.vaultGroups().find(g => g.kind === (c.kind || meta.kind))
  const entries = c.entries || []
  const siblings = ix.collectionsOfKind(c.kind || meta.kind).filter(x => x.id !== id).slice(0, 3)

  /* Entries are grouped by their `group` field where the corpus set
     one; otherwise it is one flat list. */
  const byGroup = new Map()
  for (const e of entries) {
    const g = (meta.entries || []).find(x => x.id === e.id)
    const k = (g && g.group) || ''
    if (!byGroup.has(k)) byGroup.set(k, [])
    byGroup.get(k).push(e)
  }
  const grouped = byGroup.size > 1 || (byGroup.size === 1 && [...byGroup.keys()][0])

  const html = `
  <div class="shell band">
    ${crumbs([
      { label: 'The library', to: 'library' },
      { label: 'Vault', to: 'vault' },
      ...(group ? [{ label: group.title, to: `vault?kind=${encodeURIComponent(group.kind)}` }] : []),
      { label: c.title }
    ])}

    ${pageHead({
      eyebrow: group ? group.title : (c.kind || 'Collection'),
      title: c.title,
      lede: c.banner || meta.banner || '',
      accent: 'council',
      meta: [plural(entries.length, 'entry', 'entries'), `${num(c.wordCount || meta.wordCount || 0)} words`],
      actions: `
        ${entries.length ? `<a class="btn btn-primary" href="${href(`vault/${id}/${entries[0].id}`)}">${I.book}Open the first entry</a>` : ''}
        ${saveButton(`vault:${id}`, 'Save this collection')}`
    })}

    ${(c.lead || []).length ? `<div class="prose" style="margin:var(--s-6) 0">${blocks(c.lead)}</div>` : ''}

    ${statRow([
      { v: entries.length, l: 'entries' },
      { v: num(c.wordCount || 0), l: 'words' },
      { v: `${readTime(c.wordCount || 0)} min`, l: 'to read all of it' }
    ])}

    <div class="field" style="max-width:520px;margin:var(--s-6) 0">
      <label for="c-q">Find an entry</label>
      <div class="searchbar">${I.search}
        <input class="input" id="c-q" type="search" data-c-q autocomplete="off" placeholder="Entry title or a phrase inside it…"></div>
      <span class="hint">Searches the titles and the text of every entry in this collection.</span>
    </div>

    <p class="t-meta faint" data-c-count>${plural(entries.length, 'entry', 'entries')}</p>

    <div data-c-list class="stack" style="gap:var(--s-6);margin-top:var(--s-5)">
      ${grouped
        ? [...byGroup.entries()].map(([g, list]) => `
            <section data-c-group>
              ${g ? `<div class="rule-head"><h2 class="t-subtitle" style="margin:0">${md(g)}</h2>
                <span class="t-meta faint">${plural(list.length, 'entry', 'entries')}</span></div>` : ''}
              <div class="stack" style="gap:var(--s-2);margin-top:var(--s-3)">
                ${list.map(e => entryRow(e, id)).join('')}
              </div>
            </section>`).join('')
        : `<div class="stack" style="gap:var(--s-2)">${entries.map(e => entryRow(e, id)).join('')}</div>`}
    </div>

    <div data-c-empty hidden>
      ${emptyState('No entry here matches that', 'Try fewer words, or search the whole site.',
        `<a class="btn btn-soft" href="${href('search')}">${I.search}Search everything</a>`)}
    </div>

    ${siblings.length ? `
      <section class="sec">
        ${sectionHead(group ? `More ${group.title.toLowerCase()}` : 'Related collections',
          `<a class="btn btn-ghost btn-sm" href="${href('vault')}">All${I.arrow}</a>`)}
        <div style="margin-top:var(--s-4)">${grid(siblings.map(collectionCard), 3)}</div>
      </section>` : ''}
  </div>`

  return {
    title: c.title,
    html,
    accent: 'council',
    mount: mountCollectionFilter,
    recent: { id: `vault:${id}`, kind: 'collection', title: c.title, route: `vault/${id}` }
  }
}

function entryRow (e, collId) {
  const text = (e.blocks || []).map(b => b.text || '').join(' ')
  return `
  <a class="rowitem" data-c-item data-hay="${esc(`${e.title} ${text}`.slice(0, 900).toLowerCase())}"
     href="${href(`vault/${collId}/${e.id}`)}">
    <div style="min-width:0">
      <strong>${md(e.title)}</strong>
      ${text ? `<p class="t-small muted clamp-2" style="margin:2px 0 0">${esc(text.slice(0, 180))}</p>` : ''}
    </div>
    <span class="t-meta faint">${readTime(e.wordCount || 0)} min</span>
  </a>`
}

function mountCollectionFilter (root) {
  const input = root.querySelector('[data-c-q]')
  if (!input) return
  const items = [...root.querySelectorAll('[data-c-item]')]
  const groups = [...root.querySelectorAll('[data-c-group]')]
  const list = root.querySelector('[data-c-list]')
  const empty = root.querySelector('[data-c-empty]')
  const count = root.querySelector('[data-c-count]')

  const apply = () => {
    const q = input.value.trim().toLowerCase()
    let shown = 0
    for (const el of items) {
      const hit = !q || el.dataset.hay.includes(q)
      el.hidden = !hit
      if (hit) shown++
    }
    for (const g of groups) g.hidden = ![...g.querySelectorAll('[data-c-item]')].some(i => !i.hidden)
    if (list) list.hidden = shown === 0
    if (empty) empty.hidden = shown !== 0
    if (count) count.textContent = q
      ? `${shown} of ${items.length} match “${input.value.trim()}”`
      : plural(items.length, 'entry', 'entries')
  }

  const onInput = debounce(apply, 130)
  const onKey = e => {
    if (e.key === 'Enter' && input.value.trim().length > 2) go(`search?q=${encodeURIComponent(input.value.trim())}`)
  }
  input.addEventListener('input', onInput)
  input.addEventListener('keydown', onKey)
  return () => {
    input.removeEventListener('input', onInput)
    input.removeEventListener('keydown', onKey)
  }
}

/* =============================================================
   ONE ENTRY — route: vault/:coll/:entry
   ============================================================= */
export async function entryView (ctx) {
  const collId = ctx.params.coll
  const entryId = ctx.params.entry
  let c
  try {
    c = await getCollection(collId)
  } catch (e) {
    if (e && e.status === 404) return { title: 'Not found', html: null, notFound: true }
    return { ...failed('This entry could not load', 'The collection file did not come back.'), error: e }
  }
  if (!c) return { title: 'Not found', html: null, notFound: true }

  const entries = c.entries || []
  const ix = entries.findIndex(e => e.id === entryId)
  if (ix < 0) return { title: 'Not found', html: null, notFound: true }

  const e = entries[ix]
  const prev = entries[ix - 1] || null
  const next = entries[ix + 1] || null
  const noteKey = `entry:${collId}#${entryId}`
  const doneId = `entry:${collId}#${entryId}`

  const html = `
  <div class="shell-narrow band">
    ${crumbs([
      { label: 'Vault', to: 'vault' },
      { label: c.title, to: `vault/${collId}` },
      { label: e.title }
    ])}

    <header class="doc-head">
      <p class="kicker">${md(c.title)}</p>
      <h1>${md(e.title)}</h1>
      <div class="doc-facts">
        <span>${readTime(e.wordCount || 0)} min read</span>
        <span>${num(e.wordCount || 0)} words</span>
        <span>Entry ${ix + 1} of ${entries.length}</span>
      </div>
      <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-5)">
        ${saveButton(`entry:${collId}#${entryId}`)}
        ${doneButton(doneId)}
      </div>
    </header>

    <div class="prose">${(e.blocks || []).length ? blocks(e.blocks) : `
      <p class="muted">This entry has no body text in the corpus. That is a gap in the
      source material rather than a loading error.</p>`}</div>

    <section class="sec">
      <div class="field">
        <label for="en-note">Your note on this</label>
        <textarea class="textarea" id="en-note" data-note="${esc(noteKey)}" rows="3"
          placeholder="What you would actually do with this.">${esc(getNote(noteKey))}</textarea>
        <span class="hint">Saves as you type. Appears on your progress page.</span>
      </div>
    </section>

    ${pager({
      prev: prev ? { to: `vault/${collId}/${prev.id}`, label: prev.title } : null,
      next: next ? { to: `vault/${collId}/${next.id}`, label: next.title } : null
    })}

    <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-6)">
      <a class="btn btn-soft" href="${href(`vault/${collId}`)}">${I.back}All ${entries.length} entries in ${esc(c.title)}</a>
      <a class="btn btn-ghost" href="${href('vault')}">${I.vault}The whole vault</a>
    </div>
  </div>`

  return {
    title: e.title,
    html,
    accent: 'council',
    recent: { id: `entry:${collId}#${entryId}`, kind: 'entry', title: e.title, route: `vault/${collId}/${entryId}` }
  }
}
