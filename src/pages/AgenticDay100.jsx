import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: '100-day arc', text: 'Python → Gen AI → Agentic → LLMOps → interview → AgentOps → coding/cloud → voice/browser/enterprise/UX' },
  { title: 'Portfolio proof', text: 'one shipped agent with eval, traces, and a demo beats ten unfinished tutorials' },
  { title: 'Patterns travel', text: 'loops, schemas, HITL, budgets, and observability outlast any single framework' },
  { title: 'Safety is product', text: 'allowlists, approvals, and redaction are features users feel as trust' },
  { title: 'Measure always', text: 'if you cannot score it, you cannot safely improve or promote it' },
  { title: 'Next hundred', text: 'multimodal, documents, analytics agents, governance, and deeper domain products' },
];

const core = [
  {
    icon: '🏁', title: 'What You Can Ship', titleClass: 'card-title-cyan', subtitle: 'Proof',
    description: 'RAG/agent graph, FastAPI edge, Docker/cloud path, eval suite, runbook, and a 5-minute demo story.',
    code: 'agent · API · cloud\neval · runbook · demo',
  },
  {
    icon: '🧭', title: 'Non-Negotiables', titleClass: 'card-title-purple', subtitle: 'Bar',
    description: 'Stop rules, tool schemas, HITL on writes, cost caps, and traces on every production run.',
    code: 'stop · schema · HITL\n$ cap · traces',
  },
  {
    icon: '🗺️', title: 'Days 101+', titleClass: 'card-title-amber', subtitle: 'Next',
    description: 'Vision, documents, analytics agents, governance — deepen products on the same foundations.',
    code: 'vision · docs\nanalytics · governance',
  },
];

const practice = [
  {
    icon: '🎬', title: '100-Day Demo', titleClass: 'card-title-cyan', subtitle: 'Show',
    description: 'Record a 5-minute walkthrough of your best agent: task → tools → approval → metrics.',
    code: 'task → live\n→ metrics',
  },
  {
    icon: '📝', title: 'Gap List', titleClass: 'card-title-purple', subtitle: 'Plan',
    description: 'Write three gaps for the next arc (e.g. vision, PDF, governance) and pick one to start Day 101.',
    code: '3 gaps → pick 1',
  },
  {
    icon: '🔜', title: 'Next: Multimodal', titleClass: 'card-title-amber', subtitle: 'Day 101',
    description: 'Tomorrow — vision and multimodal tool use for agents.',
    link: { href: '/agentic-day-101', label: 'Go to Day 101 →' },
  },
];

const resources = [
  {
    icon: '📘', title: 'Python Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Full Gen AI + Agentic curriculum behind this journal.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '🎨', title: 'UX Day 99', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'Product design habits that close the first hundred days.',
    link: { href: '/agentic-day-99', label: 'Open Day 99 →' },
  },
  {
    icon: '🎓', title: 'Cloud Milestone', titleClass: 'card-title-amber', subtitle: 'Day 95',
    description: 'Production cloud agent checklist from Phase 13.',
    link: { href: '/agentic-day-95', label: 'Open Day 95 →' },
  },
];

export default function AgenticDay100() {
  return (
    <StandaloneJourneyPage
      dayNumber={100}
      series="Agentic AI"
      dateLabel="Agentic AI Day 100 · 9 Dec 2026"
      prev={{ href: '/agentic-day-99', label: '← Day 99' }}
      next={{ href: '/agentic-day-101', label: 'Day 101 →' }}
      tags={['Agentic AI', 'Milestone', 'Phase 14']}
      theme="100 DAYS MILESTONE"
      heroIcon="🏁"
      profileRole="AGENTIC AI · MILESTONE"
      progressWidth="67%"
      summary={
        <>
          Day 100 closes the first hundred. Celebrate a <strong>shipped agent</strong>, lock the non-negotiables, and open
          the next arc into multimodal and domain products.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Day100', '#Milestone', '#AgenticAI', '#GenAI', '#Portfolio']}
    />
  );
}
