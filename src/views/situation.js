/* =============================================================
   SITUATION — a single playbook (§12, §15, §17, §19).

   The corpus writes each situation as exactly six blocks in a
   fixed order, plus a hard limit. Rendered as:

     THE SITUATION        what is happening
     THE REAL PROBLEM     what is actually going on
     DO THIS, IN ORDER    the moves
     WHAT TO SAY          borrowable lines, each copyable
     WHAT MAKES IT WORSE  the traps
     RECOVERY             once the pressure drops
     THE LIMIT            where this stops being yours to handle

   The limit is not a footnote. It sits above the recovery section
   because that is the order in which it matters.
   ============================================================= */

import { esc, md, readTime, strip } from '../core/dom.js'
import { I } from '../core/icons.js'
import { href } from '../core/router.js'
import { getSituation, getSituations } from '../core/data.js'
import { getNote, recordScenario, getScenario } from '../core/store.js'
import { drillFor } from '../data/drills.js'
import { skillsForSituation } from '../data/skills.js'
import { pathsContaining } from '../data/paths.js'
import { TOOL_META, toolForSituation } from '../tools/index.js'
import {
  crumbs, block, chip, sev, alarm, saveButton, doneButton, jumpNav,
  situationCard, grid, errorState, sectionHead
} from './parts.js'

/* Section headings we present, keyed by the block type the corpus uses. */
const HEADS = {
  p: { t: 'The situation', lab: 'What is happening', ic: 'eye' },
  ul: { t: 'The real problem', lab: 'What is actually going on', ic: 'brain' },
  steps: { t: 'Do this, in this order', lab: 'The moves', ic: 'list' },
  lines: { t: 'What to say', lab: 'Words you can borrow', ic: 'chat' },
  bad: { t: 'What makes it worse', lab: 'Common traps', ic: 'alert' },
  good: { t: 'Recovery', lab: 'Once the pressure drops', ic: 'heart' }
}
const ORDER = ['p', 'ul', 'steps', 'lines', 'bad', 'good']

