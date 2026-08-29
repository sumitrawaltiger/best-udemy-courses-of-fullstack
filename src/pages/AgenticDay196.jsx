import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Arc 196–200', text: 'specialization → handoffs → supervision → topologies → teams milestone' },
  { title: 'One agent is not enough', text: 'split the work by role so each agent does one narrow job well' },
  { title: 'Typed roles', text: 'planner, researcher, executor, reviewer, critic — pick, do not mix' },
  { title: 'Role = system prompt + tools', text: 'a role is a short system charter plus a narrow tool allowlist' },
  { title: 'No free role changes', text: 'an agent stays in-role; cross-role work goes through a handoff, not a pivot' },
  { title: 'Tomorrow: Day 197', text: 'typed handoffs and contracts between roles' },
];

const core = [
  {
    icon: '🎭',
    title: 'Role Catalog',
    titleClass: 'card-title-cyan',
    subtitle: 'Define',
    description: 'Name each role with a one-line charter and the exact tools it may call.',
    code: 'role: planner\ntools: [search,draft]',
  },
  {
    icon: '🧬',
    title: 'Split by Skill',
    titleClass: 'card-title-purple',
    subtitle: 'Divide',
    description: 'Break a workflow into roles that map cleanly onto model strengths and tool access.',
    code: 'research → write\n→ review',
  },
  {
    icon: '🚪',
    title: 'No Ad-Hoc Pivots',
    titleClass: 'card-title-amber',
    subtitle: 'Lock',
    description: 'If a role cannot handle the request, it hands off instead of improvising.',
    code: 'out of scope\n→ handoff',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Role Play Lab',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Run the same task as a generalist vs three roles; compare output quality and failure mode.',
    code: '1 agent vs 3\ncompare',
  },
  {
    icon: '📋',
    title: 'Role Charter Doc',
    titleClass: 'card-title-purple',
    subtitle: 'Docs',
    description: 'Write a one-page charter per role: purpose, in-scope, out-of-scope, tool allowlist.',
    code: 'charter v1\nper role',
  },
  {
    icon: '🔜',
    title: 'Next: Handoffs',
    titleClass: 'card-title-amber',
    subtitle: 'Day 197',
    description: 'Tomorrow — contracts and typed handoffs between roles.',
    link: { href: '/agentic-day-197', label: 'Go to Day 197 →' },
  },
];

const resources = [
  {
    icon: '🏁',
    title: 'Day 195',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior Milestone',
    description: 'Security platform this teams layer extends.',
    link: { href: '/agentic-day-195', label: 'Open Day 195 →' },
  },
  {
    icon: '🕸️',
    title: 'Day 176',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'Graph topologies this team layer runs inside.',
    link: { href: '/agentic-day-176', label: 'Open Day 176 →' },
  },
  {
    icon: '📘',
    title: 'Python Track',
    titleClass: 'card-title-amber',
    subtitle: 'Hub',
    description: 'Full Gen AI + Agentic curriculum.',
    link: { href: '/python', label: 'Open Python track →' },
  },
];

export default function AgenticDay196() {
  return (
    <StandaloneJourneyPage
      dayNumber={196}
      series="Agentic AI"
      dateLabel="Agentic AI Day 196 · 14 Mar 2027"
      prev={{ href: '/agentic-day-195', label: '← Day 195' }}
      next={{ href: '/agentic-day-197', label: 'Day 197 →' }}
      tags={['Agentic AI', 'Teams', 'Specialization']}
      theme="AGENT ROLES & SPECIALIZATION"
      heroIcon="🎭"
      profileRole="AGENTIC AI · TEAMS"
      progressWidth="70%"
      summary={
        <>
          Day 196 starts the teams arc. Split work into <strong>typed roles with narrow charters and tool allowlists</strong>
          instead of asking one agent to do everything.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#MultiAgent', '#Day196', '#Roles', '#Specialization']}
    />
  );
}
