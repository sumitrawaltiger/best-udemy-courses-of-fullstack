import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Supervisor is a role', text: 'a dedicated agent reviews outputs and chooses approve / send-back / escalate' },
  { title: 'Three-outcome loop', text: 'every reviewer returns ✅ approve, ↩️ rework with reasons, or 🚨 escalate' },
  { title: 'Review rubric, not taste', text: 'the supervisor checks a written rubric, not its personal opinion' },
  { title: 'Escalation is fast', text: 'above a confidence threshold or after N reworks, a human decides, not the model' },
  { title: 'Conflict resolution', text: 'when two roles disagree, the supervisor applies the rubric or escalates' },
  { title: 'Tomorrow: Day 199', text: 'team topologies — pick the right shape for the job' },
];

const core = [
  {
    icon: '🧐',
    title: 'Review Rubric',
    titleClass: 'card-title-cyan',
    subtitle: 'Standard',
    description: 'A written checklist the supervisor scores against; each criterion has a pass/fail threshold.',
    code: 'rubric: [c1,c2]\nscore each',
  },
  {
    icon: '🔁',
    title: 'Approve / Rework / Escalate',
    titleClass: 'card-title-purple',
    subtitle: 'Outcomes',
    description: 'Three clear exits with structured reasons; no silent passes and no infinite loops.',
    code: '✅ ↩️ 🚨\nreasons + cap',
  },
  {
    icon: '👤',
    title: 'Human Escalation',
    titleClass: 'card-title-amber',
    subtitle: 'HITL',
    description: 'On rework cap, low confidence, or high stakes — park and route to a human with context.',
    code: 'cap hit →\nqueue human',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Review Lab',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Feed a flawed output and confirm rework with line-level reasons, not a vague complaint.',
    code: 'flawed →\nrework(lines)',
  },
  {
    icon: '🚦',
    title: 'Escalation Cap',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Set N=2 reworks, then confirm the third attempt routes to human instead of looping.',
    code: 'N=2 → 3rd\n→ HITL',
  },
  {
    icon: '🔜',
    title: 'Next: Topologies',
    titleClass: 'card-title-amber',
    subtitle: 'Day 199',
    description: 'Tomorrow — pipeline, swarm, and hierarchy shapes.',
    link: { href: '/agentic-day-199', label: 'Go to Day 199 →' },
  },
];

const resources = [
  {
    icon: '📦',
    title: 'Day 197',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Handoff contracts the supervisor sits behind.',
    link: { href: '/agentic-day-197', label: 'Open Day 197 →' },
  },
  {
    icon: '🪜',
    title: 'Day 139',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'Human-in-the-loop patterns this extends to multi-agent.',
    link: { href: '/agentic-day-139', label: 'Open Day 139 →' },
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

export default function AgenticDay198() {
  return (
    <StandaloneJourneyPage
      dayNumber={198}
      series="Agentic AI"
      dateLabel="Agentic AI Day 198 · 13 Mar 2027"
      prev={{ href: '/agentic-day-197', label: '← Day 197' }}
      next={{ href: '/agentic-day-199', label: 'Day 199 →' }}
      tags={['Agentic AI', 'Teams', 'Supervision']}
      theme="SUPERVISION & ESCALATION LOOPS"
      heroIcon="🧐"
      profileRole="AGENTIC AI · TEAMS"
      progressWidth="71%"
      summary={
        <>
          Day 198 puts a supervisor in the loop. Use a <strong>rubric-driven three-outcome reviewer</strong> that
          approves, returns with reasons, or escalates to a human.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#MultiAgent', '#Day198', '#Supervision', '#HITL']}
    />
  );
}
