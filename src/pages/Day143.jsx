import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const REDIS = 'https://redis.io/docs/latest/';
const IOREDIS = 'https://github.com/redis/ioredis#readme';
const CACHING = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching';

const LEARNT_TODAY = [
  { title: 'Why cache', text: 'hot reads (profiles, feed pages) hit Redis instead of the database every time' },
  { title: 'Redis', text: 'in-memory key/value store — fast gets/sets with optional TTL' },
  { title: 'Cache-aside', text: 'read cache → miss → query DB → set cache → return' },
  { title: 'TTL', text: 'expire keys (e.g. 60s) so stale data dies even if you forget to invalidate' },
  { title: 'Invalidation', text: 'on write, delete or update the keys that would be wrong' },
  { title: 'Key design', text: 'names like task:list:user:42:page:1 — predictable and unique' },
  { title: 'ioredis / node-redis', text: 'Node clients for Redis; share REDIS_URL with BullMQ if you use both' },
  { title: 'Don’t cache secrets', text: 'tokens and PII need care — short TTL or don’t cache at all' },
  { title: 'Measure first', text: 'cache the endpoints your metrics show are slow or hot' },
];

const CORE = [
  {
    icon: '🔴', title: 'Connect Redis', titleClass: 'card-title-cyan', subtitle: 'Client',
    description: 'One shared client for the app. Fail soft if Redis is down — fall back to the DB rather than 500 everything.',
    code: 'import Redis from "ioredis";\nexport const redis = new Redis(process.env.REDIS_URL);',
  },
  {
    icon: '📥', title: 'Cache-Aside Read', titleClass: 'card-title-purple', subtitle: 'Get → Miss → Set',
    description: 'Try GET. On miss, load from DB, SET with EX (TTL), return. Hits skip the database.',
    code: 'const key = `task:${id}`;\nconst cached = await redis.get(key);\nif (cached) return res.json(JSON.parse(cached));\nconst task = await db.tasks.findById(id);\nawait redis.set(key, JSON.stringify(task), "EX", 60);\nres.json(task);',
  },
  {
    icon: '🧹', title: 'Invalidate On Write', titleClass: 'card-title-amber', subtitle: 'Stay Correct',
    description: 'After update/delete, DEL the item key and related list keys so the next read is fresh.',
    code: 'await db.tasks.update(id, data);\nawait redis.del(`task:${id}`);\nawait redis.del(`task:list:user:${userId}:page:1`);',
  },
];

const PRACTICE = [
  {
    icon: '⏱️', title: 'TTL Defaults', titleClass: 'card-title-cyan', subtitle: 'Safety Net',
    description: 'Short TTLs (30–300s) for volatile data. Longer for rare-changing config. Always prefer wrong-short over forever-stale.',
    code: 'await redis.set(key, value, "EX", 120); // 2 minutes',
  },
  {
    icon: '🏷️', title: 'Key Naming', titleClass: 'card-title-purple', subtitle: 'Convention',
    description: 'entity:id and list keys that include filters/page. Consistent names make invalidation possible.',
    code: '// task:42\n// task:list:user:7:page:1:limit:20',
  },
  {
    icon: '🛡️', title: 'Stampede Soften', titleClass: 'card-title-amber', subtitle: 'Optional',
    description: 'When a hot key expires, many requests miss together. Soft TTL / locking patterns help later — start simple.',
    code: '// start: TTL + invalidate\n'// later: singleflight / lock on miss',
  },
  {
    icon: '🔜', title: 'Next: Logging', titleClass: 'card-title-lime', subtitle: 'Day 144 Preview',
    description: 'Tomorrow: structured logs, request IDs, and basic monitoring so production is not a black box.',
    link: { href: '/day-144', label: 'Go to Day 144 →' },
  },
];

const RESOURCES = [
  {
    icon: '🔴', title: 'Redis Docs', titleClass: 'card-title-cyan', subtitle: 'Official',
    description: 'Commands, data types, and persistence options.',
    link: { href: REDIS, label: 'Read Redis docs →', external: true },
  },
  {
    icon: '📦', title: 'ioredis', titleClass: 'card-title-purple', subtitle: 'Client',
    description: 'Popular Redis client for Node with pipelines and clusters.',
    link: { href: IOREDIS, label: 'Read ioredis docs →', external: true },
  },
  {
    icon: '🌐', title: 'HTTP Caching', titleClass: 'card-title-amber', subtitle: 'MDN',
    description: 'Browser/CDN caching concepts that pair with server-side Redis caches.',
    link: { href: CACHING, label: 'Read caching guide →', external: true },
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

export default function Day143() {
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
          <Link to="/day-142" className="day001-nav-btn day001-nav-prev">← Day 142</Link>
          <p className="day001-datetime">Express Day 143 · 23 May 2027</p>
          <Link to="/day-144" className="day001-nav-btn day001-nav-next">Day 144 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>Redis</span><span>Cache</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 143 <span aria-hidden="true">🔴</span></h1>
              <p className="day001-day-theme">CACHING WITH REDIS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">EXPRESS · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '39%' }} /></div>

        <p className="day001-summary">
          Day 143 speeds hot reads. <strong>Redis</strong> cache-aside: <strong>GET</strong> → miss →
          DB → <strong>SET with TTL</strong>, then <strong>invalidate</strong> on writes. Faster APIs
          without serving forever-stale data.
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

        <CardSection icon="🔴" title="1 · CACHE-ASIDE" cards={CORE} columns={3} />
        <CardSection icon="⏱️" title="2 · TTL & KEYS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Express</span><span>#Redis</span><span>#Caching</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
