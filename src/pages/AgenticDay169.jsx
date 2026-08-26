import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'HITL is an operation', text: 'approval flows need owners, queues, SLAs, and clear decisions' },
  { title: 'Escalate with context', text: 'a human should see the risk, evidence, and proposed action in one place' },
  { title: 'Audit trails matter', text: 'store who approved what, when, and based on which input' },
  { title: 'Don’t overuse approval', text: 'too many human gates destroy throughput and trust in the system' },
  { title: 'Operator UX is product UX', text: 'bad review screens create slow, inconsistent decisions' },
  { title: 'Reversible beats irreversible', text: 'prefer safe preview or draft mode before final execution' },
  { title: 'Sample low-risk too', text: 'spot checks on “safe” paths catch silent drift' },
  { title: 'Tomorrow: Day 170', text: 'shadow launches, canaries, and rollout control for agent systems' },
];

const core = [
  {
    icon: '🙋',
    title: 'Approval Queue',
    titleClass: 'card-title-cyan',
    subtitle: 'Operate',
    description: 'Escalations need a queue, owner, SLA, and structured decision options.',
    code: 'approve · deny · edit',
  },
  {
    icon: '🧾',
    title: 'Decision Context',
    titleClass: 'card-title-purple',
    subtitle: 'Review',
    description: 'Show the proposed action, evidence, risk score, and expected impact together.',
    code: 'action + evidence + risk',
  },
  {
    icon: '📜',
    title: 'Audit Trail',
    titleClass: 'card-title-amber',
    subtitle: 'Trust',
    description: 'Record decisions and rationales so changes can be traced and learned from later.',
    code: 'who · when · why',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Design Review Screen',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Mock a reviewer screen that lets an operator approve, reject, or edit with notes.',
    code: 'action + notes',
  },
  {
    icon: '📊',
    title: 'Approval Metrics',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Track queue age, approval rate, reversal rate, and median decision time.',
    code: 'age · rate · p50 time',
  },
  {
    icon: '🔜',
    title: 'Next: Rollout',
    titleClass: 'card-title-amber',
    subtitle: 'Day 170 · 3 Feb 2027',
    description: 'Tomorrow — shadow mode, canaries, and rollout safeguards.',
    link: { href: '/agentic-day-170', label: 'Go to Day 170 →' },
  },
];

const resources = [
  {
    icon: '📘',
    title: 'NIST AI RMF',
    titleClass: 'card-title-cyan',
    subtitle: 'Governance',
    description: 'Useful framing for human oversight and operational controls.',
    link: { href: 'https://www.nist.gov/itl/ai-risk-management-framework', label: 'Open →', external: true },
  },
  {
    icon: '📖',
    title: 'Day 161',
    titleClass: 'card-title-purple',
    subtitle: 'Critic',
    description: 'Critic gates that should decide when to escalate for review.',
    link: { href: '/agentic-day-161', label: 'Open Day 161 →' },
  },
  {
    icon: '🗺️',
    title: 'Day 163',
    titleClass: 'card-title-amber',
    subtitle: 'Durable',
    description: 'Approval is easier when the run can pause and resume cleanly.',
    link: { href: '/agentic-day-163', label: 'Open Day 163 →' },
  },
];

export default function AgenticDay169() {
  return (
    <StandaloneJourneyPage
      dayNumber={169}
      series="Agentic AI"
      dateLabel="Agentic AI Day 169 · 15 Feb 2027"
      prev={{ href: '/agentic-day-168', label: '← Day 168' }}
      next={{ href: '/agentic-day-170', label: 'Day 170 →' }}
      tags={['Agentic AI', 'HITL', 'Operations']}
      theme="HUMAN-IN-THE-LOOP OPERATIONS & APPROVAL FLOWS"
      heroIcon="🙋"
      profileRole="AGENTIC AI · OPERATE"
      progressWidth="57%"
      summary={
        <>
          Day 169 treats human review as real operations work: create structured approval queues, preserve audit trails,
          and keep escalation focused enough that humans improve quality instead of becoming a bottleneck.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#HITL', '#Day169', '#Approval', '#Operations']}
    />
  );
}
