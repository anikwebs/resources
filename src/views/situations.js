/* =============================================================
   SITUATIONS INDEX — §11, §22.

   The primary entry surface. Someone arriving mid-problem should
   reach the right playbook in one or two moves, so this page
   filters live in the browser rather than round-tripping routes:
   the category chips are real links (shareable, back-button safe)
   and the text box narrows what is already on screen.
   ============================================================= */

import { esc, plural, debounce } from '../core/dom.js'
import { I } from '../core/icons.js'
import { href, go } from '../core/router.js'
import { boot } from '../core/data.js'
import { isDone, isSaved } from '../core/store.js'
import { pageHead, situationCard, emptyState, sev, grid } from './parts.js'

const SORTS = [
  { id: 'severity', label: 'Most serious first' },
  { id: 'az', label: 'A to Z' },
  { id: 'short', label: 'Shortest first' }
]

const SEV_RANK = { critical: 0, high: 1, medium: 2, low: 3 }

export default async function situations (ctx) {
  const { situations: data } = await boot()
  const all = data.situations || []
  const cats = data.categories || []

  const cat = cats.some(c => c.id === ctx.query.cat) ? ctx.query.cat : ''
  const q = (ctx.query.q || '').trim()
  const sort = SORTS.some(s => s.id === ctx.query.sort) ? ctx.query.sort : 'severity'

  const active = cat ? cats.find(c => c.id === cat) : null

  let list = cat ? all.filter(s => s.category === cat) : all.slice()
  list = sortList(list, sort)

  const counts = {}
  for (const s of all) counts[s.category] = (counts[s.category] || 0) + 1

  const doneN = all.filter(s => isDone(s.id)).length
  const savedN = all.filter(s => isSaved(s.id)).length

  const html = `
  <div class="shell">
    ${pageHead({
      eyebrow: active ? active.title : 'Situations',
      title: active ? active.title : 'Start from what is happening',
      lede: active
        ? active.blurb
        : `${all.length} playbooks across ${cats.length} categories. Each one is written as the sequence of moves — what is actually going on, what to do in order, the words to borrow, what makes it worse, and the point where it stops being something you handle alone.`,
      accent: active ? active.accent : 'clay',
      meta: `
        <span class="chip">${I.layers}${plural(all.length, 'playbook')}</span>
        ${doneN ? `<span class="chip chip-ac">${I.check}${doneN} completed</span>` : ''}
        ${savedN ? `<span class="chip">${I.bookmark}${savedN} saved</span>` : ''}`
    })}

    <div class="band-tight">
      <div class="searchbar" style="max-width:520px;margin-bottom:var(--s-5)">
        ${I.search}
        <input type="search" id="sit-q" data-sit-q value="${esc(q)}"
          placeholder="Describe it: shouting, deadline, rent, scam, panic…"
          aria-label="Filter situations" autocomplete="off">
        <button class="btn-icon" data-sit-clear aria-label="Clear filter" hidden>${I.close}</button>
      </div>

      <div class="filters" role="group" aria-label="Filter by category">
        <a class="chip${cat ? '' : ' chip-solid'}" href="${href('situations')}">All<span class="faint">&nbsp;${all.length}</span></a>
        ${cats.map(c => `
          <a class="chip${cat === c.id ? ' chip-solid' : ''}" data-accent="${c.accent}"
             href="${href('situations?cat=' + c.id)}">${esc(c.title)}<span class="faint">&nbsp;${counts[c.id] || 0}</span></a>`).join('')}
        <span class="fcount" data-sit-count>${plural(list.length, 'result')}</span>
      </div>

      <div class="row-wrap" style="gap:var(--s-2);margin-bottom:var(--s-6)">
        <span class="t-meta faint" style="align-self:center">Order</span>
        ${SORTS.map(s => `<a class="chip${sort === s.id ? ' chip-ac' : ''}"
           href="${href(`situations?${cat ? 'cat=' + cat + '&' : ''}sort=${s.id}`)}">${esc(s.label)}</a>`).join('')}
      </div>

      <div class="grid g-3" data-sit-grid>
        ${list.map(s => `<div data-sit="${esc(hay(s))}">${situationCard(s)}</div>`).join('')}
      </div>

      <div data-sit-empty hidden>
        ${emptyState(
          'Nothing matches that wording',
          'Try one word rather than a sentence — "rent", "shouting", "scam", "panic". Or use full search, which reads the whole library rather than just these titles.',
          `<a class="btn btn-soft" href="${href('search')}">${I.search}Search everything</a>`)}
      </div>

      ${active ? otherCats(cats, cat, counts) : legend()}
    </div>
  </div>`

  return {
    title: active ? active.title : 'Situations',
    html,
    accent: active ? active.accent : 'clay',
    mount: root => mountFilter(root, q)
  }
}

