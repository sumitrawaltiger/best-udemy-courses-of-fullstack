import { chapters } from './chapters';

// Matches Thunder: 100 Days of Code on Strike
// https://strikes.in/course/thunder

export const courseHighlights = [
  'JavaScript Mastery',
  'Backend Mastery',
  'System Thinking and Backend Scaling Basics',
  'Advanced System Design (Internals + HLD)',
  'Frontend Development (React, TypeScript, Tailwind)',
  'Capstone Projects',
  'DevOps',
];

const phase1FromSite = chapters.map((ch) => ({
  id: ch.id,
  number: ch.id,
  title: ch.title,
  slug: ch.slug,
  day: ch.day,
  published: true,
  href: `/learn/${ch.slug}`,
}));

export const phases = [
  {
    id: 'js-mastery',
    number: 1,
    title: 'JavaScript Mastery',
    moduleCount: 14,
    status: 'in-progress',
    modules: phase1FromSite,
    siteNote: `${chapters.length} lectures published on this site`,
  },
  {
    id: 'backend',
    number: 2,
    title: 'Backend Mastery',
    moduleCount: 12,
    status: 'coming-soon',
    modules: [
      { number: 1, title: 'Node.js & Runtime Fundamentals' },
      { number: 2, title: 'HTTP, REST & Express.js' },
      { number: 3, title: 'Middleware & Request Lifecycle' },
      { number: 4, title: 'MongoDB & Database Design' },
      { number: 5, title: 'Mongoose ODM' },
      { number: 6, title: 'Authentication with JWT' },
      { number: 7, title: 'Authorization & Role-Based Access' },
      { number: 8, title: 'File Uploads & Cloud Storage' },
      { number: 9, title: 'WebSockets & Real-Time APIs' },
      { number: 10, title: 'Error Handling & Validation' },
      { number: 11, title: 'API Security Best Practices' },
      { number: 12, title: 'Backend Capstone Project' },
    ],
  },
  {
    id: 'system-scaling',
    number: 3,
    title: 'System Thinking and Backend Scaling Basics',
    moduleCount: 7,
    status: 'coming-soon',
    modules: [
      { number: 1, title: 'Monolith vs Microservices' },
      { number: 2, title: 'Caching with Redis' },
      { number: 3, title: 'Message Queues & Pub/Sub' },
      { number: 4, title: 'Load Balancing & Reverse Proxies' },
      { number: 5, title: 'Database Scaling & Sharding' },
      { number: 6, title: 'Rate Limiting & Throttling' },
      { number: 7, title: 'Backend Scaling Patterns' },
    ],
  },
  {
    id: 'system-design',
    number: 4,
    title: 'Advanced System Design (Internals + HLD)',
    moduleCount: 12,
    status: 'coming-soon',
    modules: [
      { number: 1, title: 'System Design Fundamentals' },
      { number: 2, title: 'URL Shortener — HLD' },
      { number: 3, title: 'Rate Limiter Design' },
      { number: 4, title: 'Notification System Design' },
      { number: 5, title: 'News Feed Design' },
      { number: 6, title: 'Chat Application Design' },
      { number: 7, title: 'E-commerce Platform Design' },
      { number: 8, title: 'Distributed Systems Basics' },
      { number: 9, title: 'CAP Theorem & Consistency' },
      { number: 10, title: 'Consistency & Availability Patterns' },
      { number: 11, title: 'HLD Interview Preparation' },
      { number: 12, title: 'System Design Playground' },
    ],
  },
  {
    id: 'frontend',
    number: 5,
    title: 'Frontend Development (React, TypeScript, Tailwind)',
    moduleCount: 13,
    status: 'coming-soon',
    modules: [
      { number: 1, title: 'React Fundamentals & JSX' },
      { number: 2, title: 'Components, Props & State' },
      { number: 3, title: 'useEffect & Lifecycle' },
      { number: 4, title: 'React Router & Navigation' },
      { number: 5, title: 'Forms & Controlled Components' },
      { number: 6, title: 'TypeScript Essentials' },
      { number: 7, title: 'TypeScript with React' },
      { number: 8, title: 'Tailwind CSS Fundamentals' },
      { number: 9, title: 'Context API & State Management' },
      { number: 10, title: 'Redux Toolkit' },
      { number: 11, title: 'React Performance Optimization' },
      { number: 12, title: 'Frontend Projects' },
      { number: 13, title: 'Deploying React Applications' },
    ],
  },
  {
    id: 'capstone',
    number: 6,
    title: 'Capstone Projects',
    moduleCount: 2,
    status: 'coming-soon',
    modules: [
      { number: 1, title: 'Full-Stack Capstone Project I' },
      { number: 2, title: 'Full-Stack Capstone Project II' },
    ],
  },
  {
    id: 'devops',
    number: 7,
    title: 'DevOps',
    moduleCount: 12,
    status: 'coming-soon',
    modules: [
      { number: 1, title: 'Git & GitHub Advanced Workflows' },
      { number: 2, title: 'Linux & Shell Essentials' },
      { number: 3, title: 'Docker Fundamentals' },
      { number: 4, title: 'Docker Compose & Multi-Container Apps' },
      { number: 5, title: 'CI/CD Pipelines' },
      { number: 6, title: 'GitHub Actions' },
      { number: 7, title: 'AWS Cloud Basics' },
      { number: 8, title: 'Deployment Strategies' },
      { number: 9, title: 'Kubernetes Introduction' },
      { number: 10, title: 'Monitoring & Logging' },
      { number: 11, title: 'Infrastructure as Code (Terraform)' },
      { number: 12, title: 'DevOps Capstone' },
    ],
  },
];

export const syllabusMeta = {
  title: 'Thunder: 100 Days of Code',
  subtitle: 'Web Development + System Design + Security + DevOps',
  totalDays: 100,
  totalModules: 72,
  totalHours: '100+',
};

export const thunderRepo = 'https://github.com/Rohitnegi9/Thunder/tree/main/Javascript';
export const strikeCourse = 'https://strikes.in/course/thunder';
export const discordCommunity = 'https://discord.com/invite/mHxZUFjf6R';
export { PAID_COURSE_URL } from './videoLinks';
