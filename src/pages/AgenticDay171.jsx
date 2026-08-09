import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Launch is the start', text: 'shipping the agent creates a new learning loop, not a finish line' },
  { title: 'Watch real usage', text: 'post-launch behavior reveals task variants no design doc fully predicted' },
  { title: 'Compare expected vs observed', text: 'the gap between planned flows and actual usage is where product work begins' },
  { title: 'Escalations are signals', text: 'every human handoff contains information about where the system is weak' },
  { title: 'Feedback needs routing', text: 'bugs, policy misses, retrieval misses, and UX confusion should land in different queues' },
  { title: 'Close the loop fast', text: 'small post-launch fixes compound trust faster than big quarterly rewrites' },
  { title: 'Dashboards need owners', text: 'metrics only matter if someone is accountable for acting on them' },
  { title: 'Tomorrow: Day 172', text: 'incident handling and recovery drills for agent failures' },
];

const core = [
  {
    icon: '🔁',
    title: 'Learning Loop',
    titleClass: 'card-title-cyan',
    subtitle: 'Operate',
    description: 'Turn production signals into triaged work: product fixes, eval updates, and policy changes.',
    code: 'signal -> triage -> fix',
  },
  {
    icon: '📊',
    title: 'Observed Behavior',
    titleClass: 'card-title-purple',
    subtitle: 'Measure',
    description: 'Track what users actually ask, where runs stall, and which paths trigger escalation.',
    code: 'task mix · stalls · handoffs',
  },
  {
    icon: '🧭',
    title: 'Owner-Based Review',
    titleClass: 'card-title-amber',
    subtitle: 'Accountability',
    description: 'Each important dashboard or queue should have a named owner and response habit.',
    code: 'owner + review cadence',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Launch Review Board',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Create a weekly review of production failures, escalations, and surprising new task shapes.',
    code: 'weekly prod review',
  },
  {
    icon: '📋',
    title: 'Signal Routing',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Define where each class of post-launch issue goes: product, data, policy, or tooling.',
    code: 'issue -> owning queue',
  },
  {
    icon: '🔜',
    title: 'Next: Incidents',
    titleClass: 'card-title-amber',
    subtitle: 'Day 172 · 22 Jan 2027',
    description: 'Tomorrow — incident response, severity levels, and recovery playbooks for agent systems.',
    link: { href: '/agentic-day-172', label: 'Go to Day 172 →' },
  },
];

const resources = [
  {
    icon: '📘',
    title: 'Google SRE',
    titleClass: 'card-title-cyan',
    subtitle: 'Ops',
    description: 'Operational habits for turning production signals into system improvement.',
    link: { href: 'https://sre.google/sre-book/table-of-contents/', label: 'Open →', external: true },
  },
  {
    icon: '📖',
    title: 'Day 167',
    titleClass: 'card-title-purple',
    subtitle: 'Evals',
    description: 'Goldens and scorecards that post-launch learning should update.',
    link: { href: '/agentic-day-167', label: 'Open Day 167 →' },
  },
  {
    icon: '🗺️',
    title: 'Day 170',
    titleClass: 'card-title-amber',
    subtitle: 'Rollout',
    description: 'The rollout stage that turns into day-two operations.',
    link: { href: '/agentic-day-170', label: 'Open Day 170 →' },
  },
];

export default function AgenticDay171() {
  return (
    <StandaloneJourneyPage
      dayNumber={171}
      series="Agentic AI"
      dateLabel="Agentic AI Day 171 · 28 Jan 2027"
      prev={{ href: '/agentic-day-170', label: '← Day 170' }}
      next={{ href: '/agentic-day-172', label: 'Day 172 →' }}
      tags={['Agentic AI', 'Post-Launch', 'Operations']}
      theme="POST-LAUNCH LEARNING LOOPS & DAY-TWO OPERATIONS"
      heroIcon="🔁"
      profileRole="AGENTIC AI · LEARN"
      progressWidth="57%"
      summary={
        <>
          Day 171 starts the real work after release: turn production signals into a <strong>learning loop</strong>,
          route issues to the right owners, and improve the agent based on what users actually do.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#PostLaunch', '#Day171', '#Operations', '#LearningLoop']}
    />
  );
}
