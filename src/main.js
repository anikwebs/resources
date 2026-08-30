/* =============================================================
   THE RESOURCES BY ANIK — application shell.

   Responsibilities, and nothing else:
     1. Build the persistent chrome (nav, drawer, search overlay,
        footer, mobile tab bar) once.
     2. Register every route against its view module.
     3. Render a view result into <main> and run its mount hook.
     4. Own the handful of behaviours that are delegated by every
        view: save, complete, copy, note, checkbox, retry.

   Views themselves are pure string builders. They never touch the
   chrome and they never wire global listeners — that keeps them
   cheap to lazy-load and impossible to leak.
   ============================================================= */

import { $, $$, esc, el, on, copy, toast, debounce, observeRise, trapFocus, strip } from './core/dom.js'
import { I } from './core/icons.js'
import {
  register, setRenderer, start, go, href, syncUrl, currentRoute, restoreScroll, parse
} from './core/router.js'
import {
  initTheme, toggleTheme, applyScale, markSeen, store,
  toggleSaved, isSaved, toggleDone, isDone, setDone, setNote, pushRecent, onChange
} from './core/store.js'
import { prefetchSearch } from './core/data.js'
import { buildIndex, search, facets, highlight, KINDS, SUGGESTIONS } from './core/search.js'

const SITE = 'The Resources by Anik'

/* ============================================================
   1. CHROME
   ============================================================ */

/* Primary navigation. Each top-level item opens a panel listing what
   is actually underneath it, because "Situations" alone does not tell
   anyone that there are sixty-seven playbooks sorted by category, and
   a menu that hides its own contents makes the product look smaller
   than it is. `to` stays clickable for people who know where they are
   going; the panel is for people who do not. */
