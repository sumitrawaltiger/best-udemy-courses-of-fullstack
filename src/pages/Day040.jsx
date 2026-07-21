import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const VISUALGO_BST = 'https://visualgo.net/en/bst';
const MDN_RECURSION = 'https://developer.mozilla.org/en-US/docs/Glossary/Recursion';

const LEARNT_TODAY = [
  { title: 'Binary tree', text: 'each node has up to two children — left and right' },
  { title: 'BST property', text: 'left subtree < node < right subtree, enabling O(log n) search when balanced' },
  { title: 'DFS traversals', text: 'preorder, inorder, postorder — recursion visits in different orders' },
  { title: 'Inorder of a BST', text: 'visits keys in sorted order — a useful invariant' },
  { title: 'BFS / level order', text: 'a queue visits the tree level by level' },
  { title: 'Height & balance', text: 'operations are O(log n) balanced, O(n) if skewed' },
  { title: 'Binary search', text: 'halve a sorted range each step — O(log n)' },
  { title: 'Heaps', text: 'a complete tree with parent ≤/≥ children — the priority-queue engine' },
];

const TREES = [
  {
    icon: '🌳', title: 'Trees & BSTs', titleClass: 'card-title-cyan', subtitle: 'Left < Node < Right',
    description:
      'A binary tree’s nodes have left/right children. A Binary Search Tree keeps left < node < right, so search, insert and delete are O(log n) when balanced (O(n) if it degrades to a chain).',
    code: 'class TreeNode {\n  constructor(public val: number,\n    public left: TreeNode | null = null,\n    public right: TreeNode | null = null) {}\n}',
  },
  {
    icon: '🧭', title: 'Traversals', titleClass: 'card-title-purple', subtitle: 'DFS & BFS',
    description:
      'Depth-first recursion visits nodes preorder (root first), inorder (left-root-right — sorted for a BST) or postorder (root last). Breadth-first uses a queue for level order.',
    code: 'function inorder(n: TreeNode | null, out: number[] = []) {\n  if (!n) return out;\n  inorder(n.left, out);\n  out.push(n.val);\n  inorder(n.right, out);\n  return out; // sorted for a BST\n}',
  },
];

const SEARCH = [
  {
    icon: '🎯', title: 'Binary Search', titleClass: 'card-title-cyan', subtitle: 'O(log n)',
    description:
      'On a sorted array, compare the middle and discard half each step. Watch the classic bug: compute mid as low + (high - low) / 2 and be careful with the boundaries.',
    code: 'function bsearch(a: number[], t: number) {\n  let lo = 0, hi = a.length - 1;\n  while (lo <= hi) {\n    const mid = lo + ((hi - lo) >> 1);\n    if (a[mid] === t) return mid;\n    a[mid] < t ? (lo = mid + 1) : (hi = mid - 1);\n  }\n  return -1;\n}',
  },
  {
    icon: '⛰️', title: 'Heaps', titleClass: 'card-title-purple', subtitle: 'Priority Queue',
    description:
      'A binary heap is a complete tree where a parent is ≤ (min-heap) or ≥ (max-heap) its children. Push/pop are O(log n) — the engine behind priority queues, top-K and Dijkstra.',
    code: '// min-heap idea (array-backed)\n// parent(i) = (i-1)>>1, children = 2i+1, 2i+2\n// push → bubble up · pop → swap root, bubble down',
  },
  {
    icon: '📏', title: 'Balance Matters', titleClass: 'card-title-amber', subtitle: 'log n vs n',
    description:
      'A BST’s speed depends on its height. Balanced → O(log n); inserted in sorted order it becomes a linked list → O(n). Self-balancing trees (AVL, red-black) guarantee log n.',
    footer: 'balanced BST → O(log n) · skewed → O(n)',
  },
];

const RESOURCES = [
  {
    icon: '🌳', title: 'VisuAlgo — BST', titleClass: 'card-title-cyan', subtitle: 'Visualise',
    description:
      'Interactive BST and traversal visualisations — insert, delete and search, and watch how balance affects height.',
    link: { href: VISUALGO_BST, label: 'Open VisuAlgo →', external: true },
  },
  {
    icon: '🔁', title: 'Recursion (MDN)', titleClass: 'card-title-purple', subtitle: 'Concept',
    description:
      'The recursion primer — base case, recursive case, and the call stack — the mechanism behind every tree traversal.',
    link: { href: MDN_RECURSION, label: 'Open the glossary →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Recursion & Sorting', titleClass: 'card-title-amber', subtitle: 'Day 41 Preview',
    description:
      'Tomorrow — recursion & backtracking, the sorting algorithms (merge, quick), searching, and a first taste of dynamic programming.',
    link: { href: '/day-041', label: 'Go to Day 41 →' },
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

export default function Day040() {
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
          <Link to="/day-039" className="day001-nav-btn day001-nav-prev">← Day 39</Link>
          <p className="day001-datetime">TypeScript Day 40</p>
          <Link to="/day-041" className="day001-nav-btn day001-nav-next">Day 41 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>DSA</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 40 <span aria-hidden="true">🌳</span></h1>
              <p className="day001-day-theme">DSA — TREES &amp; BINARY SEARCH</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '40%' }} /></div>

        <p className="day001-summary">
          Hierarchical data and logarithmic search. A <strong>binary tree</strong> has up to two children per node; a{' '}
          <strong>BST</strong> keeps <code>left &lt; node &lt; right</code>, giving O(log n) operations when balanced.{' '}
          <strong>Traversals</strong> are recursion — preorder, <strong>inorder</strong> (sorted for a BST), postorder
          — while <strong>level order</strong> uses a queue (BFS). <strong>Binary search</strong> halves a sorted range
          each step (O(log n); mind the <code>mid</code> and boundaries). A <strong>heap</strong> — a complete tree
          with parent ≤/≥ children — powers priority queues in O(log n). Remember: a skewed BST degrades to O(n).{' '}
          <em>Next: recursion, sorting &amp; DP.</em>
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

        <CardSection icon="🌳" title="TREES & TRAVERSALS" cards={TREES} columns={2} />
        <CardSection icon="🎯" title="SEARCH & HEAPS" cards={SEARCH} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#DSA</span><span>#Trees</span>
        </footer>
      </div>
    </div>
  );
}
