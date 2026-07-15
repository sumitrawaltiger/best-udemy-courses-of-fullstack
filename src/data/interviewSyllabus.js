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
  title: 'Thunder++ — System Design',
  subtitle: 'System Design for 100 days — the complete lifecycle (ChaiCode + GeeksForGeeks 12-week program)',
  description:
    "From 31 Jul to 7 Nov 2028: master the complete System Design lifecycle, following GeeksForGeeks' 12-week, 24-module live program plus ChaiCode. Covers scalability foundations, databases & caching, messaging/events & API design, microservices, resilience, observability & security, cloud/DevOps, and real-world case studies (URL shortener → WhatsApp → Instagram → Uber) with production-grade capstone builds. Data Structures follows from 8 Nov 2028.",
  chaicodeUrl: CHAICODE_INTERVIEW_URL,
  gfgDsaUrl: GFG_DSA_URL,
  gfgSystemDesignUrl: GFG_SYSTEM_DESIGN_URL,
  gfgInterviewUrl: GFG_INTERVIEW_PREP_URL,
  gfgCoursesUrl: GFG_COURSES_URL,
  resources: INTERVIEW_RESOURCES,
  instructors: 'Hitesh Choudhary — ChaiCode & GeeksForGeeks',
  totalModules: 60,
  calendarDays: 100,
  phaseWindow: 'Days 759–858 · 31 Jul – 7 Nov 2028',
  startsAfter: 'Kubernetes (through 30 Jul 2028)',
  endsOn: '7 Nov 2028',
  continuesWith: 'Data Structures (Days 859–958 · 8 Nov 2028 – 15 Feb 2029)',
  focusAreas: [
    'Scalability foundations',
    'Databases & caching',
    'Messaging, events & APIs',
    'Microservices & resilience',
    'Observability & security',
    'Cloud, DevOps & case studies',
  ],
  techStack: [
    'PostgreSQL',
    'Redis',
    'RabbitMQ',
    'Apache Kafka',
    'REST / GraphQL / gRPC',
    'WebSockets',
    'AWS',
    'Docker',
    'Kubernetes',
    'Prometheus / Grafana',
    'Terraform',
    'OAuth 2.0 / JWT',
    'RAG & LLM APIs',
  ],
};

export const DSA_META = {
  title: 'Thunder++ — Data Structures',
  subtitle: 'Data Structures & Algorithms for 100 days — GeeksForGeeks + ChaiCode',
  description:
    'From 8 Nov 2028 to 15 Feb 2029: deep DSA study — arrays, trees, graphs, DP, and patterns — with GeeksForGeeks Self Paced and ChaiCode practice. 100 Days of SQL follows from 16 Feb 2029.',
  gfgDsaUrl: GFG_DSA_URL,
  chaicodeUrl: CHAICODE_INTERVIEW_URL,
  gfgCoursesUrl: GFG_COURSES_URL,
  calendarDays: 100,
  phaseWindow: 'Days 859–958 · 8 Nov 2028 – 15 Feb 2029',
  startsAfter: 'System Design (through 7 Nov 2028)',
  endsOn: '15 Feb 2029',
  continuesWith: 'SQL — 100 Days of SQL · 16 Feb – 26 May 2029',
  focusAreas: ['Arrays & Strings', 'Trees & Graphs', 'DP & Patterns', 'Problem solving'],
  path: '/interview',
};

export const SQL_META = {
  title: 'Thunder++ — 100 Days of SQL',
  subtitle: '100 days of SQL — ace the SQL interviews like a pro (Ankit Bansal, Udemy)',
  description:
    "From 16 Feb 2029 to 26 May 2029: 100 Days of SQL — build problem-solving skills, practice daily, and crack real interview questions. Following Ankit Bansal's \"100 Days of SQL: Ace The SQL Interviews Like a PRO!!\" (Udemy — 22.5 hours, 119 coding exercises, 43 role plays). Carved from the interview-preparation window; a 50 Days React Bootcamp then follows from 27 May 2029.",
  courseUrl: 'https://www.udemy.com/course/100-days-of-sql/',
  instructor: 'Ankit Bansal',
  provider: 'Udemy',
  calendarDays: 100,
  phaseWindow: 'Days 959–1058 · 16 Feb – 26 May 2029',
  startsAfter: 'Data Structures (through 15 Feb 2029)',
  endsOn: '26 May 2029',
  continuesWith: 'React Bootcamp — 50 Days · 27 May – 15 Jul 2029',
  focusAreas: ['SQL interview questions', 'Problem-solving mindset', 'Query optimization', 'Pattern recognition'],
  path: '/interview',
};

