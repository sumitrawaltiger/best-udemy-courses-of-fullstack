import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const INDEX_URL = 'https://use-the-index-luke.com/';
const YT_URL = 'https://www.youtube.com/watch?v=HubezKbFL7E';

const LEARNT_TODAY = [
  {
    title: 'Why indexes',
    text: 'speed up lookups — without them, every query is a full table scan',
  },
  {
    title: 'B-tree indexes',
    text: 'the default index type — balanced tree for equality and range',
  },
  {
    title: 'Compound indexes',
    text: 'multi-column indexes — column order (leftmost prefix) matters',
  },
  {
    title: 'Selectivity',
    text: 'high-cardinality columns make better indexes than low-cardinality ones',
  },
  {
    title: 'Explain plans',
    text: 'EXPLAIN / EXPLAIN ANALYZE shows how the planner will run your query',
  },
  {
    title: 'Index scan vs seq scan',
    text: 'planner picks based on cost — indexes are not always faster',
  },
  {
    title: 'Covering indexes',
    text: 'INCLUDE / covering columns avoid heap lookups (index-only scans)',
  },
  {
    title: 'Write cost',
    text: 'every index slows INSERT/UPDATE/DELETE — index what you query',
  },
  {
    title: 'Query patterns',
    text: 'WHERE, JOIN, ORDER BY, and GROUP BY drive which indexes you need',
  },
  {
    title: 'Tuning loop',
    text: 'measure → explain → add/adjust index → re-measure',
  },
];

const INDEX_BASICS = [
  {
    icon: '⚡',
    title: 'Why Indexes',
    titleClass: 'card-title-cyan',
    subtitle: 'stop scanning everything',
    description: 'An index is a sorted lookup structure so the DB finds rows fast.',
    code: '-- without index: Seq Scan on users\n-- with index: Index Scan using users_email_idx',
  },
  {
    icon: '🌳',
    title: 'B-tree Indexes',
    titleClass: 'card-title-green',
    subtitle: 'the default',
    description: 'Balanced tree — great for =, <, >, BETWEEN, and ORDER BY.',
    code: 'CREATE INDEX users_email_idx ON users (email);\n-- equality + range lookups',
  },
  {
    icon: '🔗',
    title: 'Compound Indexes',
    titleClass: 'card-title-amber',
    subtitle: 'multi-column',
    description: 'Order matters: (a, b) helps WHERE a = ? and WHERE a = ? AND b = ?.',
    code: 'CREATE INDEX ON orders (user_id, created_at);\n-- leftmost prefix rule',
  },
  {
    icon: '📊',
    title: 'Selectivity',
    titleClass: 'card-title-pink',
    subtitle: 'cardinality',
    description: 'Index columns that filter many rows down to few — not boolean flags alone.',
    code: '-- good: email, user_id, created_at\n-- weak alone: is_active (true/false)',
  },
];

const OPTIMIZE = [
  {
    icon: '🔍',
    title: 'Explain Plans',
    titleClass: 'card-title-cyan',
    subtitle: 'see the plan',
    description: 'Read the planner output before guessing at indexes.',
    code: 'EXPLAIN ANALYZE\nSELECT * FROM orders WHERE user_id = 42;',
  },
  {
    icon: '🎯',
    title: 'Query Optimization',
    titleClass: 'card-title-green',
    subtitle: 'tune the SQL',
    description: 'Avoid SELECT *; filter early; join on indexed keys.',
    code: '-- prefer selective WHERE first\n-- index JOIN / ORDER BY columns',
  },
  {
    icon: '⚖️',
    title: 'Write Trade-offs',
    titleClass: 'card-title-amber',
    subtitle: 'indexes cost writes',
    description: 'More indexes = faster reads, slower writes. Index what you query.',
    code: '-- measure hot queries\n-- drop unused indexes',
  },
];

const RESOURCES = [
  {
    icon: '📖',
    title: 'Use The Index, Luke',
    titleClass: 'card-title-purple',
    subtitle: 'SQL indexing guide',
    description: 'The classic free guide to SQL indexing and performance.',
    link: { href: INDEX_URL, label: 'Open the guide →', external: true },
  },
  {
    icon: '▶️',
    title: 'Database Indexing',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Database Indexing Explained — Hussein Nasser — for Day 91.',
    link: { href: YT_URL, label: 'Watch on YouTube →', external: true },
  },
  {
    icon: '📚',
    title: 'Lesson Page',
    titleClass: 'card-title-green',
    subtitle: 'full chapter',
    description: 'Open the Day 91 lesson for sections, quiz, and try-it snippets.',
    link: {
      href: '/learn/database-indexing-and-query-optimization',
      label: 'Open lesson →',
      external: false,
    },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">
        {card.icon}
      </span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a
            href={card.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="day001-card-link"
          >
            {card.link.label}
          </a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">
            {card.link.label}
          </Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title">
        <span aria-hidden="true">{icon}</span> {title}
      </h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (
          <TopicCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

export default function Day091() {
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
      const scale = Math.min(
        (window.innerHeight - pad) / wrap.scrollHeight,
        (window.innerWidth - pad) / wrap.scrollWidth,
      );

      wrap.style.transform = `scale(${scale})`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
    };

    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);

    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) {
      avatar.addEventListener('load', fitToScreen);
    }

    return () => {
      window.removeEventListener('resize', fitToScreen);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/day-090" className="day001-nav-btn day001-nav-home">
            ← Day 90
          </Link>
          <p className="day001-datetime">Thunder Day 91 · 22 Oct 2026</p>
          <Link to="/day-092" className="day001-nav-btn day001-nav-next">
            Day 92 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Database</span>
              <span>Performance</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 91 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">DATABASE INDEXING & QUERY OPTIMIZATION</p>
            </div>
          </div>
          <div className="day001-profile">
            <img
              src="/sumit-profile.png"
              alt="Sumit Rawal"
              className="day001-avatar"
              width={48}
              height={48}
            />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">DATABASE</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '91%' }} />
        </div>

        <p className="day001-summary">
          Day ninety-one — make queries fast with <strong>indexes</strong>, read{' '}
          <strong>explain plans</strong>, and tune SQL like a DBA. Learn{' '}
          <strong>B-tree</strong> and <strong>compound</strong> indexes, selectivity, covering
          indexes, and the write trade-off. Reference:{' '}
          <a href={INDEX_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Use The Index, Luke
          </a>
          .
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title">
            <span className="day001-learnt-line" aria-hidden="true" />
            WHAT I LEARNED TODAY
          </h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">
                  ✓
                </span>
                <span>
                  <strong>{item.title}</strong> — {item.text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🗂️" title="INDEX BASICS" cards={INDEX_BASICS} columns={4} />
        <CardSection icon="🔧" title="OPTIMIZE & TUNE" cards={OPTIMIZE} columns={3} />
        <CardSection icon="📚" title="INDEXING RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#SQL</span>
          <span>#Indexing</span>
          <span>#Performance</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
