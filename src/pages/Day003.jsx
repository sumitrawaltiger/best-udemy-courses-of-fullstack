import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_EVERYDAY = 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';
const EP_IMAGE = '/typescript-notes/ep03-type-system-basics.jpeg';

const LEARNT_TODAY = [
  { title: 'Type annotations', text: 'explicitly define the type of a variable, parameter, or value with a colon' },
  { title: 'Common syntax', text: 'string → text, number → numbers, boolean → true/false, array[] → list, object {} → key:value' },
  { title: 'Type inference', text: 'TypeScript automatically infers the type from the value — no annotation needed' },
  { title: 'string', text: 'represents text: `let city: string = "Kashmir"`' },
  { title: 'number', text: 'whole numbers or decimals — there is no separate int/float' },
  { title: 'boolean', text: 'true or false, nothing else' },
  { title: 'bigint', text: 'very large numbers, written with an n suffix: 99999999999n' },
  { title: 'symbol', text: 'unique & immutable values: Symbol("id")' },
  { title: 'any', text: 'turns off type checking — use carefully (it defeats the point)' },
  { title: 'unknown & never', text: 'unknown = safer any (check first); never = values that never occur' },
];

const ANNOTATE = [
  {
    icon: '🏷️', title: 'Type Annotations', titleClass: 'card-title-cyan', subtitle: 'Be Explicit',
    description:
      'Add a type after a colon to explicitly define what a variable, parameter, or value holds. The compiler then enforces it everywhere.',
    code: 'let name: string = "Faisal";\nlet age: number = 21;\nlet isActive: boolean = true;\nlet scores: number[] = [90, 85, 95];',
  },
  {
    icon: '🔮', title: 'Type Inference', titleClass: 'card-title-purple', subtitle: 'TS Figures It Out',
    description:
      'If you don’t specify the type, TypeScript infers it from the value. You get full checking with none of the typing — literally.',
    code: 'let username = "Fabulous";  // string (inferred)\nlet count = 100;            // number (inferred)\nlet isLoggedIn = false;     // boolean (inferred)',
  },
  {
    icon: '🧭', title: 'When To Use What', titleClass: 'card-title-amber', subtitle: 'The Rule Of Thumb',
    description:
      'Use annotations when you want clarity; lean on inference when it’s obvious. Avoid any if possible, use unknown for safety, and never in special cases.',
    footer: '+ Types are not restrictions, they are superpowers!',
  },
];

const PRIMITIVES = [
  {
    icon: '🔤', title: 'string', titleClass: 'card-title-cyan', subtitle: 'Represents Text',
    description:
      'Any text value — single quotes, double quotes, or template literals. The most common type you’ll annotate.',
    code: 'let city: string = "Kashmir";',
  },
  {
    icon: '🔢', title: 'number', titleClass: 'card-title-blue', subtitle: 'Whole Or Decimal',
    description:
      'One type for all numbers — integers and decimals alike. TypeScript has no separate int or float.',
    code: 'let pi: number = 3.14;',
  },
  {
    icon: '✅', title: 'boolean', titleClass: 'card-title-lime', subtitle: 'True or False',
    description:
      'Exactly two values: true or false. Perfect for flags, toggles, and conditions.',
    code: 'let isDone: boolean = false;',
  },
  {
    icon: '🔣', title: 'bigint & symbol', titleClass: 'card-title-pink', subtitle: 'The Specialists',
    description:
      'bigint holds very large numbers beyond number’s safe range (note the n suffix). symbol creates unique, immutable keys.',
    code: 'let big: bigint = 99999999999n;\nlet id: symbol = Symbol("id");',
  },
];

