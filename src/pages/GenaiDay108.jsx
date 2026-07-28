import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Knowledge ops', text: 'retrieval systems need indexing, freshness, and ownership like any data pipeline' },
  { title: 'Source lifecycle', text: 'documents change, expire, and need re-indexing on a schedule' },
  { title: 'Metadata pays', text: 'tags, tenant ids, versions, and timestamps make retrieval safer and sharper' },
  { title: 'Chunking drifts', text: 'one chunking strategy rarely fits every source forever' },
  { title: 'Freshness is UX', text: 'stale answers break trust even when the retrieval pipeline is technically up' },
  { title: 'Audit the corpus', text: 'know what data is in the index and why it is there' },
];

const core = [
  { icon: '🗂️', title: 'Index Lifecycle', titleClass: 'card-title-cyan', subtitle: 'Operate', description: 'Treat ingestion, re-indexing, and cleanup as first-class operational workflows.', code: 'ingest -> reindex -> retire' },
  { icon: '🏷️', title: 'Metadata Filters', titleClass: 'card-title-purple', subtitle: 'Scope', description: 'Use metadata consistently so retrieval is filtered by tenant, source, and freshness.', code: 'tenant + source + time' },
  { icon: '⏱️', title: 'Freshness Signals', titleClass: 'card-title-amber', subtitle: 'Trust', description: 'Measure how recent the supporting documents are and surface that signal when needed.', code: 'source_age -> warn' },
];

const practice = [
  { icon: '🧪', title: 'Reindex Plan', titleClass: 'card-title-cyan', subtitle: 'Build', description: 'Define when a source should be reprocessed and when it should be removed.', code: 'refresh + retention' },
  { icon: '📋', title: 'Corpus Audit', titleClass: 'card-title-purple', subtitle: 'Review', description: 'List the sources in your retrieval corpus and verify each still belongs there.', code: 'source inventory' },
  { icon: '🔜', title: 'Next: Product Safety', titleClass: 'card-title-amber', subtitle: 'Day 109', description: 'Tomorrow -> safeguards for real Gen AI product launches.', link: { href: '/genai-day-109', label: 'Go to Day 109 ->' } },
];

const resources = [
  { icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub', description: 'Browse the full Gen AI lessons and curriculum on the site.', link: { href: '/genai', label: 'Open Gen AI Track ->' } },
  { icon: '📖', title: 'Qdrant', titleClass: 'card-title-purple', subtitle: 'Vector DB', description: 'Operational guidance for vector stores and filtering.', link: { href: 'https://qdrant.tech/documentation/', label: 'Open ->', external: true } },
  { icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember', description: 'A retrieval index is a living dataset, not a one-time import.', footer: 'Operate the corpus.' },
];

export default function GenaiDay108() {
  return (
    <StandaloneJourneyPage
      dayNumber={108}
      dateLabel="Gen AI Day 108 · 108 Aug 2026"
      prev={{ href: '/genai-day-107', label: '← Day 107' }}
      next={{ href: '/genai-day-109', label: 'Day 109 →' }}
      tags={['Gen AI', 'Knowledge Ops', 'Day 108']}
      theme="OPERATING KNOWLEDGE PIPELINES"
      heroIcon="🗂️"
      profileRole="GEN AI · RAG OPS"
      progressWidth="72%"
      summary="Day 108 treats retrieval as operations work: ingestion, metadata, freshness, and document lifecycle management that keeps grounded systems trustworthy."
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#GenAI', '#RAGOps', '#Day108', '#Knowledge', '#100DaysOfCode']}
    />
  );
}
