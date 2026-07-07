// Java & Spring — Udemy learning path (after Python & Agentic AI)
// 10 Udemy courses · 50 modules

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

const yt = (url, title, channel = 'freeCodeCamp') => ({ url, title, channel });

const PHASE_LESSONS = [
  {
    phase: 'Complete Java Developer',
    courseUrl: JAVA_UDEMY_COMPLETE_URL,
    items: [
      ['Introduction to Java & Setup', 'JDK, IDE, and your first Java program', ['JDK & JRE', 'IntelliJ / VS Code', 'Hello World', 'Project structure']],
      ['Variables, Types & Operators', 'Primitives, strings, and expressions', ['Data types', 'Variables & constants', 'Operators', 'Type casting']],
      ['Control Flow & Loops', 'if/else, switch, for, while, and do-while', ['Conditionals', 'switch expressions', 'Loops', 'break & continue']],
      ['OOP — Classes & Objects', 'Encapsulation, constructors, and methods', ['Classes & objects', 'Constructors', 'this keyword', 'Access modifiers']],
      ['OOP — Inheritance & Polymorphism', 'Abstract classes, interfaces, and overriding', ['Inheritance', 'Method overriding', 'Interfaces', 'Polymorphism']],
    ],
  },
  {
    phase: 'Java 8 New Features',
    courseUrl: JAVA_UDEMY_JAVA8_URL,
    items: [
      ['Lambda Expressions', 'Functional programming in Java 8', ['Lambda syntax', 'Target typing', 'Variable capture', 'Use cases']],
      ['Functional Interfaces', 'Predicate, Function, Consumer, and Supplier', ['@FunctionalInterface', 'Built-in interfaces', 'Custom lambdas', 'Method refs intro']],
      ['Stream API', 'filter, map, reduce, and collectors', ['Creating streams', 'Intermediate ops', 'Terminal ops', 'Collectors']],
      ['Optional & Method References', 'Null-safe coding patterns', ['Optional API', 'orElse / orElseGet', 'Method references', 'Constructor refs']],
      ['Date/Time API & Interface Defaults', 'java.time and default/static methods', ['LocalDate & LocalDateTime', 'ZonedDateTime', 'Default methods', 'Static interface methods']],
    ],
  },
  {
    phase: 'JDBC Programming Part 1',
    courseUrl: JAVA_UDEMY_JDBC1_URL,
    items: [
      ['JDBC Architecture', 'Drivers, connections, and the JDBC stack', ['JDBC layers', 'Driver types', 'Connection URL', 'SQLException']],
      ['Connecting to Databases', 'MySQL / PostgreSQL setup and first query', ['DriverManager', 'Connection object', 'First SELECT', 'Resource cleanup']],
      ['Statement & ResultSet', 'Executing queries and reading rows', ['Statement', 'ResultSet traversal', 'Metadata', 'Scrollable results']],
      ['PreparedStatement', 'Parameterized queries and security', ['PreparedStatement', 'setX methods', 'SQL injection prevention', 'Batch inserts']],
      ['Transactions & Savepoints', 'ACID, commit, rollback, and isolation', ['setAutoCommit', 'commit / rollback', 'Savepoints', 'Isolation levels']],
    ],
  },
  {
    phase: 'Java 9 New Features',
    courseUrl: JAVA_UDEMY_JAVA9_URL,
    items: [
      ['JShell REPL', 'Interactive Java experimentation', ['Starting JShell', 'Variables & methods', 'Imports', 'Snippets']],
      ['Module System (JPMS)', 'module-info.java and encapsulation', ['Modules', 'requires / exports', 'Module path', 'Migration basics']],
      ['Interface Private Methods', 'Java 9 interface enhancements', ['private methods', 'private static methods', 'API design', 'Backward compatibility']],
      ['Factory Methods for Collections', 'List.of, Set.of, Map.of', ['Immutable collections', 'Factory methods', 'Map entries', 'Performance']],
      ['Process API & Improvements', 'Managing OS processes from Java', ['ProcessHandle', 'Process API', 'Stack walking', 'Stream improvements']],
    ],
  },
  {
    phase: 'JDBC Programming Part 2',
    courseUrl: JAVA_UDEMY_JDBC2_URL,
    items: [
      ['CallableStatement & Stored Procedures', 'Calling DB procedures from Java', ['CallableStatement', 'IN/OUT params', 'Stored procedures', 'Functions']],
      ['Batch Processing', 'High-volume inserts and updates', ['addBatch', 'executeBatch', 'Performance tuning', 'Error handling']],
      ['Connection Pooling', 'HikariCP and DataSource patterns', ['Why pooling', 'HikariCP setup', 'DataSource', 'Pool sizing']],
      ['RowSet & Advanced JDBC', 'CachedRowSet and disconnected models', ['RowSet types', 'CachedRowSet', 'JoinRowSet', 'WebRowSet intro']],
      ['JDBC Project & Best Practices', 'End-to-end database application', ['DAO pattern', 'Layered architecture', 'Exception strategy', 'Mini project']],
    ],
  },
  {
    phase: 'Spring Framework 6',
    courseUrl: JAVA_UDEMY_SPRING6_URL,
    items: [
      ['Spring Core & IoC', 'Inversion of Control and the ApplicationContext', ['IoC concept', 'ApplicationContext', 'Bean lifecycle', 'Component scanning']],
      ['Dependency Injection', '@Autowired, qualifiers, and bean scopes', ['Constructor injection', '@Qualifier', 'Bean scopes', 'Primary beans']],
      ['Spring Configuration', 'Java config, @Configuration, and profiles', ['@Configuration', '@Bean methods', 'Profiles', 'Property sources']],
      ['Spring AOP', 'Aspects, advice, and cross-cutting concerns', ['AOP concepts', '@Aspect', 'Pointcuts', 'Before / After advice']],
      ['Spring MVC & Testing', 'Controllers, views, and @SpringBootTest', ['@Controller', 'RequestMapping', 'Model & View', 'JUnit + Spring Test']],
    ],
  },
  {
    phase: 'Spring Boot Microservices — Part 1',
    courseUrl: JAVA_UDEMY_SPRING_BOOT_MS_URL,
    items: [
      ['Spring Boot Fundamentals', 'Auto-configuration and starters', ['@SpringBootApplication', 'Starters', 'application.properties', 'DevTools']],
      ['Building REST APIs', 'Controllers, DTOs, and validation', ['@RestController', 'Request bodies', 'Bean Validation', 'Exception handlers']],
      ['Spring Data JPA', 'Entities, repositories, and relationships', ['@Entity', 'JpaRepository', 'Relationships', 'Query methods']],
      ['Spring Security Basics', 'Authentication and authorization', ['Security filter chain', 'UserDetails', 'JWT intro', 'Securing endpoints']],
      ['Dockerizing Spring Boot', 'Dockerfile, images, and compose', ['Dockerfile', 'Multi-stage builds', 'docker-compose', 'Container networking']],
    ],
  },
  {
    phase: 'Spring Boot Microservices — Part 2',
    courseUrl: JAVA_UDEMY_SPRING_BOOT_MS_URL,
    items: [
      ['Spring Cloud Config', 'Centralized configuration server', ['Config Server', 'Config Client', 'Git backend', 'Refresh scope']],
      ['Service Discovery', 'Eureka and client-side load balancing', ['Eureka Server', 'Eureka Client', 'LoadBalancer', 'Service registry']],
      ['API Gateway', 'Spring Cloud Gateway routing', ['Gateway routes', 'Predicates & filters', 'Rate limiting', 'Cross-cutting concerns']],
      ['Kubernetes Deployment', 'Deploy Spring Boot on K8s', ['Deployments', 'Services & Ingress', 'ConfigMaps', 'Health probes']],
      ['Observability Stack', 'Logging, metrics, and distributed tracing', ['Actuator endpoints', 'Micrometer', 'Prometheus', 'Zipkin tracing']],
    ],
  },
  {
    phase: 'Event-Driven Microservices',
    courseUrl: JAVA_UDEMY_EVENT_DRIVEN_URL,
    items: [
      ['Event-Driven Architecture', 'Events, commands, and messaging patterns', ['EDA principles', 'Event vs command', 'Loose coupling', 'Use cases']],
      ['CQRS Pattern', 'Separate read and write models', ['Command side', 'Query side', 'Read models', 'Eventual consistency']],
      ['Event Sourcing', 'Store state as a sequence of events', ['Event store', 'Aggregates', 'Snapshots', 'Replay']],
      ['Saga Pattern', 'Distributed transactions across services', ['Choreography', 'Orchestration', 'Compensating actions', 'Saga coordinator']],
      ['Kafka & Spring Events', 'Publish/subscribe with Apache Kafka', ['Kafka topics', 'Producers & consumers', 'Spring Kafka', 'Idempotency']],
    ],
  },
  {
    phase: 'Microservices with Spring Cloud',
    courseUrl: JAVA_UDEMY_SPRING_CLOUD_MS_URL,
    items: [
      ['Microservices Architecture', 'Design principles and decomposition', ['Bounded contexts', 'Service boundaries', 'Data ownership', 'Communication styles']],
      ['Inter-Service Communication', 'REST, Feign, and gRPC', ['OpenFeign', 'RestTemplate', 'gRPC basics', 'Contract testing']],
      ['Resilience Patterns', 'Circuit breaker, retry, and bulkhead', ['Resilience4j', 'Circuit breaker', 'Retry & timeout', 'Bulkhead']],
      ['Distributed Tracing & Logging', 'Correlation IDs and centralized logs', ['Sleuth / Micrometer Tracing', 'Correlation ID', 'ELK stack intro', 'Log aggregation']],
      ['Capstone — Full Microservices Stack', 'End-to-end Spring Cloud project', ['Multi-service build', 'Docker Compose / K8s', 'Integration testing', 'Portfolio review']],
    ],
  },
];

