import { syllabusMeta } from '../data/syllabus';

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18l4-6 4 3 8-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v14l-7-3.5L5 19V5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ThunderHero({ children, actions, className = '' }) {
  return (
    <div className={`thunder-hero-block ${className}`.trim()}>
      <span className="thunder-level-badge">
        <span className="thunder-level-icon" aria-hidden="true">✦</span>
        Beginner to Advanced
      </span>

      <h1 className="thunder-title">
        <span className="thunder-title-line">Thunder: 100</span>
        <span className="thunder-title-line">Days of Code</span>
      </h1>

      <p className="thunder-subtitle">{syllabusMeta.subtitle}</p>

      <div className="thunder-meta-row">
        <span className="thunder-meta-tag">
          <ClockIcon />
          {syllabusMeta.totalDays} Days
        </span>
        <span className="thunder-meta-tag">
          <ChartIcon />
          {syllabusMeta.totalHours} Hours
        </span>
        <span className="thunder-meta-tag">
          <BookIcon />
          {syllabusMeta.totalModules} Modules
        </span>
      </div>

      {children}
      {actions}
    </div>
  );
}
