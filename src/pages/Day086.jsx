import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://kubernetes.io/docs/concepts/overview/';
const PLAY_URL = 'https://labs.play-with-k8s.com/';

const LEARNT_TODAY = [
  {
    title: 'Why Kubernetes',
    text: 'orchestrate containers across many machines at scale',
  },
  {
    title: 'Cluster',
    text: 'a control plane plus worker nodes',
  },
  {
    title: 'Pod',
    text: 'the smallest unit — one or more containers',
  },
  {
    title: 'Deployment',
    text: 'declares desired replicas + rolling updates',
  },
  {
    title: 'ReplicaSet',
    text: 'keeps N identical pods running',
  },
  {
    title: 'Service',
    text: 'a stable endpoint in front of pods',
  },
  {
    title: 'Self-healing',
    text: 'restarts or reschedules failed pods',
  },
  {
    title: 'kubectl',
    text: 'the command-line tool to drive the cluster',
  },
  {
    title: 'YAML manifests',
    text: 'declare desired state, apply it',
  },
  {
    title: 'Namespaces',
    text: 'logical isolation within a cluster',
  },
];

const CLUSTER = [
  {
    icon: '☸️',
    title: 'Why Kubernetes',
    titleClass: 'card-title-cyan',
    subtitle: 'orchestration',
    description: 'Run, scale, and heal containers across a fleet automatically.',
    code: '// Compose is one host;\n// K8s schedules containers across many nodes',
  },
  {
    icon: '🏗️',
    title: 'Cluster & Nodes',
    titleClass: 'card-title-green',
    subtitle: 'the machines',
    description: 'A control plane decides; worker nodes run the pods.',
    code: 'control plane: API server, scheduler, etcd\nnodes: kubelet + your pods',
  },
  {
    icon: '📦',
    title: 'Pods',
    titleClass: 'card-title-amber',
    subtitle: 'smallest unit',
    description: 'A pod wraps one (or a few) containers sharing a network.',
    code: 'apiVersion: v1\nkind: Pod\nspec: { containers: [{ image: myapp:1 }] }',
  },
  {
    icon: '🔁',
    title: 'Deployments',
    titleClass: 'card-title-pink',
    subtitle: 'desired state',
    description: 'Declare replicas; K8s rolls out updates safely.',
    code: 'kind: Deployment\nspec: { replicas: 3, template: {...} }',
  },
];

const OPS = [
  {
    icon: '🌐',
    title: 'Services',
    titleClass: 'card-title-cyan',
    subtitle: 'stable networking',
    description: 'A Service gives pods a fixed name and load-balances them.',
    code: 'kind: Service\ntype: ClusterIP | NodePort | LoadBalancer',
  },
  {
    icon: '❤️',
    title: 'Self-Healing & Scaling',
    titleClass: 'card-title-green',
    subtitle: 'automatic',
    description: 'Dead pods restart; scale replicas up or down on demand.',
    code: 'kubectl scale deploy/app --replicas=5\n// HPA autoscales on CPU/metrics',
  },
  {
    icon: '⌨️',
    title: 'kubectl & Manifests',
    titleClass: 'card-title-amber',
    subtitle: 'drive it',
    description: 'Apply YAML; inspect and debug with kubectl.',
    code: 'kubectl apply -f deploy.yaml\nkubectl get pods · kubectl logs <pod>',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'Kubernetes Docs',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'The Kubernetes concepts overview — pods, deployments, services.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🧪',
    title: 'Play with Kubernetes',
    titleClass: 'card-title-purple',
    subtitle: 'Try it live',
    description: 'A free in-browser cluster to run kubectl hands-on.',
    link: { href: PLAY_URL, label: 'Open the playground →', external: true },
  },
  {
    icon: '▶️',
    title: 'Kubernetes Crash Course',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Kubernetes Crash Course for Absolute Beginners by TechWorld with Nana — Day 86.',
    link: {
      href: 'https://www.youtube.com/watch?v=s_o8dwzRlu4',
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

export default function Day086() {
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
          <Link to="/day-085" className="day001-nav-btn day001-nav-home">
            ← Day 85
          </Link>
          <p className="day001-datetime">Thunder Day 86 · 27 Mar 2027</p>
          <Link to="/day-087" className="day001-nav-btn day001-nav-next">
            Day 87 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>DevOps</span>
              <span>Kubernetes</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 86 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">KUBERNETES INTRODUCTION</p>
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
          <div className="day001-progress-bar" style={{ width: '86%' }} />
        </div>

        <p className="day001-summary">
          Day eighty-six — beyond one host, <strong>Kubernetes</strong> orchestrates containers
          across a <strong>cluster</strong> (control plane + worker nodes). The smallest unit is a{' '}
          <strong>Pod</strong>; a <strong>Deployment</strong> declares replicas and rolling updates,
          a <strong>ReplicaSet</strong> keeps them running, and a <strong>Service</strong> gives a
          stable endpoint. K8s is <strong>self-healing</strong> and scalable, all driven declaratively
          via <strong>YAML</strong> and <code>kubectl</code>. Reference:{' '}
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Kubernetes docs
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

        <CardSection icon="☸️" title="THE CLUSTER" cards={CLUSTER} columns={4} />
        <CardSection icon="🌐" title="NETWORKING & OPS" cards={OPS} columns={3} />
        <CardSection icon="📚" title="KUBERNETES RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#DevOps</span>
          <span>#Kubernetes</span>
          <span>#Containers</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
