import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Rollout is part of the design', text: 'an agent is not production-ready if you can only release it all at once' },
  { title: 'Shadow mode first', text: 'run the agent beside the current path before it gains decision power' },
  { title: 'Canary by workflow', text: 'release to a narrow slice, not to every user and task together' },
  { title: 'Kill switches matter', text: 'operators need one fast way to stop harmful automation' },
  { title: 'Track deltas, not just absolutes', text: 'compare agent behavior against the incumbent path during rollout' },
  { title: 'Rollback must be practiced', text: 'the first rollback should not happen during a real incident' },
  { title: 'Adoption is earned', text: 'good rollout data builds trust with users and operators' },
  { title: 'Tomorrow: Day 171', text: 'post-launch learning loops and operating the agent after release' },
];

const core = [
  {
    icon: '🛰️',
    title: 'Shadow Mode',
    titleClass: 'card-title-cyan',
    subtitle: 'Observe',
    description: 'Run the agent in parallel, compare outcomes, and learn before real traffic depends on it.',
    code: 'observe before act',
  },
  {
    icon: '🐤',
    title: 'Canary Release',
    titleClass: 'card-title-purple',
    subtitle: 'Limit',
    description: 'Enable the agent for a small slice of workflows with clear entry and exit criteria.',
    code: 'small slice\nclear guardrails',
  },
  {
    icon: '🛑',
    title: 'Rollback Control',
    titleClass: 'card-title-amber',
    subtitle: 'Recover',
    description: 'Kill switches, flags, and fast rollback paths keep mistakes contained.',
    code: 'flag off -> safe path',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Write Rollout Plan',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Define shadow metrics, canary size, promotion rules, and rollback triggers.',
    code: 'shadow -> canary -> expand',
  },
  {
    icon: '📊',
    title: 'Delta Dashboard',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Compare baseline vs agent on success, latency, cost, and escalation rate.',
    code: 'baseline vs agent',
  },
  {
    icon: '🔜',
    title: 'Next: Day 171',
    titleClass: 'card-title-amber',
    subtitle: 'Operate',
    description: 'Tomorrow — post-launch learning loops and the work that starts after rollout.',
    link: { href: '/agentic-day-171', label: 'Day 171 →' },
  },
];

const resources = [
  {
    icon: '📘',
    title: 'Google SRE Workbook',
    titleClass: 'card-title-cyan',
    subtitle: 'Release',
    description: 'Operational ideas for controlled launches and safe rollback.',
    link: { href: 'https://sre.google/workbook/table-of-contents/', label: 'Open →', external: true },
  },
  {
    icon: '📖',
    title: 'Day 164',
    titleClass: 'card-title-purple',
    subtitle: 'Reliability',
    description: 'Reliability controls that rollout plans depend on.',
    link: { href: '/agentic-day-164', label: 'Open Day 164 →' },
  },
  {
    icon: '🗺️',
    title: 'Day 169',
    titleClass: 'card-title-amber',
    subtitle: 'HITL',
    description: 'Approval paths remain critical during early rollout stages.',
    link: { href: '/agentic-day-169', label: 'Open Day 169 →' },
  },
];

export default function AgenticDay170() {
  return (
    <StandaloneJourneyPage
      dayNumber={170}
      series="Agentic AI"
      dateLabel="Agentic AI Day 170 · 10 Feb 2027"
      prev={{ href: '/agentic-day-169', label: '← Day 169' }}
      next={{ href: '/agentic-day-171', label: 'Day 171 →' }}
      tags={['Agentic AI', 'Rollout', 'Canary']}
      theme="PRODUCTION ROLLOUT: SHADOW MODE, CANARIES & KILL SWITCHES"
      heroIcon="🛰️"
      profileRole="AGENTIC AI · RELEASE"
      progressWidth="57%"
      summary={
        <>
          Day 170 brings the agent to production carefully: start in <strong>shadow mode</strong>, promote with canary
          rules, watch deltas against the baseline, and keep a fast rollback path within reach.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Rollout', '#Day170', '#Canary', '#Production']}
    />
  );
}