const NAV = [
  {
    to: 'situations',
    label: 'Situations',
    icon: 'alert',
    blurb: 'Something is happening. Find the playbook, answer the drill, then read the moves in order.',
    cols: [
      {
        head: 'By pressure',
        links: [
          { to: 'situations?cat=work', label: 'Work', icon: 'inbox', note: 'Blame, deadlines, a boss shouting' },
          { to: 'situations?cat=conflict', label: 'Conflict', icon: 'chat', note: 'Accusations, apologies, feuds' },
          { to: 'situations?cat=money', label: 'Money', icon: 'money', note: 'Rent, debt, eviction, contracts' },
          { to: 'situations?cat=people', label: 'People', icon: 'users', note: 'Pressure, guilt, manipulation' }
        ]
      },
      {
        head: 'When it is serious',
        links: [
          { to: 'situations?cat=danger', label: 'Danger', icon: 'shield', note: 'Aggression, being followed, cornered' },
          { to: 'situations?cat=crisis', label: 'Crisis', icon: 'alert', note: 'Collapse, choking, fire, flood' },
          { to: 'situations?cat=health', label: 'Health', icon: 'heart', note: 'Diagnosis, burnout, advocating' },
          { to: 'situations?cat=digital', label: 'Digital', icon: 'cpu', note: 'Hacked, scammed, exposed' }
        ]
      },
      {
        head: 'Ways in',
        links: [
          { to: 'situations', label: 'All playbooks', icon: 'list', note: 'Every situation, filterable' },
          { to: 'situations?cat=life', label: 'Life events', icon: 'home', note: 'Grief, moving, relationships' },
          { to: 'trees', label: 'Decision trees', icon: 'route', note: 'Answer questions, get a route' },
          { to: 'scenarios', label: 'Hard scenarios', icon: 'puzzle', note: 'Commit to a choice, then see it' }
        ]
      }
    ]
  },
  {
    to: 'skills',
    label: 'Skills',
    icon: 'target',
    blurb: 'Something you can get better at. Each skill names the signals, the reading, and one thing to practise this week.',
    cols: [
      {
        head: 'Areas',
        links: [
          { to: 'skills/work', label: 'Work', icon: 'inbox', note: 'Pressure, priorities, finishing' },
          { to: 'skills/career', label: 'Career', icon: 'target', note: 'Direction, capital, pay, leaving' },
          { to: 'skills/communication', label: 'Communication', icon: 'chat', note: 'Clarity, feedback, hard talks' },
          { to: 'skills/daily', label: 'Daily life', icon: 'home', note: 'Admin, health, emergencies' }
        ]
      },
      {
        head: 'More areas',
        links: [
          { to: 'skills/money', label: 'Money', icon: 'money', note: 'Triage, decisions, paperwork' },
          { to: 'skills/learning', label: 'Learning & thinking', icon: 'brain', note: 'Finding out, judging, remembering' },
          { to: 'skills/digital', label: 'Digital life', icon: 'shield', note: 'AI fluency, security, footprint' },
          { to: 'skills', label: 'All skills', icon: 'list', note: 'Every skill across every area' }
        ]
      },
      {
        head: 'Sequenced',
        links: [
          { to: 'paths', label: 'Learning paths', icon: 'route', note: 'Ordered routes with a finish line' },
          { to: 'library', label: 'The full library', icon: 'book', note: 'Every lesson, every track' },
          { to: 'progress', label: 'Your progress', icon: 'chart', note: 'What you have finished' }
        ]
      }
    ]
  },
  {
    to: 'tools',
    label: 'Toolkit',
    icon: 'tool',
    blurb: 'Not worksheets. Each one takes what you type and works out something you could not see by staring at the problem.',
    cols: [
      {
        head: 'Deciding & working',
        links: [
          { to: 'tool/decision-matrix', label: 'Decision Matrix', icon: 'scale', note: 'Score options against weighted criteria' },
          { to: 'tool/pre-mortem', label: 'Pre-Mortem', icon: 'alert', note: 'Assume it failed, work backwards' },
          { to: 'tool/priority-matrix', label: 'Priority Matrix', icon: 'grid', note: 'Importance against urgency' },
          { to: 'tool/time-audit', label: 'Time Audit', icon: 'clock', note: 'Where the week actually goes' }
        ]
      },
      {
        head: 'Talking & money',
        links: [
          { to: 'tool/conversation-planner', label: 'Conversation Planner', icon: 'chat', note: 'Opening line, outcome, pushback' },
          { to: 'tool/email-pressure-test', label: 'Message Pressure Test', icon: 'shield', note: 'Read a draft before you send it' },
          { to: 'tool/money-triage', label: 'Money Triage', icon: 'money', note: 'Which bills can actually hurt you' },
          { to: 'tool/negotiation-planner', label: 'Negotiation Planner', icon: 'scale', note: 'Your number and your walk-away' }
        ]
      },
      {
        head: 'By group',
        links: [
          { to: 'tools#deciding', label: 'Deciding', icon: 'route', note: 'A choice with no obvious answer' },
          { to: 'tools#building', label: 'Building', icon: 'layers', note: 'Goals, habits, learning, review' },
          { to: 'tools#thinking', label: 'Thinking', icon: 'brain', note: 'What is true and what is wrong' },
          { to: 'tools', label: 'All tools', icon: 'list', note: 'The complete toolkit' }
        ]
      }
    ]
  },
  {
    to: 'ai',
    label: 'AI',
    icon: 'cpu',
    blurb: 'Using a model as a genuine multiplier, and never being fooled by one. The method, then the practice rooms.',
    cols: [
      {
        head: 'The method',
        links: [
          { to: 'ai', label: 'How to work with it', icon: 'cpu', note: 'The workflow, start to finish' },
          { to: 'ai/context', label: 'Giving context', icon: 'layers', note: 'The seven elements that matter' },
          { to: 'ai/verify', label: 'The verification firewall', icon: 'shield', note: 'Catching the confident lie' },
          { to: 'ai/safety', label: 'Where not to use it', icon: 'alert', note: 'The honest limits' }
        ]
      },
      {
        head: 'Practice rooms',
        links: [
          { to: 'ai/library', label: 'Real problems', icon: 'inbox', note: 'A prompt, a second pass, a check' },
          { to: 'ai/roleplay', label: 'Rehearsal room', icon: 'users', note: 'Practise the conversation first' },
          { to: 'ai/builder', label: 'Workflow builder', icon: 'sliders', note: 'Design a repeatable pipeline' },
          { to: 'ai/battles', label: 'Battle tests', icon: 'flag', note: 'Beat the model at judgment' }
        ]
      },
      {
        head: 'Reference',
        links: [
          { to: 'ai/prompts', label: 'Prompt vault', icon: 'spark', note: 'Every prompt in one place' },
          { to: 'ai/tools', label: 'Which tool for what', icon: 'tool', note: 'Picking the right assistant' },
          { to: 'ai/score', label: 'Resourcefulness score', icon: 'chart', note: 'Where you actually stand' }
        ]
      }
    ]
  },
  {
    to: 'library',
    label: 'Library',
    icon: 'book',
    blurb: 'The long-form reading. Four tracks, from the core course to the atlas of ideas.',
    cols: [
      {
        head: 'Tracks',
        links: [
          { to: 'track/mastery', label: 'The mastery course', icon: 'book', note: 'Eight levels, the core sequence' },
          { to: 'track/workbook', label: 'The workbook', icon: 'pen', note: 'The practical companion' },
          { to: 'track/atlas', label: 'The atlas', icon: 'globe', note: 'Nine worlds of ideas' },
          { to: 'track/mastery-life', label: 'Mastery of life', icon: 'compass', note: 'Seven parts, the long view' }
        ]
      },
      {
        head: 'Ways in',
        links: [
          { to: 'library', label: 'Everything', icon: 'list', note: 'All lessons, all tracks' },
          { to: 'vault', label: 'The vault', icon: 'vault', note: 'Curated collections' },
          { to: 'paths', label: 'Learning paths', icon: 'route', note: 'Ordered, with a finish line' },
          { to: 'search', label: 'Search everything', icon: 'search', note: 'Full text, every page' }
        ]
      },
      {
        head: 'Yours',
        links: [
          { to: 'progress', label: 'Progress', icon: 'chart', note: 'Lessons done, tools used' },
          { to: 'saved', label: 'Saved', icon: 'bookmark', note: 'Everything you kept' },
          { to: 'about', label: 'What this is', icon: 'question', note: 'And what it is not' }
        ]
      }
    ]
  },
  { to: 'paths', label: 'Paths', icon: 'route' }
]

