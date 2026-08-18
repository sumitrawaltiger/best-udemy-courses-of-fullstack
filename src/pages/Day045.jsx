import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL = 'https://app.notion.com/p/Lecture-26-Consistent-Hashing-3bfa9af81c98804dbf12c4f5979441a8?source=copy_link';

const LEARNT_TODAY = [
  { title: 'Modulo hashing fails on scale', text: 'hash(key) % N remaps ~75% of keys when N changes — unacceptable at millions of records' },
  { title: 'Fixed bucket space', text: 'hash(key) % 100 keeps user→bucket stable; only bucket→DB assignment changes when a node joins' },
  { title: 'Hash ring', text: 'visualise the hash space as a circle; each DB owns from its predecessor to itself — clockwise' },
  { title: 'Virtual nodes (vnodes)', text: 'each physical DB gets many ring positions for uniform distribution; avoids hotspots from random single points' },
  { title: 'O(log V) lookup', text: 'store sorted tokens; find successor with lower_bound — ordered map, not hash map' },
  { title: 'Minimal remapping', text: 'adding one node moves only the nearby range, not the whole cluster' },
  { title: 'Replication with RF', text: 'walk the ring clockwise, pick RF distinct physical nodes as replica set; skip vnodes of the same machine' },
  { title: 'Rack / AZ awareness', text: 'spread replicas across failure domains — rack, AZ — so one outage cannot take all copies' },
  { title: 'Celebrity / hot key', text: 'vnodes balance key count, not traffic — Virat Kohli still hammers one partition' },
  { title: 'Async counters beat hot writes', text: 'store individual like records; aggregate counts asynchronously via queues — do not UPDATE one row millions of times' },
];

const PROBLEM_CARDS = [
  {
    icon: '💥', title: 'Modulo Hashing Breaks on Resize', titleClass: 'card-title-purple',
    subtitle: 'hash(userId) % N',
    description: 'Works perfectly with a fixed N. Add one DB (3→4) and ~75% of all keys get remapped to a different node — but only 25% of data actually needs to move. You are migrating 2.25M users when only 750K need to.',
    code: 'hash(Rohit) = 10\n10 % 3 = 1  →  DB1   (before)\n10 % 4 = 2  →  DB2   (after adding DB3)\n\n// ≈75% of keys change owner on every resize',
  },
  {
    icon: '🪣', title: 'Fixed Bucket Space', titleClass: 'card-title-cyan',
    subtitle: 'hash(key) % 100 — stable indirection',
    description: 'Choose a fixed modulus (e.g. 100). Each user permanently lands in bucket 0–99. Buckets are then assigned to DBs. Adding a DB re-assigns some buckets, but the user→bucket mapping never changes.',
    code: '// 3 DBs → buckets 0-32 / 33-65 / 66-99\n// Add DB3 → steal ~25 buckets spread evenly\n// Only those bucket owners migrate data\n// user → bucket   stays constant',
  },
];

const RING_CARDS = [
  {
    icon: '⭕', title: 'The Hash Ring', titleClass: 'card-title-cyan',
    subtitle: 'Hash space visualised as a circle',
    description: 'After 99 comes 0 — the range wraps into a ring. DBs sit at positions on the ring. A key\'s owner is the first DB position clockwise from hash(key). Wrap-around: if hash = 97 and last vnode = 96, walk to 4 at the start.',
    code: '// positions on ring\nDB0 → 8, 38, 71\nDB1 → 20, 55, 88\nDB2 → 4, 45, 76\n\n// hash(userId) = 37 → clockwise → 38 → DB0',
  },
  {
    icon: '🔵', title: 'Virtual Nodes (vnodes)', titleClass: 'card-title-amber',
    subtitle: 'Many ring positions per physical DB',
    description: 'One position per DB risks heavy imbalance (80% to one node). Virtual nodes give each physical DB many positions spread around the ring, averaging out random gaps. A vnode is not a machine — it is a ring position that maps to a machine.',
    code: '// generate deterministically:\nhash("DB0#0") → 8\nhash("DB0#1") → 38\nhash("DB0#2") → 71\n\n// Real hash space: 0 … 2^32 − 1\n// Store only 1600 tokens (100 DBs × 16 vnodes)',
  },
  {
    icon: '🔍', title: 'O(log V) Successor Lookup', titleClass: 'card-title-purple',
    subtitle: 'Ordered map — NOT hash map',
    description: 'We need the smallest token ≥ hash(key), not exact lookup. Use a sorted vector or ordered map and call lower_bound. If lower_bound returns end(), wrap to begin(). An unordered_map cannot do successor queries.',
    code: '// C++ ordered map\nmap<Token, DB> ring;\nauto it = ring.lower_bound(userHash);\nif (it == ring.end()) it = ring.begin();\n// → it->second is the owning DB\n// O(log V),  V = total vnode count',
  },
];

