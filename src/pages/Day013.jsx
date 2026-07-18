import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_MAPPED = 'https://www.typescriptlang.org/docs/handbook/2/mapped-types.html';
const TS_CONDITIONAL = 'https://www.typescriptlang.org/docs/handbook/2/conditional-types.html';

const LEARNT_TODAY = [
  { title: 'Intersection types', text: '`A & B` combines two types into one that has all members of both' },
  { title: '& vs |', text: '& = "and" (all fields), | = "or" (one of) — opposite tools for combining types' },
  { title: 'Mapped types', text: 'transform every key: `{ [K in keyof T]: ... }` — how Partial & Readonly are built' },
  { title: 'Modifiers', text: 'add or remove ? and readonly with +/- inside a mapped type' },
  { title: 'Key remapping', text: '`as` in a mapped type renames keys — build getters from properties' },
  { title: 'Conditional types', text: '`T extends U ? X : Y` — a type-level if/else' },
  { title: 'infer', text: 'capture a type from within a condition: `T extends Array<infer E> ? E : never`' },
  { title: 'Distributive', text: 'conditionals over a union apply to each member — the basis of Exclude/Extract' },
  { title: 'Template literal types', text: '`` `on${Capitalize<T>}` `` builds string types from other types' },
  { title: 'Read the built-ins', text: 'ReturnType and Awaited are just conditionals with infer' },
];

const COMBINE = [
  {
    icon: '➕', title: 'Intersection Types', titleClass: 'card-title-cyan', subtitle: 'A & B',
    description: 'An intersection merges types — the result must satisfy all of them at once. It’s how you compose small capability types into a bigger, complete one.',
    code: 'type Named = { name: string };\ntype Aged = { age: number };\ntype Person = Named & Aged;\nconst p: Person = { name: "Sumit", age: 26 };',
  },
  {
    icon: '⚖️', title: '& vs |', titleClass: 'card-title-purple', subtitle: 'And vs Or',
    description: 'Intersection (&) demands all members; union (|) allows one of several. They’re complementary — use & to combine shapes, | to represent alternatives.',
    code: 'type Both = Named & Aged;   // has name AND age\ntype Either = Named | Aged; // name OR age',
  },
  {
    icon: '🧩', title: 'Compose Capabilities', titleClass: 'card-title-amber', subtitle: 'Mixins By Intersection',
    description: 'Define tiny capability types (Serializable, Timestamped) and intersect them onto your models — flexible composition without deep inheritance.',
    code: 'type Timestamped = { createdAt: Date };\ntype Post = { title: string } & Timestamped;',
  },
];

const MAPPED = [
  {
    icon: '🗺️', title: 'Mapped Types', titleClass: 'card-title-cyan', subtitle: 'Transform Every Key',
    description: 'A mapped type walks over every key of a type and produces a new one. This is the machinery behind Partial, Readonly, and Record from Day 10.',
    code: 'type MyPartial<T> = {\n  [K in keyof T]?: T[K];\n};',
  },
  {
    icon: '🔒', title: 'Modifiers', titleClass: 'card-title-blue', subtitle: 'Add / Remove ? readonly',
    description: 'Inside a mapped type you can add or strip optionality and readonly with + and -. That’s exactly how Required<T> removes every ?.',
    code: 'type MyReadonly<T> = {\n  readonly [K in keyof T]: T[K];\n};\ntype Mutable<T> = {\n  -readonly [K in keyof T]: T[K];\n};',
  },
  {
    icon: '🏷️', title: 'Key Remapping', titleClass: 'card-title-amber', subtitle: 'as In Mapped Types',
    description: 'Rename keys as you map them with the as clause and template literals — generate a getter type from every property automatically.',
    code: 'type Getters<T> = {\n  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];\n};',
  },
  {
    icon: '🔑', title: 'Indexed Access', titleClass: 'card-title-lime', subtitle: 'T[K] & T[keyof T]',
    description: 'Look up a property’s type with T["name"], or get the union of all value types with T[keyof T] — the basis of type-safe generic access.',
    code: 'type User = { id: number; name: string };\ntype IdType = User["id"];        // number\ntype Values = User[keyof User];  // number | string',
  },
];

