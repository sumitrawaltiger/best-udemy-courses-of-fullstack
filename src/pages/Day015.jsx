import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NEXT_TS = 'https://nextjs.org/docs/app/api-reference/config/typescript';
const NEXT_APP_ROUTER = 'https://nextjs.org/docs/app/building-your-application/routing';

const LEARNT_TODAY = [
  { title: 'Next.js is TS-first', text: 'create-next-app scaffolds a typed project; .tsx pages and layouts out of the box' },
  { title: 'App Router', text: 'folders are routes; page.tsx renders, layout.tsx wraps, all typed' },
  { title: 'Server vs client', text: 'components are Server by default; add "use client" only where you need hooks/interactivity' },
  { title: 'Typed page props', text: 'params and searchParams arrive as typed props to a page' },
  { title: 'Route handlers', text: 'app/api/*/route.ts gives typed Request/Response API endpoints' },
  { title: 'Data fetching', text: 'async Server Components can await data directly — no useEffect for initial load' },
  { title: 'Metadata', text: 'export a typed Metadata object for SEO per route' },
  { title: 'End-to-end types', text: 'share types between server and client — one source of truth across the app' },
];

const ROUTER = [
  {
    icon: '🗂️', title: 'The App Router', titleClass: 'card-title-cyan', subtitle: 'Folders = Routes',
    description:
      'Each folder under app/ is a route. page.tsx is the view, layout.tsx wraps its children, and loading/error files handle those states — all in TypeScript with typed props.',
    code: '// app/blog/[slug]/page.tsx\nexport default function Post(\n  { params }: { params: { slug: string } },\n) { return <h1>{params.slug}</h1>; }',
  },
  {
    icon: '🖥️', title: 'Server vs Client', titleClass: 'card-title-purple', subtitle: '"use client"',
    description:
      'Components render on the server by default — great for data and SEO. Add "use client" only when you need state, effects or event handlers, keeping bundles lean.',
    code: '// server component (default): can await data\n// client component:\n"use client";\nimport { useState } from "react";',
  },
];

const FEATURES = [
  {
    icon: '🔌', title: 'Route Handlers', titleClass: 'card-title-cyan', subtitle: 'Typed APIs',
    description:
      'app/api/.../route.ts exports typed GET/POST handlers with the Web Request/Response API. Your backend and frontend can share the same TypeScript types.',
    code: '// app/api/hello/route.ts\nexport async function GET(req: Request) {\n  return Response.json({ ok: true });\n}',
  },
  {
    icon: '📥', title: 'Data In Server Components', titleClass: 'card-title-purple', subtitle: 'await Directly',
    description:
      'An async Server Component awaits data before rendering — no client-side useEffect for the initial load. Type the fetched data and pass it down as typed props.',
    code: 'export default async function Page() {\n  const posts: Post[] = await getPosts();\n  return <List posts={posts} />;\n}',
  },
  {
    icon: '🏷️', title: 'Typed Metadata', titleClass: 'card-title-amber', subtitle: 'SEO Per Route',
    description:
      'Export a typed Metadata object (or generateMetadata) from a route for title, description and Open Graph tags — checked by TypeScript, no stray keys.',
    code: 'import type { Metadata } from "next";\nexport const metadata: Metadata = {\n  title: "TypeScript Journey",\n};',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Next.js + TypeScript', titleClass: 'card-title-cyan', subtitle: 'Official',
    description:
      'How Next.js uses TypeScript — the plugin, typed routes, config, and end-to-end type safety across server and client.',
    link: { href: NEXT_TS, label: 'Open the Next.js TS docs →', external: true },
  },
  {
    icon: '🗂️', title: 'App Router', titleClass: 'card-title-purple', subtitle: 'Routing',
    description:
      'The routing model — pages, layouts, server/client components, route handlers and data fetching — the backbone of a Year-1 Next.js app.',
    link: { href: NEXT_APP_ROUTER, label: 'Open the routing docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Year-1 Roadmap', titleClass: 'card-title-amber', subtitle: 'Day 16 Preview',
    description:
      'Tomorrow — wrap the TypeScript foundation and map the rest of Year 1: React Native, Express/Node, and where each track lives on the site.',
    link: { href: '/day-016', label: 'Go to Day 16 →' },
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
          <p className="day001-datetime">TypeScript Day 15</p>
          <Link to="/day-016" className="day001-nav-btn day001-nav-next">Day 16 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Next.js</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 15 <span aria-hidden="true">▲</span></h1>
              <p className="day001-day-theme">NEXT.JS WITH TYPESCRIPT</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '15%' }} /></div>

        <p className="day001-summary">
          React, but full-stack. <strong>Next.js is TypeScript-first</strong> — <code>create-next-app</code> scaffolds
          a typed project. The <strong>App Router</strong> maps folders to routes: <code>page.tsx</code> renders,{' '}
          <code>layout.tsx</code> wraps, and <strong>params/searchParams</strong> arrive typed. Components are{' '}
          <strong>Server by default</strong> (await data directly, great for SEO); add <code>"use client"</code> only
          for interactivity. <strong>Route handlers</strong> (<code>route.ts</code>) give typed API endpoints, and a
          typed <strong>Metadata</strong> export handles SEO per route. Best of all — <strong>share types</strong>{' '}
          across server and client for one source of truth. <em>Next: wrap Year 1’s foundation.</em>
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

        <CardSection icon="🗂️" title="APP ROUTER" cards={ROUTER} columns={2} />
        <CardSection icon="🔌" title="APIS · DATA · SEO" cards={FEATURES} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#NextJS</span><span>#React</span>
        </footer>
      </div>
    </div>
  );
}
