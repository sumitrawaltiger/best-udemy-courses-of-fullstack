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
    "System Design is practiced every year in that year's language — first in JavaScript (28 May – 16 Jul 2027), then Python (Year 2) and Java (Year 3). Following GeeksForGeeks' 12-week, 24-module live program plus ChaiCode: scalability foundations, databases & caching, messaging/events & API design, microservices, resilience, observability & security, cloud/DevOps, and real-world case studies (URL shortener → WhatsApp → Instagram → Uber) with production-grade capstone builds.",
  chaicodeUrl: CHAICODE_INTERVIEW_URL,
  gfgDsaUrl: GFG_DSA_URL,
  gfgSystemDesignUrl: GFG_SYSTEM_DESIGN_URL,
  gfgInterviewUrl: GFG_INTERVIEW_PREP_URL,
  gfgCoursesUrl: GFG_COURSES_URL,
  resources: INTERVIEW_RESOURCES,
  instructors: 'Hitesh Choudhary — ChaiCode & GeeksForGeeks',
  totalModules: 60,
  calendarDays: 100,
  phaseWindow: 'Each year · JavaScript first (Days 316–365 · 28 May – 16 Jul 2027)',
  startsAfter: 'DSA in JavaScript (through 27 May 2027)',
  endsOn: '16 Jul 2027 (JS) · repeats each year in that language',
  continuesWith: 'Year 2 · Python stack (from 17 Jul 2027)',
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
    'DSA is practiced every year in that year’s language — first in JavaScript (17 Feb – 27 May 2027, Elshad Karimov’s 100 Days of Code: JS DSA), then Python (Year 2) and Java (Year 3). Arrays, trees, graphs, DP, and problem-solving patterns with GeeksForGeeks Self Paced and ChaiCode practice.',
  gfgDsaUrl: GFG_DSA_URL,
  chaicodeUrl: CHAICODE_INTERVIEW_URL,
  gfgCoursesUrl: GFG_COURSES_URL,
  calendarDays: 100,
  phaseWindow: 'Each year · JavaScript first (Days 216–315 · 17 Feb – 27 May 2027)',
  startsAfter: 'Express / Node.js (through 16 Feb 2027)',
  endsOn: '27 May 2027 (JS) · repeats each year in that language',
  continuesWith: 'System Design in JavaScript · 28 May – 16 Jul 2027',
  focusAreas: ['Arrays & Strings', 'Trees & Graphs', 'DP & Patterns', 'Problem solving'],
  path: '/interview',
};

export const JS_DSA_META = {
  title: 'Thunder++ — 100 Days of JavaScript DSA',
  subtitle: '100 days of JavaScript Data Structures & Algorithms — zero to hero, LeetCode-ready (Elshad Karimov, Udemy)',
  description:
    "From 28 Feb 2029 to 7 Jun 2029: 100 Days of Code — JavaScript Data Structures & Algorithms from zero to hero, with 100+ LeetCode / FAANG-style interview questions, Big-O analysis, and daily hands-on exercises. Following Elshad Karimov's \"100 Days of Code: JavaScript Data Structures and Algorithms\" (Udemy). Carved from the interview-preparation window; a 50 Days React Bootcamp then follows from 8 Jun 2029.",
  courseUrl: 'https://www.udemy.com/course/javascript-data-structures-and-algorithms/',
  instructor: 'Elshad Karimov',
  provider: 'Udemy',
  calendarDays: 100,
  phaseWindow: 'Days 959–1058 · 28 Feb – 7 Jun 2029',
  startsAfter: 'Data Structures (through 27 Feb 2029)',
  endsOn: '7 Jun 2029',
  continuesWith: 'React Bootcamp — 50 Days · 8 Jun – 27 Jul 2029',
  focusAreas: ['DS & Algorithms in JS', 'LeetCode interview questions', 'Big-O complexity', 'Problem-solving patterns'],
  path: '/interview',
};

export const REACT_BOOTCAMP_META = {
  title: 'Thunder++ — 50 Days React Bootcamp',
  subtitle: '50 days building 50 real-world React projects (Sufa Digital, Udemy)',
  description:
    "From 8 Jun 2029 to 27 Jul 2029: a 50-day React project bootcamp — build 50 real-world React apps with Hooks, REST APIs, Socket, Firebase, and Bootstrap. Following Sufa Digital's \"50 Days React Bootcamp: Build 50 Real World React Projects\" (Udemy). Carved from the interview-preparation window; a 100 Days of Python bootcamp then follows from 28 Jul 2029.",
  courseUrl: 'https://www.udemy.com/course/build-real-world-application-projects-using-react/',
  instructor: 'Sufa Digital',
  provider: 'Udemy',
  calendarDays: 50,
  phaseWindow: 'Days 1059–1108 · 8 Jun – 27 Jul 2029',
  startsAfter: 'JavaScript DSA — 100 Days (through 7 Jun 2029)',
  endsOn: '27 Jul 2029',
  continuesWith: 'Python Bootcamp — 100 Days of Code · 28 Jul – 4 Nov 2029',
  focusAreas: ['50 real-world projects', 'React Hooks', 'REST APIs & Socket', 'Firebase & Bootstrap'],
  path: '/interview',
};

