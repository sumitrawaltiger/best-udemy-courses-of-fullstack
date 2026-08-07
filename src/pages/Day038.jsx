import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const MDN_MAP = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map';
const MDN_SET = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set';

const LEARNT_TODAY = [
  { title: 'Map & Set', text: 'O(1) average insert, lookup and delete — the workhorses of DSA' },
  { title: 'Use real Map/Set', text: 'not plain objects — Map keeps any key type and insertion order' },
  { title: 'Frequency counting', text: 'count occurrences in one pass to solve anagrams, majority, top-K' },
  { title: 'Seen-set trick', text: 'detect duplicates or complements in O(n) with a Set' },
  { title: 'Two Sum in O(n)', text: 'store complements in a Map instead of a nested loop' },
  { title: 'Sliding window', text: 'a moving range over an array/string for subarray problems' },
  { title: 'Fixed vs variable window', text: 'fixed size (sum of k) or grow/shrink to satisfy a condition' },
  { title: 'Space for time', text: 'a little extra memory turns O(n²) into O(n)' },
  { title: 'messageRouter', text: 'auth-protected router — GET /:chatId (history) and POST /:chatId (send)' },
  { title: 'sendMessage', text: 'create a Message doc, auto-generate topic if first message, increment messageCount on Chat' },
  { title: 'App wiring', text: 'import chatRouter + messageRouter in index.js and mount under /api/chats and /api/messages' },
];

const HASHING = [
  {
    icon: '🗺️', title: 'Map & Set', titleClass: 'card-title-cyan', subtitle: 'O(1) Average',
    description:
      'Map and Set give constant-average insert, lookup and delete. Prefer them over plain objects — Map allows any key type and preserves insertion order, Set stores unique values.',
    code: 'const freq = new Map<string, number>();\nfor (const c of s) freq.set(c, (freq.get(c) ?? 0) + 1);\n\nconst seen = new Set<number>();\nseen.has(x); seen.add(x);',
  },
  {
    icon: '🎯', title: 'Two Sum', titleClass: 'card-title-purple', subtitle: 'Complements In A Map',
    description:
      'The canonical hashing win: instead of checking every pair (O(n²)), store each number’s complement in a Map and look it up — one O(n) pass.',
    code: 'function twoSum(a: number[], t: number) {\n  const seen = new Map<number, number>();\n  for (let i = 0; i < a.length; i++) {\n    if (seen.has(t - a[i])) return [seen.get(t - a[i])!, i];\n    seen.set(a[i], i);\n  }\n}',
  },
];

const WINDOW = [
  {
    icon: '🪟', title: 'Fixed Window', titleClass: 'card-title-cyan', subtitle: 'Size k',
    description:
      'For "best over every window of size k", slide the window: add the entering element, remove the leaving one, and track the answer — O(n) instead of recomputing each window.',
    code: 'function maxSumK(a: number[], k: number) {\n  let sum = 0; for (let i = 0; i < k; i++) sum += a[i];\n  let best = sum;\n  for (let i = k; i < a.length; i++) {\n    sum += a[i] - a[i - k];\n    best = Math.max(best, sum);\n  }\n  return best;\n}',
  },
  {
    icon: '↔️', title: 'Variable Window', titleClass: 'card-title-purple', subtitle: 'Grow & Shrink',
    description:
      'Expand the right edge, and shrink the left while a condition is violated. Perfect for "longest substring without repeats" or "smallest subarray with sum ≥ target".',
    code: '// longest substring without repeating chars\nlet l = 0, best = 0; const seen = new Set<string>();\nfor (let r = 0; r < s.length; r++) {\n  while (seen.has(s[r])) seen.delete(s[l++]);\n  seen.add(s[r]); best = Math.max(best, r - l + 1);\n}',
  },
  {
    icon: '⚖️', title: 'Space For Time', titleClass: 'card-title-amber', subtitle: 'The Trade',
    description:
      'Hashing and windows spend a little memory (a Map or Set) to skip repeated work. Recognising when a nested loop hides an O(n) hashing solution is a core interview skill.',
    footer: 'nested loop? → look for a Map/Set solution',
  },
];

const MSG_ROUTES = [
  {
    icon: '🗺️', title: 'messageRoutes.js', titleClass: 'card-title-cyan', subtitle: 'routes/messageRoutes.js — Lecture 19',
    description:
      'Create a Router, protect it with authMiddleware, then wire two endpoints: GET /:chatId fetches message history, POST /:chatId sends a new message.',
    code: 'import express from "express";\nimport { authMiddleware } from "../middleware/auth.js";\nimport { getMessages, sendMessage }\n  from "../controllers/messageController.js";\n\nconst messageRouter = express.Router();\nmessageRouter.use(authMiddleware);\n\nmessageRouter.get("/:chatId",  getMessages);\nmessageRouter.post("/:chatId", sendMessage);\n\nexport default messageRouter;',
  },
  {
    icon: '📜', title: 'getMessages', titleClass: 'card-title-purple', subtitle: 'GET /api/messages/:chatId',
    description:
      'Find all messages whose chatId matches the URL param, sorted oldest-first so the client renders the conversation in order.',
    code: 'export const getMessages = async (req, res) => {\n  try {\n    const messages = await Message\n      .find({ chatId: req.params.chatId })\n      .sort({ createdAt: 1 });\n    res.json(messages);\n  } catch (err) {\n    res.status(500).json({ message: err.message });\n  }\n};',
  },
  {
    icon: '📨', title: 'sendMessage', titleClass: 'card-title-amber', subtitle: 'POST /api/messages/:chatId',
    description:
      'Create a Message document, auto-generate a topic on the first message, and increment the parent Chat's messageCount in one atomic findByIdAndUpdate.',
    code: 'export const sendMessage = async (req, res) => {\n  try {\n    const { chatId } = req.params;\n    const msg = await Message.create({ chatId, ...req.body });\n    // auto-topic on first message\n    const count = await Message.countDocuments({ chatId });\n    if (count === 1) {\n      await Chat.findByIdAndUpdate(chatId, {\n        topic: req.body.content?.slice(0, 50) ?? "New chat"\n      });\n    }\n    await Chat.findByIdAndUpdate(chatId, { $inc: { messageCount: 1 } });\n    res.status(201).json(msg);\n  } catch (err) {\n    res.status(500).json({ message: err.message });\n  }\n};',
  },
];

