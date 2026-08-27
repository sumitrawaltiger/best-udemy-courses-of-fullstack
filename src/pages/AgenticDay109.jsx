import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Incidents will happen', text: 'prepare for tool failures, bad plans, and unsafe outputs before launch' },
  { title: 'Runbooks matter', text: 'operators need a clear response plan under pressure' },
  { title: 'Kill switches', text: 'being able to pause a graph or disable a tool quickly reduces blast radius' },
  { title: 'Replayability', text: 'you need traces and versions to reproduce an incident accurately' },
  { title: 'Customer handling', text: 'support needs a path for complaints, flags, and corrections' },
  { title: 'Postmortems improve systems', text: 'each incident should harden prompts, policies, or tooling' },
];

const core = [
  { icon: '🚨', title: 'Incident Plan', titleClass: 'card-title-cyan', subtitle: 'Respond', description: 'Define how to detect, triage, pause, and recover from agent failures in production.', code: 'detect -> triage -> recover' },
  { icon: '⛔', title: 'Kill Switches', titleClass: 'card-title-purple', subtitle: 'Protect', description: 'Add fast controls to disable risky tools or force a safe fallback path.', code: 'disable -> fallback' },
  { icon: '🧾', title: 'Postmortems', titleClass: 'card-title-amber', subtitle: 'Learn', description: 'Document what failed, why it failed, and what prevents recurrence.', code: 'incident -> action items' },
];

const practice = [
  { icon: '🧪', title: 'Incident Drill', titleClass: 'card-title-cyan', subtitle: 'Build', description: 'Simulate one unsafe or broken run and walk through the response plan end to end.', code: 'drill -> respond' },
  { icon: '📕', title: 'Runbook Draft', titleClass: 'card-title-purple', subtitle: 'Ops', description: 'Write a one-page runbook with symptoms, checks, mitigations, and rollback steps.', code: 'symptoms -> rollback' },
  { icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-amber', subtitle: 'Day 110', description: 'Tomorrow -> a roadmap checkpoint for production agentic systems.', link: { href: '/agentic-day-110', label: 'Go to Day 110 ->' } },
];

const resources = [
  { icon: '📘', title: 'Python Track', titleClass: 'card-title-cyan', subtitle: 'Hub', description: 'Agentic + Gen AI modules feeding the broader roadmap.', link: { href: '/python', label: 'Open Python track ->' } },
  { icon: '📖', title: '12-Factor', titleClass: 'card-title-purple', subtitle: 'Ops', description: 'Useful operations mindset for agent services as well.', link: { href: 'https://12factor.net/', label: 'Open ->', external: true } },
  { icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember', description: 'A prepared team recovers faster and learns more from agent failures.', footer: 'Practice the incident.' },
];

export default function AgenticDay109() {
  return (
    <StandaloneJourneyPage
      dayNumber={109}
      dateLabel="Agentic AI Day 109 · 14 Dec 2026"
      prev={{ href: '/agentic-day-108', label: '← Day 108' }}
      next={{ href: '/agentic-day-110', label: 'Day 110 →' }}
      tags={['Agentic AI', 'Incident Readiness', 'Day 109']}
      theme="INCIDENT READINESS FOR AGENTS"
      heroIcon="🚨"
      profileRole="AGENTIC AI · INCIDENTS"
      progressWidth="73%"
      summary="Day 109 prepares the live system for failures: runbooks, kill switches, replayability, support paths, and postmortems that make agent operations safer."
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Incidents', '#Day109', '#Ops', '#100DaysOfCode']}
    />
  );
}
