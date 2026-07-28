import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const REFS = 'https://www.typescriptlang.org/docs/handbook/project-references.html';
const SOLUTION = 'https://www.typescriptlang.org/tsconfig#composite';

const LEARNT_TODAY = [
  { title: 'Project references', text: 'split a big codebase into tsconfig projects that build in order' },
  { title: 'composite', text: 'referenced projects set composite: true and emit declarations' },
  { title: 'Solution tsconfig', text: 'root tsconfig with files: [] and references: [...] orchestrates builds' },
  { title: 'packages/*', text: 'apps depend on packages/contracts — types flow through .d.ts' },
  { title: 'Faster CI', text: 'tsc -b builds only what changed when references are set up well' },
  { title: 'Avoid cycles', text: 'package A must not import package B if B already imports A' },
  { title: 'What’s next', text: 'publishing one of those packages with real types' },
];

const CORE = [
  {
    icon: '📚',
    title: 'composite',
    titleClass: 'card-title-cyan',
    subtitle: 'Package',
    description: 'Library packages enable composite + declaration for consumers.',
    code: '{\n  "compilerOptions": {\n    "composite": true,\n    "declaration": true,\n    "outDir": "dist"\n  }\n}',
  },
  {
    icon: '🗂️',
    title: 'Solution Config',
    titleClass: 'card-title-purple',
    subtitle: 'Root',
    description: 'Root tsconfig lists references; run tsc -b from the root.',
    code: '{\n  "files": [],\n  "references": [\n    { "path": "./packages/contracts" },\n    { "path": "./apps/api" }\n  ]\n}',
  },
  {
    icon: '🔗',
    title: 'Workspace Deps',
    titleClass: 'card-title-amber',
    subtitle: 'pnpm/npm',
    description: 'App package.json depends on workspace:* contracts package.',
    code: '"dependencies": {\n  "@acme/contracts": "workspace:*"\n}',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'Two Projects',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Create packages/utils (composite) and apps/demo that references it. tsc -b succeeds.',
    code: 'tsc -b',
  },
  {
    icon: '🔍',
    title: 'Break Cycle',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Intentionally cycle two packages; note the error; fix the dependency direction.',
    code: 'A → B → A  // bad',
  },
  {
    icon: '📝',
    title: 'Build Graph',
    titleClass: 'card-title-amber',
    subtitle: 'Docs',
    description: 'Draw packages → apps arrows for your repo (even a mini sketch).',
    code: 'contracts → api\ncontracts → web',
  },
  {
    icon: '🔜',
    title: 'Next: Publish',
    titleClass: 'card-title-lime',
    subtitle: 'Day 223',
    description: 'Tomorrow — publishing a typed npm package.',
    link: { href: '/day-223', label: 'Go to Day 223 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'Project References',
    titleClass: 'card-title-cyan',
    subtitle: 'Handbook',
    description: 'Official project references guide.',
    link: { href: REFS, label: 'Open handbook →', external: true },
  },
  {
    icon: '⚙️',
    title: 'composite',
    titleClass: 'card-title-purple',
    subtitle: 'tsconfig',
    description: 'composite option reference.',
    link: { href: SOLUTION, label: 'Open composite →', external: true },
  },
  {
    icon: '🧹',
    title: 'Day 221',
    titleClass: 'card-title-amber',
    subtitle: 'Prior',
    description: 'Lint that scales across packages.',
    link: { href: '/day-221', label: 'Open Day 221 →' },
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

export default function Day222() {
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
          <Link to="/day-221" className="day001-nav-btn day001-nav-prev">← Day 221</Link>
          <p className="day001-datetime">TypeScript Day 222 · 10 Aug 2027</p>
          <Link to="/day-223" className="day001-nav-btn day001-nav-next">Day 223 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Monorepo</span><span>Day 222</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 222 <span aria-hidden="true">📚</span></h1>
              <p className="day001-day-theme">PROJECT REFERENCES & MONOREPOS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '63%' }} /></div>

        <p className="day001-summary">
          Day 222 scales TypeScript across packages. Use <strong>project references</strong>, <strong>composite</strong> libraries, and a root <strong>tsc -b</strong> graph.
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

        <CardSection icon="📚" title="1 · MONOREPO TS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day222</span><span>#Monorepo</span><span>#ProjectReferences</span>
        </footer>
      </div>
    </div>
  );
}
