import { NEXTJS_META } from '../data/nextjsSyllabus';
import { nextjsChapters } from '../data/nextjsChapters';

export default function NextjsHero({ children, actions }) {
  return (
    <div className="nextjs-hero-block">
      <span className="nextjs-level-badge">
        <span className="nextjs-level-icon" aria-hidden="true">⚡</span>
        After Thunder 100 Days
      </span>

      <h1 className="nextjs-title">
        <span className="nextjs-title-line">Thunder+</span>
        <span className="nextjs-title-line">React & Next.js</span>
      </h1>

      <p className="nextjs-subtitle">{NEXTJS_META.subtitle}</p>

      <div className="nextjs-meta-row">
        <span className="nextjs-meta-tag">
          <span aria-hidden="true">⚛️</span>
          {NEXTJS_META.totalModules} Modules
        </span>
        <span className="nextjs-meta-tag">
          <span aria-hidden="true">🧑‍🏫</span>
          {NEXTJS_META.instructors}
        </span>
        <span className="nextjs-meta-tag">
          <span aria-hidden="true">🤖</span>
          AI-Powered Projects
        </span>
        <span className="nextjs-meta-tag">
          <span aria-hidden="true">⏱</span>
          {NEXTJS_META.totalHours}
        </span>
      </div>

      {children}
      {actions}
    </div>
  );
}

export function NextjsHeroStats() {
  return (
    <p className="nextjs-hero-desc">
      {nextjsChapters.length} modules from the{' '}
      <a href={NEXTJS_META.udemyUrl} target="_blank" rel="noopener noreferrer">
        ChaiCode Udemy course
      </a>{' '}
      — React, Next.js App Router, Convex, Supabase, Drizzle, auth, payments, and AI SaaS projects.
    </p>
  );
}
