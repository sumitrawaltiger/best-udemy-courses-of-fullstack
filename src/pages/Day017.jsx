import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const RR_DOCS = 'https://reactrouter.com/';
const RR_TUTORIAL = 'https://reactrouter.com/en/main/start/tutorial';

const LEARNT_TODAY = [
  { title: 'SPAs need a router', text: 'React renders one page; a router swaps views by URL without a full reload' },
  { title: 'createBrowserRouter', text: 'the modern data-router API — declare routes as objects with element + loader' },
  { title: 'Routes & nesting', text: 'child routes render inside a parent’s <Outlet />, sharing a layout' },
  { title: 'Link vs NavLink', text: 'Link navigates; NavLink adds an active class for the current route' },
  { title: 'URL params', text: 'a :id segment is read with useParams<{ id: string }>() — fully typed' },
  { title: 'Programmatic nav', text: 'useNavigate() pushes routes from code after an action (e.g. a form submit)' },
  { title: 'Loaders & actions', text: 'fetch data before a route renders (loader) and handle mutations (action)' },
  { title: 'Typed everywhere', text: 'params, search params and loader data are all typed with TypeScript' },
];

const SETUP = [
  {
    icon: '🧭', title: 'Define The Router', titleClass: 'card-title-cyan', subtitle: 'createBrowserRouter',
    description:
      'Declare routes as a tree of objects. Each has a path and an element; nested children render inside the parent’s <Outlet />, so a layout wraps every page.',
    code: 'const router = createBrowserRouter([\n  { path: "/", element: <Layout />, children: [\n    { index: true, element: <Home /> },\n    { path: "users/:id", element: <User /> },\n  ] },\n]);\n<RouterProvider router={router} />',
  },
  {
    icon: '🔗', title: 'Link & NavLink', titleClass: 'card-title-purple', subtitle: 'Navigate, No Reload',
    description:
      'Use <Link> instead of <a> to navigate without reloading. <NavLink> adds an "active" state so you can style the current tab. Both are typed to your routes.',
    code: '<Link to="/users/7">Profile</Link>\n\n<NavLink to="/about"\n  className={({ isActive }) => isActive ? "on" : ""}>\n  About\n</NavLink>',
  },
];

const DATA = [
  {
    icon: '🆔', title: 'Typed URL Params', titleClass: 'card-title-cyan', subtitle: 'useParams',
    description:
      'A dynamic segment like :id is read with useParams. Pass a type argument so id is a typed string, not any — then fetch or look up by it.',
    code: 'function User() {\n  const { id } = useParams<{ id: string }>();\n  return <h1>User #{id}</h1>;\n}',
  },
  {
    icon: '🚀', title: 'Programmatic Nav', titleClass: 'card-title-purple', subtitle: 'useNavigate',
    description:
      'When navigation happens after logic — a successful login, a saved form — call the function from useNavigate(). Pass a path, or -1 to go back.',
    code: 'const navigate = useNavigate();\nasync function onSave() {\n  await save();\n  navigate("/users/7");   // or navigate(-1)\n}',
  },
  {
    icon: '📥', title: 'Loaders', titleClass: 'card-title-amber', subtitle: 'Data Before Render',
    description:
      'A route loader fetches data before the component renders, so there’s no flash of empty state. Read it with useLoaderData — no useEffect needed for the initial load.',
    code: '{ path: "users/:id", element: <User />,\n  loader: ({ params }) => getUser(params.id) }\n\nconst user = useLoaderData() as User;',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'React Router Docs', titleClass: 'card-title-cyan', subtitle: 'Official',
    description:
      'The full reference for the data router — routes, nesting, params, loaders, actions and error boundaries, all with TypeScript examples.',
    link: { href: RR_DOCS, label: 'Open React Router →', external: true },
  },
  {
    icon: '🧩', title: 'The Tutorial', titleClass: 'card-title-purple', subtitle: 'Hands-On',
    description:
      'Build a small app end to end — nested routes, loaders, actions and pending UI. The fastest way to make routing muscle memory.',
    link: { href: RR_TUTORIAL, label: 'Open the tutorial →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Data Fetching', titleClass: 'card-title-amber', subtitle: 'Day 18 Preview',
    description:
      'Tomorrow — server state with TanStack Query: caching, background refetching, and typed useQuery/useMutation hooks that replace hand-rolled useEffect fetching.',
    link: { href: '/day-018', label: 'Go to Day 18 →' },
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

export default function Day017() {
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
          <Link to="/day-016" className="day001-nav-btn day001-nav-prev">← Day 16</Link>
          <p className="day001-datetime">TypeScript Day 17 · 23 Jun 2027</p>
          <Link to="/day-018" className="day001-nav-btn day001-nav-next">Day 18 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>React Router</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 17 <span aria-hidden="true">🧭</span></h1>
              <p className="day001-day-theme">REACT ROUTER — ROUTING &amp; NAVIGATION</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">TYPESCRIPT · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '17%' }} /></div>

        <p className="day001-summary">
          Beyond the foundation — building real apps. A React app renders one page, so{' '}
          <strong>React Router</strong> swaps views by <strong>URL</strong> without a reload.{' '}
          <strong>createBrowserRouter</strong> declares routes as objects; nested children render inside a parent’s{' '}
          <code>&lt;Outlet /&gt;</code>. Navigate with <strong>&lt;Link&gt;</strong> / <strong>&lt;NavLink&gt;</strong>{' '}
          (active styling), read dynamic segments with a typed <code>useParams&lt;{'{ id: string }'}&gt;()</code>, and
          move programmatically with <strong>useNavigate()</strong>. Best of all, a route <strong>loader</strong>{' '}
          fetches data <em>before</em> render (no empty flash), read via <code>useLoaderData</code>. <em>Next: server
          state with TanStack Query.</em>
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

        <CardSection icon="🧭" title="ROUTES & LINKS" cards={SETUP} columns={2} />
        <CardSection icon="🆔" title="PARAMS · NAV · LOADERS" cards={DATA} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#React</span><span>#ReactRouter</span>
        </footer>
      </div>
    </div>
  );
}
