// Curated "best courses" per skill — hand-picked recommendations.
// Each course: { id, skill, icon, instructor, note, links: [{ label, url }] }

export const COURSE_CATEGORIES = [
  { id: 'frontend', label: 'Frontend & JavaScript', icon: '⚛️' },
  { id: 'java-backend', label: 'Java & Backend', icon: '☕' },
  { id: 'python-devops', label: 'Python & DevOps', icon: '🐍' },
  { id: 'cs-interview', label: 'DSA & System Design', icon: '🧠' },
];

export const BEST_COURSES = [
  // ---------------- Frontend & JavaScript ----------------
  {
    id: 'javascript',
    category: 'frontend',
    skill: 'JavaScript',
    icon: '🟨',
    title: 'The Complete JavaScript Course',
    instructor: 'Anil Dollor',
    provider: 'Udemy',
    coupon: 'PMNVD2525',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/the-complete-javascript-course/?couponCode=PMNVD2525',
      },
    ],
  },
  {
    id: 'typescript',
    category: 'frontend',
    skill: 'TypeScript',
    icon: '🔷',
    title: 'TypeScript Course',
    provider: 'Udemy',
    links: [{ label: 'View on Udemy', url: 'https://www.udemy.com/course/typescript-course/' }],
  },
  {
    id: 'react',
    category: 'frontend',
    skill: 'React JS',
    icon: '⚛️',
    title: 'ReactJS in Hindi (2023 Updated)',
    instructor: 'Anil Dollor',
    provider: 'Udemy',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/reactjs-in-hindi-2023-updated-by-anil-dollor/',
      },
    ],
  },
  {
    id: 'nextjs',
    category: 'frontend',
    skill: 'Next.js',
    icon: '▲',
    title: 'Next.js Fullstack Development (2023)',
    instructor: 'Anil Dollor',
    provider: 'Udemy',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/nextjs-fullstack-development-2023-by-anil-dollor/',
      },
    ],
  },
  {
    id: 'react-native',
    category: 'frontend',
    skill: 'React Native',
    icon: '📱',
    title: 'React Native — Cohort & Complete Course',
    instructor: 'ChaiCode · Stephen Grider',
    provider: 'ChaiCode + Udemy',
    note: 'A structured cohort plus a deep Udemy course covering React Native and Redux.',
    links: [
      {
        label: 'ChaiCode Mobile Cohort',
        url: 'https://courses.chaicode.com/learn/home/mobile-development-cohort/mobile-app-development-cohort/',
      },
      {
        label: 'Complete React Native + Redux (Udemy)',
        url: 'https://www.udemy.com/course/the-complete-react-native-and-redux-course/',
      },
    ],
  },

  // ---------------- Java & Backend ----------------
  {
    id: 'spring-boot',
    category: 'java-backend',
    skill: 'Spring Boot',
    icon: '🍃',
    title: 'Spring Boot using IntelliJ — Build a Real-World Project',
    provider: 'Udemy',
    coupon: 'CP260518SUMXLD',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/spring-boot-using-intellij-build-a-real-world-project/?couponCode=CP260518SUMXLD',
      },
    ],
  },
  {
    id: 'microservices',
    category: 'java-backend',
    skill: 'Microservices',
    icon: '🧩',
    title: 'Java Spring Boot Microservices with Spring Cloud, K8s & Docker',
    provider: 'Udemy',
    coupon: 'CP260518SUMXLD',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/java-spring-boot-microservices-with-spring-cloud-k8s-docker/?couponCode=CP260518SUMXLD',
      },
    ],
  },
  {
    id: 'jpa',
    category: 'java-backend',
    skill: 'JPA & Hibernate',
    icon: '🗄️',
    title: 'Hibernate & Spring Data JPA: Beginner to Guru',
    instructor: 'Spring Framework Guru',
    provider: 'Udemy',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/hibernate-and-spring-data-jpa-beginner-to-guru',
      },
    ],
  },
  {
    id: 'java-j2ee',
    category: 'java-backend',
    skill: 'Java (J2EE)',
    icon: '☕',
    title: 'Java: The Complete Java Developer Course',
    provider: 'Udemy',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/java-the-complete-java-developer-course/',
      },
    ],
  },
  {
    id: 'java-j2se',
    category: 'java-backend',
    skill: 'Java (J2SE)',
    icon: '☕',
    title: 'Full Stack Java Development in Hindi — Front End & Back End',
    provider: 'Udemy',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/full-stack-java-development-in-hindi-front-end-back-end/',
      },
    ],
  },

  // ---------------- Python & DevOps ----------------
  {
    id: 'python',
    category: 'python-devops',
    skill: 'Python',
    icon: '🐍',
    title: 'Learn Complete Python Tutorial in Simple Way',
    instructor: 'Durgasoft',
    provider: 'Udemy',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/learn-complete-python-tutorial-in-simple-way/',
      },
    ],
  },
  {
    id: 'django',
    category: 'python-devops',
    skill: 'Django',
    icon: '🎸',
    title: 'Python Django — The Practical Guide',
    provider: 'Udemy',
    coupon: 'KEEPLEARNING',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/django-course/?couponCode=KEEPLEARNING',
      },
    ],
  },
  {
    id: 'devops',
    category: 'python-devops',
    skill: 'DevOps',
    icon: '⚙️',
    title: 'Mastering DevOps (2023)',
    instructor: 'Anil Dollor',
    provider: 'Udemy',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/mastering-devops-with-anil-dollor-2023/',
      },
    ],
  },
  {
    id: 'kubernetes',
    category: 'python-devops',
    skill: 'Kubernetes',
    icon: '☸️',
    title: 'Learn Kubernetes',
    provider: 'Udemy',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/learn-kubernetes/',
      },
    ],
  },
  {
    id: 'docker-kubernetes',
    category: 'python-devops',
    skill: 'Docker & Kubernetes',
    icon: '🐳',
    title: 'Docker and Kubernetes for Beginners — DevOps Journey',
    provider: 'Udemy',
    note: 'Beginner-friendly, hands-on journey through Docker and Kubernetes — images, containers, Docker Compose, multi-container apps, and Kubernetes fundamentals.',
    image: '/course-images/docker-kubernetes-devops.jpg',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/docker-and-kubernetes-for-beginners-devops-journey/',
      },
    ],
  },

  // ---------------- DSA & System Design ----------------
  {
    id: 'dsa',
    category: 'cs-interview',
    skill: 'DSA',
    icon: '🧮',
    title: 'Data Structures & Algorithms — Complete Course (C++ & Java)',
    provider: 'Udemy',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/data-structures-and-algorithms-complete-course-cpp-java/',
      },
    ],
  },
  {
    id: 'system-design',
    category: 'cs-interview',
    skill: 'System Design',
    icon: '🏗️',
    title: 'Mastering System Design — From Basics to Cracking Interviews',
    provider: 'Udemy',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/mastering-system-design-from-basics-to-cracking-interviews/',
      },
    ],
  },
];
