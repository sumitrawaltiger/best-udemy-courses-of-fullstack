import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const MDN_STACK = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push';
const VISUALGO = 'https://visualgo.net/en/list';

const LEARNT_TODAY = [
  { title: 'Stack = LIFO', text: 'last in, first out — an array with push and pop is a stack' },
  { title: 'Queue = FIFO', text: 'first in, first out — enqueue at the back, dequeue at the front' },
  { title: 'Array as queue is slow', text: 'shift() is O(n); use two pointers or a deque for O(1)' },
  { title: 'Valid parentheses', text: 'a stack matches opening/closing brackets in O(n)' },
  { title: 'Monotonic stack', text: 'keep increasing/decreasing order to find next-greater elements' },
  { title: 'Linked list', text: 'nodes with a value and a next pointer — O(1) insert/delete given the node' },
  { title: 'Reverse a list', text: 'walk once, flipping each next pointer — the iterative classic' },
  { title: 'Fast & slow pointers', text: 'find the middle or detect a cycle in one pass' },
];

const STACKQ = [
  {
    icon: '🥞', title: 'Stack (LIFO)', titleClass: 'card-title-cyan', subtitle: 'push / pop',
    description:
      'A stack adds and removes from the same end. An array’s push/pop are O(1). It powers parenthesis matching, undo, DFS, and expression evaluation.',
    code: '// valid parentheses\nfunction valid(s: string) {\n  const st: string[] = [], pair = { ")": "(", "]": "[", "}": "{" };\n  for (const c of s) {\n    if (c in pair) { if (st.pop() !== pair[c]) return false; }\n    else st.push(c);\n  }\n  return st.length === 0;\n}',
  },
  {
    icon: '🎟️', title: 'Queue (FIFO)', titleClass: 'card-title-purple', subtitle: 'enqueue / dequeue',
    description:
      'A queue removes from the opposite end it adds to. Avoid array.shift() (O(n)) — use a head index or a deque. Queues drive BFS and scheduling.',
    code: '// O(1) dequeue with a moving head index\nconst q: number[] = []; let head = 0;\nq.push(x);              // enqueue\nconst first = q[head++]; // dequeue',
  },
];

const LISTS = [
  {
    icon: '🔗', title: 'Linked List', titleClass: 'card-title-cyan', subtitle: 'Node → Node',
    description:
      'Each node holds a value and a pointer to the next. Insert/delete is O(1) given the node, but access is O(n). No contiguous memory — great when you splice a lot.',
    code: 'class Node<T> {\n  constructor(public val: T, public next: Node<T> | null = null) {}\n}\n// head → 10 → 20 → 30 → null',
  },
  {
    icon: '🔄', title: 'Reverse It', titleClass: 'card-title-purple', subtitle: 'Flip The Pointers',
    description:
      'Walk the list once, pointing each node back at the previous one. Three variables, O(n) time, O(1) space — the interview classic.',
    code: 'let prev: Node<T> | null = null, cur = head;\nwhile (cur) {\n  const next = cur.next;\n  cur.next = prev; prev = cur; cur = next;\n}\nreturn prev; // new head',
  },
  {
    icon: '🐢', title: 'Fast & Slow', titleClass: 'card-title-amber', subtitle: 'Cycle & Middle',
    description:
      'Move one pointer one step and another two. They meet if there’s a cycle; when fast reaches the end, slow is at the middle. One pass, O(1) extra space.',
    code: 'let slow = head, fast = head;\nwhile (fast && fast.next) {\n  slow = slow!.next; fast = fast.next.next;\n  if (slow === fast) return true; // cycle\n}',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Array push/pop (MDN)', titleClass: 'card-title-cyan', subtitle: 'Stack Ops',
    description:
      'The O(1) operations that make an array a stack — push, pop — plus why shift/unshift are O(n) at the front.',
    link: { href: MDN_STACK, label: 'Open MDN →', external: true },
  },
  {
    icon: '🧭', title: 'VisuAlgo — Lists', titleClass: 'card-title-purple', subtitle: 'Visualise',
    description:
      'Interactive visualisations of linked lists, stacks and queues — watch insertions, deletions and reversals step by step.',
    link: { href: VISUALGO, label: 'Open VisuAlgo →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Trees & Search', titleClass: 'card-title-amber', subtitle: 'Day 40 Preview',
    description:
      'Tomorrow — binary trees & BSTs, the traversals (pre/in/post/level order), binary search, and a first look at heaps.',
    link: { href: '/day-040', label: 'Go to Day 40 →' },
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

export default function Day039() {
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
          <Link to="/day-038" className="day001-nav-btn day001-nav-prev">← Day 38</Link>
          <p className="day001-datetime">TypeScript Day 39</p>
          <Link to="/day-040" className="day001-nav-btn day001-nav-next">Day 40 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>DSA</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 39 <span aria-hidden="true">🥞</span></h1>
              <p className="day001-day-theme">DSA — STACKS, QUEUES &amp; LINKED LISTS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '39%' }} /></div>

        <p className="day001-summary">
          Linear structures and their patterns. A <strong>stack</strong> (LIFO) is an array with push/pop — it solves{' '}
          <strong>valid parentheses</strong>, undo, DFS, and <strong>monotonic-stack</strong> next-greater problems. A{' '}
          <strong>queue</strong> (FIFO) drives BFS — but avoid <code>array.shift()</code> (O(n)); use a head index for
          O(1). A <strong>linked list</strong> is nodes with a <code>next</code> pointer — O(1) splice, O(n) access —
          and its classics are <strong>reversing</strong> (flip pointers in one pass) and{' '}
          <strong>fast &amp; slow pointers</strong> (find the middle / detect a cycle in one pass, O(1) space).{' '}
          <em>Next: trees &amp; binary search.</em>
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

        <CardSection icon="🥞" title="STACKS & QUEUES" cards={STACKQ} columns={2} />
        <CardSection icon="🔗" title="LINKED LISTS" cards={LISTS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#DSA</span><span>#LinkedList</span>
        </footer>
      </div>
    </div>
  );
}
