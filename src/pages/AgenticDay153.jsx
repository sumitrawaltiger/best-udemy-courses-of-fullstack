import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Series complete', text: '153 days of Agentic AI — from "Hello, LangChain!" to a graded capstone with eval, traces, and security drills' },
  { title: 'What travels', text: 'loops, schemas, HITL, budgets, traces, flywheels, and eval beat any framework fad' },
  { title: 'Portfolio proof', text: 'one recorded demo + README + golden suite is stronger than a long unfinished course log' },
  { title: 'Trust is product', text: 'privacy, allowlists, and honest degrade modes are how users stay' },
  { title: 'Measure to improve', text: 'north star + guardrails keep shipping from becoming roulette' },
  { title: 'Four stacks, one plan', text: 'Python Stack → TypeScript → Java → DevOps — the Agentic AI leg of Phase 1 is done, core Python & FastAPI continue from Day 154' },
  { title: 'Tomorrow: Day 154', text: 'the Python Stack continues — core Python syntax, OOP, file handling, DB connectivity, same daily rhythm' },
];

const core = [
  {
    icon: '🎓', title: 'Graduation Checklist', titleClass: 'card-title-cyan', subtitle: 'Done',
    description: 'Capstone demo · golden suite · runbook · cost/latency guards · security drills · retro written · portfolio card live.',
    code: 'demo · goldens\nretro · portfolio',
  },
  {
    icon: '🧭', title: 'What Transfers', titleClass: 'card-title-purple', subtitle: 'Keep',
    description: 'Agent loop · RAG/graph · multi-agent · LLMOps · edge/privacy · FinOps · chaos · flywheel — none of it is framework-specific.',
    code: 'loop · rag · ops\nedge · learn',
  },
  {
    icon: '🐍', title: 'Up Next: Core Python & FastAPI', titleClass: 'card-title-amber', subtitle: '365 Days',
    description: 'The Python Stack continues from Day 154 — core syntax, OOP, DB connectivity, then FastAPI — through 31 Dec 2027.',
    code: 'python · oop\ndb · fastapi',
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
    icon: '🔜', title: 'Preview: Python Modules', titleClass: 'card-title-amber', subtitle: 'Python',
    description: 'Skim the Python track before Day 154 — core syntax and OOP pick up right where Agentic AI leaves off.',
    link: { href: '/python', label: 'Open Python track →' },
  },
];

const resources = [
  {
    icon: '📘', title: 'Python Track', titleClass: 'card-title-cyan', subtitle: 'Tomorrow',
    description: 'The full Agentic AI + core Python curriculum — Day 154 onwards is core Python & FastAPI.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '🔷', title: 'TypeScript Stack', titleClass: 'card-title-purple', subtitle: 'Later — Day 519',
    description: 'The illustrated TypeScript series — where Phase 2 picks up once the full Python Stack wraps at Day 518.',
    link: { href: '/typescript', label: 'Open TypeScript series →' },
  },
  {
    icon: '🗺️', title: '4-Stack Roadmap', titleClass: 'card-title-amber', subtitle: 'Big Picture',
    description: 'See where the Python Stack fits in the full 53-month (1,614-day) plan, and what the next three stacks cover.',
    link: { href: '/roadmap', label: 'Open the roadmap →' },
  },
];

export default function AgenticDay153() {
  return (
    <StandaloneJourneyPage
      dayNumber={153}
      series="Agentic AI"
      dateLabel="Agentic AI Day 153 · 31 Dec 2026"
      prev={{ href: '/agentic-day-152', label: '← Day 152' }}
      next={{ href: '/python', label: 'Python Stack Continues →' }}
      tags={['Agentic AI', 'Finale', 'Graduation']}
      theme="AGENTIC AI SERIES FINALE"
      heroIcon="🏁"
      profileRole="AGENTIC AI · GRADUATION"
      progressWidth="100%"
      summary={
        <>
          Day 153 is the <strong>last Agentic AI day</strong> — 153 days complete, capstone shipped, retro written.
          Tag your repo, share the journey once — the <strong>Python Stack continues from Day 154</strong> into
          core Python &amp; FastAPI through 31 Dec 2027.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Graduation', '#Finale', '#Day153', '#AgenticAI', '#PythonStack']}
    />
  );
}
