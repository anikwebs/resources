# The Resources by Anik

**A practical system for becoming more capable in the real world.**

Not a course. Not a collection of quotes. Not a prompt directory. It is a
working library of situations you will actually face — a manager shouting at
you, a salary you have to name, information you cannot verify, a decision you
cannot undo — together with the reasoning, the words to say, the traps, and the
tools to work it through.

Everything runs in the browser. There is no account, no server, and no network
call after the page loads. Your progress lives in your own browser's storage.

---

## Philosophy

Four rules govern every page in this project.

**Specific over generic.** "Communicate clearly" is not advice. "Say: *I want to
get this right, so I am going to repeat back what I heard*" is.

**Examples over abstraction.** Every principle is attached to a situation with
names, stakes, and a script.

**Actions over motivation.** Each piece ends with something to do now, not
something to feel.

**Trade-offs over rules.** Real situations do not have correct answers, they
have costs. The material names the cost of each move instead of pretending one
option is free.

Two consequences of those rules worth stating plainly:

- **The scenarios are not designed to be guessable.** The plausible-looking
  answer is often the expensive one. That is the point — you commit to a choice
  *before* the reasoning is revealed.
- **The AI sections do not call an AI.** Role-play and simulated critique are
  produced by deterministic logic in your browser and are labelled as
  simulations wherever they appear. Nothing here pretends to be a live model.

---

## What is inside

| Area | Contents |
|---|---|
| **Situations** | 51 full playbooks across work, career, communication, daily life, money, learning and digital life |
| **Skills** | 29 skills organised by domain, each with progressive depth |
| **Library** | 239 lessons across 4 tracks, plus a 36-collection reference vault |
| **Toolkit** | 17 tools that actually compute and save their state |
| **Scenarios** | 8 "what would you do?" exercises with consequences, trade-offs, hidden issues and expert reasoning |
| **Decision trees** | 11 guided walkthroughs (say yes, say no, quit, negotiate, escalate, trust this information, use AI…) |
| **Learning paths** | 10 sequenced paths combining lessons, situations, tools, practice and reflection |
| **AI intelligence core** | An 11-step working method, a 29-problem library, an office masterclass, a role-play engine, a workflow builder, verification discipline, 8 battle tests, a 10-dimension resourcefulness score and a master challenge |
| **Progress** | Completions, saved items, notes, active paths, tools used, scenario and battle records — all exportable |

### The situation engine

Every one of the 51 situations is written to the same twelve-part structure, so
you always know where to look: **the situation · the real problem · what matters
· possible moves · best approach · what to say · what not to do · the hidden
layer · the edge case · recovery · takeaway · do this now.**

### The seventeen tools

Decision matrix · priority matrix · risk analyser · opportunity cost ·
problem canvas · task decomposition · conversation planner · negotiation
planner · meeting planner · career decision · personal SWOT · goal planner ·
habit planner · learning planner · credibility checker · scenario simulator ·
reflection.

Each one takes real input, computes a real result, and remembers what you
entered when you come back.

---

## Architecture

```
the-resources-by-anik/
├── .github/workflows/deploy.yml   GitHub Pages build + deploy
├── index.html                     single entry; pre-paint theme, boot state
├── vite.config.js                 base path, chunking
├── package.json / package-lock.json
├── public/
│   ├── content/                   the content corpus (static JSON)
│   ├── favicon.svg  icon.svg  site.webmanifest  .nojekyll
├── scripts/
│   └── verify-content.mjs         validates the corpus against the code
└── src/
    ├── main.js                    chrome, router registration, delegation, boot
    ├── core/                      router · store · data · search · dom · icons
    ├── data/                      skills · paths · scenarios · trees · ai
    ├── tools/                     kit.js + 17 tool modules
    ├── views/                     17 view modules
    └── styles/                    tokens · base · components · app
```

**A static single-page app, no framework.** Vanilla ES modules and Vite. The
reason is deployment: GitHub Pages serves static files and cannot rewrite URLs,
so there is no server-side layer to depend on.

**Hash routing, deliberately.** `#/situation/work-boss-shouting` survives a
refresh and can be shared. Path-based routes would 404 on GitHub Pages the
moment anyone reloaded a deep link.

**Views are pure functions.** Each returns `{ title, html, accent, mount }`.
`main.js` owns the shell — navigation, search overlay, theme, delegated
behaviour — and swaps only the contents of `<main>`. A view's optional `mount`
returns its own cleanup function.

