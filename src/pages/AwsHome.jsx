import { useSearchParams, Link } from 'react-router-dom';
import { awsChapters, searchAwsChapters } from '../data/awsChapters';
import { AWS_META } from '../data/awsSyllabus';
import LectureCard from '../components/LectureCard';
import AwsSyllabus from '../components/AwsSyllabus';
import AwsHero, { AwsHeroStats } from '../components/AwsHero';

export default function AwsHome() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query ? searchAwsChapters(query) : awsChapters;

  return (
    <>
      <section className="aws-hero">
        <div className="aws-hero-inner">
          <AwsHero
            actions={
              <div className="aws-hero-actions">
                <Link
                  to="/aws/learn/introduction-to-100-days-of-cloud"
                  className="btn btn-aws btn-lg"
                >
                  Start AWS Day 1
                </Link>
                <a
                  href={AWS_META.kodekloudUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-aws-kodekloud btn-lg"
                >
                  KodeKloud Challenge
                </a>
                <a
                  href={AWS_META.cloudfolksCourseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-aws-cloudfolks btn-lg"
                >
                  CloudFolks Hub
                </a>
                <a href="#aws-syllabus" className="btn btn-outline-aws btn-lg">
                  View Syllabus
                </a>
                <Link to="/python" className="btn btn-outline-aws btn-lg">
                  ← Python & Agentic AI
                </Link>
                <Link to="/devops" className="btn btn-outline-aws btn-lg">
                  DevOps →
                </Link>
              </div>
            }
          >
            <AwsHeroStats />
          </AwsHero>
        </div>
      </section>

      <div className="home aws-home">
        <div id="aws-syllabus">
          <AwsSyllabus />
        </div>

        <section className="roadmap">
          <h2>100-Day AWS Cloud Roadmap</h2>
          <p className="section-desc">
            All {awsChapters.length} days mapped from KodeKloud and CloudFolks. Then continue to DevOps.
          </p>
          <div className="roadmap-grid roadmap-100 roadmap-aws">
            {awsChapters.map((ch) => (
              <div key={ch.slug} className="roadmap-day published" title={ch.title}>
                <Link to={`/aws/learn/${ch.slug}`}>{ch.awsDay}</Link>
              </div>
            ))}
          </div>
          <div className="roadmap-legend">
            <span>
              <span className="legend-dot published legend-dot-aws" /> {awsChapters.length} days
            </span>
            <span>
              <span className="legend-dot published" /> AWS + Multi-Cloud
            </span>
          </div>
        </section>

        <section className="lectures-section">
          <div className="section-header">
            <h2>{query ? `Search Results for "${query}"` : 'All Cloud Days'}</h2>
            {query && (
              <Link to="/aws" className="clear-search">
                Clear search
              </Link>
            )}
          </div>
          {results.length === 0 ? (
            <div className="no-results">
              <p>No days found for "{query}".</p>
              <Link to="/aws">View all days</Link>
            </div>
          ) : (
            <div className="lecture-list">
              {results.map((ch) => (
                <LectureCard key={ch.slug} chapter={ch} basePath="/aws/learn" dayPrefix="AWS" />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
