import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_NARROWING = 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html';
const TS_UTILITY = 'https://www.typescriptlang.org/docs/handbook/utility-types.html';

const LEARNT_TODAY = [
  { title: 'Union types', text: 'A | B means a value is one of several types — the workhorse of flexible APIs' },
  { title: 'Intersection types', text: 'A & B combines shapes — the value must satisfy both at once' },
  { title: 'Narrowing', text: 'typeof, instanceof and truthiness checks let TS refine a union down to one type' },
  { title: 'Type guards', text: 'a function returning "x is Type" teaches the compiler to narrow custom shapes' },
  { title: 'Discriminated unions', text: 'a shared literal field (kind) lets a switch narrow each case cleanly' },
  { title: 'Utility types', text: 'Partial, Required, Pick, Omit, Record reshape existing types without rewriting them' },
  { title: 'keyof & typeof', text: 'derive types from data — keyof gets a type’s keys, typeof lifts a value into a type' },
  { title: 'Never & exhaustiveness', text: 'the never type catches an unhandled case in a switch at compile time' },
];

const COMBINE = [
  {
    icon: '➕', title: 'Unions & Intersections', titleClass: 'card-title-cyan', subtitle: 'OR & AND',
    description:
      'A union (|) says "one of these types"; an intersection (&) says "all of these at once". Together they model flexible inputs and merged shapes without duplication.',
    code: 'type Id = string | number;        // union\ntype Staff = User & { role: string }; // intersection\nlet id: Id = 7; id = "007";',
  },
  {
    icon: '🔎', title: 'Narrowing', titleClass: 'card-title-purple', subtitle: 'Refine A Union',
    description:
      'Inside a branch, TypeScript narrows a union to the exact type using typeof, instanceof or truthiness — so you safely access members that only one variant has.',
    code: 'function len(x: string | string[]) {\n  if (typeof x === "string") return x.length;\n  return x.length; // x is string[] here\n}',
  },
];

const ADVANCED = [
  {
    icon: '🛂', title: 'Type Guards', titleClass: 'card-title-cyan', subtitle: 'Custom Narrowing',
    description:
      'A predicate function typed as "x is Cat" teaches the compiler to narrow your own shapes. Combined with a discriminant field, a switch handles each variant safely.',
    code: 'type Shape =\n  | { kind: "circle"; r: number }\n  | { kind: "square"; s: number };\n// switch (shape.kind) narrows each case',
  },
  {
    icon: '🧰', title: 'Utility Types', titleClass: 'card-title-purple', subtitle: 'Reshape Types',
    description:
      'Built-in helpers transform existing types: Partial makes fields optional, Pick/Omit select fields, Record builds a map. You describe change, not a whole new type.',
    code: 'type User = { id: number; name: string; email: string };\ntype Draft = Partial<User>;      // all optional\ntype Public = Omit<User, "email">;',
  },
  {
    icon: '🔑', title: 'keyof & never', titleClass: 'card-title-amber', subtitle: 'Derive & Guard',
    description:
      'keyof lifts a type’s keys into a union, typeof lifts a value into a type, and assigning to never in a switch’s default makes missed cases a compile error.',
    code: 'type Keys = keyof User; // "id" | "name" | "email"\n// default: const _x: never = shape;\n// → error if a case is unhandled',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Narrowing', titleClass: 'card-title-cyan', subtitle: 'Handbook',
    description:
      'How TypeScript narrows unions — typeof, instanceof, truthiness, equality, custom type guards and discriminated unions, all with examples.',
    link: { href: TS_NARROWING, label: 'Open the Narrowing docs →', external: true },
  },
  {
    icon: '🧰', title: 'Utility Types', titleClass: 'card-title-purple', subtitle: 'Reference',
    description:
      'The full list of built-in utility types — Partial, Required, Readonly, Pick, Omit, Record, ReturnType and more — with what each one does.',
    link: { href: TS_UTILITY, label: 'Open Utility Types →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Generics', titleClass: 'card-title-amber', subtitle: 'Day 8 Preview',
    description:
      'Tomorrow — generics and type assertions: reusable typed functions and containers, plus as, satisfies and the non-null assertion.',
    link: { href: '/day-008', label: 'Go to Day 8 →' },
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

export default function Day007() {
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
          <Link to="/day-006" className="day001-nav-btn day001-nav-prev">← Day 6</Link>
          <p className="day001-datetime">TypeScript Day 7 · 7 Jan 2027</p>
          <Link to="/day-008" className="day001-nav-btn day001-nav-next">Day 8 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Advanced Types</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 7 <span aria-hidden="true">🔎</span></h1>
              <p className="day001-day-theme">ADVANCED TYPES &amp; NARROWING</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '7%' }} /></div>

        <p className="day001-summary">
          Where TypeScript gets expressive. A <strong>union</strong> (<code>A | B</code>) is "one of these"; an{' '}
          <strong>intersection</strong> (<code>A &amp; B</code>) is "all at once". <strong>Narrowing</strong> —{' '}
          <code>typeof</code>, <code>instanceof</code>, truthiness — refines a union inside a branch, and a{' '}
          <strong>type guard</strong> (<code>x is Cat</code>) or a <strong>discriminated union</strong> (a shared{' '}
          <code>kind</code> field) narrows your own shapes in a <code>switch</code>. The <strong>utility types</strong>{' '}
          — <code>Partial</code>, <code>Pick</code>, <code>Omit</code>, <code>Record</code> — reshape existing types
          instead of rewriting them, while <code>keyof</code> and <code>never</code> let you derive types and catch
          unhandled cases. <em>Next: generics.</em>
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

        <CardSection icon="➕" title="UNIONS & NARROWING" cards={COMBINE} columns={2} />
        <CardSection icon="🧰" title="GUARDS & UTILITIES" cards={ADVANCED} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#Narrowing</span><span>#UtilityTypes</span>
        </footer>
      </div>
    </div>
  );
}
