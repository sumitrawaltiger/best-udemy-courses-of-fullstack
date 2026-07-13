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
      "Microservices are the **end** of an evolutionary path, not the starting point. A system typically evolves: **Monolith → 3-Tier → Modular Monolith → Microservices → Serverless**.\n\nEach step is driven by a real problem, using tools from your **design toolbox** (architectures, patterns, principles like **KISS, YAGNI, DRY, Separation of Concerns**).\n\n- **Monolith** — one deployable unit; simple and fast to start, but a **Big Ball of Mud** as it grows.\n- **Modular Monolith** — clear internal module boundaries and separate DB schemas, with high cohesion and low coupling, **before** going distributed.\n- **Microservices** — independently deployable, scalable services when teams and load demand true autonomy.\n\n**Monolithic vs Microservice — at a glance:**",
    image: '/java-notes/monolithic-vs-microservices.jpg',
    imageAlt: 'Monolithic vs Microservice comparison — architecture, modularity, agility, scaling, implementation, maintainability, and transactions (ACID vs BASE)',
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
    title: 'Design Patterns for Microservices',
    content:
      "This module distills **Mehmet Ozkaya's** *Design Microservices Architecture with Patterns & Best Practices* — a step-by-step journey evolving an **E-Shop** from monolith to microservices to serverless, applying each pattern to solve a concrete problem.\n\nThe microservices design patterns group into five families: **Decomposition, Integration, Database, Observability,** and **Cross-Cutting Concern** patterns.\n\nDownload the complete **749-slide deck** below to go deeper on every pattern, with architecture diagrams and code-exploration references.",
    image: '/java-notes/microservices-design-patterns.jpg',
    imageAlt: 'Design Patterns for Microservices map — Decomposition, Integration, Database, Observability, and Cross-Cutting Concern pattern families',
  },
  {
    id: 'nine-microservice-patterns',
    title: '9 Essential Java Microservice Patterns',
    content:
      "The nine patterns you reach for again and again, at a glance:\n\n- **API Gateway** — one entry point that routes clients to the right microservice.\n- **Circuit Breaker (Resilience4j)** — stop calling a failing service (closed → open → half-open) to prevent cascading failures.\n- **Database per Service** — each service (User, Order, Inventory) owns its own database.\n- **Saga Pattern** — coordinate distributed transactions across services with compensating rollbacks on failure.\n- **CQRS** — split the write model from the read model so each is optimized independently.\n- **Event Sourcing** — store state as an immutable log of events rather than a single snapshot.\n- **Service Discovery (Eureka Registry)** — services register themselves and are found by name at runtime.\n- **Strangler Fig** — migrate a monolith incrementally, peeling features into microservices.\n- **Bulkhead** — isolate resource pools so one overloaded component can't sink the whole ship.",
    image: '/java-notes/java-microservice-9-design-patterns.jpg',
    imageAlt: 'Nine Java microservice design patterns — API Gateway, Circuit Breaker, Database per Service, Saga, CQRS, Event Sourcing, Service Discovery, Strangler Fig, and Bulkhead',
  },
];

// ---------------------------------------------------------------------------
// Content distilled from EmbarkX (Faisal Memon) — "Spring Boot Microservices
// Professional eCommerce Masterclass" (493-slide deck). Modules 31–40 & 45.
// ---------------------------------------------------------------------------

// Core Java — Methods (visual note)
const JAVA_METHODS_SECTIONS = [
  {
    id: 'methods-in-java',
    title: 'Methods in Java',
    content:
      "A **method** is a block of code that performs a specific task — it helps with **reusability, readability, and maintainability**.\n\n**Method syntax:** `returnType methodName(parameters) { ... return value; }` — a **return type** (`int`, `void`, etc.), a **method name** (identifier), and **parameters** (inputs to the method). If the return type is **void**, the method does not return any value.\n\n**Types of methods:**\n- **Built-in methods** — provided by Java (e.g. `println()`, `length()`, `substring()`, `toString()`).\n- **User-defined methods** — created by the programmer for specific tasks.\n- **With a return type** — returns a value to the caller.\n- **Without a return type (void)** — performs an action but returns nothing.\n\n**Method call flow:** `main()` starts → the method is called → control jumps to the method body → execution completes → control returns to the calling point (the next statement).\n\n**Passing parameters — Java is always pass-by-value:** changes made to a parameter inside a method do **not** affect the caller's original value.\n\n**Key points** — a method should have a clear purpose and do one thing well, use meaningful names (verb + noun), keep methods small and focused, reuse them, and remember `main()` is also a method.\n\n**Common mistakes** — forgetting to return a value in a non-void method, calling a method with the wrong number/type of arguments, assuming changes to parameters affect the original values, and writing very long methods that are hard to read.",
    code: "public class Demo {\n\n    // method WITHOUT return value (void) — just performs an action\n    static void greet() {\n        System.out.println(\"Hello, Java!\");\n    }\n\n    // method WITH a return value\n    static int add(int a, int b) {\n        return a + b;\n    }\n\n    // Java is pass-by-value\n    static void change(int x) {\n        x = 100;   // does not affect the caller\n    }\n\n    public static void main(String[] args) {\n        greet();                  // Hello, Java!\n        int sum = add(5, 7);      // method call\n        System.out.println(sum);  // 12\n\n        int n = 10;\n        change(n);\n        System.out.println(n);    // 10 (unchanged)\n    }\n}",
    image: '/java-notes/methods-in-java.jpg',
    imageAlt:
      'Methods in Java visual note — method syntax (return type, method name, parameters), example of a void method and a method with a return value, types of methods (built-in and user-defined, with and without return), method call flow, passing parameters (Java is pass-by-value), key points, common mistakes, and interview takeaways',
  },
];

