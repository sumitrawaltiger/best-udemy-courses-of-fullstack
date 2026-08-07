import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LANGGRAPH_YT = 'https://www.youtube.com/watch?v=9BPCV5TYPFA';
const LANGGRAPH = 'https://langchain-ai.github.io/langgraph/';

const LEARNT_TODAY = [
  { title: 'LangGraph', text: 'stateful graph workflows — nodes, edges, and cycles that model real agent loops' },
  { title: 'Typed state', text: 'a shared state object (often TypedDict / Pydantic) flows through every node' },
  { title: 'Conditional edges', text: 'route to different nodes based on tool results, flags, or LLM decisions' },
  { title: 'MCP idea', text: 'Model Context Protocol — a standard way for models to discover and call external tools/context' },
  { title: 'MCP servers', text: 'expose filesystem, browser, DB, or custom tools over the protocol' },
  { title: 'LangChain + MCP', text: 'wire MCP tool servers into agent graphs so tools stay swappable' },
  { title: 'Debugging graphs', text: 'visualize paths; log state transitions at each node' },
  { title: 'Reliability', text: 'timeouts, max steps, and interrupt points for human approval' },
];

const CORE = [
  {
    icon: '🕸️', title: 'Graph Workflow', titleClass: 'card-title-cyan', subtitle: 'Nodes',
    description:
      'Define nodes as functions that read/write state. Add edges (and cycles). Compile, then invoke with initial state.',
    code: 'from langgraph.graph import StateGraph\n\ngraph = StateGraph(AgentState)\ngraph.add_node("plan", plan)\ngraph.add_node("act", act)\ngraph.add_edge("plan", "act")\napp = graph.compile()\napp.invoke({"goal": "..."})',
  },
  {
    icon: '🔌', title: 'MCP Tools', titleClass: 'card-title-purple', subtitle: 'Protocol',
    description:
      'Run an MCP server; the client lists tools; your agent calls them with a clear schema. Same protocol across editors and runtimes.',
    code: 'list_tools()\n→ call_tool(name, args)\n# filesystem · fetch · custom',
  },
  {
    icon: '🛑', title: 'Stop Rules', titleClass: 'card-title-amber', subtitle: 'Safety',
    description:
      'Cap max_iterations and budget. Put human-approval nodes before irreversible side effects (send email, delete, charge).',
    code: 'max_steps · timeout\ninterrupt_before=["send"]',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Two-Node Graph', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'research node writes notes into state; write node turns notes into a draft. Print state after each hop.',
    code: 'state["notes"] → draft\nlog every transition',
  },
  {
    icon: '🧰', title: 'MCP Demo', titleClass: 'card-title-purple', subtitle: 'Tools',
    description:
      'Connect one MCP filesystem or fetch server to a tiny LangGraph agent. Call exactly one tool end-to-end.',
    code: 'MCP server → list_tools\n→ agent call_tool',
  },
  {
    icon: '🔜', title: 'Next: n8n', titleClass: 'card-title-amber', subtitle: 'Day 47 Preview',
    description: 'Tomorrow — visual automation with n8n triggers, AI nodes, and human gates.',
    link: { href: '/agentic-day-47', label: 'Go to Day 47 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'LangGraph & MCP', titleClass: 'card-title-cyan', subtitle: 'PY Module 46',
    description: 'Full lesson — graph workflows, MCP components, and wiring servers into agents.',
    link: { href: '/python/learn/langgraph-and-mcp', label: 'Open PY Module 46 →' },
  },
  {
    icon: '🎬', title: 'LangGraph Tutorial', titleClass: 'card-title-purple', subtitle: 'Sam Witteveen',
    description: 'Hands-on walkthrough of LangGraph agent graphs.',
    link: { href: LANGGRAPH_YT, label: 'Watch LangGraph tutorial →', external: true },
  },
  {
    icon: '📖', title: 'LangGraph Docs', titleClass: 'card-title-amber', subtitle: 'Official',
    description: 'Stateful agent graphs. For tool servers, also read the MCP spec at modelcontextprotocol.io.',
    link: { href: LANGGRAPH, label: 'Open LangGraph docs →', external: true },
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

export default function AgenticDay46() {
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
          <Link to="/agentic-day-45" className="day001-nav-btn day001-nav-prev">← Day 45</Link>
          <p className="day001-datetime">Agentic AI Day 46 · 22 Sep 2026</p>
          <Link to="/agentic-day-47" className="day001-nav-btn day001-nav-next">Day 47 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>LangGraph</span><span>Phase 9</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 46 <span aria-hidden="true">🕸️</span></h1>
              <p className="day001-day-theme">LANGGRAPH & MCP</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · LANGGRAPH</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '31%' }} /></div>

        <p className="day001-summary">
          Day 46 builds graphs. Orchestrate agents with <strong>LangGraph</strong> and connect tools via{' '}
          <strong>MCP</strong> (Model Context Protocol) servers.
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

        <CardSection icon="🕸️" title="GRAPH & PROTOCOL" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#LangGraph</span><span>#MCP</span><span>#Day46</span><span>#GenAI</span>
        </footer>
      </div>
    </div>
  );
}
