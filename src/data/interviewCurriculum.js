// Interview Preparation — ChaiCode + GeeksForGeeks
// https://courses.chaicode.com/learn/home/all-in-one-interview-preparation

import { CHAICODE_INTERVIEW_URL } from './trackConfig.js';

const yt = (url, title, channel = 'freeCodeCamp') => ({ url, title, channel });

// ChaiCode DSA Labs — interactive playground to practice DSA puzzles.
const CHAICODE_DSA_LABS = {
  label: 'Practice DSA puzzles — ChaiCode DSA Labs',
  href: 'https://dsa.chaicode.com/',
  icon: '🧩',
};

// The DSA Roadmap — visual note (attached to the intro interview-prep lesson)
const DSA_ROADMAP_SECTIONS = [
  {
    id: 'dsa-roadmap',
    title: 'The DSA Roadmap',
    content:
      "A complete path from DSA fundamentals to full interview readiness, in 13 stages:\n\n**1. Foundations** — What is DSA (the study of organizing data and solving problems efficiently), Why DSA (improves problem-solving and coding interview performance), Time Complexity (measure execution time using Big-O notation), Space Complexity (measure memory usage), Big-O Notation (O(1), O(n), O(log n), O(n^2), O(2^n), O(n!)), Recursion Basics (a function calling itself).\n\n**2. Programming Basics** — Variables (store data), Data Types (int, float, string, boolean, etc.), Control Structures (if/else, switch), Loops (for, while, do-while), Functions (reusable blocks of code), Input/Output (handling user input and output).\n\n**3. Arrays** — Basics (store elements in contiguous memory), Traversal (access elements sequentially), Insertion & Deletion (add or remove elements), Searching (linear search, binary search), Two Pointers (optimize array problems), Sliding Window (efficient subarray problems).\n\n**4. Strings** — String Basics (a sequence of characters), Manipulation (concatenation, slicing, etc.), Pattern Matching (the KMP algorithm), Palindrome Problems (reverse and compare), Anagrams (frequency counting), String Hashing (efficient comparisons).\n\n**5. Linked Lists** — Types (singly, doubly, circular), Traversal (move through nodes), Insertion (beginning, middle, end), Deletion (remove nodes), Reversal (reverse a linked list), Cycle Detection (Floyd's Cycle Algorithm).\n\n**6. Stacks** — LIFO Principle (Last In, First Out), Operations (push, pop, peek, isEmpty), Applications (expression evaluation, parentheses matching, undo/redo systems).\n\n**7. Queues** — FIFO Principle (First In, First Out), Types (simple queue, circular queue, deque, priority queue), Operations (enqueue, dequeue, front, rear), Applications (scheduling, buffering, etc.).\n\n**8. Hashing** — Hash Tables (key-value storage), Hash Functions (map keys to indices), Collision Handling (chaining, open addressing), Applications (fast lookup, caching, counting).\n\n**9. Trees** — Binary Tree (hierarchical structure), Traversals (Inorder — L, R, root; Preorder — root, L, R; Postorder — L, R, root), BST/Heap (BST, Min-Heap, Max-Heap), Trie (efficient string storage).\n\n**10. Graphs** — Representation (adjacency list, adjacency matrix), Traversal (BFS — breadth-first search, DFS — depth-first search), Shortest Path (Dijkstra's algorithm, Bellman-Ford), MST (Prim's algorithm, Kruskal's algorithm), Topological Sort (directed acyclic graph, DAG).\n\n**11. Algorithmic Techniques** — Recursion (solve using smaller subproblems), Backtracking (try all possibilities, e.g. N-Queens), Greedy Algorithms (make locally optimal choices), Divide & Conquer (break into smaller parts, e.g. Merge Sort), Dynamic Programming (store results to avoid recomputation).\n\n**12. Sorting Algorithms** — Bubble Sort (simple but inefficient), Selection Sort (select the minimum element), Insertion Sort (build a sorted array), Merge Sort (divide and conquer), Quick Sort (partition-based sorting), Heap Sort (uses a heap structure).\n\n**13. Searching Algorithms** — Linear Search (check each element), Binary Search (divide the search space), Advanced Search (ternary search, exponential search).\n\n**Problem-solving strategy:** understand the problem (clarify requirements) → brute force approach (start with a simple solution) → optimize the solution (improve time and space complexity) → dry run (test with examples) → edge cases (handle all scenarios) → practice regularly (consistency is the key).\n\n**Platforms to practice:** LeetCode (interview problems), Codeforces (competitive programming), HackerRank (skills and challenges), GeeksforGeeks (tutorials and problems).\n\n**Final learning path:** learn basics (programming + Big-O) → master core DS (arrays, strings, linked lists) → learn trees & graphs (advanced structures) → practice algorithms (sorting, searching, DP, greedy, etc.) → solve problems daily (build consistency and speed) → prepare for interviews (mock tests and challenges).",
    image: '/interview-notes/dsa-roadmap.jpg',
    imageAlt:
      'DSA Roadmap — a 13-stage path: 1. Foundations (What is DSA, Why DSA, Time Complexity, Space Complexity, Big-O Notation, Recursion Basics), 2. Programming Basics (Variables, Data Types, Control Structures, Loops, Functions, Input/Output), 3. Arrays (Basics, Traversal, Insertion & Deletion, Searching, Two Pointers, Sliding Window), 4. Strings (String Basics, Manipulation, Pattern Matching, Palindrome Problems, Anagrams, String Hashing), 5. Linked Lists (Types, Traversal, Insertion, Deletion, Reversal, Cycle Detection), 6. Stacks (LIFO Principle, Operations, Applications), 7. Queues (FIFO Principle, Types, Operations, Applications), 8. Hashing (Hash Tables, Hash Functions, Collision Handling, Applications), 9. Trees (Binary Tree, Traversals, BST/Heap, Trie), 10. Graphs (Representation, Traversal, Shortest Path, MST, Topological Sort), 11. Algorithmic Techniques (Recursion, Backtracking, Greedy Algorithms, Divide & Conquer, Dynamic Programming), 12. Sorting Algorithms (Bubble, Selection, Insertion, Merge, Quick, Heap Sort), 13. Searching Algorithms (Linear, Binary, Advanced Search), plus a problem-solving strategy, platforms to practice (LeetCode, Codeforces, HackerRank, GeeksforGeeks), and the final learning path',
  },
  {
    id: 'time-complexity-vs-space-complexity',
    title: 'Time Complexity vs Space Complexity',
    content:
      "Understanding how algorithms trade execution time for memory usage.\n\n**Time Complexity** — measures how execution time grows as input size increases.\n- **Common notations:** `O(1)`, `O(log n)`, `O(n)`, `O(n log n)`, `O(n²)`.\n- **Examples:** Linear Search → `O(n)`; Binary Search → `O(log n)`.\n- **Goal:** faster execution.\n\n**Space Complexity** — measures how much extra memory an algorithm uses as input size increases.\n- **Common notations:** `O(1)`, `O(n)`, `O(n²)`.\n- **Examples:** in-place array operations → `O(1)`; storing a copy of data → `O(n)`.\n- **Goal:** lower memory usage.\n\n**Key takeaway:** the best algorithms balance both time and space based on the problem. Sometimes faster algorithms use more memory, while memory-efficient algorithms may take more time.",
    image: '/interview-notes/time-complexity-vs-space-complexity.jpg',
    imageAlt:
      'Time Complexity vs Space Complexity visual note — understanding how algorithms trade execution time for memory usage. Time Complexity: measures how execution time grows as input size increases, common notations O(1)/O(log n)/O(n)/O(n log n)/O(n²), examples (Linear Search → O(n), Binary Search → O(log n)), goal: faster execution. Space Complexity: measures how much extra memory an algorithm uses as input size increases, common notations O(1)/O(n)/O(n²), examples (in-place array operations → O(1), storing a copy of data → O(n)), goal: lower memory usage. Key takeaway: the best algorithms balance both time and space based on the problem',
  },
  {
    id: 'dsa-time-complexity-cheat-sheet',
    title: 'DSA Time Complexity Cheat Sheet for Interviews',
    content:
      "Big-O notation — how the time grows with input size (n), for every core data structure and algorithm.\n\n**1. Arrays** — Access `O(1)`, Search `O(n)`, Insert `O(n)`, Delete `O(n)`.\n\n**2. Strings** — Access `O(1)`, Search `O(n)`, Concat `O(n)`, Substring `O(n)`.\n\n**3. Linked List** — Access `O(n)`, Search `O(n)`, Insert at Head `O(1)`, Delete at Head `O(1)`, Insert/Delete at End `O(n)`.\n\n**4. Stack** — Push `O(1)`, Pop `O(1)`, Peek/Top `O(1)`, Is Empty `O(1)`.\n\n**5. Queue** — Enqueue `O(1)`, Dequeue `O(1)`, Front `O(1)`, Is Empty `O(1)`.\n\n**6. HashMap / HashSet** (average case) — Insert `O(1)`, Search `O(1)`, Delete `O(1)`, Contains `O(1)`. Worst case: `O(n)` (due to collisions).\n\n**7. Binary Search** — Search in Sorted Array `O(log n)`. Works on sorted data only.\n\n**8. Heap / Priority Queue** — Insert (Push) `O(log n)`, Delete (Pop) `O(log n)`, Peek (Top) `O(1)`, Heapify `O(n)`.\n\n**9. Trees (BST)** — Search `O(log n)` avg, Insert `O(log n)` avg, Delete `O(log n)` avg, Traversal (Inorder, Pre, Post) `O(n)`, Worst Case (Skewed Tree) `O(n)`.\n\n**10. Graph** — BFS Traversal `O(V + E)`, DFS Traversal `O(V + E)`, Space Complexity `O(V)`. (V = number of vertices/nodes, E = number of edges.)\n\n**11. Sorting Algorithms** (Best / Average / Worst / Space):\n- **Bubble Sort** — `O(n)` / `O(n²)` / `O(n²)` / `O(1)`.\n- **Selection Sort** — `O(n²)` / `O(n²)` / `O(n²)` / `O(1)`.\n- **Insertion Sort** — `O(n)` / `O(n²)` / `O(n²)` / `O(1)`.\n- **Merge Sort** — `O(n log n)` / `O(n log n)` / `O(n log n)` / `O(n)`.\n- **Quick Sort** — `O(n log n)` / `O(n log n)` / `O(n²)` / `O(log n)`.\n- **Heap Sort** — `O(n log n)` / `O(n log n)` / `O(n log n)` / `O(1)`.\n\n**12. Common Interview Algorithms** — Two Sum (HashMap) `O(n)`, Binary Search `O(log n)`, Sliding Window `O(n)`, Kadane's Algorithm `O(n)`, Longest Substring (No Repeat) `O(n)`, Merge Intervals `O(n log n)`.\n\n**13. Recursion — Quick Rules** — Single Recursive Call `O(n)`, Two Recursive Calls `O(2^n)`, Divide and Conquer `O(log n)` / `O(n log n)`, Multiple Recursive Calls (Exponential) `O(n^k)`, Backtracking `O(2^n)`.\n\n**Quick interview tips:**\n- Know the average case, but mention the worst case if asked.\n- For HashMap/HashSet, always mention average and worst case.\n- Focus on patterns: Hashing, Two Pointers, Sliding Window, Binary Search.\n- Practice identifying the right approach first!\n\n**Key takeaway:** Big O tells us how an algorithm scales as input (n) grows — lower is better!",
    image: '/interview-notes/dsa-time-complexity-cheat-sheet.jpg',
    imageAlt:
      'DSA Time Complexity Cheat Sheet for Interviews — Big-O notation for every core data structure and algorithm: Arrays, Strings, Linked List, Stack, Queue, HashMap/HashSet (with worst-case collisions), Binary Search, Heap/Priority Queue, Trees (BST) with skewed-tree worst case, Graph (BFS/DFS O(V+E)), a Sorting Algorithms table (Bubble/Selection/Insertion/Merge/Quick/Heap Sort — best/average/worst/space complexity), Common Interview Algorithms (Two Sum, Binary Search, Sliding Window, Kadane\'s Algorithm, Longest Substring, Merge Intervals), Recursion quick rules (single/two/divide-and-conquer/multiple recursive calls, backtracking), and quick interview tips ending with Big O tells us how an algorithm scales as input grows, lower is better',
  },
];

