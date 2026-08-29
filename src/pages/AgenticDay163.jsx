import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Long-running runs need state', text: 'durable state enables pause/resume and makes failures recoverable' },
  { title: 'Checkpoint everything', text: 'store plan, partial results, and tool outcomes as checkpoints' },
  { title: 'Idempotent steps', text: 'each step must be replayable without doubling side effects' },
  { title: 'Async execution', text: 'queues keep UI responsive and smooth out spikes' },
  { title: 'Timeout budgets', text: 'budgets prevent stuck workflows and runaway costs' },
  { title: 'Human handoffs', text: 'HITL can be a checkpoint that resumes the run' },
  { title: 'Observability', text: 'track status transitions and reasons for each run' },
  { title: 'Tomorrow: Day 164', text: 'reliability patterns: retries, circuit breakers, and fallbacks' },
];

const core = [
  {
    icon: '💾',
    title: 'Durable State',
    titleClass: 'card-title-cyan',
    subtitle: 'Resume',
    description: 'Persist run state so you can resume after failure or approval without restarting everything.',
    code: 'run_id\nstate snapshots',
  },
  {
    icon: '🧱',
    title: 'Checkpointing',
    titleClass: 'card-title-purple',
    subtitle: 'Recover',
    description: 'Checkpoint after key tool calls so retries and partial progress are safe.',
    code: 'checkpoint -> next',
  },
  {
    icon: '🧵',
    title: 'Async Pipelines',
    titleClass: 'card-title-amber',
    subtitle: 'Scale',
    description: 'Use queues for long steps and apply backpressure during spikes.',
    code: 'enqueue -> worker',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Add Checkpoints',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Persist state after each tool call and support resume from the last checkpoint.',
    code: 'resume_from_step',
  },
  {
    icon: '📋',
    title: 'Status Model',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Define run states: queued, running, waiting_approval, failed, completed.',
    code: 'state machine',
  },
  {
    icon: '🔜',
    title: 'Next: Reliability',
    titleClass: 'card-title-amber',
    subtitle: 'Day 164 · 28 Jan 2027',
    description: 'Tomorrow — reliability engineering for agent pipelines.',
    link: { href: '/agentic-day-164', label: 'Go to Day 164 →' },
  },
];

const resources = [
  {
    icon: '📘',
    title: 'AWS Step Functions',
    titleClass: 'card-title-cyan',
    subtitle: 'Orchestration',
    description: 'Durable workflow orchestration patterns useful for agent pipelines.',
    link: { href: 'https://docs.aws.amazon.com/step-functions/', label: 'Open →', external: true },
  },
  {
    icon: '📖',
    title: 'AWS SQS',
    titleClass: 'card-title-purple',
    subtitle: 'Queues',
    description: 'Queue-based backpressure and async execution patterns.',
    link: { href: 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html', label: 'Open →', external: true },
  },
  {
    icon: '🗺️',
    title: 'Day 141',
    titleClass: 'card-title-amber',
    subtitle: 'Queues',
    description: 'Backpressure patterns inside agent systems.',
    link: { href: '/agentic-day-141', label: 'Open Day 141 →' },
  },
];

export default function AgenticDay163() {
  return (
    <StandaloneJourneyPage
      dayNumber={163}
      series="Agentic AI"
      dateLabel="Agentic AI Day 163 · 9 Feb 2027"
      prev={{ href: '/agentic-day-162', label: '← Day 162' }}
      next={{ href: '/agentic-day-164', label: 'Day 164 →' }}
      tags={['Agentic AI', 'Durable', 'Workflows']}
      theme="DURABLE STATE & LONG-RUNNING AGENT WORKFLOWS"
      heroIcon="💾"
      profileRole="AGENTIC AI · ORCHESTRATE"
      progressWidth="54%"
      summary={
        <>
          Day 163 makes agent runs durable: checkpoint state, support pause/resume, run long steps asynchronously, and
          treat HITL as a resumable state — not a dead end.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Workflows', '#Day163', '#Durable', '#StepFunctions']}
    />
  );
}

