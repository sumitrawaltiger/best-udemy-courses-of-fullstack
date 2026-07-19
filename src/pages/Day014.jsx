import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture14';
const NOTION = 'https://www.notion.so/2f1a9af81c98803fb2a9ce500e13ce71';

const LEARNT_TODAY = [
  { title: 'Follow-ups break retrieval', text: 'a question like "and its price?" has no meaning on its own, so it retrieves the wrong chunks' },
  { title: 'The missing context', text: 'the meaning of a follow-up lives in the previous turns, not in the words the user just typed' },
  { title: 'Query rewriting', text: 'before retrieving, an LLM rewrites the follow-up into a standalone, self-contained question' },
  { title: 'Intent, then search', text: 'the model uses the chat history to resolve pronouns and references into an explicit query' },
  { title: 'Then RAG as usual', text: 'the rewritten question embeds and retrieves correctly, then answers from the retrieved context' },
  { title: 'RAG + memory', text: 'query rewriting plus conversation history turns basic RAG into a real document chatbot' },
  { title: 'Small step, big gain', text: 'one extra LLM call fixes a whole class of broken multi-turn retrievals' },
];

const PROBLEM = [
  {
    icon: '🧩', title: 'The Follow-Up Problem', titleClass: 'card-title-cyan', subtitle: 'Context-Less Queries',
    description:
      'Yesterday’s RAG answered one-shot questions well. But real chats have follow-ups — "what about that?", "and its price?" — whose meaning depends entirely on the earlier turns.',
    code: '// User: "Tell me about the useEffect hook"\n// User: "when does it run?"  ← run WHAT?\n// embedding "when does it run?" retrieves nothing useful',
  },
  {
    icon: '🕰️', title: 'Meaning Lives In History', titleClass: 'card-title-purple', subtitle: 'Not In The Words',
    description:
      'The vector search only sees the latest message. Without the conversation, "it" and "that" are meaningless, so the retrieved chunks are wrong and the answer is bad.',
    code: '// retrieval sees only: "when does it run?"\n// it needs: "when does the useEffect hook run?"',
  },
];

const FIX = [
  {
    icon: '✍️', title: 'Rewrite The Query', titleClass: 'card-title-cyan', subtitle: 'Standalone Question',
    description:
      'Add a step before retrieval: give the model the chat history and the new message, and ask it to produce a single, self-contained question with all references resolved.',
    code: '// LLM prompt: "Given the chat history and the follow-up,\n// rewrite it as a standalone question."\n// "when does it run?" → "When does the useEffect hook run?"',
  },
  {
    icon: '🔎', title: 'Then Retrieve', titleClass: 'card-title-purple', subtitle: 'Correct Chunks',
    description:
      'Embed the rewritten, explicit question and run the normal RAG retrieval. Now the vector search finds the right chunks because the query actually contains the topic.',
    code: '// standalone question → embed → Pinecone top-K\n// → the RIGHT chunks come back',
  },
  {
    icon: '💬', title: 'Conversational RAG', titleClass: 'card-title-amber', subtitle: 'RAG + Memory',
    description:
      'Combine query rewriting with the running conversation and you get a document assistant that holds a real, multi-turn discussion grounded in your data.',
    code: '// history + follow-up → rewrite → retrieve\n// → augment → answer → append to history → repeat',
  },
];

const RESOURCES = [
  {
    icon: '📝', title: 'Lecture 14 Notes', titleClass: 'card-title-cyan', subtitle: 'Notion',
    description:
      'Rohit’s notes for this lecture on improving the RAG system for real, multi-turn conversations.',
    link: { href: NOTION, label: 'Open Lecture 14 notes →', external: true },
  },
  {
    icon: '💻', title: 'Lecture 14', titleClass: 'card-title-purple', subtitle: 'GitHub',
    description:
      'The lecture folder and diagram in the STRIKE GenAI repo — improving retrieval for conversational RAG.',
    link: { href: GH_LECTURE, label: 'Open Lecture 14 →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Retrieval Quality', titleClass: 'card-title-amber', subtitle: 'Day 15 Preview',
    description:
      'Tomorrow — Lecture 15: making retrieval genuinely good with smart chunking, top-K tuning, metadata filters and re-ranking.',
    link: { href: '/day-015', label: 'Go to Day 15 →' },
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

export default function Day014() {
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
          <Link to="/day-013" className="day001-nav-btn day001-nav-prev">← Day 13</Link>
          <p className="day001-datetime">Agentic AI Day 14</p>
          <Link to="/day-015" className="day001-nav-btn day001-nav-next">Day 15 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 14</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 14 <span aria-hidden="true">💬</span></h1>
              <p className="day001-day-theme">CONVERSATIONAL RAG — QUERY REWRITING</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '14%' }} /></div>

        <p className="day001-summary">
          Lecture 14 makes RAG <strong>conversational</strong>. Basic RAG breaks on <strong>follow-up questions</strong>{' '}
          — "and its price?" or "when does it run?" mean nothing on their own, so retrieval fails. The fix is{' '}
          <strong>query rewriting</strong>: before searching, an LLM uses the <strong>chat history</strong> to turn
          the follow-up into a <strong>standalone question</strong> with every reference resolved. That explicit
          query then embeds and retrieves the right chunks, and RAG proceeds as normal. One small extra step —{' '}
          <strong>RAG + memory</strong> — and it becomes a real document chatbot.{' '}
          <em>(This lecture is diagram-based; content reflects the standard technique.)</em>
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

        <CardSection icon="🧩" title="THE FOLLOW-UP PROBLEM" cards={PROBLEM} columns={2} />
        <CardSection icon="✍️" title="QUERY REWRITING" cards={FIX} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#RAG</span><span>#CoderArmy</span><span>#LangChain</span>
        </footer>
      </div>
    </div>
  );
}
