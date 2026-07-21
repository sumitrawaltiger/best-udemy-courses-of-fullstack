import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture31';

const LEARNT_TODAY = [
  { title: 'Regression vs classification', text: 'regression predicts a number (marks); classification predicts a category (placed or not)' },
  { title: 'The output is 0 or 1', text: 'will this student get placed? yes (1) or no (0) — a yes/no decision, not a quantity' },
  { title: 'Raw weighted sum won’t do', text: 'w1·x + … can be 80 or 16 lakh, but a "will it happen?" answer needs to live between 0 and 1' },
  { title: 'We need a probability', text: 'turn the raw score into "70% chance placed" (0.7) — a squashing step is missing' },
  { title: 'Loss compares to the truth', text: 'if the real answer is 1 and we predicted 0.7, the error is 0.3 — how wrong we were' },
  { title: 'Same gradient descent', text: 'update each weight with w = w_old + learningRate · error · input' },
  { title: 'Sets up the sigmoid', text: 'tomorrow adds the function that squashes any score into a clean probability' },
];

const KINDS = [
  {
    icon: '📈', title: 'Regression', titleClass: 'card-title-cyan', subtitle: 'Predict A Number',
    description:
      'Days 27–30 predicted a quantity — marks from study and sleep. The output could be any number, and a straight line (or curve) fit the data.',
    code: '// regression: output = a number\n// "how many marks?" → 74.3',
  },
  {
    icon: '✅', title: 'Classification', titleClass: 'card-title-purple', subtitle: 'Predict A Category',
    description:
      'Now the question is different: will a student get placed — yes or no? The output must be a decision (0 or 1), expressed as a probability of the "yes".',
    code: '// classification: output = a category\n// "placed?" → 1 (yes) or 0 (no)\n// features: dsa, projects, iq, attendance',
  },
];

const PROB = [
  {
    icon: '🔢', title: 'The Raw Score Problem', titleClass: 'card-title-cyan', subtitle: 'Too Big',
    description:
      'The same weighted sum as before can produce anything — 80, or 1,600,000. That is meaningless as a "chance of being placed". We need it bounded between 0 and 1.',
    code: '// z = w1·dsa + w2·projects + w3·iq + w4·att + b\n// z could be 80 ... or 16 lakh\n// but a probability must be in [0, 1]',
  },
  {
    icon: '🎯', title: 'Want A Probability', titleClass: 'card-title-purple', subtitle: '0 to 1',
    description:
      'We want the output to read like "70% chance placed" — 0.7. A squashing function will map any raw score into that range; that is tomorrow’s sigmoid.',
    code: '// raw score  →  [squash]  →  0.7  = 70% chance\n// closer to 1 → more likely placed',
  },
  {
    icon: '📉', title: 'Loss & Update', titleClass: 'card-title-amber', subtitle: 'Learn From Error',
    description:
      'Compare the predicted probability to the true label to get an error, then nudge the weights with the same gradient-descent step from Day 28.',
    code: '// actual = 1, predicted = 0.7 → error = 0.3\n// w = w_old + learningRate · error · input',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 31', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The binary classification notebook in the STRIKE GenAI repo — moving from predicting numbers to predicting yes/no with a probability.',
    link: { href: GH_LECTURE, label: 'Open Lecture 31 →', external: true },
  },
  {
    icon: '🧠', title: 'Why It Matters', titleClass: 'card-title-purple', subtitle: 'Toward LLMs',
    description:
      'LLMs are classifiers too — they pick the next token from a set. Understanding classification from scratch leads straight to how an LLM chooses words.',
    footer: 'regression → classification → next-token prediction',
  },
  {
    icon: '🔜', title: 'Next: Sigmoid', titleClass: 'card-title-amber', subtitle: 'Day 32 Preview',
    description:
      'Tomorrow — Lecture 32: the sigmoid function that squashes a score to a probability, and cross-entropy (log) loss for measuring classification error.',
    link: { href: '/genai-day-32', label: 'Go to Day 32 →' },
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

export default function GenaiDay31() {
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
          <Link to="/genai-day-30" className="day001-nav-btn day001-nav-prev">← Day 30</Link>
          <p className="day001-datetime">Agentic AI Day 31</p>
          <Link to="/genai-day-32" className="day001-nav-btn day001-nav-next">Day 32 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 31</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 31 <span aria-hidden="true">✅</span></h1>
              <p className="day001-day-theme">BINARY CLASSIFICATION — NUMBERS TO PROBABILITIES</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '31%' }} /></div>

        <p className="day001-summary">
          Lecture 31 — from <strong>regression</strong> to <strong>classification</strong>. Instead of predicting a
          number (marks), the question becomes a category: will a student get <strong>placed — 1 or 0?</strong> The
          same weighted sum still runs, but its <strong>raw score</strong> can be 80 or 16 lakh, so it needs to be
          squashed into a <strong>probability between 0 and 1</strong> ("70% chance"). The <strong>loss</strong>
          compares that probability to the true label (actual 1, predicted 0.7 → error 0.3), and the weights update
          with the familiar <code>w = w_old + lr · error · input</code>.{' '}
          <em>Tomorrow: the sigmoid. (From the lecture notebook.)</em>
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

        <CardSection icon="⚖️" title="REGRESSION vs CLASSIFICATION" cards={KINDS} columns={2} />
        <CardSection icon="🎯" title="WE NEED A PROBABILITY" cards={PROB} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#Classification</span><span>#NeuralNetworks</span><span>#FirstPrinciples</span>
        </footer>
      </div>
    </div>
  );
}
