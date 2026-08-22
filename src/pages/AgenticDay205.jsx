import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Arc 201–205', text: 'versioning → cost/perf → change control → audit → governance milestone' },
  { title: 'Prod has guardrails', text: 'prompts/models versioned, spend optimized, changes approved, every run auditable' },
  { title: 'Demo story', text: 'drift fail, router save 40%, CR needs 2 approvals, evidence bundle exports in 90s' },
  { title: 'Stacks on stacks', text: 'governance (201–205) sits on teams (196–200) → security → reliability → runtime' },
  { title: 'Keep shipping', text: 'run one regulated-class workflow through the governance stack before expanding' },
];

const core = [
  {
    icon: '🏁',
    title: 'Milestone Checklist',
    titleClass: 'card-title-cyan',
    subtitle: 'Ship',
    description: 'Prompt/model pins · tiered router · CR matrix · immut. audit · 5-min evidence export wired on one wf.',
    code: 'pin · route\nCR · audit',
  },
  {
    icon: '🎬',
    title: '5-Min Demo',
    titleClass: 'card-title-purple',
    subtitle: 'Show',
    description: 'Drift PR blocked, tiered routing $ save, CR needs approvals, audit bundle exports live.',
    code: 'block · save\napprove · export',
  },
  {
    icon: '🗺️',
    title: '201–205 Map',
    titleClass: 'card-title-amber',
    subtitle: 'Arc',
    description: 'Pin versions → optimize cost → gate changes → log every hop → ship the governance platform.',
    code: 'pin · opt\ngate · ship',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Sign-Off Score',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Rate 0–2 on versioning, cost/perf, CR gates, and audit. Fix the lowest first.',
    code: 'score 0–2\nfix weakest',
  },
  {
    icon: '📦',
    title: 'Governance README',
    titleClass: 'card-title-purple',
    subtitle: 'Docs',
    description: 'Document prompt pins, router tiers, CR matrix, retention policy, and evidence SOP for on-call.',
    code: 'gov README v1\npins · tiers · cr',
  },
  {
    icon: '🔜',
    title: 'What Comes Next',
    titleClass: 'card-title-amber',
    subtitle: 'Continue',
    description: 'Run the governance stack on a live workflow, or return to the hub until the next days land.',
    link: { href: '/', label: 'Back to Home →' },
  },
];

const resources = [
  {
    icon: '🧾',
    title: 'Day 204',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Audit trails this milestone certifies.',
    link: { href: '/agentic-day-204', label: 'Open Day 204 →' },
  },
  {
    icon: '🏁',
    title: 'Day 200',
    titleClass: 'card-title-purple',
    subtitle: 'Prior Milestone',
    description: 'Teams platform this governance layer extends.',
    link: { href: '/agentic-day-200', label: 'Open Day 200 →' },
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

export default function AgenticDay205() {
  return (
    <StandaloneJourneyPage
      dayNumber={205}
      series="Agentic AI"
      dateLabel="Agentic AI Day 205 · 15 Mar 2027"
      prev={{ href: '/agentic-day-204', label: '← Day 204' }}
      next={{ href: '/', label: 'Home →' }}
      tags={['Agentic AI', 'Governance', 'Milestone']}
      theme="AGENT GOVERNANCE & LIFECYCLE MILESTONE"
      heroIcon="🏁"
      profileRole="AGENTIC AI · MILESTONE"
      progressWidth="75%"
      summary={
        <>
          Day 205 closes the governance stretch. Ship a platform where <strong>versions are pinned, spend is
          optimized, changes are approved, and every run is auditable</strong>.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Governance', '#Day205', '#Milestone', '#Platform']}
    />
  );
}
