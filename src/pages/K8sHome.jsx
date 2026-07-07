import { useSearchParams, Link } from 'react-router-dom';
import { k8sChapters, searchK8sChapters } from '../data/k8sChapters';
import { K8S_META, K8S_RESOURCES, DOCKER_K8S_PDF } from '../data/k8sSyllabus';
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
                <a
                  href={DOCKER_K8S_PDF}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-k8s btn-lg"
                >
                  📄 Docker &amp; K8s Slides (PDF)
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

        <section className="devops-mastery-section" id="k8s-resources">
          <div className="section-header">
            <h2>Docker &amp; Kubernetes Slides + KodeKloud Courses</h2>
            <a href={DOCKER_K8S_PDF} download className="btn btn-k8s">
              📄 Download Slides
            </a>
          </div>
          <p className="section-desc">
            The full <strong>Docker &amp; Kubernetes</strong> slide deck — its content is worked into the{' '}
            <Link to="/k8s/learn/docker-for-absolute-beginners" className="clear-search">
              Docker
            </Link>{' '}
            and{' '}
            <Link to="/k8s/learn/kubernetes-architecture" className="clear-search">
              Kubernetes Architecture
            </Link>{' '}
            module pages. Go deeper with the official <strong>KodeKloud</strong> courses below.
          </p>
          <div className="k8s-courses-grid">
            {K8S_RESOURCES.map((res) => (
              <a
                key={res.url}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="k8s-course-link"
              >
                <span aria-hidden="true">🎓</span> {res.title}
                <span className="k8s-course-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </div>
        </section>

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
