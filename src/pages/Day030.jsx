import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture30';
const GH_REPO = 'https://github.com/Rohitnegi9/STRIKEGenAI';

const LEARNT_TODAY = [
  { title: 'One neuron, one bend', text: 'each ReLU neuron contributes a single kink at a point you choose with its weight and bias' },
  { title: 'Combine bends', text: 'ReLU(x−10) − ReLU(x−30) makes a plateau — a ramp that turns on at 10 and levels off at 30' },
  { title: 'Scale them', text: '3·ReLU(x−2) − 3·ReLU(x−3) controls the height and steepness of a piece' },
  { title: 'Sum many neurons', text: 'stack shifted, scaled ReLUs and their bends add up into any shape you like' },
  { title: 'Approximate y = x²', text: 'enough small ReLU pieces trace a smooth curve as closely as you want' },
  { title: 'Universal approximation', text: 'a wide enough network of ReLU neurons can approximate ANY continuous function' },
  { title: 'Why deep learning works', text: 'it’s not magic — millions of tiny bends, tuned by gradient descent, fit the data' },
];

const BENDS = [
  {
    icon: '📐', title: 'One Neuron, One Bend', titleClass: 'card-title-cyan', subtitle: 'The Building Block',
    description:
      'Yesterday’s ReLU(w·x+b) makes exactly one kink. On its own it draws a hinge — flat, then a slope. The trick is what happens when you have many of them.',
    code: '// ReLU(x - 10): flat, then rises at x = 10\n// each neuron = one hinge in the graph',
  },
  {
    icon: '🏗️', title: 'Combine Them', titleClass: 'card-title-purple', subtitle: 'Plateaus & Steps',
    description:
      'Subtract one ReLU from another and you get a plateau; scale them and you set the height. A couple of neurons already build a step, a ramp, or a bump.',
    code: '// ReLU(x-10) - ReLU(x-30) → a ramp then plateau\n// 3·ReLU(x-2) - 3·ReLU(x-3) → a sharp step of height 3',
  },
];

const APPROX = [
  {
    icon: '🧩', title: 'Add Up The Pieces', titleClass: 'card-title-cyan', subtitle: 'Sum Of ReLUs',
    description:
      'A layer of ReLU neurons is just a sum of many scaled, shifted hinges. Line up their bends and the total output can follow almost any wiggly shape.',
    code: '// output = Σ  wᵢ · ReLU(x - kᵢ)\n// many hinges → an arbitrary piecewise curve',
  },
  {
    icon: '🌀', title: 'Approximate Anything', titleClass: 'card-title-purple', subtitle: 'Even y = x²',
    description:
      'Give it enough neurons and the sum of hinges hugs a smooth curve like y=x² — more neurons, closer fit. That is the universal approximation theorem in one picture.',
    code: '// 1 → 1, 2 → 4, 3 → 9, ...  (y = x²)\n// enough ReLU hinges trace it as closely as you want',
  },
  {
    icon: '💡', title: 'So That’s The Magic', titleClass: 'card-title-amber', subtitle: 'Demystified',
    description:
      'A neural network is a huge sum of bends whose positions and heights are learned by gradient descent. Not mysterious — just a very flexible function fit to data.',
    footer: 'weighted sums + ReLU bends + training = any function',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 30', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The universal-approximation notebook in the STRIKE GenAI repo — building curves from combinations of ReLU neurons.',
    link: { href: GH_LECTURE, label: 'Open Lecture 30 →', external: true },
  },
  {
    icon: '🧠', title: 'From Neuron To LLM', titleClass: 'card-title-purple', subtitle: 'It All Connects',
    description:
      'Weighted sums (Day 27), training (Day 28), non-linearity (Day 29), universal approximation (Day 30) — the foundations under every model, including the LLMs I build with.',
    link: { href: '/genai', label: 'Open the GenAI track →' },
  },
  {
    icon: '💾', title: 'STRIKE GenAI Repo', titleClass: 'card-title-amber', subtitle: 'All Lectures',
    description:
      'The full Coder Army course code — the journey continues past here toward more advanced GenAI topics.',
    link: { href: GH_REPO, label: 'Open the full repo →', external: true },
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

export default function Day030() {
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
          <Link to="/day-029" className="day001-nav-btn day001-nav-prev">← Day 29</Link>
          <p className="day001-datetime">Agentic AI Day 30</p>
          <Link to="/day-031" className="day001-nav-btn day001-nav-next">Day 31 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 30</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 30 <span aria-hidden="true">🌀</span></h1>
              <p className="day001-day-theme">UNIVERSAL APPROXIMATION — ANY CURVE FROM RELUs</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '30%' }} /></div>

        <p className="day001-summary">
          Lecture 30 — the payoff. Each <strong>ReLU neuron</strong> is one <strong>bend</strong>; combine them and
          magic happens. <code>ReLU(x−10) − ReLU(x−30)</code> makes a <strong>plateau</strong>, scaling sets the
          height, and <strong>summing many</strong> shifted, scaled ReLUs builds any shape — even tracing{' '}
          <code>y=x²</code> as closely as you want. That is the <strong>universal approximation theorem</strong>: a
          wide enough network can approximate <strong>any</strong> continuous function. Deep learning isn’t magic —
          it’s millions of tiny bends, tuned by gradient descent, fitting the data.{' '}
          <em>Thirty days in — the foundations are solid. (From the lecture notebook.)</em>
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

        <CardSection icon="📐" title="ONE NEURON, ONE BEND" cards={BENDS} columns={2} />
        <CardSection icon="🌀" title="APPROXIMATE ANYTHING" cards={APPROX} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#DeepLearning</span><span>#NeuralNetworks</span><span>#FirstPrinciples</span>
        </footer>
      </div>
    </div>
  );
}
