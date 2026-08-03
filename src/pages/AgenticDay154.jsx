import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Post-capstone reset', text: 'Day 154 starts the “days 154–300” stretch with deeper AgentOps and production patterns' },
  { title: 'Outcome-first agents', text: 'define the final state and verify it, don’t just generate steps' },
  { title: 'Contracts everywhere', text: 'tools, schemas, and policies are contracts — version them' },
  { title: 'Execution is expensive', text: 'budget time and cost across the entire run (tools + model)' },
  { title: 'Trust is cumulative', text: 'safe defaults, refusals, and clear degrade paths are part of UX' },
  { title: 'Replayability', text: 'trace ids + prompt/policy versions make debugging possible' },
  { title: 'Small steps scale', text: 'one stable workflow can be copied to 10 workflows later' },
  { title: 'Tomorrow: Day 155', text: 'turn “task success” into measurable agent quality signals' },
];

const core = [
  {
    icon: '🎯',
    title: 'Outcome Spec',
    titleClass: 'card-title-cyan',
    subtitle: 'Define',
    description: 'Specify the desired end state + invariants before the agent plans. Verification is part of the task.',
    code: 'goal\n+ invariants\n+ verify()',
  },
  {
    icon: '🧾',
    title: 'Versioned Contracts',
    titleClass: 'card-title-purple',
    subtitle: 'Stabilize',
    description: 'Version tool schemas and policy packs so changes are safe and traceable.',
    code: 'tool_v\npolicy_v\nprompt_v',
  },
  {
    icon: '⏱️',
    title: 'Budgeted Execution',
    titleClass: 'card-title-amber',
    subtitle: 'Control',
    description: 'Treat time/cost as first-class. Cap loops, cap tool calls, and fall back gracefully.',
    code: 'max_steps\nmax_tools\nmax_$',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'One Verified Task',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Pick one workflow and define a verify() step that checks the output state, not the narrative.',
    code: 'do -> verify',
  },
  {
    icon: '📊',
    title: 'Add Budgets',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Add max steps, max tool calls, and max cost to your agent run config.',
    code: 'steps · tools · $',
  },
  {
    icon: '🔜',
    title: 'Next: Quality Signals',
    titleClass: 'card-title-amber',
    subtitle: 'Day 155 · 2 Jan 2027',
    description: 'Tomorrow — define success metrics and failure buckets for real AgentOps.',
    link: { href: '/agentic-day-155', label: 'Go to Day 155 →' },
  },
];

const resources = [
  {
    icon: '📏',
    title: 'SRE Book',
    titleClass: 'card-title-cyan',
    subtitle: 'Reliability',
    description: 'SLO thinking helps agent systems ship safely.',
    link: { href: 'https://sre.google/sre-book/table-of-contents/', label: 'Open →', external: true },
  },
  {
    icon: '🛡️',
    title: 'OWASP LLM Top 10',
    titleClass: 'card-title-purple',
    subtitle: 'Security',
    description: 'Threat categories relevant to tool-based agents.',
    link: { href: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/', label: 'Open →', external: true },
  },
  {
    icon: '🗺️',
    title: 'Back To Day 153',
    titleClass: 'card-title-amber',
    subtitle: 'Milestone',
    description: 'Capstone checkpoint and what transfers.',
    link: { href: '/agentic-day-153', label: 'Open Day 153 →' },
  },
];

export default function AgenticDay154() {
  return (
    <StandaloneJourneyPage
      dayNumber={154}
      series="Agentic AI"
      dateLabel="Agentic AI Day 154 · 1 Jan 2027"
      prev={{ href: '/agentic-day-153', label: '← Day 153' }}
      next={{ href: '/agentic-day-155', label: 'Day 155 →' }}
      tags={['Agentic AI', 'AgentOps', 'Phase 22']}
      theme="POST-CAPSTONE: OUTCOMES, CONTRACTS & BUDGETS"
      heroIcon="🎯"
      profileRole="AGENTIC AI · AGENTOPS"
      progressWidth="51%"
      summary={
        <>
          Day 154 starts the post-capstone stretch. The goal is <strong>repeatable task success</strong> with budgets,
          versioned contracts, and verification — not just impressive transcripts.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#AgentOps', '#Day154', '#Verification', '#Budgets']}
    />
  );
}

