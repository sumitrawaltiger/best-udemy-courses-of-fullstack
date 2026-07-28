import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'SLOs for Gen AI', text: 'define p95 latency, cost, and quality targets for each feature' },
  { title: 'Degrade gracefully', text: 'fallback models and reduced context keep the product usable' },
  { title: 'Retries need discipline', text: 'retry only transient failures and cap tool loops' },
  { title: 'Caching strategy', text: 'cache retrieval and deterministic transforms, not hallucinated text' },
  { title: 'Circuit breakers', text: 'protect upstream providers and prevent cascading failures' },
  { title: 'Incident readiness', text: 'traceability + rollback switches make recovery faster' },
];

const core = [
  { icon: '📏', title: 'Feature SLOs', titleClass: 'card-title-cyan', subtitle: 'Targets', description: 'Set measurable objectives for quality, latency, and cost per feature.', code: 'quality · ms · $' },
  { icon: '🧯', title: 'Failure Controls', titleClass: 'card-title-purple', subtitle: 'Resilience', description: 'Use timeouts, circuit breakers, and capped retries to avoid meltdown loops.', code: 'timeout + breaker' },
  { icon: '🧱', title: 'Graceful Degradation', titleClass: 'card-title-amber', subtitle: 'UX', description: 'Provide partial results, alternative routes, or human escalation when needed.', code: 'fallback -> still useful' },
];

const practice = [
  { icon: '🧪', title: 'Timeout Budget', titleClass: 'card-title-cyan', subtitle: 'Build', description: 'Set a hard budget across retrieval + model + tools and enforce it.', code: 'budget_ms' },
  { icon: '📊', title: 'SLO Dashboard', titleClass: 'card-title-purple', subtitle: 'Ops', description: 'Track p50/p95 latency, retries, and fallback rates by route.', code: 'p95 · retries · fallback' },
  { icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-amber', subtitle: 'Day 140', description: 'Tomorrow -> wrap-up and enterprise readiness checkpoint.', link: { href: '/genai-day-140', label: 'Go to Day 140 ->' } },
];

const resources = [
  { icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub', description: 'Browse the full Gen AI lessons and curriculum on the site.', link: { href: '/genai', label: 'Open Gen AI Track ->' } },
  { icon: '📖', title: 'SRE Book', titleClass: 'card-title-purple', subtitle: 'Reliability', description: 'Classic reliability patterns that apply to Gen AI systems too.', link: { href: 'https://sre.google/sre-book/table-of-contents/', label: 'Open ->', external: true } },
  { icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember', description: 'Reliability is the feature users notice first.', footer: 'Design for failure.' },
];

export default function GenaiDay139() {
  return (
    <StandaloneJourneyPage
      dayNumber={139}
      dateLabel="Gen AI Day 139 · 139 Aug 2026"
      prev={{ href: '/genai-day-138', label: '← Day 138' }}
      next={{ href: '/genai-day-140', label: 'Day 140 →' }}
      tags={['Gen AI', 'Reliability', 'Day 139']}
      theme="RELIABILITY ENGINEERING FOR GEN AI"
      heroIcon="📏"
      profileRole="GEN AI · SRE"
      progressWidth="93%"
      summary="Day 139 applies reliability engineering to Gen AI: SLOs, graceful degradation, circuit breakers, and incident-ready observability."
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#GenAI', '#SRE', '#Day139', '#Reliability', '#100DaysOfCode']}
    />
  );
}

