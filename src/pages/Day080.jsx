import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://docs.docker.com/get-started/';
const PLAY_URL = 'https://labs.play-with-docker.com/';

const LEARNT_TODAY = [
  {
    title: 'Why Docker',
    text: 'ends "works on my machine" with reproducible envs',
  },
  {
    title: 'Image vs container',
    text: 'a blueprint vs a running instance of it',
  },
  {
    title: 'Dockerfile',
    text: 'the recipe that builds an image',
  },
  {
    title: 'build & run',
    text: 'docker build then docker run',
  },
  {
    title: 'Ports',
    text: '-p host:container maps a port',
  },
  {
    title: 'Volumes',
    text: '-v persists data outside the container',
  },
  {
    title: 'Layers & cache',
    text: 'order Dockerfile steps for fast rebuilds',
  },
  {
    title: 'Registry',
    text: 'push/pull images from Docker Hub',
  },
  {
    title: 'Multi-stage',
    text: 'build then copy — small final images',
  },
  {
    title: 'Manage',
    text: 'docker ps / logs / exec',
  },
];

const CONTAINERS = [
  {
    icon: '🐳',
    title: 'Why Docker',
    titleClass: 'card-title-cyan',
    subtitle: 'consistency',
    description: 'Package the app + its deps so it runs the same everywhere.',
    code: '// same image on laptop, CI, and prod\n// no "but it worked locally"',
  },
  {
    icon: '🖼️',
    title: 'Image vs Container',
    titleClass: 'card-title-green',
    subtitle: 'blueprint vs run',
    description: 'An image is a template; a container is it, running.',
    code: 'image     → docker run → container\n// many containers from one image',
  },
  {
    icon: '📜',
    title: 'Dockerfile',
    titleClass: 'card-title-amber',
    subtitle: 'the recipe',
    description: 'Declare the base, deps, code, and start command.',
    code: 'FROM node:20-slim\nWORKDIR /app\nCOPY . . && RUN npm ci\nCMD ["node", "server.js"]',
  },
  {
    icon: '▶️',
    title: 'Build & Run',
    titleClass: 'card-title-pink',
    subtitle: 'two commands',
    description: 'Build the image, then run a container from it.',
    code: 'docker build -t myapp .\ndocker run -d -p 3000:3000 myapp',
  },
];

const PRACTICE = [
  {
    icon: '🔌',
    title: 'Ports & Volumes',
    titleClass: 'card-title-cyan',
    subtitle: 'connect + persist',
    description: 'Expose ports and keep data across container restarts.',
    code: '-p 8080:80        # map a port\n-v data:/var/lib   # persist a volume',
  },
  {
    icon: '🧱',
    title: 'Layers & Registry',
    titleClass: 'card-title-green',
    subtitle: 'cache + share',
    description: 'Cache-friendly layers; push images to a registry.',
    code: '// COPY package.json first → cache npm ci\ndocker push user/myapp:1.0',
  },
  {
    icon: '🛠️',
    title: 'Manage Containers',
    titleClass: 'card-title-amber',
    subtitle: 'inspect',
    description: 'List, read logs, and shell into running containers.',
    code: 'docker ps · docker logs -f <id>\ndocker exec -it <id> sh',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'Docker Get Started',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'Docker’s official getting-started guide — images and containers.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🧪',
    title: 'Play with Docker',
    titleClass: 'card-title-purple',
    subtitle: 'Try it live',
    description: 'A free in-browser Docker playground — no local install needed.',
    link: { href: PLAY_URL, label: 'Open the playground →', external: true },
  },
  {
    icon: '▶️',
    title: 'Docker Tutorial',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'The Only Docker Tutorial You Need To Get Started by The Coding Sloth — for Day 80.',
    link: {
      href: 'https://www.youtube.com/watch?v=DQdB7wFEygo',
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

export default function Day080() {
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
          <Link to="/day-079" className="day001-nav-btn day001-nav-home">
            ← Day 79
          </Link>
          <p className="day001-datetime">Thunder Day 80 · 21 Mar 2027</p>
          <Link to="/day-081" className="day001-nav-btn day001-nav-next">
            Day 81 →
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
                DAY 80 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">DOCKER FUNDAMENTALS</p>
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
          <div className="day001-progress-bar" style={{ width: '80%' }} />
        </div>

        <p className="day001-summary">
          Day eighty — <strong>Docker</strong> packages an app and its dependencies so it runs the
          same everywhere. An <strong>image</strong> is the blueprint (built from a{' '}
          <strong>Dockerfile</strong>) and a <strong>container</strong> is it running —{' '}
          <code>docker build</code> then <code>docker run</code>. Map <strong>ports</strong>, persist{' '}
          <strong>volumes</strong>, order layers for <strong>cache</strong>, push to a{' '}
          <strong>registry</strong>, slim images with <strong>multi-stage</strong> builds, and manage
          with <code>ps</code>/<code>logs</code>/<code>exec</code>. Reference:{' '}
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Docker docs
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

        <CardSection icon="🐳" title="CONTAINERS" cards={CONTAINERS} columns={4} />
        <CardSection icon="🛠️" title="IN PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="DOCKER RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#DevOps</span>
          <span>#Docker</span>
          <span>#Containers</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
