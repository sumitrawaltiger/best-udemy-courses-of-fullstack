import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LANGCHAIN_YT = 'https://www.youtube.com/watch?v=LbT1yp6NWGY';
const LANGCHAIN_DOCS = 'https://python.langchain.com/';

const LEARNT_TODAY = [
  { title: 'What LangChain is', text: 'a framework for composing LLM calls, prompts, memory, and tools into structured, reusable pipelines' },
  { title: 'Why not call the API directly', text: 'LangChain standardizes prompts, output parsing, retries, and swapping models or providers without rewriting everything' },
  { title: 'Virtual environments', text: 'isolate LangChain\'s dependencies per project with venv or conda before installing anything' },
  { title: 'LangChain + OpenAI', text: 'wrap an OpenAI chat model in LangChain\'s ChatOpenAI class and call it through one unified interface' },
  { title: 'Your first chain', text: 'a prompt template piped into a model piped into an output parser — the smallest complete LangChain pipeline' },
  { title: 'LCEL', text: 'LangChain Expression Language — the | operator chains components together declaratively, left to right' },
  { title: 'Ecosystem map', text: 'langchain-core (abstractions), langchain-community (integrations), and langgraph (agent orchestration)' },
  { title: 'Why agents need this', text: 'LangChain\'s abstractions are the plumbing tomorrow\'s tool-using, multi-step agents get built on top of' },
];

const CORE = [
  {
    icon: '🔌', title: 'LangChain + OpenAI', titleClass: 'card-title-cyan', subtitle: 'One Unified Interface',
    description:
      'ChatOpenAI wraps the raw OpenAI API in LangChain\'s common model interface, so the same chain code works no matter which provider sits underneath.',
    code: 'from langchain_openai import ChatOpenAI\nmodel = ChatOpenAI(model="gpt-4o")',
  },
  {
    icon: '⛓️', title: 'Your First Chain (LCEL)', titleClass: 'card-title-purple', subtitle: 'Prompt → Model → Parser',
    description:
      'LCEL\'s | operator pipes a prompt template into a model into an output parser — a readable, composable pipeline instead of nested function calls.',
    code: 'chain = prompt | model | output_parser\nchain.invoke({"topic": "agents"})',
  },
  {
    icon: '🗺️', title: 'Ecosystem Map', titleClass: 'card-title-amber', subtitle: 'Core · Community · LangGraph',
    description:
      'langchain-core holds the abstractions, langchain-community holds hundreds of integrations, and langgraph handles multi-step agent orchestration.',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Hello LangChain', titleClass: 'card-title-cyan', subtitle: 'Hands-On',
    description: 'Set up a virtual environment, install langchain + langchain-openai, and run your first prompt → model → parser chain.',
    code: 'pip install langchain langchain-openai',
  },
  {
    icon: '🔄', title: 'Swap Providers', titleClass: 'card-title-purple', subtitle: 'Practice',
    description: 'Change one line — the model class — and see the exact same chain run against a different LLM provider.',
  },
  {
    icon: '🔜', title: 'Next: Open Source LLMs', titleClass: 'card-title-amber', subtitle: 'Day 30 Preview',
    description: 'Tomorrow — Llama, Falcon, and using open-weight models with LangChain instead of a paid API.',
    link: { href: '/agentic-day-30', label: 'Go to Day 30 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Introduction to LangChain', titleClass: 'card-title-cyan', subtitle: 'PY Module 29',
    description: 'Full lesson — LangChain overview, virtual environments, LangChain + OpenAI, and your first chain.',
    link: { href: '/python/learn/introduction-to-langchain', label: 'Open PY Module 29 →' },
  },
  {
    icon: '🎬', title: 'LangChain Crash Course', titleClass: 'card-title-purple', subtitle: 'freeCodeCamp',
    description: 'A complete beginner-to-working walkthrough of the LangChain framework.',
    link: { href: LANGCHAIN_YT, label: 'Watch LangChain crash course →', external: true },
  },
  {
    icon: '📖', title: 'LangChain Docs', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Official Python documentation — the definitive reference for every module and integration.',
    link: { href: LANGCHAIN_DOCS, label: 'Open LangChain docs →', external: true },
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

export default function AgenticDay29() {
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
          <Link to="/agentic-day-28" className="day001-nav-btn day001-nav-prev">← Day 28</Link>
          <p className="day001-datetime">Agentic AI Day 29 · 28 Sep 2026</p>
          <Link to="/agentic-day-30" className="day001-nav-btn day001-nav-next">Day 30 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>LangChain</span><span>Intro</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 29 <span aria-hidden="true">⛓️</span></h1>
              <p className="day001-day-theme">INTRODUCTION TO LANGCHAIN</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '19%' }} /></div>

        <p className="day001-summary">
          Day 29 introduces the framework the rest of Phase 1 leans on. Why <strong>LangChain</strong> exists,
          wiring it to <strong>OpenAI</strong>, and building the smallest possible pipeline — a{' '}
          <strong>prompt → model → parser</strong> chain — with LCEL's <code>|</code> operator.
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

        <CardSection icon="⛓️" title="LANGCHAIN BASICS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#LangChain</span><span>#Day29</span><span>#GenAI</span><span>#LCEL</span>
        </footer>
      </div>
    </div>
  );
}
