import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const VISUALGO_GRAPH = 'https://visualgo.net/en/graphds';
const MDN_QUEUE = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array';

const LEARNT_TODAY = [
  { title: 'Graph = nodes + edges', text: 'models networks, maps, dependencies — vertices connected by edges' },
  { title: 'Directed vs undirected', text: 'edges may have a direction; weighted edges carry a cost' },
  { title: 'Adjacency list', text: 'a Map of node → neighbours; space-efficient for sparse graphs' },
  { title: 'Adjacency matrix', text: 'a V×V grid; good for dense graphs and O(1) edge checks' },
  { title: 'BFS', text: 'a queue explores level by level — shortest path in unweighted graphs' },
  { title: 'DFS', text: 'recursion/stack goes deep first — cycle detection, components' },
  { title: 'Track visited', text: 'a Set of seen nodes prevents infinite loops on cycles' },
  { title: 'Grids are graphs', text: 'a matrix is a graph where each cell connects to its neighbours' },
];

const REPRESENT = [
  {
    icon: '🕸️', title: 'Represent A Graph', titleClass: 'card-title-cyan', subtitle: 'List vs Matrix',
    description:
      'An adjacency list (Map of node → neighbours) is compact for sparse graphs and the usual choice. An adjacency matrix gives O(1) edge lookups but O(V²) space — better when dense.',
    code: 'const g = new Map<number, number[]>();\nconst addEdge = (a: number, b: number) => {\n  g.set(a, [...(g.get(a) ?? []), b]);\n  g.set(b, [...(g.get(b) ?? []), a]); // undirected\n};',
  },
  {
    icon: '🔎', title: 'DFS', titleClass: 'card-title-purple', subtitle: 'Go Deep',
    description:
      'Depth-first search follows one path as far as it goes before backtracking — via recursion or an explicit stack. Great for connected components, cycle detection and pathfinding.',
    code: 'function dfs(n: number, seen = new Set<number>()) {\n  if (seen.has(n)) return;\n  seen.add(n);\n  for (const next of g.get(n) ?? []) dfs(next, seen);\n}',
  },
];

const TRAVERSE = [
  {
    icon: '🌊', title: 'BFS', titleClass: 'card-title-cyan', subtitle: 'Level By Level',
    description:
      'Breadth-first search uses a queue to visit all neighbours before going deeper. In an unweighted graph, the first time you reach a node is the shortest path to it.',
    code: 'function bfs(start: number) {\n  const q = [start], seen = new Set([start]);\n  let head = 0;\n  while (head < q.length) {\n    const n = q[head++];\n    for (const nx of g.get(n) ?? [])\n      if (!seen.has(nx)) { seen.add(nx); q.push(nx); }\n  }\n}',
  },
  {
    icon: '🧩', title: 'Grids Are Graphs', titleClass: 'card-title-purple', subtitle: 'Islands, Mazes',
    description:
      'Many problems (number of islands, shortest maze path, flood fill) are graphs in disguise — each cell is a node linked to its up/down/left/right neighbours. BFS/DFS solve them.',
    code: 'const dirs = [[1,0],[-1,0],[0,1],[0,-1]];\n// for each cell, its neighbours are the in-bounds dirs\n// → run BFS/DFS over the grid',
  },
  {
    icon: '🚫', title: 'Avoid Revisits', titleClass: 'card-title-amber', subtitle: 'visited Set',
    description:
      'Graphs have cycles, so always track visited nodes in a Set (or mark the grid). Without it, BFS/DFS loops forever. This single habit prevents most graph bugs.',
    footer: 'always: mark visited before/when enqueuing',
  },
];

const RESOURCES = [
  {
    icon: '🕸️', title: 'VisuAlgo — Graphs', titleClass: 'card-title-cyan', subtitle: 'Visualise',
    description:
      'Interactive graph structures and traversals — build a graph and watch BFS and DFS explore it step by step.',
    link: { href: VISUALGO_GRAPH, label: 'Open VisuAlgo →', external: true },
  },
  {
    icon: '🎟️', title: 'Queue via Array', titleClass: 'card-title-purple', subtitle: 'MDN',
    description:
      'BFS needs an efficient queue — use an array with a head index (not shift). A refresher on the array operations behind it.',
    link: { href: MDN_QUEUE, label: 'Open MDN Array →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Shortest Paths', titleClass: 'card-title-amber', subtitle: 'Day 43 Preview',
    description:
      'Tomorrow — weighted graphs: Dijkstra’s shortest path, topological sort for dependency ordering, and Union-Find for connectivity.',
    link: { href: '/day-043', label: 'Go to Day 43 →' },
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

export default function Day042() {
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
          <Link to="/day-041" className="day001-nav-btn day001-nav-prev">← Day 41</Link>
          <p className="day001-datetime">TypeScript Day 42 · 11 Feb 2027</p>
          <Link to="/day-043" className="day001-nav-btn day001-nav-next">Day 43 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>DSA · Graphs</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 42 <span aria-hidden="true">🕸️</span></h1>
              <p className="day001-day-theme">DSA — GRAPHS: REPRESENTATION &amp; TRAVERSAL</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">TYPESCRIPT · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '42%' }} /></div>

        <p className="day001-summary">
          Graphs model networks, maps and dependencies — <strong>vertices connected by edges</strong> (directed or
          not, weighted or not). Represent one as an <strong>adjacency list</strong> (a Map of node → neighbours,
          compact for sparse graphs) or an <strong>adjacency matrix</strong> (O(1) edge checks, O(V²) space). Explore
          with <strong>BFS</strong> (a queue, level by level → shortest path in unweighted graphs) or{' '}
          <strong>DFS</strong> (recursion/stack, deep first → components, cycles). Always track a{' '}
          <strong>visited Set</strong> to survive cycles. Many problems (islands, mazes) are just{' '}
          <strong>grids as graphs</strong>. <em>Next: shortest paths &amp; ordering.</em>
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

        <CardSection icon="🕸️" title="REPRESENT & DFS" cards={REPRESENT} columns={2} />
        <CardSection icon="🌊" title="BFS & GRIDS" cards={TRAVERSE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#DSA</span><span>#Graphs</span>
        </footer>
      </div>
    </div>
  );
}
