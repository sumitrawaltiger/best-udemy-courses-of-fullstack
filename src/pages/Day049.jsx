import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LB_MDN = 'https://developer.mozilla.org/en-US/docs/Web/Performance/Understanding_latency';
const NGINX_LB = 'https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/';

const LEARNT_TODAY = [
  { title: 'Load balancer', text: 'spreads traffic across many servers and hides failures' },
  { title: 'Algorithms', text: 'round-robin, least-connections, weighted, hash-based' },
  { title: 'Health checks', text: 'the LB stops sending traffic to unhealthy instances' },
  { title: 'Go stateless', text: 'any server handles any request — no in-memory session' },
  { title: 'Sessions elsewhere', text: 'keep session/state in Redis or a JWT, not the server' },
  { title: 'Horizontal auto-scaling', text: 'add/remove instances on CPU or request load' },
  { title: 'L4 vs L7', text: 'transport-level vs application-level routing' },
  { title: 'No single point of failure', text: 'run redundant LBs and multi-AZ instances' },
];

const LB = [
  {
    icon: '⚖️', title: 'The Load Balancer', titleClass: 'card-title-cyan', subtitle: 'One Front Door',
    description:
      'A load balancer sits in front of your servers and distributes requests, so no single box is overwhelmed and a dead instance is skipped. It’s the entry point that makes horizontal scale possible.',
    code: '// clients → LB → [ server1, server2, server3 ]\n// LB removes a server that fails health checks',
  },
  {
    icon: '🎛️', title: 'Balancing Algorithms', titleClass: 'card-title-purple', subtitle: 'How To Spread',
    description:
      'Round-robin cycles evenly; least-connections favours the freest server; weighted respects capacity; hash-based (by IP or key) pins a client to a server for stickiness.',
    code: '// round-robin        — simple, even\n// least-connections   — for long-lived requests\n// weighted            — mixed instance sizes\n// consistent hashing  — sticky routing / caches',
  },
];

const SCALE = [
  {
    icon: '🧊', title: 'Stateless Servers', titleClass: 'card-title-cyan', subtitle: 'Any Server, Any Request',
    description:
      'For horizontal scaling to work, servers must be stateless — no session stored in local memory. Put session and shared state in Redis or a JWT, so the LB can route freely and instances come and go.',
    code: '// ❌ in-memory session → breaks behind an LB\n// ✅ session in Redis / a signed JWT the client carries',
  },
  {
    icon: '📊', title: 'Auto-Scaling', titleClass: 'card-title-purple', subtitle: 'Match Capacity To Load',
    description:
      'Scale the instance count up on high CPU/RPS and down when quiet, driven by metrics. You pay for what you need and absorb traffic spikes without manual intervention.',
    code: '// target: CPU 60% → add instances above, remove below\n// min 2 (redundancy), max N (cost ceiling)',
  },
  {
    icon: '🛡️', title: 'Health & Redundancy', titleClass: 'card-title-amber', subtitle: 'No SPOF',
    description:
      'The LB polls each instance’s health endpoint and routes only to healthy ones. Run redundant load balancers across availability zones so the front door itself isn’t a single point of failure.',
    footer: 'health checks + multi-AZ + redundant LBs',
  },
];

const RESOURCES = [
  {
    icon: '⚖️', title: 'NGINX Load Balancing', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description:
      'A concrete look at HTTP load balancing — methods, health checks, sticky sessions and upstream configuration.',
    link: { href: NGINX_LB, label: 'Open the NGINX docs →', external: true },
  },
  {
    icon: '⏱️', title: 'Understanding Latency', titleClass: 'card-title-purple', subtitle: 'MDN',
    description:
      'Where time goes across the request path — useful context for why distributing and scaling matter.',
    link: { href: LB_MDN, label: 'Open the MDN guide →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Queues & Async', titleClass: 'card-title-amber', subtitle: 'Day 50 Preview',
    description:
      'Tomorrow — decouple with message queues: producers/consumers, Kafka vs RabbitMQ, event-driven design, and handling spikes with backpressure.',
    link: { href: '/day-050', label: 'Go to Day 50 →' },
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

export default function Day049() {
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
          <Link to="/day-048" className="day001-nav-btn day001-nav-prev">← Day 48</Link>
          <p className="day001-datetime">TypeScript Day 49 · 18 Feb 2027</p>
          <Link to="/day-050" className="day001-nav-btn day001-nav-next">Day 50 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>System Design</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 49 <span aria-hidden="true">⚖️</span></h1>
              <p className="day001-day-theme">SYSTEM DESIGN — LOAD BALANCING &amp; SCALING</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '49%' }} /></div>

        <p className="day001-summary">
          Spreading the load. A <strong>load balancer</strong> is the one front door that distributes requests across
          many servers and skips failed ones — with algorithms like <strong>round-robin</strong>,{' '}
          <strong>least-connections</strong>, <strong>weighted</strong> and <strong>consistent hashing</strong>. For it
          to work, servers must be <strong>stateless</strong> — keep sessions in <strong>Redis or a JWT</strong>, never
          local memory — so any instance serves any request. Then <strong>auto-scale</strong> the fleet on CPU/RPS
          (min 2 for redundancy). The LB uses <strong>health checks</strong> to route only to healthy nodes, and you
          run <strong>redundant LBs across zones</strong> so the front door isn’t a single point of failure.{' '}
          <em>Next: message queues.</em>
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

        <CardSection icon="⚖️" title="LOAD BALANCING" cards={LB} columns={2} />
        <CardSection icon="📊" title="STATELESS & SCALING" cards={SCALE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#SystemDesign</span><span>#Scaling</span>
        </footer>
      </div>
    </div>
  );
}
