import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "Why Django", text: "batteries-included web framework — ORM, auth, admin, for Gen AI product UIs and APIs" },
  { title: "MVT", text: "Model–View–Template: data, request logic, HTML rendering" },
  { title: "Project vs app", text: "project is the config container; apps are reusable feature packages" },
  { title: "URLs", text: "path() routes map URLs to views cleanly" },
  { title: "Views & templates", text: "function/class views pass context into templates" },
  { title: "Admin", text: "instant CRUD UI for models — great for internal tools" },
  { title: "Settings", text: "DEBUG, INSTALLED_APPS, DATABASES — know where knobs live" },
  { title: "Path ahead", text: "models/ORM → forms/auth → DRF for APIs" },
];

const CORE = [
  {
    icon: "🏗️", title: "Project Setup", titleClass: 'card-title-cyan', subtitle: "Start",
    description:
      "django-admin startproject + startapp; wire the app into INSTALLED_APPS.",
    code: "django-admin startproject config\npython manage.py startapp core",
  },
  {
    icon: "🗺️", title: "URLs → Views", titleClass: 'card-title-purple', subtitle: "Routing",
    description:
      "Include app urls; keep paths readable and named.",
    code: "path(\"chat/\", views.chat)",
  },
  {
    icon: "🛠️", title: "Admin", titleClass: 'card-title-amber', subtitle: "Ops UI",
    description:
      "Register models; use admin for quick data inspection during RAG prototyping.",
    code: "admin.site.register(Doc)",
  },
];

const PRACTICE = [
  {
    icon: "🧪", title: "Hello Django", titleClass: 'card-title-cyan', subtitle: "Lab",
    description: "One page that greets and links to a static “about Gen AI” template.",
    code: "render(request, \"home.html\")",
  },
  {
    icon: "📁", title: "App Layout", titleClass: 'card-title-purple', subtitle: "Structure",
    description: "Separate chat, accounts, and docs apps early — easier later.",
    code: "apps: chat · accounts",
  },
  {
    icon: "🔜", title: "Next: ORM", titleClass: 'card-title-amber', subtitle: "Day 38",
    description: "Tomorrow — models, migrations, QuerySets, relationships.",
    link: { href: '/agentic-day-38', label: 'Go to Day 38 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "Django Fundamentals", titleClass: 'card-title-cyan', subtitle: "PY Module 37",
    description: "Full lesson — the MVT pattern, project/app structure, URLs, views, and the admin site.",
    link: { href: "/python/learn/django-fundamentals", label: 'Open PY Module 37 →' },
  },
  {
    icon: "🎬", title: "Django Tutorial", titleClass: 'card-title-purple', subtitle: "Video",
    description: "A guided walkthrough of starting a Django project from scratch.",
    link: { href: "https://www.youtube.com/watch?v=F5mRW0jo-4I", label: 'Watch Django tutorial →', external: true },
  },
  {
    icon: "📖", title: "Django Docs", titleClass: 'card-title-amber', subtitle: "Docs",
    description: "Official Django documentation — the definitive reference for every feature.",
    link: { href: "https://docs.djangoproject.com/", label: 'Open Django docs →', external: true },
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

export default function AgenticDay37() {
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
          <Link to="/agentic-day-36" className="day001-nav-btn day001-nav-prev">← Day 36</Link>
          <p className="day001-datetime">Agentic AI Day 37 · 6 Sep 2026</p>
          <Link to="/agentic-day-38" className="day001-nav-btn day001-nav-next">Day 38 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 2</span><span>Django</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 37 <span aria-hidden="true">🎸</span></h1>
              <p className="day001-day-theme">DJANGO FUNDAMENTALS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '25%' }} /></div>

        <p className="day001-summary">
          Day 37 starts the web framework stretch. Learn Django’s <strong>MVT</strong> pattern, projects/apps, <strong>URLs</strong>, <strong>views</strong>, and the admin.
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

        <CardSection icon="🎸" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day37</span><span>#Django</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