export const REACT_BOOTCAMP_META = {
  title: 'Thunder++ — 50 Days React Bootcamp',
  subtitle: '50 days building 50 real-world React projects (Sufa Digital, Udemy)',
  description:
    "From 27 May 2029 to 15 Jul 2029: a 50-day React project bootcamp — build 50 real-world React apps with Hooks, REST APIs, Socket, Firebase, and Bootstrap. Following Sufa Digital's \"50 Days React Bootcamp: Build 50 Real World React Projects\" (Udemy). Carved from the interview-preparation window; a 100 Days of Python bootcamp then follows from 16 Jul 2029.",
  courseUrl: 'https://www.udemy.com/course/build-real-world-application-projects-using-react/',
  instructor: 'Sufa Digital',
  provider: 'Udemy',
  calendarDays: 50,
  phaseWindow: 'Days 1059–1108 · 27 May – 15 Jul 2029',
  startsAfter: 'SQL — 100 Days of SQL (through 26 May 2029)',
  endsOn: '15 Jul 2029',
  continuesWith: 'Python Bootcamp — 100 Days of Code · 16 Jul – 23 Oct 2029',
  focusAreas: ['50 real-world projects', 'React Hooks', 'REST APIs & Socket', 'Firebase & Bootstrap'],
  path: '/interview',
};

export const PYTHON_BOOTCAMP_META = {
  title: 'Thunder++ — 100 Days of Code (Python)',
  subtitle: '100 days building 100 Python projects (Dr. Angela Yu, Udemy)',
  description:
    "From 16 Jul 2029 to 23 Oct 2029: a 100-day Python pro bootcamp — build 100 projects across automation, web dev, data science, and games with Flask, Selenium, Beautiful Soup, Pandas, NumPy, and more. Following Dr. Angela Yu's \"100 Days of Code: The Complete Python Pro Bootcamp\" (Udemy — 52 hours). Carved from the interview-preparation window; a 100 Days of JavaScript bootcamp then follows from 24 Oct 2029.",
  courseUrl: 'https://www.udemy.com/course/100-days-of-code/',
  instructor: 'Dr. Angela Yu',
  provider: 'Udemy',
  calendarDays: 100,
  phaseWindow: 'Days 1109–1208 · 16 Jul – 23 Oct 2029',
  startsAfter: 'React Bootcamp — 50 Days (through 15 Jul 2029)',
  endsOn: '23 Oct 2029',
  continuesWith: 'JavaScript Bootcamp — 100 Days of JavaScript · 24 Oct 2029 – 31 Jan 2030',
  focusAreas: ['100 Python projects', 'Automation & web (Flask)', 'Data science (Pandas/NumPy)', 'Games & GUIs'],
  path: '/interview',
};

export const JS_BOOTCAMP_META = {
  title: 'Thunder++ — 100 Days of JavaScript',
  subtitle: '100 days building projects with HTML, CSS & JavaScript (Ewomazino Akpareva, Udemy)',
  description:
    "From 24 Oct 2029 to 31 Jan 2030: a 100-day JavaScript project bootcamp — sharpen JS skills by building projects with HTML, CSS, Flexbox, Grid, Bootstrap, ES6 classes, arrow functions, events, and DOM manipulation. Following Ewomazino Akpareva's \"100 Days of JavaScript\" (Udemy — 60.5 hours). Carved from the interview-preparation window; a 50 Days LeetCode in Java phase then follows from 1 Feb 2030.",
  courseUrl: 'https://www.udemy.com/course/100-days-of-javascript/',
  instructor: 'Ewomazino Akpareva',
  provider: 'Udemy',
  calendarDays: 100,
  phaseWindow: 'Days 1209–1308 · 24 Oct 2029 – 31 Jan 2030',
  startsAfter: 'Python Bootcamp — 100 Days (through 23 Oct 2029)',
  endsOn: '31 Jan 2030',
  continuesWith: 'LeetCode in Java — 50 Days · 1 Feb 2030 – 22 Mar 2030',
  focusAreas: ['100 JS projects', 'HTML, CSS, Flexbox & Grid', 'ES6 & DOM manipulation', 'Bootstrap'],
  path: '/interview',
};

