import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PROM = 'https://prometheus.io/docs/introduction/overview/';
const RED = 'https://www.weave.works/blog/the-red-method-key-metrics-for-microservices-architecture/';
const GRAFANA = 'https://grafana.com/docs/grafana/latest/';

const LEARNT_TODAY = [
  { title: 'Metrics', text: 'numbers over time — request rate, errors, latency, saturation' },
  { title: 'RED method', text: 'Rate, Errors, Duration — a simple starter set for HTTP APIs' },
  { title: 'Counter vs histogram', text: 'counters only go up; histograms bucket latency for p95/p99' },
  { title: 'Prometheus', text: 'pulls /metrics scrapes; PromQL queries power alerts and graphs' },
  { title: 'Expose /metrics', text: 'prom-client or OTel metrics exporter on the Node app' },
  { title: 'Labels carefully', text: 'low-cardinality labels (route template, status) — never raw user ids' },
  { title: 'Alert on symptoms', text: 'error rate ↑ or p95 ↑ — not “CPU might be high someday”' },
  { title: 'Grafana', text: 'dashboards that turn PromQL into panels on-call humans can read' },
  { title: 'SLOs later', text: 'once RED is stable, define error budgets — Year-1 start with clear alerts' },
];

const CORE = [
  {
    icon: '📊', title: 'RED For APIs', titleClass: 'card-title-cyan', subtitle: 'Starter Set',
    description: 'Track requests/sec, 5xx rate, and latency percentiles per route template.',
    code: 'rate     = requests / second\nerrors   = 5xx / requests\nduration = p95 latency',
  },
  {
    icon: '📈', title: 'Expose Metrics', titleClass: 'card-title-purple', subtitle: '/metrics',
    description: 'Install prom-client (or OTel). Scrape with Prometheus on a private port/path.',
    code: 'import client from "prom-client";\nclient.collectDefaultMetrics();\napp.get("/metrics", async (_req, res) => {\n  res.set("Content-Type", client.register.contentType);\n  res.end(await client.register.metrics());\n});',
  },
  {
    icon: '🚨', title: 'Simple Alert', titleClass: 'card-title-amber', subtitle: 'Pager Later',
    description: 'Page when error rate stays high for a few minutes — not on a single blip.',
    code: '// if error_rate > 2% for 5m → notify\n'// include runbook link',
  },
];

const PRACTICE = [
  {
    icon: '🏷️', title: 'Cardinality', titleClass: 'card-title-cyan', subtitle: 'Don’t Explode',
    description: 'Label by http_route=/tasks/:id, not full URLs with ids. High cardinality kills Prometheus.',
    code: '// good: route="/tasks/:id"\n'// bad:  path="/tasks/cuid_abc…"',
  },
  {
    icon: '📉', title: 'Histograms', titleClass: 'card-title-purple', subtitle: 'Latency',
    description: 'Use histograms (or summaries) for duration so you can chart p95.',
    code: 'http_request_duration_seconds_bucket{le="0.1"}',
  },
  {
    icon: '🖼️', title: 'One Dashboard', titleClass: 'card-title-amber', subtitle: 'Grafana',
    description: 'A single API overview board: QPS, errors, p95, and saturation (CPU/mem).',
    code: '// 4 panels · same time range\n'// link from alert → dashboard',
  },
  {
    icon: '🔜', title: 'Next: Kubernetes', titleClass: 'card-title-lime', subtitle: 'Day 168 Preview',
    description: 'Tomorrow: K8s mental model — Pods, Deployments, and Services.',
    link: { href: '/day-168', label: 'Go to Day 168 →' },
  },
];

const RESOURCES = [
  {
    icon: '🔥', title: 'Prometheus', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Overview of the pull-based metrics system.',
    link: { href: PROM, label: 'Read Prometheus overview →', external: true },
  },
  {
    icon: '📊', title: 'RED Method', titleClass: 'card-title-purple', subtitle: 'Article',
    description: 'Rate, Errors, Duration for services.',
    link: { href: RED, label: 'Read RED method →', external: true },
  },
  {
    icon: '🖼️', title: 'Grafana', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Build dashboards on top of Prometheus.',
    link: { href: GRAFANA, label: 'Read Grafana docs →', external: true },
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

export default function Day167() {
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
          <Link to="/day-166" className="day001-nav-btn day001-nav-prev">← Day 166</Link>
          <p className="day001-datetime">Ops Day 167 · 20 Nov 2027</p>
          <Link to="/day-168" className="day001-nav-btn day001-nav-next">Day 168 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Metrics</span><span>Year 1</span><span>Prometheus</span><span>Alerts</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 167 <span aria-hidden="true">📊</span></h1>
              <p className="day001-day-theme">METRICS &amp; ALERTS (RED)</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">OPS · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '47%' }} /></div>

        <p className="day001-summary">
          Day 167 measures the API. Expose <strong>/metrics</strong>, track{' '}
          <strong>RED</strong> (rate, errors, duration), keep labels{' '}
          <strong>low-cardinality</strong>, and alert on symptoms that matter.
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

        <CardSection icon="📊" title="1 · RED & PROMETHEUS" cards={CORE} columns={3} />
        <CardSection icon="🏷️" title="2 · LABELS & DASHBOARDS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Prometheus</span><span>#Metrics</span><span>#SRE</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
