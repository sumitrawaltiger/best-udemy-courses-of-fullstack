import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TWELVE = 'https://12factor.net/config/';
const DOTENV = 'https://github.com/motdotla/dotenv#readme';
const SECRETS = 'https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions';

const LEARNT_TODAY = [
  { title: '12-factor config', text: 'store config in the environment — same image, different env vars per stage' },
  { title: 'Dev / staging / prod', text: 'different DATABASE_URL and JWT_SECRET — never share prod secrets locally' },
  { title: '.env local only', text: 'gitignored; .env.example lists keys without values' },
  { title: 'Validate at boot', text: 'fail fast if required env is missing (Nest ConfigModule / Zod)' },
  { title: 'Secret stores', text: 'platform secrets, Vault, or cloud secret managers — not chat or screenshots' },
  { title: 'Rotate', text: 'plan key rotation; short-lived tokens beat forever passwords' },
  { title: 'Least privilege', text: 'DB users that can only do what the app needs' },
  { title: 'No secrets in images', text: 'pass at runtime; scan layers if you must audit' },
  { title: 'Logs stay clean', text: 'redact tokens and passwords from structured logs' },
];

const CORE = [
  {
    icon: '📄', title: '.env.example', titleClass: 'card-title-cyan', subtitle: 'Document Keys',
    description: 'Commit the list of required vars with empty or dummy values so new clones know what to set.',
    code: 'DATABASE_URL=\nJWT_SECRET=\nREDIS_URL=\nPORT=3000\nCORS_ORIGIN=',
  },
  {
    icon: '✅', title: 'Boot Validation', titleClass: 'card-title-purple', subtitle: 'Fail Fast',
    description: 'Parse env with Zod or ConfigModule validation. Crash on missing JWT_SECRET before serving traffic.',
    code: 'const env = z.object({\n  DATABASE_URL: z.string().url(),\n  JWT_SECRET: z.string().min(32),\n}).parse(process.env);',
  },
  {
    icon: '🔐', title: 'Platform Secrets', titleClass: 'card-title-amber', subtitle: 'Prod',
    description: 'Set vars in Railway/Fly/Render/AWS — inject into the container. CI uses GitHub Secrets.',
    code: '// host dashboard → Environment\n'// CI: ${{ secrets.JWT_SECRET }}',
  },
];

const PRACTICE = [
  {
    icon: '🔄', title: 'Per-Env Files', titleClass: 'card-title-cyan', subtitle: 'Local Only',
    description: '.env.development and .env.test can help locally; production still comes from the platform.',
    code: '// never commit .env*\n'// commit .env.example only',
  },
  {
    icon: '🧹', title: 'Redact Logs', titleClass: 'card-title-purple', subtitle: 'Pino Paths',
    description: 'Configure redaction for authorization headers and password fields.',
    code: 'redact: ["req.headers.authorization", "*.password"]',
  },
  {
    icon: '🗝️', title: 'Rotate Drill', titleClass: 'card-title-amber', subtitle: 'Practice',
    description: 'Once a quarter: rotate a staging secret and confirm the app still boots. Document the steps.',
    code: '// new secret → redeploy → verify /health',
  },
  {
    icon: '🔜', title: 'Next: Deploy', titleClass: 'card-title-lime', subtitle: 'Day 165 Preview',
    description: 'Tomorrow: ship the container to a cloud host — migrate, health, rollback.',
    link: { href: '/day-165', label: 'Go to Day 165 →' },
  },
];

const RESOURCES = [
  {
    icon: 'XII', title: '12-Factor Config', titleClass: 'card-title-cyan', subtitle: 'Guide',
    description: 'Why config belongs in the environment.',
    link: { href: TWELVE, label: 'Read 12-factor config →', external: true },
  },
  {
    icon: '📄', title: 'dotenv', titleClass: 'card-title-purple', subtitle: 'Local Dev',
    description: 'Load .env into process.env during development.',
    link: { href: DOTENV, label: 'Read dotenv README →', external: true },
  },
  {
    icon: '🔐', title: 'GitHub Secrets', titleClass: 'card-title-amber', subtitle: 'CI',
    description: 'How to store and use secrets in Actions safely.',
    link: { href: SECRETS, label: 'Read secrets guide →', external: true },
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

export default function Day164() {
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
          <Link to="/day-163" className="day001-nav-btn day001-nav-prev">← Day 163</Link>
          <p className="day001-datetime">Cloud Day 164 · 17 Nov 2027</p>
          <Link to="/day-165" className="day001-nav-btn day001-nav-next">Day 165 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Config</span><span>Year 1</span><span>Secrets</span><span>12-Factor</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 164 <span aria-hidden="true">🔐</span></h1>
              <p className="day001-day-theme">CONFIG &amp; SECRETS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">CLOUD · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '46%' }} /></div>

        <p className="day001-summary">
          Day 164 locks down config. <strong>Environment variables</strong> per stage,{' '}
          <strong>.env.example</strong> in git, <strong>boot-time validation</strong>, and secrets only in
          the <strong>platform / CI store</strong>.
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

        <CardSection icon="🔐" title="1 · 12-FACTOR CONFIG" cards={CORE} columns={3} />
        <CardSection icon="🧹" title="2 · HYGIENE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#12Factor</span><span>#Secrets</span><span>#Security</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