const REPLICATION_CARDS = [
  {
    icon: '📋', title: 'Replication Factor (RF)', titleClass: 'card-title-cyan',
    subtitle: 'Walk the ring, pick distinct physical nodes',
    description: 'RF=3 means 3 physical copies. Find the successor, then walk clockwise collecting nodes — skip vnodes that belong to a physical DB already chosen. Two vnodes of the same machine count as one physical copy.',
    code: '// RF = 3, ring: 40→DB3, 45→DB3, 50→DB0, 55→DB2\nhash(user) = 37\n\n40 → DB3  ✓\n45 → DB3  ✗ skip (same machine)\n50 → DB0  ✓\n55 → DB2  ✓\n// replica set: DB3, DB0, DB2',
  },
  {
    icon: '🏗️', title: 'Rack & AZ Awareness', titleClass: 'card-title-amber',
    subtitle: 'Spread replicas across failure domains',
    description: 'Three replicas in the same rack disappear together if the rack loses power or network. Walk the ring picking distinct physical nodes AND distinct racks or availability zones. AZ-aware replication survives an entire zone outage.',
    code: '// Prefer:\nReplica1 → AZ-A\nReplica2 → AZ-B\nReplica3 → AZ-C\n\n// Replication = protects single machine\n// Rack-aware  = protects rack failure\n// AZ-aware    = protects zone failure',
  },
  {
    icon: '🔄', title: 'Coordinator & Quorum', titleClass: 'card-title-purple',
    subtitle: 'Who routes and how many ACKs?',
    description: 'A client may hit any node. That node becomes the coordinator: it hashes the key, finds the replica set, fans out the request, and waits for the quorum number of ACKs. Consistency level = how many ACKs are enough (1, 2, or RF).',
    code: '// RF=3, CL=2 (quorum)\nClient → DB5 (coordinator)\n  → hash(key) → token → DB2, DB7, DB9\n  → send write to all 3\n  → wait for 2 ACKs → return success\n  // DB9 slow? doesn\'t matter',
  },
];

const HOTKEY_CARDS = [
  {
    icon: '🔥', title: 'Celebrity / Hot Key Problem', titleClass: 'card-title-purple',
    subtitle: 'vnodes balance key count, not traffic',
    description: 'Consistent hashing distributes 1M users equally across DBs. But Virat Kohli generates millions of read/write requests per hour — all routed to his one DB partition. vnodes cannot fix this. Different tools are needed.',
    code: '// DB0 → 1M users,  normal traffic\n// DB1 → 1M users,  normal traffic\n// DB2 → 1M users + Virat  ← overloaded\n// DB3 → 1M users,  normal traffic',
  },
  {
    icon: '✅', title: 'Store Individual Like Records', titleClass: 'card-title-cyan',
    subtitle: 'Source of truth — not the counter',
    description: 'The like relationship (userId, postId) must be accurate. The global count is derived data. Store each user action as its own record. Never UPDATE the celebrity post row on every like — that serialises millions of writes on one row.',
    code: '// GOOD\nINSERT like { userId: Rohit, postId: 500 }\n// unlike → DELETE (Rohit, 500)\n\n// BAD — millions of writers fight one row:\nUPDATE post500 SET likes = likes + 1',
  },
  {
    icon: '📦', title: 'Async Counter Aggregation', titleClass: 'card-title-amber',
    subtitle: 'Queue → Aggregator → Redis INCRBY',
    description: 'Emit a +1 event to a queue on each like. An aggregator collects a batch (e.g. 12,431 likes in 1s) and issues one Redis INCRBY. The public count can be approximate — nobody checks it to the millisecond. The individual like record is always exact.',
    code: 'User likes post\n  → INSERT like record  (accurate)\n  → emit +1 event\n       ↓\n  Queue / Stream\n       ↓\n  Aggregator (batch)\n       ↓\n  INCRBY post:500:likes 12431  (1 write)',
  },
];

