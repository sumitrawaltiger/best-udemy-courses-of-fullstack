import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "LlamaIndex role", text: "data framework optimized for indexing and querying private data with LLMs" },
  { title: "Connectors", text: "load from APIs, files, DBs into LlamaIndex documents/nodes" },
  { title: "Indexes", text: "VectorStoreIndex and friends turn nodes into queryable structures" },
  { title: "Query engines", text: "high-level ask → retrieve → synthesize API" },
  { title: "vs LangChain", text: "overlapping goals; LlamaIndex shines at data/index abstractions" },
  { title: "Stock analysis project", text: "ingest market notes/PDFs and ask analytical questions" },
  { title: "Hybrid stacks", text: "you can use LlamaIndex retrieval with LangChain agents" },
  { title: "Eval still required", text: "framework ≠ correctness — measure grounded answers" },
];

const CORE = [
  {
    icon: "🔌", title: "Connectors", titleClass: 'card-title-cyan', subtitle: "Ingest",
    description:
      "Point SimpleDirectoryReader or API loaders at your corpus.",
    code: "docs = SimpleDirectoryReader(\n  \"data\").load_data()",
  },
  {
    icon: "📇", title: "Index + Query", titleClass: 'card-title-purple', subtitle: "Ask",
    description:
      "Build VectorStoreIndex; query_engine.query(\"...\") returns a response.",
    code: "index = VectorStoreIndex.from_documents(docs)\nqe = index.as_query_engine()",
  },
  {
    icon: "📈", title: "Stock Project", titleClass: 'card-title-amber', subtitle: "Build",
    description:
      "Index filings/notes; ask for risks, trends, and comparisons with citations.",
    code: "query → answer + sources",
  },
];

const PRACTICE = [
  {
    icon: "🧪", title: "First Query", titleClass: 'card-title-cyan', subtitle: "Lab",
    description: "Index 3 markdown notes; ask two questions; print source nodes.",
    code: "response.source_nodes",
  },
  {
    icon: "🔀", title: "Compare Tooling", titleClass: 'card-title-purple', subtitle: "Choice",
    description: "Same corpus in LangChain vs LlamaIndex — note DX differences.",
    code: "same data · two APIs",
  },
  {
    icon: "🔜", title: "Next: Deploy", titleClass: 'card-title-amber', subtitle: "Day 36",
    description: "Tomorrow — Flask + AWS deployment for LLM apps.",
    link: { href: '/agentic-day-36', label: 'Go to Day 36 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "LlamaIndex", titleClass: 'card-title-cyan', subtitle: "PY Module 35",
    description: "Full lesson on the site for this module.",
    link: { href: "/python/learn/llamaindex", label: 'Open module →' },
  },
  {
    icon: "🎬", title: "LlamaIndex Tutorial", titleClass: 'card-title-purple', subtitle: "Video",
    description: "Video resource.",
    link: { href: "https://www.youtube.com/watch?v=cbiiEuXKzo8", label: 'Open →', external: true },
  },
  {
    icon: "📖", title: "LlamaIndex Docs", titleClass: 'card-title-amber', subtitle: "Docs",
    description: "Docs resource.",
    link: { href: "https://docs.llamaindex.ai/", label: 'Open →', external: true },
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

export default function AgenticDay35() {
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
          <Link to="/agentic-day-34" className="day001-nav-btn day001-nav-prev">← Day 34</Link>
          <p className="day001-datetime">Agentic AI Day 35 · 1 Oct 2026</p>
          <Link to="/agentic-day-36" className="day001-nav-btn day001-nav-next">Day 36 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>LlamaIndex</span><span>Day 35</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 35 <span aria-hidden="true">🦙</span></h1>
              <p className="day001-day-theme">LLAMAINDEX</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · RAG</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '23%' }} /></div>

        <p className="day001-summary">
          Day 35 adds another RAG toolkit. Use <strong>LlamaIndex</strong> connectors and <strong>query engines</strong> — then try the stock analysis project.
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

        <CardSection icon="🦙" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day35</span><span>#LlamaIndex</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
