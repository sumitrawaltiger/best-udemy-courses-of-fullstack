import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Arc 201–205', text: 'versioning → cost/perf → governance → audit → governance milestone' },
  { title: 'Prompts are code', text: 'system prompts and tool schemas live in version control, not a wiki' },
  { title: 'Model pinning', text: 'pin a model name + version; never let "latest" silently drift a production agent' },
  { title: 'Release train', text: 'every prompt/model change runs the golden suite before it can promote to prod' },
  { title: 'Rollback = revert', text: 'a bad release is a git revert + re-deploy, not manual edits in the console' },
  { title: 'Tomorrow: Day 202', text: 'cost and performance optimization for the agent fleet' },
];

const core = [
  {
    icon: '🏷️',
    title: 'Versioned Prompts',
    titleClass: 'card-title-cyan',
    subtitle: 'Track',
    description: 'Every system prompt, role charter, and tool schema is versioned with a sha and a semver tag.',
    code: 'prompt@v1.4.2\nsha: abc123',
  },
  {
    icon: '📌',
    title: 'Model Pins',
    titleClass: 'card-title-purple',
    subtitle: 'Freeze',
    description: 'Pin to a dated/versioned model endpoint, register the pin in config so drift is caught in CI.',
    code: 'model = gpt-e5\nNOT "latest"',
  },
  {
    icon: '🚦',
    title: 'Promote via Evals',
    titleClass: 'card-title-amber',
    subtitle: 'Promote',
    description: 'A candidate passes the golden suite → red-team → canary before prod gets the new version.',
    code: 'candidate →\nsuite → canary',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Drift Detection Lab',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Swap a pinned model to "latest" and confirm the build fails the drift-diff check.',
    code: 'latest →\nCI blocks',
  },
  {
    icon: '🧱',
    title: 'Prompt Changelog',
    titleClass: 'card-title-purple',
    subtitle: 'Docs',
    description: 'Add a changelog entry for a prompt tweak with expected behavior change and eval impact.',
    code: 'CHANGELOG\nv1.4.2: …',
  },
  {
    icon: '🔜',
    title: 'Next: Cost/Perf',
    titleClass: 'card-title-amber',
    subtitle: 'Day 202',
    description: 'Tomorrow — cost and performance optimization across the fleet.',
    link: { href: '/agentic-day-202', label: 'Go to Day 202 →' },
  },
];

const resources = [
  {
    icon: '🏁',
    title: 'Day 200',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior Milestone',
    description: 'Teams platform this governance layer extends.',
    link: { href: '/agentic-day-200', label: 'Open Day 200 →' },
  },
  {
    icon: '🚦',
    title: 'Day 187',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'CI gate pattern used to block un-pinned model drift.',
    link: { href: '/agentic-day-187', label: 'Open Day 187 →' },
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

export default function AgenticDay201() {
  return (
    <StandaloneJourneyPage
      dayNumber={201}
      series="Agentic AI"
      dateLabel="Agentic AI Day 201 · 13 Mar 2027"
      prev={{ href: '/agentic-day-200', label: '← Day 200' }}
      next={{ href: '/agentic-day-202', label: 'Day 202 →' }}
      tags={['Agentic AI', 'Governance', 'Versioning']}
      theme="PROMPT & MODEL VERSIONING"
      heroIcon="🏷️"
      profileRole="AGENTIC AI · GOVERNANCE"
      progressWidth="73%"
      summary={
        <>
          Day 201 starts the governance arc. Treat <strong>prompts and models as versioned, pin-able artifacts</strong>
          that promote through evals and canaries — never ship “latest”.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Governance', '#Day201', '#Versioning', '#MLOps']}
    />
  );
}
