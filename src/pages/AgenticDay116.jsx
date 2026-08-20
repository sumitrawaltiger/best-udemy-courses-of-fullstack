import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Support agents', text: 'ticket in → retrieve policy/docs → draft → approve → send — with clear SLAs' },
  { title: 'Channel mix', text: 'email, chat, voice — same brain, different adapters and latency budgets' },
  { title: 'Macro + RAG', text: 'canned macros for common intents; RAG for long-tail policy questions' },
  { title: 'Tone & brand', text: 'style guides in system prompts; never invent refunds or legal promises' },
  { title: 'Handoff', text: 'escalate to humans with full context pack — do not make the customer repeat' },
  { title: 'CSAT loop', text: 'thumbs + reason codes feed eval and prompt improvements' },
  { title: 'PII walls', text: 'mask card numbers and secrets in traces and model context' },
  { title: 'What’s next', text: 'sales agents optimize pipeline — different KPIs, same safety patterns' },
];

const core = [
  {
    icon: '🎫', title: 'Ticket Loop', titleClass: 'card-title-cyan', subtitle: 'Flow',
    description: 'Ingest ticket → classify intent → retrieve → draft → HITL if policy-sensitive → send → log.',
    code: 'classify → retrieve\n→ draft → approve?\n→ send → log',
  },
  {
    icon: '📚', title: 'Policy RAG', titleClass: 'card-title-purple', subtitle: 'Ground',
    description: 'Answers cite help-center pages. No cite → refuse or escalate instead of guessing.',
    code: 'answer + [article]\nno cite → escalate',
  },
  {
    icon: '🙋', title: 'Warm Handoff', titleClass: 'card-title-amber', subtitle: 'Human',
    description: 'Pass summary, attempts, citations, and customer sentiment to the human queue.',
    code: 'summary · attempts\ncites · sentiment',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Refund Path', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Agent drafts a refund reply but cannot issue money without approval. Prove the block.',
    code: 'draft ok\nrefund → HITL',
  },
  {
    icon: '📏', title: '10-Ticket Eval', titleClass: 'card-title-purple', subtitle: 'Score',
    description: 'Score groundedness + tone on 10 golden tickets. Fail promote if < 80% pass.',
    code: '10 tickets\n≥ 0.8 pass',
  },
  {
    icon: '🔜', title: 'Next: Sales Agents', titleClass: 'card-title-amber', subtitle: 'Day 117',
    description: 'Tomorrow — RevOps and sales pipeline agents.',
    link: { href: '/agentic-day-117', label: 'Go to Day 117 →' },
  },
];

const resources = [
  {
    icon: '📘', title: 'Domain Milestone', titleClass: 'card-title-cyan', subtitle: 'Day 105',
    description: 'Portfolio bar for vertical agents.',
    link: { href: '/agentic-day-105', label: 'Open Day 105 →' },
  },
  {
    icon: '🧭', title: 'Agentic RAG', titleClass: 'card-title-purple', subtitle: 'Day 81',
    description: 'Retrieve/grade loops for policy answers.',
    link: { href: '/agentic-day-81', label: 'Open Day 81 →' },
  },
  {
    icon: '🎨', title: 'UX Day 99', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Confirmations and error copy for support UIs.',
    link: { href: '/agentic-day-99', label: 'Open Day 99 →' },
  },
];

export default function AgenticDay116() {
  return (
    <StandaloneJourneyPage
      dayNumber={116}
      series="Agentic AI"
      dateLabel="Agentic AI Day 116 · 14 Dec 2026"
      prev={{ href: '/agentic-day-115', label: '← Day 115' }}
      next={{ href: '/agentic-day-117', label: 'Day 117 →' }}
      tags={['Agentic AI', 'Support', 'Phase 16']}
      theme="CUSTOMER SUPPORT AGENT SYSTEMS"
      heroIcon="🎫"
      profileRole="AGENTIC AI · SUPPORT"
      progressWidth="77%"
      summary={
        <>
          Day 116 builds support agents. Wire <strong>ticket loops</strong>, policy RAG, and warm human handoffs without
          inventing refunds or legal promises.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#SupportAgents', '#CX', '#Day116', '#RAG', '#AgenticAI']}
    />
  );
}
