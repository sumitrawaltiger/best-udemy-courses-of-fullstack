import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_GENERICS = 'https://www.typescriptlang.org/docs/handbook/2/generics.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'Why generics', text: 'write one reusable function/type that works with any type — without losing safety to `any`' },
  { title: 'Generic functions', text: '`function first<T>(arr: T[]): T` keeps the element type flowing from input to output' },
  { title: 'Type parameters', text: '`<T>` is a placeholder the compiler fills in from how you call the function' },
  { title: 'Inference', text: 'you rarely pass `<T>` explicitly — `first([1,2,3])` gives T = number' },
  { title: 'Constraints', text: '`<T extends { length: number }>` limits T to types that have what you use' },
  { title: 'Generic interfaces', text: '`interface Box<T> { value: T }` — reusable containers for any element type' },
  { title: 'Generic classes', text: '`class Stack<T>` — a type-safe stack, queue, or store for any type' },
  { title: 'Default type params', text: '`<T = string>` gives a fallback when the type can’t be inferred' },
  { title: 'keyof', text: '`keyof T` is the union of a type’s keys — the base of type-safe property access' },
  { title: 'Multiple params', text: '`<K, V>` for maps and pairs — several placeholders at once' },
];

const WHY = [
  {
    icon: '♻️', title: 'The Problem', titleClass: 'card-title-cyan', subtitle: 'any Throws Away Types',
    description: 'A function typed with any works for everything but returns any — you lose autocomplete and checks. Generics keep it reusable AND typed.',
    code: 'function firstAny(arr: any[]): any { return arr[0]; }\nconst n = firstAny([1, 2]); // n is any 😞',
  },
  {
    icon: '🧩', title: 'Generic Functions', titleClass: 'card-title-purple', subtitle: 'A Type Placeholder',
    description: 'Introduce a type parameter <T>. It links the input and output, so the element type flows straight through and the result is precisely typed.',
    code: 'function first<T>(arr: T[]): T {\n  return arr[0];\n}\nconst n = first([1, 2]);   // n is number ✅\nconst s = first(["a"]);    // s is string ✅',
  },
  {
    icon: '🔮', title: 'Inference', titleClass: 'card-title-amber', subtitle: 'TS Fills In T',
    description: 'You almost never write <T> at the call site — TypeScript infers it from the argument. Explicit type arguments are there when you need them.',
    code: 'first<number>([1, 2]); // explicit (optional)\nfirst([1, 2]);         // inferred T = number',
  },
];

const POWER = [
  {
    icon: '🔗', title: 'Constraints', titleClass: 'card-title-cyan', subtitle: 'extends',
    description: 'Restrict a type parameter with extends so you can safely use the members you need — like requiring a .length before reading it.',
    code: 'function longest<T extends { length: number }>(a: T, b: T) {\n  return a.length >= b.length ? a : b;\n}\nlongest([1,2], [1,2,3]);',
  },
  {
    icon: '📦', title: 'Generic Interfaces', titleClass: 'card-title-blue', subtitle: 'Reusable Shapes',
    description: 'Parameterize an interface to describe a container of any type — the pattern behind API response wrappers and React component props.',
    code: 'interface ApiResult<T> {\n  data: T;\n  ok: boolean;\n}\nconst r: ApiResult<string[]> = { data: [], ok: true };',
  },
  {
    icon: '🗃️', title: 'Generic Classes', titleClass: 'card-title-amber', subtitle: 'Type-Safe Containers',
    description: 'A generic class builds fully typed data structures once and reuses them for any element type — a Stack<number> and Stack<string> from the same code.',
    code: 'class Stack<T> {\n  private items: T[] = [];\n  push(x: T) { this.items.push(x); }\n  pop() { return this.items.pop(); }\n}',
  },
  {
    icon: '🔑', title: 'keyof & Access', titleClass: 'card-title-lime', subtitle: 'Type-Safe Props',
    description: 'keyof T yields the union of a type’s keys, letting you write a getter that only accepts real property names and returns the exact value type.',
    code: 'function get<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\nget({ a: 1 }, "a"); // number, "b" ❌',
  },
];

const MORE = [
  {
    icon: '🅰️', title: 'Multiple Params', titleClass: 'card-title-cyan', subtitle: '<K, V>',
    description: 'Use several type parameters for pairs and maps. Each is inferred independently, keeping keys and values precisely typed together.',
    code: 'function pair<K, V>(k: K, v: V): [K, V] {\n  return [k, v];\n}\npair("age", 26); // [string, number]',
  },
  {
    icon: '🧯', title: 'Default Params', titleClass: 'card-title-purple', subtitle: '<T = string>',
    description: 'Give a type parameter a default so callers who don’t specify one still get a sensible type instead of unknown.',
    code: 'interface Box<T = string> { value: T; }\nconst b: Box = { value: "hi" }; // T defaults to string',
  },
  {
    icon: '🌐', title: 'Everywhere In Libraries', titleClass: 'card-title-amber', subtitle: 'Array, Promise, Map',
    description: 'Generics aren’t exotic — Array<T>, Promise<T>, and Map<K, V> are all generic. Learning them unlocks the entire typed ecosystem.',
    code: 'const p: Promise<number> = fetchCount();\nconst m: Map<string, number> = new Map();',
  },
  {
    icon: '🔜', title: 'Next: Enums & Narrowing', titleClass: 'card-title-lime', subtitle: 'Day 9 Preview',
    description: 'Tomorrow: enums, type guards, and discriminated unions — how TypeScript narrows a broad type down to a precise one.',
    link: { href: '/day-009', label: 'Go to Day 9 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Generics', titleClass: 'card-title-cyan', subtitle: 'TS Handbook',
    description: 'The reference chapter on generics — type parameters, constraints, generic classes/interfaces, and default parameters.',
    link: { href: TS_GENERICS, label: 'Read the Generics chapter →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Watch T Flow',
    description: 'Call a generic function with different arguments and hover the result to watch TypeScript infer T each time. Generics click fast this way.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Generics power hooks, data fetching, and reusable components in React/Next.js — you’ll use useState<T> and typed fetch all year.',
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

export default function Day008() {
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
          <Link to="/day-007" className="day001-nav-btn day001-nav-prev">← Day 7</Link>
          <p className="day001-datetime">TypeScript Day 8 · 31 Jul 2026</p>
          <Link to="/day-009" className="day001-nav-btn day001-nav-next">Day 9 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Generics</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 8 <span aria-hidden="true">🧩</span></h1>
              <p className="day001-day-theme">GENERICS — REUSABLE TYPE SAFETY</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">TS · TYPESCRIPT</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '8%' }} /></div>

        <p className="day001-summary">
          Day 8 unlocks reuse without losing safety: <strong>generics</strong>. I wrote generic{' '}
          <strong>functions</strong> where the type <code>&lt;T&gt;</code> flows from input to output, added{' '}
          <strong>constraints</strong> with <code>extends</code>, built generic <strong>interfaces</strong> and{' '}
          <strong>classes</strong> (a typed Stack), and used <code>keyof</code> for type-safe property access.
          This is how <code>Array&lt;T&gt;</code>, <code>Promise&lt;T&gt;</code>, and React hooks are typed.
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

        <CardSection icon="♻️" title="WHY GENERICS" cards={WHY} columns={3} />
        <CardSection icon="🔗" title="CONSTRAINTS & CONTAINERS" cards={POWER} columns={4} />
        <CardSection icon="🚀" title="GOING FURTHER" cards={MORE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Generics</span><span>#WebDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
