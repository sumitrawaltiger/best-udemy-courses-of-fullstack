import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://vite.dev/guide/static-deploy.html';
const HOST_URL = 'https://docs.netlify.com/';

const LEARNT_TODAY = [
  {
    title: 'Build step',
    text: 'npm run build → optimized static files',
  },
  {
    title: 'Static hosting',
    text: 'Netlify, Vercel, GitHub Pages serve the dist',
  },
  {
    title: 'SPA redirects',
    text: 'rewrite all routes to index.html',
  },
  {
    title: 'Env vars',
    text: 'VITE_ / REACT_APP_ prefixed at build time',
  },
  {
    title: 'Base path',
    text: 'set for subpath hosting (GitHub Pages)',
  },
  {
    title: 'CI/CD',
    text: 'auto-build and deploy on every git push',
  },
  {
    title: 'Custom domain',
    text: 'point DNS, get automatic HTTPS',
  },
  {
    title: 'Cache busting',
    text: 'hashed asset filenames for safe caching',
  },
  {
    title: 'Preview deploys',
    text: 'a live URL per pull request',
  },
  {
    title: 'Audit',
    text: 'run Lighthouse for perf and a11y',
  },
];

const HOST = [
  {
    icon: '📦',
    title: 'Build Step',
    titleClass: 'card-title-cyan',
    subtitle: 'dist/',
    description: 'The build produces minified, hashed static assets.',
    code: 'npm run build\n// → dist/ : index.html + assets/*.[hash].js',
  },
  {
    icon: '☁️',
    title: 'Static Hosts',
    titleClass: 'card-title-green',
    subtitle: 'pick one',
    description: 'Serve the build folder from a static/CDN host.',
    code: 'Netlify · Vercel · GitHub Pages · Cloudflare\n// point them at the dist/ output',
  },
  {
    icon: '↪️',
    title: 'SPA Redirects',
    titleClass: 'card-title-amber',
    subtitle: 'client routing',
    description: 'Send every path to index.html so React Router works.',
    code: '// Netlify _redirects\n/*    /index.html   200',
  },
  {
    icon: '🔑',
    title: 'Env Vars',
    titleClass: 'card-title-pink',
    subtitle: 'build-time',
    description: 'Only prefixed vars are exposed to the client bundle.',
    code: 'VITE_API_URL=https://api.example.com\nimport.meta.env.VITE_API_URL',
  },
];

const GOLIVE = [
  {
    icon: '🔁',
    title: 'CI/CD',
    titleClass: 'card-title-cyan',
    subtitle: 'push to deploy',
    description: 'Connect the repo; each push triggers a build + deploy.',
    code: 'git push origin main\n// host builds & publishes automatically',
  },
  {
    icon: '🌐',
    title: 'Domain + HTTPS',
    titleClass: 'card-title-green',
    subtitle: 'go public',
    description: 'Add a custom domain; TLS is provisioned for you.',
    code: 'DNS: CNAME → host\nfree, auto-renewed HTTPS certificate',
  },
  {
    icon: '📊',
    title: 'Audit',
    titleClass: 'card-title-amber',
    subtitle: 'Lighthouse',
    description: 'Measure performance, accessibility, and best practices.',
    code: 'DevTools → Lighthouse → run\n// fix low scores before launch',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'Vite — Static Deploy',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'Vite’s guide to building and deploying a static site.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '📘',
    title: 'Netlify Docs',
    titleClass: 'card-title-purple',
    subtitle: 'Host reference',
    description: 'Netlify’s docs — redirects, env vars, CI/CD, and domains.',
    link: { href: HOST_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Deploy a React App',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'How To Deploy a React App Free on Netlify by Code Bless You — for Day 72.',
    link: {
      href: 'https://www.youtube.com/watch?v=AP0fKMrmyKA',
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

export default function Day072() {
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
          <Link to="/day-071" className="day001-nav-btn day001-nav-home">
            ← Day 71
          </Link>
          <p className="day001-datetime">Thunder Day 72 · 14 Sep 2026</p>
          <Link to="/day-073" className="day001-nav-btn day001-nav-next">
            Day 73 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>React</span>
              <span>Deployment</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 72 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">DEPLOYING REACT APPLICATIONS</p>
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
              <p className="day001-profile-role">REACT · FRONTEND</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '72%' }} />
        </div>

        <p className="day001-summary">
          Day seventy-two — getting a React app <strong>live</strong>. The{' '}
          <strong>build step</strong> emits optimized static files that any{' '}
          <strong>static host</strong> (Netlify, Vercel, GitHub Pages) serves — with{' '}
          <strong>SPA redirects</strong> so client routes resolve and build-time{' '}
          <strong>env vars</strong> for config. Wire up <strong>CI/CD</strong> so every push
          deploys, add a <strong>custom domain</strong> with automatic HTTPS, and{' '}
          <strong>audit with Lighthouse</strong> before launch. Docs:{' '}
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Vite static deploy
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

        <CardSection icon="📦" title="BUILD & HOST" cards={HOST} columns={4} />
        <CardSection icon="🚀" title="GO LIVE" cards={GOLIVE} columns={3} />
        <CardSection icon="📚" title="DEPLOY RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#React</span>
          <span>#Deployment</span>
          <span>#Netlify</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
