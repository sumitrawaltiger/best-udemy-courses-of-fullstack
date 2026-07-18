import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_NARROWING = 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'Numeric enums', text: '`enum Dir { Up, Down }` auto-numbers members 0, 1, 2… a named set of constants' },
  { title: 'String enums', text: '`enum Status { Active = "ACTIVE" }` — readable values that survive in compiled JS' },
  { title: 'const enums', text: '`const enum` is inlined at compile time — zero runtime cost' },
  { title: 'Union of literals', text: 'often better than an enum: `type Status = "active" | "done"`' },
  { title: 'Narrowing', text: 'TS shrinks a broad type to a precise one inside a check — no casting needed' },
  { title: 'typeof guards', text: '`if (typeof x === "string")` narrows a union to just the string branch' },
  { title: 'in operator', text: '`if ("wings" in animal)` narrows by which property exists' },
  { title: 'instanceof', text: 'narrow class instances: `if (err instanceof TypeError)`' },
  { title: 'Discriminated unions', text: 'a shared literal "tag" field lets TS pick the exact member' },
  { title: 'Exhaustiveness', text: 'a `never` default in a switch guarantees you handled every case' },
];

const ENUMS = [
  {
    icon: '🔢', title: 'Numeric Enums', titleClass: 'card-title-cyan', subtitle: 'Auto-Numbered Constants',
    description: 'An enum names a group of related constants. Members auto-increment from 0 unless you set values — handy for directions, roles, and states.',
    code: 'enum Direction { Up, Down, Left, Right }\nlet d: Direction = Direction.Up; // 0',
  },
  {
    icon: '🔤', title: 'String Enums', titleClass: 'card-title-purple', subtitle: 'Readable Values',
    description: 'String enums give each member an explicit string value, which stays meaningful in logs, storage, and the compiled JavaScript.',
    code: 'enum Status {\n  Active = "ACTIVE",\n  Done = "DONE",\n}\nlet s = Status.Active; // "ACTIVE"',
  },
  {
    icon: '🎯', title: 'Union of Literals', titleClass: 'card-title-amber', subtitle: 'Often A Better Enum',
    description: 'A union of string literals gives the same "one of these" guarantee with no runtime object generated — many TS teams prefer it over enums.',
    code: 'type Status = "active" | "paused" | "done";\nfunction set(s: Status) { /* ... */ }\nset("active"); set("x"); // ❌',
  },
];

const NARROW = [
  {
    icon: '🔍', title: 'typeof Guards', titleClass: 'card-title-cyan', subtitle: 'Narrow A Union',
    description: 'Inside a typeof check, TypeScript narrows a union to a single type — so you can call string methods only where the value is actually a string.',
    code: 'function fmt(x: string | number) {\n  if (typeof x === "string") return x.trim();\n  return x.toFixed(2);\n}',
  },
  {
    icon: '🏷️', title: 'in Operator', titleClass: 'card-title-blue', subtitle: 'Narrow By Property',
    description: 'The in operator narrows by which property a value has — a lightweight way to tell two object shapes apart without a class.',
    code: 'type Fish = { swim(): void };\ntype Bird = { fly(): void };\nfunction move(a: Fish | Bird) {\n  if ("swim" in a) a.swim(); else a.fly();\n}',
  },
  {
    icon: '🧬', title: 'instanceof', titleClass: 'card-title-amber', subtitle: 'Narrow Class Instances',
    description: 'instanceof narrows to a specific class — invaluable in catch blocks and when handling values that could be one of several class types.',
    code: 'try { risky(); }\ncatch (e) {\n  if (e instanceof TypeError) console.log(e.name);\n}',
  },
  {
    icon: '🛡️', title: 'Type Predicates', titleClass: 'card-title-lime', subtitle: 'Custom Guards',
    description: 'Write your own guard with a `x is T` return type. TypeScript then trusts it to narrow — reusable checks for complex shapes.',
    code: 'function isString(x: unknown): x is string {\n  return typeof x === "string";\n}',
  },
];

const UNIONS = [
  {
    icon: '🎫', title: 'Discriminated Unions', titleClass: 'card-title-cyan', subtitle: 'The Tag Pattern',
    description: 'Give each union member a shared literal "kind" field. Switching on it narrows to the exact member — the go-to pattern for state machines and events.',
    code: 'type Shape =\n  | { kind: "circle"; r: number }\n  | { kind: "square"; s: number };\nfunction area(sh: Shape) {\n  if (sh.kind === "circle") return Math.PI * sh.r ** 2;\n  return sh.s ** 2;\n}',
  },
  {
    icon: '✅', title: 'Exhaustiveness', titleClass: 'card-title-purple', subtitle: 'never Catches Gaps',
    description: 'Assign the leftover value to never in a switch default. If you later add a case and forget to handle it, the compiler errors immediately.',
    code: 'default: {\n  const _exhaustive: never = sh;\n  return _exhaustive;\n}',
  },
  {
    icon: '⚡', title: 'const enum', titleClass: 'card-title-amber', subtitle: 'Zero Runtime Cost',
    description: 'A const enum is erased and its values inlined at compile time — the readability of an enum without shipping an object to the browser.',
    code: 'const enum Log { Info, Warn, Error }\nconsole.log(Log.Warn); // compiles to 1',
  },
  {
    icon: '🔜', title: 'Next: Utility Types', titleClass: 'card-title-lime', subtitle: 'Day 10 Preview',
    description: 'Tomorrow: the built-in utility types — Partial, Required, Readonly, Pick, Omit, and Record — that transform types for you.',
    link: { href: '/day-010', label: 'Go to Day 10 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Narrowing', titleClass: 'card-title-cyan', subtitle: 'TS Handbook',
    description: 'The handbook chapter on narrowing — typeof, in, instanceof, type predicates, and discriminated unions. The heart of today.',
    link: { href: TS_NARROWING, label: 'Read Narrowing →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Watch It Narrow',
    description: 'Write a union, add a guard, and hover the variable inside the branch to see the type shrink. The clearest way to feel narrowing work.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Discriminated unions model reducer actions and API states — you’ll reach for them constantly in React & Next.js.',
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

export default function Day009() {
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
          <Link to="/day-008" className="day001-nav-btn day001-nav-prev">← Day 8</Link>
          <p className="day001-datetime">TypeScript Day 9 · 1 Aug 2026</p>
          <Link to="/day-010" className="day001-nav-btn day001-nav-next">Day 10 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Narrowing</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 9 <span aria-hidden="true">🎫</span></h1>
              <p className="day001-day-theme">ENUMS & TYPE NARROWING</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '9%' }} /></div>

        <p className="day001-summary">
          Day 9 covers named constants and precise types. I learned numeric, string, and{' '}
          <code>const</code> <strong>enums</strong> — and why a <strong>union of literals</strong> is often
          better. Then <strong>narrowing</strong>: <code>typeof</code>, <code>in</code>, <code>instanceof</code>,
          custom <strong>type predicates</strong>, and <strong>discriminated unions</strong> with{' '}
          <code>never</code>-checked exhaustiveness. This is how TypeScript turns a broad type into an exact one.
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

        <CardSection icon="🔢" title="ENUMS & LITERALS" cards={ENUMS} columns={3} />
        <CardSection icon="🔍" title="NARROWING TECHNIQUES" cards={NARROW} columns={4} />
        <CardSection icon="🎫" title="UNIONS & EXHAUSTIVENESS" cards={UNIONS} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Narrowing</span><span>#WebDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
