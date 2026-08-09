import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_DOCS = 'https://www.typescriptlang.org/docs/';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'TypeScript = JavaScript + types', text: 'a superset of JS — every valid .js file is already valid TypeScript' },
  { title: 'Static typing', text: 'you declare what a value is, and the compiler checks it before the code ever runs' },
  { title: 'Catches bugs early', text: 'typos, wrong arguments and null mistakes are caught at compile time, not in production' },
  { title: 'Compiles to plain JS', text: 'the browser never runs TypeScript — tsc strips the types and emits ordinary JavaScript' },
  { title: 'Type inference', text: 'TS often figures out the type for you, so you don’t annotate everything by hand' },
  { title: 'World-class tooling', text: 'autocomplete, refactors and inline errors in the editor — the biggest day-to-day win' },
  { title: 'Year 1 starts here', text: 'TypeScript is the foundation of the whole Year-1 stack: React, Next.js, React Native, Express' },
  { title: 'Prereq: JavaScript', text: 'you already know JS — TypeScript just adds a safety layer on top of it' },
];

const WHAT = [
  {
    icon: '🔷', title: 'A Typed Superset', titleClass: 'card-title-cyan', subtitle: 'JS + Types',
    description:
      'TypeScript is JavaScript with a type system bolted on. Everything you know about JS still works — TS only adds optional annotations that describe the shape of your data.',
    code: '// plain JS — valid TypeScript too\nlet name = "Sumit";\n\n// TS adds a type annotation\nlet age: number = 27;',
  },
  {
    icon: '🛡️', title: 'Errors Before Runtime', titleClass: 'card-title-purple', subtitle: 'Compile-Time Safety',
    description:
      'The compiler reads your types and flags mistakes as you type. Passing a string where a number belongs is caught in the editor — long before the code ever ships.',
    code: 'let age: number = 27;\nage = "twenty-seven";\n// ❌ Type \'string\' is not\n//    assignable to type \'number\'',
  },
];

const HOW = [
  {
    icon: '⚙️', title: 'tsc — The Compiler', titleClass: 'card-title-cyan', subtitle: '.ts → .js',
    description:
      'The TypeScript compiler (tsc) transpiles your .ts files into plain .js that the browser or Node can run. Types are erased in the output — they exist only to check your code.',
    code: '// hello.ts\nconst greet = (n: string) => `Hi ${n}`;\n\n// $ tsc hello.ts  →  hello.js\n// const greet = (n) => `Hi ${n}`;',
  },
  {
    icon: '🔍', title: 'Type Inference', titleClass: 'card-title-purple', subtitle: 'It Guesses For You',
    description:
      'You don’t annotate everything. When you initialise a variable, TS infers its type automatically — annotate only where the intent isn’t obvious from the value.',
    code: 'let city = "Mumbai";\n// inferred as string — no annotation\ncity = 42; // ❌ error',
  },
  {
    icon: '💡', title: 'Why Teams Use It', titleClass: 'card-title-amber', subtitle: 'The Payoff',
    description:
      'Self-documenting code, fearless refactors, autocomplete that actually knows your data, and far fewer "undefined is not a function" crashes. It scales to large codebases.',
    footer: 'safer refactors · better autocomplete · fewer runtime bugs',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'TypeScript Handbook', titleClass: 'card-title-cyan', subtitle: 'Official Docs',
    description:
      'The canonical reference — start with "The Basics" and "Everyday Types". Clear, example-driven, and always current with the latest compiler.',
    link: { href: TS_DOCS, label: 'Open the Handbook →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Try In-Browser',
    description:
      'Write TypeScript and watch the compiled JavaScript appear live beside it — no setup. The fastest way to build intuition for what the types actually do.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Setup', titleClass: 'card-title-amber', subtitle: 'Day 2 Preview',
    description:
      'Tomorrow — install TypeScript, initialise tsconfig.json, and run the compiler in watch mode so your project rebuilds on every save.',
    link: { href: '/day-002', label: 'Go to Day 2 →' },
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

export default function Day001() {
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
          <Link to="/day-055" className="day001-nav-btn day001-nav-prev">← Prerequisites</Link>
          <p className="day001-datetime">TypeScript Day 1 · 7 Jun 2027</p>
          <Link to="/day-002" className="day001-nav-btn day001-nav-next">Day 2 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Introduction</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 1 <span aria-hidden="true">🔷</span></h1>
              <p className="day001-day-theme">TYPESCRIPT — WHY &amp; WHAT</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '1%' }} /></div>

        <p className="day001-summary">
          Year 1 begins. <strong>TypeScript</strong> is a <strong>typed superset of JavaScript</strong> — every valid
          JS file is already valid TS, and you add <em>type annotations</em> on top. The compiler <code>tsc</code>{' '}
          checks those types and catches bugs <strong>at compile time</strong>, then strips them and emits plain
          JavaScript the browser runs. Thanks to <strong>type inference</strong> you don’t annotate everything — TS
          figures out most types itself. The real payoff is <strong>tooling</strong>: autocomplete, safe refactors and
          inline errors. This is the foundation for <em>React, Next.js, React Native and Express</em> all year.
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

        <CardSection icon="🔷" title="WHAT IS TYPESCRIPT" cards={WHAT} columns={2} />
        <CardSection icon="⚙️" title="HOW IT WORKS" cards={HOW} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#WebDev</span><span>#JavaScript</span>
        </footer>
      </div>
    </div>
  );
}
