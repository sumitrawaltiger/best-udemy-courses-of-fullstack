import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'PromptOps', text: 'prompts now behave like reusable, testable assets' },
  { title: 'Backend contracts', text: 'stable APIs make Gen AI features usable across clients' },
  { title: 'Workflow UX', text: 'real products need review, citations, and export paths' },
  { title: 'Feedback loops', text: 'production traces and user votes guide the next fixes' },
  { title: 'Metrics matter', text: 'cost, latency, and quality must move together' },
  { title: 'Portfolio-ready', text: 'one polished flow proves more than many isolated experiments' },
];

const core = [
  { icon: '✅', title: 'Checklist', titleClass: 'card-title-cyan', subtitle: 'Ship It', description: 'Reusable prompts, stable backend, trusted workflow, and a feedback loop in production.', code: 'prompt · API · UX · feedback' },
  { icon: '📊', title: 'Scorecard', titleClass: 'card-title-purple', subtitle: 'Measure', description: 'Know your quality, latency, retry rate, and cost per request before expanding scope.', code: 'quality · ms · $' },
  { icon: '🗺️', title: 'Next Arc', titleClass: 'card-title-amber', subtitle: 'Continue', description: 'Move into deeper performance, tuning, and governance with stronger product discipline.', code: 'optimize -> harden' },
];

const practice = [
  { icon: '🎬', title: 'Demo Story', titleClass: 'card-title-cyan', subtitle: 'Show', description: 'Demo success, one failure recovery, and the metrics that justify the design.', code: 'story + numbers' },
  { icon: '📝', title: 'Retrospective', titleClass: 'card-title-purple', subtitle: 'Reflect', description: 'Write what worked, what failed, and what you will build next.', code: 'wins · gaps · next' },
  { icon: '🔜', title: 'Continue', titleClass: 'card-title-amber', subtitle: 'Day 71', description: 'Continue into the next Gen AI stretch.', link: { href: '/genai-day-71', label: 'Go to Day 71 ->' } },
];

const resources = [
  { icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub', description: 'Browse the full Gen AI lessons and curriculum on the site.', link: { href: '/genai', label: 'Open Gen AI Track ->' } },
  { icon: '📖', title: 'LangChain', titleClass: 'card-title-purple', subtitle: 'Docs', description: 'Patterns spanning prompts, retrieval, and product workflows.', link: { href: 'https://js.langchain.com/docs/introduction/', label: 'Open ->', external: true } },
  { icon: '🗺️', title: 'Mindset', titleClass: 'card-title-amber', subtitle: 'Remember', description: 'A production Gen AI feature is an engineered workflow, not a prompt pasted into a text box.' },
];

export default function GenaiDay60() {
  return (
    <StandaloneJourneyPage
      dayNumber={60}
      series="Gen AI"
      dateLabel="Gen AI Day 60 · 60 Aug 2026"
      prev={{ href: '/genai-day-59', label: '← Day 59' }}
      next={{ href: '/genai-day-71', label: 'Day 71 →' }}
      tags={['Gen AI', 'Milestone', 'Day 60']}
      theme="GEN AI PRODUCTIZATION MILESTONE"
      heroIcon="🏁"
      profileRole="GEN AI · MILESTONE"
      progressWidth="40%"
      summary="Day 60 wraps this stretch: prompt systems, API boundaries, user workflows, and feedback loops. The focus now is shipping Gen AI features with repeatability instead of one-off demos."
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#GenAI', '#Milestone', '#Day60', '#Productization', '#100DaysOfCode']}
    />
  );
}
