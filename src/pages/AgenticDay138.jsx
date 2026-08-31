import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Assume failure', text: 'tools timeout, models 500, queues stall — design the unhappy path first' },
  { title: 'Chaos drills', text: 'inject faults in staging: kill a tool, corrupt a retrieval hit, delay the LLM' },
  { title: 'Retries with care', text: 'backoff + jitter; never retry non-idempotent writes without keys' },
  { title: 'Circuit breakers', text: 'open the breaker when a dependency is unhealthy; fail fast to fallback' },
  { title: 'Degraded mode', text: 'templates, cached answers, or HITL queue beat a blank error' },
  { title: 'Game days', text: 'schedule failure drills; write blameless notes and fix the top two issues' },
  { title: 'Blast radius', text: 'one bad tenant or tool must not take down the mesh' },
  { title: 'What’s next', text: 'reliability without security still gets owned by injection attacks' },
];

const core = [
  {
    icon: '💥', title: 'Fault Catalog', titleClass: 'card-title-cyan', subtitle: 'Inject',
    description: 'Timeout · 429 · empty RAG · wrong schema · partial stream cut. Each needs a named response.',
    code: 'timeout · 429\nempty · bad JSON',
  },
  {
    icon: '🔁', title: 'Safe Retry', titleClass: 'card-title-purple', subtitle: 'Idempotent',
    description: 'Retry reads freely. Writes need idempotency keys. Cap attempts; then degrade or HITL.',
    code: 'read ok\nwrite + key\nmax N',
  },
  {
    icon: '🧯', title: 'Degrade Path', titleClass: 'card-title-amber', subtitle: 'Fallback',
    description: 'When the breaker opens: cached reply, FAQ template, or “human will follow up”.',
    code: 'breaker open\n→ cache | HITL',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Kill-a-Tool Day', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Force CRM tool timeouts for 10 minutes in staging. Confirm retries, breaker, and user message.',
    code: 'timeout storm\n→ degrade UX',
  },
  {
    icon: '📝', title: 'Game-Day Note', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'One-page blameless write-up: what broke, what users saw, two fixes with owners.',
    code: 'what · impact\n2 fixes',
  },
  {
    icon: '🔜', title: 'Next: Security', titleClass: 'card-title-amber', subtitle: 'Day 139',
    description: 'Tomorrow — agent security hardening.',
    link: { href: '/agentic-day-139', label: 'Go to Day 139 →' },
  },
];

const resources = [
  {
    icon: '⏱️', title: 'Latency Day 137', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Fast paths still need failure modes.',
    link: { href: '/agentic-day-137', label: 'Open Day 137 →' },
  },
  {
    icon: '🚨', title: 'Incidents Day 59', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'Incident habits for agent outages.',
    link: { href: '/agentic-day-59', label: 'Open Day 59 →' },
  },
  {
    icon: '🏗️', title: 'Pipelines Day 53', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Idempotent production patterns.',
    link: { href: '/agentic-day-53', label: 'Open Day 53 →' },
  },
];

export default function AgenticDay138() {
  return (
    <StandaloneJourneyPage
      dayNumber={138}
      series="Agentic AI"
      dateLabel="Agentic AI Day 138 · 16 Jan 2027"
      prev={{ href: '/agentic-day-137', label: '← Day 137' }}
      next={{ href: '/agentic-day-139', label: 'Day 139 →' }}
      tags={['Agentic AI', 'Reliability', 'Phase 19']}
      theme="CHAOS & AGENT RELIABILITY"
      heroIcon="💥"
      profileRole="AGENTIC AI · RELIABILITY"
      progressWidth="92%"
      summary={
        <>
          Day 138 breaks things on purpose. Build a <strong>fault catalog</strong>, safe retries, and degrade paths —
          then run a staging game day.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Chaos', '#Reliability', '#Day138', '#GameDay', '#AgenticAI']}
    />
  );
}
