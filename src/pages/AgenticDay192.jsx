import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Secrets never in prompts', text: 'inject credentials at the tool layer, not into model context' },
  { title: 'Egress allowlist', text: 'tools may reach only approved domains; block everything else' },
  { title: 'Scan outputs', text: 'redact keys, tokens, and PII before any text leaves the system' },
  { title: 'Scope tokens tight', text: 'short-lived, least-privilege credentials per tool call' },
  { title: 'Log, do not leak', text: 'traces store hashes or masked values, never raw secrets' },
  { title: 'Tomorrow: Day 193', text: 'attack the agent on purpose to find gaps' },
];

const core = [
  {
    icon: '🔑',
    title: 'Secret Broker',
    titleClass: 'card-title-cyan',
    subtitle: 'Inject',
    description: 'Tools fetch short-lived credentials from a broker; the model never sees them.',
    code: 'broker→tool\nnot prompt',
  },
  {
    icon: '🚧',
    title: 'Egress Allowlist',
    titleClass: 'card-title-purple',
    subtitle: 'Limit',
    description: 'Outbound calls hit approved domains only; unknown hosts are refused.',
    code: 'allow hosts\nelse 403',
  },
  {
    icon: '🧽',
    title: 'Output Scrubber',
    titleClass: 'card-title-amber',
    subtitle: 'Clean',
    description: 'Regex plus a classifier redact keys, tokens, and PII before responses ship.',
    code: 'mask key\nredact PII',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Exfil Probe',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Ask the agent to POST data to an unknown URL. Confirm egress control blocks it.',
    code: 'POST evil\n→ blocked',
  },
  {
    icon: '🧾',
    title: 'Leak Scan',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Plant a fake token in context and confirm it is masked in every output and trace.',
    code: 'token→***\nin logs too',
  },
  {
    icon: '🔜',
    title: 'Next: Red-Team',
    titleClass: 'card-title-amber',
    subtitle: 'Day 193',
    description: 'Tomorrow — adversarial testing.',
    link: { href: '/agentic-day-193', label: 'Go to Day 193 →' },
  },
];

const resources = [
  {
    icon: '🛡️',
    title: 'Day 191',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Injection defense that pairs with egress control.',
    link: { href: '/agentic-day-191', label: 'Open Day 191 →' },
  },
  {
    icon: '🧱',
    title: 'Day 184',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'Tenant isolation these guards extend.',
    link: { href: '/agentic-day-184', label: 'Open Day 184 →' },
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

export default function AgenticDay192() {
  return (
    <StandaloneJourneyPage
      dayNumber={192}
      series="Agentic AI"
      dateLabel="Agentic AI Day 192 · 28 Feb 2027"
      prev={{ href: '/agentic-day-191', label: '← Day 191' }}
      next={{ href: '/agentic-day-193', label: 'Day 193 →' }}
      tags={['Agentic AI', 'Security', 'Runtime']}
      theme="SECRETS & EXFILTRATION GUARDS"
      heroIcon="🔑"
      profileRole="AGENTIC AI · SECURITY"
      progressWidth="68%"
      summary={
        <>
          Day 192 stops leaks. Keep <strong>secrets out of prompts</strong>, allowlist egress, and scrub keys and PII
          from every output.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Security', '#Day192', '#Secrets', '#Exfiltration']}
    />
  );
}
