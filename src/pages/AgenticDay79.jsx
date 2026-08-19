import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LANGGRAPH = 'https://langchain-ai.github.io/langgraph/';
const MCP = 'https://modelcontextprotocol.io/';

const LEARNT_TODAY = [
  { title: 'Agent vs chatbot', text: 'chatbot answers once; agent plans, calls tools, observes, loops to a goal' },
  { title: 'ReAct loop', text: 'Reason → Act → Observe — classic interview pattern for tool-using agents' },
  { title: 'Stop rules', text: 'max steps, budget, success criteria — agents without stops are liability' },
  { title: 'Tool contracts', text: 'JSON schema, timeouts, idempotency, least privilege' },
  { title: 'Multi-agent', text: 'router / supervisor / critic — only when specialization clearly helps' },
  { title: 'HITL', text: 'human approval before irreversible side effects (send, pay, delete)' },
  { title: 'MCP one-liner', text: 'standard protocol so models discover and call tools/context portably' },
  { title: 'System design ask', text: 'API → queue → worker graph → tools → memory → eval → observe' },
];

const CORE = [
  {
    icon: '🔄', title: 'Agent Loop Board', titleClass: 'card-title-cyan', subtitle: 'Design',
    description:
      'Draw: user goal → planner → tool calls → observations → memory → stop/HITL → final answer.',
    code: 'plan → tool → observe\n→ memory → stop?',
  },
  {
    icon: '🛡️', title: 'Safety Answer', titleClass: 'card-title-purple', subtitle: 'Risk',
    description:
      'Threats: prompt injection, data exfil, runaway spend. Defenses: allowlists, sandboxes, filters, HITL.',
    code: 'allowlist tools\nsandbox · HITL\naudit log',
  },
  {
    icon: '👥', title: 'When Multi-Agent', titleClass: 'card-title-amber', subtitle: 'Team',
    description:
      'Use specialists for research vs code vs critique. Skip the zoo for a single FAQ bot.',
    code: 'router → specialist\ncritic → merge\nbudget cap',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Design Interview', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      '45-min style: “Build a support agent with RAG + tools + approval.” Cover scale, cost, and failure modes.',
    code: 'API · queue · graph\nRAG · tools · HITL\neval · cost',
  },
  {
    icon: '🔌', title: 'MCP Elevator', titleClass: 'card-title-purple', subtitle: 'Speak',
    description:
      '30-second explanation of MCP host/client/server and why it beats one-off tool glue.',
    code: 'discover tools\n→ call with schema\nportable',
  },
  {
    icon: '🔜', title: 'Next: Career Pack', titleClass: 'card-title-amber', subtitle: 'Day 80 Preview',
    description: 'Tomorrow — resume, GitHub, LinkedIn, and a mock interview milestone.',
    link: { href: '/agentic-day-80', label: 'Go to Day 80 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'LangGraph & MCP', titleClass: 'card-title-cyan', subtitle: 'PY Module 46',
    description: 'Graph workflows and protocol servers — core agentic interview material.',
    link: { href: '/python/learn/langgraph-and-mcp', label: 'Open PY Module 46 →' },
  },
  {
    icon: '📖', title: 'LangGraph Docs', titleClass: 'card-title-purple', subtitle: 'Official',
    description: 'Stateful agent graphs for system-design sketches. Pair with MCP at modelcontextprotocol.io.',
    link: { href: LANGGRAPH, label: 'Open LangGraph →', external: true },
  },
  {
    icon: '🔌', title: 'MCP Spec', titleClass: 'card-title-amber', subtitle: 'Protocol',
    description: 'Standard tool discovery — a sharp one-liner for agent interviews.',
    link: { href: MCP, label: 'Open MCP →', external: true },
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

export default function AgenticDay79() {
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
          <Link to="/agentic-day-78" className="day001-nav-btn day001-nav-prev">← Day 78</Link>
          <p className="day001-datetime">Agentic AI Day 79 · 7 Nov 2026</p>
          <Link to="/agentic-day-80" className="day001-nav-btn day001-nav-next">Day 80 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Interview</span><span>Agentic Design</span><span>Phase 11</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 79 <span aria-hidden="true">🤖</span></h1>
              <p className="day001-day-theme">AGENTIC AI SYSTEM DESIGN INTERVIEWS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · DESIGN</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '53%' }} /></div>

        <p className="day001-summary">
          Day 79 is the agent design round. Explain <strong>loops</strong>, <strong>tools</strong>,{' '}
          <strong>multi-agent</strong>, safety, and a full production sketch with eval.
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

        <CardSection icon="🤖" title="AGENT DESIGN" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#SystemDesign</span><span>#MCP</span><span>#Day79</span><span>#Interview</span>
        </footer>
      </div>
    </div>
  );
}
