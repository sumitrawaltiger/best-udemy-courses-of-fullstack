import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Phase 18 arc', text: 'edge → offline sync → privacy → synthetic eval → milestone' },
  { title: 'Private agent bar', text: 'works offline, keeps PII local by default, evals on synthetic, syncs safely' },
  { title: 'Demo story', text: 'flight mode task → queue → sync once → privacy mode blocks cloud → synthetic suite green' },
  { title: 'Trust story', text: 'model never saw raw email; clear-memory wipes edge and cloud' },
  { title: 'Hybrid story', text: 'hard questions escalate to cloud only with consent' },
  { title: 'Reuse cloud lessons', text: 'quotas, HITL, traces still apply — just with local-first defaults' },
  { title: 'Keep shipping', text: 'fill 126–130 later, or deepen one industry edge deployment' },
];

const core = [
  {
    icon: '🏁', title: 'Milestone Checklist', titleClass: 'card-title-cyan', subtitle: 'Ship',
    description: 'On-device loop · outbox sync · PII vault · privacy mode · synthetic suite · signed model pack.',
    code: 'edge · sync\nvault · privacy\nsynthetic · packs',
  },
  {
    icon: '🎬', title: '5-Min Demo', titleClass: 'card-title-purple', subtitle: 'Show',
    description: 'Offline success, consent-gated cloud, and a failing cross-privacy probe — then eval numbers.',
    code: 'offline · consent\nprobe fail · eval',
  },
  {
    icon: '🗺️', title: '131–135 Map', titleClass: 'card-title-amber', subtitle: 'Arc',
    description: 'Run local → sync safely → protect PII → eval privately → ship. Edge agents that earn trust.',
    code: 'local · sync\nprotect · eval · ship',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Sign-Off Score', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Rate your edge agent 0–2 on each checklist item. Fix the lowest before calling it done.',
    code: 'score 0–2\nfix weakest',
  },
  {
    icon: '📦', title: 'Pack + README', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Document model pack version, privacy mode behavior, and sync conflict rules for users.',
    code: 'pack ver · privacy\nconflict rules',
  },
  {
    icon: '🔜', title: 'What Comes Next', titleClass: 'card-title-amber', subtitle: 'Continue',
    description: 'Next phase — production excellence (Days 136–140).',
    link: { href: '/agentic-day-136', label: 'Go to Day 136 →' },
  },
];

const resources = [
  {
    icon: '📘', title: 'Python Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Full Gen AI + Agentic curriculum.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '📱', title: 'Day 131', titleClass: 'card-title-purple', subtitle: 'Start of 18',
    description: 'Edge and on-device agents — start of this phase.',
    link: { href: '/agentic-day-131', label: 'Open Day 131 →' },
  },
  {
    icon: '🏁', title: 'Day 125', titleClass: 'card-title-amber', subtitle: 'Prior Milestone',
    description: 'Cloud SaaS milestone this edge phase complements.',
    link: { href: '/agentic-day-125', label: 'Open Day 125 →' },
  },
];

export default function AgenticDay135() {
  return (
    <StandaloneJourneyPage
      dayNumber={135}
      series="Agentic AI"
      dateLabel="Agentic AI Day 135 · 13 Jan 2027"
      prev={{ href: '/agentic-day-134', label: '← Day 134' }}
      next={{ href: '/agentic-day-136', label: 'Day 136 →' }}
      tags={['Agentic AI', 'Edge', 'Phase 18']}
      theme="EDGE & PRIVATE AGENTS MILESTONE"
      heroIcon="🏁"
      profileRole="AGENTIC AI · MILESTONE"
      progressWidth="90%"
      summary={
        <>
          Day 135 closes Phase 18. Ship an <strong>edge-first agent</strong> with offline sync, privacy mode, and a
          synthetic eval gate.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#EdgeAI', '#Privacy', '#Day135', '#Milestone', '#AgenticAI']}
    />
  );
}
