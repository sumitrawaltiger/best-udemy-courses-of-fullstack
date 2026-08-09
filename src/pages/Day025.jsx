import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const RENDER_DOCS = 'https://nextjs.org/docs/app/building-your-application/rendering';
const CACHE_DOCS = 'https://nextjs.org/docs/app/building-your-application/caching';

const LEARNT_TODAY = [
  { title: 'Static vs dynamic', text: 'a route is prerendered at build time unless something makes it dynamic' },
  { title: 'SSG', text: 'Static Site Generation — HTML built once at build time, served instantly from a CDN' },
  { title: 'SSR', text: 'Server-Side Rendering — HTML built per request when data must be fresh or personalised' },
  { title: 'ISR', text: 'Incremental Static Regeneration — static, but revalidated in the background on a timer' },
  { title: 'What makes it dynamic', text: 'cookies(), headers(), no-store fetches or searchParams opt a route into per-request rendering' },
  { title: 'generateStaticParams', text: 'prebuild dynamic routes (e.g. every blog slug) at build time' },
  { title: 'Two caches', text: 'the Data Cache (fetch results) and the Full Route Cache (rendered routes)' },
  { title: 'revalidate controls it', text: 'a number = ISR timer; 0 or no-store = always dynamic' },
];

const MODES = [
  {
    icon: '📦', title: 'SSG & ISR', titleClass: 'card-title-cyan', subtitle: 'Static, Fast',
    description:
      'By default routes are static — rendered at build and served from the edge. Add a revalidate window for ISR: still static and instant, but refreshed in the background so content stays current.',
    code: '// ISR — static + refresh every 60s\nexport const revalidate = 60;\n\n// prebuild dynamic routes:\nexport async function generateStaticParams() {\n  return (await getSlugs()).map((slug) => ({ slug }));\n}',
  },
  {
    icon: '⚡', title: 'SSR (Dynamic)', titleClass: 'card-title-purple', subtitle: 'Fresh Per Request',
    description:
      'When data must be current or personalised, render on each request. Reading cookies() or headers(), a no-store fetch, or force-dynamic all opt the route into SSR.',
    code: "export const dynamic = \"force-dynamic\";\n// or implicitly:\nconst c = cookies();            // → dynamic\nfetch(url, { cache: \"no-store\" }); // → dynamic",
  },
];

const CACHE = [
  {
    icon: '🗄️', title: 'The Data Cache', titleClass: 'card-title-cyan', subtitle: 'fetch Results',
    description:
      'Next caches fetch responses across requests and deploys. Control it per call with the cache and next.revalidate options — cache forever, revalidate on a timer, or never cache.',
    code: 'fetch(url);                         // cached (default)\nfetch(url, { next: { revalidate: 60 } }); // ISR\nfetch(url, { cache: "no-store" });  // never cached',
  },
  {
    icon: '🛣️', title: 'The Full Route Cache', titleClass: 'card-title-purple', subtitle: 'Rendered Routes',
    description:
      'Static routes are rendered once and their HTML/RSC payload is cached. A dynamic route (or a revalidation) skips or refreshes it. Understanding both caches explains "why is my data stale?".',
    code: '// static route → cached HTML/RSC payload\n// revalidatePath / revalidateTag → busts it\n// dynamic route → rendered every request',
  },
  {
    icon: '🎯', title: 'Choose Per Route', titleClass: 'card-title-amber', subtitle: 'Right Strategy',
    description:
      'Marketing pages → SSG. A blog → ISR. A dashboard with user data → SSR. Next lets you pick per route (even per fetch), so each page gets the fastest correct strategy.',
    footer: 'marketing → SSG · blog → ISR · dashboard → SSR',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Rendering', titleClass: 'card-title-cyan', subtitle: 'Next.js Docs',
    description:
      'Static vs dynamic rendering, streaming, and how the App Router decides — the full mental model with examples.',
    link: { href: RENDER_DOCS, label: 'Open the docs →', external: true },
  },
  {
    icon: '🗄️', title: 'Caching', titleClass: 'card-title-purple', subtitle: 'The Deep Dive',
    description:
      'The four caching layers (request memoization, Data Cache, Full Route Cache, Router Cache) and how to opt in or out of each.',
    link: { href: CACHE_DOCS, label: 'Open the docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Handlers & Deploy', titleClass: 'card-title-amber', subtitle: 'Day 26 Preview',
    description:
      'Tomorrow — Route Handlers (typed API endpoints), middleware, environment config, and deploying a Next.js app to production.',
    link: { href: '/day-026', label: 'Go to Day 26 →' },
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

export default function Day025() {
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
          <Link to="/day-024" className="day001-nav-btn day001-nav-prev">← Day 24</Link>
          <p className="day001-datetime">TypeScript Day 25 · 1 Jul 2027</p>
          <Link to="/day-026" className="day001-nav-btn day001-nav-next">Day 26 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Next.js</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 25 <span aria-hidden="true">🗄️</span></h1>
              <p className="day001-day-theme">NEXT.JS — RENDERING &amp; CACHING</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '25%' }} /></div>

        <p className="day001-summary">
          How and when pages render. A route is <strong>static (SSG)</strong> by default — built once, served from the
          edge. Add a <code>revalidate</code> window for <strong>ISR</strong> (static, refreshed on a timer), or make
          it <strong>dynamic (SSR)</strong> when data must be fresh — reading <code>cookies()</code>/<code>headers()</code>,
          a <code>no-store</code> fetch, or <code>force-dynamic</code> all trigger per-request rendering. Prebuild
          dynamic paths with <strong>generateStaticParams</strong>. Two caches explain freshness: the{' '}
          <strong>Data Cache</strong> (fetch results) and the <strong>Full Route Cache</strong> (rendered routes),
          both bust with <code>revalidatePath/Tag</code>. Pick the right strategy <em>per route</em>.{' '}
          <em>Next: route handlers &amp; deploy.</em>
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

        <CardSection icon="🎨" title="RENDERING MODES" cards={MODES} columns={2} />
        <CardSection icon="🗄️" title="THE CACHES" cards={CACHE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#NextJS</span><span>#Rendering</span>
        </footer>
      </div>
    </div>
  );
}
