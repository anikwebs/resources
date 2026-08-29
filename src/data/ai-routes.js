/* =============================================================
   AI ROUTE TABLE

   A single flat inventory of every addressable page inside the AI
   Intelligence section, with a human title and a one-line summary.

   It is DERIVED, not hand-written. The frameworks in ai.js and the
   problem library in ai-library.js already describe themselves for
   search; this file reuses those descriptions so a route can never
   drift from the page it points at. Two hub routes that have no
   underlying record (the library index and the prompt vault) are
   added by hand.

   Consumers: views/paths.js (stage "AI move" rails), views/ai.js
   (hub listing), and anything that needs to turn a bare route
   string like 'ai/verify' into something a person can read.
   ============================================================= */

import { searchDocs as frameworkDocs } from './ai.js'
import { searchDocs as libraryDocs } from './ai-library.js'

/* Hubs. These are navigation surfaces rather than content records,
   so they are declared directly. */
const HUBS = [
  {
    route: 'ai',
    title: 'AI Intelligence',
    sub: 'The whole system: workflow, verification, leverage, rehearsal',
    group: 'AI Intelligence'
  },
  {
    route: 'ai/library',
    title: 'Real-Life Problem Library',
    sub: 'Search a problem you actually have and get the approach',
    group: 'AI Intelligence'
  },
  {
    route: 'ai/prompts',
    title: 'The Prompt Vault',
    sub: 'Every prompt in the corpus, copyable and searchable',
    group: 'AI Intelligence'
  }
]

const toRoute = d => ({
  route: d.route,
  title: d.title,
  sub: d.sub,
  group: d.group || 'AI Intelligence'
})

/* Frameworks first (§26–§45 order is preserved by ai.js), then the
   hubs, then the problem library and office masterclasses. */
export const AI_ROUTES = [
  ...frameworkDocs().map(toRoute),
  ...HUBS,
  ...libraryDocs().map(toRoute)
]

/* Only the thirteen framework pages — used by the AI hub to render
   the core sequence without the long problem tail. */
export const AI_FRAMEWORK_ROUTES = frameworkDocs().map(toRoute)

const BY_ROUTE = new Map(AI_ROUTES.map(r => [r.route, r]))

export const aiRoute = route => BY_ROUTE.get(String(route || '').replace(/^#?\/?/, ''))

export const aiRouteTitle = route => {
  const r = aiRoute(route)
  return r ? r.title : String(route || '')
}

/* Resolve a list of route strings to route records, silently dropping
   anything that no longer exists. Callers render whatever survives. */
export const resolveAiRoutes = list =>
  (list || []).map(r => BY_ROUTE.get(r)).filter(Boolean)

export default AI_ROUTES
