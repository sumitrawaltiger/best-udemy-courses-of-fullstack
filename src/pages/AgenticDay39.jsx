import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "Django forms", text: "validate and render HTML forms with clean error handling" },
  { title: "ModelForms", text: "generate forms from models to avoid duplication" },
  { title: "Auth system", text: "User model, login, logout, password hashing built in" },
  { title: "Signup flow", text: "create user → authenticate → login → redirect" },
  { title: "Permissions", text: "is_staff, groups, and object-level checks when needed" },
  { title: "Sessions", text: "server-side session store keeps users logged in" },
  { title: "CSRF", text: "protect POSTs — Django templates include the token" },
  { title: "Gen AI angle", text: "gate expensive LLM endpoints behind authenticated users" },
];

const CORE = [
  {
    icon: "📝", title: "Forms", titleClass: 'card-title-cyan', subtitle: "Validate",
    description:
      "Form.is_valid() → cleaned_data; never trust raw POST.",
    code: "if form.is_valid():\n  ...",
  },
  {
    icon: "👤", title: "Auth Views", titleClass: 'card-title-purple', subtitle: "Users",
    description:
      "Use django.contrib.auth views or custom login/signup.",
    code: "login(request, user)",
  },
  {
    icon: "🛡️", title: "Permissions", titleClass: 'card-title-amber', subtitle: "Access",
    description:
      "@login_required and permission_required on sensitive views.",
    code: "@login_required\ndef ask(request): ...",
  },
];

const PRACTICE = [
  {
    icon: "🧪", title: "Signup Lab", titleClass: 'card-title-cyan', subtitle: "Build",
    description: "Registration form + login; redirect to a protected /chat page.",
    code: "User.objects.create_user",
  },
  {
    icon: "🔒", title: "Protect LLM Route", titleClass: 'card-title-purple', subtitle: "Safety",
    description: "Only logged-in users can hit the generate endpoint.",
    code: "login_required",
  },
  {
    icon: "🔜", title: "Next: DRF", titleClass: 'card-title-amber', subtitle: "Day 40",
    description: "Tomorrow — Django REST Framework APIs.",
    link: { href: '/agentic-day-40', label: 'Go to Day 40 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "Forms & Auth", titleClass: 'card-title-cyan', subtitle: "PY Module 39",
    description: "Full lesson — forms, ModelForms, the built-in auth system, sessions, and permissions.",
    link: { href: "/python/learn/django-forms-and-authentication", label: 'Open PY Module 39 →' },
  },
  {
    icon: "🎬", title: "Django Auth", titleClass: 'card-title-purple', subtitle: "Video",
    description: "A practical walkthrough of building signup, login, and protected views.",
    link: { href: "https://www.youtube.com/watch?v=e1IyzVyrFSs", label: 'Watch Django auth video →', external: true },
  },
  {
    icon: "📖", title: "Auth Docs", titleClass: 'card-title-amber', subtitle: "Docs",
    description: "Official docs for Django's authentication system — users, permissions, and sessions.",
    link: { href: "https://docs.djangoproject.com/en/stable/topics/auth/", label: 'Open auth docs →', external: true },
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

export default function AgenticDay39() {
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
          <Link to="/agentic-day-38" className="day001-nav-btn day001-nav-prev">← Day 38</Link>
          <p className="day001-datetime">Agentic AI Day 39 · 26 Sep 2026</p>
          <Link to="/agentic-day-40" className="day001-nav-btn day001-nav-next">Day 40 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 2</span><span>Auth</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 39 <span aria-hidden="true">🔐</span></h1>
              <p className="day001-day-theme">DJANGO FORMS & AUTHENTICATION</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '26%' }} /></div>

        <p className="day001-summary">
          Day 39 secures the app. Build <strong>forms</strong>, ship <strong>login/signup</strong>, and use <strong>sessions & permissions</strong> correctly.
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

        <CardSection icon="🔐" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day39</span><span>#Django</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
