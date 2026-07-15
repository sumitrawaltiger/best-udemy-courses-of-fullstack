import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture08-Date-and-Functions-in-JS-37c43ac5cab98043bcfafdc2a70c7a3a?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture08';

const LEARNT_TODAY = [
  {
    title: 'Date object',
    text: 'new Date() — getDay, getDate, getFullYear, getMonth, getMinutes, getSeconds',
  },
  {
    title: 'Month & day indexing',
    text: 'jan = 0 … dec = 11, mon = 1 … sun = 7 — real apps use date libraries',
  },
  {
    title: 'Timestamps',
    text: 'Date.now() — milliseconds since epoch, stored as an 8-byte number',
  },
  {
    title: 'Custom dates',
    text: 'new Date(ms) from a timestamp, new Date(year, month, day, hours, minutes, seconds, ms)',
  },
  {
    title: 'Function declarations',
    text: 'function addNumber(a, b) { return a + b } — bundle reusable logic',
  },
  {
    title: 'Default parameters',
    text: 'addNumber(num1, num2, num3 = 0, num4 = 0) — works with 2, 3, or 4 args',
  },
  {
    title: 'Rest & spread',
    text: '...arr collects arguments into an array; [...arr] copies one out',
  },
  {
    title: 'Arrow functions',
    text: 'const add = (a, b) => a + b — implicit return, single param needs no ()',
  },
  {
    title: 'IIFE',
    text: '(function hello(){ ... })() — define and run immediately',
  },
  {
    title: 'Callbacks',
    text: 'pass a function into a function — meet(greet), payment(500, zomatoRestaurant)',
  },
];

const DATE_BASICS = [
  {
    icon: '📅',
    title: 'new Date()',
    titleClass: 'card-title-cyan',
    subtitle: 'Date.js',
    description: 'Current date-time object — read parts with getter methods.',
    code: 'const now = new Date();\nconsole.log(now.toString());\nconsole.log(now.getFullYear());\nconsole.log(now.getMonth()); // 0 = Jan',
  },
  {
    icon: '⚠️',
    title: 'Index Quirks',
    titleClass: 'card-title-amber',
    subtitle: 'Zero-based months',
    description: 'jan: 0 … dec: 11 and mon: 1 … sun: 7 — libraries exist for a reason.',
    code: 'now.getMonth(); // 6 = July!\nnow.getDay();   // day of week',
  },
  {
    icon: '⏱️',
    title: 'Timestamps',
    titleClass: 'card-title-green',
    subtitle: 'Date.now()',
    description: 'Milliseconds since epoch — an 8-byte number. Build dates back from it.',
    code: 'const ms = Date.now();\nconst da = new Date(500000090000);\nconst myDate = new Date(2026, 8, 4, 6, 20, 11, 125);',
  },
];

const FUNCTION_BASICS = [
  {
    icon: '🧩',
    title: 'Declarations',
    titleClass: 'card-title-cyan',
    subtitle: 'functions.js',
    description: 'Name it, call it, return a value — reusable logic in one place.',
    code: 'function addNumber(num1, num2) {\n  return num1 + num2;\n}\nconst answer = addNumber(2, 3);',
  },
  {
    icon: '🎛️',
    title: 'Default Params',
    titleClass: 'card-title-green',
    subtitle: 'Optional arguments',
    description: 'num3 = 0, num4 = 0 — same function handles 2, 3, or 4 arguments.',
    code: 'function addNumber(n1, n2, n3 = 0, n4 = 0) {\n  return n1 + n2 + n3 + n4;\n}\naddNumber(3, 11);\naddNumber(4, 7, 8, 16);',
  },
  {
    icon: '📦',
    title: 'Expressions',
    titleClass: 'card-title-blue',
    subtitle: 'Second way',
    description: 'Store an anonymous function in a const — call it by variable name.',
    code: 'const greet = function () {\n  console.log("Hello Ji");\n  return 10;\n};\nconst answer = greet();',
  },
];

