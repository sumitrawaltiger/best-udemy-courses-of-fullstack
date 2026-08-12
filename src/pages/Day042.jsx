import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL = 'https://app.notion.com/p/Lecture23-Scaling-the-system-3b9a9af81c98804bb2bdd03f3fa242e8';
const EXCALIDRAW_PDF = '/devops-notes/Excalidraw-Notes.pdf';

const LEARNT_TODAY = [
  { title: 'DNS resolution chain', text: 'Client → ISP Resolver → Root Server (13 logical, hundreds via anycast) → TLD Server (.com) → Authoritative DNS → IP cached at every layer' },
  { title: 'DNS record types', text: 'A (IPv4) · AAAA (IPv6) · CNAME (alias) · MX (mail) · TXT (verify/SPF) · NS (name server) · SOA (zone authority)' },
  { title: 'TTL', text: 'Time To Live — controls how long resolvers cache a record before a fresh lookup is needed; short TTL = faster propagation after changes' },
  { title: 'Vertical vs horizontal scaling', text: 'Vertical = bigger single machine (CPU/RAM); horizontal = more identical machines behind a load balancer — no ceiling but requires stateless design' },
  { title: 'Load balancing strategies', text: 'Round Robin · Least Connections · Weighted Round Robin · IP Hash — each strategy routes requests differently based on capacity and session needs' },
  { title: 'Stateless servers + JWT', text: 'Server holds no session state — signed JWT travels with each request so any node can verify and serve any user' },
  { title: 'Sticky sessions', text: 'Pin a client to one server via cookie or IP hash — simplifies stateful apps but breaks auto-recovery when that server dies' },
  { title: 'Node.js proxy', text: 'http.request() + pipe() forward a request to an upstream server and stream the response back — the foundation of a custom load balancer' },
];

const DNS_CARDS = [
  {
    icon: '🌐', title: 'DNS Resolution Flow', titleClass: 'card-title-cyan', subtitle: 'How Names Become IPs',
    description:
      'Browser cache → OS cache → ISP Recursive Resolver → Root Name Server (13 logical roots, replicated worldwide via anycast) → TLD Server (.com, .org, .in) → Authoritative DNS Server → IP returned and cached at every hop with its TTL.',
  },
  {
    icon: '📋', title: 'DNS Record Types', titleClass: 'card-title-purple', subtitle: 'A · AAAA · CNAME · MX · TXT · NS · SOA',
    description:
      'A: domain → IPv4. AAAA: domain → IPv6. CNAME: alias pointing to another domain name. NS: which servers are authoritative for this zone. MX: mail exchange servers (priority-ordered). TXT: free text — SPF, domain ownership, DKIM. SOA: Start of Authority — serial, refresh, retry, expire, minimum TTL.',
  },
  {
    icon: '⏱️', title: 'TTL & Diagnostics', titleClass: 'card-title-amber', subtitle: 'Cache Lifetime · CLI Tools',
    description:
      'TTL (seconds) tells every resolver how long to cache a record. Lower TTL = faster propagation but more DNS queries; higher TTL = fewer queries but slower rollouts. Debug DNS lookups from your terminal.',
    code: '# DNS diagnostics\nnslookup google.com\ndig google.com\nhost google.com\n# Trace the network path\ntraceroute google.com',
  },
];

const SCALING_CARDS = [
  {
    icon: '⚖️', title: 'Vertical vs Horizontal', titleClass: 'card-title-cyan', subtitle: 'Scale Up or Scale Out',
    description:
      'Vertical (scale up): add CPU / RAM to a single server. Fast to apply, but there is a physical ceiling and a single point of failure — when it goes down, everything goes down. Horizontal (scale out): add identical servers behind a load balancer. No ceiling; one dead node barely hurts. Requires stateless server design.',
  },
  {
    icon: '🔀', title: 'Load Balancing Strategies', titleClass: 'card-title-purple', subtitle: 'Round Robin · Least Conn · Weighted · IP Hash',
    description:
      'Round Robin: distribute requests to each server in turn — simple and even for equal-capacity nodes. Least Connections: route to the server with fewest active requests — better for variable-duration tasks. Weighted Round Robin: assign a capacity ratio (e.g., a 4-core gets 2× traffic of a 2-core). IP Hash: deterministic — same client IP always maps to the same server.',
  },
  {
    icon: '🔐', title: 'Sessions, JWT & Anycast', titleClass: 'card-title-amber', subtitle: 'State at Scale',
    description:
      'Stateless design: session data lives in a signed JWT — any server verifies it with the shared secret, so any node can serve any request. Sticky sessions pin a user to one server via a cookie or IP hash — simpler for stateful apps, but recovery is messy. Anycast: many servers share one IP; the network routes each packet to the nearest physical node automatically.',
  },
];

