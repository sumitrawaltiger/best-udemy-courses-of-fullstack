import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_MAPPED = 'https://www.typescriptlang.org/docs/handbook/2/mapped-types.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'Intersection types', text: '`A & B` combines two types into one that has all members of both' },
  { title: 'Intersection vs union', text: '& = "and" (all fields), | = "or" (one of) — opposite tools for combining types' },
  { title: 'Mapped types', text: 'transform every key of a type: `{ [K in keyof T]: ... }` — how Partial & Readonly are built' },
  { title: 'Key remapping', text: '`as` in a mapped type renames keys — build getters like getName from name' },
  { title: 'Modifiers', text: 'add or remove ? and readonly with +/- inside a mapped type' },
  { title: 'keyof + indexed access', text: '`T[keyof T]` is the union of all a type’s value types' },
  { title: 'Build your own utilities', text: 'reimplement Partial<T> and Readonly<T> from scratch with mapped types' },
  { title: 'Composition over inheritance', text: 'intersections let you mix small capability types into a bigger one' },
  { title: 'Records are mapped types', text: 'Record<K, V> is just a mapped type over a key union' },
  { title: 'Homomorphic mapping', text: 'mapping over keyof T preserves optional/readonly automatically' },
];

const INTERSECTIONS = [
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
    icon: '🧩', title: 'Mixins By Composition', titleClass: 'card-title-amber', subtitle: 'Small Capabilities',
    description: 'Define tiny capability types (Serializable, Timestamped) and intersect them onto your models — flexible composition without deep inheritance.',
    code: 'type Timestamped = { createdAt: Date };\ntype Post = { title: string } & Timestamped;',
  },
];

const MAPPED = [
  {
    icon: '🗺️', title: 'Mapped Types', titleClass: 'card-title-cyan', subtitle: 'Transform Every Key',
    description: 'A mapped type walks over every key of a type and produces a new one. This is the machinery behind Partial, Readonly, and Record.',
    code: 'type MyPartial<T> = {\n  [K in keyof T]?: T[K];\n};\ntype U = MyPartial<{ a: number; b: string }>;',
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

const APPLY = [
  {
    icon: '🛠️', title: 'Rebuild Utility Types', titleClass: 'card-title-cyan', subtitle: 'Understand By Building',
    description: 'Reimplement Pick and Record with mapped types and you’ll never be confused by the built-ins again — they’re all just mapped types under the hood.',
    code: 'type MyRecord<K extends string, V> = {\n  [P in K]: V;\n};',
  },
  {
    icon: '🧬', title: 'Homomorphic Mapping', titleClass: 'card-title-purple', subtitle: 'Preserves Modifiers',
    description: 'When you map over keyof T directly, TypeScript keeps each key’s original optional/readonly modifiers — so transformations stay faithful.',
    code: 'type Clone<T> = { [K in keyof T]: T[K] };\n// optional/readonly flags survive',
  },
  {
    icon: '🎯', title: 'Where It Shows Up', titleClass: 'card-title-amber', subtitle: 'Forms, DTOs, State',
    description: 'Partial form drafts, readonly config, key-remapped event maps — mapped and intersection types quietly power the typed patterns you use daily.',
    code: 'type Draft<T> = Partial<Readonly<T>>;',
  },
  {
    icon: '🔜', title: 'Next: Conditional Types', titleClass: 'card-title-lime', subtitle: 'Day 12 Preview',
    description: 'Tomorrow: conditional types (T extends U ? X : Y), infer, and template literal types — the type-level "if" and string building.',
    link: { href: '/day-012', label: 'Go to Day 12 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Mapped Types', titleClass: 'card-title-cyan', subtitle: 'TS Handbook',
    description: 'The handbook chapter on mapped types — modifiers, key remapping, and how the built-in utility types are constructed.',
    link: { href: TS_MAPPED, label: 'Read Mapped Types →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Build A Mapped Type',
    description: 'Write MyPartial and MyReadonly, apply them, and hover the result to confirm they match the built-ins. Type-level programming, hands-on.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Advanced types make libraries and your own helpers feel magical — the foundation for the type-safe patterns used all year.',
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

export default function Day011() {
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
          <Link to="/day-010" className="day001-nav-btn day001-nav-prev">← Day 10</Link>
          <p className="day001-datetime">TypeScript Day 11 · 27 Jul 2026</p>
          <Link to="/day-012" className="day001-nav-btn day001-nav-next">Day 12 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Advanced Types</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 11 <span aria-hidden="true">🗺️</span></h1>
              <p className="day001-day-theme">INTERSECTION & MAPPED TYPES</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '11%' }} /></div>

        <p className="day001-summary">
          Day 11 begins advanced types. I combined shapes with <strong>intersection</strong> types (<code>A &amp; B</code>)
          and contrasted them with unions. Then <strong>mapped types</strong> — transforming every key of a type,
          adding/removing <code>?</code> and <code>readonly</code>, and <strong>remapping keys</strong> with{' '}
          <code>as</code>. I rebuilt <code>Partial</code> and <code>Readonly</code> by hand, which finally
          demystifies how the built-in utility types actually work.
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

        <CardSection icon="➕" title="INTERSECTIONS" cards={INTERSECTIONS} columns={3} />
        <CardSection icon="🗺️" title="MAPPED TYPES" cards={MAPPED} columns={4} />
        <CardSection icon="🛠️" title="APPLYING THEM" cards={APPLY} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#AdvancedTypes</span><span>#WebDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
