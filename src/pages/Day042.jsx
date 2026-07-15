import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRIMER_URL =
  'https://github.com/donnemartin/system-design-primer#load-balancer';
const DOCS_URL = 'https://www.nginx.com/resources/glossary/load-balancing/';

const LEARNT_TODAY = [
  {
    title: 'Load balancer',
    text: 'spreads incoming traffic across many servers',
  },
  {
    title: 'Horizontal scaling',
    text: 'add more servers behind the LB instead of a bigger box',
  },
  {
    title: 'Algorithms',
    text: 'round-robin, least-connections, IP-hash',
  },
  {
    title: 'Health checks',
    text: 'stop routing to servers that are down',
  },
  {
    title: 'Reverse proxy',
    text: 'a single front door that forwards to backends',
  },
  {
    title: 'Forward vs reverse',
    text: 'forward proxy fronts clients; reverse proxy fronts servers',
  },
  {
    title: 'L4 vs L7',
    text: 'balance on TCP (fast) or HTTP (content-aware)',
  },
  {
    title: 'Sticky sessions',
    text: 'pin a user to one server — or stay stateless',
  },
  {
    title: 'TLS termination',
    text: 'decrypt HTTPS once at the proxy',
  },
  {
    title: 'Nginx / HAProxy',
    text: 'the workhorse tools for both jobs',
  },
];

const BALANCING = [
  {
    icon: '⚖️',
    title: 'What & Why',
    titleClass: 'card-title-cyan',
    subtitle: 'spread the load',
    description: 'One server has a ceiling — a balancer fans traffic across many.',
    code: '        ┌─ server A\nclient ─ LB ─┼─ server B\n        └─ server C',
  },
  {
    icon: '🎯',
    title: 'Algorithms',
    titleClass: 'card-title-green',
    subtitle: 'who gets it',
    description: 'Pick how the next request is assigned to a server.',
    code: 'round-robin      → next in line\nleast-connections → the idlest\nip-hash          → same client → same server',
  },
  {
    icon: '❤️',
    title: 'Health Checks',
    titleClass: 'card-title-amber',
    subtitle: 'skip the dead',
    description: 'The LB pings each server and removes the ones failing.',
    code: '// GET /health every few seconds\n// 200 -> in rotation, timeout -> out',
  },
];

const PROXIES = [
  {
    icon: '🚪',
    title: 'Reverse Proxy',
    titleClass: 'card-title-cyan',
    subtitle: 'one front door',
    description: 'A single entry point that forwards to internal servers.',
    code: '// Nginx\nlocation / { proxy_pass http://backend; }',
  },
  {
    icon: '↔️',
    title: 'Forward vs Reverse',
    titleClass: 'card-title-green',
    subtitle: 'which side',
    description: 'Forward proxies act for clients; reverse proxies for servers.',
    code: 'forward: client → proxy → internet\nreverse: internet → proxy → servers',
  },
  {
    icon: '🧭',
    title: 'L4 vs L7',
    titleClass: 'card-title-amber',
    subtitle: 'TCP or HTTP',
    description: 'L4 is fast and blind; L7 can route by path, host, or header.',
    code: 'L4: balance TCP connections\nL7: /api → apiPool, /img → cdnPool',
  },
  {
    icon: '🔐',
    title: 'TLS & Sticky',
    titleClass: 'card-title-pink',
    subtitle: 'sessions',
    description: 'Terminate TLS at the proxy; pin sessions or go stateless.',
    code: '// terminate HTTPS once at the edge\n// sticky: cookie -> same backend',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'System Design Primer',
    titleClass: 'card-title-purple',
    subtitle: 'GitHub reference',
    description: 'The load balancer & reverse proxy sections of system-design-primer.',
    link: { href: PRIMER_URL, label: 'Open on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'NGINX Load Balancing',
    titleClass: 'card-title-green',
    subtitle: 'Official glossary',
    description: 'NGINX’s guide to load balancing algorithms and reverse proxying.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Proxy vs LB',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Proxy vs Reverse Proxy vs Load Balancer — simply explained — TechWorld with Nana.',
    link: {
      href: 'https://www.youtube.com/watch?v=xo5V9g9joFs',
      label: 'Watch on YouTube →',
      external: true,
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

export default function Day042() {
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
          <Link to="/day-041" className="day001-nav-btn day001-nav-home">
            ← Day 41
          </Link>
          <p className="day001-datetime">Thunder Day 42 · 27 Aug 2026</p>
          <Link to="/day-043" className="day001-nav-btn day001-nav-next">
            Day 43 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>System Design</span>
              <span>Scalability</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 42 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">LOAD BALANCING & REVERSE PROXIES</p>
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
              <p className="day001-profile-role">SYSTEM DESIGN</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '42%' }} />
        </div>

        <p className="day001-summary">
          Day forty-two — one server has a ceiling, so I scale <strong>horizontally</strong> and put
          a <strong>load balancer</strong> in front to fan traffic across many. It picks a server by{' '}
          <strong>algorithm</strong> (round-robin, least-connections, IP-hash) and drops any that
          fail <strong>health checks</strong>. A <strong>reverse proxy</strong> gives one front door,
          terminates <strong>TLS</strong>, and can route by path at <strong>L7</strong>. Nginx and
          HAProxy do both. Reference:{' '}
          <a href={PRIMER_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            system-design-primer
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

        <CardSection icon="⚖️" title="LOAD BALANCING" cards={BALANCING} columns={3} />
        <CardSection icon="🚪" title="PROXIES" cards={PROXIES} columns={4} />
        <CardSection icon="📚" title="SYSTEM DESIGN RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#SystemDesign</span>
          <span>#LoadBalancing</span>
          <span>#Nginx</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
