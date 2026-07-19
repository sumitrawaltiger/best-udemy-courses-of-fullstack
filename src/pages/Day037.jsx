import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/lecture39';

const LEARNT_TODAY = [
  { title: 'Text must become numbers', text: 'an LLM can’t read letters — first the text is split into tokens, each mapped to an integer id' },
  { title: 'Byte-Pair Encoding (BPE)', text: 'the tokenizer GPT uses — start from characters and repeatedly merge the most frequent pair' },
  { title: 'Start from characters', text: 'each word becomes a list of single characters plus an end-of-word marker </w>' },
  { title: 'Count pairs', text: 'across all words, count every adjacent pair of tokens — "e r", "l o", "t h" …' },
  { title: 'Merge the top pair', text: 'the most frequent pair is fused into one new token and added to the vocabulary' },
  { title: 'Repeat N times', text: 'do it for num_merges rounds — common chunks like "ing", "tion", "the" become single tokens' },
  { title: 'Balance of two extremes', text: 'characters = tiny vocab but long sequences; whole words = huge vocab; BPE sits in between' },
  { title: 'Encode & decode', text: 'text → apply the learned merges → token ids; ids → look up strings → back to text' },
];

const WHY = [
  {
    icon: '🔤', title: 'Text → Tokens → Ids', titleClass: 'card-title-cyan', subtitle: 'The First Step',
    description:
      'A model works on numbers. The tokenizer splits text into tokens and assigns each a fixed integer id from its vocabulary. Every prompt starts life as a list of ids.',
    code: '// "learning" → ["learn", "ing"] → [4821, 213]\n// ids are what the network actually sees',
  },
  {
    icon: '⚖️', title: 'Why Not Words Or Letters', titleClass: 'card-title-purple', subtitle: 'The Middle Ground',
    description:
      'Split by characters and the vocabulary is tiny but sequences get very long. Split by whole words and the vocabulary explodes and can’t handle new words. BPE balances both.',
    code: '// characters: vocab ~256, sequences long\n// words: vocab huge, unknowns break\n// BPE: sub-words → best of both',
  },
];

const BPE = [
  {
    icon: '🧱', title: 'Start From Characters', titleClass: 'card-title-cyan', subtitle: 'Split + </w>',
    description:
      'Break each word into single characters and add an end-of-word marker. Count how often each unique word appears so duplicates aren’t reprocessed.',
    code: '// "low" → ["l","o","w","</w>"]\n// build word_freq: {["l","o","w","</w>"]: 5, ...}',
  },
  {
    icon: '🔢', title: 'Count The Pairs', titleClass: 'card-title-purple', subtitle: 'Most Frequent Wins',
    description:
      'Scan every word and tally each adjacent token pair. The pair that appears most across the whole corpus is the one worth merging first.',
    code: '// count adjacent pairs:\n// ("l","o"):12  ("o","w"):9  ("w","</w>"):7\n// winner → ("l","o")',
  },
  {
    icon: '🔗', title: 'Merge & Repeat', titleClass: 'card-title-amber', subtitle: 'Grow The Vocab',
    description:
      'Fuse the winning pair into one new token, add it to the vocabulary, and record the merge. Repeat for num_merges rounds — frequent chunks like "ing" become single tokens.',
    code: '// merge ("l","o") → "lo"\n// vocab["lo"] = next_id++\n// repeat N times → sub-word vocabulary',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 39', titleClass: 'card-title-cyan', subtitle: 'C++ BPE Tokenizer',
    description:
      'tokenizer.cpp in the STRIKE GenAI repo — a Byte-Pair-Encoding tokenizer built from scratch, train / encode / decode.',
    link: { href: GH_LECTURE, label: 'Open Lecture 39 →', external: true },
  },
  {
    icon: '🧠', title: 'This Is Real GPT', titleClass: 'card-title-purple', subtitle: 'Same Idea',
    description:
      'GPT models use BPE (tiktoken) exactly like this. Understanding the merge loop demystifies why token counts — and bills — look the way they do.',
    footer: 'characters → count pairs → merge → sub-word tokens',
  },
  {
    icon: '🔜', title: 'Next: Embeddings', titleClass: 'card-title-amber', subtitle: 'Day 38 Preview',
    description:
      'Tomorrow — Lecture 40: the embedding layer. Each token id becomes a 768-number vector, and we see just how many weights that takes.',
    link: { href: '/day-038', label: 'Go to Day 38 →' },
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

export default function Day037() {
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
          <Link to="/day-036" className="day001-nav-btn day001-nav-prev">← Day 36</Link>
          <p className="day001-datetime">Agentic AI Day 37</p>
          <Link to="/day-038" className="day001-nav-btn day001-nav-next">Day 38 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 39</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 37 <span aria-hidden="true">🔤</span></h1>
              <p className="day001-day-theme">TOKENIZATION — A BPE TOKENIZER FROM SCRATCH</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '37%' }} /></div>

        <p className="day001-summary">
          Lecture 39 — before a model can learn, text must become <strong>numbers</strong>. The tokenizer splits text
          into <strong>tokens</strong> and maps each to an integer id. Today’s build is{' '}
          <strong>Byte-Pair Encoding (BPE)</strong> — the same family GPT uses. Start from{' '}
          <strong>characters</strong> (plus an <code>&lt;/w&gt;</code> marker), <strong>count</strong> every adjacent
          pair, <strong>merge</strong> the most frequent one into a new token, and <strong>repeat</strong>. Frequent
          chunks like <code>ing</code> or <code>the</code> become single tokens — a sub-word vocabulary that avoids both
          the huge word-vocab and the long character-sequence extremes.{' '}
          <em>Next: turning these ids into embedding vectors.</em>
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

        <CardSection icon="⚖️" title="WHY TOKENIZE" cards={WHY} columns={2} />
        <CardSection icon="🔗" title="THE BPE ALGORITHM" cards={BPE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#Tokenizer</span><span>#BPE</span><span>#FirstPrinciples</span>
        </footer>
      </div>
    </div>
  );
}
