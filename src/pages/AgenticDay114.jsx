import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Macros first', text: 'common intents use approved templates — faster and safer than free generation' },
  { title: 'RAG for long tail', text: 'retrieve policy/docs when macros don’t fit' },
  { title: 'Version content', text: 'every macro and article has an owner and publish date' },
  { title: 'Cite or refuse', text: 'no source → don’t invent policy' },
  { title: 'Locale packs', text: 'translate macros carefully; don’t machine-translate legal text blindly' },
  { title: 'Feedback tags', text: 'thumbs on macros feed which ones to rewrite' },
  { title: 'What’s next', text: 'channels + integrations + routing + knowledge = domain-ready milestone' },
];

const core = [
  {
    icon: '📋', title: 'Macro Catalog', titleClass: 'card-title-cyan', subtitle: 'Templates',
    description: 'Intent → approved macro with variables. Agent fills slots; HITL if missing.',
    code: 'intent → macro\nfill slots',
  },
  {
    icon: '🔎', title: 'Long-Tail RAG', titleClass: 'card-title-purple', subtitle: 'Retrieve',
    description: 'When confidence on macros is low, retrieve articles and cite them.',
    code: 'low conf → RAG\n+ cite',
  },
  {
    icon: '🏷️', title: 'Content Owners', titleClass: 'card-title-amber', subtitle: 'Ops',
    description: 'Each article/macro has owner, review date, and retire rules.',
    code: 'owner · review\nretire',
  },
];

const practice = [
  {
    icon: '🧪', title: '10 Macros', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Write 10 macros for top intents. Mark which need HITL before send.',
    code: '10 macros\nHITL flags',
  },
  {
    icon: '📚', title: 'Cite Gate', titleClass: 'card-title-purple', subtitle: 'Safety',
    description: 'Force a policy question with no doc. Agent must escalate, not invent.',
    code: 'no doc → escalate',
  },
  {
    icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-amber', subtitle: 'Day 115',
    description: 'Tomorrow — domain-ready agents milestone.',
    link: { href: '/agentic-day-115', label: 'Go to Day 115 →' },
  },
];

const resources = [
  {
    icon: '🚦', title: 'Day 113', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Routing that selects macros.',
    link: { href: '/agentic-day-113', label: 'Open Day 113 →' },
  },
  {
    icon: '🧭', title: 'Day 81', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'Agentic RAG patterns.',
    link: { href: '/agentic-day-81', label: 'Open Day 81 →' },
  },
  {
    icon: '🎫', title: 'Day 116', titleClass: 'card-title-amber', subtitle: 'Ahead',
    description: 'Support agents using this library.',
    link: { href: '/agentic-day-116', label: 'Open Day 116 →' },
  },
];

export default function AgenticDay114() {
  return (
    <StandaloneJourneyPage
      dayNumber={114}
      series="Agentic AI"
      dateLabel="Agentic AI Day 114 · 22 Dec 2026"
      prev={{ href: '/agentic-day-113', label: '← Day 113' }}
      next={{ href: '/agentic-day-115', label: 'Day 115 →' }}
      tags={['Agentic AI', 'Knowledge', 'Phase 16a']}
      theme="MACROS & KNOWLEDGE LIBRARIES"
      heroIcon="📚"
      profileRole="AGENTIC AI · KNOWLEDGE"
      progressWidth="75%"
      summary={
        <>
          Day 114 curates answers. Prefer <strong>approved macros</strong>, fall back to cited RAG, and refuse when sources are missing.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Macros', '#Knowledge', '#Day114', '#RAG', '#AgenticAI']}
    />
  );
}
