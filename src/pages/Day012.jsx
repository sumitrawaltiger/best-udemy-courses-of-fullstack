import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture12and13';
const NOTION = 'https://www.notion.so/RAG-System-2e8a9af81c9881eab86dfe8bf32fcfb4';
const LANGCHAIN = 'https://js.langchain.com/docs/introduction/';

const LEARNT_TODAY = [
  { title: 'Meet LangChain.js', text: 'a framework that wires the RAG steps — loaders, splitters, embeddings, vector stores — together cleanly' },
  { title: 'Load documents', text: 'PDFLoader reads a PDF file into an array of document objects to process' },
  { title: 'Chunk the text', text: 'RecursiveCharacterTextSplitter breaks documents into pieces (chunkSize 1000, chunkOverlap 200)' },
  { title: 'Why overlap', text: 'overlapping chunks keep context from spilling across boundaries so no idea is cut in half' },
  { title: 'Embed each chunk', text: 'GoogleGenerativeAIEmbeddings (text-embedding-004) turns every chunk into a vector' },
  { title: 'Store in Pinecone', text: 'PineconeStore.fromDocuments embeds and upserts all chunks into a Pinecone index in one step' },
  { title: 'Runs once', text: 'indexing is a one-time prep — do it when documents are added or changed, not per question' },
];

const LANGCHAIN_CARD = [
  {
    icon: '🔗', title: 'Enter LangChain.js', titleClass: 'card-title-cyan', subtitle: 'The RAG Framework',
    description:
      'Instead of hand-writing every step, LangChain.js gives ready-made pieces — document loaders, text splitters, embedding wrappers and vector-store adapters — that snap together.',
    code: "import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';\nimport { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';\nimport { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai';\nimport { PineconeStore } from '@langchain/pinecone';",
  },
  {
    icon: '📄', title: 'Load The PDF', titleClass: 'card-title-purple', subtitle: 'PDFLoader',
    description:
      'Point a loader at a file and it returns document objects with the text and metadata. LangChain has loaders for PDFs, web pages, Notion, and more.',
    code: "const pdfLoader = new PDFLoader('./Node.pdf');\nconst rawDocs = await pdfLoader.load();\n// rawDocs = [{ pageContent, metadata }, ...]",
  },
];

const CHUNK = [
  {
    icon: '✂️', title: 'Chunk It', titleClass: 'card-title-cyan', subtitle: 'Size + Overlap',
    description:
      'A whole document is too big to embed usefully. Split it into ~1000-character chunks with 200 characters of overlap so context carries across the cuts.',
    code: "const splitter = new RecursiveCharacterTextSplitter({\n  chunkSize: 1000,\n  chunkOverlap: 200,\n});\nconst chunks = await splitter.splitDocuments(rawDocs);\n// e.g. 266 chunks → 266 vectors",
  },
  {
    icon: '🔢', title: 'Embed Each Chunk', titleClass: 'card-title-purple', subtitle: 'text-embedding-004',
    description:
      'Configure the Gemini embedding model. Every chunk becomes a vector that captures its meaning — the same embeddings idea from Day 8, now applied to your documents.',
    code: "const embeddings = new GoogleGenerativeAIEmbeddings({\n  apiKey: process.env.GEMINI_API_KEY,\n  model: 'text-embedding-004',\n});",
  },
  {
    icon: '📦', title: 'Store In Pinecone', titleClass: 'card-title-amber', subtitle: 'One Step',
    description:
      'PineconeStore.fromDocuments does the whole thing — embed every chunk and upsert it into your Pinecone index. After this, your PDF is a searchable knowledge base.',
    code: "const pinecone = new Pinecone();\nconst index = pinecone.Index(process.env.PINECONE_INDEX_NAME);\n\nawait PineconeStore.fromDocuments(chunks, embeddings, {\n  pineconeIndex: index,\n  maxConcurrency: 5,\n});",
  },
];

const RESOURCES = [
  {
    icon: '📝', title: 'RAG System Notes', titleClass: 'card-title-cyan', subtitle: 'Notion',
    description:
      'Rohit’s RAG System write-up — the full indexing and querying pipeline with LangChain.js and Pinecone.',
    link: { href: NOTION, label: 'Open the RAG notes →', external: true },
  },
  {
    icon: '💻', title: 'Lecture 12–13 Code', titleClass: 'card-title-purple', subtitle: 'indexing.js',
    description:
      'The runnable indexing.js (and query.js for tomorrow) in the STRIKE GenAI repo — the complete document RAG build.',
    link: { href: GH_LECTURE, label: 'Open the code →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Querying', titleClass: 'card-title-amber', subtitle: 'Day 13 Preview',
    description:
      'Tomorrow is the other half — Lecture 13: embed the question, retrieve the top chunks from Pinecone, and generate a grounded answer with a LangChain chain.',
    link: { href: '/day-013', label: 'Go to Day 13 →' },
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

export default function Day012() {
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
          <Link to="/day-011" className="day001-nav-btn day001-nav-prev">← Day 11</Link>
          <p className="day001-datetime">Agentic AI Day 12</p>
          <Link to="/day-013" className="day001-nav-btn day001-nav-next">Day 13 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 12</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 12 <span aria-hidden="true">🗂️</span></h1>
              <p className="day001-day-theme">RAG PART 1 — INDEXING YOUR DOCUMENTS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '12%' }} /></div>

        <p className="day001-summary">
          Lecture 12 — the RAG <strong>indexing</strong> pipeline, and my first taste of{' '}
          <strong>LangChain.js</strong>. I <strong>load</strong> a PDF with <code>PDFLoader</code>,{' '}
          <strong>chunk</strong> it with <code>RecursiveCharacterTextSplitter</code> (size 1000, overlap 200 so
          context survives the cuts), <strong>embed</strong> each chunk with{' '}
          <code>GoogleGenerativeAIEmbeddings</code>, and <strong>store</strong> them all in{' '}
          <strong>Pinecone</strong> via <code>PineconeStore.fromDocuments</code>. One run turns a document into a
          searchable knowledge base. <em>Tomorrow I query it.</em>
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

        <CardSection icon="🔗" title="MEET LANGCHAIN.js" cards={LANGCHAIN_CARD} columns={2} />
        <CardSection icon="✂️" title="CHUNK · EMBED · STORE" cards={CHUNK} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#RAG</span><span>#LangChain</span><span>#Pinecone</span>
        </footer>
      </div>
    </div>
  );
}
