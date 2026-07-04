import { useState } from 'react';
import { Link } from 'react-router-dom';
import { devopsPhases, devopsHighlights, DEVOPS_META } from '../data/devopsSyllabus';

export default function DevopsSyllabus() {
  const [openPhases, setOpenPhases] = useState({ linux: true });

  function togglePhase(id) {
    setOpenPhases((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function expandAll() {
    const all = {};
    devopsPhases.forEach((p) => {
      all[p.id] = true;
    });
    setOpenPhases(all);
  }

  function collapseAll() {
    setOpenPhases({});
  }

  return (
    <section className="syllabus-section devops-syllabus-section">
      <div className="syllabus-inner">
        <div className="highlights-block">
          <h2>
            <span className="section-icon">⚙️</span> DevOps Highlights
          </h2>
          <div className="highlights-grid">
            {devopsHighlights.map((item) => (
              <div key={item} className="highlight-card highlight-card-devops">
                <span className="highlight-check highlight-check-devops">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="syllabus-block">
          <div className="syllabus-header">
            <h2>
              <span className="section-icon">📚</span> 100-Day DevOps Syllabus
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
            Hands-on tasks on{' '}
            <a href={DEVOPS_META.kodekloudUrl} target="_blank" rel="noopener noreferrer">
              KodeKloud 100 Days of DevOps
            </a>
            . Learning path from{' '}
            <a href={DEVOPS_META.kodekloudPathUrl} target="_blank" rel="noopener noreferrer">
              KodeKloud DevOps Path
            </a>
            . CloudFolks{' '}
            <a href={DEVOPS_META.cloudfolksUrl} target="_blank" rel="noopener noreferrer">
              DevOps Engineering package
            </a>
            .
          </p>

          <div className="phases-list">
            {devopsPhases.map((phase) => {
              const isOpen = openPhases[phase.id];
              return (
                <div
                  key={phase.id}
                  className={`phase-card ${isOpen ? 'open' : ''} phase-card-devops`}
                >
                  <button
                    type="button"
                    className="phase-header"
                    onClick={() => togglePhase(phase.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="phase-num phase-num-devops">{phase.number}</div>
                    <div className="phase-info">
                      <span className="phase-title">
                        PHASE {phase.number}: {phase.title}
                      </span>
                      <span className="phase-sub">{phase.moduleCount} Days</span>
                    </div>
                    <span className={`phase-chevron ${isOpen ? 'open' : ''}`}>⌄</span>
                  </button>

                  {isOpen && (
                    <div className="modules-list">
                      {phase.modules.map((mod) => (
                        <Link
                          key={mod.number}
                          to={mod.href || `/devops/learn/${mod.slug}`}
                          className="module-row published"
                        >
                          <span className="module-num">Day {mod.number}</span>
                          <span className="module-title">{mod.title}</span>
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
            <p>Start the free KodeKloud DevOps challenge</p>
            <a
              href={DEVOPS_META.kodekloudUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-devops-kodekloud-outline"
            >
              Start on KodeKloud
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
