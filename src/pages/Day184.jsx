import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const RANKING = 'https://developers.google.com/machine-learning/recommendation/overview/candidate';
const EXPLAIN = 'https://developers.google.com/machine-learning/recommendation/overview/types';
const CACHE = 'https://redis.io/docs/latest/develop/use/caching/';

const LEARNT_TODAY = [
  { title: 'Serve endpoint', text: 'GET /recommendations returns top-K with scores and short reasons' },
  { title: 'Auth context', text: 'use the logged-in user id — never trust userId from the query alone' },
  { title: 'Pipeline in code', text: 'candidates → filter → score with features → sort → take K' },
  { title: 'Latency budget', text: 'precompute neighbors/features; keep request path under ~100ms if you can' },
  { title: 'Cache shelves', text: 'cache personalized lists briefly; bust on major complete events' },
  { title: 'Explainability', text: 'return reason: “Because you finished React Basics” builds trust' },
  { title: 'A/B later', text: 'log which model version served — experiment after you have traffic' },
  { title: 'Fallbacks', text: 'if features missing → popular / editorial list, never empty 500' },
  { title: 'Contract', text: 'stable JSON shape so the frontend can ship a “For you” shelf' },
];

const CORE = [
  {
    icon: '🔌', title: 'API Shape', titleClass: 'card-title-cyan', subtitle: 'Contract',
    description: 'Limit, optional context (home vs course page), and typed items with reason.',
    code: 'GET /recommendations?limit=10\n[{ id, score, reason }]',
  },
  {
    icon: '⚙️', title: 'Request Path', titleClass: 'card-title-purple', subtitle: 'Steps',
    description: 'Load user features → candidate ids → join item features → score → filter owned.',
    code: 'candidates → features → rank → filter',
  },
  {
    icon: '💬', title: 'Reasons', titleClass: 'card-title-amber', subtitle: 'UX',
    description: 'Map rule winners to human text; hide raw model scores from the UI if confusing.',
    code: 'reason: "Similar to what you finished"',
  },
];

const PRACTICE = [
  {
    icon: '⚡', title: 'Cache Key', titleClass: 'card-title-cyan', subtitle: 'Redis',
    description: 'Key by userId + shelf; TTL 5–15 minutes for Year-1 freshness vs load.',
    code: 'recs:{userId}:home → JSON\nTTL 600s',
  },
  {
    icon: '🛡️', title: 'Always Fallback', titleClass: 'card-title-purple', subtitle: 'Resilience',
    description: 'Timeout on feature fetch → return trending. Prefer stale cache over empty.',
    code: '// try personalized\n'// catch → popular()',
  },
  {
    icon: '📈', title: 'Log Impressions', titleClass: 'card-title-amber', subtitle: 'Feedback',
    description: 'Emit impression + position when the shelf renders; later join to clicks.',
    code: 'event: rec_impression\n{ userId, itemId, position }',
  },
  {
    icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-lime', subtitle: 'Day 185 Preview',
    description: 'Tomorrow: wrap Days 181–185 — checklist for a Year-1 personalization slice.',
    link: { href: '/day-185', label: 'Go to Day 185 →' },
  },
];

const RESOURCES = [
  {
    icon: '🪜', title: 'Retrieve & Rank', titleClass: 'card-title-cyan', subtitle: 'Google',
    description: 'Candidate generation and ranking overview.',
    link: { href: RANKING, label: 'Read retrieve & rank →', external: true },
  },
  {
    icon: '🎯', title: 'Recsys Types', titleClass: 'card-title-purple', subtitle: 'Google',
    description: 'Types of recommendation approaches.',
    link: { href: EXPLAIN, label: 'Read recsys types →', external: true },
  },
  {
    icon: '⚡', title: 'Caching', titleClass: 'card-title-amber', subtitle: 'Redis',
    description: 'Caching patterns for low-latency reads.',
    link: { href: CACHE, label: 'Read Redis caching →', external: true },
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

export default function Day184() {
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
          <Link to="/day-183" className="day001-nav-btn day001-nav-prev">← Day 183</Link>
          <p className="day001-datetime">ML Day 184 · 3 Jul 2027</p>
          <Link to="/day-185" className="day001-nav-btn day001-nav-next">Day 185 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ML</span><span>Year 1</span><span>API</span><span>Ranking</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 184 <span aria-hidden="true">🔌</span></h1>
              <p className="day001-day-theme">PERSONALIZATION / RANKING API</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">ML · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '51%' }} /></div>

        <p className="day001-summary">
          Day 184 ships the shelf. Expose <strong>GET /recommendations</strong>, score with features,
          add <strong>reasons</strong>, <strong>cache</strong>, and safe <strong>fallbacks</strong>.
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

        <CardSection icon="🔌" title="1 · SERVE CONTRACT" cards={CORE} columns={3} />
        <CardSection icon="⚡" title="2 · PRODUCTION BASICS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Recommendations</span><span>#API</span><span>#ML</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
