import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Incidents need structure', text: 'panic is not a response plan; severity, ownership, and communication matter' },
  { title: 'Different failures need different playbooks', text: 'hallucinations, tool outages, policy leaks, and runaway costs are not the same incident' },
  { title: 'First step is containment', text: 'stop the harm before you start the full root-cause hunt' },
  { title: 'Kill switches must be obvious', text: 'operators should not hunt through five dashboards during an incident' },
  { title: 'User messaging is part of response', text: 'clear degrade messaging preserves trust during failures' },
  { title: 'After-action reviews teach', text: 'write what happened, why, and what changes because of it' },
  { title: 'Rehearsal reduces chaos', text: 'game days make production response much calmer and faster' },
  { title: 'Tomorrow: Day 173', text: 'closing the loop from production feedback back into offline improvement' },
];

const core = [
  {
    icon: '🚨',
    title: 'Incident Tiers',
    titleClass: 'card-title-cyan',
    subtitle: 'Classify',
    description: 'Define severity levels so the team knows who responds and how urgently.',
    code: 'sev1 · sev2 · sev3',
  },
  {
    icon: '🛑',
    title: 'Containment First',
    titleClass: 'card-title-purple',
    subtitle: 'Respond',
    description: 'Disable harmful paths, fall back safely, and communicate status before deeper analysis.',
    code: 'stop harm -> stabilize',
  },
  {
    icon: '📝',
    title: 'After-Action Review',
    titleClass: 'card-title-amber',
    subtitle: 'Learn',
    description: 'Every meaningful incident should produce fixes to policy, tooling, or training data.',
    code: 'what · why · change',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Write Playbooks',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Document response steps for tool outage, hallucination spike, and runaway spend.',
    code: 'scenario -> playbook',
  },
  {
    icon: '📊',
    title: 'Game Day',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Run a rehearsal where one critical dependency fails and the team must contain it.',
    code: 'inject fail -> recover',
  },
  {
    icon: '🔜',
    title: 'Next: Feedback Loop',
    titleClass: 'card-title-amber',
    subtitle: 'Day 173 · 25 Jan 2027',
    description: 'Tomorrow — how production incidents and misses should reshape datasets and evals.',
    link: { href: '/agentic-day-173', label: 'Go to Day 173 →' },
  },
];

const resources = [
  {
    icon: '📘',
    title: 'SRE Workbook',
    titleClass: 'card-title-cyan',
    subtitle: 'Incidents',
    description: 'Good operational material on incident practice and response routines.',
    link: { href: 'https://sre.google/workbook/table-of-contents/', label: 'Open →', external: true },
  },
  {
    icon: '📖',
    title: 'Day 164',
    titleClass: 'card-title-purple',
    subtitle: 'Reliability',
    description: 'Reliability controls that help incidents stay contained.',
    link: { href: '/agentic-day-164', label: 'Open Day 164 →' },
  },
  {
    icon: '🗺️',
    title: 'Day 169',
    titleClass: 'card-title-amber',
    subtitle: 'Approval',
    description: 'Human oversight patterns that matter during degraded modes.',
    link: { href: '/agentic-day-169', label: 'Open Day 169 →' },
  },
];

export default function AgenticDay172() {
  return (
    <StandaloneJourneyPage
      dayNumber={172}
      series="Agentic AI"
      dateLabel="Agentic AI Day 172 · 31 Jan 2027"
      prev={{ href: '/agentic-day-171', label: '← Day 171' }}
      next={{ href: '/agentic-day-173', label: 'Day 173 →' }}
      tags={['Agentic AI', 'Incidents', 'SRE']}
      theme="INCIDENT RESPONSE, CONTAINMENT & RECOVERY PLAYBOOKS"
      heroIcon="🚨"
      profileRole="AGENTIC AI · RESPOND"
      progressWidth="58%"
      summary={
        <>
          Day 172 brings incident discipline to agent systems: classify severity, contain harm fast, communicate clearly,
          and turn every serious failure into a concrete operational improvement.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Incidents', '#Day172', '#SRE', '#Recovery']}
    />
  );
}
