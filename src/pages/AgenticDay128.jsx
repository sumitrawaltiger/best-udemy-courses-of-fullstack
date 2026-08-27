import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Governance scales differently', text: 'one policy engine now covers many domains, tenants, and agent-to-agent actions at once' },
  { title: 'Policy as code', text: 'centralize allow/deny rules so no individual domain agent can quietly bypass them' },
  { title: 'Regulatory awareness', text: 'GDPR, SOC 2, and industry rules shape what an agent can log, store, or automate' },
  { title: 'Data residency', text: 'some tenants require their data — and agent traces — to stay inside a specific region' },
  { title: 'Right to explanation', text: 'a user can reasonably ask why an agent decided something — keep that answerable from traces' },
  { title: 'Vendor risk', text: 'every third-party model or tool an agent calls becomes part of your compliance surface' },
  { title: 'Incident response at scale', text: 'one runbook template, parameterized per domain — not ten different ones to maintain' },
  { title: 'What\'s next', text: 'turning a compliant, well-run platform into an actual business with real pricing' },
];

const core = [
  {
    icon: '🛡️', title: 'Centralized Policy Engine', titleClass: 'card-title-cyan', subtitle: 'One Source Of Truth',
    description: 'Every domain agent checks the same policy engine before acting — no agent gets its own private rulebook.',
    code: 'if not policy.allows(agent, action): deny(action)',
  },
  {
    icon: '📜', title: 'Regulatory Awareness', titleClass: 'card-title-purple', subtitle: 'GDPR / SOC 2',
    description: 'What an agent can log, retain, or automate is shaped by regulation, not just engineering convenience.',
  },
  {
    icon: '🔍', title: 'Explainability From Traces', titleClass: 'card-title-amber', subtitle: 'Answer "Why?"',
    description: 'Every agent decision should be reconstructable from its trace — inputs, tool calls, and the final reasoning step.',
    code: 'trace.explain(decision_id) → inputs, tools, rationale',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Write One Policy Rule', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Add one centrally-enforced rule — e.g. "no agent may email outside the company domain" — and test it blocks correctly.',
    code: 'policy.deny(action="email", condition="external_domain")',
  },
  {
    icon: '📕', title: 'Draft an Incident Runbook Template', titleClass: 'card-title-purple', subtitle: 'Practice',
    description: 'Write one runbook template with placeholders for domain-specific symptoms, dashboards, and rollback steps.',
  },
  {
    icon: '🔜', title: 'Next: Customer Success', titleClass: 'card-title-amber', subtitle: 'Day 129 Preview',
    description: 'Tomorrow — time-to-first-value, onboarding playbooks, and catching churn early.',
    link: { href: '/agentic-day-129', label: 'Go to Day 129 →' },
  },
];

const resources = [
  {
    icon: '🔐', title: 'AI Security & Compliance', titleClass: 'card-title-cyan', subtitle: 'Day 69',
    description: 'The security and audit-log discipline from Day 69, now centralized across an entire platform.',
    link: { href: '/agentic-day-69', label: 'Open Day 69 →' },
  },
  {
    icon: '🛡️', title: 'Guardrails & AI Safety', titleClass: 'card-title-purple', subtitle: 'Day 52',
    description: 'The original safety patterns this platform-wide policy engine now enforces for every domain.',
    link: { href: '/agentic-day-52', label: 'Open Day 52 →' },
  },
  {
    icon: '🏭', title: 'LLMOps Foundations', titleClass: 'card-title-amber', subtitle: 'Day 61',
    description: 'Versioning and ownership from Day 61 underpin who can ship a policy change and how it\'s tracked.',
    link: { href: '/agentic-day-61', label: 'Open Day 61 →' },
  },
];

export default function AgenticDay128() {
  return (
    <StandaloneJourneyPage
      dayNumber={128}
      series="Agentic AI"
      dateLabel="Agentic AI Day 128 · 2 Jan 2027"
      prev={{ href: '/agentic-day-127', label: '← Day 127' }}
      next={{ href: '/agentic-day-129', label: 'Day 129 →' }}
      tags={['Agentic AI', 'Governance', 'Phase 17']}
      theme="AGENT GOVERNANCE & COMPLIANCE AT SCALE"
      heroIcon="⚖️"
      profileRole="AGENTIC AI · GOVERNANCE"
      progressWidth="85%"
      summary={
        <>
          Day 128 keeps a growing platform trustworthy. A <strong>centralized policy engine</strong>,{' '}
          <strong>regulatory awareness</strong> baked in from the start, and <strong>explainability</strong>{' '}
          that can answer "why did the agent do that?" from a trace alone.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#AIGovernance', '#Day128', '#Compliance', '#100DaysOfCode']}
    />
  );
}
