import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ATTN_YT = 'https://www.youtube.com/watch?v=XSSTuhyAmnI';

const LEARNT_TODAY = [
  { title: 'Why attention', text: 'the decoder should look at the right encoder steps for each output word — not one fixed vector' },
  { title: 'Attention scores', text: 'compare decoder state to every encoder hidden state → soft weights that sum to 1' },
  { title: 'Context vector', text: 'weighted sum of encoder states — a fresh “focus” for each decode step' },
  { title: 'Seq2Seq + attention', text: 'classic Bahdanau/Luong attention made long translation workable' },
  { title: 'Alignment intuition', text: 'attention heatmaps often show which source word the model is using now' },
  { title: 'Self-attention preview', text: 'every token attends to every other token in the same sequence — core of transformers' },
  { title: 'Cost', text: 'attention is O(n²) in sequence length — fine for sentences, heavy for huge docs without tricks' },
  { title: 'Next leap', text: 'drop recurrence, keep attention → transformers (Day 23)' },
];

const CORE = [
  {
    icon: '🔍', title: 'Score & Softmax', titleClass: 'card-title-cyan', subtitle: 'Where To Look',
    description:
      'For decoder state s_t, score each encoder h_i (dot product or a small MLP), then softmax to get attention weights α_i.',
    code: 'score_i = s_t · h_i\nα = softmax(scores)\ncontext = Σ α_i * h_i',
  },
  {
    icon: '🎯', title: 'Per-Step Focus', titleClass: 'card-title-purple', subtitle: 'Dynamic Context',
    description:
      'Each output token gets its own context. Translating “chat” may focus on different source positions than “noir”.',
    code: 'for t in target_steps:\n  ctx = attend(s_t, encoder_hs)\n  y_t = decode(s_t, ctx)',
  },
  {
    icon: '🪞', title: 'Self-Attention Peek', titleClass: 'card-title-amber', subtitle: 'Same Sequence',
    description:
      'Query, key, value from the same sequence. “The animal didn’t cross the street because it was tired” — “it” attends to “animal”.',
    code: 'Q, K, V from tokens\nattn = softmax(QKᵀ/√d) V',
  },
];

const PRACTICE = [
  {
    icon: '🗺️', title: 'Read Alignments', titleClass: 'card-title-cyan', subtitle: 'Debug',
    description:
      'Plot α weights. If they are uniform mush, the model is not focusing — check length, masking, or training.',
    code: '// heatmap: rows=decode steps\n'// cols=source tokens',
  },
  {
    icon: '🧪', title: 'Tiny Demo', titleClass: 'card-title-purple', subtitle: 'Hands-On',
    description:
      'Implement toy attention over 4 encoder vectors with a fixed query — print the weights and context.',
    code: 'α = softmax(scores)\nctx = α @ H',
  },
  {
    icon: '🔜', title: 'Next: Transformers', titleClass: 'card-title-amber', subtitle: 'Day 23 Preview',
    description: 'Tomorrow — self-attention, multi-head, positional encoding, full encoder-decoder.',
    link: { href: '/agentic-day-23', label: 'Go to Day 23 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Attention Mechanism', titleClass: 'card-title-cyan', subtitle: 'PY Module 22',
    description: 'Full lesson — attention intuition, scores, Seq2Seq+attention, self-attention preview.',
    link: { href: '/python/learn/attention-mechanism', label: 'Open PY Module 22 →' },
  },
  {
    icon: '🎬', title: 'Attention Explained', titleClass: 'card-title-purple', subtitle: 'StatQuest',
    description: 'Clear video on how attention works.',
    link: { href: ATTN_YT, label: 'Watch attention →', external: true },
  },
  {
    icon: '🧩', title: 'Mental Model', titleClass: 'card-title-amber', subtitle: 'Remember',
    description: 'Attention = soft lookup over memory (encoder states or tokens) keyed by the current query.',
    footer: 'query → soft keys → weighted values',
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

export default function AgenticDay22() {
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
          <Link to="/agentic-day-21" className="day001-nav-btn day001-nav-prev">← Day 21</Link>
          <p className="day001-datetime">Agentic AI Day 22 · 22 Aug 2026</p>
          <Link to="/agentic-day-23" className="day001-nav-btn day001-nav-next">Day 23 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Advanced DL</span><span>Attention</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 22 <span aria-hidden="true">🔍</span></h1>
              <p className="day001-day-theme">ATTENTION MECHANISM</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · ADVANCED DL</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '15%' }} /></div>

        <p className="day001-summary">
          Day 22 teaches focus. <strong>Attention</strong> lets the decoder soft-search encoder states —
          the idea that unlocks <strong>transformers</strong> tomorrow.
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

        <CardSection icon="🔍" title="HOW ATTENTION WORKS" cards={CORE} columns={3} />
        <CardSection icon="🗺️" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Attention</span><span>#Day22</span><span>#DeepLearning</span><span>#NLP</span>
        </footer>
      </div>
    </div>
  );
}
