// Learning path calendar offsets (Journey Day 1 = 13 Aug 2026; factory COURSE_START = 8 Aug 2026)
export const THUNDER_DAYS = 100;

// ── TypeScript Stack Year (Phase 2) ─────────────────────────────────────────
// 2028 is a leap year: 366 calendar days (Days 366–731 of the full journey)
// First 46 days  = JavaScript          (1 Jan – 15 Feb 2028, day 47 is Series Finale)
// Next  20 days  = TypeScript          (16 Feb – 6 Mar 2028)
// Remaining 300  = React + RN + Next + Express  (7 Mar – 31 Dec 2028)
export const TS_YEAR_JS_DAYS = 46;          // 2028 · JavaScript phase (days 1–46; day 47 = JS Series Finale)
export const TS_YEAR_TS_DAYS = 20;          // 2028 · TypeScript phase (ep01–ep20 study + ep21 Series Finale)
export const TS_YEAR_FRAMEWORKS_DAYS = 300; // 2028 · Frameworks phase (366 − 66, 7 Mar – 31 Dec 2028)
export const TS_YEAR_TOTAL_DAYS = 366;      // 2028 leap year
// ─────────────────────────────────────────────────────────────────────────────

// After Thunder: React & Next.js + React Native through 23 Jan 2027
// Calendar Days 101–185 = 31 Oct 2026 → 23 Jan 2027 (85 calendar days; ~84 learning days after Day 100)
export const NEXTJS_RN_PHASE_DAYS = 85;
export const NEXTJS_CALENDAR_DAYS = 45; // Days 101–145
export const MOBILE_CALENDAR_DAYS = 40; // Days 146–185 · through 23 Jan 2027
export const NEXTJS_MODULES = 30; // ChaiCode Udemy modules (fit inside NEXTJS_CALENDAR_DAYS)
export const MOBILE_LESSONS = 25; // ChaiCode RN lessons (fit inside MOBILE_CALENDAR_DAYS)

// Generative AI Engineering with JavaScript — Year 1, after React Native
export const GENAI_CALENDAR_DAYS = 14; // Days 191–204
export const GENAI_MODULES = 14; // GenAI Engineering Bootcamp (13 outline modules + "Write your first code")
export const GENAI_COURSE_URL = 'https://js.langchain.com/docs/introduction/';

// Python & Agentic AI: 24 Jan 2027 → 23 May 2027 (4 months)
// Calendar Days 186–305 (120 days)
export const PYTHON_CALENDAR_DAYS = 120;
export const PYTHON_MODULES = 45; // Ashok IT modules (fit inside PYTHON_CALENDAR_DAYS)

// Java & Spring: 24 May 2027 → 23 Oct 2027
// Calendar Days 306–458 (153 days) — J2SE, Spring Boot, Kafka, Microservices, Automation Testing
export const JAVA_CALENDAR_DAYS = 153;
export const JAVA_MODULES = 50; // Udemy-mapped modules (fit inside JAVA_CALENDAR_DAYS)

// AWS Cloud: 24 Oct 2027 → 31 Jan 2028 (100 days)
// Calendar Days 459–558
export const AWS_DAYS = 100;

// DevOps: 1 Feb 2028 → 10 May 2028 (100 days)
// Calendar Days 559–658
export const DEVOPS_DAYS = 100;

// Kubernetes: 11 May 2028 → 18 Aug 2028 (100 days)
// Calendar Days 659–758
export const K8S_DAYS = 100;

// System Design (Interview track): 19 Aug 2028 → 26 Nov 2028 (100 days)
// Calendar Days 759–858
export const INTERVIEW_CALENDAR_DAYS = 100;
export const INTERVIEW_MODULES = 60; // ChaiCode + GfG modules (fit inside INTERVIEW_CALENDAR_DAYS)

// Data Structures: 27 Nov 2028 → 6 Mar 2029 (100 days)
// Calendar Days 859–958
export const DSA_CALENDAR_DAYS = 100;

// JS DSA (100 Days of Code: JavaScript Data Structures & Algorithms): 7 Mar 2029 → 14 Jun 2029 (100 days)
// Calendar Days 959–1058 — carved out of the interview-preparation window
export const JS_DSA_CALENDAR_DAYS = 100;

// React Bootcamp (50 Days React Bootcamp): 15 Jun 2029 → 3 Aug 2029 (50 days)
// Calendar Days 1059–1108 — carved out of the interview-preparation window
export const REACT_BOOTCAMP_CALENDAR_DAYS = 50;

// Python Bootcamp (100 Days of Code Python): 4 Aug 2029 → 11 Nov 2029 (100 days)
// Calendar Days 1109–1208 — carved out of the interview-preparation window
export const PYTHON_BOOTCAMP_CALENDAR_DAYS = 100;

// JavaScript Bootcamp (100 Days of JavaScript): 12 Nov 2029 → 19 Feb 2030 (100 days)
// Calendar Days 1209–1308 — carved out of the interview-preparation window
export const JS_BOOTCAMP_CALENDAR_DAYS = 100;

