import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const REACT_HOOKS_TS = 'https://react.dev/learn/typescript#typing-usestate';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'useState inference', text: 'useState(0) infers number — no generic needed for simple values' },
  { title: 'Explicit generics', text: 'useState<Type>() when the initial value can’t reveal the type' },
  { title: 'Union state', text: 'useState<"idle" | "loading" | "done"> for state machines' },
  { title: 'Nullable state', text: 'useState<User | null>(null) — the common "not loaded yet" shape' },
  { title: 'Object state', text: 'type the whole object; updates must produce the same shape' },
  { title: 'Array state', text: 'useState<Task[]>([]) — every item stays checked' },
  { title: 'Functional updates', text: 'setCount(c => c + 1) — the updater is typed too' },
  { title: 'Lazy initialization', text: 'useState(() => compute()) runs once; the return type is inferred' },
  { title: 'Setter type', text: 'React.Dispatch<React.SetStateAction<T>> when you pass a setter as a prop' },
  { title: 'Derive, don’t duplicate', text: 'compute values from state instead of storing extra state' },
];

const BASICS = [
  {
    icon: '🔮', title: 'Inference', titleClass: 'card-title-cyan', subtitle: 'The Common Case',
    description: 'When the initial value reveals the type, useState infers it — count is number, name is string. No generic argument required.',
    code: 'const [count, setCount] = useState(0);      // number\nconst [name, setName] = useState("Sumit"); // string',
  },
  {
    icon: '🏷️', title: 'Explicit Generic', titleClass: 'card-title-purple', subtitle: 'When Inference Can’t',
    description: 'If the initial value doesn’t reveal the full type — an empty array, or null now / object later — pass the type explicitly.',
    code: 'const [tasks, setTasks] = useState<Task[]>([]);\nconst [user, setUser] = useState<User | null>(null);',
  },
  {
    icon: '🚦', title: 'Union State', titleClass: 'card-title-amber', subtitle: 'Model A State Machine',
    description: 'A literal union captures the exact states a value can be in — the clean, type-safe way to represent loading and status flows.',
    code: 'const [status, setStatus] =\n  useState<"idle" | "loading" | "error" | "done">("idle");',
  },
];

const UPDATES = [
  {
    icon: '🔁', title: 'Functional Updates', titleClass: 'card-title-cyan', subtitle: 'Based On Previous',
    description: 'When new state depends on the old, pass an updater function. Its parameter is typed as the current state, so the math stays checked.',
    code: 'setCount((c) => c + 1);\nsetTasks((prev) => [...prev, newTask]);',
  },
  {
    icon: '🥚', title: 'Lazy Initialization', titleClass: 'card-title-blue', subtitle: 'Compute Once',
    description: 'Pass a function to useState to compute the initial value only on the first render. The return type is inferred just like a value.',
    code: 'const [data] = useState(() => JSON.parse(localStorage.getItem("d") ?? "[]"));',
  },
  {
    icon: '🧩', title: 'Object State', titleClass: 'card-title-amber', subtitle: 'Type The Whole Shape',
    description: 'Type object state with an interface. Because state is replaced (not merged), spread the previous object when updating one field.',
    code: 'const [form, setForm] = useState<Form>({ name: "", age: 0 });\nsetForm((f) => ({ ...f, name: "S" }));',
  },
  {
    icon: '📤', title: 'Passing Setters', titleClass: 'card-title-lime', subtitle: 'Dispatch Type',
    description: 'To pass a setter to a child, type the prop as React.Dispatch<React.SetStateAction<T>> so the child can update state safely.',
    code: 'interface Props {\n  setCount: React.Dispatch<React.SetStateAction<number>>;\n}',
  },
];

const PRACTICE = [
  {
    icon: '🧠', title: 'Derive, Don’t Store', titleClass: 'card-title-cyan', subtitle: 'One Source Of Truth',
    description: 'Compute values from existing state during render instead of keeping duplicate state in sync. Fewer bugs, and the types stay simple.',
    code: 'const completed = tasks.filter((t) => t.done).length; // derived',
  },
  {
    icon: '🎯', title: 'Narrow Before Use', titleClass: 'card-title-purple', subtitle: 'Nullable State',
    description: 'With User | null state, guard before reading. TypeScript makes the "still loading" branch impossible to forget.',
    code: 'if (!user) return <Spinner />;\nreturn <p>{user.name}</p>;',
  },
  {
    icon: '⚖️', title: 'Keep State Minimal', titleClass: 'card-title-amber', subtitle: 'Less Is Safer',
    description: 'Store the smallest set of independent values; a union often replaces several booleans. Typed, minimal state is easier to reason about.',
    code: '// instead of isLoading + isError + data flags:\n// use one status union + data',
  },
  {
    icon: '🔜', title: 'Next: useEffect & Refs', titleClass: 'card-title-lime', subtitle: 'Day 24 Preview',
    description: 'Tomorrow: typing side effects with useEffect (deps, cleanup) and typed refs with useRef for DOM and mutable values.',
    link: { href: '/day-024', label: 'Go to Day 24 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Typing useState', titleClass: 'card-title-cyan', subtitle: 'react.dev',
    description: 'React’s guide to typing hooks, starting with useState — inference, explicit generics, and the common nullable and union patterns.',
    link: { href: REACT_HOOKS_TS, label: 'Read the hooks TS guide →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'State Types Live',
    description: 'Model union and object state, then set a wrong value to watch the compiler catch it. Union state clicks fast this way.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Typed state is the heart of every interactive component — forms, toggles, and data loading all rely on it.',
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

export default function Day023() {
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
          <Link to="/day-022" className="day001-nav-btn day001-nav-prev">← Day 22</Link>
          <p className="day001-datetime">TypeScript Day 23 · 8 Aug 2026</p>
          <Link to="/day-024" className="day001-nav-btn day001-nav-next">Day 24 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>useState</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 23 <span aria-hidden="true">🔮</span></h1>
              <p className="day001-day-theme">useState & TYPING STATE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '23%' }} /></div>

        <p className="day001-summary">
          Day 23 types component state. <code>useState</code> usually <strong>infers</strong> the type, but I used
          explicit <strong>generics</strong> for empty arrays and nullable values, and literal{' '}
          <strong>unions</strong> to model status machines. I used <strong>functional updates</strong>,{' '}
          <strong>lazy initialization</strong>, typed object/array state, and the{' '}
          <code>Dispatch&lt;SetStateAction&lt;T&gt;&gt;</code> type when passing setters down — plus the habit of{' '}
          <strong>deriving</strong> values instead of duplicating state.
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

        <CardSection icon="🔮" title="TYPING useState" cards={BASICS} columns={3} />
        <CardSection icon="🔁" title="UPDATES & SHAPES" cards={UPDATES} columns={4} />
        <CardSection icon="🧠" title="GOOD PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#React</span><span>#Hooks</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
