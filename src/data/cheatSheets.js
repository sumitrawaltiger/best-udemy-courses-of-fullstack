// Cheat Sheets gallery — quick-reference images and PDFs for tools and topics.
// Each entry: { id, title, description, category, tags, image? , pdf? }
// Provide `image` for an image cheat sheet (with zoom) or `pdf` for a PDF one.
// Drop the file into public/cheatsheets/ with the matching filename.

export const CHEATSHEET_CATEGORIES = [
  { id: 'ai-genai', label: 'AI & Gen AI', icon: '🤖' },
  { id: 'api-tools', label: 'API & Tools', icon: '🛠️' },
  { id: 'languages', label: 'Languages', icon: '💻' },
  { id: 'javascript', label: 'JavaScript', icon: '🟨' },
  { id: 'css', label: 'CSS', icon: '🎨' },
  { id: 'python', label: 'Python', icon: '🐍' },
  { id: 'devops-cloud', label: 'DevOps & Cloud', icon: '☁️' },
  { id: 'git', label: 'Git & GitHub', icon: '🐙' },
  { id: 'kubernetes', label: 'Kubernetes', icon: '☸️' },
  { id: 'java', label: 'Java', icon: '☕' },
  { id: 'react', label: 'React', icon: '⚛️' },
  { id: 'sql', label: 'SQL & Databases', icon: '🗄️' },
  { id: 'system-design', label: 'System Design', icon: '📐' },
];

