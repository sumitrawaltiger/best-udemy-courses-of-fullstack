import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Usage analytics', text: 'track which agents, tools, and intents get used most — build on real usage, not guesses' },
  { title: 'Success beyond eval', text: 'task completion rate, user satisfaction, and time-to-resolution matter once it\'s live' },
  { title: 'A/B testing in prod', text: 'run two prompt/model versions behind the router and compare real outcomes, not just offline eval' },
  { title: 'Feedback loops', text: 'thumbs up/down and free-text feedback feed straight back into the next golden eval set' },
  { title: 'Drift detection', text: 'watch for eval scores or satisfaction quietly declining over weeks, not just at launch' },
  { title: 'Cohort analysis', text: 'some domains or tenants need different tuning — segment the metrics, don\'t average them away' },
  { title: 'Stakeholder dashboards', text: 'a business-facing view — tasks resolved, cost saved — sits beside the engineering one' },
  { title: 'What\'s next', text: 'agents handing tasks to other agents, and the governance that keeps a platform trustworthy' },
];

const core = [
  {
    icon: '📈', title: 'Usage & Success Metrics', titleClass: 'card-title-cyan', subtitle: 'Beyond Eval',
    description: 'Task completion rate, satisfaction score, and time-to-resolution — the numbers that matter once real users show up.',
    code: 'completion_rate · csat\ntime_to_resolution',
  },
  {
    icon: '⚖️', title: 'A/B Testing in Production', titleClass: 'card-title-purple', subtitle: 'Real Outcomes',
    description: 'Route a slice of traffic to a new prompt or model version and compare live results against the current one.',
    code: 'variant = router.assign(user, "prompt_v2", 10%)',
  },
  {
    icon: '🔁', title: 'Feedback → Eval Sets', titleClass: 'card-title-amber', subtitle: 'Close The Loop',
    description: 'Thumbs-down responses become new golden-set cases, so the eval suite grows from real failures.',
    code: 'if feedback == "bad": golden_set.add(case)',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Instrument One Metric', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Add task-completion tracking to one agent flow and build a one-panel dashboard for it.',
    code: 'log completion_rate per flow',
  },
  {
    icon: '🔬', title: 'Run a Prompt A/B Test', titleClass: 'card-title-purple', subtitle: 'Practice',
    description: 'Split traffic between two prompt versions for a week and compare completion rate and cost.',
  },
  {
    icon: '🔜', title: 'Next: Multi-Agent Collaboration', titleClass: 'card-title-amber', subtitle: 'Day 127 Preview',
    description: 'Tomorrow — domain agents handing tasks to each other, safely.',
    link: { href: '/agentic-day-127', label: 'Go to Day 127 →' },
  },
];

const resources = [
  {
    icon: '📏', title: 'Evaluating LLM Applications', titleClass: 'card-title-cyan', subtitle: 'Day 87',
    description: 'The eval discipline from Day 87 is exactly what feedback loops feed back into.',
    link: { href: '/agentic-day-87', label: 'Open Day 87 →' },
  },
  {
    icon: '📊', title: 'Monitoring & Observability', titleClass: 'card-title-purple', subtitle: 'Day 67',
    description: 'The golden signals from Day 67 form the engineering half of this analytics story.',
    link: { href: '/agentic-day-67', label: 'Open Day 67 →' },
  },
  {
    icon: '🎓', title: 'Domain Agents Portfolio', titleClass: 'card-title-amber', subtitle: 'Day 105',
    description: 'Prior milestone — the domain agents this analytics layer now measures.',
    link: { href: '/agentic-day-105', label: 'Open Day 105 →' },
  },
];

export default function AgenticDay126() {
  return (
    <StandaloneJourneyPage
      dayNumber={126}
      series="Agentic AI"
      dateLabel="Agentic AI Day 126 · 4 Dec 2026"
      prev={{ href: '/agentic-day-120', label: '← Day 120' }}
      next={{ href: '/agentic-day-127', label: 'Day 127 →' }}
      tags={['Agentic AI', 'Analytics', 'Phase 17']}
      theme="AGENT ANALYTICS & CONTINUOUS IMPROVEMENT"
      heroIcon="📊"
      profileRole="AGENTIC AI · ANALYTICS"
      progressWidth="84%"
      summary={
        <>
          Day 126 opens Phase 17. Measure the platform with real <strong>usage metrics</strong>, run{' '}
          <strong>A/B tests</strong> in production, and turn user <strong>feedback</strong> straight into the
          next eval set.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#AgentAnalytics', '#Day126', '#ABTesting', '#100DaysOfCode']}
    />
  );
}
