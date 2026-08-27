import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Why synthetic', text: 'eval without leaking real customer chats — generate realistic tasks and docs' },
  { title: 'Simulation', text: 'fake users and tools with scripted behaviors to stress agent loops' },
  { title: 'Coverage matrix', text: 'intents × languages × edge cases — fill cells deliberately' },
  { title: 'Label carefully', text: 'synthetic still needs expected actions/answers or rubrics' },
  { title: 'Distribution shift', text: 'recalibrate when live traffic diverges from synthetic mix' },
  { title: 'Adversarial sets', text: 'include jailbreaks and prompt-injection docs in the suite' },
  { title: 'Privacy win', text: 'train graders and tune prompts on synthetic before touching production logs' },
  { title: 'What’s next', text: 'edge + privacy + synthetic eval closes a strong private-agent milestone' },
];

const core = [
  {
    icon: '🧬', title: 'Task Generator', titleClass: 'card-title-cyan', subtitle: 'Data',
    description: 'Templates + LLM rewrite produce N variants per intent with gold labels attached.',
    code: 'intent → variants\n+ gold label',
  },
  {
    icon: '🎮', title: 'Tool Simulator', titleClass: 'card-title-purple', subtitle: 'World',
    description: 'Mock CRM/email tools with failure modes (timeout, 429, empty). Agents must recover.',
    code: 'mock tools\nfail · retry · ok',
  },
  {
    icon: '📊', title: 'Coverage Board', titleClass: 'card-title-amber', subtitle: 'Gaps',
    description: 'Track which intents/languages are under-tested. Block release if critical cells are empty.',
    code: 'intent × lang\nempty → block',
  },
];

const practice = [
  {
    icon: '🧪', title: '50 Synthetic Tickets', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Generate 50 support tasks across 5 intents. Run your agent; report pass rate by intent.',
    code: '50 tasks · 5 intents\npass% table',
  },
  {
    icon: '🧨', title: 'Injection Doc', titleClass: 'card-title-purple', subtitle: 'Adversarial',
    description: 'Plant “ignore policy” in a retrieved doc; confirm the agent refuses and cites the plant.',
    code: 'inject → refuse',
  },
  {
    icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-amber', subtitle: 'Day 135',
    description: 'Tomorrow — edge & private agents milestone.',
    link: { href: '/agentic-day-135', label: 'Go to Day 135 →' },
  },
];

const resources = [
  {
    icon: '📏', title: 'Eval Day 50', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Offline eval foundations synthetic data feeds.',
    link: { href: '/agentic-day-50', label: 'Open Day 50 →' },
  },
  {
    icon: '🧪', title: 'Experiments Day', titleClass: 'card-title-purple', subtitle: 'Day 124',
    description: 'Online tests after synthetic gates pass.',
    link: { href: '/agentic-day-124', label: 'Open Day 124 →' },
  },
  {
    icon: '🔐', title: 'Privacy Day 133', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Why synthetic beats raw prod logs for early tuning.',
    link: { href: '/agentic-day-133', label: 'Open Day 133 →' },
  },
];

export default function AgenticDay134() {
  return (
    <StandaloneJourneyPage
      dayNumber={134}
      series="Agentic AI"
      dateLabel="Agentic AI Day 134 · 8 Jan 2027"
      prev={{ href: '/agentic-day-133', label: '← Day 133' }}
      next={{ href: '/agentic-day-135', label: 'Day 135 →' }}
      tags={['Agentic AI', 'Synthetic', 'Phase 18']}
      theme="SYNTHETIC DATA & AGENT SIMULATION"
      heroIcon="🧬"
      profileRole="AGENTIC AI · EVAL"
      progressWidth="89%"
      summary={
        <>
          Day 134 evals without leaks. Generate <strong>synthetic tasks</strong>, simulate flaky tools, and block
          releases when coverage cells are empty.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#SyntheticData', '#Simulation', '#Day134', '#Eval', '#AgenticAI']}
    />
  );
}
