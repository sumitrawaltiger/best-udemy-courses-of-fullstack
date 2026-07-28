import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const WEB_VITALS_URL = 'https://web.dev/articles/vitals';
const YT_URL = 'https://www.youtube.com/watch?v=_HjRSHeQ92k';

const LEARNT_TODAY = [
  {
    title: 'Frontend architecture',
    text: 'feature folders, shared UI, and clear data-fetch boundaries',
  },
  {
    title: 'Bundle optimization',
    text: 'code-split, tree-shake, and ship less JS to the browser',
  },
  {
    title: 'Lazy loading',
    text: 'load routes and heavy widgets only when needed',
  },
  {
    title: 'CDN & caching',
    text: 'static assets on a CDN with long cache + content hashes',
  },
  {
    title: 'SSR vs CSR',
    text: 'server HTML for SEO/TTFB; client render for rich interactivity',
  },
  {
    title: 'Hydration',
    text: 'SSR HTML becomes interactive when React attaches on the client',
  },
  {
    title: 'Core Web Vitals',
    text: 'LCP, INP, CLS — measure real user performance',
  },
  {
    title: 'Design system intro',
    text: 'tokens, components, and patterns shared across the product',
  },
  {
    title: 'Caching headers',
    text: 'Cache-Control for HTML vs hashed JS/CSS assets',
  },
  {
    title: 'Perf budget',
    text: 'set a max bundle size and fail CI when you exceed it',
  },
];

const FE_ARCH = [
  {
    icon: '🏗️',
    title: 'Frontend Architecture',
    titleClass: 'card-title-cyan',
    subtitle: 'structure the UI',
    description: 'Organize by feature; keep shared UI and API clients in clear layers.',
    code: 'features/ · components/ · api/\n// route-level code splitting',
  },
  {
    icon: '📦',
    title: 'Bundle Optimization',
    titleClass: 'card-title-green',
    subtitle: 'ship less JS',
    description: 'Tree-shake, split chunks, and avoid duplicate deps.',
    code: 'import("./HeavyChart")\n// dynamic import → separate chunk',
  },
  {
    icon: '🌍',
    title: 'CDN & Caching',
    titleClass: 'card-title-amber',
    subtitle: 'edge delivery',
    description: 'Hash filenames; cache forever on the CDN; short TTL for HTML.',
    code: 'app.abc123.js → Cache-Control: immutable\nindex.html → no-cache / revalidate',
  },
  {
    icon: '⚡',
    title: 'SSR vs CSR',
    titleClass: 'card-title-pink',
    subtitle: 'where to render',
    description: 'CSR is simple; SSR/SSG wins for SEO and first paint.',
    code: 'CSR: empty shell → fetch → render\nSSR: HTML ready → hydrate',
  },
];

const POLISH = [
  {
    icon: '📏',
    title: 'Core Web Vitals',
    titleClass: 'card-title-cyan',
    subtitle: 'LCP · INP · CLS',
    description: 'Optimize largest paint, interactivity, and layout stability.',
    code: 'LCP < 2.5s · INP < 200ms · CLS < 0.1\n// measure with CrUX / Lighthouse',
  },
  {
    icon: '🎨',
    title: 'Design System Intro',
    titleClass: 'card-title-green',
    subtitle: 'shared UI language',
    description: 'Tokens + reusable components keep UI consistent at scale.',
    code: 'tokens → Button, Input, Modal\n// one source of truth for the UI',
  },
  {
    icon: '💰',
    title: 'Perf Budget',
    titleClass: 'card-title-amber',
    subtitle: 'guardrails',
    description: 'Cap JS/CSS size in CI so regressions cannot sneak in.',
    code: 'bundlesize / lighthouse CI\nfail if main chunk > budget',
  },
];

const RESOURCES = [
  {
    icon: '📖',
    title: 'Web Vitals',
    titleClass: 'card-title-purple',
    subtitle: 'web.dev',
    description: 'Google’s Core Web Vitals — what to measure and why.',
    link: { href: WEB_VITALS_URL, label: 'Open web.dev →', external: true },
  },
  {
    icon: '▶️',
    title: 'Frontend System Design',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Frontend System Design Interview — Build Instagram — Day 94.',
    link: { href: YT_URL, label: 'Watch on YouTube →', external: true },
  },
  {
    icon: '📚',
    title: 'Lesson Page',
    titleClass: 'card-title-green',
    subtitle: 'full chapter',
    description: 'Open the Day 94 lesson for sections, quiz, and try-it snippets.',
    link: {
      href: '/learn/frontend-system-design',
      label: 'Open lesson →',
      external: false,
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

export default function Day094() {
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
          <Link to="/day-093" className="day001-nav-btn day001-nav-home">
            ← Day 93
          </Link>
          <p className="day001-datetime">Thunder Day 94 · 4 Apr 2027</p>
          <Link to="/day-095" className="day001-nav-btn day001-nav-next">
            Day 95 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Frontend</span>
              <span>System Design</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 94 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">FRONTEND SYSTEM DESIGN</p>
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
              <p className="day001-profile-role">FRONTEND</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '94%' }} />
        </div>

        <p className="day001-summary">
          Day ninety-four — design the client like a system: <strong>architecture</strong>,{' '}
          <strong>bundle optimization</strong>, <strong>CDN caching</strong>,{' '}
          <strong>SSR vs CSR</strong>, Web Vitals, and a design system. Reference:{' '}
          <a
            href={WEB_VITALS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="day001-inline-link"
          >
            Core Web Vitals
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

        <CardSection icon="🎨" title="FRONTEND ARCHITECTURE" cards={FE_ARCH} columns={4} />
        <CardSection icon="📏" title="PERF & POLISH" cards={POLISH} columns={3} />
        <CardSection icon="📚" title="FRONTEND RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#Frontend</span>
          <span>#SystemDesign</span>
          <span>#WebVitals</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