const SPECIAL = [
  {
    icon: '🌀', title: 'any', titleClass: 'card-title-pink', subtitle: 'Turns Off Checking',
    description:
      'any disables type checking for a value — anything is allowed. It’s an escape hatch that defeats the purpose of TypeScript, so use it carefully.',
    code: 'let data: any = "Hello";\ndata = 25;    // allowed\ndata = true;  // also allowed ⚠️',
  },
  {
    icon: '❓', title: 'unknown', titleClass: 'card-title-cyan', subtitle: 'Safer Alternative To any',
    description:
      'unknown accepts anything but forces you to check the type before using it. All the flexibility of any, none of the danger.',
    code: 'let value: unknown = "Hello";\n// value.toUpperCase(); ❌ Error\nif (typeof value === "string") {\n  console.log(value.toUpperCase()); // ✅\n}',
  },
  {
    icon: '🚫', title: 'never', titleClass: 'card-title-purple', subtitle: 'Values That Never Occur',
    description:
      'never represents something that never happens — used for functions that always throw or never return, like an infinite loop.',
    code: 'function throwError(msg: string): never {\n  throw new Error(msg);\n}\nfunction infiniteLoop(): never {\n  while (true) {}\n}',
  },
  {
    icon: '🔜', title: 'Next: Functions', titleClass: 'card-title-lime', subtitle: 'Day 4 Preview',
    description:
      'Tomorrow is Episode 4 — functions in TypeScript: function types, return types, optional, default, and rest parameters.',
    link: { href: '/day-004', label: 'Go to Day 4 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Everyday Types', titleClass: 'card-title-cyan', subtitle: 'TS Handbook',
    description:
      'The handbook chapter covering exactly today’s ground — annotations, inference, primitives, and the any/unknown distinction.',
    link: { href: TS_EVERYDAY, label: 'Read Everyday Types →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Hover The Types',
    description:
      'Declare variables with and without annotations, then hover them to see what TypeScript inferred. Inference clicks fast this way.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description:
      'These primitives are the atoms every larger type is built from — arrays, objects, interfaces, and generics all rest on them.',
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

export default function Day003() {
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
    <>
      <div className="day001-page">
        <div className="day001-scale-wrap" ref={scaleRef}>
          <header className="day001-topbar">
            <Link to="/" className="day001-nav-btn day001-nav-home">Home</Link>
            <Link to="/day-002" className="day001-nav-btn day001-nav-prev">← Day 2</Link>
            <p className="day001-datetime">TypeScript Day 3</p>
            <Link to="/day-004" className="day001-nav-btn day001-nav-next">Day 4 →</Link>
          </header>

          <div className="day001-hero">
            <div className="day001-hero-left">
              <div className="day001-tags"><span>TypeScript</span><span>Episode 3</span><span>Types</span></div>
              <div className="day001-title-block">
                <h1 className="day001-day-num">DAY 3 <span aria-hidden="true">🏷️</span></h1>
                <p className="day001-day-theme">TYPE SYSTEM BASICS</p>
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

          <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '3%' }} /></div>

          <p className="day001-summary">
            <strong>Episode 3</strong> — the type system itself. I used <strong>type annotations</strong> to
            explicitly declare types, and saw <strong>type inference</strong> fill them in automatically when the
            value makes it obvious. I went through the <strong>primitives</strong> — <code>string</code>,{' '}
            <code>number</code>, <code>boolean</code>, <code>bigint</code>, <code>symbol</code> — then the special
            ones: <code>any</code> (turns off checking, use carefully), <code>unknown</code> (the safe alternative
            that forces a check first), and <code>never</code> (values that never occur).{' '}
            <em>Types are not restrictions, they are superpowers.</em>
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

          <CardSection icon="🏷️" title="ANNOTATIONS & INFERENCE" cards={ANNOTATE} columns={3} />
          <CardSection icon="🧱" title="PRIMITIVE TYPES" cards={PRIMITIVES} columns={4} />
          <CardSection icon="🌀" title="any · unknown · never" cards={SPECIAL} columns={4} />
          <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

          <footer className="day001-hashtags">
            <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Episode3</span><span>#TypeSafety</span><span>#JSLearnHub</span>
          </footer>
        </div>
      </div>

      <section style={{ background: '#0d1117', padding: '8px 16px 56px', display: 'flex', justifyContent: 'center' }}>
        <figure style={{ maxWidth: '860px', width: '100%', margin: 0 }}>
          <h2 style={{ color: '#e6edf3', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 12px', textAlign: 'center' }}>
            <span aria-hidden="true">📌</span> Episode 3 Notes — Type System Basics
          </h2>
          <a href={EP_IMAGE} target="_blank" rel="noopener noreferrer">
            <img
              src={EP_IMAGE}
              alt="TypeScript Series Episode 3 — Type System Basics: type annotations explicitly defining types with common syntax (string for text, number for numbers, boolean for true/false, array[] for list of values, object {} for key value pairs), type inference where TypeScript automatically infers the type from the value, primitive types in TypeScript (string, number, boolean, bigint, symbol) with examples, the any type which turns off type checking, the unknown type as a safer alternative that forces you to check the type first, the never type for values that never occur such as functions that throw errors or never return, and guidance on when to use each"
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px', border: '1px solid #2a3441' }}
            />
          </a>
          <figcaption style={{ color: '#8fb6c2', fontSize: '0.82rem', textAlign: 'center', marginTop: '10px' }}>
            My handwritten Episode 3 notes — annotations, inference, primitives, and any / unknown / never.
            Click to open full size.
          </figcaption>
        </figure>
      </section>
    </>
  );
}
