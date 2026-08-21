import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Shape follows the job', text: 'pick the simplest topology that still has a role for the risky parts' },
  { title: 'Pipeline', text: 'planner → researcher → writer → reviewer is cheap and auditable for linear work' },
  { title: 'Swarm', text: 'N peer agents + an aggregator when you need parallel ideation or broad search' },
  { title: 'Hierarchy', text: 'orchestrator → sub-teams → workers for large, decomposed tasks with budgets' },
  { title: 'Switch before scale', text: 'run one task in two shapes; keep the one that fails less and costs less' },
  { title: 'Tomorrow: Day 200', text: 'the multi-agent teams milestone' },
];

const core = [
  {
    icon: '📐',
    title: 'Shape Catalog',
    titleClass: 'card-title-cyan',
    subtitle: 'Choose',
    description: 'Pipeline for linear, swarm for parallel ideas, hierarchy for decomposed scopes.',
    code: 'pipe | swarm\nhierarchy',
  },
  {
    icon: '🧮',
    title: 'Cost vs Failure',
    titleClass: 'card-title-purple',
    subtitle: 'Trade-off',
    description: 'Plot each shape by $ per run and defect rate; pick the Pareto-optimal for the workload.',
    code: '$ / run ×\ndefect %',
  },
  {
    icon: '🎚️',
    title: 'One Switch Rule',
    titleClass: 'card-title-amber',
    subtitle: 'Evolve',
    description: 'Run a task in the current shape and one alternative each week; switch if the new one wins.',
    code: 'week: A vs B\nwinner stays',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Topology Bake-off',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Run a representative task as pipeline then as swarm; note time, cost, and defects.',
    code: 'pipe vs swarm\ncompare 3',
  },
  {
    icon: '📊',
    title: 'Shape Scorecard',
    titleClass: 'card-title-purple',
    subtitle: 'Docs',
    description: 'Create a scorecard: when to use each shape, anti-signals, and typical cost/latency.',
    code: 'shape: when\ncost,lat,risks',
  },
  {
    icon: '🔜',
    title: 'Next: Milestone',
    titleClass: 'card-title-amber',
    subtitle: 'Day 200',
    description: 'Tomorrow — the multi-agent teams milestone.',
    link: { href: '/agentic-day-200', label: 'Go to Day 200 →' },
  },
];

const resources = [
  {
    icon: '🧐',
    title: 'Day 198',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Supervisor and escalation these shapes route through.',
    link: { href: '/agentic-day-198', label: 'Open Day 198 →' },
  },
  {
    icon: '🕸️',
    title: 'Day 178',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'Mesh and A2A patterns the team shapes are composed from.',
    link: { href: '/agentic-day-178', label: 'Open Day 178 →' },
  },
  {
    icon: '📘',
    title: 'Python Track',
    titleClass: 'card-title-amber',
    subtitle: 'Hub',
    description: 'Full Gen AI + Agentic curriculum.',
    link: { href: '/python', label: 'Open Python track →' },
  },
];

export default function AgenticDay199() {
  return (
    <StandaloneJourneyPage
      dayNumber={199}
      series="Agentic AI"
      dateLabel="Agentic AI Day 199 · 7 Mar 2027"
      prev={{ href: '/agentic-day-198', label: '← Day 198' }}
      next={{ href: '/agentic-day-200', label: 'Day 200 →' }}
      tags={['Agentic AI', 'Teams', 'Topologies']}
      theme="TEAM TOPOLOGIES & SHAPES"
      heroIcon="📐"
      profileRole="AGENTIC AI · TEAMS"
      progressWidth="71%"
      summary={
        <>
          Day 199 picks the shape. Compare <strong>pipeline, swarm, and hierarchy</strong> on cost, latency, and
          defects, then keep the simplest shape that still wins.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#MultiAgent', '#Day199', '#Topologies', '#Teams']}
    />
  );
}
