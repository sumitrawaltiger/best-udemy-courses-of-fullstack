import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LSTM_YT = 'https://www.youtube.com/watch?v=YCzL96nL7Rw';

const LEARNT_TODAY = [
  { title: 'Why LSTM', text: 'a plain RNN\'s gradients vanish over many steps, so it effectively forgets anything far back in a sequence' },
  { title: 'Cell state', text: 'a separate "memory highway" running through every step, letting information pass through largely unchanged' },
  { title: 'Forget gate', text: 'decides what to throw away from the cell state at this step' },
  { title: 'Input gate', text: 'decides what new information from the current input gets added to the cell state' },
  { title: 'Output gate', text: 'decides what part of the (updated) cell state becomes this step\'s visible output' },
  { title: 'LSTM training', text: 'still backprop through time, but the gates keep gradients from vanishing nearly as fast as in a plain RNN' },
  { title: 'GRU', text: 'a simplified LSTM with just two gates (update, reset) — fewer parameters, often comparable results' },
  { title: 'Project payoff', text: 'training a small LSTM on real sequence data makes the "long-term memory" difference concrete, not just theoretical' },
];

const LSTM_GATES = [
  {
    icon: '🚪', title: 'Why LSTM', titleClass: 'card-title-cyan', subtitle: 'Fixing Vanishing Gradients',
    description:
      'A plain RNN struggles to carry information across many time steps — gradients shrink toward zero the further back they travel. LSTM adds a dedicated memory path to fix that.',
  },
  {
    icon: '🧠', title: 'Forget & Input Gates', titleClass: 'card-title-purple', subtitle: 'What Stays, What\'s New',
    description:
      'The forget gate decides what to drop from memory; the input gate decides what new information from this step gets added.',
    code: 'forget_gate = sigmoid(Wf @ [h_prev, x] + bf)\ninput_gate  = sigmoid(Wi @ [h_prev, x] + bi)',
  },
  {
    icon: '📤', title: 'Output Gate', titleClass: 'card-title-amber', subtitle: 'What Gets Seen',
    description:
      'After the cell state updates, the output gate decides how much of it becomes the hidden state passed to the next step (and to any layer above).',
    code: 'output_gate = sigmoid(Wo @ [h_prev, x] + bo)\nh_t = output_gate * tanh(cell_state)',
  },
];

const TRAINING_VARIANTS = [
  {
    icon: '🔁', title: 'LSTM Training', titleClass: 'card-title-cyan', subtitle: 'Still Backprop Through Time',
    description:
      'Training an LSTM uses the same backprop-through-time idea as a plain RNN — the gates just help gradients survive the trip across many steps.',
    code: 'for step in sequence:\n    cell, hidden = lstm_cell(step, cell, hidden)\nloss.backward()  # gradients now survive further back',
  },
  {
    icon: '⚡', title: 'GRU Intuition', titleClass: 'card-title-purple', subtitle: 'A Leaner LSTM',
    description:
      'GRU merges the forget and input gates into a single "update gate" and drops the separate cell state — fewer parameters, faster to train, often just as accurate.',
    code: 'update_gate = sigmoid(...)\nreset_gate  = sigmoid(...)\n# no separate cell state — simpler than LSTM',
  },
  {
    icon: '🧪', title: 'End-to-End Project', titleClass: 'card-title-amber', subtitle: 'Practice',
    description:
      'Train a character-level LSTM to generate short text, or an LSTM sentiment classifier — and compare how much further back it "remembers" versus a plain RNN.',
    code: 'chars → embed → LSTM(gates)\n→ linear → next char',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'LSTM Networks', titleClass: 'card-title-cyan', subtitle: 'PY Module 17',
    description: 'Full lesson — why LSTM, the three gates, training, GRU, and an end-to-end project.',
    link: { href: '/python/learn/lstm-networks', label: 'Open PY Module 17 →' },
  },
  {
    icon: '🎬', title: 'LSTM Explained', titleClass: 'card-title-purple', subtitle: 'StatQuest',
    description: 'Step-by-step visual breakdown of exactly what each LSTM gate does.',
    link: { href: LSTM_YT, label: 'Watch LSTM explained →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Bidirectional RNN', titleClass: 'card-title-amber', subtitle: 'Day 18 Preview',
    description: 'Tomorrow — reading a sequence in both directions at once, and when that actually helps.',
    link: { href: '/agentic-day-18', label: 'Go to Day 18 →' },
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

export default function AgenticDay17() {
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
          <Link to="/agentic-day-16" className="day001-nav-btn day001-nav-prev">← Day 16</Link>
          <p className="day001-datetime">Agentic AI Day 17 · 16 Sep 2026</p>
          <Link to="/agentic-day-18" className="day001-nav-btn day001-nav-next">Day 18 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 2</span><span>LSTM</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 17 <span aria-hidden="true">🚪</span></h1>
              <p className="day001-day-theme">LSTM NETWORKS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '11%' }} /></div>

        <p className="day001-summary">
          Fixing the RNN's short memory. <strong>LSTM</strong> adds a <strong>cell state</strong> plus{' '}
          <strong>forget</strong>, <strong>input</strong>, and <strong>output gates</strong> so a network can
          carry important information across far more steps — and <strong>GRU</strong> gets most of the
          benefit with a leaner design.
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

        <CardSection icon="🚪" title="THE THREE GATES" cards={LSTM_GATES} columns={3} />
        <CardSection icon="🔁" title="TRAINING &amp; GRU" cards={TRAINING_VARIANTS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#DeepLearning</span><span>#Day17</span><span>#LSTM</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
