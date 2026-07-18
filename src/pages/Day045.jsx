import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRIMER_URL =
  'https://github.com/donnemartin/system-design-primer#rate-limiter';
const DOCS_URL =
  'https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker';

const LEARNT_TODAY = [
  {
    title: 'Rate limiting',
    text: 'protect a service from abuse and overload',
  },
  {
    title: 'Token bucket',
    text: 'allow short bursts up to a bucket capacity',
  },
  {
    title: 'Leaky bucket',
    text: 'smooth requests to a steady, constant rate',
  },
  {
    title: 'Fixed vs sliding window',
    text: 'two ways to count requests over time',
  },
  {
    title: '429',
    text: 'Too Many Requests — plus a Retry-After header',
  },
  {
    title: 'Timeouts',
    text: 'never wait forever on a slow dependency',
  },
  {
    title: 'Retries + backoff',
    text: 'retry transient failures with exponential backoff + jitter',
  },
  {
    title: 'Circuit breaker',
    text: 'stop calling a failing service to let it recover',
  },
  {
    title: 'Bulkhead',
    text: 'isolate failures so one pool can’t sink the rest',
  },
  {
    title: 'Graceful degradation',
    text: 'fail soft — serve a fallback, not an error',
  },
];

const RATE_LIMIT = [
  {
    icon: '🚦',
    title: 'Why Limit',
    titleClass: 'card-title-cyan',
    subtitle: 'protect + fair',
    description: 'Stop brute-force, scraping, and one client hogging capacity.',
    code: 'HTTP 429 Too Many Requests\nRetry-After: 30',
  },
  {
    icon: '🪣',
    title: 'Token / Leaky Bucket',
    titleClass: 'card-title-green',
    subtitle: 'the algorithms',
    description: 'Token bucket allows bursts; leaky bucket enforces a steady rate.',
    code: 'token : refill N/sec, spend 1 per request\nleaky : queue drains at a fixed rate',
  },
  {
    icon: '🪟',
    title: 'Window Counters',
    titleClass: 'card-title-amber',
    subtitle: 'fixed vs sliding',
    description: 'Count per fixed window, or a smoother sliding window.',
    code: 'fixed  : reset the counter every 60s\nsliding: weight the last 60s continuously',
  },
];

const RESILIENCY = [
  {
    icon: '⏲️',
    title: 'Timeouts',
    titleClass: 'card-title-cyan',
    subtitle: 'never hang',
    description: 'Cap how long you wait on any downstream call.',
    code: 'fetch(url, { signal: AbortSignal.timeout(3000) });',
  },
  {
    icon: '🔁',
    title: 'Retries + Backoff',
    titleClass: 'card-title-green',
    subtitle: 'politely',
    description: 'Retry transient errors with exponential backoff and jitter.',
    code: 'delay = base * 2 ** attempt + random()\n// retry 5xx / timeouts, not 4xx',
  },
  {
    icon: '🔌',
    title: 'Circuit Breaker',
    titleClass: 'card-title-amber',
    subtitle: 'stop the bleeding',
    description: 'After repeated failures, open the circuit and fail fast.',
    code: 'closed → (failures) → open → (cooldown) → half-open\n// half-open probes before closing again',
  },
  {
    icon: '🧱',
    title: 'Bulkhead & Degrade',
    titleClass: 'card-title-pink',
    subtitle: 'contain + soften',
    description: 'Isolate resource pools; serve a fallback when a part is down.',
    code: '// separate pools per dependency\n// recommendations down? show top-sellers',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'System Design Primer',
    titleClass: 'card-title-purple',
    subtitle: 'GitHub reference',
    description: 'The rate limiter & resiliency notes in system-design-primer.',
    link: { href: PRIMER_URL, label: 'Open on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Circuit Breaker Pattern',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'Microsoft’s cloud design pattern for the circuit breaker.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Rate Limiting Algorithms',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Five Rate Limiting Algorithms — key system-design concepts — by Hello Byte.',
    link: {
      href: 'https://www.youtube.com/watch?v=mQCJJqUfn9Y',
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

export default function Day045() {
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
          <Link to="/day-044" className="day001-nav-btn day001-nav-home">
            ← Day 44
          </Link>
          <p className="day001-datetime">Thunder Day 45 · 6 Sep 2026</p>
          <Link to="/day-046" className="day001-nav-btn day001-nav-next">
            Day 46 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>System Design</span>
              <span>Reliability</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 45 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">RATE LIMITING & RESILIENCY</p>
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
          <div className="day001-progress-bar" style={{ width: '45%' }} />
        </div>

        <p className="day001-summary">
          Day forty-five — systems fail; the goal is to fail well. <strong>Rate limiting</strong>{' '}
          (token/leaky bucket, window counters) shields a service and returns <code>429</code> with{' '}
          <code>Retry-After</code>. For <strong>resiliency</strong>, I cap every call with a{' '}
          <strong>timeout</strong>, <strong>retry</strong> transient errors with exponential
          backoff + jitter, wrap flaky dependencies in a <strong>circuit breaker</strong>, isolate
          pools with <strong>bulkheads</strong>, and <strong>degrade gracefully</strong> with
          fallbacks. Reference:{' '}
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

        <CardSection icon="🚦" title="RATE LIMITING" cards={RATE_LIMIT} columns={3} />
        <CardSection icon="🛡️" title="RESILIENCY" cards={RESILIENCY} columns={4} />
        <CardSection icon="📚" title="SYSTEM DESIGN RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#SystemDesign</span>
          <span>#Resiliency</span>
          <span>#RateLimiting</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
