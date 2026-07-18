import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRIMER_URL = 'https://github.com/donnemartin/system-design-primer';
const DOCS_URL = 'https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing';

const LEARNT_TODAY = [
  {
    title: 'Distributed system',
    text: 'many nodes cooperating to look like one',
  },
  {
    title: 'Why distribute',
    text: 'scale, availability, and fault tolerance',
  },
  {
    title: 'The fallacies',
    text: 'the network is not reliable, fast, or free',
  },
  {
    title: 'Partitions',
    text: 'nodes lose contact and must cope',
  },
  {
    title: 'Replication',
    text: 'copies keep data available under failure',
  },
  {
    title: 'Consensus',
    text: 'nodes agree on a value — Raft / Paxos',
  },
  {
    title: 'Consistency models',
    text: 'strong vs eventual',
  },
  {
    title: 'No global clock',
    text: 'use logical clocks to order events',
  },
  {
    title: 'Idempotency',
    text: 'retries are inevitable — design for them',
  },
  {
    title: 'Failure is normal',
    text: 'assume nodes and links will fail',
  },
];

const BASICS = [
  {
    icon: '🌐',
    title: 'What & Why',
    titleClass: 'card-title-cyan',
    subtitle: 'one from many',
    description: 'Many machines act as one to scale and survive failures.',
    code: '// one big box → a ceiling + a single point of failure\n// many nodes → scale + redundancy',
  },
  {
    icon: '🕳️',
    title: 'The Fallacies',
    titleClass: 'card-title-green',
    subtitle: 'wrong assumptions',
    description: 'The network is unreliable, has latency, and can fail anytime.',
    code: '// NOT true: reliable · zero latency ·\n// infinite bandwidth · secure · one admin',
  },
  {
    icon: '💥',
    title: 'Failure is Normal',
    titleClass: 'card-title-amber',
    subtitle: 'plan for it',
    description: 'At scale, something is always down — design around it.',
    code: 'retries + timeouts + idempotency\nhealth checks + automatic failover',
  },
];

const PROBLEMS = [
  {
    icon: '🧬',
    title: 'Replication',
    titleClass: 'card-title-cyan',
    subtitle: 'copies',
    description: 'Multiple copies keep data available and reads fast.',
    code: 'primary + replicas\n// trade freshness (lag) for availability',
  },
  {
    icon: '🤝',
    title: 'Consensus',
    titleClass: 'card-title-green',
    subtitle: 'agree on truth',
    description: 'Nodes elect a leader and agree on an ordered log.',
    code: 'Raft / Paxos → one agreed value\n// leader election + replicated log',
  },
  {
    icon: '🎚️',
    title: 'Consistency Models',
    titleClass: 'card-title-amber',
    subtitle: 'strong vs eventual',
    description: 'Strong reads see the latest write; eventual converges later.',
    code: 'strong  : always the newest (slower)\neventual: converges soon (faster, cheaper)',
  },
  {
    icon: '⏰',
    title: 'Clocks & Ordering',
    titleClass: 'card-title-pink',
    subtitle: 'no global time',
    description: 'Wall clocks drift; logical clocks order events instead.',
    code: 'Lamport / vector clocks\n// "happened-before" without a global clock',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'System Design Primer',
    titleClass: 'card-title-purple',
    subtitle: 'GitHub reference',
    description: 'system-design-primer — the distributed-systems building blocks.',
    link: { href: PRIMER_URL, label: 'Open on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'The 8 Fallacies',
    titleClass: 'card-title-green',
    subtitle: 'Reference',
    description: 'The fallacies of distributed computing — assumptions that bite everyone.',
    link: { href: DOCS_URL, label: 'Open the page →', external: true },
  },
  {
    icon: '▶️',
    title: 'Distributed Systems',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Distributed Systems Explained | System Design by ByteMonk — for Day 55.',
    link: {
      href: 'https://www.youtube.com/watch?v=IJWwfMyPu1c',
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

export default function Day055() {
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
          <Link to="/day-054" className="day001-nav-btn day001-nav-home">
            ← Day 54
          </Link>
          <p className="day001-datetime">Thunder Day 55 · 16 Sep 2026</p>
          <Link to="/day-056" className="day001-nav-btn day001-nav-next">
            Day 56 →
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
                DAY 55 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">DISTRIBUTED SYSTEMS BASICS</p>
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
          <div className="day001-progress-bar" style={{ width: '55%' }} />
        </div>

        <p className="day001-summary">
          Day fifty-five — the theory under every design so far. A <strong>distributed system</strong>{' '}
          makes many nodes act as one for scale and availability — but the network is unreliable (the{' '}
          <strong>fallacies</strong>) and <strong>failure is normal</strong>. The core problems are{' '}
          <strong>replication</strong>, <strong>consensus</strong> (Raft/Paxos), <strong>consistency
          models</strong> (strong vs eventual), and <strong>ordering without a global clock</strong>{' '}
          (logical clocks). This sets up tomorrow’s <strong>CAP theorem</strong>. Reference:{' '}
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

        <CardSection icon="🌐" title="THE BASICS" cards={BASICS} columns={3} />
        <CardSection icon="🧠" title="CORE PROBLEMS" cards={PROBLEMS} columns={4} />
        <CardSection icon="📚" title="SYSTEM DESIGN RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#SystemDesign</span>
          <span>#DistributedSystems</span>
          <span>#Consensus</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
