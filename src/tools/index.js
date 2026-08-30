/* =============================================================
   TOOL REGISTRY

   Twenty-one working tools. Definitions are lazy-loaded so the
   toolkit index page does not pull every tool's code.
   ============================================================= */

/** Lightweight metadata — safe to import anywhere, no tool code pulled in. */
export const TOOL_META = [
  { id: 'decision-matrix', name: 'Decision Matrix', group: 'Deciding', icon: 'scale', accent: 'forest',
    blurb: 'Score real options against criteria you weight yourself.' },
  { id: 'risk-analyzer', name: 'Risk Analyzer', group: 'Deciding', icon: 'alert', accent: 'signal',
    blurb: 'Rank what could go wrong, then separate recoverable from not.' },
  { id: 'opportunity-cost', name: 'Opportunity Cost Analyzer', group: 'Deciding', icon: 'money', accent: 'council',
    blurb: 'Price what you give up, not just what you spend.' },
  { id: 'career-decision', name: 'Career Decision Tool', group: 'Deciding', icon: 'route', accent: 'atlas',
    blurb: 'Weigh a role change on what compounds, not what flatters.' },
  { id: 'scenario-simulator', name: 'Scenario Simulator', group: 'Deciding', icon: 'shuffle', accent: 'atlas',
    blurb: 'Run a plan through good, likely and bad futures before committing.' },
  { id: 'pre-mortem', name: 'Pre-Mortem', group: 'Deciding', icon: 'alert', accent: 'signal',
    blurb: 'Assume it already failed, then work backwards to what you would change now.' },

  { id: 'priority-matrix', name: 'Priority Matrix', group: 'Working', icon: 'grid', accent: 'clay',
    blurb: 'Sort what you are carrying by importance against urgency.' },
  { id: 'task-decomposition', name: 'Task Decomposition', group: 'Working', icon: 'layers', accent: 'forest',
    blurb: 'Break something too big to start into steps you can actually begin.' },
  { id: 'time-audit', name: 'Time Audit', group: 'Working', icon: 'clock', accent: 'atlas',
    blurb: 'Find where the week actually goes, and what it is worth.' },

  { id: 'meeting-planner', name: 'Meeting Planner', group: 'Communicating', icon: 'users', accent: 'atlas',
    blurb: 'Establish whether the meeting is needed, then make it short.' },
  { id: 'conversation-planner', name: 'Conversation Planner', group: 'Communicating', icon: 'chat', accent: 'clay',
    blurb: 'Prepare the opening line, the outcome, and your answer to pushback.' },
  { id: 'negotiation-planner', name: 'Negotiation Planner', group: 'Communicating', icon: 'scale', accent: 'council',
    blurb: 'Set your number, your walk-away, and the non-money axes.' },
  { id: 'email-pressure-test', name: 'Message Pressure Test', group: 'Communicating', icon: 'shield', accent: 'clay',
    blurb: 'Check a difficult email before you send it, against the things a hostile reader notices.' },

  { id: 'money-triage', name: 'Money Triage', group: 'Money', icon: 'money', accent: 'signal',
    blurb: 'Work out which bills can actually hurt you, and in what order to pay them.' },

  { id: 'goal-planner', name: 'Goal Planner', group: 'Building', icon: 'target', accent: 'forest',
    blurb: 'Turn an intention into a measure, milestones and a weekly action.' },
  { id: 'habit-planner', name: 'Habit Planner', group: 'Building', icon: 'refresh', accent: 'clay',
    blurb: 'Design a habit around a trigger, a floor and a fourteen-day log.' },
  { id: 'learning-planner', name: 'Learning Planner', group: 'Building', icon: 'brain', accent: 'council',
    blurb: 'Plan a skill around an output, not a syllabus.' },
  { id: 'personal-swot', name: 'Personal SWOT', group: 'Building', icon: 'compass', accent: 'forest',
    blurb: 'An honest inventory that ends in two concrete moves.' },
  { id: 'reflection', name: 'Reflection Tool', group: 'Building', icon: 'pen', accent: 'council',
    blurb: 'Review a period honestly and leave with one change.' },

  { id: 'credibility-checker', name: 'Information Credibility Checker', group: 'Thinking', icon: 'shield', accent: 'atlas',
    blurb: 'Work out how much weight a claim can safely carry.' },
  { id: 'problem-canvas', name: 'Problem-Solving Canvas', group: 'Thinking', icon: 'puzzle', accent: 'clay',
    blurb: 'State the problem properly, then find where it actually moves.' }
]

export const TOOL_GROUPS = [
  { id: 'Deciding', blurb: 'For when there is a choice to make and no obvious answer.' },
  { id: 'Working', blurb: 'For when there is too much and no order to it.' },
  { id: 'Communicating', blurb: 'For the conversations that decide things.' },
  { id: 'Money', blurb: 'For when the numbers are the problem and the order of payment matters.' },
  { id: 'Building', blurb: 'For capability that accumulates rather than resets.' },
  { id: 'Thinking', blurb: 'For working out what is actually true and actually wrong.' }
]

export const toolMeta = id => TOOL_META.find(t => t.id === id) || null
export const toolsOfGroup = g => TOOL_META.filter(t => t.group === g)
export const TOOL_IDS = TOOL_META.map(t => t.id)

/* Static map so Vite can analyse and split each tool into the tools chunk. */
const LOADERS = {
  'decision-matrix': () => import('./decision-matrix.js'),
  'priority-matrix': () => import('./priority-matrix.js'),
  'task-decomposition': () => import('./task-decomposition.js'),
  'risk-analyzer': () => import('./risk-analyzer.js'),
  'opportunity-cost': () => import('./opportunity-cost.js'),
  'goal-planner': () => import('./goal-planner.js'),
  'habit-planner': () => import('./habit-planner.js'),
  'meeting-planner': () => import('./meeting-planner.js'),
  'conversation-planner': () => import('./conversation-planner.js'),
  'negotiation-planner': () => import('./negotiation-planner.js'),
  'learning-planner': () => import('./learning-planner.js'),
  'career-decision': () => import('./career-decision.js'),
  'personal-swot': () => import('./personal-swot.js'),
  'credibility-checker': () => import('./credibility-checker.js'),
  'problem-canvas': () => import('./problem-canvas.js'),
  'reflection': () => import('./reflection.js'),
  'scenario-simulator': () => import('./scenario-simulator.js'),
  'pre-mortem': () => import('./pre-mortem.js'),
  'time-audit': () => import('./time-audit.js'),
  'email-pressure-test': () => import('./email-pressure-test.js'),
  'money-triage': () => import('./money-triage.js')
}

/** Load a tool definition. Throws if the id is unknown. */
export async function loadTool (id) {
  const l = LOADERS[id]
  if (!l) throw new Error(`Unknown tool: ${id}`)
  const mod = await l()
  return mod.default
}

/** Search documents for the toolkit (§21). */
export const searchDocs = () => TOOL_META.map(t => ({
  kind: 'tool',
  title: t.name,
  sub: t.blurb,
  route: `tool/${t.id}`,
  group: 'Toolkit · ' + t.group,
  body: `${t.blurb} ${t.group} tool worksheet calculator planner`
}))
