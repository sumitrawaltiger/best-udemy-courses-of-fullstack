import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'LLM basics', text: 'tokens, context window, temperature, top-p — what each knob changes' },
  { title: 'Prompt patterns', text: 'zero-shot, few-shot, CoT — when each helps and when it wastes tokens' },
  { title: 'Embeddings', text: 'vectors for semantic similarity; cosine search is the interview default' },
  { title: 'RAG pitch', text: 'retrieve grounded chunks → stuff into prompt → generate; reduces hallucination' },
  { title: 'RAG vs fine-tune', text: 'RAG for changing knowledge; FT for style/format/domain behavior' },
  { title: 'Chunking traps', text: 'too big = noise; too small = lost context; overlap helps boundaries' },
  { title: 'Eval for Gen AI', text: 'faithfulness, relevance, latency, $/answer — not only “sounds good”' },
  { title: 'Failure modes', text: 'empty retrieval, wrong top-k, prompt stuffing, stale index' },
];

const CORE = [
  {
    icon: '🧩', title: 'RAG in One Slide', titleClass: 'card-title-cyan', subtitle: 'Gen AI',
    description:
      'Index docs → embed query → retrieve top-k → build prompt with citations → generate → optionally verify.',
    code: 'embed → retrieve\n→ prompt → generate\n→ cite sources',
  },
  {
    icon: '🎛️', title: 'Decoding Knobs', titleClass: 'card-title-purple', subtitle: 'LLM',
    description:
      'Temperature ↑ = more random. For factual RAG, keep temperature low. Explain top-p as nucleus sampling.',
    code: 'factual: temp low\ncreative: temp↑\nmax_tokens = budget',
  },
  {
    icon: '⚖️', title: 'RAG vs FT', titleClass: 'card-title-amber', subtitle: 'Choice',
    description:
      'Need fresh docs tomorrow? RAG. Need a consistent tone or tool format? Consider fine-tune / adapters.',
    code: 'knowledge → RAG\nbehavior → FT/LoRA',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Design a RAG', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Whiteboard a company handbook Q&A: chunk size, top-k, citation format, and what you log for eval.',
    code: 'chunk · k · cite\neval · fallback',
  },
  {
    icon: '❓', title: '5 Hard Questions', titleClass: 'card-title-purple', subtitle: 'Drill',
    description:
      'Answer: hallucination causes, hybrid search, re-rankers, prompt injection via docs, index refresh.',
    code: '5 Qs · out loud\n≤ 90s each',
  },
  {
    icon: '🔜', title: 'Next: Agentic Design', titleClass: 'card-title-amber', subtitle: 'Day 79 Preview',
    description: 'Tomorrow — agent loops, tools, multi-agent, and system-design interview answers.',
    link: { href: '/agentic-day-79', label: 'Go to Day 79 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'RAG Module', titleClass: 'card-title-cyan', subtitle: 'PY Track',
    description: 'Retrieval-Augmented Generation lesson on the Python track.',
    link: { href: '/python/learn/retrieval-augmented-generation', label: 'Open RAG module →' },
  },
  {
    icon: '📏', title: 'Eval Day', titleClass: 'card-title-purple', subtitle: 'Day 50',
    description: 'How to talk about measuring Gen AI quality in interviews.',
    link: { href: '/agentic-day-50', label: 'Open Day 50 →' },
  },
  {
    icon: '🤖', title: 'Agentic Intro', titleClass: 'card-title-amber', subtitle: 'Day 45',
    description: 'Agent vs chatbot vocabulary for the next interview layer.',
    link: { href: '/agentic-day-45', label: 'Open Day 45 →' },
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

export default function AgenticDay78() {
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
          <Link to="/agentic-day-77" className="day001-nav-btn day001-nav-prev">← Day 77</Link>
          <p className="day001-datetime">Agentic AI Day 78 · 7 Nov 2026</p>
          <Link to="/agentic-day-79" className="day001-nav-btn day001-nav-next">Day 79 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Interview</span><span>LLM · RAG</span><span>Phase 11</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 78 <span aria-hidden="true">✨</span></h1>
              <p className="day001-day-theme">GEN AI, LLM & RAG INTERVIEW PREP</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN AI · RAG</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '52%' }} /></div>

        <p className="day001-summary">
          Day 78 is Gen AI interview day. Own the <strong>LLM knobs</strong>, the <strong>RAG pipeline</strong>, and when
          fine-tuning is (and isn’t) the right move.
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

        <CardSection icon="✨" title="GEN AI ANSWERS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#GenAI</span><span>#LLM</span><span>#RAG</span><span>#Day78</span><span>#Interview</span>
        </footer>
      </div>
    </div>
  );
}
