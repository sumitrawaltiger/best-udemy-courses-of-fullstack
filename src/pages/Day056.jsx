import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRIMER_URL =
  'https://github.com/donnemartin/system-design-primer#consistency-patterns';
const DOCS_URL = 'https://en.wikipedia.org/wiki/CAP_theorem';

const LEARNT_TODAY = [
  {
    title: 'CAP',
    text: 'Consistency, Availability, Partition tolerance — pick two',
  },
  {
    title: 'Partitions happen',
    text: 'the network will split, so you really choose C vs A',
  },
  {
    title: 'CP systems',
    text: 'stay consistent, may reject requests during a partition',
  },
  {
    title: 'AP systems',
    text: 'stay available, may return stale data',
  },
  {
    title: 'Consistency (CAP)',
    text: 'every read sees the most recent write',
  },
  {
    title: 'Availability',
    text: 'every request gets a non-error response',
  },
  {
    title: 'No CA in reality',
    text: 'partition tolerance is mandatory at scale',
  },
  {
    title: 'PACELC',
    text: 'else (no partition), trade latency vs consistency',
  },
  {
    title: 'Examples',
    text: 'CP: HBase, Mongo; AP: Cassandra, Dynamo',
  },
  {
    title: 'Tunable',
    text: 'many databases let you choose per operation',
  },
];

const THEOREM = [
  {
    icon: '🔺',
    title: 'The CAP Triangle',
    titleClass: 'card-title-cyan',
    subtitle: 'pick two',
    description: 'A distributed store can guarantee at most two of the three.',
    code: '      Consistency\n         /\\\n        /  \\\n Availability — Partition tolerance',
  },
  {
    icon: '🌩️',
    title: 'Partitions Are Real',
    titleClass: 'card-title-green',
    subtitle: 'the catch',
    description: 'Networks fail, so P is a given — the real choice is C or A.',
    code: '// with a partition you must pick:\n// stay Consistent  OR  stay Available',
  },
  {
    icon: '⚖️',
    title: 'CP vs AP',
    titleClass: 'card-title-amber',
    subtitle: 'the decision',
    description: 'CP rejects to stay correct; AP answers, possibly stale.',
    code: 'CP: reject/wait → always correct (banking)\nAP: respond → maybe stale (feeds, carts)',
  },
];

const BEYOND = [
  {
    icon: '🎯',
    title: 'Consistency',
    titleClass: 'card-title-cyan',
    subtitle: 'latest write',
    description: 'Every node returns the newest value — or an error.',
    code: 'write X=2 → every read returns 2\n// no stale reads allowed',
  },
  {
    icon: '🟢',
    title: 'Availability',
    titleClass: 'card-title-green',
    subtitle: 'always answers',
    description: 'Every request gets a response, even if not the freshest.',
    code: 'read → always returns something\n// possibly an older value',
  },
  {
    icon: '🧮',
    title: 'PACELC',
    titleClass: 'card-title-amber',
    subtitle: 'the extension',
    description: 'On Partition: A vs C. Else: Latency vs Consistency.',
    code: 'if Partition: Availability vs Consistency\nElse:         Latency vs Consistency',
  },
  {
    icon: '🎛️',
    title: 'Tunable & Examples',
    titleClass: 'card-title-pink',
    subtitle: 'in the wild',
    description: 'Real databases sit on a spectrum and are often tunable.',
    code: 'CP: HBase, MongoDB (default)\nAP: Cassandra, DynamoDB (tunable N/R/W)',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'System Design Primer',
    titleClass: 'card-title-purple',
    subtitle: 'GitHub reference',
    description: 'The consistency & availability patterns in system-design-primer.',
    link: { href: PRIMER_URL, label: 'Open on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'CAP Theorem',
    titleClass: 'card-title-green',
    subtitle: 'Reference',
    description: 'The CAP theorem explained — the formal statement and consequences.',
    link: { href: DOCS_URL, label: 'Open the page →', external: true },
  },
  {
    icon: '▶️',
    title: 'Intro to CAP',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'A Friendly Intro to the CAP Theorem by Studying With Alex — for Day 56.',
    link: {
      href: 'https://www.youtube.com/watch?v=gkg-FAEXIkY',
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

export default function Day056() {
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
          <Link to="/day-055" className="day001-nav-btn day001-nav-home">
            ← Day 55
          </Link>
          <p className="day001-datetime">Thunder Day 56 · 10 Sep 2026</p>
          <Link to="/day-057" className="day001-nav-btn day001-nav-next">
            Day 57 →
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
                DAY 56 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">CAP THEOREM & CONSISTENCY</p>
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
          <div className="day001-progress-bar" style={{ width: '56%' }} />
        </div>

        <p className="day001-summary">
          Day fifty-six — the <strong>CAP theorem</strong>: a distributed store gives at most two of{' '}
          <strong>Consistency</strong>, <strong>Availability</strong>, and{' '}
          <strong>Partition tolerance</strong>. Since partitions are inevitable, the real choice is{' '}
          <strong>CP</strong> (reject to stay correct — banking) vs <strong>AP</strong> (answer,
          maybe stale — feeds, carts). <strong>PACELC</strong> extends it: when there’s no partition,
          you still trade <strong>latency vs consistency</strong> — and most databases are{' '}
          <strong>tunable</strong>. Reference:{' '}
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

        <CardSection icon="🔺" title="THE THEOREM" cards={THEOREM} columns={3} />
        <CardSection icon="🧠" title="BEYOND CAP" cards={BEYOND} columns={4} />
        <CardSection icon="📚" title="SYSTEM DESIGN RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#SystemDesign</span>
          <span>#CAP</span>
          <span>#Consistency</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
