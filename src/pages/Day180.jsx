import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const FTS = 'https://www.postgresql.org/docs/current/textsearch.html';
const DBT = 'https://docs.getdbt.com/docs/introduction';
const WAREHOUSE = 'https://www.snowflake.com/en/guides/what-is-data-warehouse/';

const LEARNT_TODAY = [
  { title: 'Search arc', text: 'Days 176–177: Postgres FTS + a scoped /search API' },
  { title: 'Analytics arc', text: 'Days 178–179: warehouses and ELT — keep BI off OLTP' },
  { title: 'Product search', text: 'GIN + ranking beats LIKE; authz belongs in the query' },
  { title: 'Dashboards', text: 'star schemas and nightly loads beat live COUNT(*) on prod' },
  { title: 'Events help both', text: 'good domain events feed Kafka consumers and warehouse facts' },
  { title: 'Checklist', text: 'search indexes, /search contract, warehouse load, dbt tests' },
  { title: 'Full lifecycle', text: 'API + data + ops — search and analytics complete the picture' },
  { title: 'What’s next', text: 'personalization next — Day 181 opens recommendation systems' },
  { title: 'Ship small', text: 'one FTS field and one nightly export beat a perfect platform that never lands' },
];

const CORE = [
  {
    icon: '🗺️', title: '176 → 180 Map', titleClass: 'card-title-cyan', subtitle: 'What You Built',
    description: 'Full-text search in Postgres, a real search API, then warehouse + ELT for analytics.',
    code: 'FTS · /search\nWarehouse · ELT · dbt',
  },
  {
    icon: '✅', title: 'Ship Checklist', titleClass: 'card-title-purple', subtitle: 'Before Scale',
    description: 'search_vector indexed, /search authz-safe, BI on warehouse, jobs idempotent and tested.',
    code: '// GIN · scoped SQL\n'// raw load · dbt test · freshness',
  },
  {
    icon: '🧭', title: 'Choose Tools', titleClass: 'card-title-amber', subtitle: 'Fit Stage',
    description: 'Postgres FTS first. Elasticsearch when fuzzy/facets demand it. Warehouse when BI hurts prod.',
    code: '// FTS → maybe ES\n'// prod DB hurt → warehouse',
  },
];

const WRAP = [
  {
    icon: '🚀', title: 'What Comes Next', titleClass: 'card-title-lime', subtitle: 'Day 181',
    description: 'Start personalization: recommendation systems intro — signals, cold start, and retrieve → rank.',
    footer: 'You can search the product and analyze it without melting Postgres.',
    link: { href: '/day-181', label: 'Go to Day 181 →' },
  },
  {
    icon: '🏠', title: 'Back Home', titleClass: 'card-title-amber', subtitle: 'Hub',
    description: 'Return to the hub for other tracks and the 1600-day map.',
    link: { href: '/', label: 'Go to Home →' },
  },
  {
    icon: '🔎', title: 'Postgres FTS', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Revisit when tuning ranking and dictionaries.',
    link: { href: FTS, label: 'Open FTS docs →', external: true },
  },
  {
    icon: '🛠️', title: 'dbt', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Transform layer for warehouse SQL models.',
    link: { href: DBT, label: 'Open dbt intro →', external: true },
  },
];

const RESOURCES = [
  {
    icon: '🔎', title: 'Full Text Search', titleClass: 'card-title-cyan', subtitle: 'Postgres',
    description: 'Official FTS documentation.',
    link: { href: FTS, label: 'Read FTS docs →', external: true },
  },
  {
    icon: '🏛️', title: 'Data Warehouse', titleClass: 'card-title-purple', subtitle: 'Guide',
    description: 'What warehouses are for.',
    link: { href: WAREHOUSE, label: 'Read warehouse guide →', external: true },
  },
  {
    icon: '🛠️', title: 'dbt', titleClass: 'card-title-amber', subtitle: 'Intro',
    description: 'Analytics engineering transforms.',
    link: { href: DBT, label: 'Read dbt intro →', external: true },
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

export default function Day180() {
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
          <Link to="/day-179" className="day001-nav-btn day001-nav-prev">← Day 179</Link>
          <p className="day001-datetime">Data Day 180 · 3 Dec 2027</p>
          <Link to="/day-181" className="day001-nav-btn day001-nav-next">Day 181 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Year 1</span><span>Search</span><span>Analytics</span><span>Day 180</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 180 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">SEARCH &amp; ANALYTICS MILESTONE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '50%' }} /></div>

        <p className="day001-summary">
          Day 180 closes the search &amp; analytics arc. Users can <strong>find</strong> content; the
          business can <strong>measure</strong> without melting the app database.
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

        <CardSection icon="🗺️" title="1 · THE ARC" cards={CORE} columns={3} />
        <CardSection icon="🚀" title="2 · NEXT & REFERENCES" cards={WRAP} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Search</span><span>#Analytics</span><span>#Data</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
