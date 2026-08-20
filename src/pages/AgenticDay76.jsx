import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PYTHON = '/python';
const INTERVIEW = '/interview-questions';

const LEARNT_TODAY = [
  { title: 'Interview map', text: 'Python → ML → DL/NLP → Gen AI/RAG → Agentic — know which layer the question targets' },
  { title: 'Answer structure', text: 'definition → intuition → when to use → trade-off → tiny example' },
  { title: 'Python hot spots', text: 'list/dict/set trade-offs, GIL intuition, generators, decorators, OOP vs functions' },
  { title: 'ML classics', text: 'bias/variance, train/val/test, overfitting signs, precision vs recall, F1' },
  { title: 'Metrics first', text: 'pick the metric from the business cost of false positives vs negatives' },
  { title: 'Feature leaks', text: 'call out leakage and data snooping — interviewers love this' },
  { title: 'Whiteboard habits', text: 'clarify constraints, state assumptions, narrate trade-offs out loud' },
  { title: 'What’s next', text: 'DL/NLP questions build on this ML foundation' },
];

const CORE = [
  {
    icon: '🐍', title: 'Python Flash Cards', titleClass: 'card-title-cyan', subtitle: 'Core',
    description:
      'Be ready on mutability, *args/**kwargs, comprehension vs loop, and when a generator saves memory.',
    code: 'list vs tuple vs set\ngenerator = lazy\ndict lookup ~ O(1)',
  },
  {
    icon: '📊', title: 'ML Story Arc', titleClass: 'card-title-purple', subtitle: 'Classic',
    description:
      'Problem → data → split → baseline → model → metrics → error analysis. Always start with a dumb baseline.',
    code: 'baseline → model\n→ metric → errors',
  },
  {
    icon: '🎯', title: 'Metric Choice', titleClass: 'card-title-amber', subtitle: 'Business',
    description:
      'Fraud: recall matters. Spam UX: precision matters. Imbalanced classes: don’t lead with accuracy alone.',
    code: 'FP cost vs FN cost\n→ pick metric',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: '10 Rapid Fire', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Answer out loud in ≤60s each: overfitting, regularization, cross-val, ROC vs PR, bagging vs boosting.',
    code: '5 ML · 5 Python\n≤ 60s each',
  },
  {
    icon: '📝', title: 'STAR Mini-Story', titleClass: 'card-title-purple', subtitle: 'Behavioral',
    description:
      'One project story: Situation, Task, Action, Result — include a metric you moved.',
    code: 'S → T → A → R\n+ one number',
  },
  {
    icon: '🔜', title: 'Next: DL & NLP', titleClass: 'card-title-amber', subtitle: 'Day 77 Preview',
    description: 'Tomorrow — neural nets, RNN/LSTM, transformers, and NLP interview staples.',
    link: { href: '/agentic-day-77', label: 'Go to Day 77 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Python Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Foundations through ML/NLP modules to revise before interviews.',
    link: { href: PYTHON, label: 'Open Python track →' },
  },
  {
    icon: '💬', title: 'Interview Hub', titleClass: 'card-title-purple', subtitle: 'Site',
    description: 'Broader interview question banks on the site.',
    link: { href: INTERVIEW, label: 'Open interview questions →' },
  },
  {
    icon: '🏭', title: 'LLMOps Arc', titleClass: 'card-title-amber', subtitle: 'Days 61–65',
    description: 'Ops answers pair well with ML theory — versioning, eval, deploy.',
    link: { href: '/agentic-day-61', label: 'Open Day 61 →' },
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

export default function AgenticDay76() {
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
          <Link to="/agentic-day-75" className="day001-nav-btn day001-nav-prev">← Day 75</Link>
          <p className="day001-datetime">Agentic AI Day 76 · 4 Nov 2026</p>
          <Link to="/agentic-day-77" className="day001-nav-btn day001-nav-next">Day 77 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Interview</span><span>Python · ML</span><span>Phase 11</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 76 <span aria-hidden="true">🎤</span></h1>
              <p className="day001-day-theme">PYTHON & ML INTERVIEW PREP</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN AI · INTERVIEW</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '51%' }} /></div>

        <p className="day001-summary">
          Day 76 starts interview season. Lock a clear answer pattern for <strong>Python</strong> and classic{' '}
          <strong>ML</strong> questions — definition, intuition, trade-off, example.
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

        <CardSection icon="🎤" title="INTERVIEW BASICS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#Interview</span><span>#Python</span><span>#ML</span><span>#Day76</span><span>#GenAI</span>
        </footer>
      </div>
    </div>
  );
}
