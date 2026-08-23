import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Arc 186–190', text: 'eval harness → CI gates → observability → canary → release milestone' },
  { title: 'Golden tasks', text: 'a fixed, versioned suite of prompts with expected outputs and rubrics' },
  { title: 'Score, do not vibe', text: 'grade each run 0–1 with exact-match, rubric, or LLM-judge scorers' },
  { title: 'Baseline first', text: 'record the current pass rate so the next change has a target to beat' },
  { title: 'Deterministic runs', text: 'pin model, temperature, and seed so scores stay comparable' },
  { title: 'Tomorrow: Day 187', text: 'wire this harness into CI as a regression gate' },
];

const core = [
  {
    icon: '📏',
    title: 'Golden Suite',
    titleClass: 'card-title-cyan',
    subtitle: 'Data',
    description: 'Version a fixed set of tasks with inputs, expected outputs, and a rubric per task.',
    code: 'tasks.jsonl\nid · input · rubric',
  },
  {
    icon: '⚖️',
    title: 'Scorers',
    titleClass: 'card-title-purple',
    subtitle: 'Grade',
    description: 'Mix exact-match, regex, and LLM-judge scorers, then average into one comparable score.',
    code: 'exact · rubric\njudge → 0–1',
  },
  {
    icon: '📊',
    title: 'Baseline',
    titleClass: 'card-title-amber',
    subtitle: 'Track',
    description: 'Store each run score with model and params so trends are visible over time.',
    code: 'run → score\npin model',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'First Run',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Run 20 golden tasks, print per-task scores, and save the aggregate as your baseline.',
    code: '20 tasks\nsave baseline',
  },
  {
    icon: '🧷',
    title: 'Pin Params',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Fix temperature and seed, re-run twice, and confirm identical scores.',
    code: 'temp=0 · seed\nstable score',
  },
  {
    icon: '🔜',
    title: 'Next: CI Gate',
    titleClass: 'card-title-amber',
    subtitle: 'Day 187',
    description: 'Tomorrow — fail the build when scores regress.',
    link: { href: '/agentic-day-187', label: 'Go to Day 187 →' },
  },
];

const resources = [
  {
    icon: '🏁',
    title: 'Day 185',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior Milestone',
    description: 'Runtime platform the eval loop now measures.',
    link: { href: '/agentic-day-185', label: 'Open Day 185 →' },
  },
  {
    icon: '🧭',
    title: 'Day 176',
    titleClass: 'card-title-purple',
    subtitle: 'Arc Start',
    description: 'Orchestration graphs these evals exercise.',
    link: { href: '/agentic-day-176', label: 'Open Day 176 →' },
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

export default function AgenticDay186() {
  return (
    <StandaloneJourneyPage
      dayNumber={186}
      series="Agentic AI"
      dateLabel="Agentic AI Day 186 · 25 Feb 2027"
      prev={{ href: '/agentic-day-185', label: '← Day 185' }}
      next={{ href: '/agentic-day-187', label: 'Day 187 →' }}
      tags={['Agentic AI', 'Evals', 'Quality']}
      theme="AGENT EVAL HARNESS & GOLDEN TASKS"
      heroIcon="📏"
      profileRole="AGENTIC AI · EVALS"
      progressWidth="65%"
      summary={
        <>
          Day 186 starts measuring quality. Build a <strong>golden-task eval harness</strong> that scores runs 0–1 and
          records a baseline to beat.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Evals', '#Day186', '#GoldenTasks', '#Quality']}
    />
  );
}
