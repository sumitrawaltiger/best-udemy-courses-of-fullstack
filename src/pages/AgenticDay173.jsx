import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Production creates the best examples', text: 'real misses are usually more valuable than synthetic benchmarks' },
  { title: 'Close loops deliberately', text: 'feedback should enter triage, labeling, curation, and eval updates in a visible path' },
  { title: 'Not every failure deserves fine-tuning', text: 'many problems are fixed in retrieval, policy, UX, or routing first' },
  { title: 'Sample wins too', text: 'successful runs show what should be preserved during future changes' },
  { title: 'Bias your queue wisely', text: 'rare but high-impact misses may matter more than frequent trivial ones' },
  { title: 'Version the corpus', text: 'if the data changes, the eval story and rollback story must stay traceable' },
  { title: 'Improvement should be measurable', text: 'every feedback-driven change should have before/after evidence' },
  { title: 'Tomorrow: Day 174', text: 'quality assurance for multi-step agent workflows and release gates' },
];

const core = [
  {
    icon: '📥',
    title: 'Feedback Intake',
    titleClass: 'card-title-cyan',
    subtitle: 'Collect',
    description: 'Capture production misses, surprising successes, and escalations in a structured queue.',
    code: 'prod signal -> labeled queue',
  },
  {
    icon: '🏷️',
    title: 'Labeled Learning',
    titleClass: 'card-title-purple',
    subtitle: 'Curate',
    description: 'Tag failures by cause so future fixes can target the correct subsystem.',
    code: 'reason · source · severity',
  },
  {
    icon: '📈',
    title: 'Measured Update',
    titleClass: 'card-title-amber',
    subtitle: 'Prove',
    description: 'Update datasets and evals together, then compare before and after results.',
    code: 'change -> rerun goldens',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Feedback Queue',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Create a queue for production misses with required labels and evidence fields.',
    code: 'task · miss · evidence',
  },
  {
    icon: '📋',
    title: 'Corpus Versions',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Version your retrieval corpus so regressions can be tied to specific data changes.',
    code: 'corpus_v + eval_v',
  },
  {
    icon: '🔜',
    title: 'Next: QA Gates',
    titleClass: 'card-title-amber',
    subtitle: 'Day 174 · 26 Aug 2027',
    description: 'Tomorrow — release gates for multi-step workflows and agent QA discipline.',
    link: { href: '/agentic-day-174', label: 'Go to Day 174 →' },
  },
];

const resources = [
  {
    icon: '📘',
    title: 'RAGAS',
    titleClass: 'card-title-cyan',
    subtitle: 'Eval',
    description: 'Helpful concepts for measuring grounded retrieval improvements.',
    link: { href: 'https://docs.ragas.io/', label: 'Open →', external: true },
  },
  {
    icon: '📖',
    title: 'Day 166',
    titleClass: 'card-title-purple',
    subtitle: 'Data',
    description: 'Curation patterns that production feedback should enrich.',
    link: { href: '/agentic-day-166', label: 'Open Day 166 →' },
  },
  {
    icon: '🗺️',
    title: 'Day 167',
    titleClass: 'card-title-amber',
    subtitle: 'Evals',
    description: 'Goldens and scorecards that should absorb production learning.',
    link: { href: '/agentic-day-167', label: 'Open Day 167 →' },
  },
];

export default function AgenticDay173() {
  return (
    <StandaloneJourneyPage
      dayNumber={173}
      series="Agentic AI"
      dateLabel="Agentic AI Day 173 · 7 Sep 2027"
      prev={{ href: '/agentic-day-172', label: '← Day 172' }}
      next={{ href: '/agentic-day-174', label: 'Day 174 →' }}
      tags={['Agentic AI', 'Feedback', 'Evals']}
      theme="FROM PRODUCTION FEEDBACK TO DATASET & EVAL IMPROVEMENT"
      heroIcon="📥"
      profileRole="AGENTIC AI · IMPROVE"
      progressWidth="58%"
      summary={
        <>
          Day 173 closes the production loop: capture real misses, label them well, version the corpus, and prove each
          update with <strong>before/after eval evidence</strong>.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Feedback', '#Day173', '#Evals', '#DataOps']}
    />
  );
}
