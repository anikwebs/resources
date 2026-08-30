/**
 * add-situations.mjs — expand the situation corpus.
 *
 * Reads the authored parts in scripts/situations-new/, converts each
 * one into the six-section corpus shape used by every existing
 * situation file, writes public/content/situation/<id>.json, and
 * appends the index rows to public/content/situations.json.
 *
 * Idempotent: re-running replaces the files and rewrites the index
 * rows rather than duplicating them.
 *
 *   node scripts/add-situations.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const content = resolve(root, 'public/content')
const newDir = resolve(root, 'scripts/situations-new')

/* ---------- load authored parts ---------- */
const parts = readdirSync(newDir).filter(f => f.endsWith('.mjs')).sort()
const authored = []
for (const p of parts) {
  const mod = await import(pathToFileURL(resolve(newDir, p)).href)
  authored.push(...mod.default)
}
console.log(`authored: ${authored.length} situations from ${parts.length} parts`)

/* ---------- section titles, matching the existing corpus exactly ---------- */
const SECTION_TITLES = [
  'What is happening',
  'What is actually going on',
  'Do this, in this order',
  'Words you can borrow',
  'What makes it worse',
  'Once the pressure drops'
]

const words = s => String(s).trim().split(/\s+/).filter(Boolean).length

function build (a, categoryTitle) {
  const sections = [
    { n: '1', title: SECTION_TITLES[0], blocks: [{ type: 'p', text: a.what }] },
    { n: '2', title: SECTION_TITLES[1], blocks: [{ type: 'ul', items: a.going }] },
    { n: '3', title: SECTION_TITLES[2], blocks: [{ type: 'steps', items: a.steps }] },
    { n: '4', title: SECTION_TITLES[3], blocks: [{ type: 'lines', items: a.lines }] },
    { n: '5', title: SECTION_TITLES[4], blocks: [{ type: 'bad', items: a.bad }] },
    { n: '6', title: SECTION_TITLES[5], blocks: [{ type: 'good', items: a.good }] }
  ]

  /* word count over every piece of prose, the same way the existing
     corpus counts it — used for the read-time chip. */
  let wc = words(a.lede) + words(a.limit)
  wc += a.going.reduce((n, s) => n + words(s), 0)
  wc += a.steps.reduce((n, s) => n + words(s.move) + words(s.detail), 0)
  wc += a.lines.reduce((n, s) => n + words(s.when) + words(s.say), 0)
  wc += a.bad.reduce((n, s) => n + words(s), 0)
  wc += a.good.reduce((n, s) => n + words(s), 0)

  return {
    id: a.id,
    title: a.title,
    category: a.category,
    categoryTitle,
    severity: a.severity,
    tool: a.tool,
    tags: a.tags,
    lede: a.lede,
    sections,
    limit: a.limit,
    wordCount: wc
  }
}

/* ---------- validate before writing anything ---------- */
const index = JSON.parse(readFileSync(resolve(content, 'situations.json'), 'utf8'))
const catTitle = Object.fromEntries(index.categories.map(c => [c.id, c.title]))
const SEV = new Set(['low', 'medium', 'high', 'critical'])
const errs = []
const seen = new Set()

for (const a of authored) {
  const at = f => `${a.id}: ${f}`
  if (!/^[a-z][a-z0-9-]+$/.test(a.id || '')) errs.push(`bad id: ${a.id}`)
  if (seen.has(a.id)) errs.push(at('duplicate id in authored set'))
  seen.add(a.id)
  if (!catTitle[a.category]) errs.push(at(`unknown category "${a.category}"`))
  if (!SEV.has(a.severity)) errs.push(at(`unknown severity "${a.severity}"`))
  for (const k of ['title', 'tool', 'lede', 'what', 'limit']) {
    if (!String(a[k] || '').trim()) errs.push(at(`empty ${k}`))
  }
  if (!Array.isArray(a.tags) || !a.tags.length) errs.push(at('no tags'))
  // the drill generator needs at least three ordered moves and three traps
  if (!Array.isArray(a.steps) || a.steps.length < 3) errs.push(at('needs >= 3 steps'))
  if (!Array.isArray(a.bad) || a.bad.length < 3) errs.push(at('needs >= 3 bad items'))
  if (!Array.isArray(a.going) || a.going.length < 2) errs.push(at('needs >= 2 going items'))
  if (!Array.isArray(a.lines) || a.lines.length < 3) errs.push(at('needs >= 3 lines'))
  if (!Array.isArray(a.good) || a.good.length < 3) errs.push(at('needs >= 3 good items'))
  for (const s of (a.steps || [])) {
    if (!s || !String(s.move || '').trim()) errs.push(at('step without a move'))
    if (!s || !String(s.detail || '').trim()) errs.push(at(`step "${s && s.move}" without detail`))
  }
  for (const l of (a.lines || [])) {
    if (!l || !String(l.when || '').trim() || !String(l.say || '').trim()) errs.push(at('malformed line'))
  }
  /* Every trap must read "Action. Consequence." so drills can split it
     into an option and its cost. This is the exact regex splitTrap()
     uses in src/data/drills.js — checking anything stricter here would
     reject traps the generator handles perfectly well (a consequence
     may legitimately open with a quotation mark, for instance). */
  for (const b of (a.bad || [])) {
    const m = String(b).trim().match(/^(.{6,110}?[.!?])\s+(.+)$/s)
    if (!m) errs.push(at(`trap will not split into action + cost: "${String(b).slice(0, 60)}…"`))
    else if (words(m[2]) < 4) errs.push(at(`trap consequence too thin: "${m[2]}"`))
  }
}

if (errs.length) {
  console.error('\nVALIDATION FAILED:')
  errs.forEach(e => console.error('  - ' + e))
  process.exit(1)
}
console.log('validation: ok')

/* ---------- write detail files ---------- */
for (const a of authored) {
  const doc = build(a, catTitle[a.category])
  writeFileSync(resolve(content, `situation/${a.id}.json`), JSON.stringify(doc))
}
console.log(`wrote ${authored.length} detail files`)

/* ---------- rewrite index rows ---------- */
const rows = authored.map(a => {
  const doc = build(a, catTitle[a.category])
  return {
    id: doc.id,
    title: doc.title,
    category: doc.category,
    categoryTitle: doc.categoryTitle,
    severity: doc.severity,
    tool: doc.tool,
    tags: doc.tags,
    lede: doc.lede,
    sectionCount: doc.sections.length,
    wordCount: doc.wordCount
  }
})

const newIds = new Set(rows.map(r => r.id))
const kept = index.situations.filter(s => !newIds.has(s.id))
index.situations = [...kept, ...rows].sort((a, b) => a.id.localeCompare(b.id))
writeFileSync(resolve(content, 'situations.json'), JSON.stringify(index, null, 2))

console.log(`index: ${kept.length} existing + ${rows.length} new = ${index.situations.length} situations`)
