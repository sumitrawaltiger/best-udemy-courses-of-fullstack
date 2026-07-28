import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const HANDBOOK = 'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator';
const CONST = 'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions';

const LEARNT_TODAY = [
  { title: 'as const', text: 'locks a value to its narrowest literal types — readonly tuples and string unions' },
  { title: 'satisfies', text: 'check a value against a type without widening it to that type' },
  { title: 'Best of both', text: 'satisfies keeps autocomplete + literal inference while proving the shape' },
  { title: 'Config objects', text: 'route tables and theme maps love satisfies Record<...>' },
  { title: 'Avoid as cast', text: 'prefer satisfies over as when you still want inference' },
  { title: 'Tuple labels', text: 'as const on arrays gives readonly ["a","b"] not string[]' },
  { title: 'What’s next', text: 'discriminated unions model app state safely' },
];

const CORE = [
  {
    icon: '🔒',
    title: 'as const',
    titleClass: 'card-title-cyan',
    subtitle: 'Narrow',
    description: 'Infer literal types and readonly deeply. Great for enum-like objects without enum.',
    code: 'const roles = [\'admin\', \'user\'] as const;\ntype Role = typeof roles[number];\n// \'admin\' | \'user\'',
  },
  {
    icon: '✅',
    title: 'satisfies',
    titleClass: 'card-title-purple',
    subtitle: 'Check',
    description: 'Validate the value matches a type, but keep the precise inferred type.',
    code: 'const cfg = {\n  host: \'localhost\',\n  port: 3000,\n} satisfies { host: string; port: number };',
  },
  {
    icon: '🧭',
    title: 'When Which',
    titleClass: 'card-title-amber',
    subtitle: 'Choose',
    description: 'as const to freeze literals; satisfies to constrain without losing detail; as to escape (rare).',
    code: 'as const → narrow\nsatisfies → check\nas → override (careful)',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'Route Table',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Build a routes object with as const and derive a Path union from it.',
    code: 'const routes = {\n  home: \'/\',\n  user: \'/users/:id\',\n} as const;\ntype Path = typeof routes[keyof typeof routes];',
  },
  {
    icon: '🔍',
    title: 'satisfies Record',
    titleClass: 'card-title-purple',
    subtitle: 'Check',
    description: 'Use satisfies Record<Role, string> on a label map; break a key and watch the error.',
    code: 'type Role = \'admin\' | \'user\';\nconst labels = {\n  admin: \'Admin\',\n  user: \'User\',\n} satisfies Record<Role, string>;',
  },
  {
    icon: '📝',
    title: 'Drop a Cast',
    titleClass: 'card-title-amber',
    subtitle: 'Refactor',
    description: 'Find one as Type in a sample and replace with satisfies or better inference.',
    code: '// before: value as Config\n// after: value satisfies Config',
  },
  {
    icon: '🔜',
    title: 'Next: Unions',
    titleClass: 'card-title-lime',
    subtitle: 'Day 212',
    description: 'Tomorrow — discriminated unions and exhaustiveness.',
    link: { href: '/day-212', label: 'Go to Day 212 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'satisfies',
    titleClass: 'card-title-cyan',
    subtitle: 'Release Notes',
    description: 'TypeScript 4.9 satisfies operator.',
    link: { href: HANDBOOK, label: 'Read satisfies →', external: true },
  },
  {
    icon: '🔒',
    title: 'const Assertions',
    titleClass: 'card-title-purple',
    subtitle: 'Docs',
    description: 'as const background.',
    link: { href: CONST, label: 'Read as const →', external: true },
  },
  {
    icon: '🏁',
    title: 'Day 205',
    titleClass: 'card-title-amber',
    subtitle: 'Prior Arc',
    description: 'Advanced types milestone before this patterns stretch.',
    link: { href: '/day-205', label: 'Open Day 205 →' },
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

export default function Day211() {
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
          <Link to="/day-210" className="day001-nav-btn day001-nav-prev">← Day 210</Link>
          <p className="day001-datetime">TypeScript Day 211 · 30 Jul 2027</p>
          <Link to="/day-212" className="day001-nav-btn day001-nav-next">Day 212 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Patterns</span><span>Day 211</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 211 <span aria-hidden="true">✅</span></h1>
              <p className="day001-day-theme">satisfies & CONST ASSERTIONS</p>
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
          Day 211 sharpens inference. Use <strong>as const</strong> for literals and <strong>satisfies</strong> to prove a shape without widening.
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

        <CardSection icon="✅" title="1 · satisfies & as const" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day211</span><span>#satisfies</span><span>#asConst</span>
        </footer>
      </div>
    </div>
  );
}
