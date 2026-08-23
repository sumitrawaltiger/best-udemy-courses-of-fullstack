import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'Supervisor pattern', text: 'one coordinator routes tasks to specialist agents' },
  { title: 'Tool contracts', text: 'agents behave better when tools have strict schemas' },
  { title: 'Stop rules', text: 'time, token, and step budgets prevent runaway loops' },
  { title: 'Delegation', text: 'planner delegates; workers execute; reviewer checks' },
  { title: 'State matters', text: 'shared state enables multi-step workflows that don’t forget' },
  { title: 'Trace everything', text: 'agentic systems need traces more than chatbots do' },
  { title: 'Human checkpoints', text: 'insert approvals before irreversible actions' },
  { title: 'Ship the graph', text: 'treat the graph like code: versions, canaries, rollbacks' },
];

const CORE = [
  {
    icon: '🧠', title: 'Supervisor', titleClass: 'card-title-cyan', subtitle: 'Orchestrate',
    description:
      'A supervisor agent routes subtasks to specialists and merges results into one final output.',
    code: 'route -> delegate -> merge',
  },
  {
    icon: '🧩', title: 'Graph Design', titleClass: 'card-title-purple', subtitle: 'Control',
    description:
      'Model the workflow as nodes and edges with clear stop conditions and error handling paths.',
    code: 'nodes · edges · stops',
  },
  {
    icon: '🙋', title: 'HITL Gates', titleClass: 'card-title-amber', subtitle: 'Safety',
    description:
      'Require approvals for actions like deletes, emails, payments, or system changes.',
    code: 'approve | reject',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: '3-Agent Team', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Build planner + worker + reviewer. Keep the reviewer strict.',
    code: 'plan -> do -> check',
  },
  {
    icon: '📊', title: 'Step Budget', titleClass: 'card-title-purple', subtitle: 'Hardening',
    description: 'Add max steps per run and a recovery path when the budget is hit.',
    code: 'max_steps',
  },
  {
    icon: '🔜', title: 'Next: Tool Reliability', titleClass: 'card-title-amber', subtitle: 'Day 72',
    description: 'Tomorrow → production-grade tool calls: retries, idempotency, and rate limits.',
    link: { href: '/agentic-day-72', label: 'Go to Day 72 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'LangGraph', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Graph-based agent workflows and patterns.',
    link: { href: 'https://langchain-ai.github.io/langgraph/', label: 'Open →', external: true },
  },
  {
    icon: '📖', title: 'MCP', titleClass: 'card-title-purple', subtitle: 'Tools',
    description: 'Standardizing tool servers and capabilities.',
    link: { href: 'https://modelcontextprotocol.io/', label: 'Open →', external: true },
  },
  {
    icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember',
    description: 'Agentic power comes from control, not autonomy.',
    footer: 'Constrain, then scale.',
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

export default function AgenticDay71() {
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
          <Link to="/agentic-day-70" className="day001-nav-btn day001-nav-prev">← Day 70</Link>
          <p className="day001-datetime">Agentic AI Day 71 · 2 Nov 2026</p>
          <Link to="/agentic-day-72" className="day001-nav-btn day001-nav-next">Day 72 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Orchestration</span><span>Day 71</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 71 <span aria-hidden="true">🧠</span></h1>
              <p className="day001-day-theme">MULTI-AGENT ORCHESTRATION</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · SYSTEMS</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '47%' }} /></div>

        <p className="day001-summary">
          Day 71 scales agentic design: supervisor routing, specialist agents, strict tool schemas, and stop rules.
          Build multi-agent workflows with control and predictable behavior.
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

        <CardSection icon="🧠" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#MultiAgent</span><span>#Day71</span><span>#LangGraph</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}

