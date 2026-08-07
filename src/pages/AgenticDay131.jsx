import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Why edge', text: 'lower latency, offline rooms, and data that must never leave the device' },
  { title: 'Small models', text: 'SLMs / quantized LLMs on phone, laptop, or gateway — trade quality for privacy and cost' },
  { title: 'Hybrid split', text: 'local for PII-heavy steps; cloud for hard reasoning when online and allowed' },
  { title: 'Tool locality', text: 'camera, files, BLE — tools that only exist on-device' },
  { title: 'Resource budgets', text: 'RAM, battery, and thermal limits are stop rules just like max_steps' },
  { title: 'Update channels', text: 'model packs and prompt packs update like apps — versioned and signed' },
  { title: 'Fallback', text: 'when the local model fails, degrade to templates or queue for cloud with consent' },
  { title: 'What’s next', text: 'edge without sync becomes a silo of stale state' },
];

const core = [
  {
    icon: '📱', title: 'Local Loop', titleClass: 'card-title-cyan', subtitle: 'On-Device',
    description: 'User → local model → on-device tools → optional cloud escalate with explicit consent.',
    code: 'local LLM → tools\n→ escalate? (consent)',
  },
  {
    icon: '⚖️', title: 'Split Brain', titleClass: 'card-title-purple', subtitle: 'Hybrid',
    description: 'Classifier chooses local vs cloud. PII paths stay local; complex planning may go cloud.',
    code: 'route(pii|hard)\nlocal | cloud',
  },
  {
    icon: '📦', title: 'Model Packs', titleClass: 'card-title-amber', subtitle: 'Updates',
    description: 'Ship signed model+prompt bundles. Pin versions; rollback like any other release.',
    code: 'pack@v3 signed\npin · rollback',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Hybrid Spec', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'One-pager: which intents stay on-device vs cloud for a notes agent. Include battery/RAM caps.',
    code: 'local intents\ncloud intents\nbudgets',
  },
  {
    icon: '🔐', title: 'Consent Gate', titleClass: 'card-title-purple', subtitle: 'Safety',
    description: 'Cloud escalate requires a user toggle. Prove the network call is blocked when off.',
    code: 'consent off → no net',
  },
  {
    icon: '🔜', title: 'Next: Sync', titleClass: 'card-title-amber', subtitle: 'Day 132',
    description: 'Tomorrow — offline-first sync for agent state and memory.',
    link: { href: '/agentic-day-132', label: 'Go to Day 132 →' },
  },
];

const resources = [
  {
    icon: '🏁', title: 'SaaS Milestone', titleClass: 'card-title-cyan', subtitle: 'Day 125',
    description: 'Cloud platform this edge layer complements.',
    link: { href: '/agentic-day-125', label: 'Open Day 125 →' },
  },
  {
    icon: '🎙️', title: 'Voice Day 96', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'Realtime agents often need on-device VAD and low latency.',
    link: { href: '/agentic-day-96', label: 'Open Day 96 →' },
  },
  {
    icon: '🏭', title: 'LLMOps Day 61', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Versioning habits for model packs on device.',
    link: { href: '/agentic-day-61', label: 'Open Day 61 →' },
  },
];

export default function AgenticDay131() {
  return (
    <StandaloneJourneyPage
      dayNumber={131}
      series="Agentic AI"
      dateLabel="Agentic AI Day 131 · 12 Dec 2026"
      prev={{ href: '/agentic-day-130', label: '← Day 130' }}
      next={{ href: '/agentic-day-132', label: 'Day 132 →' }}
      tags={['Agentic AI', 'Edge', 'Phase 18']}
      theme="EDGE & ON-DEVICE AGENTS"
      heroIcon="📱"
      profileRole="AGENTIC AI · EDGE"
      progressWidth="87%"
      summary={
        <>
          Day 131 moves intelligence to the device. Run <strong>local loops</strong>, split cloud for hard work, and
          treat battery/RAM as hard stop rules.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#EdgeAI', '#OnDevice', '#Day131', '#SLM', '#AgenticAI']}
    />
  );
}
