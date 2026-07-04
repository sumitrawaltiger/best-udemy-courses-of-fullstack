import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mobilePhases, mobileHighlights, MOBILE_META } from '../data/mobileSyllabus';

export default function MobileSyllabus() {
  const [openPhases, setOpenPhases] = useState({ 'react-refresher': true });

  function togglePhase(id) {
    setOpenPhases((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function expandAll() {
    const all = {};
    mobilePhases.forEach((p) => {
      all[p.id] = true;
    });
    setOpenPhases(all);
  }

  function collapseAll() {
    setOpenPhases({});
  }

  return (
    <section className="syllabus-section mobile-syllabus-section">
      <div className="syllabus-inner">
        <div className="highlights-block">
          <h2>
            <span className="section-icon">📱</span> Cohort Highlights
          </h2>
          <div className="highlights-grid">
            {mobileHighlights.map((item) => (
              <div key={item} className="highlight-card highlight-card-mobile">
                <span className="highlight-check highlight-check-mobile">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="syllabus-block">
          <div className="syllabus-header">
            <h2>
              <span className="section-icon">📚</span> Mobile Syllabus
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
            Official syllabus from{' '}
            <a href={MOBILE_META.syllabusUrl} target="_blank" rel="noopener noreferrer">
              ChaiCode Mobile Cohort
            </a>
            . My notes on{' '}
            <a href={MOBILE_META.notesUrl} target="_blank" rel="noopener noreferrer">
              Notion
            </a>
            . Code on{' '}
            <a href={MOBILE_META.githubRepo} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            .
          </p>

          <div className="phases-list">
            {mobilePhases.map((phase) => {
              const isOpen = openPhases[phase.id];
              const isPublished = phase.status === 'published';

              return (
                <div
                  key={phase.id}
                  className={`phase-card ${!isPublished ? 'coming-soon' : ''} ${isOpen ? 'open' : ''} phase-card-mobile`}
                >
                  <button
                    type="button"
                    className="phase-header"
                    onClick={() => togglePhase(phase.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="phase-num phase-num-mobile">{phase.number}</div>
                    <div className="phase-info">
                      <span className="phase-title">
                        PHASE {phase.number}: {phase.title}
                      </span>
                      <span className="phase-sub">{phase.moduleCount} Lessons</span>
                    </div>
                    <span className={`phase-chevron ${isOpen ? 'open' : ''}`}>⌄</span>
                  </button>

                  {isOpen && (
                    <div className="modules-list">
                      {phase.modules.map((mod) => (
                        <Link
                          key={mod.number}
                          to={mod.href || `/mobile/learn/${mod.slug}`}
                          className="module-row published"
                        >
                          <span className="module-num">RN {mod.number}</span>
                          <span className="module-title">{mod.title}</span>
                          {mod.day && <span className="module-day">Lesson {mod.day}</span>}
                          <span className="module-arrow">→</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="syllabus-footer-cta">
            <p>Want the full live cohort with Hitesh & Suraj?</p>
            <a
              href={MOBILE_META.cohortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-mobile-cohort-outline"
            >
              Enroll on ChaiCode
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
