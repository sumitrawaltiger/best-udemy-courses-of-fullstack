import { javaChapters } from './javaChapters';
import {
  JAVA_UDEMY_COMPLETE_URL,
  JAVA_UDEMY_JAVA8_URL,
  JAVA_UDEMY_JDBC1_URL,
  JAVA_UDEMY_JAVA9_URL,
  JAVA_UDEMY_JDBC2_URL,
  JAVA_UDEMY_SPRING6_URL,
  JAVA_UDEMY_SPRING_BOOT_MS_URL,
  JAVA_UDEMY_EVENT_DRIVEN_URL,
  JAVA_UDEMY_SPRING_CLOUD_MS_URL,
} from './trackConfig.js';

export const JAVA_UDEMY_COURSES = [
  { title: 'Java — The Complete Java Developer Course', url: JAVA_UDEMY_COMPLETE_URL },
  { title: 'Java 8 New Features in Simple Way', url: JAVA_UDEMY_JAVA8_URL },
  { title: 'Complete JDBC Programming Part 1', url: JAVA_UDEMY_JDBC1_URL },
  { title: 'Java 9 New Features (JShell, JPMS & More)', url: JAVA_UDEMY_JAVA9_URL },
  { title: 'Complete JDBC Programming Part 2', url: JAVA_UDEMY_JDBC2_URL },
  { title: 'Spring Framework 6 — Beginner to Guru', url: JAVA_UDEMY_SPRING6_URL },
  { title: 'Spring Boot Microservices + Spring Cloud + K8s + Docker', url: JAVA_UDEMY_SPRING_BOOT_MS_URL },
  { title: 'Event-Driven Microservices with CQRS, Saga & Event Sourcing', url: JAVA_UDEMY_EVENT_DRIVEN_URL },
  { title: 'Microservices with Spring Boot and Spring Cloud', url: JAVA_UDEMY_SPRING_CLOUD_MS_URL },
];

export const JAVA_META = {
  title: 'Thunder++ — Java & Spring',
  subtitle: 'Java core, JDBC, Spring Framework 6, and microservices — 9 Udemy courses',
  description:
    'Master Java from fundamentals through Spring Boot microservices, Kubernetes, CQRS, and event-driven architecture.',
  primaryUdemyUrl: JAVA_UDEMY_COMPLETE_URL,
  courses: JAVA_UDEMY_COURSES,
  instructors: 'Udemy — Java & Spring instructors',
  totalModules: 50,
  startsAfter: 'Python & Agentic AI',
};

function lessonToModule(ch) {
  return {
    id: ch.id,
    number: ch.javaDay,
    title: ch.title,
    slug: ch.slug,
    day: ch.javaDay,
    published: true,
    href: `/java/learn/${ch.slug}`,
  };
}

function modulesForRange(start, end) {
  return javaChapters.filter((c) => c.javaDay >= start && c.javaDay <= end).map(lessonToModule);
}

export const javaPhases = [
  { id: 'java-core', number: 1, title: 'Complete Java Developer', moduleCount: 5, status: 'published', modules: modulesForRange(1, 5), udemyUrl: JAVA_UDEMY_COMPLETE_URL },
  { id: 'java8', number: 2, title: 'Java 8 New Features', moduleCount: 5, status: 'published', modules: modulesForRange(6, 10), udemyUrl: JAVA_UDEMY_JAVA8_URL },
  { id: 'jdbc1', number: 3, title: 'JDBC Programming Part 1', moduleCount: 5, status: 'published', modules: modulesForRange(11, 15), udemyUrl: JAVA_UDEMY_JDBC1_URL },
  { id: 'java9', number: 4, title: 'Java 9 New Features', moduleCount: 5, status: 'published', modules: modulesForRange(16, 20), udemyUrl: JAVA_UDEMY_JAVA9_URL },
  { id: 'jdbc2', number: 5, title: 'JDBC Programming Part 2', moduleCount: 5, status: 'published', modules: modulesForRange(21, 25), udemyUrl: JAVA_UDEMY_JDBC2_URL },
  { id: 'spring6', number: 6, title: 'Spring Framework 6', moduleCount: 5, status: 'published', modules: modulesForRange(26, 30), udemyUrl: JAVA_UDEMY_SPRING6_URL },
  { id: 'spring-boot-1', number: 7, title: 'Spring Boot Microservices — Part 1', moduleCount: 5, status: 'published', modules: modulesForRange(31, 35), udemyUrl: JAVA_UDEMY_SPRING_BOOT_MS_URL },
  { id: 'spring-boot-2', number: 8, title: 'Spring Boot Microservices — Part 2', moduleCount: 5, status: 'published', modules: modulesForRange(36, 40), udemyUrl: JAVA_UDEMY_SPRING_BOOT_MS_URL },
  { id: 'event-driven', number: 9, title: 'Event-Driven Microservices', moduleCount: 5, status: 'published', modules: modulesForRange(41, 45), udemyUrl: JAVA_UDEMY_EVENT_DRIVEN_URL },
  { id: 'spring-cloud', number: 10, title: 'Microservices with Spring Cloud', moduleCount: 5, status: 'published', modules: modulesForRange(46, 50), udemyUrl: JAVA_UDEMY_SPRING_CLOUD_MS_URL },
];

export const javaHighlights = [
  'Java core & OOP mastery',
  'Java 8 & 9 modern features',
  'JDBC & database programming',
  'Spring Framework 6 & DI',
  'Spring Boot REST APIs',
  'Docker & Kubernetes deploy',
  'CQRS, Saga & Event Sourcing',
  'Spring Cloud microservices',
];

export const JAVA_SENIOR_SKILLS = {
  lead: 'As a senior Java developer,',
  callout: "Don't just stay on core java, please stay updated and learn:",
  items: [
    {
      title: 'Cloud-native development',
      description:
        'including microservices, serverless computing (AWS Lambda, Azure Functions), and tools like Kubernetes, Istio, and Helm.',
    },
    {
      title: 'Reactive programming',
      description:
        'using Project Reactor, Spring WebFlux, and RxJava for non-blocking, event-driven applications.',
    },
    {
      title: 'Event-driven architectures',
      description: 'with Kafka, RabbitMQ, and CQRS/Event Sourcing for scalability.',
    },
    {
      title: 'API Economy',
      description: 'API gateways like Kong, and ensuring API security with OAuth2 and OpenID Connect.',
    },
    {
      title: 'Edge computing',
      description: 'with AWS Greengrass or Azure IoT Edge for low-latency processing.',
    },
    {
      title: 'Domain-Driven Design (DDD)',
      description: 'with bounded contexts, aggregates, and event storming for modeling complex domains.',
    },
    {
      title: 'Security trends',
      description: 'like Zero Trust Architecture, data privacy (GDPR/CCPA compliance), and DevSecOps.',
    },
    {
      title: 'Observability',
      description:
        'with distributed tracing (Jaeger, Zipkin), log aggregation (ELK stack), and real-time monitoring (Prometheus, Grafana).',
    },
    {
      title: 'Modern data architectures',
      description:
        'including data streaming (Kafka Streams, Flink), data lakes (Snowflake), and graph databases (Neo4j).',
    },
    {
      title: 'Sustainable software development',
      description: 'with energy-efficient algorithms and carbon-aware cloud strategies.',
    },
    {
      title: 'Low-code/no-code integrations',
      description: 'using Mendix or OutSystems with Java backends.',
    },
    {
      title: 'Emerging Java features',
      description: 'like Project Loom (virtual threads), Panama (native interop), and Valhalla (value types).',
    },
  ],
};
