import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture27and28';

const LEARNT_TODAY = [
  { title: 'Under the hood', text: 'build a neural network by hand in C++ — no libraries, no magic — to see what an LLM really is' },
  { title: 'The dataset', text: 'predict a student’s marks from study_hours and sleep_hours, loaded from a CSV' },
  { title: 'A neuron is a weighted sum', text: 'output = w1·study + w2·sleep + b — that is the whole computation of one neuron' },
  { title: 'Weights and bias', text: 'w1 and w2 scale each input by importance; b (bias) shifts the result up or down' },
  { title: 'The forward pass', text: 'plug the inputs and current weights into the formula to get a prediction' },
  { title: 'Random start is wrong', text: 'untrained weights give bad predictions — tomorrow’s training fixes that' },
  { title: 'This IS an LLM neuron', text: 'the same weighted-sum idea, repeated billions of times, is what powers a large language model' },
];

const BUILD = [
  {
    icon: '🧱', title: 'Build It By Hand', titleClass: 'card-title-cyan', subtitle: 'Plain C++',
    description:
      'No PyTorch, no TensorFlow. Writing it in raw C++ strips away the abstraction so every number is visible — the best way to truly understand a neural network.',
    code: '// dataset.csv: study_hours, sleep_hours, marks\n// 9,2,55\n// 10,7,75\n// 1,1,12',
  },
  {
    icon: '📥', title: 'Load The Data', titleClass: 'card-title-purple', subtitle: 'Read The CSV',
    description:
      'Parse each row of the CSV into a struct — study, sleep and the true marks. This is the training data the neuron will eventually learn from.',
    code: 'struct Example { double study, sleep, marks; };\n\n// read each line: study, sleep, marks\n// → vector<Example> data',
  },
];

const NEURON = [
  {
    icon: '⚖️', title: 'The Weighted Sum', titleClass: 'card-title-cyan', subtitle: 'What A Neuron Does',
    description:
      'A neuron multiplies each input by a weight, adds them, and adds a bias. That single line — a weighted sum plus a bias — is the atom of every neural network.',
    code: 'double predict(double study, double sleep,\n               double w1, double w2, double b) {\n  return w1 * study + w2 * sleep + b;\n}',
  },
  {
    icon: '🎛️', title: 'Weights & Bias', titleClass: 'card-title-purple', subtitle: 'The Knobs',
    description:
      'Weights decide how much each input matters (maybe study matters more than sleep); the bias shifts the baseline. Learning a network = finding good values for these knobs.',
    code: '// w1 big → study matters a lot\n// w2 small → sleep matters less\n// b → baseline marks with zero input',
  },
  {
    icon: '▶️', title: 'The Forward Pass', titleClass: 'card-title-amber', subtitle: 'Predict',
    description:
      'Feed inputs through the formula with the current weights and you get a prediction. With random weights it is wrong — but the machinery is exactly right.',
    code: 'predict(9, 2, w1, w2, b); // guess for a 9h/2h student\n// random w1,w2,b → wrong number (for now)',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 27–28', titleClass: 'card-title-cyan', subtitle: 'C++ From Scratch',
    description:
      'The first.cpp / trained.cpp neural network and dataset.csv in the STRIKE GenAI repo — the neuron and its training, in plain C++.',
    link: { href: GH_LECTURE, label: 'Open the code →', external: true },
  },
  {
    icon: '🧠', title: 'Why This Matters', titleClass: 'card-title-purple', subtitle: 'Demystified',
    description:
      'Every LLM is billions of these weighted sums. Building one by hand turns the "black box" into something you fully understand.',
    footer: 'one neuron = w1·x1 + w2·x2 + b',
  },
  {
    icon: '🔜', title: 'Next: Training', titleClass: 'card-title-amber', subtitle: 'Day 28 Preview',
    description:
      'Tomorrow the neuron learns — Lecture 28: measure the error, compute gradients, and use gradient descent to find the weights that make predictions accurate.',
    link: { href: '/day-028', label: 'Go to Day 28 →' },
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

export default function Day027() {
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
          <Link to="/day-026" className="day001-nav-btn day001-nav-prev">← Day 26</Link>
          <p className="day001-datetime">Agentic AI Day 27</p>
          <Link to="/day-028" className="day001-nav-btn day001-nav-next">Day 28 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 27</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 27 <span aria-hidden="true">🧠</span></h1>
              <p className="day001-day-theme">NEURAL NETS FROM SCRATCH (C++) — THE NEURON</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '27%' }} /></div>

        <p className="day001-summary">
          Lecture 27 — going to the metal. To truly understand what powers an LLM, I built a neural network{' '}
          <strong>from scratch in C++</strong> — no libraries. The task: predict <strong>marks</strong> from{' '}
          <strong>study_hours</strong> and <strong>sleep_hours</strong> in a CSV. A <strong>neuron</strong> is just a{' '}
          <strong>weighted sum</strong>: <code>output = w1·study + w2·sleep + b</code>, where the{' '}
          <strong>weights</strong> scale each input and the <strong>bias</strong> shifts the result. The{' '}
          <strong>forward pass</strong> plugs inputs into that formula. With random weights it’s wrong — but this is
          exactly the atom every LLM is built from. <em>Tomorrow it learns.</em>
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

        <CardSection icon="🧱" title="BUILD IT BY HAND" cards={BUILD} columns={2} />
        <CardSection icon="⚖️" title="A NEURON" cards={NEURON} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#NeuralNetworks</span><span>#Cpp</span><span>#FirstPrinciples</span>
        </footer>
      </div>
    </div>
  );
}