const DRAWER = [
  {
    head: 'Start here',
    links: [
      { to: '', label: 'Home', icon: 'home' },
      { to: 'situations', label: 'All situation playbooks', icon: 'alert' },
      { to: 'paths', label: 'Learning paths', icon: 'route' },
      { to: 'search', label: 'Search everything', icon: 'search' },
      { to: 'about', label: 'What this is', icon: 'question' }
    ]
  },
  {
    head: 'Situations by pressure',
    links: [
      { to: 'situations?cat=work', label: 'Work', icon: 'inbox' },
      { to: 'situations?cat=conflict', label: 'Conflict', icon: 'chat' },
      { to: 'situations?cat=money', label: 'Money', icon: 'money' },
      { to: 'situations?cat=people', label: 'People', icon: 'users' },
      { to: 'situations?cat=danger', label: 'Danger', icon: 'shield' },
      { to: 'situations?cat=crisis', label: 'Crisis', icon: 'alert' },
      { to: 'situations?cat=health', label: 'Health', icon: 'heart' },
      { to: 'situations?cat=digital', label: 'Digital', icon: 'cpu' },
      { to: 'situations?cat=life', label: 'Life events', icon: 'home' }
    ]
  },
  {
    head: 'Skills by area',
    links: [
      { to: 'skills/work', label: 'Work', icon: 'inbox' },
      { to: 'skills/career', label: 'Career', icon: 'target' },
      { to: 'skills/communication', label: 'Communication', icon: 'chat' },
      { to: 'skills/daily', label: 'Daily life', icon: 'home' },
      { to: 'skills/money', label: 'Money', icon: 'money' },
      { to: 'skills/learning', label: 'Learning & thinking', icon: 'brain' },
      { to: 'skills/digital', label: 'Digital life', icon: 'shield' },
      { to: 'skills', label: 'All skills', icon: 'list' }
    ]
  },
  {
    head: 'Practise',
    links: [
      { to: 'tools', label: 'The full toolkit', icon: 'tool' },
      { to: 'scenarios', label: 'Hard scenarios', icon: 'puzzle' },
      { to: 'trees', label: 'Decision trees', icon: 'route' }
    ]
  },
  {
    head: 'Read',
    links: [
      { to: 'library', label: 'The full library', icon: 'book' },
      { to: 'track/mastery', label: 'The mastery course', icon: 'book' },
      { to: 'track/workbook', label: 'The workbook', icon: 'pen' },
      { to: 'track/atlas', label: 'The atlas', icon: 'globe' },
      { to: 'track/mastery-life', label: 'Mastery of life', icon: 'compass' },
      { to: 'vault', label: 'The vault', icon: 'vault' }
    ]
  },
  {
    head: 'AI intelligence',
    links: [
      { to: 'ai', label: 'The method', icon: 'cpu' },
      { to: 'ai/context', label: 'Giving context', icon: 'layers' },
      { to: 'ai/verify', label: 'The verification firewall', icon: 'shield' },
      { to: 'ai/safety', label: 'Where not to use it', icon: 'alert' },
      { to: 'ai/library', label: 'Real-life problems', icon: 'inbox' },
      { to: 'ai/roleplay', label: 'Rehearsal room', icon: 'users' },
      { to: 'ai/builder', label: 'Workflow builder', icon: 'sliders' },
      { to: 'ai/battles', label: 'Battle tests', icon: 'flag' },
      { to: 'ai/score', label: 'Resourcefulness score', icon: 'chart' },
      { to: 'ai/prompts', label: 'Prompt vault', icon: 'spark' }
    ]
  },
  {
    head: 'Yours',
    links: [
      { to: 'progress', label: 'Progress', icon: 'chart' },
      { to: 'saved', label: 'Saved', icon: 'bookmark' }
    ]
  }
]

const TABS = [
  { to: '', label: 'Home', icon: 'home' },
  { to: 'situations', label: 'Situations', icon: 'alert' },
  { to: 'search', label: 'Search', icon: 'search' },
  { to: 'tools', label: 'Tools', icon: 'tool' },
  { to: 'progress', label: 'You', icon: 'chart' }
]

const FOOT = [
  {
    head: 'When something happens',
    links: [
      { to: 'situations', label: 'Situation playbooks' },
      { to: 'trees', label: 'Decision trees' },
      { to: 'scenarios', label: 'Hard scenarios' },
      { to: 'situations?cat=crisis', label: 'Crisis & danger' }
    ]
  },
  {
    head: 'Get better at things',
    links: [
      { to: 'skills', label: 'Skills by area' },
      { to: 'paths', label: 'Learning paths' },
      { to: 'library', label: 'The full library' },
      { to: 'vault', label: 'The vault' }
    ]
  },
  {
    head: 'Do the work',
    links: [
      { to: 'tools', label: 'The toolkit' },
      { to: 'tool/decision-matrix', label: 'Decision matrix' },
      { to: 'tool/money-triage', label: 'Money triage' },
      { to: 'tool/conversation-planner', label: 'Conversation planner' }
    ]
  },
  {
    head: 'AI & you',
    links: [
      { to: 'ai', label: 'AI intelligence' },
      { to: 'ai/prompts', label: 'Prompt vault' },
      { to: 'ai/verify', label: 'Verify before you trust' },
      { to: 'progress', label: 'Your progress' },
      { to: 'about', label: 'About & limits' }
    ]
  }
]

