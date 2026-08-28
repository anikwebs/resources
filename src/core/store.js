/* =============================================================
   STORE — all persistence. localStorage only: no account, no
   server, nothing leaves the device. Every write is guarded so a
   full/blocked storage never breaks the app.
   ============================================================= */

const NS = 'rha:' // "resourceful human app"

const LS = {
  get (k, d) {
    try {
      const v = localStorage.getItem(NS + k)
      return v == null ? d : JSON.parse(v)
    } catch { return d }
  },
  set (k, v) {
    try { localStorage.setItem(NS + k, JSON.stringify(v)); return true } catch { return false }
  },
  del (k) { try { localStorage.removeItem(NS + k) } catch {} }
}

const listeners = new Set()
export const onChange = fn => { listeners.add(fn); return () => listeners.delete(fn) }
const emit = key => listeners.forEach(fn => { try { fn(key) } catch {} })

/* ---------------- shape ---------------- */
export const store = {
  done: new Set(LS.get('done', [])),            // completed lessons / entries / situations
  saved: LS.get('saved', []),                    // [{id,kind,title,route,at}]
  recent: LS.get('recent', []),                  // [{id,kind,title,route,at}]
  notes: LS.get('notes', {}),                    // reflections, keyed
  tools: LS.get('tools', {}),                    // saved tool state, keyed by tool id
  scenarios: LS.get('scenarios', {}),            // {scenarioId: {picked, at}}
  trees: LS.get('trees', {}),                    // {treeId: {path:[], at}}
  paths: LS.get('paths', {}),                    // {pathId: {startedAt}}
  battles: LS.get('battles', {}),                // {levelId: {score, at}}
  scale: LS.get('scale', 1),                     // reader zoom
  theme: LS.get('theme', null),
  seen: LS.get('seen', false),                   // onboarding
  version: 1
}

/* ---------------- theme ---------------- */
export function initTheme () {
  const t = store.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  document.documentElement.dataset.theme = t
  syncThemeColor(t)
  return t
}
function syncThemeColor (t) {
  const m = document.querySelector('meta[name=theme-color]')
  if (m) m.content = t === 'dark' ? '#12110d' : '#f4f1ea'
}
export function toggleTheme () {
  const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
  document.documentElement.dataset.theme = t
  store.theme = t
  LS.set('theme', t)
  syncThemeColor(t)
  emit('theme')
  return t
}

/* ---------------- reader scale ---------------- */
export function setScale (v) {
  store.scale = Math.min(1.35, Math.max(0.85, Math.round(v * 100) / 100))
  LS.set('scale', store.scale)
  document.documentElement.style.setProperty('--reader-scale', store.scale)
  emit('scale')
  return store.scale
}
export const applyScale = () =>
  document.documentElement.style.setProperty('--reader-scale', store.scale)

/* ---------------- done / progress ---------------- */
export const isDone = id => store.done.has(id)
export function toggleDone (id) {
  if (store.done.has(id)) store.done.delete(id)
  else store.done.add(id)
  LS.set('done', [...store.done])
  emit('done')
  return store.done.has(id)
}
export function setDone (id, on) {
  if (on) store.done.add(id); else store.done.delete(id)
  LS.set('done', [...store.done])
  emit('done')
}
export const doneCount = ids => ids.reduce((n, id) => n + (store.done.has(id) ? 1 : 0), 0)

/* ---------------- saved (bookmarks) ---------------- */
export const isSaved = id => store.saved.some(s => s.id === id)
export function toggleSaved (item) {
  const i = store.saved.findIndex(s => s.id === item.id)
  if (i > -1) store.saved.splice(i, 1)
  else store.saved.unshift({ ...item, at: Date.now() })
  store.saved = store.saved.slice(0, 400)
  LS.set('saved', store.saved)
  emit('saved')
  return isSaved(item.id)
}

/* ---------------- recently viewed ---------------- */
export function pushRecent (item) {
  if (!item || !item.id) return
  store.recent = [{ ...item, at: Date.now() }, ...store.recent.filter(r => r.id !== item.id)].slice(0, 40)
  LS.set('recent', store.recent)
  emit('recent')
}
export const lastRead = () => store.recent.find(r => r.kind === 'lesson') || store.recent[0] || null

