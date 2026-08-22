import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Phase 16 arc', text: 'support → sales → research → internal copilots → one platform' },
  { title: 'Agent platform', text: 'shared gateway: auth, routing, tools, eval, billing — many domain brains' },
  { title: 'Router', text: 'classify intent to the right domain agent; fall back to human or generalist' },
  { title: 'Shared services', text: 'one trace store, one policy engine, one quota system for all domains' },
  { title: 'Tenant isolation', text: 'data and caches never leak across customers or business units' },
  { title: 'Portfolio story', text: 'demo two domains on one gateway with different tools and risk tiers' },
  { title: 'Ops once', text: 'one on-call runbook template parameterized per domain' },
  { title: 'Keep shipping', text: 'add domains carefully; platforms die from ten half-built agents' },
];

const core = [
  {
    icon: '🏛️', title: 'Gateway Shape', titleClass: 'card-title-cyan', subtitle: 'Platform',
    description: 'API → auth → router → domain agent → shared tools/policy/traces → response.',
    code: 'auth → route\n→ domain agent\n→ shared ops',
  },
  {
    icon: '🧭', title: 'Domain Pack', titleClass: 'card-title-purple', subtitle: 'Module',
    description: 'Each domain ships: prompts, tools allowlist, eval set, risk tier, runbook snippet.',
    code: 'prompts · tools\neval · tier · runbook',
  },
  {
    icon: '🏁', title: 'Milestone Bar', titleClass: 'card-title-amber', subtitle: 'Ship',
    description: 'Two domains live behind one gateway, with separate evals and a combined demo script.',
    code: '2 domains · 1 gateway\n2 evals · 1 demo',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Platform Spec', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'One-pager: router rules, shared services list, and ownership for support vs internal agents.',
    code: 'router · shared\nowners',
  },
  {
    icon: '📦', title: 'Dual-Domain Demo', titleClass: 'card-title-purple', subtitle: 'Show',
    description: 'Script a demo that handles one support ticket and one internal IT question on the same API.',
    code: 'ticket + IT Q\nsame gateway',
  },
  {
    icon: '🔜', title: 'Next: Plugins', titleClass: 'card-title-amber', subtitle: 'Day 121',
    description: 'Continue Phase 17 — marketplace plugins, metering, multi-tenant SaaS, experiments, milestone.',
    link: { href: '/agentic-day-121', label: 'Go to Day 121 →' },
  },
];

const resources = [
  {
    icon: '📘', title: 'Python Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Full Gen AI + Agentic curriculum.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '🎫', title: 'Day 116', titleClass: 'card-title-purple', subtitle: 'Support',
    description: 'Start of this product-domain phase.',
    link: { href: '/agentic-day-116', label: 'Open Day 116 →' },
  },
  {
    icon: '🎓', title: 'Day 105', titleClass: 'card-title-amber', subtitle: 'Prior Milestone',
    description: 'Domain portfolio bar before platformizing.',
    link: { href: '/agentic-day-105', label: 'Open Day 105 →' },
  },
];

export default function AgenticDay120() {
  return (
    <StandaloneJourneyPage
      dayNumber={120}
      series="Agentic AI"
      dateLabel="Agentic AI Day 120 · 20 Dec 2026"
      prev={{ href: '/agentic-day-119', label: '← Day 119' }}
      next={{ href: '/agentic-day-121', label: 'Day 121 →' }}
      tags={['Agentic AI', 'Platform', 'Phase 16']}
      theme="MULTI-DOMAIN AGENT PLATFORM MILESTONE"
      heroIcon="🏛️"
      profileRole="AGENTIC AI · PLATFORM"
      progressWidth="80%"
      summary={
        <>
          Day 120 closes Phase 16. Put support, sales, research, and internal agents behind one{' '}
          <strong>gateway</strong> with shared auth, policy, and eval.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgentPlatform', '#MultiDomain', '#Day120', '#Milestone', '#AgenticAI']}
    />
  );
}
