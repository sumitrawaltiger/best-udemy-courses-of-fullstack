import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_MODULES = 'https://www.typescriptlang.org/docs/handbook/2/modules.html';
const TYPESCRIPT_ESLINT = 'https://typescript-eslint.io/';

const LEARNT_TODAY = [
  { title: 'ES modules', text: 'each file is a module; export what others need, import what you use' },
  { title: 'Named vs default exports', text: 'named exports for many symbols, a single default for the main one — prefer named for refactors' },
  { title: 'Type-only imports', text: 'import type { User } makes it explicit that an import is erased at compile time' },
  { title: 'Path aliases', text: 'tsconfig paths turn ../../utils into @/utils for clean, stable imports' },
  { title: '.d.ts declaration files', text: 'ambient type files describe JS libraries so TypeScript understands them' },
  { title: 'ESLint', text: 'typescript-eslint catches bug-prone patterns beyond what the compiler checks' },
  { title: 'Prettier', text: 'an opinionated formatter — stop arguing about style, format on save' },
  { title: 'tsx / ts-node', text: 'run .ts files directly in dev without a separate build step' },
];

const MODULES = [
  {
    icon: '📦', title: 'import / export', titleClass: 'card-title-cyan', subtitle: 'ES Modules',
    description:
      'Every file is a module. Export the symbols others need and import the ones you use. Prefer named exports — they rename safely and autocomplete better than a default.',
    code: '// math.ts\nexport const add = (a: number, b: number) => a + b;\nexport default class Calc {}\n\n// app.ts\nimport Calc, { add } from "./math";',
  },
  {
    icon: '🏷️', title: 'Type-Only Imports', titleClass: 'card-title-purple', subtitle: 'Erased At Build',
    description:
      'import type makes it explicit that you’re importing only a type — it’s stripped from the output and never causes a runtime dependency. Path aliases keep imports short and stable.',
    code: 'import type { User } from "./types";\nimport { getUser } from "@/lib/user"; // path alias\n// "@/*" mapped in tsconfig "paths"',
  },
];

const TOOLING = [
  {
    icon: '🧹', title: 'ESLint', titleClass: 'card-title-cyan', subtitle: 'Catch Bad Patterns',
    description:
      'typescript-eslint adds type-aware lint rules on top of the compiler — no-floating-promises, no-explicit-any and more. It flags mistakes tsc alone won’t.',
    code: '# setup\nnpm i -D eslint typescript-eslint\n// eslint.config.js → recommended rules\n// then: npx eslint src',
  },
  {
    icon: '💅', title: 'Prettier', titleClass: 'card-title-purple', subtitle: 'Format On Save',
    description:
      'Prettier reformats code to one consistent style automatically. Wire it to format on save and code reviews stop being about spacing and quotes.',
    code: '# setup\nnpm i -D prettier\n// .prettierrc → { "singleQuote": true }\n// format on save in your editor',
  },
  {
    icon: '⚡', title: 'Run With tsx', titleClass: 'card-title-amber', subtitle: 'No Build Step',
    description:
      'In development, tsx (or ts-node) executes TypeScript directly, so you skip a manual compile while iterating. Build to JS with tsc for production.',
    code: '# dev — run TS directly\nnpx tsx watch src/index.ts\n\n# prod — compile then run\nnpx tsc && node dist/index.js',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Modules', titleClass: 'card-title-cyan', subtitle: 'Handbook',
    description:
      'The TypeScript modules chapter — export/import forms, type-only imports, module resolution and declaration files, with examples.',
    link: { href: TS_MODULES, label: 'Open the Modules docs →', external: true },
  },
  {
    icon: '🧹', title: 'typescript-eslint', titleClass: 'card-title-purple', subtitle: 'Linting',
    description:
      'The official ESLint tooling for TypeScript — setup, recommended configs, and the type-aware rules that catch real bugs.',
    link: { href: TYPESCRIPT_ESLINT, label: 'Open typescript-eslint →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Async TypeScript', titleClass: 'card-title-amber', subtitle: 'Day 50 Preview',
    description:
      'Tomorrow — typing asynchronous code: Promise<T>, async/await, typed fetch and handling errors safely with unknown in catch.',
    link: { href: '/day-050', label: 'Go to Day 50 →' },
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

export default function Day049() {
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
          <Link to="/day-048" className="day001-nav-btn day001-nav-prev">← Day 48</Link>
          <p className="day001-datetime">TypeScript Day 49</p>
          <Link to="/day-050" className="day001-nav-btn day001-nav-next">Day 50 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Modules &amp; Tooling</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 49 <span aria-hidden="true">📦</span></h1>
              <p className="day001-day-theme">MODULES &amp; TOOLING</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '49%' }} /></div>

        <p className="day001-summary">
          Real projects need structure and tooling. Every file is an <strong>ES module</strong>: prefer{' '}
          <strong>named exports</strong> (they refactor cleanly), use <code>import type</code> for types that should be{' '}
          <strong>erased</strong> at build, and set <strong>path aliases</strong> (<code>@/utils</code>) in tsconfig.
          On the tooling side, <strong>ESLint</strong> (typescript-eslint) catches bug-prone patterns the compiler
          misses, <strong>Prettier</strong> formats on save so reviews aren’t about spacing, and <strong>tsx</strong>{' '}
          runs <code>.ts</code> directly in dev while <code>tsc</code> builds for production. <em>Next: async code.</em>
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

        <CardSection icon="📦" title="ES MODULES" cards={MODULES} columns={2} />
        <CardSection icon="🧹" title="LINT · FORMAT · RUN" cards={TOOLING} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#ESLint</span><span>#Prettier</span>
        </footer>
      </div>
    </div>
  );
}
