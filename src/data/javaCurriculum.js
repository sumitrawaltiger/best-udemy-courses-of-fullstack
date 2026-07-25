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
        lesson.sections = [...JAVA_METHODS_SECTIONS, ...DEEP_SHALLOW_COPY_SECTIONS];
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
