import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Evidence packs', text: 'auditors want traces, policies, approvals, and retention proofs — ready-made' },
  { title: 'Immutable logs', text: 'tamper-evident run logs for regulated actions' },
  { title: 'Retention maps', text: 'how long prompts, traces, and outputs live — by data class' },
  { title: 'Access reviews', text: 'periodic proof that roles still match job needs' },
  { title: 'Incident artifacts', text: 'postmortems link to the exact runs and policy versions' },
  { title: 'Customer trust', text: 'exportable audit reports become a product feature' },
  { title: 'What’s next', text: 'queues + verify + RBAC + evidence close an enterprise ops bridge' },
];

const core = [
  {
    icon: '📑', title: 'Evidence Pack', titleClass: 'card-title-cyan', subtitle: 'Audit',
    description: 'Bundle: policy versions, sample traces, approval logs, retention policy.',
    code: 'policies · traces\napprovals · retain',
  },
  {
    icon: '🔒', title: 'Immutable Trail', titleClass: 'card-title-purple', subtitle: 'Logs',
    description: 'Append-only store for high-risk actions with hash chaining or WORM storage.',
    code: 'append-only\nhash chain',
  },
  {
    icon: '🗓️', title: 'Access Review', titleClass: 'card-title-amber', subtitle: 'Cadence',
    description: 'Quarterly role review with signed attestations.',
    code: 'review Q\nsign off',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Mini Pack', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Export a one-week evidence pack for one high-risk tool. Checklist completeness.',
    code: '1 week pack',
  },
  {
    icon: '🗑️', title: 'Retention Table', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Table of data classes → retention days → delete job owner.',
    code: 'class → days\nowner',
  },
  {
    icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-amber', subtitle: 'Day 145',
    description: 'Tomorrow — enterprise ops bridge milestone.',
    link: { href: '/agentic-day-145', label: 'Go to Day 145 →' },
  },
];

const resources = [
  {
    icon: '🔐', title: 'Day 143', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'RBAC decisions evidence must capture.',
    link: { href: '/agentic-day-143', label: 'Open Day 143 →' },
  },
  {
    icon: '⚖️', title: 'Day 104', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'Governance foundations.',
    link: { href: '/agentic-day-104', label: 'Open Day 104 →' },
  },
  {
    icon: '🔐', title: 'Day 133', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Privacy and retention hygiene.',
    link: { href: '/agentic-day-133', label: 'Open Day 133 →' },
  },
];

export default function AgenticDay144() {
  return (
    <StandaloneJourneyPage
      dayNumber={144}
      series="Agentic AI"
      dateLabel="Agentic AI Day 144 · 13 Jan 2027"
      prev={{ href: '/agentic-day-143', label: '← Day 143' }}
      next={{ href: '/agentic-day-145', label: 'Day 145 →' }}
      tags={['Agentic AI', 'Compliance', 'Phase 19a']}
      theme="COMPLIANCE & AUDIT EVIDENCE"
      heroIcon="📑"
      profileRole="AGENTIC AI · COMPLIANCE"
      progressWidth="94%"
      summary={
        <>
          Day 144 makes audits boring. Ship <strong>evidence packs</strong>, immutable trails, and retention maps as product features.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Compliance', '#Audit', '#Day144', '#Evidence', '#AgenticAI']}
    />
  );
}
