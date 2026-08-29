/* =============================================================
   TOOL KIT — the shared machinery behind all seventeen tools.

   Every tool is a plain object:

     {
       id, name, blurb, icon, accent, group,
       purpose,            // one sentence: what it decides
       when: [...],        // when to reach for it
       reads?: '...',      // how to read the output honestly
       initial(),          // -> state
       form(s),            // -> HTML for the input side
       output(s),          // -> HTML for the result side
       actions?: { key: (s, api) => void },
       summary(s)          // -> plain text, for copy / download
     }

   mountTool() wires it up:
     • state persists to localStorage through the store (saveTool/loadTool)
     • [data-bind="path"] inputs write into state by path
     • only the OUTPUT side re-renders on typing, so focus is never lost
     • [data-act="key"] buttons run structural actions and redraw both sides
   ============================================================= */

import { el, esc, on, copy, toast, debounce, num } from '../core/dom.js'

/* re-exported so tools import formatting from one place */
export { num, esc }
import { I } from '../core/icons.js'
import { saveTool, loadTool, clearTool } from '../core/store.js'

/* ---------- state path access ---------- */
export function getPath (obj, path) {
  return String(path).split('.').reduce((o, k) => (o == null ? o : o[k]), obj)
}
export function setPath (obj, path, val) {
  const keys = String(path).split('.')
  const last = keys.pop()
  let o = obj
  for (const k of keys) {
    if (o[k] == null) o[k] = /^\d+$/.test(keys[keys.indexOf(k) + 1] ?? last) ? [] : {}
    o = o[k]
  }
  o[last] = val
}

/* ---------- numbers ---------- */
export const n = v => {
  const x = parseFloat(v)
  return Number.isFinite(x) ? x : 0
}
export const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))
export const r1 = v => Math.round(v * 10) / 10
export const r2 = v => Math.round(v * 100) / 100
export const pct = (v, total) => (total > 0 ? Math.round((v / total) * 100) : 0)
export const uid = () => Math.random().toString(36).slice(2, 9)

/* ---------- markup helpers ---------- */
export const field = (label, control, hint = '') => `
  <div class="field">
    ${label ? `<label>${esc(label)}</label>` : ''}
    ${control}
    ${hint ? `<span class="hint">${esc(hint)}</span>` : ''}
  </div>`

export const text = (path, value, ph = '', extra = '') =>
  `<input class="input" type="text" data-bind="${path}" value="${esc(value ?? '')}" placeholder="${esc(ph)}" ${extra}>`

export const area = (path, value, ph = '', rows = 4) =>
  `<textarea class="textarea" data-bind="${path}" rows="${rows}" placeholder="${esc(ph)}">${esc(value ?? '')}</textarea>`

export const number = (path, value, opts = {}) => {
  const { min = 0, max = 999999, step = 1, ph = '' } = opts
  return `<input class="input" type="number" inputmode="decimal" data-bind="${path}" data-type="num"
    value="${value ?? ''}" min="${min}" max="${max}" step="${step}" placeholder="${esc(ph)}">`
}

export const select = (path, value, options) => `
  <select class="select" data-bind="${path}">
    ${options.map(o => {
      const v = typeof o === 'string' ? o : o.v
      const l = typeof o === 'string' ? o : o.l
      return `<option value="${esc(v)}"${String(value) === String(v) ? ' selected' : ''}>${esc(l)}</option>`
    }).join('')}
  </select>`

export const range = (path, value, opts = {}) => {
  const { min = 1, max = 5, step = 1 } = opts
  return `<input class="range" type="range" data-bind="${path}" data-type="num"
    min="${min}" max="${max}" step="${step}" value="${value}"
    aria-valuetext="${value} out of ${max}">`
}

export const scale = (path, value, label, max = 5) => `
  <div class="field">
    <label>${esc(label)} <span class="t-num" data-mirror="${path}">${value}</span><span class="faint">/${max}</span></label>
    ${range(path, value, { min: 1, max })}
  </div>`

export const panel = (title, body, right = '') => `
  <section class="panel">
    <div class="panel-h"><h3 class="panel-t">${esc(title)}</h3>${right}</div>
    ${body}
  </section>`

export const outPanel = (title, body, right = '') => `
  <section class="panel panel-out">
    <div class="panel-h"><h3 class="panel-t">${esc(title)}</h3>${right}</div>
    ${body}
  </section>`

export const addBtn = (act, label) =>
  `<button class="btn btn-soft btn-sm" data-act="${act}">${I.plus}${esc(label)}</button>`

export const delBtn = (act, i, label = 'Remove') =>
  `<button class="del" data-act="${act}" data-i="${i}" aria-label="${esc(label)}" title="${esc(label)}">${I.trash}</button>`

export const bar = (percent, accent = '') =>
  `<div class="bar"${accent ? ` data-accent="${accent}"` : ''}><span style="width:${clamp(percent, 0, 100)}%"></span></div>`

export const meter = (percent, big = false) =>
  `<div class="meter${big ? ' meter-lg' : ''}"><span style="width:${clamp(percent, 0, 100)}%"></span></div>`

export const dial = (percent, label = '') => {
  const c = 2 * Math.PI * 42
  const off = c - (clamp(percent, 0, 100) / 100) * c
  return `<div class="dial" style="width:112px;height:112px">
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <circle class="track" cx="50" cy="50" r="42"></circle>
      <circle class="val" cx="50" cy="50" r="42" stroke-dasharray="${r2(c)}" stroke-dashoffset="${r2(off)}"></circle>
    </svg>
    <span class="dial-num">${label || percent + '%'}</span>
  </div>`
}

