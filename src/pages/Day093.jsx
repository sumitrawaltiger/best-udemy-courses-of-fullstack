import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GRPC_URL = 'https://grpc.io/docs/what-is-grpc/introduction/';
const YT_URL = 'https://www.youtube.com/watch?v=IFkDbsgn8yg';

const LEARNT_TODAY = [
  {
    title: 'Sync vs async',
    text: 'request/response vs fire-and-forget events — pick per use case',
  },
  {
    title: 'REST between services',
    text: 'simple HTTP APIs — easy to debug, chatty at scale',
  },
  {
    title: 'gRPC intro',
    text: 'Protobuf + HTTP/2 — typed contracts, streaming, low latency',
  },
  {
    title: 'Event bus',
    text: 'publish/subscribe — Kafka, RabbitMQ, SNS/SQS decouple services',
  },
  {
    title: 'Idempotency',
    text: 'retries are normal — make handlers safe to run twice',
  },
  {
    title: 'Contract first',
    text: 'OpenAPI / Proto files as the source of truth between teams',
  },
  {
    title: 'Timeouts & retries',
    text: 'always set deadlines; backoff on retry; avoid retry storms',
  },
  {
    title: 'Circuit breakers',
    text: 'fail fast when a dependency is down — protect the cascade',
  },
  {
    title: 'Service mesh intro',
    text: 'Istio / Linkerd — mTLS, traffic, and observability as a sidecar',
  },
  {
    title: 'When to choose what',
    text: 'sync for queries; async for side effects and fan-out',
  },
];

const COMM_STYLES = [
  {
    icon: '↔️',
    title: 'Sync vs Async',
    titleClass: 'card-title-cyan',
    subtitle: 'two modes',
    description: 'Caller waits (sync) vs publishes and moves on (async).',
    code: 'sync: REST / gRPC request-response\nasync: events on a bus / queue',
  },
  {
    icon: '🌐',
    title: 'REST Between Services',
    titleClass: 'card-title-green',
    subtitle: 'HTTP APIs',
    description: 'Familiar, cacheable, language-agnostic — watch latency hops.',
    code: 'GET /users/42\nPOST /orders  → 201 Created',
  },
  {
    icon: '📡',
    title: 'gRPC Intro',
    titleClass: 'card-title-amber',
    subtitle: 'Protobuf + HTTP/2',
    description: 'Strongly typed RPCs, streaming, and efficient binary payloads.',
    code: 'service UserService {\n  rpc GetUser (UserId) returns (User);\n}',
  },
  {
    icon: '🚌',
    title: 'Event Bus',
    titleClass: 'card-title-pink',
    subtitle: 'pub/sub',
    description: 'Decouple producers from consumers with Kafka or a queue.',
    code: 'OrderCreated → inventory, email, analytics\n// consumers scale independently',
  },
];

const RESILIENCE = [
  {
    icon: '⏱️',
    title: 'Timeouts & Retries',
    titleClass: 'card-title-cyan',
    subtitle: 'expect failure',
    description: 'Deadlines everywhere; exponential backoff; jitter.',
    code: 'timeout: 2s\nretry: 3x with backoff + jitter',
  },
  {
    icon: '🔌',
    title: 'Circuit Breakers',
    titleClass: 'card-title-green',
    subtitle: 'fail fast',
    description: 'Open the circuit when errors spike; give the dependency time.',
    code: 'closed → open (errors)\n→ half-open → closed',
  },
  {
    icon: '🕸️',
    title: 'Service Mesh Intro',
    titleClass: 'card-title-amber',
    subtitle: 'Istio / Linkerd',
    description: 'Sidecars handle mTLS, retries, and metrics without app code.',
    code: 'app ↔ sidecar ↔ mesh ↔ sidecar ↔ app\nmTLS · traffic · telemetry',
  },
];

const RESOURCES = [
  {
    icon: '📖',
    title: 'What is gRPC?',
    titleClass: 'card-title-purple',
    subtitle: 'grpc.io',
    description: 'Official intro to gRPC concepts and use cases.',
    link: { href: GRPC_URL, label: 'Open gRPC docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Communication Styles',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'All Microservices Communication Styles in 6 Minutes — Day 93.',
    link: { href: YT_URL, label: 'Watch on YouTube →', external: true },
  },
  {
    icon: '📚',
    title: 'Lesson Page',
    titleClass: 'card-title-green',
    subtitle: 'full chapter',
    description: 'Open the Day 93 lesson for sections, quiz, and try-it snippets.',
    link: {
      href: '/learn/microservices-communication',
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

export default function Day093() {
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
          <Link to="/day-092" className="day001-nav-btn day001-nav-home">
            ← Day 92
          </Link>
          <p className="day001-datetime">Thunder Day 93</p>
          <Link to="/day-094" className="day001-nav-btn day001-nav-next">
            Day 94 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Microservices</span>
              <span>Architecture</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 93 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">MICROSERVICES COMMUNICATION</p>
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
              <p className="day001-profile-role">ARCHITECTURE</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '93%' }} />
        </div>

        <p className="day001-summary">
          Day ninety-three — how services talk: <strong>sync vs async</strong>,{' '}
          <strong>REST</strong>, <strong>gRPC</strong>, and an <strong>event bus</strong>. Add
          timeouts, retries, circuit breakers, and a peek at the <strong>service mesh</strong>.
          Reference:{' '}
          <a href={GRPC_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            What is gRPC?
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

        <CardSection icon="📡" title="COMMUNICATION STYLES" cards={COMM_STYLES} columns={4} />
        <CardSection icon="🛡️" title="RESILIENCE" cards={RESILIENCE} columns={3} />
        <CardSection icon="📚" title="MICROSERVICES RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#Microservices</span>
          <span>#gRPC</span>
          <span>#EventDriven</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
