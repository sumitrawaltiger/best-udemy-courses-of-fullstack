import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const SEQ2SEQ_YT = 'https://www.youtube.com/watch?v=L8HKweZIOmg';

const LEARNT_TODAY = [
  { title: 'Seq2Seq idea', text: 'map an input sequence to an output sequence of a different length — translate, summarize, chat' },
  { title: 'Encoder', text: 'reads the full source and compresses it into a context (often the final hidden state)' },
  { title: 'Decoder', text: 'generates the target one token at a time, conditioned on that context and previous outputs' },
  { title: 'Teacher forcing', text: 'during training, feed the true previous token instead of the model’s own prediction — faster learning, train/serve gap' },
  { title: 'Inference', text: 'at test time the decoder must use its own previous predictions (greedy or beam search)' },
  { title: 'Bottleneck', text: 'stuffing a long sentence into one fixed vector loses detail — attention (Day 22) fixes this' },
  { title: 'Classic uses', text: 'machine translation, summarization, speech-to-text pipelines historically used Seq2Seq RNNs' },
  { title: 'Bridge forward', text: 'encoder-decoder + attention → transformers — the spine of modern Gen AI' },
];

const CORE = [
  {
    icon: '📥', title: 'Encoder', titleClass: 'card-title-cyan', subtitle: 'Read Source',
    description:
      'Run an RNN (or later a transformer) over the input tokens. The last hidden state is a summary of the whole source sentence.',
    code: 'h = zeros()\nfor x in source:\n  h = encoder_cell(x, h)\ncontext = h',
  },
  {
    icon: '📤', title: 'Decoder', titleClass: 'card-title-purple', subtitle: 'Write Target',
    description:
      'Start with a special <SOS> token. At each step, emit the next target token using context + previous decoder state.',
    code: 'y = "<SOS>"\nfor step in range(max_len):\n  y, state = decoder(y, context, state)\n  if y == "<EOS>": break',
  },
  {
    icon: '🎓', title: 'Teacher Forcing', titleClass: 'card-title-amber', subtitle: 'Train Trick',
    description:
      'Training often feeds the gold previous word instead of the predicted one so errors do not snowball — but inference still uses predictions.',
    code: '# train: next_input = true_prev\n# infer: next_input = pred_prev',
  },
];

const PRACTICE = [
  {
    icon: '⚠️', title: 'Fixed-Vector Limit', titleClass: 'card-title-cyan', subtitle: 'Why Attention',
    description:
      'One context vector for a paragraph is too small. Later steps forget early words — attention lets the decoder peek at every encoder state.',
    code: '// long source → weak context\n'// → attention over all h_i',
  },
  {
    icon: '🧪', title: 'Tiny Project', titleClass: 'card-title-purple', subtitle: 'Practice',
    description:
      'Toy date-normalization or reverse-string Seq2Seq to feel encoder → decoder flow before real translation data.',
    code: '"21-08-2026" → "21 August 2026"',
  },
  {
    icon: '🔜', title: 'Next: Attention', titleClass: 'card-title-amber', subtitle: 'Day 22 Preview',
    description: 'Tomorrow — attention scores, Seq2Seq with attention, and a preview of self-attention.',
    link: { href: '/agentic-day-22', label: 'Go to Day 22 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Seq2Seq Architecture', titleClass: 'card-title-cyan', subtitle: 'PY Module 21',
    description: 'Full lesson — encoder-decoder flow, teacher forcing, limits, applications.',
    link: { href: '/python/learn/seq2seq-architecture', label: 'Open PY Module 21 →' },
  },
  {
    icon: '🎬', title: 'Seq2Seq Models', titleClass: 'card-title-purple', subtitle: 'DeepLearning.AI',
    description: 'Video intuition for sequence-to-sequence models.',
    link: { href: SEQ2SEQ_YT, label: 'Watch Seq2Seq →', external: true },
  },
  {
    icon: '🗺️', title: 'Path So Far', titleClass: 'card-title-amber', subtitle: 'Advanced DL',
    description: 'RNNs → LSTM/BiRNN → GPT/BERT ideas → Seq2Seq. Attention and transformers come next.',
    footer: 'encoder-decoder → attention → transformers',
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

export default function AgenticDay21() {
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
          <Link to="/agentic-day-20" className="day001-nav-btn day001-nav-prev">← Day 20</Link>
          <p className="day001-datetime">Agentic AI Day 21 · 24 Jul 2026</p>
          <Link to="/agentic-day-22" className="day001-nav-btn day001-nav-next">Day 22 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Advanced DL</span><span>Seq2Seq</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 21 <span aria-hidden="true">🔀</span></h1>
              <p className="day001-day-theme">SEQ2SEQ ARCHITECTURE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '14%' }} /></div>

        <p className="day001-summary">
          Day 21 connects read and write. An <strong>encoder</strong> compresses the source; a{' '}
          <strong>decoder</strong> generates the target — the classic <strong>Seq2Seq</strong> pattern behind translation and more.
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

        <CardSection icon="🔀" title="ENCODER → DECODER" cards={CORE} columns={3} />
        <CardSection icon="⚠️" title="LIMITS &amp; PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Seq2Seq</span><span>#Day21</span><span>#DeepLearning</span><span>#NLP</span>
        </footer>
      </div>
    </div>
  );
}
