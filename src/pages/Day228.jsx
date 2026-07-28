import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ZOD = 'https://zod.dev/';
const TRPC = 'https://trpc.io/docs';

const LEARNT_TODAY = [
  { title: 'Single contract', text: 'define request/response shapes once — share between client and server' },
  { title: 'Zod DTOs', text: 'schemas in a packages/shared folder; z.infer on both sides' },
  { title: 'Version fields', text: 'breaking changes need a new route or version flag' },
  { title: 'Error shape', text: 'standard { error: { code, message } } beats ad-hoc strings' },
  { title: 'OpenAPI optional', text: 'generate docs from schemas when the team needs them' },
  { title: 'tRPC idea', text: 'end-to-end types without codegen — know the pattern even if you use REST' },
  { title: 'What’s next', text: 'auth/session types sit on top of these contracts' },
];

const CORE = [
  {
    icon: '📦',
    title: 'Shared Package',
    titleClass: 'card-title-cyan',
    subtitle: 'Monorepo',
    description: 'packages/contracts holds Zod schemas imported by API and web.',
    code: 'export const CreateUser = z.object({\n  email: z.string().email(),\n  name: z.string().min(1),\n});\nexport type CreateUser = z.infer<typeof CreateUser>;',
  },
  {
    icon: '🔁',
    title: 'Parse Both Ends',
    titleClass: 'card-title-purple',
    subtitle: 'Boundary',
    description: 'Server safeParse on input; client safeParse on JSON responses.',
    code: 'const body = CreateUser.safeParse(req.body);\nconst data = UserDTO.safeParse(await res.json());',
  },
  {
    icon: '🧾',
    title: 'Error Envelope',
    titleClass: 'card-title-amber',
    subtitle: 'Standard',
    description: 'One error type for 4xx/5xx so UI can switch on code.',
    code: 'type ApiError = {\n  error: { code: string; message: string };\n};',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'CreateUser DTO',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Shared Zod schema + type. Server rejects invalid email with 400 + ApiError.',
    code: 'if (!body.success) return res.status(400).json({ error: { code: "BAD_REQUEST", message: "..." } });',
  },
  {
    icon: '🔍',
    title: 'Client Guard',
    titleClass: 'card-title-purple',
    subtitle: 'Fetch',
    description: 'Frontend parses UserDTO; on failure show a typed error state.',
    code: 'const parsed = UserDTO.safeParse(json);',
  },
  {
    icon: '📝',
    title: 'Contract README',
    titleClass: 'card-title-amber',
    subtitle: 'Docs',
    description: 'List endpoints and which schemas they use — one table.',
    code: 'POST /users → CreateUser\nGET /users/:id → UserDTO',
  },
  {
    icon: '🔜',
    title: 'Next: Auth Types',
    titleClass: 'card-title-lime',
    subtitle: 'Day 229',
    description: 'Tomorrow — auth and session typing.',
    link: { href: '/day-229', label: 'Go to Day 229 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'Zod',
    titleClass: 'card-title-cyan',
    subtitle: 'Schemas',
    description: 'Runtime validation + static types.',
    link: { href: ZOD, label: 'Open Zod →', external: true },
  },
  {
    icon: '🔗',
    title: 'tRPC',
    titleClass: 'card-title-purple',
    subtitle: 'E2E Types',
    description: 'End-to-end types pattern for inspiration.',
    link: { href: TRPC, label: 'Open tRPC →', external: true },
  },
  {
    icon: '🗄️',
    title: 'Day 227',
    titleClass: 'card-title-amber',
    subtitle: 'Prior',
    description: 'DB types that feed DTOs.',
    link: { href: '/day-227', label: 'Open Day 227 →' },
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

export default function Day228() {
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
          <Link to="/day-227" className="day001-nav-btn day001-nav-prev">← Day 227</Link>
          <p className="day001-datetime">TypeScript Day 228 · 16 Aug 2027</p>
          <Link to="/day-229" className="day001-nav-btn day001-nav-next">Day 229 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Contracts</span><span>Day 228</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 228 <span aria-hidden="true">📦</span></h1>
              <p className="day001-day-theme">SHARED API CONTRACTS (DTOs)</p>
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
          Day 228 aligns client and server. Put <strong>shared Zod DTOs</strong> in one package and parse at both boundaries.
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

        <CardSection icon="📦" title="1 · API CONTRACTS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day228</span><span>#DTO</span><span>#Zod</span>
        </footer>
      </div>
    </div>
  );
}
