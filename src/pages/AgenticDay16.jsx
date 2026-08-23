import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ANN_YT = 'https://www.youtube.com/watch?v=Ilg3gGewQ5U';

const LEARNT_TODAY = [
  { title: 'Neuron', text: 'a weighted sum of its inputs plus a bias, passed through an activation function' },
  { title: 'Sigmoid, ReLU, TanH', text: 'sigmoid squashes to 0-1, TanH to -1 to 1, and ReLU simply zeroes out anything negative' },
  { title: 'Forward pass', text: 'input flows layer by layer, each neuron transforming it, until the network produces a prediction' },
  { title: 'Backward pass', text: 'backpropagation sends the loss gradient back through every layer to know how each weight should change' },
  { title: 'Gradient descent', text: 'nudges each weight in the opposite direction of its gradient, scaled by the learning rate' },
  { title: 'Learning rate', text: 'too high and training overshoots and diverges; too low and it crawls — needs tuning, not guessing' },
  { title: 'Hyperparameter tuning', text: 'learning rate, batch size, layer count, and neurons per layer are chosen by experiment, not learned from data' },
  { title: 'Why this matters for LSTM', text: 'a plain ANN has no sense of order or memory — tomorrow\'s LSTM builds that in for sequences' },
];

const NEURON_MECHANICS = [
  {
    icon: '🕸️', title: 'Neuron & Activation', titleClass: 'card-title-cyan', subtitle: 'The Building Block',
    description:
      'Every neuron computes a weighted sum of inputs, adds a bias, then squashes the result with an activation function so the network can learn non-linear patterns.',
    code: 'z = (w1*x1 + w2*x2 + ... + b)\na = activation(z)   # ReLU, Sigmoid, or TanH',
  },
  {
    icon: '➡️', title: 'Forward Pass', titleClass: 'card-title-purple', subtitle: 'Input → Prediction',
    description:
      'Data flows through the network layer by layer, each layer transforming it a bit more, until the final layer outputs a prediction.',
    code: 'input → Dense → ReLU\n→ Dense → ReLU\n→ Dense → Softmax → class',
  },
  {
    icon: '⬅️', title: 'Backward Pass', titleClass: 'card-title-amber', subtitle: 'Loss → Gradients',
    description:
      'Backpropagation runs the chain rule backward from the loss, computing exactly how much each weight contributed to the error.',
    code: 'loss = criterion(prediction, target)\nloss.backward()   # gradients flow back through every layer',
  },
];

const TRAINING_TIPS = [
  {
    icon: '⛰️', title: 'Gradient Descent', titleClass: 'card-title-cyan', subtitle: 'Rolling Downhill',
    description:
      'Each weight moves a small step opposite its gradient — repeatedly, across many batches — rolling the loss downhill toward a minimum.',
    code: 'weight = weight - learning_rate * gradient',
  },
  {
    icon: '🎚️', title: 'Hyperparameter Tuning', titleClass: 'card-title-purple', subtitle: 'Not Learned From Data',
    description:
      'Learning rate, batch size, number of layers, and neurons per layer are all set by the developer — usually tuned through experiments, not gradient descent.',
    code: '# common starting points\nlearning_rate = 0.001\nbatch_size = 32\nhidden_layers = [128, 64]',
  },
  {
    icon: '🧪', title: 'Mini Project Idea', titleClass: 'card-title-amber', subtitle: 'Practice',
    description:
      'A small feed-forward network that classifies handwritten digits or predicts pass/fail from student marks — the classic first ANN project.',
    code: 'features → Dense(128) → ReLU\n→ Dense(10) → Softmax → digit',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Artificial Neural Networks', titleClass: 'card-title-cyan', subtitle: 'PY Module 16',
    description: 'Full lesson — neurons, activations, forward/backward pass, gradient descent, and hyperparameter tuning.',
    link: { href: '/python/learn/artificial-neural-networks', label: 'Open PY Module 16 →' },
  },
  {
    icon: '🎬', title: 'ANN Intuition', titleClass: 'card-title-purple', subtitle: 'StatQuest',
    description: 'Clear, visual walkthrough of how a neural network actually learns.',
    link: { href: ANN_YT, label: 'Watch ANN intuition →', external: true },
  },
  {
    icon: '🔜', title: 'Next: LSTM Networks', titleClass: 'card-title-amber', subtitle: 'Day 17 Preview',
    description: 'Tomorrow — why plain RNNs forget, and how LSTM gates fix it.',
    link: { href: '/agentic-day-17', label: 'Go to Day 17 →' },
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

export default function AgenticDay16() {
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
          <Link to="/agentic-day-15" className="day001-nav-btn day001-nav-prev">← Day 15</Link>
          <p className="day001-datetime">Agentic AI Day 16 · 8 Sep 2026</p>
          <Link to="/agentic-day-17" className="day001-nav-btn day001-nav-next">Day 17 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 2</span><span>Neural Nets</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 16 <span aria-hidden="true">🕸️</span></h1>
              <p className="day001-day-theme">ARTIFICIAL NEURAL NETWORKS</p>
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
          A deeper dive into the network itself. How <strong>neurons</strong>, <strong>activations</strong>{' '}
          (Sigmoid, ReLU, TanH), the <strong>forward</strong> and <strong>backward</strong> pass, and{' '}
          <strong>gradient descent</strong> combine to let a network actually learn from data.
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

        <CardSection icon="🕸️" title="NEURON MECHANICS" cards={NEURON_MECHANICS} columns={3} />
        <CardSection icon="🎚️" title="TRAINING &amp; TUNING" cards={TRAINING_TIPS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#DeepLearning</span><span>#Day16</span><span>#NeuralNetworks</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
