import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const COMPOSE = 'https://docs.docker.com/compose/';
const FILE = 'https://docs.docker.com/reference/compose-file/';
const NETWORKS = 'https://docs.docker.com/compose/how-tos/networking/';

const LEARNT_TODAY = [
  { title: 'Compose', text: 'one YAML file defines API + Postgres + Redis and wires them together' },
  { title: 'services', text: 'each container is a service with image/build, ports, env, and depends_on' },
  { title: 'Networks', text: 'services reach each other by service name (postgres:5432) on a shared network' },
  { title: 'Volumes', text: 'named volumes keep DB data when containers restart' },
  { title: 'env_file', text: 'load local .env for compose — still never commit production secrets' },
  { title: 'depends_on', text: 'start order hint — add healthchecks for “ready”, not just “started”' },
  { title: 'One command', text: 'docker compose up --build runs the whole stack' },
  { title: 'Dev parity', text: 'same Postgres/Redis versions you will use in staging' },
  { title: 'Migrations', text: 'run prisma migrate as a one-off service or entrypoint step' },
];

const CORE = [
  {
    icon: '🧩', title: 'compose.yaml Sketch', titleClass: 'card-title-cyan', subtitle: 'Three Services',
    description: 'API builds from Dockerfile; Postgres and Redis use official images.',
    code: 'services:\n  api:\n    build: .\n    ports: ["3000:3000"]\n    environment:\n      DATABASE_URL: postgres://app:app@postgres:5432/app\n      REDIS_URL: redis://redis:6379\n    depends_on: [postgres, redis]\n  postgres:\n    image: postgres:16-alpine\n    volumes: [pgdata:/var/lib/postgresql/data]\n  redis:\n    image: redis:7-alpine\nvolumes:\n  pgdata:',
  },
  {
    icon: '🔗', title: 'DNS By Name', titleClass: 'card-title-purple', subtitle: 'Networking',
    description: 'Inside the compose network, host postgres resolves to the DB container.',
    code: '// DATABASE_URL=…@postgres:5432/app\n'// not localhost from inside api',
  },
  {
    icon: '💾', title: 'Persist Data', titleClass: 'card-title-amber', subtitle: 'Volumes',
    description: 'Without a volume, wiping the Postgres container wipes your tables.',
    code: 'volumes:\n  pgdata:',
  },
];

const PRACTICE = [
  {
    icon: '❤️', title: 'Healthcheck', titleClass: 'card-title-cyan', subtitle: 'Ready Not Started',
    description: 'Mark Postgres healthy before API migrates or accepts traffic.',
    code: 'healthcheck:\n  test: ["CMD-SHELL", "pg_isready -U app"]\n  interval: 5s\n  retries: 5',
  },
  {
    icon: '▶️', title: 'Day-To-Day', titleClass: 'card-title-purple', subtitle: 'Commands',
    description: 'up, down, logs, and exec become your local ops toolkit.',
    code: 'docker compose up --build\ndocker compose logs -f api\ndocker compose down',
  },
  {
    icon: '🧬', title: 'Migrate Job', titleClass: 'card-title-amber', subtitle: 'One-Off',
    description: 'A migrate service with profile or a compose run keeps schema in sync.',
    code: 'docker compose run --rm api npx prisma migrate deploy',
  },
  {
    icon: '🔜', title: 'Next: CI/CD', titleClass: 'card-title-lime', subtitle: 'Day 163 Preview',
    description: 'Tomorrow: GitHub Actions — test, build the image, and push on every PR/main.',
    link: { href: '/day-163', label: 'Go to Day 163 →' },
  },
];

const RESOURCES = [
  {
    icon: '🧩', title: 'Compose Overview', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'What Compose is and how multi-container apps work.',
    link: { href: COMPOSE, label: 'Read Compose docs →', external: true },
  },
  {
    icon: '📄', title: 'Compose File', titleClass: 'card-title-purple', subtitle: 'Reference',
    description: 'services, volumes, networks, and healthchecks.',
    link: { href: FILE, label: 'Read compose file reference →', external: true },
  },
  {
    icon: '🔗', title: 'Networking', titleClass: 'card-title-amber', subtitle: 'How-To',
    description: 'How service discovery works between containers.',
    link: { href: NETWORKS, label: 'Read Compose networking →', external: true },
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

export default function Day162() {
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
          <Link to="/day-161" className="day001-nav-btn day001-nav-prev">← Day 161</Link>
          <p className="day001-datetime">Cloud Day 162 · 11 Jun 2027</p>
          <Link to="/day-163" className="day001-nav-btn day001-nav-next">Day 163 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Docker</span><span>Year 1</span><span>Compose</span><span>Postgres</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 162 <span aria-hidden="true">🧩</span></h1>
              <p className="day001-day-theme">DOCKER COMPOSE STACK</p>
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
          Day 162 runs the full local stack. <strong>Compose</strong> wires{' '}
          <strong>API + Postgres + Redis</strong>, uses <strong>volumes</strong> for data, and{' '}
          <strong>healthchecks</strong> so the API starts when the DB is ready.
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

        <CardSection icon="🧩" title="1 · COMPOSE FILE" cards={CORE} columns={3} />
        <CardSection icon="❤️" title="2 · HEALTH & WORKFLOW" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#DockerCompose</span><span>#Postgres</span><span>#Redis</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
