import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Workflow QA is different', text: 'single prompts can pass while a full multi-step workflow still fails badly' },
  { title: 'Gate the full path', text: 'tests should exercise planning, tool calls, memory, and escalation together' },
  { title: 'Happy path is not enough', text: 'release gates need adversarial, degraded, and timeout scenarios too' },
  { title: 'State transitions need tests', text: 'queued, running, waiting approval, fallback, and completed paths all matter' },
  { title: 'Mock less, simulate more', text: 'thin end-to-end checks catch orchestration bugs that unit tests miss' },
  { title: 'Define release criteria', text: 'the team should know exactly what must be green before a rollout expands' },
  { title: 'Confidence is earned', text: 'good QA lets product and ops move faster with less fear' },
  { title: 'Tomorrow: Day 175', text: 'operational maturity and the habits that keep agents useful over time' },
];

const core = [
  {
    icon: '✅',
    title: 'Workflow Gates',
    titleClass: 'card-title-cyan',
    subtitle: 'Release',
    description: 'Gate the full multi-step workflow, not just isolated prompts or tools.',
    code: 'plan -> tool -> review -> done',
  },
  {
    icon: '🧱',
    title: 'State Coverage',
    titleClass: 'card-title-purple',
    subtitle: 'Test',
    description: 'Exercise status transitions, retries, fallbacks, and human approval states.',
    code: 'queued · running · fallback',
  },
  {
    icon: '⚠️',
    title: 'Adversarial Cases',
    titleClass: 'card-title-amber',
    subtitle: 'Protect',
    description: 'Include prompt injection, stale data, partial outages, and invalid tool outputs in release gates.',
    code: 'inject · stale · outage',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Five Workflow Tests',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Write five end-to-end tests that cover success, timeout, fallback, escalation, and rejection.',
    code: '5 paths, 1 release gate',
  },
  {
    icon: '📊',
    title: 'Release Checklist',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'List the exact criteria required to expand rollout after a canary.',
    code: 'eval + ops + incidents',
  },
  {
    icon: '🔜',
    title: 'Next: Maturity',
    titleClass: 'card-title-amber',
    subtitle: 'Day 175 · 5 Feb 2027',
    description: 'Tomorrow — the habits and standards of mature agent operations.',
    link: { href: '/agentic-day-175', label: 'Go to Day 175 →' },
  },
];

const resources = [
  {
    icon: '📘',
    title: 'OWASP LLM Top 10',
    titleClass: 'card-title-cyan',
    subtitle: 'Threats',
    description: 'Adversarial patterns your workflow tests should cover.',
    link: { href: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/', label: 'Open →', external: true },
  },
  {
    icon: '📖',
    title: 'Day 161',
    titleClass: 'card-title-purple',
    subtitle: 'Critic',
    description: 'Critic gates that QA scenarios should validate.',
    link: { href: '/agentic-day-161', label: 'Open Day 161 →' },
  },
  {
    icon: '🗺️',
    title: 'Day 170',
    titleClass: 'card-title-amber',
    subtitle: 'Rollout',
    description: 'Release control that depends on trustworthy gates.',
    link: { href: '/agentic-day-170', label: 'Open Day 170 →' },
  },
];

export default function AgenticDay174() {
  return (
    <StandaloneJourneyPage
      dayNumber={174}
      series="Agentic AI"
      dateLabel="Agentic AI Day 174 · 17 Feb 2027"
      prev={{ href: '/agentic-day-173', label: '← Day 173' }}
      next={{ href: '/agentic-day-175', label: 'Day 175 →' }}
      tags={['Agentic AI', 'QA', 'Release Gates']}
      theme="AGENT QA: END-TO-END WORKFLOW GATES & RELEASE CRITERIA"
      heroIcon="✅"
      profileRole="AGENTIC AI · QA"
      progressWidth="58%"
      summary={
        <>
          Day 174 raises the quality bar: test the <strong>entire workflow</strong>, include degraded and adversarial
          paths, and make release expansion depend on explicit gates rather than gut feel.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#QA', '#Day174', '#ReleaseGates', '#Testing']}
    />
  );
}
