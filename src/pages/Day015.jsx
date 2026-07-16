import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const MDN_PROMISE = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise';
const MDN_FETCH = 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'Promise<T>', text: 'a Promise carries a value type — `Promise<User>` resolves to a User' },
  { title: 'async returns a Promise', text: 'an async function always returns Promise<T>, even for a plain value' },
  { title: 'await unwraps it', text: 'await a Promise<T> and you get a T — typed and ready to use' },
  { title: 'Awaited<T>', text: 'the utility that unwraps (even nested) Promises to their value type' },
  { title: 'Errors are unknown', text: 'in a catch block the error is unknown — narrow it before use' },
  { title: 'Promise.all', text: 'runs promises in parallel; the result tuple is precisely typed' },
  { title: 'res.json() is any', text: 'fetch’s .json() returns Promise<any> — a hole in type safety' },
  { title: 'Generic fetch wrapper', text: 'a `getJSON<T>` helper returns Promise<T> so responses are typed' },
  { title: 'Check res.ok', text: 'fetch only rejects on network errors — check response.ok for HTTP errors' },
  { title: 'Type ≠ runtime check', text: 'annotations are erased — the server could still lie, so validate at the edge' },
];

const PROMISES = [
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
    icon: '🎣', title: 'catch is unknown', titleClass: 'card-title-amber', subtitle: 'Narrow Before Use',
    description: 'Under strict settings the caught error is unknown, because anything can be thrown. Narrow with instanceof before reading a message.',
    code: 'try { await getUser(); }\ncatch (e) {\n  if (e instanceof Error) console.log(e.message);\n}',
  },
];

const COMBINE = [
  {
    icon: '🧵', title: 'Promise.all', titleClass: 'card-title-cyan', subtitle: 'Parallel, Typed Tuple',
    description: 'Promise.all runs promises concurrently and resolves to a precisely typed tuple — position 0 is the first promise’s type, and so on.',
    code: 'const [user, posts] = await Promise.all([\n  getUser(),   // Promise<User>\n  getPosts(),  // Promise<Post[]>\n]); // [User, Post[]]',
  },
  {
    icon: '🧮', title: 'Promise.allSettled', titleClass: 'card-title-blue', subtitle: 'Never Rejects',
    description: 'allSettled resolves with a status per promise. TypeScript types each result as fulfilled (with value) or rejected (with reason) — narrow on status.',
    code: 'const r = await Promise.allSettled([getUser()]);\nif (r[0].status === "fulfilled") r[0].value;',
  },
  {
    icon: '⏳', title: 'Awaited<T>', titleClass: 'card-title-amber', subtitle: 'Unwrap In Types',
    description: 'The Awaited utility resolves a Promise’s value type at the type level, even through nesting — built with the conditionals and infer from Day 13.',
    code: 'type R = Awaited<ReturnType<typeof getUser>>; // User',
  },
  {
    icon: '⏱️', title: 'Typed Delays', titleClass: 'card-title-lime', subtitle: 'Promisify Timers',
    description: 'Wrap setTimeout in a Promise<void> to get a clean, awaitable sleep — the typed building block for retries and polling.',
    code: 'const sleep = (ms: number) =>\n  new Promise<void>((res) => setTimeout(res, ms));\nawait sleep(500);',
  },
];

const FETCH = [
  {
    icon: '🕳️', title: 'The any Hole', titleClass: 'card-title-cyan', subtitle: 'res.json()',
    description: 'Fetch’s .json() resolves to any, so everything downstream loses checking. Left unfixed, one wrong field crashes at runtime — exactly what TS should prevent.',
    code: 'const res = await fetch("/api/user");\nconst data = await res.json(); // any 😬',
  },
  {
    icon: '🧰', title: 'Generic getJSON<T>', titleClass: 'card-title-purple', subtitle: 'Type The Result',
    description: 'A tiny generic wrapper casts the parsed body to T and returns Promise<T>. Every caller now gets a typed response with autocomplete and checks.',
    code: 'async function getJSON<T>(url: string): Promise<T> {\n  const res = await fetch(url);\n  if (!res.ok) throw new Error(`HTTP ${res.status}`);\n  return res.json() as Promise<T>;\n}\nconst user = await getJSON<User>("/api/user");',
  },
  {
    icon: '⚠️', title: 'Types Aren’t Checks', titleClass: 'card-title-amber', subtitle: 'The Server Can Lie',
    description: 'getJSON<T> trusts the server. Annotations are erased at runtime, so a wrong payload passes silently. Validating untrusted data is tomorrow’s topic.',
    code: '// Day 16: validate with a Zod schema\nconst user = UserSchema.parse(raw);',
  },
  {
    icon: '🔜', title: 'Next: Runtime Validation', titleClass: 'card-title-lime', subtitle: 'Day 16 Preview',
    description: 'Tomorrow: closing the trust gap with Zod — schemas that validate real data and infer the type from one source of truth.',
    link: { href: '/day-016', label: 'Go to Day 16 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Promise (MDN)', titleClass: 'card-title-cyan', subtitle: 'The Foundation',
    description: 'The definitive reference for Promises — states, chaining, all/allSettled/race. TypeScript simply adds the value types on top.',
    link: { href: MDN_PROMISE, label: 'Read Promise on MDN →', external: true },
  },
  {
    icon: '🌐', title: 'Fetch API (MDN)', titleClass: 'card-title-purple', subtitle: 'Requests & Responses',
    description: 'How fetch, Response, and Request work — status, .ok, headers, and body parsing. TypeScript types layer neatly on top of these.',
    link: { href: MDN_FETCH, label: 'Read the Fetch API →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-amber', subtitle: 'Build getJSON',
    description: 'Write the generic wrapper and call it with different interfaces to watch the return type change. The JSON boundary becomes tangible.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
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

export default function Day015() {
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
          <Link to="/day-014" className="day001-nav-btn day001-nav-prev">← Day 14</Link>
          <p className="day001-datetime">TypeScript Day 15 · 31 Jul 2026</p>
          <Link to="/day-016" className="day001-nav-btn day001-nav-next">Day 16 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Async · APIs</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 15 <span aria-hidden="true">⚡</span></h1>
              <p className="day001-day-theme">ASYNC TYPESCRIPT & TYPED fetch</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '15%' }} /></div>

        <p className="day001-summary">
          Day 15 types asynchronous code and the network. I worked with <code>Promise&lt;T&gt;</code>, saw that{' '}
          <strong>async</strong> functions always return a Promise, and used <strong>await</strong> to unwrap the
          typed value — handling errors where <code>catch</code> gives <code>unknown</code> and running work in
          parallel with <strong>Promise.all</strong>. Then I closed the biggest hole in type safety: since{' '}
          <code>res.json()</code> returns <code>any</code>, I built a generic{' '}
          <strong>getJSON&lt;T&gt;</strong> wrapper that checks <code>res.ok</code> and returns{' '}
          <code>Promise&lt;T&gt;</code>. The caveat: types are erased, so untrusted data still needs runtime
          validation — tomorrow.
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

        <CardSection icon="🔮" title="PROMISES & await" cards={PROMISES} columns={3} />
        <CardSection icon="🧵" title="COMBINATORS & UNWRAPPING" cards={COMBINE} columns={4} />
        <CardSection icon="🌐" title="A TYPED fetch WRAPPER" cards={FETCH} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Async</span><span>#APIs</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
