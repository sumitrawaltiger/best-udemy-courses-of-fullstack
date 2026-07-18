import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_FUNCTIONS = 'https://www.typescriptlang.org/docs/handbook/2/functions.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';
const EP_IMAGE = '/typescript-notes/ep04-functions-in-typescript.jpeg';

const LEARNT_TODAY = [
  { title: 'Function types', text: 'specify the types of parameters and the return value of a function' },
  { title: 'The syntax', text: '( ) → parameters · : type → parameter type · : returnType → return type' },
  { title: 'First-class citizens', text: 'functions are values in TypeScript — they can be typed, passed, and returned' },
  { title: 'Return types', text: 'explicitly define what a function gives back: `function greet(n: string): string`' },
  { title: 'void', text: 'if a function returns nothing, its return type is void' },
  { title: 'Optional parameters', text: 'add a ? after the parameter name — it may be omitted' },
  { title: 'Check for undefined', text: 'an optional param may be undefined, so guard before using it' },
  { title: 'Default parameters', text: 'provide a default value used when no argument is passed' },
  { title: 'Rest parameters', text: 'use ... to accept multiple arguments as a typed array' },
  { title: 'The payoff', text: 'strongly typed functions = fewer bugs + better tools + happy developers' },
];

const TYPES = [
  {
    icon: '➕', title: 'Function Types', titleClass: 'card-title-cyan', subtitle: 'Type Both Ends',
    description:
      'Specify the types of the parameters and the return value. Now the compiler guarantees callers pass the right arguments and use the result correctly.',
    code: '// function with types\nfunction add(a: number, b: number): number {\n  return a + b;\n}',
  },
  {
    icon: '↩️', title: 'Return Types', titleClass: 'card-title-purple', subtitle: 'What It Gives Back',
    description:
      'Explicitly define what a function returns. It documents intent and catches a wrong return value the moment you write it.',
    code: '// returns a string\nfunction greet(name: string): string {\n  return "Hello, " + name;\n}',
  },
  {
    icon: '🕳️', title: 'void', titleClass: 'card-title-amber', subtitle: 'Returns Nothing',
    description:
      'If a function doesn’t return anything, its return type is void — the type for loggers, handlers, and side-effect functions.',
    code: 'function logMessage(msg: string): void {\n  console.log(msg);\n}',
  },
];

const PARAMS = [
  {
    icon: '❔', title: 'Optional Parameters', titleClass: 'card-title-cyan', subtitle: 'Add a ?',
    description:
      'A ? after the parameter name makes it optional. Inside the function it may be undefined, so TypeScript makes you check before using it.',
    code: 'function greet(name: string, age?: number): void {\n  if (age !== undefined) {\n    console.log(name + " is " + age + " years old.");\n  } else {\n    console.log(name + " (age not provided)");\n  }\n}',
  },
  {
    icon: '🎚️', title: 'Default Parameters', titleClass: 'card-title-blue', subtitle: 'Fallback Values',
    description:
      'Provide a default value that’s used when no argument is passed. The type is inferred from the default — no annotation needed.',
    code: 'function greet(name: string, message: string = "Hi!"): void {\n  console.log(message + " " + name);\n}',
  },
  {
    icon: '📎', title: 'Rest Parameters', titleClass: 'card-title-amber', subtitle: 'Many Args, One Array',
    description:
      'Use ... to accept any number of arguments as a typed array — perfect for sum, max, or logging helpers.',
    code: 'function sum(...numbers: number[]): number {\n  let total = 0;\n  for (let n of numbers) total += n;\n  return total;\n}\nsum(1, 2, 3);   // 6\nsum(10, 20);    // 30',
  },
  {
    icon: '📋', title: 'Quick Recap', titleClass: 'card-title-lime', subtitle: 'Why It Matters',
    description:
      'Function types give clarity. Return types make code predictable. Optional & default parameters make functions flexible. Rest parameters handle multiple inputs easily.',
    footer: '+ Strongly typed functions = fewer bugs + better tools + happy developers!',
  },
];

