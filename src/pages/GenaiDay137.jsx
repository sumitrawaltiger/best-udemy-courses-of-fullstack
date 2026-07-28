import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Data residency is design', text: 'storage, retrieval, and logs must respect region boundaries' },
  { title: 'PII handling is end-to-end', text: 'inputs, outputs, traces, and embeddings can all contain sensitive data' },
  { title: 'Tenant isolation', text: 'metadata filtering and access control must be enforced at every layer' },
  { title: 'Retention policies', text: 'set TTLs and delete schedules for prompts, traces, and documents' },
  { title: 'Auditability', text: 'capture “who/what/why” for decisions and tool actions' },
  { title: 'Compliance is ongoing', text: 'policies, reviews, and monitoring evolve with the product' },
];

const core = [
  { icon: '🌍', title: 'Residency Controls', titleClass: 'card-title-cyan', subtitle: 'Region', description: 'Ensure data stays in the required region across storage, retrieval, and telemetry.', code: 'region-bound pipelines' },
  { icon: '🏷️', title: 'Isolation by Metadata', titleClass: 'card-title-purple', subtitle: 'Tenant', description: 'Use tenant ids and access filters before retrieval and before tool calls.', code: 'tenant_id everywhere' },
  { icon: '📜', title: 'Audit Trail', titleClass: 'card-title-amber', subtitle: 'Explain', description: 'Record policy decisions, prompt versions, sources, and approvals for review.', code: 'policy_v + run_id' },
];

const practice = [
  { icon: '🧪', title: 'PII Map', titleClass: 'card-title-cyan', subtitle: 'Build', description: 'List where PII can appear in your Gen AI pipeline and how each step protects it.', code: 'input · logs · index' },
  { icon: '📋', title: 'Retention Rules', titleClass: 'card-title-purple', subtitle: 'Ops', description: 'Define retention and deletion for traces, embeddings, and raw documents.', code: 'TTL + deletion' },
  { icon: '🔜', title: 'Next: Red Team', titleClass: 'card-title-amber', subtitle: 'Day 138', description: 'Tomorrow -> red teaming and robust evaluation.', link: { href: '/genai-day-138', label: 'Go to Day 138 ->' } },
];

const resources = [
  { icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub', description: 'Browse the full Gen AI lessons and curriculum on the site.', link: { href: '/genai', label: 'Open Gen AI Track ->' } },
  { icon: '📖', title: 'OWASP LLM Top 10', titleClass: 'card-title-purple', subtitle: 'Security', description: 'A practical list of threats relevant to compliance and data protection.', link: { href: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/', label: 'Open ->', external: true } },
  { icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember', description: 'If you cannot prove isolation and retention, you do not have them.', footer: 'Design for audits.' },
];

export default function GenaiDay137() {
  return (
    <StandaloneJourneyPage
      dayNumber={137}
      dateLabel="Gen AI Day 137 · 137 Aug 2026"
      prev={{ href: '/genai-day-136', label: '← Day 136' }}
      next={{ href: '/genai-day-138', label: 'Day 138 →' }}
      tags={['Gen AI', 'Compliance', 'Day 137']}
      theme="DATA RESIDENCY, PII & TENANT ISOLATION"
      heroIcon="🌍"
      profileRole="GEN AI · COMPLIANCE"
      progressWidth="92%"
      summary="Day 137 designs for enterprise constraints: residency, PII handling, tenant isolation, retention policies, and auditability across the full Gen AI pipeline."
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#GenAI', '#Compliance', '#Day137', '#Security', '#100DaysOfCode']}
    />
  );
}

