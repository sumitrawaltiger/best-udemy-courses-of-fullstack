import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const HANDBOOK = 'https://www.typescriptlang.org/docs/handbook/2/mapped-types.html';
const UTILS = 'https://www.typescriptlang.org/docs/handbook/utility-types.html';

const LEARNT_TODAY = [
  { title: 'Mapped types', text: '{ [K in keyof T]: ... } walks every key and builds a new shape' },
  { title: 'Partial / Required', text: 'built-ins are mapped types with ? or -? modifiers' },
  { title: 'Readonly', text: 'add readonly via a mapped modifier' },
  { title: 'Key remapping', text: 'as clauses rename keys — as `get${Capitalize<K>}`' },
  { title: 'Filter keys', text: 'map to never and use key remapping to drop properties' },
  { title: 'Homomorphic', text: 'mapped types often preserve optional/readonly from the source' },
  { title: 'Compose', text: 'combine mapped + conditional for PartialBy / PickByValue helpers' },
  { title: 'What’s next', text: 'template literal types power string-level type magic' },
];

const CORE = [
  {
    icon: '🗺️',
    title: 'In keyof',
    titleClass: 'card-title-cyan',
    subtitle: 'Walk Keys',
    description: 'Iterate keys of T and decide each property’s new type.',
    code: 'type Mirror<T> = {\n  [K in keyof T]: T[K];\n};',
  },
  {
    icon: '🔧',
    title: 'Modifiers',
    titleClass: 'card-title-purple',
    subtitle: '? and readonly',
    description: 'Add or remove optionality and readonly with +?/ -? and readonly / -readonly.',
    code: 'type Mutable<T> = {\n  -readonly [K in keyof T]: T[K];\n};',
  },
  {
    icon: '🏷️',
    title: 'as Remap',
    titleClass: 'card-title-amber',
    subtitle: 'Rename',
    description: 'Key remapping builds getter names, event maps, and prefixed APIs safely.',
    code: 'type Getters<T> = {\n  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];\n};',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'Nullable Props',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Write Nullable<T> that makes every property T[K] | null.',
    code: 'type Nullable<T> = {\n  [K in keyof T]: T[K] | null;\n};',
  },
  {
    icon: '🔍',
    title: 'Optional Keys Only',
    titleClass: 'card-title-purple',
    subtitle: 'Filter',
    description: 'Build a type with only the optional keys of T (advanced — use -? tricks).',
    code: '// research OptionalKeys<T>\n// then Pick those keys',
  },
  {
    icon: '📝',
    title: 'Recreate Partial',
    titleClass: 'card-title-amber',
    subtitle: 'Learn',
    description: 'Implement MyPartial<T> and MyRequired<T>; compare to the built-ins.',
    code: 'type MyPartial<T> = {\n  [K in keyof T]?: T[K];\n};',
  },
  {
    icon: '🔜',
    title: 'Next: Template Literals',
    titleClass: 'card-title-lime',
    subtitle: 'Day 204',
    description: 'Tomorrow — template literal types and brands.',
    link: { href: '/day-204', label: 'Go to Day 204 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'Mapped Types',
    titleClass: 'card-title-cyan',
    subtitle: 'Handbook',
    description: 'Official mapped types chapter.',
    link: { href: HANDBOOK, label: 'Open handbook →', external: true },
  },
  {
    icon: '🧰',
    title: 'Partial & Friends',
    titleClass: 'card-title-purple',
    subtitle: 'Utilities',
    description: 'See how Partial, Required, Readonly are defined.',
    link: { href: UTILS, label: 'Open utilities →', external: true },
  },
  {
    icon: '🧲',
    title: 'Day 202',
    titleClass: 'card-title-amber',
    subtitle: 'Prior',
    description: 'infer pairs well with mapped transforms.',
    link: { href: '/day-202', label: 'Open Day 202 →' },
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

export default function Day203() {
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
          <Link to="/day-202" className="day001-nav-btn day001-nav-prev">← Day 202</Link>
          <p className="day001-datetime">TypeScript Day 203 · 22 Jul 2027</p>
          <Link to="/day-204" className="day001-nav-btn day001-nav-next">Day 204 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Advanced</span><span>Day 203</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 203 <span aria-hidden="true">🗺️</span></h1>
              <p className="day001-day-theme">MAPPED TYPES</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '58%' }} /></div>

        <p className="day001-summary">
          Day 203 transforms shapes in bulk. Use <strong>mapped types</strong> to walk <code>keyof T</code>, tweak modifiers, and remap keys.
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

        <CardSection icon="🗺️" title="1 · MAPPED TYPES" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day203</span><span>#MappedTypes</span><span>#Year1</span>
        </footer>
      </div>
    </div>
  );
}
