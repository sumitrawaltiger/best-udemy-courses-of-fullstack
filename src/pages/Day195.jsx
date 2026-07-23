import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LTR = 'https://en.wikipedia.org/wiki/Learning_to_rank';
const PROD = 'https://developers.google.com/machine-learning/crash-course/production-ml-systems';
const RECSYS = 'https://developers.google.com/machine-learning/recommendation';

const LEARNT_TODAY = [
  { title: 'Arc complete', text: 'Days 191–195: LTR intro → loss types → two-tower → feedback loops → milestone' },
  { title: 'Rank after retrieve', text: 'never score the whole catalog with a heavy model if you can avoid it' },
  { title: 'Loss choice', text: 'pointwise ships first; pairwise/listwise when order quality stalls' },
  { title: 'Towers for scale', text: 'user/item encoders + ANN unlock bigger catalogs' },
  { title: 'Loops bite', text: 'explore, cap popularity, log position — or the model eats itself' },
  { title: 'Offline + online', text: 'NDCG/AUC offline; A/B and CTR online before celebrating' },
  { title: 'Version discipline', text: 'same tower version both sides; canary and rollback stay non-negotiable' },
  { title: 'Year-1 stack', text: 'features + linear/LTR + embeddings/ANN + nightly retrain is a real product' },
  { title: 'What is next', text: 'fairness and multi-objective rank next — Day 196 opens the stretch' },
];

const CORE = [
  {
    icon: '✅', title: 'Checklist', titleClass: 'card-title-cyan', subtitle: 'Ship It',
    description: 'Logged labels, pointwise ranker, optional two-tower retrieve, exploration, retrain job.',
    code: 'labels · LTR · towers?\nexplore · nightly train',
  },
  {
    icon: '🧪', title: 'Quality Bar', titleClass: 'card-title-purple', subtitle: 'Prove Value',
    description: 'Beat embedding/hybrid baseline on NDCG@10 offline and shelf CTR online.',
    code: 'offline NDCG ↑\nonline A/B win',
  },
  {
    icon: '🗺️', title: 'Roadmap', titleClass: 'card-title-amber', subtitle: 'Later',
    description: 'Multi-task objectives, fairness constraints, and real-time bandits after this base.',
    code: 'LTR → towers → loops\n→ multi-obj / fairness',
  },
];

const PRACTICE = [
  {
    icon: '📦', title: 'Demo Story', titleClass: 'card-title-cyan', subtitle: 'Portfolio',
    description: 'Show retrieve → LTR reorder, then a chart where exploration rescued a new course.',
    code: 'ANN → LTR\nexplore → discovery',
  },
  {
    icon: '🔍', title: 'Debug Habit', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Weekly: top items by impression share — if one dominates, tighten caps.',
    code: '// top share %\n// tighten max_share',
  },
  {
    icon: '🧭', title: 'Keep Building', titleClass: 'card-title-amber', subtitle: 'Mindset',
    description: 'Ranking is product + data + model. Clean labels beat a clever loss on garbage.',
    code: '// fix labels first\n// then fancy loss',
  },
  {
    icon: '🔜', title: 'What Comes Next', titleClass: 'card-title-lime', subtitle: 'Day 196',
    description: 'Next: fairness in recommendations — measure exposure and add product guards.',
    link: { href: '/day-196', label: 'Go to Day 196 →' },
  },
];

const RESOURCES = [
  {
    icon: '🎯', title: 'Learning to Rank', titleClass: 'card-title-cyan', subtitle: 'Overview',
    description: 'LTR methods reference.',
    link: { href: LTR, label: 'Open LTR overview →', external: true },
  },
  {
    icon: '🏭', title: 'Production ML', titleClass: 'card-title-purple', subtitle: 'Google MLCC',
    description: 'Keep systems healthy in production.',
    link: { href: PROD, label: 'Open production ML →', external: true },
  },
  {
    icon: '📚', title: 'Google Recsys', titleClass: 'card-title-amber', subtitle: 'Course',
    description: 'Full recommendation systems path.',
    link: { href: RECSYS, label: 'Open Google recsys →', external: true },
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

export default function Day195() {
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
          <Link to="/day-194" className="day001-nav-btn day001-nav-prev">← Day 194</Link>
          <p className="day001-datetime">ML Day 195</p>
          <Link to="/day-196" className="day001-nav-btn day001-nav-next">Day 196 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ML</span><span>Year 1</span><span>Milestone</span><span>Ranking</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 195 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">RANKING MODELS MILESTONE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '53%' }} /></div>

        <p className="day001-summary">
          Day 195 closes the ranking stretch. You can explain <strong>LTR</strong>, pick a{' '}
          <strong>loss</strong>, use <strong>two-tower</strong> retrieval, and keep{' '}
          <strong>feedback loops</strong> from running away.
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
          <span>#100DaysOfCode</span><span>#Milestone</span><span>#LTR</span><span>#Ranking</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
