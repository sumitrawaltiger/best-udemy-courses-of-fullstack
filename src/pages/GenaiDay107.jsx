import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Eval suites grow up', text: 'real systems need segmented eval sets by task, risk, and audience' },
  { title: 'Regression buckets', text: 'keep known failures grouped so fixes can be verified repeatedly' },
  { title: 'Judge carefully', text: 'LLM-as-judge is useful, but only with clear rubrics and spot checks' },
  { title: 'Thresholds matter', text: 'promotion gates need explicit pass criteria, not intuition' },
  { title: 'Coverage over vanity', text: 'a broad suite beats a tiny set of easy examples' },
  { title: 'Feedback feeds evals', text: 'production failures should turn into new benchmark cases' },
];

const core = [
  { icon: '📚', title: 'Segmented Evals', titleClass: 'card-title-cyan', subtitle: 'Coverage', description: 'Split evals by extraction, reasoning, refusal, formatting, and domain-critical tasks.', code: 'task groups -> scores' },
  { icon: '⚖️', title: 'Pass Gates', titleClass: 'card-title-purple', subtitle: 'Ship', description: 'Define the score a candidate must meet before it can replace the current version.', code: 'candidate >= threshold' },
  { icon: '🔁', title: 'Failure Recycling', titleClass: 'card-title-amber', subtitle: 'Improve', description: 'Turn real failures into permanent regression cases so the same bug does not reappear.', code: 'prod fail -> eval case' },
];

const practice = [
  { icon: '🧪', title: 'Task Buckets', titleClass: 'card-title-cyan', subtitle: 'Build', description: 'Break your eval suite into at least three task categories and score each separately.', code: '3 buckets minimum' },
  { icon: '📋', title: 'Promotion Gate', titleClass: 'card-title-purple', subtitle: 'Ops', description: 'Write a simple rule for when a model or prompt version is allowed to ship.', code: 'gate = pass criteria' },
  { icon: '🔜', title: 'Next: Knowledge Ops', titleClass: 'card-title-amber', subtitle: 'Day 108', description: 'Tomorrow -> operating document pipelines and retrieval freshness.', link: { href: '/genai-day-108', label: 'Go to Day 108 ->' } },
];

const resources = [
  { icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub', description: 'Browse the full Gen AI lessons and curriculum on the site.', link: { href: '/genai', label: 'Open Gen AI Track ->' } },
  { icon: '📖', title: 'Promptfoo', titleClass: 'card-title-purple', subtitle: 'Eval Tool', description: 'A useful tool for prompt and model evaluation workflows.', link: { href: 'https://promptfoo.dev/', label: 'Open ->', external: true } },
  { icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember', description: 'A model is only better when the eval suite proves it.', footer: 'Promote by score.' },
];

export default function GenaiDay107() {
  return (
    <StandaloneJourneyPage
      dayNumber={107}
      dateLabel="Gen AI Day 107 · 107 Aug 2026"
      prev={{ href: '/genai-day-106', label: '← Day 106' }}
      next={{ href: '/genai-day-108', label: 'Day 108 →' }}
      tags={['Gen AI', 'Evaluation', 'Day 107']}
      theme="OPERATING EVALUATION SUITES"
      heroIcon="📚"
      profileRole="GEN AI · EVAL OPS"
      progressWidth="72%"
      summary="Day 107 scales evaluation beyond a demo set. Segment the suite, define promotion gates, and recycle production failures into permanent regression coverage."
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#GenAI', '#Evaluation', '#Day107', '#Quality', '#100DaysOfCode']}
    />
  );
}
