import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Phase 17 arc', text: 'plugins → metering → multi-tenant → experiments → SaaS milestone' },
  { title: 'Agent SaaS bar', text: 'customers install plugins, stay isolated, see usage, and you ship via experiments' },
  { title: 'Platform checklist', text: 'marketplace + billing + RLS + exp framework + shared gateway from Day 120' },
  { title: 'Demo story', text: 'tenant signup → enable plugin → hit cap warn → win an A/B → show audit' },
  { title: 'Trust story', text: 'cross-tenant probe fails; delete job works; kill switch disables a plugin' },
  { title: 'Revenue story', text: 'usage events reconcile to a sample invoice within tolerance' },
  { title: 'Keep building', text: 'next: deeper verticals, edge agents, or fill earlier journal gaps' },
];

const core = [
  {
    icon: '🏁', title: 'Milestone Checklist', titleClass: 'card-title-cyan', subtitle: 'Ship',
    description: 'Plugins · metering · tenant isolation · A/B framework · gateway · runbook · customer demo.',
    code: 'plugins · $ meter\nRLS · experiments\ngateway · demo',
  },
  {
    icon: '🎬', title: '5-Min SaaS Demo', titleClass: 'card-title-purple', subtitle: 'Show',
    description: 'Two tenants, one shared platform, different plugins and plans — no data bleed.',
    code: '2 tenants\n≠ data · ≠ plugins',
  },
  {
    icon: '🗺️', title: '121–125 Map', titleClass: 'card-title-amber', subtitle: 'Arc',
    description: 'Extend → bill → isolate → experiment → ship. That is an agent product company loop.',
    code: 'extend · bill\nisolate · test · ship',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Sign-Off Doc', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Score your platform 0–2 on each checklist item. Fix the weakest before calling it GA.',
    code: 'score 0–2\nfix weakest',
  },
  {
    icon: '📦', title: 'Launch README', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Customer-facing: plans, plugin install, data isolation promise, and support path.',
    code: 'plans · plugins\nisolation · support',
  },
  {
    icon: '🔜', title: 'Next: Disaster Recovery', titleClass: 'card-title-amber', subtitle: 'Day 126 Preview',
    description: 'Next — hardening the platform with multi-region failover, before edge & private agents.',
    link: { href: '/agentic-day-126', label: 'Go to Day 126 →' },
  },
];

const resources = [
  {
    icon: '📘', title: 'Python Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Full Gen AI + Agentic curriculum.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '🔌', title: 'Day 121', titleClass: 'card-title-purple', subtitle: 'Start of 17',
    description: 'Marketplace and plugins — start of this phase.',
    link: { href: '/agentic-day-121', label: 'Open Day 121 →' },
  },
  {
    icon: '🏛️', title: 'Day 120', titleClass: 'card-title-amber', subtitle: 'Gateway',
    description: 'Multi-domain platform this SaaS layer sits on.',
    link: { href: '/agentic-day-120', label: 'Open Day 120 →' },
  },
];

export default function AgenticDay125() {
  return (
    <StandaloneJourneyPage
      dayNumber={125}
      series="Agentic AI"
      dateLabel="Agentic AI Day 125 · 3 Dec 2026"
      prev={{ href: '/agentic-day-124', label: '← Day 124' }}
      next={{ href: '/agentic-day-126', label: 'Day 126 →' }}
      tags={['Agentic AI', 'SaaS', 'Phase 17']}
      theme="AGENT SAAS PLATFORM MILESTONE"
      heroIcon="🏁"
      profileRole="AGENTIC AI · MILESTONE"
      progressWidth="83%"
      summary={
        <>
          Day 125 closes Phase 17. Prove an <strong>agent SaaS</strong>: plugins, metering, tenant isolation, and
          experiments on one gateway.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgentSaaS', '#Milestone', '#Day125', '#Platform', '#AgenticAI']}
    />
  );
}
