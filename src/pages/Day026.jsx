import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day07';
const DOCS_URL = 'https://www.mongodb.com/docs/manual/crud/';
const NOTION_URL =
  'https://app.notion.com/p/Lecture-07-MongoDB-internal-Architecture-39c43ac5cab98048bae2c02c1fa32830';

const LEARNT_TODAY = [
  {
    title: 'NoSQL',
    text: 'MongoDB stores flexible JSON-like documents — not rows and tables',
  },
  {
    title: 'Documents & collections',
    text: 'a document is one record; a collection is a group of documents',
  },
  {
    title: 'BSON & _id',
    text: 'documents are stored as binary JSON, each with a unique _id',
  },
  {
    title: 'No fixed schema',
    text: 'two documents in the same collection can have different fields',
  },
  {
    title: 'Connect from Node',
    text: 'MongoClient + a connection string (mongodb://... or an Atlas URI)',
  },
  {
    title: 'Create',
    text: 'insertOne / insertMany to add documents',
  },
  {
    title: 'Read',
    text: 'find / findOne with a query filter object',
  },
  {
    title: 'Update',
    text: 'updateOne / updateMany with the $set operator',
  },
  {
    title: 'Delete',
    text: 'deleteOne / deleteMany by filter',
  },
  {
    title: 'Atlas',
    text: 'MongoDB Atlas runs a managed database in the cloud',
  },
  {
    title: 'Indexes & B-trees',
    text: 'createIndex builds a B-tree/B+ tree so search, range & sort are fast — not a full collection scan',
  },
];

const DOCUMENT_MODEL = [
  {
    icon: '🍃',
    title: 'NoSQL vs SQL',
    titleClass: 'card-title-cyan',
    subtitle: 'documents, not tables',
    description: 'MongoDB keeps flexible documents instead of fixed rows and columns.',
    code: '// SQL row            // MongoDB document\n// id | name | age     {\n//  1 | Rohit | 24        _id: ObjectId("..."),\n//                        name: "Rohit",\n//                        age: 24\n//                      }',
  },
  {
    icon: '📄',
    title: 'Documents & Collections',
    titleClass: 'card-title-green',
    subtitle: 'the building blocks',
    description: 'A document is one JSON-like record; a collection groups related documents.',
    code: 'users (collection)\n ├─ { _id, name: "Rohit", age: 24 }\n └─ { _id, name: "Aditya", city: "Delhi" }\n// fields can differ per document',
  },
  {
    icon: '🔑',
    title: 'The _id',
    titleClass: 'card-title-amber',
    subtitle: 'unique key',
    description: 'Every document gets a unique _id (ObjectId) if you do not supply one.',
    code: '{ _id: ObjectId("665f..."), name: "Rohit" }\n// auto-generated, unique, indexed',
  },
];

const CRUD = [
  {
    icon: '➕',
    title: 'Create',
    titleClass: 'card-title-cyan',
    subtitle: 'insertOne',
    description: 'Add one or many documents to a collection.',
    code: 'await db.collection("users").insertOne({\n  name: "Rohit", age: 24\n});\n// insertMany([...]) for several',
  },
  {
    icon: '🔎',
    title: 'Read',
    titleClass: 'card-title-green',
    subtitle: 'find',
    description: 'Query with a filter object; find returns a cursor, findOne one doc.',
    code: 'await db.collection("users").find({ age: { $gt: 18 } }).toArray();\nawait db.collection("users").findOne({ name: "Rohit" });',
  },
  {
    icon: '✏️',
    title: 'Update',
    titleClass: 'card-title-amber',
    subtitle: '$set',
    description: 'Match with a filter, change fields with the $set operator.',
    code: 'await db.collection("users").updateOne(\n  { name: "Rohit" },\n  { $set: { age: 25 } }\n);',
  },
  {
    icon: '🗑️',
    title: 'Delete',
    titleClass: 'card-title-pink',
    subtitle: 'deleteOne',
    description: 'Remove documents that match the filter.',
    code: 'await db.collection("users").deleteOne({ name: "Rohit" });\n// deleteMany({ age: { $lt: 13 } })',
  },
];

