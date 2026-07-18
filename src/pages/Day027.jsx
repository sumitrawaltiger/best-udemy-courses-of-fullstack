import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const REACT_CONTEXT = 'https://react.dev/reference/react/useContext';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'Context', text: 'share values across the tree without prop-drilling — themes, auth, settings' },
  { title: 'createContext type', text: 'give the context a precise value type so consumers are checked' },
  { title: 'The null default trap', text: 'a default of null forces every consumer to null-check — the guard hook fixes it' },
  { title: 'Provider', text: 'a typed Provider passes the value down; children read it with useContext' },
  { title: 'Custom hook guard', text: 'wrap useContext in a hook that throws if used outside the Provider' },
  { title: 'Context + reducer', text: 'expose reducer state and dispatch through context for typed global state' },
  { title: 'Split contexts', text: 'separate value and dispatch contexts to reduce re-renders' },
  { title: 'Memo the value', text: 'useMemo the provider value so consumers don’t re-render needlessly' },
  { title: 'Not a state manager', text: 'context shares state; it doesn’t optimize like Redux/Zustand' },
  { title: 'Typed everywhere', text: 'from createContext to the hook, the value type flows end to end' },
];

const CREATE = [
  {
    icon: '🌳', title: 'Why Context', titleClass: 'card-title-cyan', subtitle: 'No Prop-Drilling',
    description: 'Context lets deeply nested components read shared values — theme, current user, settings — without threading props through every layer.',
    code: 'interface Theme { mode: "light" | "dark"; toggle(): void }',
  },
  {
    icon: '🏷️', title: 'createContext', titleClass: 'card-title-purple', subtitle: 'Type The Value',
    description: 'Type the context by its value. Using undefined as the default (with strict checks) forces you to provide a real value — enforced by the guard hook.',
    code: 'const ThemeContext = createContext<Theme | undefined>(undefined);',
  },
  {
    icon: '📦', title: 'The Provider', titleClass: 'card-title-amber', subtitle: 'Pass It Down',
    description: 'Wrap the tree in a Provider that supplies the typed value. Everything inside can read it — no matter how deep — with full type safety.',
    code: 'function ThemeProvider({ children }: { children: React.ReactNode }) {\n  const value = useThemeState();\n  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;\n}',
  },
];

const CONSUME = [
  {
    icon: '🪝', title: 'The Guard Hook', titleClass: 'card-title-cyan', subtitle: 'Throw If Missing',
    description: 'Wrap useContext in a custom hook that throws when the value is undefined. Consumers get a non-null type and a clear error if the Provider is missing.',
    code: 'function useTheme() {\n  const ctx = useContext(ThemeContext);\n  if (!ctx) throw new Error("useTheme outside ThemeProvider");\n  return ctx; // Theme, never undefined\n}',
  },
  {
    icon: '⚡', title: 'Clean Consumption', titleClass: 'card-title-blue', subtitle: 'No Null Checks',
    description: 'Thanks to the guard hook, components call useTheme() and immediately use the value — no repeated null checks scattered around the codebase.',
    code: 'function Button() {\n  const { mode, toggle } = useTheme();\n  return <button onClick={toggle}>{mode}</button>;\n}',
  },
  {
    icon: '🔗', title: 'Context + Reducer', titleClass: 'card-title-amber', subtitle: 'Typed Global State',
    description: 'Put yesterday’s reducer state and dispatch into context to get app-wide, typed state without a library — Redux-like ergonomics, zero deps.',
    code: 'const [state, dispatch] = useReducer(reducer, init);\n<Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>',
  },
  {
    icon: '✂️', title: 'Split Contexts', titleClass: 'card-title-lime', subtitle: 'Fewer Re-renders',
    description: 'Separate the value context from the dispatch context so components that only dispatch don’t re-render when state changes. A common performance win.',
    code: '<StateCtx.Provider value={state}>\n  <DispatchCtx.Provider value={dispatch}>...',
  },
];

const PRACTICE = [
  {
    icon: '🧠', title: 'Memoize The Value', titleClass: 'card-title-cyan', subtitle: 'useMemo',
    description: 'A new object literal as the provider value re-renders all consumers each render. Wrap it in useMemo so it only changes when its inputs do.',
    code: 'const value = useMemo(() => ({ mode, toggle }), [mode]);',
  },
  {
    icon: '⚖️', title: 'Not A State Manager', titleClass: 'card-title-purple', subtitle: 'Know The Limits',
    description: 'Context distributes state; it doesn’t batch or select like Redux/Zustand. For large, frequently-updated state, reach for a dedicated library.',
    code: '// heavy global state? → Zustand / Redux Toolkit',
  },
  {
    icon: '🎯', title: 'One Concern Per Context', titleClass: 'card-title-amber', subtitle: 'Keep Them Focused',
    description: 'Prefer several small, focused contexts (auth, theme, cart) over one giant one. Smaller contexts mean fewer re-renders and clearer types.',
    code: 'AuthContext · ThemeContext · CartContext',
  },
  {
    icon: '🔜', title: 'Next: Custom Hooks', titleClass: 'card-title-lime', subtitle: 'Day 28 Preview',
    description: 'Tomorrow: building your own typed hooks — generic hooks, tuple returns, and a reusable useFetch<T>.',
    link: { href: '/day-028', label: 'Go to Day 28 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'useContext', titleClass: 'card-title-cyan', subtitle: 'react.dev',
    description: 'The official reference for context and useContext — creating, providing, and reading context, with the patterns the types build on.',
    link: { href: REACT_CONTEXT, label: 'Read the useContext docs →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Type A Context',
    description: 'Create a context with an undefined default, then write the guard hook and confirm it returns a non-undefined type. The pattern becomes clear.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Typed context + reducer is the "no-library" global state pattern you’ll use in most React & Next.js apps this year.',
    link: { href: '/roadmap', label: 'See the full roadmap →' },
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

export default function Day027() {
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
          <Link to="/day-026" className="day001-nav-btn day001-nav-prev">← Day 26</Link>
          <p className="day001-datetime">TypeScript Day 27</p>
          <Link to="/day-028" className="day001-nav-btn day001-nav-next">Day 28 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Context</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 27 <span aria-hidden="true">🌳</span></h1>
              <p className="day001-day-theme">CONTEXT API WITH TYPESCRIPT</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">TS · REACT</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '27%' }} /></div>

        <p className="day001-summary">
          Day 27 shares state without prop-drilling using <strong>Context</strong>. I typed{' '}
          <code>createContext</code> by its value, avoided the null-default trap with a{' '}
          <strong>custom guard hook</strong> that throws outside its Provider (returning a non-undefined type), and
          combined <strong>context + reducer</strong> for typed global state with zero libraries. I also learned to{' '}
          <strong>memoize</strong> the provider value and <strong>split</strong> contexts to keep re-renders down.
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

        <CardSection icon="🌳" title="CREATE & PROVIDE" cards={CREATE} columns={3} />
        <CardSection icon="🪝" title="CONSUME SAFELY" cards={CONSUME} columns={4} />
        <CardSection icon="🧠" title="GOOD PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#React</span><span>#Context</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
