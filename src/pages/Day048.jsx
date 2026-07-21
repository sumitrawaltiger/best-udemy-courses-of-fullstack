import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture32';

const LEARNT_TODAY = [
  { title: 'Sigmoid', text: 'σ(z) = 1 / (1 + e^-z) squashes any number into the range (0, 1) — a clean probability' },
  { title: 'Its shape', text: 'big positive z → near 1, big negative z → near 0, and z = 0 → exactly 0.5' },
  { title: 'The neuron outputs a probability', text: 'p = σ(w·x + b) — the weighted sum, then squashed to a "chance of yes"' },
  { title: 'Cross-entropy (log) loss', text: 'the right loss for classification — it punishes confident wrong answers hard' },
  { title: 'The two cases', text: 'if the truth is 1: loss = −log(p); if the truth is 0: loss = −log(1 − p)' },
  { title: 'Combined into one formula', text: 'loss = −( y·log(p) + (1 − y)·log(1 − p) ), which picks the right case automatically' },
  { title: 'Why log', text: 'log(0.1) ≈ −2.3 — a confident wrong prediction gets a huge penalty, so the model learns fast' },
  { title: 'The weight update', text: 'w = w_old + learningRate · (y − p) · x, where the error is simply actual minus predicted' },
];

const SIGMOID = [
  {
    icon: '🅢', title: 'The Sigmoid', titleClass: 'card-title-cyan', subtitle: '1 / (1 + e^-z)',
    description:
      'Feed the raw score into the sigmoid and it comes out between 0 and 1 — smoothly, with no hard cutoff. That number is now a probability.',
    code: 'double sigmoid(double z) {\n  return 1.0 / (1.0 + exp(-z));\n}\n// z = -∞ → 0 · z = 0 → 0.5 · z = +∞ → 1',
  },
  {
    icon: '🎲', title: 'A Real Probability', titleClass: 'card-title-purple', subtitle: 'p = σ(w·x + b)',
    description:
      'The neuron’s output becomes p = σ(weighted sum). p = 0.7 means "70% chance placed". Above 0.5 we call it a yes, below 0.5 a no.',
    code: 'double p = sigmoid(w1*x1 + w2*x2 + b);\n// p = 0.7 → 70% likely → predict 1\n// p = 0.2 → 20% likely → predict 0',
  },
];

const LOSS = [
  {
    icon: '📏', title: 'Cross-Entropy Loss', titleClass: 'card-title-cyan', subtitle: 'Two Cases',
    description:
      'MSE is wrong for probabilities. Cross-entropy uses the log: if the truth is 1 we want p high, so the loss is −log(p); if the truth is 0 we want p low, so it is −log(1 − p).',
    code: '// actual = 1 → loss = -log(p)\n// actual = 0 → loss = -log(1 - p)\n// combined:  -( y·log(p) + (1-y)·log(1-p) )',
  },
  {
    icon: '🔥', title: 'Why The Log', titleClass: 'card-title-purple', subtitle: 'Punish Confidence',
    description:
      'A confident-but-wrong prediction is expensive: if the truth is 1 and you said 0.1, −log(0.1) ≈ 2.3 — a big loss that pushes the weights hard in the right direction.',
    code: '// truth 1, predicted 0.9 → -log(0.9) ≈ 0.1 (small)\n// truth 1, predicted 0.1 → -log(0.1) ≈ 2.3 (huge)',
  },
  {
    icon: '⬇️', title: 'The Update', titleClass: 'card-title-amber', subtitle: 'error = y − p',
    description:
      'Beautifully, the gradient simplifies: the error is just actual minus predicted. Update each weight the usual way and the classifier learns.',
    code: 'double error = y - p;   // actual - predicted\nw1 += lr * error * x1;\nw2 += lr * error * x2;\nb  += lr * error;',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 32', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The sigmoid and cross-entropy notebook in the STRIKE GenAI repo — the two pieces that turn a neuron into a classifier.',
    link: { href: GH_LECTURE, label: 'Open Lecture 32 →', external: true },
  },
  {
    icon: '🧠', title: 'Logistic Regression', titleClass: 'card-title-purple', subtitle: 'You Just Built It',
    description:
      'A weighted sum + sigmoid + cross-entropy loss is exactly logistic regression — the workhorse classifier, and the last layer idea inside an LLM.',
    footer: 'weighted sum → sigmoid → cross-entropy',
  },
  {
    icon: '🔜', title: 'Next: In C++', titleClass: 'card-title-amber', subtitle: 'Prereq 33 Preview',
    description:
      'Tomorrow — Lecture 33: put it together in C++ to predict student placement from real features, with normalization, sigmoid and a threshold.',
    link: { href: '/day-049', label: 'Go to Prereq 33 →' },
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

export default function Day048() {
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
          <Link to="/day-047" className="day001-nav-btn day001-nav-prev">← Prereq 31</Link>
          <p className="day001-datetime">Prerequisite · Gen AI 32</p>
          <Link to="/day-049" className="day001-nav-btn day001-nav-next">Prereq 33 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Prerequisite</span><span>Gen AI</span><span>Lecture 32</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">PREREQ 32 <span aria-hidden="true">🅢</span></h1>
              <p className="day001-day-theme">SIGMOID &amp; CROSS-ENTROPY LOSS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">PREREQUISITE · GEN AI</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '32%' }} /></div>

        <p className="day001-summary">
          Lecture 32 — the two missing pieces. The <strong>sigmoid</strong>, <code>σ(z) = 1/(1+e^-z)</code>, squashes
          any score into <strong>(0, 1)</strong>, so the neuron finally outputs a real probability{' '}
          <code>p = σ(w·x + b)</code>. For the loss, MSE is wrong here — <strong>cross-entropy</strong> uses the log:{' '}
          <code>−log(p)</code> when the truth is 1, <code>−log(1−p)</code> when it’s 0, combined into{' '}
          <code>−(y·log(p) + (1−y)·log(1−p))</code>. The <strong>log</strong> punishes confident wrong answers hard,
          and the gradient simplifies to a lovely <strong>error = actual − predicted</strong>. Weighted sum + sigmoid
          + cross-entropy = <strong>logistic regression</strong>. <em>Next: build it in C++.</em>
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

        <CardSection icon="🅢" title="THE SIGMOID" cards={SIGMOID} columns={2} />
        <CardSection icon="📏" title="CROSS-ENTROPY LOSS" cards={LOSS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#Sigmoid</span><span>#CrossEntropy</span><span>#FirstPrinciples</span>
        </footer>
      </div>
    </div>
  );
}
