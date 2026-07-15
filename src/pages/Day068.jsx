import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://react.dev/learn/passing-data-deeply-with-context';
const LABS_URL = 'https://react.chaicode.com/';

const LEARNT_TODAY = [
  {
    title: 'Prop drilling',
    text: 'passing props through layers that don’t use them',
  },
  {
    title: 'createContext',
    text: 'creates a shared value container',
  },
  {
    title: 'Provider',
    text: 'supplies the value to a whole subtree',
  },
  {
    title: 'useContext',
    text: 'reads the value from any descendant',
  },
  {
    title: 'Good for',
    text: 'theme, auth, locale — app-wide-ish state',
  },
  {
    title: 'Context + useReducer',
    text: 'a scalable pattern for complex state',
  },
  {
    title: 'Split contexts',
    text: 'separate concerns to limit re-renders',
  },
  {
    title: 'Not always Redux',
    text: 'context solves sharing, not every state problem',
  },
  {
    title: 'Default value',
    text: 'a sensible fallback outside a Provider',
  },
  {
    title: 'Memoize value',
    text: 'stabilize the value to avoid re-renders',
  },
];

const CONTEXT = [
  {
    icon: '🪜',
    title: 'Prop Drilling',
    titleClass: 'card-title-cyan',
    subtitle: 'the problem',
    description: 'Data threaded through components that don’t need it.',
    code: '<App> → <Page user={user}> → <Nav user={user}> → <Avatar user={user} />\n// tedious and fragile',
  },
  {
    icon: '📦',
    title: 'createContext',
    titleClass: 'card-title-green',
    subtitle: 'a shared box',
    description: 'Create a context with a default value.',
    code: 'const ThemeContext = createContext("light");',
  },
  {
    icon: '📡',
    title: 'Provider',
    titleClass: 'card-title-amber',
    subtitle: 'supply it',
    description: 'Wrap a subtree and provide the current value.',
    code: '<ThemeContext.Provider value={theme}>\n  <App />\n</ThemeContext.Provider>',
  },
  {
    icon: '🎣',
    title: 'useContext',
    titleClass: 'card-title-pink',
    subtitle: 'consume it',
    description: 'Read the value anywhere below — no props needed.',
    code: 'const theme = useContext(ThemeContext);',
  },
];

const STATE_MGMT = [
  {
    icon: '🔧',
    title: 'Context + useReducer',
    titleClass: 'card-title-cyan',
    subtitle: 'scalable',
    description: 'Reducer holds logic; context distributes state + dispatch.',
    code: 'const [state, dispatch] = useReducer(reducer, init);\n<Ctx.Provider value={{ state, dispatch }}>',
  },
  {
    icon: '🧭',
    title: 'When to Use',
    titleClass: 'card-title-green',
    subtitle: 'right tool',
    description: 'Context for low-frequency global-ish data, not everything.',
    code: 'theme · auth · locale → context\nserver cache → React Query, big state → Redux',
  },
  {
    icon: '⚡',
    title: 'Performance',
    titleClass: 'card-title-amber',
    subtitle: 'split + memo',
    description: 'Split contexts and memoize the value to cut re-renders.',
    code: 'const value = useMemo(() => ({ user, setUser }), [user]);\n// separate ThemeContext from AuthContext',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'React Docs — Context',
    titleClass: 'card-title-green',
    subtitle: 'react.dev',
    description: 'The official guide to passing data deeply with context.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🧪',
    title: 'ChaiCode React Labs',
    titleClass: 'card-title-purple',
    subtitle: 'Interactive playground',
    description: 'Practice context and shared state hands-on.',
    link: { href: LABS_URL, label: 'Open the labs →', external: true },
  },
  {
    icon: '▶️',
    title: 'useContext Explained',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Master React Hooks — useContext by Nova Designs — supplement for Day 68.',
    link: {
      href: 'https://www.youtube.com/watch?v=n7xQVRpYHYY',
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

export default function Day068() {
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
          <Link to="/day-067" className="day001-nav-btn day001-nav-home">
            ← Day 67
          </Link>
          <p className="day001-datetime">Thunder Day 68 · 22 Sep 2026</p>
          <Link to="/day-069" className="day001-nav-btn day001-nav-next">
            Day 69 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>React</span>
              <span>State</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 68 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">CONTEXT API & STATE MANAGEMENT</p>
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
          <div className="day001-progress-bar" style={{ width: '68%' }} />
        </div>

        <p className="day001-summary">
          Day sixty-eight — passing props through layers that ignore them is{' '}
          <strong>prop drilling</strong>. The <strong>Context API</strong> fixes it:{' '}
          <code>createContext</code> makes a shared value, a <strong>Provider</strong> supplies it to
          a subtree, and <code>useContext</code> reads it anywhere below. For complex state, pair it
          with <strong>useReducer</strong>. Context is for low-frequency global-ish data (theme,
          auth) — split contexts and <strong>memoize</strong> the value to avoid needless
          re-renders. Practice at{' '}
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

        <CardSection icon="🧩" title="CONTEXT" cards={CONTEXT} columns={4} />
        <CardSection icon="🗂️" title="STATE MANAGEMENT" cards={STATE_MGMT} columns={3} />
        <CardSection icon="📚" title="REACT RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#React</span>
          <span>#ContextAPI</span>
          <span>#StateManagement</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
