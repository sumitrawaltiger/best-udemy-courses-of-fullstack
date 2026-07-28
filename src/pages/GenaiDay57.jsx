import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Thin backend', text: 'the backend should orchestrate models, retrieval, logging, and policy checks' },
  { title: 'Stable contracts', text: 'frontends need predictable request and response shapes' },
  { title: 'Secrets stay server-side', text: 'provider keys belong in the backend, not the browser' },
  { title: 'Validation first', text: 'sanitize inputs before they hit the model' },
  { title: 'Streaming matters', text: 'partial output improves perceived speed' },
  { title: 'Fallbacks', text: 'define safe behavior when providers fail or slow down' },
];

const core = [
  { icon: '🌐', title: 'API Contract', titleClass: 'card-title-cyan', subtitle: 'Interface', description: 'Expose one stable contract for chat, summarize, extract, or retrieval flows.', code: 'POST /generate' },
  { icon: '🔐', title: 'Secret Boundary', titleClass: 'card-title-purple', subtitle: 'Security', description: 'Keep keys and internal prompts on the server and inject them only at execution time.', code: 'client -> API -> model' },
  { icon: '📡', title: 'Streaming', titleClass: 'card-title-amber', subtitle: 'UX', description: 'Send partial output early so users see progress before completion.', code: 'stream -> render' },
];

const practice = [
  { icon: '🧪', title: 'API Slice', titleClass: 'card-title-cyan', subtitle: 'Build', description: 'Create one endpoint that wraps a prompt template and returns structured output.', code: 'input -> validated output' },
  { icon: '📋', title: 'Error Map', titleClass: 'card-title-purple', subtitle: 'Ops', description: 'Define timeout, validation error, and fallback behavior clearly.', code: '4xx · 5xx · fallback' },
  { icon: '🔜', title: 'Next: UX', titleClass: 'card-title-amber', subtitle: 'Day 58', description: 'Tomorrow -> shipping a real Gen AI user workflow end to end.', link: { href: '/genai-day-58', label: 'Go to Day 58 ->' } },
];

const resources = [
  { icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub', description: 'Browse the full Gen AI lessons and curriculum on the site.', link: { href: '/genai', label: 'Open Gen AI Track ->' } },
  { icon: '📖', title: 'FastAPI', titleClass: 'card-title-purple', subtitle: 'API', description: 'Reference patterns for building typed API layers quickly.', link: { href: 'https://fastapi.tiangolo.com/', label: 'Open ->', external: true } },
  { icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember', description: 'A Gen AI feature becomes a product only when the interface is stable.', footer: 'Contracts over chaos.' },
];

export default function GenaiDay57() {
  return (
    <StandaloneJourneyPage
      dayNumber={57}
      series="Gen AI"
      dateLabel="Gen AI Day 57 · 57 Aug 2026"
      prev={{ href: '/genai-day-56', label: '← Day 56' }}
      next={{ href: '/genai-day-58', label: 'Day 58 →' }}
      tags={['Gen AI', 'Backend', 'Day 57']}
      theme="GEN AI BACKENDS & API DESIGN"
      heroIcon="🔌"
      profileRole="GEN AI · BACKEND"
      progressWidth="39%"
      summary="Day 57 moves from prompts to product backends. Design a thin API layer, protect secrets, normalize requests, and expose Gen AI features through stable contracts."
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#GenAI', '#Backend', '#Day57', '#API', '#100DaysOfCode']}
    />
  );
}
