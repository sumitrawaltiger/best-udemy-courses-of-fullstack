import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DIJKSTRA = 'https://visualgo.net/en/sssp';
const TOPO = 'https://en.wikipedia.org/wiki/Topological_sorting';

const LEARNT_TODAY = [
  { title: 'Weighted shortest path', text: 'BFS only works unweighted; weights need Dijkstra' },
  { title: 'Dijkstra', text: 'greedy + a min-heap (priority queue); non-negative weights only' },
  { title: 'Priority queue', text: 'always expand the closest unsettled node next' },
  { title: 'Topological sort', text: 'order a DAG so every edge points forward' },
  { title: "Kahn's algorithm", text: 'repeatedly remove nodes with in-degree 0' },
  { title: 'Cycle detection', text: 'if a topo sort can’t finish, the graph has a cycle' },
  { title: 'Union-Find (DSU)', text: 'near-O(1) connectivity queries and cycle detection' },
  { title: 'Path compression + rank', text: 'the two optimisations that make DSU fast' },
];

const PATHS = [
  {
    icon: '🛰️', title: "Dijkstra's Algorithm", titleClass: 'card-title-cyan', subtitle: 'Weighted Shortest Path',
    description:
      'BFS finds shortest paths only when every edge costs the same. With weights, Dijkstra expands the closest unsettled node (via a min-heap), relaxing its neighbours. Non-negative weights only.',
    code: '// dist[start] = 0, others ∞; min-heap of [dist, node]\n// pop the closest; for each edge (n → m, w):\n//   if dist[n] + w < dist[m]: update + push\n// O((V + E) log V)',
  },
  {
    icon: '🔗', title: 'Union-Find (DSU)', titleClass: 'card-title-purple', subtitle: 'Connectivity',
    description:
      'Disjoint Set Union tracks which nodes are connected. find returns a set’s representative; union merges two sets. With path compression + union by rank, both are effectively O(1).',
    code: 'function find(x: number): number {\n  if (parent[x] !== x) parent[x] = find(parent[x]); // compress\n  return parent[x];\n}\nconst union = (a, b) => { parent[find(a)] = find(b); };',
  },
];

const ORDER = [
  {
    icon: '📅', title: 'Topological Sort', titleClass: 'card-title-cyan', subtitle: 'Order A DAG',
    description:
      'On a directed acyclic graph, a topological order lists nodes so every edge goes forward — perfect for build systems, task scheduling and course prerequisites.',
    code: "// Kahn's algorithm\n// 1. compute in-degree of every node\n// 2. queue all with in-degree 0\n// 3. pop → append to order → decrement neighbours' in-degree\n// 4. any hitting 0 → enqueue",
  },
  {
    icon: '🔁', title: 'Detect Cycles', titleClass: 'card-title-purple', subtitle: 'Can It Finish?',
    description:
      'If Kahn’s algorithm can’t place every node (some never reach in-degree 0), the graph has a cycle — which is exactly how you detect deadlocks in a dependency graph.',
    code: '// processed < V after Kahn → a cycle exists\n// (e.g. course schedule is impossible)',
  },
  {
    icon: '🧭', title: 'Pick The Right Tool', titleClass: 'card-title-amber', subtitle: 'By Problem',
    description:
      'Unweighted shortest path → BFS. Weighted (non-negative) → Dijkstra. Dependency order → topological sort. Connectivity / cycle in undirected → Union-Find. Match the pattern to the ask.',
    footer: 'unweighted→BFS · weighted→Dijkstra · order→topo · connect→DSU',
  },
];

const RESOURCES = [
  {
    icon: '🛰️', title: 'Dijkstra (VisuAlgo)', titleClass: 'card-title-cyan', subtitle: 'Visualise',
    description:
      'Single-source shortest-path visualisations — watch Dijkstra settle nodes one by one, and compare with BFS.',
    link: { href: DIJKSTRA, label: 'Open VisuAlgo →', external: true },
  },
  {
    icon: '📅', title: 'Topological Sort', titleClass: 'card-title-purple', subtitle: 'Reference',
    description:
      'The definition and algorithms (Kahn’s and DFS-based), with the DAG properties that make it possible.',
    link: { href: TOPO, label: 'Read the reference →', external: true },
  },
  {
    icon: '🔜', title: 'Next: DSA Patterns', titleClass: 'card-title-amber', subtitle: 'Day 44 Preview',
    description:
      'Tomorrow — a recap of the interview patterns (windows, pointers, monotonic stack, binary-search-on-answer, backtracking) and how to recognise which to reach for.',
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
          <p className="day001-datetime">TypeScript Day 43</p>
          <Link to="/day-044" className="day001-nav-btn day001-nav-next">Day 44 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>DSA · Graphs</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 43 <span aria-hidden="true">🛰️</span></h1>
              <p className="day001-day-theme">DSA — SHORTEST PATHS &amp; ORDERING</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '43%' }} /></div>

        <p className="day001-summary">
          Weighted graphs and structure. BFS is shortest-path only when edges cost the same; with weights use{' '}
          <strong>Dijkstra</strong> — greedily expand the closest unsettled node via a <strong>min-heap</strong>,
          relaxing neighbours (non-negative weights, O((V+E) log V)). <strong>Topological sort</strong> orders a DAG so
          every edge points forward (build systems, prerequisites) via <strong>Kahn’s</strong> in-degree algorithm —
          which also <strong>detects cycles</strong> when it can’t finish. <strong>Union-Find (DSU)</strong> answers
          connectivity and cycle questions in near-O(1) with <strong>path compression + union by rank</strong>. Match
          the tool to the ask. <em>Next: the interview patterns.</em>
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

        <CardSection icon="🛰️" title="PATHS & CONNECTIVITY" cards={PATHS} columns={2} />
        <CardSection icon="📅" title="ORDERING & CYCLES" cards={ORDER} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#DSA</span><span>#Dijkstra</span>
        </footer>
      </div>
    </div>
  );
}
