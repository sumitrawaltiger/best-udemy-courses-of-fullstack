import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GPT_YT = 'https://www.youtube.com/watch?v=kCc8FmEb1nY';

const LEARNT_TODAY = [
  { title: 'Decoder', text: 'generates output one token at a time, each new token conditioned on everything generated so far' },
  { title: 'GPT architecture', text: 'a tall stack of decoder blocks — masked self-attention plus a feed-forward layer, repeated many times' },
  { title: 'Masked attention', text: 'a token can only attend to itself and the tokens before it — never ones that come after' },
  { title: 'Why masking matters', text: 'without it, predicting the next word could "cheat" by peeking at the very answer it\'s supposed to predict' },
  { title: 'GPT training', text: 'one simple objective — predict the next token — repeated over a massive text corpus' },
  { title: 'Text generation', text: 'at each step, sample the next token from the model\'s predicted probability distribution, then feed it back in' },
  { title: 'Temperature', text: 'a low temperature makes output safe and predictable; a high temperature makes it more random and creative' },
  { title: 'Bridge to BERT', text: 'GPT only ever reads left-to-right; tomorrow\'s BERT reads both directions, trading generation for understanding' },
];

const DECODER_CORE = [
  {
    icon: '🗣️', title: 'Decoder Intro', titleClass: 'card-title-cyan', subtitle: 'One Token At A Time',
    description:
      'A decoder produces output autoregressively — each new token is generated based on everything that came before it, including its own earlier outputs.',
    code: 'tokens = [BOS]\nwhile not done:\n    next_token = decoder(tokens)\n    tokens.append(next_token)',
  },
  {
    icon: '🚫', title: 'Masked Multi-Head Attention', titleClass: 'card-title-purple', subtitle: 'No Peeking Ahead',
    description:
      'A causal mask blocks each position from attending to any position after it, so the model can never cheat by looking at the token it\'s trying to predict.',
    code: '# attention scores for future positions → -infinity\n# softmax(-infinity) = 0, so future tokens are invisible',
  },
  {
    icon: '🏗️', title: 'GPT Architecture', titleClass: 'card-title-amber', subtitle: 'Stacked Decoder Blocks',
    description:
      'GPT is simply many decoder blocks stacked on top of each other — each one masked self-attention followed by a feed-forward layer.',
    code: 'for block in range(num_layers):\n    x = masked_self_attention(x)\n    x = feed_forward(x)',
  },
];

const TRAINING_GENERATION = [
  {
    icon: '📚', title: 'GPT Training', titleClass: 'card-title-cyan', subtitle: 'Predict The Next Token',
    description:
      'One deceptively simple objective — given the tokens so far, predict the next one — trained across a vast amount of text.',
    code: 'loss = cross_entropy(predicted_next_token, actual_next_token)',
  },
  {
    icon: '🎲', title: 'Sampling & Temperature', titleClass: 'card-title-purple', subtitle: 'Controlling Creativity',
    description:
      'Instead of always picking the single most likely token, sampling from the probability distribution — tuned by temperature — makes generated text feel more natural.',
    code: 'probs = softmax(logits / temperature)\nnext_token = sample(probs)',
  },
  {
    icon: '🔜', title: 'Next: BERT & Encoders', titleClass: 'card-title-amber', subtitle: 'Day 20 Preview',
    description: 'Tomorrow — the encoder side, masked language modeling, and fine-tuning BERT for real tasks.',
    link: { href: '/agentic-day-20', label: 'Go to Day 20 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Decoders & GPT Architecture', titleClass: 'card-title-cyan', subtitle: 'PY Module 19',
    description: 'Full lesson — decoder intro, GPT architecture, masked attention, training, and text generation.',
    link: { href: '/python/learn/decoders-and-gpt-architecture', label: 'Open PY Module 19 →' },
  },
  {
    icon: '🎬', title: 'GPT Explained', titleClass: 'card-title-purple', subtitle: 'Andrej Karpathy',
    description: 'A from-scratch, code-level walkthrough of how GPT actually works.',
    link: { href: GPT_YT, label: 'Watch GPT explained →', external: true },
  },
  {
    icon: '✅', title: 'Progress Check', titleClass: 'card-title-amber', subtitle: 'Day 19 Of 155',
    description: 'RNNs, LSTM, BiRNN, and now decoder-only GPT models — the generative side of modern NLP is coming together.',
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

export default function AgenticDay19() {
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
          <Link to="/agentic-day-18" className="day001-nav-btn day001-nav-prev">← Day 18</Link>
          <p className="day001-datetime">Agentic AI Day 19 · 22 Jul 2026</p>
          <Link to="/agentic-day-20" className="day001-nav-btn day001-nav-next">Day 20 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 2</span><span>GPT</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 19 <span aria-hidden="true">🗣️</span></h1>
              <p className="day001-day-theme">DECODERS &amp; GPT ARCHITECTURE</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · PHASE 2</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '12%' }} /></div>

        <p className="day001-summary">
          How GPT actually generates text. A <strong>decoder</strong> produces one token at a time using{' '}
          <strong>masked self-attention</strong> so it never peeks ahead, trained on a single objective —
          predict the next token — then <strong>sampled</strong> at generation time to produce fluent,
          controllable text.
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

        <CardSection icon="🗣️" title="DECODER CORE" cards={DECODER_CORE} columns={3} />
        <CardSection icon="🎲" title="TRAINING &amp; GENERATION" cards={TRAINING_GENERATION} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GPT</span><span>#Day19</span><span>#DeepLearning</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
