import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const REACT_REDUCER = 'https://react.dev/reference/react/useReducer';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'useReducer', text: 'manage complex state with a reducer function instead of many useState calls' },
  { title: 'State type', text: 'model the whole state shape with an interface or type' },
  { title: 'Action union', text: 'a discriminated union of actions — the safest way to type dispatch' },
  { title: 'type discriminant', text: 'each action has a literal `type` field the reducer switches on' },
  { title: 'Typed payloads', text: 'each action carries exactly the data its case needs' },
  { title: 'Exhaustive switch', text: 'a never default guarantees every action is handled' },
  { title: 'dispatch is typed', text: 'you can only dispatch valid actions — typos are compile errors' },
  { title: 'Reducer is pure', text: 'no side effects — return new state, never mutate the old' },
  { title: 'useReducer vs useState', text: 'reducer wins when updates are complex or interrelated' },
  { title: 'Pairs with Context', text: 'reducer + context gives typed app-wide state without a library' },
];

const SETUP = [
  {
    icon: '🧩', title: 'Model State', titleClass: 'card-title-cyan', subtitle: 'One Shape',
    description: 'Start by typing the whole state. A single interface makes the reducer’s input and output explicit and keeps every field checked.',
    code: 'interface State {\n  count: number;\n  status: "idle" | "busy";\n}',
  },
  {
    icon: '🎫', title: 'Action Union', titleClass: 'card-title-purple', subtitle: 'Discriminated',
    description: 'Model actions as a discriminated union keyed by a literal type. This is the single most important pattern for a type-safe reducer.',
    code: 'type Action =\n  | { type: "inc"; by: number }\n  | { type: "reset" };',
  },
  {
    icon: '⚙️', title: 'The Reducer', titleClass: 'card-title-amber', subtitle: 'Pure & Typed',
    description: 'The reducer takes (state, action) and returns new state. Switching on action.type narrows to the exact action, so payloads are fully typed.',
    code: 'function reducer(s: State, a: Action): State {\n  switch (a.type) {\n    case "inc": return { ...s, count: s.count + a.by };\n    case "reset": return { ...s, count: 0 };\n  }\n}',
  },
];

const USE = [
  {
    icon: '📤', title: 'Dispatch Is Typed', titleClass: 'card-title-cyan', subtitle: 'Only Valid Actions',
    description: 'useReducer returns [state, dispatch]. dispatch only accepts actions from your union — a misspelled type or a missing payload is a compile error.',
    code: 'const [state, dispatch] = useReducer(reducer, initial);\ndispatch({ type: "inc", by: 2 }); // ✅\ndispatch({ type: "inc" });        // ❌ by missing',
  },
  {
    icon: '✅', title: 'Exhaustiveness', titleClass: 'card-title-blue', subtitle: 'never Catches Gaps',
    description: 'Add a default that assigns the action to never. Introduce a new action later and forget its case — the compiler stops the build.',
    code: 'default: {\n  const _exhaustive: never = a;\n  return s;\n}',
  },
  {
    icon: '🧊', title: 'Keep It Pure', titleClass: 'card-title-amber', subtitle: 'No Mutation',
    description: 'A reducer must be pure: no fetch, no mutation. Return a new state object every time — spread the old one and change only what’s needed.',
    code: 'return { ...s, count: s.count + a.by }; // new object',
  },
  {
    icon: '⚖️', title: 'Reducer vs useState', titleClass: 'card-title-lime', subtitle: 'When To Reach For It',
    description: 'Prefer useReducer when several pieces of state change together or transitions get complex — it centralizes the logic and types every path.',
    code: '// many related updates? → reducer\n// one simple value?     → useState',
  },
];

const APPLY = [
  {
    icon: '🌐', title: 'Loading State Machine', titleClass: 'card-title-cyan', subtitle: 'A Real Example',
    description: 'A fetch flow is a natural reducer: idle → loading → success/error. The union of states and actions makes impossible combinations unrepresentable.',
    code: 'type S =\n  | { status: "loading" }\n  | { status: "ok"; data: User }\n  | { status: "err"; msg: string };',
  },
  {
    icon: '🔗', title: 'Pairs With Context', titleClass: 'card-title-purple', subtitle: 'App-Wide State',
    description: 'Put a reducer’s state and dispatch into Context and you have typed global state without Redux — the topic of tomorrow’s lesson.',
    code: '// tomorrow: useReducer + Context',
  },
  {
    icon: '🧠', title: 'Actions As Events', titleClass: 'card-title-amber', subtitle: 'Describe Intent',
    description: 'Name actions after what happened ("todo_added"), not how state changes. The reducer decides the "how" — clearer and easier to evolve.',
    code: 'dispatch({ type: "todo_added", title });',
  },
  {
    icon: '🔜', title: 'Next: Context API', titleClass: 'card-title-lime', subtitle: 'Day 27 Preview',
    description: 'Tomorrow: the Context API in TypeScript — a typed context, provider, and a custom hook that guards against missing providers.',
    link: { href: '/day-027', label: 'Go to Day 27 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'useReducer', titleClass: 'card-title-cyan', subtitle: 'react.dev',
    description: 'The official reference for useReducer — the reducer contract, dispatch, and when it’s the better choice over useState.',
    link: { href: REACT_REDUCER, label: 'Read the useReducer docs →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Type A Reducer',
    description: 'Write a discriminated Action union and a reducer, then dispatch a bad action to watch the compiler reject it. The pattern clicks fast.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Typed reducers scale from a single component to app-wide state, and the same action-union idea reappears in Redux and beyond.',
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

export default function Day026() {
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
          <Link to="/day-025" className="day001-nav-btn day001-nav-prev">← Day 25</Link>
          <p className="day001-datetime">TypeScript Day 26 · 18 Aug 2026</p>
          <Link to="/day-027" className="day001-nav-btn day001-nav-next">Day 27 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>useReducer</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 26 <span aria-hidden="true">⚙️</span></h1>
              <p className="day001-day-theme">useReducer WITH TYPESCRIPT</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '26%' }} /></div>

        <p className="day001-summary">
          Day 26 manages complex state with <code>useReducer</code>. I typed the <strong>state</strong> shape and
          modelled actions as a <strong>discriminated union</strong> keyed by a literal <code>type</code>. Switching
          on it inside a <strong>pure</strong> reducer narrows each action’s <strong>payload</strong>, and a{' '}
          <code>never</code> default guarantees <strong>exhaustive</strong> handling. Because <code>dispatch</code>{' '}
          only accepts valid actions, typos become compile errors — and it pairs perfectly with Context tomorrow.
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

        <CardSection icon="🧩" title="STATE, ACTIONS, REDUCER" cards={SETUP} columns={3} />
        <CardSection icon="📤" title="USING IT SAFELY" cards={USE} columns={4} />
        <CardSection icon="🌐" title="APPLYING IT" cards={APPLY} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#React</span><span>#Hooks</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
