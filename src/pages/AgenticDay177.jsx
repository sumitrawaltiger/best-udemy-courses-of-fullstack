import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Fan-out is for independence', text: 'run specialists in parallel only when their inputs do not depend on each other' },
  { title: 'Fan-in needs a join rule', text: 'first-done, all-done, quorum, or best-of-N — pick before you code' },
  { title: 'Partial results', text: 'a slow specialist should not freeze the whole answer if others already returned' },
  { title: 'Deadlines', text: 'give the join a budget; late results become optional context or a retry job' },
  { title: 'Dedup at merge', text: 'two tools citing the same ticket should not double-count in the summary' },
  { title: 'Error isolation', text: 'one 500 must not cancel siblings unless the join rule says all-or-nothing' },
  { title: 'Cost explosion', text: 'N parallel frontier calls can blow the run budget — cap concurrency' },
  { title: 'Tomorrow: Day 178', text: 'agent-to-agent messaging and mesh communication' },
];

const core = [
  {
    icon: '📤',
    title: 'Fan-Out',
    titleClass: 'card-title-cyan',
    subtitle: 'Parallel',
    description: 'Dispatch independent lookups together: CRM, docs, calendar. Share a deadline and a concurrency cap.',
    code: 'dispatch N\ncap + deadline',
  },
  {
    icon: '📥',
    title: 'Join Rule',
    titleClass: 'card-title-purple',
    subtitle: 'Merge',
    description: 'Define all / any / k-of-n. Document what the user sees if one branch is late or failed.',
    code: 'all | any | k-of-n\npartial OK?',
  },
  {
    icon: '⏱️',
    title: 'Budgeted Wait',
    titleClass: 'card-title-amber',
    subtitle: 'Latency',
    description: 'Stop waiting at T ms. Merge what you have; queue stragglers for a follow-up note if needed.',
    code: 'wait ≤ T\nmerge partial',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Three-Way Lookup',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Fan out to mock CRM, wiki, and calendar. Join with k-of-2 and a 2s deadline.',
    code: '3 tools · k-of-2\n2s budget',
  },
  {
    icon: '🧨',
    title: 'Kill One Branch',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Fail the wiki on purpose. Confirm the user still gets a CRM+calendar answer and a noted gap.',
    code: '1 fail → still answer\n+ gap note',
  },
  {
    icon: '🔜',
    title: 'Next: Mesh',
    titleClass: 'card-title-amber',
    subtitle: 'Day 178',
    description: 'Tomorrow — agent-to-agent messages, not just a central hub.',
    link: { href: '/agentic-day-178', label: 'Go to Day 178 →' },
  },
];

const resources = [
  {
    icon: '🕸️',
    title: 'Day 176',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Topologies that decide when fan-out is even allowed.',
    link: { href: '/agentic-day-176', label: 'Open Day 176 →' },
  },
  {
    icon: '⏱️',
    title: 'Day 137',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'Latency budgets and parallel tool fan-out foundations.',
    link: { href: '/agentic-day-137', label: 'Open Day 137 →' },
  },
  {
    icon: '🧵',
    title: 'Day 141',
    titleClass: 'card-title-amber',
    subtitle: 'Journal',
    description: 'Queues and backpressure when parallel work spikes.',
    link: { href: '/agentic-day-141', label: 'Open Day 141 →' },
  },
];

export default function AgenticDay177() {
  return (
    <StandaloneJourneyPage
      dayNumber={177}
      series="Agentic AI"
      dateLabel="Agentic AI Day 177 · 13 Feb 2027"
      prev={{ href: '/agentic-day-176', label: '← Day 176' }}
      next={{ href: '/agentic-day-178', label: 'Day 178 →' }}
      tags={['Agentic AI', 'Parallel', 'Orchestration']}
      theme="FAN-OUT, FAN-IN & JOIN RULES"
      heroIcon="📤"
      profileRole="AGENTIC AI · PARALLEL"
      progressWidth="60%"
      summary={
        <>
          Day 177 runs independent work together. <strong>Fan-out</strong> specialists, pick a <strong>join rule</strong>,
          and merge partial results when the clock hits the budget.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#FanOut', '#Day177', '#Parallel', '#JoinRules']}
    />
  );
}
