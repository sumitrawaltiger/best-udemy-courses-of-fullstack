import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day10';
const DOCS_URL = 'https://jwt.io/introduction';

const LEARNT_TODAY = [
  {
    title: 'Authentication',
    text: 'proving who a user is — the front door of every secure API',
  },
  {
    title: 'Never store plaintext',
    text: 'passwords are hashed, never saved as-is',
  },
  {
    title: 'bcrypt',
    text: 'bcrypt.hash is one-way and salted; bcrypt.compare verifies',
  },
  {
    title: 'Register',
    text: 'hash the password, then save the user',
  },
  {
    title: 'Login',
    text: 'find the user, compare the password hash',
  },
  {
    title: 'JWT',
    text: 'a signed token carrying the user id — no server-side session',
  },
  {
    title: 'jwt.sign',
    text: 'issue a token with a secret and an expiry',
  },
  {
    title: 'jwt.verify',
    text: 'check the signature on every protected request',
  },
  {
    title: 'Stateless auth',
    text: 'the token IS the session — HTTP remembers nothing',
  },
  {
    title: 'Secrets in .env',
    text: 'keep JWT_SECRET out of code with dotenv',
  },
];

const PASSWORDS = [
  {
    icon: '🚫',
    title: 'Never Store Plaintext',
    titleClass: 'card-title-cyan',
    subtitle: 'hash it',
    description: 'A leaked database must never reveal real passwords — hash before saving.',
    code: '// ❌ never\nuser.password = req.body.password;\n// ✅ hash first\nuser.password = await bcrypt.hash(req.body.password, 10);',
  },
  {
    icon: '🧂',
    title: 'bcrypt',
    titleClass: 'card-title-green',
    subtitle: 'salted + one-way',
    description: 'bcrypt adds a salt and is one-way; you can only compare, not reverse.',
    code: 'const hash = await bcrypt.hash(password, 10);\nconst ok = await bcrypt.compare(password, hash); // true/false',
  },
  {
    icon: '🔑',
    title: 'Register & Login',
    titleClass: 'card-title-amber',
    subtitle: 'the two flows',
    description: 'Register hashes and saves; login finds the user and compares.',
    code: '// login\nconst user = await User.findOne({ email });\nif (!user || !(await bcrypt.compare(password, user.password)))\n  return res.status(401).json({ error: "Invalid credentials" });',
  },
];

const JWT = [
  {
    icon: '🎫',
    title: 'What is a JWT',
    titleClass: 'card-title-cyan',
    subtitle: 'header.payload.signature',
    description: 'A signed, base64 token — the payload holds claims like the user id.',
    code: '// xxxxx.yyyyy.zzzzz\n// header  . payload . signature\n// payload: { id: "665f...", iat, exp }',
  },
  {
    icon: '✍️',
    title: 'Sign a Token',
    titleClass: 'card-title-green',
    subtitle: 'jwt.sign',
    description: 'On login, sign a token with the secret and an expiry.',
    code: 'const token = jwt.sign(\n  { id: user._id },\n  process.env.JWT_SECRET,\n  { expiresIn: "1d" }\n);',
  },
  {
    icon: '🔍',
    title: 'Verify a Token',
    titleClass: 'card-title-amber',
    subtitle: 'jwt.verify',
    description: 'Middleware verifies the token on each request and attaches the user.',
    code: 'const token = req.headers.authorization?.split(" ")[1];\nconst payload = jwt.verify(token, process.env.JWT_SECRET);\nreq.user = payload; // { id, iat, exp }',
  },
  {
    icon: '📄',
    title: 'Secret in .env',
    titleClass: 'card-title-pink',
    subtitle: 'dotenv',
    description: 'The signing secret lives in the environment, never in source.',
    code: '// .env\nJWT_SECRET=super-long-random-string\n// code\nrequire("dotenv").config();',
  },
];

const RESOURCES = [
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day10',
    description: 'Register/login with bcrypt hashing and JWT issuing & verifying.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'JWT Introduction',
    titleClass: 'card-title-green',
    subtitle: 'jwt.io',
    description: 'The official introduction to JSON Web Tokens — structure and claims.',
    link: { href: DOCS_URL, label: 'Read on jwt.io →', external: true },
  },
  {
    icon: '▶️',
    title: 'JWT Authentication',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'JWT Authentication Tutorial (Node.js) by Web Dev Simplified — for Day 29.',
    link: {
      href: 'https://www.youtube.com/watch?v=mbsmsi7l3r4',
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

export default function Day029() {
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
          <Link to="/day-028" className="day001-nav-btn day001-nav-home">
            ← Day 28
          </Link>
          <p className="day001-datetime">Thunder Day 29 · 14 Aug 2026</p>
          <Link to="/day-030" className="day001-nav-btn day001-nav-next">
            Day 30 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Node.js</span>
              <span>Auth</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 29 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">AUTHENTICATION — HASHING & JWT</p>
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
          <div className="day001-progress-bar" style={{ width: '29%' }} />
        </div>

        <p className="day001-summary">
          Day twenty-nine — an open API is a liability, so I added <strong>authentication</strong>.
          Passwords are never stored in plain text — <strong>bcrypt</strong> hashes them one-way with
          a salt, and <code>bcrypt.compare</code> checks a login. Once verified, I issue a{' '}
          <strong>JWT</strong> — a signed token carrying the user id — with <code>jwt.sign</code>,
          and verify it on every protected request with <code>jwt.verify</code>. Because HTTP is
          stateless, the token is the session. Code in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day10 on GitHub
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

        <CardSection icon="🔒" title="HASHING PASSWORDS" cards={PASSWORDS} columns={3} />
        <CardSection icon="🎫" title="JSON WEB TOKENS" cards={JWT} columns={4} />
        <CardSection icon="📚" title="THUNDER BACKEND DAY 10" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#Auth</span>
          <span>#JWT</span>
          <span>#Backend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
