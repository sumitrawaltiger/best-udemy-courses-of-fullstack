import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture01-and-02-Introduction-to-NodeJs-39243ac5cab98091a218e8e5b4a6a031?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day01';

const LEARNT_TODAY = [
  {
    title: 'Backend begins',
    text: 'same JavaScript, new home — run .js straight from the terminal with node',
  },
  {
    title: 'Node.js is a runtime',
    text: 'V8 outside the browser — no window or DOM, but file system, networking & HTTP',
  },
  {
    title: 'require',
    text: 'const http = require("http") pulls in a built-in module as an object',
  },
  {
    title: 'http.createServer',
    text: 'a callback runs on every request, handed a request and a response',
  },
  {
    title: 'request.url',
    text: 'read what the client asked for — "/15" tells the server to send 15 records',
  },
  {
    title: 'response.end',
    text: 'send data back — only strings, so JSON.stringify the array first',
  },
  {
    title: 'server.listen',
    text: 'listen on port 3000, then visit http://localhost:3000/15',
  },
  {
    title: 'Why persistence',
    text: 'Project01 keeps tasks in a variable — a refresh wipes them all',
  },
  {
    title: 'Why not localStorage',
    text: 'Project02 persists, but only in one browser — nothing is shared',
  },
  {
    title: 'Why a backend',
    text: 'Project03 uses a cloud database — shared, permanent data from anywhere',
  },
];

const NODE_BASICS = [
  {
    icon: '🟢',
    title: 'What is Node.js',
    titleClass: 'card-title-cyan',
    subtitle: 'JS runtime',
    description: 'V8 outside the browser — servers, APIs, and CLI tools in JavaScript.',
    code: 'console.log("Hello from Node.js!");\nconsole.log(process.version);',
  },
  {
    icon: '📦',
    title: 'require & Modules',
    titleClass: 'card-title-green',
    subtitle: 'second.js',
    description: 'Node splits features into modules — require pulls one in as an object.',
    code: 'const http = require("http");\nconsole.log(typeof http.createServer);',
  },
  {
    icon: '⌨️',
    title: 'Run with node',
    titleClass: 'card-title-amber',
    subtitle: 'The terminal',
    description: 'No browser — execute a file straight from the command line.',
    code: '// Terminal:\n// node second.js',
  },
];

const FIRST_SERVER = [
  {
    icon: '🖥️',
    title: 'http.createServer',
    titleClass: 'card-title-cyan',
    subtitle: 'Request → response',
    description: 'The callback runs on every incoming request to your server.',
    code: 'const server = http.createServer((request, response) => {\n  // handle each request here\n});',
  },
  {
    icon: '🔍',
    title: 'request.url',
    titleClass: 'card-title-green',
    subtitle: 'Read the path',
    description: 'The URL "/15" is parsed into 15 — how many users to send back.',
    code: 'const str = request.url; // "/15"\nlet s = "";\nfor (let i = 1; i < str.length; i++) s += str[i];\nconst number = Number(s); // 15',
  },
  {
    icon: '📤',
    title: 'response.end + JSON',
    titleClass: 'card-title-amber',
    subtitle: 'Send it back',
    description: 'HTTP sends strings — serialize the array with JSON.stringify.',
    code: 'const arr = [];\nfor (let i = 0; i < number; i++) arr.push(gitHub[i]);\nresponse.end(JSON.stringify(arr));',
  },
  {
    icon: '🔌',
    title: 'server.listen(3000)',
    titleClass: 'card-title-pink',
    subtitle: 'Go live',
    description: 'Listen on a port, then open localhost:3000/15 in the browser.',
    code: 'server.listen(3000, () => {\n  console.log("I am Listening at port 3000");\n});',
  },
];

const WHY_BACKEND = [
  {
    icon: '📝',
    title: 'Step 1 — In Memory',
    titleClass: 'card-title-cyan',
    subtitle: 'Project01 · TaskVault',
    description: 'Tasks live in a variable — a page refresh wipes everything.',
    code: 'let tasks = [];\n// refresh → tasks are gone',
  },
  {
    icon: '💾',
    title: 'Step 2 — localStorage',
    titleClass: 'card-title-green',
    subtitle: 'Project02',
    description: 'Data persists, but only in this one browser — nothing is shared.',
    code: 'localStorage.setItem(key, JSON.stringify(tasks));\n// one browser only',
  },
  {
    icon: '☁️',
    title: 'Step 3 — Cloud DB',
    titleClass: 'card-title-amber',
    subtitle: 'Project03',
    description: 'Data lives on a server — shared and permanent, from any device.',
    code: 'await fetch(cloudDbUrl);\n// shared everywhere — this is the backend',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 01 & 02 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description: 'Introduction to Node.js — runtime, the http server, and why backends exist.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day01',
    description: 'first.js, second.js http server, and the Project01–03 TaskVault trilogy.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'Node.js Crash Course',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Node.js Crash Course by Programming with Mosh — supplement for Day 20.',
    link: {
      href: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
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

export default function Day020() {
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
          <Link to="/day-019" className="day001-nav-btn day001-nav-home">
            ← Day 19
          </Link>
          <p className="day001-datetime">Thunder Day 20 · 24 Jul 2026</p>
          <Link to="/day-021" className="day001-nav-btn day001-nav-next">
            Day 21 →
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
                DAY 20 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">INTRODUCTION TO NODE.JS</p>
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
          <div className="day001-progress-bar" style={{ width: '20%' }} />
        </div>

        <p className="day001-summary">
          Day twenty — the backend begins, following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 01 &amp; 02
          </a>
          . JavaScript leaves the browser: Node.js runs it on V8 in the terminal, <code>require</code>{' '}
          pulls in the built-in <code>http</code> module, and I built a real server that reads
          request.url and returns JSON. The TaskVault trilogy — variable → localStorage → cloud DB —
          made the case for backends in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day01 on GitHub
          </a>
          . Phase 2 is officially on.
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

        <CardSection icon="🟢" title="NODE.JS BASICS" cards={NODE_BASICS} columns={3} />
        <CardSection icon="🖥️" title="YOUR FIRST HTTP SERVER" cards={FIRST_SERVER} columns={4} />
        <CardSection icon="🤔" title="WHY BACKENDS EXIST — TASKVAULT" cards={WHY_BACKEND} columns={3} />
        <CardSection icon="📚" title="THUNDER BACKEND DAY 01" cards={THUNDER_RESOURCES} columns={3} />

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