const MENTAL_MODEL_CARDS = [
  {
    icon: '🧠', title: 'Normal Key Lookup', titleClass: 'card-title-cyan',
    subtitle: 'hash → token → successor → DB',
    description: 'Every read or write follows the same path: hash the partition key to a token, find the successor vnode with lower_bound, map to a physical node. With replication, walk clockwise for RF distinct physical nodes.',
    code: 'userId\n  → hash()\n  → token\n  → lower_bound on sorted token map\n  → vnode → physical DB\n\n// With RF=3:\n  → walk ring → 3 distinct physical DBs',
  },
  {
    icon: '⚖️', title: 'Three Separate Problems', titleClass: 'card-title-amber',
    subtitle: 'Do not conflate them',
    description: 'Consistent hashing solves key distribution. Replication + rack awareness solves fault tolerance. Caching, event streams, and sharded counters solve hot key traffic. Each layer is independent.',
    code: '// Key/data distribution\n→ consistent hashing + vnodes\n\n// Fault tolerance\n→ RF + rack/AZ-aware placement\n\n// Hot-write traffic\n→ batch events + sharded counters',
  },
];

const RESOURCES_CARDS = [
  {
    icon: '📝', title: 'Full Lecture Notes', titleClass: 'card-title-cyan',
    subtitle: 'Notion — Lecture 26: Consistent Hashing',
    description: 'Complete 40-section notes: modulo hashing → fixed buckets → hash ring → vnodes → implementation → replication → rack awareness → coordinator → quorum → celebrity problem → async counters → complete mental model.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '🔜', title: 'Next: APIs', titleClass: 'card-title-amber',
    subtitle: 'Day 46 Preview',
    description: 'How services communicate — REST vs GraphQL vs gRPC, WebSockets for real-time, versioning, pagination, and idempotency.',
    link: { href: '/day-046', label: 'Go to Day 46 →' },
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

export default function Day045() {
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
          <Link to="/day-044" className="day001-nav-btn day001-nav-prev">← Day 44</Link>
          <p className="day001-datetime">JavaScript Day 45 · 21 Jul 2027</p>
          <Link to="/day-046" className="day001-nav-btn day001-nav-next">Day 46 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>JavaScript</span><span>System Design</span><span>Lecture 26</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 45 <span aria-hidden="true">⭕</span></h1>
              <p className="day001-day-theme">CONSISTENT HASHING</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">JAVASCRIPT · SYSTEM DESIGN</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '45%' }} /></div>

        <p className="day001-summary">
          <strong>Consistent Hashing</strong> solves the key-distribution problem that breaks modulo hashing
          every time a node is added or removed. A fixed hash space wraps into a{' '}
          <strong>ring</strong>; each DB sits at one or more positions (
          <strong>virtual nodes</strong>); a key's owner is the first DB clockwise from{' '}
          <code>hash(key)</code>. Adding a node moves only the nearby range — not the whole cluster.
          With replication, walk the ring clockwise collecting RF distinct physical nodes; use rack/AZ
          awareness to survive group failures. Consistent hashing distributes <em>keys</em> — it does not
          fix <strong>hot-key traffic</strong> (e.g. the celebrity problem), which needs caching, event
          queues, and async counter aggregation.{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#00e5a0' }}>
            Full Notion notes →
          </a>
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

        <CardSection icon="💥" title="THE PROBLEM WITH MODULO HASHING" cards={PROBLEM_CARDS} columns={2} />
        <CardSection icon="⭕" title="THE HASH RING & VIRTUAL NODES" cards={RING_CARDS} columns={3} />
        <CardSection icon="📋" title="REPLICATION, COORDINATOR & QUORUM" cards={REPLICATION_CARDS} columns={3} />
        <CardSection icon="🔥" title="THE CELEBRITY / HOT KEY PROBLEM" cards={HOTKEY_CARDS} columns={3} />
        <CardSection icon="🧠" title="COMPLETE MENTAL MODEL" cards={MENTAL_MODEL_CARDS} columns={2} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES_CARDS} columns={2} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#JavaScript</span><span>#SystemDesign</span>
          <span>#ConsistentHashing</span><span>#DistributedSystems</span>
        </footer>
      </div>
    </div>
  );
}
