/* =============================================================
   DECISION TREES — §14.

   Eleven of the decisions that recur in an adult life: say yes,
   say no, quit, negotiate, escalate, respond now, take the
   opportunity, buy this, trust this information, use AI,
   automate.

   The tree is drawn as you walk it. Answered questions stay
   visible above the current one, so the path you took is the
   record of your reasoning — which is the part you will need if
   someone asks you to justify the decision later.
   ============================================================= */

import { esc, md, plural } from '../core/dom.js'
import { I } from '../core/icons.js'
import { href } from '../core/router.js'
import { recordTree, getTree, getNote } from '../core/store.js'
import { TREES, treeById, treeStats } from '../data/trees.js'
import { TOOL_META } from '../tools/index.js'
import { skillsForSituation } from '../data/skills.js'
import {
  pageHead, crumbs, sectionHead, treeCard, toolCard, grid, errorState,
  saveButton, promise
} from './parts.js'

/* =============================================================
   INDEX — trees
   ============================================================= */
export default async function treesIndex () {
  const html = `
  <div class="shell">
    ${pageHead({
      eyebrow: 'Decision trees',
      title: 'The decisions that keep coming back',
      lede: 'Not a flowchart for the sake of one. Each of these asks the questions that actually determine the answer — the ones people skip because they are uncomfortable — and ends in a recommendation, the reasoning behind it, and a sentence you can send without rewriting.',
      accent: 'atlas',
      meta: `<span class="chip">${I.route}${plural(TREES.length, 'tree')}</span>
             <span class="chip">${I.check}Your path is kept on this device</span>`
    })}

    <div class="band-tight">
      <div class="callout callout-info" style="max-width:80ch;margin-bottom:var(--s-7)">
        <span class="lab">Answer honestly or do not bother</span>
        <p>Every one of these has a question that most people answer aspirationally — "do you have the capacity"
          means hours that already exist, not hours you plan to find by working Sunday. A tree answered optimistically
          returns an optimistic recommendation.</p>
      </div>

      ${grid(TREES.map(t => {
        const st = treeStats(t)
        const used = !!getTree(t.id)
        return treeCard(t, used).replace('</a>',
          `<div class="card-foot card-foot-line">
            <span class="t-meta faint">${st.questions} questions</span>
            <span class="t-meta faint">${st.outcomes} outcomes</span>
          </div></a>`)
      }), 3)}
    </div>
  </div>`

  return { title: 'Decision trees', html, accent: 'atlas' }
}

/* =============================================================
   ONE TREE — tree/:id
   ============================================================= */
export async function treeView (ctx) {
  const t = treeById(ctx.params.id)
  if (!t) {
    return {
      title: 'Not found',
      html: `<div class="band"><div class="shell">${errorState(
        'No such decision tree', 'There are eleven. The index lists them by the decision they resolve.', false)}</div></div>`,
      notFound: true
    }
  }

  const saved = getTree(t.id)
  const path = Array.isArray(saved && saved.path) ? validate(t, saved.path) : []
  const st = treeStats(t)
  const tool = matchTool(t)

  const html = `
  <div class="shell">
    ${crumbs([{ label: 'Decision trees', to: 'trees' }, { label: t.title }])}

    ${pageHead({
      eyebrow: 'Decision tree',
      title: t.title,
      lede: t.blurb,
      accent: t.accent,
      meta: `<span class="chip">${I.question}${st.questions} questions</span>
             <span class="chip">${I.flag}${st.outcomes} outcomes</span>
             ${(t.tags || []).map(x => `<span class="chip">${esc(x)}</span>`).join('')}`,
      actions: `${saveButton(`tree:${t.id}`, 'Save this tree')}
        ${path.length ? `<button class="btn btn-ghost" data-tree-reset>${I.reset}Start again</button>` : ''}`
    })}

    <div class="band-tight">
      <div class="tree" data-accent="${t.accent}" data-tree="${esc(t.id)}">
        ${treeHtml(t, path)}
      </div>

      <div data-tree-after${outcomeOf(t, path) ? '' : ' hidden'}>
        ${afterHtml(t, tool)}
      </div>
    </div>
  </div>`

  return {
    title: t.title,
    html,
    accent: t.accent,
    recent: { id: `tree:${t.id}`, kind: 'tree', title: t.title, route: `tree/${t.id}` },
    mount: root => mountTree(root, t)
  }
}

