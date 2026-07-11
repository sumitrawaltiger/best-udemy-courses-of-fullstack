import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day09';
const DOCS_URL = 'https://expressjs.com/en/guide/routing.html';

const LEARNT_TODAY = [
  {
    title: 'REST',
    text: 'model your API as resources acted on by HTTP verbs',
  },
  {
    title: 'Resource routes',
    text: '/products for the collection, /products/:id for one item',
  },
  {
    title: 'express.Router',
    text: 'split routes into their own modules and mount them',
  },
  {
    title: 'Controllers',
    text: 'keep the handler logic out of the router file',
  },
  {
    title: 'Create',
    text: 'POST /products → Model.create → 201 Created',
  },
  {
    title: 'Read',
    text: 'GET all or GET /:id → 200, or 404 when missing',
  },
  {
    title: 'Update',
    text: 'PUT / PATCH /:id → findByIdAndUpdate',
  },
  {
    title: 'Delete',
    text: 'DELETE /:id → findByIdAndDelete → 204 No Content',
  },
  {
    title: 'Status codes',
    text: 'match the outcome — 200, 201, 204, 400, 404, 500',
  },
  {
    title: 'Error handling',
    text: 'try/catch in each handler + one central error middleware',
  },
];

const REST_DESIGN = [
  {
    icon: '🧱',
    title: 'REST Resources',
    titleClass: 'card-title-cyan',
    subtitle: 'nouns + verbs',
    description: 'One URL per resource; the HTTP method says what to do with it.',
    code: 'GET    /products      list all\nPOST   /products      create\nGET    /products/:id  read one\nPUT    /products/:id  replace\nDELETE /products/:id  remove',
  },
  {
    icon: '🧭',
    title: 'express.Router',
    titleClass: 'card-title-green',
    subtitle: 'modular routes',
    description: 'Group a resource’s routes in a file and mount it once.',
    code: '// routes/products.js\nconst router = express.Router();\nrouter.get("/", getAll);\nrouter.post("/", create);\nexport default router;\n\n// app.js\napp.use("/products", productsRouter);',
  },
  {
    icon: '🎛️',
    title: 'Controllers',
    titleClass: 'card-title-amber',
    subtitle: 'thin routes',
    description: 'Route files stay tiny; controllers hold the real logic.',
    code: '// controllers/products.js\nexport async function getAll(req, res) {\n  const items = await Product.find();\n  res.json(items);\n}',
  },
];

const ENDPOINTS = [
  {
    icon: '➕',
    title: 'Create — POST',
    titleClass: 'card-title-cyan',
    subtitle: '201 Created',
    description: 'Read req.body, create the document, return it with 201.',
    code: 'router.post("/", async (req, res) => {\n  const item = await Product.create(req.body);\n  res.status(201).json(item);\n});',
  },
  {
    icon: '🔎',
    title: 'Read — GET',
    titleClass: 'card-title-green',
    subtitle: '200 / 404',
    description: 'List all, or fetch one by id and 404 if it does not exist.',
    code: 'router.get("/:id", async (req, res) => {\n  const item = await Product.findById(req.params.id);\n  if (!item) return res.status(404).json({ error: "Not found" });\n  res.json(item);\n});',
  },
  {
    icon: '✏️',
    title: 'Update — PATCH',
    titleClass: 'card-title-amber',
    subtitle: 'findByIdAndUpdate',
    description: 'Apply changes and return the updated document.',
    code: 'router.patch("/:id", async (req, res) => {\n  const item = await Product.findByIdAndUpdate(\n    req.params.id, req.body, { new: true });\n  res.json(item);\n});',
  },
  {
    icon: '🗑️',
    title: 'Delete — DELETE',
    titleClass: 'card-title-pink',
    subtitle: '204',
    description: 'Remove the document and return 204 No Content.',
    code: 'router.delete("/:id", async (req, res) => {\n  await Product.findByIdAndDelete(req.params.id);\n  res.status(204).end();\n});',
  },
];

const RESOURCES = [
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day09',
    description: 'A full CRUD REST API — Express Router, controllers, and Mongoose models.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Express Routing Docs',
    titleClass: 'card-title-green',
    subtitle: 'Official guide',
    description: 'The official Express routing guide — routes, params, and Router.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Build a REST API',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Build a REST API with Node, Express & MongoDB — Web Dev Simplified, for Day 28.',
    link: {
      href: 'https://www.youtube.com/watch?v=fgTGADljAeg',
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

export default function Day028() {
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
          <Link to="/day-027" className="day001-nav-btn day001-nav-home">
            ← Day 27
          </Link>
          <p className="day001-datetime">Thunder Day 28 · 1 Aug 2026</p>
          <Link to="/day-029" className="day001-nav-btn day001-nav-next">
            Day 29 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Express</span>
              <span>REST API</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 28 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">REST API WITH EXPRESS & MONGOOSE</p>
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
          <div className="day001-progress-bar" style={{ width: '28%' }} />
        </div>

        <p className="day001-summary">
          Day twenty-eight — I tied Express and Mongoose together into a proper{' '}
          <strong>REST API</strong>. Each <strong>resource</strong> gets one URL, and the HTTP verb
          decides the action; <code>express.Router</code> keeps routes modular and{' '}
          <strong>controllers</strong> hold the logic. I built full <strong>CRUD</strong> endpoints —
          POST → <code>201</code>, GET → <code>200/404</code>, PATCH → update, DELETE →{' '}
          <code>204</code> — each wrapped in try/catch. Code in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day09 on GitHub
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

        <CardSection icon="🧱" title="REST DESIGN" cards={REST_DESIGN} columns={3} />
        <CardSection icon="🔁" title="CRUD ENDPOINTS" cards={ENDPOINTS} columns={4} />
        <CardSection icon="📚" title="THUNDER BACKEND DAY 09" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#REST</span>
          <span>#Express</span>
          <span>#Backend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
