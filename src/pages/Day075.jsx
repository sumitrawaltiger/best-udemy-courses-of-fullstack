import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://react.dev/learn';
const LABS_URL = 'https://react.chaicode.com/';

const LEARNT_TODAY = [
  {
    title: 'React app',
    text: 'pages wired together with React Router',
  },
  {
    title: 'API layer',
    text: 'a small axios/fetch wrapper for the backend',
  },
  {
    title: 'Auth flow',
    text: 'login, store the token, protect routes',
  },
  {
    title: 'Data fetching',
    text: 'list & detail screens with loading states',
  },
  {
    title: 'Forms',
    text: 'create/edit with validation',
  },
  {
    title: 'State',
    text: 'context or Redux for auth + shared data',
  },
  {
    title: 'UI',
    text: 'Tailwind components for a clean look',
  },
  {
    title: 'Optimistic updates',
    text: 'update the UI before the server confirms',
  },
  {
    title: 'Error handling',
    text: 'toasts and inline messages',
  },
  {
    title: 'Wire it together',
    text: 'frontend talks to the Day 74 API',
  },
];

const BUILD = [
  {
    icon: '📄',
    title: 'Pages & Routing',
    titleClass: 'card-title-cyan',
    subtitle: 'the shell',
    description: 'Lay out routes for auth, list, detail, and forms.',
    code: '<Routes>\n  <Route path="/login" .../>\n  <Route path="/tasks" .../>\n  <Route path="/tasks/:id" .../>\n</Routes>',
  },
  {
    icon: '🔌',
    title: 'API Layer',
    titleClass: 'card-title-green',
    subtitle: 'one place',
    description: 'Centralize base URL, headers, and the auth token.',
    code: 'const api = axios.create({ baseURL, });\napi.interceptors.request.use(addAuthHeader);',
  },
  {
    icon: '🔐',
    title: 'Auth Flow',
    titleClass: 'card-title-amber',
    subtitle: 'login → guard',
    description: 'Store the JWT, then gate protected routes.',
    code: 'localStorage.setItem("token", token);\n<ProtectedRoute><Tasks/></ProtectedRoute>',
  },
  {
    icon: '📋',
    title: 'CRUD Screens',
    titleClass: 'card-title-pink',
    subtitle: 'list + detail',
    description: 'Fetch and render, with loading/empty/error states.',
    code: 'const { data, loading } = useTasks();\nif (loading) return <Spinner/>;',
  },
];

const INTEGRATE = [
  {
    icon: '🗂️',
    title: 'State + Forms',
    titleClass: 'card-title-cyan',
    subtitle: 'inputs',
    description: 'Controlled forms for create/edit; context for auth.',
    code: 'const [form, setForm] = useState(empty);\nawait api.post("/tasks", form);',
  },
  {
    icon: '🎨',
    title: 'UI + UX',
    titleClass: 'card-title-green',
    subtitle: 'polish',
    description: 'Tailwind styling, optimistic updates, and toasts.',
    code: 'setTasks(prev => [...prev, temp]); // optimistic\ntoast.success("Saved");',
  },
  {
    icon: '🔗',
    title: 'Connect to Backend',
    titleClass: 'card-title-amber',
    subtitle: 'end to end',
    description: 'Point the API base URL at the Day 74 server.',
    code: 'VITE_API_URL=http://localhost:5000/api\n// frontend ↔ backend working together',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'React Docs',
    titleClass: 'card-title-green',
    subtitle: 'react.dev',
    description: 'The official React docs for building the client app.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🧪',
    title: 'ChaiCode React Labs',
    titleClass: 'card-title-purple',
    subtitle: 'Interactive playground',
    description: 'Build the capstone frontend hands-on.',
    link: { href: LABS_URL, label: 'Open the labs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Full-Stack CRUD',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Full-Stack CRUD in One Video (MERN) by ProjectWithMe — for Day 75.',
    link: {
      href: 'https://www.youtube.com/watch?v=8-2bGey_lgk',
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

export default function Day075() {
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
          <Link to="/day-074" className="day001-nav-btn day001-nav-home">
            ← Day 74
          </Link>
          <p className="day001-datetime">Thunder Day 75 · 20 Aug 2027</p>
          <Link to="/day-076" className="day001-nav-btn day001-nav-next">
            Day 76 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Full-Stack</span>
              <span>Frontend</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 75 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">CAPSTONE BUILD II — FRONTEND</p>
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
          <div className="day001-progress-bar" style={{ width: '75%' }} />
        </div>

        <p className="day001-summary">
          Day seventy-five — build the <strong>frontend</strong> and wire it to yesterday’s API. Lay
          out <strong>pages + routing</strong>, centralize calls in an <strong>API layer</strong>,
          and implement the <strong>auth flow</strong> (login, store the token, protect routes).
          Add <strong>CRUD screens</strong> with loading states, controlled <strong>forms</strong>,{' '}
          <strong>context/Redux</strong> for shared state, Tailwind <strong>UI</strong>, optimistic
          updates, and error <strong>toasts</strong> — then point the base URL at the backend for a
          working end-to-end app. Practice at{' '}
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

        <CardSection icon="🖥️" title="FRONTEND BUILD" cards={BUILD} columns={4} />
        <CardSection icon="🔗" title="INTEGRATE" cards={INTEGRATE} columns={3} />
        <CardSection icon="📚" title="CAPSTONE RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#FullStack</span>
          <span>#MERN</span>
          <span>#React</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
