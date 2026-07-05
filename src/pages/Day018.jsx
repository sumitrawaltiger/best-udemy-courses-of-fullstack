import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture18-Callback-Hell-and-Promises-38e43ac5cab980358e38c75eae99dc6b?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture18';

const LEARNT_TODAY = [
  {
    title: 'Callback hell',
    text: 'nesting placeOrder → prepareOrder → pickUpOrder → deliverOrder builds a pyramid of doom',
  },
  {
    title: 'Why it hurts',
    text: 'deep indentation kills readability and breaks DRY — hard to follow and maintain',
  },
  {
    title: 'Promise states',
    text: 'a Promise is pending, then settles as fulfilled or rejected',
  },
  {
    title: 'then / catch / finally',
    text: '.then handles success, .catch handles errors, .finally always runs',
  },
  {
    title: 'response.ok',
    text: 'check it and throw so a failed request lands in .catch',
  },
  {
    title: 'Creating a Promise',
    text: 'new Promise((resolve, reject) => ...) — resolve on success, reject on failure',
  },
  {
    title: 'Promise chaining',
    text: 'each Zomato step returns a Promise; .then links them into a flat, readable chain',
  },
  {
    title: 'async / await',
    text: 'await pauses until a Promise resolves — the flow reads top to bottom',
  },
  {
    title: 'async returns a Promise',
    text: 'every async function wraps its return value in a Promise',
  },
  {
    title: 'try / catch',
    text: 'wrap await in try/catch to handle errors the async way',
  },
];

const CALLBACK_HELL = [
  {
    icon: '🍔',
    title: 'The Zomato Flow',
    titleClass: 'card-title-cyan',
    subtitle: 'callback.js',
    description: 'Four steps that each finish asynchronously via setTimeout.',
    code: '// placeOrder → prepareOrder\n// → pickUpOrder → deliverOrder\n// each waits ~1s (setTimeout)',
  },
  {
    icon: '🌋',
    title: 'The Pyramid of Doom',
    titleClass: 'card-title-amber',
    subtitle: 'Nested callbacks',
    description: 'Each step nests in the previous callback — indentation spirals.',
    code: 'placeOrder(orderDetail, (o) => {\n  prepareOrder(o, (o) => {\n    pickUpOrder(o, (o) => {\n      deliverOrder(o);\n    });\n  });\n});',
  },
  {
    icon: '🧯',
    title: 'DRY & Readable',
    titleClass: 'card-title-green',
    subtitle: 'First principle',
    description: 'Callback hell breaks readability — promises are the fix.',
    code: '// hard to read, hard to error-handle\n// → refactor to promises',
  },
];

const PROMISES = [
  {
    icon: '🚦',
    title: 'Promise States',
    titleClass: 'card-title-cyan',
    subtitle: 'promises.js',
    description: 'pending → fulfilled or rejected — a value that arrives later.',
    code: '// pending, fulfilled, rejected\nconst p1 = fetch(url); // Promise<pending>',
  },
  {
    icon: '🔗',
    title: 'then / catch / finally',
    titleClass: 'card-title-green',
    subtitle: 'Handlers',
    description: '.then for success, .catch for errors, .finally always runs.',
    code: 'fetch(url)\n  .then((res) => {\n    if (!res.ok) throw new Error("Failed");\n    return res.json();\n  })\n  .then((data) => console.log(data))\n  .catch((e) => console.log(e))\n  .finally(() => console.log("done"));',
  },
  {
    icon: '🏗️',
    title: 'Creating a Promise',
    titleClass: 'card-title-amber',
    subtitle: 'resolve / reject',
    description: 'Wrap async work — resolve on success, reject on failure.',
    code: 'const p1 = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve({ name: "Rohit", age: 20 });\n  }, 1000);\n});\np1.then((res) => console.log(res));',
  },
];

const MODERN_ASYNC = [
  {
    icon: '⛓️',
    title: 'Promise Chaining',
    titleClass: 'card-title-cyan',
    subtitle: 'promiseZomato.js',
    description: 'Each step returns a Promise; .then flattens the pyramid.',
    code: 'placeOrder(orderDetail)\n  .then((o) => prepareOrder(o))\n  .then((o) => pickUpOrder(o))\n  .then((o) => deliverOrder(o))\n  .then((o) => console.log(o));',
  },
  {
    icon: '✨',
    title: 'async / await',
    titleClass: 'card-title-green',
    subtitle: 'asyncAwait.js',
    description: 'await pauses until each Promise resolves — reads like sync code.',
    code: 'async function order() {\n  const p1 = await placeOrder(orderDetail);\n  const p2 = await prepareOrder(p1);\n  const p3 = await pickUpOrder(p2);\n  const p4 = await deliverOrder(p3);\n  console.log(p4);\n}\norder();',
  },
  {
    icon: '🛡️',
    title: 'try / catch + fetch',
    titleClass: 'card-title-amber',
    subtitle: 'asyns.js',
    description: 'Wrap await in try/catch; every async function returns a Promise.',
    code: 'async function github() {\n  try {\n    const res = await fetch(url);\n    if (!res.ok) throw new Error("Unable to fetch");\n    const data = await res.json();\n    console.log(data);\n  } catch (error) {\n    console.log(error);\n  }\n}',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 18 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description: 'Callback Hell & Promises — from the pyramid of doom to async/await.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Lecture18 Code',
    description: 'callback.js, promises.js, promiseZomato.js, asyncAwait.js, asyns.js.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'Async JS Explained',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Callbacks, Promises, Async Await by Traversy Media — supplement for Lecture 18.',
    link: {
      href: 'https://www.youtube.com/watch?v=PoRJizFvM7s',
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

export default function Day018() {
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
        1,
        (window.innerHeight - pad) / wrap.scrollHeight,
        (window.innerWidth - pad) / wrap.scrollWidth,
      );

      if (scale < 0.99) {
        wrap.style.transform = `scale(${scale})`;
        wrap.style.transformOrigin = 'top center';
        if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
      }
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
          <Link to="/day-017" className="day001-nav-btn day001-nav-home">
            ← Day 17
          </Link>
          <p className="day001-datetime">📅 22nd July 2026 · Thunder Day 18 · 82 days left</p>
          <Link to="/day-019" className="day001-nav-btn day001-nav-next">
            Day 19 →
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
                DAY 18 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">CALLBACK HELL & PROMISES</p>
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
          <div className="day001-progress-bar" style={{ width: '18%' }} />
        </div>

        <p className="day001-summary">
          Day eighteen — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 18
          </a>
          . The async journey: a Zomato order modelled four ways. Nested callbacks build the dreaded
          pyramid of doom, Promises (pending → fulfilled → rejected) with then/catch/finally flatten
          it, and async/await makes it read like plain sequential code — all traced through{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Lecture18 on GitHub
          </a>
          . From callback hell to clean async.
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

        <CardSection icon="🌋" title="CALLBACK HELL" cards={CALLBACK_HELL} columns={3} />
        <CardSection icon="🚦" title="PROMISES" cards={PROMISES} columns={3} />
        <CardSection icon="✨" title="CHAINING & ASYNC/AWAIT" cards={MODERN_ASYNC} columns={3} />
        <CardSection icon="📚" title="THUNDER LECTURE 18" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#JavaScript</span>
          <span>#Promises</span>
          <span>#AsyncAwait</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
