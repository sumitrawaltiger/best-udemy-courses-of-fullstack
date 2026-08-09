import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "Arc 31–55", text: "LangChain → RAG/FT → LlamaIndex/deploy → Django/DRF → FastAPI → Agentic (LangGraph/MCP/n8n) → prod & capstone" },
  { title: "RAG first", text: "ground answers before chasing fine-tunes" },
  { title: "APIs matter", text: "Django/FastAPI give agents and UIs a stable contract" },
  { title: "Agents = loops", text: "plan → tool → observe with stop rules and budgets" },
  { title: "MCP & n8n", text: "standard tools + visual automation accelerate delivery" },
  { title: "Eval & safety", text: "measure success; least privilege; HITL for irreversible acts" },
  { title: "Portfolio", text: "one agentic capstone with README, eval, and demo beats ten tutorials" },
  { title: "What’s next", text: "deeper MLOps/LLMOps, more multi-agent products, or the next stack in the 1500-day journey" },
];

const CORE = [
  {
    icon: "✅", title: "Checklist", titleClass: 'card-title-cyan', subtitle: "Ship It",
    description:
      "RAG service, authenticated API, agent graph with tools, eval suite, deploy + runbook.",
    code: "RAG · API · agent\neval · deploy",
  },
  {
    icon: "🧪", title: "Quality Bar", titleClass: 'card-title-purple', subtitle: "Prove",
    description:
      "Offline eval pass rate + online success% without budget blowups.",
    code: "eval · cost · safety",
  },
  {
    icon: "🗺️", title: "Journey Map", titleClass: 'card-title-amber', subtitle: "31–55",
    description:
      "From LangChain building blocks to production agentic systems.",
    code: "build → automate → harden",
  },
];

const PRACTICE = [
  {
    icon: "📦", title: "Portfolio Story", titleClass: 'card-title-cyan', subtitle: "Demo",
    description: "Walk: data → RAG → agent tools → approval → API → metrics.",
    code: "5-minute narrative",
  },
  {
    icon: "🔍", title: "Health Ritual", titleClass: 'card-title-purple', subtitle: "Weekly",
    description: "Re-run eval suite; review traces; check spend; rotate one secret.",
    code: "eval · traces · $",
  },
  {
    icon: "🔜", title: "Next: Streaming UX", titleClass: 'card-title-amber', subtitle: "Day 56",
    description: "Continue — harden production with streaming, cache, quotas, incidents, then LLMOps.",
    link: { href: '/agentic-day-56', label: 'Go to Day 56 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "Python & Agentic Track", titleClass: 'card-title-cyan', subtitle: "Hub",
    description: "Full lesson on the site for this module.",
    link: { href: "/python", label: 'Open module →' },
  },
  {
    icon: "📘", title: "GenAI Journal Track", titleClass: 'card-title-purple', subtitle: "Hub",
    description: "Full lesson on the site for this module.",
    link: { href: "/genai", label: 'Open module →' },
  },
  {
    icon: "🗺️", title: "Mindset", titleClass: 'card-title-amber', subtitle: "Remember",
    description: "Ship simple agents, measure hard, and add complexity only when the metrics actually demand it.",
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

export default function AgenticDay55() {
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
          <Link to="/agentic-day-54" className="day001-nav-btn day001-nav-prev">← Day 54</Link>
          <p className="day001-datetime">Agentic AI Day 55 · 4 Oct 2026</p>
          <Link to="/agentic-day-56" className="day001-nav-btn day001-nav-next">Day 56 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Milestone</span><span>Day 55</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 55 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">GEN AI & AGENTIC AI MILESTONE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '37%' }} /></div>

        <p className="day001-summary">
          Day 55 closes this stretch. You can explain the stack from <strong>LangChain/RAG</strong> through <strong>Django/FastAPI</strong> to <strong>LangGraph, MCP, and n8n agents</strong> — and ship safely.
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

        <CardSection icon="🏁" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day55</span><span>#Milestone</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
