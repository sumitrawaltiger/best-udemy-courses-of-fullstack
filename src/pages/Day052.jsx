import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRIMER_URL = 'https://github.com/donnemartin/system-design-primer';
const DOCS_URL = 'https://ably.com/topic/websockets';

const LEARNT_TODAY = [
  {
    title: 'Requirements',
    text: '1:1 and group chat, receipts, presence, media',
  },
  {
    title: 'WebSockets',
    text: 'a persistent connection for real-time messages',
  },
  {
    title: 'Connection servers',
    text: 'hold millions of open sockets, one per device',
  },
  {
    title: 'Message flow',
    text: 'sender → server → recipient (or store if offline)',
  },
  {
    title: 'Offline delivery',
    text: 'queue messages, deliver when the user reconnects',
  },
  {
    title: 'Receipts',
    text: 'sent, delivered, and read acknowledgements',
  },
  {
    title: 'Group chat',
    text: 'fan-out one message to all members',
  },
  {
    title: 'Presence',
    text: 'online / last-seen status',
  },
  {
    title: 'Storage',
    text: 'messages in a fast store; media in blob + CDN',
  },
  {
    title: 'Scale',
    text: 'shard by user; a gateway routes to the right server',
  },
];

const REALTIME = [
  {
    icon: '📋',
    title: 'Requirements',
    titleClass: 'card-title-cyan',
    subtitle: 'chat + more',
    description: '1:1 & group messaging, delivery/read receipts, presence.',
    code: 'functional : send · deliver · receipts · presence\nnon-func   : low latency, ordered, reliable',
  },
  {
    icon: '🔌',
    title: 'WebSocket Connections',
    titleClass: 'card-title-green',
    subtitle: 'stay connected',
    description: 'Each device holds a long-lived socket to a connection server.',
    code: 'device ── ws ──► connection-server\n// millions of persistent sockets',
  },
  {
    icon: '➡️',
    title: 'Message Flow',
    titleClass: 'card-title-amber',
    subtitle: 'route it',
    description: 'Find the recipient’s server and push, or store if offline.',
    code: 'send → server → lookup recipient\n  online?  push over their socket\n  offline? persist + deliver later',
  },
  {
    icon: '📥',
    title: 'Offline Delivery',
    titleClass: 'card-title-pink',
    subtitle: 'never lost',
    description: 'Queue undelivered messages; flush on reconnect.',
    code: 'inbox[user].push(msg)\non reconnect → drain inbox in order',
  },
];

const FEATURES = [
  {
    icon: '✅',
    title: 'Receipts & Presence',
    titleClass: 'card-title-cyan',
    subtitle: 'status',
    description: 'Track sent/delivered/read and online/last-seen.',
    code: 'status: sent → delivered → read\npresence: online | last-seen 5m ago',
  },
  {
    icon: '👥',
    title: 'Group Chat',
    titleClass: 'card-title-green',
    subtitle: 'fan-out',
    description: 'One message replicates to every group member’s inbox.',
    code: 'for m in group.members:\n  deliver(m, msg)  // cap group size',
  },
  {
    icon: '🗄️',
    title: 'Storage & Scale',
    titleClass: 'card-title-amber',
    subtitle: 'shard it',
    description: 'Messages in a fast store, media on a CDN; shard by user.',
    code: 'messages: Cassandra / KV (by chatId)\nmedia: blob + CDN · shard by userId',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'System Design Primer',
    titleClass: 'card-title-purple',
    subtitle: 'GitHub reference',
    description: 'system-design-primer — real-time delivery, fan-out, and sharding.',
    link: { href: PRIMER_URL, label: 'Open on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'WebSockets Explained',
    titleClass: 'card-title-green',
    subtitle: 'Ably docs',
    description: 'A clear primer on WebSockets — the backbone of a chat system.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'WhatsApp System Design',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'WhatsApp System Design — chat messaging systems — by Gaurav Sen — for Day 52.',
    link: {
      href: 'https://www.youtube.com/watch?v=vvhC64hQZMk',
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

export default function Day052() {
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
          <Link to="/day-051" className="day001-nav-btn day001-nav-home">
            ← Day 51
          </Link>
          <p className="day001-datetime">Thunder Day 52 · 13 Sep 2026</p>
          <Link to="/day-053" className="day001-nav-btn day001-nav-next">
            Day 53 →
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
                DAY 52 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">DESIGN A CHAT SYSTEM</p>
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
          <div className="day001-progress-bar" style={{ width: '52%' }} />
        </div>

        <p className="day001-summary">
          Day fifty-two — a WhatsApp-style <strong>chat system</strong>. Real-time needs persistent{' '}
          <strong>WebSocket</strong> connections held by <strong>connection servers</strong>; a
          message routes sender → server → recipient, or is <strong>stored</strong> and delivered on
          reconnect. Add <strong>sent/delivered/read receipts</strong>, <strong>presence</strong>,
          and <strong>group fan-out</strong>. Messages live in a fast store, media on a{' '}
          <strong>CDN</strong>, and everything <strong>shards by user</strong> behind a routing
          gateway. Reference:{' '}
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

        <CardSection icon="💬" title="REAL-TIME" cards={REALTIME} columns={4} />
        <CardSection icon="📈" title="FEATURES & SCALE" cards={FEATURES} columns={3} />
        <CardSection icon="📚" title="SYSTEM DESIGN RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#SystemDesign</span>
          <span>#HLD</span>
          <span>#Chat</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
