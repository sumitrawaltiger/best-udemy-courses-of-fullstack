import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture16-Memory-management-and-How-JS-code-works-38b43ac5cab980af918bf13d86ec5d6c?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture16';

const LEARNT_TODAY = [
  {
    title: 'Execution context',
    text: 'the box JS runs your code in — it has a memory (variable) part and a code part',
  },
  {
    title: 'Two phases',
    text: 'phase 1 allocates memory (hoisting); phase 2 executes line by line',
  },
  {
    title: 'var hoisting',
    text: 'var is hoisted as undefined — logging it before assignment prints undefined, not an error',
  },
  {
    title: 'Function hoisting',
    text: 'function declarations are fully hoisted — you can call addNumber before it appears',
  },
  {
    title: 'Temporal Dead Zone',
    text: 'let and const are hoisted too, but stay <uninitialized> until their line runs',
  },
  {
    title: 'let/const before init',
    text: 'touching them in the TDZ throws a ReferenceError — unlike var',
  },
  {
    title: 'Function expressions',
    text: 'const addNumber = function(){} — the const is in the TDZ, so no early call',
  },
  {
    title: 'Execution fills memory',
    text: 'phase 2 replaces the placeholders — a = 10, b = 20, sum1 = 30',
  },
  {
    title: 'Function scope',
    text: 'var declared inside a function does not exist outside it',
  },
  {
    title: 'Call stack',
    text: 'each call gets its own execution context, pushed and popped as functions run',
  },
];

const EXECUTION = [
  {
    icon: '📦',
    title: 'Execution Context',
    titleClass: 'card-title-cyan',
    subtitle: 'first.js',
    description: 'Every program runs inside a context with two parts: memory and code.',
    code: '// Global Execution Context\n// ├─ Memory (variables + functions)\n// └─ Code (runs line by line)',
  },
  {
    icon: '1️⃣',
    title: 'Phase 1 — Memory',
    titleClass: 'card-title-green',
    subtitle: 'Allocation / hoisting',
    description: 'JS scans first: var → undefined, functions → full, let/const → TDZ.',
    code: '// a = <uninitialized> (TDZ)\n// b = <uninitialized> (TDZ)\n// addNumber = <uninitialized> (TDZ)',
  },
  {
    icon: '2️⃣',
    title: 'Phase 2 — Execution',
    titleClass: 'card-title-amber',
    subtitle: 'Line by line',
    description: 'Now values are assigned and functions actually run.',
    code: 'let a = 10;\nconst b = 20;\nconst sum1 = addNumber(a, b);\nconsole.log(sum1); // 30',
  },
];

const HOISTING = [
  {
    icon: '🎈',
    title: 'var Hoisting',
    titleClass: 'card-title-cyan',
    subtitle: 'index.js',
    description: 'var is hoisted as undefined — reading it early is not an error.',
    code: 'console.log(a, b); // undefined undefined\nvar a = 10;\nvar b = 20;',
  },
  {
    icon: '🏗️',
    title: 'Function Hoisting',
    titleClass: 'card-title-green',
    subtitle: 'Call before define',
    description: 'Function declarations are fully hoisted — callable before their line.',
    code: 'const sum1 = addNumber(a, b); // works!\nfunction addNumber(n1, n2) {\n  return n1 + n2;\n}',
  },
  {
    icon: '⛔',
    title: 'Temporal Dead Zone',
    titleClass: 'card-title-amber',
    subtitle: 'let & const',
    description: 'Hoisted but uninitialized — using them early throws a ReferenceError.',
    code: '// console.log(x); // ReferenceError\nlet x = 10; // TDZ ends here',
  },
  {
    icon: '🧬',
    title: 'Function Expressions',
    titleClass: 'card-title-pink',
    subtitle: 'const = function',
    description: 'The const holding the function is in the TDZ — no early call.',
    code: 'const addNumber = function (n1, n2) {\n  return n1 + n2;\n};',
  },
];

const SCOPE_STACK = [
  {
    icon: '🔒',
    title: 'Function Scope',
    titleClass: 'card-title-cyan',
    subtitle: 'third.js',
    description: 'A var inside a function lives and dies there — invisible outside.',
    code: 'function greet() {\n  var a = 20;\n}\ngreet();\n// console.log(a); // ReferenceError',
  },
  {
    icon: '📚',
    title: 'The Call Stack',
    titleClass: 'card-title-green',
    subtitle: 'Push & pop',
    description: 'Each call gets its own context, pushed on call, popped on return.',
    code: 'function a() { b(); }\nfunction b() { console.log("in b"); }\na(); // stack: a → b → (pop) → (pop)',
  },
  {
    icon: '💥',
    title: 'Stack Overflow',
    titleClass: 'card-title-amber',
    subtitle: 'Runaway recursion',
    description: 'A function that never stops calling itself fills the stack and crashes.',
    code: 'function loop() {\n  return loop(); // no base case!\n}\n// loop(); // Maximum call stack exceeded',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 16 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description: 'Memory & how JS runs — execution context, hoisting, TDZ, scope.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Lecture16 Code',
    description: 'first.js (TDZ), index.js (var + fn hoisting), third.js (scope).',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'JavaScript Hoisting',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Learn JavaScript Hoisting by Web Dev Simplified — supplement for Lecture 16.',
    link: {
      href: 'https://www.youtube.com/watch?v=EvfRXyKa_GI',
      label: 'Watch on YouTube →',
      external: true,
    },
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

export default function Day016() {
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
          <Link to="/day-015" className="day001-nav-btn day001-nav-home">
            ← Day 15
          </Link>
          <p className="day001-datetime">Thunder Day 16 · 1 Aug 2026</p>
          <Link to="/day-017" className="day001-nav-btn day001-nav-next">
            Day 17 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>JavaScript</span>
              <span>Thunder</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 16 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">MEMORY & HOW JS RUNS</p>
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
              <p className="day001-profile-role">JS · THUNDER</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '16%' }} />
        </div>

        <p className="day001-summary">
          Day sixteen — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 16
          </a>
          . Under the hood: JS runs every program through an execution context in two phases — memory
          allocation then execution. That explains hoisting, why <code>var</code> logs undefined
          before its line, why <code>let</code>/<code>const</code> sit in the Temporal Dead Zone, and
          how function scope and the call stack work, traced through{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Lecture16 on GitHub
          </a>
          . The mental model that makes JS stop being magic.
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

        <CardSection icon="⚙️" title="EXECUTION CONTEXT" cards={EXECUTION} columns={3} />
        <CardSection icon="🎈" title="HOISTING & TDZ" cards={HOISTING} columns={4} />
        <CardSection icon="📚" title="SCOPE & CALL STACK" cards={SCOPE_STACK} columns={3} />
        <CardSection icon="📚" title="THUNDER LECTURE 16" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#JavaScript</span>
          <span>#Hoisting</span>
          <span>#ExecutionContext</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
