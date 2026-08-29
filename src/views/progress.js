/* =============================================================
   PROGRESS — §24.
   Routes: progress, saved

   What has actually been done, and nothing else. No points, no
   streaks, no badges, no levels. Every number here corresponds to
   a real action you took, and every one links back to the thing
   itself.
   ============================================================= */

import { esc, plural, copy, toast } from '../core/dom.js'
import { I } from '../core/icons.js'
import { href, go } from '../core/router.js'
import { boot, makeIndex } from '../core/data.js'
import {
  store, doneCount, isDone, activePaths, lastRead,
  exportAll, importAll, resetAll, getScenario, getTree, loadTool
} from '../core/store.js'
import { pathById, pathItems, pathStats } from '../data/paths.js'
import { SCENARIOS, scenarioById } from '../data/scenarios.js'
import { TREES, treeById } from '../data/trees.js'
import { TOOL_META, toolMeta } from '../tools/index.js'
import { SKILLS } from '../data/skills.js'
import { BATTLES } from '../data/ai.js'
import {
  pageHead, crumbs, sectionHead, statRow, jumpNav, grid, emptyState,
  pathCard, unitCard, situationCard, toolCard, treeCard, saveButton
} from './parts.js'

/* -------------------------------------------------------------
   PROGRESS — route: progress
   ------------------------------------------------------------- */
