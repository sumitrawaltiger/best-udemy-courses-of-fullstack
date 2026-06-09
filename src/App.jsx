import { useState } from 'react';

const PLAN = [
  {
    id: 'react',
    skill: 'React',
    icon: '⚛',
    color: '#0EA5E9',
    accent: '#0284C7',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    phase: 1,
    days: 92,
    hours: 276,
    startDate: 'Jun 7, 2026',
    endDate: 'Sep 6, 2026',
    weeks: '13.1w',
    tag: 'MAX TIME ⭐',
    goal: 'Master React from zero to advanced. 276h — the biggest frontend allocation. Jonas Schmedtmann (84h) + Max Schwarzmüller (68h) + Interview Prep (18h) + 100+ hours of project practice. By Sep 6 you will be a confident senior-level React developer ready for React Native.',
    breakdown: [
      {
        n: '1',
        period: 'Days 1–28 (Jun 7–Jul 4)',
        title: 'Jonas: The Ultimate React Course (84h)',
        desc: 'Components, hooks, React Query, Redux Toolkit, Tailwind, advanced patterns, 16h Next.js bonus',
      },
      {
        n: '2',
        period: 'Days 29–56 (Jul 5–Aug 1)',
        title: 'Max: React Complete Guide (68h)',
        desc: 'Different teaching angle reinforces depth. Animations, testing with Jest, TypeScript with React, deployment.',
      },
      {
        n: '3',
        period: 'Days 57–78 (Aug 2–Aug 23)',
        title: 'Projects + TypeScript Practice (66h)',
        desc: 'Build FPO Flight Dashboard. Apply TypeScript throughout all components. Aim for 3 portfolio projects.',
      },
      {
        n: '4',
        period: 'Days 79–92 (Aug 24–Sep 6)',
        title: 'Interview Prep + Capstone Polish (42h)',
        desc: '200 React Interview Questions (Hindi). Polish capstone. Deploy to Netlify. Update GitHub + LinkedIn.',
      },
    ],
    courses: [
      {
        rank: 1,
        title: 'The Ultimate React Course 2025 — React, Next.js, Redux & More',
        instructor: 'Jonas Schmedtmann',
        hours: 84,
        rating: 4.7,
        reviews: '16K+',
        students: '114K+',
        url: 'https://www.udemy.com/course/the-ultimate-react-course/',
        badge: '🥇 PRIMARY',
        badgeColor: '#16A34A',
        why: 'Best React course on Udemy. 1.9M+ students. Includes 16h Next.js bonus. Context API, React Query, Redux Toolkit, Tailwind, compound components, render props. Project-heavy with 5 real apps.',
        covers: [
          'Components, JSX, Props, State management',
          'Hooks: useState, useEffect, useRef, useMemo, useCallback, useContext, useReducer',
          'React Router v6, React Query, Redux Toolkit',
          'Tailwind CSS + Styled Components',
          'Advanced patterns: compound components, HOC, render props',
          '16h Next.js bonus with App Router + Server Actions',
        ],
      },
      {
        rank: 2,
        title: 'React — The Complete Guide 2025 (incl. React Router & Redux)',
        instructor: 'Maximilian Schwarzmüller (Academind)',
        hours: 68,
        rating: 4.7,
        reviews: '205K+',
        students: '780K+',
        url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
        badge: '🥈 DO SECOND',
        badgeColor: '#0369A1',
        why: '780K students, 205K reviews. Max explains differently to Jonas — both together give double depth. Covers animations, Jest testing, TypeScript with React. Best supplement to Jonas.',
        covers: [
          'Class vs Functional component evolution',
          'Custom hooks deep dive + best practices',
          'Context API + useReducer state patterns',
          'React + TypeScript fully typed components',
          'Testing: Jest + React Testing Library',
          'CI/CD deployment with GitHub Actions',
        ],
      },
      {
        rank: 3,
        title: 'React Interview Masterclass — Top 200 Questions (Hindi)',
        instructor: 'Hindi Instructor',
        hours: 18,
        rating: 4.4,
        reviews: '5K+',
        students: '15K+',
        url: 'https://www.udemy.com/course/react-interview-masterclass-top-200-questions-in-hindi/',
        badge: '🎯 INTERVIEW PREP (Last 2wks)',
        badgeColor: '#7C3AED',
        why: 'Do only in the final 2 weeks of React phase. 200 Q&A consolidates everything learned. Hindi explanations make tricky concepts click instantly. Your final exam before React Native.',
        covers: [
          'Top 200 React interview Q&A in Hindi',
          'Virtual DOM, reconciliation, fiber architecture',
          'Hooks rules and common pitfall patterns',
          'Performance optimisation real scenarios',
          'State management patterns comparison',
        ],
      },
    ],
    skipNote:
      'Complete Fullstack Dev in Hindi — skip for now. Full-stack context lands better after completing Spring Boot.',
  },
  {
    id: 'rn',
    skill: 'React Native',
    icon: '📱',
    color: '#7C3AED',
    accent: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    phase: 2,
    days: 28,
    hours: 84,
    startDate: 'Sep 7, 2026',
    endDate: 'Oct 4, 2026',
    weeks: '4w',
    tag: '',
    goal: "4 solid weeks, 84 hours. React is fresh in your hands — RN is mostly learning StyleSheet and navigation. Stephen Grider's course is the highest-rated RN course on Udemy at 4.8★ with 45K reviews. Build a working FPO flight list app running on your real iPad via Expo Go by Oct 4.",
    breakdown: [
      {
        n: '1',
        period: 'Days 1–13 (Sep 7–Sep 19)',
        title: 'Grider: Fundamentals + Navigation',
        desc: 'Core components, StyleSheet, Flexbox, FlatList, Stack/Tab navigation, Redux in React Native',
      },
      {
        n: '2',
        period: 'Days 14–22 (Sep 20–Sep 28)',
        title: 'Grider: APIs + Auth + Deployment',
        desc: 'REST calls, AsyncStorage, Expo setup, EAS Build, TestFlight basics, push notifications',
      },
      {
        n: '3',
        period: 'Days 23–28 (Sep 29–Oct 4)',
        title: 'Build: FPO Flight iPad App',
        desc: 'FlatList flight cards + MapView airport routes + Expo Go on your real iPad. Capstone deliverable.',
      },
    ],
    courses: [
      {
        rank: 1,
        title: 'The Complete React Native + Hooks Course',
        instructor: 'Stephen Grider',
        hours: 38,
        rating: 4.8,
        reviews: '45K+',
        students: '197K+',
        url: 'https://www.udemy.com/course/the-complete-react-native-and-redux-course/',
        badge: '🥇 PRIMARY',
        badgeColor: '#16A34A',
        why: "Highest-rated RN course on Udemy. 4.8★ with 45K reviews. Stephen Grider is one of Udemy's elite instructors. Covers iOS + Android, Redux in RN, EAS Build. Updated Dec 2025.",
        covers: [
          'Core: View, Text, Image, FlatList, ScrollView',
          'StyleSheet, Flexbox, Dimensions API',
          'React Navigation: Stack, Tab, Drawer navigators',
          'Redux + Redux Toolkit in React Native',
          'REST API integration + AsyncStorage',
          'Expo managed + EAS Build + App Store deployment',
        ],
      },
      {
        rank: 2,
        title: 'React Native — The Best Course 2025 (Beginner to Expert)',
        instructor: 'Multiple Instructors',
        hours: 24,
        rating: 4.5,
        reviews: '331+',
        students: '5K+',
        url: 'https://www.udemy.com/course/the-best-react-native-course/',
        badge: '🥈 SUPPLEMENTARY',
        badgeColor: '#0369A1',
        why: "Covers Redux Toolkit in RN, Firebase AI, localization, multi-language support. Use the remaining ~22h spare time on this to fill any gaps from Grider's course.",
        covers: [
          'Redux Toolkit integration in React Native',
          'Firebase AI services integration',
          'Localization for multi-language apps',
          'Expo vs React Native CLI deep comparison',
          'Advanced navigation patterns',
        ],
      },
    ],
    skipNote:
      'Anil Dollor RN chapters — use only as quick reference. Not needed as primary since you have Grider.',
  },
  {
    id: 'nextjs',
    skill: 'Next.js',
    icon: '▲',
    color: '#374151',
    accent: '#111827',
    bg: '#F9FAFB',
    border: '#D1D5DB',
    phase: 2,
    days: 35,
    hours: 105,
    startDate: 'Oct 5, 2026',
    endDate: 'Nov 8, 2026',
    weeks: '5w',
    tag: '',
    goal: "5 weeks, 105 hours. You already have 16h Next.js from Jonas React course — not starting from zero. Max Schwarzmüller's dedicated Next.js course covers App Router + Server Actions + full-stack patterns (25h). John Smilga for project practice. Build FPO web portal (Server Actions + Prisma + Cognito auth) as capstone. Deploy to Netlify.",
    breakdown: [
      {
        n: '1',
        period: 'Days 1–9 (Oct 5–Oct 13)',
        title: 'Max: Next.js 15 App Router Complete',
        desc: 'App Router, Server/Client Components, Server Actions, Route Handlers, Middleware, caching strategies',
      },
      {
        n: '2',
        period: 'Days 10–18 (Oct 14–Oct 22)',
        title: 'Max: Full-Stack Features + Deployment',
        desc: 'NextAuth v5, Prisma ORM + PostgreSQL, image/font optimisation, Vercel/Netlify deployment',
      },
      {
        n: '3',
        period: 'Days 19–28 (Oct 23–Nov 1)',
        title: 'John Smilga: 3 Full-Stack Projects',
        desc: "Pick only the 3 Next.js full-stack projects from Smilga's course (~30h). Best way to internalize patterns.",
      },
      {
        n: '4',
        period: 'Days 29–35 (Nov 2–Nov 8)',
        title: 'Capstone: FPO Web Dashboard',
        desc: 'Full-stack Next.js portal: Cognito auth + Server Actions + Prisma + deploy. Portfolio centerpiece.',
      },
    ],
    courses: [
      {
        rank: 1,
        title: 'Next.js & React — The Complete Guide (incl. Two Paths!)',
        instructor: 'Maximilian Schwarzmüller (Academind)',
        hours: 25,
        rating: 4.7,
        reviews: '30K+',
        students: '200K+',
        url: 'https://www.udemy.com/course/nextjs-react-the-complete-guide/',
        badge: '🥇 PRIMARY',
        badgeColor: '#16A34A',
        why: 'Best-selling dedicated Next.js 15 course. 200K students, 4.7★. Covers both App Router and Pages Router. Two learning paths: full or summary. Auth, Prisma, Server Actions all covered.',
        covers: [
          'File-based routing: App Router vs Pages Router',
          'Server Components vs Client Components patterns',
          'Server Actions + Route Handlers',
          'Data fetching: SSG, SSR, ISR, streaming',
          'Authentication with NextAuth v5',
          'Prisma ORM + PostgreSQL integration',
        ],
      },
      {
        rank: 2,
        title: 'React Tutorial and Projects Course (2025)',
        instructor: 'John Smilga',
        hours: 50,
        rating: 4.6,
        reviews: '25K+',
        students: '90K+',
        url: 'https://www.udemy.com/course/react-tutorial-and-projects-course/',
        badge: '🥈 PROJECTS (Select 3)',
        badgeColor: '#0369A1',
        why: 'John Smilga is exceptional for project-based learning. Do NOT watch everything — pick only the 3 full-stack Next.js projects (~30h). Most effective way to cement what Max taught.',
        covers: [
          'Full-stack e-commerce Next.js app',
          'Authentication + authorization patterns',
          'Database integration (MongoDB/PostgreSQL)',
          'Deployment to Vercel/Netlify pipeline',
        ],
      },
    ],
    skipNote:
      'Anil Dollor Next.js course — skip. Max Schwarzmüller is more up-to-date with Next.js 15 and covers more comprehensively.',
  },
  {
    id: 'spring',
    skill: 'Spring Boot',
    icon: '🌱',
    color: '#16A34A',
    accent: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    phase: 3,
    days: 98,
    hours: 294,
    startDate: 'Nov 9, 2026',
    endDate: 'Feb 14, 2027',
    weeks: '14w',
    tag: 'MAX TIME ⭐',
    goal: 'The biggest allocation in the entire plan — 98 days, 294 hours. Java Core (fast-track 2 weeks) + JPA/Hibernate (4 weeks) + Spring Boot (8 weeks). Your C# background means Java syntax is 1 day — real time goes to JPA relationships, Spring Security, testing with Testcontainers, and building a production-grade FPO REST API with JWT + Kafka + Redis.',
    breakdown: [
      {
        n: '1',
        period: 'Days 1–14 (Nov 9–Nov 22)',
        title: 'Java 8 Fast-Track (Telusko)',
        desc: '20h: Lambdas, Streams API, Optional, CompletableFuture. OOP is fast with C# background. Focus 100% on Java 8+ features used in Spring Boot daily.',
      },
      {
        n: '2',
        period: 'Days 15–42 (Nov 23–Dec 20)',
        title: 'JPA & Hibernate: Beginner to Guru (Thompson)',
        desc: '73h: Entity mapping, all 4 relationships (LAZY), N+1 problem, @EntityGraph, JPQL, Criteria API, @Transactional, Flyway migrations.',
      },
      {
        n: '3',
        period: 'Days 43–63 (Dec 21–Jan 10)',
        title: 'Spring Boot: Ranga Karanam (Practical First)',
        desc: '34h: REST APIs from scratch, Spring Data JPA, Spring Security JWT, Docker, Actuator. Working production app in 3 weeks.',
      },
      {
        n: '4',
        period: 'Days 64–91 (Jan 11–Feb 7)',
        title: 'Spring Boot: John Thompson (Deep Internals)',
        desc: '53h: IoC/DI internals, AOP, full testing pyramid (MockMvc + Testcontainers), Kafka, Redis, Spring Security OAuth2, GraalVM native.',
      },
      {
        n: '5',
        period: 'Days 92–98 (Feb 8–Feb 14)',
        title: 'Capstone: FPO REST API',
        desc: 'Build full Flight Management API: JWT auth + Kafka events + Redis cache + Docker Compose + GitHub Actions CI. Portfolio piece.',
      },
    ],
    courses: [
      {
        rank: 1,
        title: 'Java 8 New Features in Simple Way',
        instructor: 'Navin Reddy — Telusko',
        hours: 20,
        rating: 4.5,
        reviews: '15K+',
        students: '80K+',
        url: 'https://www.udemy.com/course/java-8-new-features-in-simple-way/',
        badge: '🟡 FAST-TRACK (Wk 1–2)',
        badgeColor: '#D97706',
        why: 'With C# background, skip basic Java OOP entirely. Focus only on: Lambdas, Functional interfaces, Streams API, Optional, CompletableFuture. These 4 topics are used in every Spring Boot app you write.',
        covers: [
          'Lambda expressions + Functional interfaces (Predicate, Function, Consumer, Supplier)',
          'Streams API: filter, map, collect, groupingBy, flatMap, reduce',
          'Optional: of, ofNullable, orElse, map, flatMap — eliminate null checks',
          'CompletableFuture: supplyAsync, thenApply, allOf — async programming',
          'Method references: Class::method, instance::method',
        ],
      },
      {
        rank: 2,
        title: 'Hibernate & Spring Data JPA: Beginner to Guru',
        instructor: 'John Thompson (Spring Framework Guru)',
        hours: 73,
        rating: 4.5,
        reviews: '8K+',
        students: '30K+',
        url: 'https://www.udemy.com/course/hibernate-and-spring-data-jpa-beginner-to-guru/',
        badge: '🥇 JPA CORE (Wk 3–6)',
        badgeColor: '#16A34A',
        why: "Most comprehensive JPA/Hibernate course on Udemy. John Thompson is THE Spring authority. Understanding JPA deeply makes you a Spring Boot expert, not just a user. Don't skip any section here.",
        covers: [
          '@Entity, @Id, @GeneratedValue, @Column, @Embeddable mapping',
          '@ManyToOne (LAZY), @OneToMany (mappedBy), @ManyToMany join entity pattern',
          'N+1 problem: @EntityGraph, JOIN FETCH, @BatchSize, @FetchJoin',
          'JpaRepository, derived queries, @Query JPQL + native, Specifications',
          '@Transactional: REQUIRED/REQUIRES_NEW/NESTED propagation, rollbackFor',
          'Flyway migrations, Criteria API, DTO projections, second-level cache',
        ],
      },
      {
        rank: 3,
        title: 'Spring Boot with IntelliJ — Build Real-World Project',
        instructor: 'Ranga Karanam (in28minutes)',
        hours: 34,
        rating: 4.6,
        reviews: '12K+',
        students: '40K+',
        url: 'https://www.udemy.com/course/spring-boot-using-intellij-build-a-real-world-project/',
        badge: '🥇 SPRING BOOT (Wk 7–10 FIRST)',
        badgeColor: '#16A34A',
        why: 'Do Ranga first. Practical, gets you building in day 1. IntelliJ free version. Real-world project from scratch. REST API + JPA + Security + Docker in 34h = working production app in 3 weeks.',
        covers: [
          '@SpringBootApplication auto-configuration deep dive',
          'REST API: CRUD, @Valid bean validation, global @ControllerAdvice',
          'Spring Data JPA integration with PostgreSQL',
          'Spring Security: JWT authentication + refresh tokens',
          'Docker + Docker Compose for local development',
          'Spring Actuator + Micrometer metrics',
        ],
      },
      {
        rank: 4,
        title: 'Spring Framework 6: Beginner to Guru',
        instructor: 'John Thompson (Spring Framework Guru)',
        hours: 53,
        rating: 4.6,
        reviews: '10K+',
        students: '35K+',
        url: 'https://www.udemy.com/course/spring-framework-6-beginner-to-guru/',
        badge: '🥇 DEEP INTERNALS (Wk 10–14 SECOND)',
        badgeColor: '#16A34A',
        why: 'Do after Ranga. John Thompson explains WHY Spring works. IoC container, DI, AOP, full testing with Testcontainers, Spring Security with Cognito OAuth2 Resource Server (exactly FPO pattern).',
        covers: [
          'IoC container internals: bean lifecycle, scopes, @Lazy, @Primary',
          'Aspect-Oriented Programming (AOP): @Around, @Before, @After',
          'Full testing pyramid: @WebMvcTest, @DataJpaTest, @SpringBootTest + Testcontainers Kafka',
          'Spring Security: JWT with jjwt + Cognito OAuth2 Resource Server (JWKS)',
          'Spring Reactive: Mono/Flux, WebClient replacing RestTemplate',
          'GraalVM native image: 50ms startup for Lambda cold-start',
        ],
      },
    ],
    skipNote:
      'J2EE Servlets/JSP course — skip entirely. Spring Boot abstracts all of it and you will never write raw Servlets in modern Java. Those 2 weeks go to extra Spring Boot practice.',
  },
  {
    id: 'micro',
    skill: 'Microservices',
    icon: '🏛',
    color: '#E11D48',
    accent: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    phase: 3,
    days: 49,
    hours: 147,
    startDate: 'Feb 15, 2027',
    endDate: 'Apr 4, 2027',
    weeks: '7w',
    tag: 'MAX TIME ⭐',
    goal: '7 weeks, 147 hours. Two best microservices courses on Udemy in sequence. Ranga Karanam (Spring Cloud, K8s, Docker) then Sergey Kargopolov (Kafka, RabbitMQ, CQRS, Saga patterns). Extra 74h beyond course content: map every pattern to FPO Cloud. Lambda=microservice. Step Functions=Saga. EventBridge=Kafka. This phase makes you a far more valuable FPO team member.',
    breakdown: [
      {
        n: '1',
        period: 'Days 1–12 (Feb 15–Feb 26)',
        title: 'Ranga: Spring Cloud Fundamentals',
        desc: 'Eureka discovery, Spring Cloud Config, Spring Cloud Gateway, load balancing, fault tolerance with Resilience4j',
      },
      {
        n: '2',
        period: 'Days 13–25 (Feb 27–Mar 11)',
        title: 'Ranga: Docker + Kubernetes + Tracing',
        desc: 'Docker Compose microservices, Kubernetes deployments, HPA, distributed tracing with Zipkin/Sleuth',
      },
      {
        n: '3',
        period: 'Days 26–38 (Mar 12–Mar 24)',
        title: 'Kargopolov: Kafka + RabbitMQ + CQRS',
        desc: 'Apache Kafka producer/consumer, RabbitMQ, CQRS + Event Sourcing with Axon Framework, Saga pattern',
      },
      {
        n: '4',
        period: 'Days 39–44 (Mar 25–Mar 30)',
        title: 'Kargopolov: Advanced Security + Testing',
        desc: 'Spring Cloud Contract testing, OAuth2 between microservices, service-to-service JWT',
      },
      {
        n: '5',
        period: 'Days 45–49 (Mar 31–Apr 4)',
        title: 'FPO Architecture Mapping + ADR',
        desc: 'Write ADR: ArgoCD ApplicationSet replacing TeamCity. Map every FPO component to patterns. Present to Karsten.',
      },
    ],
    courses: [
      {
        rank: 1,
        title: 'Java Spring Boot Microservices with Spring Cloud, K8s & Docker',
        instructor: 'Ranga Karanam (in28minutes)',
        hours: 35,
        rating: 4.6,
        reviews: '18K+',
        students: '45K+',
        url: 'https://www.udemy.com/course/java-spring-boot-microservices-with-spring-cloud-k8s-docker/',
        badge: '🥇 PRIMARY (Wk 1–4)',
        badgeColor: '#16A34A',
        why: 'Best practical microservices course on Udemy. Covers exactly what FPO uses: Spring Cloud Gateway, Eureka, Resilience4j circuit breaker, Docker + Kubernetes, Zipkin distributed tracing.',
        covers: [
          'Service decomposition and bounded context design',
          'Spring Cloud Gateway — API gateway patterns',
          'Eureka Service Discovery — register and discover',
          'Resilience4j: circuit breaker, retry, bulkhead, rate limiter',
          'Docker Compose for multi-service local dev',
          'Kubernetes: Deployments, Services, Ingress, HPA, Helm basics',
        ],
      },
      {
        rank: 2,
        title: 'Building Microservices with Spring Boot & Spring Cloud',
        instructor: 'Sergey Kargopolov',
        hours: 38,
        rating: 4.5,
        reviews: '12K+',
        students: '65K+',
        url: 'https://www.udemy.com/course/building-microservices-with-spring-boot-and-spring-cloud/',
        badge: '🥈 SECOND (Wk 4–7)',
        badgeColor: '#0369A1',
        why: 'Voted best microservices course on Udemy by multiple reviewers. Fills gaps Ranga leaves: deep Kafka, RabbitMQ, CQRS/Event Sourcing with Axon, Saga orchestration. Bonus: Kafka + RabbitMQ projects.',
        covers: [
          'Apache Kafka: producer, consumer, partitions, consumer groups',
          'RabbitMQ: exchanges, queues, routing keys',
          'CQRS + Event Sourcing with Axon Framework',
          'Saga pattern: choreography + orchestration approaches',
          'Spring Cloud Contract: consumer-driven contract testing',
          'Docker + AWS EKS production deployment',
        ],
      },
      {
        rank: 3,
        title: 'Spring Boot Microservices — Beginner to Guru',
        instructor: 'John Thompson (Spring Framework Guru)',
        hours: 16,
        rating: 4.4,
        reviews: '3K+',
        students: '10K+',
        url: 'https://www.udemy.com/course/spring-boot-microservices-with-spring-cloud/',
        badge: '🎯 REFERENCE',
        badgeColor: '#7C3AED',
        why: "John Thompson's architectural deep-dive. Use as reference for DDD, advanced architectural decisions, and Docker Swarm patterns. Cover the DDD + bounded contexts sections specifically.",
        covers: [
          'Domain-Driven Design (DDD) in microservices',
          'Bounded contexts and aggregate design',
          'Spring Cloud Config Server deep dive',
          'Docker Swarm orchestration',
          'Distributed tracing architecture',
        ],
      },
    ],
    skipNote:
      'Master Spring Boot Microservices with CQRS (Sean Campbell) — good but fully overlaps with Kargopolov. Skip unless you want extra Axon Framework practice.',
  },
  {
    id: 'python',
    skill: 'Python',
    icon: '🐍',
    color: '#0D9488',
    accent: '#0F766E',
    bg: '#F0FDFA',
    border: '#99F6E4',
    phase: 4,
    days: 28,
    hours: 84,
    startDate: 'Apr 5, 2027',
    endDate: 'May 2, 2027',
    weeks: '4w',
    tag: '',
    goal: "4 weeks, 84 hours. Angela Yu's 100 Days of Code (60h) is the most engaging Python course ever made — 4.8★, 500K reviews, 3M+ students. Focus on Days 1–55 only (core Python + scripting + APIs). Skip Days 56–100 (data science/ML — not relevant to DevOps). Use spare 24 hours to build 3 real DevOps automation tools with boto3 and the Kubernetes Python client.",
    breakdown: [
      {
        n: '1',
        period: 'Days 1–10 (Apr 5–Apr 14)',
        title: 'Angela: Days 1–30 — Core Python',
        desc: 'Syntax, data types, OOP, error handling, file I/O — fast-track given JS/Java background. Focus on Python idioms.',
      },
      {
        n: '2',
        period: 'Days 11–18 (Apr 15–Apr 22)',
        title: 'Angela: Days 31–55 — Automation + APIs',
        desc: 'subprocess, os/sys, requests library, web APIs, CSV/JSON processing. DevOps-relevant content focus.',
      },
      {
        n: '3',
        period: 'Days 19–24 (Apr 23–Apr 28)',
        title: 'Al Sweigart: Automate the Boring Stuff',
        desc: '9h: File system, regex log parsing, subprocess, scheduling. Pure DevOps automation mindset.',
      },
      {
        n: '4',
        period: 'Days 25–28 (Apr 29–May 2)',
        title: 'Build 3 DevOps Scripts',
        desc: 'health_checker.py + infra_report.py (boto3 S3/EC2/CloudWatch → Slack) + pod_monitor.py (K8s client → PagerDuty)',
      },
    ],
    courses: [
      {
        rank: 1,
        title: '100 Days of Code — The Complete Python Pro Bootcamp',
        instructor: 'Dr. Angela Yu',
        hours: 60,
        rating: 4.8,
        reviews: '500K+',
        students: '3M+',
        url: 'https://www.udemy.com/course/100-days-of-code/',
        badge: '🥇 PRIMARY',
        badgeColor: '#16A34A',
        why: 'Highest-rated Python course on Udemy. 4.8★, 500K reviews, 3M+ students. Angela Yu is world-class. Focus Days 1–55 only. Skip all data science/ML days (60–100). Best Python learning experience available.',
        covers: [
          'Days 1–14: Python fundamentals, OOP, data structures',
          'Days 15–30: File I/O, error handling, decorators, closures',
          'Days 31–40: requests library, REST APIs, web automation',
          'Days 41–55: subprocess, os/sys, argparse, logging module (DevOps focus)',
          'SKIP Days 56–100: Data science, Pandas, ML — not needed for DevOps',
        ],
      },
      {
        rank: 2,
        title: 'Automate the Boring Stuff with Python Programming',
        instructor: 'Al Sweigart',
        hours: 9,
        rating: 4.6,
        reviews: '25K+',
        students: '190K+',
        url: 'https://www.udemy.com/course/automate/',
        badge: '🥈 DEVOPS SCRIPTING',
        badgeColor: '#0369A1',
        why: "Short (9h), focused entirely on automation — exactly DevOps needs. Files, regex, web scraping, scheduling, Excel. Perfect supplement to Angela's course. Finish in 3 days at 3h/day.",
        covers: [
          'File system automation: pathlib, os, shutil',
          'Regular expressions for log analysis',
          'Web scraping with requests + BeautifulSoup',
          'Subprocess: running shell commands from Python',
          'Task scheduling and automation workflows',
        ],
      },
    ],
    skipNote:
      'Skip any Python for Data Science, Pandas, NumPy, Machine Learning courses entirely. None of that is relevant to DevOps automation work.',
  },
  {
    id: 'devops',
    skill: 'DevOps',
    icon: '⚙',
    color: '#EA580C',
    accent: '#C2410C',
    bg: '#FFF7ED',
    border: '#FED7AA',
    phase: 4,
    days: 35,
    hours: 105,
    startDate: 'May 3, 2027',
    endDate: 'Jun 6, 2027',
    weeks: '5w',
    tag: '',
    goal: "The final 5 weeks — everything comes together. Nana Janashia is the #1 DevOps educator on Udemy/YouTube. KodeKloud is the #1 hands-on lab platform for DevOps. Given your 7 AWS certifications and daily FPO Cloud work, this is deep reinforcement. The final week: deploy your entire year's work — React + Spring Boot + PostgreSQL on Kubernetes via Helm + ArgoCD. 365 days complete.",
    breakdown: [
      {
        n: '1',
        period: 'Days 1–14 (May 3–May 16)',
        title: 'Nana: Docker + Kubernetes + CI/CD',
        desc: 'Nana Janashia: Linux, Docker multi-stage, K8s production patterns, Jenkins, GitHub Actions, Terraform, AWS',
      },
      {
        n: '2',
        period: 'Days 15–28 (May 17–May 30)',
        title: 'KodeKloud: Interactive Labs',
        desc: 'Real terminal labs: Terraform AWS provisioning, Ansible playbooks, K8s CKA prep, Prometheus/Grafana monitoring',
      },
      {
        n: '3',
        period: 'Days 29–35 (May 31–Jun 6)',
        title: '365-Day Grand Capstone',
        desc: 'Deploy everything: React (Netlify) + Spring Boot API (ECS/EKS) + PostgreSQL (RDS) + Redis (ElastiCache) + CI/CD GitHub Actions + monitoring Datadog. 365 days COMPLETE.',
      },
    ],
    courses: [
      {
        rank: 1,
        title: 'DevOps Bootcamp — Become a DevOps Engineer (Nana Janashia)',
        instructor: 'Nana Janashia (TechWorld with Nana)',
        hours: 40,
        rating: 4.8,
        reviews: '20K+',
        students: '120K+',
        url: 'https://www.udemy.com/course/decodingdevops/',
        badge: '🥇 PRIMARY',
        badgeColor: '#16A34A',
        why: '#1 most-recommended DevOps course globally. Nana is THE DevOps educator. Crystal-clear diagrams explain every tool before you touch a terminal. Linux → Docker → K8s → CI/CD → AWS progression. 4.8★.',
        covers: [
          'Linux fundamentals + Bash scripting for DevOps',
          'Docker: multi-stage builds, Docker Compose, container security',
          'Kubernetes: production patterns, HPA, Ingress, NetworkPolicy, PDB',
          'GitHub Actions CI/CD + Jenkins pipelines',
          'Terraform Infrastructure as Code: modules, workspaces, remote state',
          'AWS: ECS Fargate, EKS, ECR, CloudWatch, Secrets Manager',
        ],
      },
      {
        rank: 2,
        title: 'The Complete DevOps Bootcamp (KodeKloud)',
        instructor: 'Mumshad Mannambeth — KodeKloud',
        hours: 25,
        rating: 4.7,
        reviews: '15K+',
        students: '80K+',
        url: 'https://www.udemy.com/course/the-complete-devops-bootcamp/',
        badge: '🥈 LABS + PRACTICE',
        badgeColor: '#0369A1',
        why: 'KodeKloud is unmatched for hands-on practice. Interactive terminal simulates real production. Do alongside Nana for theory+practice combo. Terraform, Ansible, Kubernetes labs are exceptional.',
        covers: [
          'Linux + Git interactive terminal labs',
          'Docker + Kubernetes hands-on labs',
          'Terraform: real AWS resource provisioning exercises',
          'Ansible: configuration management playbooks',
          'Prometheus + Grafana monitoring setup labs',
          'CI/CD: Jenkins + GitHub Actions pipeline labs',
        ],
      },
      {
        rank: 3,
        title: 'Docker & Kubernetes — The Practical Guide 2025',
        instructor: 'Maximilian Schwarzmüller (Academind)',
        hours: 23,
        rating: 4.7,
        reviews: '30K+',
        students: '160K+',
        url: 'https://www.udemy.com/course/docker-kubernetes-the-practical-guide/',
        badge: '🎯 OPTIONAL DEPTH',
        badgeColor: '#7C3AED',
        why: "If you want deeper Docker + K8s specifically, Max's course is best in class. 4.7★, 160K students. Use it for the detailed Kubernetes volumes, ConfigMaps, and AWS EKS sections if Nana moves too fast.",
        covers: [
          'Docker: images, containers, volumes, networks deep dive',
          'Docker Compose multi-service production applications',
          'Kubernetes: Pods, Deployments, Services, Ingress deep dive',
          'K8s: Volumes, ConfigMaps, Secrets, Rolling updates',
          'AWS EKS deployment with managed node groups',
        ],
      },
    ],
    skipNote:
      'Anil Dollor DevOps 2023 — skip. Nana Janashia + KodeKloud are significantly better with more up-to-date content and hands-on labs.',
  },
];

