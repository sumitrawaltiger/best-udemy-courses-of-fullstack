import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRISMA = 'https://www.prisma.io/docs';
const CLIENT = 'https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/introduction';

const LEARNT_TODAY = [
  { title: 'schema.prisma', text: 'models become TypeScript types when you generate the client' },
  { title: 'PrismaClient', text: 'queries are typed — findUnique returns Model | null, not any' },
  { title: 'Select/include', text: 'narrow the payload type by selecting fields' },
  { title: 'Transactions', text: 'interactive transactions keep the same typed client' },
  { title: 'Migrate + generate', text: 'schema change → migrate → prisma generate → types update' },
  { title: 'Repo layer', text: 'wrap Prisma behind functions that return domain types (Zod optional)' },
  { title: 'What’s next', text: 'share DTOs so client and server agree' },
];

const CORE = [
  {
    icon: '🗄️',
    title: 'Generate Types',
    titleClass: 'card-title-cyan',
    subtitle: 'Prisma',
    description: 'Models in schema.prisma compile into a typed client API.',
    code: 'model User {\n  id    String @id @default(cuid())\n  email String @unique\n}\n// npx prisma generate',
  },
  {
    icon: '🔎',
    title: 'Typed Query',
    titleClass: 'card-title-purple',
    subtitle: 'Client',
    description: 'TypeScript knows email is string and missing rows are null.',
    code: 'const user = await prisma.user.findUnique({\n  where: { email },\n});\n// User | null',
  },
  {
    icon: '🎯',
    title: 'Select Narrow',
    titleClass: 'card-title-amber',
    subtitle: 'Payload',
    description: 'Select only what the API needs — the return type shrinks with you.',
    code: 'prisma.user.findMany({\n  select: { id: true, email: true },\n});\n// { id: string; email: string }[]',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'User Model',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Add User with id + email. Generate client. Write findByEmail typed helper.',
    code: 'export async function findByEmail(email: string) {\n  return prisma.user.findUnique({ where: { email } });\n}',
  },
  {
    icon: '🔍',
    title: 'Null Check',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Handler returns 404 when findUnique is null — no non-null assertion.',
    code: 'if (!user) return res.status(404).end();',
  },
  {
    icon: '📝',
    title: 'Select DTO',
    titleClass: 'card-title-amber',
    subtitle: 'API',
    description: 'List users with select { id, email } only — prove passwordHash is not in the type.',
    code: 'select: { id: true, email: true }',
  },
  {
    icon: '🔜',
    title: 'Next: Contracts',
    titleClass: 'card-title-lime',
    subtitle: 'Day 228',
    description: 'Tomorrow — shared API contracts / DTOs.',
    link: { href: '/day-228', label: 'Go to Day 228 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'Prisma Docs',
    titleClass: 'card-title-cyan',
    subtitle: 'ORM',
    description: 'Schema, migrate, and client.',
    link: { href: PRISMA, label: 'Open Prisma →', external: true },
  },
  {
    icon: '🧲',
    title: 'Prisma Client',
    titleClass: 'card-title-purple',
    subtitle: 'Setup',
    description: 'Generating and using the client.',
    link: { href: CLIENT, label: 'Open client intro →', external: true },
  },
  {
    icon: '🧩',
    title: 'Day 226',
    titleClass: 'card-title-amber',
    subtitle: 'Prior',
    description: 'Middleware that calls typed repos.',
    link: { href: '/day-226', label: 'Open Day 226 →' },
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

export default function Day227() {
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
          <Link to="/day-226" className="day001-nav-btn day001-nav-prev">← Day 226</Link>
          <p className="day001-datetime">TypeScript Day 227 · 15 Aug 2027</p>
          <Link to="/day-228" className="day001-nav-btn day001-nav-next">Day 228 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Backend</span><span>Day 227</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 227 <span aria-hidden="true">🗄️</span></h1>
              <p className="day001-day-theme">PRISMA & DATABASE TYPES</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '64%' }} /></div>

        <p className="day001-summary">
          Day 227 types the database. Use <strong>Prisma</strong> so queries return real models, and <strong>select</strong> to shrink API payloads.
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

        <CardSection icon="🗄️" title="1 · PRISMA TYPES" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day227</span><span>#Prisma</span><span>#Database</span>
        </footer>
      </div>
    </div>
  );
}
