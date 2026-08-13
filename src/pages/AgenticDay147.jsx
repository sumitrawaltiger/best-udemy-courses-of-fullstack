import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Safe updates', text: 'prompts and routers change often — never hot-edit production without gates' },
  { title: 'Canary first', text: 'ship to 5% traffic; compare eval + cost + latency before full rollout' },
  { title: 'Policy packs', text: 'version prompt+router+tool allowlist as one deployable pack' },
  { title: 'Auto-suggest, human approve', text: 'let analytics propose changes; a human merges them' },
  { title: 'Rollback ready', text: 'one-click pin to last-good pack when metrics dip' },
  { title: 'Frozen golden suite', text: 'no pack ships if golden tasks regress' },
  { title: 'Online ≠ unsupervised', text: 'don’t fine-tune from raw chat without filters and review' },
  { title: 'What’s next', text: 'updates are smarter when agents share a structured knowledge graph' },
];

const core = [
  {
    icon: '📦', title: 'Policy Pack', titleClass: 'card-title-cyan', subtitle: 'Version',
    description: 'Bundle prompt, router rules, and tool scopes. Tag pack@vN; pin in env config.',
    code: 'prompt+router\ntools → pack@vN',
  },
  {
    icon: '🐤', title: 'Canary Gate', titleClass: 'card-title-purple', subtitle: 'Rollout',
    description: '5% → compare success/cost/TTFT vs control → promote or rollback.',
    code: '5% canary\npromote | roll back',
  },
  {
    icon: '🧑‍💻', title: 'Human Merge', titleClass: 'card-title-amber', subtitle: 'Control',
    description: 'Auto-generated prompt diffs need review + golden-suite green before merge.',
    code: 'suggest → review\ngolden → merge',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Pack Diff', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Create pack@v2 with one prompt tweak. Diff it against v1 and list risk notes.',
    code: 'v1 → v2 diff\nrisk notes',
  },
  {
    icon: '🐤', title: 'Fake Canary', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Simulate canary metrics: cost up 20%. Decide promote vs rollback and write why.',
    code: 'cost +20%\n→ rollback?',
  },
  {
    icon: '🔜', title: 'Next: Knowledge Graph', titleClass: 'card-title-amber', subtitle: 'Day 148',
    description: 'Tomorrow — knowledge graphs for agents.',
    link: { href: '/agentic-day-148', label: 'Go to Day 148 →' },
  },
];

const resources = [
  {
    icon: '🔁', title: 'Flywheel Day 146', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Feedback that feeds these safe updates.',
    link: { href: '/agentic-day-146', label: 'Open Day 146 →' },
  },
  {
    icon: '🏭', title: 'LLMOps Day 61', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'Versioning habits for packs.',
    link: { href: '/agentic-day-61', label: 'Open Day 61 →' },
  },
  {
    icon: '🧪', title: 'A/B Day 124', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Experiment design for canaries.',
    link: { href: '/agentic-day-124', label: 'Open Day 124 →' },
  },
];

export default function AgenticDay147() {
  return (
    <StandaloneJourneyPage
      dayNumber={147}
      series="Agentic AI"
      dateLabel="Agentic AI Day 147 · 6 Jan 2027"
      prev={{ href: '/agentic-day-146', label: '← Day 146' }}
      next={{ href: '/agentic-day-148', label: 'Day 148 →' }}
      tags={['Agentic AI', 'Updates', 'Phase 20']}
      theme="SAFE ONLINE UPDATES & POLICY PACKS"
      heroIcon="📦"
      profileRole="AGENTIC AI · UPDATES"
      progressWidth="95%"
      summary={
        <>
          Day 147 updates without chaos. Ship <strong>versioned policy packs</strong>, canary at 5%, and require
          human merge plus golden-suite green.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#PolicyPack', '#Canary', '#Day147', '#LLMOps', '#AgenticAI']}
    />
  );
}