const TOTAL_HOURS = PLAN.reduce((s, p) => s + p.hours, 0);
const TOTAL_COURSES = PLAN.reduce((s, p) => s + p.courses.length, 0);
const TOTAL_DAYS = PLAN.reduce((s, p) => s + p.days, 0);
const DAY_OFFSETS = {
  react: 0,
  rn: 92,
  nextjs: 120,
  spring: 155,
  micro: 253,
  python: 302,
  devops: 330,
};

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
        border: `1.5px solid ${c.badge.includes('PRIMARY') || c.badge.includes('CORE') || c.badge.includes('INTERNALS') || c.badge.includes('BOOT') ? accent + '45' : '#E2E8F0'}`,
        borderRadius: 12,
        padding: '14px 16px',
        boxShadow:
          c.badge.includes('PRIMARY') || c.badge.includes('CORE')
            ? `0 4px 16px ${accent}10`
            : '0 1px 4px rgba(0,0,0,0.05)',
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `0 8px 24px ${accent}18`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.05)';
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
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 6,
              background: c.badgeColor + '18',
              color: c.badgeColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 10,
              fontWeight: 900,
              flexShrink: 0,
            }}
          >
            {c.rank}
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
            background: c.badgeColor + '15',
            color: c.badgeColor,
            border: `1px solid ${c.badgeColor}30`,
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {c.badge}
        </span>
      </div>
      <div style={{ fontSize: 11, color: '#64748B', marginBottom: 8 }}>
        by {c.instructor}
      </div>
      <div
        style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 8 }}
      >
        <span style={{ fontSize: 11, fontWeight: 700, color: '#0F172A' }}>
          ⏱ {c.hours}h
        </span>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#F59E0B' }}>
          ★ {c.rating}
        </span>
        <span style={{ fontSize: 11, color: '#64748B' }}>💬 {c.reviews}</span>
        <span style={{ fontSize: 11, color: '#64748B' }}>👥 {c.students}</span>
      </div>
      <div
        style={{
          fontSize: 11,
          color: '#4338CA',
          fontStyle: 'italic',
          lineHeight: 1.65,
          marginBottom: 10,
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
          fontWeight: 700,
          color: '#94A3B8',
          letterSpacing: '0.1em',
          marginBottom: 6,
        }}
      >
        COVERS
      </div>
      {c.covers.map((item, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            gap: 7,
            alignItems: 'flex-start',
            padding: '2px 0',
          }}
        >
          <span
            style={{ color: accent, fontSize: 10, flexShrink: 0, marginTop: 2 }}
          >
            ▸
          </span>
          <span style={{ fontSize: 11, color: '#374151', lineHeight: 1.65 }}>
            {item}
          </span>
        </div>
      ))}
      <div
        style={{
          marginTop: 10,
          fontSize: 10,
          color: '#94A3B8',
          textDecoration: 'underline',
        }}
      >
        Open on Udemy →
      </div>
    </a>
  );
}

