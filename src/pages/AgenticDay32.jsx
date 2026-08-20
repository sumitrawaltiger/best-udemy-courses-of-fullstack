import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "Text splitters", text: "chunk documents by tokens/characters with overlap for better retrieval" },
  { title: "Embeddings module", text: "OpenAI or local embed models turn chunks into vectors" },
  { title: "Vector store hookup", text: "push embeddings into Chroma/FAISS/Pinecone via LangChain wrappers" },
  { title: "Ollama & HuggingFace", text: "run open models locally or from the Hub beside API models" },
  { title: "Document transformers", text: "clean, filter, and enrich docs before indexing" },
  { title: "Interview Q&A project", text: "build a small FAQ bot over your notes — classic portfolio piece" },
  { title: "Module map", text: "know loaders → splitters → embeddings → stores → retrievers → chains" },
  { title: "Ready for RAG", text: "tomorrow assembles these parts into a full RAG system" },
];

const CORE = [
  {
    icon: "✂️", title: "Splitters", titleClass: 'card-title-cyan', subtitle: "Chunk",
    description:
      "RecursiveCharacterTextSplitter with size + overlap is the Year-1 default.",
    code: "splitter = RecursiveCharacterTextSplitter(\n  chunk_size=800, chunk_overlap=100)",
  },
  {
    icon: "🧭", title: "Embeddings", titleClass: 'card-title-purple', subtitle: "Vectors",
    description:
      "OpenAIEmbeddings or HuggingFaceEmbeddings — keep model id versioned.",
    code: "vectors = embeddings.embed_documents(texts)",
  },
  {
    icon: "🤗", title: "Local Models", titleClass: 'card-title-amber', subtitle: "Ollama / HF",
    description:
      "Point ChatOllama or HuggingFacePipeline at a local/open model when APIs are costly.",
    code: "llm = ChatOllama(model=\"llama3\")",
  },
];

const PRACTICE = [
  {
    icon: "📦", title: "Index Pipeline", titleClass: 'card-title-cyan', subtitle: "Assemble",
    description: "load → split → embed → add to vectorstore in one script.",
    code: "store.add_documents(chunks)",
  },
  {
    icon: "🧪", title: "FAQ Bot Lab", titleClass: 'card-title-purple', subtitle: "Project",
    description: "Index interview notes; ask 5 questions; log retrieved chunks.",
    code: "retriever | prompt | llm",
  },
  {
    icon: "🔜", title: "Next: RAG", titleClass: 'card-title-amber', subtitle: "Day 33",
    description: "Tomorrow — full Retrieval-Augmented Generation architecture.",
    link: { href: '/agentic-day-33', label: 'Go to Day 33 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "LangChain Components", titleClass: 'card-title-cyan', subtitle: "PY Module 32",
    description: "Full lesson on the site for this module.",
    link: { href: "/python/learn/langchain-components-and-modules", label: 'Open module →' },
  },
  {
    icon: "🎬", title: "LangChain RAG", titleClass: 'card-title-purple', subtitle: "Video",
    description: "Video resource.",
    link: { href: "https://www.youtube.com/watch?v=tcqEUSNCn8I", label: 'Open →', external: true },
  },
  {
    icon: "📖", title: "Text Splitters", titleClass: 'card-title-amber', subtitle: "Docs",
    description: "Docs resource.",
    link: { href: "https://python.langchain.com/docs/how_to/#text-splitters", label: 'Open →', external: true },
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

export default function AgenticDay32() {
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
          <Link to="/agentic-day-31" className="day001-nav-btn day001-nav-prev">← Day 31</Link>
          <p className="day001-datetime">Agentic AI Day 32 · 22 Sep 2026</p>
          <Link to="/agentic-day-33" className="day001-nav-btn day001-nav-next">Day 33 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>LangChain</span><span>Day 32</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 32 <span aria-hidden="true">🧩</span></h1>
              <p className="day001-day-theme">LANGCHAIN COMPONENTS & MODULES</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · LANGCHAIN</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '21%' }} /></div>

        <p className="day001-summary">
          Day 32 fills the toolbox. Master <strong>text splitters</strong>, <strong>embeddings</strong>, and <strong>Hugging Face / Ollama</strong> integrations for RAG-ready pipelines.
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

        <CardSection icon="🧩" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day32</span><span>#LangChain</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
