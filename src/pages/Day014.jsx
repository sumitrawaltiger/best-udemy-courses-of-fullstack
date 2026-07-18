import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_RELEASE = 'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'Custom type guards', text: 'a function returning `x is T` teaches TS how to narrow your own shapes' },
  { title: 'Assertion functions', text: '`asserts x is T` throws if wrong and narrows for the rest of the scope' },
  { title: 'asserts condition', text: '`function assert(c): asserts c` narrows after a runtime check' },
  { title: 'satisfies operator', text: 'check a value against a type WITHOUT widening it — keep the precise type' },
  { title: 'as const', text: 'freeze a literal into its narrowest readonly type — great with satisfies' },
  { title: 'Guard reuse', text: 'name guards once (isUser, isError) and reuse across the codebase' },
  { title: 'unknown at the boundary', text: 'accept unknown from JSON/APIs, then guard it into a safe type' },
  { title: 'Guard vs assertion', text: 'a guard returns boolean to branch; an assertion throws to guarantee' },
  { title: 'Retire risky casts', text: 'guards & satisfies replace most `as` casts with checked narrowing' },
  { title: 'satisfies vs :', text: 'an annotation widens the value; satisfies checks but keeps it precise' },
];

const GUARDS = [
  {
    icon: '🛡️', title: 'Custom Type Guards', titleClass: 'card-title-cyan', subtitle: 'x is T',
    description: 'A predicate function with an `is` return type tells TypeScript how to narrow a value. Reuse it anywhere you need to prove a shape at runtime.',
    code: 'function isUser(v: unknown): v is { name: string } {\n  return typeof v === "object" && v !== null && "name" in v;\n}\nif (isUser(data)) data.name; // ✅ narrowed',
  },
  {
    icon: '🧯', title: 'Assertion Functions', titleClass: 'card-title-purple', subtitle: 'asserts x is T',
    description: 'An assertion function throws when the check fails and narrows the value afterward — a typed invariant() that guarantees the shape from that point on.',
    code: 'function assertUser(v: unknown): asserts v is { name: string } {\n  if (!isUser(v)) throw new Error("not a user");\n}\nassertUser(data);\ndata.name; // ✅ narrowed after the call',
  },
  {
    icon: '❗', title: 'asserts condition', titleClass: 'card-title-amber', subtitle: 'Runtime Invariants',
    description: 'A plain `asserts c` narrows based on a boolean condition — after assert(x !== null), TypeScript knows x is non-null for the rest of the block.',
    code: 'function assert(c: unknown): asserts c {\n  if (!c) throw new Error("assertion failed");\n}\nassert(user);\nuser.name; // user is non-null here',
  },
];

const SATISFIES = [
  {
    icon: '✅', title: 'satisfies', titleClass: 'card-title-cyan', subtitle: 'Check Without Widening',
    description: 'satisfies validates a value against a type but keeps the precise inferred type — you get error-checking AND exact autocomplete, unlike a plain annotation.',
    code: 'const config = {\n  port: 3000,\n  host: "localhost",\n} satisfies Record<string, string | number>;\nconfig.port.toFixed(); // still number ✅',
  },
  {
    icon: '🧊', title: 'as const', titleClass: 'card-title-blue', subtitle: 'Narrowest Literal',
    description: 'as const makes a value deeply readonly and infers the tightest literal types — the perfect partner for satisfies and for building typed constant maps.',
    code: 'const ROUTES = ["/", "/about"] as const;\ntype Route = typeof ROUTES[number]; // "/" | "/about"',
  },
  {
    icon: '🆚', title: 'satisfies vs :', titleClass: 'card-title-amber', subtitle: 'Why It’s Better',
    description: 'A `: Type` annotation widens the value to that type. satisfies checks conformance but leaves the value at its precise inferred type — best of both worlds.',
    code: 'const a: Record<string, number> = { x: 1 }; // keys widened\nconst b = { x: 1 } satisfies Record<string, number>; // keys kept',
  },
  {
    icon: '🌐', title: 'unknown At Boundaries', titleClass: 'card-title-lime', subtitle: 'Guard External Data',
    description: 'Type API and JSON input as unknown, then guard it into a real type. This is the safe pattern for everything that crosses your app’s edge.',
    code: 'const raw: unknown = await res.json();\nif (isUser(raw)) use(raw);',
  },
];

const APPLY = [
  {
    icon: '♻️', title: 'Reusable Guards', titleClass: 'card-title-cyan', subtitle: 'A Small Library',
    description: 'Collect guards like isString, isUser, and isApiError in one module. They become the trusted gates through which untyped data becomes typed.',
    code: 'export const isError = (e: unknown): e is Error =>\n  e instanceof Error;',
  },
  {
    icon: '🎯', title: 'Retire Risky Casts', titleClass: 'card-title-purple', subtitle: 'Guards Over as',
    description: 'Most `as` casts hide potential bugs. Replacing them with guards or satisfies keeps the checking on — safer code with the same convenience.',
    code: '// risky:  const u = data as User;\n// safe:   if (isUser(data)) { const u = data; }',
  },
  {
    icon: '🔗', title: 'Guards + Unions', titleClass: 'card-title-amber', subtitle: 'Bullet-Proof Handling',
    description: 'Pair guards with the discriminated unions from Day 9 to handle every variant of a value safely — and let never catch any case you forget.',
    code: 'if (isCircle(shape)) return area(shape);',
  },
  {
    icon: '🔜', title: 'Next: Async & fetch', titleClass: 'card-title-lime', subtitle: 'Day 15 Preview',
    description: 'Tomorrow: async TypeScript — Promises, await, and a typed fetch wrapper so API data is safe from the first line.',
    link: { href: '/day-015', label: 'Go to Day 15 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'satisfies (4.9)', titleClass: 'card-title-cyan', subtitle: 'Release Notes',
    description: 'The satisfies operator’s introduction, with the exact examples that show why it beats a plain annotation for config objects.',
    link: { href: TS_RELEASE, label: 'Read the 4.9 notes →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Guard It Live',
    description: 'Write a guard, feed it unknown data, and watch the type narrow inside the if. Then compare `: Type` vs satisfies on the same object.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Guards and satisfies are how real apps stay safe at the edges — API responses, forms, and config. You’ll use them all year.',
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

export default function Day014() {
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
          <Link to="/day-013" className="day001-nav-btn day001-nav-prev">← Day 13</Link>
          <p className="day001-datetime">TypeScript Day 14</p>
          <Link to="/day-015" className="day001-nav-btn day001-nav-next">Day 15 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Guards</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 14 <span aria-hidden="true">🛡️</span></h1>
              <p className="day001-day-theme">GUARDS, ASSERTIONS & satisfies</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '14%' }} /></div>

        <p className="day001-summary">
          Day 14 makes untyped data safe. I wrote custom <strong>type guards</strong> (<code>x is T</code>) and{' '}
          <strong>assertion functions</strong> (<code>asserts x is T</code>) to narrow my own shapes, and used{' '}
          the <strong>satisfies</strong> operator with <code>as const</code> to validate values without losing their
          precise inferred types. Together these replace most risky <code>as</code> casts — the safe way to turn{' '}
          <code>unknown</code> API and JSON data into trustworthy types.
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

        <CardSection icon="🛡️" title="GUARDS & ASSERTIONS" cards={GUARDS} columns={3} />
        <CardSection icon="✅" title="satisfies & as const" cards={SATISFIES} columns={4} />
        <CardSection icon="🛠️" title="APPLYING THEM" cards={APPLY} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#TypeGuards</span><span>#WebDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
