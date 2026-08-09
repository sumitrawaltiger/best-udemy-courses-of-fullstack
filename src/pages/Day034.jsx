import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const REST_MDN = 'https://developer.mozilla.org/en-US/docs/Glossary/REST';
const STATUS_MDN = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status';

const LEARNT_TODAY = [
  { title: 'REST = resources + verbs', text: 'model nouns (/users), act with HTTP methods (GET/POST/PUT/DELETE)' },
  { title: 'The CRUD mapping', text: 'GET=read, POST=create, PUT/PATCH=update, DELETE=remove' },
  { title: 'Status codes matter', text: '200 ok, 201 created, 204 no content, 400 bad, 404 not found, 500 error' },
  { title: 'Validate input', text: 'parse req.body with Zod before trusting it — clients send anything' },
  { title: 'Layered structure', text: 'route → controller → service → data, so logic isn\'t stuck in handlers' },
  { title: 'Consistent shapes', text: 'return predictable JSON and error shapes the frontend can rely on' },
  { title: 'Async handlers', text: 'wrap async work so rejected promises reach the error middleware' },
  { title: 'Stateless', text: 'each request carries what it needs; the server keeps no session in memory' },
];

const REST = [
  {
    icon: '🧩', title: 'Resources & Verbs', titleClass: 'card-title-cyan', subtitle: 'The CRUD Routes',
    description:
      'A REST API models resources as URLs and acts on them with HTTP methods. One resource, five routes — list, read, create, update, delete — a predictable shape across the whole API.',
    code: 'GET    /tasks        // list\nGET    /tasks/:id    // read one\nPOST   /tasks        // create\nPUT    /tasks/:id    // update\nDELETE /tasks/:id    // remove',
  },
  {
    icon: '🔢', title: 'Status Codes', titleClass: 'card-title-purple', subtitle: 'Say What Happened',
    description:
      'The response code is part of the contract: 200 OK, 201 Created (with the new resource), 204 No Content on delete, 400 for bad input, 404 when missing, 500 on server error.',
    code: 'res.status(201).json(created);   // POST success\nres.status(404).json({ error: "Not found" });\nres.status(204).send();          // DELETE success',
  },
];

const BUILD = [
  {
    icon: '🛡️', title: 'Validate With Zod', titleClass: 'card-title-cyan', subtitle: 'Trust Nothing',
    description:
      'The body is untrusted. Parse it with a Zod schema; on failure return 400 with the issues. On success you have typed, safe data to hand to the service.',
    code: 'const TaskInput = z.object({ title: z.string().min(1) });\nconst parsed = TaskInput.safeParse(req.body);\nif (!parsed.success)\n  return res.status(400).json({ errors: parsed.error.issues });',
  },
  {
    icon: '🏗️', title: 'Layer The Code', titleClass: 'card-title-purple', subtitle: 'Route → Service',
    description:
      'Keep handlers thin: the route calls a controller, which calls a service that holds the business logic and talks to the database. Testable, reusable, easy to change.',
    code: '// controller\nexport async function createTask(req, res) {\n  const task = await taskService.create(parsed.data);\n  res.status(201).json(task);\n}',
  },
  {
    icon: '⚡', title: 'Async Safely', titleClass: 'card-title-amber', subtitle: 'Errors Reach The Handler',
    description:
      'Async handlers can reject. Wrap them (or use try/catch + next(err)) so failures flow to the error middleware instead of crashing the process.',
    code: 'const wrap = (fn) => (req, res, next) =>\n  Promise.resolve(fn(req, res, next)).catch(next);\napp.get("/tasks/:id", wrap(getTask));',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'REST', titleClass: 'card-title-cyan', subtitle: 'MDN',
    description:
      'What REST means — resources, statelessness, uniform interface — the principles behind well-designed HTTP APIs.',
    link: { href: REST_MDN, label: 'Open the REST glossary →', external: true },
  },
  {
    icon: '🔢', title: 'HTTP Status Codes', titleClass: 'card-title-purple', subtitle: 'MDN',
    description:
      'The full list of status codes with meanings — the vocabulary your API uses to tell clients what happened.',
    link: { href: STATUS_MDN, label: 'Open the status codes →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Databases', titleClass: 'card-title-amber', subtitle: 'Day 35 Preview',
    description:
      'Tomorrow — persist data with Prisma: a typed schema, migrations, a fully-typed client, and CRUD queries against a real Postgres database.',
    link: { href: '/day-035', label: 'Go to Day 35 →' },
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

export default function Day034() {
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
          <Link to="/day-033" className="day001-nav-btn day001-nav-prev">← Day 33</Link>
          <p className="day001-datetime">TypeScript Day 34 · 10 Jul 2027</p>
          <Link to="/day-035" className="day001-nav-btn day001-nav-next">Day 35 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>REST API</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 34 <span aria-hidden="true">🧩</span></h1>
              <p className="day001-day-theme">EXPRESS — BUILDING A REST API</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">TYPESCRIPT · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '34%' }} /></div>

        <p className="day001-summary">
          Designing a real API. <strong>REST</strong> models <strong>resources</strong> as URLs and acts with HTTP
          verbs — one resource, five <strong>CRUD</strong> routes (list, read, create, update, delete). The{' '}
          <strong>status code</strong> is part of the contract: 201 Created, 204 No Content, 400 Bad, 404 Not Found,
          500 Error. Always <strong>validate the body with Zod</strong> (return 400 on failure), and{' '}
          <strong>layer the code</strong> — route → controller → service → data — so logic isn\'t trapped in handlers.
          Wrap async handlers so rejected promises reach the error middleware, and return{' '}
          <strong>consistent JSON shapes</strong> the frontend can trust. <em>Next: databases with Prisma.</em>
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

        <CardSection icon="🧩" title="REST DESIGN" cards={REST} columns={2} />
        <CardSection icon="🏗️" title="BUILD IT WELL" cards={BUILD} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#REST</span><span>#Express</span>
        </footer>
      </div>
    </div>
  );
}
