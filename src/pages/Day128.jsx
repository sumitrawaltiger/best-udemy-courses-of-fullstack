import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const STATUS_MDN = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status';
const REST_MDN = 'https://developer.mozilla.org/en-US/docs/Glossary/REST';
const EXPRESS_RES = 'https://expressjs.com/en/4x/api.html#res';

const LEARNT_TODAY = [
  { title: 'REST resources', text: 'URLs name nouns (/tasks); verbs are HTTP methods, not path words' },
  { title: 'CRUD mapping', text: 'Create→POST, Read→GET, Update→PUT/PATCH, Delete→DELETE' },
  { title: 'Status codes', text: '200 OK, 201 Created, 204 No Content, 400 Bad Request, 404 Not Found' },
  { title: 'List & get', text: 'GET /tasks returns a collection; GET /tasks/:id returns one or 404' },
  { title: 'Create', text: 'POST /tasks with a JSON body; respond 201 and the new resource' },
  { title: 'Update', text: 'PUT replaces; PATCH patches — pick one convention and stick to it' },
  { title: 'Delete', text: 'DELETE /tasks/:id → 204 with empty body, or 404 if missing' },
  { title: 'In-memory store', text: 'an array is fine for learning — swap for a DB later without changing routes' },
  { title: 'Consistent JSON', text: 'always return the same shape so clients (and future RN apps) stay simple' },
];

const CRUD = [
  {
    icon: '📋', title: 'REST Shape', titleClass: 'card-title-cyan', subtitle: 'Nouns + Verbs',
    description: 'Design around a resource. /tasks is the collection; /tasks/:id is one item. Do not put verbs in the path — use HTTP methods instead.',
    code: 'GET    /tasks\nPOST   /tasks\nGET    /tasks/:id\nPATCH  /tasks/:id\nDELETE /tasks/:id',
  },
  {
    icon: '➕', title: 'Create & Read', titleClass: 'card-title-purple', subtitle: 'POST + GET',
    description: 'POST adds to an in-memory array and returns 201. GET list returns all; GET by id returns one or 404.',
    code: 'app.post("/tasks", (req, res) => {\n  const task = { id: id++, ...req.body };\n  tasks.push(task);\n  res.status(201).json(task);\n});',
  },
  {
    icon: '✏️', title: 'Update & Delete', titleClass: 'card-title-amber', subtitle: 'PATCH + DELETE',
    description: 'Find by id, merge fields or splice out. Missing id → 404. Successful delete often returns 204 with no body.',
    code: 'app.delete("/tasks/:id", (req, res) => {\n  const i = tasks.findIndex(t => t.id === Number(req.params.id));\n  if (i < 0) return res.status(404).end();\n  tasks.splice(i, 1);\n  res.status(204).end();\n});',
  },
];

const POLISH = [
  {
    icon: '🔢', title: 'Status Codes', titleClass: 'card-title-cyan', subtitle: 'Speak HTTP',
    description: 'Clients branch on status. Use 201 for creates, 204 for empty deletes, 400 for bad input, 404 for missing resources.',
    code: '// 200 OK · 201 Created · 204 No Content\n// 400 Bad Request · 404 Not Found',
  },
  {
    icon: '🧠', title: 'In-Memory First', titleClass: 'card-title-purple', subtitle: 'Learn The Shape',
    description: 'Keep tasks in a let tasks = [] array. The route table stays the same when you later plug in Mongo or Postgres.',
    code: 'let tasks = [];\nlet id = 1;',
  },
  {
    icon: '📐', title: 'One JSON Shape', titleClass: 'card-title-amber', subtitle: 'Predictable API',
    description: 'Return { id, title, done } every time. Errors as { error: "message" }. Consistency beats clever responses.',
    code: 'res.status(400).json({ error: "title required" });',
  },
  {
    icon: '🔜', title: 'Next: Auth Basics', titleClass: 'card-title-lime', subtitle: 'Day 129 Preview',
    description: 'Tomorrow: protect routes with JWT — sign tokens on login, verify middleware, and keep secrets out of git.',
    link: { href: '/day-129', label: 'Go to Day 129 →' },
  },
];

const RESOURCES = [
  {
    icon: '🌐', title: 'REST (MDN)', titleClass: 'card-title-cyan', subtitle: 'Glossary',
    description: 'What REST means for resources, representations, and HTTP.',
    link: { href: REST_MDN, label: 'Read REST glossary →', external: true },
  },
  {
    icon: '🔢', title: 'HTTP Status Codes', titleClass: 'card-title-purple', subtitle: 'MDN',
    description: 'The status codes you will use daily when designing APIs.',
    link: { href: STATUS_MDN, label: 'Read status codes →', external: true },
  },
  {
    icon: '📤', title: 'Express res', titleClass: 'card-title-amber', subtitle: 'API',
    description: 'res.status, res.json, res.send and friends.',
    link: { href: EXPRESS_RES, label: 'Read res docs →', external: true },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">{card.icon}</span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a href={card.link.href} target="_blank" rel="noopener noreferrer" className="day001-card-link">{card.link.label}</a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">{card.link.label}</Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title"><span aria-hidden="true">{icon}</span> {title}</h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (<TopicCard key={card.title} card={card} />))}
      </div>
    </section>
  );
}

export default function Day128() {
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
      const scale = Math.min((window.innerHeight - pad) / wrap.scrollHeight, (window.innerWidth - pad) / wrap.scrollWidth);
      wrap.style.transform = `scale(${scale})`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
    };
    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);
    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) avatar.addEventListener('load', fitToScreen);
    return () => { window.removeEventListener('resize', fitToScreen); observer.disconnect(); };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/" className="day001-nav-btn day001-nav-home">Home</Link>
          <Link to="/day-127" className="day001-nav-btn day001-nav-prev">← Day 127</Link>
          <p className="day001-datetime">Express Day 128 · 8 May 2027</p>
          <Link to="/day-129" className="day001-nav-btn day001-nav-next">Day 129 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>REST</span><span>CRUD</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 128 <span aria-hidden="true">📋</span></h1>
              <p className="day001-day-theme">REST APIs — CRUD</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">EXPRESS · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '36%' }} /></div>

        <p className="day001-summary">
          Day 128 builds a real <strong>REST</strong> resource. Map <strong>CRUD</strong> to{' '}
          <strong>GET / POST / PATCH / DELETE</strong>, return the right <strong>status codes</strong>,
          and keep an <strong>in-memory</strong> store so the route shapes stay clear before a database
          arrives.
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> — {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="📋" title="1 · CRUD ROUTES" cards={CRUD} columns={3} />
        <CardSection icon="🔢" title="2 · STATUS, STORE & SHAPE" cards={POLISH} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Express</span><span>#REST</span><span>#CRUD</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
