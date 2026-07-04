import { devopsChapters } from './devopsChapters';
import {
  KODEKLOUD_DEVOPS_URL,
  KODEKLOUD_DEVOPS_PATH_URL,
  CLOUDFOLKS_DEVOPS_PACKAGE_URL,
} from './trackConfig.js';

export const DEVOPS_META = {
  title: 'Thunder++ — 100 Days of DevOps',
  subtitle: 'KodeKloud 100 Days of DevOps + CloudFolks Hub DevOps Engineering',
  description:
    'Master the DevOps stack hands-on — Linux, Git, Jenkins, Docker, Kubernetes, Ansible, Terraform, and monitoring.',
  kodekloudUrl: KODEKLOUD_DEVOPS_URL,
  kodekloudPathUrl: KODEKLOUD_DEVOPS_PATH_URL,
  cloudfolksUrl: CLOUDFOLKS_DEVOPS_PACKAGE_URL,
  instructors: 'Bhavesh Atara — CloudFolks Hub',
  totalDays: 100,
  startsAfter: '100 Days of AWS Cloud',
};

function lessonToModule(ch) {
  return {
    id: ch.id,
    number: ch.devopsDay,
    title: ch.title,
    slug: ch.slug,
    day: ch.devopsDay,
    published: true,
    href: `/devops/learn/${ch.slug}`,
  };
}

function modulesForRange(start, end) {
  return devopsChapters
    .filter((c) => c.devopsDay >= start && c.devopsDay <= end)
    .map(lessonToModule);
}

export const devopsPhases = [
  { id: 'linux', number: 1, title: 'Linux Foundations', moduleCount: 10, status: 'published', modules: modulesForRange(1, 10) },
  { id: 'fundamentals', number: 2, title: 'DevOps Fundamentals', moduleCount: 10, status: 'published', modules: modulesForRange(11, 20) },
  { id: 'git', number: 3, title: 'Git & Version Control', moduleCount: 10, status: 'published', modules: modulesForRange(21, 30) },
  { id: 'cicd', number: 4, title: 'CI/CD & Jenkins', moduleCount: 10, status: 'published', modules: modulesForRange(31, 40) },
  { id: 'docker', number: 5, title: 'Docker & Containers', moduleCount: 10, status: 'published', modules: modulesForRange(41, 50) },
  { id: 'kubernetes', number: 6, title: 'Kubernetes', moduleCount: 10, status: 'published', modules: modulesForRange(51, 60) },
  { id: 'ansible', number: 7, title: 'Ansible & Automation', moduleCount: 10, status: 'published', modules: modulesForRange(61, 70) },
  { id: 'terraform', number: 8, title: 'Terraform & IaC', moduleCount: 10, status: 'published', modules: modulesForRange(71, 80) },
  { id: 'monitoring', number: 9, title: 'Monitoring & Observability', moduleCount: 10, status: 'published', modules: modulesForRange(81, 90) },
  { id: 'capstone', number: 10, title: 'CloudFolks DevOps & Capstone', moduleCount: 10, status: 'published', modules: modulesForRange(91, 100) },
];

export const devopsHighlights = [
  '100 hands-on KodeKloud tasks',
  'Linux, Git & Shell scripting',
  'Jenkins & GitLab CI/CD',
  'Docker & Kubernetes',
  'Ansible & Terraform IaC',
  'Prometheus & Grafana',
  'CloudFolks DevOps package',
];