**Content is data, not markup.** The corpus lives in `public/content/` as JSON
and is lazy-fetched, cached and in-flight-deduped. Adding a lesson does not mean
touching a component. `npm run content:situations` validates the whole corpus
against what the code expects.

**Assets resolve through one chokepoint.** `asset()` in `src/core/data.js`
prefixes `import.meta.env.BASE_URL`, so the same build works at `/` or at
`/any-repo-name/`. There are no root-relative references anywhere in `src/`.

**Splitting is per tool.** Views and static data are grouped, but each of the 17
tools stays its own lazy chunk — reading a playbook should not download the
negotiation planner.

**State is local and guarded.** Everything is written under the `rha:` prefix in
`localStorage`, and every read and write is wrapped, so a browser with storage
disabled loses persistence but keeps working.

**Accessibility is structural.** Semantic landmarks, a real skip control, a
visible focus ring, `prefers-reduced-motion` honoured, and every control in
every tool form given a programmatic name by a single post-draw pass rather than
by hand-threading ids through 17 files.

### Stack

Vite 5 · vanilla JavaScript (ES2020 modules) · hand-written CSS with a
token-based design system · `localStorage` · GitHub Actions → GitHub Pages.
No runtime dependencies at all — `vite` is the only entry in
`devDependencies`.

---

## Running it locally

Node 18 or newer.

```bash
npm ci          # install exactly what the lockfile pins
npm run dev     # dev server at http://localhost:3000  (served at /)
```

### Production build

```bash
npm run build   # → dist/
```

The build defaults to the base path `/the-resources-by-anik/`. To build for a
repository with a different name:

```bash
BASE_PATH=/my-repo-name/ npm run build
```

### Preview the production build

```bash
npm run preview   # http://localhost:4173/the-resources-by-anik/
```

`preview` deliberately serves under the real base path, so it exercises exactly
the URLs GitHub Pages will. Note the trailing path — opening the bare root will
correctly show nothing.

### Validate the content corpus

```bash
npm run content:situations
```

---

## Deploying to GitHub Pages

The workflow is already written. Nothing needs editing.

1. **Create a repository** on GitHub and push this project to the `main` branch.

   ```bash
   git init
   git add .
   git commit -m "The Resources by Anik"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

2. **Turn on Pages.** In the repository: **Settings → Pages → Build and
   deployment → Source**, choose **GitHub Actions**.

3. **That is all.** The push already triggered
   `.github/workflows/deploy.yml`, which runs `npm ci`, builds with the base
   path derived automatically from your repository name, and publishes. Watch it
   under the **Actions** tab.

Your site will be at:

```
https://YOUR-USERNAME.github.io/YOUR-REPO/
```

Every later push to `main` redeploys. You can also trigger a deploy by hand from
the Actions tab (`workflow_dispatch`).

**Why it works with any repository name:** the workflow sets
`BASE_PATH="/${GITHUB_REPOSITORY#*/}/"` before building, so renaming the repo
needs no code change. It also asserts that `dist/index.html` and
`dist/content/manifest.json` exist before publishing, and writes `.nojekyll` so
Pages serves the `assets/` directory instead of hiding it.

### If you want it at the domain root

For a user site (`YOUR-USERNAME.github.io`) or a custom domain, build with
`BASE_PATH=/`. Change that one line in the workflow's build step.

---

## Known limitations

These are deliberate consequences of the design, not unfinished work.

- **Progress is per browser.** There is no account and no sync. Progress saved
  in Chrome will not appear in Firefox, or on your phone. The progress page can
  export and re-import a backup file, which is the intended way to move.
- **Clearing site data erases progress.** Private/incognito windows lose it when
  closed.
- **The AI sections are a method, not a model.** They teach how to work with AI
  and simulate critique deterministically. Nothing calls a live model, and every
  simulated response says so.
- **URLs contain a `#`.** The cost of deep links that survive a refresh on
  static hosting.
- **No server-side rendering, so no crawler-visible content.** The page ships
  real `<title>` and description metadata and a `<noscript>` explanation, but
  search engines that do not execute JavaScript will not see the library.
- **JavaScript is required.** With it disabled you get an explanatory page.
- **The content is a considered opinion, not professional advice.** Legal,
  medical, financial and immigration situations need a qualified human. The
  footer says so on every page.
- **Not translated.** English only.

---

## Credits

Built and written by **Anik**.

Fonts loaded from Google Fonts: Fraunces, Source Serif 4, Instrument Sans,
JetBrains Mono. No other third-party code is used at runtime.
