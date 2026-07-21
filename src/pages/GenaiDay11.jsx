import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture11';

const LEARNT_TODAY = [
  { title: 'The knowledge problem', text: 'the model does not know your private documents, and its training data has a cutoff date' },
  { title: 'Fine-tuning is costly', text: 'retraining the model for every new document or update is slow, expensive and impractical' },
  { title: 'RAG', text: 'Retrieval-Augmented Generation — retrieve relevant chunks, add them to the prompt, then generate the answer' },
  { title: 'Two phases', text: 'indexing (prepare your documents once) and querying (answer questions using retrieved context)' },
  { title: 'Retrieve → Augment → Generate', text: 'find the relevant text, inject it into the prompt, and let the model answer from it' },
  { title: 'Why RAG wins', text: 'cheaper than fine-tuning, always up to date, can cite sources, and hallucinates far less' },
  { title: 'Built on the last 3 days', text: 'embeddings, semantic search and vector DBs were the foundation — RAG is where they pay off' },
];

const WHY = [
  {
    icon: '📚', title: 'The Model Does Not Know', titleClass: 'card-title-cyan', subtitle: 'Your Data',
    description:
      'An LLM only knows its training data up to a cutoff. It has never seen your company docs, your PDF, or yesterday’s update — so it cannot answer questions about them.',
    code: '// "What does OUR internal handbook say about leave?"\n// → the model has no idea — it never saw your handbook',
  },
  {
    icon: '💸', title: 'Fine-Tuning Is Expensive', titleClass: 'card-title-purple', subtitle: 'Not For Knowledge',
    description:
      'You could retrain the model on your data, but fine-tuning is costly and slow, and you would redo it every time a document changes. Wrong tool for keeping knowledge fresh.',
    code: '// fine-tune on every doc change? → too slow, too costly\n// knowledge changes daily; retraining cannot keep up',
  },
  {
    icon: '🎯', title: 'RAG Instead', titleClass: 'card-title-amber', subtitle: 'Retrieve, Then Answer',
    description:
      'Retrieval-Augmented Generation keeps the model as-is and simply fetches the relevant text at question time, adding it to the prompt so the model answers from your data.',
    code: '// keep the model frozen\n// fetch relevant chunks → add to prompt → answer\n// update docs anytime, no retraining',
  },
];

const PIPELINE = [
  {
    icon: '🗂️', title: 'Phase 1 — Indexing', titleClass: 'card-title-cyan', subtitle: 'Prepare Once',
    description:
      'Load your documents, split them into chunks, embed each chunk into a vector, and store them in a vector database. This runs once (or whenever the docs change).',
    code: '// documents → chunks → embeddings → vector DB\n// a one-time preparation step',
  },
  {
    icon: '❓', title: 'Phase 2 — Querying', titleClass: 'card-title-purple', subtitle: 'Every Question',
    description:
      'When a user asks something, embed the question, retrieve the most similar chunks, add them to the prompt as context, and let the model generate a grounded answer.',
    code: '// question → embed → retrieve top-K\n// → augment prompt with context → generate answer',
  },
  {
    icon: '🔁', title: 'Retrieve · Augment · Generate', titleClass: 'card-title-amber', subtitle: 'The Three Steps',
    description:
      'That is the whole idea in three words. Retrieval finds the right information, augmentation puts it in front of the model, and generation produces the final answer.',
    footer: 'R — retrieve · A — augment · G — generate',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 11', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The RAG concept lecture and diagram in the STRIKE GenAI repo — the "why" before tomorrow’s hands-on build.',
    link: { href: GH_LECTURE, label: 'Open Lecture 11 →', external: true },
  },
  {
    icon: '🧠', title: 'RAG vs Fine-Tuning', titleClass: 'card-title-purple', subtitle: 'Rule Of Thumb',
    description:
      'Use RAG to give the model knowledge (facts, docs, up-to-date data). Use fine-tuning to change behaviour or style — not to teach it new facts.',
    footer: 'RAG → knowledge · fine-tuning → behaviour',
  },
  {
    icon: '🔜', title: 'Next: Build It', titleClass: 'card-title-amber', subtitle: 'Day 12 Preview',
    description:
      'Tomorrow is Lecture 12 — the RAG indexing pipeline with LangChain.js and Pinecone: load a PDF, chunk it, embed it, and store it in a vector database.',
    link: { href: '/genai-day-12', label: 'Go to Day 12 →' },
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

export default function GenaiDay11() {
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
          <Link to="/genai-day-10" className="day001-nav-btn day001-nav-prev">← Day 10</Link>
          <p className="day001-datetime">Agentic AI Day 11</p>
          <Link to="/genai-day-12" className="day001-nav-btn day001-nav-next">Day 12 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 11</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 11 <span aria-hidden="true">📚</span></h1>
              <p className="day001-day-theme">RAG — GIVING THE AI YOUR OWN KNOWLEDGE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '11%' }} /></div>

        <p className="day001-summary">
          Lecture 11 — <strong>RAG</strong>. The model does not know my private documents and has a training cutoff,
          and <strong>fine-tuning</strong> is far too costly to keep knowledge fresh. <strong>Retrieval-Augmented
          Generation</strong> solves it: <strong>retrieve</strong> the relevant chunks, <strong>augment</strong> the
          prompt with them, and <strong>generate</strong> a grounded answer. It runs in two phases —{' '}
          <strong>indexing</strong> (prepare the docs once) and <strong>querying</strong> (answer each question). It’s
          cheaper than fine-tuning, always up to date, and hallucinates less — and it’s built on the last three days
          of embeddings and vector DBs. <em>Tomorrow I build it.</em>
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

        <CardSection icon="📚" title="WHY RAG" cards={WHY} columns={3} />
        <CardSection icon="🔁" title="THE RAG PIPELINE" cards={PIPELINE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#RAG</span><span>#CoderArmy</span><span>#JavaScript</span>
        </footer>
      </div>
    </div>
  );
}
