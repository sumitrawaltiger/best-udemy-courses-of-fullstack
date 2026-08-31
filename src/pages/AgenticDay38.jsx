import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "Models", text: "Python classes map to DB tables via Django’s ORM" },
  { title: "Fields", text: "CharField, TextField, ForeignKey, DateTimeField — pick types deliberately" },
  { title: "Migrations", text: "makemigrations + migrate keep schema versioned" },
  { title: "QuerySet API", text: "filter, exclude, get, annotate — chain lazily until evaluated" },
  { title: "Relationships", text: "FK, M2M, OneToOne for real domain models" },
  { title: "Admin customization", text: "list_display, search_fields speed up ops" },
  { title: "Gen AI use", text: "store chats, documents, embeddings metadata in Postgres/SQLite" },
  { title: "N+1 care", text: "select_related / prefetch_related when walking relations" },
];

const CORE = [
  {
    icon: "📐", title: "Define Models", titleClass: 'card-title-cyan', subtitle: "Schema",
    description:
      "Explicit fields + __str__; add created_at for audit trails.",
    code: "class Document(models.Model):\n  title = models.CharField(...)",
  },
  {
    icon: "🔄", title: "Migrations", titleClass: 'card-title-purple', subtitle: "Evolve",
    description:
      "Never edit production DB by hand — migrate forward.",
    code: "makemigrations\nmigrate",
  },
  {
    icon: "🔍", title: "QuerySets", titleClass: 'card-title-amber', subtitle: "Read",
    description:
      "Document.objects.filter(owner=user).order_by(\"-id\")[:20]",
    code: "filter · exclude · get",
  },
];

const PRACTICE = [
  {
    icon: "🧪", title: "Chat Tables", titleClass: 'card-title-cyan', subtitle: "Lab",
    description: "Model Conversation + Message; create via shell; list in admin.",
    code: "Message.objects.create(...)",
  },
  {
    icon: "🔗", title: "FK Practice", titleClass: 'card-title-purple', subtitle: "Relations",
    description: "Document FK to User; query user.document_set.all().",
    code: "user.documents.all()",
  },
  {
    icon: "🔜", title: "Next: Auth", titleClass: 'card-title-amber', subtitle: "Day 39",
    description: "Tomorrow — forms, login/signup, permissions.",
    link: { href: '/agentic-day-39', label: 'Go to Day 39 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "Django Models & ORM", titleClass: 'card-title-cyan', subtitle: "PY Module 38",
    description: "Full lesson — models, fields, migrations, QuerySets, and relationships.",
    link: { href: "/python/learn/django-models-and-orm", label: 'Open PY Module 38 →' },
  },
  {
    icon: "🎬", title: "Django ORM", titleClass: 'card-title-purple', subtitle: "Video",
    description: "A hands-on look at defining models and querying them through the ORM.",
    link: { href: "https://www.youtube.com/watch?v=aHC3uTkT9r8", label: 'Watch Django ORM video →', external: true },
  },
  {
    icon: "📖", title: "QuerySet API", titleClass: 'card-title-amber', subtitle: "Docs",
    description: "Official reference for every QuerySet method — filter, exclude, annotate, and more.",
    link: { href: "https://docs.djangoproject.com/en/stable/ref/models/querysets/", label: 'Open QuerySet docs →', external: true },
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

export default function AgenticDay38() {
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
          <Link to="/agentic-day-37" className="day001-nav-btn day001-nav-prev">← Day 37</Link>
          <p className="day001-datetime">Agentic AI Day 38 · 8 Oct 2026</p>
          <Link to="/agentic-day-39" className="day001-nav-btn day001-nav-next">Day 39 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 2</span><span>Django ORM</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 38 <span aria-hidden="true">🗃️</span></h1>
              <p className="day001-day-theme">DJANGO MODELS & ORM</p>
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
          Day 38 stores product data. Define <strong>models</strong>, run <strong>migrations</strong>, query with the <strong>ORM</strong>, and relate tables with foreign keys.
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

        <CardSection icon="🗃️" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day38</span><span>#Django</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
