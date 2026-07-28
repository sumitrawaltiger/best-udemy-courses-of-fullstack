import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const FLY = 'https://fly.io/docs/';
const RAILWAY = 'https://docs.railway.com/';
const RENDER = 'https://render.com/docs';

const LEARNT_TODAY = [
  { title: 'Pick a host', text: 'Fly, Railway, Render, or similar — container or buildpack that runs your Node image' },
  { title: 'Same image', text: 'deploy the digest CI built — do not rebuild differently in prod' },
  { title: 'Migrate then serve', text: 'prisma migrate deploy (or equivalent) before or as the new release starts' },
  { title: 'Health checks', text: 'platform probes /health — failing checks stop bad deploys' },
  { title: 'Rollback', text: 'redeploy the previous image tag when metrics or errors spike' },
  { title: 'Logs & metrics', text: 'stream logs; watch error rate and latency after each release' },
  { title: 'HTTPS default', text: 'terminate TLS at the platform; set secure cookies and CORS origin' },
  { title: 'Days 161–165', text: 'Docker → Compose → Actions → secrets → cloud ship' },
  { title: 'Cloud milestone', text: 'you can take a Nest/Express API from laptop to a public URL safely' },
];

const CORE = [
  {
    icon: '☁️', title: 'Deploy Flow', titleClass: 'card-title-cyan', subtitle: 'Happy Path',
    description: 'CI pushes image → platform pulls tag → migrate → start → health green → route traffic.',
    code: 'build → push → migrate → start → /health 200',
  },
  {
    icon: '🧬', title: 'Migrate On Release', titleClass: 'card-title-purple', subtitle: 'Schema First',
    description: 'Run migrations as a release command or init container before the new web process.',
    code: 'npx prisma migrate deploy\nnode dist/main.js',
  },
  {
    icon: '↩️', title: 'Rollback Plan', titleClass: 'card-title-amber', subtitle: 'Know Before Panic',
    description: 'Keep the previous image tag. Roll forward with a fix when migrations are additive; plan carefully for destructive ones.',
    code: '// redeploy image@previous-sha\n'// additive migrations preferred',
  },
];

const WRAP = [
  {
    icon: '✅', title: 'Ship Checklist', titleClass: 'card-title-cyan', subtitle: 'Go Live',
    description: 'Secrets set, migrate, health, HTTPS, CORS, logs, rollback tag, smoke test auth + one write.',
    code: '// env · migrate · health\n'// smoke · watch logs 15m',
  },
  {
    icon: '🗺️', title: '161 → 165', titleClass: 'card-title-purple', subtitle: 'Cloud Arc',
    description: 'Containerize, compose locally, automate CI/CD, lock secrets, deploy with rollback.',
    code: 'Docker · Compose\nActions · Secrets · Ship',
  },
  {
    icon: '🚀', title: 'What Comes Next', titleClass: 'card-title-lime', subtitle: 'Day 166 Preview',
    description: 'Tomorrow: OpenTelemetry traces — spans across HTTP and DB, correlated with your logs.',
    link: { href: '/day-166', label: 'Go to Day 166 →' },
  },
  {
    icon: '🏠', title: 'Back Home', titleClass: 'card-title-amber', subtitle: 'Hub',
    description: 'Return to the hub for other tracks and the 1600-day map.',
    link: { href: '/', label: 'Go to Home →' },
  },
];

const RESOURCES = [
  {
    icon: '☁️', title: 'Fly.io Docs', titleClass: 'card-title-cyan', subtitle: 'Host',
    description: 'Deploy containers close to users with Fly.',
    link: { href: FLY, label: 'Read Fly docs →', external: true },
  },
  {
    icon: '🚂', title: 'Railway Docs', titleClass: 'card-title-purple', subtitle: 'Host',
    description: 'Simple deploys for APIs and datastores.',
    link: { href: RAILWAY, label: 'Read Railway docs →', external: true },
  },
  {
    icon: '🟩', title: 'Render Docs', titleClass: 'card-title-amber', subtitle: 'Host',
    description: 'Web services, Postgres, and background workers.',
    link: { href: RENDER, label: 'Read Render docs →', external: true },
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

export default function Day165() {
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
          <Link to="/day-164" className="day001-nav-btn day001-nav-prev">← Day 164</Link>
          <p className="day001-datetime">Cloud Day 165 · 14 Jun 2027</p>
          <Link to="/day-166" className="day001-nav-btn day001-nav-next">Day 166 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Deploy</span><span>Year 1</span><span>Cloud</span><span>Ship</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 165 <span aria-hidden="true">☁️</span></h1>
              <p className="day001-day-theme">CLOUD DEPLOY &amp; ROLLBACK</p>
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
          Day 165 takes the API public. <strong>Deploy the CI image</strong>,{' '}
          <strong>migrate</strong>, pass <strong>/health</strong>, watch logs, and keep a{' '}
          <strong>rollback</strong> tag ready.
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

        <CardSection icon="☁️" title="1 · RELEASE FLOW" cards={CORE} columns={3} />
        <CardSection icon="✅" title="2 · CHECKLIST & ARC" cards={WRAP} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Deploy</span><span>#Docker</span><span>#Cloud</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