export default async function progress () {
  let ix = null
  let sits = []
  try {
    const b = await boot()
    ix = makeIndex(b.manifest)
    sits = (b.situations && b.situations.situations) || []
  } catch (e) {
    /* Progress is local data — it is still worth showing even if the
       corpus index failed. Degrade rather than error out. */
  }

  const units = ix ? ix.units() : []
  const unitsDone = units.filter(u => isDone(u.id))
  const sitsDone = sits.filter(s => isDone(s.id))
  const answered = SCENARIOS.filter(s => getScenario(s.id))
  const treesUsed = TREES.filter(t => getTree(t.id))
  const toolsSaved = TOOL_META.filter(t => loadTool(t.id) != null)
  const started = activePaths().map(pathById).filter(Boolean)
  const battles = BATTLES.filter(b => isDone(`battle:${b.id}`))
  const last = lastRead()
  const notes = Object.entries(store.notes)
    .sort((a, b) => (b[1].at || 0) - (a[1].at || 0))

  const totalRead = units.length + sits.length
  const readDone = unitsDone.length + sitsDone.length
  const pct = totalRead ? Math.round((readDone / totalRead) * 100) : 0

  const nothing = readDone === 0 && answered.length === 0 && treesUsed.length === 0 &&
    toolsSaved.length === 0 && notes.length === 0 && started.length === 0

  const html = `
  <div class="shell band">
    ${crumbs([{ label: 'Your progress' }])}

    ${pageHead({
      eyebrow: 'Your progress',
      title: nothing ? 'Nothing recorded yet' : 'What you have actually done',
      lede: nothing
        ? 'This page fills up as you use the site. It counts only real actions — a piece finished, a tool used, a scenario answered, a reflection written. There are no points to collect here, and nothing is awarded for visiting.'
        : 'Every number here is something you did. Nothing is awarded, nothing decays, and there is no streak to protect. It is a record, not a game.',
      accent: 'forest',
      actions: nothing ? `
        <a class="btn btn-primary btn-lg" href="${href('paths')}">${I.route}Start a path</a>
        <a class="btn btn-soft btn-lg" href="${href('situations')}">${I.compass}Find your situation</a>`
        : `
        ${last ? `<a class="btn btn-primary" href="${href(last.route)}">${I.book}Continue: ${esc(last.title)}</a>` : ''}
        <a class="btn btn-soft" href="${href('saved')}">${I.bookmark}Saved (${store.saved.length})</a>
        <button class="btn btn-ghost" data-pr-export>${I.download}Export everything</button>`
    })}

    ${nothing ? `
      <section class="sec">
        ${emptyState('There is nothing here to show you yet',
          'That is not a failure — it is an empty page waiting for real work. Read one thing, answer one scenario, or fill in one tool, and this page becomes useful.',
          `<div class="row-wrap" style="gap:var(--s-3);justify-content:center">
            <a class="btn btn-primary" href="${href('paths')}">${I.route}Take a path</a>
            <a class="btn btn-soft" href="${href('tools')}">${I.tool}Use a tool</a>
            <a class="btn btn-ghost" href="${href('scenarios')}">${I.puzzle}Try a scenario</a>
          </div>`)}
      </section>
      ${dangerZone()}
    ` : `
      ${statRow([
        { v: readDone, l: 'pieces finished' },
        { v: answered.length, l: 'scenarios answered' },
        { v: toolsSaved.length, l: 'tools with your work in them' },
        { v: notes.length, l: 'reflections written' }
      ])}

      <div class="meter meter-lg" style="max-width:460px;margin:var(--s-6) 0">
        <span style="width:${pct}%"></span></div>
      <p class="t-meta faint" style="margin-top:-14px">${readDone} of ${totalRead} readable pieces
      ${pct < 3 ? '— and that is fine. This is not a completion target.' : ''}</p>

      ${jumpNav([
        ...(started.length ? [{ id: 'paths', label: 'Paths' }] : []),
        { id: 'reading', label: 'Reading' },
        ...(answered.length || treesUsed.length ? [{ id: 'practice', label: 'Practice' }] : []),
        ...(toolsSaved.length ? [{ id: 'tools', label: 'Tools' }] : []),
        ...(notes.length ? [{ id: 'notes', label: 'Reflections' }] : []),
        ...(store.recent.length ? [{ id: 'recent', label: 'Recently opened' }] : []),
        { id: 'data', label: 'Your data' }
      ])}

      ${started.length ? `
        <section class="sec" id="paths">
          ${sectionHead('Paths you are on', `<a class="btn btn-ghost btn-sm" href="${href('paths')}">All ten${I.arrow}</a>`)}
          <div style="margin-top:var(--s-4)">
            ${grid(started.map(p => pathCard(p, pathStats(p), true)), 2)}
          </div>
          ${started.map(p => pathLine(p, ix)).join('')}
        </section>` : ''}

      <section class="sec" id="reading">
        ${sectionHead('What you have finished')}
        ${readDone === 0 ? `
          <p class="t-lede muted" style="max-width:66ch">Nothing marked finished yet. The
          button is at the top of every lesson and playbook — use it honestly, because a
          number you inflated tells you nothing.</p>` : `
          ${unitsDone.length ? `
            <p class="rail-t">Lessons and chapters — ${unitsDone.length}</p>
            <div style="margin:var(--s-3) 0 var(--s-6)">
              ${grid(unitsDone.slice(0, 6).map(u => unitCard(u, { showTrack: true })), 3)}
            </div>
            ${unitsDone.length > 6 ? `<p class="t-meta faint">and ${unitsDone.length - 6} more.</p>` : ''}` : ''}
          ${sitsDone.length ? `
            <p class="rail-t">Playbooks — ${sitsDone.length}</p>
            <div style="margin:var(--s-3) 0 var(--s-6)">
              ${grid(sitsDone.slice(0, 6).map(situationCard), 3)}
            </div>` : ''}
          ${battles.length ? `
            <p class="rail-t">AI battle tests passed — ${battles.length} of ${BATTLES.length}</p>
            <ul class="marklist goodlist" style="margin:var(--s-3) 0 var(--s-6);max-width:70ch">
              ${battles.map(b => `<li>Level ${b.level} — ${esc(b.title)}</li>`).join('')}
            </ul>` : ''}
        `}
      </section>

      ${answered.length || treesUsed.length ? `
        <section class="sec" id="practice">
          ${sectionHead('Practice')}
          ${answered.length ? `
            <p class="rail-t">Scenarios answered — ${answered.length} of ${SCENARIOS.length}</p>
            <div class="stack" style="gap:var(--s-2);margin:var(--s-3) 0 var(--s-6)">
              ${answered.map(s => {
                const rec = getScenario(s.id)
                const opt = (s.options || []).find(o => o.key === (rec && rec.key))
                const g = opt ? opt.grade : null
                return `<a class="rowitem" href="${href(`scenario/${s.id}`)}">
                  <div style="min-width:0"><strong>${esc(s.title)}</strong>
                    <p class="t-small muted" style="margin:2px 0 0">You chose ${esc((rec && rec.key) || '?')}${opt ? ` — ${esc(opt.text.slice(0, 90))}` : ''}</p></div>
                  ${g ? `<span class="badge ${g === 'best' ? 'badge-success' : g === 'ok' ? 'badge-info' : 'badge-warning'}">${g === 'best' ? 'Strongest' : g === 'ok' ? 'Workable' : g === 'risky' ? 'Risky' : 'Weak'}</span>` : ''}
                </a>`
              }).join('')}
            </div>` : ''}
          ${treesUsed.length ? `
            <p class="rail-t">Decision trees walked — ${treesUsed.length} of ${TREES.length}</p>
            <div style="margin:var(--s-3) 0">${grid(treesUsed.map(t => treeCard(t, true)), 3)}</div>` : ''}
        </section>` : ''}

      ${toolsSaved.length ? `
        <section class="sec" id="tools">
          ${sectionHead('Tools with your work in them', `<a class="btn btn-ghost btn-sm" href="${href('tools')}">All ${TOOL_META.length}${I.arrow}</a>`)}
          <p class="t-small muted" style="max-width:68ch">These hold real entries. Opening one
          picks up exactly where you stopped.</p>
          <div style="margin-top:var(--s-4)">${grid(toolsSaved.map(toolCard), 3)}</div>
        </section>` : ''}

      ${notes.length ? `
        <section class="sec" id="notes">
          ${sectionHead(`Your reflections — ${notes.length}`)}
          <p class="t-small muted" style="max-width:68ch">The most valuable thing on this page.
          Reading is forgettable; what you wrote about it is not.</p>
          <div class="stack" style="gap:var(--s-3);margin-top:var(--s-4)">
            ${notes.slice(0, 12).map(([k, v]) => noteRow(k, v, ix)).join('')}
          </div>
          ${notes.length > 12 ? `<p class="t-meta faint" style="margin-top:var(--s-4)">and ${notes.length - 12} more, kept with the pages they belong to.</p>` : ''}
        </section>` : ''}

      ${store.recent.length ? `
        <section class="sec" id="recent">
          ${sectionHead('Recently opened')}
          <div class="stack" style="gap:var(--s-2);margin-top:var(--s-4)">
            ${store.recent.slice(0, 10).map(r => `
              <a class="rowitem" href="${href(r.route)}">
                <div style="min-width:0"><strong>${esc(r.title)}</strong>
                  <p class="t-small muted" style="margin:2px 0 0">${esc(r.kind || '')}</p></div>
                ${isDone(r.id) ? `<span class="t-meta faint">${I.circleCheck}</span>` : ''}
              </a>`).join('')}
          </div>
        </section>` : ''}

      ${dangerZone()}
    `}
  </div>`

  return { title: 'Your progress', html, accent: 'forest', mount: mountProgress }
}

