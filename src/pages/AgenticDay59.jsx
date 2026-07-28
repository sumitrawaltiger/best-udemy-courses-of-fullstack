import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Agents fail in prod', text: 'loops, bad tools, provider outages, cost spikes — treat them as incidents' },
  { title: 'Severity levels', text: 'SEV1 total outage; SEV2 wrong answers at scale; SEV3 single-tenant pain' },
  { title: 'First 15 minutes', text: 'ack alert → check dashboards → freeze deploys → mitigate vs investigate' },
  { title: 'Mitigations', text: 'kill switch to FAQ, disable a tool, roll back graph version, open circuit' },
  { title: 'Comms', text: 'status page / Slack: impact, ETA, next update time — no silence' },
  { title: 'Evidence pack', text: 'trace ids, error rates, $ burn, recent deploys — before you guess' },
  { title: 'Postmortem', text: 'blameless: timeline, root cause, action items with owners and dates' },
  { title: 'Game days', text: 'practice injecting failure so the runbook is real before 3am' },
];

const core = [
  {
    icon: '🚨', title: 'Triage Card', titleClass: 'card-title-cyan', subtitle: 'SEV',
    description: 'Classify impact × urgency. SEV1 gets a war room; SEV3 gets a ticket and business hours.',
    code: 'impact × urgency\n→ SEV1|2|3',
  },
  {
    icon: '🧯', title: 'Mitigate First', titleClass: 'card-title-purple', subtitle: 'Stop Bleed',
    description: 'Prefer safe degradation over perfect root cause. Users need relief now; forensics can wait.',
    code: 'kill switch\nrollback · disable tool',
  },
  {
    icon: '📝', title: 'Postmortem', titleClass: 'card-title-amber', subtitle: 'Learn',
    description: 'Timeline → contributing factors → what went well → action items. Link traces and PRs.',
    code: 'timeline · cause\nactions · owners',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Write a Runbook', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'One page for loop rate spike: checks, dashboards, kill switch steps, rollback command.',
    code: 'symptom → checks\n→ mitigate → page',
  },
  {
    icon: '🎮', title: 'Tabletop Drill', titleClass: 'card-title-purple', subtitle: 'Practice',
    description: 'Simulate provider 500s for 10 minutes. Walk the runbook out loud with a timer.',
    code: '10-min drill\nfollow runbook',
  },
  {
    icon: '🔜', title: 'Next: Hardening Gate', titleClass: 'card-title-amber', subtitle: 'Day 60',
    description: 'Tomorrow — production checklist that bridges into LLMOps.',
    link: { href: '/agentic-day-60', label: 'Go to Day 60 →' },
  },
];

const resources = [
  {
    icon: '🏗️', title: 'Prod Pipelines', titleClass: 'card-title-cyan', subtitle: 'Day 53',
    description: 'Queues, retries, and runbooks — incident cousins.',
    link: { href: '/agentic-day-53', label: 'Open Day 53 →' },
  },
  {
    icon: '📡', title: 'Monitoring Day', titleClass: 'card-title-purple', subtitle: 'Day 64',
    description: 'Alerts and burn rates you will page on later in LLMOps.',
    link: { href: '/agentic-day-64', label: 'Open Day 64 →' },
  },
  {
    icon: '⏱️', title: 'Quotas Day', titleClass: 'card-title-amber', subtitle: 'Day 58',
    description: 'Circuit breakers that stop incidents from becoming bankruptcies.',
    link: { href: '/agentic-day-58', label: 'Open Day 58 →' },
  },
];

export default function AgenticDay59() {
  return (
    <StandaloneJourneyPage
      dayNumber={59}
      series="Agentic AI"
      dateLabel="Agentic AI Day 59 · 31 Aug 2026"
      prev={{ href: '/agentic-day-58', label: '← Day 58' }}
      next={{ href: '/agentic-day-60', label: 'Day 60 →' }}
      tags={['Production', 'Incidents', 'Phase 9b']}
      theme="INCIDENT RESPONSE FOR AGENTS"
      heroIcon="🚨"
      profileRole="AGENTIC AI · ON-CALL"
      progressWidth="39%"
      summary={
        <>
          Day 59 prepares on-call. Triage <strong>SEV levels</strong>, mitigate first, communicate clearly, and write
          blameless postmortems.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#OnCall', '#Incidents', '#Day59', '#SRE', '#AgenticAI']}
    />
  );
}
