import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture16';
const NEO4J = 'https://neo4j.com/';

const LEARNT_TODAY = [
  { title: 'Vectors miss relationships', text: 'semantic search finds similar text, but cannot answer "which movies did Nolan direct?" precisely' },
  { title: 'Knowledge graph', text: 'store entities as nodes and relationships as edges — Nolan -[DIRECTED]→ Inception' },
  { title: 'Explicit, structured facts', text: 'graphs capture exact relationships that embeddings only approximate' },
  { title: 'Neo4j', text: 'a graph database queried with Cypher — pattern matching over nodes and edges' },
  { title: 'Graph RAG', text: 'combine a knowledge graph (facts and relationships) with vector RAG (semantic similarity)' },
  { title: 'Two kinds of questions', text: 'factual/relational → the graph; "similar to" or "recommend" → the vectors' },
  { title: 'Next: build it', text: 'the coming lectures build a Graph RAG over a movie dataset using Neo4j + Pinecone + Gemini' },
];

const GAP = [
  {
    icon: '🕸️', title: 'Where Vectors Fall Short', titleClass: 'card-title-cyan', subtitle: 'Relationships',
    description:
      'Vector RAG is great at "find text that means something similar". But it cannot reliably answer relationship questions — who directed what, who acted with whom, how many of a kind — because those are structured facts, not fuzzy similarity.',
    code: '// "Movies directed by Nolan"  → needs exact relationships\n// "Movies like Inception"      → needs similarity\n// vectors handle the 2nd, struggle with the 1st',
  },
  {
    icon: '🔗', title: 'Nodes & Edges', titleClass: 'card-title-purple', subtitle: 'A Knowledge Graph',
    description:
      'A knowledge graph stores each entity as a node and each relationship as an edge. The connections are first-class data, so relationship questions become precise graph traversals.',
    code: '(Nolan:Director)-[:DIRECTED]->(Inception:Movie)\n(Zendaya:Actor)-[:ACTED_IN]->(Dune:Movie)\n// facts as nodes + typed relationships',
  },
];

const GRAPH = [
  {
    icon: '🗄️', title: 'Neo4j & Cypher', titleClass: 'card-title-cyan', subtitle: 'The Graph Database',
    description:
      'Neo4j stores the graph and is queried with Cypher, a pattern-matching language. You literally draw the pattern you want and Neo4j finds every match.',
    code: '// Cypher: movies directed by Nolan\nMATCH (d:Director {name: "Christopher Nolan"})\n      -[:DIRECTED]->(m:Movie)\nRETURN m.title',
  },
  {
    icon: '🧬', title: 'Graph RAG', titleClass: 'card-title-purple', subtitle: 'Graph + Vectors',
    description:
      'Graph RAG uses both worlds: the knowledge graph for exact, relational answers, and vector search for "find something similar". One system, two retrieval strengths.',
    code: '// factual/relational → Neo4j graph\n// similarity/recommend → Pinecone vectors\n// route each question to the right one',
  },
  {
    icon: '🎯', title: 'Why It Matters', titleClass: 'card-title-amber', subtitle: 'Fewer Wrong Answers',
    description:
      'Pure vector RAG can hallucinate relationships. Grounding factual questions in a real graph makes those answers exact and verifiable — a big step for trustworthy AI.',
    footer: 'graph = precise facts · vectors = fuzzy meaning',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 16', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The knowledge graphs lecture and diagram in the STRIKE GenAI repo — the concept behind the Graph RAG build ahead.',
    link: { href: GH_LECTURE, label: 'Open Lecture 16 →', external: true },
  },
  {
    icon: '🗄️', title: 'Neo4j', titleClass: 'card-title-purple', subtitle: 'Graph Database',
    description:
      'The graph database used in the coming lectures — nodes, relationships and the Cypher query language.',
    link: { href: NEO4J, label: 'Neo4j →', external: true },
  },
  {
    icon: '🔜', title: 'Next: The Project', titleClass: 'card-title-amber', subtitle: 'Day 17 Preview',
    description:
      'Tomorrow kicks off a project — Lecture 17: designing a Graph RAG knowledge assistant over a document, combining Neo4j, Pinecone, Gemini and LangChain.js.',
    link: { href: '/day-017', label: 'Go to Day 17 →' },
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

export default function Day016() {
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
          <Link to="/day-015" className="day001-nav-btn day001-nav-prev">← Day 15</Link>
          <p className="day001-datetime">Agentic AI Day 16</p>
          <Link to="/day-017" className="day001-nav-btn day001-nav-next">Day 17 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 16</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 16 <span aria-hidden="true">🕸️</span></h1>
              <p className="day001-day-theme">KNOWLEDGE GRAPHS — BEYOND VECTOR RAG</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '16%' }} /></div>

        <p className="day001-summary">
          Lecture 16 — <strong>knowledge graphs</strong>. Vector RAG finds similar text but can’t precisely answer
          <strong> relationship questions</strong> like "which movies did Nolan direct?". A{' '}
          <strong>knowledge graph</strong> stores entities as <strong>nodes</strong> and relationships as{' '}
          <strong>edges</strong> (Nolan -[DIRECTED]→ Inception), queried with <strong>Cypher</strong> in{' '}
          <strong>Neo4j</strong>. <strong>Graph RAG</strong> combines both — the graph for exact, relational facts
          and vectors for similarity — routing each question to the right engine.{' '}
          <em>Next, I build one. (Diagram-based lecture; standard concepts.)</em>
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

        <CardSection icon="🕸️" title="WHERE VECTORS FALL SHORT" cards={GAP} columns={2} />
        <CardSection icon="🧬" title="KNOWLEDGE GRAPHS & GRAPH RAG" cards={GRAPH} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#GraphRAG</span><span>#Neo4j</span><span>#CoderArmy</span>
        </footer>
      </div>
    </div>
  );
}
