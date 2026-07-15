import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day12';
const DOCS_URL = 'https://expressjs.com/en/guide/error-handling.html';

const LEARNT_TODAY = [
  {
    title: 'Validate input',
    text: 'never trust req.body, req.params or req.query',
  },
  {
    title: 'Schema validation',
    text: 'Zod / Joi / express-validator check shape before logic runs',
  },
  {
    title: '400 on bad input',
    text: 'reject invalid requests with a clear message',
  },
  {
    title: 'Mongoose rules',
    text: 'required, enum, min/max and match guard at the DB layer too',
  },
  {
    title: 'try / catch',
    text: 'wrap every async handler so errors do not crash the server',
  },
  {
    title: 'Central error handler',
    text: 'one (err, req, res, next) middleware — four args make it special',
  },
  {
    title: 'Custom error class',
    text: 'carry a statusCode with the message',
  },
  {
    title: 'next(err)',
    text: 'forward an error to the central handler',
  },
  {
    title: 'Do not leak internals',
    text: 'a generic 500 message in production, details only in logs',
  },
  {
    title: 'dotenv',
    text: 'load config and secrets from .env, keep them out of git',
  },
];

const VALIDATION = [
  {
    icon: '🧪',
    title: 'Never Trust Input',
    titleClass: 'card-title-cyan',
    subtitle: 'validate first',
    description: 'Every field from the client is untrusted until you validate it.',
    code: '// missing / wrong-typed fields, injection, huge payloads\n// -> validate before touching the database',
  },
  {
    icon: '📋',
    title: 'Schema Validation',
    titleClass: 'card-title-green',
    subtitle: 'Zod / Joi',
    description: 'Declare the expected shape; parse and reject bad input with 400.',
    code: 'const schema = z.object({\n  email: z.string().email(),\n  age: z.number().min(0),\n});\nconst result = schema.safeParse(req.body);\nif (!result.success) return res.status(400).json(result.error);',
  },
  {
    icon: '🛢️',
    title: 'Mongoose Rules',
    titleClass: 'card-title-amber',
    subtitle: 'DB-layer guard',
    description: 'Schema validation is a second line of defence at the database.',
    code: 'email: { type: String, required: true, match: /@/ }\nage:   { type: Number, min: 0 }',
  },
];

const ERRORS = [
  {
    icon: '🧯',
    title: 'try / catch',
    titleClass: 'card-title-cyan',
    subtitle: 'catch async',
    description: 'Wrap async handlers and forward errors with next(err).',
    code: 'app.get("/x", async (req, res, next) => {\n  try { /* ... */ }\n  catch (err) { next(err); }\n});',
  },
  {
    icon: '🎯',
    title: 'Central Handler',
    titleClass: 'card-title-green',
    subtitle: '4 args',
    description: 'One error middleware (four params) catches everything, last.',
    code: 'app.use((err, req, res, next) => {\n  res.status(err.statusCode || 500)\n     .json({ error: err.message });\n});',
  },
  {
    icon: '🏷️',
    title: 'Custom Error',
    titleClass: 'card-title-amber',
    subtitle: 'status + message',
    description: 'A small class carries the HTTP status with the message.',
    code: 'class AppError extends Error {\n  constructor(msg, status) { super(msg); this.statusCode = status; }\n}\nthrow new AppError("Not found", 404);',
  },
  {
    icon: '📄',
    title: 'dotenv & Config',
    titleClass: 'card-title-pink',
    subtitle: '.env',
    description: 'Keep secrets and config in .env — never commit them.',
    code: 'require("dotenv").config();\nconst port = process.env.PORT || 3000;\n// .gitignore -> .env',
  },
];

const RESOURCES = [
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day12',
    description: 'Input validation, a central error handler, a custom error class, and dotenv.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Express Error Handling',
    titleClass: 'card-title-green',
    subtitle: 'Official guide',
    description: 'The official Express guide to writing error-handling middleware.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Error Handling in Express',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Error Handling in Express.js — the Ultimate Guide by CodeLucky — for Day 31.',
    link: {
      href: 'https://www.youtube.com/watch?v=-OjIF9Zympo',
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

export default function Day031() {
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
          <Link to="/day-030" className="day001-nav-btn day001-nav-home">
            ← Day 30
          </Link>
          <p className="day001-datetime">Thunder Day 31 · 16 Aug 2026</p>
          <Link to="/day-032" className="day001-nav-btn day001-nav-next">
            Day 32 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Node.js</span>
              <span>Reliability</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 31 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">VALIDATION & ERROR HANDLING</p>
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
          <div className="day001-progress-bar" style={{ width: '31%' }} />
        </div>

        <p className="day001-summary">
          Day thirty-one — a real API assumes every request is hostile. I{' '}
          <strong>validate</strong> input with a schema (Zod/Joi) and reject bad data with{' '}
          <code>400</code>, backed by Mongoose schema rules at the database. Then I made errors
          predictable: every async handler is wrapped in <code>try/catch</code> that calls{' '}
          <code>next(err)</code>, a single <strong>central error middleware</strong> formats the
          response, and a custom <code>AppError</code> carries the status code. Config and secrets
          live in <code>.env</code> via <strong>dotenv</strong>. Code in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day12 on GitHub
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

        <CardSection icon="🧪" title="VALIDATION" cards={VALIDATION} columns={3} />
        <CardSection icon="🧯" title="ERROR HANDLING" cards={ERRORS} columns={4} />
        <CardSection icon="📚" title="THUNDER BACKEND DAY 12" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#Validation</span>
          <span>#ErrorHandling</span>
          <span>#Backend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
