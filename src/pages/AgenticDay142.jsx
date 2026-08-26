import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Verify outcomes', text: 'judge agents by end state and side effects — not fluent text' },
  { title: 'Gates before commit', text: 'validate schemas and business rules before writes land' },
  { title: 'Golden suites', text: 'fixed multi-step tasks catch regressions on every pack change' },
  { title: 'Trace QA', text: 'review plans and tool picks to spot loops early' },
  { title: 'Failure taxonomy', text: 'plan / tool / policy / env — label to fix faster' },
  { title: 'Reviewer agents', text: 'optional second model checks risky steps before execute' },
  { title: 'What’s next', text: 'verified systems still need RBAC so the right humans approve' },
];

const core = [
  {
    icon: '✅', title: 'Outcome Checks', titleClass: 'card-title-cyan', subtitle: 'Done',
    description: 'Define measurable success and expected side effects per task type.',
    code: 'goal → verified state',
  },
  {
    icon: '🧾', title: 'Pre-Commit Gate', titleClass: 'card-title-purple', subtitle: 'Safety',
    description: 'Schema + policy validate before any external write.',
    code: 'validate → commit',
  },
  {
    icon: '🧪', title: 'Golden Suite', titleClass: 'card-title-amber', subtitle: 'CI',
    description: '10+ multi-step tasks with pass/fail. Block promote on red.',
    code: 'goldens in CI\nred → block',
  },
];

const practice = [
  {
    icon: '🧪', title: '10 Goldens', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Write 10 tasks with expected final state. Run once; record pass rate.',
    code: '10 tasks\npass%',
  },
  {
    icon: '📋', title: 'Taxonomy Pass', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Classify 20 failures into plan/tool/policy/env buckets.',
    code: '20 fails\n4 buckets',
  },
  {
    icon: '🔜', title: 'Next: RBAC', titleClass: 'card-title-amber', subtitle: 'Day 143',
    description: 'Tomorrow — RBAC and policy-as-code.',
    link: { href: '/agentic-day-143', label: 'Go to Day 143 →' },
  },
];

const resources = [
  {
    icon: '🧵', title: 'Day 141', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Queues that feed verified workers.',
    link: { href: '/agentic-day-141', label: 'Open Day 141 →' },
  },
  {
    icon: '📏', title: 'Day 50', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'Eval foundations.',
    link: { href: '/agentic-day-50', label: 'Open Day 50 →' },
  },
  {
    icon: '📦', title: 'Day 147', titleClass: 'card-title-amber', subtitle: 'Ahead',
    description: 'Policy packs that need these gates.',
    link: { href: '/agentic-day-147', label: 'Open Day 147 →' },
  },
];

export default function AgenticDay142() {
  return (
    <StandaloneJourneyPage
      dayNumber={142}
      series="Agentic AI"
      dateLabel="Agentic AI Day 142 · 19 Jan 2027"
      prev={{ href: '/agentic-day-141', label: '← Day 141' }}
      next={{ href: '/agentic-day-143', label: 'Day 143 →' }}
      tags={['Agentic AI', 'Verification', 'Phase 19a']}
      theme="VERIFICATION GATES & GOLDEN SUITES"
      heroIcon="✅"
      profileRole="AGENTIC AI · QA"
      progressWidth="93%"
      summary={
        <>
          Day 142 verifies before it commits. <strong>Outcome checks</strong>, pre-commit gates, and golden suites in CI.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Verification', '#GoldenSuite', '#Day142', '#QA', '#AgenticAI']}
    />
  );
}
