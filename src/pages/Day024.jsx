import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture01-and-02-Introduction-to-NodeJs-39243ac5cab98091a218e8e5b4a6a031?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day05';

const LEARNT_TODAY = [
  {
    title: 'No routing',
    text: 'raw Node is a giant if-else on req.url + req.method — 50 branches in one function',
  },
  {
    title: 'No dynamic routes',
    text: '/users/123 means req.url.split("/") — a query or trailing slash breaks it',
  },
  {
    title: 'Body is a stream',
    text: 'req.body is undefined — collect chunks with req.on("data") then JSON.parse',
  },
  {
    title: 'Manual responses',
    text: 'writeHead + end(JSON.stringify(...)) on every single reply',
  },
  {
    title: 'Forget res.end()',
    text: 'and the request hangs forever — no automatic 404 either',
  },
  {
    title: 'No home for the cross-cutting',
    text: 'logging, auth, CORS get copy-pasted into every branch',
  },
  {
    title: 'No organization',
    text: 'one 250-line createServer callback — routing and business logic fused',
  },
  {
    title: 'Express cures each pain',
    text: 'routing, params, req.body, res.json, middleware — one helper per problem',
  },
  {
    title: 'No magic',
    text: 'every feature is the helper you would have written yourself',
  },
  {
    title: '250 lines → 25',
    text: 'the same Users API, a tenth of the code',
  },
];

const RAW_PAIN = [
  {
    icon: '🌀',
    title: 'No Routing',
    titleClass: 'card-title-cyan',
    subtitle: 'if-else forever',
    description: 'url + method are raw strings — routing is a hand-written if-else chain.',
    code: 'if (req.url === "/users" && req.method === "GET") { ... }\nelse if (req.url === "/users" && req.method === "POST") { ... }\n// 10 resources x 5 methods = 50 branches',
  },
  {
    icon: '🌊',
    title: 'Body is a Stream',
    titleClass: 'card-title-green',
    subtitle: 'req.body?',
    description: 'undefined by default — you assemble it from chunks, then parse, every time.',
    code: 'let body = "";\nreq.on("data", c => { body += c; });\nreq.on("end", () => {\n  const data = JSON.parse(body); // in a try-catch\n});',
  },
  {
    icon: '📝',
    title: 'Every Response Manual',
    titleClass: 'card-title-amber',
    subtitle: 'paperwork',
    description: 'Set the header, stringify the body — forget one and the browser guesses wrong.',
    code: 'res.writeHead(200, { "Content-Type": "application/json" });\nres.end(JSON.stringify(data));\n// two lines, every single reply',
  },
  {
    icon: '⏳',
    title: 'Hangs Forever',
    titleClass: 'card-title-pink',
    subtitle: 'no res.end()',
    description: 'Miss a branch or forget to end — the tab spins silently. No auto 404.',
    code: '// no match, no res.end()\n// → request never finishes',
  },
];

const EXPRESS_CURE = [
  {
    icon: '🧭',
    title: 'Routing',
    titleClass: 'card-title-cyan',
    subtitle: 'app.get / app.post',
    description: 'A named method + path — no if-else chain to maintain.',
    code: 'app.get("/users", handler);\napp.post("/users", handler);',
  },
  {
    icon: '🔗',
    title: 'Params & Query',
    titleClass: 'card-title-green',
    subtitle: 'req.params / req.query',
    description: 'Dynamic segments and filters, parsed for you.',
    code: 'app.get("/users/:id", (req, res) =>\n  res.json(users[req.params.id]));\n// /users/7?role=admin -> req.query.role',
  },
  {
    icon: '📦',
    title: 'Body Just Exists',
    titleClass: 'card-title-amber',
    subtitle: 'express.json()',
    description: 'One line of middleware and req.body is ready — no streams.',
    code: 'app.use(express.json());\napp.post("/users", (req, res) => {\n  console.log(req.body); // done\n});',
  },
  {
    icon: '✨',
    title: 'Clean Responses',
    titleClass: 'card-title-pink',
    subtitle: 'res.status().json()',
    description: 'Status code and JSON in a single, readable line.',
    code: 'res.status(201).json(newUser);',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 01 & 02 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description: 'The eight limitations of raw Node and the direct mapping to each Express feature.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day05',
    description: 'The same Users API built twice — raw http first, then Express, side by side.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'What is Express?',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'What is Express and why should we use it — Academind, supplement for Day 24.',
    link: {
      href: 'https://www.youtube.com/watch?v=45dAt9Gz8rE',
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

export default function Day024() {
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
          <Link to="/day-023" className="day001-nav-btn day001-nav-home">
            ← Day 23
          </Link>
          <p className="day001-datetime">Thunder Day 24 · 9 Aug 2026</p>
          <Link to="/day-025" className="day001-nav-btn day001-nav-next">
            Day 25 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Node.js</span>
              <span>Express</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 24 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">WHY EXPRESS EXISTS</p>
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
          <div className="day001-progress-bar" style={{ width: '24%' }} />
        </div>

        <p className="day001-summary">
          Day twenty-four — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 01 &amp; 02
          </a>
          . After building servers with the raw <code>http</code> module, the pain is obvious: no
          routing, no dynamic paths, the body arrives as a <strong>stream</strong>, and every
          response is manual paperwork. <strong>Express</strong> is every helper I would have written
          myself — <code>app.get</code>, <code>req.params</code>, <code>express.json()</code>,{' '}
          <code>res.json</code>. The 250 lines become 25, and not one is magic. Both versions in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day05 on GitHub
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

        <CardSection icon="🔥" title="THE PAIN OF RAW NODE" cards={RAW_PAIN} columns={4} />
        <CardSection icon="🚀" title="EXPRESS CURES IT" cards={EXPRESS_CURE} columns={4} />
        <CardSection icon="📚" title="THUNDER BACKEND DAY 05" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#NodeJS</span>
          <span>#Express</span>
          <span>#Backend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
