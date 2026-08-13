import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Capstone milestone', text: '153 days of Agentic AI — from "Hello, LangChain!" to a graded capstone with eval, traces, and security drills — and the journey is only half done' },
  { title: 'What travels', text: 'loops, schemas, HITL, budgets, traces, flywheels, and eval beat any framework fad' },
  { title: 'Portfolio proof', text: 'one recorded demo + README + golden suite is stronger than a long unfinished course log' },
  { title: 'Trust is product', text: 'privacy, allowlists, and honest degrade modes are how users stay' },
  { title: 'Measure to improve', text: 'north star + guardrails keep shipping from becoming roulette' },
  { title: '147 days remain', text: 'Agentic AI continues through Day 300 (2 Jun 2027) — deeper agent work, new tools, and production-grade pipelines ahead' },
  { title: 'Tomorrow: Day 154', text: 'the Agentic AI journey continues — same 4:30–7:30 AM rhythm, next topic area incoming' },
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
    icon: '🤖', title: 'Agentic AI Continues', titleClass: 'card-title-amber', subtitle: 'Days 154–300',
    description: 'Day 153 is a capstone checkpoint — 147 days of Agentic AI remain through Day 300 (2 Jun 2027). Deeper agent work, new tools, and multi-language pipelines ahead.',
    code: 'day 154 → day 300\n31 may 2027',
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
    icon: '🔜', title: 'Day 154 — Continuing', titleClass: 'card-title-amber', subtitle: 'Agentic AI',
    description: 'Next topic in the Agentic AI curriculum — same 4:30–7:30 AM rhythm, deeper into agents and production pipelines.',
    link: { href: '/agentic-day-154', label: 'Day 154 →' },
  },
];

const resources = [
  {
    icon: '🤖', title: 'Agentic AI Ahead', titleClass: 'card-title-cyan', subtitle: 'Days 154–300',
    description: 'The Agentic AI journal continues through Day 300 (2 Jun 2027) — deeper topics, more tools, production pipelines.',
    link: { href: '/agentic-day-154', label: 'Continue to Day 154 →' },
  },
  {
    icon: '🔷', title: 'TypeScript Stack', titleClass: 'card-title-purple', subtitle: 'Later — Skill 5',
    description: 'The illustrated TypeScript series — Skill 6 of 20 in the 2,000-day journey, after Python, FastAPI, Agentic AI, and JavaScript.',
    link: { href: '/typescript', label: 'Open TypeScript series →' },
  },
  {
    icon: '🗺️', title: '2,000-Day Roadmap', titleClass: 'card-title-amber', subtitle: 'Big Picture',
    description: 'See where Agentic AI (Days 201–300) fits in the full 20-skill, 2,000-day plan — Python → FastAPI → Agentic AI → JS → TS → React → … → Kubernetes → System Design → Capstone.',
    link: { href: '/roadmap', label: 'Open the roadmap →' },
  },
];

export default function AgenticDay153() {
  return (
    <StandaloneJourneyPage
      dayNumber={153}
      series="Agentic AI"
      dateLabel="Agentic AI Day 153 · 12 Jan 2027"
      prev={{ href: '/agentic-day-152', label: '← Day 152' }}
      next={{ href: '/agentic-day-154', label: 'Day 154 →' }}
      tags={['Agentic AI', 'Capstone', 'Milestone']}
      theme="AGENTIC AI CAPSTONE MILESTONE"
      heroIcon="🎯"
      profileRole="AGENTIC AI · MILESTONE"
      progressWidth="51%"
      summary={
        <>
          Day 153 is the <strong>capstone milestone</strong> — 153 days complete, capstone shipped, retro written.
          Tag your repo, share the progress once — <strong>Agentic AI continues through Day 300 (2 Jun 2027)</strong>,{' '}
          with 147 days of deeper agent work, new tools, and production pipelines still ahead.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Capstone', '#Milestone', '#Day153', '#AgenticAI', '#300Days']}
    />
  );
}
