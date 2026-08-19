import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'Start with prompting', text: 'cheapest, fastest, no training data needed — always the first thing to try' },
  { title: 'Add RAG when', text: 'the model needs facts or knowledge it wasn\'t trained on, or facts that change often' },
  { title: 'Fine-tune when', text: 'you need a consistent style, format, or behavior that prompting can\'t reliably force' },
  { title: 'Knowledge vs behavior', text: 'RAG fixes knowledge gaps; fine-tuning fixes behavior gaps — don\'t confuse the two' },
  { title: 'Cost ordering', text: 'roughly prompting < RAG < fine-tuning, in both money and engineering effort' },
  { title: 'Combine them', text: 'most production systems use RAG plus a well-prompted (or lightly fine-tuned) model together' },
  { title: 'Data requirements', text: 'fine-tuning needs hundreds to thousands of quality examples; RAG just needs a good corpus' },
  { title: 'Ask this first', text: '"is this a knowledge problem or a behavior problem?" — the answer picks your approach' },
];

const CORE = [
  {
    icon: '🧭', title: 'The Decision Framework', titleClass: 'card-title-cyan', subtitle: 'Knowledge vs Behavior',
    description:
      'A knowledge gap (missing facts) points to RAG. A behavior gap (wrong tone, format, or reasoning style) points to fine-tuning.',
    code: 'gap == "knowledge" → RAG\ngap == "behavior"  → fine-tune',
  },
  {
    icon: '📚', title: 'When RAG Wins', titleClass: 'card-title-purple', subtitle: 'Facts Change Often',
    description:
      'Product docs, policies, and prices update constantly — RAG lets you swap the corpus without retraining anything.',
    code: 'update index → no retrain needed',
  },
  {
    icon: '🎓', title: 'When Fine-Tuning Wins', titleClass: 'card-title-amber', subtitle: 'Behavior Is The Problem',
    description:
      'A very specific output format or tone that prompting keeps drifting from is a strong signal to fine-tune instead.',
    code: 'prompt keeps drifting → fine-tune on examples',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Classify Your Use Case', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Take three real use cases and label each as knowledge, behavior, or both — then pick an approach for each.',
    code: '3 use cases → knowledge / behavior / both',
  },
  {
    icon: '💰', title: 'Cost Comparison', titleClass: 'card-title-purple', subtitle: 'Practice',
    description: 'Rough out the cost and effort of solving one use case via prompting, via RAG, and via fine-tuning.',
  },
  {
    icon: '🔜', title: 'Next: Multi-Modal Agentic AI', titleClass: 'card-title-amber', subtitle: 'Day 89 Preview',
    description: 'Tomorrow — vision-language models, document understanding, and multi-modal RAG.',
    link: { href: '/agentic-day-89', label: 'Go to Day 89 →' },
  },
];

const RESOURCES = [
  {
    icon: '🎓', title: 'Fine-Tuning LLMs', titleClass: 'card-title-cyan', subtitle: 'Day 34',
    description: 'PEFT, LoRA, and QLoRA — the mechanics behind the "fine-tune" branch of this decision.',
    link: { href: '/agentic-day-34', label: 'Open Day 34 →' },
  },
  {
    icon: '📚', title: 'Vector Databases', titleClass: 'card-title-purple', subtitle: 'Day 27',
    description: 'The retrieval half of RAG — how the knowledge side of this decision actually works.',
    link: { href: '/agentic-day-27', label: 'Open Day 27 →' },
  },
  {
    icon: '📏', title: 'Evaluating LLM Apps', titleClass: 'card-title-amber', subtitle: 'Day 87',
    description: 'Whichever approach you pick, measure it the same way — with a golden set and real metrics.',
    link: { href: '/agentic-day-87', label: 'Open Day 87 →' },
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

export default function AgenticDay88() {
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
          <Link to="/agentic-day-87" className="day001-nav-btn day001-nav-prev">← Day 87</Link>
          <p className="day001-datetime">Agentic AI Day 88 · 16 Nov 2026</p>
          <Link to="/agentic-day-89" className="day001-nav-btn day001-nav-next">Day 89 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Gen AI</span><span>Strategy</span><span>Phase 12</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 88 <span aria-hidden="true">🧭</span></h1>
              <p className="day001-day-theme">FINE-TUNE VS RAG VS PROMPT</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN AI · STRATEGY</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '59%' }} /></div>

        <p className="day001-summary">
          Day 88 is a decision, not a technique. Start with <strong>prompting</strong>, reach for{' '}
          <strong>RAG</strong> when it's a knowledge gap, and reach for <strong>fine-tuning</strong> when it's
          a behavior gap — most real systems end up combining more than one.
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

        <CardSection icon="🧭" title="PICK THE RIGHT TOOL" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#GenAI</span><span>#FineTuning</span><span>#Day88</span><span>#RAG</span><span>#AgenticAI</span>
        </footer>
      </div>
    </div>
  );
}
