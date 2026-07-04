import { MOBILE_META } from '../data/mobileSyllabus';
import { mobileChapters } from '../data/mobileChapters';

export default function MobileHero({ children, actions }) {
  return (
    <div className="mobile-hero-block">
      <span className="mobile-level-badge">
        <span className="mobile-level-icon" aria-hidden="true">⚡</span>
        After Thunder 100 Days
      </span>

      <h1 className="mobile-title">
        <span className="mobile-title-line">Thunder++</span>
        <span className="mobile-title-line">React Native</span>
      </h1>

      <p className="mobile-subtitle">{MOBILE_META.subtitle}</p>

      <div className="mobile-meta-row">
        <span className="mobile-meta-tag">
          <span aria-hidden="true">📱</span>
          {MOBILE_META.totalLessons} Lessons
        </span>
        <span className="mobile-meta-tag">
          <span aria-hidden="true">🧑‍🏫</span>
          ChaiCode Cohort
        </span>
        <span className="mobile-meta-tag">
          <span aria-hidden="true">🚀</span>
          Expo + Production
        </span>
      </div>

      {children}
      {actions}
    </div>
  );
}

export function MobileHeroStats() {
  return (
    <p className="mobile-hero-desc">
      {mobileChapters.length} lessons mapped from the{' '}
      <a href={MOBILE_META.syllabusUrl} target="_blank" rel="noopener noreferrer">
        ChaiCode Mobile Development Cohort
      </a>{' '}
      — React Native, Expo Router, APIs, notifications, auth, and real-world app projects.
    </p>
  );
}
