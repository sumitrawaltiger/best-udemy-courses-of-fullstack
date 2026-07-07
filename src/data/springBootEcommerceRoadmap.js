// EmbarkX (Faisal Memon) — Spring Boot Full-Stack E-Commerce Roadmap.
// A 72-day, 10-phase plan to build a production-grade e-commerce website
// (Spring Boot backend → React frontend → full-stack integration → AI & deploy).

export const ROADMAP_INTRO = {
  tagline: 'Build a production-grade Full-Stack E-Commerce website, step by step.',
  note:
    'A 10-phase, 72-day roadmap that takes you from backend fundamentals to a complete, deployed full-stack store — with clear job-readiness milestones at every stage.',
  benefits: [
    'Production-grade e-commerce applications — step by step',
    'Real projects with complete guidance',
    'Go to the next level with production-grade projects',
    'Premium support for all learners',
    '6 months of IntelliJ IDEA Ultimate (Premium) free',
  ],
  roadmapUrl: 'https://embarkx.com/roadmap',
};

// The 5 EmbarkX Udemy courses that power this roadmap (with coupon links).
export const EMBARKX_COURSES = [
  {
    num: 1,
    title: 'Spring Boot: Professional Full Stack eCommerce Project Masterclass',
    duration: '90+ Hours',
    focus: 'Build a complex Full-Stack e-commerce project step by step',
    url: 'https://link.embarkx.com/spring-boot',
    note: 'Ideal for beginners getting started with Spring Boot + Full-Stack development. Build a fully functional FULL STACK E-Commerce website from scratch — covers JavaScript and React from beginner to advanced.',
    badge: 'Start here',
  },
  {
    num: 2,
    title: 'Spring Boot Microservices Professional eCommerce Masterclass',
    duration: '70+ Hours',
    focus: 'Build an e-commerce application using Microservices architecture',
    url: 'https://link.embarkx.com/microservices',
    note: 'Best if you already know Spring Boot and want to transition from a monolith to microservices.',
  },
  {
    num: 3,
    title: 'Spring Security with React JS + OAuth2',
    duration: '34+ Hours',
    focus: 'Security, authentication, OAuth2, React integration, Multi-Factor Authentication',
    url: 'https://link.embarkx.com/spring-security',
    note: 'Master modern authentication and authorization in full-stack applications — MFA and token management.',
  },
  {
    num: 4,
    title: 'Full Stack AI DevOps Course with AWS, GCP, Azure',
    duration: '25+ Hours',
    focus: 'DevOps tools, AI, and multi-cloud technology',
    url: 'https://link.embarkx.com/devops',
    note: 'Become future-ready and master DevOps tools with multi-cloud knowledge.',
  },
  {
    num: 5,
    title: 'Spring Boot Data JPA & Hibernate',
    duration: '~15 Hours',
    focus: 'Data persistence, ORM, JPA & Hibernate — basics to advanced',
    url: 'https://link.embarkx.com/jpa',
    note: 'An in-depth guide to JPA and Hibernate to help you master persistence.',
  },
];

