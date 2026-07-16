import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_HANDBOOK = 'https://www.typescriptlang.org/docs/handbook/intro.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  {
    title: 'What TypeScript is',
    text: 'a strongly-typed superset of JavaScript — every valid JS file is valid TS, plus optional static types',
  },
  {
    title: 'Why add types',
    text: 'catch bugs at compile time (before you run) — typos, wrong arguments, and null mistakes surface in the editor',
  },
  {
    title: 'TS compiles to JS',
    text: 'browsers and Node run JavaScript, so tsc "transpiles" your .ts down to plain .js — types are erased at runtime',
  },
  {
    title: 'Install the compiler',
    text: 'npm i -g typescript gives you tsc — compile a file with `tsc app.ts` to produce app.js',
  },
  {
    title: 'tsconfig.json',
    text: 'the project’s compiler settings — target, module, outDir, and strict; generate one with `tsc --init`',
  },
  {
    title: 'Type annotations',
    text: 'add a type after a colon: `let name: string = "Sumit"` — the compiler now enforces it',
  },
  {
    title: 'Type inference',
    text: 'TypeScript often guesses the type for you — `let n = 5` is inferred as number, no annotation needed',
  },
  {
    title: 'strict mode',
    text: 'turn on "strict": true in tsconfig — the safety net that makes TypeScript actually worth it',
  },
  {
    title: 'ts-node for quick runs',
    text: 'run a .ts file directly during learning with `npx ts-node app.ts` — no manual compile step',
  },
  {
    title: 'Structural typing',
    text: 'TS checks the shape of a value, not its name — "if it has the right fields, it fits"',
  },
];

const WHAT_WHY = [
  {
    icon: '🔷',
    title: 'What is TypeScript?',
    titleClass: 'card-title-cyan',
    subtitle: 'JavaScript + Types',
    description:
      'TypeScript is JavaScript with a type system bolted on. You write almost the same code, but you can describe the shape of your data. The compiler checks it and then produces ordinary JavaScript that runs anywhere JS runs.',
    footer: '+ Prerequisite: you already know HTML5, CSS3 & JavaScript.',
  },
  {
    icon: '🛡️',
    title: 'Why over JavaScript?',
    titleClass: 'card-title-purple',
    subtitle: 'Errors Before Runtime',
    description:
      'In JS a typo like user.nmae is undefined at runtime — maybe deep in production. TypeScript flags it in your editor as you type. Types are living documentation and autocomplete for your whole codebase.',
    code: 'const user = { name: "Sumit" };\nconsole.log(user.nmae); // ❌ TS error: Property \'nmae\' does not exist',
  },
  {
    icon: '🧬',
    title: 'A Superset of JS',
    titleClass: 'card-title-amber',
    subtitle: 'All Your JS Still Works',
    description:
      'Every valid .js file is already valid TypeScript. You adopt types gradually — rename to .ts and add annotations where they help. Nothing you learned in JavaScript is thrown away.',
    link: { href: TS_HANDBOOK, label: 'Read the TS Handbook →', external: true },
  },
];

const SETUP = [
  {
    icon: '📥',
    title: 'Install the Compiler',
    titleClass: 'card-title-green',
    subtitle: 'tsc',
    description:
      'TypeScript ships as an npm package. Install it globally to get the tsc command, then check the version to confirm it’s on your PATH.',
    code: 'npm i -g typescript\ntsc -v   # Version 5.x',
  },
  {
    icon: '⚙️',
    title: 'tsconfig.json',
    titleClass: 'card-title-blue',
    subtitle: 'Project Settings',
    description:
      'Run tsc --init to create a tsconfig. It controls how your project compiles — the target JS version, module system, output folder, and the all-important strict flag.',
    code: '// tsconfig.json (essentials)\n{\n  "compilerOptions": {\n    "target": "ES2022",\n    "outDir": "dist",\n    "strict": true\n  }\n}',
  },
  {
    icon: '🔁',
    title: 'Compile to JavaScript',
    titleClass: 'card-title-cyan',
    subtitle: 'tsc app.ts',
    description:
      'The compiler reads app.ts, type-checks it, and emits app.js. Use tsc --watch to recompile automatically every time you save.',
    code: 'tsc app.ts       # → app.js\ntsc --watch      # recompile on save',
  },
  {
    icon: '⚡',
    title: 'Run Instantly',
    titleClass: 'card-title-pink',
    subtitle: 'ts-node',
    description:
      'While learning, skip the compile-then-run dance. ts-node runs a .ts file directly so you can experiment fast.',
    code: 'npx ts-node app.ts\n// runs the TypeScript file directly',
  },
];

