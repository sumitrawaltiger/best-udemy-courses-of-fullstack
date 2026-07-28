import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NEETCODE = 'https://neetcode.io/roadmap';
const LEETCODE = 'https://leetcode.com/';

const LEARNT_TODAY = [
  { title: 'Patterns beat memorising', text: 'recognise the shape of a problem, then apply the matching template' },
  { title: 'Sliding window', text: 'contiguous subarray/substring under a constraint' },
  { title: 'Two / fast-slow pointers', text: 'sorted-array pairs, cycle detection, middle of a list' },
  { title: 'Binary search on answer', text: 'monotonic predicate → search the answer space, not just arrays' },
  { title: 'Monotonic stack', text: 'next greater/smaller element in one pass' },
  { title: 'Backtracking', text: 'subsets, permutations, combinations, N-Queens' },
  { title: 'BFS/DFS + Union-Find', text: 'graph & grid connectivity and shortest paths' },
  { title: 'Top-K with a heap', text: 'k largest/smallest, merge k lists, streaming medians' },
];

const PATTERNS_A = [
  {
    icon: '🪟', title: 'Windows & Pointers', titleClass: 'card-title-cyan', subtitle: 'Linear Scans',
    description:
      'Sliding window for contiguous ranges under a constraint; two pointers for sorted-array pairs and in-place work; fast/slow for cycles and middles. Most array/string problems fit one of these.',
    code: '// clues: "subarray/substring", "sorted", "in place",\n// "pair that sums to", "cycle", "middle of list"',
  },
  {
    icon: '🔍', title: 'Binary Search on Answer', titleClass: 'card-title-purple', subtitle: 'Search The Space',
    description:
      'If a candidate answer has a monotonic yes/no test (feasible up to some value, then not), binary-search the answer range. "Minimum capacity", "max distance", "smallest k" all fit.',
    code: 'let lo = min, hi = max;\nwhile (lo < hi) {\n  const mid = lo + ((hi - lo) >> 1);\n  feasible(mid) ? (hi = mid) : (lo = mid + 1);\n}\n// lo is the smallest feasible answer',
  },
];

const PATTERNS_B = [
  {
    icon: '📈', title: 'Monotonic Stack', titleClass: 'card-title-cyan', subtitle: 'Next Greater/Smaller',
    description:
      'Keep a stack in increasing or decreasing order; pop while the incoming element breaks the order. Solves next-greater-element, daily temperatures and largest-rectangle in O(n).',
    code: '// clue: "next greater", "next smaller", "span"\nfor (const x of arr) {\n  while (st.length && arr[st.at(-1)!] < x) st.pop();\n  st.push(i);\n}',
  },
  {
    icon: '🌲', title: 'Backtracking & Graphs', titleClass: 'card-title-purple', subtitle: 'Explore All',
    description:
      'Backtracking enumerates subsets/permutations/combinations by choosing, recursing and undoing. BFS/DFS and Union-Find cover grid and graph connectivity, shortest paths and cycles.',
    code: '// clue: "all combinations", "generate", "N-Queens" → backtracking\n// clue: "islands", "connected", "shortest path" → BFS/DFS/DSU',
  },
  {
    icon: '⛰️', title: 'Heap / Top-K', titleClass: 'card-title-amber', subtitle: 'k Best',
    description:
      'A heap keeps the k best seen so far in O(log k) per element — k largest, merge k sorted lists, running median. Reach for it whenever "k" and "largest/smallest/closest" appear together.',
    footer: 'clue: "k largest/closest", "merge k", "median of a stream"',
  },
];

const RESOURCES = [
  {
    icon: '🗺️', title: 'NeetCode Roadmap', titleClass: 'card-title-cyan', subtitle: 'Pattern-First',
    description:
      'A curated path through the core patterns with the best-known problems for each — the most efficient way to practise.',
    link: { href: NEETCODE, label: 'Open the roadmap →', external: true },
  },
  {
    icon: '💻', title: 'LeetCode', titleClass: 'card-title-purple', subtitle: 'Practice',
    description:
      'Solve in TypeScript, group by tag (sliding window, graph, DP), and review editorials to internalise each template.',
    link: { href: LEETCODE, label: 'Open LeetCode →', external: true },
  },
  {
    icon: '🔜', title: 'Next: System Design', titleClass: 'card-title-amber', subtitle: 'Day 45 Preview',
    description:
      'The DSA core is covered. Next, practised alongside Year 1: System Design in TypeScript — starting with the fundamentals of scalability, latency and availability.',
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
          <p className="day001-datetime">TypeScript Day 44 · 13 Feb 2027</p>
          <Link to="/day-045" className="day001-nav-btn day001-nav-next">Day 45 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>DSA · Patterns</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 44 <span aria-hidden="true">🧩</span></h1>
              <p className="day001-day-theme">DSA — INTERVIEW PATTERNS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '44%' }} /></div>

        <p className="day001-summary">
          Interviews reward <strong>pattern recognition</strong>, not memorisation. The high-frequency templates:{' '}
          <strong>sliding window</strong> (contiguous ranges), <strong>two / fast-slow pointers</strong> (sorted
          pairs, cycles, middles), <strong>binary search on the answer</strong> (monotonic feasibility),{' '}
          <strong>monotonic stack</strong> (next greater/smaller), <strong>backtracking</strong> (subsets,
          permutations, N-Queens), <strong>BFS/DFS + Union-Find</strong> (graphs &amp; grids), and{' '}
          <strong>heap / top-K</strong> (k largest, merge k, streaming median). Learn the <em>clue words</em> that
          point to each, and practise in TypeScript until the mapping is instant. <em>Next: System Design.</em>
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

        <CardSection icon="🪟" title="SCAN & SEARCH PATTERNS" cards={PATTERNS_A} columns={2} />
        <CardSection icon="🌲" title="STACK · BACKTRACK · HEAP" cards={PATTERNS_B} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#DSA</span><span>#Patterns</span>
        </footer>
      </div>
    </div>
  );
}
