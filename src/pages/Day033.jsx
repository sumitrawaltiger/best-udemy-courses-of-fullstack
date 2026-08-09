import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ROUTING_DOCS = 'https://expressjs.com/en/guide/routing.html';
const MW_DOCS = 'https://expressjs.com/en/guide/using-middleware.html';

const LEARNT_TODAY = [
  { title: 'HTTP verbs → handlers', text: 'app.get / post / put / patch / delete map a method + path to a function' },
  { title: 'express.Router', text: 'group related routes in a module and mount them under a base path' },
  { title: 'Middleware is a pipeline', text: 'functions run in order; each calls next() or ends the response' },
  { title: 'app.use', text: 'register middleware globally, per-path, or per-router' },
  { title: 'Built-in parsers', text: 'express.json() parses JSON bodies into req.body' },
  { title: 'Third-party middleware', text: 'cors, morgan, helmet — cross-origin, logging, security headers' },
  { title: 'Custom middleware', text: 'write your own — auth checks, request timing, request IDs' },
  { title: 'Error middleware', text: 'a 4-arg (err, req, res, next) handler catches thrown errors last' },
];

const ROUTING = [
  {
    icon: '🛣️', title: 'Routes', titleClass: 'card-title-cyan', subtitle: 'Method + Path',
    description:
      'Each route pairs an HTTP method and a path with a handler. Path params (:id) and the query string are read from req. Keep handlers thin and delegate the logic.',
    code: 'app.get("/users", listUsers);\napp.post("/users", createUser);\napp.get("/users/:id", getUser);\napp.delete("/users/:id", deleteUser);',
  },
  {
    icon: '🗂️', title: 'express.Router', titleClass: 'card-title-purple', subtitle: 'Modular Routes',
    description:
      'Split routes into modules with Router, then mount each under a base path. The app stays organised as it grows — a router per resource.',
    code: '// routes/users.ts\nconst router = Router();\nrouter.get("/", listUsers);\nrouter.get("/:id", getUser);\nexport default router;\n\n// index.ts\napp.use("/users", usersRouter);',
  },
];

const MIDDLEWARE = [
  {
    icon: '🔗', title: 'The Pipeline', titleClass: 'card-title-cyan', subtitle: 'next() or Respond',
    description:
      'Middleware runs in registration order. Each function either ends the response or calls next() to pass control on. app.use(express.json()) parses bodies before your handlers run.',
    code: 'app.use(express.json());          // parse JSON bodies\napp.use((req, _res, next) => {     // custom: log every request\n  console.log(req.method, req.url);\n  next();\n});',
  },
  {
    icon: '📦', title: 'Third-Party', titleClass: 'card-title-purple', subtitle: 'cors · morgan · helmet',
    description:
      'The ecosystem covers common needs: cors for cross-origin requests, morgan for request logging, helmet for security headers. Register them once with app.use.',
    code: 'import cors from "cors";\nimport morgan from "morgan";\napp.use(cors());\napp.use(morgan("dev"));',
  },
  {
    icon: '🚨', title: 'Error Handling', titleClass: 'card-title-amber', subtitle: '(err, req, res, next)',
    description:
      'A middleware with four arguments is the error handler. Register it last; anything thrown (or passed to next(err)) lands here, so you format errors in one place.',
    code: 'app.use((err, _req, res, _next) => {\n  console.error(err);\n  res.status(500).json({ error: "Server error" });\n});',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Routing', titleClass: 'card-title-cyan', subtitle: 'Express Docs',
    description:
      'Route methods, paths, parameters, chaining and express.Router — the full routing reference.',
    link: { href: ROUTING_DOCS, label: 'Open the routing docs →', external: true },
  },
  {
    icon: '🔗', title: 'Middleware', titleClass: 'card-title-purple', subtitle: 'Express Docs',
    description:
      'Application, router, built-in, third-party and error-handling middleware — how the pipeline is composed.',
    link: { href: MW_DOCS, label: 'Open the middleware docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: REST API', titleClass: 'card-title-amber', subtitle: 'Day 34 Preview',
    description:
      'Tomorrow — design a real REST API: resource routes, status codes, CRUD handlers, Zod validation, and a clean controller/service structure.',
    link: { href: '/day-034', label: 'Go to Day 34 →' },
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

export default function Day033() {
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
          <Link to="/day-032" className="day001-nav-btn day001-nav-prev">← Day 32</Link>
          <p className="day001-datetime">TypeScript Day 33 · 9 Jul 2027</p>
          <Link to="/day-034" className="day001-nav-btn day001-nav-next">Day 34 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Express / Node</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 33 <span aria-hidden="true">🔗</span></h1>
              <p className="day001-day-theme">EXPRESS — ROUTING &amp; MIDDLEWARE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '33%' }} /></div>

        <p className="day001-summary">
          Structure and the pipeline. Routes pair an <strong>HTTP verb + path</strong> with a handler
          (<code>app.get/post/put/delete</code>), and <strong>express.Router</strong> groups them per resource, mounted
          under a base path. <strong>Middleware</strong> is an ordered pipeline: each function ends the response or
          calls <code>next()</code>. <code>express.json()</code> parses bodies; third-party{' '}
          <strong>cors / morgan / helmet</strong> add cross-origin, logging and security; and custom middleware does
          auth or timing. A four-argument <strong>(err, req, res, next)</strong> handler, registered last, catches
          everything thrown so errors are formatted in one place. <em>Next: a real REST API.</em>
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

        <CardSection icon="🛣️" title="ROUTING" cards={ROUTING} columns={2} />
        <CardSection icon="🔗" title="MIDDLEWARE" cards={MIDDLEWARE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#Express</span><span>#Middleware</span>
        </footer>
      </div>
    </div>
  );
}
