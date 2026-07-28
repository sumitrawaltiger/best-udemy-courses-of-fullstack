import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Model routing', text: 'use different models for cheap tasks, hard tasks, and structured extraction' },
  { title: 'Confidence gates', text: 'escalate only when the cheap path is uncertain or fails validation' },
  { title: 'Cost-aware design', text: 'optimize for total system value, not just the strongest model' },
  { title: 'Fallback chains', text: 'define what happens when the primary model slows down or degrades' },
  { title: 'Validation first', text: 'let checks decide whether a result is accepted or retried' },
  { title: 'Routing is product logic', text: 'choosing the model is part of the application architecture' },
];

const core = [
  { icon: '🧭', title: 'Routing Layer', titleClass: 'card-title-cyan', subtitle: 'Decide', description: 'Add a routing step that chooses the right model or provider for the task type.', code: 'classify -> route -> run' },
  { icon: '💸', title: 'Cost Tiering', titleClass: 'card-title-purple', subtitle: 'Budget', description: 'Keep inexpensive models on the common path and reserve premium models for difficult work.', code: 'cheap -> premium on demand' },
  { icon: '✅', title: 'Acceptance Checks', titleClass: 'card-title-amber', subtitle: 'Trust', description: 'Use schemas, heuristics, or secondary checks to validate the output before returning it.', code: 'run -> validate -> accept' },
];

const practice = [
  { icon: '🧪', title: 'Dual Model Flow', titleClass: 'card-title-cyan', subtitle: 'Build', description: 'Implement one fast model path and one fallback premium model path.', code: 'fast + fallback' },
  { icon: '📊', title: 'Route Metrics', titleClass: 'card-title-purple', subtitle: 'Measure', description: 'Track which route was selected, how often fallback happened, and the token cost.', code: 'route · fallback · $' },
  { icon: '🔜', title: 'Next: Eval Ops', titleClass: 'card-title-amber', subtitle: 'Day 107', description: 'Tomorrow -> operating evaluation suites at scale.', link: { href: '/genai-day-107', label: 'Go to Day 107 ->' } },
];

const resources = [
  { icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub', description: 'Browse the full Gen AI lessons and curriculum on the site.', link: { href: '/genai', label: 'Open Gen AI Track ->' } },
  { icon: '📖', title: 'OpenRouter', titleClass: 'card-title-purple', subtitle: 'Reference', description: 'A useful reference point for multi-model routing ideas.', link: { href: 'https://openrouter.ai/docs/quickstart', label: 'Open ->', external: true } },
  { icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember', description: 'Model choice should be deliberate, observable, and reversible.', footer: 'Route with evidence.' },
];

export default function GenaiDay106() {
  return (
    <StandaloneJourneyPage
      dayNumber={106}
      dateLabel="Gen AI Day 106 · 106 Aug 2026"
      prev={{ href: '/genai-day-75', label: '← Day 75' }}
      next={{ href: '/genai-day-107', label: 'Day 107 →' }}
      tags={['Gen AI', 'Routing', 'Day 106']}
      theme="MULTI-MODEL ROUTING FOR GEN AI"
      heroIcon="🧭"
      profileRole="GEN AI · ROUTING"
      progressWidth="71%"
      summary="Day 106 adds model routing to the stack. Choose the right model for the job, validate outputs, and fall back safely when quality, latency, or cost needs change."
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#GenAI', '#Routing', '#Day106', '#LLMOps', '#100DaysOfCode']}
    />
  );
}
