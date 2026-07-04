import { useState } from 'react';
import { Link } from 'react-router-dom';
import { pythonPhases, pythonHighlights, PYTHON_META } from '../data/pythonSyllabus';

export default function PythonSyllabus() {
  const [openPhases, setOpenPhases] = useState({ 'python-foundations': true });

  function togglePhase(id) {
    setOpenPhases((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function expandAll() {
    const all = {};
    pythonPhases.forEach((p) => {
      all[p.id] = true;
    });
    setOpenPhases(all);
  }

  function collapseAll() {
    setOpenPhases({});
  }

  return (
    <section className="syllabus-section python-syllabus-section">
      <div className="syllabus-inner">
        <div className="highlights-block">
          <h2>
            <span className="section-icon">🐍</span> Course Highlights
          </h2>
          <div className="highlights-grid">
            {pythonHighlights.map((item) => (
              <div key={item} className="highlight-card highlight-card-python">
                <span className="highlight-check highlight-check-python">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="syllabus-block">
          <div className="syllabus-header">
            <h2>
              <span className="section-icon">📚</span> Python & Agentic AI Syllabus
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
            Gen AI & Agentic AI with Python from{' '}
            <a href={PYTHON_META.portalUrl} target="_blank" rel="noopener noreferrer">
              {PYTHON_META.institute}
            </a>
            . {PYTHON_META.tagline} Covers Python foundations through Agentic AI with LangGraph, MCP, and n8n.
          </p>

          <div className="phases-list">
            {pythonPhases.map((phase) => {
              const isOpen = openPhases[phase.id];
              const isPublished = phase.status === 'published';

              return (
                <div
                  key={phase.id}
                  className={`phase-card ${!isPublished ? 'coming-soon' : ''} ${isOpen ? 'open' : ''} phase-card-python`}
                >
                  <button
                    type="button"
                    className="phase-header"
                    onClick={() => togglePhase(phase.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="phase-num phase-num-python">{phase.number}</div>
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
                          to={mod.href || `/python/learn/${mod.slug}`}
                          className="module-row published"
                        >
                          <span className="module-num">PY {mod.number}</span>
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
            <p>Access class notes and recordings on the student portal</p>
            <a
              href={PYTHON_META.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-python-portal-outline"
            >
              Ashok IT Portal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
