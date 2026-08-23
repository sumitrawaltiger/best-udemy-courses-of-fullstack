import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Why cache', text: 'repeat questions burn tokens — cache exact and near-duplicate queries' },
  { title: 'Exact cache', text: 'hash(prompt + model + tools version) → stored answer' },
  { title: 'Semantic cache', text: 'embed the query; reuse answer if cosine similarity ≥ threshold' },
  { title: 'Invalidation', text: 'bump cache namespace when docs, prompt, or model version change' },
  { title: 'Safety first', text: 'never cache personalized or secret-bearing answers across tenants' },
  { title: 'TTL', text: 'short TTL for volatile knowledge; longer for stable FAQ' },
  { title: 'Hit metrics', text: 'track hit rate, latency saved, and $ saved' },
  { title: 'Stale risk', text: 'a wrong cached answer is worse than a slow fresh one' },
];

const core = [
  {
    icon: '⚡', title: 'Exact Key', titleClass: 'card-title-cyan', subtitle: 'Fast',
    description: 'Key = hash(normalized question + model + prompt_ver + index_ver). Store answer + citations.',
    code: 'key = hash(q, model, ver)\nGET → hit | miss',
  },
  {
    icon: '🧲', title: 'Semantic Hit', titleClass: 'card-title-purple', subtitle: 'Near-dup',
    description: 'Embed query; if top neighbor score ≥ τ (tune it), return cached answer and log semantic hit.',
    code: 'embed(q) → ANN\nif sim ≥ τ: reuse',
  },
  {
    icon: '♻️', title: 'Invalidate', titleClass: 'card-title-amber', subtitle: 'Fresh',
    description: 'On index rebuild or prompt promote, increment namespace or wipe keys for that product.',
    code: 'prompt_ver++\n→ new namespace',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Redis FAQ Cache', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Cache exact matches for an FAQ agent. Measure p95 with and without cache on 50 repeats.',
    code: '50 repeats\np95 · hit%',
  },
  {
    icon: '📏', title: 'Threshold Sweep', titleClass: 'card-title-purple', subtitle: 'Tune',
    description: 'Try τ = 0.85 / 0.90 / 0.95 on paraphrase pairs. Pick the safest τ with decent hit rate.',
    code: 'τ sweep\nprecision first',
  },
  {
    icon: '🔜', title: 'Next: Quotas', titleClass: 'card-title-amber', subtitle: 'Day 58',
    description: 'Tomorrow — rate limits and abuse controls for LLM APIs.',
    link: { href: '/agentic-day-58', label: 'Go to Day 58 →' },
  },
];

const resources = [
  {
    icon: '📘', title: 'RAG Module', titleClass: 'card-title-cyan', subtitle: 'PY Track',
    description: 'Retrieval pipelines that benefit most from semantic cache.',
    link: { href: '/python/learn/retrieval-augmented-generation', label: 'Open RAG module →' },
  },
  {
    icon: '📡', title: 'Streaming Day', titleClass: 'card-title-purple', subtitle: 'Day 56',
    description: 'Cache hits can still stream a stored answer for consistent UX.',
    link: { href: '/agentic-day-56', label: 'Open Day 56 →' },
  },
  {
    icon: '💰', title: 'Cost Day 64', titleClass: 'card-title-amber', subtitle: 'Later',
    description: 'Cache savings show up clearly on cost dashboards.',
    link: { href: '/agentic-day-64', label: 'Open Day 64 →' },
  },
];

export default function AgenticDay57() {
  return (
    <StandaloneJourneyPage
      dayNumber={57}
      series="Agentic AI"
      dateLabel="Agentic AI Day 57 · 19 Oct 2026"
      prev={{ href: '/agentic-day-56', label: '← Day 56' }}
      next={{ href: '/agentic-day-58', label: 'Day 58 →' }}
      tags={['Production', 'Caching', 'Phase 9b']}
      theme="SEMANTIC CACHING FOR RAG & AGENTS"
      heroIcon="⚡"
      profileRole="AGENTIC AI · CACHE"
      progressWidth="38%"
      summary={
        <>
          Day 57 cuts cost and latency. Add <strong>exact</strong> and <strong>semantic</strong> caches with clear
          invalidation and tenant isolation.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#SemanticCache', '#RAG', '#Day57', '#Latency', '#AgenticAI']}
    />
  );
}
