import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Attack your own agent', text: 'a versioned adversarial suite runs beside the golden evals' },
  { title: 'Jailbreak catalog', text: 'collect known injection and roleplay bypasses, add new ones as found' },
  { title: 'Measure attack success', text: 'track an attack-success rate that must trend to zero' },
  { title: 'Fix then re-test', text: 'every breach becomes a permanent regression case' },
  { title: 'Automate in CI', text: 'the red-team suite gates releases like the quality gate does' },
  { title: 'Tomorrow: Day 194', text: 'guardrails and content safety on inputs and outputs' },
];

const core = [
  {
    icon: '🎯',
    title: 'Attack Suite',
    titleClass: 'card-title-cyan',
    subtitle: 'Data',
    description: 'Version prompts that try injection, exfil, and jailbreaks with an expected safe outcome each.',
    code: 'attacks.jsonl\nexpect: refuse',
  },
  {
    icon: '📉',
    title: 'Attack Success Rate',
    titleClass: 'card-title-purple',
    subtitle: 'Metric',
    description: 'Score how many attacks get through and drive the rate toward zero over time.',
    code: 'ASR=hits/all\ntrend ↓',
  },
  {
    icon: '🔁',
    title: 'Breach → Regression',
    titleClass: 'card-title-amber',
    subtitle: 'Loop',
    description: 'Each successful attack is fixed and frozen as a permanent test case.',
    code: 'breach→case\nnever again',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Red-Team Run',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Run 20 attacks, list any that succeeded, and file each as a regression case.',
    code: '20 attacks\nfile breaches',
  },
  {
    icon: '🚦',
    title: 'CI Attack Gate',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Fail the build if attack-success rate rises above the allowed ceiling.',
    code: 'ASR>cap?\nfail build',
  },
  {
    icon: '🔜',
    title: 'Next: Guardrails',
    titleClass: 'card-title-amber',
    subtitle: 'Day 194',
    description: 'Tomorrow — content safety filters.',
    link: { href: '/agentic-day-194', label: 'Go to Day 194 →' },
  },
];

const resources = [
  {
    icon: '🔑',
    title: 'Day 192',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Secrets guards the red-team suite probes.',
    link: { href: '/agentic-day-192', label: 'Open Day 192 →' },
  },
  {
    icon: '🚦',
    title: 'Day 187',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'CI gate pattern this suite reuses.',
    link: { href: '/agentic-day-187', label: 'Open Day 187 →' },
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

export default function AgenticDay193() {
  return (
    <StandaloneJourneyPage
      dayNumber={193}
      series="Agentic AI"
      dateLabel="Agentic AI Day 193 · 12 Mar 2027"
      prev={{ href: '/agentic-day-192', label: '← Day 192' }}
      next={{ href: '/agentic-day-194', label: 'Day 194 →' }}
      tags={['Agentic AI', 'Security', 'Evals']}
      theme="RED-TEAM THE AGENT"
      heroIcon="🎯"
      profileRole="AGENTIC AI · SECURITY"
      progressWidth="68%"
      summary={
        <>
          Day 193 goes on offense. Run a <strong>versioned attack suite</strong>, track attack-success rate, and freeze
          every breach as a regression.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#Security', '#Day193', '#RedTeam', '#Evals']}
    />
  );
}