// Payment Service — System Design case study (attached to the fintech/e-commerce case-study lesson)
const PAYMENT_SERVICE_SECTIONS = [
  {
    id: 'payment-service-system-design',
    title: 'Payment Service — System Design',
    content:
      "A production-ready payment service architecture, modeled on patterns used at large e-commerce platforms (Amazon, Flipkart) — event-driven, idempotent, and built so the API never blocks on a slow payment gateway.\n\n**Payment flow, step by step:**\n1. **User initiates payment** — the Client/App (Web/Mobile) clicks Pay.\n2. **Cart Service calls Payment Service** — `PUT /api/v1/payment` with `userId`, `cart_session_id`, `amount`, `preferred_psp`.\n3. **Validate & create payment** — the Payment Orchestrator validates the request and creates a payment record in the Payments DB (Payment, Attempt, Refund, Outbox) with status `CREATED`.\n4. **Return payment_id** — Payment Service immediately returns `{payment_id: P123, status: CREATED}` to Cart Service, so the API responds fast without waiting on the PSP.\n5. **Write outbox record & publish event** — the Outbox Publisher writes an outbox record and publishes it as a Payment Requested event.\n6. **Consume payment requested event** — a Payment Processor Consumer picks it up from the Payment Processing Queue (Kafka topic).\n7. **Validations** — fraud detection, risk checks, amount/currency checks, and rate limiting.\n8. **Send payment request to preferred PSP** — the validated request is routed to the external PSP (PhonePe, Paytm, Amazon Pay, Razorpay).\n9. **Payment result callback (webhook)** — the PSP sends the final result back via the Callback Controller (`/payment/callback`).\n10. **Update payment status** — the Payment Status Updater marks the payment `SUCCESS` or `FAILED` in the Payments DB.\n11. **Publish payment details event** — pushed to the Payment Details Queue (Kafka topic).\n12. **Consume payment details event** — downstream consumers react independently: the Ledger Service Consumer updates ledger entries, accounting & balances; the Payout Service Consumer computes & updates payout for suppliers; the Cart Service Consumer marks the cart session closed and emits an event for order creation, which the Order Service picks up to create the order, and the Inventory Service reserves/deducts stock.\n\n**Datastores:**\n- **Payments DB (PostgreSQL)** — Payment, Attempt, Refund, Outbox.\n- **Ledger DB (PostgreSQL)** — double-entry ledger records.\n- **Payout DB (PostgreSQL)** — Payout, Settlement, Vendor details.\n- **Redis** — idempotency keys, rate limiting, locks, caching.\n\n**Key points:**\n- Idempotency using `cart_session_id`.\n- Outbox pattern for reliable event publishing.\n- Async processing using Kafka for scalability.\n- Callback (webhook) from the PSP ensures the final status.\n- Loose coupling between services.\n- High availability & fault tolerance.\n\n**Non-functional requirements:**\n- **Security** — PCI-DSS, TLS, data encryption.\n- **Reliability** — retries, DLQ, idempotency.\n- **Scalability** — horizontal scaling, auto scaling.\n- **Observability** — logs, metrics, tracing, alerts.\n- **Backup & DR** — Multi-AZ, backups, disaster recovery.\n\n**Key learnings:** event-driven architecture with Kafka; idempotent payment creation to avoid duplicate charges; webhooks for reliable payment confirmation; loose coupling using asynchronous messaging; the Outbox Pattern for reliable event publishing; a highly scalable and fault-tolerant design.\n\n**Why it matters:** the Payment Service doesn't block while waiting for the payment gateway. Instead, it responds quickly, processes payments asynchronously, and relies on callbacks/webhooks from the PSP to update the final status — making the entire system more resilient and scalable.",
    image: '/interview-notes/payment-service-system-design.jpg',
    imageAlt:
      'Payment Service — System Design: a 12-step payment flow diagram. Client/App clicks Pay → Cart Service calls Payment Service (PUT /api/v1/payment) → Payment Orchestrator validates & creates a payment in the Payments DB (status CREATED) → payment_id returned immediately → Outbox Publisher writes an outbox record & publishes a Payment Requested event to a Kafka Payment Processing Queue → Payment Processor Consumer runs validations (fraud detection, risk checks, amount/currency, rate limiting) → sends the payment request to a preferred external PSP (PhonePe, Paytm, Amazon Pay, Razorpay) → PSP sends a payment result callback/webhook → Callback Controller updates payment status (SUCCESS/FAILED) → Payment Status Updater publishes a payment details event to a Kafka Payment Details Queue → downstream consumers (Ledger Service, Payout Service, Cart Service) react independently, with Cart Service triggering Order Service and Inventory Service. Also shows the datastores (Payments DB, Ledger DB, Payout DB, Redis), key points (idempotency, outbox pattern, async Kafka processing, webhook callbacks, loose coupling, high availability), and non-functional requirements (security, reliability, scalability, observability, backup & DR).',
  },
];

