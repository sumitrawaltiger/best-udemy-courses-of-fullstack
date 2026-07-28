import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const JWT = 'https://jwt.io/';
const LUCIA = 'https://lucia-auth.com/';

const LEARNT_TODAY = [
  { title: 'Session vs JWT', text: 'opaque session IDs in cookies vs signed tokens — both need typed payloads' },
  { title: 'Principal type', text: 'AuthUser = { id, role, email } used on Request and in UI' },
  { title: 'Guards', text: 'requireUser / requireRole return typed narrowed req.user' },
  { title: 'Cookie flags', text: 'httpOnly, secure, sameSite — config typed once' },
  { title: 'Never trust body', text: 'identity comes from session/token, not from client JSON' },
  { title: 'Logout cleanup', text: 'typed session delete + cookie clear helpers' },
  { title: 'What’s next', text: 'backend TS milestone ties the server arc together' },
];

const CORE = [
  {
    icon: '🔐',
    title: 'AuthUser',
    titleClass: 'card-title-cyan',
    subtitle: 'Principal',
    description: 'One shared type for the signed-in user across API and apps.',
    code: 'type AuthUser = {\n  id: string;\n  email: string;\n  role: \'admin\' | \'user\';\n};',
  },
  {
    icon: '🍪',
    title: 'Session Helper',
    titleClass: 'card-title-purple',
    subtitle: 'Cookie',
    description: 'getSession(req): Promise<AuthUser | null> — single place to resolve identity.',
    code: 'export async function getSession(\n  req: Request\n): Promise<AuthUser | null> { /* ... */ }',
  },
  {
    icon: '🛡️',
    title: 'Role Guard',
    titleClass: 'card-title-amber',
    subtitle: 'Authz',
    description: 'Middleware narrows role before admin routes run.',
    code: 'export function requireRole(role: AuthUser[\'role\']) {\n  return (req: Request, res: Response, next: NextFunction) => {\n    if (req.user?.role !== role) return res.status(403).end();\n    next();\n  };\n}',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: '/me Route',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'GET /me returns AuthUser or 401. No password fields in the type.',
    code: 'if (!req.user) return res.status(401).end();\nres.json(req.user); // AuthUser',
  },
  {
    icon: '🔍',
    title: 'Forbid Spoof',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Ignore userId in body; always use session user id for creates.',
    code: 'const authorId = req.user!.id; // after requireUser',
  },
  {
    icon: '📝',
    title: 'Cookie Config',
    titleClass: 'card-title-amber',
    subtitle: 'Ops',
    description: 'Type a CookieOptions object with httpOnly/secure/sameSite.',
    code: 'const cookie = {\n  httpOnly: true,\n  secure: true,\n  sameSite: \'lax\',\n} as const;',
  },
  {
    icon: '🔜',
    title: 'Next: Milestone',
    titleClass: 'card-title-lime',
    subtitle: 'Day 230',
    description: 'Tomorrow — backend TypeScript milestone.',
    link: { href: '/day-230', label: 'Go to Day 230 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'JWT Intro',
    titleClass: 'card-title-cyan',
    subtitle: 'Tokens',
    description: 'Background on signed tokens.',
    link: { href: JWT, label: 'Open jwt.io →', external: true },
  },
  {
    icon: '🔑',
    title: 'Session Auth',
    titleClass: 'card-title-purple',
    subtitle: 'Pattern',
    description: 'Modern session-oriented auth docs (Lucia).',
    link: { href: LUCIA, label: 'Open Lucia →', external: true },
  },
  {
    icon: '📦',
    title: 'Day 228',
    titleClass: 'card-title-amber',
    subtitle: 'Prior',
    description: 'Contracts that include AuthUser DTOs.',
    link: { href: '/day-228', label: 'Open Day 228 →' },
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

export default function Day229() {
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
          <Link to="/day-228" className="day001-nav-btn day001-nav-prev">← Day 228</Link>
          <p className="day001-datetime">TypeScript Day 229 · 17 Aug 2027</p>
          <Link to="/day-230" className="day001-nav-btn day001-nav-next">Day 230 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Auth</span><span>Day 229</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 229 <span aria-hidden="true">🔐</span></h1>
              <p className="day001-day-theme">AUTH & SESSION TYPING</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '65%' }} /></div>

        <p className="day001-summary">
          Day 229 types identity. Define <strong>AuthUser</strong>, resolve sessions in one helper, and guard routes by <strong>role</strong> without casts.
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

        <CardSection icon="🔐" title="1 · AUTH TYPES" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day229</span><span>#Auth</span><span>#Sessions</span>
        </footer>
      </div>
    </div>
  );
}
