import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PG = 'https://www.postgresql.org/docs/';
const KAFKA = 'https://kafka.apache.org/intro';
const OUTBOX = 'https://microservices.io/patterns/data/transactional-outbox.html';

const LEARNT_TODAY = [
  { title: 'Data arc done', text: 'Days 171–175: indexes → transactions → Kafka → consumers → checklist' },
  { title: 'Fast reads', text: 'index what you filter/sort; prove with EXPLAIN' },
  { title: 'Safe writes', text: 'transactions + idempotency for money-like multi-step updates' },
  { title: 'Streams', text: 'Kafka for cross-service events and replay; BullMQ for in-app jobs' },
  { title: 'Consumers', text: 'idempotent handlers, DLQ, and lag alerts beat silent failures' },
  { title: 'Dual-write caution', text: 'DB then Kafka without outbox can lose events — learn the pattern' },
  { title: 'Full lifecycle', text: 'API + DB + ops + data streams — closer to production engineering' },
  { title: 'What’s next', text: 'deeper analytics, search, or the next Year-1 track — Day 176 when ready' },
  { title: 'Practice', text: 'one topic, one consumer, one DLQ in compose — ship a tiny pipeline' },
];

const CORE = [
  {
    icon: '🗺️', title: '171 → 175 Map', titleClass: 'card-title-cyan', subtitle: 'What You Built',
    description: 'Database performance and consistency, then event streaming with safe consumers.',
    code: 'Indexes · Transactions\nKafka · Consumers · DLQ',
  },
  {
    icon: '✅', title: 'Data Checklist', titleClass: 'card-title-purple', subtitle: 'Before Scale',
    description: 'Hot queries explained, critical writes transactional, events versioned, lag monitored.',
    code: '// EXPLAIN · $transaction\n'// schema v · lag alert · DLQ',
  },
  {
    icon: '📬', title: 'Outbox Reminder', titleClass: 'card-title-amber', subtitle: 'Pattern',
    description: 'When reliability matters, publish via transactional outbox — not best-effort dual writes.',
    code: '// tx: entity + outbox row\n'// publisher → Kafka',
  },
];

const WRAP = [
  {
    icon: '🚀', title: 'What Comes Next', titleClass: 'card-title-lime', subtitle: 'Day 176 Preview',
    description: 'Tomorrow: Postgres full-text search — tsvector, GIN indexes, and ranking.',
    link: { href: '/day-176', label: 'Go to Day 176 →' },
  },
  {
    icon: '🏠', title: 'Back Home', titleClass: 'card-title-amber', subtitle: 'Hub',
    description: 'Return to the hub for other tracks and the 1500-day map.',
    link: { href: '/', label: 'Go to Home →' },
  },
  {
    icon: '🐘', title: 'Postgres Docs', titleClass: 'card-title-cyan', subtitle: 'Reference',
    description: 'Keep the official docs bookmarked for indexes and transactions.',
    link: { href: PG, label: 'Open Postgres docs →', external: true },
  },
  {
    icon: '🪵', title: 'Kafka Intro', titleClass: 'card-title-purple', subtitle: 'Reference',
    description: 'Revisit the mental model when designing a new topic.',
    link: { href: KAFKA, label: 'Open Kafka intro →', external: true },
  },
];

const RESOURCES = [
  {
    icon: '🐘', title: 'PostgreSQL', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Official Postgres documentation home.',
    link: { href: PG, label: 'Read Postgres docs →', external: true },
  },
  {
    icon: '🪵', title: 'Kafka', titleClass: 'card-title-purple', subtitle: 'Intro',
    description: 'Distributed event streaming platform overview.',
    link: { href: KAFKA, label: 'Read Kafka intro →', external: true },
  },
  {
    icon: '📬', title: 'Transactional Outbox', titleClass: 'card-title-amber', subtitle: 'Pattern',
    description: 'Reliable messaging with the database.',
    link: { href: OUTBOX, label: 'Read outbox pattern →', external: true },
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

export default function Day175() {
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
          <Link to="/day-174" className="day001-nav-btn day001-nav-prev">← Day 174</Link>
          <p className="day001-datetime">Data Day 175</p>
          <Link to="/day-176" className="day001-nav-btn day001-nav-next">Day 176 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Year 1</span><span>Data</span><span>Milestone</span><span>Day 175</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 175 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">DATA &amp; STREAMING MILESTONE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '49%' }} /></div>

        <p className="day001-summary">
          Day 175 closes the data journal arc. You can <strong>index</strong> hot paths,{' '}
          <strong>transact</strong> safely, and run <strong>Kafka consumers</strong> with retries and a
          DLQ.
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
          <span>#100DaysOfCode</span><span>#PostgreSQL</span><span>#Kafka</span><span>#Data</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
