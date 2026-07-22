import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TSNODE = 'https://typestrong.org/ts-node/docs/';
const EXPRESS_TS = 'https://expressjs.com/en/resources/middleware/typescript.html';
const TSX = 'https://tsx.is/';

const LEARNT_TODAY = [
  { title: 'Typed Express', text: 'Year 1 stays on TypeScript — the API gets the same type safety as the frontend' },
  { title: 'tsconfig for Node', text: 'module NodeNext / bundler, strict true, outDir dist for production builds' },
  { title: 'Request typing', text: 'annotate req/res or use RequestHandler so params and body are checked' },
  { title: 'tsx / ts-node', text: 'run .ts directly in dev without a separate compile step' },
  { title: 'Build then node', text: 'production: tsc → node dist/index.js' },
  { title: '@types/express', text: 'install types so req, res, next autocomplete and type-check' },
  { title: 'Env typing', text: 'read process.env into a typed config object — fail fast if secrets are missing' },
  { title: 'Same REST shape', text: 'routes stay identical; only the language of the handlers gains types' },
  { title: 'Foundation continues', text: 'Days 131–135 harden the Express API: TS, Zod, errors, security, deploy' },
];

const CORE = [
  {
    icon: '🔷', title: 'Express + TypeScript', titleClass: 'card-title-cyan', subtitle: 'One Stack',
    description: 'Add typescript, @types/node, @types/express, and a tsconfig. Your existing routes move into .ts files with almost no logic change.',
    code: 'npm i -D typescript tsx @types/node @types/express\nnpx tsc --init',
  },
  {
    icon: '⚙️', title: 'Dev With tsx', titleClass: 'card-title-purple', subtitle: 'Run .ts Directly',
    description: 'tsx watches and runs TypeScript without emitting JS first — perfect for npm run dev on an Express app.',
    code: '{\n  "scripts": {\n    "dev": "tsx watch src/index.ts",\n    "build": "tsc",\n    "start": "node dist/index.js"\n  }\n}',
  },
  {
    icon: '📝', title: 'Typed Handlers', titleClass: 'card-title-amber', subtitle: 'RequestHandler',
    description: 'Import types from express. Annotate params and response bodies so wrong shapes fail at compile time.',
    code: 'import type { RequestHandler } from "express";\n\nconst getTask: RequestHandler = async (req, res) => {\n  const id = Number(req.params.id);\n  res.json({ id });\n};',
  },
];

const SETUP = [
  {
    icon: '📄', title: 'tsconfig Basics', titleClass: 'card-title-cyan', subtitle: 'strict + outDir',
    description: 'Keep strict on. Point rootDir at src and outDir at dist so production builds stay clean.',
    code: '{\n  "compilerOptions": {\n    "target": "ES2022",\n    "module": "NodeNext",\n    "rootDir": "src",\n    "outDir": "dist",\n    "strict": true\n  }\n}',
  },
  {
    icon: '🔐', title: 'Typed Config', titleClass: 'card-title-purple', subtitle: 'Env Once',
    description: 'Centralize process.env into a config object. Throw at boot if JWT_SECRET or DATABASE_URL is missing.',
    code: 'const config = {\n  port: Number(process.env.PORT) || 3000,\n  jwtSecret: process.env.JWT_SECRET!,\n};\nif (!process.env.JWT_SECRET) throw new Error("JWT_SECRET missing");',
  },
  {
    icon: '🏗️', title: 'Prod Build', titleClass: 'card-title-amber', subtitle: 'tsc → node',
    description: 'CI and hosts run npm run build then npm start. Dev stays on tsx; prod runs plain JS.',
    code: 'npm run build && npm start',
  },
  {
    icon: '🔜', title: 'Next: Zod Validation', titleClass: 'card-title-lime', subtitle: 'Day 132 Preview',
    description: 'Tomorrow: validate req.body and query with Zod schemas — reject bad input before it hits the database.',
    link: { href: '/day-132', label: 'Go to Day 132 →' },
  },
];

const RESOURCES = [
  {
    icon: '🔷', title: 'tsx', titleClass: 'card-title-cyan', subtitle: 'Dev Runner',
    description: 'Fast TypeScript execution and watch mode for Node apps.',
    link: { href: TSX, label: 'Read tsx docs →', external: true },
  },
  {
    icon: '📘', title: 'ts-node Docs', titleClass: 'card-title-purple', subtitle: 'Alternative',
    description: 'Another way to run TypeScript on Node when you prefer ts-node.',
    link: { href: TSNODE, label: 'Read ts-node docs →', external: true },
  },
  {
    icon: '🚂', title: 'Express + Types', titleClass: 'card-title-amber', subtitle: 'Guide',
    description: 'Express resources around TypeScript middleware and typing patterns.',
    link: { href: EXPRESS_TS, label: 'Browse Express TS notes →', external: true },
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

export default function Day131() {
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
          <Link to="/day-130" className="day001-nav-btn day001-nav-prev">← Day 130</Link>
          <p className="day001-datetime">Express Day 131</p>
          <Link to="/day-132" className="day001-nav-btn day001-nav-next">Day 132 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>TypeScript</span><span>Backend</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 131 <span aria-hidden="true">🔷</span></h1>
              <p className="day001-day-theme">EXPRESS + TYPESCRIPT</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">EXPRESS · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '36%' }} /></div>

        <p className="day001-summary">
          Day 131 brings <strong>TypeScript</strong> to the API. Install types, run with{' '}
          <strong>tsx</strong> in dev, <strong>tsc</strong> for production, and type handlers so{' '}
          <code>req</code> / <code>res</code> stop being guesswork. Same Express app — safer code.
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

        <CardSection icon="🔷" title="1 · TS ON THE SERVER" cards={CORE} columns={3} />
        <CardSection icon="⚙️" title="2 · CONFIG, ENV & BUILD" cards={SETUP} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Express</span><span>#TypeScript</span><span>#NodeJS</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
