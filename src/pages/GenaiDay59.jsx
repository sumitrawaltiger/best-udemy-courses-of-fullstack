import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Production truth', text: 'real user behavior reveals failures that demos miss' },
  { title: 'Trace runs', text: 'capture prompt version, context, output, latency, and cost' },
  { title: 'Feedback buttons', text: 'simple votes help when tied to the exact run' },
  { title: 'Review queues', text: 'send weak outputs for human inspection' },
  { title: 'Close the loop', text: 'use feedback to refine prompts, retrieval, and flow design' },
  { title: 'Alert on drift', text: 'watch for rising retries, latency, or hallucination signals' },
];

const core = [
  { icon: '📡', title: 'Run Traces', titleClass: 'card-title-cyan', subtitle: 'Observe', description: 'Record the full path of each request so failures are reproducible.', code: 'input -> context -> output' },
  { icon: '👍', title: 'User Feedback', titleClass: 'card-title-purple', subtitle: 'Signal', description: 'Attach user ratings to exact outputs so feedback becomes actionable.', code: 'run_id + vote' },
  { icon: '🧰', title: 'Improvement Queue', titleClass: 'card-title-amber', subtitle: 'Iterate', description: 'Turn the worst failures into prioritized fixes and future regression tests.', code: 'fail -> triage -> patch' },
];

const practice = [
  { icon: '🧪', title: 'Feedback Capture', titleClass: 'card-title-cyan', subtitle: 'Build', description: 'Add thumbs up/down and store the vote with the traced request id.', code: 'trace + vote' },
  { icon: '📋', title: 'Failure Review', titleClass: 'card-title-purple', subtitle: 'Ops', description: 'Review 10 weak runs and classify whether the issue was prompt, retrieval, or UX.', code: 'prompt · RAG · UX' },
  { icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-amber', subtitle: 'Day 60', description: 'Tomorrow -> a productization checkpoint for the Gen AI track.', link: { href: '/genai-day-60', label: 'Go to Day 60 ->' } },
];

const resources = [
  { icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub', description: 'Browse the full Gen AI lessons and curriculum on the site.', link: { href: '/genai', label: 'Open Gen AI Track ->' } },
  { icon: '📖', title: 'LangSmith', titleClass: 'card-title-purple', subtitle: 'Tracing', description: 'Tracing and evaluation tooling for LLM applications.', link: { href: 'https://www.langchain.com/langsmith', label: 'Open ->', external: true } },
  { icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember', description: 'Feedback without traces is noise. Traces without action are waste.', footer: 'Close the loop.' },
];

export default function GenaiDay59() {
  return (
    <StandaloneJourneyPage
      dayNumber={59}
      series="Gen AI"
      dateLabel="Gen AI Day 59 · 59 Aug 2026"
      prev={{ href: '/genai-day-58', label: '← Day 58' }}
      next={{ href: '/genai-day-60', label: 'Day 60 →' }}
      tags={['Gen AI', 'Observability', 'Day 59']}
      theme="MONITORING & HUMAN FEEDBACK LOOPS"
      heroIcon="📊"
      profileRole="GEN AI · FEEDBACK"
      progressWidth="40%"
      summary="Day 59 closes the loop. Trace requests, collect user signals, review weak outputs, and turn real production failures into better prompts, retrieval, and UX."
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#GenAI', '#Observability', '#Day59', '#Feedback', '#100DaysOfCode']}
    />
  );
}
