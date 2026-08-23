import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Arc 191–195', text: 'injection defense → secrets guards → red-team → guardrails → security milestone' },
  { title: 'Data is not instructions', text: 'treat tool output and fetched pages as untrusted data, never as commands' },
  { title: 'Allowlist tools', text: 'the model may only call a fixed, reviewed set of tools with typed args' },
  { title: 'Quote the untrusted', text: 'wrap external text in delimiters and mark it as reference only' },
  { title: 'Least privilege', text: 'each tool gets the narrowest scope that still does the job' },
  { title: 'Tomorrow: Day 192', text: 'stop secrets and data from leaking out' },
];

const core = [
  {
    icon: '🛡️',
    title: 'Trust Boundary',
    titleClass: 'card-title-cyan',
    subtitle: 'Split',
    description: 'Separate system instructions from untrusted data so fetched content can never add new rules.',
    code: 'sys | data\nno cross',
  },
  {
    icon: '✅',
    title: 'Tool Allowlist',
    titleClass: 'card-title-purple',
    subtitle: 'Limit',
    description: 'Only registered tools with typed, validated args are callable. Unknown calls are rejected.',
    code: 'allow: [a,b]\nelse deny',
  },
  {
    icon: '🧷',
    title: 'Delimit Input',
    titleClass: 'card-title-amber',
    subtitle: 'Wrap',
    description: 'Fence external text and label it reference-only so instructions inside are ignored.',
    code: '<data>…</data>\nignore cmds',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Injection Lab',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Feed a page that tells the agent to ignore its rules and email data. Confirm it refuses.',
    code: 'inject→refuse\nlog attempt',
  },
  {
    icon: '🧱',
    title: 'Arg Validation',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Reject a tool call with an extra or malformed arg before it runs.',
    code: 'bad arg\n→ block',
  },
  {
    icon: '🔜',
    title: 'Next: Secrets',
    titleClass: 'card-title-amber',
    subtitle: 'Day 192',
    description: 'Tomorrow — secrets and exfiltration guards.',
    link: { href: '/agentic-day-192', label: 'Go to Day 192 →' },
  },
];

const resources = [
  {
    icon: '🏁',
    title: 'Day 190',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior Milestone',
    description: 'Reliability platform this security layer builds on.',
    link: { href: '/agentic-day-190', label: 'Open Day 190 →' },
  },
  {
    icon: '🧱',
    title: 'Day 181',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'Tool sandboxes that enforce these limits.',
    link: { href: '/agentic-day-181', label: 'Open Day 181 →' },
  },
  {
    icon: '📘',
    title: 'Python Track',
    titleClass: 'card-title-amber',
    subtitle: 'Hub',
    description: 'Full Gen AI + Agentic curriculum.',
    link: { href: '/python', label: 'Open Python track →' },
  },
];

export default function AgenticDay191() {
  return (
    <StandaloneJourneyPage
      dayNumber={191}
      series="Agentic AI"
      dateLabel="Agentic AI Day 191 · 2 Mar 2027"
      prev={{ href: '/agentic-day-190', label: '← Day 190' }}
      next={{ href: '/agentic-day-192', label: 'Day 192 →' }}
      tags={['Agentic AI', 'Security', 'Runtime']}
      theme="PROMPT INJECTION DEFENSE"
      heroIcon="🛡️"
      profileRole="AGENTIC AI · SECURITY"
      progressWidth="67%"
      summary={
        <>
          Day 191 hardens the front door. Keep <strong>untrusted data out of the instruction channel</strong>, allowlist
          tools, and validate every arg.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Security', '#Day191', '#PromptInjection', '#Guardrails']}
    />
  );
}
