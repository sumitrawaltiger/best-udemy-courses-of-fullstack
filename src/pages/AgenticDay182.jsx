import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Policy is a node', text: 'do not sprinkle if-admin in every tool — put allow/deny in one versioned engine' },
  { title: 'Evaluate every call', text: 'role, tenant, data class, and action go in; reason + policy_v come out' },
  { title: 'Deny by default', text: 'missing rule means no, not yes' },
  { title: 'Reasons you can show', text: 'operators need a human sentence, not a silent drop' },
  { title: 'HITL as a policy outcome', text: 'some actions return “ask a human” instead of allow or deny' },
  { title: 'Test the rules', text: 'golden cases: intern cannot refund; admin can with audit' },
  { title: 'Version on every decision', text: 'traces store policy_v so you can replay last week’s allow' },
  { title: 'Tomorrow: Day 183', text: 'cost governors inside the same graph' },
];

const core = [
  {
    icon: '⚖️',
    title: 'Policy Node',
    titleClass: 'card-title-cyan',
    subtitle: 'Gate',
    description: 'One graph node sits in front of tools. Input: principal + action + resource. Output: allow | deny | hitl.',
    code: 'principal · action\n→ allow|deny|hitl',
  },
  {
    icon: '📜',
    title: 'Versioned Rules',
    titleClass: 'card-title-purple',
    subtitle: 'policy_v',
    description: 'Ship rules as a pack. Pin the version in traces so audits replay the same decision.',
    code: 'policy@v12\nlogged on every call',
  },
  {
    icon: '🗣️',
    title: 'Explain Deny',
    titleClass: 'card-title-amber',
    subtitle: 'UX',
    description: 'Return a short reason. Silent denies train users to jailbreak the prompt instead.',
    code: 'deny + reason\nuser-visible',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Refund Matrix',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'intern / lead / admin × refund. Only admin allow; lead → HITL; intern deny with reason.',
    code: '3 roles × 1 action\nallow · hitl · deny',
  },
  {
    icon: '📋',
    title: 'Golden Policy Tests',
    titleClass: 'card-title-purple',
    subtitle: 'CI',
    description: 'Ten cases in CI. A rule change that breaks a golden fails the build.',
    code: '10 goldens\nred → block',
  },
  {
    icon: '🔜',
    title: 'Next: Cost Caps',
    titleClass: 'card-title-amber',
    subtitle: 'Day 183',
    description: 'Tomorrow — token and dollar governors in the graph.',
    link: { href: '/agentic-day-183', label: 'Go to Day 183 →' },
  },
];

const resources = [
  {
    icon: '📦',
    title: 'Day 181',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Sandboxes that policy still has to permit.',
    link: { href: '/agentic-day-181', label: 'Open Day 181 →' },
  },
  {
    icon: '🔐',
    title: 'Day 143',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'RBAC and policy-as-code foundations.',
    link: { href: '/agentic-day-143', label: 'Open Day 143 →' },
  },
  {
    icon: '📘',
    title: 'NIST AI RMF',
    titleClass: 'card-title-amber',
    subtitle: 'Governance',
    description: 'Risk framing for runtime policy decisions.',
    link: { href: 'https://www.nist.gov/itl/ai-risk-management-framework', label: 'Open →', external: true },
  },
];

export default function AgenticDay182() {
  return (
    <StandaloneJourneyPage
      dayNumber={182}
      series="Agentic AI"
      dateLabel="Agentic AI Day 182 · 16 Sep 2027"
      prev={{ href: '/agentic-day-181', label: '← Day 181' }}
      next={{ href: '/agentic-day-183', label: 'Day 183 →' }}
      tags={['Agentic AI', 'Policy', 'Runtime']}
      theme="POLICY ENGINES AS GRAPH NODES"
      heroIcon="⚖️"
      profileRole="AGENTIC AI · POLICY"
      progressWidth="63%"
      summary={
        <>
          Day 182 puts <strong>policy in the graph</strong>. One versioned engine returns allow, deny, or HITL — with a
          reason you can show and a <strong>policy_v</strong> you can replay.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Policy', '#Day182', '#RBAC', '#HITL']}
    />
  );
}
