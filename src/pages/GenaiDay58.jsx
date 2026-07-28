import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Workflow over chat', text: 'users often want tasks completed, not just conversation' },
  { title: 'Review states', text: 'draft, accepted, rejected, and retry states make AI output usable' },
  { title: 'Source visibility', text: 'show citations or evidence beside the answer' },
  { title: 'Editable output', text: 'AI drafts improve when users can adjust before finalizing' },
  { title: 'Failure paths', text: 'bad files and low-confidence output need clear UX' },
  { title: 'Product metrics', text: 'track completion rate, retry rate, and time saved' },
];

const core = [
  { icon: '🪜', title: 'Workflow Steps', titleClass: 'card-title-cyan', subtitle: 'Flow', description: 'Design the path from input to review to final output as a visible sequence.', code: 'input -> draft -> review -> export' },
  { icon: '📚', title: 'Evidence Panel', titleClass: 'card-title-purple', subtitle: 'Trust', description: 'Pair outputs with evidence so users can verify what the model relied on.', code: 'answer + sources' },
  { icon: '✍️', title: 'Editable Drafts', titleClass: 'card-title-amber', subtitle: 'Control', description: 'Treat model output as a first draft the user can approve or refine.', code: 'AI draft -> user final' },
];

const practice = [
  { icon: '🧪', title: 'Vertical Slice', titleClass: 'card-title-cyan', subtitle: 'Build', description: 'Ship one complete user workflow with upload, answer, citations, and export.', code: 'one usable flow' },
  { icon: '📈', title: 'Success Metric', titleClass: 'card-title-purple', subtitle: 'Measure', description: 'Track completion rate and how often users need to regenerate.', code: 'complete% · retry%' },
  { icon: '🔜', title: 'Next: Feedback', titleClass: 'card-title-amber', subtitle: 'Day 59', description: 'Tomorrow -> monitoring and human feedback loops for Gen AI apps.', link: { href: '/genai-day-59', label: 'Go to Day 59 ->' } },
];

const resources = [
  { icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub', description: 'Browse the full Gen AI lessons and curriculum on the site.', link: { href: '/genai', label: 'Open Gen AI Track ->' } },
  { icon: '📖', title: 'Vercel AI SDK', titleClass: 'card-title-purple', subtitle: 'UX', description: 'Useful patterns for streaming and AI-first interfaces.', link: { href: 'https://sdk.vercel.ai/docs', label: 'Open ->', external: true } },
  { icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember', description: 'Workflows win when users can see, review, and correct the AI output.', footer: 'Design for trust.' },
];

export default function GenaiDay58() {
  return (
    <StandaloneJourneyPage
      dayNumber={58}
      series="Gen AI"
      dateLabel="Gen AI Day 58 · 58 Aug 2026"
      prev={{ href: '/genai-day-57', label: '← Day 57' }}
      next={{ href: '/genai-day-59', label: 'Day 59 →' }}
      tags={['Gen AI', 'Workflow UX', 'Day 58']}
      theme="SHIPPING GEN AI USER WORKFLOWS"
      heroIcon="🖥️"
      profileRole="GEN AI · UX"
      progressWidth="39%"
      summary="Day 58 focuses on the product experience: upload, process, review, cite, and export. A good Gen AI app is a workflow users can trust and repeat."
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#GenAI', '#UX', '#Day58', '#Workflow', '#100DaysOfCode']}
    />
  );
}