function pathLine (p, ix) {
  const items = pathItems(p)
  const ids = items.filter(i => i.kind === 'lesson' || i.kind === 'situation').map(i => i.id)
  const d = doneCount(ids)
  const pct = ids.length ? Math.round((d / ids.length) * 100) : 0
  return `
  <div style="margin-top:var(--s-5)">
    <div class="between" style="gap:var(--s-3);align-items:baseline">
      <p class="t-small"><a href="${href(`path/${p.id}`)}"><strong>${esc(p.title)}</strong></a></p>
      <span class="t-meta faint">${d}/${ids.length}</span>
    </div>
    <div class="meter" style="margin-top:6px"><span style="width:${pct}%"></span></div>
  </div>`
}

/* Turn a note key back into a link and a label. Keys look like
   lesson:a-1.1, situation:work-boss-shouting, skill:priorities,
   path:resourceful:2, tree:say-no, scenario:late-ask, ai:verify,
   battle-note:b1, entry:coll#entry. */
function noteTarget (key, ix) {
  const [head, ...rest] = key.split(':')
  const tail = rest.join(':')
  switch (head) {
    case 'lesson': {
      const u = ix && ix.unit(tail)
      return u ? { route: `read/${u.track}/${u.id}`, label: u.title, what: 'Lesson' } : null
    }
    case 'situation': return { route: `situation/${tail}`, label: tail.replace(/-/g, ' '), what: 'Playbook' }
    case 'skill': return { route: `skill/${tail}`, label: (SKILLS.find(s => s.id === tail) || {}).name || tail, what: 'Skill' }
    case 'skill-practice': return { route: `skill/${tail}`, label: (SKILLS.find(s => s.id === tail) || {}).name || tail, what: 'Skill practice' }
    case 'scenario': return { route: `scenario/${tail}`, label: (scenarioById(tail) || {}).title || tail, what: 'Scenario' }
    case 'tree': return { route: `tree/${tail}`, label: (treeById(tail) || {}).title || tail, what: 'Decision tree' }
    case 'path': {
      const [pid, stage] = tail.split(':')
      const p = pathById(pid)
      return { route: `path/${pid}`, label: p ? `${p.title}${stage ? ` — stage ${stage}` : ''}` : pid, what: 'Path reflection' }
    }
    case 'tool': return { route: `tool/${tail}`, label: (toolMeta(tail) || {}).name || tail, what: 'Tool' }
    case 'battle-note': return { route: 'ai/battles', label: `Battle test ${tail}`, what: 'AI battle test' }
    case 'entry': {
      const [coll, entry] = tail.split('#')
      return { route: `vault/${coll}/${entry}`, label: (entry || '').replace(/-/g, ' '), what: 'Vault entry' }
    }
    case 'ai-problem': return { route: `ai/problem/${tail}`, label: tail.replace(/^p-/, '').replace(/-/g, ' '), what: 'AI problem' }
    case 'ai-office': return { route: `ai/office/${tail}`, label: `AI for ${tail}`, what: 'AI at work' }
    case 'ai': return { route: `ai/${tail.split(':')[0]}`, label: tail.replace(/[:-]/g, ' '), what: 'AI Intelligence' }
    default: return null
  }
}

