/* =============================================================
   SCENARIOS — "What would you do?" (§13).

   These are deliberately hard. The obvious answer is usually
   defensible and still wrong, and the best answer costs
   something. Every option returns four things: the consequence,
   the trade-off, the thing you did not see, and how an
   experienced person reasons about it.

   Nothing is revealed until you commit to an answer. Committing
   is the whole exercise.
   ============================================================= */

import { esc, md, plural, strip } from '../core/dom.js'
import { I } from '../core/icons.js'
import { href } from '../core/router.js'
import { boot } from '../core/data.js'
import { recordScenario, getScenario, scenarioCount, getNote } from '../core/store.js'
import { SCENARIOS, scenarioById } from '../data/scenarios.js'
import { skillById } from '../data/skills.js'
import { TREES } from '../data/trees.js'
import {
  pageHead, crumbs, sectionHead, scenarioCard, treeCard, situationCard,
  grid, errorState, saveButton, jumpNav
} from './parts.js'

const GRADE = {
  best: { label: 'Strongest move', cls: 'grade-best' },
  ok: { label: 'Workable', cls: 'grade-ok' },
  risky: { label: 'Risky', cls: 'grade-risky' },
  poor: { label: 'Weak', cls: 'grade-poor' }
}

/* =============================================================
   INDEX — scenarios
   ============================================================= */
export default async function scenariosIndex () {
  const answered = scenarioCount()

  const html = `
  <div class="shell">
    ${pageHead({
      eyebrow: 'Practice',
      title: 'What would you do?',
      lede: 'Reading about judgment does not build it. These are written so that the obvious answer is defensible and still wrong — and so the best answer costs you something. Commit to an option before you read anything, then see the consequence, the trade-off, the thing you missed, and how someone experienced reasons about it.',
      accent: 'signal',
      meta: `<span class="chip">${I.target}${plural(SCENARIOS.length, 'scenario')}</span>
             <span class="chip">${I.route}${plural(TREES.length, 'decision tree')}</span>
             ${answered ? `<span class="chip chip-ac">${I.check}${answered} answered</span>` : ''}`
    })}

    <div class="band-tight">
      <div class="callout callout-warning" style="max-width:80ch;margin-bottom:var(--s-7)">
        <span class="lab">How to get anything from these</span>
        <p>Pick before you read. If you scroll to the reasoning first, you will find it obvious and learn nothing —
          hindsight always feels like foresight. Being wrong here is the cheapest place to be wrong.</p>
      </div>

      <section class="sec" id="scenarios">
        ${sectionHead('Scenarios', '<span class="t-small faint">One question, four options, no easy answer</span>')}
        ${grid(SCENARIOS.map(s => scenarioCard(s, !!getScenario(s.id))), 3)}
      </section>

      <section class="sec" id="trees">
        ${sectionHead('Decision trees', `<a class="btn btn-ghost btn-sm" href="${href('trees')}">All ${TREES.length}${I.arrow}</a>`)}
        <p class="t-small muted" style="margin-bottom:var(--s-5);max-width:70ch">Where a scenario tests judgment, a tree
          structures it. Four or five honest questions, and it ends in a recommendation, the reasoning, and a sentence
          you can actually send.</p>
        ${grid(TREES.slice(0, 6).map(t => treeCard(t)), 3)}
      </section>
    </div>
  </div>`

  return { title: 'Practice', html, accent: 'signal' }
}

/* =============================================================
   ONE SCENARIO — scenario/:id
   ============================================================= */
export async function scenarioView (ctx) {
  const sc = scenarioById(ctx.params.id)
  if (!sc) {
    return {
      title: 'Not found',
      html: `<div class="band"><div class="shell">${errorState(
        'No such scenario', 'The practice index lists all of them.', false)}</div></div>`,
      notFound: true
    }
  }

  const saved = getScenario(sc.id)
  const picked = saved ? saved.picked : null

  const { situations } = await boot()
  const sitById = new Map((situations.situations || []).map(x => [x.id, x]))
  const sits = (sc.situations || []).map(id => sitById.get(id)).filter(Boolean)

  const html = `
  <div class="shell">
    ${crumbs([{ label: 'Practice', to: 'scenarios' }, { label: sc.title }])}

    ${pageHead({
      eyebrow: `${sc.domain} · ${sc.difficulty}`,
      title: sc.title,
      accent: sc.accent,
      meta: `<span class="chip">${I.layers}${plural((sc.options || []).length, 'option')}</span>
             ${(sc.skills || []).map(s => `<span class="chip">${esc(s)}</span>`).join('')}
             ${picked ? `<span class="chip chip-ac">${I.check}You answered ${esc(picked)}</span>` : ''}`,
      actions: saveButton(`scenario:${sc.id}`, 'Save this scenario')
    })}

    <div class="band-tight">
      <div class="scn" data-accent="${sc.accent}" data-scn="${esc(sc.id)}">
        <div class="scn-head">
          <p class="eyebrow">The situation</p>
          <div class="scn-setup" style="margin-top:var(--s-3)">
            ${(sc.setup || []).map(p => `<p>${md(p)}</p>`).join('')}
          </div>
        </div>
        <div class="scn-body">
          <h2 class="scn-q">${esc(sc.question)}</h2>
          <div class="opts" role="group" aria-label="Your options">
            ${(sc.options || []).map(o => optionBtn(o, picked)).join('')}
          </div>
          <div data-verdict>${picked ? verdict(sc, picked) : hint()}</div>
        </div>
      </div>

      <div data-after${picked ? '' : ' hidden'}>
        ${afterHtml(sc, sits)}
      </div>
    </div>
  </div>`

  return {
    title: sc.title,
    html,
    accent: sc.accent,
    recent: { id: `scenario:${sc.id}`, kind: 'scenario', title: sc.title, route: `scenario/${sc.id}` },
    mount: root => mountScenario(root, sc)
  }
}