// Content for the Microservices Architecture module — distilled from
// "Design Microservices Architecture with Patterns & Best Practices" (Mehmet Ozkaya).
const MICROSERVICES_DESIGN_SECTIONS = [
  {
    id: 'architecture-evolution',
    title: 'The Architecture Evolution Journey',
    content:
      "Microservices are the **end** of an evolutionary path, not the starting point. A system typically evolves: **Monolith → 3-Tier → Modular Monolith → Microservices → Serverless**.\n\nEach step is driven by a real problem, using tools from your **design toolbox** (architectures, patterns, principles like **KISS, YAGNI, DRY, Separation of Concerns**).\n\n- **Monolith** — one deployable unit; simple and fast to start, but a **Big Ball of Mud** as it grows.\n- **Modular Monolith** — clear internal module boundaries and separate DB schemas, with high cohesion and low coupling, **before** going distributed.\n- **Microservices** — independently deployable, scalable services when teams and load demand true autonomy.",
  },
  {
    id: 'when-microservices',
    title: 'When to Use Microservices (and When Not)',
    content:
      "Microservices trade simplicity for independence — adopt them for the right reasons.\n\n**Use when:** you need independent scaling, independent deployment, team autonomy, technology diversity, and fault isolation on a large, evolving system.\n\n**Avoid when:** the app is small/new, the team is small, or the domain is not well understood — you'll likely build a **Distributed Monolith** (all the complexity of distribution with none of the independence).\n\nKey questions first: Do we have clear service boundaries? Can teams own services end-to-end? Is the operational cost (observability, CI/CD, orchestration) justified?",
  },
  {
    id: 'decomposition',
    title: 'Decomposing a Monolith',
    content:
      "The goal of decomposition is **high cohesion, loose coupling** — services that change for one reason.\n\n**Decomposition patterns:**\n- **Decompose by Business Capability** — one service per business function (Catalog, Basket, Ordering).\n- **Decompose by Subdomain (DDD)** — align services to bounded contexts from Domain-Driven Design.\n- **The Scale Cube** — X-axis (cloning/load balancing), Y-axis (functional decomposition), Z-axis (data partitioning/sharding).\n\n**Strangler Fig Pattern** — migrate incrementally: route new features to microservices while the monolith shrinks, instead of a risky big-bang rewrite. Analyze the domain's **nouns (entities)** and **verbs (use cases)** to find candidate services.",
  },
  {
    id: 'database-per-service',
    title: 'Database-per-Service & Polyglot Persistence',
    content:
      "Each microservice owns its **own database** — no other service touches it directly. This preserves loose coupling and independent deployability.\n\n- **Polyglot Persistence** — pick the right store per service: relational (SQL) for transactions, document/key-value/column/graph NoSQL where they fit.\n- **Shared Database is an anti-pattern** — it recreates tight coupling and a single point of contention.\n- **Trade-off:** cross-service queries and transactions become harder (solved later with CQRS, materialized views, and sagas).",
  },
  {
    id: 'sync-communication',
    title: 'Synchronous Communication: REST, gRPC & GraphQL',
    content:
      "Services need to talk. **Synchronous** (request/response) options:\n\n- **REST over HTTP** — the default: resource URLs, HTTP verbs (GET/POST/PUT/PATCH/DELETE), versioning. Simple and universal, but chatty for related data (the **N+1 problem**).\n- **gRPC** — high-performance binary RPC over HTTP/2; ideal for **internal** service-to-service calls under high volume.\n- **GraphQL** — a query language that lets clients fetch exactly the fields they need in one request via resolvers, avoiding over/under-fetching.\n\nRule of thumb: **REST** for public APIs, **gRPC** for internal hot paths, **GraphQL** for flexible client-driven queries.",
  },
  {
    id: 'api-gateway-bff',
    title: 'API Gateway & Backends-for-Frontends (BFF)',
    content:
      "Direct client-to-service calls don't scale — clients shouldn't know every service.\n\n- **API Gateway** — a single entry point handling **routing**, **aggregation**, and **offloading** (auth, SSL, rate limiting, caching). One place for cross-cutting concerns.\n- **Backends for Frontends (BFF)** — a dedicated gateway per client type (web, mobile), each tailored to that client's UI needs.\n- **Service Aggregator** — combines results from several services into one composite response.\n- **Service Registry & Discovery** — services register themselves and are found by name in a dynamic environment.",
  },
  {
    id: 'async-eda',
    title: 'Asynchronous Communication & Event-Driven Architecture',
    content:
      "**Async messaging** decouples services in time — a sender doesn't wait for or depend on the receiver being up.\n\n- **Single-receiver (Queues)** — one-to-one, work distribution.\n- **Multiple-receiver (Topics)** — one-to-many broadcast.\n- **Publish/Subscribe (Pub/Sub)** — publishers emit events; subscribers react independently — the heart of **Event-Driven Architecture (EDA)**.\n\nBenefits: loose coupling, resilience, and independent scaling. Consideration: eventual consistency and the need for reliable delivery (see the Outbox pattern).",
  },
  {
    id: 'cap-consistency',
    title: 'Data Consistency & the CAP Theorem',
    content:
      "In a distributed system you can't have it all. The **CAP theorem** says that during a network **Partition (P)** you must choose between **Consistency (C)** and **Availability (A)**:\n\n- **CP systems** — stay consistent, sacrifice availability during partitions.\n- **AP systems** — stay available, accept eventual consistency.\n\nMicroservices generally embrace **eventual consistency** across services (strong consistency stays **within** a service). Choose data stores and patterns with this trade-off in mind.",
  },
  {
    id: 'cqrs-event-sourcing',
    title: 'CQRS & Event Sourcing',
    content:
      "**CQRS (Command Query Responsibility Segregation)** splits the **write** model from the **read** model, so each is optimized independently — e.g. a normalized write DB and a denormalized read DB (like Instagram's feed).\n\nThe two sides are kept in sync **asynchronously via events** (eventual consistency).\n\n**Event Sourcing** stores state as an immutable **sequence of events** rather than the current snapshot — you rebuild state by replaying events, gaining a full audit log and time-travel. CQRS + Event Sourcing pair naturally: events update the read models.",
  },
  {
    id: 'distributed-transactions',
    title: 'Distributed Transactions: Saga, Outbox & CDC',
    content:
      "You can't use a single ACID transaction across services. Instead:\n\n- **Saga Pattern** — a sequence of local transactions coordinated by **choreography** (services react to events) or **orchestration** (a central coordinator). Failures trigger **compensating transactions** to undo prior steps.\n- **Dual Write Problem** — writing to the DB **and** publishing an event isn't atomic; a crash between them loses data.\n- **Transactional Outbox** — write the event to an **outbox table** in the same DB transaction, then publish it reliably afterward.\n- **Change Data Capture (CDC)** — stream committed DB changes (e.g. Debezium, DynamoDB Streams) to publish outbox events without polling.",
  },
  {
    id: 'distributed-caching',
    title: 'Distributed Caching (Cache-Aside)',
    content:
      "Frequent data-store access is costly. A **central distributed cache** (e.g. Redis) reduces latency and load.\n\n**Cache-Aside Pattern:** the application checks the cache first; on a **miss** it reads the database, populates the cache, and returns the value. Writes invalidate or update the cache.\n\nConsiderations: cache **consistency**, expiration/TTL, and stampede protection. Caching can also live at the **API Gateway** for read-heavy endpoints.",
  },
  {
    id: 'deployment-devops',
    title: 'Deployment: Containers, Kubernetes, CI/CD & GitOps',
    content:
      "Many services need automated, repeatable operations.\n\n- **Containers (Docker)** — package each service with its dependencies; images run anywhere.\n- **Kubernetes** — orchestrates containers: scheduling, self-healing, scaling, service discovery. Control plane + worker nodes; **Helm** packages deployments.\n- **Sidecar & Service Mesh** (Istio/Linkerd) — offload networking, security, and observability from service code.\n- **CI/CD** — automate build → test → deploy, with **Rolling / Blue-Green / Canary** strategies.\n- **Infrastructure as Code (Terraform)** and **GitOps (Argo CD)** — declarative, git-driven infrastructure and deployments.",
  },
  {
    id: 'resilience-observability',
    title: 'Resilience & Observability',
    content:
      "Distributed systems fail partially — design for it.\n\n**Resilience patterns:** **Retry** (transient failures), **Circuit Breaker** (stop calling a failing service; states: closed → open → half-open), **Bulkhead** (isolate resource pools), **Timeout**, and **Fallback**.\n\n**Observability — the three pillars:**\n- **Logs** — centralized distributed logging (ELK / Elastic Stack).\n- **Traces** — distributed tracing across services (OpenTelemetry + Zipkin/Jaeger).\n- **Metrics** — Prometheus + Grafana dashboards, plus **health checks** (liveness, readiness) for Kubernetes probes.",
  },
  {
    id: 'microservices-design-resources',
    title: 'Full Course Slides & Resources',
    content:
      "This module distills **Mehmet Ozkaya's** *Design Microservices Architecture with Patterns & Best Practices* — a step-by-step journey evolving an **E-Shop** from monolith to microservices to serverless, applying each pattern to solve a concrete problem.\n\nDownload the complete **749-slide deck** below to go deeper on every pattern, with architecture diagrams and code-exploration references.",
  },
];

