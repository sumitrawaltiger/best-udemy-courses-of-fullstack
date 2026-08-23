import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NN_YT = 'https://www.youtube.com/watch?v=aircAruvnKk';
const PYTORCH = 'https://pytorch.org/tutorials/beginner/basics/intro.html';

const LEARNT_TODAY = [
  { title: 'Why deep learning for text', text: 'classical BoW loses word order and long-range meaning — neural nets learn richer representations' },
  { title: 'Neural network idea', text: 'layers of neurons transform inputs; weights learn from labeled examples via gradient descent' },
  { title: 'Training pipeline', text: 'batch data → forward pass → compute loss → backward pass → update weights → repeat' },
  { title: 'Loss function', text: 'measures how wrong predictions are — cross-entropy for classification is the usual NLP default' },
  { title: 'Epochs & batches', text: 'an epoch = one full pass over the training set; batches keep memory and updates manageable' },
  { title: 'Overfitting watch', text: 'great train score + bad validation score means the net memorized — use dropout / early stop' },
  { title: 'GPU basics', text: 'matrix math runs much faster on GPUs; frameworks move tensors to cuda when available' },
  { title: 'Bridge to RNNs', text: 'tomorrow specializes this to sequences — the architecture behind older NLP models' },
];

const CORE = [
  {
    icon: '🧠', title: 'Neurons & Layers', titleClass: 'card-title-cyan', subtitle: 'Building Blocks',
    description:
      'Each neuron computes a weighted sum + activation. Stack layers to learn hierarchical patterns in embeddings or characters.',
    code: 'input → Dense → ReLU\n→ Dense → Softmax → class',
  },
  {
    icon: '📉', title: 'Loss & Optimize', titleClass: 'card-title-purple', subtitle: 'Learn',
    description:
      'Pick a loss (e.g. cross-entropy), run backpropagation to get gradients, then an optimizer (SGD/Adam) updates weights.',
    code: 'y_hat = model(x)\nloss = cross_entropy(y_hat, y)\nloss.backward()\noptimizer.step()',
  },
  {
    icon: '🔁', title: 'Train Loop', titleClass: 'card-title-amber', subtitle: 'Pipeline',
    description:
      'Shuffle, batch, forward, loss, backward, step. Validate each epoch. Save the best checkpoint.',
    code: 'for epoch in range(N):\n  for batch in loader:\n    train_step(batch)\n  validate()',
  },
];

const PRACTICE = [
  {
    icon: '🖥️', title: 'CPU vs GPU', titleClass: 'card-title-cyan', subtitle: 'Hardware',
    description:
      'Small demos run on CPU. Real text models need a GPU (or cloud). Check device availability before training.',
    code: 'device = "cuda" if torch.cuda.is_available() else "cpu"\nmodel.to(device)',
  },
  {
    icon: '⚠️', title: 'Overfit Guardrails', titleClass: 'card-title-purple', subtitle: 'Generalize',
    description:
      'Hold out a validation set, plot train vs val loss, add dropout, and stop early when val stops improving.',
    code: '// if val_loss rises 3 epochs\n// → early stop + load best',
  },
  {
    icon: '🔜', title: 'Next: RNNs', titleClass: 'card-title-amber', subtitle: 'Day 15 Preview',
    description: 'Tomorrow — recurrent nets for sequences, BPTT, and the vanishing-gradient problem.',
    link: { href: '/agentic-day-15', label: 'Go to Day 15 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Deep Learning for NLP', titleClass: 'card-title-cyan', subtitle: 'PY Module 14',
    description: 'Full lesson — DL fundamentals, text nets, training, loss, GPU basics.',
    link: { href: '/python/learn/deep-learning-for-nlp', label: 'Open PY Module 14 →' },
  },
  {
    icon: '🎬', title: 'Neural Networks', titleClass: 'card-title-purple', subtitle: '3Blue1Brown',
    description: 'Visual intuition for what a neural net is doing.',
    link: { href: NN_YT, label: 'Watch NN series →', external: true },
  },
  {
    icon: '🔥', title: 'PyTorch Basics', titleClass: 'card-title-amber', subtitle: 'Tutorials',
    description: 'Official beginner intro — tensors, models, and the train loop.',
    link: { href: PYTORCH, label: 'Open PyTorch basics →', external: true },
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

export default function AgenticDay14() {
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
          <Link to="/agentic-day-13" className="day001-nav-btn day001-nav-prev">← Day 13</Link>
          <p className="day001-datetime">Agentic AI Day 14 · 6 Sep 2026</p>
          <Link to="/agentic-day-15" className="day001-nav-btn day001-nav-next">Day 15 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 2</span><span>Deep Learning</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 14 <span aria-hidden="true">🧠</span></h1>
              <p className="day001-day-theme">DEEP LEARNING FOR NLP</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '9%' }} /></div>

        <p className="day001-summary">
          Day 14 goes neural. Learn how <strong>layers</strong>, <strong>loss</strong>, and the{' '}
          <strong>train loop</strong> turn text into predictions — and why GPUs matter.
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

        <CardSection icon="🧠" title="DEEP LEARNING CORE" cards={CORE} columns={3} />
        <CardSection icon="🖥️" title="TRAIN SMART" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#DeepLearning</span><span>#Day14</span><span>#NLP</span><span>#PyTorch</span>
        </footer>
      </div>
    </div>
  );
}
