import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'RevOps agents', text: 'qualify leads, draft outreach, update CRM — humans own the relationship close' },
  { title: 'CRM as source of truth', text: 'read/write through APIs with idempotency; never silent duplicate deals' },
  { title: 'Lead scoring assist', text: 'model suggests score + reasons; policy sets thresholds for auto vs human' },
  { title: 'Personalization bounds', text: 'use firmographics you are allowed to store — no creepy scraped PII' },
  { title: 'Sequence discipline', text: 'respect cadence, unsubscribe, and quiet hours as hard tool rules' },
  { title: 'Forecast hygiene', text: 'agents summarize pipeline risk; they do not invent closed-won' },
  { title: 'Audit sales actions', text: 'log every email draft and CRM field change with actor = agent:version' },
  { title: 'What’s next', text: 'research agents help humans think — different success metrics than outbound' },
];

const core = [
  {
    icon: '📈', title: 'Qualify → Draft', titleClass: 'card-title-cyan', subtitle: 'Flow',
    description: 'Ingest lead → enrich allowed fields → score with reasons → draft outreach → HITL send.',
    code: 'enrich → score\n→ draft → approve\n→ CRM update',
  },
  {
    icon: '🧾', title: 'CRM Contracts', titleClass: 'card-title-purple', subtitle: 'Data',
    description: 'Typed schemas for Contact/Deal updates. Reject unknown fields; require idempotency keys.',
    code: 'schema · idempotency\nreject unknown',
  },
  {
    icon: '🚫', title: 'Compliance Gates', titleClass: 'card-title-amber', subtitle: 'Rules',
    description: 'Block sends to unsubscribed, wrong region, or missing consent flags before the LLM runs.',
    code: 'consent · region\nunsub → deny',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Lead Card Agent', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Given a lead JSON, output score 1–5 with three reasons and a draft email — no send.',
    code: 'score + reasons\ndraft only',
  },
  {
    icon: '🔒', title: 'Unsub Block', titleClass: 'card-title-purple', subtitle: 'Safety',
    description: 'Flip unsubscribed=true and prove the send tool is unreachable.',
    code: 'unsub → deny send',
  },
  {
    icon: '🔜', title: 'Next: Research', titleClass: 'card-title-amber', subtitle: 'Day 118',
    description: 'Tomorrow — research and knowledge-work agents.',
    link: { href: '/agentic-day-118', label: 'Go to Day 118 →' },
  },
];

const resources = [
  {
    icon: '🎫', title: 'Support Day 116', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'HITL and citation habits that transfer to sales drafts.',
    link: { href: '/agentic-day-116', label: 'Open Day 116 →' },
  },
  {
    icon: '🏢', title: 'Enterprise Day', titleClass: 'card-title-purple', subtitle: 'Day 98',
    description: 'CRM/IT integration patterns for production agents.',
    link: { href: '/agentic-day-98', label: 'Open Day 98 →' },
  },
  {
    icon: '⚖️', title: 'Governance Day', titleClass: 'card-title-amber', subtitle: 'Day 104',
    description: 'Risk tiers for outbound and customer data use.',
    link: { href: '/agentic-day-104', label: 'Open Day 104 →' },
  },
];

export default function AgenticDay117() {
  return (
    <StandaloneJourneyPage
      dayNumber={117}
      series="Agentic AI"
      dateLabel="Agentic AI Day 117 · 18 Dec 2026"
      prev={{ href: '/agentic-day-116', label: '← Day 116' }}
      next={{ href: '/agentic-day-118', label: 'Day 118 →' }}
      tags={['Agentic AI', 'Sales', 'Phase 16']}
      theme="SALES & REVOPS AGENTS"
      heroIcon="📈"
      profileRole="AGENTIC AI · REVOPS"
      progressWidth="78%"
      summary={
        <>
          Day 117 builds pipeline agents. <strong>Score leads</strong>, draft outreach, update CRM — with consent gates
          and humans owning the close.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#RevOps', '#SalesAgents', '#Day117', '#CRM', '#AgenticAI']}
    />
  );
}
