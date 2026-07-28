import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NEST = 'https://docs.nestjs.com/';
const EXPRESS = 'https://expressjs.com/';
const ROADMAP = 'https://roadmap.sh/backend';

const LEARNT_TODAY = [
  { title: 'Backend arc complete', text: 'Days 126–160 covered Express ops through Nest depth and edge patterns' },
  { title: 'Express toolkit', text: 'REST, JWT, Zod, tests, OpenAPI, sockets, jobs, Redis, logs, versions' },
  { title: 'Nest toolkit', text: 'modules, DI, Prisma, GraphQL, events, tests, gateways, microservices peek, Swagger' },
  { title: 'Choose on purpose', text: 'Express for speed, Nest for structure, GraphQL when clients need flexible shapes' },
  { title: 'Ship discipline', text: 'auth, validation, health, migrations, and CI matter more than framework brand' },
  { title: 'Modular monolith', text: 'clear modules + events beat premature microservices for most Year-1 apps' },
  { title: 'One real API', text: 'deploy something with JWT + DB — theory without traffic teaches less' },
  { title: 'What’s next', text: 'cloud deeper, data/streaming, or the next Year-1 track — Day 161 when ready' },
  { title: 'Keep notes', text: 'this journal is your map — revisit checklists before every production push' },
];

const CORE = [
  {
    icon: '🗺️', title: '126 → 160 Map', titleClass: 'card-title-cyan', subtitle: 'What You Built',
    description: 'Express foundation and ops, then Nest structure, data, GraphQL, events, realtime, edge, and docs.',
    code: 'Express: API → ops → realtime\nNest: DI → Prisma → GraphQL\nEdge: gateway · Swagger · ship',
  },
  {
    icon: '🧭', title: 'Default Stack', titleClass: 'card-title-purple', subtitle: 'A Solid Default',
    description: 'Nest + Prisma + ValidationPipe + JWT + Swagger + /health — or Express + Zod if you want leaner.',
    code: '// auth · validate · persist\n'// docs · health · tests',
  },
  {
    icon: '✅', title: 'Before Every Ship', titleClass: 'card-title-amber', subtitle: 'Checklist',
    description: 'Env validated, migrations applied, tests green, secrets safe, rollback known.',
    code: '// migrate · test · health\n'// logs · rollback plan',
  },
];

const WRAP = [
  {
    icon: '🚀', title: 'What Comes Next', titleClass: 'card-title-lime', subtitle: 'Day 161 Preview',
    description: 'Tomorrow: Dockerize the API — multi-stage builds, .dockerignore, and runtime env (no secrets in the image).',
    link: { href: '/day-161', label: 'Go to Day 161 →' },
  },
  {
    icon: '🏠', title: 'Back Home', titleClass: 'card-title-amber', subtitle: 'Hub',
    description: 'Return to the hub for other tracks, TypeScript notes, and the 1600-day journey.',
    link: { href: '/', label: 'Go to Home →' },
  },
  {
    icon: '📘', title: 'Revisit Nest Docs', titleClass: 'card-title-cyan', subtitle: 'Reference',
    description: 'When a decorator confuses you, the official docs stay the source of truth.',
    link: { href: NEST, label: 'Open Nest docs →', external: true },
  },
  {
    icon: '🚂', title: 'Revisit Express', titleClass: 'card-title-purple', subtitle: 'Reference',
    description: 'Minimal HTTP still powers Nest under the hood — keep that mental model sharp.',
    link: { href: EXPRESS, label: 'Open Express docs →', external: true },
  },
];

const RESOURCES = [
  {
    icon: '🪺', title: 'Nest', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Official NestJS documentation home.',
    link: { href: NEST, label: 'Read Nest docs →', external: true },
  },
  {
    icon: '🚂', title: 'Express', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'The minimal framework behind many Nest apps.',
    link: { href: EXPRESS, label: 'Read Express docs →', external: true },
  },
  {
    icon: '🗺️', title: 'Backend Roadmap', titleClass: 'card-title-amber', subtitle: 'roadmap.sh',
    description: 'Broader backend topics to explore after this arc.',
    link: { href: ROADMAP, label: 'Open backend roadmap →', external: true },
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

export default function Day160() {
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
          <Link to="/day-159" className="day001-nav-btn day001-nav-prev">← Day 159</Link>
          <p className="day001-datetime">Backend Day 160 · 9 Jun 2027</p>
          <Link to="/day-161" className="day001-nav-btn day001-nav-next">Day 161 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Year 1</span><span>Backend</span><span>Milestone</span><span>Day 160</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 160 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">YEAR-1 BACKEND MILESTONE</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">BACKEND · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '45%' }} /></div>

        <p className="day001-summary">
          Day 160 closes the backend journal arc. You can ship with <strong>Express</strong> or{' '}
          <strong>Nest</strong>, document with <strong>OpenAPI</strong>, and keep{' '}
          <strong>auth · validation · tests · health</strong> non-negotiable.
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

        <CardSection icon="🗺️" title="1 · THE ARC" cards={CORE} columns={3} />
        <CardSection icon="🚀" title="2 · NEXT & REFERENCES" cards={WRAP} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Backend</span><span>#NestJS</span><span>#Express</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
