import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const BIRNN_YT = 'https://www.youtube.com/watch?v=4PBn55otIcg';

const LEARNT_TODAY = [
  { title: 'BiRNN idea', text: 'run one RNN forward and a second RNN backward over the same sequence, then combine both outputs' },
  { title: 'Why bidirectional', text: 'some words only make full sense with context from both before AND after them in a sentence' },
  { title: 'Combining outputs', text: 'concatenate (or sum) the forward and backward hidden states at every position in the sequence' },
  { title: 'Advantage', text: 'much richer context for tasks like NER, POS tagging, and translation, since nothing is hidden from either direction' },
  { title: 'Disadvantage', text: 'needs the entire sequence upfront, so it can\'t be used for real-time or streaming prediction' },
  { title: 'Use cases', text: 'named entity recognition, part-of-speech tagging, and pre-Transformer machine translation encoders' },
  { title: 'Implementation shape', text: 'two separate RNN/LSTM layers — one processing left-to-right, one right-to-left — sharing the same input' },
  { title: 'Trade-off ahead', text: 'bidirectional context is powerful, but tomorrow\'s GPT decoder gives that up in exchange for generating text one token at a time' },
];

const WHY_BIDIRECTIONAL = [
  {
    icon: '↔️', title: 'BiRNN Architecture', titleClass: 'card-title-cyan', subtitle: 'Two Passes, One Sequence',
    description:
      'A forward RNN reads left-to-right, a backward RNN reads right-to-left over the same input — both see the full sentence, just from opposite ends.',
    code: 'forward_hidden  = RNN(sequence)\nbackward_hidden = RNN(reversed(sequence))\ncombined = concat(forward_hidden, backward_hidden)',
  },
  {
    icon: '🧭', title: 'Why Read Both Directions', titleClass: 'card-title-purple', subtitle: 'Context From Everywhere',
    description:
      '"Bank" means something different next to "river" versus next to "loan" — sometimes the disambiguating word comes after it, not before.',
    code: '# "The bank raised interest rates"\n# vs "The bank of the river flooded"',
  },
  {
    icon: '⚖️', title: 'Advantages & Trade-offs', titleClass: 'card-title-amber', subtitle: 'Context vs Real-Time',
    description:
      'Richer context boosts accuracy on tagging and classification tasks — but the model must wait for the entire sequence, ruling out live/streaming use.',
  },
];

const USE_CASES = [
  {
    icon: '🏷️', title: 'NER & POS Tagging', titleClass: 'card-title-cyan', subtitle: 'Classic Use Case',
    description:
      'Labeling each word (PERSON, ORG, verb, noun) benefits hugely from seeing the whole sentence, not just what came before a word.',
    code: '# "Sumit teaches Agentic AI in Hyderabad"\n# PERSON=Sumit · ORG=Agentic AI · LOC=Hyderabad',
  },
  {
    icon: '💬', title: 'Sentiment Analysis', titleClass: 'card-title-purple', subtitle: 'Whole-Sentence Meaning',
    description:
      'A negation or twist near the end of a sentence ("...but overall it disappointed") can flip the meaning of everything before it.',
  },
  {
    icon: '🔜', title: 'Next: GPT Architecture', titleClass: 'card-title-amber', subtitle: 'Day 19 Preview',
    description: 'Tomorrow — decoder-only models, masked attention, and how GPT generates text one token at a time.',
    link: { href: '/agentic-day-19', label: 'Go to Day 19 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Bidirectional RNN', titleClass: 'card-title-cyan', subtitle: 'PY Module 18',
    description: 'Full lesson — BiRNN architecture, advantages & disadvantages, use cases, and implementation.',
    link: { href: '/python/learn/bidirectional-rnn', label: 'Open PY Module 18 →' },
  },
  {
    icon: '🎬', title: 'Bidirectional RNN Video', titleClass: 'card-title-purple', subtitle: 'DeepLearning.AI',
    description: 'Clear explanation of why and when reading a sequence both ways helps.',
    link: { href: BIRNN_YT, label: 'Watch BiRNN explained →', external: true },
  },
  {
    icon: '🎉', title: 'Sequence Models Wrapped', titleClass: 'card-title-amber', subtitle: 'Days 13–18 Done',
    description: 'NLP basics, deep learning, RNNs, ANNs, LSTM, and BiRNN are covered. Next: decoder & encoder architectures — GPT and BERT.',
    link: { href: '/agentic-day-19', label: 'Go to Day 19 →' },
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

export default function AgenticDay18() {
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
          <Link to="/agentic-day-17" className="day001-nav-btn day001-nav-prev">← Day 17</Link>
          <p className="day001-datetime">Agentic AI Day 18 · 5 Sep 2026</p>
          <Link to="/agentic-day-19" className="day001-nav-btn day001-nav-next">Day 19 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 2</span><span>BiRNN</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 18 <span aria-hidden="true">↔️</span></h1>
              <p className="day001-day-theme">BIDIRECTIONAL RNN</p>
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
          Reading a sequence from both ends at once. A <strong>BiRNN</strong> runs one RNN forward and another
          backward over the same input, then combines them — trading the ability to stream predictions
          live for much richer context on tasks like <strong>NER</strong> and <strong>POS tagging</strong>.
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

        <CardSection icon="↔️" title="WHY BIDIRECTIONAL" cards={WHY_BIDIRECTIONAL} columns={3} />
        <CardSection icon="🏷️" title="USE CASES" cards={USE_CASES} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#DeepLearning</span><span>#Day18</span><span>#BiRNN</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
