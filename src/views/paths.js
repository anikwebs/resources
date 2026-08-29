/* =============================================================
   LEARNING PATHS — §23.

   Ten ordered routes assembled from material that already exists
   here. A path is not a separate course: it is a sequence through
   the library with a reason for the order, and every stage mixes
   reading, a real situation, a tool, a rehearsal and a written
   reflection.

   Progress is counted from what has actually been completed. It
   is never awarded, and there are no points.
   ============================================================= */

import { esc, md, plural } from '../core/dom.js'
import { I } from '../core/icons.js'
import { href } from '../core/router.js'
import { boot, makeIndex } from '../core/data.js'
import {
  doneCount, isDone, pathStarted, startPath, stopPath, activePaths, getNote
} from '../core/store.js'
import { PATHS, pathById, pathItems, pathStats } from '../data/paths.js'
import { TOOL_META } from '../tools/index.js'
import { TREES } from '../data/trees.js'
import { SCENARIOS } from '../data/scenarios.js'
import { AI_ROUTES } from '../data/ai-routes.js'
import {
  pageHead, crumbs, sectionHead, pathCard, unitCard, situationCard, toolCard,
  treeCard, scenarioCard, grid, errorState, saveButton, jumpNav, statRow
} from './parts.js'

/* =============================================================
   INDEX — paths
   ============================================================= */
export default async function pathsIndex () {
  const started = activePaths()

  const html = `
  <div class="shell">
    ${pageHead({
      eyebrow: 'Learning paths',
      title: 'Ten ordered routes through all of this',
      lede: 'If the library is too large to know where to start — and it is — a path is the answer. Each one has a reason for its order: the things that everything else depends on come first. Six stages on average, each with reading, a real situation, a tool to use, something to rehearse and a question to answer in writing.',
      accent: 'forest',
      meta: `<span class="chip">${I.route}${plural(PATHS.length, 'path')}</span>
             ${started.length ? `<span class="chip chip-ac">${I.play}${plural(started.length, 'path')} started</span>` : ''}`
    })}

    <div class="band-tight">
      <div class="callout callout-info" style="max-width:80ch;margin-bottom:var(--s-7)">
        <span class="lab">If you only take one</span>
        <p><a href="${href('path/resourceful')}">Become More Resourceful</a> is the spine. Steadiness, then
          observation, then the ability to find out anything, then the ability to act on it. Every other path here
          is a specialisation of those four moves.</p>
      </div>

      ${grid(PATHS.map(p => pathCard(p, pathStats(p), started.includes(p.id))), 3)}
    </div>
  </div>`

  return { title: 'Learning paths', html, accent: 'forest' }
}

/* =============================================================
   ONE PATH — path/:id
   ============================================================= */
export async function pathView (ctx) {
  const p = pathById(ctx.params.id)
  if (!p) {
    return {
      title: 'Not found',
      html: `<div class="band"><div class="shell">${errorState(
        'No such path', 'There are ten. The index lists each with what it is for.', false)}</div></div>`,
      notFound: true
    }
  }

  const { manifest, situations } = await boot()
  const ix = makeIndex(manifest)
  const sitById = new Map((situations.situations || []).map(s => [s.id, s]))

  const items = pathItems(p)
  const done = doneCount(items.map(i => i.id))
  const pct = items.length ? Math.round((done / items.length) * 100) : 0
  const st = pathStats(p)
  const on = pathStarted(p.id)

  const html = `
  <div class="shell">
    ${crumbs([{ label: 'Learning paths', to: 'paths' }, { label: p.title }])}

    ${pageHead({
      eyebrow: `Path ${p.number} · about ${p.weeks} weeks`,
      title: p.title,
      lede: p.lede,
      accent: p.accent,
      meta: `<span class="chip">${I.layers}${plural(st.stages, 'stage')}</span>
             <span class="chip">${I.book}${plural(st.lessons, 'lesson')}</span>
             <span class="chip">${I.alert}${plural(st.situations, 'situation')}</span>
             <span class="chip">${I.tool}${plural(st.tools, 'tool')}</span>
             ${pct ? `<span class="chip chip-ac">${I.check}${pct}% complete</span>` : ''}`,
      actions: `
        <button class="btn ${on ? 'btn-soft' : 'btn-primary'}" data-path-toggle="${esc(p.id)}">
          ${on ? I.check : I.play}${on ? 'On your paths — remove' : 'Add to my paths'}
        </button>
        ${saveButton(`path:${p.id}`, 'Save')}
        ${items.length ? `<a class="btn btn-ghost" href="${href(firstRoute(items, ix))}">${I.arrow}Go to the next unread item</a>` : ''}`
    })}

    <div class="band-tight">
      <div class="grid g-2" style="margin-bottom:var(--s-7)">
        <div class="card card-pad-lg" data-accent="${p.accent}">
          <p class="eyebrow">What you will be able to do</p>
          <p class="t-lede" style="margin-top:var(--s-3)">${md(p.outcome)}</p>
          <div style="margin-top:var(--s-5)">
            <div class="meter meter-lg"><span style="width:${pct}%"></span></div>
            <p class="t-meta" style="margin-top:var(--s-3)">${done} of ${items.length} completable items · ${pct}%</p>
          </div>
        </div>
        <div class="card card-pad-lg card-flat">
          <p class="eyebrow">Take this if</p>
          <ul class="marklist goodlist" style="margin-top:var(--s-3)">
            ${(p.forYou || []).map(x => `<li>${md(x)}</li>`).join('')}
          </ul>
        </div>
      </div>

      ${jumpNav(p.stages.map(s => ({ id: `stage-${s.n}`, label: `${s.n}. ${s.title}` })))}

      ${p.stages.map(stage => stageHtml(stage, p, ix, sitById)).join('')}

      <section class="sec" id="finish">
        ${sectionHead('When you finish')}
        <div class="callout callout-success" style="max-width:80ch">
          <span class="lab">The honest test</span>
          <p>Not whether you read everything. Whether the next time one of these situations arrives, you know what
            the first move is without having to work it out under pressure. If you do not, the useful thing is to
            re-read the one stage where that happened rather than the whole path.</p>
        </div>
        <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-5)">
          <a class="btn" href="${href('progress')}">${I.chart}See everything you have completed</a>
          <a class="btn btn-ghost" href="${href('paths')}">${I.route}Other paths</a>
        </div>
      </section>
    </div>
  </div>`

  return {
    title: p.title,
    html,
    accent: p.accent,
    recent: { id: `path:${p.id}`, kind: 'path', title: p.title, route: `path/${p.id}` },
    mount: root => mountPath(root, p)
  }
}