// LeetCode in Java (50 Days of LeetCode): 20 Feb 2030 → 10 Apr 2030 (50 days)
// Calendar Days 1309–1358 — carved out of the interview-preparation window
export const LEETCODE_JAVA_CALENDAR_DAYS = 50;

// Java Masterclass (60 Days of Java): 11 Apr 2030 → 9 Jun 2030 (60 days)
// Calendar Days 1359–1418 — carved out of the interview-preparation window
export const JAVA_MASTERCLASS_CALENDAR_DAYS = 60;

// JS Projects (30 JavaScript Projects in 30 Days): 10 Jun 2030 → 9 Jul 2030 (30 days)
// Calendar Days 1419–1448 — carved out of the interview-preparation window
export const JS_PROJECTS_CALENDAR_DAYS = 30;

// Two-Week JavaScript Bootcamp (Learn JavaScript in 2 Weeks): 10 Jul 2030 → 23 Jul 2030 (14 days)
// Calendar Days 1449–1462 — the final phase; consumes the last of the old interview-prep window
export const JS_TWO_WEEK_CALENDAR_DAYS = 14; // ~2 weeks
export const JS_TWO_WEEK_WEEKS = 2;

// Interview Preparation: fully carved out — 0 dedicated calendar days remain.
// The old 504-day window is now entirely JS-DSA(100)+React(50)+Python(100)+JS(100)+LeetCode(50)+Java(60)+JS Projects(30)+Two-Week JS(14).
export const INTERVIEW_PREP_CALENDAR_DAYS = 0;
export const INTERVIEW_PREP_WEEKS = 0;

// Full journey: Day 0 = 8 Sep 2026, Day 1 = 9 Sep 2026. 20 skills · 2,000 days · ~66 months · ends 29 Feb 2032.
// Skill  1 · Python + FastAPI    Days    1–100  · 9 Sep 2026 – 17 Dec 2026
// Skill  2 · Agentic AI          Days  101–200  · 18 Dec 2026 – 27 Mar 2027
// Skill  3 · JavaScript          Days  201–300  · 28 Mar 2027 – 5 Jul 2027
// Skill  4 · TypeScript          Days  301–400  · 6 Jul 2027 – 13 Oct 2027
// Skill  5 · React JS            Days  401–500  · 14 Oct 2027 – 21 Jan 2028
// Skill  6 · Next JS             Days  501–600  · 22 Jan 2028 – 30 Apr 2028
// Skill  7 · React Native        Days  601–700  · 1 May 2028 – 8 Aug 2028
// Skill  8 · Express JS          Days  701–800  · 9 Aug 2028 – 16 Nov 2028
// Skill  9 · Databases           Days  801–900  · 17 Nov 2028 – 24 Feb 2029
// Skill 10 · NestJS              Days  901–1000 · 25 Feb 2029 – 4 Jun 2029
// Skill 11 · J2SE                Days 1001–1100 · 5 Jun 2029 – 12 Sep 2029
// Skill 12 · Spring Boot         Days 1101–1200 · 13 Sep 2029 – 21 Dec 2029
// Skill 13 · Kafka               Days 1201–1300 · 22 Dec 2029 – 31 Mar 2030
// Skill 14 · Microservices       Days 1301–1400 · 1 Apr 2030 – 9 Jul 2030
// Skill 15 · Automation Testing  Days 1401–1500 · 10 Jul 2030 – 17 Oct 2030
// Skill 16 · DevOps              Days 1501–1600 · 18 Oct 2030 – 25 Jan 2031
// Skill 17 · AWS                 Days 1601–1700 · 26 Jan 2031 – 5 May 2031
// Skill 18 · SRE                 Days 1701–1800 · 6 May 2031 – 13 Aug 2031
// Skill 19 · System Design       Days 1801–1900 · 14 Aug 2031 – 21 Nov 2031
// Skill 20 · DSA                 Days 1901–2000 · 22 Nov 2031 – 29 Feb 2032
// NexusAI capstone built daily throughout all 2,000 days — no separate Capstone block.
export const JOURNEY_START_LABEL = '9 Sep 2026';
export const JOURNEY_END_LABEL = '29 Feb 2032';
export const JOURNEY_TOTAL_DAYS = 2000;
// Factory calendar: Day 1 = 9 Sep 2026 (COURSE_START); factory day N = journey Day N.
export const JOURNEY_END_FACTORY_DAY = 2000;

