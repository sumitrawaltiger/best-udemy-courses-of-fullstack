import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Channels differ', text: 'chat, email, voice, and tickets need different latency and tone budgets' },
  { title: 'One brain, many adapters', text: 'share the agent core; adapt prompts and UX per channel' },
  { title: 'Turn-taking', text: 'voice needs barge-in; email needs batching; chat needs streaming' },
  { title: 'Context packs', text: 'carry ticket history and CRM fields into every channel handoff' },
  { title: 'Tone guides', text: 'brand voice lives in system prompts and macros — not ad-hoc' },
  { title: 'Confirmations', text: 'high-risk actions need explicit confirm UX on every channel' },
  { title: 'What’s next', text: 'channels need reliable integrations into CRM and ticketing' },
];

const core = [
  {
    icon: '💬', title: 'Adapter Pattern', titleClass: 'card-title-cyan', subtitle: 'Channels',
    description: 'One planner/tools core. Thin adapters for chat, email, and voice I/O.',
    code: 'core agent\n+ channel adapters',
  },
  {
    icon: '⏱️', title: 'Latency Budgets', titleClass: 'card-title-purple', subtitle: 'SLO',
    description: 'Voice TTFT under 1s; email can take minutes; chat streams early status.',
    code: 'voice · chat · email\nbudgets differ',
  },
  {
    icon: '🎨', title: 'Tone Pack', titleClass: 'card-title-amber', subtitle: 'Brand',
    description: 'Channel-specific tone snippets composed into the system prompt.',
    code: 'tone pack\nper channel',
  },
];

const practice = [
  {
    icon: '🧪', title: '3-Channel Spec', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Write latency, tone, and confirm rules for chat vs email vs voice.',
    code: '3 channels\nrules table',
  },
  {
    icon: '📝', title: 'Context Pack', titleClass: 'card-title-purple', subtitle: 'Design',
    description: 'List fields every adapter must pass into the agent (ticket, user, SLA).',
    code: 'required fields',
  },
  {
    icon: '🔜', title: 'Next: Integrations', titleClass: 'card-title-amber', subtitle: 'Day 112',
    description: 'Tomorrow — CRM and ticket system integrations.',
    link: { href: '/agentic-day-112', label: 'Go to Day 112 →' },
  },
];

const resources = [
  {
    icon: '🎨', title: 'UX Day 99', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Confirmations and error copy.',
    link: { href: '/agentic-day-99', label: 'Open Day 99 →' },
  },
  {
    icon: '🏁', title: 'Day 110', titleClass: 'card-title-purple', subtitle: 'Prior Milestone',
    description: 'Ops milestone this product bridge builds on.',
    link: { href: '/agentic-day-110', label: 'Open Day 110 →' },
  },
  {
    icon: '🎫', title: 'Day 116', titleClass: 'card-title-amber', subtitle: 'Ahead',
    description: 'Support agents that use these channels.',
    link: { href: '/agentic-day-116', label: 'Open Day 116 →' },
  },
];

export default function AgenticDay111() {
  return (
    <StandaloneJourneyPage
      dayNumber={111}
      series="Agentic AI"
      dateLabel="Agentic AI Day 111 · 10 Dec 2026"
      prev={{ href: '/agentic-day-110', label: '← Day 110' }}
      next={{ href: '/agentic-day-112', label: 'Day 112 →' }}
      tags={['Agentic AI', 'Channels', 'Phase 16a']}
      theme="CHANNEL & CONVERSATION DESIGN"
      heroIcon="💬"
      profileRole="AGENTIC AI · CHANNELS"
      progressWidth="73%"
      summary={
        <>
          Day 111 designs the front door. One agent core, <strong>channel adapters</strong>, and tone/latency rules per surface.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Channels', '#ConversationDesign', '#Day111', '#UX', '#AgenticAI']}
    />
  );
}
