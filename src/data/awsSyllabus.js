import { awsChapters } from './awsChapters';
import {
  KODEKLOUD_CLOUD_URL,
  CLOUDFOLKS_HUB_URL,
  CLOUDFOLKS_AWS_COURSE_URL,
  AWS_UDEMY_SAA_URL,
} from './trackConfig.js';

export const AWS_META = {
  title: 'Thunder++ — 100 Days of AWS Cloud',
  subtitle: 'KodeKloud 100 Days of Cloud + CloudFolks Hub AWS Solutions Architect',
  description:
    'Master AWS and multi-cloud engineering with 100 hands-on tasks, CloudFolks SAA-C03 training, and real cloud console practice.',
  kodekloudUrl: KODEKLOUD_CLOUD_URL,
  cloudfolksUrl: CLOUDFOLKS_HUB_URL,
  cloudfolksCourseUrl: CLOUDFOLKS_AWS_COURSE_URL,
  udemyUrl: AWS_UDEMY_SAA_URL,
  instructors: 'Bhavesh Atara — CloudFolks Hub',
  totalDays: 100,
  startsAfter: 'Java & Spring',
};

function lessonToModule(ch) {
  return {
    id: ch.id,
    number: ch.awsDay,
    title: ch.title,
    slug: ch.slug,
    day: ch.awsDay,
    published: true,
    href: `/aws/learn/${ch.slug}`,
  };
}

function modulesForRange(start, end) {
  return awsChapters.filter((c) => c.awsDay >= start && c.awsDay <= end).map(lessonToModule);
}

export const awsPhases = [
  { id: 'foundations', number: 1, title: 'Cloud Foundations', moduleCount: 10, status: 'published', modules: modulesForRange(1, 10) },
  { id: 'compute', number: 2, title: 'Compute — EC2', moduleCount: 10, status: 'published', modules: modulesForRange(11, 20) },
  { id: 'storage', number: 3, title: 'Storage — S3 & EBS', moduleCount: 10, status: 'published', modules: modulesForRange(21, 30) },
  { id: 'networking', number: 4, title: 'VPC & Networking', moduleCount: 10, status: 'published', modules: modulesForRange(31, 40) },
  { id: 'databases', number: 5, title: 'Databases & RDS', moduleCount: 10, status: 'published', modules: modulesForRange(41, 50) },
  { id: 'monitoring', number: 6, title: 'Monitoring & Security', moduleCount: 10, status: 'published', modules: modulesForRange(51, 60) },
  { id: 'serverless', number: 7, title: 'Serverless & Lambda', moduleCount: 10, status: 'published', modules: modulesForRange(61, 70) },
  { id: 'automation', number: 8, title: 'Automation & IaC', moduleCount: 10, status: 'published', modules: modulesForRange(71, 80) },
  { id: 'saa', number: 9, title: 'Solutions Architect SAA-C03', moduleCount: 10, status: 'published', modules: modulesForRange(81, 90) },
  { id: 'capstone', number: 10, title: 'Capstone & Multi-Cloud', moduleCount: 10, status: 'published', modules: modulesForRange(91, 100) },
];

export const awsHighlights = [
  '100 hands-on KodeKloud tasks',
  'AWS & Azure multi-cloud',
  'IAM, EC2, S3, VPC, RDS',
  'Lambda & serverless APIs',
  'CloudFormation & Terraform',
  'CloudFolks SAA-C03 prep',
  'Capstone cloud projects',
];

// AWS Certified Cloud Practitioner (CLF-C02) exam-prep syllabus —
// designed from the AWS Certified Cloud Practitioner course slides.
export const AWS_CCP_PDF = '/aws-ccp-slides.pdf';

