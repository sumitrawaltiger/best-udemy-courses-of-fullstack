import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const EXPRESS = 'https://expressjs.com/';
const TS_NODE = 'https://typestrong.org/ts-node/';
const NODE_TS = 'https://github.com/TypeStrong/ts-node';

const LEARNT_TODAY = [
  { title: 'Start the Express arc', text: 'Days 206–210 build a typed backend baseline' },
  { title: 'Project skeleton', text: 'src layout + configs matter more than frameworks' },
  { title: 'TypeScript server loop', text: 'tsc/ts-node + watch keeps feedback tight' },
  { title: 'Typed boundaries', text: 'validate input at the edge; keep core code clean' },
  { title: 'Error paths', text: 'define how errors surface before adding features' },
  { title: 'Production mindset', text: 'env config, logging, and health checks from day one' },
  { title: 'Consistency wins', text: 'one predictable pattern for handlers and responses' },
  { title: 'Next up', text: 'routing + controller patterns with typed req/res' },
];

const CORE = [
  {
    icon: '🏗️',
    title: 'Folder Layout',
    titleClass: 'card-title-cyan',
    subtitle: 'Structure',
    description: 'Split app, routes, controllers, services, and shared types so the codebase stays navigable.',
    code: 'src/\n  app.ts\n  routes/\n  controllers/\n  services/\n  types/',
  },
  {
    icon: '⚙️',
    title: 'Dev Loop',
    titleClass: 'card-title-purple',
    subtitle: 'Fast',
    description: 'Use a watch loop so each save rebuilds/restarts quickly and errors show immediately.',
    code: 'ts-node-dev | nodemon\nor tsc -w + node',
  },
  {
    icon: '🛡️',
    title: 'Boundaries',
    titleClass: 'card-title-amber',
    subtitle: 'Safe',
    description: 'Validate requests at the edge and return consistent responses so clients can rely on the API.',
    code: 'validate -> handle -> respond',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'Boot Server',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Create a minimal Express app with /health and one /api route group.',
    code: 'GET /health\nGET /api/ping',
  },
  {
    icon: '📋',
    title: 'Response Shape',
    titleClass: 'card-title-purple',
    subtitle: 'Contract',
    description: 'Define a consistent response envelope (success, data, error) for the whole API.',
    code: '{ ok, data?, error? }',
  },
  {
    icon: '🔜',
    title: 'Next: Routing',
    titleClass: 'card-title-amber',
    subtitle: 'Day 207',
    description: 'Tomorrow — typed routing + controller patterns.',
    link: { href: '/day-207', label: 'Go to Day 207 →' },
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
    icon: '🔷',
    title: 'ts-node',
    titleClass: 'card-title-purple',
    subtitle: 'Tooling',
    description: 'Run TypeScript directly in Node during development.',
    link: { href: TS_NODE, label: 'Open ts-node →', external: true },
  },
  {
    icon: '📦',
    title: 'Node + TS',
    titleClass: 'card-title-amber',
    subtitle: 'Reference',
    description: 'TypeStrong tooling reference for TypeScript on Node.',
    link: { href: NODE_TS, label: 'Open →', external: true },
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

export default function Day206() {
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
          <Link to="/day-205" className="day001-nav-btn day001-nav-prev">← Day 205</Link>
          <p className="day001-datetime">TypeScript Day 206 · 25 Jul 2027</p>
          <Link to="/day-207" className="day001-nav-btn day001-nav-next">Day 207 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Node</span><span>Day 206</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 206 <span aria-hidden="true">🏗️</span></h1>
              <p className="day001-day-theme">EXPRESS + TYPESCRIPT SETUP</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '60%' }} /></div>

        <p className="day001-summary">
          Day 206 starts the typed backend arc. Set up a clean <strong>Express + TypeScript</strong> project with a fast dev loop,
          consistent responses, and safe boundaries before adding features.
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

        <CardSection icon="🏗️" title="1 · FOUNDATION" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day206</span><span>#Express</span><span>#Node</span>
        </footer>
      </div>
    </div>
  );
}

