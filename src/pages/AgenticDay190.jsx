import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Arc 186–190', text: 'eval harness → CI gates → observability → canary → milestone' },
  { title: 'Quality has a number', text: 'offline evals and a live proxy both score every change' },
  { title: 'Nothing ships blind', text: 'CI gates, traces, canary, and rollback guard each release' },
  { title: 'Stacks on runtime', text: 'reliability (186–190) sits on the runtime kit (181–185)' },
  { title: 'Keep shipping', text: 'apply the loop to one production agent before scaling out' },
];

const core = [
  {
    icon: '🏁',
    title: 'Milestone Checklist',
    titleClass: 'card-title-cyan',
    subtitle: 'Ship',
    description: 'Golden suite · CI gate · live traces · canary and rollback wired on one agent.',
    code: 'evals · gate\ntrace · canary',
  },
  {
    icon: '🎬',
    title: '5-Min Demo',
    titleClass: 'card-title-purple',
    subtitle: 'Show',
    description: 'Baseline score, a blocked bad PR, a live drift alert, then a canary rollback.',
    code: 'gate · alert\ncanary · revert',
  },
  {
    icon: '🗺️',
    title: '186–190 Map',
    titleClass: 'card-title-amber',
    subtitle: 'Arc',
    description: 'Measure → gate → watch → roll out → ship the reliability platform.',
    code: 'measure·gate\nwatch·roll',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Sign-Off Score',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Rate 0–2 on evals, gates, observability, and release. Fix the lowest first.',
    code: 'score 0–2\nfix weakest',
  },
  {
    icon: '📦',
    title: 'Reliability README',
    titleClass: 'card-title-purple',
    subtitle: 'Docs',
    description: 'Document scorers, thresholds, signals, and rollback steps for on-call.',
    code: 'scorers · floor\nsignals · revert',
  },
  {
    icon: '🔜',
    title: 'What Comes Next',
    titleClass: 'card-title-amber',
    subtitle: 'Day 191',
    description: 'Next arc — harden the agent against prompt injection and attacks.',
    link: { href: '/agentic-day-191', label: 'Go to Day 191 →' },
  },
];

const resources = [
  {
    icon: '🐤',
    title: 'Day 189',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Canary and rollback this milestone certifies.',
    link: { href: '/agentic-day-189', label: 'Open Day 189 →' },
  },
  {
    icon: '🏁',
    title: 'Day 185',
    titleClass: 'card-title-purple',
    subtitle: 'Prior Milestone',
    description: 'Runtime platform this reliability layer extends.',
    link: { href: '/agentic-day-185', label: 'Open Day 185 →' },
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

export default function AgenticDay190() {
  return (
    <StandaloneJourneyPage
      dayNumber={190}
      series="Agentic AI"
      dateLabel="Agentic AI Day 190 · 8 Mar 2027"
      prev={{ href: '/agentic-day-189', label: '← Day 189' }}
      next={{ href: '/agentic-day-191', label: 'Day 191 →' }}
      tags={['Agentic AI', 'Reliability', 'Milestone']}
      theme="AGENT RELIABILITY PLATFORM MILESTONE"
      heroIcon="🏁"
      profileRole="AGENTIC AI · MILESTONE"
      progressWidth="67%"
      summary={
        <>
          Day 190 closes the reliability stretch. Ship a platform that <strong>measures quality, gates regressions,
          watches production, and rolls out safely</strong>.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Reliability', '#Day190', '#Milestone', '#Platform']}
    />
  );
}
