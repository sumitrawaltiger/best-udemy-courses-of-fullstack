import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Arc 181–185', text: 'sandbox → policy node → cost governor → tenant isolation → milestone' },
  { title: 'Runtime bar', text: 'tools cannot freely hit the world; rules, money, and tenants are enforced in the graph' },
  { title: 'Demo story', text: 'deny extra tool arg → HITL on refund → budget stop → tenant B 404s on A’s run' },
  { title: 'Reuse prior arcs', text: 'orchestration (176–180) plus this runtime kit is a platform, not a demo' },
  { title: 'Keep shipping', text: 'apply the four gates to one production graph before adding more agents' },
];

const core = [
  {
    icon: '🏁',
    title: 'Milestone Checklist',
    titleClass: 'card-title-cyan',
    subtitle: 'Ship',
    description: 'Sandboxed tools · policy node · budget governor · tenant filters · cross-tenant probe in CI.',
    code: 'sandbox · policy\n$ cap · tenant',
  },
  {
    icon: '🎬',
    title: '5-Min Demo',
    titleClass: 'card-title-purple',
    subtitle: 'Show',
    description: 'Rejected extra arg, HITL refund, budget degrade, then a failed cross-tenant read.',
    code: 'deny · hitl\nbudget · 404',
  },
  {
    icon: '🗺️',
    title: '181–185 Map',
    titleClass: 'card-title-amber',
    subtitle: 'Arc',
    description: 'Jail tools → decide in one engine → cap spend → isolate tenants → ship the runtime.',
    code: 'jail · decide\ncap · isolate',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Sign-Off Score',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Rate 0–2 on sandbox, policy, budget, tenancy. Fix the lowest before calling it done.',
    code: 'score 0–2\nfix weakest',
  },
  {
    icon: '📦',
    title: 'Runtime README',
    titleClass: 'card-title-purple',
    subtitle: 'Docs',
    description: 'Document sandbox, policy_v, budget fields, and tenant filter rules for on-call.',
    code: 'sandbox · policy_v\nbudget · tenant',
  },
  {
    icon: '🔜',
    title: 'What Comes Next',
    titleClass: 'card-title-amber',
    subtitle: 'Day 186',
    description: 'Next arc — start measuring quality with an eval harness.',
    link: { href: '/agentic-day-186', label: 'Go to Day 186 →' },
  },
];

const resources = [
  {
    icon: '📘',
    title: 'Python Track',
    titleClass: 'card-title-cyan',
    subtitle: 'Hub',
    description: 'Full Gen AI + Agentic curriculum.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '📦',
    title: 'Day 181',
    titleClass: 'card-title-purple',
    subtitle: 'Start of Arc',
    description: 'Tool sandboxes — start of this runtime stretch.',
    link: { href: '/agentic-day-181', label: 'Open Day 181 →' },
  },
  {
    icon: '🏁',
    title: 'Day 180',
    titleClass: 'card-title-amber',
    subtitle: 'Prior Milestone',
    description: 'Orchestration this runtime layer sits on.',
    link: { href: '/agentic-day-180', label: 'Open Day 180 →' },
  },
];

export default function AgenticDay185() {
  return (
    <StandaloneJourneyPage
      dayNumber={185}
      series="Agentic AI"
      dateLabel="Agentic AI Day 185 · 4 Mar 2027"
      prev={{ href: '/agentic-day-184', label: '← Day 184' }}
      next={{ href: '/agentic-day-186', label: 'Day 186 →' }}
      tags={['Agentic AI', 'Runtime', 'Milestone']}
      theme="AGENT RUNTIME PLATFORM MILESTONE"
      heroIcon="🏁"
      profileRole="AGENTIC AI · MILESTONE"
      progressWidth="64%"
      summary={
        <>
          Day 185 closes the runtime stretch. Ship a platform that <strong>jails tools, decides with policy, caps
          spend, and isolates tenants</strong>.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Runtime', '#Day185', '#Milestone', '#Platform']}
    />
  );
}
