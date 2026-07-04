import { useSearchParams, Link } from 'react-router-dom';
import { k8sChapters, searchK8sChapters } from '../data/k8sChapters';
import { K8S_META } from '../data/k8sSyllabus';
import LectureCard from '../components/LectureCard';
import K8sSyllabus from '../components/K8sSyllabus';
import K8sHero, { K8sHeroStats } from '../components/K8sHero';

export default function K8sHome() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query ? searchK8sChapters(query) : k8sChapters;

  return (
    <>
      <section className="k8s-hero">
        <div className="k8s-hero-inner">
          <K8sHero
            actions={
              <div className="k8s-hero-actions">
                <Link
                  to="/k8s/learn/introduction-to-kubernetes-learning-path"
                  className="btn btn-k8s btn-lg"
                >
                  Start K8s Day 1
                </Link>
                <a
                  href={K8S_META.pathUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-k8s-kodekloud btn-lg"
                >
                  Learning Path
                </a>
                <a
                  href={K8S_META.playgroundsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-k8s-playgrounds btn-lg"
                >
                  Playgrounds
                </a>
                <a
                  href={K8S_META.ckaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-k8s-cka btn-lg"
                >
                  CKA Course
                </a>
                <a href="#k8s-syllabus" className="btn btn-outline-k8s btn-lg">
                  View Syllabus
                </a>
                <Link to="/devops" className="btn btn-outline-k8s btn-lg">
                  ← 100 Days of DevOps
                </Link>
                <Link to="/interview" className="btn btn-outline-k8s btn-lg">
                  Interview Prep →
                </Link>
              </div>
            }
          >
            <K8sHeroStats />
          </K8sHero>
        </div>
      </section>

      <div className="home k8s-home">
        <div id="k8s-syllabus">
          <K8sSyllabus />
        </div>

        <section className="roadmap">
          <h2>100-Day Kubernetes Roadmap</h2>
          <p className="section-desc">
            All {k8sChapters.length} days from cloud-native foundations to CKA. Then continue to Interview Preparation.
          </p>
          <div className="roadmap-grid roadmap-100 roadmap-k8s">
            {k8sChapters.map((ch) => (
              <div key={ch.slug} className="roadmap-day published" title={ch.title}>
                <Link to={`/k8s/learn/${ch.slug}`}>{ch.k8sDay}</Link>
              </div>
            ))}
          </div>
          <div className="roadmap-legend">
            <span>
              <span className="legend-dot published legend-dot-k8s" /> {k8sChapters.length} days
            </span>
            <span>
              <span className="legend-dot published" /> Docker → K8s → CKA
            </span>
          </div>
        </section>

        <section className="lectures-section">
          <div className="section-header">
            <h2>{query ? `Search Results for "${query}"` : 'All Kubernetes Days'}</h2>
            {query && (
              <Link to="/k8s" className="clear-search">
                Clear search
              </Link>
            )}
          </div>
          {results.length === 0 ? (
            <div className="no-results">
              <p>No days found for "{query}".</p>
              <Link to="/k8s">View all days</Link>
            </div>
          ) : (
            <div className="lecture-list">
              {results.map((ch) => (
                <LectureCard key={ch.slug} chapter={ch} basePath="/k8s/learn" dayPrefix="K8S" />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
