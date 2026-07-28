import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const HANDBOOK = 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions';
const NEVER = 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type';

const LEARNT_TODAY = [
  { title: 'Discriminant', text: 'a shared literal field (kind/type/status) tells TypeScript which variant you have' },
  { title: 'Narrowing', text: 'switch/if on the discriminant unlocks the right fields — no casts' },
  { title: 'Exhaustiveness', text: 'a never default catches missing cases when you add a new variant' },
  { title: 'UI state', text: 'idle | loading | error | success models screens better than booleans' },
  { title: 'API results', text: 'Ok | Err unions beat throwing for expected failures' },
  { title: 'Keep pure', text: 'each variant should carry only the data it needs' },
  { title: 'What’s next', text: 'bring these patterns into React props and hooks' },
];

const CORE = [
  {
    icon: '🧬',
    title: 'Tagged Variants',
    titleClass: 'card-title-cyan',
    subtitle: 'Shape',
    description: 'One literal tag per variant. TypeScript narrows the rest of the fields automatically.',
    code: 'type Remote =\n  | { status: \'idle\' }\n  | { status: \'loading\' }\n  | { status: \'error\'; error: string }\n  | { status: \'success\'; data: User };',
  },
  {
    icon: '🔀',
    title: 'Switch Narrow',
    titleClass: 'card-title-purple',
    subtitle: 'Use',
    description: 'Switch on status and handle each case. Success can safely read data.',
    code: 'switch (state.status) {\n  case \'success\':\n    return state.data.name;\n  // ...\n}',
  },
  {
    icon: '🛑',
    title: 'assertNever',
    titleClass: 'card-title-amber',
    subtitle: 'Exhaust',
    description: 'Default case takes never — new variants become compile errors until handled.',
    code: 'function assertNever(x: never): never {\n  throw new Error(String(x));\n}',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'Form State',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Model a form as editing | validating | submitted | failed with the right payloads.',
    code: 'type FormState =\n  | { kind: \'editing\'; values: Values }\n  | { kind: \'failed\'; values: Values; errors: string[] };',
  },
  {
    icon: '🔍',
    title: 'Force Exhaust',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Add a fifth variant and prove assertNever fails until you handle it.',
    code: 'default:\n  return assertNever(state);',
  },
  {
    icon: '📝',
    title: 'Kill Booleans',
    titleClass: 'card-title-amber',
    subtitle: 'Refactor',
    description: 'Replace isLoading + isError flags with one status union in a tiny example.',
    code: '// bad: isLoading && isError\n// good: status: ...',
  },
  {
    icon: '🔜',
    title: 'Next: React + TS',
    titleClass: 'card-title-lime',
    subtitle: 'Day 213',
    description: 'Tomorrow — typing React props and hooks.',
    link: { href: '/day-213', label: 'Go to Day 213 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'Discriminated Unions',
    titleClass: 'card-title-cyan',
    subtitle: 'Handbook',
    description: 'Narrowing with tagged unions.',
    link: { href: HANDBOOK, label: 'Open handbook →', external: true },
  },
  {
    icon: '🛑',
    title: 'never',
    titleClass: 'card-title-purple',
    subtitle: 'Docs',
    description: 'Exhaustiveness with never.',
    link: { href: NEVER, label: 'Read never →', external: true },
  },
  {
    icon: '✅',
    title: 'Day 211',
    titleClass: 'card-title-amber',
    subtitle: 'Prior',
    description: 'satisfies and as const for literal tags.',
    link: { href: '/day-211', label: 'Open Day 211 →' },
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

export default function Day212() {
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
          <Link to="/day-211" className="day001-nav-btn day001-nav-prev">← Day 211</Link>
          <p className="day001-datetime">TypeScript Day 212 · 31 Jul 2027</p>
          <Link to="/day-213" className="day001-nav-btn day001-nav-next">Day 213 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Patterns</span><span>Day 212</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 212 <span aria-hidden="true">🧬</span></h1>
              <p className="day001-day-theme">DISCRIMINATED UNIONS</p>
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
          Day 212 models state the TypeScript way. Prefer <strong>discriminated unions</strong> and <strong>exhaustiveness checks</strong> over boolean soup.
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

        <CardSection icon="🧬" title="1 · DISCRIMINATED UNIONS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day212</span><span>#Unions</span><span>#Narrowing</span>
        </footer>
      </div>
    </div>
  );
}
