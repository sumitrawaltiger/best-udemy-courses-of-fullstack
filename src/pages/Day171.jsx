import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const INDEXES = 'https://www.postgresql.org/docs/current/indexes.html';
const EXPLAIN = 'https://www.postgresql.org/docs/current/using-explain.html';
const PRISMA = 'https://www.prisma.io/docs/orm/prisma-client/queries/filtering-and-sorting';

const LEARNT_TODAY = [
  { title: 'Why indexes', text: 'without them, list/filter endpoints scan whole tables as data grows' },
  { title: 'B-tree default', text: 'great for equality and range on columns you filter/sort by often' },
  { title: 'Composite indexes', text: 'order columns by how you query — (userId, createdAt) for “my tasks newest”' },
  { title: 'EXPLAIN ANALYZE', text: 'see Seq Scan vs Index Scan before you guess' },
  { title: 'Selectivity', text: 'indexing a boolean “done” alone rarely helps — combine with selective columns' },
  { title: 'Write cost', text: 'every index slows inserts/updates — index what you read hot' },
  { title: 'Covering queries', text: 'include columns the SELECT needs so the index can answer alone' },
  { title: 'ORM still SQL', text: 'Prisma/TypeORM generate queries — indexes live in the database either way' },
  { title: 'Days 171–175', text: 'indexes → transactions → Kafka → consumers → data/streaming milestone' },
];

const CORE = [
  {
    icon: '📇', title: 'Add An Index', titleClass: 'card-title-cyan', subtitle: 'schema',
    description: 'Index the foreign key and sort column your list endpoint always uses.',
    code: 'CREATE INDEX tasks_user_created_idx\n  ON tasks (user_id, created_at DESC);',
  },
  {
    icon: '🔍', title: 'EXPLAIN ANALYZE', titleClass: 'card-title-purple', subtitle: 'Measure',
    description: 'Run the real query plan. Fix Seq Scans on large tables that should use an index.',
    code: 'EXPLAIN ANALYZE\nSELECT * FROM tasks\nWHERE user_id = $1\nORDER BY created_at DESC\nLIMIT 20;',
  },
  {
    icon: '◇', title: 'Prisma @@index', titleClass: 'card-title-amber', subtitle: 'Migrate',
    description: 'Declare indexes in schema.prisma and migrate — same habit as models.',
    code: 'model Task {\n  userId    String\n  createdAt DateTime\n  @@index([userId, createdAt(sort: Desc)])\n}',
  },
];

const PRACTICE = [
  {
    icon: '⚠️', title: 'Common Mistakes', titleClass: 'card-title-cyan', subtitle: 'Avoid',
    description: 'Leading-wildcard LIKE, functions on columns in WHERE, and unused indexes bloating writes.',
    code: '// bad:  WHERE lower(email) = …\n'// good: store normalized email + index',
  },
  {
    icon: '📊', title: 'Partial Indexes', titleClass: 'card-title-purple', subtitle: 'Optional',
    description: 'Index only active rows when most of the table is archived.',
    code: 'CREATE INDEX tasks_open_idx ON tasks (user_id)\n  WHERE done = false;',
  },
  {
    icon: '🧪', title: 'Before / After', titleClass: 'card-title-amber', subtitle: 'Habit',
    description: 'Capture EXPLAIN times before shipping a hot endpoint change.',
    code: '// ms before index\n'// ms after index',
  },
  {
    icon: '🔜', title: 'Next: Transactions', titleClass: 'card-title-lime', subtitle: 'Day 172 Preview',
    description: 'Tomorrow: ACID transactions, isolation levels, and avoiding partial writes.',
    link: { href: '/day-172', label: 'Go to Day 172 →' },
  },
];

const RESOURCES = [
  {
    icon: '📇', title: 'PostgreSQL Indexes', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Index types and when to use them.',
    link: { href: INDEXES, label: 'Read index docs →', external: true },
  },
  {
    icon: '🔍', title: 'EXPLAIN', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'How to read query plans.',
    link: { href: EXPLAIN, label: 'Read EXPLAIN docs →', external: true },
  },
  {
    icon: '◇', title: 'Prisma Queries', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Filtering and sorting that should match your indexes.',
    link: { href: PRISMA, label: 'Read Prisma query docs →', external: true },
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

export default function Day171() {
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
          <Link to="/day-170" className="day001-nav-btn day001-nav-prev">← Day 170</Link>
          <p className="day001-datetime">Data Day 171 · 24 Nov 2027</p>
          <Link to="/day-172" className="day001-nav-btn day001-nav-next">Day 172 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>PostgreSQL</span><span>Year 1</span><span>Indexes</span><span>Performance</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 171 <span aria-hidden="true">📇</span></h1>
              <p className="day001-day-theme">DATABASE INDEXES</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">DATA · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '48%' }} /></div>

        <p className="day001-summary">
          Day 171 speeds reads. Add the right <strong>indexes</strong>, prove them with{' '}
          <strong>EXPLAIN ANALYZE</strong>, and declare them in <strong>Prisma</strong> so migrations
          stay the source of truth.
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

        <CardSection icon="📇" title="1 · INDEXES" cards={CORE} columns={3} />
        <CardSection icon="⚠️" title="2 · PITFALLS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#PostgreSQL</span><span>#Indexes</span><span>#Prisma</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
