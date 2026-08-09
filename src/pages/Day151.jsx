import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRISMA = 'https://www.prisma.io/docs';
const NEST_PRISMA = 'https://docs.nestjs.com/recipes/prisma';
const SCHEMA = 'https://www.prisma.io/docs/orm/prisma-schema/overview';

const LEARNT_TODAY = [
  { title: 'Why Prisma', text: 'type-safe DB client generated from a schema — fewer raw SQL mistakes in Nest services' },
  { title: 'schema.prisma', text: 'models, fields, and relations live in one file; prisma migrate applies them' },
  { title: 'PrismaService', text: 'wrap PrismaClient as an @Injectable Nest provider and connect onModuleInit' },
  { title: 'Inject everywhere', text: 'controllers/services get PrismaService via constructor DI' },
  { title: 'CRUD helpers', text: 'findMany, findUnique, create, update, delete — typed to your models' },
  { title: 'Relations', text: 'include / select shape nested objects without N+1 guesswork (still watch N+1)' },
  { title: 'Migrations', text: 'prisma migrate dev in local; deploy migrations in CI/prod' },
  { title: 'Env DATABASE_URL', text: 'connection string stays in env — never commit secrets' },
  { title: 'Days 151–155', text: 'Nest+Prisma → Nest GraphQL → events → tests → production Nest milestone' },
];

const CORE = [
  {
    icon: '◇', title: 'Model Sketch', titleClass: 'card-title-cyan', subtitle: 'schema.prisma',
    description: 'Define Task with id, title, done, and timestamps. Prisma generates the client from this.',
    code: 'model Task {\n  id        String   @id @default(cuid())\n  title     String\n  done      Boolean  @default(false)\n  createdAt DateTime @default(now())\n}',
  },
  {
    icon: '🔌', title: 'PrismaService', titleClass: 'card-title-purple', subtitle: 'Nest Provider',
    description: 'Extend PrismaClient, connect on init, disconnect on destroy. Export from a PrismaModule.',
    code: '@Injectable()\nexport class PrismaService extends PrismaClient\n  implements OnModuleInit, OnModuleDestroy {\n  async onModuleInit() { await this.$connect(); }\n  async onModuleDestroy() { await this.$disconnect(); }\n}',
  },
  {
    icon: '📥', title: 'Use In A Service', titleClass: 'card-title-amber', subtitle: 'Typed CRUD',
    description: 'Inject PrismaService and call the generated delegates — fully typed with your schema.',
    code: '@Injectable()\nexport class TasksService {\n  constructor(private prisma: PrismaService) {}\n  findAll() { return this.prisma.task.findMany(); }\n  create(title: string) {\n    return this.prisma.task.create({ data: { title } });\n  }\n}',
  },
];

const PRACTICE = [
  {
    icon: '🧬', title: 'Migrate', titleClass: 'card-title-cyan', subtitle: 'Schema → DB',
    description: 'Change the schema, then migrate. Keep migration history in git.',
    code: 'npx prisma migrate dev --name init_tasks\nnpx prisma generate',
  },
  {
    icon: '🔗', title: 'Include Relations', titleClass: 'card-title-purple', subtitle: 'Nested Reads',
    description: 'Load owner or comments in one query with include — still paginate large lists.',
    code: 'this.prisma.task.findMany({\n  include: { owner: true },\n});',
  },
  {
    icon: '🛡️', title: 'Service Boundary', titleClass: 'card-title-amber', subtitle: 'Keep Controllers Thin',
    description: 'Controllers call TasksService; only the service talks to Prisma. Easier to test and swap.',
    code: '// controller → service → prisma\n'// never prisma inside the controller',
  },
  {
    icon: '🔜', title: 'Next: Nest GraphQL', titleClass: 'card-title-lime', subtitle: 'Day 152 Preview',
    description: 'Tomorrow: GraphQL module in Nest — code-first resolvers on top of your Prisma services.',
    link: { href: '/day-152', label: 'Go to Day 152 →' },
  },
];

const RESOURCES = [
  {
    icon: '◇', title: 'Prisma Docs', titleClass: 'card-title-cyan', subtitle: 'Official',
    description: 'Schema, client, migrations, and best practices.',
    link: { href: PRISMA, label: 'Read Prisma docs →', external: true },
  },
  {
    icon: '🪺', title: 'Nest + Prisma', titleClass: 'card-title-purple', subtitle: 'Recipe',
    description: 'Official Nest recipe for wiring PrismaService.',
    link: { href: NEST_PRISMA, label: 'Read Nest Prisma recipe →', external: true },
  },
  {
    icon: '📐', title: 'Prisma Schema', titleClass: 'card-title-amber', subtitle: 'Overview',
    description: 'Models, enums, relations, and generator config.',
    link: { href: SCHEMA, label: 'Read schema overview →', external: true },
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

export default function Day151() {
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
          <Link to="/day-150" className="day001-nav-btn day001-nav-prev">← Day 150</Link>
          <p className="day001-datetime">Nest Day 151 · 4 Nov 2027</p>
          <Link to="/day-152" className="day001-nav-btn day001-nav-next">Day 152 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>NestJS</span><span>Year 1</span><span>Prisma</span><span>Database</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 151 <span aria-hidden="true">◇</span></h1>
              <p className="day001-day-theme">NEST + PRISMA</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">NEST · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '42%' }} /></div>

        <p className="day001-summary">
          Day 151 gives Nest a real database layer. Define models in{' '}
          <strong>schema.prisma</strong>, wrap <strong>PrismaClient</strong> as a service, and keep
          CRUD in injectable services — typed end to end.
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

        <CardSection icon="◇" title="1 · PRISMA IN NEST" cards={CORE} columns={3} />
        <CardSection icon="🧬" title="2 · MIGRATE & BOUNDARIES" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#NestJS</span><span>#Prisma</span><span>#TypeScript</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
