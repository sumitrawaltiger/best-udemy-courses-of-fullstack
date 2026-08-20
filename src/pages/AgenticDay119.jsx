import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Internal copilots', text: 'help employees with IT, HR, and ops — scoped to what their role can see' },
  { title: 'Identity first', text: 'SSO user id drives ACL before any retrieval or tool call' },
  { title: 'Least privilege tools', text: 'reset-password for IT only; expense submit for all — role maps to tool allowlists' },
  { title: 'Ticket creation', text: 'agents open Jira/ServiceNow with templates; humans still own priority fights' },
  { title: 'Secret sprawl', text: 'never paste VPN configs or API keys into chat logs' },
  { title: 'Change windows', text: 'production changes only in approved windows with extra HITL' },
  { title: 'Employee trust', text: 'show data sources (“from HR wiki p.4”) so people can verify' },
  { title: 'What’s next', text: 'platformize multiple domain agents behind one gateway' },
];

const core = [
  {
    icon: '🪪', title: 'ACL Before RAG', titleClass: 'card-title-cyan', subtitle: 'Security',
    description: 'Filter the corpus by user groups first. Retrieval never sees documents the user cannot open.',
    code: 'authz → filter corpus\n→ then retrieve',
  },
  {
    icon: '🛠️', title: 'Role → Tools', titleClass: 'card-title-purple', subtitle: 'Map',
    description: 'Config table: role → allowed tools. Deny by default; grant explicitly.',
    code: 'role → allowlist\ndeny default',
  },
  {
    icon: '🎫', title: 'Open a Ticket', titleClass: 'card-title-amber', subtitle: 'Action',
    description: 'When the agent cannot solve, create a ticket with summary, attempts, and user context.',
    code: 'fail → ticket\n+ context pack',
  },
];

const practice = [
  {
    icon: '🧪', title: 'VPN How-To Bot', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Answer VPN setup from an internal doc. Block answers if the user lacks the “employee” group.',
    code: 'ACL check\n→ cite wiki',
  },
  {
    icon: '🔐', title: 'Privilege Test', titleClass: 'card-title-purple', subtitle: 'Safety',
    description: 'As a normal employee, attempt an admin-only tool; confirm hard deny before the LLM runs.',
    code: 'admin tool → deny',
  },
  {
    icon: '🔜', title: 'Next: Platform', titleClass: 'card-title-amber', subtitle: 'Day 120',
    description: 'Tomorrow — multi-domain agent platform milestone.',
    link: { href: '/agentic-day-120', label: 'Go to Day 120 →' },
  },
];

const resources = [
  {
    icon: '⚖️', title: 'Governance Day', titleClass: 'card-title-cyan', subtitle: 'Day 104',
    description: 'Risk tiers and policy-as-code for internal tools.',
    link: { href: '/agentic-day-104', label: 'Open Day 104 →' },
  },
  {
    icon: '🎫', title: 'Support Day 116', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'Ticket loops that internal IT copilots reuse.',
    link: { href: '/agentic-day-116', label: 'Open Day 116 →' },
  },
  {
    icon: '🏢', title: 'Enterprise Day 98', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'SSO and system integration patterns.',
    link: { href: '/agentic-day-98', label: 'Open Day 98 →' },
  },
];

export default function AgenticDay119() {
  return (
    <StandaloneJourneyPage
      dayNumber={119}
      series="Agentic AI"
      dateLabel="Agentic AI Day 119 · 18 Dec 2026"
      prev={{ href: '/agentic-day-118', label: '← Day 118' }}
      next={{ href: '/agentic-day-120', label: 'Day 120 →' }}
      tags={['Agentic AI', 'Internal', 'Phase 16']}
      theme="INTERNAL COPILOT & IT AGENTS"
      heroIcon="🪪"
      profileRole="AGENTIC AI · INTERNAL"
      progressWidth="79%"
      summary={
        <>
          Day 119 builds employee copilots. Enforce <strong>ACL before RAG</strong>, map roles to tools, and open tickets
          when the agent should stop.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#InternalCopilot', '#ITAgents', '#Day119', '#ACL', '#AgenticAI']}
    />
  );
}