export const AWS_CCP_SYLLABUS = [
  { icon: '☁️', title: 'What is Cloud Computing?', topics: ['Cloud models (IaaS, PaaS, SaaS)', 'Deployment models', 'The 6 advantages of cloud', 'AWS overview & pricing basics'] },
  { icon: '🔐', title: 'IAM — Identity & Access Management', topics: ['Users, groups & roles', 'IAM policies (JSON)', 'MFA & password policy', 'Least-privilege & the IAM security tools'] },
  { icon: '🖥️', title: 'Amazon EC2', topics: ['Instance types & families', 'Security groups', 'EC2 purchasing options (On-Demand, Reserved, Spot, Savings Plans)', 'User data & AMIs'] },
  { icon: '💽', title: 'EC2 Instance Storage', topics: ['EBS volumes & snapshots', 'Instance Store', 'Amazon EFS', 'Amazon FSx'] },
  { icon: '⚖️', title: 'ELB & Auto Scaling', topics: ['Elastic Load Balancing (ALB, NLB, GLB)', 'Auto Scaling Groups', 'Scaling policies', 'High availability & scalability'] },
  { icon: '🪣', title: 'Amazon S3', topics: ['Buckets & objects', 'Storage classes & lifecycle', 'Versioning & replication', 'Security, encryption & static hosting'] },
  { icon: '🗄️', title: 'Databases & Analytics', topics: ['RDS & Aurora', 'DynamoDB, ElastiCache', 'Redshift, Athena, Glue', 'DMS, EMR, QuickSight, Kinesis'] },
  { icon: '⚡', title: 'Other Compute Services', topics: ['ECS, Fargate & ECR', 'AWS Lambda', 'API Gateway', 'Batch, Lightsail'] },
  { icon: '🚀', title: 'Deploying & Managing at Scale', topics: ['CloudFormation (IaC)', 'Elastic Beanstalk', 'CodeDeploy, CodeBuild, CodePipeline', 'Systems Manager, OpsWorks'] },
  { icon: '🌍', title: 'Global Infrastructure', topics: ['Regions & Availability Zones', 'Edge locations & CloudFront', 'Route 53', 'Global Accelerator, Outposts, Wavelength'] },
  { icon: '🔗', title: 'Cloud Integration', topics: ['SQS (queues)', 'SNS (pub/sub)', 'Kinesis', 'Amazon MQ'] },
  { icon: '📊', title: 'Cloud Monitoring', topics: ['CloudWatch (metrics, alarms, logs)', 'EventBridge', 'CloudTrail', 'AWS Health Dashboard'] },
  { icon: '🌐', title: 'Amazon VPC', topics: ['Subnets, route tables & gateways', 'Security groups vs NACLs', 'VPC peering & endpoints', 'Site-to-Site VPN & Direct Connect'] },
  { icon: '🛡️', title: 'Security & Compliance', topics: ['Shared Responsibility Model', 'DDoS protection: Shield & WAF', 'KMS, CloudHSM, Secrets Manager', 'Inspector, GuardDuty, Macie, Artifact'] },
  { icon: '🤖', title: 'Machine Learning', topics: ['Rekognition, Transcribe, Polly', 'Comprehend, Translate, Lex', 'SageMaker', 'Kendra, Personalize'] },
  { icon: '💳', title: 'Account Management, Billing & Support', topics: ['AWS Organizations & consolidated billing', 'Pricing models & the Pricing Calculator', 'Budgets & Cost Explorer', 'Support plans & Trusted Advisor'] },
  { icon: '🔑', title: 'Advanced Identity', topics: ['AWS STS', 'Amazon Cognito', 'AWS Directory Services', 'IAM Identity Center (SSO)'] },
  { icon: '🧩', title: 'Other AWS Services', topics: ['Amazon WorkSpaces & AppStream', 'Amazon Connect', 'IoT Core', 'Amazon SES & more'] },
  { icon: '🏛️', title: 'AWS Architecting & Ecosystem', topics: ['Well-Architected Framework (6 pillars)', 'AWS Trusted Advisor', 'Support & documentation', 'Partner network & marketplace'] },
  { icon: '🎯', title: 'Exam Preparation', topics: ['CLF-C02 exam format & domains', 'Question strategies', 'Passing score & timing', 'Practice exams & final review'] },
];
