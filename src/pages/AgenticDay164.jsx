import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Reliability is a feature', text: 'users feel reliability before they notice intelligence' },
  { title: 'Retries need rules', text: 'retry only transient failures, and cap attempts' },
  { title: 'Circuit breakers', text: 'protect tools/providers and avoid cascading failures' },
  { title: 'Timeout budgets', text: 'budgets keep runs from stalling and costs from exploding' },
  { title: 'Graceful degradation', text: 'fallback models and reduced toolsets keep the workflow usable' },
  { title: 'Queue backpressure', text: 'work queues smooth spikes and isolate overload' },
  { title: 'Incident readiness', text: 'runbooks and rollback switches reduce downtime' },
  { title: 'Tomorrow: Day 165', text: 'FinOps: cost controls, token budgets, and cost-aware routing' },
];

const core = [
  {
    icon: '🧯',
    title: 'Failure Controls',
    titleClass: 'card-title-cyan',
    subtitle: 'Resilience',
    description: 'Timeouts, retries, circuit breakers, and caps keep agent pipelines stable.',
    code: 'timeout + retry + breaker',
  },
  {
    icon: '🧱',
    title: 'Degradation Paths',
    titleClass: 'card-title-purple',
    subtitle: 'UX',
    description: 'Define what happens when tools fail: smaller model, fewer tools, or partial results.',
    code: 'fallback -> still useful',
  },
  {
    icon: '📟',
    title: 'Operational Readiness',
    titleClass: 'card-title-amber',
    subtitle: 'Ops',
    description: 'Dashboards, runbooks, and rollback switches should exist before incidents happen.',
    code: 'runbook + rollback',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Add a Breaker',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Implement a circuit breaker for one flaky tool and verify the fallback path.',
    code: 'open -> fallback',
  },
  {
    icon: '📊',
    title: 'SLO Dashboard',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Track p95 latency, tool error rate, retry rate, and fallback rate per workflow.',
    code: 'p95 · error% · fallback%',
  },
  {
    icon: '🔜',
    title: 'Next: FinOps',
    titleClass: 'card-title-amber',
    subtitle: 'Day 165 · 22 Jan 2027',
    description: 'Tomorrow — cost-aware routing and budget enforcement.',
    link: { href: '/agentic-day-165', label: 'Go to Day 165 →' },
  },
];

const resources = [
  {
    icon: '📘',
    title: 'SRE Book',
    titleClass: 'card-title-cyan',
    subtitle: 'Reliability',
    description: 'Reliability patterns that map to agent systems.',
    link: { href: 'https://sre.google/sre-book/table-of-contents/', label: 'Open →', external: true },
  },
  {
    icon: '📖',
    title: 'AWS Retry Guidance',
    titleClass: 'card-title-purple',
    subtitle: 'Backoff',
    description: 'Retry patterns to avoid thundering herds.',
    link: { href: 'https://docs.aws.amazon.com/general/latest/gr/api-retries.html', label: 'Open →', external: true },
  },
  {
    icon: '🗺️',
    title: 'Day 139',
    titleClass: 'card-title-amber',
    subtitle: 'RBAC',
    description: 'Policy gates that should be enforced even in fallback modes.',
    link: { href: '/agentic-day-139', label: 'Open Day 139 →' },
  },
];

export default function AgenticDay164() {
  return (
    <StandaloneJourneyPage
      dayNumber={164}
      series="Agentic AI"
      dateLabel="Agentic AI Day 164 · 3 Feb 2027"
      prev={{ href: '/agentic-day-163', label: '← Day 163' }}
      next={{ href: '/agentic-day-165', label: 'Day 165 →' }}
      tags={['Agentic AI', 'Reliability', 'SRE']}
      theme="RELIABILITY ENGINEERING FOR AGENT PIPELINES"
      heroIcon="🧯"
      profileRole="AGENTIC AI · SRE"
      progressWidth="55%"
      summary={
        <>
          Day 164 brings SRE discipline to agent pipelines: timeouts, retries, circuit breakers, degradation paths, and
          incident readiness so production runs stay stable under failure.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#SRE', '#Day164', '#Reliability', '#LLMOps']}
    />
  );
}

