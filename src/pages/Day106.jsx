import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const FETCH_DOCS = 'https://reactnative.dev/docs/network';
const MDN_FETCH = 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch';
const EXPO_ENV = 'https://docs.expo.dev/guides/environment-variables/';

const LEARNT_TODAY = [
  { title: 'fetch in React Native', text: 'the same fetch API as the web works in RN — call REST endpoints straight from a component' },
  { title: 'async/await', text: 'wrap requests in async functions and await the response, then response.json()' },
  { title: 'GET', text: 'read data — fetch(url) then parse JSON into state to render a list' },
  { title: 'POST', text: 'create — send a JSON body with method POST and a Content-Type header' },
  { title: 'PUT / PATCH', text: 'update an existing record by id; PUT replaces, PATCH edits fields' },
  { title: 'DELETE', text: 'remove a record by id — method DELETE, usually no body' },
  { title: 'Error handling', text: 'check response.ok, wrap in try/catch, and show the user a friendly failure state' },
  { title: 'Loading & empty states', text: 'track loading and error in state so the UI never looks frozen' },
  { title: 'Study Tracker project', text: 'the day’s build — a CRUD app that logs study sessions against an API' },
];

const FETCHING = [
  {
    icon: '🌐', title: 'fetch in RN', titleClass: 'card-title-cyan', subtitle: 'Same API As Web',
    description: 'React Native ships the fetch API, so networking feels identical to the browser. Call an endpoint, await the response, and parse JSON — no extra library needed to start.',
    code: 'async function loadUsers() {\n  const res = await fetch("https://api.example.com/users");\n  const data = await res.json();\n  setUsers(data);\n}',
  },
  {
    icon: '⏳', title: 'Loading & Error State', titleClass: 'card-title-purple', subtitle: 'Never Freeze The UI',
    description: 'Track loading and error alongside the data. Show a spinner while fetching and a message on failure so the screen always communicates what is happening.',
    code: 'const [loading, setLoading] = useState(true);\nconst [error, setError] = useState(null);\n// finally { setLoading(false); }\nif (loading) return <ActivityIndicator />;',
  },
  {
    icon: '🛡️', title: 'Handle Failures', titleClass: 'card-title-amber', subtitle: 'response.ok + try/catch',
    description: 'A 404 or 500 does not throw — fetch only rejects on network errors. Check response.ok yourself and wrap everything in try/catch to catch both cases.',
    code: 'try {\n  const res = await fetch(url);\n  if (!res.ok) throw new Error(`HTTP ${res.status}`);\n  return await res.json();\n} catch (e) {\n  setError(e.message);\n}',
  },
];

const CRUD = [
  {
    icon: '📥', title: 'GET — Read', titleClass: 'card-title-cyan', subtitle: 'Fetch & Render',
    description: 'GET is the default. Fetch a collection, store it in state, and render it with a FlatList. This is the read half of every data-driven screen.',
    code: 'const res = await fetch(`${API}/sessions`);\nconst sessions = await res.json();\nsetSessions(sessions);',
  },
  {
    icon: '📤', title: 'POST — Create', titleClass: 'card-title-purple', subtitle: 'Send A JSON Body',
    description: 'To create a record, POST a JSON body with a Content-Type header. Stringify the payload and update local state on success for an instant UI.',
    code: 'await fetch(`${API}/sessions`, {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ topic: "RN", minutes: 60 }),\n});',
  },
  {
    icon: '✏️', title: 'PUT & DELETE', titleClass: 'card-title-amber', subtitle: 'Update & Remove',
    description: 'PUT (or PATCH) updates a record by id; DELETE removes it. Both target a URL with the id, and you refresh or optimistically update state afterward.',
    code: '// update\nawait fetch(`${API}/sessions/${id}`, { method: "PUT",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify(update) });\n// delete\nawait fetch(`${API}/sessions/${id}`, { method: "DELETE" });',
  },
  {
    icon: '📓', title: 'Project: Study Tracker', titleClass: 'card-title-lime', subtitle: 'Full CRUD App',
    description: 'The day’s build ties it together: a Study Tracker that lists sessions (GET), logs a new one (POST), edits (PUT) and removes (DELETE) — a complete mobile-to-server loop.',
    code: '// GET list → FlatList\n// POST form → add session\n// PUT row  → edit minutes\n// DELETE   → swipe to remove',
  },
];

