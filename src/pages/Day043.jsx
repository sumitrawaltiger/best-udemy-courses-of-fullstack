import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRIMER_URL =
  'https://github.com/donnemartin/system-design-primer#message-queues';
const DOCS_URL = 'https://www.rabbitmq.com/tutorials';

const LEARNT_TODAY = [
  {
    title: 'Sync vs async',
    text: 'don’t make the user wait for slow background work',
  },
  {
    title: 'Message queue',
    text: 'a buffer that sits between producer and consumer',
  },
  {
    title: 'Producer / consumer',
    text: 'one puts messages in, another takes them out',
  },
  {
    title: 'Pub / Sub',
    text: 'one event fans out to many subscribers',
  },
  {
    title: 'Decoupling',
    text: 'services talk through the queue, not directly',
  },
  {
    title: 'Acknowledgements',
    text: 'a message is redelivered until it is ack’d',
  },
  {
    title: 'Dead-letter queue',
    text: 'messages that keep failing go to a DLQ',
  },
  {
    title: 'Kafka',
    text: 'a high-throughput, durable event log/stream',
  },
  {
    title: 'RabbitMQ',
    text: 'flexible routing with per-message acknowledgement',
  },
  {
    title: 'Event-driven',
    text: 'services react to events instead of calling each other',
  },
];

const QUEUES = [
  {
    icon: '⏱️',
    title: 'Sync vs Async',
    titleClass: 'card-title-cyan',
    subtitle: 'don’t block',
    description: 'Return fast; push slow work (emails, thumbnails) to a queue.',
    code: '// sync: user waits 4s for the email to send\n// async: enqueue, respond now, send later',
  },
  {
    icon: '📥',
    title: 'Producer / Consumer',
    titleClass: 'card-title-green',
    subtitle: 'the buffer',
    description: 'Producers enqueue; consumers process at their own pace.',
    code: 'queue.send("email", { to, body });   // producer\nqueue.consume("email", handler);     // consumer',
  },
  {
    icon: '📡',
    title: 'Pub / Sub',
    titleClass: 'card-title-amber',
    subtitle: 'fan-out',
    description: 'One event, many independent subscribers react to it.',
    code: 'emit("order.placed")\n  → email service\n  → inventory service\n  → analytics service',
  },
];

const PRACTICE = [
  {
    icon: '🔗',
    title: 'Decoupling',
    titleClass: 'card-title-cyan',
    subtitle: 'loose coupling',
    description: 'A slow or down consumer never blocks the producer.',
    code: '// Orders emits an event and moves on\n// Email can be down; it catches up later',
  },
  {
    icon: '🔁',
    title: 'Reliability',
    titleClass: 'card-title-green',
    subtitle: 'ack + DLQ',
    description: 'Retry until acknowledged; park poison messages in a DLQ.',
    code: 'process(msg) -> ack()   // success\nprocess(msg) -> nack()  // retry / DLQ',
  },
  {
    icon: '🌊',
    title: 'Kafka vs RabbitMQ',
    titleClass: 'card-title-amber',
    subtitle: 'pick a tool',
    description: 'Kafka streams high-volume logs; RabbitMQ routes messages.',
    code: 'Kafka   : durable log, replay, huge throughput\nRabbitMQ: flexible routing, per-message ack',
  },
  {
    icon: '⚡',
    title: 'Event-Driven',
    titleClass: 'card-title-pink',
    subtitle: 'react, don’t call',
    description: 'Services publish and subscribe to events, not each other.',
    code: '// no direct service-to-service calls\n// everyone listens to the event stream',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'System Design Primer',
    titleClass: 'card-title-purple',
    subtitle: 'GitHub reference',
    description: 'The message-queues & async-processing sections of system-design-primer.',
    link: { href: PRIMER_URL, label: 'Open on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'RabbitMQ Tutorials',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'RabbitMQ’s hands-on tutorials — queues, pub/sub, routing, and acks.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Kafka vs RabbitMQ',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Kafka vs RabbitMQ — the best message queue explained — The Coding Gopher.',
    link: {
      href: 'https://www.youtube.com/watch?v=PQHf_IzmUXE',
      label: 'Watch on YouTube →',
      external: true,
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

export default function Day043() {
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
          <Link to="/day-042" className="day001-nav-btn day001-nav-home">
            ← Day 42
          </Link>
          <p className="day001-datetime">Thunder Day 43 · 4 Sep 2026</p>
          <Link to="/day-044" className="day001-nav-btn day001-nav-next">
            Day 44 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>System Design</span>
              <span>Async</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 43 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">MESSAGE QUEUES & EVENT-DRIVEN</p>
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
              <p className="day001-profile-role">SYSTEM DESIGN</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '43%' }} />
        </div>

        <p className="day001-summary">
          Day forty-three — not every task should block the response. A <strong>message queue</strong>{' '}
          buffers work between a <strong>producer</strong> and a <strong>consumer</strong>, so slow
          jobs run later and a down service never stalls the request. <strong>Pub/Sub</strong> fans
          one event out to many subscribers, <strong>acks</strong> and <strong>dead-letter
          queues</strong> make it reliable, and <strong>Kafka</strong>/<strong>RabbitMQ</strong> power{' '}
          <strong>event-driven</strong> systems where services react instead of calling. Reference:{' '}
          <a href={PRIMER_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            system-design-primer
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

        <CardSection icon="📨" title="QUEUES" cards={QUEUES} columns={3} />
        <CardSection icon="🛠️" title="IN PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="SYSTEM DESIGN RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#SystemDesign</span>
          <span>#MessageQueues</span>
          <span>#Kafka</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
