import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const REACT_HOOKS_TS = 'https://react.dev/learn/typescript#typing-hooks';
const REACT_CUSTOM_HOOKS = 'https://react.dev/learn/reusing-logic-with-custom-hooks';

const LEARNT_TODAY = [
  { title: 'useEffect', text: 'no type needed on the effect itself — but type what it touches, and clean up correctly' },
  { title: 'useRef<T>', text: 'useRef<HTMLInputElement>(null) types a DOM ref; ref.current may be null until mounted' },
  { title: 'Mutable refs', text: 'useRef<number>(0) holds a value that survives renders without causing one' },
  { title: 'useContext', text: 'createContext<T>() plus a typed provider gives fully-typed shared state' },
  { title: 'useReducer', text: 'a typed state and a discriminated-union action make reducers exhaustively checked' },
  { title: 'Custom hooks', text: 'a function starting with use that returns typed values — reuse logic, keep the types' },
  { title: 'Return tuples', text: 'return [value, setValue] as const so the tuple types stay precise' },
  { title: 'Rules of hooks', text: 'call hooks at the top level only — TypeScript won’t save you from breaking that' },
];

const CORE = [
  {
    icon: '🎯', title: 'useRef<T>', titleClass: 'card-title-cyan', subtitle: 'DOM & Mutable',
    description:
      'Type a DOM ref with the element type and start it at null — current is null until React attaches it. useRef also stores a mutable value that persists across renders without triggering one.',
    code: 'const input = useRef<HTMLInputElement>(null);\nuseEffect(() => input.current?.focus(), []);\n\nconst renders = useRef(0); // survives renders',
  },
  {
    icon: '🔄', title: 'useEffect', titleClass: 'card-title-purple', subtitle: 'Sync & Clean Up',
    description:
      'The effect callback needs no type, but type the values it reads and always return a cleanup for subscriptions. A correct dependency array keeps it honest.',
    code: 'useEffect(() => {\n  const id = setInterval(tick, 1000);\n  return () => clearInterval(id); // cleanup\n}, [tick]);',
  },
];

const SHARE = [
  {
    icon: '🌍', title: 'useContext', titleClass: 'card-title-cyan', subtitle: 'Typed Shared State',
    description:
      'createContext<T>() types the context, a provider supplies the value, and useContext reads it fully typed. A small helper hook can assert the provider is present.',
    code: 'const Theme = createContext<"light" | "dark">("light");\nfunction useTheme() { return useContext(Theme); }\n// useTheme() → "light" | "dark"',
  },
  {
    icon: '🪝', title: 'Custom Hooks', titleClass: 'card-title-purple', subtitle: 'Reuse Typed Logic',
    description:
      'A custom hook is a function named use* that calls other hooks and returns typed values. Use as const on a returned tuple so its element types stay exact.',
    code: 'function useToggle(init = false) {\n  const [on, setOn] = useState(init);\n  return [on, () => setOn(o => !o)] as const;\n}',
  },
  {
    icon: '🎛️', title: 'useReducer', titleClass: 'card-title-amber', subtitle: 'Discriminated Actions',
    description:
      'Type the state and model actions as a discriminated union. The switch in the reducer is then exhaustively checked — a missed action becomes a compile error.',
    code: 'type Action =\n  | { type: "inc" }\n  | { type: "set"; value: number };\n// reducer(state, action): switch on action.type',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Typing Hooks', titleClass: 'card-title-cyan', subtitle: 'react.dev',
    description:
      'The official guide to typing useState, useReducer, useContext, useRef and useMemo/useCallback — with the exact generic signatures.',
    link: { href: REACT_HOOKS_TS, label: 'Open the Hooks + TS docs →', external: true },
  },
  {
    icon: '🪝', title: 'Custom Hooks', titleClass: 'card-title-purple', subtitle: 'react.dev',
    description:
      'How to extract reusable logic into custom hooks — the patterns you’ll type and reuse across the whole Year-1 app.',
    link: { href: REACT_CUSTOM_HOOKS, label: 'Open the custom-hooks guide →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Next.js + TS', titleClass: 'card-title-amber', subtitle: 'Day 15 Preview',
    description:
      'Tomorrow — Next.js with TypeScript: the App Router, typed pages and layouts, server vs client components, and typed route handlers.',
    link: { href: '/day-015', label: 'Go to Day 15 →' },
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

export default function Day014() {
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
          <Link to="/day-013" className="day001-nav-btn day001-nav-prev">← Day 13</Link>
          <p className="day001-datetime">TypeScript Day 14 · 20 Jun 2027</p>
          <Link to="/day-015" className="day001-nav-btn day001-nav-next">Day 15 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Hooks</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 14 <span aria-hidden="true">🪝</span></h1>
              <p className="day001-day-theme">HOOKS WITH TYPESCRIPT</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '14%' }} /></div>

        <p className="day001-summary">
          Typing the rest of the hooks. <strong>useRef&lt;HTMLInputElement&gt;(null)</strong> types a DOM ref
          (<code>current</code> may be null until mounted), and <code>useRef(0)</code> stores a mutable value that
          survives renders. <strong>useEffect</strong> needs no type itself — just type what it reads and always
          return a <strong>cleanup</strong>. <strong>useContext</strong> with <code>createContext&lt;T&gt;()</code>{' '}
          gives typed shared state, and <strong>useReducer</strong> with a <em>discriminated-union</em> action gets an
          exhaustively-checked switch. Bundle logic into <strong>custom hooks</strong> that return{' '}
          <code>[value, setValue] as const</code> to keep tuple types precise. <em>Next: Next.js.</em>
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

        <CardSection icon="🎯" title="useRef & useEffect" cards={CORE} columns={2} />
        <CardSection icon="🌍" title="CONTEXT · CUSTOM · REDUCER" cards={SHARE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#React</span><span>#Hooks</span>
        </footer>
      </div>
    </div>
  );
}