// API Design — REST vs GraphQL vs gRPC (Backend Roadmap Part 1/11), attached
// to the API & Service Design lesson.
const API_DESIGN_SECTIONS = [
  {
    id: 'api-design-overview-and-rest',
    title: 'API Design — The Foundation of Modern Software',
    content:
      "APIs are the backbone of every modern application. Whether you're building a SaaS, mobile app, or a distributed system, choosing the right API style can make or break your product.\n\n**Why it matters:**\n- Enables communication between systems.\n- Impacts performance, scalability & security.\n- A good API = happy developers + users.\n- Key to building scalable products & integrations.\n\n**The 3 main API styles:**\n- **REST** — Simple, Stateless, Widely used.\n- **GraphQL** — Flexible, Efficient, Powerful.\n- **gRPC** — High Performance, Binary, great for Microservices.\n\n**REST (Representational State Transfer):** an architectural style that uses HTTP methods to perform operations on resources.\n\n**Key characteristics:** stateless, resource-based (nouns), uses standard HTTP methods, returns data in JSON/XML, easy to cache, widely used in web APIs.\n\n**REST example** — base URL `https://api.example.com`: `GET /users` → get all users, `GET /users/1` → get user by ID, `POST /users` → create user, `PUT /users/1` → update user, `DELETE /users/1` → delete user.\n\n**Request flow:** the Client (Web/Mobile App) sends an HTTP request (`GET /users`) to the REST API Server, which talks to the Database and sends back an HTTP response (JSON data).\n\n**Best for:** public APIs, simple CRUD operations, caching, small to medium scale applications.",
    code: "GET    /users      -> Get all users\nGET    /users/1    -> Get user by ID\nPOST   /users      -> Create user\nPUT    /users/1    -> Update user\nDELETE /users/1    -> Delete user",
  },
  {
    id: 'api-design-graphql',
    title: 'API Design — GraphQL',
    content:
      "**What is GraphQL?** A query language for APIs, and a runtime for executing those queries with your existing data.\n\n**Key characteristics:** the client asks for exactly what it needs, a single endpoint, reduces over-fetching & under-fetching, a strongly typed schema, evolvable & developer friendly.\n\n**Best for:** complex queries, multiple clients (mobile, web), and frequent changes in requirements.",
    code: "# Endpoint: https://api.example.com/graphql\n\n# Query\n{\n  user(id: 1) {\n    id\n    name\n    email\n    posts {\n      id\n      title\n    }\n  }\n}\n\n# Response\n{\n  \"user\": {\n    \"id\": 1,\n    \"name\": \"Vikash\",\n    \"email\": \"vikash@example.com\",\n    \"posts\": [\n      { \"id\": 10, \"title\": \"Post 1\" },\n      { \"id\": 11, \"title\": \"Post 2\" }\n    ]\n  }\n}",
  },
  {
    id: 'api-design-grpc',
    title: 'API Design — gRPC',
    content:
      "**What is gRPC?** A high-performance RPC framework developed by Google. It uses HTTP/2 and Protocol Buffers (binary) for communication.\n\n**Key characteristics:** high performance & low latency, uses Protocol Buffers (binary), HTTP/2 based, supports streaming (bi-directional), ideal for microservices communication, strongly typed contracts (`.proto` files).\n\n**How gRPC works:** the gRPC Client (Service A) talks to the gRPC Server (Service B) over HTTP/2 as the transport.\n\n**Best for:** microservices, internal services, real-time, high-performance systems.",
    code: "// .proto file (defines service & messages)\nservice UserService {\n  rpc GetUser (UserRequest) returns (UserResponse);\n}\n\nmessage UserRequest {\n  int32 id = 1;\n}\n\nmessage UserResponse {\n  int32 id = 1;\n  string name = 2;\n  string email = 3;\n}",
  },
  {
    id: 'api-design-rest-vs-graphql-vs-grpc',
    title: 'REST vs GraphQL vs gRPC — When to Use What',
    content:
      "**Feature-by-feature comparison:**\n- **Protocol** — REST: HTTP/1.1; GraphQL: HTTP/1.1; gRPC: HTTP/2.\n- **Data format** — REST: JSON/XML; GraphQL: JSON; gRPC: Protocol Buffers (binary).\n- **Endpoint** — REST: multiple; GraphQL: single; gRPC: multiple.\n- **Performance** — REST: medium; GraphQL: medium; gRPC: high.\n- **Over-fetching** — REST: high (possible); GraphQL: low (avoided); gRPC: low (efficient).\n- **Learning curve** — REST: low; GraphQL: medium; gRPC: high.\n- **Best use case** — REST: simple CRUD, public APIs; GraphQL: complex queries, flexible clients; gRPC: microservices, high performance.\n- **Caching** — REST: easy (HTTP caching); GraphQL: harder; gRPC: harder.\n- **Streaming** — REST: limited; GraphQL: subscriptions (real-time); gRPC: yes (bi-directional).\n- **Schema** — REST: not strict; GraphQL: strongly typed; gRPC: strongly typed.\n\n**No one size fits all** — choose the right tool based on your use case.\n\n**When to use REST:** you need simple, standard APIs; public APIs; caching is important; less frequent changes; easy adoption is a priority.\n\n**When to use GraphQL:** complex & flexible queries; multiple clients (mobile, web); frequent schema changes; need to reduce over/under-fetching.\n\n**When to use gRPC:** high performance & low latency; microservices communication; real-time streaming needed; working in a controlled environment.\n\n**Interview quick tips:**\n- REST is about resources & HTTP methods.\n- GraphQL is about asking the right data in one request.\n- gRPC is about fast, reliable & efficient service communication.\n- Understand trade-offs, not just definitions.\n\n**Remember:** great APIs don't just work — they are secure, scalable, and a joy to integrate.",
    image: '/interview-notes/api-design-rest-graphql-grpc.jpg',
    imageAlt:
      'API Design — Backend Roadmap Part 1/11, a 6-panel illustrated note. Panel 1: API Design overview (why it matters, the 3 main API styles: REST simple/stateless/widely used, GraphQL flexible/efficient/powerful, gRPC high performance/binary/great for microservices). Panel 2: REST (what it is, key characteristics, a REST example with GET/POST/PUT/DELETE endpoints, the client-server-database request/response flow, best for public APIs and simple CRUD). Panel 3: GraphQL (what it is, key characteristics, a GraphQL query and JSON response example, best for complex queries and multiple clients). Panel 4: gRPC (what it is, key characteristics, a .proto service/message example, how gRPC works client-to-server over HTTP/2, best for microservices). Panel 5: a REST vs GraphQL vs gRPC comparison table across protocol/data format/endpoint/performance/over-fetching/learning curve/best use case/caching/streaming/schema. Panel 6: when to use REST vs GraphQL vs gRPC, interview quick tips, and a reminder that great APIs are secure, scalable, and a joy to integrate.',
  },
];

