import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Why DR for agents', text: 'an outage in one region shouldn\'t take down every tenant\'s agent access on the platform' },
  { title: 'RTO & RPO', text: 'recovery time objective and recovery point objective set how much downtime and data loss is acceptable' },
  { title: 'Active-active vs active-passive', text: 'run agents live in two regions at once, or fail over to a warm standby when the primary goes down' },
  { title: 'State replication', text: 'conversation history, memory, and traces replicate across regions too, not just the model calls' },
  { title: 'Chaos testing', text: 'deliberately kill a region in staging and confirm the platform actually fails over cleanly' },
  { title: 'Runbook rehearsal', text: 'a DR runbook that\'s never been rehearsed is a guess, not a plan — practice the failover for real' },
  { title: 'Residency vs DR tension', text: 'data-residency requirements and disaster-recovery replication can pull in opposite directions — plan for both' },
  { title: 'What\'s next', text: 'multi-agent collaboration across a platform that itself now spans regions' },
];

const core = [
  {
    icon: '🎯', title: 'RTO & RPO Targets', titleClass: 'card-title-cyan', subtitle: 'Set The Bar First',
    description: 'Decide how much downtime (RTO) and data loss (RPO) is acceptable before designing the failover — the targets drive the architecture.',
    code: 'RTO ≤ 5 min · RPO ≤ 30 sec',
  },
  {
    icon: '🌍', title: 'Active-Active vs Active-Passive', titleClass: 'card-title-purple', subtitle: 'Two Strategies',
    description: 'Active-active serves traffic from two regions simultaneously; active-passive keeps a warm standby ready to take over.',
    code: 'active-active: both serve traffic\nactive-passive: standby waits, then takes over',
  },
  {
    icon: '🔄', title: 'State Replication', titleClass: 'card-title-amber', subtitle: 'Not Just The Model',
    description: 'Memory, conversation history, and traces need cross-region replication — losing them mid-failover breaks continuity.',
    code: 'replicate(conversation_state, region_b)',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Run a Chaos Drill', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Kill one region in staging and time exactly how long it takes the platform to fail over cleanly.',
    code: 'kill(region_a) → measure failover_time',
  },
  {
    icon: '📕', title: 'Rehearse the DR Runbook', titleClass: 'card-title-purple', subtitle: 'Practice',
    description: 'Walk through the disaster-recovery runbook step by step with the team, not just read it.',
  },
  {
    icon: '🔜', title: 'Next: Multi-Agent Collaboration', titleClass: 'card-title-amber', subtitle: 'Day 127 Preview',
    description: 'Tomorrow — domain agents handing tasks to each other, safely.',
    link: { href: '/agentic-day-127', label: 'Go to Day 127 →' },
  },
];

const resources = [
  {
    icon: '🏘️', title: 'Multi-Tenant SaaS Hardening', titleClass: 'card-title-cyan', subtitle: 'Day 123',
    description: 'The tenant-isolation work from Day 123 has to survive a regional failover too.',
    link: { href: '/agentic-day-123', label: 'Open Day 123 →' },
  },
  {
    icon: '📈', title: 'Scaling LLM Services', titleClass: 'card-title-purple', subtitle: 'Day 68',
    description: 'Autoscaling and load-balancing patterns that extend naturally into a multi-region setup.',
    link: { href: '/agentic-day-68', label: 'Open Day 68 →' },
  },
  {
    icon: '🏭', title: 'LLMOps Foundations', titleClass: 'card-title-amber', subtitle: 'Day 61',
    description: 'The rollback-plan discipline from Day 61 is exactly what a DR runbook formalizes at scale.',
    link: { href: '/agentic-day-61', label: 'Open Day 61 →' },
  },
];

export default function AgenticDay126() {
  return (
    <StandaloneJourneyPage
      dayNumber={126}
      series="Agentic AI"
      dateLabel="Agentic AI Day 126 · 22 Dec 2026"
      prev={{ href: '/agentic-day-125', label: '← Day 125' }}
      next={{ href: '/agentic-day-127', label: 'Day 127 →' }}
      tags={['Agentic AI', 'Reliability', 'Phase 17']}
      theme="DISASTER RECOVERY & MULTI-REGION AGENTS"
      heroIcon="🌍"
      profileRole="AGENTIC AI · RELIABILITY"
      progressWidth="84%"
      summary={
        <>
          Day 126 hardens the platform against a bad day. <strong>RTO/RPO targets</strong>,{' '}
          <strong>active-active or active-passive</strong> failover, and <strong>state replication</strong>{' '}
          so a regional outage doesn't take every tenant down with it.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#DisasterRecovery', '#Day126', '#MultiRegion', '#100DaysOfCode']}
    />
  );
}
