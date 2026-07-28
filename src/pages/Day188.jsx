import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const AB = 'https://developers.google.com/machine-learning/crash-course/framing/framing';
const EXP = 'https://www.optimizely.com/optimization-glossary/ab-testing/';
const STATS = 'https://en.wikipedia.org/wiki/A/B_testing';

const LEARNT_TODAY = [
  { title: 'Why A/B', text: 'opinions lie — random assignment shows if the new shelf actually helps' },
  { title: 'Control vs treatment', text: 'A = popular/hybrid baseline; B = embeddings shelf (or vice versa)' },
  { title: 'Primary metric', text: 'pick one: CTR on shelf, completes from recs, or retention — not ten' },
  { title: 'Guardrails', text: 'latency, error rate, complaints — do not “win” by breaking UX' },
  { title: 'Sticky assignment', text: 'same user keeps the same variant (hash userId) for the whole test' },
  { title: 'Sample size', text: 'run until you have enough events — peeking early invites fake wins' },
  { title: 'Log variant', text: 'every impression/click stores experiment_id + variant for analysis' },
  { title: 'Ship the winner', text: 'promote B only if it beats A on the primary metric + guardrails OK' },
  { title: 'Year-1 scope', text: 'one shelf experiment at a time beats a spaghetti of flags' },
];

const CORE = [
  {
    icon: '🧪', title: 'Experiment Shape', titleClass: 'card-title-cyan', subtitle: 'Design',
    description: 'Hypothesis, metric, variants, traffic split, stop rule — write it down before launch.',
    code: 'H: embedding shelf ↑ CTR\n50/50 · 2 weeks min',
  },
  {
    icon: '🎲', title: 'Assignment', titleClass: 'card-title-purple', subtitle: 'Hash',
    description: 'hash(userId + expId) % 100 < 50 → A else B. Sticky and cheap.',
    code: 'variant = hash % 100 < 50\n  ? "control" : "treatment"',
  },
  {
    icon: '📊', title: 'Primary Metric', titleClass: 'card-title-amber', subtitle: 'One Job',
    description: 'Shelf CTR or “completed from rec within 7d” — decide up front.',
    code: 'metric = clicks / impressions\non rec_shelf',
  },
];

const PRACTICE = [
  {
    icon: '📝', title: 'Event Schema', titleClass: 'card-title-cyan', subtitle: 'Logging',
    description: 'Include experiment_id, variant, position, item_id on every impression.',
    code: '{ userId, itemId, exp, variant, pos }',
  },
  {
    icon: '🛡️', title: 'Guardrails', titleClass: 'card-title-purple', subtitle: 'Safety',
    description: 'Kill switch if p95 latency spikes or empty-shelf rate rises.',
    code: '// alert: empty_shelf > 1%\n'// alert: p95 > 200ms',
  },
  {
    icon: '⏳', title: 'No Peeking', titleClass: 'card-title-amber', subtitle: 'Discipline',
    description: 'Check dashboards for bugs; decide with a planned analysis date.',
    code: '// day 0: launch\n'// day 14: decide',
  },
  {
    icon: '🔜', title: 'Next: Serve Models', titleClass: 'card-title-lime', subtitle: 'Day 189 Preview',
    description: 'Tomorrow: production ML systems — versions, rollouts, and serving paths.',
    link: { href: '/day-189', label: 'Go to Day 189 →' },
  },
];

const RESOURCES = [
  {
    icon: '📐', title: 'ML Framing', titleClass: 'card-title-cyan', subtitle: 'Google MLCC',
    description: 'Frame problems and decide what to measure.',
    link: { href: AB, label: 'Read framing →', external: true },
  },
  {
    icon: '🧪', title: 'A/B Testing', titleClass: 'card-title-purple', subtitle: 'Glossary',
    description: 'Plain overview of experiment basics.',
    link: { href: EXP, label: 'Read A/B glossary →', external: true },
  },
  {
    icon: '📚', title: 'Wikipedia A/B', titleClass: 'card-title-amber', subtitle: 'Background',
    description: 'History and statistical framing of tests.',
    link: { href: STATS, label: 'Read A/B overview →', external: true },
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

export default function Day188() {
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
          <Link to="/day-187" className="day001-nav-btn day001-nav-prev">← Day 187</Link>
          <p className="day001-datetime">ML Day 188 · 7 Jul 2027</p>
          <Link to="/day-189" className="day001-nav-btn day001-nav-next">Day 189 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ML</span><span>Year 1</span><span>A/B</span><span>Metrics</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 188 <span aria-hidden="true">🧪</span></h1>
              <p className="day001-day-theme">A/B TESTING FOR RECS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '52%' }} /></div>

        <p className="day001-summary">
          Day 188 proves the shelf. Run a clean <strong>A/B test</strong> — sticky assignment, one
          primary metric, guardrails, and log every impression with its <strong>variant</strong>.
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

        <CardSection icon="🧪" title="1 · EXPERIMENT" cards={CORE} columns={3} />
        <CardSection icon="📝" title="2 · RUN CLEAN" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ABTesting</span><span>#ML</span><span>#Metrics</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
