import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const MERGING = 'https://www.typescriptlang.org/docs/handbook/declaration-merging.html';
const EXPRESS = 'https://expressjs.com/en/guide/using-middleware.html';

const LEARNT_TODAY = [
  { title: 'Middleware signature', text: '(req, res, next) => void — errors go to next(err)' },
  { title: 'Augment Request', text: 'declare global Express.Request fields once (user, requestId)' },
  { title: 'No cast spam', text: 'augmentation beats (req as any).user everywhere' },
  { title: 'Async wrap', text: 'catch rejected promises and forward to error middleware' },
  { title: 'Order matters', text: 'auth middleware before handlers that need req.user' },
  { title: 'Typed locals', text: 'res.locals can be typed for template/data handoff' },
  { title: 'What’s next', text: 'database clients generate even richer types' },
];

const CORE = [
  {
    icon: '🧩',
    title: 'Augment Request',
    titleClass: 'card-title-cyan',
    subtitle: '.d.ts',
    description: 'Extend Express.Request so handlers see user after auth middleware.',
    code: 'declare global {\n  namespace Express {\n    interface Request {\n      user?: { id: string; role: \'admin\' | \'user\' };\n      requestId: string;\n    }\n  }\n}\nexport {};',
  },
  {
    icon: '🛡️',
    title: 'Auth Middleware',
    titleClass: 'card-title-purple',
    subtitle: 'Gate',
    description: 'Verify token, set req.user, or return 401 — fully typed.',
    code: 'export function requireUser(\n  req: Request, res: Response, next: NextFunction\n) {\n  if (!req.user) return res.status(401).end();\n  next();\n}',
  },
  {
    icon: '🧯',
    title: 'Async Handler',
    titleClass: 'card-title-amber',
    subtitle: 'Errors',
    description: 'Wrap async routes so thrown errors hit your error middleware.',
    code: 'const wrap = (fn: RequestHandler): RequestHandler =>\n  (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'requestId',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Middleware sets req.requestId = crypto.randomUUID() and types it on Request.',
    code: 'req.requestId = crypto.randomUUID();\nnext();',
  },
  {
    icon: '🔍',
    title: 'requireAdmin',
    titleClass: 'card-title-purple',
    subtitle: 'Authz',
    description: 'Allow only role admin; prove a user handler cannot see admin-only fields without the gate.',
    code: 'if (req.user?.role !== \'admin\') return res.status(403).end();',
  },
  {
    icon: '📝',
    title: 'Error MW',
    titleClass: 'card-title-amber',
    subtitle: 'Ops',
    description: 'Four-arg error middleware logs requestId and returns JSON { error }.',
    code: '(err, req, res, _next) => {\n  console.error(req.requestId, err);\n  res.status(500).json({ error: "internal" });\n}',
  },
  {
    icon: '🔜',
    title: 'Next: Prisma',
    titleClass: 'card-title-lime',
    subtitle: 'Day 227',
    description: 'Tomorrow — Prisma and database types.',
    link: { href: '/day-227', label: 'Go to Day 227 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'Declaration Merging',
    titleClass: 'card-title-cyan',
    subtitle: 'Handbook',
    description: 'How Request augmentation works.',
    link: { href: MERGING, label: 'Open merging →', external: true },
  },
  {
    icon: '🛡️',
    title: 'Express Middleware',
    titleClass: 'card-title-purple',
    subtitle: 'Guide',
    description: 'Using middleware in Express.',
    link: { href: EXPRESS, label: 'Open middleware →', external: true },
  },
  {
    icon: '🟢',
    title: 'Day 225',
    titleClass: 'card-title-amber',
    subtitle: 'Prior',
    description: 'Express + TS basics.',
    link: { href: '/day-225', label: 'Open Day 225 →' },
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

export default function Day226() {
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
          <Link to="/day-225" className="day001-nav-btn day001-nav-prev">← Day 225</Link>
          <p className="day001-datetime">TypeScript Day 226 · 14 Aug 2027</p>
          <Link to="/day-227" className="day001-nav-btn day001-nav-next">Day 227 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Backend</span><span>Day 226</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 226 <span aria-hidden="true">🧩</span></h1>
              <p className="day001-day-theme">TYPED MIDDLEWARE & REQUEST AUGMENTATION</p>
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
          Day 226 types the pipeline. <strong>Augment Request</strong>, write typed auth middleware, and wrap async handlers so errors stay safe.
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

        <CardSection icon="🧩" title="1 · MIDDLEWARE TYPES" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day226</span><span>#Express</span><span>#Middleware</span>
        </footer>
      </div>
    </div>
  );
}
