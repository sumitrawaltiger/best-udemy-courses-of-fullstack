// Learning path calendar offsets (Day 1 = 4 Jul 2026)
export const THUNDER_DAYS = 100;

// After Thunder: React & Next.js + React Native through 4 Jan 2027
// Calendar Days 101–185 = 12 Oct 2026 → 4 Jan 2027 (85 calendar days; ~84 learning days after Day 100)
export const NEXTJS_RN_PHASE_DAYS = 85;
export const NEXTJS_CALENDAR_DAYS = 45; // Days 101–145
export const MOBILE_CALENDAR_DAYS = 40; // Days 146–185 · through 4 Jan 2027
export const NEXTJS_MODULES = 30; // ChaiCode Udemy modules (fit inside NEXTJS_CALENDAR_DAYS)
export const MOBILE_LESSONS = 25; // ChaiCode RN lessons (fit inside MOBILE_CALENDAR_DAYS)

// Python & Agentic AI: 5 Jan 2027 → 4 May 2027 (4 months)
// Calendar Days 186–305 (120 days)
export const PYTHON_CALENDAR_DAYS = 120;
export const PYTHON_MODULES = 45; // Ashok IT modules (fit inside PYTHON_CALENDAR_DAYS)

// Java & Spring: 5 May 2027 → 4 Oct 2027
// Calendar Days 306–458 (153 days) — J2SE, J2EE, JPA, Spring Boot, Microservices
export const JAVA_CALENDAR_DAYS = 153;
export const JAVA_MODULES = 50; // Udemy-mapped modules (fit inside JAVA_CALENDAR_DAYS)

// AWS Cloud: 5 Oct 2027 → 12 Jan 2028 (100 days)
// Calendar Days 459–558
export const AWS_DAYS = 100;

// DevOps: 13 Jan 2028 → 21 Apr 2028 (100 days)
// Calendar Days 559–658
export const DEVOPS_DAYS = 100;

// Kubernetes: 22 Apr 2028 → 30 Jul 2028 (100 days)
// Calendar Days 659–758
export const K8S_DAYS = 100;

// System Design (Interview track): 31 Jul 2028 → 7 Nov 2028 (100 days)
// Calendar Days 759–858
export const INTERVIEW_CALENDAR_DAYS = 100;
export const INTERVIEW_MODULES = 60; // ChaiCode + GfG modules (fit inside INTERVIEW_CALENDAR_DAYS)

// Data Structures: 8 Nov 2028 → 15 Feb 2029 (100 days)
// Calendar Days 859–958
export const DSA_CALENDAR_DAYS = 100;

// Interview Preparation: 16 Feb 2029 → 4 Jul 2030
// 504 days = 72 weeks — final phase of the 4-year journey
export const INTERVIEW_PREP_CALENDAR_DAYS = 504; // 72 weeks
export const INTERVIEW_PREP_WEEKS = 72;

// Full journey: 5 Jul 2026 → 4 Jul 2030 = 1461 study days (4 years)
// Day 1 of the journey = 5 Jul 2026; last day = 4 Jul 2030
export const JOURNEY_START_LABEL = '5 Jul 2026';
export const JOURNEY_END_LABEL = '4 Jul 2030';
export const JOURNEY_YEARS = 4;
export const JOURNEY_TOTAL_DAYS = 1461;
// Factory calendar (Day 1 = 4 Jul 2026): journey day N ≈ factory day N+1; last factory day = 1462
export const JOURNEY_END_FACTORY_DAY = 1462;

export const TRACK_OFFSETS = {
  thunder: 0,
  nextjs: THUNDER_DAYS,
  mobile: THUNDER_DAYS + NEXTJS_CALENDAR_DAYS,
  python: THUNDER_DAYS + NEXTJS_RN_PHASE_DAYS,
  java: THUNDER_DAYS + NEXTJS_RN_PHASE_DAYS + PYTHON_CALENDAR_DAYS,
  aws: THUNDER_DAYS + NEXTJS_RN_PHASE_DAYS + PYTHON_CALENDAR_DAYS + JAVA_CALENDAR_DAYS,
  devops:
    THUNDER_DAYS +
    NEXTJS_RN_PHASE_DAYS +
    PYTHON_CALENDAR_DAYS +
    JAVA_CALENDAR_DAYS +
    AWS_DAYS,
  k8s:
    THUNDER_DAYS +
    NEXTJS_RN_PHASE_DAYS +
    PYTHON_CALENDAR_DAYS +
    JAVA_CALENDAR_DAYS +
    AWS_DAYS +
    DEVOPS_DAYS,
  interview:
    THUNDER_DAYS +
    NEXTJS_RN_PHASE_DAYS +
    PYTHON_CALENDAR_DAYS +
    JAVA_CALENDAR_DAYS +
    AWS_DAYS +
    DEVOPS_DAYS +
    K8S_DAYS,
  dsa:
    THUNDER_DAYS +
    NEXTJS_RN_PHASE_DAYS +
    PYTHON_CALENDAR_DAYS +
    JAVA_CALENDAR_DAYS +
    AWS_DAYS +
    DEVOPS_DAYS +
    K8S_DAYS +
    INTERVIEW_CALENDAR_DAYS,
  interviewPrep:
    THUNDER_DAYS +
    NEXTJS_RN_PHASE_DAYS +
    PYTHON_CALENDAR_DAYS +
    JAVA_CALENDAR_DAYS +
    AWS_DAYS +
    DEVOPS_DAYS +
    K8S_DAYS +
    INTERVIEW_CALENDAR_DAYS +
    DSA_CALENDAR_DAYS,
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
