import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Data quality beats prompt tweaks', text: 'better inputs usually improve outcomes more than another prompt rewrite' },
  { title: 'Curate before scaling', text: 'bad examples, stale docs, and noisy retrieval poison the whole agent loop' },
  { title: 'Freshness matters', text: 'time-sensitive knowledge needs expiry rules and refresh paths' },
  { title: 'Chunking is product work', text: 'retrieval quality depends on structure, boundaries, and metadata' },
  { title: 'Label failure modes', text: 'separate missing knowledge, wrong reasoning, and tool misuse in your dataset' },
  { title: 'Score sources', text: 'not every document deserves the same trust in production' },
  { title: 'Feedback loops', text: 'real user misses should flow back into curation and indexing' },
  { title: 'Tomorrow: Day 167', text: 'evaluation frameworks that prove whether curation improved success' },
];

const core = [
  {
    icon: '🗂️',
    title: 'Curated Corpus',
    titleClass: 'card-title-cyan',
    subtitle: 'Foundation',
    description: 'Keep only trusted, current, well-structured knowledge in the agent’s reachable context.',
    code: 'trusted + fresh\nstructured docs',
  },
  {
    icon: '🏷️',
    title: 'Metadata First',
    titleClass: 'card-title-purple',
    subtitle: 'Retrieval',
    description: 'Tag owner, freshness, source, and sensitivity so routing and retrieval can filter correctly.',
    code: 'owner · date · trust',
  },
  {
    icon: '🔁',
    title: 'Feedback to Data',
    titleClass: 'card-title-amber',
    subtitle: 'Improve',
    description: 'Turn failed answers, misses, and escalations into dataset updates instead of prompt folklore.',
    code: 'miss -> fix corpus',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Curate 20 Examples',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Collect 20 real tasks and label the source documents each task truly needs.',
    code: 'task -> source map',
  },
  {
    icon: '📋',
    title: 'Freshness Policy',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Add review dates and expiry rules for documents that can go stale.',
    code: 'review_at + ttl',
  },
  {
    icon: '🔜',
    title: 'Next: Evals',
    titleClass: 'card-title-amber',
    subtitle: 'Day 167 · 19 Jan 2027',
    description: 'Tomorrow — evaluation design that shows whether better data really improved the agent.',
    link: { href: '/agentic-day-167', label: 'Go to Day 167 →' },
  },
];

const resources = [
  {
    icon: '📘',
    title: 'RAGAS',
    titleClass: 'card-title-cyan',
    subtitle: 'Retrieval',
    description: 'Evaluation ideas for retrieval quality and grounded answers.',
    link: { href: 'https://docs.ragas.io/', label: 'Open →', external: true },
  },
  {
    icon: '📖',
    title: 'Day 158',
    titleClass: 'card-title-purple',
    subtitle: 'Flywheel',
    description: 'Regression discipline that curated datasets should feed.',
    link: { href: '/agentic-day-158', label: 'Open Day 158 →' },
  },
  {
    icon: '🗺️',
    title: 'Day 162',
    titleClass: 'card-title-amber',
    subtitle: 'Tools',
    description: 'Tool selection gets better when the underlying data is trustworthy.',
    link: { href: '/agentic-day-162', label: 'Open Day 162 →' },
  },
];

export default function AgenticDay166() {
  return (
    <StandaloneJourneyPage
      dayNumber={166}
      series="Agentic AI"
      dateLabel="Agentic AI Day 166 · 31 Jan 2027"
      prev={{ href: '/agentic-day-165', label: '← Day 165' }}
      next={{ href: '/agentic-day-167', label: 'Day 167 →' }}
      tags={['Agentic AI', 'Data Quality', 'RAG']}
      theme="DATA QUALITY, CURATION & RETRIEVAL HYGIENE"
      heroIcon="🗂️"
      profileRole="AGENTIC AI · DATA"
      progressWidth="55%"
      summary={
        <>
          Day 166 shifts the focus from model choice to <strong>data quality</strong>: curate the corpus, tag it well,
          expire stale knowledge, and feed real misses back into the retrieval layer.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#RAG', '#Day166', '#DataQuality', '#Curation']}
    />
  );
}
