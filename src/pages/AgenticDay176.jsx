import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Topology is a product choice', text: 'how agents are wired — hub, chain, or hierarchy — changes latency, cost, and failure shape' },
  { title: 'Hub-and-spoke', text: 'one orchestrator delegates to specialists and merges results; easiest to debug and govern' },
  { title: 'Sequential pipelines', text: 'stage A must finish before B; good for documents and approvals, bad for independent lookups' },
  { title: 'Hierarchical planners', text: 'a high-level planner splits goals; sub-planners own slices; the parent only re-plans on failure' },
  { title: 'One owner of state', text: 'shared mutable state across graphs is how races and lost updates appear' },
  { title: 'Draw it first', text: 'if you cannot sketch who calls whom, you are not ready to code the graph' },
  { title: 'Start simple', text: 'add a specialist only when a single agent keeps dropping that skill' },
  { title: 'Tomorrow: Day 177', text: 'fan-out, fan-in, and parallel specialist graphs' },
];

const core = [
  {
    icon: '🕸️',
    title: 'Hub-and-Spoke',
    titleClass: 'card-title-cyan',
    subtitle: 'Control',
    description: 'One orchestrator routes work to specialists and merges. Clear ownership, easy HITL, one place for policy.',
    code: 'hub -> specialist\n-> merge',
  },
  {
    icon: '➡️',
    title: 'Pipeline',
    titleClass: 'card-title-purple',
    subtitle: 'Stages',
    description: 'Fixed order when later steps need earlier artifacts. Name each stage and its contract.',
    code: 'A -> B -> C\ncontract per hop',
  },
  {
    icon: '🪜',
    title: 'Hierarchy',
    titleClass: 'card-title-amber',
    subtitle: 'Scale',
    description: 'Parent plans; children execute slices. Escalate only on blocked goals, not every token.',
    code: 'plan\n  slice -> child\nreplan on fail',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Sketch Three Topologies',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'For one support workflow, draw hub-and-spoke, pipeline, and hierarchy. Pick one and write why.',
    code: '3 sketches -> 1 choice',
  },
  {
    icon: '📋',
    title: 'State Owner',
    titleClass: 'card-title-purple',
    subtitle: 'Design',
    description: 'Name who writes ticket status. Prove no two nodes can mark it resolved independently.',
    code: 'one writer\nmany readers',
  },
  {
    icon: '🔜',
    title: 'Next: Fan-Out',
    titleClass: 'card-title-amber',
    subtitle: 'Day 177',
    description: 'Tomorrow — parallel specialists, join rules, and partial results.',
    link: { href: '/agentic-day-177', label: 'Go to Day 177 →' },
  },
];

const resources = [
  {
    icon: '🏛️',
    title: 'Day 175',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Operating standards this new orchestration arc still has to obey.',
    link: { href: '/agentic-day-175', label: 'Open Day 175 →' },
  },
  {
    icon: '🧠',
    title: 'Day 106',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'Earlier supervisor and subgraph patterns this topology work extends.',
    link: { href: '/agentic-day-106', label: 'Open Day 106 →' },
  },
  {
    icon: '📘',
    title: 'LangGraph',
    titleClass: 'card-title-amber',
    subtitle: 'Docs',
    description: 'Graph orchestration for stateful agent workflows.',
    link: { href: 'https://langchain-ai.github.io/langgraph/', label: 'Open →', external: true },
  },
];

export default function AgenticDay176() {
  return (
    <StandaloneJourneyPage
      dayNumber={176}
      series="Agentic AI"
      dateLabel="Agentic AI Day 176 · 12 Feb 2027"
      prev={{ href: '/agentic-day-175', label: '← Day 175' }}
      next={{ href: '/agentic-day-177', label: 'Day 177 →' }}
      tags={['Agentic AI', 'Orchestration', 'Topology']}
      theme="ADVANCED ORCHESTRATION TOPOLOGIES"
      heroIcon="🕸️"
      profileRole="AGENTIC AI · ORCHESTRATION"
      progressWidth="60%"
      summary={
        <>
          Day 176 starts the scale-orchestration arc. Pick a <strong>topology</strong> on purpose — hub, pipeline, or
          hierarchy — and give state a single writer.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Orchestration', '#Day176', '#Topology', '#LangGraph']}
    />
  );
}
