import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const EXPRESS_ROUTING = 'https://expressjs.com/en/guide/routing.html';
const TS_HANDBOOK = 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html';

const LEARNT_TODAY = [
  { title: 'Routes are contracts', text: 'paths, params, query, and response shape should be stable' },
  { title: 'Controllers stay thin', text: 'controllers translate HTTP to service calls' },
  { title: 'Type boundaries', text: 'type params/body/query explicitly so handlers don’t guess' },
  { title: 'Consistent errors', text: 'not-found, validation, and server errors should look the same' },
  { title: 'Async discipline', text: 'promise handlers need one error path to avoid unhandled rejections' },
  { title: 'Don’t leak Express', text: 'services shouldn’t depend on req/res types' },
  { title: 'Shared types', text: 'define API DTOs once and reuse them across the codebase' },
  { title: 'Next up', text: 'middleware and centralized error handling' },
];

const CORE = [
  {
    icon: '🧭',
    title: 'Route Groups',
    titleClass: 'card-title-cyan',
    subtitle: 'Structure',
    description: 'Mount versioned route groups so the API is easy to evolve.',
    code: '/api/v1/users\n/api/v1/orders',
  },
  {
    icon: '🧱',
    title: 'Controller Pattern',
    titleClass: 'card-title-purple',
    subtitle: 'Thin',
    description: 'Controllers parse inputs, call services, and format one response style.',
    code: 'req -> service -> res',
  },
  {
    icon: '🔷',
    title: 'Typed Inputs',
    titleClass: 'card-title-amber',
    subtitle: 'Safe',
    description: 'Type params, query, and body explicitly so the handler is predictable.',
    code: 'params · query · body',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'Users API',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Implement GET /users and GET /users/:id with typed return objects.',
    code: 'GET /users\nGET /users/:id',
  },
  {
    icon: '📦',
    title: 'DTOs Folder',
    titleClass: 'card-title-purple',
    subtitle: 'Types',
    description: 'Create ApiResponse<T>, ErrorBody, and a User DTO used by controllers.',
    code: 'ApiResponse<T>\nUserDto',
  },
  {
    icon: '🔜',
    title: 'Next: Middleware',
    titleClass: 'card-title-amber',
    subtitle: 'Day 208',
    description: 'Tomorrow — middleware, validation, and error handling.',
    link: { href: '/day-208', label: 'Go to Day 208 →' },
  },
];

const RESOURCES = [
  {
    icon: '🟢',
    title: 'Express Routing',
    titleClass: 'card-title-cyan',
    subtitle: 'Docs',
    description: 'Official routing guide for Express.',
    link: { href: EXPRESS_ROUTING, label: 'Open routing →', external: true },
  },
  {
    icon: '🔷',
    title: 'TS Everyday Types',
    titleClass: 'card-title-purple',
    subtitle: 'Handbook',
    description: 'TypeScript fundamentals for DTO and contract design.',
    link: { href: TS_HANDBOOK, label: 'Open handbook →', external: true },
  },
  {
    icon: '🗺️',
    title: 'Day 206',
    titleClass: 'card-title-amber',
    subtitle: 'Setup',
    description: 'Project structure and dev loop foundation.',
    link: { href: '/day-206', label: 'Open Day 206 →' },
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

export default function Day207() {
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
          <Link to="/day-206" className="day001-nav-btn day001-nav-prev">← Day 206</Link>
          <p className="day001-datetime">TypeScript Day 207 · 26 Jul 2027</p>
          <Link to="/day-208" className="day001-nav-btn day001-nav-next">Day 208 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Express</span><span>Day 207</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 207 <span aria-hidden="true">🧭</span></h1>
              <p className="day001-day-theme">ROUTING & CONTROLLERS</p>
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
          Day 207 turns the server into a clean API. Organize <strong>routes</strong>, keep controllers thin,
          type inputs and outputs, and treat endpoints as contracts.
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

        <CardSection icon="🧭" title="1 · ROUTES" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day207</span><span>#Express</span><span>#API</span>
        </footer>
      </div>
    </div>
  );
}

