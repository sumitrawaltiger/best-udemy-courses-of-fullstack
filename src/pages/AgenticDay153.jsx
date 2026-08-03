import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Capstone shipped', text: 'recorded demo, golden suite, runbook, cost/latency guards, security drills, and retro — one complete project from idea to production-ready' },
  { title: 'What transfers', text: 'loops, schemas, HITL, budgets, traces, flywheels, and eval — none of this is framework-specific; it moves to every language and stack ahead' },
  { title: 'Portfolio proof', text: 'one recorded demo + README + golden suite is stronger than a long unfinished course log' },
  { title: 'Trust is product', text: 'privacy, allowlists, and honest degrade modes are how users stay — a core principle for every agent built in Year 1' },
  { title: 'Measure to improve', text: 'north star metrics + guardrails keep shipping from becoming roulette — LLMOps foundations locked in' },
  { title: 'Year 1 continues', text: 'Agentic AI runs through Day 365 — this capstone marks a milestone, not an ending; deeper agent work, new tools, and multi-language AI ahead' },
  { title: 'Tomorrow: Day 154', text: 'the Agentic AI journey continues — same daily rhythm, next topic area incoming' },
];

const core = [
  {
    icon: '🎯', title: 'Capstone Milestone', titleClass: 'card-title-cyan', subtitle: 'Day 153 of 365',
    description: 'Capstone demo · golden suite · runbook · cost/latency guards · security drills · retro written · portfolio card live. A solid foundation — and Year 1 is only 42% done.',
    code: 'demo · goldens\nretro · portfolio',
  },
  {
    icon: '🧭', title: 'What Transfers Forward', titleClass: 'card-title-purple', subtitle: 'Keep',
    description: 'Agent loop · RAG/graph · multi-agent · LLMOps · edge/privacy · FinOps · chaos · flywheel — none of it is framework-specific. These skills compound across the remaining days.',
    code: 'loop · rag · ops\nedge · learn',
  },
  {
    icon: '🤖', title: 'Agentic AI Continues', titleClass: 'card-title-amber', subtitle: 'Days 154–365',
    description: 'Year 1 is a full 365-day Agentic AI immersion — Java, Python, and JavaScript/TypeScript. Day 153 is a capstone checkpoint; the deeper work is ahead.',
    code: 'year 1 · 365 days\njava · python · ts',
  },
];

const practice = [
  {
    icon: '🏷️', title: 'Tag Your Capstone Repo', titleClass: 'card-title-cyan', subtitle: 'Ship',
    description: 'Final commit on this capstone project, then tag it v1.0. This artifact outlives the journal — a reference point for everything built after.',
    code: 'commit → tag\nv1.0',
  },
  {
    icon: '📣', title: 'Share the Capstone', titleClass: 'card-title-purple', subtitle: 'Proof',
    description: 'Post your retro + demo publicly once. High-leverage move — one post compounds as the Year 1 journey continues.',
    code: 'post once\nhigh leverage',
  },
  {
    icon: '🔜', title: 'Day 154 — Continuing', titleClass: 'card-title-amber', subtitle: 'Agentic AI',
    description: 'Next topic in the Agentic AI Year 1 curriculum — same 4:30–7:30 AM rhythm, deeper into agents across languages.',
    link: { href: '/agentic-day-154', label: 'Day 154 →' },
  },
];

const resources = [
  {
    icon: '🤖', title: 'Agentic AI Track', titleClass: 'card-title-cyan', subtitle: 'Year 1',
    description: 'The full Agentic AI curriculum — 365 days studying agents in Java, Python, and JavaScript/TypeScript.',
    link: { href: '/genai', label: 'Open Agentic AI track →' },
  },
  {
    icon: '🔷', title: 'TypeScript Stack', titleClass: 'card-title-purple', subtitle: 'Year 2',
    description: 'The illustrated TypeScript series — where Year 2 begins after the full 365-day Agentic AI year wraps.',
    link: { href: '/typescript', label: 'Open TypeScript series →' },
  },
  {
    icon: '🗺️', title: '5-Year Roadmap', titleClass: 'card-title-amber', subtitle: 'Big Picture',
    description: 'See where Agentic AI Year 1 fits in the full 1,826-day plan — TypeScript, Java, Python, and DevOps ahead.',
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
      next={{ href: '/agentic-day-154', label: 'Day 154 →' }}
      tags={['Agentic AI', 'Capstone', 'Milestone']}
      theme="AGENTIC AI · CAPSTONE MILESTONE"
      heroIcon="🎯"
      profileRole="AGENTIC AI · DAY 153 OF 365"
      progressWidth="42%"
      summary={
        <>
          Day 153 — capstone shipped, golden suite complete, retro written.{' '}
          <strong>This is a milestone, not the end</strong> — Agentic AI runs for a full{' '}
          <strong>365 days</strong> (Year 1), studying agents in Java, Python, and JavaScript/TypeScript.
          Day 154 continues tomorrow with the same 4:30–7:30 AM rhythm.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Milestone', '#Day153', '#AgenticAI', '#Year1', '#FullLifecycleEngineer']}
    />
  );
}
