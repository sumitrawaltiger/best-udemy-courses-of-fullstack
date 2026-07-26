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
      lessons.push(lesson);
      interviewDay += 1;
    }
  }
  return lessons;
}

export const interviewLessons = buildLessons();
