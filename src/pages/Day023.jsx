import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture01-and-02-Introduction-to-NodeJs-39243ac5cab98091a218e8e5b4a6a031?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day04';

const LEARNT_TODAY = [
  {
    title: 'req.url',
    text: 'the entire path the client asked for — "/30" or "/add?num1=10&num2=20"',
  },
  {
    title: 'slice(1)',
    text: 'drop the leading "/" in one line — no hand-written loop needed',
  },
  {
    title: 'Query string',
    text: 'the part after "?" — key=value pairs joined by "&"',
  },
  {
    title: 'The url module',
    text: 'url.parse(req.url, true) splits pathname from a ready-made query object',
  },
  {
    title: 'The true flag',
    text: 'turns the query string into a JavaScript object automatically',
  },
  {
    title: 'Check 1 — valid?',
    text: 'Number("abc") is NaN — guard it and return 400 instead of an empty result',
  },
  {
    title: 'Check 2 — in range?',
    text: 'cap at your data length or you send back a pile of undefineds',
  },
  {
    title: 'Check 3 — real route?',
    text: 'unknown path gets a clear 404, never a silent hang',
  },
  {
    title: 'slice(0, n)',
    text: 'grab the first n items in one line — replace the push-in-a-loop',
  },
  {
    title: 'Three checks',
    text: 'valid, in range, real route — they kill 90% of backend bugs',
  },
];

const READING_URL = [
  {
    icon: '🔗',
    title: 'Reading req.url',
    titleClass: 'card-title-cyan',
    subtitle: 'The whole path',
    description: 'req.url gives the entire path — parse it by hand, or let a built-in do it.',
    code: '// Manual — a loop just to drop the "/"\nlet s = "";\nfor (let i = 1; i < req.url.length; i++) s += req.url[i];\n\n// Built-in — one line\nconst n = Number(req.url.slice(1)); // "/30" -> 30',
  },
  {
    icon: '❓',
    title: 'The url Module',
    titleClass: 'card-title-green',
    subtitle: 'url.parse',
    description: 'Splits the pathname from a ready-made query object — pass true.',
    code: 'const url = require("url");\nconst parsed = url.parse(req.url, true);\n// parsed.pathname -> "/add"\n// parsed.query    -> { num1: "10", num2: "20" }',
  },
  {
    icon: '🔎',
    title: 'Query Strings',
    titleClass: 'card-title-amber',
    subtitle: '?num1=10&num2=20',
    description: '"?" starts the query, "&" separates each key=value pair.',
    code: '// GET /add?num1=10&num2=20\nconst n1 = Number(parsed.query.num1);\nconst n2 = Number(parsed.query.num2);',
  },
];

const VALIDATION = [
  {
    icon: '🛡️',
    title: 'Valid Input?',
    titleClass: 'card-title-cyan',
    subtitle: 'Guard NaN',
    description: '/abc gives NaN — reject it with a 400 before doing any work.',
    code: 'const n = Number(req.url.slice(1));\nif (isNaN(n)) {\n  res.writeHead(400);\n  return res.end("Enter a valid number");\n}',
  },
  {
    icon: '📏',
    title: 'In Range?',
    titleClass: 'card-title-green',
    subtitle: 'Cap it',
    description: 'You have 100 profiles; /500 would send 400 undefineds. Clamp or reject.',
    code: 'if (n > gitHub.length) {\n  res.writeHead(400);\n  return res.end(`Only ${gitHub.length} available`);\n}',
  },
  {
    icon: '🚧',
    title: 'Real Route?',
    titleClass: 'card-title-amber',
    subtitle: '404 not hang',
    description: 'An unknown path should return a clear 404 — never leave the tab spinning.',
    code: '// no branch matched\nres.writeHead(404);\nres.end("Not found");',
  },
  {
    icon: '🧹',
    title: 'Clean with slice',
    titleClass: 'card-title-pink',
    subtitle: 'No loops',
    description: 'slice(0, n) returns the first n items — drop the manual push loop.',
    code: '// loop\nconst arr = [];\nfor (let i = 0; i < n; i++) arr.push(gitHub[i]);\n\n// slice — same result, one line\nconst arr = gitHub.slice(0, n);',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 01 & 02 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description: 'Reading req.url, the url module, query strings, and the three validation checks.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day04',
    description: 'HTTP servers that parse URLs and query strings, with validation guards.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'Parse URL in Node',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Parse URLs & extract query params with the Node http module — supplement for Day 23.',
    link: {
      href: 'https://www.youtube.com/watch?v=9tchsy20aBI',
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
      const scale = Math.min(
        1,
        (window.innerHeight - pad) / wrap.scrollHeight,
        (window.innerWidth - pad) / wrap.scrollWidth,
      );

      if (scale < 0.99) {
        wrap.style.transform = `scale(${scale})`;
        wrap.style.transformOrigin = 'top center';
        if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
      }
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
          <Link to="/day-022" className="day001-nav-btn day001-nav-home">
            ← Day 22
          </Link>
          <p className="day001-datetime">Thunder Day 23 · 27 Jul 2026</p>
          <Link to="/day-024" className="day001-nav-btn day001-nav-next">
            Day 24 →
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
                DAY 23 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">QUERY STRINGS & REQUEST VALIDATION</p>
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
          <div className="day001-progress-bar" style={{ width: '23%' }} />
        </div>

        <p className="day001-summary">
          Day twenty-three — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 01 &amp; 02
          </a>
          . Users send messy input, so I stopped trusting <code>req.url</code>. I parsed it cleanly
          with the <code>url</code> module (<code>url.parse(req.url, true)</code>), read named{' '}
          <code>query</code> params instead of splitting by hand, and guarded every request with
          three checks — <strong>valid, in range, real route</strong>. Then I swapped hand-rolled
          loops for <code>slice</code>. Code in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day04 on GitHub
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

        <CardSection icon="🔗" title="READING THE URL" cards={READING_URL} columns={3} />
        <CardSection icon="🛡️" title="VALIDATE EVERY REQUEST" cards={VALIDATION} columns={4} />
        <CardSection icon="📚" title="THUNDER BACKEND DAY 04" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#NodeJS</span>
          <span>#Backend</span>
          <span>#Validation</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
