import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Why flywheels', text: 'every run can teach the next — if you capture signals on purpose' },
  { title: 'Signal types', text: 'thumbs, edits, abandon, escalation, and tool success/fail' },
  { title: 'Preference pairs', text: 'chosen vs rejected replies become training or ranking data' },
  { title: 'Human labels', text: 'spot-check hard cases; don’t trust raw clicks alone' },
  { title: 'Privacy filter', text: 'strip PII before any dataset leaves the tenant boundary' },
  { title: 'Close the loop', text: 'route insights into prompts, routers, and eval suites — not a graveyard spreadsheet' },
  { title: 'Version evidence', text: 'every policy change cites which feedback cohort justified it' },
  { title: 'What’s next', text: 'feedback without safe update paths just piles up unread' },
];

const core = [
  {
    icon: '🔁', title: 'Signal Capture', titleClass: 'card-title-cyan', subtitle: 'Data',
    description: 'Log thumbs, regenerates, edits, and escalations with run_id and prompt/model versions.',
    code: 'thumb · edit\nabandon · escalate',
  },
  {
    icon: '⚖️', title: 'Preference Pairs', titleClass: 'card-title-purple', subtitle: 'Rank',
    description: 'When a user edits or picks an alternate, store (rejected, chosen) for ranking/eval.',
    code: 'A rejected\nB chosen',
  },
  {
    icon: '🧹', title: 'Sanitize First', titleClass: 'card-title-amber', subtitle: 'Privacy',
    description: 'Redact PII and secrets before export. Tenant-scoped datasets only.',
    code: 'redact → export\ntenant only',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Feedback Schema', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Define a JSON event for thumbs + edit. Emit it from one chat turn end-to-end.',
    code: 'event schema\nemit once',
  },
  {
    icon: '📊', title: 'Weekly Cohort', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Pull 50 labeled turns. List top 3 failure themes and one prompt change each.',
    code: '50 turns\n3 themes → fix',
  },
  {
    icon: '🔜', title: 'Next: Safe Updates', titleClass: 'card-title-amber', subtitle: 'Day 147',
    description: 'Tomorrow — online learning and safe prompt/policy updates.',
    link: { href: '/agentic-day-147', label: 'Go to Day 147 →' },
  },
];

const resources = [
  {
    icon: '🏁', title: 'Day 140', titleClass: 'card-title-cyan', subtitle: 'Prior Milestone',
    description: 'Production excellence this learning phase builds on.',
    link: { href: '/agentic-day-140', label: 'Open Day 140 →' },
  },
  {
    icon: '📏', title: 'Eval Day 50', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'Offline eval that feedback should feed.',
    link: { href: '/agentic-day-50', label: 'Open Day 50 →' },
  },
  {
    icon: '🧪', title: 'Experiments Day', titleClass: 'card-title-amber', subtitle: 'Day 124',
    description: 'A/B habits for testing flywheel-driven changes.',
    link: { href: '/agentic-day-124', label: 'Open Day 124 →' },
  },
];

export default function AgenticDay146() {
  return (
    <StandaloneJourneyPage
      dayNumber={146}
      series="Agentic AI"
      dateLabel="Agentic AI Day 146 · 22 Dec 2026"
      prev={{ href: '/agentic-day-145', label: '← Day 145' }}
      next={{ href: '/agentic-day-147', label: 'Day 147 →' }}
      tags={['Agentic AI', 'Feedback', 'Phase 20']}
      theme="FEEDBACK FLYWHEELS & PREFERENCE DATA"
      heroIcon="🔁"
      profileRole="AGENTIC AI · LEARNING"
      progressWidth="94%"
      summary={
        <>
          Day 146 closes the loop. Capture <strong>thumbs, edits, and escalations</strong>, build preference pairs,
          and sanitize before any dataset leaves the tenant.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Feedback', '#Flywheel', '#Day146', '#PreferenceData', '#AgenticAI']}
    />
  );
}
