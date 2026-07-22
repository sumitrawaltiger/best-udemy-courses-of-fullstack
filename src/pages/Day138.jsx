import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const SUPERTEST = 'https://github.com/ladjs/supertest#readme';
const VITEST = 'https://vitest.dev/guide/';
const JEST = 'https://jestjs.io/docs/getting-started';

const LEARNT_TODAY = [
  { title: 'Why API tests', text: 'catch broken routes before deploy — faster than manual curl every time' },
  { title: 'Supertest', text: 'HTTP assertions against your Express app without opening a real port (or with one)' },
  { title: 'Export the app', text: 'export app without listen() so tests can import it; listen only in index' },
  { title: 'Status + body', text: 'expect(200), expect(res.body.items).toHaveLength(n)' },
  { title: 'Auth in tests', text: 'login (or sign a JWT) then .set("Authorization", `Bearer ${token}`)' },
  { title: 'Isolate data', text: 'use a test DB or truncate tables between tests' },
  { title: 'Vitest or Jest', text: 'either runner works; pick one and stick to it in the repo' },
  { title: 'Happy + sad paths', text: 'test 201 create and 400 validation / 401 unauthorized' },
  { title: 'CI ready', text: 'npm test in CI blocks merges when the API regresses' },
];

const CORE = [
  {
    icon: '🧪', title: 'Export App', titleClass: 'card-title-cyan', subtitle: 'Testable Shape',
    description: 'Keep listen() in a thin entry file. Tests import { app } and pass it to supertest.',
    code: '// app.ts — build middleware + routes, export app\n// index.ts — app.listen(port)\nexport { app };',
  },
  {
    icon: '🚀', title: 'First Supertest', titleClass: 'card-title-purple', subtitle: 'GET /health',
    description: 'Request the app, assert status and JSON. No browser required.',
    code: 'import request from "supertest";\nimport { app } from "../src/app";\n\nit("health is ok", async () => {\n  const res = await request(app).get("/health");\n  expect(res.status).toBe(200);\n  expect(res.body.ok).toBe(true);\n});',
  },
  {
    icon: '🔐', title: 'Authed Request', titleClass: 'card-title-amber', subtitle: 'Bearer Token',
    description: 'Create a user (or mock JWT), then hit a protected route with the header set.',
    code: 'const res = await request(app)\n  .get("/tasks")\n  .set("Authorization", `Bearer ${token}`);\nexpect(res.status).toBe(200);',
  },
];

const PRACTICE = [
  {
    icon: '✅', title: 'Happy Path', titleClass: 'card-title-cyan', subtitle: 'Create Task',
    description: 'POST valid JSON → 201 and body contains id + title.',
    code: 'const res = await request(app)\n  .post("/tasks")\n  .set("Authorization", `Bearer ${token}`)\n  .send({ title: "Write tests" });\nexpect(res.status).toBe(201);\nexpect(res.body.title).toBe("Write tests");',
  },
  {
    icon: '🚫', title: 'Sad Paths', titleClass: 'card-title-purple', subtitle: '400 / 401',
    description: 'Empty body → 400. Missing token → 401. These lock the contracts you care about.',
    code: 'await request(app).post("/tasks").send({})\n  .expect(401);\nawait request(app).post("/tasks")\n  .set("Authorization", `Bearer ${token}`)\n  .send({}).expect(400);',
  },
  {
    icon: '🧹', title: 'Clean Between Tests', titleClass: 'card-title-amber', subtitle: 'Isolation',
    description: 'beforeEach truncate or use transactions. Flaky shared state teaches the wrong lesson.',
    code: 'beforeEach(async () => {\n  await db.query("TRUNCATE tasks RESTART IDENTITY CASCADE");\n});',
  },
  {
    icon: '🔜', title: 'Next: OpenAPI Docs', titleClass: 'card-title-lime', subtitle: 'Day 139 Preview',
    description: 'Tomorrow: document the API with OpenAPI/Swagger so humans and tools share one contract.',
    link: { href: '/day-139', label: 'Go to Day 139 →' },
  },
];

const RESOURCES = [
  {
    icon: '🚀', title: 'Supertest', titleClass: 'card-title-cyan', subtitle: 'README',
    description: 'Fluent HTTP assertions for Node servers.',
    link: { href: SUPERTEST, label: 'Read Supertest docs →', external: true },
  },
  {
    icon: '⚡', title: 'Vitest', titleClass: 'card-title-purple', subtitle: 'Guide',
    description: 'Fast Vite-native test runner that works well with TS projects.',
    link: { href: VITEST, label: 'Read Vitest guide →', external: true },
  },
  {
    icon: '🃏', title: 'Jest', titleClass: 'card-title-amber', subtitle: 'Guide',
    description: 'Classic JS test runner still common in Express codebases.',
    link: { href: JEST, label: 'Read Jest docs →', external: true },
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

export default function Day138() {
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
          <Link to="/day-137" className="day001-nav-btn day001-nav-prev">← Day 137</Link>
          <p className="day001-datetime">Express Day 138</p>
          <Link to="/day-139" className="day001-nav-btn day001-nav-next">Day 139 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>Testing</span><span>Supertest</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 138 <span aria-hidden="true">🧪</span></h1>
              <p className="day001-day-theme">API TESTING WITH SUPERTEST</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '38%' }} /></div>

        <p className="day001-summary">
          Day 138 automates confidence. Export the <strong>app</strong>, hit it with{' '}
          <strong>Supertest</strong>, assert <strong>status and body</strong>, cover{' '}
          <strong>auth</strong> and validation failures, and keep a clean test DB so CI can run{' '}
          <code>npm test</code>.
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

        <CardSection icon="🧪" title="1 · SUPERTEST SETUP" cards={CORE} columns={3} />
        <CardSection icon="✅" title="2 · HAPPY & SAD PATHS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Express</span><span>#Supertest</span><span>#Testing</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
