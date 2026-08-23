import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const SECURITY_DOCS = 'https://fastapi.tiangolo.com/tutorial/security/';
const AUTH_YT = 'https://www.youtube.com/watch?v=5GxQ1rLTwaU';

const LEARNT_TODAY = [
  { title: 'OAuth2 password flow', text: 'standard login that returns a bearer token for SPAs and mobile clients' },
  { title: 'JWT access tokens', text: 'stateless auth — sign claims (sub, exp); verify on every protected request' },
  { title: 'Password hashing', text: 'bcrypt/passlib — never store plaintext passwords' },
  { title: 'get_current_user', text: 'Depends that decodes the Bearer token and loads the user or raises 401' },
  { title: 'Protected routes', text: 'inject current user; gate expensive /ask and admin endpoints' },
  { title: 'CORS', text: 'allow only trusted frontend origins in production' },
  { title: 'Rate limits', text: 'pair auth with rate limiting so stolen keys cannot burn your LLM budget' },
  { title: 'Least privilege', text: 'scopes/roles — not every user can reindex or call admin tools' },
];

const CORE = [
  {
    icon: '🔑', title: 'Issue a JWT', titleClass: 'card-title-cyan', subtitle: 'Login',
    description:
      'Verify username/password, then create_access_token with sub=user_id and an expiry. Return {"access_token", "token_type": "bearer"}.',
    code: 'token = create_access_token({"sub": str(user.id)})\nreturn {"access_token": token, "token_type": "bearer"}',
  },
  {
    icon: '👤', title: 'Current User Guard', titleClass: 'card-title-purple', subtitle: 'Depends',
    description:
      'Extract Authorization: Bearer …, decode JWT, load user. Invalid/expired tokens → 401.',
    code: 'async def get_current_user(\n  creds: HTTPAuthorizationCredentials = Depends(bearer),\n  db: Session = Depends(get_db),\n):\n    payload = decode(creds.credentials)\n    user = db.get(User, payload["sub"])\n    if not user: raise HTTPException(401)\n    return user',
  },
  {
    icon: '🛡️', title: 'Harden the Edge', titleClass: 'card-title-amber', subtitle: 'Extras',
    description:
      'HTTPS only, CORS allowlist, rate limit /ask, and never log raw tokens or passwords.',
    code: 'CORS · rate limit · HTTPS\nno secrets in logs',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Protect /ask', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Require Bearer token before calling the LLM. Unauthenticated requests must get 401.',
    code: '@app.post("/ask")\ndef ask(body: AskIn, user=Depends(get_current_user)):\n    ...',
  },
  {
    icon: '👥', title: 'Role Gate', titleClass: 'card-title-purple', subtitle: 'RBAC',
    description:
      'Only role=admin can hit /admin/reindex. Return 403 when the user is authenticated but forbidden.',
    code: 'if user.role != "admin":\n    raise HTTPException(403)',
  },
  {
    icon: '🔜', title: 'Next: Prod Deploy', titleClass: 'card-title-amber', subtitle: 'Day 44 Preview',
    description: 'Tomorrow — Uvicorn/Gunicorn, Docker, env config, and a production checklist.',
    link: { href: '/agentic-day-44', label: 'Go to Day 44 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'FastAPI Auth & Security', titleClass: 'card-title-cyan', subtitle: 'PY Module 43',
    description: 'Full lesson — OAuth2, JWT, protected routes, CORS, and rate limiting.',
    link: { href: '/python/learn/fastapi-authentication-and-security', label: 'Open PY Module 43 →' },
  },
  {
    icon: '🎬', title: 'FastAPI Auth', titleClass: 'card-title-purple', subtitle: 'Video',
    description: 'Video walkthrough of FastAPI authentication patterns.',
    link: { href: AUTH_YT, label: 'Watch FastAPI auth →', external: true },
  },
  {
    icon: '📖', title: 'Security Tutorial', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Official FastAPI security and OAuth2 tutorial.',
    link: { href: SECURITY_DOCS, label: 'Open security docs →', external: true },
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
          <p className="day001-datetime">Agentic AI Day 43 · 5 Oct 2026</p>
          <Link to="/agentic-day-44" className="day001-nav-btn day001-nav-next">Day 44 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>FastAPI</span><span>Security</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 43 <span aria-hidden="true">🔒</span></h1>
              <p className="day001-day-theme">FASTAPI AUTHENTICATION &amp; SECURITY</p>
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
          Day 43 locks the API. Add <strong>JWT/OAuth2</strong>, hash passwords, and protect LLM routes so
          agents and users only call what they are allowed to.
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

        <CardSection icon="🔒" title="AUTH CORE" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#FastAPI</span><span>#Day43</span><span>#JWT</span><span>#Security</span>
        </footer>
      </div>
    </div>
  );
}
