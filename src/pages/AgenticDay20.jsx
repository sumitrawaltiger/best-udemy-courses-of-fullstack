import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const BERT_YT = 'https://www.youtube.com/watch?v=xI0HHm6bjvs';

const LEARNT_TODAY = [
  { title: 'Encoder', text: 'reads the entire input at once and builds a representation that sees both left and right context together' },
  { title: 'BERT', text: 'a stack of encoder blocks, pre-trained on huge amounts of unlabeled text before ever seeing a specific task' },
  { title: 'Masked LM pre-training', text: 'randomly hide about 15% of input tokens and train BERT to predict them using context from both sides' },
  { title: 'BERT configurations', text: 'BERT-Base (12 layers) and BERT-Large (24 layers) are the two standard published sizes' },
  { title: 'Fine-tuning', text: 'add a small task-specific head on top of pretrained BERT, then retrain briefly on labeled data for that task' },
  { title: 'Why fine-tuning is cheap', text: 'BERT already understands language broadly, so the task-specific step needs far less labeled data than training from scratch' },
  { title: 'RoBERTa', text: 'BERT trained longer, on more data, with a tuned pre-training recipe — same architecture, better results' },
  { title: 'DistilBERT', text: 'a smaller, faster, distilled version of BERT that keeps most of its performance at a fraction of the size' },
];

const ENCODER_CORE = [
  {
    icon: '📖', title: 'Encoder Intro', titleClass: 'card-title-cyan', subtitle: 'Reads Everything At Once',
    description:
      'Unlike a decoder, an encoder sees the full input in one pass — every token can attend to every other token, both before and after it.',
    code: 'representation = encoder(full_sentence)\n# every token already knows the whole sentence',
  },
  {
    icon: '🎭', title: 'Masked LM Pre-training', titleClass: 'card-title-purple', subtitle: 'Fill In The Blank',
    description:
      'BERT hides ~15% of tokens with a [MASK] and learns to predict them from context on both sides — a self-supervised task needing no labels.',
    code: '# "The [MASK] sat on the mat"\n# model predicts: "cat"',
  },
  {
    icon: '📐', title: 'BERT Configurations', titleClass: 'card-title-amber', subtitle: 'Base vs Large',
    description:
      'BERT-Base has 12 encoder layers; BERT-Large has 24. Larger models capture more nuance but cost more to run.',
    code: '# BERT-Base:  12 layers, 110M params\n# BERT-Large: 24 layers, 340M params',
  },
];

const FINE_TUNING = [
  {
    icon: '🎯', title: 'BERT Fine-Tuning', titleClass: 'card-title-cyan', subtitle: 'Adapt To A Task',
    description:
      'Attach a small classification (or other) head to pretrained BERT, then train briefly on labeled examples for the specific task at hand.',
    code: 'bert_output = bert(input_ids)\nlogits = classification_head(bert_output[CLS])\nloss = cross_entropy(logits, label)',
  },
  {
    icon: '🪶', title: 'RoBERTa & DistilBERT', titleClass: 'card-title-purple', subtitle: 'Two Popular Variants',
    description:
      'RoBERTa squeezes out more accuracy with a longer, better-tuned pre-training run. DistilBERT trades a little accuracy for roughly half the size and double the speed.',
  },
  {
    icon: '🔜', title: 'What Comes Next', titleClass: 'card-title-amber', subtitle: 'Day 21 Preview',
    description: 'Next in the curriculum — Seq2Seq encoder-decoder models and the path toward the full Transformer.',
    link: { href: '/agentic-day-21', label: 'Go to Day 21 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Encoders & BERT', titleClass: 'card-title-cyan', subtitle: 'PY Module 20',
    description: 'Full lesson — encoder intro, BERT configurations, masked LM pre-training, and fine-tuning.',
    link: { href: '/python/learn/encoders-and-bert', label: 'Open PY Module 20 →' },
  },
  {
    icon: '🎬', title: 'BERT Explained', titleClass: 'card-title-purple', subtitle: 'CodeEmporium',
    description: 'Clear breakdown of BERT\'s architecture and masked language modeling.',
    link: { href: BERT_YT, label: 'Watch BERT explained →', external: true },
  },
  {
    icon: '🎉', title: 'Advanced DL Complete', titleClass: 'card-title-amber', subtitle: 'Days 16–20 Done',
    description: 'ANN, LSTM, BiRNN, GPT decoders, and BERT encoders are covered — the two halves of the Transformer are now both understood on their own.',
    link: { href: '/', label: 'Back to Home →' },
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

export default function AgenticDay20() {
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
          <Link to="/agentic-day-19" className="day001-nav-btn day001-nav-prev">← Day 19</Link>
          <p className="day001-datetime">Agentic AI Day 20 · 7 Sep 2026</p>
          <Link to="/agentic-day-21" className="day001-nav-btn day001-nav-next">Day 21 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 2</span><span>BERT</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 20 <span aria-hidden="true">📖</span></h1>
              <p className="day001-day-theme">ENCODERS &amp; BERT</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '13%' }} /></div>

        <p className="day001-summary">
          The other half of the Transformer. An <strong>encoder</strong> reads a whole input at once with
          full bidirectional context, and <strong>BERT</strong> pre-trains that encoder with{' '}
          <strong>masked language modeling</strong> before <strong>fine-tuning</strong> it — cheaply — for
          a specific task. <strong>RoBERTa</strong> and <strong>DistilBERT</strong> are the two most common
          variants in practice.
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

        <CardSection icon="📖" title="ENCODER CORE" cards={ENCODER_CORE} columns={3} />
        <CardSection icon="🎯" title="FINE-TUNING &amp; VARIANTS" cards={FINE_TUNING} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#BERT</span><span>#Day20</span><span>#DeepLearning</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
