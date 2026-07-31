import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const SA_DOCS = 'https://docs.sqlalchemy.org/';
const SA_YT = 'https://www.youtube.com/watch?v=5GorMC2lPpk';

const LEARNT_TODAY = [
  { title: 'SQLAlchemy role', text: 'ORM + Core SQL toolkit — define tables as Python classes, query without raw SQL strings' },
  { title: 'Engine & Session', text: 'engine talks to the DB; SessionLocal is your unit of work per request' },
  { title: 'Models', text: 'subclass Base, set __tablename__, declare Column fields with types and constraints' },
  { title: 'get_db dependency', text: 'FastAPI Depends yields a session, closes it in finally — one session per request' },
  { title: 'CRUD endpoints', text: 'POST create, GET list/detail, PATCH update, DELETE remove with proper status codes' },
  { title: 'HTTPException', text: 'raise 404 when a row is missing — never leak stack traces to clients' },
  { title: 'Alembic preview', text: 'version schema changes with migrations instead of editing prod by hand' },
  { title: 'Gen AI tables', text: 'store conversations, messages, and document metadata beside your LLM routes' },
];

const CORE = [
  {
    icon: '🧱', title: 'Model + Engine', titleClass: 'card-title-cyan', subtitle: 'Setup',
    description:
      'Create the engine from DATABASE_URL, SessionLocal factory, and declarative Base. Models inherit Base and map to tables.',
    code: 'from sqlalchemy import create_engine, Column, Integer, String\nfrom sqlalchemy.orm import sessionmaker, declarative_base\n\nengine = create_engine("sqlite:///./app.db")\nSessionLocal = sessionmaker(bind=engine, autoflush=False)\nBase = declarative_base()\n\nclass Message(Base):\n    __tablename__ = "messages"\n    id = Column(Integer, primary_key=True)\n    role = Column(String(20))\n    content = Column(String)',
  },
  {
    icon: '🔌', title: 'get_db', titleClass: 'card-title-purple', subtitle: 'DI',
    description:
      'Yield a session to the route, always close it. FastAPI Depends injects it into every CRUD handler.',
    code: 'def get_db():\n    db = SessionLocal()\n    try:\n        yield db\n    finally:\n        db.close()\n\n@app.get("/messages")\ndef list_messages(db: Session = Depends(get_db)):\n    return db.query(Message).all()',
  },
  {
    icon: '📋', title: 'CRUD Shape', titleClass: 'card-title-amber', subtitle: 'API',
    description:
      'Create commits and refreshes; reads use filter/first/all; updates mutate then commit; deletes remove then commit.',
    code: 'db.add(row); db.commit(); db.refresh(row)\nrow = db.query(Message).filter_by(id=id).first()\nif not row: raise HTTPException(404)',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Messages CRUD', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Table messages(id, role, content). Wire POST /messages, GET /messages, GET /messages/{id}, DELETE.',
    code: 'POST /messages\nGET  /messages/{id}\nDELETE /messages/{id}',
  },
  {
    icon: '⚠️', title: '404 Path', titleClass: 'card-title-purple', subtitle: 'Errors',
    description:
      'Missing ids must return HTTPException(status_code=404, detail="Not found") — keep error bodies consistent.',
    code: 'raise HTTPException(404, detail="Message not found")',
  },
  {
    icon: '🔜', title: 'Next: Auth', titleClass: 'card-title-amber', subtitle: 'Day 43 Preview',
    description: 'Tomorrow — JWT/OAuth2, password hashing, and protecting LLM routes.',
    link: { href: '/agentic-day-43', label: 'Go to Day 43 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'FastAPI with Databases', titleClass: 'card-title-cyan', subtitle: 'PY Module 42',
    description: 'Full lesson — SQLAlchemy, sessions, CRUD, Alembic, and seed data.',
    link: { href: '/python/learn/fastapi-with-databases', label: 'Open PY Module 42 →' },
  },
  {
    icon: '🎬', title: 'FastAPI + SQLAlchemy', titleClass: 'card-title-purple', subtitle: 'Video',
    description: 'Hands-on video wiring FastAPI to SQLAlchemy.',
    link: { href: SA_YT, label: 'Watch tutorial →', external: true },
  },
  {
    icon: '📖', title: 'SQLAlchemy Docs', titleClass: 'card-title-amber', subtitle: 'Official',
    description: 'ORM and Core reference for models, sessions, and queries.',
    link: { href: SA_DOCS, label: 'Open SQLAlchemy docs →', external: true },
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

export default function AgenticDay42() {
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
          <Link to="/agentic-day-41" className="day001-nav-btn day001-nav-prev">← Day 41</Link>
          <p className="day001-datetime">Agentic AI Day 42 · 11 Sep 2026</p>
          <Link to="/agentic-day-43" className="day001-nav-btn day001-nav-next">Day 43 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>FastAPI</span><span>SQLAlchemy</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 42 <span aria-hidden="true">🗄️</span></h1>
              <p className="day001-day-theme">FASTAPI WITH DATABASES</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '28%' }} /></div>

        <p className="day001-summary">
          Day 42 persists API data. Wire <strong>SQLAlchemy</strong>, inject sessions with{' '}
          <strong>Depends(get_db)</strong>, and ship clean <strong>CRUD</strong> endpoints.
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

        <CardSection icon="🗄️" title="ORM &amp; SESSIONS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#FastAPI</span><span>#Day42</span><span>#SQLAlchemy</span><span>#CRUD</span>
        </footer>
      </div>
    </div>
  );
}
