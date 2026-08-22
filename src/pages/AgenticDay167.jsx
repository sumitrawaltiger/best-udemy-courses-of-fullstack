import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'You need task evals', text: 'generic benchmarks miss the workflows your users actually care about' },
  { title: 'Golden sets anchor quality', text: 'a small stable suite catches regressions faster than debate' },
  { title: 'Measure by failure class', text: 'retrieval miss, reasoning miss, tool miss, policy miss are different problems' },
  { title: 'Pairwise beats vague scoring', text: 'A vs B comparisons are easier to judge consistently' },
  { title: 'Offline before online', text: 'cheap eval loops should fail changes before production traffic sees them' },
  { title: 'Human review still matters', text: 'for high-risk tasks, sampled human judgment calibrates automated evals' },
  { title: 'Track drift', text: 'quality can decay even when code stays unchanged' },
  { title: 'Tomorrow: Day 168', text: 'memory design for agents that need continuity across runs' },
];

const core = [
  {
    icon: '🧪',
    title: 'Golden Suite',
    titleClass: 'card-title-cyan',
    subtitle: 'Baseline',
    description: 'A compact set of representative tasks that must pass before a change ships.',
    code: '20 tasks\nmust stay green',
  },
  {
    icon: '⚖️',
    title: 'Pairwise Review',
    titleClass: 'card-title-purple',
    subtitle: 'Compare',
    description: 'Compare candidate outputs against baseline outputs to judge whether the change helped.',
    code: 'A vs B -> winner',
  },
  {
    icon: '📉',
    title: 'Failure Taxonomy',
    titleClass: 'card-title-amber',
    subtitle: 'Debug',
    description: 'Label what failed so the next fix targets the real issue instead of guessing.',
    code: 'retrieve · reason · tool',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Write 10 Goldens',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Create 10 task-level evals with expected behavior and explicit pass criteria.',
    code: 'input + rubric',
  },
  {
    icon: '📊',
    title: 'Add Scorecard',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Track success rate, hallucination rate, and retrieval hit rate per workflow.',
    code: 'success% · hit% · hall%',
  },
  {
    icon: '🔜',
    title: 'Next: Memory',
    titleClass: 'card-title-amber',
    subtitle: 'Day 168 · 24 Jan 2027',
    description: 'Tomorrow — memory layers: session, semantic, and durable state.',
    link: { href: '/agentic-day-168', label: 'Go to Day 168 →' },
  },
];

const resources = [
  {
    icon: '📘',
    title: 'OpenAI Evals',
    titleClass: 'card-title-cyan',
    subtitle: 'Framework',
    description: 'Patterns for building repeatable evaluation loops.',
    link: { href: 'https://github.com/openai/evals', label: 'Open →', external: true },
  },
  {
    icon: '📖',
    title: 'Day 157',
    titleClass: 'card-title-purple',
    subtitle: 'Observability',
    description: 'Telemetry that supports meaningful scorecards.',
    link: { href: '/agentic-day-157', label: 'Open Day 157 →' },
  },
  {
    icon: '🗺️',
    title: 'Day 166',
    titleClass: 'card-title-amber',
    subtitle: 'Data',
    description: 'Good evals start with the right curated tasks and sources.',
    link: { href: '/agentic-day-166', label: 'Open Day 166 →' },
  },
];

export default function AgenticDay167() {
  return (
    <StandaloneJourneyPage
      dayNumber={167}
      series="Agentic AI"
      dateLabel="Agentic AI Day 167 · 5 Feb 2027"
      prev={{ href: '/agentic-day-166', label: '← Day 166' }}
      next={{ href: '/agentic-day-168', label: 'Day 168 →' }}
      tags={['Agentic AI', 'Evals', 'Quality']}
      theme="EVALUATION DESIGN: GOLDENS, PAIRWISE, FAILURE TAXONOMY"
      heroIcon="🧪"
      profileRole="AGENTIC AI · EVALS"
      progressWidth="56%"
      summary={
        <>
          Day 167 turns quality into a system: build <strong>task-level goldens</strong>, compare changes pairwise, and
          label failures precisely so the next iteration improves the right layer.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Evals', '#Day167', '#Quality', '#Goldens']}
    />
  );
}