function firstRoute (items, ix) {
  const next = items.find(i => !isDone(i.id)) || items[0]
  if (!next) return 'paths'
  if (next.kind === 'situation') return `situation/${next.id}`
  const u = ix.unit(next.id)
  return u ? `read/${u.track}/${u.id}` : 'library'
}

function stageHtml (stage, p, ix, sitById) {
  const lessons = (stage.lessons || []).map(id => ix.unit(id)).filter(Boolean)
    .map(u => ({ ...u, trackTitle: (ix.track(u.track) || {}).name, accent: (ix.track(u.track) || {}).accent }))
  const sits = (stage.situations || []).map(id => sitById.get(id)).filter(Boolean)
  const tools = (stage.tools || []).map(id => TOOL_META.find(t => t.id === id)).filter(Boolean)
  const trees = (stage.trees || []).map(id => TREES.find(t => t.id === id)).filter(Boolean)
  const scns = (stage.scenarios || []).map(id => SCENARIOS.find(s => s.id === id)).filter(Boolean)
  const ai = (stage.ai || []).map(r => AI_ROUTES.find(x => x.route === r)).filter(Boolean)

  const ids = [...(stage.lessons || []), ...(stage.situations || [])]
  const d = doneCount(ids)
  const pct = ids.length ? Math.round((d / ids.length) * 100) : 0

  return `
  <section class="pb" id="stage-${stage.n}" data-accent="${p.accent}">
    <div class="pb-head">
      <span class="pb-n">${stage.n}</span>
      <h2>${esc(stage.title)}</h2>
      ${ids.length ? `<span class="t-meta faint" style="margin-left:auto">${d}/${ids.length}</span>` : ''}
    </div>

    <p class="t-small muted" style="max-width:72ch;margin-bottom:var(--s-5)">${md(stage.why)}</p>
    ${ids.length ? `<div class="meter" style="max-width:280px;margin-bottom:var(--s-5)"><span style="width:${pct}%"></span></div>` : ''}

    ${lessons.length ? `
      <p class="rail-t">Read</p>
      <div style="margin:var(--s-3) 0 var(--s-5)">${grid(lessons.map(u => unitCard(u, { showTrack: true })), 3)}</div>` : ''}

    ${sits.length ? `
      <p class="rail-t">Apply it to something real</p>
      <div style="margin:var(--s-3) 0 var(--s-5)">${grid(sits.map(situationCard), 3)}</div>` : ''}

    ${tools.length || trees.length ? `
      <p class="rail-t">Use</p>
      <div style="margin:var(--s-3) 0 var(--s-5)">${grid([...tools.map(toolCard), ...trees.map(t => treeCard(t))], 3)}</div>` : ''}

    ${scns.length ? `
      <p class="rail-t">Rehearse</p>
      <div style="margin:var(--s-3) 0 var(--s-5)">${grid(scns.map(s => scenarioCard(s)), 3)}</div>` : ''}

    ${ai.length ? `
      <p class="rail-t">The AI move</p>
      <nav class="rail-links" style="margin:var(--s-3) 0 var(--s-5);max-width:60ch">
        ${ai.map(a => `<a class="rail-link" href="${href(a.route)}">${I.cpu}${esc(a.title)}</a>`).join('')}
      </nav>` : ''}

    ${stage.reflect ? `
      <div class="field" style="max-width:72ch">
        <label for="reflect-${p.id}-${stage.n}">Reflect — ${esc(stage.title)}</label>
        <p class="t-small muted" style="margin-bottom:6px">${md(stage.reflect)}</p>
        <textarea class="textarea" id="reflect-${p.id}-${stage.n}"
          data-note="path:${esc(p.id)}:${stage.n}"
          placeholder="Write it out. A stage you have not written about is a stage you have read, not learned.">${esc(getNote(`path:${p.id}:${stage.n}`))}</textarea>
        <span class="hint">Saves as you type. Appears in your progress page.</span>
      </div>` : ''}
  </section>`
}

function mountPath (root, p) {
  root.addEventListener('click', e => {
    const b = e.target.closest('[data-path-toggle]')
    if (!b) return
    const on = pathStarted(p.id)
    if (on) stopPath(p.id); else startPath(p.id)
    const now = pathStarted(p.id)
    b.className = `btn ${now ? 'btn-soft' : 'btn-primary'}`
    b.innerHTML = `${now ? I.check : I.play}${now ? 'On your paths — remove' : 'Add to my paths'}`
  })
}
