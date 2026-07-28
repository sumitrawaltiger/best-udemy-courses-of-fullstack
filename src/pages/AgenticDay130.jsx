import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Days 126-130 arc', text: 'disaster recovery → multi-agent collaboration → governance & compliance → customer success → mature platform' },
  { title: 'Resilience is a feature', text: 'RTO/RPO targets and rehearsed failover matter as much to customers as any product feature' },
  { title: 'Collaboration needs limits', text: 'handoffs and shared memory work only with a loop guard and full cross-agent traceability' },
  { title: 'Compliance is a feature too', text: 'explainability and data residency are things customers pay for, not just internal checkboxes' },
  { title: 'Onboarding drives retention', text: 'a fast time-to-first-value and a real playbook prevent churn better than any late rescue call' },
  { title: 'Metrics you can defend', text: 'failover time, task success rate, and time-to-first-value, all visible on one dashboard' },
  { title: 'Portfolio bar', text: 'one platform demo: a region failover, a live agent handoff, a policy check, and a smooth onboarding flow' },
  { title: 'What\'s next', text: 'taking this platform to the edge — running agents on-device, not just in the cloud' },
];

const core = [
  {
    icon: '✅', title: 'The Platform Checklist', titleClass: 'card-title-cyan', subtitle: 'Ship It',
    description: 'A rehearsed DR runbook, at least one safe cross-agent handoff, a centralized policy engine, and a real onboarding playbook.',
    code: 'DR runbook · handoff\npolicy · onboarding',
  },
  {
    icon: '🎚️', title: 'Quality Bar', titleClass: 'card-title-purple', subtitle: 'Prove It',
    description: 'Failover meets its RTO target, every agent decision traces back to a policy, and time-to-first-value keeps shrinking.',
    code: 'failover ≤ RTO\ndecisions traceable · TTFV ↓',
  },
  {
    icon: '🗺️', title: 'Journey Map', titleClass: 'card-title-amber', subtitle: 'Day 126 → 130',
    description: 'From a single-region platform to one that survives outages, collaborates safely, governs itself, and onboards customers well.',
    code: 'reliability → collaborate\n→ govern → onboard',
  },
];

const practice = [
  {
    icon: '📦', title: 'Portfolio Story', titleClass: 'card-title-cyan', subtitle: 'Demo',
    description: 'Walk through: a region failover → a live agent handoff → a policy check → a new customer\'s first successful task.',
    code: '5-minute narrative, live demo',
  },
  {
    icon: '🔍', title: 'Health Ritual', titleClass: 'card-title-purple', subtitle: 'Weekly',
    description: 'Rehearse one DR step, audit one policy rule, and check time-to-first-value for the latest cohort of new tenants.',
    code: 'DR drill · policy audit · TTFV check',
  },
  {
    icon: '🔜', title: 'Next: Edge & On-Device Agents', titleClass: 'card-title-amber', subtitle: 'Day 131 Preview',
    description: 'Tomorrow — Phase 18 begins: running agents on-device, not just in the cloud.',
    link: { href: '/agentic-day-131', label: 'Go to Day 131 →' },
  },
];

const resources = [
  {
    icon: '📘', title: 'Python & Agentic Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'The full curriculum behind this platform-building arc.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '💼', title: 'Agent SaaS Platform Milestone', titleClass: 'card-title-purple', subtitle: 'Day 125',
    description: 'The prior milestone — the marketplace, billing, and tenancy foundation this arc built resilience and adoption on top of.',
    link: { href: '/agentic-day-125', label: 'Open Day 125 →' },
  },
  {
    icon: '🏛️', title: 'Multi-Domain Platform Milestone', titleClass: 'card-title-amber', subtitle: 'Day 120',
    description: 'Two milestones back — where the multi-domain gateway itself first came together.',
    link: { href: '/agentic-day-120', label: 'Open Day 120 →' },
  },
];

export default function AgenticDay130() {
  return (
    <StandaloneJourneyPage
      dayNumber={130}
      series="Agentic AI"
      dateLabel="Agentic AI Day 130 · 6 Dec 2026"
      prev={{ href: '/agentic-day-129', label: '← Day 129' }}
      next={{ href: '/agentic-day-131', label: 'Day 131 →' }}
      tags={['Agentic AI', 'Milestone', 'Phase 17']}
      theme="AGENT PLATFORM MATURITY MILESTONE"
      heroIcon="🏁"
      profileRole="AGENTIC AI · PLATFORM"
      progressWidth="87%"
      summary={
        <>
          Day 130 closes this stretch. The platform now survives a <strong>regional outage</strong>, lets
          agents <strong>collaborate</strong> safely, enforces <strong>governance</strong> centrally, and{' '}
          <strong>onboards</strong> customers fast — a mature product, not just a demo.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#PlatformMaturity', '#Day130', '#Milestone', '#100DaysOfCode']}
    />
  );
}