// Module 31 — Spring Boot Fundamentals
const SPRING_BOOT_FUNDAMENTALS_SECTIONS = [
  {
    id: 'what-is-web-framework',
    title: 'What Is a Web Framework?',
    content:
      "Every web app repeats the same plumbing — **security, databases, URLs, authentication, sessions**. Building that from scratch each time is like constructing a house without blueprints or prefabricated parts.\n\nA **web framework** is a collection of tools and modules that handle these standard tasks for you, so you assemble features faster, with fewer errors. Popular frameworks: **Spring Boot** (Java), **Django/Flask** (Python), **Express** (JavaScript), **Ruby on Rails** (Ruby).",
  },
  {
    id: 'spring-framework-ioc',
    title: 'The Spring Framework & Inversion of Control',
    content:
      "The **Spring Framework** (created by Rod Johnson, first released March 2004) takes away the hassle of wiring an application together. Its core feature is **Inversion of Control (IoC)**.\n\nWithout IoC, a class creates its own dependencies — `new EmailService()` hard-wired inside `SMSClient` — which is rigid and hard to test. With IoC, the framework's **container** creates and injects those dependencies for you.\n\nOther Spring pillars: **Data Access, MVC, Transaction Management, Security, Testing support, and i18n/l10n**.",
  },
  {
    id: 'what-is-spring-boot',
    title: 'What Is Spring Boot?',
    content:
      "**Spring Boot** is an open-source, Java-based framework for building **stand-alone, production-grade** Spring applications.\n\nThink of it as: **Spring Framework + prebuilt configuration + embedded servers**. Plain Spring needs lots of setup, configuration, boilerplate, and deployment steps; Spring Boot removes them.\n\n**Why developers love it:** quick start with starter code, far less configuration, an **embedded server** (no separate Tomcat install), reduced development time and cost, and it avoids boilerplate.",
  },
  {
    id: 'spring-boot-components',
    title: 'Core Components of Spring Boot',
    content:
      "Spring Boot ships with five headline components:\n\n- **Starters** — curated dependency bundles (e.g. `spring-boot-starter-web`) so you don't hand-pick compatible versions.\n- **Auto-Configuration** — sensible defaults wired automatically based on the classpath.\n- **Embedded Server** — Tomcat/Jetty/Undertow baked into the JAR; run with `java -jar`.\n- **Spring Boot Actuator** — production-ready monitoring and management endpoints.\n- **DevTools** — fast restarts and live reload during development.",
  },
  {
    id: 'spring-boot-architecture',
    title: 'Spring Boot Layered Architecture',
    content:
      "A Spring Boot app is organised into three tiers, each with a clear job:\n\n- **Presentation Layer** — the **@Controller / @RestController** classes that receive requests and return responses.\n- **Service Layer** — where **business logic** lives: validation, decisions, and processing.\n- **Data Access Layer** — the **repository** classes that talk to the database.\n\nA request flows Browser → Controller → Service → Repository → Database, and the response travels back the same way. This separation keeps each layer testable and swappable.",
  },
  {
    id: 'spring-boot-actuator',
    title: 'Spring Boot Actuator',
    content:
      "**Actuator** adds built-in, production-ready endpoints to monitor and manage a running app — real-time metrics, health, and more, all customizable.\n\nKey endpoints:\n- **/health** — app health (DB connectivity, disk space, custom checks).\n- **/info** — arbitrary app info (version, git commit).\n- **/metrics** — performance and behaviour metrics.\n- **/loggers** — view and change log levels at runtime.\n- **/beans** — every Spring bean in the context.\n- **/shutdown** — gracefully shut the app down (important for clean service deregistration).",
  },
];

// Module 32 — Building REST APIs
const REST_API_SECTIONS = [
  {
    id: 'basics-of-api',
    title: 'Basics of an API',
    content:
      "An **API (Application Programming Interface)** is a set of rules and protocols that let one software application talk to another — like a **restaurant menu**: you order from a defined list without knowing what happens in the kitchen.\n\n**Why APIs matter:** they let apps **share data**, **speed up development** (reuse instead of rebuild), and **extend reach** by plugging into other systems. Familiar examples: **Google Maps, Twitter, Facebook Graph, Amazon S3**. APIs come in three flavours: **Internal**, **External (public)**, and **Partner**.",
  },
  {
    id: 'api-request-types',
    title: 'Types of API Requests',
    content:
      "REST APIs use HTTP verbs to express intent:\n\n- **GET** — retrieve/read resources from the server (read-only, no side effects).\n- **POST** — create a new resource on the server.\n- **PUT** — update an existing resource on the server.\n- **DELETE** — remove a resource from the server.\n\nMatching the right verb to the operation is the foundation of a clean, predictable REST API.",
  },
  {
    id: 'http-status-codes',
    title: 'HTTP Status Codes',
    content:
      "Every response carries a **status code** telling the client what happened. They fall into five classes:\n\n- **1xx** Informational · **2xx** Success · **3xx** Redirection · **4xx** Client Error · **5xx** Server Error.\n\nCommonly used: **200 OK**, **201 Created**, **204 No Content**, **301 Moved Permanently**, **400 Bad Request**, **401 Unauthorized**, **403 Forbidden**, **404 Not Found**, and **500 Internal Server Error**. Returning the correct code makes your API self-documenting and easy to debug.",
  },
  {
    id: 'dto-pattern',
    title: 'The DTO Pattern',
    content:
      "A **DTO (Data Transfer Object)** is a design pattern for moving data between the subsystems of an application — typically between the API layer and clients.\n\nInstead of exposing your full **entity** (which may include sensitive or irrelevant fields like password hashes or internal IDs), you map it to a DTO carrying **only the fields the caller needs**. This decouples your public API from your database schema, improves security, and lets the two evolve independently.",
  },
];

