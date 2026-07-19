import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture44';
const GH_REPO = 'https://github.com/Rohitnegi9/STRIKEGenAI';

const LEARNT_TODAY = [
  { title: 'Language is a sequence', text: 'a plain ANN/CNN needs a fixed-size input, but "The cat sat on the ___" is variable-length' },
  { title: 'RNN — carry a memory', text: 'a Recurrent Neural Network reads one token at a time and passes a hidden state forward' },
  { title: 'Recursion of state', text: 'outputₜ = tanh(wₓ·xₜ + w_prev·hₜ₋₁ + b) — the previous output feeds into the next step' },
  { title: 'Shared weights', text: 'the same weights are reused at every position, so any length of sentence can be processed' },
  { title: 'RNNs forget', text: 'over long sentences the early context fades (vanishing gradient), and it must run step by step' },
  { title: 'LSTM — gated memory', text: 'a cell state with insert / remove / keep gates carries important info far across the sequence' },
  { title: 'Transformer wins', text: 'attention looks at every token at once — parallel, no forgetting — so it replaced RNNs for LLMs' },
  { title: 'Full circle', text: 'this closes the arc: neuron → training → classification → CNNs → sequences → the Transformer LLM' },
];

const RNN = [
  {
    icon: '🔁', title: 'Why RNNs', titleClass: 'card-title-cyan', subtitle: 'Variable-Length Input',
    description:
      'Feed-forward networks take a fixed number of inputs, but sentences vary in length. An RNN reads tokens one by one and keeps a running memory — a hidden state — of what it has seen.',
    code: '// "The cat sat on the ___"\n// read: The → cat → sat → on → the\n// carry a hidden state at each step',
  },
  {
    icon: '➰', title: 'The Recurrence', titleClass: 'card-title-purple', subtitle: 'State Feeds Forward',
    description:
      'At each step the new hidden state mixes the current token with the previous state, squashed by tanh. The same weights are reused everywhere, so any length works.',
    code: 'h_t = tanh(w_x·x_t + w_prev·h_(t-1) + b)\n// previous output → next step\n// tanh keeps values in (-1, 1)',
  },
];

const BEYOND = [
  {
    icon: '🫥', title: 'The RNN Problem', titleClass: 'card-title-cyan', subtitle: 'Forgetting & Slow',
    description:
      'Across a long sentence the early words fade from the hidden state (vanishing gradient), and because each step depends on the last, RNNs must run sequentially — hard to parallelise.',
    code: '// long sequence → early context lost\n// step t needs step t-1 → no parallelism\n// slow on long text',
  },
  {
    icon: '🧠', title: 'LSTM — Gated Memory', titleClass: 'card-title-purple', subtitle: 'Remember Long-Range',
    description:
      'A Long Short-Term Memory cell adds a separate cell state with gates that insert, remove or keep information — so it can carry a fact many words later without it fading.',
    code: '// cell state c_t + gates:\n//   insert · remove · keep\n// carries meaning across long gaps',
  },
  {
    icon: '⚡', title: 'Transformer vs RNN', titleClass: 'card-title-amber', subtitle: 'Attention Wins',
    description:
      'Self-attention (Day 39) lets every token look at every other token at once — parallel and no forgetting. That’s why Transformers replaced RNNs/LSTMs as the backbone of every LLM.',
    code: '// RNN: one token at a time, forgets\n// Transformer: all tokens at once, attends\n// → parallel, long-range, scalable',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 44', titleClass: 'card-title-cyan', subtitle: 'RNN · LSTM · Transformer',
    description:
      'The sequence-models material in the STRIKE GenAI repo — recurrence, gated memory, and why attention took over.',
    link: { href: GH_LECTURE, label: 'Open Lecture 44 →', external: true },
  },
  {
    icon: '🎓', title: 'Course Complete', titleClass: 'card-title-purple', subtitle: 'Lectures 1 → 44',
    description:
      'This is the final lecture of Coder Army’s STRIKE GenAI — from the first Gemini call, through agents, RAG and the AI Dev Team, to neural nets and the Transformer from scratch.',
    link: { href: GH_REPO, label: 'Open the full repo →', external: true },
  },
  {
    icon: '🚀', title: 'Keep Going', titleClass: 'card-title-amber', subtitle: 'The GenAI Track',
    description:
      'Revisit the whole Agentic-AI journey — agents, tools, RAG, LangGraph and the LLM internals — in the dedicated GenAI track.',
    link: { href: '/genai', label: 'Explore the GenAI track →' },
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

export default function Day042() {
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
          <Link to="/day-041" className="day001-nav-btn day001-nav-prev">← Day 41</Link>
          <p className="day001-datetime">Agentic AI Day 42</p>
          <Link to="/day-043" className="day001-nav-btn day001-nav-next">Day 43 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 44</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 42 <span aria-hidden="true">🔁</span></h1>
              <p className="day001-day-theme">SEQUENCE MODELS — RNN → LSTM → TRANSFORMER</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN · AGENTIC AI</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '42%' }} /></div>

        <p className="day001-summary">
          Lecture 44 — the finale. Language is a <strong>variable-length sequence</strong>, so a fixed-input ANN won’t
          do. An <strong>RNN</strong> reads one token at a time and carries a <strong>hidden state</strong> forward —{' '}
          <code>hₜ = tanh(wₓ·xₜ + w_prev·hₜ₋₁ + b)</code> — reusing the same weights at every step. But RNNs{' '}
          <strong>forget</strong> long-range context and run sequentially. <strong>LSTMs</strong> add a gated cell
          state (insert / remove / keep) to remember further. Then the <strong>Transformer</strong> — self-attention
          over <em>all</em> tokens at once, parallel and forget-proof — <strong>replaced them</strong> as the backbone
          of every LLM. That closes the loop: neuron → training → classification → CNNs → sequences → the Transformer.{' '}
          <em>STRIKE GenAI, complete. 🎓</em>
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

        <CardSection icon="🔁" title="RECURRENT NETWORKS" cards={RNN} columns={2} />
        <CardSection icon="⚡" title="LSTM & THE TRANSFORMER" cards={BEYOND} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#RNN</span><span>#LSTM</span><span>#Transformer</span>
        </footer>
      </div>
    </div>
  );
}