/* ---- walking ------------------------------------------------ */

/* Drop any saved step that no longer exists or no longer connects. */
function validate (t, path) {
  const out = []
  let node = t.start
  for (const step of path) {
    const n = t.nodes[node]
    if (!n || !n.opts) break
    const opt = n.opts.find(o => o.label === step)
    if (!opt) break
    out.push(step)
    node = opt.to
    if (!t.nodes[node]) break
  }
  return out
}

/* The chain of nodes the path visits, plus where it currently sits. */
function walk (t, path) {
  const chain = []
  let node = t.start
  for (const step of path) {
    const n = t.nodes[node]
    if (!n || !n.opts) break
    const opt = n.opts.find(o => o.label === step)
    if (!opt) break
    chain.push({ id: node, node: n, picked: step })
    node = opt.to
  }
  return { chain, current: node, node: t.nodes[node] }
}

const outcomeOf = (t, path) => {
  const { node } = walk(t, path)
  return node && node.out ? node : null
}

function treeHtml (t, path) {
  const { chain, node } = walk(t, path)
  const parts = []

  chain.forEach(({ node: n, picked }, i) => {
    parts.push(`
      <div class="node past">
        <p class="node-q">${md(n.q)}</p>
        <div class="node-opts">
          ${(n.opts || []).map(o => `
            <button class="btn btn-sm${o.label === picked ? ' node-picked' : ''}" type="button"
              data-step="${i}" data-label="${esc(o.label)}"
              ${o.label === picked ? 'aria-current="true"' : ''}>${esc(o.label)}</button>`).join('')}
        </div>
      </div>
      <div class="node-link" aria-hidden="true"></div>`)
  })

  if (!node) {
    parts.push(`<div class="node node-out"><p class="node-q">This branch is incomplete.</p>
      <p class="node-note">Start again and the tree will rebuild from the first question.</p>
      <div class="node-opts"><button class="btn btn-soft btn-sm" data-tree-reset>${I.reset}Start again</button></div></div>`)
  } else if (node.out) {
    parts.push(outcomeHtml(node, path))
  } else {
    parts.push(`
      <div class="node">
        <p class="node-q">${md(node.q)}</p>
        ${node.note ? `<p class="node-note">${md(node.note)}</p>` : ''}
        <div class="node-opts">
          ${(node.opts || []).map(o => `
            <button class="btn btn-soft btn-sm" type="button" data-pick="${esc(o.label)}">${esc(o.label)}${I.arrow}</button>`).join('')}
        </div>
      </div>`)
  }

  return parts.join('')
}

function outcomeHtml (node, path) {
  return `
  <div class="node node-out" data-outcome tabindex="-1">
    <p class="eyebrow">The recommendation</p>
    <p class="node-q" style="margin-top:6px">${md(node.out)}</p>
    <div class="verdict" style="margin-top:var(--s-5)">
      <div class="verdict-row"><div class="lab">Why</div><p>${md(node.why)}</p></div>
      ${node.say ? `
        <div class="verdict-row">
          <div class="lab">What to say</div>
          <p>${md(node.say)}</p>
          <div class="row" style="margin-top:var(--s-3)">
            <button class="btn btn-ghost btn-sm" data-copy="${esc(String(node.say).replace(/[*_`"]/g, ''))}">${I.copy}Copy this line</button>
          </div>
        </div>` : ''}
      ${node.next ? `<div class="verdict-row"><div class="lab">Then do this</div><p>${md(node.next)}</p></div>` : ''}
    </div>
    ${path.length ? `
      <div style="margin-top:var(--s-5)">
        <p class="rail-t">How you got here</p>
        <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-3)">
          ${path.map(p => `<span class="chip chip-ac">${esc(p)}</span>`).join(I.chev)}
        </div>
      </div>` : ''}
    <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-5)">
      <button class="btn btn-ghost btn-sm" data-tree-reset>${I.reset}Walk it again</button>
    </div>
  </div>`
}

