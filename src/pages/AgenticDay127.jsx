import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Beyond one agent', text: 'a platform\'s domain agents sometimes need to hand a task to each other, not just to a human' },
  { title: 'Shared context handoff', text: 'pass conversation history and retrieved facts between agents without starting the task over' },
  { title: 'A2A protocol reuse', text: 'the interop standard from Day 93 is exactly what lets domain agents talk to each other' },
  { title: 'Negotiation & arbitration', text: 'when two agents disagree — sales vs support — a router or policy decides who wins' },
  { title: 'Avoiding infinite loops', text: 'cap how many times a task can bounce between agents before it escalates to a human' },
  { title: 'Shared vs private memory', text: 'some context is visible platform-wide; some stays domain-private and never leaks out' },
  { title: 'Cross-agent tracing', text: 'one trace has to show the whole handoff chain, not just a single agent\'s slice of it' },
  { title: 'What\'s next', text: 'governance and compliance for a platform where agents now act on each other\'s behalf' },
];

const core = [
  {
    icon: '🔗', title: 'Handoff Protocol', titleClass: 'card-title-cyan', subtitle: 'Reuse A2A',
    description: 'The same agent-to-agent interop standard from Day 93 carries context between domain agents on one platform.',
    code: 'handoff = {task, context, from_agent, to_agent}\ntarget_agent.receive(handoff)',
  },
  {
    icon: '🧑‍⚖️', title: 'Negotiation & Arbitration', titleClass: 'card-title-purple', subtitle: 'Who Decides',
    description: 'When two domain agents disagree on an action, a router or policy layer arbitrates — not the agents themselves.',
    code: 'if conflict: policy.arbitrate(agent_a, agent_b)',
  },
  {
    icon: '🔁', title: 'Loop Guards', titleClass: 'card-title-amber', subtitle: 'Stop Ping-Pong',
    description: 'Cap handoffs at a small number — if a task bounces back and forth past that, escalate to a human instead.',
    code: 'if handoff_count > 3: escalate_to_human(task)',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Build a Two-Agent Handoff', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Wire a support agent to hand an unresolved ticket to a research agent, passing full context along.',
    code: 'support_agent → handoff → research_agent',
  },
  {
    icon: '🛑', title: 'Add a Loop Guard', titleClass: 'card-title-purple', subtitle: 'Practice',
    description: 'Cap handoffs between two agents at 3 attempts, then force escalation to a human queue.',
  },
  {
    icon: '🔜', title: 'Next: Agent Governance & Compliance', titleClass: 'card-title-amber', subtitle: 'Day 128 Preview',
    description: 'Tomorrow — policy engines and regulatory awareness at platform scale.',
    link: { href: '/agentic-day-128', label: 'Go to Day 128 →' },
  },
];

const resources = [
  {
    icon: '🔗', title: 'A2A Protocol & Agent Interop', titleClass: 'card-title-cyan', subtitle: 'Day 93',
    description: 'The interoperability standard this handoff pattern builds directly on.',
    link: { href: '/agentic-day-93', label: 'Open Day 93 →' },
  },
  {
    icon: '🤖', title: 'Multi-Agent Systems Patterns', titleClass: 'card-title-purple', subtitle: 'Day 48',
    description: 'The foundational multi-agent patterns this platform-scale handoff builds on.',
    link: { href: '/agentic-day-48', label: 'Open Day 48 →' },
  },
  {
    icon: '📊', title: 'Monitoring & Observability', titleClass: 'card-title-amber', subtitle: 'Day 67',
    description: 'A cross-agent handoff needs one trace, not two isolated ones — this is why.',
    link: { href: '/agentic-day-67', label: 'Open Day 67 →' },
  },
];

export default function AgenticDay127() {
  return (
    <StandaloneJourneyPage
      dayNumber={127}
      series="Agentic AI"
      dateLabel="Agentic AI Day 127 · 26 Dec 2026"
      prev={{ href: '/agentic-day-126', label: '← Day 126' }}
      next={{ href: '/agentic-day-128', label: 'Day 128 →' }}
      tags={['Agentic AI', 'Multi-Agent', 'Phase 17']}
      theme="MULTI-AGENT COLLABORATION AT SCALE"
      heroIcon="🤝"
      profileRole="AGENTIC AI · COLLABORATION"
      progressWidth="85%"
      summary={
        <>
          Day 127 lets domain agents work together. A <strong>handoff protocol</strong> built on A2A,{' '}
          <strong>negotiation and arbitration</strong> when agents disagree, and a <strong>loop guard</strong>{' '}
          so a task never bounces forever.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#MultiAgent', '#Day127', '#A2A', '#100DaysOfCode']}
    />
  );
}
