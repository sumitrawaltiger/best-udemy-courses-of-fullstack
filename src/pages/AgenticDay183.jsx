import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Graphs can spend forever', text: 'fan-out plus retries plus a fat context window is how a $0.02 task becomes $4' },
  { title: 'Budget as a node', text: 'a governor sits on the loop: remaining $ / tokens / steps before the next tool' },
  { title: 'Hard stop vs degrade', text: 'hit the cap → cheaper model, skip optional branches, or stop with a partial answer' },
  { title: 'Per-tenant caps', text: 'one noisy customer must not drain the shared wallet' },
  { title: 'Show remaining', text: 'operators and power users trust a visible run cost more than a surprise invoice' },
  { title: 'Retry tax', text: 'count retries against the same budget so storms cannot hide' },
  { title: 'Alert on drift', text: 'median cost/task jumping 2× is a release smell' },
  { title: 'Tomorrow: Day 184', text: 'multi-tenant isolation for agent runtimes' },
];

const core = [
  {
    icon: '💰',
    title: 'Run Budget',
    titleClass: 'card-title-cyan',
    subtitle: 'Cap',
    description: 'Each run starts with max_usd, max_tokens, max_steps. The governor decrements after every model/tool hop.',
    code: '$ · tokens · steps\n-- after each hop',
  },
  {
    icon: '📉',
    title: 'Degrade Path',
    titleClass: 'card-title-purple',
    subtitle: 'Soft',
    description: 'Before hard stop: drop optional fan-out, switch to a cheap model, or return partial + “budget hit”.',
    code: 'skip optional\ncheap model · partial',
  },
  {
    icon: '🏢',
    title: 'Tenant Wallet',
    titleClass: 'card-title-amber',
    subtitle: 'Fair',
    description: 'Daily/monthly caps per tenant. 429 with a clear retry-after beats a silent global outage.',
    code: 'per-tenant cap\n429 + retry-after',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Blow the Cap',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Set max_usd very low. Force extra tool hops. Confirm degrade then stop — no extra provider calls.',
    code: 'low $ → degrade\n→ stop',
  },
  {
    icon: '📊',
    title: 'Cost Line',
    titleClass: 'card-title-purple',
    subtitle: 'UX',
    description: 'Show estimated $ on the run UI and in the trace header.',
    code: 'run header\ncost so far',
  },
  {
    icon: '🔜',
    title: 'Next: Tenants',
    titleClass: 'card-title-amber',
    subtitle: 'Day 184',
    description: 'Tomorrow — isolation so one tenant cannot read another’s runs.',
    link: { href: '/agentic-day-184', label: 'Go to Day 184 →' },
  },
];

const resources = [
  {
    icon: '⚖️',
    title: 'Day 182',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Policy node that can also deny on budget exhaustion.',
    link: { href: '/agentic-day-182', label: 'Open Day 182 →' },
  },
  {
    icon: '💰',
    title: 'Day 136',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'FinOps and cost-per-task habits.',
    link: { href: '/agentic-day-136', label: 'Open Day 136 →' },
  },
  {
    icon: '📊',
    title: 'Day 58',
    titleClass: 'card-title-amber',
    subtitle: 'Journal',
    description: 'Quotas and spend guards.',
    link: { href: '/agentic-day-58', label: 'Open Day 58 →' },
  },
];

export default function AgenticDay183() {
  return (
    <StandaloneJourneyPage
      dayNumber={183}
      series="Agentic AI"
      dateLabel="Agentic AI Day 183 · 2 Mar 2027"
      prev={{ href: '/agentic-day-182', label: '← Day 182' }}
      next={{ href: '/agentic-day-184', label: 'Day 184 →' }}
      tags={['Agentic AI', 'FinOps', 'Runtime']}
      theme="COST GOVERNORS IN THE AGENT GRAPH"
      heroIcon="💰"
      profileRole="AGENTIC AI · FINOPS"
      progressWidth="63%"
      summary={
        <>
          Day 183 puts money in the loop. A <strong>governor node</strong> tracks $, tokens, and steps — then degrades
          or stops before a graph can run unbounded.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#FinOps', '#Day183', '#Budgets', '#Runtime']}
    />
  );
}
