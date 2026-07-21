import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRISMA_DOCS = 'https://www.prisma.io/docs';
const PRISMA_START = 'https://www.prisma.io/docs/getting-started';

const LEARNT_TODAY = [
  { title: 'Prisma is a typed ORM', text: 'define a schema, and get a fully-typed client for your database' },
  { title: 'schema.prisma', text: 'one file describes models, fields, relations and the datasource' },
  { title: 'Migrations', text: 'prisma migrate turns schema changes into versioned SQL' },
  { title: 'Generated client', text: 'prisma generate produces a client typed to your exact models' },
  { title: 'Typed queries', text: 'findMany, create, update, delete — all autocompleted and checked' },
  { title: 'Relations', text: 'model relations once; include or select related data in a query' },
  { title: 'One client instance', text: 'reuse a single PrismaClient across the app (avoid many connections)' },
  { title: 'Any SQL database', text: 'Postgres, MySQL, SQLite — swap the datasource, keep the code' },
];

const SCHEMA = [
  {
    icon: '📄', title: 'The Schema', titleClass: 'card-title-cyan', subtitle: 'schema.prisma',
    description:
      'Describe your data once — models, fields, types and relations, plus the datasource. Prisma reads this file to generate the client and to build migrations.',
    code: 'model User {\n  id    Int    @id @default(autoincrement())\n  email String @unique\n  posts Post[]\n}\nmodel Post {\n  id       Int  @id @default(autoincrement())\n  title    String\n  author   User @relation(fields: [authorId], references: [id])\n  authorId Int\n}',
  },
  {
    icon: '🔁', title: 'Migrate & Generate', titleClass: 'card-title-purple', subtitle: 'Schema → DB',
    description:
      'prisma migrate dev turns schema edits into versioned SQL and applies them; prisma generate builds a client typed to those exact models. Change the schema, re-run, done.',
    code: 'npx prisma migrate dev --name init\nnpx prisma generate\n// datasource in .env: DATABASE_URL="postgresql://…"',
  },
];

const QUERIES = [
  {
    icon: '🔍', title: 'Typed Queries', titleClass: 'card-title-cyan', subtitle: 'CRUD, Autocompleted',
    description:
      'The client mirrors your schema. Every query — findMany, findUnique, create, update, delete — is typed, so wrong fields are compile errors and results have the right shape.',
    code: 'const users = await prisma.user.findMany();\nconst user = await prisma.user.create({\n  data: { email: "a@b.com" },\n});',
  },
  {
    icon: '🔗', title: 'Relations', titleClass: 'card-title-purple', subtitle: 'include / select',
    description:
      'Fetch related records with include, or pick fields with select — the return type updates to match. No JOIN SQL by hand; the query describes the shape you want.',
    code: 'const withPosts = await prisma.user.findUnique({\n  where: { id },\n  include: { posts: true },\n});',
  },
  {
    icon: '♻️', title: 'One Client', titleClass: 'card-title-amber', subtitle: 'Reuse The Instance',
    description:
      'Create a single PrismaClient and import it everywhere. Spawning a new client per request exhausts the database connection pool — a classic production bug.',
    code: '// db.ts\nimport { PrismaClient } from "@prisma/client";\nexport const prisma = new PrismaClient();',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Prisma Docs', titleClass: 'card-title-cyan', subtitle: 'Reference',
    description:
      'The schema language, the client API, migrations, relations, transactions and connection management — the full ORM reference.',
    link: { href: PRISMA_DOCS, label: 'Open Prisma docs →', external: true },
  },
  {
    icon: '🚀', title: 'Getting Started', titleClass: 'card-title-purple', subtitle: 'Hands-On',
    description:
      'Set up Prisma with your database, model your first schema, run a migration and query — end to end in one guide.',
    link: { href: PRISMA_START, label: 'Open the guide →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Auth & Deploy', titleClass: 'card-title-amber', subtitle: 'Day 36 Preview',
    description:
      'Tomorrow — finish the backend: hash passwords (bcrypt), sign & verify JWTs, protect routes with auth middleware, and deploy the API to production.',
    link: { href: '/day-036', label: 'Go to Day 36 →' },
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

export default function Day035() {
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
          <Link to="/day-034" className="day001-nav-btn day001-nav-prev">← Day 34</Link>
          <p className="day001-datetime">TypeScript Day 35</p>
          <Link to="/day-036" className="day001-nav-btn day001-nav-next">Day 36 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Prisma</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 35 <span aria-hidden="true">🗃️</span></h1>
              <p className="day001-day-theme">EXPRESS — DATABASES WITH PRISMA</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '35%' }} /></div>

        <p className="day001-summary">
          Persisting data, type-safely. <strong>Prisma</strong> is a typed ORM: describe your data once in{' '}
          <strong>schema.prisma</strong> (models, fields, relations, datasource), then{' '}
          <code>prisma migrate</code> turns changes into versioned SQL and <code>prisma generate</code> builds a{' '}
          <strong>client typed to your exact models</strong>. Every query — <code>findMany</code>, <code>create</code>,{' '}
          <code>update</code> — is autocompleted and checked, and relations are fetched with <code>include</code>/
          <code>select</code> (the return type follows). Reuse a <strong>single PrismaClient</strong> to protect the
          connection pool, and swap Postgres / MySQL / SQLite by changing only the datasource.{' '}
          <em>Next: auth &amp; deploy.</em>
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

        <CardSection icon="📄" title="SCHEMA & MIGRATIONS" cards={SCHEMA} columns={2} />
        <CardSection icon="🔍" title="QUERYING DATA" cards={QUERIES} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#Prisma</span><span>#Database</span>
        </footer>
      </div>
    </div>
  );
}