const FIRST_TYPES = [
  {
    icon: '🏷️',
    title: 'Type Annotations',
    titleClass: 'card-title-cyan',
    subtitle: 'The Colon Syntax',
    description:
      'Add a type after a colon to tell TypeScript what a variable holds. Assign the wrong kind of value and the compiler stops you.',
    code: 'let username: string = "Sumit";\nlet age: number = 26;\nlet isDev: boolean = true;\n\nage = "twenty-six"; // ❌ Type \'string\' is not assignable to \'number\'',
  },
  {
    icon: '🔮',
    title: 'Type Inference',
    titleClass: 'card-title-green',
    subtitle: 'TS Guesses For You',
    description:
      'You rarely annotate everything. When you initialize a variable, TypeScript infers its type — so let score = 0 is already a number and gets full checking.',
    code: 'let score = 0;      // inferred: number\nlet course = "TS";  // inferred: string\nscore = "high";     // ❌ error, still typed',
  },
  {
    icon: '🧱',
    title: 'Primitive Types',
    titleClass: 'card-title-blue',
    subtitle: 'The Building Blocks',
    description:
      'string, number, boolean, plus null and undefined. There is no separate int/float — all numbers are number. These are the atoms every larger type is built from.',
    code: 'let a: string;\nlet b: number;\nlet c: boolean;\nlet d: null;\nlet e: undefined;',
  },
  {
    icon: '🚦',
    title: 'strict Mode',
    titleClass: 'card-title-lime',
    subtitle: 'Why TS Is Worth It',
    description:
      'Turn on "strict": true. It enables noImplicitAny, strictNullChecks and more — the checks that actually catch the null/undefined bugs that crash real apps.',
    code: '// with strictNullChecks:\nfunction hi(name?: string) {\n  return name.toUpperCase(); // ❌ name possibly undefined\n}',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'TypeScript Handbook',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Docs',
    description:
      'The canonical, free guide to TypeScript from the team that builds it. Start with "The Basics" and "Everyday Types" — exactly what Day 1 covers.',
    link: { href: TS_HANDBOOK, label: 'Open the Handbook →', external: true },
  },
  {
    icon: '🎮',
    title: 'TS Playground',
    titleClass: 'card-title-purple',
    subtitle: 'Try It In The Browser',
    description:
      'Write TypeScript and watch it compile to JavaScript live, with full error messages — no install needed. The fastest way to test any snippet from today.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🎓',
    title: 'TypeScript Course',
    titleClass: 'card-title-amber',
    subtitle: 'Year 1 · Phase 1',
    description:
      'The Udemy TypeScript Course anchors this 100-day phase (17 Jul – 24 Oct 2026). HTML5, CSS3 & JavaScript are the prerequisites, so we start straight into typed JS.',
    link: { href: 'https://www.udemy.com/course/typescript-course/', label: 'View the course →', external: true },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">
        {card.icon}
      </span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a
            href={card.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="day001-card-link"
          >
            {card.link.label}
          </a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">
            {card.link.label}
          </Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title">
        <span aria-hidden="true">{icon}</span> {title}
      </h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (
          <TopicCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

export default function Day001() {
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
      const scale = Math.min(
        (window.innerHeight - pad) / wrap.scrollHeight,
        (window.innerWidth - pad) / wrap.scrollWidth,
      );

      wrap.style.transform = `scale(${scale})`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
    };

    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);

    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) {
      avatar.addEventListener('load', fitToScreen);
    }

    return () => {
      window.removeEventListener('resize', fitToScreen);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
      <header className="day001-topbar">
        <Link to="/" className="day001-nav-btn day001-nav-home">
          Home
        </Link>
        <Link to="/day-000" className="day001-nav-btn day001-nav-prev">
          ← Day 0
        </Link>
        <p className="day001-datetime">TypeScript Day 1 · 17 Jul 2026</p>
        <Link to="/day-002" className="day001-nav-btn day001-nav-next">
          Day 2 →
        </Link>
      </header>

      <div className="day001-hero">
        <div className="day001-hero-left">
          <div className="day001-tags">
            <span>TypeScript</span>
            <span>Year 1</span>
            <span>Types</span>
          </div>
          <div className="day001-title-block">
            <h1 className="day001-day-num">
              DAY 1 <span aria-hidden="true">🔷</span>
            </h1>
            <p className="day001-day-theme">INTRODUCTION TO TYPESCRIPT</p>
          </div>
        </div>
        <div className="day001-profile">
          <img
            src="/sumit-profile.png"
            alt="Sumit Rawal"
            className="day001-avatar"
            width={48}
            height={48}
          />
          <div>
            <p className="day001-profile-name">Sumit Rawal</p>
            <p className="day001-profile-role">TS · TYPESCRIPT</p>
          </div>
        </div>
      </div>

      <div className="day001-progress-wrap">
        <div className="day001-progress-bar" style={{ width: '1%' }} />
      </div>

      <p className="day001-summary">
        Day one of the 4-year journey — and it starts with <strong>TypeScript</strong>. Since HTML5, CSS3 and
        JavaScript are prerequisites, I dive straight into typed JavaScript: what TypeScript is, why static types
        catch bugs before runtime, and how <code>tsc</code> compiles <code>.ts</code> down to plain{' '}
        <code>.js</code>. I installed the compiler, generated a <code>tsconfig.json</code>, turned on{' '}
        <code>strict</code>, wrote my first type annotations, and saw type inference and errors light up right in the
        editor. JavaScript now has a safety net.
      </p>

      <section className="day001-learnt">
        <h2 className="day001-learnt-title">
          <span className="day001-learnt-line" aria-hidden="true" />
          WHAT I LEARNED TODAY
        </h2>
        <ul className="day001-learnt-list">
          {LEARNT_TODAY.map((item) => (
            <li key={item.title}>
              <span className="day001-check" aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>{item.title}</strong> — {item.text}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <CardSection icon="🔷" title="WHAT & WHY" cards={WHAT_WHY} columns={3} />
      <CardSection icon="🧰" title="SETUP & TOOLING" cards={SETUP} columns={4} />
      <CardSection icon="🏷️" title="FIRST TYPES" cards={FIRST_TYPES} columns={4} />
      <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

      <footer className="day001-hashtags">
        <span>#100DaysOfCode</span>
        <span>#TypeScript</span>
        <span>#TypeSafety</span>
        <span>#WebDev</span>
        <span>#JSLearnHub</span>
      </footer>
      </div>
    </div>
  );
}
