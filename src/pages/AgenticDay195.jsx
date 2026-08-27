import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Arc 191–195', text: 'injection defense → secrets guards → red-team → guardrails → milestone' },
  { title: 'Threat model on paper', text: 'write down assets, attackers, and the controls that stop them' },
  { title: 'Defense in depth', text: 'trust boundary, egress, red-team, and filters stack, not compete' },
  { title: 'Stacks on reliability', text: 'security (191–195) sits on reliability (186–190) and runtime (181–185)' },
  { title: 'Keep shipping', text: 'apply the controls to one production agent before scaling out' },
];

const core = [
  {
    icon: '🏁',
    title: 'Milestone Checklist',
    titleClass: 'card-title-cyan',
    subtitle: 'Ship',
    description: 'Trust boundary · secret broker · egress allowlist · red-team gate · input/output filters.',
    code: 'boundary·broker\negress·filters',
  },
  {
    icon: '🎬',
    title: '5-Min Demo',
    titleClass: 'card-title-purple',
    subtitle: 'Show',
    description: 'Block an injection, deny an exfil POST, pass the red-team gate, then redact PII live.',
    code: 'inject·exfil\nredteam·pii',
  },
  {
    icon: '🗺️',
    title: '191–195 Map',
    titleClass: 'card-title-amber',
    subtitle: 'Arc',
    description: 'Separate → protect → attack → filter → ship the security platform.',
    code: 'sep·protect\nattack·filter',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Sign-Off Score',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Rate 0–2 on injection, secrets, red-team, and guardrails. Fix the lowest first.',
    code: 'score 0–2\nfix weakest',
  },
  {
    icon: '📦',
    title: 'Threat Model Doc',
    titleClass: 'card-title-purple',
    subtitle: 'Docs',
    description: 'Document assets, attackers, controls, and on-call response steps.',
    code: 'assets·attackers\ncontrols',
  },
  {
    icon: '🔜',
    title: 'What Comes Next',
    titleClass: 'card-title-amber',
    subtitle: 'Day 196',
    description: 'Next arc — split work into specialized agent roles and teams.',
    link: { href: '/agentic-day-196', label: 'Go to Day 196 →' },
  },
];

const resources = [
  {
    icon: '🚧',
    title: 'Day 194',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Guardrails this milestone certifies.',
    link: { href: '/agentic-day-194', label: 'Open Day 194 →' },
  },
  {
    icon: '🏁',
    title: 'Day 190',
    titleClass: 'card-title-purple',
    subtitle: 'Prior Milestone',
    description: 'Reliability platform this security layer extends.',
    link: { href: '/agentic-day-190', label: 'Open Day 190 →' },
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

export default function AgenticDay195() {
  return (
    <StandaloneJourneyPage
      dayNumber={195}
      series="Agentic AI"
      dateLabel="Agentic AI Day 195 · 10 Mar 2027"
      prev={{ href: '/agentic-day-194', label: '← Day 194' }}
      next={{ href: '/agentic-day-196', label: 'Day 196 →' }}
      tags={['Agentic AI', 'Security', 'Milestone']}
      theme="AGENT SECURITY PLATFORM MILESTONE"
      heroIcon="🏁"
      profileRole="AGENTIC AI · MILESTONE"
      progressWidth="69%"
      summary={
        <>
          Day 195 closes the security stretch. Ship a platform that <strong>blocks injection, protects secrets, survives
          red-teaming, and filters unsafe content</strong>.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Security', '#Day195', '#Milestone', '#Platform']}
    />
  );
}
