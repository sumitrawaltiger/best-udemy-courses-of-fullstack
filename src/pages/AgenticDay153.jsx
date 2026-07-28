import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Graduation-ready', text: 'capstone demo, golden suite, runbook, cost/latency guards, and security drills all landed' },
  { title: 'What travels', text: 'loops, schemas, HITL, budgets, traces, flywheels, and eval beat any framework fad' },
  { title: 'Portfolio proof', text: 'one recorded demo + README + golden suite is stronger than a long unfinished course log' },
  { title: 'Trust is product', text: 'privacy, allowlists, and honest degrade modes are how users stay' },
  { title: 'Measure to improve', text: 'north star + guardrails keep shipping from becoming roulette' },
  { title: 'Two days left', text: 'tomorrow: retrospective + portfolio packaging, then the series finale' },
];

const core = [
  {
    icon: '🎓', title: 'Graduation Checklist', titleClass: 'card-title-cyan', subtitle: 'Done',
    description: 'Capstone demo · golden suite · runbook · cost/latency guards · security drills · feedback hook.',
    code: 'demo · goldens\nrunbook · guards',
  },
  {
    icon: '🧭', title: 'Pattern Library', titleClass: 'card-title-purple', subtitle: 'Keep',
    description: 'Agent loop · RAG/graph · multi-agent · LLMOps · edge/privacy · FinOps · chaos · flywheel.',
    code: 'loop · rag · ops\nedge · learn',
  },
  {
    icon: '🔜', title: 'After Day 153', titleClass: 'card-title-amber', subtitle: 'Next',
    description: 'Two wrap-up days ahead: a retrospective and portfolio pass, then the series closes for good.',
    code: 'retro · portfolio\n· finale',
  },
];

const practice = [
  {
    icon: '🎬', title: 'Final Demo', titleClass: 'card-title-cyan', subtitle: 'Show',
    description: 'Publish or share your 5-minute capstone walkthrough. Include one failure drill and one metric.',
    code: '5 min · fail\n· metric',
  },
  {
    icon: '📝', title: 'Portfolio Card', titleClass: 'card-title-purple', subtitle: 'Proof',
    description: 'One paragraph: problem, approach, safety, and result. Link demo + repo + eval summary.',
    code: 'problem → result\nlinks',
  },
  {
    icon: '🔜', title: 'Next: Retrospective', titleClass: 'card-title-amber', subtitle: 'Day 154',
    description: 'Tomorrow — step back, write the retro, and polish the portfolio for real eyes.',
    link: { href: '/agentic-day-154', label: 'Go to Day 154 →' },
  },
];

const resources = [
  {
    icon: '📘', title: 'Python Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Full Gen AI + Agentic curriculum and chapters.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '🎯', title: 'Day 151', titleClass: 'card-title-purple', subtitle: 'Capstone Start',
    description: 'Brief and architecture for your finale project.',
    link: { href: '/agentic-day-151', label: 'Open Day 151 →' },
  },
  {
    icon: '🏁', title: 'Day 100', titleClass: 'card-title-amber', subtitle: 'Earlier Milestone',
    description: 'First major arc close — same graduation energy.',
    link: { href: '/agentic-day-100', label: 'Open Day 100 →' },
  },
];

export default function AgenticDay153() {
  return (
    <StandaloneJourneyPage
      dayNumber={153}
      series="Agentic AI"
      dateLabel="Agentic AI Day 153 · 29 Dec 2026"
      prev={{ href: '/agentic-day-152', label: '← Day 152' }}
      next={{ href: '/agentic-day-154', label: 'Day 154 →' }}
      tags={['Agentic AI', 'Capstone', 'Phase 21']}
      theme="CAPSTONE DEMO DAY"
      heroIcon="🎓"
      profileRole="AGENTIC AI · CAPSTONE"
      progressWidth="99%"
      summary={
        <>
          Day 153 is <strong>capstone demo day</strong>. Graduate with a recorded demo, golden suite, and portfolio
          card — two wrap-up days remain before the series truly closes.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Capstone', '#Demo', '#Day153', '#AgenticAI', '#Portfolio']}
    />
  );
}