const INDEX_INTERNALS = [
  {
    icon: '📥',
    title: 'Array → Sorted Array',
    titleClass: 'card-title-cyan',
    subtitle: 'write vs search',
    description:
      'An unsorted array appends in O(1) but searches in O(n). Sorting by id gives O(log n) binary search — but now insert/delete must shift elements (O(n)).',
    code: 'unsorted: write O(1),  search O(n)\nsorted:   search O(log n), insert/delete O(n)\n// good for adding, bad for finding',
  },
  {
    icon: '🌳',
    title: 'BST → Balanced BST',
    titleClass: 'card-title-green',
    subtitle: 'pointers + height',
    description:
      'Pointers avoid shifting; a plain BST is O(log n) but O(n) when skewed into a linked list. AVL / Red-Black self-balance to keep O(log n) — fast in RAM, but each node is a random disk read.',
    code: 'BST:      avg O(log n), worst O(n)\nbalanced: O(log n),  range O(log n + k)\n// great in RAM, bad on disk',
  },
  {
    icon: '📦',
    title: 'B-Tree',
    titleClass: 'card-title-amber',
    subtitle: 'many keys per page',
    description:
      'Disk reads happen in pages, so one node holds many sorted keys. Height drops to ~3–5 for millions of rows — one read brings many keys, so far fewer disk jumps.',
    code: '[10 | 20 | 30 | 40 | 50 | 60]\nsearch O(log_m n) · 1 disk read = many keys',
  },
  {
    icon: '🔗',
    title: 'B+ Tree → Index',
    titleClass: 'card-title-pink',
    subtitle: 'linked leaves',
    description:
      'B+ trees keep all data at sorted, linked leaf pages, so range scans read sequentially (O(log n + k)). A MongoDB index is exactly this — createIndex builds an ordered tree for equality, range, sort & pagination.',
    code: 'db.users.createIndex({ email: 1 })\nfind({ price: { $gte: 500, $lte: 1000 } })\n// reach start, then scan linked leaves',
  },
];

const RESOURCES = [
  {
    icon: '📝',
    title: 'Full Lecture Notes',
    titleClass: 'card-title-cyan',
    subtitle: 'Notion · Lecture 07',
    description:
      'MongoDB internal architecture — the complete journey from arrays to B+ trees and indexes.',
    link: { href: NOTION_URL, label: 'Open on Notion →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day07',
    description: 'Connecting to MongoDB from Node and running create/read/update/delete.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'MongoDB CRUD Docs',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'The official reference for insert, find, update, and delete operations.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'MongoDB Crash Course',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'MongoDB Crash Course by Web Dev Simplified — supplement for Day 26.',
    link: {
      href: 'https://www.youtube.com/watch?v=ofme2o29ngU',
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
          <Link to="/day-025" className="day001-nav-btn day001-nav-home">
            ← Day 25
          </Link>
          <p className="day001-datetime">Thunder Day 26 · 30 Jul 2026</p>
          <Link to="/day-027" className="day001-nav-btn day001-nav-next">
            Day 27 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 26 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">MONGODB & NOSQL</p>
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
          <div className="day001-progress-bar" style={{ width: '26%' }} />
        </div>

        <p className="day001-summary">
          Day twenty-six — the backend needs a place to store data permanently. I met{' '}
          <strong>MongoDB</strong>, a NoSQL database of flexible JSON-like <strong>documents</strong>{' '}
          grouped into <strong>collections</strong> — no fixed schema, every document keyed by a
          unique <code>_id</code>. I connected from Node and ran full <strong>CRUD</strong>:{' '}
          <code>insertOne</code>, <code>find</code>, <code>updateOne</code>, and{' '}
          <code>deleteOne</code>. Then <strong>Lecture 07 — internal architecture</strong>: why an{' '}
          <strong>index</strong> is a <strong>B-tree / B+ tree</strong> — the journey from arrays →
          sorted arrays → BST → balanced BST → B-Tree → B+ Tree, so databases do fewer disk reads.
          Full notes on{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Notion
          </a>{' '}
          · code in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day07 on GitHub
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

        <CardSection icon="🍃" title="THE DOCUMENT MODEL" cards={DOCUMENT_MODEL} columns={3} />
        <CardSection icon="🔁" title="CRUD OPERATIONS" cards={CRUD} columns={4} />
        <CardSection
          icon="🧭"
          title="INSIDE A MONGODB INDEX · ARRAY → B+ TREE"
          cards={INDEX_INTERNALS}
          columns={4}
        />
        <CardSection icon="📚" title="NOTES & RESOURCES · THUNDER BACKEND DAY 07" cards={RESOURCES} columns={4} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#MongoDB</span>
          <span>#NoSQL</span>
          <span>#Backend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
