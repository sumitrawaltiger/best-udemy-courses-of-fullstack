import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const FETCH_MDN = 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch';
const EXPO_SECURE = 'https://docs.expo.dev/versions/latest/sdk/securestore/';
const CORS = 'https://expressjs.com/en/resources/middleware/cors.html';

const LEARNT_TODAY = [
  { title: 'API base URL', text: 'EXPO_PUBLIC_API_URL / VITE_API_URL — one env per environment (dev, prod)' },
  { title: 'Authorization header', text: 'attach Bearer token after login on every protected request' },
  { title: 'Store the token', text: 'web: memory or httpOnly cookie patterns; RN: SecureStore, not AsyncStorage for secrets' },
  { title: 'Handle 401', text: 'clear session and send the user to login when the token is expired' },
  { title: 'CORS must allow you', text: 'server CORS_ORIGIN must include your web origin; native apps are not browser CORS' },
  { title: 'Typed client optional', text: 'fetch wrapper or openapi-typescript client keeps request shapes honest' },
  { title: 'Loading & errors', text: 'surface API error.message in the UI — same JSON shape from Day 133' },
  { title: 'Pagination UI', text: 'use items + hasMore / total from Day 136 for infinite scroll or pages' },
  { title: 'Full stack loop', text: 'Days 126–140: build, harden, deploy, document, and consume the API' },
];

const CORE = [
  {
    icon: '🌐', title: 'Base URL From Env', titleClass: 'card-title-cyan', subtitle: 'One Config',
    description: 'Never hardcode production hosts. Read the API URL from env so local and prod builds differ cleanly.',
    code: '// Vite\nconst API = import.meta.env.VITE_API_URL;\n// Expo\nconst API = process.env.EXPO_PUBLIC_API_URL;\n\nfetch(`${API}/tasks`, { headers });',
  },
  {
    icon: '🔑', title: 'Attach The JWT', titleClass: 'card-title-purple', subtitle: 'Bearer',
    description: 'After login, save the token and send it on protected calls. A small apiFetch helper avoids repeating headers.',
    code: 'async function apiFetch(path, opts = {}) {\n  const token = await getToken();\n  return fetch(`${API}${path}`, {\n    ...opts,\n    headers: {\n      "Content-Type": "application/json",\n      ...(token ? { Authorization: `Bearer ${token}` } : {}),\n      ...opts.headers,\n    },\n  });\n}',
  },
  {
    icon: '📱', title: 'SecureStore On Mobile', titleClass: 'card-title-amber', subtitle: 'RN',
    description: 'Put access tokens in SecureStore on React Native. Clear them on logout and on 401.',
    code: 'import * as SecureStore from "expo-secure-store";\nawait SecureStore.setItemAsync("token", jwt);\nconst token = await SecureStore.getItemAsync("token");',
  },
];

const WIRE = [
  {
    icon: '🌍', title: 'CORS For Web', titleClass: 'card-title-cyan', subtitle: 'Server Side',
    description: 'Browsers enforce CORS. Set CORS_ORIGIN to your web app URL. Mobile native HTTP does not use browser CORS.',
    code: 'app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));',
  },
  {
    icon: '🚫', title: '401 → Login', titleClass: 'card-title-purple', subtitle: 'Session End',
    description: 'If the API returns 401, wipe the token and navigate to sign-in. Do not retry forever with a dead JWT.',
    code: 'if (res.status === 401) {\n  await clearToken();\n  router.replace("/login");\n}',
  },
  {
    icon: '📡', title: 'Use List Meta', titleClass: 'card-title-amber', subtitle: 'Pagination',
    description: 'Render from { items, page, hasMore }. Fetch the next page when the list nears the end.',
    code: 'const data = await apiFetch(`/tasks?page=${page}`).then(r => r.json());\nsetItems((prev) => [...prev, ...data.items]);',
  },
  {
    icon: '🚀', title: 'What Comes Next', titleClass: 'card-title-lime', subtitle: 'Day 141 Preview',
    description: 'Tomorrow: WebSockets with Socket.IO — realtime events, rooms, and JWT on the handshake, still on Express.',
    link: { href: '/day-141', label: 'Go to Day 141 →' },
  },
];

const RESOURCES = [
  {
    icon: '🌐', title: 'Using Fetch', titleClass: 'card-title-cyan', subtitle: 'MDN',
    description: 'Headers, JSON bodies, and error handling with the Fetch API.',
    link: { href: FETCH_MDN, label: 'Read Fetch guide →', external: true },
  },
  {
    icon: '🔒', title: 'SecureStore', titleClass: 'card-title-purple', subtitle: 'Expo',
    description: 'Encrypted storage for tokens on React Native.',
    link: { href: EXPO_SECURE, label: 'Read SecureStore docs →', external: true },
  },
  {
    icon: '🌍', title: 'CORS', titleClass: 'card-title-amber', subtitle: 'Express',
    description: 'Allow your web origin to call the API from the browser.',
    link: { href: CORS, label: 'Read CORS docs →', external: true },
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

export default function Day140() {
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
          <Link to="/day-139" className="day001-nav-btn day001-nav-prev">← Day 139</Link>
          <p className="day001-datetime">Express Day 140</p>
          <Link to="/day-141" className="day001-nav-btn day001-nav-next">Day 141 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>Clients</span><span>Full Stack</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 140 <span aria-hidden="true">🔗</span></h1>
              <p className="day001-day-theme">CONNECTING CLIENTS TO THE API</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">EXPRESS · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '39%' }} /></div>

        <p className="day001-summary">
          Day 140 closes the loop. Point <strong>web</strong> and <strong>React Native</strong> at your
          API URL, send the <strong>JWT</strong>, handle <strong>401</strong>, respect{' '}
          <strong>CORS</strong>, and render paginated data — clients and server speaking the same
          contract.
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

        <CardSection icon="🌐" title="1 · CLIENT SETUP" cards={CORE} columns={3} />
        <CardSection icon="📡" title="2 · CORS, 401 & LISTS" cards={WIRE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Express</span><span>#FullStack</span><span>#ReactNative</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
