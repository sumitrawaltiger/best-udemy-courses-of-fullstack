import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Multimodal agents', text: 'agents that see images/screens and act with tools — not text-only chat' },
  { title: 'Vision as input', text: 'screenshots, photos, diagrams become context beside the user message' },
  { title: 'Grounded claims', text: 'cite what was visible (“button in top-right”) — avoid inventing UI that is not there' },
  { title: 'Tool + vision', text: 'model describes UI → tool clicks/types; or model outputs structured actions' },
  { title: 'Resolution & crop', text: 'send the region that matters; huge images waste tokens and miss detail' },
  { title: 'Privacy', text: 'redact PII in screenshots before they hit the model or traces' },
  { title: 'Eval set', text: 'golden image tasks with expected actions or captions — score like any other agent' },
  { title: 'What’s next', text: 'long documents need the same discipline with PDFs and chunking' },
];

const core = [
  {
    icon: '👁️', title: 'See → Plan → Act', titleClass: 'card-title-cyan', subtitle: 'Loop',
    description: 'Attach image → ask for structured observation → decide tool calls → verify with a new screenshot.',
    code: 'image → observe\n→ tool → re-see',
  },
  {
    icon: '📐', title: 'Structured Vision Out', titleClass: 'card-title-purple', subtitle: 'Schema',
    description: 'Force JSON: elements[], text_found, suggested_action. Parse with Pydantic before acting.',
    code: 'elements[]\ntext_found\naction',
  },
  {
    icon: '🔒', title: 'Screenshot Hygiene', titleClass: 'card-title-amber', subtitle: 'Safety',
    description: 'Strip EXIF, blur secrets, never log raw images with badges/IDs in plain traces.',
    code: 'redact → send\nnever log raw PII',
  },
];

const practice = [
  {
    icon: '🧪', title: 'UI Spotter', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Feed a settings page screenshot; require JSON listing toggles and a safe next click.',
    code: 'screenshot → JSON\n→ one click plan',
  },
  {
    icon: '📏', title: 'Vision Eval', titleClass: 'card-title-purple', subtitle: 'Score',
    description: '10 images with expected labels. Fail the run if groundedness < 80%.',
    code: '10 images\n≥ 0.8 grounded',
  },
  {
    icon: '🔜', title: 'Next: Documents', titleClass: 'card-title-amber', subtitle: 'Day 102',
    description: 'Tomorrow — PDF and document intelligence agents.',
    link: { href: '/agentic-day-102', label: 'Go to Day 102 →' },
  },
];

const resources = [
  {
    icon: '📘', title: 'Day 100 Milestone', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Foundations you reuse for multimodal products.',
    link: { href: '/agentic-day-100', label: 'Open Day 100 →' },
  },
  {
    icon: '🖱️', title: 'Computer-Use Day', titleClass: 'card-title-purple', subtitle: 'Day 97',
    description: 'Browser/computer-use agents pair naturally with vision.',
    link: { href: '/agentic-day-97', label: 'Open Day 97 →' },
  },
  {
    icon: '📐', title: 'Schemas Day', titleClass: 'card-title-amber', subtitle: 'Day 83',
    description: 'Structured outputs keep vision actions machine-safe.',
    link: { href: '/agentic-day-83', label: 'Open Day 83 →' },
  },
];

export default function AgenticDay101() {
  return (
    <StandaloneJourneyPage
      dayNumber={101}
      series="Agentic AI"
      dateLabel="Agentic AI Day 101 · 29 Nov 2026"
      prev={{ href: '/agentic-day-100', label: '← Day 100' }}
      next={{ href: '/agentic-day-102', label: 'Day 102 →' }}
      tags={['Gen AI', 'Multimodal', 'Phase 15']}
      theme="MULTIMODAL & VISION AGENTS"
      heroIcon="👁️"
      profileRole="GEN AI · VISION"
      progressWidth="67%"
      summary={
        <>
          Day 101 opens the next hundred. Build <strong>vision-aware agents</strong> that observe screenshots, emit
          structured plans, and act with tools safely.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Multimodal', '#Vision', '#Day101', '#AgenticAI', '#GenAI']}
    />
  );
}
