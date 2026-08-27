import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Offline-first', text: 'the agent must work in flight mode — queue actions and sync later' },
  { title: 'Local state', text: 'checkpoints, drafts, and tool intents live in an on-device store' },
  { title: 'Outbox pattern', text: 'pending cloud tool calls sit in an outbox until connectivity returns' },
  { title: 'Conflict rules', text: 'last-write-wins is rarely enough — define merge for memory facts' },
  { title: 'Idempotent sync', text: 'retries must not double-create tickets or double-charge' },
  { title: 'Partial sync', text: 'prioritize user-visible drafts over bulky trace uploads' },
  { title: 'Clock skew', text: 'use server time when available; otherwise monotonic local clocks + vector clocks' },
  { title: 'What’s next', text: 'sync without privacy design just moves the leak to the sync channel' },
];

const core = [
  {
    icon: '📬', title: 'Outbox Queue', titleClass: 'card-title-cyan', subtitle: 'Sync',
    description: 'Every cloud-bound action is written locally first, then drained when online with backoff.',
    code: 'write outbox\nonline → drain\nidempotent keys',
  },
  {
    icon: '🔀', title: 'Merge Policy', titleClass: 'card-title-purple', subtitle: 'Conflicts',
    description: 'Memory facts carry timestamps and source. Prefer user edits over agent guesses on conflict.',
    code: 'user > agent\nnewer · same key',
  },
  {
    icon: '📶', title: 'Connectivity UX', titleClass: 'card-title-amber', subtitle: 'Honest',
    description: 'Show offline badge and queued count. Never pretend a send succeeded before sync ack.',
    code: 'offline · queued N\nack before “sent”',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Flight-Mode Draft', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Compose a support reply offline; confirm it stays queued until sync, then sends once.',
    code: 'offline draft\n→ queue → send 1x',
  },
  {
    icon: '🧨', title: 'Double-Send Test', titleClass: 'card-title-purple', subtitle: 'Safety',
    description: 'Kill the app mid-sync; restart; prove idempotency prevents duplicate ticket creates.',
    code: 'retry → still 1',
  },
  {
    icon: '🔜', title: 'Next: Privacy', titleClass: 'card-title-amber', subtitle: 'Day 133',
    description: 'Tomorrow — privacy-preserving patterns for agents.',
    link: { href: '/agentic-day-133', label: 'Go to Day 133 →' },
  },
];

const resources = [
  {
    icon: '📱', title: 'Edge Day 131', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'On-device loops that need offline sync.',
    link: { href: '/agentic-day-131', label: 'Open Day 131 →' },
  },
  {
    icon: '💾', title: 'Memory Day 92', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'Persistent memory that must merge across devices.',
    link: { href: '/agentic-day-92', label: 'Open Day 92 →' },
  },
  {
    icon: '🏗️', title: 'Prod Pipelines', titleClass: 'card-title-amber', subtitle: 'Day 53',
    description: 'Idempotency habits for safe retries.',
    link: { href: '/agentic-day-53', label: 'Open Day 53 →' },
  },
];

export default function AgenticDay132() {
  return (
    <StandaloneJourneyPage
      dayNumber={132}
      series="Agentic AI"
      dateLabel="Agentic AI Day 132 · 6 Jan 2027"
      prev={{ href: '/agentic-day-131', label: '← Day 131' }}
      next={{ href: '/agentic-day-133', label: 'Day 133 →' }}
      tags={['Agentic AI', 'Offline', 'Phase 18']}
      theme="OFFLINE-FIRST AGENT SYNC"
      heroIcon="📬"
      profileRole="AGENTIC AI · SYNC"
      progressWidth="88%"
      summary={
        <>
          Day 132 keeps agents honest offline. Use an <strong>outbox</strong>, merge rules, and idempotent sync so
          reconnect never double-sends.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#OfflineFirst', '#Sync', '#Day132', '#EdgeAI', '#AgenticAI']}
    />
  );
}
