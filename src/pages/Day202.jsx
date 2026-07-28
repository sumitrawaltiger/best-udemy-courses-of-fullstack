import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const HANDBOOK = 'https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types';
const UTILS = 'https://www.typescriptlang.org/docs/handbook/utility-types.html';

const LEARNT_TODAY = [
  { title: 'infer', text: 'declare a type variable inside a conditional to capture a piece of a shape' },
  { title: 'ReturnType', text: 'infer R from (...args) => R — same idea as the built-in' },
  { title: 'Parameters', text: 'infer A from a function’s argument tuple' },
  { title: 'Promise unwrap', text: 'infer U from Promise<U> for async result types' },
  { title: 'Array element', text: 'infer E from E[] or Array<E>' },
  { title: 'Pattern match', text: 'think of infer as destructuring for types' },
  { title: 'Fail branch', text: 'if the pattern does not match, take the : never (or fallback) side' },
  { title: 'What’s next', text: 'mapped types transform every property in a type' },
];

const CORE = [
  {
    icon: '🧲',
    title: 'infer Slot',
    titleClass: 'card-title-cyan',
    subtitle: 'Capture',
    description: 'Inside extends, infer Name binds a type variable you can use in the true branch.',
    code: 'type Elem<T> =\n  T extends (infer E)[] ? E : never;',
  },
  {
    icon: '📤',
    title: 'ReturnType',
    titleClass: 'card-title-purple',
    subtitle: 'Functions',
    description: 'Pull the return type without calling the function — great for factories and handlers.',
    code: 'type Ret<T> =\n  T extends (...a: any) => infer R\n    ? R : never;',
  },
  {
    icon: '📦',
    title: 'Unwrap',
    titleClass: 'card-title-amber',
    subtitle: 'Async',
    description: 'Peel Promise wrappers (and nest carefully) so callers see the resolved type.',
    code: 'type Awaited<T> =\n  T extends Promise<infer U>\n    ? Awaited<U> : T;',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'FirstArg',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Write FirstArg<T> that is the type of a function’s first parameter.',
    code: 'type FirstArg<T> =\n  T extends (a: infer A, ...r: any) => any\n    ? A : never;',
  },
  {
    icon: '🔍',
    title: 'PropType',
    titleClass: 'card-title-purple',
    subtitle: 'Objects',
    description: 'Given T and key K, infer the property type — then compare to T[K].',
    code: 'type Prop<T, K extends keyof T> =\n  T[K]; // baseline\n// try an infer version too',
  },
  {
    icon: '📝',
    title: 'Replace Built-in',
    titleClass: 'card-title-amber',
    subtitle: 'Learn',
    description: 'Reimplement ReturnType and Parameters with infer; check against the real utilities.',
    code: 'type MyReturn<T> = ...\ntype MyParams<T> = ...',
  },
  {
    icon: '🔜',
    title: 'Next: Mapped Types',
    titleClass: 'card-title-lime',
    subtitle: 'Day 203',
    description: 'Tomorrow — transform every property with mapped types.',
    link: { href: '/day-203', label: 'Go to Day 203 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'infer in Conditionals',
    titleClass: 'card-title-cyan',
    subtitle: 'Handbook',
    description: 'Official section on inferring within conditional types.',
    link: { href: HANDBOOK, label: 'Open handbook →', external: true },
  },
  {
    icon: '🧰',
    title: 'Utility Types',
    titleClass: 'card-title-purple',
    subtitle: 'Docs',
    description: 'ReturnType, Parameters, Awaited and friends.',
    link: { href: UTILS, label: 'Open utilities →', external: true },
  },
  {
    icon: '🔀',
    title: 'Day 201',
    titleClass: 'card-title-amber',
    subtitle: 'Prior',
    description: 'Conditional types that host infer.',
    link: { href: '/day-201', label: 'Open Day 201 →' },
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

export default function Day202() {
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
          <Link to="/day-201" className="day001-nav-btn day001-nav-prev">← Day 201</Link>
          <p className="day001-datetime">TypeScript Day 202 · 21 Jul 2027</p>
          <Link to="/day-203" className="day001-nav-btn day001-nav-next">Day 203 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Advanced</span><span>Day 202</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 202 <span aria-hidden="true">🧲</span></h1>
              <p className="day001-day-theme">THE infer KEYWORD</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '57%' }} /></div>

        <p className="day001-summary">
          Day 202 teaches <strong>infer</strong> — capture pieces of function, array, and Promise types so helpers stay DRY and precise.
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

        <CardSection icon="🧲" title="1 · infer" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day202</span><span>#infer</span><span>#Year1</span>
        </footer>
      </div>
    </div>
  );
}