function noteRow (key, v, ix) {
  const t = noteTarget(key, ix)
  const when = v.at ? new Date(v.at).toLocaleDateString(undefined, { day: 'numeric', month: 'short' }) : ''
  const body = String(v.text || '')
  return `
  <article class="card card-flat">
    <div class="between" style="gap:var(--s-3);align-items:baseline">
      <p class="eyebrow" style="margin:0">${esc(t ? t.what : 'Note')}</p>
      ${when ? `<span class="t-meta faint">${esc(when)}</span>` : ''}
    </div>
    ${t ? `<h3 class="card-title" style="margin-top:4px"><a href="${href(t.route)}">${esc(t.label)}</a></h3>`
        : `<h3 class="card-title" style="margin-top:4px">${esc(key)}</h3>`}
    <p class="card-text clamp-3" style="margin-top:var(--s-2);white-space:pre-wrap">${esc(body.slice(0, 320))}${body.length > 320 ? '…' : ''}</p>
  </article>`
}

function dangerZone () {
  return `
  <section class="sec" id="data">
    ${sectionHead('Your data')}
    <p class="t-lede" style="max-width:70ch">Everything on this site is stored in your own
    browser. There is no account, no server, and nothing is sent anywhere. That also means
    clearing your browser data clears this, and it does not follow you to another device
    unless you export it yourself.</p>

    <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-5)">
      <button class="btn btn-soft" data-pr-export>${I.download}Download a copy</button>
      <label class="btn btn-soft" for="pr-import" style="cursor:pointer">${I.inbox}Restore from a file</label>
      <input id="pr-import" type="file" accept="application/json" data-pr-import
        class="sr" aria-label="Restore your data from a JSON file">
      <button class="btn btn-ghost" data-pr-reset>${I.trash}Erase everything</button>
    </div>
    <p class="t-meta faint" style="margin-top:var(--s-3)">Erasing is immediate and cannot be
    undone. Export first if you are unsure.</p>
  </section>`
}

