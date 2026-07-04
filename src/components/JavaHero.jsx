import { JAVA_META } from '../data/javaSyllabus';
import { javaChapters } from '../data/javaChapters';

export default function JavaHero({ children, actions }) {
  return (
    <div className="java-hero-block">
      <span className="java-level-badge">
        <span className="java-level-icon" aria-hidden="true">☕</span>
        After Python & Agentic AI
      </span>

      <h1 className="java-title">
        <span className="java-title-line">Thunder++</span>
        <span className="java-title-line">Java & Spring</span>
      </h1>

      <p className="java-subtitle">{JAVA_META.subtitle}</p>

      <div className="java-meta-row">
        <span className="java-meta-tag">
          <span aria-hidden="true">☕</span>
          {JAVA_META.totalModules} Modules
        </span>
        <span className="java-meta-tag">
          <span aria-hidden="true">🍃</span>
          Spring Boot & Cloud
        </span>
        <span className="java-meta-tag">
          <span aria-hidden="true">🐳</span>
          Docker & Kubernetes
        </span>
        <span className="java-meta-tag">
          <span aria-hidden="true">🎓</span>
          9 Udemy Courses
        </span>
      </div>

      {children}
      {actions}
    </div>
  );
}

export function JavaHeroStats() {
  return (
    <p className="java-hero-desc">
      {javaChapters.length} modules across{' '}
      <a href={JAVA_META.primaryUdemyUrl} target="_blank" rel="noopener noreferrer">
        Udemy Java & Spring courses
      </a>{' '}
      — core Java, JDBC, Spring Framework 6, microservices, CQRS, event sourcing, and Kubernetes deployment.
    </p>
  );
}
