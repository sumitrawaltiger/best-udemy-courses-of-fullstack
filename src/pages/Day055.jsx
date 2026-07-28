import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_HANDBOOK = 'https://www.typescriptlang.org/docs/handbook/intro.html';

const LEARNT_TODAY = [
  { title: 'Year 1 milestone', text: 'Days 1–55 built the whole TypeScript stack, front to back' },
  { title: 'The language', text: 'types, generics, narrowing, classes, modules, async — all owned' },
  { title: 'The frontend', text: 'React + the ecosystem (router, query, forms, state, testing)' },
  { title: 'Full-stack web', text: 'Next.js — App Router, server components, actions, rendering' },
  { title: 'Mobile', text: 'React Native with Expo — one codebase to iOS & Android' },
  { title: 'The backend', text: 'Express, Prisma and JWT auth — a typed REST API, deployed' },
  { title: 'DSA & System Design', text: 'practised in TypeScript alongside the whole year' },
  { title: 'Next: Python', text: 'Year 2 begins the Python stack — Python, Django, FastAPI' },
];

const STACK = [
  {
    icon: '🔷', title: 'Language & Frontend', titleClass: 'card-title-cyan', subtitle: 'Days 1–21',
    description:
      'The TypeScript language (types, generics, narrowing, classes, modules, async), typed React, then the ecosystem that builds real apps — React Router, TanStack Query, React Hook Form + Zod, Zustand and testing with Vitest.',
    footer: 'TypeScript · React · Router · Query · Forms · State · Tests',
  },
  {
    icon: '📱', title: 'Web & Mobile', titleClass: 'card-title-purple', subtitle: 'Days 22–31',
    description:
      'Full-stack web with Next.js (App Router, server vs client components, data fetching & server actions, rendering & caching, route handlers) and native mobile with React Native + Expo — from one TypeScript codebase to iOS, Android and web.',
    footer: 'Next.js · React Native · Expo · one codebase',
  },
];

const REST = [
  {
    icon: '🟢', title: 'The Backend', titleClass: 'card-title-cyan', subtitle: 'Days 32–36',
    description:
      'Node + Express: routing and middleware, a validated REST API, a typed database with Prisma, and JWT auth — deployed to production. The server that powers the frontend and mobile apps.',
    footer: 'Express · Prisma · JWT · deployed API',
  },
  {
    icon: '🧠', title: 'DSA & System Design', titleClass: 'card-title-purple', subtitle: 'Days 37–54',
    description:
      'Practised in TypeScript all year: complexity, arrays/strings, hashing, stacks/queues/lists, trees, graphs, recursion & DP, interview patterns — and system design from fundamentals to microservices, CAP, security and observability.',
    footer: 'DSA · patterns · scalable system design',
  },
  {
    icon: '🐍', title: 'Next: Year 2 · Python', titleClass: 'card-title-amber', subtitle: 'The Journey Continues',
    description:
      'A full-stack, mobile and backend TypeScript engineer in one year. Year 2 begins the Python stack — Python, Django and FastAPI — with DSA & System Design continuing in Python.',
    link: { href: '/python', label: 'Preview the Python track →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'TypeScript Handbook', titleClass: 'card-title-cyan', subtitle: 'Keep It Close',
    description:
      'The reference to return to — every concept from the year lives here, always current with the latest compiler.',
    link: { href: TS_HANDBOOK, label: 'Open the Handbook →', external: true },
  },
  {
    icon: '🗺️', title: 'The 4-Year Roadmap', titleClass: 'card-title-purple', subtitle: 'Where This Fits',
    description:
      'Year 1 (TypeScript) done — three years of code remain: Python, then Java, then DevOps. See the whole dated plan.',
    link: { href: '/roadmap', label: 'Open the roadmap →' },
  },
  {
    icon: '➡️', title: 'The Journal Continues', titleClass: 'card-title-amber', subtitle: 'Day 56 →',
    description:
      'The daily journal keeps building from here — deeper system design and the road into Year 2. Keep the TypeScript foundation sharp through everything ahead.',
    link: { href: '/day-056', label: 'Go to Day 56 →' },
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

export default function Day055() {
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
          <Link to="/day-054" className="day001-nav-btn day001-nav-prev">← Day 54</Link>
          <p className="day001-datetime">TypeScript Day 55 · 24 Feb 2027</p>
          <Link to="/day-056" className="day001-nav-btn day001-nav-next">Day 56 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Milestone</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 55 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">YEAR 1 COMPLETE — THE TYPESCRIPT STACK</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '55%' }} /></div>

        <p className="day001-summary">
          A milestone. <strong>Days 1–55</strong> built the entire <strong>TypeScript stack</strong> — the{' '}
          <strong>language</strong> (types → generics → classes → async), the <strong>frontend</strong> (React + its
          ecosystem), <strong>full-stack web</strong> (Next.js), <strong>mobile</strong> (React Native + Expo), and the{' '}
          <strong>backend</strong> (Express, Prisma, JWT — deployed) — with <strong>DSA &amp; System Design</strong>{' '}
          practised in TypeScript throughout. That’s a full-stack, mobile and backend engineer in one language. Keep
          the <a href={TS_HANDBOOK} target="_blank" rel="noopener noreferrer">Handbook</a> close, and next up is{' '}
          <strong>Year 2 — the Python stack</strong> (Python, Django, FastAPI). <em>One stack down, three to go. 🎓</em>
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED THIS YEAR</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> — {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🔷" title="LANGUAGE, FRONTEND, WEB & MOBILE" cards={STACK} columns={2} />
        <CardSection icon="🟢" title="BACKEND · DSA · WHAT'S NEXT" cards={REST} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#FullStack</span><span>#Milestone</span>
        </footer>
      </div>
    </div>
  );
}
