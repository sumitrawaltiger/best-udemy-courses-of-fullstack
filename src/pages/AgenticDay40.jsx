import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "REST basics", text: "resources, verbs, status codes — provider vs consumer" },
  { title: "JSON", text: "the lingua franca between Django, React, and LLM tools" },
  { title: "Serializers", text: "validate input and shape output dictionaries" },
  { title: "ViewSets & routers", text: "CRUD endpoints with less boilerplate" },
  { title: "Auth for APIs", text: "Token/JWT/Session — pick for SPA vs server apps" },
  { title: "Permissions", text: "IsAuthenticated, custom object permissions" },
  { title: "Browsable API", text: "DRF’s HTML API is great for manual testing" },
  { title: "Agent-ready", text: "stable REST contracts let tools and agents call your product" },
];

const CORE = [
  {
    icon: "📦", title: "Serializers", titleClass: 'card-title-cyan', subtitle: "Shape",
    description:
      "ModelSerializer maps models ↔ JSON with validation.",
    code: "class DocSerializer(ModelSerializer): ...",
  },
  {
    icon: "🚏", title: "ViewSets", titleClass: 'card-title-purple', subtitle: "CRUD",
    description:
      "ModelViewSet + DefaultRouter registers /docs/ quickly.",
    code: "router.register(\"docs\", DocViewSet)",
  },
  {
    icon: "🔑", title: "API Auth", titleClass: 'card-title-amber', subtitle: "Secure",
    description:
      "Require auth on write; rate-limit public read if needed.",
    code: "permission_classes = [IsAuthenticated]",
  },
];

const PRACTICE = [
  {
    icon: "🧪", title: "Docs API", titleClass: 'card-title-cyan', subtitle: "Lab",
    description: "CRUD for Document model; POST a doc; GET list as JSON.",
    code: "POST /api/docs/",
  },
  {
    icon: "🤖", title: "Tool Surface", titleClass: 'card-title-purple', subtitle: "Agents",
    description: "Design one /search endpoint an agent can call with query + top_k.",
    code: "GET /api/search?q=",
  },
  {
    icon: "🔜", title: "Next: FastAPI", titleClass: 'card-title-amber', subtitle: "Day 41",
    description: "Tomorrow — FastAPI fundamentals and auto OpenAPI docs.",
    link: { href: '/agentic-day-41', label: 'Go to Day 41 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "Django REST Framework", titleClass: 'card-title-cyan', subtitle: "PY Module 40",
    description: "Full lesson — REST fundamentals, serializers, ViewSets & routers, and API authentication.",
    link: { href: "/python/learn/django-rest-framework", label: 'Open PY Module 40 →' },
  },
  {
    icon: "🎬", title: "DRF Tutorial", titleClass: 'card-title-purple', subtitle: "Video",
    description: "A guided build of a real CRUD API using Django REST Framework.",
    link: { href: "https://www.youtube.com/watch?v=c708Nf0cHrs", label: 'Watch DRF tutorial →', external: true },
  },
  {
    icon: "📖", title: "DRF Docs", titleClass: 'card-title-amber', subtitle: "Docs",
    description: "Official Django REST Framework documentation and the browsable API reference.",
    link: { href: "https://www.django-rest-framework.org/", label: 'Open DRF docs →', external: true },
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

export default function AgenticDay40() {
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
          <Link to="/agentic-day-39" className="day001-nav-btn day001-nav-prev">← Day 39</Link>
          <p className="day001-datetime">Agentic AI Day 40 · 7 Sep 2026</p>
          <Link to="/agentic-day-41" className="day001-nav-btn day001-nav-next">Day 41 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 2</span><span>DRF</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 40 <span aria-hidden="true">🌐</span></h1>
              <p className="day001-day-theme">DJANGO REST FRAMEWORK</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '27%' }} /></div>

        <p className="day001-summary">
          Day 40 exposes JSON APIs. Use <strong>DRF serializers</strong>, <strong>viewsets</strong>, and routers so frontends and agents can call your backend.
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

        <CardSection icon="🌐" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day40</span><span>#DRF</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
