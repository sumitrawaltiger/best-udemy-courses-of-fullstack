import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Roles bound tools', text: 'who can trigger which actions is explicit and enforced at runtime' },
  { title: 'Policy-as-code', text: 'versioned allow/deny rules with reasons — not tribal knowledge' },
  { title: 'Deny by default', text: 'open capabilities deliberately' },
  { title: 'HITL for blast radius', text: 'irreversible and expensive actions pause for approval' },
  { title: 'Audit decisions', text: 'log policy version, decision, and actor for every gated call' },
  { title: 'Tenant walls', text: 'RBAC never crosses customer boundaries' },
  { title: 'What’s next', text: 'access control needs compliance evidence packs for audits' },
];

const core = [
  {
    icon: '🔐', title: 'Role → Tools', titleClass: 'card-title-cyan', subtitle: 'RBAC',
    description: 'Map roles to allowed tools and arg constraints.',
    code: 'role → tools\nconstraints',
  },
  {
    icon: '🛡️', title: 'Policy Engine', titleClass: 'card-title-purple', subtitle: 'Runtime',
    description: 'Central allow/deny with versioned rules and clear deny reasons.',
    code: 'policy_v + reason',
  },
  {
    icon: '🙋', title: 'Approval Queue', titleClass: 'card-title-amber', subtitle: 'HITL',
    description: 'Destructive actions wait for a human with a diff of the planned change.',
    code: 'approve → execute',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Permission Matrix', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Build a roles×tools matrix for support vs admin vs auditor.',
    code: 'matrix v1',
  },
  {
    icon: '📋', title: 'Audit Sample', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Review 20 runs; confirm policy version and decisions are logged.',
    code: 'audit 20',
  },
  {
    icon: '🔜', title: 'Next: Compliance', titleClass: 'card-title-amber', subtitle: 'Day 144',
    description: 'Tomorrow — compliance and audit evidence.',
    link: { href: '/agentic-day-144', label: 'Go to Day 144 →' },
  },
];

const resources = [
  {
    icon: '✅', title: 'Day 142', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Verification before privileged writes.',
    link: { href: '/agentic-day-142', label: 'Open Day 142 →' },
  },
  {
    icon: '🛡️', title: 'Day 139', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'Security hardening patterns.',
    link: { href: '/agentic-day-139', label: 'Open Day 139 →' },
  },
  {
    icon: '⚖️', title: 'Day 104', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Governance risk tiers.',
    link: { href: '/agentic-day-104', label: 'Open Day 104 →' },
  },
];

export default function AgenticDay143() {
  return (
    <StandaloneJourneyPage
      dayNumber={143}
      series="Agentic AI"
      dateLabel="Agentic AI Day 143 · 8 Aug 2027"
      prev={{ href: '/agentic-day-142', label: '← Day 142' }}
      next={{ href: '/agentic-day-144', label: 'Day 144 →' }}
      tags={['Agentic AI', 'RBAC', 'Phase 19a']}
      theme="RBAC & POLICY-AS-CODE"
      heroIcon="🔐"
      profileRole="AGENTIC AI · ACCESS"
      progressWidth="93%"
      summary={
        <>
          Day 143 bounds autonomy. <strong>RBAC + policy-as-code</strong>, deny-by-default, and HITL for irreversible actions.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#RBAC', '#PolicyAsCode', '#Day143', '#Security', '#AgenticAI']}
    />
  );
}