// Traffic spike deep-dive — what breaks first and how to fix it,
// attached to the Scaling & Load Balancing lesson.
const WHAT_BREAKS_FIRST_SECTIONS = [
  {
    id: 'what-breaks-first',
    title: 'What Breaks First? — Traffic Spike from 10K to 1M RPM',
    content:
      "**Your API suddenly goes from 10K to 1M requests/minute. What breaks first — and how do you fix it?**\n\nWhen traffic spikes, components fail in a predictable cascade sequence:\n\n**1. API Servers — break first**\nThe sudden spike arrives at your API servers. They can't handle the load. **CPU and memory hit 100%**, requests start queuing, response times climb, and eventually the server crashes or starts rejecting connections.\n\n**2. Database — breaks second**\nWith API servers spawning many threads/processes, each one opens a DB connection. **Database connections are exhausted**. Queries slow down, connection pool is full, and new requests wait endlessly — or fail with \"too many connections.\"\n\n**3. Cache — breaks third**\nWith the DB slowing, more queries miss the cache (or the cache was never warm). **Cache miss rate skyrockets**. Every missed cache lookup hits the already-struggling DB, making the cascade worse. The cache becomes ineffective.\n\n**4. Message Queue — breaks fourth**\nIf you have background workers consuming from a queue, the producers (your API) add messages faster than consumers can process them. **The backlog grows rapidly**, consumers fall behind, and the queue balloons in memory/disk — or events start timing out.\n\n**5. Load Balancer / Network — breaks last**\nAll the connections from the above failing components saturate the load balancer and network layer. **Connections saturate**. The LB itself may run out of file descriptors or become a bottleneck. Timeouts spike everywhere.\n\n---\n\n**Reality:** Your **database and connection limits usually break first**, then everything else cascades.\n\nThis is the cascading failure pattern — one component slowing down creates backpressure that overwhelms the next component in the chain.\n\n---\n\n**How to Fix It — 7 Solutions:**\n\n**1. Scale Horizontally**\nAuto-scale API servers behind a load balancer. Use an auto-scaling group that detects CPU/memory spikes and spins up new instances within seconds. The load balancer distributes traffic evenly across all instances.\n\n**2. Protect the Database**\nAdd **connection pooling** (PgBouncer for PostgreSQL), **read replicas** to offload read traffic, and **indexes** on commonly queried columns. Offload heavy/analytical queries to a read replica or a data warehouse.\n\n**3. Cache Aggressively**\nUse a **CDN** (CloudFront, Akamai) for static content. **Cache API responses** for frequent reads using Redis or Memcached. Cache-aside pattern: check cache first, fetch from DB on miss, store in cache for next time.\n\n**4. Use Queues & Async**\nMove heavy processing out of the request path. **Message queues** (Kafka, RabbitMQ, SQS) decouple producers from consumers. API responds immediately (202 Accepted), and the work happens in the background — keeps API response times fast.\n\n**5. Rate Limit & Throttle**\nProtect your system from being overwhelmed. **Rate limiting** rejects or slows excessive requests before they consume resources. Implement per-user, per-IP, or per-API-key limits using Redis sliding windows or token buckets.\n\n**6. Monitor Everything**\nTrack **RPS, latency, error rates, DB connection pool size, queue depth, cache hit rate** — in real-time. Set up alerts so you know before customers call. Tools: Prometheus + Grafana, DataDog, CloudWatch.\n\n**7. Make it Resilient**\nAdd **timeouts** (don't let slow downstream services block threads), **retries with exponential backoff** (don't hammer a struggling service), **circuit breakers** (fail fast if a dependency is down), and **fallbacks** (serve stale cache, return a default response).\n\n---\n\n**High-Level Architecture — After Fix:**\n\n```\nUsers\n  ↓\nCDN (Static Content)\n  ↓\nLoad Balancer\n  ↓\nAuto-scaled API Servers ──→ Cache (Redis) ──→ Database\n                         └──→ Message Queue  ──→ Read Replicas\n```\n\n- CDN absorbs static traffic at the edge\n- Load balancer distributes across auto-scaled API servers\n- Cache sits in front of the DB (90%+ cache hit rate target)\n- Message queue absorbs write spikes asynchronously\n- Read replicas serve read-heavy traffic off the primary DB\n\n---\n\n**Interview Answer Framework:**\n\n1. **Identify the bottleneck order** — API servers → DB connections → cache → queue → network\n2. **DB and connection limits break first** (always mention this)\n3. **Fix at each layer** — scale compute, protect DB, cache, async queues, rate limiting, circuit breakers\n4. **Monitor** — you can't fix what you can't see\n5. **Design for failure** — assume any component can fail, build fallbacks",
    image: '/interview-notes/what_breaks_first.jpeg',
    imageAlt:
      'What Breaks First? — takeUforward. Three sections: (1) What Breaks First: a left-to-right cascade chain — API Servers (exclamation icon): can\'t handle the sudden spike, CPU & memory go 100%; → Database (exclamation): connections exhausted, queries slow down; → Cache (exclamation): miss rate skyrockets, cache becomes ineffective; → Message Queue (exclamation): backlog grows rapidly, consumers fall behind; → Load Balancer/Network (exclamation): connections saturate, timeouts spike. Reality callout: "Your database and connection limits usually break first, then everything else cascades." (2) How to Fix It — 7 solution cards: Scale Horizontally (auto-scale API servers behind a load balancer); Protect the Database (connection pooling, read replicas, indexes, offload heavy queries); Cache Aggressively (CDN for static content, cache responses and frequent reads); Use Queues & Async (move heavy work to background workers, keep API fast); Rate Limit & Throttle (protect your system, reject or slow excessive requests); Monitor Everything (track RPS, latency, errors, DB load, queue depth in real-time); Make it Resilient (timeouts, retries with backoff, circuit breakers, fallbacks). (3) High Level Architecture (after fix): Users → CDN (Static Content) → Load Balancer → Auto-scaled API Servers → Cache ↔ Database and Message Queue ↔ Read Replicas.',
  },
];

