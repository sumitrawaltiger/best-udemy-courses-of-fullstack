import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Two-sided filters', text: 'screen both user input and model output, not just one side' },
  { title: 'Policy refusals', text: 'a clear allow/deny policy decides what the agent will not do' },
  { title: 'PII redaction', text: 'detect and mask personal data on the way in and out' },
  { title: 'Fail safe', text: 'when a filter is unsure, degrade to a safe refusal, not a guess' },
  { title: 'Explain the block', text: 'return a helpful reason instead of a silent drop' },
  { title: 'Tomorrow: Day 195', text: 'the security milestone ties the arc together' },
];

const core = [
  {
    icon: '🚧',
    title: 'Input Filter',
    titleClass: 'card-title-cyan',
    subtitle: 'Screen',
    description: 'Classify and block disallowed requests before the graph runs.',
    code: 'classify in\nblock bad',
  },
  {
    icon: '🧯',
    title: 'Output Filter',
    titleClass: 'card-title-purple',
    subtitle: 'Screen',
    description: 'Check responses for unsafe content and PII before they ship.',
    code: 'scan out\nredact/deny',
  },
  {
    icon: '📜',
    title: 'Refusal Policy',
    titleClass: 'card-title-amber',
    subtitle: 'Rule',
    description: 'A written allow/deny policy drives consistent, explainable refusals.',
    code: 'allow/deny\nwith reason',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Safety Lab',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Send disallowed and borderline prompts; confirm blocks carry a clear reason.',
    code: 'bad→deny\nwith why',
  },
  {
    icon: '🧷',
    title: 'PII Round-Trip',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Pass PII in and out and confirm it is masked on both sides.',
    code: 'PII→***\nin & out',
  },
  {
    icon: '🔜',
    title: 'Next: Milestone',
    titleClass: 'card-title-amber',
    subtitle: 'Day 195',
    description: 'Tomorrow — the security milestone.',
    link: { href: '/agentic-day-195', label: 'Go to Day 195 →' },
  },
];

const resources = [
  {
    icon: '🎯',
    title: 'Day 193',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Red-team suite these guardrails must pass.',
    link: { href: '/agentic-day-193', label: 'Open Day 193 →' },
  },
  {
    icon: '🔐',
    title: 'Day 133',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'Privacy controls this reuses.',
    link: { href: '/agentic-day-133', label: 'Open Day 133 →' },
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

export default function AgenticDay194() {
  return (
    <StandaloneJourneyPage
      dayNumber={194}
      series="Agentic AI"
      dateLabel="Agentic AI Day 194 · 3 Mar 2027"
      prev={{ href: '/agentic-day-193', label: '← Day 193' }}
      next={{ href: '/agentic-day-195', label: 'Day 195 →' }}
      tags={['Agentic AI', 'Safety', 'Runtime']}
      theme="GUARDRAILS & CONTENT SAFETY"
      heroIcon="🚧"
      profileRole="AGENTIC AI · SAFETY"
      progressWidth="69%"
      summary={
        <>
          Day 194 filters both sides. Screen <strong>input and output</strong>, redact PII, and make refusals
          explainable and fail-safe.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Safety', '#Day194', '#Guardrails', '#PII']}
    />
  );
}
