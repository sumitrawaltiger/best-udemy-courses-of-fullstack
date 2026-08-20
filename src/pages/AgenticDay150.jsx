import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Phase 20 arc', text: 'feedback → safe updates → knowledge graph → analytics → milestone' },
  { title: 'Learning bar', text: 'capture signals, ship packs safely, structure knowledge, measure outcomes' },
  { title: 'Demo story', text: 'thumb → preference pair → canary pack → graph cite → north-star uptick' },
  { title: 'Scorecard', text: 'signal coverage · canary discipline · graph freshness · north-star lift' },
  { title: 'Reuse prior phases', text: 'excellence (19) + edge privacy (18) + SaaS (17) still apply' },
  { title: 'Keep shipping', text: 'fill 141–145 later, or deepen one vertical with this flywheel' },
];

const core = [
  {
    icon: '🏁', title: 'Milestone Checklist', titleClass: 'card-title-cyan', subtitle: 'Ship',
    description: 'Feedback events · preference pairs · policy packs · canary · mini graph · north-star board.',
    code: 'signals · packs\ngraph · metrics',
  },
  {
    icon: '🎬', title: '5-Min Demo', titleClass: 'card-title-purple', subtitle: 'Show',
    description: 'Capture a thumb, propose a pack diff, canary it, answer with a graph path, show the metric.',
    code: 'thumb · pack\ngraph · metric',
  },
  {
    icon: '🗺️', title: '146–150 Map', titleClass: 'card-title-amber', subtitle: 'Arc',
    description: 'Learn from users → update safely → structure facts → measure growth → ship.',
    code: 'learn · update\nstructure · measure',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Sign-Off Score', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Rate 0–2 on flywheel, packs, graph, analytics. Fix the lowest before calling it done.',
    code: 'score 0–2\nfix weakest',
  },
  {
    icon: '📦', title: 'Learning README', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Document signal schema, pack promote rules, graph write policy, and north-star definition.',
    code: 'signals · packs\ngraph · star',
  },
  {
    icon: '🔜', title: 'What Comes Next', titleClass: 'card-title-amber', subtitle: 'Continue',
    description: 'Finale — capstone brief, build, and series graduation (Days 151–155).',
    link: { href: '/agentic-day-151', label: 'Go to Day 151 →' },
  },
];

const resources = [
  {
    icon: '📘', title: 'Python Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Full Gen AI + Agentic curriculum.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '🔁', title: 'Day 146', titleClass: 'card-title-purple', subtitle: 'Start of 20',
    description: 'Feedback flywheels — start of this phase.',
    link: { href: '/agentic-day-146', label: 'Open Day 146 →' },
  },
  {
    icon: '🏁', title: 'Day 140', titleClass: 'card-title-amber', subtitle: 'Prior Milestone',
    description: 'Production excellence this learning phase builds on.',
    link: { href: '/agentic-day-140', label: 'Open Day 140 →' },
  },
];

export default function AgenticDay150() {
  return (
    <StandaloneJourneyPage
      dayNumber={150}
      series="Agentic AI"
      dateLabel="Agentic AI Day 150 · 17 Jan 2027"
      prev={{ href: '/agentic-day-149', label: '← Day 149' }}
      next={{ href: '/agentic-day-151', label: 'Day 151 →' }}
      tags={['Agentic AI', 'Learning', 'Phase 20']}
      theme="LEARNING SYSTEMS MILESTONE"
      heroIcon="🏁"
      profileRole="AGENTIC AI · MILESTONE"
      progressWidth="97%"
      summary={
        <>
          Day 150 closes Phase 20. Ship a <strong>learning system</strong>: feedback in, safe packs out, graph
          context, and a north-star you can defend.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#LearningSystems', '#Flywheel', '#Day150', '#Milestone', '#AgenticAI']}
    />
  );
}