// Module 33 — Spring Data JPA
const SPRING_DATA_JPA_SECTIONS = [
  {
    id: 'what-is-jpa',
    title: 'What Is JPA?',
    content:
      "**JPA (Java Persistence API)** maps Java **objects** to database **rows** so you work with entities instead of raw SQL. A `User` class with `id`, `firstName`, `lastName` maps to a table with matching columns.\n\n**Advantages:** it's simple, makes querying easier, lets you save/update objects directly, and integrates seamlessly with Spring Boot.\n\nCompare: raw JDBC needs a `Connection`, `PreparedStatement`, `ResultSet`, and manual row mapping — JPA reduces all of that to `userRepository.findById(1L)`.",
  },
  {
    id: 'jpa-repository',
    title: 'Spring Data JpaRepository',
    content:
      "Spring Data JPA gives you a repository interface with CRUD methods for free. Declare `interface UserRepository extends JpaRepository<User, Long>` — supplying the **entity type** and its **primary-key type** — and you instantly get:\n\n- `findAll()`, `findById(id)`, `save(entity)`, `deleteById(id)` and more.\n- **Derived query methods** — `findByLastName(String name)` is implemented automatically from the method name.\n\nThe repository sits in the **Data Access Layer**, keeping persistence out of your service and controller code.",
  },
  {
    id: 'postgresql',
    title: 'PostgreSQL — and Why Use It',
    content:
      "**PostgreSQL** is a powerful **object-relational** database (ORDBMS). It's popular for its **SQL compliance, extensibility, performance, strong community, and data integrity**.\n\n**Why PostgreSQL over H2** for real projects: better **scalability, durability, a richer feature set, and a mature ecosystem/tooling**. H2 (in-memory) is great for quick tests, but production microservices want a persistent, robust store — and each microservice owns **its own** database (database-per-service).",
  },
  {
    id: 'jpa-locking',
    title: 'Optimistic vs Pessimistic Locking (Hibernate)',
    content:
      "When two transactions update the same row, JPA/Hibernate offers two locking strategies to prevent **lost updates**:\n\n- **Optimistic Locking** — **no database locks**. A `@Version` column is read with the row; on update Hibernate does `UPDATE ... WHERE id = ? AND version = ?`. If another transaction already bumped the version, **0 rows match** and Hibernate throws `OptimisticLockException` — the app then re-reads and retries. Best for **read-heavy, low-contention** workloads.\n- **Pessimistic Locking** — the **first writer locks the row** (`SELECT ... FOR UPDATE` via `LockModeType.PESSIMISTIC_WRITE`); other transactions **wait** until the lock is released on commit. Best for **high-contention** writes, at the cost of throughput and possible deadlocks.\n\nThe diagram below traces both flows step by step (Alice and Peter updating the same account):",
    image: '/java-notes/optimistic-vs-pessimistic-locking.jpg',
    imageAlt: 'Optimistic vs Pessimistic Locking sequence diagrams — optimistic uses a version column with conflict-at-commit and retry; pessimistic locks the row so the second writer waits',
  },
  {
    id: 'sql-group-by-having',
    title: 'SQL: GROUP BY & HAVING',
    content:
      "Working with the database behind JPA — whether via JPQL, native queries, or `@Query` — means knowing SQL aggregation. **GROUP BY** groups rows that have the same values into summary rows; **HAVING** filters those grouped results based on a condition.\n\n**GROUP BY vs HAVING:**\n- **GROUP BY** groups rows with the same values, is used after `WHERE` and before `HAVING`, works on individual rows, and is paired with aggregate functions.\n- **HAVING** filters the grouped results, is used after `GROUP BY`, and works on groups (aggregate results).\n\n**Key rule:** **`WHERE` filters *before* grouping; `HAVING` filters *after* grouping.** Always use an aggregate function with `GROUP BY`.\n\n**Common aggregate functions:** `COUNT()` (number of rows), `SUM()` (total), `AVG()` (average), `MIN()`, and `MAX()`.\n\nThis is the backbone of reporting, analytics, and dashboards. Example goal on a `sales(sale_id, product, category, region, amount, sale_date)` table: find total sales by category and show only those above 10000.",
    code: "-- 1. Total sales by category\nSELECT category, SUM(amount) AS total_sales\nFROM sales\nGROUP BY category;\n\n-- 2. Categories with total sales > 10000  (HAVING filters the groups)\nSELECT category, SUM(amount) AS total_sales\nFROM sales\nGROUP BY category\nHAVING SUM(amount) > 10000;\n\n-- 3. WHERE filters rows first, then GROUP BY + HAVING on the groups\nSELECT region, SUM(amount) AS total_sales\nFROM sales\nWHERE sale_date >= '2024-06-01' AND sale_date < '2024-07-01'\nGROUP BY region\nHAVING SUM(amount) > 10000;",
    image: '/java-notes/sql-group-by-having.jpg',
    imageAlt: 'SQL GROUP BY & HAVING for data engineers — GROUP BY groups rows into summary rows, HAVING filters the grouped results, WHERE filters before grouping while HAVING filters after, common aggregate functions (COUNT, SUM, AVG, MIN, MAX), and sales-table query examples with sample results',
  },
  {
    id: 'sql-constraints-fundamentals',
    title: 'SQL Constraints — Fundamentals',
    content:
      "**SQL constraints** are rules applied to table columns to ensure the **accuracy, consistency, and integrity** of your data — the database guardrails behind your JPA entities (each maps to a JPA annotation).\n\n**Why we need them** — prevent invalid/incorrect data, maintain integrity and consistency, enforce relationships between tables, and avoid redundancy and errors.\n\n**Types of constraints:**\n- **PRIMARY KEY** — uniquely identifies each record; cannot be NULL; only one per table (JPA `@Id`).\n- **FOREIGN KEY** — creates a link between two tables; the child value must exist in the parent (`@ManyToOne` / `@JoinColumn`).\n- **UNIQUE** — all values in a column (or set) are distinct (`@Column(unique = true)`).\n- **NOT NULL** — a column cannot hold NULL (`@Column(nullable = false)`).\n- **CHECK** — values must satisfy a condition, e.g. `age >= 18`.\n- **DEFAULT** — sets a default value when none is provided (`@ColumnDefault`).\n\n**UNIQUE vs PRIMARY KEY** — a primary key allows **no** NULLs, **no** duplicates, and there's only one per table; a UNIQUE column allows **one** NULL and you can have **multiple** UNIQUE columns.\n\n**Common beginner mistakes** — using multiple primary keys (a table has only one), a FK that references a non-existent PK, allowing NULLs unnecessarily, and meaningless default values.",
    code: "CREATE TABLE Departments (\n  DeptID   INT PRIMARY KEY,\n  DeptName VARCHAR(100)\n);\n\nCREATE TABLE Employees (\n  EmpID   INT PRIMARY KEY,\n  EmpName VARCHAR(100) NOT NULL,\n  Email   VARCHAR(100) UNIQUE,\n  Age     INT CHECK (Age >= 18),\n  Salary  DECIMAL(10,2) DEFAULT 30000,\n  DeptID  INT,\n  FOREIGN KEY (DeptID) REFERENCES Departments(DeptID)\n);",
    image: '/java-notes/sql-constraints-part1.jpg',
    imageAlt: 'SQL Constraints Part 1 Fundamentals — what constraints are and why we need them, types (PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, DEFAULT), PRIMARY KEY and FOREIGN KEY explained with an ER diagram, UNIQUE vs PRIMARY KEY comparison, common beginner mistakes, and a quick revision of all constraints',
  },
  {
    id: 'sql-constraints-deep-dive',
    title: 'SQL Constraints — Deep Dive & Best Practices',
    content:
      "Part 2 goes deeper: enforcement, cascading actions, composite constraints, altering constraints, and best practices.\n\n**Constraint enforcement** — on every INSERT/UPDATE the database checks the rule; valid data is saved, invalid raises an error. Only valid data ever gets stored.\n\n**Cascading actions (FOREIGN KEY)** — control what happens on DELETE/UPDATE of a parent row:\n- **CASCADE** — delete/update the child rows automatically.\n- **SET NULL** — set the child FK to NULL but keep the row.\n- **RESTRICT / NO ACTION** — block the operation (the default in many DBs).\nIn JPA these map to cascade types and `@OnDelete`.\n\n**Composite constraints** — a constraint over **multiple columns**, e.g. a UNIQUE or PRIMARY KEY on `(EmpID, ProjectID)` — to ensure uniqueness across the combination rather than a single column.\n\n**ALTER TABLE** — add, drop, or enable/disable constraints after table creation (`ALTER TABLE ... ADD CONSTRAINT ...`).\n\n**Constraints & NULL** — PRIMARY KEY and NOT NULL disallow NULL; UNIQUE and FOREIGN KEY allow NULL; CHECK is skipped when the value is NULL. Remember: NULL isn't a value — it means 'unknown'.\n\n**Best practices** — define a PRIMARY KEY for every table, use FOREIGN KEYs for relationships, avoid NULL unless business logic allows it, use CHECK for business rules, use DEFAULT to reduce app logic, name constraints meaningfully (`PK_Table`, `FK_Table_RefTable`, `UQ_Table_Column`, `CK_Table_Column_Rule`, `DF_Table_Column`), and test/review them regularly.\n\n**Common errors & fixes** — 'cannot insert NULL' → make the column nullable or provide a value; 'duplicate entry' → ensure unique values; 'cannot add a child row' → insert the parent first / check the FK; delete-update conflicts → use CASCADE or delete children first.",
    image: '/java-notes/sql-constraints-part2.jpg',
    imageAlt: 'SQL Constraints Part 2 Deep Dive & Best Practices — constraint enforcement flow, each constraint with examples, cascading actions (CASCADE, SET NULL, RESTRICT, NO ACTION), a company database example, composite constraints, ALTER TABLE add/modify/drop, constraints and NULL values, best practices with naming conventions, and common errors with fixes',
  },
];

