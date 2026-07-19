import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LCEL = 'https://js.langchain.com/docs/concepts/lcel/';
const PROMPTS = 'https://js.langchain.com/docs/concepts/prompt_templates/';

const LEARNT_TODAY = [
  { title: 'Why LangChain.js, not raw SDKs', text: 'it standardises models, prompts, parsers and tools so you swap pieces without rewriting glue code' },
  { title: 'Prompt templates', text: 'parameterised prompts with typed variables — no more string concatenation for every call' },
  { title: 'Models are interchangeable', text: 'ChatOpenAI, ChatGoogleGenerativeAI, ChatGroq share one invoke interface (the factory pays off)' },
  { title: 'Output parsers', text: 'turn a raw reply into a usable value — string, JSON, or a Zod-validated object' },
  { title: 'Runnables', text: 'every piece (prompt, model, parser) is a Runnable — a unit you can invoke, batch and stream' },
  { title: 'LCEL', text: 'the LangChain Expression Language pipes Runnables together with .pipe() into one composable chain' },
  { title: 'RunnableSequence & RunnableMap', text: 'sequence runs steps in order; map runs several in parallel and merges their outputs' },
  { title: 'Deterministic tool-calling', text: 'bind Zod-typed tools and keep temperature at 0 so the model picks tools predictably' },
];

const WHY = [
  {
    icon: '🧩', title: 'Why Not Raw SDKs', titleClass: 'card-title-cyan', subtitle: 'One Vocabulary',
    description:
      'Raw SDKs differ per vendor and force you to write glue for prompts, parsing and tools. LangChain.js gives one vocabulary — models, prompts, parsers, tools — so components snap together and swap freely.',
    footer: 'less glue · swap models, prompts & parsers freely',
  },
  {
    icon: '📝', title: 'Prompt Templates', titleClass: 'card-title-purple', subtitle: 'Typed Variables',
    description:
      'Templates parameterise prompts with named variables and a clean system/human structure — reusable, testable, and far safer than hand-built strings.',
    code: 'const prompt = ChatPromptTemplate.fromMessages([\n  ["system", "You are a concise assistant."],\n  ["human", "{question}"],\n]);\n// prompt.invoke({ question })',
  },
];

const LCEL_CARDS = [
  {
    icon: '🔌', title: 'Runnables', titleClass: 'card-title-cyan', subtitle: 'The Common Unit',
    description:
      'Prompts, models and parsers are all Runnables — each supports invoke, batch and stream. Because they share one interface, they compose like lego.',
    code: '// every piece is a Runnable:\n// prompt.invoke(...) · model.invoke(...)\n// parser.invoke(...) · .batch([...]) · .stream(...)',
  },
  {
    icon: '⛓️', title: 'LCEL Pipelines', titleClass: 'card-title-purple', subtitle: '.pipe() It Together',
    description:
      'The LangChain Expression Language wires Runnables into a chain. Data flows prompt → model → parser as one callable you can invoke or stream.',
    code: 'const chain = prompt\n  .pipe(getModel("smart"))\n  .pipe(new StringOutputParser());\nconst answer = await chain.invoke({ question });',
  },
  {
    icon: '🗺️', title: 'Sequence & Map', titleClass: 'card-title-amber', subtitle: 'Order Or Parallel',
    description:
      'RunnableSequence runs steps in order; RunnableMap runs several Runnables in parallel and merges the results into one object — great for gathering multiple signals at once.',
    code: 'RunnableMap.from({\n  summary: summaryChain,\n  keywords: keywordChain,\n}); // both run in parallel → { summary, keywords }',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'LCEL', titleClass: 'card-title-cyan', subtitle: 'Expression Language',
    description:
      'The composition model behind every chain in this phase — Runnables, .pipe(), sequences and maps.',
    link: { href: LCEL, label: 'Open the LCEL guide →', external: true },
  },
  {
    icon: '📝', title: 'Prompt Templates', titleClass: 'card-title-purple', subtitle: 'LangChain.js',
    description:
      'ChatPromptTemplate and friends — parameterised, reusable prompts with a clean message structure.',
    link: { href: PROMPTS, label: 'Open the prompts guide →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Search Agent', titleClass: 'card-title-amber', subtitle: 'Day 49 Preview',
    description:
      'Tomorrow — Tool-Calling 101: build a Search v1 agent with LCEL that routes direct-answer vs web search, and exposes a /search endpoint.',
    link: { href: '/day-049', label: 'Go to Day 49 →' },
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

export default function Day048() {
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
          <Link to="/day-047" className="day001-nav-btn day001-nav-prev">← Day 47</Link>
          <p className="day001-datetime">Agentic AI Day 48</p>
          <Link to="/day-049" className="day001-nav-btn day001-nav-next">Day 49 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>LangChain.js</span><span>LCEL</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 48 <span aria-hidden="true">⛓️</span></h1>
              <p className="day001-day-theme">LANGCHAIN.JS FUNDAMENTALS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '48%' }} /></div>

        <p className="day001-summary">
          Why reach for <strong>LangChain.js</strong> over raw SDKs? One vocabulary for{' '}
          <strong>prompts, models, parsers and tools</strong>, so pieces swap without rewriting glue.{' '}
          <strong>Prompt templates</strong> parameterise prompts with typed variables; <strong>output parsers</strong>{' '}
          turn replies into strings or validated objects. The core mental model is <strong>Runnables + LCEL</strong>:
          every piece is a Runnable, and <code>.pipe()</code> composes them into a chain —{' '}
          <strong>RunnableSequence</strong> for order, <strong>RunnableMap</strong> for parallel. Bind{' '}
          <strong>Zod-typed tools</strong> and keep temperature at 0 for deterministic tool-calling.{' '}
          <em>Next: put it to work in a search agent.</em>
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

        <CardSection icon="🧩" title="THE BUILDING BLOCKS" cards={WHY} columns={2} />
        <CardSection icon="⛓️" title="RUNNABLES & LCEL" cards={LCEL_CARDS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#AgenticAI</span><span>#LangChain</span><span>#LCEL</span><span>#TypeScript</span>
        </footer>
      </div>
    </div>
  );
}
