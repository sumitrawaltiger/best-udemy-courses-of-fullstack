import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture20';
const NOTION = 'https://www.notion.so/LangGraph-306a9af81c9880aaa2e3e37d1384063f';
const LANGGRAPH_DOCS = 'https://langchain-ai.github.io/langgraphjs/';

const LEARNT_TODAY = [
  { title: 'Chains are too rigid', text: 'a chain runs steps in a fixed line — real agent workflows need branching, loops and control' },
  { title: 'LangGraph', text: 'build agent workflows as a graph of nodes and edges, with a shared state flowing through it' },
  { title: 'State', text: 'a single state object passes between nodes; each node reads it and returns updates to it' },
  { title: 'Nodes', text: 'each node is a step — an LLM call, a tool, or a sub-agent — that transforms the state' },
  { title: 'Edges', text: 'edges define the flow from node to node; the graph starts at an entry and ends at END' },
  { title: 'Conditional edges', text: 'branch based on the state — send the flow one way or another depending on what happened' },
  { title: 'Cycles', text: 'unlike a chain, a graph can loop — think → act → observe → think — the true agent loop' },
  { title: 'Human-in-the-loop', text: 'pause the graph for approval before a critical action, then resume' },
];

const WHY = [
  {
    icon: '📏', title: 'Beyond Chains', titleClass: 'card-title-cyan', subtitle: 'Rigid & Linear',
    description:
      'A LangChain chain is a straight line: A → B → C. But agents need to decide, retry, branch and loop. Cramming that into a linear chain gets messy fast.',
    code: '// chain: prompt → model → parser   (one direction)\n// agent: think → maybe call a tool → observe → repeat\n//        with branches and loops → needs a graph',
  },
  {
    icon: '🕸️', title: 'A Graph Of Steps', titleClass: 'card-title-purple', subtitle: 'LangGraph',
    description:
      'LangGraph models the workflow as a graph. You declare a shared state, add nodes (steps), and connect them with edges — including conditional ones and cycles.',
    code: "import { StateGraph, END } from '@langchain/langgraph';\n\nconst graph = new StateGraph({ channels: stateSchema })\n  .addNode('agent', callModel)\n  .addNode('tools', runTools);",
  },
];

const MODEL = [
  {
    icon: '📦', title: 'State', titleClass: 'card-title-cyan', subtitle: 'The Shared Object',
    description:
      'One state object flows through the whole graph. Every node receives it and returns a partial update, which LangGraph merges — so each step builds on the last.',
    code: '// state = { messages, question, context, answer }\n// each node returns e.g. { messages: [...newMsgs] }\n// LangGraph merges updates into the state',
  },
  {
    icon: '🔗', title: 'Nodes & Edges', titleClass: 'card-title-purple', subtitle: 'Steps & Flow',
    description:
      'A node is a function that transforms the state. Edges wire nodes together, with an entry point and END. Conditional edges branch on the current state.',
    code: "graph.addEdge('agent', 'tools');\ngraph.addConditionalEdges('agent', shouldContinue, {\n  continue: 'tools',   // needs a tool → run it\n  end: END,            // done → finish\n});",
  },
  {
    icon: '♻️', title: 'Cycles & Control', titleClass: 'card-title-amber', subtitle: 'Loops + Oversight',
    description:
      'Because it is a graph, the flow can loop back — call a tool, observe, and return to the model — the real agent loop. You can also pause for human approval mid-run.',
    code: "graph.addEdge('tools', 'agent'); // loop back to think again\n// + interrupt before a critical node for\n//   human-in-the-loop approval",
  },
];

const RESOURCES = [
  {
    icon: '📝', title: 'LangGraph Notes', titleClass: 'card-title-cyan', subtitle: 'Notion',
    description:
      'Rohit’s LangGraph write-up — state, nodes, edges and building stateful agent workflows.',
    link: { href: NOTION, label: 'Open the LangGraph notes →', external: true },
  },
  {
    icon: '📘', title: 'LangGraph.js Docs', titleClass: 'card-title-purple', subtitle: 'Official',
    description:
      'The LangGraph.js documentation — StateGraph, conditional edges, cycles, checkpoints and human-in-the-loop.',
    link: { href: LANGGRAPH_DOCS, label: 'Read LangGraph.js docs →', external: true },
  },
  {
    icon: '🧠', title: 'The GenAI Track', titleClass: 'card-title-amber', subtitle: 'Keep Going',
    description:
      'The site’s GenAI track covers LangGraph, multi-agent systems and production as structured modules. Ahead in the course: multi-agent teams and the AI Dev Team project.',
    link: { href: '/genai', label: 'Open the GenAI track →' },
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

export default function GenaiDay20() {
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
          <Link to="/genai-day-19" className="day001-nav-btn day001-nav-prev">← Day 19</Link>
          <p className="day001-datetime">Agentic AI Day 20</p>
          <Link to="/genai-day-21" className="day001-nav-btn day001-nav-next">Day 21 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 20</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 20 <span aria-hidden="true">🕸️</span></h1>
              <p className="day001-day-theme">LANGGRAPH — ORCHESTRATING AGENTS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '20%' }} /></div>

        <p className="day001-summary">
          Lecture 20 — <strong>LangGraph</strong>. A linear <strong>chain</strong> can’t express a real agent that
          decides, retries and loops, so LangGraph models the workflow as a <strong>graph</strong>. A shared{' '}
          <strong>state</strong> flows through <strong>nodes</strong> (each an LLM call, tool or sub-agent) connected
          by <strong>edges</strong> — including <strong>conditional edges</strong> that branch on the state and{' '}
          <strong>cycles</strong> that loop back (think → act → observe → think). You can even{' '}
          <strong>pause for human approval</strong> before a critical step. This is how you build controllable,
          multi-step agents. <em>(Diagram + notes based; standard LangGraph.js API.)</em>
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

        <CardSection icon="📏" title="WHY LANGGRAPH" cards={WHY} columns={2} />
        <CardSection icon="🕸️" title="STATE · NODES · EDGES" cards={MODEL} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#LangGraph</span><span>#Agents</span><span>#CoderArmy</span>
        </footer>
      </div>
    </div>
  );
}
