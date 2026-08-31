import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Arc 196–200', text: 'specialization → handoffs → supervision → topologies → teams milestone' },
  { title: 'Teams beat generalists', text: 'roles, contracts, and a supervisor consistently beat one big agent' },
  { title: 'Audit the chain', text: 'every handoff is logged, every review has a rubric, every escalation has a trail' },
  { title: 'Stacks on stacks', text: 'teams (196–200) sits on security (191–195), reliability (186–190), and runtime (181–185)' },
  { title: 'Keep shipping', text: 'run one real workflow end-to-end through the team before adding more agents' },
];

const core = [
  {
    icon: '🏁',
    title: 'Milestone Checklist',
    titleClass: 'card-title-cyan',
    subtitle: 'Ship',
    description: 'Role catalog · typed handoffs · rubric supervisor · topology scorecard · escalation cap wired.',
    code: 'roles · handoffs\nrubric · shape',
  },
  {
    icon: '🎬',
    title: '5-Min Demo',
    titleClass: 'card-title-purple',
    subtitle: 'Show',
    description: 'Pipeline run → rejected handoff → rubric review → escalation on third rework.',
    code: 'pipe · reject\nreview · escalate',
  },
  {
    icon: '🗺️',
    title: '196–200 Map',
    titleClass: 'card-title-amber',
    subtitle: 'Arc',
    description: 'Define roles → write contracts → supervise reviews → pick a shape → ship the team.',
    code: 'roles · contracts\nsupervise · ship',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Sign-Off Score',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Rate 0–2 on roles, handoffs, supervision, and topologies. Fix the lowest first.',
    code: 'score 0–2\nfix weakest',
  },
  {
    icon: '📦',
    title: 'Teams README',
    titleClass: 'card-title-purple',
    subtitle: 'Docs',
    description: 'Document roles, handoff schemas, rubric versions, topology scorecard, and escalation runbook.',
    code: 'roles · schemas\nrubric · runbook',
  },
  {
    icon: '🔜',
    title: 'What Comes Next',
    titleClass: 'card-title-amber',
    subtitle: 'Day 201',
    description: 'Next arc — versioning, cost, approvals, and audit for production governance.',
    link: { href: '/agentic-day-201', label: 'Go to Day 201 →' },
  },
];

const resources = [
  {
    icon: '📐',
    title: 'Day 199',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Topologies this milestone certifies.',
    link: { href: '/agentic-day-199', label: 'Open Day 199 →' },
  },
  {
    icon: '🏁',
    title: 'Day 195',
    titleClass: 'card-title-purple',
    subtitle: 'Prior Milestone',
    description: 'Security platform this teams layer extends.',
    link: { href: '/agentic-day-195', label: 'Open Day 195 →' },
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

export default function AgenticDay200() {
  return (
    <StandaloneJourneyPage
      dayNumber={200}
      series="Agentic AI"
      dateLabel="Agentic AI Day 200 · 19 Mar 2027"
      prev={{ href: '/agentic-day-199', label: '← Day 199' }}
      next={{ href: '/agentic-day-201', label: 'Day 201 →' }}
      tags={['Agentic AI', 'Teams', 'Milestone']}
      theme="MULTI-AGENT TEAMS PLATFORM MILESTONE"
      heroIcon="🏁"
      profileRole="AGENTIC AI · MILESTONE"
      progressWidth="72%"
      summary={
        <>
          Day 200 closes the teams stretch. Ship a platform with <strong>specialized roles, typed handoffs, rubric
          supervision, and a topology you can justify</strong>.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#MultiAgent', '#Day200', '#Milestone', '#Teams']}
    />
  );
}
