import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const EXPRESS = 'https://expressjs.com/';
const PRISMA = 'https://www.prisma.io/docs';

const LEARNT_TODAY = [
  { title: 'Arc 225–230', text: 'Express → middleware → Prisma → contracts → auth → milestone' },
  { title: 'Backend bar', text: 'typed routes, augmented Request, DB types, shared DTOs, AuthUser guards' },
  { title: 'Demo story', text: 'POST /users with Zod → Prisma create → session → GET /me' },
  { title: 'Reuse prior', text: 'tooling (216–220) and app patterns (211–215) still apply on the server' },
  { title: 'CI', text: 'tsc --noEmit + vitest + prisma validate before deploy' },
  { title: 'Keep shipping', text: 'add real features; keep any and unchecked bodies out' },
];

const CORE = [
  {
    icon: '✅',
    title: 'Checklist',
    titleClass: 'card-title-cyan',
    subtitle: 'Ship',
    description: 'tsx/tsc · typed routers · Request aug · Prisma select · shared Zod · AuthUser guards.',
    code: 'express · mw\nprisma · dto · auth',
  },
  {
    icon: '🎬',
    title: '5-Min Demo',
    titleClass: 'card-title-purple',
    subtitle: 'Show',
    description: 'Invalid body 400 → valid create → cookie session → typed /me.',
    code: '400 · create\nsession · /me',
  },
  {
    icon: '🗺️',
    title: '225–230 Map',
    titleClass: 'card-title-amber',
    subtitle: 'Arc',
    description: 'Server TS → pipeline types → DB → contracts → identity → ship.',
    code: 'http · mw · db\ncontracts · auth',
  },
];

const PRACTICE = [
  {
    icon: '📦',
    title: 'API Slice',
    titleClass: 'card-title-cyan',
    subtitle: 'Portfolio',
    description: 'Ship users router + schema + prisma helper + requireUser on /me.',
    code: 'routes · zod\nrepo · auth',
  },
  {
    icon: '🧪',
    title: 'Sign-Off Score',
    titleClass: 'card-title-purple',
    subtitle: 'Lab',
    description: 'Rate 0–2 on Express, middleware, Prisma, DTOs, auth. Fix the lowest.',
    code: 'score 0–2\nfix weakest',
  },
  {
    icon: '📝',
    title: 'Runbook',
    titleClass: 'card-title-amber',
    subtitle: 'Docs',
    description: 'How to migrate schema, regenerate client, and typecheck before release.',
    code: 'migrate · generate\ntypecheck · test',
  },
  {
    icon: '🔜',
    title: 'Keep Learning',
    titleClass: 'card-title-lime',
    subtitle: 'Hub',
    description: 'Illustrated TypeScript series or Home when you are ready for the next arc.',
    link: { href: '/typescript', label: 'Open TypeScript series →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'Express',
    titleClass: 'card-title-cyan',
    subtitle: 'HTTP',
    description: 'Framework docs.',
    link: { href: EXPRESS, label: 'Open Express →', external: true },
  },
  {
    icon: '🗄️',
    title: 'Prisma',
    titleClass: 'card-title-purple',
    subtitle: 'ORM',
    description: 'Typed database access.',
    link: { href: PRISMA, label: 'Open Prisma →', external: true },
  },
  {
    icon: '🟢',
    title: 'Day 225',
    titleClass: 'card-title-amber',
    subtitle: 'Start',
    description: 'Start of this backend arc.',
    link: { href: '/day-225', label: 'Open Day 225 →' },
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

export default function Day230() {
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
          <Link to="/day-229" className="day001-nav-btn day001-nav-prev">← Day 229</Link>
          <p className="day001-datetime">TypeScript Day 230 · 18 Aug 2027</p>
          <Link to="/typescript" className="day001-nav-btn day001-nav-next">TS Series →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Milestone</span><span>Day 230</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 230 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">BACKEND TYPESCRIPT MILESTONE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '65%' }} /></div>

        <p className="day001-summary">
          Day 230 closes the backend arc. Ship a typed <strong>Express + Prisma</strong> slice with <strong>shared DTOs</strong> and <strong>AuthUser</strong> guards.
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
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day230</span><span>#Milestone</span><span>#Backend</span>
        </footer>
      </div>
    </div>
  );
}
