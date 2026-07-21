import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_REPO = 'https://github.com/Rohitnegi9/STRIKEGenAI';
const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture01';
const AI_STUDIO = 'https://aistudio.google.com/';

const LEARNT_TODAY = [
  { title: 'New phase begins', text: 'Phase 1 of the plan is Agentic AI — I am learning it from Coder Army’s STRIKE GenAI (Rohit Negi), entirely in JavaScript' },
  { title: 'What Generative AI is', text: 'models that generate new content — text, code, answers — instead of only classifying existing data' },
  { title: 'LLMs predict tokens', text: 'a large language model does one thing: predict the most likely next token, over and over' },
  { title: 'Prompt and completion', text: 'you send a prompt, the model completes it token by token — that loop is every LLM feature' },
  { title: 'Why JavaScript', text: 'the whole course uses JS with Google’s Gemini SDK (@google/genai) — no Python required' },
  { title: 'The ecosystem', text: 'OpenAI (GPT), Google (Gemini), Meta (Llama) — this course builds on Google Gemini' },
  { title: 'Google AI Studio', text: 'create a free Gemini API key at aistudio.google.com to start building' },
  { title: 'The road ahead', text: 'from the first API call to chat, tools, RAG, autonomous agents, LangGraph and full projects' },
];

const WHY = [
  {
    icon: '🚀', title: 'A New Phase', titleClass: 'card-title-cyan', subtitle: 'Agentic AI Starts',
    description:
      'After the HTML/CSS/JavaScript foundation, Phase 1 of the roadmap is Agentic AI. I am following Coder Army’s STRIKE GenAI by Rohit Negi — built end to end in JavaScript.',
    footer: '100 days · JavaScript · Google Gemini · agents',
  },
  {
    icon: '🧠', title: 'What is Generative AI?', titleClass: 'card-title-purple', subtitle: 'It Generates',
    description:
      'Traditional ML classifies or predicts labels. Generative AI produces brand-new content — text, code, summaries, answers — from a prompt. LLMs are the engine behind it.',
  },
  {
    icon: '🟨', title: 'Why JavaScript?', titleClass: 'card-title-amber', subtitle: 'No Python Needed',
    description:
      'Most GenAI tutorials are in Python. This course proves you can build the entire modern stack — chat, tools, RAG, agents — in JavaScript with Google’s @google/genai SDK.',
    link: { href: GH_REPO, label: 'STRIKE GenAI on GitHub →', external: true },
  },
];

const HOW = [
  {
    icon: '🔤', title: 'Token Prediction', titleClass: 'card-title-cyan', subtitle: 'The Core Truth',
    description:
      'An LLM does not think or understand — it predicts the next token (a word or piece of a word). Given "The capital of France is", it predicts "Paris". Repeat that, and you get every answer.',
    code: '"The capital of France is"  →  "Paris"\n// every LLM output is this loop, one token at a time',
  },
  {
    icon: '💬', title: 'Prompt → Completion', titleClass: 'card-title-purple', subtitle: 'The Interaction',
    description:
      'You send a prompt; the model returns a completion built token by token. Everything — chat, tools, agents — is layered on top of this single request/response idea.',
    code: '// prompt in, completion out\nprompt:      "Explain what a variable is"\ncompletion:  "A variable is a named container ..."',
  },
  {
    icon: '📅', title: 'Parametric Knowledge', titleClass: 'card-title-amber', subtitle: 'And Its Limits',
    description:
      'A model only knows what it saw in training (its parametric knowledge), up to a cutoff date. It has no live data — which is exactly why later lectures add tools and RAG.',
    code: '// no internet, no live prices, no today’s news\n// → we will give it tools (Day 4–5) and RAG (later)',
  },
];