// Module 34 — Spring Security Basics
const SPRING_SECURITY_SECTIONS = [
  {
    id: 'security-auth-authz',
    title: 'Security, Authentication & Authorization',
    content:
      "**Security** means protecting your app, users, and data from threats. Two ideas sit at its core:\n\n- **Authentication** — verifying **who** you are (identity).\n- **Authorization** — deciding **what** you're allowed to do (permissions).\n\n**Spring Security** provides both, plus protection against common threats (CSRF, session fixation), secure **password storage**, and deep integration with the Spring ecosystem. It's declarative, highly customizable, regularly updated, and easy to use with Spring Boot.",
  },
  {
    id: 'iam-keycloak',
    title: 'IAM & Keycloak',
    content:
      "Imagine running three apps — a website, an admin dashboard, and a mobile app. Handling logins, roles, and security separately in each is a nightmare of duplication and risk.\n\n**Identity and Access Management (IAM)** centralizes this: login/logout, password reset, user roles, and social logins in one place. **Keycloak** is a production-ready, open-source IAM server providing a login screen, an admin dashboard, and APIs. Core concepts: **Realm** (workspace), **Client** (an app), **Users**, **Roles**, **Identity Providers** (Google/GitHub), and protocols **OIDC** & **SAML**.",
  },
  {
    id: 'oauth2',
    title: 'OAuth 2.0',
    content:
      "**OAuth 2.0** lets users grant a third-party app access to their data **without sharing their password**. Before OAuth you handed your credentials to every app — a security and control nightmare.\n\nFlow in plain terms: you click *Login with Google* → Google authenticates you → you grant permission → the app receives a **token** → it uses the token (not your password) to access your data. Key roles: **Resource Owner** (user), **Client** (the app), **Authorization Server** (issues tokens), and **Resource Server** (holds the data).",
  },
  {
    id: 'oauth-flows',
    title: 'OAuth 2.0 Flows & PKCE',
    content:
      "OAuth defines several flows for different scenarios:\n\n- **Authorization Code Flow** — the most common and secure for user logins; the app exchanges a short-lived **authorization code** for a token **server-to-server**, so the token never sits in the browser.\n- **Client Credentials Flow** — for **machine-to-machine** calls (backend jobs, cron, microservice-to-microservice) with no end user.\n- **PKCE (Proof Key for Code Exchange)** — hardens the authorization-code flow for public clients (mobile/SPA) using a **code verifier + challenge** (`SHA256(verifier) == challenge`).",
  },
];

