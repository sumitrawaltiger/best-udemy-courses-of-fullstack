import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Long work dies on reboot', text: 'in-memory graphs lose HITL waits and half-done sagas when the process restarts' },
  { title: 'Checkpoint after effects', text: 'persist state after each successful tool side-effect, not only at the end' },
  { title: 'Saga thinking', text: 'multi-step business flows need compensate steps if a later hop fails' },
  { title: 'Idempotent resume', text: 'replaying a checkpoint must not double-charge or double-email' },
  { title: 'Timers as first-class', text: '“wait 2 days for the user” is a durable timer, not a thread.sleep' },
  { title: 'Human inbox is a wait state', text: 'approval is a checkpoint: parked, not busy-looped' },
  { title: 'Poison checkpoints', text: 'a bad payload must park the run, not crash-loop the worker' },
  { title: 'Tomorrow: Day 180', text: 'orchestration-at-scale milestone for this five-day arc' },
];

const core = [
  {
    icon: '💾',
    title: 'Checkpoint',
    titleClass: 'card-title-cyan',
    subtitle: 'Persist',
    description: 'Save graph state + last committed effect id. Resume from that cursor after deploy or crash.',
    code: 'effect -> persist\nresume cursor',
  },
  {
    icon: '🔁',
    title: 'Compensate',
    titleClass: 'card-title-purple',
    subtitle: 'Saga',
    description: 'If step 3 fails, run undo for 2 and 1 in reverse — or HITL if undo is unsafe.',
    code: '3 fail\nundo 2 · undo 1',
  },
  {
    icon: '⏳',
    title: 'Durable Wait',
    titleClass: 'card-title-amber',
    subtitle: 'Timers',
    description: 'Sleeps, SLAs, and approvals live in a store. Workers wake when the timer or event fires.',
    code: 'wait event|timer\nnot in RAM',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Kill Mid-Saga',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Crash the worker after step 2 of 3. Restart. Prove step 2 does not run twice.',
    code: 'crash after 2\nresume once',
  },
  {
    icon: '📋',
    title: 'Compensate Table',
    titleClass: 'card-title-purple',
    subtitle: 'Design',
    description: 'For create-ticket, send-email, charge-card: write the undo or HITL for each.',
    code: 'step → undo|HITL',
  },
  {
    icon: '🔜',
    title: 'Next: Milestone',
    titleClass: 'card-title-amber',
    subtitle: 'Day 180',
    description: 'Tomorrow — advanced orchestration milestone.',
    link: { href: '/agentic-day-180', label: 'Go to Day 180 →' },
  },
];

const resources = [
  {
    icon: '📨',
    title: 'Day 178',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Mesh messages that also need durable delivery.',
    link: { href: '/agentic-day-178', label: 'Open Day 178 →' },
  },
  {
    icon: '🏗️',
    title: 'Day 53',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'Idempotent pipelines that durable sagas depend on.',
    link: { href: '/agentic-day-53', label: 'Open Day 53 →' },
  },
  {
    icon: '📘',
    title: 'Temporal',
    titleClass: 'card-title-amber',
    subtitle: 'Durable',
    description: 'Industry pattern for durable workflows and timers.',
    link: { href: 'https://docs.temporal.io/workflows', label: 'Open →', external: true },
  },
];

export default function AgenticDay179() {
  return (
    <StandaloneJourneyPage
      dayNumber={179}
      series="Agentic AI"
      dateLabel="Agentic AI Day 179 · 25 Feb 2027"
      prev={{ href: '/agentic-day-178', label: '← Day 178' }}
      next={{ href: '/agentic-day-180', label: 'Day 180 →' }}
      tags={['Agentic AI', 'Durable', 'Sagas']}
      theme="DURABLE ORCHESTRATION & CHECKPOINTS"
      heroIcon="💾"
      profileRole="AGENTIC AI · DURABLE"
      progressWidth="61%"
      summary={
        <>
          Day 179 survives restarts. <strong>Checkpoint</strong> after side effects, <strong>compensate</strong> failed
          sagas, and treat approvals as durable waits — not RAM.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Durable', '#Day179', '#Sagas', '#Checkpoints']}
    />
  );
}
