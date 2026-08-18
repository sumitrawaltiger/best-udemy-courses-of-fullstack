import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'The flywheel matters', text: 'eval → analyze → fix → re-eval is how agents improve safely' },
  { title: 'Fix the pipeline', text: 'many failures are tooling, data, or policy issues — not “prompting”' },
  { title: 'Regression is default', text: 'without a suite, every change breaks something' },
  { title: 'Small changes win', text: 'change one variable at a time and measure impact on goldens' },
  { title: 'Ship guardrails', text: 'budgets, stop rules, and allowlists must ship with features' },
  { title: 'Make debugging cheap', text: 'run ids, replay, and diffable traces reduce iteration cost' },
  { title: 'Own the releases', text: 'policy packs and tool schemas should have owners and reviews' },
  { title: 'Tomorrow: Day 159', text: 'next step: multi-agent orchestration patterns and coordination' },
];

const core = [
  {
    icon: '♻️',
    title: 'Improvement Loop',
    titleClass: 'card-title-cyan',
    subtitle: 'Flywheel',
    description: 'Evals catch failure, traces explain it, and fixes are validated by rerunning the suite.',
    code: 'eval -> trace\n-> fix -> eval',
  },
  {
    icon: '🧪',
    title: 'Regression Discipline',
    titleClass: 'card-title-purple',
    subtitle: 'Guard',
    description: 'Every fix adds coverage: new golden tasks, new adversarial cases, or new tool checks.',
    code: 'fix -> new test',
  },
  {
    icon: '📦',
    title: 'Release Hygiene',
    titleClass: 'card-title-amber',
    subtitle: 'Ship',
    description: 'Version policies and tools; require reviews; keep rollback switches ready.',
    code: 'version + review\nrollback ready',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'One Fix, One Metric',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Pick one failure, change one thing, and measure improvement across the suite.',
    code: 'change 1 -> measure',
  },
  {
    icon: '🧾',
    title: 'Add a Replay Link',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Store a replay link or run_id for every failed run so debugging is one click.',
    code: 'run_id',
  },
  {
    icon: '🔜',
    title: 'Next: Day 159',
    titleClass: 'card-title-amber',
    subtitle: 'Coordination',
    description: 'Tomorrow — multi-agent coordination patterns (planner/worker, debates, supervision).',
    link: { href: '/agentic-day-159', label: 'Day 159 →' },
  },
];

const resources = [
  {
    icon: '📘',
    title: 'LangSmith',
    titleClass: 'card-title-cyan',
    subtitle: 'Tracing',
    description: 'Tracing + evaluation tooling for LLM apps and agents.',
    link: { href: 'https://www.langchain.com/langsmith', label: 'Open →', external: true },
  },
  {
    icon: '📖',
    title: 'Prompt Engineering Guide',
    titleClass: 'card-title-purple',
    subtitle: 'Reference',
    description: 'Useful patterns, but treat it as one lever in the flywheel.',
    link: { href: 'https://www.promptingguide.ai/', label: 'Open →', external: true },
  },
  {
    icon: '🗺️',
    title: 'Days 154–157',
    titleClass: 'card-title-amber',
    subtitle: 'Arc',
    description: 'Outcomes, metrics, tools, memory — the foundation for safe iteration.',
    link: { href: '/agentic-day-154', label: 'Back to Day 154 →' },
  },
];

export default function AgenticDay158() {
  return (
    <StandaloneJourneyPage
      dayNumber={158}
      series="Agentic AI"
      dateLabel="Agentic AI Day 158 · 23 Jan 2027"
      prev={{ href: '/agentic-day-157', label: '← Day 157' }}
      next={{ href: '/agentic-day-159', label: 'Day 159 →' }}
      tags={['Agentic AI', 'Evals', 'Flywheel']}
      theme="THE AGENT IMPROVEMENT FLYWHEEL"
      heroIcon="♻️"
      profileRole="AGENTIC AI · IMPROVE"
      progressWidth="53%"
      summary={
        <>
          Day 158 operationalizes improvement: build a <strong>flywheel</strong> around evals, traces, and regression
          suites so you can ship faster without roulette.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Evals', '#Day158', '#Flywheel', '#LLMOps']}
    />
  );
}

