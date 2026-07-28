import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const EXPRESS_DOCS = 'https://expressjs.com/en/starter/installing.html';
const NODE_DOCS = 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs';
const NPM_INIT = 'https://docs.npmjs.com/cli/v10/commands/npm-init';

const LEARNT_TODAY = [
  { title: 'Year 1 backend begins', text: 'after React Native graduation, the TypeScript stack continues with Express on Node' },
  { title: 'What is Express', text: 'a minimal Node.js web framework for HTTP servers and APIs' },
  { title: 'Node + npm', text: 'Node runs JS on the server; npm installs Express and other packages' },
  { title: 'Hello Express', text: 'create an app, listen on a port, and respond to GET /' },
  { title: 'req & res', text: 'request carries client data; response sends status, headers and body' },
  { title: 'nodemon / watch', text: 'restart the server on save so the feedback loop stays fast' },
  { title: 'package.json scripts', text: 'npm run dev starts the server the same way every time' },
  { title: 'Why Express now', text: 'mobile and web apps need a typed API — Express is the Year-1 backend home' },
  { title: 'Same language', text: 'JavaScript/TypeScript on the client and the server — one mental model' },
];

const CORE = [
  {
    icon: '🟢', title: 'Node.js Runtime', titleClass: 'card-title-cyan', subtitle: 'JS On The Server',
    description: 'Node.js runs JavaScript outside the browser. Express is a library on top of Node’s HTTP module — install Node LTS, then add Express to a project.',
    code: 'node -v\nnpm init -y\nnpm i express',
  },
  {
    icon: '🚂', title: 'What Is Express', titleClass: 'card-title-purple', subtitle: 'Minimal Web Framework',
    description: 'Express gives you routing, middleware, and a clean API for building REST backends. It does not force an ORM or auth stack — you compose what you need.',
    code: 'import express from "express";\nconst app = express();\napp.listen(3000, () => console.log("up"));',
  },
  {
    icon: '👋', title: 'Hello World', titleClass: 'card-title-amber', subtitle: 'First Route',
    description: 'Register a GET handler on `/`, send a string or JSON, and hit it in the browser or with curl. That is the whole request → response loop.',
    code: 'app.get("/", (req, res) => {\n  res.send("Day 126 — Express live");\n});',
  },
];

const SETUP = [
  {
    icon: '📦', title: 'Project Scripts', titleClass: 'card-title-cyan', subtitle: 'npm run dev',
    description: 'Pin a start script in package.json. Use node --watch or nodemon so edits reload without killing the process by hand.',
    code: '{\n  "type": "module",\n  "scripts": {\n    "dev": "node --watch src/index.js"\n  }\n}',
  },
  {
    icon: '📨', title: 'req & res', titleClass: 'card-title-purple', subtitle: 'The Two Objects',
    description: 'req holds method, path, headers, query and body. res sets status and sends data. Learn these two and every route makes sense.',
    code: 'app.get("/hello", (req, res) => {\n  res.status(200).json({ ok: true, path: req.path });\n});',
  },
  {
    icon: '🧪', title: 'Smoke Test', titleClass: 'card-title-amber', subtitle: 'curl Or Browser',
    description: 'After listen(), open http://localhost:3000 or curl it. Confirm 200 before adding more routes — a broken hello means nothing else will work.',
    code: 'curl http://localhost:3000/\n# Day 126 — Express live',
  },
  {
    icon: '🔜', title: 'Next: Routing & Middleware', titleClass: 'card-title-lime', subtitle: 'Day 127 Preview',
    description: 'Tomorrow: route params, query strings, Router modules, and middleware that runs before your handlers.',
    link: { href: '/day-127', label: 'Go to Day 127 →' },
  },
];

const RESOURCES = [
  {
    icon: '🚂', title: 'Express Installing', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Official install and hello-world guide — the fastest path to a listening server.',
    link: { href: EXPRESS_DOCS, label: 'Read Express install docs →', external: true },
  },
  {
    icon: '🟢', title: 'Intro to Node', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'What Node is and how it runs JavaScript on the server.',
    link: { href: NODE_DOCS, label: 'Read Node intro →', external: true },
  },
  {
    icon: '📦', title: 'npm init', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Create package.json and start a Node project the standard way.',
    link: { href: NPM_INIT, label: 'Read npm init docs →', external: true },
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

export default function Day126() {
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
          <Link to="/day-125" className="day001-nav-btn day001-nav-prev">← Day 125</Link>
          <p className="day001-datetime">Express Day 126 · 6 May 2027</p>
          <Link to="/day-127" className="day001-nav-btn day001-nav-next">Day 127 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>Backend</span><span>Node</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 126 <span aria-hidden="true">🚂</span></h1>
              <p className="day001-day-theme">EXPRESS.JS — HELLO BACKEND</p>
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
          Day 126 opens the <strong>Express</strong> phase of Year 1. After React Native graduation,
          the same JavaScript/TypeScript stack moves to the <strong>server</strong>: install{' '}
          <strong>Node</strong>, add <strong>Express</strong>, listen on a port, and ship a{' '}
          <strong>hello route</strong>. req in, res out — the foundation of every API that follows.
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

        <CardSection icon="🚂" title="1 · NODE & EXPRESS" cards={CORE} columns={3} />
        <CardSection icon="📦" title="2 · SCRIPTS, REQ/RES & SMOKE TEST" cards={SETUP} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Express</span><span>#NodeJS</span><span>#Backend</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
