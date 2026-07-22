import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const HELMET = 'https://helmetjs.github.io/';
const CORS = 'https://expressjs.com/en/resources/middleware/cors.html';
const RATE_LIMIT = 'https://expressjs.com/en/resources/middleware/rate-limit.html';

const LEARNT_TODAY = [
  { title: 'Helmet', text: 'sets secure HTTP headers — XSS, clickjacking, and MIME sniffing defenses by default' },
  { title: 'CORS', text: 'allow only known front-end origins; credentials need explicit config' },
  { title: 'Rate limiting', text: 'cap requests per IP on /login and public APIs to slow brute force' },
  { title: 'Disable x-powered-by', text: 'hide that you run Express — one less fingerprint for scanners' },
  { title: 'HTTPS in prod', text: 'terminate TLS at the host/proxy; trust proxy when behind a load balancer' },
  { title: 'Input still validated', text: 'security headers do not replace Zod — keep both' },
  { title: 'Least privilege secrets', text: 'rotate JWT_SECRET; never log Authorization headers' },
  { title: 'Dependency hygiene', text: 'npm audit and lockfiles — outdated packages are a common footgun' },
  { title: 'Defense in layers', text: 'headers + CORS + rate limits + auth + validation = harder to abuse' },
];

const CORE = [
  {
    icon: '🪖', title: 'Helmet', titleClass: 'card-title-cyan', subtitle: 'Secure Headers',
    description: 'One line hardens many browser-facing risks. Mount early, before routes.',
    code: 'import helmet from "helmet";\napp.use(helmet());',
  },
  {
    icon: '🌍', title: 'CORS', titleClass: 'card-title-purple', subtitle: 'Who Can Call You',
    description: 'Browsers block cross-origin writes unless you opt in. Allow your web/app origins only — never * with credentials.',
    code: 'import cors from "cors";\napp.use(cors({\n  origin: ["https://app.example.com"],\n  credentials: true,\n}));',
  },
  {
    icon: '🚦', title: 'Rate Limit', titleClass: 'card-title-amber', subtitle: 'Slow The Abuse',
    description: 'express-rate-limit on /login and expensive routes. Return 429 when the window is exceeded.',
    code: 'import rateLimit from "express-rate-limit";\nconst loginLimit = rateLimit({ windowMs: 15 * 60 * 1000, max: 20 });\napp.use("/login", loginLimit);',
  },
];

const HARDEN = [
  {
    icon: '🕵️', title: 'Hide Fingerprints', titleClass: 'card-title-cyan', subtitle: 'x-powered-by',
    description: 'app.disable("x-powered-by") removes the Express signature header.',
    code: 'app.disable("x-powered-by");',
  },
  {
    icon: '🔒', title: 'Trust Proxy', titleClass: 'card-title-purple', subtitle: 'Behind LB',
    description: 'When HTTPS terminates at nginx/Railway/Render, set trust proxy so rate limits and secure cookies see the real client IP.',
    code: 'app.set("trust proxy", 1);',
  },
  {
    icon: '🧹', title: 'Audit Deps', titleClass: 'card-title-amber', subtitle: 'npm audit',
    description: 'Run audits in CI. Fix high/critical issues before deploy. Pin versions with package-lock.json.',
    code: 'npm audit\nnpm audit fix',
  },
  {
    icon: '🔜', title: 'Next: Deploy', titleClass: 'card-title-lime', subtitle: 'Day 135 Preview',
    description: 'Tomorrow: ship the API — env vars on a host, health checks, and a production start command.',
    link: { href: '/day-135', label: 'Go to Day 135 →' },
  },
];

const RESOURCES = [
  {
    icon: '🪖', title: 'Helmet', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Which headers Helmet sets and how to tune them.',
    link: { href: HELMET, label: 'Read Helmet docs →', external: true },
  },
  {
    icon: '🌍', title: 'CORS Middleware', titleClass: 'card-title-purple', subtitle: 'Express',
    description: 'origin, credentials, and preflight behaviour.',
    link: { href: CORS, label: 'Read CORS docs →', external: true },
  },
  {
    icon: '🚦', title: 'Rate Limit', titleClass: 'card-title-amber', subtitle: 'Middleware',
    description: 'Windows, max hits, and custom 429 handlers.',
    link: { href: RATE_LIMIT, label: 'Read rate-limit docs →', external: true },
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

export default function Day134() {
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
          <Link to="/day-133" className="day001-nav-btn day001-nav-prev">← Day 133</Link>
          <p className="day001-datetime">Express Day 134</p>
          <Link to="/day-135" className="day001-nav-btn day001-nav-next">Day 135 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>Security</span><span>CORS</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 134 <span aria-hidden="true">🪖</span></h1>
              <p className="day001-day-theme">API SECURITY BASICS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '37%' }} /></div>

        <p className="day001-summary">
          Day 134 hardens the API. <strong>Helmet</strong> for headers, <strong>CORS</strong> for
          allowed origins, <strong>rate limits</strong> on login, hide <code>x-powered-by</code>, and
          set <strong>trust proxy</strong> behind a load balancer — layered defense before deploy.
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

        <CardSection icon="🪖" title="1 · HELMET, CORS & LIMITS" cards={CORE} columns={3} />
        <CardSection icon="🔒" title="2 · HARDENING CHECKLIST" cards={HARDEN} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Express</span><span>#Security</span><span>#CORS</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
