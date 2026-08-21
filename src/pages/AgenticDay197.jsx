import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Handoff is a contract', text: 'passing work between roles needs a typed envelope, not free text' },
  { title: 'Schema first', text: 'every handoff has a named payload: context, task, assumptions, acceptance criteria' },
  { title: 'Assumptions explicit', text: 'the sender writes down what it assumed so the receiver can disagree' },
  { title: 'Accept before run', text: 'the receiver validates the handoff; if it is incomplete, it sends it back' },
  { title: 'Traceable hop', text: 'each handoff carries corr_id, role_from, role_to, and a timestamp' },
  { title: 'Tomorrow: Day 198', text: 'supervisor loops and escalation paths' },
];

const core = [
  {
    icon: '📦',
    title: 'Typed Envelope',
    titleClass: 'card-title-cyan',
    subtitle: 'Payload',
    description: 'A JSON schema for every handoff: context, task, assumptions, done criteria, references.',
    code: 'Handoff{task,\nassumptions,accept}',
  },
  {
    icon: '✅',
    title: 'Accept-or-Return',
    titleClass: 'card-title-purple',
    subtitle: 'Validate',
    description: 'Receiver checks completeness; returns the handoff with a gap list instead of guessing.',
    code: 'accept OR\nreturn(gaps)',
  },
  {
    icon: '🔗',
    title: 'Handoff Trace',
    titleClass: 'card-title-amber',
    subtitle: 'Trace',
    description: 'Every hop is logged: from → to → payload hash → result so the chain is auditable.',
    code: 'A→B→C\nhash + result',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Bad Handoff Lab',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Send an underspecified handoff and confirm the receiver returns a gap list, not a guess.',
    code: 'incomplete →\nreturn gaps',
  },
  {
    icon: '🧱',
    title: 'Schema Tests',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Write JSON-schema tests that reject a handoff missing required fields or assumptions.',
    code: 'schema valid\nOR fail',
  },
  {
    icon: '🔜',
    title: 'Next: Supervision',
    titleClass: 'card-title-amber',
    subtitle: 'Day 198',
    description: 'Tomorrow — supervisor agents and escalation loops.',
    link: { href: '/agentic-day-198', label: 'Go to Day 198 →' },
  },
];

const resources = [
  {
    icon: '🎭',
    title: 'Day 196',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Role catalog these handoffs connect.',
    link: { href: '/agentic-day-196', label: 'Open Day 196 →' },
  },
  {
    icon: '🧾',
    title: 'Day 127',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'Structured-output patterns the handoff schemas build on.',
    link: { href: '/agentic-day-127', label: 'Open Day 127 →' },
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

export default function AgenticDay197() {
  return (
    <StandaloneJourneyPage
      dayNumber={197}
      series="Agentic AI"
      dateLabel="Agentic AI Day 197 · 5 Mar 2027"
      prev={{ href: '/agentic-day-196', label: '← Day 196' }}
      next={{ href: '/agentic-day-198', label: 'Day 198 →' }}
      tags={['Agentic AI', 'Teams', 'Handoffs']}
      theme="HANDOFFS & ROLE CONTRACTS"
      heroIcon="📦"
      profileRole="AGENTIC AI · TEAMS"
      progressWidth="70%"
      summary={
        <>
          Day 197 writes the contract between roles. Use <strong>typed handoff schemas with explicit assumptions and
          accept-or-return validation</strong> so nothing gets lost in translation.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#MultiAgent', '#Day197', '#Handoffs', '#Contracts']}
    />
  );
}
