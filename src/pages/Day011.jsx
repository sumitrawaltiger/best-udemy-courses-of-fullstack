import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const MDN_PROMISE = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise';
const TS_UNKNOWN_CATCH = 'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html#defaulting-to-the-unknown-type-in-catch-variables---useunknownincatchvariables';

const LEARNT_TODAY = [
  { title: 'Promise<T>', text: 'an async value carries a type — Promise<User> resolves to a User' },
  { title: 'async / await', text: 'an async function always returns a Promise; await unwraps it to the value' },
  { title: 'Typed fetch', text: 'fetch returns any JSON — annotate or validate the parsed result to regain safety' },
  { title: 'Errors are unknown', text: 'in a catch, the error is unknown — narrow it before reading .message' },
  { title: 'Parallel with Promise.all', text: 'run independent async calls together and get a typed tuple back' },
  { title: 'Result vs throw', text: 'return a typed result object, or throw — pick one convention and keep it' },
  { title: 'Await in loops', text: 'sequential await is slow; map to promises and Promise.all when order doesn’t matter' },
  { title: 'Never lose the type', text: 'validate external data (Zod) so async boundaries stay type-safe end to end' },
];

const ASYNC = [
  {
    icon: '⏳', title: 'Promise<T> & async', titleClass: 'card-title-cyan', subtitle: 'Typed Async',
    description:
      'A Promise carries the type it resolves to. An async function’s return is wrapped in a Promise automatically, and await unwraps it — the types line up on both sides.',
    code: 'async function getUser(id: number): Promise<User> {\n  const res = await fetch(`/users/${id}`);\n  return res.json();\n}\nconst u: User = await getUser(1);',
  },
  {
    icon: '🌐', title: 'Typing fetch', titleClass: 'card-title-purple', subtitle: 'JSON Is any',
    description:
      'res.json() returns any, quietly re-opening a hole. Annotate the result, or better, validate it with a schema so bad API data is caught at the boundary, not deep in your code.',
    code: 'const data = await res.json() as User; // trusts blindly\n// safer:\nconst data = UserSchema.parse(await res.json());',
  },
];

const CONTROL = [
  {
    icon: '⚠️', title: 'Errors Are unknown', titleClass: 'card-title-cyan', subtitle: 'Narrow Before Use',
    description:
      'With modern settings, a caught error is typed unknown — because anything can be thrown. Check it’s an Error before reading .message, keeping error handling honest.',
    code: 'try { await risky(); }\ncatch (e) {\n  if (e instanceof Error) console.log(e.message);\n  else console.log("unknown error");\n}',
  },
  {
    icon: '🔀', title: 'Run In Parallel', titleClass: 'card-title-purple', subtitle: 'Promise.all',
    description:
      'When async calls don’t depend on each other, fire them together with Promise.all and get a fully typed tuple back — far faster than awaiting one at a time.',
    code: 'const [user, posts] = await Promise.all([\n  getUser(1),\n  getPosts(1),\n]); // types preserved per position',
  },
  {
    icon: '📦', title: 'Result Or Throw', titleClass: 'card-title-amber', subtitle: 'One Convention',
    description:
      'Either throw on failure and catch upstream, or return a typed result union ({ ok } | { error }). Both are fine — the key is picking one and applying it consistently.',
    code: 'type Result<T> =\n  | { ok: true; value: T }\n  | { ok: false; error: string };',
  },
];

const RESOURCES = [
  {
    icon: '📗', title: 'Promises (MDN)', titleClass: 'card-title-cyan', subtitle: 'The Model',
    description:
      'The core Promise semantics TypeScript types — then/catch, chaining, Promise.all/allSettled and how async/await maps onto them.',
    link: { href: MDN_PROMISE, label: 'Open MDN Promise →', external: true },
  },
  {
    icon: '⚠️', title: 'unknown In catch', titleClass: 'card-title-purple', subtitle: 'Handbook',
    description:
      'Why catch variables default to unknown and how useUnknownInCatchVariables makes error handling safer — the exact rationale.',
    link: { href: TS_UNKNOWN_CATCH, label: 'Open the release note →', external: true },
  },
  {
    icon: '🔜', title: 'Next: React + TS', titleClass: 'card-title-amber', subtitle: 'Day 12 Preview',
    description:
      'Tomorrow — TypeScript meets React: a Vite + React + TS project, .tsx files, JSX, and typing your very first component.',
    link: { href: '/day-012', label: 'Go to Day 12 →' },
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

export default function Day011() {
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
          <Link to="/day-010" className="day001-nav-btn day001-nav-prev">← Day 10</Link>
          <p className="day001-datetime">TypeScript Day 11 · 11 Jan 2027</p>
          <Link to="/day-012" className="day001-nav-btn day001-nav-next">Day 12 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Async</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 11 <span aria-hidden="true">⏳</span></h1>
              <p className="day001-day-theme">ASYNC TYPESCRIPT</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '11%' }} /></div>

        <p className="day001-summary">
          Halfway. Async code stays typed: a <strong>Promise&lt;T&gt;</strong> carries the value it resolves to, an{' '}
          <strong>async</strong> function always returns one, and <strong>await</strong> unwraps it. Watch the
          boundaries — <code>res.json()</code> returns <code>any</code>, so annotate or <strong>validate</strong> it;
          and a caught error is <strong>unknown</strong>, so narrow with <code>instanceof Error</code> before reading{' '}
          <code>.message</code>. Run independent calls together with <strong>Promise.all</strong> for a typed tuple,
          and pick one failure convention — <em>throw</em> or a typed <em>result</em> union. <em>Next: React with
          TypeScript.</em>
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

        <CardSection icon="⏳" title="PROMISES & FETCH" cards={ASYNC} columns={2} />
        <CardSection icon="🔀" title="ERRORS & PARALLELISM" cards={CONTROL} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#async</span><span>#Promises</span>
        </footer>
      </div>
    </div>
  );
}
