import { useState } from 'react';
import { Link } from 'react-router-dom';
import { phases, courseHighlights, thunderRepo, PAID_COURSE_URL } from '../data/syllabus';

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
            Curriculum follows{' '}
            <a href={thunderRepo} target="_blank" rel="noopener noreferrer">
              Thunder on GitHub
            </a>
            . Full in-depth video lectures are on the{' '}
            <a href={PAID_COURSE_URL} target="_blank" rel="noopener noreferrer">
              Thunder course portal
            </a>{' '}
            (login required). Free topic videos are linked on each day page.
          </p>

          <div className="phases-list">
            {phases.map((phase) => {
              const isOpen = openPhases[phase.id];
              const isComingSoon = phase.status === 'coming-soon';

              return (
                <div
                  key={phase.id}
                  className={`phase-card ${isComingSoon ? 'coming-soon' : ''} ${isOpen ? 'open' : ''}`}
                >
                  <button
                    type="button"
                    className="phase-header"
                    onClick={() => togglePhase(phase.id)}
                  >
                    <div className="phase-num">{phase.number}</div>
                    <div className="phase-info">
                      <span className="phase-title">
                        PHASE {phase.number}: {phase.title}
                      </span>
                      <span className="phase-sub">
                        {isComingSoon
                          ? phase.subtitle
                          : `${phase.modules.length} Modules · ${phase.subtitle}`}
                      </span>
                    </div>
                    <span className={`phase-chevron ${isOpen ? 'open' : ''}`}>›</span>
                  </button>

                  {isOpen && phase.modules.length > 0 && (
                    <div className="modules-list">
                      {phase.modules.map((mod) => (
                        <Link
                          key={mod.id}
                          to={`/learn/${mod.slug}`}
                          className="module-row"
                        >
                          <span className="module-num">{mod.number}</span>
                          <span className="module-title">{mod.title}</span>
                          <span className="module-day">Day {mod.day}</span>
                          <span className="module-arrow">→</span>
                        </Link>
                      ))}
                    </div>
                  )}

                  {isOpen && isComingSoon && (
                    <div className="phase-coming">
                      <p>Coming soon as I continue my learning journey.</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
