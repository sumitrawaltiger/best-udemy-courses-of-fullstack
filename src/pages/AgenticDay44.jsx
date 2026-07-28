import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "ASGI servers", text: "uvicorn workers behind gunicorn or a process manager" },
  { title: "Containers", text: "Docker image with pinned deps; multi-stage builds keep images small" },
  { title: "Config", text: "pydantic-settings for typed env config" },
  { title: "Health checks", text: "/health for orchestrators and load balancers" },
  { title: "Observability", text: "structured logs, metrics, tracing for LLM latency" },
  { title: "Zero-downtime", text: "rolling deploys; keep previous revision for rollback" },
  { title: "Static & CORS", text: "production origins only" },
  { title: "Bridge to agents", text: "stable APIs become tools for LangGraph/n8n next" },
];

const CORE = [
  {
    icon: "🐳", title: "Containerize", titleClass: 'card-title-cyan', subtitle: "Ship",
    description:
      "Dockerfile CMD uvicorn main:app --host 0.0.0.0 --port 8000",
    code: "docker build · run",
  },
  {
    icon: "⚙️", title: "Settings", titleClass: 'card-title-purple', subtitle: "Config",
    description:
      "BaseSettings reads DATABASE_URL, OPENAI_API_KEY, APP_ENV.",
    code: "settings = Settings()",
  },
  {
    icon: "📈", title: "Observe", titleClass: 'card-title-amber', subtitle: "Ops",
    description:
      "Log request_id, model, tokens, latency_ms on every /ask.",
    code: "log structured JSON",
  },
];

const PRACTICE = [
  {
    icon: "🧪", title: "Docker Run", titleClass: 'card-title-cyan', subtitle: "Lab",
    description: "Build image; curl health and ask against localhost mapping.",
    code: "curl /health",
  },
  {
    icon: "↩️", title: "Rollback Drill", titleClass: 'card-title-purple', subtitle: "Ops",
    description: "Document how to revert to previous image tag in 5 minutes.",
    code: "prev_tag → redeploy",
  },
  {
    icon: "🔜", title: "Next: Agentic AI", titleClass: 'card-title-amber', subtitle: "Day 45",
    description: "Tomorrow — what agentic AI is and how agents differ from chatbots.",
    link: { href: '/agentic-day-45', label: 'Go to Day 45 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "FastAPI Production", titleClass: 'card-title-cyan', subtitle: "PY Module 44",
    description: "Full lesson on the site for this module.",
    link: { href: "/python/learn/fastapi-production-deployment", label: 'Open module →' },
  },
  {
    icon: "📖", title: "Uvicorn", titleClass: 'card-title-purple', subtitle: "Docs",
    description: "Docs resource.",
    link: { href: "https://www.uvicorn.org/", label: 'Open →', external: true },
  },
  {
    icon: "📖", title: "Docker", titleClass: 'card-title-amber', subtitle: "Docs",
    description: "Docs resource.",
    link: { href: "https://docs.docker.com/get-started/", label: 'Open →', external: true },
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

export default function AgenticDay44() {
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
          <Link to="/agentic-day-43" className="day001-nav-btn day001-nav-prev">← Day 43</Link>
          <p className="day001-datetime">Agentic AI Day 44 · 44 Aug 2026</p>
          <Link to="/agentic-day-45" className="day001-nav-btn day001-nav-next">Day 45 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Deploy</span><span>Day 44</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 44 <span aria-hidden="true">🏭</span></h1>
              <p className="day001-day-theme">FASTAPI PRODUCTION DEPLOYMENT</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · FASTAPI</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '29%' }} /></div>

        <p className="day001-summary">
          Day 44 hardens FastAPI for prod. <strong>Uvicorn/Gunicorn</strong>, containers, env config, health checks, and a ship checklist.
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

        <CardSection icon="🏭" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day44</span><span>#Deploy</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
