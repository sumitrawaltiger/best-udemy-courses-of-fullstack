import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const OTEL = 'https://opentelemetry.io/docs/languages/js/';
const TRACES = 'https://opentelemetry.io/docs/concepts/signals/traces/';
const SEMCONV = 'https://opentelemetry.io/docs/specs/semconv/';

const LEARNT_TODAY = [
  { title: 'Three pillars', text: 'logs, metrics, and traces — together they explain what broke and why' },
  { title: 'OpenTelemetry', text: 'vendor-neutral APIs to emit traces/metrics/logs from Node apps' },
  { title: 'Trace & span', text: 'a request is a trace; each hop (HTTP, DB) is a span with timing' },
  { title: 'Context propagation', text: 'trace ids travel in headers so gateway → API → DB stay linked' },
  { title: 'Auto-instrumentation', text: 'hook Express/Nest/HTTP/Prisma-ish clients without rewriting every call' },
  { title: 'Exporter', text: 'send spans to Jaeger, Tempo, Honeycomb, Datadog, etc.' },
  { title: 'Start small', text: 'trace inbound HTTP + DB first — high value, low noise' },
  { title: 'Days 166–170', text: 'OTel → metrics/alerts → K8s basics → deploy API on K8s → ops milestone' },
  { title: 'Pairs with Day 144', text: 'structured logs stay; traces add the across-service timeline' },
];

const CORE = [
  {
    icon: '🔭', title: 'Trace A Request', titleClass: 'card-title-cyan', subtitle: 'Spans',
    description: 'One incoming HTTP request becomes a root span; child spans cover DB and outbound HTTP.',
    code: 'trace: abc123\n  span HTTP GET /tasks   40ms\n    span prisma.findMany  25ms',
  },
  {
    icon: '🧰', title: 'SDK Sketch', titleClass: 'card-title-purple', subtitle: 'Node',
    description: 'Register instrumentation before loading the app, then start the SDK with an exporter.',
    code: '// instrumentation.ts — load first\nNodeSDK({\n  traceExporter: new OTLPTraceExporter(),\n  instrumentations: [getNodeAutoInstrumentations()],\n}).start();',
  },
  {
    icon: '🔗', title: 'Propagate Context', titleClass: 'card-title-amber', subtitle: 'Headers',
    description: 'W3C traceparent (or B3) carries the trace across services and the gateway.',
    code: '// incoming: traceparent header\n'// outgoing fetch/axios inherits context',
  },
];

const PRACTICE = [
  {
    icon: '🎯', title: 'What To Trace', titleClass: 'card-title-cyan', subtitle: 'Signal Not Noise',
    description: 'HTTP routes, DB queries, queue jobs. Skip every loop iteration.',
    code: '// yes: handlers, DB, external APIs\n'// no: per-item map in a hot loop',
  },
  {
    icon: '🏷️', title: 'Useful Attributes', titleClass: 'card-title-purple', subtitle: 'SemConv',
    description: 'http.route, http.status_code, db.system — standard names help dashboards.',
    code: 'span.setAttribute("http.route", "/tasks/:id");',
  },
  {
    icon: '🪵', title: 'Logs + Trace Id', titleClass: 'card-title-amber', subtitle: 'Correlate',
    description: 'Put trace_id on every log line so you jump from a log to the full trace.',
    code: 'logger.info({ trace_id }, "task created");',
  },
  {
    icon: '🔜', title: 'Next: Metrics', titleClass: 'card-title-lime', subtitle: 'Day 167 Preview',
    description: 'Tomorrow: RED metrics, Prometheus-style counters/histograms, and simple alerts.',
    link: { href: '/day-167', label: 'Go to Day 167 →' },
  },
];

const RESOURCES = [
  {
    icon: '🔭', title: 'OTel JS', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Instrumentation and exporters for Node.',
    link: { href: OTEL, label: 'Read OTel JS docs →', external: true },
  },
  {
    icon: '📈', title: 'Traces Concept', titleClass: 'card-title-purple', subtitle: 'OTel',
    description: 'What traces and spans are.',
    link: { href: TRACES, label: 'Read traces concept →', external: true },
  },
  {
    icon: '🏷️', title: 'Semantic Conventions', titleClass: 'card-title-amber', subtitle: 'Spec',
    description: 'Standard attribute names for HTTP, DB, and more.',
    link: { href: SEMCONV, label: 'Read semconv →', external: true },
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

export default function Day166() {
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
          <Link to="/day-165" className="day001-nav-btn day001-nav-prev">← Day 165</Link>
          <p className="day001-datetime">Ops Day 166</p>
          <Link to="/day-167" className="day001-nav-btn day001-nav-next">Day 167 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Observability</span><span>Year 1</span><span>OpenTelemetry</span><span>Traces</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 166 <span aria-hidden="true">🔭</span></h1>
              <p className="day001-day-theme">OPENTELEMETRY TRACES</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '46%' }} /></div>

        <p className="day001-summary">
          Day 166 adds traces. <strong>OpenTelemetry</strong> turns each request into a{' '}
          <strong>trace</strong> of timed <strong>spans</strong>, with ids that also land in your logs.
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

        <CardSection icon="🔭" title="1 · TRACES" cards={CORE} columns={3} />
        <CardSection icon="🎯" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#OpenTelemetry</span><span>#Observability</span><span>#Tracing</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
