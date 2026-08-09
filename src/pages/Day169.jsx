import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PROBES = 'https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#container-probes';
const INGRESS = 'https://kubernetes.io/docs/concepts/services-networking/ingress/';
const SECRETS = 'https://kubernetes.io/docs/concepts/configuration/secret/';

const LEARNT_TODAY = [
  { title: 'Ship the image', text: 'Deployment pulls ghcr.io/org/api:sha — same digest CI built' },
  { title: 'Env & Secrets', text: 'ConfigMap for non-secret config; Secret for JWT_SECRET and DB URLs' },
  { title: 'Probes', text: 'liveness restarts stuck processes; readiness removes bad Pods from the Service' },
  { title: 'Point at /health', text: 'reuse the Terminus/Express health endpoint you already built' },
  { title: 'Ingress', text: 'HTTP router into the cluster — TLS and host-based routing' },
  { title: 'Resources', text: 'requests/limits for CPU/memory so nodes can schedule fairly' },
  { title: 'Rollout', text: 'kubectl set image or apply new tag; watch rollout status' },
  { title: 'Rollback', text: 'kubectl rollout undo deployment/api when a release is bad' },
  { title: 'Migrate job', text: 'Job or init container runs prisma migrate deploy before new Pods take traffic' },
];

const CORE = [
  {
    icon: '🚀', title: 'Deployment + Service', titleClass: 'card-title-cyan', subtitle: 'API Manifests',
    description: 'Three replicas, label selector, Service targeting container port 3000.',
    code: '# Deployment replicas: 3, image: …:sha\n# Service selector app=api → port 80→3000',
  },
  {
    icon: '❤️', title: 'Probes', titleClass: 'card-title-purple', subtitle: 'Health',
    description: 'readinessProbe and livenessProbe hit GET /health so traffic only hits ready Pods.',
    code: 'readinessProbe:\n  httpGet: { path: /health, port: 3000 }\n  initialDelaySeconds: 5\nlivenessProbe:\n  httpGet: { path: /health, port: 3000 }\n  periodSeconds: 10',
  },
  {
    icon: '🌐', title: 'Ingress', titleClass: 'card-title-amber', subtitle: 'Public HTTP',
    description: 'Route api.example.com to the Service. Terminate TLS at the Ingress controller.',
    code: 'rules:\n  - host: api.example.com\n    http:\n      paths:\n        - path: /\n          backend:\n            service: { name: api, port: 80 }',
  },
];

const PRACTICE = [
  {
    icon: '🔐', title: 'Secret Refs', titleClass: 'card-title-cyan', subtitle: 'Env From',
    description: 'Mount secrets as env vars. Never put production JWT in a ConfigMap or git.',
    code: 'envFrom:\n  - secretRef: { name: api-secrets }',
  },
  {
    icon: '📦', title: 'Resources', titleClass: 'card-title-purple', subtitle: 'requests/limits',
    description: 'Set modest requests so the scheduler can place Pods; limits cap runaway CPU.',
    code: 'resources:\n  requests: { cpu: "100m", memory: "256Mi" }\n  limits:   { cpu: "500m", memory: "512Mi" }',
  },
  {
    icon: '↩️', title: 'Rollout Undo', titleClass: 'card-title-amber', subtitle: 'Safety',
    description: 'If error rate spikes after a deploy, undo to the previous ReplicaSet.',
    code: 'kubectl rollout status deploy/api\nkubectl rollout undo deploy/api',
  },
  {
    icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-lime', subtitle: 'Day 170 Preview',
    description: 'Tomorrow: wrap the ops arc — observability + containers + K8s checklist.',
    link: { href: '/day-170', label: 'Go to Day 170 →' },
  },
];

const RESOURCES = [
  {
    icon: '❤️', title: 'Probes', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Liveness, readiness, and startup probes.',
    link: { href: PROBES, label: 'Read probe docs →', external: true },
  },
  {
    icon: '🌐', title: 'Ingress', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'HTTP routing into Services.',
    link: { href: INGRESS, label: 'Read Ingress docs →', external: true },
  },
  {
    icon: '🔐', title: 'Secrets', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Store and mount sensitive config in-cluster.',
    link: { href: SECRETS, label: 'Read Secrets docs →', external: true },
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

export default function Day169() {
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
          <Link to="/day-168" className="day001-nav-btn day001-nav-prev">← Day 168</Link>
          <p className="day001-datetime">Ops Day 169 · 22 Nov 2027</p>
          <Link to="/day-170" className="day001-nav-btn day001-nav-next">Day 170 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Kubernetes</span><span>Year 1</span><span>Ingress</span><span>Probes</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 169 <span aria-hidden="true">🚀</span></h1>
              <p className="day001-day-theme">DEPLOY THE API ON K8S</p>
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
          Day 169 runs the API on the cluster. <strong>Deployment + Service</strong>,{' '}
          <strong>probes</strong> on /health, <strong>Secrets</strong> for env,{' '}
          <strong>Ingress</strong> for HTTPS, and <strong>rollout undo</strong> when needed.
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

        <CardSection icon="🚀" title="1 · MANIFESTS" cards={CORE} columns={3} />
        <CardSection icon="🔐" title="2 · SECRETS & ROLLOUT" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Kubernetes</span><span>#Ingress</span><span>#Deploy</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
