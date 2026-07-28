import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "OAuth2 password flow", text: "standard way to issue tokens for SPAs and mobile" },
  { title: "JWT access tokens", text: "stateless auth — verify signature and expiry on each request" },
  { title: "Password hashing", text: "passlib/bcrypt — never store plaintext" },
  { title: "Depends(get_current_user)", text: "inject the authenticated user into protected routes" },
  { title: "Scopes / roles", text: "limit who can call admin or expensive generate endpoints" },
  { title: "CORS", text: "allow only trusted frontends" },
  { title: "Secrets rotation", text: "JWT secret and API keys in env; rotate carefully" },
  { title: "Abuse prevention", text: "rate limits + auth together protect model spend" },
];

const CORE = [
  {
    icon: "🔑", title: "JWT Issue", titleClass: 'card-title-cyan', subtitle: "Login",
    description:
      "Verify password → create access_token with sub=user_id.",
    code: "create_access_token({\"sub\": user.id})",
  },
  {
    icon: "👤", title: "Current User", titleClass: 'card-title-purple', subtitle: "Guard",
    description:
      "Decode Bearer token; load user; 401 if invalid.",
    code: "user = Depends(get_current_user)",
  },
  {
    icon: "🛡️", title: "Hardening", titleClass: 'card-title-amber', subtitle: "Extras",
    description:
      "HTTPS only, CORS allowlist, rate limit /ask.",
    code: "CORS · rate limit · HTTPS",
  },
];

const PRACTICE = [
  {
    icon: "🧪", title: "Protected /ask", titleClass: 'card-title-cyan', subtitle: "Lab",
    description: "Require Bearer token before calling the LLM.",
    code: "Authorization: Bearer …",
  },
  {
    icon: "👥", title: "Role Gate", titleClass: 'card-title-purple', subtitle: "RBAC",
    description: "Only role=admin can hit /admin/reindex.",
    code: "if user.role != \"admin\"",
  },
  {
    icon: "🔜", title: "Next: Prod Deploy", titleClass: 'card-title-amber', subtitle: "Day 44",
    description: "Tomorrow — FastAPI production deployment.",
    link: { href: '/agentic-day-44', label: 'Go to Day 44 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "FastAPI Auth & Security", titleClass: 'card-title-cyan', subtitle: "PY Module 43",
    description: "Full lesson on the site for this module.",
    link: { href: "/python/learn/fastapi-authentication-and-security", label: 'Open module →' },
  },
  {
    icon: "📖", title: "FastAPI Security", titleClass: 'card-title-purple', subtitle: "Docs",
    description: "Docs resource.",
    link: { href: "https://fastapi.tiangolo.com/tutorial/security/", label: 'Open →', external: true },
  },
  {
    icon: "📖", title: "OAuth2", titleClass: 'card-title-amber', subtitle: "Overview",
    description: "Overview resource.",
    link: { href: "https://oauth.net/2/", label: 'Open →', external: true },
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

export default function AgenticDay43() {
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
          <Link to="/agentic-day-42" className="day001-nav-btn day001-nav-prev">← Day 42</Link>
          <p className="day001-datetime">Agentic AI Day 43 · 43 Aug 2026</p>
          <Link to="/agentic-day-44" className="day001-nav-btn day001-nav-next">Day 44 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Security</span><span>Day 43</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 43 <span aria-hidden="true">🔒</span></h1>
              <p className="day001-day-theme">FASTAPI AUTHENTICATION & SECURITY</p>
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
          Day 43 locks the API. Add <strong>JWT/OAuth2</strong>, password hashing, and security headers so LLM routes are not public by default.
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

        <CardSection icon="🔒" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day43</span><span>#Security</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
