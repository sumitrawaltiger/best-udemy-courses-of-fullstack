import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_TSCONFIG = 'https://www.typescriptlang.org/tsconfig';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';
const EP_IMAGE = '/typescript-notes/ep02-setting-up-typescript.jpeg';

const LEARNT_TODAY = [
  { title: 'Install as a dev dependency', text: 'TypeScript is tooling — install it with npm (globally or per project)' },
  { title: 'tsc', text: 'the TypeScript Compiler — the command that type-checks and emits JavaScript' },
  { title: 'tsc --init', text: 'generates a tsconfig.json with sensible, documented defaults' },
  { title: 'tsconfig.json', text: 'tells the compiler how to compile — it never runs in JS, it just gives instructions' },
  { title: 'target', text: 'sets the JavaScript version the compiler emits (e.g. ES2018 / ES2022)' },
  { title: 'module', text: 'the module system for the output — CommonJS or ESNext' },
  { title: 'outDir & rootDir', text: 'source lives in ./src, compiled output goes to ./dist — cleanly separated' },
  { title: 'strict', text: 'enables all strict type-checking options — the safety net worth having on' },
  { title: 'Compile the project', text: 'plain `tsc` compiles every .ts file based on tsconfig.json' },
  { title: 'Watch mode', text: '`tsc -w` recompiles automatically every time you save' },
];

const INSTALL = [
  {
    icon: '📥', title: 'Installing TypeScript', titleClass: 'card-title-cyan', subtitle: 'A Dev Dependency',
    description:
      'TypeScript is a build tool, not a runtime library. Install it with npm — globally for quick experiments, or per project so everyone uses the same version.',
    code: '# Install TypeScript globally\nnpm install -g typescript\n\n# Check version\ntsc -v   → should print the version',
  },
  {
    icon: '⚙️', title: 'The tsc Compiler', titleClass: 'card-title-purple', subtitle: 'Checks + Emits',
    description:
      'tsc is the TypeScript Compiler. It reads your .ts files, checks the types, reports errors, and then generates clean JavaScript that runs anywhere.',
    code: 'tsc          # compile the project\ntsc index.ts # compile a single file',
  },
  {
    icon: '🧾', title: 'tsc --init', titleClass: 'card-title-amber', subtitle: 'Create tsconfig.json',
    description:
      'Generate a documented tsconfig.json in one command, then trim it to the options you actually use. Every real project starts here.',
    code: 'tsc --init   # creates tsconfig.json',
  },
];

const CONFIG = [
  {
    icon: '🎛️', title: 'target', titleClass: 'card-title-cyan', subtitle: 'Which JS Version',
    description:
      'target sets the JavaScript version the compiler emits. Older targets support older browsers; modern targets produce cleaner, smaller output.',
    code: '"target": "ES2018"',
  },
  {
    icon: '📦', title: 'module', titleClass: 'card-title-blue', subtitle: 'Module System',
    description:
      'module chooses how imports/exports are emitted — CommonJS for classic Node, ESNext for modern bundlers and native ES modules.',
    code: '"module": "CommonJS"  // or "ESNext"',
  },
  {
    icon: '📁', title: 'outDir & rootDir', titleClass: 'card-title-amber', subtitle: 'Source vs Build',
    description:
      'rootDir marks where your source lives and outDir where the compiled JavaScript goes — keep ./src and ./dist separate so builds stay clean.',
    code: '"outDir": "./dist",\n"rootDir": "./src"',
  },
  {
    icon: '🚦', title: 'strict', titleClass: 'card-title-lime', subtitle: 'All The Safety',
    description:
      'strict turns on every strict type-checking option at once — the single most valuable flag in the whole file. Always on for new projects.',
    code: '"strict": true,\n"esModuleInterop": true,\n"forceConsistentCasingInFileNames": true',
  },
];

