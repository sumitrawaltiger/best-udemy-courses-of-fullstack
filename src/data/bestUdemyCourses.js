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
    note: 'Practice hands-on with ChaiCode React Labs — an interactive playground for building React apps.',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/reactjs-in-hindi-2023-updated-by-anil-dollor/',
      },
      {
        label: 'ChaiCode React Labs',
        url: 'https://react.chaicode.com/',
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
    title: 'Complete Mobile Developer Course with AI Projects',
    provider: 'Udemy',
    note: 'The recommended pick — build cross-platform mobile apps end to end with React Native and Expo, including AI-powered projects. Cohort and Redux-focused alternatives are linked too.',
    links: [
      {
        label: 'Complete Mobile Developer + AI (Udemy)',
        url: 'https://www.udemy.com/course/complete-mobile-developer-course-with-ai-projects/',
      },
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
    note: 'Practice hands-on with ChaiCode DSA Labs — an interactive playground for solving DSA problems.',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/data-structures-and-algorithms-complete-course-cpp-java/',
      },
      {
        label: 'ChaiCode DSA Labs',
        url: 'https://dsa.chaicode.com/',
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
    note: '12 must-know system design patterns at a glance — load balancer, API gateway, cache, replication, sharding, message queue, microservices, circuit breaker, event-driven, CQRS, saga, and service mesh.',
    image: '/course-images/system-design-patterns.jpg',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/mastering-system-design-from-basics-to-cracking-interviews/',
      },
    ],
  },
  {
    id: 'js-dsa',
    category: 'cs-interview',
    skill: 'JavaScript DSA (100-Day)',
    icon: '🧠',
    title: '100 Days of Code: JavaScript Data Structures and Algorithms',
    instructor: 'Elshad Karimov',
    provider: 'Udemy',
    note: 'A 100-day JavaScript DSA phase (28 Feb – 7 Jun 2029, carved from the interview-prep window) — data structures & algorithms from zero to hero with 100+ LeetCode / FAANG-style interview questions and Big-O analysis. 4.6★.',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/javascript-data-structures-and-algorithms/',
      },
    ],
  },
  {
    id: 'react-bootcamp',
    category: 'cs-interview',
    skill: 'React Projects (50-Day Bootcamp)',
    icon: '⚛️',
    title: '50 Days React Bootcamp: Build 50 Real World React Projects',
    instructor: 'Sufa Digital',
    provider: 'Udemy',
    note: 'A 50-day React project bootcamp (8 Jun – 27 Jul 2029, carved from the interview-prep window) — build 50 real-world React apps with Hooks, REST APIs, Socket, Firebase, and Bootstrap.',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/build-real-world-application-projects-using-react/',
      },
    ],
  },
  {
    id: 'python-bootcamp',
    category: 'cs-interview',
    skill: 'Python (100-Day Bootcamp)',
    icon: '🐍',
    title: '100 Days of Code: The Complete Python Pro Bootcamp',
    instructor: 'Dr. Angela Yu',
    provider: 'Udemy',
    note: 'A 100-day Python pro bootcamp (28 Jul – 4 Nov 2029, carved from the interview-prep window) — build 100 projects across automation, web dev (Flask), data science (Pandas/NumPy), and games. 52 hours, Bestseller.',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/100-days-of-code/',
      },
    ],
  },
  {
    id: 'js-bootcamp',
    category: 'cs-interview',
    skill: 'JavaScript (100-Day Bootcamp)',
    icon: '🟨',
    title: '100 Days of JavaScript',
    instructor: 'Ewomazino Akpareva',
    provider: 'Udemy',
    note: 'A 100-day JavaScript project bootcamp (5 Nov 2029 – 12 Feb 2030, carved from the interview-prep window) — sharpen JS skills by building projects with HTML, CSS, Flexbox, Grid, Bootstrap, ES6 classes, and DOM manipulation. 60.5 hours.',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/100-days-of-javascript/',
      },
    ],
  },
  {
    id: 'leetcode-java',
    category: 'cs-interview',
    skill: 'LeetCode in Java (50-Day)',
    icon: '🧩',
    title: 'LeetCode in Java: Algorithms Coding Interview Questions',
    instructor: 'Holczer Balazs',
    provider: 'Udemy',
    note: 'A 50-day LeetCode grind in Java (13 Feb – 3 Apr 2030, carved from the interview-prep window) — algorithms, data structures, and the coding-interview questions companies ask, solved and explained step by step.',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/leetcode-in-java-algorithms-coding-interview-questions/',
      },
    ],
  },
  {
    id: 'java-masterclass',
    category: 'cs-interview',
    skill: 'Java Masterclass (60-Day)',
    icon: '☕',
    title: '60 Days of Java: The Complete Java Masterclass',
    instructor: 'Denis Panjuta',
    provider: 'Udemy',
    note: 'A 60-day complete Java masterclass (4 Apr – 2 Jun 2030, carved from the interview-prep window) — master Java from basics to advanced with OOP, JavaFX desktop apps, Spring Boot, REST APIs, microservices, and database handling. 49.5 hours.',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/javamasterclass/',
      },
    ],
  },
  {
    id: 'js-projects-30',
    category: 'cs-interview',
    skill: '30 JS Projects (30-Day)',
    icon: '🟨',
    title: '30 JavaScript Projects in 30 Days – HTML, CSS & JS',
    instructor: 'Course Max One',
    provider: 'Udemy',
    note: 'A 30-day project sprint (3 Jun – 2 Jul 2030, carved from the interview-prep window) — build 30 unique real-world apps from scratch and grow a web-developer portfolio while strengthening core JavaScript, HTML, and CSS. 6.5 hours.',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/30-javascript-projects-in-30-days/',
      },
    ],
  },
  {
    id: 'js-two-week',
    category: 'cs-interview',
    skill: 'JavaScript (2-Week Bootcamp)',
    icon: '🟨',
    title: 'Learn JavaScript in 2 Weeks (Complete JavaScript Bootcamp)',
    instructor: 'Fabian & Pavel Coding2GO',
    provider: 'Udemy',
    note: 'The final phase of the journey (3 Jul – 16 Jul 2030, 14 days) — JavaScript from the very beginning to advanced: data types, loops, functions, arrays, objects, the DOM, events, forms, and hands-on projects.',
    links: [
      {
        label: 'View on Udemy',
        url: 'https://www.udemy.com/course/javascript-course-coding2go/',
      },
    ],
  },
];
