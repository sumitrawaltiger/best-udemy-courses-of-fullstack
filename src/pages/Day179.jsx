import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ETL = 'https://www.ibm.com/topics/etl';
const ELT = 'https://www.ibm.com/topics/elt';
const DBT = 'https://docs.getdbt.com/docs/introduction';

const LEARNT_TODAY = [
  { title: 'ETL', text: 'Extract → Transform → Load — clean data before it lands in the warehouse' },
  { title: 'ELT', text: 'Extract → Load → Transform — load raw, transform with SQL in the warehouse (common now)' },
  { title: 'Extract', text: 'pull from Postgres, APIs, or Kafka topics on a schedule or stream' },
  { title: 'Load', text: 'land raw tables (bronze) then build cleaned models (silver/gold)' },
  { title: 'Transform', text: 'dbt or SQL jobs: joins, dedupe, business metrics' },
  { title: 'Idempotent jobs', text: 'rerunning a day partition should replace, not duplicate' },
  { title: 'Freshness', text: 'define how stale dashboards may be (hourly vs daily)' },
  { title: 'Year-1 batch', text: 'nightly export of events + dbt models is a solid start' },
  { title: 'Stream path', text: 'Kafka → warehouse sink when you need near-real-time BI' },
];

const CORE = [
  {
    icon: '📤', title: 'Extract Sketch', titleClass: 'card-title-cyan', subtitle: 'From OLTP',
    description: 'Export new/changed rows by updated_at watermark, or dump an events table nightly.',
    code: 'SELECT * FROM events\nWHERE created_at >= $watermark\nORDER BY created_at;',
  },
  {
    icon: '📥', title: 'Load Raw', titleClass: 'card-title-purple', subtitle: 'Bronze',
    description: 'Land as-is into raw.events. Do not over-clean on the way in.',
    code: '// COPY / load job → raw.events\n'// keep payload JSON',
  },
  {
    icon: '🔄', title: 'Transform (ELT)', titleClass: 'card-title-amber', subtitle: 'dbt / SQL',
    description: 'Build marts: daily_signups, task_completion_rate from raw events.',
    code: '-- dbt model\nselect date_trunc("day", at) d, count(*)\nfrom raw.events\nwhere type = "user.signed_up"\ngroup by 1',
  },
];

const PRACTICE = [
  {
    icon: '🔁', title: 'Partition By Day', titleClass: 'card-title-cyan', subtitle: 'Reruns',
    description: 'Delete/replace one day of data then reload — safe retries.',
    code: '// delete where dt = "2026-07-22"\n'// load that day again',
  },
  {
    icon: '⏱️', title: 'Schedule', titleClass: 'card-title-purple', subtitle: 'Cron / Actions',
    description: 'GitHub Action or cloud scheduler runs extract+dbt after midnight UTC.',
    code: '// workflow cron: 0 2 * * *',
  },
  {
    icon: '🧪', title: 'Tests', titleClass: 'card-title-amber', subtitle: 'Quality',
    description: 'Assert not-null keys, unique event ids, and row-count sanity vs yesterday.',
    code: '// dbt test: unique + not_null\n'// alert on sudden -90% rows',
  },
  {
    icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-lime', subtitle: 'Day 180 Preview',
    description: 'Tomorrow: wrap search & analytics with a practical checklist.',
    link: { href: '/day-180', label: 'Go to Day 180 →' },
  },
];

const RESOURCES = [
  {
    icon: '📤', title: 'ETL', titleClass: 'card-title-cyan', subtitle: 'Overview',
    description: 'Classic extract-transform-load definition.',
    link: { href: ETL, label: 'Read ETL overview →', external: true },
  },
  {
    icon: '📥', title: 'ELT', titleClass: 'card-title-purple', subtitle: 'Overview',
    description: 'Load-first transform-in-warehouse approach.',
    link: { href: ELT, label: 'Read ELT overview →', external: true },
  },
  {
    icon: '🛠️', title: 'dbt Intro', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Popular SQL transform framework for warehouses.',
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

export default function Day179() {
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
          <Link to="/day-178" className="day001-nav-btn day001-nav-prev">← Day 178</Link>
          <p className="day001-datetime">Data Day 179 · 2 Dec 2027</p>
          <Link to="/day-180" className="day001-nav-btn day001-nav-next">Day 180 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ETL</span><span>Year 1</span><span>ELT</span><span>dbt</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 179 <span aria-hidden="true">🔄</span></h1>
              <p className="day001-day-theme">ETL / ELT PIPELINES</p>
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
          Day 179 moves data. Prefer <strong>ELT</strong>: extract and load raw, transform with{' '}
          <strong>SQL/dbt</strong>, keep jobs <strong>idempotent</strong>, and schedule freshness you can
          afford.
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

        <CardSection icon="🔄" title="1 · PIPELINE STAGES" cards={CORE} columns={3} />
        <CardSection icon="🔁" title="2 · OPS HABITS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ETL</span><span>#ELT</span><span>#dbt</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