// Skill day-offsets for the 20-skill plan.
// Skill1(1-100) → Skill2(101-200) → Skill3(201-300) → Skill4(301-400) → Skill5(401-500) →
// Skill6(501-600) → Skill7(601-700) → Skill8(701-800) → Skill9(801-900) → Skill10(901-1000) →
// Skill11(1001-1100) → Skill12(1101-1200) → Skill13(1201-1300) → Skill14(1301-1400) →
// Skill15(1401-1500) → Skill16(1501-1600) → Skill17(1601-1700) → Skill18(1701-1800) →
// Skill19(1801-1900) → Skill20(1901-2000).
export const TRACK_OFFSETS = {
  thunder: 0, // Thunder JavaScript — Days 1–100 (24 Jul – 31 Oct 2026)
  nextjs: 100, // React & Next.js — Days 101–150 (1 Nov – 20 Dec 2026)
  mobile: 150, // React Native — Days 151–190 (21 Dec 2026 – 29 Jan 2027)
  genai: 190, // GenAI Engineering with JS — Days 191–204 (30 Jan – 12 Feb 2027)
  interview: 315, // System Design in JavaScript — Days 316–365 (4 Jun – 23 Jul 2027)
  python: 365, // Python stack — Year 2 (from 24 Jul 2027)
  java: 731, // Java stack — Year 3 (from 24 Jul 2028)
  aws: 1096, // AWS Cloud — Days 1097–1196 (24 Jul – 31 Oct 2029)
  k8s: 1236, // Kubernetes — Days 1237–1336 (11 Dec 2029 – 20 Mar 2030)
  devops: 1336, // DevOps & CI/CD — Days 1337–1461 (21 Mar – 23 Jul 2030)
};

export const NEXTJS_UDEMY_URL =
  'https://www.udemy.com/course/complete-react-and-nextjs-course-with-ai-powered-projects/';

export const MOBILE_COHORT_URL = 'https://hitesh.ai/mobile-dev';

export const ASHOK_IT_URL = 'https://ashokit.in';

export const KODEKLOUD_CLOUD_URL = 'https://kodekloud.com/100-days-of-cloud';

export const KODEKLOUD_DEVOPS_URL = 'https://kodekloud.com/100-days-of-devops';

export const KODEKLOUD_DEVOPS_PATH_URL = 'https://kodekloud.com/learning-path/devops';

export const KODEKLOUD_K8S_PATH_URL = 'https://kodekloud.com/learning-path/kubernetes';

export const KODEKLOUD_K8S_BEGINNERS_URL =
  'https://learn.kodekloud.com/user/courses/kubernetes-for-the-absolute-beginners-hands-on-tutorial';

export const KODEKLOUD_CKA_URL =
  'https://learn.kodekloud.com/user/courses/cka-certification-course-certified-kubernetes-administrator';

export const KODEKLOUD_K8S_CHALLENGES_URL =
  'https://learn.kodekloud.com/user/courses/kubernetes-challenges';

export const KODEKLOUD_K8S_PLAYGROUNDS_URL = 'https://kodekloud.com/public-playgrounds';

export const KODEKLOUD_K8S_COURSES_URL = 'https://kodekloud.com/learn/kubernetes-courses';

export const KODEKLOUD_K8S_LABS_URL = 'https://kodekloud.com/studio/labs/kubernetes';

export const CLOUDFOLKS_HUB_URL = 'https://www.cloudfolkshub.com';

export const CLOUDFOLKS_AWS_COURSE_URL =
  'https://www.cloudfolkshub.com/s/courses/6847d74581d93979e930afbe/take';

export const CLOUDFOLKS_DEVOPS_PACKAGE_URL = 'https://www.cloudfolkshub.com';

export const AWS_UDEMY_SAA_URL =
  'https://www.udemy.com/course/evolving-aws-solutions-architect-associate-training-saa-c03/';

export const JAVA_UDEMY_COMPLETE_URL =
  'https://www.udemy.com/course/java-the-complete-java-developer-course/';

export const JAVA_UDEMY_JAVA8_URL =
  'https://www.udemy.com/course/java-8-new-features-in-simple-way/';

export const JAVA_UDEMY_JDBC1_URL =
  'https://www.udemy.com/course/complete-jdbc-programming-part-1/';

export const JAVA_UDEMY_JAVA9_URL =
  'https://www.udemy.com/course/java-9-new-features-in-simple-way-jshell-jpms-and-more/';

export const JAVA_UDEMY_JDBC2_URL =
  'https://www.udemy.com/course/complete-jdbc-programming-part-2/';

export const JAVA_UDEMY_SPRING6_URL =
  'https://www.udemy.com/course/spring-framework-6-beginner-to-guru/';

export const JAVA_UDEMY_SPRING_BOOT_MS_URL =
  'https://www.udemy.com/course/java-spring-boot-microservices-with-spring-cloud-k8s-docker/';

export const JAVA_UDEMY_EVENT_DRIVEN_URL =
  'https://www.udemy.com/course/event-driven-microservices-with-cqrs-saga-event-sourcing/';

export const JAVA_UDEMY_SPRING_CLOUD_MS_URL =
  'https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/';

export const CHAICODE_INTERVIEW_URL =
  'https://courses.chaicode.com/learn/home/all-in-one-interview-preparation';

export const GFG_DSA_URL = 'https://www.geeksforgeeks.org/courses/dsa-self-paced';

export const GFG_SYSTEM_DESIGN_URL = 'https://www.geeksforgeeks.org/courses/system-design-live';

export const GFG_INTERVIEW_PREP_URL =
  'https://www.geeksforgeeks.org/courses/interview-preparation-for-product-companies';

export const GFG_COURSES_URL = 'https://www.geeksforgeeks.org/courses/';
