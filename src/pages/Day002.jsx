import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_INSTALL = 'https://www.typescriptlang.org/download';
const TSCONFIG_DOCS = 'https://www.typescriptlang.org/tsconfig';

const LEARNT_TODAY = [
  { title: 'Install TypeScript', text: 'npm i -D typescript adds the compiler to a project; -g installs it globally for quick scripts' },
  { title: 'tsc --version', text: 'confirms the compiler is on your PATH and shows which version you are running' },
  { title: 'tsc --init', text: 'generates a tsconfig.json — the single file that configures how your whole project compiles' },
  { title: 'tsconfig.json', text: 'sets the target JS version, module system, output folder and how strict the checks are' },
  { title: 'strict mode', text: 'the most valuable flag — turns on all the safety checks; keep it "true" from day one' },
  { title: 'Watch mode', text: 'tsc --watch recompiles automatically on every save, so you see errors instantly' },
  { title: 'ts-node', text: 'runs .ts files directly without a separate build step — handy for scripts and experiments' },
  { title: 'Editor is the compiler', text: 'VS Code uses the same tsc engine, so red squiggles appear before you ever run a build' },
];

const INSTALL = [
  {
    icon: '📦', title: 'Add The Compiler', titleClass: 'card-title-cyan', subtitle: 'npm i -D typescript',
    description:
      'Install TypeScript as a dev dependency so the version is pinned per project. Then invoke it through npx, an npm script, or globally for one-off files.',
    code: '# per project (recommended)\nnpm i -D typescript\nnpx tsc --version\n\n# or global\nnpm i -g typescript',
  },
  {
    icon: '🚀', title: 'Compile & Run', titleClass: 'card-title-purple', subtitle: '.ts → .js → Node',
    description:
      'Run tsc to emit JavaScript, or use ts-node to execute a .ts file directly. Watch mode rebuilds on every save so feedback is instant.',
    code: '# compile once\nnpx tsc index.ts && node index.js\n\n# run directly\nnpx ts-node index.ts\n\n# rebuild on save\nnpx tsc --watch',
  },
];

const CONFIG = [
  {
    icon: '🛠️', title: 'tsc --init', titleClass: 'card-title-cyan', subtitle: 'Create tsconfig',
    description:
      'One command scaffolds a fully commented tsconfig.json. It becomes the source of truth: run tsc with no file args and it compiles the whole project by these rules.',
    code: '$ npx tsc --init\n// → creates tsconfig.json\n// then just: npx tsc',
  },
  {
    icon: '⚙️', title: 'Key Options', titleClass: 'card-title-purple', subtitle: 'The Essentials',
    description:
      'target sets the JS version you emit, module the import style, outDir/rootDir keep source and build separate, and strict switches on every safety check.',
    code: '{\n  "target": "ES2022",\n  "module": "ESNext",\n  "rootDir": "src",\n  "outDir": "dist",\n  "strict": true\n}',
  },
  {
    icon: '🔒', title: 'Turn On strict', titleClass: 'card-title-amber', subtitle: 'Non-Negotiable',
    description:
      'strict bundles noImplicitAny, strictNullChecks and more. It’s where TypeScript earns its keep — leave it on from the start so bad habits never form.',
    footer: 'strict = noImplicitAny + strictNullChecks + …',
  },
];

const RESOURCES = [
  {
    icon: '⬇️', title: 'Install Guide', titleClass: 'card-title-cyan', subtitle: 'Official',
    description:
      'The official download & setup page — npm, per-project vs global, and editor integration for VS Code and others.',
    link: { href: TS_INSTALL, label: 'Open install guide →', external: true },
  },
  {
    icon: '📄', title: 'tsconfig Reference', titleClass: 'card-title-purple', subtitle: 'Every Flag',
    description:
      'The complete tsconfig reference — every compiler option explained with examples. Bookmark it; you’ll come back to tune strictness and paths.',
    link: { href: TSCONFIG_DOCS, label: 'Open tsconfig docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Type Basics', titleClass: 'card-title-amber', subtitle: 'Day 3 Preview',
    description:
      'Tomorrow — the core type system: string, number, boolean, arrays, any vs unknown, and how annotations and inference work together.',
    link: { href: '/day-003', label: 'Go to Day 3 →' },
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

export default function Day002() {
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
          <Link to="/day-001" className="day001-nav-btn day001-nav-prev">← Day 1</Link>
          <p className="day001-datetime">TypeScript Day 2</p>
          <Link to="/day-003" className="day001-nav-btn day001-nav-next">Day 3 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Setup</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 2 <span aria-hidden="true">🛠️</span></h1>
              <p className="day001-day-theme">SETTING UP TYPESCRIPT</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '2%' }} /></div>

        <p className="day001-summary">
          Getting a project running. Install the compiler with <code>npm i -D typescript</code>, then either{' '}
          <code>tsc</code> to emit JavaScript or <code>ts-node</code> to run a <code>.ts</code> file directly.{' '}
          <code>tsc --init</code> scaffolds a <strong>tsconfig.json</strong> — the one file that configures the whole
          project: <code>target</code> (JS version), <code>module</code>, <code>rootDir</code>/<code>outDir</code>, and
          the all-important <strong>strict</strong> flag. Turn <code>strict</code> on from day one — it bundles{' '}
          <code>noImplicitAny</code>, <code>strictNullChecks</code> and more. Run <code>tsc --watch</code> and your
          editor shows errors the instant you save. <em>Next: the core types.</em>
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

        <CardSection icon="📦" title="INSTALL & RUN" cards={INSTALL} columns={2} />
        <CardSection icon="🛠️" title="TSCONFIG.JSON" cards={CONFIG} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#tsconfig</span><span>#DevTools</span>
        </footer>
      </div>
    </div>
  );
}
