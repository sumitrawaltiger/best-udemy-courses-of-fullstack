import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const CONFIG = 'https://docs.nestjs.com/techniques/configuration';
const LOGGER = 'https://docs.nestjs.com/techniques/logger';
const TERMINUS = 'https://docs.nestjs.com/recipes/terminus';

const LEARNT_TODAY = [
  { title: 'ConfigModule', text: 'load .env once; inject ConfigService — no scattered process.env' },
  { title: 'Validate env', text: 'fail fast at boot if JWT_SECRET or DATABASE_URL is missing' },
  { title: 'Health checks', text: '@nestjs/terminus for /health — DB and Redis probes for orchestrators' },
  { title: 'Structured logs', text: 'Nest Logger or Pino — request ids and error stacks in prod' },
  { title: 'Graceful shutdown', text: 'enableShutdownHooks so Prisma and servers close cleanly on SIGTERM' },
  { title: 'Migrations in deploy', text: 'prisma migrate deploy before or as the new release starts' },
  { title: 'Same ship list', text: 'Helmet/CORS, rate limits, validation, tests, OpenAPI — still required' },
  { title: 'Nest milestone', text: 'Days 148–155: Nest core → Prisma → GraphQL → events → tests → prod' },
  { title: 'Year-1 backend kit', text: 'Express ops + Nest depth — pick the tool, keep the discipline' },
];

const CORE = [
  {
    icon: '⚙️', title: 'ConfigModule', titleClass: 'card-title-cyan', subtitle: 'Typed Env',
    description: 'isGlobal so every module can inject ConfigService. Validate required keys at startup.',
    code: 'ConfigModule.forRoot({\n  isGlobal: true,\n  // validate: (env) => { … throw if missing }\n});\nconst secret = config.getOrThrow("JWT_SECRET");',
  },
  {
    icon: '❤️', title: 'Terminus Health', titleClass: 'card-title-purple', subtitle: '/health',
    description: 'Expose liveness/readiness. Wire PrismaHealthIndicator or a custom DB ping.',
    code: '@Get("/health")\n@HealthCheck()\ncheck() {\n  return this.health.check([\n    () => this.db.pingCheck("database"),\n  ]);\n}',
  },
  {
    icon: '🛑', title: 'Graceful Stop', titleClass: 'card-title-amber', subtitle: 'SIGTERM',
    description: 'Platforms send SIGTERM on deploy. Let Nest close HTTP and disconnect Prisma.',
    code: 'app.enableShutdownHooks();\n// PrismaService.onModuleDestroy → $disconnect()',
  },
];

const WRAP = [
  {
    icon: '✅', title: 'Nest Ship Checklist', titleClass: 'card-title-cyan', subtitle: 'Before Prod',
    description: 'Config validation, guards, ValidationPipe, Prisma migrate, tests, health, logs, CORS/Helmet.',
    code: '// env · auth · validation\n'// migrate · test · health · logs',
  },
  {
    icon: '🗺️', title: 'Days 148–155', titleClass: 'card-title-purple', subtitle: 'Nest Arc',
    description: 'Fundamentals → pipes/guards → Prisma → GraphQL → events → tests → production Nest.',
    code: 'Structure + DI\nData + GraphQL\nEvents + tests + ship',
  },
  {
    icon: '🚀', title: 'What Comes Next', titleClass: 'card-title-lime', subtitle: 'Day 156 Preview',
    description: 'Tomorrow: Nest WebSocket gateways — realtime events, rooms, and JWT on the handshake.',
    link: { href: '/day-156', label: 'Go to Day 156 →' },
  },
  {
    icon: '🏠', title: 'Back Home', titleClass: 'card-title-amber', subtitle: 'Hub',
    description: 'Return to the hub for other tracks and the 1600-day map.',
    link: { href: '/', label: 'Go to Home →' },
  },
];

const RESOURCES = [
  {
    icon: '⚙️', title: 'Configuration', titleClass: 'card-title-cyan', subtitle: 'Nest Docs',
    description: 'ConfigModule, namespaces, and custom validation.',
    link: { href: CONFIG, label: 'Read config docs →', external: true },
  },
  {
    icon: '🪵', title: 'Logger', titleClass: 'card-title-purple', subtitle: 'Nest Docs',
    description: 'Built-in logger and custom logger providers.',
    link: { href: LOGGER, label: 'Read logger docs →', external: true },
  },
  {
    icon: '❤️', title: 'Terminus', titleClass: 'card-title-amber', subtitle: 'Health',
    description: 'Health checks for Kubernetes and load balancers.',
    link: { href: TERMINUS, label: 'Read Terminus recipe →', external: true },
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

export default function Day155() {
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
          <Link to="/day-154" className="day001-nav-btn day001-nav-prev">← Day 154</Link>
          <p className="day001-datetime">Nest Day 155 · 8 Nov 2027</p>
          <Link to="/day-156" className="day001-nav-btn day001-nav-next">Day 156 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>NestJS</span><span>Year 1</span><span>Production</span><span>Ship</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 155 <span aria-hidden="true">🚀</span></h1>
              <p className="day001-day-theme">NEST PRODUCTION CHECKLIST</p>
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
          Day 155 ships Nest safely. <strong>ConfigModule</strong>, <strong>/health</strong>,{' '}
          <strong>graceful shutdown</strong>, migrations, and the same security/test discipline you
          learned on Express.
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

        <CardSection icon="⚙️" title="1 · CONFIG & HEALTH" cards={CORE} columns={3} />
        <CardSection icon="✅" title="2 · CHECKLIST & ARC" cards={WRAP} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#NestJS</span><span>#Production</span><span>#DevOps</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