const TOOLKIT = [
  {
    icon: '🔑', title: 'Google AI Studio', titleClass: 'card-title-cyan', subtitle: 'Free Gemini Key',
    description:
      'Sign in to Google AI Studio, create an API key, and keep it safe. This key lets your JavaScript talk to the Gemini models used throughout the course.',
    link: { href: AI_STUDIO, label: 'Open Google AI Studio →', external: true },
  },
  {
    icon: '📦', title: 'The Gemini SDK', titleClass: 'card-title-purple', subtitle: '@google/genai',
    description:
      'One npm package is the whole toolkit for now. Install it, load the key from a .env file, and you can send your first prompt from Node in a few lines — that is tomorrow.',
    code: 'npm install @google/genai dotenv\n\n# .env\nGEMINI_API_KEY=your_key_here',
  },
  {
    icon: '🗺️', title: 'The Road Ahead', titleClass: 'card-title-amber', subtitle: '100 Days',
    description:
      'First code and chat, then system instructions, tools and function calling, RAG, autonomous agents, LangGraph, and real projects. Today is the map; tomorrow we write code.',
    footer: 'chat → tools → RAG → agents → LangGraph → projects',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'STRIKE GenAI Repo', titleClass: 'card-title-cyan', subtitle: 'Coder Army · GitHub',
    description:
      'All lecture code for the course lives here — Lecture 01 onward. Clone it and follow along as each day builds on the last.',
    link: { href: GH_LECTURE, label: 'Open Lecture 01 →', external: true },
  },
  {
    icon: '🔑', title: 'Get Your API Key', titleClass: 'card-title-purple', subtitle: 'Before Day 2',
    description:
      'Create a Gemini API key in Google AI Studio and put it in a .env file. You will need it for your first program tomorrow.',
    link: { href: AI_STUDIO, label: 'Google AI Studio →', external: true },
  },
  {
    icon: '🔜', title: 'Next: First Code', titleClass: 'card-title-amber', subtitle: 'Prereq 2 Preview',
    description:
      'Tomorrow is Lecture 02 — write our first code: the Gemini SDK, a single request, then a multi-turn chatbot with history, system instructions and thinking control.',
    link: { href: '/day-018', label: 'Go to Prereq 2 →' },
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

export default function Day017() {
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
          <Link to="/day-000" className="day001-nav-btn day001-nav-prev">← Setup</Link>
          <p className="day001-datetime">Prerequisite · Gen AI 1</p>
          <Link to="/day-018" className="day001-nav-btn day001-nav-next">Prereq 2 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Prerequisite</span><span>Gen AI</span><span>Lecture 01</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">PREREQ 1 <span aria-hidden="true">🤖</span></h1>
              <p className="day001-day-theme">INTRODUCTION TO GENERATIVE AI</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">PREREQUISITE · GEN AI</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '1%' }} /></div>

        <p className="day001-summary">
          Day one of <strong>Phase 1 — Agentic AI</strong>, from Coder Army’s <strong>STRIKE GenAI</strong> by
          Rohit Negi, all in <strong>JavaScript</strong>. <strong>Generative AI</strong> creates new content
          instead of just classifying it, and an <strong>LLM</strong> does one thing —{' '}
          <strong>predict the next token</strong> — turning a <code>prompt</code> into a <code>completion</code>.
          A model only knows its training data (parametric knowledge) with a cutoff, so later days add{' '}
          <strong>tools</strong> and <strong>RAG</strong>. The whole toolkit for now: <strong>Node</strong>, the{' '}
          <code>@google/genai</code> SDK, and a free <strong>Google AI Studio</strong> key.{' '}
          <em>Tomorrow we write our first code.</em>
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

        <CardSection icon="🚀" title="WHY AGENTIC AI" cards={WHY} columns={3} />
        <CardSection icon="🧠" title="HOW LLMs WORK" cards={HOW} columns={3} />
        <CardSection icon="🧰" title="THE TOOLKIT" cards={TOOLKIT} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#AgenticAI</span><span>#CoderArmy</span><span>#JavaScript</span>
        </footer>
      </div>
    </div>
  );
}
