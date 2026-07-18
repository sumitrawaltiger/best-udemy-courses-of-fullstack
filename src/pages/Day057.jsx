import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRIMER_URL =
  'https://github.com/donnemartin/system-design-primer#availability-patterns';
const DOCS_URL =
  'https://github.com/donnemartin/system-design-primer#consistency-patterns';

const LEARNT_TODAY = [
  {
    title: 'Strong consistency',
    text: 'every read returns the latest write',
  },
  {
    title: 'Eventual consistency',
    text: 'replicas converge to the same value over time',
  },
  {
    title: 'Read-your-writes',
    text: 'you always see your own updates',
  },
  {
    title: 'Monotonic reads',
    text: 'reads never go backwards in time',
  },
  {
    title: 'Quorum',
    text: 'R + W > N gives read-after-write consistency',
  },
  {
    title: 'Sync vs async replication',
    text: 'wait for replicas, or fire-and-forget',
  },
  {
    title: 'Failover',
    text: 'promote a replica when the primary dies',
  },
  {
    title: 'Active-active vs passive',
    text: 'both serve, or one waits as backup',
  },
  {
    title: 'Conflict resolution',
    text: 'last-write-wins, vector clocks, or CRDTs',
  },
  {
    title: 'Pick per use case',
    text: 'money → strong; feed → eventual',
  },
];

const CONSISTENCY = [
  {
    icon: '🎯',
    title: 'Strong vs Eventual',
    titleClass: 'card-title-cyan',
    subtitle: 'the spectrum',
    description: 'Strong always shows the newest write; eventual catches up.',
    code: 'strong  : slower, always correct\neventual: faster, briefly stale',
  },
  {
    icon: '👁️',
    title: 'Client Guarantees',
    titleClass: 'card-title-green',
    subtitle: 'session models',
    description: 'Read-your-writes and monotonic reads keep UX sane.',
    code: 'read-your-writes: see your own edits\nmonotonic reads : never see older data next',
  },
  {
    icon: '🗳️',
    title: 'Quorum',
    titleClass: 'card-title-amber',
    subtitle: 'R + W > N',
    description: 'Overlap read and write sets to guarantee freshness.',
    code: 'N=3, W=2, R=2 → R + W (4) > N (3)\n// a read always overlaps the last write',
  },
  {
    icon: '🔁',
    title: 'Replication',
    titleClass: 'card-title-pink',
    subtitle: 'sync vs async',
    description: 'Sync waits for replicas (safe); async is fast (may lose data).',
    code: 'sync : ack after replicas write (durable)\nasync: ack immediately (can lose recent)',
  },
];

const AVAILABILITY = [
  {
    icon: '🔀',
    title: 'Failover',
    titleClass: 'card-title-cyan',
    subtitle: 'survive failure',
    description: 'Detect a dead primary and promote a replica automatically.',
    code: 'primary down → elect + promote replica\n// mind split-brain (fencing)',
  },
  {
    icon: '🟰',
    title: 'Active-Active / Passive',
    titleClass: 'card-title-green',
    subtitle: 'topology',
    description: 'Both nodes serve, or one stands by to take over.',
    code: 'active-active : both serve (scale + risk conflicts)\nactive-passive: one serves, one waits',
  },
  {
    icon: '🧩',
    title: 'Conflict Resolution',
    titleClass: 'card-title-amber',
    subtitle: 'reconcile',
    description: 'Concurrent writes must be merged deterministically.',
    code: 'LWW           : last-write-wins (simple, lossy)\nvector clocks / CRDTs: merge without loss',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'System Design Primer',
    titleClass: 'card-title-purple',
    subtitle: 'GitHub reference',
    description: 'The availability patterns in system-design-primer — replication & failover.',
    link: { href: PRIMER_URL, label: 'Open on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Consistency Patterns',
    titleClass: 'card-title-green',
    subtitle: 'Primer section',
    description: 'The consistency patterns section — weak, eventual, and strong.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Strong vs Eventual',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Data Consistency — Strong vs Eventual Consistency — by Shiran Afergan — for Day 57.',
    link: {
      href: 'https://www.youtube.com/watch?v=WZqGS-wczaY',
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

export default function Day057() {
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
          <Link to="/day-056" className="day001-nav-btn day001-nav-home">
            ← Day 56
          </Link>
          <p className="day001-datetime">Thunder Day 57</p>
          <Link to="/day-058" className="day001-nav-btn day001-nav-next">
            Day 58 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>System Design</span>
              <span>Distributed</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 57 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">CONSISTENCY & AVAILABILITY PATTERNS</p>
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
          <div className="day001-progress-bar" style={{ width: '57%' }} />
        </div>

        <p className="day001-summary">
          Day fifty-seven — the patterns that implement the CAP choice.{' '}
          <strong>Consistency</strong> ranges from <strong>strong</strong> to{' '}
          <strong>eventual</strong>, with session guarantees like{' '}
          <strong>read-your-writes</strong> and <strong>monotonic reads</strong>, and{' '}
          <strong>quorums</strong> (R + W &gt; N) for freshness.{' '}
          <strong>Availability</strong> comes from <strong>replication</strong> (sync vs async),{' '}
          <strong>failover</strong>, <strong>active-active/passive</strong> topologies, and{' '}
          <strong>conflict resolution</strong> (LWW, vector clocks, CRDTs). Reference:{' '}
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

        <CardSection icon="🎯" title="CONSISTENCY" cards={CONSISTENCY} columns={4} />
        <CardSection icon="🟢" title="AVAILABILITY" cards={AVAILABILITY} columns={3} />
        <CardSection icon="📚" title="SYSTEM DESIGN RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#SystemDesign</span>
          <span>#Consistency</span>
          <span>#Availability</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
