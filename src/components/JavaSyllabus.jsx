import { useState } from 'react';
import { Link } from 'react-router-dom';
import { javaPhases, javaHighlights, JAVA_META } from '../data/javaSyllabus';

export default function JavaSyllabus() {
  const [openPhases, setOpenPhases] = useState({ 'java-core': true });

  function togglePhase(id) {
    setOpenPhases((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function expandAll() {
    const all = {};
    javaPhases.forEach((p) => {
      all[p.id] = true;
    });
    setOpenPhases(all);
  }

  function collapseAll() {
    setOpenPhases({});
  }

  return (
    <section className="syllabus-section java-syllabus-section">
      <div className="syllabus-inner">
        <div className="highlights-block">
          <h2>
            <span className="section-icon">☕</span> Java Highlights
          </h2>
          <div className="highlights-grid">
            {javaHighlights.map((item) => (
              <div key={item} className="highlight-card highlight-card-java">
                <span className="highlight-check highlight-check-java">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="syllabus-block">
          <div className="syllabus-header">
            <h2>
              <span className="section-icon">📚</span> Java & Spring Syllabus
            </h2>
            <div className="syllabus-actions">
              <button type="button" onClick={expandAll} className="syllabus-btn">
                Expand All
              </button>
              <button type="button" onClick={collapseAll} className="syllabus-btn">
                Collapse All
              </button>
            </div>
          </div>

          <p className="syllabus-source">
            {JAVA_META.courses.length} Udemy courses mapped to {JAVA_META.totalModules} modules — from{' '}
            <a href={JAVA_META.primaryUdemyUrl} target="_blank" rel="noopener noreferrer">
              Complete Java Developer
            </a>{' '}
            through Spring Cloud microservices.
          </p>

          <div className="java-udemy-courses">
            {JAVA_META.courses.map((course) => (
              <a
                key={course.url}
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="java-udemy-course-link"
              >
                🎓 {course.title}
              </a>
            ))}
          </div>

          <div className="phases-list">
            {javaPhases.map((phase) => {
              const isOpen = openPhases[phase.id];
              return (
                <div
                  key={phase.id}
                  className={`phase-card ${isOpen ? 'open' : ''} phase-card-java`}
                >
                  <button
                    type="button"
                    className="phase-header"
                    onClick={() => togglePhase(phase.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="phase-num phase-num-java">{phase.number}</div>
                    <div className="phase-info">
                      <span className="phase-title">
                        PHASE {phase.number}: {phase.title}
                      </span>
                      <span className="phase-sub">{phase.moduleCount} Modules</span>
                    </div>
                    <span className={`phase-chevron ${isOpen ? 'open' : ''}`}>⌄</span>
                  </button>

                  {isOpen && (
                    <div className="modules-list">
                      {phase.modules.map((mod) => (
                        <Link
                          key={mod.number}
                          to={mod.href || `/java/learn/${mod.slug}`}
                          className="module-row published"
                        >
                          <span className="module-num">JV {mod.number}</span>
                          <span className="module-title">{mod.title}</span>
                          <span className="module-arrow">→</span>
                        </Link>
                      ))}
                      {phase.udemyUrl && (
                        <a
                          href={phase.udemyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="module-row module-row-udemy"
                        >
                          <span className="module-num">🎓</span>
                          <span className="module-title">Open Udemy course for this phase</span>
                          <span className="module-arrow">↗</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="syllabus-footer-cta">
            <p>Start with the Complete Java Developer course on Udemy</p>
            <a
              href={JAVA_META.primaryUdemyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-java-udemy-outline"
            >
              Open on Udemy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
