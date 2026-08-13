import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Why limit', text: 'LLM APIs are expensive and abusable — quotas protect budget and fairness' },
  { title: 'Per-user limits', text: 'requests/min and tokens/day keyed by user or API key' },
  { title: 'Per-tenant budgets', text: 'hard $ caps for B2B customers with soft warnings at 80%' },
  { title: 'Global circuit', text: 'trip when provider errors spike — fail fast instead of melting the wallet' },
  { title: 'Fair queue', text: 'heavy users go to a slower lane so others still get served' },
  { title: '429 UX', text: 'return Retry-After; show a calm try-again message' },
  { title: 'Abuse signals', text: 'sudden fan-out, scrapers, prompt-injection floods — auto-throttle' },
  { title: 'Config as code', text: 'limits live in config/flags — change without redeploying the model' },
];

const core = [
  {
    icon: '⏱️', title: 'Token Bucket', titleClass: 'card-title-cyan', subtitle: 'Rate',
    description: 'Allow N requests per minute per key. Reject with 429 when empty. Refill steadily.',
    code: 'bucket(user)\nif empty → 429\nRetry-After: 12',
  },
  {
    icon: '💵', title: 'Daily $ Cap', titleClass: 'card-title-purple', subtitle: 'Budget',
    description: 'Accumulate estimated token cost. At 80% warn; at 100% block non-admin traffic.',
    code: 'cost += tokens*$\nif ≥ cap: block',
  },
  {
    icon: '🔌', title: 'Circuit Breaker', titleClass: 'card-title-amber', subtitle: 'Protect',
    description: 'If provider 5xx rate > threshold, open circuit for 60s and serve degraded FAQ/cache.',
    code: '5xx spike → open\nfallback → cache/FAQ',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Limit Middleware', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Add FastAPI middleware: 20 req/min per API key. Prove the 21st call gets 429.',
    code: '20 ok → 21st 429',
  },
  {
    icon: '📊', title: 'Quota Dashboard', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Sketch three charts: req/min, tokens/day, $ burn. Mark alert lines.',
    code: 'rpm · tokens\n$ · alert lines',
  },
  {
    icon: '🔜', title: 'Next: Incidents', titleClass: 'card-title-amber', subtitle: 'Day 59',
    description: 'Tomorrow — on-call and incident response for agent outages.',
    link: { href: '/agentic-day-59', label: 'Go to Day 59 →' },
  },
];

const resources = [
  {
    icon: '📘', title: 'Auth Day 43', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'API keys and identity — what you rate-limit against.',
    link: { href: '/agentic-day-43', label: 'Open Day 43 →' },
  },
  {
    icon: '🛡️', title: 'Guardrails Day', titleClass: 'card-title-purple', subtitle: 'Day 52',
    description: 'Abuse and injection defenses that pair with quotas.',
    link: { href: '/agentic-day-52', label: 'Open Day 52 →' },
  },
  {
    icon: '⚡', title: 'Cache Day 57', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Cache reduces load so quotas stretch further.',
    link: { href: '/agentic-day-57', label: 'Open Day 57 →' },
  },
];

export default function AgenticDay58() {
  return (
    <StandaloneJourneyPage
      dayNumber={58}
      series="Agentic AI"
      dateLabel="Agentic AI Day 58 · 9 Oct 2026"
      prev={{ href: '/agentic-day-57', label: '← Day 57' }}
      next={{ href: '/agentic-day-59', label: 'Day 59 →' }}
      tags={['Production', 'Quotas', 'Phase 9b']}
      theme="RATE LIMITS, QUOTAS & ABUSE CONTROLS"
      heroIcon="⏱️"
      profileRole="AGENTIC AI · QUOTAS"
      progressWidth="39%"
      summary={
        <>
          Day 58 protects the wallet and the product. Set <strong>rate limits</strong>, <strong>$ caps</strong>, and
          circuit breakers against abuse and provider meltdowns.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#RateLimit', '#Quotas', '#Day58', '#Abuse', '#AgenticAI']}
    />
  );
}
