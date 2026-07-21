import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_GENERICS = 'https://www.typescriptlang.org/docs/handbook/2/generics.html';
const TS_ASSERTIONS = 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions';

const LEARNT_TODAY = [
  { title: 'Generics = type parameters', text: 'a function or type takes a type as an argument: function first<T>(a: T[]): T' },
  { title: 'Reusable & safe', text: 'one generic replaces many copies while keeping full type safety — no any needed' },
  { title: 'Inference', text: 'you rarely pass the type explicitly; TS infers T from the arguments you call with' },
  { title: 'Constraints', text: '<T extends { id: number }> limits T so you can safely use its known members' },
  { title: 'Generic interfaces', text: 'containers like Box<T> or an API Result<T> reuse one shape for any payload' },
  { title: 'as — type assertion', text: 'tell the compiler "trust me, this is T" when you know more than it does' },
  { title: 'satisfies', text: 'checks a value against a type without widening it — the modern, safer alternative to as' },
  { title: 'Non-null !', text: 'value! asserts something isn’t null/undefined — use sparingly and only when certain' },
];

const GENERICS = [
  {
    icon: '🧩', title: 'Generic Functions', titleClass: 'card-title-cyan', subtitle: 'Type Parameters',
    description:
      'A generic captures the caller’s type in a parameter T and threads it through. One function works for any type while staying fully checked — the alternative to sprinkling any.',
    code: 'function first<T>(arr: T[]): T {\n  return arr[0];\n}\nfirst([1, 2, 3]);   // T = number\nfirst(["a", "b"]);  // T = string',
  },
  {
    icon: '🔒', title: 'Constraints', titleClass: 'card-title-purple', subtitle: 'extends',
    description:
      'Constrain a type parameter with extends so you can rely on certain members. And generic interfaces (Box<T>, Result<T>) reuse one shape for any payload type.',
    code: 'function byId<T extends { id: number }>(x: T) {\n  return x.id;         // .id is guaranteed\n}\ninterface Box<T> { value: T }',
  },
];

const ASSERT = [
  {
    icon: '👉', title: 'as — Assertions', titleClass: 'card-title-cyan', subtitle: 'Trust Me',
    description:
      'A type assertion overrides the compiler when you know a value’s type better than it does — e.g. a DOM lookup. It changes nothing at runtime; it only silences the checker, so use it carefully.',
    code: 'const el = document.getElementById("app") as HTMLDivElement;\nconst n = "42" as unknown as number; // double-assert: a code smell',
  },
  {
    icon: '✅', title: 'satisfies', titleClass: 'card-title-purple', subtitle: 'Check, Don’t Widen',
    description:
      'satisfies verifies a value matches a type while keeping its precise inferred type. It catches mistakes as, and gives you the exact type as doesn’t — the modern default.',
    code: 'const routes = {\n  home: "/", about: "/about",\n} satisfies Record<string, string>;\n// routes.home is "/" — not just string',
  },
  {
    icon: '❗', title: 'Non-null !', titleClass: 'card-title-amber', subtitle: 'Not Null Here',
    description:
      'The postfix ! asserts a value isn’t null or undefined, letting you skip a check. Powerful but risky — if you’re wrong it crashes at runtime, so prefer real narrowing where you can.',
    code: 'const input = document.querySelector("input")!;\ninput.value = "hi"; // ! says: not null\n// better: if (input) input.value = "hi";',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Generics', titleClass: 'card-title-cyan', subtitle: 'Handbook',
    description:
      'The full generics chapter — generic functions, interfaces and classes, constraints, default type parameters and using type parameters in constraints.',
    link: { href: TS_GENERICS, label: 'Open the Generics docs →', external: true },
  },
  {
    icon: '👉', title: 'Type Assertions', titleClass: 'card-title-purple', subtitle: 'Handbook',
    description:
      'When and how to assert types safely with as, plus the modern satisfies operator and the non-null assertion — and when not to reach for them.',
    link: { href: TS_ASSERTIONS, label: 'Open the Assertions docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Classes & OOP', titleClass: 'card-title-amber', subtitle: 'Day 9 Preview',
    description:
      'The TypeScript stack continues — classes, access modifiers and OOP, then on toward tooling and the React/Next.js chapter of Year 1.',
    link: { href: '/day-009', label: 'Go to Day 9 →' },
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
          <p className="day001-datetime">TypeScript Day 8</p>
          <Link to="/day-009" className="day001-nav-btn day001-nav-next">Day 9 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Generics</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 8 <span aria-hidden="true">🧩</span></h1>
              <p className="day001-day-theme">GENERICS &amp; TYPE ASSERTIONS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '8%' }} /></div>

        <p className="day001-summary">
          The reuse tools. <strong>Generics</strong> let a function or type take a <em>type parameter</em> —{' '}
          <code>function first&lt;T&gt;(a: T[]): T</code> works for any array while staying fully typed, and TS{' '}
          <strong>infers</strong> T from the call. <strong>Constraints</strong> (<code>T extends {'{ id: number }'}</code>)
          let you rely on known members, and generic interfaces like <code>Box&lt;T&gt;</code> reuse one shape for any
          payload. On the escape-hatch side, <strong>as</strong> asserts a type when you know more than the compiler,{' '}
          <strong>satisfies</strong> checks a value without widening it (the safer modern default), and the non-null{' '}
          <code>!</code> says "not null here" — powerful, but use it sparingly. <em>That completes the TypeScript
          foundations.</em>
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

        <CardSection icon="🧩" title="GENERICS" cards={GENERICS} columns={2} />
        <CardSection icon="👉" title="ASSERTIONS" cards={ASSERT} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#Generics</span><span>#satisfies</span>
        </footer>
      </div>
    </div>
  );
}
