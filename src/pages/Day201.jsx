import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const HANDBOOK = 'https://www.typescriptlang.org/docs/handbook/2/conditional-types.html';
const PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'Conditional types', text: 'T extends U ? X : Y — pick a type based on a check, like a ternary for types' },
  { title: 'Distributive unions', text: 'naked type params distribute over unions — string | number becomes a mapped check' },
  { title: 'Extract / Exclude', text: 'built-ins are conditional types under the hood' },
  { title: 'Filter APIs', text: 'turn a union of events into only the ones your handler accepts' },
  { title: 'Never branch', text: 'the false branch often collapses to never to drop cases' },
  { title: 'Readability', text: 'name complex conditionals — Prefer Flatten<T> over a raw nested extends' },
  { title: 'Year-1 use', text: 'library authors and strict app code both lean on these' },
  { title: 'What’s next', text: 'infer lets you pull types out of other types' },
];

const CORE = [
  {
    icon: '🔀',
    title: 'extends ? :',
    titleClass: 'card-title-cyan',
    subtitle: 'Syntax',
    description: 'If T is assignable to U, resolve to X; otherwise Y. Types decide at compile time.',
    code: 'type IsString<T> =\n  T extends string ? true : false;',
  },
  {
    icon: '🧩',
    title: 'Distribute',
    titleClass: 'card-title-purple',
    subtitle: 'Unions',
    description: 'With a naked T, T extends U runs once per union member — powerful and surprising.',
    code: 'type ToArray<T> =\n  T extends any ? T[] : never;\n// string|number → string[]|number[]',
  },
  {
    icon: '🧰',
    title: 'Built-ins',
    titleClass: 'card-title-amber',
    subtitle: 'Reuse',
    description: 'Extract and Exclude are the everyday conditional utilities — prefer them before inventing new ones.',
    code: 'Extract<T, U>\nExclude<T, U>',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'IsArray Helper',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Write IsArray<T> that is true only when T is an array type.',
    code: 'type IsArray<T> =\n  T extends any[] ? true : false;',
  },
  {
    icon: '🔍',
    title: 'NonFunction Keys',
    titleClass: 'card-title-purple',
    subtitle: 'Filter',
    description: 'From a type, keep only keys whose values are not functions.',
    code: '// hint: conditional + mapped\n// keys where T[K] extends Function ? never : K',
  },
  {
    icon: '📝',
    title: 'Name It',
    titleClass: 'card-title-amber',
    subtitle: 'Style',
    description: 'Refactor one nested conditional into a named alias with a one-line comment.',
    code: 'type NonNull<T> =\n  T extends null | undefined ? never : T;',
  },
  {
    icon: '🔜',
    title: 'Next: infer',
    titleClass: 'card-title-lime',
    subtitle: 'Day 202',
    description: 'Tomorrow — pull types out of other types with infer.',
    link: { href: '/day-202', label: 'Go to Day 202 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'Conditional Types',
    titleClass: 'card-title-cyan',
    subtitle: 'Handbook',
    description: 'Official TypeScript handbook chapter.',
    link: { href: HANDBOOK, label: 'Open handbook →', external: true },
  },
  {
    icon: '\U0001f6dd',
    title: 'Playground',
    titleClass: 'card-title-purple',
    subtitle: 'Try It',
    description: 'Experiment with extends checks live.',
    link: { href: PLAYGROUND, label: 'Open playground →', external: true },
  },
  {
    icon: '🏁',
    title: 'Day 200',
    titleClass: 'card-title-amber',
    subtitle: 'Prior',
    description: 'ML personalization milestone before this TypeScript arc.',
    link: { href: '/day-200', label: 'Open Day 200 →' },
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

export default function Day201() {
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
          <Link to="/day-200" className="day001-nav-btn day001-nav-prev">← Day 200</Link>
          <p className="day001-datetime">TypeScript Day 201 · 20 Jul 2027</p>
          <Link to="/day-202" className="day001-nav-btn day001-nav-next">Day 202 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Advanced</span><span>Day 201</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 201 <span aria-hidden="true">🔀</span></h1>
              <p className="day001-day-theme">CONDITIONAL TYPES</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '56%' }} /></div>

        <p className="day001-summary">
          Day 201 reopens TypeScript at the advanced layer. Master <strong>conditional types</strong> — <code>T extends U ? X : Y</code> — so types can branch like code.
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

        <CardSection icon="🔀" title="1 · CONDITIONAL TYPES" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day201</span><span>#ConditionalTypes</span><span>#Year1</span>
        </footer>
      </div>
    </div>
  );
}
