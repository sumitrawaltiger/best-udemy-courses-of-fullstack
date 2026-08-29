import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Changes need a ticket', text: 'every prompt/model/role change is a reviewed PR with a changelog and eval run' },
  { title: 'Risk tiers', text: 'trivial tweaks auto-promote; high-impact or regulated paths need explicit approvers' },
  { title: 'Approval matrix', text: 'who approves what: prompt tweak → LLM lead; prod rollout → owner + risk + ops' },
  { title: 'Freeze windows', text: 'no unplanned changes during peak, board week, or embargoed events' },
  { title: 'Emergency break-glass', text: 'a hotfix path that ships fast but must still be reviewed within N hours' },
  { title: 'Tomorrow: Day 204', text: 'audit trails, evidence, and compliance controls for the agent platform' },
];

const core = [
  {
    icon: '🎟️',
    title: 'Change Ticket',
    titleClass: 'card-title-cyan',
    subtitle: 'CR',
    description: 'Template: impact, rollout plan, eval run link, rollback steps, approvers, freeze check.',
    code: 'CR: impact, evals,\napprovers, rollback',
  },
  {
    icon: '🧱',
    title: 'Risk-Tier Gates',
    titleClass: 'card-title-purple',
    subtitle: 'Tier',
    description: 'Auto-promote low-risk; medium needs 1 review; high needs owner + risk + ops + change board.',
    code: 'L auto / M 1+1\nH board',
  },
  {
    icon: '🚨',
    title: 'Break-Glass Flow',
    titleClass: 'card-title-amber',
    subtitle: 'Hotfix',
    description: 'Ship now, review within 4 hours, and attach a retro if approvals were skipped.',
    code: 'ship → review <4h\n+ retro',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Freeze Reject Lab',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Open a CR during a freeze window and confirm the deploy pipeline rejects it unless break-glass.',
    code: 'freeze →\ndeploy blocks',
  },
  {
    icon: '🗂️',
    title: 'Approval Matrix',
    titleClass: 'card-title-purple',
    subtitle: 'Docs',
    description: 'Publish the matrix: change types, risk tiers, required approvers, and SLA per tier.',
    code: 'matrix v1\ntier × approvers',
  },
  {
    icon: '🔜',
    title: 'Next: Audit',
    titleClass: 'card-title-amber',
    subtitle: 'Day 204',
    description: 'Tomorrow — audit trails and compliance evidence.',
    link: { href: '/agentic-day-204', label: 'Go to Day 204 →' },
  },
];

const resources = [
  {
    icon: '💱',
    title: 'Day 202',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Cost/perf changes these approval gates govern.',
    link: { href: '/agentic-day-202', label: 'Open Day 202 →' },
  },
  {
    icon: '🐤',
    title: 'Day 189',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'Canary and rollback primitives the CR process reuses.',
    link: { href: '/agentic-day-189', label: 'Open Day 189 →' },
  },
  {
    icon: '📘',
    title: 'Python Track',
    titleClass: 'card-title-amber',
    subtitle: 'Hub',
    description: 'Full Gen AI + Agentic curriculum.',
    link: { href: '/python', label: 'Open Python track →' },
  },
];

export default function AgenticDay203() {
  return (
    <StandaloneJourneyPage
      dayNumber={203}
      series="Agentic AI"
      dateLabel="Agentic AI Day 203 · 7 Oct 2027"
      prev={{ href: '/agentic-day-202', label: '← Day 202' }}
      next={{ href: '/agentic-day-204', label: 'Day 204 →' }}
      tags={['Agentic AI', 'Governance', 'ChangeControl']}
      theme="CHANGE CONTROL & APPROVAL GATES"
      heroIcon="🎟️"
      profileRole="AGENTIC AI · GOVERNANCE"
      progressWidth="74%"
      summary={
        <>
          Day 203 writes the rules. Use <strong>risk-tiered CRs, an approval matrix, and a break-glass hotfix</strong> so
          production changes are safe without grinding velocity to zero.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Governance', '#Day203', '#ChangeControl', '#Approvals']}
    />
  );
}
