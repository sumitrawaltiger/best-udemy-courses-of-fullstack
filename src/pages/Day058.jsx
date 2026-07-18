import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRIMER_URL =
  'https://github.com/donnemartin/system-design-primer#how-to-approach-a-system-design-interview-question';
const DOCS_URL = 'https://github.com/donnemartin/system-design-primer';

const LEARNT_TODAY = [
  {
    title: 'Clarify first',
    text: 'nail functional + non-functional requirements',
  },
  {
    title: 'Estimate',
    text: 'rough QPS, storage, and bandwidth',
  },
  {
    title: 'Define the API',
    text: 'endpoints, inputs, and outputs',
  },
  {
    title: 'High-level design',
    text: 'boxes and arrows: the major components',
  },
  {
    title: 'Data model',
    text: 'schema and the right storage choice',
  },
  {
    title: 'Deep dive',
    text: 'go deep where the interviewer steers',
  },
  {
    title: 'Scale it',
    text: 'cache, load balance, shard, replicate',
  },
  {
    title: 'Bottlenecks',
    text: 'name the constraint and how you’d fix it',
  },
  {
    title: 'Trade-offs',
    text: 'every choice has a cost — say it out loud',
  },
  {
    title: 'Communicate',
    text: 'think out loud; it’s a conversation',
  },
];

const FRAMEWORK = [
  {
    icon: '❓',
    title: 'Requirements',
    titleClass: 'card-title-cyan',
    subtitle: 'clarify',
    description: 'Pin down what it must do and its scale/latency targets.',
    code: 'functional : the features\nnon-func   : scale, latency, availability',
  },
  {
    icon: '🧮',
    title: 'Estimation',
    titleClass: 'card-title-green',
    subtitle: 'the numbers',
    description: 'Back-of-the-envelope QPS, storage, and bandwidth.',
    code: 'DAU × actions → QPS\nrecords × size × years → storage',
  },
  {
    icon: '🧱',
    title: 'API + High-Level Design',
    titleClass: 'card-title-amber',
    subtitle: 'the sketch',
    description: 'Define endpoints, then draw the major components.',
    code: 'API: POST /x, GET /x/:id\nHLD: client → LB → services → DB/cache',
  },
  {
    icon: '🔬',
    title: 'Deep Dive',
    titleClass: 'card-title-pink',
    subtitle: 'go where asked',
    description: 'Zoom into the data model or the hardest sub-problem.',
    code: '// pick the interesting part:\n// sharding, feed fan-out, consistency...',
  },
];

const DELIVERY = [
  {
    icon: '📈',
    title: 'Scaling Story',
    titleClass: 'card-title-cyan',
    subtitle: 'grow it',
    description: 'Add caching, load balancing, sharding, and replication.',
    code: 'cache hot reads · LB across servers\nshard the DB · replicate for reads',
  },
  {
    icon: '⚖️',
    title: 'Trade-offs',
    titleClass: 'card-title-green',
    subtitle: 'be explicit',
    description: 'State what you gave up for what you gained.',
    code: 'SQL vs NoSQL · strong vs eventual\nsync vs async · cost vs latency',
  },
  {
    icon: '🗣️',
    title: 'Communicate',
    titleClass: 'card-title-amber',
    subtitle: 'think out loud',
    description: 'Structure the conversation; check in with the interviewer.',
    code: '1 clarify → 2 estimate → 3 API/HLD →\n4 deep dive → 5 scale + trade-offs',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'System Design Primer',
    titleClass: 'card-title-purple',
    subtitle: 'GitHub reference',
    description: 'The primer’s guide to approaching a system design interview.',
    link: { href: PRIMER_URL, label: 'Open on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Primer Study Guide',
    titleClass: 'card-title-green',
    subtitle: 'Reference',
    description: 'The full system-design-primer — patterns, solutions, and flash cards.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Step-By-Step Guide',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'System Design Interview: A Step-By-Step Guide by ByteByteGo — for Day 58.',
    link: {
      href: 'https://www.youtube.com/watch?v=i7twT3x5yv8',
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

export default function Day058() {
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
          <Link to="/day-057" className="day001-nav-btn day001-nav-home">
            ← Day 57
          </Link>
          <p className="day001-datetime">Thunder Day 58</p>
          <Link to="/day-059" className="day001-nav-btn day001-nav-next">
            Day 59 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>System Design</span>
              <span>Interview</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 58 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">HLD INTERVIEW PREPARATION</p>
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
          <div className="day001-progress-bar" style={{ width: '58%' }} />
        </div>

        <p className="day001-summary">
          Day fifty-eight — turning everything into a repeatable <strong>interview framework</strong>:{' '}
          <strong>clarify requirements</strong> → <strong>estimate</strong> the numbers →{' '}
          <strong>define the API</strong> and a <strong>high-level design</strong> →{' '}
          <strong>deep dive</strong> where asked → <strong>scale</strong> it (cache, LB, shard,
          replicate) while naming <strong>bottlenecks</strong> and <strong>trade-offs</strong>. The
          real skill is <strong>communicating</strong> — think out loud and treat it as a
          conversation. Reference:{' '}
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

        <CardSection icon="🧭" title="THE FRAMEWORK" cards={FRAMEWORK} columns={4} />
        <CardSection icon="🎤" title="DELIVERY" cards={DELIVERY} columns={3} />
        <CardSection icon="📚" title="SYSTEM DESIGN RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#SystemDesign</span>
          <span>#Interview</span>
          <span>#HLD</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
