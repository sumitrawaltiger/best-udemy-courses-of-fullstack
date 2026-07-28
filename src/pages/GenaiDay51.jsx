import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'Eval before vibes', text: 'judge prompts with a fixed task set, not just one impressive demo' },
  { title: 'Golden datasets', text: '10 to 30 representative prompts catch regressions before release' },
  { title: 'Tracing matters', text: 'log prompt, context, model, latency, and output for every run' },
  { title: 'Version everything', text: 'prompt text, retrieval config, and model choice all need versions' },
  { title: 'Offline vs online', text: 'batch evals catch regressions; production metrics catch real-user drift' },
  { title: 'Hallucination checks', text: 'compare answers against source chunks or expected fields' },
  { title: 'Human review', text: 'sample weak or low-confidence responses for manual inspection' },
  { title: 'Ship with a score', text: 'release only when quality, latency, and cost all meet the bar' },
];

const CORE = [
  {
    icon: '📏', title: 'Eval Set', titleClass: 'card-title-cyan', subtitle: 'Measure',
    description:
      'Create a small benchmark of real prompts, expected signals, and pass criteria before changing prompts or models.',
    code: 'dataset -> run -> score',
  },
  {
    icon: '🛰️', title: 'Tracing', titleClass: 'card-title-purple', subtitle: 'Observe',
    description:
      'Capture input, retrieved context, model, tokens, latency, and output so failures are debuggable.',
    code: 'prompt · context · output',
  },
  {
    icon: '🚦', title: 'Release Gate', titleClass: 'card-title-amber', subtitle: 'Ship',
    description:
      'Promote prompt or model changes only if quality improves without blowing the latency or cost budget.',
    code: 'quality + latency + cost',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Mini Benchmark', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Create 15 prompts for your app and mark each response as pass or fail.',
    code: '15 cases minimum',
  },
  {
    icon: '📊', title: 'Scorecard', titleClass: 'card-title-purple', subtitle: 'Track',
    description: 'Record accuracy, hallucination rate, latency, and token cost in one sheet.',
    code: 'quality · ms · tokens',
  },
  {
    icon: '🔜', title: 'Next: RAG Ops', titleClass: 'card-title-amber', subtitle: 'Day 52',
    description: 'Tomorrow -> production-grade retrieval systems for Gen AI apps.',
    link: { href: '/genai-day-52', label: 'Go to Day 52 ->' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Browse the full Gen AI lessons and curriculum on the site.',
    link: { href: '/genai', label: 'Open Gen AI Track ->' },
  },
  {
    icon: '📖', title: 'LangSmith', titleClass: 'card-title-purple', subtitle: 'Observability',
    description: 'Tracing and evaluation tooling for LLM applications.',
    link: { href: 'https://www.langchain.com/langsmith', label: 'Open ->', external: true },
  },
  {
    icon: '🧠', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember',
    description: 'Strong demos impress; eval suites protect you in production.',
    footer: 'Measure first, optimize second.',
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

export default function GenaiDay51() {
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
          <Link to="/genai" className="day001-nav-btn day001-nav-prev">Gen AI</Link>
          <p className="day001-datetime">Gen AI Day 51 · 51 Aug 2026</p>
          <Link to="/genai-day-52" className="day001-nav-btn day001-nav-next">Day 52 {'->'}</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Gen AI</span><span>Evaluation</span><span>Day 51</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 51 <span aria-hidden="true">📐</span></h1>
              <p className="day001-day-theme">EVALUATION & OBSERVABILITY FOR GEN AI</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN AI · BUILD</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '34%' }} /></div>

        <p className="day001-summary">
          Day 51 makes Gen AI measurable. Build <strong>eval sets</strong>, trace every run, and release prompt or
          model changes only when <strong>quality, latency, and cost</strong> improve together.
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

        <CardSection icon="📐" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#GenAI</span><span>#Evaluation</span><span>#Day51</span><span>#LLMOps</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
