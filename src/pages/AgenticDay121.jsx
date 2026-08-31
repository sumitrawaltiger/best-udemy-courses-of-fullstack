import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Plugin model', text: 'third parties extend your agent with tools/skills without forking the core runtime' },
  { title: 'Manifests', text: 'name, version, permissions, schemas, and webhook endpoints declared up front' },
  { title: 'Sandbox installs', text: 'new plugins run in a restricted tenant before org-wide enable' },
  { title: 'Permission scopes', text: 'read_mail vs send_mail — users grant the minimum at install time' },
  { title: 'Signature & review', text: 'signed packages + security review before listing in a marketplace' },
  { title: 'Version pins', text: 'agents pin plugin majors; breaking changes need explicit upgrades' },
  { title: 'Kill switch', text: 'disable a bad plugin globally without redeploying every agent' },
  { title: 'What’s next', text: 'plugins without metering leave money and abuse on the table' },
];

const core = [
  {
    icon: '🔌', title: 'Plugin Manifest', titleClass: 'card-title-cyan', subtitle: 'Contract',
    description: 'Declare tools, OAuth scopes, rate hints, and egress allowlists. Reject incomplete manifests.',
    code: 'name · version\nscopes · tools[]\negress allow',
  },
  {
    icon: '🧪', title: 'Staged Enable', titleClass: 'card-title-purple', subtitle: 'Rollout',
    description: 'Dev tenant → security scan → canary org → GA. Same promote discipline as prompts.',
    code: 'dev → scan\n→ canary → GA',
  },
  {
    icon: '🛑', title: 'Remote Disable', titleClass: 'card-title-amber', subtitle: 'Safety',
    description: 'Flag service can revoke a plugin id instantly; agents skip it on next tool discovery.',
    code: 'flag: plugin_off\n→ hide from list_tools',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Hello Plugin', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Write a manifest for a “weather” tool with scope read_location only. Install in a sandbox tenant.',
    code: 'manifest.json\nsandbox install',
  },
  {
    icon: '🔐', title: 'Scope Denial', titleClass: 'card-title-purple', subtitle: 'Safety',
    description: 'Try calling send_email without scope; prove the gateway blocks before the plugin runs.',
    code: 'missing scope → 403',
  },
  {
    icon: '🔜', title: 'Next: Metering', titleClass: 'card-title-amber', subtitle: 'Day 122',
    description: 'Tomorrow — billing and usage analytics for agent platforms.',
    link: { href: '/agentic-day-122', label: 'Go to Day 122 →' },
  },
];

const resources = [
  {
    icon: '🏛️', title: 'Platform Day 120', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Multi-domain gateway this marketplace plugs into.',
    link: { href: '/agentic-day-120', label: 'Open Day 120 →' },
  },
  {
    icon: '🔌', title: 'MCP Spec', titleClass: 'card-title-purple', subtitle: 'Protocol',
    description: 'Portable tool discovery patterns for plugins.',
    link: { href: 'https://modelcontextprotocol.io/', label: 'Open MCP →', external: true },
  },
  {
    icon: '🏭', title: 'LLMOps Day 61', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Version and promote stages that plugin rollouts reuse.',
    link: { href: '/agentic-day-61', label: 'Open Day 61 →' },
  },
];

export default function AgenticDay121() {
  return (
    <StandaloneJourneyPage
      dayNumber={121}
      series="Agentic AI"
      dateLabel="Agentic AI Day 121 · 30 Dec 2026"
      prev={{ href: '/agentic-day-120', label: '← Day 120' }}
      next={{ href: '/agentic-day-122', label: 'Day 122 →' }}
      tags={['Agentic AI', 'Plugins', 'Phase 17']}
      theme="AGENT MARKETPLACE & PLUGINS"
      heroIcon="🔌"
      profileRole="AGENTIC AI · PLUGINS"
      progressWidth="81%"
      summary={
        <>
          Day 121 opens the marketplace. Ship <strong>plugin manifests</strong>, scoped permissions, staged enablement,
          and a remote kill switch.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Plugins', '#Marketplace', '#Day121', '#MCP', '#AgenticAI']}
    />
  );
}