const APPLY = [
  {
    icon: '🧩', title: 'Functions Are Values', titleClass: 'card-title-cyan', subtitle: 'First-Class Citizens',
    description:
      'Functions can be stored in variables, passed as arguments, and returned — and every one of those positions can be typed.',
    code: 'const multiply: (a: number, b: number) => number =\n  (a, b) => a * b;',
  },
  {
    icon: '🔁', title: 'Typed Callbacks', titleClass: 'card-title-purple', subtitle: 'map / filter',
    description:
      'Array methods take functions. TypeScript already knows the callback’s parameter types, so you get autocomplete and safety for free.',
    code: 'const nums = [1, 2, 3];\nconst doubled = nums.map((n) => n * 2); // n is number',
  },
  {
    icon: '🛡️', title: 'Errors Caught Early', titleClass: 'card-title-amber', subtitle: 'The Real Win',
    description:
      'Pass a string where a number belongs and the compiler stops you in the editor — long before that code ever reaches a user.',
    code: 'add(2, 3);    // ✅ 5\nadd("2", 3);  // ❌ string not assignable to number',
  },
  {
    icon: '🔜', title: 'Next: Data Types', titleClass: 'card-title-lime', subtitle: 'Day 5 Preview',
    description:
      'Tomorrow is Episode 5 — data types: arrays, tuples, objects, and readonly types for structuring real data.',
    link: { href: '/day-005', label: 'Go to Day 5 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Functions', titleClass: 'card-title-cyan', subtitle: 'TS Handbook',
    description:
      'The handbook’s deep dive on function types — parameters, returns, rest args, overloads, and typing this.',
    link: { href: TS_FUNCTIONS, label: 'Read the Functions chapter →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Experiment Live',
    description:
      'Write a typed function, call it wrong, and watch the error appear instantly. Then try optional and rest params.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description:
      'Functions are where types earn their keep — every React component, hook, and handler this year is a typed function.',
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

export default function Day004() {
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
            <Link to="/day-003" className="day001-nav-btn day001-nav-prev">← Day 3</Link>
            <p className="day001-datetime">TypeScript Day 4 · 27 Jul 2026</p>
            <Link to="/day-005" className="day001-nav-btn day001-nav-next">Day 5 →</Link>
          </header>

          <div className="day001-hero">
            <div className="day001-hero-left">
              <div className="day001-tags"><span>TypeScript</span><span>Episode 4</span><span>Functions</span></div>
              <div className="day001-title-block">
                <h1 className="day001-day-num">DAY 4 <span aria-hidden="true">⚙️</span></h1>
                <p className="day001-day-theme">FUNCTIONS IN TYPESCRIPT</p>
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

          <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '4%' }} /></div>

          <p className="day001-summary">
            <strong>Episode 4</strong> — functions. Functions are <strong>first-class citizens</strong> in
            TypeScript, and I can type both ends: the <strong>parameters</strong> and the{' '}
            <strong>return value</strong> (or <code>void</code> when it returns nothing). I made functions flexible
            with <strong>optional</strong> parameters (<code>?</code>, then check for <code>undefined</code>),{' '}
            <strong>default</strong> values, and <strong>rest</strong> parameters (<code>...</code>) that gather
            arguments into a typed array.{' '}
            <em>Strongly typed functions = fewer bugs + better tools + happy developers.</em>
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

          <CardSection icon="➕" title="FUNCTION & RETURN TYPES" cards={TYPES} columns={3} />
          <CardSection icon="🎛️" title="PARAMETERS" cards={PARAMS} columns={4} />
          <CardSection icon="🚀" title="IN PRACTICE" cards={APPLY} columns={4} />
          <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

          <footer className="day001-hashtags">
            <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Episode4</span><span>#Functions</span><span>#JSLearnHub</span>
          </footer>
        </div>
      </div>

      <section style={{ background: '#0d1117', padding: '8px 16px 56px', display: 'flex', justifyContent: 'center' }}>
        <figure style={{ maxWidth: '860px', width: '100%', margin: 0 }}>
          <h2 style={{ color: '#e6edf3', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 12px', textAlign: 'center' }}>
            <span aria-hidden="true">📌</span> Episode 4 Notes — Functions in TypeScript
          </h2>
          <a href={EP_IMAGE} target="_blank" rel="noopener noreferrer">
            <img
              src={EP_IMAGE}
              alt="TypeScript Series Episode 4 — Functions in TypeScript: function types specifying parameter and return value types with the add example, the syntax of parameters and return types, functions as first-class citizens, return types with the greet example, void when a function returns nothing, optional parameters using a question mark and checking for undefined, default parameters providing fallback values, rest parameters using the spread to accept multiple arguments as an array with the sum example, and a quick recap that strongly typed functions mean fewer bugs, better tools and happy developers"
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px', border: '1px solid #2a3441' }}
            />
          </a>
          <figcaption style={{ color: '#8fb6c2', fontSize: '0.82rem', textAlign: 'center', marginTop: '10px' }}>
            My handwritten Episode 4 notes — function &amp; return types, void, optional, default, and rest
            parameters. Click to open full size.
          </figcaption>
        </figure>
      </section>
    </>
  );
}
