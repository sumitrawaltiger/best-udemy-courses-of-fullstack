import { useSearchParams, Link } from 'react-router-dom';
import { devopsChapters, searchDevopsChapters } from '../data/devopsChapters';
import { DEVOPS_META } from '../data/devopsSyllabus';
import LectureCard from '../components/LectureCard';
import DevopsSyllabus from '../components/DevopsSyllabus';
import DevopsHero, { DevopsHeroStats } from '../components/DevopsHero';

export default function DevopsHome() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query ? searchDevopsChapters(query) : devopsChapters;

  return (
    <>
      <section className="devops-hero">
        <div className="devops-hero-inner">
          <DevopsHero
            actions={
              <div className="devops-hero-actions">
                <Link
                  to="/devops/learn/introduction-to-100-days-of-devops"
                  className="btn btn-devops btn-lg"
                >
                  Start DevOps Day 1
                </Link>
                <a
                  href={DEVOPS_META.kodekloudUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-devops-kodekloud btn-lg"
                >
                  KodeKloud Challenge
                </a>
                <a
                  href={DEVOPS_META.cloudfolksUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-devops-cloudfolks btn-lg"
                >
                  CloudFolks Hub
                </a>
                <a href="#devops-syllabus" className="btn btn-outline-devops btn-lg">
                  View Syllabus
                </a>
                <Link to="/aws" className="btn btn-outline-devops btn-lg">
                  ← 100 Days of AWS
                </Link>
                <Link to="/k8s" className="btn btn-outline-devops btn-lg">
                  Kubernetes →
                </Link>
              </div>
            }
          >
            <DevopsHeroStats />
          </DevopsHero>
        </div>
      </section>

      <div className="home devops-home">
        <div id="devops-syllabus">
          <DevopsSyllabus />
        </div>

        <section className="roadmap">
          <h2>100-Day DevOps Roadmap</h2>
          <p className="section-desc">
            All {devopsChapters.length} days from Linux to Kubernetes. Then continue to the Kubernetes learning path.
          </p>
          <div className="roadmap-grid roadmap-100 roadmap-devops">
            {devopsChapters.map((ch) => (
              <div key={ch.slug} className="roadmap-day published" title={ch.title}>
                <Link to={`/devops/learn/${ch.slug}`}>{ch.devopsDay}</Link>
              </div>
            ))}
          </div>
          <div className="roadmap-legend">
            <span>
              <span className="legend-dot published legend-dot-devops" /> {devopsChapters.length} days
            </span>
            <span>
              <span className="legend-dot published" /> Linux → K8s → IaC
            </span>
          </div>
        </section>

        <section className="lectures-section">
          <div className="section-header">
            <h2>{query ? `Search Results for "${query}"` : 'All DevOps Days'}</h2>
            {query && (
              <Link to="/devops" className="clear-search">
                Clear search
              </Link>
            )}
          </div>
          {results.length === 0 ? (
            <div className="no-results">
              <p>No days found for "{query}".</p>
              <Link to="/devops">View all days</Link>
            </div>
          ) : (
            <div className="lecture-list">
              {results.map((ch) => (
                <LectureCard key={ch.slug} chapter={ch} basePath="/devops/learn" dayPrefix="DO" />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
