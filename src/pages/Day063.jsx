import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://reactrouter.com/en/main/start/tutorial';
const LABS_URL = 'https://react.chaicode.com/';

const LEARNT_TODAY = [
  {
    title: 'SPA routing',
    text: 'change views on the client — no full page reload',
  },
  {
    title: 'BrowserRouter',
    text: 'wraps the app to enable routing',
  },
  {
    title: 'Routes & Route',
    text: 'map a URL path to an element',
  },
  {
    title: 'Link / NavLink',
    text: 'navigate without a reload; NavLink knows "active"',
  },
  {
    title: 'Dynamic routes',
    text: '/user/:id → read it with useParams',
  },
  {
    title: 'Nested routes',
    text: 'shared layouts with an <Outlet />',
  },
  {
    title: 'useNavigate',
    text: 'navigate from code (after a login, etc.)',
  },
  {
    title: 'Index route',
    text: 'the default child of a layout',
  },
  {
    title: '404 route',
    text: 'path="*" catches everything else',
  },
  {
    title: 'Query params',
    text: 'read/write with useSearchParams',
  },
];

const ROUTES = [
  {
    icon: '🧭',
    title: 'SPA Routing',
    titleClass: 'card-title-cyan',
    subtitle: 'no reload',
    description: 'Swap components by URL while the page stays loaded.',
    code: '<BrowserRouter>\n  <App />\n</BrowserRouter>',
  },
  {
    icon: '🗺️',
    title: 'Routes & Route',
    titleClass: 'card-title-green',
    subtitle: 'path → element',
    description: 'Declare which component renders for each path.',
    code: '<Routes>\n  <Route path="/" element={<Home />} />\n  <Route path="/about" element={<About />} />\n</Routes>',
  },
  {
    icon: '🔗',
    title: 'Dynamic Routes',
    titleClass: 'card-title-amber',
    subtitle: 'useParams',
    description: 'A colon marks a dynamic segment read via useParams.',
    code: '<Route path="/user/:id" element={<User />} />\nconst { id } = useParams();',
  },
  {
    icon: '🪆',
    title: 'Nested Routes',
    titleClass: 'card-title-pink',
    subtitle: 'layouts',
    description: 'Wrap children in a layout and render them at <Outlet />.',
    code: '<Route path="/dash" element={<Layout />}>\n  <Route index element={<Overview />} />\n</Route>',
  },
];

const NAVIGATION = [
  {
    icon: '➡️',
    title: 'Link / NavLink',
    titleClass: 'card-title-cyan',
    subtitle: 'declarative nav',
    description: 'Link navigates; NavLink adds an active class.',
    code: '<Link to="/about">About</Link>\n<NavLink to="/feed" className={({isActive}) => ...} />',
  },
  {
    icon: '🎮',
    title: 'useNavigate',
    titleClass: 'card-title-green',
    subtitle: 'programmatic',
    description: 'Redirect from code after an action completes.',
    code: 'const navigate = useNavigate();\nawait login(); navigate("/dashboard");',
  },
  {
    icon: '🚧',
    title: '404 & Query Params',
    titleClass: 'card-title-amber',
    subtitle: 'catch-all + search',
    description: 'A wildcard route for 404s; useSearchParams for ?q=.',
    code: '<Route path="*" element={<NotFound />} />\nconst [params] = useSearchParams(); params.get("q");',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'React Router Docs',
    titleClass: 'card-title-green',
    subtitle: 'Official tutorial',
    description: 'The official React Router tutorial — routes, params, and nesting.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🧪',
    title: 'ChaiCode React Labs',
    titleClass: 'card-title-purple',
    subtitle: 'Interactive playground',
    description: 'Build multi-page React apps hands-on.',
    link: { href: LABS_URL, label: 'Open the labs →', external: true },
  },
  {
    icon: '▶️',
    title: 'React Router in 45 min',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Learn React Router v6 in 45 Minutes by Web Dev Simplified — for Day 63.',
    link: {
      href: 'https://www.youtube.com/watch?v=Ul3y1LXxzdU',
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

export default function Day063() {
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
          <Link to="/day-062" className="day001-nav-btn day001-nav-home">
            ← Day 62
          </Link>
          <p className="day001-datetime">Thunder Day 63</p>
          <Link to="/day-064" className="day001-nav-btn day001-nav-next">
            Day 64 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>React</span>
              <span>Routing</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 63 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">REACT ROUTER & NAVIGATION</p>
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
          <div className="day001-progress-bar" style={{ width: '63%' }} />
        </div>

        <p className="day001-summary">
          Day sixty-three — React is a single page, so <strong>React Router</strong> gives it many
          views without a reload. <strong>BrowserRouter</strong> wraps the app,{' '}
          <strong>Routes/Route</strong> map paths to elements, and <strong>Link/NavLink</strong>{' '}
          navigate client-side. <strong>Dynamic routes</strong> (<code>/user/:id</code> via{' '}
          <code>useParams</code>) and <strong>nested routes</strong> with <code>&lt;Outlet /&gt;</code>{' '}
          build real apps, while <code>useNavigate</code>, a <code>path=&quot;*&quot;</code> 404, and{' '}
          <code>useSearchParams</code> round it out. Practice at{' '}
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

        <CardSection icon="🗺️" title="ROUTES" cards={ROUTES} columns={4} />
        <CardSection icon="🧭" title="NAVIGATION" cards={NAVIGATION} columns={3} />
        <CardSection icon="📚" title="REACT RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#React</span>
          <span>#ReactRouter</span>
          <span>#SPA</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
