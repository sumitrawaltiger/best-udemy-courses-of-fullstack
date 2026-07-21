import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture17';
const NOTION = 'https://www.notion.so/Lecture-17-Project-2fea9af81c98800caa23eccb3fb108d0';

const LEARNT_TODAY = [
  { title: 'Project time', text: 'apply everything so far to build a real knowledge assistant that answers questions about a document' },
  { title: 'The dataset', text: 'a movies PDF becomes a queryable knowledge base — entities, relationships and descriptions' },
  { title: 'Hybrid architecture', text: 'Neo4j (graph) + Pinecone (vectors) + Gemini (LLM) + LangChain.js, working together' },
  { title: 'Two pipelines', text: 'indexing (build the graph + vectors once) and querying (classify, route, answer)' },
  { title: 'Plan before code', text: 'decide the entities, relationships, and which questions go to the graph vs the vectors' },
  { title: 'Three question types', text: 'factual (relationships), similarity (recommendations) and descriptive (about an entity)' },
  { title: 'The payoff', text: 'one assistant that answers all three kinds of questions accurately — Graph RAG in practice' },
];

const GOAL = [
  {
    icon: '🎬', title: 'The Goal', titleClass: 'card-title-cyan', subtitle: 'A Movie Assistant',
    description:
      'Build an assistant over a movies document that can list "movies directed by Nolan", recommend "movies like Inception", and describe "what is The Godfather about" — all from your own data.',
    code: '// factual:     "Movies directed by Nolan"\n// similarity:  "Movies like Inception"\n// descriptive: "Tell me about The Godfather"',
  },
  {
    icon: '🏗️', title: 'The Architecture', titleClass: 'card-title-purple', subtitle: 'Four Pieces',
    description:
      'Gemini extracts entities and answers; Neo4j stores the relationship graph; Pinecone stores the vectors; LangChain.js wires the steps. Each tool does the job it is best at.',
    code: '// Gemini      → extract entities, generate answers\n// Neo4j       → relationships (the graph)\n// Pinecone    → similarity (the vectors)\n// LangChain.js → glue',
  },
];

const PLAN = [
  {
    icon: '📥', title: 'Pipeline 1 — Indexing', titleClass: 'card-title-cyan', subtitle: 'Build The Base',
    description:
      'Run once: parse the PDF, have the LLM extract structured entities, build the Neo4j graph, and store embeddings in Pinecone. After this, the knowledge base is ready.',
    code: '// PDF → extract entities → Neo4j graph\n//     → embed chunks   → Pinecone\n// (tomorrow: the full build)',
  },
  {
    icon: '❓', title: 'Pipeline 2 — Querying', titleClass: 'card-title-purple', subtitle: 'Answer Anything',
    description:
      'Per question: classify its type, route it to the graph or the vectors, retrieve, and let Gemini write the answer. The routing is what makes it feel smart.',
    code: '// question → classify → route → retrieve → answer\n// (Day 19: the query side)',
  },
  {
    icon: '🗺️', title: 'Design First', titleClass: 'card-title-amber', subtitle: 'Entities & Routes',
    description:
      'Before writing code, decide the entities (Movie, Director, Actor, Genre), the relationships (DIRECTED, ACTED_IN), and which question types go where. A clear plan makes the build straightforward.',
    footer: 'entities · relationships · routing rules',
  },
];

const RESOURCES = [
  {
    icon: '📝', title: 'Lecture 17 Notes', titleClass: 'card-title-cyan', subtitle: 'Notion',
    description:
      'Rohit’s project write-up — the goal, architecture and plan for the Graph RAG knowledge assistant.',
    link: { href: NOTION, label: 'Open Lecture 17 notes →', external: true },
  },
  {
    icon: '💻', title: 'Lecture 17', titleClass: 'card-title-purple', subtitle: 'GitHub',
    description:
      'The lecture folder in the STRIKE GenAI repo — the kickoff for the graph-rag-movie project built across the next lectures.',
    link: { href: GH_LECTURE, label: 'Open Lecture 17 →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Build The Graph', titleClass: 'card-title-amber', subtitle: 'Day 18 Preview',
    description:
      'Tomorrow is the build — Lecture 18: parse the PDF, extract entities with Gemini, and construct the Neo4j knowledge graph plus the Pinecone vectors.',
    link: { href: '/genai-day-18', label: 'Go to Day 18 →' },
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

export default function GenaiDay17() {
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
          <Link to="/genai-day-16" className="day001-nav-btn day001-nav-prev">← Day 16</Link>
          <p className="day001-datetime">Agentic AI Day 17</p>
          <Link to="/genai-day-18" className="day001-nav-btn day001-nav-next">Day 18 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 17</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 17 <span aria-hidden="true">🛠️</span></h1>
              <p className="day001-day-theme">PROJECT — A GRAPH RAG KNOWLEDGE ASSISTANT</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '17%' }} /></div>

        <p className="day001-summary">
          Lecture 17 — <strong>project time</strong>. The goal: a knowledge assistant over a{' '}
          <strong>movies document</strong> that answers <strong>factual</strong> ("directed by Nolan"),{' '}
          <strong>similarity</strong> ("like Inception") and <strong>descriptive</strong> ("about The Godfather")
          questions. The architecture is <strong>hybrid</strong> — <strong>Neo4j</strong> for relationships,{' '}
          <strong>Pinecone</strong> for similarity, <strong>Gemini</strong> for extraction and answers, wired with{' '}
          <strong>LangChain.js</strong> — split into an <strong>indexing</strong> pipeline and a{' '}
          <strong>querying</strong> pipeline. Today I plan the entities, relationships and routing.{' '}
          <em>Tomorrow the build begins.</em>
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

        <CardSection icon="🎬" title="THE PROJECT" cards={GOAL} columns={2} />
        <CardSection icon="🗺️" title="THE TWO PIPELINES" cards={PLAN} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#GraphRAG</span><span>#Project</span><span>#CoderArmy</span>
        </footer>
      </div>
    </div>
  );
}
