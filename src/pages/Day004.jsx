import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_FUNCTIONS = 'https://www.typescriptlang.org/docs/handbook/2/functions.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'Type the parameters', text: 'each parameter gets its own annotation: (name: string, age: number)' },
  { title: 'Type the return value', text: 'a colon after the parens declares what comes back: (): number' },
  { title: 'Return inference', text: 'TS usually infers the return type — annotate it to lock the contract on purpose' },
  { title: 'void', text: 'a function that returns nothing has return type void — like a console.log wrapper' },
  { title: 'Optional params', text: 'a ? makes a parameter optional; it becomes type | undefined inside the body' },
  { title: 'Default params', text: 'a default value both fills in a missing argument and lets TS infer its type' },
  { title: 'Typed arrow functions', text: 'const add = (a: number, b: number): number => a + b — same rules, shorter syntax' },
  { title: 'Function type signatures', text: 'you can describe a callback’s shape: (n: number) => string' },
];

const BASICS = [
  {
    icon: '🎯', title: 'Params & Return', titleClass: 'card-title-cyan', subtitle: 'Both Ends Typed',
    description:
      'Annotate every parameter, and optionally the return type. If you leave the return off, TypeScript infers it — but writing it makes the function’s contract explicit and self-checking.',
    code: 'function greet(name: string): string {\n  return `Hi ${name}`;\n}\n\ngreet(42); // ❌ number not assignable to string',
  },
  {
    icon: '🕳️', title: 'void', titleClass: 'card-title-purple', subtitle: 'Returns Nothing',
    description:
      'When a function does its work through side effects and returns nothing meaningful, its return type is void. TypeScript infers it, and stops you from using a non-existent result.',
    code: 'function log(msg: string): void {\n  console.log(msg);\n}\nconst x = log("hi"); // x is void',
  },
];

const PARAMS = [
  {
    icon: '❓', title: 'Optional Params', titleClass: 'card-title-cyan', subtitle: 'name?: type',
    description:
      'A trailing ? marks a parameter optional. Inside the body its type is T | undefined, so TypeScript makes you handle the missing case before you use it.',
    code: 'function hi(name?: string) {\n  return `Hi ${name ?? "there"}`;\n}\nhi();        // ✓ ok\nhi("Sumit"); // ✓ ok',
  },
  {
    icon: '⚙️', title: 'Default Params', titleClass: 'card-title-purple', subtitle: 'Fallback Values',
    description:
      'Give a parameter a default and it’s used whenever the argument is missing. The default also lets TypeScript infer the parameter’s type without an annotation.',
    code: 'function pow(base: number, exp = 2) {\n  return base ** exp;\n}\npow(5);    // 25\npow(5, 3); // 125',
  },
  {
    icon: '🏹', title: 'Typed Arrows', titleClass: 'card-title-amber', subtitle: 'Shorter Syntax',
    description:
      'Arrow functions follow the same typing rules. You can also write a function type signature to describe a callback’s exact shape — great for props and event handlers.',
    code: 'const add = (a: number, b: number): number => a + b;\n\ntype Fmt = (n: number) => string;\nconst money: Fmt = (n) => `$${n}`;',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Functions Chapter', titleClass: 'card-title-cyan', subtitle: 'Handbook',
    description:
      'The handbook’s deep dive on function types — parameters, returns, optional/rest params, overloads and call signatures — with runnable examples.',
    link: { href: TS_FUNCTIONS, label: 'Open the Functions docs →', external: true },
  },
  {
    icon: '🎮', title: 'Try Each Snippet', titleClass: 'card-title-purple', subtitle: 'Playground',
    description:
      'Drop the examples into the Playground, then remove a type or pass a wrong argument to watch the compiler catch it — the fastest way to build the reflex.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Data Types', titleClass: 'card-title-amber', subtitle: 'Day 5 Preview',
    description:
      'Tomorrow — objects, tuples, enums and type aliases: how to describe structured data so whole records are checked, not just single values.',
    link: { href: '/day-005', label: 'Go to Day 5 →' },
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
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/" className="day001-nav-btn day001-nav-home">Home</Link>
          <Link to="/day-003" className="day001-nav-btn day001-nav-prev">← Day 3</Link>
          <p className="day001-datetime">TypeScript Day 4</p>
          <Link to="/day-005" className="day001-nav-btn day001-nav-next">Day 5 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Functions</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 4 <span aria-hidden="true">🎯</span></h1>
              <p className="day001-day-theme">TYPING FUNCTIONS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '4%' }} /></div>

        <p className="day001-summary">
          Functions are where types pay off most. Annotate each <strong>parameter</strong>
          (<code>name: string</code>) and, optionally, the <strong>return type</strong> after the parens — TS infers
          the return, but writing it locks the contract. A function returning nothing is <code>void</code>. A{' '}
          <strong>?</strong> makes a parameter <strong>optional</strong> (<code>T | undefined</code> inside), while a{' '}
          <strong>default value</strong> fills a missing argument and infers its type. <strong>Arrow functions</strong>{' '}
          follow the same rules — <code>const add = (a: number, b: number): number =&gt; a + b</code> — and a function
          type like <code>(n: number) =&gt; string</code> describes a callback’s shape. <em>Next: structured data.</em>
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

        <CardSection icon="🎯" title="PARAMS, RETURN & VOID" cards={BASICS} columns={2} />
        <CardSection icon="⚙️" title="OPTIONAL · DEFAULT · ARROWS" cards={PARAMS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#Functions</span><span>#WebDev</span>
        </footer>
      </div>
    </div>
  );
}
