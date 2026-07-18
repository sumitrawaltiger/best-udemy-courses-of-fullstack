import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_MODULES = 'https://www.typescriptlang.org/docs/handbook/2/modules.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'ES modules', text: 'each file is its own module — `export` what you share, `import` what you need' },
  { title: 'Named exports', text: '`export function add()` / `import { add } from "./math"` — many per file' },
  { title: 'Default export', text: '`export default` — one main thing per file, imported under any name' },
  { title: 'Re-exports', text: '`export * from "./math"` bundles a folder into one entry point (barrel file)' },
  { title: 'type-only imports', text: '`import type { User }` — erased entirely, no runtime cost' },
  { title: 'Declaration files', text: '.d.ts files describe the types of plain-JS libraries' },
  { title: 'DefinitelyTyped', text: '`npm i -D @types/xyz` pulls community types for untyped libraries' },
  { title: 'declare', text: 'describes something that exists at runtime but has no TS source' },
  { title: 'moduleResolution', text: 'tsconfig tells TS how to find modules — "bundler" for Vite/modern tooling' },
  { title: 'Path aliases', text: 'import from "@/utils" instead of "../../../utils"' },
];

const EXPORTS = [
  {
    icon: '📤', title: 'Named Exports', titleClass: 'card-title-cyan', subtitle: 'Many Per File',
    description: 'Export as many values as you like by name, then import exactly the ones you need. The names must match — great for tree-shaking and clarity.',
    code: '// math.ts\nexport const PI = 3.14;\nexport function add(a: number, b: number) { return a + b; }\n// app.ts\nimport { add, PI } from "./math";',
  },
  {
    icon: '⭐', title: 'Default Export', titleClass: 'card-title-purple', subtitle: 'One Main Export',
    description: 'A file can have a single default export — its "main" thing. Import it under any name you choose. React components often use this.',
    code: '// User.ts\nexport default class User {}\n// app.ts\nimport User from "./User";',
  },
  {
    icon: '🛢️', title: 'Barrel Files', titleClass: 'card-title-amber', subtitle: 'Re-export',
    description: 'Re-export from an index file so consumers import from one clean path instead of many deep ones — a tidy public API for a folder.',
    code: '// index.ts\nexport * from "./math";\nexport { default as User } from "./User";',
  },
];

const TYPES_IN = [
  {
    icon: '🏷️', title: 'type-only Imports', titleClass: 'card-title-cyan', subtitle: 'Zero Runtime',
    description: 'import type brings in only the type, guaranteed to be erased from the compiled JS. It documents intent and avoids accidental runtime dependencies.',
    code: 'import type { User } from "./types";\nfunction show(u: User) {}',
  },
  {
    icon: '📄', title: 'Declaration Files', titleClass: 'card-title-blue', subtitle: '.d.ts',
    description: 'A .d.ts file contains only types — no implementation. TypeScript uses it to understand plain-JavaScript libraries and your own runtime globals.',
    code: '// legacy.d.ts\ndeclare function legacyInit(config: object): void;',
  },
  {
    icon: '📦', title: '@types Packages', titleClass: 'card-title-amber', subtitle: 'DefinitelyTyped',
    description: 'Many JS libraries ship without types. Install the community @types package and TypeScript instantly understands the library’s API.',
    code: 'npm i -D @types/node\n// now Node globals are typed',
  },
  {
    icon: '🌍', title: 'declare Globals', titleClass: 'card-title-lime', subtitle: 'Describe What Exists',
    description: 'Use declare to tell TypeScript about values that exist at runtime (a script global, an env var) without providing the implementation.',
    code: 'declare const APP_VERSION: string;\nconsole.log(APP_VERSION);',
  },
];

const RESOLUTION = [
  {
    icon: '🧭', title: 'Module Resolution', titleClass: 'card-title-cyan', subtitle: 'How TS Finds Files',
    description: 'moduleResolution in tsconfig controls how imports are located. Modern Vite/Next projects use "bundler" so imports resolve like your bundler does.',
    code: '// tsconfig.json\n"moduleResolution": "bundler",\n"module": "ESNext"',
  },
  {
    icon: '🗂️', title: 'Path Aliases', titleClass: 'card-title-purple', subtitle: 'Clean Imports',
    description: 'Configure paths to import from "@/utils" instead of "../../../utils" — cleaner code and easier refactors across a growing project.',
    code: '"baseUrl": ".",\n"paths": { "@/*": ["src/*"] }',
  },
  {
    icon: '🔁', title: 'isolatedModules', titleClass: 'card-title-amber', subtitle: 'Bundler-Friendly',
    description: 'With bundlers like Vite, each file is transpiled alone. isolatedModules makes TypeScript flag patterns that can’t be compiled file-by-file.',
    code: '"isolatedModules": true',
  },
  {
    icon: '🔜', title: 'Next: Typing the DOM', titleClass: 'card-title-lime', subtitle: 'Day 12 Preview',
    description: 'Tomorrow: typing the browser — DOM types, typed elements from querySelector, typed events, and the non-null assertion.',
    link: { href: '/day-012', label: 'Go to Day 12 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Modules', titleClass: 'card-title-cyan', subtitle: 'TS Handbook',
    description: 'The handbook chapter on ES modules in TypeScript — exports/imports, type-only imports, and how module resolution works.',
    link: { href: TS_MODULES, label: 'Read the Modules chapter →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Multi-File Mode',
    description: 'The Playground supports multiple files — export from one and import into another to watch module resolution and type-only imports in action.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Every React/Next.js file is a module and every npm library needs types — modules are the plumbing of the whole year’s code.',
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

export default function Day011() {
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
          <Link to="/day-010" className="day001-nav-btn day001-nav-prev">← Day 10</Link>
          <p className="day001-datetime">TypeScript Day 11</p>
          <Link to="/day-012" className="day001-nav-btn day001-nav-next">Day 12 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Modules</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 11 <span aria-hidden="true">📦</span></h1>
              <p className="day001-day-theme">MODULES & DECLARATION FILES</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '11%' }} /></div>

        <p className="day001-summary">
          Day 11 organizes code across files. I used ES <strong>modules</strong> — <strong>named</strong> and{' '}
          <strong>default</strong> exports, <strong>barrel</strong> re-exports, and <code>import type</code> for
          zero-runtime type imports. I learned how <strong>.d.ts declaration files</strong> and{' '}
          <code>@types</code> packages let TypeScript understand plain-JS libraries, used <code>declare</code>{' '}
          for globals, and configured <strong>module resolution</strong> and path aliases in tsconfig.
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

        <CardSection icon="📤" title="EXPORTS & IMPORTS" cards={EXPORTS} columns={3} />
        <CardSection icon="🏷️" title="TYPES ACROSS FILES" cards={TYPES_IN} columns={4} />
        <CardSection icon="🧭" title="RESOLUTION & CONFIG" cards={RESOLUTION} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Modules</span><span>#WebDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
