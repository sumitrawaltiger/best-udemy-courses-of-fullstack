import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const MDN_PROMISE = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'Promise<T>', text: 'a Promise carries a value type — `Promise<User>` resolves to a User' },
  { title: 'async returns a Promise', text: 'an async function always returns Promise<T>, even if you return a plain value' },
  { title: 'await unwraps it', text: 'await a Promise<T> and you get a T — typed and ready to use' },
  { title: 'Typing async functions', text: 'annotate the return as Promise<T> or let TS infer it from the body' },
  { title: 'Awaited<T>', text: 'the utility that unwraps (even nested) Promises to their value type' },
  { title: 'Errors are unknown', text: 'in a catch block the error is unknown — narrow it before use' },
  { title: 'Promise.all', text: 'runs promises in parallel; the result tuple is precisely typed' },
  { title: 'Promise.allSettled', text: 'never rejects — each result is typed as fulfilled or rejected' },
  { title: 'Typed setTimeout', text: 'wrap timers in a Promise<void> for clean, typed delays' },
  { title: 'No floating promises', text: 'await or handle every promise — lint rules catch forgotten ones' },
];

const BASICS = [
  {
    icon: '🔮', title: 'Promise<T>', titleClass: 'card-title-cyan', subtitle: 'A Future Value, Typed',
    description: 'A Promise is generic over the value it will resolve to. Typing it means everything downstream — .then callbacks and await — is fully checked.',
    code: 'const p: Promise<number> = Promise.resolve(42);\np.then((n) => n.toFixed(2)); // n is number',
  },
  {
    icon: '⚡', title: 'async / await', titleClass: 'card-title-purple', subtitle: 'Unwrap Cleanly',
    description: 'An async function always returns a Promise. await pauses until it resolves and hands you the typed value — no manual .then chains.',
    code: 'async function getUser(): Promise<User> {\n  const res = await fetch("/api/me");\n  return res.json();\n}\nconst u = await getUser(); // u: User',
  },
  {
    icon: '⏳', title: 'Awaited<T>', titleClass: 'card-title-amber', subtitle: 'Unwrap In Types',
    description: 'The Awaited utility resolves a Promise’s value type at the type level, even through nesting — handy for typing wrappers around async code.',
    code: 'type R = Awaited<ReturnType<typeof getUser>>; // User',
  },
];

const ERRORS = [
  {
    icon: '🎣', title: 'catch is unknown', titleClass: 'card-title-cyan', subtitle: 'Narrow Before Use',
    description: 'Under strict settings the caught error is unknown, because anything can be thrown. Narrow with instanceof before reading a message.',
    code: 'try {\n  await getUser();\n} catch (e) {\n  if (e instanceof Error) console.log(e.message);\n}',
  },
  {
    icon: '🧵', title: 'Promise.all', titleClass: 'card-title-blue', subtitle: 'Parallel, Typed Tuple',
    description: 'Promise.all runs promises concurrently and resolves to a precisely typed tuple — position 0 is the first promise’s type, and so on.',
    code: 'const [user, posts] = await Promise.all([\n  getUser(),   // Promise<User>\n  getPosts(),  // Promise<Post[]>\n]); // [User, Post[]]',
  },
  {
    icon: '🧮', title: 'Promise.allSettled', titleClass: 'card-title-amber', subtitle: 'Never Rejects',
    description: 'allSettled resolves with a status per promise. TypeScript types each result as fulfilled (with value) or rejected (with reason) — narrow on status.',
    code: 'const r = await Promise.allSettled([getUser()]);\nif (r[0].status === "fulfilled") r[0].value;',
  },
  {
    icon: '⏱️', title: 'Typed Delays', titleClass: 'card-title-lime', subtitle: 'Promisify Timers',
    description: 'Wrap setTimeout in a Promise<void> to get a clean, awaitable sleep — the typed building block for retries and polling.',
    code: 'const sleep = (ms: number) =>\n  new Promise<void>((res) => setTimeout(res, ms));\nawait sleep(500);',
  },
];

const PATTERNS = [
  {
    icon: '🔁', title: 'Sequential vs Parallel', titleClass: 'card-title-cyan', subtitle: 'Await Wisely',
    description: 'Awaiting in a loop runs serially; Promise.all runs in parallel. TypeScript types both the same, but the performance difference is real.',
    code: '// parallel — faster\nconst results = await Promise.all(ids.map(getById));',
  },
  {
    icon: '🚫', title: 'No Floating Promises', titleClass: 'card-title-purple', subtitle: 'Handle Every One',
    description: 'A promise you never await or catch can swallow errors silently. Lint rules (no-floating-promises) flag them so nothing slips through.',
    code: 'void logAsync(); // explicit "I’m ignoring this"',
  },
  {
    icon: '🌐', title: 'Toward Typed fetch', titleClass: 'card-title-amber', subtitle: 'A Taste Of Day 15',
    description: 'res.json() returns Promise<any>. Tomorrow we make it Promise<T> with a typed fetch wrapper so API data is safe from the first line.',
    code: 'const data = await res.json(); // any 😬 — fix tomorrow',
  },
  {
    icon: '🔜', title: 'Next: Typed fetch & APIs', titleClass: 'card-title-lime', subtitle: 'Day 15 Preview',
    description: 'Tomorrow: a generic, typed fetch wrapper, modelling API responses with interfaces, and safely turning JSON into typed data.',
    link: { href: '/day-015', label: 'Go to Day 15 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Promise (MDN)', titleClass: 'card-title-cyan', subtitle: 'The Foundation',
    description: 'The definitive JavaScript reference for Promises — states, chaining, all/allSettled/race. TypeScript simply adds the value types on top.',
    link: { href: MDN_PROMISE, label: 'Read Promise on MDN →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Await In The Browser',
    description: 'Write an async function, await it, and hover the result to confirm the unwrapped type. Then throw inside and check the unknown in catch.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Every data fetch, timer, and API call in React/Next.js is async — typed promises keep all of it safe and predictable.',
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

export default function Day014() {
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
          <Link to="/day-013" className="day001-nav-btn day001-nav-prev">← Day 13</Link>
          <p className="day001-datetime">TypeScript Day 14 · 30 Jul 2026</p>
          <Link to="/day-015" className="day001-nav-btn day001-nav-next">Day 15 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Async</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 14 <span aria-hidden="true">⚡</span></h1>
              <p className="day001-day-theme">ASYNC TYPESCRIPT — PROMISES & await</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '14%' }} /></div>

        <p className="day001-summary">
          Day 14 types asynchronous code. I worked with <code>Promise&lt;T&gt;</code>, saw that{' '}
          <strong>async</strong> functions always return a Promise, and used <strong>await</strong> to unwrap the
          typed value. I handled errors where <code>catch</code> gives <code>unknown</code>, ran work in parallel
          with <strong>Promise.all</strong> (typed tuples) and <strong>allSettled</strong>, and built a typed{' '}
          <code>sleep</code>. Async is now as type-safe as everything else.
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

        <CardSection icon="🔮" title="PROMISES & await" cards={BASICS} columns={3} />
        <CardSection icon="🎣" title="ERRORS & COMBINATORS" cards={ERRORS} columns={4} />
        <CardSection icon="🧭" title="PATTERNS" cards={PATTERNS} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Async</span><span>#WebDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
