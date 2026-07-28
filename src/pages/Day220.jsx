import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TSCONFIG = 'https://www.typescriptlang.org/tsconfig/';
const HANDBOOK = 'https://www.typescriptlang.org/docs/handbook/intro.html';

const LEARNT_TODAY = [
  { title: 'Arc 216–220', text: 'aliases → declarations → strict migrate → typed tests → milestone' },
  { title: 'Tooling bar', text: 'paths work in TS and bundler; .d.ts for gaps; strict on; tests gate CI' },
  { title: 'Migration craft', text: 'file-by-file, leaf-first, any burn-down with owners' },
  { title: 'Reuse prior arcs', text: 'advanced types (201–205) + app patterns (211–215) still apply' },
  { title: 'Demo story', text: 'alias import → shim lib → convert file → vitest + tsc green' },
  { title: 'Team ready', text: 'write the import rules and Definition of Done once' },
  { title: 'Keep shipping', text: 'next: Node APIs, monorepos, or more product features in TS' },
];

const CORE = [
  {
    icon: '✅',
    title: 'Checklist',
    titleClass: 'card-title-cyan',
    subtitle: 'Ship',
    description: '@ alias synced · one .d.ts shim · strict true · any audit · tsc + vitest in CI.',
    code: 'paths · d.ts\nstrict · tests · CI',
  },
  {
    icon: '🎬',
    title: '5-Min Demo',
    titleClass: 'card-title-purple',
    subtitle: 'Show',
    description: 'Broken deep import → @/ fix → untyped lib shim → migrated util with tests.',
    code: 'alias · shim\nmigrate · test',
  },
  {
    icon: '🗺️',
    title: '216–220 Map',
    titleClass: 'card-title-amber',
    subtitle: 'Arc',
    description: 'Resolve modules → describe JS → migrate strictly → test types → ship tooling.',
    code: 'resolve · declare\nmigrate · test · done',
  },
];

const PRACTICE = [
  {
    icon: '📦',
    title: 'Tooling README',
    titleClass: 'card-title-cyan',
    subtitle: 'Docs',
    description: 'Document aliases, declaration folder, strict flags, and CI commands.',
    code: 'aliases · types/\nstrict · ci cmds',
  },
  {
    icon: '🧪',
    title: 'Sign-Off Score',
    titleClass: 'card-title-purple',
    subtitle: 'Lab',
    description: 'Rate 0–2 on aliases, d.ts, migration, tests. Fix the lowest.',
    code: 'score 0–2\nfix weakest',
  },
  {
    icon: '📝',
    title: 'Next Gap List',
    titleClass: 'card-title-amber',
    subtitle: 'Plan',
    description: 'List 3 next TS topics (Node, monorepo, GraphQL codegen) and pick one.',
    code: '3 gaps → pick 1',
  },
  {
    icon: '🔜',
    title: 'What Comes Next',
    titleClass: 'card-title-lime',
    subtitle: 'Day 225',
    description: 'Next arc — backend TypeScript (Days 225–230): Express, Prisma, DTOs, and auth.',
    link: { href: '/day-225', label: 'Go to Day 225 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'tsconfig Ref',
    titleClass: 'card-title-cyan',
    subtitle: 'Docs',
    description: 'Full compiler options reference.',
    link: { href: TSCONFIG, label: 'Open tsconfig →', external: true },
  },
  {
    icon: '📖',
    title: 'Handbook',
    titleClass: 'card-title-purple',
    subtitle: 'Learn',
    description: 'Language handbook home.',
    link: { href: HANDBOOK, label: 'Open handbook →', external: true },
  },
  {
    icon: '📂',
    title: 'Day 216',
    titleClass: 'card-title-amber',
    subtitle: 'Start',
    description: 'Start of this tooling arc.',
    link: { href: '/day-216', label: 'Open Day 216 →' },
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

export default function Day220() {
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
          <Link to="/day-219" className="day001-nav-btn day001-nav-prev">← Day 219</Link>
          <p className="day001-datetime">TypeScript Day 220 · 8 Aug 2027</p>
          <Link to="/day-225" className="day001-nav-btn day001-nav-next">Day 225 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Milestone</span><span>Day 220</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 220 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">TOOLING & MIGRATION MILESTONE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '62%' }} /></div>

        <p className="day001-summary">
          Day 220 closes the tooling arc. Ship <strong>aliases</strong>, <strong>declarations</strong>, a <strong>strict migration</strong> plan, and <strong>typed tests</strong> in CI.
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

        <CardSection icon="🏁" title="1 · MILESTONE" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day220</span><span>#Milestone</span><span>#Tooling</span>
        </footer>
      </div>
    </div>
  );
}
