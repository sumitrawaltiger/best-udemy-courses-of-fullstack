import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture-19-Closure-and-This-Keyword-38f43ac5cab9806e98f2f95649ffb759?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture19';

const LEARNT_TODAY = [
  {
    title: 'globalThis',
    text: 'window in the browser, global in Node — globalThis points to whichever it is',
  },
  {
    title: 'this in a function',
    text: 'non-strict → global object; strict mode → undefined (both browser & Node)',
  },
  {
    title: 'this in a method',
    text: 'points to the object that invoked it — the thing before the dot',
  },
  {
    title: 'call & apply',
    text: 'borrow a function for any object — call takes args listed, apply takes an array',
  },
  {
    title: 'bind',
    text: 'returns a new function permanently tied to a given this and preset args',
  },
  {
    title: 'Arrow functions & this',
    text: 'arrows have no own this — they borrow it from the nearest outer scope',
  },
  {
    title: 'setInterval fix',
    text: 'use an arrow inside setInterval so this.timer still points to the object',
  },
  {
    title: 'Closures',
    text: 'an inner function remembers its outer variables even after the outer returns',
  },
  {
    title: 'Counter pattern',
    text: 'counter() returns increment, which keeps its own private count across calls',
  },
  {
    title: 'Closures for privacy',
    text: 'the bank pattern hides balance in a closure — only credit/debit can touch it',
  },
];

const THIS_KEYWORD = [
  {
    icon: '🌍',
    title: 'globalThis',
    titleClass: 'card-title-cyan',
    subtitle: 'first.js',
    description: 'window (browser) or global (Node) — globalThis is the portable name.',
    code: 'console.log(globalThis);\n// window in Chrome, global in Node',
  },
  {
    icon: '🎯',
    title: 'this Binding Rules',
    titleClass: 'card-title-green',
    subtitle: 'Depends on the call',
    description: 'In a method → the object; in a plain function → global (or undefined in strict).',
    code: 'const user1 = {\n  name: "Rohit",\n  greet() { console.log(this); }\n};\nuser1.greet(); // this === user1',
  },
  {
    icon: '🔧',
    title: 'call, apply & bind',
    titleClass: 'card-title-amber',
    subtitle: 'Set this yourself',
    description: 'Borrow a function for any object; bind returns a reusable bound copy.',
    code: 'increment.call(user1, 30, 300);\nincrement.apply(user1, [30, 300]);\nconst ref = increment.bind(user1, 30, 300);\nref();',
  },
  {
    icon: '🏹',
    title: 'Arrow & this',
    titleClass: 'card-title-pink',
    subtitle: 'No own this',
    description: 'Arrows borrow this from the outer scope — great inside setInterval.',
    code: 'stopWatch: function () {\n  setInterval(() => {\n    this.timer++; // this = the object\n  }, 1000);\n}',
  },
];

const CLOSURES = [
  {
    icon: '🪆',
    title: 'Lexical Scope',
    titleClass: 'card-title-cyan',
    subtitle: 'closures.js',
    description: 'Inner functions see outer variables; lookups walk up the scope chain.',
    code: 'let a = 10;\nfunction greet() {\n  let a = 90;\n  function meet() { console.log(a); }\n  meet(); // 90\n}',
  },
  {
    icon: '🔒',
    title: 'What Is a Closure',
    titleClass: 'card-title-green',
    subtitle: 'Remembered scope',
    description: 'The returned function keeps its outer variables alive after counter() ends.',
    code: 'function counter() {\n  let count = 0;\n  function increment() { count++; console.log(count); }\n  return increment;\n}\nconst c = counter();\nc(); // 1\nc(); // 2',
  },
  {
    icon: '🎁',
    title: 'Higher-Order Functions',
    titleClass: 'card-title-amber',
    subtitle: 'hof.js',
    description: 'A function that returns a function — call it in two steps or at once.',
    code: 'function increment(amount) {\n  return function mul(num) {\n    console.log(num * amount);\n  };\n}\nincrement(30)(10); // 300',
  },
];

const PRIVACY = [
  {
    icon: '🏦',
    title: 'The Privacy Problem',
    titleClass: 'card-title-cyan',
    subtitle: 'example.js',
    description: 'A plain object exposes balance — anyone can overwrite it with junk.',
    code: 'user1.balance = "Rohit"; // oops, corrupted\nuser1.checkBalance(); // "Rohit"',
  },
  {
    icon: '🛡️',
    title: 'Closures Hide Data',
    titleClass: 'card-title-green',
    subtitle: 'Private balance',
    description: 'balance lives inside bank() — only the returned methods can reach it.',
    code: 'function bank() {\n  let balance = 200;\n  return {\n    credit(a) { if (typeof a === "number") balance += a; },\n    checkBalance() { console.log(balance); }\n  };\n}',
  },
  {
    icon: '✅',
    title: 'Controlled Access',
    titleClass: 'card-title-amber',
    subtitle: 'Only via methods',
    description: 'No way to set balance directly — every change goes through validation.',
    code: 'const user = bank();\nuser.credit(200);\nuser.checkBalance(); // 400\n// user.balance -> undefined (private!)',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 19 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description: 'Closures & the this keyword — scope, call/apply/bind, and data privacy.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Lecture19 Code',
    description: 'first.js this, closures.js, hof.js, example.js bank privacy pattern.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'Closures in 7 Min',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Learn Closures In 7 Minutes by Web Dev Simplified — supplement for Lecture 19.',
    link: {
      href: 'https://www.youtube.com/watch?v=3a0I8ICR1Vg',
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

export default function Day019() {
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
          <Link to="/day-018" className="day001-nav-btn day001-nav-home">
            ← Day 18
          </Link>
          <p className="day001-datetime">Thunder Day 19 · 4 Aug 2026</p>
          <Link to="/day-020" className="day001-nav-btn day001-nav-next">
            Day 20 →
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
                DAY 19 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">CLOSURES & THE this KEYWORD</p>
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
          <div className="day001-progress-bar" style={{ width: '19%' }} />
        </div>

        <p className="day001-summary">
          Day nineteen — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 19
          </a>
          . Two of JavaScript&apos;s trickiest topics, demystified: how <code>this</code> is decided
          by <em>how</em> a function is called (method, plain, strict, or arrow) and how to steer it
          with call/apply/bind — plus closures, where an inner function remembers its outer scope, all
          the way to hiding private data in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Lecture19 on GitHub
          </a>
          . Closures power the counter and the private-balance bank.
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

        <CardSection icon="🎯" title="THE this KEYWORD" cards={THIS_KEYWORD} columns={4} />
        <CardSection icon="🔒" title="CLOSURES & HOF" cards={CLOSURES} columns={3} />
        <CardSection icon="🏦" title="CLOSURES FOR PRIVACY" cards={PRIVACY} columns={3} />
        <CardSection icon="📚" title="THUNDER LECTURE 19" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#JavaScript</span>
          <span>#Closures</span>
          <span>#thisKeyword</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
