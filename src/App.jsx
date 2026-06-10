import { useState } from 'react';

// ── 35 COURSES · 1095 HOURS · JUN 10 2026 → JUN 9 2027 ─────────────────────
const PHASES = [
  {
    id: 'react',
    name: 'React',
    icon: '⚛',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    days: 92,
    hours: 276,
    courseCount: 6,
    startDate: 'Jun 10, 2026',
    endDate: 'Sep 9, 2026',
    offset: 0,
    note: 'Maximum allocation — 276h, 6 courses. Start here. Jonas first, then Max reinforces with a different angle, then John Smilga for project practice. Anil Dollor courses add Hindi explanations. Interview prep in the final days.',
    courses: [
      {
        n: 1,
        h: 84,
        rating: 4.7,
        rev: '16K+',
        stu: '114K+',
        title: 'The Ultimate React Course 2025',
        by: 'Jonas Schmedtmann',
        url: 'https://www.udemy.com/course/the-ultimate-react-course/',
        tag: '🥇 START HERE',
        tagC: '#15803D',
        covers:
          'Components→Hooks→React Query→Redux Toolkit→Tailwind→Advanced Patterns→16h Next.js bonus',
        why: 'Best React course on Udemy. 1.9M+ total students across all Jonas courses. Project-heavy — 5 real apps. Includes 16h Next.js bonus. The only course that teaches you to THINK in React.',
        period: 'Days 1–28',
      },
      {
        n: 2,
        h: 68,
        rating: 4.7,
        rev: '205K+',
        stu: '780K+',
        title: 'React — The Complete Guide 2025',
        by: 'Maximilian Schwarzmüller',
        url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
        tag: '🥈 SECOND',
        tagC: '#0369A1',
        covers:
          'Class→Functional evolution, TypeScript in React, Animations, Jest+RTL testing, CI/CD deploy',
        why: "780K+ students. Max teaches differently to Jonas — covering both gives double depth on every concept. Essential TypeScript + React testing content Jonas doesn't cover.",
        period: 'Days 29–51',
      },
      {
        n: 3,
        h: 50,
        rating: 4.6,
        rev: '25K+',
        stu: '90K+',
        title: 'React Tutorial & Projects Course 2025',
        by: 'John Smilga',
        url: 'https://www.udemy.com/course/react-tutorial-and-projects-course/',
        tag: '🏗️ PROJECTS',
        tagC: '#7C3AED',
        covers:
          '15 real-world React projects, TypeScript integration, full-stack React apps with APIs',
        why: 'John Smilga is exceptional for project-based reinforcement. 15 projects solidify everything Jonas and Max taught. Build your portfolio while watching.',
        period: 'Days 52–68',
      },
      {
        n: 4,
        h: 28,
        rating: 4.5,
        rev: '8K+',
        stu: '20K+',
        title: 'Frontend Development with ReactJS 2026',
        by: 'Anil Dollor',
        url: 'https://www.udemy.com/course/frontend-development-with-reactjs-2026-by-anil-dollor/',
        tag: '🇮🇳 HINDI',
        tagC: '#D97706',
        covers:
          'Latest 2026 React patterns, Hindi explanations, modern project structure, Vite setup',
        why: "2026 curriculum — newest patterns. Hindi explanations make complex hooks click instantly. Perfect for revisiting concepts that didn't land in English.",
        period: 'Days 69–77',
      },
      {
        n: 5,
        h: 35,
        rating: 4.6,
        rev: '10K+',
        stu: '30K+',
        title: 'Complete React + Next.js + AI Projects',
        by: 'Anil Dollor',
        url: 'https://www.udemy.com/course/complete-react-and-nextjs-course-with-ai-powered-projects/',
        tag: '🤖 AI PROJECTS',
        tagC: '#7C3AED',
        covers:
          'AI-powered React projects, React Native chapters (use later for RN phase), Next.js integration',
        why: 'AI + React integration — the most future-proof React course. React Native chapters in this course serve as your RN phase prep. Plus Hindi explanations.',
        period: 'Days 78–89',
      },
      {
        n: 6,
        h: 11,
        rating: 4.4,
        rev: '5K+',
        stu: '15K+',
        title: 'React Interview Masterclass — 200 Questions (Hindi)',
        by: 'Hindi Instructor',
        url: 'https://www.udemy.com/course/react-interview-masterclass-top-200-questions-in-hindi/',
        tag: '🎯 INTERVIEW',
        tagC: '#6D28D9',
        covers:
          '200 React Q&A, Virtual DOM, reconciliation, fiber, hooks rules, performance patterns',
        why: 'Your final exam for the React phase. 200 Q&A consolidates everything before moving on. Hindi makes tricky concepts crystal clear.',
        period: 'Days 90–92',
      },
    ],
  },
  {
    id: 'rn',
    name: 'React Native',
    icon: '📱',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    days: 28,
    hours: 84,
    courseCount: 3,
    startDate: 'Sep 10, 2026',
    endDate: 'Oct 7, 2026',
    offset: 92,
    note: '3 courses, 84h exactly. Stephen Grider at 4.8★ is the highest-rated RN course on Udemy. Max Schwarzmüller provides a different perspective. Best RN Course 2025 covers Firebase+AI. All 3 together cover every angle of React Native.',
    courses: [
      {
        n: 1,
        h: 38,
        rating: 4.8,
        rev: '45K+',
        stu: '197K+',
        title: 'The Complete React Native + Hooks Course',
        by: 'Stephen Grider',
        url: 'https://www.udemy.com/course/the-complete-react-native-and-redux-course/',
        tag: '🥇 PRIMARY',
        tagC: '#15803D',
        covers:
          'Core components, StyleSheet, Flexbox, FlatList, Navigation, Redux, REST APIs, Expo, EAS Build',
        why: "Highest-rated RN course: 4.8★, 45K reviews, 197K students. Updated Dec 2025. Stephen Grider is one of Udemy's elite instructors. iOS + Android + TestFlight.",
        period: 'Days 1–13',
      },
      {
        n: 2,
        h: 22,
        rating: 4.6,
        rev: '20K+',
        stu: '45K+',
        title: 'React Native — The Practical Guide 2025',
        by: 'Maximilian Schwarzmüller',
        url: 'https://www.udemy.com/course/react-native-the-practical-guide/',
        tag: '🥈 SECOND',
        tagC: '#0369A1',
        covers:
          'Deep Flexbox, Custom animations, Context API in RN, Device APIs, local+push notifications',
        why: "Max's RN course teaches what Grider doesn't — deep animations with Animated API, device APIs (camera, location), different navigation patterns.",
        period: 'Days 14–21',
      },
      {
        n: 3,
        h: 24,
        rating: 4.5,
        rev: '331+',
        stu: '5K+',
        title: 'The Best React Native Course 2025 (Beginner to Expert)',
        by: 'Multiple Instructors',
        url: 'https://www.udemy.com/course/the-best-react-native-course/',
        tag: '🤖 FIREBASE+AI',
        tagC: '#7C3AED',
        covers:
          'Redux Toolkit in RN, Firebase AI integration, localization, multi-language, Expo vs CLI',
        why: 'Covers Firebase AI + Redux Toolkit in RN — cutting edge. Localization for multi-language apps (critical for airline clients like DLH/KLM). Fills Grider+Max gaps.',
        period: 'Days 22–28',
      },
    ],
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    icon: '▲',
    color: '#374151',
    dark: '#111827',
    bg: '#F9FAFB',
    border: '#D1D5DB',
    days: 35,
    hours: 105,
    courseCount: 4,
    startDate: 'Oct 8, 2026',
    endDate: 'Nov 11, 2026',
    offset: 120,
    note: "4 courses, 105h. You already have 16h Next.js from Jonas React course. Max's dedicated course + John Smilga projects + Anil Dollor Hindi + Traversy crash course. These 4 together give theory, projects, Hindi reinforcement, and quick-reference content.",
    courses: [
      {
        n: 1,
        h: 25,
        rating: 4.7,
        rev: '30K+',
        stu: '200K+',
        title: 'Next.js & React — The Complete Guide (incl. Two Paths)',
        by: 'Maximilian Schwarzmüller',
        url: 'https://www.udemy.com/course/nextjs-react-the-complete-guide/',
        tag: '🥇 PRIMARY',
        tagC: '#15803D',
        covers:
          'App Router vs Pages Router, Server Components, Server Actions, NextAuth v5, Prisma ORM, Caching',
        why: '200K students, 4.7★. Best dedicated Next.js 15 course. Two learning paths (full or summary). App Router + Server Actions + auth all covered deeply.',
        period: 'Days 1–9',
      },
      {
        n: 2,
        h: 32,
        rating: 4.6,
        rev: '25K+',
        stu: '90K+',
        title: 'React Tutorial & Projects — Next.js Sections',
        by: 'John Smilga',
        url: 'https://www.udemy.com/course/react-tutorial-and-projects-course/',
        tag: '🏗️ PROJECTS',
        tagC: '#7C3AED',
        covers:
          '6 full-stack Next.js apps: e-commerce, auth system, blog, dashboard, CRUD with PostgreSQL',
        why: 'Use ONLY the Next.js project sections (~32h). John Smilga builds complete production apps — this cements what Max taught. Best project practice available.',
        period: 'Days 10–20',
      },
      {
        n: 3,
        h: 30,
        rating: 4.5,
        rev: '5K+',
        stu: '20K+',
        title: 'Next.js Full Stack Development 2023',
        by: 'Anil Dollor',
        url: 'https://www.udemy.com/course/nextjs-fullstack-development-2023-by-anil-dollor',
        tag: '🇮🇳 HINDI',
        tagC: '#D97706',
        covers:
          'App Router, API Routes, Server Actions, Prisma, deployment, full-stack Hindi walkthrough',
        why: "Hindi full-stack Next.js course. Anil explains deployment and full-stack patterns very clearly. Great for revision and for concepts that didn't click in English.",
        period: 'Days 21–30',
      },
      {
        n: 4,
        h: 18,
        rating: 4.6,
        rev: '10K+',
        stu: '25K+',
        title: 'Next.js 15 Crash to Pro',
        by: 'Traversy Media',
        url: 'https://www.udemy.com/course/nextjs-course/',
        tag: '⚡ QUICK REF',
        tagC: '#059669',
        covers:
          'Next.js 15 latest features, App Router recap, quick project builds, modern best practices',
        why: 'Brad Traversy is one of the most trusted web dev educators. Short, dense, perfectly complements the longer courses. Great for the final week of Next.js phase.',
        period: 'Days 31–35',
      },
    ],
  },
  {
    id: 'spring',
    name: 'Spring Boot',
    icon: '🌱',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    days: 98,
    hours: 294,
    courseCount: 7,
    startDate: 'Nov 12, 2026',
    endDate: 'Feb 17, 2027',
    offset: 155,
    note: 'Largest allocation — 294h, 7 courses. Java 8 fast-track → JPA/Hibernate → Spring Boot practical → Spring internals → Spring Boot master class → Spring Security → Spring Boot 4 projects. 14 weeks of deep Java backend mastery.',
    courses: [
      {
        n: 1,
        h: 20,
        rating: 4.5,
        rev: '15K+',
        stu: '80K+',
        title: 'Java 8 New Features in Simple Way',
        by: 'Navin Reddy — Telusko',
        url: 'https://www.udemy.com/course/java-8-new-features-in-simple-way/',
        tag: '☕ JAVA FAST-TRACK',
        tagC: '#D97706',
        covers:
          'Lambdas, Functional interfaces (Predicate/Function/Consumer), Streams API, Optional, CompletableFuture',
        why: 'With C# background, Java OOP takes 1 day. Focus 100% on Java 8 features — used in every Spring Boot app. Streams API alone is 40% of Spring Data JPA usage. Complete in 7 days.',
        period: 'Days 1–7',
      },
      {
        n: 2,
        h: 73,
        rating: 4.5,
        rev: '8K+',
        stu: '30K+',
        title: 'Hibernate & Spring Data JPA: Beginner to Guru',
        by: 'John Thompson (Spring Framework Guru)',
        url: 'https://www.udemy.com/course/hibernate-and-spring-data-jpa-beginner-to-guru/',
        tag: '🗄️ JPA CORE',
        tagC: '#15803D',
        covers:
          'Entity mapping, all 4 relationships, N+1 problem, @EntityGraph, JPQL, Criteria API, @Transactional, Flyway',
        why: "Most comprehensive JPA course on Udemy. Don't skip — JPA knowledge is what separates Spring Boot users from Spring Boot experts. Every FPO DynamoDB pattern has a JPA equivalent here.",
        period: 'Days 8–31',
      },
      {
        n: 3,
        h: 34,
        rating: 4.6,
        rev: '12K+',
        stu: '40K+',
        title: 'Spring Boot with IntelliJ — Build Real-World Project',
        by: 'Ranga Karanam (in28minutes)',
        url: 'https://www.udemy.com/course/spring-boot-using-intellij-build-a-real-world-project/',
        tag: '🚀 PRACTICAL FIRST',
        tagC: '#15803D',
        covers:
          'REST API from scratch, Spring Data JPA, Spring Security JWT, Docker, Actuator, real-world project',
        why: 'Do Ranga before Thompson — practical first, internals second. Working production app in 11 days. IntelliJ free version. Ranga is the most student-friendly Spring instructor.',
        period: 'Days 32–42',
      },
      {
        n: 4,
        h: 53,
        rating: 4.6,
        rev: '10K+',
        stu: '35K+',
        title: 'Spring Framework 6: Beginner to Guru',
        by: 'John Thompson (Spring Framework Guru)',
        url: 'https://www.udemy.com/course/spring-framework-6-beginner-to-guru/',
        tag: '🔬 DEEP INTERNALS',
        tagC: '#0369A1',
        covers:
          'IoC/DI internals, AOP, full testing pyramid (MockMvc+Testcontainers+Kafka), Spring Security OAuth2, GraalVM',
        why: 'John Thompson explains WHY Spring works. IoC container, bean lifecycle, AOP, full testing. Spring Security with Cognito OAuth2 Resource Server = exactly FPO pattern. GraalVM native = Lambda cold start fix.',
        period: 'Days 43–59',
      },
      {
        n: 5,
        h: 51,
        rating: 4.6,
        rev: '30K+',
        stu: '150K+',
        title: 'Master Spring Boot 3 & Spring Framework 6',
        by: 'Ranga Karanam (in28minutes)',
        url: 'https://www.udemy.com/course/spring-boot-and-spring-framework-tutorial-for-beginners/',
        tag: '🎓 MASTER CLASS',
        tagC: '#7C3AED',
        covers:
          'Full-stack Spring+React, Spring AOP, Spring Security, Docker+Maven+Gradle, REST API complete',
        why: "150K+ students, 4.6★. Ranga's most comprehensive course. Covers full-stack Spring + React integration — directly relevant to connecting your React frontend to Spring Boot backend.",
        period: 'Days 60–76',
      },
      {
        n: 6,
        h: 35,
        rating: 4.7,
        rev: '15K+',
        stu: '60K+',
        title: 'Spring Security Zero to Master — Eazy Bytes',
        by: 'Madan Reddy (Eazy Bytes)',
        url: 'https://www.udemy.com/course/spring-security-zero-to-master/',
        tag: '🔐 SECURITY',
        tagC: '#DC2626',
        covers:
          'Spring Security 6, JWT, OAuth2, OpenID Connect, Keycloak, method security, CORS, CSRF',
        why: 'Best dedicated Spring Security course. Covers JWT + OAuth2 + Keycloak — the exact auth stack FPO uses with Cognito. Madan Reddy is exceptional at security explanations.',
        period: 'Days 77–88',
      },
      {
        n: 7,
        h: 28,
        rating: 4.6,
        rev: '8K+',
        stu: '50K+',
        title: 'Spring 7 & Spring Boot 4 for Beginners (8 Projects)',
        by: 'Multiple Instructors',
        url: 'https://www.udemy.com/course/learn-spring-boot/',
        tag: '🏗️ 8 PROJECTS',
        tagC: '#D97706',
        covers:
          'Spring Boot 4 latest, Spring 7, WebFlux reactive, 8 complete projects, Full Stack React+Spring',
        why: 'Latest Spring Boot 4 + Spring 7 — cutting edge curriculum. 8 projects reinforce everything you learned. WebFlux reactive programming bonus. Perfect phase finale.',
        period: 'Days 89–98',
      },
    ],
  },
  {
    id: 'micro',
    name: 'Microservices',
    icon: '🏛',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    days: 49,
    hours: 147,
    courseCount: 6,
    startDate: 'Feb 18, 2027',
    endDate: 'Apr 7, 2027',
    offset: 253,
    note: '6 courses, 147h. Max time dedicated to Microservices. Ranga for Spring Cloud fundamentals, Kargopolov for Kafka+CQRS, Thompson for architecture deep-dive, Sean Campbell for CQRS+Event Sourcing, Max Schwarzmüller for Docker+K8s, KodeKloud for Kubernetes labs.',
    courses: [
      {
        n: 1,
        h: 35,
        rating: 4.6,
        rev: '18K+',
        stu: '45K+',
        title: 'Java Spring Boot Microservices with Spring Cloud, K8s & Docker',
        by: 'Ranga Karanam (in28minutes)',
        url: 'https://www.udemy.com/course/java-spring-boot-microservices-with-spring-cloud-k8s-docker/',
        tag: '🥇 SPRING CLOUD',
        tagC: '#15803D',
        covers:
          'Eureka, Spring Cloud Gateway, Resilience4j, Docker Compose, Kubernetes, Zipkin distributed tracing',
        why: 'Best practical microservices course. Covers exactly what FPO uses: API Gateway, service discovery, circuit breaker, Docker, K8s, distributed tracing. Start here.',
        period: 'Days 1–12',
      },
      {
        n: 2,
        h: 38,
        rating: 4.5,
        rev: '12K+',
        stu: '65K+',
        title: 'Building Microservices with Spring Boot & Spring Cloud',
        by: 'Sergey Kargopolov',
        url: 'https://www.udemy.com/course/building-microservices-with-spring-boot-and-spring-cloud/',
        tag: '📨 KAFKA+CQRS',
        tagC: '#0369A1',
        covers:
          'Apache Kafka deep, RabbitMQ, CQRS + Event Sourcing with Axon, Saga patterns, Spring Cloud Contract',
        why: "Fills Ranga's gaps: deep Kafka, RabbitMQ, CQRS/Event Sourcing with Axon Framework, Saga pattern. Reviewed as 'best microservices course on Udemy' multiple times.",
        period: 'Days 13–25',
      },
      {
        n: 3,
        h: 16,
        rating: 4.4,
        rev: '3K+',
        stu: '10K+',
        title: 'Spring Boot Microservices: Beginner to Guru',
        by: 'John Thompson (Spring Framework Guru)',
        url: 'https://www.udemy.com/course/spring-boot-microservices-with-spring-cloud/',
        tag: '🏗️ ARCHITECTURE',
        tagC: '#7C3AED',
        covers:
          'DDD bounded contexts, microservices architecture principles, Docker Swarm, Cloud deployment',
        why: "John Thompson's architectural perspective on microservices. DDD + bounded contexts section is essential. Short at 16h — do it for the architectural depth Thompson provides.",
        period: 'Days 26–30',
      },
      {
        n: 4,
        h: 20,
        rating: 4.5,
        rev: '5K+',
        stu: '15K+',
        title: 'Master Spring Boot Microservices with CQRS & Event Sourcing',
        by: 'Sean Campbell',
        url: 'https://www.udemy.com/course/master-spring-boot-microservices-with-cqrs-event-sourcing/',
        tag: '🔄 CQRS+ES',
        tagC: '#DC2626',
        covers:
          'CQRS deep-dive, Event Sourcing patterns, Axon Framework, Saga orchestration, OAuth2 between services',
        why: 'Most focused CQRS + Event Sourcing course. Sean Campbell explains patterns brilliantly. Complements Kargopolov perfectly with deeper Axon Framework coverage.',
        period: 'Days 31–37',
      },
      {
        n: 5,
        h: 23,
        rating: 4.7,
        rev: '30K+',
        stu: '160K+',
        title: 'Docker & Kubernetes: The Practical Guide 2025',
        by: 'Maximilian Schwarzmüller',
        url: 'https://www.udemy.com/course/docker-kubernetes-the-practical-guide/',
        tag: '🐳 DOCKER+K8S',
        tagC: '#0369A1',
        covers:
          'Docker multi-stage builds, Docker Compose microservices, K8s Pods/Deployments/Services/Ingress, EKS',
        why: "4.7★, 160K students. Most comprehensive standalone Docker+K8s course. Deep K8s volumes, ConfigMaps, Secrets, AWS EKS. Perfect after Ranga's K8s intro.",
        period: 'Days 38–45',
      },
      {
        n: 6,
        h: 15,
        rating: 4.8,
        rev: '20K+',
        stu: '200K+',
        title: 'Kubernetes for Beginners — with Hands-On Labs',
        by: 'Mumshad Mannambeth (KodeKloud)',
        url: 'https://www.udemy.com/course/learn-kubernetes/',
        tag: '🧪 K8S LABS',
        tagC: '#059669',
        covers:
          'K8s architecture, Pods, ReplicaSets, Deployments, Services, Namespaces — with interactive labs',
        why: "4.8★, 200K students. KodeKloud's interactive labs make K8s hands-on. Best way to solidify K8s concepts learned in Ranga and Max courses. Terminal practice included.",
        period: 'Days 46–49',
      },
    ],
  },
  {
    id: 'python',
    name: 'Agentic AI with Python',
    icon: '🤖',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    days: 28,
    hours: 84,
    courseCount: 4,
    startDate: 'Apr 8, 2027',
    endDate: 'May 5, 2027',
    offset: 302,
    note: '4 cutting-edge Agentic AI courses, 84h exactly. This replaces plain Python scripting with the most in-demand skill of 2026-27: building autonomous AI agents using LangChain, LangGraph, CrewAI, AutoGen and MCP. You already know Python syntax from JavaScript/Java — jump straight into AI agent frameworks. By May 5 you will be able to build, deploy and orchestrate production-grade AI agents.',
    courses: [
      {
        n: 1,
        h: 30,
        rating: 4.7,
        rev: '15K+',
        stu: '50K+',
        title: 'The Complete Agentic AI Engineering Course 2026',
        by: 'Ed Donner',
        url: 'https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/',
        tag: '🥇 START HERE',
        tagC: '#15803D',
        covers:
          '8 real-world agent projects: Career Digital Twin, SDR Agent, Deep Research, Stock Picker, Engineering Team (CrewAI), Browser Agent (LangGraph), OpenAI Agents SDK, MCP integration',
        why: 'THE flagship Agentic AI course of 2026. OpenAI Agents SDK + CrewAI + LangGraph + AutoGen + MCP in one 30h course. Build 8 production projects. Ed Donner is an ex-FAANG engineer. Most up-to-date course on the market — covers 2026 tools.',
      },
      {
        n: 2,
        h: 22,
        rating: 4.7,
        rev: '14K+',
        stu: '114K+',
        title: 'LangChain: Develop LLM Powered Applications',
        by: 'Eden Marco',
        url: 'https://www.udemy.com/course/langchain/',
        tag: '🥈 LANGCHAIN CORE',
        tagC: '#0369A1',
        covers:
          'LangChain fundamentals, chains, agents, RAG pipelines, vector databases (Pinecone, FAISS), memory patterns, tool calling, production LLM apps',
        why: '4.7★, 114K students — most enrolled LangChain course on Udemy. Eden Marco is the LangChain go-to instructor. Essential because LangChain underpins everything in LangGraph. RAG + vector databases covered deeply.',
      },
      {
        n: 3,
        h: 18,
        rating: 4.8,
        rev: '1K+',
        stu: '6K+',
        title: 'Complete Agentic AI Bootcamp — LangGraph + LangChain',
        by: 'Multiple Instructors',
        url: 'https://www.udemy.com/course/complete-agentic-ai-bootcamp-with-langgraph-and-langchain/',
        tag: '🔗 LANGGRAPH DEEP',
        tagC: '#7C3AED',
        covers:
          'LangGraph state machines, graph-based workflows, conditional edges, multi-agent orchestration, ReAct + Reflection architectures, agentic RAG',
        why: '4.8★ — highest rated in this list. LangGraph is the backbone of serious agentic architectures. This bootcamp goes deep on graph-based workflows, state management, and multi-agent coordination — the patterns used in production AI systems.',
      },
      {
        n: 4,
        h: 14,
        rating: 4.6,
        rev: '5K+',
        stu: '35K+',
        title: 'AI Agents: Automation & Business with LangChain & LLMs',
        by: 'Eden Marco',
        url: 'https://www.udemy.com/course/ai-agents-automation-business-with-langchain-llm/',
        tag: '🏗️ BUSINESS AGENTS',
        tagC: '#D97706',
        covers:
          'Business automation agents, LinkedIn/Twitter scrapers, Ice Breaker agent, AutoGen multi-agent teams, LangFlow no-code agents, BabyAGI patterns, Flowise',
        why: "Eden Marco's practical business-focused agent course. Bridges the gap between theory and real business automation. AutoGen, LangFlow, Flowise, BabyAGI — covers every major framework not already covered in courses 1–3.",
      },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps',
    icon: '⚙',
    color: '#EA580C',
    dark: '#C2410C',
    bg: '#FFF7ED',
    border: '#FED7AA',
    days: 35,
    hours: 105,
    courseCount: 5,
    startDate: 'May 6, 2027',
    endDate: 'Jun 9, 2027',
    offset: 330,
    note: "5 courses, 105h — the grand finale. Nana Janashia is the #1 DevOps educator globally. KodeKloud has the best labs. Max Schwarzmüller for Docker+K8s depth. Mumshad's Terraform course for IaC. Anil Dollor wraps it with a Hindi perspective.",
    courses: [
      {
        n: 1,
        h: 40,
        rating: 4.8,
        rev: '20K+',
        stu: '120K+',
        title: 'DevOps Bootcamp — Become a DevOps Engineer',
        by: 'Nana Janashia (TechWorld with Nana)',
        url: 'https://www.udemy.com/course/decodingdevops/',
        tag: '🥇 PRIMARY',
        tagC: '#15803D',
        covers:
          'Linux, Docker multi-stage, K8s production patterns, Jenkins, GitHub Actions, Terraform, AWS ECS/EKS',
        why: '#1 most-recommended DevOps course globally. 4.8★. Crystal-clear diagrams before every tool. Linux→Docker→K8s→CI/CD→AWS. The perfect foundation for DevOps phase.',
        period: 'Days 1–14',
      },
      {
        n: 2,
        h: 25,
        rating: 4.7,
        rev: '15K+',
        stu: '80K+',
        title: 'The Complete DevOps Bootcamp',
        by: 'Mumshad Mannambeth (KodeKloud)',
        url: 'https://www.udemy.com/course/the-complete-devops-bootcamp/',
        tag: '🧪 LABS',
        tagC: '#0369A1',
        covers:
          'Linux, Docker, K8s, Terraform, Ansible interactive labs — real terminal practice on actual systems',
        why: "KodeKloud's interactive labs are unmatched. Real terminal practice simulating production scenarios. Combines with Nana's theory for perfect theory+practice balance.",
        period: 'Days 15–23',
      },
      {
        n: 3,
        h: 23,
        rating: 4.7,
        rev: '30K+',
        stu: '160K+',
        title: 'Docker & Kubernetes: The Practical Guide 2025',
        by: 'Maximilian Schwarzmüller',
        url: 'https://www.udemy.com/course/docker-kubernetes-the-practical-guide/',
        tag: '🐳 DOCKER+K8S',
        tagC: '#7C3AED',
        covers:
          'Docker BuildKit, multi-stage, Docker Compose, K8s volumes/ConfigMaps/Secrets, AWS EKS deployment',
        why: "4.7★, 160K students. Deep Docker+K8s in one course. Use for the specific sections Nana didn't cover deeply: K8s storage, secrets management, and AWS EKS.",
        period: 'Days 24–31',
      },
      {
        n: 4,
        h: 9,
        rating: 4.6,
        rev: '15K+',
        stu: '80K+',
        title: 'Terraform for the Absolute Beginners with Labs',
        by: 'Mumshad Mannambeth (KodeKloud)',
        url: 'https://www.udemy.com/course/terraform-beginner-to-advanced/',
        tag: '🏗️ TERRAFORM',
        tagC: '#059669',
        covers:
          'HCL syntax, resources, variables, outputs, state, modules, AWS provisioning with interactive labs',
        why: 'Short (9h) and highly focused. Terraform IaC is essential for your FPO AWS automation work. KodeKloud labs included make it hands-on from Day 1.',
        period: 'Days 32–34',
      },
      {
        n: 5,
        h: 8,
        rating: 4.6,
        rev: '5K+',
        stu: '25K+',
        title: 'Mastering DevOps with Anil Dollor 2023',
        by: 'Anil Dollor',
        url: 'https://www.udemy.com/course/mastering-devops-with-anil-dollor-2023/',
        tag: '🇮🇳 HINDI RECAP',
        tagC: '#D97706',
        covers:
          'Docker, K8s, Jenkins, GitHub Actions, AWS deployment — complete Hindi walkthrough',
        why: "Hindi DevOps recap for the final day. Anil Dollor's clear explanations tie everything together in your native language. Perfect closure for the entire 365-day journey.",
        period: 'Day 35',
      },
    ],
  },
];

const TOTAL_COURSES = PHASES.reduce((s, p) => s + p.courses.length, 0);

// ── BADGE ────────────────────────────────────────────────────────────────────
function Badge({ text, color }) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: 9,
        fontWeight: 800,
        padding: '2px 8px',
        borderRadius: 20,
        letterSpacing: '0.06em',
        background: color + '18',
        color,
        border: `1px solid ${color}40`,
        whiteSpace: 'nowrap',
      }}
    >
      {text}
    </span>
  );
}

