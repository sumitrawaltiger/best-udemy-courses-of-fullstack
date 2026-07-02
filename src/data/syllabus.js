import { chapters } from './chapters';

export const courseHighlights = [
  'JavaScript from zero to advanced',
  'Day-by-day Thunder curriculum',
  'Interactive code playground',
  'DOM projects & real APIs',
  'Promises, async/await & closures',
  'Quizzes after every lecture',
  'Built for absolute beginners',
];

export const phases = [
  {
    id: 'js-mastery',
    number: 1,
    title: 'JavaScript Mastery',
    subtitle: '19 modules · Based on Thunder by Rohit Negi',
    status: 'in-progress',
    modules: chapters.map((ch) => ({
      id: ch.id,
      slug: ch.slug,
      number: ch.id,
      title: ch.title,
      day: ch.day,
      published: ch.status === 'published',
      topics: ch.topics.length,
    })),
  },
  {
    id: 'backend',
    number: 2,
    title: 'Backend Mastery',
    subtitle: 'Node.js, Express, databases',
    status: 'coming-soon',
    modules: [],
  },
  {
    id: 'frontend',
    number: 3,
    title: 'Frontend Development',
    subtitle: 'React, TypeScript, Tailwind',
    status: 'coming-soon',
    modules: [],
  },
  {
    id: 'system-design',
    number: 4,
    title: 'System Design',
    subtitle: 'HLD, scaling, internals',
    status: 'coming-soon',
    modules: [],
  },
  {
    id: 'devops',
    number: 5,
    title: 'DevOps',
    subtitle: 'Docker, CI/CD, cloud',
    status: 'coming-soon',
    modules: [],
  },
];

export const thunderRepo = 'https://github.com/Rohitnegi9/Thunder/tree/main/Javascript';
export const strikeCourse = 'https://strikes.in/course/thunder';
