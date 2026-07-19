import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture37%20and%2038';
const NOTION = 'https://www.notion.so/Multi-class-classification-345a9af81c9880dd9f8cd3b7dca8fa25';

const LEARNT_TODAY = [
  { title: 'A real neural network', text: 'not one neuron — a 5 → 16 → 10 network: 5 features, a hidden layer of 16, and 10 output classes' },
  { title: 'Predict the company', text: 'from dsa, projects, iq, cgpa, attendance → which of 10 companies places the student' },
  { title: 'Why a hidden layer', text: 'one layer only draws straight boundaries; the hidden layer learns feature interactions like "high CGPA AND high projects"' },
  { title: 'ReLU adds non-linearity', text: 'ReLU(x) = max(0, x) kills negative signals — a switch that lets useful patterns through and blocks the rest' },
  { title: 'Softmax output', text: 'the 10 output neurons go through softmax → a probability per company that sums to 1' },
  { title: 'Standardize features', text: 'z-score each feature (mean 0, std 1) so iq (~120) doesn’t dominate cgpa (~8) by scale alone' },
  { title: 'He initialization', text: 'random weights with std = √(2 / fanIn) keep signals stable through ReLU layers' },
  { title: 'Train it', text: 'cross-entropy loss + mini-batch gradient descent over 500 epochs, on an 80/20 train/test split' },
];

const NET = [
  {
    icon: '🕸️', title: 'The Architecture', titleClass: 'card-title-cyan', subtitle: '5 → 16 → 10',
    description:
      'Five input features feed a hidden layer of 16 neurons, which feeds 10 output neurons — one per company. Two layers of weights, learned from scratch in pure C++.',
    code: '// Input : 5  (dsa, projects, iq, cgpa, attendance)\n// Hidden: 16 + ReLU\n// Output: 10 + Softmax   (10 companies)\n// Loss  : cross-entropy',
  },
  {
    icon: '🔀', title: 'Why A Hidden Layer', titleClass: 'card-title-purple', subtitle: 'Learn Interactions',
    description:
      'A single layer can only split data with straight lines. Placement is non-linear: "high CGPA + low projects" leads somewhere different than "high CGPA + high projects". The hidden layer captures that.',
    code: '// no hidden layer → straight boundary only\n// hidden layer → learns feature combinations\n// ReLU makes the combinations non-linear',
  },
];

const PIECES = [
  {
    icon: '⚡', title: 'ReLU', titleClass: 'card-title-cyan', subtitle: 'max(0, x)',
    description:
      'The hidden layer’s activation. It zeroes out negative values, acting like a switch — useful signals pass, noise is blocked. That bend is what lets the network model curves.',
    code: 'double relu(double x) {\n  return x > 0 ? x : 0.0;\n}\n// negative → 0, positive → unchanged',
  },
  {
    icon: '📊', title: 'Standardize', titleClass: 'card-title-purple', subtitle: 'Z-Score',
    description:
      'Rescale every feature to mean 0, std 1. Without it iq (~120) would swamp cgpa (~8) purely by magnitude. Now the network learns from pattern, not scale.',
    code: '// per feature j:\n// x = (x - mean[j]) / std[j]\n// → every feature centred, comparable',
  },
  {
    icon: '🎲', title: 'He Init + Softmax', titleClass: 'card-title-amber', subtitle: 'Stable Start, Clean Output',
    description:
      'Weights start random with std = √(2/fanIn) (He init) so signals don’t vanish or explode through ReLU. The 10 outputs pass through softmax to a probability per company.',
    code: '// weight ~ Normal(0, sqrt(2/fanIn))\n// output → softmax → [p0..p9], Σ = 1\n// argmax = predicted company',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lectures 37 & 38', titleClass: 'card-title-cyan', subtitle: 'C++ Neural Net',
    description:
      'placement_nn.cpp, placement_data.csv and predict.cpp in the STRIKE GenAI repo — a full multi-class network built by hand.',
    link: { href: GH_LECTURE, label: 'Open Lectures 37 & 38 →', external: true },
  },
  {
    icon: '📝', title: 'Multi-Class Notes', titleClass: 'card-title-purple', subtitle: 'Notion',
    description:
      'Rohit’s notes on multi-class classification — the hidden layer, ReLU, softmax and cross-entropy tied together.',
    link: { href: NOTION, label: 'Open the notes →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Tokenizer', titleClass: 'card-title-amber', subtitle: 'Day 37 Preview',
    description:
      'Tomorrow — Lecture 39: build a Byte-Pair-Encoding tokenizer from scratch, the first real step of turning text into an LLM’s input.',
    link: { href: '/day-037', label: 'Go to Day 37 →' },
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

export default function Day036() {
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
          <Link to="/day-035" className="day001-nav-btn day001-nav-prev">← Day 35</Link>
          <p className="day001-datetime">Agentic AI Day 36</p>
          <Link to="/day-037" className="day001-nav-btn day001-nav-next">Day 37 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 37 &amp; 38</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 36 <span aria-hidden="true">🕸️</span></h1>
              <p className="day001-day-theme">MULTI-CLASS NEURAL NETWORK IN C++</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '36%' }} /></div>

        <p className="day001-summary">
          Lectures 37 &amp; 38 — a real <strong>neural network</strong>, built in C++. The task: predict which of{' '}
          <strong>10 companies</strong> places a student from <strong>dsa, projects, iq, cgpa, attendance</strong>. The
          shape is <strong>5 → 16 → 10</strong>: five inputs, a <strong>hidden layer of 16</strong> with{' '}
          <strong>ReLU</strong>, then 10 outputs through <strong>softmax</strong>. The hidden layer is the point — it
          learns feature <strong>interactions</strong> a single layer can’t. Features are{' '}
          <strong>z-score standardized</strong>, weights start with <strong>He init</strong>{' '}
          <code>√(2/fanIn)</code>, and it trains with <strong>cross-entropy + mini-batch gradient descent</strong>.{' '}
          <em>Next: tokenization.</em>
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

        <CardSection icon="🕸️" title="THE NETWORK" cards={NET} columns={2} />
        <CardSection icon="🧩" title="THE PIECES" cards={PIECES} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#NeuralNetworks</span><span>#Cpp</span><span>#FirstPrinciples</span>
        </footer>
      </div>
    </div>
  );
}
