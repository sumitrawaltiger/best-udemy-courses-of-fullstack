// Learning path calendar offsets (Day 1 = 1 Jul 2026)
export const THUNDER_DAYS = 100;
export const NEXTJS_MODULES = 30;
export const PYTHON_MODULES = 45;
export const JAVA_MODULES = 50;
export const AWS_DAYS = 100;
export const DEVOPS_DAYS = 100;
export const K8S_DAYS = 100;
export const MOBILE_LESSONS = 25;

export const TRACK_OFFSETS = {
  thunder: 0,
  nextjs: THUNDER_DAYS,
  mobile: THUNDER_DAYS + NEXTJS_MODULES,
  python: THUNDER_DAYS + NEXTJS_MODULES + MOBILE_LESSONS,
  java: THUNDER_DAYS + NEXTJS_MODULES + MOBILE_LESSONS + PYTHON_MODULES,
  aws: THUNDER_DAYS + NEXTJS_MODULES + MOBILE_LESSONS + PYTHON_MODULES + JAVA_MODULES,
  devops:
    THUNDER_DAYS +
    NEXTJS_MODULES +
    MOBILE_LESSONS +
    PYTHON_MODULES +
    JAVA_MODULES +
    AWS_DAYS,
  k8s:
    THUNDER_DAYS +
    NEXTJS_MODULES +
    MOBILE_LESSONS +
    PYTHON_MODULES +
    JAVA_MODULES +
    AWS_DAYS +
    DEVOPS_DAYS,
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
