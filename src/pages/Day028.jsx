import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const REACT_CUSTOM_HOOKS = 'https://react.dev/learn/reusing-logic-with-custom-hooks';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'Custom hooks', text: 'a function starting with "use" that reuses stateful logic across components' },
  { title: 'They compose hooks', text: 'a custom hook calls useState/useEffect internally and returns useful values' },
  { title: 'Typed returns', text: 'annotate the return so callers get precise types and autocomplete' },
  { title: 'Tuple returns', text: 'return `[value, setValue] as const` to name them like useState' },
  { title: 'Generic hooks', text: 'a `useLocalStorage<T>` works with any stored value type' },
  { title: 'useToggle', text: 'a tiny hook returning [on, toggle] — reusable boolean state' },
  { title: 'useLocalStorage', text: 'persist typed state to localStorage with a generic hook' },
  { title: 'useFetch<T>', text: 'a data-loading hook returning typed { data, loading, error }' },
  { title: 'Rules of hooks', text: 'only call hooks at the top level of components or other hooks' },
  { title: 'Extract, then reuse', text: 'pull repeated logic into a hook once it appears twice' },
];

const BASICS = [
  {
    icon: '🪝', title: 'What Is A Custom Hook', titleClass: 'card-title-cyan', subtitle: 'Reusable Logic',
    description: 'A custom hook is just a function named use* that calls other hooks. It bundles stateful behaviour so multiple components share it — without sharing state.',
    code: 'function useToggle(init = false) {\n  const [on, setOn] = useState(init);\n  const toggle = () => setOn((v) => !v);\n  return [on, toggle] as const;\n}',
  },
  {
    icon: '📦', title: 'Tuple Returns', titleClass: 'card-title-purple', subtitle: 'as const',
    description: 'Return a tuple with as const so TypeScript keeps the exact positions and types — callers destructure and name them just like useState.',
    code: 'const [isOpen, toggle] = useToggle();\n// isOpen: boolean, toggle: () => void',
  },
  {
    icon: '🧩', title: 'Object Returns', titleClass: 'card-title-amber', subtitle: 'When Many Values',
    description: 'Return an object when a hook exposes several named values — clearer than a long tuple, and each field is typed.',
    code: 'return { data, loading, error, refetch };',
  },
];

const GENERIC = [
  {
    icon: '🗃️', title: 'useLocalStorage<T>', titleClass: 'card-title-cyan', subtitle: 'Persist Typed State',
    description: 'A generic hook reads and writes any typed value to localStorage, keeping React state and storage in sync — one reusable, type-safe utility.',
    code: 'function useLocalStorage<T>(key: string, initial: T) {\n  const [v, setV] = useState<T>(() => read(key) ?? initial);\n  useEffect(() => write(key, v), [key, v]);\n  return [v, setV] as const;\n}',
  },
  {
    icon: '🌐', title: 'useFetch<T>', titleClass: 'card-title-blue', subtitle: 'Typed Loading State',
    description: 'A data hook returns typed { data, loading, error }. The generic flows from the call site so components get exactly the shape they requested.',
    code: 'function useFetch<T>(url: string) {\n  const [state, set] = useState<{ data?: T; loading: boolean; error?: string }>({ loading: true });\n  // ... fetch + set\n  return state;\n}',
  },
  {
    icon: '🔮', title: 'Inference Flows', titleClass: 'card-title-amber', subtitle: 'Callers Stay Clean',
    description: 'Because the type parameter propagates, calling useLocalStorage("theme", "dark") infers string — no explicit generic needed at the call site.',
    code: 'const [theme, setTheme] = useLocalStorage("theme", "dark");',
  },
  {
    icon: '🧪', title: 'Easy To Test', titleClass: 'card-title-lime', subtitle: 'Pure Logic',
    description: 'Because a hook isolates logic behind a typed interface, it’s simple to test and swap — the same benefit as extracting a well-typed function.',
    code: '// test the hook once, trust it everywhere',
  },
];

const RULES = [
  {
    icon: '📏', title: 'Rules Of Hooks', titleClass: 'card-title-cyan', subtitle: 'Top Level Only',
    description: 'Call hooks only at the top level of a component or another hook — never in conditions or loops. The lint plugin enforces this and TypeScript respects it.',
    code: '// ✅ const [x] = useState(0);\n// ❌ if (cond) useState(0);',
  },
  {
    icon: '🏷️', title: 'Name It use*', titleClass: 'card-title-purple', subtitle: 'Convention Matters',
    description: 'The use prefix tells React (and the linter) this function uses hooks, so the rules-of-hooks checks apply. Always follow it.',
    code: 'function usePrevious<T>(value: T) { /* ... */ }',
  },
  {
    icon: '♻️', title: 'Extract When Repeated', titleClass: 'card-title-amber', subtitle: 'DRY Your Logic',
    description: 'When the same stateful logic appears in two components, lift it into a hook. Types make the extraction safe — the shared behaviour stays consistent.',
    code: '// same effect twice? → useOnlineStatus()',
  },
  {
    icon: '🔜', title: 'Next: Data Fetching', titleClass: 'card-title-lime', subtitle: 'Day 29 Preview',
    description: 'Tomorrow: data fetching in React TS — the loading/error/data pattern and typed queries with TanStack Query.',
    link: { href: '/day-029', label: 'Go to Day 29 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Custom Hooks', titleClass: 'card-title-cyan', subtitle: 'react.dev',
    description: 'React’s guide to reusing logic with custom hooks — when to extract one, and the rules that keep them correct.',
    link: { href: REACT_CUSTOM_HOOKS, label: 'Read the custom hooks guide →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Type A Hook',
    description: 'Write useToggle with a tuple return and useLocalStorage<T>, then call them to watch inference give clean, precise types.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Typed custom hooks are how you keep React apps DRY. You’ll build a small library of them across every project this year.',
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

export default function Day028() {
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
          <Link to="/day-027" className="day001-nav-btn day001-nav-prev">← Day 27</Link>
          <p className="day001-datetime">TypeScript Day 28</p>
          <Link to="/day-029" className="day001-nav-btn day001-nav-next">Day 29 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Custom Hooks</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 28 <span aria-hidden="true">🪝</span></h1>
              <p className="day001-day-theme">CUSTOM HOOKS IN TYPESCRIPT</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '28%' }} /></div>

        <p className="day001-summary">
          Day 28 extracts reusable logic into <strong>custom hooks</strong>. A hook is a <code>use*</code> function
          that composes other hooks and returns useful values — I typed <strong>tuple</strong> returns with{' '}
          <code>as const</code>, wrote <strong>generic</strong> hooks like <code>useLocalStorage&lt;T&gt;</code> and{' '}
          <code>useFetch&lt;T&gt;</code> where inference flows to the caller, and followed the{' '}
          <strong>rules of hooks</strong>. Now shared behaviour is DRY, typed, and easy to test.
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

        <CardSection icon="🪝" title="HOOK BASICS" cards={BASICS} columns={3} />
        <CardSection icon="🧩" title="GENERIC HOOKS" cards={GENERIC} columns={4} />
        <CardSection icon="📏" title="RULES & PRACTICE" cards={RULES} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#React</span><span>#CustomHooks</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
