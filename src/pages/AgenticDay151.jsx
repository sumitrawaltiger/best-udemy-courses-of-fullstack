import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Capstone brief', text: 'one real user, one painful workflow, one agent that finishes the job' },
  { title: 'Scope ruthlessly', text: '3–5 tools max; clear stop rules; HITL on irreversible steps' },
  { title: 'Architecture sketch', text: 'ingress → planner → tools → memory/graph → eval → observability' },
  { title: 'Non-negotiables', text: 'schemas, budgets, traces, allowlists — from Phase 19 excellence' },
  { title: 'Learning hooks', text: 'feedback events and a north-star metric from Phase 20' },
  { title: 'Privacy default', text: 'local-first or vaulted PII when the domain demands it' },
  { title: 'Demo narrative', text: 'write the 5-minute story before you write more code' },
  { title: 'What’s next', text: 'tomorrow you build and rehearse the demo' },
];

const core = [
  {
    icon: '🎯', title: 'One Job Spec', titleClass: 'card-title-cyan', subtitle: 'Scope',
    description: 'User · job-to-be-done · success state · tools · HITL gates · cost/latency caps.',
    code: 'user · job\nsuccess · caps',
  },
  {
    icon: '🏗️', title: 'System Sketch', titleClass: 'card-title-purple', subtitle: 'Design',
    description: 'Boxes for API, agent loop, tools, memory/graph, eval, and dashboards. Keep it on one page.',
    code: 'API → loop\ntools · mem · eval',
  },
  {
    icon: '🎬', title: 'Demo Script', titleClass: 'card-title-amber', subtitle: 'Story',
    description: 'Happy path → forced failure → HITL → metric. Rehearse the beats before polish.',
    code: 'happy · fail\nHITL · metric',
  },
];

const practice = [
  {
    icon: '🧪', title: 'One-Pager Capstone', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Fill the job spec + system sketch for your final agent. Cut anything that doesn’t serve the job.',
    code: 'spec + sketch\ncut scope',
  },
  {
    icon: '📝', title: 'Risk List', titleClass: 'card-title-purple', subtitle: 'Safety',
    description: 'List top 5 failure/abuse modes and the control for each (schema, HITL, allowlist, etc.).',
    code: '5 risks → controls',
  },
  {
    icon: '🔜', title: 'Next: Build', titleClass: 'card-title-amber', subtitle: 'Day 152',
    description: 'Tomorrow — build the capstone and rehearse the demo.',
    link: { href: '/agentic-day-152', label: 'Go to Day 152 →' },
  },
];

const resources = [
  {
    icon: '🏁', title: 'Day 150', titleClass: 'card-title-cyan', subtitle: 'Prior Milestone',
    description: 'Learning systems this capstone should include.',
    link: { href: '/agentic-day-150', label: 'Open Day 150 →' },
  },
  {
    icon: '🏁', title: 'Day 140', titleClass: 'card-title-purple', subtitle: 'Excellence',
    description: 'Cost, latency, chaos, security bar.',
    link: { href: '/agentic-day-140', label: 'Open Day 140 →' },
  },
  {
    icon: '🏁', title: 'Day 100', titleClass: 'card-title-amber', subtitle: 'Earlier Arc',
    description: 'First hundred-day milestone — patterns still apply.',
    link: { href: '/agentic-day-100', label: 'Open Day 100 →' },
  },
];

export default function AgenticDay151() {
  return (
    <StandaloneJourneyPage
      dayNumber={151}
      series="Agentic AI"
      dateLabel="Agentic AI Day 151 · 25 Jan 2027"
      prev={{ href: '/agentic-day-150', label: '← Day 150' }}
      next={{ href: '/agentic-day-152', label: 'Day 152 →' }}
      tags={['Agentic AI', 'Capstone', 'Phase 21']}
      theme="CAPSTONE BRIEF & ARCHITECTURE"
      heroIcon="🎯"
      profileRole="AGENTIC AI · CAPSTONE"
      progressWidth="98%"
      summary={
        <>
          Day 151 starts the finale. Lock a <strong>one-job capstone</strong>: user, success state, tools, HITL, and a
          one-page architecture plus demo script.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Capstone', '#Architecture', '#Day151', '#AgenticAI', '#Scope']}
    />
  );
}