const APP_WIRING = [
  {
    icon: '🔌', title: 'index.js Imports', titleClass: 'card-title-cyan', subtitle: 'Wiring All Routers',
    description:
      'In the main entry file, import userRouter, chatRouter and messageRouter, then mount them under their respective /api prefixes. One require per router, one app.use line each.',
    code: 'import userRouter    from "./routes/userRoutes.js";\nimport chatRouter    from "./routes/chatRoutes.js";\nimport messageRouter from "./routes/messageRoutes.js";\n\napp.use("/api/users",    userRouter);\napp.use("/api/chats",    chatRouter);\napp.use("/api/messages", messageRouter);',
  },
  {
    icon: '🏗️', title: 'Full API Surface', titleClass: 'card-title-purple', subtitle: 'All Endpoints After Wiring',
    description:
      'After mounting all three routers the Express app exposes a clean REST surface for users, chats, and messages.',
    code: 'POST   /api/users/signup\nPOST   /api/users/login\n\nPOST   /api/chats          — createChat\nGET    /api/chats          — getRecentChats\nGET    /api/chats/:id      — getSingleChat\nDELETE /api/chats/:id      — deleteChat\n\nGET    /api/messages/:id   — getMessages\nPOST   /api/messages/:id   — sendMessage',
  },
  {
    icon: '🔒', title: 'Auth on Every Route', titleClass: 'card-title-amber', subtitle: 'Middleware at Router Level',
    description:
      'chatRouter and messageRouter both call router.use(authMiddleware) so every single endpoint is protected without repeating the guard. Only /api/users/signup and /api/users/login are public.',
    footer: 'router.use(authMiddleware) → all child routes protected',
  },
];

const RESOURCES = [
  {
    icon: '🗺️', title: 'Map (MDN)', titleClass: 'card-title-cyan', subtitle: 'Reference',
    description:
      'The Map API and why it beats plain objects for keyed data — any key type, size, ordered iteration and O(1) operations.',
    link: { href: MDN_MAP, label: 'Open MDN Map →', external: true },
  },
  {
    icon: '🎯', title: 'Set (MDN)', titleClass: 'card-title-purple', subtitle: 'Unique Values',
    description:
      'Set for membership tests and de-duplication — has/add/delete in O(1) average, the basis of the "seen" pattern.',
    link: { href: MDN_SET, label: 'Open MDN Set →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Stacks & Lists', titleClass: 'card-title-amber', subtitle: 'Day 39 Preview',
    description:
      'Tomorrow — stacks (LIFO), queues (FIFO) and linked lists in TypeScript, with the classic patterns each unlocks (valid parentheses, BFS, reversal).',
    link: { href: '/day-039', label: 'Go to Day 39 →' },
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

export default function Day038() {
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
          <Link to="/day-037" className="day001-nav-btn day001-nav-prev">← Day 37</Link>
          <p className="day001-datetime">TypeScript Day 38 · 7 Feb 2027</p>
          <Link to="/day-039" className="day001-nav-btn day001-nav-next">Day 39 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>DSA</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 38 <span aria-hidden="true">🗺️</span></h1>
              <p className="day001-day-theme">DSA — HASHING &amp; SLIDING WINDOW</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '38%' }} /></div>

        <p className="day001-summary">
          Trade a little space for a lot of speed. <strong>Map</strong> and <strong>Set</strong> give O(1)-average
          lookups — use the real ones, not plain objects. <strong>Frequency counting</strong> and the{' '}
          <strong>seen-set</strong> trick crack anagrams, duplicates and Two Sum (store complements in a Map → one
          O(n) pass instead of O(n²)). The <strong>sliding window</strong> handles subarray/substring problems:{' '}
          <strong>fixed size</strong> (best sum of k by adding the entering and removing the leaving element) or{' '}
          <strong>variable</strong> (grow the right edge, shrink the left while a condition breaks — longest substring
          without repeats). <em>Next: stacks, queues &amp; linked lists.</em>
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

        <CardSection icon="🗺️" title="HASHING" cards={HASHING} columns={2} />
        <CardSection icon="🪟" title="SLIDING WINDOW" cards={WINDOW} columns={3} />
        <CardSection icon="📨" title="MESSAGE ROUTES & CONTROLLER — Lecture 19" cards={MSG_ROUTES} columns={3} />
        <CardSection icon="🔌" title="APP WIRING — index.js" cards={APP_WIRING} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#DSA</span><span>#Hashing</span>
        </footer>
      </div>
    </div>
  );
}