export const PYTHON_BOOTCAMP_META = {
  title: 'Thunder++ — 100 Days of Code (Python)',
  subtitle: '100 days building 100 Python projects (Dr. Angela Yu, Udemy)',
  description:
    "From 28 Jul 2029 to 4 Nov 2029: a 100-day Python pro bootcamp — build 100 projects across automation, web dev, data science, and games with Flask, Selenium, Beautiful Soup, Pandas, NumPy, and more. Following Dr. Angela Yu's \"100 Days of Code: The Complete Python Pro Bootcamp\" (Udemy — 52 hours). Carved from the interview-preparation window; a 100 Days of JavaScript bootcamp then follows from 5 Nov 2029.",
  courseUrl: 'https://www.udemy.com/course/100-days-of-code/',
  instructor: 'Dr. Angela Yu',
  provider: 'Udemy',
  calendarDays: 100,
  phaseWindow: 'Days 1109–1208 · 28 Jul – 4 Nov 2029',
  startsAfter: 'React Bootcamp — 50 Days (through 27 Jul 2029)',
  endsOn: '4 Nov 2029',
  continuesWith: 'JavaScript Bootcamp — 100 Days of JavaScript · 5 Nov 2029 – 12 Feb 2030',
  focusAreas: ['100 Python projects', 'Automation & web (Flask)', 'Data science (Pandas/NumPy)', 'Games & GUIs'],
  path: '/interview',
};

export const JS_BOOTCAMP_META = {
  title: 'Thunder++ — 100 Days of JavaScript',
  subtitle: '100 days building projects with HTML, CSS & JavaScript (Ewomazino Akpareva, Udemy)',
  description:
    "From 5 Nov 2029 to 12 Feb 2030: a 100-day JavaScript project bootcamp — sharpen JS skills by building projects with HTML, CSS, Flexbox, Grid, Bootstrap, ES6 classes, arrow functions, events, and DOM manipulation. Following Ewomazino Akpareva's \"100 Days of JavaScript\" (Udemy — 60.5 hours). Carved from the interview-preparation window; a 50 Days LeetCode in Java phase then follows from 13 Feb 2030.",
  courseUrl: 'https://www.udemy.com/course/100-days-of-javascript/',
  instructor: 'Ewomazino Akpareva',
  provider: 'Udemy',
  calendarDays: 100,
  phaseWindow: 'Days 1209–1308 · 5 Nov 2029 – 12 Feb 2030',
  startsAfter: 'Python Bootcamp — 100 Days (through 4 Nov 2029)',
  endsOn: '12 Feb 2030',
  continuesWith: 'LeetCode in Java — 50 Days · 13 Feb 2030 – 3 Apr 2030',
  focusAreas: ['100 JS projects', 'HTML, CSS, Flexbox & Grid', 'ES6 & DOM manipulation', 'Bootstrap'],
  path: '/interview',
};

export const LEETCODE_JAVA_META = {
  title: 'Thunder++ — LeetCode in Java',
  subtitle: '50 days of LeetCode algorithms & coding-interview questions in Java (Holczer Balazs, Udemy)',
  description:
    "From 13 Feb 2030 to 3 Apr 2030: a 50-day LeetCode grind in Java — algorithms, data structures, and the coding-interview questions companies ask, solved and explained step by step. Following Holczer Balazs's \"LeetCode in Java: Algorithms Coding Interview Questions\" (Udemy). Carved from the interview-preparation window; a 60 Days Java Masterclass then follows from 4 Apr 2030.",
  courseUrl: 'https://www.udemy.com/course/leetcode-in-java-algorithms-coding-interview-questions/',
  instructor: 'Holczer Balazs',
  provider: 'Udemy',
  calendarDays: 50,
  phaseWindow: 'Days 1309–1358 · 13 Feb – 3 Apr 2030',
  startsAfter: 'JavaScript Bootcamp — 100 Days (through 12 Feb 2030)',
  endsOn: '3 Apr 2030',
  continuesWith: 'Java Masterclass — 60 Days of Java · 4 Apr 2030 – 2 Jun 2030',
  focusAreas: ['LeetCode problem patterns', 'Algorithms in Java', 'Coding-interview questions', 'Data structures'],
  path: '/interview',
};

