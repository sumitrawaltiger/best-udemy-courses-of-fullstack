import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ZUSTAND_DOCS = 'https://zustand.docs.pmnd.rs/';
const ZUSTAND_TS = 'https://zustand.docs.pmnd.rs/guides/typescript';

const LEARNT_TODAY = [
  { title: 'When you need global state', text: 'auth, theme, cart — data many components share without prop-drilling' },
  { title: 'Context can be heavy', text: 'a single context re-renders every consumer on any change; Zustand is selective' },
  { title: 'create a store', text: 'a hook holding state + actions, living outside the React tree' },
  { title: 'Typed store', text: 'create<StoreType>() types state and actions end to end' },
  { title: 'Selectors', text: 'subscribe to one slice — useStore(s => s.count) — so only that changes re-render' },
  { title: 'Actions in the store', text: 'set() updates state; keep the logic in the store, not the components' },
  { title: 'No provider needed', text: 'unlike Context/Redux, no wrapper — just import and use the hook anywhere' },
  { title: 'Middleware', text: 'persist to localStorage or add devtools with one wrapper' },
];

const STORE = [
  {
    icon: '🐻', title: 'Create A Store', titleClass: 'card-title-cyan', subtitle: 'State + Actions',
    description:
      'A Zustand store is a hook that holds state and the actions that change it, living outside React. No provider to wrap the app — import the hook and use it.',
    code: 'interface CounterState {\n  count: number;\n  inc: () => void;\n}\nconst useCounter = create<CounterState>()((set) => ({\n  count: 0,\n  inc: () => set((s) => ({ count: s.count + 1 })),\n}));',
  },
  {
    icon: '🎯', title: 'Selectors', titleClass: 'card-title-purple', subtitle: 'Re-render Only What Changed',
    description:
      'Read a single slice with a selector. A component that selects count re-renders only when count changes — not when unrelated state does. That’s the win over one big context.',
    code: 'const count = useCounter((s) => s.count);\nconst inc   = useCounter((s) => s.inc);\n<button onClick={inc}>{count}</button>',
  },
];

const WHY = [
  {
    icon: '🧵', title: 'Context vs Zustand', titleClass: 'card-title-cyan', subtitle: 'Selective Updates',
    description:
      'Context is great for low-frequency values (theme, current user). But a single context re-renders every consumer on any change. Zustand subscribes per slice, so updates stay cheap.',
    code: '// Context: any change → all consumers re-render\n// Zustand: change count → only count subscribers',
  },
  {
    icon: '💾', title: 'persist Middleware', titleClass: 'card-title-purple', subtitle: 'Save To Storage',
    description:
      'Wrap the store in persist to sync it to localStorage automatically — a cart or theme survives a refresh with no extra code.',
    code: 'const useCart = create(persist<CartState>(\n  (set) => ({ items: [], /* ... */ }),\n  { name: "cart" },   // localStorage key\n));',
  },
  {
    icon: '⚖️', title: 'When To Reach For It', titleClass: 'card-title-amber', subtitle: 'Right Tool',
    description:
      'Server data → TanStack Query (Day 18). Form state → React Hook Form (Day 19). Truly-shared client state (auth, cart, UI) → Zustand. Don’t globalise what a component can own.',
    footer: 'server → Query · forms → RHF · shared client → Zustand',
  },
];

const RESOURCES = [
  {
    icon: '📗', title: 'Zustand Docs', titleClass: 'card-title-cyan', subtitle: 'Official',
    description:
      'A tiny, unopinionated state manager — stores, selectors, middleware (persist, devtools, immer) and slices, all a few KB.',
    link: { href: ZUSTAND_DOCS, label: 'Open Zustand docs →', external: true },
  },
  {
    icon: '🔷', title: 'Zustand + TypeScript', titleClass: 'card-title-purple', subtitle: 'Typed Stores',
    description:
      'The recommended TypeScript patterns — the create<T>()(...) curried form, typed middleware and typed selectors.',
    link: { href: ZUSTAND_TS, label: 'Read the TS guide →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Testing', titleClass: 'card-title-amber', subtitle: 'Day 21 Preview',
    description:
      'Tomorrow — testing React with Vitest and React Testing Library: render components, query by role, simulate user events, and assert behaviour, not implementation.',
    link: { href: '/day-021', label: 'Go to Day 21 →' },
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

export default function Day020() {
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
          <Link to="/day-019" className="day001-nav-btn day001-nav-prev">← Day 19</Link>
          <p className="day001-datetime">TypeScript Day 20</p>
          <Link to="/day-021" className="day001-nav-btn day001-nav-next">Day 21 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Zustand</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 20 <span aria-hidden="true">🐻</span></h1>
              <p className="day001-day-theme">GLOBAL STATE — ZUSTAND</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '20%' }} /></div>

        <p className="day001-summary">
          Some state is truly shared — auth, theme, a cart. <strong>Zustand</strong> holds it in a{' '}
          <strong>store</strong> (a hook outside React) with <strong>no provider</strong> to wrap the app.{' '}
          <code>create&lt;StoreType&gt;()</code> types state and actions end to end. The key idea is{' '}
          <strong>selectors</strong>: <code>useStore(s =&gt; s.count)</code> subscribes to one slice, so only that
          re-renders — unlike a single Context that re-renders every consumer. Keep logic in the store via{' '}
          <code>set()</code>, and add <strong>persist</strong> to save to localStorage. Right tool per job: server →
          Query, forms → RHF, shared client state → Zustand. <em>Next: testing.</em>
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

        <CardSection icon="🐻" title="THE STORE" cards={STORE} columns={2} />
        <CardSection icon="⚖️" title="WHY & WHEN" cards={WHY} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#Zustand</span><span>#State</span>
        </footer>
      </div>
    </div>
  );
}
