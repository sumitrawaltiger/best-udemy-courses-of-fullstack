import { useState } from 'react';

const PHASES = [
  {
    id: 'react',
    name: 'React',
    icon: '⚛',
    color: '#0EA5E9',
    dark: '#0284C7',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    days: 92,
    hours: 276,
    courseCount: 6,
    startDate: 'Jun 10, 2026',
    endDate: 'Sep 9, 2026',
    offset: 0,
    tag: 'MAX TIME ⭐',
    note: 'Maximum frontend allocation — 276h, 6 courses. Jonas first, then Max reinforces from a different angle, then Smilga for project practice. Anil Dollor adds Hindi + AI projects. Interview prep in final days.',
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
        why: 'Best React course on Udemy. 1.9M+ total students. Project-heavy — 5 real apps. Includes 16h Next.js bonus. Covers Context API, React Query, Redux Toolkit, Tailwind, advanced patterns.',
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
        why: '780K+ students. Max teaches differently to Jonas — covering both gives double depth on every concept. Essential TypeScript + React testing content.',
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
          'AI-powered React projects, React Native chapters, Next.js integration, Hindi',
        why: 'AI + React integration — most future-proof React course. React Native chapters here serve as your RN phase preview. Plus Hindi explanations.',
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
    tag: '',
    note: '3 courses, 84h exactly. Stephen Grider at 4.8★ is the highest-rated RN course. Max covers animations + device APIs. Best RN 2025 adds Firebase AI + Redux Toolkit. Build FPO flight list app on your real iPad by Oct 7.',
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
        why: 'Highest-rated RN course: 4.8★, 45K reviews, 197K students. Updated Dec 2025. Best instructor for RN fundamentals. iOS + Android + TestFlight.',
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
          'Deep Flexbox, Animated API, device APIs (camera, location), local+push notifications',
        why: "Max teaches what Grider doesn't — deep animations, device APIs. Different teaching style reinforces every concept.",
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
        why: 'Covers Firebase AI + Redux Toolkit in RN — cutting edge. Localization for multi-language apps (critical for airline clients DLH/KLM). Fills Grider+Max gaps.',
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
    tag: '',
    note: '4 courses, 105h. You already have 16h Next.js from Jonas React course — not starting from zero. Max dedicated course + Smilga projects + Anil Dollor Hindi + Traversy crash course. Theory + projects + Hindi + quick-reference.',
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
        why: '200K students, 4.7★. Best dedicated Next.js 15 course. Two learning paths. App Router + Server Actions + auth all covered deeply.',
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
        why: 'Use ONLY the Next.js project sections (~32h). Best project practice to cement what Max taught.',
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
        why: 'Hindi full-stack Next.js. Anil explains deployment and full-stack patterns clearly. Great for revision.',
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
        why: 'Short, dense, complements the longer courses. Brad Traversy is a trusted web dev educator. Perfect final-week reference.',
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
    tag: 'MAX TIME ⭐',
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
        why: 'With C# background, Java OOP takes 1 day. Focus 100% on Java 8 features — used in every Spring Boot app. Complete in 7 days.',
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
        why: "Most comprehensive JPA course on Udemy. Don't skip — JPA knowledge separates Spring Boot users from Spring Boot experts.",
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
        why: 'Do Ranga before Thompson — practical first, internals second. Working production app in 11 days.',
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
        why: 'John Thompson explains WHY Spring works. Spring Security with Cognito OAuth2 Resource Server = exactly FPO pattern.',
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
        why: "150K+ students. Ranga's most comprehensive course. Full-stack Spring + React integration — connect your frontend to Spring Boot backend.",
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
        why: 'Best dedicated Spring Security course. Covers JWT + OAuth2 + Keycloak — exactly what FPO uses with Cognito.',
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
        why: 'Latest Spring Boot 4 + Spring 7 — cutting edge curriculum. 8 projects reinforce everything learned. WebFlux reactive bonus.',
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
    tag: 'MAX TIME ⭐',
    note: '6 courses, 147h. Max time for Microservices. Ranga for Spring Cloud, Kargopolov for Kafka+CQRS, Thompson for architecture, Sean Campbell for CQRS+Event Sourcing, Max for Docker+K8s, KodeKloud for K8s labs.',
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
        why: 'Best practical microservices course. Covers exactly what FPO uses: API Gateway, service discovery, circuit breaker, Docker, K8s, tracing.',
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
        why: "Fills Ranga's gaps: deep Kafka, RabbitMQ, CQRS/Event Sourcing, Saga pattern. Reviewed as best microservices course on Udemy.",
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
        why: "John Thompson's architectural perspective. DDD + bounded contexts section is essential for real-world microservices.",
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
        why: 'Most focused CQRS + Event Sourcing course. Complements Kargopolov with deeper Axon Framework coverage.',
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
        why: '4.7★, 160K students. Most comprehensive Docker+K8s course. Deep K8s volumes, ConfigMaps, Secrets, AWS EKS.',
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
        why: "4.8★, 200K students. KodeKloud's interactive labs make K8s hands-on. Best way to solidify K8s after Ranga and Max.",
      },
    ],
  },
  {
    id: 'genai',
    name: 'Generative AI',
    icon: '✨',
    color: '#F59E0B',
    dark: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    days: 30,
    hours: 90,
    courseCount: 4,
    startDate: 'Apr 8, 2027',
    endDate: 'May 7, 2027',
    offset: 302,
    tag: '🆕 NEW PHASE',
    note: 'Brand new phase — 90h, 4 courses. Foundation in Generative AI before Agentic AI. Covers LLMs, prompt engineering, RAG, Hugging Face, AWS Bedrock, and production GenAI patterns. This is the bridge between your backend skills and the AI-native future.',
    courses: [
      {
        n: 1,
        h: 28,
        rating: 4.7,
        rev: '12K+',
        stu: '60K+',
        title: 'ChatGPT & Generative AI Masterclass 2026',
        by: 'Dr. Frank Kane (ex-Amazon)',
        url: 'https://www.udemy.com/course/chatgpt-and-generative-ai/',
        tag: '🥇 START HERE',
        tagC: '#15803D',
        covers:
          'LLM fundamentals, ChatGPT API, prompt engineering (CoT, Few-shot, ReAct), embeddings, RAG, fine-tuning basics, GenAI safety',
        why: "Frank Kane is an ex-Amazon hiring manager. 4.7★. Best structured GenAI course — starts from 'what is an LLM' and builds to production RAG systems. Perfect first GenAI course.",
      },
      {
        n: 2,
        h: 18,
        rating: 4.7,
        rev: '25K+',
        stu: '120K+',
        title: 'Generative AI: Prompt Engineering Masterclass',
        by: 'Maximilian Schwarzmüller',
        url: 'https://www.udemy.com/course/prompt-engineering/',
        tag: '🧠 PROMPT ENG',
        tagC: '#0369A1',
        covers:
          'Chain-of-Thought, Tree-of-Thought, ReAct prompting, system prompts, few-shot, zero-shot, structured outputs',
        why: "Max's prompt engineering course is the most thorough on Udemy. Prompt engineering is the #1 skill for working with any AI system. 120K+ students, 4.7★.",
      },
      {
        n: 3,
        h: 22,
        rating: 4.6,
        rev: '18K+',
        stu: '80K+',
        title: 'Complete Generative AI Course with LangChain & Hugging Face',
        by: 'Krish Naik',
        url: 'https://www.udemy.com/course/complete-generative-ai-course-with-langchain-and-huggingface/',
        tag: '🤗 HUGGING FACE',
        tagC: '#7C3AED',
        covers:
          'LangChain fundamentals, Hugging Face models, open-source LLMs, vector databases, RAG pipelines, deployment',
        why: "Krish Naik is India's top AI educator. Covers open-source LLMs with Hugging Face — not just OpenAI. RAG + vector DB patterns used in production AI systems.",
      },
      {
        n: 4,
        h: 22,
        rating: 4.5,
        rev: '8K+',
        stu: '30K+',
        title: 'Generative AI with AWS Bedrock & SageMaker',
        by: 'AWS Instructor',
        url: 'https://www.udemy.com/course/generative-ai-on-aws/',
        tag: '☁️ AWS GenAI',
        tagC: '#D97706',
        covers:
          'AWS Bedrock: Claude, Llama, Titan models, Knowledge Bases, Agents for Bedrock, SageMaker JumpStart, RAG on AWS',
        why: 'Your FPO runs on AWS — this course connects GenAI directly to your daily work. AWS Bedrock Agents = Agentic AI on the exact infra you manage. Critical for FPO Cloud evolution.',
      },
    ],
  },
  {
    id: 'agentic',
    name: 'Agentic AI',
    icon: '🤖',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    days: 30,
    hours: 90,
    courseCount: 5,
    startDate: 'May 8, 2027',
    endDate: 'Jun 6, 2027',
    offset: 332,
    tag: '🆕 NEW PHASE',
    note: "5 courses, 90h. Build on GenAI foundation — now build autonomous AI agents. Ed Donner's flagship course (8 real projects), Eden Marco's LangChain mastery, LangGraph bootcamp, business automation agents, plus Python automation fundamentals for DevOps scripting.",
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
        tag: '🥇 FLAGSHIP',
        tagC: '#15803D',
        covers:
          '8 projects: Career Digital Twin, SDR Agent, Deep Research, Stock Picker (CrewAI), Engineering Team (Docker), Browser Agent (LangGraph), OpenAI Agents SDK, MCP integration',
        why: 'THE flagship Agentic AI course of 2026. OpenAI Agents SDK + CrewAI + LangGraph + AutoGen + MCP in 30h. 8 production projects. Ed Donner is ex-FAANG. Most up-to-date course on the market.',
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
        tag: '🔗 LANGCHAIN',
        tagC: '#0369A1',
        covers:
          'LangChain fundamentals, chains, agents, RAG pipelines, vector databases (Pinecone, FAISS), memory, tool calling',
        why: '4.7★, 114K students — most enrolled LangChain course on Udemy. Eden Marco is the LangChain authority. Essential foundation for everything in LangGraph.',
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
        tag: '🕸️ LANGGRAPH',
        tagC: '#7C3AED',
        covers:
          'LangGraph state machines, graph-based workflows, conditional edges, multi-agent orchestration, ReAct+Reflection architectures, agentic RAG',
        why: '4.8★ — highest rated in this list. LangGraph is the backbone of production agentic systems. Deep state management and multi-agent coordination.',
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
        tag: '🏢 BUSINESS',
        tagC: '#D97706',
        covers:
          'Business automation agents, Ice Breaker agent, AutoGen multi-agent teams, LangFlow, BabyAGI patterns, Flowise',
        why: 'Bridges theory to real business automation. AutoGen, LangFlow, Flowise, BabyAGI — every major framework not covered in courses 1–3.',
      },
      {
        n: 5,
        h: 6,
        rating: 4.6,
        rev: '25K+',
        stu: '190K+',
        title: 'Automate the Boring Stuff with Python',
        by: 'Al Sweigart',
        url: 'https://www.udemy.com/course/automate/',
        tag: '🐍 PYTHON BASE',
        tagC: '#059669',
        covers:
          'File system automation, regex, subprocess, web scraping, scheduling — DevOps scripting patterns',
        why: 'Short (6h) but essential Python scripting foundation for writing agent tool functions, boto3 scripts, and DevOps automation alongside your AI work.',
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
    days: 38,
    hours: 114,
    courseCount: 6,
    startDate: 'Jun 7, 2027',
    endDate: 'Jul 14, 2027',
    offset: 362,
    tag: '',
    note: '6 courses, 114h — extended from 35d to 38d. The grand finale. Nana Janashia #1 DevOps educator globally, KodeKloud for labs, Max for Docker+K8s depth, Mumshad for Terraform, Anil Dollor Hindi recap, plus GitHub Actions dedicated course.',
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
        why: '#1 most-recommended DevOps course globally. 4.8★. Crystal-clear diagrams before every tool. Linux→Docker→K8s→CI/CD→AWS. Perfect foundation.',
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
        why: "KodeKloud's interactive labs are unmatched. Real terminal practice. Combines with Nana's theory for perfect balance.",
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
        why: "4.7★, 160K students. Deep Docker+K8s. Use for specific sections Nana didn't cover: K8s storage, secrets, AWS EKS.",
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
        why: 'Short (9h), highly focused. Terraform IaC is essential for FPO AWS automation. KodeKloud labs included.',
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
        why: "Hindi DevOps recap. Anil Dollor's clear explanations tie everything together in your native language. Perfect closure.",
      },
      {
        n: 6,
        h: 9,
        rating: 4.7,
        rev: '10K+',
        stu: '55K+',
        title: 'GitHub Actions — The Complete Guide',
        by: 'Maximilian Schwarzmüller',
        url: 'https://www.udemy.com/course/github-actions-the-complete-guide/',
        tag: '🔄 CI/CD',
        tagC: '#0369A1',
        covers:
          'GitHub Actions workflows, OIDC, matrix builds, reusable workflows, secrets, deployment to AWS/K8s',
        why: "Dedicated GitHub Actions course — the CI/CD tool you use daily with FPO TeamCity replacements. OIDC keyless AWS auth is exactly what you'll propose to Karsten.",
      },
    ],
  },
];

