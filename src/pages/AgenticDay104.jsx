import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Governance', text: 'who may ship prompts, which data agents may see, and how risk is accepted' },
  { title: 'Model risk', text: 'classify use cases (low/med/high); high risk needs human review and stronger evals' },
  { title: 'Data residency', text: 'know where prompts and embeddings are stored — contracts care' },
  { title: 'Auditability', text: 'immutable logs of tool calls, approvals, and model versions' },
  { title: 'Bias & harm', text: 'test for unfair outcomes; document known limitations in the product UI' },
  { title: 'Incident duty', text: 'AI incidents get the same SEV process as Day 59 — plus model-specific mitigations' },
  { title: 'Vendor diligence', text: 'DPAs, subprocessors, retention — treat LLM vendors like any critical SaaS' },
  { title: 'Policy as code', text: 'encode allow/deny in the agent runtime, not only in a PDF handbook' },
];

const core = [
  {
    icon: '⚖️', title: 'Risk Tiers', titleClass: 'card-title-cyan', subtitle: 'Classify',
    description: 'Map each agent feature to low/med/high risk. High risk: HITL, stricter eval, limited rollout.',
    code: 'feature → tier\nhigh → HITL + eval',
  },
  {
    icon: '📜', title: 'Audit Pack', titleClass: 'card-title-purple', subtitle: 'Evidence',
    description: 'Retain traces, versions, approver id, and data sources for the retention window you promised.',
    code: 'trace · version\napprover · source',
  },
  {
    icon: '🧱', title: 'Policy Runtime', titleClass: 'card-title-amber', subtitle: 'Enforce',
    description: 'Deny tools/data by default; grant by role. Product copy cannot override the policy engine.',
    code: 'deny by default\ngrant by role',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Risk Register', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'List your top 5 agent features with risk tier, owner, and required controls.',
    code: 'feature · tier\nowner · controls',
  },
  {
    icon: '📕', title: 'AI Incident Addendum', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Extend your Day 59 runbook with: bad model output at scale, data leak via prompt, vendor outage.',
    code: '3 AI scenarios\n→ mitigate steps',
  },
  {
    icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-amber', subtitle: 'Day 105',
    description: 'Tomorrow — domain specialist agents portfolio milestone.',
    link: { href: '/agentic-day-105', label: 'Go to Day 105 →' },
  },
];

const resources = [
  {
    icon: '🛡️', title: 'OWASP LLM', titleClass: 'card-title-cyan', subtitle: 'Security',
    description: 'Top risks for LLM apps — governance checklist fuel.',
    link: { href: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/', label: 'Open OWASP LLM →', external: true },
  },
  {
    icon: '🚨', title: 'Incidents Day', titleClass: 'card-title-purple', subtitle: 'Day 59',
    description: 'SEV triage that governance incidents reuse.',
    link: { href: '/agentic-day-59', label: 'Open Day 59 →' },
  },
  {
    icon: '🏭', title: 'LLMOps Day 61', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Versioning and promote stages — part of governed change control.',
    link: { href: '/agentic-day-61', label: 'Open Day 61 →' },
  },
];

export default function AgenticDay104() {
  return (
    <StandaloneJourneyPage
      dayNumber={104}
      series="Agentic AI"
      dateLabel="Agentic AI Day 104 · 2 Dec 2026"
      prev={{ href: '/agentic-day-103', label: '← Day 103' }}
      next={{ href: '/agentic-day-105', label: 'Day 105 →' }}
      tags={['Gen AI', 'Governance', 'Phase 15']}
      theme="RESPONSIBLE AI & AGENT GOVERNANCE"
      heroIcon="⚖️"
      profileRole="GEN AI · GOVERNANCE"
      progressWidth="69%"
      summary={
        <>
          Day 104 makes agents accountable. Define <strong>risk tiers</strong>, audit packs, and{' '}
          <strong>policy-as-code</strong> so autonomy stays inside the rules.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#ResponsibleAI', '#Governance', '#Day104', '#AgenticAI', '#Trust']}
    />
  );
}
