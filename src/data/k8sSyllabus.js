import { k8sChapters } from './k8sChapters';
import {
  KODEKLOUD_K8S_PATH_URL,
  KODEKLOUD_K8S_BEGINNERS_URL,
  KODEKLOUD_CKA_URL,
  KODEKLOUD_K8S_CHALLENGES_URL,
  KODEKLOUD_K8S_PLAYGROUNDS_URL,
  KODEKLOUD_K8S_COURSES_URL,
  KODEKLOUD_K8S_LABS_URL,
} from './trackConfig.js';

export const DOCKER_K8S_PDF = '/docker-k8s-slides.pdf';

export const K8S_RESOURCES = [
  { title: 'Kubernetes Learning Path', url: KODEKLOUD_K8S_PATH_URL },
  { title: 'Kubernetes for Absolute Beginners', url: KODEKLOUD_K8S_BEGINNERS_URL },
  { title: 'CKA Certification Course', url: KODEKLOUD_CKA_URL },
  { title: 'Kubernetes Challenges', url: KODEKLOUD_K8S_CHALLENGES_URL },
  { title: 'Kubernetes Playgrounds', url: KODEKLOUD_K8S_PLAYGROUNDS_URL },
  { title: 'All Kubernetes Courses', url: KODEKLOUD_K8S_COURSES_URL },
  { title: 'Kubernetes Studio Labs', url: KODEKLOUD_K8S_LABS_URL },
];

export const K8S_META = {
  title: 'Thunder++ — Kubernetes',
  subtitle: 'KodeKloud Kubernetes Learning Path — from basics to CKA',
  description:
    'Master Kubernetes with hands-on labs, playgrounds, challenges, and CKA certification prep on KodeKloud.',
  pathUrl: KODEKLOUD_K8S_PATH_URL,
  beginnersUrl: KODEKLOUD_K8S_BEGINNERS_URL,
  ckaUrl: KODEKLOUD_CKA_URL,
  challengesUrl: KODEKLOUD_K8S_CHALLENGES_URL,
  playgroundsUrl: KODEKLOUD_K8S_PLAYGROUNDS_URL,
  coursesUrl: KODEKLOUD_K8S_COURSES_URL,
  labsUrl: KODEKLOUD_K8S_LABS_URL,
  resources: K8S_RESOURCES,
  instructors: 'Mumshad Mannambeth — KodeKloud',
  totalDays: 100,
  calendarDays: 100,
  phaseWindow: 'Days 659–758 · 22 Apr – 30 Jul 2028',
  startsAfter: '100 Days of DevOps (through 21 Apr 2028)',
  endsOn: '30 Jul 2028',
};

function lessonToModule(ch) {
  return {
    id: ch.id,
    number: ch.k8sDay,
    title: ch.title,
    slug: ch.slug,
    day: ch.k8sDay,
    published: true,
    href: `/k8s/learn/${ch.slug}`,
  };
}

function modulesForRange(start, end) {
  return k8sChapters.filter((c) => c.k8sDay >= start && c.k8sDay <= end).map(lessonToModule);
}

export const k8sPhases = [
  { id: 'foundations', number: 1, title: 'Cloud-Native Foundations', moduleCount: 10, status: 'published', modules: modulesForRange(1, 10) },
  { id: 'docker', number: 2, title: 'Docker & Containerization', moduleCount: 10, status: 'published', modules: modulesForRange(11, 20) },
  { id: 'beginners', number: 3, title: 'Kubernetes for Beginners', moduleCount: 10, status: 'published', modules: modulesForRange(21, 30) },
  { id: 'eks-helm', number: 4, title: 'AWS EKS & Helm', moduleCount: 10, status: 'published', modules: modulesForRange(31, 40) },
  { id: 'networking', number: 5, title: 'Service Mesh & Networking', moduleCount: 10, status: 'published', modules: modulesForRange(41, 50) },
  { id: 'logging', number: 6, title: 'Configuration & Logging', moduleCount: 10, status: 'published', modules: modulesForRange(51, 60) },
  { id: 'policies', number: 7, title: 'Policies & Package Management', moduleCount: 10, status: 'published', modules: modulesForRange(61, 70) },
  { id: 'observability', number: 8, title: 'Observability & Monitoring', moduleCount: 10, status: 'published', modules: modulesForRange(71, 80) },
  { id: 'advanced', number: 9, title: 'Advanced Kubernetes', moduleCount: 10, status: 'published', modules: modulesForRange(81, 90) },
  { id: 'cka', number: 10, title: 'CKA Certification & Capstone', moduleCount: 10, status: 'published', modules: modulesForRange(91, 100) },
];

export const k8sHighlights = [
  'KodeKloud learning path',
  'Hands-on labs & playgrounds',
  'Docker to Kubernetes',
  'Helm, Istio & Kustomize',
  'EFK logging stack',
  'Prometheus & Grafana Loki',
  'Kubernetes challenges',
  'CKA certification prep',
];
