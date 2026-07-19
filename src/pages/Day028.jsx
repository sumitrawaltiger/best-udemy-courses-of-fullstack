import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture27and28';

const LEARNT_TODAY = [
  { title: 'Loss measures wrongness', text: 'compare the prediction to the true marks; mean squared error (MSE) turns that gap into one number' },
  { title: 'The goal', text: 'find the weights (w1, w2, b) that make the loss as small as possible' },
  { title: 'Gradient = the direction uphill', text: 'the gradient says which way the loss increases — so we step the opposite way' },
  { title: 'Gradient descent', text: 'w = w − learningRate · gradient, repeated, walks the weights downhill toward low loss' },
  { title: 'Learning rate', text: 'the step size — too big overshoots, too small crawls; a small value keeps it stable' },
  { title: 'The training loop', text: 'over many epochs, nudge w1, w2 and b down the loss until predictions get accurate' },
  { title: 'It converges', text: 'the weights settle (e.g. w1≈4.92, w2≈2.94) and the neuron now predicts marks well' },
  { title: 'This is how all NNs learn', text: 'the same loop — predict, measure loss, descend — trains an LLM, just with billions of weights' },
];

const LOSS = [
  {
    icon: '📉', title: 'Measure The Error', titleClass: 'card-title-cyan', subtitle: 'Loss (MSE)',
    description:
      'For each example, take the prediction minus the true value, square it, and average over the dataset. That mean squared error is a single number: how wrong the model is.',
    code: '// error for one row\ndouble e = predict(study, sleep, w1, w2, b) - marks;\n// loss = average of e*e over all rows (MSE)',
  },
  {
    icon: '🎯', title: 'The Objective', titleClass: 'card-title-purple', subtitle: 'Minimise Loss',
    description:
      'Training is an optimisation problem: adjust the weights so the loss drops. Lower loss means the neuron’s predictions are closer to the real marks.',
    code: '// find w1, w2, b that minimise the loss\n// = the neuron that fits the data best',
  },
];

const DESCENT = [
  {
    icon: '🧭', title: 'The Gradient', titleClass: 'card-title-cyan', subtitle: 'Which Way To Move',
    description:
      'The gradient of the loss with respect to each weight points uphill — toward more error. We compute it from the data and then move the opposite way to reduce loss.',
    code: '// gradient w.r.t. each weight, averaged over rows\n// grad_w1 = avg( 2 * e * study )\n// grad_w2 = avg( 2 * e * sleep )\n// grad_b  = avg( 2 * e )',
  },
  {
    icon: '⬇️', title: 'Gradient Descent', titleClass: 'card-title-purple', subtitle: 'Step Downhill',
    description:
      'Subtract a small fraction of the gradient from each weight. The learning rate controls the step size — small and steady beats big and unstable.',
    code: 'w1 -= lr * grad_w1;\nw2 -= lr * grad_w2;\nb  -= lr * grad_b;\n// one step closer to the best weights',
  },
  {
    icon: '🔁', title: 'The Training Loop', titleClass: 'card-title-amber', subtitle: 'Epochs → Learned',
    description:
      'Repeat over many epochs and the weights converge. The trained neuron ends up with real values (around w1≈4.92, w2≈2.94) and predicts marks accurately.',
    code: 'for (int epoch = 0; epoch < N; epoch++) {\n  // compute gradients over the dataset\n  // update w1, w2, b\n}\n// → learned: w1≈4.92, w2≈2.94',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 27–28', titleClass: 'card-title-cyan', subtitle: 'C++ From Scratch',
    description:
      'The training code (first.cpp) and the trained model (trained.cpp) with the learned weights, in the STRIKE GenAI repo.',
    link: { href: GH_LECTURE, label: 'Open the code →', external: true },
  },
  {
    icon: '🌍', title: 'The Same Everywhere', titleClass: 'card-title-purple', subtitle: 'Scales Up',
    description:
      'Predict, measure loss, follow the gradient down — this exact loop trains everything from this neuron to GPT. Only the size changes.',
    footer: 'predict → loss → gradient → step → repeat',
  },
  {
    icon: '🔜', title: 'Next: Non-Linearity', titleClass: 'card-title-amber', subtitle: 'Day 29 Preview',
    description:
      'Tomorrow — Lecture 29: why stacking linear neurons stays a straight line, and how activation functions (ReLU) let a network learn curves.',
    link: { href: '/day-029', label: 'Go to Day 29 →' },
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

export default function Day028() {
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
          <Link to="/day-027" className="day001-nav-btn day001-nav-prev">← Day 27</Link>
          <p className="day001-datetime">Agentic AI Day 28</p>
          <Link to="/day-029" className="day001-nav-btn day001-nav-next">Day 29 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 28</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 28 <span aria-hidden="true">📉</span></h1>
              <p className="day001-day-theme">TRAINING FROM SCRATCH — GRADIENT DESCENT (C++)</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '28%' }} /></div>

        <p className="day001-summary">
          Lecture 28 — the neuron <strong>learns</strong>. A <strong>loss</strong> (mean squared error) measures how
          wrong the predictions are, and the goal is to make it small. The <strong>gradient</strong> points toward
          more error, so <strong>gradient descent</strong> steps the opposite way:{' '}
          <code>w −= learningRate · gradient</code>, repeated over many <strong>epochs</strong>. The weights
          <strong> converge</strong> (around <code>w1≈4.92, w2≈2.94</code>) and the neuron now predicts marks
          accurately. This same loop — predict, measure, descend — is exactly how every neural network, up to an LLM,
          learns. <em>Only the scale changes.</em>
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

        <CardSection icon="📉" title="MEASURE THE ERROR" cards={LOSS} columns={2} />
        <CardSection icon="⬇️" title="GRADIENT DESCENT" cards={DESCENT} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#GradientDescent</span><span>#Cpp</span><span>#FirstPrinciples</span>
        </footer>
      </div>
    </div>
  );
}
