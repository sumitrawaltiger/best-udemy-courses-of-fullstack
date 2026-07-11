import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture01-and-02-Introduction-to-NodeJs-39243ac5cab98091a218e8e5b4a6a031?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day03';

const LEARNT_TODAY = [
  {
    title: 'HTTP is a contract',
    text: 'a written format every request and response must follow so any client can talk to any server',
  },
  {
    title: 'Request structure',
    text: 'request line, headers, a blank line, then the body — in that exact order',
  },
  {
    title: 'Response structure',
    text: 'status line (HTTP/1.1 200 OK), headers, blank line, then the body',
  },
  {
    title: 'Body rules',
    text: 'a body only exists in POST, PUT and PATCH — GET and DELETE carry none',
  },
  {
    title: 'HTTP methods',
    text: 'GET reads, POST creates, PUT replaces, PATCH updates, DELETE removes',
  },
  {
    title: 'Status codes',
    text: '2xx success, 3xx redirect, 4xx client error, 5xx server error',
  },
  {
    title: '4xx vs 5xx',
    text: '4xx means the client messed up, 5xx means the server did',
  },
  {
    title: 'HTTP is stateless',
    text: 'the server remembers nothing between requests — each one is independent',
  },
  {
    title: 'Tokens & cookies',
    text: 'identity must ride on every request manually, because HTTP forgets you',
  },
  {
    title: 'HTTP versions',
    text: '1.0 → 1.1 keep-alive → 2 multiplexing → 3 over QUIC for lower latency',
  },
];

const BASICS = [
  {
    icon: '🌐',
    title: 'What is HTTP?',
    titleClass: 'card-title-cyan',
    subtitle: 'The contract',
    description: 'A written contract for every request & response between two programs over the web.',
    code: '// Both sides agree on the format ahead of time\nGET /users/15 HTTP/1.1\nHost: localhost:3000',
  },
  {
    icon: '📨',
    title: 'Request Structure',
    titleClass: 'card-title-green',
    subtitle: '4 parts',
    description: 'Request line, headers, a blank line, then the body (POST/PUT/PATCH only).',
    code: 'GET /users/15 HTTP/1.1     // request line\nHost: localhost:3000       // headers\nAuthorization: Bearer ...\n                           // blank line\n{ "name": "Rohit" }        // body',
  },
  {
    icon: '📩',
    title: 'Response Structure',
    titleClass: 'card-title-amber',
    subtitle: 'Mirrors the request',
    description: 'Status line, headers, a blank line, then the body sent back.',
    code: 'HTTP/1.1 200 OK                  // status line\nContent-Type: application/json   // headers\n                                 // blank line\n{ "id": 15, "name": "Rohit" }    // body',
  },
];

const METHODS = [
  {
    icon: '🔧',
    title: 'HTTP Methods',
    titleClass: 'card-title-cyan',
    subtitle: 'The verbs',
    description: 'State your intent on a resource — same path, different method = different action.',
    code: 'GET    /products      read all\nPOST   /products      create      (body)\nPUT    /products/10   replace     (body)\nPATCH  /products/10   update part (body)\nDELETE /products/10   remove',
  },
  {
    icon: '✅',
    title: 'Success & Redirect',
    titleClass: 'card-title-green',
    subtitle: '2xx / 3xx',
    description: 'The happy paths — request worked, or the resource lives elsewhere.',
    code: '200 OK          201 Created\n204 No Content  301 Moved\n304 Not Modified',
  },
  {
    icon: '⛔',
    title: 'Client & Server Errors',
    titleClass: 'card-title-amber',
    subtitle: '4xx / 5xx',
    description: 'Something went wrong — on your side or on the server.',
    code: '400 Bad Request   401 Unauthorized\n403 Forbidden     404 Not Found\n500 Internal      503 Unavailable',
  },
  {
    icon: '🎯',
    title: '4xx vs 5xx',
    titleClass: 'card-title-pink',
    subtitle: 'Whose fault?',
    description: 'Rule of thumb for reading any error at a glance.',
    code: '// 4xx → the client messed up\n// 5xx → the server messed up',
  },
];

const STATELESS = [
  {
    icon: '🧠',
    title: 'Stateless',
    titleClass: 'card-title-cyan',
    subtitle: 'No memory',
    description: 'Every request is independent — the server forgets request #1 by request #2.',
    code: 'Request 1: GET /profile (+ token)\nRequest 2: GET /orders  (+ token)\n// server re-verifies every time',
  },
  {
    icon: '🍪',
    title: 'Tokens & Cookies',
    titleClass: 'card-title-green',
    subtitle: 'Carry identity',
    description: 'Because HTTP forgets you, identity rides on every request manually.',
    code: 'Authorization: Bearer <jwt>\n// or a session cookie sent each call',
  },
  {
    icon: '🚀',
    title: 'HTTP Versions',
    titleClass: 'card-title-amber',
    subtitle: 'Faster over time',
    description: 'The contract stays the same — only the transport gets faster.',
    code: '1.0  one request per connection\n1.1  keep-alive, reuse connection\n2    multiplexing + header compression\n3    QUIC over UDP, lowest latency',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 01 & 02 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description: 'HTTP as a contract, request/response structure, methods, status codes & statelessness.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day03',
    description: 'HTTP servers built on the raw http module — routing, headers and status codes.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'HTTP Crash Course',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'HTTP Crash Course & Exploration by Traversy Media — supplement for Day 22.',
    link: {
      href: 'https://www.youtube.com/watch?v=iYM2zFP3Zn0',
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
          <Link to="/day-021" className="day001-nav-btn day001-nav-home">
            ← Day 21
          </Link>
          <p className="day001-datetime">Thunder Day 22 · 26 Jul 2026</p>
          <Link to="/day-023" className="day001-nav-btn day001-nav-next">
            Day 23 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Node.js</span>
              <span>Backend</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 22 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">HTTP — THE PROTOCOL OF THE WEB</p>
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
              <p className="day001-profile-role">NODE · THUNDER</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '22%' }} />
        </div>

        <p className="day001-summary">
          Day twenty-two — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 01 &amp; 02
          </a>
          . Once the server can accept connections, both sides need a shared language — and that
          language is <code>HTTP</code>. It is a written contract: every request is a{' '}
          <code>method + path</code> with headers and an optional body, and every response answers
          with a <code>status code</code>. HTTP is <strong>stateless</strong> — the server remembers
          nothing between requests, so tokens and cookies carry identity every time. Code in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day03 on GitHub
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

        <CardSection icon="🌐" title="HTTP BASICS" cards={BASICS} columns={3} />
        <CardSection icon="🔧" title="METHODS & STATUS CODES" cards={METHODS} columns={4} />
        <CardSection icon="🧠" title="STATELESS & VERSIONS" cards={STATELESS} columns={3} />
        <CardSection icon="📚" title="THUNDER BACKEND DAY 03" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#NodeJS</span>
          <span>#Backend</span>
          <span>#HTTP</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
