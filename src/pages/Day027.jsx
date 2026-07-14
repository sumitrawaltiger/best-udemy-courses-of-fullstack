import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day08';
const NOTION_URL =
  'https://app.notion.com/p/Lecture08-Create-Your-own-Database-39d43ac5cab98036b6e8c65bf50a731f';
const FS_DOCS_URL = 'https://nodejs.org/api/fs.html';
const EXPRESS_URL = 'https://expressjs.com/en/starter/basic-routing.html';

const LEARNT_TODAY = [
  {
    title: 'What is a database',
    text: 'persistent storage you can create, read, update & delete',
  },
  {
    title: 'File as storage',
    text: 'a JSON text file (database.txt) can act as your database',
  },
  {
    title: 'readDB',
    text: 'fs.readFileSync + JSON.parse to load records into memory',
  },
  {
    title: 'writeDB',
    text: 'JSON.stringify + fs.writeFileSync to persist back to disk',
  },
  {
    title: 'express.json()',
    text: 'middleware to parse JSON request bodies',
  },
  {
    title: 'Create',
    text: 'POST /accounts — push a new account and write the file',
  },
  {
    title: 'Read',
    text: 'GET /accounts (all) and /accounts/:accountNumber (find one)',
  },
  {
    title: 'Update',
    text: 'PATCH deposit — find the account, change balance, write back',
  },
  {
    title: 'Delete',
    text: 'filter out the account by number, then write back',
  },
  {
    title: 'Why real DBs',
    text: 'file DBs lack indexing, concurrency & querying — use MongoDB at scale',
  },
];

const FILE_DB = [
  {
    icon: '🧠',
    title: 'The Idea',
    titleClass: 'card-title-cyan',
    subtitle: 'storage + CRUD',
    description:
      'A database is just persistent storage with create/read/update/delete. Build one with Express + the file system before reaching for MongoDB.',
    code: 'import express from "express";\nimport fs from "fs";\n\nconst app = express();\napp.use(express.json());\n\nconst DB_FILE = "./database.txt"; // our "database"',
  },
  {
    icon: '💾',
    title: 'readDB / writeDB',
    titleClass: 'card-title-green',
    subtitle: 'load & save JSON',
    description: 'Two helpers do all the persistence — read the file, parse it; stringify, write it.',
    code: 'function readDB() {\n  const data = fs.readFileSync(DB_FILE, "utf-8");\n  return JSON.parse(data);\n}\nfunction writeDB(data) {\n  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));\n}',
  },
  {
    icon: '🏦',
    title: 'The Record',
    titleClass: 'card-title-amber',
    subtitle: 'a bank account',
    description: 'Each record is a plain object; push it onto the array and persist the whole file.',
    code: 'const newAccount = {\n  name, accountNumber, city, age, balance\n};\naccounts.push(newAccount);\nwriteDB(accounts);',
  },
];

const BANK_CRUD = [
  {
    icon: '➕',
    title: 'Create',
    titleClass: 'card-title-cyan',
    subtitle: 'POST /accounts',
    description: 'Read the file, push the new account, write it back.',
    code: 'app.post("/accounts", (req, res) => {\n  const accounts = readDB();\n  accounts.push(req.body);\n  writeDB(accounts);\n  res.json({ message: "Account created" });\n});',
  },
  {
    icon: '🔎',
    title: 'Read',
    titleClass: 'card-title-green',
    subtitle: 'GET all / one',
    description: 'Return every account, or find one by account number.',
    code: 'app.get("/accounts", (req, res) => res.json(readDB()));\n\napp.get("/accounts/:accountNumber", (req, res) => {\n  const acc = readDB().find(\n    (a) => a.accountNumber == req.params.accountNumber);\n  res.json(acc);\n});',
  },
  {
    icon: '💰',
    title: 'Deposit',
    titleClass: 'card-title-amber',
    subtitle: 'PATCH .../deposit',
    description: 'Find the account, add the amount to its balance, write back.',
    code: 'app.patch("/accounts/:accountNumber/deposit", (req, res) => {\n  const accounts = readDB();\n  const acc = accounts.find(\n    (a) => a.accountNumber == req.params.accountNumber);\n  acc.balance += req.body.amount;\n  writeDB(accounts);\n  res.json({ message: "Balance increased", account: acc });\n});',
  },
  {
    icon: '🗑️',
    title: 'Delete',
    titleClass: 'card-title-pink',
    subtitle: 'DELETE /:number',
    description: 'Filter the account out of the array and write the file.',
    code: 'app.delete("/accounts/:accountNumber", (req, res) => {\n  let accounts = readDB();\n  accounts = accounts.filter(\n    (a) => a.accountNumber != req.params.accountNumber);\n  writeDB(accounts);\n  res.json({ message: "Account deleted" });\n});',
  },
];

const RESOURCES = [
  {
    icon: '📝',
    title: 'Full Lecture Notes',
    titleClass: 'card-title-cyan',
    subtitle: 'Notion · Lecture 08',
    description: 'Create Your Own Database — the complete file-based bank API walkthrough.',
    link: { href: NOTION_URL, label: 'Open on Notion →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day08',
    description: 'The full Express + fs file database and bank CRUD routes.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Node.js fs Docs',
    titleClass: 'card-title-green',
    subtitle: 'File System',
    description: 'The official Node.js reference for readFileSync, writeFileSync, and more.',
    link: { href: FS_DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🚏',
    title: 'Express Routing',
    titleClass: 'card-title-amber',
    subtitle: 'Official guide',
    description: 'How GET / POST / PATCH / DELETE routes and req.params work in Express.',
    link: { href: EXPRESS_URL, label: 'Open the docs →', external: true },
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

export default function Day027() {
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
          <Link to="/day-026" className="day001-nav-btn day001-nav-home">
            ← Day 26
          </Link>
          <p className="day001-datetime">Thunder Day 27 · 31 Jul 2026</p>
          <Link to="/day-028" className="day001-nav-btn day001-nav-next">
            Day 28 →
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
                DAY 27 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">CREATE YOUR OWN DATABASE</p>
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
          <div className="day001-progress-bar" style={{ width: '27%' }} />
        </div>

        <p className="day001-summary">
          Day twenty-seven — before reaching for a real database, understand what one is: persistent
          storage with <strong>create / read / update / delete</strong>. In Lecture 08 I built my own{' '}
          <strong>file-based database</strong> — an Express bank API that stores accounts as JSON in a
          text file (<code>database.txt</code>). <code>readDB</code> uses{' '}
          <code>fs.readFileSync</code> + <code>JSON.parse</code>; <code>writeDB</code> uses{' '}
          <code>JSON.stringify</code> + <code>fs.writeFileSync</code>. Full CRUD: create, read all/one,
          check balance, deposit, and delete — the foundation a real DB automates. Full notes on{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Notion
          </a>{' '}
          · code in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day08 on GitHub
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

        <CardSection icon="🗄️" title="A FILE AS A DATABASE" cards={FILE_DB} columns={3} />
        <CardSection icon="🏦" title="BANK API · CRUD ROUTES" cards={BANK_CRUD} columns={4} />
        <CardSection icon="📚" title="NOTES & RESOURCES · THUNDER BACKEND DAY 08" cards={RESOURCES} columns={4} />

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
