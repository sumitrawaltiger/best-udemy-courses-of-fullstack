import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_HANDBOOK = 'https://www.typescriptlang.org/docs/handbook/intro.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';
const EP_IMAGE = '/typescript-notes/ep01-introduction-to-typescript.jpeg';

const LEARNT_TODAY = [
  { title: 'What TypeScript is', text: 'a superset of JavaScript that adds static typing — write better, safer, more maintainable code' },
  { title: 'Static typing', text: 'types are checked before the code runs, so mistakes surface in the editor' },
  { title: 'Better IDE support', text: 'autocompletion and IntelliSense come from the types you write' },
  { title: 'Early error detection', text: 'catch errors at compile time, not at runtime in front of users' },
  { title: 'Easier refactoring', text: 'rename and restructure with the compiler watching your back' },
  { title: 'Works with existing JS', text: 'every valid JavaScript file is already valid TypeScript — adopt it gradually' },
  { title: 'JS vs TS', text: 'JS: dynamic typing, runtime errors. TS: static typing, compile-time errors, scales better' },
  { title: 'TS compiles to JS', text: '.ts → TypeScript Compiler (tsc) → .js that runs in any browser or Node' },
  { title: 'Installing', text: 'npm install -g typescript, then tsc -v to confirm the compiler is ready' },
  { title: 'First program', text: 'hello.ts → tsc hello.ts → node hello.js → "Hello, TypeScript!"' },
];

const WHAT_WHY = [
  {
    icon: '🔷', title: 'What is TypeScript?', titleClass: 'card-title-cyan', subtitle: 'A Superset of JavaScript',
    description:
      'TypeScript is a superset of JavaScript that adds static typing. It helps us write better, safer, and more maintainable code — while still producing plain JavaScript underneath.',
    footer: '+ Static typing · IDE support · Early errors · Modern JS features',
  },
  {
    icon: '💡', title: 'Why TypeScript?', titleClass: 'card-title-purple', subtitle: 'Confidence, Not Restriction',
    description:
      'Catch errors at compile time instead of runtime. Get real autocompletion and IntelliSense, refactor safely, and keep large projects sane. TypeScript doesn’t change JavaScript — it makes JavaScript awesome.',
    code: 'let message: string = "Hello!";\nmessage = 42; // ❌ caught before it ever runs',
  },
  {
    icon: '🤝', title: 'Works With Existing JS', titleClass: 'card-title-amber', subtitle: 'Nothing Is Wasted',
    description:
      'Every valid .js file is already valid TypeScript. You can adopt types file by file — HTML5, CSS3 and JavaScript are the prerequisites, and they all still apply.',
    link: { href: TS_HANDBOOK, label: 'Read the TS Handbook →', external: true },
  },
];

const VS = [
  {
    icon: '🟨', title: 'JavaScript (JS)', titleClass: 'card-title-amber', subtitle: 'Dynamic',
    description:
      'Dynamic typing, errors show up at runtime, limited IDE support, and harder to maintain as a project grows. Flexible, but it trusts you completely.',
    code: 'let x = 5;\nx = "five"; // fine in JS — until it breaks',
  },
  {
    icon: '🔷', title: 'TypeScript (TS)', titleClass: 'card-title-cyan', subtitle: 'Static',
    description:
      'Static typing, errors at compile time, excellent IDE support, and far easier to maintain and scale. The compiler is a second pair of eyes on every line.',
    code: 'let x: number = 5;\nx = "five"; // ❌ Type \'string\' is not assignable',
  },
  {
    icon: '🔁', title: 'The Pipeline', titleClass: 'card-title-blue', subtitle: '.ts → tsc → .js',
    description:
      'You write TypeScript (.ts). The TypeScript Compiler checks the types and emits JavaScript (.js) that runs in any browser or on Node. Types are erased at runtime.',
    code: 'hello.ts  →  tsc  →  hello.js  (runs anywhere)',
  },
];

