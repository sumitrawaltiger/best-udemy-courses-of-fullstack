import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRIMER_URL =
  'https://github.com/donnemartin/system-design-primer#database';
const DOCS_URL = 'https://www.mongodb.com/docs/manual/sharding/';

const LEARNT_TODAY = [
  {
    title: 'Vertical vs horizontal',
    text: 'a bigger machine vs more machines',
  },
  {
    title: 'Replication',
    text: 'keep copies of the data for reads and failover',
  },
  {
    title: 'Primary / replica',
    text: 'writes go to the primary, reads can hit replicas',
  },
  {
    title: 'Read replicas',
    text: 'scale read-heavy workloads by adding copies',
  },
  {
    title: 'Failover',
    text: 'a replica is promoted if the primary dies',
  },
  {
    title: 'Sharding',
    text: 'split one dataset across many nodes',
  },
  {
    title: 'Shard key',
    text: 'the field that decides which shard a row lives on',
  },
  {
    title: 'Range vs hash',
    text: 'partition by ranges or by a hash of the key',
  },
  {
    title: 'Cross-shard pain',
    text: 'queries spanning shards are slow and complex',
  },
  {
    title: 'Index first',
    text: 'the cheapest scaling win is a good index',
  },
];

const REPLICATION = [
  {
    icon: '📏',
    title: 'Vertical vs Horizontal',
    titleClass: 'card-title-cyan',
    subtitle: 'up or out',
    description: 'Scale up (bigger box) hits a ceiling; scale out adds nodes.',
    code: '// vertical: 8 → 64 CPUs (limited, pricey)\n// horizontal: 1 → N machines (the real path)',
  },
  {
    icon: '🧬',
    title: 'Replication',
    titleClass: 'card-title-green',
    subtitle: 'copies',
    description: 'Writes hit the primary and replicate to secondaries.',
    code: 'primary  ──writes──►  [ primary ]\n                       │ replicate\nreplicas ◄──reads───  [ r1 ][ r2 ]',
  },
  {
    icon: '📖',
    title: 'Read Replicas',
    titleClass: 'card-title-amber',
    subtitle: 'scale reads',
    description: 'Serve heavy read traffic from replicas; mind replica lag.',
    code: '// route reads to replicas\n// eventual consistency: replicas lag slightly',
  },
];

const SHARDING = [
  {
    icon: '🍰',
    title: 'Sharding',
    titleClass: 'card-title-cyan',
    subtitle: 'split the data',
    description: 'When one node can’t hold it all, partition across many.',
    code: 'users A–H → shard 1\nusers I–P → shard 2\nusers Q–Z → shard 3',
  },
  {
    icon: '🗝️',
    title: 'Shard Key',
    titleClass: 'card-title-green',
    subtitle: 'choose well',
    description: 'A good key spreads load evenly and avoids hot shards.',
    code: '// bad: createdAt (all new writes on one shard)\n// good: hashed userId (even spread)',
  },
  {
    icon: '🔀',
    title: 'Range vs Hash',
    titleClass: 'card-title-amber',
    subtitle: 'partitioning',
    description: 'Range keeps order but risks hotspots; hash spreads evenly.',
    code: 'range: good for range queries, uneven load\nhash : even load, no range scans',
  },
  {
    icon: '⚖️',
    title: 'Trade-offs & CAP',
    titleClass: 'card-title-pink',
    subtitle: 'the cost',
    description: 'Cross-shard joins are hard; partitions force C-vs-A choices.',
    code: '// CAP: under a partition, pick\n// Consistency OR Availability',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'System Design Primer',
    titleClass: 'card-title-purple',
    subtitle: 'GitHub reference',
    description: 'The database section of system-design-primer — replication & sharding.',
    link: { href: PRIMER_URL, label: 'Open on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'MongoDB Sharding',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'MongoDB’s sharding docs — shard keys, chunks, and balancing.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Sharding & Partitioning',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'The Basics of Database Sharding & Partitioning by Exponent — for Day 44.',
    link: {
      href: 'https://www.youtube.com/watch?v=be6PLMKKSto',
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

export default function Day044() {
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
          <Link to="/day-043" className="day001-nav-btn day001-nav-home">
            ← Day 43
          </Link>
          <p className="day001-datetime">Thunder Day 44</p>
          <Link to="/day-045" className="day001-nav-btn day001-nav-next">
            Day 45 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>System Design</span>
              <span>Databases</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 44 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">DATABASE SCALING — REPLICATION & SHARDING</p>
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
          <div className="day001-progress-bar" style={{ width: '44%' }} />
        </div>

        <p className="day001-summary">
          Day forty-four — the database is usually the first thing to buckle. After indexing, I
          scale it two ways. <strong>Replication</strong> keeps copies: writes hit the{' '}
          <strong>primary</strong>, reads spread across <strong>replicas</strong>, and one is
          promoted on <strong>failover</strong>. <strong>Sharding</strong> splits the data across
          nodes by a <strong>shard key</strong> (range or hash) — great for scale, but cross-shard
          queries are hard and <strong>CAP</strong> forces consistency-vs-availability choices.
          Reference:{' '}
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

        <CardSection icon="🧬" title="REPLICATION" cards={REPLICATION} columns={3} />
        <CardSection icon="🍰" title="SHARDING" cards={SHARDING} columns={4} />
        <CardSection icon="📚" title="SYSTEM DESIGN RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#SystemDesign</span>
          <span>#Sharding</span>
          <span>#Databases</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