const PHASE_LESSONS = [
  {
    phase: 'DSA Foundations',
    paidUrl: CHAICODE_INTERVIEW_URL,
    items: [
      ['Introduction to Interview Prep', 'Your roadmap to cracking tech interviews', ['DSA + System Design', 'ChaiCode + GfG', 'Study schedule', 'Portfolio review']],
      ['Arrays & Strings', 'Two pointers, sliding window, and hashing', ['Array traversal', 'Two pointers', 'Sliding window', 'Hash maps']],
      ['Linked Lists', 'Singly, doubly, and cycle detection', ['Node operations', 'Reverse list', 'Floyd cycle', 'Merge lists']],
      ['Stacks & Queues', 'LIFO, FIFO, and monotonic stacks', ['Stack operations', 'Queue variants', 'Monotonic stack', 'Deque patterns']],
      ['Trees — BST & Traversals', 'DFS, BFS, and tree properties', ['Inorder/preorder/postorder', 'BST operations', 'Level order', 'Tree height']],
      ['Heaps & Priority Queues', 'Min-heap, max-heap, and top-K problems', ['Heapify', 'Priority queue', 'Top K elements', 'Merge K lists']],
      ['Graphs — BFS & DFS', 'Adjacency list, matrix, and traversal', ['Graph representation', 'BFS', 'DFS', 'Connected components']],
      ['Sorting & Searching', 'Binary search and sort algorithms', ['Binary search variants', 'Merge sort', 'Quick sort', 'Search in rotated array']],
      ['Recursion & Backtracking', 'Subsets, permutations, and combinations', ['Base cases', 'Subsets', 'Permutations', 'N-Queens intro']],
      ['DSA Foundations Lab', 'Solve 10 easy-medium GfG problems', ['Problem selection', 'Time complexity', 'Code on GfG', 'Review solutions']],
    ],
  },
  {
    phase: 'DSA Patterns & Practice',
    paidUrl: CHAICODE_INTERVIEW_URL,
    items: [
      ['Dynamic Programming — 1D', 'Memoization and tabulation basics', ['Overlapping subproblems', 'Fibonacci', 'Climbing stairs', 'House robber']],
      ['Dynamic Programming — 2D', 'Grid paths and string DP', ['Unique paths', 'Edit distance', 'LCS', 'Knapsack']],
      ['Greedy Algorithms', 'Activity selection and interval problems', ['Greedy choice', 'Interval scheduling', 'Jump game', 'Gas station']],
      ['Binary Trees Advanced', 'LCA, diameter, and path sums', ['Lowest common ancestor', 'Diameter', 'Path sum', 'Serialize tree']],
      ['Graph Algorithms', 'Dijkstra, topological sort, and Union-Find', ['Shortest path', 'Topo sort', 'Union-Find', 'Cycle detection']],
      ['Trie & Advanced Structures', 'Prefix trees and segment trees intro', ['Trie insert/search', 'Word search', 'Segment tree basics', 'Use cases']],
      ['Bit Manipulation', 'XOR tricks and bitmask DP', ['Bit operations', 'Single number', 'Subsets via bits', 'Counting bits']],
      ['GfG 160 — Arrays & Strings', 'Curated DSA problem set on GeeksForGeeks', ['GfG 160 track', 'Daily problems', 'Pattern tagging', 'Editorial review']],
      ['GfG 160 — Trees & Graphs', 'Medium-hard problem practice', ['Tree problems', 'Graph BFS/DFS', 'Timed practice', 'Complexity analysis']],
      ['DSA Mock Assessment', 'Timed coding test simulation', ['90-min mock', '2-3 problems', 'Self review', 'Weak area notes']],
    ],
  },
  {
    phase: 'System Design Fundamentals',
    paidUrl: CHAICODE_INTERVIEW_URL,
    items: [
      ['System Design & Scalability Foundations', 'HLD scope, requirements, and interview frameworks', ['Functional vs non-functional', 'PEDALS / RESHADED', 'Capacity estimation', 'API contracts & bottlenecks']],
      ['Scaling & Load Balancing', 'Horizontal scaling, load balancing, and trade-offs', ['Vertical vs horizontal', 'Round-robin / least-conn / IP hash', 'Sticky sessions & auto-scaling', 'Multi-region & CAP trade-offs']],
      ['Databases — SQL vs NoSQL', 'RDBMS vs NoSQL, ACID/BASE, CAP & PACELC', ['RDBMS vs NoSQL', 'ACID vs BASE', 'CAP & PACELC', 'When to choose which']],
      ['Database Scaling & Optimization', 'Indexing, sharding, replication & consistent hashing', ['Indexing & query optimization', 'Sharding & consistent hashing', 'Primary-replica & multi-leader', 'Connection pooling']],
      ['Caching Strategies', 'Cache patterns, eviction, invalidation & CDNs', ['Cache-aside / write-through / write-behind', 'Eviction & thundering herd', 'Invalidation taxonomy', 'Redis Cluster vs Memcached, CDN']],
      ['Messaging & Event-Driven Systems', 'RabbitMQ, Kafka, and async messaging', ['RabbitMQ / AMQP routing', 'Kafka partitions & consumer groups', 'Delivery guarantees', 'Dead letter queues']],
      ['Event Sourcing, CQRS & Saga', 'Event-driven data patterns for microservices', ['Event sourcing', 'CQRS', 'Saga pattern', 'Outbox & CDC (Debezium)']],
      ['API & Service Design', 'REST, GraphQL, gRPC & API gateway', ['REST / GraphQL / gRPC', 'Protocol Buffers', 'API gateway: routing, auth, rate limiting', 'Validation & error handling']],
      ['Real-Time Communication', 'WebSockets, SSE, webhooks & BFF', ['WebSockets & SSE', 'Long polling', 'Webhooks', 'BFF pattern']],
      ['GfG System Design — Foundations Lab', 'GeeksForGeeks live — apply fundamentals to case studies', ['Bitly URL shortener', 'Dropbox', 'Diagram & trade-off analysis', 'Scale estimates']],
    ],
  },
  {
    phase: 'System Design Case Studies',
    paidUrl: CHAICODE_INTERVIEW_URL,
    items: [
      ['Microservices & DDD', 'Microservices, bounded contexts, and service mesh', ['Microservices vs monolith', 'DDD bounded contexts', 'Strangler fig migration', 'Service mesh (Istio)']],
      ['Resilience & Fault Tolerance', 'Circuit breakers, retries, bulkheads & chaos', ['Circuit breaker', 'Retry with backoff & jitter', 'Bulkhead & graceful degradation', 'Chaos engineering']],
      ['Observability', 'Metrics, logs, traces, and SLOs', ['Prometheus + Grafana', 'Metrics / logs / traces', 'SLI / SLO / SLA', 'Error budgets']],
      ['Security & Compliance', 'Auth, zero-trust, and compliance', ['OAuth 2.0 / OIDC', 'mTLS & zero-trust', 'GDPR / SOC 2 / HIPAA', 'DDoS mitigation & WAF']],
      ['Cloud & DevOps for System Design', 'AWS, Kubernetes, CI/CD & serverless', ['AWS: EC2/ECS/Lambda/S3/RDS/CloudFront', 'CI/CD & DORA metrics', 'Kubernetes & GitOps (ArgoCD/Flux)', 'Serverless, edge & RAG']],
      ['Design URL Shortener & Rate Limiter', 'Bitly-scale redirects and distributed limits', ['Snowflake IDs & hashing', 'Redirect flow & analytics', 'Distributed rate limiter', 'Scale to billions']],
      ['Design Real-Time Chat (WhatsApp)', 'Real-time messaging at global scale', ['WebSockets & delivery', 'Redis Pub/Sub & Kafka fan-out', 'Presence & connections', 'Multi-region deployment']],
      ['Design Social Feed & Streaming', 'Instagram feed & YouTube-scale streaming', ['Feed generation & fan-out', 'Blob storage & CDN', 'Video upload & transcoding', 'YouTube Top-K system']],
      ['Design Notifications, Uber & Robinhood', 'Notification, ride-sharing & trading systems', ['Multi-channel notifications', 'Uber — matching & geolocation', 'Robinhood — trading', 'E-commerce architecture']],
      ['Capstone — Build 4 Production Systems', 'Design, build, and deploy end-to-end', ['URL shortener + productionize', 'Real-time chat + scale', 'AWS / Docker / K8s deploy', 'Portfolio & mock interview']],
    ],
  },
  {
    phase: 'ChaiCode Interview Preparation',
    paidUrl: CHAICODE_INTERVIEW_URL,
    items: [
      ['ChaiCode All-in-One Overview', 'Full stack interview prep course kickoff', ['Course modules', 'DSA track', 'System design', 'Mock interviews']],
      ['JavaScript Interview Deep Dive', 'Closures, prototypes, and event loop', ['Closures', 'this keyword', 'Event loop', 'Promises & async']],
      ['React & Next.js Interviews', 'Hooks, rendering, and performance', ['useState/useEffect', 'Virtual DOM', 'SSR vs CSR', 'Optimization']],
      ['Node.js & Backend Interviews', 'Express, APIs, and middleware', ['REST design', 'Auth patterns', 'Error handling', 'Scaling Node']],
      ['Database Interview Questions', 'SQL queries, indexing, and ORMs', ['JOINs', 'Indexes', 'Transactions', 'Prisma/Drizzle']],
      ['Cloud & DevOps Interviews', 'AWS, Docker, K8s interview topics', ['IAM & EC2', 'Docker vs VM', 'K8s pods & services', 'CI/CD pipelines']],
      ['Behavioral & HR Round', 'STAR method and culture fit', ['STAR framework', 'Leadership stories', 'Conflict resolution', 'Why this company']],
      ['Resume & LinkedIn Optimization', 'Stand out to recruiters', ['Resume format', 'Project bullets', 'LinkedIn headline', 'Portfolio links']],
      ['Salary Negotiation', 'Offer evaluation and negotiation tactics', ['Market research', 'Counter offers', 'Benefits package', 'Timing']],
      ['ChaiCode Mock Interview 1', 'Full-stack technical mock on ChaiCode', ['Live coding', 'System design question', 'Feedback session', 'Action items']],
    ],
  },
  {
    phase: 'Mock Interviews & Capstone',
    paidUrl: CHAICODE_INTERVIEW_URL,
    items: [
      ['GfG Interview Preparation Course', 'Product company interview track', ['Course overview', 'Company-specific prep', 'OA strategies', 'Onsite format']],
      ['Frontend Interview Marathon', 'HTML, CSS, JS, and React rapid fire', ['CSS layouts', 'JS tricky questions', 'React patterns', 'Accessibility']],
      ['Backend Interview Marathon', 'APIs, databases, and system design lite', ['API design', 'DB normalization', 'Caching', 'Auth']],
      ['Full Stack Project Walkthrough', 'Present your Thunder++ journey', ['Thunder projects', 'AWS/DevOps work', 'K8s labs', 'GitHub portfolio']],
      ['Company-Specific Prep — FAANG', 'Amazon LP, Google, Meta patterns', ['Leadership principles', 'Googleyness', 'Meta loops', 'Study resources']],
      ['Company-Specific Prep — Startups', 'Startup interview culture', ['Generalist role', 'Ownership stories', 'Fast iteration', 'Equity basics']],
      ['Open Assessment Practice', 'GeeksForGeeks OA simulation', ['Timed OA', 'Platform familiarity', 'Edge cases', 'Post-mortem']],
      ['ChaiCode Mock Interview 2', 'Senior-level mock with feedback', ['System design deep dive', 'Coding hard problem', 'Behavioral round', 'Scorecard']],
      ['Final Revision Week', 'Review weak areas across all tracks', ['DSA weak topics', 'System design gaps', 'Flashcards', 'Cheat sheets']],
      ['Interview Ready — Capstone', 'You are ready to apply and interview', ['Apply checklist', 'Referral strategy', 'Daily practice plan', 'Celebrate the journey']],
    ],
  },
];

