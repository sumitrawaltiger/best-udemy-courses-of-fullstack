import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Cost is a constraint', text: 'budgeted execution is required to ship agents at scale' },
  { title: 'Track cost per workflow', text: 'different tasks have different cost profiles; measure them' },
  { title: 'Token-aware routing', text: 'route to smaller models when possible and reserve premium calls for hard cases' },
  { title: 'Tool cost matters', text: 'APIs, search, and DB calls can dominate cost if uncontrolled' },
  { title: 'Budget enforcement', text: 'hard caps prevent infinite loops and runaway retries' },
  { title: 'Cache the right things', text: 'cache retrieval and deterministic outputs, not hallucinated text' },
  { title: 'Show the user', text: 'make the agent’s cost/latency tradeoffs visible' },
  { title: 'Tomorrow: Day 166', text: 'next: dataset curation and tool/data quality for better success rates' },
];

const core = [
  {
    icon: '💸',
    title: 'Cost Model',
    titleClass: 'card-title-cyan',
    subtitle: 'Know It',
    description: 'Measure cost per request and per tool call. Budget against real data, not guesses.',
    code: '$ per run\n$ per tool',
  },
  {
    icon: '🧭',
    title: 'Cost-Aware Routing',
    titleClass: 'card-title-purple',
    subtitle: 'Choose',
    description: 'Route tasks to the cheapest path that meets quality requirements.',
    code: 'cheap first\npremium when needed',
  },
  {
    icon: '🧱',
    title: 'Hard Budgets',
    titleClass: 'card-title-amber',
    subtitle: 'Enforce',
    description: 'Cap steps, tool calls, and max cost; degrade gracefully when budgets are hit.',
    code: 'max_steps\nmax_tools\nmax_$',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Budget Config',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Add a config for max tokens, max tool calls, and max $ per run — and enforce it.',
    code: 'budget enforcement',
  },
  {
    icon: '📊',
    title: 'Cost Dashboard',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Track average and p95 cost per workflow, plus top expensive tools.',
    code: 'avg$ · p95$ · top tools',
  },
  {
    icon: '🔜',
    title: 'Next: Day 166',
    titleClass: 'card-title-amber',
    subtitle: 'Data Quality',
    description: 'Tomorrow — data and tool quality improvements to raise success rates.',
    link: { href: '/agentic-day-166', label: 'Day 166 →' },
  },
];

const resources = [
  {
    icon: '📘',
    title: 'FinOps Foundation',
    titleClass: 'card-title-cyan',
    subtitle: 'Cost',
    description: 'A practical framing for cloud cost management that maps to AI workloads too.',
    link: { href: 'https://www.finops.org/introduction/what-is-finops/', label: 'Open →', external: true },
  },
  {
    icon: '📖',
    title: 'AWS Cost Optimization',
    titleClass: 'card-title-purple',
    subtitle: 'Cloud',
    description: 'Cost optimization principles for production systems.',
    link: { href: 'https://aws.amazon.com/architecture/cost-optimization/', label: 'Open →', external: true },
  },
  {
    icon: '🗺️',
    title: 'Day 154',
    titleClass: 'card-title-amber',
    subtitle: 'Budgets',
    description: 'Outcome + budget framing that FinOps enforces.',
    link: { href: '/agentic-day-154', label: 'Open Day 154 →' },
  },
];

export default function AgenticDay165() {
  return (
    <StandaloneJourneyPage
      dayNumber={165}
      series="Agentic AI"
      dateLabel="Agentic AI Day 165 · 30 Aug 2027"
      prev={{ href: '/agentic-day-164', label: '← Day 164' }}
      next={{ href: '/agentic-day-166', label: 'Day 166 →' }}
      tags={['Agentic AI', 'FinOps', 'Budgets']}
      theme="FINOPS FOR AGENTS: COST-AWARE ROUTING & BUDGETS"
      heroIcon="💸"
      profileRole="AGENTIC AI · FINOPS"
      progressWidth="55%"
      summary={
        <>
          Day 165 makes cost a first-class constraint: measure cost per workflow, route to cheaper paths when possible,
          and enforce hard budgets with graceful degradation.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#FinOps', '#Day165', '#Budgets', '#CostAware']}
    />
  );
}

