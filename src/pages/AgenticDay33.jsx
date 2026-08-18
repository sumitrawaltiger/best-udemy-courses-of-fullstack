import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "RAG idea", text: "retrieve relevant chunks, put them in the prompt, then generate — model stays frozen" },
  { title: "Pipeline", text: "ingest → chunk → embed → store → retrieve → augment → generate" },
  { title: "RAG vs fine-tuning", text: "RAG for knowledge freshness; fine-tune for style/behavior" },
  { title: "Top-K & ranking", text: "fetch candidates then optionally re-rank before prompting" },
  { title: "Citations", text: "return source metadata so users can verify answers" },
  { title: "Failure modes", text: "bad chunks, wrong K, prompt stuffing, and silent empty retrieval" },
  { title: "Gemini + LangChain", text: "swap providers; the RAG shape stays the same" },
  { title: "Production bar", text: "eval sets, latency budgets, and fallbacks when retrieval misses" },
];

const CORE = [
  {
    icon: "🪜", title: "RAG Pipeline", titleClass: 'card-title-cyan', subtitle: "Flow",
    description:
      "Never ask the LLM alone about private docs — always retrieve first.",
    code: "q → retrieve(k)\n→ prompt(context)\n→ answer",
  },
  {
    icon: "⚖️", title: "RAG vs FT", titleClass: 'card-title-purple', subtitle: "Choose",
    description:
      "Docs change weekly? RAG. Need a fixed tone/format? Fine-tune (or both).",
    code: "knowledge → RAG\nbehavior → fine-tune",
  },
  {
    icon: "🏭", title: "Production RAG", titleClass: 'card-title-amber', subtitle: "Hardening",
    description:
      "Log retrieval hits, measure faithfulness, cache embeddings, set timeouts.",
    code: "eval · latency · fallback",
  },
];

const PRACTICE = [
  {
    icon: "🧪", title: "Gemini Q&A Lab", titleClass: 'card-title-cyan', subtitle: "Demo",
    description: "Index a PDF with LangChain; answer with grounded citations.",
    code: "retriever.invoke(q)\n→ llm with sources",
  },
  {
    icon: "📏", title: "Eval Set", titleClass: 'card-title-purple', subtitle: "Quality",
    description: "10 gold Q&A pairs — track hit@K and “answer cites source”.",
    code: "hit@5 · citation%",
  },
  {
    icon: "🔜", title: "Next: Fine-Tuning", titleClass: 'card-title-amber', subtitle: "Day 34",
    description: "Tomorrow — PEFT, LoRA, QLoRA on custom data.",
    link: { href: '/agentic-day-34', label: 'Go to Day 34 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "RAG", titleClass: 'card-title-cyan', subtitle: "PY Module 33",
    description: "Full lesson on the site for this module.",
    link: { href: "/python/learn/retrieval-augmented-generation", label: 'Open module →' },
  },
  {
    icon: "🎬", title: "RAG Explained", titleClass: 'card-title-purple', subtitle: "IBM",
    description: "IBM resource.",
    link: { href: "https://www.youtube.com/watch?v=T-D1OfcDW1M", label: 'Open →', external: true },
  },
  {
    icon: "📖", title: "LangChain RAG", titleClass: 'card-title-amber', subtitle: "Docs",
    description: "Docs resource.",
    link: { href: "https://python.langchain.com/docs/tutorials/rag/", label: 'Open →', external: true },
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

export default function AgenticDay33() {
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
          <Link to="/agentic-day-32" className="day001-nav-btn day001-nav-prev">← Day 32</Link>
          <p className="day001-datetime">Agentic AI Day 33 · 20 Sep 2026</p>
          <Link to="/agentic-day-34" className="day001-nav-btn day001-nav-next">Day 34 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>RAG</span><span>Day 33</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 33 <span aria-hidden="true">📚</span></h1>
              <p className="day001-day-theme">RETRIEVAL AUGMENTED GENERATION</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '22%' }} /></div>

        <p className="day001-summary">
          Day 33 ships grounded answers. Build a <strong>RAG pipeline</strong>, compare it to fine-tuning, and aim for production-ready retrieval quality.
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

        <CardSection icon="📚" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day33</span><span>#RAG</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
