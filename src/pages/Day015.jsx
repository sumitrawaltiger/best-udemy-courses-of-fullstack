import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const MDN_FETCH = 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'res.json() is any', text: 'fetch’s .json() returns Promise<any> — a hole in type safety we have to close' },
  { title: 'Generic fetch wrapper', text: 'a `getJSON<T>` helper returns Promise<T> so responses are typed at the call site' },
  { title: 'Model responses', text: 'describe API payloads with interfaces — one source of truth for the shape' },
  { title: 'DTOs', text: 'data-transfer types for what the server sends, separate from your app models' },
  { title: 'Check res.ok', text: 'fetch only rejects on network errors — check response.ok for HTTP errors' },
  { title: 'Query params typed', text: 'build URLs from typed params to avoid typos and missing values' },
  { title: 'Envelope types', text: 'model wrappers like { data: T; error?: string } generically' },
  { title: 'Type ≠ runtime check', text: 'annotations are erased — the server could still lie, so validate at the edge' },
  { title: 'Abort & signal', text: 'AbortController cancels requests; the signal is fully typed' },
  { title: 'Map DTO → model', text: 'transform the raw response into a clean typed model your app uses' },
];

const WRAPPER = [
  {
    icon: '🕳️', title: 'The any Hole', titleClass: 'card-title-cyan', subtitle: 'res.json()',
    description: 'Fetch’s .json() resolves to any, so everything downstream loses checking. Left unfixed, one wrong field crashes at runtime — exactly what TS should prevent.',
    code: 'const res = await fetch("/api/user");\nconst data = await res.json(); // any 😬',
  },
  {
    icon: '🧰', title: 'Generic getJSON<T>', titleClass: 'card-title-purple', subtitle: 'Type The Result',
    description: 'A tiny generic wrapper casts the parsed body to T and returns Promise<T>. Every caller now gets a typed response with autocomplete and checks.',
    code: 'async function getJSON<T>(url: string): Promise<T> {\n  const res = await fetch(url);\n  if (!res.ok) throw new Error(`HTTP ${res.status}`);\n  return res.json() as Promise<T>;\n}',
  },
  {
    icon: '📞', title: 'Typed Calls', titleClass: 'card-title-amber', subtitle: 'Pass The Shape',
    description: 'Call the wrapper with the expected type and the returned value is fully typed — the JSON boundary is finally under the type system’s control.',
    code: 'interface User { id: number; name: string }\nconst user = await getJSON<User>("/api/user");\nuser.name; // string ✅',
  },
];

const MODEL = [
  {
    icon: '🧩', title: 'Model Responses', titleClass: 'card-title-cyan', subtitle: 'One Source Of Truth',
    description: 'Describe each API payload with an interface. Change it in one place and every usage updates — the shape of your data becomes documentation.',
    code: 'interface Post {\n  id: number;\n  title: string;\n  authorId: number;\n}',
  },
  {
    icon: '✉️', title: 'Envelope Types', titleClass: 'card-title-blue', subtitle: 'Generic Wrappers',
    description: 'Many APIs wrap data in { data, error, meta }. Model that once generically and reuse it for every endpoint’s payload type.',
    code: 'interface ApiResponse<T> {\n  data: T;\n  error?: string;\n}\nconst r = await getJSON<ApiResponse<Post[]>>("/posts");',
  },
  {
    icon: '🔗', title: 'Typed URLs', titleClass: 'card-title-amber', subtitle: 'Params Without Typos',
    description: 'Build query strings from a typed params object with URLSearchParams so a missing or misspelled parameter becomes a compile error.',
    code: 'function q(params: Record<string, string>) {\n  return "?" + new URLSearchParams(params);\n}\ngetJSON<Post[]>("/posts" + q({ tag: "ts" }));',
  },
  {
    icon: '🛑', title: 'Abort & signal', titleClass: 'card-title-lime', subtitle: 'Cancel Requests',
    description: 'AbortController lets you cancel a fetch — essential for cleaning up requests when a component unmounts. The signal is fully typed.',
    code: 'const c = new AbortController();\nfetch(url, { signal: c.signal });\nc.abort();',
  },
];

const SAFETY = [
  {
    icon: '⚠️', title: 'Types Aren’t Checks', titleClass: 'card-title-cyan', subtitle: 'The Server Can Lie',
    description: 'getJSON<T> trusts the server. Annotations are erased at runtime, so a wrong payload passes silently. Validate untrusted data at the boundary.',
    code: '// tomorrow: validate raw with a guard or schema\nif (isUser(raw)) use(raw);',
  },
  {
    icon: '🔄', title: 'DTO → Model', titleClass: 'card-title-purple', subtitle: 'Clean Your Data',
    description: 'Keep the raw server shape (DTO) separate from your app model. A small mapper converts snake_case, dates, and nested ids into clean typed objects.',
    code: 'const toUser = (d: UserDTO): User => ({\n  id: d.id, name: d.full_name,\n});',
  },
  {
    icon: '🎯', title: 'One API Module', titleClass: 'card-title-amber', subtitle: 'Centralize Calls',
    description: 'Put getJSON and every endpoint function in one api.ts. Components call typed functions, never raw fetch — consistent, testable, safe.',
    code: 'export const api = {\n  getUser: () => getJSON<User>("/api/user"),\n};',
  },
  {
    icon: '🔜', title: 'Next: Runtime Validation', titleClass: 'card-title-lime', subtitle: 'Day 16 Preview',
    description: 'Tomorrow: closing the trust gap with runtime validation (Zod-style schemas) so types and reality always agree.',
    link: { href: '/day-016', label: 'Go to Day 16 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Fetch API (MDN)', titleClass: 'card-title-cyan', subtitle: 'The Reference',
    description: 'How fetch, Response, and Request work — status, .ok, headers, and body parsing. TypeScript types layer neatly on top of these.',
    link: { href: MDN_FETCH, label: 'Read the Fetch API →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Build getJSON',
    description: 'Write the generic wrapper and call it with different interfaces to watch the return type change. The JSON boundary becomes tangible.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'A typed API layer is the backbone of every React/Next.js screen — data in, typed, safe, and testable.',
    link: { href: '/roadmap', label: 'See the full roadmap →' },
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

export default function Day015() {
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
          <Link to="/day-014" className="day001-nav-btn day001-nav-prev">← Day 14</Link>
          <p className="day001-datetime">TypeScript Day 15 · 31 Jul 2026</p>
          <Link to="/day-016" className="day001-nav-btn day001-nav-next">Day 16 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>APIs</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 15 <span aria-hidden="true">🌐</span></h1>
              <p className="day001-day-theme">TYPED fetch & API RESPONSES</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">TS · TYPESCRIPT</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '15%' }} /></div>

        <p className="day001-summary">
          Day 15 closes the biggest hole in type safety: <code>res.json()</code> returns <code>any</code>. I built a
          generic <strong>getJSON&lt;T&gt;</strong> wrapper so responses are typed, modelled payloads with{' '}
          <strong>interfaces</strong> and <strong>envelope</strong> types, checked <code>res.ok</code>, and mapped
          raw <strong>DTOs</strong> into clean app models. I also learned the crucial caveat — types are erased, so
          untrusted data still needs runtime validation (tomorrow’s topic).
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

        <CardSection icon="🧰" title="A TYPED fetch WRAPPER" cards={WRAPPER} columns={3} />
        <CardSection icon="🧩" title="MODELLING RESPONSES" cards={MODEL} columns={4} />
        <CardSection icon="🛡️" title="SAFETY & STRUCTURE" cards={SAFETY} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#APIs</span><span>#WebDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
