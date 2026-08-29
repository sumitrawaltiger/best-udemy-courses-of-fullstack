import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Research agents', text: 'multi-hop search, compare sources, produce briefs with citations' },
  { title: 'Source quality', text: 'prefer primary docs; down-rank SEO spam; show disagreement when sources conflict' },
  { title: 'Outline first', text: 'plan sections before dumping a long essay — easier to steer and evaluate' },
  { title: 'Note taking', text: 'persist intermediate findings in structured notes, not only chat history' },
  { title: 'Freshness', text: 'stamp retrieval time; warn when sources are old for time-sensitive topics' },
  { title: 'Synthesis not collage', text: 'merge claims; do not paste contradictory paragraphs without reconciliation' },
  { title: 'Human edit loop', text: 'export brief to docs; track which paragraphs the human rewrote' },
  { title: 'What’s next', text: 'internal copilots serve employees — permissions become the hard problem' },
];

const core = [
  {
    icon: '🔍', title: 'Search → Note → Brief', titleClass: 'card-title-cyan', subtitle: 'Flow',
    description: 'Query web/docs → extract bullets with URLs → outline → draft brief → citation pass.',
    code: 'search → notes\n→ outline → brief\n→ cite check',
  },
  {
    icon: '⚖️', title: 'Conflict Callout', titleClass: 'card-title-purple', subtitle: 'Honesty',
    description: 'When two sources disagree, show both and label uncertainty — never silently pick one.',
    code: 'source A vs B\nflag conflict',
  },
  {
    icon: '⏱️', title: 'Freshness Stamp', titleClass: 'card-title-amber', subtitle: 'Trust',
    description: 'Attach retrieved_at and source_date. Stale critical topics get a warning banner.',
    code: 'retrieved_at\nsource_date · warn',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Competitor Brief', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Produce a 1-page competitor brief with ≥5 citations and an explicit “unknowns” section.',
    code: 'brief + 5 cites\n+ unknowns',
  },
  {
    icon: '🧩', title: 'Conflict Drill', titleClass: 'card-title-purple', subtitle: 'Eval',
    description: 'Feed two conflicting articles; confirm the agent surfaces the disagreement.',
    code: 'A ≠ B → callout',
  },
  {
    icon: '🔜', title: 'Next: Internal Copilot', titleClass: 'card-title-amber', subtitle: 'Day 119',
    description: 'Tomorrow — internal IT and employee copilots.',
    link: { href: '/agentic-day-119', label: 'Go to Day 119 →' },
  },
];

const resources = [
  {
    icon: '📄', title: 'Documents Day', titleClass: 'card-title-cyan', subtitle: 'Day 102',
    description: 'Citation and chunking habits for long sources.',
    link: { href: '/agentic-day-102', label: 'Open Day 102 →' },
  },
  {
    icon: '🧭', title: 'Agentic RAG', titleClass: 'card-title-purple', subtitle: 'Day 81',
    description: 'Multi-hop retrieve/grade for research loops.',
    link: { href: '/agentic-day-81', label: 'Open Day 81 →' },
  },
  {
    icon: '📈', title: 'Sales Day 117', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Research briefs often feed RevOps qualification.',
    link: { href: '/agentic-day-117', label: 'Open Day 117 →' },
  },
];

export default function AgenticDay118() {
  return (
    <StandaloneJourneyPage
      dayNumber={118}
      series="Agentic AI"
      dateLabel="Agentic AI Day 118 · 14 Jul 2027"
      prev={{ href: '/agentic-day-117', label: '← Day 117' }}
      next={{ href: '/agentic-day-119', label: 'Day 119 →' }}
      tags={['Agentic AI', 'Research', 'Phase 16']}
      theme="RESEARCH & KNOWLEDGE WORK AGENTS"
      heroIcon="🔍"
      profileRole="AGENTIC AI · RESEARCH"
      progressWidth="79%"
      summary={
        <>
          Day 118 builds research agents. <strong>Search</strong>, take structured notes, and ship briefs that call out
          conflicts and freshness — with citations.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#ResearchAgents', '#KnowledgeWork', '#Day118', '#Citations', '#AgenticAI']}
    />
  );
}
