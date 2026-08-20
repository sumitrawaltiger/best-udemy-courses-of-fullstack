import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Meter everything', text: 'tokens, tool calls, plugin invokes, and seat minutes — bill from facts not guesses' },
  { title: 'Usage events', text: 'append-only events: tenant, feature, units, cost_estimate, trace_id' },
  { title: 'Pricing models', text: 'per seat, per task, per token, or hybrid — pick one primary meter customers understand' },
  { title: 'Showback', text: 'internal dashboards of $ by team before you charge external customers' },
  { title: 'Hard caps', text: 'soft warn at 80%, hard stop at 100% of plan — same idea as Day 58 quotas' },
  { title: 'Invoice reconciliation', text: 'daily job compares provider invoices to your event sum; alert on drift' },
  { title: 'Free-tier abuse', text: 'fingerprint + rate limits so trial tokens are not a crypto farm' },
  { title: 'What’s next', text: 'metering without tenant isolation is a data leak waiting to happen' },
];

const core = [
  {
    icon: '📊', title: 'Usage Event', titleClass: 'card-title-cyan', subtitle: 'Meter',
    description: 'Emit one event per billable unit with trace_id for disputes. Never update historical events in place.',
    code: 'tenant · units\n$est · trace_id\nappend-only',
  },
  {
    icon: '💳', title: 'Plan Caps', titleClass: 'card-title-purple', subtitle: 'Entitlements',
    description: 'Plan defines included units + overage. Gateway checks entitlement before expensive model calls.',
    code: 'plan → included\noverrage · hard stop',
  },
  {
    icon: '📈', title: 'Showback Board', titleClass: 'card-title-amber', subtitle: 'Visibility',
    description: 'Per-team $/day, top features, cache hit savings. Finance and eng share one screen.',
    code: '$/team · top feats\ncache $ saved',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Event Schema', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Define UsageEvent JSON and log 20 fake runs. Sum tokens by tenant in a query.',
    code: '20 events\nSUM by tenant',
  },
  {
    icon: '🛑', title: 'Cap Drill', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Set a tiny daily cap; prove the  N+1st request returns a friendly upgrade message.',
    code: 'cap hit → 402/429\nupgrade copy',
  },
  {
    icon: '🔜', title: 'Next: Multi-Tenant', titleClass: 'card-title-amber', subtitle: 'Day 123',
    description: 'Tomorrow — SaaS hardening and tenant isolation.',
    link: { href: '/agentic-day-123', label: 'Go to Day 123 →' },
  },
];

const resources = [
  {
    icon: '⏱️', title: 'Quotas Day 58', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Rate limits and $ caps that metering builds on.',
    link: { href: '/agentic-day-58', label: 'Open Day 58 →' },
  },
  {
    icon: '📡', title: 'Monitoring Day 64', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'Cost dashboards and burn alerts.',
    link: { href: '/agentic-day-64', label: 'Open Day 64 →' },
  },
  {
    icon: '🔌', title: 'Plugins Day 121', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Plugin invokes are first-class billable units.',
    link: { href: '/agentic-day-121', label: 'Open Day 121 →' },
  },
];

export default function AgenticDay122() {
  return (
    <StandaloneJourneyPage
      dayNumber={122}
      series="Agentic AI"
      dateLabel="Agentic AI Day 122 · 21 Dec 2026"
      prev={{ href: '/agentic-day-121', label: '← Day 121' }}
      next={{ href: '/agentic-day-123', label: 'Day 123 →' }}
      tags={['Agentic AI', 'Billing', 'Phase 17']}
      theme="BILLING, METERING & USAGE ANALYTICS"
      heroIcon="💳"
      profileRole="AGENTIC AI · BILLING"
      progressWidth="81%"
      summary={
        <>
          Day 122 meters the platform. Emit <strong>usage events</strong>, enforce plan caps, and give teams a clear
          showback of agent spend.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Billing', '#Metering', '#Day122', '#SaaS', '#AgenticAI']}
    />
  );
}
