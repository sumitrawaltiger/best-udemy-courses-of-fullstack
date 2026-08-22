import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "Deployment strategies", text: "serverless vs VM vs containers — pick for traffic and cold-start tolerance" },
  { title: "Flask LLM API", text: "thin HTTP layer: validate input, call model/RAG, return JSON" },
  { title: "Secrets", text: "API keys in env vars / secret managers — never commit .env" },
  { title: "AWS hosting", text: "EC2, Elastic Beanstalk, or Lambda+API Gateway for small apps" },
  { title: "Health & logs", text: "healthz, structured logs, request ids for debugging" },
  { title: "Rate limits", text: "protect your wallet and upstream model quotas" },
  { title: "Warm paths", text: "cache embeddings and frequent answers when safe" },
  { title: "Checklist", text: "HTTPS, timeouts, retries, monitoring, rollback plan" },
];

const CORE = [
  {
    icon: "🌐", title: "Flask Wrapper", titleClass: 'card-title-cyan', subtitle: "API",
    description:
      "One POST /ask endpoint; keep business logic out of the route handler.",
    code: "@app.post(\"/ask\")\ndef ask(): ...",
  },
  {
    icon: "☁️", title: "AWS Path", titleClass: 'card-title-purple', subtitle: "Host",
    description:
      "Package app, set env secrets, put a reverse proxy/TLS in front.",
    code: "build → ship → monitor",
  },
  {
    icon: "✅", title: "Prod Checklist", titleClass: 'card-title-amber', subtitle: "Ship",
    description:
      "Secrets, timeouts, logging, auth if needed, cost alerts.",
    code: "env · TLS · limits\nlogs · alerts",
  },
];

const PRACTICE = [
  {
    icon: "🧪", title: "Local Ship", titleClass: 'card-title-cyan', subtitle: "Lab",
    description: "Run Flask RAG behind curl; then dockerize the same entrypoint.",
    code: "curl -X POST /ask",
  },
  {
    icon: "💵", title: "Cost Guard", titleClass: 'card-title-purple', subtitle: "Ops",
    description: "Cap max tokens; add per-IP rate limit; alert on spend spikes.",
    code: "max_tokens · rate_limit",
  },
  {
    icon: "🔜", title: "Next: Django", titleClass: 'card-title-amber', subtitle: "Day 37",
    description: "Tomorrow — Django fundamentals for full-stack Gen AI backends.",
    link: { href: '/agentic-day-37', label: 'Go to Day 37 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "LLM Apps Deployment", titleClass: 'card-title-cyan', subtitle: "PY Module 36",
    description: "Full lesson — Flask API wrappers, AWS hosting paths, secrets, and a production checklist.",
    link: { href: "/python/learn/llm-apps-deployment", label: 'Open PY Module 36 →' },
  },
  {
    icon: "🎬", title: "Deploy ML Models", titleClass: 'card-title-purple', subtitle: "Video",
    description: "Practical walkthrough of taking a model from notebook to a served API.",
    link: { href: "https://www.youtube.com/watch?v=Z2Qm9itGxQI", label: 'Watch deployment walkthrough →', external: true },
  },
  {
    icon: "📖", title: "Flask Docs", titleClass: 'card-title-amber', subtitle: "Docs",
    description: "Official Flask docs — routing, request handling, and app configuration.",
    link: { href: "https://flask.palletsprojects.com/", label: 'Open Flask docs →', external: true },
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

export default function AgenticDay36() {
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
          <Link to="/agentic-day-35" className="day001-nav-btn day001-nav-prev">← Day 35</Link>
          <p className="day001-datetime">Agentic AI Day 36 · 27 Sep 2026</p>
          <Link to="/agentic-day-37" className="day001-nav-btn day001-nav-next">Day 37 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 2</span><span>Deploy</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 36 <span aria-hidden="true">🚀</span></h1>
              <p className="day001-day-theme">LLM APPS DEPLOYMENT</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · PHASE 2</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '24%' }} /></div>

        <p className="day001-summary">
          Day 36 puts Gen AI online. Wrap models in a <strong>Flask API</strong>, configure envs, and host with a solid <strong>production checklist</strong>.
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

        <CardSection icon="🚀" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day36</span><span>#Deploy</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
