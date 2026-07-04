import { useState } from 'react';
import { Link } from 'react-router-dom';
import { nextjsPhases, nextjsHighlights, NEXTJS_META } from '../data/nextjsSyllabus';

export default function NextjsSyllabus() {
  const [openPhases, setOpenPhases] = useState({ intro: true });

  function togglePhase(id) {
    setOpenPhases((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function expandAll() {
    const all = {};
    nextjsPhases.forEach((p) => {
      all[p.id] = true;
    });
    setOpenPhases(all);
  }

  function collapseAll() {
    setOpenPhases({});
  }

  return (
    <section className="syllabus-section nextjs-syllabus-section">
      <div className="syllabus-inner">
        <div className="highlights-block">
          <h2>
            <span className="section-icon">⚛️</span> Course Highlights
          </h2>
          <div className="highlights-grid">
            {nextjsHighlights.map((item) => (
              <div key={item} className="highlight-card highlight-card-nextjs">
                <span className="highlight-check highlight-check-nextjs">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="syllabus-block">
          <div className="syllabus-header">
            <h2>
              <span className="section-icon">📚</span> React & Next.js Syllabus
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
            Based on the{' '}
            <a href={NEXTJS_META.udemyUrl} target="_blank" rel="noopener noreferrer">
              Complete React and NextJS course with AI powered Projects
            </a>{' '}
            on Udemy by {NEXTJS_META.instructors}. {NEXTJS_META.totalSections} sections ·{' '}
            {NEXTJS_META.totalHours} of content.
          </p>

          <div className="phases-list">
            {nextjsPhases.map((phase) => {
              const isOpen = openPhases[phase.id];
              const isPublished = phase.status === 'published';

              return (
                <div
                  key={phase.id}
                  className={`phase-card ${!isPublished ? 'coming-soon' : ''} ${isOpen ? 'open' : ''} phase-card-nextjs`}
                >
                  <button
                    type="button"
                    className="phase-header"
                    onClick={() => togglePhase(phase.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="phase-num phase-num-nextjs">{phase.number}</div>
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
                          to={mod.href || `/nextjs/learn/${mod.slug}`}
                          className="module-row published"
                        >
                          <span className="module-num">NX {mod.number}</span>
                          <span className="module-title">{mod.title}</span>
                          {mod.day && <span className="module-day">Module {mod.day}</span>}
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
            <p>Get the full course with all projects on Udemy</p>
            <a
              href={NEXTJS_META.udemyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-nextjs-udemy-outline"
            >
              Enroll on Udemy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
