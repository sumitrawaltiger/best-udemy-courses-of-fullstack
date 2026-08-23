import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'ToolOps is real', text: 'tool catalogs, versioning, and ownership become operational concerns' },
  { title: 'Discovery needs limits', text: 'not every available tool should be exposed in every context' },
  { title: 'Compatibility matters', text: 'tool schema changes can silently break agent behavior' },
  { title: 'Observability per tool', text: 'measure latency, failure rate, and argument quality by tool' },
  { title: 'Ownership prevents drift', text: 'every tool should have a clear maintainer and change policy' },
  { title: 'Retire aggressively', text: 'unused or overlapping tools add confusion and attack surface' },
];

const core = [
  { icon: '🛠️', title: 'Tool Catalog', titleClass: 'card-title-cyan', subtitle: 'Inventory', description: 'Maintain a catalog of tools, owners, schemas, and approved use cases.', code: 'tool -> owner -> contract' },
  { icon: '📈', title: 'Per-Tool Metrics', titleClass: 'card-title-purple', subtitle: 'Measure', description: 'Track success rate, latency, retries, and blocked calls for each tool independently.', code: 'tool metrics dashboard' },
  { icon: '🚫', title: 'Tool Hygiene', titleClass: 'card-title-amber', subtitle: 'Reduce', description: 'Remove stale or overlapping tools so the agent has fewer confusing choices.', code: 'retire stale tools' },
];

const practice = [
  { icon: '🧪', title: 'Catalog Review', titleClass: 'card-title-cyan', subtitle: 'Build', description: 'List your tools, their schemas, owners, and what each should be used for.', code: 'tool inventory' },
  { icon: '📋', title: 'Deprecation Plan', titleClass: 'card-title-purple', subtitle: 'Ops', description: 'Mark one redundant tool for removal and define the migration path.', code: 'deprecate -> migrate' },
  { icon: '🔜', title: 'Next: PolicyOps', titleClass: 'card-title-amber', subtitle: 'Day 108', description: 'Tomorrow -> operating policy engines and access boundaries.', link: { href: '/agentic-day-108', label: 'Go to Day 108 ->' } },
];

const resources = [
  { icon: '📘', title: 'MCP', titleClass: 'card-title-cyan', subtitle: 'Tools', description: 'Reference for standardized tool servers and capabilities.', link: { href: 'https://modelcontextprotocol.io/', label: 'Open ->', external: true } },
  { icon: '📖', title: 'Python Track', titleClass: 'card-title-purple', subtitle: 'Hub', description: 'Agentic + Gen AI modules feeding the broader roadmap.', link: { href: '/python', label: 'Open Python track ->' } },
  { icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember', description: 'Every extra tool is both a capability and a liability.', footer: 'Curate the toolbox.' },
];

export default function AgenticDay107() {
  return (
    <StandaloneJourneyPage
      dayNumber={107}
      dateLabel="Agentic AI Day 107 · 8 Dec 2026"
      prev={{ href: '/agentic-day-106', label: '← Day 106' }}
      next={{ href: '/agentic-day-108', label: 'Day 108 →' }}
      tags={['Agentic AI', 'ToolOps', 'Day 107']}
      theme="OPERATING TOOL ECOSYSTEMS"
      heroIcon="🛠️"
      profileRole="AGENTIC AI · TOOLOPS"
      progressWidth="72%"
      summary="Day 107 turns tools into an operational system: inventories, metrics, owners, compatibility, and deprecation discipline."
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#ToolOps', '#Day107', '#MCP', '#100DaysOfCode']}
    />
  );
}
