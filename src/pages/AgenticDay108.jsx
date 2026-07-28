import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'PolicyOps', text: 'policies need change control, visibility, and auditability like code' },
  { title: 'Scope everything', text: 'tenant, user, tool, and action scope should be explicit on every call' },
  { title: 'Central policy gate', text: 'one decision layer is easier to reason about than scattered checks' },
  { title: 'Denials are data', text: 'blocked actions reveal where prompts, tools, or permissions need work' },
  { title: 'Fast rollback', text: 'policy mistakes should be reversible quickly without redeploying everything' },
  { title: 'Review approvals', text: 'sensitive policy changes deserve human review before rollout' },
];

const core = [
  { icon: '🛡️', title: 'Central Policy Gate', titleClass: 'card-title-cyan', subtitle: 'Control', description: 'Route all sensitive actions through one policy decision point with clear outcomes.', code: 'request -> policy -> allow/deny' },
  { icon: '🏷️', title: 'Scoped Decisions', titleClass: 'card-title-purple', subtitle: 'Limit', description: 'Evaluate access by tenant, actor, tool, action, and context on every request.', code: 'tenant + actor + action' },
  { icon: '📜', title: 'Policy Audit', titleClass: 'card-title-amber', subtitle: 'Review', description: 'Log the policy version and reason behind every allow or deny decision.', code: 'policy_v + reason' },
];

const practice = [
  { icon: '🧪', title: 'Policy Table', titleClass: 'card-title-cyan', subtitle: 'Build', description: 'Create a matrix of which roles can invoke which tools under which conditions.', code: 'role -> tool -> scope' },
  { icon: '📓', title: 'Denied Call Review', titleClass: 'card-title-purple', subtitle: 'Ops', description: 'Inspect blocked requests and decide whether the tool, prompt, or permission should change.', code: 'deny -> analyze' },
  { icon: '🔜', title: 'Next: Incident Readiness', titleClass: 'card-title-amber', subtitle: 'Day 109', description: 'Tomorrow -> prepare for failures in live agent systems.', link: { href: '/agentic-day-109', label: 'Go to Day 109 ->' } },
];

const resources = [
  { icon: '📘', title: 'OWASP LLM Top 10', titleClass: 'card-title-cyan', subtitle: 'Security', description: 'Useful reference for policy and access risks in LLM applications.', link: { href: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/', label: 'Open ->', external: true } },
  { icon: '📖', title: 'Python Track', titleClass: 'card-title-purple', subtitle: 'Hub', description: 'Agentic + Gen AI modules feeding the broader roadmap.', link: { href: '/python', label: 'Open Python track ->' } },
  { icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember', description: 'A policy system is only trustworthy when every decision is explainable.', footer: 'Centralize the gate.' },
];

export default function AgenticDay108() {
  return (
    <StandaloneJourneyPage
      dayNumber={108}
      dateLabel="Agentic AI Day 108 · 14 Nov 2026"
      prev={{ href: '/agentic-day-107', label: '← Day 107' }}
      next={{ href: '/agentic-day-109', label: 'Day 109 →' }}
      tags={['Agentic AI', 'PolicyOps', 'Day 108']}
      theme="OPERATING POLICY ENGINES"
      heroIcon="🛡️"
      profileRole="AGENTIC AI · POLICIES"
      progressWidth="72%"
      summary="Day 108 makes access control operational: central policy gates, scoped decisions, audit logs, and rapid rollback for policy mistakes."
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#PolicyOps', '#Day108', '#Security', '#100DaysOfCode']}
    />
  );
}
