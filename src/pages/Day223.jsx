import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PACKAGES = 'https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html';
const EXPORTS = 'https://nodejs.org/api/packages.html#packagejson-exports';

const LEARNT_TODAY = [
  { title: 'types field', text: 'package.json types or exports.types points consumers at .d.ts' },
  { title: 'exports map', text: 'modern packages use exports for ESM/CJS + types entry points' },
  { title: 'declaration emit', text: 'tsc with declaration: true is the default path for libs' },
  { title: 'files / sideEffects', text: 'publish only dist + README; keep the tarball small' },
  { title: 'semver types', text: 'breaking type changes are breaking releases for TS consumers' },
  { title: 'prepublish', text: 'typecheck + build before npm publish' },
  { title: 'What’s next', text: 'codegen can produce the types your package consumes from OpenAPI' },
];

const CORE = [
  {
    icon: '📤',
    title: 'package.json',
    titleClass: 'card-title-cyan',
    subtitle: 'Entry',
    description: 'Point main/module/types (or exports) at emitted JS and .d.ts.',
    code: '{\n  "name": "@acme/utils",\n  "main": "./dist/index.js",\n  "types": "./dist/index.d.ts",\n  "exports": {\n    ".": {\n      "types": "./dist/index.d.ts",\n      "import": "./dist/index.js"\n    }\n  }\n}',
  },
  {
    icon: '🏗️',
    title: 'Build Types',
    titleClass: 'card-title-purple',
    subtitle: 'Emit',
    description: 'Library tsconfig emits JS + declarations to dist/.',
    code: '{\n  "compilerOptions": {\n    "declaration": true,\n    "outDir": "dist",\n    "rootDir": "src"\n  }\n}',
  },
  {
    icon: '🧾',
    title: 'Semver Care',
    titleClass: 'card-title-amber',
    subtitle: 'API',
    description: 'Removing an exported type or making a param required is a major bump.',
    code: '// before: name?: string\n// after:  name: string  → MAJOR',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'Tiny Lib',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Publish-ready folder: src/index.ts, build to dist, types field resolves in a demo app.',
    code: 'npm pack --dry-run',
  },
  {
    icon: '🔍',
    title: 'exports Check',
    titleClass: 'card-title-purple',
    subtitle: 'Resolve',
    description: 'Import from package root only — deep imports should fail if exports blocks them.',
    code: 'import { add } from \'@acme/utils\';',
  },
  {
    icon: '📝',
    title: 'Changelog Note',
    titleClass: 'card-title-amber',
    subtitle: 'Docs',
    description: 'Write one changelog line for a type-breaking change vs a non-breaking add.',
    code: 'BREAKING: ...\nfeat: add OptionalId helper',
  },
  {
    icon: '🔜',
    title: 'Next: Codegen',
    titleClass: 'card-title-lime',
    subtitle: 'Day 224',
    description: 'Tomorrow — OpenAPI/codegen to TypeScript.',
    link: { href: '/day-224', label: 'Go to Day 224 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'Publishing .d.ts',
    titleClass: 'card-title-cyan',
    subtitle: 'Handbook',
    description: 'How to publish declaration files.',
    link: { href: PACKAGES, label: 'Open publishing →', external: true },
  },
  {
    icon: '📦',
    title: 'exports',
    titleClass: 'card-title-purple',
    subtitle: 'Node',
    description: 'package.json exports field.',
    link: { href: EXPORTS, label: 'Open Node exports →', external: true },
  },
  {
    icon: '📚',
    title: 'Day 222',
    titleClass: 'card-title-amber',
    subtitle: 'Prior',
    description: 'Monorepo packages you might publish.',
    link: { href: '/day-222', label: 'Open Day 222 →' },
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

export default function Day223() {
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
          <Link to="/day-222" className="day001-nav-btn day001-nav-prev">← Day 222</Link>
          <p className="day001-datetime">TypeScript Day 223 · 11 Aug 2027</p>
          <Link to="/day-224" className="day001-nav-btn day001-nav-next">Day 224 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Packages</span><span>Day 223</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 223 <span aria-hidden="true">📤</span></h1>
              <p className="day001-day-theme">PUBLISHING A TYPED PACKAGE</p>
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
          Day 223 ships types to others. Emit <strong>.d.ts</strong>, set <strong>types/exports</strong>, and treat type breaks as <strong>semver majors</strong>.
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

        <CardSection icon="📤" title="1 · PUBLISH TYPES" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day223</span><span>#npm</span><span>#d.ts</span>
        </footer>
      </div>
    </div>
  );
}
