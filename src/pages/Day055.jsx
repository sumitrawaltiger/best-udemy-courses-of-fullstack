import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const AGENTS = 'https://js.langchain.com/docs/how_to/#agents';
const VECTORSTORES = 'https://js.langchain.com/docs/concepts/vectorstores/';

const LEARNT_TODAY = [
  { title: 'RAG + tools = an agent', text: 'combine retrieval with tools and policies to make a production-ish agent, not just a Q&A box' },
  { title: 'Real vector store', text: 'graduate from in-memory to a persistent DB (MongoDB Atlas / Supabase pgvector style)' },
  { title: 'Ingestion at scale', text: 'chunk → embed → upsert into the vector store, with metadata for filtering and citations' },
  { title: 'Retrieve → summarize', text: 'pull top-k relevant chunks, then answer with citations and a confidence score' },
  { title: 'Give it tools', text: 'add a calculator, a date planner and a summarizer so the agent can do more than recall' },
  { title: 'createAgent + policies', text: 'wire tools into an agent with strict policies — cite-if-used, and no hallucinated sources' },
  { title: 'Grounded & honest', text: 'if a claim isn’t in the retrieved context, the agent must say so instead of inventing one' },
  { title: 'Ship it in a UI', text: 'a Next.js app turns it into a support bot, internal copilot, or SaaS feature' },
];

const STORE = [
  {
    icon: '🗄️', title: 'Real Vector DB', titleClass: 'card-title-cyan', subtitle: 'Persistent At Scale',
    description:
      'Swap the in-memory store for a managed vector database — MongoDB Atlas Vector Search or Supabase pgvector. Same interface, now durable, filterable and production-ready.',
    code: '// chunk → embed → upsert\nawait store.addDocuments(chunks, { ids });\n// metadata: { source, section } for filters + citations',
  },
  {
    icon: '🔎', title: 'Retrieve → Summarize', titleClass: 'card-title-purple', subtitle: 'Cited + Confident',
    description:
      'On a question, embed it, pull the top-k chunks (optionally filtered by metadata), and summarise into an answer that carries its sources and a confidence score.',
    code: '// retrieve top-k (+ metadata filter)\n// → answer strictly from chunks\n// → { answer, sources[], confidence }',
  },
];

const AGENTIC = [
  {
    icon: '🧰', title: 'Give It Tools', titleClass: 'card-title-cyan', subtitle: 'Beyond Recall',
    description:
      'Retrieval alone only remembers. Add tools — a calculator, a date planner, a summarizer — so the agent can compute, schedule and transform, not just look things up.',
    code: 'const tools = [retrieveKb, calculator, datePlanner, summarize];\n// each a Zod-typed LangChain tool\n// the agent picks the right one per step',
  },
  {
    icon: '🛡️', title: 'createAgent + Policies', titleClass: 'card-title-purple', subtitle: 'Cite-If-Used',
    description:
      'Build the agent with strict policies: cite any source it uses, and never invent sources. Grounding rules turn a clever demo into something you can actually trust.',
    code: '// policy: cite-if-used, no hallucinated sources\n// if answer not in context → say "not found"\n// createAgent({ model, tools, policy })',
  },
  {
    icon: '🚀', title: 'Ship In A UI', titleClass: 'card-title-amber', subtitle: 'Real Products',
    description:
      'Wire it into a Next.js UI and it becomes a real feature — a support bot over your docs, an internal copilot, or a SaaS capability. The platform, finally applied.',
    footer: 'support bots · internal copilots · SaaS features',
  },
];

const RESOURCES = [
  {
    icon: '🤖', title: 'LangChain Agents', titleClass: 'card-title-cyan', subtitle: 'createAgent',
    description:
      'How to build tool-using agents in LangChain.js — the createAgent patterns behind this production-ish RAG agent.',
    link: { href: AGENTS, label: 'Open the agents guide →', external: true },
  },
  {
    icon: '🗄️', title: 'Vector Stores', titleClass: 'card-title-purple', subtitle: 'Mongo / Supabase',
    description:
      'Pluggable vector stores in LangChain.js — MongoDB Atlas, Supabase pgvector and more, all behind one retriever interface.',
    link: { href: VECTORSTORES, label: 'Open the vector-store guide →', external: true },
  },
  {
    icon: '🎓', title: 'Phase 1 Milestone', titleClass: 'card-title-amber', subtitle: 'The Platform, Applied',
    description:
      'That completes this TypeScript agent course — factory, JSON-first, LangChain, tools, RAG, LangGraph, deploy, and Agentic RAG. Explore it all in the GenAI track.',
    link: { href: '/genai', label: 'Explore the GenAI track →' },
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

export default function Day055() {
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
          <Link to="/day-054" className="day001-nav-btn day001-nav-prev">← Day 54</Link>
          <p className="day001-datetime">Agentic AI Day 55</p>
          <Link to="/day-056" className="day001-nav-btn day001-nav-next">Day 56 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Agentic RAG</span><span>Vector DB</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 55 <span aria-hidden="true">🚀</span></h1>
              <p className="day001-day-theme">AGENTIC RAG WITH A VECTOR DB</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '55%' }} /></div>

        <p className="day001-summary">
          The finale — turn RAG + tools into a <strong>production-ish agent</strong>. Graduate from the in-memory store
          to a <strong>real vector DB</strong> (MongoDB Atlas / Supabase pgvector): <strong>chunk → embed → upsert</strong>{' '}
          with metadata. On a question, <strong>retrieve → summarize</strong> with <strong>citations and confidence</strong>.
          Then make it <strong>agentic</strong>: add tools (calculator, date planner, summarize) and build it with{' '}
          <strong>createAgent</strong> under strict <strong>policies</strong> — <strong>cite-if-used</strong>, no
          hallucinated sources, say “not found” when the answer isn’t in context. Wire it into a{' '}
          <strong>Next.js UI</strong> and it becomes a <strong>support bot, internal copilot, or SaaS feature</strong>.{' '}
          <em>The agent platform, finally applied. 🎓</em>
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

        <CardSection icon="🗄️" title="VECTOR DB RAG" cards={STORE} columns={2} />
        <CardSection icon="🛡️" title="MAKE IT AGENTIC" cards={AGENTIC} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#AgenticAI</span><span>#AgenticRAG</span><span>#VectorDB</span><span>#TypeScript</span>
        </footer>
      </div>
    </div>
  );
}