// Module 35 — Dockerizing Spring Boot
const DOCKERIZING_SECTIONS = [
  {
    id: 'what-is-docker',
    title: 'Introduction to Docker',
    content:
      "The classic problem: code runs on your machine but breaks on a teammate's because environments differ. **Docker** solves *\"it works on my machine\"* by packaging the **application code, its dependencies, and environment config** into a single portable unit.\n\nDocker is an open-source platform to **automate deployment, scaling, and management** of applications using **containerization** — bundling runtime, libraries, and system tools together so the app runs identically anywhere.",
  },
  {
    id: 'docker-vs-vm',
    title: 'Docker vs Virtual Machines',
    content:
      "**Virtual Machines** each run a full **guest OS** on a hypervisor — strong isolation but heavy: large size, slow boot, high resource use. **Docker containers** share the **host OS kernel** via the Docker Engine, so they are:\n\n- **Lightweight** and resource-efficient.\n- **Almost instant** to start (no OS boot).\n- **Highly portable** and easy to scale (just spin up more containers).\n\nThat efficiency is why containers, not VMs, underpin modern microservice deployment.",
  },
  {
    id: 'docker-concepts',
    title: 'Docker Architecture & Core Concepts',
    content:
      "The **Docker Engine** contains the **Docker Daemon**, a **REST API**, and the **CLI**. Key concepts:\n\n- **Image** — a read-only template defining the container and its dependencies.\n- **Container** — a running instance created from an image.\n- **Dockerfile** — instructions to build an image.\n- **Registry / Docker Hub** — cloud storage to version, share, and distribute images.\n\nBuild an image from a Dockerfile, push it to a registry, then run it as a container anywhere.",
  },
  {
    id: 'containerizing-spring-boot',
    title: 'Containerizing a Spring Boot App',
    content:
      "A minimal **Dockerfile** for a Spring Boot JAR:\n\n`FROM eclipse-temurin:23-jdk`\n`WORKDIR /app`\n`COPY target/*.jar app.jar`\n`EXPOSE 8082`\n`ENTRYPOINT [\"java\",\"-jar\",\"app.jar\"]`\n\n**Workflow:** `./mvnw clean package -DskipTests` to build the JAR → `docker build -t my-service .` → `docker run -d -p 8082:8082 my-service`.\n\n**Essential commands:** `docker pull/push`, `docker ps -a`, `docker stop/start`, `docker rm/rmi`, `docker logs`, `docker exec -it <c> bash`, and `docker system prune -a` to reclaim space.",
  },
  {
    id: 'containerize-methods',
    title: 'Three Ways to Containerize: Dockerfile, Buildpacks & Jib',
    content:
      "There's no one-size-fits-all — pick by control vs simplicity:\n\n- **Dockerfile** — **full control** over layers and base image; the industry standard, works everywhere. You manage everything. Best for advanced/K8s users.\n- **Cloud Native Buildpacks** (`mvnw spring-boot:build-image`, Spring Boot 2.3+) — **no Dockerfile**; auto-detects JDK, applies best practices and layer caching. Best for most Spring Boot apps.\n- **Jib** (Google's Maven/Gradle plugin) — builds and pushes images **without Docker installed**; reproducible, fast, CI/CD-friendly. `jib:build` pushes to a registry; `jib:dockerBuild` loads into your local daemon.",
  },
  {
    id: 'docker-networking-config',
    title: 'Configuration & Networking in Docker',
    content:
      "Inside a Docker network, **don't use `localhost`** to reach other services — `localhost` refers to the container itself. Instead, containers find each other by **service name** (e.g. `postgres`, `kafka`, `config-server`, `rabbitmq`).\n\nBecause the Docker environment differs from your local machine, keep **separate config** (profiles / `--env-file`) for containers. This is why microservices use Spring **profiles** and externalized configuration — the same image runs locally and in Docker with different settings.",
  },
];