/* ---------------- notes / reflections ---------------- */
export function setNote (key, text) {
  if (text && text.trim()) store.notes[key] = { text: text.trim(), at: Date.now() }
  else delete store.notes[key]
  LS.set('notes', store.notes)
  emit('notes')
}
export const getNote = key => (store.notes[key] || {}).text || ''
export const noteCount = () => Object.keys(store.notes).length

/* ---------------- tool state ---------------- */
export function saveTool (id, data) {
  store.tools[id] = { data, at: Date.now() }
  LS.set('tools', store.tools)
  emit('tools')
}
export const loadTool = (id, fallback = null) => (store.tools[id] || {}).data ?? fallback
export function clearTool (id) {
  delete store.tools[id]
  LS.set('tools', store.tools)
  emit('tools')
}
export const toolsUsed = () => Object.keys(store.tools).length

/* ---------------- scenarios ---------------- */
export function recordScenario (id, picked) {
  store.scenarios[id] = { picked, at: Date.now() }
  LS.set('scenarios', store.scenarios)
  emit('scenarios')
}
export const getScenario = id => store.scenarios[id] || null
export const scenarioCount = () => Object.keys(store.scenarios).length

/* ---------------- decision trees ---------------- */
export function recordTree (id, path) {
  store.trees[id] = { path, at: Date.now() }
  LS.set('trees', store.trees)
  emit('trees')
}
export const getTree = id => store.trees[id] || null

/* ---------------- learning paths ---------------- */
export function startPath (id) {
  if (!store.paths[id]) store.paths[id] = { startedAt: Date.now() }
  LS.set('paths', store.paths)
  emit('paths')
}
export function stopPath (id) {
  delete store.paths[id]
  LS.set('paths', store.paths)
  emit('paths')
}
export const pathStarted = id => !!store.paths[id]
export const activePaths = () => Object.keys(store.paths)

/* ---------------- AI battle tests ---------------- */
export function recordBattle (id, score, answers) {
  const prev = store.battles[id]
  if (!prev || score >= prev.score) store.battles[id] = { score, answers, at: Date.now() }
  LS.set('battles', store.battles)
  emit('battles')
}
export const getBattle = id => store.battles[id] || null
export const battleCount = () => Object.keys(store.battles).length

/* ---------------- onboarding ---------------- */
export function markSeen () { store.seen = true; LS.set('seen', true) }

/* ---------------- export / reset ---------------- */
export function exportAll () {
  return {
    app: 'The Resources by Anik',
    exportedAt: new Date().toISOString(),
    version: store.version,
    done: [...store.done],
    saved: store.saved,
    recent: store.recent,
    notes: store.notes,
    tools: store.tools,
    scenarios: store.scenarios,
    trees: store.trees,
    paths: store.paths,
    battles: store.battles
  }
}

export function importAll (data) {
  if (!data || typeof data !== 'object') throw new Error('Not a valid backup file.')
  if (Array.isArray(data.done)) { store.done = new Set(data.done); LS.set('done', data.done) }
  for (const k of ['saved', 'recent']) {
    if (Array.isArray(data[k])) { store[k] = data[k]; LS.set(k, data[k]) }
  }
  for (const k of ['notes', 'tools', 'scenarios', 'trees', 'paths', 'battles']) {
    if (data[k] && typeof data[k] === 'object') { store[k] = data[k]; LS.set(k, data[k]) }
  }
  emit('import')
}

export function resetAll () {
  for (const k of ['done', 'saved', 'recent', 'notes', 'tools', 'scenarios', 'trees', 'paths', 'battles', 'seen']) LS.del(k)
  store.done = new Set()
  store.saved = []
  store.recent = []
  store.notes = {}
  store.tools = {}
  store.scenarios = {}
  store.trees = {}
  store.paths = {}
  store.battles = {}
  store.seen = false
  emit('reset')
}