// 10 phases · 72 days. `outcome` marks the job-readiness milestone unlocked at
// that phase; `skills` are the skills gained across it.
export const ROADMAP_PHASES = [
  {
    num: 1,
    title: 'Backend Fundamentals',
    days: 'Days 1–12',
    track: 'backend',
    outcome: 'Junior Backend Developer',
    outcomeNote: 'Basic Spring Boot',
    skills: [
      'Development environment',
      'Internet fundamentals',
      'Dependency Injection',
      'Spring Core concepts',
      'REST API development',
      'Spring Boot basics',
      'Database concepts',
    ],
    groups: [
      {
        days: 'Day 1–2',
        title: 'Introduction & Setup',
        sections: [
          'Introduction and Setup',
          'Basics of Web Development and the Internet | Pre Spring Boot',
        ],
      },
      {
        days: 'Day 3–5',
        title: 'Spring Framework Basics',
        sections: [
          'Spring Framework — The Basics | Before Spring Boot',
          'Spring Framework: Working with Spring Annotations',
        ],
      },
      {
        days: 'Day 6–8',
        title: 'First REST API',
        sections: ['Spring Boot 101: Building Our First REST API'],
      },
      {
        days: 'Day 9–12',
        title: 'E-Commerce Kickoff',
        sections: [
          'Getting Started With the Ecommerce Application | Building the Category Module',
          'Fundamentals of Databases and Persistence',
        ],
      },
    ],
  },
  {
    num: 2,
    title: 'Database & Persistence',
    days: 'Days 13–18',
    track: 'backend',
    outcome: 'Mid-Level Backend Developer',
    outcomeNote: 'Security + complex features',
    skills: [
      'ORM concepts',
      'Code optimization',
      'Data validation',
      'Performance optimization',
      'Complex data modeling',
      'Business logic',
      'Enterprise security',
      'Authentication / Authorization',
    ],
    groups: [
      {
        days: 'Day 13–15',
        title: 'JPA & Lombok',
        sections: [
          'Getting Started with JPA | Jakarta Persistence API',
          'Reduce Boilerplate Code: Introducing Lombok',
        ],
      },
      {
        days: 'Day 16–18',
        title: 'Validation, Pagination & Sorting',
        sections: [
          'Validations in Spring Boot API | Backend Validations',
          'Implementing Pagination and Sorting in Our Ecommerce Project',
        ],
      },
    ],
  },
  {
    num: 3,
    title: 'Advanced Backend',
    days: 'Days 19–25',
    track: 'backend',
    groups: [
      {
        days: 'Day 19–21',
        title: 'Entities & Relationships',
        sections: [
          'Working with Multiple Entities and Relationships with JPA',
          'Managing Products in Our Ecommerce Application',
        ],
      },
      {
        days: 'Day 22–25',
        title: 'Spring Security',
        sections: [
          'Spring Security | Securing Our Spring Boot Application',
          'Managing User Profiles and Roles | User Management for Spring Security',
          'Implementing Our Own Custom Authentication in the E-commerce App',
        ],
      },
    ],
  },
  {
    num: 4,
    title: 'E-Commerce Backend',
    days: 'Days 26–30',
    track: 'backend',
    outcome: 'Senior Backend Developer',
    outcomeNote: 'Complete backend skills',
    skills: [
      'Complex business logic',
      'Multi-database support',
      'Payment processing',
      'Cloud deployment',
      'API documentation',
      'Interview preparation',
    ],
    groups: [
      {
        days: 'Day 26–28',
        title: 'Cart & Databases',
        sections: [
          'Implementing Shopping Cart in the Ecommerce Application',
          'Different Databases — PostgreSQL and MySQL',
        ],
      },
      {
        days: 'Day 29–30',
        title: 'Orders, Payments & AWS',
        sections: [
          'Manage User Address to Ship Orders',
          'Orders and Payments in Our Ecommerce Application',
          'Deploying on AWS | Deploy Spring Boot Application on AWS',
        ],
      },
    ],
  },
  {
    num: 5,
    title: 'Backend Completion',
    days: 'Days 31–32',
    track: 'backend',
    groups: [
      {
        days: 'Day 31–32',
        title: 'Docs & Interview Simulation',
        sections: [
          'API Documentation with Swagger and Spring Boot',
          'Prove Your Backend Skills | Backend Interview Simulation',
        ],
      },
    ],
  },
  {
    num: 6,
    title: 'React Fundamentals',
    days: 'Days 33–40',
    track: 'frontend',
    outcome: 'Junior Full-Stack Developer',
    outcomeNote: 'React basics',
    skills: [
      'React fundamentals',
      'Component architecture',
      'Advanced React concepts',
      'State management',
    ],
    groups: [
      {
        days: 'Day 33–35',
        title: 'React Beginner',
        sections: [
          "Don't Skip | Becoming a Spring Boot Full-Stack Java Developer | A Note",
          '[React Beginner] Introduction to React',
          '[React Beginner] Getting Started with JSX',
          '[React Beginner] Components and Props in React',
        ],
      },
      {
        days: 'Day 36–40',
        title: 'React Hooks',
        sections: [
          '[React Intermediate] Introduction to React Hooks',
          '[React Intermediate] Introduction to the useEffect Hook',
          '[React Intermediate] Introduction to the useRef Hook',
          '[React Intermediate] Introduction to the useContext Hook',
        ],
      },
    ],
  },
  {
    num: 7,
    title: 'Advanced React',
    days: 'Days 41–48',
    track: 'frontend',
    outcome: 'Mid-Level Full-Stack Developer',
    outcomeNote: 'Advanced React',
    skills: [
      'Custom hooks',
      'API integration',
      'Styling',
      'Navigation',
      'Global state management',
    ],
    groups: [
      {
        days: 'Day 41–44',
        title: 'Hooks, APIs, Forms & Tailwind',
        sections: [
          '[React Advance] Custom Hooks in React',
          '[React Advance] APIs and React',
          '[React Advance] React Hook Forms',
          '[React Advance] React with Tailwind CSS',
        ],
      },
      {
        days: 'Day 45–48',
        title: 'Routing & Redux',
        sections: [
          '[React Advance] Routing with React',
          '[React Advance] React Router Hooks to Know',
          '[React Advance] Redux',
        ],
      },
    ],
  },
  {
    num: 8,
    title: 'Full-Stack Integration',
    days: 'Days 49–65',
    track: 'fullstack',
    outcome: 'Senior Full-Stack Developer',
    outcomeNote: 'Complete e-commerce',
    skills: [
      'Implementing what you learned into a project',
      'Understanding how things work in a real project',
      'Payment processing',
      'Authentication flow',
    ],
    groups: [
      {
        days: 'Day 49–55',
        title: 'Storefront & Cart',
        sections: [
          'Setting up the Project & Building the Home Page',
          'Building the Product Storefront',
          'Building the Home Page and Navigation',
          'Building an Advanced Shopping Cart Using React + Redux',
        ],
      },
      {
        days: 'Day 56–65',
        title: 'Auth, Checkout & Stripe',
        sections: [
          'Authenticating Users on the Frontend Using React',
          'Checkout Flow on the Frontend Using React',
          'Payment [Stripe] Integration on the Frontend Using React',
        ],
      },
    ],
  },
  {
    num: 9,
    title: 'Admin & Seller Panels',
    days: 'Days 66–69',
    track: 'fullstack',
    outcome: 'Enterprise Full-Stack Developer',
    outcomeNote: 'AI + modern deployment',
    skills: ['Role-based access', 'Admin interfaces', 'AI integration', 'Modern deployment'],
    groups: [
      {
        days: 'Day 66–69',
        title: 'Role-Based Panels',
        sections: [
          'Building a Full-Stack Admin Panel with Role-Based Authorization',
          'Building a Full-Stack Seller Panel with Role-Based Authorization',
        ],
      },
    ],
  },
  {
    num: 10,
    title: 'AI Integration & Deployment',
    days: 'Days 70–72',
    track: 'fullstack',
    groups: [
      {
        days: 'Day 70–72',
        title: 'Spring AI & Free Deployment',
        sections: [
          'Welcome to the World of AI | Building Applications using Spring AI',
          'Welcome to the World of AI | Building an Audio Transcriber | Spring AI',
          'TIPS: Deploying Full-Stack Applications for FREE',
        ],
      },
    ],
  },
];

export const ROADMAP_TOTAL_DAYS = 72;
export const ROADMAP_TOTAL_PHASES = ROADMAP_PHASES.length;
