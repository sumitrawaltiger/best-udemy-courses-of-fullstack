import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const RNN_YT = 'https://www.youtube.com/watch?v=WCUNPb-5EYI';
const CS231N = 'https://cs231n.github.io/rnn/';

const LEARNT_TODAY = [
  { title: 'Sequences need memory', text: 'language is ordered — the meaning of a word depends on what came before' },
  { title: 'RNN idea', text: 'a Recurrent Neural Network reuses the same weights at each time step and passes a hidden state forward' },
  { title: 'Hidden state', text: 'a vector that summarizes “what I have read so far” and updates as each new token arrives' },
  { title: 'Forward pass', text: 'for each token: combine input + previous hidden → new hidden → optional output' },
  { title: 'BPTT', text: 'Backpropagation Through Time — unroll the loop and train like a deep net across steps' },
  { title: 'Vanishing gradients', text: 'long sequences make early gradients tiny — vanilla RNNs struggle with long context' },
  { title: 'Where RNNs still help', text: 'intuition for sequence models; LSTMs/GRUs (next) fix many of the gradient issues' },
  { title: 'Path to transformers', text: 'RNNs → LSTM → attention → transformers — the road to modern LLMs' },
];

const CORE = [
  {
    icon: '🔁', title: 'RNN Cell', titleClass: 'card-title-cyan', subtitle: 'Shared Weights',
    description:
      'At time t, the cell takes x_t and h_{t-1}, outputs h_t (and maybe y_t). Same weights every step — that is what “recurrent” means.',
    code: 'h_t = tanh(W_x @ x_t + W_h @ h_{t-1} + b)\n# same W_x, W_h for all t',
  },
  {
    icon: '📤', title: 'Forward Over Time', titleClass: 'card-title-purple', subtitle: 'Unroll',
    description:
      'Feed tokens one by one. For classification, often use the final hidden state; for tagging, emit a label each step.',
    code: 'h = zeros()\nfor token in sentence:\n  h = rnn_cell(token, h)\npredict(h)  # e.g. sentiment',
  },
  {
    icon: '📉', title: 'BPTT', titleClass: 'card-title-amber', subtitle: 'Train',
    description:
      'Unroll the recurrence into a chain, compute loss, backprop through every time step. Truncate long sequences if needed.',
    code: 'loss = criterion(y_hat, y)\nloss.backward()  # through time\noptimizer.step()',
  },
];

const PRACTICE = [
  {
    icon: '⚠️', title: 'Vanishing Gradients', titleClass: 'card-title-cyan', subtitle: 'Limit',
    description:
      'Multiplying many small derivatives shrinks the signal from early tokens. That is why LSTMs/attention arrived next.',
    code: '// long sentence → early words\n'// barely affect the loss',
  },
  {
    icon: '🧪', title: 'Mini Project Idea', titleClass: 'card-title-purple', subtitle: 'Practice',
    description:
      'Character-level RNN that predicts the next letter, or a tiny sentiment classifier on padded sequences.',
    code: 'chars → embed → RNN\n→ linear → next char',
  },
  {
    icon: '🔜', title: 'What Comes Next', titleClass: 'card-title-amber', subtitle: 'Day 16 Preview',
    description: 'Next — Artificial Neural Networks deeper dive, then LSTMs on Day 17 of the curriculum.',
    link: { href: '/agentic-day-16', label: 'Go to Day 16 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Recurrent Neural Networks', titleClass: 'card-title-cyan', subtitle: 'PY Module 15',
    description: 'Full lesson — RNN architecture, forward/backward, vanishing gradients, projects.',
    link: { href: '/python/learn/recurrent-neural-networks', label: 'Open PY Module 15 →' },
  },
  {
    icon: '🎬', title: 'RNN Explained', titleClass: 'card-title-purple', subtitle: 'StatQuest',
    description: 'Clear video intuition for recurrent nets.',
    link: { href: RNN_YT, label: 'Watch RNN explained →', external: true },
  },
  {
    icon: '📖', title: 'CS231n RNNs', titleClass: 'card-title-amber', subtitle: 'Notes',
    description: 'Stanford course notes on recurrent networks.',
    link: { href: CS231N, label: 'Open CS231n RNN notes →', external: true },
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

export default function AgenticDay15() {
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
          <Link to="/agentic-day-14" className="day001-nav-btn day001-nav-prev">← Day 14</Link>
          <p className="day001-datetime">Agentic AI Day 15 · 8 Sep 2026</p>
          <Link to="/agentic-day-16" className="day001-nav-btn day001-nav-next">Day 16 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 2</span><span>RNN</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 15 <span aria-hidden="true">🔁</span></h1>
              <p className="day001-day-theme">RECURRENT NEURAL NETWORKS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · PHASE 2</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '10%' }} /></div>

        <p className="day001-summary">
          Day 15 gives language a memory. <strong>RNNs</strong> pass a <strong>hidden state</strong> through
          time, train with <strong>BPTT</strong>, and reveal why long sequences need LSTMs next.
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

        <CardSection icon="🔁" title="RNN MECHANICS" cards={CORE} columns={3} />
        <CardSection icon="⚠️" title="LIMITS &amp; PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#RNN</span><span>#Day15</span><span>#DeepLearning</span><span>#NLP</span>
        </footer>
      </div>
    </div>
  );
}
