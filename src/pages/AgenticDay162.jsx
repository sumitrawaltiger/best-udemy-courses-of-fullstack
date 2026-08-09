import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Tool choice is a policy problem', text: 'what the agent is allowed to call matters more than what it can imagine' },
  { title: 'Capability allowlists', text: 'define allowed tools per role and per tenant' },
  { title: 'Constraint-driven planning', text: 'plan with the tools you actually have, not tools you wish you had' },
  { title: 'Prefer read before write', text: 'gather context and verify state before side effects' },
  { title: 'Tool reliability scores', text: 'route away from flaky tools and degrade gracefully' },
  { title: 'Time budgets per tool', text: 'cap each call so a single tool cannot stall the run' },
  { title: 'Observability', text: 'log tool selection and why a tool was chosen' },
  { title: 'Tomorrow: Day 163', text: 'durable state and long-running workflows' },
];

const core = [
  {
    icon: '🧰',
    title: 'Capabilities',
    titleClass: 'card-title-cyan',
    subtitle: 'Allowlist',
    description: 'Define which tools exist and which are allowed in which context.',
    code: 'role -> tools\nenv -> tools',
  },
  {
    icon: '🧭',
    title: 'Constraint Planning',
    titleClass: 'card-title-purple',
    subtitle: 'Realistic',
    description: 'The planner must plan only with allowed tools and bounded budgets.',
    code: 'allowed_tools\n+ budgets',
  },
  {
    icon: '📊',
    title: 'Tool Health',
    titleClass: 'card-title-amber',
    subtitle: 'Ops',
    description: 'Track latency, error rate, and success per tool to inform routing and fallbacks.',
    code: 'p95 · error% · ok%',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Build an Allowlist',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Create an allowlist per worker role and enforce it before tool execution.',
    code: 'deny by default',
  },
  {
    icon: '📋',
    title: 'Tool Selection Log',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Log tool_name, reason, and budget for each tool call.',
    code: 'tool + reason + budget',
  },
  {
    icon: '🔜',
    title: 'Next: Durable Runs',
    titleClass: 'card-title-amber',
    subtitle: 'Day 163 · 13 Jan 2027',
    description: 'Tomorrow — durable state and long-running agent workflows.',
    link: { href: '/agentic-day-163', label: 'Go to Day 163 →' },
  },
];

const resources = [
  {
    icon: '🛡️',
    title: 'OWASP ASVS',
    titleClass: 'card-title-cyan',
    subtitle: 'Baseline',
    description: 'Security verification mindset for tool capability design.',
    link: { href: 'https://owasp.org/www-project-application-security-verification-standard/', label: 'Open →', external: true },
  },
  {
    icon: '📖',
    title: 'AWS Retry Guidance',
    titleClass: 'card-title-purple',
    subtitle: 'Reliability',
    description: 'Backoff patterns useful when tools fail transiently.',
    link: { href: 'https://docs.aws.amazon.com/general/latest/gr/api-retries.html', label: 'Open →', external: true },
  },
  {
    icon: '🗺️',
    title: 'Day 160',
    titleClass: 'card-title-amber',
    subtitle: 'Routing',
    description: 'Dispatch patterns that depend on capability constraints.',
    link: { href: '/agentic-day-160', label: 'Open Day 160 →' },
  },
];

export default function AgenticDay162() {
  return (
    <StandaloneJourneyPage
      dayNumber={162}
      series="Agentic AI"
      dateLabel="Agentic AI Day 162 · 19 Jan 2027"
      prev={{ href: '/agentic-day-161', label: '← Day 161' }}
      next={{ href: '/agentic-day-163', label: 'Day 163 →' }}
      tags={['Agentic AI', 'Tools', 'Policies']}
      theme="TOOL SELECTION UNDER CONSTRAINTS"
      heroIcon="🧰"
      profileRole="AGENTIC AI · TOOLS"
      progressWidth="54%"
      summary={
        <>
          Day 162 makes tool choice explicit: capability allowlists, constraint-driven planning, and tool health metrics
          so routing stays safe and predictable in production.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Tools', '#Day162', '#Policies', '#Allowlist']}
    />
  );
}

