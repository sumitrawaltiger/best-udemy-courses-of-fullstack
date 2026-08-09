import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const CONSUMERS = 'https://kafka.apache.org/documentation/#intro_consumers';
const DELIVERY = 'https://kafka.apache.org/documentation/#semantics';
const DLQ = 'https://www.confluent.io/blog/kafka-connect-deep-dive-error-handling-dead-letter-queues/';

const LEARNT_TODAY = [
  { title: 'Consumer group', text: 'instances share partitions — scale by adding consumers in the same group' },
  { title: 'At-least-once', text: 'default reality — a crash after handle but before commit redelivers' },
  { title: 'Idempotent handlers', text: 'make side effects safe to run twice (unique keys, upserts)' },
  { title: 'Commit offsets', text: 'commit after success; auto-commit can hide partial failures' },
  { title: 'Retries', text: 'transient errors → backoff retry; poison messages need a dead-letter path' },
  { title: 'Dead-letter topic', text: 'park bad messages for inspection without blocking the partition' },
  { title: 'Poison pills', text: 'malformed JSON that always fails — fix schema or quarantine' },
  { title: 'Lag metric', text: 'how far consumers trail producers — alert when lag grows' },
  { title: 'Exactly-once', text: 'harder; Year-1 usually idempotent at-least-once is enough' },
];

const CORE = [
  {
    icon: '👥', title: 'Consumer Group', titleClass: 'card-title-cyan', subtitle: 'Parallelism',
    description: 'One partition → one consumer in the group. More partitions allow more parallel workers.',
    code: 'groupId: "email-workers"\n// 3 partitions → up to 3 consumers busy',
  },
  {
    icon: '🔁', title: 'Idempotent Handle', titleClass: 'card-title-purple', subtitle: 'Safe Retries',
    description: 'Check “already processed event id” or upsert by natural key before side effects.',
    code: 'if (await seen(event.id)) return;\nawait sendEmail(event);\nawait markSeen(event.id);',
  },
  {
    icon: '☠️', title: 'Dead Letter', titleClass: 'card-title-amber', subtitle: 'DLQ',
    description: 'After N failures, publish to task.events.dlq and commit past the bad offset.',
    code: '// retry 5x → produce to *.dlq\n'// commit offset · alert humans',
  },
];

const PRACTICE = [
  {
    icon: '📉', title: 'Watch Lag', titleClass: 'card-title-cyan', subtitle: 'Ops',
    description: 'Consumer lag rising means workers are slow or stuck — scale or fix handlers.',
    code: '// lag = log_end - committed\n'// alert if lag > threshold',
  },
  {
    icon: '🧾', title: 'Schema Discipline', titleClass: 'card-title-purple', subtitle: 'Payloads',
    description: 'Version event payloads. Additive fields first; breaking changes need a new topic or version field.',
    code: '{ "v": 1, "type": "task.created", "data": {…} }',
  },
  {
    icon: '📦', title: 'Outbox Peek', titleClass: 'card-title-amber', subtitle: 'Later',
    description: 'Write DB row + outbox in one transaction, then relay to Kafka — avoids dual-write bugs.',
    code: '// tx: save entity + outbox\n'// relay publishes to Kafka',
  },
  {
    icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-lime', subtitle: 'Day 175 Preview',
    description: 'Tomorrow: wrap the data & streaming arc with a practical checklist.',
    link: { href: '/day-175', label: 'Go to Day 175 →' },
  },
];

const RESOURCES = [
  {
    icon: '📥', title: 'Consumers', titleClass: 'card-title-cyan', subtitle: 'Kafka Docs',
    description: 'Consumer groups and offset tracking.',
    link: { href: CONSUMERS, label: 'Read consumers intro →', external: true },
  },
  {
    icon: '📨', title: 'Delivery Semantics', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'At-most-once, at-least-once, exactly-once.',
    link: { href: DELIVERY, label: 'Read delivery semantics →', external: true },
  },
  {
    icon: '☠️', title: 'Dead Letter Queues', titleClass: 'card-title-amber', subtitle: 'Article',
    description: 'Error handling patterns with DLQs.',
    link: { href: DLQ, label: 'Read DLQ deep dive →', external: true },
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

export default function Day174() {
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
          <Link to="/day-173" className="day001-nav-btn day001-nav-prev">← Day 173</Link>
          <p className="day001-datetime">Data Day 174 · 27 Nov 2027</p>
          <Link to="/day-175" className="day001-nav-btn day001-nav-next">Day 175 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Kafka</span><span>Year 1</span><span>Consumers</span><span>DLQ</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 174 <span aria-hidden="true">📥</span></h1>
              <p className="day001-day-theme">CONSUMERS, RETRIES &amp; DLQ</p>
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
          Day 174 hardens consumers. Use <strong>groups</strong> for scale,{' '}
          <strong>idempotent handlers</strong> for at-least-once delivery, and a{' '}
          <strong>dead-letter topic</strong> for poison messages.
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

        <CardSection icon="📥" title="1 · SAFE CONSUMERS" cards={CORE} columns={3} />
        <CardSection icon="📉" title="2 · LAG & SCHEMAS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Kafka</span><span>#Consumers</span><span>#DLQ</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
