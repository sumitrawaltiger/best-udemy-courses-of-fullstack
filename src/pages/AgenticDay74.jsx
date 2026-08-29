import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'Injection is the default threat', text: 'agents ingest untrusted text constantly' },
  { title: 'Side effects are the risk', text: 'unsafe tool calls matter more than unsafe words' },
  { title: 'Policy engines', text: 'centralize allow/deny decisions with clear rules' },
  { title: 'Least privilege', text: 'give tools only what the agent needs for the current task' },
  { title: 'SSRF and exfil', text: 'fetch_url can become a tunnel to internal networks' },
  { title: 'Secrets hygiene', text: 'never expose secrets in prompts, logs, or tool outputs' },
  { title: 'HITL for irreversible', text: 'human approvals prevent expensive mistakes' },
  { title: 'Red-team loops', text: 'systematically test jailbreaks and tool abuse' },
];

const CORE = [
  {
    icon: '🛡️', title: 'Policy Gate', titleClass: 'card-title-cyan', subtitle: 'Control',
    description:
      'All tool calls go through a policy gate that validates intent, args, and scope before execution.',
    code: 'deny by default',
  },
  {
    icon: '🚫', title: 'Capability Limits', titleClass: 'card-title-purple', subtitle: 'Reduce',
    description:
      'Remove dangerous tools, constrain paths/hosts, and restrict network access to safe allowlists.',
    code: 'allowlist everything',
  },
  {
    icon: '🧪', title: 'Red Team Suite', titleClass: 'card-title-amber', subtitle: 'Test',
    description:
      'Run adversarial prompts that try to override instructions or trigger unsafe tool behavior.',
    code: 'attack -> verify',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Injection Battery', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Test 20 injection prompts and confirm risky tool calls are blocked.',
    code: 'block -> log',
  },
  {
    icon: '📜', title: 'Audit Log', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Log tool name, decision, args hash, and user scope for every call.',
    code: 'immutable trail',
  },
  {
    icon: '🔜', title: 'Next: Capstone', titleClass: 'card-title-amber', subtitle: 'Day 75',
    description: 'Tomorrow → capstone milestone: ship an agentic system end to end.',
    link: { href: '/agentic-day-75', label: 'Go to Day 75 →' },
  },
];

const RESOURCES = [
  {
    icon: '📖', title: 'OWASP LLM Top 10', titleClass: 'card-title-cyan', subtitle: 'Security',
    description: 'Security risks and mitigations for LLM applications.',
    link: { href: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/', label: 'Open →', external: true },
  },
  {
    icon: '📖', title: 'MCP', titleClass: 'card-title-purple', subtitle: 'Tools',
    description: 'Standardized tool servers still require your own security model.',
    link: { href: 'https://modelcontextprotocol.io/', label: 'Open →', external: true },
  },
  {
    icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember',
    description: 'Security is a system property, not a prompt.',
    footer: 'Constrain tools first.',
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

export default function AgenticDay74() {
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
          <Link to="/agentic-day-73" className="day001-nav-btn day001-nav-prev">← Day 73</Link>
          <p className="day001-datetime">Agentic AI Day 74 · 12 Nov 2026</p>
          <Link to="/agentic-day-75" className="day001-nav-btn day001-nav-next">Day 75 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Security</span><span>Day 74</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 74 <span aria-hidden="true">🛡️</span></h1>
              <p className="day001-day-theme">AGENT SECURITY & POLICY ENGINES</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · SECURITY</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '50%' }} /></div>

        <p className="day001-summary">
          Day 74 hardens agents: prompt injection defenses, least-privilege tool access, SSRF protection, policy gates,
          and red-team suites. Constrain capabilities before scaling autonomy.
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> - {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🛡️" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Security</span><span>#Day74</span><span>#OWASP</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}

