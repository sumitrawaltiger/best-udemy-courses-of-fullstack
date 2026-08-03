import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Critic is a gate', text: 'a reviewer should block unsafe or low-quality actions before execution' },
  { title: 'Separate generate vs judge', text: 'keep worker creativity separate from strict evaluation' },
  { title: 'Rule-based checks first', text: 'schemas and invariants catch more than a second model in many cases' },
  { title: 'Escalate only when needed', text: 'HITL is expensive; use it for irreversible steps' },
  { title: 'Explain decisions', text: 'store reasons for allow/deny so debugging is possible' },
  { title: 'Calibrate strictness', text: 'too strict blocks progress; too loose leaks risk' },
  { title: 'Measure gates', text: 'track block rate and false-positive/false-negative signals' },
  { title: 'Tomorrow: Day 162', text: 'tool selection under constraints and capability allowlists' },
];

const core = [
  {
    icon: '🔍',
    title: 'Critic Gate',
    titleClass: 'card-title-cyan',
    subtitle: 'Judge',
    description: 'A dedicated critic validates plan/action against policies and invariants before execution.',
    code: 'propose -> critique\n-> approve/deny',
  },
  {
    icon: '🧾',
    title: 'Deterministic Checks',
    titleClass: 'card-title-purple',
    subtitle: 'Rules',
    description: 'Use schema validation and invariants before model-based judging.',
    code: 'schema + invariants',
  },
  {
    icon: '🙋',
    title: 'Escalation',
    titleClass: 'card-title-amber',
    subtitle: 'HITL',
    description: 'When risk is high or confidence is low, route to human approval with context.',
    code: 'risk -> HITL',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Add a Critic Step',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Insert a critic node before a write tool. Require approve to proceed.',
    code: 'critic -> execute',
  },
  {
    icon: '📊',
    title: 'Gate Metrics',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Track how often the critic blocks and what category it blocks for.',
    code: 'block% + reason',
  },
  {
    icon: '🔜',
    title: 'Next: Tool Choice',
    titleClass: 'card-title-amber',
    subtitle: 'Day 162 · 9 Jan 2027',
    description: 'Tomorrow — tool selection under constraints and capability allowlists.',
    link: { href: '/agentic-day-162', label: 'Go to Day 162 →' },
  },
];

const resources = [
  {
    icon: '📖',
    title: 'NIST AI RMF',
    titleClass: 'card-title-cyan',
    subtitle: 'Risk',
    description: 'A framework for evaluating and governing risk in AI systems.',
    link: { href: 'https://www.nist.gov/itl/ai-risk-management-framework', label: 'Open →', external: true },
  },
  {
    icon: '🛡️',
    title: 'MITRE ATLAS',
    titleClass: 'card-title-purple',
    subtitle: 'Threats',
    description: 'Threat catalog useful for critic and policy design.',
    link: { href: 'https://atlas.mitre.org/', label: 'Open →', external: true },
  },
  {
    icon: '🗺️',
    title: 'Day 156',
    titleClass: 'card-title-amber',
    subtitle: 'Tools',
    description: 'Tool hardening patterns that gates should enforce.',
    link: { href: '/agentic-day-156', label: 'Open Day 156 →' },
  },
];

export default function AgenticDay161() {
  return (
    <StandaloneJourneyPage
      dayNumber={161}
      series="Agentic AI"
      dateLabel="Agentic AI Day 161 · 8 Jan 2027"
      prev={{ href: '/agentic-day-160', label: '← Day 160' }}
      next={{ href: '/agentic-day-162', label: 'Day 162 →' }}
      tags={['Agentic AI', 'Critic', 'Safety']}
      theme="SUPERVISION: CRITIC GATES & ESCALATION"
      heroIcon="🔍"
      profileRole="AGENTIC AI · SUPERVISE"
      progressWidth="54%"
      summary={
        <>
          Day 161 adds supervision: deterministic checks first, then a critic gate, and HITL escalation only when
          necessary. The goal is safer action without blocking progress.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Safety', '#Day161', '#Critic', '#HITL']}
    />
  );
}

