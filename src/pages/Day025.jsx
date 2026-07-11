import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture-06-Express-and-middleware-39943ac5cab980d19823df367d602eeb?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day06';

const LEARNT_TODAY = [
  {
    title: 'Express',
    text: 'a backend framework for Node — build APIs with almost no boilerplate',
  },
  {
    title: 'req & res',
    text: 'read incoming data from req, send data back with res',
  },
  {
    title: 'Route = method + path',
    text: 'GET /user and POST /user are two different routes',
  },
  {
    title: 'Route params',
    text: '/user/:id → req.params — the exact identity of one resource',
  },
  {
    title: 'Query params',
    text: 'req.query — filter, search, sort and pagination',
  },
  {
    title: 'Route order',
    text: 'specific before dynamic — /users/admin before /users/:id',
  },
  {
    title: 'Middleware',
    text: 'a function that runs between the request and the route handler',
  },
  {
    title: 'next()',
    text: 'passes control onward — forget it and the request hangs',
  },
  {
    title: 'app.use',
    text: 'registers middleware for all methods and a path + everything under it',
  },
  {
    title: 'express.json()',
    text: 'built-in middleware that parses a JSON body onto req.body',
  },
];

const ROUTES = [
  {
    icon: '🚀',
    title: 'First Server',
    titleClass: 'card-title-cyan',
    subtitle: 'app.get + listen',
    description: 'Create the app, define a route, start it — a working server.',
    code: 'const app = express();\napp.get("/", (req, res) => res.send("Hello"));\napp.listen(3000);',
  },
  {
    icon: '🛣️',
    title: 'Method + Path',
    titleClass: 'card-title-green',
    subtitle: 'a route',
    description: 'Same path, different method = a different route entirely.',
    code: 'app.get("/user", handlerA);   // GET /user\napp.post("/user", handlerB);  // POST /user',
  },
  {
    icon: '🔗',
    title: 'Route Params',
    titleClass: 'card-title-amber',
    subtitle: 'exact resource',
    description: ':id makes one segment dynamic — read it from req.params.',
    code: 'app.get("/user/:id", (req, res) => {\n  res.json({ id: req.params.id });\n});',
  },
  {
    icon: '🔍',
    title: 'Query Params',
    titleClass: 'card-title-pink',
    subtitle: 'filter / sort',
    description: 'Optional refinement after "?" — read from req.query.',
    code: '// /search?city=delhi&role=admin\nconst { city, role } = req.query;',
  },
];

const MIDDLEWARE = [
  {
    icon: '⚙️',
    title: 'What is Middleware',
    titleClass: 'card-title-cyan',
    subtitle: '(req, res, next)',
    description: 'Runs between request and handler — call next() to pass control.',
    code: 'function logger(req, res, next) {\n  console.log(req.method, req.url);\n  next();\n}',
  },
  {
    icon: '🔌',
    title: 'app.use',
    titleClass: 'card-title-green',
    subtitle: 'register it',
    description: 'Runs for all methods, a path and everything under it — before routes.',
    code: 'app.use(logger);            // every request\napp.use("/admin", checkAuth); // /admin branch',
  },
  {
    icon: '📦',
    title: 'express.json()',
    titleClass: 'card-title-amber',
    subtitle: 'parse the body',
    description: 'Built-in middleware — populates req.body from a JSON payload.',
    code: 'app.use(express.json());\napp.post("/user", (req, res) => {\n  res.status(201).json(req.body);\n});',
  },
  {
    icon: '🛡️',
    title: 'Protect & Limit',
    titleClass: 'card-title-pink',
    subtitle: 'auth + rate limit',
    description: 'Middleware is the home for auth checks and rate limiting.',
    code: 'function auth(req, res, next) {\n  if (!req.headers.authorization)\n    return res.status(401).json({ error: "no" });\n  next();\n}',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 06 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Express & Middleware',
    description: 'Routes, route/query params, route order, middleware, app.use and express.json().',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day06',
    description: 'A Product API in Express — routes, params, middleware and JSON responses.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'Express Middleware',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Learn Express Middleware in 14 minutes — Web Dev Simplified, supplement for Day 25.',
    link: {
      href: 'https://www.youtube.com/watch?v=lY6icfhap2o',
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

export default function Day025() {
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
        1,
        (window.innerHeight - pad) / wrap.scrollHeight,
        (window.innerWidth - pad) / wrap.scrollWidth,
      );

      if (scale < 0.99) {
        wrap.style.transform = `scale(${scale})`;
        wrap.style.transformOrigin = 'top center';
        if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
      }
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
          <Link to="/day-024" className="day001-nav-btn day001-nav-home">
            ← Day 24
          </Link>
          <p className="day001-datetime">Thunder Day 25 · 29 Jul 2026</p>
          <Link to="/day-026" className="day001-nav-btn day001-nav-next">
            Day 26 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Express</span>
              <span>Middleware</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 25 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">EXPRESS & MIDDLEWARE</p>
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
          <div className="day001-progress-bar" style={{ width: '25%' }} />
        </div>

        <p className="day001-summary">
          Day twenty-five — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 06
          </a>
          . Express is a <strong>pipeline</strong>: a request flows through middleware, into the
          matching route handler, then out as a response. I learned routes as{' '}
          <code>method + path</code>, <code>req.params</code> for exact resources vs{' '}
          <code>req.query</code> for filters, why route order matters, and{' '}
          <strong>middleware</strong> — <code>(req, res, next)</code>, <code>app.use</code>,{' '}
          <code>express.json()</code>, and auth/rate-limit guards. Product API in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day06 on GitHub
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

        <CardSection icon="🛣️" title="ROUTES & PARAMS" cards={ROUTES} columns={4} />
        <CardSection icon="⚙️" title="MIDDLEWARE" cards={MIDDLEWARE} columns={4} />
        <CardSection icon="📚" title="THUNDER BACKEND DAY 06" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#Express</span>
          <span>#Middleware</span>
          <span>#Backend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
