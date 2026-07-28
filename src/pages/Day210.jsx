import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const EXPRESS = 'https://expressjs.com/';
const NODE = 'https://nodejs.org/en/docs';
const TS_HANDBOOK = 'https://www.typescriptlang.org/docs/handbook/intro.html';

const LEARNT_TODAY = [
  { title: 'Arc 206–210', text: 'setup → routes → middleware → services → milestone' },
  { title: 'Typed backend baseline', text: 'consistent responses, validation, and error paths' },
  { title: 'Boundaries pay off', text: 'controllers thin, services pure, repositories isolated' },
  { title: 'Operational basics', text: 'health checks, request ids, and safe logs matter early' },
  { title: 'Safe iteration', text: 'with contracts and handlers, adding features stays predictable' },
  { title: 'Portfolio proof', text: 'a small API with clear patterns beats a giant unstructured repo' },
  { title: 'Reuse TS skills', text: 'the same types and guards apply in React, RN, and Node' },
  { title: 'Next up', text: 'continue the journal from Home or deepen Node/Express days' },
];

const CORE = [
  {
    icon: '✅',
    title: 'Checklist',
    titleClass: 'card-title-cyan',
    subtitle: 'Ship It',
    description: 'Project skeleton, route groups, middleware pipeline, service layer, error envelope.',
    code: 'routes · middleware\nservices · errors',
  },
  {
    icon: '🧪',
    title: 'Quality Bar',
    titleClass: 'card-title-purple',
    subtitle: 'Prove',
    description: 'Every endpoint returns the same shape; errors are consistent; validation fails fast.',
    code: 'ok/data/error\ntyped DTOs',
  },
  {
    icon: '🗺️',
    title: '206–210 Map',
    titleClass: 'card-title-amber',
    subtitle: 'Arc',
    description: 'Foundation → contracts → safety rails → boundaries → milestone package.',
    code: 'setup · routes\nrails · layers · done',
  },
];

const PRACTICE = [
  {
    icon: '📦',
    title: 'Mini API',
    titleClass: 'card-title-cyan',
    subtitle: 'Portfolio',
    description: 'Ship /health, /users, and a consistent error format with typed DTOs.',
    code: 'GET /health\nGET /users\nGET /users/:id',
  },
  {
    icon: '🎬',
    title: '5-Min Walkthrough',
    titleClass: 'card-title-purple',
    subtitle: 'Demo',
    description: 'Explain routing, middleware, and service boundaries like a real backend PR review.',
    code: 'contract -> handler\n-> service',
  },
  {
    icon: '📝',
    title: 'Runbook Notes',
    titleClass: 'card-title-amber',
    subtitle: 'Ops',
    description: 'Write the basics: how to start, health check, and what logs mean.',
    code: 'start · health · logs',
  },
  {
    icon: '🏠',
    title: 'Back to Home',
    titleClass: 'card-title-lime',
    subtitle: 'Continue',
    description: 'Continue the journal and tracks from the home hub.',
    link: { href: '/', label: 'Go Home →' },
  },
];

const RESOURCES = [
  {
    icon: '🟢',
    title: 'Express',
    titleClass: 'card-title-cyan',
    subtitle: 'Docs',
    description: 'Core Express documentation.',
    link: { href: EXPRESS, label: 'Open Express →', external: true },
  },
  {
    icon: '🟩',
    title: 'Node.js Docs',
    titleClass: 'card-title-purple',
    subtitle: 'Reference',
    description: 'The platform docs for runtime behavior and APIs.',
    link: { href: NODE, label: 'Open Node docs →', external: true },
  },
  {
    icon: '🔷',
    title: 'TS Handbook',
    titleClass: 'card-title-amber',
    subtitle: 'Language',
    description: 'Full language handbook for types and patterns.',
    link: { href: TS_HANDBOOK, label: 'Open handbook →', external: true },
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

export default function Day210() {
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
          <Link to="/day-209" className="day001-nav-btn day001-nav-prev">← Day 209</Link>
          <p className="day001-datetime">TypeScript Day 210 · 29 Jul 2027</p>
          <Link to="/" className="day001-nav-btn day001-nav-next">Home →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Backend</span><span>Day 210</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 210 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">EXPRESS + TS MILESTONE</p>
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
          Day 210 packages the typed backend baseline: <strong>routing</strong>, <strong>middleware</strong>, <strong>services</strong>,
          consistent errors, and a small API you can demo and extend.
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

        <CardSection icon="🏁" title="1 · MILESTONE" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day210</span><span>#Express</span><span>#Milestone</span>
        </footer>
      </div>
    </div>
  );
}

