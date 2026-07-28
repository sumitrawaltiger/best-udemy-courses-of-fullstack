import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Phase 15 arc', text: 'vision → documents → analytics → governance → ship a domain agent' },
  { title: 'Domain agents', text: 'specialize for support, sales ops, research, or internal IT — same patterns, sharper tools' },
  { title: 'Portfolio bar', text: 'one vertical demo with multimodal or docs + sandbox + policy beats generic chatbots' },
  { title: 'Reuse the stack', text: 'schemas, RAG, HITL, traces, quotas — do not reinvent per domain' },
  { title: 'Story for interviews', text: 'problem → users → architecture → eval → risk tier → demo' },
  { title: 'Keep iterating', text: 'next gaps: deeper voice, marketplace plugins, or industry-specific compliance' },
];

const core = [
  {
    icon: '🎓', title: 'Milestone Build', titleClass: 'card-title-cyan', subtitle: 'Ship',
    description: 'Pick one domain. Deliver: tools + (vision|docs|analytics) + policy tier + eval ≥20 + README demo.',
    code: 'domain · tools\nmodality · policy\neval · demo',
  },
  {
    icon: '🧩', title: 'Pattern Kit', titleClass: 'card-title-purple', subtitle: 'Reuse',
    description: 'Agentic RAG, structured I/O, sandbox, streaming UX, quotas, incident runbook — assemble, do not rewrite.',
    code: 'RAG · schema\nsandbox · stream\nquota · IR',
  },
  {
    icon: '🗺️', title: '101–105 Map', titleClass: 'card-title-amber', subtitle: 'Arc',
    description: 'Multimodal → documents → analytics → governance → domain portfolio. The second hundred starts here.',
    code: 'see · read · compute\ngovern · specialize',
  },
];

const practice = [
  {
    icon: '🧪', title: 'One-Pager Spec', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Write the domain agent spec: users, tools, modality, risk tier, eval gates, success metric.',
    code: 'users · tools\ntier · eval · KPI',
  },
  {
    icon: '📦', title: 'Ship Checklist', titleClass: 'card-title-purple', subtitle: 'Done',
    description: 'Repo has demo script, eval table, policy note, and one trace screenshot.',
    code: 'demo · eval\npolicy · trace',
  },
  {
    icon: '🔜', title: 'Next: Support Agents', titleClass: 'card-title-amber', subtitle: 'Day 116',
    description: 'Continue Phase 16 — support, sales, research, internal copilots, then a multi-domain platform.',
    link: { href: '/agentic-day-116', label: 'Go to Day 116 →' },
  },
];

const resources = [
  {
    icon: '📘', title: 'Python Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Full Gen AI + Agentic curriculum.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '🏁', title: 'Day 100', titleClass: 'card-title-purple', subtitle: 'Milestone',
    description: 'First-hundred checkpoint before this phase.',
    link: { href: '/agentic-day-100', label: 'Open Day 100 →' },
  },
  {
    icon: '👁️', title: 'Day 101', titleClass: 'card-title-amber', subtitle: 'Start of 15',
    description: 'Multimodal agents — start of this arc.',
    link: { href: '/agentic-day-101', label: 'Open Day 101 →' },
  },
];

export default function AgenticDay105() {
  return (
    <StandaloneJourneyPage
      dayNumber={105}
      series="Agentic AI"
      dateLabel="Agentic AI Day 105 · 13 Nov 2026"
      prev={{ href: '/agentic-day-104', label: '← Day 104' }}
      next={{ href: '/agentic-day-116', label: 'Day 116 →' }}
      tags={['Agentic AI', 'Milestone', 'Phase 15']}
      theme="DOMAIN AGENTS PORTFOLIO MILESTONE"
      heroIcon="🎓"
      profileRole="AGENTIC AI · MILESTONE"
      progressWidth="70%"
      summary={
        <>
          Day 105 closes Phase 15. Ship one <strong>domain specialist agent</strong> using vision, documents, or
          analytics — with governance and eval proof.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#DomainAgents', '#Portfolio', '#Day105', '#Milestone', '#AgenticAI']}
    />
  );
}
