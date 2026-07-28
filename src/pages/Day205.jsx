import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const HANDBOOK = 'https://www.typescriptlang.org/docs/handbook/intro.html';
const CHEAT = 'https://www.typescriptlang.org/cheatsheets';

const LEARNT_TODAY = [
  { title: 'Arc 201–205', text: 'conditionals → infer → mapped types → templates/brands → milestone' },
  { title: 'Type-level tools', text: 'you can branch, capture, transform, and brand without runtime cost' },
  { title: 'Prefer built-ins', text: 'Extract, Partial, ReturnType first — custom helpers second' },
  { title: 'Name complexity', text: 'aliases beat nested one-liners in reviews' },
  { title: 'Erase safely', text: 'types disappear at emit — validate at boundaries' },
  { title: 'Portfolio proof', text: 'one helpers.ts with tests in the playground beats vague claims' },
  { title: 'Keep shipping', text: 'apply these to API clients, form state, and ID-heavy domains' },
  { title: 'What’s next', text: 'deeper TS with React/Node, or the illustrated /typescript series' },
];

const CORE = [
  {
    icon: '✅',
    title: 'Checklist',
    titleClass: 'card-title-cyan',
    subtitle: 'Ship It',
    description: 'Conditional helpers, infer unwraps, mapped Partial-likes, one branded ID, playground demos.',
    code: 'extends · infer\nmap · template · brand',
  },
  {
    icon: '🧪',
    title: 'Quality Bar',
    titleClass: 'card-title-purple',
    subtitle: 'Prove',
    description: 'Each helper has a failing assignment that the type correctly rejects.',
    code: 'expect-error cases\nin playground',
  },
  {
    icon: '🗺️',
    title: '201–205 Map',
    titleClass: 'card-title-amber',
    subtitle: 'Arc',
    description: 'Branch → capture → transform → string/ID precision → ship the toolkit.',
    code: 'if-types · infer\nmap · strings · done',
  },
];

const PRACTICE = [
  {
    icon: '📦',
    title: 'helpers.ts',
    titleClass: 'card-title-cyan',
    subtitle: 'Portfolio',
    description: 'Export NonNull, Elem, MyPartial, HandlerNames, and UserId brand in one module.',
    code: 'export type NonNull<T>\nexport type UserId = ...',
  },
  {
    icon: '🎬',
    title: '5-Min Demo',
    titleClass: 'card-title-purple',
    subtitle: 'Show',
    description: 'Walk a teammate: broken JS bug → typed helper → brand stopping an ID mixup.',
    code: 'bug → type → brand',
  },
  {
    icon: '📝',
    title: 'Cheat Card',
    titleClass: 'card-title-amber',
    subtitle: 'Docs',
    description: 'One page: when to use extends, infer, mapped, template, brand.',
    code: '5 tools · 1 example each',
  },
  {
    icon: '🔜',
    title: 'What Comes Next',
    titleClass: 'card-title-lime',
    subtitle: 'Day 211',
    description: 'Next arc — app patterns (Days 211–215): satisfies, unions, React typing, and Zod.',
    link: { href: '/day-211', label: 'Go to Day 211 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'TS Handbook',
    titleClass: 'card-title-cyan',
    subtitle: 'Docs',
    description: 'Full language handbook.',
    link: { href: HANDBOOK, label: 'Open handbook →', external: true },
  },
  {
    icon: '🧾',
    title: 'Cheatsheets',
    titleClass: 'card-title-purple',
    subtitle: 'Quick Ref',
    description: 'Official TypeScript cheatsheets.',
    link: { href: CHEAT, label: 'Open cheatsheets →', external: true },
  },
  {
    icon: '🎬',
    title: 'TS Series',
    titleClass: 'card-title-amber',
    subtitle: 'Hub',
    description: 'Illustrated episodes on this site.',
    link: { href: '/typescript', label: 'Open /typescript →' },
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

export default function Day205() {
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
          <Link to="/day-204" className="day001-nav-btn day001-nav-prev">← Day 204</Link>
          <p className="day001-datetime">TypeScript Day 205 · 24 Jul 2027</p>
          <Link to="/day-206" className="day001-nav-btn day001-nav-next">Day 206 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Milestone</span><span>Day 205</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 205 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">ADVANCED TYPESCRIPT MILESTONE</p>
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
          Day 205 closes the advanced TypeScript arc. Ship a small <strong>type toolkit</strong> — conditionals, infer, mapped types, templates, and brands — with playground proof.
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
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day205</span><span>#Milestone</span><span>#Year1</span>
        </footer>
      </div>
    </div>
  );
}
