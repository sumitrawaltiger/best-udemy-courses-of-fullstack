import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const K8S = 'https://kubernetes.io/docs/concepts/overview/';
const PODS = 'https://kubernetes.io/docs/concepts/workloads/pods/';
const DEPLOY = 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/';

const LEARNT_TODAY = [
  { title: 'What is Kubernetes', text: 'orchestrates containers — schedule, restart, scale, and network them' },
  { title: 'Cluster', text: 'control plane + worker nodes that run your workloads' },
  { title: 'Pod', text: 'smallest unit — one or more containers sharing network/storage' },
  { title: 'Deployment', text: 'declares desired replicas; rolls out new images safely' },
  { title: 'Service', text: 'stable DNS/IP in front of changing Pod IPs' },
  { title: 'Desired state', text: 'you declare YAML; controllers reconcile until reality matches' },
  { title: 'kubectl', text: 'CLI to apply manifests, get pods, and read logs' },
  { title: 'Not always required', text: 'Compose/PaaS is enough until you need multi-node orchestration' },
  { title: 'Year-1 goal', text: 'understand Pod → Deployment → Service before Ingress and Helm' },
];

const CORE = [
  {
    icon: '☸️', title: 'Mental Model', titleClass: 'card-title-cyan', subtitle: 'Declare & Reconcile',
    description: 'You say “3 replicas of api:sha”. Kubernetes creates/replaces Pods until that is true.',
    code: '// desired: 3 pods of tasks-api\n'// actual drifts → controller fixes',
  },
  {
    icon: '📦', title: 'Pod', titleClass: 'card-title-purple', subtitle: 'Ephemeral',
    description: 'Pods die and get replaced. Never rely on a single Pod IP for long.',
    code: 'apiVersion: v1\nkind: Pod\nmetadata:\n  name: api\nspec:\n  containers:\n    - name: api\n      image: ghcr.io/org/api:sha',
  },
  {
    icon: '🚀', title: 'Deployment', titleClass: 'card-title-amber', subtitle: 'Replicas + Rollout',
    description: 'Manage identical Pods. Rolling updates bring new images without full downtime.',
    code: 'kind: Deployment\nspec:\n  replicas: 3\n  selector: { matchLabels: { app: api } }\n  template:\n    metadata: { labels: { app: api } }\n    spec:\n      containers: [{ name: api, image: … }]',
  },
];

const PRACTICE = [
  {
    icon: '🌐', title: 'Service', titleClass: 'card-title-cyan', subtitle: 'Stable Name',
    description: 'ClusterIP Service gives api.default.svc.cluster.local to reach Pods by label.',
    code: 'kind: Service\nspec:\n  selector: { app: api }\n  ports: [{ port: 80, targetPort: 3000 }]',
  },
  {
    icon: '🛠️', title: 'kubectl Basics', titleClass: 'card-title-purple', subtitle: 'Day One',
    description: 'apply, get, logs, describe — enough to debug most Year-1 issues.',
    code: 'kubectl apply -f deploy.yaml\nkubectl get pods\nkubectl logs deploy/api',
  },
  {
    icon: '🧪', title: 'Local Cluster', titleClass: 'card-title-amber', subtitle: 'kind / minikube',
    description: 'Practice with kind or minikube before touching a cloud cluster.',
    code: 'kind create cluster\nkubectl cluster-info',
  },
  {
    icon: '🔜', title: 'Next: Deploy API', titleClass: 'card-title-lime', subtitle: 'Day 169 Preview',
    description: 'Tomorrow: Deployment + Service + probes + Ingress for your containerized API.',
    link: { href: '/day-169', label: 'Go to Day 169 →' },
  },
];

const RESOURCES = [
  {
    icon: '☸️', title: 'K8s Overview', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'What Kubernetes is and the object model.',
    link: { href: K8S, label: 'Read K8s overview →', external: true },
  },
  {
    icon: '📦', title: 'Pods', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Lifecycle and how containers share a Pod.',
    link: { href: PODS, label: 'Read Pods docs →', external: true },
  },
  {
    icon: '🚀', title: 'Deployments', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Replicas, rollouts, and rollbacks.',
    link: { href: DEPLOY, label: 'Read Deployments docs →', external: true },
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

export default function Day168() {
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
          <Link to="/day-167" className="day001-nav-btn day001-nav-prev">← Day 167</Link>
          <p className="day001-datetime">Ops Day 168</p>
          <Link to="/day-169" className="day001-nav-btn day001-nav-next">Day 169 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Kubernetes</span><span>Year 1</span><span>Pods</span><span>Deployments</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 168 <span aria-hidden="true">☸️</span></h1>
              <p className="day001-day-theme">KUBERNETES BASICS</p>
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
          Day 168 learns the K8s map. <strong>Pods</strong> run containers,{' '}
          <strong>Deployments</strong> keep replicas, <strong>Services</strong> give stable names — all
          as declared desired state.
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

        <CardSection icon="☸️" title="1 · CORE OBJECTS" cards={CORE} columns={3} />
        <CardSection icon="🛠️" title="2 · SERVICE & KUBECTL" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Kubernetes</span><span>#DevOps</span><span>#Cloud</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