// ── COURSE CARD ──────────────────────────────────────────────────────────────
function CourseCard({ c, phase }) {
  return (
    <a
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'block',
        textDecoration: 'none',
        background: '#FFFFFF',
        border: `1.5px solid ${c.n === 1 ? phase.color + '55' : '#E2E8F0'}`,
        borderRadius: 12,
        padding: '14px 16px',
        boxShadow:
          c.n === 1
            ? `0 4px 16px ${phase.color}10`
            : '0 1px 4px rgba(0,0,0,0.05)',
        transition: 'all 0.18s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `0 8px 24px ${phase.color}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow =
          c.n === 1
            ? `0 4px 16px ${phase.color}10`
            : '0 1px 4px rgba(0,0,0,0.05)';
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 10,
          marginBottom: 6,
        }}
      >
        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 6,
              background: phase.color + '20',
              color: phase.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 11,
              fontWeight: 900,
              flexShrink: 0,
              marginTop: 1,
            }}
          >
            #{c.n}
          </div>
          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: '#0F172A',
              lineHeight: 1.4,
            }}
          >
            {c.title}
          </span>
        </div>
        <span
          style={{
            fontSize: 9,
            fontWeight: 800,
            padding: '2px 8px',
            borderRadius: 20,
            background: c.tagC + '15',
            color: c.tagC,
            border: `1px solid ${c.tagC}30`,
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {c.tag}
        </span>
      </div>
      {/* By line */}
      <div style={{ fontSize: 11, color: '#64748B', marginBottom: 8 }}>
        by {c.by}
      </div>
      {/* Stats */}
      <div
        style={{
          display: 'flex',
          gap: 14,
          flexWrap: 'wrap',
          marginBottom: 8,
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 900, color: phase.color }}>
          ⏱ {c.h}h
        </span>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#F59E0B' }}>
          ★ {c.rating}
        </span>
        <span style={{ fontSize: 11, color: '#64748B' }}>💬 {c.rev}</span>
        <span style={{ fontSize: 11, color: '#64748B' }}>👥 {c.stu}</span>
        <span style={{ fontSize: 10, color: '#94A3B8', marginLeft: 'auto' }}>
          {c.period}
        </span>
      </div>
      {/* Why */}
      <div
        style={{
          fontSize: 11,
          color: '#4338CA',
          lineHeight: 1.65,
          marginBottom: 9,
          background: '#F0F4FF',
          borderRadius: 8,
          padding: '8px 10px',
          border: '1px solid #E0E7FF',
        }}
      >
        💡 {c.why}
      </div>
      {/* Covers */}
      <div
        style={{
          fontSize: 10,
          color: '#64748B',
          lineHeight: 1.6,
          background: '#F8FAFC',
          borderRadius: 7,
          padding: '7px 10px',
          border: '1px solid #F1F5F9',
        }}
      >
        <strong style={{ color: '#374151' }}>Covers: </strong>
        {c.covers}
      </div>
      <div
        style={{
          marginTop: 9,
          fontSize: 10,
          color: '#94A3B8',
          textDecoration: 'underline',
        }}
      >
        → Open on Udemy
      </div>
    </a>
  );
}

