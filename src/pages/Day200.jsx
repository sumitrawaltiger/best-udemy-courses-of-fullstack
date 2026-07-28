import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const RECSYS = 'https://developers.google.com/machine-learning/recommendation';
const FAIR = 'https://developers.google.com/machine-learning/recommendation/overview/fairness';
const PROD = 'https://developers.google.com/machine-learning/crash-course/production-ml-systems';

const LEARNT_TODAY = [
  { title: 'Day 200 landmark', text: '200 journal days — personalization path from signals to responsible rank' },
  { title: 'Arc 196–200', text: 'fairness → multi-obj → diversity → eval gap → milestone' },
  { title: 'Full ML stack', text: 'Days 181–200 cover recs, features, embeddings, LTR, towers, and ethics' },
  { title: 'Product first', text: 'CTR alone is not success — quality, fairness, and retention matter' },
  { title: 'Constraints + scores', text: 'safety filters and caps before any clever blend' },
  { title: 'Diverse shelves', text: 'MMR/quotas keep lists from collapsing into one topic' },
  { title: 'Eval discipline', text: 'offline filters; online decides — document every ship/kill' },
  { title: 'Year-1 ready', text: 'you can design, ship, measure, and roll back a real recs system' },
  { title: 'What is next', text: 'new Year-1 track, system design drills, or deeper MLOps — Day 201 when ready' },
];

const CORE = [
  {
    icon: '✅', title: 'Checklist', titleClass: 'card-title-cyan', subtitle: 'Ship It',
    description: 'Fairness spec, multi-obj weights, diversity post-process, offline→online gate.',
    code: 'fair · blend · MMR\noffline → A/B → ship',
  },
  {
    icon: '🧪', title: 'Quality Bar', titleClass: 'card-title-purple', subtitle: 'Prove Value',
    description: 'Online win on primary metric without breaking fairness/diversity guardrails.',
    code: 'CTR/complete ↑\nguards still green',
  },
  {
    icon: '🗺️', title: 'Journey Map', titleClass: 'card-title-amber', subtitle: '181–200',
    description: 'From recommendation basics through embeddings, ranking, and responsible ML.',
    code: 'recs → vectors → LTR\n→ fair · multi · div',
  },
];

const PRACTICE = [
  {
    icon: '📦', title: 'Portfolio Story', titleClass: 'card-title-cyan', subtitle: 'Demo',
    description: 'Walk a hiring manager: cold start → personalized shelf → A/B → fairness dashboard.',
    code: 'MVP → vectors → LTR\n→ fair metrics',
  },
  {
    icon: '🔍', title: 'Health Ritual', titleClass: 'card-title-purple', subtitle: 'Weekly',
    description: 'Check exposure slices, unique tags@10, offline/online correlation, rollback drill.',
    code: 'slices · diversity\ncorr · rollback dry-run',
  },
  {
    icon: '🧭', title: 'Keep Building', titleClass: 'card-title-amber', subtitle: 'Mindset',
    description: 'Responsible personalization is a craft. Ship simple, measure hard, stay humble.',
    code: '// ship · measure\n'// guard · iterate',
  },
  {
    icon: '🔜', title: 'What Comes Next', titleClass: 'card-title-lime', subtitle: 'Day 201',
    description: 'Next arc — advanced TypeScript (Days 201–205): conditionals, infer, mapped types, and brands.',
    link: { href: '/day-201', label: 'Go to Day 201 →' },
  },
];

const RESOURCES = [
  {
    icon: '🎯', title: 'Google Recsys', titleClass: 'card-title-cyan', subtitle: 'Course',
    description: 'Full recommendation systems path.',
    link: { href: RECSYS, label: 'Open Google recsys →', external: true },
  },
  {
    icon: '⚖️', title: 'Fairness', titleClass: 'card-title-purple', subtitle: 'Google',
    description: 'Fairness in recommendation systems.',
    link: { href: FAIR, label: 'Open fairness overview →', external: true },
  },
  {
    icon: '🏭', title: 'Production ML', titleClass: 'card-title-amber', subtitle: 'MLCC',
    description: 'Keep ML systems healthy in production.',
    link: { href: PROD, label: 'Open production ML →', external: true },
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

export default function Day200() {
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
          <Link to="/day-199" className="day001-nav-btn day001-nav-prev">← Day 199</Link>
          <p className="day001-datetime">ML Day 200 · 19 Jul 2027</p>
          <Link to="/day-201" className="day001-nav-btn day001-nav-next">Day 201 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ML</span><span>Year 1</span><span>Milestone</span><span>Day 200</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 200 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">YEAR-1 PERSONALIZATION MILESTONE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '55%' }} /></div>

        <p className="day001-summary">
          Day 200 is a landmark. You can ship <strong>responsible recommendations</strong> — fair,
          multi-objective, diverse, and only promoted when <strong>online</strong> proof agrees.
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
          <span>#100DaysOfCode</span><span>#Day200</span><span>#Milestone</span><span>#RecSys</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
