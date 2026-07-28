import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const STRICT = 'https://www.typescriptlang.org/tsconfig#strict';
const MIGRATE = 'https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html';

const LEARNT_TODAY = [
  { title: 'strict: true', text: 'turns on the important checks — keep it on for new code' },
  { title: 'allowJs', text: 'migrate file by file — JS and TS can live together during the move' },
  { title: 'checkJs', text: 'optional JSDoc checking before renaming to .ts' },
  { title: 'any debt', text: 'track any and @ts-ignore; burn them down with tickets' },
  { title: 'Order of attack', text: 'leaf modules first; shared core and entrypoints last' },
  { title: 'noImplicitAny', text: 'the biggest teacher — force annotations where inference fails' },
  { title: 'What’s next', text: 'typed tests keep the migration honest' },
];

const CORE = [
  {
    icon: '🔒',
    title: 'Strict Bundle',
    titleClass: 'card-title-cyan',
    subtitle: 'Flags',
    description: 'strict enables strictNullChecks, noImplicitAny, and friends. Do not turn it off lightly.',
    code: '{\n  "strict": true,\n  "noUncheckedIndexedAccess": true\n}',
  },
  {
    icon: '🌉',
    title: 'allowJs Bridge',
    titleClass: 'card-title-purple',
    subtitle: 'Migrate',
    description: 'Compile mixed projects. Rename .js → .ts when a file is ready.',
    code: '{\n  "allowJs": true,\n  "checkJs": false\n}',
  },
  {
    icon: '📉',
    title: 'Burn Down any',
    titleClass: 'card-title-amber',
    subtitle: 'Debt',
    description: 'Ban new any in lint; allowlist legacy files temporarily.',
    code: '// eslint @typescript-eslint/no-explicit-any\n// fix leaves before trunks',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'Convert One File',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Rename a small .js util to .ts. Fix every error without any.',
    code: 'formatDate.js → .ts\nstrict errors → fix',
  },
  {
    icon: '🔍',
    title: 'any Audit',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'Search the repo for any and @ts-ignore. List top 5 with owners.',
    code: 'rg "\\bany\\b|@ts-ignore"',
  },
  {
    icon: '📝',
    title: 'Migration Plan',
    titleClass: 'card-title-amber',
    subtitle: 'Docs',
    description: 'One-pager: folder order, strict flags, Definition of Done per file.',
    code: 'leaves → features\n→ entry · done=0 any',
  },
  {
    icon: '🔜',
    title: 'Next: Testing',
    titleClass: 'card-title-lime',
    subtitle: 'Day 219',
    description: 'Tomorrow — testing TypeScript with Vitest.',
    link: { href: '/day-219', label: 'Go to Day 219 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'strict',
    titleClass: 'card-title-cyan',
    subtitle: 'tsconfig',
    description: 'What the strict family enables.',
    link: { href: STRICT, label: 'Open strict docs →', external: true },
  },
  {
    icon: '🌉',
    title: 'Migrating from JS',
    titleClass: 'card-title-purple',
    subtitle: 'Handbook',
    description: 'Official migration guidance.',
    link: { href: MIGRATE, label: 'Open migrate guide →', external: true },
  },
  {
    icon: '📜',
    title: 'Day 217',
    titleClass: 'card-title-amber',
    subtitle: 'Prior',
    description: 'Declarations that help stubby JS libs.',
    link: { href: '/day-217', label: 'Open Day 217 →' },
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

export default function Day218() {
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
          <Link to="/day-217" className="day001-nav-btn day001-nav-prev">← Day 217</Link>
          <p className="day001-datetime">TypeScript Day 218 · 6 Aug 2027</p>
          <Link to="/day-219" className="day001-nav-btn day001-nav-next">Day 219 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Migration</span><span>Day 218</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 218 <span aria-hidden="true">🔒</span></h1>
              <p className="day001-day-theme">STRICT MODE & JS → TS MIGRATION</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '61%' }} /></div>

        <p className="day001-summary">
          Day 218 migrates without drama. Keep <strong>strict</strong> on, use <strong>allowJs</strong> as a bridge, and burn down <strong>any</strong> on purpose.
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

        <CardSection icon="🔒" title="1 · STRICT & MIGRATE" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day218</span><span>#strict</span><span>#Migration</span>
        </footer>
      </div>
    </div>
  );
}
