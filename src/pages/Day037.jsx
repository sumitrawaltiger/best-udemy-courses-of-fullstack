import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const BIGO = 'https://www.bigocheatsheet.com/';
const MDN_ARRAY = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array';

const LEARNT_TODAY = [
  { title: 'DSA, in TypeScript', text: 'practise data structures & algorithms in the Year-1 language — TypeScript' },
  { title: 'Big-O', text: 'how runtime/space grows with input size n — the interview vocabulary' },
  { title: 'Common classes', text: 'O(1) < O(log n) < O(n) < O(n log n) < O(n²)' },
  { title: 'Arrays', text: 'contiguous, O(1) index access, O(n) search/insert-in-middle' },
  { title: 'Strings are arrays of chars', text: 'immutable in JS/TS — building strings costs, use an array + join' },
  { title: 'Two pointers', text: 'scan from both ends (or slow/fast) to solve in O(n)' },
  { title: 'Prefix sums', text: 'precompute running totals for O(1) range-sum queries' },
  { title: 'Kadane’s algorithm', text: 'maximum contiguous subarray sum in O(n)' },
];

const COMPLEXITY = [
  {
    icon: '📈', title: 'Big-O Notation', titleClass: 'card-title-cyan', subtitle: 'Growth, Not Seconds',
    description:
      'Big-O describes how work grows with input size n — the worst case. It ignores constants and small terms, so O(n) beats O(n²) as n gets large regardless of machine speed.',
    code: '// O(1) index         arr[i]\n// O(n) single loop    for (const x of arr)\n// O(n²) nested loops   pairs of elements\n// O(log n) halving     binary search',
  },
  {
    icon: '🔤', title: 'Arrays & Strings', titleClass: 'card-title-purple', subtitle: 'The Foundations',
    description:
      'Arrays give O(1) access by index but O(n) search and middle-insert. Strings are immutable in JS/TS — repeated concatenation is costly, so build with an array and join.',
    code: 'const parts: string[] = [];\nfor (const w of words) parts.push(w.toUpperCase());\nconst out = parts.join(" ");   // cheap, one allocation',
  },
];

const PATTERNS = [
  {
    icon: '↔️', title: 'Two Pointers', titleClass: 'card-title-cyan', subtitle: 'O(n) Scans',
    description:
      'Move two indices toward each other (or at different speeds) to avoid a nested loop. Classic for pair-sum in a sorted array, reversing, and removing duplicates in place.',
    code: 'function pairSum(a: number[], t: number) {\n  let l = 0, r = a.length - 1;\n  while (l < r) {\n    const s = a[l] + a[r];\n    if (s === t) return [l, r];\n    s < t ? l++ : r--;\n  }\n}',
  },
  {
    icon: '📊', title: 'Prefix Sums', titleClass: 'card-title-purple', subtitle: 'O(1) Range Queries',
    description:
      'Precompute a running total once; then any range sum is a subtraction. Turns repeated O(n) sums into O(1) lookups after an O(n) preprocess.',
    code: 'const p = [0];\nfor (const x of arr) p.push(p.at(-1)! + x);\n// sum of arr[i..j] = p[j + 1] - p[i]',
  },
  {
    icon: '🏆', title: "Kadane's Algorithm", titleClass: 'card-title-amber', subtitle: 'Max Subarray',
    description:
      'Track the best sum ending here and the best overall, resetting when the running sum drops below zero. Maximum contiguous subarray sum in a single O(n) pass.',
    code: 'let best = -Infinity, cur = 0;\nfor (const x of arr) {\n  cur = Math.max(x, cur + x);\n  best = Math.max(best, cur);\n}',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Big-O Cheat Sheet', titleClass: 'card-title-cyan', subtitle: 'Reference',
    description:
      'Time and space complexity of common data structures and algorithms at a glance — a handy reference while practising.',
    link: { href: BIGO, label: 'Open the cheat sheet →', external: true },
  },
  {
    icon: '🔤', title: 'Array (MDN)', titleClass: 'card-title-purple', subtitle: 'The Methods',
    description:
      'Every array method with complexity intuition — map, filter, reduce, slice, splice — the toolbox for array problems.',
    link: { href: MDN_ARRAY, label: 'Open MDN Array →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Hashing & Windows', titleClass: 'card-title-amber', subtitle: 'Day 38 Preview',
    description:
      'Tomorrow — hash maps & sets for O(1) lookups, frequency counting, and the sliding-window pattern for subarray/substring problems.',
    link: { href: '/day-038', label: 'Go to Day 38 →' },
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

export default function Day037() {
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
          <Link to="/day-036" className="day001-nav-btn day001-nav-prev">← Day 36</Link>
          <p className="day001-datetime">TypeScript Day 37</p>
          <Link to="/day-038" className="day001-nav-btn day001-nav-next">Day 38 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>DSA</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 37 <span aria-hidden="true">📈</span></h1>
              <p className="day001-day-theme">DSA — COMPLEXITY, ARRAYS &amp; STRINGS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '37%' }} /></div>

        <p className="day001-summary">
          DSA, practised in TypeScript alongside Year 1. <strong>Big-O</strong> describes how work grows with input
          size — <code>O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²)</code>. <strong>Arrays</strong> give
          O(1) index access but O(n) search; <strong>strings</strong> are immutable, so build with an array + join.
          Three array patterns carry a huge share of problems: <strong>two pointers</strong> (O(n) scans instead of
          nested loops), <strong>prefix sums</strong> (O(1) range queries after an O(n) preprocess), and{' '}
          <strong>Kadane’s algorithm</strong> (max contiguous subarray in one pass).{' '}
          <em>Next: hashing &amp; sliding window.</em>
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

        <CardSection icon="📈" title="COMPLEXITY & DATA" cards={COMPLEXITY} columns={2} />
        <CardSection icon="↔️" title="ARRAY PATTERNS" cards={PATTERNS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#DSA</span><span>#BigO</span>
        </footer>
      </div>
    </div>
  );
}
