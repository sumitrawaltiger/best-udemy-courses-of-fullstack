import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRIMER_URL = 'https://github.com/donnemartin/system-design-primer';
const DOCS_URL =
  'https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md';

const LEARNT_TODAY = [
  {
    title: 'Requirements',
    text: 'shorten a URL, redirect fast, optional analytics',
  },
  {
    title: 'Read-heavy',
    text: 'redirects vastly outnumber creations (100:1+)',
  },
  {
    title: 'API',
    text: 'POST /shorten and GET /:code',
  },
  {
    title: 'Short code',
    text: 'base62 of an id, or a hash of the URL',
  },
  {
    title: 'Key generation',
    text: 'a counter + base62, or a key-generation service',
  },
  {
    title: 'Storage',
    text: 'a key-value store: code → long URL',
  },
  {
    title: 'Redirect',
    text: '301 (permanent) or 302 (keeps analytics)',
  },
  {
    title: 'Caching',
    text: 'hot codes in Redis / a CDN',
  },
  {
    title: 'Collisions',
    text: 'retry or use a counter to avoid duplicate codes',
  },
  {
    title: 'Scale',
    text: 'shard by code, replicate reads, cache aggressively',
  },
];

const DESIGN = [
  {
    icon: '📋',
    title: 'Requirements & Scale',
    titleClass: 'card-title-cyan',
    subtitle: 'read-heavy',
    description: 'Shorten + redirect; estimate the read:write ratio and storage.',
    code: '100M writes/day → ~1.2K QPS\nreads ≈ 100× → ~120K QPS\n5 yr × 500B ≈ ~90 TB',
  },
  {
    icon: '🔌',
    title: 'The API',
    titleClass: 'card-title-green',
    subtitle: 'two endpoints',
    description: 'Create a short code, then redirect it to the long URL.',
    code: 'POST /shorten { url }  → { code }\nGET  /:code           → 302 Location: long',
  },
  {
    icon: '🔑',
    title: 'Short-Code Generation',
    titleClass: 'card-title-amber',
    subtitle: 'base62',
    description: 'Encode a unique id in base62, or hash and take a prefix.',
    code: 'id = counter++            // 1,000,000\ncode = base62(id)         // "4c92"\n// [0-9a-zA-Z] = 62^7 ≈ 3.5 trillion',
  },
  {
    icon: '🗄️',
    title: 'Storage',
    titleClass: 'card-title-pink',
    subtitle: 'key → value',
    description: 'A KV store maps the code to the original URL.',
    code: '{ code: "4c92", url: "https://...", clicks: 0 }\n// primary key = code',
  },
];

const SCALE = [
  {
    icon: '↪️',
    title: 'Redirect Flow',
    titleClass: 'card-title-cyan',
    subtitle: '301 vs 302',
    description: 'Look up the code and redirect — 302 lets you count clicks.',
    code: 'GET /4c92 → lookup → 302 → long URL\n// 301 is cached by browsers (no analytics)',
  },
  {
    icon: '⚡',
    title: 'Caching',
    titleClass: 'card-title-green',
    subtitle: 'hot codes',
    description: 'A small set of links get most traffic — cache them.',
    code: 'redis.get(code) || db.get(code)\n// 90%+ hit ratio on popular links',
  },
  {
    icon: '📈',
    title: 'Scale Out',
    titleClass: 'card-title-amber',
    subtitle: 'shard + replicate',
    description: 'Shard by code, add read replicas, and lean on the cache.',
    code: 'shard: hash(code) % N\nreplicas for reads · cache in front',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'System Design Primer',
    titleClass: 'card-title-purple',
    subtitle: 'GitHub reference',
    description: 'The primer’s worked solutions — a great template for this HLD.',
    link: { href: PRIMER_URL, label: 'Open on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Pastebin Design',
    titleClass: 'card-title-green',
    subtitle: 'Worked solution',
    description: 'A step-by-step primer solution that mirrors the URL-shortener design.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'URL Shortener Design',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'How Does a URL Shortener Work? by ByteByteGo — supplement for Day 49.',
    link: {
      href: 'https://www.youtube.com/watch?v=HHUi8F_qAXM',
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

export default function Day049() {
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
          <Link to="/day-048" className="day001-nav-btn day001-nav-home">
            ← Day 48
          </Link>
          <p className="day001-datetime">Thunder Day 49 · 22 Aug 2026</p>
          <Link to="/day-050" className="day001-nav-btn day001-nav-next">
            Day 50 →
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
                DAY 49 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">DESIGN A URL SHORTENER</p>
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
          <div className="day001-progress-bar" style={{ width: '49%' }} />
        </div>

        <p className="day001-summary">
          Day forty-nine — first HLD case study: a <strong>URL shortener</strong>. It is{' '}
          <strong>read-heavy</strong>, so I nailed the <strong>requirements</strong> and estimates,
          designed a two-endpoint <strong>API</strong>, and generated short codes with{' '}
          <strong>base62</strong> over a unique id (billions of combinations, no collisions). A{' '}
          <strong>key-value store</strong> maps code → URL, redirects use <strong>302</strong> for
          analytics, and <strong>caching</strong> plus <strong>sharding + replication</strong> carry
          the read load. Reference:{' '}
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

        <CardSection icon="🧩" title="THE DESIGN" cards={DESIGN} columns={4} />
        <CardSection icon="📈" title="GOING BIG" cards={SCALE} columns={3} />
        <CardSection icon="📚" title="SYSTEM DESIGN RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#SystemDesign</span>
          <span>#HLD</span>
          <span>#URLShortener</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
