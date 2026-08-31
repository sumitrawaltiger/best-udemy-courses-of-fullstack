import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Audit is a trail, not a log', text: 'every run, hop, decision, and approval must replay end-to-end' },
  { title: 'Who did what when', text: 'correlation_id → run_id → role_id → actor (human or model) + exact inputs/outputs' },
  { title: 'Retention & immutability', text: 'audit records are append-only, encrypted, retained per policy, auto-purged after' },
  { title: 'Evidence on demand', text: 'for any ticket or run, an auditor gets a read-only bundle in < 5 minutes' },
  { title: 'Privacy meets audit', text: 'PII is masked inside audit records; re-identification keys are separate and scoped' },
  { title: 'Tomorrow: Day 205', text: 'the governance and lifecycle milestone that ties the arc together' },
];

const core = [
  {
    icon: '🧾',
    title: 'Immutable Audit Log',
    titleClass: 'card-title-cyan',
    subtitle: 'Record',
    description: 'Append-only log: corr_id, run_id, role, actor, inputs, outputs, decisions, approvals, timestamps.',
    code: 'append-only\ncorr → run → hop',
  },
  {
    icon: '📦',
    title: 'Evidence Bundle',
    titleClass: 'card-title-purple',
    subtitle: 'Export',
    description: 'Given a run_id, export a signed, read-only bundle: log entries + prompt version + model pin.',
    code: 'bundle(run_id)\nsigned + RO',
  },
  {
    icon: '🔐',
    title: 'Masked Retention',
    titleClass: 'card-title-amber',
    subtitle: 'Retain',
    description: 'Keep audit records N years with PII masked; purge keys on schedule per policy.',
    code: 'mask + retain\npurge schedule',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Replay Lab',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Pick a random prod run; rebuild the entire decision trail from audit records end-to-end.',
    code: 'pick run →\nreplay all hops',
  },
  {
    icon: '🧷',
    title: 'Auditor SOP',
    titleClass: 'card-title-purple',
    subtitle: 'Docs',
    description: 'Write the SOP: how to request, export, verify, and revoke an evidence bundle in < 5 minutes.',
    code: 'SOP v1\nrequest → 5min',
  },
  {
    icon: '🔜',
    title: 'Next: Milestone',
    titleClass: 'card-title-amber',
    subtitle: 'Day 205',
    description: 'Tomorrow — the governance & lifecycle milestone.',
    link: { href: '/agentic-day-205', label: 'Go to Day 205 →' },
  },
];

const resources = [
  {
    icon: '🎟️',
    title: 'Day 203',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Approvals and CRs these audit records capture.',
    link: { href: '/agentic-day-203', label: 'Open Day 203 →' },
  },
  {
    icon: '🧷',
    title: 'Day 133',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'PII masking reused inside the audit log writes.',
    link: { href: '/agentic-day-133', label: 'Open Day 133 →' },
  },
  {
    icon: '📘',
    title: 'Python Track',
    titleClass: 'card-title-amber',
    subtitle: 'Hub',
    description: 'Full Gen AI + Agentic curriculum.',
    link: { href: '/python', label: 'Open Python track →' },
  },
];

export default function AgenticDay204() {
  return (
    <StandaloneJourneyPage
      dayNumber={204}
      series="Agentic AI"
      dateLabel="Agentic AI Day 204 · 23 Mar 2027"
      prev={{ href: '/agentic-day-203', label: '← Day 203' }}
      next={{ href: '/agentic-day-205', label: 'Day 205 →' }}
      tags={['Agentic AI', 'Compliance', 'Audit']}
      theme="AUDIT TRAILS & COMPLIANCE EVIDENCE"
      heroIcon="🧾"
      profileRole="AGENTIC AI · GOVERNANCE"
      progressWidth="74%"
      summary={
        <>
          Day 204 closes the books. Write <strong>immutable, masked, replayable audit trails</strong> and an
          auditor-ready evidence bundle SOP.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Compliance', '#Day204', '#Audit', '#Evidence']}
    />
  );
}
