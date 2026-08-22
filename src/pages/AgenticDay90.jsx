import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'Arc 81–90', text: 'Agentic RAG → Context Engineering → Structured Outputs → Prompt Optimization → Eval → Fine-tune vs RAG vs Prompt → Multi-Modal' },
  { title: 'Structure beats vibes', text: 'schemas, eval sets, and decision frameworks replace guesswork at every single step' },
  { title: 'Context is a budget', text: 'engineer what actually goes into the window — don\'t just dump everything in and hope' },
  { title: 'Eval early, eval often', text: 'golden sets and an LLM judge catch regressions before users ever do' },
  { title: 'Right tool for the job', text: 'prompt first, RAG for knowledge gaps, fine-tune for behavior gaps — rarely all three at once' },
  { title: 'Multi-modal is additive', text: 'reach for vision or audio only where text alone genuinely falls short, not by default' },
  { title: 'Portfolio angle', text: 'one polished advanced feature — agentic RAG with real eval — beats five shallow demos' },
  { title: 'What\'s next', text: 'apply this toolkit to a real product, or continue into the next stretch of the journey' },
];

const CORE = [
  {
    icon: '✅', title: 'Checklist', titleClass: 'card-title-cyan', subtitle: 'Ship It',
    description:
      'Agentic RAG with engineered context, typed schemas at every boundary, an optimized prompt, and a real eval score.',
    code: 'context · schemas · prompt\neval score · cost',
  },
  {
    icon: '🎚️', title: 'Quality Bar', titleClass: 'card-title-purple', subtitle: 'Prove It',
    description:
      'Golden-set pass rate, faithfulness/relevancy scores, and a documented reason for every prompt/RAG/fine-tune choice.',
    code: 'faithfulness · relevancy\ndecision rationale documented',
  },
  {
    icon: '🗺️', title: 'Journey Map', titleClass: 'card-title-amber', subtitle: 'Day 81 → 90',
    description:
      'From agentic RAG and context engineering to schemas, optimization, evaluation, strategy, and multi-modal — one advanced toolkit.',
    code: 'retrieve → structure → optimize\n→ evaluate → decide → extend',
  },
];

const PRACTICE = [
  {
    icon: '📦', title: 'Portfolio Story', titleClass: 'card-title-cyan', subtitle: 'Demo',
    description: 'Walk through: context budget → typed tool schema → optimized prompt → eval score → why this approach, not another.',
    code: '5-minute narrative',
  },
  {
    icon: '🔍', title: 'Health Ritual', titleClass: 'card-title-purple', subtitle: 'Weekly',
    description: 'Re-run the golden set, check the context budget hasn\'t crept up, and confirm cost per request is still on plan.',
    code: 'eval · context budget · cost',
  },
  {
    icon: '🏁', title: 'What Comes Next', titleClass: 'card-title-amber', subtitle: 'Beyond Day 90',
    description: 'Apply this advanced Gen AI toolkit to a real product, or move on to the next stack in the journey.',
    link: { href: '/agentic-day-91', label: 'Go to Day 91 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Python & Agentic Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'The site\'s Python and Agentic AI modules feeding into this advanced Gen AI practice.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '📘', title: 'GenAI Journal Track', titleClass: 'card-title-purple', subtitle: 'Hub',
    description: 'The bonus GenAI day-journal track, running alongside this Agentic AI series.',
    link: { href: '/genai', label: 'Open GenAI track →' },
  },
  {
    icon: '🎉', title: 'Phase 12 Complete', titleClass: 'card-title-amber', subtitle: 'Days 81–90',
    description: 'Agentic RAG, context engineering, schemas, optimization, evaluation, strategy, and multi-modal AI are covered.',
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

export default function AgenticDay90() {
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
          <Link to="/agentic-day-89" className="day001-nav-btn day001-nav-prev">← Day 89</Link>
          <p className="day001-datetime">Agentic AI Day 90 · 20 Nov 2026</p>
          <Link to="/agentic-day-91" className="day001-nav-btn day001-nav-next">Day 91 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Gen AI</span><span>Milestone</span><span>Phase 12</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 90 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">PHASE 12 MILESTONE</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN AI · AGENTS</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '60%' }} /></div>

        <p className="day001-summary">
          Day 90 closes Phase 12. You can explain <strong>agentic RAG</strong> with engineered{' '}
          <strong>context</strong>, enforced by <strong>schemas</strong>, tuned by{' '}
          <strong>prompt optimization</strong>, proven by <strong>evaluation</strong>, and extended with{' '}
          <strong>multi-modal</strong> inputs — and you know when to reach for each one.
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

        <CardSection icon="🏁" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day90</span><span>#Milestone</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