const FIRST = [
  {
    icon: '📥', title: 'Install TypeScript', titleClass: 'card-title-green', subtitle: 'npm + tsc',
    description:
      'Install the compiler globally with npm, then check the version to confirm tsc is on your PATH and ready to use.',
    code: '# using npm\nnpm install -g typescript\n\n# check version\ntsc -v',
  },
  {
    icon: '📄', title: 'Write hello.ts', titleClass: 'card-title-cyan', subtitle: 'Your First Types',
    description:
      'Create a .ts file and annotate a variable with a type. This is the whole idea of TypeScript in two lines — a value, and a promise about what it is.',
    code: 'let message: string = "Hello, TypeScript!";\nconsole.log(message);',
  },
  {
    icon: '🔨', title: 'Compile It', titleClass: 'card-title-blue', subtitle: 'tsc hello.ts',
    description:
      'Run the compiler on the file. It type-checks your code and produces hello.js — plain JavaScript with the types stripped away.',
    code: 'tsc hello.ts   # → hello.js',
  },
  {
    icon: '▶️', title: 'Run The Output', titleClass: 'card-title-lime', subtitle: 'node hello.js',
    description:
      'Execute the emitted JavaScript with Node and see your first TypeScript program print. .ts is what you write; .js is what runs.',
    code: 'node hello.js\n// → Hello, TypeScript! 🙂',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'TypeScript Handbook', titleClass: 'card-title-cyan', subtitle: 'Official Docs',
    description:
      'The canonical, free guide from the team that builds TypeScript. Start with "The Basics" — exactly what Episode 1 covers.',
    link: { href: TS_HANDBOOK, label: 'Open the Handbook →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Try It In The Browser',
    description:
      'Write TypeScript and watch it compile to JavaScript live, with full error messages — no install needed. Perfect for today’s snippets.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Setting Up', titleClass: 'card-title-amber', subtitle: 'Day 2 Preview',
    description:
      'Tomorrow is Episode 2 — setting up TypeScript properly: installing, tsconfig.json, the compiler options that matter, and compiling a real project.',
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
    <>
      <div className="day001-page">
        <div className="day001-scale-wrap" ref={scaleRef}>
          <header className="day001-topbar">
            <Link to="/" className="day001-nav-btn day001-nav-home">Home</Link>
            <Link to="/day-000" className="day001-nav-btn day001-nav-prev">← Day 0</Link>
            <p className="day001-datetime">TypeScript Day 1 · 24 Jul 2026</p>
            <Link to="/day-002" className="day001-nav-btn day001-nav-next">Day 2 →</Link>
          </header>

          <div className="day001-hero">
            <div className="day001-hero-left">
              <div className="day001-tags"><span>TypeScript</span><span>Episode 1</span><span>Year 1</span></div>
              <div className="day001-title-block">
                <h1 className="day001-day-num">DAY 1 <span aria-hidden="true">🔷</span></h1>
                <p className="day001-day-theme">INTRODUCTION TO TYPESCRIPT</p>
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

          <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '1%' }} /></div>

          <p className="day001-summary">
            Day one of the 4-year journey — <strong>Episode 1</strong> of my TypeScript series. TypeScript is a{' '}
            <strong>superset of JavaScript</strong> that adds <strong>static typing</strong>: catch errors at
            compile time, get real autocompletion, refactor safely, and scale big projects. It works with all my
            existing JavaScript (HTML5/CSS3/JS are the prerequisites). I compared <strong>JS vs TS</strong>, saw the{' '}
            <code>.ts → tsc → .js</code> pipeline, installed the compiler, and ran my first program.{' '}
            <em>If JavaScript lets you write code, TypeScript helps you write code with confidence.</em>
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

          <CardSection icon="🔷" title="WHAT & WHY" cards={WHAT_WHY} columns={3} />
          <CardSection icon="⚖️" title="JAVASCRIPT vs TYPESCRIPT" cards={VS} columns={3} />
          <CardSection icon="🛠️" title="INSTALL & FIRST PROGRAM" cards={FIRST} columns={4} />
          <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

          <footer className="day001-hashtags">
            <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Episode1</span><span>#WebDev</span><span>#JSLearnHub</span>
          </footer>
        </div>
      </div>

      <section style={{ background: '#0d1117', padding: '8px 16px 56px', display: 'flex', justifyContent: 'center' }}>
        <figure style={{ maxWidth: '860px', width: '100%', margin: 0 }}>
          <h2 style={{ color: '#e6edf3', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 12px', textAlign: 'center' }}>
            <span aria-hidden="true">📌</span> Episode 1 Notes — Introduction to TypeScript
          </h2>
          <a href={EP_IMAGE} target="_blank" rel="noopener noreferrer">
            <img
              src={EP_IMAGE}
              alt="TypeScript Series Episode 1 — Introduction to TypeScript: what TypeScript is (a superset of JavaScript adding static typing), key points (static typing, better IDE support, early error detection, improved code quality, modern JavaScript features), why TypeScript (catch errors at compile time, better autocompletion and IntelliSense, easier refactoring, safer code for large projects, works with existing JavaScript), JavaScript vs TypeScript comparison table, the .ts to TypeScript Compiler to .js pipeline, installing TypeScript with npm install -g typescript and tsc -v, and a first program: hello.ts with a typed message, compiled with tsc hello.ts and run with node hello.js"
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px', border: '1px solid #2a3441' }}
            />
          </a>
          <figcaption style={{ color: '#8fb6c2', fontSize: '0.82rem', textAlign: 'center', marginTop: '10px' }}>
            My handwritten Episode 1 notes — what &amp; why, JS vs TS, the compiler pipeline, and the first program.
            Click to open full size.
          </figcaption>
        </figure>
      </section>
    </>
  );
}
