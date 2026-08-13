import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Document agents', text: 'ingest PDFs, scans, and office files; answer with citations to page/section' },
  { title: 'Parse first', text: 'text extraction + layout beats dumping raw bytes into the prompt' },
  { title: 'Chunk with structure', text: 'respect headings, tables, and page boundaries — not only token windows' },
  { title: 'OCR when needed', text: 'scanned PDFs need OCR; measure quality before trusting retrieval' },
  { title: 'Table handling', text: 'tables often need specialized parsers or vision — plain text loses rows' },
  { title: 'Citation UX', text: 'show page number + snippet; let users open the source' },
  { title: 'PII in docs', text: 'contracts and IDs — redact or gate access before indexing' },
  { title: 'Agentic RAG on docs', text: 'rewrite query, retrieve, grade faithfulness, retry — same Day 81 pattern' },
];

const core = [
  {
    icon: '📄', title: 'Ingest Pipeline', titleClass: 'card-title-cyan', subtitle: 'Parse',
    description: 'Detect type → extract text/tables → chunk by structure → embed → index with page metadata.',
    code: 'detect → extract\n→ chunk → embed\n→ index(+page)',
  },
  {
    icon: '🔎', title: 'Cite Pages', titleClass: 'card-title-purple', subtitle: 'Trust',
    description: 'Every claim maps to doc_id + page + span. No citation → do not assert.',
    code: 'answer + [doc p.12]\nuncited → drop',
  },
  {
    icon: '🧹', title: 'Doc Privacy', titleClass: 'card-title-amber', subtitle: 'Safety',
    description: 'Classify sensitive docs; encrypt at rest; exclude from shared tenant indexes.',
    code: 'classify → ACL\nredact · encrypt',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Handbook Q&A', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Index a 20-page PDF. Answer 5 questions with page citations; fail if any answer lacks a cite.',
    code: '5 Qs · all cited',
  },
  {
    icon: '📊', title: 'Table Round-Trip', titleClass: 'card-title-purple', subtitle: 'Hard',
    description: 'Pull one table into JSON/CSV via the agent and verify row counts match the PDF.',
    code: 'table → JSON\nrow count check',
  },
  {
    icon: '🔜', title: 'Next: Analytics', titleClass: 'card-title-amber', subtitle: 'Day 103',
    description: 'Tomorrow — data analysis and code-interpreter style agents.',
    link: { href: '/agentic-day-103', label: 'Go to Day 103 →' },
  },
];

const resources = [
  {
    icon: '📘', title: 'Agentic RAG', titleClass: 'card-title-cyan', subtitle: 'Day 81',
    description: 'Rewrite/retrieve/grade loops that apply directly to documents.',
    link: { href: '/agentic-day-81', label: 'Open Day 81 →' },
  },
  {
    icon: '👁️', title: 'Vision Day', titleClass: 'card-title-purple', subtitle: 'Day 101',
    description: 'When OCR/layout fails, vision over page images can help.',
    link: { href: '/agentic-day-101', label: 'Open Day 101 →' },
  },
  {
    icon: '📖', title: 'RAG Module', titleClass: 'card-title-amber', subtitle: 'PY Track',
    description: 'Classic RAG foundations for chunking and retrieval.',
    link: { href: '/python/learn/retrieval-augmented-generation', label: 'Open RAG module →' },
  },
];

export default function AgenticDay102() {
  return (
    <StandaloneJourneyPage
      dayNumber={102}
      series="Agentic AI"
      dateLabel="Agentic AI Day 102 · 22 Nov 2026"
      prev={{ href: '/agentic-day-101', label: '← Day 101' }}
      next={{ href: '/agentic-day-103', label: 'Day 103 →' }}
      tags={['Gen AI', 'Documents', 'Phase 15']}
      theme="DOCUMENT INTELLIGENCE AGENTS"
      heroIcon="📄"
      profileRole="GEN AI · DOCUMENTS"
      progressWidth="68%"
      summary={
        <>
          Day 102 tackles long files. Build <strong>document agents</strong> that parse PDFs, chunk with structure, and
          answer with <strong>page citations</strong>.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Documents', '#PDF', '#Day102', '#RAG', '#AgenticAI']}
    />
  );
}
