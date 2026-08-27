import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "Prompt templates", text: "parameterize instructions so prompts stay reusable and testable" },
  { title: "Chains", text: "compose LLM calls and transforms into a pipeline (LCEL or classic chains)" },
  { title: "Agents & tools", text: "the model decides which tool to call — search, calculator, custom APIs" },
  { title: "Memory", text: "keep chat history or summaries so multi-turn conversations stay coherent" },
  { title: "Document loaders", text: "pull PDFs, web pages, and files into LangChain Document objects" },
  { title: "LCEL mindset", text: "Runnable sequences pipe inputs through prompts → model → parsers" },
  { title: "Error surfaces", text: "timeouts, empty tool results, and bad parses need clear fallbacks" },
  { title: "Day arc", text: "Days 31–32 finish LangChain; RAG and fine-tuning come next" },
];

const CORE = [
  {
    icon: "📝", title: "Prompt Templates", titleClass: 'card-title-cyan', subtitle: "Reusable",
    description:
      "Use ChatPromptTemplate / PromptTemplate with variables instead of raw f-strings.",
    code: "prompt | model | parser\n# LCEL pipe style",
  },
  {
    icon: "⛓️", title: "Chains", titleClass: 'card-title-purple', subtitle: "Compose",
    description:
      "Chain retrieval, prompting, and generation. Prefer small composable runnables over one mega-function.",
    code: "load → split → embed\n→ retrieve → generate",
  },
  {
    icon: "🛠️", title: "Agents + Tools", titleClass: 'card-title-amber', subtitle: "Act",
    description:
      "Bind tools to the model; the agent loop calls tools until it can answer.",
    code: "agent = create_tool_calling_agent(...)\nexecutor.invoke({ input })",
  },
];

const PRACTICE = [
  {
    icon: "💾", title: "Memory Types", titleClass: 'card-title-cyan', subtitle: "State",
    description: "Buffer for short chats; summary memory when history gets long.",
    code: "ConversationBufferMemory\nConversationSummaryMemory",
  },
  {
    icon: "📄", title: "Load Docs", titleClass: 'card-title-purple', subtitle: "Ingest",
    description: "PyPDFLoader / WebBaseLoader → Documents ready for splitters tomorrow.",
    code: "docs = loader.load()",
  },
  {
    icon: "🔜", title: "Next: Components", titleClass: 'card-title-amber', subtitle: "Day 32",
    description: "Tomorrow — splitters, embeddings, Hugging Face / Ollama hooks.",
    link: { href: '/agentic-day-32', label: 'Go to Day 32 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "LangChain Basic→Advanced", titleClass: 'card-title-cyan', subtitle: "PY Module 31",
    description: "Full lesson on the site for this module.",
    link: { href: "/python/learn/langchain-basic-to-advanced", label: 'Open module →' },
  },
  {
    icon: "🎬", title: "LangChain Agents", titleClass: 'card-title-purple', subtitle: "Video",
    description: "Video resource.",
    link: { href: "https://www.youtube.com/watch?v=aywZrzNaKjs", label: 'Open →', external: true },
  },
  {
    icon: "📖", title: "LangChain Docs", titleClass: 'card-title-amber', subtitle: "Docs",
    description: "Docs resource.",
    link: { href: "https://python.langchain.com/docs/introduction/", label: 'Open →', external: true },
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

export default function AgenticDay31() {
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
          <Link to="/agentic-day-30" className="day001-nav-btn day001-nav-prev">← Day 30</Link>
          <p className="day001-datetime">Agentic AI Day 31 · 27 Sep 2026</p>
          <Link to="/agentic-day-32" className="day001-nav-btn day001-nav-next">Day 32 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>LangChain</span><span>Day 31</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 31 <span aria-hidden="true">🔗</span></h1>
              <p className="day001-day-theme">LANGCHAIN BASIC TO ADVANCED</p>
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
          Day 31 goes deep on LangChain. Wire <strong>prompt templates</strong>, <strong>chains</strong>, <strong>agents with tools</strong>, <strong>memory</strong>, and <strong>document loaders</strong> into real flows.
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

        <CardSection icon="🔗" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day31</span><span>#LangChain</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
