import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Tenants leak in traces', text: 'the usual bug is not SQL — it is a shared log, cache, or memory store' },
  { title: 'tenant_id on every row', text: 'runs, traces, caches, and checkpoints all carry the tenant; queries always filter' },
  { title: 'No cross-tenant cache', text: 'semantic cache keys must include tenant or you will serve Customer A’s answer to B' },
  { title: 'Queue isolation', text: 'fairness caps per tenant; poison jobs cannot stall everyone' },
  { title: 'Delete means delete', text: 'offboarding wipes runs, memory, and blobs for that tenant — with an audit row' },
  { title: 'Admin break-glass', text: 'support access is time-boxed, logged, and never the default path' },
  { title: 'Prove it', text: 'a test that tenant B cannot read tenant A’s corr_id should live in CI' },
  { title: 'Tomorrow: Day 185', text: 'runtime platform milestone for this five-day stretch' },
];

const core = [
  {
    icon: '🧱',
    title: 'Row Filter',
    titleClass: 'card-title-cyan',
    subtitle: 'Data',
    description: 'Every store query includes tenant_id. Missing filter is a failed test, not a code comment.',
    code: 'WHERE tenant_id = ?\nalways',
  },
  {
    icon: '🧊',
    title: 'Cache Key',
    titleClass: 'card-title-purple',
    subtitle: 'Memory',
    description: 'Semantic and exact caches prefix tenant. Shared embeddings still retrieve tenant-scoped chunks only.',
    code: 'tenant|hash\nno global hits',
  },
  {
    icon: '🧹',
    title: 'Offboard Job',
    titleClass: 'card-title-amber',
    subtitle: 'Rights',
    description: 'One job deletes runs, blobs, memory, and cache keys, then writes an audit event.',
    code: 'wipe · audit\nprove empty',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Cross-Tenant Probe',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Create a run as tenant A. Fetch it with tenant B’s token. Expect 404, not 403 with a body.',
    code: 'B reads A\n→ 404 empty',
  },
  {
    icon: '🧊',
    title: 'Cache Poison Test',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Same prompt, two tenants, different answers. Prove B never receives A’s cached completion.',
    code: 'same prompt\nno shared cache',
  },
  {
    icon: '🔜',
    title: 'Next: Milestone',
    titleClass: 'card-title-amber',
    subtitle: 'Day 185',
    description: 'Tomorrow — agent runtime platform milestone.',
    link: { href: '/agentic-day-185', label: 'Go to Day 185 →' },
  },
];

const resources = [
  {
    icon: '💰',
    title: 'Day 183',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Per-tenant wallets that isolation must also enforce.',
    link: { href: '/agentic-day-183', label: 'Open Day 183 →' },
  },
  {
    icon: '🧱',
    title: 'Day 123',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'Multi-tenant SaaS isolation patterns.',
    link: { href: '/agentic-day-123', label: 'Open Day 123 →' },
  },
  {
    icon: '🔐',
    title: 'Day 133',
    titleClass: 'card-title-amber',
    subtitle: 'Journal',
    description: 'Privacy controls that offboard jobs must honor.',
    link: { href: '/agentic-day-133', label: 'Open Day 133 →' },
  },
];

export default function AgenticDay184() {
  return (
    <StandaloneJourneyPage
      dayNumber={184}
      series="Agentic AI"
      dateLabel="Agentic AI Day 184 · 20 Feb 2027"
      prev={{ href: '/agentic-day-183', label: '← Day 183' }}
      next={{ href: '/agentic-day-185', label: 'Day 185 →' }}
      tags={['Agentic AI', 'Tenancy', 'Runtime']}
      theme="MULTI-TENANT AGENT RUNTIME ISOLATION"
      heroIcon="🧱"
      profileRole="AGENTIC AI · TENANCY"
      progressWidth="64%"
      summary={
        <>
          Day 184 keeps customers apart. Put <strong>tenant_id on every row and cache key</strong>, prove cross-tenant
          reads fail, and make offboarding a real delete job.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#MultiTenant', '#Day184', '#Isolation', '#Runtime']}
    />
  );
}
