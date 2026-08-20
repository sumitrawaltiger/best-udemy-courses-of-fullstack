import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Offline is not online', text: 'CI evals catch known cases while production surfaces the unknown ones' },
  { title: 'Trace every run', text: 'spans for each node, tool call, token, and cost tied to a corr_id' },
  { title: 'Golden signals', text: 'latency, error rate, cost, and a live quality proxy per route' },
  { title: 'Sample and score', text: 'auto-grade a slice of live traffic with the same scorers from CI' },
  { title: 'Alert on drift', text: 'page when the quality proxy or spend crosses its band' },
  { title: 'Tomorrow: Day 189', text: 'ship changes safely with canary and rollback' },
];

const core = [
  {
    icon: '📡',
    title: 'Trace Spans',
    titleClass: 'card-title-cyan',
    subtitle: 'See',
    description: 'Wrap nodes and tool calls in spans carrying corr_id, tokens, and latency.',
    code: 'span: node\ncorr_id · ms',
  },
  {
    icon: '📈',
    title: 'Golden Signals',
    titleClass: 'card-title-purple',
    subtitle: 'Metrics',
    description: 'Track latency, errors, cost, and a quality proxy per route.',
    code: 'p95 · err\n$ · quality',
  },
  {
    icon: '🔔',
    title: 'Drift Alerts',
    titleClass: 'card-title-amber',
    subtitle: 'React',
    description: 'Alert when the live quality proxy or spend leaves its expected band.',
    code: 'quality↓\npage on-call',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Live Sample Score',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Sample 5% of runs, grade them with the CI scorers, and chart the daily trend.',
    code: '5% sample\ndaily score',
  },
  {
    icon: '🧯',
    title: 'Fire Drill',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Force a latency spike and confirm the alert fires and points to the slow span.',
    code: 'inject lag\nalert→span',
  },
  {
    icon: '🔜',
    title: 'Next: Canary',
    titleClass: 'card-title-amber',
    subtitle: 'Day 189',
    description: 'Tomorrow — safe rollout and rollback.',
    link: { href: '/agentic-day-189', label: 'Go to Day 189 →' },
  },
];

const resources = [
  {
    icon: '🚦',
    title: 'Day 187',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'CI gates that pair with this live watch.',
    link: { href: '/agentic-day-187', label: 'Open Day 187 →' },
  },
  {
    icon: '🧱',
    title: 'Day 184',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'Tenant fields these traces must carry.',
    link: { href: '/agentic-day-184', label: 'Open Day 184 →' },
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

export default function AgenticDay188() {
  return (
    <StandaloneJourneyPage
      dayNumber={188}
      series="Agentic AI"
      dateLabel="Agentic AI Day 188 · 25 Feb 2027"
      prev={{ href: '/agentic-day-187', label: '← Day 187' }}
      next={{ href: '/agentic-day-189', label: 'Day 189 →' }}
      tags={['Agentic AI', 'Observability', 'Runtime']}
      theme="ONLINE AGENT OBSERVABILITY"
      heroIcon="📡"
      profileRole="AGENTIC AI · OBSERVABILITY"
      progressWidth="66%"
      summary={
        <>
          Day 188 watches production. Emit <strong>traces and golden signals</strong>, auto-score a sample of live
          traffic, and alert on quality or cost drift.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Observability', '#Day188', '#Traces', '#Runtime']}
    />
  );
}
