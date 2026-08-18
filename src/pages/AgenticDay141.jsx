import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Async by default', text: 'long tool chains belong on workers — not in the user request thread' },
  { title: 'Backpressure', text: 'when queues grow, shed load or degrade before everything melts' },
  { title: 'Fairness', text: 'per-tenant concurrency caps stop noisy neighbors' },
  { title: 'Idempotent jobs', text: 'every queued action carries a key for safe retries' },
  { title: 'Visibility', text: 'queue depth, age, and poison messages are first-class metrics' },
  { title: 'Timeouts', text: 'jobs die with a clear user message — never hang forever' },
  { title: 'What’s next', text: 'queues need verification gates before side effects commit' },
];

const core = [
  {
    icon: '🧵', title: 'Queue + Worker', titleClass: 'card-title-cyan', subtitle: 'Scale',
    description: 'API enqueues agent jobs; workers run loops and publish results.',
    code: 'API → queue\n→ worker → result',
  },
  {
    icon: '🚦', title: 'Concurrency Caps', titleClass: 'card-title-purple', subtitle: 'Fairness',
    description: 'Limit parallel runs per tenant and per tool. Excess waits or rejects.',
    code: 'per-tenant cap\nbackoff',
  },
  {
    icon: '☠️', title: 'Poison Handling', titleClass: 'card-title-amber', subtitle: 'Ops',
    description: 'After N fails, park the job, alert, and offer HITL replay.',
    code: 'fail N → park\nalert · HITL',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Queue One Step', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Move one long tool chain behind a queue. Return a job id to the client.',
    code: 'enqueue · job id',
  },
  {
    icon: '📊', title: 'Depth Alert', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Alert when queue age exceeds SLA. Document the page owner.',
    code: 'age > SLA\n→ page',
  },
  {
    icon: '🔜', title: 'Next: Verification', titleClass: 'card-title-amber', subtitle: 'Day 142',
    description: 'Tomorrow — verification gates and golden suites.',
    link: { href: '/agentic-day-142', label: 'Go to Day 142 →' },
  },
];

const resources = [
  {
    icon: '🏁', title: 'Day 140', titleClass: 'card-title-cyan', subtitle: 'Prior Milestone',
    description: 'Production excellence this scale layer builds on.',
    link: { href: '/agentic-day-140', label: 'Open Day 140 →' },
  },
  {
    icon: '⏱️', title: 'Day 137', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'Latency budgets for async UX.',
    link: { href: '/agentic-day-137', label: 'Open Day 137 →' },
  },
  {
    icon: '💥', title: 'Day 138', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Failure modes queues must survive.',
    link: { href: '/agentic-day-138', label: 'Open Day 138 →' },
  },
];

export default function AgenticDay141() {
  return (
    <StandaloneJourneyPage
      dayNumber={141}
      series="Agentic AI"
      dateLabel="Agentic AI Day 141 · 6 Jan 2027"
      prev={{ href: '/agentic-day-140', label: '← Day 140' }}
      next={{ href: '/agentic-day-142', label: 'Day 142 →' }}
      tags={['Agentic AI', 'Queues', 'Phase 19a']}
      theme="ASYNC QUEUES & BACKPRESSURE"
      heroIcon="🧵"
      profileRole="AGENTIC AI · SCALE"
      progressWidth="92%"
      summary={
        <>
          Day 141 scales with queues. <strong>Enqueue long work</strong>, cap fairness, and park poison jobs for HITL.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Queues', '#Backpressure', '#Day141', '#Async', '#AgenticAI']}
    />
  );
}
