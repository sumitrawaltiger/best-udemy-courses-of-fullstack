import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRIMER_URL = 'https://github.com/donnemartin/system-design-primer#cache';
const DOCS_URL = 'https://www.cloudflare.com/learning/cdn/what-is-a-cdn/';

const LEARNT_TODAY = [
  {
    title: 'Cache',
    text: 'keep hot data closer and faster than the source',
  },
  {
    title: 'Cache layers',
    text: 'browser, CDN, application, and database caches',
  },
  {
    title: 'Cache-aside',
    text: 'app checks cache; on a miss, read DB then set it',
  },
  {
    title: 'Write-through',
    text: 'write cache and DB together — always consistent',
  },
  {
    title: 'Write-back',
    text: 'write cache now, flush to DB later — fast but riskier',
  },
  {
    title: 'Eviction',
    text: 'LRU or LFU decides what to drop when full',
  },
  {
    title: 'TTL',
    text: 'expire entries so stale data does not linger',
  },
  {
    title: 'CDN',
    text: 'edge servers serve assets from near the user',
  },
  {
    title: 'Invalidation',
    text: 'busting the cache correctly is the hard problem',
  },
  {
    title: 'Hit ratio',
    text: 'the metric that tells you the cache is working',
  },
];

const CACHING = [
  {
    icon: '🗺️',
    title: 'Where to Cache',
    titleClass: 'card-title-cyan',
    subtitle: 'many layers',
    description: 'Caching happens at every layer between user and database.',
    code: 'browser → CDN → load balancer → app cache → DB\n// closer to the user = faster + cheaper',
  },
  {
    icon: '🔁',
    title: 'Read Strategy',
    titleClass: 'card-title-green',
    subtitle: 'cache-aside',
    description: 'Check the cache first; fall back to the DB on a miss.',
    code: 'let v = cache.get(key);\nif (!v) { v = db.query(); cache.set(key, v, ttl); }',
  },
  {
    icon: '✍️',
    title: 'Write Strategy',
    titleClass: 'card-title-amber',
    subtitle: 'through vs back',
    description: 'Write-through stays consistent; write-back is faster but can lose data.',
    code: 'write-through: cache + DB together\nwrite-back   : cache now, DB later (batch)',
  },
];

const CDN_POLICY = [
  {
    icon: '🌍',
    title: 'CDN Edge',
    titleClass: 'card-title-cyan',
    subtitle: 'near the user',
    description: 'Static assets are served from the nearest edge location.',
    code: '// user in Delhi hits the Mumbai edge\n// not the origin in us-east-1',
  },
  {
    icon: '🧹',
    title: 'Eviction',
    titleClass: 'card-title-green',
    subtitle: 'LRU / LFU',
    description: 'When the cache is full, drop the least useful entries.',
    code: 'LRU: evict least-recently-used\nLFU: evict least-frequently-used',
  },
  {
    icon: '⏳',
    title: 'TTL & Invalidation',
    titleClass: 'card-title-amber',
    subtitle: 'stay fresh',
    description: 'Expire with a TTL, and purge/version on updates.',
    code: 'Cache-Control: max-age=3600\n// or version the URL: /app.abc123.js',
  },
  {
    icon: '📊',
    title: 'Hit Ratio',
    titleClass: 'card-title-pink',
    subtitle: 'measure it',
    description: 'Hits / total requests — low ratio means the cache is not helping.',
    code: 'hitRatio = hits / (hits + misses)\n// aim high for hot, read-heavy data',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'System Design Primer',
    titleClass: 'card-title-purple',
    subtitle: 'GitHub reference',
    description: 'The caching section of system-design-primer — layers and strategies.',
    link: { href: PRIMER_URL, label: 'Open on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'What is a CDN?',
    titleClass: 'card-title-green',
    subtitle: 'Cloudflare docs',
    description: 'Cloudflare’s explainer on content delivery networks and edge caching.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'How CDN Works',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'How CDN Works | System Design by ByteMonk — supplement for Day 46.',
    link: {
      href: 'https://www.youtube.com/watch?v=bJ9NnLLMQ78',
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

export default function Day046() {
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
          <Link to="/day-045" className="day001-nav-btn day001-nav-home">
            ← Day 45
          </Link>
          <p className="day001-datetime">Thunder Day 46 · 19 Aug 2026</p>
          <Link to="/day-047" className="day001-nav-btn day001-nav-next">
            Day 47 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>System Design</span>
              <span>Performance</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 46 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">CACHING & CDNs</p>
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
          <div className="day001-progress-bar" style={{ width: '46%' }} />
        </div>

        <p className="day001-summary">
          Day forty-six — caching is the biggest performance lever in system design. It lives at
          every <strong>layer</strong> — browser, CDN, app, DB — and the strategy matters:{' '}
          <strong>cache-aside</strong> for reads, <strong>write-through</strong> or{' '}
          <strong>write-back</strong> for writes, with <strong>LRU/LFU eviction</strong> and{' '}
          <strong>TTLs</strong>. A <strong>CDN</strong> pushes static assets to the edge near users,
          and the eternal challenge is <strong>invalidation</strong> — measured by your{' '}
          <strong>hit ratio</strong>. Reference:{' '}
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

        <CardSection icon="⚡" title="CACHING STRATEGIES" cards={CACHING} columns={3} />
        <CardSection icon="🌍" title="CDN & POLICY" cards={CDN_POLICY} columns={4} />
        <CardSection icon="📚" title="SYSTEM DESIGN RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#SystemDesign</span>
          <span>#Caching</span>
          <span>#CDN</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