function Block({ p, isOpen, onToggle }) {
  return (
    <div
      id={'b-' + p.id}
      style={{
        borderRadius: 16,
        border: `2px solid ${isOpen ? p.color + '65' : p.border}`,
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
            width: 56,
            height: 56,
            borderRadius: 14,
            flexShrink: 0,
            background: isOpen
              ? `linear-gradient(135deg,${p.color},${p.accent})`
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
              {p.skill}
            </span>
            {p.tag && (
              <span
                style={{
                  fontSize: 10,
                  padding: '2px 9px',
                  borderRadius: 20,
                  fontWeight: 800,
                  background: p.color + '18',
                  color: p.color,
                  border: `1px solid ${p.color}30`,
                }}
              >
                {p.tag}
              </span>
            )}
          </div>
          <div style={{ fontSize: 11, color: '#64748B' }}>
            {p.startDate} → {p.endDate} · {p.days} days · {p.weeks} ·{' '}
            {p.courses.length} courses
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
            {p.days}d × 3h/day
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
            padding: '18px 18px 22px',
          }}
        >
          <div
            style={{
              background: `linear-gradient(135deg,${p.color}10,${p.color}05)`,
              border: `1.5px solid ${p.color}22`,
              borderRadius: 12,
              padding: '14px 16px',
              marginBottom: 16,
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: p.color,
                letterSpacing: '0.12em',
                marginBottom: 7,
              }}
            >
              🎯 PHASE GOAL
            </div>
            <div style={{ fontSize: 12, color: '#334155', lineHeight: 1.9 }}>
              {p.goal}
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5,1fr)',
              gap: 8,
              marginBottom: 16,
            }}
          >
            {[
              ['📅', p.days + 'd', 'days'],
              ['⏱', '3h', 'per day'],
              ['📚', p.hours + 'h', 'total'],
              ['📖', p.courses.length, 'courses'],
              ['📆', p.weeks, 'duration'],
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
                  style={{ fontSize: 14, fontWeight: 800, color: '#0F172A' }}
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
              marginBottom: 16,
            }}
          >
            <div
              style={{
                height: '100%',
                borderRadius: 4,
                background: `linear-gradient(90deg,${p.color},${p.accent})`,
                marginLeft: `${(DAY_OFFSETS[p.id] / 365) * 100}%`,
                width: `${(p.days / 365) * 100}%`,
                boxShadow: `0 0 8px ${p.color}50`,
              }}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <div
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: '#94A3B8',
                letterSpacing: '0.12em',
                marginBottom: 8,
              }}
            >
              📋 WEEK-BY-WEEK BREAKDOWN
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {p.breakdown.map((b, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'flex-start',
                    background: '#FAFBFF',
                    borderRadius: 9,
                    padding: '10px 12px',
                    border: '1px solid #E8EEFF',
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      background: p.color + '20',
                      color: p.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 10,
                      fontWeight: 900,
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    {b.n}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 10,
                        color: p.color,
                        fontWeight: 700,
                        marginBottom: 2,
                      }}
                    >
                      {b.period}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: '#0F172A',
                        marginBottom: 2,
                      }}
                    >
                      {b.title}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: '#64748B',
                        lineHeight: 1.65,
                      }}
                    >
                      {b.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
            BEST UDEMY COURSES ({p.courses.length}) — click to open
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {p.courses.map((c, i) => (
              <CourseCard key={i} c={c} accent={p.color} />
            ))}
          </div>

          {p.skipNote && (
            <div
              style={{
                marginTop: 12,
                padding: '10px 14px',
                background: '#FFF7ED',
                borderRadius: 9,
                border: '1px solid #FED7AA',
                display: 'flex',
                gap: 8,
              }}
            >
              <span style={{ fontSize: 16, flexShrink: 0 }}>✂</span>
              <div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: '#C2410C',
                    letterSpacing: '0.1em',
                    marginBottom: 3,
                  }}
                >
                  SKIP / DEPRIORITISE
                </div>
                <div style={{ fontSize: 11, color: '#78350F' }}>
                  {p.skipNote}
                </div>
              </div>
            </div>
          )}
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
      <div
        style={{
          background:
            'linear-gradient(135deg,#1E1B4B 0%,#312E81 45%,#1A365D 100%)',
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
                Sumit Rawal · FPO Cloud Team · NextStep Bangkok
              </div>
              <h1
                style={{
                  fontSize: 'clamp(20px,5vw,32px)',
                  fontWeight: 900,
                  margin: 0,
                  color: '#FFFFFF',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.1,
                }}
              >
                365 Days of Udemy — Master Plan
              </h1>
              <div
                style={{
                  fontSize: 11,
                  color: 'rgba(255,255,255,0.36)',
                  marginTop: 4,
                }}
              >
                Jun 7, 2026 → Jun 6, 2027 · 3h/day · 1,095h · 7 skills ·{' '}
                {TOTAL_COURSES} best courses selected
              </div>
            </div>
          </div>

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
              ['1,095h', 'Total Hours'],
              ['3h', 'Per Day'],
              ['7', 'Skills'],
              [TOTAL_COURSES, 'Courses'],
              ["Jun 6 '27", 'Finish'],
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
              ['#0D9488', 28],
              ['#EA580C', 35],
            ].map(([col, fl], i) => (
              <div key={i} style={{ flex: fl, background: col }} />
            ))}
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {PLAN.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setOpen(p.id);
                  setTimeout(
                    () =>
                      document
                        .getElementById('b-' + p.id)
                        ?.scrollIntoView({
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
                  {p.icon} {p.skill} · {p.days}d · {p.hours}h
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{ maxWidth: 940, margin: '0 auto', padding: '16px 12px 48px' }}
      >
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
            📊 MASTER SCHEDULE — 365 DAYS · 1,095 HOURS · 3H/DAY
          </div>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: 11,
              minWidth: 560,
            }}
          >
            <thead>
              <tr style={{ background: '#F8FAFC' }}>
                {[
                  '',
                  'Skill',
                  'Days',
                  'Hours',
                  'Timeline →',
                  'Start',
                  'End',
                  '# Courses',
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
              {PLAN.map((p, i) => (
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
                        document
                          .getElementById('b-' + p.id)
                          ?.scrollIntoView({
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
                        width: 30,
                        height: 30,
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
                      {p.skill}
                    </div>
                    {p.tag && (
                      <div
                        style={{
                          fontSize: 9,
                          color: p.color,
                          fontWeight: 700,
                          marginTop: 1,
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
                      fontSize: 13,
                    }}
                  >
                    {p.hours}h
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
                          background: `linear-gradient(90deg,${p.color},${p.accent})`,
                          borderRadius: 3,
                          marginLeft: `${(DAY_OFFSETS[p.id] / 365) * 100}%`,
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
                  <td style={{ padding: '9px 10px' }}>
                    <span
                      style={{
                        fontSize: 10,
                        background: '#EEF2FF',
                        color: '#4F46E5',
                        padding: '2px 8px',
                        borderRadius: 20,
                        fontWeight: 700,
                      }}
                    >
                      {p.courses.length} courses
                    </span>
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
                    fontSize: 14,
                  }}
                >
                  {TOTAL_HOURS}h
                </td>
                <td style={{ padding: '10px', fontSize: 10, color: '#94A3B8' }}>
                  Jun 7, 2026 → Jun 6, 2027
                </td>
                <td
                  colSpan={2}
                  style={{ padding: '10px', fontWeight: 700, color: '#64748B' }}
                >
                  365 days · 3h/day
                </td>
                <td style={{ padding: '10px' }}>
                  <span
                    style={{
                      fontSize: 10,
                      background: '#EEF2FF',
                      color: '#4F46E5',
                      padding: '2px 8px',
                      borderRadius: 20,
                      fontWeight: 700,
                    }}
                  >
                    {TOTAL_COURSES} total
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ marginTop: 8, fontSize: 10, color: '#94A3B8' }}>
            👆 Click any row to jump to that skill's full plan
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {PLAN.map((p) => (
            <Block
              key={p.id}
              p={p}
              isOpen={open === p.id}
              onToggle={() => toggle(p.id)}
            />
          ))}
        </div>

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
            ⚡ 6 NON-NEGOTIABLE RULES — 3H/DAY FOR 365 DAYS
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
                'Fixed 7:30–10:30 AM block',
                'Every day before FPO work. No exceptions. 3h non-negotiable. Consistent daily beats catch-up weekends every time.',
              ],
              [
                '⏩',
                '1.25× on theory',
                'Slides, diagrams, intros → 1.25×. Code-along → full speed always. Saves ~200h across 1,095h total.',
              ],
              [
                '✂',
                'Skip sections ruthlessly',
                'Intros, outros, already-known content → skip instantly. Every phase has surplus hours built in for this.',
              ],
              [
                '⭐',
                '3 skills get deepest focus',
                'React (276h), Spring Boot (294h), Microservices (147h). These 3 together are 717h — 65% of your total time.',
              ],
              [
                '🏗',
                'Apply every concept to FPO',
                'After each study session: map the concept to FPO. Spring Boot = C# Lambda. Kafka = EventBridge. K8s = ECS. Instant retention.',
              ],
              [
                '📅',
                'Sunday 10-min review',
                'Every Sunday: % complete this week? Behind >20%? Add 30 min/day next week. Track on paper, not in your head.',
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

        <div style={{ marginTop: 16, textAlign: 'center', paddingBottom: 28 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 6,
              flexWrap: 'wrap',
              marginBottom: 6,
            }}
          >
            {[
              ['⚛', 'React', '92d', '#0EA5E9'],
              ['📱', 'React Native', '28d', '#7C3AED'],
              ['▲', 'Next.js', '35d', '#374151'],
              ['🌱', 'Spring Boot', '98d', '#16A34A'],
              ['🏛', 'Microservices', '49d', '#E11D48'],
              ['🐍', 'Python', '28d', '#0D9488'],
              ['⚙', 'DevOps', '35d', '#EA580C'],
            ].map(([ic, sk, d, col], i, arr) => (
              <>
                <span
                  key={sk}
                  style={{ fontWeight: 700, color: col, fontSize: 11 }}
                >
                  {ic} {sk}{' '}
                  <span style={{ fontSize: 9, opacity: 0.6 }}>({d})</span>
                </span>
                {i < arr.length - 1 && (
                  <span key={sk + '→'} style={{ color: '#CBD5E1' }}>
                    →
                  </span>
                )}
              </>
            ))}
          </div>
          <div
            style={{ fontSize: 10, color: '#94A3B8', letterSpacing: '0.18em' }}
          >
            365 DAYS · 1,095 HOURS · 3H/DAY · JUN 7 2026 → JUN 6 2027
          </div>
        </div>
      </div>
    </div>
  );
}
