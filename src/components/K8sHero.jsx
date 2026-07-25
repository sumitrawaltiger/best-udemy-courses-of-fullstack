import { K8S_META } from '../data/k8sSyllabus';
import { k8sChapters } from '../data/k8sChapters';

export default function K8sHero({ children, actions }) {
  return (
    <div className="k8s-hero-block">
      <span className="k8s-level-badge">
        <span className="k8s-level-icon" aria-hidden="true">☸️</span>
        Phase 5 · Within DevOps Stack
      </span>

      <h1 className="k8s-title">
        <span className="k8s-title-line">Thunder++</span>
        <span className="k8s-title-line">Kubernetes</span>
      </h1>

      <p className="k8s-subtitle">{K8S_META.subtitle}</p>

      <div className="k8s-meta-row">
        <span className="k8s-meta-tag">
          <span aria-hidden="true">☸️</span>
          {K8S_META.totalDays} Days
        </span>
        <span className="k8s-meta-tag">
          <span aria-hidden="true">🧪</span>
          Labs & Playgrounds
        </span>
        <span className="k8s-meta-tag">
          <span aria-hidden="true">🏆</span>
          CKA Prep
        </span>
        <span className="k8s-meta-tag">
          <span aria-hidden="true">🎓</span>
          KodeKloud
        </span>
      </div>

      {children}
      {actions}
    </div>
  );
}

export function K8sHeroStats() {
  return (
    <p className="k8s-hero-desc">
      {k8sChapters.length} days on the{' '}
      <a href={K8S_META.pathUrl} target="_blank" rel="noopener noreferrer">
        KodeKloud Kubernetes Learning Path
      </a>{' '}
      — Docker, Helm, Istio, EFK, Prometheus, challenges, playgrounds, and{' '}
      <a href={K8S_META.ckaUrl} target="_blank" rel="noopener noreferrer">
        CKA certification
      </a>
      .
    </p>
  );
}
