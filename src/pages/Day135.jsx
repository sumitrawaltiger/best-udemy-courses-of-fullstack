import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const RENDER = 'https://render.com/docs/deploy-node-express-app';
const RAILWAY = 'https://docs.railway.com/guides/nodejs';
const FLY = 'https://fly.io/docs/languages-and-frameworks/node/';

const LEARNT_TODAY = [
  { title: 'Host the API', text: 'Render, Railway, Fly.io, or similar — push git, set env, get a public URL' },
  { title: 'Build & start', text: 'build runs tsc; start runs node dist/index.js (or your host’s Node start)' },
  { title: 'Env on the host', text: 'copy JWT_SECRET, DATABASE_URL, PORT, CORS_ORIGIN into the dashboard — never commit them' },
  { title: 'Health check', text: 'hosts ping GET /health; fail the check if the DB is down' },
  { title: 'PORT from env', text: 'listen on process.env.PORT — platforms inject it' },
  { title: 'Migrations first', text: 'run schema migrations before traffic hits a fresh database' },
  { title: 'Logs matter', text: 'use the host log stream; keep console.error in the error middleware' },
  { title: 'Smoke after ship', text: 'curl /health and one authenticated route from your laptop' },
  { title: 'Express arc complete', text: 'Days 126–135: hello → REST → JWT → DB → TS → Zod → errors → security → deploy' },
];

const SHIP = [
  {
    icon: '☁️', title: 'Pick A Host', titleClass: 'card-title-cyan', subtitle: 'Node-Friendly',
    description: 'Any Node PaaS works. Connect the GitHub repo, set the root to your API folder, and define build + start commands.',
    code: 'build: npm ci && npm run build\nstart: npm start\n# PORT provided by the platform',
  },
  {
    icon: '🔐', title: 'Env Vars', titleClass: 'card-title-purple', subtitle: 'Dashboard Secrets',
    description: 'Add JWT_SECRET, DATABASE_URL, NODE_ENV=production, and CORS_ORIGIN. Restart after changes.',
    code: 'JWT_SECRET=…\nDATABASE_URL=…\nCORS_ORIGIN=https://app.example.com\nNODE_ENV=production',
  },
  {
    icon: '❤️', title: 'Health Check', titleClass: 'card-title-amber', subtitle: '/health',
    description: 'Point the platform health check at GET /health. Return 200 only when the process (and ideally DB) is ready.',
    code: 'app.get("/health", async (_req, res) => {\n  await pool.query("SELECT 1");\n  res.json({ ok: true });\n});',
  },
];

const CHECKLIST = [
  {
    icon: '📡', title: 'Listen On PORT', titleClass: 'card-title-cyan', subtitle: 'Dynamic Port',
    description: 'Never hardcode 3000 in production. Read process.env.PORT with a local fallback for dev.',
    code: 'const port = Number(process.env.PORT) || 3000;\napp.listen(port);',
  },
  {
    icon: '🧪', title: 'Post-Deploy Smoke', titleClass: 'card-title-purple', subtitle: 'curl',
    description: 'Hit health, register/login, and one CRUD call against the live URL before you announce the ship.',
    code: 'curl https://api.example.com/health\ncurl -H "Authorization: Bearer …" https://api.example.com/tasks',
  },
  {
    icon: '📋', title: 'Release Checklist', titleClass: 'card-title-amber', subtitle: 'Before Go-Live',
    description: 'Migrations applied, env set, CORS origins correct, rate limits on, error middleware last, logs visible.',
    code: '// [ ] migrate\n// [ ] env secrets\n// [ ] /health green\n// [ ] smoke CRUD',
  },
  {
    icon: '🚀', title: 'What Comes Next', titleClass: 'card-title-lime', subtitle: 'Day 136 Preview',
    description: 'Tomorrow: pagination, filtering and sorting on list endpoints — then uploads, tests, OpenAPI docs, and wiring clients.',
    link: { href: '/day-136', label: 'Go to Day 136 →' },
  },
];

const RESOURCES = [
  {
    icon: '🟪', title: 'Deploy on Render', titleClass: 'card-title-cyan', subtitle: 'Guide',
    description: 'Node + Express deploy walkthrough on Render.',
    link: { href: RENDER, label: 'Read Render Express guide →', external: true },
  },
  {
    icon: '🚂', title: 'Railway Node', titleClass: 'card-title-purple', subtitle: 'Guide',
    description: 'Deploying Node apps on Railway with env and start commands.',
    link: { href: RAILWAY, label: 'Read Railway Node guide →', external: true },
  },
  {
    icon: '🕊️', title: 'Fly.io Node', titleClass: 'card-title-amber', subtitle: 'Guide',
    description: 'Run Node on Fly.io with fly.toml and health checks.',
    link: { href: FLY, label: 'Read Fly Node docs →', external: true },
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

export default function Day135() {
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
          <Link to="/day-134" className="day001-nav-btn day001-nav-prev">← Day 134</Link>
          <p className="day001-datetime">Express Day 135 · 15 May 2027</p>
          <Link to="/day-136" className="day001-nav-btn day001-nav-next">Day 136 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>Deploy</span><span>Production</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 135 <span aria-hidden="true">☁️</span></h1>
              <p className="day001-day-theme">DEPLOY THE API</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '37%' }} /></div>

        <p className="day001-summary">
          Day 135 ships the backend. Point a host at your repo, set <strong>env vars</strong>, run{' '}
          <strong>build + start</strong>, expose <strong>/health</strong>, and smoke-test the live URL.
          That closes the first Express production arc — from hello world to a public API.
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

        <CardSection icon="☁️" title="1 · HOST & ENV" cards={SHIP} columns={3} />
        <CardSection icon="📋" title="2 · CHECKLIST & SMOKE" cards={CHECKLIST} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Express</span><span>#Deploy</span><span>#Production</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
