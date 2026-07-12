import { nextjsChapters } from './nextjsChapters';
import { NEXTJS_UDEMY_URL } from './trackConfig.js';

export const NEXTJS_META = {
  title: 'Thunder+ — React & Next.js',
  subtitle:
    'Complete React and Next.js with AI-powered projects — Convex, Supabase, Drizzle & payments',
  description:
    'Master React and Next.js by building production-grade, AI-powered full-stack applications with Hitesh Choudhary & Suraj Kumar Jha.',
  udemyUrl: NEXTJS_UDEMY_URL,
  instructors: 'Hitesh Choudhary & Suraj Kumar Jha',
  totalModules: 30,
  totalHours: '95+ hours',
  totalSections: 44,
  calendarDays: 45,
  phaseWindow: 'Days 101–145 · 13 Oct – 26 Nov 2026',
  startsAfter: 'Thunder 100 Days',
  continuesWith: 'React Native (Days 146–185 · through 4 Jan 2027)',
};

function lessonToModule(ch) {
  return {
    id: ch.id,
    number: ch.nextDay,
    title: ch.title,
    slug: ch.slug,
    day: ch.nextDay,
    published: true,
    href: `/nextjs/learn/${ch.slug}`,
  };
}

function modulesForRange(start, end) {
  return nextjsChapters
    .filter((c) => c.nextDay >= start && c.nextDay <= end)
    .map(lessonToModule);
}

export const nextjsPhases = [
  {
    id: 'intro',
    number: 1,
    title: 'Course Introduction',
    moduleCount: modulesForRange(1, 1).length,
    status: 'published',
    modules: modulesForRange(1, 1),
  },
  {
    id: 'react-foundations',
    number: 2,
    title: 'React Foundations',
    moduleCount: modulesForRange(2, 8).length,
    status: 'published',
    modules: modulesForRange(2, 8),
  },
  {
    id: 'react-advanced',
    number: 3,
    title: 'Advanced React',
    moduleCount: modulesForRange(9, 11).length,
    status: 'published',
    modules: modulesForRange(9, 11),
  },
  {
    id: 'nextjs-core',
    number: 4,
    title: 'Next.js Core',
    moduleCount: modulesForRange(12, 17).length,
    status: 'published',
    modules: modulesForRange(12, 17),
  },
  {
    id: 'backend',
    number: 5,
    title: 'Backend & Databases',
    moduleCount: modulesForRange(18, 23).length,
    status: 'published',
    modules: modulesForRange(18, 23),
  },
  {
    id: 'auth-payments',
    number: 6,
    title: 'Auth & Payments',
    moduleCount: modulesForRange(24, 27).length,
    status: 'published',
    modules: modulesForRange(24, 27),
  },
  {
    id: 'ai-ship',
    number: 7,
    title: 'AI Projects & Ship',
    moduleCount: modulesForRange(28, 30).length,
    status: 'published',
    modules: modulesForRange(28, 30),
  },
];

export const nextjsHighlights = [
  'React & Next.js App Router',
  'Convex & Supabase backends',
  'Drizzle ORM & Prisma',
  'Zustand & Redux Toolkit',
  'OpenAI & Gemini AI projects',
  'Stripe, Razorpay & Polar payments',
  'Deploy production SaaS apps',
];
