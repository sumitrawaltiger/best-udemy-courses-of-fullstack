import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Enterprise readiness', text: 'architecture, compliance, safety, and reliability connect into one bar' },
  { title: 'Evidence beats opinion', text: 'evals, traces, and metrics justify changes and releases' },
  { title: 'Operational maturity', text: 'runbooks, dashboards, and rollback switches reduce risk' },
  { title: 'Governance is ownership', text: 'clear owners for prompts, policies, tools, and corpora' },
  { title: 'Design for iteration', text: 'shipping safely is a repeatable cycle, not a one-time event' },
  { title: 'Keep building', text: 'the next gains come from applying the system to more workflows' },
];

const core = [
  { icon: '🏁', title: 'Milestone', titleClass: 'card-title-cyan', subtitle: 'Wrap', description: 'You can now design Gen AI features with enterprise architecture and operational discipline.', code: 'design -> evaluate -> operate' },
  { icon: '📦', title: 'Launch Pack', titleClass: 'card-title-purple', subtitle: 'Ship', description: 'Bundle README, demo flow, metrics, safety constraints, and known limitations.', code: 'demo + metrics + limits' },
  { icon: '🗺️', title: 'Next Roadmap', titleClass: 'card-title-amber', subtitle: 'Continue', description: 'Pick one path: deeper RAG ops, stronger eval ops, or more automation with strict guardrails.', code: 'choose -> ship' },
];

const practice = [
  { icon: '📝', title: 'Readiness Checklist', titleClass: 'card-title-cyan', subtitle: 'Build', description: 'Create a checklist for architecture, compliance, safety, and SLOs for one feature.', code: 'checklist v1' },
  { icon: '📊', title: 'Scorecard', titleClass: 'card-title-purple', subtitle: 'Measure', description: 'Record quality score, p95 latency, cost per request, and safety metrics.', code: 'quality · ms · $ · safety' },
  { icon: '🏠', title: 'Back To Track', titleClass: 'card-title-amber', subtitle: 'Continue', description: 'Return to the Gen AI track and extend the roadmap from here.', link: { href: '/genai', label: 'Open Gen AI Track ->' } },
];

const resources = [
  { icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub', description: 'Browse the full Gen AI lessons and curriculum on the site.', link: { href: '/genai', label: 'Open Gen AI Track ->' } },
  { icon: '📖', title: 'NIST AI RMF', titleClass: 'card-title-purple', subtitle: 'Governance', description: 'Risk management guidance for trustworthy AI systems.', link: { href: 'https://www.nist.gov/itl/ai-risk-management-framework', label: 'Open ->', external: true } },
  { icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember', description: 'The product is the system: data, policies, evals, and operations.', footer: 'Ship the system.' },
];

export default function GenaiDay140() {
  return (
    <StandaloneJourneyPage
      dayNumber={140}
      dateLabel="Gen AI Day 140 · 140 Aug 2026"
      prev={{ href: '/genai-day-139', label: '← Day 139' }}
      next={{ href: '/genai', label: 'Gen AI →' }}
      tags={['Gen AI', 'Milestone', 'Day 140']}
      theme="ENTERPRISE GEN AI MILESTONE"
      heroIcon="🏁"
      profileRole="GEN AI · MILESTONE"
      progressWidth="94%"
      summary="Day 140 wraps the enterprise Gen AI arc: architecture, compliance, red teaming, and reliability. The goal is repeatable shipping with evidence and ownership."
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#GenAI', '#Milestone', '#Day140', '#Enterprise', '#100DaysOfCode']}
    />
  );
}

