import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://prometheus.io/docs/introduction/overview/';
const GRAFANA_URL = 'https://grafana.com/docs/grafana/latest/';

const LEARNT_TODAY = [
  {
    title: 'Observability',
    text: 'the three pillars — metrics, logs, and traces',
  },
  {
    title: 'Prometheus',
    text: 'scrapes and stores time-series metrics',
  },
  {
    title: 'PromQL',
    text: 'the query language for metrics',
  },
  {
    title: 'Exporters',
    text: 'expose metrics (node_exporter, app /metrics)',
  },
  {
    title: 'Grafana',
    text: 'dashboards and visualization',
  },
  {
    title: 'Alerting',
    text: 'Alertmanager fires on rule breaches',
  },
  {
    title: 'Logs',
    text: 'aggregate with ELK or Loki',
  },
  {
    title: 'Traces',
    text: 'follow a request across services (Jaeger)',
  },
  {
    title: 'SLIs / SLOs',
    text: 'measure and target reliability',
  },
  {
    title: 'RED / USE',
    text: 'methods to pick what to monitor',
  },
];

const METRICS = [
  {
    icon: '🔭',
    title: 'Observability',
    titleClass: 'card-title-cyan',
    subtitle: 'three pillars',
    description: 'Metrics (numbers), logs (events), traces (request paths).',
    code: 'metrics: rate, latency, errors\nlogs: what happened · traces: where the time went',
  },
  {
    icon: '📈',
    title: 'Prometheus',
    titleClass: 'card-title-green',
    subtitle: 'pull-based',
    description: 'Scrapes targets on an interval and stores time series.',
    code: 'scrape_configs:\n  - job_name: node\n    static_configs: [{ targets: ["host:9100"] }]',
  },
  {
    icon: '🔎',
    title: 'PromQL',
    titleClass: 'card-title-amber',
    subtitle: 'query it',
    description: 'Aggregate and compute over the collected metrics.',
    code: 'rate(http_requests_total[5m])\n100 - avg(rate(node_cpu_seconds{mode="idle"}[5m]))*100',
  },
  {
    icon: '🔌',
    title: 'Exporters',
    titleClass: 'card-title-pink',
    subtitle: 'produce metrics',
    description: 'Exporters and app endpoints expose /metrics to scrape.',
    code: 'node_exporter → host metrics\napp: GET /metrics (client library)',
  },
];

const VISUALIZE = [
  {
    icon: '📊',
    title: 'Grafana',
    titleClass: 'card-title-cyan',
    subtitle: 'dashboards',
    description: 'Add Prometheus as a data source and build panels.',
    code: '// panels on PromQL queries\n// one dashboard per service',
  },
  {
    icon: '🚨',
    title: 'Alerting',
    titleClass: 'card-title-green',
    subtitle: 'get paged',
    description: 'Define rules; Alertmanager routes notifications.',
    code: 'alert: HighErrorRate\nexpr: error_rate > 0.05  for: 5m',
  },
  {
    icon: '📜',
    title: 'Logs & Traces',
    titleClass: 'card-title-amber',
    subtitle: 'complete it',
    description: 'Aggregate logs (Loki/ELK); trace requests (Jaeger).',
    code: 'Loki + Grafana for logs\nOpenTelemetry → Jaeger for traces',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'Prometheus Docs',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'Prometheus overview — scraping, storage, and PromQL.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '📘',
    title: 'Grafana Docs',
    titleClass: 'card-title-purple',
    subtitle: 'Dashboards',
    description: 'Build dashboards, data sources, and alerts in Grafana.',
    link: { href: GRAFANA_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Prometheus + Grafana',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Server Monitoring with Prometheus and Grafana by Christian Lempa — Day 87.',
    link: {
      href: 'https://www.youtube.com/watch?v=9TJx7QTrTyo',
      label: 'Watch on YouTube →',
      external: true,
    },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">
        {card.icon}
      </span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a
            href={card.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="day001-card-link"
          >
            {card.link.label}
          </a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">
            {card.link.label}
          </Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title">
        <span aria-hidden="true">{icon}</span> {title}
      </h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (
          <TopicCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

export default function Day087() {
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
      const scale = Math.min(
        (window.innerHeight - pad) / wrap.scrollHeight,
        (window.innerWidth - pad) / wrap.scrollWidth,
      );

      wrap.style.transform = `scale(${scale})`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
    };

    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);

    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) {
      avatar.addEventListener('load', fitToScreen);
    }

    return () => {
      window.removeEventListener('resize', fitToScreen);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/day-086" className="day001-nav-btn day001-nav-home">
            ← Day 86
          </Link>
          <p className="day001-datetime">Thunder Day 87 · 29 Sep 2026</p>
          <Link to="/day-088" className="day001-nav-btn day001-nav-next">
            Day 88 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>DevOps</span>
              <span>Observability</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 87 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">MONITORING & LOGGING</p>
            </div>
          </div>
          <div className="day001-profile">
            <img
              src="/sumit-profile.png"
              alt="Sumit Rawal"
              className="day001-avatar"
              width={48}
              height={48}
            />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">DEVOPS</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '87%' }} />
        </div>

        <p className="day001-summary">
          Day eighty-seven — you can’t operate what you can’t see. <strong>Observability</strong>{' '}
          has three pillars — <strong>metrics</strong>, <strong>logs</strong>, <strong>traces</strong>.{' '}
          <strong>Prometheus</strong> scrapes metrics from <strong>exporters</strong> and you query
          them with <strong>PromQL</strong>; <strong>Grafana</strong> visualizes them and{' '}
          <strong>Alertmanager</strong> pages you on breaches. Round it out with{' '}
          <strong>log</strong> aggregation (Loki/ELK) and distributed <strong>tracing</strong>,
          tracked against <strong>SLOs</strong>. Reference:{' '}
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Prometheus docs
          </a>
          .
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title">
            <span className="day001-learnt-line" aria-hidden="true" />
            WHAT I LEARNED TODAY
          </h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">
                  ✓
                </span>
                <span>
                  <strong>{item.title}</strong> — {item.text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="📈" title="METRICS" cards={METRICS} columns={4} />
        <CardSection icon="📊" title="VISUALIZE & ALERT" cards={VISUALIZE} columns={3} />
        <CardSection icon="📚" title="MONITORING RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#DevOps</span>
          <span>#Monitoring</span>
          <span>#Prometheus</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
