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
      ['Design Patterns', '15 must-know GoF design patterns', ['Creational patterns', 'Structural patterns', 'Behavioral patterns', 'When to use each']],
      ['Java Internals', 'HashMap, String immutability, memory model, and concurrency basics', ['HashMap internals', 'Heap vs stack', 'equals() & hashCode()', 'Threads & synchronization']],
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
    id: 'architecture-blueprint',
    title: 'Microservices Architecture Blueprint',
    content:
      "A **production-ready, scalable and resilient** microservices architecture on one page — every layer from clients to data, plus the cross-cutting concerns that make it operable in production.\n\n**Nine principles:** Single Responsibility, Loosely Coupled, Independently Deployable, Decentralized Data, Fault Isolation, Scalable, Technology Agnostic, Resilient, Observable.\n\n**Benefits:** independent scaling, faster deployment, technology flexibility, fault isolation, better team autonomy, and continuous delivery.\n\n**The request path:** **Clients** (web, mobile, third-party) → **Load Balancer** → **API Gateway** (routing, authentication, rate limiting, request/response transformation) → **Microservices** (User, Order, Payment, Inventory, Notification), each owning its **own database** (database-per-service). A **message broker** — **Apache Kafka** (or RabbitMQ / Pulsar) — handles asynchronous communication, event streaming, and service decoupling.\n\n**Cross-cutting concerns:**\n- **Security** — OAuth2 / JWT, API security.\n- **Monitoring** — Prometheus + Grafana.\n- **Logging** — ELK stack (Elasticsearch, Logstash, Kibana).\n- **Tracing** — distributed tracing (Zipkin / Jaeger).\n- **Alerting** — Alertmanager, email / Slack.\n\n**Supporting platform services:**\n- **Service Discovery** — Eureka / Consul (Zookeeper): service registration + lookup.\n- **Configuration Server** — Spring Cloud Config: externalized, per-environment config.\n- **Circuit Breaker** — Resilience4j / Hystrix: failure isolation + fallback handling.\n- **Cache** — Redis: distributed cache + session store.\n- **Object Storage** — AWS S3 / MinIO: media files + documents.\n\n**Delivery & runtime:** a **CI/CD pipeline** (Code → Build → Test → Containerize → Deploy → Monitor, via GitHub/GitLab, Jenkins/GitHub Actions, Docker) ships services to **Kubernetes** (auto-scaling, self-healing, rolling updates, service management) across **Dev → Staging → Production**.\n\n**Data flow (high level):** Client → Load Balancer → API Gateway → Service → Cache (Redis) → Database → Message Broker (Kafka) → other services — **synchronous** on the request path, **asynchronous** through the broker.\n\n**Best practices:** keep services small and focused, design for failure, automate everything, monitor and observe everything, prefer asynchronous communication, version your APIs, and secure service-to-service communication.\n\n**Remember:** microservices are not just architecture — they're an engineering culture.",
    image: '/java-notes/microservices-architecture-blueprint.jpg',
    imageAlt:
      'Microservices Architecture Blueprint — a production-ready, scalable, resilient architecture: clients → load balancer → API gateway → User/Order/Payment/Inventory/Notification services each with their own database, Apache Kafka message broker, cross-cutting concerns (security OAuth2/JWT, monitoring Prometheus/Grafana, logging ELK, tracing Zipkin/Jaeger, alerting), supporting services (service discovery Eureka/Consul, Spring Cloud Config, Resilience4j circuit breaker, Redis cache, S3/MinIO object storage), CI/CD pipeline, Kubernetes orchestration, deployment environments, high-level data flow, and best practices',
  },
  {
    id: 'top-10-problems',
    title: 'Top 10 Problems in Microservices (and How to Solve Them)',
    content:
      "Every scalable distributed system hits the same ten problems — here are the industry-standard solutions used by Netflix, Amazon, Uber and modern cloud-native apps. **Microservices don't eliminate complexity — they distribute it.**\n\n1. **Distributed Data Management** — keeping data consistent across services is hard → **Database per Service, Saga pattern, Event Sourcing**.\n2. **Synchronous Service Dependency** — REST creates tight coupling; one slow service blocks everything → **event-driven architecture, Kafka / RabbitMQ, async messaging**.\n3. **Cascading Failures** — one crash takes down the whole system → **Circuit Breaker, retries, fallback, timeout (Resilience4j)**.\n4. **Service Discovery** — services don't know where others are running → **Eureka, Consul, Kubernetes service discovery (a service registry)**.\n5. **High Latency** — too many network calls slow things down → **Redis cache, API Gateway, aggregation pattern, async processing**.\n6. **Message Duplication** — Kafka may deliver duplicate events → **idempotent consumer, unique event ID, deduplication logic**.\n7. **Observability** — hard to debug requests across 50+ services → **centralized logging, distributed tracing, ELK stack, Prometheus / Grafana / Jaeger**.\n8. **Deployment Complexity** — deploying dozens of services by hand is error-prone → **Docker, Kubernetes, Helm, CI/CD (GitHub Actions / Jenkins)**.\n9. **Security** — auth between services is complex → **OAuth2, JWT, API Gateway, mTLS, Spring Security**.\n10. **Scalability** — traffic spikes overload one service → **horizontal scaling, Kubernetes HPA, load balancer, Kafka partitions, auto-scaling**.\n\n**The essential toolbox:** API Gateway, Apache Kafka, Redis, Docker, Kubernetes, Spring Boot, Spring Cloud, Resilience4j, ELK, Prometheus, Grafana, Jaeger.\n\n**Key takeaway:** success comes from choosing the right architectural patterns, observability, resilience, and automation — not from relying on any single technology alone.",
    image: '/java-notes/top-10-microservices-problems.jpg',
    imageAlt:
      'Top 10 problems in microservices architecture and how to solve them — distributed data management (database per service, saga, event sourcing), synchronous service dependency (event-driven, Kafka/RabbitMQ), cascading failures (circuit breaker, Resilience4j), service discovery (Eureka, Consul, Kubernetes), high latency (Redis cache, API gateway, aggregation), message duplication (idempotent consumer, dedup), observability (ELK, Prometheus, Grafana, Jaeger), deployment complexity (Docker, Kubernetes, Helm, CI/CD), security (OAuth2, JWT, mTLS, Spring Security), and scalability (horizontal scaling, Kubernetes HPA, load balancer, auto-scaling), plus the essential technology toolbox and the key takeaway that microservices distribute complexity rather than eliminate it',
  },
  {
    id: 'architecture-evolution',
    title: 'The Architecture Evolution Journey',
    content:
      "Microservices are the **end** of an evolutionary path, not the starting point. A system typically evolves: **Monolith → 3-Tier → Modular Monolith → Microservices → Serverless**.\n\nEach step is driven by a real problem, using tools from your **design toolbox** (architectures, patterns, principles like **KISS, YAGNI, DRY, Separation of Concerns**).\n\n- **Monolith** — one deployable unit; simple and fast to start, but a **Big Ball of Mud** as it grows.\n- **Modular Monolith** — clear internal module boundaries and separate DB schemas, with high cohesion and low coupling, **before** going distributed.\n- **Microservices** — independently deployable, scalable services when teams and load demand true autonomy.\n\n**Monolithic vs Microservice — at a glance:**",
    image: '/java-notes/monolithic-vs-microservices.jpg',
    imageAlt: 'Monolithic vs Microservice comparison — architecture, modularity, agility, scaling, implementation, maintainability, and transactions (ACID vs BASE)',
  },
  {
    id: 'monolith-vs-microservices-vs-serverless',
    title: 'Monolith vs Microservices vs Serverless — Layer by Layer',
    content:
      "The same request traced through three architectures, layer by layer.\n\n**Monolith:**\n- **Request Handling** — User Request → Load Balancer.\n- **Application Layer** — a Monolithic Application: UI, Business Logic, and Data Access Layer, all deployed as a single unit.\n- **Data Layer** — a single Database, plus an optional Cache (e.g. Redis).\n- **Infrastructure & Ops** — File Storage (e.g. S3 / NFS), Monitoring & Logging (e.g. Prometheus, ELK).\n\n**Microservices:**\n- **Request Handling** — User Request → API Gateway / Load Balancer.\n- **Service Layer** — Microservices: User Service, Order Service, Product Service, Payment Service, Notification Service, Inventory Service.\n- **Data Layer** — Databases, one per service (database-per-service).\n- **Infra & Ops** — Cache / Message Broker (e.g. Redis, Kafka, RabbitMQ), Monitoring & Logging (e.g. Prometheus, ELK, Jaeger).\n\n**Serverless:**\n- **Request Handling** — User Request → API Gateway.\n- **Compute Layer** — Serverless Functions (e.g. AWS Lambda): many small, independently-invoked functions.\n- **Data & Services Layer** — Database (e.g. DynamoDB), Storage (e.g. S3), Queue / Stream (e.g. SQS, Kinesis).\n- **Security & Ops** — Authentication & Authorization (e.g. Cognito, IAM), Monitoring & Logging (e.g. CloudWatch, X-Ray).\n\n**Key takeaway:** moving from Monolith → Microservices → Serverless, each layer specializes further — a single deployable app becomes many independently deployable services, then disappears into managed, event-triggered functions — and the operational burden shifts progressively from your own infrastructure team to the cloud provider.",
    image: '/java-notes/monolith-vs-microservices-vs-serverless.jpg',
    imageAlt:
      'Monolith vs Microservices vs Serverless — three architectures compared layer by layer. Monolith: User Request → Load Balancer → Monolithic Application (UI, Business Logic, Data Access Layer as one unit) → single Database + optional Cache → File Storage + Monitoring & Logging. Microservices: User Request → API Gateway/Load Balancer → Microservices (User, Order, Product, Payment, Notification, Inventory services) → Databases per service → Cache/Message Broker (Redis, Kafka, RabbitMQ) + Monitoring & Logging. Serverless: User Request → API Gateway → Serverless Functions (Lambda) → Database (DynamoDB), Storage (S3), Queue/Stream (SQS, Kinesis) → Authentication & Authorization (Cognito, IAM) + Monitoring & Logging (CloudWatch, X-Ray).',
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
    id: 'api-gateway-visual',
    title: 'API Gateway — The Single Entry Point',
    content:
      "The single entry point for **all client requests** — a smart traffic controller that secures, manages, and optimizes API traffic while backend services focus on business logic.\n\n**Why an API Gateway?**\n- **Security** — centralized authentication, authorization, and protection.\n- **Performance** — caching, rate limiting, and request throttling.\n- **Observability** — centralized logging, monitoring, and analytics.\n- **Maintainability** — common logic in one place, less duplication.\n- **API Management** — versioning, transformation, and lifecycle management.\n\n**How it works:** clients (web, mobile, third-party) hit **one gateway**, which handles **authentication & authorization, request validation, rate limiting & throttling, caching, logging & monitoring, and request/response transformation** — then routes each call to the right microservice (User, Order, Payment, Inventory, Notification, Analytics), each owning its own database.\n\n**Without an API Gateway:** clients must know every service endpoint; security, logging and monitoring get re-implemented in every service; high complexity and duplicate code; harder to manage and scale.\n\n**With an API Gateway:** a single entry point for all clients; centralized security, monitoring and management; reduced complexity and code duplication; easier to maintain, secure and scale.\n\n**Final thought:** as your application grows, an API Gateway isn't just helpful — it's essential. It's the backbone of secure, scalable, and modern architectures.",
    image: '/java-notes/api-gateway.jpg',
    imageAlt:
      'API Gateway — the single entry point for all client requests: why (security, performance, observability, maintainability, API management), how it works (clients → API Gateway handling authentication, request validation, rate limiting, caching, logging, request/response transformation → User/Order/Payment/Inventory/Notification/Analytics services, each with its own database), a without-vs-with comparison, and the takeaway that an API Gateway is the backbone of secure, scalable, modern architectures',
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

// The classic Netflix OSS microservices stack — distilled from "Mastery in
// Microservices" (public/java-notes/mastery-in-microservices.pdf). Complements
// MICROSERVICES_DESIGN_SECTIONS (patterns/theory) and the modern Spring Cloud
// modules elsewhere (Resilience4j, OpenFeign, Spring Cloud Gateway) with the
// older Zuul/Ribbon/Hystrix stack, tied together through a worked Currency
// Conversion ↔ Currency Exchange example.
const MICROSERVICES_CLASSIC_STACK_SECTIONS = [
  {
    id: 'building-a-simple-microservice',
    title: 'Building a Simple Microservice with Spring Boot',
    content:
      "Every microservice starts the same way: a Spring Boot project exposing one REST endpoint. Add `spring-boot-starter-web`, annotate the main class with `@SpringBootApplication`, then a `@RestController` maps an HTTP path to a method that returns data — no view, no template, just JSON.\n\nSpring Boot's `MockMvc` (from `spring-boot-starter-test`) lets you test that endpoint without starting a real server: `mockMvc.perform(get(\"/books\"))` fires a simulated request through the same `DispatcherServlet`/controller pipeline, and `.andExpect(...)` asserts on the status, content type, and JSON body.",
    code: "// Book.java\npublic class Book {\n    private Long id;\n    private String title;\n    private String author;\n    // constructors, getters, setters\n}\n\n// BookController.java\n@RestController\npublic class BookController {\n\n    @GetMapping(\"/books\")\n    public List<Book> getBooks() {\n        List<Book> books = new ArrayList<>();\n        books.add(new Book(1L, \"Sample Book 1\", \"Author 1\"));\n        books.add(new Book(2L, \"Sample Book 2\", \"Author 2\"));\n        return books;\n    }\n}\n\n// BookControllerTest.java\n@WebMvcTest(BookController.class)\npublic class BookControllerTest {\n    @Autowired\n    private MockMvc mockMvc;\n\n    @Test\n    public void testGetBooks() throws Exception {\n        mockMvc.perform(get(\"/books\"))\n            .andExpect(status().isOk())\n            .andExpect(content().contentType(\"application/json\"))\n            .andExpect(jsonPath(\"$[0].title\").value(\"Sample Book 1\"));\n    }\n}",
  },
  {
    id: 'currency-conversion-exchange-example',
    title: 'Worked Example — Currency Conversion ↔ Currency Exchange',
    content:
      "A single running example ties the rest of this stack together: a **Currency Conversion** microservice that needs the latest exchange rate, and a **Currency Exchange** microservice that provides it.\n\n- **Currency Exchange Microservice** — stores/serves exchange-rate data via a REST API, with data validation on the currency pairs it accepts.\n- **Currency Conversion Microservice** — fetches the rate from Currency Exchange, then multiplies it by the requested amount to return a converted total. It also persists each conversion (source, target, amount, timestamp) via a JPA entity/repository for audit and history.\n\nThe two services can talk **synchronously** (a direct REST call, blocking until the rate comes back) or **asynchronously** (via a message broker like RabbitMQ/Kafka, if the caller doesn't need the result immediately). This same pair of services is reused in the sections below to show Feign, Ribbon/Eureka, and Zuul in action.",
    code: "@RestController\npublic class CurrencyConversionController {\n\n    @Autowired\n    private CurrencyExchangeServiceProxy exchangeServiceProxy;\n\n    @GetMapping(\"/convert\")\n    public ResponseEntity<ConversionResult> convertCurrency(\n            @RequestParam(\"sourceCurrency\") String sourceCurrency,\n            @RequestParam(\"targetCurrency\") String targetCurrency,\n            @RequestParam(\"amount\") BigDecimal amount) {\n\n        // Fetch exchange rate from Currency Exchange Microservice\n        ExchangeRate exchangeRate =\n            exchangeServiceProxy.getExchangeRate(sourceCurrency, targetCurrency);\n\n        BigDecimal convertedAmount =\n            amount.multiply(exchangeRate.getConversionRate());\n\n        return ResponseEntity.ok(\n            new ConversionResult(sourceCurrency, targetCurrency, amount, convertedAmount));\n    }\n}",
  },
  {
    id: 'feign-hystrix-fallback',
    title: 'Feign REST Client + Hystrix Fallback',
    content:
      "Rather than wiring `RestTemplate` calls by hand, `spring-cloud-starter-openfeign` lets you declare the remote service as a plain Java **interface** — `@FeignClient(name = \"currency-exchange-service\")` — and call it like any other Spring bean. Feign generates the HTTP client implementation for you at runtime.\n\nPaired with **Hystrix** (`@EnableCircuitBreaker` on the main class), a `fallback` class on the `@FeignClient` annotation supplies an alternate implementation of the same interface — if the real Currency Exchange service is down or times out, Hystrix routes the call to the fallback instead of letting the failure propagate, so Currency Conversion keeps responding (with a safe default rate) instead of failing outright.",
    code: "// CurrencyExchangeServiceProxy.java\n@FeignClient(name = \"currency-exchange-service\", fallback = CurrencyExchangeFallback.class)\npublic interface CurrencyExchangeServiceProxy {\n    @GetMapping(\"/exchange-rate\")\n    ExchangeRate getExchangeRate(\n        @RequestParam(\"sourceCurrency\") String sourceCurrency,\n        @RequestParam(\"targetCurrency\") String targetCurrency);\n}\n\n// CurrencyExchangeFallback.java\n@Component\npublic class CurrencyExchangeFallback implements CurrencyExchangeServiceProxy {\n    @Override\n    public ExchangeRate getExchangeRate(String sourceCurrency, String targetCurrency) {\n        // Runs only when the real service call fails or times out\n        return new ExchangeRate(sourceCurrency, targetCurrency, BigDecimal.ONE);\n    }\n}\n\n// Main class\n@EnableFeignClients\n@EnableCircuitBreaker\n@SpringBootApplication\npublic class CurrencyConversionApplication { /* ... */ }",
  },
  {
    id: 'ribbon-eureka-load-balancing',
    title: 'Client-Side Load Balancing — Ribbon + Eureka Naming Server',
    content:
      "When a service runs as **multiple instances** for high availability, something has to decide which instance handles each call — that's **client-side load balancing**: the calling service itself picks an instance, rather than a separate load-balancer box in front of it.\n\n**Eureka** acts as the naming server: each microservice registers itself with `@EnableEurekaServer` (server) / `spring-cloud-starter-netflix-eureka-client` + `eureka.client.service-url.defaultZone` (clients). **Ribbon** (`spring-cloud-starter-netflix-ribbon`) then plugs into that registry automatically — a `@FeignClient(name = \"my-microservice\")` referencing a Eureka-registered service name, instead of a hardcoded host:port, gets requests spread across every healthy instance with zero extra configuration.",
    code: "// EurekaServerApplication.java\n@EnableEurekaServer\n@SpringBootApplication\npublic class EurekaServerApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(EurekaServerApplication.class, args);\n    }\n}\n\n# application.properties (each client microservice)\nspring.application.name=my-microservice\neureka.client.service-url.defaultZone=http://localhost:8761/eureka\n\n// MyServiceClient.java -- Ribbon load-balances across every registered instance\n@FeignClient(name = \"my-microservice\")\npublic interface MyServiceClient {\n    @GetMapping(\"/endpoint\")\n    String getResponse();\n}",
  },
  {
    id: 'zuul-api-gateway-classic',
    title: 'Zuul — the Classic Netflix API Gateway',
    content:
      "Before Spring Cloud Gateway, **Zuul** was Spring Cloud's answer to the API Gateway pattern: a reverse proxy that gives clients one entry point, routes each request to the right microservice by path, and discovers those services through Eureka.\n\nEnable it with `@EnableZuulProxy` on the main class, then map routes in `application.properties` — `zuul.routes.my-microservice.path=/my-service/**` plus `zuul.routes.my-microservice.service-id=my-microservice` sends any request under `/my-service/**` to the Eureka-registered `my-microservice`. A custom `ZuulFilter` (overriding `filterType()`, `filterOrder()`, `shouldFilter()`, and `run()`) can log or inspect every request as it passes through — the same cross-cutting-concerns idea used by the modern Spring Cloud Gateway's `GlobalFilter`.",
    code: "// ZuulApiGatewayApplication.java\n@EnableZuulProxy\n@SpringBootApplication\npublic class ZuulApiGatewayApplication { /* ... */ }\n\n# application.properties\nzuul.routes.my-microservice.path=/my-service/**\nzuul.routes.my-microservice.service-id=my-microservice\n\n// ZuulLoggingFilter.java\n@Component\npublic class ZuulLoggingFilter extends ZuulFilter {\n    private static final Logger logger = LoggerFactory.getLogger(ZuulLoggingFilter.class);\n\n    @Override public String filterType() { return \"pre\"; } // before routing\n    @Override public int filterOrder() { return 1; }\n    @Override public boolean shouldFilter() { return true; }\n\n    @Override\n    public Object run() {\n        RequestContext context = RequestContext.getCurrentContext();\n        logger.info(\"Request Method: {}\", context.getRequest().getMethod());\n        logger.info(\"Request URL: {}\", context.getRequest().getRequestURL().toString());\n        return null;\n    }\n}\n\n// A client hits the gateway, not the microservice directly:\n// curl -X GET http://localhost:8765/my-service/api/data",
  },
  {
    id: 'zipkin-distributed-tracing-classic',
    title: 'Zipkin Server — Visualizing a Distributed Trace',
    content:
      "Once requests hop through Eureka → Zuul → several microservices, following one request by eyeballing logs stops working. **Zipkin** collects, stores, and visualizes exactly that: enable a standalone Zipkin server with `@EnableZipkinServer`, then add `spring-cloud-starter-zipkin` to every microservice you want traced (each registered with Eureka so Zipkin can discover them).\n\nOnce instrumented, services automatically report tracing data — no manual logging needed. Open the Zipkin dashboard to search traces by service or time range, and see the **duration**, **dependencies**, and **spans** of a request as it crossed multiple microservices, which is exactly how you'd spot which specific hop in a chain was the slow one.",
    code: "// ZipkinServerApplication.java\n@EnableZipkinServer\n@EnableEurekaClient\n@SpringBootApplication\npublic class ZipkinServerApplication { /* ... */ }\n\n<!-- pom.xml, on every traced microservice -->\n<dependency>\n  <groupId>org.springframework.cloud</groupId>\n  <artifactId>spring-cloud-starter-zipkin</artifactId>\n</dependency>\n\n// Dashboard: http://zipkin-server-host:port\n// microserviceA calling microserviceB shows up as one trace,\n// spanning both services, with per-hop timing.",
  },
  {
    id: 'spring-cloud-bus-config-refresh',
    title: 'Spring Cloud Bus — Broadcasting Config Changes',
    content:
      "A Spring Cloud Config Server centralizes configuration, but updating it doesn't automatically push those changes out — every service still has stale values in memory until it restarts. **Spring Cloud Bus** closes that gap: it rides on top of Config Server plus a message broker (RabbitMQ or Kafka) to broadcast a refresh event to **every** registered service at once.\n\nAfter committing a config change to the Config Server's Git backend, a single `POST` to `/actuator/bus-refresh` (on any one instance) ripples the refresh across the whole fleet — or target one application/instance specifically with `/actuator/bus-refresh/{application-name}:{instance-id}`. No rolling restarts, no manually curling every instance one by one.",
    code: "<!-- pom.xml, on every service that should refresh together -->\n<dependency>\n  <groupId>org.springframework.cloud</groupId>\n  <artifactId>spring-cloud-starter-bus-amqp</artifactId>\n</dependency>\n\n# Refresh every registered service at once\ncurl -X POST http://microservice-host:port/actuator/bus-refresh\n\n# Refresh only one specific application instance\ncurl -X POST http://microservice-host:port/actuator/bus-refresh/{application-name}:{instance-id}",
  },
  {
    id: 'hystrix-circuit-breaker-classic',
    title: 'Hystrix — the Classic Netflix Circuit Breaker',
    content:
      "Before Resilience4j became the standard, **Hystrix** (Netflix OSS, `spring-cloud-starter-netflix-hystrix`) was Spring Cloud's circuit breaker: enable it fleet-wide with `@EnableHystrix` (or `@EnableCircuitBreaker`), then annotate any method that calls another microservice with `@HystrixCommand(fallbackMethod = \"...\")`.\n\nIf that method fails or times out, Hystrix runs the named fallback method instead — same idea as the Feign fallback class above, but applicable to any method, not just Feign interfaces. Circuit-breaker behaviour is tunable per-command in `application.properties`: `hystrix.command.default.execution.isolation.thread.timeoutInMilliseconds`, `...circuitBreaker.requestVolumeThreshold` (how many failures trip it), and `...circuitBreaker.sleepWindowInMilliseconds` (how long it stays open before testing again).",
    code: "// MyService.java\n@Service\npublic class MyService {\n\n    @HystrixCommand(fallbackMethod = \"fallbackMethod\")\n    public String remoteMicroserviceCall() {\n        // call to another microservice — may fail or time out\n    }\n\n    public String fallbackMethod() {\n        return \"Fallback response\";\n    }\n}\n\n# application.properties -- tune the breaker\nhystrix.command.default.execution.isolation.thread.timeoutInMilliseconds=5000\nhystrix.command.default.circuitBreaker.requestVolumeThreshold=20\nhystrix.command.default.circuitBreaker.sleepWindowInMilliseconds=5000",
  },
];

// JDK vs JRE vs JVM (visual note, attached to the intro Java lesson)
const JDK_JRE_JVM_SECTIONS = [
  {
    id: 'jdk-vs-jre-vs-jvm',
    title: 'JDK vs JRE vs JVM',
    content:
      "Understanding the core of Java means understanding these three layered pieces.\n\n**JDK (Java Development Kit)** — the complete package for Java development.\n- **Includes:** the JRE, the JVM, development tools (`javac`, `jdb`, `javadoc`, `jar`, etc.), libraries, and headers.\n- **Used for:** developing, compiling, debugging, and running Java applications.\n- **Example:** `javac HelloWorld.java` then `java HelloWorld`.\n\n**JRE (Java Runtime Environment)** — provides the environment to run Java applications.\n- **Includes:** the JVM, core libraries, and other supporting files.\n- **Used for:** running Java applications.\n- **Example:** `java HelloWorld`.\n\n**JVM (Java Virtual Machine)** — executes Java bytecode and provides the runtime environment.\n- **Includes:** the class loader, bytecode verifier, execution engine, and runtime data areas (heap, stack, method area, etc.).\n- **Used for:** converting bytecode into machine code and executing it.\n- **Example:** `java -version`.\n\n**Quick comparison:**\n- **JDK** — primary role: development + execution. Includes JRE + tools + libraries. Required for developing & running.\n- **JRE** — primary role: execution environment. Includes JVM + libraries. Required for running applications.\n- **JVM** — primary role: execution engine. Includes runtime components. Required for executing bytecode.\n\n**In short:** install the JDK when you want to build Java applications; install the JRE when you only need to run Java applications. You don't install the JVM separately — it's part of both the JRE and the JDK. JDK is for developers, JRE is for running applications, and JVM is the engine that makes Java run anywhere.",
    code: "javac HelloWorld.java   // JDK compiles .java -> .class (bytecode)\njava HelloWorld          // JRE + JVM run the bytecode\njava -version             // check the installed JVM",
    image: '/java-notes/jdk-vs-jre-vs-jvm.jpg',
    imageAlt:
      'JDK vs JRE vs JVM — understanding the core of Java: JDK (Java Development Kit, the complete package for development, includes JRE + JVM + development tools like javac/jdb/javadoc/jar + libraries + headers, used for developing/compiling/debugging/running, example javac HelloWorld.java then java HelloWorld), JRE (Java Runtime Environment, provides the environment to run Java apps, includes JVM + core libraries + supporting files, used for running applications, example java HelloWorld), JVM (Java Virtual Machine, executes bytecode and provides the runtime environment, includes class loader/bytecode verifier/execution engine/runtime data areas like heap/stack/method area, used for converting bytecode to machine code and executing it, example java -version), a quick comparison table (primary role, includes, required for), and the summary that JDK is for developers, JRE is for running applications, and JVM is the engine that makes Java run anywhere',
  },
  {
    id: 'features-of-java',
    title: 'Top 14 Features of Java',
    content:
      "Java is a powerful, versatile, and widely used programming language — its features make it the first choice for developers and enterprises.\n\n**Top 14 features:**\n1. **Simple** — Java has a simple and easy-to-learn syntax.\n2. **Object-Oriented** — based on OOP concepts like class, object, inheritance, polymorphism, etc.\n3. **Platform Independent** — Java code runs on any platform that has a JVM (write once, run anywhere).\n4. **Secure** — provides built-in security features and does not support explicit pointers.\n5. **Robust** — strongly typed, with exception handling and automatic memory management (garbage collection).\n6. **Multithreaded** — supports concurrent programming with built-in thread support.\n7. **Architecture Neutral** — the compiler generates architecture-neutral bytecode.\n8. **Portable** — Java bytecode can be executed on any system with a JVM.\n9. **High Performance** — the JIT (Just-In-Time) compiler makes Java highly efficient.\n10. **Distributed** — built-in support for distributed applications (RMI, JDBC, web services).\n11. **Dynamic** — designed to adapt to an evolving environment.\n12. **Interpreted** — bytecode is executed on the JVM (interpreter).\n13. **Automatic Memory Management** — the Garbage Collector automatically reclaims unused memory.\n14. **High Reliability** — minimizes the risk of crashes with strong type checking and exception handling.\n\n**How Java achieves platform independence:** the Java compiler (`javac`) converts source code (`.java`) into bytecode (a `.class` file); the JVM then executes that bytecode on any platform (Windows, Linux, macOS) — compile once, run anywhere.\n\n**Common interview questions:**\n- What are the key features of Java?\n- Why is Java platform independent?\n- How does Java achieve platform independence?\n- What is the use of Garbage Collection in Java?\n- What makes Java secure?\n\n**Bonus tip:** remember that Java's design philosophy is to keep the language simple, secure, portable, and robust — so developers can focus more on solving problems.\n\n**Summary:** Java combines simplicity, security, portability, and performance. These features make it suitable for everything from mobile apps to enterprise systems.",
    code: "// Simple Java Program\npublic class FeatureExample {\n    public static void main(String[] args) {\n        System.out.println(\"Java is Awesome!\");\n    }\n}\n\n// Output: Java is Awesome!",
    image: '/java-notes/features-of-java.jpg',
    imageAlt:
      'Features of Java — Java Interview Series Day 02: 14 top features (Simple, Object-Oriented, Platform Independent, Secure, Robust, Multithreaded, Architecture Neutral, Portable, High Performance, Distributed, Dynamic, Interpreted, Automatic Memory Management, High Reliability), how Java achieves platform independence (.java source code -> javac compiler -> .class bytecode -> JVM -> runs on Windows/Linux/macOS), a simple FeatureExample code example, common interview questions, a bonus tip about Java\'s design philosophy, and a summary that Java combines simplicity, security, portability, and performance',
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

// Abstraction in Java — visual note (attached to OOP — Inheritance & Polymorphism)
const ABSTRACTION_SECTIONS = [
  {
    id: 'abstraction-in-java',
    title: 'Abstraction in Java',
    content:
      "**Abstraction** is the process of hiding implementation details and showing only the essential features of an object. It helps us focus on **WHAT** an object does instead of **HOW** it does it.\n\n**Overview:** Abstraction is one of the 4 Pillars of OOP (alongside Encapsulation, Inheritance, and Polymorphism). It reduces complexity by hiding unnecessary details, and improves maintainability and scalability. We achieve abstraction in Java using **Abstract Classes** and **Interfaces**. Goal: expose only what is necessary, hide the rest.\n\n**Abstract Class:**\n- Cannot be instantiated.\n- Can have abstract methods (no body), concrete methods (with body), and fields & constructors.\n\n**Interface:**\n- A completely abstract type (traditionally).\n- Can have abstract methods (public by default), constants (`public static final`), default methods (with implementation, since Java 8), static methods (since Java 8), and private methods (since Java 9).\n\n**Abstract Class vs Interface, at a glance:**\n- **Keyword** — `abstract class` vs `interface`.\n- **Methods** — Abstract Class: abstract + concrete; Interface: abstract (default), default, and static.\n- **Fields** — Abstract Class: can have instance variables; Interface: only public static final constants.\n- **Constructors** — Abstract Class: can have one; Interface: cannot.\n- **Access Modifiers** — Abstract Class: any; Interface: public (methods), (default).\n- **Inheritance** — Abstract Class: extends (one class); Interface: implements (multiple interfaces).\n- **Use Case** — Abstract Class: \"is-a\" with shared state and behavior; Interface: \"is-a\" with capability/contract.\n\n**Why Abstraction?** Focus on essential features rather than internal details. Hides implementation and reduces complexity. Easier to extend and maintain. Encourages good design and loose coupling. It's about \"what\", not \"how\".\n\n**Real-world analogy:** when you use an ATM, you think about: withdraw cash, check balance, transfer money. You don't need to know how it connects to the bank, validates your card, or processes the transaction. That's abstraction.\n\n**Key points:** abstraction helps manage complexity; an abstract class provides partial abstraction; an interface provides 100% abstraction (traditionally); we program to the abstraction, not the implementation; changes in implementation do not affect the client code. Depend on abstractions, not on concretions.\n\n**Important notes:** an abstract class can implement interfaces. An interface cannot extend a class, but can extend multiple interfaces. A class can implement multiple interfaces. If a class doesn't implement all methods of an interface, the class must be abstract. Use abstraction to build flexible and extensible systems.\n\n**Common mistakes:** using an abstract class when an interface is more appropriate. Exposing internal details through public fields/methods. Forgetting the `@Override` annotation. Adding unnecessary methods to interfaces (keep the contract clean).\n\n**Interview tip:** given a `Shape` reference pointing to a `Circle` object — even though the reference type is `Shape`, the actual object is `Circle`, so both the inherited concrete method and the overridden abstract method resolve to `Circle`'s behavior. This is **Runtime Polymorphism** in action.\n\n**Quick summary:** Abstraction → hide details, show essential features → better design, better code, better systems. Use an abstract class for partial abstraction; use an interface for capability/contract; code to abstraction, not implementation — this makes code clean, flexible, and scalable.",
    code: "// Abstract class example\nabstract class Shape {\n    abstract double area(); // no body\n\n    void info() { // concrete method\n        System.out.println(\"This is a shape\");\n    }\n}\n\nclass Circle extends Shape {\n    double radius;\n    Circle(double r) { this.radius = r; }\n\n    @Override\n    double area() { return Math.PI * radius * radius; }\n}\n\n// Interface example (separate from the abstract class above)\ninterface Drawable {\n    void draw(); // abstract method\n    int MAX = 100; // constant\n\n    default void info() { // default method\n        System.out.println(\"Drawable\");\n    }\n}\n\nclass Sketch implements Drawable {\n    public void draw() { System.out.println(\"Circle\"); }\n}\n\n// Interview tip: runtime polymorphism\nShape s = new Circle(5);\ns.info();                      // inherited concrete method -> \"This is a shape\"\nSystem.out.println(s.area()); // overridden abstract method -> 78.53981633974483\n// Even though the reference type is Shape, the actual object is Circle.",
    image: '/java-notes/abstraction-in-java.jpg',
    imageAlt:
      'Day 29: Abstraction in Java — overview (one of the 4 pillars of OOP, achieved via abstract classes and interfaces), Abstract Class (cannot be instantiated, abstract + concrete methods, fields & constructors), Interface (completely abstract type, abstract methods, constants, default and static methods since Java 8, private methods since Java 9), Abstract Class vs Interface comparison table (keyword, methods, fields, constructors, access modifiers, inheritance, use case), why abstraction (focus on essentials, hides implementation, easier to extend, good design), an ATM real-world analogy, key points, important notes, common mistakes, an interview tip on runtime polymorphism, and a quick summary',
  },
];

// Java Records — visual note (attached to Factory Methods for Collections)
const JAVA_RECORDS_SECTIONS = [
  {
    id: 'java-records',
    title: 'Java Records',
    content:
      "A **Java Record** is a concise way to create immutable data carrier classes in Java.\n\n**Key points:**\n- **Introduced in Java 16.**\n- **Reduces boilerplate code** — no need to hand-write a constructor, accessors, `equals()`, `hashCode()`, or `toString()`.\n- **Immutable by design** — every record component is implicitly `final` once the object is constructed.\n- **Auto-generates** a canonical constructor, accessor methods (named after each component, not `getX()`), `equals()`, `hashCode()`, and `toString()`.\n\nA single line — `public record Employee(int id, String name, double salary) {}` — replaces an entire hand-written class with a constructor, three accessor methods, and correct `equals()`/`hashCode()`/`toString()` overrides.\n\n**Best for:** DTOs, API models, and simple data-holding objects — anywhere you'd otherwise write a plain data class by hand.",
    code: "public record Employee(int id, String name, double salary) {}\n\n// The compiler auto-generates the equivalent of:\n// - a canonical constructor: Employee(int id, String name, double salary)\n// - accessors: id(), name(), salary()\n// - equals(), hashCode(), and toString()\n\nEmployee e = new Employee(1, \"Asha\", 75000.0);\nSystem.out.println(e.name());  // Asha\nSystem.out.println(e);         // Employee[id=1, name=Asha, salary=75000.0]",
    image: '/java-notes/java-records.jpg',
    imageAlt:
      'Java Records visual note — a concise way to create immutable data carrier classes in Java: introduced in Java 16, reduces boilerplate code, immutable by design, auto-generates constructor/accessors/equals()/hashCode()/toString(), a public record Employee(int id, String name, double salary) {} code example, and best for DTOs, API models, and simple data-holding objects',
  },
];

// Java Sealed Classes — visual note (attached to Process API & Improvements)
const JAVA_SEALED_CLASSES_SECTIONS = [
  {
    id: 'java-sealed-classes',
    title: 'Java Sealed Classes',
    content:
      "**Sealed classes** (Java 17+) restrict inheritance for better control and safer APIs.\n\n**1. Definition:** a sealed class or interface lets you control exactly which classes can extend or implement it.\n\n**2. Why use it?**\n- Controls class hierarchies.\n- Improves maintainability.\n- Works great with pattern matching.\n\n**3. Example:** a `sealed class Vehicle permits Car, Bike {}` declares only `Car` and `Bike` as allowed subclasses — any other class trying to extend `Vehicle` fails to compile.\n\n**Note:** only permitted subclasses can extend a sealed class. Subclasses are usually declared `final`, `sealed`, or `non-sealed`.",
    code: "sealed class Vehicle permits Car, Bike {}\n\nfinal class Car extends Vehicle {}\n\nnon-sealed class Bike extends Vehicle {}\n\n// final       -> Car cannot be extended further\n// non-sealed  -> Bike opens the hierarchy back up, any class may extend Bike\n// sealed      -> a subclass could itself restrict its own permitted subclasses",
    image: '/java-notes/java-sealed-classes.jpg',
    imageAlt:
      'Java Sealed Classes visual note — restrict inheritance for better control and safer APIs (Java 17+): definition (a sealed class or interface controls which classes can extend or implement it), why use it (controls class hierarchies, improves maintainability, works great with pattern matching), an example (sealed class Vehicle permits Car, Bike {}; final class Car extends Vehicle {}; non-sealed class Bike extends Vehicle {}), and a note that only permitted subclasses can extend a sealed class, and subclasses are usually final, sealed, or non-sealed',
  },
];

// Spring AI Architecture — visual note (attached to Inter-Service Communication)
const SPRING_AI_SECTIONS = [
  {
    id: 'spring-ai-architecture',
    title: 'Spring AI Architecture',
    content:
      "How Spring Boot applications connect with LLMs, tools, and knowledge sources.\n\n**1. Client / User Layer** — where the user request originates: **Web App**, **REST API**, or **Chat UI**.\n\n**2. Spring Boot Application** — **Controllers / Services** receive the request, hand off to **Business Logic**, which calls out through **Enterprise Integration**; the final response flows back to the client layer.\n\n**3. Spring AI Core** — the framework's building blocks: **ChatClient** (the main entry point for model calls), **Prompt Templates** (reusable, parameterized prompts), **Advisors** and **Memory** (intercept/enrich requests and retain conversation state), **RAG / Retrieval** and **Tool Calling** (pull in context and invoke external capabilities), **Structured Output** and **Observability** (typed responses and monitoring), and the **Embedding Client** (turns text into vectors for retrieval).\n\n**4. Model Providers** — Spring AI's consistent interface works across **OpenAI**, **Anthropic**, **Gemini**, **Azure OpenAI**, **Ollama**, and **Amazon Bedrock**.\n\n**Knowledge & Vector Stores** — RAG retrieval draws from **PGVector**, **Pinecone**, **Milvus**, **Redis**, or **MongoDB Atlas**.\n\n**External Tools / Functions** — tool calling can invoke a **Database**, a **Search API**, **CRM / ERP** systems, or **Internal Services**.\n\n**Three flows tie it together:**\n- **Primary Flow (Request → Response)** — the main client-to-model round trip.\n- **RAG Flow (Retrieve → Context)** — Spring AI Core queries a vector store and gets retrieved context back.\n- **Tool Calling Flow (Invoke → Result)** — Spring AI Core invokes an external tool and gets a tool result back.\n\n**Core concepts:**\n- **Prompt Orchestration** — design, manage, and reuse prompts for consistent AI interactions.\n- **Model Abstraction** — use any model provider through a consistent Spring AI interface.\n- **Retrieval Augmentation** — ground responses with enterprise knowledge using RAG.\n- **Tool Integration** — extend AI capabilities by securely invoking external tools and services.",
    image: '/java-notes/spring-ai-architecture.jpg',
    imageAlt:
      'Spring AI Architecture visual note — how Spring Boot applications connect with LLMs, tools, and knowledge sources. 1. Client / User Layer (Web App, REST API, Chat UI) sends a User Request to 2. Spring Boot Application (Controllers/Services → Business Logic → Enterprise Integration), which calls 3. Spring AI Core (ChatClient, Prompt Templates, Advisors, Memory, RAG/Retrieval, Tool Calling, Structured Output, Observability, Embedding Client), which connects to 4. Model Providers (OpenAI, Anthropic, Gemini, Azure OpenAI, Ollama, Amazon Bedrock), Knowledge & Vector Stores (PGVector, Pinecone, Milvus, Redis, MongoDB Atlas) for RAG retrieve/context, and External Tools/Functions (Database, Search API, CRM/ERP, Internal Services) for tool call/result; three flow types (Primary Flow, RAG Flow, Tool Calling Flow); and four core concepts (Prompt Orchestration, Model Abstraction, Retrieval Augmentation, Tool Integration)',
  },
  {
    id: 'retrofitting-spring-boot-with-spring-ai',
    title: 'Retrofitting Spring Boot with Spring AI',
    content:
      "Retrofitting an existing Enterprise Java application with GenAI is simpler than most teams think — you don't need to rewrite the domain layer or stand up a separate Python sidecar. With Spring AI, an existing production Spring Boot service can become an intelligent AI agent with zero architecture rewrites.\n\n**The architecture:**\n- Your existing application calls into a **Spring Boot Microservice (Java)** — sending a **Request** and receiving a **Response**, unchanged.\n- The Spring Boot Microservice hands off to **Spring AI**, built from three blocks: **Tool Calling** (expose ERP functions as AI tools), **ChatClient** (a conversational interface for AI interactions), and **AI Orchestration** (prompt management & response handling).\n- Spring AI makes **Tool Calls** out to the **Enterprise ERP System** (SAP / Oracle / Dynamics / legacy systems) — covering Orders, Inventory, Customers, Invoices, Reports, and more — and gets an **ERP Response** back.\n- Spring AI also runs **Semantic Search** against a **Vector Database** (documents & knowledge embeddings) — covering Product Docs, Policies, FAQs, Manuals, Knowledge Base, and more — and gets **Relevant Context** back.\n- Spring AI calls an **LLM / Foundation Model** (OpenAI, Azure OpenAI, or a local LLM) to generate the actual response, combining the ERP response and the retrieved context.\n- Green = Application Flow (Spring Boot ↔ Spring AI); Blue = AI / Data Flow (Spring AI ↔ ERP, Vector DB, LLM).\n\n**The 4-step blueprint to retrofit an existing Spring Boot service:**\n\n1. **Add the Spring AI starter** — leave your existing `pom.xml` untouched; just add the Spring AI BOM and your provider's starter (OpenAI, Ollama, Bedrock).\n2. Expose production logic with `@Tool` — no need to duplicate business rules; annotate your existing `@Service` methods with `@Tool`, and Spring AI automatically exposes them to the LLM.\n3. Orchestrate logic via the fluent `ChatClient` — inject `ChatClient` and bind your existing Spring services directly into the execution prompt with `.tools(...)`.\n4. **Maintain enterprise type safety** — Java `record` types automatically convert conversational model responses into strongly-typed DTOs (zero custom JSON parsers), and you can switch model providers (OpenAI → Anthropic → local Ollama) with a 2-line config change in `application.yml`, without touching Java code.\n\n**Why it matters:**\n- **Seamless Integration** — enhance existing Spring Boot apps without rewriting them.\n- **Intelligent Automation** — use AI to understand and orchestrate ERP operations.\n- **Context-Aware Responses** — combine enterprise data with AI for better answers.\n- **Secure & Enterprise-Ready** — leverage existing security, governance & compliance.\n- **Scalable Architecture** — built on the Spring ecosystem for cloud-native scale.",
    code:
      "<!-- 1. Add the Spring AI starter (pom.xml stays otherwise untouched) -->\n<dependency>\n    <groupId>org.springframework.ai</groupId>\n    <artifactId>spring-ai-openai-spring-boot-starter</artifactId>\n</dependency>\n\n// 2. Expose production logic with @Tool\n@Service\npublic class WarehouseService {\n    @Tool(description = \"Check real-time stock levels across warehouses\")\n    public StockReport checkStock(String sku) {\n        return inventoryRepo.findBySku(sku); // Existing ERP call\n    }\n}\n\n// 3. Orchestrate logic via the fluent ChatClient\n@RestController\npublic class SCMController {\n    @PostMapping(\"/query\")\n    public ActionPlan execute(@RequestBody String userPrompt) {\n        return chatClient.prompt(userPrompt)\n            .tools(warehouseService) // Binds existing Spring bean\n            .call()\n            .entity(ActionPlan.class); // Strongly-typed POJO mapping\n    }\n}",
    image: '/java-notes/retrofitting-spring-boot-with-spring-ai.jpg',
    imageAlt:
      'Retrofitting Spring Boot with Spring AI — an intelligent enterprise integration architecture. Your Existing Application calls a Spring Boot Microservice (Java) with a Request/Response flow, which hands off to Spring AI (Tool Calling — expose ERP functions as AI tools, ChatClient — conversational interface for AI interactions, AI Orchestration — prompt management & response handling). Spring AI makes Tool Calls to an Enterprise ERP System (SAP/Oracle/Dynamics/legacy systems: Orders, Inventory, Customers, Invoices, Reports) and gets an ERP Response back; it also runs Semantic Search against a Vector Database (documents & knowledge embeddings: Product Docs, Policies, FAQs, Manuals, Knowledge Base) and gets Relevant Context back; and it calls an LLM/Foundation Model (OpenAI, Azure OpenAI, Local LLM). A legend distinguishes green Application Flow from blue AI/Data Flow, plus five benefits (Seamless Integration, Intelligent Automation, Context-Aware Responses, Secure & Enterprise-Ready, Scalable Architecture) and a Tech Stack panel (Spring Boot, Spring AI).',
  },
];

// Circuit Breaker Explained — System Design Series Day 25 (attached to Resilience Patterns)
const CIRCUIT_BREAKER_SECTIONS = [
  {
    id: 'circuit-breaker-explained',
    title: 'Circuit Breaker Explained',
    content:
      "Stop cascading failures. Protect your system.\n\n**The Problem: Cascading Failure** — when a service fails, everything else starts failing too: **Payment Service Down → Requests Keep Coming → Timeouts Increase → Threads Get Blocked → Retries Multiply → System-Wide Outage.** One failure → system-wide outage.\n\n**The Solution: Circuit Breaker** — when failures cross a threshold, the circuit opens and stops the calls. Think of it as the circuit breaker in your home: if there's a dangerous fault, it cuts the connection to protect the entire house. Same idea in distributed systems.\n\n**How does it work? Three states:**\n1. **CLOSED (Healthy)** — everything is working fine, requests flow normally (Request → Service → Success). The circuit monitors failures.\n2. **OPEN (Unhealthy)** — too many failures detected, the circuit opens (Request → Circuit Breaker → BLOCKED). Requests don't reach the failing service — fail fast and protect your system, using a fallback response, cached data, try-again-later, or fail-fast.\n3. **HALF-OPEN (Recovering)** — after a timeout, the circuit allows a test request (Request → Circuit Breaker → Service). If the test succeeds, close the circuit; if it fails, open the circuit again.\n\n**The complete flow:** an incoming request checks — is the circuit OPEN? If **YES**, fail fast (don't call the service) and update the circuit state. If **NO**, call the service, record success/failure, and update the circuit state.\n\n**Real-world analogy — power grid example:** normal flow: electricity flows to the whole city. Fault detected: a fault occurs in one part of the system. Circuit breaker trips: the faulty section is isolated, and the rest of the city keeps running. Isolate the problem, protect everything else.\n\n**Common mistakes:** setting the failure threshold too low, setting the timeout too high, retrying aggressively while the circuit is open, and assuming the circuit breaker fixes the underlying issue — a circuit breaker contains failures, it doesn't repair them.\n\n**Key takeaway:** retries help with temporary failures; circuit breakers prevent repeated calls to unhealthy services — retry with backoff → still failing? open the circuit → stop hammering the service.\n\n**Rule of thumb:** one service is failing? Don't keep calling it blindly. Fail fast, protect your resources, let the unhealthy service recover, and isolate failures before they become outages.\n\n**Benefits:** prevents cascading failures, protects system resources, improves system stability, better user experience, allows failing services time to recover, and is essential for microservices and external calls.\n\n**Remember:** a resilient system doesn't avoid failures. It limits the damage they can cause.",
    image: '/java-notes/circuit-breaker-explained.jpg',
    imageAlt:
      'Day 25 System Design Series — Circuit Breaker Explained: the problem (cascading failure — one failure leads to system-wide outage), the solution (circuit breaker opens when failures cross a threshold, home circuit-breaker analogy), the three states (CLOSED/Healthy, OPEN/Unhealthy with blocked requests and fallback/cached-data/fail-fast, HALF-OPEN/Recovering with a test request), the complete flow (is circuit open? fail fast vs call the service, update circuit state), a real-world power-grid analogy (normal flow, fault detected, circuit breaker trips and isolates the faulty section), common mistakes, key takeaway, rule of thumb, benefits, and the reminder that a resilient system limits damage rather than avoiding failures',
  },
];

// Deep Copy vs Shallow Copy — 8-page visual note (attached to OOP — Classes & Objects)
const DEEP_SHALLOW_COPY_SECTIONS = [
  {
    id: 'deep-vs-shallow-core-model',
    title: 'Deep Copy vs Shallow Copy — Core Mental Model',
    content:
      "A variable of an object type stores a **reference, not the object itself**. Assignment copies the reference value, so both variables point to the **same object**.\n\n**Shallow copy** creates a new outer (top-level) object but keeps references to the nested mutable objects. It is faster and cheaper than deep copying; changes to shared nested state can affect both copies. Useful when shared state is intentional or the nested data is immutable.\n\n**Deep copy** creates a new top-level object **and** new nested mutable objects, so mutating the copy does not affect the original. It uses more CPU and memory and must handle cycles, shared identity and large graphs. Best for ownership boundaries, snapshots and independent processing.\n\n**Visual reference graph** — the original user and a shallow copy both point to the same `Address A1` (`city = \"Delhi\"`), while a deep copy owns its own `Address A2`. A1 is shared by the original and the shallow copy; A2 belongs only to the deep copy.\n\n**Deep is a domain decision** — do not blindly clone an entire object graph. Sockets, database sessions, thread pools, locks and Spring services should **not** be deep-copied. Preserve shared identity only when the domain requires it, and remember immutable values such as `String` can normally be shared safely.\n\n**Key takeaway:** assignment copies a reference; a real copy requires creating another object. The full 8-page note is available as a [downloadable PDF](/java-notes/deep-copy-vs-shallow-copy.pdf).",
    code: `// Shallow copy — the nested Address is shared
User copy = new User(original.id, original.address);

// Deep copy — the nested Address is duplicated
User copy = new User(original.id, new Address(original.address));`,
    image: '/java-notes/deep-copy-vs-shallow-copy-p1.jpg',
    imageAlt:
      'Deep vs shallow copy core mental model — a variable stores a reference not the object, shallow copy shares nested mutable objects while deep copy duplicates them, a reference graph where the original and shallow copy share Address A1 (Delhi) and the deep copy owns Address A2, and the rule that deep copying is a domain decision (do not deep-copy sockets, sessions, thread pools, locks or services)',
  },
  {
    id: 'deep-vs-shallow-assignment-final',
    title: 'Assignment, Field Modification & final',
    content:
      "**Assignment creates an alias.** No second object is created — the two variables are aliases for the same mutable object, so any mutation through either is visible through the other.\n\n**A `final` reference is not immutability.** `final` stops the variable from being **reassigned**, but the referenced object can still change unless its API is immutable. `final` fields improve design, yet deep immutability also requires immutable nested state.\n\n**Shallow copy constructor** — copies the outer object but shares the nested mutable reference (`this.address = other.address`). Use only when the shared nested state is intentional or immutable.\n\n**Deep copy constructor** — copies the nested mutable state (`this.address = new Address(other.address)`), so the original stays unchanged. Copy constructors are explicit, testable and usually the safest default.\n\n**Key takeaway:** `final` protects the variable from reassignment; it does not make the referenced object immutable.",
    code: `// Assignment copies the reference (alias)
Address a = new Address("Delhi");
Address b = a;                 // reference copied
b.setCity("Mumbai");
System.out.println(a.getCity()); // Mumbai
System.out.println(a == b);      // true

// A final reference is NOT immutability
final Address address = new Address("Delhi");
address.setCity("Mumbai");         // allowed
// address = new Address("Pune");  // compile error

// Shallow copy constructor — nested object shared
class User {
    private final String name;
    private final Address address;
    User(User other) {
        this.name = other.name;        // safe: String is immutable
        this.address = other.address;  // shared mutable reference
    }
}

// Deep copy constructor — nested state copied
class User {
    private final String name;
    private final Address address;
    User(User other) {
        this.name = other.name;
        this.address = new Address(other.address);
    }
}`,
    image: '/java-notes/deep-copy-vs-shallow-copy-p2.jpg',
    imageAlt:
      'Assignment, field modification and final — assignment creates an alias (a and b point to the same Address, mutating one is visible through the other), a final reference cannot be reassigned but the object can still change, a shallow copy constructor that shares the nested Address, and a deep copy constructor that creates a new Address',
  },
  {
    id: 'deep-vs-shallow-method-arguments',
    title: 'Passing Objects as Method Arguments (Pass-by-Value)',
    content:
      "Java is **always pass-by-value** — for objects, the copied value is a reference.\n\n**Mutating the object** — the method receives its own copy of the reference, but both references still point to the same `User`, so calling a mutating method changes the shared object and the caller sees it.\n\n**Reassigning the parameter** — only the method's local parameter is reassigned; the caller still holds its original reference. This is the clearest proof that Java is not pass-by-reference.\n\n**Mutable collection argument** — passing a `List` shares the list object, so `roles.add(\"ADMIN\")` inside the method is visible to the caller.\n\n**Copy at the boundary** — when a method needs ownership, take a defensive local copy (for example deep-copy each element) and mutate only the local working copy.\n\n**Production-safe API design** — prefer immutable request objects, document whether a method mutates its arguments, return a new result instead of modifying input when practical, avoid automatic copying on performance-critical paths (define ownership clearly), and never use a copy to hide unclear responsibilities.\n\n**Key takeaway:** mutation through the parameter is visible; reassigning the parameter is not.",
    code: `// Mutating the object — the caller sees the change
static void rename(User user) {
    user.setName("Aisha");
}
User original = new User("Sara");
rename(original);
System.out.println(original.getName()); // Aisha

// Reassigning the parameter — the caller is unchanged
static void replace(User user) {
    user = new User("Aisha");
}
replace(original);
System.out.println(original.getName()); // Sara

// Mutable collection argument — the list is shared
static void addRole(List<String> roles) {
    roles.add("ADMIN");
}

// Copy at the boundary — take ownership
static Result process(List<Order> input) {
    List<Order> working = input.stream()
        .map(Order::new) // deep copy each element
        .toList();
    return calculate(working);
}`,
    image: '/java-notes/deep-copy-vs-shallow-copy-p3.jpg',
    imageAlt:
      'Passing objects as method arguments — Java is pass-by-value so mutating the object through a parameter is visible to the caller (rename sets the name), reassigning the parameter is not (replace does not change the caller), a shared mutable List argument, taking a defensive copy at the boundary, and production-safe API design rules',
  },
  {
    id: 'deep-vs-shallow-return-values',
    title: 'Return Values & Defensive Copying',
    content:
      "**Leaking internal state** — an unsafe getter that returns the internal list (`return rows;`) lets the caller add, remove or reorder internal data, so `report.getRows().clear()` destroys internal state. This breaks encapsulation and may violate invariants.\n\n**Returning an immutable snapshot** — a safer getter maps to an immutable DTO and returns an unmodifiable list. The list cannot be structurally modified, and the mapped values should also be immutable. Snapshot creation has a cost — measure it on hot paths.\n\n**Arrays require a defensive copy** — copy on input **and** output with `Arrays.copyOf(...)` so the internal array is never handed out. For primitive arrays, copying duplicates the values and isolates the storage.\n\n**View vs copy vs deep copy:**\n- `Collections.unmodifiableList(x)` — a **view** of x; elements **shared**.\n- `new ArrayList<>(x)` — a **new list**; elements **shared**.\n- `List.copyOf(x)` — an **unmodifiable copy**; elements **shared** (may reuse an existing immutable list; rejects null elements).\n- `x.stream().map(Foo::new).toList()` — a **new list**; elements **copied**.\n\n**Key takeaway:** returning a mutable field transfers mutation power unless you copy or expose an immutable abstraction.",
    code: `// Unsafe getter — leaks internal state
class Report {
    private final List<Row> rows = new ArrayList<>();
    List<Row> getRows() {
        return rows; // caller gets the internal list
    }
}
report.getRows().clear(); // internal state destroyed

// Safer getter — return an immutable snapshot
List<RowView> getRows() {
    return rows.stream()
        .map(RowView::from) // immutable DTO snapshot
        .toList();          // unmodifiable list
}

// Arrays — copy on input AND output
class Secret {
    private final byte[] value;
    Secret(byte[] value) {
        this.value = Arrays.copyOf(value, value.length);
    }
    byte[] value() {
        return Arrays.copyOf(value, value.length);
    }
}`,
    image: '/java-notes/deep-copy-vs-shallow-copy-p4.jpg',
    imageAlt:
      'Return values and defensive copying — an unsafe getter that returns the internal list lets callers destroy state, a safer getter returns an immutable DTO snapshot, arrays need a defensive copy on input and output with Arrays.copyOf, and a comparison of unmodifiableList (view), new ArrayList (new list, shared elements), List.copyOf (unmodifiable copy, shared elements) and stream map new (copied elements)',
  },
  {
    id: 'deep-vs-shallow-arrays-collections-maps',
    title: 'Arrays, Collections & Maps',
    content:
      "The container and its elements have **separate copy semantics** — a new collection does not automatically mean new element objects.\n\n**Primitive array** — `Arrays.copyOf` gives separate storage and primitive values are copied, so `b[0] = 99` does not change `a[0]`.\n\n**Object array** — the array object is new, but each element reference is shallow-copied, so `b[0].setName(\"B\")` is visible through `a[0]`.\n\n**List copy options** — `new ArrayList<>(original)` and `List.copyOf(original)` copy the **structure** but share elements; only `original.stream().map(User::new).toList()` copies the `User` elements.\n\n**Map copying** — `new HashMap<>(original)` is shallow. To copy values, rebuild the map with `Collectors.toMap`. Immutable `String` keys can be shared while mutable values are explicitly copied.\n\n**Concurrency collection warning** — `CopyOnWriteArrayList` copies its internal array on writes but does not deep-copy the elements; `ConcurrentHashMap` provides thread-safe operations, yet stored mutable values can still be changed unsafely. A collection snapshot is stable only if its elements are immutable or independently copied. For concurrent workflows, immutable messages and versioned snapshots are easier to reason about.\n\n**Key takeaway:** a new collection does not automatically mean new element objects.",
    code: `// Primitive array — values are copied
int[] a = {1, 2, 3};
int[] b = Arrays.copyOf(a, a.length);
b[0] = 99;
System.out.println(a[0]); // 1

// Object array — elements are shared
User[] a = { new User("A") };
User[] b = Arrays.copyOf(a, a.length);
b[0].setName("B");
System.out.println(a[0].getName()); // B

// List copy options
List<User> shallow = new ArrayList<>(original);        // elements shared
List<User> immutableStructure = List.copyOf(original); // elements shared
List<User> deep = original.stream()
    .map(User::new)
    .toList();                                         // elements copied

// Map — copy the values explicitly
Map<String, User> deepValues = original.entrySet()
    .stream()
    .collect(Collectors.toMap(
        Map.Entry::getKey,
        e -> new User(e.getValue())
    ));`,
    image: '/java-notes/deep-copy-vs-shallow-copy-p5.jpg',
    imageAlt:
      'Arrays, collections and maps copy semantics — a primitive array copy has separate values, an object array copy shares element references, list copy options (new ArrayList and List.copyOf share elements while stream map new copies them), map copying that shares immutable String keys but copies mutable values, and a concurrency warning that CopyOnWriteArrayList and ConcurrentHashMap do not deep-copy elements',
  },
  {
    id: 'deep-vs-shallow-copy-techniques',
    title: 'Copy Techniques: What to Use in Production',
    content:
      "Explicit code is usually safer than generic graph cloning.\n\n**Copy constructor / factory** — explicit and type-safe, lets you choose deep vs shared fields, can reset IDs, versions or audit fields, and is easy to unit-test and review (`Order copy = Order.copyOf(original)`). This is the **recommended default**.\n\n**Builder / wither** — good for immutable objects and makes changed fields visible at call sites, but nested mutable values still need explicit copying (Lombok `toBuilder()` is shallow unless you replace nested fields).\n\n**Records** — record components are `final`, but referenced objects may still be mutable, so a record is **shallowly** immutable, not automatically deeply immutable. Use immutable components or copy mutable inputs in the canonical constructor.\n\n**`Object.clone()`** — performs a field-by-field **shallow** copy, requires `Cloneable` and awkward exception handling, does not call constructors, and makes it easy to forget nested mutable state. Usually avoid it in new production code.\n\n**Serialization / JSON round trip** — convenient for prototypes or rare operations, but slower and allocation-heavy, can lose subtype, transient, identity or precision information, and Java serialization has security and versioning concerns. Do not use it as the default deep-copy strategy.\n\n**Generated mapping** — MapStruct can generate explicit field mappings at compile time (Entity to DTO, API snapshots, copy boundaries). Nested mappings must still be configured deliberately, and business rules and database calls should remain outside the mapper.\n\n**Key takeaway:** prefer the smallest explicit copy that communicates ownership and preserves invariants.",
    code: `// Copy constructor / factory (recommended)
Order copy = Order.copyOf(original);

// Builder / wither
Order revised = original.toBuilder()
    .status(APPROVED)
    .build();

// Record — shallowly immutable
record Team(List<User> members) { }
// members can still reference a mutable list`,
    image: '/java-notes/deep-copy-vs-shallow-copy-p6.jpg',
    imageAlt:
      'Copy techniques for production — copy constructor or factory (recommended, explicit and type-safe), builder or wither for immutable objects, records are only shallowly immutable, Object.clone() is a shallow copy to usually avoid, serialization or JSON round trip should not be the default deep copy, and generated mapping with MapStruct for explicit field mappings',
  },
  {
    id: 'deep-vs-shallow-production-scenarios',
    title: 'Production Scenarios & Recommended Choices',
    content:
      "Where accidental sharing causes real defects — copy at ownership boundaries, not automatically at every method call.\n\n- **API request input** — use an immutable DTO or validated defensive copy; do not let controller input mutate domain state directly.\n- **API response** — return an immutable response DTO snapshot; returning entities can leak lazy proxies and internal fields.\n- **Cache value** — store an immutable value or deep snapshot; caller mutation can corrupt later cache hits.\n- **Async task / event** — publish an immutable message or copied payload; the publisher and consumer may run after the source changes.\n- **JPA / Hibernate entity** — use an explicit DTO or factory and reset `id`/`version`; `clone` may copy identity, proxies, cycles and lazy associations.\n- **Audit / history** — store an immutable version snapshot; keep only the required state, since large graphs are expensive.\n- **Concurrent algorithm** — give each worker a per-worker copy or an immutable shared input; shallow nested state can create race conditions.\n\n**Worked examples** — cache immutable DTOs, not mutable entities; publish a snapshot that cannot change later; map managed entities to purpose-built copies.\n\n**Key takeaway:** copy at ownership boundaries — not automatically at every method call.",
    image: '/java-notes/deep-copy-vs-shallow-copy-p7.jpg',
    imageAlt:
      'Production scenarios and recommended copy choices — a table mapping scenarios (API request input, API response, cache value, async task or event, JPA/Hibernate entity, audit/history, concurrent algorithm) to recommended approaches (immutable DTO, snapshot, per-worker copy) and production cautions, plus cache, event and ORM examples',
  },
  {
    id: 'deep-vs-shallow-decision-tests-interview',
    title: 'Decision Guide, Tests & Interview Revision',
    content:
      "**Decision guide** — Will the receiver mutate the object? If not, prefer immutable sharing. Must mutations remain independent? Copy the mutable state inside that ownership boundary. Is the graph large or cyclic? Avoid generic deep cloning and design a smaller snapshot. Are IDs, versions, secrets or lazy proxies present? Use an explicit mapper or factory. Is this a hot path? Benchmark allocation rate, latency and GC impact. Can the contract state ownership instead of copying? Clear APIs often remove the need.\n\n**Unit-test the copy contract** — assert the copy is a different object and its nested objects are different, then mutate the copy and assert the original is unchanged. Also test collections, nulls, cycles and identity-sensitive relationships.\n\n**30-second interview answers:**\n- Assignment does not copy an object; it copies the reference value.\n- Java always passes arguments by value; object mutations can be visible because both references point to the same object.\n- A shallow copy duplicates the outer object but shares nested references.\n- A deep copy duplicates the mutable state required for independent ownership.\n- `List.copyOf` makes the list unmodifiable but does not deep-copy the elements.\n- `Object.clone()` is shallow by default and is usually avoided in modern production code.\n\n**Final production checklist** — copy boundary documented, mutable nested fields identified, IDs/versions/audit fields handled intentionally, collections and elements copied at the correct depth, no accidental copying of services or resources, tests proving independent mutation where required, and performance measured under realistic load.\n\n**Key takeaway:** the correct answer is not always deep copy — it is explicit ownership with tested behavior.",
    code: `// JUnit — test the copy contract
User original = sampleUser();
User copy = new User(original);

assertNotSame(original, copy);
assertNotSame(original.getAddress(), copy.getAddress());

copy.getAddress().setCity("Pune");

assertEquals("Delhi", original.getAddress().getCity());
assertEquals("Pune",  copy.getAddress().getCity());`,
    image: '/java-notes/deep-copy-vs-shallow-copy-p8.jpg',
    imageAlt:
      'Decision guide, tests and interview revision — a decision checklist for choosing copy semantics, a JUnit test asserting the copy and its nested Address are different objects and mutating the copy leaves the original unchanged, 30-second interview answers about assignment, pass-by-value, shallow vs deep copy, List.copyOf and Object.clone, and a final production checklist',
  },
];

// 15 Must-Know Design Patterns — distilled from the algomaster.io infographic
// (public/java-notes/15-must-know-design-patterns.jpg). Grouped Creational →
// Structural → Behavioral, matching the poster's numbering (1-15).
const DESIGN_PATTERNS_SECTIONS = [
  {
    id: 'design-patterns-overview',
    title: '15 Must-Know Design Patterns — Overview',
    content:
      "**Design patterns** are proven, reusable solutions to common software design problems — not code you copy-paste, but a shared vocabulary and template for solving a recurring kind of problem. The classic **Gang of Four (GoF)** patterns split into three families:\n\n- **Creational** (1-3 below) — control *how* objects get created: Singleton, Factory Method, Builder.\n- **Structural** (4-8 below) — control how objects and classes are *composed* into larger structures: Adapter, Decorator, Facade, Proxy, Composite.\n- **Behavioral** (9-15 below) — control how objects *communicate and share responsibility*: Observer, Strategy, Command, Iterator, State, Template Method, Chain of Responsibility.\n\nKnowing the name of a pattern is less important than recognizing the **problem shape** it solves — interviewers care far more about \"when would you reach for this?\" than the textbook definition.",
    image: '/java-notes/15-must-know-design-patterns.jpg',
    imageAlt:
      '15 Must-Know Design Patterns infographic (algomaster.io) — 1. Singleton (only one instance), 2. Factory Method (creates objects without specifying exact class), 3. Builder (constructs complex objects step by step), 4. Adapter (bridges incompatible interfaces), 5. Decorator (adds behavior dynamically), 6. Facade (simple interface to complex subsystems), 7. Proxy (controls access to another object), 8. Composite (treats individual objects and groups uniformly), 9. Observer (notifies multiple objects on state change), 10. Strategy (swaps algorithms at runtime), 11. Command (encapsulates a request as an object), 12. Iterator (traverses a collection without exposing internals), 13. State (changes object behavior based on its state), 14. Template Method (defines a skeleton, lets subclasses override steps), 15. Chain of Responsibility (passes requests along a chain of handlers)',
  },
  {
    id: 'singleton',
    title: '1. Singleton — Only One Instance',
    content:
      "**Category:** Creational. **Ensures only one instance of a class exists** in the entire application, and provides one global access point to it.\n\n**Real-world use:** a single shared `Runtime` object, a single database connection pool, a single application-wide logger or config object — anywhere having a *second* instance would be wasteful or actively wrong.\n\n**Watch out for:** the classic lazy-initialization version isn't thread-safe by default — two threads can both see `instance == null` and create two objects. Use double-checked locking with `volatile`, or simply an `enum` (the simplest thread-safe Singleton in Java).",
    code: "public class ConfigManager {\n    private static volatile ConfigManager instance;\n    private ConfigManager() {}\n\n    public static ConfigManager getInstance() {\n        if (instance == null) {\n            synchronized (ConfigManager.class) {\n                if (instance == null) {\n                    instance = new ConfigManager();\n                }\n            }\n        }\n        return instance;\n    }\n}\n\n// Simplest thread-safe Singleton in Java: an enum\npublic enum ConfigManagerEnum {\n    INSTANCE;\n}",
  },
  {
    id: 'factory-method',
    title: '2. Factory Method — Create Without Specifying the Class',
    content:
      "**Category:** Creational. **Creates objects without the caller specifying their exact class** — the caller asks a factory for \"a shape\" or \"a payment processor\", and the factory decides which concrete class to instantiate.\n\n**Real-world use:** `ShapeFactory.createShape(\"circle\")`, a `PaymentGatewayFactory` that returns a Stripe/PayPal/Razorpay implementation based on config, or `Calendar.getInstance()` in the JDK.\n\n**Why it matters:** the caller depends only on an interface/abstract type, never on a concrete class — new shapes/gateways can be added later without touching any calling code.",
    code: "interface Shape { void draw(); }\nclass Circle implements Shape { public void draw() { System.out.println(\"Circle\"); } }\nclass Square implements Shape { public void draw() { System.out.println(\"Square\"); } }\n\nclass ShapeFactory {\n    public static Shape createShape(String type) {\n        return switch (type) {\n            case \"circle\" -> new Circle();\n            case \"square\" -> new Square();\n            default -> throw new IllegalArgumentException(\"Unknown shape: \" + type);\n        };\n    }\n}\n\nShape shape = ShapeFactory.createShape(\"circle\"); // caller never sees `new Circle()`",
  },
  {
    id: 'builder',
    title: '3. Builder — Construct Step by Step',
    content:
      "**Category:** Creational. **Constructs a complex object step by step**, letting the caller set only the fields they care about, instead of one constructor with ten parameters (most of them optional).\n\n**Real-world use:** `StringBuilder`, `Stream.builder()`, and most HTTP client request builders. Especially valuable for objects with many optional fields, where **telescoping constructors** (`new User(id, name, email, null, null, age, null, ...)`) become unreadable.",
    code: "public class User {\n    private final String name;\n    private final int age;\n    private final String email; // optional\n\n    private User(Builder b) {\n        this.name = b.name;\n        this.age = b.age;\n        this.email = b.email;\n    }\n\n    public static class Builder {\n        private String name;\n        private int age;\n        private String email;\n\n        public Builder name(String name) { this.name = name; return this; }\n        public Builder age(int age) { this.age = age; return this; }\n        public Builder email(String email) { this.email = email; return this; }\n        public User build() { return new User(this); }\n    }\n}\n\nUser user = new User.Builder().name(\"Faisal\").age(28).build(); // email left unset",
  },
  {
    id: 'adapter',
    title: '4. Adapter — Bridge Two Incompatible Interfaces',
    content:
      "**Category:** Structural. **Bridges two incompatible interfaces** — wraps an existing class behind a new interface that the client code actually expects, without modifying either side.\n\n**Real-world use:** `Arrays.asList()` adapting an array to the `List` interface, wrapping a third-party payment SDK's `charge(cents)` method behind your own `PaymentProcessor.pay(amount)` interface, or adapting an XML-based legacy service to a JSON-based one your app expects.",
    code: "// Existing, incompatible class you can't change\nclass LegacyRoundPeg { void fitInRoundHole() { System.out.println(\"Round peg fits!\"); } }\n\n// The interface your new code expects\ninterface SquarePeg { void fitInSquareHole(); }\n\n// Adapter bridges the two\nclass PegAdapter implements SquarePeg {\n    private final LegacyRoundPeg roundPeg;\n    PegAdapter(LegacyRoundPeg roundPeg) { this.roundPeg = roundPeg; }\n\n    @Override\n    public void fitInSquareHole() {\n        roundPeg.fitInRoundHole(); // delegates to the incompatible API\n    }\n}",
  },
  {
    id: 'decorator',
    title: '5. Decorator — Add Behavior Dynamically',
    content:
      "**Category:** Structural. **Adds behavior to an individual object dynamically**, at runtime, by wrapping it in one or more decorator objects that implement the same interface — without subclassing and without touching the original class.\n\n**Real-world use:** Java's I/O classes are the textbook example — `new BufferedReader(new InputStreamReader(new FileInputStream(...)))` layers buffering and character-decoding behavior onto a raw byte stream, each layer adding one responsibility.",
    code: "interface Coffee { double cost(); }\nclass SimpleCoffee implements Coffee { public double cost() { return 2.0; } }\n\nabstract class CoffeeDecorator implements Coffee {\n    protected final Coffee wrapped;\n    CoffeeDecorator(Coffee wrapped) { this.wrapped = wrapped; }\n}\n\nclass MilkDecorator extends CoffeeDecorator {\n    MilkDecorator(Coffee c) { super(c); }\n    public double cost() { return wrapped.cost() + 0.5; }\n}\n\nclass SugarDecorator extends CoffeeDecorator {\n    SugarDecorator(Coffee c) { super(c); }\n    public double cost() { return wrapped.cost() + 0.2; }\n}\n\nCoffee order = new SugarDecorator(new MilkDecorator(new SimpleCoffee()));\nSystem.out.println(order.cost()); // 2.7 -- each layer adds its own cost",
  },
  {
    id: 'facade',
    title: '6. Facade — A Simple Interface to Complex Subsystems',
    content:
      "**Category:** Structural. **Provides one simple, unified interface** in front of a complex set of subsystems, hiding the wiring between them from the caller.\n\n**Real-world use:** a `VideoConverterFacade.convert(file, format)` method that internally coordinates a codec reader, an audio mixer, and a compressor — the caller just calls one method instead of orchestrating three subsystems themselves. Spring's `JdbcTemplate` is a facade over raw JDBC's connection/statement/result-set boilerplate.",
    code: "class UserService {}\nclass OrderService {}\nclass PaymentService {}\nclass NotificationService {}\n\n// Facade -- one simple method hides four subsystems working together\nclass CheckoutFacade {\n    private final UserService users = new UserService();\n    private final OrderService orders = new OrderService();\n    private final PaymentService payments = new PaymentService();\n    private final NotificationService notifications = new NotificationService();\n\n    public void checkout(String userId, String cartId) {\n        // validate user, create order, charge payment, send confirmation --\n        // the caller only ever calls checkout(...)\n    }\n}",
  },
  {
    id: 'proxy',
    title: '7. Proxy — Control Access to Another Object',
    content:
      "**Category:** Structural. **Controls access to another object**, standing in for the real object and adding behavior — like lazy loading, access control, caching, or logging — before or instead of forwarding the call.\n\n**Real-world use:** Spring AOP proxies wrap your `@Service` beans to add transaction management or security checks without changing your business logic; a `LazyImageProxy` that only loads a large image from disk the first time it's actually displayed.",
    code: "interface Image { void display(); }\n\nclass RealImage implements Image {\n    private final String filename;\n    RealImage(String filename) { this.filename = filename; loadFromDisk(); }\n    private void loadFromDisk() { System.out.println(\"Loading \" + filename); }\n    public void display() { System.out.println(\"Displaying \" + filename); }\n}\n\nclass ProxyImage implements Image {\n    private final String filename;\n    private RealImage realImage; // not created until needed\n    ProxyImage(String filename) { this.filename = filename; }\n\n    public void display() {\n        if (realImage == null) {\n            realImage = new RealImage(filename); // lazy load on first use\n        }\n        realImage.display();\n    }\n}",
  },
  {
    id: 'composite',
    title: '8. Composite — Treat Individuals and Groups the Same Way',
    content:
      "**Category:** Structural. **Treats individual objects and groups of objects uniformly**, by arranging them into a tree and giving both leaves and composite nodes the same interface — so client code can call the same method on a single item or an entire subtree without checking which one it has.\n\n**Real-world use:** a filesystem where a `File` and a `Folder` (containing more files/folders) both implement `getSize()`; a UI component tree where a `Panel` (containing more components) and a `Button` both implement `render()`.",
    code: "interface FileSystemNode { long getSize(); }\n\nclass File implements FileSystemNode {\n    private final long size;\n    File(long size) { this.size = size; }\n    public long getSize() { return size; }\n}\n\nclass Folder implements FileSystemNode {\n    private final List<FileSystemNode> children = new ArrayList<>();\n    void add(FileSystemNode node) { children.add(node); }\n\n    public long getSize() {\n        return children.stream().mapToLong(FileSystemNode::getSize).sum(); // recurse into subfolders\n    }\n}",
  },
  {
    id: 'observer',
    title: '9. Observer — Notify Many Objects on State Change',
    content:
      "**Category:** Behavioral. **Notifies multiple dependent objects automatically** whenever a subject's state changes, without the subject needing to know any concrete details about its observers — just that they implement a common `update()` contract.\n\n**Real-world use:** Java's own `PropertyChangeListener`, Spring's `ApplicationEventPublisher`/`@EventListener`, and any pub/sub or event-bus system. A stock-price `Ticker` notifying multiple registered `Display` widgets whenever the price changes is the textbook example.",
    code: "interface Observer { void update(double price); }\n\nclass StockTicker {\n    private final List<Observer> observers = new ArrayList<>();\n    void subscribe(Observer o) { observers.add(o); }\n\n    void setPrice(double price) {\n        for (Observer o : observers) o.update(price); // notify everyone\n    }\n}\n\nclass PriceDisplay implements Observer {\n    public void update(double price) { System.out.println(\"Price updated: \" + price); }\n}",
  },
  {
    id: 'strategy',
    title: '10. Strategy — Swap Algorithms at Runtime',
    content:
      "**Category:** Behavioral. **Swaps algorithms at runtime** by extracting each variant behind a common interface, and letting the caller plug in whichever implementation it needs — instead of one method full of `if/else` branches for every variant.\n\n**Real-world use:** a `Comparator` passed to `Collections.sort()`, a `PaymentStrategy` interface with `CreditCardPayment`/`PayPalPayment`/`UpiPayment` implementations chosen at checkout, or different compression algorithms selected by file type.",
    code: "interface PaymentStrategy { void pay(double amount); }\n\nclass CreditCardPayment implements PaymentStrategy {\n    public void pay(double amount) { System.out.println(\"Paid \" + amount + \" via credit card\"); }\n}\nclass UpiPayment implements PaymentStrategy {\n    public void pay(double amount) { System.out.println(\"Paid \" + amount + \" via UPI\"); }\n}\n\nclass Checkout {\n    private PaymentStrategy strategy;\n    void setStrategy(PaymentStrategy strategy) { this.strategy = strategy; } // swap at runtime\n    void checkout(double amount) { strategy.pay(amount); }\n}",
  },
  {
    id: 'command',
    title: '11. Command — Encapsulate a Request as an Object',
    content:
      "**Category:** Behavioral. **Encapsulates a request as an object**, so it can be passed around, queued, logged, or undone — decoupling the object that *invokes* an action (the invoker) from the object that actually *performs* it (the receiver).\n\n**Real-world use:** GUI button click handlers, a job queue where each queued item is a `Runnable`/`Command` object, and undo/redo stacks in editors — each action is an object you can store and reverse later.",
    code: "interface Command { void execute(); }\n\nclass Light {\n    void turnOn() { System.out.println(\"Light ON\"); }\n}\n\nclass TurnOnCommand implements Command {\n    private final Light light;\n    TurnOnCommand(Light light) { this.light = light; }\n    public void execute() { light.turnOn(); } // encapsulates the request\n}\n\nclass RemoteControl {\n    private Command command;\n    void setCommand(Command command) { this.command = command; }\n    void pressButton() { command.execute(); } // invoker never knows about Light directly\n}",
  },
  {
    id: 'iterator',
    title: '12. Iterator — Traverse Without Exposing Internals',
    content:
      "**Category:** Behavioral. **Traverses a collection without exposing its internal structure** (array, linked list, tree) — the client just calls `hasNext()`/`next()` and never needs to know how the elements are actually stored.\n\n**Real-world use:** Java's own `Iterator`/`Iterable` interfaces are literally this pattern — every `for (X x : collection)` loop in Java is powered by it, whether the underlying collection is an `ArrayList`, a `LinkedList`, or a custom data structure.",
    code: "class Playlist implements Iterable<String> {\n    private final String[] songs;\n    Playlist(String[] songs) { this.songs = songs; }\n\n    public Iterator<String> iterator() {\n        return new Iterator<>() {\n            private int index = 0;\n            public boolean hasNext() { return index < songs.length; }\n            public String next() { return songs[index++]; }\n        };\n    }\n}\n\nfor (String song : new Playlist(new String[]{\"A\", \"B\"})) {\n    System.out.println(song); // caller never sees the underlying array\n}",
  },
  {
    id: 'state',
    title: '13. State — Change Behavior Based on Internal State',
    content:
      "**Category:** Behavioral. **Changes an object's behavior when its internal state changes**, by delegating to a state object that implements a common interface — replacing a giant `switch` on a status field with polymorphism.\n\n**Real-world use:** an `Order` that behaves differently depending on whether it's `Idle`, `Active`, or in an `Error` state (matching the infographic's example) — a `TrafficLight` (Red/Yellow/Green) or a media player (Playing/Paused/Stopped) are classic textbook cases.",
    code: "interface OrderState { void next(OrderContext ctx); }\n\nclass IdleState implements OrderState {\n    public void next(OrderContext ctx) { System.out.println(\"Idle -> Active\"); ctx.setState(new ActiveState()); }\n}\nclass ActiveState implements OrderState {\n    public void next(OrderContext ctx) { System.out.println(\"Active -> Error\"); ctx.setState(new ErrorState()); }\n}\nclass ErrorState implements OrderState {\n    public void next(OrderContext ctx) { System.out.println(\"Order failed, no further transitions\"); }\n}\n\nclass OrderContext {\n    private OrderState state = new IdleState();\n    void setState(OrderState state) { this.state = state; }\n    void advance() { state.next(this); } // behavior changes as state changes\n}",
  },
  {
    id: 'template-method',
    title: '14. Template Method — A Skeleton with Overridable Steps',
    content:
      "**Category:** Behavioral. **Defines the skeleton of an algorithm** in a base class method, deferring one or more individual **steps** to subclasses — the overall sequence stays fixed, but subclasses customize specific parts of it.\n\n**Real-world use:** Spring's `JdbcTemplate` handles the fixed skeleton (open connection → create statement → handle exceptions → close connection) while you supply just the query-specific step; JUnit's `setUp()`/`tearDown()` lifecycle around your test method is the same idea.",
    code: "abstract class DataProcessor {\n    // Template method -- defines the fixed skeleton\n    public final void process() {\n        readData();\n        processData(); // subclasses override just this step\n        writeData();\n    }\n    private void readData() { System.out.println(\"Reading data\"); }\n    protected abstract void processData();\n    private void writeData() { System.out.println(\"Writing data\"); }\n}\n\nclass CsvProcessor extends DataProcessor {\n    protected void processData() { System.out.println(\"Processing as CSV\"); }\n}",
  },
  {
    id: 'chain-of-responsibility',
    title: '15. Chain of Responsibility — Pass Requests Along a Chain',
    content:
      "**Category:** Behavioral. **Passes a request along a chain of handler objects**, where each handler decides either to process the request itself, or to pass it on to the next handler in the chain — the sender doesn't need to know which handler will ultimately deal with it.\n\n**Real-world use:** Servlet filter chains, middleware pipelines (Express.js/Spring `HandlerInterceptor`), and support-ticket escalation (L1 → L2 → L3) all follow this exact shape — each link either handles the request or forwards it.",
    code: "abstract class Handler {\n    protected Handler next;\n    Handler setNext(Handler next) { this.next = next; return next; }\n\n    void handle(int level) {\n        if (canHandle(level)) {\n            System.out.println(getClass().getSimpleName() + \" handled level \" + level);\n        } else if (next != null) {\n            next.handle(level); // pass along the chain\n        }\n    }\n    protected abstract boolean canHandle(int level);\n}\n\nclass HandlerA extends Handler { protected boolean canHandle(int level) { return level == 1; } }\nclass HandlerB extends Handler { protected boolean canHandle(int level) { return level == 2; } }\nclass HandlerC extends Handler { protected boolean canHandle(int level) { return level == 3; } }\n\nHandler chain = new HandlerA();\nchain.setNext(new HandlerB()).setNext(new HandlerC());\nchain.handle(3); // \"HandlerC handled level 3\"",
  },
];

// Java Internals — concepts every developer should really understand (visual note)
const JAVA_INTERNALS_SECTIONS = [
  {
    id: 'hashmap-internals',
    title: 'HashMap Internals',
    content:
      "`HashMap` is based on a **Hash Table**, which internally is an **array of buckets**.\n\n**Key operations:** `put(k, v)`, `get(k)`, `remove(k)`.\n\n1. When you call `put(k, v)`:\n- Calculate the hash — `hash = hashCode(k)`.\n- Find the index — `index = (n - 1) & hash` (n = capacity).\n- If the bucket is empty, store the new node there.\n- If not, handle the collision.\n\n**2. Collision handling:**\n- **Java 8** — collisions in a bucket are stored as a **linked list**.\n- **Java 8+** — if a bucket's list grows past **8** entries, it converts to a **Red-Black Tree** for faster lookups; it reverts back to a linked list if the size drops below **6**.\n\n**3. Resize:**\n- Triggered when `size > 0.75 * capacity` (the **load factor**).\n- **Capacity doubles** (e.g. 16 → 32).\n- All existing entries are **rehashed** into the new, larger array.\n\n**Key takeaway:** a good `hashCode()` and `equals()` implementation is crucial for performance — poor hashing collapses buckets into long lists (or trees) and slows every lookup.",
    code: "Map<String, Integer> map = new HashMap<>(); // capacity 16\nmap.put(\"a\", 1); // hash(\"a\") -> bucket index\nmap.put(\"b\", 2);\nmap.get(\"a\");    // same hash -> same bucket -> found",
    image: '/java-notes/java-internals-concepts.jpg',
    imageAlt:
      'Java Internals — concepts you should really understand: an 8-panel infographic covering HashMap internals (buckets, put/get/remove, collision handling via linked list and red-black tree, resizing), why String is immutable (security, thread safety, String Pool optimization, concat creating a new heap object), heap vs stack (what each stores, size, thread sharing, speed), equals() vs hashCode() (the contract that equal objects must share a hash code), Comparable vs Comparator (natural vs custom ordering), ExecutorService (thread pool types and task flow), Thread Lifecycle / java.lang.Thread.State (NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED), and synchronization basics (synchronized keyword/method, ReentrantLock, a race-condition example without synchronization vs a correct example with it)',
  },
  {
    id: 'why-string-is-immutable',
    title: 'Why String is Immutable',
    content:
      "`String` is immutable in Java for three main reasons:\n- **Security** — e.g. passwords, file paths, and network connections passed as `String` can't be silently changed after validation.\n- **Thread safety** — an immutable object can be shared across threads with no synchronization needed.\n- **String Pool optimization** — identical literals can safely share the same object in memory.\n\n**How it works:** any operation on a `String` creates a **new object in the Heap** — the original is never modified.\n\n`concat()` creates a **new String object on the Heap**. It does **not** add the result to the **String Pool** — only string **literals** and `.intern()`-ed strings are stored in the String Pool.\n\n**Key takeaway:** immutability gives `String` safety and improves performance via caching (the String Pool).",
    code: "String s1 = \"hello\";                  // literal -> interned in the String Pool\nString s2 = s1.concat(\" world\");      // new String \"hello world\" on the Heap (NOT pooled)\n\nSystem.out.println(s1 == s2);         // false — different objects\nSystem.out.println(s1 == \"hello\");    // true  — same pooled literal",
  },
  {
    id: 'heap-vs-stack',
    title: 'Heap vs Stack',
    content:
      "Java splits runtime memory into two very different regions:\n\n**Stack:**\n- Stores **primitive types** and **references** (not the objects themselves).\n- **Fixed size**, allocated **per thread**.\n- **LIFO** (Last In, First Out).\n- **Faster access** than the heap.\n\n**Heap:**\n- Stores **objects** (all `new` allocations — dynamically allocated memory).\n- **Dynamic size**.\n- **Shared among all threads**.\n- **Slower** than the stack.\n\n**Key takeaway:** the Stack is fast and small; the Heap is flexible and large.",
    code: "int x = 10;   // x lives on the Stack\nint y = 20;   // y lives on the Stack, above x (top of stack)\n\nArrayList<Integer> list = new ArrayList<>();\n// the ArrayList object itself lives on the Heap;\n// the `list` reference that points to it lives on the Stack",
  },
  {
    id: 'equals-vs-hashcode',
    title: 'equals() vs hashCode()',
    content:
      "`equals()`\n- Compares **actual content** to check logical equality (`a.equals(b)`).\n\n`hashCode()`\n- Returns an **integer hash value**.\n- Used by hash-based collections (`HashMap`, `HashSet`).\n\n**Important contract:** if `a.equals(b)` is `true`, then `a.hashCode() == b.hashCode()` must also be `true`. The reverse isn't required — equal hash codes don't guarantee the objects are equal (a hash **collision**).\n\n**Key takeaway:** always override `equals()` and `hashCode()` together — breaking the contract makes `HashMap`/`HashSet` silently lose or duplicate entries.",
    code: "@Override\npublic boolean equals(Object o) {\n    if (this == o) return true;\n    if (!(o instanceof Student s)) return false;\n    return this.age == s.age && this.name.equals(s.name);\n}\n\n@Override\npublic int hashCode() {\n    return Objects.hash(name, age);\n}",
  },
  {
    id: 'comparable-vs-comparator',
    title: 'Comparable vs Comparator',
    content:
      "Two different ways to define **ordering** for objects:\n\n`Comparable` (natural ordering)\n- Implemented **by the class itself**.\n- Uses the `compareTo()` method.\n- Only **one** natural ordering per class.\n\n`Comparator` (custom ordering)\n- Defined in a **separate class**.\n- Uses the `compare()` method.\n- **Multiple orderings** possible for the same class.\n\n**Key takeaway:** `Comparable` = the class's default order; `Comparator` = a custom order defined from the outside, without changing the class.",
    code: "class Student implements Comparable<Student> {\n    int age;\n    public int compareTo(Student s) {\n        return this.age - s.age;\n    }\n}\n\nclass AgeComparator implements Comparator<Student> {\n    public int compare(Student s1, Student s2) {\n        return s1.age - s2.age;\n    }\n}",
  },
  {
    id: 'executorservice-explained',
    title: 'ExecutorService Explained',
    content:
      "`ExecutorService` is a framework to manage and control thread execution — instead of creating raw `Thread` objects yourself.\n\n**Why use it?**\n- **Reuse threads** instead of creating a new one per task.\n- **Better performance** through pooling.\n- **Manage the thread lifecycle** (submit, shutdown, await termination).\n\n**Common thread pool types:**\n- `newFixedThreadPool(n)` — a **fixed number** of threads.\n- `newCachedThreadPool()` — creates new threads **as needed**, reusing idle ones.\n- `newSingleThreadExecutor()` — a single worker thread.\n- `newScheduledThreadPool(n)` — for **scheduling** delayed/periodic tasks.\n\n**Flow:** Task Submit → Task Queue → Thread Pool → Execute → Complete.\n\n**Key takeaway:** `ExecutorService` helps write scalable and efficient multithreaded code by separating **task submission** from **how and when** the threads actually run them.",
    code: "ExecutorService executor = Executors.newFixedThreadPool(4);\nexecutor.submit(() -> System.out.println(\"Task running\"));\nexecutor.shutdown();",
  },
  {
    id: 'thread-lifecycle',
    title: 'Thread Lifecycle (java.lang.Thread.State)',
    content:
      "A Java thread can be in one of **six states**, defined by `java.lang.Thread.State`:\n\n- **NEW** — the thread has been created but `start()` hasn't been called yet.\n- **RUNNABLE** — ready to run **or** actually running (the JVM doesn't distinguish the two — the OS scheduler decides).\n- **BLOCKED** — waiting to acquire a **monitor lock** held by another thread.\n- **WAITING** — waiting **indefinitely** for another thread (triggered by `Object.wait()`, `Thread.join()`, `LockSupport.park()`).\n- **TIMED_WAITING** — waiting for a **specified time** (triggered by `Thread.sleep(ms)`, `Object.wait(ms)`, `LockSupport.parkNanos()`).\n- **TERMINATED** — the thread has finished running (`run()` returned).\n\n**Flow:** `NEW` --`start()`--> `RUNNABLE` --lock acquired / notified / timeout--> back to `RUNNABLE` --`run()` finishes--> `TERMINATED`. From `RUNNABLE`, a thread moves to `BLOCKED`, `WAITING`, or `TIMED_WAITING` while it waits, then returns to `RUNNABLE`.\n\n**Key takeaway:** the JVM only tracks 6 thread states — `RUNNABLE` includes both **ready-to-run** and **actually running**; which one is happening at any instant is decided by the OS scheduler.",
  },
  {
    id: 'synchronization-basics',
    title: 'Synchronization Basics',
    content:
      "**Why synchronize?** Multiple threads can access shared resources at the same time, which can cause **data inconsistency** if their reads/writes interleave.\n\n**Ways to synchronize:**\n1. `synchronized` keyword — locks an object; only one thread may access it at a time.\n2. `synchronized` method — locks the current object (`this`).\n3. `ReentrantLock` — more features than `synchronized`, including `tryLock()` and fair locking.\n\n**Without synchronization:** Thread-1 and Thread-2 both read `count = 1`, both compute `count + 1`, and both write back `count = 1` — the increment is **lost** because their read-modify-write steps interleaved (a **race condition**).\n\n**With synchronization:** Thread-1 acquires the lock, completes `count = count + 1`, releases the lock — only then does Thread-2 acquire it and do the same. The final `count = 2` is **correct**.\n\n**Key takeaway:** synchronization serializes access to shared mutable state so read-modify-write operations complete atomically, preventing race conditions.",
    code: "// Without synchronization — race condition\ncount = count + 1;   // Thread-1 and Thread-2 interleave -> lost update (wrong: count = 1)\n\n// With the synchronized keyword — correct\nsynchronized (lock) {\n    count = count + 1;   // count = 2 (correct)\n}\n\n// ReentrantLock alternative\nReentrantLock lock = new ReentrantLock();\nlock.lock();\ntry {\n    count = count + 1;\n} finally {\n    lock.unlock();\n}",
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
    id: 'spring-boot-application-annotation',
    title: 'How @SpringBootApplication Saves Hundreds of Lines',
    content:
      "`@SpringBootApplication` is a convenience annotation that combines **three** important annotations into one:\n1. `@Configuration` — marks the class as a source of bean definitions.\n2. `@EnableAutoConfiguration` — enables Spring Boot's auto-configuration.\n3. `@ComponentScan` — scans the current package and sub-packages for components.\n\nWith this **one** annotation, Spring Boot does so much behind the scenes.\n\n**Without it**, you have to do everything manually — stacking `@Configuration`, `@ComponentScan(basePackages = \"...\")`, `@EnableAutoConfiguration`, `@PropertySource(...)`, `@EnableTransactionManagement`, `@EnableWebMvc`, `@EnableJpaRepositories(...)`, and `@EntityScan(...)` on top of the class: many annotations, many lines, more to remember.\n\nWith just `@SpringBootApplication`, Spring Boot automatically configures Spring, scans components, sets up auto-configuration, configures web/JPA/transactions and more, reads `application.properties`/`.yml`, and starts the embedded server. One annotation, hundreds of lines saved.\n\n**What it enables behind the scenes:**\n- **Auto Configuration** — configures beans based on the classpath and properties.\n- **Component Scan** — automatically scans `@Component`, `@Service`, `@Repository`, `@Controller`, etc.\n- **Web Support** — configures Spring MVC, the embedded server (Tomcat), Jackson, HTTP message converters, etc.\n- **Data Access** — configures `DataSource`, JPA, Hibernate, `@Repository`, transactions, etc.\n- **Property Support** — loads `application.properties` or `application.yml` automatically.\n- **Production Ready Features** — health checks, metrics, error handling, logging, and more.\n\n**Real-world example (banking):** building a Fund Transfer API, `@SpringBootApplication` gives you out-of-the-box an embedded Tomcat server, JSON support with Jackson, database connection and JPA setup, transaction management, REST controllers and exception handling, a health check endpoint (`/actuator/health`), and externalized configuration — letting you focus on business logic, not on configuring the framework.\n\n**Common interview questions:**\n- What is `@SpringBootApplication`? A convenience annotation that combines `@Configuration`, `@EnableAutoConfiguration`, and `@ComponentScan`.\n- Is it mandatory to put the main class in the root package? Yes — it helps in scanning all sub-packages.\n- Can we use the 3 annotations separately? Yes, but it increases boilerplate code.\n- Can we customize component scanning? Yes, using `@ComponentScan(basePackages = \"...\")`.\n- Does it support XML configuration? Yes, but Spring Boot favors convention over configuration.\n\n**Key takeaways:** it's a powerful shortcut that combines 3 annotations, enables auto-configuration and component scanning, reduces boilerplate and speeds up development, and helps you focus on business logic, not configuration.\n\n**Pro tip:** keep your main application class in the root package of your project — it ensures all components in sub-packages are detected automatically (e.g. `com.bank` containing `BankApplication.java`, plus `controller`, `service`, `repository`, and `entity` sub-packages).",
    code: "// WITHOUT @SpringBootApplication -- 8-10 annotations & multiple lines\n@Configuration\n@ComponentScan(basePackages = \"com.bank\")\n@EnableAutoConfiguration\n@PropertySource(\"classpath:application.properties\")\n@EnableTransactionManagement\n@EnableWebMvc\n@EnableJpaRepositories(\"com.bank.repo\")\n@EntityScan(\"com.bank.entity\")\npublic class BankApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(BankApplication.class, args);\n    }\n}\n\n// WITH @SpringBootApplication -- 1 annotation & 3 lines\n@SpringBootApplication\npublic class BankApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(BankApplication.class, args);\n    }\n}",
    image: '/java-notes/spring-boot-application-annotation.jpg',
    imageAlt:
      'How One Spring Boot Annotation Can Save Hundreds of Lines of Code — @SpringBootApplication: the power annotation combining @Configuration, @EnableAutoConfiguration, and @ComponentScan; what happens without it (many stacked annotations, boilerplate code); with just one annotation (Spring Boot automatically configures Spring, scans components, sets up auto-configuration, configures web/JPA/transactions, reads application.properties/.yml, starts the embedded server); what it enables behind the scenes (Auto Configuration, Component Scan, Web Support, Data Access, Property Support, Production Ready Features); a real-world banking Fund Transfer API example; a code comparison without vs with (8-10 annotations & multiple lines vs 1 annotation & 3 lines); common interview questions; key takeaways; and a pro tip about keeping the main application class in the root package',
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
  {
    id: 'five-spring-boot-interview-questions',
    title: '5 Spring Boot Interview Questions Every Java Developer Should Answer',
    content:
      "Spring Boot isn't just about annotations and auto-configuration — interviewers want to know how well you understand what's happening under the hood and how you apply it in real-world systems.\n\n**Real-world analogy:** think of Spring Boot as a smart restaurant. You just tell the waiter (Spring Boot) what you want to eat (the feature). It takes care of everything in the kitchen (configuration, dependencies, setup) and serves it to you without you worrying about the process.\n\n**What happens internally:**\n- The application starts from `@SpringBootApplication`.\n- `SpringApplication.run()` bootstraps the app.\n- It scans the classpath for components (`@Component`, `@Service`, `@Repository`, `@Controller`).\n- Auto-configuration kicks in based on dependencies.\n- The embedded server (Tomcat/Jetty) starts.\n- The application context is initialized and beans are created and wired.\n\n**Real-world example (banking):** in a banking system, we can expose a REST API to fetch customer account details. Spring Boot helps us build this API quickly, securely, and make it production-ready with features like Actuator, validation, and exception handling.\n\n**Code explanation, line by line** (see the account-lookup controller below):\n- `@RestController` — tells Spring Boot this class handles REST API requests.\n- `@RequestMapping` — all APIs in this class start with `/api/accounts`.\n- `accountService` — the dependency for business logic.\n- **Constructor injection** — Spring creates the object and injects the dependency.\n- `@GetMapping` — maps HTTP GET requests.\n- `@PathVariable` — extracts the account number from the URL.\n- The controller calls the service layer to fetch data, then returns the response with HTTP 200 OK.\n\n**Common mistakes:**\n- Using `@Autowired` on fields (use constructor injection instead).\n- Not understanding `@ComponentScan` and custom package issues.\n- Hardcoding values instead of using `application.properties`.\n- Not handling exceptions properly.\n- Ignoring Actuator for monitoring and health checks.\n\n**Interview questions & answers:**\n1. What is Spring Boot? A framework to build production-ready Spring apps with minimal config.\n2. How does Spring Boot auto-configuration work? It provides default configuration based on dependencies in the classpath.\n3. What is the difference between `@Component`, `@Service`, `@Repository`, and `@Controller`? All are stereotypes; used for better readability and exception translation.\n4. How does Spring Boot handle configuration? Uses `application.properties`/`.yml` with externalized configuration.\n5. What is Actuator in Spring Boot? Provides production-ready features like health, metrics, info, etc.\n\n**5 key takeaways:** Spring Boot simplifies configuration and deployment; auto-configuration saves time, but understanding it makes you a better developer; always prefer constructor injection; use Actuator for production monitoring; real-world projects need clean structure and proper exception handling.",
    code: "@RestController // Marks this class as REST controller\n@RequestMapping(\"/api/accounts\") // Base URL for this controller\npublic class AccountController {\n\n    private final AccountService accountService;\n\n    // Constructor Injection\n    public AccountController(AccountService accountService) {\n        this.accountService = accountService;\n    }\n\n    @GetMapping(\"/{accountNumber}\") // HTTP GET endpoint\n    public ResponseEntity<AccountResponse> getAccount(\n            @PathVariable String accountNumber) {\n        AccountResponse response = accountService\n                .getAccountByNumber(accountNumber);\n        return ResponseEntity.ok(response);\n    }\n}",
    image: '/java-notes/5-spring-boot-interview-questions.jpg',
    imageAlt:
      '5 Spring Boot Interview Questions Every Java Developer Should Be Able to Answer — the hook (Spring Boot isn\'t just about annotations and auto-configuration), what is Spring Boot, a real-world restaurant analogy, what happens internally (SpringApplication.run, component scanning, auto-configuration, embedded server, application context and beans), a real-world banking example, a full REST controller code example (@RestController, @RequestMapping, constructor injection, @GetMapping, @PathVariable, ResponseEntity), a line-by-line code explanation, common mistakes (field @Autowired, @ComponentScan issues, hardcoded values, unhandled exceptions, ignoring Actuator), 5 interview questions and answers, and 5 key takeaways',
  },
  {
    id: 'ioc-container-application-context',
    title: 'The IoC Container & ApplicationContext',
    content:
      "The problem with `new`. Every Controller, Service, and Repository in a Spring Boot app arrives already built and already connected to each other — nobody calls `new` on any of them. Building everything manually would mean every class has to know how to construct all of its dependencies, and their dependencies, all the way down; every constructor signature change ripples through every caller; and testing becomes painful because you can't easily swap in a fake repository. Spring's answer: let one central system build every object once, and simply hand each class what it needs. This general idea — code declaring what it needs instead of constructing it — has a name older than Spring itself: **Inversion of Control (IoC)**. Spring didn't invent the concept; it built one of the most popular implementations of it for Java.\n\n**The IoC Container** is that one central system — it's responsible for three jobs: **creating** objects, **configuring** them, and **wiring** them together (connecting each object to the other objects it depends on). Every object it manages is called a **bean**. The container's core cycle, every time your app starts: discover which classes should become beans → create an instance of each one (in the right order) → inject each bean's required dependencies into it → hold onto every bean for the lifetime of the application.\n\n**ApplicationContext — the container in action.** \"IoC Container\" is the concept; `ApplicationContext` is the actual Java interface Spring gives you for it — the real, running object that holds every bean in your application. `ApplicationContext` is an interface; Spring Boot creates a concrete implementation of it (typically `AnnotationConfigServletWebServerApplicationContext` for a web app) the moment `SpringApplication.run()` executes. From that point on, it's the live registry of every bean in your app. `ApplicationContext` extends a simpler interface called `BeanFactory` — `BeanFactory` only knows how to create and fetch beans; `ApplicationContext` adds event handling, internationalization, and — critically for web apps — integration with the servlet environment.\n\nEvery bean is a normal Java object sitting on the Heap — nothing magical about its memory location. What's different is that `ApplicationContext` keeps a reference to each one in an internal registry (named, usually derived from the class name), so it never gets garbage collected while your app is running, and the container can disambiguate when multiple beans of a compatible type exist.\n\n**Common beginner mistake:** manually calling `context.getBean(...)` everywhere, instead of letting `@Autowired` inject dependencies for you, is a red flag called the **Service Locator anti-pattern** — it hides a class's real dependencies instead of declaring them up front.",
    code: "// Manual wiring, without Spring:\npublic class JournalService {\n    private final JournalEntryRepository repository =\n        new JournalEntryRepositoryImpl(new MongoClient(...));\n}\npublic class JournalController {\n    private final JournalService service =\n        new JournalService(new JournalEntryRepositoryImpl(new MongoClient(...)));\n}\n\n// With Spring, you rarely touch ApplicationContext directly, but you can:\nApplicationContext context = SpringApplication.run(DemoApplication.class, args);\nJournalService service = context.getBean(JournalService.class);\n// this is the exact same instance @Autowired would have given you",
  },
  {
    id: 'stereotype-annotations-componentscan-beans',
    title: 'Stereotype Annotations, @ComponentScan & Manual Bean Creation',
    content:
      "**Stereotype annotations — marking the beans.** `ApplicationContext` needs to know which of your classes it should manage. You tell it using stereotype annotations — small markers placed directly above a class. Any class annotated with `@Component` (or one of its specialized variants) becomes eligible to be turned into a bean during startup scanning; without one of these annotations, Spring simply doesn't know the class exists.\n\n- `@Component` — a generic Spring-managed bean; any general-purpose class.\n- `@Controller` — handles web requests, returns views; traditional MVC web controllers.\n- `@RestController` — `@Controller` plus `@ResponseBody` on every method; REST API controllers.\n- `@Service` — holds business logic; the Service layer.\n- `@Repository` — talks to the data store; the Repository layer, and translates database exceptions into a consistent Spring exception type.\n\nAll five annotations do the exact same core thing technically — register the class as a bean — because `@Controller`, `@Service`, and `@Repository` are themselves internally annotated with `@Component`. The different names exist purely for readability and intent.\n\n`@ComponentScan` — how Spring finds your classes. Marking a class with `@Service` is only half the story — something still has to physically look through your compiled code and find every class carrying one of these annotations. That something is `@ComponentScan`, silently included inside `@SpringBootApplication` (the one annotation every Spring Boot main class has). By default, `@ComponentScan` scans the package containing your main class, and every sub-package beneath it — using reflection to open each `.class` file and check for stereotype annotations. Anything found is registered as a bean definition. **Common beginner mistake:** placing a `@Service` or `@Repository` class in a package outside the main class's package tree is a classic bug source — Spring simply never sees it, and any attempt to `@Autowired` it fails with `NoSuchBeanDefinitionException`.\n\n`@Configuration` and `@Bean` — manual bean creation. Not everything can be marked with `@Component` — you can't add an annotation to a class from an external library, or a class that needs custom construction logic. For these cases, Spring gives you a manual escape hatch: a class marked `@Configuration` is itself treated as a special kind of component; any method inside it marked `@Bean` tells Spring \"call this method once, and register whatever it returns as a bean.\" `@Component` is for a class you own, discovered automatically via scanning, with the instance created by calling the no-arg constructor. `@Bean` is for a class from a third-party library or one that needs custom setup, explicitly declared method by method, with the instance being whatever the method body returns. Spring Boot's own auto-configuration (covered next) is built almost entirely out of `@Configuration` classes full of `@Bean` methods — the embedded Tomcat instance is itself registered as a bean this exact way.",
    code: "@SpringBootApplication // bundles @Configuration + @EnableAutoConfiguration + @ComponentScan\npublic class DemoApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(DemoApplication.class, args);\n    }\n}\n\n@Configuration\npublic class AppConfig {\n    @Bean\n    public ObjectMapper objectMapper() {\n        ObjectMapper mapper = new ObjectMapper();\n        mapper.registerModule(new JavaTimeModule());\n        return mapper; // Spring now manages this instance as a bean\n    }\n}",
  },
  {
    id: 'bean-lifecycle-singleton-autowired-secret',
    title: 'Bean Lifecycle, Singleton Scope & the Secret Behind @Autowired',
    content:
      "**The bean lifecycle.** A bean isn't just instantiated and forgotten — it moves through a defined sequence of stages, and Spring gives you hooks into several of them: **1. Instantiate** — the constructor runs. **2. Populate** — dependencies are injected (`@Autowired` fields/constructor). **3. Initialize** — `@PostConstruct` methods run, the bean is now fully ready. **4. In Use** — the bean sits in the context, ready to be injected anywhere. **5. Destroy** — `@PreDestroy` methods run as the application shuts down. Splitting \"construct\" from \"initialize\" matters because dependency injection has to finish first — you can't safely use an injected field inside a constructor if Spring hasn't set it yet; `@PostConstruct` guarantees all dependencies are already in place before your setup logic runs. **Common beginner mistake:** trying to use an `@Autowired` field inside the constructor body of the same class — field injection happens after construction, so inside the constructor that field is still `null`.\n\n**Singleton scope — one bean, many injections.** By default, every Spring bean is a **singleton** — exactly one instance is created for the entire application, and every class that needs it gets a reference to that same shared object. Ten different classes injecting the same service all get ten references pointing at one object on the Heap. Most beans are stateless (Services, Repositories, Controllers) — they don't hold per-request data as instance fields, so sharing one instance is both safe and far cheaper than constructing a fresh object on every injection. **Common beginner mistake:** storing per-request or per-user state as an instance field on a default (singleton-scoped) `@Service` or `@Controller` — since it's shared across every request and every user, this creates subtle, hard-to-reproduce data leaks between unrelated requests. Singleton isn't the only scope — `@Scope(\"prototype\")` creates a brand-new instance on every injection, and web-specific scopes like `request` and `session` tie a bean's lifetime to a single HTTP request or user session.\n\nThe secret behind `@Autowired`, finally. `@Autowired` tells Spring: \"before you finish constructing this bean, look at what type this parameter (or field) needs, find a matching bean already sitting in ApplicationContext, and pass it in.\" It's a request to the container, resolved entirely by **type** (and by name, if there's more than one match). What actually happens, step by step, when a bean is created: the container is about to construct it → it sees the constructor requires a dependency → it looks up that type in its own bean registry → the existing bean is passed straight into the constructor call. Under the hood, this uses **reflection** — the same mechanism Jackson uses to match JSON fields — Spring inspects constructor parameter types (or field types) at startup and resolves each one against its bean registry.\n\n`new` vs Spring-managed objects. Both approaches ultimately do the same fundamental thing: create an object on the Heap and store its address in a reference variable. What differs is who initiates it, when, and how many times. With `new`, your code creates it explicitly, whenever that line executes, one instance per call, you manually pass in every dependency, no built-in lifecycle hooks, and it's hard to substitute fakes without changing code. With `@Autowired`, the IoC Container creates it automatically, once during application startup, one shared instance (default singleton scope), the container resolves and injects dependencies for you, `@PostConstruct`/`@PreDestroy` are supported, and it's easy to swap beans for test doubles. Constructor injection (rather than field injection) is the officially recommended style — it makes dependencies explicit, allows fields to be `final`, and makes classes easier to unit test without starting a full Spring context.",
    code: "@Service\npublic class JournalService {\n    private final JournalEntryRepository repository;\n\n    @Autowired // optional on a single constructor since Spring 4.3+\n    public JournalService(JournalEntryRepository repository) {\n        this.repository = repository;\n    }\n\n    @PostConstruct\n    public void init() {\n        System.out.println(\"JournalService is fully wired and ready.\");\n    }\n\n    @PreDestroy\n    public void cleanup() {\n        System.out.println(\"Application shutting down -- releasing resources.\");\n    }\n}",
  },
  {
    id: 'spring-beans-bean-lifecycle-scopes',
    title: 'Spring Beans & Bean Lifecycle — The Backbone of Every Spring Application',
    content:
      "A **Spring Bean** is any object that is created, managed, and controlled by the Spring IoC Container — the bean itself is just a normal object; what makes it a bean is that Spring owns its lifecycle instead of you calling `new` yourself.\n\n**The bean lifecycle, in five steps:**\n1. **Instantiation** — the Spring container creates the bean instance.\n2. **Dependency Injection** — the container injects the required dependencies.\n3. **Initialization** — the bean is initialized using `@PostConstruct` or `InitializingBean`.\n4. **Ready for Use** — the bean is now ready to be used in the application.\n5. **Destruction** — the bean is destroyed using `@PreDestroy` or `DisposableBean`.\n\nSteps 1–4 happen during application startup; step 5 happens during application shutdown.\n\n**Bean scopes** control how many instances of a bean exist and how long each one lives:\n- **Singleton (default)** — one bean instance per Spring IoC container.\n- **Prototype** — a new bean instance is created every time it's requested.\n- **Request** — one bean instance per HTTP request.\n- **Session** — one bean instance per HTTP session.\n\nSingleton is the default scope in Spring.\n\n**How Spring manages beans:** classes annotated `@Component`, `@Service`, `@Repository`, or `@Controller` are scanned → the Spring IoC Container creates and manages beans from them → beans are injected wherever they're needed → the application runs smoothly. You just use the beans — Spring takes care of the rest.\n\n**Common annotations, at a glance:**\n- `@Component` — a generic stereotype for any Spring bean.\n- `@Service` — marks a class as a Service-layer bean.\n- `@Repository` — marks a class as a Repository (data access).\n- `@Controller` — marks a class as a Web Controller.\n- `@Bean` — declares a bean inside a `@Configuration` class.\n\n**Real-world analogy:** think of the Spring IoC Container as a restaurant manager. The manager creates the dishes (beans), adds the required ingredients (dependencies), serves them when the customer (application) needs them, and cleans up when the restaurant closes.\n\n**Why it matters:** promotes loose coupling, better code organization, easy testing and maintenance, reusability of components, and scalability in enterprise applications.\n\n**Quick revision:** a bean is an object managed by the Spring IoC Container; the lifecycle is Instantiation → Dependency Injection → Initialization → Ready → Destruction; singleton is the default scope; annotations register beans with the container; Spring handles creation, wiring, and lifecycle — you focus on business logic.\n\n**Remember:** you don't create the objects — Spring creates and manages them for you.",
    image: '/java-notes/spring-beans-and-bean-lifecycle.jpg',
    imageAlt:
      'Spring Beans & Bean Lifecycle — the backbone of every Spring application: what a Spring Bean is (an object created, managed, and controlled by the Spring IoC Container), the 5-step bean lifecycle (Instantiation, Dependency Injection, Initialization, Ready for Use, Destruction), the 4 bean scopes (Singleton default, Prototype, Request, Session), how Spring manages beans (component scanning -> IoC Container creates and manages beans -> beans injected where needed -> application runs smoothly), common annotations (@Component, @Service, @Repository, @Controller, @Bean), a restaurant-manager real-world analogy, why it matters (loose coupling, code organization, testing, reusability, scalability), and a quick-revision summary',
  },
  {
    id: 'dependency-injection-three-types',
    title: 'Dependency Injection — The 3 Types (Constructor, Setter, Field)',
    content:
      "**Dependency Injection (DI)** is a design pattern where the Spring framework provides the dependencies (objects) to a class, instead of the class creating them by itself. Inversion of Control (IoC) is what makes this possible — and it's what makes your code loosely coupled and easy to maintain.\n\n**1. Constructor Injection (recommended)** — dependencies are passed in through the constructor. Best for **mandatory dependencies**: the object simply cannot exist without them.\n\n**2. Setter Injection** — dependencies are supplied through a setter method annotated with `@Autowired`. Used for **optional dependencies** — ones the class can function without, at least initially.\n\n**3. Field Injection** — `@Autowired` is placed directly on the field, skipping the constructor and setter entirely. **Not recommended** — it makes testing difficult, since you can't easily construct the class with mock dependencies without reflection or a running Spring context.\n\n**Benefits of Dependency Injection:** loose coupling, easy to test, better maintainability, reusability of components, and manage complexity easily. The Spring IoC Container creates Bean A, Bean B, and Bean C and wires them together — you never call `new` on any of them yourself.\n\n**How Dependency Injection works in Spring, end to end:** the application (client) sends a request → the Spring IoC Container receives it → the container creates and injects the required beans → the beans are used to process the request → the response is sent back.",
    code: "// 1. Constructor Injection -- best for mandatory dependencies\n@Service\npublic class UserService { }\n\n@RestController\npublic class UserController {\n    private final UserService userService;\n\n    public UserController(UserService userService) {\n        this.userService = userService;\n    }\n}\n\n// 2. Setter Injection -- used for optional dependencies\n@RestController\npublic class UserController {\n    private UserService userService;\n\n    @Autowired\n    public void setUserService(UserService userService) {\n        this.userService = userService;\n    }\n}\n\n// 3. Field Injection -- not recommended, makes testing difficult\n@RestController\npublic class UserController {\n    @Autowired\n    private UserService userService;\n}",
    image: '/java-notes/spring-boot-di-and-bean-lifecycle.jpg',
    imageAlt:
      'Spring Boot Dependency Injection & Bean and Life Cycle of Bean — what DI is, the 3 types of dependency injection (Constructor Injection recommended and best for mandatory dependencies, Setter Injection used for optional dependencies, Field Injection not recommended because it makes testing difficult) each with a code example, benefits of dependency injection (loose coupling, easy to test, better maintainability, reusability, manage complexity), the Spring IoC Container creating and wiring Bean A/B/C, and how dependency injection works in Spring end to end (Application/Client sends a Request, the Spring IoC Container creates and injects beans, beans are used, response sent)',
  },
  {
    id: 'full-eight-step-bean-lifecycle',
    title: 'The Full 8-Step Bean Lifecycle',
    content:
      "A bean's lifecycle inside the Spring IoC container has **8 stages**, several of them optional hooks your own beans can implement:\n\n1. **Instantiate** — the Spring container creates the bean instance.\n2. **Populate Properties** — Spring sets all the properties (using setter or constructor injection).\n3. **Bean Name Aware** — if the bean implements `BeanNameAware`, its `setBeanName()` is called.\n4. **Bean Factory Aware** — if the bean implements `BeanFactoryAware`, its `setBeanFactory()` is called.\n5. **Pre-initialization** — if the bean implements `InitializingBean`, its `afterPropertiesSet()` is called; or `@PostConstruct` is called.\n6. **Bean is Ready** — the bean is ready to use and available in the context.\n7. **Post-destruction** — if the bean implements `DisposableBean`, its `destroy()` is called; or `@PreDestroy` is called.\n8. **Bean Destroyed** — the Spring container destroys the bean.\n\nSteps 3–5 (the Aware interfaces and `InitializingBean`) are less common in everyday Spring Boot code — most developers only ever touch step 5 and step 7, using the simpler `@PostConstruct`/`@PreDestroy` annotations instead of implementing the interfaces directly. Both approaches do the same job: `@PostConstruct` is executed after bean initialization, for any initialization logic; `@PreDestroy` is executed before bean destruction, for cleanup logic.\n\n**Key annotations, extended:**\n- `@Component`, `@Service`, `@Repository`, `@Controller` — mark a class as a Spring bean (generic / service layer / repository layer / MVC controller).\n- `@Autowired` — injects dependencies automatically.\n- `@Qualifier` — specifies which bean to inject when more than one candidate of the same type exists.\n- `@Value` — injects a property value (e.g. from `application.properties`) directly into a field.\n\n**Bean scope, the full set:** `singleton` (default scope, one instance per Spring container), `prototype` (a new instance every time the bean is requested), `request` (a new instance for each HTTP request), `session` (a new instance for each HTTP session), and `application` (a single instance for the entire `ServletContext` — one level broader than singleton, shared across the whole web application).\n\n**Tips:** prefer constructor injection; use `@PostConstruct` and `@PreDestroy` for initialization and cleanup; keep beans small and focused; understand bean scope as per requirement; leverage the Spring IoC container to write better code.",
    code: "@Component\npublic class DemoBean implements InitializingBean, DisposableBean {\n\n    @PostConstruct\n    void init() {\n        System.out.println(\"Bean Initialized\");\n    }\n\n    @Override\n    public void afterPropertiesSet() {\n        System.out.println(\"afterPropertiesSet() called\");\n    }\n\n    @PreDestroy\n    void cleanup() {\n        System.out.println(\"Bean Destroyed\");\n    }\n\n    @Override\n    public void destroy() {\n        System.out.println(\"destroy() called\");\n    }\n}",
  },
  {
    id: 'springapplication-run-six-stages',
    title: 'SpringApplication.run() — the 6-Stage Startup Sequence',
    content:
      "Every Spring Boot application begins with a main method that's almost suspiciously short — just one meaningful line: `SpringApplication.run(DemoApplication.class, args)`. Nothing about that line is magic — it's a regular static method that performs a well-defined, **six-stage sequence**, ending with the application ready to serve requests, typically in under 2 seconds for a small app.\n\n**Stage 1 — Creating the ApplicationContext.** The very first thing `SpringApplication.run()` does is construct an empty `ApplicationContext` — the bean registry — before it holds a single bean. Spring Boot inspects your classpath to decide which flavor of context to create: an `AnnotationConfigServletWebServerApplicationContext` for a traditional web app (if `spring-boot-starter-web` is present), a reactive equivalent if WebFlux is present, or a plain non-web application context if neither is present. This is \"convention over configuration\" in action — Spring Boot infers what kind of app this is from what's already on your classpath.\n\n**Stage 2 — Classpath scanning.** With an empty context created, Spring performs the `@ComponentScan` described earlier — but at a mechanical level, scanning reads your compiled `.class` files directly, using a library called ASM to inspect bytecode metadata without fully loading each class into the JVM (done for speed). The flow: start at the main class's package → walk every sub-package recursively → read each `.class` file's metadata for stereotype annotations → record a **bean definition** for every match, not the object itself yet. Scanning produces bean definitions, not beans — a bean definition is metadata (the class, its scope, its dependencies) describing how to build the object later; actual object construction happens in a later stage.\n\nStage 3 — Auto Configuration & `@EnableAutoConfiguration`. This is where the phrase \"it just works\" comes from. Spring Boot doesn't just scan your classes — it also configures dozens of framework-level beans for you, automatically, based on what's on your classpath. `@EnableAutoConfiguration` loads a long list of pre-written `@Configuration` classes bundled inside Spring Boot's own JARs — things like `TomcatAutoConfiguration` and `JacksonAutoConfiguration`. Each one is wrapped in conditions, and only activates if certain classes are present on your classpath and certain beans don't already exist. The `@ConditionalOnMissingBean` check is what makes auto-configuration overridable, not rigid: if you define your own `TomcatServletWebServerFactory` bean, Spring Boot's own default silently steps aside instead of conflicting with yours.\n\n**Stage 4 — Bean Registration & Dependency Injection.** By now, the context holds a complete set of bean definitions — both yours (from scanning) and Spring Boot's own (from auto-configuration). This stage is where they finally become real, live objects: Spring works through the bean definitions and instantiates each one, resolving constructor dependencies as it goes — beans with no dependencies get created first, and beans that depend on others wait until their dependencies already exist. If Bean A needs Bean B, and Bean B needs Bean A, neither can finish constructing — Spring detects this **circular dependency** and fails startup with a clear error rather than deadlocking, since failing loudly at startup (instead of allowing a half-built object into production) is a deliberate design choice.\n\n**Stage 5 — Embedded Tomcat Startup.** All beans now exist in memory, but nothing outside the JVM can talk to your application yet. One of the beans registered during auto-configuration is a `TomcatServletWebServerFactory`. Now that the context has finished building beans, it calls this factory to actually construct and start a Tomcat instance, bound to `server.port` (default `8080`), with the DispatcherServlet already registered inside it: read `server.port` and other `server.*` properties → construct a Tomcat instance and register DispatcherServlet inside it → open a socket and start listening for TCP connections → log \"Tomcat started on port 8080\". Starting the server after all beans are built and injected — not before — matters: if a request arrived while beans were still half-constructed, it could hit a Controller whose Service dependency wasn't ready yet.\n\n**Stage 6 — The Application Ready State.** The familiar Spring Boot banner and log lines end with something like `Started DemoApplication in 1.842 seconds` — a real, well-defined milestone. Once the context is fully refreshed and Tomcat is listening, Spring Boot publishes two events in sequence: `ApplicationStartedEvent` (context is ready, server is listening) and then `ApplicationReadyEvent` (the application is fully ready to service requests). Your own code can listen for either — publishing a distinct \"ready\" event gives you a safe, guaranteed point to run one-time startup tasks (warming a cache, verifying an external connection, scheduling a job) with full confidence that every bean and the server itself are completely initialized first. This is a stronger guarantee than `@PostConstruct`, which runs per-bean, potentially before the whole context and server are ready.\n\n**Real-world takeaway — debugging startup failures.** Understanding this flow matters most when your app won't start. Startup failures almost always trace back to one of three places: **bean creation** (a constructor or `@PostConstruct` method throwing an exception), **configuration conflicts** (two beans of the same type with no `@Primary`/`@Qualifier` to disambiguate, or a circular dependency), or **missing dependencies** (a required property, driver, or starter that isn't on the classpath). Reading the stack trace for which stage failed — scanning, auto-configuration, or bean wiring — tells you exactly where to look first.\n\n**Summary:** Spring Boot is a smart initializer plus auto-configuration; `ApplicationContext` is the heart of everything; and the startup flow above is the key to debugging startup issues.",
    code: "@Component\npublic class StartupListener {\n    @EventListener(ApplicationReadyEvent.class)\n    public void onReady() {\n        System.out.println(\"Application is fully ready -- safe to run startup tasks now.\");\n    }\n}\n\n// Simplified real example of an auto-configuration class from Spring Boot's own source\n@Configuration\n@ConditionalOnClass(Servlet.class)              // only if servlet API is on the classpath\n@ConditionalOnMissingBean(value = ServletWebServerFactory.class)\npublic class TomcatAutoConfiguration {\n    @Bean\n    public TomcatServletWebServerFactory tomcatFactory() {\n        return new TomcatServletWebServerFactory();\n    }\n}",
    image: '/java-notes/spring-boot-startup-process.jpg',
    imageAlt:
      'Spring Boot Application Startup Process diagram — Main Class Entry Point (application execution starts at the main class), SpringApplication.run() (invoke the run method with main class and arguments), Bootstrapping (initialize the Spring Boot application lifecycle), Application Context Creation (establish the Spring application context), Component Scanning (scan for beans and components in the project), Auto-configuration (automatically configure beans based on classpath), Dependency Injection (inject required dependencies into components), and Server Startup (launch the embedded web server)',
  },
  {
    id: 'full-startup-flow-final-mental-model',
    title: 'The Full Startup Flow & Final Mental Model',
    content:
      "**The full startup flow, end to end** — six stages, one continuous sequence, everything that happens between running `java -jar app.jar` and seeing \"Started DemoApplication\": `SpringApplication.run(DemoApplication.class, args)` → 1. Create ApplicationContext → 2. Classpath Scanning → 3. Auto Configuration → 4. Bean Registration & Dependency Injection → 5. Embedded Tomcat Starts Listening → 6. ApplicationReadyEvent Published → Application Ready, ready to serve requests.\n\n**Final mental model — how it all connects.** Three concepts, one running application: `SpringApplication.run()` drives the startup sequence, which produces two things — the beans built and wired via `@Autowired`, and the embedded Tomcat server starting to listen. Those wired beans (Controller, Service, Repository) are exactly what a real HTTP request travels through once Tomcat is listening. Nothing in this guide stands alone — each part is the mechanism underneath the next.\n\n**Key takeaways from the whole journey:**\n- Every request travels a fixed path — Tomcat, DispatcherServlet, Handler Mapping, Controller, Service, Repository, Database, and back through Jackson.\n- `@Autowired` doesn't create objects — it asks the already-running IoC Container for an existing bean, resolved by type through reflection.\n- Beans are singleton by default: one shared instance, injected everywhere it's needed.\n- `SpringApplication.run()` is a well-defined six-stage sequence, not unexplainable magic — and it's what builds the very beans `@Autowired` hands out.\n- Auto-configuration is conditional and overridable — your own beans always take priority over Spring Boot's defaults.\n- Every layer and every stage exists to isolate one responsibility — which is exactly why understanding each one in isolation makes the whole framework make sense.\n\n**Interview tip:** when asked to \"explain what happens when a Spring Boot app starts,\" walk through the six stages in order. Most candidates only mention stage 3 (auto-configuration) — naming all six is what demonstrates real depth. Similarly, a strong answer to \"walk me through what happens when a Spring Boot API receives a request\" covers the full request-lifecycle table — most candidates can only describe the middle steps (Controller → Service → Repository); being able to describe the steps before (Tomcat, DispatcherServlet, Handler Mapping) and after (Jackson serialization, response) as well is what separates \"used Spring\" from \"understands Spring.\"",
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
      "Every response carries a **status code** telling the client what happened. They fall into five classes:\n\n- **1xx** Informational · **2xx** Success · **3xx** Redirection · **4xx** Client Error · **5xx** Server Error.\n\n**2xx Success:**\n- **200 OK** — request succeeded.\n- **201 Created** — new resource made.\n- **204 No Content** — success, nothing to return.\n\n**3xx Redirect:**\n- **301 Moved Permanently** — update the URL.\n- **302 Found** — a temporary redirect.\n- **304 Not Modified** — use the cached version.\n\n**4xx Client Error:**\n- **400 Bad Request** — invalid input.\n- **401 Unauthorized** — missing or invalid auth.\n- **403 Forbidden** — auth is OK, but there's no permission.\n- **404 Not Found** — the endpoint or resource is missing.\n- **409 Conflict** — a state/version mismatch.\n- **422 Unprocessable** — validation failed.\n- **429 Too Many Requests** — rate limited.\n\n**5xx Server Error:**\n- **500 Internal Error** — the server crashed.\n- **502 Bad Gateway** — an upstream service failed.\n- **503 Service Unavailable** — overloaded or under maintenance.\n- **504 Gateway Timeout** — an upstream service was too slow.\n\n**3-second debug clues** — use the class of the code to jump straight to the right place to look:\n- **2xx** — your code is fine.\n- **3xx** — check the URL and caching.\n- **4xx** — fix the request, auth, or params.\n- **5xx** — check the server logs (and upstream services for 502/504).\n\nReturning the correct code makes your API self-documenting and easy to debug.",
    image: '/java-notes/api-status-codes-cheat-sheet.jpg',
    imageAlt:
      'API Status Codes Cheat Sheet — what they really mean: 2xx Success (200 OK, 201 Created, 204 No Content), 3xx Redirect (301 Moved Permanently, 302 Found, 304 Not Modified), 4xx Client Error (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable, 429 Too Many Requests), 5xx Server Error (500 Internal Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout), and 3-second debug clues for each class (2xx your code is fine, 3xx check URL and caching, 4xx fix request/auth/params, 5xx check server logs and upstream)',
  },
  {
    id: 'dto-pattern',
    title: 'The DTO Pattern',
    content:
      "A **DTO (Data Transfer Object)** is a design pattern for moving data between the subsystems of an application — typically between the API layer and clients.\n\nInstead of exposing your full **entity** (which may include sensitive or irrelevant fields like password hashes or internal IDs), you map it to a DTO carrying **only the fields the caller needs**. This decouples your public API from your database schema, improves security, and lets the two evolve independently.",
  },
  {
    id: 'complete-request-lifecycle',
    title: 'The Complete Request Lifecycle — Browser to Database and Back',
    content:
      "Every API call travels through the same twelve-step journey — from the browser, through layers you rarely think about, to the database and back.\n\n**1. The browser sends an HTTP request.** Before any Spring code runs, the browser packages your action into a plain-text HTTP request and sends it over TCP to your server's port (usually 8080). An HTTP request is just structured text: a method (GET, POST...), a path, headers, and optionally a body. `GET` retrieves data (no body, safe to repeat); `POST` creates or changes data (carries a body, usually JSON).\n\n**2. Embedded Tomcat — the gatekeeper.** The raw bytes have to land somewhere — in a Spring Boot app, that's an embedded Tomcat server, a full servlet container packed inside your JAR. Tomcat's job stops at the network layer: accept the TCP connection, parse the raw bytes into an `HttpServletRequest` object, and hand that object to whichever servlet is registered to handle it. Tomcat does NOT know anything about your `@Controller` classes, JSON, DTOs, or your business logic — and it does NOT talk to your database.\n\n**3. DispatcherServlet — the front controller.** Tomcat hands the parsed request to exactly one servlet: Spring's `DispatcherServlet` — arguably the single most important class in Spring MVC, since every request for every controller funnels through this one object. It implements the Front Controller pattern: instead of Tomcat needing to know about dozens of controller classes, it only needs to know about one servlet, which takes responsibility for routing the request onward. DispatcherServlet coordinates, in order: **Handler Mapping** (which controller method matches this URL and HTTP method?), **Handler Adapter** (actually invokes that method, resolving its parameters), **Exception Resolver** (catches and converts any thrown exception into an HTTP error response), and **Response Writer** (serializes the returned object back into the HTTP response).\n\n**4. Handler Mapping — finding the right method.** At startup, Spring scans every `@Controller`/`@RestController` class, reads each method's `@GetMapping`, `@PostMapping`, etc., and builds an in-memory routing table: URL pattern + HTTP method → the exact method to call. At request time, it's just a lookup in that table — not a search through your codebase on every request. Building the table once at startup is also why a broken or ambiguous mapping (two methods claiming the same URL + method) fails loudly at startup, not silently in production, throwing an `IllegalStateException`.",
    code: "// Handler Mapping's routing table (built once at startup)\n// URL Pattern           HTTP Method   Maps To\n// /api/journal           GET           JournalController.getAll()\n// /api/journal/{id}      GET           JournalController.getById()\n// /api/journal           POST          JournalController.create()",
  },
  {
    id: 'controller-service-repository-layers',
    title: 'The Controller, Service & Repository Layers',
    content:
      "5. The Controller layer & `@RequestBody`. Once Handler Mapping identifies the target method, DispatcherServlet's Handler Adapter invokes it — but first it must resolve every parameter that method asks for, including a JSON request body. A Controller's only responsibility is to speak HTTP: read what came in (path variables, query params, JSON body), call the Service layer to do the actual work, and shape what goes out. It should contain almost no business logic itself. `@RequestBody` tells Spring: take the raw JSON text sitting in the HTTP request body, and convert it into a Java object before calling my method. Without it, the parameter would just be treated as a query parameter, and the incoming JSON would be ignored entirely — a very common beginner bug: the method compiles fine, but the parameter silently arrives as `null`.\n\n**6. The Service layer — where business logic lives.** The Controller hands off to a Service. This is the layer beginners most often skip — why not just call the repository directly from the controller? The Service layer owns business rules: validation, calculations, coordinating multiple repositories, enforcing what's allowed. The Controller shouldn't know these rules; it should just trust the Service to apply them. Separating what HTTP looks like (Controller) from what the business allows (Service) from how data is stored (Repository) means you can test business rules without spinning up a web server, and swap the database without touching a single business rule. A Controller is technically allowed to call a Repository directly — Spring won't stop you. The layering is a convention, not a compiler-enforced rule; skipping it doesn't error out, it just quietly makes the codebase harder to maintain.\n\n**7. The Repository layer & the database round-trip.** The Service hands the object to a Repository — the only layer that's allowed to know how data is actually stored. You never implement a repository interface yourself: at startup, Spring Data generates a real class behind the scenes that implements `save()`, `findById()`, `findAll()`, and `deleteById()` — each one correctly typed to work with your entity and its ID type, because of the generic type parameters you supplied (e.g. `MongoRepository<JournalEntry, String>`). What happens on `repository.save(entry)`, step by step: Spring Data builds the actual query/document from your entity's fields, the underlying driver (MongoDB, JDBC...) opens a connection, data is written to disk on the database server, and the saved entity (now with a generated ID) is returned up the chain.",
    code: "@RestController\n@RequestMapping(\"/api/journal\")\npublic class JournalController {\n    private final JournalService service;\n\n    @PostMapping\n    public JournalEntry create(@RequestBody JournalEntry entry) {\n        return service.save(entry);\n    }\n}\n\n@Service\npublic class JournalService {\n    private final JournalEntryRepository repository;\n\n    public JournalEntry save(JournalEntry entry) {\n        if (entry.getTitle() == null || entry.getTitle().isBlank()) {\n            throw new IllegalArgumentException(\"Title is required\");\n        }\n        entry.setCreatedAt(Instant.now());\n        return repository.save(entry);\n    }\n}\n\npublic interface JournalEntryRepository extends MongoRepository<JournalEntry, String> { }",
  },
  {
    id: 'jackson-responsebody-full-round-trip',
    title: 'Jackson, @ResponseBody & the Full Round Trip',
    content:
      "**8. Jackson & ObjectMapper — JSON, decoded.** Every time JSON turns into a Java object (or back), a library called Jackson is doing the work — quietly, automatically, and by default without you writing a single line of conversion code. Spring doesn't parse JSON itself: Spring Boot simply includes Jackson on the classpath and wires it in as the tool responsible for HTTP message conversion. Jackson's core class is `ObjectMapper`, working in two directions: **deserialization** (JSON text → Java object) for incoming `@RequestBody` data, and **serialization** (Java object → JSON text) for outgoing responses. Jackson uses reflection to match JSON field names to your class's getters/setters (or fields) by name — a field named `title` in your class must match a JSON key named `\\\"title\\\"`, with no magic mapping beyond that match (or an explicit `@JsonProperty` override).\n\n9. `@ResponseBody` & the journey back to the browser. Your Controller method returns a plain Java object. That object now has to travel all the way back down through Tomcat and out onto the wire as JSON text — the mirror image of `@RequestBody`. `@ResponseBody` tells Spring: don't treat this return value as the name of an HTML view to render — treat it as data, and write it directly into the HTTP response body. `@RestController` applies this to every method in the class automatically, which is why REST APIs almost never write `@ResponseBody` explicitly (it equals `@Controller` + `@ResponseBody` on every method). The return trip: the Controller method returns a `JournalEntry` object → Jackson serializes it into JSON text → DispatcherServlet writes it into the `HttpServletResponse` body → Tomcat sends the raw response bytes back over the socket → the browser receives it and resolves your `fetch()` promise.\n\n**10. Putting it all together — a full round trip.** For one concrete `POST /api/journal` request: (1) the browser sends `POST /api/journal` with a JSON body; (2) embedded Tomcat accepts the connection and builds an `HttpServletRequest`; (3) DispatcherServlet receives the request and begins the dispatch process; (4) Handler Mapping matches `POST /api/journal` to `create()`; (5) Jackson deserializes the JSON body into a `JournalEntry`; (6) the Controller's `create()` calls `service.save(entry)`; (7) the Service validates the title and sets a timestamp; (8) the Repository persists the entry to the database and returns it with an ID; (9) Jackson serializes the saved entry back into JSON; (10) the browser receives the JSON response with the new ID. Remove any single layer from this chain and something breaks specifically: no Tomcat means no port ever opens; no DispatcherServlet means Tomcat has nothing to hand requests to; no Handler Mapping means every request 404s; no Jackson means your API can only speak plain text, not JSON. Each layer is load-bearing.\n\n**Common beginner mistakes:** believing the Controller is where the request \"starts\" (four steps — Tomcat, DispatcherServlet, Handler Mapping, parameter resolution — happen before your method body runs); forgetting `@RequestBody` on a POST parameter (the parameter silently arrives as `null`); putting business rules directly in the Controller (skipping the Service layer makes testing and reuse harder); assuming Spring parses JSON itself (it's Jackson, wired in by default); thinking GET requests can safely carry a body (technically possible, but GET is meant to be side-effect-free and many tools strip or ignore GET bodies); assuming a repository method is hand-written (interfaces like `MongoRepository<T, ID>` are implemented for you at startup — you never provide a class body).",
    code: "// this is roughly what Spring does internally for you\nObjectMapper mapper = new ObjectMapper();\n\n// deserialization: JSON text -> Java object\nJournalEntry entry = mapper.readValue(jsonString, JournalEntry.class);\n\n// serialization: Java object -> JSON text\nString json = mapper.writeValueAsString(entry);",
  },
];

// MapStruct with Spring Boot — 7-page cheat sheet (attached to Building REST APIs, after the DTO pattern)
const MAPSTRUCT_SECTIONS = [
  {
    id: 'mapstruct-overview-setup',
    title: 'MapStruct with Spring Boot — Overview & Quick Setup',
    content:
      "**MapStruct** is a code generator that simplifies object mapping in Java. It generates the mapping implementation at **compile time** — no reflection — so it delivers the highest performance and pairs naturally with the DTO pattern above.\n\n**Why MapStruct?** compile-time type safety, high performance (no reflection), less boilerplate code, easy to test, IDE friendly, and it works great with Spring Boot.\n\n**When to use it:** Entity ⇄ DTO mapping, Request ⇄ Response mapping, microservices and APIs, large projects (to avoid manual mapping), and complex nested object mapping.\n\n**Quick setup in Spring Boot:**\n- **1. Add the dependency** — `org.mapstruct:mapstruct`.\n- **2. Add the annotation processor** (Maven) — `mapstruct-processor` with `scope = provided`.\n- **3. Define the mapper interface** — annotate it with `@Mapper` and declare `toDto` / `toEntity` methods.\n- **4. Use it in Spring Boot** — inject the mapper into a `@Service` via the constructor.\n\nThe full 7-page cheat sheet is available as a [downloadable PDF](/java-notes/mapstruct-with-spring-boot.pdf).",
    code: `<!-- 1. Dependency -->
<dependency>
    <groupId>org.mapstruct</groupId>
    <artifactId>mapstruct</artifactId>
    <version>1.5.5.Final</version>
</dependency>

<!-- 2. Annotation processor (Maven) -->
<dependency>
    <groupId>org.mapstruct</groupId>
    <artifactId>mapstruct-processor</artifactId>
    <version>1.5.5.Final</version>
    <scope>provided</scope>
</dependency>

// 3. Enable in a mapper interface
@Mapper
public interface UserMapper {
    UserDto toDto(User user);
    User toEntity(UserDto dto);
}

// 4. Use in Spring Boot
@Service
public class UserService {
    private final UserMapper mapper;
    public UserService(UserMapper mapper) {
        this.mapper = mapper;
    }
}`,
    image: '/java-notes/mapstruct-with-spring-boot-p1.jpg',
    imageAlt:
      'MapStruct with Spring Boot cheat sheet overview — MapStruct is a compile-time code generator for object mapping (no reflection), why to use it (type safety, performance, less boilerplate, testable, IDE friendly), when to use it (Entity/DTO and Request/Response mapping, microservices, large projects, nested objects), and the four-step Spring Boot setup (dependency, annotation processor, @Mapper interface, inject into a @Service)',
  },
  {
    id: 'mapstruct-basic-mapping',
    title: 'Basic Mapping Examples',
    content:
      "- **Simple mapping** — declare `toDto` / `toEntity` and MapStruct maps fields with matching names automatically.\n- **Different field names** — `@Mapping(source = \"fullName\", target = \"name\")` maps mismatched fields.\n- **Ignore a field** — `@Mapping(target = \"password\", ignore = true)` skips a field (for example, never expose a password).\n- **Constant value** — `@Mapping(target = \"status\", constant = \"ACTIVE\")` sets a fixed value.\n- **Default expression** — `@Mapping(target = \"createdAt\", expression = \"java(java.time.LocalDateTime.now())\")` runs Java to supply a value.\n- **Nested mapping** — if an `Order` contains a `Customer`, MapStruct automatically uses the `CustomerMapper` for the nested object.\n\n**Key takeaway:** MapStruct generates the implementation at compile time — fast, type-safe and easy to maintain; use `@Mapping` for custom logic.",
    code: `// Different field names
@Mapper
public interface UserMapper {
    @Mapping(source = "fullName", target = "name")
    @Mapping(source = "emailId",  target = "email")
    UserDto toDto(User user);
}

// Ignore a field
@Mapping(target = "password", ignore = true)
UserDto toDto(User user);

// Constant value
@Mapping(target = "status", constant = "ACTIVE")
UserDto toDto(User user);

// Default expression
@Mapping(target = "createdAt",
         expression = "java(java.time.LocalDateTime.now())")
UserDto toDto(User user);`,
    image: '/java-notes/mapstruct-with-spring-boot-p2.jpg',
    imageAlt:
      'MapStruct basic mapping examples — simple mapping, mapping different field names with @Mapping source and target, ignoring a field, setting a constant value, a default expression using java(...), and nested mapping where MapStruct automatically reuses a CustomerMapper for a nested Customer object',
  },
  {
    id: 'mapstruct-advanced-mapping',
    title: 'Advanced Mapping',
    content:
      "- **Collection mapping** — declare `List<UserDto> toDtoList(List<User> users)` and MapStruct maps each element.\n- **Update an existing object (partial update)** — `@MappingTarget` updates the passed-in object instead of creating a new one.\n- **Map with a custom method** — a `default` method (for example converting `priceInCents` to a `BigDecimal price`) is used automatically.\n- **Multiple source objects** — combine two sources: `toResponse(User user, Address address)` with `@Mapping(source = \"address.city\", target = \"city\")`.\n- **Inherit configuration** — put shared mappings in a `@MapperConfig` interface and reference it with `@Mapper(config = CentralConfig.class)`.\n\n**Useful annotations:** `@Mapper` (marks the interface), `@Mapping` (custom field mapping), `@Mappings` (multiple mappings), `@MappingTarget` (update an existing object), `@Context` (pass context or services), `@MapperConfig` (reusable configuration), and `@EnumMapping` (enum strategies).",
    code: `// Collection mapping
List<UserDto> toDtoList(List<User> users);
Set<User> toEntitySet(Set<UserDto> dtos);

// Update existing object (partial update)
@Mapping(target = "id", ignore = true)
void updateUserFromDto(UserDto dto, @MappingTarget User user);

// Map with a custom default method
@Mapping(source = "priceInCents", target = "price")
ProductDto toDto(Product product);

default BigDecimal toPrice(Integer priceInCents) {
    if (priceInCents == null) return null;
    return new BigDecimal(priceInCents).divide(new BigDecimal(100));
}

// Inherit configuration
@MapperConfig
public interface CentralConfig {
    @Mapping(target = "createdAt",
             expression = "java(java.time.LocalDateTime.now())")
}

@Mapper(config = CentralConfig.class)
public interface OrderMapper {
    OrderDto toDto(Order order);
}`,
    image: '/java-notes/mapstruct-with-spring-boot-p3.jpg',
    imageAlt:
      'MapStruct advanced mapping — collection mapping of lists and sets, updating an existing object with @MappingTarget for partial updates, a custom default method to convert priceInCents to a BigDecimal, combining multiple source objects, inheriting configuration via @MapperConfig, and a list of useful annotations (@Mapper, @Mapping, @Mappings, @MappingTarget, @Context, @MapperConfig, @EnumMapping)',
  },
  {
    id: 'mapstruct-configuration',
    title: 'Configuration & Component Model',
    content:
      "- **Component model** — `@Mapper(componentModel = \"spring\")` makes the mapper a Spring bean so you can `@Autowired` it or inject it via the constructor.\n- **Injection strategy** — `injectionStrategy = InjectionStrategy.CONSTRUCTOR` controls how dependencies are injected. Options: `FIELD` (default), `CONSTRUCTOR` (recommended), `SETTER`.\n- **Unmapped target policy** — `unmappedTargetPolicy = ReportingPolicy.ERROR` **fails the build** if any target field is not mapped. Options: `IGNORE` (default), `WARN`, `ERROR`.\n- **Null value handling** — `nullValuePropertyMappingStrategy = IGNORE` means null values in the source will not overwrite target values (ideal for partial updates); `nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS` generates null checks for all source properties.\n- **Date / time format** — `@Mapping(target = \"date\", dateFormat = \"dd-MM-yyyy\")` formats dates during mapping.\n\n**Remember:** good mapping is not about magic — it's about clarity and correctness.",
    code: `@Mapper(
    componentModel = "spring",
    injectionStrategy = InjectionStrategy.CONSTRUCTOR,
    unmappedTargetPolicy = ReportingPolicy.ERROR,
    nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS
)
public interface UserMapper {

    void updateUser(UserDto dto, @MappingTarget User user);

    @Mapping(target = "date", dateFormat = "dd-MM-yyyy")
    EventDto toDto(Event event);
}`,
    image: '/java-notes/mapstruct-with-spring-boot-p4.jpg',
    imageAlt:
      'MapStruct configuration and component model — componentModel = spring to create a Spring bean, injection strategy options (FIELD default, CONSTRUCTOR recommended, SETTER), unmappedTargetPolicy options (IGNORE, WARN, ERROR) to fail the build on unmapped fields, null value handling with nullValuePropertyMappingStrategy IGNORE and nullValueCheckStrategy ALWAYS, and date/time formatting with dateFormat',
  },
  {
    id: 'mapstruct-best-practices',
    title: 'Design Patterns & Best Practices',
    content:
      "- **Layered mapping** — map through clear layers: `Entity → DTO → Response` and `Request → DTO → Entity`.\n- **Mapper composition** — reuse other mappers inside a mapper with `@Mapper(uses = {AddressMapper.class})` for modular, reusable mapping.\n- **Avoid business logic** — keep mappers simple; don't add business rules; use the service layer for logic.\n- **Keep mappers small** — split large mappers into multiple focused ones for readability and maintainability.\n- **Test your mappers** — write JUnit tests (with Mockito) that assert the mapped output.\n\n**Best-practices checklist:** use constructor injection, keep mappers focused and small, use `@MapperConfig` for common settings, enable `unmappedTargetPolicy = ERROR`, and write unit tests for critical mappings.\n\n**Common pitfalls:** adding business logic in a mapper, ignoring null handling, not testing mappers, large monolithic mappers, and forgetting to update mappings after model changes.",
    code: `// Mapper composition — reuse other mappers
@Mapper(uses = { AddressMapper.class })
public interface UserMapper {
    UserDto toDto(User user);
}

// Test your mappers (JUnit + Mockito)
@ExtendWith(MockitoExtension.class)
class UserMapperTest {

    private final UserMapper mapper =
        Mappers.getMapper(UserMapper.class);

    @Test
    void testToDto() {
        User user = new User();
        user.setId(1L);
        user.setName("John");

        UserDto dto = mapper.toDto(user);

        assertEquals("John", dto.getName());
    }
}`,
    image: '/java-notes/mapstruct-with-spring-boot-p5.jpg',
    imageAlt:
      'MapStruct design patterns and best practices — layered mapping (Entity to DTO to Response), mapper composition with uses, avoiding business logic in mappers, keeping mappers small, testing mappers with JUnit and Mockito, a best-practices checklist (constructor injection, small focused mappers, @MapperConfig, unmappedTargetPolicy ERROR, unit tests), and common pitfalls',
  },
  {
    id: 'mapstruct-real-world-example',
    title: 'Real-World Example & Spring Boot Properties',
    content:
      "**A complete User module** — entities (`User` with a nested `Address`), a `UserDto`, a Spring mapper that renames fields and flattens `address.city`, and its use in a service.\n\n**MapStruct + Spring Boot properties** — MapStruct itself has **no runtime properties**, but you can configure the compiler behavior via Maven/Gradle compiler args:\n- `mapstruct.defaultComponentModel=spring` — default Spring component model (no need to repeat `componentModel = \"spring\"`).\n- `mapstruct.unmappedTargetPolicy=ERROR` — fail the build if any target field is not mapped.\n- `mapstruct.suppressGeneratorTimestamp=true` — cleaner git diffs (no timestamp in generated files).\n\n**Key takeaway:** MapStruct + Spring Boot = clean, fast, type-safe and maintainable code — write less boilerplate and more business value.",
    code: `// Entities
@Data
class User {
    private Long id;
    private String fullName;
    private String email;
    private LocalDateTime createdAt;
    private Address address;
}
@Data
class Address {
    private String city;
    private String country;
}

// DTO
@Data
class UserDto {
    private Long id;
    private String name;
    private String emailId;
    private String city;
}

// Mapper
@Mapper(componentModel = "spring")
public interface UserMapper {
    @Mapping(source = "fullName",     target = "name")
    @Mapping(source = "email",        target = "emailId")
    @Mapping(source = "address.city", target = "city")
    UserDto toDto(User user);
}

// Usage in a service
@Service
public class UserService {
    private final UserRepository repo;
    private final UserMapper mapper;

    public UserDto getUser(Long id) {
        User user = repo.findById(id).orElseThrow();
        return mapper.toDto(user);
    }
}

<!-- Maven compiler plugin (recommended) -->
<configuration>
    <compilerArgs>
        <arg>-Amapstruct.defaultComponentModel=spring</arg>
        <arg>-Amapstruct.unmappedTargetPolicy=ERROR</arg>
        <arg>-Amapstruct.suppressGeneratorTimestamp=true</arg>
    </compilerArgs>
</configuration>`,
    image: '/java-notes/mapstruct-with-spring-boot-p6.jpg',
    imageAlt:
      'MapStruct real-world User module — User and Address entities, a UserDto, a Spring @Mapper that renames fullName to name and email to emailId and flattens address.city, usage inside a @Service that fetches an entity and returns a DTO, and the MapStruct + Spring Boot compiler properties (defaultComponentModel=spring, unmappedTargetPolicy=ERROR, suppressGeneratorTimestamp=true)',
  },
  {
    id: 'mapstruct-json-transformation',
    title: 'Sample JSON File Transformation (Jackson + MapStruct)',
    content:
      "An end-to-end JSON transformation combining **Jackson** (JSON parsing) with **MapStruct** (object mapping).\n\n**The flow:** an input JSON file is read by Jackson into a request DTO → MapStruct maps the request to a domain entity → MapStruct maps the entity to a response → Jackson writes the response back to JSON.\n\n- **Input JSON** — for example `user-input.json` with `fullName`, `email` and a nested `address`.\n- **Java types** — `record CreateUserRequest(...)`, `record AddressRequest(...)` and a `User` domain class.\n- **Mapper** — `@Mapper(componentModel = \"spring\", unmappedTargetPolicy = ReportingPolicy.ERROR)` with `toEntity(CreateUserRequest)` and `toResponse(User)`.\n- **Read, map, write** — `objectMapper.readValue(...)` → `mapper.toEntity(request)` → `mapper.toResponse(user)` → `objectMapper.writeValueAsString(response)`.\n\n**Important:** Jackson reads and writes JSON files; MapStruct maps Java objects using generated compile-time code.\n\n**Production rule:** keep parsing, mapping and business logic as separate responsibilities.",
    code: `// Java request / domain / response
record AddressRequest(String city, String country) {}
record CreateUserRequest(String fullName, String email,
                         AddressRequest address) {}
class User {
    String displayName; String email; String city; String status;
}

// MapStruct mapper
@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.ERROR)
interface UserMapper {
    @Mapping(target = "displayName", source = "fullName")
    @Mapping(target = "city",        source = "address.city")
    @Mapping(target = "status",      constant = "ACTIVE")
    User toEntity(CreateUserRequest source);

    @Mapping(target = "name",     source = "displayName")
    @Mapping(target = "location", source = "city")
    UserResponse toResponse(User source);
}

// Read, map and write (Jackson + MapStruct)
CreateUserRequest request = objectMapper.readValue(
    resource.getInputStream(), CreateUserRequest.class);

User user = mapper.toEntity(request);
UserResponse response = mapper.toResponse(user);

String result = objectMapper
    .writerWithDefaultPrettyPrinter()
    .writeValueAsString(response);

// Flow: JSON file -> Jackson DTO -> MapStruct entity
//       -> MapStruct response -> Jackson JSON`,
    image: '/java-notes/mapstruct-with-spring-boot-p7.jpg',
    imageAlt:
      'MapStruct plus Spring Boot sample JSON file transformation — an input JSON file, Java records for the request and a User domain class, a MapStruct mapper with toEntity and toResponse, and reading/mapping/writing with Jackson objectMapper, illustrating the flow JSON file to Jackson DTO to MapStruct entity to MapStruct response to Jackson JSON, with the rule to keep parsing, mapping and business logic separate',
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
    id: 'how-hibernate-works-internally',
    title: 'How Hibernate Works Internally',
    content:
      "**Hibernate** is the JPA implementation that turns your method calls into SQL. The full flow: **Application → SessionFactory → Session → Persistence Context → Dirty Checking → SQL → Database**.\n\n**The 10-step request lifecycle:**\n1. **Application starts** — reads `hibernate.cfg.xml` (or Spring Boot's `application.properties`) for DB connection and mapping config.\n2. **Open a Session** — the `SessionFactory` (built once, expensive to create) opens a lightweight `Session` per unit of work.\n3. **Begin transaction** — work happens inside a transaction boundary.\n4. **Persistence Context** — the `Session`'s first-level cache, tracking every entity it has loaded or saved in this unit of work.\n5. **Entity state management** — entities move through **transient → persistent → detached** states as the Session tracks them.\n6. **Dirty checking** — Hibernate compares each managed entity's current field values against its loaded snapshot to detect changes, without you calling `save()` again.\n7. **SQL generation** — changed entities get translated into `INSERT`/`UPDATE`/`DELETE` statements.\n8. **Flush** — the generated SQL is synchronized to the database via JDBC.\n9. **Commit transaction** — the changes become permanent.\n10. **Close Session** — all managed entities become **detached** (no longer tracked).\n\n**Key components:**\n- **SessionFactory** — creates Sessions.\n- **Session** — manages entities.\n- **Persistence Context** — the first-level cache.\n- **Dirty Checking** — detects object changes.\n- **Transaction** — ensures ACID operations.\n- **Flush** — synchronizes objects with the DB.\n- **JDBC** — executes the actual SQL.\n- **Database** — stores the data.",
    code: "Session session = sessionFactory.openSession();\nTransaction tx = session.beginTransaction();\n\nUser user = session.get(User.class, 1L); // now managed (Persistence Context)\nuser.setName(\"Updated Name\");            // no explicit save() needed\n\ntx.commit();     // dirty checking finds the change -> generates UPDATE -> flushes -> commits\nsession.close(); // user becomes detached",
    image: '/java-notes/hibernate-internal-working.jpg',
    imageAlt:
      'How Hibernate Works Internally — the 10-step request flow (Application Starts, Open a Session, Begin Transaction, Persistence Context, Entity State Management, Dirty Checking, SQL Generation, Flush, Commit Transaction, Close Session, all managed entities become Detached), a key components table (SessionFactory creates Sessions, Session manages entities, Persistence Context is the first-level cache, Dirty Checking detects object changes, Transaction ensures ACID operations, Flush synchronizes objects with DB, JDBC executes SQL, Database stores data), and the Hibernate request flow diagram from Java Application through SessionFactory, Session, Persistence Context, Dirty Checking, SQL Generator, JDBC, to Database',
  },
  {
    id: 'hibernate-architecture-explained',
    title: 'Hibernate Architecture Explained',
    content:
      "Hibernate = an ORM (Object Relational Mapping) framework — it bridges the gap between Java objects and relational databases.\n\n**Core components, at a glance:**\n- **Configuration** — reads `hibernate.cfg.xml`, loads database settings, registers entity classes, and creates the `SessionFactory`.\n- **SessionFactory** — a heavyweight object: created only once, thread-safe, holds metadata, creates `Session` objects, and maintains the second-level cache.\n- **Session** — a lightweight object: represents one database connection, performs CRUD, maintains the first-level cache, and is **not** thread-safe. Common methods: `save()`, `persist()`, `update()`, `merge()`, `delete()`, `get()`, `load()`.\n- **Transaction** — groups multiple operations into one unit: begin → insert/update/delete → commit or rollback.\n- **Hibernate Engine** — responsible for SQL generation, dirty checking, entity state management, object mapping, lazy loading, and caching.\n- **JDBC** — Hibernate never talks directly to the database; it always goes Hibernate → JDBC Driver → Database.\n\n**Hibernate caching, two levels:**\n1. **First-Level Cache** — enabled by default, session-scoped, gives faster repeated reads within the same `Session`.\n2. **Second-Level Cache** — shared across sessions; commonly backed by **Ehcache**, **Hazelcast**, or **Infinispan**.\n\n**Entity lifecycle:** `Transient` —(save)→ `Persistent` —(close)→ `Detached`; a `Persistent` entity —(delete)→ `Removed`.\n\n**Interview tips:**\n- `SessionFactory` creates `Session`s.\n- `Session` performs CRUD.\n- `Transaction` ensures consistency.\n- Hibernate converts Java objects into SQL automatically.\n\n**Remember this formula:** Java Object → Hibernate → JDBC → Database.",
    image: '/java-notes/hibernate-architecture-explained.jpg',
    imageAlt:
      'Hibernate Architecture Explained — one-page cheat sheet: Hibernate is an ORM framework bridging Java objects and relational databases; core components (Configuration reads hibernate.cfg.xml and creates SessionFactory, SessionFactory is heavyweight/thread-safe/created once and creates Sessions, Session is lightweight/per-request/not thread-safe and performs CRUD with save/persist/update/merge/delete/get/load, Transaction groups operations with begin/commit/rollback, Hibernate Engine handles SQL generation/dirty checking/entity state/lazy loading/caching, JDBC connects Hibernate to the database); Hibernate caching (First-Level Cache enabled by default and session-scoped, Second-Level Cache shared across sessions using Ehcache/Hazelcast/Infinispan); an entity lifecycle diagram (Transient to Persistent via save, Persistent to Detached via close, Persistent to Removed via delete); interview tips; the formula Java Object to Hibernate to JDBC to Database; and a right-side flow diagram from Java Application through SessionFactory, Session, Transaction, Hibernate Engine, JDBC Driver, to Relational Database',
  },
  {
    id: 'n-plus-1-query-problem',
    title: 'The N+1 Query Problem',
    content:
      "The **N+1 query problem** happens when an application makes **1 query** to fetch parent records, then **N additional queries** — one per parent — to fetch each parent's related child records.\n\n**Without optimization (N+1 queries):**\n1. `SELECT * FROM Users;` — fetch all users.\n2. `SELECT * FROM Orders WHERE user_id = 1;`\n3. `SELECT * FROM Orders WHERE user_id = 2;`\n4. `SELECT * FROM Orders WHERE user_id = 3;`\n...and so on, one query per user, up to `SELECT * FROM Orders WHERE user_id = N;`\n\n**Total queries = N + 1** (1 for the parents, N for the children).\n\n**With optimization (1 query):** a single join fetches everything at once — `SELECT Users.*, Orders.* FROM Users LEFT JOIN Orders ON Users.id = Orders.user_id;` — fetching users and their orders in a single query. **Total queries = 1.**\n\n**Example:** with **100 users**, each with orders — without optimization that's **101 queries**; with optimization, it's **1 query**.\n\n**Why it happens:**\n- Related data is loaded **lazily**.\n- When you access child data inside a loop, the application triggers a **new query for each parent** — `User 1` fanning out into a separate query for `Order 1`, `Order 2`, `Order 3`, ... `Order N`.\n\n**How to fix it:**\n- Use **JOINs** to fetch related data in a single query.\n- Fetch related data in **batches**.\n- Fetch only the **required fields** (avoid fetching unneeded data).\n- Use **caching** where appropriate.\n- **Avoid accessing related data inside loops.**\n\n**Key takeaway:** always aim to fetch what you need in as few queries as possible — it improves **performance** and **scalability**.",
    code: "// Without optimization -- N+1 queries (Hibernate lazy loading in a loop)\nList<User> users = userRepository.findAll();       // 1 query\nfor (User u : users) {\n    u.getOrders().size();                           // N queries -- one per user\n}\n\n// With optimization -- 1 query using JOIN FETCH\n@Query(\"SELECT u FROM User u LEFT JOIN FETCH u.orders\")\nList<User> findAllWithOrders();",
    image: '/java-notes/hibernate-n-plus-1-query-problem.jpg',
    imageAlt:
      'N+1 Query Problem — when an application makes 1 query to fetch parent records and N additional queries to fetch related child records; without optimization, N+1 separate SELECT queries (one per user for their orders) vs with optimization, a single LEFT JOIN query; an example with 100 users showing 101 queries without optimization vs 1 query with optimization; why it happens (lazy loading, a new query triggered per parent inside a loop); how to fix it (JOINs, batching, fetching only required fields, caching, avoiding related-data access inside loops); and the key takeaway to fetch what you need in as few queries as possible',
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
    id: 'transactional-overview',
    title: '@Transactional — Internal Working Overview',
    content:
      "Most bugs blamed on SQL are actually **transaction boundary bugs**. `@Transactional` wraps an eligible method call in a transaction boundary using **Spring AOP** — it manages begin, suspend, resume, commit, rollback, flush timing, and exception-based rollback rules. It does **NOT** rewind your Java objects automatically.\n\n**The call chain:** Caller → Spring Proxy → TransactionInterceptor → Target Method → Commit / Rollback.\n\n**What it really controls:**\n1. DB transaction lifecycle.\n2. Persistence context scope.\n3. Flush / commit / rollback timing.\n4. Propagation across proxied method calls.\n\n**What it does NOT control:**\n1. Local variable history.\n2. Object reference reassignment.\n3. In-memory state reset after rollback.\n4. Self-invoked method interception.",
  },
  {
    id: 'how-transactional-starts',
    title: 'How @Transactional Actually Starts',
    content:
      "**Preconditions** for `@Transactional` to actually apply:\n- The method call must pass through the Spring proxy.\n- Usually a **public** method on a Spring bean.\n- A `TransactionManager` must be configured.\n- The annotation can be on the class or the method.\n- **Self-invocation bypasses the advice** — calling the method from inside the same class skips the proxy entirely.\n\n**The 6-step flow:** external caller invokes the bean → the proxy resolves the transaction attributes → the `TransactionInterceptor` opens or joins a transaction → a connection + persistence context is bound to the thread → the target method executes → commit or rollback, then cleanup.\n\n**No transaction advice when:**\n- The method is `private` / `final` / `static`.\n- It's called from a constructor.\n- It's a same-class self call.\n- The bean was created manually with `new` instead of going through Spring.\n\n**Rule: the annotation alone does nothing — interception is the key.**",
    code: "@Service\nclass OrderService {\n    @Transactional\n    public void placeOrder(OrderRequest req) {\n        orderRepo.save(...);\n        inventoryRepo.reserve(...);\n    }\n}\n\n// If the call comes from another bean through the proxy,\n// Spring wraps this method in a transaction.",
  },
  {
    id: 'txn-persistence-context-dirty-checking',
    title: 'Persistence Context & Dirty Checking',
    content:
      "An entity moves through four states inside Hibernate: **New** (not tracked) → **Managed** (tracked by the persistence context) → **Detached** (a plain object now) → **Removed** (scheduled for delete).\n\n**What dirty checking means:**\n- Inside an active transaction, managed entities are watched for field changes.\n- Changed fields are synchronized during flush / commit.\n- You often do NOT need `repo.save()` after modifying a managed entity.\n- Detached objects are NOT auto-persisted.\n\nBecause the loaded entity is managed, Hibernate updates it at flush/commit time — no explicit save needed. A **managed** entity changed inside the transaction gets an `UPDATE` on flush/commit; a **detached** entity changed outside the transaction gets no DB update unless it's merged or saved.\n\n**Flush is not the same as commit:**\n- Flush = send SQL.\n- Commit = make the transaction permanent.\n- Rollback can still undo flushed SQL before commit.\n\nRemember: `@Transactional` governs DB state, not automatic Java object rollback.",
    code: "@Transactional\npublic void activateUser(Long id) {\n    User u = repo.findById(id).orElseThrow();\n    u.setStatus(Status.ACTIVE); // dirty checking -- no explicit save() needed\n}",
  },
  {
    id: 'txn-passing-objects-mutation',
    title: 'Passing Objects, Assignments & Mutation',
    content:
      "**Java passes object references by value. Spring transactions do not clone your objects.**\n\nThree scenarios and their outcomes:\n- **Mutate the passed object** (`dto.setName('A')`) — the caller sees the changed fields; rollback does NOT revert the DTO in memory, only the DB work is rolled back.\n- **Reassign the parameter** (`dto = new UserDto(); dto.setName('B')`) — the caller's reference is unchanged; the local reassignment only affects the local variable.\n- Pass a detached entity into `@Transactional` — if the entity is detached, the change may not be persisted; load a managed entity or merge/save explicitly instead.\n\n**What changes where:**\n- Local variable assignment → method scope only.\n- Field mutation on a shared object → visible to the caller.\n- Managed entity mutation in a transaction → persisted by dirty checking.\n- Detached entity mutation → in-memory only, unless merged.\n\n**Production-safe pattern:** load the managed entity by ID inside the transactional method, then mutate that — don't pass detached entities across layers; prefer IDs and plain values instead.\n\n**Rollback reverts database effects, not arbitrary object mutations in memory.**",
    code: "@Transactional\npublic void updateName(Long id, String name) {\n    User managed = repo.findById(id).orElseThrow();\n    managed.setName(name); // safe -- managed entity, tracked by dirty checking\n}",
  },
  {
    id: 'txn-returns-detached-lazy-loading',
    title: 'Returns, Detached State & Lazy Loading',
    content:
      "When a transactional method returns, its managed entities usually leave the persistence context and become **detached**.\n\n**Three return options:**\n- **Return the entity** — may work for already-loaded fields, but lazy associations can fail later, and the caller now holds a detached object.\n- **Return a DTO** — safe for API/service boundaries, no lazy-loading surprises, and the best choice for clear contracts.\n- **Return a primitive / boolean / count** — no persistence context concern, simple and stable.\n\n**LazyInitializationException risk** — happens when a returned entity is accessed after the transaction ends, a lazy association wasn't initialized, and there's no open session / persistence context. Fetch what you need up front, or map to a DTO before returning.\n\n**OSIV note:** Open Session in View can hide lazy-loading issues, but many teams disable it in production for cleaner transaction boundaries.\n\n**Return DTOs across boundaries; keep entities inside transactional business logic.**",
    code: "// Bad -- returns a detached entity with potential lazy-loading traps\n@Transactional\npublic Order getOrder(Long id) {\n    return repo.findById(id).orElseThrow();\n}\n\n// Better -- map inside the transaction, return a safe DTO\n@Transactional(readOnly = true)\npublic OrderDto getOrder(Long id) {\n    Order o = repo.findById(id).orElseThrow();\n    return mapper.toDto(o);\n}",
  },
  {
    id: 'txn-rollback-rules-exceptions',
    title: 'Rollback Rules & Exception Behavior',
    content:
      "**Default Spring behavior:**\n- Rollback on `RuntimeException`.\n- Rollback on `Error`.\n- Checked exceptions do NOT roll back by default.\n\n**Scenario → result:**\n- `throw new RuntimeException()` → rollback.\n- `throw new IOException()` (a checked exception) → commit, unless `rollbackFor` is used.\n- `@Transactional(rollbackFor = Exception.class)` → checked exceptions roll back too.\n- `@Transactional(noRollbackFor = CustomException.class)` → commits for that specific exception.\n\n**Swallowed exception trap:** if a `catch` block fully swallows an exception (logs it and moves on) instead of re-throwing or marking rollback-only, the transaction may commit anyway — even though something clearly went wrong.\n\n**UnexpectedRollbackException** — if an inner operation marks the transaction rollback-only, the outer method may continue running and then fail at commit time with this exception.\n\n**Rules:** don't hide exceptions accidentally, use `rollbackFor` intentionally, and keep your transactional error policy explicit.",
    code: "// Checked exception now triggers rollback\n@Transactional(rollbackFor = Exception.class)\npublic void importFile() throws Exception {\n    repo.save(...);\n    throw new IOException();\n}\n\n// Swallowed exception trap -- the transaction may still commit\n@Transactional\npublic void process() {\n    try {\n        repo.save(...);\n        risky();\n    } catch (Exception e) {\n        log.error(\"handled\", e); // exception swallowed -> tx can still commit\n    }\n}",
  },
  {
    id: 'txn-propagation-modes',
    title: 'Propagation Modes That Matter in Production',
    content:
      "**The propagation modes:**\n- **REQUIRED** — join the existing transaction, or create a new one (the default).\n- **REQUIRES_NEW** — suspend the outer transaction, start a completely new one.\n- **NESTED** — a savepoint within the existing transaction (if the driver supports it).\n- **SUPPORTS** — run with a transaction if one is present, otherwise run without.\n- **NOT_SUPPORTED** — run without a transaction, suspending any existing one.\n- **MANDATORY** — must already be running inside a transaction, or it throws.\n\n**REQUIRED vs REQUIRES_NEW:** with REQUIRED, the outer and inner work share the same transaction — if either fails, both roll back together. With REQUIRES_NEW, the outer transaction is suspended while the inner work runs and commits independently — the inner commit survives even if the outer transaction later fails.\n\n**Production scenarios:**\n- An audit log that must persist even if the outer operation fails → REQUIRES_NEW.\n- Normal service-to-service repository work → REQUIRED.\n- Partial rollback with savepoint-style logic → NESTED (needs driver/manager support).\n\n**Use REQUIRES_NEW carefully** — it creates an independent commit, can increase connection usage, and may surprise the outer flow's expectations.\n\n**Choose propagation based on the business boundary, not habit.**",
    code: "@Transactional\npublic void placeOrder() {\n    orderService.save();\n    auditService.logInNewTx();\n}\n\n@Transactional(propagation = Propagation.REQUIRES_NEW)\npublic void logInNewTx() { ... }",
  },
  {
    id: 'txn-isolation-readonly-flush',
    title: 'Isolation, readOnly & Flush Timing',
    content:
      "**Isolation levels** (choose the weakest level that safely fits):\n- **READ_COMMITTED** — a good default; avoids dirty reads.\n- **REPEATABLE_READ** — stable re-reads within a transaction.\n- **SERIALIZABLE** — the strongest isolation, lowest concurrency.\n- **DEFAULT** — use the database's own default.\n\nIsolation reduces anomalies — it does not replace locking.\n\n`readOnly = true` communicates read-only intent and may enable ORM or driver-level optimizations. It is NOT a security boundary — don't rely on it to actually block writes everywhere.\n\n**When SQL may be flushed:** before commit, before certain queries, on an explicit `flush()` call — and it's still rollback-able until commit (flush sends SQL; commit makes it permanent).\n\n**Flush + concurrency:** long transactions reduce throughput, so use optimistic or pessimistic locking intentionally rather than holding transactions open.\n\n**Production rule:** keep the transaction short. Don't hold database locks while waiting on remote REST calls, file I/O, or slow user interactions.\n\n**Small transactions + correct isolation + explicit intent = safer production behavior.**",
    code: "@Transactional(readOnly = true)\npublic List<OrderDto> findOpenOrders() { ... }\n\nentityManager.flush(); // sends pending SQL now, still rollback-able until commit",
  },
  {
    id: 'txn-production-pitfalls-checklist',
    title: 'Common Production Pitfalls & Final Checklist',
    content:
      "**Pitfalls and their safer patterns:**\n- Self-invocation of a `@Transactional` method → split it into another bean, or call through the proxy.\n- A long transaction wrapped around a remote REST call → keep the transaction short; commit DB work before remote I/O.\n- Publishing a message directly alongside a DB write → use the outbox pattern for reliability.\n- Returning entities to the controller → return DTOs instead.\n- Catching and hiding exceptions → re-throw, or mark rollback-only intentionally.\n\n**A safer checkout flow:** validate → write DB + outbox (same transaction) → commit → publish asynchronously — instead of writing to the DB and calling a payment client inside the same transaction, which keeps locks open while waiting on the network.\n\n**Async / event boundary:** `@Async` runs on another thread; thread-bound transaction context does NOT magically flow across it — be explicit about boundaries.\n\nMost `@Transactional` problems are boundary-design problems.\n\n**10 rules to remember:**\n1. No proxy call = no transactional advice.\n2. Self-invocation bypasses interception.\n3. Managed entities are dirty-checked.\n4. Detached objects are plain objects.\n5. Rollback affects the DB, not Java object history.\n6. Flush is not commit.\n7. Runtime exceptions roll back by default.\n8. Keep transactions short.\n9. Prefer DTOs at boundaries.\n10. Choose propagation intentionally.\n\nUnderstand the boundary, and `@Transactional` becomes predictable.",
    code: "// Looks fine, fails in prod -- remote call inside the transaction\n@Transactional\npublic void checkout() {\n    repo.save(order);\n    paymentClient.charge(...); // locks stay open while waiting on network\n}\n\n// Safer flow: validate -> write DB + outbox -> commit -> publish asynchronously",
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
  {
    id: 'sql-joins',
    title: 'SQL Joins (Visual Guide)',
    content:
      "Joins combine rows from two tables (A and B) on a matching key. The Venn diagrams below show exactly which rows each join returns:\n\n- **INNER JOIN** — only the rows that match in **both** A and B (the intersection).\n- **FULL JOIN** (FULL OUTER) — **all** rows from both A and B; unmatched sides are filled with NULLs (the union).\n- **FULL JOIN + `WHERE A.key IS NULL OR B.key IS NULL`** — only the rows that are in A **or** B but **not both** (the symmetric difference / outer anti-join).\n- **LEFT JOIN** — all rows from **A**, plus matching rows from B (NULLs where B has no match).\n- **LEFT JOIN + `WHERE B.key IS NULL`** — rows in **A only** (the part of A with no match in B).\n- **RIGHT JOIN** — all rows from **B**, plus matching rows from A.\n- **RIGHT JOIN + `WHERE B.key IS NULL`** — rows in **B only** (the part of B with no match in A).\n\nIn **JPA/Hibernate** you rarely write these by hand — entity relationships (`@ManyToOne`, `@OneToMany`) generate joins, `JOIN FETCH` in JPQL eagerly loads associations, and you can drop to native SQL for full control. Knowing the join semantics helps you reason about what your queries actually return.",
    code: "-- INNER JOIN: rows matching in both tables\nSELECT * FROM A INNER JOIN B ON A.key = B.key;\n\n-- LEFT JOIN: all A, matching B (NULLs where none)\nSELECT * FROM A LEFT JOIN B ON A.key = B.key;\n\n-- A only (rows in A with no match in B)\nSELECT * FROM A LEFT JOIN B ON A.key = B.key\nWHERE B.key IS NULL;\n\n-- FULL OUTER JOIN: everything from both sides\nSELECT * FROM A FULL JOIN B ON A.key = B.key;\n\n-- Only rows NOT in both (symmetric difference)\nSELECT * FROM A FULL JOIN B ON A.key = B.key\nWHERE A.key IS NULL OR B.key IS NULL;",
    image: '/java-notes/sql-joins.jpg',
    imageAlt: 'SQL Joins visual guide with Venn diagrams — INNER JOIN (intersection), FULL JOIN (union), FULL JOIN with A.key or B.key IS NULL (only unmatched rows), LEFT JOIN (all A plus matches), LEFT JOIN with B.key IS NULL (A only), RIGHT JOIN (all B plus matches), and RIGHT JOIN with B.key IS NULL (B only), each with its SQL query',
  },
  {
    id: "sql-recursive-ctes",
    title: "SQL Recursive CTEs — Hierarchical Queries (Employee Tree)",
    content:
      "**Recursive CTEs** are the SQL tool for **hierarchical or tree-like data** — data where a row points at another row in the same table. They **reference themselves** to traverse **parent-child relationships**, which makes them perfect for **org charts, category trees, file systems, and bill of materials (BOM)**. Instead of writing many self-joins whose depth you must know in advance, a recursive CTE walks the tree to any depth automatically.\n\nA recursive CTE always has **two parts** joined by `UNION ALL`. The first part is the **anchor member**: it selects the **root / base rows** (the starting point, e.g. the CEO). The second part is the **recursive member**: it **references the CTE itself** and joins back to the source table to fetch the **next level of children**. The database runs the anchor once, then runs the recursive member **repeatedly**, each iteration feeding on the rows produced by the previous iteration, and **stops when the recursive member returns no more rows**. That termination condition is what keeps the query finite.\n\nThe general shape is `WITH RECURSIVE cte_name AS ( anchor SELECT ... UNION ALL recursive SELECT ... FROM cte_name ) SELECT ... FROM cte_name`. Recursive CTEs are supported in **PostgreSQL, SQL Server, MySQL 8.0+, Oracle, SQLite, DB2** and more (SQL Server omits the `RECURSIVE` keyword).\n\n**Quick Facts:**\n\n- Use `UNION ALL` (not `UNION`) for better performance and correctness.\n- Anchor member runs first.\n- Recursive member runs repeatedly using results from the previous iteration.\n- Stops when the recursive member returns no rows.\n- Supported in PostgreSQL, SQL Server, MySQL 8.0+, Oracle, SQLite, DB2, etc.\n- Great for trees, paths, hierarchies, and transitive relationships.\n\n**The Employees table** drives every example. Columns are `emp_id (PK)`, `name`, `manager_id (FK)`, and `title`. The rows are: 1 CEO (manager NULL, CEO); 2 Alice (manager 1, Manager); 3 Bob (manager 1, Manager); 4 Carol (manager 2, Developer); 5 David (manager 2, Developer); 6 Eve (manager 3, Developer); 7 Frank (manager 3, Developer); 8 Grace (manager 4, Intern). As a tree: **CEO** sits at the top; **Alice and Bob report to the CEO**; **Carol and David report to Alice**; **Eve and Frank report to Bob**; and **Grace reports to Carol**. Each employee has exactly one manager except the CEO, whose `manager_id` is NULL — that NULL is the natural base case.\n\nThe poster shows four worked examples. **2.1 Full Employee Hierarchy (top-down):** the anchor selects the CEO (`WHERE manager_id IS NULL`) with `0 AS level` and `CAST(name AS VARCHAR) AS path`; the recursive member joins `Employees` to `emp_tree` on `manager_id = emp_id`, adds `level + 1`, and appends `' > ' || name` to build a **breadcrumb path**. The result lists every employee with its depth and a readable path like `CEO > Alice > Carol > Grace`. **2.2 Get Only Immediate Reports:** a single level down using `WHERE manager_id = 1`, returning Alice and Bob at level 1 — the direct reports of the CEO. **2.3 Count Subordinates for Each Manager:** the CTE walks downward from every manager (`WHERE manager_id IS NOT NULL`), then the outer query does `GROUP BY manager_id` with `COUNT(*)` to total **direct and indirect subordinates** per manager (e.g. manager 1 has 6, manager 2 has 3, manager 3 has 2, manager 4 has 1). **2.4 Bottom-Up Path to Root:** starts from a specific employee (`WHERE emp_id = 8`, Grace) and joins on `emp_id = manager_id` to climb **upward** one manager at a time, producing the chain Grace → Carol → Alice → CEO with the path `CEO > Alice > Carol > Grace`.\n\n**Common Use Cases:**\n\n- Organization charts & employee hierarchies\n- Category & product hierarchies\n- File system directory trees\n- Bill of materials (BOM)\n- Network routing & dependency trees\n\n**Tips & Best Practices:**\n\n- Always use `UNION ALL`, not `UNION`.\n- Ensure the recursive member gets closer to the base case to avoid infinite loops.\n- Add a level column to track depth.\n- Use a path column to display hierarchy.\n- Index `manager_id` for better performance.\n- Set a max recursion limit if your DB supports it (e.g. `OPTION (MAXRECURSION 100)` in SQL Server).\n\n**Common Mistakes:**\n\n- Forgetting `UNION ALL` (using `UNION` slows it down).\n- Missing base case (leads to infinite loop).\n- Not indexing parent key columns.\n- Selecting unnecessary columns (hurts performance).\n- Not handling NULL manager (for root nodes).\n\n**Quick Recap:**\n\n- Recursive CTEs solve hierarchical problems.\n- Anchor member = starting point.\n- Recursive member = keeps going down/up.\n- Stops automatically when no more rows.\n- Use for trees, paths, and transitive relationships.\n\n**Performance Note:** Recursive CTEs are powerful but can be expensive on large datasets. Use proper indexes, limit depth when possible, and filter early.\n\n**What's Next:** Day 30 — Window Functions: `ROW_NUMBER`, `RANK`, and `DENSE_RANK`.\n\n**Key Takeaway:** Recursive CTEs turn complex hierarchical data into simple, readable results. Master them to handle real-world tree problems effortlessly.\n\n**Practice Challenge:** (1) List the full employee hierarchy with levels. (2) Count total subordinates for each manager. (3) Find the path from any employee up to the CEO.\n\n*Infographic by @e_opore on X.*",
    code: "-- Syntax Overview: general recursive CTE template\nWITH RECURSIVE cte_name AS (\n    -- Anchor member\n    SELECT ...\n    UNION ALL\n    -- Recursive member\n    SELECT ... FROM cte_name ...\n)\nSELECT ... FROM cte_name;\n\n-- 2.1 Full Employee Hierarchy (Top-Down Traversal)\nWITH RECURSIVE emp_tree AS (\n    -- Anchor member: start with CEO\n    SELECT emp_id, name, manager_id, title, 0 AS level,\n           CAST(name AS VARCHAR) AS path\n    FROM Employees\n    WHERE manager_id IS NULL\n\n    UNION ALL\n\n    -- Recursive member: get children\n    SELECT e.emp_id, e.name, e.manager_id, e.title,\n           et.level + 1 AS level,\n           et.path || ' > ' || e.name AS path\n    FROM Employees e\n    JOIN emp_tree et ON e.manager_id = et.emp_id\n)\nSELECT emp_id, name, manager_id, title, level, path\nFROM emp_tree\nORDER BY path;\n-- result: every employee with level (0..3) and breadcrumb path, e.g. CEO > Alice > Carol > Grace\n\n-- 2.2 Get Only Immediate Reports (One Level Down)\nWITH RECURSIVE direct_reports AS (\n    SELECT emp_id, name, manager_id, 1 AS level\n    FROM Employees\n    WHERE manager_id = 1  -- reports to CEO only\n)\nSELECT * FROM direct_reports;\n-- result: Alice (2) and Bob (3), both manager_id 1, level 1\n\n-- 2.3 Count Subordinates for Each Manager\nWITH RECURSIVE sub_tree AS (\n    -- Anchor: start from each manager\n    SELECT manager_id AS mgr_id, emp_id, emp_id AS subordinate_id, 1 AS level\n    FROM Employees\n    WHERE manager_id IS NOT NULL\n\n    UNION ALL\n\n    -- Recursive: go deeper\n    SELECT st.mgr_id, e.emp_id, e.emp_id, st.level + 1\n    FROM Employees e\n    JOIN sub_tree st ON e.manager_id = st.subordinate_id\n)\nSELECT mgr_id AS manager_id, COUNT(*) AS total_subordinates\nFROM sub_tree\nGROUP BY mgr_id\nORDER BY mgr_id;\n-- result: manager 1 -> 6, manager 2 -> 3, manager 3 -> 2, manager 4 -> 1\n\n-- 2.4 Get Employee Hierarchy (Bottom-Up Path to Root)\nWITH RECURSIVE up_tree AS (\n    -- Anchor: start from a specific employee\n    SELECT emp_id, name, manager_id, 0 AS level,\n           CAST(name AS VARCHAR) AS path\n    FROM Employees\n    WHERE emp_id = 8  -- Grace\n\n    UNION ALL\n\n    SELECT e.emp_id, e.name, e.manager_id, ut.level + 1,\n           e.name || ' > ' || ut.path\n    FROM Employees e\n    JOIN up_tree ut ON e.emp_id = ut.manager_id\n)\nSELECT * FROM up_tree\nORDER BY level;\n-- result: Grace -> Carol -> Alice -> CEO, final path CEO > Alice > Carol > Grace",
    image: "/java-notes/sql-recursive-ctes-hierarchical.jpg",
    imageAlt: "SQL Series Day 29/60 infographic on Recursive CTEs for hierarchical queries using an employee tree. Panels: What are Recursive CTEs (handle tree-like data, self-reference parent-child, good for org charts, category trees, file systems, bill of materials); Key Point that a recursive CTE has an anchor member (starting rows) and a recursive member (references the CTE for next level); How Recursive CTE Works flow (Anchor Member selects root/base rows, Recursive Member joins to get children, repeat until no more rows); Syntax Overview template with WITH RECURSIVE, anchor SELECT, UNION ALL, recursive SELECT FROM cte_name; Quick Facts (use UNION ALL not UNION, anchor runs first, recursive repeats, stops when no rows, supported in PostgreSQL/SQL Server/MySQL 8.0+/Oracle/SQLite/DB2, great for trees and paths). Example Employees table with emp_id/name/manager_id/title: 1 CEO NULL, 2 Alice/3 Bob report to CEO, 4 Carol/5 David report to Alice, 6 Eve/7 Frank report to Bob, 8 Grace reports to Carol; plus a tree view of the same hierarchy. Four Recursive CTE Examples with SQL and result tables: 2.1 Full Employee Hierarchy top-down with level and path columns; 2.2 Get Only Immediate Reports one level down (WHERE manager_id = 1) returning Alice and Bob; 2.3 Count Subordinates for Each Manager giving 6, 3, 2, 1; 2.4 bottom-up path to root from Grace up to CEO. Also Common Use Cases, Tips and Best Practices, Common Mistakes, Quick Recap, Performance Note, What's Next (Day 30 Window Functions ROW_NUMBER/RANK/DENSE_RANK), Key Takeaway, and Practice Challenge. By @e_opore on X.",
  },
  {
    id: "sql-window-functions-ranking",
    title: "SQL Window Functions — ROW_NUMBER(), RANK() & DENSE_RANK()",
    content:
      "**Window functions** perform calculations across a set of rows related to the current row. Unlike `GROUP BY`, they do **NOT** collapse rows — they return a value for *each and every row*, making them ideal for ranking, running totals, percentiles, and comparisons. **Key point:** `ROW_NUMBER`, `RANK`, and `DENSE_RANK` are all *ranking* window functions.\n\n**How they work.** The syntax is `SELECT column_list, WINDOW_FUNCTION() OVER (PARTITION BY column(s) ORDER BY column(s)) AS alias FROM table_name;`. Inside `OVER()`, `PARTITION BY` is optional (it splits data into groups), while `ORDER BY` is required for ranking.\n\n**Quick Facts:**\n- `ORDER BY` inside `OVER()` defines the order for ranking.\n- `PARTITION BY` divides data into groups, but ranking restarts within each group.\n- `ROW_NUMBER()` gives unique sequential numbers (no gaps).\n- `RANK()` gives the same rank for ties, with gaps.\n- `DENSE_RANK()` gives the same rank for ties, without gaps.\n- All three functions require `ORDER BY`.\n\n**Definitions:**\n- **ROW_NUMBER()** — Assigns a unique sequential number to each row within the partition. No gaps in numbering.\n- **RANK()** — Assigns the same rank to rows with the same value. Gaps appear in ranking after ties.\n- **DENSE_RANK()** — Assigns the same rank to rows with the same value. No gaps in ranking after ties.\n\n**The example.** The `Employees` table is ranked by salary (highest first) within each department. **IT** has Grace (95000), Alice (90000), Bob (75000), Charlie (75000) — Bob and Charlie *tie*. **HR** has David (65000), Eve (65000), Frank (50000), Heidi (50000) — two ties: David/Eve and Frank/Heidi.\n\nThe three functions differ *only* in how they handle those ties, which is the whole point:\n\n- **ROW_NUMBER (rn):** IT = 1, 2, 3, 4 (Grace, Alice, Bob, Charlie) — even the tied Bob and Charlie get distinct 3 and 4. HR = 1, 2, 3, 4 (David, Eve, Frank, Heidi). Every row is unique regardless of ties.\n- **RANK (rnk):** IT = Grace 1, Alice 2, Bob 3, Charlie 3 (tie). HR = David 1, Eve 1 (tie), Frank 3, Heidi 3. After the 1,1 tie, rank 2 is *skipped* — leaving a **gap**.\n- **DENSE_RANK (drnk):** IT = Grace 1, Alice 2, Bob 3, Charlie 3. HR = David 1, Eve 1 (tie), Frank 2, Heidi 2. The tie at rank 1 is followed by rank 2 with **no gap**.\n\n**Use Cases:**\n- Top N per group — use `ROW_NUMBER()` and filter (`WHERE rn <= N`).\n- Competition ranking — use `RANK()` to show ties with gaps.\n- Leaderboard / Scores — use `DENSE_RANK()` for compact rankings.\n- Pagination — use `ROW_NUMBER()` for page numbers.\n- Deduplication — use `ROW_NUMBER()` to keep the first row and remove others.\n\n**Filtering (Top N per Group).** You cannot use a window function directly in a `WHERE` clause. Instead, wrap the query in a **CTE** and filter on the alias outside it. The CTE `RankedEmployees` computes `ROW_NUMBER()` per department, then the outer query selects `WHERE rn <= 2`, returning the top 2 per department: Grace/Alice for IT, David/Eve for HR.\n\n**Performance Tips:**\n- Use indexes on `PARTITION BY` and `ORDER BY` columns.\n- Minimize data scanned before applying window functions.\n- CTEs may be materialized (depends on DB); check the execution plan.\n- Filter data early to reduce rows processed.\n\n**Common Mistakes:**\n- Forgetting `ORDER BY` inside `OVER()`.\n- Expecting `RANK()` to be gapless.\n- Using window functions in a `WHERE` clause directly (not allowed).\n- Not partitioning when separate group rankings are needed.\n\n**Quick Recap:**\n- `ROW_NUMBER()` = unique sequence (no gaps).\n- `RANK()` = ties get same rank, then gaps.\n- `DENSE_RANK()` = ties get same rank, no gaps.\n- Use `PARTITION BY` for group-wise ranking.\n- Use in `SELECT`, `ORDER BY`, subqueries, or CTEs.\n\n**Key takeaway:** Window functions let you analyze data across rows without collapsing results. Master these three to solve real-world ranking problems. Next up in Day 31: `LEAD()`, `LAG()`, `FIRST_VALUE()`, `LAST_VALUE()`.\n\n**Practice Challenge:** 1. Find the top 3 highest-paid employees in each department. 2. Rank all employees by salary (descending) using `RANK()` and `DENSE_RANK()`. 3. Show row numbers for employees ordered by department and salary.\n\n*Infographic by @e_opore on X.*",
    code: "-- 3.1 ROW_NUMBER() — Unique Sequential Numbers\nSELECT emp_id, name, dept, salary,\n       ROW_NUMBER() OVER(PARTITION BY dept ORDER BY salary DESC) AS rn\nFROM Employees\nORDER BY dept, salary DESC;\n-- result: IT -> Grace 1, Alice 2, Bob 3, Charlie 4; HR -> David 1, Eve 2, Frank 3, Heidi 4 (every row unique, no gaps)\n\n-- 3.2 RANK() — Ranks With Gaps After Ties\nSELECT emp_id, name, dept, salary,\n       RANK() OVER(PARTITION BY dept ORDER BY salary DESC) AS rnk\nFROM Employees\nORDER BY dept, salary DESC;\n-- result: IT -> Grace 1, Alice 2, Bob 3, Charlie 3; HR -> David 1, Eve 1, Frank 3, Heidi 3 (ties share a rank, next rank skips -> gap)\n\n-- 3.3 DENSE_RANK() — Ranks Without Gaps After Ties\nSELECT emp_id, name, dept, salary,\n       DENSE_RANK() OVER(PARTITION BY dept ORDER BY salary DESC) AS drnk\nFROM Employees\nORDER BY dept, salary DESC;\n-- result: IT -> Grace 1, Alice 2, Bob 3, Charlie 3; HR -> David 1, Eve 1, Frank 2, Heidi 2 (ties share a rank, next rank continues -> no gap)\n\n-- 5. Filtering with Window Functions — Top N per Group (using a CTE)\nWITH RankedEmployees AS (\n    SELECT emp_id, name, dept, salary,\n           ROW_NUMBER() OVER(PARTITION BY dept ORDER BY salary DESC) AS rn\n    FROM Employees\n)\nSELECT *\nFROM RankedEmployees\nWHERE rn <= 2\nORDER BY dept, rn;\n-- result: top 2 per dept -> IT: Grace 95000 (rn 1), Alice 90000 (rn 2); HR: David 65000 (rn 1), Eve 65000 (rn 2)",
    image: "/java-notes/sql-window-functions-ranking.jpg",
    imageAlt: "SQL Series Day 30/60 infographic on Window Functions — ROW_NUMBER(), RANK(), and DENSE_RANK(). Panels cover: what window functions are (compute across related rows, do not collapse rows like GROUP BY, return a value per row); how they work via SELECT WINDOW_FUNCTION() OVER (PARTITION BY ... ORDER BY ...) AS alias syntax with PARTITION BY optional and ORDER BY required; Quick Facts on ORDER BY, PARTITION BY, and the three functions' tie behavior; an Employees table with IT (Grace 95000, Alice 90000, Bob 75000, Charlie 75000) and HR (David 65000, Eve 65000, Frank 50000, Heidi 50000); definitions of each function; three practical example queries with result tables showing ROW_NUMBER giving unique 1-2-3-4, RANK repeating ranks then leaving gaps, and DENSE_RANK repeating ranks with no gaps; a Use Cases table; a Top-N-per-group CTE example with WHERE rn <= 2; Performance Tips; Common Mistakes; a Quick Recap; and a Practice Challenge. By @e_opore on X.",
  },
  {
    id: "sql-window-functions-partition-by",
    title: "SQL Window Functions with PARTITION BY & ORDER BY",
    content:
      "**Window functions** perform calculations across a set of rows related to the current row, but unlike `GROUP BY` they do **not** collapse those rows into one output row. Two clauses inside `OVER()` control them: **PARTITION BY** and **ORDER BY**.\n\n**PARTITION BY** splits the data into groups called partitions. Every window calculation restarts independently inside each partition, so a running total, rank, or `LAG()` value never bleeds from one group into another. **ORDER BY** (used *inside* `OVER()`) defines the order of rows within each partition, which is what makes ranking and running totals meaningful. The **Key Point**: PARTITION BY = group the data, ORDER BY = set the order within each group.\n\n**How it works** — the shape is `SELECT column_list, WINDOW_FUNCTION() OVER (PARTITION BY partition_column(s) ORDER BY order_column(s)) AS alias FROM table_name;`. The full syntax is `WINDOW_FUNCTION() OVER ([PARTITION BY column1, ...] [ORDER BY column1 ASC|DESC, ...] [frame_clause])`. The **frame clause** is optional; for running totals we use `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`, meaning sum every row from the first row of the partition up to and including the current one.\n\n**Quick Facts:**\n\n- PARTITION BY is optional. If omitted, all rows are treated as one partition.\n- ORDER BY inside `OVER()` is often required for ranking and running totals.\n- Different window functions can use the same `OVER()` clause.\n- You can partition by one or more columns.\n- Great for per-group rankings, running totals, moving averages, and more.\n\n**The Employees table** has columns `emp_id` (PK), `name`, `dept`, `salary`, and `hire_date`. It holds IT (Alice 90000, Bob 75000, Charlie 75000), HR (David 65000, Eve 65000, Frank 50000), and Sales (Grace 95000, Heidi 50000). Partitioned by `dept`, the calculations run independently within each department, following the specified order.\n\n**Section 2 — the core functions** all use `PARTITION BY dept ORDER BY salary DESC, hire_date ASC`:\n\n- **ROW_NUMBER()** gives a unique sequential number within each partition. Even though Bob and Charlie share a salary of 75000, they get different row numbers (2 and 3).\n- **RANK()** gives the same rank for ties but leaves gaps. Bob and Charlie tie for rank 2, so the next rank is 3 (a gap).\n- **DENSE_RANK()** gives the same rank for ties with no gaps. Bob and Charlie tie for rank 2, and the next distinct salary continues at rank 3 with no skipping (no gaps).\n- **SUM() running total per dept** uses `ORDER BY hire_date` and the `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` frame. For IT it accumulates 90000, then 165000, then 240000; the running total is calculated within each department based on `hire_date` order.\n\n**Section 3 — four practical examples:**\n\n- **3.1 Rank by salary in each dept** uses `RANK() OVER (PARTITION BY dept ORDER BY salary DESC)` so ranks reset for each department (top 2 per dept shown).\n- **3.2 Running total of salary per dept** ordered by `hire_date` with the `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` frame — useful for cumulative reports.\n- **3.3 Previous salary in each dept** uses `LAG(salary) OVER (PARTITION BY dept ORDER BY hire_date)`. The first row of each partition has no predecessor, so `prev_salary` is **NULL** (Alice and David both show NULL as the earliest hire in their dept).\n- **3.4 Department-wise salary statistics** uses `AVG(salary)`, `MAX(salary)`, and `MIN(salary)` each `OVER (PARTITION BY dept)`. Each row gets department-wide statistics without collapsing rows — the win over `GROUP BY`.\n\n**Common Use Cases:**\n\n- Ranking employees within departments.\n- Finding top N employees per group.\n- Running totals and cumulative calculations.\n- Comparing rows with previous/next values.\n- Calculating group-wise statistics without GROUP BY.\n\n**Best Practices:**\n\n- Always use ORDER BY for meaningful results.\n- Choose the right function: ROW_NUMBER, RANK, or DENSE_RANK.\n- Partition by appropriate columns to get correct groups.\n- Use indexes on PARTITION BY and ORDER BY columns for performance.\n\n**Common Mistakes:**\n\n- Forgetting ORDER BY inside OVER().\n- Expecting RANK() to be gapless.\n- Not partitioning when group-wise calculation is needed.\n- Using window functions in WHERE clause (use subquery/CTE instead).\n\n**Quick Recap:**\n\n- PARTITION BY divides rows into groups.\n- ORDER BY sets the order within each group.\n- ROW_NUMBER() → unique sequence.\n- RANK() → same rank for ties, gaps occur.\n- DENSE_RANK() → same rank for ties, no gaps.\n- Window functions keep all rows and add insights.\n\n**What's Next (Day 32):** more window functions — `LEAD()`, `LAG()`, `FIRST_VALUE()`, and `LAST_VALUE()`.\n\n**Key Takeaway:** PARTITION BY + ORDER BY unlock the full power of window functions for advanced analytics and row-wise calculations.\n\n**Practice Challenge:** 1) Rank employees by salary within each department. 2) Find top 2 highest paid employees in each department. 3) Calculate running total of salary by department. 4) Show previous and next salary for each employee.\n\n*Infographic by @e_opore on X.*",
    code: "-- ROW_NUMBER(), RANK(), DENSE_RANK() with PARTITION BY dept\n-- All three share the same OVER() ordering: salary DESC, then hire_date ASC\nSELECT emp_id, name, dept, salary,\n       ROW_NUMBER() OVER (\n           PARTITION BY dept\n           ORDER BY salary DESC, hire_date ASC\n       ) AS rn,\n       RANK() OVER (\n           PARTITION BY dept\n           ORDER BY salary DESC, hire_date ASC\n       ) AS rnk,\n       DENSE_RANK() OVER (\n           PARTITION BY dept\n           ORDER BY salary DESC, hire_date ASC\n       ) AS drnk\nFROM Employees;\n-- result: within IT, Alice=1, Bob=2, Charlie=3 for ROW_NUMBER;\n-- result: RANK gives Bob/Charlie tie at 2 then a gap (next=3);\n-- result: DENSE_RANK gives ties with no gaps.\n\n-- SUM() running total of salary within each dept, ordered by hire_date\nSELECT emp_id, name, dept, hire_date, salary,\n       SUM(salary) OVER (\n           PARTITION BY dept\n           ORDER BY hire_date\n           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\n       ) AS running_total\nFROM Employees;\n-- result: IT accumulates 90000 -> 165000 -> 240000 as hire_date advances.\n\n-- 3.1 Rank employees by salary in each dept (highest salary first)\nSELECT emp_id, name, dept, salary,\n       RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS rnk\nFROM Employees;\n-- result: ranks reset for each department (show top 2 per dept).\n\n-- 3.2 Running total of salary per dept (ordered by hire date)\nSELECT emp_id, name, dept, hire_date, salary,\n       SUM(salary) OVER (\n           PARTITION BY dept\n           ORDER BY hire_date\n           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\n       ) AS running_total\nFROM Employees;\n-- result: useful for cumulative reports.\n\n-- 3.3 Previous salary in each dept (LAG function)\nSELECT emp_id, name, dept, salary,\n       LAG(salary) OVER (\n           PARTITION BY dept\n           ORDER BY hire_date\n       ) AS prev_salary\nFROM Employees;\n-- result: the first (earliest-hired) row per dept has prev_salary = NULL\n-- result: e.g. Alice (IT) and David (HR) both show NULL.\n\n-- 3.4 Department-wise salary statistics with AVG/MAX/MIN OVER PARTITION BY\nSELECT emp_id, name, dept, salary,\n       AVG(salary) OVER (PARTITION BY dept) AS avg_salary,\n       MAX(salary) OVER (PARTITION BY dept) AS max_salary,\n       MIN(salary) OVER (PARTITION BY dept) AS min_salary\nFROM Employees;\n-- result: each row keeps its identity but gains department-wide stats\n-- result: (no rows are collapsed, unlike GROUP BY).",
    image: "/java-notes/sql-window-functions-partition-by.jpg",
    imageAlt: "SQL Series Day 31/60 infographic titled Window Functions with PARTITION BY and ORDER BY by @e_opore. Panels explain that PARTITION BY splits data into groups while ORDER BY sets row order within each group; a How It Works panel shows SELECT column_list, WINDOW_FUNCTION() OVER (PARTITION BY ... ORDER BY ...) syntax plus an optional frame clause. Quick Facts note PARTITION BY is optional, ORDER BY is often required for ranking and running totals, and you can partition by multiple columns. An Employees example table lists emp_id, name, dept, salary, hire_date for IT (Alice 90000, Bob 75000, Charlie 75000), HR (David 65000, Eve 65000, Frank 50000), and Sales (Grace 95000, Heidi 50000), partitioned by dept. Section 2 compares ROW_NUMBER (unique per partition), RANK (ties with gaps), DENSE_RANK (ties no gaps), and SUM running total per dept using ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW. Section 3 shows four practical examples: 3.1 rank by salary per dept, 3.2 running total per dept by hire_date, 3.3 LAG previous salary showing NULL for the first row per partition, and 3.4 AVG/MAX/MIN OVER PARTITION BY for department-wide stats without collapsing rows. Further panels list Common Use Cases, Best Practices, Common Mistakes, a Quick Recap, What's Next Day 32 (LEAD, LAG, FIRST_VALUE, LAST_VALUE), a Key Takeaway, and a Practice Challenge.",
  },
];

// MongoDB + Spring Boot — 6-page production cheat sheet (attached to Spring Data JPA as the NoSQL counterpart)
const MONGODB_SPRING_BOOT_SECTIONS = [
  {
    id: 'mongodb-overview-setup',
    title: 'MongoDB + Spring Boot — Overview & Setup',
    content:
      "Alongside relational JPA, **Spring Data MongoDB** brings the same repository model to a **document database**.\n\n**What MongoDB is good at** — a document database with a flexible schema; best when data is read together and can be stored together; great for catalogs, profiles, events, content, carts and rapidly evolving schemas. **Think in access patterns first, tables second.**\n\n**When to use it** — JSON-like documents fit the domain, high read/write scale and evolving schema, and aggregation pipelines / denormalized reads help. **Review carefully when** complex cross-document joins dominate, strict relational reporting is central, or unbounded arrays / oversized documents are likely.\n\n**Spring Boot setup** — add `spring-boot-starter-data-mongodb` (plus `web` and optionally `validation`), then configure the connection in `application.yml` (`spring.data.mongodb.uri`, `database`, `auto-index-creation`).\n\n**Minimal implementation flow:** `@Document` entity → Mongo repository → service → REST controller.\n\n**Golden rules** — model for the query, embed first (reference when needed), add indexes deliberately, measure before tuning, and keep examples production-minded.\n\nThe full 6-page cheat sheet is available as a [downloadable PDF](/java-notes/mongodb-spring-boot.pdf).",
    code: `<!-- Maven dependencies -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

# application.yml
spring:
  data:
    mongodb:
      uri: mongodb+srv://user:***@cluster0.example.mongodb.net/shop?retryWrites=true&w=majority
      database: shop
      auto-index-creation: false

// Entity + repository
@Document("products")
public class Product {
    @Id
    private String id;
    private String name;
    private BigDecimal price;
    // getters and setters
}

public interface ProductRepository
        extends MongoRepository<Product, String> {
    // custom queries if needed
}`,
    image: '/java-notes/mongodb-spring-boot-p1.jpg',
    imageAlt:
      'MongoDB + Spring Boot overview and setup — what MongoDB is good at (flexible document schema, data read together, catalogs and evolving schemas), when to use vs review carefully, the Spring Boot Maven dependencies and application.yml connection config, the minimal flow (@Document entity, Mongo repository, service, REST controller) with entity and repository examples, and the golden rules (model for the query, embed first, index deliberately, measure before tuning)',
  },
  {
    id: 'mongodb-annotations-repository',
    title: 'Key Annotations, Repository vs MongoTemplate',
    content:
      "**Key annotations:**\n- `@Document` — marks a class as a MongoDB document and sets the collection name.\n- `@Id` — marks the primary-key field.\n- `@Indexed` — creates an index on a field.\n- `@CompoundIndex` — creates a compound index on multiple fields.\n- `@Version` — enables optimistic locking for the document.\n- `@CreatedDate` / `@LastModifiedDate` — auto-populate on creation and auto-update on every modification (enable with `@EnableMongoAuditing`).\n- `@DocumentReference(lazy = true)` — a lightweight reference to another document by id (no `DBRef` overhead); `DBRef` is the built-in reference type but adds extra round trips, so use it carefully.\n\n**Repository vs MongoTemplate** — `MongoRepository` (Spring Data) gives quick CRUD, derived query methods, paging and sorting with less boilerplate. `MongoTemplate` gives fine-grain control: dynamic queries and criteria, updates and bulk operations, aggregation pipelines.\n\n**Service flow:** validate input → map to document → repository / template call → return DTO / API response.\n\n**Auditing + concurrency** — enable `@EnableMongoAuditing` in a `@Configuration` class, use `@Version` for optimistic locking, keep updates focused, and prefer update operators (where possible) over full-document rewrites.\n\n**Implementation tips** — prefer projection for read APIs, avoid giant documents, define indexes intentionally, keep collections aligned with access patterns, and test with realistic data volumes.",
    code: `@Document("orders")
@CompoundIndex(def = "{ 'customerId': 1, 'status': 1 }", name = "idx_customer_status")
public class Order {
    @Id
    private String id;

    @Indexed
    private String customerId;
    private OrderStatus status;
    private BigDecimal totalAmount;
    private List<OrderItem> items;

    @Version
    private Long version;
    @CreatedDate
    private Instant createdAt;
    @LastModifiedDate
    private Instant updatedAt;
}

// MongoRepository — derived queries, paging
public interface OrderRepository extends MongoRepository<Order, String> {
    List<Order> findByCustomerIdAndStatus(String customerId, OrderStatus status);
    Page<Order> findByStatus(String status, Pageable pageable);
}

// MongoTemplate — fine-grained control
Query query = Query.query(Criteria.where("status").is("PAID"));
List<Order> orders = mongoTemplate.find(query, Order.class);`,
    image: '/java-notes/mongodb-spring-boot-p2.jpg',
    imageAlt:
      'MongoDB + Spring Boot key annotations and implementation — a table of annotations (@Document, @Id, @Indexed, @CompoundIndex, @Version, @CreatedDate, @LastModifiedDate, @DocumentReference lazy, DBRef), an Order entity example with a compound index and auditing fields, MongoRepository vs MongoTemplate comparison, the service flow (validate, map, call, return), auditing and concurrency notes with @EnableMongoAuditing and @Version, and implementation tips',
  },
  {
    id: 'mongodb-design-patterns',
    title: 'MongoDB Design Patterns',
    content:
      "**Modeling first principles** — model for query patterns, embed when data is read together, reference when cardinality is high or duplication is hard, keep documents bounded, and design indexes with the schema.\n\n**1. Embedded document pattern** — use when child data is read with the parent and updated together (e.g. an `Order` with `orderItems` and `shippingAddress` embedded). Watch out for document growth.\n\n**2. Reference / extended reference** — use when related data changes independently or cardinality is high (e.g. an `Order` stores `customerId` plus a few duplicated fields like `customerName`). Watch out for extra lookups and stale duplicated fields.\n\n**3. Attribute pattern** — use for variable attributes and searchable product specs (e.g. `attributes = [{k:\"color\", v:\"black\"}, {k:\"size\", v:\"XL\"}]`). Index only the fields you query.\n\n**4. Bucket pattern** — use for time-series or event streams grouped by time / user / device (e.g. page views or sensor readings per hour or day). Watch out for bucket size and write amplification.\n\n**5. Subset + outlier pattern** — keep hot data small and move large or rare fields elsewhere (e.g. a product summary in the main document, a long description or huge review list in another collection). Decide hot vs cold fields deliberately.\n\n**6. Computed / polymorphic pattern** — store and refresh computed values like `orderTotal` or `reviewCount` for read-heavy workloads; use a polymorphic collection (a single collection with a `type` field) for similar entities such as `cardPayment` and `upiPayment`.\n\n**Common anti-patterns** — unbounded arrays, too many joins / lookups, huge documents, indexing everything, and modeling like relational tables.",
    image: '/java-notes/mongodb-spring-boot-p3.jpg',
    imageAlt:
      'MongoDB design patterns used in production — modeling first principles (model for query patterns, embed when read together, reference when cardinality high, keep documents bounded, design indexes with schema), six schema patterns (embedded document, reference / extended reference, attribute, bucket, subset + outlier, computed / polymorphic) each with when to use, an example and a watch-out, and common anti-patterns (unbounded arrays, too many lookups, huge documents, indexing everything, modeling like tables)',
  },
  {
    id: 'mongodb-performance-indexing',
    title: 'Performance, Indexing & Query Tuning',
    content:
      "**Index types** — single field (filter or sort on one field), compound (filter / sort / range on multiple fields; order matters, put the most selective fields first), multikey (index array fields; one multikey field per compound index), text (keyword search across fields; one text index per collection), TTL (auto-expire documents after a time; on a date field), and partial (index a subset of documents to reduce index size).\n\n**Index rules** — index the fields you filter and sort on; for compound indexes think **equality → sort → range**; too many indexes slow writes; review `explain()` plans for slow queries; auto-index creation is useful in dev but review carefully for prod.\n\n**Query tuning** — use projections to return only the fields you need, page with `Sort` + `Pageable` (or a cursor-based approach) for large feeds, avoid `skip`/`limit` for very deep pages, use aggregation pipelines for reporting and analytics, and keep `$lookup` limited and intentional.\n\n**Scaling notes** — read-heavy workloads scale out with replica sets and read preferences; write-heavy workloads optimize writes and keep indexes lean; the **shard key must match your access pattern**; choose a high-cardinality, stable shard key and avoid hotspot keys (e.g. sequential timestamps); keep document size and array growth under control.\n\n**Performance quick wins** — measure first (don't guess), index only what you need, project less data, aggregate smartly, and monitor slow queries.",
    code: `// Unique index on email
@Indexed(unique = true)
private String email;

// Compound index (equality -> sort -> range)
@CompoundIndex(name = "cust_status_created_idx",
               def = "{ 'customerId': 1, 'status': 1, 'createdAt': -1 }")

// Text index
@TextIndexed
private String description;

// TTL index — expire after 7 days (on a date field)
@Indexed(expireAfter = "7d")
private Instant expiresAt;

// Projection interface — return only needed fields
public interface UserView {
    String getId();
    String getName();
    String getEmail();
}
List<UserView> findByStatus(String status);

// MongoTemplate aggregation skeleton
Aggregation agg = Aggregation.newAggregation(
    match(Criteria.where("status").is("ACTIVE")),
    group("customerId").sum("total").as("total"),
    sort(Sort.by(Sort.Direction.DESC, "total"))
);
AggregationResults<ReportRow> results =
    mongoTemplate.aggregate(agg, "orders", ReportRow.class);`,
    image: '/java-notes/mongodb-spring-boot-p4.jpg',
    imageAlt:
      'MongoDB + Spring Boot performance, indexing and query tuning — index types table (single field, compound, multikey, text, TTL, partial) with use cases, index rules (index filtered/sorted fields, compound as equality then sort then range, review explain plans), annotation examples for unique/compound/text/TTL indexes, query tuning tips (projections, paging, aggregation, limited $lookup), Spring Data projection and aggregation examples, and scaling notes on replica sets, shard keys and document size',
  },
  {
    id: 'mongodb-properties',
    title: 'Spring Boot MongoDB Properties & URI Options',
    content:
      "**Spring Boot properties** (`spring.data.mongodb.*`):\n- `uri` — the full connection string (usually preferred over host/port); use it for Atlas and advanced options (pooling, timeouts, TLS, read preference).\n- `database` — the default database name.\n- `authentication-database` — the auth database when credentials live in a separate database (e.g. `admin`).\n- `auto-index-creation` — whether annotated indexes are auto-created; usually `false` in production (create and review indexes deliberately).\n- `uuid-representation` — how UUIDs are encoded (BSON representation); keep `standard` and consistent across services.\n- `field-naming-strategy`, `gridfs.bucket`, `repositories.type` — override only when you need a custom naming convention, a separate GridFS bucket, or a non-auto repository mode.\n\n**Common URI options** — `retryWrites=true` (retry idempotent writes on network errors), `w=majority` (write concern for durability), `appName=shop-service` (shown in Mongo logs for observability), `maxPoolSize` / `minPoolSize` (connection pool sizing), `connectTimeoutMS` / `socketTimeoutMS` / `serverSelectionTimeoutMS` (timeouts), `readPreference` (route reads to primary or primaryPreferred), `readConcernLevel` (read consistency), and `tls=true` (always enable in production).\n\n**Property rules** — prefer the `uri` property for flexibility, externalize secrets (env / secret manager, never commit passwords), tune pool and timeouts based on real load tests, keep write concern intentional (balance durability and latency), and document all non-default settings across environments.",
    code: `# Sample application.yml
spring:
  data:
    mongodb:
      uri: mongodb+srv://user:***@cluster0.example.mongodb.net/shop?retryWrites=true&w=majority&appName=shop-service
      database: shop
      auto-index-creation: false
      uuid-representation: standard

# Key connection URI options
#   retryWrites=true            -> retry idempotent writes on network errors
#   w=majority                  -> durable write concern
#   appName=shop-service        -> shown in Mongo logs / monitoring
#   maxPoolSize / minPoolSize   -> connection pool sizing
#   connectTimeoutMS            -> time to establish a connection
#   socketTimeoutMS             -> max idle time for a socket
#   serverSelectionTimeoutMS    -> time to select a server
#   readPreference=primary      -> route reads (primary / primaryPreferred)
#   readConcernLevel=majority   -> read consistency level
#   tls=true                    -> always enable in production`,
    image: '/java-notes/mongodb-spring-boot-p5.jpg',
    imageAlt:
      'Spring Boot MongoDB properties explained — a sample application.yml, a table of spring.data.mongodb properties (uri, database, authentication-database, auto-index-creation, uuid-representation, field-naming-strategy, gridfs.bucket, repositories.type) with what each does and a production note, a table of common connection URI options (retryWrites, w=majority, appName, maxPoolSize, minPoolSize, timeouts, readPreference, readConcernLevel, tls) and property rules (prefer uri, externalize secrets, tune pool/timeouts, intentional write concern, document non-defaults)',
  },
  {
    id: 'mongodb-production-readiness',
    title: 'Production Readiness — Transactions, Security & Checklist',
    content:
      "**Consistency & transactions** — single-document writes are **atomic**; use multi-document transactions only when needed. Spring Data MongoDB supports transactions with `TransactionTemplate` / `TransactionalOperator`, they require the right cluster setup (a replica set), and you should design to keep transaction scope small.\n\n**Write / read settings** — **Write Concern** controls the acknowledgment level (use `majority` for durability); **Read Concern** defines the isolation level (use `majority` for consistent reads); **Read Preference** chooses primary, secondary, nearest or tag sets to balance load. Primary reads matter when you need the latest data (e.g. right after writes) or strict consistency.\n\n**Security** — use SCRAM or platform auth, enable TLS, use least-privilege users, never hardcode secrets, restrict network access, and rotate credentials.\n\n**Observability** — monitor the connection pool, command latency, slow queries, index usage, replication lag, disk and memory; use logs, metrics, tracing and MongoDB/Atlas monitoring; and review `explain` plans.\n\n**Backup & operations** — run regular backup and restore drills, define a TTL and archival strategy, review indexes and schema growth periodically, perform rolling upgrades, and plan capacity with alerts.\n\n**Spring Boot production checklist:**\n- Connection URI externalized (no secrets in code).\n- Indexes reviewed and in place; auto-index creation policy decided.\n- Projections used to limit data transfer.\n- Transactions used minimally and scoped.\n- Connection pool and timeouts tested.\n- Monitoring, metrics and alerts enabled.\n- Backup and restore tested.\n- Security hardened (auth, TLS, network).\n- Realistic load test completed.\n\n**Remember:** model for access patterns, keep documents bounded, embed intentionally, index deliberately, and measure before scaling.",
    code: `// Multi-document transaction (requires a replica set)
@Configuration
@EnableMongoAuditing
class MongoConfig {
    @Bean
    MongoTransactionManager transactionManager(MongoDatabaseFactory factory) {
        return new MongoTransactionManager(factory);
    }
}

@Service
class TransferService {
    private final TransactionTemplate tx;
    private final AccountRepository accounts;

    void transfer(String from, String to, BigDecimal amount) {
        tx.executeWithoutResult(status -> {
            accounts.debit(from, amount);
            accounts.credit(to, amount);
        });
    }
}`,
    image: '/java-notes/mongodb-spring-boot-p6.jpg',
    imageAlt:
      'MongoDB + Spring Boot production readiness — consistency and transactions (single-document atomic writes, multi-document transactions only when needed with TransactionTemplate on a replica set, small scope), write/read settings (Write Concern majority, Read Concern majority, Read Preference), security (SCRAM auth, TLS, least-privilege users, no hardcoded secrets, network restriction, credential rotation), observability, backup and operations, a ten-item Spring Boot production checklist, and a remember panel (model for access patterns, bounded documents, intentional embedding and indexing, measure before scaling)',
  },
];

// Module 34 — Spring Security Basics
const SPRING_SECURITY_SECTIONS = [
  {
    id: 'spring-security-overview',
    title: 'Spring Security — Core Concepts, Request Flow & Real-World Use',
    content:
      "**Spring Security** is a powerful and highly customizable security framework for Java applications. It provides authentication, authorization, and protection against common attacks with minimal configuration — robust authentication & authorization, protection against vulnerabilities, and easy integration with the Spring ecosystem.\n\n**Core concepts:**\n- **Authentication** — verifies who the user is. Example: login with username & password, JWT token validation.\n- **Authorization** — determines what the user is allowed to do. Example: role-based access to APIs and resources.\n- **Principal** — the currently authenticated user or entity. Example: a `UserDetails` object.\n- **Security Filter Chain** — a chain of filters that secures every request. Example: `AuthenticationFilter`, `AuthorizationFilter`.\n- **UserDetailsService** — loads user-specific data from a data source. Example: load a user from the database.\n\n**How it works — the request flow:**\n1. **User Sends Request** — a request to a secured endpoint.\n2. **Security Filter Chain** — the request passes through Spring Security's filters.\n3. **Authentication** — the user is authenticated (Form Login / Basic Auth / JWT / OAuth2).\n4. **Authorization** — access is granted or denied based on roles/permissions.\n5. **Resource Access** — if authorized, the resource is returned to the user.\n\n**Real-time use cases:**\n- **E-commerce platform** — secure user login, role-based access (ADMIN, SELLER, CUSTOMER), secure orders, payments & user data.\n- **Banking applications** — strong customer authentication, transaction authorization, and compliance enforcement.\n- **SaaS applications** — multi-tenant access control, user roles, and subscription-based feature access.\n- **Enterprise systems** — secure internal APIs, dashboards, and sensitive business data with granular permissions.\n- **Mobile applications** — secure REST APIs with JWT/OAuth2, refresh tokens, and role-based access control.\n\n**Key features:** comprehensive security (authentication, authorization & protection); password security (built-in `PasswordEncoder` — BCrypt, Argon2, PBKDF2, SCrypt); role-based access (fine-grained access control with roles & permissions); CSRF protection (against Cross-Site Request Forgery attacks); session management (control sessions, timeouts & session fixation protection).\n\n**Technologies & integrations:** Spring Boot, JWT, OAuth2, SAML 2.0, LDAP.\n\n**Remember:** secure your application, build trust, deliver confidence.",
    image: '/java-notes/spring-security-overview.jpg',
    imageAlt:
      'Spring Security — secure, scalable, trusted: what Spring Security is, core concepts (Authentication, Authorization, Principal, Security Filter Chain, UserDetailsService), how it works / request flow (User Sends Request, Security Filter Chain, Authentication, Authorization, Resource Access), real-time use cases (e-commerce, banking, SaaS, enterprise systems, mobile applications), key features (comprehensive security, password security, role-based access, CSRF protection, session management), and technologies & integrations (Spring Boot, JWT, OAuth2, SAML 2.0, LDAP)',
  },
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
      "A **message queue** is asynchronous service-to-service communication: a **Producer** puts a message on the queue and a **Consumer** reads it when ready.\n\nWhy queues: **decoupling** (services don't call each other directly), **time decoupling** (consumer can be offline and catch up), **scalability** (add consumers), and **fault tolerance** (messages persist until processed). They're the foundation of event-driven architecture — e.g. order placed → queue → send notification.\n\n**The problem with synchronous communication:** in a synchronous flow, every service call waits for the previous one to complete — e.g. an Order Service calling Payment, Inventory, Email, Notification, and Analytics services directly. This means the slowest service delays everyone, services are tightly coupled, users get a poor experience, and a failure in one service affects all of them.\n\nIf one service is slow or down, the entire request is delayed or fails: Order Service → Email Service → Waiting... → Timeout / Failure. Effects: high latency for the user, cascading failures, blocked threads/resources, and lower throughput.\n\n**Queue-based architecture:** instead of calling every service directly, publish a message to a queue — the Order Service publishes an event to a Message Queue, which fans out to the Payment, Email, Inventory, and Analytics services. This gives asynchronous processing, loose coupling, independent consumers, better reliability & scalability, and a fast response for users. If a service is down, messages simply stay in the queue and are processed once it's back.\n\n**Why message queues?**\n- **Decoupling** — services don't depend on each other's response time.\n- **Reliability** — if a consumer is unavailable, messages wait in the queue and are not lost.\n- **Scalability** — add more consumers (workers) to handle higher traffic.\n- **Better user experience** — users receive a response immediately; non-critical work happens in the background.\n- **Cost effective** — optimizes resource usage and reduces unnecessary retries and overhead.\n\n**Real-world example — placing an order on Amazon:** the response to the user (\"Order Placed Successfully\") happens immediately, while behind the scenes the system asynchronously handles payment processing, inventory updates, shipping & logistics, email notifications, invoice generation, recommendation updates, and analytics & reporting.\n\n**Synchronous vs Queue-based, at a glance:**\n- **Communication** — Synchronous: blocking; Message Queue: asynchronous.\n- **Coupling** — Synchronous: tight; Message Queue: loose.\n- **Error handling** — Synchronous: hard (cascades); Message Queue: easy (isolated).\n- **Scalability** — Synchronous: difficult; Message Queue: easy (add consumers).\n- **User experience** — Synchronous: slower; Message Queue: faster.\n\n**Complete flow, at a high level:** Client → Order Service → publish event → Message Queue → Consumers → external services process independently → done.\n\n**Key takeaway:** message queues don't make systems faster by themselves — they make systems more resilient, scalable, and loosely coupled. Instead of waiting for every task to finish, applications acknowledge the request quickly and process non-critical work asynchronously. Message queues don't eliminate work — they move it out of the user's critical path.",
    image: '/java-notes/why-message-queues.jpg',
    imageAlt:
      'Day 41 Phase 2B — Why Message Queues? The problem with synchronous communication (every service call waits for the previous one, slowest service delays everyone, tight coupling, failure in one service affects all); the problem when a service is slow or down (waiting, timeout/failure, high latency, cascading failures, blocked threads, lower throughput); queue-based architecture (publish an event to a message queue instead of calling every service directly, asynchronous processing, loose coupling, independent consumers, fast response, messages stay in the queue if a service is down); why message queues (decoupling, reliability, scalability with worker consumers, better user experience, cost effective); a real-world Amazon order example (immediate response to the user, asynchronous payment/inventory/shipping/email/invoice/recommendation/analytics processing behind the scenes); a synchronous vs queue-based comparison (communication, coupling, error handling, scalability, user experience); the complete high-level flow (client → order service → publish event → message queue → consumers → external services → process independently → done); and the key takeaway that message queues make systems more resilient, scalable, and loosely coupled rather than simply faster',
  },
  {
    id: 'kafka-basic-architecture',
    title: 'Apache Kafka — Basic Architecture',
    content:
      "Apache Kafka's building blocks, end to end: **Producers → Kafka Cluster (Brokers) → Consumers**.\n\n**Producers** — services that publish messages, e.g. an Order Service, Payment Service, or User Service. Producers send messages to a **Topic**.\n\n**Kafka Cluster (Brokers)** — a topic (e.g. `orders`) is split into **partitions** (Partition 0, Partition 1, Partition 2…). Each partition is an ordered, append-only log of numbered messages (0, 1, 2, 3, 4…). Partitions are distributed across **Brokers** (Broker 1, Broker 2, Broker 3…) in the cluster, which is how Kafka spreads load and scales horizontally.\n\n**Consumers** — downstream services (e.g. an Email Service, Notification Service, Inventory Service) read messages from the topic's partitions.\n\n**The flow:** Producer → Topic → Broker → Consumer. A producer sends a message to a topic; the topic's partitions live on brokers in the cluster; consumers read from those partitions to do their own work — independently and at their own pace.",
    image: '/java-notes/apache-kafka-basic-architecture.jpg',
    imageAlt:
      'Apache Kafka — Basic Architecture: Producers (Order Service, Payment Service, User Service) send messages to a Kafka Cluster of Brokers. Inside the cluster, a Topic named "orders" is split into Partition 0, Partition 1, and Partition 2, each holding an ordered, numbered sequence of messages (0, 1, 2, 3, 4…); the partitions are distributed across Broker 1, Broker 2, and Broker 3. Consumers (Email Service, Notification Service, Inventory Service) read from the brokers. A "The Flow" strip summarizes it as Producer → Topic → Broker → Consumer.',
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
  {
    id: 'ibm-mq-vs-kafka',
    title: 'IBM MQ vs Kafka — Choosing the Right Messaging Platform',
    content:
      "Choosing the right messaging platform for **transactional workloads**: IBM MQ is built for transactions & reliability; Kafka is built for throughput & streaming.\n\n**IBM MQ:**\n- **XA (Two-Phase Commit)** — supports XA (2PC) across multiple resources (DB, JMS, IBM MQ). Either everything commits, or everything rolls back — that's the power of XA. A single transaction can span the application, a database, and other resources, coordinated through IBM MQ.\n- **Guaranteed Delivery** — persistent messages survive crashes and restarts; rollback returns uncommitted messages.\n- **Exactly-Once Processing** — transactional sessions ensure no duplicates and no message loss.\n- **Enterprise Reliability** — High Availability, Disaster Recovery, Journaling, JMS Transactions, XA Integration.\n- **Built for Mission-Critical Workloads** — ideal for banking, payments, order management, insurance, healthcare.\n\n**Kafka:**\n- **No XA / Distributed Transaction Support** — Kafka transactions are limited to Kafka itself, not across multiple resources.\n- **At-Least-Once / Exactly-Once (Kafka-scoped)** — duplicates can happen during failures or retries outside Kafka.\n- **Log-Based Storage** — designed for high throughput and large scale, not for transactional guarantees.\n- **Event Streaming Focus** — great for real-time pipelines, analytics, event replay, and data streaming.\n- **Not Ideal for ACID Workflows** — requires additional patterns for consistency across systems.\n\n**Choose IBM MQ when:** transactional integrity, guaranteed delivery, distributed transactions, and enterprise reliability are non-negotiable.\n\n**Choose Kafka when:** your priority is high throughput, scalability, event streaming, real-time analytics, and horizontal scaling.",
    image: '/java-notes/ibm-mq-vs-kafka.jpg',
    imageAlt:
      'IBM MQ vs Kafka: choosing the right messaging platform for transactional workloads. IBM MQ — built for transactions & reliability: XA (Two-Phase Commit) support across multiple resources, guaranteed delivery with persistent messages, exactly-once processing, enterprise reliability (HA, Disaster Recovery, Journaling, JMS Transactions, XA Integration), built for mission-critical workloads (banking, payments, order management, insurance, healthcare) — an application, IBM MQ, a database, and other resources where either everything commits or everything rolls back. Kafka — built for throughput & streaming: no XA/distributed transaction support, at-least-once/exactly-once but Kafka-scoped, log-based storage for high throughput, event streaming focus for real-time pipelines and analytics, not ideal for ACID workflows. Ends with when to choose each platform.',
  },
];

// Deeper Kafka internals — distilled from a "Kafka with Spring Boot" reference
// (public/java-notes/kafka-with-spring-boot.pdf). Complements MESSAGING_SECTIONS
// above (which covers the why/architecture-diagram level) with offsets & consumer
// groups, replication/fault-tolerance, ZooKeeper's role, and hands-on CLI commands.
const KAFKA_DEEP_DIVE_SECTIONS = [
  {
    id: 'kafka-offsets-consumer-groups',
    title: 'Offsets & Consumer Groups',
    content:
      "Inside each partition, messages are stored in **strict order**, and Kafka assigns each one a unique, ever-increasing number called an **offset** — the message's position within that partition.\n\nOffsets matter because Kafka **doesn't delete a message once it's consumed** — unlike a traditional queue. Instead, each **consumer** tracks which offset it has already read up to. This design has two big payoffs: it's cheap (no per-message delete), and a consumer can **re-read** messages from an earlier offset if needed (e.g. after a bug fix, replaying the last hour of events).\n\nConsumers pull data — they aren't pushed to — and they're usually organized into **consumer groups**: a logical set of consumers cooperating to process one topic's partitions. Consumer groups are the main reason Kafka scales so well — add more consumers to a group under load, and Kafka **automatically rebalances** which partitions each consumer owns, so throughput grows without any code change.",
  },
  {
    id: 'kafka-replication-leader-follower',
    title: 'Replication, Leader–Follower & Fault Tolerance',
    content:
      "Kafka assumes **failures are normal** — servers crash, disks fail, networks go down — and is built so data survives them anyway. The mechanism is **replication** plus a **leader–follower** model.\n\nEach partition can have multiple copies, called **replicas**, spread across different brokers. For every partition, Kafka designates one broker as the **leader** — it alone handles all reads and writes for that partition, giving one consistent source of truth. The other replicas are **followers**: they don't serve client requests directly, they just continuously copy the leader's messages in the same order, trying to stay in sync.\n\nFollowers that are fully caught up are called **in-sync replicas (ISR)**. If the leader's broker crashes, Kafka automatically promotes one of the in-sync followers to be the new leader — no manual intervention, and because only in-sync replicas are eligible, the new leader always has the latest committed data. From the outside, this failover is nearly invisible: producers and consumers keep working without needing to know which broker is currently the leader. Replication also spreads disk and network load across brokers, which is part of how Kafka scales to very large data volumes.",
  },
  {
    id: 'kafka-zookeeper-role',
    title: "ZooKeeper's Role in Kafka (3.x vs 4.x)",
    content:
      "A Kafka cluster is many brokers working together, and something has to coordinate them — that's **ZooKeeper**, in Kafka 3.x and earlier.\n\nZooKeeper runs as its **own separate system** alongside the Kafka brokers. It doesn't store any actual Kafka messages — only **metadata**, i.e. information about the cluster itself:\n\n- **Cluster management** — every broker registers with ZooKeeper on startup; if a broker stops or crashes, ZooKeeper detects it and updates the cluster view, so Kafka always knows which brokers are alive.\n- **Leader election** — when a partition's leader broker fails, ZooKeeper helps Kafka pick a new leader from the in-sync replicas.\n- **Configuration & metadata storage** — topics, partitions, replication details, and access-control info, giving every broker a consistent view of the cluster.\n\nBecause ZooKeeper is itself a distributed system that must be installed, configured, and monitored separately, it adds real operational overhead. **Kafka 4.x and later removes this dependency** — cluster metadata is managed internally by Kafka itself (via KRaft), keeping the same core concepts (brokers, partitions, leaders, replicas) while simplifying operations.",
  },
  {
    id: 'kafka-cli-cheatsheet',
    title: 'Running Kafka Locally — CLI Cheat Sheet (3.x, Windows)',
    content:
      "A minimal hands-on flow for running Apache Kafka 3.x on a local machine, straight from the `bin/windows` scripts in the downloaded Kafka folder — useful for trying out topics, partitions, and replication before wiring up a Spring Boot producer/consumer.\n\nIn 3.x, **ZooKeeper must be started first** — Kafka brokers depend on it for metadata, broker registration, and leader election — then one or more brokers, each on its own `server*.properties` file (multiple brokers = one Kafka cluster). By default, a broker listens on **port 9092** and registers itself with ZooKeeper.\n\nFrom there, `kafka-topics.bat` lists, creates, and describes topics (with partition count, leader broker, replicas, and in-sync replicas), while `kafka-console-producer.bat` / `kafka-console-consumer.bat` let you push and pull messages directly from the command line — including reading from just one specific partition — which is the fastest way to see offsets and partition-wise data in action.",
    code: "REM Start ZooKeeper (must run before any broker)\n.\\bin\\windows\\zookeeper-server-start.bat .\\config\\zookeeper.properties\n\nREM Start a Kafka broker (default port 9092, registers with ZooKeeper)\n.\\bin\\windows\\kafka-server-start.bat .\\config\\server.properties\n\nREM Start additional brokers to form a cluster\n.\\bin\\windows\\kafka-server-start.bat .\\config\\server-1.properties\n.\\bin\\windows\\kafka-server-start.bat .\\config\\server-2.properties\n\nREM List all topics\n.\\bin\\windows\\kafka-topics.bat --list --bootstrap-server localhost:9092\n\nREM Create a topic (1 partition by default)\n.\\bin\\windows\\kafka-topics.bat --create --topic topicName --bootstrap-server localhost:9092\n\nREM Create a topic with 3 partitions and replication factor 3\n.\\bin\\windows\\kafka-topics.bat --create --topic topicName --partitions 3 --replication-factor 3 --bootstrap-server localhost:9092\n\nREM Describe a topic (partition count, leader, replicas, ISR)\n.\\bin\\windows\\kafka-topics.bat --describe --topic topicName --bootstrap-server localhost:9092\n\nREM Start a producer (type messages, Enter sends each as a Kafka message)\n.\\bin\\windows\\kafka-console-producer.bat --topic topicName --bootstrap-server localhost:9092\n\nREM Start a consumer that reads every message from the beginning\n.\\bin\\windows\\kafka-console-consumer.bat --topic topicName --bootstrap-server localhost:9092 --from-beginning\n\nREM Read only from partition 0\n.\\bin\\windows\\kafka-console-consumer.bat --topic topicName --partition 0 --from-beginning --bootstrap-server localhost:9092",
  },
];

// Module — Spring Core & IoC — distilled from a 165-page "Spring Core & Spring Boot
// with Microservices" reference (public/java-notes/spring-core-boot-microservices-notes.pdf).
// Focused on the XML-configuration side of Spring Core that the annotation-first
// Spring Boot Fundamentals module above doesn't cover.
const SPRING_CORE_IOC_SECTIONS = [
  {
    id: 'xml-bean-configuration',
    title: 'XML-Based Bean Configuration',
    content:
      "Before annotations, Spring beans were wired entirely in a separate **XML configuration file** (e.g. `myappconfig.xml`) using the `<bean>` tag — and the mechanics still explain a lot about how DI works under the hood.\n\nEach `<bean id=\"...\" class=\"...\">` declares one bean. Two ways to inject dependencies into it:\n\n- **Setter injection** — a `<property name=\"...\" value=\"...\">` tag for each setter, matched by the property's variable name.\n- **Constructor injection** — a `<constructor-arg value=\"...\">` per constructor parameter, either **by position** or — safer — using the `index` attribute, so reordering constructor parameters later can't silently swap the wrong values in.\n\nTo inject **one bean into another** (not just a primitive value), use `ref` instead of `value`: `<property name=\"engine\" ref=\"myEngine\"/>`. The container resolves `myEngine` to the actual bean object before wiring it in.",
    code: "<!-- myappconfig.xml -->\n<beans xmlns=\"http://www.springframework.org/schema/beans\" ...>\n\n    <bean id=\"myEngine\" class=\"finance.loandept.model.Engine\">\n        <property name=\"engNo\" value=\"102de\" />\n        <property name=\"engineModel\" value=\"suzuki-itch\" />\n    </bean>\n\n    <!-- Setter injection: <property> + ref -->\n    <bean id=\"myCar\" class=\"finance.loandept.model.Car\">\n        <property name=\"engine\" ref=\"myEngine\" />\n    </bean>\n\n    <!-- Constructor injection: <constructor-arg>, index avoids ordering mistakes -->\n    <bean id=\"myCar2\" class=\"finance.loandept.model.Car\">\n        <constructor-arg index=\"0\" ref=\"myEngine\" />\n    </bean>\n\n</beans>",
  },
  {
    id: 'applicationcontext-vs-beanfactory',
    title: 'ApplicationContext vs BeanFactory — Eager vs Lazy Loading',
    content:
      "Spring's XML era offered two ways to load that configuration file, and the difference still shows up as the eager-vs-lazy bean question today:\n\n- **`ApplicationContext`** (via `ClassPathXmlApplicationContext`) — **eager loading**. Every bean is created the moment the container starts, whether or not it's used yet. This is the recommended, default approach.\n- **`BeanFactory`** (via `XmlBeanFactory`, now deprecated) — **lazy loading**. A bean is only created the first time `getBean()` is called for it.\n\n`ApplicationContext` is the interface actually used in real projects — `BeanFactory` is mostly historical, but the eager/lazy distinction it introduced lives on in `@Lazy` and `lazy-init` today.",
    code: "// Eager loading -- every bean created at startup\nApplicationContext context =\n    new ClassPathXmlApplicationContext(\"myconfig.xml\");\nCar car = (Car) context.getBean(\"car\");\n\n// Lazy loading -- bean created only on first getBean() call (legacy, deprecated)\nBeanFactory factory = new XmlBeanFactory(\n    new ClassPathResource(\"myconfig.xml\"));\nCar car2 = (Car) factory.getBean(\"car\");",
  },
  {
    id: 'xml-collection-injection',
    title: 'Injecting Collections — List, Set & Map via XML',
    content:
      "A single dependent object is easy — `ref` handles it. But a field like `private Set<Engine> engines` or `private Map<String, Engine> engines` needs its own XML syntax:\n\n- **`<set>`** — wraps multiple `<ref bean=\"...\"/>` entries for a `Set<T>` field.\n- **`<map>`** — wraps `<entry key=\"...\" value-ref=\"...\"/>` pairs for a `Map<K, V>` field.\n\nThe same pattern works whether you're injecting via setter (`<property>`) or constructor (`<constructor-arg>`) — only the outer wrapper tag changes.",
    code: "<bean id=\"mycar\" class=\"finance.loandept.model.Car\">\n    <property name=\"engine\">\n        <set>\n            <ref bean=\"myeng1\" />\n            <ref bean=\"myeng2\" />\n            <ref bean=\"myeng3\" />\n        </set>\n    </property>\n</bean>\n\n<bean id=\"mycar2\" class=\"finance.loandept.model.Car\">\n    <property name=\"engine\">\n        <map>\n            <entry key=\"old-engine\" value-ref=\"myeng1\" />\n        </map>\n    </property>\n</bean>",
  },
];

// Module — Dependency Injection — autowiring mechanics that complement the
// constructor/setter/field DI already covered in Spring Boot Fundamentals above.
const DEPENDENCY_INJECTION_SECTIONS = [
  {
    id: 'autowiring-byname-bytype-constructor',
    title: 'Autowiring — byName, byType & Constructor',
    content:
      "Manually wiring every bean with `<ref>` is fine for a handful of objects, but doesn't scale — 50 dependencies means 50 hand-written `<property>`/`ref` pairs. **Autowiring** asks the IoC container to resolve dependencies for you, in one of three modes (set via the `autowire` attribute on the XML `<bean>` tag):\n\n- **`byName`** — matches the dependent **property name** in the class against a **bean id** in the config. If a bean with that exact id exists, it's injected via the setter.\n- **`byType`** — matches the dependent **property's type** against a **bean's class**. Simpler (any bean id works), but throws `NoSuchBeanDefinitionException`/ambiguity if more than one bean of that type exists.\n- **`constructor`** — same type-matching as `byType`, but via the constructor. If more than one bean of the same type exists, it falls back to matching the **constructor parameter name** against a bean id.\n\nAnnotation-based `@Autowired` (see Spring Boot Fundamentals) behaves like `byType` first, falling back to `byName` automatically if more than one bean of that type exists — one annotation replaces having to pick a mode in XML.",
    code: "<!-- autowire=\"byName\": property name 'engine' must match a bean id 'engine' -->\n<bean id=\"engine\" class=\"finance.loandept.model.Engine\" />\n<bean id=\"car\" class=\"finance.loandept.model.Car\" autowire=\"byName\" />\n\n<!-- autowire=\"byType\": any bean id works, but only ONE bean of that class may exist -->\n<bean id=\"tataeng\" class=\"finance.loandept.model.Engine\" />\n<bean id=\"car\" class=\"finance.loandept.model.Car\" autowire=\"byType\" />\n\n<!-- autowire=\"constructor\": type match first, then constructor-param-name vs bean id -->\n<bean id=\"nexoneng\" class=\"finance.loandept.model.Engine\" />\n<bean id=\"car\" class=\"finance.loandept.model.Car\" autowire=\"constructor\" />",
  },
  {
    id: 'qualifier-vs-primary',
    title: '@Qualifier vs @Primary — Resolving Ambiguous Beans',
    content:
      "When two or more beans of the **same type** exist, `@Autowired` alone can't decide which one to inject — two annotations resolve the conflict, and they have a strict precedence order:\n\n- **`@Qualifier(\"bean-name\")`** — placed alongside `@Autowired`, forces a match against a specific bean **name**, regardless of the field's property name.\n- **`@Primary`** — placed on the `@Bean`/`@Component` definition itself, marks it as the **default** choice whenever there's a type conflict and no `@Qualifier` is present.\n\n**Precedence when both are used:** `@Qualifier` always wins over `@Primary` — an explicit \"inject this exact bean\" request always beats a bean merely marked as the default.",
    code: "@Configuration\npublic class AppConfig {\n\n    @Bean(\"dept\")\n    @Primary // default choice on type conflict\n    public Department department() {\n        Department d = new Department();\n        d.setDeptName(\"Engineering\");\n        return d;\n    }\n\n    @Bean(\"dept1\")\n    public Department department1() {\n        Department d = new Department();\n        d.setDeptName(\"Software\");\n        return d;\n    }\n}\n\n@Component\npublic class Employee {\n    @Autowired\n    @Qualifier(\"dept1\") // wins over @Primary above\n    private Department department;\n}",
  },
  {
    id: 'bean-scope-loading-matrix',
    title: 'Bean Scope × Loading — Singleton/Prototype and Eager/Lazy',
    content:
      "Two independent switches control how many bean instances exist and when they're created — and it's the **combination** of the two that trips people up:\n\n- **Scope — `singleton`** (default): one shared instance per `ApplicationContext`; every `getBean()` call for the same id returns the exact same object.\n- **Scope — `prototype`** (`@Scope(\"prototype\")`): a **new** instance is created on **every** `getBean()` call, regardless of loading mode.\n- **Loading — eager** (default): the bean is created the moment the `ApplicationContext` is built.\n- **Loading — lazy** (`@Lazy` / `lazy-init=\"true\"`): the bean is created only the first time it's actually requested via `getBean()`.\n\n**The three cases that matter in practice:** *Singleton + Eager* — one instance, created at startup, reused forever. *Singleton + Lazy* — still one instance, but creation is deferred until the first `getBean()` call. *Prototype + Eager* — \"eager\" has no real effect here, because prototype beans are, by definition, only ever created on `getBean()` — there's no single \"startup instance\" to create ahead of time.",
    code: "@Configuration\npublic class AppConfig {\n\n    @Bean\n    @Lazy // Singleton (default scope) + Lazy loading\n    public Employee employee() {\n        return new Employee();\n    }\n\n    @Bean\n    @Scope(\"prototype\") // new instance on every getBean() call\n    public Department department() {\n        return new Department();\n    }\n}",
  },
];

// Module — Spring Configuration — @Configuration/@Bean, profiles & property sources.
const SPRING_CONFIGURATION_SECTIONS = [
  {
    id: 'configuration-bean-annotations',
    title: '@Configuration & @Bean — Annotation-Based Config Without XML',
    content:
      "Annotation-based configuration replaces the separate XML file entirely: a plain Java class marked `@Configuration` becomes the configuration itself, and any method inside it marked `@Bean` is called once by the container, with its return value registered as a bean — the **method name doubles as the bean id**.\n\nLoad it with `AnnotationConfigApplicationContext(AppConfig.class)` instead of `ClassPathXmlApplicationContext`.\n\n**`@ComponentScan`** is the annotation counterpart of manually declaring every bean — it tells Spring to also scan a package for `@Component`-annotated classes and register them automatically, so you don't need a `@Bean` method for every single class (only for ones that need custom construction logic, e.g. from a third-party library).",
    code: "@Configuration\n@ComponentScan(basePackages = \"com.codeminestech\")\npublic class AppConfig {\n\n    @Bean // method name \"employee\" becomes the bean id\n    public Employee employee() {\n        Employee emp = new Employee();\n        emp.setEmpId(101);\n        emp.setEname(\"akash\");\n        return emp;\n    }\n}\n\nApplicationContext context =\n    new AnnotationConfigApplicationContext(AppConfig.class);\nEmployee emp = (Employee) context.getBean(\"employee\");",
  },
  {
    id: 'properties-vs-yml',
    title: 'application.properties vs application.yml',
    content:
      "Both files configure a Spring Boot app, but they represent data differently:\n\n- **`application.properties`** — flat **key-value** pairs, one per line (`spring.mvc.view.prefix=/view/`). Only Java/Spring understands this format.\n- **`application.yml`** — **YAML** (Yet Another Markup Language), a **hierarchical** structure where shared prefixes (e.g. `spring.mvc.view.*`) are written once and nested underneath, making it more readable for deeply-nested config. YAML is understood by many languages, not just Java — and IDEs can auto-convert a `.properties` file to `.yml` with one click.\n\nBe careful with **indentation** in YAML — spacing is significant and a misaligned key silently breaks the hierarchy.",
    code: "# application.properties\nspring.mvc.view.prefix=/view/\nspring.mvc.view.suffix=.jsp\n\n# application.yml -- same config, hierarchical\nspring:\n  mvc:\n    view:\n      prefix: /view/\n      suffix: .jsp",
  },
  {
    id: 'spring-profiles',
    title: 'Spring Profiles — Environment-Specific Configuration',
    content:
      "Real applications run in several environments — **dev, test, uat, prod** — each needing its own database URL, credentials, and settings. Editing one shared config file by hand for every environment is error-prone; **Profiles** solve it properly.\n\n- For `.properties`: create one file per environment — `application-dev.properties`, `application-test.properties`, `application-prod.properties` — alongside the base `application.properties`.\n- For `.yml`: a **single file** can hold every profile's config, separated by `---` (three dashes), which prevents duplicate-property clashes between blocks.\n\nWhichever format you use, the **base file** decides which profile is active: `spring.profiles.active=test`. Common, shared settings stay in the base file (loaded first, always); only the environment-specific values (datasource URL, credentials) go in the per-profile block.",
    code: "# application.yml -- one file, multiple profiles\nspring:\n  profiles:\n    active: dev\n---\nspring:\n  config:\n    activate:\n      on-profile: dev\n  datasource:\n    url: jdbc:mysql://localhost:3306/devdb\n---\nspring:\n  config:\n    activate:\n      on-profile: prod\n  datasource:\n    url: jdbc:mysql://localhost:3306/proddb",
  },
];

// Module — Spring MVC & Testing — the MVC request-handling half of this module
// (JUnit / @SpringBootTest are covered separately, elsewhere in the track).
const SPRING_MVC_TESTING_SECTIONS = [
  {
    id: 'spring-mvc-architecture',
    title: 'Spring Web MVC Architecture',
    content:
      "Every request into a Spring MVC app passes through the same five actors, in order:\n\n1. **DispatcherServlet** (the Front Controller) — receives every incoming HTTP request first, and pre-/post-processes it.\n2. **HandlerMapping** — identifies **which controller method** should handle this specific request.\n3. **Controller** — executes the business logic and returns a `ModelAndView` (data + a logical view name).\n4. **ViewResolver** — translates that logical view name into the view file's **physical location** in the project.\n5. **View** — renders the model data into the final response (HTML, JSON, etc.), sent back through the DispatcherServlet.\n\nIf a controller method is annotated `@ResponseBody` (or the class is `@RestController`), steps 4–5 are skipped entirely — the returned value is written directly to the response body, with no view file involved.",
    code: "@Controller\npublic class MyFirstController {\n\n    @GetMapping(\"/welcome\")\n    public ModelAndView displayWelcome() {\n        ModelAndView mav = new ModelAndView();\n        mav.addObject(\"msg\", \"Welcome to codeminestech!\");\n        mav.setViewName(\"welcome\"); // resolved to /view/welcome.jsp\n        return mav;\n    }\n\n    // @Controller + @ResponseBody = @RestController -- response sent directly,\n    // no ViewResolver / view file involved\n    @GetMapping(\"/alldata\")\n    @ResponseBody\n    public String getUserData() {\n        return \"all users are very good..\";\n    }\n}",
  },
  {
    id: 'query-path-params-forms',
    title: 'Sending Data to a Controller — Query Params, Path Params & Forms',
    content:
      "Three ways for a browser to send data to a Spring MVC controller:\n\n- **Query Parameters** — key-value pairs at the **end** of the URL, starting with `?` and joined with `&` (`?name=java&fee=7999`). Read with `@RequestParam(\"name\")`. Best when retrieving results filtered by **multiple** optional criteria.\n- **Path Parameters** — data embedded **directly** in the URL path via a `{}` placeholder, no key-value pair. Read with `@PathVariable(\"name\")`. Best for looking up a **single, unique** resource (`/coursename/java`).\n- **Form data** — Spring's `form:` tag library binds an entire object to a `<form>` via `modelAttribute`, and each field to a property via `path` — so submitting the form populates a Java object automatically, no manual parameter-by-parameter reading required.\n\nBoth query and path params only carry **text** — never sensitive data (passwords, tokens) — since they're visible directly in the URL.",
    code: "// Query param: /coursename?name=angular\n@GetMapping(\"/coursename\")\npublic ModelAndView getCourse(@RequestParam(\"name\") String name) { ... }\n\n// Path param: /coursename/angular\n@GetMapping(\"/coursename/{name}\")\npublic ModelAndView getCourseByPath(@PathVariable(\"name\") String name) { ... }\n\n// Form binding\n@PostMapping(\"/user\")\npublic ModelAndView registerUser(User newuser) { // form:form modelAttribute=\"user\"\n    String msg = userService.saveUserData(newuser);\n    ModelAndView mav = new ModelAndView();\n    mav.addObject(\"msg\", msg);\n    mav.setViewName(\"index\");\n    return mav;\n}",
  },
  {
    id: 'thymeleaf-basics',
    title: 'Thymeleaf — A Faster Alternative to JSP',
    content:
      "JSP has a hidden cost: every JSP file is converted into a Servlet on the server before it can respond, adding overhead as the number of views grows. **Thymeleaf** is a modern template engine that processes HTML **directly**, with no such conversion step — Spring Boot auto-detects Thymeleaf templates in `src/main/resources/templates/*.html`, with no `ViewResolver` configuration needed.\n\nCore syntax, using the `xmlns:th=\"http://www.thymeleaf.org\"` namespace:\n\n- **`th:text=\"${variable}\"`** — renders a model attribute as text.\n- **`th:each=\"item : ${list}\"`** — iterates a list, exposing helper properties like `.index`, `.count`, `.even`/`.odd`, `.first`, `.last` on a companion `*Stat` variable.\n- **`th:if` / `th:unless`** — conditional rendering.\n- **`#strings`, `#numbers`, etc.** — built-in utility objects for calling Java class methods (`${#strings.toUpperCase(name)}`) directly in a template expression.",
    code: "<html xmlns:th=\"http://www.thymeleaf.org\">\n<body>\n    <h3>Name: <span th:text=\"${name}\"></span></h3>\n    <h3 th:text=\"${#strings.toUpperCase(name)}\"></h3>\n\n    <table border=\"1\">\n        <tr th:each=\"val, status : ${list}\">\n            <td th:text=\"${val.empId}\"></td>\n            <td th:style=\"${status.even} ? 'color:blue' : ''\"\n                th:text=\"${val.empName}\"></td>\n        </tr>\n    </table>\n</body>\n</html>",
  },
];

// Module — Distributed Tracing & Logging — Sleuth & Zipkin.
const DISTRIBUTED_TRACING_LOGGING_SECTIONS = [
  {
    id: 'sleuth-zipkin',
    title: 'Sleuth & Zipkin — Trace IDs, Span IDs & Distributed Log Tracing',
    content:
      "In a microservices system, one user action can fan out across five or six REST APIs — so a single log line from one service tells you almost nothing about the **overall** request. **Sleuth** and **Zipkin** solve this together:\n\n- **Sleuth** — a Spring Cloud library that generates a **trace-id** and a **span-id**, and attaches them to every log message and outgoing service call header (via MDC).\n  - **trace-id** — generated once per incoming request, and stays the **same** across every REST API involved in processing that one request.\n  - **span-id** — generated per REST API hop; if one request touches multiple services, each service call gets its own span-id, still tagged with the shared trace-id.\n- **Zipkin** — a server providing a **UI** to visualize the trace-id/span-id data Sleuth generates, so you can see exactly which downstream call in a chain took the most time.\n\nTogether, they give you **Distributed Log Tracing** — the ability to follow one logical request across every microservice it touched, and immediately spot which hop was slow. In Spring Boot 3.x, Sleuth is superseded by **Micrometer Tracing**, but the trace-id/span-id model is identical.",
    code: "// Spring Boot 2.x -- spring-cloud-starter-sleuth + spring-cloud-starter-zipkin\n@RestController\npublic class MyController {\n    Logger logger = LoggerFactory.getLogger(MyController.class);\n\n    @GetMapping(\"/all\")\n    public String getAll() {\n        logger.info(\"**** getAll execution started ****\"); // tagged with trace-id + span-id\n        String msg = \"Welcome to codeminestech...!!\";\n        logger.info(\"**** getAll execution ended ****\");\n        return msg;\n    }\n}\n\n// application.properties\nspring.zipkin.base-url=http://127.0.0.1:9411/\nspring.sleuth.sampler.probability=1.0\nspring.application.name=welcome",
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
      if (title === 'Introduction to Java & Setup') {
        lesson.sections = [...JDK_JRE_JVM_SECTIONS, ...(lesson.sections || [])];
        lesson.extraLinks = [
          ...(lesson.extraLinks || []),
          {
            label: 'Java & Spring Boot — 100 Interview Questions (PDF)',
            href: '/java-notes/java-and-spring-boot-100-interview-questions.pdf',
            icon: '📄',
          },
        ];
      }
      const java8NotesLink = {
        label: 'Java 8 Hand-Written Notes (PDF)',
        href: '/java-notes/java-8-hand-written-notes.pdf',
        icon: '📄',
      };
      if (title === 'Lambda Expressions') {
        lesson.pdfUrl = '/java-notes/java-8-hand-written-notes.pdf';
        lesson.pdfLabel = 'Java 8 Hand-Written Notes (PDF)';
      }
      if (title === 'Functional Interfaces') {
        lesson.extraLinks = [java8NotesLink];
      }
      if (title === 'Stream API') {
        lesson.extraLinks = [java8NotesLink];
      }
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
          {
            label: 'Three Spring Boot Concepts Every Developer Should Understand (PDF)',
            href: '/java-notes/three-spring-boot-concepts.pdf',
            icon: '📄',
          },
        ];
      }
      const springCoreNotesLink = {
        label: 'Spring Core, Boot & Microservices — Full Notes (PDF)',
        href: '/java-notes/spring-core-boot-microservices-notes.pdf',
        icon: '📄',
      };
      if (title === 'Spring Core & IoC') {
        lesson.sections = SPRING_CORE_IOC_SECTIONS;
        lesson.pdfUrl = '/java-notes/spring-core-boot-microservices-notes.pdf';
        lesson.pdfLabel = 'Spring Core, Boot & Microservices — Full Notes (PDF)';
      }
      if (title === 'Dependency Injection') {
        lesson.sections = DEPENDENCY_INJECTION_SECTIONS;
        lesson.extraLinks = [springCoreNotesLink];
      }
      if (title === 'Spring Configuration') {
        lesson.sections = SPRING_CONFIGURATION_SECTIONS;
        lesson.extraLinks = [springCoreNotesLink];
      }
      if (title === 'Spring MVC & Testing') {
        lesson.sections = SPRING_MVC_TESTING_SECTIONS;
        lesson.extraLinks = [springCoreNotesLink];
      }
      if (title === 'Distributed Tracing & Logging') {
        lesson.sections = DISTRIBUTED_TRACING_LOGGING_SECTIONS;
        lesson.extraLinks = [springCoreNotesLink];
      }
      if (title === 'OOP — Classes & Objects') {
        lesson.sections = [...JAVA_METHODS_SECTIONS, ...DEEP_SHALLOW_COPY_SECTIONS];
      }
      if (title === 'OOP — Inheritance & Polymorphism') {
        lesson.sections = ABSTRACTION_SECTIONS;
      }
      if (title === 'Design Patterns') {
        lesson.sections = DESIGN_PATTERNS_SECTIONS;
      }
      if (title === 'Factory Methods for Collections') {
        lesson.sections = JAVA_RECORDS_SECTIONS;
      }
      if (title === 'Process API & Improvements') {
        lesson.sections = JAVA_SEALED_CLASSES_SECTIONS;
      }
      if (title === 'Inter-Service Communication') {
        lesson.sections = SPRING_AI_SECTIONS;
      }
      if (title === 'Resilience Patterns') {
        lesson.sections = CIRCUIT_BREAKER_SECTIONS;
      }
      if (title === 'Java Internals') {
        lesson.sections = JAVA_INTERNALS_SECTIONS;
      }
      if (title === 'Building REST APIs') {
        lesson.sections = [...REST_API_SECTIONS, ...MAPSTRUCT_SECTIONS];
        lesson.extraLinks = [embarkxLink];
      }
      if (title === 'Spring Data JPA') {
        lesson.sections = [...SPRING_DATA_JPA_SECTIONS, ...MONGODB_SPRING_BOOT_SECTIONS];
        lesson.extraLinks = [
          embarkxLink,
          {
            label: '@Transactional Internal Working Cheat Sheet (PDF)',
            href: '/java-notes/transactional-internal-working-cheat-sheet.pdf',
            icon: '📄',
          },
        ];
        lesson.pdfUrl = '/java-notes/mongodb-spring-boot.pdf';
        lesson.pdfLabel = 'MongoDB + Spring Boot (PDF)';
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
        lesson.sections = [...MESSAGING_SECTIONS, ...KAFKA_DEEP_DIVE_SECTIONS];
        lesson.pdfUrl = '/java-notes/kafka-with-spring-boot.pdf';
        lesson.pdfLabel = 'Kafka with Spring Boot (PDF)';
        lesson.extraLinks = [embarkxLink];
      }
      if (title === 'Microservices Architecture') {
        lesson.pdfUrl = '/java-microservices-slides.pdf';
        lesson.pdfLabel = 'Microservices Slides (PDF)';
        lesson.sections = [...MICROSERVICES_DESIGN_SECTIONS, ...MICROSERVICES_CLASSIC_STACK_SECTIONS];
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
          'Classic stack: Zuul, Ribbon, Hystrix, Spring Cloud Bus',
        ];
        lesson.extraLinks = [
          {
            label: 'Design Patterns Slides — 749 pages (PDF)',
            href: '/microservices-design-slides.pdf',
            icon: '📄',
          },
          {
            label: 'Mastery in Microservices (PDF)',
            href: '/java-notes/mastery-in-microservices.pdf',
            icon: '📄',
          },
          {
            label: 'Spring Boot Microservices Handbook (PDF)',
            href: '/java-notes/spring-boot-microservices-handbook.pdf',
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
