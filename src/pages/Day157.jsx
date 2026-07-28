import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const MICRO = 'https://docs.nestjs.com/microservices/basics';
const REDIS = 'https://docs.nestjs.com/microservices/redis';
const TCP = 'https://docs.nestjs.com/microservices/tcp';

const LEARNT_TODAY = [
  { title: 'Microservice in Nest', text: 'a Nest app that listens on a transporter (TCP, Redis, NATS…) instead of only HTTP' },
  { title: 'Why split', text: 'scale teams and deploy units independently — start only when the monolith hurts' },
  { title: 'MessagePattern', text: '@MessagePattern("tasks.get") handles request/response style RPC' },
  { title: 'EventPattern', text: '@EventPattern("task.created") for fire-and-forget events' },
  { title: 'ClientProxy', text: 'the HTTP app sends messages to a microservice via ClientProxy' },
  { title: 'TCP vs Redis', text: 'TCP is simple for Year-1; Redis pub/sub scales across processes' },
  { title: 'Contracts matter', text: 'shared DTO packages or OpenAPI-like schemas prevent silent breaks' },
  { title: 'Ops cost', text: 'more services = more deploy, logs, and failure modes — earn the complexity' },
  { title: 'Hybrid app', text: 'one Nest process can connectMicroservice + listen HTTP together' },
];

const CORE = [
  {
    icon: '🛰️', title: 'Microservice Boot', titleClass: 'card-title-cyan', subtitle: 'createMicroservice',
    description: 'Boot a dedicated worker that listens on TCP (or Redis) for patterns.',
    code: 'const app = await NestFactory.createMicroservice(AppModule, {\n  transport: Transport.TCP,\n  options: { host: "0.0.0.0", port: 3001 },\n});\nawait app.listen();',
  },
  {
    icon: '📨', title: 'MessagePattern', titleClass: 'card-title-purple', subtitle: 'RPC Style',
    description: 'Handler returns data to the caller — like a remote function call.',
    code: '@MessagePattern({ cmd: "tasks.findAll" })\nfindAll() {\n  return this.tasks.findAll();\n}',
  },
  {
    icon: '📤', title: 'ClientProxy', titleClass: 'card-title-amber', subtitle: 'Call From API',
    description: 'Register a client in the HTTP app and send/emit to the microservice.',
    code: '@Inject("TASKS_SERVICE") private client: ClientProxy;\n\nthis.client.send({ cmd: "tasks.findAll" }, {}).subscribe();',
  },
];

const PRACTICE = [
  {
    icon: '🔴', title: 'Redis Transport', titleClass: 'card-title-cyan', subtitle: 'Pub/Sub',
    description: 'Use Redis when multiple instances must receive the same events.',
    code: 'transport: Transport.REDIS,\noptions: { host: "localhost", port: 6379 }',
  },
  {
    icon: '⚠️', title: 'Failure Modes', titleClass: 'card-title-purple', subtitle: 'Design For',
    description: 'Timeouts, retries, and dead letters — network calls fail more than in-process calls.',
    code: '// timeouts · retries · idempotent handlers',
  },
  {
    icon: '🧱', title: 'Monolith First', titleClass: 'card-title-amber', subtitle: 'Advice',
    description: 'Modular Nest monolith + events often beats early microservices. Split when deploy or scale forces it.',
    code: '// modules now → services later',
  },
  {
    icon: '🔜', title: 'Next: API Gateway', titleClass: 'card-title-lime', subtitle: 'Day 158 Preview',
    description: 'Tomorrow: BFF / API gateway — one edge for clients, many backends behind it.',
    link: { href: '/day-158', label: 'Go to Day 158 →' },
  },
];

const RESOURCES = [
  {
    icon: '🛰️', title: 'Microservices Basics', titleClass: 'card-title-cyan', subtitle: 'Nest Docs',
    description: 'Transporters, patterns, and hybrid applications.',
    link: { href: MICRO, label: 'Read microservices basics →', external: true },
  },
  {
    icon: '🔌', title: 'TCP', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Built-in TCP transport for request/response.',
    link: { href: TCP, label: 'Read TCP transport →', external: true },
  },
  {
    icon: '🔴', title: 'Redis', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Redis transporter for pub/sub style messaging.',
    link: { href: REDIS, label: 'Read Redis transport →', external: true },
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

export default function Day157() {
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
          <Link to="/day-156" className="day001-nav-btn day001-nav-prev">← Day 156</Link>
          <p className="day001-datetime">Nest Day 157 · 6 Jun 2027</p>
          <Link to="/day-158" className="day001-nav-btn day001-nav-next">Day 158 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>NestJS</span><span>Year 1</span><span>Microservices</span><span>TCP</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 157 <span aria-hidden="true">🛰️</span></h1>
              <p className="day001-day-theme">NEST MICROSERVICES BASICS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '44%' }} /></div>

        <p className="day001-summary">
          Day 157 peeks at distributed Nest. <strong>MessagePattern</strong> RPC,{' '}
          <strong>ClientProxy</strong> callers, <strong>TCP/Redis</strong> transports — and a reminder
          to earn microservices only when the monolith hurts.
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

        <CardSection icon="🛰️" title="1 · PATTERNS & CLIENTS" cards={CORE} columns={3} />
        <CardSection icon="⚠️" title="2 · TRANSPORTS & CAUTION" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#NestJS</span><span>#Microservices</span><span>#Redis</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
