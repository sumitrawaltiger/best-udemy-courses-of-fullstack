import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Product metrics', text: 'activation, retention, task success, and escalation rate — not just token counts' },
  { title: 'Funnel', text: 'open → first success → weekly active → paid/upgrade (if SaaS)' },
  { title: 'North star', text: 'pick one outcome metric (e.g. tickets resolved without human)' },
  { title: 'Cohorts', text: 'segment by plan, locale, and intent — averages lie' },
  { title: 'Quality vs growth', text: 'growth that tanks trust is fake progress — watch CSAT and refuse rates' },
  { title: 'Dashboards', text: 'ops board (latency/cost/errors) + product board (success/retention)' },
  { title: 'Alert with taste', text: 'page on SLO burn; don’t page on every thumb-down' },
  { title: 'What’s next', text: 'flywheel + packs + graph + analytics close a learning-systems milestone' },
];

const core = [
  {
    icon: '📈', title: 'North Star', titleClass: 'card-title-cyan', subtitle: 'Outcome',
    description: 'Define one primary success metric and 3 guardrails (cost, latency, safety refuses).',
    code: 'star + 3 guards\ncost · TTFT · safety',
  },
  {
    icon: '🧭', title: 'Funnel Board', titleClass: 'card-title-purple', subtitle: 'Growth',
    description: 'Track open → first success → WAU. Spot drop-offs by intent cohort.',
    code: 'open → success\n→ WAU',
  },
  {
    icon: '🔔', title: 'Dual Dashboards', titleClass: 'card-title-amber', subtitle: 'Views',
    description: 'Ops: errors/p95/cost. Product: success/escalation/CSAT. Different owners, shared run_ids.',
    code: 'ops | product\nshared run_id',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Metric Spec', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Write a one-pager: north star definition, SQL/pseudo query, and alert thresholds.',
    code: 'define · query\nalerts',
  },
  {
    icon: '📉', title: 'Drop-Off Hunt', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Find the biggest funnel drop. Propose one agent or UX fix with an expected lift.',
    code: 'biggest drop\n1 fix → lift?',
  },
  {
    icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-amber', subtitle: 'Day 150',
    description: 'Tomorrow — learning systems milestone.',
    link: { href: '/agentic-day-150', label: 'Go to Day 150 →' },
  },
];

const resources = [
  {
    icon: '🕸️', title: 'Graph Day 148', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Structured knowledge that analytics can attribute.',
    link: { href: '/agentic-day-148', label: 'Open Day 148 →' },
  },
  {
    icon: '💰', title: 'FinOps Day 136', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'Cost metrics as growth guardrails.',
    link: { href: '/agentic-day-136', label: 'Open Day 136 →' },
  },
  {
    icon: '📊', title: 'Quotas Day 58', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Usage limits that show up in product analytics.',
    link: { href: '/agentic-day-58', label: 'Open Day 58 →' },
  },
];

export default function AgenticDay149() {
  return (
    <StandaloneJourneyPage
      dayNumber={149}
      series="Agentic AI"
      dateLabel="Agentic AI Day 149 · 23 Jan 2027"
      prev={{ href: '/agentic-day-148', label: '← Day 148' }}
      next={{ href: '/agentic-day-150', label: 'Day 150 →' }}
      tags={['Agentic AI', 'Analytics', 'Phase 20']}
      theme="AGENT PRODUCT ANALYTICS"
      heroIcon="📈"
      profileRole="AGENTIC AI · PRODUCT"
      progressWidth="96%"
      summary={
        <>
          Day 149 measures what matters. Pick a <strong>north star</strong>, guardrails for cost/latency/safety, and
          dual ops + product dashboards.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#ProductAnalytics', '#NorthStar', '#Day149', '#Growth', '#AgenticAI']}
    />
  );
}
