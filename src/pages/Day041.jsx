import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const VISUALGO_SORT = 'https://visualgo.net/en/sorting';
const DP_GUIDE = 'https://developer.mozilla.org/en-US/docs/Glossary/Recursion';

const LEARNT_TODAY = [
  { title: 'Recursion', text: 'a function that calls itself, with a base case to stop' },
  { title: 'Backtracking', text: 'build a solution step by step, undoing choices that fail' },
  { title: 'Merge sort', text: 'divide, sort halves, merge — stable, O(n log n)' },
  { title: 'Quick sort', text: 'partition around a pivot, recurse — avg O(n log n), worst O(n²)' },
  { title: 'Built-in sort', text: 'array.sort with a comparator; pass (a,b)=>a-b for numbers' },
  { title: 'DP = overlapping subproblems', text: 'cache results to avoid recomputing (memoisation)' },
  { title: 'Top-down vs bottom-up', text: 'memoised recursion, or fill a table iteratively (tabulation)' },
  { title: 'Recognise the trigger', text: 'optimal substructure + overlapping subproblems → DP' },
];

const RECURSION = [
  {
    icon: '🔁', title: 'Recursion & Backtracking', titleClass: 'card-title-cyan', subtitle: 'Base + Recurse',
    description:
      'Break a problem into a smaller version of itself, with a base case to stop. Backtracking extends it: try a choice, recurse, and undo it if it doesn’t lead to a solution.',
    code: '// subsets via backtracking\nfunction subsets(nums: number[]) {\n  const res: number[][] = [], cur: number[] = [];\n  const go = (i: number) => {\n    if (i === nums.length) { res.push([...cur]); return; }\n    go(i + 1);                     // skip\n    cur.push(nums[i]); go(i + 1); cur.pop(); // take, then undo\n  };\n  go(0); return res;\n}',
  },
  {
    icon: '🔀', title: 'Sorting', titleClass: 'card-title-purple', subtitle: 'Merge & Quick',
    description:
      'Merge sort divides then merges — stable, always O(n log n). Quick sort partitions around a pivot — fast in practice but O(n²) worst case. For everyday use, the built-in sort (with a comparator) is fine.',
    code: '[3, 1, 2].sort((a, b) => a - b);    // numeric ascending\n// merge sort: split → sort each half → merge two sorted arrays',
  },
];

const DP = [
  {
    icon: '🧠', title: 'Memoisation', titleClass: 'card-title-cyan', subtitle: 'Top-Down',
    description:
      'When recursion recomputes the same subproblem, cache the result. Fibonacci drops from O(2ⁿ) to O(n) just by remembering answers in a map.',
    code: 'const memo = new Map<number, number>();\nfunction fib(n: number): number {\n  if (n < 2) return n;\n  if (memo.has(n)) return memo.get(n)!;\n  const r = fib(n - 1) + fib(n - 2);\n  memo.set(n, r); return r;\n}',
  },
  {
    icon: '📋', title: 'Tabulation', titleClass: 'card-title-purple', subtitle: 'Bottom-Up',
    description:
      'Solve the smallest subproblems first and fill a table up to the answer — no recursion, no stack. Same complexity, often clearer and faster.',
    code: 'const dp = [0, 1];\nfor (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];\nreturn dp[n];',
  },
  {
    icon: '🎯', title: 'When It’s DP', titleClass: 'card-title-amber', subtitle: 'The Signals',
    description:
      'Reach for DP when a problem has optimal substructure (the answer is built from sub-answers) and overlapping subproblems (the same sub-answers recur). Classics: knapsack, LCS, edit distance.',
    footer: 'optimal substructure + overlap → DP',
  },
];

const RESOURCES = [
  {
    icon: '🔀', title: 'VisuAlgo — Sorting', titleClass: 'card-title-cyan', subtitle: 'Visualise',
    description:
      'Watch merge, quick, heap and insertion sort run step by step, and compare their behaviour on different inputs.',
    link: { href: VISUALGO_SORT, label: 'Open VisuAlgo →', external: true },
  },
  {
    icon: '🔁', title: 'Recursion (MDN)', titleClass: 'card-title-purple', subtitle: 'Foundation',
    description:
      'The recursion refresher — base case, recursive case and the call stack — the foundation of backtracking and top-down DP.',
    link: { href: DP_GUIDE, label: 'Open the glossary →', external: true },
  },
  {
    icon: '🔜', title: 'Year 1 Continues', titleClass: 'card-title-amber', subtitle: 'Day 42 Preview',
    description:
      'The DSA core is covered — next up alongside Year 1: graphs (BFS/DFS, shortest paths) and System Design in TypeScript. The journal keeps building.',
    link: { href: '/day-042', label: 'Go to Day 42 →' },
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

export default function Day041() {
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
          <Link to="/day-040" className="day001-nav-btn day001-nav-prev">← Day 40</Link>
          <p className="day001-datetime">TypeScript Day 41</p>
          <Link to="/day-042" className="day001-nav-btn day001-nav-next">Day 42 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>DSA</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 41 <span aria-hidden="true">🔁</span></h1>
              <p className="day001-day-theme">DSA — RECURSION, SORTING &amp; DP</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '41%' }} /></div>

        <p className="day001-summary">
          The algorithmic core. <strong>Recursion</strong> solves a problem via a smaller version of itself (base case
          to stop), and <strong>backtracking</strong> builds solutions step by step, undoing failed choices (subsets,
          permutations, N-Queens). <strong>Merge sort</strong> is stable O(n log n); <strong>quick sort</strong> is
          fast but O(n²) worst — day to day, the built-in <code>sort((a,b)=&gt;a-b)</code> is enough. Finally,{' '}
          <strong>dynamic programming</strong> caches overlapping subproblems — <strong>memoisation</strong>{' '}
          (top-down) or <strong>tabulation</strong> (bottom-up) — turning exponential recursion into linear. Reach for
          it on <em>optimal substructure + overlapping subproblems</em>. <em>Next: graphs &amp; System Design.</em>
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

        <CardSection icon="🔁" title="RECURSION & SORTING" cards={RECURSION} columns={2} />
        <CardSection icon="🧠" title="DYNAMIC PROGRAMMING" cards={DP} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#DSA</span><span>#DP</span>
        </footer>
      </div>
    </div>
  );
}
