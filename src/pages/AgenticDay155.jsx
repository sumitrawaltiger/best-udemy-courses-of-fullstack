import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Series complete', text: 'this is the last Agentic AI journal day — 155 days, from "Hello, Agentic AI!" to a graded capstone' },
  { title: 'What travels', text: 'loops, schemas, HITL, budgets, traces, flywheels, and eval beat any framework fad' },
  { title: 'Portfolio proof', text: 'one recorded demo + README + golden suite is stronger than a long unfinished course log' },
  { title: 'Trust is product', text: 'privacy, allowlists, and honest degrade modes are how users stay' },
  { title: 'Measure to improve', text: 'north star + guardrails keep shipping from becoming roulette' },
  { title: 'Five stacks, one plan', text: 'Agentic AI → TypeScript → Java → Python → DevOps — Phase 1 of 5 is done' },
  { title: 'Tomorrow: Day 156', text: 'the TypeScript Stack begins — same daily rhythm, new language and ecosystem' },
];

const core = [
  {
    icon: '🎓', title: 'Graduation Recap', titleClass: 'card-title-cyan', subtitle: 'Done',
    description: 'Capstone demo · golden suite · runbook · cost/latency guards · security drills · retro written.',
    code: 'demo · goldens\nretro · portfolio',
  },
  {
    icon: '🧭', title: 'What Transfers', titleClass: 'card-title-purple', subtitle: 'Keep',
    description: 'Agent loop · RAG/graph · multi-agent · LLMOps · edge/privacy · FinOps · chaos · flywheel — none of it is framework-specific.',
    code: 'loop · rag · ops\nedge · learn',
  },
  {
    icon: '🚀', title: 'Up Next: TypeScript Stack', titleClass: 'card-title-amber', subtitle: '365 Days',
    description: 'JavaScript → TypeScript → React → Next.js → React Native → Express/Node, one calendar year, starting Day 156.',
    code: 'js · ts · react\nnext · rn · express',
  },
];

const practice = [
  {
    icon: '🏷️', title: 'Tag Your Repo', titleClass: 'card-title-cyan', subtitle: 'Ship',
    description: 'Final commit, then tag the capstone repo v1.0. This is the artifact that outlives the journal.',
    code: 'commit → tag\nv1.0',
  },
  {
    icon: '📣', title: 'Share the Journey', titleClass: 'card-title-purple', subtitle: 'Proof',
    description: 'Post your retro + demo publicly once. It is the single highest-leverage thing you do today.',
    code: 'post once\nhigh leverage',
  },
  {
    icon: '🔜', title: 'Preview: Episode 1', titleClass: 'card-title-amber', subtitle: 'TypeScript',
    description: 'Skim the first illustrated TypeScript episode before Day 156 — installing the compiler.',
    link: { href: '/typescript/day/1', label: 'Open Episode 1 →' },
  },
];

const resources = [
  {
    icon: '🚀', title: 'TypeScript Stack', titleClass: 'card-title-cyan', subtitle: 'Next Stack',
    description: 'The illustrated TypeScript series — where Day 156 of the 5-stack plan picks up.',
    link: { href: '/typescript', label: 'Open TypeScript series →' },
  },
  {
    icon: '📘', title: 'Python Track', titleClass: 'card-title-purple', subtitle: 'Reference',
    description: 'The full Gen AI + Agentic curriculum this journal was grounded in — keep it as a reference.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '🗺️', title: '5-Stack Roadmap', titleClass: 'card-title-amber', subtitle: 'Big Picture',
    description: 'See where Agentic AI fits in the full 1,616-day plan, and what the next four stacks cover.',
    link: { href: '/roadmap', label: 'Open the roadmap →' },
  },
];

export default function AgenticDay155() {
  return (
    <StandaloneJourneyPage
      dayNumber={155}
      series="Agentic AI"
      dateLabel="Agentic AI Day 155 · 31 Dec 2026"
      prev={{ href: '/agentic-day-154', label: '← Day 154' }}
      next={{ href: '/typescript', label: 'TypeScript Stack →' }}
      tags={['Agentic AI', 'Finale', 'Phase 21']}
      theme="AGENTIC AI SERIES FINALE"
      heroIcon="🏁"
      profileRole="AGENTIC AI · GRADUATION"
      progressWidth="100%"
      summary={
        <>
          Day 155 is the <strong>last Agentic AI day</strong> — 155 days, capstone shipped, retro written. Tag your
          repo, share the journey once, then turn the page: the <strong>TypeScript Stack</strong> starts tomorrow.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Graduation', '#Finale', '#Day155', '#AgenticAI', '#NextStack']}
    />
  );
}
