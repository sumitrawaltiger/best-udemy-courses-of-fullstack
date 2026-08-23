import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Why graphs', text: 'entities and relations beat flat chunks when agents must reason across facts' },
  { title: 'Nodes & edges', text: 'people, products, tickets, policies — linked by typed relationships' },
  { title: 'Hybrid retrieve', text: 'vector search finds candidates; graph walk expands neighborhood context' },
  { title: 'Write paths', text: 'agents may propose new edges; humans or validators commit them' },
  { title: 'Freshness', text: 'stale edges mislead — TTLs and source timestamps on every fact' },
  { title: 'Tenant isolation', text: 'graph partitions per tenant; never leak edges across customers' },
  { title: 'Explainability', text: 'answers can cite the path: A → works_at → B → owns → C' },
  { title: 'What’s next', text: 'graphs help; product analytics tell you if users actually win' },
];

const core = [
  {
    icon: '🕸️', title: 'Entity Model', titleClass: 'card-title-cyan', subtitle: 'Schema',
    description: 'Define 5–10 entity types and allowed edge types. Keep the schema small and strict.',
    code: 'Person · Ticket\nPolicy · edges',
  },
  {
    icon: '🔎', title: 'Hybrid RAG', titleClass: 'card-title-purple', subtitle: 'Retrieve',
    description: 'Embed query → top docs → extract entities → expand N hops → pack into context.',
    code: 'vector → entities\n→ N-hop → context',
  },
  {
    icon: '✍️', title: 'Propose → Commit', titleClass: 'card-title-amber', subtitle: 'Writes',
    description: 'Agent proposes edges with evidence. Validator or HITL commits; audit the change.',
    code: 'propose edge\nvalidate → commit',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Mini Graph', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Model a support org: User, Ticket, Product, Policy. Add 15 edges. Query a 2-hop path.',
    code: '4 types · 15 edges\n2-hop query',
  },
  {
    icon: '🔗', title: 'Cite the Path', titleClass: 'card-title-purple', subtitle: 'UX',
    description: 'Answer one question and show the graph path used as citations in the UI.',
    code: 'answer + path',
  },
  {
    icon: '🔜', title: 'Next: Analytics', titleClass: 'card-title-amber', subtitle: 'Day 149',
    description: 'Tomorrow — agent product analytics.',
    link: { href: '/agentic-day-149', label: 'Go to Day 149 →' },
  },
];

const resources = [
  {
    icon: '📦', title: 'Updates Day 147', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Packs that can include graph schema versions.',
    link: { href: '/agentic-day-147', label: 'Open Day 147 →' },
  },
  {
    icon: '📚', title: 'Agentic RAG Day', titleClass: 'card-title-purple', subtitle: 'Day 81',
    description: 'Retrieval patterns graphs extend.',
    link: { href: '/agentic-day-81', label: 'Open Day 81 →' },
  },
  {
    icon: '💾', title: 'Memory Day 92', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Long-term memory vs structured graph facts.',
    link: { href: '/agentic-day-92', label: 'Open Day 92 →' },
  },
];

export default function AgenticDay148() {
  return (
    <StandaloneJourneyPage
      dayNumber={148}
      series="Agentic AI"
      dateLabel="Agentic AI Day 148 · 18 Jan 2027"
      prev={{ href: '/agentic-day-147', label: '← Day 147' }}
      next={{ href: '/agentic-day-149', label: 'Day 149 →' }}
      tags={['Agentic AI', 'Knowledge Graph', 'Phase 20']}
      theme="KNOWLEDGE GRAPHS FOR AGENTS"
      heroIcon="🕸️"
      profileRole="AGENTIC AI · GRAPH"
      progressWidth="95%"
      summary={
        <>
          Day 148 structures knowledge. Use a small <strong>entity/edge schema</strong>, hybrid vector+graph retrieve,
          and propose→commit writes with audit.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#KnowledgeGraph', '#HybridRAG', '#Day148', '#Entities', '#AgenticAI']}
    />
  );
}
