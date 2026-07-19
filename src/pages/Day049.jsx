import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TOOLS = 'https://js.langchain.com/docs/concepts/tools/';
const TAVILY = 'https://docs.tavily.com/';

const LEARNT_TODAY = [
  { title: 'First tool-using agent', text: 'a Search v1 that decides: answer directly, or go to the web — then returns strict JSON' },
  { title: 'The routing decision', text: 'a cheap classifier step chooses "direct" vs "search" so we only pay for the web when needed' },
  { title: 'Typed tool schemas', text: 'Zod schemas for search results, open-url and summaries — tools have contracts, not loose args' },
  { title: 'Tavily integration', text: 'wrap a web-search API (Tavily or similar) as a LangChain tool the agent can call' },
  { title: 'The LCEL pipeline', text: 'route → fetch → summarize → validate → return, composed with .pipe() as one chain' },
  { title: 'Summaries, not dumps', text: 'the agent condenses fetched pages into a grounded answer, not a wall of raw text' },
  { title: 'Strict JSON out', text: 'every response is schema-validated — { answer, sources, usedSearch } for any UI' },
  { title: 'HTTP + UI', text: 'expose it as a /search endpoint and wire a simple Next.js page to call it' },
];

const ROUTE = [
  {
    icon: '🔀', title: 'Route First', titleClass: 'card-title-cyan', subtitle: 'Direct vs Search',
    description:
      'A quick, cheap classifier decides whether the question needs live web data or can be answered directly. Routing keeps the agent fast and avoids paying for search on trivial queries.',
    code: '// classify(question) → "direct" | "search"\n// direct → answer from the model\n// search → run the web tool, then summarise',
  },
  {
    icon: '📐', title: 'Typed Tool Schemas', titleClass: 'card-title-purple', subtitle: 'Contracts, Not Args',
    description:
      'Each tool declares a Zod schema — search results, open-url, summary. The model must fill the schema to call a tool, so inputs and outputs stay validated end to end.',
    code: 'const SearchResult = z.object({\n  title: z.string(), url: z.string().url(),\n  snippet: z.string(),\n});\n// tools carry schemas → predictable calls',
  },
];

const PIPE = [
  {
    icon: '🌐', title: 'Tavily As A Tool', titleClass: 'card-title-cyan', subtitle: 'Web Search',
    description:
      'Wrap a search API (Tavily works well for agents) as a LangChain tool. The agent calls it like any other tool and gets back typed results to reason over.',
    code: 'const search = tool(async ({ query }) => tavily(query), {\n  name: "web_search",\n  schema: z.object({ query: z.string() }),\n});',
  },
  {
    icon: '⛓️', title: 'The LCEL Pipeline', titleClass: 'card-title-purple', subtitle: 'Route → Fetch → Sum',
    description:
      'One LCEL chain ties it together: route the query, fetch results if needed, summarise into a grounded answer, then validate against the schema before returning.',
    code: '// route → (search? fetch results) → summarise\n// → StructuredOutput({ answer, sources, usedSearch })\n// all composed with .pipe()',
  },
  {
    icon: '🖥️', title: '/search + Next.js', titleClass: 'card-title-amber', subtitle: 'Endpoint & UI',
    description:
      'Expose the chain as a POST /search endpoint returning strict JSON, and wire a minimal Next.js page: type a query, see the answer and its sources.',
    code: '// POST /search { question }\n// → { answer, sources[], usedSearch }\n// Next.js page renders answer + source links',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'LangChain Tools', titleClass: 'card-title-cyan', subtitle: 'tool() + schemas',
    description:
      'How to define tools with Zod schemas and let a model call them — the backbone of every agent from here on.',
    link: { href: TOOLS, label: 'Open the tools guide →', external: true },
  },
  {
    icon: '🔎', title: 'Tavily', titleClass: 'card-title-purple', subtitle: 'Search API',
    description:
      'A search API built for LLM agents — clean, rankable results that summarise well. Swap in any equivalent.',
    link: { href: TAVILY, label: 'Open Tavily docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: RAG Fundamentals', titleClass: 'card-title-amber', subtitle: 'Day 50 Preview',
    description:
      'Tomorrow — a no-buzzword explanation of RAG: ingestion vs query, chunking & embeddings, and vector-store concepts.',
    link: { href: '/day-050', label: 'Go to Day 50 →' },
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

export default function Day049() {
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
          <Link to="/day-048" className="day001-nav-btn day001-nav-prev">← Day 48</Link>
          <p className="day001-datetime">Agentic AI Day 49</p>
          <Link to="/day-050" className="day001-nav-btn day001-nav-next">Day 50 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>LangChain.js</span><span>Tool-Calling</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 49 <span aria-hidden="true">🔎</span></h1>
              <p className="day001-day-theme">TOOL-CALLING 101 — SEARCH v1 (LCEL)</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '49%' }} /></div>

        <p className="day001-summary">
          The first tool-using agent. <strong>Search v1</strong> decides whether to{' '}
          <strong>answer directly or search the web</strong> — a cheap routing step so we only pay for search when
          it’s needed. Tools carry <strong>typed Zod schemas</strong> (search results, open-url, summaries), and{' '}
          <strong>Tavily</strong> is wrapped as a LangChain tool. One <strong>LCEL pipeline</strong> routes, fetches,{' '}
          <strong>summarises</strong> into a grounded answer, and validates to strict JSON —{' '}
          <code>{'{ answer, sources, usedSearch }'}</code>. Finally, expose it as a <strong>/search</strong> endpoint
          and call it from a simple <strong>Next.js</strong> UI. <em>Next: RAG from first principles.</em>
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

        <CardSection icon="🔀" title="ROUTE & SCHEMAS" cards={ROUTE} columns={2} />
        <CardSection icon="⛓️" title="THE SEARCH PIPELINE" cards={PIPE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#AgenticAI</span><span>#ToolCalling</span><span>#LCEL</span><span>#LangChain</span>
        </footer>
      </div>
    </div>
  );
}