const COMPILE = [
  {
    icon: '🗂️', title: 'Project Structure', titleClass: 'card-title-cyan', subtitle: 'src → dist',
    description:
      'A minimal typed project: your code in src/, the config at the root, and the compiler’s output in dist/. Simple, and it scales.',
    code: 'my-app/\n├─ src/\n│  └─ index.ts\n└─ tsconfig.json',
  },
  {
    icon: '🔁', title: 'Compile The Project', titleClass: 'card-title-purple', subtitle: 'tsc',
    description:
      'Run plain tsc and it compiles every .ts file according to tsconfig.json — no need to list files by hand.',
    code: '# compiles all .ts based on tsconfig.json\ntsc',
  },
  {
    icon: '👀', title: 'Watch Mode', titleClass: 'card-title-amber', subtitle: 'tsc -w',
    description:
      'Watch mode recompiles the moment you save, so you see type errors instantly while you work. The everyday development loop.',
    code: 'tsc -w   # watch mode',
  },
  {
    icon: '📤', title: 'The Output', titleClass: 'card-title-lime', subtitle: 'Clean JavaScript',
    description:
      'The compiler checks types, finds errors, then generates clean JavaScript that runs in any browser or Node.js. Types never reach runtime.',
    code: '// index.ts\nlet message: string = "Hello TypeScript!";\n// → index.js\nvar message = "Hello TypeScript!";',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'tsconfig Reference', titleClass: 'card-title-cyan', subtitle: 'Every Option',
    description:
      'The searchable reference for every tsconfig option with examples and recommendations. Bookmark it — you’ll return all year.',
    link: { href: TS_TSCONFIG, label: 'Open the tsconfig reference →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Toggle Options Live',
    description:
      'The Playground lets you flip target, strict, and module and watch the emitted JavaScript and errors change instantly.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Type System Basics', titleClass: 'card-title-amber', subtitle: 'Day 3 Preview',
    description:
      'Tomorrow is Episode 3 — the type system itself: annotations, inference, primitives, and the any / unknown / never types.',
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
    <>
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
              <div className="day001-tags"><span>TypeScript</span><span>Episode 2</span><span>Setup</span></div>
              <div className="day001-title-block">
                <h1 className="day001-day-num">DAY 2 <span aria-hidden="true">⚙️</span></h1>
                <p className="day001-day-theme">SETTING UP TYPESCRIPT</p>
              </div>
            </div>
            <div className="day001-profile">
              <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
              <div>
                <p className="day001-profile-name">Sumit Rawal</p>
                <p className="day001-profile-role">TS · TYPESCRIPT</p>
              </div>
            </div>
          </div>

          <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '2%' }} /></div>

          <p className="day001-summary">
            <strong>Episode 2</strong> — setting up the environment properly. I installed TypeScript with npm and met{' '}
            <code>tsc</code>, the compiler. Then <code>tsc --init</code> to generate{' '}
            <strong>tsconfig.json</strong> — the file that tells the compiler <em>how</em> to compile (it never runs
            in JS, it just gives instructions). I learned the options that matter: <code>target</code>,{' '}
            <code>module</code>, <code>outDir</code>, <code>rootDir</code>, and <code>strict</code>, then compiled a{' '}
            <code>src → dist</code> project with <code>tsc</code> and <code>tsc -w</code>.{' '}
            <em>Write in TypeScript, run anywhere.</em>
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

          <CardSection icon="📥" title="INSTALLING" cards={INSTALL} columns={3} />
          <CardSection icon="🎛️" title="tsconfig.json — IMPORTANT OPTIONS" cards={CONFIG} columns={4} />
          <CardSection icon="🔁" title="COMPILE TS → JS" cards={COMPILE} columns={4} />
          <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

          <footer className="day001-hashtags">
            <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Episode2</span><span>#tsconfig</span><span>#JSLearnHub</span>
          </footer>
        </div>
      </div>

      <section style={{ background: '#0d1117', padding: '8px 16px 56px', display: 'flex', justifyContent: 'center' }}>
        <figure style={{ maxWidth: '860px', width: '100%', margin: 0 }}>
          <h2 style={{ color: '#e6edf3', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 12px', textAlign: 'center' }}>
            <span aria-hidden="true">📌</span> Episode 2 Notes — Setting Up TypeScript
          </h2>
          <a href={EP_IMAGE} target="_blank" rel="noopener noreferrer">
            <img
              src={EP_IMAGE}
              alt="TypeScript Series Episode 2 — Setting Up TypeScript: installing TypeScript as a dev dependency with npm install -g typescript and checking with tsc -v, the tsc TypeScript Compiler, creating tsconfig.json with tsc --init, a sample tsconfig with compilerOptions target ES2018, module CommonJS, outDir ./dist, rootDir ./src, strict true, esModuleInterop and forceConsistentCasingInFileNames, important options explained (target, module, outDir, rootDir, strict), project structure with src/index.ts and tsconfig.json, and compiling TypeScript to JavaScript with tsc and tsc -w watch mode"
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px', border: '1px solid #2a3441' }}
            />
          </a>
          <figcaption style={{ color: '#8fb6c2', fontSize: '0.82rem', textAlign: 'center', marginTop: '10px' }}>
            My handwritten Episode 2 notes — installing, tsconfig.json options, project structure, and compiling.
            Click to open full size.
          </figcaption>
        </figure>
      </section>
    </>
  );
}
