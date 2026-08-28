/* =============================================================
   DOM + text helpers. Deliberately tiny — no framework.
   ============================================================= */

export const $ = (sel, root = document) => root.querySelector(sel)
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)]

/** HTML-escape. Used on EVERY interpolation of content or user input. */
export const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

export const num = n => Number(n || 0).toLocaleString('en-US')

/** Inline markdown subset used by the content corpus: **b** *i* `code` [[term]] */
export function md (raw = '') {
  let s = esc(raw)
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>')
  s = s.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  s = s.replace(/(^|[\s(\[—–-])\*([^*\n]+)\*(?=$|[\s.,;:!?)\]—–-])/g, '$1<em>$2</em>')
  s = s.replace(/(^|\s)_([^_\n]{2,})_(?=$|[\s.,;:!?)])/g, '$1<em>$2</em>')
  s = s.replace(/\[\[(.+?)\]\]/g, '<strong>$1</strong>')
  return s
}

/** Strip markdown marks for plain-text contexts (titles, aria labels). */
export const strip = (s = '') => String(s).replace(/[*_`]|\[\[|\]\]/g, '')

export const slug = (s = '') =>
  String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

/** Truncate on a word boundary. */
export function clip (s = '', n = 160) {
  const t = strip(s).replace(/\s+/g, ' ').trim()
  if (t.length <= n) return t
  return t.slice(0, t.lastIndexOf(' ', n) || n).trimEnd() + '…'
}

export const plural = (n, one, many = one + 's') => `${num(n)} ${n === 1 ? one : many}`

/** ~200 wpm reading estimate, floored at 1 min. */
export const readTime = words => Math.max(1, Math.round((words || 0) / 200))

/** Debounce (trailing). */
export function debounce (fn, ms = 180) {
  let t
  return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms) }
}

/** rAF-throttle for scroll handlers. */
export function raf (fn) {
  let queued = false
  return (...a) => {
    if (queued) return
    queued = true
    requestAnimationFrame(() => { queued = false; fn(...a) })
  }
}

/** Build an element from an HTML string. */
export function el (html) {
  const t = document.createElement('template')
  t.innerHTML = html.trim()
  return t.content.firstElementChild
}

/** Delegated listener: on(root, 'click', '.sel', handler) */
export function on (root, type, sel, handler, opts) {
  root.addEventListener(type, e => {
    const t = e.target.closest(sel)
    if (t && root.contains(t)) handler(e, t)
  }, opts)
}

/** Clipboard with a graceful fallback for non-secure contexts. */
export async function copy (text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    try {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.setAttribute('readonly', '')
      ta.style.cssText = 'position:fixed;top:-1000px;opacity:0'
      document.body.appendChild(ta)
      ta.select()
      const ok = document.execCommand('copy')
      ta.remove()
      return ok
    } catch { return false }
  }
}

/* ---------------- toasts ---------------- */
let toastHost
export function toast (msg, kind = '') {
  if (!toastHost) {
    toastHost = el('<div class="toasts" role="status" aria-live="polite"></div>')
    document.body.appendChild(toastHost)
  }
  const icon = kind === 'ok'
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>'
    : ''
  const node = el(`<div class="toast">${icon}<span>${esc(msg)}</span></div>`)
  toastHost.appendChild(node)
  setTimeout(() => {
    node.classList.add('out')
    setTimeout(() => node.remove(), 240)
  }, 2100)
}

/* ---------------- reveal on scroll ---------------- */
let io
export function observeRise (root = document) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    $$('.rise', root).forEach(n => n.classList.add('in'))
    return
  }
  if (!io) {
    io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target) }
      })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.04 })
  }
  $$('.rise', root).forEach((n, i) => {
    n.style.transitionDelay = `${Math.min(i, 6) * 42}ms`
    io.observe(n)
  })
}

/** Focus trap for modals/drawers. Returns a release function. */
export function trapFocus (container) {
  const sel = 'a[href],button:not([disabled]),input:not([disabled]),select,textarea,[tabindex]:not([tabindex="-1"])'
  const prev = document.activeElement
  function onKey (e) {
    if (e.key !== 'Tab') return
    const nodes = $$(sel, container).filter(n => n.offsetParent !== null)
    if (!nodes.length) return
    const first = nodes[0]
    const last = nodes[nodes.length - 1]
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
  }
  container.addEventListener('keydown', onKey)
  return () => {
    container.removeEventListener('keydown', onKey)
    if (prev && prev.focus) prev.focus()
  }
}
