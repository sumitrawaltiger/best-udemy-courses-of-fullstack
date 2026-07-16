import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_CONDITIONAL = 'https://www.typescriptlang.org/docs/handbook/2/conditional-types.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'Conditional types', text: '`T extends U ? X : Y` — a type-level if/else that picks a type from a condition' },
  { title: 'infer', text: 'capture a type from within a condition: `T extends Array<infer E> ? E : never`' },
  { title: 'Distributive conditionals', text: 'conditionals over a union apply to each member — the basis of Exclude/Extract' },
  { title: 'Exclude & Extract', text: 'built-ins made from conditionals — filter members in or out of a union' },
  { title: 'Template literal types', text: '`type Ev = `on${Capitalize<T>}`` builds string types from other types' },
  { title: 'String helpers', text: 'Uppercase, Lowercase, Capitalize, Uncapitalize transform literal strings in types' },
  { title: 'Pattern types', text: 'template literals model shapes like `${string}px` or route params' },
  { title: 'Awaited<T>', text: 'unwraps the value type inside a Promise — built with recursive conditionals' },
  { title: 'ReturnType internals', text: 'ReturnType is a conditional with infer — you can now read how it works' },
  { title: 'never as a filter', text: 'a conditional resolving to never drops that branch — key to filtering unions' },
];

const CONDITIONAL = [
  {
    icon: '🔀', title: 'Conditional Types', titleClass: 'card-title-cyan', subtitle: 'Type-Level if/else',
    description: 'Choose a type based on a relationship: T extends U ? X : Y. The type system decides at compile time which branch applies.',
    code: 'type IsString<T> = T extends string ? "yes" : "no";\ntype A = IsString<string>; // "yes"\ntype B = IsString<number>; // "no"',
  },
  {
    icon: '🕵️', title: 'infer', titleClass: 'card-title-purple', subtitle: 'Extract A Type',
    description: 'infer captures a type from inside a condition — pull the element type out of an array, or the return type out of a function.',
    code: 'type ElementOf<T> = T extends Array<infer E> ? E : never;\ntype N = ElementOf<number[]>; // number',
  },
  {
    icon: '🧮', title: 'Distributive', titleClass: 'card-title-amber', subtitle: 'Over Unions',
    description: 'A conditional over a naked type parameter distributes across each union member — the mechanism behind Exclude and Extract.',
    code: 'type MyExclude<T, U> = T extends U ? never : T;\ntype R = MyExclude<"a" | "b" | "c", "b">; // "a" | "c"',
  },
];

const TEMPLATE = [
  {
    icon: '🔤', title: 'Template Literal Types', titleClass: 'card-title-cyan', subtitle: 'Build String Types',
    description: 'Compose new string literal types from existing ones with backtick syntax — generate event names, CSS values, or route strings in the type system.',
    code: 'type Color = "red" | "blue";\ntype ClassName = `text-${Color}`;\n// "text-red" | "text-blue"',
  },
  {
    icon: '🔠', title: 'String Utilities', titleClass: 'card-title-blue', subtitle: 'Uppercase & Friends',
    description: 'Uppercase, Lowercase, Capitalize, and Uncapitalize transform literal strings inside types — perfect for deriving getter or handler names.',
    code: 'type Ev<T extends string> = `on${Capitalize<T>}`;\ntype C = Ev<"click">; // "onClick"',
  },
  {
    icon: '🧩', title: 'Pattern Types', titleClass: 'card-title-amber', subtitle: 'Model String Shapes',
    description: 'Template literals can require a shape like `${number}px` or a route with params — the compiler then rejects malformed strings.',
    code: 'type Px = `${number}px`;\nlet w: Px = "12px"; // ✅\nlet x: Px = "12em"; // ❌',
  },
  {
    icon: '⏳', title: 'Awaited<T>', titleClass: 'card-title-lime', subtitle: 'Unwrap A Promise',
    description: 'Awaited recursively unwraps nested Promises to their resolved value type — a real-world conditional+infer utility you’ll use with async code.',
    code: 'type R = Awaited<Promise<string>>; // string',
  },
];

const APPLY = [
  {
    icon: '🔎', title: 'Read The Built-ins', titleClass: 'card-title-cyan', subtitle: 'ReturnType, Parameters',
    description: 'ReturnType<F> = F extends (...a: any) => infer R ? R : never. Conditionals + infer are how nearly every "read a type" utility is written.',
    code: 'type MyReturn<F> = F extends (...a: any[]) => infer R ? R : never;',
  },
  {
    icon: '🧯', title: 'never As A Filter', titleClass: 'card-title-purple', subtitle: 'Drop Branches',
    description: 'When a distributive conditional yields never for some members, those members vanish from the resulting union — the trick behind filtering types.',
    code: 'type NonNull<T> = T extends null | undefined ? never : T;',
  },
  {
    icon: '🎯', title: 'Where It Shows Up', titleClass: 'card-title-amber', subtitle: 'Libraries & APIs',
    description: 'Typed routers, form libraries, and ORMs use conditional and template types to give you exact autocomplete for strings and shapes.',
    code: 'type Route = `/users/${string}`;',
  },
  {
    icon: '🔜', title: 'Next: Guards & satisfies', titleClass: 'card-title-lime', subtitle: 'Day 13 Preview',
    description: 'Tomorrow: assertion functions (asserts), custom type guards in depth, and the satisfies operator for validated-yet-inferred values.',
    link: { href: '/day-013', label: 'Go to Day 13 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Conditional Types', titleClass: 'card-title-cyan', subtitle: 'TS Handbook',
    description: 'The reference on conditional types and infer, plus the template literal types chapter — everything from today in detail.',
    link: { href: TS_CONDITIONAL, label: 'Read Conditional Types →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Type-Level Coding',
    description: 'Write a conditional with infer and watch it resolve as you change the input. This is where advanced types finally feel concrete.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'You won’t write these daily, but reading them unlocks powerful libraries and lets you build precise, self-documenting APIs.',
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

export default function Day012() {
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
          <Link to="/day-011" className="day001-nav-btn day001-nav-prev">← Day 11</Link>
          <p className="day001-datetime">TypeScript Day 12 · 28 Jul 2026</p>
          <Link to="/day-013" className="day001-nav-btn day001-nav-next">Day 13 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Type-Level</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 12 <span aria-hidden="true">🔀</span></h1>
              <p className="day001-day-theme">CONDITIONAL & TEMPLATE LITERAL TYPES</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '12%' }} /></div>

        <p className="day001-summary">
          Day 12 is type-level programming. I learned <strong>conditional types</strong> (<code>T extends U ? X : Y</code>),
          used <code>infer</code> to extract types, and saw how <strong>distributive</strong> conditionals build{' '}
          <code>Exclude</code>/<code>Extract</code>. Then <strong>template literal types</strong> to construct string
          types with <code>Capitalize</code> and pattern shapes like <code>{'`${number}px`'}</code>. I can now read
          how <code>ReturnType</code> and <code>Awaited</code> are actually built.
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

        <CardSection icon="🔀" title="CONDITIONAL TYPES" cards={CONDITIONAL} columns={3} />
        <CardSection icon="🔤" title="TEMPLATE LITERAL TYPES" cards={TEMPLATE} columns={4} />
        <CardSection icon="🛠️" title="APPLYING THEM" cards={APPLY} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#TypeLevel</span><span>#WebDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