export default async function situation (ctx) {
  const id = ctx.params.id

  let doc, all
  try {
    [doc, all] = await Promise.all([getSituation(id), getSituations()])
  } catch (err) {
    const missing = err && err.status === 404
    return {
      title: missing ? 'Not found' : 'Something went wrong',
      html: `<div class="band"><div class="shell">${errorState(
        missing ? 'That situation is not in this library' : 'This page did not load',
        missing
          ? 'It may have been renamed. Every situation is listed on the situations index.'
          : (err.message || 'The content file could not be read.'),
        !missing)}</div></div>`
    }
  }

  const cat = (all.categories || []).find(c => c.id === doc.category)
  const accent = (cat && cat.accent) || 'clay'
  const siblings = (all.situations || [])
    .filter(s => s.category === doc.category && s.id !== id).slice(0, 3)

  const byType = {}
  for (const s of (doc.sections || [])) {
    for (const b of (s.blocks || [])) (byType[b.type] ||= []).push({ b, s })
  }

  const present = ORDER.filter(t => byType[t])
  const drill = drillFor(doc)
  const drillKey = `drill:${id}`
  const picked = drill ? (getScenario(drillKey) || {}).picked : null
  const skills = skillsForSituation(id)
  const paths = pathsContaining(id)
  const tool = TOOL_META.find(t => t.id === toolForSituation(doc))

  const html = `
  <div class="shell">
    ${crumbs([
      { label: 'Situations', to: 'situations' },
      { label: doc.categoryTitle || 'Category', to: `situations?cat=${doc.category}` },
      { label: doc.title }
    ])}

    <div class="reader" data-accent="${accent}">
      <article class="reader-main">
        <header class="doc-head">
          <p class="kicker">${esc(doc.categoryTitle || '')}</p>
          <h1>${md(doc.title)}</h1>
          ${doc.lede ? `<p class="sub">${md(doc.lede)}</p>` : ''}
          <div class="doc-facts">
            ${sev(doc.severity)}
            ${chip(`${readTime(doc.wordCount)} min`, I.clock)}
            ${doc.tool ? chip(doc.tool, I.tool) : ''}
          </div>
          ${(doc.tags || []).length ? `<div class="row-wrap" style="gap:6px;margin-top:var(--s-4)">
            ${doc.tags.map(t => `<a class="chip" href="${href('situations?q=' + encodeURIComponent(t))}">${esc(t)}</a>`).join('')}
          </div>` : ''}
        </header>

        ${drill ? drillHtml(drill, picked) : ''}

        <div data-play${drill && !picked ? ' hidden' : ''}>
        ${jumpNav(present.map(t => ({ id: t, label: HEADS[t].t })).concat(doc.limit ? [{ id: 'limit', label: 'The limit' }] : []))}

        ${present.filter(t => t !== 'good').map(t => secHtml(t, byType[t])).join('')}

        ${doc.limit ? `
          <section class="sec" id="limit">
            <div class="sec-head"><h2>Where this stops being yours to handle</h2></div>
            ${alarm('Escalate at this point', doc.limit)}
            <p class="t-small muted" style="margin-top:var(--s-4)">Recognising this line is not giving up. It is the
              most resourceful judgment in the whole playbook, and it is the one people most often make too late.</p>
          </section>` : ''}

        ${byType.good ? secHtml('good', byType.good) : ''}

        <section class="sec" id="note">
          <div class="sec-head"><h2>What you are going to do</h2></div>
          <p class="t-small muted" style="margin-bottom:var(--s-4)">Write the first move in your own words. Anything you
            have to translate into your own sentence, you have actually understood.</p>
          <div class="field">
            <label for="sitnote">Your first move</label>
            <textarea class="textarea" id="sitnote" data-note="situation:${esc(id)}"
              placeholder="The one thing I will do, and when.">${esc(getNote('situation:' + id))}</textarea>
            <span class="hint">Saved on this device as you type.</span>
          </div>
        </section>

        ${siblings.length ? `
          <div class="sec">
            ${sectionHead('Nearby situations')}
            ${grid(siblings.map(situationCard), 3)}
          </div>` : ''}
        </div>
      </article>

      <aside class="rail">
        <div class="rail-btns">
          ${doneButton(id)}
          ${saveButton(id)}
          <button class="btn btn-ghost btn-sm" data-print>${I.file}<span>Print this playbook</span></button>
        </div>

        ${tool ? `
          <div>
            <p class="rail-t">Work it through</p>
            <a class="card card-flat" href="${href('tool/' + tool.id)}" data-accent="${tool.accent}">
              <div class="card-head"><div style="min-width:0"><h3 class="card-title">${esc(tool.name)}</h3></div>
                <span class="res-ic">${I[tool.icon] || I.tool}</span></div>
              <p class="card-text clamp-2">${esc(tool.blurb)}</p>
            </a>
          </div>` : ''}

        ${skills.length ? `
          <div>
            <p class="rail-t">The skill behind this</p>
            <nav class="rail-links">
              ${skills.slice(0, 5).map(s => `<a class="rail-link" href="${href('skill/' + s.id)}">${I.target}${esc(s.name)}</a>`).join('')}
            </nav>
          </div>` : ''}

        ${paths.length ? `
          <div>
            <p class="rail-t">Part of</p>
            <nav class="rail-links">
              ${paths.slice(0, 4).map(p => `<a class="rail-link" href="${href('path/' + p.id)}">${I.route}${esc(p.title)}</a>`).join('')}
            </nav>
          </div>` : ''}

        <div>
          <p class="rail-t">Practise this</p>
          <nav class="rail-links">
            <a class="rail-link" href="${href('scenarios')}">${I.target}Hard scenarios</a>
            <a class="rail-link" href="${href('trees')}">${I.route}Decision tools</a>
            <a class="rail-link" href="${href('ai/roleplay')}">${I.mic}Rehearse it out loud</a>
          </nav>
        </div>
      </aside>
    </div>
  </div>`

  return {
    title: strip(doc.title),
    html,
    accent,
    recent: { id, kind: 'situation', title: doc.title, route: `situation/${id}` },
    mount: root => mountSituation(root, id, drill, drillKey)
  }
}

/* -------------------------------------------------------------
   THE DRILL (§13, §19)

   Practice comes before reading. The playbook stays folded away
   until you commit to an answer, because the useful question is
   not "does this sound right when explained" but "would I have
   done it". Once you commit, every option opens up with its own
   consequence — including the ones you did not choose, since the
   reason a tempting option is wrong is the actual lesson.
   ------------------------------------------------------------- */

const GRADE = {
  best: { label: 'Strongest move', cls: 'grade-best' },
  ok: { label: 'Defensible, out of order', cls: 'grade-ok' },
  risky: { label: 'Risky', cls: 'grade-risky' },
  poor: { label: 'Makes it worse', cls: 'grade-poor' }
}

function drillHtml (drill, picked) {
  return `
  <section class="sec drill" id="drill" data-drill>
    <div class="sec-head">
      <h2>Before you read it</h2>
      <span class="t-label faint">Practice first</span>
    </div>
    <p class="t-small muted" style="margin-bottom:var(--s-5)">Recognising the right move under pressure is a different
      skill from agreeing with it afterwards. Commit to what you would <em>actually</em> do — then the playbook opens.</p>

    <div class="drill-q">
      <h3 class="scn-q">${esc(drill.question)}</h3>
      <div class="opts" role="group" aria-label="Your options" data-drill-opts>
        ${drill.options.map(o => drillOpt(o, picked)).join('')}
      </div>
      <div data-drill-verdict>${picked ? drillVerdict(drill, picked) : `
        <p class="t-small faint" style="margin-top:var(--s-5)">${I.eye} Nothing is revealed until you answer. There is no
        penalty for being wrong here — that is the entire point of practising somewhere safe.</p>`}</div>
    </div>
  </section>`
}

