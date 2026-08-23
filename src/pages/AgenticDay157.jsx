import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Memory is a product decision', text: 'what you remember changes what the agent becomes' },
  { title: 'Scope is non-negotiable', text: 'user, tenant, and workspace boundaries must always hold' },
  { title: 'Retention policies', text: 'store less by default, delete on schedule, and honor residency rules' },
  { title: 'Summaries beat raw logs', text: 'store compact, verified facts instead of chat transcripts' },
  { title: 'RAG vs memory', text: 'use retrieval for knowledge, memory for preferences and state' },
  { title: 'Write only after verify', text: 'don’t persist hallucinations into long-term memory' },
  { title: 'Observability', text: 'log what memory was read/written for each run' },
  { title: 'Tomorrow: Day 158', text: 'build a learning flywheel: eval -> fix -> re-eval' },
];

const core = [
  {
    icon: '🧠',
    title: 'Memory Scope',
    titleClass: 'card-title-cyan',
    subtitle: 'Bounded',
    description: 'Partition memory by tenant and user. Never cross-read across boundaries.',
    code: 'tenant_id\n+ user_id',
  },
  {
    icon: '🗂️',
    title: 'What To Store',
    titleClass: 'card-title-purple',
    subtitle: 'Useful',
    description: 'Preferences, stable facts, and state — not arbitrary conversation history.',
    code: 'prefs · facts · state',
  },
  {
    icon: '🧽',
    title: 'Retention & Deletion',
    titleClass: 'card-title-amber',
    subtitle: 'Hygiene',
    description: 'TTL and deletion schedules keep memory safe, compliant, and accurate.',
    code: 'TTL + delete',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Memory Rules',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Write a short policy: what can be stored, who can read it, and how long it lives.',
    code: 'store/read/TTL',
  },
  {
    icon: '✅',
    title: 'Verified Writes Only',
    titleClass: 'card-title-purple',
    subtitle: 'Quality',
    description: 'Persist memory only when verify() passes or a human approves.',
    code: 'verify -> write',
  },
  {
    icon: '🔜',
    title: 'Next: Flywheel',
    titleClass: 'card-title-amber',
    subtitle: 'Day 158 · 15 Jan 2027',
    description: 'Tomorrow — build the improvement flywheel and ship faster without regressions.',
    link: { href: '/agentic-day-158', label: 'Go to Day 158 →' },
  },
];

const resources = [
  {
    icon: '📘',
    title: 'LangGraph Memory',
    titleClass: 'card-title-cyan',
    subtitle: 'Patterns',
    description: 'Stateful agent patterns and memory concepts in graph orchestration.',
    link: { href: 'https://langchain-ai.github.io/langgraph/', label: 'Open →', external: true },
  },
  {
    icon: '📖',
    title: 'NIST AI RMF',
    titleClass: 'card-title-purple',
    subtitle: 'Governance',
    description: 'A governance framing that maps to memory and retention controls.',
    link: { href: 'https://www.nist.gov/itl/ai-risk-management-framework', label: 'Open →', external: true },
  },
  {
    icon: '🗺️',
    title: 'Day 137',
    titleClass: 'card-title-amber',
    subtitle: 'Queues',
    description: 'Concurrency controls for memory writes in distributed execution.',
    link: { href: '/agentic-day-137', label: 'Open Day 137 →' },
  },
];

export default function AgenticDay157() {
  return (
    <StandaloneJourneyPage
      dayNumber={157}
      series="Agentic AI"
      dateLabel="Agentic AI Day 157 · 27 Jan 2027"
      prev={{ href: '/agentic-day-156', label: '← Day 156' }}
      next={{ href: '/agentic-day-158', label: 'Day 158 →' }}
      tags={['Agentic AI', 'Memory', 'Privacy']}
      theme="MEMORY: SCOPE, RETENTION & VERIFIED WRITES"
      heroIcon="🧠"
      profileRole="AGENTIC AI · MEMORY"
      progressWidth="52%"
      summary={
        <>
          Day 157 treats memory like a security and product feature: strict scope, retention rules, and verified writes
          so you don’t store hallucinations or leak across tenants.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Memory', '#Day157', '#Privacy', '#Retention']}
    />
  );
}

