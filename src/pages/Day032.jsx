import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const EXPRESS_DOCS = 'https://expressjs.com/';
const NODE_DOCS = 'https://nodejs.org/en/learn';

const LEARNT_TODAY = [
  { title: 'Node runs JS on the server', text: 'the same JavaScript/TypeScript, now on the backend — no browser' },
  { title: 'Express', text: 'the minimal, unopinionated web framework for building HTTP APIs on Node' },
  { title: 'A first server', text: 'app.get + app.listen and you have an HTTP server in a few lines' },
  { title: 'req & res', text: 'read the request (params, query, body) and send a response (JSON, status)' },
  { title: 'TypeScript backend', text: 'tsx to run .ts in dev; @types/express types req/res' },
  { title: 'Environment config', text: 'load secrets and the port from a .env with dotenv' },
  { title: 'Auto-restart', text: 'tsx watch (or nodemon) reloads the server on every save' },
  { title: 'Year-1 backend begins', text: 'the frontend is done; now the server that powers it' },
];

const SETUP = [
  {
    icon: '🟢', title: 'Node & Express', titleClass: 'card-title-cyan', subtitle: 'Server-Side JS',
    description:
      'Node runs JavaScript outside the browser; Express is the standard framework for HTTP APIs on top of it. Install both and you can serve requests in minutes — same language, new environment.',
    code: 'npm init -y\nnpm i express\nnpm i -D typescript tsx @types/express @types/node dotenv',
  },
  {
    icon: '🚀', title: 'A First Server', titleClass: 'card-title-purple', subtitle: 'app.listen',
    description:
      'Create an app, register a route, and listen on a port. app.get responds to GET /, and the server runs until stopped — the foundation every route builds on.',
    code: 'import express from "express";\nconst app = express();\napp.get("/", (req, res) => res.send("Hello API"));\napp.listen(3000, () => console.log("http://localhost:3000"));',
  },
];

const BASICS = [
  {
    icon: '📨', title: 'Request & Response', titleClass: 'card-title-cyan', subtitle: 'req / res',
    description:
      'req carries the URL params, query string and (with a body parser) the JSON body. res sends data back — res.json() for JSON, res.status() to set the code.',
    code: 'app.get("/users/:id", (req, res) => {\n  const { id } = req.params;          // "7"\n  const { sort } = req.query;          // ?sort=name\n  res.status(200).json({ id, sort });\n});',
  },
  {
    icon: '🔷', title: 'TypeScript Setup', titleClass: 'card-title-purple', subtitle: 'tsx + Types',
    description:
      'Run the server in dev with tsx (no build step), and @types/express types req and res. A tsconfig with strict on keeps the backend as type-safe as the frontend.',
    code: '// package.json\n"dev": "tsx watch src/index.ts",\n"build": "tsc",\n"start": "node dist/index.js"',
  },
  {
    icon: '🔑', title: 'Env & Config', titleClass: 'card-title-amber', subtitle: '.env + dotenv',
    description:
      'Keep the port, database URL and secrets in a .env file, loaded once with dotenv. Never commit it — it holds credentials the client must never see.',
    code: 'import "dotenv/config";\nconst PORT = process.env.PORT ?? 3000;\napp.listen(PORT);',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Express', titleClass: 'card-title-cyan', subtitle: 'Official Docs',
    description:
      'Routing, middleware, request/response, and the guides — the reference for the whole Express portion of Year 1.',
    link: { href: EXPRESS_DOCS, label: 'Open Express docs →', external: true },
  },
  {
    icon: '🟢', title: 'Node.js — Learn', titleClass: 'card-title-purple', subtitle: 'Fundamentals',
    description:
      'The Node runtime, the module system, the event loop and async I/O — the platform Express runs on.',
    link: { href: NODE_DOCS, label: 'Open the Node guides →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Routing & Middleware', titleClass: 'card-title-amber', subtitle: 'Day 33 Preview',
    description:
      'Tomorrow — organise routes with Router, and the middleware pipeline: built-in (json), third-party (cors, morgan), custom, and the error-handling middleware.',
    link: { href: '/day-033', label: 'Go to Day 33 →' },
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

export default function Day032() {
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
          <Link to="/day-031" className="day001-nav-btn day001-nav-prev">← Day 31</Link>
          <p className="day001-datetime">TypeScript Day 32 · 1 Feb 2027</p>
          <Link to="/day-033" className="day001-nav-btn day001-nav-next">Day 33 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Express / Node</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 32 <span aria-hidden="true">🟢</span></h1>
              <p className="day001-day-theme">NODE &amp; EXPRESS — SETUP &amp; FIRST SERVER</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '32%' }} /></div>

        <p className="day001-summary">
          The Year-1 backend begins. <strong>Node</strong> runs the same JavaScript/TypeScript on the server, and{' '}
          <strong>Express</strong> is the minimal framework for HTTP APIs on top of it. A first server is tiny:{' '}
          <code>app.get(...)</code> + <code>app.listen(port)</code>. Handlers read the <strong>req</strong>{' '}
          (params, query, JSON body) and send a <strong>res</strong> (<code>res.json()</code>, <code>res.status()</code>).
          Run it in dev with <strong>tsx watch</strong> (no build step) and let <code>@types/express</code> type
          everything, with the port and secrets loaded from a <strong>.env</strong> via dotenv.{' '}
          <em>Next: routing &amp; middleware.</em>
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

        <CardSection icon="🟢" title="SET UP THE SERVER" cards={SETUP} columns={2} />
        <CardSection icon="📨" title="REQUEST · RESPONSE · CONFIG" cards={BASICS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#NodeJS</span><span>#Express</span>
        </footer>
      </div>
    </div>
  );
}
