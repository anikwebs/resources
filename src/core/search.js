/* =============================================================
   SEARCH — plain-language search across everything.
   Runs fully client-side over a pre-built index (848 docs) plus
   live-built entries for situations, tools, prompts, missions,
   scenarios, trees, playbooks, paths and AI workflows.
   ============================================================= */

import { getSearchIndex, getSituations, getTools, getPrompts } from './data.js'
import { strip } from './dom.js'

/* Content types. `w` weights how much a type is boosted. */
export const KINDS = {
  lesson: { label: 'Lessons', icon: 'book', w: 1.0 },
  situation: { label: 'Situations', icon: 'alert', w: 1.5 },
  scenario: { label: 'Scenarios', icon: 'target', w: 1.25 },
  tree: { label: 'Decision tools', icon: 'route', w: 1.2 },
  entry: { label: 'Vault entries', icon: 'vault', w: 0.95 },
  collection: { label: 'Collections', icon: 'layers', w: 1.0 },
  tool: { label: 'Tools', icon: 'tool', w: 1.2 },
  ai: { label: 'AI workflows', icon: 'cpu', w: 1.3 },
  prompt: { label: 'Prompts', icon: 'spark', w: 0.85 },
  path: { label: 'Learning paths', icon: 'route', w: 1.15 },
  page: { label: 'Sections', icon: 'grid', w: 0.9 }
}

/* Words too common in this corpus to be worth matching alone. */
const STOP = new Set(('a an and are as at be but by for from how i if in into is it its me my no not of on or '
  + 'that the their them then there they this to too was what when where which who why will with you your do does '
  + 'am can cant could should would about like just get got have has had')
  .split(' '))