const TOTAL_HOURS = PHASES.reduce((s, p) => s + p.hours, 0);
const TOTAL_COURSES = PHASES.reduce((s, p) => s + p.courses.length, 0);
const TOTAL_DAYS = PHASES.reduce((s, p) => s + p.days, 0);

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

function CourseCard({ c, accent }) {
  return (
    <a
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'block',
        textDecoration: 'none',
        background: '#FFFFFF',
        border: `1.5px solid ${c.n === 1 ? accent + '50' : '#E2E8F0'}`,
        borderRadius: 12,
        padding: '14px 16px',
        boxShadow:
          c.n === 1 ? `0 4px 16px ${accent}12` : '0 1px 4px rgba(0,0,0,0.05)',
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `0 8px 24px ${accent}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow =
          c.n === 1 ? `0 4px 16px ${accent}12` : '0 1px 4px rgba(0,0,0,0.05)';
      }}
    >
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
              width: 22,
              height: 22,
              borderRadius: 6,
              background: accent + '20',
              color: accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 10,
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
      <div style={{ fontSize: 11, color: '#64748B', marginBottom: 8 }}>
        by {c.by}
      </div>
      <div
        style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 8 }}
      >
        <span style={{ fontSize: 13, fontWeight: 900, color: accent }}>
          ⏱ {c.h}h
        </span>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#F59E0B' }}>
          ★ {c.rating}
        </span>
        <span style={{ fontSize: 11, color: '#64748B' }}>💬 {c.rev}</span>
        <span style={{ fontSize: 11, color: '#64748B' }}>👥 {c.stu}</span>
      </div>
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

function PhaseBlock({ p, isOpen, onToggle }) {
  const isNew = p.tag && p.tag.includes('NEW');
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
            width: 'clamp(40px,9vw,56px)',
            height: 'clamp(40px,9vw,56px)',
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
            <span style={{ fontSize: 15, fontWeight: 900, color: '#0F172A' }}>
              {p.name}
            </span>
            {p.tag && (
              <span
                style={{
                  fontSize: 10,
                  padding: '2px 9px',
                  borderRadius: 20,
                  fontWeight: 800,
                  background: isNew ? '#DCFCE7' : p.color + '18',
                  color: isNew ? '#15803D' : p.color,
                  border: `1px solid ${isNew ? '#86EFAC' : p.color + '35'}`,
                }}
              >
                {p.tag}
              </span>
            )}
          </div>
          <div style={{ fontSize: 11, color: '#64748B' }}>
            {p.startDate} → {p.endDate} · {p.days} days · {p.courseCount}{' '}
            courses · 6:00–9:00 AM daily
          </div>
        </div>
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
      {isOpen && (
        <div
          style={{
            borderTop: `2px solid ${p.color}18`,
            padding: '18px 18px 20px',
          }}
        >
          <div
            style={{
              background: `${p.color}09`,
              border: `1px solid ${p.color}22`,
              borderRadius: 12,
              padding: '12px 15px',
              marginBottom: 14,
              fontSize: 12,
              color: '#334155',
              lineHeight: 1.85,
            }}
          >
            <strong
              style={{
                color: p.color,
                fontSize: 10,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: 5,
              }}
            >
              📋 Plan
            </strong>
            {p.note}
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))',
              gap: 8,
              marginBottom: 14,
            }}
          >
            {[
              ['📅', p.days + 'd', 'days'],
              ['⏱', '3h', '6–9 AM'],
              ['📚', p.hours + 'h', 'total'],
              ['📖', p.courseCount, 'courses'],
              ['🗓', p.days > 30 ? 'multi-month' : 'weeks', 'duration'],
            ].map(([ic, v, l]) => (
              <div
                key={l}
                style={{
                  background: '#F8FAFC',
                  borderRadius: 9,
                  padding: '8px 6px',
                  border: '1px solid #E2E8F0',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 16 }}>{ic}</div>
                <div
                  style={{ fontSize: 13, fontWeight: 800, color: '#0F172A' }}
                >
                  {v}
                </div>
                <div style={{ fontSize: 9, color: '#94A3B8' }}>{l}</div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginBottom: 5,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontSize: 10, color: '#94A3B8' }}>
              Position in 400-day plan
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
              marginBottom: 14,
            }}
          >
            <div
              style={{
                height: '100%',
                borderRadius: 4,
                background: `linear-gradient(90deg,${p.color},${p.dark})`,
                marginLeft: `${(p.offset / 400) * 100}%`,
                width: `${(p.days / 400) * 100}%`,
                boxShadow: `0 0 8px ${p.color}50`,
              }}
            />
          </div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: '#94A3B8',
              letterSpacing: '0.12em',
              marginBottom: 10,
            }}
          >
            ALL {p.courseCount} COURSES — {p.hours}H — CLICK TO OPEN UDEMY
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {p.courses.map((c, i) => (
              <CourseCard key={i} c={c} accent={p.color} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

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
      {/* HERO */}
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
            right: -80,
            width: 380,
            height: 380,
            borderRadius: '50%',
            pointerEvents: 'none',
            background:
              'radial-gradient(circle,rgba(99,102,241,0.22) 0%,transparent 65%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 'min(960px,96%)',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 'clamp(42px,10vw,58px)',
                height: 'clamp(42px,10vw,58px)',
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
                  fontSize: 9,
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.32)',
                  marginBottom: 3,
                }}
              >
                Sumit Rawal · FPO Cloud · NextStep Bangkok · 13-Month Calendar
              </div>
              <h1
                style={{
                  fontSize: 'clamp(18px,5vw,30px)',
                  fontWeight: 900,
                  margin: 0,
                  color: '#FFFFFF',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.1,
                }}
              >
                400 Days of Code — 1,200 Hours
              </h1>
              <div
                style={{
                  fontSize: 11,
                  color: 'rgba(255,255,255,0.36)',
                  marginTop: 3,
                }}
              >
                Jun 10, 2026 → Jul 14, 2027 · 6:00 AM–9:00 AM daily ·{' '}
                {TOTAL_COURSES} courses · 8 skills
              </div>
            </div>
          </div>
          {/* 6AM-9AM banner */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'rgba(99,102,241,0.18)',
              border: '1px solid rgba(99,102,241,0.4)',
              borderRadius: 12,
              padding: '10px 16px',
              marginBottom: 16,
            }}
          >
            <span style={{ fontSize: 22, flexShrink: 0 }}>⏰</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: '#FFFFFF' }}>
                6:00 AM – 9:00 AM · Every Day · 400 Days Straight
              </div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.42)' }}>
                3 hours/day · Before FPO work · Bangkok time · Jun 10, 2026 →
                Jul 14, 2027
              </div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: 18, fontWeight: 900, color: '#A5B4FC' }}>
                1,200h
              </div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>
                total
              </div>
            </div>
          </div>
          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(85px,1fr))',
              gap: 7,
              marginBottom: 18,
            }}
          >
            {[
              ['400', 'Days'],
              ['1,200h', 'Courses Only'],
              ['3h', '6–9 AM'],
              ['8', 'Skills'],
              [TOTAL_COURSES, 'Courses'],
              ["Jul 14 '27", 'Finish'],
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
          {/* 400-day bar */}
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
              ['#F59E0B', 30],
              ['#7C3AED', 30],
              ['#EA580C', 38],
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
                <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.56)' }}>
                  {p.icon} {p.name} · {p.days}d · {p.hours}h
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* BODY */}
      <div
        style={{
          maxWidth: 'min(960px,96%)',
          margin: '0 auto',
          padding: '16px 12px 48px',
        }}
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
            📊 MASTER SCHEDULE — 400 DAYS · 1,200H · 8 SKILLS · 6:00 AM–9:00 AM
            DAILY
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
                    {p.tag && (
                      <div
                        style={{
                          fontSize: 9,
                          color: p.tag.includes('NEW') ? '#15803D' : p.color,
                          fontWeight: 700,
                        }}
                      >
                        {p.tag}
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
                        height: 5,
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
                          marginLeft: `${(p.offset / 400) * 100}%`,
                          width: `${(p.days / 400) * 100}%`,
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
                  {TOTAL_DAYS}d
                </td>
                <td
                  style={{
                    padding: '10px',
                    fontWeight: 900,
                    color: '#4F46E5',
                    fontSize: 15,
                  }}
                >
                  1,200h
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
                  Jun 10, 2026 → Jul 14, 2027
                </td>
                <td
                  style={{ padding: '10px', fontWeight: 700, color: '#16A34A' }}
                >
                  Jun 10, 2026
                </td>
                <td
                  style={{ padding: '10px', fontWeight: 700, color: '#16A34A' }}
                >
                  Jul 14, 2027
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ marginTop: 8, fontSize: 10, color: '#94A3B8' }}>
            👆 Click any row to jump to that skill's full plan below
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
            ⚡ RULES — 6:00 AM–9:00 AM · 400 DAYS · 1,200 HOURS
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
                '6 AM–9 AM fixed block',
                'Every day before FPO work. 400 days. No exceptions. This is the single most important rule.',
              ],
              [
                '⏩',
                '1.25× theory, full speed code',
                'Slides/diagrams at 1.25×. Live coding always full speed. Saves ~200h across 1,200h total.',
              ],
              [
                '✂',
                'Skip ruthlessly',
                'Intros, outros, known sections — skip instantly. You have 3h/day, not 5h.',
              ],
              [
                '⭐',
                '3 skills get MAX focus',
                'React (276h), Spring Boot (294h), Microservices (147h) — deepest effort.',
              ],
              [
                '🤖',
                'GenAI connects to FPO',
                'AWS Bedrock Agents = AI-powered FPO trajectory recommendations. Map every GenAI concept to your daily work.',
              ],
              [
                '📅',
                'Sunday 10-min review',
                '% done this week? Behind >20%? Add 30min/day next week. The schedule is a contract with yourself.',
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
              ['✨', 'GenAI', '90h', '#F59E0B'],
              ['🤖', 'Agentic AI', '90h', '#7C3AED'],
              ['⚙', 'DevOps', '114h', '#EA580C'],
            ].map(([ic, sk, h, col], i, a) => (
              <span
                key={sk}
                style={{ display: 'flex', alignItems: 'center', gap: 3 }}
              >
                <span style={{ fontWeight: 700, color: col, fontSize: 11 }}>
                  {ic} {sk}{' '}
                  <span style={{ opacity: 0.6, fontSize: 9 }}>({h})</span>
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
            400 DAYS · {TOTAL_COURSES} COURSES · 1,200H · 6:00 AM–9:00 AM DAILY
            · JUN 10 2026 → JUL 14 2027
          </div>
        </div>
      </div>
    </div>
  );
}