export const callout = (label, body, kind = '') =>
  `<div class="callout${kind ? ' callout-' + kind : ''}"><span class="lab">${esc(label)}</span><p>${body}</p></div>`

export const emptyOut = (msg, sub = '') => `
  <div class="state">
    <span class="state-icon">${I.sliders}</span>
    <h3>${esc(msg)}</h3>
    ${sub ? `<p>${esc(sub)}</p>` : ''}
  </div>`

export const tblWrap = inner => `<div class="tbl-wrap"><table class="tbl">${inner}</table></div>`

/* ---------- mount ---------- */
export function mountTool (tool, root) {
  const saved = loadTool(tool.id)
  let s = saved && typeof saved === 'object' ? migrate(tool, saved) : tool.initial()

  const wrap = el(`
    <div class="tool tool-split" data-accent="${tool.accent || 'forest'}">
      <div data-form></div>
      <div data-out></div>
    </div>`)
  root.appendChild(wrap)

  const formHost = wrap.querySelector('[data-form]')
  const outHost = wrap.querySelector('[data-out]')

  const persist = debounce(() => saveTool(tool.id, s), 400)

  function drawOut () {
    outHost.innerHTML = tool.output(s) + footer()
  }
  function drawForm () {
    formHost.innerHTML = tool.form(s)
  }
  function redraw () { drawForm(); drawOut() }

  function footer () {
    return `
      <div class="row-wrap between" style="margin-top:var(--s-4)">
        <span class="t-meta faint">${I.check} Saved on this device automatically</span>
        <div class="row" style="gap:var(--s-2)">
          <button class="btn btn-ghost btn-sm" data-tk="copy">${I.copy}Copy result</button>
          <button class="btn btn-ghost btn-sm" data-tk="download">${I.download}Download</button>
          <button class="btn btn-ghost btn-sm" data-tk="reset">${I.reset}Start over</button>
        </div>
      </div>`
  }

  redraw()

  /* bound inputs: write state, persist, refresh the output only */
  const onBind = e => {
    const t = e.target.closest('[data-bind]')
    if (!t || !wrap.contains(t)) return
    const path = t.dataset.bind
    let v = t.type === 'checkbox' ? t.checked : t.value
    if (t.dataset.type === 'num') v = n(v)
    setPath(s, path, v)
    // live-mirror any label showing this value (range sliders)
    wrap.querySelectorAll(`[data-mirror="${path}"]`).forEach(m => { m.textContent = v })
    if (t.type === 'range') t.setAttribute('aria-valuetext', `${v} out of ${t.max}`)
    persist()
    drawOut()
  }
  wrap.addEventListener('input', onBind)
  wrap.addEventListener('change', onBind)

  /* structural actions */
  on(wrap, 'click', '[data-act]', (e, t) => {
    e.preventDefault()
    const fn = (tool.actions || {})[t.dataset.act]
    if (!fn) return
    fn(s, { el: t, i: t.dataset.i != null ? Number(t.dataset.i) : null, redraw, drawOut, ev: e })
    saveTool(tool.id, s)
    redraw()
  })

  /* inline copy buttons inside tool output */
  on(wrap, 'click', '[data-copy]', async (e, t) => {
    e.preventDefault()
    const ok = await copy(t.dataset.copy)
    toast(ok ? 'Copied' : 'Could not copy', ok ? 'ok' : '')
  })

  /* kit actions */
  on(wrap, 'click', '[data-tk]', async (e, t) => {
    e.preventDefault()
    const what = t.dataset.tk
    if (what === 'copy') {
      const ok = await copy(tool.summary(s))
      toast(ok ? 'Result copied' : 'Could not copy', ok ? 'ok' : '')
    } else if (what === 'download') {
      const blob = new Blob([tool.summary(s)], { type: 'text/plain;charset=utf-8' })
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.download = `${tool.id}.txt`
      document.body.appendChild(a)
      a.click()
      a.remove()
      setTimeout(() => URL.revokeObjectURL(a.href), 2000)
      toast('Downloaded', 'ok')
    } else if (what === 'reset') {
      if (!confirm('Clear everything you have entered in this tool?')) return
      clearTool(tool.id)
      s = tool.initial()
      redraw()
      toast('Tool cleared')
    }
  })

  return () => {
    wrap.removeEventListener('input', onBind)
    wrap.removeEventListener('change', onBind)
  }
}

/* Shape-guard saved state against a changed tool definition. */
function migrate (tool, saved) {
  const base = tool.initial()
  const out = Array.isArray(base) ? saved : { ...base, ...saved }
  for (const k of Object.keys(base)) {
    if (Array.isArray(base[k]) && !Array.isArray(out[k])) out[k] = base[k]
    if (base[k] && typeof base[k] === 'object' && !Array.isArray(base[k]) &&
        (typeof out[k] !== 'object' || out[k] === null || Array.isArray(out[k]))) out[k] = base[k]
  }
  return out
}

/* Shared plain-text summary helpers. */
export const line = (k, v) => `${k}: ${v}`
export const head = t => `\n${t}\n${'-'.repeat(t.length)}`
export const stamp = name =>
  `${name}\nThe Resources by Anik — ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}\n`
