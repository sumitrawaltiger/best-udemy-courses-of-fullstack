import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'TypeScript Basics', text: 'Compiler setup, tsconfig.json, type annotations — the foundation everything else builds on' },
  { title: 'Types & Annotations', text: 'string, number, boolean, any, unknown, never, void — TypeScript\'s core vocabulary' },
  { title: 'Functions', text: 'Typed parameters, return types, optional arguments — function signatures as self-documenting contracts' },
  { title: 'Interfaces', text: 'Object blueprints defined once, checked everywhere — the backbone of scalable TypeScript' },
  { title: 'Type Aliases', text: 'type keyword for unions, intersections, and complex shapes when interfaces reach their limits' },
  { title: 'Classes', text: 'public, private, protected, readonly, abstract, implements — full OOP with the type checker on guard' },
  { title: 'Generics', text: '<T> — write once, type everywhere — the most powerful TypeScript pattern' },
  { title: 'Advanced Types', text: 'Mapped types, conditional types, template literals, and the full utility types toolkit' },
  { title: 'Modules & Namespaces', text: 'import / export, path aliases, .d.ts declaration files — keeping large codebases clean' },
  { title: 'Real-world Usage', text: 'React + TypeScript, typed fetch, async/await, form handling — where theory becomes working software' },
];

const TAKEAWAYS = [
  {
    icon: '🛡️', title: 'Type Safety', titleClass: 'card-title-cyan', subtitle: 'Catch Bugs Early',
    description: 'The compiler finds the mistake before the browser does. Every red squiggle saves hours of debugging that would have happened at runtime — often in production.',
  },
  {
    icon: '⚡', title: 'Better Tooling', titleClass: 'card-title-purple', subtitle: 'Faster Development',
    description: 'Autocomplete, inline docs, and rename-refactor confidence all come free with TypeScript. The editor becomes your pair programmer.',
  },
  {
    icon: '🏗️', title: 'Clean Code', titleClass: 'card-title-amber', subtitle: 'Scalable Applications',
    description: 'Typed interfaces and contracts make large teams productive. When every function signature is a contract, you can work in a large codebase without reading every line.',
  },
  {
    icon: '🤝', title: 'Understand Types', titleClass: 'card-title-cyan', subtitle: "Don\'t Fight Them",
    description: "When a type error appears, read it carefully. The compiler is usually right. TypeScript errors are not obstacles — they are the compiler pointing at a real bug.",
  },
  {
    icon: '💪', title: 'Practice', titleClass: 'card-title-purple', subtitle: 'The Real Key to Mastery',
    description: 'Knowing the syntax is 20% of the skill. The other 80% is using TypeScript on real projects — the patterns become instinctive only through repetition.',
  },
];

const NEXT_STEPS = [
  {
    icon: '⚛️', title: 'React JS', titleClass: 'card-title-cyan', subtitle: 'TypeScript Stack continues',
    description: 'Typed components, hooks, Zustand state management, and testing — all in TypeScript. Props become typed contracts the compiler enforces at every call site.',
  },
  {
    icon: '▲', title: 'Next.js', titleClass: 'card-title-purple', subtitle: 'App Router & Server Components',
    description: 'App Router, server components, data fetching with typed server actions — the full Next.js stack in TypeScript, the way it was designed to be used.',
  },
  {
    icon: '📱', title: 'React Native', titleClass: 'card-title-amber', subtitle: 'Typed Mobile Apps',
    description: 'Expo, typed navigation, native components — everything you learned about React carries over to mobile. TypeScript keeps both platforms consistent.',
  },
  {
    icon: '🟢', title: 'Express JS', titleClass: 'card-title-cyan', subtitle: 'Typed REST APIs',
    description: 'Typed middleware, request/response shapes, Prisma with generated types, JWT auth — the backend side of the TypeScript stack.',
    link: { href: '/day-022', label: 'Continue to Day 22 →' },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      {card.icon && <span className="day001-card-icon" aria-hidden="true">{card.icon}</span>}
      <h3 className={`day001-card-title ${card.titleClass || ''}`}>{card.title}</h3>
      {card.subtitle && <p className="day001-card-subtitle">{card.subtitle}</p>}
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
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

export default function Day021() {
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
          <Link to="/day-020" className="day001-nav-btn day001-nav-prev">← Day 20</Link>
          <p className="day001-datetime">TypeScript Day 21 · 21 Jan 2027</p>
          <Link to="/day-022" className="day001-nav-btn day001-nav-next">Day 22 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Series Finale</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 21 <span aria-hidden="true">🎬</span></h1>
              <p className="day001-day-theme">TYPESCRIPT SERIES FINALE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '21%' }} /></div>

        <p className="day001-summary">
          You made it to the end. <strong>21 days. One complete language.</strong> From the very first type annotation
          to React components, async fetch, and `strict` mode — the TypeScript foundation is now in place.
          Every framework that comes next — <strong>React</strong>, <strong>Next.js</strong>,{' '}
          <strong>React Native</strong>, <strong>Express JS</strong> — uses TypeScript as its first-class language.
          What you just built is the bedrock everything else stands on.{' '}
          <em>Keep Coding. Keep Building. Keep Dreaming.</em>
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT WE COVERED — 21 DAYS</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> — {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="💡" title="KEY TAKEAWAYS" cards={TAKEAWAYS} columns={3} />

        <section className="day001-section">
          <h2 className="day001-section-title"><span aria-hidden="true">💬</span> THE BIG IDEA</h2>
          <blockquote style={{
            margin: '0 0 8px',
            padding: '20px 24px',
            borderLeft: '4px solid var(--accent, #00ff88)',
            background: 'rgba(0,255,136,0.05)',
            borderRadius: '0 12px 12px 0',
            fontStyle: 'italic',
            fontSize: '1.05rem',
            lineHeight: 1.65,
          }}>
            "TypeScript is not just about types, it\'s about building <strong>better applications</strong> and
            stronger confidence as a developer."
          </blockquote>
          <p style={{ opacity: 0.75, fontSize: '0.9rem', marginTop: '8px' }}>
            Types are your <strong>allies</strong>, not your enemies. The habit of thinking in types — asking
            "what shape is this data?" — transfers to every language and every codebase you\'ll ever touch.
          </p>
        </section>

        <CardSection icon="🚀" title="WHAT\'S NEXT — TYPESCRIPT STACK CONTINUES" cards={NEXT_STEPS} columns={2} />

        <footer className="day001-hashtags">
          <span>#TypeScript</span><span>#SeriesFinale</span><span>#Year1</span><span>#KeepBuilding</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