function chrome () {
  const app = $('#app')
  app.innerHTML = `
    <header class="nav" id="nav">
      <div class="shell nav-in">
        <a class="brand" href="${href('')}" aria-label="${SITE} — home">
          <span class="brand-mark" aria-hidden="true">TR</span>
          <span class="brand-txt">
            <span class="brand-name">The Resources</span>
            <span class="brand-sub">by Anik</span>
          </span>
        </a>

        <nav class="nav-links" aria-label="Main">
          ${NAV.map((n, i) => n.cols ? `
            <div class="nav-item" data-nav-item>
              <a class="nav-link has-panel" data-nav="${n.to}" href="${href(n.to)}"
                 aria-expanded="false" aria-controls="navpanel-${i}">${esc(n.label)}${I.chev}</a>
              <div class="nav-panel" id="navpanel-${i}" hidden>
                <div class="nav-panel-in">
                  <div class="nav-panel-lead">
                    <span class="nav-panel-eyebrow">${I[n.icon] || ''}${esc(n.label)}</span>
                    <p>${esc(n.blurb || '')}</p>
                    <a class="nav-panel-all" href="${href(n.to)}">Open ${esc(n.label.toLowerCase())} ${I.arrow}</a>
                  </div>
                  <div class="nav-panel-cols">
                    ${n.cols.map(c => `
                      <div class="nav-col">
                        <p class="nav-col-head">${esc(c.head)}</p>
                        ${c.links.map(l => `
                          <a class="nav-col-link" href="${href(l.to)}">
                            <span class="nav-col-ic">${I[l.icon] || I.circle}</span>
                            <span class="nav-col-txt">
                              <span class="nav-col-label">${esc(l.label)}</span>
                              ${l.note ? `<span class="nav-col-note">${esc(l.note)}</span>` : ''}
                            </span>
                          </a>`).join('')}
                      </div>`).join('')}
                  </div>
                </div>
              </div>
            </div>`
            : `<a class="nav-link" data-nav="${n.to}" href="${href(n.to)}">${esc(n.label)}</a>`).join('')}
        </nav>

        <div class="nav-right">
          <button class="navsearch" data-open-search aria-label="Search everything">
            ${I.search}<span>Search a situation…</span><kbd>/</kbd>
          </button>
          <button class="btn btn-icon" data-open-search aria-label="Search" style="display:none" data-only-sm>${I.search}</button>
          <button class="btn btn-icon" data-theme-toggle aria-label="Switch between light and dark">${I.sun}</button>
          <a class="btn btn-icon hide-sm" href="${href('progress')}" aria-label="Your progress">${I.chart}</a>
          <button class="btn btn-icon" data-open-drawer aria-label="Open menu" aria-expanded="false">${I.menu}</button>
        </div>
      </div>
    </header>

    <main id="main" tabindex="-1"></main>

    <footer class="foot">
      <div class="shell foot-in" style="--foot-cols:${FOOT.length}">
        <div class="foot-about">
          <a class="brand" href="${href('')}" style="margin-bottom:var(--s-4)">
            <span class="brand-mark" aria-hidden="true">TR</span>
            <span class="brand-txt"><span class="brand-name">The Resources</span><span class="brand-sub">by Anik</span></span>
          </a>
          <p>A practical system for becoming more capable in the real world. Situations you will actually meet, tools that actually compute, and an honest method for working with AI.</p>
          <p style="margin-top:var(--s-3)"><a href="${href('about')}">What this is, and what it is not →</a></p>
        </div>
        ${FOOT.map(c => `
          <div>
            <h4>${esc(c.head)}</h4>
            <ul>${c.links.map(l => `<li><a href="${href(l.to)}">${esc(l.label)}</a></li>`).join('')}</ul>
          </div>`).join('')}
      </div>
      <div class="shell foot-legal">
        <p>Everything you do here — progress, notes, saved pages, tool work — is stored only in this browser. There is no account and no server. Clearing your browser data clears it.</p>
        <p style="margin-top:8px">This is educational material, not professional legal, medical or financial advice. In an emergency, contact the emergency services.</p>
        <p style="margin-top:8px">© ${new Date().getFullYear()} ${esc(SITE)}. Built to be used, not admired.</p>
      </div>
    </footer>

    <nav class="tabbar" aria-label="Quick navigation">
      ${TABS.map(t => `<a data-nav="${t.to}" href="${href(t.to)}">${I[t.icon]}<span>${esc(t.label)}</span></a>`).join('')}
    </nav>

    <div class="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="Menu" aria-hidden="true">
      <div class="drawer-scrim" data-close-drawer></div>
      <div class="drawer-panel">
        <div class="drawer-head">
          <span class="t-label faint">Everything here</span>
          <button class="btn btn-icon" data-close-drawer aria-label="Close menu">${I.close}</button>
        </div>
        ${DRAWER.map(sec => `
          <p class="drawer-sec">${esc(sec.head)}</p>
          ${sec.links.map(l => `<a class="drawer-link" data-nav="${l.to}" href="${href(l.to)}">${I[l.icon]}<span>${esc(l.label)}</span></a>`).join('')}
        `).join('')}
        <p class="drawer-sec">Display</p>
        <button class="drawer-link" data-theme-toggle style="width:100%;text-align:left">${I.moon}<span>Switch light / dark</span></button>
      </div>
    </div>

    <div class="ovl" id="ovl" role="dialog" aria-modal="true" aria-label="Search" aria-hidden="true">
      <div class="ovl-box">
        <div class="ovl-in">
          ${I.search}
          <input id="ovl-q" type="search" autocomplete="off" spellcheck="false"
            placeholder="Describe what is happening…" aria-label="Search everything" />
          <button class="btn btn-icon" data-close-search aria-label="Close search">${I.close}</button>
        </div>
        <div class="ovl-filters" id="ovl-filters" role="group" aria-label="Filter by type"></div>
        <div class="ovl-res" id="ovl-res" role="listbox" aria-label="Results"></div>
        <div class="ovl-foot">
          <span><kbd>↑</kbd><kbd>↓</kbd> move</span>
          <span><kbd>Enter</kbd> open</span>
          <span><kbd>Esc</kbd> close</span>
          <span style="margin-left:auto"><a href="${href('search')}" data-close-search>Full search page →</a></span>
        </div>
      </div>
    </div>
  `
}

/* ---------- nav active state ---------- */
function markActive (path) {
  const seg = String(path || '').split('/')[0]
  $$('[data-nav]').forEach(a => {
    const to = a.dataset.nav
    const first = to.split('/')[0]
    const active = to === '' ? path === '' : (to === path || (first === seg && seg !== ''))
    a.classList.toggle('on', active)
    if (active) a.setAttribute('aria-current', 'page')
    else a.removeAttribute('aria-current')
  })
}

