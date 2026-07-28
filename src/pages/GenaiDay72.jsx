import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'RAG vs fine-tune', text: 'RAG changes knowledge; fine-tune changes behavior' },
  { title: 'Use fine-tune for style', text: 'format adherence, tone, and domain phrasing' },
  { title: 'Don’t fine-tune facts', text: 'facts change; retrieval is cheaper and safer' },
  { title: 'Data quality wins', text: '100 great examples beat 10k noisy ones' },
  { title: 'Eval is mandatory', text: 'fine-tuning without eval is just guessing' },
  { title: 'LoRA mindset', text: 'small adapter updates can be enough for big gains' },
  { title: 'Safety stays', text: 'guardrails still matter after a fine-tune' },
  { title: 'Version the model', text: 'treat tuned variants like releases with rollback' },
];

const CORE = [
  {
    icon: '🧵', title: 'Behavior Tuning', titleClass: 'card-title-cyan', subtitle: 'Align',
    description:
      'Fine-tune when you need consistent style, structured outputs, or domain wording across many prompts.',
    code: 'behavior > knowledge',
  },
  {
    icon: '📦', title: 'Training Set', titleClass: 'card-title-purple', subtitle: 'Data',
    description:
      'Curate clean input/output pairs, de-duplicate, and remove contradictions. Small, high-signal beats huge.',
    code: 'clean > big',
  },
  {
    icon: '✅', title: 'Release Discipline', titleClass: 'card-title-amber', subtitle: 'Ship',
    description:
      'Gate tuned models with eval, shadow tests, and rollback plans like any other production change.',
    code: 'eval -> canary',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Dataset Sprint', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Collect 50 high-quality examples for one narrow task (format or tone).',
    code: '50 golden pairs',
  },
  {
    icon: '📊', title: 'Before/After', titleClass: 'card-title-purple', subtitle: 'Measure',
    description: 'Run the same eval suite on base vs tuned to quantify the change.',
    code: 'base vs tuned',
  },
  {
    icon: '🔜', title: 'Next: Synthetic Data', titleClass: 'card-title-amber', subtitle: 'Day 73',
    description: 'Tomorrow → generating synthetic data + building stronger eval harnesses.',
    link: { href: '/genai-day-73', label: 'Go to Day 73 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Browse the full Gen AI lessons and curriculum on the site.',
    link: { href: '/genai', label: 'Open Gen AI Track →' },
  },
  {
    icon: '📖', title: 'LoRA', titleClass: 'card-title-purple', subtitle: 'Concept',
    description: 'A quick overview of adapter-based fine-tuning.',
    link: { href: 'https://arxiv.org/abs/2106.09685', label: 'Open →', external: true },
  },
  {
    icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember',
    description: 'Fine-tune to shape behavior. Retrieve to supply facts.',
    footer: 'Behavior ≠ knowledge.',
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

export default function GenaiDay72() {
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
          <Link to="/genai-day-71" className="day001-nav-btn day001-nav-prev">← Day 71</Link>
          <p className="day001-datetime">Gen AI Day 72 · 72 Aug 2026</p>
          <Link to="/genai-day-73" className="day001-nav-btn day001-nav-next">Day 73 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Gen AI</span><span>Fine-Tuning</span><span>Day 72</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 72 <span aria-hidden="true">🧵</span></h1>
              <p className="day001-day-theme">FINE-TUNING VS RAG</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN AI · TRAINING</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '48%' }} /></div>

        <p className="day001-summary">
          Day 72 clarifies the decision: use <strong>RAG</strong> to supply knowledge and keep it fresh; use <strong>fine-tuning</strong> to
          change behavior like tone, format, and domain phrasing. Measure everything with an eval gate.
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

        <CardSection icon="🧵" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#GenAI</span><span>#FineTuning</span><span>#Day72</span><span>#RAG</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}