const CONDITIONAL = [
  {
    icon: '🔀', title: 'Conditional Types', titleClass: 'card-title-cyan', subtitle: 'Type-Level if/else',
    description: 'Choose a type based on a relationship: T extends U ? X : Y. The type system decides at compile time which branch applies.',
    code: 'type IsString<T> = T extends string ? "yes" : "no";\ntype A = IsString<string>; // "yes"',
  },
  {
    icon: '🕵️', title: 'infer', titleClass: 'card-title-purple', subtitle: 'Extract A Type',
    description: 'infer captures a type from inside a condition — pull the element type out of an array, or the return type out of a function. This is how ReturnType works.',
    code: 'type ElementOf<T> = T extends Array<infer E> ? E : never;\ntype MyReturn<F> = F extends (...a: any[]) => infer R ? R : never;',
  },
  {
    icon: '🧮', title: 'Distributive', titleClass: 'card-title-amber', subtitle: 'Over Unions',
    description: 'A conditional over a naked type parameter distributes across each union member — the mechanism behind Exclude and Extract, with never filtering branches out.',
    code: 'type MyExclude<T, U> = T extends U ? never : T;\ntype R = MyExclude<"a" | "b" | "c", "b">; // "a" | "c"',
  },
  {
    icon: '🔤', title: 'Template Literal Types', titleClass: 'card-title-lime', subtitle: 'Build String Types',
    description: 'Compose new string literal types from existing ones — generate event names or require shapes like `${number}px`. Capitalize/Uppercase transform them.',
    code: 'type Ev<T extends string> = `on${Capitalize<T>}`;\ntype C = Ev<"click">; // "onClick"\ntype Px = `${number}px`;',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Mapped Types', titleClass: 'card-title-cyan', subtitle: 'TS Handbook',
    description: 'The chapter on mapped types — modifiers, key remapping, and how the built-in utility types are constructed.',
    link: { href: TS_MAPPED, label: 'Read Mapped Types →', external: true },
  },
  {
    icon: '📗', title: 'Conditional Types', titleClass: 'card-title-purple', subtitle: 'TS Handbook',
    description: 'The reference on conditional types and infer, plus template literal types — the other half of today’s ground.',
    link: { href: TS_CONDITIONAL, label: 'Read Conditional Types →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Guards & satisfies', titleClass: 'card-title-amber', subtitle: 'Day 14 Preview',
    description: 'Tomorrow: custom type guards, assertion functions, and the satisfies operator — making untrusted data safe.',
    link: { href: '/day-014', label: 'Go to Day 14 →' },
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

export default function Day013() {
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
          <Link to="/day-012" className="day001-nav-btn day001-nav-prev">← Day 12</Link>
          <p className="day001-datetime">TypeScript Day 13 · 5 Aug 2026</p>
          <Link to="/day-014" className="day001-nav-btn day001-nav-next">Day 14 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Advanced Types</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 13 <span aria-hidden="true">🗺️</span></h1>
              <p className="day001-day-theme">ADVANCED TYPES — MAPPED & CONDITIONAL</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '13%' }} /></div>

        <p className="day001-summary">
          Day 13 is type-level programming. I combined shapes with <strong>intersections</strong> (<code>A &amp; B</code>),
          then used <strong>mapped types</strong> to transform every key — adding/removing <code>?</code> and{' '}
          <code>readonly</code>, and <strong>remapping keys</strong> with <code>as</code>. Then{' '}
          <strong>conditional types</strong> (<code>T extends U ? X : Y</code>) with <code>infer</code>, how{' '}
          <strong>distributive</strong> conditionals build <code>Exclude</code>, and{' '}
          <strong>template literal types</strong> for string types. I can now read how <code>Partial</code>,{' '}
          <code>ReturnType</code>, and <code>Awaited</code> are actually built.
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

        <CardSection icon="➕" title="INTERSECTIONS" cards={COMBINE} columns={3} />
        <CardSection icon="🗺️" title="MAPPED TYPES" cards={MAPPED} columns={4} />
        <CardSection icon="🔀" title="CONDITIONAL & TEMPLATE TYPES" cards={CONDITIONAL} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#AdvancedTypes</span><span>#TypeLevel</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