// Module 36 — Spring Cloud Config
const SPRING_CLOUD_CONFIG_SECTIONS = [
  {
    id: 'config-management',
    title: 'Configuration Management',
    content:
      "**Configuration management** means controlling each microservice's settings — database connections, external service URLs, caching, credentials, and more.\n\nHard-coding values (`private static final String DB_URL = ...`) is bad practice: you must **recompile** to change anything, you can't vary values per environment, and secrets leak into code. As the number of services grows, managing scattered config becomes a serious challenge around **security, consistency, dynamic updates, and versioning**.",
  },
  {
    id: 'externalized-config',
    title: 'Externalized Configuration',
    content:
      "**Externalized configuration** keeps settings **outside** the codebase so you change behaviour without recompiling. Spring Boot supports several sources:\n\n- `application.properties` / `application.yml`\n- **Environment variables**\n- **Command-line arguments**\n- **External config files**\n- **Cloud config** (Spring Cloud Config Server)\n\nThis lets one build run in dev, test, and prod with different values, and keeps sensitive data out of source control.",
  },
  {
    id: 'config-formats-profiles',
    title: 'Config Formats & Profiles',
    content:
      "**Properties vs YAML:** `.properties` is flat key–value — simple but repetitive for nested data. `.yml` is **hierarchical and readable** but indentation-sensitive. Both are fully supported; YAML suits large, nested configs, properties suit small ones.\n\n**Spring Profiles** define separate configurations per environment (`dev`, `test`, `prod`) — different databases, log levels, and feature toggles — so you switch environments without editing files. Activate with `spring.profiles.active`.",
  },
  {
    id: 'config-precedence',
    title: 'How Spring Boot Resolves Configuration',
    content:
      "When the same property is defined in several places, Spring Boot applies a **precedence order** (highest wins):\n\n1. **Command-line arguments** (`--build.id=123`)\n2. **Java system properties** (`-Dbuild.id=123`)\n3. **OS environment variables**\n4. **application.properties / application.yml**\n5. **Spring Cloud Config Server** (if used)\n6. **Default values** in code\n\nKnowing this order is essential for debugging *\"why is my config value not what I expect?\"*.",
  },
  {
    id: 'config-server',
    title: 'Spring Cloud Config Server',
    content:
      "A **centralized Config Server** gives all microservices a **single source of truth** for configuration, backed by **Git, a filesystem, or a database**.\n\nBenefits: centralized + versioned config, **dynamic updates** without redeploying, per-application and per-profile settings, and easier scaling. Each service becomes a **config client** that fetches its settings on startup, so operators manage everything in one place instead of editing dozens of services.",
  },
  {
    id: 'config-encryption',
    title: 'Securing Config: AES, RSA Keystore & Bus Refresh',
    content:
      "Config often holds secrets, so the Config Server can **encrypt** values:\n\n- **AES** — symmetric: one secret key locks and unlocks the data. Fast and simple.\n- **RSA Keystore** — asymmetric: a **key pair** (public encrypts, private decrypts) stored in a keystore generated with the JDK's **keytool**. More secure for production.\n- **Spring Cloud Bus Refresh** — broadcasts a refresh event so services pick up config changes **at runtime** without restarts.\n\n**Production best practices:** externalize config, use profiles, encrypt secrets, use secure connections, and enforce access control.",
  },
];

// Module 37 — Service Discovery
const SERVICE_DISCOVERY_SECTIONS = [
  {
    id: 'monolith-to-microservices',
    title: 'From Monolith to Microservices',
    content:
      "A **monolith** unifies every component into one interdependent application — simple at first, but it brings **hard-to-implement changes, poor scalability, long-term lock-in to one tech stack, slow IDEs and startup, large builds, and painful team collaboration**.\n\n**Microservices** structure an app as a collection of **small autonomous services**, each with its own database. Guiding principles: **Single Responsibility, Independence, Decentralization, Failure Isolation, and Continuous Delivery** — as Netflix famously demonstrated at scale.",
  },
  {
    id: 'inter-service-comm',
    title: 'Inter-Service Communication',
    content:
      "Once split into services, they must talk to each other — via **synchronous** (request/response) or **asynchronous** (messaging) communication.\n\nFor synchronous calls, Spring offers a spectrum of REST clients that evolved over time:\n- **RestTemplate** — the classic blocking client (now legacy).\n- **WebClient** — reactive, non-blocking (Spring 5 WebFlux).\n- **RestClient** — modern fluent, synchronous client (Spring 6).\n- **OpenFeign / HTTP Interfaces** — **declarative** clients defined as annotated Java interfaces.\n\nFor new projects prefer **RestClient / HTTP Interfaces** for blocking calls, **WebClient** for high-concurrency reactive needs.",
  },
  {
    id: 'service-registry',
    title: 'Service Registry & Discovery',
    content:
      "In a dynamic environment services **move, start, stop, and scale**, so hard-coding URLs breaks. Older approaches — hardcoded IPs, DNS, load balancers, config servers — each have gaps (manual updates, caching, added latency, not dynamic).\n\nA **Service Registry** solves this: services **register** themselves, and callers **discover** healthy instances by name, with **client-side load balancing** built in. Benefits: dynamic discovery, load balancing, fault tolerance, scalability, and health checks.",
  },
  {
    id: 'eureka',
    title: 'Eureka: Heartbeats & Self-Preservation',
    content:
      "**Eureka** is Netflix's service registry. Services register and send periodic **heartbeats** (renewals); Eureka evicts instances that stop sending them.\n\n- **Self-Preservation Mode** — if too many heartbeats drop at once (likely a **network** problem, not real outages), Eureka **stops evicting** instances to avoid wrongly removing healthy ones. Controlled by `eureka.server.enable-self-preservation`.\n- **Graceful shutdown** — use **Actuator's `/shutdown`** (not IntelliJ's stop button) so the instance deregisters cleanly instead of lingering as a dead entry.\n- Key tuning: `lease-renewal-interval` and `lease-expiration-duration` speed up failover.",
  },
];

