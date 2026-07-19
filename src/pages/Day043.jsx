import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LANGCHAIN_JS = 'https://js.langchain.com/docs/introduction/';

const LEARNT_TODAY = [
  { title: 'A new track begins', text: 'Days 1–42 built AI from first principles; now Phase 1 pivots to building real agents in TypeScript' },
  { title: 'What this course is', text: 'a hands-on, project-driven path to a reusable “agent platform” — not toy scripts or copy-paste demos' },
  { title: 'What it isn’t', text: 'not a prompt-engineering listicle and not tied to one vendor — the skills transfer across models' },
  { title: 'Model choice is a decision', text: 'pick OpenAI / Gemini / Groq / local per task, trading cost vs speed vs reliability — not brand loyalty' },
  { title: 'Cost & latency mindset', text: 'cheap+fast models for routing and drafts; stronger models only where quality really pays' },
  { title: 'One provider factory', text: 'every project talks to models through a single swappable factory, so switching providers is one line' },
  { title: 'Everything compounds', text: 'each project (search, RAG, LangGraph) plugs into the same platform you keep extending' },
  { title: 'How to follow', text: 'build along in TS/Node, keep the repo, and treat each day as a lego brick for the next' },
];

const COURSE = [
  {
    icon: '🧭', title: 'What It Is / Isn’t', titleClass: 'card-title-cyan', subtitle: 'Build A Platform',
    description:
      'A practical journey to production-style agents in TypeScript. Every lesson ships a small, real backend primitive — the goal is a reusable agent platform you can extend, not disposable demos.',
    footer: 'projects → a platform you own, not scattered scripts',
  },
  {
    icon: '🧠', title: 'How To Follow', titleClass: 'card-title-purple', subtitle: 'Build Along',
    description:
      'Set up once, then build every day in the same repo. Each project is a lego brick: the provider factory, JSON contracts, tools, RAG and LangGraph all snap together as you go.',
    footer: 'keep the repo · extend, don’t restart',
  },
];

const MODELS = [
  {
    icon: '⚖️', title: 'Choose Models Smartly', titleClass: 'card-title-cyan', subtitle: 'Cost · Speed · Reliability',
    description:
      'Models are a per-task decision, not brand loyalty. Use cheap, fast models (Groq, small OpenAI/Gemini) for routing and drafts; reserve stronger models for the steps where quality actually pays off.',
    code: '// pick by job, not by hype\n// route/classify → fast + cheap\n// final answer → stronger model\n// offline/private → local model',
  },
  {
    icon: '🏭', title: 'One Provider Factory', titleClass: 'card-title-purple', subtitle: 'Swap In One Line',
    description:
      'Every project reaches models through a single factory. OpenAI, Gemini, Groq and local models all sit behind one interface, so switching providers never touches your agent logic.',
    code: '// getModel("fast") | getModel("smart")\n// factory hides OpenAI/Gemini/Groq/local\n// swap provider → change one config',
  },
  {
    icon: '🧩', title: 'It All Connects', titleClass: 'card-title-amber', subtitle: 'A Reusable Platform',
    description:
      'Search, Light RAG, LangGraph orchestration, observability — each project extends the same platform. By the end you have a toolkit, not a folder of unrelated experiments.',
    footer: 'search → RAG → tools → graphs → one platform',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'LangChain.js', titleClass: 'card-title-cyan', subtitle: 'The Docs',
    description:
      'The framework this phase builds on. Skim the intro now — we’ll go deep into models, prompts, output parsers, tools and LCEL over the coming days.',
    link: { href: LANGCHAIN_JS, label: 'Open LangChain.js docs →', external: true },
  },
  {
    icon: '🤖', title: 'Phase 1 · Agentic AI', titleClass: 'card-title-purple', subtitle: 'The Track',
    description:
      'This is the first module of the 100-day Agentic AI phase, now in TypeScript. Explore the wider GenAI track for the bigger picture.',
    link: { href: '/genai', label: 'Explore the GenAI track →' },
  },
  {
    icon: '🔜', title: 'Next: Foundations', titleClass: 'card-title-amber', subtitle: 'Day 44 Preview',
    description:
      'Tomorrow — the mental model: modern AI app architecture, chains vs agents, and where LangChain.js and LangGraph.js each fit.',
    link: { href: '/day-044', label: 'Go to Day 44 →' },
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

export default function Day043() {
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
          <Link to="/day-042" className="day001-nav-btn day001-nav-prev">← Day 42</Link>
          <p className="day001-datetime">Agentic AI Day 43</p>
          <Link to="/day-044" className="day001-nav-btn day001-nav-next">Day 44 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>TypeScript</span><span>Mindset</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 43 <span aria-hidden="true">🧭</span></h1>
              <p className="day001-day-theme">AGENTIC AI — INTRO &amp; MINDSET</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '43%' }} /></div>

        <p className="day001-summary">
          A new chapter of Phase 1. The first 42 days built AI from first principles; now the focus turns to{' '}
          <strong>building real agents in TypeScript</strong>. This course is <strong>project-driven</strong> —
          every lesson ships a small backend primitive that snaps into a <strong>reusable “agent platform.”</strong>{' '}
          The core mindset: <strong>choose models smartly</strong> (OpenAI / Gemini / Groq / local) by trading{' '}
          <strong>cost vs speed vs reliability</strong>, and reach every one of them through a single{' '}
          <strong>provider factory</strong> so switching is a one-line change. Nothing here is a toy script —
          each project (search, RAG, LangGraph) <em>extends the same platform you keep building.</em>
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

        <CardSection icon="🧭" title="THE COURSE" cards={COURSE} columns={2} />
        <CardSection icon="⚖️" title="MODELS & PLATFORM" cards={MODELS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#AgenticAI</span><span>#TypeScript</span><span>#LangChain</span><span>#GenAI</span>
        </footer>
      </div>
    </div>
  );
}
