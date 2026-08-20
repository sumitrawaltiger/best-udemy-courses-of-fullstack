import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Arc 176–180', text: 'topology → fan-out/join → mesh/A2A → durable sagas → milestone' },
  { title: 'Scale bar', text: 'you can sketch the graph, join in parallel, message peers, and resume after crash' },
  { title: 'Demo story', text: 'hub fans out → one branch dies → mesh hop with TTL → kill worker → resume once' },
  { title: 'Ops still apply', text: 'Day 175 standards, evals, and HITL do not get waived because the graph got fancier' },
  { title: 'Cost & traces', text: 'parallel + mesh without caps and corr_ids is an incident waiting to happen' },
  { title: 'Keep shipping', text: 'pick one real workflow and apply this kit before inventing a twenty-agent mesh' },
];

const core = [
  {
    icon: '🏁',
    title: 'Milestone Checklist',
    titleClass: 'card-title-cyan',
    subtitle: 'Ship',
    description: 'Chosen topology · join rule · typed A2A envelope · hop TTL · checkpoint · compensate table.',
    code: 'topo · join\nA2A · durable',
  },
  {
    icon: '🎬',
    title: '5-Min Demo',
    titleClass: 'card-title-purple',
    subtitle: 'Show',
    description: 'Parallel lookup with a failed branch, a peer message, then crash-resume without a double send.',
    code: 'partial · peer\ncrash · once',
  },
  {
    icon: '🗺️',
    title: '176–180 Map',
    titleClass: 'card-title-amber',
    subtitle: 'Arc',
    description: 'Wire the graph → run in parallel → talk across agents → survive time → ship.',
    code: 'wire · parallel\ntalk · survive',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Sign-Off Score',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Rate 0–2 on topology, join, mesh, durability. Fix the lowest before calling the arc done.',
    code: 'score 0–2\nfix weakest',
  },
  {
    icon: '📦',
    title: 'Orchestration README',
    titleClass: 'card-title-purple',
    subtitle: 'Docs',
    description: 'Document topology, join rule, message schema, and how to resume a parked saga.',
    code: 'topo · join\nenvelope · resume',
  },
  {
    icon: '🔜',
    title: 'What Comes Next',
    titleClass: 'card-title-amber',
    subtitle: 'Continue',
    description: 'Next arc — agent runtime platform (Days 181–185): sandbox, policy, cost, tenancy.',
    link: { href: '/agentic-day-181', label: 'Go to Day 181 →' },
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
    icon: '🕸️',
    title: 'Day 176',
    titleClass: 'card-title-purple',
    subtitle: 'Start of Arc',
    description: 'Topologies — start of this orchestration stretch.',
    link: { href: '/agentic-day-176', label: 'Open Day 176 →' },
  },
  {
    icon: '🏛️',
    title: 'Day 175',
    titleClass: 'card-title-amber',
    subtitle: 'Prior Milestone',
    description: 'Operating maturity this scale layer still needs.',
    link: { href: '/agentic-day-175', label: 'Open Day 175 →' },
  },
];

export default function AgenticDay180() {
  return (
    <StandaloneJourneyPage
      dayNumber={180}
      series="Agentic AI"
      dateLabel="Agentic AI Day 180 · 17 Feb 2027"
      prev={{ href: '/agentic-day-179', label: '← Day 179' }}
      next={{ href: '/agentic-day-181', label: 'Day 181 →' }}
      tags={['Agentic AI', 'Orchestration', 'Milestone']}
      theme="ADVANCED ORCHESTRATION MILESTONE"
      heroIcon="🏁"
      profileRole="AGENTIC AI · MILESTONE"
      progressWidth="62%"
      summary={
        <>
          Day 180 closes the orchestration stretch. Ship a graph that can <strong>fan out, talk to peers, and resume
          after a crash</strong> — with traces you can still explain.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Orchestration', '#Day180', '#Milestone', '#Durable']}
    />
  );
}
