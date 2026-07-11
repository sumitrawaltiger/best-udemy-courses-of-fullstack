import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day11';
const DOCS_URL = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403';

const LEARNT_TODAY = [
  {
    title: 'AuthN vs AuthZ',
    text: 'authentication is who you are; authorization is what you may do',
  },
  {
    title: 'protect middleware',
    text: 'verify the JWT, attach req.user, or reject with 401',
  },
  {
    title: 'Bearer token',
    text: 'read it from the Authorization: Bearer <token> header',
  },
  {
    title: 'RBAC',
    text: 'role-based access control — user vs admin vs more',
  },
  {
    title: 'requireRole',
    text: 'a guard that returns 403 when the role is not allowed',
  },
  {
    title: 'Chained guards',
    text: 'app.get("/admin", protect, requireRole("admin"), handler)',
  },
  {
    title: '401 vs 403',
    text: '401 = not logged in; 403 = logged in but forbidden',
  },
  {
    title: 'Ownership checks',
    text: 'a user may edit only their own resource',
  },
  {
    title: 'Never trust the client',
    text: 'always re-check permissions on the server',
  },
  {
    title: 'Refresh tokens',
    text: 'short access token + a longer-lived refresh token',
  },
];

const PROTECT = [
  {
    icon: '🛂',
    title: 'protect Middleware',
    titleClass: 'card-title-cyan',
    subtitle: 'verify + attach',
    description: 'Verify the JWT, attach the user to req, or reject the request.',
    code: 'function protect(req, res, next) {\n  const token = req.headers.authorization?.split(" ")[1];\n  if (!token) return res.status(401).json({ error: "No token" });\n  req.user = jwt.verify(token, process.env.JWT_SECRET);\n  next();\n}',
  },
  {
    icon: '🎟️',
    title: 'Bearer Token',
    titleClass: 'card-title-green',
    subtitle: 'the header',
    description: 'Clients send the token in the Authorization header.',
    code: '// request header\nAuthorization: Bearer eyJhbGciOi...\n// server\nconst token = req.headers.authorization.split(" ")[1];',
  },
  {
    icon: '🚦',
    title: '401 vs 403',
    titleClass: 'card-title-amber',
    subtitle: 'which error?',
    description: 'Not authenticated is 401; authenticated but not allowed is 403.',
    code: '401 Unauthorized  → no / bad token (log in)\n403 Forbidden     → valid token, wrong role',
  },
];

const ROLES = [
  {
    icon: '🎭',
    title: 'Roles (RBAC)',
    titleClass: 'card-title-cyan',
    subtitle: 'user / admin',
    description: 'Store a role on the user; decide access from it.',
    code: 'role: { type: String, enum: ["user", "admin"], default: "user" }',
  },
  {
    icon: '🛡️',
    title: 'requireRole',
    titleClass: 'card-title-green',
    subtitle: '403 guard',
    description: 'A factory middleware that allows only the given roles.',
    code: 'const requireRole = (...roles) => (req, res, next) =>\n  roles.includes(req.user.role)\n    ? next()\n    : res.status(403).json({ error: "Forbidden" });',
  },
  {
    icon: '⛓️',
    title: 'Chain the Guards',
    titleClass: 'card-title-amber',
    subtitle: 'protect → role',
    description: 'Run authentication first, then the role check, then the handler.',
    code: 'app.delete("/users/:id",\n  protect,\n  requireRole("admin"),\n  deleteUser);',
  },
  {
    icon: '👤',
    title: 'Ownership',
    titleClass: 'card-title-pink',
    subtitle: 'your own data',
    description: 'Even with a valid token, users edit only what they own.',
    code: 'if (post.author.toString() !== req.user.id)\n  return res.status(403).json({ error: "Not yours" });',
  },
];

const RESOURCES = [
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day11',
    description: 'protect + requireRole middleware, chained guards, and ownership checks.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: '403 Forbidden — MDN',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'MDN on 403 Forbidden — when the server refuses an authorized action.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Role-Based Auth',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Node & Express Role-Based Authorization by Dipesh Malvia — for Day 30.',
    link: {
      href: 'https://www.youtube.com/watch?v=HHuiV841g_w',
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

export default function Day030() {
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
          <Link to="/day-029" className="day001-nav-btn day001-nav-home">
            ← Day 29
          </Link>
          <p className="day001-datetime">Thunder Day 30 · 3 Aug 2026</p>
          <Link to="/day-031" className="day001-nav-btn day001-nav-next">
            Day 31 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Node.js</span>
              <span>Security</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 30 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">AUTHORIZATION & PROTECTED ROUTES</p>
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
          <div className="day001-progress-bar" style={{ width: '30%' }} />
        </div>

        <p className="day001-summary">
          Day thirty — authentication proves <em>who</em> you are;{' '}
          <strong>authorization</strong> decides <em>what</em> you may do. A{' '}
          <code>protect</code> middleware verifies the <strong>Bearer</strong> token and attaches{' '}
          <code>req.user</code>; a <code>requireRole</code> guard enforces{' '}
          <strong>RBAC</strong> and returns <code>403</code> when the role is wrong. I chained the
          two on protected routes, added <strong>ownership</strong> checks, and kept the rule: never
          trust the client. Code in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day11 on GitHub
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

        <CardSection icon="🛂" title="PROTECTING ROUTES" cards={PROTECT} columns={3} />
        <CardSection icon="🎭" title="ROLES & ACCESS" cards={ROLES} columns={4} />
        <CardSection icon="📚" title="THUNDER BACKEND DAY 11" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#Authorization</span>
          <span>#RBAC</span>
          <span>#Backend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
