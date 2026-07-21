import { useSearchParams, Link } from 'react-router-dom';
import { awsChapters, searchAwsChapters } from '../data/awsChapters';
import { AWS_META, AWS_CCP_SYLLABUS, AWS_CCP_PDF } from '../data/awsSyllabus';
import LectureCard from '../components/LectureCard';
import AwsSyllabus from '../components/AwsSyllabus';
import AwsHero, { AwsHeroStats } from '../components/AwsHero';

// AWS vs Azure vs GCP service mappings — transcribed from the cloud-comparison
// cheat sheet (public/aws-notes/aws-vs-azure-vs-gcp.jpg).
const CLOUD_COMPARISON = [
  ['Virtual Machine', 'EC2', 'Virtual Machine (VM)', 'Compute Engine'],
  ['Storage (Object)', 'S3', 'Blob Storage', 'Cloud Storage'],
  ['Block Storage', 'EBS', 'Managed Disks', 'Persistent Disk'],
  ['File Storage', 'EFS', 'Azure Files', 'Filestore'],
  ['Database (SQL)', 'RDS', 'Azure SQL Database', 'Cloud SQL'],
  ['NoSQL Database', 'DynamoDB', 'Cosmos DB', 'Firestore / Bigtable'],
  ['Load Balancer', 'Elastic Load Balancer (ELB)', 'Azure Load Balancer', 'Cloud Load Balancing'],
  ['DNS', 'Route 53', 'Azure DNS', 'Cloud DNS'],
  ['VPC / Network', 'VPC', 'Virtual Network (VNet)', 'VPC Network'],
  ['Kubernetes', 'EKS', 'AKS', 'GKE'],
  ['Container Registry', 'ECR', 'ACR', 'Artifact Registry'],
  ['Serverless', 'Lambda', 'Azure Functions', 'Cloud Functions'],
  ['Monitoring', 'CloudWatch', 'Azure Monitor', 'Cloud Monitoring'],
  ['Logging', 'CloudWatch Logs', 'Log Analytics', 'Cloud Logging'],
  ['IAM (User Access)', 'IAM', 'Azure AD / Entra ID', 'Cloud IAM'],
  ['CI / CD', 'CodePipeline', 'Azure DevOps', 'Cloud Build'],
  ['Secrets Management', 'Secrets Manager', 'Key Vault', 'Secret Manager'],
];

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
                <a
                  href={AWS_CCP_PDF}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-aws btn-lg"
                >
                  📄 CCP Exam Slides (PDF)
                </a>
                <a
                  href="/aws-certified-developer-associate.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-aws btn-lg"
                >
                  📄 Developer Associate (PDF)
                </a>
                <a
                  href="/aws-certified-cloudops-associate.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-aws btn-lg"
                >
                  📄 CloudOps Associate (PDF)
                </a>
                <a
                  href="/aws-basics.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-aws btn-lg"
                >
                  📄 AWS Basics (PDF)
                </a>
                <Link to="/java" className="btn btn-outline-aws btn-lg">
                  ← Java & Spring
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
        <section className="cloud-compare" id="cloud-comparison">
          <div className="section-header">
            <h2>Cloud Services Comparison — AWS vs Azure vs GCP</h2>
            <a href="/aws-notes/aws-vs-azure-vs-gcp.jpg" download className="btn btn-aws">
              📥 Download
            </a>
          </div>
          <p className="section-desc">
            The most common service mappings asked in <strong>DevOps, Cloud &amp; interview</strong> rounds —
            the same job, named differently across the three big clouds.
          </p>

          <div className="cloud-compare-table-wrap">
            <table className="cloud-compare-table">
              <thead>
                <tr><th>Purpose</th><th>AWS</th><th>Azure</th><th>GCP</th></tr>
              </thead>
              <tbody>
                {CLOUD_COMPARISON.map((r) => (
                  <tr key={r[0]}>
                    <th scope="row">{r[0]}</th>
                    <td>{r[1]}</td>
                    <td>{r[2]}</td>
                    <td>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <figure className="cloud-compare-figure">
            <a href="/aws-notes/aws-vs-azure-vs-gcp.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="/aws-notes/aws-vs-azure-vs-gcp.jpg"
                alt="Cloud Services Comparison — AWS vs Azure vs GCP: service mappings for compute, storage, databases, networking, Kubernetes, serverless, monitoring, IAM, CI/CD and secrets, plus interview notes and a quick memory trick."
                loading="lazy"
                onError={(e) => { const f = e.currentTarget.closest('.cloud-compare-figure'); if (f) f.style.display = 'none'; }}
              />
            </a>
            <figcaption>The original one-page cheat sheet — click to open full size ↗</figcaption>
          </figure>
        </section>

        <div id="aws-syllabus">
          <AwsSyllabus />
        </div>

        <section className="devops-mastery-section" id="ccp-exam-prep">
          <div className="section-header">
            <h2>AWS Certified Cloud Practitioner — Exam Prep (CLF-C02)</h2>
            <a href={AWS_CCP_PDF} download className="btn btn-aws">
              📄 Download Slides
            </a>
          </div>
          <p className="section-desc">
            A full <strong>CLF-C02</strong> exam-preparation syllabus designed from the AWS Certified Cloud
            Practitioner course slides ({AWS_CCP_SYLLABUS.length} domains) — from cloud concepts and IAM
            through EC2, S3, VPC, security, billing, and the exam itself. Download the complete slide deck
            above.
          </p>
          <div className="devops-mastery-grid">
            {AWS_CCP_SYLLABUS.map((mod, i) => (
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
          <h2>100-Day AWS Cloud Roadmap</h2>
          <p className="section-desc">
            All {awsChapters.length} days mapped from KodeKloud and CloudFolks — part of the DevOps phase.
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
