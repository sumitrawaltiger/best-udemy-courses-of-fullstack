import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture33';

const LEARNT_TODAY = [
  { title: 'The task', text: 'predict student placement (1 or 0) from dsa, projects, iq and attendance, read from students.csv' },
  { title: 'Normalize the features', text: 'scale each feature with (value − min) / (max − min) so they all sit in 0–1' },
  { title: 'Why normalize', text: 'iq spans ~0–200 while projects span ~0–10 — without scaling, big-range features would dominate' },
  { title: 'One weight per feature', text: 'w_dsa, w_projects, w_iq, w_attendance and a bias — the model’s parameters' },
  { title: 'The weighted sum', text: 'z = w_dsa·dsa + w_projects·projects + w_iq·iq + w_attendance·attendance + bias' },
  { title: 'Sigmoid → probability', text: 'probability = sigmoid(z) = 1 / (1 + e^-z) — the chance of being placed' },
  { title: 'Threshold at 0.5', text: 'p ≥ 0.5 → predict placed (1), otherwise not placed (0)' },
  { title: 'Train with gradient descent', text: 'cross-entropy loss and error = actual − predicted nudge the weights until it classifies well' },
];

const DATA = [
  {
    icon: '📊', title: 'The Dataset', titleClass: 'card-title-cyan', subtitle: 'Features → Label',
    description:
      'Each student has four features and a label: 1 if placed, 0 if not. The model learns which feature combinations lead to a placement.',
    code: '// students.csv\n// name, dsa, projects, iq, attendance, placed\n// Isha1, 52, 10, 129, 41, 1\n// Priya2, 15, 1, 87, 59, 0',
  },
  {
    icon: '📐', title: 'Normalize First', titleClass: 'card-title-purple', subtitle: 'Same Scale',
    description:
      'Features live on different scales, so scale each to 0–1 with min-max normalization. Now a change in projects matters as much as a change in iq.',
    code: 'double normalize(double v, double min, double max) {\n  return (v - min) / (max - min);\n}\n// iq 129 in [15,200] → ~0.61',
  },
];

const MODEL = [
  {
    icon: '🧮', title: 'The Model', titleClass: 'card-title-cyan', subtitle: 'Weights + Bias',
    description:
      'One weight per feature plus a bias. These start at 0 and are learned. Together they form the neuron that decides placed vs not.',
    code: 'struct Model {\n  double w_dsa, w_projects, w_iq, w_attendance;\n  double bias;\n};',
  },
  {
    icon: '⚡', title: 'Predict', titleClass: 'card-title-purple', subtitle: 'Weighted Sum → Sigmoid',
    description:
      'Normalize the features, take the weighted sum plus bias, and pass it through the sigmoid to get the probability of placement.',
    code: 'double z = m.w_dsa*n_dsa + m.w_projects*n_projects\n        + m.w_iq*n_iq + m.w_attendance*n_att + m.bias;\ndouble p = sigmoid(z);   // chance placed\nreturn p >= 0.5 ? 1 : 0;  // decision',
  },
  {
    icon: '🔁', title: 'Train It', titleClass: 'card-title-amber', subtitle: 'Gradient Descent',
    description:
      'Loop over the students, compute error = actual − predicted, and nudge every weight and the bias with cross-entropy gradient descent until it classifies well.',
    code: 'double error = student.label - p;\nm.w_dsa        += lr * error * n_dsa;\nm.w_projects   += lr * error * n_projects;\n// ... and the rest, over many epochs',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 33', titleClass: 'card-title-cyan', subtitle: 'C++ Classifier',
    description:
      'placement_model.cpp, prediction.cpp and students.csv in the STRIKE GenAI repo — logistic regression by hand.',
    link: { href: GH_LECTURE, label: 'Open Lecture 33 →', external: true },
  },
  {
    icon: '🧠', title: 'A Full Classifier', titleClass: 'card-title-purple', subtitle: 'End To End',
    description:
      'Load data, normalize, predict with sigmoid, train with gradient descent, threshold the output — the complete classification pipeline in plain C++.',
    footer: 'normalize → weighted sum → sigmoid → threshold',
  },
  {
    icon: '🔜', title: 'Next: Many Classes', titleClass: 'card-title-amber', subtitle: 'Prereq 34 Preview',
    description:
      'Tomorrow — Lecture 34: multi-class classification with softmax, choosing between many options instead of a single yes/no.',
    link: { href: '/day-050', label: 'Go to Prereq 34 →' },
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

export default function Day049() {
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
          <Link to="/day-048" className="day001-nav-btn day001-nav-prev">← Prereq 32</Link>
          <p className="day001-datetime">Prerequisite · Gen AI 33</p>
          <Link to="/day-050" className="day001-nav-btn day001-nav-next">Prereq 34 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Prerequisite</span><span>Gen AI</span><span>Lecture 33</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">PREREQ 33 <span aria-hidden="true">🎓</span></h1>
              <p className="day001-day-theme">CLASSIFICATION IN C++ — LOGISTIC REGRESSION</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '33%' }} /></div>

        <p className="day001-summary">
          Lecture 33 — classification in <strong>C++</strong>. The task: predict student <strong>placement (1/0)</strong>{' '}
          from <strong>dsa, projects, iq, attendance</strong> in a CSV. First <strong>normalize</strong> each feature
          with <code>(v − min)/(max − min)</code> so different scales don’t dominate. The model is one{' '}
          <strong>weight per feature + bias</strong>; the <strong>weighted sum</strong> goes through{' '}
          <strong>sigmoid</strong> to a probability, thresholded at <strong>0.5</strong>. It <strong>trains</strong>{' '}
          with gradient descent using <code>error = actual − predicted</code>. That’s a complete logistic-regression
          classifier, by hand. <em>Next: many classes with softmax.</em>
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

        <CardSection icon="📊" title="THE DATA" cards={DATA} columns={2} />
        <CardSection icon="🧮" title="MODEL · PREDICT · TRAIN" cards={MODEL} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#LogisticRegression</span><span>#Cpp</span><span>#FirstPrinciples</span>
        </footer>
      </div>
    </div>
  );
}
