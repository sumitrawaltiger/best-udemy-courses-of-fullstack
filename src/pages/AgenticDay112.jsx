import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Systems of record', text: 'CRM and ticketing own truth — agents read/write through APIs, not copies' },
  { title: 'Idempotent writes', text: 'retries must not create duplicate tickets or notes' },
  { title: 'Webhooks in', text: 'events start agent runs; don’t poll forever without backoff' },
  { title: 'Scoped tokens', text: 'least privilege per tool: read cases, write notes, never god keys' },
  { title: 'Schema contracts', text: 'validate ticket payloads before the planner sees them' },
  { title: 'Failure modes', text: 'CRM down → queue locally and degrade honestly' },
  { title: 'What’s next', text: 'integrations without routing rules create chaos queues' },
];

const core = [
  {
    icon: '🔌', title: 'Tool Wrappers', titleClass: 'card-title-cyan', subtitle: 'APIs',
    description: 'Wrap CRM/ticket APIs as typed tools with schemas and idempotency keys.',
    code: 'create_note(key)\nupdate_status',
  },
  {
    icon: '📨', title: 'Webhook Ingress', titleClass: 'card-title-purple', subtitle: 'Events',
    description: 'Verify signatures, enqueue work, ack fast — process async.',
    code: 'verify → queue\nack',
  },
  {
    icon: '🔐', title: 'Scoped Creds', titleClass: 'card-title-amber', subtitle: 'Security',
    description: 'Per-tool tokens. Agents never see raw admin credentials.',
    code: 'scoped token\nper tool',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Idempotent Note', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Post the same note twice with one key. Prove only one CRM note exists.',
    code: 'key → 1 note',
  },
  {
    icon: '🧨', title: 'CRM Down Drill', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Simulate 503s. Agent queues and tells the user a human will follow up.',
    code: '503 → queue\n+ message',
  },
  {
    icon: '🔜', title: 'Next: Routing & SLA', titleClass: 'card-title-amber', subtitle: 'Day 113',
    description: 'Tomorrow — routing, SLA, and escalation rules.',
    link: { href: '/agentic-day-113', label: 'Go to Day 113 →' },
  },
];

const resources = [
  {
    icon: '💬', title: 'Day 111', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Channels that feed these integrations.',
    link: { href: '/agentic-day-111', label: 'Open Day 111 →' },
  },
  {
    icon: '🏗️', title: 'Day 53', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'Idempotent production patterns.',
    link: { href: '/agentic-day-53', label: 'Open Day 53 →' },
  },
  {
    icon: '🛡️', title: 'Day 139', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Allowlists and least privilege.',
    link: { href: '/agentic-day-139', label: 'Open Day 139 →' },
  },
];

export default function AgenticDay112() {
  return (
    <StandaloneJourneyPage
      dayNumber={112}
      series="Agentic AI"
      dateLabel="Agentic AI Day 112 · 20 Nov 2026"
      prev={{ href: '/agentic-day-111', label: '← Day 111' }}
      next={{ href: '/agentic-day-113', label: 'Day 113 →' }}
      tags={['Agentic AI', 'Integrations', 'Phase 16a']}
      theme="CRM & TICKET INTEGRATIONS"
      heroIcon="🔌"
      profileRole="AGENTIC AI · INTEGRATIONS"
      progressWidth="73%"
      summary={
        <>
          Day 112 plugs into systems of record. Typed tools, <strong>idempotent writes</strong>, and webhook ingress with scoped credentials.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Integrations', '#CRM', '#Day112', '#Webhooks', '#AgenticAI']}
    />
  );
}
