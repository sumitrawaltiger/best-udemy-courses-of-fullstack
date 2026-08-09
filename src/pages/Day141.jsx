import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const SOCKET_IO = 'https://socket.io/docs/v4/';
const WS_MDN = 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API';
const ENGINE = 'https://socket.io/docs/v4/server-initialization/';

const LEARNT_TODAY = [
  { title: 'Why realtime', text: 'HTTP request/response is pull — chats, live feeds, and presence need push' },
  { title: 'WebSockets', text: 'a long-lived bidirectional channel over a single TCP connection' },
  { title: 'Socket.IO', text: 'WebSockets plus fallbacks, rooms, and events — common with Express' },
  { title: 'Same HTTP server', text: 'attach Socket.IO to the Node http.Server that Express uses' },
  { title: 'Events', text: 'socket.emit / socket.on for named messages (chat:message, task:updated)' },
  { title: 'Rooms', text: 'join users to rooms (project:42) so you broadcast only to interested clients' },
  { title: 'Auth on connect', text: 'verify JWT in the handshake before accepting the socket' },
  { title: 'CORS for sockets', text: 'configure Socket.IO cors origin like your Express CORS' },
  { title: 'Deeper Express', text: 'Days 141–145: realtime, jobs, cache, logs, versioning' },
];

const CORE = [
  {
    icon: '⚡', title: 'Attach To Express', titleClass: 'card-title-cyan', subtitle: 'Shared Server',
    description: 'Create an http.Server from the Express app, then pass it to Socket.IO. Both REST and sockets share one port.',
    code: 'import http from "http";\nimport { Server } from "socket.io";\n\nconst server = http.createServer(app);\nconst io = new Server(server, {\n  cors: { origin: process.env.CORS_ORIGIN },\n});\nserver.listen(port);',
  },
  {
    icon: '📨', title: 'Emit & Listen', titleClass: 'card-title-purple', subtitle: 'Named Events',
    description: 'Clients and server talk in events. Keep payloads small and typed (Zod on the way in).',
    code: 'io.on("connection", (socket) => {\n  socket.on("chat:message", (msg) => {\n    io.emit("chat:message", msg);\n  });\n});',
  },
  {
    icon: '🏠', title: 'Rooms', titleClass: 'card-title-amber', subtitle: 'Targeted Broadcast',
    description: 'socket.join("board:7") then io.to("board:7").emit(...) so only that board’s clients update.',
    code: 'socket.join(`board:${boardId}`);\nio.to(`board:${boardId}`).emit("card:moved", payload);',
  },
];

const AUTH = [
  {
    icon: '🔐', title: 'Auth Handshake', titleClass: 'card-title-cyan', subtitle: 'JWT On Connect',
    description: 'Read token from socket.handshake.auth or query, verify, then attach user to socket.data.',
    code: 'io.use((socket, next) => {\n  try {\n    const token = socket.handshake.auth.token;\n    socket.data.user = jwt.verify(token, secret);\n    next();\n  } catch {\n    next(new Error("unauthorized"));\n  }\n});',
  },
  {
    icon: '🔄', title: 'REST + Socket', titleClass: 'card-title-purple', subtitle: 'Best Of Both',
    description: 'Mutate with REST (validated, authorized), then io.emit so other tabs/devices refresh live.',
    code: '// after saving a task\nio.to(`user:${userId}`).emit("task:updated", task);',
  },
  {
    icon: '📱', title: 'Client Connect', titleClass: 'card-title-amber', subtitle: 'Web / RN',
    description: 'socket.io-client connects with the same API URL and passes the JWT in auth.',
    code: 'import { io } from "socket.io-client";\nconst socket = io(API_URL, {\n  auth: { token },\n});',
  },
  {
    icon: '🔜', title: 'Next: Background Jobs', titleClass: 'card-title-lime', subtitle: 'Day 142 Preview',
    description: 'Tomorrow: move slow work (email, thumbnails, reports) off the request thread with a job queue.',
    link: { href: '/day-142', label: 'Go to Day 142 →' },
  },
];

const RESOURCES = [
  {
    icon: '⚡', title: 'Socket.IO Docs', titleClass: 'card-title-cyan', subtitle: 'Guide',
    description: 'Server and client APIs, rooms, namespaces, and auth patterns.',
    link: { href: SOCKET_IO, label: 'Read Socket.IO docs →', external: true },
  },
  {
    icon: '🔌', title: 'WebSockets API', titleClass: 'card-title-purple', subtitle: 'MDN',
    description: 'The browser-native WebSocket model under the hood.',
    link: { href: WS_MDN, label: 'Read WebSockets MDN →', external: true },
  },
  {
    icon: '🛠️', title: 'Server Init', titleClass: 'card-title-amber', subtitle: 'Socket.IO',
    description: 'How to attach Socket.IO to an existing HTTP server.',
    link: { href: ENGINE, label: 'Read server init →', external: true },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">{card.icon}</span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a href={card.link.href} target="_blank" rel="noopener noreferrer" className="day001-card-link">{card.link.label}</a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">{card.link.label}</Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title"><span aria-hidden="true">{icon}</span> {title}</h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (<TopicCard key={card.title} card={card} />))}
      </div>
    </section>
  );
}

export default function Day141() {
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
      const scale = Math.min((window.innerHeight - pad) / wrap.scrollHeight, (window.innerWidth - pad) / wrap.scrollWidth);
      wrap.style.transform = `scale(${scale})`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
    };
    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);
    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) avatar.addEventListener('load', fitToScreen);
    return () => { window.removeEventListener('resize', fitToScreen); observer.disconnect(); };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/" className="day001-nav-btn day001-nav-home">Home</Link>
          <Link to="/day-140" className="day001-nav-btn day001-nav-prev">← Day 140</Link>
          <p className="day001-datetime">Express Day 141 · 25 Oct 2027</p>
          <Link to="/day-142" className="day001-nav-btn day001-nav-next">Day 142 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>Realtime</span><span>Socket.IO</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 141 <span aria-hidden="true">⚡</span></h1>
              <p className="day001-day-theme">WEBSOCKETS &amp; REALTIME</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">EXPRESS · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '39%' }} /></div>

        <p className="day001-summary">
          Day 141 goes live. Attach <strong>Socket.IO</strong> to your Express HTTP server,{' '}
          <strong>emit events</strong>, use <strong>rooms</strong>, and <strong>auth the handshake</strong>{' '}
          with JWT — REST for writes, sockets for instant updates.
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> — {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="⚡" title="1 · SOCKET.IO BASICS" cards={CORE} columns={3} />
        <CardSection icon="🔐" title="2 · AUTH & CLIENTS" cards={AUTH} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Express</span><span>#SocketIO</span><span>#WebSockets</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