// Module 38 — API Gateway
const API_GATEWAY_SECTIONS = [
  {
    id: 'why-api-gateway',
    title: 'Introduction to API Gateways',
    content:
      "Without a gateway, clients must know **every service's URL** and each service repeats **security and authentication** — a communication and cross-cutting mess.\n\nAn **API Gateway** is the **single entry point** in front of your microservices. It encapsulates the internal architecture and handles cross-cutting concerns: **routing, load balancing, authentication/authorization, rate limiting, and analytics**. It can authenticate requests before they reach services and **aggregate** responses from several services into one.",
  },
  {
    id: 'gateway-functions',
    title: 'API Gateway Functions & Route Config',
    content:
      "Core capabilities: **request routing, load balancing, authentication & authorization, rate limiting, request/response transformation, and data aggregation**.\n\nRoutes can be defined two ways:\n- **YAML/properties** — easy and readable for simple routes, but limited for complex filters.\n- **Java configuration** — more code, but **fully customizable** with custom logic like JWT auth or bespoke rate limiting.\n\nUse YAML for straightforward routing; drop to Java when you need programmable filters.",
  },
  {
    id: 'gateway-patterns',
    title: 'Gateway Patterns & Best Practices',
    content:
      "Three common patterns:\n- **Single Entry Point** — one gateway fronts all services for every client.\n- **Backend for Frontend (BFF)** — a dedicated gateway per client type (desktop, mobile), each tailored to that UI.\n- **Aggregation Gateway** — combines results from multiple services into one composite response.\n\n**Best practices:** use load balancing, implement authentication & security at the edge, and **handle errors gracefully** so a single failing service doesn't break the client experience.",
  },
  {
    id: 'fault-tolerance',
    title: 'Fault Tolerance with Resilience4j',
    content:
      "**Fault tolerance** is the ability to keep operating when parts fail — stopping small failures from cascading into a full outage. Failures come as **network issues, service unavailability, and high latency**.\n\n**Resilience4j** is a lightweight fault-tolerance library with modules:\n- **Retry** — try again on transient failures (with backoff).\n- **Circuit Breaker** — stop calling a failing service (closed → open → half-open) to prevent cascades.\n- **Bulkhead** — isolate resource pools so one overload doesn't sink everything.\n- **RateLimiter, Timeouts, Fallbacks & Graceful Degradation**.",
  },
  {
    id: 'rate-limiting',
    title: 'Rate Limiting',
    content:
      "**Rate limiting** caps how much traffic a client can send in a window. It matters for **preventing abuse, allocating resources fairly, and controlling cost**.\n\nCommon use cases: protecting **APIs**, throttling **login attempts**, blocking aggressive **web scraping**, and blunting **DDoS** attacks. Resilience4j's **RateLimiter** enforces these limits in Spring Boot — returning a friendly error (e.g. **429 Too Many Requests**) instead of letting a burst overwhelm the service.",
  },
];

// Module 40 — Observability Stack
const OBSERVABILITY_SECTIONS = [
  {
    id: 'observability-intro',
    title: 'Observability vs Monitoring',
    content:
      "**Observability** is the ability to understand a system's internal state from the data it produces — **logs, metrics, and traces**.\n\nIt's broader than monitoring: **monitoring** watches predefined health/performance signals (\"is the server up?\") — a smoke detector. **Observability** explores **unknown** issues and answers **why** something happened (\"why did this request fail?\") — an investigation. Distributed microservices need all three pillars to be debuggable.",
  },
  {
    id: 'logging',
    title: 'Logging in Spring Boot',
    content:
      "**Logs** are messages applications write — vital for **debugging, tracking activity, performance monitoring, and security auditing**.\n\nSpring Boot doesn't log directly: your code calls **SLF4J** (a facade), which forwards to a framework — **Logback** by default (or Log4j2/JUL). **Levels**: TRACE, DEBUG, INFO, WARN, ERROR.\n\n**Best practices:** use **structured logging** (`logger.info(\"Order placed: {}\", item)`), pick the **right level**, and **never log sensitive data** (passwords, tokens).",
  },
  {
    id: 'centralized-logging',
    title: 'Centralized Logging',
    content:
      "With many services each writing their own log files, chasing an issue means grepping across many machines. **Centralized logging** collects logs from **all** services into one searchable system — **Elasticsearch + Kibana (ELK)** or **Loki + Grafana**.\n\nStructured logs shine here because they're easy to search and filter. One place to query means you can trace a failing order across Order → Payment → Inventory without hopping between servers.",
  },
  {
    id: 'metrics-tracing',
    title: 'Metrics & Distributed Tracing',
    content:
      "**Metrics** are quantitative measurements of performance and health — response times, memory, request counts, error rates. The standard stack: services expose metrics → **Prometheus** collects them → **Grafana** visualizes and alerts.\n\n**Distributed Tracing** tracks a single request as it flows across services. Each request gets a **Trace ID**, and each hop a **Span ID**, so you can see the full path (Order → Payment → Inventory → DB), pinpoint **latency**, and debug failures across service boundaries.",
  },
];

