import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "MCP roles", text: "host, client, server — clear separation of concerns" },
  { title: "Tools vs resources", text: "callable actions vs readable context blobs" },
  { title: "Server lifecycle", text: "start, advertise capabilities, handle calls, shut down" },
  { title: "Auth boundaries", text: "servers should enforce their own permissions" },
  { title: "Local vs remote", text: "stdio for local; HTTP/SSE patterns for remote" },
  { title: "Composability", text: "many small servers beat one mega-server" },
  { title: "Testing", text: "unit-test tool handlers without the LLM in the loop" },
  { title: "Prod care", text: "timeouts, allowlists, audit logs for tool calls" },
];

const CORE = [
  {
    icon: "🖥️", title: "Minimal Server", titleClass: 'card-title-cyan', subtitle: "Build",
    description:
      "Expose 1–2 tools (e.g. get_time, fetch_url) with schemas.",
    code: "list_tools · call_tool",
  },
  {
    icon: "🤝", title: "Client Wire-Up", titleClass: 'card-title-purple', subtitle: "Consume",
    description:
      "Agent discovers tools at runtime — no hardcoded stubs.",
    code: "discover → bind → call",
  },
  {
    icon: "🛡️", title: "Allowlist", titleClass: 'card-title-amber', subtitle: "Safety",
    description:
      "Only register safe tools in prod; gate writes.",
    code: "allowlist tools",
  },
];

const PRACTICE = [
  {
    icon: "🧪", title: "FS Read Server", titleClass: 'card-title-cyan', subtitle: "Lab",
    description: "Tool: read_file(path) limited to ./sandbox.",
    code: "sandbox only",
  },
  {
    icon: "🔗", title: "Agent Demo", titleClass: 'card-title-purple', subtitle: "Integrate",
    description: "LangGraph/LangChain agent solves a task using your MCP tools.",
    code: "MCP + agent",
  },
  {
    icon: "🔜", title: "Next: Guardrails", titleClass: 'card-title-amber', subtitle: "Day 52",
    description: "Tomorrow — safety and guardrails for agents.",
    link: { href: '/agentic-day-52', label: 'Go to Day 52 →' },
  },
];

const RESOURCES = [
  {
    icon: "📖", title: "MCP Docs", titleClass: 'card-title-cyan', subtitle: "Spec",
    description: "Spec resource.",
    link: { href: "https://modelcontextprotocol.io/", label: 'Open →', external: true },
  },
  {
    icon: "📘", title: "LangGraph & MCP", titleClass: 'card-title-purple', subtitle: "Module 46",
    description: "Full lesson on the site for this module.",
    link: { href: "/python/learn/langgraph-and-mcp", label: 'Open module →' },
  },
  {
    icon: "🗺️", title: "Rule", titleClass: 'card-title-amber', subtitle: "Remember",
    description: "Remember resource.",
    link: { href: "MCP standardizes tools; you still own security.", label: 'Open →', external: true },
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

export default function AgenticDay51() {
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
          <Link to="/agentic-day-50" className="day001-nav-btn day001-nav-prev">← Day 50</Link>
          <p className="day001-datetime">Agentic AI Day 51 · 8 Oct 2026</p>
          <Link to="/agentic-day-52" className="day001-nav-btn day001-nav-next">Day 52 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>MCP</span><span>Day 51</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 51 <span aria-hidden="true">🔌</span></h1>
              <p className="day001-day-theme">MCP SERVERS HANDS-ON</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · AGENTS</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '34%' }} /></div>

        <p className="day001-summary">
          Day 51 goes practical on MCP. Stand up a <strong>Model Context Protocol</strong> server, expose tools, and call them from an agent client.
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

        <CardSection icon="🔌" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day51</span><span>#MCP</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