function buildLessons() {
  const lessons = [];
  let interviewDay = 1;
  const defaultYt = yt(
    'https://www.youtube.com/watch?v=MtL3wZXxNhk',
    'Data Structures Easy to Advanced Course',
    'freeCodeCamp',
  );

  for (const { phase, paidUrl, items } of PHASE_LESSONS) {
    for (const [title, subtitle, topics] of items) {
      const lesson = {
        interviewDay,
        phase,
        title,
        subtitle,
        topics,
        paidLectureUrl: paidUrl,
        youtube: defaultYt,
      };
      // Attach the ChaiCode DSA practice playground to the DSA phases.
      if (phase === 'DSA Foundations' || phase === 'DSA Patterns & Practice') {
        lesson.extraLinks = [CHAICODE_DSA_LABS];
      }
      if (title === 'Introduction to Interview Prep') {
        lesson.sections = DSA_ROADMAP_SECTIONS;
      }
      if (title === 'Design Notifications, Uber & Robinhood') {
        lesson.sections = PAYMENT_SERVICE_SECTIONS;
      }
      if (title === 'API & Service Design') {
        lesson.sections = API_DESIGN_SECTIONS;
      }
      if (title === 'Scaling & Load Balancing') {
        lesson.sections = WHAT_BREAKS_FIRST_SECTIONS;
      }
      lessons.push(lesson);
      interviewDay += 1;
    }
  }
  return lessons;
}

export const interviewLessons = buildLessons();
