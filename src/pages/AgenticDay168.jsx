import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Memory has layers', text: 'session memory, semantic memory, and durable run state solve different problems' },
  { title: 'Not everything should be remembered', text: 'memory without scope becomes confusion and privacy risk' },
  { title: 'Write rules matter', text: 'agents need explicit rules for what can be saved and what must expire' },
  { title: 'Summaries beat transcripts', text: 'compact structured memory is more useful than raw logs' },
  { title: 'Retrieval needs ranking', text: 'old memories should not outrank fresher, more relevant context' },
  { title: 'User control matters', text: 'users should know what is remembered and how to clear it' },
  { title: 'Memory needs evals too', text: 'bad memory can hurt more quietly than a bad tool' },
  { title: 'Tomorrow: Day 169', text: 'human-in-the-loop operations and approval workflows' },
];

const core = [
  {
    icon: '🧠',
    title: 'Memory Layers',
    titleClass: 'card-title-cyan',
    subtitle: 'Design',
    description: 'Separate short-term context, reusable facts, and workflow checkpoints instead of mixing them.',
    code: 'session · semantic · durable',
  },
  {
    icon: '✍️',
    title: 'Write Policy',
    titleClass: 'card-title-purple',
    subtitle: 'Control',
    description: 'Define what gets stored, when it expires, and which actor is allowed to write it.',
    code: 'scope + ttl + owner',
  },
  {
    icon: '🔎',
    title: 'Recall Quality',
    titleClass: 'card-title-amber',
    subtitle: 'Retrieve',
    description: 'Rank by recency, trust, and relevance so recalled memory helps instead of distracting.',
    code: 'relevance + freshness',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Memory Schema',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Design a memory record with type, owner, scope, source, and expiry.',
    code: 'type · scope · ttl',
  },
  {
    icon: '📋',
    title: 'Forget Rules',
    titleClass: 'card-title-purple',
    subtitle: 'Privacy',
    description: 'List what the agent must never store and how users can clear saved memory.',
    code: 'denylist + clear path',
  },
  {
    icon: '🔜',
    title: 'Next: HITL Ops',
    titleClass: 'card-title-amber',
    subtitle: 'Day 169 · 21 Jan 2027',
    description: 'Tomorrow — approval queues, audit trails, and operator workflows.',
    link: { href: '/agentic-day-169', label: 'Go to Day 169 →' },
  },
];

const resources = [
  {
    icon: '📘',
    title: 'LangGraph Memory',
    titleClass: 'card-title-cyan',
    subtitle: 'Reference',
    description: 'Concepts for persistent state and memory in graph-based agents.',
    link: { href: 'https://langchain-ai.github.io/langgraph/', label: 'Open →', external: true },
  },
  {
    icon: '📖',
    title: 'Day 163',
    titleClass: 'card-title-purple',
    subtitle: 'Durable',
    description: 'Checkpointing and long-running state that memory design builds on.',
    link: { href: '/agentic-day-163', label: 'Open Day 163 →' },
  },
  {
    icon: '🗺️',
    title: 'Day 156',
    titleClass: 'card-title-amber',
    subtitle: 'Tools',
    description: 'Tool outputs often need summarization before they become useful memory.',
    link: { href: '/agentic-day-156', label: 'Open Day 156 →' },
  },
];

export default function AgenticDay168() {
  return (
    <StandaloneJourneyPage
      dayNumber={168}
      series="Agentic AI"
      dateLabel="Agentic AI Day 168 · 2 Feb 2027"
      prev={{ href: '/agentic-day-167', label: '← Day 167' }}
      next={{ href: '/agentic-day-169', label: 'Day 169 →' }}
      tags={['Agentic AI', 'Memory', 'Context']}
      theme="MEMORY ARCHITECTURE: WHAT TO SAVE, WHAT TO FORGET"
      heroIcon="🧠"
      profileRole="AGENTIC AI · MEMORY"
      progressWidth="56%"
      summary={
        <>
          Day 168 designs memory as a real subsystem: separate layers, control writes, rank recall carefully, and make
          forgetting as deliberate as remembering.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Memory', '#Day168', '#Context', '#State']}
    />
  );
}
