import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const HANDLERS_DOCS = 'https://nextjs.org/docs/app/building-your-application/routing/route-handlers';
const DEPLOY_DOCS = 'https://nextjs.org/docs/app/building-your-application/deploying';

const LEARNT_TODAY = [
  { title: 'Route Handlers', text: 'route.ts exports GET/POST/… — typed HTTP endpoints inside the app/ tree' },
  { title: 'Web Request/Response', text: 'handlers use the standard Request and Response (and NextResponse) APIs' },
  { title: 'Middleware', text: 'middleware.ts runs before a request completes — auth checks, redirects, headers' },
  { title: 'matcher', text: 'config.matcher limits which paths the middleware runs on' },
  { title: 'Env vars', text: 'server secrets stay server-only; NEXT_PUBLIC_ prefixes expose to the browser' },
  { title: 'Metadata & SEO', text: 'export metadata or generateMetadata per route for titles and Open Graph' },
  { title: 'Build & deploy', text: 'next build then deploy to Vercel (or any Node host / container)' },
  { title: 'When to use a handler', text: 'webhooks, third-party APIs, non-form mutations — otherwise prefer Server Actions' },
];

const HANDLERS = [
  {
    icon: '🔌', title: 'Route Handlers', titleClass: 'card-title-cyan', subtitle: 'app/api/…/route.ts',
    description:
      'Export functions named for HTTP methods to create typed endpoints. They use the Web Request/Response API — great for webhooks, third-party integrations, and clients that aren’t forms.',
    code: '// app/api/posts/route.ts\nexport async function GET() {\n  const posts = await db.post.findMany();\n  return Response.json(posts);\n}\nexport async function POST(req: Request) {\n  const body = await req.json();\n  /* … */\n}',
  },
  {
    icon: '🛡️', title: 'Middleware', titleClass: 'card-title-purple', subtitle: 'Before The Request',
    description:
      'middleware.ts runs at the edge before a route resolves — perfect for auth gating, redirects, locale detection or adding headers. A matcher scopes it to the paths you choose.',
    code: '// middleware.ts\nexport function middleware(req: NextRequest) {\n  if (!req.cookies.get("session"))\n    return NextResponse.redirect(new URL("/login", req.url));\n}\nexport const config = { matcher: ["/dashboard/:path*"] };',
  },
];

const SHIP = [
  {
    icon: '🔑', title: 'Env & Config', titleClass: 'card-title-cyan', subtitle: 'Secrets vs Public',
    description:
      'Environment variables are server-only by default — keep API keys and DB URLs there. Only values prefixed NEXT_PUBLIC_ are inlined into the client bundle.',
    code: '# .env.local\nDATABASE_URL=...            # server only\nNEXT_PUBLIC_SITE_URL=...     # sent to the browser',
  },
  {
    icon: '🏷️', title: 'Metadata & SEO', titleClass: 'card-title-purple', subtitle: 'Per Route',
    description:
      'Export a typed metadata object (or generateMetadata for dynamic routes) so each page gets the right title, description and Open Graph tags — checked by TypeScript.',
    code: 'import type { Metadata } from "next";\nexport const metadata: Metadata = {\n  title: "My App", description: "Built with Next.js",\n};',
  },
  {
    icon: '🚀', title: 'Build & Deploy', titleClass: 'card-title-amber', subtitle: 'To Production',
    description:
      'next build produces an optimised output; deploy to Vercel for zero-config hosting (its home platform), or run the Node server anywhere — a container, a VM, your own infra.',
    code: 'next build && next start   # self-host\n# or: push to Vercel → automatic build & deploy',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Route Handlers', titleClass: 'card-title-cyan', subtitle: 'Next.js Docs',
    description:
      'Defining GET/POST/PUT/DELETE handlers, reading the request, streaming responses, CORS and caching for API routes.',
    link: { href: HANDLERS_DOCS, label: 'Open the docs →', external: true },
  },
  {
    icon: '🚀', title: 'Deploying', titleClass: 'card-title-purple', subtitle: 'Next.js Docs',
    description:
      'Production builds, environment configuration, and deploy targets — Vercel, Node servers, Docker and static exports.',
    link: { href: DEPLOY_DOCS, label: 'Open the docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: React Native', titleClass: 'card-title-amber', subtitle: 'Day 27 Preview',
    description:
      'Tomorrow — the same React skills go mobile. React Native with Expo: set up a project, run it on a device, and understand how it maps to native.',
    link: { href: '/day-027', label: 'Go to Day 27 →' },
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

export default function Day026() {
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
          <Link to="/day-025" className="day001-nav-btn day001-nav-prev">← Day 25</Link>
          <p className="day001-datetime">TypeScript Day 26 · 26 Jan 2027</p>
          <Link to="/day-027" className="day001-nav-btn day001-nav-next">Day 27 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Next.js</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 26 <span aria-hidden="true">🔌</span></h1>
              <p className="day001-day-theme">NEXT.JS — HANDLERS, MIDDLEWARE &amp; DEPLOY</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '26%' }} /></div>

        <p className="day001-summary">
          Finishing Next.js — the backend bits and shipping. <strong>Route Handlers</strong>{' '}
          (<code>route.ts</code> exporting <code>GET</code>/<code>POST</code>/…) are typed HTTP endpoints using the
          standard Web <strong>Request/Response</strong> API — use them for webhooks and third-party clients (prefer{' '}
          <em>Server Actions</em> for form mutations). <strong>middleware.ts</strong> runs before a request resolves —
          auth gating, redirects, headers — scoped by a <code>matcher</code>. Keep secrets in server-only{' '}
          <strong>env vars</strong> (only <code>NEXT_PUBLIC_</code> reaches the browser), export typed{' '}
          <strong>metadata</strong> for SEO, then <code>next build</code> and deploy to <strong>Vercel</strong> or any
          Node host. <em>Next: React Native — React goes mobile.</em>
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

        <CardSection icon="🔌" title="HANDLERS & MIDDLEWARE" cards={HANDLERS} columns={2} />
        <CardSection icon="🚀" title="CONFIG & SHIP" cards={SHIP} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#NextJS</span><span>#Deploy</span>
        </footer>
      </div>
    </div>
  );
}
