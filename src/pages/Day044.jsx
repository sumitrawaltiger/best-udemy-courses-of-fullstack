import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LANGCHAIN_JS = 'https://js.langchain.com/docs/introduction/';
const LANGGRAPH_JS = 'https://langchain-ai.github.io/langgraphjs/';

const LEARNT_TODAY = [
  { title: 'The architecture', text: 'a modern AI app is a pipeline: UI → orchestration → models → tools → storage' },
  { title: 'What an agent really is', text: 'a loop that decides the next step using an LLM and can call tools — not magic, just control flow + reasoning' },
  { title: 'Real use cases', text: 'support bots, research assistants, internal copilots, data pipelines — anywhere decisions branch on context' },
  { title: 'Chains vs agents', text: 'a chain is a fixed sequence; an agent chooses its own steps — use the simplest one that solves the job' },
  { title: 'When a chain is enough', text: 'if the steps never change (prompt → model → parse), a chain is cheaper, faster and easier to debug' },
  { title: 'When an agent is worth it', text: 'when the path is unknown at design time — routing, tool selection, retries, multi-step planning' },
  { title: 'LangChain.js vs LangGraph.js', text: 'LangChain gives the pieces (models, prompts, tools, LCEL); LangGraph gives stateful control flow' },
  { title: 'JSON-first teaser', text: 'free-text output “lies” — schemas turn model replies into typed, validatable data you can trust' },
];

const ARCH = [
  {
    icon: '🏗️', title: 'The Pipeline', titleClass: 'card-title-cyan', subtitle: 'UI → … → Storage',
    description:
      'Every AI app is the same shape: a UI sends a request, an orchestration layer decides what to do, models reason, tools act on the world, and storage keeps state. Agents live in the orchestration layer.',
    code: '// UI  →  orchestration  →  models\n//                ↘  tools  ↘  storage\n// agents = the orchestration brain',
  },
  {
    icon: '🤔', title: 'What Is An Agent', titleClass: 'card-title-purple', subtitle: 'Decide → Act → Repeat',
    description:
      'An honest definition: an agent is a loop where an LLM looks at the current state, decides the next action (answer, or call a tool), acts, and repeats until done. No buzzwords — just reasoning plus control flow.',
    code: '// while not done:\n//   step = llm.decide(state)\n//   state = act(step)   // tool or answer\n// → autonomous, but inspectable',
  },
];

const CHOICE = [
  {
    icon: '⛓️', title: 'Chain', titleClass: 'card-title-cyan', subtitle: 'Fixed Sequence',
    description:
      'A chain runs the same steps every time — prompt → model → output parser. Deterministic, cheap and easy to reason about. If the flow never branches, you don’t need an agent.',
    code: '// prompt → model → parser\n// same path every run\n// cheapest + most predictable',
  },
  {
    icon: '🕹️', title: 'Agent', titleClass: 'card-title-purple', subtitle: 'Chooses Its Path',
    description:
      'An agent decides at runtime: answer directly, search the web, call a tool, retry. Powerful when the path is unknown up front — but more moving parts, so only reach for it when a chain isn’t enough.',
    code: '// runtime decisions:\n// direct answer? search? tool? retry?\n// use when the path varies per input',
  },
  {
    icon: '🧰', title: 'LangChain + LangGraph', titleClass: 'card-title-amber', subtitle: 'Pieces + Control',
    description:
      'LangChain.js provides the building blocks — models, prompt templates, output parsers, tools, and LCEL to compose them. LangGraph.js adds stateful graphs: nodes, edges, retries and human-in-the-loop.',
    code: '// LangChain.js → models, prompts, tools, LCEL\n// LangGraph.js → state, nodes, edges, loops\n// together → real, controllable agents',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'LangChain.js', titleClass: 'card-title-cyan', subtitle: 'Building Blocks',
    description:
      'Models, prompts, output parsers and tools composed with LCEL — the toolbox for the next few days of projects.',
    link: { href: LANGCHAIN_JS, label: 'Open LangChain.js docs →', external: true },
  },
  {
    icon: '🕸️', title: 'LangGraph.js', titleClass: 'card-title-purple', subtitle: 'Stateful Control',
    description:
      'When a chain isn’t enough: state, nodes, edges, branching, retries and human approvals. We’ll build a real graph later this phase.',
    link: { href: LANGGRAPH_JS, label: 'Open LangGraph.js docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Hello Agent', titleClass: 'card-title-amber', subtitle: 'Day 45 Preview',
    description:
      'Tomorrow — set up the TS/Node project, a multi-provider factory (OpenAI, Gemini, Groq), and a first “Hello Agent” that runs like a clean backend primitive.',
    link: { href: '/day-045', label: 'Go to Day 45 →' },
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

export default function Day044() {
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
          <Link to="/day-043" className="day001-nav-btn day001-nav-prev">← Day 43</Link>
          <p className="day001-datetime">Agentic AI Day 44</p>
          <Link to="/day-045" className="day001-nav-btn day001-nav-next">Day 45 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>LangChain.js</span><span>Foundations</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 44 <span aria-hidden="true">🏗️</span></h1>
              <p className="day001-day-theme">FOUNDATIONS — LANGCHAIN, AGENTS &amp; FLOW</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '44%' }} /></div>

        <p className="day001-summary">
          The mental model. Every AI app is one pipeline: <strong>UI → orchestration → models → tools → storage</strong>,
          and agents live in the orchestration layer. An <strong>agent</strong> is just a loop — an LLM decides the
          next step, acts (answer or tool call), and repeats. The key judgement call is{' '}
          <strong>chains vs agents</strong>: a <strong>chain</strong> is a fixed sequence (cheap, predictable), an{' '}
          <strong>agent</strong> chooses its own path (powerful, more moving parts) — use the simplest one that works.{' '}
          <strong>LangChain.js</strong> supplies the pieces (models, prompts, parsers, tools, LCEL);{' '}
          <strong>LangGraph.js</strong> supplies stateful control flow. And the recurring theme:{' '}
          <strong>JSON-first</strong> — strings lie, <em>schemas save you.</em>
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

        <CardSection icon="🏗️" title="ARCHITECTURE & AGENTS" cards={ARCH} columns={2} />
        <CardSection icon="⛓️" title="CHAINS vs AGENTS" cards={CHOICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#AgenticAI</span><span>#LangChain</span><span>#LangGraph</span><span>#GenAI</span>
        </footer>
      </div>
    </div>
  );
}
