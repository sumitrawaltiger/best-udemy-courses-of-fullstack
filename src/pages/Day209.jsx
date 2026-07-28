import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DEP_INVERSION = 'https://en.wikipedia.org/wiki/Dependency_inversion_principle';
const REST = 'https://restfulapi.net/';

const LEARNT_TODAY = [
  { title: 'Service layer', text: 'services hold business logic; controllers stay thin' },
  { title: 'Dependency boundaries', text: 'keep Express types out of core code' },
  { title: 'Idempotency mindset', text: 'design endpoints so retries are safe where possible' },
  { title: 'Typed domain models', text: 'types should describe the domain, not just HTTP payloads' },
  { title: 'Repository boundary', text: 'DB access lives behind an interface so it can change' },
  { title: 'Error mapping', text: 'domain errors map to HTTP status codes consistently' },
  { title: 'Testing gets easier', text: 'pure services are testable without spinning a server' },
  { title: 'Next up', text: 'milestone: ship a small typed API' },
];

const CORE = [
  {
    icon: '🏛️',
    title: 'Controller → Service',
    titleClass: 'card-title-cyan',
    subtitle: 'Layers',
    description: 'Controllers translate HTTP to a domain call. Services return data or domain errors.',
    code: 'HTTP -> service\nservice -> result',
  },
  {
    icon: '🧱',
    title: 'Repository Boundary',
    titleClass: 'card-title-purple',
    subtitle: 'Data',
    description: 'Keep persistence behind a simple interface so you can swap DBs later.',
    code: 'UserRepo\ngetById(id)\nsave(user)',
  },
  {
    icon: '🧭',
    title: 'Domain Types',
    titleClass: 'card-title-amber',
    subtitle: 'Clarity',
    description: 'Define domain models and DTOs separately so you don’t leak transport details.',
    code: 'User (domain)\nUserDto (API)',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'Refactor One Endpoint',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Move logic out of a controller into a service and return typed results.',
    code: 'controller thin\nservice owns logic',
  },
  {
    icon: '📋',
    title: 'Error Mapping Table',
    titleClass: 'card-title-purple',
    subtitle: 'Contract',
    description: 'Write a small table: DomainError -> HTTP status -> error code string.',
    code: 'NotFound -> 404\nConflict -> 409\nInvalid -> 422',
  },
  {
    icon: '🔜',
    title: 'Next: Milestone',
    titleClass: 'card-title-amber',
    subtitle: 'Day 210',
    description: 'Tomorrow — ship a small typed Express API and package it.',
    link: { href: '/day-210', label: 'Go to Day 210 →' },
  },
];

const RESOURCES = [
  {
    icon: '📖',
    title: 'Dependency Inversion',
    titleClass: 'card-title-cyan',
    subtitle: 'Design',
    description: 'Why boundaries matter when systems grow.',
    link: { href: DEP_INVERSION, label: 'Open →', external: true },
  },
  {
    icon: '🌐',
    title: 'REST Basics',
    titleClass: 'card-title-purple',
    subtitle: 'API',
    description: 'Practical REST guidance and conventions.',
    link: { href: REST, label: 'Open →', external: true },
  },
  {
    icon: '🗺️',
    title: 'Day 208',
    titleClass: 'card-title-amber',
    subtitle: 'Middleware',
    description: 'Centralized error handling and validation.',
    link: { href: '/day-208', label: 'Open Day 208 →' },
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

export default function Day209() {
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
          <Link to="/day-208" className="day001-nav-btn day001-nav-prev">← Day 208</Link>
          <p className="day001-datetime">TypeScript Day 209 · 28 Jul 2027</p>
          <Link to="/day-210" className="day001-nav-btn day001-nav-next">Day 210 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Architecture</span><span>Day 209</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 209 <span aria-hidden="true">🏛️</span></h1>
              <p className="day001-day-theme">SERVICES & BOUNDARIES</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '62%' }} /></div>

        <p className="day001-summary">
          Day 209 makes the backend maintainable. Keep controllers thin, move logic into a typed <strong>service layer</strong>,
          and isolate persistence behind repositories so changes don’t ripple through the app.
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

        <CardSection icon="🏛️" title="1 · LAYERS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day209</span><span>#Express</span><span>#Architecture</span>
        </footer>
      </div>
    </div>
  );
}

