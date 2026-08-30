/**
 * verify-content.mjs — integrity check for The Resources by Anik.
 *
 * Proves that every cross-reference in the hand-authored data modules
 * (skills, paths, scenarios, trees, ai) points at something that actually
 * exists in the static content corpus. Run before every build.
 *
 *   node scripts/verify-content.mjs
 *
 * Exits 1 on the first class of failure so CI stops on a dangling id.
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const content = resolve(root, 'public/content')
const read = p => JSON.parse(readFileSync(resolve(content, p), 'utf8'))

const problems = []
const notes = []
const fail = m => problems.push(m)
const ok = m => notes.push(m)

/* ---------- corpus ---------- */
const manifest = read('manifest.json')
const situations = read('situations.json')

const unitIds = new Set(manifest.index.map(u => u.id))
const trackIds = new Set(manifest.tracks.map(t => t.id))
const collectionIds = new Set(manifest.vault.map(v => v.id))
const situationIds = new Set(situations.situations.map(s => s.id))

ok(`corpus: ${unitIds.size} units, ${collectionIds.size} collections, ${situationIds.size} situations`)

/* every unit file exists */
const lessonDir = resolve(content, 'lesson')
const lessonFiles = new Set(readdirSync(lessonDir).filter(f => f.endsWith('.json')).map(f => f.slice(0, -5)))
for (const id of unitIds) if (!lessonFiles.has(id)) fail(`missing lesson file: lesson/${id}.json`)
for (const f of lessonFiles) if (!unitIds.has(f)) fail(`orphan lesson file not in manifest index: ${f}`)

/* every situation file exists and has the six-block shape */
const sitDir = resolve(content, 'situation')
const sitFiles = new Set(readdirSync(sitDir).filter(f => f.endsWith('.json')).map(f => f.slice(0, -5)))
for (const id of situationIds) if (!sitFiles.has(id)) fail(`missing situation file: situation/${id}.json`)
for (const f of sitFiles) if (!situationIds.has(f)) fail(`orphan situation file: ${f}`)

const REQUIRED_SIT_BLOCKS = ['p', 'ul', 'steps', 'lines', 'bad', 'good']
for (const id of situationIds) {
  const s = read(`situation/${id}.json`)
  const kinds = (s.sections || []).flatMap(sec => (sec.blocks || []).map(b => b.type))
  for (const need of REQUIRED_SIT_BLOCKS) {
    if (!kinds.includes(need)) fail(`situation ${id}: no "${need}" block`)
  }
  if (!s.limit) fail(`situation ${id}: no hard-limit text`)
}

/* every vault collection file exists */
const vaultDir = resolve(content, 'vault')
const vaultFiles = new Set(readdirSync(vaultDir).filter(f => f.endsWith('.json')).map(f => f.slice(0, -5)))
for (const id of collectionIds) if (!vaultFiles.has(id)) fail(`missing collection file: vault/${id}.json`)

/* accents used by categories must be real channels */
const ACCENTS = new Set(['forest', 'clay', 'atlas', 'council', 'signal', 'amber'])
for (const c of situations.categories) {
  if (!ACCENTS.has(c.accent)) fail(`situation category "${c.id}" uses unknown accent "${c.accent}"`)
}
for (const t of manifest.tracks) {
  if (!ACCENTS.has(t.accent)) fail(`track "${t.id}" uses unknown accent "${t.accent}"`)
}

/* ---------- hand-authored modules ---------- */
const load = async rel => import(pathToFileURL(resolve(root, rel)).href)

const scenariosMod = await load('src/data/scenarios.js')
const treesMod = await load('src/data/trees.js')
const skillsMod = await load('src/data/skills.js')
const pathsMod = await load('src/data/paths.js')
const aiMod = await load('src/data/ai.js')
const libMod = await load('src/data/ai-library.js')

const scenarioIds = new Set(scenariosMod.SCENARIOS.map(s => s.id))
const treeIds = new Set(treesMod.TREES.map(t => t.id))
const skillIds = new Set(skillsMod.SKILLS.map(s => s.id))
const domainIds = new Set(skillsMod.DOMAINS.map(d => d.id))
const pathIds = new Set(pathsMod.PATHS.map(p => p.id))
const problemIds = new Set(libMod.PROBLEMS.map(p => p.id))
const officeIds = new Set(libMod.MASTERCLASS.map(m => m.id))

/* Read the ids straight from the registry rather than restating them.
   A second hand-maintained list silently stops checking the moment a
   tool is added to only one of the two places. */
const toolsMod = await load('src/tools/index.js')
const TOOL_IDS = new Set(toolsMod.TOOL_IDS)

/* Every tool must sit in a declared group, or the toolkit index simply
   will not render it — the page iterates groups, not tools. */
const TOOL_GROUP_IDS = new Set(toolsMod.TOOL_GROUPS.map(g => g.id))
for (const t of toolsMod.TOOL_META) {
  if (!TOOL_GROUP_IDS.has(t.group)) fail(`tool "${t.id}": unknown group "${t.group}"`)
}

ok(`modules: ${skillIds.size} skills, ${pathIds.size} paths, ${scenarioIds.size} scenarios, ${treeIds.size} trees, ${TOOL_IDS.size} tools, ${problemIds.size} AI problems`)

