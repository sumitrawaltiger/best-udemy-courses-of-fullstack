import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRIMER_URL = 'https://github.com/donnemartin/system-design-primer';
const DOCS_URL = 'https://docs.aws.amazon.com/sns/latest/dg/welcome.html';

const LEARNT_TODAY = [
  {
    title: 'Requirements',
    text: 'send at high volume across channels, reliably',
  },
  {
    title: 'Channels',
    text: 'email, SMS, push, and in-app notifications',
  },
  {
    title: 'Producer → queue → workers',
    text: 'decouple triggering from actually sending',
  },
  {
    title: 'Fan-out',
    text: 'one event can notify many recipients',
  },
  {
    title: 'Templates',
    text: 'reusable, localized message templates',
  },
  {
    title: 'Preferences',
    text: 'per-user opt-in / opt-out per channel',
  },
  {
    title: 'Retries & DLQ',
    text: 'retry failures; park poison messages',
  },
  {
    title: 'Idempotency',
    text: 'a key prevents duplicate sends',
  },
  {
    title: 'Rate limits',
    text: 'throttle per user and per provider',
  },
  {
    title: 'Priority lanes',
    text: 'transactional beats marketing',
  },
];

const DESIGN = [
  {
    icon: '📋',
    title: 'Requirements & Channels',
    titleClass: 'card-title-cyan',
    subtitle: 'multi-channel',
    description: 'One system delivers email, SMS, push, and in-app.',
    code: 'functional : send via N channels\nnon-func   : millions/day, reliable, low-latency',
  },
  {
    icon: '📨',
    title: 'Queue + Workers',
    titleClass: 'card-title-green',
    subtitle: 'decouple sending',
    description: 'Events go to a queue; workers pull and dispatch per channel.',
    code: 'trigger → queue → [email][sms][push] workers\n// producer never waits on a provider',
  },
  {
    icon: '📝',
    title: 'Templates',
    titleClass: 'card-title-amber',
    subtitle: 'reusable content',
    description: 'Render localized templates with per-user variables.',
    code: '"Hi {name}, your order {id} shipped"\n// versioned, localized, testable',
  },
  {
    icon: '🎚️',
    title: 'Preferences',
    titleClass: 'card-title-pink',
    subtitle: 'respect opt-out',
    description: 'Check each user’s channel preferences before sending.',
    code: 'if (!prefs[user].push) skip("push");\n// unsubscribe + quiet hours',
  },
];

const RELIABILITY = [
  {
    icon: '🔁',
    title: 'Retries & DLQ',
    titleClass: 'card-title-cyan',
    subtitle: 'deliver reliably',
    description: 'Retry transient provider failures; DLQ the rest.',
    code: 'send → fail → retry (backoff) → DLQ\n// alert on DLQ growth',
  },
  {
    icon: '🔑',
    title: 'Idempotency',
    titleClass: 'card-title-green',
    subtitle: 'no duplicates',
    description: 'A dedupe key ensures each notification sends once.',
    code: 'key = hash(event + user + channel)\nif (seen(key)) return; // exactly-once-ish',
  },
  {
    icon: '🚦',
    title: 'Rate & Priority',
    titleClass: 'card-title-amber',
    subtitle: 'fair + timely',
    description: 'Throttle per provider; route urgent messages first.',
    code: 'lanes: transactional > marketing\nrespect provider quotas',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'System Design Primer',
    titleClass: 'card-title-purple',
    subtitle: 'GitHub reference',
    description: 'system-design-primer — queues, workers, and reliable delivery patterns.',
    link: { href: PRIMER_URL, label: 'Open on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'AWS SNS',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'Amazon SNS — a real pub/sub notification service, as a reference.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Notification Engine',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Build Your Own Notification Engine | System Design by Coder Army — for Day 51.',
    link: {
      href: 'https://www.youtube.com/watch?v=t-4r2AsJz_Q',
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

export default function Day051() {
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
          <Link to="/day-050" className="day001-nav-btn day001-nav-home">
            ← Day 50
          </Link>
          <p className="day001-datetime">Thunder Day 51 · 12 Sep 2026</p>
          <Link to="/day-052" className="day001-nav-btn day001-nav-next">
            Day 52 →
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
                DAY 51 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">DESIGN A NOTIFICATION SYSTEM</p>
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
          <div className="day001-progress-bar" style={{ width: '51%' }} />
        </div>

        <p className="day001-summary">
          Day fifty-one — designing a <strong>notification system</strong> that spans{' '}
          <strong>email, SMS, push, and in-app</strong>. The core is a{' '}
          <strong>producer → queue → workers</strong> pipeline so triggering never waits on a slow
          provider, with <strong>templates</strong> and per-user <strong>preferences</strong>.
          Reliability comes from <strong>retries + DLQ</strong>, <strong>idempotency</strong> keys to
          avoid duplicates, and <strong>rate limits</strong> with priority lanes for transactional vs
          marketing. Reference:{' '}
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
        <CardSection icon="🛡️" title="RELIABILITY" cards={RELIABILITY} columns={3} />
        <CardSection icon="📚" title="SYSTEM DESIGN RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#SystemDesign</span>
          <span>#HLD</span>
          <span>#Notifications</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
