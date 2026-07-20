import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_EVERYDAY = 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'Primitive types', text: 'string, number and boolean are the three you reach for constantly — all lowercase' },
  { title: 'Annotation syntax', text: 'a colon after the name declares the type: let done: boolean = false' },
  { title: 'Inference vs annotation', text: 'let it infer for initialised values; annotate function params and empty declarations' },
  { title: 'Arrays', text: 'number[] or Array<number> — a list where every element must be the same type' },
  { title: 'any turns checking off', text: 'any accepts anything and disables safety — an escape hatch to use sparingly' },
  { title: 'unknown is the safe any', text: 'holds anything but forces you to narrow the type before you can use it' },
  { title: 'null & undefined', text: 'with strictNullChecks they are their own types — you must handle the empty case' },
  { title: 'literal & union types', text: '"left" | "right" restricts a value to an exact set — tiny types, big safety' },
];

const PRIMITIVES = [
  {
    icon: '🔤', title: 'string · number · boolean', titleClass: 'card-title-cyan', subtitle: 'The Primitives',
    description:
      'The three everyday types, always lowercase. Annotate with a colon, or let TypeScript infer them from the initial value — the result is identical either way.',
    code: 'let name: string = "Sumit";\nlet age: number = 27;\nlet active: boolean = true;\n\nlet city = "Mumbai"; // inferred: string',
  },
  {
    icon: '📚', title: 'Arrays', titleClass: 'card-title-purple', subtitle: 'Same-Type Lists',
    description:
      'Type[] means an array of that type — every element must match. Two equivalent syntaxes; Type[] is the common one. Mixed lists need a union or a tuple.',
    code: 'let scores: number[] = [90, 85, 88];\nlet tags: Array<string> = ["ts", "js"];\n\nscores.push("x"); // ❌ not a number',
  },
];

const SPECIAL = [
  {
    icon: '⚠️', title: 'any', titleClass: 'card-title-cyan', subtitle: 'Checking Off',
    description:
      'any accepts every value and silences the compiler — it opts a variable out of the type system entirely. Useful in a pinch, but every any is a hole in your safety net.',
    code: 'let data: any = 4;\ndata = "now a string"; // no error\ndata.foo.bar();       // no error either 😬',
  },
  {
    icon: '🛡️', title: 'unknown', titleClass: 'card-title-purple', subtitle: 'The Safe any',
    description:
      'unknown also holds anything, but you can’t use it until you narrow it with a check. It’s the type-safe way to accept values whose shape you don’t yet know.',
    code: 'let val: unknown = fetchIt();\n// val.trim();  ❌ must narrow first\nif (typeof val === "string") val.trim(); // ✓',
  },
  {
    icon: '🎯', title: 'Literal & Union', titleClass: 'card-title-amber', subtitle: 'Exact Values',
    description:
      'A literal type is one exact value; a union joins several with |. Together they restrict a variable to a fixed set — invalid options become compile errors.',
    code: 'let dir: "left" | "right";\ndir = "left";  // ✓\ndir = "up";    // ❌ not in the set',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Everyday Types', titleClass: 'card-title-cyan', subtitle: 'Handbook',
    description:
      'The handbook chapter covering primitives, arrays, any, unions and literals — the exact ground this day walks through, with runnable examples.',
    link: { href: TS_EVERYDAY, label: 'Open Everyday Types →', external: true },
  },
  {
    icon: '🎮', title: 'Practice It', titleClass: 'card-title-purple', subtitle: 'Playground',
    description:
      'Paste each snippet into the Playground and hover the variables — the editor shows the inferred type and flags the deliberate errors instantly.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Functions', titleClass: 'card-title-amber', subtitle: 'Day 43 Preview',
    description:
      'Tomorrow — typing functions: parameter and return types, optional and default params, the void type, and typed arrow functions.',
    link: { href: '/day-043', label: 'Go to Day 43 →' },
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

export default function Day042() {
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
          <Link to="/day-041" className="day001-nav-btn day001-nav-prev">← Day 41</Link>
          <p className="day001-datetime">TypeScript Day 42</p>
          <Link to="/day-043" className="day001-nav-btn day001-nav-next">Day 43 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Type System</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 42 <span aria-hidden="true">🔤</span></h1>
              <p className="day001-day-theme">TYPE SYSTEM BASICS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '42%' }} /></div>

        <p className="day001-summary">
          The core types. The three primitives — <code>string</code>, <code>number</code>, <code>boolean</code> — are
          annotated with a colon (<code>let done: boolean = false</code>) or simply <strong>inferred</strong> from the
          value. Lists are <code>number[]</code> where every element shares a type. <code>any</code> turns checking{' '}
          <strong>off</strong> and should be rare; <code>unknown</code> is the <strong>safe</strong> version — it holds
          anything but forces you to <em>narrow</em> before use. With <code>strictNullChecks</code>, <code>null</code>{' '}
          and <code>undefined</code> are real types you must handle. And <strong>literal + union</strong> types
          (<code>"left" | "right"</code>) pin a value to an exact set — small types that catch big mistakes.{' '}
          <em>Next: functions.</em>
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

        <CardSection icon="🔤" title="PRIMITIVES & ARRAYS" cards={PRIMITIVES} columns={2} />
        <CardSection icon="🧩" title="any · unknown · UNIONS" cards={SPECIAL} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#Types</span><span>#StaticTyping</span>
        </footer>
      </div>
    </div>
  );
}
