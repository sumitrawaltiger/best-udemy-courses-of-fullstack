import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Supervisor scaling', text: 'bigger agent systems need explicit ownership of planning and delegation' },
  { title: 'Subgraphs help', text: 'reusable workflow blocks reduce complexity and duplication' },
  { title: 'Shared state risks', text: 'state shape and mutation rules determine how stable the workflow stays' },
  { title: 'Boundaries matter', text: 'specialists should have narrow responsibilities and tool access' },
  { title: 'Coordination cost', text: 'more agents can add overhead if the workflow is not sharply defined' },
  { title: 'Measure orchestration', text: 'count hops, retries, and dead ends across the graph' },
];

const core = [
  { icon: '🧠', title: 'Supervisor Graph', titleClass: 'card-title-cyan', subtitle: 'Control', description: 'Use one coordinator to delegate work to specialist nodes with explicit return paths.', code: 'supervisor -> specialist -> merge' },
  { icon: '🧩', title: 'Reusable Subgraphs', titleClass: 'card-title-purple', subtitle: 'Scale', description: 'Break repeated workflows into subgraphs that can be reused and tested independently.', code: 'subgraph = module' },
  { icon: '📍', title: 'State Contract', titleClass: 'card-title-amber', subtitle: 'Stability', description: 'Define exactly what data enters and leaves each node so the graph remains predictable.', code: 'state in -> state out' },
];

const practice = [
  { icon: '🧪', title: 'Subgraph Refactor', titleClass: 'card-title-cyan', subtitle: 'Build', description: 'Take one repeated workflow and extract it into a reusable subgraph.', code: 'extract + reuse' },
  { icon: '📊', title: 'Hop Metrics', titleClass: 'card-title-purple', subtitle: 'Measure', description: 'Count delegation hops and identify where coordination overhead starts to grow.', code: 'hops · retries' },
  { icon: '🔜', title: 'Next: ToolOps', titleClass: 'card-title-amber', subtitle: 'Day 107', description: 'Tomorrow -> operating tool ecosystems for agents.', link: { href: '/agentic-day-107', label: 'Go to Day 107 ->' } },
];

const resources = [
  { icon: '📘', title: 'LangGraph', titleClass: 'card-title-cyan', subtitle: 'Docs', description: 'Graph orchestration and reusable workflow patterns.', link: { href: 'https://langchain-ai.github.io/langgraph/', label: 'Open ->', external: true } },
  { icon: '📖', title: 'Python Track', titleClass: 'card-title-purple', subtitle: 'Hub', description: 'Agentic + Gen AI modules feeding the broader roadmap.', link: { href: '/python', label: 'Open Python track ->' } },
  { icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember', description: 'More agents only help when the control flow becomes clearer, not noisier.', footer: 'Scale the graph carefully.' },
];

export default function AgenticDay106() {
  return (
    <StandaloneJourneyPage
      dayNumber={106}
      dateLabel="Agentic AI Day 106 · 7 Dec 2026"
      prev={{ href: '/agentic-day-105', label: '← Day 105' }}
      next={{ href: '/agentic-day-107', label: 'Day 107 →' }}
      tags={['Agentic AI', 'Orchestration', 'Day 106']}
      theme="SCALING MULTI-AGENT ORCHESTRATION"
      heroIcon="🧠"
      profileRole="AGENTIC AI · ORCHESTRATION"
      progressWidth="71%"
      summary="Day 106 scales orchestration: supervisors, reusable subgraphs, and stable state contracts that keep larger agent systems manageable."
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Orchestration', '#Day106', '#LangGraph', '#100DaysOfCode']}
    />
  );
}
