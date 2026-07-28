// Top 50 Microservices interview questions — every backend developer should know.
// Source: "Top 50 Microservices Interview Questions" infographic (Spring Boot / Java / Docker).
// Each question: { id, category, question, answer }

export const MICROSERVICES_QUESTION_CATEGORIES = [
  { id: 'fundamentals', label: 'Fundamentals', icon: '🏛️' },
  { id: 'api-gateway', label: 'API Gateway', icon: '🌐' },
  { id: 'service-discovery', label: 'Service Discovery', icon: '🔍' },
  { id: 'communication', label: 'Communication', icon: '✉️' },
  { id: 'resilience', label: 'Resilience', icon: '🛡️' },
  { id: 'deployment', label: 'Deployment', icon: '🐳' },
  { id: 'security-best-practices', label: 'Security & Best Practices', icon: '🔐' },
];

export const MICROSERVICES_INTERVIEW_QUESTIONS = [
  // ---------------- 1. Microservices Fundamentals (1-8) ----------------
  {
    id: 'ms-what-are-microservices',
    category: 'fundamentals',
    question: 'What are Microservices?',
    answer:
      'Microservices is an architectural style where an application is built as a collection of **small, independent services**, each running in its own process and communicating with each other over a network — usually via lightweight HTTP/REST APIs or message brokers. Each service owns a specific business capability and can be developed, deployed, and scaled independently of the others.',
  },
  {
    id: 'ms-monolith-vs-microservices',
    category: 'fundamentals',
    question: 'Monolith vs Microservices — what is the core difference?',
    answer:
      'A **monolith** is a single deployable unit with one codebase, one database, and tight coupling between modules — simple to start, but harder to scale and one failure can bring down the whole app. **Microservices** split the same application into multiple independent services, each with its own database (loose coupling), that can be scaled and deployed separately, and where a failure in one service doesn\'t directly affect the others.',
  },
  {
    id: 'ms-advantages',
    category: 'fundamentals',
    question: 'What are the advantages of Microservices?',
    answer:
      'Key advantages: **scalability** (scale only the services under load), **independent deployment** (ship one service without redeploying everything), **fault isolation** (one service crashing doesn\'t take down the system), **technology diversity** (each service can use the best-fit stack), **better team productivity** (teams own a service end-to-end), and **reusability of services** across different consumers.',
  },
  {
    id: 'ms-challenges',
    category: 'fundamentals',
    question: 'What are the challenges of Microservices?',
    answer:
      'Microservices trade simplicity for independence. Common challenges: **complexity in development** (many moving parts), **distributed system issues** (partial failures, consistency), **network latency** (every call crosses a network), **data consistency** across services with separate databases, **monitoring & logging** across dozens of services, and **deployment & infrastructure management** (orchestration, service discovery, config).',
  },
  {
    id: 'ms-service-independence',
    category: 'fundamentals',
    question: 'What does "Service Independence" mean in a microservices architecture?',
    answer:
      'Each microservice should be **independently deployable and independently scalable** — you can change, build, test, and deploy one service without coordinating a release with every other service. This requires services to be **loosely coupled** (communicating through well-defined APIs, not shared internals) and to **own their own data**, so no other service reaches directly into their database.',
  },
  {
    id: 'ms-database-per-service',
    category: 'fundamentals',
    question: 'Why does each microservice need its own database ("Database per Service")?',
    answer:
      'Giving each service its own database keeps services **loosely coupled** — no service can be broken by another service\'s schema migration, and each service can pick the datastore that fits its data (SQL, NoSQL, etc.). The trade-off is that you lose cross-service ACID transactions and joins, which is why patterns like the **Saga pattern**, **CQRS**, and **eventual consistency** exist — to coordinate data across services without a shared database.',
  },
  {
    id: 'ms-bounded-context',
    category: 'fundamentals',
    question: 'What is a Bounded Context?',
    answer:
      'A **Bounded Context** (from Domain-Driven Design) is an explicit boundary within which a particular domain model — its terms, rules, and entities — applies consistently. In microservices, each service is typically built around one bounded context: "Order" means one specific thing inside the Order Service, and a different service can have its own distinct model of "Order" for its own purposes without conflict.',
  },
  {
    id: 'ms-ddd',
    category: 'fundamentals',
    question: 'What is Domain-Driven Design (DDD) and how does it relate to Microservices?',
    answer:
      'DDD is an approach to software design that models software around the **real-world business domain** — its entities, rules, and language — rather than around technical layers. It\'s the primary technique used to **decompose a monolith into microservices**: you identify bounded contexts (e.g. Order, Payment, Inventory) within the domain, and each bounded context becomes a natural candidate for its own microservice.',
  },

  // ---------------- 2. API Gateway (9-14) ----------------
  {
    id: 'ms-what-is-api-gateway',
    category: 'api-gateway',
    question: 'What is an API Gateway?',
    answer:
      'An **API Gateway** is a single entry point that sits in front of all your microservices. It receives every incoming client request, routes it to the appropriate microservice, and can aggregate or transform the response before sending it back — acting as a **middleware** between clients and services so clients never need to know each service\'s address directly.',
  },
  {
    id: 'ms-api-gateway-benefits',
    category: 'api-gateway',
    question: 'What are the benefits of using an API Gateway?',
    answer:
      'An API Gateway gives you a **single entry point** for all clients, **hides the internal architecture** (clients don\'t know how many services exist or where they live), **improves security** by centralizing authentication/authorization at the edge, **centralizes cross-cutting concerns** like logging and rate limiting so they aren\'t duplicated in every service, and makes the whole system **easier to manage and monitor**.',
  },
  {
    id: 'ms-request-routing',
    category: 'api-gateway',
    question: 'How does Request Routing work at the API Gateway?',
    answer:
      'The gateway inspects each incoming request (typically the path, e.g. `/users/**` or `/orders/**`) and forwards it to the matching backend service, often resolving the service\'s actual network location via **service discovery** rather than a hardcoded address. In Spring Cloud Gateway, this is configured with **route predicates** (path/header matches) and a target URI, e.g. `uri: lb://USER-SERVICE`.',
  },
  {
    id: 'ms-load-balancing',
    category: 'api-gateway',
    question: 'How does Load Balancing work with an API Gateway?',
    answer:
      'When a microservice runs as **multiple instances**, the gateway (or a client-side load balancer like Ribbon / Spring Cloud LoadBalancer) picks which instance handles each request — typically round-robin or least-connections — so traffic is spread evenly and no single instance is overwhelmed. This is usually combined with **service discovery** (e.g. Eureka), so the load balancer always has an up-to-date list of healthy instances to choose from.',
  },
  {
    id: 'ms-rate-limiting',
    category: 'api-gateway',
    question: 'What is Rate Limiting and why is it done at the gateway?',
    answer:
      '**Rate limiting** caps how many requests a client can send in a given time window, protecting backend services from being overwhelmed by traffic spikes or abusive clients. Doing it at the **API Gateway** (rather than in every individual service) means the limit is enforced once, centrally, before a request ever reaches a microservice — commonly returning **HTTP 429 Too Many Requests** once the limit is exceeded.',
  },
  {
    id: 'ms-auth-at-gateway',
    category: 'api-gateway',
    question: 'Why handle Authentication at the Gateway instead of in each microservice?',
    answer:
      'Centralizing authentication at the gateway means every request is verified (e.g. a JWT is validated) **once**, at the edge, before it\'s allowed to reach any internal service — so individual services don\'t each need to re-implement token validation, and unauthenticated traffic never even reaches your business logic. Internal services can then trust a lightweight identity/claims header the gateway attaches, rather than re-validating credentials themselves.',
  },

  // ---------------- 3. Service Discovery (15-20) ----------------
  {
    id: 'ms-what-is-service-discovery',
    category: 'service-discovery',
    question: 'What is Service Discovery?',
    answer:
      '**Service Discovery** is the mechanism that lets microservices find and call each other **dynamically**, without hardcoding IP addresses and ports. Services **register** themselves (with their host/port) with a central registry on startup, and other services **look up** a target service by name to get a current, healthy instance to call — essential in environments where instances scale up/down and move around constantly.',
  },
  {
    id: 'ms-eureka-server',
    category: 'service-discovery',
    question: 'What is Eureka Server?',
    answer:
      '**Eureka** is Netflix\'s open-source service discovery server (part of Spring Cloud Netflix). Services register with the Eureka Server on startup and send periodic **heartbeats** to prove they\'re alive; consumers fetch the registry from Eureka to discover and call other services by name. If a service stops sending heartbeats, Eureka eventually removes it from the registry so traffic stops being routed to it.',
  },
  {
    id: 'ms-client-side-discovery',
    category: 'service-discovery',
    question: 'What is Client-Side Discovery?',
    answer:
      'In **client-side discovery**, the calling service itself queries the service registry (e.g. Eureka) to get the list of available instances, and then **picks one and load-balances the call itself** (e.g. via Ribbon or Spring Cloud LoadBalancer). This puts the discovery and balancing logic in every client, but avoids an extra network hop through a dedicated load balancer.',
  },
  {
    id: 'ms-server-side-discovery',
    category: 'service-discovery',
    question: 'What is Server-Side Discovery?',
    answer:
      'In **server-side discovery**, the client simply sends its request to a well-known endpoint (like a load balancer or API Gateway), and that intermediary is responsible for querying the service registry and routing the request to a healthy instance. The client stays completely unaware of service discovery — e.g. an AWS ELB or a Kubernetes Service performing server-side discovery/routing.',
  },
  {
    id: 'ms-health-checks',
    category: 'service-discovery',
    question: 'Why are Health Checks important in microservices?',
    answer:
      '**Health checks** are endpoints (e.g. `/actuator/health`) that report whether a service instance is running correctly and ready to serve traffic. Service registries, load balancers, and orchestrators (like Kubernetes) poll these endpoints to automatically **stop routing traffic to unhealthy instances** and to know when a service has recovered — without health checks, a crashed or degraded instance could keep receiving requests and failing them.',
  },
  {
    id: 'ms-service-registry',
    category: 'service-discovery',
    question: 'What is a Service Registry?',
    answer:
      'A **Service Registry** (e.g. Eureka, Consul, Zookeeper) is the central database of every currently-running service instance and its network location. Services **register** themselves on startup and **deregister** on shutdown; consumers **query** the registry to discover which instances of a target service exist right now — it\'s the foundation that makes dynamic scaling and failover possible without hardcoded addresses.',
  },

  // ---------------- 4. Communication (21-28) ----------------
  {
    id: 'ms-rest-vs-grpc',
    category: 'communication',
    question: 'REST vs gRPC — when would you choose each?',
    answer:
      '**REST** (over HTTP/JSON) is simple, human-readable, and universally supported — great for public APIs and browser clients. **gRPC** uses HTTP/2 and Protocol Buffers for a compact binary format, supporting streaming and code-generated strongly-typed clients — much higher performance, so it\'s preferred for **internal, high-throughput service-to-service calls** where both ends are services you control.',
  },
  {
    id: 'ms-synchronous-communication',
    category: 'communication',
    question: 'What is Synchronous Communication between microservices?',
    answer:
      '**Synchronous communication** is a request/response call (e.g. REST, gRPC) where the calling service **blocks and waits** for the response before continuing. It\'s simple to reason about and gives an immediate result, but it tightly couples the caller\'s availability to the callee\'s — if the downstream service is slow or down, the caller is affected too.',
  },
  {
    id: 'ms-asynchronous-communication',
    category: 'communication',
    question: 'What is Asynchronous Communication between microservices?',
    answer:
      '**Asynchronous communication** decouples services in time: a producer publishes a message/event (typically via a broker like Kafka or RabbitMQ) and moves on immediately, without waiting for the consumer to process it. This improves resilience and scalability — a slow or temporarily-down consumer doesn\'t block the producer — at the cost of **eventual consistency** instead of an immediate result.',
  },
  {
    id: 'ms-kafka-in-microservices',
    category: 'communication',
    question: 'What role does Kafka play in a microservices architecture?',
    answer:
      '**Kafka** is a distributed event-streaming platform used for **asynchronous, high-throughput communication** between services. Producers publish events to a **topic** (split into partitions for parallelism and scale); consumers (often organized into **consumer groups**) read those events independently, at their own pace — making Kafka ideal for event-driven architectures, activity streams, and decoupling producers from consumers entirely.',
  },
  {
    id: 'ms-rabbitmq-in-microservices',
    category: 'communication',
    question: 'What role does RabbitMQ play in a microservices architecture?',
    answer:
      '**RabbitMQ** is a traditional message broker built around **queues**: a producer publishes a message, RabbitMQ routes it (via an exchange) to one or more queues, and a consumer processes and acknowledges it, after which the message is removed. It\'s well suited to task queues, work distribution, and reliable point-to-point or fan-out messaging where per-message acknowledgement and routing flexibility matter more than raw throughput.',
  },
  {
    id: 'ms-event-driven-architecture',
    category: 'communication',
    question: 'What is Event-Driven Architecture?',
    answer:
      'In **Event-Driven Architecture (EDA)**, services communicate by **producing and consuming events** (facts about something that happened, like `OrderPlaced`) rather than calling each other directly. This gives loose coupling — producers don\'t need to know who (if anyone) is listening — high scalability, and natural support for adding new consumers later without changing the producer at all.',
  },
  {
    id: 'ms-message-queue',
    category: 'communication',
    question: 'What is a Message Queue and why use one?',
    answer:
      'A **Message Queue** lets a producer place a message on a queue and a consumer process it whenever it\'s ready, instead of the producer calling the consumer directly and waiting. This gives **decoupling** (services don\'t depend on each other\'s uptime or response time), **buffering** under load, and **reliability** — if a consumer is temporarily down, messages simply wait in the queue instead of being lost.',
  },
  {
    id: 'ms-dead-letter-queue',
    category: 'communication',
    question: 'What is a Dead Letter Queue (DLQ)?',
    answer:
      'A **Dead Letter Queue** is a separate queue/topic where messages are sent after they **repeatedly fail to be processed** (e.g. a malformed payload, a bug, or exhausted retries) — instead of retrying forever and blocking the rest of the queue. The DLQ lets you inspect, alert on, and reprocess these "poison pill" messages separately without losing them or stalling healthy traffic.',
  },

  // ---------------- 5. Resilience (29-36) ----------------
  {
    id: 'ms-circuit-breaker',
    category: 'resilience',
    question: 'What is the Circuit Breaker pattern?',
    answer:
      'A **Circuit Breaker** monitors calls to a downstream service and, once failures exceed a threshold, "trips" **open** — blocking further calls immediately (fast-fail) instead of letting them queue up and time out, giving the failing service room to recover. After a cooldown period it goes **half-open**, allows a few test requests through, and either closes again (service recovered) or re-opens (still failing). Implemented in Spring Boot via **Resilience4j** or the classic **Hystrix**.',
  },
  {
    id: 'ms-retry-pattern',
    category: 'resilience',
    question: 'What is the Retry pattern?',
    answer:
      'The **Retry** pattern automatically re-attempts a failed operation a limited number of times (often with **backoff** between attempts), on the assumption that many failures are **transient** — a brief network blip, a momentary overload — and will succeed on a subsequent try. It should always be paired with a maximum attempt count and ideally a circuit breaker, so retries don\'t pile onto an already-struggling service and make things worse.',
  },
  {
    id: 'ms-timeout',
    category: 'resilience',
    question: 'Why is a Timeout important when calling another microservice?',
    answer:
      'A **timeout** caps how long a caller will wait for a response before giving up and failing fast. Without one, a slow or hung downstream service can leave the caller\'s threads/connections **blocked indefinitely**, exhausting resources and causing the failure to cascade upstream — a timeout turns "hang forever" into "fail quickly and let a fallback or retry take over."',
  },
  {
    id: 'ms-bulkhead-pattern',
    category: 'resilience',
    question: 'What is the Bulkhead pattern?',
    answer:
      'Named after a ship\'s watertight compartments, the **Bulkhead** pattern **isolates resources** (thread pools, connection pools) per downstream dependency, so that if one dependency becomes slow or overloaded, it only exhausts its own allotted resources — it can\'t consume every thread in the application and take down calls to unrelated, healthy services too.',
  },
  {
    id: 'ms-distributed-tracing',
    category: 'resilience',
    question: 'What is Distributed Tracing and why do microservices need it?',
    answer:
      '**Distributed Tracing** follows a single request as it flows across multiple microservices, tagging it with a shared **trace ID** and a per-hop **span ID** (tools like **Zipkin**, **Jaeger**, or Spring Cloud Sleuth/Micrometer Tracing). Without it, debugging a slow or failing request that touched five services means grepping five separate log files; with it, you can see the full path and pinpoint exactly which hop was slow or failed.',
  },
  {
    id: 'ms-centralized-logging',
    category: 'resilience',
    question: 'What is Centralized Logging?',
    answer:
      '**Centralized logging** aggregates logs from every microservice instance into one searchable system (e.g. the **ELK stack** — Elasticsearch, Logstash, Kibana — or Loki/Grafana), instead of leaving them scattered across dozens of individual machines/containers. This lets you search and correlate logs across the whole system in one place, which is essential once you have more than a handful of service instances.',
  },
  {
    id: 'ms-correlation-id',
    category: 'resilience',
    question: 'What is a Correlation ID?',
    answer:
      'A **Correlation ID** is a unique identifier generated when a request first enters the system (typically at the API Gateway) and then **passed along through every downstream service call** for that request (usually via an HTTP header). By including it in every log line, you can filter centralized logs down to exactly the entries produced while handling one specific request — even across many services.',
  },
  {
    id: 'ms-monitoring',
    category: 'resilience',
    question: 'What does Monitoring cover in a microservices system?',
    answer:
      '**Monitoring** tracks the ongoing health and performance of every service — request rates, error rates, latency, resource usage — typically exposed via metrics (e.g. Spring Boot **Actuator**, **Micrometer**) and visualized with **Prometheus + Grafana**. Combined with logging and tracing, it forms the three pillars of **observability**, letting you detect problems proactively instead of only hearing about them from users.',
  },

  // ---------------- 6. Deployment (37-44) ----------------
  {
    id: 'ms-docker',
    category: 'deployment',
    question: 'What role does Docker play in microservices?',
    answer:
      '**Docker** packages a microservice and all its dependencies into a lightweight, portable **container image**, so it runs identically on a developer\'s laptop, in CI, and in production. This solves the classic "works on my machine" problem and gives each microservice a consistent, isolated runtime — a natural fit for an architecture made of many independently-deployable services.',
  },
  {
    id: 'ms-docker-compose',
    category: 'deployment',
    question: 'What is Docker Compose used for?',
    answer:
      '**Docker Compose** lets you define and run a **multi-container application** — e.g. several microservices plus their databases and message brokers — from a single `docker-compose.yml` file, spinning them all up together with one command (`docker compose up`). It\'s primarily used for **local development and testing**, where a full microservices system needs to run on one machine.',
  },
  {
    id: 'ms-kubernetes',
    category: 'deployment',
    question: 'What is Kubernetes and why is it used with microservices?',
    answer:
      '**Kubernetes** is a container **orchestration platform**: it deploys, scales, and manages containerized microservices in production — handling scheduling containers onto nodes, restarting failed containers, load balancing, service discovery, and rolling out updates without downtime. It\'s the standard way to run a large number of independently-scaling microservices reliably at scale.',
  },
  {
    id: 'ms-horizontal-scaling',
    category: 'deployment',
    question: 'What is Horizontal Scaling?',
    answer:
      '**Horizontal scaling** handles increased load by adding **more instances** of a service (as opposed to **vertical scaling**, which gives one instance more CPU/RAM). Microservices are designed for horizontal scaling — since each service is independent and typically stateless, you can run 10 instances of just the overloaded service, load-balanced across them, without touching any other service.',
  },
  {
    id: 'ms-config-server',
    category: 'deployment',
    question: 'What is a Config Server?',
    answer:
      'A **Config Server** (e.g. Spring Cloud Config Server) centralizes configuration for every microservice — typically backed by a **Git repository** — so services fetch their settings from one place at startup instead of each managing its own config files. Config can be updated and, with **Spring Cloud Bus**, refreshed across every running instance at once, without a redeploy.',
  },
  {
    id: 'ms-cicd',
    category: 'deployment',
    question: 'Why is CI/CD especially important for microservices?',
    answer:
      '**CI/CD** (Continuous Integration / Continuous Deployment) automates building, testing, and deploying each service independently. With dozens of services being changed by different teams, manual builds and deployments don\'t scale — CI/CD pipelines let each service be tested and shipped on its own schedule, catching integration issues early and enabling the frequent, independent releases microservices are meant to provide.',
  },
  {
    id: 'ms-blue-green-deployment',
    category: 'deployment',
    question: 'What is Blue-Green Deployment?',
    answer:
      '**Blue-Green Deployment** runs two identical production environments — "blue" (current, live) and "green" (new version) — and switches all traffic from blue to green **instantly** once the green environment is verified healthy. This gives **zero-downtime releases** and an easy, instant rollback (just switch traffic back to blue) if something is wrong with the new version.',
  },
  {
    id: 'ms-rolling-deployment',
    category: 'deployment',
    question: 'What is Rolling Deployment?',
    answer:
      'A **Rolling Deployment** updates service instances **gradually**, a few at a time, rather than all at once — each old instance is drained and replaced with a new-version instance before moving to the next batch. This keeps the service available throughout the rollout (no full-environment switch needed like blue-green), at the cost of briefly running old and new versions side by side.',
  },

  // ---------------- 7. Security & Best Practices (45-50) ----------------
  {
    id: 'ms-jwt-authentication',
    category: 'security-best-practices',
    question: 'How does JWT Authentication work across microservices?',
    answer:
      'A **JWT (JSON Web Token)** is a signed, self-contained token issued after login, containing the user\'s identity and claims. The client sends it with every request (usually as a Bearer token); any service can **verify the signature and read the claims without calling back to an auth server**, making JWTs a natural fit for stateless authentication across many independent microservices.',
  },
  {
    id: 'ms-oauth2',
    category: 'security-best-practices',
    question: 'What is OAuth2 and how is it used in microservices?',
    answer:
      '**OAuth2** is an authorization framework that lets a user grant a client application limited access to their resources without sharing their password, via an **access token** issued by an Authorization Server. In microservices, an API Gateway or each service can validate the OAuth2 access token (often a JWT) on incoming requests, centralizing "who is allowed to do what" without every service implementing its own login flow.',
  },
  {
    id: 'ms-distributed-transactions',
    category: 'security-best-practices',
    question: 'Why are Distributed Transactions hard in microservices?',
    answer:
      'Because each microservice owns its **own database**, a single business operation that spans multiple services (e.g. placing an order touches Order, Payment, and Inventory) can\'t use one ACID database transaction to guarantee all-or-nothing. Classic distributed-transaction protocols like **two-phase commit** don\'t scale well across independent services, which is why microservices typically use patterns like **Saga** and **eventual consistency** instead.',
  },
  {
    id: 'ms-saga-pattern',
    category: 'security-best-practices',
    question: 'What is the Saga Pattern?',
    answer:
      'A **Saga** manages a business transaction that spans multiple services as a sequence of **local transactions**, each with a matching **compensating action** to undo it if a later step fails. In **choreography**, each service publishes events that trigger the next step; in **orchestration**, a central coordinator explicitly tells each service what to do next — both achieve eventual consistency without a distributed transaction.',
  },
  {
    id: 'ms-idempotency',
    category: 'security-best-practices',
    question: 'Why does Idempotency matter in microservices?',
    answer:
      'An **idempotent** operation produces the same result no matter how many times it\'s executed with the same input — critical because network retries, at-least-once message delivery, and duplicate Kafka messages mean the same request or event can arrive **more than once**. Services achieve idempotency with techniques like a unique **idempotency key**/event ID checked before processing, so a retried "charge $10" never charges the customer twice.',
  },
  {
    id: 'ms-best-practices',
    category: 'security-best-practices',
    question: 'What are some Microservices Best Practices to follow?',
    answer:
      'Keep each service focused on **one business capability** with its own database; design for failure with **circuit breakers, retries, and timeouts**; prefer **asynchronous communication** where the caller doesn\'t need an immediate answer; secure service-to-service calls (JWT/OAuth2, mTLS); version your APIs so consumers aren\'t broken by changes; and invest in **centralized logging, distributed tracing, and monitoring** from day one — observability gets much harder to retrofit once you have dozens of services running.',
  },
];

export function searchMicroservicesQuestions(query) {
  const q = query.trim().toLowerCase();
  if (!q) return MICROSERVICES_INTERVIEW_QUESTIONS;
  return MICROSERVICES_INTERVIEW_QUESTIONS.filter(
    (item) =>
      item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q),
  );
}
