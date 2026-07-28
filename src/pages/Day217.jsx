import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DTS = 'https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html';
const AUGMENT = 'https://www.typescriptlang.org/docs/handbook/declaration-merging.html';

const LEARNT_TODAY = [
  { title: '.d.ts files', text: 'describe types for JS that has no types — ambient modules and globals' },
  { title: 'DefinitelyTyped', text: '@types/package often appears automatically via types versions' },
  { title: 'declare module', text: 'shim an untyped dependency so imports type-check' },
  { title: 'Module augmentation', text: 'add fields to existing interfaces (e.g. Express Request) safely' },
  { title: 'env types', text: 'ImportMetaEnv / process.env typings live in vite-env.d.ts style files' },
  { title: 'ship types', text: 'libraries emit .d.ts with declaration: true for consumers' },
  { title: 'What’s next', text: 'turn the dial up on strictness and migrate JS gradually' },
];

const CORE = [
  {
    icon: '📜',
    title: 'Ambient Module',
    titleClass: 'card-title-cyan',
    subtitle: 'Shim',
    description: 'When a package has no types, declare a minimal module shape.',
    code: 'declare module \'legacy-widget\' {\n  export function mount(el: HTMLElement): void;\n}',
  },
  {
    icon: '🧩',
    title: 'Augment',
    titleClass: 'card-title-purple',
    subtitle: 'Extend',
    description: 'Merge into a library interface instead of casting everywhere.',
    code: 'declare global {\n  interface Window {\n    analytics?: { track: (e: string) => void };\n  }\n}\nexport {};',
  },
  {
    icon: '📤',
    title: 'Emit .d.ts',
    titleClass: 'card-title-amber',
    subtitle: 'Libs',
    description: 'For packages, enable declaration (and declarationMap) so consumers get autocomplete.',
    code: '{\n  "declaration": true,\n  "declarationMap": true\n}',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'Shim One Lib',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Create types/legacy.d.ts for a fake untyped import and use it from a .ts file.',
    code: 'declare module \'fake-lib\' {\n  export const version: string;\n}',
  },
  {
    icon: '🔍',
    title: 'Window Flag',
    titleClass: 'card-title-purple',
    subtitle: 'Augment',
    description: 'Augment Window with a feature flag and read it without any.',
    code: 'window.analytics?.track("signup");',
  },
  {
    icon: '📝',
    title: 'Env Types',
    titleClass: 'card-title-amber',
    subtitle: 'Vite',
    description: 'Type ImportMetaEnv for VITE_API_URL so missing env keys error in TS.',
    code: 'interface ImportMetaEnv {\n  readonly VITE_API_URL: string;\n}',
  },
  {
    icon: '🔜',
    title: 'Next: Strict Migration',
    titleClass: 'card-title-lime',
    subtitle: 'Day 218',
    description: 'Tomorrow — strict mode and JS → TS migration.',
    link: { href: '/day-218', label: 'Go to Day 218 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'Declaration Files',
    titleClass: 'card-title-cyan',
    subtitle: 'Handbook',
    description: 'Writing .d.ts files.',
    link: { href: DTS, label: 'Open handbook →', external: true },
  },
  {
    icon: '🧩',
    title: 'Declaration Merging',
    titleClass: 'card-title-purple',
    subtitle: 'Docs',
    description: 'Augmenting existing types.',
    link: { href: AUGMENT, label: 'Open merging →', external: true },
  },
  {
    icon: '📂',
    title: 'Day 216',
    titleClass: 'card-title-amber',
    subtitle: 'Prior',
    description: 'Modules and aliases that use these types.',
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

export default function Day217() {
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
          <Link to="/day-216" className="day001-nav-btn day001-nav-prev">← Day 216</Link>
          <p className="day001-datetime">TypeScript Day 217 · 5 Aug 2027</p>
          <Link to="/day-218" className="day001-nav-btn day001-nav-next">Day 218 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Tooling</span><span>Day 217</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 217 <span aria-hidden="true">📜</span></h1>
              <p className="day001-day-theme">DECLARATION FILES & AUGMENTATION</p>
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
          Day 217 types the gaps. Write <strong>.d.ts</strong> shims, <strong>augment</strong> globals carefully, and emit declarations from libraries.
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

        <CardSection icon="📜" title="1 · DECLARATIONS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day217</span><span>#d.ts</span><span>#Ambient</span>
        </footer>
      </div>
    </div>
  );
}
