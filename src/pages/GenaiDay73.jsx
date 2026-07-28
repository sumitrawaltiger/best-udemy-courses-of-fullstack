import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'Synthetic data helps', text: 'it expands coverage when real labels are scarce' },
  { title: 'But it can poison', text: 'garbage synthetic examples teach garbage behavior' },
  { title: 'Diversity matters', text: 'vary tone, difficulty, and edge cases intentionally' },
  { title: 'Labeling is design', text: 'define what “good” means with explicit criteria' },
  { title: 'Eval harness', text: 'automate scoring so changes are safe to ship' },
  { title: 'Adversarial cases', text: 'test prompt injection, refusal, and formatting failures' },
  { title: 'Regression tests', text: 'keep a frozen set of hard prompts forever' },
  { title: 'Human spot checks', text: 'review samples to catch silent failures' },
];

const CORE = [
  {
    icon: '🏭', title: 'Data Factory', titleClass: 'card-title-cyan', subtitle: 'Generate',
    description:
      'Use a strong model to draft examples, then filter and edit ruthlessly before using them in training or eval.',
    code: 'generate -> filter',
  },
  {
    icon: '🧪', title: 'Eval Harness', titleClass: 'card-title-purple', subtitle: 'Automate',
    description:
      'Run the same test set on every prompt/model change and record pass rates with clear thresholds.',
    code: 'run -> score',
  },
  {
    icon: '🛡️', title: 'Adversarial Set', titleClass: 'card-title-amber', subtitle: 'Harden',
    description:
      'Include jailbreaks, injection attempts, and formatting traps so you learn how the system fails.',
    code: 'attack -> verify',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: '50 Synthetic Cases', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Generate 50 cases for one task, then keep only the best 20 after review.',
    code: '50 -> 20',
  },
  {
    icon: '✅', title: 'Freeze A Set', titleClass: 'card-title-purple', subtitle: 'Regressions',
    description: 'Create a “never change” regression suite of 15 hard prompts.',
    code: 'frozen suite',
  },
  {
    icon: '🔜', title: 'Next: Governance', titleClass: 'card-title-amber', subtitle: 'Day 74',
    description: 'Tomorrow → privacy, compliance, and data governance for Gen AI apps.',
    link: { href: '/genai-day-74', label: 'Go to Day 74 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Browse the full Gen AI lessons and curriculum on the site.',
    link: { href: '/genai', label: 'Open Gen AI Track →' },
  },
  {
    icon: '📖', title: 'Promptfoo', titleClass: 'card-title-purple', subtitle: 'Eval Tooling',
    description: 'A simple framework to run prompt evals and compare results.',
    link: { href: 'https://promptfoo.dev/', label: 'Open →', external: true },
  },
  {
    icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember',
    description: 'Synthetic data is useful only after filtering and evaluation.',
    footer: 'Generate, then judge.',
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

export default function GenaiDay73() {
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
          <Link to="/genai-day-72" className="day001-nav-btn day001-nav-prev">← Day 72</Link>
          <p className="day001-datetime">Gen AI Day 73 · 73 Aug 2026</p>
          <Link to="/genai-day-74" className="day001-nav-btn day001-nav-next">Day 74 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Gen AI</span><span>Data</span><span>Day 73</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 73 <span aria-hidden="true">🏭</span></h1>
              <p className="day001-day-theme">SYNTHETIC DATA & EVALUATION HARNESS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN AI · DATA</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '49%' }} /></div>

        <p className="day001-summary">
          Day 73 improves coverage with <strong>synthetic data</strong> and makes progress repeatable with an <strong>eval harness</strong>.
          Generate examples, filter hard, freeze regression sets, and keep adversarial tests.
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> - {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🏭" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#GenAI</span><span>#Data</span><span>#Day73</span><span>#Evals</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}