export const JAVA_MASTERCLASS_META = {
  title: 'Thunder++ — 60 Days of Java',
  subtitle: '60 days mastering Java by building real-world projects (Denis Panjuta, Udemy)',
  description:
    "From 4 Apr 2030 to 2 Jun 2030: a 60-day complete Java masterclass — master Java from basics to advanced, OOP principles, JavaFX desktop apps, Spring Boot web apps & microservices, REST APIs, and file/database handling with Spring Data & H2. Following Denis Panjuta's \"60 Days of Java: The Complete Java Masterclass\" (Udemy — 49.5 hours). Carved from the interview-preparation window; a 30 JavaScript Projects in 30 Days phase then follows from 3 Jun 2030.",
  courseUrl: 'https://www.udemy.com/course/javamasterclass/',
  instructor: 'Denis Panjuta',
  provider: 'Udemy',
  calendarDays: 60,
  phaseWindow: 'Days 1359–1418 · 4 Apr – 2 Jun 2030',
  startsAfter: 'LeetCode in Java — 50 Days (through 3 Apr 2030)',
  endsOn: '2 Jun 2030',
  continuesWith: 'JS Projects — 30 JavaScript Projects in 30 Days · 3 Jun 2030 – 2 Jul 2030',
  focusAreas: ['Core Java & OOP', 'JavaFX desktop apps', 'Spring Boot & REST APIs', 'Microservices & databases'],
  path: '/interview',
};

export const JS_PROJECTS_META = {
  title: 'Thunder++ — 30 JavaScript Projects in 30 Days',
  subtitle: '30 days building 30 real-world JS projects with HTML, CSS & JS (Course Max One, Udemy)',
  description:
    "From 3 Jun 2030 to 2 Jul 2030: a 30-day project sprint — build 30 unique real-world apps from scratch and grow a web-developer portfolio, strengthening core JavaScript, HTML, and CSS skills. Following Course Max One's \"30 JavaScript Projects in 30 Days – HTML, CSS & JS\" (Udemy — 6.5 hours). Carved from the interview-preparation window; a Two-Week JavaScript Bootcamp then closes the journey from 3 Jul 2030.",
  courseUrl: 'https://www.udemy.com/course/30-javascript-projects-in-30-days/',
  instructor: 'Course Max One',
  provider: 'Udemy',
  calendarDays: 30,
  phaseWindow: 'Days 1419–1448 · 3 Jun – 2 Jul 2030',
  startsAfter: 'Java Masterclass — 60 Days (through 2 Jun 2030)',
  endsOn: '2 Jul 2030',
  continuesWith: 'Two-Week JavaScript Bootcamp — 14 days · 3 Jul 2030 – 16 Jul 2030',
  focusAreas: ['30 JS projects', 'HTML, CSS & JavaScript', 'Portfolio building', 'Real-world apps'],
  path: '/interview',
};

export const JS_TWO_WEEK_META = {
  title: 'Thunder++ — Two-Week JavaScript Bootcamp',
  subtitle: '14 days learning JavaScript end to end (Coding2GO, Udemy) — the final phase of 1461 days / 4 years',
  description:
    "From 3 Jul 2030 to 16 Jul 2030: a two-week JavaScript bootcamp that closes the 4-year journey — JavaScript from the very beginning to an advanced level: data types, conditionals, loops, functions, arrays, objects, the DOM, events, and forms, with hands-on projects. Following Fabian & Pavel Coding2GO's \"Learn JavaScript in 2 Weeks (Complete JavaScript Bootcamp)\" (Udemy). This final 14-day phase consumes the last of the old interview-preparation window and completes 1461 days of study from 17 Jul 2026 to 16 Jul 2030.",
  courseUrl: 'https://www.udemy.com/course/javascript-course-coding2go/',
  instructor: 'Fabian & Pavel Coding2GO',
  provider: 'Udemy',
  calendarDays: 14,
  weeks: 2,
  phaseWindow: 'Days 1449–1462 · 3 Jul – 16 Jul 2030',
  startsAfter: 'JS Projects — 30 Days (through 2 Jul 2030)',
  endsOn: '16 Jul 2030',
  journey: '1461 days · 4 years · 17 Jul 2026 → 16 Jul 2030',
  focusAreas: ['JavaScript fundamentals', 'Functions, arrays & objects', 'DOM, events & forms', 'Hands-on projects'],
  path: '/interview',
};

export const JOURNEY_META = {
  title: '4-Year Full-Stack Journey',
  startLabel: '17 Jul 2026',
  endLabel: '16 Jul 2030',
  years: 4,
  totalDays: 1461,
  finalPhaseDays: 14,
  finalPhaseWeeks: 2,
  summary:
    'Year 1 TypeScript (JavaScript → React & Next.js → React Native → Node/Express → DSA in JS → System Design in JS) → Year 2 Python (Python → Django → Agentic AI → DSA in Python → System Design in Python) → Year 3 Java (Spring Boot → Microservices → Design Patterns → DSA in Java → System Design in Java) → Year 4 DevOps (AWS → Docker → Kubernetes → DevOps & CI/CD).',
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
