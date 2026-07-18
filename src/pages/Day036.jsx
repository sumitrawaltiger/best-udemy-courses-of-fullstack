import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day17';
const DOCS_URL =
  'https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html';

const LEARNT_TODAY = [
  {
    title: 'Helmet',
    text: 'sets secure HTTP response headers in one line',
  },
  {
    title: 'CORS',
    text: 'control exactly which origins may call your API',
  },
  {
    title: 'Rate limiting',
    text: 'throttle abusive clients before they overwhelm you',
  },
  {
    title: 'Sanitize input',
    text: 'block NoSQL injection and XSS from request data',
  },
  {
    title: 'HTTPS',
    text: 'encrypt everything in transit — no plaintext',
  },
  {
    title: 'Secrets in .env',
    text: 'keys and tokens never live in the codebase',
  },
  {
    title: 'Hash passwords',
    text: 'bcrypt — never store or log a raw password',
  },
  {
    title: 'Least privilege',
    text: 'scoped DB users and narrowly-scoped tokens',
  },
  {
    title: 'Hide errors',
    text: 'no stack traces or internals in production responses',
  },
  {
    title: 'Audit deps',
    text: 'npm audit to catch vulnerable packages',
  },
];

const HARDEN = [
  {
    icon: '⛑️',
    title: 'Helmet',
    titleClass: 'card-title-cyan',
    subtitle: 'secure headers',
    description: 'One middleware sets a dozen safe HTTP headers.',
    code: 'import helmet from "helmet";\napp.use(helmet());\n// CSP, HSTS, X-Frame-Options, ...',
  },
  {
    icon: '🌐',
    title: 'CORS',
    titleClass: 'card-title-green',
    subtitle: 'who can call',
    description: 'Allow only the origins you trust — not "*" in production.',
    code: 'import cors from "cors";\napp.use(cors({ origin: "https://app.example.com" }));',
  },
  {
    icon: '🚦',
    title: 'Rate Limiting',
    titleClass: 'card-title-amber',
    subtitle: 'throttle abuse',
    description: 'Cap requests per IP per window to blunt brute-force and DoS.',
    code: 'import rateLimit from "express-rate-limit";\napp.use(rateLimit({ windowMs: 60_000, max: 100 }));',
  },
];

const GUARD = [
  {
    icon: '🧼',
    title: 'Sanitize Input',
    titleClass: 'card-title-cyan',
    subtitle: 'injection & XSS',
    description: 'Strip Mongo operators and script tags from user data.',
    code: 'import mongoSanitize from "express-mongo-sanitize";\napp.use(mongoSanitize()); // blocks { "$gt": "" }',
  },
  {
    icon: '🔐',
    title: 'HTTPS & Secrets',
    titleClass: 'card-title-green',
    subtitle: 'encrypt + hide',
    description: 'TLS in transit; keys in the environment, never in git.',
    code: '// .env (gitignored)\nJWT_SECRET=...\nDB_URI=...\n// terminate TLS at the proxy / host',
  },
  {
    icon: '🎯',
    title: 'Least Privilege',
    titleClass: 'card-title-amber',
    subtitle: 'minimal access',
    description: 'Scoped DB users and short-lived, narrowly-scoped tokens.',
    code: '// DB user can read/write one database, not admin\n// tokens: short expiry + only needed claims',
  },
  {
    icon: '🔎',
    title: 'Audit Dependencies',
    titleClass: 'card-title-pink',
    subtitle: 'npm audit',
    description: 'Most breaches ride in through a vulnerable package.',
    code: 'npm audit\nnpm audit fix\n// keep deps patched',
  },
];

const RESOURCES = [
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day17',
    description: 'Helmet, CORS, rate limiting, sanitization, and secret management.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'OWASP Node Cheat Sheet',
    titleClass: 'card-title-green',
    subtitle: 'Official guide',
    description: 'The OWASP Node.js security cheat sheet — the definitive checklist.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Node Security',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Node.js Security Best Practices by Software Developer Diaries — for Day 36.',
    link: {
      href: 'https://www.youtube.com/watch?v=DYme1m4RiwI',
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

export default function Day036() {
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
          <Link to="/day-035" className="day001-nav-btn day001-nav-home">
            ← Day 35
          </Link>
          <p className="day001-datetime">Thunder Day 36</p>
          <Link to="/day-037" className="day001-nav-btn day001-nav-next">
            Day 37 →
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
                DAY 36 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">API SECURITY BEST PRACTICES</p>
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
          <div className="day001-progress-bar" style={{ width: '36%' }} />
        </div>

        <p className="day001-summary">
          Day thirty-six — a public API is under attack from minute one, so I hardened it.{' '}
          <strong>Helmet</strong> sets safe headers, <strong>CORS</strong> restricts callers, and a{' '}
          <strong>rate limiter</strong> blunts brute-force. I sanitized input against{' '}
          <strong>NoSQL injection & XSS</strong>, moved every secret into <code>.env</code>, enforced{' '}
          <strong>HTTPS</strong> and <strong>least privilege</strong>, hid internal errors in
          production, and ran <code>npm audit</code>. Code in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day17 on GitHub
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

        <CardSection icon="⛑️" title="HARDEN THE APP" cards={HARDEN} columns={3} />
        <CardSection icon="🛡️" title="GUARD THE DATA" cards={GUARD} columns={4} />
        <CardSection icon="📚" title="THUNDER BACKEND DAY 17" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#Security</span>
          <span>#API</span>
          <span>#Backend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
