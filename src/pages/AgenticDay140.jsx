import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Phase 19 arc', text: 'FinOps → latency → chaos → security → milestone' },
  { title: 'Excellence bar', text: 'cheap enough, fast enough, survives faults, resists abuse' },
  { title: 'Demo story', text: 'show cost line → stream status → kill a tool gracefully → block an injection' },
  { title: 'Scorecard', text: 'cost/task · TTFT p95 · game-day fixes · injection suite pass' },
  { title: 'Ops reuse', text: 'edge privacy (Phase 18) + SaaS (Phase 17) + this excellence layer' },
  { title: 'Keep shipping', text: 'fill gaps earlier in the journal, or pick one vertical and go deep' },
];

const core = [
  {
    icon: '🏁', title: 'Milestone Checklist', titleClass: 'card-title-cyan', subtitle: 'Ship',
    description: 'Cost caps · TTFT SLO · chaos game day · tool allowlist · injection CI · HITL for irreversible.',
    code: 'finops · latency\nchaos · security',
  },
  {
    icon: '🎬', title: '5-Min Demo', titleClass: 'card-title-purple', subtitle: 'Show',
    description: 'Live cost meter, streaming plan, forced tool timeout degrade, and a refused injection.',
    code: '$ · stream\ndegrade · refuse',
  },
  {
    icon: '🗺️', title: '136–140 Map', titleClass: 'card-title-amber', subtitle: 'Arc',
    description: 'Spend wisely → feel fast → survive faults → stay safe → ship. Production excellence.',
    code: 'cost · speed\nfail · secure · ship',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Sign-Off Score', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Rate 0–2 on cost, latency, chaos, security. Fix the lowest score before calling it done.',
    code: 'score 0–2\nfix weakest',
  },
  {
    icon: '📦', title: 'Runbook Pack', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'One page: budgets, SLOs, breaker behavior, security allowlist, on-call contacts.',
    code: 'budgets · SLOs\nbreakers · contacts',
  },
  {
    icon: '🔜', title: 'What Comes Next', titleClass: 'card-title-amber', subtitle: 'Continue',
    description: 'Next — enterprise ops bridge (Days 141–145), then learning systems.',
    link: { href: '/agentic-day-141', label: 'Go to Day 141 →' },
  },
];

const resources = [
  {
    icon: '📘', title: 'Python Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Full Gen AI + Agentic curriculum.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '💰', title: 'Day 136', titleClass: 'card-title-purple', subtitle: 'Start of 19',
    description: 'Agent cost & FinOps — start of this phase.',
    link: { href: '/agentic-day-136', label: 'Open Day 136 →' },
  },
  {
    icon: '🏁', title: 'Day 135', titleClass: 'card-title-amber', subtitle: 'Prior Milestone',
    description: 'Edge & private agents this excellence phase builds on.',
    link: { href: '/agentic-day-135', label: 'Open Day 135 →' },
  },
];

export default function AgenticDay140() {
  return (
    <StandaloneJourneyPage
      dayNumber={140}
      series="Agentic AI"
      dateLabel="Agentic AI Day 140 · 18 Jan 2027"
      prev={{ href: '/agentic-day-139', label: '← Day 139' }}
      next={{ href: '/agentic-day-141', label: 'Day 141 →' }}
      tags={['Agentic AI', 'Production', 'Phase 19']}
      theme="PRODUCTION EXCELLENCE MILESTONE"
      heroIcon="🏁"
      profileRole="AGENTIC AI · MILESTONE"
      progressWidth="93%"
      summary={
        <>
          Day 140 closes Phase 19. Ship an agent that is <strong>cheap, fast, resilient, and secure</strong> — with a
          scorecard and a short demo.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Production', '#Excellence', '#Day140', '#Milestone', '#AgenticAI']}
    />
  );
}
