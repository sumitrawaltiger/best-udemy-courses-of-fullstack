import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_HANDBOOK = 'https://www.typescriptlang.org/docs/handbook/intro.html';

const LEARNT_TODAY = [
  { title: 'Foundation complete', text: 'Days 40–55 covered TypeScript end to end — from types to React, Next.js and tooling' },
  { title: 'The language', text: 'types, functions, interfaces, generics, narrowing, classes, modules and async — all owned' },
  { title: 'The framework', text: 'React with TS: typed props, state, events and hooks, then full-stack with Next.js' },
  { title: 'Why it compounds', text: 'every later Year-1 track — React Native, Express — is just TypeScript in a new context' },
  { title: 'Next up: React Native', text: 'the same typed React skills, now building native mobile apps' },
  { title: 'Then: Express / Node', text: 'typed backends and REST/GraphQL APIs to pair with the frontend' },
  { title: 'DSA & System Design', text: 'practised in TypeScript alongside, so the language stays sharp' },
  { title: 'One stack, one year', text: 'Year 1 is the TypeScript stack — a coherent, typed full-stack skillset' },
];

const RECAP = [
  {
    icon: '🔷', title: 'The Language', titleClass: 'card-title-cyan', subtitle: 'Days 40–50',
    description:
      'Introduction and setup, the type system, functions, objects and enums, interfaces, advanced types and narrowing, generics and assertions, classes and OOP, modules, tooling and async — the complete TypeScript language.',
    footer: 'types · interfaces · generics · classes · async',
  },
  {
    icon: '⚛️', title: 'The Framework', titleClass: 'card-title-purple', subtitle: 'Days 51–54',
    description:
      'React with TypeScript — typed components, props, state, events and hooks — then Next.js for full-stack: the App Router, server vs client components, typed route handlers and metadata.',
    footer: 'React · hooks · Next.js · full-stack types',
  },
];

const AHEAD = [
  {
    icon: '📱', title: 'React Native', titleClass: 'card-title-cyan', subtitle: 'Mobile, Typed',
    description:
      'The same React + TypeScript skills, now building native iOS and Android apps. Typed components and hooks transfer directly — you already know most of it.',
    link: { href: '/mobile', label: 'Explore the React Native track →' },
  },
  {
    icon: '🚂', title: 'Express / Node', titleClass: 'card-title-purple', subtitle: 'Typed Backends',
    description:
      'Round out the stack with typed Node.js backends — Express routes, middleware and APIs — sharing types with the frontend for end-to-end safety.',
    footer: 'typed routes · middleware · shared API types',
  },
  {
    icon: '📐', title: 'DSA & System Design', titleClass: 'card-title-amber', subtitle: 'Alongside, In TS',
    description:
      'Data structures, algorithms and system design practised in TypeScript throughout the year — keeping the language sharp while building interview strength.',
    link: { href: '/interview', label: 'Explore the Interview track →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'TypeScript Handbook', titleClass: 'card-title-cyan', subtitle: 'Keep It Close',
    description:
      'The reference to return to all year — every concept from Days 40–55 lives here, always current with the latest compiler.',
    link: { href: TS_HANDBOOK, label: 'Open the Handbook →', external: true },
  },
  {
    icon: '🗺️', title: 'The 1500-Day Roadmap', titleClass: 'card-title-purple', subtitle: 'Where This Fits',
    description:
      'Year 1 is the TypeScript stack in the full journey — Gen AI (Days 1–39) then four years of code. See the whole plan and its dated windows.',
    link: { href: '/roadmap', label: 'Open the roadmap →' },
  },
  {
    icon: '🔜', title: 'The Journey Continues', titleClass: 'card-title-amber', subtitle: 'Day 56 →',
    description:
      'The daily journal continues from here — keep building, keep shipping, and keep the TypeScript foundation sharp through everything ahead.',
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
          <p className="day001-datetime">TypeScript Day 55</p>
          <Link to="/day-056" className="day001-nav-btn day001-nav-next">Day 56 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Milestone</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 55 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">TYPESCRIPT FOUNDATION — YEAR 1 ROADMAP</p>
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
          A milestone. <strong>Days 40–55</strong> built the whole TypeScript foundation — the{' '}
          <strong>language</strong> (types, functions, interfaces, generics, narrowing, classes, modules, async) and
          the <strong>framework</strong> (React with typed props, state, events and hooks, then <strong>Next.js</strong>{' '}
          full-stack). From here <strong>Year 1</strong> compounds on it: <strong>React Native</strong> reuses your
          React skills for mobile, <strong>Express/Node</strong> adds typed backends, and <strong>DSA &amp; System
          Design</strong> are practised in TypeScript alongside. One stack, one year — a coherent, typed full-stack
          skillset. <em>The journal continues from Day 56.</em>
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

        <CardSection icon="🔁" title="WHAT THE FOUNDATION COVERED" cards={RECAP} columns={2} />
        <CardSection icon="🧭" title="THE REST OF YEAR 1" cards={AHEAD} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#React</span><span>#NextJS</span>
        </footer>
      </div>
    </div>
  );
}
