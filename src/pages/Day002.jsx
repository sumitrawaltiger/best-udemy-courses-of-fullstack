import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_EVERYDAY = 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  {
    title: 'Arrays',
    text: 'type a list with `number[]` or `Array<number>` — every element is checked, push the wrong type and TS complains',
  },
  {
    title: 'Tuples',
    text: 'a fixed-length array with a type per position: `[string, number]` — great for pairs like [name, age]',
  },
  {
    title: 'Object types',
    text: 'describe shape inline: `{ name: string; age: number }` — optional fields use a `?`',
  },
  {
    title: 'any vs unknown',
    text: 'any turns off checking (avoid it); unknown is the safe version — you must narrow it before use',
  },
  {
    title: 'union types',
    text: '`string | number` means "either type" — the foundation of modelling real-world data',
  },
  {
    title: 'literal types',
    text: 'a value can be a specific literal: `let dir: "left" | "right"` — only those exact strings are allowed',
  },
  {
    title: 'type aliases',
    text: '`type ID = string | number` names a type so you can reuse it everywhere',
  },
  {
    title: 'void & never',
    text: 'void = returns nothing; never = never returns (throws or loops forever)',
  },
  {
    title: 'null & undefined',
    text: 'with strictNullChecks they are their own types — you handle "missing" on purpose',
  },
  {
    title: 'type assertions',
    text: '`value as string` tells TS "trust me, I know the type" — use sparingly and only when you truly know',
  },
];

const COLLECTIONS = [
  {
    icon: '📚',
    title: 'Arrays',
    titleClass: 'card-title-cyan',
    subtitle: 'Typed Lists',
    description:
      'Declare an array of one element type. TypeScript checks every item you add, so a list of numbers can never accidentally hold a string.',
    code: 'let scores: number[] = [90, 85, 100];\nlet names: Array<string> = ["A", "B"];\nscores.push("x"); // ❌ not a number',
  },
  {
    icon: '📦',
    title: 'Tuples',
    titleClass: 'card-title-purple',
    subtitle: 'Fixed-Length, Typed Positions',
    description:
      'A tuple fixes both the length and the type at each index — perfect for a coordinate or a [key, value] pair returned from a function.',
    code: 'let user: [string, number] = ["Sumit", 26];\nlet point: [number, number] = [10, 20];\nuser = [26, "Sumit"]; // ❌ wrong order',
  },
  {
    icon: '🧩',
    title: 'Object Types',
    titleClass: 'card-title-amber',
    subtitle: 'Describe The Shape',
    description:
      'Annotate an object with the fields it must have. A ? marks an optional property. Tomorrow’s interfaces give these shapes a reusable name.',
    code: 'let dev: { name: string; age?: number };\ndev = { name: "Sumit" };      // ok, age optional\ndev = { age: 26 };            // ❌ name missing',
  },
];

const FLEXIBLE = [
  {
    icon: '🌀',
    title: 'any',
    titleClass: 'card-title-pink',
    subtitle: 'The Escape Hatch',
    description:
      'any opts a value out of type checking entirely. It’s occasionally useful when migrating JS, but it defeats the purpose of TypeScript — reach for unknown instead.',
    code: 'let data: any = 42;\ndata.toUpperCase(); // no error, may crash at runtime',
  },
  {
    icon: '❓',
    title: 'unknown',
    titleClass: 'card-title-cyan',
    subtitle: 'Safe any',
    description:
      'unknown accepts anything but forbids using it until you narrow it. It forces you to prove the type before you touch the value — safety without lying.',
    code: 'let val: unknown = getInput();\nif (typeof val === "string") {\n  val.toUpperCase(); // ✅ narrowed to string\n}',
  },
  {
    icon: '🔀',
    title: 'Union Types',
    titleClass: 'card-title-blue',
    subtitle: '"Either / Or"',
    description:
      'A union lets a value be one of several types. You narrow it with typeof or a check, and TypeScript tracks which branch you’re in.',
    code: 'let id: string | number;\nid = 101;      // ok\nid = "A-101";  // ok\nid = true;     // ❌',
  },
  {
    icon: '🎯',
    title: 'Literal Types',
    titleClass: 'card-title-lime',
    subtitle: 'Exact Values',
    description:
      'Constrain a value to specific literals. Combined with unions, this models real options — like a status that can only be a known set of strings.',
    code: 'let status: "active" | "paused" | "done";\nstatus = "active"; // ✅\nstatus = "old";    // ❌',
  },
];

