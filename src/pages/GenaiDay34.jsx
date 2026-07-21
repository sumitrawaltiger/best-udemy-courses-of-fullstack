import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture34';

const LEARNT_TODAY = [
  { title: 'Beyond yes/no', text: 'predict which of many classes — Amazon, Google, TCS, Microsoft — a student is placed in' },
  { title: 'One score per class', text: 'instead of a single output, the network produces a raw score for every possible class' },
  { title: 'Scores aren’t probabilities', text: 'raw scores can be negative or huge; we need to turn them into a proper distribution' },
  { title: 'Softmax', text: 'softmax(zᵢ) = e^zᵢ / Σ e^zⱼ — converts the scores into probabilities that sum to 1' },
  { title: 'Why exp', text: 'e^z makes every value positive and amplifies differences; dividing by the sum normalises to 1' },
  { title: 'Read the result', text: 'a vector like [0.2, 0.3, 0.1, …] → "30% chance Microsoft"; the highest wins' },
  { title: 'Handles extremes', text: 'even scores like [-100000, 10, 1000] come out as a clean [0, 0.49, 0.51]' },
  { title: 'This is the LLM output', text: 'an LLM softmaxes over ~50,000 tokens to pick the next word — same idea, bigger scale' },
];

const MANY = [
  {
    icon: '🏢', title: 'Many Classes', titleClass: 'card-title-cyan', subtitle: 'One Output Each',
    description:
      'For a multi-way choice, the network ends in one neuron per class. Each produces a raw score saying how strongly the input matches that class.',
    code: '// classes: Amazon, Google, TCS, Microsoft, ...\n// scores:  [ 2.0, 3.0, 1.0, 0.15, ... ]\n// higher score = stronger match (but not a probability yet)',
  },
  {
    icon: '⚠️', title: 'Scores ≠ Probabilities', titleClass: 'card-title-purple', subtitle: 'Need Normalising',
    description:
      'Raw scores can be negative or enormous and don’t add up to anything meaningful. To say "30% chance Microsoft" they must become a distribution that sums to 1.',
    code: '// [ -7, 4, 2, 3 ]  ← raw, not usable as probabilities\n// want → [ 0.0, 0.55, 0.15, 0.30 ]  (sums to 1)',
  },
];

const SOFTMAX = [
  {
    icon: '🔢', title: 'Softmax', titleClass: 'card-title-cyan', subtitle: 'e^z / Σ e^z',
    description:
      'Exponentiate every score, then divide by the total. The exponent makes everything positive and stretches the gaps; the division normalises to a clean probability distribution.',
    code: '// for each class i:\n// p_i = e^(z_i) / Σ_j e^(z_j)\n// result: all positive, all sum to 1',
  },
  {
    icon: '🏆', title: 'Read The Winner', titleClass: 'card-title-purple', subtitle: 'Highest Probability',
    description:
      'The output is a probability per class. The largest is the prediction — and you also get the model’s confidence in every alternative.',
    code: '// softmax → [0.2, 0.3, 0.1, 0.15, 0.05, 0.20]\n// max is 0.30 → "30% chance Microsoft"',
  },
  {
    icon: '🛡️', title: 'Stable On Extremes', titleClass: 'card-title-amber', subtitle: 'Big Or Tiny',
    description:
      'Softmax gracefully handles wildly different scores. A huge gap becomes near-certainty, and even crazy inputs normalise into a sensible split.',
    code: '// [ -100000, 10, 1000 ]  →  [ 0.0, 0.49, 0.51 ]\n// the tiny score is squeezed out, not broken',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 34', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The multi-class / softmax notebook in the STRIKE GenAI repo — turning many scores into a probability distribution.',
    link: { href: GH_LECTURE, label: 'Open Lecture 34 →', external: true },
  },
  {
    icon: '🧠', title: 'Softmax Is Everywhere', titleClass: 'card-title-purple', subtitle: 'The Final Layer',
    description:
      'Every classifier that picks one of many options ends in softmax — including an LLM choosing the next token out of a huge vocabulary.',
    footer: 'scores → e^z → normalise → distribution',
  },
  {
    icon: '🔜', title: 'Next: Build An LLM', titleClass: 'card-title-amber', subtitle: 'Day 35 Preview',
    description:
      'Tomorrow it all connects — Lecture 35: how to build an LLM. Next-token prediction, tokenization, a 50K-way softmax, and embeddings.',
    link: { href: '/genai-day-35', label: 'Go to Day 35 →' },
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

export default function GenaiDay34() {
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
          <Link to="/genai-day-33" className="day001-nav-btn day001-nav-prev">← Day 33</Link>
          <p className="day001-datetime">Agentic AI Day 34</p>
          <Link to="/genai-day-35" className="day001-nav-btn day001-nav-next">Day 35 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 34</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 34 <span aria-hidden="true">🔢</span></h1>
              <p className="day001-day-theme">MULTI-CLASS CLASSIFICATION &amp; SOFTMAX</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '34%' }} /></div>

        <p className="day001-summary">
          Lecture 34 — from yes/no to <strong>many classes</strong>: which company (Amazon, Google, TCS, Microsoft…)
          will a student join? The network gives <strong>one raw score per class</strong>, but scores aren’t
          probabilities. <strong>Softmax</strong> fixes that: <code>e^zᵢ / Σ e^zⱼ</code> makes every value positive,
          amplifies the gaps, and normalises them to <strong>sum to 1</strong> — so <code>[0.2, 0.3, 0.1, …]</code>{' '}
          reads as "30% chance Microsoft". It even tames extremes like <code>[-100000, 10, 1000] → [0, 0.49, 0.51]</code>.
          This is exactly the <strong>output layer of an LLM</strong>, picking the next token from a huge vocabulary.{' '}
          <em>Tomorrow it all comes together. (From the lecture notebook.)</em>
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

        <CardSection icon="🏢" title="MANY CLASSES" cards={MANY} columns={2} />
        <CardSection icon="🔢" title="SOFTMAX" cards={SOFTMAX} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#Softmax</span><span>#Classification</span><span>#FirstPrinciples</span>
        </footer>
      </div>
    </div>
  );
}
