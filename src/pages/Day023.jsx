import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const RSC_DOCS = 'https://nextjs.org/docs/app/building-your-application/rendering/server-components';
const CC_DOCS = 'https://nextjs.org/docs/app/building-your-application/rendering/client-components';

const LEARNT_TODAY = [
  { title: 'Server by default', text: 'in the App Router every component is a Server Component unless you opt out' },
  { title: 'Server Components', text: 'run on the server, can be async, fetch data directly, and ship zero JS to the client' },
  { title: '"use client"', text: 'a directive at the top of a file marks it (and its imports) as a Client Component' },
  { title: 'Client Components', text: 'needed for state, effects, event handlers and browser APIs — hooks live here' },
  { title: 'Keep client leaves small', text: 'push "use client" down to the interactive leaf, not the whole tree' },
  { title: 'Server → Client props', text: 'a Server Component can render a Client one and pass serialisable props' },
  { title: 'No secrets on the client', text: 'API keys and DB calls stay in Server Components — they never reach the browser' },
  { title: 'children pattern', text: 'pass Server Components as children into Client Components to keep them on the server' },
];

const SERVER = [
  {
    icon: '🖥️', title: 'Server Components', titleClass: 'card-title-cyan', subtitle: 'Default · Zero JS',
    description:
      'They render on the server, can be async, and fetch data directly — a database call or fetch right in the component. They send HTML, not JavaScript, so bundles stay tiny and secrets stay server-side.',
    code: '// app/page.tsx — a Server Component\nexport default async function Page() {\n  const posts = await db.post.findMany(); // safe on server\n  return <List posts={posts} />;\n}',
  },
  {
    icon: '🔒', title: 'What Stays Server-Only', titleClass: 'card-title-purple', subtitle: 'Secrets & Data',
    description:
      'Database queries, API keys, heavy dependencies — all live in Server Components and never ship to the browser. Great for security and for keeping the client bundle small.',
    code: '// ✅ server: process.env.DB_URL, await db.query(...)\n// ❌ never expose these in a client component',
  },
];

const CLIENT = [
  {
    icon: '🖱️', title: '"use client"', titleClass: 'card-title-cyan', subtitle: 'Opt Into Interactivity',
    description:
      'Add "use client" at the top of a file when you need state, effects, event handlers or browser APIs. That file and everything it imports become Client Components.',
    code: '"use client";\nimport { useState } from "react";\nexport function Counter() {\n  const [n, setN] = useState(0);\n  return <button onClick={() => setN(n + 1)}>{n}</button>;\n}',
  },
  {
    icon: '🍃', title: 'Push It Down', titleClass: 'card-title-purple', subtitle: 'Small Client Leaves',
    description:
      'Don’t mark a whole page "use client". Keep the interactive bit — a button, a form — as a small leaf, and keep the rest on the server. Less JS, faster pages.',
    code: '// page.tsx (server) renders:\n//   <Article />        ← server\n//   <LikeButton />     ← "use client" leaf',
  },
  {
    icon: '🧩', title: 'Compose Them', titleClass: 'card-title-amber', subtitle: 'children Pattern',
    description:
      'A Server Component can render a Client Component and pass serialisable props. To keep a Server Component inside a Client one, pass it as children — it still renders on the server.',
    code: '// Client wrapper keeps children on the server\n<ClientTabs>\n  <ServerHeavyChart />   {/* stays server */}\n</ClientTabs>',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Server Components', titleClass: 'card-title-cyan', subtitle: 'Next.js Docs',
    description:
      'What runs on the server, how async data fetching works, streaming, and why the default keeps client JavaScript minimal.',
    link: { href: RSC_DOCS, label: 'Open the docs →', external: true },
  },
  {
    icon: '🖱️', title: 'Client Components', titleClass: 'card-title-purple', subtitle: 'Next.js Docs',
    description:
      'When and how to use "use client", the boundary rules, and patterns for interleaving server and client trees.',
    link: { href: CC_DOCS, label: 'Open the docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Data & Actions', titleClass: 'card-title-amber', subtitle: 'Day 24 Preview',
    description:
      'Tomorrow — fetching in Server Components, mutating with Server Actions (no API route needed), and revalidating cached data.',
    link: { href: '/day-024', label: 'Go to Day 24 →' },
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

export default function Day023() {
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
          <Link to="/day-022" className="day001-nav-btn day001-nav-prev">← Day 22</Link>
          <p className="day001-datetime">TypeScript Day 23</p>
          <Link to="/day-024" className="day001-nav-btn day001-nav-next">Day 24 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Next.js</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 23 <span aria-hidden="true">🖥️</span></h1>
              <p className="day001-day-theme">NEXT.JS — SERVER vs CLIENT COMPONENTS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '23%' }} /></div>

        <p className="day001-summary">
          The defining App Router idea. Every component is a <strong>Server Component by default</strong> — it runs on
          the server, can be <code>async</code>, fetches data directly (even a DB call), and ships{' '}
          <strong>zero JavaScript</strong>, keeping secrets server-side. Add <strong>"use client"</strong> to opt a
          file (and its imports) into a <strong>Client Component</strong> — required for <em>state, effects, event
          handlers and browser APIs</em>. The skill is drawing the boundary well: keep client components as{' '}
          <strong>small interactive leaves</strong>, pass server components as <code>children</code> into client ones,
          and let the server do the heavy lifting. <em>Next: data fetching &amp; Server Actions.</em>
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

        <CardSection icon="🖥️" title="SERVER COMPONENTS" cards={SERVER} columns={2} />
        <CardSection icon="🖱️" title="CLIENT COMPONENTS" cards={CLIENT} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#NextJS</span><span>#RSC</span>
        </footer>
      </div>
    </div>
  );
}
