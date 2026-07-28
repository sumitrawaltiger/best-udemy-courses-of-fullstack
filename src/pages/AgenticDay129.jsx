import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Why onboarding matters', text: 'a powerful platform still fails commercially if customers can\'t configure it themselves' },
  { title: 'Time-to-first-value', text: 'measure how long a new tenant takes to get one successful agent task, and shrink it relentlessly' },
  { title: 'Playbooks over ad-hoc support', text: 'a repeatable onboarding checklist scales far better than bespoke hand-holding per customer' },
  { title: 'Self-serve configuration', text: 'let customers pick domains, tools, and risk tiers without an engineer sitting in the loop' },
  { title: 'Champion training', text: 'train one power user per customer who can then train the rest of their own team' },
  { title: 'Support tiers mirror pricing', text: 'response-time SLAs scale with the pricing tier from Day 122 — support is part of what\'s sold' },
  { title: 'Churn signals', text: 'a dropping usage or success rate is a support conversation waiting to happen, not a surprise cancellation' },
  { title: 'What\'s next', text: 'pulling reliability, collaboration, governance, and customer success into one milestone' },
];

const core = [
  {
    icon: '⏱️', title: 'Time-to-First-Value', titleClass: 'card-title-cyan', subtitle: 'The Metric That Matters',
    description: 'How long from signup to the first successful agent task — every friction point in onboarding adds to this number.',
    code: 'ttfv = first_success_timestamp - signup_timestamp',
  },
  {
    icon: '📋', title: 'Onboarding Playbooks', titleClass: 'card-title-purple', subtitle: 'Repeatable, Not Bespoke',
    description: 'A checklist — config, first agent, champion training, first review call — scales far better than improvised support.',
  },
  {
    icon: '📉', title: 'Churn Signals', titleClass: 'card-title-amber', subtitle: 'Catch It Early',
    description: 'A dropping success rate or usage curve should trigger outreach automatically, before the customer decides to leave.',
    code: 'if usage_trend < threshold: alert(csm)',
  },
];

const practice = [
  {
    icon: '🧪', title: 'Write an Onboarding Playbook', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Draft the exact steps a new tenant takes from signup to their first successful agent task.',
  },
  {
    icon: '📊', title: 'Define a Churn Signal', titleClass: 'card-title-purple', subtitle: 'Practice',
    description: 'Pick one usage metric and the threshold that should trigger a proactive customer-success check-in.',
  },
  {
    icon: '🔜', title: 'Next: Platform Maturity Milestone', titleClass: 'card-title-amber', subtitle: 'Day 130 Preview',
    description: 'Tomorrow — pulling reliability, collaboration, governance, and customer success together.',
    link: { href: '/agentic-day-130', label: 'Go to Day 130 →' },
  },
];

const resources = [
  {
    icon: '💳', title: 'Billing, Metering & Usage Analytics', titleClass: 'card-title-cyan', subtitle: 'Day 122',
    description: 'The usage data from Day 122 is exactly what churn signals and time-to-first-value are built on.',
    link: { href: '/agentic-day-122', label: 'Open Day 122 →' },
  },
  {
    icon: '🎫', title: 'Customer Support Agent Systems', titleClass: 'card-title-purple', subtitle: 'Day 116',
    description: 'The support-agent patterns from Day 116 apply directly to onboarding customers of your own platform.',
    link: { href: '/agentic-day-116', label: 'Open Day 116 →' },
  },
  {
    icon: '🎨', title: 'Agent Product Design & UX', titleClass: 'card-title-amber', subtitle: 'Day 99',
    description: 'Good onboarding is a UX problem first — Day 99\'s trust-building patterns apply here too.',
    link: { href: '/agentic-day-99', label: 'Open Day 99 →' },
  },
];

export default function AgenticDay129() {
  return (
    <StandaloneJourneyPage
      dayNumber={129}
      series="Agentic AI"
      dateLabel="Agentic AI Day 129 · 5 Dec 2026"
      prev={{ href: '/agentic-day-128', label: '← Day 128' }}
      next={{ href: '/agentic-day-130', label: 'Day 130 →' }}
      tags={['Agentic AI', 'Customer Success', 'Phase 17']}
      theme="CUSTOMER SUCCESS & PLATFORM ONBOARDING"
      heroIcon="🧑‍🏫"
      profileRole="AGENTIC AI · CUSTOMER SUCCESS"
      progressWidth="86%"
      summary={
        <>
          Day 129 makes the platform easy to adopt, not just powerful. <strong>Time-to-first-value</strong>,
          repeatable <strong>onboarding playbooks</strong>, and <strong>churn signals</strong> caught before a
          customer ever decides to leave.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#CustomerSuccess', '#Day129', '#Onboarding', '#100DaysOfCode']}
    />
  );
}
