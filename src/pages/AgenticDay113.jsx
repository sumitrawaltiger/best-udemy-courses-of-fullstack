import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Intent routing', text: 'classify early; send VIP, billing, and tech down different paths' },
  { title: 'SLA clocks', text: 'response and resolve timers drive when agents escalate' },
  { title: 'Escalation packs', text: 'humans need summary, attempts, citations — not a blank ticket' },
  { title: 'Priority rules', text: 'severity and revenue impact beat FIFO when queues surge' },
  { title: 'Loop guards', text: 'max hops between bots and humans to avoid ping-pong' },
  { title: 'Audit why', text: 'log the rule that routed or escalated for later tuning' },
  { title: 'What’s next', text: 'routing works better with a curated macro and knowledge library' },
];

const core = [
  {
    icon: '🚦', title: 'Router Node', titleClass: 'card-title-cyan', subtitle: 'Classify',
    description: 'Intent + priority → queue or specialist agent. Unknown → safe default.',
    code: 'intent → route\nunknown → default',
  },
  {
    icon: '⏰', title: 'SLA Watcher', titleClass: 'card-title-purple', subtitle: 'Timers',
    description: 'Breach warnings trigger escalate or HITL before the clock dies.',
    code: 'warn → escalate',
  },
  {
    icon: '📦', title: 'Escalation Pack', titleClass: 'card-title-amber', subtitle: 'Handoff',
    description: 'Summary, tools tried, citations, sentiment — attached to the human task.',
    code: 'summary · tries\ncites · tone',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Router Table', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Define 6 intents → destination. Test 10 sample tickets against it.',
    code: '6 intents\n10 tests',
  },
  {
    icon: '⏰', title: 'SLA Breach Sim', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Force a near-breach. Confirm escalate fires with a full context pack.',
    code: 'breach → pack',
  },
  {
    icon: '🔜', title: 'Next: Knowledge Libraries', titleClass: 'card-title-amber', subtitle: 'Day 114',
    description: 'Tomorrow — macros and knowledge libraries.',
    link: { href: '/agentic-day-114', label: 'Go to Day 114 →' },
  },
];

const resources = [
  {
    icon: '🔌', title: 'Day 112', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Integrations routing depends on.',
    link: { href: '/agentic-day-112', label: 'Open Day 112 →' },
  },
  {
    icon: '🎫', title: 'Day 116', titleClass: 'card-title-purple', subtitle: 'Ahead',
    description: 'Support systems that use these rules.',
    link: { href: '/agentic-day-116', label: 'Open Day 116 →' },
  },
  {
    icon: '⚖️', title: 'Day 104', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Risk tiers for escalation.',
    link: { href: '/agentic-day-104', label: 'Open Day 104 →' },
  },
];

export default function AgenticDay113() {
  return (
    <StandaloneJourneyPage
      dayNumber={113}
      series="Agentic AI"
      dateLabel="Agentic AI Day 113 · 21 Dec 2026"
      prev={{ href: '/agentic-day-112', label: '← Day 112' }}
      next={{ href: '/agentic-day-114', label: 'Day 114 →' }}
      tags={['Agentic AI', 'Routing', 'Phase 16a']}
      theme="ROUTING, SLA & ESCALATION"
      heroIcon="🚦"
      profileRole="AGENTIC AI · ROUTING"
      progressWidth="74%"
      summary={
        <>
          Day 113 keeps queues honest. <strong>Route by intent</strong>, watch SLAs, and escalate with a full context pack.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Routing', '#SLA', '#Day113', '#Escalation', '#AgenticAI']}
    />
  );
}
