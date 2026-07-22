import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const EXPRESS_ERR = 'https://expressjs.com/en/guide/error-handling.html';
const ASYNC_ERRORS = 'https://expressjs.com/en/guide/error-handling.html#catching-errors';
const PROBLEM_JSON = 'https://datatracker.ietf.org/doc/html/rfc7807';

const LEARNT_TODAY = [
  { title: 'Central error middleware', text: 'one (err, req, res, next) handler maps every failure to a JSON response' },
  { title: 'Async wrappers', text: 'wrap async route handlers so rejected promises call next(err)' },
  { title: 'AppError class', text: 'throw typed errors with statusCode and a safe public message' },
  { title: 'Do not leak stacks', text: 'log the stack server-side; never send it to clients in production' },
  { title: 'next(err)', text: 'pass errors to Express instead of try/catch in every handler' },
  { title: '404 vs 500', text: 'missing resource → 404; unexpected bugs → 500 with a generic message' },
  { title: 'Consistent payload', text: '{ error, message, details? } so every client handles failures the same way' },
  { title: 'Zod → AppError', text: 'validation failures become 400 AppErrors inside the same pipeline' },
  { title: 'Observability start', text: 'structured logs (method, path, status, err.message) make debugging possible' },
];

const CORE = [
  {
    icon: '🧯', title: 'Error Middleware', titleClass: 'card-title-cyan', subtitle: 'Four Arguments',
    description: 'Express recognizes middleware with (err, req, res, next). Mount it last. Map known AppErrors to their status; everything else becomes 500.',
    code: 'app.use((err, req, res, next) => {\n  const status = err.statusCode || 500;\n  console.error(err);\n  res.status(status).json({\n    error: err.code || "internal_error",\n    message: status === 500 ? "Something went wrong" : err.message,\n  });\n});',
  },
  {
    icon: '🧵', title: 'Async Wrapper', titleClass: 'card-title-purple', subtitle: 'Catch Rejections',
    description: 'Express does not catch async throws unless you forward them. A tiny wrap(fn) keeps handlers clean.',
    code: 'const wrap = (fn) => (req, res, next) =>\n  Promise.resolve(fn(req, res, next)).catch(next);\n\napp.get("/tasks/:id", wrap(async (req, res) => {\n  const task = await findTask(req.params.id);\n  if (!task) throw new AppError(404, "Task not found");\n  res.json(task);\n}));',
  },
  {
    icon: '🏷️', title: 'AppError', titleClass: 'card-title-amber', subtitle: 'Typed Failures',
    description: 'A small class carries statusCode and an optional code string. Handlers throw; middleware formats.',
    code: 'class AppError extends Error {\n  constructor(statusCode, message, code = "app_error") {\n    super(message);\n    this.statusCode = statusCode;\n    this.code = code;\n  }\n}',
  },
];

const POLISH = [
  {
    icon: '📜', title: 'Log, Don’t Leak', titleClass: 'card-title-cyan', subtitle: 'Prod Safe',
    description: 'console.error or a logger gets the full error. Clients get a short message. Stack traces are for you, not attackers.',
    code: '// prod: message only\n// dev:  optionally include stack',
  },
  {
    icon: '🧭', title: '404 Handler', titleClass: 'card-title-purple', subtitle: 'Unknown Routes',
    description: 'After all routes, throw or next() an AppError(404) so unknown paths use the same JSON shape.',
    code: 'app.use((req, res, next) => {\n  next(new AppError(404, `Cannot ${req.method} ${req.path}`));\n});',
  },
  {
    icon: '📐', title: 'One Error Shape', titleClass: 'card-title-amber', subtitle: 'Predictable Clients',
    description: 'Always { error, message, details? }. Mobile and web UIs can share one error parser.',
    code: '{ "error": "not_found", "message": "Task not found" }',
  },
  {
    icon: '🔜', title: 'Next: API Security', titleClass: 'card-title-lime', subtitle: 'Day 134 Preview',
    description: 'Tomorrow: helmet, CORS, rate limiting, and hardening headers before the API goes public.',
    link: { href: '/day-134', label: 'Go to Day 134 →' },
  },
];

const RESOURCES = [
  {
    icon: '🧯', title: 'Express Error Handling', titleClass: 'card-title-cyan', subtitle: 'Guide',
    description: 'Default error handler, writing your own, and catching errors.',
    link: { href: EXPRESS_ERR, label: 'Read error-handling guide →', external: true },
  },
  {
    icon: '🧵', title: 'Catching Errors', titleClass: 'card-title-purple', subtitle: 'Async',
    description: 'How Express expects you to forward async failures with next(err).',
    link: { href: ASYNC_ERRORS, label: 'Read catching errors →', external: true },
  },
  {
    icon: '📐', title: 'Problem Details', titleClass: 'card-title-amber', subtitle: 'RFC 7807',
    description: 'Optional standard for HTTP API problem responses — useful inspiration for error JSON.',
    link: { href: PROBLEM_JSON, label: 'Read RFC 7807 →', external: true },
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

export default function Day133() {
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
          <Link to="/day-132" className="day001-nav-btn day001-nav-prev">← Day 132</Link>
          <p className="day001-datetime">Express Day 133</p>
          <Link to="/day-134" className="day001-nav-btn day001-nav-next">Day 134 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>Errors</span><span>Async</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 133 <span aria-hidden="true">🧯</span></h1>
              <p className="day001-day-theme">ERROR HANDLING</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '37%' }} /></div>

        <p className="day001-summary">
          Day 133 centralizes failure. An <strong>AppError</strong> class, an{' '}
          <strong>async wrapper</strong>, and a final <strong>error middleware</strong> turn every throw
          into consistent JSON — without leaking stacks to clients.
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

        <CardSection icon="🧯" title="1 · ERROR PIPELINE" cards={CORE} columns={3} />
        <CardSection icon="📜" title="2 · SAFE RESPONSES" cards={POLISH} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Express</span><span>#ErrorHandling</span><span>#API</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
