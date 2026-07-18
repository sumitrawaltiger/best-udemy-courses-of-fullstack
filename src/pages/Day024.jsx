import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const REACT_EFFECT = 'https://react.dev/reference/react/useEffect';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'useEffect basics', text: 'run side effects after render — subscriptions, timers, data fetching' },
  { title: 'Dependency array', text: 'the deps control when the effect re-runs — [] means once on mount' },
  { title: 'Cleanup function', text: 'return a function to tear down subscriptions and timers' },
  { title: 'Typed cleanup', text: 'the return type is `void | (() => void)` — TS keeps it honest' },
  { title: 'Async in effects', text: 'you can’t make the effect async directly — call an inner async function' },
  { title: 'useRef for DOM', text: 'useRef<HTMLInputElement>(null) — a typed handle to an element' },
  { title: 'useRef for values', text: 'a mutable box that survives renders without causing re-renders' },
  { title: 'ref null check', text: 'ref.current can be null until mounted — narrow before using' },
  { title: 'AbortController', text: 'cancel fetches in cleanup to avoid setting state after unmount' },
  { title: 'Effects are last resort', text: 'prefer derived values and event handlers over effects when possible' },
];

const EFFECTS = [
  {
    icon: '🌀', title: 'useEffect', titleClass: 'card-title-cyan', subtitle: 'Side Effects',
    description: 'useEffect runs code after the render is painted — the place for subscriptions, timers, and syncing with external systems. The deps array controls re-runs.',
    code: 'useEffect(() => {\n  document.title = `Count: ${count}`;\n}, [count]);',
  },
  {
    icon: '🧹', title: 'Cleanup', titleClass: 'card-title-purple', subtitle: 'Tear Down',
    description: 'Return a cleanup function to undo the effect — remove listeners, clear intervals. React runs it before the next effect and on unmount.',
    code: 'useEffect(() => {\n  const id = setInterval(tick, 1000);\n  return () => clearInterval(id);\n}, []);',
  },
  {
    icon: '⚡', title: 'Async Effects', titleClass: 'card-title-amber', subtitle: 'The Right Pattern',
    description: 'An effect can’t be async (it must return cleanup or nothing). Define an async function inside and call it — clean and correctly typed.',
    code: 'useEffect(() => {\n  (async () => { setData(await getData()); })();\n}, []);',
  },
];

const REFS = [
  {
    icon: '🎯', title: 'DOM Refs', titleClass: 'card-title-cyan', subtitle: 'Typed Element Handle',
    description: 'useRef<HTMLInputElement>(null) gives a typed handle to a DOM node. Attach it via ref and TypeScript knows the element’s exact API.',
    code: 'const inputRef = useRef<HTMLInputElement>(null);\n<input ref={inputRef} />;\ninputRef.current?.focus();',
  },
  {
    icon: '🚧', title: 'Null Until Mounted', titleClass: 'card-title-blue', subtitle: 'Narrow current',
    description: 'ref.current is null before the element mounts. Optional chaining or a guard makes access safe — TypeScript forces you to consider it.',
    code: 'if (inputRef.current) inputRef.current.value = "hi";',
  },
  {
    icon: '📦', title: 'Mutable Value Refs', titleClass: 'card-title-amber', subtitle: 'Survive Renders',
    description: 'A ref is also a mutable box that persists across renders without triggering one — perfect for timer ids, previous values, or instance data.',
    code: 'const renders = useRef(0);\nrenders.current++; // no re-render',
  },
  {
    icon: '🛑', title: 'AbortController', titleClass: 'card-title-lime', subtitle: 'Cancel In Cleanup',
    description: 'Abort in-flight fetches during cleanup so you never call setState on an unmounted component — a common, well-typed pattern.',
    code: 'useEffect(() => {\n  const c = new AbortController();\n  fetch(url, { signal: c.signal });\n  return () => c.abort();\n}, [url]);',
  },
];

const PRACTICE = [
  {
    icon: '📋', title: 'Get Deps Right', titleClass: 'card-title-cyan', subtitle: 'exhaustive-deps',
    description: 'List every value the effect uses in the deps array. The react-hooks/exhaustive-deps lint rule flags missing ones so effects stay correct.',
    code: 'useEffect(() => { load(id); }, [id]); // include id',
  },
  {
    icon: '🧠', title: 'Effects Are Last Resort', titleClass: 'card-title-purple', subtitle: 'Prefer Alternatives',
    description: 'Not everything belongs in an effect. Derive values during render and respond to input in event handlers; reserve effects for external systems.',
    code: '// no effect needed:\nconst full = `${first} ${last}`;',
  },
  {
    icon: '🎛️', title: 'forwardRef Types', titleClass: 'card-title-amber', subtitle: 'Expose A Ref',
    description: 'When a component needs to forward a ref to its inner element, forwardRef carries the element type through so callers get the right ref.',
    code: 'const Input = forwardRef<HTMLInputElement, Props>((p, ref) => (\n  <input ref={ref} {...p} />\n));',
  },
  {
    icon: '🔜', title: 'Next: Events & Forms', titleClass: 'card-title-lime', subtitle: 'Day 25 Preview',
    description: 'Tomorrow: typing events and forms — onChange/onSubmit, controlled inputs, and reading typed values from form elements.',
    link: { href: '/day-025', label: 'Go to Day 25 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'useEffect', titleClass: 'card-title-cyan', subtitle: 'react.dev',
    description: 'The official reference for useEffect — dependencies, cleanup, and the mental model for when an effect is (and isn’t) the right tool.',
    link: { href: REACT_EFFECT, label: 'Read the useEffect docs →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Type A Ref',
    description: 'Declare useRef with and without an element type and see how current is typed. Then try accessing it without a null check.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Effects and refs connect React to timers, the DOM, and data. Getting their types right prevents whole classes of runtime bugs.',
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

export default function Day024() {
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
          <Link to="/day-023" className="day001-nav-btn day001-nav-prev">← Day 23</Link>
          <p className="day001-datetime">TypeScript Day 24</p>
          <Link to="/day-025" className="day001-nav-btn day001-nav-next">Day 25 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Effects · Refs</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 24 <span aria-hidden="true">🌀</span></h1>
              <p className="day001-day-theme">useEffect & TYPED REFS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">TS · REACT</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '24%' }} /></div>

        <p className="day001-summary">
          Day 24 handles side effects and refs. I used <code>useEffect</code> with the right{' '}
          <strong>dependency array</strong> and <strong>cleanup</strong>, and the inner-async-function pattern for
          fetching. I typed <code>useRef&lt;HTMLInputElement&gt;</code> for DOM handles (narrowing the possibly-
          <code>null</code> <code>current</code>), used refs as <strong>mutable boxes</strong> that survive renders,
          and cancelled requests with <strong>AbortController</strong> in cleanup — while remembering effects are a
          last resort.
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

        <CardSection icon="🌀" title="useEffect" cards={EFFECTS} columns={3} />
        <CardSection icon="🎯" title="TYPED REFS" cards={REFS} columns={4} />
        <CardSection icon="🧠" title="GOOD PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#React</span><span>#Hooks</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
