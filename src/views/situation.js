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

import { esc, md, plural, readTime, strip } from '../core/dom.js'
import { I } from '../core/icons.js'
import { href } from '../core/router.js'
import { getSituation, getSituations } from '../core/data.js'
import { getNote } from '../core/store.js'
import { skillsForSituation } from '../data/skills.js'
import { pathsContaining } from '../data/paths.js'
import { TOOL_META } from '../tools/index.js'
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
  const skills = skillsForSituation(id)
  const paths = pathsContaining(id)
  const tool = TOOL_META.find(t => matchTool(t, doc))

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
    mount: root => {
      root.addEventListener('click', e => { if (e.target.closest('[data-print]')) window.print() })
    }
  }
}

function secHtml (type, items) {
  const h = HEADS[type]
  return `
  <section class="sec" id="${type}">
    <div class="sec-head"><h2>${esc(h.t)}</h2><span class="t-label faint">${esc(h.lab)}</span></div>
    <div class="prose">${items.map(({ b }) => block(b)).join('')}</div>
  </section>`
}

/* Map a corpus situation onto one of the seventeen working tools,
   so the playbook offers a place to actually do the thinking. */
const TOOL_HINTS = [
  [/deadline|impossible|too much|priorit/i, 'priority-matrix'],
  [/negotiat|salary|pay|rent|contract|price|sale/i, 'negotiation-planner'],
  [/conversation|tell|talk|confront|shout|argu|apolog/i, 'conversation-planner'],
  [/decide|offer|choice|quit|accept/i, 'decision-matrix'],
  [/scam|fraud|hack|deepfake|claim|inform|lied/i, 'credibility-checker'],
  [/risk|danger|threat|intrus|crash|fire|collapse/i, 'risk-analyzer'],
  [/money|debt|income|evict|bank/i, 'opportunity-cost'],
  [/burnout|grief|panic|health|diagnos/i, 'reflection']
]
function matchTool (t, doc) {
  const hay = `${doc.title} ${doc.lede || ''} ${(doc.tags || []).join(' ')} ${doc.tool || ''}`
  for (const [re, id] of TOOL_HINTS) if (re.test(hay)) return t.id === id
  return t.id === 'problem-canvas'
}
