import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://react.dev/learn/thinking-in-react';
const LABS_URL = 'https://react.chaicode.com/';

const LEARNT_TODAY = [
  {
    title: 'Build to learn',
    text: 'projects cement concepts far better than tutorials',
  },
  {
    title: 'Project ideas',
    text: 'todo, weather, notes, movie search, e-commerce UI',
  },
  {
    title: 'Break it down',
    text: 'sketch the component tree and where state lives',
  },
  {
    title: 'Fetch data',
    text: 'call an API in useEffect (or on an event)',
  },
  {
    title: 'Loading & errors',
    text: 'always handle the async UI states',
  },
  {
    title: 'Reusable components',
    text: 'Button, Card, Modal — build a mini design system',
  },
  {
    title: 'Routing',
    text: 'multi-page apps with React Router',
  },
  {
    title: 'Persist state',
    text: 'localStorage for offline-friendly data',
  },
  {
    title: 'Style it',
    text: 'Tailwind or CSS modules for a clean look',
  },
  {
    title: 'Ship it',
    text: 'push to GitHub and deploy — build a portfolio',
  },
];

const BUILD = [
  {
    icon: '🛠️',
    title: 'Why Projects',
    titleClass: 'card-title-cyan',
    subtitle: 'learn by doing',
    description: 'A finished app teaches more than a dozen tutorials.',
    code: '// pick something you would actually use\n// finish it, then improve it',
  },
  {
    icon: '💡',
    title: 'Project Ideas',
    titleClass: 'card-title-green',
    subtitle: 'start small',
    description: 'Ramp from a todo to an API-driven app.',
    code: 'todo · weather · notes\nmovie search · e-commerce UI · dashboard',
  },
  {
    icon: '🧩',
    title: 'Plan the Components',
    titleClass: 'card-title-amber',
    subtitle: 'think in React',
    description: 'Break the UI into components; decide where state lives.',
    code: '<App>\n  <Search /> <List> <Card /> </List>\n// state: query, results, loading',
  },
  {
    icon: '🌐',
    title: 'Fetch + Async UI',
    titleClass: 'card-title-pink',
    subtitle: 'real data',
    description: 'Load data and render loading/error/empty states.',
    code: 'useEffect(() => { fetch(url).then(...); }, []);\nif (loading) return <Spinner />;',
  },
];

const POLISH = [
  {
    icon: '♻️',
    title: 'Reusable UI + Routing',
    titleClass: 'card-title-cyan',
    subtitle: 'structure',
    description: 'Extract shared components; add multi-page routing.',
    code: '<Button/> <Card/> <Modal/>\n<Routes><Route path="/:id" .../></Routes>',
  },
  {
    icon: '💾',
    title: 'Persist & Style',
    titleClass: 'card-title-green',
    subtitle: 'polish',
    description: 'Save to localStorage and style with Tailwind.',
    code: 'localStorage.setItem("todos", JSON.stringify(todos));\nclassName="rounded-lg shadow p-4"',
  },
  {
    icon: '🚀',
    title: 'Ship It',
    titleClass: 'card-title-amber',
    subtitle: 'portfolio',
    description: 'Push to GitHub and deploy — every project counts.',
    code: 'git push · deploy to Netlify/Vercel\nadd it to your portfolio',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'Thinking in React',
    titleClass: 'card-title-green',
    subtitle: 'react.dev',
    description: 'The official guide to breaking a UI into components and state.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🧪',
    title: 'ChaiCode React Labs',
    titleClass: 'card-title-purple',
    subtitle: 'Interactive playground',
    description: 'Build real React projects hands-on.',
    link: { href: LABS_URL, label: 'Open the labs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Learn React With a Project',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Learn React With This ONE Project by Tech With Tim — for Day 71.',
    link: {
      href: 'https://www.youtube.com/watch?v=G6D9cBaLViA',
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

export default function Day071() {
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
          <Link to="/day-070" className="day001-nav-btn day001-nav-home">
            ← Day 70
          </Link>
          <p className="day001-datetime">Thunder Day 71 · 12 Mar 2027</p>
          <Link to="/day-072" className="day001-nav-btn day001-nav-next">
            Day 72 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>React</span>
              <span>Projects</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 71 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">FRONTEND PROJECTS</p>
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
          <div className="day001-progress-bar" style={{ width: '71%' }} />
        </div>

        <p className="day001-summary">
          Day seventy-one — time to <strong>build</strong>. Projects cement everything: pick
          something real (todo, weather, movie search), <strong>break the UI into components</strong>,
          decide where state lives, then <strong>fetch data</strong> and handle{' '}
          <strong>loading/error</strong> states. Extract <strong>reusable components</strong>, add{' '}
          <strong>routing</strong>, <strong>persist</strong> with localStorage, style with Tailwind —
          and <strong>ship it</strong> to GitHub + a host for your portfolio. Practice at{' '}
          <a href={LABS_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            ChaiCode React Labs
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

        <CardSection icon="🛠️" title="BUILD PROJECTS" cards={BUILD} columns={4} />
        <CardSection icon="✨" title="POLISH" cards={POLISH} columns={3} />
        <CardSection icon="📚" title="REACT RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#React</span>
          <span>#Projects</span>
          <span>#Frontend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
