import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture12and13';
const NOTION = 'https://www.notion.so/RAG-System-2e8a9af81c9881eab86dfe8bf32fcfb4';

const LEARNT_TODAY = [
  { title: 'Embed the question', text: 'the query is embedded with the same model used for the documents, so they share a meaning space' },
  { title: 'Retrieve top-K', text: 'query Pinecone for the 10 most similar chunks, with includeMetadata to get the original text back' },
  { title: 'Build the context', text: 'join the retrieved chunk texts into one context block to hand to the model' },
  { title: 'Augment with a template', text: 'a PromptTemplate injects the context and question and tells the model to answer only from the context' },
  { title: 'Ground the answer', text: 'instruct it to say "I don’t have enough information" when the context does not contain the answer' },
  { title: 'Generate', text: 'ChatGoogleGenerativeAI (gemini-2.5-flash, temperature 0.3) writes the final answer' },
  { title: 'LangChain chains', text: 'RunnableSequence pipes promptTemplate → model → StringOutputParser into one clean chain' },
];

const RETRIEVE = [
  {
    icon: '🎯', title: 'Embed & Retrieve', titleClass: 'card-title-cyan', subtitle: 'Top-K From Pinecone',
    description:
      'Embed the user’s question, then ask Pinecone for the most similar chunks. includeMetadata brings back the original text so we can feed it to the model.',
    code: "const queryVector = await embeddings.embedQuery(question);\n\nconst results = await pineconeIndex.query({\n  topK: 10,\n  vector: queryVector,\n  includeMetadata: true,\n});",
  },
  {
    icon: '🧱', title: 'Build The Context', titleClass: 'card-title-purple', subtitle: 'Join The Chunks',
    description:
      'Pull the text out of each match and join them into a single context string. This is the retrieved knowledge the model will answer from.',
    code: "const context = results.matches\n  .map(m => m.metadata.text)\n  .join('\\n\\n---\\n\\n');",
  },
];

const GENERATE = [
  {
    icon: '📝', title: 'The Prompt Template', titleClass: 'card-title-cyan', subtitle: 'Augment',
    description:
      'A PromptTemplate slots the context and question into a fixed instruction: answer using only the context, admit when it is not there, be concise, and reuse code examples.',
    code: "const promptTemplate = PromptTemplate.fromTemplate(`\nAnswer using ONLY the context below.\nIf the answer is not in it, say you don't have enough information.\n\nContext:\n{context}\n\nQuestion: {question}\nAnswer:`);",
  },
  {
    icon: '🤖', title: 'The Model', titleClass: 'card-title-purple', subtitle: 'Low Temperature',
    description:
      'ChatGoogleGenerativeAI runs gemini-2.5-flash at a low temperature (0.3) so answers stay factual and grounded rather than creative.',
    code: "const model = new ChatGoogleGenerativeAI({\n  apiKey: process.env.GEMINI_API_KEY,\n  model: 'gemini-2.5-flash',\n  temperature: 0.3,\n});",
  },
  {
    icon: '⛓️', title: 'The Chain', titleClass: 'card-title-amber', subtitle: 'RunnableSequence',
    description:
      'LangChain pipes the steps together: template → model → output parser. Invoke it with the context and question and it returns the finished answer string.',
    code: "const chain = RunnableSequence.from([\n  promptTemplate,\n  model,\n  new StringOutputParser(),\n]);\n\nconst answer = await chain.invoke({ context, question });",
  },
];

const RESOURCES = [
  {
    icon: '📝', title: 'RAG System Notes', titleClass: 'card-title-cyan', subtitle: 'Notion',
    description:
      'The RAG System write-up covering both indexing (yesterday) and this querying pipeline end to end.',
    link: { href: NOTION, label: 'Open the RAG notes →', external: true },
  },
  {
    icon: '💻', title: 'query.js', titleClass: 'card-title-purple', subtitle: 'GitHub',
    description:
      'The runnable query.js — retrieve from Pinecone and answer with a LangChain chain — in the STRIKE GenAI repo.',
    link: { href: GH_LECTURE, label: 'Open the code →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Better RAG', titleClass: 'card-title-amber', subtitle: 'Day 14 Preview',
    description:
      'Tomorrow improves the system — Lecture 14: making RAG conversational by rewriting a follow-up question into a standalone query before retrieving.',
    link: { href: '/day-014', label: 'Go to Day 14 →' },
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

export default function Day013() {
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
          <Link to="/day-012" className="day001-nav-btn day001-nav-prev">← Day 12</Link>
          <p className="day001-datetime">Agentic AI Day 13</p>
          <Link to="/day-014" className="day001-nav-btn day001-nav-next">Day 14 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 13</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 13 <span aria-hidden="true">💡</span></h1>
              <p className="day001-day-theme">RAG PART 2 — RETRIEVE, AUGMENT &amp; ANSWER</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '13%' }} /></div>

        <p className="day001-summary">
          Lecture 13 completes the RAG system — the <strong>querying</strong> half. I <strong>embed</strong> the
          question, <strong>retrieve</strong> the top-10 chunks from <strong>Pinecone</strong> (with metadata),{' '}
          <strong>build a context</strong> from them, and <strong>augment</strong> a <code>PromptTemplate</code> that
          tells the model to answer <strong>only from the context</strong> and admit when it can’t. A low-temperature{' '}
          <code>ChatGoogleGenerativeAI</code> generates the answer, all wired as a{' '}
          <strong>LangChain RunnableSequence</strong>. That’s a working <strong>chat-with-your-documents</strong>{' '}
          app. <em>Retrieve, augment, generate — done.</em>
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

        <CardSection icon="🎯" title="RETRIEVE" cards={RETRIEVE} columns={2} />
        <CardSection icon="⛓️" title="AUGMENT & GENERATE" cards={GENERATE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#RAG</span><span>#LangChain</span><span>#Pinecone</span>
        </footer>
      </div>
    </div>
  );
}
