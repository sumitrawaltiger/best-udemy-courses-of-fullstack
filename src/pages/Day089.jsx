import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ROADMAP_URL = 'https://roadmap.sh/devops';
const KODEKLOUD_URL = 'https://kodekloud.com/';

const LEARNT_TODAY = [
  {
    title: 'End-to-end pipeline',
    text: 'code → build → test → deploy, automated',
  },
  {
    title: 'Containerize',
    text: 'a Dockerfile for the app',
  },
  {
    title: 'CI',
    text: 'GitHub Actions builds and tests on push',
  },
  {
    title: 'Registry',
    text: 'push the built image to a registry',
  },
  {
    title: 'IaC',
    text: 'Terraform provisions the infrastructure',
  },
  {
    title: 'Deploy to K8s',
    text: 'apply manifests / a Helm chart',
  },
  {
    title: 'CD',
    text: 'auto-deploy on merge to main',
  },
  {
    title: 'Monitoring',
    text: 'Prometheus + Grafana + alerts',
  },
  {
    title: 'Secrets',
    text: 'a vault / secret manager, never in git',
  },
  {
    title: 'Document & demo',
    text: 'diagram and walk the whole flow',
  },
];

const PIPELINE = [
  {
    icon: '🐳',
    title: 'Containerize',
    titleClass: 'card-title-cyan',
    subtitle: 'package',
    description: 'A Dockerfile builds a reproducible image of the app.',
    code: 'FROM node:20-slim\nCOPY . . && RUN npm ci\nCMD ["node", "server.js"]',
  },
  {
    icon: '⚙️',
    title: 'CI Build & Test',
    titleClass: 'card-title-green',
    subtitle: 'GitHub Actions',
    description: 'On push: install, test, and build the image.',
    code: 'on: [push]\njobs: { build: { steps: [test, docker build] } }',
  },
  {
    icon: '📦',
    title: 'Registry',
    titleClass: 'card-title-amber',
    subtitle: 'store the image',
    description: 'Tag with the commit SHA and push to a registry.',
    code: 'docker push registry/app:${{ github.sha }}',
  },
  {
    icon: '📜',
    title: 'IaC Provision',
    titleClass: 'card-title-pink',
    subtitle: 'Terraform',
    description: 'Provision the cluster and cloud resources as code.',
    code: 'terraform apply  # VPC · cluster · DB',
  },
];

const OPERATE = [
  {
    icon: '☸️',
    title: 'Deploy to K8s + CD',
    titleClass: 'card-title-cyan',
    subtitle: 'ship on merge',
    description: 'Apply manifests/Helm; auto-deploy on a successful build.',
    code: 'kubectl apply -f k8s/  (or helm upgrade)\ndeploy job runs on merge to main',
  },
  {
    icon: '📊',
    title: 'Monitor',
    titleClass: 'card-title-green',
    subtitle: 'observe',
    description: 'Wire up metrics, dashboards, and alerts from day one.',
    code: 'Prometheus scrapes · Grafana dashboards\nAlertmanager pages on breaches',
  },
  {
    icon: '📝',
    title: 'Document & Demo',
    titleClass: 'card-title-amber',
    subtitle: 'prove it',
    description: 'Diagram the flow and demo commit → live in one push.',
    code: 'README + architecture diagram\ndemo: git push → tests → deploy → live',
  },
];

const RESOURCES = [
  {
    icon: '🗺️',
    title: 'DevOps Roadmap',
    titleClass: 'card-title-purple',
    subtitle: 'roadmap.sh',
    description: 'The DevOps roadmap — the full toolchain checklist for the capstone.',
    link: { href: ROADMAP_URL, label: 'Open the roadmap →', external: true },
  },
  {
    icon: '🧪',
    title: 'KodeKloud',
    titleClass: 'card-title-green',
    subtitle: 'Hands-on labs',
    description: 'Practice the full CI/CD + K8s + IaC pipeline in KodeKloud labs.',
    link: { href: KODEKLOUD_URL, label: 'Open KodeKloud →', external: true },
  },
  {
    icon: '▶️',
    title: 'Complete DevOps Project',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'DevOpsified — a complete end-to-end DevOps implementation — for Day 89.',
    link: {
      href: 'https://www.youtube.com/watch?v=HGu9sgoHaJ0',
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

export default function Day089() {
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
          <Link to="/day-088" className="day001-nav-btn day001-nav-home">
            ← Day 88
          </Link>
          <p className="day001-datetime">Thunder Day 89 · 13 Oct 2026</p>
          <Link to="/day-090" className="day001-nav-btn day001-nav-next">
            Day 90 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>DevOps</span>
              <span>Capstone</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 89 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">DEVOPS CAPSTONE</p>
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
          <div className="day001-progress-bar" style={{ width: '89%' }} />
        </div>

        <p className="day001-summary">
          Day eighty-nine — tie the whole DevOps toolchain into one{' '}
          <strong>end-to-end pipeline</strong>. <strong>Containerize</strong> the app, run{' '}
          <strong>CI</strong> (build + test) in GitHub Actions, push the image to a{' '}
          <strong>registry</strong>, and provision infra with <strong>Terraform</strong>. Then{' '}
          <strong>deploy to Kubernetes</strong> automatically (<strong>CD</strong>), wire up{' '}
          <strong>monitoring</strong> and <strong>secrets</strong>, and <strong>document + demo</strong>{' '}
          the flow — one push goes from commit to live. Reference:{' '}
          <a href={ROADMAP_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            the DevOps roadmap
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

        <CardSection icon="🔧" title="BUILD THE PIPELINE" cards={PIPELINE} columns={4} />
        <CardSection icon="📡" title="OPERATE" cards={OPERATE} columns={3} />
        <CardSection icon="📚" title="DEVOPS RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#DevOps</span>
          <span>#Capstone</span>
          <span>#CICD</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
