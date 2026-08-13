import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Why stream', text: 'users hate blank waits — tokens and tool status should appear as they happen' },
  { title: 'Token streaming', text: 'SSE / WebSocket push partial LLM tokens to the UI' },
  { title: 'Tool progress', text: 'show searching… / calling API… so the agent loop feels alive' },
  { title: 'Partial failure UX', text: 'if a tool fails mid-run, surface it without wiping the draft answer' },
  { title: 'Cancel / stop', text: 'let users abort long runs; cancel the worker and close the stream' },
  { title: 'Backpressure', text: 'do not buffer the whole reply in memory before sending' },
  { title: 'Accessibility', text: 'live regions so screen readers are not spammed' },
  { title: 'What’s next', text: 'caching cuts latency further when answers can be reused' },
];

const core = [
  {
    icon: '📡', title: 'SSE Pattern', titleClass: 'card-title-cyan', subtitle: 'Stream',
    description: 'FastAPI yields token chunks; the client appends them. Heartbeats keep proxies from closing idle links.',
    code: 'async for token in llm:\n  yield sse(token)\n# heartbeat every 15s',
  },
  {
    icon: '🛠️', title: 'Tool Status Events', titleClass: 'card-title-purple', subtitle: 'UX',
    description: 'Emit structured events: tool_start, token, tool_end, done — so the UI can narrate the loop.',
    code: 'tool_start → tokens\n→ tool_end → done',
  },
  {
    icon: '⏹️', title: 'Cancel Token', titleClass: 'card-title-amber', subtitle: 'Control',
    description: 'Pass a cancellation flag into the graph. On abort: stop LLM, close tools, mark run cancelled.',
    code: 'if cancelled:\n  break\n  mark cancelled',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Stream /ask', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Add an SSE endpoint that streams a fake answer word-by-word. Consume it with EventSource.',
    code: 'GET /ask/stream\nEventSource(...)',
  },
  {
    icon: '🛑', title: 'Stop Button', titleClass: 'card-title-purple', subtitle: 'UX',
    description: 'Wire Stop to close EventSource and POST /runs/{id}/cancel.',
    code: 'Stop → abort\n→ cancel run',
  },
  {
    icon: '🔜', title: 'Next: Caching', titleClass: 'card-title-amber', subtitle: 'Day 57',
    description: 'Tomorrow — semantic cache to reuse answers and cut cost/latency.',
    link: { href: '/agentic-day-57', label: 'Go to Day 57 →' },
  },
];

const resources = [
  {
    icon: '📘', title: 'FastAPI Day', titleClass: 'card-title-cyan', subtitle: 'Day 41',
    description: 'API foundation for streaming endpoints.',
    link: { href: '/agentic-day-41', label: 'Open Day 41 →' },
  },
  {
    icon: '🏗️', title: 'Prod Pipelines', titleClass: 'card-title-purple', subtitle: 'Day 53',
    description: 'Async jobs pair well with streamed status updates.',
    link: { href: '/agentic-day-53', label: 'Open Day 53 →' },
  },
  {
    icon: '🏁', title: 'Milestone 55', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Where this production-hardening arc starts.',
    link: { href: '/agentic-day-55', label: 'Open Day 55 →' },
  },
];

export default function AgenticDay56() {
  return (
    <StandaloneJourneyPage
      dayNumber={56}
      series="Agentic AI"
      dateLabel="Agentic AI Day 56 · 7 Oct 2026"
      prev={{ href: '/agentic-day-55', label: '← Day 55' }}
      next={{ href: '/agentic-day-57', label: 'Day 57 →' }}
      tags={['Production', 'Streaming UX', 'Phase 9b']}
      theme="STREAMING RESPONSES & AGENT UX"
      heroIcon="📡"
      profileRole="AGENTIC AI · UX"
      progressWidth="37%"
      summary={
        <>
          Day 56 hardens the user experience. <strong>Stream</strong> tokens and tool status, support{' '}
          <strong>cancel</strong>, and keep long agent runs feeling responsive.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Streaming', '#AgentUX', '#Day56', '#SSE', '#AgenticAI']}
    />
  );
}
