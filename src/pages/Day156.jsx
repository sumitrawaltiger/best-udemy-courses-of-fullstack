import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GATEWAYS = 'https://docs.nestjs.com/websockets/gateways';
const ADAPTER = 'https://docs.nestjs.com/websockets/adapter';
const GUARDS = 'https://docs.nestjs.com/websockets/guards';

const LEARNT_TODAY = [
  { title: 'Nest Gateway', text: 'WebSocket controller — @WebSocketGateway maps events like HTTP controllers map routes' },
  { title: 'Socket.IO default', text: 'Nest uses Socket.IO under the hood unless you swap the adapter' },
  { title: '@SubscribeMessage', text: 'handle named client events (chat:message, task:updated)' },
  { title: 'Server & client', text: 'inject @WebSocketServer() to broadcast; client socket for replies' },
  { title: 'Rooms', text: 'socket.join / server.to(room).emit — same idea as Day 141' },
  { title: 'Guards on sockets', text: 'JWT on handshake — reuse auth patterns from HTTP' },
  { title: 'Same port optional', text: 'gateway can share the Nest HTTP server or listen separately' },
  { title: 'Days 156–160', text: 'gateways → microservices → API gateway/BFF → Nest Swagger → Year-1 backend wrap' },
  { title: 'Realtime + Nest DI', text: 'gateways inject services — business logic stays out of the socket layer' },
];

const CORE = [
  {
    icon: '📡', title: 'Gateway Class', titleClass: 'card-title-cyan', subtitle: '@WebSocketGateway',
    description: 'Declare a gateway with CORS if the browser client is on another origin.',
    code: '@WebSocketGateway({ cors: { origin: "*" } })\nexport class TasksGateway {\n  @WebSocketServer() server: Server;\n}',
  },
  {
    icon: '📨', title: 'Subscribe Message', titleClass: 'card-title-purple', subtitle: 'Events In',
    description: 'Handle a client event and optionally return a payload (ack) or broadcast.',
    code: '@SubscribeMessage("task:join")\nhandleJoin(client: Socket, boardId: string) {\n  client.join(`board:${boardId}`);\n  return { ok: true };\n}',
  },
  {
    icon: '📢', title: 'Broadcast', titleClass: 'card-title-amber', subtitle: 'Events Out',
    description: 'After a REST/GraphQL write, inject the gateway (or emit a domain event) and notify rooms.',
    code: 'this.server.to(`board:${id}`).emit("task:updated", task);',
  },
];

const PRACTICE = [
  {
    icon: '🔐', title: 'Auth Handshake', titleClass: 'card-title-cyan', subtitle: 'Guards',
    description: 'Validate JWT from handshake.auth or headers before allowing the connection.',
    code: '// WsJwtGuard implements CanActivate\n// read client.handshake.auth.token',
  },
  {
    icon: '🧩', title: 'Inject Services', titleClass: 'card-title-purple', subtitle: 'DI',
    description: 'Gateways are providers — inject TasksService so socket handlers stay thin.',
    code: 'constructor(private tasks: TasksService) {}',
  },
  {
    icon: '🔄', title: 'REST + Socket', titleClass: 'card-title-amber', subtitle: 'Hybrid',
    description: 'Mutate via HTTP (validated), then gateway emit so other tabs update live.',
    code: '// POST /tasks → save → gateway.emit\n'// clients refresh without polling',
  },
  {
    icon: '🔜', title: 'Next: Microservices', titleClass: 'card-title-lime', subtitle: 'Day 157 Preview',
    description: 'Tomorrow: Nest microservice transporters — TCP/Redis between services.',
    link: { href: '/day-157', label: 'Go to Day 157 →' },
  },
];

const RESOURCES = [
  {
    icon: '📡', title: 'Gateways', titleClass: 'card-title-cyan', subtitle: 'Nest Docs',
    description: 'WebSocket gateways, messages, and lifecycle hooks.',
    link: { href: GATEWAYS, label: 'Read gateways docs →', external: true },
  },
  {
    icon: '🔌', title: 'Adapters', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Socket.IO vs ws adapter configuration.',
    link: { href: ADAPTER, label: 'Read adapter docs →', external: true },
  },
  {
    icon: '🛡️', title: 'WS Guards', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Protect gateway connections and messages.',
    link: { href: GUARDS, label: 'Read WS guards docs →', external: true },
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

export default function Day156() {
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
          <Link to="/day-155" className="day001-nav-btn day001-nav-prev">← Day 155</Link>
          <p className="day001-datetime">Nest Day 156</p>
          <Link to="/day-157" className="day001-nav-btn day001-nav-next">Day 157 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>NestJS</span><span>Year 1</span><span>WebSockets</span><span>Gateway</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 156 <span aria-hidden="true">📡</span></h1>
              <p className="day001-day-theme">NEST WEBSOCKET GATEWAYS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">NEST · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '43%' }} /></div>

        <p className="day001-summary">
          Day 156 brings realtime into Nest. Build a <strong>WebSocket gateway</strong>, handle{' '}
          <strong>@SubscribeMessage</strong> events, <strong>broadcast</strong> to rooms, and guard
          the handshake with JWT.
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

        <CardSection icon="📡" title="1 · GATEWAY BASICS" cards={CORE} columns={3} />
        <CardSection icon="🔐" title="2 · AUTH & HYBRID" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#NestJS</span><span>#WebSockets</span><span>#SocketIO</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
