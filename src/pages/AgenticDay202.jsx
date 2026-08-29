import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Cost has a $ number', text: 'track $ per run, per role, per workflow, and set per-tenant budgets' },
  { title: 'Tiered model routing', text: 'route easy tasks to the cheap model; hard tasks get the big model, not the other way' },
  { title: 'Response caching', text: 'cache the LLM and tool outputs by canonical input so repeats are free' },
  { title: 'Latency budgets', text: 'each role and each workflow has an SLA; budget splits drive tool and model choice' },
  { title: 'Shrink before scale', text: 'drop tokens in prompts, compress tool output, and parallelize before you throw more $' },
  { title: 'Tomorrow: Day 203', text: 'change approvals, gates, and governance for production changes' },
];

const core = [
  {
    icon: '💱',
    title: 'Tiered Router',
    titleClass: 'card-title-cyan',
    subtitle: 'Route',
    description: 'Classifier picks the cheapest model that still meets the confidence bar for the task.',
    code: 'easy→mini\nhard→large',
  },
  {
    icon: '🗄️',
    title: 'Semantic Cache',
    titleClass: 'card-title-purple',
    subtitle: 'Cache',
    description: 'Cache LLM + tool calls by canonicalized input; TTL and invalidation tied to prompt versions.',
    code: 'cache(prompt_v,\ninput_hash)',
  },
  {
    icon: '⏱️',
    title: 'Budget Splits',
    titleClass: 'card-title-amber',
    subtitle: 'Limit',
    description: 'Each role/workflow gets a $ cap and a latency cap; breach degrades or escalates, not runs away.',
    code: 'cap $ + ms\ndegrade else',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Router Bake-off',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Run 100 tasks with tiered routing vs one large model; compare $, p95, and accuracy.',
    code: 'router vs big\n$, p95, acc',
  },
  {
    icon: '📊',
    title: 'Cost Dashboard',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Build a daily report: $ per role, $ per workflow, cache hit rate, top-5 most expensive runs.',
    code: 'daily $ report\nrole × wf',
  },
  {
    icon: '🔜',
    title: 'Next: Governance',
    titleClass: 'card-title-amber',
    subtitle: 'Day 203',
    description: 'Tomorrow — change approvals and production gates.',
    link: { href: '/agentic-day-203', label: 'Go to Day 203 →' },
  },
];

const resources = [
  {
    icon: '🏷️',
    title: 'Day 201',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Versioning the router and cache keys build on.',
    link: { href: '/agentic-day-201', label: 'Open Day 201 →' },
  },
  {
    icon: '🧮',
    title: 'Day 183',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'Budget governor this extends to fleet-wide optimization.',
    link: { href: '/agentic-day-183', label: 'Open Day 183 →' },
  },
  {
    icon: '📘',
    title: 'Python Track',
    titleClass: 'card-title-amber',
    subtitle: 'Hub',
    description: 'Full Gen AI + Agentic curriculum.',
    link: { href: '/python', label: 'Open Python track →' },
  },
];

export default function AgenticDay202() {
  return (
    <StandaloneJourneyPage
      dayNumber={202}
      series="Agentic AI"
      dateLabel="Agentic AI Day 202 · 20 Mar 2027"
      prev={{ href: '/agentic-day-201', label: '← Day 201' }}
      next={{ href: '/agentic-day-203', label: 'Day 203 →' }}
      tags={['Agentic AI', 'Performance', 'Cost']}
      theme="COST & PERFORMANCE OPTIMIZATION"
      heroIcon="💱"
      profileRole="AGENTIC AI · GOVERNANCE"
      progressWidth="73%"
      summary={
        <>
          Day 202 tightens the spend. Use <strong>tiered routing, semantic caching, and per-role budgets</strong> so the
          fleet is fast and cheap without dropping quality.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Cost', '#Day202', '#Performance', '#Optimization']}
    />
  );
}
