import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Gate the merge', text: 'evals run on every PR and a score drop blocks the merge automatically' },
  { title: 'Threshold + delta', text: 'fail if absolute score is below the floor or drops more than N points vs baseline' },
  { title: 'Fast subset', text: 'run a smoke suite per push and the full golden suite nightly' },
  { title: 'Flake control', text: 'repeat borderline tasks and require a majority pass to cut noise' },
  { title: 'Report in the PR', text: 'post a table of per-task deltas as a PR comment' },
  { title: 'Tomorrow: Day 188', text: 'watch quality live in production, not just in CI' },
];

const core = [
  {
    icon: '🚦',
    title: 'Score Gate',
    titleClass: 'card-title-cyan',
    subtitle: 'Rule',
    description: 'Block merge when the aggregate is below the floor or regresses beyond the allowed delta.',
    code: 'score<floor?\nfail build',
  },
  {
    icon: '⏱️',
    title: 'Smoke vs Full',
    titleClass: 'card-title-purple',
    subtitle: 'Split',
    description: 'Small suite on each push, full golden suite on a nightly schedule.',
    code: 'push→smoke\nnight→full',
  },
  {
    icon: '🧾',
    title: 'PR Report',
    titleClass: 'card-title-amber',
    subtitle: 'Signal',
    description: 'Comment per-task deltas so reviewers see exactly what moved.',
    code: 'Δ per task\nin PR',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Break It',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Introduce a bad prompt, confirm the gate fails, then revert and confirm green.',
    code: 'regress→red\nrevert→green',
  },
  {
    icon: '🎲',
    title: 'De-Flake',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Run borderline tasks three times and pass only on a majority to avoid false alarms.',
    code: '3× vote\nmajority',
  },
  {
    icon: '🔜',
    title: 'Next: Live Watch',
    titleClass: 'card-title-amber',
    subtitle: 'Day 188',
    description: 'Tomorrow — observability for production runs.',
    link: { href: '/agentic-day-188', label: 'Go to Day 188 →' },
  },
];

const resources = [
  {
    icon: '📏',
    title: 'Day 186',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'The eval harness this gate runs.',
    link: { href: '/agentic-day-186', label: 'Open Day 186 →' },
  },
  {
    icon: '🏁',
    title: 'Day 185',
    titleClass: 'card-title-purple',
    subtitle: 'Milestone',
    description: 'Runtime platform under test.',
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

export default function AgenticDay187() {
  return (
    <StandaloneJourneyPage
      dayNumber={187}
      series="Agentic AI"
      dateLabel="Agentic AI Day 187 · 2 Mar 2027"
      prev={{ href: '/agentic-day-186', label: '← Day 186' }}
      next={{ href: '/agentic-day-188', label: 'Day 188 →' }}
      tags={['Agentic AI', 'CI', 'Evals']}
      theme="EVAL REGRESSION GATES IN CI"
      heroIcon="🚦"
      profileRole="AGENTIC AI · CI GATES"
      progressWidth="65%"
      summary={
        <>
          Day 187 makes quality non-negotiable. Run the eval harness in CI and <strong>block merges</strong> when scores
          regress past a threshold.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#CI', '#Day187', '#Regression', '#Evals']}
    />
  );
}