/* AI routes that views must register */
const AI_ROUTES = new Set([
  'ai', 'ai/workflow', 'ai/context', 'ai/verify', 'ai/safety', 'ai/tools',
  'ai/recovery', 'ai/leverage', 'ai/builder', 'ai/roleplay', 'ai/decide',
  'ai/battles', 'ai/score', 'ai/challenge', 'ai/prompts', 'ai/library'
])
const aiRouteOk = r => {
  if (AI_ROUTES.has(r)) return true
  let m = /^ai\/problem\/(.+)$/.exec(r)
  if (m) return problemIds.has(m[1])
  m = /^ai\/office\/(.+)$/.exec(r)
  if (m) return officeIds.has(m[1])
  return false
}

/* skills.js references */
for (const s of skillsMod.SKILLS) {
  const where = `skill "${s.id}"`
  if (!domainIds.has(s.domain)) fail(`${where}: unknown domain "${s.domain}"`)
  if (!skillsMod.LEVELS[s.level]) fail(`${where}: unknown level "${s.level}"`)
  for (const u of s.units || []) if (!unitIds.has(u)) fail(`${where}: unknown unit "${u}"`)
  for (const x of s.situations || []) if (!situationIds.has(x)) fail(`${where}: unknown situation "${x}"`)
  for (const x of s.tools || []) if (!TOOL_IDS.has(x)) fail(`${where}: unknown tool "${x}"`)
  for (const x of s.trees || []) if (!treeIds.has(x)) fail(`${where}: unknown tree "${x}"`)
  for (const x of s.scenarios || []) if (!scenarioIds.has(x)) fail(`${where}: unknown scenario "${x}"`)
}

/* paths.js references */
for (const p of pathsMod.PATHS) {
  for (const st of p.stages || []) {
    const where = `path "${p.id}" stage ${st.n}`
    for (const u of st.lessons || []) if (!unitIds.has(u)) fail(`${where}: unknown unit "${u}"`)
    for (const x of st.situations || []) if (!situationIds.has(x)) fail(`${where}: unknown situation "${x}"`)
    for (const x of st.tools || []) if (!TOOL_IDS.has(x)) fail(`${where}: unknown tool "${x}"`)
    for (const x of st.trees || []) if (!treeIds.has(x)) fail(`${where}: unknown tree "${x}"`)
    for (const x of st.scenarios || []) if (!scenarioIds.has(x)) fail(`${where}: unknown scenario "${x}"`)
    for (const x of st.ai || []) if (!aiRouteOk(x)) fail(`${where}: unknown AI route "${x}"`)
  }
}

/* scenarios / trees internal integrity */
for (const s of scenariosMod.SCENARIOS) {
  if (!(s.options || []).some(o => o.grade === 'best')) fail(`scenario "${s.id}": no option graded best`)
  for (const o of s.options || []) {
    const where = `scenario "${s.id}" option ${o.key}`
    for (const f of ['text', 'grade', 'consequence', 'tradeoff', 'hidden', 'expert']) {
      if (!o[f]) fail(`${where}: missing "${f}"`)
    }
  }
  for (const x of s.situations || []) if (!situationIds.has(x)) fail(`scenario "${s.id}": unknown situation "${x}"`)
  if (!s.takeaway || !s.doNow) fail(`scenario "${s.id}": missing takeaway/doNow`)
}

/* Tree nodes are either a question node {q,note?,opts:[{label,to}]}
   or an outcome node {out,why,say?,next} where next is prose, not an id. */
for (const t of treesMod.TREES) {
  const nodes = t.nodes || {}
  if (!nodes[t.start]) fail(`tree "${t.id}": start node "${t.start}" missing`)
  const reached = new Set([t.start])
  for (const [k, n] of Object.entries(nodes)) {
    if (n.opts) {
      for (const o of n.opts) {
        if (!nodes[o.to]) fail(`tree "${t.id}": node "${k}" points at missing "${o.to}"`)
        else reached.add(o.to)
        if (!o.label) fail(`tree "${t.id}": node "${k}" has an unlabelled option`)
      }
    } else if (n.out) {
      if (!n.why) fail(`tree "${t.id}": outcome "${k}" has no reasoning`)
    } else {
      fail(`tree "${t.id}": node "${k}" is neither a question nor an outcome`)
    }
  }
  for (const k of Object.keys(nodes)) {
    if (!reached.has(k)) fail(`tree "${t.id}": node "${k}" is unreachable from start`)
  }
}

/* search docs from every module must have kind/title/route */
const allDocs = [
  ...scenariosMod.searchDocs(), ...treesMod.searchDocs(), ...skillsMod.searchDocs(),
  ...pathsMod.searchDocs(), ...aiMod.searchDocs(), ...libMod.searchDocs()
]
for (const d of allDocs) {
  if (!d.kind || !d.title || !d.route) fail(`search doc malformed: ${JSON.stringify(d).slice(0, 120)}`)
}
ok(`search: ${allDocs.length} module docs + corpus index`)

/* tool modules present once written */
const toolDir = resolve(root, 'src/tools')
if (existsSync(toolDir)) {
  const built = new Set(readdirSync(toolDir).filter(f => f.endsWith('.js')).map(f => f.slice(0, -3)))
  for (const t of TOOL_IDS) if (!built.has(t) && t !== 'index') fail(`tool module missing: src/tools/${t}.js`)
  ok(`tools: ${[...TOOL_IDS].filter(t => built.has(t)).length}/${TOOL_IDS.size} modules present`)
}

/* ---------- report ---------- */
for (const n of notes) console.log('  ok   ' + n)
if (problems.length) {
  console.error('\n' + problems.length + ' problem(s):')
  for (const p of problems) console.error('  FAIL ' + p)
  process.exit(1)
}
console.log('\nAll content references valid.')
