import { useState } from 'react';

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
    total: 276,
    courseH: 175,
    practiceH: 101,
    offset: 0,
    startDate: 'Jun 10, 2026',
    endDate: 'Sep 9, 2026',
    tag: 'MAX ⭐',
    daily:
      '6:00–7:45 AM Udemy (1.75h) · 7:45–9:00 AM code-along + mini project (1.25h)',
    practice: [
      'Rebuild each hook from scratch without watching',
      'Add TypeScript to every exercise',
      'Build FPO Flight Status card incrementally each week',
      'Deploy weekly progress to Netlify',
      'Re-implement useState, useEffect manually to understand internals',
    ],
    courses: [
      {
        h: 84,
        rating: 4.7,
        stu: '114K+',
        title: 'The Ultimate React Course 2025',
        by: 'Jonas Schmedtmann',
        url: 'https://www.udemy.com/course/the-ultimate-react-course/',
        tag: '🥇 START HERE',
        tc: '#15803D',
        why: 'Best React course on Udemy. 5 real projects, 16h Next.js bonus. Hooks, React Query, Redux Toolkit, Tailwind, advanced patterns.',
      },
      {
        h: 55,
        rating: 4.7,
        stu: '780K+',
        title: 'React — The Complete Guide 2025',
        by: 'Max Schwarzmüller',
        url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
        tag: '🥈 SECOND',
        tc: '#0369A1',
        why: '780K students. Max teaches differently — double depth on every concept. TypeScript in React, Jest testing sections essential.',
      },
      {
        h: 25,
        rating: 4.6,
        stu: '90K+',
        title: 'React Tutorial & Projects Course 2025',
        by: 'John Smilga',
        url: 'https://www.udemy.com/course/react-tutorial-and-projects-course/',
        tag: '🏗 PROJECTS',
        tc: '#7C3AED',
        why: '15 portfolio projects. Pause, close laptop, rebuild from scratch. Best project-based reinforcement.',
      },
      {
        h: 11,
        rating: 4.4,
        stu: '15K+',
        title: 'React Interview Masterclass — 200 Questions (Hindi)',
        by: 'Hindi Instructor',
        url: 'https://www.udemy.com/course/react-interview-masterclass-top-200-questions-in-hindi/',
        tag: '🎯 INTERVIEW',
        tc: '#6D28D9',
        why: '200 Q&A consolidates everything. Do in last week as your exit exam before React Native.',
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
    total: 84,
    courseH: 52,
    practiceH: 32,
    offset: 92,
    startDate: 'Sep 10, 2026',
    endDate: 'Oct 7, 2026',
    tag: '',
    daily:
      '6:00–7:45 AM Udemy (1.75h) · 7:45–9:00 AM build on Expo Go on iPad (1.25h)',
    practice: [
      'Run every exercise on your real iPad via Expo Go',
      'Build FPO-style flight list app with FlatList',
      'Add React Navigation between 3 screens',
      'Test layouts on both phone and iPad',
      'Ship one EAS build to TestFlight',
    ],
    courses: [
      {
        h: 38,
        rating: 4.8,
        stu: '197K+',
        title: 'The Complete React Native + Hooks Course',
        by: 'Stephen Grider',
        url: 'https://www.udemy.com/course/the-complete-react-native-and-redux-course/',
        tag: '🥇 PRIMARY',
        tc: '#15803D',
        why: 'Highest-rated RN course: 4.8★, 45K reviews. iOS + Android + Expo + EAS Build. Updated Dec 2025.',
      },
      {
        h: 14,
        rating: 4.6,
        stu: '45K+',
        title: 'React Native — The Practical Guide 2025',
        by: 'Max Schwarzmüller',
        url: 'https://www.udemy.com/course/react-native-the-practical-guide/',
        tag: '🥈 SECOND',
        tc: '#0369A1',
        why: 'Max covers animations, device APIs (camera, location, haptics) that Grider skips. Different angle = deeper understanding.',
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
    total: 105,
    courseH: 65,
    practiceH: 40,
    offset: 120,
    startDate: 'Oct 8, 2026',
    endDate: 'Nov 11, 2026',
    tag: '',
    daily:
      '6:00–7:40 AM Udemy (1.67h) · 7:40–9:00 AM build with App Router (1.33h)',
    practice: [
      'Rebuild each component using Server Components',
      'Add Server Actions to every form exercise',
      'Deploy to Vercel after each chapter for real feedback',
      'Connect PostgreSQL + Prisma to your own project',
      'Build FPO web portal as phase capstone',
    ],
    courses: [
      {
        h: 25,
        rating: 4.7,
        stu: '200K+',
        title: 'Next.js & React — The Complete Guide',
        by: 'Max Schwarzmüller',
        url: 'https://www.udemy.com/course/nextjs-react-the-complete-guide/',
        tag: '🥇 PRIMARY',
        tc: '#15803D',
        why: '200K students. Next.js 15, App Router, Server Actions, NextAuth v5, Prisma. Two learning paths.',
      },
      {
        h: 20,
        rating: 4.6,
        stu: '90K+',
        title: 'React Tutorial & Projects (Next.js Sections Only)',
        by: 'John Smilga',
        url: 'https://www.udemy.com/course/react-tutorial-and-projects-course/',
        tag: '🏗 PROJECTS',
        tc: '#7C3AED',
        why: 'Pick full-stack Next.js project sections only. Best project reinforcement to cement what Max taught.',
      },
      {
        h: 20,
        rating: 4.5,
        stu: '20K+',
        title: 'Next.js Full Stack Development 2023',
        by: 'Anil Dollor',
        url: 'https://www.udemy.com/course/nextjs-fullstack-development-2023-by-anil-dollor',
        tag: '🇮🇳 HINDI',
        tc: '#D97706',
        why: 'Hindi full-stack walkthrough. Deployment and full-stack patterns explained very clearly.',
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
    total: 294,
    courseH: 185,
    practiceH: 109,
    offset: 155,
    startDate: 'Nov 12, 2026',
    endDate: 'Feb 17, 2027',
    tag: 'MAX ⭐',
    daily: '6:00–7:45 AM Udemy (1.75h) · 7:45–9:00 AM code in IntelliJ (1.25h)',
    practice: [
      'Write JUnit tests for every class you build',
      'Build Flight CRUD REST API from scratch each week',
      'Try to reproduce the exercise BEFORE watching the solution',
      'Map every concept to FPO: Spring Bean = Lambda, JPA = DynamoDB',
      'Run your API with Docker Compose + Postman collection',
    ],
    courses: [
      {
        h: 20,
        rating: 4.5,
        stu: '80K+',
        title: 'Java 8 New Features in Simple Way',
        by: 'Navin Reddy (Telusko)',
        url: 'https://www.udemy.com/course/java-8-new-features-in-simple-way/',
        tag: '☕ FAST-TRACK',
        tc: '#D97706',
        why: 'With C# background, Java OOP = 1 day. Focus only on Streams, Lambdas, Optional, CompletableFuture. Complete in 7 days.',
      },
      {
        h: 55,
        rating: 4.5,
        stu: '30K+',
        title: 'Hibernate & Spring Data JPA: Beginner to Guru',
        by: 'John Thompson',
        url: 'https://www.udemy.com/course/hibernate-and-spring-data-jpa-beginner-to-guru/',
        tag: '🗄 JPA CORE',
        tc: '#15803D',
        why: 'Most comprehensive JPA course on Udemy. N+1 problem, @EntityGraph, Criteria API — separates Spring experts from users.',
      },
      {
        h: 34,
        rating: 4.6,
        stu: '40K+',
        title: 'Spring Boot with IntelliJ — Real-World Project',
        by: 'Ranga Karanam',
        url: 'https://www.udemy.com/course/spring-boot-using-intellij-build-a-real-world-project/',
        tag: '🚀 PRACTICAL',
        tc: '#15803D',
        why: 'Practical first — working REST API in 11 days. Do Ranga before Thompson. Real-world project from day 1.',
      },
      {
        h: 40,
        rating: 4.6,
        stu: '35K+',
        title: 'Spring Framework 6: Beginner to Guru',
        by: 'John Thompson',
        url: 'https://www.udemy.com/course/spring-framework-6-beginner-to-guru/',
        tag: '🔬 DEEP',
        tc: '#0369A1',
        why: 'IoC/DI internals, AOP, full testing pyramid with Testcontainers, Spring Security + Cognito OAuth2 = exact FPO pattern.',
      },
      {
        h: 36,
        rating: 4.6,
        stu: '150K+',
        title: 'Master Spring Boot 3 & Spring Framework 6',
        by: 'Ranga Karanam',
        url: 'https://www.udemy.com/course/spring-boot-and-spring-framework-tutorial-for-beginners/',
        tag: '🎓 MASTER',
        tc: '#7C3AED',
        why: '150K+ students. Full-stack Spring+React integration. Connects your frontend to Spring Boot backend end-to-end.',
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
    total: 147,
    courseH: 90,
    practiceH: 57,
    offset: 253,
    startDate: 'Feb 18, 2027',
    endDate: 'Apr 7, 2027',
    tag: 'MAX ⭐',
    daily:
      '6:00–7:40 AM Udemy (1.67h) · 7:40–9:00 AM run services with Docker Compose (1.33h)',
    practice: [
      'Run every service locally with Docker Compose',
      'Kill one service, watch circuit breaker fallback in action',
      'Draw architecture diagram after every new concept',
      'Map FPO patterns: EventBridge→Kafka, Step Functions→Saga, Lambda→Microservice',
      'Write one Architecture Decision Record per week for Karsten',
    ],
    courses: [
      {
        h: 35,
        rating: 4.6,
        stu: '45K+',
        title: 'Java Spring Boot Microservices with Spring Cloud, K8s & Docker',
        by: 'Ranga Karanam',
        url: 'https://www.udemy.com/course/java-spring-boot-microservices-with-spring-cloud-k8s-docker/',
        tag: '🥇 PRIMARY',
        tc: '#15803D',
        why: 'Best practical microservices course. Spring Cloud Gateway, Eureka, Resilience4j, K8s — exactly what FPO Cloud uses.',
      },
      {
        h: 30,
        rating: 4.5,
        stu: '65K+',
        title: 'Building Microservices with Spring Boot & Spring Cloud',
        by: 'Sergey Kargopolov',
        url: 'https://www.udemy.com/course/building-microservices-with-spring-boot-and-spring-cloud/',
        tag: '📨 KAFKA+CQRS',
        tc: '#0369A1',
        why: 'Deep Kafka, RabbitMQ, CQRS + Event Sourcing with Axon, Saga pattern. Fills every gap Ranga leaves.',
      },
      {
        h: 15,
        rating: 4.4,
        stu: '10K+',
        title: 'Spring Boot Microservices: Beginner to Guru',
        by: 'John Thompson',
        url: 'https://www.udemy.com/course/spring-boot-microservices-with-spring-cloud/',
        tag: '🏗 ARCH',
        tc: '#7C3AED',
        why: 'DDD + bounded contexts section is essential for real architectural thinking in microservices.',
      },
      {
        h: 10,
        rating: 4.5,
        stu: '15K+',
        title: 'Master Spring Boot Microservices CQRS & Event Sourcing',
        by: 'Sean Campbell',
        url: 'https://www.udemy.com/course/master-spring-boot-microservices-with-cqrs-event-sourcing/',
        tag: '🔄 CQRS',
        tc: '#DC2626',
        why: 'Focused CQRS + Event Sourcing. Complements Kargopolov with deeper Axon Framework coverage.',
      },
    ],
  },
  {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    color: '#059669',
    dark: '#047857',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    days: 25,
    total: 75,
    courseH: 47,
    practiceH: 28,
    offset: 302,
    startDate: 'Apr 8, 2027',
    endDate: 'May 2, 2027',
    tag: '',
    daily:
      '6:00–7:30 AM Udemy (1.5h) · 7:30–9:00 AM write Python scripts (1.5h)',
    practice: [
      'Write a boto3 script to list all FPO Lambda functions',
      'Build a server health checker using subprocess + requests',
      'Parse CloudWatch logs with regex in Python',
      'Write a Kubernetes pod monitor using the K8s Python client',
      'Automate a daily FPO infra report to Slack with Python',
    ],
    courses: [
      {
        h: 22,
        rating: 4.8,
        stu: '3M+',
        title: '100 Days of Code — Python Pro Bootcamp (Days 1–55)',
        by: 'Dr. Angela Yu',
        url: 'https://www.udemy.com/course/100-days-of-code/',
        tag: '🥇 PRIMARY',
        tc: '#15803D',
        why: 'Best Python course ever. 4.8★, 500K reviews. Focus Days 1–55 (core + scripting). Skip data science days entirely.',
      },
      {
        h: 9,
        rating: 4.6,
        stu: '190K+',
        title: 'Automate the Boring Stuff with Python',
        by: 'Al Sweigart',
        url: 'https://www.udemy.com/course/automate/',
        tag: '⚙ AUTOMATE',
        tc: '#0369A1',
        why: 'Pure DevOps automation — file I/O, subprocess, regex for log parsing, scheduling. 9h, extremely dense.',
      },
      {
        h: 9,
        rating: 4.6,
        stu: '100K+',
        title: 'Python Mega Course — Build 10 Real Apps',
        by: 'Ardit Sulce',
        url: 'https://www.udemy.com/course/the-python-mega-course/',
        tag: '🏗 PROJECTS',
        tc: '#7C3AED',
        why: "10 real projects bridge fundamentals to practical DevOps scripting. Reinforces Angela's concepts with hands-on apps.",
      },
      {
        h: 7,
        rating: 4.7,
        stu: '500K+',
        title: 'Complete Python Bootcamp (DevOps scripts focus)',
        by: 'Jose Portilla',
        url: 'https://www.udemy.com/course/complete-python-bootcamp/',
        tag: '🔧 DEVOPS',
        tc: '#D97706',
        why: "Portilla's DevOps-relevant sections: subprocess, os/sys, argparse, logging. Perfect complement to Sweigart for FPO automation work.",
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
    total: 114,
    courseH: 72,
    practiceH: 42,
    offset: 327,
    startDate: 'May 3, 2027',
    endDate: 'Jun 9, 2027',
    tag: '🏁 DAY 365',
    daily:
      '6:00–7:40 AM Udemy (1.67h) · 7:40–9:00 AM terminal labs + hands-on (1.33h)',
    practice: [
      'Run every K8s command in KodeKloud terminal labs',
      'Write Terraform for one AWS resource you use daily in FPO',
      'Set up GitHub Actions CI for your Spring Boot API project',
      'Deploy your full 365-day capstone with Docker Compose + K8s',
      'Propose one concrete DevOps improvement to Karsten from this phase',
    ],
    courses: [
      {
        h: 35,
        rating: 4.8,
        stu: '120K+',
        title: 'DevOps Bootcamp — Become a DevOps Engineer',
        by: 'Nana Janashia (TechWorld with Nana)',
        url: 'https://www.udemy.com/course/decodingdevops/',
        tag: '🥇 PRIMARY',
        tc: '#15803D',
        why: '#1 DevOps course globally. 4.8★. Linux→Docker→K8s→CI/CD→AWS. Crystal-clear diagrams before every tool.',
      },
      {
        h: 20,
        rating: 4.7,
        stu: '80K+',
        title: 'The Complete DevOps Bootcamp',
        by: 'Mumshad Mannambeth (KodeKloud)',
        url: 'https://www.udemy.com/course/the-complete-devops-bootcamp/',
        tag: '🧪 LABS',
        tc: '#0369A1',
        why: 'Interactive terminal labs. Real production simulations. Best hands-on DevOps practice on Udemy.',
      },
      {
        h: 8,
        rating: 4.6,
        stu: '25K+',
        title: 'Mastering DevOps with Anil Dollor 2023',
        by: 'Anil Dollor',
        url: 'https://www.udemy.com/course/mastering-devops-with-anil-dollor-2023/',
        tag: '🇮🇳 HINDI',
        tc: '#D97706',
        why: 'Hindi DevOps recap — ties everything together in your native language. Great closure for the 365-day block.',
      },
      {
        h: 9,
        rating: 4.6,
        stu: '80K+',
        title: 'Terraform for Absolute Beginners with Labs',
        by: 'Mumshad Mannambeth',
        url: 'https://www.udemy.com/course/terraform-beginner-to-advanced/',
        tag: '🏗 TERRAFORM',
        tc: '#059669',
        why: 'Essential IaC for FPO AWS automation. KodeKloud interactive labs = hands-on from day 1.',
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
    days: 35,
    total: 105,
    courseH: 65,
    practiceH: 40,
    offset: 365,
    startDate: 'Jun 10, 2027',
    endDate: 'Jul 14, 2027',
    tag: '🆕 BONUS 35 DAYS',
    daily:
      '6:00–7:30 AM Udemy (1.5h) · 7:30–9:00 AM build AI agents in Python (1.5h)',
    practice: [
      'Build a RAG pipeline querying your own FPO documentation',
      'Create a LangGraph multi-agent research workflow',
      'Deploy a LangChain agent as an AWS Lambda function',
      'Build FPO AI assistant: natural language queries over flight data',
      'Ship one complete agent project to GitHub each week',
    ],
    courses: [
      {
        h: 22,
        rating: 4.7,
        stu: '60K+',
        title: 'ChatGPT + Generative AI Masterclass 2026',
        by: 'Dr. Frank Kane (ex-Amazon)',
        url: 'https://www.udemy.com/course/chatgpt-and-generative-ai/',
        tag: '✨ GEN AI FIRST',
        tc: '#D97706',
        why: 'Start here before LangChain. Ex-Amazon. LLMs, embeddings, RAG, prompt engineering (CoT, ReAct), AWS Bedrock. Essential GenAI foundation.',
      },
      {
        h: 30,
        rating: 4.7,
        stu: '50K+',
        title: 'Complete Agentic AI Engineering Course 2026',
        by: 'Ed Donner',
        url: 'https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/',
        tag: '🤖 FLAGSHIP',
        tc: '#7C3AED',
        why: 'THE 2026 flagship: 8 real projects — Career Digital Twin, Deep Research, SDR Agent, Engineering Team. OpenAI Agents SDK + CrewAI + LangGraph + AutoGen + MCP.',
      },
      {
        h: 13,
        rating: 4.7,
        stu: '114K+',
        title: 'LangChain: Develop LLM Powered Applications',
        by: 'Eden Marco',
        url: 'https://www.udemy.com/course/langchain/',
        tag: '🔗 LANGCHAIN',
        tc: '#0369A1',
        why: '114K students. LangChain chains, RAG pipelines, vector databases (Pinecone, FAISS), memory, tool calling. Foundation for building production agents.',
      },
    ],
  },
];

const TOT_STUDY = PHASES.reduce((s, p) => s + p.total, 0);
const TOT_COURSE = PHASES.reduce((s, p) => s + p.courseH, 0);
const TOT_PRACTICE = PHASES.reduce((s, p) => s + p.practiceH, 0);
const TOT_COURSES = PHASES.reduce((s, p) => s + p.courses.length, 0);
const TOT_DAYS = PHASES.reduce((s, p) => s + p.days, 0);

function CourseCard({ c, col }) {
  return (
    <a
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'block',
        textDecoration: 'none',
        background: '#fff',
        border: `1.5px solid ${c.tag.startsWith('🥇') || c.tag.includes('FLAGSHIP') || c.tag.includes('START') ? col + '55' : '#E2E8F0'}`,
        borderRadius: 12,
        padding: '12px 14px',
        boxShadow:
          c.tag.startsWith('🥇') || c.tag.includes('FLAGSHIP')
            ? `0 3px 12px ${col}10`
            : '0 1px 3px rgba(0,0,0,0.04)',
        transition: 'all 0.18s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `0 6px 18px ${col}18`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 8,
          marginBottom: 4,
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 800,
            color: '#0F172A',
            lineHeight: 1.4,
            flex: 1,
          }}
        >
          {c.title}
        </span>
        <span
          style={{
            fontSize: 9,
            fontWeight: 800,
            padding: '2px 7px',
            borderRadius: 20,
            background: c.tc + '15',
            color: c.tc,
            border: `1px solid ${c.tc}30`,
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {c.tag}
        </span>
      </div>
      <div style={{ fontSize: 11, color: '#64748B', marginBottom: 6 }}>
        by {c.by}
      </div>
      <div
        style={{
          display: 'flex',
          gap: 10,
          flexWrap: 'wrap',
          marginBottom: 7,
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 900, color: col }}>
          ⏱ {c.h}h
        </span>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#F59E0B' }}>
          ★ {c.rating}
        </span>
        <span style={{ fontSize: 11, color: '#94A3B8' }}>👥 {c.stu}</span>
      </div>
      <div
        style={{
          fontSize: 11,
          color: '#4338CA',
          lineHeight: 1.6,
          background: '#F0F4FF',
          borderRadius: 8,
          padding: '7px 10px',
          border: '1px solid #E0E7FF',
        }}
      >
        💡 {c.why}
      </div>
      <div
        style={{
          marginTop: 8,
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

function Block({ p, isOpen, onToggle }) {
  const cPct = Math.round((p.courseH / p.total) * 100);
  const pPct = 100 - cPct;
  const barL = ((p.offset / 400) * 100).toFixed(1) + '%';
  const barW = ((p.days / 400) * 100).toFixed(1) + '%';
  const isNew = p.tag && p.tag.includes('NEW');
  return (
    <div
      id={'b-' + p.id}
      style={{
        borderRadius: 14,
        border: `2px solid ${isOpen ? p.color + '70' : p.border}`,
        background: isOpen ? p.bg : '#fff',
        boxShadow: isOpen
          ? `0 8px 28px ${p.color}12`
          : '0 1px 5px rgba(0,0,0,0.05)',
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
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: 13,
            flexShrink: 0,
            background: isOpen
              ? `linear-gradient(135deg,${p.color},${p.dark})`
              : p.bg,
            border: `2px solid ${p.color}35`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            transition: 'all 0.25s',
            boxShadow: isOpen ? `0 4px 14px ${p.color}40` : 'none',
          }}
        >
          {p.icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: 'flex',
              gap: 7,
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: 3,
            }}
          >
            <span
              style={{
                fontSize: 'clamp(13px,4vw,15px)',
                fontWeight: 900,
                color: '#0F172A',
              }}
            >
              {p.name}
            </span>
            {p.tag && (
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: 20,
                  background: isNew ? '#DCFCE7' : p.color + '18',
                  color: isNew ? '#15803D' : p.color,
                  border: `1px solid ${isNew ? '#86EFAC' : p.color + '30'}`,
                }}
              >
                {p.tag}
              </span>
            )}
          </div>
          <div style={{ fontSize: 10, color: '#64748B', marginBottom: 3 }}>
            {p.startDate} → {p.endDate} · {p.days}d · {p.courses.length} courses
          </div>
          <div
            style={{
              display: 'flex',
              height: 5,
              borderRadius: 3,
              overflow: 'hidden',
              maxWidth: 160,
            }}
          >
            <div style={{ flex: cPct, background: p.color }} />
            <div style={{ flex: pPct, background: p.color + '35' }} />
          </div>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div
            style={{
              fontSize: 'clamp(14px,4vw,17px)',
              fontWeight: 900,
              color: p.color,
              background: p.color + '12',
              padding: '3px 12px',
              borderRadius: 20,
              border: `1px solid ${p.color}25`,
              marginBottom: 2,
            }}
          >
            {p.total}h
          </div>
          <div style={{ fontSize: 9, color: '#94A3B8' }}>{p.days}d × 3h</div>
        </div>
        <span
          style={{
            color: p.color,
            fontSize: 22,
            flexShrink: 0,
            transform: isOpen ? 'rotate(90deg)' : 'none',
            transition: 'transform 0.2s',
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
            padding: '14px 16px 18px',
          }}
        >
          {/* Stats strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 7,
              marginBottom: 12,
            }}
          >
            {[
              ['📅', p.days + 'd', 'days'],
              ['📺', p.courseH + 'h', cPct + '% course'],
              ['💻', p.practiceH + 'h', pPct + '% practice'],
              ['📚', p.courses.length, 'courses'],
            ].map(([ic, v, l]) => (
              <div
                key={l}
                style={{
                  background: '#F8FAFC',
                  borderRadius: 8,
                  padding: '8px 5px',
                  border: '1px solid #E2E8F0',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 15 }}>{ic}</div>
                <div
                  style={{
                    fontSize: 'clamp(11px,3vw,13px)',
                    fontWeight: 800,
                    color: '#0F172A',
                  }}
                >
                  {v}
                </div>
                <div style={{ fontSize: 9, color: '#94A3B8', marginTop: 1 }}>
                  {l}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div style={{ marginBottom: 12 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 3,
              }}
            >
              <span style={{ fontSize: 10, color: '#94A3B8' }}>
                400-day position
              </span>
              <span style={{ fontSize: 10, color: p.color, fontWeight: 700 }}>
                {p.startDate} → {p.endDate}
              </span>
            </div>
            <div
              style={{
                height: 7,
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
                  marginLeft: barL,
                  width: barW,
                  boxShadow: `0 0 6px ${p.color}50`,
                }}
              />
            </div>
          </div>

          {/* Course / Practice split bar */}
          <div style={{ marginBottom: 14 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 4,
              }}
            >
              <span style={{ fontSize: 11, color: '#374151', fontWeight: 600 }}>
                📺 Udemy: {p.courseH}h ({cPct}%)
              </span>
              <span style={{ fontSize: 11, color: '#374151', fontWeight: 600 }}>
                💻 Practice: {p.practiceH}h ({pPct}%)
              </span>
            </div>
            <div
              style={{
                height: 10,
                background: '#F1F5F9',
                borderRadius: 5,
                overflow: 'hidden',
                display: 'flex',
              }}
            >
              <div style={{ flex: p.courseH, background: p.color }} />
              <div style={{ flex: p.practiceH, background: p.color + '35' }} />
            </div>
            <div
              style={{
                display: 'flex',
                gap: 14,
                marginTop: 5,
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  fontSize: 10,
                  color: '#64748B',
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 2,
                    background: p.color,
                    display: 'inline-block',
                  }}
                />
                Udemy lectures
              </span>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  fontSize: 10,
                  color: '#64748B',
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 2,
                    background: p.color + '35',
                    display: 'inline-block',
                  }}
                />
                Coding practice
              </span>
            </div>
          </div>

          {/* Daily schedule */}
          <div
            style={{
              background: '#F8FAFF',
              border: '1px solid #E0E7FF',
              borderRadius: 9,
              padding: '10px 12px',
              marginBottom: 10,
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: '#4F46E5',
                letterSpacing: '0.1em',
                marginBottom: 3,
              }}
            >
              ⏰ DAILY 6:00–9:00 AM
            </div>
            <div style={{ fontSize: 11, color: '#374151', lineHeight: 1.7 }}>
              {p.daily}
            </div>
          </div>

          {/* Practice ideas */}
          <div
            style={{
              background: '#FFFBEB',
              border: '1px solid #FDE68A',
              borderRadius: 9,
              padding: '10px 12px',
              marginBottom: 14,
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: '#D97706',
                letterSpacing: '0.1em',
                marginBottom: 6,
              }}
            >
              💻 PRACTICE IDEAS ({p.practiceH}h)
            </div>
            {p.practice.map((item, i) => (
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
                  style={{
                    color: p.color,
                    fontSize: 10,
                    flexShrink: 0,
                    marginTop: 2,
                    fontWeight: 700,
                  }}
                >
                  ▸
                </span>
                <span
                  style={{ fontSize: 11, color: '#374151', lineHeight: 1.65 }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Courses */}
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: '#94A3B8',
              letterSpacing: '0.12em',
              marginBottom: 9,
            }}
          >
            COURSES ({p.courses.length}) — TAP TO OPEN UDEMY
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {p.courses.map((c, i) => (
              <CourseCard key={i} c={c} col={p.color} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState('react');
  const go = (id) => {
    setOpen(id);
    setTimeout(
      () =>
        document
          .getElementById('b-' + id)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
      80,
    );
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#EEF2FF',
        fontFamily: "'Segoe UI',system-ui,-apple-system,sans-serif",
        color: '#0F172A',
        overflowX: 'hidden',
      }}
    >
      {/* ── HERO ── */}
      <div
        style={{
          background:
            'linear-gradient(135deg,#1E1B4B 0%,#312E81 48%,#1A365D 100%)',
          padding: '20px 14px 18px',
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
              'radial-gradient(circle,rgba(255,255,255,0.05) 1px,transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
        <div
          style={{
            maxWidth: 900,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Title row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 14,
            }}
          >
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 12,
                flexShrink: 0,
                background: 'linear-gradient(135deg,#6366F1,#8B5CF6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                boxShadow: '0 6px 18px rgba(99,102,241,0.5)',
              }}
            >
              🎓
            </div>
            <div>
              <div
                style={{
                  fontSize: 9,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.32)',
                  marginBottom: 2,
                }}
              >
                Sumit Rawal · FPO Cloud · NextStep Bangkok
              </div>
              <div
                style={{
                  fontSize: 'clamp(16px,5vw,26px)',
                  fontWeight: 900,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                }}
              >
                400 days of code · 1,200 Hours
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.35)',
                  marginTop: 2,
                }}
              >
                Jun 10, 2026 → Jul 14, 2027 · 8 skills · {TOT_COURSES} courses ·
                6 AM–9 AM
              </div>
            </div>
          </div>

          {/* Schedule banner */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(99,102,241,0.18)',
              border: '1px solid rgba(99,102,241,0.4)',
              borderRadius: 10,
              padding: '9px 14px',
              marginBottom: 14,
            }}
          >
            <span style={{ fontSize: 20 }}>⏰</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 900, color: '#fff' }}>
                6:00 AM – 9:00 AM · Every Day · 400 Days
              </div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.42)' }}>
                ~1.8h Udemy · ~1.2h coding practice · Bangkok time · before FPO
                work
              </div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: 15, fontWeight: 900, color: '#A5B4FC' }}>
                1,200h
              </div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.38)' }}>
                total study
              </div>
            </div>
          </div>

          {/* Stats — 3-col on mobile */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 7,
              marginBottom: 14,
            }}
          >
            {[
              ['365+35d', '13 Months'],
              ['1,200h', 'Total Study'],
              ['3h/day', '6–9 AM'],
              [TOT_COURSES + ' courses', '8 Skills'],
              ['62% / 38%', 'Course/Practice'],
              ["Jul 14 '27", 'Finish'],
            ].map(([v, l]) => (
              <div
                key={l}
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  borderRadius: 9,
                  padding: '8px 8px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(12px,3.5vw,15px)',
                    fontWeight: 900,
                    color: '#fff',
                  }}
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

          {/* 400-day visual bar with Day-365 boundary */}
          <div style={{ marginBottom: 8 }}>
            <div
              style={{
                position: 'relative',
                height: 10,
                borderRadius: 5,
                overflow: 'visible',
                display: 'flex',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)',
              }}
            >
              {[
                ['#0EA5E9', 92],
                ['#7C3AED', 28],
                ['#374151', 35],
                ['#16A34A', 98],
                ['#E11D48', 49],
                ['#059669', 25],
                ['#EA580C', 38],
                ['#7C3AED', 35],
              ].map(([col, fl], i) => (
                <div
                  key={i}
                  style={{
                    flex: fl,
                    background: col,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {i === 6 && (
                    <div
                      style={{
                        position: 'absolute',
                        right: -1,
                        top: 0,
                        bottom: 0,
                        width: 3,
                        background: '#fff',
                        opacity: 0.95,
                        zIndex: 3,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 4,
              }}
            >
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.42)' }}>
                Day 1 · Jun 10, 2026
              </span>
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 800,
                  color: 'rgba(255,255,255,0.85)',
                  background: 'rgba(255,255,255,0.12)',
                  padding: '1px 7px',
                  borderRadius: 10,
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                ✦ Day 365 · Jun 9, 2027 ✦
              </span>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.42)' }}>
                Day 400 · Jul 14, 2027
              </span>
            </div>
          </div>

          {/* Phase pills — horizontal scroll on mobile */}
          <div
            style={{
              display: 'flex',
              gap: 6,
              overflowX: 'auto',
              paddingBottom: 2,
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
            }}
          >
            {PHASES.map((p) => (
              <button
                key={p.id}
                onClick={() => go(p.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 20,
                  padding: '4px 10px',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: p.color,
                  }}
                />
                <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.55)' }}>
                  {p.icon} {p.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div
        style={{ maxWidth: 900, margin: '0 auto', padding: '12px 12px 48px' }}
      >
        {/* Study split card */}
        <div
          style={{
            background: '#fff',
            borderRadius: 12,
            border: '1px solid #E2E8F0',
            padding: '14px 16px',
            marginBottom: 11,
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: '#94A3B8',
              letterSpacing: '0.12em',
              marginBottom: 10,
            }}
          >
            📊 1,200H STUDY SPLIT — COURSES + PRACTICE
          </div>
          <div
            style={{
              display: 'flex',
              height: 18,
              borderRadius: 9,
              overflow: 'hidden',
              marginBottom: 8,
            }}
          >
            <div
              style={{
                flex: TOT_COURSE,
                background: '#6366F1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: 9, fontWeight: 800, color: '#fff' }}>
                {TOT_COURSE}h
              </span>
            </div>
            <div
              style={{
                flex: TOT_PRACTICE,
                background: '#A5B4FC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: 9, fontWeight: 800, color: '#312E81' }}>
                {TOT_PRACTICE}h
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 11,
                color: '#374151',
              }}
            >
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 3,
                  background: '#6366F1',
                  display: 'inline-block',
                }}
              />
              📺 Udemy:{' '}
              <strong style={{ marginLeft: 3 }}>{TOT_COURSE}h (62%)</strong>
            </span>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 11,
                color: '#374151',
              }}
            >
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 3,
                  background: '#A5B4FC',
                  display: 'inline-block',
                }}
              />
              💻 Practice:{' '}
              <strong style={{ marginLeft: 3 }}>{TOT_PRACTICE}h (38%)</strong>
            </span>
          </div>
        </div>

        {/* Master schedule table — scrollable on mobile */}
        <div
          style={{
            background: '#fff',
            borderRadius: 12,
            border: '1px solid #E2E8F0',
            padding: '14px 14px',
            marginBottom: 11,
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            overflowX: 'auto',
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: '#94A3B8',
              letterSpacing: '0.12em',
              marginBottom: 10,
            }}
          >
            🗓 MASTER SCHEDULE — 8 SKILLS · 400 DAYS · 1,200H
          </div>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: 11,
              minWidth: 440,
            }}
          >
            <thead>
              <tr style={{ background: '#F8FAFC' }}>
                {[
                  '',
                  'Skill',
                  'Days',
                  'Study',
                  '📺 Course',
                  '💻 Practice',
                  'Period',
                ].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: '6px 8px',
                      textAlign: 'left',
                      color: '#64748B',
                      fontWeight: 700,
                      borderBottom: '2px solid #E2E8F0',
                      whiteSpace: 'nowrap',
                      fontSize: 10,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PHASES.map((p, i) => (
                <>
                  {p.id === 'agentic' && (
                    <tr key={'div'}>
                      <td
                        colSpan={7}
                        style={{
                          padding: '4px 8px',
                          background:
                            'linear-gradient(90deg,#6366F110,#7C3AED18)',
                          borderTop: '2px dashed #7C3AED60',
                          borderBottom: '2px dashed #7C3AED60',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            justifyContent: 'center',
                          }}
                        >
                          <div
                            style={{
                              height: 1,
                              flex: 1,
                              background: '#7C3AED30',
                            }}
                          />
                          <span
                            style={{
                              fontSize: 9,
                              fontWeight: 800,
                              color: '#7C3AED',
                              whiteSpace: 'nowrap',
                              padding: '2px 8px',
                              background: '#F5F3FF',
                              borderRadius: 20,
                              border: '1px solid #DDD6FE',
                            }}
                          >
                            🎁 BONUS 35 DAYS — Day 366 → 400 · Agentic AI
                          </span>
                          <div
                            style={{
                              height: 1,
                              flex: 1,
                              background: '#7C3AED30',
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  )}
                  <tr
                    key={i}
                    style={{
                      borderBottom: '1px solid #F1F5F9',
                      cursor: 'pointer',
                      transition: 'background 0.1s',
                    }}
                    onClick={() => go(p.id)}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = '#F8FAFC')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = 'transparent')
                    }
                  >
                    <td style={{ padding: '7px 8px' }}>
                      <div
                        style={{
                          width: 26,
                          height: 26,
                          borderRadius: 7,
                          background: p.color + '18',
                          color: p.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 15,
                        }}
                      >
                        {p.icon}
                      </div>
                    </td>
                    <td style={{ padding: '7px 8px' }}>
                      <div
                        style={{
                          fontWeight: 800,
                          color: '#0F172A',
                          fontSize: 11,
                        }}
                      >
                        {p.name}
                      </div>
                      {p.tag && (
                        <div
                          style={{
                            fontSize: 8,
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
                        padding: '7px 8px',
                        fontWeight: 700,
                        color: '#374151',
                      }}
                    >
                      {p.days}
                    </td>
                    <td
                      style={{
                        padding: '7px 8px',
                        fontWeight: 900,
                        color: p.color,
                      }}
                    >
                      {p.total}h
                    </td>
                    <td style={{ padding: '7px 8px', color: '#4F46E5' }}>
                      {p.courseH}h
                    </td>
                    <td style={{ padding: '7px 8px', color: '#94A3B8' }}>
                      {p.practiceH}h
                    </td>
                    <td
                      style={{
                        padding: '7px 8px',
                        color: '#64748B',
                        fontSize: 10,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {p.startDate}
                    </td>
                  </tr>
                </>
              ))}
              <tr
                style={{
                  background: '#F8FAFC',
                  borderTop: '2px solid #E2E8F0',
                  fontWeight: 800,
                }}
              >
                <td
                  colSpan={2}
                  style={{ padding: '8px', color: '#0F172A', fontSize: 12 }}
                >
                  TOTAL
                </td>
                <td style={{ padding: '8px', color: '#0F172A' }}>
                  {TOT_DAYS}d
                </td>
                <td style={{ padding: '8px', color: '#4F46E5', fontSize: 14 }}>
                  1,200h
                </td>
                <td style={{ padding: '8px', color: '#4F46E5' }}>
                  {TOT_COURSE}h
                </td>
                <td style={{ padding: '8px', color: '#94A3B8' }}>
                  {TOT_PRACTICE}h
                </td>
                <td style={{ padding: '8px', fontSize: 10, color: '#94A3B8' }}>
                  Jul 14, 2027
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ marginTop: 6, fontSize: 10, color: '#94A3B8' }}>
            👆 Tap any row to jump to that phase
          </div>
        </div>

        {/* Phase blocks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          {PHASES.map((p) => (
            <Block
              key={p.id}
              p={p}
              isOpen={open === p.id}
              onToggle={() => (open === p.id ? setOpen(null) : go(p.id))}
            />
          ))}
        </div>

        {/* Rules */}
        <div
          style={{
            marginTop: 14,
            background: '#fff',
            borderRadius: 12,
            border: '1px solid #E2E8F0',
            padding: '16px 14px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: '#94A3B8',
              letterSpacing: '0.12em',
              marginBottom: 12,
            }}
          >
            ⚡ 6 RULES — 400 DAYS
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
              gap: 12,
            }}
          >
            {[
              [
                '⏰',
                '6 AM–9 AM daily',
                'Every day before FPO work. Non-negotiable. 400 days of this habit = mastery.',
              ],
              [
                '💻',
                'Always code along',
                "Pause after every concept. Build it yourself first. If you can't build it, you haven't learned it.",
              ],
              [
                '🔁',
                'Review each morning',
                'First 10 mins: what did you do yesterday without notes? Retention multiplies with spaced repetition.',
              ],
              [
                '⭐',
                '3 phases = MAX focus',
                'React (276h), Spring Boot (294h), Microservices (147h) — never rush these three.',
              ],
              [
                '🤖',
                'Apply AI to FPO',
                'Agentic AI phase: build an agent querying FPO flight data. Apply every concept to your real work.',
              ],
              [
                '📅',
                'Sunday check-in',
                '5 mins: % complete this week? Behind >20%? Add 20 min/day next week. Stay honest.',
              ],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}
              >
                <span style={{ fontSize: 20, flexShrink: 0, lineHeight: 1.3 }}>
                  {icon}
                </span>
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: 2,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{ fontSize: 11, color: '#64748B', lineHeight: 1.65 }}
                  >
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 12, textAlign: 'center', paddingBottom: 24 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 4,
              flexWrap: 'wrap',
              marginBottom: 5,
            }}
          >
            {PHASES.map((p, i, a) => (
              <span
                key={p.id}
                style={{ display: 'flex', alignItems: 'center', gap: 3 }}
              >
                <span style={{ fontSize: 10, fontWeight: 700, color: p.color }}>
                  {p.icon} {p.name}
                </span>
                {i < a.length - 1 && (
                  <span style={{ color: '#CBD5E1', fontSize: 11 }}>›</span>
                )}
              </span>
            ))}
          </div>
          <div
            style={{ fontSize: 10, color: '#94A3B8', letterSpacing: '0.1em' }}
          >
            400 DAYS · 1,200H · 62% COURSES · 38% PRACTICE · 6 AM–9 AM · JUN 10
            2026 → JUL 14 2027
          </div>
        </div>
      </div>
    </div>
  );
}
