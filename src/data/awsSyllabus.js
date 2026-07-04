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
