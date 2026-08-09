import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const CAP_WIKI = 'https://en.wikipedia.org/wiki/CAP_theorem';
const CONSISTENCY = 'https://jepsen.io/consistency';

const LEARNT_TODAY = [
  { title: 'CAP theorem', text: 'under a network partition, choose consistency OR availability' },
  { title: 'Partitions happen', text: 'networks fail, so the real choice is CP vs AP' },
  { title: 'Strong consistency', text: 'every read sees the latest write — costs latency/availability' },
  { title: 'Eventual consistency', text: 'replicas converge over time — fast and available, briefly stale' },
  { title: 'Read-your-writes', text: 'a useful middle ground: you see your own updates immediately' },
  { title: 'Replication lag', text: 'the window where a replica is behind the primary' },
  { title: 'Quorums', text: 'require R + W > N reads/writes to overlap for consistency' },
  { title: 'Pick per feature', text: 'a bank balance ≠ a like count — match the guarantee to the need' },
];

const CAP = [
  {
    icon: '⚖️', title: 'The CAP Theorem', titleClass: 'card-title-cyan', subtitle: 'Pick 2 of 3',
    description:
      'Consistency, Availability, Partition-tolerance — you can’t have all three at once. Since partitions are unavoidable in a distributed system, the real decision is CP (stay consistent, reject some requests) vs AP (stay available, allow stale reads).',
    code: '// during a network partition:\n// CP → refuse writes/reads to stay consistent (banks)\n// AP → keep serving, reconcile later (feeds, carts)',
  },
  {
    icon: '🎯', title: 'Strong vs Eventual', titleClass: 'card-title-purple', subtitle: 'The Spectrum',
    description:
      'Strong consistency means every read returns the latest write — simple to reason about but slower and less available. Eventual consistency lets replicas converge over time — fast and available, briefly stale.',
    code: '// strong:   read always = last write (single-leader, quorum)\n// eventual: replicas converge (Dynamo-style, high availability)',
  },
];

const PRACTICE = [
  {
    icon: '👤', title: 'Read-Your-Writes', titleClass: 'card-title-cyan', subtitle: 'A Practical Middle',
    description:
      'A common compromise: the system may be eventually consistent globally, but a user always sees their own latest changes (route their reads to the primary or their own session). It feels correct without full strong consistency.',
    code: '// after a user updates their profile:\n// route THEIR next read to the primary → they see it\n// others may see it a moment later',
  },
  {
    icon: '🗳️', title: 'Quorums', titleClass: 'card-title-purple', subtitle: 'R + W > N',
    description:
      'With N replicas, require W acks to write and R responses to read. If R + W > N, the read and write sets overlap, guaranteeing you read the latest write — tune R/W to trade latency for consistency.',
    code: '// N=3 replicas; W=2, R=2 → R+W=4 > 3 → consistent\n// lower R/W → faster but weaker guarantees',
  },
  {
    icon: '🧭', title: 'Match The Guarantee', titleClass: 'card-title-amber', subtitle: 'Per Feature',
    description:
      'Consistency isn’t one setting. A bank balance or inventory count needs strong consistency; a like count, view total or feed can be eventual. Choose the weakest guarantee that’s still correct for each feature.',
    footer: 'money/inventory → strong · likes/feeds → eventual',
  },
];

const RESOURCES = [
  {
    icon: '⚖️', title: 'CAP Theorem', titleClass: 'card-title-cyan', subtitle: 'Reference',
    description:
      'The theorem, its precise statement, and why "pick 2 of 3" is really "CP vs AP under a partition".',
    link: { href: CAP_WIKI, label: 'Open the reference →', external: true },
  },
  {
    icon: '🔬', title: 'Consistency Models', titleClass: 'card-title-purple', subtitle: 'Jepsen',
    description:
      'A rigorous map of consistency guarantees — linearizable, sequential, causal, eventual — and how they relate.',
    link: { href: CONSISTENCY, label: 'Open the map →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Microservices', titleClass: 'card-title-amber', subtitle: 'Day 52 Preview',
    description:
      'Tomorrow — monolith vs microservices, the API gateway, service discovery, and the patterns (saga, circuit breaker) that keep distributed systems sane.',
    link: { href: '/day-052', label: 'Go to Day 52 →' },
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

export default function Day051() {
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
          <Link to="/day-050" className="day001-nav-btn day001-nav-prev">← Day 50</Link>
          <p className="day001-datetime">TypeScript Day 51 · 27 Jul 2027</p>
          <Link to="/day-052" className="day001-nav-btn day001-nav-next">Day 52 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>System Design</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 51 <span aria-hidden="true">⚖️</span></h1>
              <p className="day001-day-theme">SYSTEM DESIGN — CAP &amp; CONSISTENCY</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '51%' }} /></div>

        <p className="day001-summary">
          The distributed-data trade-off. The <strong>CAP theorem</strong> says that under a network{' '}
          <strong>partition</strong> (which will happen), you choose <strong>consistency</strong> or{' '}
          <strong>availability</strong> — CP (stay correct, reject some requests) vs AP (stay up, allow stale reads).{' '}
          <strong>Strong consistency</strong> means every read sees the latest write (slower); <strong>eventual
          consistency</strong> lets replicas converge (fast, briefly stale). Useful middles:{' '}
          <strong>read-your-writes</strong> and <strong>quorums</strong> (<code>R + W &gt; N</code> guarantees
          overlap). Match the guarantee to the feature — a <strong>bank balance</strong> needs strong, a{' '}
          <strong>like count</strong> can be eventual. <em>Next: microservices.</em>
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

        <CardSection icon="⚖️" title="CAP & CONSISTENCY" cards={CAP} columns={2} />
        <CardSection icon="🗳️" title="IN PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#SystemDesign</span><span>#CAP</span>
        </footer>
      </div>
    </div>
  );
}
