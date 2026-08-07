import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'AgentOps needs metrics', text: 'task success, not token count, is the KPI' },
  { title: 'Define failure buckets', text: 'plan failure, tool failure, policy failure, data failure, and user ambiguity' },
  { title: 'Measure steps', text: 'average steps, loops, and retries explain cost and latency spikes' },
  { title: 'Quality signals', text: 'verify() pass rate, hallucination flags, and safe-refusal rate' },
  { title: 'Trace as ground truth', text: 'a single run_id should tell the full story' },
  { title: 'Regression suites', text: 'golden tasks become a permanent CI check for behavior' },
  { title: 'Tune with evidence', text: 'change one thing, then re-run the suite' },
  { title: 'Tomorrow: Day 156', text: 'tool contract hardening and sandboxed execution' },
];

const core = [
  {
    icon: '📊',
    title: 'Success Metrics',
    titleClass: 'card-title-cyan',
    subtitle: 'Outcome',
    description: 'Track verify() pass rate, completion rate, and time-to-done — not just “good answers”.',
    code: 'pass% · done% · p95',
  },
  {
    icon: '🧰',
    title: 'Failure Taxonomy',
    titleClass: 'card-title-purple',
    subtitle: 'Debug',
    description: 'Classify failures so you know whether to fix prompts, tools, policies, or data.',
    code: 'plan/tool/policy/data',
  },
  {
    icon: '🧪',
    title: 'Golden Suite',
    titleClass: 'card-title-amber',
    subtitle: 'Guard',
    description: 'A fixed suite of tasks prevents regressions and makes improvements measurable.',
    code: 'goldens -> CI gate',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Create 10 Goldens',
    titleClass: 'card-title-cyan',
    subtitle: 'Build',
    description: 'Write 10 tasks with clear verify() rules and store them as a regression suite.',
    code: '10 tasks\n+ verify()',
  },
  {
    icon: '📋',
    title: 'Failure Labels',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Add a single failure_reason label in your trace summary for every failed run.',
    code: 'failure_reason',
  },
  {
    icon: '🔜',
    title: 'Next: Tool Hardening',
    titleClass: 'card-title-amber',
    subtitle: 'Day 156 · 6 Jan 2027',
    description: 'Tomorrow — harden tool contracts and sandbox execution.',
    link: { href: '/agentic-day-156', label: 'Go to Day 156 →' },
  },
];

const resources = [
  {
    icon: '📈',
    title: 'DORA Metrics',
    titleClass: 'card-title-cyan',
    subtitle: 'Ops',
    description: 'Deployment and reliability metrics thinking for production systems.',
    link: { href: 'https://dora.dev/', label: 'Open →', external: true },
  },
  {
    icon: '🧪',
    title: 'Promptfoo',
    titleClass: 'card-title-purple',
    subtitle: 'Evals',
    description: 'Useful harness for eval runs and regression checks.',
    link: { href: 'https://promptfoo.dev/', label: 'Open →', external: true },
  },
  {
    icon: '🗺️',
    title: 'Day 154',
    titleClass: 'card-title-amber',
    subtitle: 'Outcomes',
    description: 'Budgets and verification-first design.',
    link: { href: '/agentic-day-154', label: 'Open Day 154 →' },
  },
];

export default function AgenticDay155() {
  return (
    <StandaloneJourneyPage
      dayNumber={155}
      series="Agentic AI"
      dateLabel="Agentic AI Day 155 · 5 Jan 2027"
      prev={{ href: '/agentic-day-154', label: '← Day 154' }}
      next={{ href: '/agentic-day-156', label: 'Day 156 →' }}
      tags={['Agentic AI', 'Evals', 'AgentOps']}
      theme="AGENTOPS: METRICS, FAILURES & GOLDEN SUITES"
      heroIcon="📊"
      profileRole="AGENTIC AI · AGENTOPS"
      progressWidth="52%"
      summary={
        <>
          Day 155 turns agent behavior into numbers: define success, label failure modes, and gate changes with a{' '}
          <strong>golden task suite</strong>.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#AgentOps', '#Day155', '#Evals', '#Goldens']}
    />
  );
}

