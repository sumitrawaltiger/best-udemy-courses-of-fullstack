import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  phases,
  courseHighlights,
  thunderRepo,
  PAID_COURSE_URL,
  strikeCourse,
} from '../data/syllabus';

export default function Syllabus() {
  const [openPhases, setOpenPhases] = useState({ 'js-mastery': true });

  function togglePhase(id) {
    setOpenPhases((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function expandAll() {
    const all = {};
    phases.forEach((p) => {
      all[p.id] = true;
    });
    setOpenPhases(all);
  }

  function collapseAll() {
    setOpenPhases({});
  }

  return (
    <section className="syllabus-section">
      <div className="syllabus-inner">
        <div className="highlights-block">
          <h2>
            <span className="section-icon">🏅</span> Course Highlights
          </h2>
          <div className="highlights-grid">
            {courseHighlights.map((item) => (
              <div key={item} className="highlight-card">
                <span className="highlight-check">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="syllabus-block">
          <div className="syllabus-header">
            <h2>
              <span className="section-icon">📚</span> Detailed Syllabus
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
            <a href={strikeCourse} target="_blank" rel="noopener noreferrer">
              Thunder on Strike
            </a>
            . Phase 1 lectures are live on this site. Code on{' '}
            <a href={thunderRepo} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            . In-depth videos on the{' '}
            <a href={PAID_COURSE_URL} target="_blank" rel="noopener noreferrer">
              course portal
            </a>
            .
          </p>

          <div className="phases-list">
            {phases.map((phase) => {
              const isOpen = openPhases[phase.id];
              const isInProgress = phase.status === 'in-progress';

              return (
                <div
                  key={phase.id}
                  className={`phase-card ${!isInProgress ? 'coming-soon' : ''} ${isOpen ? 'open' : ''}`}
                >
                  <button
                    type="button"
                    className="phase-header"
                    onClick={() => togglePhase(phase.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="phase-num">{phase.number}</div>
                    <div className="phase-info">
                      <span className="phase-title">
                        PHASE {phase.number}: {phase.title}
                      </span>
                      <span className="phase-sub">
                        {phase.moduleCount} Modules
                        {phase.siteNote ? ` · ${phase.siteNote}` : ''}
                      </span>
                    </div>
                    <span className={`phase-chevron ${isOpen ? 'open' : ''}`}>⌄</span>
                  </button>

                  {isOpen && (
                    <div className="modules-list">
                      {phase.modules.map((mod) => {
                        const content = (
                          <>
                            <span className="module-num">{mod.number}</span>
                            <span className="module-title">{mod.title}</span>
                            {mod.day && (
                              <span className="module-day">Day {mod.day}</span>
                            )}
                            {mod.slug && <span className="module-arrow">→</span>}
                          </>
                        );

                        return mod.slug ? (
                          <Link
                            key={mod.number}
                            to={mod.href || `/learn/${mod.slug}`}
                            className="module-row published"
                          >
                            {content}
                          </Link>
                        ) : (
                          <div key={mod.number} className="module-row locked">
                            {content}
                            <span className="module-lock">On Strike</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="syllabus-footer-cta">
            <p>Want the complete 72-module roadmap with live classes?</p>
            <a
              href={strikeCourse}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-strike-outline"
            >
              Explore Thunder on Strike
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
