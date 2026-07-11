import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture01-and-02-Introduction-to-NodeJs-39243ac5cab98091a218e8e5b4a6a031?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day02';

const LEARNT_TODAY = [
  {
    title: 'TCP/IP & ports',
    text: 'IP finds the machine, TCP opens a reliable link, HTTP rides on top — listen on a port',
  },
  {
    title: 'Input validation',
    text: 'guard the server: isNaN, number <= 0, and a cap at 100 before responding',
  },
  {
    title: 'Path routing',
    text: 'split request.url by "/" — /add/10/20 becomes operation + two operands',
  },
  {
    title: 'Calculator API',
    text: 'one server, four routes — add, sub, mul, div — else "Invalid Operation"',
  },
  {
    title: 'The url module',
    text: 'url.parse(request.url, true) cleanly splits pathname from the query object',
  },
  {
    title: 'Query strings',
    text: '/add?num1=10&num2=20 — read parsed.query.num1 instead of splitting by hand',
  },
  {
    title: 'Why modules',
    text: 'amazon.js: 1 lakh lines, 100 engineers — split code so teams do not collide',
  },
  {
    title: 'CommonJS',
    text: 'module.exports = { payment, sub } and const { payment } = require("./second.js")',
  },
  {
    title: 'ES Modules',
    text: 'export / export default and import hatim, { add } from "./second.js"',
  },
  {
    title: 'package.json',
    text: '"type": "module" flips a project to import/export — the project manifest',
  },
];

const NETWORKING = [
  {
    icon: '🌐',
    title: 'TCP/IP Stack',
    titleClass: 'card-title-cyan',
    subtitle: 'How the web talks',
    description: 'IP finds the machine, TCP makes a reliable link, HTTP is the message.',
    code: '// Client → TCP connection → Node server\n// HTTP request rides on top of TCP',
  },
  {
    icon: '🔌',
    title: 'Ports & listen',
    titleClass: 'card-title-green',
    subtitle: 'first.js',
    description: 'A server accepts connections on a port — 9000, 3000, etc.',
    code: 'server.listen(9000, () => {\n  console.log("I am Listening at port 9000");\n});',
  },
  {
    icon: '🛡️',
    title: 'Validate Input',
    titleClass: 'card-title-amber',
    subtitle: 'Guard clauses',
    description: 'Reject bad URLs before doing work — NaN, non-positive, over the cap.',
    code: 'const number = Number(request.url.slice(1));\nif (isNaN(number) || number <= 0)\n  return response.end("Invalid URL");\nif (number > 100)\n  return response.end("Max 100 users");',
  },
];

const ROUTING = [
  {
    icon: '🧮',
    title: 'Path Routing',
    titleClass: 'card-title-cyan',
    subtitle: 'second.js',
    description: 'Split request.url by "/" — /add/10/20 → operation + two numbers.',
    code: 'const path = request.url.split("/");\nconst operation = path[1]; // "add"\nconst number1 = Number(path[2]); // 10\nconst number2 = Number(path[3]); // 20',
  },
  {
    icon: '🔀',
    title: 'Route by Operation',
    titleClass: 'card-title-green',
    subtitle: 'Calculator API',
    description: 'One server handles add / sub / mul / div, else "Invalid Operation".',
    code: 'if (operation === "add")\n  response.end(JSON.stringify(number1 + number2));\nelse if (operation === "mul")\n  response.end(JSON.stringify(number1 * number2));\nelse response.end("Invalid Operation");',
  },
  {
    icon: '❓',
    title: 'The url Module',
    titleClass: 'card-title-amber',
    subtitle: 'third.js',
    description: 'url.parse splits pathname from a ready-made query object.',
    code: 'const url = require("url");\nconst parsed = url.parse(request.url, true);\nconst op = parsed.pathname.slice(1);\nconst n1 = Number(parsed.query.num1);',
  },
  {
    icon: '🔗',
    title: 'Query Strings',
    titleClass: 'card-title-pink',
    subtitle: '?num1=10&num2=20',
    description: 'Named params instead of positional path segments — cleaner APIs.',
    code: '// http://localhost:3000/add?num1=10&num2=20\nconst n1 = Number(parsed.query.num1);\nconst n2 = Number(parsed.query.num2);',
  },
];

const MODULES = [
  {
    icon: '🧩',
    title: 'Why Modules',
    titleClass: 'card-title-cyan',
    subtitle: 'amazon.js',
    description: '100 engineers, 1 lakh lines — split code so teams never collide.',
    code: '// auth, order, payment, notification,\n// email, OTP — each its own file',
  },
  {
    icon: '📤',
    title: 'CommonJS',
    titleClass: 'card-title-green',
    subtitle: 'LearnModule01',
    description: 'The classic Node style — module.exports out, require in.',
    code: 'module.exports = { payment, sub };\n\nconst { payment, sub } = require("./second.js");',
  },
  {
    icon: '📥',
    title: 'ES Modules',
    titleClass: 'card-title-amber',
    subtitle: 'LearnModule02',
    description: 'export / export default and import — needs type: module.',
    code: 'export default function hatim() {}\nexport function add() {}\n\nimport hatim, { add, sub } from "./second.js";',
  },
  {
    icon: '📄',
    title: 'package.json',
    titleClass: 'card-title-pink',
    subtitle: 'Project manifest',
    description: 'npm reads it; "type": "module" turns on import/export.',
    code: '{\n  "type": "module"\n}',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 01 & 02 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description: 'TCP/IP, HTTP routing, the url module, modules & package.json.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day02',
    description: 'first/second/third.js servers + LearnModule01 (CJS) & LearnModule02 (ESM).',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'package.json Explained',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Things Every Developer Should Know About package.json — supplement for Day 21.',
    link: {
      href: 'https://www.youtube.com/watch?v=-SaZiADGLHs',
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

export default function Day021() {
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
          <Link to="/day-020" className="day001-nav-btn day001-nav-home">
            ← Day 20
          </Link>
          <p className="day001-datetime">Thunder Day 21 · 79 days left</p>
          <Link to="/day-022" className="day001-nav-btn day001-nav-next">
            Day 22 →
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
                DAY 21 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">TCP/IP, ROUTING & MODULES</p>
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
          <div className="day001-progress-bar" style={{ width: '21%' }} />
        </div>

        <p className="day001-summary">
          Day twenty-one — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 01 &amp; 02
          </a>
          . The server grew up: TCP/IP and ports underpin every request, and I routed a calculator API
          two ways — path segments (<code>/add/10/20</code>) and query strings via the{' '}
          <code>url</code> module (<code>/add?num1=10&amp;num2=20</code>) — with input validation.
          Then modules: CommonJS vs ES Modules and <code>package.json</code>, all in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day02 on GitHub
          </a>
          . Real APIs and clean code organization.
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

        <CardSection icon="🌐" title="NETWORKING & VALIDATION" cards={NETWORKING} columns={3} />
        <CardSection icon="🧮" title="HTTP ROUTING" cards={ROUTING} columns={4} />
        <CardSection icon="🧩" title="MODULES & PACKAGE.JSON" cards={MODULES} columns={4} />
        <CardSection icon="📚" title="THUNDER BACKEND DAY 02" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#NodeJS</span>
          <span>#Backend</span>
          <span>#Modules</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
