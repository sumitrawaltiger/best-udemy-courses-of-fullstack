import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Enterprise Gen AI is a system', text: 'UX, data, evals, and operations matter as much as the model' },
  { title: 'Reference architecture helps', text: 'shared patterns reduce accidental complexity across features' },
  { title: 'Boundaries are healthy', text: 'separate orchestration, retrieval, policy, and UI responsibilities' },
  { title: 'Guardrails are layered', text: 'validation + policy + monitoring + fallback' },
  { title: 'Build for change', text: 'models, providers, and corpora evolve quickly in production' },
  { title: 'Design for observability', text: 'you should be able to explain any run end-to-end' },
];

const core = [
  { icon: '🏗️', title: 'Reference Architecture', titleClass: 'card-title-cyan', subtitle: 'Blueprint', description: 'Standardize the layers: UI, orchestration API, retrieval, policy, and telemetry.', code: 'UI -> API -> RAG -> policy -> logs' },
  { icon: '🧩', title: 'Clear Interfaces', titleClass: 'card-title-purple', subtitle: 'Contracts', description: 'Stabilize request/response shapes and version them like APIs.', code: 'v1 · v2 · rollback' },
  { icon: '📡', title: 'Traceability', titleClass: 'card-title-amber', subtitle: 'Explain', description: 'Store prompt versions, sources, tool calls, and decisions to replay runs.', code: 'run_id -> replay' },
];

const practice = [
  { icon: '🧪', title: 'System Diagram', titleClass: 'card-title-cyan', subtitle: 'Build', description: 'Draw the end-to-end architecture for one Gen AI feature including policy and telemetry.', code: 'one diagram' },
  { icon: '📋', title: 'Interface Versioning', titleClass: 'card-title-purple', subtitle: 'Harden', description: 'Add a version to your Gen AI API payloads and log it on every request.', code: 'api_version' },
  { icon: '🔜', title: 'Next: Compliance', titleClass: 'card-title-amber', subtitle: 'Day 137', description: 'Tomorrow -> compliance, residency, and enterprise constraints.', link: { href: '/genai-day-137', label: 'Go to Day 137 ->' } },
];

const resources = [
  { icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub', description: 'Browse the full Gen AI lessons and curriculum on the site.', link: { href: '/genai', label: 'Open Gen AI Track ->' } },
  { icon: '📖', title: 'NIST AI RMF', titleClass: 'card-title-purple', subtitle: 'Governance', description: 'A risk management framework useful for enterprise AI systems.', link: { href: 'https://www.nist.gov/itl/ai-risk-management-framework', label: 'Open ->', external: true } },
  { icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember', description: 'Enterprise success comes from repeatable architecture, not heroic prompts.', footer: 'Standardize the system.' },
];

export default function GenaiDay136() {
  return (
    <StandaloneJourneyPage
      dayNumber={136}
      dateLabel="Gen AI Day 136 · 136 Aug 2026"
      prev={{ href: '/genai-day-110', label: '← Day 110' }}
      next={{ href: '/genai-day-137', label: 'Day 137 →' }}
      tags={['Gen AI', 'Enterprise', 'Day 136']}
      theme="ENTERPRISE GEN AI ARCHITECTURE"
      heroIcon="🏗️"
      profileRole="GEN AI · ARCHITECTURE"
      progressWidth="91%"
      summary="Day 136 frames Gen AI as an enterprise system: layered architecture, stable interfaces, and traceability that makes production behavior explainable."
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#GenAI', '#Enterprise', '#Day136', '#Architecture', '#100DaysOfCode']}
    />
  );
}

