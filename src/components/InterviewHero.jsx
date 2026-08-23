import { INTERVIEW_META } from '../data/interviewSyllabus';
import { interviewChapters } from '../data/interviewChapters';

export default function InterviewHero({ children, actions }) {
  return (
    <div className="interview-hero-block">
      <span className="interview-level-badge">
        <span className="interview-level-icon" aria-hidden="true">🎯</span>
        2,000 days · 20 skills (Python · JS/TS · Databases · Java · DevOps · Cloud · SRE · System Design · DSA) · NexusAI throughout
      </span>

      <h1 className="interview-title">
        <span className="interview-title-line">Thunder++</span>
        <span className="interview-title-line">System Design</span>
      </h1>

      <p className="interview-subtitle">{INTERVIEW_META.subtitle}</p>

      <div className="interview-meta-row">
        <span className="interview-meta-tag">
          <span aria-hidden="true">📅</span>
          {INTERVIEW_META.calendarDays} Days
        </span>
        <span className="interview-meta-tag">
          <span aria-hidden="true">🏗️</span>
          System Design
        </span>
        <span className="interview-meta-tag">
          <span aria-hidden="true">📊</span>
          {INTERVIEW_META.totalModules} Modules
        </span>
        <span className="interview-meta-tag">
          <span aria-hidden="true">💚</span>
          GeeksForGeeks
        </span>
      </div>

      {children}
      {actions}
    </div>
  );
}

export function InterviewHeroStats() {
  return (
    <p className="interview-hero-desc">
      {interviewChapters.length} modules across{' '}
      <a href={INTERVIEW_META.chaicodeUrl} target="_blank" rel="noopener noreferrer">
        ChaiCode All-in-One Interview Preparation
      </a>{' '}
      and{' '}
      <a href={INTERVIEW_META.gfgCoursesUrl} target="_blank" rel="noopener noreferrer">
        GeeksForGeeks paid courses
      </a>{' '}
      — DSA, system design case studies, mock interviews, and full-stack interview readiness.
    </p>
  );
}