// ── PHASE BLOCK ──────────────────────────────────────────────────────────────
function PhaseBlock({ p, isOpen, onToggle }) {
  return (
    <div
      id={'ph-' + p.id}
      style={{
        borderRadius: 16,
        border: `2px solid ${isOpen ? p.color + '70' : p.border}`,
        background: isOpen ? p.bg : '#FFFFFF',
        boxShadow: isOpen
          ? `0 10px 40px ${p.color}12`
          : '0 1px 6px rgba(0,0,0,0.05)',
        overflow: 'hidden',
        transition: 'all 0.25s',
      }}
    >
      {/* ── Header ── */}
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '16px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            flexShrink: 0,
            background: isOpen
              ? `linear-gradient(135deg,${p.color},${p.dark})`
              : p.bg,
            border: `2px solid ${p.color}35`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 26,
            transition: 'all 0.25s',
            boxShadow: isOpen ? `0 6px 20px ${p.color}40` : 'none',
          }}
        >
          {p.icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: 'flex',
              gap: 8,
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: 4,
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 900, color: '#0F172A' }}>
              {p.name}
            </span>
            {(p.id === 'react' || p.id === 'spring' || p.id === 'micro') && (
              <span
                style={{
                  fontSize: 10,
                  padding: '2px 9px',
                  borderRadius: 20,
                  fontWeight: 800,
                  background: '#FEF3C7',
                  color: '#D97706',
                  border: '1px solid #FDE68A',
                }}
              >
                ⭐ MAX TIME
              </span>
            )}
          </div>
          <div style={{ fontSize: 11, color: '#64748B' }}>
            {p.startDate} → {p.endDate} · {p.days} days · {p.courseCount}{' '}
            courses · {p.hours}h total
          </div>
        </div>
        {/* Hours pill */}
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 900,
              color: p.color,
              background: p.color + '12',
              padding: '4px 14px',
              borderRadius: 24,
              border: `1px solid ${p.color}25`,
            }}
          >
            {p.hours}h
          </div>
          <div style={{ fontSize: 9, color: '#94A3B8', marginTop: 2 }}>
            {p.days}d × 3h
          </div>
        </div>
        <span
          style={{
            color: p.color,
            fontSize: 24,
            flexShrink: 0,
            transform: isOpen ? 'rotate(90deg)' : 'none',
            transition: 'transform 0.22s',
            opacity: isOpen ? 1 : 0.3,
          }}
        >
          ›
        </span>
      </button>

      {/* ── Expanded ── */}
      {isOpen && (
        <div
          style={{
            borderTop: `2px solid ${p.color}18`,
            padding: '16px 18px 20px',
          }}
        >
          {/* Note */}
          <div
            style={{
              background: `${p.color}09`,
              border: `1px solid ${p.color}22`,
              borderRadius: 10,
              padding: '12px 14px',
              marginBottom: 14,
              fontSize: 12,
              color: '#374151',
              lineHeight: 1.8,
            }}
          >
            <strong style={{ color: p.color }}>📋 Plan: </strong>
            {p.note}
          </div>

          {/* Phase stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 8,
              marginBottom: 14,
            }}
          >
            {[
              ['📅', p.days + 'd', 'days'],
              ['⏱', '3h', '6–9 AM'],
              ['📚', p.hours + 'h', 'total'],
              ['📖', p.courseCount, 'courses'],
            ].map(([ic, v, l]) => (
              <div
                key={l}
                style={{
                  background: '#F8FAFC',
                  borderRadius: 8,
                  padding: '8px 6px',
                  border: '1px solid #E2E8F0',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 16 }}>{ic}</div>
                <div
                  style={{ fontSize: 14, fontWeight: 800, color: '#0F172A' }}
                >
                  {v}
                </div>
                <div style={{ fontSize: 9, color: '#94A3B8' }}>{l}</div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div style={{ marginBottom: 14 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 4,
              }}
            >
              <span style={{ fontSize: 10, color: '#94A3B8' }}>
                Position in 365-day plan
              </span>
              <span style={{ fontSize: 10, color: p.color, fontWeight: 700 }}>
                {p.startDate} → {p.endDate}
              </span>
            </div>
            <div
              style={{
                height: 8,
                background: '#F1F5F9',
                borderRadius: 4,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  borderRadius: 4,
                  background: `linear-gradient(90deg,${p.color},${p.dark})`,
                  marginLeft: `${(p.offset / 365) * 100}%`,
                  width: `${(p.days / 365) * 100}%`,
                  boxShadow: `0 0 8px ${p.color}50`,
                }}
              />
            </div>
          </div>

          {/* Course list */}
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: '#94A3B8',
              letterSpacing: '0.12em',
              marginBottom: 10,
            }}
          >
            ALL {p.courseCount} COURSES — {p.hours}H TOTAL — CLICK TO OPEN UDEMY
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {p.courses.map((c, i) => (
              <CourseCard key={i} c={c} phase={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [open, setOpen] = useState('react');
  const toggle = (id) => setOpen(open === id ? null : id);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#EEF2FF',
        fontFamily: "'Outfit','Segoe UI',sans-serif",
        color: '#0F172A',
      }}
    >
      {/* ══ HERO ══ */}
      <div
        style={{
          background:
            'linear-gradient(135deg,#1E1B4B 0%,#312E81 48%,#1A365D 100%)',
          padding: '32px 16px 26px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage:
              'radial-gradient(circle,rgba(255,255,255,0.055) 1px,transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 380,
            height: 380,
            borderRadius: '50%',
            pointerEvents: 'none',
            background:
              'radial-gradient(circle,rgba(99,102,241,0.2) 0%,transparent 65%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 940,
            margin: '0 auto',
          }}
        >
          {/* Title */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 22,
            }}
          >
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: 16,
                flexShrink: 0,
                background: 'linear-gradient(135deg,#6366F1,#8B5CF6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 30,
                boxShadow: '0 10px 30px rgba(99,102,241,0.5)',
              }}
            >
              🎓
            </div>
            <div>
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.32)',
                  marginBottom: 4,
                }}
              >
                Sumit Rawal · FPO Cloud · NextStep Bangkok
              </div>
              <h1
                style={{
                  fontSize: 'clamp(19px,5vw,31px)',
                  fontWeight: 900,
                  margin: 0,
                  color: '#FFFFFF',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.1,
                }}
              >
                365 Days of Udemy — 1,095 Hours
              </h1>
              <div
                style={{
                  fontSize: 11,
                  color: 'rgba(255,255,255,0.36)',
                  marginTop: 4,
                }}
              >
                Jun 10, 2026 → Jun 9, 2027 · 6:00 AM–9:00 AM daily ·{' '}
                {TOTAL_COURSES} courses · 1,095h total
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(88px,1fr))',
              gap: 7,
              marginBottom: 20,
            }}
          >
            {[
              ['365', 'Days'],
              ['1,095h', 'Courses Only'],
              ['3h', '6–9 AM Daily'],
              [TOTAL_COURSES, 'Courses'],
              ['7', 'Skills'],
              ["Jun 9 '27", 'Finish'],
            ].map(([v, l]) => (
              <div
                key={l}
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  borderRadius: 11,
                  padding: '10px 12px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{ fontSize: 17, fontWeight: 900, color: '#FFFFFF' }}
                >
                  {v}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    color: 'rgba(255,255,255,0.36)',
                    marginTop: 1,
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>

          {/* Daily schedule banner */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'rgba(99,102,241,0.15)',
              border: '1px solid rgba(99,102,241,0.35)',
              borderRadius: 12,
              padding: '10px 16px',
              marginBottom: 14,
            }}
          >
            <span style={{ fontSize: 24, flexShrink: 0 }}>⏰</span>
            <div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 900,
                  color: '#FFFFFF',
                  letterSpacing: '-0.01em',
                }}
              >
                6:00 AM – 9:00 AM Every Day
              </div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)' }}>
                3 hours of focused Udemy study · Before FPO work starts ·
                Bangkok time · Jun 10, 2026 → Jun 9, 2027
              </div>
            </div>
            <div
              style={{ marginLeft: 'auto', textAlign: 'right', flexShrink: 0 }}
            >
              <div style={{ fontSize: 16, fontWeight: 900, color: '#A5B4FC' }}>
                3h/day
              </div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>
                1,095h total
              </div>
            </div>
          </div>
          {/* 365-day progress bar */}
          <div
            style={{
              height: 12,
              borderRadius: 6,
              overflow: 'hidden',
              display: 'flex',
              marginBottom: 10,
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)',
            }}
          >
            {[
              ['#0EA5E9', 92],
              ['#7C3AED', 28],
              ['#374151', 35],
              ['#16A34A', 98],
              ['#E11D48', 49],
              ['#7C3AED', 28],
              ['#EA580C', 35],
            ].map(([col, fl], i) => (
              <div key={i} style={{ flex: fl, background: col }} />
            ))}
          </div>

          {/* Phase pills */}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {PHASES.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setOpen(p.id);
                  setTimeout(
                    () =>
                      document.getElementById('ph-' + p.id)?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      }),
                    80,
                  );
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 20,
                  padding: '3px 10px',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: p.color,
                  }}
                />
                <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.58)' }}>
                  {p.icon} {p.name} · {p.days}d · {p.hours}h · {p.courseCount}{' '}
                  courses
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══ BODY ══ */}
      <div
        style={{ maxWidth: 940, margin: '0 auto', padding: '16px 12px 48px' }}
      >
        {/* Master table */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: 14,
            border: '1px solid #E2E8F0',
            padding: '16px 18px',
            marginBottom: 14,
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            overflowX: 'auto',
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: '#94A3B8',
              letterSpacing: '0.15em',
              marginBottom: 14,
            }}
          >
            📊 MASTER SCHEDULE — 365 DAYS · 1,095H COURSES · 3H/DAY · 35 COURSES
          </div>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: 11,
              minWidth: 580,
            }}
          >
            <thead>
              <tr style={{ background: '#F8FAFC' }}>
                {[
                  '',
                  'Skill',
                  'Days',
                  'Hours',
                  'Courses',
                  'Timeline',
                  'Start',
                  'End',
                ].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: '8px 10px',
                      textAlign: 'left',
                      color: '#64748B',
                      fontWeight: 700,
                      borderBottom: '2px solid #E2E8F0',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PHASES.map((p, i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: '1px solid #F1F5F9',
                    cursor: 'pointer',
                    transition: 'background 0.1s',
                  }}
                  onClick={() => {
                    setOpen(p.id);
                    setTimeout(
                      () =>
                        document.getElementById('ph-' + p.id)?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        }),
                      80,
                    );
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = '#F8FAFC')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = 'transparent')
                  }
                >
                  <td style={{ padding: '9px 10px' }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: p.color + '18',
                        color: p.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 18,
                      }}
                    >
                      {p.icon}
                    </div>
                  </td>
                  <td style={{ padding: '9px 10px' }}>
                    <div style={{ fontWeight: 800, color: '#0F172A' }}>
                      {p.name}
                    </div>
                    {(p.id === 'react' ||
                      p.id === 'spring' ||
                      p.id === 'micro') && (
                      <div
                        style={{
                          fontSize: 9,
                          color: '#D97706',
                          fontWeight: 700,
                        }}
                      >
                        ⭐ MAX TIME
                      </div>
                    )}
                  </td>
                  <td
                    style={{
                      padding: '9px 10px',
                      fontWeight: 700,
                      color: '#374151',
                    }}
                  >
                    {p.days}d
                  </td>
                  <td
                    style={{
                      padding: '9px 10px',
                      fontWeight: 900,
                      color: p.color,
                      fontSize: 14,
                    }}
                  >
                    {p.hours}h
                  </td>
                  <td style={{ padding: '9px 10px' }}>
                    <span
                      style={{
                        fontSize: 11,
                        background: p.color + '15',
                        color: p.color,
                        padding: '3px 10px',
                        borderRadius: 20,
                        fontWeight: 700,
                        border: `1px solid ${p.color}30`,
                      }}
                    >
                      {p.courseCount} courses
                    </span>
                  </td>
                  <td style={{ padding: '9px 10px' }}>
                    <div
                      style={{
                        width: 100,
                        height: 6,
                        background: '#F1F5F9',
                        borderRadius: 3,
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          background: `linear-gradient(90deg,${p.color},${p.dark})`,
                          borderRadius: 3,
                          marginLeft: `${(p.offset / 365) * 100}%`,
                          width: `${(p.days / 365) * 100}%`,
                        }}
                      />
                    </div>
                  </td>
                  <td
                    style={{
                      padding: '9px 10px',
                      color: '#475569',
                      fontSize: 10,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {p.startDate}
                  </td>
                  <td
                    style={{
                      padding: '9px 10px',
                      color: '#475569',
                      fontSize: 10,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {p.endDate}
                  </td>
                </tr>
              ))}
              <tr
                style={{
                  background: '#F8FAFC',
                  borderTop: '2px solid #E2E8F0',
                }}
              >
                <td
                  colSpan={2}
                  style={{
                    padding: '10px',
                    fontWeight: 900,
                    color: '#0F172A',
                    fontSize: 13,
                  }}
                >
                  TOTAL
                </td>
                <td
                  style={{ padding: '10px', fontWeight: 800, color: '#0F172A' }}
                >
                  365d
                </td>
                <td
                  style={{
                    padding: '10px',
                    fontWeight: 900,
                    color: '#4F46E5',
                    fontSize: 15,
                  }}
                >
                  1,095h
                </td>
                <td style={{ padding: '10px' }}>
                  <span
                    style={{
                      fontSize: 11,
                      background: '#EEF2FF',
                      color: '#4F46E5',
                      padding: '3px 10px',
                      borderRadius: 20,
                      fontWeight: 800,
                    }}
                  >
                    {TOTAL_COURSES} courses
                  </span>
                </td>
                <td style={{ padding: '10px', fontSize: 10, color: '#94A3B8' }}>
                  Jun 10, 2026 → Jun 9, 2027 · 6 AM–9 AM daily
                </td>
                <td
                  style={{ padding: '10px', fontWeight: 700, color: '#16A34A' }}
                >
                  Jun 10
                </td>
                <td
                  style={{ padding: '10px', fontWeight: 700, color: '#16A34A' }}
                >
                  Jun 9, 2027
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ marginTop: 8, fontSize: 10, color: '#94A3B8' }}>
            👆 Click any row to jump to that skill's detailed courses
          </div>
        </div>

        {/* Phase blocks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {PHASES.map((p) => (
            <PhaseBlock
              key={p.id}
              p={p}
              isOpen={open === p.id}
              onToggle={() => toggle(p.id)}
            />
          ))}
        </div>

        {/* Rules */}
        <div
          style={{
            marginTop: 16,
            background: '#FFFFFF',
            borderRadius: 14,
            border: '1px solid #E2E8F0',
            padding: '18px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: '#94A3B8',
              letterSpacing: '0.15em',
              marginBottom: 14,
            }}
          >
            ⚡ RULES TO FINISH ALL 35 COURSES IN 365 DAYS
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))',
              gap: 14,
            }}
          >
            {[
              [
                '⏰',
                '6:00 AM – 9:00 AM Daily',
                'Your fixed Udemy block — every single day before FPO work starts. 3 hours = ~2 lectures + code-along. Non-negotiable. Put it in your calendar as a recurring event.',
              ],
              [
                '⏩',
                '1.25× theory, full speed code',
                'Slides/diagrams at 1.25×. Live coding always full speed. Saves ~200h across 1,095h.',
              ],
              [
                '✂',
                'Skip ruthlessly',
                'Intros, outros, sections you already know — skip instantly. Every phase has buffer built in.',
              ],
              [
                '🔁',
                'Practice between courses',
                'Between finishing one course and starting the next: build one small project applying what you learned.',
              ],
              [
                '🏗',
                'Map to FPO every day',
                "After each lecture: 'where does this exist in FPO?' Spring Boot = C# Lambda. Kafka = EventBridge. Instant retention.",
              ],
              [
                '📅',
                'Sunday review',
                "Every Sunday: % complete this week? Adjust next week's pace. The schedule is a contract with yourself.",
              ],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}
              >
                <span style={{ fontSize: 24, flexShrink: 0, lineHeight: 1.2 }}>
                  {icon}
                </span>
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: 3,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{ fontSize: 11, color: '#64748B', lineHeight: 1.7 }}
                  >
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 16, textAlign: 'center', paddingBottom: 28 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 5,
              flexWrap: 'wrap',
              marginBottom: 6,
            }}
          >
            {[
              ['⚛', 'React', '276h', '#0EA5E9'],
              ['📱', 'RN', '84h', '#7C3AED'],
              ['▲', 'Next.js', '105h', '#374151'],
              ['🌱', 'Spring', '294h', '#16A34A'],
              ['🏛', 'Microservices', '147h', '#E11D48'],
              ['🤖', 'Agentic AI', '84h', '#7C3AED'],
              ['⚙', 'DevOps', '105h', '#EA580C'],
            ].map(([ic, sk, h, col], i, a) => (
              <span
                key={sk + i}
                style={{ display: 'flex', alignItems: 'center', gap: 3 }}
              >
                <span style={{ fontWeight: 700, color: col, fontSize: 11 }}>
                  {ic} {sk}{' '}
                  <span style={{ opacity: 0.6, fontSize: 10 }}>({h})</span>
                </span>
                {i < a.length - 1 && (
                  <span style={{ color: '#CBD5E1', margin: '0 2px' }}>→</span>
                )}
              </span>
            ))}
          </div>
          <div
            style={{ fontSize: 10, color: '#94A3B8', letterSpacing: '0.18em' }}
          >
            35 COURSES · 1,095H · 6:00 AM–9:00 AM DAILY · JUN 10 2026 → JUN 9
            2027
          </div>
        </div>
      </div>
    </div>
  );
}
