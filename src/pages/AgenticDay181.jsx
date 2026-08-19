import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Tools are the blast radius', text: 'the model can talk all day; damage starts when a tool writes, pays, or emails' },
  { title: 'Sandbox by default', text: 'run code and shell tools in a jail with no secrets and a tight network allowlist' },
  { title: 'Least privilege', text: 'each tool gets the smallest token and the smallest arg schema — not the god key' },
  { title: 'Dry-run first', text: 'dangerous tools should support a preview mode that returns the planned diff' },
  { title: 'Time and CPU caps', text: 'runaway scripts need wall-clock and memory limits just like max_steps' },
  { title: 'Audit the args', text: 'log tool name, args hash, and outcome — never skip this on writes' },
  { title: 'Fail closed', text: 'unknown tool, extra field, or missing sandbox → deny, do not guess' },
  { title: 'Tomorrow: Day 182', text: 'policy engines as first-class graph nodes' },
];

const core = [
  {
    icon: '📦',
    title: 'Sandbox',
    titleClass: 'card-title-cyan',
    subtitle: 'Isolate',
    description: 'Code/shell tools run in a container or WASM jail. No host FS, no env secrets, allowlisted egress only.',
    code: 'jail + allowlist\nno secrets in env',
  },
  {
    icon: '🔑',
    title: 'Scoped Creds',
    titleClass: 'card-title-purple',
    subtitle: 'Least',
    description: 'Per-tool tokens with arg schemas. Over-broad keys fail closed in review.',
    code: 'tool → token\nschema · deny extra',
  },
  {
    icon: '👁️',
    title: 'Dry-Run',
    titleClass: 'card-title-amber',
    subtitle: 'Preview',
    description: 'Writes return a plan first. HITL or policy must flip dry_run=false.',
    code: 'preview diff\nthen commit',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Jail a Script',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Run a mock “eval python” tool in a sandbox. Prove it cannot read process.env.API_KEY.',
    code: 'sandbox · no env\nassert denied',
  },
  {
    icon: '🔍',
    title: 'Schema Strip',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Add an extra JSON field to a tool call. The gateway must reject it.',
    code: 'unknown field\n→ 400 deny',
  },
  {
    icon: '🔜',
    title: 'Next: Policy Node',
    titleClass: 'card-title-amber',
    subtitle: 'Day 182',
    description: 'Tomorrow — policy engines as graph nodes, not afterthoughts.',
    link: { href: '/agentic-day-182', label: 'Go to Day 182 →' },
  },
];

const resources = [
  {
    icon: '🏁',
    title: 'Day 180',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Orchestration milestone this runtime layer sits on.',
    link: { href: '/agentic-day-180', label: 'Open Day 180 →' },
  },
  {
    icon: '🛡️',
    title: 'Day 139',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'Allowlists and least privilege for tools.',
    link: { href: '/agentic-day-139', label: 'Open Day 139 →' },
  },
  {
    icon: '📘',
    title: 'OWASP LLM Top 10',
    titleClass: 'card-title-amber',
    subtitle: 'Security',
    description: 'Plugin and tool-abuse risks that sandboxes cut down.',
    link: { href: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/', label: 'Open →', external: true },
  },
];

export default function AgenticDay181() {
  return (
    <StandaloneJourneyPage
      dayNumber={181}
      series="Agentic AI"
      dateLabel="Agentic AI Day 181 · 17 Feb 2027"
      prev={{ href: '/agentic-day-180', label: '← Day 180' }}
      next={{ href: '/agentic-day-182', label: 'Day 182 →' }}
      tags={['Agentic AI', 'Runtime', 'Sandbox']}
      theme="TOOL SANDBOXES & LEAST PRIVILEGE"
      heroIcon="📦"
      profileRole="AGENTIC AI · RUNTIME"
      progressWidth="62%"
      summary={
        <>
          Day 181 hardens tools. Run side effects in a <strong>sandbox</strong>, scope credentials, and <strong>dry-run</strong>
          writes before they hit the world.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Sandbox', '#Day181', '#LeastPrivilege', '#Tools']}
    />
  );
}
