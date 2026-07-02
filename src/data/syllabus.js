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

function chapterToModule(ch) {
  return {
    id: ch.id,
    number: ch.day,
    title: ch.title,
    slug: ch.slug,
    day: ch.day,
    published: true,
    href: `/learn/${ch.slug}`,
  };
}

function modulesForDayRange(start, end) {
  return chapters
    .filter((c) => c.day >= start && c.day <= end)
    .map(chapterToModule);
}

const phase1 = modulesForDayRange(1, 25);
const phase2 = modulesForDayRange(26, 40);
const phase3 = modulesForDayRange(41, 47);
const phase4 = modulesForDayRange(48, 59);
const phase5 = modulesForDayRange(60, 72);
const phase6 = modulesForDayRange(73, 77);
const phase7 = modulesForDayRange(78, 89);
const graduation = modulesForDayRange(90, 100);

export const phases = [
  {
    id: 'js-mastery',
    number: 1,
    title: 'JavaScript Mastery',
    moduleCount: phase1.length,
    status: 'published',
    modules: phase1,
    siteNote: `${phase1.length} days on this site`,
  },
  {
    id: 'backend',
    number: 2,
    title: 'Backend Mastery',
    moduleCount: phase2.length,
    status: 'published',
    modules: phase2,
    siteNote: `${phase2.length} days on this site`,
  },
  {
    id: 'system-scaling',
    number: 3,
    title: 'System Thinking and Backend Scaling Basics',
    moduleCount: phase3.length,
    status: 'published',
    modules: phase3,
    siteNote: `${phase3.length} days on this site`,
  },
  {
    id: 'system-design',
    number: 4,
    title: 'Advanced System Design (Internals + HLD)',
    moduleCount: phase4.length,
    status: 'published',
    modules: phase4,
    siteNote: `${phase4.length} days on this site`,
  },
  {
    id: 'frontend',
    number: 5,
    title: 'Frontend Development (React, TypeScript, Tailwind)',
    moduleCount: phase5.length,
    status: 'published',
    modules: phase5,
    siteNote: `${phase5.length} days on this site`,
  },
  {
    id: 'capstone',
    number: 6,
    title: 'Capstone Projects',
    moduleCount: phase6.length,
    status: 'published',
    modules: phase6,
    siteNote: `${phase6.length} days on this site`,
  },
  {
    id: 'devops',
    number: 7,
    title: 'DevOps',
    moduleCount: phase7.length,
    status: 'published',
    modules: phase7,
    siteNote: `${phase7.length} days on this site`,
  },
  {
    id: 'graduation',
    number: 8,
    title: 'Graduation & Career Prep',
    moduleCount: graduation.length,
    status: 'published',
    modules: graduation,
    siteNote: `${graduation.length} days on this site`,
  },
];

export const syllabusMeta = {
  title: 'Thunder: 100 Days of Code',
  subtitle: 'Web Development + System Design + Security + DevOps',
  totalDays: 100,
  totalModules: chapters.length,
  totalHours: '100+',
};

export const thunderRepo = 'https://github.com/Rohitnegi9/Thunder/tree/main/Javascript';
export const strikeCourse = 'https://strikes.in/course/thunder';
export const discordCommunity = 'https://discord.com/invite/mHxZUFjf6R';
export { PAID_COURSE_URL } from './videoLinks';
