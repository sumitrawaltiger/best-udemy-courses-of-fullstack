import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TSCONFIG = 'https://www.typescriptlang.org/tsconfig#paths';
const MODULES = 'https://www.typescriptlang.org/docs/handbook/modules.html';

const LEARNT_TODAY = [
  { title: 'Path aliases', text: 'map @/ to src/ in tsconfig paths so imports stay short and stable' },
  { title: 'baseUrl', text: 'paths need baseUrl (often ".") so the compiler can resolve aliases' },
  { title: 'Bundler sync', text: 'Vite/Webpack must mirror the same aliases or runtime imports break' },
  { title: 'Extension rules', text: 'moduleResolution bundler/nodenext changes whether .js extensions are required' },
  { title: 'Public API', text: 'prefer importing from package entry points, not deep relative ../../ chains' },
  { title: 'Barrel files', text: 'index.ts re-exports help — but avoid circular barrels' },
  { title: 'What’s next', text: 'when JS libs lack types, declaration files fill the gap' },
];

const CORE = [
  {
    icon: '📂',
    title: 'tsconfig paths',
    titleClass: 'card-title-cyan',
    subtitle: 'Aliases',
    description: 'Declare path mappings once. Keep them few and obvious.',
    code: '{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@/*": ["src/*"]\n    }\n  }\n}',
  },
  {
    icon: '🔗',
    title: 'Import Style',
    titleClass: 'card-title-purple',
    subtitle: 'Clean',
    description: 'Use the alias at feature boundaries. Relative imports are fine for siblings.',
    code: 'import { Button } from \'@/components/Button\';\nimport { formatDate } from \'./formatDate\';',
  },
  {
    icon: '🛠️',
    title: 'Match the Bundler',
    titleClass: 'card-title-amber',
    subtitle: 'Vite',
    description: 'Configure resolve.alias to the same @ → src mapping TypeScript uses.',
    code: '// vite.config.ts\nresolve: {\n  alias: { \'@\': path.resolve(__dirname, \'src\') }\n}',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'Add @ Alias',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Wire paths in tsconfig and the bundler. Convert three deep imports to @/.',
    code: 'import x from \'../../../lib/x\'\n// → import x from \'@/lib/x\'',
  },
  {
    icon: '🔍',
    title: 'Break Test',
    titleClass: 'card-title-purple',
    subtitle: 'Sync',
    description: 'Remove the Vite alias only. Confirm TS passes but the app fails — then restore.',
    code: 'tsc OK · runtime fail\n→ fix alias',
  },
  {
    icon: '📝',
    title: 'Import Guide',
    titleClass: 'card-title-amber',
    subtitle: 'Docs',
    description: 'Write a 5-line team rule: when to use @/ vs relative.',
    code: '@/ for features\n./ for siblings',
  },
  {
    icon: '🔜',
    title: 'Next: .d.ts',
    titleClass: 'card-title-lime',
    subtitle: 'Day 217',
    description: 'Tomorrow — declaration files and ambient types.',
    link: { href: '/day-217', label: 'Go to Day 217 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'paths',
    titleClass: 'card-title-cyan',
    subtitle: 'tsconfig',
    description: 'Official paths option docs.',
    link: { href: TSCONFIG, label: 'Open paths docs →', external: true },
  },
  {
    icon: '📦',
    title: 'Modules',
    titleClass: 'card-title-purple',
    subtitle: 'Handbook',
    description: 'How TypeScript modules resolve.',
    link: { href: MODULES, label: 'Open modules →', external: true },
  },
  {
    icon: '🏁',
    title: 'Day 215',
    titleClass: 'card-title-amber',
    subtitle: 'Prior',
    description: 'App patterns milestone before tooling.',
    link: { href: '/day-215', label: 'Open Day 215 →' },
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

export default function Day216() {
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
          <Link to="/day-215" className="day001-nav-btn day001-nav-prev">← Day 215</Link>
          <p className="day001-datetime">TypeScript Day 216 · 4 Aug 2027</p>
          <Link to="/day-217" className="day001-nav-btn day001-nav-next">Day 217 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Tooling</span><span>Day 216</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 216 <span aria-hidden="true">📂</span></h1>
              <p className="day001-day-theme">PATH ALIASES & MODULES</p>
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
          Day 216 cleans imports. Set <strong>path aliases</strong> in <code>tsconfig</code> and mirror them in the bundler so <code>@/</code> works end to end.
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

        <CardSection icon="📂" title="1 · MODULES & ALIASES" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day216</span><span>#tsconfig</span><span>#Modules</span>
        </footer>
      </div>
    </div>
  );
}
