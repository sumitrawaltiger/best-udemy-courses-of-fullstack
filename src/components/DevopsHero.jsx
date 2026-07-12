import { DEVOPS_META } from '../data/devopsSyllabus';
import { devopsChapters } from '../data/devopsChapters';

export default function DevopsHero({ children, actions }) {
  return (
    <div className="devops-hero-block">
      <span className="devops-level-badge">
        <span className="devops-level-icon" aria-hidden="true">⚙️</span>
        After AWS · 13 Jan – 21 Apr 2028
      </span>

      <h1 className="devops-title">
        <span className="devops-title-line">Thunder++</span>
        <span className="devops-title-line">100 Days of DevOps</span>
      </h1>

      <p className="devops-subtitle">{DEVOPS_META.subtitle}</p>

      <div className="devops-meta-row">
        <span className="devops-meta-tag">
          <span aria-hidden="true">⚙️</span>
          {DEVOPS_META.totalDays} Days
        </span>
        <span className="devops-meta-tag">
          <span aria-hidden="true">🐳</span>
          Docker & K8s
        </span>
        <span className="devops-meta-tag">
          <span aria-hidden="true">🔄</span>
          CI/CD & IaC
        </span>
        <span className="devops-meta-tag">
          <span aria-hidden="true">🧑‍🏫</span>
          CloudFolks Hub
        </span>
      </div>

      {children}
      {actions}
    </div>
  );
}

export function DevopsHeroStats() {
  return (
    <p className="devops-hero-desc">
      {devopsChapters.length} days from{' '}
      <a href={DEVOPS_META.kodekloudUrl} target="_blank" rel="noopener noreferrer">
        KodeKloud 100 Days of DevOps
      </a>{' '}
      and{' '}
      <a href={DEVOPS_META.cloudfolksUrl} target="_blank" rel="noopener noreferrer">
        CloudFolks Hub
      </a>{' '}
      — Linux, Git, Jenkins, Docker, Kubernetes, Ansible, Terraform, Prometheus, and real CI/CD pipelines.
    </p>
  );
}
