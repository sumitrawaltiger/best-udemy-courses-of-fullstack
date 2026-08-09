import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NEXT_ROUTING = 'https://nextjs.org/docs/app/building-your-application/routing';
const NEXT_LAYOUTS = 'https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates';

const LEARNT_TODAY = [
  { title: 'File-system routing', text: 'a folder under app/ is a route; the URL mirrors the folder tree' },
  { title: 'page.tsx', text: 'the special file that makes a folder a publicly routable page' },
  { title: 'layout.tsx', text: 'wraps a segment and its children; persists across navigations, keeps state' },
  { title: 'Nested layouts', text: 'each segment can have its own layout — they nest, not replace' },
  { title: 'Dynamic segments', text: 'a [slug] folder captures a URL param, typed via the page props' },
  { title: 'loading.tsx & error.tsx', text: 'per-segment loading (Suspense) and error boundaries, for free' },
  { title: 'Route groups', text: '(marketing) folders organise routes without adding to the URL' },
  { title: 'Special files', text: 'template, not-found, default — conventions do the wiring, not config' },
];

const ROUTING = [
  {
    icon: '🗂️', title: 'Folders = Routes', titleClass: 'card-title-cyan', subtitle: 'app/ Directory',
    description:
      'The App Router maps the app/ folder to URLs. A page.tsx makes a folder routable; nested folders become nested paths. No route config — the file system is the router.',
    code: '// app/blog/[slug]/page.tsx  →  /blog/:slug\nexport default function Post(\n  { params }: { params: { slug: string } },\n) {\n  return <h1>{params.slug}</h1>;\n}',
  },
  {
    icon: '🧱', title: 'Layouts', titleClass: 'card-title-purple', subtitle: 'Shared, Persistent UI',
    description:
      'A layout.tsx wraps a segment and everything below it, rendering children through {children}. It persists across navigations (state kept) and nests — one per segment.',
    code: '// app/layout.tsx (root)\nexport default function RootLayout(\n  { children }: { children: React.ReactNode },\n) {\n  return <html><body><Nav />{children}</body></html>;\n}',
  },
];

const CONVENTIONS = [
  {
    icon: '⏳', title: 'loading & error', titleClass: 'card-title-cyan', subtitle: 'Per-Segment States',
    description:
      'Drop a loading.tsx and Next wraps the segment in Suspense automatically. An error.tsx becomes that segment’s error boundary — instant loading and error UX with zero wiring.',
    code: '// app/blog/loading.tsx → shown while blog loads\nexport default () => <Spinner />;\n\n// app/blog/error.tsx → "use client"; catches errors',
  },
  {
    icon: '📁', title: 'Route Groups', titleClass: 'card-title-purple', subtitle: '(folder) — No URL',
    description:
      'Wrap folders in parentheses to group routes (e.g. (marketing), (shop)) or give them different layouts, without those names appearing in the URL.',
    code: '// app/(marketing)/about/page.tsx  →  /about\n// app/(shop)/cart/page.tsx        →  /cart\n// each group can have its own layout.tsx',
  },
  {
    icon: '🧭', title: 'Nested Layouts', titleClass: 'card-title-amber', subtitle: 'They Compose',
    description:
      'Layouts nest instead of replacing: a root layout, then a dashboard layout, then a settings layout all wrap the page. Shared chrome stays mounted as you navigate within.',
    code: '// app/layout.tsx\n//   app/dashboard/layout.tsx\n//     app/dashboard/settings/page.tsx\n// → all three layouts wrap the page',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'App Router — Routing', titleClass: 'card-title-cyan', subtitle: 'Next.js Docs',
    description:
      'The routing fundamentals — pages, layouts, dynamic & catch-all segments, route groups and the special files that drive everything.',
    link: { href: NEXT_ROUTING, label: 'Open the routing docs →', external: true },
  },
  {
    icon: '🧱', title: 'Layouts & Templates', titleClass: 'card-title-purple', subtitle: 'Deep Dive',
    description:
      'How layouts persist, when to use a template instead, and how nesting composes shared UI across a whole segment tree.',
    link: { href: NEXT_LAYOUTS, label: 'Open the layouts docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Server vs Client', titleClass: 'card-title-amber', subtitle: 'Day 23 Preview',
    description:
      'Tomorrow — the biggest App Router idea: Server Components by default, "use client" for interactivity, and where the boundary should sit.',
    link: { href: '/day-023', label: 'Go to Day 23 →' },
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

export default function Day022() {
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
          <Link to="/day-021" className="day001-nav-btn day001-nav-prev">← Day 21</Link>
          <p className="day001-datetime">TypeScript Day 22 · 28 Jun 2027</p>
          <Link to="/day-023" className="day001-nav-btn day001-nav-next">Day 23 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Next.js</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 22 <span aria-hidden="true">▲</span></h1>
              <p className="day001-day-theme">NEXT.JS — APP ROUTER &amp; LAYOUTS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '22%' }} /></div>

        <p className="day001-summary">
          Going deep on Next.js. The <strong>App Router</strong> is <strong>file-system routing</strong> — a folder
          under <code>app/</code> is a route, and <code>page.tsx</code> makes it public. A <code>layout.tsx</code>{' '}
          wraps a segment and its children (rendered via <code>{'{children}'}</code>), <strong>persists</strong> across
          navigations and <strong>nests</strong> — root → dashboard → settings all wrap the page. Dynamic{' '}
          <code>[slug]</code> segments arrive as typed <code>params</code>. Conventions do the wiring:{' '}
          <strong>loading.tsx</strong> (auto Suspense), <strong>error.tsx</strong> (error boundary), and{' '}
          <strong>(route groups)</strong> that organise without touching the URL. <em>Next: Server vs Client
          Components.</em>
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

        <CardSection icon="🗂️" title="ROUTES & LAYOUTS" cards={ROUTING} columns={2} />
        <CardSection icon="⚙️" title="FILE CONVENTIONS" cards={CONVENTIONS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#NextJS</span><span>#AppRouter</span>
        </footer>
      </div>
    </div>
  );
}
