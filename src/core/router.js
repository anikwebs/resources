/* =============================================================
   ROUTER — hash-based on purpose.
   GitHub Pages has no rewrite rules, so a path-based SPA 404s on
   refresh and deep links. Hash routes survive refresh, direct
   links, the back button and any base path.
   ============================================================= */

const routes = []
let current = null
let renderer = null
let busy = false
let pending = null

/** register('situation/:id', handler) */
export function register (pattern, handler) {
  const parts = pattern.split('/').filter(Boolean)
  routes.push({ pattern, parts, handler })
}

export function setRenderer (fn) { renderer = fn }

/** Parse '#/a/b?q=1' → { parts, query, hash } */
export function parse (raw = location.hash) {
  let h = String(raw).replace(/^#\/?/, '')
  let inner = ''
  const hashAt = h.indexOf('#')
  if (hashAt > -1) { inner = h.slice(hashAt + 1); h = h.slice(0, hashAt) }
  let query = {}
  const qAt = h.indexOf('?')
  if (qAt > -1) {
    query = Object.fromEntries(new URLSearchParams(h.slice(qAt + 1)))
    h = h.slice(0, qAt)
  }
  const parts = h.split('/').filter(Boolean).map(decodeURIComponent)
  return { parts, query, hash: inner, path: parts.join('/') }
}

function match (parts) {
  for (const r of routes) {
    if (r.parts.length !== parts.length) continue
    const params = {}
    let ok = true
    for (let i = 0; i < r.parts.length; i++) {
      const p = r.parts[i]
      if (p.startsWith(':')) params[p.slice(1)] = parts[i]
      else if (p !== parts[i]) { ok = false; break }
    }
    if (ok) return { route: r, params }
  }
  return null
}

export const currentRoute = () => current

export function href (path) {
  const p = String(path).replace(/^#?\/?/, '')
  return '#/' + p
}

/** Navigate. replace=true avoids adding a history entry. */
export function go (path, { replace = false } = {}) {
  const h = href(path)
  if (location.hash === h) { resolve(); return }
  if (replace) history.replaceState(null, '', h)
  else location.hash = h
  if (replace) resolve()
}

/** Scroll-restore keyed by route path. */
const scrollMem = new Map()
function rememberScroll () {
  if (current) scrollMem.set(current.path, window.scrollY)
}

async function resolve () {
  const loc = parse()
  if (busy) { pending = true; return }
  busy = true

  const m = match(loc.parts)
  const ctx = { ...loc, params: m ? m.params : {} }
  const prev = current
  current = ctx

  try {
    const view = m
      ? await m.route.handler(ctx)
      : { title: 'Not found', html: null, notFound: true }
    if (renderer) await renderer(view, ctx, prev)
  } catch (err) {
    console.error('[route]', err)
    if (renderer) await renderer({ error: err, title: 'Something went wrong' }, ctx, prev)
  } finally {
    busy = false
    if (pending) { pending = false; resolve() }
  }
}

export function start () {
  addEventListener('hashchange', () => { rememberScroll(); resolve() })
  // A same-page anchor click still needs the router to settle scroll.
  resolve()
}

/** Restore or reset scroll after a render. */
export function restoreScroll (ctx, prev) {
  if (ctx.hash) {
    const target = document.getElementById(ctx.hash)
    if (target) { target.scrollIntoView({ block: 'start', behavior: 'auto' }); return }
  }
  const samePath = prev && prev.path === ctx.path
  if (samePath) return
  const remembered = scrollMem.get(ctx.path)
  const back = typeof remembered === 'number' && !ctx.query.fresh
  window.scrollTo({ top: back ? remembered : 0, behavior: 'auto' })
}
