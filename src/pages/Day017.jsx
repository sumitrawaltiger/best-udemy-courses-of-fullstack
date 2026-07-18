import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_HANDBOOK = 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'catch is unknown', text: 'anything can be thrown, so a caught value is unknown — narrow it before use' },
  { title: 'instanceof Error', text: 'the standard first check: narrow to Error to read message and stack safely' },
  { title: 'Custom error classes', text: 'extend Error for NotFoundError, ValidationError — typed, discriminable failures' },
  { title: 'Discriminated errors', text: 'a `name`/`code` field lets you switch over error kinds exhaustively' },
  { title: 'Result pattern', text: 'return { ok: true, value } | { ok: false, error } instead of throwing' },
  { title: 'Errors as values', text: 'the Result approach makes failure part of the type — callers must handle it' },
  { title: 'never for exhaustiveness', text: 'a never default guarantees every error case is handled' },
  { title: 'Rethrow safely', text: 'narrow, add context, and rethrow — don’t swallow unknown errors' },
  { title: 'Error cause', text: 'the `cause` option chains the original error for better diagnostics' },
  { title: 'Boundaries catch', text: 'handle errors where you can act — logging, UI messages, retries' },
];

const CATCHING = [
  {
    icon: '🎣', title: 'unknown In catch', titleClass: 'card-title-cyan', subtitle: 'Narrow First',
    description: 'Under strict settings a caught value is unknown because JavaScript can throw anything. Check the type before reading properties.',
    code: 'try { risky(); }\ncatch (e) {\n  if (e instanceof Error) console.log(e.message);\n  else console.log("unknown throw", e);\n}',
  },
  {
    icon: '🏷️', title: 'Custom Error Classes', titleClass: 'card-title-purple', subtitle: 'Typed Failures',
    description: 'Extend Error to model specific failures. Each class is a distinct type you can instanceof-check, carrying its own extra data.',
    code: 'class NotFoundError extends Error {\n  constructor(public id: number) {\n    super(`Missing ${id}`);\n    this.name = "NotFoundError";\n  }\n}',
  },
  {
    icon: '🔀', title: 'Discriminated Errors', titleClass: 'card-title-amber', subtitle: 'Switch On Kind',
    description: 'Give errors a literal name or code and switch over them. TypeScript narrows to the exact error type in each branch — like discriminated unions.',
    code: 'if (err instanceof NotFoundError) return 404;\nif (err instanceof ValidationError) return 400;',
  },
];

const RESULT = [
  {
    icon: '📦', title: 'The Result Type', titleClass: 'card-title-cyan', subtitle: 'Errors As Values',
    description: 'Instead of throwing, return a Result — a union of success and failure. The type forces every caller to handle the error path explicitly.',
    code: 'type Result<T, E = Error> =\n  | { ok: true; value: T }\n  | { ok: false; error: E };',
  },
  {
    icon: '↩️', title: 'Return, Don’t Throw', titleClass: 'card-title-blue', subtitle: 'Explicit Failure',
    description: 'A function that returns Result makes failure part of its signature. No hidden exceptions — the compiler reminds you to deal with error.',
    code: 'function parseAge(s: string): Result<number> {\n  const n = Number(s);\n  return isNaN(n) ? { ok: false, error: new Error("NaN") }\n                  : { ok: true, value: n };\n}',
  },
  {
    icon: '🧭', title: 'Consume A Result', titleClass: 'card-title-amber', subtitle: 'Narrow On ok',
    description: 'Check result.ok and TypeScript narrows to the right branch — value on success, error on failure. Clean, exhaustive handling every time.',
    code: 'const r = parseAge(input);\nif (r.ok) use(r.value);\nelse show(r.error.message);',
  },
  {
    icon: '✅', title: 'Exhaustiveness', titleClass: 'card-title-lime', subtitle: 'never Catches Gaps',
    description: 'When switching over error kinds, assign the leftover to never in the default. Add a new error later and forget to handle it — the compiler stops you.',
    code: 'default: { const _: never = err; throw err; }',
  },
];

const PRACTICE = [
  {
    icon: '🔗', title: 'Error cause', titleClass: 'card-title-cyan', subtitle: 'Chain Context',
    description: 'The Error cause option preserves the original error while adding context — invaluable for tracing a failure through layers of your app.',
    code: 'throw new Error("Load failed", { cause: err });',
  },
  {
    icon: '🚧', title: 'Handle At Boundaries', titleClass: 'card-title-purple', subtitle: 'Where You Can Act',
    description: 'Let errors bubble to a boundary that can respond — a route handler, a UI error boundary, a retry. Don’t bury them in the middle of logic.',
    code: '// route:\ntry { return await handler(); }\ncatch (e) { return toHttpError(e); }',
  },
  {
    icon: '🔁', title: 'Rethrow Safely', titleClass: 'card-title-amber', subtitle: 'Add, Don’t Swallow',
    description: 'If you can’t handle an error, narrow it, add context, and rethrow. Swallowing an unknown error hides the very bug you need to see.',
    code: 'catch (e) {\n  if (!(e instanceof Error)) throw e;\n  throw new AppError("step 2 failed", { cause: e });\n}',
  },
  {
    icon: '🔜', title: 'Next: TypeScript + Node', titleClass: 'card-title-lime', subtitle: 'Day 18 Preview',
    description: 'Tomorrow: TypeScript with Node.js — @types/node, typed scripts, reading env and files, and a small typed CLI.',
    link: { href: '/day-018', label: 'Go to Day 18 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Narrowing', titleClass: 'card-title-cyan', subtitle: 'TS Handbook',
    description: 'The narrowing chapter underpins error handling — instanceof, discriminated unions, and exhaustiveness with never all apply directly to errors.',
    link: { href: TS_HANDBOOK, label: 'Read Narrowing →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Model A Result',
    description: 'Write the Result type and a function that returns it, then consume it. See how failure becomes something the compiler makes you handle.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Solid error handling keeps React screens and Node services resilient. These patterns carry into Python and Java in later years too.',
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

export default function Day017() {
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
          <Link to="/day-016" className="day001-nav-btn day001-nav-prev">← Day 16</Link>
          <p className="day001-datetime">TypeScript Day 17</p>
          <Link to="/day-018" className="day001-nav-btn day001-nav-next">Day 18 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Errors</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 17 <span aria-hidden="true">🎣</span></h1>
              <p className="day001-day-theme">ERROR HANDLING PATTERNS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '17%' }} /></div>

        <p className="day001-summary">
          Day 17 makes failure type-safe. Since a caught error is <code>unknown</code>, I narrowed with{' '}
          <code>instanceof</code> and built <strong>custom error classes</strong> to model specific failures. Then
          the <strong>Result pattern</strong> — returning <code>{'{ ok, value | error }'}</code> instead of
          throwing — makes errors part of the type so callers must handle them. Plus <code>cause</code> for
          context and <code>never</code> for exhaustive handling. Robust, predictable failure.
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

        <CardSection icon="🎣" title="CATCHING & TYPING ERRORS" cards={CATCHING} columns={3} />
        <CardSection icon="📦" title="THE RESULT PATTERN" cards={RESULT} columns={4} />
        <CardSection icon="🧭" title="IN PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#ErrorHandling</span><span>#WebDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
