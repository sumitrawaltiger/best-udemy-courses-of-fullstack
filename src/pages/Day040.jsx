import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture42';

const LEARNT_TODAY = [
  { title: 'Images break dense networks', text: 'a 28×28 digit flattened into 784 neurons already needs 100K+ weights in the first layer' },
  { title: 'Flattening destroys structure', text: 'row-by-row flattening throws away which pixels are neighbours — all spatial information is lost' },
  { title: 'It doesn’t scale', text: 'a real 224×224 image = 50,176 inputs; the first dense layer alone would be ~6.4M weights' },
  { title: 'Convolution', text: 'slide a small filter (e.g. 3×3) across the image; at each spot it measures how well its pattern matches' },
  { title: 'Feature maps', text: 'each filter produces a map showing where its pattern (edges, corners…) appears — 32 filters → 32 maps' },
  { title: 'Shared weights', text: 'the same tiny filter is reused everywhere, so a few numbers replace millions — and neighbours stay neighbours' },
  { title: 'Pooling', text: 'nearby values are redundant, so shrink each map (e.g. max-pool) — smaller, but the pattern survives' },
  { title: 'Then classify', text: 'stacked conv + pool layers feed a small dense head + softmax → the digit (the "7" fires at 0.89)' },
];

const PROBLEM = [
  {
    icon: '💥', title: 'Dense Layers Explode', titleClass: 'card-title-cyan', subtitle: 'Too Many Weights',
    description:
      'Flatten a 28×28 image to 784 inputs and connect it to 128 hidden neurons — that’s 100,352 weights in one layer. Scale to a 224×224 photo and it’s millions. Dense nets don’t fit images.',
    code: '// 28×28  → 784 inputs × 128 = 100,352 weights\n// 224×224 → 50,176 × 128  ≈ 6.4M weights\n// ... in the FIRST layer alone',
  },
  {
    icon: '🧩', title: 'Structure Is Lost', titleClass: 'card-title-purple', subtitle: 'Neighbours Forgotten',
    description:
      'Flattening reads pixels row by row into one long column, so the network no longer knows which pixels sat next to each other. For images, that adjacency is exactly the signal.',
    code: '// flatten: [row0][row1][row2]...\n// pixel (10,10) and (11,10) now far apart\n// spatial meaning destroyed',
  },
];

const CNN = [
  {
    icon: '🔍', title: 'Convolution', titleClass: 'card-title-cyan', subtitle: 'Slide A Filter',
    description:
      'A small filter (e.g. 3×3) slides across the image. At each position it measures how strongly its pattern matches — producing a feature map that highlights edges, corners, or textures.',
    code: '// 3×3 filter slides over 28×28\n// → 26×26 feature map\n// 32 filters → 32 feature maps',
  },
  {
    icon: '♻️', title: 'Shared Weights', titleClass: 'card-title-purple', subtitle: 'A Few Numbers',
    description:
      'The same filter is reused at every location, so nine numbers detect an edge anywhere in the image. Far fewer weights than a dense layer — and neighbouring pixels stay neighbours.',
    code: '// one 3×3 filter = 9 weights\n// reused across the whole image\n// vs. millions in a dense layer',
  },
  {
    icon: '🗜️', title: 'Pooling', titleClass: 'card-title-amber', subtitle: 'Shrink, Keep Meaning',
    description:
      'Nearby feature-map values are redundant (an edge at (10,10) and (10,11) is the same edge). Pooling downsamples each map — smaller grids, less compute, the pattern preserved.',
    code: '// 2×2 max-pool: keep the strongest\n// 26×26 → 13×13\n// then conv → pool → ... → dense + softmax',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 42', titleClass: 'card-title-cyan', subtitle: 'CNNs',
    description:
      'The convolutional-neural-network material in the STRIKE GenAI repo — why dense fails on images, plus convolution and pooling.',
    link: { href: GH_LECTURE, label: 'Open Lecture 42 →', external: true },
  },
  {
    icon: '🧠', title: 'Same Foundations', titleClass: 'card-title-purple', subtitle: 'Different Data',
    description:
      'Still weights, ReLU, softmax and gradient descent from the earlier days — reshaped for images. Convolution is the trick that made deep learning practical for vision.',
    footer: 'image → conv → pool → ... → dense → softmax',
  },
  {
    icon: '🔜', title: 'Next: Lecture 43', titleClass: 'card-title-amber', subtitle: 'Day 41 Preview',
    description:
      'The neural-net + LLM foundations continue in the STRIKE GenAI course — tokens, embeddings, attention and vision building toward the full picture.',
    link: { href: '/day-041', label: 'Go to Day 41 →' },
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

export default function Day040() {
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
          <Link to="/day-039" className="day001-nav-btn day001-nav-prev">← Day 39</Link>
          <p className="day001-datetime">Agentic AI Day 40</p>
          <Link to="/day-041" className="day001-nav-btn day001-nav-next">Day 41 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 42</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 40 <span aria-hidden="true">🔍</span></h1>
              <p className="day001-day-theme">CONVOLUTIONAL NEURAL NETWORKS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '40%' }} /></div>

        <p className="day001-summary">
          Lecture 42 — images break dense networks. A tiny <strong>28×28</strong> digit flattened to{' '}
          <strong>784 inputs</strong> already needs <strong>100K+ weights</strong> in the first layer, and flattening{' '}
          <strong>destroys which pixels are neighbours</strong>. Scale to 224×224 and it’s millions of weights.{' '}
          <strong>Convolution</strong> fixes both: slide a small <strong>3×3 filter</strong> across the image to build{' '}
          <strong>feature maps</strong> of edges and corners, <strong>reusing</strong> the same few weights everywhere
          while keeping neighbours together. <strong>Pooling</strong> then shrinks each map without losing the pattern.
          Stack conv + pool, finish with a small dense head + <strong>softmax</strong>, and the <code>"7"</code> neuron
          fires at 0.89. <em>Same foundations — reshaped for vision.</em>
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

        <CardSection icon="💥" title="WHY DENSE FAILS" cards={PROBLEM} columns={2} />
        <CardSection icon="🔍" title="THE CNN IDEA" cards={CNN} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#CNN</span><span>#DeepLearning</span><span>#FirstPrinciples</span>
        </footer>
      </div>
    </div>
  );
}
