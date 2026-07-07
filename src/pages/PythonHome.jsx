import { useSearchParams, Link } from 'react-router-dom';
import { pythonChapters, searchPythonChapters } from '../data/pythonChapters';
import { PYTHON_META } from '../data/pythonSyllabus';
import LectureCard from '../components/LectureCard';
import PythonSyllabus from '../components/PythonSyllabus';
import PythonHero, { PythonHeroStats } from '../components/PythonHero';

export default function PythonHome() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query ? searchPythonChapters(query) : pythonChapters;

  return (
    <>
      <section className="python-hero">
        <div className="python-hero-inner">
          <PythonHero
            actions={
              <div className="python-hero-actions">
                <Link to="/python/learn/course-introduction" className="btn btn-python btn-lg">
                  Start PY Module 1
                </Link>
                <a
                  href={PYTHON_META.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-python-portal btn-lg"
                >
                  Ashok IT Portal
                </a>
                <a href="#python-syllabus" className="btn btn-outline-python btn-lg">
                  View Syllabus
                </a>
                <a
                  href={PYTHON_META.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-python btn-lg"
                >
                  💻 Ashok IT GitHub
                </a>
                <Link to="/mobile" className="btn btn-outline-python btn-lg">
                  ← React Native
                </Link>
                <Link to="/java" className="btn btn-outline-python btn-lg">
                  Java & Spring →
                </Link>
              </div>
            }
          >
            <PythonHeroStats />
          </PythonHero>
        </div>
      </section>

      <div className="home python-home">
        <div id="python-syllabus">
          <PythonSyllabus />
        </div>

        <section className="roadmap">
          <h2>45-Module Python & AI Roadmap</h2>
          <p className="section-desc">
            Thunder++ continues after React Native. All {pythonChapters.length} modules from Python basics to
            Agentic AI.
          </p>
          <div className="roadmap-grid roadmap-python">
            {pythonChapters.map((ch) => (
              <div key={ch.slug} className="roadmap-day published" title={ch.title}>
                <Link to={`/python/learn/${ch.slug}`}>{ch.pyDay}</Link>
              </div>
            ))}
          </div>
          <div className="roadmap-legend">
            <span>
              <span className="legend-dot published legend-dot-python" /> {pythonChapters.length} modules
            </span>
            <span>
              <span className="legend-dot published" /> Python → Django → FastAPI → Agentic AI
            </span>
          </div>
        </section>

        <section className="lectures-section">
          <div className="section-header">
            <h2>{query ? `Search Results for "${query}"` : 'All Modules'}</h2>
            {query && (
              <Link to="/python" className="clear-search">
                Clear search
              </Link>
            )}
          </div>
          {results.length === 0 ? (
            <div className="no-results">
              <p>No modules found for "{query}".</p>
              <Link to="/python">View all modules</Link>
            </div>
          ) : (
            <div className="lecture-list">
              {results.map((ch) => (
                <LectureCard key={ch.slug} chapter={ch} basePath="/python/learn" dayPrefix="PY" />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
