import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Why experiment', text: 'prompt/graph changes feel better — experiments prove they are better' },
  { title: 'Unit of assignment', text: 'assign users or sessions to variants; sticky assignment for the experiment window' },
  { title: 'Primary metric', text: 'pick one: task success, CSAT, or $/success — secondary metrics are guards' },
  { title: 'Guardrails', text: 'auto-stop if error rate or toxic output spikes on a variant' },
  { title: 'Sample size', text: 'do not call winners on 40 chats; precompute minimum N' },
  { title: 'Offline then online', text: 'pass golden eval first; only then canary live traffic' },
  { title: 'Trace tags', text: 'every run tagged experiment_id + variant for later analysis' },
  { title: 'What’s next', text: 'experiments + plugins + billing = a real agent SaaS milestone' },
];

const core = [
  {
    icon: '🧪', title: 'Assign → Serve', titleClass: 'card-title-cyan', subtitle: 'Flow',
    description: 'Hash user into A/B. Serve prompt/graph version. Log outcome metrics on done.',
    code: 'hash(user) → A|B\nserve version\nlog metric',
  },
  {
    icon: '🛡️', title: 'Auto-Stop', titleClass: 'card-title-purple', subtitle: 'Safety',
    description: 'If variant B’s fail rate exceeds A by threshold, disable B and page on-call.',
    code: 'Δ fail > τ\n→ kill B · page',
  },
  {
    icon: '📏', title: 'Offline Gate', titleClass: 'card-title-amber', subtitle: 'Quality',
    description: 'New variant must beat baseline on the golden set before any live percentage.',
    code: 'eval B ≥ A\n→ then canary',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Two-Prompt Test', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Run prompts A vs B on 30 golden tasks. Report win rate and average tokens.',
    code: 'A vs B · n=30\nwin% · tokens',
  },
  {
    icon: '🏷️', title: 'Tag Traces', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Add experiment_id and variant to your tracer. Confirm they appear in the UI.',
    code: 'tags: exp, variant',
  },
  {
    icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-amber', subtitle: 'Day 125',
    description: 'Tomorrow — Agent SaaS platform milestone.',
    link: { href: '/agentic-day-125', label: 'Go to Day 125 →' },
  },
];

const resources = [
  {
    icon: '📏', title: 'Eval Day 50', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Offline eval habits experiments build on.',
    link: { href: '/agentic-day-50', label: 'Open Day 50 →' },
  },
  {
    icon: '🔭', title: 'AgentOps Day 84', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'Traces and scores you slice by experiment variant.',
    link: { href: '/agentic-day-84', label: 'Open Day 84 →' },
  },
  {
    icon: '🚀', title: 'Deploy Day 63', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Canary rollouts — the live half of experimentation.',
    link: { href: '/agentic-day-63', label: 'Open Day 63 →' },
  },
];

export default function AgenticDay124() {
  return (
    <StandaloneJourneyPage
      dayNumber={124}
      series="Agentic AI"
      dateLabel="Agentic AI Day 124 · 20 Jul 2027"
      prev={{ href: '/agentic-day-123', label: '← Day 123' }}
      next={{ href: '/agentic-day-125', label: 'Day 125 →' }}
      tags={['Agentic AI', 'Experiments', 'Phase 17']}
      theme="A/B TESTING & EXPERIMENTATION FOR AGENTS"
      heroIcon="🧪"
      profileRole="AGENTIC AI · EXPERIMENTS"
      progressWidth="83%"
      summary={
        <>
          Day 124 proves changes. Run <strong>offline gates</strong>, sticky A/B assignment, and auto-stop guardrails
          before you crown a new prompt or graph.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Experimentation', '#ABTesting', '#Day124', '#Eval', '#AgenticAI']}
    />
  );
}
