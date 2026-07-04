import { useState } from 'react';
import { Link } from 'react-router-dom';
import { k8sPhases, k8sHighlights, K8S_META } from '../data/k8sSyllabus';

export default function K8sSyllabus() {
  const [openPhases, setOpenPhases] = useState({ foundations: true });

  function togglePhase(id) {
    setOpenPhases((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function expandAll() {
    const all = {};
    k8sPhases.forEach((p) => {
      all[p.id] = true;
    });
    setOpenPhases(all);
  }

  function collapseAll() {
    setOpenPhases({});
  }

  return (
    <section className="syllabus-section k8s-syllabus-section">
      <div className="syllabus-inner">
        <div className="highlights-block">
          <h2>
            <span className="section-icon">☸️</span> Kubernetes Highlights
          </h2>
          <div className="highlights-grid">
            {k8sHighlights.map((item) => (
              <div key={item} className="highlight-card highlight-card-k8s">
                <span className="highlight-check highlight-check-k8s">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="syllabus-block">
          <div className="syllabus-header">
            <h2>
              <span className="section-icon">📚</span> 100-Day Kubernetes Syllabus
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
            Hands-on learning on{' '}
            <a href={K8S_META.pathUrl} target="_blank" rel="noopener noreferrer">
              KodeKloud Kubernetes Learning Path
            </a>
            . Practice in{' '}
            <a href={K8S_META.playgroundsUrl} target="_blank" rel="noopener noreferrer">
              Playgrounds
            </a>
            ,{' '}
            <a href={K8S_META.labsUrl} target="_blank" rel="noopener noreferrer">
              Studio Labs
            </a>
            , and prepare for{' '}
            <a href={K8S_META.ckaUrl} target="_blank" rel="noopener noreferrer">
              CKA
            </a>
            .
          </p>

          <div className="k8s-resource-links">
            {K8S_META.resources.map((res) => (
              <a
                key={res.url}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="k8s-resource-link"
              >
                🔗 {res.title}
              </a>
            ))}
          </div>

          <div className="phases-list">
            {k8sPhases.map((phase) => {
              const isOpen = openPhases[phase.id];
              return (
                <div
                  key={phase.id}
                  className={`phase-card ${isOpen ? 'open' : ''} phase-card-k8s`}
                >
                  <button
                    type="button"
                    className="phase-header"
                    onClick={() => togglePhase(phase.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="phase-num phase-num-k8s">{phase.number}</div>
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
                          to={mod.href || `/k8s/learn/${mod.slug}`}
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
            <p>Start with the Kubernetes Learning Path on KodeKloud</p>
            <a
              href={K8S_META.pathUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-k8s-kodekloud-outline"
            >
              Open Learning Path
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
