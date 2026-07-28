import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const EXPRESS = 'https://expressjs.com/';
const NODE_TS = 'https://nodejs.org/en/learn/getting-started/nodejs-with-typescript';

const LEARNT_TODAY = [
  { title: 'ts-node / tsx', text: 'run TypeScript on the server without a manual build during dev' },
  { title: '@types/express', text: 'Request, Response, NextFunction come from DefinitelyTyped' },
  { title: 'Typed handlers', text: 'annotate req/res so body and params stop being any' },
  { title: 'Router modules', text: 'split routes into typed Router() files — keep app.ts thin' },
  { title: 'Build emit', text: 'production still compiles to dist/ with tsc or a bundler' },
  { title: 'Env typing', text: 'load env with a schema (Zod) before the server listens' },
  { title: 'What’s next', text: 'middleware needs Request augmentation to stay typed' },
];

const CORE = [
  {
    icon: '🟢',
    title: 'Typed Handler',
    titleClass: 'card-title-cyan',
    subtitle: 'Express',
    description: 'Use Request/Response generics or Zod-parsed bodies instead of any.',
    code: 'import type { Request, Response } from \'express\';\n\nexport function health(_req: Request, res: Response) {\n  res.json({ ok: true });\n}',
  },
  {
    icon: '🛤️',
    title: 'Router Split',
    titleClass: 'card-title-purple',
    subtitle: 'Structure',
    description: 'create Router(), mount under /api, export from routes/index.ts.',
    code: 'import { Router } from \'express\';\nconst users = Router();\nusers.get(\'/:id\', getUser);\nexport default users;',
  },
  {
    icon: '🚀',
    title: 'Dev Runner',
    titleClass: 'card-title-amber',
    subtitle: 'tsx',
    description: 'Prefer tsx watch for fast reloads; keep tsc --noEmit in CI.',
    code: 'tsx watch src/server.ts\ntsc --noEmit',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'Hello API',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'GET /health returns { ok: true } with full TS types and no any.',
    code: 'app.get("/health", health);',
  },
  {
    icon: '🔍',
    title: 'Params Type',
    titleClass: 'card-title-purple',
    subtitle: 'Strict',
    description: 'Type req.params.id as string and reject empty ids with 400.',
    code: 'const { id } = req.params;\nif (!id) return res.status(400).end();',
  },
  {
    icon: '📝',
    title: 'Scripts',
    titleClass: 'card-title-amber',
    subtitle: 'package.json',
    description: 'Add dev, build, start, and typecheck scripts.',
    code: '"dev": "tsx watch src/server.ts"\n"typecheck": "tsc --noEmit"',
  },
  {
    icon: '🔜',
    title: 'Next: Middleware',
    titleClass: 'card-title-lime',
    subtitle: 'Day 226',
    description: 'Tomorrow — typed middleware and Request augmentation.',
    link: { href: '/day-226', label: 'Go to Day 226 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'Express',
    titleClass: 'card-title-cyan',
    subtitle: 'Docs',
    description: 'HTTP framework reference.',
    link: { href: EXPRESS, label: 'Open Express →', external: true },
  },
  {
    icon: '🟢',
    title: 'Node + TS',
    titleClass: 'card-title-purple',
    subtitle: 'Guide',
    description: 'Official Node TypeScript getting started.',
    link: { href: NODE_TS, label: 'Open Node+TS →', external: true },
  },
  {
    icon: '🏁',
    title: 'Day 224',
    titleClass: 'card-title-amber',
    subtitle: 'Prior',
    description: 'OpenAPI codegen bridge before this backend arc.',
    link: { href: '/day-224', label: 'Open Day 224 →' },
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

export default function Day225() {
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
          <Link to="/day-224" className="day001-nav-btn day001-nav-prev">← Day 224</Link>
          <p className="day001-datetime">TypeScript Day 225 · 13 Aug 2027</p>
          <Link to="/day-226" className="day001-nav-btn day001-nav-next">Day 226 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Backend</span><span>Day 225</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 225 <span aria-hidden="true">🟢</span></h1>
              <p className="day001-day-theme">NODE & EXPRESS WITH TYPESCRIPT</p>
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
          Day 225 brings TypeScript to the server. Type <strong>Express handlers</strong>, split <strong>routers</strong>, and run with <strong>tsx</strong> while CI still typechecks.
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

        <CardSection icon="🟢" title="1 · NODE + EXPRESS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day225</span><span>#Node</span><span>#Express</span>
        </footer>
      </div>
    </div>
  );
}
