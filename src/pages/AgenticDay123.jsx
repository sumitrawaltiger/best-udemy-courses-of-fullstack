import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Tenant = boundary', text: 'auth identity maps to tenant_id on every query, cache key, and trace' },
  { title: 'Data isolation', text: 'row-level security or separate indexes — never “filter in the prompt”' },
  { title: 'Cache keys', text: 'include tenant_id in every semantic/exact cache key' },
  { title: 'Noisy neighbor', text: 'per-tenant quotas so one customer cannot starve others' },
  { title: 'Export & delete', text: 'GDPR-style export/delete jobs that cover vectors, traces, and uploads' },
  { title: 'Admin blast radius', text: 'platform admins use break-glass with audit; not ambient god mode' },
  { title: 'Regional pins', text: 'enterprise tenants may require data residency — route embeddings accordingly' },
  { title: 'What’s next', text: 'isolation without experiments means you ship blind' },
];

const core = [
  {
    icon: '🧱', title: 'Tenant Context', titleClass: 'card-title-cyan', subtitle: 'Always',
    description: 'Middleware sets tenant_id from the token. Downstream code forbids queries without it.',
    code: 'JWT → tenant_id\nrequire on all I/O',
  },
  {
    icon: '🗄️', title: 'RLS / Partition', titleClass: 'card-title-purple', subtitle: 'Store',
    description: 'DB policies or separate vector namespaces per tenant. Test with cross-tenant read attempts.',
    code: 'RLS on\ncross-tenant → deny',
  },
  {
    icon: '🗑️', title: 'Delete Pipeline', titleClass: 'card-title-amber', subtitle: 'Compliance',
    description: 'Cascading delete: objects → vectors → traces (or anonymize) within the promised SLA.',
    code: 'delete job\nobjects · vectors\ntraces',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Cross-Tenant Probe', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'As tenant A, request tenant B’s document id. Expect 404/403 — never a model hallucination of B’s data.',
    code: 'A → B doc\n→ 403/404',
  },
  {
    icon: '🔑', title: 'Cache Key Audit', titleClass: 'card-title-purple', subtitle: 'Check',
    description: 'List every cache key builder; confirm tenant_id is present. Fix any global keys.',
    code: 'keys include tenant',
  },
  {
    icon: '🔜', title: 'Next: Experiments', titleClass: 'card-title-amber', subtitle: 'Day 124',
    description: 'Tomorrow — A/B testing and experimentation for agents.',
    link: { href: '/agentic-day-124', label: 'Go to Day 124 →' },
  },
];

const resources = [
  {
    icon: '🪪', title: 'Internal Copilot', titleClass: 'card-title-cyan', subtitle: 'Day 119',
    description: 'ACL-before-RAG patterns that multi-tenant SaaS reuses.',
    link: { href: '/agentic-day-119', label: 'Open Day 119 →' },
  },
  {
    icon: '💳', title: 'Metering Day 122', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'Usage events are always tagged by tenant.',
    link: { href: '/agentic-day-122', label: 'Open Day 122 →' },
  },
  {
    icon: '⚖️', title: 'Governance Day 104', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Data residency and audit expectations.',
    link: { href: '/agentic-day-104', label: 'Open Day 104 →' },
  },
];

export default function AgenticDay123() {
  return (
    <StandaloneJourneyPage
      dayNumber={123}
      series="Agentic AI"
      dateLabel="Agentic AI Day 123 · 24 Dec 2026"
      prev={{ href: '/agentic-day-122', label: '← Day 122' }}
      next={{ href: '/agentic-day-124', label: 'Day 124 →' }}
      tags={['Agentic AI', 'Multi-Tenant', 'Phase 17']}
      theme="MULTI-TENANT SAAS HARDENING"
      heroIcon="🧱"
      profileRole="AGENTIC AI · SAAS"
      progressWidth="82%"
      summary={
        <>
          Day 123 hardens tenancy. Put <strong>tenant_id on every path</strong>, isolate stores and caches, and ship
          export/delete pipelines customers can trust.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#MultiTenant', '#SaaS', '#Day123', '#Isolation', '#AgenticAI']}
    />
  );
}
