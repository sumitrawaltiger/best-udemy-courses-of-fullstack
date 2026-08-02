import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TRANSFORMER_YT = 'https://www.youtube.com/watch?v=4Bdc55j80LI';
const PAPER = 'https://arxiv.org/abs/1706.03762';

const LEARNT_TODAY = [
  { title: 'Why transformers', text: 'parallelize sequence modeling — no step-by-step RNN; attention links any pair of tokens' },
  { title: 'Self-attention', text: 'each token builds a new representation from a weighted mix of all tokens' },
  { title: 'Multi-head', text: 'several attention heads in parallel learn different relation types (syntax, coref, …)' },
  { title: 'Positional encoding', text: 'attention has no inherent order — add position signals so “dog bites man” ≠ reverse' },
  { title: 'Encoder stack', text: 'layers of self-attention + feed-forward + residual + layer norm' },
  { title: 'Decoder stack', text: 'masked self-attention (no peeking ahead) + cross-attention to encoder + FFN' },
  { title: 'Scaled dot-product', text: 'softmax(QKᵀ/√d_k)V — the √d_k scale keeps softmax from getting too sharp' },
  { title: 'Gen AI foundation', text: 'GPT = decoder stack; BERT = encoder stack; T5/BART = full encoder-decoder' },
];

const CORE = [
  {
    icon: '⚡', title: 'Self-Attention Block', titleClass: 'card-title-cyan', subtitle: 'Core Op',
    description:
      'Project tokens to Q, K, V. Softmax over keys gives weights; mix values. Residuals + LayerNorm stabilize deep stacks.',
    code: 'Attn = softmax(QKᵀ / √d) V\nout = LayerNorm(x + Attn)\nout = LayerNorm(out + FFN(out))',
  },
  {
    icon: '🧠', title: 'Multi-Head', titleClass: 'card-title-purple', subtitle: 'Many Views',
    description:
      'Split into h heads, attend in smaller spaces, concatenate, project back. Richer patterns than one head alone.',
    code: 'heads = [Attn_i(Q_i,K_i,V_i)]\nMultiHead = Concat(heads) W_o',
  },
  {
    icon: '📍', title: 'Positions', titleClass: 'card-title-amber', subtitle: 'Order Signal',
    description:
      'Sinusoidal or learned embeddings added to token embeddings so the model knows absolute/relative position.',
    code: 'x = token_emb + pos_emb\n# then into encoder/decoder',
  },
];

const PRACTICE = [
  {
    icon: '🏗️', title: 'Full Sketch', titleClass: 'card-title-cyan', subtitle: 'Encoder-Decoder',
    description:
      'Encoder: bidirectional self-attn. Decoder: causal mask + cross-attn to encoder outputs. Softmax over vocab for next token.',
    code: 'src → Encoder → memory\ntgt → Decoder(memory) → logits',
  },
  {
    icon: '🔒', title: 'Causal Mask', titleClass: 'card-title-purple', subtitle: 'No Cheating',
    description:
      'When generating left-to-right, future positions get -∞ before softmax so the model cannot see tomorrow’s words.',
    code: '// mask[i,j] = -inf if j > i\n'// else 0',
  },
  {
    icon: '🔜', title: 'Next: Gen AI Intro', titleClass: 'card-title-amber', subtitle: 'Day 24 Preview',
    description: 'Tomorrow — what Generative AI is, how ChatGPT-style models are trained, LLM evolution.',
    link: { href: '/agentic-day-24', label: 'Go to Day 24 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Transformers Architecture', titleClass: 'card-title-cyan', subtitle: 'PY Module 23',
    description: 'Full lesson — self-attention, multi-head, positions, full transformer.',
    link: { href: '/python/learn/transformers-architecture', label: 'Open PY Module 23 →' },
  },
  {
    icon: '🎬', title: 'Transformers Explained', titleClass: 'card-title-purple', subtitle: 'StatQuest',
    description: 'Video walkthrough of the transformer architecture.',
    link: { href: TRANSFORMER_YT, label: 'Watch transformers →', external: true },
  },
  {
    icon: '📄', title: 'Attention Is All You Need', titleClass: 'card-title-amber', subtitle: 'Paper',
    description: 'The original 2017 paper that introduced transformers.',
    link: { href: PAPER, label: 'Open arXiv paper →', external: true },
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

export default function AgenticDay23() {
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
          <Link to="/agentic-day-22" className="day001-nav-btn day001-nav-prev">← Day 22</Link>
          <p className="day001-datetime">Agentic AI Day 23 · 27 Aug 2026</p>
          <Link to="/agentic-day-24" className="day001-nav-btn day001-nav-next">Day 24 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Gen AI</span><span>Transformers</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 23 <span aria-hidden="true">⚡</span></h1>
              <p className="day001-day-theme">TRANSFORMERS ARCHITECTURE</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · GEN AI</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '15%' }} /></div>

        <p className="day001-summary">
          Day 23 opens Phase 4. Master <strong>self-attention</strong>, <strong>multi-head</strong>, and{' '}
          <strong>positional encoding</strong> — the architecture behind modern LLMs.
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

        <CardSection icon="⚡" title="TRANSFORMER BLOCKS" cards={CORE} columns={3} />
        <CardSection icon="🏗️" title="FULL MODEL" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Transformers</span><span>#Day23</span><span>#GenAI</span><span>#Attention</span>
        </footer>
      </div>
    </div>
  );
}
