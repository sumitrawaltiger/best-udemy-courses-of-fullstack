import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend';
const DOCS_URL = 'https://github.com/goldbergyoni/nodebestpractices';

const LEARNT_TODAY = [
  {
    title: 'Bring it together',
    text: 'everything from Days 20–39 in one real project',
  },
  {
    title: 'Model the domain',
    text: 'schemas and relationships for the whole app',
  },
  {
    title: 'REST API',
    text: 'resources, express.Router, and controllers',
  },
  {
    title: 'Auth',
    text: 'register/login, JWT, roles, and protected routes',
  },
  {
    title: 'Validation & errors',
    text: 'schema validation and one central error handler',
  },
  {
    title: 'Files & real-time',
    text: 'Multer uploads plus a Socket.io channel',
  },
  {
    title: 'Pagination & caching',
    text: 'fast list endpoints backed by Redis',
  },
  {
    title: 'Tests',
    text: 'Jest + Supertest for the critical paths',
  },
  {
    title: 'Deploy',
    text: 'env config, a host, and MongoDB Atlas',
  },
  {
    title: 'Document',
    text: 'a clear README and API reference',
  },
];

const BUILD = [
  {
    icon: '🗂️',
    title: 'Domain & API',
    titleClass: 'card-title-cyan',
    subtitle: 'model + routes',
    description: 'Design the schemas and relationships, then a clean REST surface.',
    code: '/products  /users  /orders\nrouter + controllers per resource\nModel refs + populate where needed',
  },
  {
    icon: '🔐',
    title: 'Auth & Security',
    titleClass: 'card-title-green',
    subtitle: 'lock it down',
    description: 'JWT auth, RBAC guards, Helmet, CORS, and rate limiting.',
    code: 'app.use(helmet(), cors(), rateLimit());\napp.use("/admin", protect, requireRole("admin"));',
  },
  {
    icon: '🧯',
    title: 'Validation & Errors',
    titleClass: 'card-title-amber',
    subtitle: 'be predictable',
    description: 'Validate every input; funnel all errors to one handler.',
    code: 'schema.parse(req.body);            // 400 on bad input\napp.use(errorHandler);             // one exit for errors',
  },
];

const SHIP = [
  {
    icon: '📎',
    title: 'Files + Real-time',
    titleClass: 'card-title-cyan',
    subtitle: 'Multer + Socket.io',
    description: 'Upload media and push live updates over WebSockets.',
    code: 'upload.single("image");\nio.to(room).emit("update", payload);',
  },
  {
    icon: '⚡',
    title: 'Pagination + Cache',
    titleClass: 'card-title-green',
    subtitle: 'make it fast',
    description: 'Paginated list endpoints with a Redis cache layer.',
    code: '.skip((page-1)*limit).limit(limit)\nredis cache-aside on hot reads',
  },
  {
    icon: '🧪',
    title: 'Tests',
    titleClass: 'card-title-amber',
    subtitle: 'Jest + Supertest',
    description: 'Cover auth, CRUD, and the error paths.',
    code: 'request(app).post("/login")...\nexpect(res.status).toBe(200);',
  },
  {
    icon: '🚀',
    title: 'Deploy & Document',
    titleClass: 'card-title-pink',
    subtitle: 'ship it',
    description: 'Env config, a host, Atlas, a README, and an API reference.',
    code: 'pm2 start · Atlas · /health\nREADME + API docs',
  },
];

const RESOURCES = [
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend',
    description: 'The full Thunder backend — every piece assembled into one project.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Node Best Practices',
    titleClass: 'card-title-green',
    subtitle: 'the checklist',
    description: 'The community Node.js best-practices repo — structure, security, and more.',
    link: { href: DOCS_URL, label: 'Open the guide →', external: true },
  },
  {
    icon: '▶️',
    title: 'Full CRUD API Project',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'CRUD API Tutorial — Node, Express, MongoDB by freeCodeCamp — for the capstone.',
    link: {
      href: 'https://www.youtube.com/watch?v=_7UQPve99r4',
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

export default function Day040() {
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
          <Link to="/day-039" className="day001-nav-btn day001-nav-home">
            ← Day 39
          </Link>
          <p className="day001-datetime">Thunder Day 40 · 1 Sep 2026</p>
          <Link to="/day-041" className="day001-nav-btn day001-nav-next">
            Day 41 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Backend</span>
              <span>Capstone</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 40 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">BACKEND CAPSTONE PROJECT</p>
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
          <div className="day001-progress-bar" style={{ width: '40%' }} />
        </div>

        <p className="day001-summary">
          Day forty — the backend finale. I combined everything from Days 20–39 into one real
          project: a domain <strong>model</strong> with relationships, a clean <strong>REST API</strong>{' '}
          (Router + controllers), <strong>JWT auth</strong> with RBAC, <strong>validation</strong>{' '}
          and a central error handler, <strong>file uploads</strong> and <strong>real-time</strong>{' '}
          events, <strong>pagination + Redis caching</strong>, <strong>tests</strong>, and a full{' '}
          <strong>deploy</strong> with docs. That closes the Node/Express chapter of the Thunder
          course. Code in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend on GitHub
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

        <CardSection icon="🏗️" title="BUILD THE API" cards={BUILD} columns={3} />
        <CardSection icon="🚀" title="LEVEL UP & SHIP" cards={SHIP} columns={4} />
        <CardSection icon="📚" title="THUNDER BACKEND — FULL PROJECT" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#Capstone</span>
          <span>#Backend</span>
          <span>#NodeJS</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
