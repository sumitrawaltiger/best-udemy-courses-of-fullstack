import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Tools are attack surface', text: 'tool calls are where agents can do real damage' },
  { title: 'Schemas are safety', text: 'strict JSON schemas and allowlists reduce ambiguity' },
  { title: 'Sandbox first', text: 'prefer dry-run and preview modes for side effects' },
  { title: 'Idempotency keys', text: 'retries must not duplicate writes or payments' },
  { title: 'Least privilege', text: 'tools should only have the permissions they need' },
  { title: 'Time limits', text: 'cap each tool call and the whole run budget' },
  { title: 'Audit trail', text: 'log arguments and outcomes for every action' },
  { title: 'Tomorrow: Day 157', text: 'memory: what to store, what to forget, and how to scope' },
];

const core = [
  {
    icon: '🧰',
    title: 'Tool Contracts',
    titleClass: 'card-title-cyan',
    subtitle: 'Strict',
    description: 'Use typed schemas for tool inputs/outputs and reject unknown fields.',
    code: 'schema -> validate',
  },
  {
    icon: '🧪',
    title: 'Sandbox & Preview',
    titleClass: 'card-title-purple',
    subtitle: 'Safe',
    description: 'Add dry-run/preview modes so the agent can show what it would do before doing it.',
    code: 'preview -> approve -> execute',
  },
  {
    icon: '🔐',
    title: 'Least Privilege',
    titleClass: 'card-title-amber',
    subtitle: 'Control',
    description: 'Scope tools by role, tenant, and environment. Deny-by-default capabilities.',
    code: 'RBAC + allowlists',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Add Dry-Run',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Implement a preview mode for one tool and require explicit approval to execute.',
    code: 'dry_run: true',
  },
  {
    icon: '📋',
    title: 'Idempotency Key',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Add an idempotency key to one write tool and make retries safe.',
    code: 'idempotency_key',
  },
  {
    icon: '🔜',
    title: 'Next: Memory',
    titleClass: 'card-title-amber',
    subtitle: 'Day 157 · 18 Jan 2027',
    description: 'Tomorrow — memory scope, retention, and safe retrieval.',
    link: { href: '/agentic-day-157', label: 'Go to Day 157 →' },
  },
];

const resources = [
  {
    icon: '📖',
    title: 'MITRE ATLAS',
    titleClass: 'card-title-cyan',
    subtitle: 'Threats',
    description: 'Adversarial tactics and techniques for AI systems.',
    link: { href: 'https://atlas.mitre.org/', label: 'Open →', external: true },
  },
  {
    icon: '🛡️',
    title: 'OWASP ASVS',
    titleClass: 'card-title-purple',
    subtitle: 'Security',
    description: 'A baseline checklist mindset that maps well to tool safety.',
    link: { href: 'https://owasp.org/www-project-application-security-verification-standard/', label: 'Open →', external: true },
  },
  {
    icon: '🗺️',
    title: 'Day 139',
    titleClass: 'card-title-amber',
    subtitle: 'RBAC',
    description: 'Policies and access control patterns for agent autonomy.',
    link: { href: '/agentic-day-139', label: 'Open Day 139 →' },
  },
];

export default function AgenticDay156() {
  return (
    <StandaloneJourneyPage
      dayNumber={156}
      series="Agentic AI"
      dateLabel="Agentic AI Day 156 · 30 Jan 2027"
      prev={{ href: '/agentic-day-155', label: '← Day 155' }}
      next={{ href: '/agentic-day-157', label: 'Day 157 →' }}
      tags={['Agentic AI', 'Tools', 'Security']}
      theme="TOOL CONTRACTS, SANDBOXING & SAFE EXECUTION"
      heroIcon="🧰"
      profileRole="AGENTIC AI · SECURITY"
      progressWidth="52%"
      summary={
        <>
          Day 156 hardens the dangerous part: tools. Use strict schemas, preview modes, least privilege, and
          idempotency so actions stay safe under retries.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Tools', '#Day156', '#Security', '#Sandbox']}
    />
  );
}

