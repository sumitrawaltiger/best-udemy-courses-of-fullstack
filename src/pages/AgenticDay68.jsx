import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const REDIS_DOCS = 'https://redis.io/docs/latest/';
const LOCUST_DOCS = 'https://docs.locust.io/en/stable/';

const LEARNT_TODAY = [
  { title: 'Where the bottleneck usually is', text: 'LLM API latency, not your own application code — the model call almost always dominates response time' },
  { title: 'Caching', text: 'an identical (or near-identical) prompt can return a cached response instead of paying for another model call' },
  { title: 'Request queuing', text: 'a queue smooths bursty traffic so a sudden spike doesn\'t blow through your provider\'s rate limits' },
  { title: 'Batching', text: 'grouping multiple requests into one model call when the provider supports it, trading a little latency for throughput' },
  { title: 'Horizontal scaling', text: 'stateless API servers scale by adding more instances behind a load balancer — no single point of overload' },
  { title: 'Autoscaling triggers', text: 'scale on queue depth or latency for LLM-heavy services — raw CPU alone is a poor signal here' },
  { title: 'Multi-region / multi-provider', text: 'route to a backup model or region automatically when the primary is degraded or rate-limited' },
  { title: 'What\'s next', text: 'a fast, scaled system still needs to be secure before it\'s truly production-ready' },
];

const CORE = [
  {
    icon: '⚡', title: 'Caching Responses', titleClass: 'card-title-cyan', subtitle: 'Skip The Repeat Call',
    description:
      'Hash the prompt (plus relevant context) as a cache key. A cache hit returns instantly and costs nothing — no model call at all.',
    code: 'key = hash(prompt + context)\nif cache.has(key): return cache.get(key)',
  },
  {
    icon: '📥', title: 'Queuing & Batching', titleClass: 'card-title-purple', subtitle: 'Smooth The Bursts',
    description:
      'A queue absorbs traffic spikes so requests wait in line instead of failing outright; batching groups several requests into one model call where supported.',
    code: 'queue.push(request)\nworker.process_batch(queue.pop_n(8))',
  },
  {
    icon: '📈', title: 'Autoscaling Triggers', titleClass: 'card-title-amber', subtitle: 'Scale On The Right Signal',
    description:
      'For LLM-heavy services, queue depth and p95 latency predict overload far earlier and better than raw CPU usage does.',
    code: 'scale_up when queue_depth > 50\nor p95_latency > 2s',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Add a Cache Layer', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Wrap one LLM call with a Redis cache keyed on the prompt hash, and measure the hit rate on repeated questions.',
    code: 'redis.set(key, response, ex=3600)',
  },
  {
    icon: '🏋️', title: 'Load Test Your Endpoint', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Fire a burst of concurrent requests at your service and watch where latency and errors start climbing.',
  },
  {
    icon: '🔜', title: 'Next: Security', titleClass: 'card-title-amber', subtitle: 'Day 69 Preview',
    description: 'Tomorrow — prompt injection defense, PII handling, and tool permissions for production agents.',
    link: { href: '/agentic-day-69', label: 'Go to Day 69 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Python & Agentic Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'The site\'s Python and Agentic AI modules feeding into this LLMOps practice.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '📖', title: 'Redis Docs', titleClass: 'card-title-purple', subtitle: 'Caching',
    description: 'Official docs for using Redis as a fast response cache in front of LLM calls.',
    link: { href: REDIS_DOCS, label: 'Open Redis docs →', external: true },
  },
  {
    icon: '🏋️', title: 'Locust Docs', titleClass: 'card-title-amber', subtitle: 'Load Testing',
    description: 'Reference for writing load tests that simulate real concurrent traffic against your API.',
    link: { href: LOCUST_DOCS, label: 'Open Locust docs →', external: true },
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

export default function AgenticDay68() {
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
          <Link to="/agentic-day-67" className="day001-nav-btn day001-nav-prev">← Day 67</Link>
          <p className="day001-datetime">Agentic AI Day 68 · 25 Oct 2026</p>
          <Link to="/agentic-day-69" className="day001-nav-btn day001-nav-next">Day 69 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>LLMOps</span><span>Scaling</span><span>Phase 10</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 68 <span aria-hidden="true">📈</span></h1>
              <p className="day001-day-theme">SCALING LLM SERVICES</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · LLMOPS</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '45%' }} /></div>

        <p className="day001-summary">
          Day 68 handles more traffic without falling over. <strong>Caching</strong> to skip repeat model
          calls, <strong>queuing and batching</strong> to smooth bursts, and <strong>autoscaling</strong> on
          the signals that actually predict LLM-service overload.
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

        <CardSection icon="📈" title="HANDLING MORE TRAFFIC" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#LLMOps</span><span>#Day68</span><span>#Scaling</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
