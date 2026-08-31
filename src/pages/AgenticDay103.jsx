import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Analytics agents', text: 'ask questions in English; agent writes code against dataframes/SQL and returns charts/tables' },
  { title: 'Sandbox code', text: 'run generated Python in a jail — no network, limited CPU/RAM, timeout' },
  { title: 'Schema first', text: 'show column names/types to the model before it invents joins' },
  { title: 'Verify numbers', text: 're-run critical aggregations; never trust a single code path blindly' },
  { title: 'Plot discipline', text: 'require axis labels and units; reject empty or nonsense charts' },
  { title: 'SQL injection', text: 'parameterize queries; never concatenate user text into SQL' },
  { title: 'Row-level security', text: 'tenant filters applied in the tool layer, not left to the prompt' },
  { title: 'Explain the method', text: 'return the code/SQL used so humans can audit the answer' },
];

const core = [
  {
    icon: '📊', title: 'Ask → Code → Result', titleClass: 'card-title-cyan', subtitle: 'Loop',
    description: 'User question → generate pandas/SQL → execute in sandbox → summarize with the artifact attached.',
    code: 'question → code\n→ sandbox → answer\n+ artifact',
  },
  {
    icon: '🏝️', title: 'Sandbox Rules', titleClass: 'card-title-purple', subtitle: 'Safety',
    description: 'No outbound network, allowlist imports, kill after N seconds, cap dataframe size.',
    code: 'no net · allowlist\ntimeout · size cap',
  },
  {
    icon: '🔍', title: 'Audit Trail', titleClass: 'card-title-amber', subtitle: 'Trust',
    description: 'Persist the exact code/SQL and row counts. Analysts must be able to reproduce the number.',
    code: 'save code + SQL\nrowcount · hash',
  },
];

const practice = [
  {
    icon: '🧪', title: 'CSV Analyst', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Agent loads a sample CSV and answers: top categories by revenue. Show the pandas it ran.',
    code: 'load csv → groupby\n→ show code',
  },
  {
    icon: '🧨', title: 'Jail Test', titleClass: 'card-title-purple', subtitle: 'Security',
    description: 'Try import os / open("/etc/passwd") in generated code; confirm the sandbox blocks it.',
    code: 'attack → blocked',
  },
  {
    icon: '🔜', title: 'Next: Governance', titleClass: 'card-title-amber', subtitle: 'Day 104',
    description: 'Tomorrow — responsible AI and agent governance.',
    link: { href: '/agentic-day-104', label: 'Go to Day 104 →' },
  },
];

const resources = [
  {
    icon: '📘', title: 'Tools Day 49', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Tool contracts and safe side effects — same rules for code tools.',
    link: { href: '/agentic-day-49', label: 'Open Day 49 →' },
  },
  {
    icon: '🛡️', title: 'Guardrails Day', titleClass: 'card-title-purple', subtitle: 'Day 52',
    description: 'Policy gates before dangerous execution.',
    link: { href: '/agentic-day-52', label: 'Open Day 52 →' },
  },
  {
    icon: '📄', title: 'Documents Day', titleClass: 'card-title-amber', subtitle: 'Day 102',
    description: 'Structured data often starts as tables inside documents.',
    link: { href: '/agentic-day-102', label: 'Open Day 102 →' },
  },
];

export default function AgenticDay103() {
  return (
    <StandaloneJourneyPage
      dayNumber={103}
      series="Agentic AI"
      dateLabel="Agentic AI Day 103 · 12 Dec 2026"
      prev={{ href: '/agentic-day-102', label: '← Day 102' }}
      next={{ href: '/agentic-day-104', label: 'Day 104 →' }}
      tags={['Gen AI', 'Analytics', 'Phase 15']}
      theme="DATA ANALYSIS & CODE INTERPRETER AGENTS"
      heroIcon="📊"
      profileRole="GEN AI · ANALYTICS"
      progressWidth="69%"
      summary={
        <>
          Day 103 turns questions into numbers. Build <strong>analytics agents</strong> that write sandboxed code/SQL,
          verify results, and leave an audit trail.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Analytics', '#CodeInterpreter', '#Day103', '#AgenticAI', '#Data']}
    />
  );
}
