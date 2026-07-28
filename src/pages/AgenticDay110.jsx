import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Production framing', text: 'agentic systems are software systems with sharper operational and safety edges' },
  { title: 'Control creates trust', text: 'policies, audits, and reviews make autonomy acceptable' },
  { title: 'Observability is leverage', text: 'teams move faster when they can replay and explain any run' },
  { title: 'Tool discipline matters', text: 'stable contracts and curated catalogs reduce failure modes' },
  { title: 'Readiness beats hype', text: 'prepared systems outperform flashy brittle demos' },
  { title: 'Keep building', text: 'the next improvement comes from running more real workflows' },
];

const core = [
  { icon: '🏁', title: 'Milestone', titleClass: 'card-title-cyan', subtitle: 'Wrap', description: 'You now have a clearer operational model for building and running production agentic systems.', code: 'orchestrate -> control -> operate' },
  { icon: '📦', title: 'Portfolio Proof', titleClass: 'card-title-purple', subtitle: 'Show', description: 'Package the strongest agent workflow with logs, controls, metrics, and a clear demo story.', code: 'workflow + evidence' },
  { icon: '🗺️', title: 'Next Focus', titleClass: 'card-title-amber', subtitle: 'Continue', description: 'Keep extending real workflows, stronger operations, and better automation boundaries.', code: 'ship -> observe -> refine' },
];

const practice = [
  { icon: '📝', title: 'System Review', titleClass: 'card-title-cyan', subtitle: 'Reflect', description: 'Write what most improved reliability in your agent systems so far.', code: 'what changed most?' },
  { icon: '📊', title: 'Ops Scorecard', titleClass: 'card-title-purple', subtitle: 'Measure', description: 'Summarize tool reliability, task success, blocked actions, and incident readiness.', code: 'success · tools · policy · ops' },
  { icon: '🏠', title: 'Back To Home', titleClass: 'card-title-amber', subtitle: 'Continue', description: 'Return to Home and keep extending the roadmap.', link: { href: '/', label: 'Back to Home ->' } },
];

const resources = [
  { icon: '📘', title: 'LangGraph', titleClass: 'card-title-cyan', subtitle: 'Docs', description: 'Patterns for orchestration and stateful workflows.', link: { href: 'https://langchain-ai.github.io/langgraph/', label: 'Open ->', external: true } },
  { icon: '📖', title: 'OWASP LLM Top 10', titleClass: 'card-title-purple', subtitle: 'Security', description: 'A useful security checklist for agentic systems.', link: { href: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/', label: 'Open ->', external: true } },
  { icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember', description: 'Autonomy only scales when the system stays observable, controllable, and safe.', footer: 'Operate with discipline.' },
];

export default function AgenticDay110() {
  return (
    <StandaloneJourneyPage
      dayNumber={110}
      dateLabel="Agentic AI Day 110 · 18 Nov 2026"
      prev={{ href: '/agentic-day-109', label: '← Day 109' }}
      next={{ href: '/', label: 'Home ->' }}
      tags={['Agentic AI', 'Milestone', 'Day 110']}
      theme="AGENTIC SYSTEMS MILESTONE"
      heroIcon="🏁"
      profileRole="AGENTIC AI · MILESTONE"
      progressWidth="74%"
      summary="Day 110 wraps this stretch with an operations mindset: orchestration, ToolOps, PolicyOps, incident readiness, and evidence-driven agent engineering."
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Milestone', '#Day110', '#Ops', '#100DaysOfCode']}
    />
  );
}
