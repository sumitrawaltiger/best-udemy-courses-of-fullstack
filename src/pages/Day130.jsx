import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PG_NODE = 'https://node-postgres.com/';
const MONGOOSE = 'https://mongoosejs.com/docs/guide.html';
const PRISMA = 'https://www.prisma.io/docs/getting-started';

const LEARNT_TODAY = [
  { title: 'Why a database', text: 'in-memory arrays die on restart — production data needs durable storage' },
  { title: 'Pick a store', text: 'Postgres (SQL) or MongoDB (documents) are common Year-1 choices with Express' },
  { title: 'Connection string', text: 'DATABASE_URL in .env — host, user, password, db name — never hardcode' },
  { title: 'Connect once', text: 'open a pool / client at startup; reuse it in route handlers' },
  { title: 'Same REST shape', text: 'swap the array for queries — keep /tasks routes and status codes identical' },
  { title: 'Migrations / schemas', text: 'define tables or models so the shape of data is explicit and versioned' },
  { title: 'Async errors', text: 'await queries inside try/catch or async wrappers — failed DB calls become 500s' },
  { title: 'Indexes later', text: 'start with correct CRUD; add indexes when queries get slow' },
  { title: 'Express phase solid', text: 'Days 126–130: hello → routes → REST → JWT → database — a shippable API skeleton' },
];

const DB = [
  {
    icon: '🐘', title: 'Postgres + Pool', titleClass: 'card-title-cyan', subtitle: 'SQL Option',
    description: 'node-postgres (pg) uses a connection pool. Query with parameterized SQL so user input never concatenates into the string.',
    code: 'import pg from "pg";\nconst pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });\nconst { rows } = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);',
  },
  {
    icon: '🍃', title: 'Mongo + Mongoose', titleClass: 'card-title-purple', subtitle: 'Document Option',
    description: 'Mongoose defines a schema and model. find / create / findByIdAndUpdate mirror your REST handlers closely.',
    code: 'await mongoose.connect(process.env.DATABASE_URL);\nconst Task = mongoose.model("Task", taskSchema);\nconst tasks = await Task.find();',
  },
  {
    icon: '▲', title: 'Prisma (Optional)', titleClass: 'card-title-amber', subtitle: 'Typed ORM',
    description: 'Prisma generates a typed client from a schema. Great when you want SQL with autocomplete and migrations built in.',
    code: 'const tasks = await prisma.task.findMany();\nconst task = await prisma.task.create({ data: req.body });',
  },
];

const WIRE = [
  {
    icon: '🔌', title: 'Env Connection', titleClass: 'card-title-cyan', subtitle: 'DATABASE_URL',
    description: 'One URL in .env for local Docker or a hosted DB. Switch environments without changing code.',
    code: '# .env\nDATABASE_URL=postgres://user:pass@localhost:5432/app',
  },
  {
    icon: '🔁', title: 'Keep The Routes', titleClass: 'card-title-purple', subtitle: 'Swap The Store',
    description: 'Handlers still return 201/404/JSON. Only the body of each function changes from array push to await query.',
    code: '// before: tasks.push(task)\n// after:  await pool.query("INSERT…")',
  },
  {
    icon: '🛡️', title: 'Errors & Health', titleClass: 'card-title-amber', subtitle: 'Fail Clearly',
    description: 'Add GET /health that pings the DB. On query failure, log server-side and return 500 with a safe message.',
    code: 'app.get("/health", async (req, res) => {\n  await pool.query("SELECT 1");\n  res.json({ ok: true });\n});',
  },
  {
    icon: '🚀', title: 'What Comes Next', titleClass: 'card-title-lime', subtitle: 'Day 131 Preview',
    description: 'Tomorrow: Express + TypeScript — tsx in dev, typed handlers, then Zod, errors, security, and deploy.',
    link: { href: '/day-131', label: 'Go to Day 131 →' },
  },
];

const RESOURCES = [
  {
    icon: '🐘', title: 'node-postgres', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Pools, queries, and parameterized SQL for Postgres from Node.',
    link: { href: PG_NODE, label: 'Read node-postgres docs →', external: true },
  },
  {
    icon: '🍃', title: 'Mongoose Guide', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Schemas, models, and CRUD helpers for MongoDB.',
    link: { href: MONGOOSE, label: 'Read Mongoose guide →', external: true },
  },
  {
    icon: '▲', title: 'Prisma Quickstart', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Schema, migrate, and typed queries for SQL databases.',
    link: { href: PRISMA, label: 'Read Prisma getting started →', external: true },
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

export default function Day130() {
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
          <Link to="/day-129" className="day001-nav-btn day001-nav-prev">← Day 129</Link>
          <p className="day001-datetime">Express Day 130</p>
          <Link to="/day-131" className="day001-nav-btn day001-nav-next">Day 131 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>Database</span><span>API</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 130 <span aria-hidden="true">🗄️</span></h1>
              <p className="day001-day-theme">CONNECTING A DATABASE</p>
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
          Day 130 makes data durable. Plug in <strong>Postgres</strong>, <strong>Mongo</strong>, or{' '}
          <strong>Prisma</strong> via <code>DATABASE_URL</code>, keep the same <strong>REST</strong> routes,
          and handle query errors cleanly. That closes the first Express arc: hello → routes → CRUD →
          JWT → database.
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

        <CardSection icon="🗄️" title="1 · PICK A STORE" cards={DB} columns={3} />
        <CardSection icon="🔌" title="2 · WIRE IT TO THE API" cards={WIRE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Express</span><span>#Postgres</span><span>#MongoDB</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