function afterHtml (t, tool) {
  const others = TREES.filter(x => x.id !== t.id).slice(0, 3)
  return `
  <section class="sec" id="after">
    ${sectionHead('Before you act on it')}
    <div class="callout callout-warning" style="max-width:80ch">
      <span class="lab">A tree is a structure, not an authority</span>
      <p>It asked the questions that usually determine this decision. It does not know your circumstances, your
        finances, or the person on the other side. If the recommendation feels wrong, the useful question is which
        answer you gave aspirationally rather than honestly.</p>
    </div>

    <div class="field" style="margin-top:var(--s-6);max-width:70ch">
      <label for="tree-note">What you decided, and why</label>
      <textarea class="textarea" id="tree-note" data-note="tree:${esc(t.id)}"
        placeholder="Write it in your own words. If you cannot, you have not decided yet.">${esc(getNote('tree:' + t.id))}</textarea>
      <span class="hint">Saves as you type. This is the paragraph you would defend in a meeting.</span>
    </div>

    ${tool ? `
      <div style="margin-top:var(--s-7)">
        ${sectionHead('Take it further')}
        ${grid([toolCard(tool)], 3)}
      </div>` : ''}

    <div style="margin-top:var(--s-7)">
      ${sectionHead('Other decisions')}
      ${grid(others.map(x => treeCard(x, !!getTree(x.id))), 3)}
    </div>
  </section>`
}

/* Pair each tree with the tool that does the same work more slowly. */
const TREE_TOOL = {
  'say-yes': 'priority-matrix',
  'say-no': 'conversation-planner',
  quit: 'career-decision',
  negotiate: 'negotiation-planner',
  escalate: 'risk-analyzer',
  'respond-now': 'reflection',
  opportunity: 'decision-matrix',
  'buy-this': 'opportunity-cost',
  'trust-info': 'credibility-checker',
  'use-ai': 'problem-canvas',
  automate: 'task-decomposition'
}
const matchTool = t => TOOL_META.find(x => x.id === TREE_TOOL[t.id]) || null

/* ---- interaction -------------------------------------------- */
function mountTree (root, t) {
  const host = root.querySelector('[data-tree]')
  if (!host) return

  let path = (() => {
    const saved = getTree(t.id)
    return Array.isArray(saved && saved.path) ? validate(t, saved.path) : []
  })()

  const draw = (focus = false) => {
    host.innerHTML = treeHtml(t, path)
    const after = root.querySelector('[data-tree-after]')
    if (after) after.hidden = !outcomeOf(t, path)
    if (!focus) return
    const target = host.querySelector('[data-outcome]') || host.lastElementChild
    if (target && target.scrollIntoView) target.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }

  root.addEventListener('click', e => {
    const pick = e.target.closest('[data-pick]')
    if (pick) {
      path = [...path, pick.dataset.pick]
      recordTree(t.id, path)
      draw(true)
      return
    }
    /* clicking an earlier answer rewinds to that question */
    const back = e.target.closest('[data-step]')
    if (back) {
      const i = Number(back.dataset.step)
      path = [...path.slice(0, i), back.dataset.label]
      recordTree(t.id, path)
      draw(true)
      return
    }
    if (e.target.closest('[data-tree-reset]')) {
      path = []
      recordTree(t.id, path)
      draw()
      host.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  })
}
