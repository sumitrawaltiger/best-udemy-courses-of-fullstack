import { interviewChapters } from './interviewChapters';
import {
  CHAICODE_INTERVIEW_URL,
  GFG_DSA_URL,
  GFG_SYSTEM_DESIGN_URL,
  GFG_COURSES_URL,
  GFG_INTERVIEW_PREP_URL,
} from './trackConfig.js';

export const INTERVIEW_RESOURCES = [
  { title: 'ChaiCode — All in One Interview Preparation', url: CHAICODE_INTERVIEW_URL },
  { title: 'GeeksForGeeks — DSA Self Paced', url: GFG_DSA_URL },
  { title: 'GeeksForGeeks — System Design Live', url: GFG_SYSTEM_DESIGN_URL },
  { title: 'GeeksForGeeks — Interview Preparation', url: GFG_INTERVIEW_PREP_URL },
  { title: 'GeeksForGeeks — All Courses', url: GFG_COURSES_URL },
];

export const INTERVIEW_META = {
  title: 'Thunder++ — Interview Preparation',
  subtitle: 'DSA, System Design & Interviews — ChaiCode + GeeksForGeeks',
  description:
    'Crack tech interviews with data structures, system design case studies, mock interviews, and full-stack prep from ChaiCode and GeeksForGeeks.',
  chaicodeUrl: CHAICODE_INTERVIEW_URL,
  gfgDsaUrl: GFG_DSA_URL,
  gfgSystemDesignUrl: GFG_SYSTEM_DESIGN_URL,
  gfgInterviewUrl: GFG_INTERVIEW_PREP_URL,
  gfgCoursesUrl: GFG_COURSES_URL,
  resources: INTERVIEW_RESOURCES,
  instructors: 'Hitesh Choudhary — ChaiCode & GeeksForGeeks',
  totalModules: 60,
  startsAfter: 'Kubernetes',
};

function lessonToModule(ch) {
  return {
    id: ch.id,
    number: ch.interviewDay,
    title: ch.title,
    slug: ch.slug,
    day: ch.interviewDay,
    published: true,
    href: `/interview/learn/${ch.slug}`,
  };
}

function modulesForRange(start, end) {
  return interviewChapters
    .filter((c) => c.interviewDay >= start && c.interviewDay <= end)
    .map(lessonToModule);
}

export const interviewPhases = [
  { id: 'dsa-foundations', number: 1, title: 'DSA Foundations', moduleCount: 10, status: 'published', modules: modulesForRange(1, 10), courseUrl: GFG_DSA_URL },
  { id: 'dsa-patterns', number: 2, title: 'DSA Patterns & Practice', moduleCount: 10, status: 'published', modules: modulesForRange(11, 20), courseUrl: GFG_DSA_URL },
  { id: 'sd-fundamentals', number: 3, title: 'System Design Fundamentals', moduleCount: 10, status: 'published', modules: modulesForRange(21, 30), courseUrl: GFG_SYSTEM_DESIGN_URL },
  { id: 'sd-cases', number: 4, title: 'System Design Case Studies', moduleCount: 10, status: 'published', modules: modulesForRange(31, 40), courseUrl: GFG_SYSTEM_DESIGN_URL },
  { id: 'chaicode', number: 5, title: 'ChaiCode Interview Preparation', moduleCount: 10, status: 'published', modules: modulesForRange(41, 50), courseUrl: CHAICODE_INTERVIEW_URL },
  { id: 'capstone', number: 6, title: 'Mock Interviews & Capstone', moduleCount: 10, status: 'published', modules: modulesForRange(51, 60), courseUrl: GFG_INTERVIEW_PREP_URL },
];

export const interviewHighlights = [
  'Arrays to Graphs & DP',
  'GfG DSA Self Paced',
  'System design case studies',
  'URL shortener to Uber design',
  'ChaiCode all-in-one prep',
  'Full-stack interview topics',
  'Behavioral & HR rounds',
  'Mock interviews & OA practice',
];
