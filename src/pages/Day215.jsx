import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const HANDBOOK = 'https://www.typescriptlang.org/docs/handbook/intro.html';
const CHEAT = 'https://react-typescript-cheatsheet.netlify.app/';

const LEARNT_TODAY = [
  { title: 'Arc 211–215', text: 'satisfies/as const → unions → React typing → Zod → milestone' },
  { title: 'App bar', text: 'literal-safe configs, exhaustive state, typed UI, validated I/O' },
  { title: 'No any at edges', text: 'unknown + Zod (or similar) before trusted types' },
  { title: 'Reuse 201–205', text: 'conditionals and mapped types still power advanced helpers' },
  { title: 'Demo story', text: 'broken cast → satisfies → union UI → Zod parse → typed React' },
  { title: 'Portfolio', text: 'one feature folder with schemas.ts + hooks + components' },
  { title: 'Keep shipping', text: 'apply the kit to the next form, API client, or settings page' },
];

const CORE = [
  {
    icon: '✅',
    title: 'Checklist',
    titleClass: 'card-title-cyan',
    subtitle: 'Ship',
    description: 'as const/satisfies configs · remote unions · typed props/hooks · Zod at boundaries.',
    code: 'const · satisfies\nunions · React · Zod',
  },
  {
    icon: '🎬',
    title: '5-Min Demo',
    titleClass: 'card-title-purple',
    subtitle: 'Show',
    description: 'Load user JSON: safeParse → success union → typed component render.',
    code: 'parse → state\n→ <UserCard />',
  },
  {
    icon: '🗺️',
    title: '211–215 Map',
    titleClass: 'card-title-amber',
    subtitle: 'Arc',
    description: 'Freeze literals → model state → type UI → validate I/O → ship.',
    code: 'literals · state\nUI · validate · done',
  },
];

const PRACTICE = [
  {
    icon: '📦',
    title: 'Feature Slice',
    titleClass: 'card-title-cyan',
    subtitle: 'Portfolio',
    description: 'Ship schemas.ts, useUser.ts (Remote union), and UserCard.tsx with strict props.',
    code: 'schemas · hook · UI',
  },
  {
    icon: '🧪',
    title: 'Sign-Off Score',
    titleClass: 'card-title-purple',
    subtitle: 'Lab',
    description: 'Rate 0–2 on const/satisfies, unions, React types, Zod. Fix the lowest.',
    code: 'score 0–2\nfix weakest',
  },
  {
    icon: '📝',
    title: 'Patterns Card',
    titleClass: 'card-title-amber',
    subtitle: 'Docs',
    description: 'One page for the team: when to use each pattern from this arc.',
    code: '4 patterns\n1 example each',
  },
  {
    icon: '🔜',
    title: 'What Comes Next',
    titleClass: 'card-title-lime',
    subtitle: 'Day 216',
    description: 'Next arc — tooling and migration (Days 216–220): aliases, .d.ts, strict migrate, Vitest.',
    link: { href: '/day-216', label: 'Go to Day 216 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'TS Handbook',
    titleClass: 'card-title-cyan',
    subtitle: 'Docs',
    description: 'Language handbook home.',
    link: { href: HANDBOOK, label: 'Open handbook →', external: true },
  },
  {
    icon: '⚛️',
    title: 'React TS Cheatsheet',
    titleClass: 'card-title-purple',
    subtitle: 'Guide',
    description: 'UI typing quick reference.',
    link: { href: CHEAT, label: 'Open cheatsheet →', external: true },
  },
  {
    icon: '✅',
    title: 'Day 211',
    titleClass: 'card-title-amber',
    subtitle: 'Start',
    description: 'Start of this app-patterns arc.',
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

export default function Day215() {
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
          <Link to="/day-214" className="day001-nav-btn day001-nav-prev">← Day 214</Link>
          <p className="day001-datetime">TypeScript Day 215 · 3 Aug 2027</p>
          <Link to="/day-216" className="day001-nav-btn day001-nav-next">Day 216 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Milestone</span><span>Day 215</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 215 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">TYPESCRIPT APP PATTERNS MILESTONE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '60%' }} /></div>

        <p className="day001-summary">
          Day 215 closes the app-patterns arc. Ship configs with <strong>satisfies</strong>, UI state with <strong>unions</strong>, typed <strong>React</strong>, and <strong>Zod</strong> at the edge.
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
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day215</span><span>#Milestone</span><span>#Year1</span>
        </footer>
      </div>
    </div>
  );
}
