import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Hardening gate', text: 'before LLMOps versioning, confirm the agent is safe to operate day-to-day' },
  { title: 'UX ready', text: 'streaming + cancel from Day 56 — no silent multi-minute waits' },
  { title: 'Cost ready', text: 'cache + quotas — repeat traffic and abuse will not melt the budget' },
  { title: 'Ops ready', text: 'runbook + SEV triage — someone can mitigate at 3am' },
  { title: 'Safety ready', text: 'HITL on writes, allowlisted tools, redacted logs' },
  { title: 'Eval ready', text: 'golden set exists; you know the pass bar before promotes' },
  { title: 'Bridge to LLMOps', text: 'Day 61 adds registries, promote stages, and CI gates on top of this base' },
  { title: 'Checklist habit', text: 'print the list; tick boxes before every we are in prod claim' },
];

const core = [
  {
    icon: '✅', title: 'Prod Checklist', titleClass: 'card-title-cyan', subtitle: 'Gate',
    description: 'Stream UX · cache · quotas · kill switch · runbook · eval set · secrets out of git · health probes.',
    code: 'UX · cache · quota\nkill · runbook · eval',
  },
  {
    icon: '🔗', title: 'Toward LLMOps', titleClass: 'card-title-purple', subtitle: 'Next',
    description: 'You can run an agent. Next you version prompts/graphs and promote with evidence — Day 61.',
    code: 'operate today\nversion tomorrow',
  },
  {
    icon: '🗺️', title: '56–60 Map', titleClass: 'card-title-amber', subtitle: 'Arc',
    description: 'Stream → cache → quotas → incidents → checklist. Production hardening between milestone and LLMOps.',
    code: 'stream · cache\nquota · IR · gate',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Score Your Capstone', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Rate your Day 54/55 project 0–2 on each checklist item. Fix the lowest score this week.',
    code: 'score 0–2 each\nfix weakest',
  },
  {
    icon: '📋', title: 'Sign-Off Doc', titleClass: 'card-title-purple', subtitle: 'Process',
    description: 'One-page ready for LLMOps sign-off with owner names and dates for each box.',
    code: 'item · owner · date\nall green → Day 61',
  },
  {
    icon: '🔜', title: 'Next: LLMOps', titleClass: 'card-title-amber', subtitle: 'Day 61',
    description: 'Tomorrow — version prompts, models, and graphs with promote stages.',
    link: { href: '/agentic-day-61', label: 'Go to Day 61 →' },
  },
];

const resources = [
  {
    icon: '🏁', title: 'Milestone 55', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Capstone milestone this hardening arc builds on.',
    link: { href: '/agentic-day-55', label: 'Open Day 55 →' },
  },
  {
    icon: '🏭', title: 'LLMOps Foundations', titleClass: 'card-title-purple', subtitle: 'Day 61',
    description: 'Versioning and promote stages — the next phase.',
    link: { href: '/agentic-day-61', label: 'Open Day 61 →' },
  },
  {
    icon: '🚨', title: 'Incidents Day', titleClass: 'card-title-amber', subtitle: 'Day 59',
    description: 'Runbooks that belong on every hardening checklist.',
    link: { href: '/agentic-day-59', label: 'Open Day 59 →' },
  },
];

export default function AgenticDay60() {
  return (
    <StandaloneJourneyPage
      dayNumber={60}
      series="Agentic AI"
      dateLabel="Agentic AI Day 60 · 29 Oct 2026"
      prev={{ href: '/agentic-day-59', label: '← Day 59' }}
      next={{ href: '/agentic-day-61', label: 'Day 61 →' }}
      tags={['Production', 'Checklist', 'Phase 9b']}
      theme="PRODUCTION HARDENING CHECKLIST"
      heroIcon="✅"
      profileRole="AGENTIC AI · HARDENING"
      progressWidth="40%"
      summary={
        <>
          Day 60 closes the gap to LLMOps. Tick the <strong>production hardening</strong> checklist — then version and
          promote with evidence on Day 61.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Hardening', '#Checklist', '#Day60', '#LLMOps', '#AgenticAI']}
    />
  );
}
