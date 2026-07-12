import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://react.dev/reference/react/useEffect';
const LABS_URL = 'https://react.chaicode.com/';

const LEARNT_TODAY = [
  {
    title: 'Hooks',
    text: 'use React features from function components',
  },
  {
    title: 'useState',
    text: 'local, reactive component state',
  },
  {
    title: 'useEffect',
    text: 'run side effects after the render commits',
  },
  {
    title: 'Dependency array',
    text: 'controls when the effect re-runs',
  },
  {
    title: '[] deps',
    text: 'run once, on mount',
  },
  {
    title: 'Cleanup',
    text: 'return a function to tear down the effect',
  },
  {
    title: 'Effects are for',
    text: 'fetching, subscriptions, timers, manual DOM',
  },
  {
    title: 'Rules of hooks',
    text: 'call at the top level, only in components/hooks',
  },
  {
    title: 'Complete deps',
    text: 'list everything the effect uses to avoid stale values',
  },
  {
    title: 'Maybe skip it',
    text: 'you might not need an effect for derived data',
  },
];

const STATE_HOOK = [
  {
    icon: '🎛️',
    title: 'useState',
    titleClass: 'card-title-cyan',
    subtitle: 'reactive value',
    description: 'Holds state; updating it re-renders the component.',
    code: 'const [text, setText] = useState("");\n<input value={text} onChange={e => setText(e.target.value)} />',
  },
  {
    icon: '🔧',
    title: 'Updating State',
    titleClass: 'card-title-green',
    subtitle: 'immutable',
    description: 'Never mutate — replace with a new value/object.',
    code: 'setItems(prev => [...prev, newItem]);\nsetUser(u => ({ ...u, name }));',
  },
  {
    icon: '📏',
    title: 'Rules of Hooks',
    titleClass: 'card-title-amber',
    subtitle: 'top level only',
    description: 'Never call hooks in loops, conditions, or nested functions.',
    code: '// ✅ top of the component\n// ❌ inside if / for / callbacks',
  },
];

const EFFECT_HOOK = [
  {
    icon: '⚙️',
    title: 'useEffect',
    titleClass: 'card-title-cyan',
    subtitle: 'side effects',
    description: 'Runs after render — for anything outside React.',
    code: 'useEffect(() => {\n  document.title = `Count: ${count}`;\n});',
  },
  {
    icon: '📋',
    title: 'Dependency Array',
    titleClass: 'card-title-green',
    subtitle: 'when it runs',
    description: 'React re-runs the effect only when a dep changes.',
    code: 'useEffect(fn, [])       // once, on mount\nuseEffect(fn, [id])     // when id changes',
  },
  {
    icon: '🧹',
    title: 'Cleanup',
    titleClass: 'card-title-amber',
    subtitle: 'tear down',
    description: 'Return a function to cancel timers/subscriptions.',
    code: 'useEffect(() => {\n  const t = setInterval(tick, 1000);\n  return () => clearInterval(t);\n}, []);',
  },
  {
    icon: '🎯',
    title: 'When to Use',
    titleClass: 'card-title-pink',
    subtitle: 'not always',
    description: 'Use for external systems; derive data during render instead.',
    code: '// yes: fetch, subscribe, timers\n// no: value you can compute from props/state',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'React Docs — useEffect',
    titleClass: 'card-title-green',
    subtitle: 'react.dev',
    description: 'The official reference for useEffect, deps, and cleanup.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🧪',
    title: 'ChaiCode React Labs',
    titleClass: 'card-title-purple',
    subtitle: 'Interactive playground',
    description: 'Practice hooks and effects hands-on.',
    link: { href: LABS_URL, label: 'Open the labs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Learn useEffect',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Learn React Hooks: useEffect — Simply Explained! by Cosden Solutions — for Day 62.',
    link: {
      href: 'https://www.youtube.com/watch?v=-4XpG5_Lj_o',
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

export default function Day062() {
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
          <Link to="/day-061" className="day001-nav-btn day001-nav-home">
            ← Day 61
          </Link>
          <p className="day001-datetime">Thunder Day 62 · 4 Sep 2026</p>
          <Link to="/day-063" className="day001-nav-btn day001-nav-next">
            Day 63 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>React</span>
              <span>Hooks</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 62 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">HOOKS — useState & useEffect</p>
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
          <div className="day001-progress-bar" style={{ width: '62%' }} />
        </div>

        <p className="day001-summary">
          Day sixty-two — <strong>hooks</strong> unlock React features in function components.{' '}
          <code>useState</code> holds reactive state (update it immutably), and{' '}
          <code>useEffect</code> runs <strong>side effects</strong> after render — fetching,
          subscriptions, timers. The <strong>dependency array</strong> controls when it runs (
          <code>[]</code> = once on mount), and returning a function handles <strong>cleanup</strong>.
          Follow the <strong>rules of hooks</strong>, list complete deps, and remember you might not
          need an effect for derived data. Practice at{' '}
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

        <CardSection icon="🎛️" title="STATE HOOK" cards={STATE_HOOK} columns={3} />
        <CardSection icon="⚙️" title="EFFECT HOOK" cards={EFFECT_HOOK} columns={4} />
        <CardSection icon="📚" title="REACT RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#React</span>
          <span>#Hooks</span>
          <span>#useEffect</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
