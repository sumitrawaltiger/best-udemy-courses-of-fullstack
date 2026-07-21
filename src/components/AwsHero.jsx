import { AWS_META } from '../data/awsSyllabus';
import { awsChapters } from '../data/awsChapters';

export default function AwsHero({ children, actions }) {
  return (
    <div className="aws-hero-block">
      <span className="aws-level-badge">
        <span className="aws-level-icon" aria-hidden="true">☁️</span>
        Year 4 · After Java
      </span>

      <h1 className="aws-title">
        <span className="aws-title-line">Thunder++</span>
        <span className="aws-title-line">100 Days of AWS Cloud</span>
      </h1>

      <p className="aws-subtitle">{AWS_META.subtitle}</p>

      <div className="aws-meta-row">
        <span className="aws-meta-tag">
          <span aria-hidden="true">☁️</span>
          {AWS_META.totalDays} Days
        </span>
        <span className="aws-meta-tag">
          <span aria-hidden="true">🎯</span>
          KodeKloud Challenge
        </span>
        <span className="aws-meta-tag">
          <span aria-hidden="true">🏆</span>
          SAA-C03 Prep
        </span>
        <span className="aws-meta-tag">
          <span aria-hidden="true">🧑‍🏫</span>
          CloudFolks Hub
        </span>
      </div>

      {children}
      {actions}
    </div>
  );
}

export function AwsHeroStats() {
  return (
    <p className="aws-hero-desc">
      {awsChapters.length} days from{' '}
      <a href={AWS_META.kodekloudUrl} target="_blank" rel="noopener noreferrer">
        KodeKloud 100 Days of Cloud
      </a>{' '}
      and{' '}
      <a href={AWS_META.cloudfolksUrl} target="_blank" rel="noopener noreferrer">
        CloudFolks Hub
      </a>{' '}
      — IAM, EC2, S3, VPC, RDS, Lambda, CloudFormation, and AWS Solutions Architect certification prep.
    </p>
  );
}
