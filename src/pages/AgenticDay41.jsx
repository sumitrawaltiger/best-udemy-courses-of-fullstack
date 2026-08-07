import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const FASTAPI_DOCS = 'https://fastapi.tiangolo.com/';
const FASTAPI_YT = 'https://www.youtube.com/watch?v=0sOvCWHmTfU';

const LEARNT_TODAY = [
  { title: 'Why FastAPI', text: 'async-friendly, type-hint driven APIs with automatic OpenAPI docs — ideal for LLM microservices' },
  { title: 'Path operations', text: '@app.get / @app.post map URLs to handlers with clear status codes' },
  { title: 'Pydantic models', text: 'request and response bodies are validated automatically from type hints' },
  { title: 'Request bodies', text: 'declare a BaseModel; FastAPI parses JSON and returns 422 on bad input' },
  { title: 'Response models', text: 'response_model= keeps your public contract stable for clients and agents' },
  { title: 'Auto /docs', text: 'Swagger UI and ReDoc are generated from your code — no separate OpenAPI file to maintain' },
  { title: 'Depends()', text: 'dependency injection shares db sessions, auth, and config across routes' },
  { title: 'Async routes', text: 'async def awaits LLM HTTP calls without blocking the event loop' },
];

const CORE = [
  {
    icon: '🚀', title: 'First App', titleClass: 'card-title-cyan', subtitle: 'Setup',
    description:
      'Create the app, run uvicorn with --reload, and open /docs immediately. That loop is how FastAPI feels fast to learn.',
    code: 'from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/health")\ndef health():\n    return {"ok": True}\n\n# uvicorn main:app --reload',
  },
  {
    icon: '📐', title: 'Pydantic Bodies', titleClass: 'card-title-purple', subtitle: 'Validate',
    description:
      'Define AskIn with question: str. FastAPI validates before your handler runs — never trust raw JSON.',
    code: 'from pydantic import BaseModel\n\nclass AskIn(BaseModel):\n    question: str\n    top_k: int = 5\n\n@app.post("/ask")\ndef ask(body: AskIn):\n    return {"answer": "...", "model": "gpt"}',
  },
  {
    icon: '📖', title: 'OpenAPI Docs', titleClass: 'card-title-amber', subtitle: 'Contract',
    description:
      '/docs (Swagger) and /redoc stay in sync with your types. Frontends and agent tools can discover endpoints from the schema.',
    code: '# Interactive docs\n# http://127.0.0.1:8000/docs\n# http://127.0.0.1:8000/redoc',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Ask Endpoint Lab', titleClass: 'card-title-cyan', subtitle: 'Build',
    description:
      'POST /ask with a Pydantic body; return {answer, model}. Hit it from /docs and from curl.',
    code: 'curl -X POST /ask \\\n  -H "Content-Type: application/json" \\\n  -d \'{"question":"What is RAG?"}\'',
  },
  {
    icon: '🧵', title: 'Async LLM Call', titleClass: 'card-title-purple', subtitle: 'Perf',
    description:
      'Use async def and httpx/AsyncOpenAI so concurrent requests do not block while waiting on the model.',
    code: '@app.post("/ask")\nasync def ask(body: AskIn):\n    return await client.chat(body.question)',
  },
  {
    icon: '🔜', title: 'Next: Databases', titleClass: 'card-title-amber', subtitle: 'Day 42 Preview',
    description: 'Tomorrow — SQLAlchemy, get_db dependency, and CRUD endpoints.',
    link: { href: '/agentic-day-42', label: 'Go to Day 42 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'FastAPI Fundamentals', titleClass: 'card-title-cyan', subtitle: 'PY Module 41',
    description: 'Full lesson on the site — setup, path ops, Pydantic, and OpenAPI docs.',
    link: { href: '/python/learn/fastapi-fundamentals', label: 'Open PY Module 41 →' },
  },
  {
    icon: '🎬', title: 'FastAPI Tutorial', titleClass: 'card-title-purple', subtitle: 'freeCodeCamp',
    description: 'Long-form video walkthrough of FastAPI from zero.',
    link: { href: FASTAPI_YT, label: 'Watch FastAPI tutorial →', external: true },
  },
  {
    icon: '📖', title: 'FastAPI Docs', titleClass: 'card-title-amber', subtitle: 'Official',
    description: 'The official tutorial and reference — best primary source.',
    link: { href: FASTAPI_DOCS, label: 'Open FastAPI docs →', external: true },
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

export default function AgenticDay41() {
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
          <Link to="/agentic-day-40" className="day001-nav-btn day001-nav-prev">← Day 40</Link>
          <p className="day001-datetime">Agentic AI Day 41 · 17 Sep 2026</p>
          <Link to="/agentic-day-42" className="day001-nav-btn day001-nav-next">Day 42 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>FastAPI</span><span>APIs</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 41 <span aria-hidden="true">⚡</span></h1>
              <p className="day001-day-theme">FASTAPI FUNDAMENTALS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '27%' }} /></div>

        <p className="day001-summary">
          Day 41 opens the FastAPI stretch. Build typed <strong>path operations</strong>, validate with{' '}
          <strong>Pydantic</strong>, and get free <strong>OpenAPI docs</strong> — the API layer agents and UIs will call.
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

        <CardSection icon="⚡" title="FASTAPI CORE" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#FastAPI</span><span>#Day41</span><span>#Pydantic</span><span>#OpenAPI</span>
        </footer>
      </div>
    </div>
  );
}
