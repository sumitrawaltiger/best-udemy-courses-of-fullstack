import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Prompt systems', text: 'reusable templates beat one-off copied prompts' },
  { title: 'Layered instructions', text: 'role, task, constraints, and format each need a clear place' },
  { title: 'Few-shot helps', text: 'examples tighten output shape without code changes' },
  { title: 'Shorter is cheaper', text: 'tight prompts reduce token spend every call' },
  { title: 'Context hygiene', text: 'inject only relevant, attributable context' },
  { title: 'Version prompts', text: 'production prompts need owners and versions' },
];

const core = [
  { icon: '🧱', title: 'Prompt Stack', titleClass: 'card-title-cyan', subtitle: 'Structure', description: 'Split role, task, constraints, and output format so each piece is tunable.', code: 'role · task · constraints · format' },
  { icon: '🧪', title: 'Versioning', titleClass: 'card-title-purple', subtitle: 'Control', description: 'Store prompts like code and compare versions against the same eval set.', code: 'prompt_v2 -> eval -> ship' },
  { icon: '📏', title: 'Output Shape', titleClass: 'card-title-amber', subtitle: 'Consistency', description: 'Use explicit structure and examples so parsing stays stable.', code: 'schema + examples' },
];

const practice = [
  { icon: '🧪', title: 'Template Lab', titleClass: 'card-title-cyan', subtitle: 'Build', description: 'Turn one raw prompt into a reusable template with variables.', code: 'template + vars' },
  { icon: '🔍', title: 'Prompt Diff', titleClass: 'card-title-purple', subtitle: 'Compare', description: 'Run 10 fixed cases against two prompt versions and keep the winner.', code: 'A/B prompt eval' },
  { icon: '🔜', title: 'Next: APIs', titleClass: 'card-title-amber', subtitle: 'Day 57', description: 'Tomorrow -> backend patterns for Gen AI products.', link: { href: '/genai-day-57', label: 'Go to Day 57 ->' } },
];

const resources = [
  { icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub', description: 'Browse the full Gen AI lessons and curriculum on the site.', link: { href: '/genai', label: 'Open Gen AI Track ->' } },
  { icon: '📖', title: 'LangChain Prompts', titleClass: 'card-title-purple', subtitle: 'Docs', description: 'Prompt templates and reusable prompt composition patterns.', link: { href: 'https://js.langchain.com/docs/concepts/prompt_templates/', label: 'Open ->', external: true } },
  { icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember', description: 'A great prompt is a maintainable interface, not a lucky paragraph.', footer: 'Systematize prompts.' },
];

export default function GenaiDay56() {
  return (
    <StandaloneJourneyPage
      dayNumber={56}
      series="Gen AI"
      dateLabel="Gen AI Day 56 · 56 Aug 2026"
      prev={{ href: '/genai-day-55', label: '← Day 55' }}
      next={{ href: '/genai-day-57', label: 'Day 57 →' }}
      tags={['Gen AI', 'PromptOps', 'Day 56']}
      theme="PROMPT SYSTEMS & REUSABLE PATTERNS"
      heroIcon="🧩"
      profileRole="GEN AI · PROMPTS"
      progressWidth="38%"
      summary="Day 56 turns prompting into a system. Build reusable templates, layered instructions, and testable prompt versions instead of copying ad hoc text into every feature."
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#GenAI', '#PromptOps', '#Day56', '#Build', '#100DaysOfCode']}
    />
  );
}
