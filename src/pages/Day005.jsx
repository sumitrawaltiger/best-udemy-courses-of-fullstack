import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_OBJECTS = 'https://www.typescriptlang.org/docs/handbook/2/objects.html';
const TS_ENUMS = 'https://www.typescriptlang.org/docs/handbook/enums.html';

const LEARNT_TODAY = [
  { title: 'Object types', text: 'describe a record inline: { name: string; age: number } checks every field' },
  { title: 'Optional properties', text: 'a ? after a key marks it optional — the object is valid with or without it' },
  { title: 'type aliases', text: 'name a shape once with type User = { … } and reuse it everywhere' },
  { title: 'readonly', text: 'a readonly field can be set at creation but never reassigned afterward' },
  { title: 'Tuples', text: 'a fixed-length array where each position has its own type: [string, number]' },
  { title: 'Enums', text: 'a named set of related constants — Direction.Up reads better than a magic number' },
  { title: 'Union of literals', text: 'often a "up" | "down" union is lighter than an enum for the same job' },
  { title: 'Nested shapes', text: 'object types compose — a field can itself be another object or an array of them' },
];

const OBJECTS = [
  {
    icon: '🧱', title: 'Object Types', titleClass: 'card-title-cyan', subtitle: 'Shape Of A Record',
    description:
      'Describe an object’s fields and their types inline. TypeScript then checks every property — a missing field, a wrong type, or an unexpected key all become compile errors.',
    code: 'let user: { name: string; age: number } = {\n  name: "Sumit",\n  age: 27,\n};\n// missing/extra/wrong field → error',
  },
  {
    icon: '🏷️', title: 'type Aliases', titleClass: 'card-title-purple', subtitle: 'Name It Once',
    description:
      'Give a shape a name with type, then reuse it across variables, params and returns. Add ? for optional fields and readonly for values that must never change after creation.',
    code: 'type User = {\n  readonly id: number;\n  name: string;\n  email?: string;  // optional\n};',
  },
];

const STRUCTURED = [
  {
    icon: '📐', title: 'Tuples', titleClass: 'card-title-cyan', subtitle: 'Fixed-Position Types',
    description:
      'A tuple is an array of fixed length where each slot has its own type. Perfect for pairs like coordinates or the [value, setter] returned by React’s useState.',
    code: 'let point: [number, number] = [10, 20];\nlet entry: [string, number] = ["age", 27];\npoint[0] = "x"; // ❌ must be number',
  },
  {
    icon: '🎚️', title: 'Enums', titleClass: 'card-title-purple', subtitle: 'Named Constants',
    description:
      'An enum groups related constants under readable names, replacing magic numbers or loose strings. Direction.Up is self-documenting and autocompletes.',
    code: 'enum Direction { Up, Down, Left, Right }\nlet d: Direction = Direction.Up;\n// d = 0 under the hood, "Up" in code',
  },
  {
    icon: '⚖️', title: 'Enum vs Union', titleClass: 'card-title-amber', subtitle: 'Pick The Lighter One',
    description:
      'For many cases a union of string literals does the enum’s job with zero runtime cost and simpler output. Reach for an enum when you want a named, iterable set.',
    code: 'type Dir = "up" | "down" | "left" | "right";\nlet d: Dir = "up"; // lighter than an enum\n// enum → when you need a real object',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Object Types', titleClass: 'card-title-cyan', subtitle: 'Handbook',
    description:
      'The handbook chapter on object types, optional & readonly properties, index signatures and type aliases — the backbone of describing real data.',
    link: { href: TS_OBJECTS, label: 'Open Object Types →', external: true },
  },
  {
    icon: '🎚️', title: 'Enums Guide', titleClass: 'card-title-purple', subtitle: 'Handbook',
    description:
      'When enums help, how numeric vs string enums differ, and why a literal union is often the better tool — with the trade-offs spelled out.',
    link: { href: TS_ENUMS, label: 'Open the Enums docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Interfaces', titleClass: 'card-title-amber', subtitle: 'Day 6 Preview',
    description:
      'Tomorrow — interfaces vs type aliases, extending and composing shapes, and how to model the props and data structures React components rely on.',
    link: { href: '/day-006', label: 'Go to Day 6 →' },
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

export default function Day005() {
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
          <Link to="/day-004" className="day001-nav-btn day001-nav-prev">← Day 4</Link>
          <p className="day001-datetime">TypeScript Day 5 · 5 Jan 2027</p>
          <Link to="/day-006" className="day001-nav-btn day001-nav-next">Day 6 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Data Types</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 5 <span aria-hidden="true">🧱</span></h1>
              <p className="day001-day-theme">OBJECTS, TUPLES &amp; ENUMS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '5%' }} /></div>

        <p className="day001-summary">
          Describing real data. An <strong>object type</strong> — <code>{'{ name: string; age: number }'}</code> —
          checks every field of a record; a <strong>?</strong> marks a property optional and{' '}
          <strong>readonly</strong> locks it after creation. Name a shape once with a{' '}
          <strong>type alias</strong> (<code>type User = {'{ … }'}</code>) and reuse it everywhere. A{' '}
          <strong>tuple</strong> like <code>[string, number]</code> is a fixed-length array with a type per position
          (think React’s <code>useState</code>). <strong>Enums</strong> name a set of related constants —
          <code>Direction.Up</code> beats a magic number — though a <strong>literal union</strong> (
          <code>"up" | "down"</code>) is often the lighter choice. <em>Next: interfaces.</em>
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

        <CardSection icon="🧱" title="OBJECTS & ALIASES" cards={OBJECTS} columns={2} />
        <CardSection icon="📐" title="TUPLES & ENUMS" cards={STRUCTURED} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#Enums</span><span>#Tuples</span>
        </footer>
      </div>
    </div>
  );
}
