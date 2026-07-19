import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture43';

const LEARNT_TODAY = [
  { title: 'Pooling shrinks feature maps', text: 'after convolution, downsample each map so the network is smaller and faster without losing the pattern' },
  { title: 'Max pooling', text: 'slide a 2×2 window and keep only the largest value — the strongest "this pattern is here" signal' },
  { title: 'Why it works', text: 'neighbouring activations are redundant; an edge at (10,10) and (10,11) is the same edge, so keep one' },
  { title: 'Translation tolerance', text: 'pooling makes detection robust — the pattern is found even if it shifts a few pixels' },
  { title: 'Stack conv + pool', text: 'the full CNN is conv → pool → conv → pool …, each block seeing larger, higher-level patterns' },
  { title: 'Shared filters stay tiny', text: 'Conv1 = 32 filters of 3×3×1 = 288 weights; Conv2 = 64 of 3×3×32 = 18,432 — far less than dense layers' },
  { title: 'Hierarchy of features', text: 'early layers find edges, later layers find corners, shapes, then whole objects' },
  { title: 'Then classify', text: 'flatten the last small maps → a dense layer → softmax → the digit (the "7" fires at 0.89)' },
];

const POOL = [
  {
    icon: '🗜️', title: 'Max Pooling', titleClass: 'card-title-cyan', subtitle: 'Keep The Strongest',
    description:
      'Slide a small window (usually 2×2) over a feature map and keep only the maximum value in each window. The grid halves in size but the strongest activations survive.',
    code: '// 2×2 window:\n// 0.8  0.6\n// 0.3  0.2   → max = 0.8\n// 26×26 map → 13×13 map',
  },
  {
    icon: '♻️', title: 'Why Downsample', titleClass: 'card-title-purple', subtitle: 'Redundant Neighbours',
    description:
      'Nearby feature-map values carry almost the same information — an edge detected at two adjacent pixels is one edge. Pooling drops the redundancy and adds tolerance to small shifts.',
    code: '// edge at (10,10) ≈ edge at (10,11)\n// keep one → smaller grid, same meaning\n// + robust to a few-pixel shift',
  },
];

const ARCH = [
  {
    icon: '🏗️', title: 'Stack The Blocks', titleClass: 'card-title-cyan', subtitle: 'Conv → Pool → Repeat',
    description:
      'A real CNN chains conv + pool blocks. Each block works on the previous block’s maps, so deeper layers see larger regions — edges, then corners, then shapes, then objects.',
    code: '// 28×28 → conv(32) → 32×26×26\n//       → maxpool → 32×13×13\n//       → conv(64) → pool → ... → dense',
  },
  {
    icon: '🔢', title: 'Count The Weights', titleClass: 'card-title-purple', subtitle: 'Filters Are Small',
    description:
      'Because filters are shared and tiny, parameter counts stay modest even as depth grows — a fraction of what a dense network on raw pixels would need.',
    code: 'Conv1: 32 × (3×3×1)   =    288\nConv2: 64 × (3×3×32)  = 18,432\nConv3: 128 × (3×3×64) = 73,728\nConv4: 128 × (3×3×128)=147,456',
  },
  {
    icon: '🎯', title: 'Head & Output', titleClass: 'card-title-amber', subtitle: 'Flatten → Softmax',
    description:
      'After the last conv/pool block the maps are small. Flatten them into a short vector, pass through a dense layer, and softmax picks the class — the digit "7" firing highest.',
    code: '// final small maps → flatten\n// → dense → softmax over 10 digits\n// "7" → 0.89',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 43', titleClass: 'card-title-cyan', subtitle: 'CNN Architecture',
    description:
      'The CNN pooling + full-architecture material in the STRIKE GenAI repo — convolution and pooling stacked into a real image classifier.',
    link: { href: GH_LECTURE, label: 'Open Lecture 43 →', external: true },
  },
  {
    icon: '🧠', title: 'Builds On Day 40', titleClass: 'card-title-purple', subtitle: 'Convolution → Pooling',
    description:
      'Day 40 introduced convolution and feature maps; today adds pooling and shows how blocks stack into a deep network that still counts its weights carefully.',
    footer: 'conv → pool → conv → pool → ... → dense → softmax',
  },
  {
    icon: '🔜', title: 'Next: Sequence Models', titleClass: 'card-title-amber', subtitle: 'Day 42 Preview',
    description:
      'Tomorrow — Lecture 44: RNNs and LSTMs for sequences, and why the Transformer replaced them for language.',
    link: { href: '/day-042', label: 'Go to Day 42 →' },
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

export default function Day041() {
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
          <Link to="/day-040" className="day001-nav-btn day001-nav-prev">← Day 40</Link>
          <p className="day001-datetime">Agentic AI Day 41</p>
          <Link to="/day-042" className="day001-nav-btn day001-nav-next">Day 42 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 43</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 41 <span aria-hidden="true">🗜️</span></h1>
              <p className="day001-day-theme">CNNs PART 2 — POOLING &amp; FULL ARCHITECTURE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '41%' }} /></div>

        <p className="day001-summary">
          Lecture 43 — finishing the CNN. After convolution builds feature maps, <strong>pooling</strong> shrinks them:{' '}
          slide a <strong>2×2 window</strong> and keep the <strong>max</strong> (<code>0.8 0.6 / 0.3 0.2 → 0.8</code>),
          halving the grid while keeping the strongest signal and adding tolerance to small shifts. The real network{' '}
          <strong>stacks conv + pool blocks</strong> so deeper layers see edges → corners → shapes → objects, and
          because filters are <strong>tiny and shared</strong> the weights stay modest (<code>Conv1 288</code>,{' '}
          <code>Conv2 18,432</code>, …). Finally <strong>flatten → dense → softmax</strong> picks the digit — the{' '}
          <code>"7"</code> firing at 0.89. <em>Next: sequences.</em>
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

        <CardSection icon="🗜️" title="POOLING" cards={POOL} columns={2} />
        <CardSection icon="🏗️" title="THE FULL ARCHITECTURE" cards={ARCH} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#CNN</span><span>#Pooling</span><span>#DeepLearning</span>
        </footer>
      </div>
    </div>
  );
}
