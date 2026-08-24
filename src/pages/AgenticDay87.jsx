import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const RAGAS = 'https://docs.ragas.io/';
const OPENAI_EVALS = 'https://github.com/openai/evals';

const LEARNT_TODAY = [
  { title: '"It feels better" isn\'t a metric', text: 'ship on numbers from a real eval, not on a gut sense the new prompt is nicer' },
  { title: 'RAG-specific metrics', text: 'faithfulness, answer relevancy, and context precision/recall each catch a different failure mode' },
  { title: 'LLM-as-judge', text: 'a strong model scores outputs against a rubric — cheaper and faster than a human review pass' },
  { title: 'Golden test sets', text: 'a fixed set of Q&A pairs, re-run on every change, so quality is comparable over time' },
  { title: 'Regression testing', text: 'catches a prompt or model change that quietly breaks cases that used to pass' },
  { title: 'Human-in-the-loop', text: 'sample a slice for human review even with automated eval running — trust but verify' },
  { title: 'Eval has a cost', text: 'budget for eval tokens too — it isn\'t free just because it\'s not user-facing' },
  { title: 'This is the CI gate again', text: 'the eval gate from Day 66 is the exact same idea, applied to Gen AI output quality' },
];

const CORE = [
  {
    icon: '🎯', title: 'RAG Metrics', titleClass: 'card-title-cyan', subtitle: 'Faithfulness & Relevancy',
    description:
      'Faithfulness checks the answer against retrieved context; relevancy checks it against the question — different failures, both worth catching.',
    code: 'faithfulness = supported_claims / total_claims\nrelevancy = score(answer, question)',
  },
  {
    icon: '⚖️', title: 'LLM-as-Judge', titleClass: 'card-title-purple', subtitle: 'Scale Human Review',
    description:
      'A strong model scores each response against a rubric — correctness, tone, completeness — far cheaper than a human pass on every run.',
    code: 'score = judge_model.rate(response, rubric)',
  },
  {
    icon: '🗂️', title: 'Golden Sets & Regression', titleClass: 'card-title-amber', subtitle: 'Compare Over Time',
    description:
      'A fixed set of inputs and expected behavior re-run on every change — a silent regression shows up as a score drop.',
    code: 'score = run_suite(golden_set, current_pipeline)\nassert score >= baseline - 0.02',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Build a Golden Set', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Write 10 realistic Q&A pairs for your app, run them through the current pipeline, and score each one.',
    code: '10 Q&A pairs → run → score',
  },
  {
    icon: '⚖️', title: 'Add an LLM Judge', titleClass: 'card-title-purple', subtitle: 'Practice',
    description: 'Write a short rubric and have a model grade your golden-set outputs pass/fail against it.',
  },
  {
    icon: '🔜', title: 'Next: Fine-Tune vs RAG vs Prompt', titleClass: 'card-title-amber', subtitle: 'Day 88 Preview',
    description: 'Tomorrow — a decision framework for which approach actually fits your problem.',
    link: { href: '/agentic-day-88', label: 'Go to Day 88 →' },
  },
];

const RESOURCES = [
  {
    icon: '🔧', title: 'CI/CD for Agentic Apps', titleClass: 'card-title-cyan', subtitle: 'Day 66',
    description: 'The eval gate from Day 66 — same idea, now measuring Gen AI output quality specifically.',
    link: { href: '/agentic-day-66', label: 'Open Day 66 →' },
  },
  {
    icon: '📖', title: 'RAGAS', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'A library of RAG-specific evaluation metrics — faithfulness, relevancy, and more.',
    link: { href: RAGAS, label: 'Open RAGAS docs →', external: true },
  },
  {
    icon: '📖', title: 'OpenAI Evals', titleClass: 'card-title-amber', subtitle: 'Framework',
    description: 'An open framework for building and running evaluation suites against LLM outputs.',
    link: { href: OPENAI_EVALS, label: 'Open OpenAI Evals →', external: true },
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

export default function AgenticDay87() {
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
          <Link to="/agentic-day-86" className="day001-nav-btn day001-nav-prev">← Day 86</Link>
          <p className="day001-datetime">Agentic AI Day 87 · 19 Nov 2026</p>
          <Link to="/agentic-day-88" className="day001-nav-btn day001-nav-next">Day 88 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Gen AI</span><span>Evaluation</span><span>Phase 12</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 87 <span aria-hidden="true">📏</span></h1>
              <p className="day001-day-theme">EVALUATING LLM APPLICATIONS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN AI · EVAL</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '58%' }} /></div>

        <p className="day001-summary">
          Day 87 replaces "it feels better" with numbers. <strong>RAG metrics</strong> like faithfulness and
          relevancy, an <strong>LLM-as-judge</strong> for scale, and a <strong>golden set</strong> that catches
          regressions before users do.
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

        <CardSection icon="📏" title="MEASURE, DON'T GUESS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#GenAI</span><span>#LLMEval</span><span>#Day87</span><span>#RAGAS</span><span>#AgenticAI</span>
        </footer>
      </div>
    </div>
  );
}