/* ---------- drawer ---------- */
let releaseDrawer = null
function openDrawer () {
  const d = $('#drawer')
  d.classList.add('open')
  d.setAttribute('aria-hidden', 'false')
  $('[data-open-drawer]').setAttribute('aria-expanded', 'true')
  document.body.style.overflow = 'hidden'
  releaseDrawer = trapFocus($('.drawer-panel'))
}
function closeDrawer () {
  const d = $('#drawer')
  if (!d.classList.contains('open')) return
  d.classList.remove('open')
  d.setAttribute('aria-hidden', 'true')
  $('[data-open-drawer]').setAttribute('aria-expanded', 'false')
  document.body.style.overflow = ''
  if (releaseDrawer) { releaseDrawer(); releaseDrawer = null }
}

/* ---------- desktop mega-menu panels ----------
   Hover opens after a short delay so a diagonal mouse path across
   the bar does not flash three panels. Focus opens immediately,
   because a keyboard user asking for the panel means it. Closing is
   also delayed: the gap between the trigger and the panel is real
   and the pointer crosses it. */
let panelTimer = null
/* Set while Escape is closing a panel, so the focus() that follows
   cannot re-trigger focusin and re-open it. */
let panelLock = false
function closePanels (except) {
  $$('[data-nav-item]').forEach(item => {
    if (item === except) return
    if (!item.classList.contains('open')) return
    item.classList.remove('open')
    item.querySelector('.nav-panel')?.setAttribute('hidden', '')
    item.querySelector('.has-panel')?.setAttribute('aria-expanded', 'false')
  })
}
function openPanel (item) {
  if (panelLock) return
  if (!item || item.classList.contains('open')) return closePanels(item)
  closePanels(item)
  item.classList.add('open')
  item.querySelector('.nav-panel')?.removeAttribute('hidden')
  item.querySelector('.has-panel')?.setAttribute('aria-expanded', 'true')
}
function wirePanels () {
  $$('[data-nav-item]').forEach(item => {
    item.addEventListener('pointerenter', () => {
      clearTimeout(panelTimer)
      panelTimer = setTimeout(() => openPanel(item), 90)
    })
    item.addEventListener('pointerleave', () => {
      clearTimeout(panelTimer)
      panelTimer = setTimeout(() => closePanels(null), 180)
    })
    /* focusin covers both the trigger and every link inside, so
       tabbing through the panel keeps it open. */
    item.addEventListener('focusin', () => { clearTimeout(panelTimer); openPanel(item) })
    item.addEventListener('focusout', e => {
      if (!item.contains(e.relatedTarget)) closePanels(null)
    })
    /* On a touch screen there is no hover, so the first tap on the
       trigger should reveal the panel rather than navigate. */
    item.querySelector('.has-panel')?.addEventListener('click', e => {
      if (matchMedia('(hover: hover)').matches) return
      if (!item.classList.contains('open')) { e.preventDefault(); openPanel(item) }
    })
  })
}

/* ============================================================
   2. SEARCH OVERLAY
   Fast, keyboard-first, and never blocks: the index builds on
   first open and the box says so while it does.
   ============================================================ */

let ovlKind = 'all'
let ovlRows = []
let ovlCur = -1
let releaseOvl = null

async function openSearch (seed = '') {
  const ovl = $('#ovl')
  ovl.classList.add('open')
  ovl.setAttribute('aria-hidden', 'false')
  document.body.style.overflow = 'hidden'
  const input = $('#ovl-q')
  if (seed) input.value = seed
  releaseOvl = trapFocus($('.ovl-box'))
  input.focus()
  input.select()

  if (!$('#ovl-res').dataset.ready) {
    $('#ovl-res').innerHTML = '<div class="ovl-group">Preparing the index…</div>'
    try {
      await buildIndex()
      $('#ovl-res').dataset.ready = '1'
    } catch {
      $('#ovl-res').innerHTML = `<div class="ovl-group">Search is unavailable offline.</div>
        <div style="padding:var(--s-4)"><a class="btn btn-soft btn-sm" href="${href('situations')}" data-close-search>Browse situations instead</a></div>`
      return
    }
  }
  drawSearch()
}

function closeSearch () {
  const ovl = $('#ovl')
  if (!ovl.classList.contains('open')) return
  ovl.classList.remove('open')
  ovl.setAttribute('aria-hidden', 'true')
  document.body.style.overflow = ''
  if (releaseOvl) { releaseOvl(); releaseOvl = null }
}