const PATTERNS = [
  {
    icon: '🔑', title: 'API Base URL & Env', titleClass: 'card-title-cyan', subtitle: 'Keep Config Out Of Code',
    description: 'Store the API base URL and keys in environment variables (Expo public env or app config), not hardcoded. One place to change dev vs production.',
    code: 'const API = process.env.EXPO_PUBLIC_API_URL;\nawait fetch(`${API}/sessions`);',
  },
  {
    icon: '♻️', title: 'A Reusable api() Helper', titleClass: 'card-title-purple', subtitle: 'DRY Requests',
    description: 'Wrap fetch in one helper that sets the base URL, JSON headers and error handling. Every screen calls api("/path") instead of repeating boilerplate.',
    code: 'async function api(path, options) {\n  const res = await fetch(API + path, {\n    headers: { "Content-Type": "application/json" },\n    ...options,\n  });\n  if (!res.ok) throw new Error(res.status);\n  return res.json();\n}',
  },
  {
    icon: '🔜', title: 'Next: Data Storage', titleClass: 'card-title-amber', subtitle: 'Day 107 Preview',
    description: 'Tomorrow: persisting data on the device — AsyncStorage for simple values, SecureStore for secrets, SQLite for structured data, and offline-first patterns.',
    link: { href: '/day-107', label: 'Go to Day 107 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Networking', titleClass: 'card-title-cyan', subtitle: 'RN Docs',
    description: 'How networking works in React Native — fetch, XHR, WebSockets, and handling responses on a mobile device.',
    link: { href: FETCH_DOCS, label: 'Read RN networking →', external: true },
  },
  {
    icon: '🌐', title: 'Using Fetch', titleClass: 'card-title-purple', subtitle: 'MDN',
    description: 'The definitive guide to the Fetch API — requests, headers, bodies, and reading responses. The same API you use in RN.',
    link: { href: MDN_FETCH, label: 'Read the MDN guide →', external: true },
  },
  {
    icon: '🔑', title: 'Environment Variables', titleClass: 'card-title-amber', subtitle: 'Expo',
    description: 'Configure API URLs and keys per environment with Expo public env vars and app config — no secrets in source.',
    link: { href: EXPO_ENV, label: 'Read the Expo guide →', external: true },
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

export default function Day106() {
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
          <Link to="/day-105" className="day001-nav-btn day001-nav-prev">← Day 105</Link>
          <p className="day001-datetime">React Native Day 106</p>
          <Link to="/day-107" className="day001-nav-btn day001-nav-next">Day 107 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>Networking</span><span>RN Day 6</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 106 <span aria-hidden="true">🌐</span></h1>
              <p className="day001-day-theme">NETWORKING &amp; BACKEND INTEGRATION</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">RN · MOBILE DEV</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '29%' }} /></div>

        <p className="day001-summary">
          Day 106 connects the app to a server. React Native ships the same <strong>fetch</strong> API as the web, so
          I read and wrote data with <strong>async/await</strong> and full <strong>CRUD</strong> —{' '}
          <strong>GET</strong>, <strong>POST</strong>, <strong>PUT</strong> and <strong>DELETE</strong>. I handled
          failures properly (<strong>response.ok</strong> + try/catch), tracked <strong>loading and error</strong>{' '}
          state, wrapped it all in a reusable <strong>api() helper</strong>, and built the day’s{' '}
          <strong>Study Tracker</strong> CRUD project.
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

        <CardSection icon="🌐" title="1 · FETCHING DATA" cards={FETCHING} columns={3} />
        <CardSection icon="🔁" title="2 · CRUD & THE STUDY TRACKER" cards={CRUD} columns={4} />
        <CardSection icon="🧰" title="3 · PRODUCTION PATTERNS" cards={PATTERNS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#Networking</span><span>#CRUD</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
