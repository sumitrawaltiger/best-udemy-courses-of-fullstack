import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Multi-agent is coordination', text: 'roles, shared state, and handoffs matter more than “more models”' },
  { title: 'Planner / Worker split', text: 'separate decomposition from execution to reduce tool chaos' },
  { title: 'Supervisor pattern', text: 'a coordinator can route, retry, or escalate when a worker fails' },
  { title: 'Shared memory rules', text: 'agents must read/write with strict scope and clear ownership' },
  { title: 'Consensus is expensive', text: 'debates are useful, but they cost latency and tokens' },
  { title: 'Stop conditions', text: 'coordination loops need caps and explicit completion criteria' },
  { title: 'Trace the graph', text: 'a graph view should explain which agent did what and why' },
  { title: 'Tomorrow: Day 160', text: 'task routing and dispatch logic with quality signals' },
];

const core = [
  {
    icon: '🧭',
    title: 'Planner / Worker',
    titleClass: 'card-title-cyan',
    subtitle: 'Pattern',
    description: 'One agent plans and produces a bounded plan; another executes steps with tools.',
    code: 'plan -> steps\nsteps -> tools',
  },
  {
    icon: '🧑‍✈️',
    title: 'Supervisor',
    titleClass: 'card-title-purple',
    subtitle: 'Route',
    description: 'A supervisor selects the right worker and decides when to retry, fall back, or ask for help.',
    code: 'route · retry · HITL',
  },
  {
    icon: '🧠',
    title: 'Shared State',
    titleClass: 'card-title-amber',
    subtitle: 'Control',
    description: 'Use structured state and ownership rules so multiple agents don’t overwrite each other.',
    code: 'state + owner',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Two-Agent Split',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Implement planner->worker for one workflow and cap execution to N steps.',
    code: 'max_steps = 8',
  },
  {
    icon: '📊',
    title: 'Graph Trace',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Log which agent acted each step and attach a run_id that replays the graph.',
    code: 'agent_id + run_id',
  },
  {
    icon: '🔜',
    title: 'Next: Dispatch',
    titleClass: 'card-title-amber',
    subtitle: 'Day 160 · 15 Jan 2027',
    description: 'Tomorrow — dispatch logic: route tasks to the right worker with quality signals.',
    link: { href: '/agentic-day-160', label: 'Go to Day 160 →' },
  },
];

const resources = [
  {
    icon: '📘',
    title: 'LangGraph',
    titleClass: 'card-title-cyan',
    subtitle: 'Graphs',
    description: 'Stateful multi-agent orchestration concepts.',
    link: { href: 'https://langchain-ai.github.io/langgraph/', label: 'Open →', external: true },
  },
  {
    icon: '📖',
    title: 'DORA',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Quality signals and measurement mindset for systems that ship.',
    link: { href: 'https://dora.dev/', label: 'Open →', external: true },
  },
  {
    icon: '🗺️',
    title: 'Day 158',
    titleClass: 'card-title-amber',
    subtitle: 'Flywheel',
    description: 'Evals and regression discipline that multi-agent systems require.',
    link: { href: '/agentic-day-158', label: 'Open Day 158 →' },
  },
];

export default function AgenticDay159() {
  return (
    <StandaloneJourneyPage
      dayNumber={159}
      series="Agentic AI"
      dateLabel="Agentic AI Day 159 · 27 Jan 2027"
      prev={{ href: '/agentic-day-158', label: '← Day 158' }}
      next={{ href: '/agentic-day-160', label: 'Day 160 →' }}
      tags={['Agentic AI', 'Multi-Agent', 'Coordination']}
      theme="MULTI-AGENT COORDINATION: PLANNER, WORKER, SUPERVISOR"
      heroIcon="🧭"
      profileRole="AGENTIC AI · COORDINATE"
      progressWidth="53%"
      summary={
        <>
          Day 159 introduces multi-agent systems as coordination problems: split planning from execution, add a
          supervisor for routing, and keep shared state structured and owned.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#MultiAgent', '#Day159', '#Coordination', '#LangGraph']}
    />
  );
}

