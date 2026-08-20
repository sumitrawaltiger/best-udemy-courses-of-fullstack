import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Phase bridge', text: 'channels → integrations → routing/SLA → knowledge → ready for domains' },
  { title: 'Product bar', text: 'a support-ready agent can adapt channels, write safely to CRM, and cite policy' },
  { title: 'Demo story', text: 'chat ticket → route → macro/RAG → HITL → CRM note → escalate pack' },
  { title: 'Scorecard', text: 'adapter coverage · idempotent writes · SLA drills · cite-or-refuse' },
  { title: 'Next phase', text: 'Days 116+ deepen support, RevOps, research, and internal IT' },
  { title: 'Keep shipping', text: 'reuse this kit for every vertical instead of rebuilding chatbots' },
];

const core = [
  {
    icon: '🏁', title: 'Checklist', titleClass: 'card-title-cyan', subtitle: 'Ship',
    description: 'Channel adapters · CRM tools · router/SLA · macro+RAG · escalation packs.',
    code: 'channels · CRM\nroute · knowledge',
  },
  {
    icon: '🎬', title: '5-Min Demo', titleClass: 'card-title-purple', subtitle: 'Show',
    description: 'Live ticket through route, grounded reply, CRM write, and one escalate.',
    code: 'route · reply\nwrite · escalate',
  },
  {
    icon: '🗺️', title: '111–115 Map', titleClass: 'card-title-amber', subtitle: 'Arc',
    description: 'Design surfaces → plug systems → route work → curate answers → ship.',
    code: 'surface · plug\nroute · curate',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Sign-Off Score', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Rate 0–2 on channels, integrations, routing, knowledge. Fix the lowest.',
    code: 'score 0–2\nfix weakest',
  },
  {
    icon: '📦', title: 'Bridge README', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Document adapters, tools, router table, and macro ownership for the team.',
    code: 'adapters · tools\nrouter · macros',
  },
  {
    icon: '🔜', title: 'Next: Support Agents', titleClass: 'card-title-amber', subtitle: 'Day 116',
    description: 'Continue — customer support agent systems.',
    link: { href: '/agentic-day-116', label: 'Go to Day 116 →' },
  },
];

const resources = [
  {
    icon: '💬', title: 'Day 111', titleClass: 'card-title-cyan', subtitle: 'Start',
    description: 'Channel design — start of this bridge.',
    link: { href: '/agentic-day-111', label: 'Open Day 111 →' },
  },
  {
    icon: '🏁', title: 'Day 110', titleClass: 'card-title-purple', subtitle: 'Prior',
    description: 'Ops milestone before this bridge.',
    link: { href: '/agentic-day-110', label: 'Open Day 110 →' },
  },
  {
    icon: '🎫', title: 'Day 116', titleClass: 'card-title-amber', subtitle: 'Next',
    description: 'Support agent systems.',
    link: { href: '/agentic-day-116', label: 'Open Day 116 →' },
  },
];

export default function AgenticDay115() {
  return (
    <StandaloneJourneyPage
      dayNumber={115}
      series="Agentic AI"
      dateLabel="Agentic AI Day 115 · 13 Dec 2026"
      prev={{ href: '/agentic-day-114', label: '← Day 114' }}
      next={{ href: '/agentic-day-116', label: 'Day 116 →' }}
      tags={['Agentic AI', 'Milestone', 'Phase 16a']}
      theme="DOMAIN-READY AGENTS MILESTONE"
      heroIcon="🏁"
      profileRole="AGENTIC AI · MILESTONE"
      progressWidth="75%"
      summary={
        <>
          Day 115 closes the bridge. Ship a <strong>domain-ready kit</strong>: channels, CRM tools, routing/SLA, and cited knowledge.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Milestone', '#DomainReady', '#Day115', '#Support', '#AgenticAI']}
    />
  );
}
