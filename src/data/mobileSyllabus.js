import { mobileChapters } from './mobileChapters';

// ChaiCode Mobile Development Cohort — after Thunder 100 days
// https://chaiaurcode.notion.site/Mobile-Development-Cohort-343ab1b6b9c680caa31ed899178211ad

export const MOBILE_META = {
  title: 'Thunder++: React Native',
  subtitle: 'Mobile Development Cohort by ChaiCode — Expo, APIs & production apps',
  description:
    'After React & Next.js, continue with cross-platform mobile development. Build real apps with React Native + Expo.',
  syllabusUrl:
    'https://chaiaurcode.notion.site/Mobile-Development-Cohort-343ab1b6b9c680caa31ed899178211ad',
  notesUrl:
    'https://gregarious-gray-075.notion.site/Mobile-Development-Cohort-2f9c3158e38d80b9bc27e75bed2bd01a',
  githubRepo: 'https://github.com/Aestheticsuraj234/chaicode-mobiledev-2026/tree/main',
  cohortUrl: 'https://hitesh.ai/mobile-dev',
  coursePortal: 'https://courses.chaicode.com',
  totalLessons: 25,
  calendarDays: 39,
  phaseWindow: 'Days 146–184 · 27 Nov 2026 – 4 Jan 2027',
  startsAfter: 'React & Next.js (Days 101–145)',
  endsOn: '4 Jan 2027',
};

function lessonToModule(ch) {
  return {
    id: ch.id,
    number: ch.rnDay,
    title: ch.title,
    slug: ch.slug,
    day: ch.rnDay,
    published: true,
    href: `/mobile/learn/${ch.slug}`,
  };
}

function modulesForRange(start, end) {
  return mobileChapters
    .filter((c) => c.rnDay >= start && c.rnDay <= end)
    .map(lessonToModule);
}

const p1 = modulesForRange(1, 1);
const p2 = modulesForRange(2, 2);
const p3 = modulesForRange(3, 3);
const p4 = modulesForRange(4, 5);
const p5 = modulesForRange(6, 7);
const p6 = modulesForRange(8, 10);
const p7 = modulesForRange(11, 14);
const p8 = modulesForRange(15, 19);
const p9 = modulesForRange(20, 25);

export const mobilePhases = [
  {
    id: 'react-refresher',
    number: 1,
    title: 'Welcome to Mobile Development',
    moduleCount: p1.length,
    status: 'published',
    modules: p1,
  },
  {
    id: 'expo-start',
    number: 2,
    title: 'Getting Started with Expo',
    moduleCount: p2.length,
    status: 'published',
    modules: p2,
  },
  {
    id: 'components',
    number: 3,
    title: 'Core Components & Styling',
    moduleCount: p3.length,
    status: 'published',
    modules: p3,
  },
  {
    id: 'navigation',
    number: 4,
    title: 'Navigation & Expo Router',
    moduleCount: p4.length,
    status: 'published',
    modules: p4,
  },
  {
    id: 'backend-storage',
    number: 5,
    title: 'Networking & Data Storage',
    moduleCount: p5.length,
    status: 'published',
    modules: p5,
  },
  {
    id: 'device',
    number: 6,
    title: 'Sensors, Media & Device APIs',
    moduleCount: p6.length,
    status: 'published',
    modules: p6,
  },
  {
    id: 'production',
    number: 7,
    title: 'EAS, Background Tasks & Auth',
    moduleCount: p7.length,
    status: 'published',
    modules: p7,
  },
  {
    id: 'projects',
    number: 8,
    title: 'Real-World App Projects',
    moduleCount: p8.length,
    status: 'published',
    modules: p8,
  },
  {
    id: 'ship',
    number: 9,
    title: 'Deployment & Graduation',
    moduleCount: p9.length,
    status: 'published',
    modules: p9,
  },
];

export const mobileHighlights = [
  'React Native + Expo',
  'Navigation & Expo Router',
  'APIs & Offline Storage',
  'Push Notifications',
  'Authentication',
  'Real-World Projects',
  'EAS Build & Play Store',
];
