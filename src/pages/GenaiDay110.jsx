import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Systems thinking wins', text: 'models, evals, retrieval, safety, and product UX now connect as one operating model' },
  { title: 'Shipping is the skill', text: 'real leverage comes from launching and iterating, not collecting concepts' },
  { title: 'Observability is non-negotiable', text: 'good teams can explain what happened on any run' },
  { title: 'Governance is product work', text: 'ownership, policies, and reviews keep AI features sustainable' },
  { title: 'Optimization never ends', text: 'quality, latency, and cost always need balancing' },
  { title: 'The roadmap continues', text: 'the next gains come from more builds, not more passive study' },
];

const core = [
  { icon: '🏁', title: 'Milestone', titleClass: 'card-title-cyan', subtitle: 'Wrap', description: 'You now have a stronger operating model for building, measuring, and launching Gen AI products.', code: 'design -> eval -> launch' },
  { icon: '📦', title: 'Portfolio Story', titleClass: 'card-title-purple', subtitle: 'Show', description: 'Package the best feature with README, screenshots, metrics, and known limits.', code: 'demo + numbers + limits' },
  { icon: '🗺️', title: 'Next Focus', titleClass: 'card-title-amber', subtitle: 'Continue', description: 'Keep going with deeper product loops, broader automation, or tighter LLMOps discipline.', code: 'ship -> refine' },
];

const practice = [
  { icon: '📝', title: 'Roadmap Review', titleClass: 'card-title-cyan', subtitle: 'Reflect', description: 'Write what changed most in how you build Gen AI systems now.', code: 'before -> now' },
  { icon: '📊', title: 'System Scorecard', titleClass: 'card-title-purple', subtitle: 'Measure', description: 'Summarize the current quality, cost, latency, and safety posture of your best feature.', code: 'quality · cost · ms · safety' },
  { icon: '🏠', title: 'Back To Track', titleClass: 'card-title-amber', subtitle: 'Continue', description: 'Return to the Gen AI track and extend the roadmap from here.', link: { href: '/genai', label: 'Open Gen AI Track ->' } },
];

const resources = [
  { icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub', description: 'Browse the full Gen AI lessons and curriculum on the site.', link: { href: '/genai', label: 'Open Gen AI Track ->' } },
  { icon: '📖', title: 'LangChain', titleClass: 'card-title-purple', subtitle: 'Docs', description: 'Patterns that connect prompting, retrieval, evaluation, and agents.', link: { href: 'https://js.langchain.com/docs/introduction/', label: 'Open ->', external: true } },
  { icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember', description: 'A Gen AI product is an operating system of choices, not a single clever prompt.', footer: 'Ship the system.' },
];

export default function GenaiDay110() {
  return (
    <StandaloneJourneyPage
      dayNumber={110}
      dateLabel="Gen AI Day 110 · 110 Aug 2026"
      prev={{ href: '/genai-day-109', label: '← Day 109' }}
      next={{ href: '/genai', label: 'Gen AI →' }}
      tags={['Gen AI', 'Milestone', 'Day 110']}
      theme="GEN AI SYSTEMS MILESTONE"
      heroIcon="🏁"
      profileRole="GEN AI · MILESTONE"
      progressWidth="74%"
      summary="Day 110 wraps this stretch with a product mindset: routing, evaluation, knowledge operations, launch safety, and disciplined iteration. The value now comes from shipping the system repeatedly."
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#GenAI', '#Milestone', '#Day110', '#Systems', '#100DaysOfCode']}
    />
  );
}
