import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Why FinOps', text: 'agents burn tokens on retries, tools, and long contexts — cost is a product feature' },
  { title: 'Unit economics', text: 'cost per successful task beats cost per token for decisions' },
  { title: 'Budgets', text: 'per-user, per-tenant, and per-run caps with hard stop when exceeded' },
  { title: 'Model routing', text: 'cheap model for classify/extract; expensive only for hard reasoning' },
  { title: 'Cache hits', text: 'semantic + exact cache cut repeat spend before the LLM runs' },
  { title: 'Context trim', text: 'drop stale tool dumps; summarize history; pin only what the next step needs' },
  { title: 'Show the bill', text: 'surfaces estimated cost in UI so power users self-regulate' },
  { title: 'What’s next', text: 'cheap agents that feel slow still lose users — latency is next' },
];

const core = [
  {
    icon: '💰', title: 'Cost Per Task', titleClass: 'card-title-cyan', subtitle: 'Metric',
    description: 'Track tokens + tool fees per completed job. Alert when unit cost drifts vs baseline.',
    code: 'cost / success\nalert on drift',
  },
  {
    icon: '🧭', title: 'Router Ladder', titleClass: 'card-title-purple', subtitle: 'Models',
    description: 'SLM → mid → frontier. Escalate only when confidence or difficulty scores say so.',
    code: 'cheap → mid\n→ frontier',
  },
  {
    icon: '🛑', title: 'Hard Caps', titleClass: 'card-title-amber', subtitle: 'Stops',
    description: 'max_tokens, max_steps, and $budget. Exceed → graceful degrade, not silent overspend.',
    code: 'steps · tokens · $\n→ stop · degrade',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Bill a Run', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Log tokens and estimated $ for one agent task. Add a UI line: “~cost this run”.',
    code: 'tokens → $\nshow in UI',
  },
  {
    icon: '📉', title: 'Router Cut', titleClass: 'card-title-purple', subtitle: 'Save',
    description: 'Move classify+extract to a cheap model. Measure quality and cost before/after.',
    code: 'before vs after\nquality · cost',
  },
  {
    icon: '🔜', title: 'Next: Latency', titleClass: 'card-title-amber', subtitle: 'Day 137',
    description: 'Tomorrow — latency budgets and streaming UX.',
    link: { href: '/agentic-day-137', label: 'Go to Day 137 →' },
  },
];

const resources = [
  {
    icon: '🏁', title: 'Edge Milestone', titleClass: 'card-title-cyan', subtitle: 'Day 135',
    description: 'Private agents still need cloud FinOps when they escalate.',
    link: { href: '/agentic-day-135', label: 'Open Day 135 →' },
  },
  {
    icon: '💾', title: 'Cache Day 57', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'Semantic cache as a cost lever.',
    link: { href: '/agentic-day-57', label: 'Open Day 57 →' },
  },
  {
    icon: '📊', title: 'Quotas Day 58', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Rate limits and spend guards.',
    link: { href: '/agentic-day-58', label: 'Open Day 58 →' },
  },
];

export default function AgenticDay136() {
  return (
    <StandaloneJourneyPage
      dayNumber={136}
      series="Agentic AI"
      dateLabel="Agentic AI Day 136 · 4 Jan 2027"
      prev={{ href: '/agentic-day-135', label: '← Day 135' }}
      next={{ href: '/agentic-day-137', label: 'Day 137 →' }}
      tags={['Agentic AI', 'FinOps', 'Phase 19']}
      theme="AGENT COST & FINOPS"
      heroIcon="💰"
      profileRole="AGENTIC AI · FINOPS"
      progressWidth="91%"
      summary={
        <>
          Day 136 treats spend as product. Track <strong>cost per successful task</strong>, route to cheap models
          first, and enforce hard $ / step caps.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#FinOps', '#TokenCost', '#Day136', '#AgenticAI', '#Routing']}
    />
  );
}
