import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ATTENTION = 'https://arxiv.org/abs/1706.03762';

const LEARNT_TODAY = [
  { title: 'ANN building blocks', text: 'neuron, activation, loss, optimizer — explain forward pass then backprop in plain English' },
  { title: 'Activations', text: 'sigmoid/tanh saturate; ReLU fixes vanishing for deep nets but can die' },
  { title: 'RNN limits', text: 'sequential state helps language — but vanishing gradients hurt long context' },
  { title: 'LSTM/GRU', text: 'gates control memory; interview answer = forget/input/output intuition' },
  { title: 'Attention idea', text: 'weighted look-back over encoder states — “Attention Is All You Need”' },
  { title: 'Transformer pitch', text: 'self-attention + FFN + residuals + layer norm; parallelizable vs RNN' },
  { title: 'NLP pipeline', text: 'tokenize → clean → embed → model → decode; know BoW/TF-IDF vs embeddings' },
  { title: 'Fine-tune vs train', text: 'when to freeze layers, when full train is wasteful' },
];

const CORE = [
  {
    icon: '🧠', title: 'Backprop in 30s', titleClass: 'card-title-cyan', subtitle: 'DL',
    description:
      'Forward compute loss; backward send gradients; optimizer updates weights. Say “chain rule through the graph.”',
    code: 'forward → loss\nbackward → ∇w\nstep(optimizer)',
  },
  {
    icon: '🔁', title: 'RNN → LSTM', titleClass: 'card-title-purple', subtitle: 'Seq',
    description:
      'RNNs forget long range. LSTMs add gates so the cell can keep or drop information across steps.',
    code: 'forget · input · output\ncell state = memory',
  },
  {
    icon: '⚡', title: 'Why Transformers', titleClass: 'card-title-amber', subtitle: 'NLP',
    description:
      'Attention connects any token to any other in parallel. Better long-range signal and GPU utilization than RNNs.',
    code: 'Q · K · V\nmulti-head · FFN',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Whiteboard Transformer', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Draw encoder block: multi-head attention → add&norm → FFN → add&norm. Label residual connections.',
    code: 'MHA → +Norm\n→ FFN → +Norm',
  },
  {
    icon: '🗣️', title: '60s Elevator', titleClass: 'card-title-purple', subtitle: 'Speak',
    description:
      'Explain attention to a non-ML PM in one minute. No jargon without a metaphor.',
    code: 'spotlight over words\nweights = focus',
  },
  {
    icon: '🔜', title: 'Next: Gen AI / RAG', titleClass: 'card-title-amber', subtitle: 'Day 78 Preview',
    description: 'Tomorrow — LLM, prompting, embeddings, and RAG interview questions.',
    link: { href: '/agentic-day-78', label: 'Go to Day 78 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Transformers Module', titleClass: 'card-title-cyan', subtitle: 'Track',
    description: 'Course days covering transformers and Gen AI intro.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '📄', title: 'Attention Paper', titleClass: 'card-title-purple', subtitle: 'arxiv',
    description: 'The paper interviewers expect you to have skimmed.',
    link: { href: ATTENTION, label: 'Open Attention Is All You Need →', external: true },
  },
  {
    icon: '🎤', title: 'Day 76 Prep', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Python/ML answer pattern to reuse on DL questions.',
    link: { href: '/agentic-day-76', label: 'Open Day 76 →' },
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

export default function AgenticDay77() {
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
          <Link to="/agentic-day-76" className="day001-nav-btn day001-nav-prev">← Day 76</Link>
          <p className="day001-datetime">Agentic AI Day 77 · 18 Sep 2026</p>
          <Link to="/agentic-day-78" className="day001-nav-btn day001-nav-next">Day 78 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Interview</span><span>DL · NLP</span><span>Phase 11</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 77 <span aria-hidden="true">🧠</span></h1>
              <p className="day001-day-theme">DEEP LEARNING & NLP INTERVIEW PREP</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN AI · DL / NLP</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '51%' }} /></div>

        <p className="day001-summary">
          Day 77 goes deep. Practice crisp answers for <strong>backprop</strong>, <strong>LSTM</strong>, and{' '}
          <strong>transformers</strong> — the bridge into Gen AI interviews.
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

        <CardSection icon="🧠" title="DL / NLP ANSWERS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#DeepLearning</span><span>#NLP</span><span>#Transformers</span><span>#Day77</span><span>#Interview</span>
        </footer>
      </div>
    </div>
  );
}
