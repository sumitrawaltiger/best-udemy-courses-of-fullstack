import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Dispatch is a product', text: 'routing decides cost, latency, and failure rate' },
  { title: 'Use quality signals', text: 'route by confidence, tool availability, and task type' },
  { title: 'Specialists beat generalists', text: 'small role-specific workers reduce errors and looping' },
  { title: 'Fallback is normal', text: 'when a specialist fails, route to a safer or simpler path' },
  { title: 'Escalate intelligently', text: 'HITL triggers should be explicit and observable' },
  { title: 'Avoid thrashing', text: 'cap retries and prevent bouncing between workers' },
  { title: 'Instrument routing', text: 'measure route choices and their outcomes' },
  { title: 'Tomorrow: Day 161', text: 'supervision and critic gates before action' },
];

const core = [
  {
    icon: '🚦',
    title: 'Router Policy',
    titleClass: 'card-title-cyan',
    subtitle: 'Decide',
    description: 'A router chooses which worker runs a task and which tools are allowed for that worker.',
    code: 'task -> worker\nworker -> tools',
  },
  {
    icon: '🧪',
    title: 'Quality Signals',
    titleClass: 'card-title-purple',
    subtitle: 'Measure',
    description: 'Route using signals like confidence, required tools, and risk level.',
    code: 'risk · tools · confidence',
  },
  {
    icon: '🧯',
    title: 'Fallback Paths',
    titleClass: 'card-title-amber',
    subtitle: 'Recover',
    description: 'Plan explicit fallbacks: smaller model, fewer tools, or HITL when needed.',
    code: 'fallback -> still useful',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Build a Router',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Implement a router that dispatches to 2–3 workers and logs route decisions.',
    code: 'router -> worker',
  },
  {
    icon: '📊',
    title: 'Route Metrics',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Track route distribution and success rate per worker.',
    code: 'route% · success%',
  },
  {
    icon: '🔜',
    title: 'Next: Critic Gate',
    titleClass: 'card-title-amber',
    subtitle: 'Day 161 · 15 Jan 2027',
    description: 'Tomorrow — supervision and critic gates before irreversible actions.',
    link: { href: '/agentic-day-161', label: 'Go to Day 161 →' },
  },
];

const resources = [
  {
    icon: '📖',
    title: 'SRE Book',
    titleClass: 'card-title-cyan',
    subtitle: 'Reliability',
    description: 'Fallback and SLO thinking applied to routing.',
    link: { href: 'https://sre.google/sre-book/table-of-contents/', label: 'Open →', external: true },
  },
  {
    icon: '🛡️',
    title: 'OWASP LLM Top 10',
    titleClass: 'card-title-purple',
    subtitle: 'Risk',
    description: 'Threats that inform risk-based routing decisions.',
    link: { href: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/', label: 'Open →', external: true },
  },
  {
    icon: '🗺️',
    title: 'Day 159',
    titleClass: 'card-title-amber',
    subtitle: 'Coordination',
    description: 'Planner/worker/supervisor baseline.',
    link: { href: '/agentic-day-159', label: 'Open Day 159 →' },
  },
];

export default function AgenticDay160() {
  return (
    <StandaloneJourneyPage
      dayNumber={160}
      series="Agentic AI"
      dateLabel="Agentic AI Day 160 · 27 Jan 2027"
      prev={{ href: '/agentic-day-159', label: '← Day 159' }}
      next={{ href: '/agentic-day-161', label: 'Day 161 →' }}
      tags={['Agentic AI', 'Routing', 'Supervisor']}
      theme="DISPATCH & ROUTING: RIGHT WORKER, RIGHT TOOL"
      heroIcon="🚦"
      profileRole="AGENTIC AI · ROUTE"
      progressWidth="53%"
      summary={
        <>
          Day 160 builds a dispatch layer: route tasks to specialists using measurable quality signals, define fallback
          paths, and instrument routing outcomes.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Routing', '#Day160', '#Dispatch', '#AgentOps']}
    />
  );
}