/* ------------------------------------------------------------- */

const hay = s =>
  `${s.title} ${s.categoryTitle || ''} ${(s.tags || []).join(' ')} ${s.lede || ''} ${s.tool || ''}`.toLowerCase()

function sortList (list, sort) {
  if (sort === 'az') return list.sort((a, b) => a.title.localeCompare(b.title))
  if (sort === 'short') return list.sort((a, b) => (a.wordCount || 0) - (b.wordCount || 0))
  return list.sort((a, b) =>
    (SEV_RANK[a.severity] ?? 9) - (SEV_RANK[b.severity] ?? 9) || a.title.localeCompare(b.title))
}

function otherCats (cats, cat, counts) {
  const rest = cats.filter(c => c.id !== cat)
  return `
  <section class="band-tight" style="margin-top:var(--s-8);border-top:1px solid var(--line);padding-top:var(--s-7)">
    <p class="rail-t">Other categories</p>
    <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-3)">
      ${rest.map(c => `<a class="chip" data-accent="${c.accent}" href="${href('situations?cat=' + c.id)}">${esc(c.title)}<span class="faint">&nbsp;${counts[c.id] || 0}</span></a>`).join('')}
    </div>
  </section>`
}

function legend () {
  return `
  <section class="band-tight" style="margin-top:var(--s-8)">
    <div class="slab" data-accent="council">
      <p class="eyebrow">How to read the severity mark</p>
      <div class="grid g-2" style="margin-top:var(--s-4)">
        <div>
          <p class="t-small"><span class="sev-critical">Critical</span> &nbsp;Someone's safety, liberty or life may be
            at stake. The playbook's first move is usually to involve someone with authority or training.</p>
          <p class="t-small" style="margin-top:var(--s-3)"><span class="sev-high">High</span> &nbsp;Significant,
            lasting consequence — money, employment, health, a relationship. Slow decisions beat fast ones.</p>
        </div>
        <div>
          <p class="t-small"><span class="sev-medium">Medium</span> &nbsp;Painful and recoverable. Most of the
            damage here comes from the reaction, not the event.</p>
          <p class="t-small" style="margin-top:var(--s-3)"><span class="sev-low">Low</span> &nbsp;Ordinary friction.
            Worth handling well because it happens often.</p>
        </div>
      </div>
      <div class="callout callout-warning" style="margin-top:var(--s-5)">
        <span class="lab">Every playbook names its limit</span>
        <p>Near the end of each one is the point at which the right move is to stop and call emergency services,
          a doctor, a lawyer, or your bank on the number printed on your card. Reaching that point is not a failure.</p>
      </div>
    </div>
  </section>`
}

/* ---- live filtering, in the browser ------------------------- */
function mountFilter (root, initial) {
  const input = root.querySelector('[data-sit-q]')
  const gridEl = root.querySelector('[data-sit-grid]')
  const empty = root.querySelector('[data-sit-empty]')
  const count = root.querySelector('[data-sit-count]')
  const clear = root.querySelector('[data-sit-clear]')
  if (!input || !gridEl) return

  const cells = [...gridEl.querySelectorAll('[data-sit]')]

  const apply = value => {
    const terms = value.toLowerCase().split(/\s+/).filter(Boolean)
    let shown = 0
    for (const cell of cells) {
      const h = cell.dataset.sit
      const ok = terms.every(t => h.includes(t))
      cell.hidden = !ok
      if (ok) shown++
    }
    if (count) count.textContent = shown === cells.length
      ? plural(cells.length, 'result')
      : `${shown} of ${cells.length}`
    if (empty) empty.hidden = shown > 0
    gridEl.hidden = shown === 0
    if (clear) clear.hidden = !value
  }

  if (initial) apply(initial)

  const run = debounce(() => apply(input.value.trim()), 130)
  input.addEventListener('input', run)
  input.addEventListener('search', run)

  if (clear) {
    clear.addEventListener('click', () => {
      input.value = ''
      apply('')
      input.focus()
    })
  }

  /* Enter hands the wording to full search, which reads everything. */
  input.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return
    const v = input.value.trim()
    if (v.length > 2) go(`search?q=${encodeURIComponent(v)}`)
  })
}
