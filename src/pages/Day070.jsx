import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://react.dev/reference/react/memo';
const LABS_URL = 'https://react.chaicode.com/';

const LEARNT_TODAY = [
  {
    title: 'Re-renders',
    text: 'the main performance cost in React',
  },
  {
    title: 'React.memo',
    text: 'skip a re-render when props are unchanged',
  },
  {
    title: 'useMemo',
    text: 'cache an expensive computed value',
  },
  {
    title: 'useCallback',
    text: 'keep a function’s identity stable across renders',
  },
  {
    title: 'Stable keys',
    text: 'stable list keys avoid needless remounts',
  },
  {
    title: 'Code splitting',
    text: 'lazy + Suspense load routes on demand',
  },
  {
    title: 'Virtualization',
    text: 'render only the rows that are visible',
  },
  {
    title: 'Avoid inline objects',
    text: 'new refs each render break memoization',
  },
  {
    title: 'Profiler',
    text: 'measure before optimizing anything',
  },
  {
    title: 'Don’t over-optimize',
    text: 'premature optimization wastes effort',
  },
];

const AVOID = [
  {
    icon: '🧠',
    title: 'React.memo',
    titleClass: 'card-title-cyan',
    subtitle: 'skip renders',
    description: 'Memoize a component so equal props skip re-rendering.',
    code: 'const Row = React.memo(function Row({ item }) { ... });\n// only re-renders when `item` changes',
  },
  {
    icon: '💾',
    title: 'useMemo',
    titleClass: 'card-title-green',
    subtitle: 'cache values',
    description: 'Avoid recomputing expensive derived data each render.',
    code: 'const sorted = useMemo(\n  () => heavySort(items), [items]);',
  },
  {
    icon: '🔗',
    title: 'useCallback',
    titleClass: 'card-title-amber',
    subtitle: 'stable fns',
    description: 'Keep callback identity stable so memo’d children hold.',
    code: 'const onAdd = useCallback((id) => dispatch(add(id)), []);\n// same reference across renders',
  },
  {
    icon: '🔑',
    title: 'Stable Keys',
    titleClass: 'card-title-pink',
    subtitle: 'list identity',
    description: 'Use stable ids as keys — never the array index.',
    code: '{items.map(i => <Row key={i.id} item={i} />)}\n// index keys cause remounts on reorder',
  },
];

const LOAD_LESS = [
  {
    icon: '✂️',
    title: 'Code Splitting',
    titleClass: 'card-title-cyan',
    subtitle: 'lazy + Suspense',
    description: 'Load a route/component only when it’s needed.',
    code: 'const Dash = lazy(() => import("./Dash"));\n<Suspense fallback={<Spinner/>}><Dash/></Suspense>',
  },
  {
    icon: '📜',
    title: 'Virtualization',
    titleClass: 'card-title-green',
    subtitle: 'render visible',
    description: 'For huge lists, render only what’s on screen.',
    code: '// react-window / react-virtualized\n// 10,000 rows → ~20 in the DOM',
  },
  {
    icon: '📈',
    title: 'Measure First',
    titleClass: 'card-title-amber',
    subtitle: 'Profiler',
    description: 'Profile to find the real bottleneck before optimizing.',
    code: 'React DevTools → Profiler → record\n// optimize the slow commit, not a guess',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'React Docs — memo',
    titleClass: 'card-title-green',
    subtitle: 'react.dev',
    description: 'The official reference for React.memo, useMemo, and useCallback.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🧪',
    title: 'ChaiCode React Labs',
    titleClass: 'card-title-purple',
    subtitle: 'Interactive playground',
    description: 'Profile and optimize a real React app hands-on.',
    link: { href: LABS_URL, label: 'Open the labs →', external: true },
  },
  {
    icon: '▶️',
    title: '8 Optimization Techniques',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: '8 React JS Performance Optimization Techniques by xplodivity — for Day 70.',
    link: {
      href: 'https://www.youtube.com/watch?v=CaShN6mCJB0',
      label: 'Watch on YouTube →',
      external: true,
    },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">
        {card.icon}
      </span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a
            href={card.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="day001-card-link"
          >
            {card.link.label}
          </a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">
            {card.link.label}
          </Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title">
        <span aria-hidden="true">{icon}</span> {title}
      </h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (
          <TopicCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

export default function Day070() {
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
      const scale = Math.min(
        (window.innerHeight - pad) / wrap.scrollHeight,
        (window.innerWidth - pad) / wrap.scrollWidth,
      );

      wrap.style.transform = `scale(${scale})`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
    };

    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);

    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) {
      avatar.addEventListener('load', fitToScreen);
    }

    return () => {
      window.removeEventListener('resize', fitToScreen);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/day-069" className="day001-nav-btn day001-nav-home">
            ← Day 69
          </Link>
          <p className="day001-datetime">Thunder Day 70 · 24 Sep 2026</p>
          <Link to="/day-071" className="day001-nav-btn day001-nav-next">
            Day 71 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>React</span>
              <span>Performance</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 70 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">REACT PERFORMANCE OPTIMIZATION</p>
            </div>
          </div>
          <div className="day001-profile">
            <img
              src="/sumit-profile.png"
              alt="Sumit Rawal"
              className="day001-avatar"
              width={48}
              height={48}
            />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">REACT · FRONTEND</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '70%' }} />
        </div>

        <p className="day001-summary">
          Day seventy — making React fast is mostly about avoiding wasted{' '}
          <strong>re-renders</strong>. <code>React.memo</code> skips a render on equal props,{' '}
          <code>useMemo</code> caches expensive values, and <code>useCallback</code> keeps callback
          identity stable — backed by <strong>stable keys</strong> and avoiding inline objects. To
          load less, <strong>code-split</strong> with <code>lazy</code> + <code>Suspense</code> and{' '}
          <strong>virtualize</strong> big lists — but always <strong>measure with the Profiler</strong>{' '}
          first and never over-optimize. Practice at{' '}
          <a href={LABS_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            ChaiCode React Labs
          </a>
          .
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title">
            <span className="day001-learnt-line" aria-hidden="true" />
            WHAT I LEARNED TODAY
          </h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">
                  ✓
                </span>
                <span>
                  <strong>{item.title}</strong> — {item.text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🧠" title="AVOID RE-RENDERS" cards={AVOID} columns={4} />
        <CardSection icon="📦" title="LOAD LESS" cards={LOAD_LESS} columns={3} />
        <CardSection icon="📚" title="REACT RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#React</span>
          <span>#Performance</span>
          <span>#Optimization</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
