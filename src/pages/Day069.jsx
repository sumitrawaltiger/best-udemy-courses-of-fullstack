import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://redux-toolkit.js.org/introduction/getting-started';
const LABS_URL = 'https://react.chaicode.com/';

const LEARNT_TODAY = [
  {
    title: 'Redux',
    text: 'a predictable, centralized state container',
  },
  {
    title: 'Redux Toolkit',
    text: 'the official, batteries-included way to use Redux',
  },
  {
    title: 'Store',
    text: 'configureStore holds the whole app state',
  },
  {
    title: 'Slice',
    text: 'createSlice bundles state, reducers, and actions',
  },
  {
    title: 'Immer',
    text: 'write "mutating" reducers safely — it stays immutable',
  },
  {
    title: 'useSelector',
    text: 'read a piece of state into a component',
  },
  {
    title: 'useDispatch',
    text: 'dispatch actions to update state',
  },
  {
    title: 'Provider',
    text: 'wraps the app with the store',
  },
  {
    title: 'Async',
    text: 'createAsyncThunk or RTK Query for data',
  },
  {
    title: 'When to use',
    text: 'large, shared, cross-cutting client state',
  },
];

const RTK = [
  {
    icon: '🏪',
    title: 'Why Redux',
    titleClass: 'card-title-cyan',
    subtitle: 'one store',
    description: 'A single source of truth with predictable updates.',
    code: 'action → reducer → new state → UI\n// one-way, traceable, debuggable',
  },
  {
    icon: '⚙️',
    title: 'Store',
    titleClass: 'card-title-green',
    subtitle: 'configureStore',
    description: 'Combine slices into one configured store.',
    code: 'const store = configureStore({\n  reducer: { cart: cartReducer },\n});',
  },
  {
    icon: '🍰',
    title: 'Slice',
    titleClass: 'card-title-amber',
    subtitle: 'createSlice',
    description: 'State + reducers + auto-generated actions in one place.',
    code: 'const cart = createSlice({\n  name: "cart", initialState: [],\n  reducers: { add: (s, a) => { s.push(a.payload); } },\n});',
  },
  {
    icon: '🧊',
    title: 'Immer',
    titleClass: 'card-title-pink',
    subtitle: 'safe mutation',
    description: 'Write direct “mutations”; Immer produces new state.',
    code: 's.push(item);  // looks mutable\n// RTK/Immer makes it immutable under the hood',
  },
];

const USING = [
  {
    icon: '👀',
    title: 'useSelector / useDispatch',
    titleClass: 'card-title-cyan',
    subtitle: 'read + write',
    description: 'Select state into components; dispatch to change it.',
    code: 'const items = useSelector(s => s.cart);\nconst dispatch = useDispatch();\ndispatch(add(product));',
  },
  {
    icon: '🔌',
    title: 'Provider',
    titleClass: 'card-title-green',
    subtitle: 'wire it up',
    description: 'Wrap the app so any component can reach the store.',
    code: '<Provider store={store}>\n  <App />\n</Provider>',
  },
  {
    icon: '🌐',
    title: 'Async Data',
    titleClass: 'card-title-amber',
    subtitle: 'thunk / RTK Query',
    description: 'Handle side effects and server cache the RTK way.',
    code: 'createAsyncThunk("cart/load", fetchCart)\n// or RTK Query for caching + fetching',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'Redux Toolkit Docs',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'Getting started with Redux Toolkit — store, slices, and RTK Query.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🧪',
    title: 'ChaiCode React Labs',
    titleClass: 'card-title-purple',
    subtitle: 'Interactive playground',
    description: 'Wire up a Redux store in a real app hands-on.',
    link: { href: LABS_URL, label: 'Open the labs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Redux Toolkit Tutorial',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'React Redux Toolkit Tutorial for Beginners by PedroTech — for Day 69.',
    link: {
      href: 'https://www.youtube.com/watch?v=QgK_-G-hWeA',
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

export default function Day069() {
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
          <Link to="/day-068" className="day001-nav-btn day001-nav-home">
            ← Day 68
          </Link>
          <p className="day001-datetime">Thunder Day 69</p>
          <Link to="/day-070" className="day001-nav-btn day001-nav-next">
            Day 70 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>React</span>
              <span>Redux</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 69 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">REDUX TOOLKIT</p>
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
          <div className="day001-progress-bar" style={{ width: '69%' }} />
        </div>

        <p className="day001-summary">
          Day sixty-nine — for large, shared client state, <strong>Redux Toolkit</strong> is the
          official, modern way to do Redux. <code>configureStore</code> holds the{' '}
          <strong>store</strong>, and each <code>createSlice</code> bundles state, reducers, and
          auto-generated actions — with <strong>Immer</strong> letting you write “mutating” code
          safely. Components read with <code>useSelector</code> and update via{' '}
          <code>useDispatch</code>, all wrapped by the <strong>Provider</strong>. For async, reach
          for <strong>createAsyncThunk</strong> or <strong>RTK Query</strong>. Docs:{' '}
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Redux Toolkit
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

        <CardSection icon="🏪" title="REDUX TOOLKIT" cards={RTK} columns={4} />
        <CardSection icon="🔗" title="USING IT" cards={USING} columns={3} />
        <CardSection icon="📚" title="REDUX RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#React</span>
          <span>#Redux</span>
          <span>#ReduxToolkit</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
