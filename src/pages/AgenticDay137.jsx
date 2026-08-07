import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Latency budget', text: 'set SLOs: first token, time-to-useful, and full completion' },
  { title: 'Stream early', text: 'users forgive slower totals if they see progress in under ~1s' },
  { title: 'Parallel tools', text: 'fan-out independent tool calls; don’t serialize what can run together' },
  { title: 'Prefetch', text: 'warm RAG / user profile while the user is still typing' },
  { title: 'Skeleton UX', text: 'show plan steps and tool names as they start — not a blank spinner' },
  { title: 'Cancel & resume', text: 'stop mid-run cleanly; don’t leave orphan tool side effects' },
  { title: 'Tail risk', text: 'p95/p99 matter more than average for agent products' },
  { title: 'What’s next', text: 'fast agents that fail weirdly need chaos practice' },
];

const core = [
  {
    icon: '⏱️', title: 'SLO Board', titleClass: 'card-title-cyan', subtitle: 'Targets',
    description: 'TTFT under 1s · useful answer under 8s · hard jobs may stream status longer with honesty.',
    code: 'TTFT · useful\np95 tracked',
  },
  {
    icon: '📡', title: 'Stream Plan', titleClass: 'card-title-purple', subtitle: 'UX',
    description: 'Emit “thinking → tool → partial answer” events. Never hold the whole reply until the end.',
    code: 'events: plan\ntool · delta',
  },
  {
    icon: '⚡', title: 'Parallel Fan-Out', titleClass: 'card-title-amber', subtitle: 'Speed',
    description: 'Independent lookups run together with a shared deadline. Partial results still help.',
    code: 'tools ∥ parallel\ndeadline · partial',
  },
];

const practice = [
  {
    icon: '🧪', title: 'TTFT Probe', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Instrument first-token time for a chat agent. Add a status line if tools will take over 2s.',
    code: 'measure TTFT\nstatus if slow',
  },
  {
    icon: '🛑', title: 'Cancel Mid-Tool', titleClass: 'card-title-purple', subtitle: 'Safety',
    description: 'Hit cancel during a tool call. Prove no duplicate ticket or half-written file remains.',
    code: 'cancel → clean',
  },
  {
    icon: '🔜', title: 'Next: Chaos', titleClass: 'card-title-amber', subtitle: 'Day 138',
    description: 'Tomorrow — failure injection and reliability drills.',
    link: { href: '/agentic-day-138', label: 'Go to Day 138 →' },
  },
];

const resources = [
  {
    icon: '💰', title: 'FinOps Day 136', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Cost and latency trade off — measure both.',
    link: { href: '/agentic-day-136', label: 'Open Day 136 →' },
  },
  {
    icon: '🌊', title: 'Stream Day 56', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'Streaming UX foundations.',
    link: { href: '/agentic-day-56', label: 'Open Day 56 →' },
  },
  {
    icon: '🎙️', title: 'Voice Day 96', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Realtime agents live or die on latency.',
    link: { href: '/agentic-day-96', label: 'Open Day 96 →' },
  },
];

export default function AgenticDay137() {
  return (
    <StandaloneJourneyPage
      dayNumber={137}
      series="Agentic AI"
      dateLabel="Agentic AI Day 137 · 18 Dec 2026"
      prev={{ href: '/agentic-day-136', label: '← Day 136' }}
      next={{ href: '/agentic-day-138', label: 'Day 138 →' }}
      tags={['Agentic AI', 'Latency', 'Phase 19']}
      theme="LATENCY BUDGETS & STREAMING UX"
      heroIcon="⏱️"
      profileRole="AGENTIC AI · LATENCY"
      progressWidth="91%"
      summary={
        <>
          Day 137 races the clock. Set <strong>TTFT / useful SLOs</strong>, stream plan + tool events, and fan out
          tools with cancel-safe cleanup.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Latency', '#Streaming', '#Day137', '#SLO', '#AgenticAI']}
    />
  );
}
