import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRIMER_URL = 'https://microservices.io/patterns/apigateway.html';
const DOCS_URL = 'https://microservices.io/patterns/service-registry.html';

const LEARNT_TODAY = [
  {
    title: 'API Gateway',
    text: 'one entry point in front of many services',
  },
  {
    title: 'Routing',
    text: 'forward each request to the right service',
  },
  {
    title: 'Cross-cutting',
    text: 'auth, rate limiting and logging live at the edge',
  },
  {
    title: 'Aggregation',
    text: 'combine several service calls into one response',
  },
  {
    title: 'BFF',
    text: 'a backend-for-frontend tailored per client',
  },
  {
    title: 'Service discovery',
    text: 'find live service instances at runtime',
  },
  {
    title: 'Registry',
    text: 'services register themselves and their address',
  },
  {
    title: 'Client vs server',
    text: 'who looks the instance up — the client or a proxy',
  },
  {
    title: 'Health & LB',
    text: 'route only to healthy instances, spread the load',
  },
  {
    title: 'Decouple clients',
    text: 'clients never hardcode instance addresses',
  },
];

const GATEWAY = [
  {
    icon: '🚪',
    title: 'One Entry Point',
    titleClass: 'card-title-cyan',
    subtitle: 'the front door',
    description: 'Clients call the gateway; it fronts every internal service.',
    code: 'client → API Gateway → [Auth][Orders][Cart]\n// clients never talk to services directly',
  },
  {
    icon: '🧭',
    title: 'Routing',
    titleClass: 'card-title-green',
    subtitle: 'to the right one',
    description: 'Match the path/host and forward to the matching service.',
    code: '/auth/*   → auth-service\n/orders/* → order-service',
  },
  {
    icon: '🛡️',
    title: 'Cross-Cutting',
    titleClass: 'card-title-amber',
    subtitle: 'at the edge',
    description: 'Do auth, rate limiting, and logging once, centrally.',
    code: '// gateway checks the JWT, throttles,\n// and logs — services stay focused',
  },
  {
    icon: '🧩',
    title: 'Aggregation / BFF',
    titleClass: 'card-title-pink',
    subtitle: 'tailor responses',
    description: 'Combine calls, or run a BFF shaped for each client.',
    code: '/home → user + orders + recommendations\nBFF: web vs mobile get different shapes',
  },
];

const DISCOVERY = [
  {
    icon: '📇',
    title: 'Registry',
    titleClass: 'card-title-cyan',
    subtitle: 'who is alive',
    description: 'Instances register their address; consumers look them up.',
    code: 'order-service → registry: "I am at 10.0.3.7:8080"\n// Consul / Eureka / etcd',
  },
  {
    icon: '↔️',
    title: 'Client vs Server',
    titleClass: 'card-title-green',
    subtitle: 'who resolves',
    description: 'The client queries the registry, or a proxy does it.',
    code: 'client-side: app asks the registry, then calls\nserver-side: LB/proxy resolves for you',
  },
  {
    icon: '❤️',
    title: 'Health & Load',
    titleClass: 'card-title-amber',
    subtitle: 'route smart',
    description: 'Only healthy instances receive traffic, balanced across them.',
    code: '// deregister on failed health check\n// spread requests across live instances',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'API Gateway Pattern',
    titleClass: 'card-title-purple',
    subtitle: 'microservices.io',
    description: 'The API gateway pattern — routing, aggregation, and cross-cutting concerns.',
    link: { href: PRIMER_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '📗',
    title: 'Service Registry',
    titleClass: 'card-title-green',
    subtitle: 'Pattern docs',
    description: 'The service registry & discovery patterns from microservices.io.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'What is API Gateway?',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'What is API Gateway? by ByteByteGo — supplement for Day 48.',
    link: {
      href: 'https://www.youtube.com/watch?v=6ULyxuHKxg8',
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

export default function Day048() {
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
    <>
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/day-047" className="day001-nav-btn day001-nav-home">
            ← Day 47
          </Link>
          <p className="day001-datetime">Thunder Day 48 · 2 Sep 2026</p>
          <Link to="/day-049" className="day001-nav-btn day001-nav-next">
            Day 49 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>System Design</span>
              <span>Microservices</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 48 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">API GATEWAY & SERVICE DISCOVERY</p>
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
          <div className="day001-progress-bar" style={{ width: '48%' }} />
        </div>

        <p className="day001-summary">
          Day forty-eight — with many services, clients need one front door. An{' '}
          <strong>API Gateway</strong> handles <strong>routing</strong>, centralizes{' '}
          <strong>cross-cutting</strong> concerns (auth, rate limiting, logging), and can{' '}
          <strong>aggregate</strong> calls or run a <strong>BFF</strong> per client. Behind it,{' '}
          <strong>service discovery</strong> tracks live instances in a <strong>registry</strong> —
          resolved client- or server-side — so traffic only reaches <strong>healthy</strong>{' '}
          instances and clients never hardcode addresses. Reference:{' '}
          <a href={PRIMER_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            microservices.io
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

        <CardSection icon="🚪" title="API GATEWAY" cards={GATEWAY} columns={4} />
        <CardSection icon="📇" title="SERVICE DISCOVERY" cards={DISCOVERY} columns={3} />
        <CardSection icon="📚" title="SYSTEM DESIGN RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#SystemDesign</span>
          <span>#APIGateway</span>
          <span>#Microservices</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
      <section
        style={{
          background: '#0d1117',
          padding: '8px 16px 56px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <figure style={{ maxWidth: '860px', width: '100%', margin: 0 }}>
          <h2
            style={{
              color: '#e6edf3',
              fontSize: '1.05rem',
              fontWeight: 700,
              margin: '0 0 12px',
              textAlign: 'center',
            }}
          >
            <span aria-hidden="true">📌</span> Day 48 Reference — Securing APIs with Rate Limiting &amp;
            Throttling
          </h2>
          <a
            href="/thunder-notes/day48-rate-limiting.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/thunder-notes/day48-rate-limiting.jpg"
              alt="Securing APIs with Rate Limiting and Request Throttling — why it matters, key concepts (rate limiting, throttling, quota, window), how it works (client to API gateway/middleware rate limiter to allow/block/delay), common algorithms (fixed window, sliding window log, sliding window counter, token bucket, leaky bucket), rate-limit headers, example 429 responses, implementations in Node.js express-rate-limit, Python FastAPI slowapi, and Redis sliding window, where to store counters, example limits by endpoint, common pitfalls, monitoring, and a security checklist"
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '14px',
                border: '1px solid #2a3441',
              }}
            />
          </a>
          <figcaption
            style={{
              color: '#8fb6c2',
              fontSize: '0.82rem',
              textAlign: 'center',
              marginTop: '10px',
            }}
          >
            Rate limiting &amp; throttling — algorithms, headers, Node/Python/Redis implementations,
            and best practices. Click to open full size.
          </figcaption>
        </figure>
      </section>
    </>
  );
}
