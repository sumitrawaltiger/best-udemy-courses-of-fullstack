import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const KAFKA_DOCS = 'https://kafka.apache.org/documentation/';
const RABBIT_DOCS = 'https://www.rabbitmq.com/tutorials';

const LEARNT_TODAY = [
  { title: 'Queues decouple', text: 'producers and consumers work independently, at their own pace' },
  { title: 'Async work', text: 'return fast, do the slow job (email, resize, report) in the background' },
  { title: 'Absorb spikes', text: 'the queue buffers bursts so consumers aren’t overwhelmed' },
  { title: 'Kafka vs RabbitMQ', text: 'streaming log with replay vs traditional task broker' },
  { title: 'At-least-once', text: 'messages may repeat, so consumers must be idempotent' },
  { title: 'Dead-letter queue', text: 'park messages that keep failing for inspection' },
  { title: 'Event-driven', text: 'services react to events instead of calling each other directly' },
  { title: 'Backpressure', text: 'let the queue grow, then scale consumers to catch up' },
];

const QUEUES = [
  {
    icon: '📮', title: 'Decouple With A Queue', titleClass: 'card-title-cyan', subtitle: 'Producer → Queue → Consumer',
    description:
      'Instead of doing slow work in the request, drop a message on a queue and return immediately. A separate worker consumes it later — the API stays fast and the two sides scale independently.',
    code: '// API (producer)\nawait queue.publish("email.send", { to, template });\nres.status(202).json({ status: "queued" });\n\n// worker (consumer) processes it in the background',
  },
  {
    icon: '🌊', title: 'Absorb Spikes', titleClass: 'card-title-purple', subtitle: 'Buffer & Backpressure',
    description:
      'When traffic spikes, the queue buffers the excess rather than crashing consumers. Consumers process at a steady rate and you add more of them (backpressure) until the backlog drains.',
    code: '// burst of 100k jobs → queue holds them\n// scale workers on queue depth → drain the backlog',
  },
];

const BROKERS = [
  {
    icon: '🗂️', title: 'Kafka vs RabbitMQ', titleClass: 'card-title-cyan', subtitle: 'Log vs Broker',
    description:
      'Kafka is a distributed, replayable log — great for event streaming, analytics and multiple consumers reading the same events. RabbitMQ is a classic message broker — great for task/work queues and routing.',
    code: '// Kafka: append-only topics, consumer offsets, replay\n// RabbitMQ: exchanges + queues, ack/nack, routing keys',
  },
  {
    icon: '♻️', title: 'Idempotent Consumers', titleClass: 'card-title-purple', subtitle: 'At-Least-Once',
    description:
      'Most queues deliver at-least-once, so a message can arrive twice (a retry, a redeploy). Make handlers idempotent — dedupe by message id — so processing twice is harmless.',
    code: '// track processed ids; skip duplicates\nif (await seen.has(msg.id)) return ack();\nawait handle(msg); await seen.add(msg.id);',
  },
  {
    icon: '☠️', title: 'Dead-Letter Queue', titleClass: 'card-title-amber', subtitle: 'Handle Failures',
    description:
      'A message that keeps failing shouldn’t block the queue. After N retries, route it to a dead-letter queue for inspection and reprocessing — failures are isolated, not lost.',
    footer: 'retry N times → dead-letter queue → investigate',
  },
];

const RESOURCES = [
  {
    icon: '🗂️', title: 'Kafka', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description:
      'Topics, partitions, consumer groups, offsets and replication — the distributed streaming platform in depth.',
    link: { href: KAFKA_DOCS, label: 'Open Kafka docs →', external: true },
  },
  {
    icon: '🐰', title: 'RabbitMQ', titleClass: 'card-title-purple', subtitle: 'Tutorials',
    description:
      'Work queues, publish/subscribe, routing and acknowledgements — hands-on tutorials for the classic broker.',
    link: { href: RABBIT_DOCS, label: 'Open RabbitMQ tutorials →', external: true },
  },
  {
    icon: '🔜', title: 'Next: CAP & Consistency', titleClass: 'card-title-amber', subtitle: 'Day 51 Preview',
    description:
      'Tomorrow — distributed data trade-offs: the CAP theorem, strong vs eventual consistency, and replication strategies.',
    link: { href: '/day-051', label: 'Go to Day 51 →' },
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

export default function Day050() {
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
          <Link to="/day-049" className="day001-nav-btn day001-nav-prev">← Day 49</Link>
          <p className="day001-datetime">TypeScript Day 50 · 19 Feb 2027</p>
          <Link to="/day-051" className="day001-nav-btn day001-nav-next">Day 51 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>System Design</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 50 <span aria-hidden="true">📮</span></h1>
              <p className="day001-day-theme">SYSTEM DESIGN — QUEUES &amp; ASYNC</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '50%' }} /></div>

        <p className="day001-summary">
          Halfway through the System Design stretch. <strong>Message queues</strong> decouple producers from consumers
          — drop a job (email, image resize, report) on a queue and return fast while a <strong>worker</strong>{' '}
          handles it. The queue <strong>absorbs spikes</strong> (buffer + backpressure; scale consumers on depth).{' '}
          <strong>Kafka</strong> is a replayable streaming log for events/analytics; <strong>RabbitMQ</strong> is a
          classic task broker. Since delivery is usually <strong>at-least-once</strong>, make consumers{' '}
          <strong>idempotent</strong> (dedupe by id), and route repeatedly-failing messages to a{' '}
          <strong>dead-letter queue</strong>. This is the heart of <strong>event-driven</strong> systems.{' '}
          <em>Next: CAP &amp; consistency.</em>
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

        <CardSection icon="📮" title="WHY QUEUES" cards={QUEUES} columns={2} />
        <CardSection icon="🗂️" title="BROKERS & DELIVERY" cards={BROKERS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#SystemDesign</span><span>#Kafka</span>
        </footer>
      </div>
    </div>
  );
}
