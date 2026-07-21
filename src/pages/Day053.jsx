import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const OWASP = 'https://owasp.org/www-project-top-ten/';
const OAUTH = 'https://oauth.net/2/';

const LEARNT_TODAY = [
  { title: 'AuthN vs AuthZ', text: 'authentication = who you are; authorization = what you can do' },
  { title: 'OAuth 2.0 / OIDC', text: 'delegated access and login without sharing passwords' },
  { title: 'Tokens at scale', text: 'stateless JWTs vs revocable sessions — trade-offs' },
  { title: 'Rate limiting', text: 'cap requests to protect from abuse and overload' },
  { title: 'Token bucket', text: 'the common algorithm — refill tokens over time' },
  { title: 'HTTPS everywhere', text: 'TLS in transit; encrypt sensitive data at rest' },
  { title: 'OWASP Top 10', text: 'injection, broken auth, XSS — the risks to design against' },
  { title: 'Least privilege', text: 'grant the minimum access needed, nothing more' },
];

const AUTH = [
  {
    icon: '🪪', title: 'AuthN vs AuthZ', titleClass: 'card-title-cyan', subtitle: 'Who vs What',
    description:
      'Authentication proves identity (login); authorization decides permissions (roles, scopes). OAuth 2.0 / OpenID Connect handle delegated access and third-party login without ever sharing a password.',
    code: '// authN: verify the user (password, OAuth, passkey)\n// authZ: check permission for the action\nif (!user.roles.includes("admin")) return res.status(403);',
  },
  {
    icon: '🎫', title: 'Tokens At Scale', titleClass: 'card-title-purple', subtitle: 'JWT vs Session',
    description:
      'Stateless JWTs scale well (no server lookup) but are hard to revoke before expiry — keep them short-lived with refresh tokens. Server sessions are easy to revoke but need shared storage (Redis). Pick per requirement.',
    code: '// JWT: short access token + refresh token\n// session: id in a cookie, state in Redis (revocable)',
  },
];

const PROTECT = [
  {
    icon: '🚦', title: 'Rate Limiting', titleClass: 'card-title-cyan', subtitle: 'Token Bucket',
    description:
      'Cap how many requests a client can make to prevent abuse and overload. The token-bucket algorithm refills tokens at a steady rate; each request spends one, and empties reject with 429.',
    code: '// per client: bucket of N tokens, refill r/sec\n// request → if tokens > 0: spend one, else 429\n// often implemented in Redis at the gateway',
  },
  {
    icon: '🔐', title: 'Encrypt & Harden', titleClass: 'card-title-purple', subtitle: 'In Transit & At Rest',
    description:
      'Use TLS/HTTPS for everything in transit and encrypt sensitive data at rest. Add security headers, validate all input, and never trust the client — the server enforces every rule.',
    code: '// HTTPS everywhere · encrypt PII at rest\n// validate input (Zod) · parameterised queries (no SQLi)',
  },
  {
    icon: '🛡️', title: 'OWASP & Least Privilege', titleClass: 'card-title-amber', subtitle: 'Design Against Risk',
    description:
      'Design against the OWASP Top 10 — injection, broken auth, XSS, misconfiguration. Grant least privilege: every user, service and token gets the minimum access it needs, reducing blast radius.',
    footer: 'validate input · least privilege · defence in depth',
  },
];

const RESOURCES = [
  {
    icon: '🛡️', title: 'OWASP Top 10', titleClass: 'card-title-cyan', subtitle: 'The Risks',
    description:
      'The ten most critical web application security risks — what they are, how they happen, and how to prevent each.',
    link: { href: OWASP, label: 'Open the OWASP Top 10 →', external: true },
  },
  {
    icon: '🔑', title: 'OAuth 2.0', titleClass: 'card-title-purple', subtitle: 'Delegated Access',
    description:
      'The authorization framework behind "sign in with…" — grant types, tokens, scopes and the flows for web, mobile and machine.',
    link: { href: OAUTH, label: 'Open OAuth 2.0 →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Observability', titleClass: 'card-title-amber', subtitle: 'Day 54 Preview',
    description:
      'Tomorrow — keeping systems healthy: logging, metrics and tracing, SLIs/SLOs, alerting, and designing for reliability.',
    link: { href: '/day-054', label: 'Go to Day 54 →' },
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

export default function Day053() {
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
          <Link to="/day-052" className="day001-nav-btn day001-nav-prev">← Day 52</Link>
          <p className="day001-datetime">TypeScript Day 53</p>
          <Link to="/day-054" className="day001-nav-btn day001-nav-next">Day 54 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>System Design</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 53 <span aria-hidden="true">🛡️</span></h1>
              <p className="day001-day-theme">SYSTEM DESIGN — SECURITY &amp; RATE LIMITS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '53%' }} /></div>

        <p className="day001-summary">
          Securing the system. Separate <strong>authentication</strong> (who you are) from{' '}
          <strong>authorization</strong> (what you can do); use <strong>OAuth 2.0 / OIDC</strong> for delegated access
          and third-party login. At scale, weigh <strong>stateless JWTs</strong> (short-lived + refresh) against{' '}
          <strong>revocable sessions</strong> (Redis). <strong>Rate limit</strong> with a <strong>token bucket</strong>{' '}
          (429 when empty), enforce <strong>HTTPS everywhere</strong> and encryption at rest, validate all input, and
          design against the <strong>OWASP Top 10</strong>. The guiding rule is <strong>least privilege</strong> —
          grant the minimum access, so a breach’s blast radius stays small. <em>Next: observability &amp;
          reliability.</em>
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

        <CardSection icon="🪪" title="AUTH & TOKENS" cards={AUTH} columns={2} />
        <CardSection icon="🚦" title="LIMIT & HARDEN" cards={PROTECT} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#SystemDesign</span><span>#Security</span>
        </footer>
      </div>
    </div>
  );
}
