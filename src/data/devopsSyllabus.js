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
    'Master the DevOps stack hands-on — Linux, Git, Jenkins, Docker, Kubernetes, Ansible, Terraform, and monitoring — 13 Jan to 21 Apr 2028.',
  kodekloudUrl: KODEKLOUD_DEVOPS_URL,
  kodekloudPathUrl: KODEKLOUD_DEVOPS_PATH_URL,
  cloudfolksUrl: CLOUDFOLKS_DEVOPS_PACKAGE_URL,
  instructors: 'Bhavesh Atara — CloudFolks Hub',
  totalDays: 100,
  calendarDays: 100,
  phaseWindow: 'Days 559–658 · 13 Jan – 21 Apr 2028',
  startsAfter: '100 Days of AWS Cloud (through 12 Jan 2028)',
  endsOn: '21 Apr 2028',
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

// "DevOps Mastery" syllabus — designed from Anil Dollor's Learn DevOps course slides.
export const DEVOPS_MASTERY_PDF = '/devops-mastery.pdf';

export const DEVOPS_MASTERY_SYLLABUS = [
  {
    icon: '🚀',
    title: 'DevOps Foundations',
    topics: [
      'Hardware vs software basics',
      'Product-based vs service-based companies',
      'Full-stack vs DevOps engineer roles',
      'Essential tools & hard/soft skills',
      'SDLC & the DevOps lifecycle',
      'Goal: 99.99% application uptime',
    ],
  },
  {
    icon: '🐧',
    title: 'Linux Essentials',
    topics: [
      '20 popular Linux distros (Ubuntu, RHEL, Alpine…)',
      'WSL & getting a real server',
      'Boot process, kernel & architecture',
      'Shells: bash, sh, zsh, fish',
      'Package managers: apt, yum/dnf, apk',
      'Filesystem, basic commands, pipes & redirection',
    ],
  },
  {
    icon: '👥',
    title: 'Users, Groups & Processes',
    topics: [
      'Create / modify / delete users',
      '/etc/passwd & groups management',
      'Process managers & signals',
      'systemd & services (daemons)',
      'Symbolic links & file permissions',
      'Installing a GUI on Linux',
    ],
  },
  {
    icon: '📜',
    title: 'Shell Scripting',
    topics: [
      'Shebang (#!/bin/bash)',
      'Variables & echo',
      'Conditionals & loops',
      'Automating tasks with scripts',
    ],
  },
  {
    icon: '🌿',
    title: 'Git & Version Control',
    topics: [
      'Git SCM & GitHub basics',
      'clone, add, commit, push',
      'Branching & merging',
      'GitHub / GitLab / Bitbucket workflows',
    ],
  },
  {
    icon: '🐳',
    title: 'Docker',
    topics: [
      'Architecture: client, daemon, registry (Docker Hub)',
      'Images vs containers',
      'Dockerfile & its commands',
      'run / build / exec / cp, volumes & networks',
      'docker-compose (YAML)',
      'Restart policies, logs & cleanup (prune)',
    ],
  },
  {
    icon: '🗄️',
    title: 'Databases with Docker',
    topics: [
      'MySQL, MariaDB, PostgreSQL',
      'MongoDB & SQLite',
      'phpMyAdmin, Adminer & Workbench',
      'Reset root password & remote access',
      'LAMP stack (Linux, Apache, MySQL, PHP)',
    ],
  },
  {
    icon: '🌐',
    title: 'Web Servers & Deployment',
    topics: [
      'Apache2 & Nginx',
      'Reverse proxy & virtual hosts',
      'SSL with Certbot / Let’s Encrypt',
      'Serving apps & domains',
    ],
  },
  {
    icon: '☁️',
    title: 'Cloud — AWS, GCP & DigitalOcean',
    topics: [
      'EC2 provisioning & SSH',
      'Security groups & ports',
      'S3 & the AWS CLI',
      'DigitalOcean droplets & GCP instances',
      'cloud-init & logs',
    ],
  },
  {
    icon: '🔧',
    title: 'Jenkins CI/CD',
    topics: [
      'Install Jenkins (Docker / apt)',
      'Freestyle & pipeline jobs',
      'Jenkinsfile (Groovy DSL)',
      'Multibranch pipelines',
      'GitHub / GitLab integration & API tokens',
      'Build → test → deploy pipelines',
    ],
  },
  {
    icon: '☸️',
    title: 'Kubernetes',
    topics: [
      'Architecture: control plane & worker nodes',
      'Cluster setup: kubeadm, k3s, k3d, minikube',
      'Pods, Deployments & ReplicaSets',
      'Services & Ingress (NGINX, HAProxy, Istio)',
      'ConfigMaps & Secrets',
      'Rolling / blue-green / canary, HPA, Jobs & CronJobs',
    ],
  },
  {
    icon: '🏗️',
    title: 'Terraform & IaC + Monitoring',
    topics: [
      'IaC concepts & Terraform workflow',
      'init / validate / plan / apply / destroy',
      'State, state locking & backends',
      'Workspaces & modules',
      'Monitoring: Prometheus & Grafana stack',
      'node-exporter, dashboards & alerts',
    ],
  },
];
