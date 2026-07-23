import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCKER = 'https://docs.docker.com/get-started/';
const DOCKERFILE = 'https://docs.docker.com/reference/dockerfile/';
const MULTI = 'https://docs.docker.com/build/building/multi-stage/';

const LEARNT_TODAY = [
  { title: 'Why Docker', text: 'same image runs on laptop, CI, and prod — fewer “works on my machine” bugs' },
  { title: 'Image vs container', text: 'image is the blueprint; container is a running instance' },
  { title: 'Dockerfile', text: 'recipe: FROM base → copy → install → CMD start' },
  { title: 'Multi-stage', text: 'build with Node, copy only dist + prod deps into a slim final image' },
  { title: '.dockerignore', text: 'exclude node_modules, .git, and secrets from the build context' },
  { title: 'Non-root user', text: 'run the process as a non-root user inside the image when you can' },
  { title: 'PORT from env', text: 'listen on process.env.PORT — platforms inject it' },
  { title: 'Days 161–165', text: 'Docker → Compose → CI/CD → secrets/config → cloud deploy milestone' },
  { title: 'Nest or Express', text: 'same Docker habits — build JS/TS once, run the compiled entrypoint' },
];

const CORE = [
  {
    icon: '🐳', title: 'Minimal Dockerfile', titleClass: 'card-title-cyan', subtitle: 'Node API',
    description: 'Start from a Node LTS image, install deps, copy source, and start the server.',
    code: 'FROM node:22-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --omit=dev\nCOPY dist ./dist\nCMD ["node", "dist/main.js"]',
  },
  {
    icon: '🏗️', title: 'Multi-Stage Build', titleClass: 'card-title-purple', subtitle: 'Smaller Image',
    description: 'Compile in a builder stage; final stage only has runtime files.',
    code: 'FROM node:22-alpine AS build\nWORKDIR /app\nCOPY . .\nRUN npm ci && npm run build\n\nFROM node:22-alpine\nWORKDIR /app\nCOPY --from=build /app/dist ./dist\nCOPY --from=build /app/node_modules ./node_modules\nCMD ["node", "dist/main.js"]',
  },
  {
    icon: '🚫', title: '.dockerignore', titleClass: 'card-title-amber', subtitle: 'Lean Context',
    description: 'Keep builds fast and secret-free. Never copy .env into the image.',
    code: 'node_modules\n.git\n.env\n*.md\ncoverage\ndist',
  },
];

const PRACTICE = [
  {
    icon: '▶️', title: 'Build & Run', titleClass: 'card-title-cyan', subtitle: 'Local',
    description: 'Build the tag, map a port, pass env at runtime — not bake secrets into layers.',
    code: 'docker build -t tasks-api .\ndocker run --rm -p 3000:3000 -e DATABASE_URL=… tasks-api',
  },
  {
    icon: '👤', title: 'Non-Root', titleClass: 'card-title-purple', subtitle: 'Hardening',
    description: 'Create a user and USER switch so a breakout has less power.',
    code: 'RUN addgroup -S app && adduser -S app -G app\nUSER app',
  },
  {
    icon: '📦', title: 'Health In Image', titleClass: 'card-title-amber', subtitle: 'Optional',
    description: 'Expose /health and optionally HEALTHCHECK so orchestrators know the process is alive.',
    code: 'HEALTHCHECK CMD wget -qO- http://127.0.0.1:3000/health || exit 1',
  },
  {
    icon: '🔜', title: 'Next: Compose', titleClass: 'card-title-lime', subtitle: 'Day 162 Preview',
    description: 'Tomorrow: docker compose — API + Postgres + Redis with one command.',
    link: { href: '/day-162', label: 'Go to Day 162 →' },
  },
];

const RESOURCES = [
  {
    icon: '🐳', title: 'Docker Get Started', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Images, containers, and first builds.',
    link: { href: DOCKER, label: 'Read Docker get started →', external: true },
  },
  {
    icon: '📄', title: 'Dockerfile Reference', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'FROM, COPY, RUN, CMD, and more.',
    link: { href: DOCKERFILE, label: 'Read Dockerfile reference →', external: true },
  },
  {
    icon: '🏗️', title: 'Multi-Stage', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'How to keep production images small.',
    link: { href: MULTI, label: 'Read multi-stage builds →', external: true },
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

export default function Day161() {
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
          <Link to="/day-160" className="day001-nav-btn day001-nav-prev">← Day 160</Link>
          <p className="day001-datetime">Cloud Day 161</p>
          <Link to="/day-162" className="day001-nav-btn day001-nav-next">Day 162 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Docker</span><span>Year 1</span><span>Backend</span><span>Containers</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 161 <span aria-hidden="true">🐳</span></h1>
              <p className="day001-day-theme">DOCKERIZE THE API</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">CLOUD · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '45%' }} /></div>

        <p className="day001-summary">
          Day 161 packages the API. Write a <strong>Dockerfile</strong>, prefer{' '}
          <strong>multi-stage</strong> builds, use <strong>.dockerignore</strong>, and pass secrets at{' '}
          <strong>runtime</strong> — never bake them into layers.
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

        <CardSection icon="🐳" title="1 · DOCKERFILE" cards={CORE} columns={3} />
        <CardSection icon="▶️" title="2 · RUN & HARDEN" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Docker</span><span>#NestJS</span><span>#DevOps</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
