// Learning path calendar offsets (Day 1 = 1 Jul 2026)
export const THUNDER_DAYS = 100;
export const NEXTJS_MODULES = 30;
export const PYTHON_MODULES = 45;
export const AWS_DAYS = 100;
export const DEVOPS_DAYS = 100;
export const MOBILE_LESSONS = 25;

export const TRACK_OFFSETS = {
  thunder: 0,
  nextjs: THUNDER_DAYS,
  mobile: THUNDER_DAYS + NEXTJS_MODULES,
  python: THUNDER_DAYS + NEXTJS_MODULES + MOBILE_LESSONS,
  aws: THUNDER_DAYS + NEXTJS_MODULES + MOBILE_LESSONS + PYTHON_MODULES,
  devops:
    THUNDER_DAYS + NEXTJS_MODULES + MOBILE_LESSONS + PYTHON_MODULES + AWS_DAYS,
};

export const NEXTJS_UDEMY_URL =
  'https://www.udemy.com/course/complete-react-and-nextjs-course-with-ai-powered-projects/';

export const MOBILE_COHORT_URL = 'https://hitesh.ai/mobile-dev';

export const ASHOK_IT_URL = 'https://ashokit.in';

export const KODEKLOUD_CLOUD_URL = 'https://kodekloud.com/100-days-of-cloud';

export const KODEKLOUD_DEVOPS_URL = 'https://kodekloud.com/100-days-of-devops';

export const KODEKLOUD_DEVOPS_PATH_URL = 'https://kodekloud.com/learning-path/devops';

export const CLOUDFOLKS_HUB_URL = 'https://www.cloudfolkshub.com';

export const CLOUDFOLKS_AWS_COURSE_URL =
  'https://www.cloudfolkshub.com/s/courses/6847d74581d93979e930afbe/take';

export const CLOUDFOLKS_DEVOPS_PACKAGE_URL = 'https://www.cloudfolkshub.com';

export const AWS_UDEMY_SAA_URL =
  'https://www.udemy.com/course/evolving-aws-solutions-architect-associate-training-saa-c03/';
