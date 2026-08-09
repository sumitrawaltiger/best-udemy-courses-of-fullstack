import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const REDIS_DOCS = 'https://redis.io/docs/latest/develop/';
const CDN_MDN = 'https://developer.mozilla.org/en-US/docs/Glossary/CDN';

const LEARNT_TODAY = [
  { title: 'Caching = store the hot data', text: 'keep frequent results in fast memory to skip slow work' },
  { title: 'Cache-aside', text: 'app checks cache, on miss loads DB and fills cache — the default' },
  { title: 'Write-through / behind', text: 'write to cache + DB together, or async after' },
  { title: 'TTL & eviction', text: 'expire keys; when full, evict by LRU/LFU' },
  { title: 'Redis', text: 'in-memory store for caching, sessions, rate limits, queues' },
  { title: 'Invalidation is hard', text: 'stale data vs freshness — the classic trade-off' },
  { title: 'CDN', text: 'edge servers cache static assets close to users' },
  { title: 'Cache layers', text: 'browser → CDN → app cache → DB, each catching more' },
];

const STRATEGY = [
  {
    icon: '🗃️', title: 'Cache-Aside', titleClass: 'card-title-cyan', subtitle: 'The Default Pattern',
    description:
      'The app checks the cache first; on a miss it reads the database, returns the value, and writes it into the cache for next time. Simple, resilient, and the most common approach.',
    code: 'let user = await cache.get(`user:${id}`);\nif (!user) {\n  user = await db.user.findUnique({ where: { id } });\n  await cache.set(`user:${id}`, user, { EX: 300 }); // 5 min TTL\n}',
  },
  {
    icon: '✍️', title: 'Write Strategies', titleClass: 'card-title-purple', subtitle: 'Through vs Behind',
    description:
      'Write-through updates cache and DB together (consistent, slower writes). Write-behind updates the cache now and the DB asynchronously (fast, risk of loss). Choose by how much staleness you can tolerate.',
    code: '// write-through: set cache + write DB in one path\n// write-behind: set cache, queue the DB write (async)',
  },
];

const OPS = [
  {
    icon: '⏳', title: 'TTL & Eviction', titleClass: 'card-title-cyan', subtitle: 'Bounded Memory',
    description:
      'Give keys a TTL so stale data expires, and set an eviction policy for when memory fills — LRU (least recently used) or LFU (least frequently used) keep the hottest data.',
    code: '// Redis: maxmemory + maxmemory-policy allkeys-lru\n// per-key expiry: SET key val EX 300',
  },
  {
    icon: '🌐', title: 'CDN', titleClass: 'card-title-purple', subtitle: 'Cache At The Edge',
    description:
      'A CDN caches static assets (JS, CSS, images, video) on edge servers near users, cutting latency and origin load. Cache-Control headers and content hashing control freshness.',
    code: '// Cache-Control: public, max-age=31536000, immutable\n// hashed filenames (app.9f2a.js) → cache forever, bust on change',
  },
  {
    icon: '🧊', title: 'The Cache Layers', titleClass: 'card-title-amber', subtitle: 'Catch Early',
    description:
      'Requests pass through layers — browser cache → CDN → application cache (Redis) → database. Each catches what it can, so the database only sees the truly unique, un-cacheable requests.',
    footer: 'browser → CDN → Redis → DB (each absorbs load)',
  },
];

const RESOURCES = [
  {
    icon: '📗', title: 'Redis', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description:
      'The in-memory data store — strings, hashes, sorted sets, TTLs, pub/sub — used for caching, sessions, rate limiting and queues.',
    link: { href: REDIS_DOCS, label: 'Open Redis docs →', external: true },
  },
  {
    icon: '🌐', title: 'CDN (MDN)', titleClass: 'card-title-purple', subtitle: 'Concept',
    description:
      'What a content delivery network is and how edge caching, geographic distribution and cache headers reduce latency.',
    link: { href: CDN_MDN, label: 'Open the CDN glossary →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Load Balancing', titleClass: 'card-title-amber', subtitle: 'Day 49 Preview',
    description:
      'Tomorrow — spreading traffic: load balancer algorithms, health checks, stateless servers, and horizontal auto-scaling.',
    link: { href: '/day-049', label: 'Go to Day 49 →' },
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
          <Link to="/day-047" className="day001-nav-btn day001-nav-prev">← Day 47</Link>
          <p className="day001-datetime">TypeScript Day 48 · 24 Jul 2027</p>
          <Link to="/day-049" className="day001-nav-btn day001-nav-next">Day 49 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>System Design</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 48 <span aria-hidden="true">🗃️</span></h1>
              <p className="day001-day-theme">SYSTEM DESIGN — CACHING &amp; CDN</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '48%' }} /></div>

        <p className="day001-summary">
          Take load off the slow parts. <strong>Caching</strong> keeps hot data in fast memory. The default is{' '}
          <strong>cache-aside</strong> (check cache, on miss load DB and fill it); writes are{' '}
          <strong>write-through</strong> (consistent, slower) or <strong>write-behind</strong> (fast, riskier). Bound
          memory with a <strong>TTL</strong> and an eviction policy (<strong>LRU/LFU</strong>), using{' '}
          <strong>Redis</strong> for cache, sessions and rate limits. The hard part is{' '}
          <strong>invalidation</strong> — staleness vs freshness. Push static assets to a <strong>CDN</strong> at the
          edge with proper cache headers + hashed filenames. Layers stack: <em>browser → CDN → Redis → DB</em>, each
          absorbing load. <em>Next: load balancing &amp; scaling.</em>
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

        <CardSection icon="🗃️" title="CACHE STRATEGIES" cards={STRATEGY} columns={2} />
        <CardSection icon="🌐" title="EVICTION & EDGE" cards={OPS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#SystemDesign</span><span>#Caching</span>
        </footer>
      </div>
    </div>
  );
}
