import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const OLAP = 'https://en.wikipedia.org/wiki/Online_analytical_processing';
const BIGQUERY = 'https://cloud.google.com/bigquery/docs';
const WAREHOUSE = 'https://www.snowflake.com/en/guides/what-is-data-warehouse/';

const LEARNT_TODAY = [
  { title: 'OLTP vs OLAP', text: 'app DB serves fast row writes; warehouse serves heavy analytical scans' },
  { title: 'Why separate', text: 'dashboard queries can lock or starve production Postgres' },
  { title: 'Warehouse', text: 'columnar store optimized for aggregates over large history' },
  { title: 'Examples', text: 'BigQuery, Snowflake, Redshift, ClickHouse — pick later; learn the shape now' },
  { title: 'Facts & dims', text: 'star schemas: fact tables (events) + dimensions (user, product)' },
  { title: 'Append-heavy', text: 'analytics loves immutable event rows more than updating live entities' },
  { title: 'Not for auth', text: 'do not put login paths on the warehouse — keep OLTP for the app' },
  { title: 'Cost model', text: 'scan-based pricing rewards selective, well-partitioned queries' },
  { title: 'Year-1 trigger', text: 'when BI hurts prod DB, start exporting events nightly or via stream' },
];

const CORE = [
  {
    icon: '🏛️', title: 'Two Databases', titleClass: 'card-title-cyan', subtitle: 'Split Workloads',
    description: 'Postgres for the product. Warehouse for “how many signups by week?” style questions.',
    code: 'OLTP:  GET /tasks  (ms)\nOLAP:  weekly funnel (seconds–minutes OK)',
  },
  {
    icon: '📊', title: 'Star Sketch', titleClass: 'card-title-purple', subtitle: 'Model',
    description: 'fact_orders references dim_user and dim_product — aggregates become simple joins.',
    code: 'fact_orders(date, user_id, product_id, amount)\ndim_user(user_id, country)\ndim_product(product_id, category)',
  },
  {
    icon: '📥', title: 'How Data Arrives', titleClass: 'card-title-amber', subtitle: 'Load',
    description: 'Batch export (nightly dump) or stream (Kafka → warehouse). Day 179 covers pipelines.',
    code: '// batch: CSV/Parquet load\n'// stream: events topic → sink',
  },
];

const PRACTICE = [
  {
    icon: '⚠️', title: 'Don’t Report On Prod', titleClass: 'card-title-cyan', subtitle: 'Protect OLTP',
    description: 'Ad-hoc SELECT COUNT(*) over years of rows belongs in the warehouse, not primary.',
    code: '// BI tool → warehouse\n'// app → Postgres',
  },
  {
    icon: '🧩', title: 'Event First', titleClass: 'card-title-purple', subtitle: 'Design',
    description: 'Emit task.created with timestamps and ids — future analytics will thank you.',
    code: '{ type, userId, taskId, at }',
  },
  {
    icon: '💰', title: 'Query Hygiene', titleClass: 'card-title-amber', subtitle: 'Cost',
    description: 'Filter by partition/date first. Select only needed columns.',
    code: '// WHERE date >= …\n'// avoid SELECT *',
  },
  {
    icon: '🔜', title: 'Next: ETL/ELT', titleClass: 'card-title-lime', subtitle: 'Day 179 Preview',
    description: 'Tomorrow: extract, load, transform — batch jobs and ELT in the warehouse.',
    link: { href: '/day-179', label: 'Go to Day 179 →' },
  },
];

const RESOURCES = [
  {
    icon: '📊', title: 'OLAP', titleClass: 'card-title-cyan', subtitle: 'Overview',
    description: 'What online analytical processing means.',
    link: { href: OLAP, label: 'Read OLAP overview →', external: true },
  },
  {
    icon: '☁️', title: 'BigQuery Docs', titleClass: 'card-title-purple', subtitle: 'Example WH',
    description: 'One popular cloud warehouse to skim.',
    link: { href: BIGQUERY, label: 'Read BigQuery docs →', external: true },
  },
  {
    icon: '🏛️', title: 'What Is A Warehouse', titleClass: 'card-title-amber', subtitle: 'Guide',
    description: 'Plain-language warehouse intro.',
    link: { href: WAREHOUSE, label: 'Read warehouse guide →', external: true },
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

export default function Day178() {
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
          <Link to="/day-177" className="day001-nav-btn day001-nav-prev">← Day 177</Link>
          <p className="day001-datetime">Data Day 178</p>
          <Link to="/day-179" className="day001-nav-btn day001-nav-next">Day 179 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Analytics</span><span>Year 1</span><span>Warehouse</span><span>OLAP</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 178 <span aria-hidden="true">🏛️</span></h1>
              <p className="day001-day-theme">DATA WAREHOUSE BASICS</p>
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
          Day 178 separates analytics from the app DB. Learn <strong>OLTP vs OLAP</strong>,{' '}
          <strong>warehouses</strong>, and simple <strong>star schemas</strong> for BI workloads.
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

        <CardSection icon="🏛️" title="1 · OLTP VS OLAP" cards={CORE} columns={3} />
        <CardSection icon="⚠️" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#DataWarehouse</span><span>#OLAP</span><span>#Analytics</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