function drillOpt (o, picked) {
  const revealed = !!picked
  return `
  <button class="opt" type="button" data-dopt="${esc(o.key)}"
    data-picked="${picked === o.key}" data-revealed="${revealed}"${revealed ? ' disabled' : ''}>
    <span class="k">${esc(o.key)}</span>
    <span class="txt">${md(o.text)}</span>
  </button>`
}

function drillVerdict (drill, key) {
  const o = drill.options.find(x => x.key === key)
  if (!o) return ''
  const g = GRADE[o.grade] || GRADE.ok
  const best = drill.options.find(x => x.grade === 'best')
  const right = o.grade === 'best'

  return `
  <div class="verdict" style="margin-top:var(--s-6)">
    <div class="verdict-row">
      <div class="between" style="flex-wrap:wrap;gap:var(--s-3)">
        <span class="grade ${g.cls}">${right ? I.circleCheck : I.alert}${esc(g.label)}</span>
        <span class="t-meta faint">You chose ${esc(o.key)}</span>
      </div>
    </div>
    <div class="verdict-row"><div class="lab">What happens if you do this</div><p>${md(o.consequence)}</p></div>
    <div class="verdict-row"><div class="lab">Why</div><p>${md(o.why)}</p></div>
  </div>

  ${!right && best ? `
    <div class="callout callout-success" style="margin-top:var(--s-5)">
      <span class="lab">The strongest move was ${esc(best.key)}</span>
      <p><strong>${md(best.text)}</strong> — ${md(best.consequence)}</p>
    </div>` : ''}

  <details class="acc" style="margin-top:var(--s-5)">
    <summary>Every option, and what each one costs${I.chevDown}</summary>
    <div class="acc-body stack">
      ${drill.options.map(x => {
        const gg = GRADE[x.grade] || GRADE.ok
        return `
        <div class="card card-flat">
          <div class="between" style="gap:var(--s-3);flex-wrap:wrap">
            <span class="grade ${gg.cls}">${esc(x.key)} · ${esc(gg.label)}</span>
            ${x.key === key ? '<span class="badge badge-info">Your answer</span>' : ''}
          </div>
          <p class="t-small" style="margin-top:var(--s-3)"><strong>${md(x.text)}</strong></p>
          <p class="t-small muted" style="margin-top:var(--s-2)">${md(x.consequence)}</p>
        </div>`
      }).join('')}
    </div>
  </details>

  <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-5)">
    <button class="btn btn-ghost btn-sm" data-drill-again>${I.reset}Try again</button>
    <a class="btn btn-primary btn-sm" href="#play">${I.book}Read the playbook</a>
  </div>`
}

function mountSituation (root, id, drill, drillKey) {
  const onClick = e => {
    if (e.target.closest('[data-print]')) { window.print(); return }

    const opt = e.target.closest('[data-dopt]')
    if (opt && drill) {
      reveal(opt.dataset.dopt)
      return
    }

    if (e.target.closest('[data-drill-again]') && drill) {
      const opts = root.querySelector('[data-drill-opts]')
      const v = root.querySelector('[data-drill-verdict]')
      if (opts) opts.innerHTML = drill.options.map(o => drillOpt(o, null)).join('')
      if (v) {
        v.innerHTML = `<p class="t-small faint" style="margin-top:var(--s-5)">${I.eye} Pick the one you would actually do.</p>`
      }
      // The playbook stays open once earned; re-answering is for
      // practice, not a punishment that hides what you already read.
      const first = root.querySelector('[data-dopt]')
      if (first) first.focus()
      return
    }

    // "Read the playbook" scrolls rather than navigating, since a bare
    // #fragment would be parsed as a route by the hash router.
    const jump = e.target.closest('a[href="#play"]')
    if (jump) {
      e.preventDefault()
      const play = root.querySelector('[data-play]')
      if (play) play.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  function reveal (key) {
    const opts = root.querySelector('[data-drill-opts]')
    const v = root.querySelector('[data-drill-verdict]')
    const play = root.querySelector('[data-play]')
    if (opts) opts.innerHTML = drill.options.map(o => drillOpt(o, key)).join('')
    if (v) v.innerHTML = drillVerdict(drill, key)
    if (play) play.hidden = false
    recordScenario(drillKey, key)
  }

  root.addEventListener('click', onClick)
  return () => root.removeEventListener('click', onClick)
}

function secHtml (type, items) {
  const h = HEADS[type]
  return `
  <section class="sec" id="${type}">
    <div class="sec-head"><h2>${esc(h.t)}</h2><span class="t-label faint">${esc(h.lab)}</span></div>
    <div class="prose">${items.map(({ b }) => block(b)).join('')}</div>
  </section>`
}