export const LEETCODE_JAVA_META = {
  title: 'Thunder++ — LeetCode in Java',
  subtitle: '50 days of LeetCode algorithms & coding-interview questions in Java (Holczer Balazs, Udemy)',
  description:
    "From 1 Feb 2030 to 22 Mar 2030: a 50-day LeetCode grind in Java — algorithms, data structures, and the coding-interview questions companies ask, solved and explained step by step. Following Holczer Balazs's \"LeetCode in Java: Algorithms Coding Interview Questions\" (Udemy). Carved from the interview-preparation window; Interview Preparation then continues for 104 days from 23 Mar 2030.",
  courseUrl: 'https://www.udemy.com/course/leetcode-in-java-algorithms-coding-interview-questions/',
  instructor: 'Holczer Balazs',
  provider: 'Udemy',
  calendarDays: 50,
  phaseWindow: 'Days 1309–1358 · 1 Feb – 22 Mar 2030',
  startsAfter: 'JavaScript Bootcamp — 100 Days (through 31 Jan 2030)',
  endsOn: '22 Mar 2030',
  continuesWith: 'Interview Preparation — 104 days · 23 Mar 2030 – 4 Jul 2030',
  focusAreas: ['LeetCode problem patterns', 'Algorithms in Java', 'Coding-interview questions', 'Data structures'],
  path: '/interview',
};

export const INTERVIEW_PREP_META = {
  title: 'Thunder++ — Interview Preparation',
  subtitle: '104 days (~15 weeks) — final phase of 1461 days / 4 years of study',
  description:
    'From 23 Mar 2030 to 4 Jul 2030: Interview Preparation for 104 days (~15 weeks) with ChaiCode and GeeksForGeeks — mocks, company prep, behavioral rounds, and full-stack readiness. (504-day window minus the 100 Days of SQL, 50 Days React Bootcamp, 100 Days of Python, 100 Days of JavaScript, and 50 Days LeetCode in Java phases.) Completes 1461 days of study from 5 Jul 2026 to 4 Jul 2030.',
  chaicodeUrl: CHAICODE_INTERVIEW_URL,
  gfgInterviewUrl: GFG_INTERVIEW_PREP_URL,
  gfgCoursesUrl: GFG_COURSES_URL,
  gfgDsaUrl: GFG_DSA_URL,
  gfgSystemDesignUrl: GFG_SYSTEM_DESIGN_URL,
  resources: INTERVIEW_RESOURCES,
  instructors: 'Hitesh Choudhary — ChaiCode & GeeksForGeeks',
  calendarDays: 104,
  weeks: 15,
  phaseWindow: '104 days (~15 weeks) · 23 Mar 2030 – 4 Jul 2030',
  startsAfter: 'LeetCode in Java — 50 Days (through 22 Mar 2030)',
  endsOn: '4 Jul 2030',
  journey: '1461 days · 4 years · 5 Jul 2026 → 4 Jul 2030',
  focusAreas: ['Mock interviews', 'Online assessments', 'Behavioral & HR', 'Full-stack readiness'],
  path: '/interview',
};

export const JOURNEY_META = {
  title: '4-Year Full-Stack Journey',
  startLabel: '5 Jul 2026',
  endLabel: '4 Jul 2030',
  years: 4,
  totalDays: 1461,
  interviewPrepDays: 104,
  interviewPrepWeeks: 15,
  summary:
    'Thunder → Next.js → React Native → Python → Java → AWS → DevOps → Kubernetes → System Design → Data Structures → SQL → React Bootcamp → Python Bootcamp → JavaScript Bootcamp → LeetCode in Java → Interview Prep.',
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
