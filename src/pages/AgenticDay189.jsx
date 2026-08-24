import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Ship to a slice', text: 'route a small percent of traffic to the new prompt or model version' },
  { title: 'Compare live', text: 'canary vs baseline on the same golden signals and quality proxy' },
  { title: 'Auto-promote', text: 'widen traffic only when the canary meets or beats baseline' },
  { title: 'One-click rollback', text: 'version prompts and configs so revert is instant' },
  { title: 'No silent deploys', text: 'every rollout writes an audit event with who, what, and when' },
  { title: 'Tomorrow: Day 190', text: 'the release platform milestone closes the arc' },
];

const core = [
  {
    icon: '🐤',
    title: 'Canary Split',
    titleClass: 'card-title-cyan',
    subtitle: 'Ship',
    description: 'Send 5–10% to the new version behind a flag and keep the rest on baseline.',
    code: '10% new\n90% base',
  },
  {
    icon: '⚖️',
    title: 'Live Compare',
    titleClass: 'card-title-purple',
    subtitle: 'Judge',
    description: 'Hold the canary to the same signals and promote only on parity or better.',
    code: 'canary≥base?\npromote',
  },
  {
    icon: '↩️',
    title: 'Rollback',
    titleClass: 'card-title-amber',
    subtitle: 'Safety',
    description: 'Versioned prompts and configs make revert a single flag flip.',
    code: 'flag→prev\ninstant',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Canary Lab',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Deploy a tweaked prompt to 10%, compare quality for an hour, then decide.',
    code: '10% · 1h\npromote?',
  },
  {
    icon: '🧯',
    title: 'Rollback Drill',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Trigger a bad canary and confirm auto-rollback plus an audit row.',
    code: 'bad→revert\naudit row',
  },
  {
    icon: '🔜',
    title: 'Next: Milestone',
    titleClass: 'card-title-amber',
    subtitle: 'Day 190',
    description: 'Tomorrow — the release platform milestone.',
    link: { href: '/agentic-day-190', label: 'Go to Day 190 →' },
  },
];

const resources = [
  {
    icon: '📡',
    title: 'Day 188',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Signals the canary is judged on.',
    link: { href: '/agentic-day-188', label: 'Open Day 188 →' },
  },
  {
    icon: '🏁',
    title: 'Day 185',
    titleClass: 'card-title-purple',
    subtitle: 'Milestone',
    description: 'Runtime platform this release layer rides on.',
    link: { href: '/agentic-day-185', label: 'Open Day 185 →' },
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

export default function AgenticDay189() {
  return (
    <StandaloneJourneyPage
      dayNumber={189}
      series="Agentic AI"
      dateLabel="Agentic AI Day 189 · 1 Mar 2027"
      prev={{ href: '/agentic-day-188', label: '← Day 188' }}
      next={{ href: '/agentic-day-190', label: 'Day 190 →' }}
      tags={['Agentic AI', 'Release', 'Runtime']}
      theme="CANARY RELEASES & ROLLBACK"
      heroIcon="🐤"
      profileRole="AGENTIC AI · RELEASE"
      progressWidth="66%"
      summary={
        <>
          Day 189 ships safely. Roll new versions to a <strong>canary slice</strong>, compare on live signals,
          auto-promote on parity, and keep one-click rollback.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Release', '#Day189', '#Canary', '#Rollback']}
    />
  );
}