const CODE_CARDS = [
  {
    icon: '⚙️', title: 'Node.js Round-Robin Proxy', titleClass: 'card-title-cyan', subtitle: 'http.request() + pipe()',
    description:
      'Cycle through upstream worker ports, forward the request with http.request(), and pipe the response back to the client. The caller sees one address; load spreads across all workers.',
    code: `const http = require('http');
const servers = [3001, 3002, 3003];
let idx = 0;

http.createServer((req, res) => {
  const port = servers[idx++ % servers.length];
  const proxy = http.request(
    {
      hostname: 'localhost',
      port,
      path: req.url,
      method: req.method,
      headers: req.headers,
    },
    (upstream) => upstream.pipe(res)
  );
  req.pipe(proxy);
}).listen(3000, () => console.log('LB → :3000'));`,
  },
  {
    icon: '🔫', title: 'Load-Test with Autocannon', titleClass: 'card-title-purple', subtitle: 'Stress-Test Your Server',
    description:
      'Autocannon fires concurrent HTTP requests for a fixed duration and reports throughput, latency p50/p99, and errors. Run it against the proxy to confirm traffic is spread across workers.',
    code: `# 10 concurrent connections for 20 seconds
npx autocannon -c 10 -d 20 http://localhost:3000/users`,
  },
];

const RESOURCES = [
  {
    icon: '📝', title: 'Lecture 23 — Notion Notes', titleClass: 'card-title-cyan', subtitle: 'Full Notes',
    description:
      'Complete notes from Lecture 23: DNS hierarchy, all 7 record types, TTL, CORS, vertical vs horizontal scaling, every load-balancing strategy, stateless servers, JWT auth at scale, sticky sessions, Anycast, and the Node.js proxy implementation.',
    link: { href: NOTION_URL, label: 'Open Notion →', external: true },
  },
  {
    icon: '🗺️', title: 'Excalidraw Diagram', titleClass: 'card-title-purple', subtitle: 'DNS & Scaling Architecture',
    description:
      'Hand-drawn architecture map of the DNS resolution flow and load-balancing topology from Lecture 23. Download the PDF to zoom into the full diagram.',
    link: { href: EXCALIDRAW_PDF, label: 'Download Diagram →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Day 43 Preview', titleClass: 'card-title-amber', subtitle: 'Day 43 →',
    description:
      'Coming up — caching strategies, CDN basics, database read replicas, and horizontal write scaling with sharding.',
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
          <p className="day001-datetime">JavaScript Day 42 · 18 Jul 2027</p>
          <Link to="/day-043" className="day001-nav-btn day001-nav-next">Day 43 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>JavaScript</span><span>Lecture 23</span><span>DNS · Scaling</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 42 <span aria-hidden="true">🌐</span></h1>
              <p className="day001-day-theme">BACKEND SCALING: DNS &amp; LOAD BALANCING</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">JAVASCRIPT · LECTURE 23</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '42%' }} /></div>

        <p className="day001-summary">
          The internet's phone book: <strong>DNS</strong> converts domain names into IPs through a chain —
          Client → ISP Resolver → <strong>Root Server</strong> → <strong>TLD Server</strong> → <strong>Authoritative DNS</strong> →
          cached IP. Seven record types (A · AAAA · CNAME · MX · TXT · NS · SOA) and <strong>TTL</strong> control what is
          stored and for how long. When a single server can't keep up, <strong>vertical scaling</strong> (bigger box) hits a ceiling,
          so we go <strong>horizontal</strong>: clone the server and put a <strong>load balancer</strong> in front.
          Strategies — Round Robin, Least Connections, Weighted, IP Hash — each suit different workloads.
          Servers must be <strong>stateless</strong>; JWT carries the session so any node can answer any request.
          Built a working Node.js proxy with <code>http.request()</code> + <code>pipe()</code>.{' '}
          <em>Notes &amp; diagram on Notion →</em>
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

        <CardSection icon="🌐" title="DNS — HOW THE INTERNET RESOLVES NAMES" cards={DNS_CARDS} columns={3} />
        <CardSection icon="⚖️" title="BACKEND SCALING & LOAD BALANCING" cards={SCALING_CARDS} columns={3} />
        <CardSection icon="⚙️" title="CODE: BUILDING A LOAD BALANCER" cards={CODE_CARDS} columns={2} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#JavaScript</span><span>#DNS</span><span>#LoadBalancing</span><span>#BackendScaling</span>
        </footer>
      </div>
    </div>
  );
}
