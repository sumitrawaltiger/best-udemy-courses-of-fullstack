import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day19';
const DOCS_URL = 'https://redis.io/docs/latest/develop/';

const LEARNT_TODAY = [
  {
    title: 'Cache',
    text: 'keep hot data in fast memory to skip the database',
  },
  {
    title: 'Redis',
    text: 'an in-memory key-value store — microsecond reads',
  },
  {
    title: 'Cache-aside',
    text: 'check cache first; on a miss, read DB then set it',
  },
  {
    title: 'TTL',
    text: 'expire keys automatically so data stays fresh',
  },
  {
    title: 'GET / SET',
    text: 'the two commands behind most caching',
  },
  {
    title: 'Serialize',
    text: 'JSON.stringify on the way in, parse on the way out',
  },
  {
    title: 'Invalidation',
    text: 'bust the cache when the underlying data changes',
  },
  {
    title: 'Sessions',
    text: 'store sessions in Redis so any instance can read them',
  },
  {
    title: 'Rate limiting',
    text: 'counters with EXPIRE make a simple limiter',
  },
  {
    title: 'The hard part',
    text: '"there are only two hard things… cache invalidation"',
  },
];

const CACHING = [
  {
    icon: '⚡',
    title: 'Why Cache',
    titleClass: 'card-title-cyan',
    subtitle: 'skip the DB',
    description: 'Repeated reads of the same data waste database time.',
    code: '// 200ms DB query, called 10k times/min\n// -> cache it: ~1ms from memory',
  },
  {
    icon: '🧠',
    title: 'Redis Basics',
    titleClass: 'card-title-green',
    subtitle: 'key-value store',
    description: 'Set and get string values by key; everything is in RAM.',
    code: 'await redis.set("user:42", JSON.stringify(user));\nconst raw = await redis.get("user:42");',
  },
  {
    icon: '🔁',
    title: 'Cache-Aside',
    titleClass: 'card-title-amber',
    subtitle: 'the pattern',
    description: 'Check cache → miss → read DB → set cache → return.',
    code: 'let data = await redis.get(key);\nif (!data) {\n  data = await Product.find();\n  await redis.set(key, JSON.stringify(data));\n}',
  },
];

const PRACTICE = [
  {
    icon: '⏳',
    title: 'TTL & Invalidation',
    titleClass: 'card-title-cyan',
    subtitle: 'stay fresh',
    description: 'Expire keys with a TTL, and delete them on writes.',
    code: 'await redis.set(key, val, "EX", 60); // 60s TTL\nawait redis.del("products");         // on create/update',
  },
  {
    icon: '🎫',
    title: 'Sessions',
    titleClass: 'card-title-green',
    subtitle: 'shared state',
    description: 'Store sessions in Redis so every server instance sees them.',
    code: 'app.use(session({\n  store: new RedisStore({ client: redis }),\n  secret: process.env.SESSION_SECRET,\n}));',
  },
  {
    icon: '🚦',
    title: 'Rate Limiting',
    titleClass: 'card-title-amber',
    subtitle: 'counters',
    description: 'INCR a per-IP key with an EXPIRE for a distributed limiter.',
    code: 'const n = await redis.incr(ip);\nif (n === 1) await redis.expire(ip, 60);\nif (n > 100) throw new Error("Too many requests");',
  },
  {
    icon: '📦',
    title: 'Serialize',
    titleClass: 'card-title-pink',
    subtitle: 'strings only',
    description: 'Redis stores strings — stringify objects going in, parse coming out.',
    code: 'await redis.set(key, JSON.stringify(obj));\nconst obj = JSON.parse(await redis.get(key));',
  },
];

const RESOURCES = [
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day19',
    description: 'Cache-aside with TTL, invalidation, Redis sessions, and a rate limiter.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Redis Docs',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'The Redis developer docs — data types, commands, and patterns.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Redis Caching in Node',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Redis Caching in Node.js by Traversy Media — supplement for Day 38.',
    link: {
      href: 'https://www.youtube.com/watch?v=oaJq1mQ3dFI',
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

export default function Day038() {
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
          <Link to="/day-037" className="day001-nav-btn day001-nav-home">
            ← Day 37
          </Link>
          <p className="day001-datetime">Thunder Day 38 · 30 Aug 2026</p>
          <Link to="/day-039" className="day001-nav-btn day001-nav-next">
            Day 39 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Redis</span>
              <span>Performance</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 38 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">CACHING WITH REDIS</p>
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
              <p className="day001-profile-role">NODE · THUNDER</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '38%' }} />
        </div>

        <p className="day001-summary">
          Day thirty-eight — hitting the database for the same data over and over is slow, so I put{' '}
          <strong>Redis</strong> in front of it. The <strong>cache-aside</strong> pattern checks
          memory first and falls back to the DB on a miss; a <strong>TTL</strong> keeps entries
          fresh and I <strong>invalidate</strong> on writes. Redis also backs{' '}
          <strong>sessions</strong> and a distributed <strong>rate limiter</strong> (INCR + EXPIRE).
          Just remember — cache invalidation is the hard part. Code in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day19 on GitHub
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

        <CardSection icon="⚡" title="CACHING" cards={CACHING} columns={3} />
        <CardSection icon="🛠️" title="IN PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="THUNDER BACKEND DAY 19" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#Redis</span>
          <span>#Caching</span>
          <span>#Backend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
