import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day20';
const DOCS_URL = 'https://expressjs.com/en/advanced/best-practice-performance.html';

const LEARNT_TODAY = [
  {
    title: 'Env config',
    text: 'NODE_ENV, PORT and secrets differ per environment',
  },
  {
    title: 'process.env',
    text: 'read all config from the environment, not the code',
  },
  {
    title: 'start script',
    text: 'npm start runs the production entry point',
  },
  {
    title: 'Process manager',
    text: 'PM2 restarts crashes and runs on every core',
  },
  {
    title: 'Reverse proxy',
    text: 'Nginx terminates TLS and forwards to Node',
  },
  {
    title: 'Hosting',
    text: 'Render, Railway, Vercel, or an EC2 box',
  },
  {
    title: 'Managed DB',
    text: 'MongoDB Atlas instead of a local database',
  },
  {
    title: 'Health check',
    text: 'a /health route the platform can ping',
  },
  {
    title: 'Logs',
    text: 'structured, centralized logging in production',
  },
  {
    title: 'TLS & domain',
    text: 'HTTPS certificate and a custom domain',
  },
];

const READY = [
  {
    icon: '⚙️',
    title: 'Env Config',
    titleClass: 'card-title-cyan',
    subtitle: 'per environment',
    description: 'Everything that changes between dev and prod comes from env vars.',
    code: 'const PORT = process.env.PORT || 3000;\nconst DB = process.env.DB_URI;\n// dev .env vs the host\'s config panel',
  },
  {
    icon: '📜',
    title: 'Scripts',
    titleClass: 'card-title-green',
    subtitle: 'build & start',
    description: 'A clean start script is the production entry point.',
    code: '"scripts": {\n  "start": "node src/server.js",\n  "dev": "nodemon src/server.js"\n}',
  },
  {
    icon: '❤️',
    title: 'Health Check',
    titleClass: 'card-title-amber',
    subtitle: '/health',
    description: 'A tiny endpoint the platform pings to know you are alive.',
    code: 'app.get("/health", (req, res) => res.json({ status: "ok" }));',
  },
];

const SHIP = [
  {
    icon: '🔁',
    title: 'Process Manager',
    titleClass: 'card-title-cyan',
    subtitle: 'PM2',
    description: 'Keeps the app running, restarts on crash, uses all cores.',
    code: 'pm2 start src/server.js -i max --name api\npm2 startup && pm2 save',
  },
  {
    icon: '🚪',
    title: 'Reverse Proxy',
    titleClass: 'card-title-green',
    subtitle: 'Nginx',
    description: 'Terminate TLS and forward traffic to the Node process.',
    code: 'location / {\n  proxy_pass http://localhost:3000;\n}',
  },
  {
    icon: '☁️',
    title: 'Hosting',
    titleClass: 'card-title-amber',
    subtitle: 'pick a platform',
    description: 'PaaS (Render/Railway/Vercel) or a VM (EC2) you manage.',
    code: '// PaaS: push to git -> auto build & deploy\n// VM: pull code, npm ci, pm2 restart',
  },
  {
    icon: '🍃',
    title: 'Managed DB',
    titleClass: 'card-title-pink',
    subtitle: 'Atlas',
    description: 'Let a managed service run, back up, and scale the database.',
    code: 'DB_URI=mongodb+srv://user:pass@cluster.mongodb.net/app',
  },
];

const RESOURCES = [
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day20',
    description: 'Env config, PM2, an Nginx proxy, a health check, and Atlas.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Express in Production',
    titleClass: 'card-title-green',
    subtitle: 'Official guide',
    description: 'Express performance & production best practices — the official checklist.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Deploy a Node API',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Node.js Express Deployment — quick and easy — supplement for Day 39.',
    link: {
      href: 'https://www.youtube.com/watch?v=IeM1PGqmJT4',
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

export default function Day039() {
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
          <Link to="/day-038" className="day001-nav-btn day001-nav-home">
            ← Day 38
          </Link>
          <p className="day001-datetime">Thunder Day 39 · 24 Aug 2026</p>
          <Link to="/day-040" className="day001-nav-btn day001-nav-next">
            Day 40 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Node.js</span>
              <span>Deployment</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 39 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">DEPLOYING A NODE API</p>
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
          <div className="day001-progress-bar" style={{ width: '39%' }} />
        </div>

        <p className="day001-summary">
          Day thirty-nine — an API on localhost helps no one, so I shipped it. All config moves to{' '}
          <strong>environment variables</strong> read via <code>process.env</code>, a clean{' '}
          <code>start</code> script and a <code>/health</code> route make it deployable, and{' '}
          <strong>PM2</strong> keeps it alive across crashes and cores. An <strong>Nginx</strong>{' '}
          reverse proxy fronts it with TLS, a <strong>host</strong> (Render/Railway/EC2) runs it, and{' '}
          <strong>MongoDB Atlas</strong> is the managed database. Code in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day20 on GitHub
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

        <CardSection icon="🧰" title="GET READY" cards={READY} columns={3} />
        <CardSection icon="🚀" title="SHIP IT" cards={SHIP} columns={4} />
        <CardSection icon="📚" title="THUNDER BACKEND DAY 20" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#Deployment</span>
          <span>#DevOps</span>
          <span>#Backend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
