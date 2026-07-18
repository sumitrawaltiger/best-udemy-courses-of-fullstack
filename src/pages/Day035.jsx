import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day16';
const DOCS_URL = 'https://socket.io/docs/v4/';

const LEARNT_TODAY = [
  {
    title: 'HTTP can’t push',
    text: 'request/response only — the server cannot start the conversation',
  },
  {
    title: 'WebSocket',
    text: 'one persistent, two-way connection over a single TCP socket',
  },
  {
    title: 'Socket.io',
    text: 'WebSockets plus fallbacks, reconnection, and rooms',
  },
  {
    title: 'connection',
    text: 'io.on("connection", socket => ...) fires per client',
  },
  {
    title: 'emit',
    text: 'send a named event with a payload',
  },
  {
    title: 'on',
    text: 'listen for a named event from the other side',
  },
  {
    title: 'broadcast',
    text: 'socket.broadcast.emit sends to everyone except the sender',
  },
  {
    title: 'Rooms',
    text: 'group sockets together — one chat room, one channel',
  },
  {
    title: 'Use cases',
    text: 'chat, live notifications, dashboards, collaboration',
  },
  {
    title: 'Scaling',
    text: 'a Redis adapter shares events across server instances',
  },
];

const WHY = [
  {
    icon: '🚧',
    title: 'HTTP Can’t Push',
    titleClass: 'card-title-cyan',
    subtitle: 'the limit',
    description: 'The client always asks first — the server can never initiate.',
    code: '// polling = ask again and again (wasteful)\nsetInterval(() => fetch("/messages"), 2000);',
  },
  {
    icon: '🔌',
    title: 'WebSocket',
    titleClass: 'card-title-green',
    subtitle: 'two-way pipe',
    description: 'A single upgraded connection stays open for instant, bidirectional data.',
    code: '// one handshake, then both sides can send\nGET /socket HTTP/1.1\nUpgrade: websocket',
  },
  {
    icon: '⚡',
    title: 'Socket.io',
    titleClass: 'card-title-amber',
    subtitle: 'batteries included',
    description: 'WebSockets with fallbacks, auto-reconnect, rooms, and events.',
    code: 'const io = new Server(httpServer);\nio.on("connection", (socket) => {\n  console.log("client", socket.id);\n});',
  },
];

const EVENTS = [
  {
    icon: '🤝',
    title: 'connection',
    titleClass: 'card-title-cyan',
    subtitle: 'per client',
    description: 'Each connected client gives you a socket to talk to.',
    code: 'io.on("connection", (socket) => {\n  socket.on("disconnect", () => {/* cleanup */});\n});',
  },
  {
    icon: '📤',
    title: 'emit / on',
    titleClass: 'card-title-green',
    subtitle: 'send & listen',
    description: 'Emit a named event on one side, listen for it on the other.',
    code: '// client\nsocket.emit("message", "hi");\n// server\nsocket.on("message", (text) => { /* ... */ });',
  },
  {
    icon: '📣',
    title: 'Broadcast',
    titleClass: 'card-title-amber',
    subtitle: 'everyone else',
    description: 'Send an event to all clients except the one that sent it.',
    code: 'socket.broadcast.emit("message", text);\nio.emit("message", text); // everyone incl. sender',
  },
  {
    icon: '🚪',
    title: 'Rooms',
    titleClass: 'card-title-pink',
    subtitle: 'group sockets',
    description: 'Join a room and emit only to that group — perfect for chat.',
    code: 'socket.join("room-42");\nio.to("room-42").emit("message", text);',
  },
];

const RESOURCES = [
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day16',
    description: 'A real-time chat with Socket.io — connection, events, broadcast, and rooms.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Socket.io Docs',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'The official Socket.io v4 docs — server, client, events, and rooms.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Learn Socket.io',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Learn Socket.io in 30 Minutes by Web Dev Simplified — for Day 35.',
    link: {
      href: 'https://www.youtube.com/watch?v=ZKEqqIO7n-k',
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

export default function Day035() {
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
          <Link to="/day-034" className="day001-nav-btn day001-nav-home">
            ← Day 34
          </Link>
          <p className="day001-datetime">Thunder Day 35 · 27 Aug 2026</p>
          <Link to="/day-036" className="day001-nav-btn day001-nav-next">
            Day 36 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Node.js</span>
              <span>Real-Time</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 35 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">WEBSOCKETS & REAL-TIME</p>
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
          <div className="day001-progress-bar" style={{ width: '35%' }} />
        </div>

        <p className="day001-summary">
          Day thirty-five — HTTP can only answer when asked, so live features need a different
          channel. A <strong>WebSocket</strong> is one persistent, two-way connection, and{' '}
          <strong>Socket.io</strong> wraps it with fallbacks, reconnection, and rooms. I learned the
          core loop — <code>io.on(&quot;connection&quot;)</code>, <code>emit</code> to send,{' '}
          <code>on</code> to listen, <code>broadcast</code> to reach everyone else, and{' '}
          <strong>rooms</strong> to group sockets for chat. Code in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day16 on GitHub
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

        <CardSection icon="🛰️" title="WHY REAL-TIME" cards={WHY} columns={3} />
        <CardSection icon="📡" title="EVENTS & ROOMS" cards={EVENTS} columns={4} />
        <CardSection icon="📚" title="THUNDER BACKEND DAY 16" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#WebSockets</span>
          <span>#SocketIO</span>
          <span>#Backend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
