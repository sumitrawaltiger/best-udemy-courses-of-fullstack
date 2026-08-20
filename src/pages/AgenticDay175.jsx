import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Maturity is repetition', text: 'great agent systems come from steady operating habits, not one heroic launch' },
  { title: 'Standards reduce chaos', text: 'runbooks, eval gates, review rituals, and ownership rules make quality repeatable' },
  { title: 'Product and ops must stay connected', text: 'agent quality decays when product ambition outruns operational discipline' },
  { title: 'Document the sharp edges', text: 'known limits and unsafe cases should be explicit, not tribal knowledge' },
  { title: 'Train the humans too', text: 'operators, reviewers, and stakeholders need shared language and expectations' },
  { title: 'Review drift regularly', text: 'cost, quality, and user trust all slip if nobody checks them' },
  { title: 'Maturity supports speed', text: 'the better your standards, the faster future changes become' },
  { title: 'Tomorrow: Day 176', text: 'next arc: advanced orchestration patterns and larger-scale agent topologies' },
];

const core = [
  {
    icon: '🏛️',
    title: 'Operating Standard',
    titleClass: 'card-title-cyan',
    subtitle: 'System',
    description: 'Define stable expectations for release gates, ownership, incidents, and post-launch review.',
    code: 'standards -> repeatability',
  },
  {
    icon: '📚',
    title: 'Shared Playbook',
    titleClass: 'card-title-purple',
    subtitle: 'Team',
    description: 'Document known risks, operator actions, and reviewer expectations so quality does not depend on one person.',
    code: 'docs + rituals + owners',
  },
  {
    icon: '📈',
    title: 'Maturity Review',
    titleClass: 'card-title-amber',
    subtitle: 'Improve',
    description: 'Review whether the system is becoming more reliable, cheaper, and more trusted over time.',
    code: 'quality · cost · trust',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Write the Standard',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Create a one-page operating standard for release, incidents, evals, and human review.',
    code: '1 page, 4 habits',
  },
  {
    icon: '📋',
    title: 'Quarterly Review',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Schedule a recurring maturity review that checks whether quality and trust are improving.',
    code: 'quarterly maturity check',
  },
  {
    icon: '🔜',
    title: 'Next: Day 176',
    titleClass: 'card-title-amber',
    subtitle: 'New Arc',
    description: 'Tomorrow — advanced orchestration patterns and the next stage of the Agentic AI journey.',
    link: { href: '/agentic-day-176', label: 'Day 176 →' },
  },
];

const resources = [
  {
    icon: '📘',
    title: 'NIST AI RMF',
    titleClass: 'card-title-cyan',
    subtitle: 'Governance',
    description: 'A useful framing for repeatable AI risk and operations maturity.',
    link: { href: 'https://www.nist.gov/itl/ai-risk-management-framework', label: 'Open →', external: true },
  },
  {
    icon: '📖',
    title: 'Day 172',
    titleClass: 'card-title-purple',
    subtitle: 'Incidents',
    description: 'Incident playbooks are part of operational maturity.',
    link: { href: '/agentic-day-172', label: 'Open Day 172 →' },
  },
  {
    icon: '🗺️',
    title: 'Day 174',
    titleClass: 'card-title-amber',
    subtitle: 'QA',
    description: 'Release gates that mature teams rely on every time.',
    link: { href: '/agentic-day-174', label: 'Open Day 174 →' },
  },
];

export default function AgenticDay175() {
  return (
    <StandaloneJourneyPage
      dayNumber={175}
      series="Agentic AI"
      dateLabel="Agentic AI Day 175 · 12 Feb 2027"
      prev={{ href: '/agentic-day-174', label: '← Day 174' }}
      next={{ href: '/agentic-day-176', label: 'Day 176 →' }}
      tags={['Agentic AI', 'Maturity', 'Operations']}
      theme="OPERATIONAL MATURITY: STANDARDS, RITUALS & SUSTAINABLE QUALITY"
      heroIcon="🏛️"
      profileRole="AGENTIC AI · MATURITY"
      progressWidth="59%"
      summary={
        <>
          Day 175 pulls the arc together: mature agent systems rely on <strong>standards, rituals, and ownership</strong>
          so quality improves steadily instead of depending on heroic effort.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Maturity', '#Day175', '#Operations', '#Standards']}
    />
  );
}
