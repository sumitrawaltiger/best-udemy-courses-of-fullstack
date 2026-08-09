import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const KAFKA = 'https://kafka.apache.org/intro';
const CONCEPTS = 'https://kafka.apache.org/documentation/#intro_concepts';
const JS = 'https://kafka.js.org/docs/getting-started';

const LEARNT_TODAY = [
  { title: 'What is Kafka', text: 'a distributed commit log — producers append events; consumers read at their own pace' },
  { title: 'Why streams', text: 'decouple services, buffer spikes, and replay history when a consumer was down' },
  { title: 'Topic', text: 'named stream of messages (orders, task.created) split into partitions' },
  { title: 'Partition', text: 'ordered shard of a topic — key hashing keeps related events together' },
  { title: 'Producer', text: 'writes records (key, value, headers) to a topic' },
  { title: 'Consumer group', text: 'share partitions across instances for parallel processing' },
  { title: 'Offset', text: 'position in a partition — commit after successful handling' },
  { title: 'Not a queue only', text: 'multiple consumer groups can independently read the same topic' },
  { title: 'Year-1 start', text: 'one topic, one producer from your API, one consumer service' },
];

const CORE = [
  {
    icon: '🪵', title: 'Log Mental Model', titleClass: 'card-title-cyan', subtitle: 'Append-Only',
    description: 'Events are appended. Consumers track offsets. You can rewind and reprocess.',
    code: 'topic: task.events\n[0] created\n[1] updated\n[2] completed  ← offset',
  },
  {
    icon: '📤', title: 'Produce', titleClass: 'card-title-purple', subtitle: 'From The API',
    description: 'After a successful DB commit, publish an event (or use outbox later).',
    code: 'await producer.send({\n  topic: "task.events",\n  messages: [{ key: task.id, value: JSON.stringify(task) }],\n});',
  },
  {
    icon: '📥', title: 'Consume', titleClass: 'card-title-amber', subtitle: 'Worker',
    description: 'A separate process in a consumer group reads and handles side effects.',
    code: 'consumer.subscribe({ topic: "task.events" });\nconsumer.run({\n  eachMessage: async ({ message }) => {\n    await handle(JSON.parse(message.value));\n  },\n});',
  },
];

const PRACTICE = [
  {
    icon: '🔑', title: 'Keys & Order', titleClass: 'card-title-cyan', subtitle: 'Partitions',
    description: 'Same key → same partition → order preserved for that entity.',
    code: '// key = userId or taskId\n'// ordered per key, not globally',
  },
  {
    icon: '📬', title: 'Vs BullMQ', titleClass: 'card-title-purple', subtitle: 'When Kafka',
    description: 'BullMQ/Redis jobs suit app-internal work. Kafka suits cross-service event streams and replay.',
    code: '// jobs inside one app → BullMQ\n'// many services · replay → Kafka',
  },
  {
    icon: '🧪', title: 'Local Dev', titleClass: 'card-title-amber', subtitle: 'Compose',
    description: 'Add a redpanda/kafka service to docker compose for local producers/consumers.',
    code: '// compose: redpanda or bitnami/kafka\n'// KAFKA_BROKERS=…',
  },
  {
    icon: '🔜', title: 'Next: Consumers', titleClass: 'card-title-lime', subtitle: 'Day 174 Preview',
    description: 'Tomorrow: consumer groups, retries, idempotent handlers, and dead-letter topics.',
    link: { href: '/day-174', label: 'Go to Day 174 →' },
  },
];

const RESOURCES = [
  {
    icon: '🪵', title: 'Kafka Intro', titleClass: 'card-title-cyan', subtitle: 'Official',
    description: 'What Kafka is and why it exists.',
    link: { href: KAFKA, label: 'Read Kafka intro →', external: true },
  },
  {
    icon: '📚', title: 'Concepts', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Topics, partitions, producers, consumers.',
    link: { href: CONCEPTS, label: 'Read Kafka concepts →', external: true },
  },
  {
    icon: '🟢', title: 'KafkaJS', titleClass: 'card-title-amber', subtitle: 'Node',
    description: 'Popular Kafka client for Node.js.',
    link: { href: JS, label: 'Read KafkaJS docs →', external: true },
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

export default function Day173() {
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
          <Link to="/day-172" className="day001-nav-btn day001-nav-prev">← Day 172</Link>
          <p className="day001-datetime">Data Day 173 · 26 Nov 2027</p>
          <Link to="/day-174" className="day001-nav-btn day001-nav-next">Day 174 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Kafka</span><span>Year 1</span><span>Streaming</span><span>Events</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 173 <span aria-hidden="true">🪵</span></h1>
              <p className="day001-day-theme">KAFKA FUNDAMENTALS</p>
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
          Day 173 opens event streams. Learn <strong>topics</strong>, <strong>partitions</strong>,{' '}
          <strong>producers</strong>, and <strong>consumers</strong> — and when Kafka beats an
          in-app job queue.
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

        <CardSection icon="🪵" title="1 · TOPICS & IO" cards={CORE} columns={3} />
        <CardSection icon="🔑" title="2 · KEYS & WHEN" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Kafka</span><span>#Streaming</span><span>#Events</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
