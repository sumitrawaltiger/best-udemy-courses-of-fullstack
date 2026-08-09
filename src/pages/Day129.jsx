import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const JWT_INTRO = 'https://jwt.io/introduction';
const JSONWEBTOKEN = 'https://github.com/auth0/node-jsonwebtoken#readme';
const DOTENV = 'https://github.com/motdotla/dotenv#readme';

const LEARNT_TODAY = [
  { title: 'Why auth', text: 'public routes are fine for hello; real APIs need to know who is calling' },
  { title: 'JWT idea', text: 'a signed token the client sends on later requests — server verifies the signature' },
  { title: 'Login issues token', text: 'POST /login checks credentials, then jwt.sign({ sub: userId }, secret)' },
  { title: 'Authorization header', text: 'client sends Authorization: Bearer <token> on protected calls' },
  { title: 'Verify middleware', text: 'middleware reads the header, jwt.verify, attaches req.user, or returns 401' },
  { title: 'Secrets in env', text: 'JWT_SECRET lives in .env — never commit it; use dotenv locally' },
  { title: 'Hash passwords', text: 'store bcrypt hashes, never plain text — even in learning apps' },
  { title: 'Short expiry', text: 'set expiresIn so stolen tokens die; refresh tokens come later' },
  { title: '401 vs 403', text: '401 = not authenticated; 403 = authenticated but not allowed' },
];

const AUTH = [
  {
    icon: '🔐', title: 'JWT In One Line', titleClass: 'card-title-cyan', subtitle: 'Signed Claims',
    description: 'A JWT is three Base64 parts: header, payload (claims), signature. The server signs with a secret; anyone can read the payload, but only the secret can prove it is genuine.',
    code: 'import jwt from "jsonwebtoken";\nconst token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET, {\n  expiresIn: "1h",\n});',
  },
  {
    icon: '🚪', title: 'Login Route', titleClass: 'card-title-purple', subtitle: 'Issue The Token',
    description: 'Find the user, compare password hash, then return { token }. The client stores it (memory or secure storage) and attaches it to later requests.',
    code: 'app.post("/login", async (req, res) => {\n  const user = await findUser(req.body.email);\n  // verify password with bcrypt…\n  const token = jwt.sign({ sub: user.id }, secret, { expiresIn: "1h" });\n  res.json({ token });\n});',
  },
  {
    icon: '🛡️', title: 'Auth Middleware', titleClass: 'card-title-amber', subtitle: 'Protect Routes',
    description: 'Read Bearer token, verify, set req.user. Mount on routers that need a logged-in user.',
    code: 'function auth(req, res, next) {\n  const hdr = req.headers.authorization || "";\n  const token = hdr.startsWith("Bearer ") ? hdr.slice(7) : null;\n  try {\n    req.user = jwt.verify(token, secret);\n    next();\n  } catch {\n    res.status(401).json({ error: "unauthorized" });\n  }\n}\napp.get("/me", auth, (req, res) => res.json({ id: req.user.sub }));',
  },
];

const SAFE = [
  {
    icon: '🔑', title: 'Secrets In .env', titleClass: 'card-title-cyan', subtitle: 'dotenv',
    description: 'Load JWT_SECRET from process.env. Add .env to .gitignore and ship a .env.example with blank keys.',
    code: 'import "dotenv/config";\nconst secret = process.env.JWT_SECRET;',
  },
  {
    icon: '🧂', title: 'Hash Passwords', titleClass: 'card-title-purple', subtitle: 'bcrypt',
    description: 'bcrypt.hash on signup, bcrypt.compare on login. Never log or return the hash to the client.',
    code: 'import bcrypt from "bcrypt";\nconst hash = await bcrypt.hash(password, 10);\nconst ok = await bcrypt.compare(password, hash);',
  },
  {
    icon: '⏱️', title: 'Expiry & 401', titleClass: 'card-title-amber', subtitle: 'Fail Closed',
    description: 'Short-lived tokens limit damage. Missing or bad tokens → 401. Do not leak whether the email exists in error messages.',
    code: '// expiresIn: "15m" for access tokens\n// 401 when verify throws',
  },
  {
    icon: '🔜', title: 'Next: Database', titleClass: 'card-title-lime', subtitle: 'Day 130 Preview',
    description: 'Tomorrow: replace the in-memory array with a real database — connect, migrate, and keep the same REST shape.',
    link: { href: '/day-130', label: 'Go to Day 130 →' },
  },
];

const RESOURCES = [
  {
    icon: '🎫', title: 'JWT Introduction', titleClass: 'card-title-cyan', subtitle: 'jwt.io',
    description: 'What JWTs are, how they are structured, and when to use them.',
    link: { href: JWT_INTRO, label: 'Read JWT intro →', external: true },
  },
  {
    icon: '📦', title: 'jsonwebtoken', titleClass: 'card-title-purple', subtitle: 'Library',
    description: 'sign, verify, and decode helpers for Node.',
    link: { href: JSONWEBTOKEN, label: 'Read jsonwebtoken docs →', external: true },
  },
  {
    icon: '🔐', title: 'dotenv', titleClass: 'card-title-amber', subtitle: 'Env Files',
    description: 'Load environment variables from .env into process.env.',
    link: { href: DOTENV, label: 'Read dotenv docs →', external: true },
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

export default function Day129() {
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
          <Link to="/day-128" className="day001-nav-btn day001-nav-prev">← Day 128</Link>
          <p className="day001-datetime">Express Day 129 · 13 Oct 2027</p>
          <Link to="/day-130" className="day001-nav-btn day001-nav-next">Day 130 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>Auth</span><span>JWT</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 129 <span aria-hidden="true">🔐</span></h1>
              <p className="day001-day-theme">AUTH BASICS — JWT</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">EXPRESS · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '36%' }} /></div>

        <p className="day001-summary">
          Day 129 locks the API. <strong>Login</strong> issues a <strong>JWT</strong>, clients send{' '}
          <code>Authorization: Bearer</code>, and <strong>middleware</strong> verifies it before
          protected routes. Keep <strong>JWT_SECRET</strong> in <code>.env</code>, hash passwords with{' '}
          <strong>bcrypt</strong>, and fail closed with <strong>401</strong>.
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

        <CardSection icon="🔐" title="1 · JWT FLOW" cards={AUTH} columns={3} />
        <CardSection icon="🧂" title="2 · SECRETS, HASHES & EXPIRY" cards={SAFE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Express</span><span>#JWT</span><span>#Auth</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