const norm = s => strip(String(s || '')).toLowerCase()
  .replace(/[’']/g, '')
  .replace(/[^a-z0-9\s-]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()

/** Very light stemmer: enough to match plural/gerund forms. */
function stem (w) {
  if (w.length > 5 && w.endsWith('ing')) return w.slice(0, -3)
  if (w.length > 4 && w.endsWith('ies')) return w.slice(0, -3) + 'y'
  if (w.length > 4 && w.endsWith('es')) return w.slice(0, -2)
  if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1)
  if (w.length > 5 && w.endsWith('ed')) return w.slice(0, -2)
  return w
}

const tokens = s => norm(s).split(' ').filter(w => w.length > 1 && !STOP.has(w)).map(stem)

/* Synonyms so plain language finds the right page — "boss shouting"
   should reach the manager page, "cant pay rent" the money page. */
const SYN = {
  boss: ['manager', 'supervisor', 'lead'],
  manager: ['boss', 'supervisor'],
  fired: ['redundant', 'laid', 'layoff', 'sack', 'dismissed', 'terminated'],
  quit: ['resign', 'leave', 'notice'],
  rent: ['landlord', 'evict', 'housing', 'tenancy'],
  money: ['financial', 'debt', 'cash', 'salary', 'pay', 'budget'],
  raise: ['salary', 'promotion', 'negotiate', 'pay'],
  angry: ['shouting', 'furious', 'aggressive', 'yelling', 'mad'],
  scam: ['fraud', 'phishing', 'scammer', 'con'],
  ai: ['chatgpt', 'llm', 'claude', 'gemini', 'copilot', 'prompt'],
  interview: ['recruiter', 'hiring', 'job', 'application'],
  cv: ['resume', 'curriculum'],
  sad: ['depressed', 'grief', 'low'],
  panic: ['anxiety', 'anxious', 'attack'],
  decide: ['decision', 'choice', 'choose', 'option'],
  focus: ['attention', 'distraction', 'procrastination'],
  learn: ['study', 'revise', 'exam', 'memory'],
  meeting: ['agenda', 'standup', 'review'],
  email: ['inbox', 'message', 'reply'],
  no: ['refuse', 'decline', 'boundary'],
  time: ['deadline', 'schedule', 'busy', 'overload']
}

function expand (qs) {
  const out = new Set(qs)
  for (const q of qs) {
    const syn = SYN[q]
    if (syn) syn.forEach(s => out.add(stem(s)))
    for (const [k, v] of Object.entries(SYN)) {
      if (v.includes(q)) out.add(stem(k))
    }
  }
  return [...out]
}

/* ---------------- index build ---------------- */
let DOCS = null
let building = null

/**
 * Extra docs are supplied by the app (scenarios, trees, AI library,
 * paths, static pages) so search covers content that is authored in
 * JS modules rather than in the JSON corpus.
 */
export async function buildIndex (extra = []) {
  if (DOCS) return DOCS
  if (building) return building

  building = (async () => {
    const [raw, sitData, tools, prompts] = await Promise.all([
      getSearchIndex().catch(() => []),
      getSituations().catch(() => ({ situations: [] })),
      getTools().catch(() => []),
      getPrompts().catch(() => [])
    ])

    const docs = []

    // Corpus index: t = l(esson) | c(ollection) | e(ntry)
    for (const d of raw) {
      const kind = d.t === 'l' ? 'lesson' : d.t === 'c' ? 'collection' : 'entry'
      const route = kind === 'lesson'
        ? `read/${d.tr}/${d.id}`
        : kind === 'collection' ? `vault/${d.id}` : `vault/${d.c}/${d.id}`
      docs.push({
        kind,
        title: d.ti || '',
        sub: d.su || d.g || '',
        route,
        group: d.g || '',
        body: `${d.ti || ''} ${d.su || ''} ${d.g || ''} ${d.k || ''} ${d.x || ''}`
      })
    }

    // Situations
    for (const s of (sitData.situations || [])) {
      docs.push({
        kind: 'situation',
        title: s.title,
        sub: s.categoryTitle || '',
        route: `situation/${s.id}`,
        group: s.categoryTitle || '',
        sev: s.severity,
        body: `${s.title} ${s.categoryTitle || ''} ${(s.tags || []).join(' ')} ${s.tool || ''} ${s.lede || ''}`
      })
    }

    // Tools recorded in the corpus (named techniques inside lessons)
    const seenTool = new Set()
    for (const t of tools) {
      const key = norm(t.name)
      if (!key || seenTool.has(key)) continue
      seenTool.add(key)
      docs.push({
        kind: 'tool',
        title: t.name,
        sub: `${t.skill || ''}`,
        route: `read/${t.track}/${t.lessonId}`,
        group: 'Named technique',
        body: `${t.name} ${t.skill || ''} ${t.result || ''} ${t.lessonTitle || ''}`
      })
    }

    // Prompt library
    for (const p of prompts) {
      docs.push({
        kind: 'prompt',
        title: p.source ? `Prompt — ${p.source}` : 'Prompt',
        sub: p.section || '',
        route: `ai/prompts?q=${encodeURIComponent((p.source || '').slice(0, 40))}`,
        group: p.section || 'Prompts',
        body: `${p.text || ''} ${p.source || ''} ${p.section || ''}`
      })
    }

    docs.push(...extra)

    // Precompute token sets once — search is then pure scoring.
    for (const d of docs) {
      d._t = new Set(tokens(d.title))
      d._b = new Set(tokens(d.body))
    }

    DOCS = docs
    return docs
  })()

  return building
}

export const indexReady = () => !!DOCS
export const indexSize = () => (DOCS ? DOCS.length : 0)

/* ---------------- query ---------------- */
export function search (q, { kind = 'all', limit = 40 } = {}) {
  if (!DOCS) return []
  const qn = norm(q)
  if (qn.length < 2) return []

  const base = tokens(q)
  if (!base.length) return []
  const terms = expand(base)
  const phrase = qn.length > 5 ? qn : null

  const out = []
  for (const d of DOCS) {
    if (kind !== 'all' && d.kind !== kind) continue

    let score = 0
    let hits = 0
    for (const t of terms) {
      const isCore = base.includes(t)
      const mult = isCore ? 1 : 0.42
      if (d._t.has(t)) { score += 12 * mult; hits++ }
      else if (d._b.has(t)) { score += 4 * mult; hits++ }
      else {
        // prefix match (typing "negoti" should find "negotiation")
        if (t.length >= 4) {
          let pre = false
          for (const w of d._t) { if (w.startsWith(t)) { pre = true; break } }
          if (pre) { score += 6 * mult; hits++; continue }
          for (const w of d._b) { if (w.startsWith(t)) { pre = true; break } }
          if (pre) { score += 1.6 * mult; hits++ }
        }
      }
    }
    if (!hits) continue

    // require at least half the core terms to appear somewhere
    const coreHits = base.filter(t => d._t.has(t) || d._b.has(t)
      || [...d._t, ...d._b].some(w => t.length >= 4 && w.startsWith(t))).length
    if (base.length > 1 && coreHits === 0) continue

    if (phrase) {
      const tl = norm(d.title)
      if (tl === qn) score += 40
      else if (tl.startsWith(qn)) score += 22
      else if (tl.includes(qn)) score += 14
      else if (norm(d.body).includes(qn)) score += 7
    }

    score *= (KINDS[d.kind] || { w: 1 }).w
    if (d.sev === 'critical') score *= 1.1
    // shorter titles are usually the more canonical page
    score += Math.max(0, 26 - d.title.length) * 0.05

    out.push({ doc: d, score })
  }

  out.sort((a, b) => b.score - a.score || a.doc.title.length - b.doc.title.length)
  return out.slice(0, limit).map(r => r.doc)
}

/** Counts per kind for the filter chips. */
export function facets (q) {
  const all = search(q, { limit: 400 })
  const counts = { all: all.length }
  for (const d of all) counts[d.kind] = (counts[d.kind] || 0) + 1
  return counts
}

/** Wrap query terms in <mark>. Input must already be escaped. */
export function highlight (escaped, q) {
  const ts = tokens(q).filter(t => t.length > 2)
  if (!ts.length) return escaped
  const rx = new RegExp('(' + ts.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')', 'gi')
  return escaped.replace(rx, '<mark>$1</mark>')
}

/** Suggestions shown before the user types anything. */
export const SUGGESTIONS = [
  'my boss shouted at me',
  'impossible deadline',
  'how do I say no',
  'two job offers',
  'asking for a raise',
  'I made a mistake at work',
  'cant pay rent',
  'is this information true',
  'use AI to write a hard email',
  'I cant focus',
  'difficult customer',
  'prepare for an interview'
]
