import { useSearchParams, Link } from 'react-router-dom';
import { devopsChapters, searchDevopsChapters } from '../data/devopsChapters';
import { DEVOPS_META, DEVOPS_MASTERY_SYLLABUS, DEVOPS_MASTERY_PDF } from '../data/devopsSyllabus';
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
                <a
                  href={DEVOPS_MASTERY_PDF}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-devops btn-lg"
                >
                  📄 DevOps Mastery (PDF)
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

        <section className="devops-mastery-section" id="devops-mastery">
          <div className="section-header">
            <h2>DevOps Mastery Syllabus</h2>
            <a href={DEVOPS_MASTERY_PDF} download className="btn btn-devops">
              📄 Download PDF
            </a>
          </div>
          <p className="section-desc">
            A complete, tool-by-tool DevOps roadmap designed from the <strong>Learn DevOps</strong> course
            slides ({DEVOPS_MASTERY_SYLLABUS.length} modules) — from Linux and Docker to Kubernetes,
            Terraform, and monitoring. Download the full slide deck above.
          </p>
          <div className="devops-mastery-grid">
            {DEVOPS_MASTERY_SYLLABUS.map((mod, i) => (
              <article key={mod.title} className="devops-mastery-card">
                <div className="devops-mastery-card-head">
                  <span className="devops-mastery-icon" aria-hidden="true">
                    {mod.icon}
                  </span>
                  <h3>
                    <span className="devops-mastery-num">{i + 1}</span> {mod.title}
                  </h3>
                </div>
                <ul>
                  {mod.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="roadmap">
          <h2>100-Day DevOps Roadmap</h2>
          <p className="section-desc">
            Runs <strong>13 Jan – 21 Apr 2028</strong> (Days 559–658 · 100 days). All {devopsChapters.length} days from
            Linux to Kubernetes. The Kubernetes path starts <strong>22 Apr 2028</strong>.
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
