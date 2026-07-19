import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture19';

const LEARNT_TODAY = [
  { title: 'Classify the query first', text: 'before retrieving, ask the LLM: is this factual, similarity, or descriptive?' },
  { title: 'Factual → Neo4j', text: '"movies directed by Nolan" is a relationship question — answer it with a Cypher graph query' },
  { title: 'Similarity → Pinecone', text: '"movies like Inception" is a vector question — answer it with semantic search' },
  { title: 'Descriptive → Pinecone', text: '"tell me about Inception" retrieves the entity’s text and lets the model summarise it' },
  { title: 'Route to a handler', text: 'each query type has its own handler; the runner classifies then dispatches' },
  { title: 'Cypher templates', text: 'safe, parameterised graph queries turn a classified question into precise graph traversal' },
  { title: 'Best of both worlds', text: 'exact relationships from the graph, fuzzy matches from the vectors — one hybrid assistant' },
];

const CLASSIFY = [
  {
    icon: '🧠', title: 'Classify The Query', titleClass: 'card-title-cyan', subtitle: 'One LLM Call',
    description:
      'A classifier prompt asks the model to label the question as factual, similarity, or descriptive and return strict JSON. That label decides everything downstream.',
    code: 'const CLASSIFIER_PROMPT = `Classify the query as:\n"factual"     — lists/counts/relationships (→ Neo4j)\n"similarity"  — recommendations / like X (→ Pinecone)\n"descriptive" — who/what/about an entity (→ Pinecone)\nRespond ONLY as JSON: {"type": ..., "reasoning": ...}`;',
  },
  {
    icon: '🔀', title: 'Route It', titleClass: 'card-title-purple', subtitle: 'Dispatch To A Handler',
    description:
      'The runner reads the type and calls the matching handler — factual to the graph, similarity and descriptive to the vectors. Clean separation, one entry point.',
    code: 'const { type } = await classifyQuery(query);\nif (type === "similarity")  answer = await handleSimilarity(query);\nelse if (type === "descriptive") answer = await handleDescriptive(query);\nelse answer = await handleFactual(query); // → Neo4j',
  },
];

const HANDLERS = [
  {
    icon: '🔒', title: 'Factual → Cypher', titleClass: 'card-title-cyan', subtitle: 'The Graph',
    description:
      'Factual questions become Cypher queries against Neo4j using safe templates. Relationships and counts come back exact — no guessing.',
    code: '// "Movies directed by Nolan"\nMATCH (d:Director {name:$name})-[:DIRECTED]->(m:Movie)\nRETURN m.title\n// precise, verifiable answer',
  },
  {
    icon: '📐', title: 'Similarity → Vectors', titleClass: 'card-title-purple', subtitle: 'Pinecone',
    description:
      'Recommendation questions embed the query and search Pinecone for the nearest movies — the semantic RAG from earlier days, now one branch of the system.',
    code: '// "Movies like Inception"\n// embed → Pinecone top-K → similar movies\n// (optionally enrich with graph facts)',
  },
  {
    icon: '📖', title: 'Descriptive → Retrieve', titleClass: 'card-title-amber', subtitle: 'Then Summarise',
    description:
      '"Tell me about X" retrieves the entity’s chunks from the vector store and has Gemini write a grounded summary — RAG applied to a single entity.',
    code: '// "Tell me about The Godfather"\n// retrieve its text → Gemini summarises from it',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 19', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The query side — queryClassifier, graph and similarity handlers, entityResolver and runQuery — completing the Graph RAG assistant.',
    link: { href: GH_LECTURE, label: 'Open Lecture 19 →', external: true },
  },
  {
    icon: '🧬', title: 'Hybrid Retrieval', titleClass: 'card-title-purple', subtitle: 'Graph + Vectors',
    description:
      'The whole point of Graph RAG: route each question to the engine that answers it best — precise facts from the graph, similarity from the vectors.',
    footer: 'classify → route → retrieve → answer',
  },
  {
    icon: '🔜', title: 'Next: LangGraph', titleClass: 'card-title-amber', subtitle: 'Day 20 Preview',
    description:
      'Tomorrow — Lecture 20: LangGraph, for orchestrating multi-step, stateful agent workflows as a graph of nodes and edges.',
    link: { href: '/day-020', label: 'Go to Day 20 →' },
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

export default function Day019() {
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
          <Link to="/day-018" className="day001-nav-btn day001-nav-prev">← Day 18</Link>
          <p className="day001-datetime">Agentic AI Day 19</p>
          <Link to="/day-020" className="day001-nav-btn day001-nav-next">Day 20 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 19</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 19 <span aria-hidden="true">🔀</span></h1>
              <p className="day001-day-theme">GRAPH RAG — HYBRID QUERYING</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '19%' }} /></div>

        <p className="day001-summary">
          Lecture 19 finishes the assistant — the <strong>query</strong> side. Every question is first{' '}
          <strong>classified</strong> as <strong>factual</strong>, <strong>similarity</strong>, or{' '}
          <strong>descriptive</strong>, then <strong>routed</strong> to the right handler: factual questions run{' '}
          <strong>Cypher</strong> over <strong>Neo4j</strong> for exact relationships, while similarity and
          descriptive questions use <strong>Pinecone</strong> vector search. Precise facts from the graph, fuzzy
          matches from the vectors — that hybrid is the whole point of <strong>Graph RAG</strong>.{' '}
          <em>The project works end to end.</em>
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

        <CardSection icon="🧠" title="CLASSIFY & ROUTE" cards={CLASSIFY} columns={2} />
        <CardSection icon="🔀" title="THE THREE HANDLERS" cards={HANDLERS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#GraphRAG</span><span>#Neo4j</span><span>#Pinecone</span>
        </footer>
      </div>
    </div>
  );
}
