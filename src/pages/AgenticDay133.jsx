import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Privacy by design', text: 'minimize what leaves the device; tokenize PII before any cloud hop' },
  { title: 'PII vault', text: 'store raw identifiers in a vault; agents see opaque tokens in prompts' },
  { title: 'Redaction layers', text: 'input filter → model → output filter; defense in depth' },
  { title: 'On-device preference', text: 'default local for health, finance, and HR-like content' },
  { title: 'Purpose binding', text: 'data collected for support is not free to use for marketing agents' },
  { title: 'Trace hygiene', text: 'traces store hashes or redacted text; raw payloads need stricter retention' },
  { title: 'User controls', text: 'export, delete, and “clear memory” must work across edge and cloud copies' },
  { title: 'What’s next', text: 'privacy is easier to trust when you can eval without real customer data' },
];

const core = [
  {
    icon: '🔐', title: 'Tokenize PII', titleClass: 'card-title-cyan', subtitle: 'Vault',
    description: 'Replace emails/IDs with tokens before prompt build. Detokenize only in trusted UI after policy check.',
    code: 'PII → token\nprompt uses token\nUI detokenizes',
  },
  {
    icon: '🧹', title: 'Redact I/O', titleClass: 'card-title-purple', subtitle: 'Filters',
    description: 'Scan inbound and outbound for secrets and regulated fields. Block or mask before log/model.',
    code: 'in → redact\nout → redact\nthen log',
  },
  {
    icon: '🎚️', title: 'Privacy Mode', titleClass: 'card-title-amber', subtitle: 'Control',
    description: 'User toggle: local-only. Disables cloud tools and sync of message bodies.',
    code: 'privacy_mode=on\n→ local only',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Vault Round-Trip', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Pipe a message with an email through tokenize → fake LLM → detokenize. Prove the model never saw the email.',
    code: 'token in prompt\nraw only in UI',
  },
  {
    icon: '🗑️', title: 'Clear Memory', titleClass: 'card-title-purple', subtitle: 'Rights',
    description: 'Implement clear that wipes local DB and enqueues cloud delete for that user.',
    code: 'wipe local\n→ cloud delete job',
  },
  {
    icon: '🔜', title: 'Next: Synthetic Eval', titleClass: 'card-title-amber', subtitle: 'Day 134',
    description: 'Tomorrow — synthetic data and simulation for agent eval.',
    link: { href: '/agentic-day-134', label: 'Go to Day 134 →' },
  },
];

const resources = [
  {
    icon: '⚖️', title: 'Governance Day 104', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Risk tiers and audit packs privacy controls support.',
    link: { href: '/agentic-day-104', label: 'Open Day 104 →' },
  },
  {
    icon: '🧱', title: 'Multi-Tenant Day', titleClass: 'card-title-purple', subtitle: 'Day 123',
    description: 'Isolation and delete pipelines.',
    link: { href: '/agentic-day-123', label: 'Open Day 123 →' },
  },
  {
    icon: '📬', title: 'Sync Day 132', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'What you sync is what you can leak — minimize payloads.',
    link: { href: '/agentic-day-132', label: 'Open Day 132 →' },
  },
];

export default function AgenticDay133() {
  return (
    <StandaloneJourneyPage
      dayNumber={133}
      series="Agentic AI"
      dateLabel="Agentic AI Day 133 · 3 Jan 2027"
      prev={{ href: '/agentic-day-132', label: '← Day 132' }}
      next={{ href: '/agentic-day-134', label: 'Day 134 →' }}
      tags={['Agentic AI', 'Privacy', 'Phase 18']}
      theme="PRIVACY-PRESERVING AGENT PATTERNS"
      heroIcon="🔐"
      profileRole="AGENTIC AI · PRIVACY"
      progressWidth="89%"
      summary={
        <>
          Day 133 protects people. <strong>Tokenize PII</strong>, redact I/O, and offer a real local-only privacy mode
          before data ever hits the cloud.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Privacy', '#PII', '#Day133', '#EdgeAI', '#AgenticAI']}
    />
  );
}
