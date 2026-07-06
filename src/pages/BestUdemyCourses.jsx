import { Link } from 'react-router-dom';
import { BEST_COURSES, COURSE_CATEGORIES } from '../data/bestUdemyCourses';
import './BestUdemyCourses.css';

function CourseCard({ course }) {
  return (
    <article className="bc-card">
      <div className="bc-card-head">
        <span className="bc-card-icon" aria-hidden="true">
          {course.icon}
        </span>
        <div>
          <h3 className="bc-card-skill">{course.skill}</h3>
          <p className="bc-card-provider">{course.provider}</p>
        </div>
      </div>

      <p className="bc-card-title">{course.title}</p>

      {course.instructor && (
        <p className="bc-card-meta">
          <span aria-hidden="true">👤</span> {course.instructor}
        </p>
      )}
      {course.note && <p className="bc-card-note">{course.note}</p>}
      {course.coupon && (
        <p className="bc-card-coupon">
          <span aria-hidden="true">🏷️</span> Coupon: <code>{course.coupon}</code>
        </p>
      )}

      <div className="bc-card-links">
        {course.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bc-card-link"
          >
            {link.label} <span aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </article>
  );
}

export default function BestUdemyCourses() {
  return (
    <div className="bc-page">
      <header className="bc-topbar">
        <Link to="/" className="bc-nav-btn">
          ← Home
        </Link>
        <span className="bc-topbar-label">Best Courses</span>
        <Link to="/interview-questions" className="bc-nav-btn bc-nav-btn--accent">
          Interview Q&amp;A →
        </Link>
      </header>

      <section className="bc-hero">
        <div className="bc-hero-tags">
          <span>Udemy</span>
          <span>Curated</span>
          <span>By Skill</span>
        </div>
        <h1 className="bc-hero-title">
          Best Courses by Skill <span aria-hidden="true">🎓</span>
        </h1>
        <p className="bc-hero-sub">
          Hand-picked courses for the full-stack journey — {BEST_COURSES.length} recommendations across
          frontend, Java &amp; backend, Python, and DevOps. Coupon codes are pre-applied in the links where
          available.
        </p>
      </section>

      <div className="bc-content">
        {COURSE_CATEGORIES.map((cat) => {
          const courses = BEST_COURSES.filter((c) => c.category === cat.id);
          if (courses.length === 0) return null;
          return (
            <section key={cat.id} className="bc-section">
              <h2 className="bc-section-title">
                <span aria-hidden="true">{cat.icon}</span> {cat.label}
                <span className="bc-section-count">{courses.length}</span>
              </h2>
              <div className="bc-grid">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <footer className="bc-footer">
        <p>
          Prices and coupon availability change over time — check the Udemy page for current details. Pair
          these with the{' '}
          <Link to="/" className="bc-footer-link">
            100 Days of Code
          </Link>{' '}
          lessons and{' '}
          <Link to="/interview-questions" className="bc-footer-link">
            interview questions
          </Link>
          .
        </p>
      </footer>
    </div>
  );
}