function drawSearch () {
  const q = $('#ovl-q').value.trim()
  const res = $('#ovl-res')
  const fil = $('#ovl-filters')

  if (q.length < 2) {
    ovlRows = []
    ovlCur = -1
    fil.innerHTML = ''
    const recent = store.recent.slice(0, 5)
    res.innerHTML = `
      ${recent.length ? `<div class="ovl-group">Where you were</div>
        ${recent.map(r => `<a class="res" href="${href(r.route)}" data-close-search>
          <span class="res-ic">${I[(KINDS[r.kind] || {}).icon] || I.file}</span>
          <span class="res-b"><span class="res-t">${esc(strip(r.title))}</span></span>
          <span class="res-k">${esc((KINDS[r.kind] || { label: 'Page' }).label)}</span></a>`).join('')}` : ''}
      <div class="ovl-group">Try describing it plainly</div>
      <div style="display:flex;flex-wrap:wrap;gap:var(--s-2);padding:var(--s-2) var(--s-4) var(--s-5)">
        ${SUGGESTIONS.map(s => `<button class="chip" data-seed="${esc(s)}">${esc(s)}</button>`).join('')}
      </div>`
    return
  }

  const counts = facets(q)
  const kinds = Object.keys(KINDS).filter(k => counts[k])
  if (ovlKind !== 'all' && !counts[ovlKind]) ovlKind = 'all'
  fil.innerHTML = [
    `<button class="chip${ovlKind === 'all' ? ' chip-solid' : ''}" data-kind="all" aria-pressed="${ovlKind === 'all'}">Everything <span class="faint">${counts.all || 0}</span></button>`,
    ...kinds.map(k => `<button class="chip${ovlKind === k ? ' chip-solid' : ''}" data-kind="${k}" aria-pressed="${ovlKind === k}">${esc(KINDS[k].label)} <span class="faint">${counts[k]}</span></button>`)
  ].join('')

  const hits = search(q, { kind: ovlKind, limit: 24 })
  ovlRows = hits
  ovlCur = hits.length ? 0 : -1

  if (!hits.length) {
    res.innerHTML = `<div style="padding:var(--s-7) var(--s-5);text-align:center">
      <p class="t-body">Nothing matched <b>${esc(q)}</b>.</p>
      <p class="t-small muted" style="margin-top:8px">Try fewer words, or the plain words you would use out loud.</p>
      <div style="display:flex;gap:var(--s-2);justify-content:center;flex-wrap:wrap;margin-top:var(--s-5)">
        <a class="btn btn-soft btn-sm" href="${href('situations')}" data-close-search>All situations</a>
        <a class="btn btn-ghost btn-sm" href="${href('library')}" data-close-search>Browse the library</a>
      </div></div>`
    return
  }

  let out = ''
  let group = null
  hits.forEach((d, i) => {
    const g = d.group || (KINDS[d.kind] || { label: 'Results' }).label
    if (g !== group) { group = g; out += `<div class="ovl-group">${esc(g)}</div>` }
    out += `<a class="res${i === ovlCur ? ' cur' : ''}" role="option" aria-selected="${i === ovlCur}"
      href="${href(d.route)}" data-close-search data-i="${i}">
      <span class="res-ic">${I[(KINDS[d.kind] || {}).icon] || I.file}</span>
      <span class="res-b">
        <span class="res-t">${highlight(esc(strip(d.title)), q)}</span>
        ${d.sub ? `<span class="res-s">${highlight(esc(strip(d.sub)), q)}</span>` : ''}
      </span>
      <span class="res-k">${esc((KINDS[d.kind] || { label: '' }).label)}</span></a>`
  })
  res.innerHTML = out
}

function moveSearchCursor (delta) {
  if (!ovlRows.length) return
  ovlCur = (ovlCur + delta + ovlRows.length) % ovlRows.length
  $$('#ovl-res .res').forEach((n, i) => {
    const on = Number(n.dataset.i) === ovlCur
    n.classList.toggle('cur', on)
    n.setAttribute('aria-selected', String(on))
    if (on) n.scrollIntoView({ block: 'nearest' })
  })
}

/* ============================================================
   3. RENDERER
   ============================================================ */

let cleanup = null
let lastRecent = null

async function renderer (view, ctx, prev) {
  if (typeof cleanup === 'function') { try { cleanup() } catch {} }
  cleanup = null

  const main = $('#main')

  /* Title (§54) */
  document.title = view.title ? `${strip(view.title)} · ${SITE}` : `${SITE} — become more capable in the real world`

  /* Error and not-found both arrive as a view; neither may be blank (§58). */
  let html = view.html
  if (view.error) {
    html = `<div class="shell band">
      <div class="state">
        <span class="state-icon">${I.alert}</span>
        <h3>Something went wrong on this page</h3>
        <p>${esc(view.error && view.error.message ? view.error.message : 'The page could not be built.')}</p>
        <div class="row-wrap" style="gap:var(--s-3);justify-content:center;margin-top:var(--s-5)">
          <button class="btn btn-soft" data-reload>Try again</button>
          <a class="btn btn-ghost" href="${href('')}">Go to the start</a>
        </div>
      </div></div>`
  } else if (html == null) {
    /* No handler produced markup — fall back to the real 404 view. */
    const { notFound } = await import('./views/about.js')
    const nf = await notFound(ctx)
    html = nf.html
    document.title = `Page not found · ${SITE}`
    view = { ...view, ...nf }
  }

  main.dataset.accent = view.accent || 'forest'
  main.innerHTML = html

  markActive(ctx.path)
  closeDrawer()
  closePanels(null)
  closeSearch()

  if (view.recent && view.recent.id !== (lastRecent && lastRecent.id)) {
    lastRecent = view.recent
    pushRecent(view.recent)
  }
  if (view.recent) lastRecent = view.recent

  if (typeof view.mount === 'function') {
    try { cleanup = await view.mount(main) } catch (err) { console.error('[mount]', err) }
  }

  observeRise(main)
  restoreScroll(ctx, prev)

  /* Announce the new page for screen readers without stealing focus
     from anything the mount hook just focused. */
  if (prev && !document.activeElement.closest('#main')) main.focus({ preventScroll: true })
}

/* ============================================================
   4. ROUTES
   Order matters: the router returns the first pattern that
   matches, so the literal ai/* pages are registered before the
   ai/:section catch-all.
   ============================================================ */

const lazy = (loader, key = 'default') => async ctx => {
  const mod = await loader()
  const fn = mod[key]
  if (typeof fn !== 'function') throw new Error(`Route handler "${key}" is missing.`)
  return fn(ctx)
}

const V = {
  home: () => import('./views/home.js'),
  situations: () => import('./views/situations.js'),
  situation: () => import('./views/situation.js'),
  skills: () => import('./views/skills.js'),
  reader: () => import('./views/reader.js'),
  tools: () => import('./views/tools.js'),
  scenarios: () => import('./views/scenarios.js'),
  trees: () => import('./views/trees.js'),
  paths: () => import('./views/paths.js'),
  library: () => import('./views/library.js'),
  vault: () => import('./views/vault.js'),
  ai: () => import('./views/ai.js'),
  aiLab: () => import('./views/ai-lab.js'),
  progress: () => import('./views/progress.js'),
  search: () => import('./views/search.js'),
  about: () => import('./views/about.js')
}

