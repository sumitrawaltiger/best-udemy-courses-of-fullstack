import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Series complete', text: 'this is the last Agentic AI journal day — you have the full pattern library' },
  { title: 'What travels', text: 'loops, schemas, HITL, budgets, traces, flywheels, and eval beat any framework fad' },
  { title: 'Portfolio proof', text: 'one recorded demo + README + golden suite is stronger than a long unfinished course log' },
  { title: 'Trust is product', text: 'privacy, allowlists, and honest degrade modes are how users stay' },
  { title: 'Measure to improve', text: 'north star + guardrails keep shipping from becoming roulette' },
  { title: 'Keep going', text: 'return to Python track lessons, fill journal gaps, or deepen one vertical in production' },
  { title: 'Teach forward', text: 'the best next step is helping someone else ship their first safe agent' },
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
    icon: '🗺️', title: 'After Day 153', titleClass: 'card-title-amber', subtitle: 'Next',
    description: 'Ship in a real domain, mentor a peer, or revisit weak phases — the journal ends; the craft continues.',
    code: 'ship · mentor\nrevisit · grow',
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
    icon: '🏠', title: 'Journey Complete', titleClass: 'card-title-amber', subtitle: 'Hub',
    description: 'Agentic AI journal ends here. Return to the hub or the Python track.',
    link: { href: '/python', label: 'Open Python track →' },
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
      dateLabel="Agentic AI Day 153 · 31 Dec 2026"
      prev={{ href: '/agentic-day-152', label: '← Day 152' }}
      next={{ href: '/python', label: 'Python Track →' }}
      tags={['Agentic AI', 'Finale', 'Phase 21']}
      theme="AGENTIC AI SERIES FINALE"
      heroIcon="🎓"
      profileRole="AGENTIC AI · GRADUATION"
      progressWidth="100%"
      summary={
        <>
          Day 153 is the <strong>last Agentic AI day</strong>. Graduate with a demo, golden suite, and portfolio card —
          then keep shipping in the real world.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Graduation', '#Finale', '#Day153', '#AgenticAI', '#Portfolio']}
    />
  );
}
