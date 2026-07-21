import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture40';

const LEARNT_TODAY = [
  { title: 'Ids aren’t meaning', text: 'a token id like 4821 is just a label — the number itself carries no information about the word' },
  { title: 'The embedding layer', text: 'a big lookup table: every token id maps to a learned vector of numbers (e.g. 768 dimensions)' },
  { title: 'Meaning as geometry', text: 'the vector is the word’s meaning — similar words end up close together in that 768-D space' },
  { title: 'It’s just weights', text: 'the table is vocab_size × 768 numbers, all learned by gradient descent like every other weight' },
  { title: 'The scale is huge', text: 'a 10K vocab × 768 dims is ~7.7M numbers in the embedding table alone — and real vocabs are bigger' },
  { title: 'One row per token', text: 'the sentence "The chai was too hot" becomes a stack of 768-length vectors, one per token' },
  { title: 'Learned, not fixed', text: 'embeddings start random and are shaped by training so that geometry reflects real usage' },
  { title: 'Input to the network', text: 'these vectors are what attention and the deeper layers actually operate on' },
];

const IDEA = [
  {
    icon: '🧭', title: 'Id → Vector', titleClass: 'card-title-cyan', subtitle: 'The Lookup Table',
    description:
      'The embedding layer is a table with one row per token in the vocabulary. Feed it an id and it returns that row — a dense vector of (say) 768 numbers. That vector is the token’s representation.',
    code: '// vocab_size rows × 768 columns\n// id 4821 → row 4821 → [0.12, -0.94, ... 768]\n// "The chai" → two 768-length vectors',
  },
  {
    icon: '📐', title: 'Meaning As Geometry', titleClass: 'card-title-purple', subtitle: 'Close = Similar',
    description:
      'Because the vectors are learned, words used alike land near each other. Distance and direction encode relationships — the "king − man + woman ≈ queen" idea, at 768 dimensions.',
    code: '// similar meaning → small distance\n// king - man + woman ≈ queen\n// 768 dims = 768 subtle features',
  },
];

const SCALE = [
  {
    icon: '🔢', title: 'It’s All Weights', titleClass: 'card-title-cyan', subtitle: 'Learned By Training',
    description:
      'The embedding table isn’t hand-made. It starts as random numbers and gradient descent nudges every value so the geometry lines up with how words actually behave.',
    code: '// embedding[id] starts random\n// training reshapes each row\n// → geometry reflects real usage',
  },
  {
    icon: '📈', title: 'The Numbers Add Up', titleClass: 'card-title-purple', subtitle: 'Millions Of Values',
    description:
      'Even a modest 10,000-token vocabulary at 768 dims is 10,000 × 768 ≈ 7.7 million numbers — just for embeddings. Real models use far larger vocabularies and dimensions.',
    code: '// 10,000 × 768 ≈ 7.7M numbers\n// (embedding table only!)\n// bigger vocab / dims → billions',
  },
  {
    icon: '📥', title: 'The Model’s Real Input', titleClass: 'card-title-amber', subtitle: 'Vectors, Not Text',
    description:
      'After embedding, the sentence is a stack of vectors — one row per token. Everything downstream (attention, the deeper layers) works on these numbers, never on the letters.',
    code: '// "The chai was too hot"\n// → [v_the, v_chai, v_was, v_too, v_hot]\n// each v is 768 numbers → into attention',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 40', titleClass: 'card-title-cyan', subtitle: 'Embeddings',
    description:
      'The embedding-layer material in the STRIKE GenAI repo — token ids to 768-dimension vectors, and the weight counts behind them.',
    link: { href: GH_LECTURE, label: 'Open Lecture 40 →', external: true },
  },
  {
    icon: '🧠', title: 'Ties Back To Day 8', titleClass: 'card-title-purple', subtitle: 'Meaning As Geometry',
    description:
      'This is the same "embeddings" idea from the RAG foundation — now placed as the first learned layer inside the LLM itself.',
    footer: 'token id → lookup → 768-D vector → attention',
  },
  {
    icon: '🔜', title: 'Next: Attention', titleClass: 'card-title-amber', subtitle: 'Prereq 39 Preview',
    description:
      'Tomorrow — Lecture 41: self-attention. Query, Key and Value let every token look at the others so "bank" means the right thing in context.',
    link: { href: '/day-055', label: 'Go to Prereq 39 →' },
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

export default function Day054() {
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
          <Link to="/day-053" className="day001-nav-btn day001-nav-prev">← Prereq 37</Link>
          <p className="day001-datetime">Prerequisite · Gen AI 38</p>
          <Link to="/day-055" className="day001-nav-btn day001-nav-next">Prereq 39 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Prerequisite</span><span>Gen AI</span><span>Lecture 40</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">PREREQ 38 <span aria-hidden="true">🧭</span></h1>
              <p className="day001-day-theme">EMBEDDINGS — TOKEN IDS TO MEANING VECTORS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '38%' }} /></div>

        <p className="day001-summary">
          Lecture 40 — a token id like <code>4821</code> is just a label; it carries no meaning. The{' '}
          <strong>embedding layer</strong> fixes that: a big lookup table maps every id to a learned{' '}
          <strong>vector of ~768 numbers</strong>. That vector <em>is</em> the word’s meaning —{' '}
          <strong>similar words sit close together</strong> in the space. It’s just weights, learned by gradient
          descent, and the <strong>scale is huge</strong>: even a 10K vocab × 768 dims is ~7.7M numbers in the table
          alone. A sentence becomes a <strong>stack of vectors</strong>, one row per token — and that stack, not the
          text, is what the rest of the network operates on. <em>Next: attention.</em>
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

        <CardSection icon="🧭" title="THE EMBEDDING IDEA" cards={IDEA} columns={2} />
        <CardSection icon="📈" title="WEIGHTS & SCALE" cards={SCALE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#Embeddings</span><span>#LLM</span><span>#FirstPrinciples</span>
        </footer>
      </div>
    </div>
  );
}