function routes () {
  register('', lazy(V.home))

  register('situations', lazy(V.situations))
  register('situation/:id', lazy(V.situation))

  register('skills', lazy(V.skills))
  register('skills/:domain', lazy(V.skills))
  register('skill/:id', lazy(V.skills, 'skillView'))

  register('read/:track/:id', lazy(V.reader))

  register('tools', lazy(V.tools))
  register('tool/:id', lazy(V.tools, 'toolView'))

  register('scenarios', lazy(V.scenarios))
  register('scenario/:id', lazy(V.scenarios, 'scenarioView'))

  register('trees', lazy(V.trees))
  register('tree/:id', lazy(V.trees, 'treeView'))

  register('paths', lazy(V.paths))
  register('path/:id', lazy(V.paths, 'pathView'))

  register('library', lazy(V.library))
  register('track/:id', lazy(V.library, 'trackView'))

  register('vault', lazy(V.vault))
  register('vault/:id', lazy(V.vault, 'collectionView'))
  register('vault/:coll/:entry', lazy(V.vault, 'entryView'))

  /* --- AI: literals first --- */
  register('ai', lazy(V.ai))
  register('ai/library', lazy(V.ai, 'aiLibrary'))
  register('ai/prompts', lazy(V.ai, 'aiPrompts'))
  register('ai/roleplay', lazy(V.aiLab, 'aiRoleplay'))
  register('ai/builder', lazy(V.aiLab, 'aiBuilder'))
  register('ai/battles', lazy(V.aiLab, 'aiBattles'))
  register('ai/score', lazy(V.aiLab, 'aiScore'))
  register('ai/challenge', lazy(V.aiLab, 'aiChallenge'))
  register('ai/problem/:id', lazy(V.ai, 'aiProblem'))
  register('ai/office/:id', lazy(V.ai, 'aiOffice'))
  register('ai/:section', lazy(V.ai, 'aiFramework'))

  register('progress', lazy(V.progress))
  register('saved', lazy(V.progress, 'saved'))

  register('search', lazy(V.search))
  register('about', lazy(V.about))
}

/* ============================================================
   5. DELEGATED BEHAVIOUR
   Six behaviours every view can emit without owning a listener.
   ============================================================ */

/* A save button carries only an id, because that is all a view
   knows at build time. The kind is recoverable from the id prefix
   and the title/route from the page the button lives on. */
const KIND_OF = [
  ['ai-problem:', 'ai'], ['ai-office:', 'ai'], ['ai:', 'ai'],
  ['skill:', 'skill'], ['tool:', 'tool'], ['tree:', 'tree'],
  ['scenario:', 'scenario'], ['path:', 'path'], ['track:', 'collection'],
  ['page:', 'page'], ['battle:', 'ai']
]

function saveItem (id) {
  const ctx = currentRoute() || { path: '' }
  const existing = store.saved.find(s => s.id === id)
  if (existing) return existing
  let kind = null
  for (const [p, k] of KIND_OF) if (id.startsWith(p)) { kind = k; break }
  if (!kind && lastRecent && lastRecent.id === id) kind = lastRecent.kind
  if (!kind) kind = (lastRecent && lastRecent.kind) || 'page'
  const title = (lastRecent && lastRecent.id === id && lastRecent.title)
    || $('#main h1')?.textContent?.trim()
    || document.title.replace(` · ${SITE}`, '')
  return { id, kind, title, route: ctx.path }
}

function relabelSave (btn, saved) {
  btn.setAttribute('aria-pressed', String(saved))
  btn.innerHTML = `${saved ? I.starFill : I.star}<span>${saved ? 'Saved' : 'Save'}</span>`
}
function relabelDone (btn, done) {
  btn.setAttribute('aria-pressed', String(done))
  btn.innerHTML = `${done ? I.circleCheck : I.circle}<span>${done ? 'Completed' : 'Mark complete'}</span>`
}

