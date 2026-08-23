import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const MCP = 'https://modelcontextprotocol.io/';
const A2A = 'https://github.com/a2aproject/A2A';

const LEARNT_TODAY = [
  { title: 'Why A2A', text: 'agents from different vendors need a shared way to discover and talk to each other' },
  { title: 'A2A idea', text: 'Agent-to-Agent protocol — cards, capabilities, and message passing between agents' },
  { title: 'MCP vs A2A', text: 'MCP connects models to tools/context; A2A connects agents to agents' },
  { title: 'Agent cards', text: 'advertise name, skills, endpoints, and auth requirements' },
  { title: 'Task handoff', text: 'delegate a subtask with a clear schema and success criteria' },
  { title: 'Trust boundaries', text: 'authenticate peer agents; don’t accept unsigned capability claims' },
  { title: 'Failure contracts', text: 'timeouts, partial results, and who owns retries across agent boundaries' },
  { title: 'Design tip', text: 'start with one specialist peer — don’t mesh ten agents on day one' },
];

const CORE = [
  {
    icon: '🪪', title: 'Agent Card', titleClass: 'card-title-cyan', subtitle: 'Discover',
    description:
      'Publish what your agent can do and how to call it. Peers choose you based on skills, not hardcoding.',
    code: 'name · skills[]\nendpoint · auth',
  },
  {
    icon: '🤝', title: 'Handoff Message', titleClass: 'card-title-purple', subtitle: 'Delegate',
    description:
      'Send goal, constraints, and expected output schema. Receive status + result or structured error.',
    code: 'goal · constraints\nschema · deadline',
  },
  {
    icon: '🔐', title: 'Peer Trust', titleClass: 'card-title-amber', subtitle: 'Security',
    description:
      'mTLS or signed tokens between agents. Allowlist which peers can request which skills.',
    code: 'auth peer\nallowlist skills\naudit handoffs',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Two-Agent Sketch', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Researcher agent + Writer agent. Define cards and the handoff JSON for a blog brief.',
    code: 'researcher → writer\nhandoff JSON',
  },
  {
    icon: '⏱️', title: 'Timeout Contract', titleClass: 'card-title-purple', subtitle: 'Ops',
    description:
      'Write what happens if the peer is slow: cancel, partial accept, or escalate to human.',
    code: 'timeout → policy\npartial | HITL',
  },
  {
    icon: '🔜', title: 'Next: Cloud Deploy', titleClass: 'card-title-amber', subtitle: 'Day 94 Preview',
    description: 'Tomorrow — ship agents on AWS / GCP / Azure style platforms.',
    link: { href: '/agentic-day-94', label: 'Go to Day 94 →' },
  },
];

const RESOURCES = [
  {
    icon: '🔌', title: 'MCP Spec', titleClass: 'card-title-cyan', subtitle: 'Tools',
    description: 'Model Context Protocol — tools/context side of the stack.',
    link: { href: MCP, label: 'Open MCP →', external: true },
  },
  {
    icon: '🤝', title: 'A2A Overview', titleClass: 'card-title-purple', subtitle: 'Agents',
    description: 'Agent-to-Agent protocol concepts and ecosystem links.',
    link: { href: A2A, label: 'Explore A2A →', external: true },
  },
  {
    icon: '👥', title: 'Multi-Agent Day', titleClass: 'card-title-amber', subtitle: 'Day 48',
    description: 'Router/supervisor patterns before protocol-level interop.',
    link: { href: '/agentic-day-48', label: 'Open Day 48 →' },
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

export default function AgenticDay93() {
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
          <Link to="/agentic-day-92" className="day001-nav-btn day001-nav-prev">← Day 92</Link>
          <p className="day001-datetime">Agentic AI Day 93 · 24 Nov 2026</p>
          <Link to="/agentic-day-94" className="day001-nav-btn day001-nav-next">Day 94 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>A2A</span><span>Phase 13</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 93 <span aria-hidden="true">🤝</span></h1>
              <p className="day001-day-theme">A2A PROTOCOL & AGENT INTEROP</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · A2A</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '62%' }} /></div>

        <p className="day001-summary">
          Day 93 connects agents to agents. Learn <strong>A2A</strong> vs <strong>MCP</strong>, agent cards, trusted
          handoffs, and failure contracts across peers.
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

        <CardSection icon="🤝" title="INTEROP" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#A2A</span><span>#MCP</span><span>#Day93</span><span>#MultiAgent</span><span>#AgenticAI</span>
        </footer>
      </div>
    </div>
  );
}
