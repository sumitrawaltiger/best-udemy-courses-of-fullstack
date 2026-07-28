import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Red teaming is continuous', text: 'threats evolve as features and tools expand' },
  { title: 'Attack the pipeline', text: 'test ingestion, retrieval, and tool calling, not just the chat UI' },
  { title: 'Adversarial eval sets', text: 'store attacks as permanent regression coverage' },
  { title: 'Policy is a system', text: 'rules + validators + approvals catch different failure modes' },
  { title: 'Measure safety', text: 'track blocked calls, unsafe output attempts, and jailbreak success rates' },
  { title: 'Fix by root cause', text: 'improve prompts, policies, tool constraints, and data quality' },
];

const core = [
  { icon: '🧪', title: 'Adversarial Suite', titleClass: 'card-title-cyan', subtitle: 'Test', description: 'Maintain an “attack set” for injection, exfiltration, and unsafe tool usage.', code: 'attack -> verify' },
  { icon: '🛡️', title: 'Layered Defenses', titleClass: 'card-title-purple', subtitle: 'Protect', description: 'Use policy gates, validators, allowlists, and HITL for risky actions.', code: 'validate + policy + HITL' },
  { icon: '📊', title: 'Safety Metrics', titleClass: 'card-title-amber', subtitle: 'Track', description: 'Measure safety outcomes like blocked calls and incident rate, not just accuracy.', code: 'blocked% · incidents' },
];

const practice = [
  { icon: '🧪', title: '20 Attacks', titleClass: 'card-title-cyan', subtitle: 'Build', description: 'Create 20 attacks for your app and store them as regression tests.', code: 'attack set' },
  { icon: '📋', title: 'Policy Review', titleClass: 'card-title-purple', subtitle: 'Harden', description: 'Review which tools are allowed and add allowlists/limits where needed.', code: 'capabilities -> limits' },
  { icon: '🔜', title: 'Next: Reliability', titleClass: 'card-title-amber', subtitle: 'Day 139', description: 'Tomorrow -> reliability engineering for Gen AI systems.', link: { href: '/genai-day-139', label: 'Go to Day 139 ->' } },
];

const resources = [
  { icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub', description: 'Browse the full Gen AI lessons and curriculum on the site.', link: { href: '/genai', label: 'Open Gen AI Track ->' } },
  { icon: '📖', title: 'MITRE ATLAS', titleClass: 'card-title-purple', subtitle: 'Threats', description: 'A catalog of adversarial tactics and techniques for AI systems.', link: { href: 'https://atlas.mitre.org/', label: 'Open ->', external: true } },
  { icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember', description: 'If it is not in the adversarial suite, it will regress.', footer: 'Store the attacks.' },
];

export default function GenaiDay138() {
  return (
    <StandaloneJourneyPage
      dayNumber={138}
      dateLabel="Gen AI Day 138 · 138 Aug 2026"
      prev={{ href: '/genai-day-137', label: '← Day 137' }}
      next={{ href: '/genai-day-139', label: 'Day 139 →' }}
      tags={['Gen AI', 'Red Team', 'Day 138']}
      theme="RED TEAMING & SAFETY EVALUATION"
      heroIcon="🧪"
      profileRole="GEN AI · SAFETY"
      progressWidth="92%"
      summary="Day 138 builds safety as an engineering loop: adversarial eval suites, layered defenses, measurable safety outcomes, and regression coverage for attacks."
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#GenAI', '#RedTeam', '#Day138', '#Safety', '#100DaysOfCode']}
    />
  );
}

