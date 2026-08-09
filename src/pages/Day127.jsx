import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ROUTING_DOCS = 'https://expressjs.com/en/guide/routing.html';
const MW_DOCS = 'https://expressjs.com/en/guide/using-middleware.html';
const ROUTER_DOCS = 'https://expressjs.com/en/4x/api.html#router';

const LEARNT_TODAY = [
  { title: 'Route methods', text: 'app.get / app.post / app.put / app.delete map HTTP verbs to handlers' },
  { title: 'Path params', text: 'req.params.id comes from /users/:id in the path' },
  { title: 'Query strings', text: 'req.query.page comes from ?page=2 — always strings until you parse them' },
  { title: 'Middleware', text: 'functions (req, res, next) that run before the route — logging, auth, parsing' },
  { title: 'next()', text: 'call next() to pass control to the next middleware or handler' },
  { title: 'express.json()', text: 'built-in middleware that parses JSON bodies into req.body' },
  { title: 'Router', text: 'express.Router() groups related routes in their own module' },
  { title: '404 handler', text: 'a final middleware that sends Not Found when nothing matched' },
  { title: 'Order matters', text: 'middleware and routes run top-to-bottom — mount parsers before routes that need them' },
];

const ROUTES = [
  {
    icon: '🛤️', title: 'HTTP Verbs', titleClass: 'card-title-cyan', subtitle: 'get / post / put / delete',
    description: 'Each verb gets its own registration. Same path can have different handlers per method — GET lists, POST creates.',
    code: 'app.get("/users", listUsers);\napp.post("/users", createUser);\napp.get("/users/:id", getUser);',
  },
  {
    icon: '🔑', title: 'Params & Query', titleClass: 'card-title-purple', subtitle: 'Dynamic Paths',
    description: '`:id` fills req.params. Query flags live on req.query. Never trust either — validate before use.',
    code: '// GET /users/42?active=true\napp.get("/users/:id", (req, res) => {\n  const { id } = req.params;\n  const { active } = req.query;\n  res.json({ id, active });\n});',
  },
  {
    icon: '🧩', title: 'express.Router', titleClass: 'card-title-amber', subtitle: 'Split The App',
    description: 'Put /users routes in usersRouter.js and mount with app.use("/users", usersRouter). Keeps index.js thin.',
    code: 'const users = express.Router();\nusers.get("/", listUsers);\napp.use("/users", users);',
  },
];

const MIDDLEWARE = [
  {
    icon: '⛓️', title: 'Middleware Shape', titleClass: 'card-title-cyan', subtitle: '(req, res, next)',
    description: 'A middleware can end the response or call next(). Use it for logging, auth checks, and shared setup.',
    code: 'function log(req, res, next) {\n  console.log(req.method, req.path);\n  next();\n}\napp.use(log);',
  },
  {
    icon: '📥', title: 'JSON Body Parser', titleClass: 'card-title-purple', subtitle: 'express.json()',
    description: 'Without a body parser, req.body is empty. Mount express.json() early so POST/PUT handlers receive objects.',
    code: 'app.use(express.json());\napp.post("/users", (req, res) => {\n  res.status(201).json(req.body);\n});',
  },
  {
    icon: '🚫', title: '404 & Errors', titleClass: 'card-title-amber', subtitle: 'Fallbacks',
    description: 'After all routes, add a 404 middleware. An error middleware with four args (err, req, res, next) catches thrown failures.',
    code: 'app.use((req, res) => {\n  res.status(404).json({ error: "Not found" });\n});',
  },
  {
    icon: '🔜', title: 'Next: REST CRUD', titleClass: 'card-title-lime', subtitle: 'Day 128 Preview',
    description: 'Tomorrow: design a small REST resource — list, get, create, update, delete — with status codes that make sense.',
    link: { href: '/day-128', label: 'Go to Day 128 →' },
  },
];

const RESOURCES = [
  {
    icon: '🛤️', title: 'Routing Guide', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Methods, path patterns, parameters, and query handling in Express.',
    link: { href: ROUTING_DOCS, label: 'Read routing docs →', external: true },
  },
  {
    icon: '⛓️', title: 'Using Middleware', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Application-level, router-level, and error-handling middleware.',
    link: { href: MW_DOCS, label: 'Read middleware docs →', external: true },
  },
  {
    icon: '🧩', title: 'Router API', titleClass: 'card-title-amber', subtitle: 'Reference',
    description: 'express.Router methods for modular route tables.',
    link: { href: ROUTER_DOCS, label: 'Read Router API →', external: true },
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

export default function Day127() {
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
          <Link to="/day-126" className="day001-nav-btn day001-nav-prev">← Day 126</Link>
          <p className="day001-datetime">Express Day 127 · 11 Oct 2027</p>
          <Link to="/day-128" className="day001-nav-btn day001-nav-next">Day 128 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>Routing</span><span>Middleware</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 127 <span aria-hidden="true">🛤️</span></h1>
              <p className="day001-day-theme">ROUTING &amp; MIDDLEWARE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '35%' }} /></div>

        <p className="day001-summary">
          Day 127 structures the server. <strong>HTTP verbs</strong>, <strong>path params</strong>,{' '}
          <strong>query strings</strong>, <strong>middleware</strong> (including{' '}
          <code>express.json()</code>), and <strong>Router</strong> modules keep routes clear. Order
          matters — parsers first, then routes, then 404.
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

        <CardSection icon="🛤️" title="1 · ROUTES" cards={ROUTES} columns={3} />
        <CardSection icon="⛓️" title="2 · MIDDLEWARE & FALLBACKS" cards={MIDDLEWARE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Express</span><span>#Middleware</span><span>#REST</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
