import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Retros beat vibes', text: 'a written retrospective turns 153 days of scattered lessons into a repeatable playbook' },
  { title: 'Keep / Drop / Try', text: 'the simplest retro format — what worked, what to cut, what to test next' },
  { title: 'README is a pitch', text: 'a recruiter or teammate decides whether to keep reading in the first 10 seconds' },
  { title: 'Case study > changelog', text: 'problem → approach → safety → result tells a story a commit list never will' },
  { title: 'Prune the portfolio', text: '3 strong, polished projects beat 20 half-finished ones' },
  { title: 'Handoff to future you', text: 'write down the "why" behind decisions — you will forget the context in 3 months' },
  { title: 'One day left', text: 'tomorrow the Agentic AI journal closes for good, and the TypeScript Stack begins' },
];

const core = [
  {
    icon: '🔁', title: 'Keep / Drop / Try', titleClass: 'card-title-cyan', subtitle: 'Retro',
    description: 'Three columns: patterns to keep using, habits to drop, one new thing to try on the next stack.',
    code: 'keep · drop\n· try next',
  },
  {
    icon: '📄', title: 'README Anatomy', titleClass: 'card-title-purple', subtitle: 'Portfolio',
    description: 'Problem, demo GIF/link, architecture diagram, how to run it, and what you would improve next.',
    code: 'problem · demo\narch · run · next',
  },
  {
    icon: '📖', title: 'Case Study Structure', titleClass: 'card-title-amber', subtitle: 'Story',
    description: 'Problem → approach → safety/guardrails → measured result. One paragraph, no jargon.',
    code: 'problem → approach\n→ safety → result',
  },
];

const practice = [
  {
    icon: '✍️', title: 'Write Your Retro', titleClass: 'card-title-cyan', subtitle: 'Reflect',
    description: 'One page: 5 things to keep, 3 to drop, 1 to try in the TypeScript Stack. Be specific, not generic.',
    code: '5 keep · 3 drop\n1 try',
  },
  {
    icon: '🧹', title: 'Polish the Portfolio', titleClass: 'card-title-purple', subtitle: 'Prune',
    description: 'Pick your best 3 projects. Rewrite each README using the anatomy above. Archive the rest.',
    code: 'top 3 · rewrite\n· archive rest',
  },
  {
    icon: '🔜', title: 'Next: Finale', titleClass: 'card-title-amber', subtitle: 'Day 155',
    description: 'Tomorrow — the Agentic AI series finale, then straight into the TypeScript Stack.',
    link: { href: '/agentic-day-155', label: 'Go to Day 155 →' },
  },
];

const resources = [
  {
    icon: '🎓', title: 'Day 153', titleClass: 'card-title-cyan', subtitle: 'Capstone',
    description: 'The demo and graduation checklist this retro reflects on.',
    link: { href: '/agentic-day-153', label: 'Open Day 153 →' },
  },
  {
    icon: '🏁', title: 'Day 100', titleClass: 'card-title-purple', subtitle: 'Earlier Milestone',
    description: 'Compare how far the pattern library has grown since the first graduation.',
    link: { href: '/agentic-day-100', label: 'Open Day 100 →' },
  },
  {
    icon: '📘', title: 'Python Track', titleClass: 'card-title-amber', subtitle: 'Hub',
    description: 'Full Gen AI + Agentic curriculum and chapters, for a deeper re-read.',
    link: { href: '/python', label: 'Open Python track →' },
  },
];

export default function AgenticDay154() {
  return (
    <StandaloneJourneyPage
      dayNumber={154}
      series="Agentic AI"
      dateLabel="Agentic AI Day 154 · 30 Dec 2026"
      prev={{ href: '/agentic-day-153', label: '← Day 153' }}
      next={{ href: '/agentic-day-155', label: 'Day 155 →' }}
      tags={['Agentic AI', 'Retrospective', 'Phase 21']}
      theme="RETROSPECTIVE & PORTFOLIO PACKAGING"
      heroIcon="🪞"
      profileRole="AGENTIC AI · RETROSPECTIVE"
      progressWidth="99%"
      summary={
        <>
          Day 154 steps back from building. Write a <strong>Keep / Drop / Try</strong> retrospective, rewrite your
          top 3 project READMEs, and package one honest case study — one day remains before the finale.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#Retrospective', '#Portfolio', '#Day154', '#AgenticAI', '#CaseStudy']}
    />
  );
}
