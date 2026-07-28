import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const RECSYS = 'https://developers.google.com/machine-learning/recommendation';
const MLCC = 'https://developers.google.com/machine-learning/crash-course';
const NEXT = 'https://developers.google.com/machine-learning/crash-course/production-ml-systems';

const LEARNT_TODAY = [
  { title: 'Arc complete', text: 'Days 181–185: recsys intro → CF vs content → features → serve API → milestone' },
  { title: 'MVP bar', text: 'popular + item-item + content tags + GET /recommendations is enough for Year-1' },
  { title: 'Signals first', text: 'log impressions and completes before chasing fancy models' },
  { title: 'Same features', text: 'offline and online must agree — skew kills quality quietly' },
  { title: 'Explain lists', text: 'short reasons make personalization feel helpful, not creepy' },
  { title: 'Always fallback', text: 'trending/editorial when personalization fails — never blank shelves' },
  { title: 'Measure CTR', text: 'Precision@K offline; click-through on the shelf online' },
  { title: 'Ethics guardrails', text: 'filter unsafe items; watch popularity bias and filter bubbles' },
  { title: 'What is next', text: 'embeddings and ANN search next — Day 186 opens the stretch' },
];

const CORE = [
  {
    icon: '✅', title: 'Checklist', titleClass: 'card-title-cyan', subtitle: 'Ship It',
    description: 'Events logged, neighbors table, feature rows, recommendations endpoint, cache + fallback.',
    code: 'events · item_sim · features\nGET /recommendations · cache',
  },
  {
    icon: '🧪', title: 'Quality Bar', titleClass: 'card-title-purple', subtitle: 'Prove Value',
    description: 'Beat “popular only” on CTR or completion rate before adding neural models.',
    code: '// A/B: popular vs hybrid\n// keep winner',
  },
  {
    icon: '🗺️', title: 'Roadmap', titleClass: 'card-title-amber', subtitle: 'Later',
    description: 'Embeddings, two-tower models, Feast, and online learning come after this foundation.',
    code: 'MVP → embeddings → A/B → store',
  },
];

const PRACTICE = [
  {
    icon: '📦', title: 'Demo Story', titleClass: 'card-title-cyan', subtitle: 'Portfolio',
    description: 'Show cold start → after completes → shelf updates with a clear reason string.',
    code: 'new user → trending\nthen → “Because you finished…”',
  },
  {
    icon: '🔍', title: 'Debug Habit', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Inspect candidate set and top scores for one user weekly — catch dead features early.',
    code: '// debug?userId=…\n// dump top candidates',
  },
  {
    icon: '🧭', title: 'Keep Building', titleClass: 'card-title-amber', subtitle: 'Mindset',
    description: 'Personalization is product + data + ML. Rules that ship beat notebooks that do not.',
    code: '// ship simple\n// measure\n// iterate',
  },
  {
    icon: '🔜', title: 'What Comes Next', titleClass: 'card-title-lime', subtitle: 'Day 186',
    description: 'Next: embeddings basics — dense vectors for similarity and better candidates.',
    link: { href: '/day-186', label: 'Go to Day 186 →' },
  },
];

const RESOURCES = [
  {
    icon: '🎯', title: 'Google Recsys', titleClass: 'card-title-cyan', subtitle: 'Course',
    description: 'Full recommendation systems path.',
    link: { href: RECSYS, label: 'Open Google recsys →', external: true },
  },
  {
    icon: '📘', title: 'ML Crash Course', titleClass: 'card-title-purple', subtitle: 'Google',
    description: 'Broader ML foundations for Year-1.',
    link: { href: MLCC, label: 'Open ML crash course →', external: true },
  },
  {
    icon: '🏭', title: 'Production ML', titleClass: 'card-title-amber', subtitle: 'Systems',
    description: 'How ML systems run in production.',
    link: { href: NEXT, label: 'Read production ML →', external: true },
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

export default function Day185() {
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
          <Link to="/day-184" className="day001-nav-btn day001-nav-prev">← Day 184</Link>
          <p className="day001-datetime">ML Day 185 · 4 Jul 2027</p>
          <Link to="/day-186" className="day001-nav-btn day001-nav-next">Day 186 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ML</span><span>Year 1</span><span>Milestone</span><span>RecSys</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 185 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">ML FEATURES MILESTONE</p>
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
          Day 185 closes the personalization slice. You can explain <strong>signals</strong>,{' '}
          <strong>CF vs content</strong>, <strong>features</strong>, and a live{' '}
          <strong>/recommendations</strong> shelf — ready for the next ML stretch.
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

        <CardSection icon="🏁" title="1 · MILESTONE" cards={CORE} columns={3} />
        <CardSection icon="📦" title="2 · SHIP & NEXT" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Milestone</span><span>#RecSys</span><span>#ML</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
