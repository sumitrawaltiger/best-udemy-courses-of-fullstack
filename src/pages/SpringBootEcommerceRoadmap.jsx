import { Link } from 'react-router-dom';
import {
  ROADMAP_INTRO,
  EMBARKX_COURSES,
  ROADMAP_PHASES,
  ROADMAP_TOTAL_DAYS,
  ROADMAP_TOTAL_PHASES,
} from '../data/springBootEcommerceRoadmap';
import './SpringBootEcommerceRoadmap.css';

function PhaseCard({ phase }) {
  return (
    <article className="sbr-phase" data-track={phase.track}>
      <div className="sbr-phase-head">
        <span className="sbr-phase-num">Phase {phase.num}</span>
        <h3 className="sbr-phase-title">{phase.title}</h3>
        <span className="sbr-phase-days">{phase.days}</span>
      </div>

      {phase.outcome && (
        <div className="sbr-outcome">
          <span className="sbr-outcome-icon" aria-hidden="true">
            🎯
          </span>
          <span>
            Unlocks: <strong>{phase.outcome}</strong>
            {phase.outcomeNote && <span className="sbr-outcome-note"> — {phase.outcomeNote}</span>}
          </span>
        </div>
      )}

      {phase.skills && (
        <div className="sbr-skills">
          {phase.skills.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      )}

      <div className="sbr-groups">
        {phase.groups.map((group) => (
          <div className="sbr-group" key={group.days}>
            <div className="sbr-group-days">{group.days}</div>
            <div>
              <p className="sbr-group-title">{group.title}</p>
              <ul className="sbr-group-sections">
                {group.sections.map((section) => (
                  <li key={section}>{section}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function SpringBootEcommerceRoadmap() {
  return (
    <div className="sbr-page">
      <header className="sbr-topbar">
        <Link to="/" className="sbr-nav-btn">
          ← Home
        </Link>
        <span className="sbr-topbar-label">Spring Boot Roadmap</span>
        <Link to="/java" className="sbr-nav-btn sbr-nav-btn--accent">
          Java & Spring Track →
        </Link>
      </header>

      <section className="sbr-hero">
        <div className="sbr-hero-tags">
          <span>Spring Boot</span>
          <span>React</span>
          <span>Full-Stack</span>
          <span>EmbarkX</span>
        </div>
        <h1 className="sbr-hero-title">
          Spring Boot Full-Stack <span className="sbr-accent">E-Commerce</span> Roadmap
        </h1>
        <p className="sbr-hero-sub">{ROADMAP_INTRO.tagline}</p>

        <div className="sbr-stats">
          <div>
            <div className="sbr-stat-num">{ROADMAP_TOTAL_DAYS}</div>
            <div className="sbr-stat-label">Days</div>
          </div>
          <div>
            <div className="sbr-stat-num">{ROADMAP_TOTAL_PHASES}</div>
            <div className="sbr-stat-label">Phases</div>
          </div>
          <div>
            <div className="sbr-stat-num">{EMBARKX_COURSES.length}</div>
            <div className="sbr-stat-label">Courses</div>
          </div>
          <div>
            <div className="sbr-stat-num">7</div>
            <div className="sbr-stat-label">Career milestones</div>
          </div>
        </div>

        <p className="sbr-hero-sub">{ROADMAP_INTRO.note}</p>

        <div className="sbr-hero-actions">
          <a
            href={ROADMAP_INTRO.roadmapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sbr-nav-btn sbr-nav-btn--accent"
          >
            EmbarkX Full Roadmap ↗
          </a>
          <a href="#sbr-plan" className="sbr-nav-btn">
            Jump to the 72-Day Plan ↓
          </a>
        </div>

        <ul className="sbr-benefits">
          {ROADMAP_INTRO.benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      <div className="sbr-inner">
        <section className="sbr-section">
          <h2 className="sbr-section-title">The Courses Behind the Roadmap</h2>
          <p className="sbr-section-desc">
            Five EmbarkX (Faisal Memon) courses power this journey. Click any course for a Udemy
            coupon — each comes with 6 months of IntelliJ IDEA Ultimate.
          </p>
          <div className="sbr-courses">
            {EMBARKX_COURSES.map((course) => (
              <article className="sbr-course" key={course.num}>
                {course.badge && <span className="sbr-course-badge">{course.badge}</span>}
                <div className="sbr-course-top">
                  <span className="sbr-course-num">{course.num}</span>
                  <span className="sbr-course-duration">{course.duration}</span>
                </div>
                <h3 className="sbr-course-title">{course.title}</h3>
                <p className="sbr-course-focus">{course.focus}</p>
                <p className="sbr-course-note">{course.note}</p>
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sbr-course-btn"
                >
                  Get Udemy Coupon →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="sbr-section" id="sbr-plan">
          <h2 className="sbr-section-title">The 72-Day Plan</h2>
          <p className="sbr-section-desc">
            Ten phases from backend fundamentals to a deployed, AI-powered full-stack store — with a
            job-readiness milestone unlocked along the way.
          </p>
          <div className="sbr-phases">
            {ROADMAP_PHASES.map((phase) => (
              <PhaseCard key={phase.num} phase={phase} />
            ))}
          </div>
        </section>

        <footer className="sbr-footer">
          <p>
            Roadmap by <strong>EmbarkX</strong> (Faisal Memon). Explore the full interactive roadmap
            at{' '}
            <a href={ROADMAP_INTRO.roadmapUrl} target="_blank" rel="noopener noreferrer">
              embarkx.com/roadmap
            </a>
            , or continue with the{' '}
            <Link to="/java">Java &amp; Spring track</Link>.
          </p>
        </footer>
      </div>
    </div>
  );
}