export const CHEAT_SHEETS = [
  {
    id: 'rag-workflow',
    title: 'RAG Workflow Cheatsheet',
    description:
      'A visual two-phase RAG reference. Phase 1 (one-time setup): load Documents → split into Chunks → create Embeddings → store in a Vector DB (Pinecone, Weaviate, Qdrant). Phase 2 (every query): convert the question to an embedding → semantic search the vector DB → retrieve the top-scored chunks → build a Final Prompt (system instructions + user question + retrieved context) → send to the LLM → get a grounded answer. Key notes: the LLM never searches the database itself — the application retrieves first, then passes context. "Documents" in RAG means any searchable info: source code, uploaded files, project docs, knowledge bases, wikis, or test metadata. Summary formula: Knowledge + Retrieval + Context + LLM = Better Answers.',
    category: 'ai-genai',
    image: '/cheatsheets/rag-workflow-cheatsheet.jpg',
    tags: ['RAG', 'Agentic AI', 'Vector DB', 'Embeddings', 'LangChain', 'Gen AI'],
  },
  {
    id: 'javascript-series-47',
    title: 'The JavaScript Series — 47 Illustrated Episodes',
    description:
      'A complete hand-drawn JavaScript journey in 47 one-page episodes. Starts with the history — the origins of JS, the Browser Wars, ECMAScript standardization, the Dark Ages, ES5 and the ES6+ game changer — then walks the language itself: variables, types, functions, arrays, objects, strings, scope, closures, this, prototypes, DOM & events, event delegation, async/await, promises, Fetch API, LocalStorage & SessionStorage, modules, iterators, generators, and finishes with how the JavaScript engine actually runs your code.',
    category: 'javascript',
    pdf: '/cheatsheets/javascript-series-47-episodes.pdf',
    tags: ['JavaScript', 'ES6+', 'DOM', 'Async', 'Fetch', 'JS Engine', '47 Episodes'],
  },
  {
    id: 'javascript-arrays',
    title: 'JavaScript Arrays Cheat Sheet',
    description:
      'A complete JavaScript arrays reference in 11 illustrated pages by @thedevspaceio (Full-Stack AI Developer Roadmap). Covers every array property and method in a quick-reference table — mutating vs non-mutating — then dives into each group with runnable code examples: creating arrays (Array.isArray(), Array.from(), Array.of()); adding & removing elements (.push(), .pop(), .unshift(), .shift(), .splice()); transforming arrays (.map(), .filter(), .reduce()); searching arrays (.includes(), .find(), .findIndex()); iterating arrays (.forEach(), .every(), .some()); ordering & joining (.sort(), .reverse(), .join()); and flattening arrays (.flat(), .flatMap()). Every method comes with a concise explanation and a clear code snippet.',
    category: 'javascript',
    pdf: '/cheatsheets/javascript-arrays-cheat-sheet.pdf',
    tags: ['JavaScript', 'Arrays', 'map', 'filter', 'reduce', 'splice', 'Methods'],
  },
  {
    id: 'javascript-numbers',
    title: 'JavaScript Numbers Cheat Sheet',
    description:
      'A complete JavaScript Numbers reference in 12 illustrated pages by @thedevspaceio (Full-Stack AI Developer Roadmap). Covers number creation (decimal, binary with `0b` prefix, octal with `0o` prefix, hexadecimal with `0x` prefix — common for colors, bitmasks, and low-level values), numeric separator (underscore `_` for readability: `1_000_000`), and BigInt (large integers with `n` suffix or `BigInt()` — cannot mix BigInt with Number in arithmetic). Parsing and converting: `Number(value)` converts to number (`null` → 0, `undefined` → NaN), `parseInt(str, radix)` parses string to integer supporting octal, hex, and binary via radix, `parseFloat(str)` parses string to floating number, and `num.toString(radix)` converts a number to string in any base. Important constants: `Number.MAX_VALUE`, `Number.MIN_VALUE`, `Number.MAX_SAFE_INTEGER` (9007199254740991), `Number.MIN_SAFE_INTEGER`, `Number.EPSILON` (difference between 1 and next float), `NaN` (Not-A-Number — the only value not equal to itself), `Infinity`, and `-Infinity`. Checking values: `Number.isNaN(value)` reliable NaN check, `Number.isFinite(value)` checks finite number, `Number.isInteger(value)` returns true for integers, `Number.isSafeInteger(value)` checks safe integer range. Rounding and formatting: `Math.round(x)` ties go toward +Infinity, `Math.floor(x)` rounds toward -Infinity, `Math.ceil(x)` rounds toward +Infinity, `Math.trunc(x)` removes fractional part, `num.toFixed(n)` returns string with exactly n decimal digits (rounded, zero-padded), `num.toExponential(fractionDigits)` scientific notation, `num.toPrecision(precision)` specified significant digits, `Intl.NumberFormat` locale-aware formatting for currencies and percentages. Math helpers: `Math.abs(x)`, `Math.max(...vals)`, `Math.min(...vals)`, `Math.pow(x, y)` same as `x ** y`, `Math.sqrt(x)` returns NaN for negatives, `Math.cbrt(x)` cube root, `Math.random()` pseudo-random in [0,1), `Math.hypot(...vals)` Euclidean norm, `Math.sign(x)` returns 1/-1/0/-0/NaN, `Math.imul(a, b)` 32-bit integer multiplication, `Math.fround(x)` converts to 32-bit single-precision float.',
    category: 'javascript',
    pdf: '/cheatsheets/javascript-numbers-cheat-sheet.pdf',
    tags: ['JavaScript', 'Numbers', 'Math', 'BigInt', 'parseInt', 'toFixed', 'Intl.NumberFormat'],
  },
  {
    id: 'javascript-objects',
    title: 'JavaScript Objects Cheat Sheet',
    description:
      'Every Object method at a glance — creating objects (object literals, Object.create()), accessing properties (dot/bracket notation, computed property names), iterating (keys(), values(), entries(), fromEntries()), copying & merging (spread syntax, Object.assign()), property descriptors (defineProperty(), getOwnPropertyDescriptor()), immutability helpers (freeze(), seal(), preventExtensions()), checking properties (hasOwn(), the in operator), and prototypes (getPrototypeOf(), setPrototypeOf()) — each with a runnable code example. By @thedevspaceio (Full-Stack AI Developer Roadmap).',
    category: 'javascript',
    pdf: '/cheatsheets/javascript-objects-cheat-sheet.pdf',
    tags: ['JavaScript', 'Objects', 'Object.keys', 'Prototypes', 'Immutability'],
  },
  {
    id: 'css-selectors',
    title: 'CSS Selectors Cheat Sheet',
    description:
      'Every CSS selector in one reference — basic selectors (universal, type, class, ID, attribute presence), combinators (descendant, child, adjacent & general sibling), attribute selectors (exact match, starts/ends with, contains), pseudo-classes (:hover, :focus, :nth-child(), :not() and more), pseudo-elements (::before, ::after, ::first-letter, ::selection), grouping & shorthand, and selector functions (:is(), :where(), :has(), :nth-child(an+b) formulas). By @thedevspaceio (Full-Stack AI Developer Roadmap).',
    category: 'css',
    pdf: '/cheatsheets/css-selectors-cheat-sheet.pdf',
    tags: ['CSS', 'Selectors', 'Pseudo-classes', 'Pseudo-elements', 'Combinators'],
  },
  {
    id: 'css-flexbox',
    title: 'CSS Flexbox Cheat Sheet',
    description:
      'Every core Flexbox property, with a live before/after example for each — display: flex/inline-flex; flex-direction (row, row-reverse, column, column-reverse); flex-wrap (nowrap, wrap, wrap-reverse) and the flex-flow shorthand; gap/row-gap/column-gap; order for reordering items; and the item-sizing trio flex-grow, flex-shrink, and flex-basis plus the flex shorthand that combines them. By @thedevspaceio (Full-Stack AI Developer Roadmap).',
    category: 'css',
    pdf: '/cheatsheets/css-flexbox-cheat-sheet.pdf',
    tags: ['CSS', 'Flexbox', 'flex-direction', 'flex-wrap', 'flex-grow', 'flex-shrink', 'flex-basis'],
  },
  {
    id: 'css-transforms',
    title: 'CSS Transforms Cheat Sheet',
    description:
      'Every CSS transform function at a glance — translateX()/translateY()/translate() for moving elements, scale()/scaleX()/scaleY() for resizing, rotate() for spinning around the transform origin, skewX()/skewY()/skew() for shearing, and matrix() for a full custom 2D transform — each with a visual before/after example and the matrix() parameter breakdown (a, b, c, d, tx, ty) mapped to the underlying 3x3 transform matrix. By @thedevspaceio (Full-Stack AI Developer Roadmap).',
    category: 'css',
    pdf: '/cheatsheets/css-transforms-cheat-sheet.pdf',
    tags: ['CSS', 'Transforms', 'translate', 'scale', 'rotate', 'skew', 'matrix'],
  },
  {
    id: 'css-justify-align',
    title: 'CSS Justify & Align Cheat Sheet',
    description:
      'Flexbox and Grid alignment side by side, visually — Flexbox horizontal alignment with justify-content (flex-start/end, center, space-between/around/evenly), Flexbox vertical alignment across wrapped lines with align-content, per-item cross-axis alignment with align-items (including baseline), plus the Grid equivalents: justify-content and justify-items for horizontal alignment, and align-content and align-items for vertical alignment (start/end/center/stretch/baseline) — every value shown as a labeled visual example. By @thedevspaceio (Full-Stack AI Developer Roadmap).',
    category: 'css',
    pdf: '/cheatsheets/css-justify-and-align-cheat-sheet.pdf',
    tags: ['CSS', 'Flexbox', 'Grid', 'justify-content', 'align-items', 'align-content'],
  },
  {
    id: 'python-ultimate',
    title: 'Python — The Ultimate Cheat Sheet',
    description:
      'A one-page Python quick reference — basics, data structures, operators, control flow, functions, common modules, file handling, list comprehensions, exceptions, and handy snippets.',
    category: 'python',
    image: '/cheatsheets/python-ultimate-cheat-sheet.jpeg',
    tags: ['Python', 'Basics', 'Reference'],
  },
  {
    id: 'python-for-loops',
    title: 'For Loops in Python',
    description:
      'Everything about Python for loops — syntax, iterating over lists, strings, tuples, dictionaries and range(), loop control (break, continue, pass), nested loops, and quick tips.',
    category: 'python',
    image: '/cheatsheets/python-for-loops-cheat-sheet.jpeg',
    tags: ['Python', 'For Loop', 'Iteration'],
  },
  {
    id: 'python-loops',
    title: 'Loops in Python',
    description:
      'A visual guide to Python loops — for vs while, syntax and examples, loop control statements, common use cases, nested loops, and a side-by-side for/while cheat sheet.',
    category: 'python',
    image: '/cheatsheets/python-loops-cheat-sheet.jpeg',
    tags: ['Python', 'Loops', 'While'],
  },
  {
    id: 'python-dsa',
    title: 'DSA in Python',
    description:
      'Data Structures & Algorithms in Python at a glance — core data structures, basic examples, common algorithms, time complexity, real-world uses, and quick tips.',
    category: 'python',
    image: '/cheatsheets/python-dsa-cheat-sheet.jpeg',
    tags: ['Python', 'DSA', 'Algorithms'],
  },
  {
    id: 'python-basics',
    title: 'Python Basics — Full Revision Notes',
    description:
      'A full revision sheet for Python fundamentals — what Python is, key features, syntax rules, keywords & identifiers, variables, data types overview, and exam tips.',
    category: 'python',
    image: '/cheatsheets/python-basics-revision-notes.jpeg',
    tags: ['Python', 'Basics', 'Revision'],
  },
  {
    id: 'python-lists',
    title: 'Python Lists',
    description:
      'Everything about Python lists — definition, key features, creating & accessing lists, indexing & slicing, list methods, list comprehension, and list vs tuple.',
    category: 'python',
    image: '/cheatsheets/python-lists-cheat-sheet.jpeg',
    tags: ['Python', 'Lists', 'Data Structures'],
  },
  {
    id: 'python-tuples',
    title: 'Python Tuples',
    description:
      'A complete Python tuples reference — definition, key features, creating & accessing tuples, common operations, methods, packing & unpacking, and tuple vs list.',
    category: 'python',
    image: '/cheatsheets/python-tuples-cheat-sheet.jpeg',
    tags: ['Python', 'Tuples', 'Immutable'],
  },
  {
    id: 'python-dictionaries',
    title: 'Python Dictionaries',
    description:
      'A complete Python dictionaries reference — definition, key features, creating & updating, common operations, methods, iterating, dict vs list, and revision points.',
    category: 'python',
    image: '/cheatsheets/python-dictionaries-cheat-sheet.jpeg',
    tags: ['Python', 'Dictionaries', 'Key-Value'],
  },
  {
    id: 'python-quick',
    title: 'Python Cheat Sheet — Quick Reference',
    description:
      'A one-page Python quick reference with code snippets — basics (print, variables, type, input), data types (list, tuple, set, dict), conditionals, loops, functions, classes, file operations, and error handling.',
    category: 'python',
    image: '/cheatsheets/python-quick-cheat-sheet.jpg',
    tags: ['Python', 'Reference', 'Snippets'],
  },
  {
    id: 'postman',
    title: 'Postman Cheat Sheet',
    description:
      'A quick reference for API testing with Postman — HTTP methods, requests, auth types, variables, pre-request & test scripts, status codes, and handy shortcuts.',
    category: 'api-tools',
    image: '/cheatsheets/postman-cheat-sheet.jpg',
    tags: ['Postman', 'API Testing', 'REST'],
  },
  {
    id: '25-api-concepts',
    title: '25 API Concepts — API Design',
    description:
      "A 25-concept API design reference by Tauseef Fayyaz. 1. Endpoint — a unique URL that names one resource; the path is the contract every client codes against. 2. HTTP Methods — GET, POST, PUT, PATCH and DELETE tell the server what to do with the resource in the URL. 3. Request-Response — the client asks, the server answers: headers, a status line, and a body, one round trip at a time. 4. Status Codes — three digits that say what happened: 2xx worked, 4xx the caller broke it, 5xx the server did. 5. Authentication — proves who is calling: credentials in, verified identity out, before any other logic runs. 6. Authorization — decides what that verified caller may touch; authentication is who, authorization is what they're allowed to do. 7. Access Tokens — short-lived credentials sent on every call, so passwords never travel and a leak expires fast. 8. OAuth 2.0 — lets an app act for a user without ever seeing the password; the user grants scoped access. 9. Rate Limiting — caps how many calls a client makes per window; over the line gets 429 instead of taking the API down. 10. Throttling — slows callers down rather than rejecting them: queue and drip-feed instead of dropping traffic. 11. Pagination — hands back a large result set a page at a time, so one query cannot exhaust memory or time out. 12. Caching — serves a stored copy of a response, cutting latency and taking repeated reads off the database. 13. Idempotency — sending the same request twice leaves the same result; safe retries stop double-charging customers. 14. Webhooks — the API calls you: it POSTs the event the moment it happens, so you stop polling for changes. 15. API Versioning — ships breaking changes on a new version while existing clients keep working on the old one. 16. OpenAPI — one machine-readable spec of the API that generates the docs, the client SDKs, and the mock server. 17. REST vs GraphQL — REST gives many fixed endpoints; GraphQL gives one endpoint where the client shapes the response. 18. API Gateway — a single front door that routes, authenticates, rate-limits, and observes traffic for every service. 19. Microservices — small services deployed on their own that talk only over APIs, never through a shared database. 20. Error Handling — errors in one predictable shape (code, message, field, hint), so clients can react instead of guessing. 21. gRPC — contract-first binary RPC over HTTP/2: smaller payloads and generated stubs for service-to-service calls. 22. WebSockets & SSE — holds the connection open so the server can push updates the instant they happen, no polling. 23. CORS — the browser rule for which origins may call your API; your response headers grant the permission. 24. Retries & Backoff — retry failed calls with growing, jittered delays so a blip recovers without stampeding the server. 25. Circuit Breaker — after repeated failures, stop calling a sick dependency and fail fast until it proves healthy again.",
    category: 'api-tools',
    image: '/cheatsheets/25-api-concepts.jpg',
    tags: ['API Design', 'REST', 'GraphQL', 'gRPC', 'Microservices'],
  },
  {
    id: 'linux-essential-commands',
    title: 'Linux Essential Commands',
    description:
      '25 essential Linux commands every developer should know — navigating the filesystem, working with files, searching, archiving, permissions, and managing processes.',
    category: 'devops-cloud',
    image: '/cheatsheets/linux-essential-commands.jpg',
    tags: ['Linux', 'CLI', 'Shell'],
  },
  {
    id: 'git-github',
    title: 'Git & GitHub Cheat Sheet',
    description:
      'A 14-page Git & GitHub datasheet — an introduction (what & why Git, its features, and GitHub), configuring Git for the first time, general features (init, staging, committing, status & log), git help, branching (create, list, switch, delete, merge), working with GitHub (push/pull repos and branches), and undoing changes (revert, reset, amend).',
    category: 'git',
    pdf: '/cheatsheets/git-github-cheat-sheet.pdf',
    tags: ['Git', 'GitHub', 'Branching', 'Version Control'],
  },
  {
    id: 'devops-notes-handbook',
    title: 'DevOps Notes — Illustrated Handbook',
    description:
      'An 8-page illustrated DevOps handbook covering the definition & introduction, DevOps architecture (People → Process → Tools), the continuous flow lifecycle (Plan → Code → Build → Test → Release → Deploy → Operate → Monitor), benefits of DevOps, and a DevOps tools reference (Git, GitHub, Jenkins, Docker, Kubernetes, Terraform, Ansible, Prometheus, Grafana).',
    category: 'devops-cloud',
    pdf: '/devops-notes/devops-notes-8-pages.pdf',
    tags: ['DevOps', 'Architecture', 'Lifecycle', 'CI/CD', 'Tools', 'Handbook'],
  },
  {
    id: 'devops',
    title: 'DevOps Cheat Sheet',
    description:
      'A comprehensive 286-page DevOps reference covering Linux and shell scripting, version control, CI/CD, infrastructure as code, containers, Kubernetes, cloud platforms, monitoring, security, and production workflows.',
    category: 'devops-cloud',
    pdf: '/cheatsheets/devops-cheat-sheet.pdf',
    tags: ['DevOps', 'CI/CD', 'Docker', 'Kubernetes', 'Cloud', '286 Pages'],
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes Cheat Sheet',
    description:
      '40 essential kubectl commands grouped by task — context & config, viewing resources, updating & creating, scaling, interacting with pods, and managing nodes & clusters.',
    category: 'kubernetes',
    image: '/cheatsheets/kubernetes-cheat-sheet.jpg',
    tags: ['Kubernetes', 'kubectl', 'k8s'],
  },
  {
    id: 'java',
    title: 'Java Cheat Sheet',
    description:
      'A comprehensive Java quick reference — syntax, data types, OOP, collections, streams, and core APIs, bundled as a downloadable PDF.',
    category: 'java',
    pdf: '/cheatsheets/java-cheat-sheet.pdf',
    tags: ['Java', 'Core Java', 'PDF'],
  },
  {
    id: 'java-interview',
    title: 'Java Interview Cheat Sheet',
    description:
      'A one-page interview quick reference — OOP concepts, collections, exception handling, multithreading, Java 8+ features, and design patterns at a glance.',
    category: 'java',
    image: '/cheatsheets/java-interview-cheat-sheet.png',
    tags: ['Java', 'Interview', 'OOP'],
  },
  {
    id: 'react',
    title: 'React 19 Cheat Sheet',
    description:
      'A React 19 quick reference — components, JSX, props & state, hooks, and the latest React 19 features, bundled as a downloadable PDF.',
    category: 'react',
    pdf: '/cheatsheets/react-cheat-sheet.pdf',
    tags: ['React', 'Hooks', 'PDF'],
  },
  {
    id: 'react-quickref',
    title: 'React Cheat Sheet — Quick Reference',
    description:
      'A concise React quick-reference covering components, JSX, props, state, hooks, and common patterns — a compact companion PDF.',
    category: 'react',
    pdf: '/cheatsheets/react-cheat-sheet-v2.pdf',
    tags: ['React', 'JSX', 'PDF'],
  },
  {
    id: 'abortcontroller-in-react',
    title: 'AbortController in React JS',
    description:
      "AbortController is a Web API that lets you abort (cancel) an in-flight fetch request — it prevents memory leaks, race conditions, and unnecessary state updates, by Ankur Singh Baghel. Why it matters: when the user navigates away, the component unmounts, or a new request is triggered, cancel the previous request before it completes. Without AbortController: typing 'r' → 're' → 'rea' fires three overlapping API calls; responses can arrive out of order, so an older response overwrites newer data and the UI ends up wrong. With AbortController: each keystroke aborts the previous in-flight request, so only the latest request is ever allowed to complete and update state. How to use in React (useEffect example): on every query change, create a new AbortController and pass its signal to fetch; in the effect's cleanup function, call controller.abort() so the previous request is cancelled before the next one starts or when the component unmounts; catch AbortError separately from real errors. Key benefits: prevents race conditions (only the latest response is used), saves bandwidth (cancels requests that are no longer needed), avoids memory leaks (no state updates on unmounted components), and gives a faster, more reliable UX. Common use cases: search suggestions, live auto-complete, data fetching on filter/sort/pagination, cancelling requests on route change, and preventing state updates on unmounted components. Pro tips: always handle AbortError separately in the catch block; AbortController works with fetch or any library that supports AbortSignal.",
    category: 'react',
    image: '/cheatsheets/abortcontroller-in-react.jpg',
    tags: ['React', 'AbortController', 'Fetch', 'useEffect', 'Hooks'],
  },
  {
    id: 'sql',
    title: 'SQL Cheat Sheet',
    description:
      'A visual SQL quick reference — basic commands, joins, indexing, CTEs, filtering, subqueries, transactions, window functions, set operations, views, aggregations, and triggers.',
    category: 'sql',
    image: '/cheatsheets/sql-cheat-sheet.jpg',
    tags: ['SQL', 'Database', 'Queries'],
  },
  {
    id: 'sql-intermediate',
    title: 'SQL Cheat Sheet — Intermediate Level',
    description:
      "A 12-section intermediate SQL quick reference by Vishakha Singhal. 1. Filtering Data — WHERE with comparisons, LIKE 'A%' (starts with) / LIKE '%son' (ends with), IN (...) / NOT IN (...) to match or exclude a list, and BETWEEN for date ranges. 2. Aggregate Functions — COUNT(*), COUNT(DISTINCT ...), SUM, AVG, MIN/MAX, GROUP BY, and HAVING to filter aggregated results. 3. JOINs — INNER, LEFT, RIGHT, FULL OUTER, and CROSS JOIN, each with a worked example. 4. Subqueries — IN, NOT IN, EXISTS, and scalar subqueries (a subquery returning a single value used inline, e.g. a per-row order count). 5. Set Operations — UNION (removes duplicates), UNION ALL (keeps duplicates), INTERSECT, and EXCEPT/MINUS. 6. Ordering & Limiting — ORDER BY (ASC/DESC, multi-column), LIMIT, and LIMIT with OFFSET for pagination. 7. Window Functions — ROW_NUMBER(), RANK(), and SUM() OVER (PARTITION BY ... ORDER BY ...) for running totals. 8. Common Table Expressions (CTE) — WITH ... AS (...) to name a subquery and join against it. 9. CASE Statement — conditional columns (e.g. classifying age into Minor/Adult/Senior). 10. Indexes — CREATE INDEX on single columns, with a note that indexes speed up searches but slow down writes. 11. Transactions — START TRANSACTION, UPDATE, and COMMIT for atomic multi-statement changes. 12. Useful Commands — SELECT, DESCRIBE, SHOW TABLES, ALTER TABLE ADD COLUMN, and DROP TABLE.",
    category: 'sql',
    image: '/cheatsheets/sql-cheat-sheet-intermediate.jpg',
    tags: ['SQL', 'Database', 'Joins', 'Window Functions', 'CTE'],
  },
  {
    id: 'system-design',
    title: 'System Design Cheat Sheet',
    description:
      'A one-page system design reference — the 5 pillars, a design approach, scale estimation, core components, high-level architecture, storage options, scaling strategies, consistency models, bottlenecks, design patterns, fault tolerance, the CAP theorem, worked examples, key metrics, and interview tips.',
    category: 'system-design',
    image: '/cheatsheets/system-design-cheat-sheet.jpg',
    tags: ['System Design', 'Architecture', 'Interview'],
  },
  {
    id: 'system-design-master-guide',
    title: 'System Design Master Guide — 72 Concepts',
    description:
      "A 10-page hand-drawn reference covering 72 system design concepts across 8 categories, from classic distributed systems through modern AI architecture, by Tauseef Fayyaz. 1–9 System Design Fundamentals: Scalability, Latency vs Throughput, Availability & SLO, Idempotency, REST, GraphQL, gRPC, WebSockets, Sync vs Async. 10–18 Traffic, Scaling & Caching: Load Balancing, API Gateway, Reverse Proxy, CDN, Caching, Cache Invalidation, Rate Limiting, Consistent Hashing, Service Discovery. 19–27 Data & Storage: SQL vs NoSQL, Indexing, Sharding, Replication, Denormalization, ACID Transactions, Write-Ahead Log, Object Storage, Bloom Filter. 28–36 Distributed Systems: CAP Theorem, Consistency Models, Quorum, Consensus, Leader Election, Message Queue, Pub/Sub, Event Sourcing, CQRS. 37–45 Resilience Patterns: Circuit Breaker, Retry with Backoff, Timeout, Bulkhead, Dead Letter Queue, Backpressure, Saga Pattern, Graceful Degradation, Chaos Engineering. 46–54 Ship & Operate: Blue-Green Deploy, Canary Release, Feature Flags, Monitoring & Alerting, Distributed Tracing, Correlation ID, Structured Logging, Health Checks, Observability. 55–63 AI System Architecture (Part 1): Vector Database, Embedding Model, RAG, Chunking, Hybrid Search, Semantic Cache, Prompt Engineering, Function Calling, MCP. 64–72 AI System Architecture (Part 2): AI Agent, Multi-Agent Systems, Guardrails, LLM Gateway, Fine-Tuning vs RAG, Inference Optimisation, Evals & LLM-as-Judge, LLM Observability, Human in the Loop. Every concept pairs a small diagram with a one-line takeaway.",
    category: 'system-design',
    pdf: '/cheatsheets/system-design-master-guide.pdf',
    tags: ['System Design', 'Distributed Systems', 'Resilience', 'AI Architecture', '72 Concepts'],
  },
  {
    id: 'system-design-failure-modes',
    title: '10 Must-know System Design Failure Modes',
    description:
      'The ten ways distributed systems break, each paired with its fix, by DesignGurus.io. 1. Single Point of Failure — any component without redundancy is a SPOF; fix with multiple instances and failover/redundancy. 2. Cascading Failure — a slow dependency makes every caller slow; fix with timeouts, circuit breakers, and bulkheads. 3. Retry Storm — many clients retry after a failure and flood a recovering service; fix with exponential backoff + jitter, a retry budget, and a circuit breaker. 4. Cache Stampede — many requests miss the same key and overwhelm the database; fix with request coalescing and refreshing popular keys before expiry. 5. Hot Partition — one shard gets most of the traffic due to a poor shard key; fix by choosing an even shard key and handling hot entities separately. 6. Replication Lag — a write on the primary has not yet reached the replica; fix by routing critical reads to the primary and tracking which replica is current per user. 7. Duplicate Processing — a retried request processes the same operation twice; fix with idempotency keys and returning the original result for a repeated key. 8. Queue Backlog — producers are faster than consumers and the queue grows without bound; fix with backpressure, bounded queues, and load shedding. 9. Poison Message — a bad message keeps failing and blocks the queue; fix by moving it to a dead-letter queue after N failures so the rest of the queue continues. 10. Split Brain — two nodes believe they are primary and both accept writes; fix with leader election, quorum/fencing, and preventing dual writers.',
    category: 'system-design',
    image: '/cheatsheets/system-design-failure-modes.jpg',
    tags: ['System Design', 'Failure Modes', 'Resilience', 'Distributed Systems'],
  },
  {
    id: 'top-20-low-latency-practices',
    title: 'Top 20 Low Latency Practices Every Engineer Should Know',
    description:
      "Twenty proven techniques for shaving latency off a request path, by Tauseef Fayyaz. 1. In-Memory Caching — serve hot data straight from RAM so the common request never reaches the database at all. 2. Database Indexing — an index turns a full table scan into a handful of page reads on the columns you filter by. 3. Connection Pooling — reuse warm connections instead of paying for a TCP and TLS handshake on every single call. 4. Payload Compression — Gzip or Brotli cuts bytes on the wire, and fewer bytes means fewer round trips to fill. 5. CDN Distribution — static assets served from a nearby edge location shave the speed of light off every fetch. 6. HTTP/2 Multiplexing — many streams share one connection, so a slow response no longer blocks everything behind it. 7. Request Batching — fold many small calls into one round trip and pay the network overhead a single time. 8. Async Message Queues — acknowledge immediately and push the slow work to a background worker off the request path. 9. Load Balancing — spread traffic across healthy instances so no single node queues requests behind a backlog. 10. Fewer External Calls — every third-party hop inherits someone else's worst day; cache or drop it from the hot path. 11. Edge Computing — run the logic itself at the edge so dynamic responses never cross an ocean to be built. 12. Efficient Serialization — binary formats like Protobuf encode and parse far faster than text, and ship fewer bytes. 13. Vertical Scaling — more CPU and memory on one box removes queueing delay without adding a network hop. 14. Lazy Loading — load only what is on screen; everything below the fold can wait until the reader scrolls. 15. Client-Side Rendering — ship data once and let the browser redraw locally instead of round-tripping for every view. 16. Prefetching — predict the next click and fetch it early, so the request is already finished when it happens. 17. Read Replicas — send reads to replicas so heavy queries stop competing with writes on the primary. 18. Denormalized Reads — precompute the join at write time so the read path is one lookup instead of five. 19. Hedged Requests — fire a second copy after a short delay and take whichever answer lands first; tail latency drops. 20. Colocate Services — keep chatty services and their data in the same region and zone; distance is pure latency.",
    category: 'system-design',
    image: '/cheatsheets/top-20-low-latency-practices.jpg',
    tags: ['System Design', 'Latency', 'Performance', 'Scalability'],
  },
  {
    id: 'networking',
    title: 'Networking Cheat Sheet',
    description:
      'A side-by-side networking reference mapping each core network element to its AWS, Azure, and Google Cloud equivalent — VPC / Virtual Network, subnets, load balancers, firewall / WAF, CDN, dedicated connectivity, VPN, DDoS protection, DNS, monitoring, security groups, route tables, and peering.',
    category: 'devops-cloud',
    image: '/cheatsheets/networking-cheat-sheet.jpg',
    tags: ['Networking', 'AWS', 'Azure', 'GCP'],
  },
];
