import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PINO = 'https://getpino.io/#/';
const MORGAN = 'https://expressjs.com/en/resources/middleware/morgan.html';
const OTEL = 'https://opentelemetry.io/docs/languages/js/';

const LEARNT_TODAY = [
  { title: 'Structured logs', text: 'JSON logs with level, msg, requestId — easy to search in production' },
  { title: 'Pino', text: 'fast Node logger; pairs well with Express via pino-http' },
  { title: 'Request ID', text: 'one id per request propagated in logs and response headers' },
  { title: 'Levels', text: 'debug / info / warn / error — use error for failures you must act on' },
  { title: 'Never log secrets', text: 'no passwords, tokens, or full Authorization headers' },
  { title: 'Access logs', text: 'method, path, status, duration — morgan or pino-http' },
  { title: 'Error context', text: 'log err.message + stack + requestId when AppError or 500 fires' },
  { title: 'Health checks', text: 'GET /health for uptime probes; keep it cheap and dependency-aware' },
  { title: 'Metrics later', text: 'latency histograms and error rates — OpenTelemetry when you outgrow logs' },
];

const CORE = [
  {
    icon: '🪵', title: 'Pino Logger', titleClass: 'card-title-cyan', subtitle: 'JSON Out',
    description: 'Create one logger for the app. Child loggers can add requestId per request.',
    code: 'import pino from "pino";\nexport const logger = pino({ level: process.env.LOG_LEVEL ?? "info" });\nlogger.info({ userId }, "user logged in");',
  },
  {
    icon: '🆔', title: 'Request ID', titleClass: 'card-title-purple', subtitle: 'Trace A Call',
    description: 'Accept X-Request-Id or generate one; attach to res and logger child.',
    code: 'app.use((req, res, next) => {\n  req.id = req.get("x-request-id") ?? crypto.randomUUID();\n  res.setHeader("X-Request-Id", req.id);\n  req.log = logger.child({ requestId: req.id });\n  next();\n});',
  },
  {
    icon: '📈', title: 'Access + Errors', titleClass: 'card-title-amber', subtitle: 'What Happened',
    description: 'Log status and duration on finish. On errors, log once in the error middleware with context.',
    code: 'req.log.info({ method: req.method, path: req.path, status, ms }, "request");\nreq.log.error({ err, status }, "request failed");',
  },
];

const OPS = [
  {
    icon: '❤️', title: 'Health Endpoint', titleClass: 'card-title-cyan', subtitle: '/health',
    description: 'Return 200 when the process can serve. Optionally ping DB/Redis and degrade status.',
    code: 'app.get("/health", async (_req, res) => {\n  res.json({ ok: true, uptime: process.uptime() });\n});',
  },
  {
    icon: '🚫', title: 'Redact Secrets', titleClass: 'card-title-purple', subtitle: 'Safe Logs',
    description: 'Configure redaction paths (req.headers.authorization, password fields) so leaks are harder.',
    code: 'pino({\n  redact: ["req.headers.authorization", "*.password"],\n});',
  },
  {
    icon: '🔭', title: 'Observe Later', titleClass: 'card-title-amber', subtitle: 'OTel Path',
    description: 'When logs are not enough, add OpenTelemetry traces and metrics for latency and errors.',
    code: '// start with logs + health\n'// then: spans around DB and external calls',
  },
  {
    icon: '🔜', title: 'Next: Versioning', titleClass: 'card-title-lime', subtitle: 'Day 145 Preview',
    description: 'Tomorrow: API versioning, deprecation, and a Year-1 Express production checklist.',
    link: { href: '/day-145', label: 'Go to Day 145 →' },
  },
];

const RESOURCES = [
  {
    icon: '🪵', title: 'Pino', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Fast structured logging for Node.',
    link: { href: PINO, label: 'Read Pino docs →', external: true },
  },
  {
    icon: '📝', title: 'Morgan', titleClass: 'card-title-purple', subtitle: 'Express',
    description: 'Classic HTTP request logger middleware.',
    link: { href: MORGAN, label: 'Read Morgan docs →', external: true },
  },
  {
    icon: '🔭', title: 'OpenTelemetry JS', titleClass: 'card-title-amber', subtitle: 'Tracing',
    description: 'Instrumentation path when you need traces and metrics.',
    link: { href: OTEL, label: 'Read OTel JS docs →', external: true },
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

export default function Day144() {
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
          <Link to="/day-143" className="day001-nav-btn day001-nav-prev">← Day 143</Link>
          <p className="day001-datetime">Express Day 144 · 24 May 2027</p>
          <Link to="/day-145" className="day001-nav-btn day001-nav-next">Day 145 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>Logging</span><span>Ops</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 144 <span aria-hidden="true">🪵</span></h1>
              <p className="day001-day-theme">LOGGING &amp; OBSERVABILITY</p>
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
          Day 144 opens the black box. <strong>Structured JSON logs</strong> (Pino),{' '}
          <strong>request IDs</strong>, safe redaction, <strong>/health</strong>, and a path to{' '}
          <strong>metrics/traces</strong> when logs alone are not enough.
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

        <CardSection icon="🪵" title="1 · STRUCTURED LOGS" cards={CORE} columns={3} />
        <CardSection icon="❤️" title="2 · HEALTH & NEXT" cards={OPS} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Express</span><span>#Pino</span><span>#Observability</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
