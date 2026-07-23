import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const EXPRESS = 'https://expressjs.com/';
const NEST = 'https://docs.nestjs.com/';
const GQL = 'https://graphql.org/learn/';

const LEARNT_TODAY = [
  { title: 'Tools are choices', text: 'Express, Nest, and GraphQL solve different pain — pick for the product' },
  { title: 'Express wins', text: 'small APIs, full control, fast prototypes, and you already know the stack' },
  { title: 'Nest wins', text: 'larger teams, shared conventions, DI, and long-lived domain modules' },
  { title: 'GraphQL wins', text: 'many clients needing different shapes of the same graph of data' },
  { title: 'You can combine', text: 'Nest + GraphQL, or Express REST + Apollo — hybrid is normal' },
  { title: 'Keep the core', text: 'auth, validation, tests, logs, health — framework does not replace these' },
  { title: 'Days 126–150', text: 'from Hello Express through ops, GraphQL, and Nest — a full Year-1 backend kit' },
  { title: 'Ship something', text: 'one real API with JWT + DB beats three unfinished frameworks' },
  { title: 'What’s next', text: 'deeper cloud, message queues at scale, or the next Year-1 track — Day 151 when ready' },
];

const CORE = [
  {
    icon: '🚂', title: 'Stay On Express When…', titleClass: 'card-title-cyan', subtitle: 'Simple & Fast',
    description: 'Solo or small team, clear REST resources, uploads/webhooks, and you want minimal ceremony.',
    code: '// REST CRUD + JWT + Zod\n'// Redis / BullMQ as needed\n'// ship and iterate',
  },
  {
    icon: '🪺', title: 'Reach For Nest When…', titleClass: 'card-title-purple', subtitle: 'Structure',
    description: 'Many modules, several engineers, and you want guards/pipes/DI as defaults instead of reinventing folders.',
    code: '// feature modules\n'// shared AuthModule\n'// ValidationPipe everywhere',
  },
  {
    icon: '⬡', title: 'Add GraphQL When…', titleClass: 'card-title-amber', subtitle: 'Flexible Reads',
    description: 'Web + mobile need different nested payloads, and you are tired of BFF endpoint sprawl.',
    code: '// /graphql for product UI\n'// REST for webhooks / files',
  },
];

const WRAP = [
  {
    icon: '🗺️', title: 'Arc Recap', titleClass: 'card-title-cyan', subtitle: '126 → 150',
    description: 'Express core → TS/Zod/security/deploy → lists/uploads/tests/docs/clients → sockets/jobs/cache/logs/versions → GraphQL → Nest.',
    code: 'REST toolkit\n+ realtime & ops\n+ GraphQL & Nest',
  },
  {
    icon: '✅', title: 'Decision Checklist', titleClass: 'card-title-purple', subtitle: 'Before You Rewrite',
    description: 'Team size, deadline, client needs, ops comfort. Prefer evolve over rewrite.',
    code: '// need nested UI data? → GraphQL\n'// team growing fast? → Nest\n'// shipping Friday? → Express',
  },
  {
    icon: '🚀', title: 'What Comes Next', titleClass: 'card-title-lime', subtitle: 'Day 151 Preview',
    description: 'Tomorrow: Nest + Prisma — typed models, PrismaService, and migrations inside your Nest modules.',
    link: { href: '/day-151', label: 'Go to Day 151 →' },
  },
  {
    icon: '🏠', title: 'Back Home', titleClass: 'card-title-amber', subtitle: 'Hub',
    description: 'Return to the hub for other tracks and the 1600-day map.',
    link: { href: '/', label: 'Go to Home →' },
  },
];

const RESOURCES = [
  {
    icon: '🚂', title: 'Express', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'The minimal Node web framework you started with.',
    link: { href: EXPRESS, label: 'Read Express docs →', external: true },
  },
  {
    icon: '🪺', title: 'NestJS', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Structured TypeScript backends with DI and modules.',
    link: { href: NEST, label: 'Read Nest docs →', external: true },
  },
  {
    icon: '⬡', title: 'GraphQL', titleClass: 'card-title-amber', subtitle: 'Learn',
    description: 'Schema, queries, and the client-driven model.',
    link: { href: GQL, label: 'Read GraphQL learn →', external: true },
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

export default function Day150() {
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
          <Link to="/day-149" className="day001-nav-btn day001-nav-prev">← Day 149</Link>
          <p className="day001-datetime">Express Day 150</p>
          <Link to="/day-151" className="day001-nav-btn day001-nav-next">Day 151 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Year 1</span><span>Backend</span><span>Stack Choice</span><span>Day 150</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 150 <span aria-hidden="true">🧭</span></h1>
              <p className="day001-day-theme">EXPRESS · NEST · GRAPHQL — PICK YOUR STACK</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '42%' }} /></div>

        <p className="day001-summary">
          Day 150 closes this backend arc. Choose <strong>Express</strong> for speed,{' '}
          <strong>Nest</strong> for structure, <strong>GraphQL</strong> for flexible reads — and never
          drop auth, validation, tests, or observability.
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

        <CardSection icon="🧭" title="1 · WHEN TO USE WHAT" cards={CORE} columns={3} />
        <CardSection icon="🗺️" title="2 · RECAP & NEXT" cards={WRAP} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Express</span><span>#NestJS</span><span>#GraphQL</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
