import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const OAUTH_URL = 'https://oauth.net/2/';
const YT_URL = 'https://www.youtube.com/watch?v=Y2H3DXDeS3Q';

const LEARNT_TODAY = [
  {
    title: 'OAuth 2.0',
    text: 'delegated auth — apps get tokens without seeing the password',
  },
  {
    title: 'Authorization code',
    text: 'the safe browser flow — code → exchange for tokens on the server',
  },
  {
    title: 'Access vs refresh',
    text: 'short-lived access tokens; long-lived refresh tokens to renew them',
  },
  {
    title: 'Session cookies',
    text: 'server stores session; cookie ID on the client — easy to revoke',
  },
  {
    title: 'JWT trade-offs',
    text: 'stateless and scalable — harder to revoke until expiry',
  },
  {
    title: 'Session vs JWT',
    text: 'pick sessions for easy revoke; JWT for distributed APIs',
  },
  {
    title: 'SSO overview',
    text: 'one login across apps — SAML / OIDC identity providers',
  },
  {
    title: 'HttpOnly + Secure',
    text: 'cookies that JS cannot read; only sent over HTTPS',
  },
  {
    title: 'CSRF & XSS',
    text: 'protect cookie sessions from CSRF; protect tokens from XSS',
  },
  {
    title: 'Auth security',
    text: 'rotate secrets, short TTLs, store refresh tokens safely',
  },
];

const AUTH_FLOWS = [
  {
    icon: '🔐',
    title: 'OAuth 2.0',
    titleClass: 'card-title-cyan',
    subtitle: 'delegated access',
    description: 'Users authorize your app; the IdP issues tokens — no password sharing.',
    code: 'authorize → code → token endpoint\naccess_token + refresh_token',
  },
  {
    icon: '♻️',
    title: 'Refresh Tokens',
    titleClass: 'card-title-green',
    subtitle: 'renew access',
    description: 'Access tokens expire fast; refresh tokens get new ones quietly.',
    code: 'POST /oauth/token\ngrant_type=refresh_token',
  },
  {
    icon: '🍪',
    title: 'Session vs JWT',
    titleClass: 'card-title-amber',
    subtitle: 'stateful vs stateless',
    description: 'Sessions: revoke anytime. JWTs: no server lookup, revoke is harder.',
    code: 'session: Set-Cookie; HttpOnly; Secure\nJWT: Authorization: Bearer <token>',
  },
  {
    icon: '🏢',
    title: 'SSO Overview',
    titleClass: 'card-title-pink',
    subtitle: 'one login',
    description: 'Enterprise single sign-on via OIDC or SAML identity providers.',
    code: 'IdP (Okta / Auth0 / Azure AD)\n→ OIDC ID token → your app',
  },
];

const SECURITY = [
  {
    icon: '🛡️',
    title: 'Auth Security',
    titleClass: 'card-title-cyan',
    subtitle: 'harden it',
    description: 'Short TTLs, rotate secrets, hash refresh tokens at rest.',
    code: 'access TTL: minutes\nrefresh: rotate on use · store hashed',
  },
  {
    icon: '🔒',
    title: 'Cookie Hardening',
    titleClass: 'card-title-green',
    subtitle: 'HttpOnly · Secure · SameSite',
    description: 'Stop XSS from reading cookies; stop CSRF with SameSite.',
    code: 'HttpOnly; Secure; SameSite=Lax\n+ CSRF token for state-changing POSTs',
  },
  {
    icon: '⚠️',
    title: 'Common Pitfalls',
    titleClass: 'card-title-amber',
    subtitle: 'don\'t ship these',
    description: 'Never put secrets in localStorage; never log tokens.',
    code: '// bad: localStorage.setItem("jwt", ...)\n// better: HttpOnly cookie or memory',
  },
];

const RESOURCES = [
  {
    icon: '📖',
    title: 'OAuth 2.0',
    titleClass: 'card-title-purple',
    subtitle: 'oauth.net',
    description: 'Official OAuth 2.0 overview and specs.',
    link: { href: OAUTH_URL, label: 'Open OAuth docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'JWT Explained',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'JWT Explained in Under 10 Minutes — for Day 92.',
    link: { href: YT_URL, label: 'Watch on YouTube →', external: true },
  },
  {
    icon: '📚',
    title: 'Lesson Page',
    titleClass: 'card-title-green',
    subtitle: 'full chapter',
    description: 'Open the Day 92 lesson for sections, quiz, and try-it snippets.',
    link: {
      href: '/learn/authentication-in-production',
      label: 'Open lesson →',
      external: false,
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

export default function Day092() {
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
          <Link to="/day-091" className="day001-nav-btn day001-nav-home">
            ← Day 91
          </Link>
          <p className="day001-datetime">Thunder Day 92 · 2 Apr 2027</p>
          <Link to="/day-093" className="day001-nav-btn day001-nav-next">
            Day 93 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Security</span>
              <span>Auth</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 92 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">AUTHENTICATION IN PRODUCTION</p>
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
              <p className="day001-profile-role">SECURITY</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '92%' }} />
        </div>

        <p className="day001-summary">
          Day ninety-two — ship auth the production way: <strong>OAuth 2.0</strong>,{' '}
          <strong>refresh tokens</strong>, <strong>session vs JWT</strong>, and <strong>SSO</strong>.
          Harden cookies, rotate secrets, and know the CSRF/XSS trade-offs. Reference:{' '}
          <a href={OAUTH_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            OAuth 2.0
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

        <CardSection icon="🔑" title="AUTH FLOWS" cards={AUTH_FLOWS} columns={4} />
        <CardSection icon="🛡️" title="HARDEN AUTH" cards={SECURITY} columns={3} />
        <CardSection icon="📚" title="AUTH RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#OAuth</span>
          <span>#JWT</span>
          <span>#Security</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
