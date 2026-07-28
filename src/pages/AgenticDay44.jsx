import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const UVICORN = 'https://www.uvicorn.org/';
const DEPLOY_YT = 'https://www.youtube.com/watch?v=7N5O62FjGDc';

const LEARNT_TODAY = [
  { title: 'ASGI servers', text: 'uvicorn (optionally behind gunicorn) serves FastAPI in production' },
  { title: 'Containers', text: 'Docker image with pinned deps; multi-stage builds keep images small' },
  { title: 'Typed settings', text: 'pydantic-settings reads DATABASE_URL, secrets, and APP_ENV from the environment' },
  { title: 'Health checks', text: '/health for load balancers and orchestrators — never skip it' },
  { title: 'Observability', text: 'structured logs with request_id, model, tokens, and latency_ms' },
  { title: 'HTTPS', text: 'terminate TLS at Nginx/Caddy or cloud LB; redirect HTTP → HTTPS' },
  { title: 'Rollouts', text: 'rolling deploys + keep previous image tag for instant rollback' },
  { title: 'Bridge to agents', text: 'a stable production API becomes the tool surface for LangGraph/n8n next' },
];

const CORE = [
  {
    icon: '🐳', title: 'Containerize', titleClass: 'card-title-cyan', subtitle: 'Ship',
    description:
      'Dockerfile installs deps and runs uvicorn on 0.0.0.0:8000. Same image for staging and prod.',
    code: 'CMD ["uvicorn", "main:app",\\\n     "--host", "0.0.0.0", "--port", "8000"]',
  },
  {
    icon: '⚙️', title: 'Settings', titleClass: 'card-title-purple', subtitle: 'Config',
    description:
      'BaseSettings loads secrets from env — never commit .env. Fail fast if required keys are missing.',
    code: 'class Settings(BaseSettings):\n    database_url: str\n    openai_api_key: str\n    app_env: str = "dev"\n\nsettings = Settings()',
  },
  {
    icon: '📈', title: 'Observe', titleClass: 'card-title-amber', subtitle: 'Ops',
    description:
      'Log every /ask with user id, model, token count, and latency. Alert on error rate and spend spikes.',
    code: 'log.info("ask", extra={\n  "request_id": ...,\n  "tokens": n, "ms": latency\n})',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Docker Run', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Build the image, map port 8000, curl /health and a protected /ask with a test token.',
    code: 'docker build -t ask-api .\ndocker run -p 8000:8000 --env-file .env ask-api\ncurl /health',
  },
  {
    icon: '↩️', title: 'Rollback Drill', titleClass: 'card-title-purple', subtitle: 'Ops',
    description:
      'Document how to redeploy the previous image tag in under five minutes. Practice once.',
    code: 'prev_tag → redeploy\nverify /health',
  },
  {
    icon: '🔜', title: 'Next: Agentic AI', titleClass: 'card-title-amber', subtitle: 'Day 45 Preview',
    description: 'Tomorrow — what agentic AI is, memory, planning, and multi-agent systems.',
    link: { href: '/agentic-day-45', label: 'Go to Day 45 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'FastAPI Production', titleClass: 'card-title-cyan', subtitle: 'PY Module 44',
    description: 'Full lesson — Uvicorn, Docker, HTTPS/headers, and production checklist.',
    link: { href: '/python/learn/fastapi-production-deployment', label: 'Open PY Module 44 →' },
  },
  {
    icon: '🎬', title: 'Deploy FastAPI', titleClass: 'card-title-purple', subtitle: 'Video',
    description: 'Practical deployment guidance for FastAPI apps.',
    link: { href: DEPLOY_YT, label: 'Watch deploy guide →', external: true },
  },
  {
    icon: '📖', title: 'Uvicorn', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'ASGI server docs — workers, SSL flags, and deployment notes.',
    link: { href: UVICORN, label: 'Open Uvicorn docs →', external: true },
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
          <p className="day001-datetime">Agentic AI Day 44 · 11 Sep 2026</p>
          <Link to="/agentic-day-45" className="day001-nav-btn day001-nav-next">Day 45 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>FastAPI</span><span>Deploy</span></div>
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
          Day 44 hardens FastAPI for prod. <strong>Containerize</strong>, load typed{' '}
          <strong>settings</strong>, add <strong>health + logs</strong>, and keep a one-step rollback.
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

        <CardSection icon="🏭" title="SHIP SAFE" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#FastAPI</span><span>#Day44</span><span>#Docker</span><span>#Prod</span>
        </footer>
      </div>
    </div>
  );
}