// Module 45 — Kafka & Spring Events (Asynchronous Messaging)
const MESSAGING_SECTIONS = [
  {
    id: 'async-communication',
    title: 'Asynchronous Communication',
    content:
      "**Synchronous** calls make the caller wait and couple services in time — if the callee is down, the caller fails. **Asynchronous** communication decouples them: a sender emits a message and moves on.\n\nBenefits: **better performance, loose coupling, scalability, and fault tolerance** — a slow or temporarily down consumer doesn't block the producer. This is the backbone of resilient, event-driven microservices.",
  },
  {
    id: 'message-queues',
    title: 'Message Queues',
    content:
      "A **message queue** is asynchronous service-to-service communication: a **Producer** puts a message on the queue and a **Consumer** reads it when ready.\n\nWhy queues: **decoupling** (services don't call each other directly), **time decoupling** (consumer can be offline and catch up), **scalability** (add consumers), and **fault tolerance** (messages persist until processed). They're the foundation of event-driven architecture — e.g. *order placed* → queue → *send notification*.",
  },
  {
    id: 'messaging-exchanges',
    title: 'Messaging Exchanges & Types',
    content:
      "In RabbitMQ, producers publish to an **Exchange**, which routes messages to **Queues** via **Bindings**. Four exchange types:\n\n- **Direct** — routes by exact **routing key** to one matching queue (order processing).\n- **Fanout** — broadcasts to **all** bound queues (notifications).\n- **Topic** — routes by **pattern** in the routing key (`app.order.#`) — great for logging/event systems.\n- **Headers** — routes by key–value **headers** rather than a routing key.",
  },
  {
    id: 'messaging-models',
    title: 'Messaging Models & Spring Cloud Stream',
    content:
      "Two fundamental models:\n- **Queue (Point-to-Point)** — one message goes to exactly **one** consumer.\n- **Publish-Subscribe** — a message is **broadcast** to all subscribers.\n\n**Spring Cloud Stream** (with Spring Cloud Functions) lets you write producers/consumers **once** and bind them to either **RabbitMQ** or **Kafka** without changing your business code — the broker becomes a configuration detail.",
  },
  {
    id: 'rabbitmq-vs-kafka',
    title: 'RabbitMQ vs Kafka',
    content:
      "**RabbitMQ** is a traditional **push-based** message broker: messages are pushed to consumers, ACK'd per message, and deleted once delivered. Strengths: **low latency, smart routing (exchanges), reliable task/command delivery**. Choose it for order→email, task queues, RPC-style calls.\n\n**Kafka** is a **pull-based streaming log**: events are stored for a fixed time (e.g. 7 days) even after consumption, with strict **per-partition ordering** and **offset tracking**. Choose it for **high-throughput streaming, event sourcing, replay, and many independent consumers**. Remember: **Kafka is not a database — you can't search it**.",
  },
];

function buildLessons() {
  const lessons = [];
  let javaDay = 1;
  const defaultYt = yt(
    'https://www.youtube.com/watch?v=eTXd89t8ngI&list=PLd3UqWTnYXOmx_J1774ukG_rvrpyWczm0',
    'Complete Java Course (Playlist)',
    'Durgasoft',
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
      const embarkxLink = {
        label: 'eCommerce Microservices Course (PDF)',
        href: '/spring-boot-ecommerce-microservices-course.pdf',
        icon: '📄',
      };
      if (title === 'Spring Boot Fundamentals') {
        lesson.pdfUrl = '/java-spring-boot-slides.pdf';
        lesson.pdfLabel = 'Spring Boot Slides (PDF)';
        lesson.sections = SPRING_BOOT_FUNDAMENTALS_SECTIONS;
        lesson.extraLinks = [
          {
            label: 'eCommerce Masterclass Slides (PDF)',
            href: '/spring-boot-ecommerce-masterclass-slides.pdf',
            icon: '📄',
          },
          embarkxLink,
        ];
      }
      if (title === 'OOP — Classes & Objects') {
        lesson.sections = JAVA_METHODS_SECTIONS;
      }
      if (title === 'Building REST APIs') {
        lesson.sections = REST_API_SECTIONS;
        lesson.extraLinks = [embarkxLink];
      }
      if (title === 'Spring Data JPA') {
        lesson.sections = SPRING_DATA_JPA_SECTIONS;
        lesson.extraLinks = [embarkxLink];
      }
      if (title === 'Spring Security Basics') {
        lesson.sections = SPRING_SECURITY_SECTIONS;
        lesson.extraLinks = [embarkxLink];
      }
      if (title === 'Dockerizing Spring Boot') {
        lesson.sections = DOCKERIZING_SECTIONS;
        lesson.extraLinks = [embarkxLink];
      }
      if (title === 'Spring Cloud Config') {
        lesson.sections = SPRING_CLOUD_CONFIG_SECTIONS;
        lesson.extraLinks = [embarkxLink];
      }
      if (title === 'Service Discovery') {
        lesson.sections = SERVICE_DISCOVERY_SECTIONS;
        lesson.extraLinks = [embarkxLink];
      }
      if (title === 'API Gateway') {
        lesson.sections = API_GATEWAY_SECTIONS;
        lesson.extraLinks = [embarkxLink];
      }
      if (title === 'Observability Stack') {
        lesson.sections = OBSERVABILITY_SECTIONS;
        lesson.extraLinks = [embarkxLink];
      }
      if (title === 'Kafka & Spring Events') {
        lesson.sections = MESSAGING_SECTIONS;
        lesson.extraLinks = [embarkxLink];
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
