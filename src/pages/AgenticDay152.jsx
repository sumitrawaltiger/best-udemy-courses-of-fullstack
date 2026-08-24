import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Build thin', text: 'end-to-end first: one happy path, then harden — don’t polish dead ends' },
  { title: 'Wire the bar', text: 'schemas, stop rules, cost cap, traces, and at least one HITL gate' },
  { title: 'Golden tasks', text: '5–10 tasks that must pass before you call the demo ready' },
  { title: 'Failure rehearsal', text: 'force a tool timeout and an injection plant; show degrade + refuse' },
  { title: 'Metrics on screen', text: 'cost, TTFT, and success for the live run — not a slide' },
  { title: 'Record once', text: 'capture a clean 5-minute take; fix only what the recording reveals' },
  { title: 'README for humans', text: 'how to run, env vars, risks, and how to roll back the policy pack' },
  { title: "What’s next", text: "tomorrow — Day 153 is the finale: capstone demo, retro, portfolio proof, and the Agentic AI series closes" },
];

const core = [
  {
    icon: '🛠️', title: 'Happy Path First', titleClass: 'card-title-cyan', subtitle: 'Build',
    description: 'One task completes with tools + memory. Then add caps, HITL, and eval — in that order.',
    code: 'path → caps\nHITL → eval',
  },
  {
    icon: '🧪', title: 'Golden Gate', titleClass: 'card-title-purple', subtitle: 'Quality',
    description: 'Suite of 5–10 tasks. Red means no demo. Include one adversarial case.',
    code: '5–10 goldens\n+ 1 attack',
  },
  {
    icon: '🎥', title: 'Demo Rehearsal', titleClass: 'card-title-amber', subtitle: 'Show',
    description: 'Script: problem → live run → failure drill → metric. Time it under 5 minutes.',
    code: 'problem → live\nfail → metric',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Ship the Path', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Finish the happy path with traces and a cost line visible. Screenshot the run.',
    code: 'path + traces\n+ $ line',
  },
  {
    icon: '🧨', title: 'Two Drills', titleClass: 'card-title-purple', subtitle: 'Safety',
    description: 'Kill one tool and plant one injection. Record what the user sees in each case.',
    code: 'timeout · inject\nUX proof',
  },
  {
    icon: '🔜', title: 'Next: Series Finale', titleClass: 'card-title-amber', subtitle: 'Day 153 · 11 Jan 2027',
    description: 'Tomorrow — Day 153 is the Agentic AI series finale. Capstone demo, retro, portfolio — 153 days complete, Python Stack continues.',
    link: { href: '/agentic-day-153', label: 'Go to Day 153 →' },
  },
];

const resources = [
  {
    icon: '🎯', title: 'Brief Day 151', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'The spec and sketch you are building against.',
    link: { href: '/agentic-day-151', label: 'Open Day 151 →' },
  },
  {
    icon: '🛡️', title: 'Security Day 139', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'Allowlists and HITL for the drills.',
    link: { href: '/agentic-day-139', label: 'Open Day 139 →' },
  },
  {
    icon: '💥', title: 'Chaos Day 138', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Degrade paths for the timeout drill.',
    link: { href: '/agentic-day-138', label: 'Open Day 138 →' },
  },
];

export default function AgenticDay152() {
  return (
    <StandaloneJourneyPage
      dayNumber={152}
      series="Agentic AI"
      dateLabel="Agentic AI Day 152 · 23 Jan 2027"
      prev={{ href: '/agentic-day-151', label: '← Day 151' }}
      next={{ href: '/agentic-day-153', label: 'Day 153 →' }}
      tags={['Agentic AI', 'Capstone', 'Phase 21']}
      theme="CAPSTONE BUILD & DEMO REHEARSAL"
      heroIcon="🛠️"
      profileRole="AGENTIC AI · BUILD"
      progressWidth="99%"
      summary={
        <>
          Day 152 ships the thin slice. Finish the <strong>happy path</strong>, gate on goldens, rehearse failure
          drills, and time a 5-minute demo with live metrics.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Capstone', '#Demo', '#Day152', '#Build', '#AgenticAI']}
    />
  );
}
