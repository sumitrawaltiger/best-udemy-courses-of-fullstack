import { useState } from 'react';
import { Link } from 'react-router-dom';
import { interviewPhases, interviewHighlights, INTERVIEW_META } from '../data/interviewSyllabus';

export default function InterviewSyllabus() {
  const [openPhases, setOpenPhases] = useState({ 'dsa-foundations': true });

  function togglePhase(id) {
    setOpenPhases((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function expandAll() {
    const all = {};
    interviewPhases.forEach((p) => {
      all[p.id] = true;
    });
    setOpenPhases(all);
  }

  function collapseAll() {
    setOpenPhases({});
  }

  return (
    <section className="syllabus-section interview-syllabus-section">
      <div className="syllabus-inner">
        <div className="highlights-block">
          <h2>
            <span className="section-icon">🎯</span> Interview Prep Highlights
          </h2>
          <div className="highlights-grid">
            {interviewHighlights.map((item) => (
              <div key={item} className="highlight-card highlight-card-interview">
                <span className="highlight-check highlight-check-interview">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="syllabus-block">
          <div className="syllabus-header">
            <h2>
              <span className="section-icon">📚</span> Interview Preparation Syllabus
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
            DSA & system design on{' '}
            <a href={INTERVIEW_META.gfgDsaUrl} target="_blank" rel="noopener noreferrer">
              GeeksForGeeks
            </a>
            . Full-stack interview prep on{' '}
            <a href={INTERVIEW_META.chaicodeUrl} target="_blank" rel="noopener noreferrer">
              ChaiCode
            </a>
            .
          </p>

          <div className="interview-resource-links">
            {INTERVIEW_META.resources.map((res) => (
              <a
                key={res.url}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="interview-resource-link"
              >
                🔗 {res.title}
              </a>
            ))}
          </div>

          <div className="phases-list">
            {interviewPhases.map((phase) => {
              const isOpen = openPhases[phase.id];
              return (
                <div
                  key={phase.id}
                  className={`phase-card ${isOpen ? 'open' : ''} phase-card-interview`}
                >
                  <button
                    type="button"
                    className="phase-header"
                    onClick={() => togglePhase(phase.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="phase-num phase-num-interview">{phase.number}</div>
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
                          to={mod.href || `/interview/learn/${mod.slug}`}
                          className="module-row published"
                        >
                          <span className="module-num">IP {mod.number}</span>
                          <span className="module-title">{mod.title}</span>
                          <span className="module-arrow">→</span>
                        </Link>
                      ))}
                      {phase.courseUrl && (
                        <a
                          href={phase.courseUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="module-row module-row-course"
                        >
                          <span className="module-num">🎓</span>
                          <span className="module-title">Open course for this phase</span>
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
            <p>Start with ChaiCode All-in-One Interview Preparation</p>
            <a
              href={INTERVIEW_META.chaicodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-interview-chaicode-outline"
            >
              Open on ChaiCode
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