function buildLessons() {
  const lessons = [];
  let javaDay = 1;
  const defaultYt = yt(
    'https://www.youtube.com/watch?v=eIrMbAQSU34',
    'Java Full Course for Beginners',
    'Bro Code',
  );

  for (const { phase, courseUrl, items } of PHASE_LESSONS) {
    for (const [title, subtitle, topics] of items) {
      const lesson = {
        javaDay,
        phase,
        title,
        subtitle,
        topics,
        paidLectureUrl: courseUrl,
        youtube: defaultYt,
      };
      if (title === 'Spring Boot Fundamentals') {
        lesson.pdfUrl = '/java-spring-boot-slides.pdf';
        lesson.pdfLabel = 'Spring Boot Slides (PDF)';
        lesson.extraLinks = [
          {
            label: 'eCommerce Masterclass Slides (PDF)',
            href: '/spring-boot-ecommerce-masterclass-slides.pdf',
            icon: '📄',
          },
        ];
      }
      if (title === 'Microservices Architecture') {
        lesson.pdfUrl = '/java-microservices-slides.pdf';
        lesson.pdfLabel = 'Microservices Slides (PDF)';
        lesson.sections = MICROSERVICES_DESIGN_SECTIONS;
        lesson.topics = [
          'Architecture evolution: monolith → microservices',
          'When (and when not) to use microservices',
          'Decomposition patterns & Strangler Fig',
          'Database-per-service & polyglot persistence',
          'Sync comms: REST, gRPC, GraphQL',
          'API Gateway & BFF patterns',
          'Async & event-driven architecture',
          'CAP theorem & eventual consistency',
          'CQRS & event sourcing',
          'Saga, Outbox & CDC',
          'Distributed caching (cache-aside)',
          'Containers, Kubernetes, CI/CD & GitOps',
          'Resilience & observability',
        ];
        lesson.extraLinks = [
          {
            label: 'Design Patterns Slides — 749 pages (PDF)',
            href: '/microservices-design-slides.pdf',
            icon: '📄',
          },
        ];
      }
      lessons.push(lesson);
      javaDay += 1;
    }
  }
  return lessons;
}

export const javaLessons = buildLessons();
