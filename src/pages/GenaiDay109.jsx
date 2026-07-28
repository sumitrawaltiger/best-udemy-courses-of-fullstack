import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Launch checklists matter', text: 'safety, logging, rollbacks, and support paths need to be ready before launch' },
  { title: 'Guardrails stay layered', text: 'input checks, output checks, policy rules, and human review each catch different failures' },
  { title: 'Support loops', text: 'product teams need a path for bad outputs, flagged cases, and customer follow-up' },
  { title: 'Incident thinking', text: 'assume bad outputs will happen and prepare a response plan' },
  { title: 'User trust is fragile', text: 'clear messaging and evidence can preserve trust even when the model is imperfect' },
  { title: 'Release slowly', text: 'feature flags and staged rollout reduce blast radius' },
];

const core = [
  { icon: '🛡️', title: 'Launch Rails', titleClass: 'card-title-cyan', subtitle: 'Protect', description: 'Combine validation, policy checks, guardrails, and rollback switches before going live.', code: 'check -> allow -> monitor' },
  { icon: '🚨', title: 'Incident Plan', titleClass: 'card-title-purple', subtitle: 'Respond', description: 'Define who investigates bad runs, where traces live, and how to pause the feature quickly.', code: 'detect -> triage -> rollback' },
  { icon: '👥', title: 'Support Path', titleClass: 'card-title-amber', subtitle: 'Trust', description: 'Make it easy for users and operators to flag bad output and trigger review.', code: 'flag -> review' },
];

const practice = [
  { icon: '🧪', title: 'Launch Checklist', titleClass: 'card-title-cyan', subtitle: 'Build', description: 'Write a pre-launch checklist for one Gen AI feature with owners per item.', code: 'owners + gates' },
  { icon: '📓', title: 'Incident Drill', titleClass: 'card-title-purple', subtitle: 'Ops', description: 'Simulate one harmful output and walk through the response plan.', code: 'drill -> learn' },
  { icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-amber', subtitle: 'Day 110', description: 'Tomorrow -> wrap-up and roadmap checkpoint.', link: { href: '/genai-day-110', label: 'Go to Day 110 ->' } },
];

const resources = [
  { icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub', description: 'Browse the full Gen AI lessons and curriculum on the site.', link: { href: '/genai', label: 'Open Gen AI Track ->' } },
  { icon: '📖', title: 'OWASP LLM Top 10', titleClass: 'card-title-purple', subtitle: 'Security', description: 'A useful checklist of launch-time risks for LLM products.', link: { href: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/', label: 'Open ->', external: true } },
  { icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember', description: 'Safe launches are designed, not improvised.', footer: 'Prepare for failure.' },
];

export default function GenaiDay109() {
  return (
    <StandaloneJourneyPage
      dayNumber={109}
      dateLabel="Gen AI Day 109 · 109 Aug 2026"
      prev={{ href: '/genai-day-108', label: '← Day 108' }}
      next={{ href: '/genai-day-110', label: 'Day 110 →' }}
      tags={['Gen AI', 'Launch Safety', 'Day 109']}
      theme="SAFE LAUNCHES FOR GEN AI PRODUCTS"
      heroIcon="🛡️"
      profileRole="GEN AI · SAFETY"
      progressWidth="73%"
      summary="Day 109 prepares a real Gen AI launch: layered safeguards, rollout controls, incident planning, and support paths that protect users and the product."
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#GenAI', '#Safety', '#Day109', '#Launch', '#100DaysOfCode']}
    />
  );
}
