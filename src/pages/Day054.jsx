import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRIMER_URL = 'https://github.com/donnemartin/system-design-primer#rate-limiter';
const DOCS_URL = 'https://redis.io/glossary/rate-limiting/';

const LEARNT_TODAY = [
  {
    title: 'Requirements',
    text: 'cap requests per user / IP / API key',
  },
  {
    title: 'Where to place it',
    text: 'at the client, the gateway, or the service',
  },
  {
    title: 'Algorithm',
    text: 'token bucket vs sliding window — now design it',
  },
  {
    title: 'Distributed counter',
    text: 'one shared count across many servers',
  },
  {
    title: 'Redis',
    text: 'atomic INCR + EXPIRE backs the counter',
  },
  {
    title: 'Sliding window log',
    text: 'precise but memory-heavy',
  },
  {
    title: 'Response',
    text: '429 + Retry-After + rate-limit headers',
  },
  {
    title: 'Local vs global',
    text: 'per-node speed vs centralized accuracy',
  },
  {
    title: 'Race conditions',
    text: 'atomic ops or a Lua script fix them',
  },
  {
    title: 'Trade-offs',
    text: 'accuracy vs memory vs latency',
  },
];

const DESIGN = [
  {
    icon: '📋',
    title: 'Requirements & Placement',
    titleClass: 'card-title-cyan',
    subtitle: 'where + what',
    description: 'Limit per key; usually at the gateway, in front of services.',
    code: 'key: userId / IP / apiKey\nplace: API gateway (central, before services)',
  },
  {
    icon: '🪣',
    title: 'Algorithm Choice',
    titleClass: 'card-title-green',
    subtitle: 'bucket / window',
    description: 'Token bucket allows bursts; sliding window is smooth.',
    code: 'token bucket : refill N/sec, spend on request\nsliding window: weighted count over last T',
  },
  {
    icon: '🧠',
    title: 'Distributed Counter',
    titleClass: 'card-title-amber',
    subtitle: 'Redis',
    description: 'A shared Redis counter keeps all nodes in agreement.',
    code: 'n = INCR key\nif (n === 1) EXPIRE key 60\nif (n > limit) reject',
  },
  {
    icon: '📤',
    title: 'The Response',
    titleClass: 'card-title-pink',
    subtitle: 'be helpful',
    description: 'Return 429 with headers so clients can back off.',
    code: 'HTTP 429 Too Many Requests\nRetry-After: 30\nX-RateLimit-Remaining: 0',
  },
];

const EDGE = [
  {
    icon: '🌐',
    title: 'Local vs Global',
    titleClass: 'card-title-cyan',
    subtitle: 'the trade',
    description: 'Per-node counters are fast but leaky; central is accurate.',
    code: 'local : fast, N× the real limit\nglobal: exact, one Redis round-trip',
  },
  {
    icon: '⚔️',
    title: 'Race Conditions',
    titleClass: 'card-title-green',
    subtitle: 'atomic',
    description: 'Read-then-write races overcount; keep it atomic.',
    code: '// use INCR (atomic) or a Lua script\n// not GET then SET',
  },
  {
    icon: '⚖️',
    title: 'Accuracy Trade-offs',
    titleClass: 'card-title-amber',
    subtitle: 'pick two',
    description: 'Precise logs cost memory; approximate windows are cheap.',
    code: 'sliding log   : exact, more memory\nfixed window  : cheap, edge bursts',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'System Design Primer',
    titleClass: 'card-title-purple',
    subtitle: 'GitHub reference',
    description: 'The rate-limiter notes in system-design-primer.',
    link: { href: PRIMER_URL, label: 'Open on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Redis Rate Limiting',
    titleClass: 'card-title-green',
    subtitle: 'Official glossary',
    description: 'Redis’ guide to implementing rate limiting with atomic counters.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Distributed Rate Limiter',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Design a Distributed Rate Limiter with an ex-Meta staff eng — Hello Interview.',
    link: {
      href: 'https://www.youtube.com/watch?v=MIJFyUPG4Z4',
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

export default function Day054() {
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
          <Link to="/day-053" className="day001-nav-btn day001-nav-home">
            ← Day 53
          </Link>
          <p className="day001-datetime">Thunder Day 54 · 27 Aug 2026</p>
          <Link to="/day-055" className="day001-nav-btn day001-nav-next">
            Day 55 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>System Design</span>
              <span>HLD Case Study</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 54 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">DESIGN A RATE LIMITER</p>
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
          <div className="day001-progress-bar" style={{ width: '54%' }} />
        </div>

        <p className="day001-summary">
          Day fifty-four — the interview classic: <strong>design a rate limiter</strong>. Cap
          requests per <strong>key</strong> (user/IP/API key), usually at the{' '}
          <strong>gateway</strong>, with a <strong>token bucket</strong> or{' '}
          <strong>sliding window</strong>. The trick is going <strong>distributed</strong> — a shared{' '}
          <strong>Redis</strong> counter (atomic <code>INCR</code> + <code>EXPIRE</code>) so every
          node agrees — returning <code>429</code> with <code>Retry-After</code>. Then the trade-offs:
          local vs global, race conditions, and accuracy vs memory. Reference:{' '}
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

        <CardSection icon="🚦" title="THE DESIGN" cards={DESIGN} columns={4} />
        <CardSection icon="🧩" title="EDGE CASES" cards={EDGE} columns={3} />
        <CardSection icon="📚" title="SYSTEM DESIGN RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#SystemDesign</span>
          <span>#HLD</span>
          <span>#RateLimiter</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