const ARROW_AND_OPERATORS = [
  {
    icon: '🏹',
    title: 'Arrow Functions',
    titleClass: 'card-title-cyan',
    subtitle: 'Third way — most used',
    description: 'One-liner with implicit return; single param needs no parentheses.',
    code: 'const addNumber = (a, b) => a + b;\nconst square = num => num * num;',
  },
  {
    icon: '🎁',
    title: 'Return Objects',
    titleClass: 'card-title-green',
    subtitle: 'Wrap in ()',
    description: 'Arrow returning an object literal needs parentheses around {}.',
    code: 'const user = () => ({ name: "Rohit", age: 20 });\nconsole.log(user());',
  },
  {
    icon: '🧺',
    title: 'Rest Operator',
    titleClass: 'card-title-amber',
    subtitle: 'Collect args',
    description: '...arr gathers any number of arguments into a real array.',
    code: 'function addNumber(...arr) {\n  let sum = 0;\n  for (const num of arr) sum += num;\n  return sum;\n}',
  },
  {
    icon: '💧',
    title: 'Spread & Rest',
    titleClass: 'card-title-pink',
    subtitle: 'Copy & destructure',
    description: '[...arr] copies; rest grabs the tail while destructuring.',
    code: 'const arr2 = [...arr];\nconst [first, second, ...third] = arr;',
  },
];

const CALLBACK_CARDS = [
  {
    icon: '⚡',
    title: 'IIFE',
    titleClass: 'card-title-purple',
    subtitle: 'ii.js',
    description: 'Immediately Invoked Function Expression — define and run in one go.',
    code: '(function hello() {\n  console.log("Hello Ji");\n})();',
  },
  {
    icon: '🔁',
    title: 'Callbacks',
    titleClass: 'card-title-cyan',
    subtitle: 'Function as argument',
    description: 'meet(greet) vs meet(morning) — same meet, different behavior.',
    code: 'function meet(Callback) {\n  console.log("Hello Meet");\n  Callback();\n  console.log("I am done");\n}\nmeet(greet);',
  },
  {
    icon: '🛵',
    title: 'Real Callback',
    titleClass: 'card-title-green',
    subtitle: 'realCallback.js',
    description: 'Zomato-Blinkit merger — payment() runs, then hands off to the callback.',
    code: 'function payment(amount, Callback) {\n  console.log(amount, "Payment is happenning");\n  Callback();\n}\npayment(500, zomatoRestaurant);',
  },
  {
    icon: '🧪',
    title: 'Custom Method',
    titleClass: 'card-title-amber',
    subtitle: 'fourth.js',
    description: 'Attach your own function to an array — arr.sorter() just works.',
    code: 'arr.sorter = function () {\n  console.log("Hello Ji");\n};\narr.sorter();',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 08 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description: 'Date & Functions — timestamps, arrows, rest/spread, IIFE, callbacks.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Lecture08 Code',
    description: 'Date.js, functions.js, ii.js, realCallback.js — full functions deep dive.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'Functions — Chris',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'How To Create & Use Functions by Chris Courses — supplement for Lecture 08.',
    link: {
      href: 'https://www.youtube.com/watch?v=FOD408a0EzU',
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

export default function Day008() {
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
          <Link to="/day-007" className="day001-nav-btn day001-nav-home">
            ← Day 7
          </Link>
          <p className="day001-datetime">Thunder Day 8 · 24 Jul 2026</p>
          <Link to="/day-009" className="day001-nav-btn day001-nav-next">
            Day 9 →
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
                DAY 8 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">DATE & FUNCTIONS</p>
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
          <div className="day001-progress-bar" style={{ width: '8%' }} />
        </div>

        <p className="day001-summary">
          Day eight — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 08
          </a>
          . The Date object with its zero-based months and timestamps, then the three ways to build
          functions: declarations, expressions, and arrows — plus default params, rest/spread, IIFE,
          and callbacks in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Lecture08 on GitHub
          </a>
          . Callbacks are the doorway to async JavaScript.
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

        <CardSection icon="📅" title="DATE OBJECT" cards={DATE_BASICS} columns={3} />
        <CardSection icon="🧩" title="FUNCTION BASICS" cards={FUNCTION_BASICS} columns={3} />
        <CardSection icon="🏹" title="ARROWS, REST & SPREAD" cards={ARROW_AND_OPERATORS} columns={4} />
        <CardSection icon="🔁" title="IIFE & CALLBACKS" cards={CALLBACK_CARDS} columns={4} />
        <CardSection icon="📚" title="THUNDER LECTURE 08" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#JavaScript</span>
          <span>#Functions</span>
          <span>#Thunder</span>
          <span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
