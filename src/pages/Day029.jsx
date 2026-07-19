import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture29';

const LEARNT_TODAY = [
  { title: 'Linear stays linear', text: 'stacking linear neurons collapses to one line: w2·(w1·x+b1)+b2 = m·x + c — no matter how many layers' },
  { title: 'Real data is curved', text: 'a straight line can’t fit y=x², a plateau, or most real relationships' },
  { title: 'Activation function', text: 'a non-linear step placed on a neuron’s output — that is what breaks the "just a line" limit' },
  { title: 'ReLU', text: 'ReLU(x) = max(0, x): output 0 when the input is negative, and the input itself when positive' },
  { title: 'ReLU adds a bend', text: 'ReLU(x−3) stays flat until x=3, then rises — one clean kink in the graph' },
  { title: 'The activated neuron', text: 'output = ReLU(w·x + b) — a weighted sum, then bent by the activation' },
  { title: 'Non-linearity unlocks curves', text: 'with activations the network can bend, not just tilt — the reason deep learning works' },
];

const LINEAR = [
  {
    icon: '📏', title: 'Layers Collapse', titleClass: 'card-title-cyan', subtitle: 'Still A Line',
    description:
      'Feed one linear neuron into another and the algebra simplifies right back to a single line. Two, ten, a hundred linear layers — all still just y = m·x + c.',
    code: '// layer 1: y = w1·x + b1\n// layer 2: out = w2·y + b2\n//        = w1·w2·x + (w2·b1 + b2)\n//        = m·x + c   ← still linear!',
  },
  {
    icon: '🌀', title: 'But Data Curves', titleClass: 'card-title-purple', subtitle: 'A Line Can’t Fit It',
    description:
      'Squares, plateaus, thresholds — real relationships bend. A purely linear model can never capture y=x² or "no effect until a threshold, then rising".',
    code: '// y = x²  → a curve\n// "extra pay only after 3 hours" → a bend\n// a line cannot fit either',
  },
];

const RELU = [
  {
    icon: '⚡', title: 'ReLU', titleClass: 'card-title-cyan', subtitle: 'max(0, x)',
    description:
      'The rectified linear unit is dead simple: negatives become 0, positives pass through. That tiny kink at zero is the non-linearity everything else builds on.',
    code: 'double relu(double x) {\n  return x < 0 ? 0 : x;   // max(0, x)\n}',
  },
  {
    icon: '📐', title: 'A Bend Anywhere', titleClass: 'card-title-purple', subtitle: 'ReLU(x − k)',
    description:
      'Shift the input and you move the kink. ReLU(x−3) is flat until x=3, then rises with slope 1 — a bend placed exactly where you want it.',
    code: '// ReLU(x - 3): 0 for x ≤ 3, then (x - 3)\n// the "turn-on point" is a knob',
  },
  {
    icon: '🔵', title: 'The Activated Neuron', titleClass: 'card-title-amber', subtitle: 'ReLU(w·x + b)',
    description:
      'Wrap the weighted sum in an activation and the neuron can now produce a bent output instead of a straight one. This is the neuron used in real networks.',
    code: 'output = relu(w * x + b);\n// weighted sum → bent by ReLU\n// no longer just a line',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 29', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The activation-functions notebook in the STRIKE GenAI repo — why linear layers aren’t enough and how ReLU fixes it.',
    link: { href: GH_LECTURE, label: 'Open Lecture 29 →', external: true },
  },
  {
    icon: '🧠', title: 'The Key Insight', titleClass: 'card-title-purple', subtitle: 'Why It Matters',
    description:
      'Weights + bias give a line; the activation gives a bend. Non-linearity is the single ingredient that makes a "deep" network more than a linear one.',
    footer: 'weighted sum + activation = a curve',
  },
  {
    icon: '🔜', title: 'Next: Any Curve', titleClass: 'card-title-amber', subtitle: 'Day 30 Preview',
    description:
      'Tomorrow — Lecture 30: combine many ReLU neurons to approximate ANY function, and see why a wide enough network can model anything.',
    link: { href: '/day-030', label: 'Go to Day 30 →' },
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

export default function Day029() {
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
          <Link to="/day-028" className="day001-nav-btn day001-nav-prev">← Day 28</Link>
          <p className="day001-datetime">Agentic AI Day 29</p>
          <Link to="/day-030" className="day001-nav-btn day001-nav-next">Day 30 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 29</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 29 <span aria-hidden="true">⚡</span></h1>
              <p className="day001-day-theme">ACTIVATION FUNCTIONS — WHY NON-LINEARITY</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '29%' }} /></div>

        <p className="day001-summary">
          Lecture 29 — the missing ingredient. Stacking <strong>linear</strong> neurons collapses to a single line
          (<code>w2·(w1·x+b1)+b2 = m·x+c</code>), so no matter how deep, it can never fit a curve like{' '}
          <code>y=x²</code>. The fix is an <strong>activation function</strong> — a non-linear step on the neuron’s
          output. <strong>ReLU</strong> (<code>max(0, x)</code>) is the simplest: it zeroes negatives and passes
          positives, adding a clean <strong>bend</strong>, and <code>ReLU(x−k)</code> places that bend wherever you
          want. The real neuron is <code>ReLU(w·x + b)</code> — a weighted sum, then bent.{' '}
          <em>Non-linearity is why deep learning works. (From the lecture notebook.)</em>
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

        <CardSection icon="📏" title="WHY LINEAR ISN’T ENOUGH" cards={LINEAR} columns={2} />
        <CardSection icon="⚡" title="RELU — THE BEND" cards={RELU} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#ReLU</span><span>#NeuralNetworks</span><span>#FirstPrinciples</span>
        </footer>
      </div>
    </div>
  );
}
