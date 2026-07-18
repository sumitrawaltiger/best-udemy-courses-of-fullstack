import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://docs.docker.com/compose/';
const PLAY_URL = 'https://labs.play-with-docker.com/';

const LEARNT_TODAY = [
  {
    title: 'Multi-container',
    text: 'app + database + cache running together',
  },
  {
    title: 'docker-compose.yml',
    text: 'declare the whole stack in one file',
  },
  {
    title: 'services',
    text: 'each container’s image, ports, and env',
  },
  {
    title: 'depends_on',
    text: 'control the startup order',
  },
  {
    title: 'networks',
    text: 'services reach each other by name',
  },
  {
    title: 'volumes',
    text: 'persist database data across restarts',
  },
  {
    title: 'env & .env',
    text: 'per-service configuration',
  },
  {
    title: 'up / down',
    text: 'start and tear down the entire stack',
  },
  {
    title: 'build vs image',
    text: 'build locally or pull from a registry',
  },
  {
    title: 'scale',
    text: 'run multiple replicas of a service',
  },
];

const COMPOSE = [
  {
    icon: '🧩',
    title: 'Why Compose',
    titleClass: 'card-title-cyan',
    subtitle: 'one command',
    description: 'Real apps are many containers — Compose runs them together.',
    code: '// instead of 4 long docker run commands\ndocker compose up   // starts the whole stack',
  },
  {
    icon: '📜',
    title: 'The YAML',
    titleClass: 'card-title-green',
    subtitle: 'declarative',
    description: 'One file describes every service and its config.',
    code: 'services:\n  web:   { build: ., ports: ["3000:3000"] }\n  db:    { image: mongo, volumes: ["data:/data/db"] }',
  },
  {
    icon: '🔗',
    title: 'Services & Networks',
    titleClass: 'card-title-amber',
    subtitle: 'talk by name',
    description: 'Compose puts services on a network; use the service name as host.',
    code: '// web connects to the db as:\nmongodb://db:27017/app',
  },
  {
    icon: '💾',
    title: 'Volumes & Env',
    titleClass: 'card-title-pink',
    subtitle: 'persist + config',
    description: 'Named volumes keep data; env vars configure each service.',
    code: 'volumes: [ "data:/data/db" ]\nenvironment: [ "NODE_ENV=production" ]',
  },
];

const RUN = [
  {
    icon: '▶️',
    title: 'up / down',
    titleClass: 'card-title-cyan',
    subtitle: 'lifecycle',
    description: 'Start the stack detached; tear it down cleanly.',
    code: 'docker compose up -d\ndocker compose down   # + -v to drop volumes',
  },
  {
    icon: '⛓️',
    title: 'depends_on & Health',
    titleClass: 'card-title-green',
    subtitle: 'ordering',
    description: 'Start dependencies first; wait for them to be healthy.',
    code: 'depends_on:\n  db: { condition: service_healthy }',
  },
  {
    icon: '📈',
    title: 'Build & Scale',
    titleClass: 'card-title-amber',
    subtitle: 'grow',
    description: 'Rebuild after changes; run multiple replicas.',
    code: 'docker compose up --build\ndocker compose up --scale web=3',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'Docker Compose Docs',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'The official Compose docs — services, networks, and volumes.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🧪',
    title: 'Play with Docker',
    titleClass: 'card-title-purple',
    subtitle: 'Try it live',
    description: 'Run Compose stacks in a free in-browser Docker environment.',
    link: { href: PLAY_URL, label: 'Open the playground →', external: true },
  },
  {
    icon: '▶️',
    title: 'Docker Compose Tutorial',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Docker Compose Tutorial by Programming with Mosh — supplement for Day 81.',
    link: {
      href: 'https://www.youtube.com/watch?v=HG6yIjZapSA',
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

export default function Day081() {
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
          <Link to="/day-080" className="day001-nav-btn day001-nav-home">
            ← Day 80
          </Link>
          <p className="day001-datetime">Thunder Day 81</p>
          <Link to="/day-082" className="day001-nav-btn day001-nav-next">
            Day 82 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>DevOps</span>
              <span>Docker</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 81 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">DOCKER COMPOSE & MULTI-CONTAINER APPS</p>
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
              <p className="day001-profile-role">DEVOPS</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '81%' }} />
        </div>

        <p className="day001-summary">
          Day eighty-one — real apps are <strong>multi-container</strong> (web + db + cache), and{' '}
          <strong>Docker Compose</strong> runs them all from one <code>docker-compose.yml</code>.
          Each <strong>service</strong> gets its image, ports, and env; they share a{' '}
          <strong>network</strong> and reach each other by name, with <strong>volumes</strong>{' '}
          persisting data. <code>docker compose up</code> starts the whole stack (respecting{' '}
          <strong>depends_on</strong>), and you can <strong>build</strong> and <strong>scale</strong>{' '}
          services too. Reference:{' '}
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Docker Compose docs
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

        <CardSection icon="🧩" title="COMPOSE" cards={COMPOSE} columns={4} />
        <CardSection icon="▶️" title="RUN THE STACK" cards={RUN} columns={3} />
        <CardSection icon="📚" title="DOCKER RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#DevOps</span>
          <span>#Docker</span>
          <span>#Compose</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
