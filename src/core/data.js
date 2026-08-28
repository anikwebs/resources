/* =============================================================
   DATA LAYER
   Content lives as static JSON under <base>/content/. Every URL is
   resolved against import.meta.env.BASE_URL so the app works at
   "/" in dev and at "/<repo>/" on GitHub Pages with no code change.
   ============================================================= */

/** Base-aware asset URL. Never build content URLs any other way. */
export const asset = p => import.meta.env.BASE_URL + String(p).replace(/^\/+/, '')

const cache = new Map()
const inflight = new Map()

class DataError extends Error {
  constructor (msg, url, status) {
    super(msg)
    this.name = 'DataError'
    this.url = url
    this.status = status
  }
}

/** Fetch + cache JSON. Concurrent callers share one request. */
export async function json (path) {
  const url = asset(path)
  if (cache.has(url)) return cache.get(url)
  if (inflight.has(url)) return inflight.get(url)

  const p = (async () => {
    let res
    try {
      res = await fetch(url, { headers: { accept: 'application/json' } })
    } catch (e) {
      throw new DataError('Could not reach the content files. Check your connection and reload.', url, 0)
    }
    if (!res.ok) {
      throw new DataError(
        res.status === 404 ? 'That page is not in this library.' : `Content failed to load (${res.status}).`,
        url, res.status
      )
    }
    return res.json()
  })()

  inflight.set(url, p)
  try {
    const d = await p
    cache.set(url, d)
    return d
  } finally {
    inflight.delete(url)
  }
}

/* ---------------- singletons ---------------- */
export const getManifest = () => json('content/manifest.json')
export const getSituations = () => json('content/situations.json')
export const getSituation = id => json(`content/situation/${encodeURIComponent(id)}.json`)
export const getLesson = id => json(`content/lesson/${encodeURIComponent(id)}.json`)
export const getCollection = id => json(`content/vault/${encodeURIComponent(id)}.json`)

const unwrap = (d, key) => d[key] || d.docs || d
export const getTools = () => json('content/tools.json').then(d => unwrap(d, 'tools'))
export const getPrompts = () => json('content/prompts.json').then(d => unwrap(d, 'prompts'))
export const getMissions = () => json('content/missions.json').then(d => unwrap(d, 'missions'))
export const getSearchIndex = () => json('content/search.json').then(d => unwrap(d, 'docs'))

/** Warm the caches the shell needs on nearly every route. */
export async function boot () {
  const [manifest, situations] = await Promise.all([getManifest(), getSituations()])
  return { manifest, situations }
}

/** Optional idle prefetch of the heavy search index. */
export function prefetchSearch () {
  const go = () => getSearchIndex().catch(() => {})
  if ('requestIdleCallback' in window) requestIdleCallback(go, { timeout: 4000 })
  else setTimeout(go, 2200)
}

/* =============================================================
   MANIFEST QUERIES — one place for "how do I find X".
   ============================================================= */
export function makeIndex (manifest) {
  const byId = new Map(manifest.index.map(u => [u.id, u]))
  const byTrack = new Map()
  for (const u of manifest.index) {
    if (!byTrack.has(u.track)) byTrack.set(u.track, [])
    byTrack.get(u.track).push(u)
  }
  const collById = new Map(manifest.vault.map(c => [c.id, c]))
  const trackById = new Map(manifest.tracks.map(t => [t.id, t]))

  return {
    manifest,
    unit: id => byId.get(id),
    units: () => manifest.index,
    ofTrack: t => byTrack.get(t) || [],
    track: t => trackById.get(t),
    tracks: () => manifest.tracks,
    groups: t => manifest.groups[t] || [],
    group: (t, gid) => (manifest.groups[t] || []).find(g => g.id === gid),
    collection: id => collById.get(id),
    collections: () => manifest.vault,
    collectionsOfKind: k => manifest.vault.filter(c => c.kind === k),
    vaultGroups: () => manifest.vaultGroups,
    stats: () => manifest.stats,

    /** Sequential neighbours inside a track (for prev/next). */
    neighbours (id) {
      const u = byId.get(id)
      if (!u) return { prev: null, next: null }
      const list = byTrack.get(u.track) || []
      const i = list.findIndex(x => x.id === id)
      return { prev: i > 0 ? list[i - 1] : null, next: i > -1 && i < list.length - 1 ? list[i + 1] : null }
    },

    /** Every unit id belonging to a level/group, in order. */
    groupUnits (t, gid) {
      const g = (manifest.groups[t] || []).find(x => x.id === gid)
      if (!g) return []
      return (g.lessonIds || []).map(i => byId.get(i)).filter(Boolean)
    }
  }
}
