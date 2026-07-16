import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_TSCONFIG = 'https://www.typescriptlang.org/tsconfig';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'tsconfig.json', text: 'the compiler’s control panel — targets, modules, strictness, and output all live here' },
  { title: 'target & lib', text: 'target sets the JS version emitted; lib picks which built-in type definitions are available' },
  { title: 'strict family', text: 'strict turns on noImplicitAny, strictNullChecks, and friends — the real safety' },
  { title: 'outDir & rootDir', text: 'keep source in src and compiled JS in dist, cleanly separated' },
  { title: 'DOM types', text: 'lib "DOM" gives document, window, and every element type out of the box' },
  { title: 'Typed elements', text: 'querySelector<HTMLInputElement> returns the exact element type, with the right props' },
  { title: 'Typed events', text: 'event handlers receive typed events — MouseEvent, KeyboardEvent, and more' },
  { title: 'Non-null assertion', text: 'the `!` postfix says "this is not null" — use only when you truly know' },
  { title: 'noEmit & tsc --noEmit', text: 'type-check without producing files — perfect for CI and Vite projects' },
  { title: 'skipLibCheck', text: 'speeds up builds by not re-checking library .d.ts files' },
];

const CONFIG = [
  {
    icon: '🎛️', title: 'target & module', titleClass: 'card-title-cyan', subtitle: 'What JS Comes Out',
    description: 'target sets the JavaScript version tsc emits; module sets the module system. Modern web projects target ES2022 with ESNext modules.',
    code: '"target": "ES2022",\n"module": "ESNext",\n"moduleResolution": "bundler"',
  },
  {
    icon: '📚', title: 'lib', titleClass: 'card-title-purple', subtitle: 'Which APIs Exist',
    description: 'lib chooses which built-in type declarations load. Include "DOM" for the browser and "ES2022" for modern JS features like Array.at.',
    code: '"lib": ["ES2022", "DOM", "DOM.Iterable"]',
  },
  {
    icon: '🚦', title: 'strict Family', titleClass: 'card-title-amber', subtitle: 'The Safety Switches',
    description: 'One flag, many checks: strict enables noImplicitAny, strictNullChecks, strictFunctionTypes, and more. Always on for new projects.',
    code: '"strict": true,\n// noImplicitAny, strictNullChecks, ...\n"noUnusedLocals": true',
  },
];

const OUTPUT = [
  {
    icon: '📁', title: 'outDir & rootDir', titleClass: 'card-title-cyan', subtitle: 'Source vs Build',
    description: 'rootDir marks where your source lives and outDir where compiled JS goes — keep src and dist separate so builds stay clean.',
    code: '"rootDir": "src",\n"outDir": "dist"',
  },
  {
    icon: '🚫', title: 'noEmit', titleClass: 'card-title-blue', subtitle: 'Type-Check Only',
    description: 'In Vite/Next projects the bundler compiles the code, so you run tsc only to type-check. noEmit (or tsc --noEmit) checks without writing files.',
    code: '"noEmit": true\n// tsc --noEmit  → CI type gate',
  },
  {
    icon: '⚡', title: 'skipLibCheck', titleClass: 'card-title-amber', subtitle: 'Faster Builds',
    description: 'skipLibCheck tells TypeScript not to re-verify third-party .d.ts files. It trades a little strictness for a noticeably faster check.',
    code: '"skipLibCheck": true',
  },
  {
    icon: '🧾', title: 'tsc --init', titleClass: 'card-title-lime', subtitle: 'A Good Starting Point',
    description: 'Generate a commented tsconfig with tsc --init, then trim it to the options you actually use. Every project starts here.',
    code: 'tsc --init\n# creates a documented tsconfig.json',
  },
];

const DOM = [
  {
    icon: '🌐', title: 'DOM Types', titleClass: 'card-title-cyan', subtitle: 'document & window',
    description: 'With lib "DOM", TypeScript knows the whole browser API. document, window, elements, and events are all fully typed — autocomplete everywhere.',
    code: 'const title = document.title; // string\nwindow.addEventListener("load", () => {});',
  },
  {
    icon: '🎯', title: 'Typed Elements', titleClass: 'card-title-purple', subtitle: 'The Right Element Type',
    description: 'querySelector returns a general Element by default. Pass the specific type so you get the properties that element actually has.',
    code: 'const input = document.querySelector<HTMLInputElement>("#name");\ninput?.value; // string, only exists on inputs',
  },
  {
    icon: '🖱️', title: 'Typed Events', titleClass: 'card-title-amber', subtitle: 'Know The Event',
    description: 'Event listeners hand you a typed event object. TypeScript knows a "click" gives a MouseEvent and "keydown" a KeyboardEvent.',
    code: 'btn.addEventListener("click", (e: MouseEvent) => {\n  console.log(e.clientX);\n});',
  },
  {
    icon: '❗', title: 'Non-null Assertion', titleClass: 'card-title-lime', subtitle: 'The ! Operator',
    description: 'When you’re certain an element exists, a trailing ! removes null from its type. Use sparingly — a wrong ! reintroduces the crash TS was preventing.',
    code: 'const root = document.getElementById("app")!;\nroot.innerHTML = "Hi";',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'tsconfig Reference', titleClass: 'card-title-cyan', subtitle: 'Every Option',
    description: 'The searchable reference for every tsconfig option, with examples and recommendations. Bookmark it for the rest of Year 1.',
    link: { href: TS_TSCONFIG, label: 'Open the tsconfig reference →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Toggle Options Live',
    description: 'The Playground’s settings let you flip strict, target, and lib and watch the errors and emitted JS change instantly.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🏁', title: 'Core Complete', titleClass: 'card-title-amber', subtitle: 'Days 1–10 Done',
    description: 'That’s the TypeScript core: types, functions, interfaces, classes, generics, narrowing, utility types, modules, and config. Next up: React & Next.js in TypeScript.',
    link: { href: '/roadmap', label: 'See what’s next →' },
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

export default function Day010() {
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
          <Link to="/day-009" className="day001-nav-btn day001-nav-prev">← Day 9</Link>
          <p className="day001-datetime">TypeScript Day 10 · 26 Jul 2026</p>
          <Link to="/day-011" className="day001-nav-btn day001-nav-next">Day 11 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Config · DOM</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 10 <span aria-hidden="true">⚙️</span></h1>
              <p className="day001-day-theme">TSCONFIG & TYPING THE DOM</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '10%' }} /></div>

        <p className="day001-summary">
          Day 10 wires TypeScript to the real world. I learned the <strong>tsconfig</strong> options that matter —{' '}
          <code>target</code>, <code>lib</code>, the <code>strict</code> family, <code>outDir</code>, and{' '}
          <code>noEmit</code> for type-checking Vite projects. Then I typed the <strong>DOM</strong>: exact element
          types from <code>querySelector&lt;T&gt;</code>, typed <strong>events</strong>, and the{' '}
          <code>!</code> non-null assertion. That completes the TypeScript core — next comes React &amp; Next.js in TS.
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

        <CardSection icon="🎛️" title="TSCONFIG ESSENTIALS" cards={CONFIG} columns={3} />
        <CardSection icon="📁" title="OUTPUT & CHECKING" cards={OUTPUT} columns={4} />
        <CardSection icon="🌐" title="TYPING THE DOM" cards={DOM} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#tsconfig</span><span>#WebDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