function mountProgress (root) {
  const onClick = async e => {
    if (e.target.closest('[data-pr-export]')) {
      const data = exportAll()
      const text = JSON.stringify(data, null, 2)
      try {
        const blob = new Blob([text], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `the-resources-by-anik-${new Date().toISOString().slice(0, 10)}.json`
        document.body.appendChild(a)
        a.click()
        a.remove()
        setTimeout(() => URL.revokeObjectURL(url), 1000)
        toast('Downloaded')
      } catch (err) {
        const ok = await copy(text)
        toast(ok ? 'Copied to your clipboard instead' : 'Could not export')
      }
      return
    }

    if (e.target.closest('[data-pr-reset]')) {
      const sure = window.confirm(
        'This erases everything: what you finished, everything saved, every reflection and all tool entries. It cannot be undone.\n\nErase it all?')
      if (!sure) return
      resetAll()
      toast('Everything erased')
      go('progress?fresh')
      return
    }
  }

  const onChange = e => {
    const input = e.target.closest('[data-pr-import]')
    if (!input || !input.files || !input.files[0]) return
    const file = input.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      try {
        importAll(JSON.parse(String(reader.result)))
        toast('Restored')
        go('progress?fresh')
      } catch (err) {
        toast(err && err.message ? err.message : 'That file could not be read')
      }
      input.value = ''
    }
    reader.onerror = () => { toast('That file could not be read'); input.value = '' }
    reader.readAsText(file)
  }

  root.addEventListener('click', onClick)
  root.addEventListener('change', onChange)
  return () => {
    root.removeEventListener('click', onClick)
    root.removeEventListener('change', onChange)
  }
}

/* -------------------------------------------------------------
   SAVED — route: saved
   ------------------------------------------------------------- */
export async function saved () {
  const list = store.saved
  const byKind = new Map()
  for (const s of list) {
    const k = s.kind || 'other'
    if (!byKind.has(k)) byKind.set(k, [])
    byKind.get(k).push(s)
  }

  const LABEL = {
    lesson: 'Lessons and chapters',
    situation: 'Playbooks',
    skill: 'Skills',
    tool: 'Tools',
    scenario: 'Scenarios',
    tree: 'Decision trees',
    path: 'Learning paths',
    collection: 'Vault collections',
    entry: 'Vault entries',
    ai: 'AI Intelligence',
    page: 'Pages',
    other: 'Other'
  }

  const html = `
  <div class="shell band">
    ${crumbs([{ label: 'Saved' }])}

    ${pageHead({
      eyebrow: 'Saved',
      title: list.length ? `${plural(list.length, 'thing')} you kept` : 'Nothing saved yet',
      lede: list.length
        ? 'Anything with a star on it lands here. It is a shortlist you built deliberately, not a history — for that, look at recently opened on your progress page.'
        : 'The star button appears at the top of every lesson, playbook, skill, tool and scenario. Use it when something is worth coming back to, and this becomes your own shortlist.',
      accent: 'amber',
      actions: `<a class="btn btn-soft" href="${href('progress')}">${I.chart}Your progress</a>`
    })}

    ${!list.length ? `
      <section class="sec">
        ${emptyState('Your shortlist is empty',
          'Start somewhere real rather than browsing — a situation you are actually in, or a path that orders the material for you.',
          `<div class="row-wrap" style="gap:var(--s-3);justify-content:center">
            <a class="btn btn-primary" href="${href('situations')}">${I.compass}Find your situation</a>
            <a class="btn btn-soft" href="${href('paths')}">${I.route}Take a path</a>
          </div>`)}
      </section>`
      : [...byKind.entries()].map(([kind, items]) => `
        <section class="sec">
          ${sectionHead(LABEL[kind] || kind, `<span class="t-meta faint">${items.length}</span>`)}
          <div class="stack" style="gap:var(--s-2);margin-top:var(--s-4)">
            ${items.map(s => `
              <div class="rowitem">
                <a href="${href(s.route)}" style="min-width:0;flex:1">
                  <strong>${esc(s.title)}</strong>
                  ${isDone(s.id) ? '<p class="t-small muted" style="margin:2px 0 0">Finished</p>' : ''}
                </a>
                ${saveButton(s.id, 'Save')}
              </div>`).join('')}
          </div>
        </section>`).join('')}
  </div>`

  return { title: 'Saved', html, accent: 'amber' }
}
