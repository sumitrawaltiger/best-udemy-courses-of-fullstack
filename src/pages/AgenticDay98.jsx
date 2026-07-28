import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const SLACK_API = 'https://api.slack.com/';
const TEAMS_BOTS = 'https://learn.microsoft.com/en-us/microsoftteams/platform/bots/what-are-bots';

const LEARNT_TODAY = [
  { title: 'Where agents actually live', text: 'Slack, Teams, email, and ticketing systems day-to-day, not a standalone chat window' },
  { title: 'SSO & enterprise auth', text: 'an agent authenticates as the calling user, respecting existing permission boundaries' },
  { title: 'Webhook-driven agents', text: 'a Slack mention or a new ticket triggers the agent — the user never has to open a separate app' },
  { title: 'Audit & compliance', text: 'every action inside an enterprise tool needs the same logging discipline as Day 69' },
  { title: 'Rate limits & etiquette', text: 'bots in shared channels behave — no spamming, and a clear "I\'m a bot" signal' },
  { title: 'Escalation paths', text: 'a clean handoff to a human when the agent is uncertain or the user explicitly asks for one' },
  { title: 'Multi-tenant design', text: 'one codebase serving many customers or workspaces, each with fully isolated data' },
  { title: 'Highest-value first targets', text: 'support, IT helpdesk, and internal ops are usually where enterprise agents pay off first' },
];

const CORE = [
  {
    icon: '💬', title: 'Chat Platform Integration', titleClass: 'card-title-cyan', subtitle: 'Slack / Teams',
    description:
      'A slash command or @mention triggers a webhook, which routes to your agent and posts the response back into the same thread.',
    code: 'on slash_command → agent.run(input)\n→ post_to_channel(response)',
  },
  {
    icon: '🔑', title: 'SSO & Permission Boundaries', titleClass: 'card-title-purple', subtitle: 'Act As The User',
    description:
      'The agent authenticates as whoever invoked it, so it can only see and do what that specific user is already allowed to.',
  },
  {
    icon: '🏘️', title: 'Multi-Tenant Design', titleClass: 'card-title-amber', subtitle: 'One Codebase, Many Customers',
    description:
      'Every request is scoped to a workspace or tenant id, so one customer\'s data never leaks into another\'s.',
    code: 'query.filter(tenant_id=current_tenant)',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Wire a Slack Slash Command', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Connect a /ask command in a test Slack workspace to your agent and get a response back in-channel.',
    code: '/ask what\'s our refund policy?',
  },
  {
    icon: '🙋', title: 'Add a Human Escalation Path', titleClass: 'card-title-purple', subtitle: 'Practice',
    description: 'Give the agent an explicit "hand this to a human" action it can trigger when it\'s not confident.',
  },
  {
    icon: '🔜', title: 'Next: Agent Product Design & UX', titleClass: 'card-title-amber', subtitle: 'Day 99 Preview',
    description: 'Tomorrow — streaming, confirmations, and error states that make agents feel trustworthy.',
    link: { href: '/agentic-day-99', label: 'Go to Day 99 →' },
  },
];

const RESOURCES = [
  {
    icon: '🔐', title: 'AI Security & Compliance', titleClass: 'card-title-cyan', subtitle: 'Day 69',
    description: 'The same audit-log and least-privilege discipline, now applied inside enterprise chat tools.',
    link: { href: '/agentic-day-69', label: 'Open Day 69 →' },
  },
  {
    icon: '📖', title: 'Slack API', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Official reference for building Slack apps, slash commands, and event subscriptions.',
    link: { href: SLACK_API, label: 'Open Slack API docs →', external: true },
  },
  {
    icon: '📖', title: 'Teams Bots', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Official reference for building bots on the Microsoft Teams platform.',
    link: { href: TEAMS_BOTS, label: 'Open Teams bot docs →', external: true },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">{card.icon}</span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a href={card.link.href} target="_blank" rel="noopener noreferrer" className="day001-card-link">{card.link.label}</a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">{card.link.label}</Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title"><span aria-hidden="true">{icon}</span> {title}</h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (<TopicCard key={card.title} card={card} />))}
      </div>
    </section>
  );
}

export default function AgenticDay98() {
  const scaleRef = useRef(null);

  useEffect(() => {
    const wrap = scaleRef.current;
    if (!wrap) return;
    const page = wrap.parentElement;
    const fitToScreen = () => {
      wrap.style.transform = 'none';
      wrap.style.width = '100%';
      if (page) page.style.height = '';
      const pad = 12;
      const scale = Math.min((window.innerHeight - pad) / wrap.scrollHeight, (window.innerWidth - pad) / wrap.scrollWidth);
      wrap.style.transform = `scale(${scale})`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
    };
    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);
    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) avatar.addEventListener('load', fitToScreen);
    return () => { window.removeEventListener('resize', fitToScreen); observer.disconnect(); };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/" className="day001-nav-btn day001-nav-home">Home</Link>
          <Link to="/agentic-day-97" className="day001-nav-btn day001-nav-prev">← Day 97</Link>
          <p className="day001-datetime">Agentic AI Day 98 · 9 Oct 2026</p>
          <Link to="/agentic-day-99" className="day001-nav-btn day001-nav-next">Day 99 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Enterprise</span><span>Phase 14</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 98 <span aria-hidden="true">🏢</span></h1>
              <p className="day001-day-theme">ENTERPRISE AGENT INTEGRATION</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · ENTERPRISE</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '65%' }} /></div>

        <p className="day001-summary">
          Day 98 puts agents where work already happens. <strong>Slack/Teams</strong> integration,{' '}
          <strong>SSO-scoped permissions</strong>, and <strong>multi-tenant</strong> design so one codebase
          serves many customers safely.
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> — {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🏢" title="AGENTS AT WORK" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Enterprise</span><span>#Day98</span><span>#Slack</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