const NAMING = [
  {
    icon: '🏷️',
    title: 'Type Aliases',
    titleClass: 'card-title-cyan',
    subtitle: 'Name Any Type',
    description:
      'type gives a name to any type — a union, an object shape, a tuple. Reuse it everywhere and change it in one place.',
    code: 'type ID = string | number;\ntype Point = { x: number; y: number };\nlet a: ID = 7;\nlet p: Point = { x: 1, y: 2 };',
  },
  {
    icon: '🕳️',
    title: 'void & never',
    titleClass: 'card-title-purple',
    subtitle: 'Nothing & Impossible',
    description:
      'void is the return type of a function that returns nothing. never is for functions that never return — they throw or loop forever.',
    code: 'function log(msg: string): void {\n  console.log(msg);\n}\nfunction fail(m: string): never {\n  throw new Error(m);\n}',
  },
  {
    icon: '🚧',
    title: 'null & undefined',
    titleClass: 'card-title-amber',
    subtitle: 'Handled On Purpose',
    description:
      'With strictNullChecks, null and undefined are distinct types you must account for — usually via a union — so "cannot read property of undefined" disappears.',
    code: 'let name: string | null = null;\nname = "Sumit";\nlet n = name?.toUpperCase(); // safe access',
  },
  {
    icon: '👉',
    title: 'Type Assertions',
    titleClass: 'card-title-lime',
    subtitle: '"Trust Me"',
    description:
      'When you know more than the compiler (e.g. a DOM element), assert the type with as. Use it rarely — a wrong assertion silences a real error.',
    code: 'const el = document.getElementById("app") as HTMLDivElement;\nel.innerText = "Hi";',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'Everyday Types',
    titleClass: 'card-title-cyan',
    subtitle: 'TS Handbook',
    description:
      'The handbook chapter that covers exactly today’s ground — arrays, objects, unions, literals, and the any/unknown distinction.',
    link: { href: TS_EVERYDAY, label: 'Read Everyday Types →', external: true },
  },
  {
    icon: '🎮',
    title: 'TS Playground',
    titleClass: 'card-title-purple',
    subtitle: 'Test Every Snippet',
    description:
      'Paste any example from today and hover the variables to see their inferred types. The fastest feedback loop for learning the type system.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🔜',
    title: 'Next: Functions',
    titleClass: 'card-title-amber',
    subtitle: 'Day 3 Preview',
    description:
      'Tomorrow we type function parameters and return values, optional and default params, rest args, and function types.',
    link: { href: '/day-003', label: 'Go to Day 3 →' },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">
        {card.icon}
      </span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a
            href={card.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="day001-card-link"
          >
            {card.link.label}
          </a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">
            {card.link.label}
          </Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title">
        <span aria-hidden="true">{icon}</span> {title}
      </h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (
          <TopicCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

export default function Day002() {
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
      const scale = Math.min(
        (window.innerHeight - pad) / wrap.scrollHeight,
        (window.innerWidth - pad) / wrap.scrollWidth,
      );

      wrap.style.transform = `scale(${scale})`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
    };

    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);

    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) {
      avatar.addEventListener('load', fitToScreen);
    }

    return () => {
      window.removeEventListener('resize', fitToScreen);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
      <header className="day001-topbar">
        <Link to="/" className="day001-nav-btn day001-nav-home">
          Home
        </Link>
        <Link to="/day-001" className="day001-nav-btn day001-nav-prev">
          ← Day 1
        </Link>
        <p className="day001-datetime">TypeScript Day 2 · 18 Jul 2026</p>
        <Link to="/day-003" className="day001-nav-btn day001-nav-next">
          Day 3 →
        </Link>
      </header>

      <div className="day001-hero">
        <div className="day001-hero-left">
          <div className="day001-tags">
            <span>TypeScript</span>
            <span>Year 1</span>
            <span>Types</span>
          </div>
          <div className="day001-title-block">
            <h1 className="day001-day-num">
              DAY 2 <span aria-hidden="true">🧱</span>
            </h1>
            <p className="day001-day-theme">BASIC TYPES — ARRAYS, UNIONS & MORE</p>
          </div>
        </div>
        <div className="day001-profile">
          <img
            src="/sumit-profile.png"
            alt="Sumit Rawal"
            className="day001-avatar"
            width={48}
            height={48}
          />
          <div>
            <p className="day001-profile-name">Sumit Rawal</p>
            <p className="day001-profile-role">TS · TYPESCRIPT</p>
          </div>
        </div>
      </div>

      <div className="day001-progress-wrap">
        <div className="day001-progress-bar" style={{ width: '2%' }} />
      </div>

      <p className="day001-summary">
        Day 2 goes past the primitives into the types you use every day. I learned to type{' '}
        <strong>arrays</strong> and <strong>tuples</strong>, describe <strong>object shapes</strong> inline, and
        model real data with <strong>union</strong> and <strong>literal</strong> types. I saw why{' '}
        <code>unknown</code> is the safe cousin of <code>any</code>, named reusable types with{' '}
        <code>type</code> aliases, and met <code>void</code>, <code>never</code>, and safe{' '}
        <code>null</code> handling. This is the vocabulary the rest of TypeScript is built on.
      </p>

      <section className="day001-learnt">
        <h2 className="day001-learnt-title">
          <span className="day001-learnt-line" aria-hidden="true" />
          WHAT I LEARNED TODAY
        </h2>
        <ul className="day001-learnt-list">
          {LEARNT_TODAY.map((item) => (
            <li key={item.title}>
              <span className="day001-check" aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>{item.title}</strong> — {item.text}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <CardSection icon="📚" title="COLLECTIONS & OBJECTS" cards={COLLECTIONS} columns={3} />
      <CardSection icon="🔀" title="FLEXIBLE TYPES" cards={FLEXIBLE} columns={4} />
      <CardSection icon="🏷️" title="NAMING & SPECIAL TYPES" cards={NAMING} columns={4} />
      <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

      <footer className="day001-hashtags">
        <span>#100DaysOfCode</span>
        <span>#TypeScript</span>
        <span>#TypeSafety</span>
        <span>#WebDev</span>
        <span>#JSLearnHub</span>
      </footer>
      </div>
    </div>
  );
}