function optionBtn (o, picked) {
  const revealed = !!picked
  return `
  <button class="opt" type="button" data-opt="${esc(o.key)}"
    data-picked="${picked === o.key}" data-revealed="${revealed}"${revealed ? ' disabled' : ''}>
    <span class="k">${esc(o.key)}</span>
    <span class="txt">${md(o.text)}</span>
  </button>`
}

const hint = () => `
  <p class="t-small faint" style="margin-top:var(--s-5)">${I.eye} Nothing is revealed until you commit. Pick the one you
  would actually do, not the one that looks correct.</p>`

function verdict (sc, key) {
  const o = (sc.options || []).find(x => x.key === key)
  if (!o) return ''
  const g = GRADE[o.grade] || GRADE.ok
  const best = (sc.options || []).find(x => x.grade === 'best')

  return `
  <div class="verdict" style="margin-top:var(--s-6)">
    <div class="verdict-row">
      <div class="between" style="flex-wrap:wrap;gap:var(--s-3)">
        <span class="grade ${g.cls}">${o.grade === 'best' ? I.circleCheck : I.alert}${esc(g.label)}</span>
        <span class="t-meta faint">You chose ${esc(o.key)}</span>
      </div>
    </div>
    <div class="verdict-row"><div class="lab">What happens</div><p>${md(o.consequence)}</p></div>
    <div class="verdict-row"><div class="lab">What it costs you</div><p>${md(o.tradeoff)}</p></div>
    <div class="verdict-row"><div class="lab">What you did not see</div><p>${md(o.hidden)}</p></div>
    <div class="verdict-row"><div class="lab">How an experienced person reasons</div><p>${md(o.expert)}</p></div>
  </div>

  ${o.grade !== 'best' && best ? `
    <div class="callout callout-success" style="margin-top:var(--s-5)">
      <span class="lab">The strongest option here was ${esc(best.key)}</span>
      <p>${md(best.text)} — ${md(best.consequence)}</p>
    </div>` : ''}

  <details class="acc" style="margin-top:var(--s-5)">
    <summary>See every option, graded${I.chevDown}</summary>
    <div class="acc-body stack">
      ${(sc.options || []).map(x => {
        const gg = GRADE[x.grade] || GRADE.ok
        return `
        <div class="card card-flat">
          <div class="between" style="gap:var(--s-3);flex-wrap:wrap">
            <span class="grade ${gg.cls}">${esc(x.key)} · ${esc(gg.label)}</span>
            ${x.key === key ? '<span class="badge badge-info">Your answer</span>' : ''}
          </div>
          <p class="t-small" style="margin-top:var(--s-3)">${md(x.text)}</p>
          <p class="t-small muted" style="margin-top:var(--s-3)">${md(x.consequence)}</p>
        </div>`
      }).join('')}
    </div>
  </details>

  <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-5)">
    <button class="btn btn-ghost btn-sm" data-scn-again>${I.reset}Answer again</button>
  </div>`
}

function afterHtml (sc, sits) {
  const next = SCENARIOS.filter(x => x.id !== sc.id).slice(0, 3)
  return `
  <section class="sec" id="takeaway">
    ${sectionHead('What to keep')}
    <div class="grid g-2">
      <div class="callout callout-info"><span class="lab">Remember this</span><p>${md(sc.takeaway)}</p></div>
      <div class="callout callout-success"><span class="lab">Do this now</span><p>${md(sc.doNow)}</p></div>
    </div>
    ${sc.aiEdge ? `
      <div class="callout" style="margin-top:var(--s-4)">
        <span class="lab">The AI advantage here</span><p>${md(sc.aiEdge)}</p>
      </div>` : ''}

    <div class="field" style="margin-top:var(--s-6);max-width:70ch">
      <label for="scn-note">What you would actually do on Monday</label>
      <textarea class="textarea" id="scn-note" data-note="scenario:${esc(sc.id)}"
        placeholder="The sentence you would send, or the first move you would make.">${esc(getNote('scenario:' + sc.id))}</textarea>
      <span class="hint">Saves as you type.</span>
    </div>
  </section>

  ${sits.length ? `
  <section class="sec" id="real">
    ${sectionHead('When this is not a scenario')}
    ${grid(sits.map(situationCard), 3)}
  </section>` : ''}

  <section class="sec" id="next">
    ${sectionHead('Another one')}
    ${grid(next.map(x => scenarioCard(x, !!getScenario(x.id))), 3)}
  </section>`
}

/* ---- interaction -------------------------------------------- */
function mountScenario (root, sc) {
  const wrap = root.querySelector('[data-scn]')
  if (!wrap) return

  const render = key => {
    const opts = wrap.querySelector('.opts')
    const out = wrap.querySelector('[data-verdict]')
    const after = root.querySelector('[data-after]')
    if (opts) opts.innerHTML = (sc.options || []).map(o => optionBtn(o, key)).join('')
    if (out) out.innerHTML = key ? verdict(sc, key) : hint()
    if (after) after.hidden = !key
  }

  root.addEventListener('click', e => {
    const btn = e.target.closest('[data-opt]')
    if (btn && !btn.disabled) {
      const key = btn.dataset.opt
      recordScenario(sc.id, key)
      render(key)
      const out = wrap.querySelector('[data-verdict]')
      if (out) out.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
      return
    }
    if (e.target.closest('[data-scn-again]')) {
      render(null)
      wrap.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  })
}
