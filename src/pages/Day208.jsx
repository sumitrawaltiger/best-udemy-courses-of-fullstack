import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const EXPRESS_ERROR = 'https://expressjs.com/en/guide/error-handling.html';
const HTTP_STATUS = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status';

const LEARNT_TODAY = [
  { title: 'Middleware is the backbone', text: 'auth, validation, logging, and error handling live here' },
  { title: 'Centralized errors', text: 'one error handler keeps responses consistent' },
  { title: 'Async wrappers', text: 'promise handlers need a single path to next(err)' },
  { title: 'Validation at the edge', text: 'reject bad inputs before business logic runs' },
  { title: 'HTTP status discipline', text: 'use 400/401/403/404/409/422/500 intentionally' },
  { title: 'No secrets in logs', text: 'log request ids, not tokens or passwords' },
  { title: 'Typed error shapes', text: 'clients should parse errors reliably' },
  { title: 'Next up', text: 'service layer + persistence patterns' },
];

const CORE = [
  {
    icon: '🧩',
    title: 'Middleware Stack',
    titleClass: 'card-title-cyan',
    subtitle: 'Pipeline',
    description: 'Order matters: parsing, correlation id, auth, validation, routes, then error handler.',
    code: 'json -> id -> auth\n-> validate -> routes\n-> error',
  },
  {
    icon: '🚨',
    title: 'Error Handler',
    titleClass: 'card-title-purple',
    subtitle: 'One Shape',
    description: 'Return a consistent error body with code, message, and optional details.',
    code: '{ ok:false,\n  error:{ code,\n  message, details? } }',
  },
  {
    icon: '🛡️',
    title: 'Input Validation',
    titleClass: 'card-title-amber',
    subtitle: 'Edge',
    description: 'Validate params/query/body and fail fast with a useful message.',
    code: 'validate -> 400/422',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'Async Wrapper',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Create a helper that wraps async handlers so errors flow into next(err).',
    code: 'const wrap = (fn)\n=> (req,res,next)\n=> fn(...).catch(next)',
  },
  {
    icon: '📋',
    title: 'Status Map',
    titleClass: 'card-title-purple',
    subtitle: 'Contract',
    description: 'Define when you return each status for your API: 404 vs 409 vs 422.',
    code: '404 not found\n409 conflict\n422 invalid',
  },
  {
    icon: '🔜',
    title: 'Next: Services',
    titleClass: 'card-title-amber',
    subtitle: 'Day 209',
    description: 'Tomorrow — service layer and dependency boundaries.',
    link: { href: '/day-209', label: 'Go to Day 209 →' },
  },
];

const RESOURCES = [
  {
    icon: '🟢',
    title: 'Express Error Handling',
    titleClass: 'card-title-cyan',
    subtitle: 'Docs',
    description: 'Official guide to error handling in Express.',
    link: { href: EXPRESS_ERROR, label: 'Open docs →', external: true },
  },
  {
    icon: '📖',
    title: 'HTTP Status Codes',
    titleClass: 'card-title-purple',
    subtitle: 'MDN',
    description: 'Use status codes consistently and intentionally.',
    link: { href: HTTP_STATUS, label: 'Open MDN →', external: true },
  },
  {
    icon: '🗺️',
    title: 'Day 207',
    titleClass: 'card-title-amber',
    subtitle: 'Routes',
    description: 'Routing and controller structure foundation.',
    link: { href: '/day-207', label: 'Open Day 207 →' },
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

export default function Day208() {
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
          <Link to="/day-207" className="day001-nav-btn day001-nav-prev">← Day 207</Link>
          <p className="day001-datetime">TypeScript Day 208 · 27 Jul 2027</p>
          <Link to="/day-209" className="day001-nav-btn day001-nav-next">Day 209 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Backend</span><span>Day 208</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 208 <span aria-hidden="true">🧩</span></h1>
              <p className="day001-day-theme">MIDDLEWARE & ERROR HANDLING</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">TYPESCRIPT · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '61%' }} /></div>

        <p className="day001-summary">
          Day 208 makes the server production-ready. Build a consistent <strong>middleware pipeline</strong>,
          centralize errors, validate inputs at the edge, and standardize HTTP status behavior.
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

        <CardSection icon="🧩" title="1 · MIDDLEWARE" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day208</span><span>#Express</span><span>#Middleware</span>
        </footer>
      </div>
    </div>
  );
}

