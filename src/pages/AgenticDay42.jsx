import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "SQLAlchemy + FastAPI", text: "models, engine, SessionLocal — same ORM ideas as Django, different wiring" },
  { title: "Depends(get_db)", text: "yield a session per request; close in finally" },
  { title: "CRUD endpoints", text: "create/read/update/delete with status codes" },
  { title: "Async DB", text: "async engines/sessions when you go fully async" },
  { title: "Error handling", text: "HTTPException for 404/400; don’t leak stack traces" },
  { title: "Migrations", text: "Alembic for schema changes in real projects" },
  { title: "Gen AI tables", text: "store conversations, tool traces, document metadata" },
  { title: "Transactions", text: "commit on success; rollback on failure" },
];

const CORE = [
  {
    icon: "🧱", title: "Models + Engine", titleClass: 'card-title-cyan', subtitle: "Setup",
    description:
      "Declarative Base + create_engine; SessionLocal factory.",
    code: "SessionLocal = sessionmaker(...)",
  },
  {
    icon: "🔌", title: "get_db", titleClass: 'card-title-purple', subtitle: "DI",
    description:
      "def get_db(): db=SessionLocal(); try yield db; finally close.",
    code: "db: Session = Depends(get_db)",
  },
  {
    icon: "📋", title: "CRUD Routes", titleClass: 'card-title-amber', subtitle: "API",
    description:
      "POST create, GET list/detail, PATCH update, DELETE remove.",
    code: "201 · 200 · 404",
  },
];

const PRACTICE = [
  {
    icon: "🧪", title: "Messages CRUD", titleClass: 'card-title-cyan', subtitle: "Lab",
    description: "Table messages(id, role, content); full CRUD via FastAPI.",
    code: "POST /messages",
  },
  {
    icon: "⚠️", title: "404 Path", titleClass: 'card-title-purple', subtitle: "Errors",
    description: "Raise HTTPException(404) when id missing.",
    code: "raise HTTPException(404)",
  },
  {
    icon: "🔜", title: "Next: Security", titleClass: 'card-title-amber', subtitle: "Day 43",
    description: "Tomorrow — FastAPI auth & security.",
    link: { href: '/agentic-day-43', label: 'Go to Day 43 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "FastAPI with Databases", titleClass: 'card-title-cyan', subtitle: "PY Module 42",
    description: "Full lesson on the site for this module.",
    link: { href: "/python/learn/fastapi-with-databases", label: 'Open module →' },
  },
  {
    icon: "🎬", title: "FastAPI + SQLAlchemy", titleClass: 'card-title-purple', subtitle: "Video",
    description: "Video resource.",
    link: { href: "https://www.youtube.com/watch?v=5GorMC2lPpk", label: 'Open →', external: true },
  },
  {
    icon: "📖", title: "SQLAlchemy 2.0", titleClass: 'card-title-amber', subtitle: "Docs",
    description: "Docs resource.",
    link: { href: "https://docs.sqlalchemy.org/", label: 'Open →', external: true },
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
          <p className="day001-datetime">Agentic AI Day 42 · 42 Aug 2026</p>
          <Link to="/agentic-day-43" className="day001-nav-btn day001-nav-next">Day 43 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>FastAPI</span><span>Day 42</span></div>
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
          Day 42 persists API data. Wire <strong>SQLAlchemy</strong>, async sessions, and clean <strong>CRUD</strong> endpoints with dependency injection.
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

        <CardSection icon="🗄️" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day42</span><span>#FastAPI</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
