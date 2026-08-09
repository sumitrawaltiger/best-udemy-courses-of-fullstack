import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ATLAS_URL = 'https://www.mongodb.com/docs/atlas/';
const HOST_URL = 'https://render.com/docs/deploy-node-express-app';

const LEARNT_TODAY = [
  {
    title: 'Two deploys',
    text: 'a static frontend and a running backend server',
  },
  {
    title: 'Backend host',
    text: 'Render / Railway / Fly runs the Node API',
  },
  {
    title: 'Managed DB',
    text: 'MongoDB Atlas in the cloud',
  },
  {
    title: 'Env vars',
    text: 'secrets go in the host’s dashboard, not git',
  },
  {
    title: 'CORS',
    text: 'allow the deployed frontend origin',
  },
  {
    title: 'Frontend host',
    text: 'Netlify / Vercel serves the built app',
  },
  {
    title: 'Point to prod',
    text: 'set the API base URL to the live backend',
  },
  {
    title: 'HTTPS',
    text: 'automatic TLS on both ends',
  },
  {
    title: 'Monitor',
    text: 'health checks and logs after launch',
  },
  {
    title: 'CI/CD',
    text: 'auto-deploy both on every git push',
  },
];

const BACKEND = [
  {
    icon: '☁️',
    title: 'Backend Host',
    titleClass: 'card-title-cyan',
    subtitle: 'run the API',
    description: 'Deploy the Node/Express server to a PaaS.',
    code: '// Render / Railway / Fly\nbuild: npm ci\nstart: node src/server.js',
  },
  {
    icon: '🍃',
    title: 'Managed DB',
    titleClass: 'card-title-green',
    subtitle: 'Atlas',
    description: 'Use a managed MongoDB cluster instead of local.',
    code: 'DB_URI=mongodb+srv://user:pass@cluster.mongodb.net/app',
  },
  {
    icon: '🔑',
    title: 'Env + CORS',
    titleClass: 'card-title-amber',
    subtitle: 'config',
    description: 'Set secrets in the dashboard; allow the frontend origin.',
    code: 'JWT_SECRET, DB_URI in host env\napp.use(cors({ origin: FRONTEND_URL }))',
  },
  {
    icon: '🔧',
    title: 'Build / Start',
    titleClass: 'card-title-pink',
    subtitle: 'commands',
    description: 'Define install, build, and start commands for the host.',
    code: 'install: npm ci\nstart:   npm start   // + /health route',
  },
];

const FRONTEND = [
  {
    icon: '🌐',
    title: 'Frontend Host',
    titleClass: 'card-title-cyan',
    subtitle: 'static',
    description: 'Deploy the built React app to a static host.',
    code: 'build: npm run build\npublish: dist/   (Netlify / Vercel)',
  },
  {
    icon: '🔗',
    title: 'Point to Prod API',
    titleClass: 'card-title-green',
    subtitle: 'wire it',
    description: 'Set the production API base URL as an env var.',
    code: 'VITE_API_URL=https://api.myapp.com\n// not localhost anymore',
  },
  {
    icon: '📈',
    title: 'CI/CD + Monitor',
    titleClass: 'card-title-amber',
    subtitle: 'stay live',
    description: 'Auto-deploy on push; watch logs and uptime.',
    code: 'git push → build → deploy\nlogs + /health + uptime alerts',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'MongoDB Atlas',
    titleClass: 'card-title-green',
    subtitle: 'Managed DB docs',
    description: 'Spin up a managed MongoDB cluster for the deployed app.',
    link: { href: ATLAS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '📘',
    title: 'Deploy Node on Render',
    titleClass: 'card-title-purple',
    subtitle: 'Host guide',
    description: 'Render’s guide to deploying a Node/Express API.',
    link: { href: HOST_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Deploy Full-Stack Free',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'How To Deploy a Full-Stack React App for Free by GreatStack — for Day 76.',
    link: {
      href: 'https://www.youtube.com/watch?v=cVEOhgPziO8',
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

export default function Day076() {
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
          <Link to="/day-075" className="day001-nav-btn day001-nav-home">
            ← Day 75
          </Link>
          <p className="day001-datetime">Thunder Day 76 · 21 Aug 2027</p>
          <Link to="/day-077" className="day001-nav-btn day001-nav-next">
            Day 77 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Full-Stack</span>
              <span>Deploy</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 76 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">CAPSTONE — DEPLOY</p>
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
              <p className="day001-profile-role">FULL-STACK</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '76%' }} />
        </div>

        <p className="day001-summary">
          Day seventy-six — ship the capstone. A full-stack app is <strong>two deploys</strong>: the{' '}
          <strong>backend</strong> API to a host (Render/Railway) with a managed{' '}
          <strong>MongoDB Atlas</strong> database, secrets in the dashboard, and{' '}
          <strong>CORS</strong> allowing the frontend; and the <strong>frontend</strong> as a static
          build on Netlify/Vercel with its API base URL pointed at the live backend. Both get{' '}
          automatic <strong>HTTPS</strong> and <strong>CI/CD</strong> — then watch the{' '}
          <strong>logs</strong>. Reference:{' '}
          <a href={ATLAS_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            MongoDB Atlas
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

        <CardSection icon="☁️" title="DEPLOY BACKEND" cards={BACKEND} columns={4} />
        <CardSection icon="🌐" title="DEPLOY FRONTEND" cards={FRONTEND} columns={3} />
        <CardSection icon="📚" title="CAPSTONE RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#FullStack</span>
          <span>#Deploy</span>
          <span>#MERN</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
