import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NODE_TS = 'https://nodejs.org/en/learn/typescript/run';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: '@types/node', text: 'install it so Node globals (process, fs, path, Buffer) are fully typed' },
  { title: 'Running .ts on Node', text: 'ts-node, tsx, or Node’s built-in TS support run TypeScript without a manual build' },
  { title: 'ESM vs CommonJS', text: 'set "module" and package "type" so imports resolve the way Node expects' },
  { title: 'process.argv', text: 'command-line arguments are typed string[] — parse them for a CLI' },
  { title: 'process.env', text: 'env vars are string | undefined — validate them, don’t assume they exist' },
  { title: 'fs/promises', text: 'the promise-based file API pairs perfectly with async/await and types' },
  { title: 'path module', text: 'build cross-platform paths with typed helpers instead of string concatenation' },
  { title: 'tsconfig for Node', text: 'target a modern Node, module NodeNext, and types: ["node"]' },
  { title: 'Typed config', text: 'parse env with a schema (Zod) into a typed, validated config object' },
  { title: 'Build a CLI', text: 'combine argv, fs, and types into a small, safe command-line tool' },
];

const SETUP = [
  {
    icon: '📦', title: '@types/node', titleClass: 'card-title-cyan', subtitle: 'Type The Runtime',
    description: 'Node’s built-ins aren’t typed by default. Install @types/node and process, fs, path, and Buffer all gain full type information and autocomplete.',
    code: 'npm i -D typescript @types/node tsx',
  },
  {
    icon: '▶️', title: 'Run TypeScript', titleClass: 'card-title-purple', subtitle: 'ts-node / tsx',
    description: 'Run a .ts file directly with tsx (fast) or ts-node during development; for production, compile with tsc and run the emitted .js. No separate step while learning.',
    code: 'npx tsx script.ts\n# or: node --experimental-strip-types script.ts',
  },
  {
    icon: '🧭', title: 'ESM vs CommonJS', titleClass: 'card-title-amber', subtitle: 'Module System',
    description: 'Node supports both module systems. Set "type": "module" in package.json and module "NodeNext" in tsconfig for modern ESM imports.',
    code: '// package.json\n"type": "module"\n// tsconfig.json\n"module": "NodeNext"',
  },
];

const APIS = [
  {
    icon: '⌨️', title: 'process.argv', titleClass: 'card-title-cyan', subtitle: 'CLI Arguments',
    description: 'Command-line arguments arrive as a typed string[]. Slice off the node and script paths, then parse the rest into your CLI’s options.',
    code: 'const args = process.argv.slice(2); // string[]\nconst [command, target] = args;',
  },
  {
    icon: '🔑', title: 'process.env', titleClass: 'card-title-blue', subtitle: 'Env Vars',
    description: 'Every env var is string | undefined. TypeScript forces you to handle "missing", which prevents the classic "undefined config" crash in production.',
    code: 'const port = process.env.PORT;\nif (!port) throw new Error("PORT not set");',
  },
  {
    icon: '📄', title: 'fs/promises', titleClass: 'card-title-amber', subtitle: 'Typed File I/O',
    description: 'The promise-based fs API reads and writes files with async/await and precise types — no callbacks, and errors flow through try/catch cleanly.',
    code: 'import { readFile } from "node:fs/promises";\nconst text = await readFile("data.json", "utf8");',
  },
  {
    icon: '🧱', title: 'path Module', titleClass: 'card-title-lime', subtitle: 'Cross-Platform Paths',
    description: 'Use path.join and path.resolve instead of gluing strings — typed, and correct on Windows, macOS, and Linux alike.',
    code: 'import { join } from "node:path";\nconst file = join(process.cwd(), "data", "in.json");',
  },
];

const APPLY = [
  {
    icon: '⚙️', title: 'Typed Config', titleClass: 'card-title-cyan', subtitle: 'Validate env',
    description: 'Parse process.env with a Zod schema into a typed config object at startup. Fail fast with a clear message if anything is missing or malformed.',
    code: 'const Env = z.object({ PORT: z.coerce.number() });\nexport const env = Env.parse(process.env);',
  },
  {
    icon: '🛠️', title: 'Build A CLI', titleClass: 'card-title-purple', subtitle: 'argv + fs + types',
    description: 'Combine argv parsing, typed file I/O, and your error patterns into a small command-line tool — the first real, runnable TypeScript program of the phase.',
    code: 'const [cmd] = process.argv.slice(2);\nif (cmd === "list") await printTasks();',
  },
  {
    icon: '🧾', title: 'tsconfig For Node', titleClass: 'card-title-amber', subtitle: 'The Right Options',
    description: 'Target a recent Node, use module/moduleResolution NodeNext, and include "node" in types so the compiler knows the runtime.',
    code: '"target": "ES2022",\n"module": "NodeNext",\n"types": ["node"]',
  },
  {
    icon: '🔜', title: 'Next: OOP Patterns', titleClass: 'card-title-lime', subtitle: 'Day 19 Preview',
    description: 'Tomorrow: classic design patterns in TypeScript — factory, strategy, and singleton — typed with interfaces and generics.',
    link: { href: '/day-019', label: 'Go to Day 19 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'TypeScript On Node', titleClass: 'card-title-cyan', subtitle: 'Official Guide',
    description: 'Node’s own guide to running TypeScript — tooling options, module settings, and the modern built-in TS support.',
    link: { href: NODE_TS, label: 'Read the Node guide →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Prototype Logic',
    description: 'The Playground can’t run Node APIs, but it’s perfect for shaping the types your CLI will use before you wire up fs and argv locally.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Node + TypeScript underpins Next.js API routes and tooling. Running real typed programs bridges the gap from theory to shipping.',
    link: { href: '/roadmap', label: 'See the full roadmap →' },
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

export default function Day018() {
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
          <Link to="/day-017" className="day001-nav-btn day001-nav-prev">← Day 17</Link>
          <p className="day001-datetime">TypeScript Day 18 · 3 Aug 2026</p>
          <Link to="/day-019" className="day001-nav-btn day001-nav-next">Day 19 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Node.js</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 18 <span aria-hidden="true">🟢</span></h1>
              <p className="day001-day-theme">TYPESCRIPT WITH NODE.JS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '18%' }} /></div>

        <p className="day001-summary">
          Day 18 runs TypeScript on the server. I installed <code>@types/node</code> to type Node’s globals, ran{' '}
          <code>.ts</code> files with <strong>tsx</strong>, and worked with <strong>process.argv</strong>,{' '}
          <strong>process.env</strong>, <code>fs/promises</code>, and <code>path</code>. I set up a Node-flavoured{' '}
          <strong>tsconfig</strong> (NodeNext), validated env into a typed config, and started building a small
          typed <strong>CLI</strong> — real, runnable TypeScript beyond the browser.
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

        <CardSection icon="🧰" title="NODE + TS SETUP" cards={SETUP} columns={3} />
        <CardSection icon="🔌" title="CORE NODE APIS" cards={APIS} columns={4} />
        <CardSection icon="🛠️" title="APPLYING IT" cards={APPLY} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#NodeJS</span><span>#WebDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
