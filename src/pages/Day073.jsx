import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ROADMAP_URL = 'https://roadmap.sh/full-stack';
const DRAW_URL = 'https://excalidraw.com/';

const LEARNT_TODAY = [
  {
    title: 'Pick a real problem',
    text: 'scope an app that is genuinely useful',
  },
  {
    title: 'Requirements',
    text: 'define the MVP feature set first',
  },
  {
    title: 'Data model',
    text: 'entities and their relationships',
  },
  {
    title: 'API design',
    text: 'the REST endpoints and their shapes',
  },
  {
    title: 'Tech stack',
    text: 'MERN — Mongo, Express, React, Node',
  },
  {
    title: 'Wireframes',
    text: 'sketch each screen before coding',
  },
  {
    title: 'Architecture',
    text: 'client → API → database, with auth',
  },
  {
    title: 'Auth plan',
    text: 'JWT, roles, and protected routes',
  },
  {
    title: 'Milestones',
    text: 'split the build into phases',
  },
  {
    title: 'Repo & board',
    text: 'a GitHub repo plus a task board',
  },
];

const DEFINE = [
  {
    icon: '🎯',
    title: 'Problem & MVP',
    titleClass: 'card-title-cyan',
    subtitle: 'scope it',
    description: 'One clear problem; the smallest set of features that solves it.',
    code: '// e.g. a task manager\nMVP: auth · create/list/complete tasks',
  },
  {
    icon: '🗂️',
    title: 'Data Model',
    titleClass: 'card-title-green',
    subtitle: 'entities',
    description: 'Model the core objects and how they relate.',
    code: 'User 1─* Task\nTask { title, done, dueDate, userId }',
  },
  {
    icon: '🔌',
    title: 'API Design',
    titleClass: 'card-title-amber',
    subtitle: 'endpoints',
    description: 'Sketch the REST surface before building it.',
    code: 'POST /auth/login\nGET/POST /tasks · PATCH/DELETE /tasks/:id',
  },
  {
    icon: '🧱',
    title: 'Tech Stack',
    titleClass: 'card-title-pink',
    subtitle: 'MERN',
    description: 'A cohesive JavaScript stack end to end.',
    code: 'MongoDB · Express · React · Node\n+ JWT · Tailwind · Vite',
  },
];

const DESIGN = [
  {
    icon: '✏️',
    title: 'Wireframes & Architecture',
    titleClass: 'card-title-cyan',
    subtitle: 'draw it',
    description: 'Sketch screens and the client → API → DB flow.',
    code: 'browser → React → REST API → MongoDB\nwireframe each screen (Excalidraw)',
  },
  {
    icon: '🔐',
    title: 'Auth Plan',
    titleClass: 'card-title-green',
    subtitle: 'security first',
    description: 'Decide auth, roles, and which routes are protected.',
    code: 'register/login → JWT\nprotect: /tasks · roles: user/admin',
  },
  {
    icon: '🗓️',
    title: 'Milestones & Repo',
    titleClass: 'card-title-amber',
    subtitle: 'plan the build',
    description: 'Phase the work; track it on a board in your repo.',
    code: 'M1 backend API · M2 frontend · M3 deploy\nGitHub repo + issues/board',
  },
];

const RESOURCES = [
  {
    icon: '🗺️',
    title: 'Full-Stack Roadmap',
    titleClass: 'card-title-purple',
    subtitle: 'roadmap.sh',
    description: 'The full-stack developer roadmap — a checklist of what to plan for.',
    link: { href: ROADMAP_URL, label: 'Open the roadmap →', external: true },
  },
  {
    icon: '🖌️',
    title: 'Excalidraw',
    titleClass: 'card-title-green',
    subtitle: 'Diagram tool',
    description: 'Sketch wireframes and architecture diagrams in the browser.',
    link: { href: DRAW_URL, label: 'Open Excalidraw →', external: true },
  },
  {
    icon: '▶️',
    title: 'Plan Your Projects',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'How I Plan My Coding Projects — 9 Steps by Tech With Tim — for Day 73.',
    link: {
      href: 'https://www.youtube.com/watch?v=AGWyx96lP8U',
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

export default function Day073() {
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
          <Link to="/day-072" className="day001-nav-btn day001-nav-home">
            ← Day 72
          </Link>
          <p className="day001-datetime">Thunder Day 73</p>
          <Link to="/day-074" className="day001-nav-btn day001-nav-next">
            Day 74 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Full-Stack</span>
              <span>Capstone</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 73 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">FULL-STACK CAPSTONE — PLANNING</p>
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
          <div className="day001-progress-bar" style={{ width: '73%' }} />
        </div>

        <p className="day001-summary">
          Day seventy-three — before writing code, I <strong>plan the capstone</strong>. Pick one
          real problem, define the <strong>MVP</strong>, and design the <strong>data model</strong>{' '}
          and <strong>REST API</strong> on the <strong>MERN</strong> stack. Then{' '}
          <strong>wireframe</strong> the screens, draw the <strong>architecture</strong> (client →
          API → DB), decide the <strong>auth</strong> approach (JWT + roles), and break the build
          into <strong>milestones</strong> tracked in a GitHub repo + board. A clear plan makes the
          build days smooth. Start at{' '}
          <a href={ROADMAP_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            the full-stack roadmap
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

        <CardSection icon="🎯" title="DEFINE" cards={DEFINE} columns={4} />
        <CardSection icon="✏️" title="DESIGN" cards={DESIGN} columns={3} />
        <CardSection icon="📚" title="CAPSTONE RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#FullStack</span>
          <span>#Capstone</span>
          <span>#Planning</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
