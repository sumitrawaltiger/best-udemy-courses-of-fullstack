import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const INDEX_USE = 'https://use-the-index-luke.com/';
const SHARD_DOCS = 'https://www.mongodb.com/docs/manual/sharding/';

const LEARNT_TODAY = [
  { title: 'SQL vs NoSQL', text: 'relational + ACID vs flexible schema + horizontal scale' },
  { title: 'Indexes', text: 'a B-tree that turns O(n) scans into O(log n) lookups' },
  { title: 'Indexes cost writes', text: 'every index is extra work on insert/update — add deliberately' },
  { title: 'Replication', text: 'copy data to replicas for read scale and failover' },
  { title: 'Sharding', text: 'split data across nodes by a shard key for write scale' },
  { title: 'Shard key matters', text: 'a bad key creates hotspots and cross-shard queries' },
  { title: 'Denormalise for reads', text: 'NoSQL often duplicates data to avoid joins' },
  { title: 'Pick by access pattern', text: 'model the queries first, then choose the store' },
];

const STORES = [
  {
    icon: '🗄️', title: 'SQL vs NoSQL', titleClass: 'card-title-cyan', subtitle: 'Structure vs Scale',
    description:
      'Relational databases give a fixed schema, joins and ACID transactions — ideal for structured, consistent data. NoSQL (document, key-value, wide-column) trades joins/strict schema for flexible models and easy horizontal scale.',
    code: '// SQL (Postgres): joins, transactions, strong schema\n// NoSQL (Mongo/DynamoDB): flexible docs, denormalised,\n//   scales out — model around your access patterns',
  },
  {
    icon: '🔎', title: 'Indexes', titleClass: 'card-title-purple', subtitle: 'Fast Lookups',
    description:
      'An index (usually a B-tree) makes lookups on a column O(log n) instead of a full scan. But each index slows writes and uses space — index the columns you filter/sort on, not everything.',
    code: '-- index the columns queries filter on\nCREATE INDEX idx_user_email ON users(email);\n-- composite for multi-column filters\nCREATE INDEX idx_orders_user_date ON orders(user_id, created_at);',
  },
];

const SCALE = [
  {
    icon: '📑', title: 'Replication', titleClass: 'card-title-cyan', subtitle: 'Read Scale + Failover',
    description:
      'Keep copies of the data. A primary takes writes and streams to read replicas that serve read traffic; if the primary fails, a replica is promoted. Reads may be slightly stale (replication lag).',
    code: '// writes → primary\n// reads  → replicas (may lag by ms)\n// primary down → promote a replica (failover)',
  },
  {
    icon: '🧩', title: 'Sharding', titleClass: 'card-title-purple', subtitle: 'Write Scale',
    description:
      'When one node can’t hold the data or writes, split it across shards by a shard key (e.g. user_id). Each shard owns a slice. The key is critical — a poor one causes hotspots and cross-shard queries.',
    code: '// shard by user_id → user data co-located per shard\n// avoid keys that concentrate load (e.g. "country")\n// cross-shard joins are expensive — design them out',
  },
  {
    icon: '🧭', title: 'Model The Queries', titleClass: 'card-title-amber', subtitle: 'Access-Pattern First',
    description:
      'Choose the store and schema from how you read/write, not the other way round. SQL for relations and transactions; NoSQL when you need scale and denormalised, query-shaped data.',
    footer: 'reads/writes first → then schema → then engine',
  },
];

const RESOURCES = [
  {
    icon: '🔎', title: 'Use The Index, Luke', titleClass: 'card-title-cyan', subtitle: 'Indexing',
    description:
      'A practical guide to SQL indexing and performance — how B-trees work, composite indexes, and reading query plans.',
    link: { href: INDEX_USE, label: 'Open the guide →', external: true },
  },
  {
    icon: '🧩', title: 'Sharding', titleClass: 'card-title-purple', subtitle: 'MongoDB Docs',
    description:
      'How horizontal partitioning works in practice — shard keys, chunk balancing, and the trade-offs of distributing data.',
    link: { href: SHARD_DOCS, label: 'Open the sharding docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Caching & CDN', titleClass: 'card-title-amber', subtitle: 'Day 48 Preview',
    description:
      'Tomorrow — take load off the database: caching strategies (cache-aside, write-through), Redis, eviction, and CDNs for static assets.',
    link: { href: '/day-048', label: 'Go to Day 48 →' },
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

export default function Day047() {
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
          <Link to="/day-046" className="day001-nav-btn day001-nav-prev">← Day 46</Link>
          <p className="day001-datetime">TypeScript Day 47 · 23 Jul 2027</p>
          <Link to="/day-048" className="day001-nav-btn day001-nav-next">Day 48 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>System Design</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 47 <span aria-hidden="true">🗄️</span></h1>
              <p className="day001-day-theme">SYSTEM DESIGN — DATABASES &amp; STORAGE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '47%' }} /></div>

        <p className="day001-summary">
          The storage layer. <strong>SQL</strong> gives schema, joins and ACID; <strong>NoSQL</strong> trades those for
          flexible models and horizontal scale — choose by <strong>access pattern</strong>. <strong>Indexes</strong>{' '}
          (B-trees) turn scans into O(log n) lookups but slow writes, so index only what you filter/sort on. Scale
          reads and survive failure with <strong>replication</strong> (primary → read replicas, promote on failure,
          mind the lag); scale writes with <strong>sharding</strong> (split by a well-chosen <strong>shard key</strong>{' '}
          to avoid hotspots and cross-shard joins). NoSQL often <strong>denormalises</strong> to dodge joins. Model the
          queries first, then pick the engine. <em>Next: caching &amp; CDNs.</em>
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

        <CardSection icon="🗄️" title="STORES & INDEXES" cards={STORES} columns={2} />
        <CardSection icon="📑" title="REPLICATION & SHARDING" cards={SCALE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#SystemDesign</span><span>#Databases</span>
        </footer>
      </div>
    </div>
  );
}