function delegate () {
  const app = $('#app')

  /* jump-to-section. A real href="#id" would overwrite the routing
     hash and 404 the page, so these scroll manually and leave the
     URL alone. Space/Enter work because they are role=button. */
  const jumpTo = id => {
    const el = document.getElementById(id)
    if (!el) return
    /* Offset by the sticky nav, or the heading hides behind it. */
    const navH = $('#nav')?.getBoundingClientRect().height || 0
    const y = el.getBoundingClientRect().top + window.scrollY - navH - 12
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
    /* Make the target focusable so screen readers follow the jump. */
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1')
    el.focus({ preventScroll: true })
  }
  on(app, 'click', '[data-jump]', (e, a) => { e.preventDefault(); jumpTo(a.dataset.jump) })
  on(app, 'keydown', '[data-jump]', (e, a) => {
    if (e.key !== 'Enter' && e.key !== ' ') return
    e.preventDefault(); jumpTo(a.dataset.jump)
  })

  /* save */
  on(app, 'click', '[data-save]', (e, btn) => {
    e.preventDefault()
    const id = btn.dataset.save
    const now = toggleSaved(saveItem(id))
    $$(`[data-save="${CSS.escape(id)}"]`).forEach(b => relabelSave(b, now))
    toast(now ? 'Saved to your list' : 'Removed from saved', now ? 'ok' : '')
  })

  /* complete */
  on(app, 'click', '[data-done]', (e, btn) => {
    e.preventDefault()
    const id = btn.dataset.done
    const now = toggleDone(id)
    $$(`[data-done="${CSS.escape(id)}"]`).forEach(b => relabelDone(b, now))
    toast(now ? 'Marked complete' : 'Marked not complete', now ? 'ok' : '')
  })

  /* checkbox form of complete (reader missions) */
  on(app, 'change', '[data-done-box]', (e, box) => {
    setDone(box.dataset.doneBox, box.checked)
    box.closest('.check')?.classList.toggle('done', box.checked)
  })

  /* copy */
  on(app, 'click', '[data-copy]', async (e, btn) => {
    e.preventDefault()
    const ok = await copy(btn.dataset.copy)
    toast(ok ? 'Copied — paste it where you need it' : 'Could not copy. Select the text instead.', ok ? 'ok' : '')
  })

  /* notes (debounced per key so typing is never lost) */
  const savers = new Map()
  on(app, 'input', '[data-note]', (e, field) => {
    const key = field.dataset.note
    if (!savers.has(key)) savers.set(key, debounce(v => setNote(key, v), 420))
    savers.get(key)(field.value)
  })

  /* retry */
  on(app, 'click', '[data-reload]', e => {
    e.preventDefault()
    const c = currentRoute()
    go(c ? c.path + (Object.keys(c.query).length ? '?' + new URLSearchParams(c.query) : '') : '')
  })

  /* ---- chrome ---- */
  on(app, 'click', '[data-theme-toggle]', () => {
    const t = toggleTheme()
    $$('[data-theme-toggle]').forEach(b => {
      if (b.classList.contains('btn-icon')) b.innerHTML = t === 'dark' ? I.moon : I.sun
    })
    toast(t === 'dark' ? 'Dark' : 'Light')
  })
  on(app, 'click', '[data-open-drawer]', openDrawer)
  on(app, 'click', '[data-close-drawer]', closeDrawer)
  on(app, 'click', '.drawer-link', closeDrawer)
  on(app, 'click', '[data-open-search]', e => { e.preventDefault(); openSearch() })
  on(app, 'click', '[data-close-search]', closeSearch)

  /* overlay */
  const ovl = $('#ovl')
  const redraw = debounce(drawSearch, 120)
  $('#ovl-q').addEventListener('input', redraw)
  on(ovl, 'click', '[data-kind]', (e, b) => { ovlKind = b.dataset.kind; drawSearch() })
  on(ovl, 'click', '[data-seed]', (e, b) => { $('#ovl-q').value = b.dataset.seed; drawSearch(); $('#ovl-q').focus() })
  ovl.addEventListener('mousedown', e => { if (e.target === ovl) closeSearch() })
  $('#ovl-q').addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); moveSearchCursor(1) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); moveSearchCursor(-1) }
    else if (e.key === 'Enter') {
      e.preventDefault()
      const pick = ovlRows[ovlCur]
      const q = $('#ovl-q').value.trim()
      closeSearch()
      if (pick) go(pick.route)
      else if (q.length >= 2) go('search?q=' + encodeURIComponent(q))
    }
  })

  /* global keys */
  addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      /* If a mega-menu is open, Escape belongs to it and focus goes
         back to the trigger that opened it. */
      const open = $('[data-nav-item].open')
      if (open) {
        /* Only pull focus back to the trigger if focus was actually
           inside the panel — otherwise focusing it fires focusin and
           immediately re-opens the thing we just closed. */
        const inside = open.contains(document.activeElement)
        panelLock = true
        closePanels(null)
        if (inside) open.querySelector('.has-panel')?.focus()
        setTimeout(() => { panelLock = false }, 0)
        return
      }
      closeSearch(); closeDrawer(); return
    }
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable
    if (typing) return
    if (e.key === '/' || (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey))) {
      e.preventDefault(); openSearch()
    }
  })

  /* skip link — lives outside #app so it survives the chrome build,
     and moves focus rather than changing the hash (which is a route). */
  $('#skip')?.addEventListener('click', () => {
    const m = $('#main')
    m.focus({ preventScroll: false })
    m.scrollIntoView({ block: 'start' })
  })

  /* nav shadow once the page has moved */
  const nav = $('#nav')
  const onScroll = () => nav.classList.toggle('stuck', window.scrollY > 6)
  addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  /* keep save/done buttons truthful if another tab changed storage */
  onChange(key => {
    if (key === 'saved') $$('[data-save]').forEach(b => relabelSave(b, isSaved(b.dataset.save)))
    if (key === 'done') $$('[data-done]').forEach(b => relabelDone(b, isDone(b.dataset.done)))
  })
}

/* ============================================================
   6. BOOT
   ============================================================ */

function boot () {
  initTheme()
  applyScale()
  chrome()

  const t = document.documentElement.dataset.theme
  $$('[data-theme-toggle]').forEach(b => {
    if (b.classList.contains('btn-icon')) b.innerHTML = t === 'dark' ? I.moon : I.sun
  })

  routes()
  delegate()
  wirePanels()
  setRenderer(renderer)

  /* First hash: land on home rather than an empty address. */
  if (!location.hash) history.replaceState(null, '', href(''))

  start()
  markSeen()

  /* Drop the boot screen once the first view is in the DOM. */
  requestAnimationFrame(() => {
    const b = $('#boot')
    if (!b) return
    b.classList.add('gone')
    setTimeout(() => b.remove(), 400)
  })

  /* Warm the search corpus while the user reads. prefetchSearch
     schedules its own idle work and returns nothing. */
  setTimeout(prefetchSearch, 1400)
}

boot()

/* Deep-link helper used by views that want a shareable URL without
   a re-render (search page). Re-exported so nothing has to reach
   into the router directly. */
export { syncUrl, parse }
