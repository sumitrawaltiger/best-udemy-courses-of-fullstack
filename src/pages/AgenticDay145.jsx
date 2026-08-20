import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Phase bridge', text: 'queues → verification → RBAC → compliance → ready for learning systems' },
  { title: 'Enterprise bar', text: 'async scale, verified commits, gated access, audit-ready evidence' },
  { title: 'Demo story', text: 'enqueue job → verify → policy allow → write → export evidence snippet' },
  { title: 'Scorecard', text: 'queue SLO · golden pass · deny tests · evidence pack completeness' },
  { title: 'Next phase', text: 'Days 146–150 add feedback flywheels and product analytics' },
  { title: 'Keep shipping', text: 'this bridge turns production excellence into enterprise-ready ops' },
];

const core = [
  {
    icon: '🏁', title: 'Checklist', titleClass: 'card-title-cyan', subtitle: 'Ship',
    description: 'Queues · goldens · RBAC matrix · HITL · evidence pack · retention table.',
    code: 'async · verify\naccess · audit',
  },
  {
    icon: '🎬', title: '5-Min Demo', titleClass: 'card-title-purple', subtitle: 'Show',
    description: 'Queued run, blocked unauthorized tool, approved write, evidence export.',
    code: 'queue · deny\napprove · export',
  },
  {
    icon: '🗺️', title: '141–145 Map', titleClass: 'card-title-amber', subtitle: 'Arc',
    description: 'Scale async → verify outcomes → bound access → prove compliance → ship.',
    code: 'scale · verify\nbound · prove',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Sign-Off Score', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Rate 0–2 on queues, verification, RBAC, compliance. Fix the lowest.',
    code: 'score 0–2\nfix weakest',
  },
  {
    icon: '📦', title: 'Ops Bridge README', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Document queue SLOs, golden gate, role matrix, and evidence export steps.',
    code: 'SLO · goldens\nRBAC · export',
  },
  {
    icon: '🔜', title: 'Next: Feedback Flywheels', titleClass: 'card-title-amber', subtitle: 'Day 146',
    description: 'Continue — learning systems phase.',
    link: { href: '/agentic-day-146', label: 'Go to Day 146 →' },
  },
];

const resources = [
  {
    icon: '🧵', title: 'Day 141', titleClass: 'card-title-cyan', subtitle: 'Start',
    description: 'Queues — start of this bridge.',
    link: { href: '/agentic-day-141', label: 'Open Day 141 →' },
  },
  {
    icon: '🏁', title: 'Day 140', titleClass: 'card-title-purple', subtitle: 'Prior',
    description: 'Production excellence before this bridge.',
    link: { href: '/agentic-day-140', label: 'Open Day 140 →' },
  },
  {
    icon: '🔁', title: 'Day 146', titleClass: 'card-title-amber', subtitle: 'Next',
    description: 'Feedback flywheels.',
    link: { href: '/agentic-day-146', label: 'Open Day 146 →' },
  },
];

export default function AgenticDay145() {
  return (
    <StandaloneJourneyPage
      dayNumber={145}
      series="Agentic AI"
      dateLabel="Agentic AI Day 145 · 13 Jan 2027"
      prev={{ href: '/agentic-day-144', label: '← Day 144' }}
      next={{ href: '/agentic-day-146', label: 'Day 146 →' }}
      tags={['Agentic AI', 'Milestone', 'Phase 19a']}
      theme="ENTERPRISE OPS BRIDGE MILESTONE"
      heroIcon="🏁"
      profileRole="AGENTIC AI · MILESTONE"
      progressWidth="95%"
      summary={
        <>
          Day 145 closes the enterprise ops bridge. <strong>Async, verified, gated, auditable</strong> — ready for learning systems.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Milestone', '#Enterprise', '#Day145', '#Ops', '#AgenticAI']}
    />
  );
}
