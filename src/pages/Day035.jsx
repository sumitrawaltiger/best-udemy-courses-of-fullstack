import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture35and36';
const GH_REPO = 'https://github.com/Rohitnegi9/STRIKEGenAI';

const LEARNT_TODAY = [
  { title: 'An LLM is next-token prediction', text: 'given the text so far, predict the single most likely next token — then repeat, one token at a time' },
  { title: 'It’s a giant classifier', text: 'the final layer is softmax over the whole vocabulary (~50,000 tokens) — exactly Day 34, at huge scale' },
  { title: 'Tokenization', text: 'text is split into tokens (words / sub-words) and each maps to an id in a fixed vocabulary' },
  { title: 'Embeddings', text: 'every token id becomes a dense vector (e.g. 768 numbers) — meaning captured as geometry' },
  { title: 'Meaning from context', text: 'the model adjusts each token’s vector using the surrounding words, so "bank" differs by sentence' },
  { title: 'Attention', text: '“Attention Is All You Need” — the Transformer lets every token look at every other token' },
  { title: 'Training = predict the next word', text: 'run over massive text; each miss updates weights via the same gradient descent from Days 28–34' },
  { title: 'Generation loops', text: 'predict a token, append it, feed it back, predict again — that stream of tokens is the answer' },
];

const CORE = [
  {
    icon: '🔮', title: 'Next-Token Prediction', titleClass: 'card-title-cyan', subtitle: 'The Whole Idea',
    description:
      'An LLM does one thing: read the tokens so far and predict the next one. Loop that and you get sentences, code, essays — all from repeatedly guessing the next token.',
    code: '// "The cat sat on the" → ?\n// output over vocab: {mat: 0.61, floor: 0.12, ...}\n// pick "mat", append, predict again',
  },
  {
    icon: '🏷️', title: 'Tokenization', titleClass: 'card-title-purple', subtitle: 'Text → Ids',
    description:
      'Text is broken into tokens — whole words or sub-word pieces — and each maps to an id in a fixed vocabulary of ~50,000 entries. Tokens, not letters, are the model’s unit.',
    code: '// "learning" → ["learn", "ing"] → [4821, 213]\n// vocabulary size ≈ 50,000 tokens',
  },
  {
    icon: '🧭', title: 'Embeddings', titleClass: 'card-title-amber', subtitle: 'Id → Vector',
    description:
      'Each token id becomes a dense vector of numbers (e.g. 768 dims). Similar meanings sit close together — the same "meaning as geometry" idea from the embeddings lecture.',
    code: '// 4821 → [0.12, -0.94, 0.33, ... 768 numbers]\n// king - man + woman ≈ queen',
  },
];

const HOW = [
  {
    icon: '👀', title: 'Attention', titleClass: 'card-title-cyan', subtitle: 'The Transformer',
    description:
      '"Attention Is All You Need" (2017). Attention lets every token look at every other token and pull in context, so a word’s vector reflects the whole sentence around it.',
    code: '// "river bank" vs "money bank"\n// attention reshapes "bank" using its neighbours\n// → the right meaning in context',
  },
  {
    icon: '🎯', title: 'The Output Layer', titleClass: 'card-title-purple', subtitle: '50K-Way Softmax',
    description:
      'The top of the network is a neuron per vocabulary token. Softmax turns those scores into a probability for every possible next token — Day 34’s softmax, just 50,000-wide.',
    code: '// final scores over 50,000 tokens\n// softmax → probability distribution\n// argmax (or sample) → next token',
  },
  {
    icon: '🏋️', title: 'Training', titleClass: 'card-title-amber', subtitle: 'Predict, Then Correct',
    description:
      'Feed it oceans of text with the next word hidden. Wrong guesses create cross-entropy loss and gradient descent nudges billions of weights — the exact loop from Days 28–34, scaled up.',
    code: '// hide next word, predict it\n// loss = cross-entropy(pred, actual)\n// backprop → update weights → repeat',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 35 & 36', titleClass: 'card-title-cyan', subtitle: 'How To Build An LLM',
    description:
      'The combined Lecture35and36 material in the STRIKE GenAI repo — tokens, embeddings, attention and next-token prediction tied together.',
    link: { href: GH_LECTURE, label: 'Open Lecture 35 & 36 →', external: true },
  },
  {
    icon: '📦', title: 'STRIKE GenAI Repo', titleClass: 'card-title-purple', subtitle: 'All Lectures',
    description:
      'The full Coder Army STRIKE GenAI course code — from the first Gemini call to agents, RAG, the AI Dev Team, and neural nets from scratch.',
    link: { href: GH_REPO, label: 'Open the repo →', external: true },
  },
  {
    icon: '🧵', title: 'It All Connects', titleClass: 'card-title-amber', subtitle: 'Where This Leads',
    description:
      'Neuron → gradient descent → ReLU → classification → softmax → LLM. The from-scratch detour explains what powers every agent from the earlier lectures.',
    link: { href: '/genai', label: 'Explore the GenAI track →' },
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

export default function Day035() {
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
          <Link to="/day-034" className="day001-nav-btn day001-nav-prev">← Day 34</Link>
          <p className="day001-datetime">Agentic AI Day 35</p>
          <Link to="/day-036" className="day001-nav-btn day001-nav-next">Day 36 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 35 &amp; 36</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 35 <span aria-hidden="true">🔮</span></h1>
              <p className="day001-day-theme">HOW TO BUILD AN LLM — TOKENS, EMBEDDINGS &amp; NEXT-TOKEN</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '35%' }} /></div>

        <p className="day001-summary">
          Lectures 35 &amp; 36 — it all comes together. An <strong>LLM is next-token prediction</strong>: read the
          text so far, predict the single most likely next token, append it, and repeat. Under the hood it’s a giant{' '}
          <strong>classifier</strong> — a <strong>50,000-way softmax</strong> over the vocabulary (exactly Day 34, at
          scale). Text is <strong>tokenized</strong> into ids, each id becomes an <strong>embedding</strong> vector
          (~768 numbers = meaning as geometry), and <strong>attention</strong> ("Attention Is All You Need") reshapes
          each token using its context. <strong>Training</strong> is just hiding the next word and correcting the guess
          with <code>cross-entropy</code> + gradient descent — the same loop from Days 28–34.{' '}
          <em>Neuron → gradient descent → ReLU → classification → softmax → LLM. (From the lecture material.)</em>
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

        <CardSection icon="🔮" title="THE CORE IDEA" cards={CORE} columns={3} />
        <CardSection icon="⚙️" title="HOW IT WORKS" cards={HOW} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#LLM</span><span>#Transformer</span><span>#FirstPrinciples</span>
        </footer>
      </div>
    </div>
  );
}
